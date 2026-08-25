import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUserId } from "@/lib/auth";

type Params = { params: { id: string } };

// Helper: pastikan note milik user yang login
async function findOwnedNote(id: number, userId: number) {
  return prisma.note.findFirst({
    where: { id, category: { userId } },
    include: { category: true },
  });
}

// PUT - update judul & isi catatan
export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const userId = await getSessionUserId();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const id = parseInt(params.id, 10);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const existing = await findOwnedNote(id, userId);
    if (!existing) {
      return NextResponse.json({ error: "Catatan tidak ditemukan" }, { status: 404 });
    }

    const body = await request.json().catch(() => ({}));
    const title = ((body.title ?? existing.title) as string).toString();
    const content = ((body.content ?? existing.content) as string).toString();

    const updated = await prisma.note.update({
      where: { id },
      data: { title, content },
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT note error:", error);
    return NextResponse.json({ error: "Gagal mengupdate catatan" }, { status: 500 });
  }
}

// DELETE - hapus catatan
export async function DELETE(_request: NextRequest, { params }: Params) {
  try {
    const userId = await getSessionUserId();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const id = parseInt(params.id, 10);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: "ID tidak valid" }, { status: 400 });
    }

    const existing = await findOwnedNote(id, userId);
    if (!existing) {
      return NextResponse.json({ error: "Catatan tidak ditemukan" }, { status: 404 });
    }

    await prisma.note.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE note error:", error);
    return NextResponse.json({ error: "Gagal menghapus catatan" }, { status: 500 });
  }
}
