"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, Menu, Search, X } from "lucide-react";
import { notesApi } from "@/lib/notes-api";
import type { Category, Note, NotesInitialData } from "@/lib/types";
import { Sidebar } from "./Sidebar";
import { NotesPanel } from "./NotesPanel";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function NotesApp({ initialData }: { initialData: NotesInitialData }) {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>(initialData.categories);
  const [selectedId, setSelectedId] = useState<number | null>(
    initialData.selectedCategoryId,
  );
  const [notes, setNotes] = useState<Note[]>(initialData.notes);
  const [sidebarEdit, setSidebarEdit] = useState(false);
  const [error, setError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  function showError(err: unknown) {
    setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    setTimeout(() => setError(""), 4000);
  }

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
    <div className="notes-theme flex h-screen overflow-hidden bg-background text-foreground">
      <div className="hidden md:block">
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
      </div>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-4 z-30"
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 gap-0 p-0 notes-theme">
          <Sidebar
            username={initialData.username}
            categories={categories}
            selectedId={selectedId}
            editMode={sidebarEdit}
            onToggleEdit={() => setSidebarEdit((v) => !v)}
            onSelect={(id) => {
              selectCategory(id);
              setMobileMenuOpen(false);
            }}
            onCreate={handleCreateCategory}
            onRename={handleRenameCategory}
            onDelete={handleDeleteCategory}
            onLogout={handleLogout}
          />
        </SheetContent>
      </Sheet>

      <main className="relative z-10 flex min-w-0 flex-1 flex-col">
        {error && (
          <div className="absolute right-4 top-4 z-50 flex items-center gap-2 rounded-md border border-destructive bg-destructive px-4 py-2.5 text-sm text-destructive-foreground shadow-lg">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span className="font-medium">{error}</span>
            <button
              onClick={() => setError("")}
              className="ml-1 opacity-70 transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {selectedCategory && (
          <div className="flex h-14 shrink-0 items-center gap-3 border-b px-4 md:px-6">
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari catatan..."
                className="h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-foreground"
              />
            </div>
            <ThemeToggle />
          </div>
        )}

        <NotesPanel
          categoryName={selectedCategory?.name ?? null}
          notes={notes}
          search={search}
          onCreate={handleCreateNote}
          onUpdate={handleUpdateNote}
          onDelete={handleDeleteNote}
        />
      </main>
    </div>
  );
}
