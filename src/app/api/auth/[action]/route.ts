import { createSession, deleteSession } from "@/lib/auth";
import prisma from "@/lib/db";
import { otpStorage } from "@/utils/otpCache";
import { compare, hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { sendOtpEmail } from "../../send-email/email";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { action } = body;

        if (action === "logout") {
            const sessionId = request.cookies.get("access_token")?.value;
            if (!sessionId)
                return NextResponse.json(
                    {
                        error: "No session found",
                    },
                    { status: 400 },
                );

            await deleteSession();

            return NextResponse.json(
                {
                    message: "Logged out successfully",
                },
                { status: 200 },
            );
        }

        if (action === "send_register_otp") {
            const { email, password, confirmPassword } = body;

            if (!email || !password || !confirmPassword) {
                return NextResponse.json(
                    {
                        error: "Email, password and confirm password are required",
                    },
                    { status: 400 },
                );
            }

            if (!confirmPassword) {
                return NextResponse.json(
                    {
                        error: "Confirm password is required",
                    },
                    { status: 400 },
                );
            }

            if (password !== confirmPassword) {
                return NextResponse.json(
                    {
                        error: "Passwords do not match",
                    },
                    { status: 400 },
                );
            }

            const existingUser = await prisma.users.findUnique({
                where: { email },
            });

            if (existingUser) {
                return NextResponse.json(
                    {
                        message: "User already exists",
                    },
                    { status: 400 },
                );
            }

            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            const hashedPassword = await hash(password, 12);

            otpStorage.set(email, otp, hashedPassword);

            await sendOtpEmail(email, otp);
            return NextResponse.json(
                {
                    message: "OTP sent to email",
                    email: email,
                    otp: otp,
                },
                { status: 200 },
            );
        }

        if (action === "login") {
            const { email, password } = body;

            const user = await prisma.users.findUnique({
                where: { email },
            });

            if (!user) {
                return NextResponse.json(
                    {
                        error: "User not found",
                    },
                    { status: 401 },
                );
            }

            const isPasswordValid = await compare(password, user.password);
            if (!isPasswordValid) {
                return NextResponse.json(
                    {
                        error: "Incorrect password",
                    },
                    { status: 401 },
                );
            }

            await createSession(user.user_id);

            return NextResponse.json(
                {
                    message: "Resident logged in successfully!",
                    user: {
                        id: user.user_id,
                        email: user.email,
                    },
                },
                { status: 200 },
            );
        }

        if (action === "verify_register_otp") {
            const { email, otp } = body;

            const validation = otpStorage.validate(email, otp);
            if (!validation.valid) {
                return NextResponse.json(
                    {
                        error: validation.error,
                    },
                    { status: 400 },
                );
            }

            const hashedPassword = validation.data?.hashedPassword;
            if (!hashedPassword) {
                return NextResponse.json(
                    {
                        error: "No hashed password found",
                    },
                    { status: 400 },
                );
            }

            const newUser = await prisma.users.create({
                data: {
                    email: email,
                    password: hashedPassword,
                },
            });

            otpStorage.delete(email);
            await createSession(newUser.user_id);

            return NextResponse.json(
                {
                    message: "User registered successfully",
                },
                { status: 201 },
            );
        }

        return NextResponse.json(
            {
                error: "Invalid action",
            },
            { status: 400 },
        );
    } catch (error) {
        return NextResponse.json(
            {
                error: `Internal Server Error: ${error}`,
            },
            { status: 500 },
        );
    }
}
