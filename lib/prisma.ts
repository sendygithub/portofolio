import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import dns from "node:dns";
import net from "node:net";

// Fix WSL: happy-eyeballs nyoba IPv6 dulu (broken) → timeout. Paksa IPv4.
if (typeof net.setDefaultAutoSelectFamily === "function") {
  net.setDefaultAutoSelectFamily(false);
}
dns.setDefaultResultOrder("ipv4first");

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
