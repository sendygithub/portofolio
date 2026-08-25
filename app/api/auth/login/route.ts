import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth";
import { SESSION_COOKIE, SESSION_MAX_AGE, signSession } from "@/lib/session";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { username, password } = body as { username?: string; password?: string };

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username dan password wajib diisi" },
        { status: 400 },
      );
    }

    const user = await prisma.user.findUnique({ where: { username } });
    if (!user || !verifyPassword(password, user.password)) {
      return NextResponse.json({ error: "Username atau password salah" }, { status: 401 });
    }

    const token = await signSession(user.id);
    const response = NextResponse.json({ ok: true, username: user.username });
    response.cookies.set(SESSION_COOKIE, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_MAX_AGE,
    });
    return response;
  } catch (error) {
    console.error("LOGIN error:", error);
    return NextResponse.json({ error: "Gagal login" }, { status: 500 });
  }
}
