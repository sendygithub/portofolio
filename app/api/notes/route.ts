import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionUserId } from "@/lib/auth";

// GET - catatan dalam satu kategori (?categoryId=...)
export async function GET(request: NextRequest) {
  try {
    const userId = await getSessionUserId();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const categoryId = parseInt(request.nextUrl.searchParams.get("categoryId") ?? "", 10);
    if (Number.isNaN(categoryId)) {
      return NextResponse.json({ error: "Parameter categoryId wajib diisi" }, { status: 400 });
    }

    const category = await prisma.noteCategory.findFirst({
      where: { id: categoryId, userId },
    });
    if (!category) {
      return NextResponse.json({ error: "Kategori tidak ditemukan" }, { status: 404 });
    }

    const notes = await prisma.note.findMany({
      where: { categoryId },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(notes);
  } catch (error) {
    console.error("GET notes error:", error);
    return NextResponse.json({ error: "Gagal mengambil catatan" }, { status: 500 });
  }
}

// POST - tambah catatan baru
export async function POST(request: NextRequest) {
  try {
    const userId = await getSessionUserId();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json().catch(() => ({}));
    const { categoryId } = body as { categoryId?: number };
    const title = ((body.title ?? "") as string).toString();
    const content = ((body.content ?? "") as string).toString();

    if (typeof categoryId !== "number" || Number.isNaN(categoryId)) {
      return NextResponse.json(
        { error: "categoryId wajib diisi" },
        { status: 400 },
      );
    }

    const category = await prisma.noteCategory.findFirst({
      where: { id: categoryId, userId },
    });
    if (!category) {
      return NextResponse.json({ error: "Kategori tidak ditemukan" }, { status: 404 });
    }

    const note = await prisma.note.create({
      data: { categoryId, title, content },
    });
    return NextResponse.json(note, { status: 201 });
  } catch (error) {
    console.error("POST note error:", error);
    return NextResponse.json({ error: "Gagal menambah catatan" }, { status: 500 });
  }
}
