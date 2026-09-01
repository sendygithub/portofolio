import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { NotesApp } from "@/components/notes/NotesApp";
import type { NotesInitialData } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function NotesPage() {
  const token = cookies().get(SESSION_COOKIE)?.value;
  const userId = token ? await verifySession(token) : null;
  if (!userId) redirect("/login");

  const [user, categoriesPromise] = await Promise.all([
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

  const categories = categoriesPromise;

  const selectedCategoryId = categories[0]?.id ?? null;
  const notes = selectedCategoryId
    ? await prisma.note.findMany({
        where: { categoryId: selectedCategoryId },
        orderBy: { createdAt: "desc" },
      })
    : [];

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
