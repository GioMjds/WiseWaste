/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaAdapter } from "@auth/prisma-adapter";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { cookies } from "next/headers";
import prisma from "./db";

const secretKey = process.env.JWT_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

interface SessionData extends JWTPayload {
    userId: number;
    role: string;
    email: string;
}

export const { auth, signIn, signOut, handlers } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
});

export async function encrypt(payload: any) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1d")
        .sign(encodedKey);
}

export async function decrypt(token: string) {
    const { payload } = await jwtVerify(token, encodedKey, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function createSession(userId: number, role: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { email: true, role: true },
        });

        if (!user) throw new Error("User not found");

        const sessionData: SessionData = {
            userId,
            role: role,
            email: user.email!,
        };

        const accessToken = await new SignJWT(sessionData)
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("1d")
            .sign(encodedKey);

        const refreshToken = await new SignJWT({ userId })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .setExpirationTime("7d")
            .sign(encodedKey);

        const cookieStore = await cookies();

        cookieStore.set({
            name: "access_token",
            value: accessToken,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24,
            path: "/",
            sameSite: "strict",
        });

        cookieStore.set({
            name: "refresh_token",
            value: refreshToken,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
            sameSite: "strict",
        });

        return sessionData;
    } catch (error) {
        console.error(`Error creating session: ${error}`);
        return null;
    }
}

export async function getSessionCookiesToDelete() {
    return ["access_token", "refresh_token"];
}

export async function getSession(): Promise<SessionData | null> {
    try {
        const token = (await cookies()).get("access_token")?.value;
        if (!token) return null;

        try {
            const verified = await jwtVerify(token, encodedKey);
            return verified.payload as SessionData;
        } catch {
            return null;
        }
    } catch (error: any) {
        console.error(`Error getting session: ${error}`);
        return null;
    }
}

export async function getCurrentUser() {
    const session = await getSession();
    if (!session) return null;

    try {
        const user = await prisma.user.findUnique({
            where: { id: session.userId },
            select: {
                id: true,
                email: true,
                role: true,
                first_name: true,
                last_name: true,
                phone_number: true,
                address: true,
            },
        });

        return user;
    } catch (error) {
        console.error(`Error getting current user: ${error}`);
        return null;
    }
}
