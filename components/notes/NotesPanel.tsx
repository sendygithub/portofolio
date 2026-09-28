"use client";

import { useMemo, useState } from "react";
import { Plus, Save, StickyNote, Trash2 } from "lucide-react";
import type { Note } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type NotesPanelProps = {
  categoryName: string | null;
  notes: Note[];
  search: string;
  onCreate: () => void;
  onUpdate: (id: number, title: string, content: string) => Promise<void>;
  onDelete: (id: number) => void;
};

function formatDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function timeAgo(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const diff = Date.now() - date.getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "baru saja";
  if (minutes < 60) return `${minutes} menit lalu`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} jam lalu`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} hari lalu`;
  return formatDate(iso);
}

export function NotesPanel({
  categoryName,
  notes,
  search,
  onCreate,
  onUpdate,
  onDelete,
}: NotesPanelProps) {
  // Hook harus dipanggil tanpa syarat dan dalam urutan yang sama di setiap render.
  // Karena itu diletakkan SEBELUM early return di bawah (react-hooks/rules-of-hooks).
  const filtered = useMemo(() => {
    if (!search.trim()) return notes;
    const q = search.toLowerCase();
    return notes.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.content.toLowerCase().includes(q),
    );
  }, [notes, search]);

  if (!categoryName) {
    return (
      <div className="flex flex-1 items-center justify-center p-6">
        <div className="max-w-sm text-center">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center border border-input">
            <StickyNote className="h-5 w-5 text-primary" />
          </div>
          <p className="body-sm">
            Pilih atau buat kategori untuk mulai mencatat.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="flex h-16 shrink-0 items-center justify-between gap-3 border-b border-border px-4 md:px-6">
        <div className="min-w-0">
          <p className="eyebrow">
            {String(notes.length).padStart(2, "0")} Catatan
          </p>
          <h2 className="truncate  text-[15px] font-bold uppercase leading-tight tracking-wide">
            {categoryName}
          </h2>
        </div>
        <Button onClick={onCreate} size="sm">
          <Plus className="h-4 w-4" />
          <span>Catatan baru</span>
        </Button>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 md:px-6 md:py-6">
        {filtered.length === 0 && notes.length === 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-4 border border-dashed border-input py-20 text-center">
            <div className="flex h-11 w-11 items-center justify-center border border-input">
              <Plus className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="display-4 uppercase tracking-wide">Belum ada catatan</p>
              <p className="body-sm mt-1">
                Mulai dengan catatan pertamamu.
              </p>
            </div>
            <Button onClick={onCreate} size="sm">
              <Plus className="h-4 w-4" />
              Catatan baru
            </Button>
          </div>
        )}

        {filtered.length === 0 && notes.length > 0 && (
          <div className="flex h-full flex-col items-center justify-center gap-2 py-16 text-center">
            <p className="body-sm">
              Tidak ada catatan yang cocok dengan &ldquo;{search}&rdquo;
            </p>
            <p className="eyebrow">Coba kata kunci lain.</p>
          </div>
        )}

        <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type NoteCardProps = {
  note: Note;
  onUpdate: (id: number, title: string, content: string) => Promise<void>;
  onDelete: (id: number) => void;
};

function NoteCard({ note, onUpdate, onDelete }: NoteCardProps) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const isDirty = title !== note.title || content !== note.content;

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    try {
      await onUpdate(note.id, title, content);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally {
      setSaving(false);
    }
  }

  return (
    <article className="flex h-full flex-col border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30">
      <div className="flex min-h-0 flex-1 flex-col space-y-3">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Tanpa judul"
          className="h-8 shrink-0 border-0 bg-transparent px-0  text-[15px] font-semibold uppercase tracking-wide"
        />

        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Tulis sesuatu..."
          rows={4}
          className="min-h-0 flex-1 resize-none border-0 bg-transparent px-0 text-sm leading-relaxed"
        />

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-border pt-3">
          <div className="flex items-center gap-2">
            <span className=" text-[10px] uppercase tracking-wider text-muted-foreground/80">
              {timeAgo(note.updatedAt)}
            </span>
            {isDirty && !saved && (
              <span className="inline-flex items-center border border-input px-2 py-0.5  text-[9px] uppercase tracking-wider text-muted-foreground">
                Belum disimpan
              </span>
            )}
            {saved && (
              <span className="inline-flex items-center border border-primary px-2 py-0.5  text-[9px] uppercase tracking-wider text-primary">
                Tersimpan
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {isDirty && (
              <Button
                onClick={handleSave}
                disabled={saving}
                size="sm"
                className="h-8"
              >
                <Save className="h-3.5 w-3.5" />
                {saving ? "Menyimpan..." : "Simpan"}
              </Button>
            )}
            <Button
              onClick={() => onDelete(note.id)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:text-destructive"
              title="Hapus catatan"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
