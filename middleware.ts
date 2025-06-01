import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware for role-based authentication and route protection
 * Optimized to minimize redundant checks and request traffic
 */
export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const adminRoutes = [
        "/admin",
        "/admin/schedule",
        "/admin/routes",
        "/admin/analytics",
        "/admin/complaints",
        "/admin/users",
    ];

    const residentRoutes = [
        "/resident",
        "/resident/profile",
        "/resident/pickup",
        "/resident/logs",
        "/resident/complaints",
    ];

    const isAdminRoute = adminRoutes.some((route) =>
        pathname.startsWith(route),
    );
    const isResidentRoute = residentRoutes.some((route) =>
        pathname.startsWith(route),
    );

    if (
        pathname.startsWith("/api") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/static") ||
        pathname === "/favicon.ico"
    ) {
        return NextResponse.next();
    }

    const token = request.cookies.get("access_token")?.value;

    if (!token && (isAdminRoute || isResidentRoute)) {
        return Response.redirect(new URL("/login", request.url));
    }

    if (token) {
        try {
            const JWT_SECRET = new TextEncoder().encode(
                process.env.JWT_SECRET_KEY,
            );
            const verified = await jwtVerify(token, JWT_SECRET);
            const session = verified.payload;
            const userRole = session.role as "admin" | "resident";

            if (pathname === "/admin" && userRole === "admin")
                return NextResponse.next();
            if (pathname === "/resident" && userRole === "resident")
                return NextResponse.next();

            return NextResponse.next();
        } catch {
            const response = NextResponse.redirect(
                new URL("/login", request.url),
            );
            response.cookies.delete("access_token");
            response.cookies.delete("refresh_token");
            return response;
        }
    }
    return NextResponse.next();
}

// Configure the middleware to run only on relevant routes
// This reduces unnecessary middleware execution
export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
        "/admin/:path*",
        "/resident/:path*",
        "/login",
        "/register",
        "/verify-otp",
        "/",
    ],
};
