// Ekstraktor project Next.js — baca fakta penting dari tiap folder, tanpa masuk ke context LLM.
// Usage:
//   node --env-file=.env extract-projects.mjs            → dry-run (print summary)
//   node --env-file=.env extract-projects.mjs --write    → tulis ke database notes
//   node --env-file=.env extract-projects.mjs --write --only="tradernext,mygajah"
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import dns from "node:dns";
import net from "node:net";

// Fix WSL (sama seperti lib/prisma.ts)
if (typeof net.setDefaultAutoSelectFamily === "function") net.setDefaultAutoSelectFamily(false);
dns.setDefaultResultOrder("ipv4first");

const BASE = "/mnt/g/PROJECT/NEXT JS";
const SKIP_DIRS = new Set(["node_modules", ".git", ".next", ".vercel", "dist", "build", "vendor"]);
const SKIP_PROJECTS = new Set([
  "DEKSTOP", "TEMPLATE", "Project-buildwithangga", "starter", "logika-dasar",
  "react-laravel-golang", "next", "express", "fly", "tailwind-ui-components-main",
]);
const KNOWN = {
  "tradernext": "Paper trading terminal crypto — ticker tape, watchlist, chart, depth, order ticket, posisi/order/history, tab Calculator.",
  "mygajah": "HR (Human Resource DIV4) — auth + CRUD karyawan. Seed: admin@company.com/admin123.",
  "terong zumba": "Manajemen kelas zumba — jadwal, kelas, peserta. Sudah refactor SoC: hooks/ + types/ + lib/schedule.ts.",
  "prisma komputer": "Web bisnis Kia Komputer (a.k.a. Prisma Komputer) — jasa skripsi + servis IT Tangerang.",
  "andreansah": "Portfolio Denim Workwear + halaman catatan pribadi /notes (project ini sendiri).",
  "pos manajement inventory": "POS / manajemen inventory.",
  "online shop hijab": "Toko online hijab.",
  "rkk petshop": "Toko petshop.",
  "rkk pos": "POS (point of sale).",
  "bintang audio": "Website Bintang Audio.",
  "oday aquatic": "Website Oday Aquatic.",
  "buku kemendikdasmen pixelite main": "Buku/portal Kemendikdasmen (berbasis template Pixelite).",
  "orch dev shadcn drizzle typescript": "Project shadcn + drizzle + TypeScript (Orch Dev).",
  "orch dev shadcn drizzle ts login datakaryawan": "Orch Dev — login + data karyawan (shadcn, drizzle, TS).",
  "tempe kripik mbak sri": "Toko tempe kripik Mbak Sri.",
  "hotel terace": "Website hotel.",
  "project hotel3": "Website hotel.",
  "bimamaulana": "Portfolio Bima Maulana.",
  "rpsncsubang": "Website RPSN Cibalong Subang (rumah sakit).",
  "rs nusa indah": "Website RS Nusa Indah.",
  "portfolio sendy": "Portfolio Sendy (kemungkinan duplikat andreansah.vercel.app).",
  "portofolio sendy": "Portfolio Sendy (kemungkinan duplikat andreansah.vercel.app).",
};

function listDirs() {
  return readdirSync(BASE, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith(".") && !SKIP_PROJECTS.has(d.name))
    .map((d) => d.name)
    .sort();
}

function countFiles(dir, depth = 0) {
  if (depth > 4) return 0;
  let n = 0;
  try {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (SKIP_DIRS.has(e.name)) continue;
      if (e.isDirectory()) n += countFiles(join(dir, e.name), depth + 1);
      else n++;
    }
  } catch { /* skip */ }
  return n;
}

function readJson(dir, file) {
  try { return JSON.parse(readFileSync(join(dir, file), "utf8").replace(/^\uFEFF/, "")); } catch { return null; }
}

