// Auth helpers — khusus server (node runtime). Import dari lib/session.ts.
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySession } from "./session";

const SCRYPT_N = 16384;

// Format tersimpan: salt:hash — scryptSync(password, salt, 64)
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64, { N: SCRYPT_N, r: 8, p: 1 }).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(password, salt, 64, { N: SCRYPT_N, r: 8, p: 1 });
  return timingSafeEqual(candidate, Buffer.from(hash, "hex"));
}

/** Ambil userId dari cookie session (null kalau belum login). */
export async function getSessionUserId(): Promise<number | null> {
  const token = cookies().get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySession(token);
}
