import { decrypt } from "@/lib/auth";
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const accessToken = request.cookies.get("access_token")?.value;
        if (!accessToken)
            return NextResponse.json(
                {
                    error: "No session found",
                },
                { status: 401 },
            );

        const session = await decrypt(accessToken);

        if (!session?.userId) {
            return NextResponse.json(
                {
                    error: "Invalid session",
                },
                { status: 401 },
            );
        }

        const user = await prisma.user.findUnique({
            where: { id: Number(session.userId) },
            select: {
                id: true,
                email: true,
                role: true,
                profile_image: true,
                first_name: true,
                last_name: true,
            },
        });

        if (!user) {
            return NextResponse.json(
                {
                    error: "User not found",
                },
                { status: 401 },
            );
        }

        return NextResponse.json(
            {
                message: "User profile fetched successfully",
                user: {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    profile_image: user.profile_image,
                    first_name: user.first_name,
                    last_name: user.last_name,
                },
            },
            { status: 200 },
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

export async function PATCH(request: NextRequest) {
    try {
        const accessToken = request.cookies.get("access_token")?.value;
        if (!accessToken)
            return NextResponse.json(
                {
                    error: "No session found",
                },
                { status: 401 },
            );

        const session = await decrypt(accessToken);
        if (!session?.userId) {
            return NextResponse.json(
                {
                    error: "Invalid session",
                },
                { status: 401 },
            );
        }

        const body = await request.json();
        const { firstName, lastName, phone, address, profileImage } = body;

        const updateData = {} as {
            first_name?: string;
            last_name?: string;
            phone_number?: string;
            address?: string;
            profile_image?: string;
        };
        if (firstName) updateData.first_name = firstName;
        if (lastName) updateData.last_name = lastName;
        if (phone) updateData.phone_number = phone;
        if (address) updateData.address = address;
        if (profileImage) updateData.profile_image = profileImage;

        const updatedUser = await prisma.user.update({
            where: { id: Number(session.userId) },
            data: updateData,
            select: {
                id: true,
                email: true,
                role: true,
                profile_image: true,
                first_name: true,
                last_name: true,
                phone_number: true,
                address: true,
            },
        });

        return NextResponse.json(
            {
                message: "Profile updated successfully",
                user: updatedUser,
            },
            { status: 200 },
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
