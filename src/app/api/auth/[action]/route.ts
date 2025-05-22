import { createSession, deleteSession } from "@/lib/auth";
import prisma from "@/lib/db";
import { otpStorage } from "@/utils/otpCache";
import { compare, hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { sendOtpEmail } from "../../send-email/email";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { action } = body;

        switch (action) {
            case 'logout': {
                const sessionId = request.cookies.get("access_token")?.value;
                if (!sessionId)
                    return NextResponse.json({
                        error: "No session found",
                    }, { status: 400 });

                await deleteSession();

                return NextResponse.json({
                    message: "Logged out successfully",
                }, { status: 200 });
            }
            case 'send_register_otp': {
                const { email, password, confirmPassword } = body;

                if (!email || !password || !confirmPassword) {
                    return NextResponse.json({
                        error: "Email, password and confirm password are required",
                    }, { status: 400 });
                }

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

                const existingUser = await prisma.users.findUnique({
                    where: { email },
                });

                if (existingUser) {
                    return NextResponse.json({
                        error: "User already exists",
                    }, { status: 400 });
                }

                const otp = Math.floor(100000 + Math.random() * 900000).toString();
                const hashedPassword = await hash(password, 12);

                otpStorage.set(email, otp, hashedPassword);

                await sendOtpEmail(email, otp);
                return NextResponse.json({
                    message: "OTP sent to email",
                    email: email,
                    otp: otp,
                }, { status: 200 });
            }
            case 'login': {
                const { email, password } = body;

                const user = await prisma.users.findUnique({
                    where: { email },
                });

                if (!email || !password) {
                    return NextResponse.json({
                        error: "Email and password are required",
                    }, { status: 400 });
                }

                if (!user) {
                    return NextResponse.json({
                        error: "User does not exist",
                    }, { status: 404 });
                }

                const isPasswordValid = await compare(password, user.password);
                
                if (!isPasswordValid) {
                    return NextResponse.json({
                        error: "Incorrect password",
                    }, { status: 401 });
                }

                await createSession(user.user_id, user.role);

                return NextResponse.json({
                    message: "Resident logged in successfully!",
                    user: {
                        id: user.user_id,
                        email: user.email,
                        role: user.role
                    }
                }, { status: 200 });
            }
            case 'verify_register_otp': {
                const { email, otp } = body;

                const validation = otpStorage.validate(email, otp);
                if (!validation.valid) {
                    return NextResponse.json({
                        error: validation.error,
                    }, { status: 400 });
                }

                const hashedPassword = validation.data?.hashedPassword;
                if (!hashedPassword) {
                    return NextResponse.json({
                        error: "No hashed password found",
                    }, { status: 400 });
                }

                let profileImageUrl;
                try {
                    const defaultImagePath = path.join(process.cwd(), 'public', 'Default_pfp.jpg');
                    const imageBuffer = fs.readFileSync(defaultImagePath);
                    const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

                    const uploadResponse = await cloudinary.uploader.upload(base64Image, {
                        folder: "wisewaste/profiles",
                        public_id: `user-${email.replace(/[@.]/g, "-")}`, // Create URL-safe ID from email
                        overwrite: true,
                        resource_type: "image"
                    });

                    profileImageUrl = uploadResponse.secure_url;
                } catch (CloudinaryError) {
                    console.error(`Error uploading image to Cloudinary: ${CloudinaryError}`);
                }

                const newUser = await prisma.users.create({
                    data: {
                        email: email,
                        password: hashedPassword,
                        profile_image: profileImageUrl
                    },
                });

                otpStorage.delete(email);
                await createSession(newUser.user_id, newUser.role);

                return NextResponse.json({
                    message: "User registered successfully",
                    user: {
                        id: newUser.user_id,
                        email: newUser.email,
                        role: newUser.role,
                        profile_image: newUser.profile_image,
                    }
                }, { status: 201 });
            }
            case 'resend_register_otp': {
                const { email } = body;

                if (!email) {
                    return NextResponse.json({ 
                        error: "Email is required"
                    }, { status: 400 });
                }

                const otpEntry = otpStorage.get(email);
                if (!otpEntry) {
                    return NextResponse.json({ 
                        error: "No OTP found for this email. Please register again."
                    }, { status: 400 });
                }

                const otp = Math.floor(100000 + Math.random() * 900000).toString();
                otpStorage.set(email, otp, otpEntry.hashedPassword);

                await sendOtpEmail(email, otp);

                return NextResponse.json({
                    message: "OTP resent to email",
                    email: email,
                    otp: otp,
                }, { status: 200 });
            }
            default: 
                return NextResponse.json({
                    error: "Invalid action",
                }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({
            error: `Internal Server Error: ${error}`,
        }, { status: 500 });
    }
}