function maskDbUrl(raw) {
  if (!raw) return null;
  try {
    const u = new URL(raw.replace(/^postgres(ql)?:\/\//, "postgresql://"));
    return `postgres://${u.username ? u.username + ":***" : "***"}@${u.hostname}:${u.port || "5432"}/${u.pathname.split("/")[1] || ""}`;
  } catch { return null; }
}

function envKeys(dir) {
  const keys = [];
  for (const f of [".env", ".env.local"]) {
    const p = join(dir, f);
    if (!existsSync(p)) continue;
    for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
      const m = line.match(/^([A-Z0-9_]+)=/);
      if (m) keys.push(m[1]);
    }
  }
  return [...new Set(keys)];
}

function envValue(dir, key) {
  for (const f of [".env", ".env.local"]) {
    const p = join(dir, f);
    if (!existsSync(p)) continue;
    for (const line of readFileSync(p, "utf8").split(/\r?\n/)) {
      const m = line.match(new RegExp(`^${key}=(.*)$`));
      if (m) return m[1].trim().replace(/\r$/, "");
    }
  }
  return null;
}

function gitLog(dir) {
  try {
    return execFileSync("git", ["-C", dir, "log", "-1", "--format=%h %ad %s", "--date=short"], { encoding: "utf8", timeout: 5000, stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch { return null; }
}

function readmeHead(dir) {
  for (const f of ["README.md", "readme.md", "README.MD"]) {
    const p = join(dir, f);
    if (!existsSync(p)) continue;
    const raw = readFileSync(p, "utf8").replace(/\r/g, "").split("\n").filter((l) => !l.trim().startsWith("#") && l.trim()).slice(0, 3).join(" ").trim();
    return raw.length > 140 ? raw.slice(0, 140) + "…" : raw;
  }
  return "";
}

function detectStack(pkg) {
  const d = { ...pkg.dependencies, ...pkg.devDependencies };
  const has = (name) => Object.keys(d).some((k) => k === name || k.startsWith(name + "/"));
  const stack = [];
  if (has("next")) stack.push(`Next ${(d.next || "").replace(/[^0-9.]/g, "") || "?"}`);
  if (has("react")) stack.push("React");
  if (has("tailwindcss")) stack.push("Tailwind");
  if (has("@prisma/client") || has("prisma")) stack.push("Prisma");
  if (has("drizzle-orm")) stack.push("Drizzle");
  if (has("better-auth")) stack.push("better-auth");
  if (has("next-auth")) stack.push("NextAuth");
  if (has("zod")) stack.push("Zod");
  if (has("zustand")) stack.push("Zustand");
  if (has("framer-motion")) stack.push("Framer Motion");
  if (has("lucide-react")) stack.push("Lucide");
  if (has("shadcn")) stack.push("shadcn");
  if (has("@supabase")) stack.push("Supabase");
  if (has("pg")) stack.push("pg");
  if (has("@neondatabase") || has("@vercel/postgres")) stack.push("Neon/Vercel PG");
  if (has("jose")) stack.push("jose");
  if (has("sqlite3") || has("better-sqlite3")) stack.push("SQLite");
  if (has("express")) stack.push("Express");
  if (has("@tanstack/react-query")) stack.push("TanStack Query");
  return stack.join(", ") || "-";
}

function deployUrl(dir, name) {
  if (/\.vercel\.app$/i.test(name)) return `https://${name}`;
  const vercelJson = readJson(dir, "vercel.json");
  if (vercelJson?.name) return `https://${vercelJson.name}.vercel.app`;
  const proj = readJson(dir, ".vercel/project.json");
  return proj ? `vercel project: ${proj.projects?.[0]?.name || proj.name || "terhubung"}` : null;
}

function extract() {
  const projects = [];
  const pkgNames = new Map();
  for (const name of listDirs()) {
    const dir = join(BASE, name);
    const pkg = readJson(dir, "package.json");
    if (!pkg) continue; // bukan project node
    const hasApp = existsSync(join(dir, "app")) || existsSync(join(dir, "src/app")) || existsSync(join(dir, "pages"));
    const files = countFiles(dir);
    if (files < 5 && !hasApp) continue; // terlalu kecil / bukan project

    const dbUrl = maskDbUrl(envValue(dir, "DATABASE_URL") || envValue(dir, "POSTGRES_URL"));
    const commit = gitLog(dir);
    const display = name.replace(/\.vercel\.app$/i, "").replace(/-/g, " ").trim();
    // Duplikat sungguhan: nama package sama + jumlah file mirip (bukan cuma nama default yang kembar)
    const prev = pkgNames.get(pkg.name);
    const dupWith =
      prev && Math.abs((pkgNames.get(pkg.name + "_files") || 0) - files) / Math.max(files, 1) < 0.3
        ? prev
        : null;
    pkgNames.set(pkg.name, name);
    pkgNames.set(pkg.name + "_files", files);

    projects.push({
      folder: name,
      display,
      pkgName: pkg.name,
      dupWith: pkg.dupWith || null,
      stack: detectStack(pkg),
      scripts: Object.keys(pkg.scripts || {}).slice(0, 8),
      hasApp,
      files,
      url: deployUrl(dir, name),
      dbUrl,
      envKeys: envKeys(dir).slice(0, 12),
      commit: commit ? commit.split(" ").slice(0, 2).join(" ") + " " + commit.split(" ").slice(2).join(" ") : null,
      readme: readmeHead(dir),
      known: KNOWN[display] || "",
    });
  }
  return projects;
}

const projects = extract();
const only = process.argv.find((a) => a.startsWith("--only="))?.split("=")[1]?.split(",").map((s) => s.trim());
const filtered = only ? projects.filter((p) => only.includes(p.folder)) : projects;

// ---------- SUMMARY ----------
console.log(`\nDitemukan ${projects.length} project (folder: ${only ? filtered.length + " difilter" : "semua"}):\n`);
for (const p of filtered) {
  console.log(`■ ${p.display}`);
  console.log(`  stack : ${p.stack}`);
  console.log(`  url   : ${p.url || "-"}`);
  console.log(`  db    : ${p.dbUrl || "-"}`);
  console.log(`  env   : ${p.envKeys.join(", ") || "-"}`);
  console.log(`  git   : ${p.commit || "-"} | files: ${p.files}${p.dupWith ? ` | ⚠ DUP dengan ${p.dupWith}` : ""}`);
  if (p.readme) console.log(`  readme: ${p.readme}`);
  console.log("");
}

// ---------- WRITE ----------
if (process.argv.includes("--write")) {
  const { PrismaClient } = await import("@prisma/client");
  const { PrismaPg } = await import("@prisma/adapter-pg");
  const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });

  const user = await prisma.user.findUniqueOrThrow({ where: { username: "admin" } });

  // Reset: hapus semua kategori + catatan (data lama = demo)
  await prisma.note.deleteMany({});
  await prisma.noteCategory.deleteMany({});
  console.log("Semua kategori lama dihapus.\n");

  let pos = 0;
  for (const p of filtered) {
    const notes = [];
    const desc = p.known || p.readme || "—";
    notes.push({
      title: "Ringkasan & Stack",
      content: `Deskripsi: ${desc}\n\nStack utama: ${p.stack}\n\nFolder: ${p.folder}\nPackage name: ${p.pkgName}\nJumlah file sumber: ${p.files}${p.dupWith ? `\n\n⚠ Terlihat duplikat dengan folder "${p.dupWith}" — cek sebelum dikerjakan.` : ""}`,
    });
    const access = [];
    if (p.url) access.push(`URL deploy: ${p.url}`);
    if (p.dbUrl) access.push(`Database (termask): ${p.dbUrl}`);
    if (p.envKeys.length) access.push(`Env keys: ${p.envKeys.join(", ")}`);
    if (!access.length) access.push("Belum ada info akses (isi manual).");
    notes.push({ title: "Data Akses & Deploy", content: access.join("\n") });
    const scripts = p.scripts?.length ? p.scripts.map((s) => `- ${s}`).join("\n") : "-";
    notes.push({
      title: "Status & Progres",
      content: `Commit terakhir: ${p.commit || "-"}\n\nScript yang tersedia:\n${scripts}\n\nChecklist:\n- [ ] ...\n- [ ] ...`,
    });
    notes.push({
      title: "Cara Jalanin",
      content: `cd "G:\\PROJECT\\NEXT JS\\${p.folder}"\nnpm install\nnpm run dev\n\n(Sesuaikan dengan script di atas — seed: npm run seed:user jika ada)`,
    });

    const cat = await prisma.noteCategory.create({
      data: { name: p.display, position: pos++, userId: user.id, notes: { create: notes } },
    });
    console.log(`✔ ${p.display} (${notes.length} catatan)`);
  }

  await prisma.$disconnect();
  console.log(`\nSelesai: ${filtered.length} kategori dibuat.`);
}
