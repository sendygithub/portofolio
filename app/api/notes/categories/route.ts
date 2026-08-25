import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUserId } from "@/lib/auth";

// GET - daftar kategori milik user yang login (urut by position)
export async function GET() {
  try {
    const userId = await getSessionUserId();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const categories = await prisma.noteCategory.findMany({
      where: { userId },
      orderBy: { position: "asc" },
      include: { _count: { select: { notes: true } } },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error("GET categories error:", error);
    return NextResponse.json({ error: "Gagal mengambil kategori" }, { status: 500 });
  }
}

// POST - tambah kategori baru (posisi di akhir list)
export async function POST(request: NextRequest) {
  try {
    const userId = await getSessionUserId();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json().catch(() => ({}));
    const name = (body.name ?? "").toString().trim();
    if (!name) {
      return NextResponse.json({ error: "Nama kategori wajib diisi" }, { status: 400 });
    }

    const last = await prisma.noteCategory.findFirst({
      where: { userId },
      orderBy: { position: "desc" },
      select: { position: true },
    });

    const category = await prisma.noteCategory.create({
      data: { name, position: (last?.position ?? -1) + 1, userId },
      include: { _count: { select: { notes: true } } },
    });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("POST category error:", error);
    return NextResponse.json({ error: "Gagal menambah kategori" }, { status: 500 });
  }
}
