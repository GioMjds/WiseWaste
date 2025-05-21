import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware for role-based authentication and route protection
 * Optimized to minimize redundant checks and request traffic
 */
export async function middleware(request: NextRequest) {
    // Get the pathname from the request URL
    const { pathname } = request.nextUrl;

    // Define route groups
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
    const authRoutes = ["/login", "/register", "/verify-otp"];

    // Check which route type this request matches
    const isAdminRoute = adminRoutes.some((route) =>
        pathname.startsWith(route),
    );
    const isResidentRoute = residentRoutes.some((route) =>
        pathname.startsWith(route),
    );
    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

    // Skip middleware for API routes, static files, etc.
    // This reduces unnecessary processing
    if (
        pathname.startsWith("/api") ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/static") ||
        pathname === "/favicon.ico"
    ) {
        return NextResponse.next();
    }

    // Get the session token from cookies
    const token = request.cookies.get("access_token")?.value;

    // If no token and trying to access protected routes
    if (!token && (isAdminRoute || isResidentRoute)) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // If token exists, verify it and check roles
    if (token) {
        try {
            // JWT verification
            const JWT_SECRET = new TextEncoder().encode(
                process.env.JWT_SECRET_KEY ||
                    "your-secret-key-at-least-32-chars-long",
            );

            const verified = await jwtVerify(token, JWT_SECRET);
            const session = verified.payload;
            const userRole = session.role as "admin" | "resident";

            // Redirect from auth routes if already logged in
            if (isAuthRoute) {
                const redirectTo =
                    userRole === "admin" ? "/admin" : "/resident";
                return NextResponse.redirect(new URL(redirectTo, request.url));
            }

            // Role-based access control
            if (isAdminRoute && userRole !== "admin") {
                return NextResponse.redirect(new URL("/resident", request.url));
            }

            if (isResidentRoute && userRole !== "resident") {
                return NextResponse.redirect(new URL("/admin", request.url));
            }
        } catch {
            // Invalid token - clear it and redirect to login if accessing protected routes
            if (isAdminRoute || isResidentRoute) {
                const response = NextResponse.redirect(
                    new URL("/login", request.url),
                );
                response.cookies.delete("access_token");
                return response;
            }
        }
    }

    // Allow the request to proceed
    return NextResponse.next();
}

// Configure the middleware to run only on relevant routes
// This reduces unnecessary middleware execution
export const config = {
    matcher: [
        // Match protected routes
        "/admin/:path*",
        "/resident/:path*",
        // Match auth routes
        "/login",
        "/register",
        "/verify-otp",
    ],
};
