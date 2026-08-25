"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { notesApi } from "@/lib/notes-api";
import type { Category, Note, NotesInitialData } from "@/lib/types";
import { Sidebar } from "./Sidebar";
import { NotesPanel } from "./NotesPanel";

export function NotesApp({ initialData }: { initialData: NotesInitialData }) {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>(initialData.categories);
  const [selectedId, setSelectedId] = useState<number | null>(
    initialData.selectedCategoryId,
  );
  const [notes, setNotes] = useState<Note[]>(initialData.notes);
  const [sidebarEdit, setSidebarEdit] = useState(false);
  const [error, setError] = useState("");

  function showError(err: unknown) {
    setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    setTimeout(() => setError(""), 4000);
  }

  // ---- kategori ----
  async function selectCategory(id: number) {
    if (id === selectedId) return;
    setSelectedId(id);
    setNotes([]);
    try {
      setNotes(await notesApi.getNotes(id));
    } catch (err) {
      showError(err);
    }
  }

  async function handleCreateCategory(name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;
    try {
      const created = await notesApi.createCategory(trimmed);
      setCategories((prev) => [...prev, created]);
      setSelectedId(created.id);
      setNotes([]);
    } catch (err) {
      showError(err);
    }
  }

  async function handleRenameCategory(id: number, name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;
    try {
      const updated = await notesApi.renameCategory(id, trimmed);
      setCategories((prev) => prev.map((c) => (c.id === id ? updated : c)));
    } catch (err) {
      showError(err);
    }
  }

  async function handleDeleteCategory(id: number) {
    if (!window.confirm("Hapus kategori ini beserta semua catatannya?")) return;
    try {
      await notesApi.deleteCategory(id);
      const next = categories.filter((c) => c.id !== id);
      setCategories(next);
      if (selectedId === id) {
        const first = next[0] ?? null;
        setSelectedId(first ? first.id : null);
        setNotes(first ? await notesApi.getNotes(first.id) : []);
      }
    } catch (err) {
      showError(err);
    }
  }

  // ---- catatan ----
  async function handleCreateNote() {
    if (!selectedId) return;
    try {
      const created = await notesApi.createNote(selectedId, "", "");
      setNotes((prev) => [created, ...prev]);
    } catch (err) {
      showError(err);
    }
  }

  async function handleUpdateNote(id: number, title: string, content: string) {
    try {
      const updated = await notesApi.updateNote(id, title, content);
      setNotes((prev) => prev.map((n) => (n.id === id ? updated : n)));
    } catch (err) {
      showError(err);
      throw err;
    }
  }

  async function handleDeleteNote(id: number) {
    if (!window.confirm("Hapus catatan ini?")) return;
    try {
      await notesApi.deleteNote(id);
      setNotes((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      showError(err);
    }
  }

  async function handleLogout() {
    try {
      await notesApi.logout();
    } finally {
      router.push("/login");
      router.refresh();
    }
  }

  const selectedCategory = categories.find((c) => c.id === selectedId) ?? null;

  return (
    <div className="h-screen flex bg-background text-primary">
      <Sidebar
        username={initialData.username}
        categories={categories}
        selectedId={selectedId}
        editMode={sidebarEdit}
        onToggleEdit={() => setSidebarEdit((v) => !v)}
        onSelect={selectCategory}
        onCreate={handleCreateCategory}
        onRename={handleRenameCategory}
        onDelete={handleDeleteCategory}
        onLogout={handleLogout}
      />

      <main className="flex-1 flex flex-col min-w-0">
        {error && (
          <div className="bg-tertiary/15 border-b border-tertiary/30 px-6 py-2 text-sm text-tertiary">
            {error}
          </div>
        )}

        <NotesPanel
          categoryName={selectedCategory?.name ?? null}
          notes={notes}
          onCreate={handleCreateNote}
          onUpdate={handleUpdateNote}
          onDelete={handleDeleteNote}
        />
      </main>
    </div>
  );
}
