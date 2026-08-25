// Proteksi route: /notes dan /api/notes hanya bisa diakses yang sudah login.
import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/session";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const userId = token ? await verifySession(token) : null;
  const isApi = request.nextUrl.pathname.startsWith("/api/");

  if (!userId) {
    if (isApi) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/notes/:path*", "/api/notes/:path*"],
};
