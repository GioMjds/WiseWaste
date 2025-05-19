import { createSession, deleteSession } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { hash, compare } from "bcrypt";
import prisma from "@/lib/db";

export async function POST(request: NextRequest) {
    try {
        const { email, password, action } = await request.json();

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

        if (action === "register") {
            const { email, password, confirmPassword } = await request.json();

            if (!confirmPassword) {
                return NextResponse.json({
                    error: "Confirm password is required",
                }, { status: 400 });
            }

            if (password !== confirmPassword) {
                return NextResponse.json({
                    error: "Passwords do not match",
                }, { status: 400 });
            }

            const existingUser = await prisma.user.findUnique({
                where: { email },
            });

            if (existingUser) {
                return NextResponse.json({ 
                    message: "User already exists"
                }, { status: 400 });
            }

            const hashedPassword = await hash(password, 12);
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                },
            });
            await createSession(newUser.id);
            return NextResponse.json({
                message: "User created successfully",
            }, { status: 201 });
        }

        if (action === "login") {
            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                return NextResponse.json({
                    error: "User not found",
                }, { status: 401 });
            }

            const isPasswordValid = await compare(password, user.password);
            if (!isPasswordValid) {
                return NextResponse.json({
                    error: "Incorrect password",
                }, { status: 401 });
            }

            await createSession(user.id);

            return NextResponse.json({
                message: "Resident logged in successfully!",
                user: {
                    id: user.id,
                    email: user.email,
                },
            }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 },
        );
    }
}
