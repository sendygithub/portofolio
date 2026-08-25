// Seed: buat user admin (password: 123) + contoh kategori & catatan.
// Jalankan: node --env-file=.env.local prisma/seed-user.mjs
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import dns from "node:dns";
import net from "node:net";

// Fix WSL: happy-eyeballs nyoba IPv6 dulu (broken) → timeout. Paksa IPv4.
if (typeof net.setDefaultAutoSelectFamily === "function") {
  net.setDefaultAutoSelectFamily(false);
}
dns.setDefaultResultOrder("ipv4first");

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const SCRYPT_N = 16384;

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64, { N: SCRYPT_N, r: 8, p: 1 }).toString("hex");
  return `${salt}:${hash}`;
}

// Format tersimpan: salt:hash (pakai scrypt yang sama dengan lib/auth.ts)
export function verifyPassword(password, stored) {
  const [salt, hash] = stored.split(":");
  const candidate = scryptSync(password, salt, 64, { N: SCRYPT_N, r: 8, p: 1 });
  return timingSafeEqual(candidate, Buffer.from(hash, "hex"));
}

async function main() {
  const username = "admin";
  const password = "123";

  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) {
    console.log(`User "${username}" sudah ada, seed contoh kategori tetap dijalankan.`);
  } else {
    await prisma.user.create({
      data: { username, password: hashPassword(password) },
    });
    console.log(`User "${username}" dibuat (password: ${password}).`);
  }

  const user = await prisma.user.findUniqueOrThrow({ where: { username } });

  // Contoh kategori + catatan (idempotent: hanya dibuat kalau user belum punya kategori)
  const existingCategories = await prisma.noteCategory.count({ where: { userId: user.id } });
  if (existingCategories === 0) {
    await prisma.noteCategory.create({
      data: {
        name: "terong zumba",
        position: 0,
        userId: user.id,
        notes: {
          create: [
            {
              title: "Progres Project",
              content: "Ketik progres project terong-zumba di sini.\n\nContoh:\n- [x] Refactor SoC hooks/ + types/\n- [ ] Deploy ulang ke Vercel\n- [ ] Tambah fitur absensi",
            },
            {
              title: "Data Login",
              content: "Catat data login & akses di sini.\n\nURL: https://terong-zumba.vercel.app\nEmail: ...\nPassword: ...",
            },
          ],
        },
      },
    });
    await prisma.noteCategory.create({
      data: {
        name: "shadcn",
        position: 1,
        userId: user.id,
        notes: {
          create: [
            {
              title: "Cara Install",
              content: "npx shadcn@latest init\nnpx shadcn@latest add button card input\n\nCatatan penting:\n- Butuh Tailwind CSS\n- Konfigurasi components.json",
            },
          ],
        },
      },
    });
    console.log("Kategori contoh dibuat: terong zumba, shadcn.");
  } else {
    console.log("User sudah punya kategori, lewati seed contoh.");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seed selesai ✅");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
