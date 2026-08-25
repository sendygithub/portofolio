import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUserId } from "@/lib/auth";

type Params = { params: { id: string } };

// PUT - rename kategori
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const userId = await getSessionUserId();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const id = parseInt(params.id, 10);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const body = await request.json().catch(() => ({}));
    const name = (body.name ?? "").toString().trim();
    if (!name) {
      return NextResponse.json({ error: "Nama kategori wajib diisi" }, { status: 400 });
    }

    const existing = await prisma.noteCategory.findFirst({ where: { id, userId } });
    if (!existing) {
      return NextResponse.json({ error: "Kategori tidak ditemukan" }, { status: 404 });
    }

    const updated = await prisma.noteCategory.update({
      where: { id },
      data: { name },
      include: { _count: { select: { notes: true } } },
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT category error:", error);
    return NextResponse.json({ error: "Gagal mengupdate kategori" }, { status: 500 });
  }
}

// DELETE - hapus kategori (catatan di dalamnya ikut terhapus via cascade)
export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    const userId = await getSessionUserId();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const id = parseInt(params.id, 10);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const existing = await prisma.noteCategory.findFirst({ where: { id, userId } });
    if (!existing) {
      return NextResponse.json({ error: "Kategori tidak ditemukan" }, { status: 404 });
    }

    await prisma.noteCategory.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE category error:", error);
    return NextResponse.json({ error: "Gagal menghapus kategori" }, { status: 500 });
  }
}
