import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const isLoginPage = request.nextUrl.pathname === "/login";
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  try {
    const verifyRes = await fetch("http://localhost:5000/api/users/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!verifyRes.ok) {
      if (!isLoginPage) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      return NextResponse.next();
    }
    if (isLoginPage) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
