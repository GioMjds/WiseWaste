/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from "next/server";
import { getSession } from "./auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export type RoleType = "admin" | "resident";

/**
 * Server Component - Requires user to be authenticated
 */
export async function AuthRequired({ children }: { children: ReactNode }) {
    const session = await getSession();
    if (!session) redirect("/login");
    return <>{children}</>;
}

/**
 * Server Component - Requires user to be an admin
 */
export async function AdminRequired({ children }: { children: ReactNode }) {
    const session = await getSession();
    if (!session) redirect("/login");
    if (session.role !== "admin") redirect("/resident");
    return <>{children}</>;
}

/**
 * Server Component - Requires user to be a resident
 */
export async function ResidentRequired({ children }: { children: ReactNode }) {
    const session = await getSession();
    if (!session) redirect("/login");
    if (session.role !== "resident") redirect("/admin");
    return <>{children}</>;
}

/**
 * Server Component - Redirects authenticated users from auth pages
 */
export async function AuthRedirect({ children }: { children: ReactNode }) {
    const session = await getSession();
    if (session) redirect(session.role === "admin" ? "/admin" : "/resident");
    return <>{children}</>;
}

/**
 * API Route Protection - Generic auth check
 */
export function withAuth(handler: (req: NextRequest, session: any) => Promise<NextResponse>) {
    return async function (req: NextRequest) {
        const session = await getSession();

        if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        return handler(req, session);
    }
}

/**
 * API route protection - Admin only
 */
export function withAdminAuth(handler: (req: NextRequest, session: any) => Promise<NextResponse>) {
    return async function (req: NextRequest) {
        const session = await getSession();

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (session.role !== 'admin') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        return handler(req, session);
    };
}

/**
 * API route protection - Resident only
 */
export function withResidentAuth(handler: (req: NextRequest, session: any) => Promise<NextResponse>) {
    return async function (req: NextRequest) {
        const session = await getSession();

        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        if (session.role !== 'resident') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        return handler(req, session);
    };
}