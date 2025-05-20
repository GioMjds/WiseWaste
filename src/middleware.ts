import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function middleware(request: NextRequest) {
    const session = await getSession();
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
        "/dashboard",
        "/profile",
        "/request",
        "/logs",
        "/complaints",
    ];

    const authRoutes = ["/login", "/register", "/verify-otp"];

    const publicRoutes = ["/", "/about", "/contact", "/services"];
    const isPublicRoute = publicRoutes.some((route) => pathname === route);

    // Check if the current path is in one of our protected route arrays
    const isAdminRoute = adminRoutes.some((route) =>
        pathname.startsWith(route),
    );
    const isResidentRoute = residentRoutes.some((route) =>
        pathname.startsWith(route),
    );
    const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

    // No session, but trying to access protected routes
    if (!session && (isAdminRoute || isResidentRoute)) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // User is authenticated
    if (session) {
        const { role } = session;

        // Redirect authenticated users away from auth pages
        if (isAuthRoute) {
            return NextResponse.redirect(
                new URL(
                    role === "admin" ? "/admin" : "/dashboard",
                    request.url,
                ),
            );
        }

        // Resident trying to access admin routes
        if (role === "resident" && isAdminRoute) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }

        // Admin trying to access resident routes
        if (role === "admin" && isResidentRoute) {
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
