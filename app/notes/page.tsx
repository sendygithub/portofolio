import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { NotesApp } from "@/components/notes/NotesApp";
import type { NotesInitialData } from "@/lib/types";

// Selalu render fresh — halaman ini butuh cek session tiap request.
export const dynamic = "force-dynamic";

export default async function NotesPage() {
  const token = cookies().get(SESSION_COOKIE)?.value;
  const userId = token ? await verifySession(token) : null;
  if (!userId) redirect("/login");

  const [user, categories] = await Promise.all([
    prisma.user.findUnique({
      where: { id: userId },
      select: { username: true },
    }),
    prisma.noteCategory.findMany({
      where: { userId },
      orderBy: { position: "asc" },
      include: { _count: { select: { notes: true } } },
    }),
  ]);

  if (!user) redirect("/login");

  // Muat catatan dari kategori pertama sebagai state awal
  const selectedCategoryId = categories[0]?.id ?? null;
  const notes = selectedCategoryId
    ? await prisma.note.findMany({
        where: { categoryId: selectedCategoryId },
        orderBy: { createdAt: "desc" },
      })
    : [];

  // Prisma mengembalikan Date → ubah ke ISO string biar konsisten dgn payload API
  const initialData: NotesInitialData = {
    username: user.username,
    categories: categories.map((c) => ({
      ...c,
      createdAt: c.createdAt.toISOString(),
      updatedAt: c.updatedAt.toISOString(),
    })),
    selectedCategoryId,
    notes: notes.map((n) => ({
      ...n,
      createdAt: n.createdAt.toISOString(),
      updatedAt: n.updatedAt.toISOString(),
    })),
  };

  return <NotesApp initialData={initialData} />;
}
