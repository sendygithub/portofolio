// Session JWT — aman dipakai di middleware (edge runtime, tanpa node:crypto).
import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "notes_session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 hari

const rawSecret = process.env.SESSION_SECRET;
// Fail-closed: produksi WAJIB punya SESSION_SECRET. Tanpa itu, semua sesi ditolak
// (daripada pakai fallback publik yang bisa dipalsukan).
const SECRET = new TextEncoder().encode(
  rawSecret || (process.env.NODE_ENV === "production" ? "" : "dev-only-secret-jangan-pakai-di-produksi"),
);

function assertSecret() {
  if (SECRET.length === 0) {
    throw new Error("SESSION_SECRET belum diset di environment. Login dinonaktifkan.");
  }
}

export async function signSession(userId: number): Promise<string> {
  assertSecret();
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(SECRET);
}

/** Balikin userId kalau token valid, null kalau tidak. */
export async function verifySession(token: string): Promise<number | null> {
  try {
    assertSecret();
    const { payload } = await jwtVerify(token, SECRET);
    return typeof payload.userId === "number" ? payload.userId : null;
  } catch {
    return null;
  }
}
