import { decrypt } from "@/lib/auth";
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const accessToken = request.cookies.get("access_token")?.value;
        if (!accessToken)
            return NextResponse.json({
                error: "No session found",
            }, { status: 401 });

        const session = await decrypt(accessToken);

        if (!session?.userId) {
            return NextResponse.json({
                error: "Invalid session",
            }, { status: 401 });
        }

        const user = await prisma.users.findUnique({
            where: { user_id: Number(session.userId) },
            select: {
                user_id: true,
                email: true,
                role: true,
                profile_image: true,
                first_name: true,
                last_name: true
            }
        });

        if (!user) {
            return NextResponse.json({
                error: "User not found",
            }, { status: 401 });
        }

        return NextResponse.json({
            message: "User profile fetched successfully",
            user: {
                id: user.user_id,
                email: user.email,
                role: user.role,
                profile_image: user.profile_image,
                first_name: user.first_name,
                last_name: user.last_name
            },
        }, { status: 200 });
    } catch (error) {
        return NextResponse.json({
            error: `Internal Server Error: ${error}`,
        }, { status: 500 });
    }
}
