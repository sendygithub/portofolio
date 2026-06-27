import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET - Ambil semua data atau cari data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get("q");

    if (q) {
      const data = await prisma.apb.findMany({
        where: {
          OR: [
            { apb: { contains: q } },
            { noSpek: { contains: q } },
            { sudut: { contains: q } },
            { lebar: { contains: q } },
            { toleransi: { contains: q } },
          ],
        },
        orderBy: { id: "asc" },
      });
      return NextResponse.json(data);
    }

    const data = await prisma.apb.findMany({
      orderBy: { id: "asc" },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("GET error:", error);
    return NextResponse.json(
      { error: "Gagal mengambil data" },
      { status: 500 },
    );
  }
}

// POST - Tambah data baru
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { apb, noSpek, sudut, lebar, toleransi } = body;

    if (!apb || !noSpek) {
      return NextResponse.json(
        { error: "Field 'apb' dan 'noSpek' wajib diisi" },
        { status: 400 },
      );
    }

    const newData = await prisma.apb.create({
      data: {
        apb,
        noSpek,
        sudut: sudut || "",
        lebar: lebar || "",
        toleransi: toleransi || "",
      },
    });

    return NextResponse.json(newData, { status: 201 });
  } catch (error) {
    console.error("POST error:", error);
    return NextResponse.json({ error: "Gagal menambah data" }, { status: 500 });
  }
}

// PUT - Update data
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, apb, noSpek, sudut, lebar, toleransi } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Field 'id' wajib diisi" },
        { status: 400 },
      );
    }

    const updatedData = await prisma.apb.update({
      where: { id },
      data: {
        ...(apb !== undefined && { apb }),
        ...(noSpek !== undefined && { noSpek }),
        ...(sudut !== undefined && { sudut }),
        ...(lebar !== undefined && { lebar }),
        ...(toleransi !== undefined && { toleransi }),
      },
    });

    return NextResponse.json(updatedData);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json(
      { error: "Gagal mengupdate data" },
      { status: 500 },
    );
  }
}

// DELETE - Hapus data
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Parameter 'id' wajib diisi" },
        { status: 400 },
      );
    }

    await prisma.apb.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { error: "Gagal menghapus data" },
      { status: 500 },
    );
  }
}
