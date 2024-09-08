import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request) {

  const token = request.cookies.get("token")?.value;

  const url = new URL(request.url);

  if (token) {
    try {
      const decoded = jwtDecode(token);

      console.log(decoded);

      if (
        url.pathname.startsWith("/component/admin") &&
        decoded.role !== "admin"
      ) {
        return NextResponse.redirect(new URL("/component/home", request.url));
      }

      if (
        url.pathname.startsWith("/component/admin") &&
        decoded.role === "admin"
      ) {
        return NextResponse.next();
      }

      if (
        url.pathname.startsWith("/component/auth/signin") ||
        url.pathname.startsWith("/component/auth/signup") ||
        url.pathname === "/"
      ) {
        return NextResponse.redirect(new URL("/component/home", request.url));
      }

      if (decoded.role === "admin") {
        return NextResponse.next();
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (url.pathname.startsWith("/component/admin")) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (
      url.pathname.startsWith("/component/auth/signin") ||
      url.pathname.startsWith("/component/auth/signup")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/component/auth/:path*", "/component/admin/:path*", "/"],
};
