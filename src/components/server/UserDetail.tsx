'use server';

import { User } from "lucide-react";
import Image from "next/image";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/auth";
import prisma from "@/lib/db";

async function getUserProfileDirect() {
    const cookieStore = cookies();
    const token = (await cookieStore).get("access_token")?.value;

    if (!token) {
        console.log("No access token found in cookies");
        return null;
    }

    const session = await decrypt(token);

    if (!session?.userId) {
        console.log(`Invalid session data: ${session}`);
        return null;
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
        console.log(`User not found with ID: ${session.userId}`);
        return null;
    }

    return user;
}

export default async function UserDetail() {
    const user = await getUserProfileDirect();

    if (!user) {
        return (
            <div className="flex flex-col items-center py-6 border-b border-border-primary">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={32} className="text-gray-400" />
                </div>
                <div className="mt-2 text-center">
                    <p className="font-medium text-text-primary">Guest User</p>
                    <p className="text-sm text-text-secondary">Not signed in</p>
                </div>
            </div>
        );
    }

    const displayName = `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email;
    const shortEmail = user.email.length > 20
        ? `${user.email.substring(0, 20)}...`
        : user.email;

    return (
        <div className="flex flex-col items-center py-6 border-b border-border-primary">
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                {user.profile_image ? (
                    <Image
                        src={user.profile_image}
                        alt="Profile"
                        fill
                        sizes="64px"
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-base-green-light">
                        <User size={32} className="text-white" />
                    </div>
                )}
            </div>

            <div className="mt-2 text-center">
                <p className="font-medium text-text-primary">{displayName}</p>
                <p className="text-sm text-text-secondary truncate max-w-[200px]">{shortEmail}</p>
                <p className="capitalize">{user.role}</p>
            </div>
        </div>
    );
}