/* eslint-disable @typescript-eslint/no-explicit-any */
import { SignJWT, jwtVerify, JWTPayload } from "jose";
import { cookies } from "next/headers";
import prisma from "./db";

const secretKey = process.env.JWT_SECRET_KEY;
const encodedKey = new TextEncoder().encode(secretKey);

interface SessionData extends JWTPayload {
  userId: number;
  role: string;
  email: string;
}

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
    const user = await prisma.users.findUnique({
      where: { user_id: userId },
      select: { email: true, role: true }
    });

    if (!user) throw new Error("User not found");

    const sessionData: SessionData = {
      userId,
      role: role,
      email: user.email,  
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
      name: 'access_token',
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      path: "/",
      sameSite: "strict"
    });

    cookieStore.set({
      name: 'refresh_token',
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "strict"
    });

    return sessionData;
  } catch (error) {
    console.error(`Error creating session: ${error}`);
    throw error;
  }
}

export async function deleteSession() {
  (await cookies()).delete("access_token");
}

export async function getSession(): Promise<SessionData | null> {
  try {
    const token = (await cookies()).get('access_token')?.value;
    if (!token) return null;

    try {
      const verified = await jwtVerify(token, encodedKey);
      return verified.payload as SessionData;
    } catch {
      (await cookies()).delete("access_token");
      return null;
    }
  } catch (error) {
    console.error(`Error getting session: ${error}`);
    return null;
  }
}

export async function isAuthenticated() {
  const session = await getSession();
  return !!session;
}

export async function hasRole(requiredRole: 'admin' | 'resident') {
  const session = await getSession();
  return session?.role === requiredRole;
}