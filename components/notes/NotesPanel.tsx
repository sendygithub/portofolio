"use client";

import { useState } from "react";
import { Plus, Save, Trash2 } from "lucide-react";
import type { Note } from "@/lib/types";

type NotesPanelProps = {
  categoryName: string | null;
  notes: Note[];
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

export function NotesPanel({
  categoryName,
  notes,
  onCreate,
  onUpdate,
  onDelete,
}: NotesPanelProps) {
  if (!categoryName) {
    return (
      <div className="flex-1 flex items-center justify-center p-6">
        <p className="text-secondary text-sm">
          Pilih atau buat kategori di sidebar untuk mulai mencatat.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Header kategori */}
      <header className="px-6 py-4 border-b border-secondary/20 flex items-center justify-between gap-4">
        <h2 className="font-display uppercase font-bold text-2xl tracking-wide truncate">
          {categoryName}
        </h2>
        <button onClick={onCreate} className="btn-primary shrink-0 flex items-center gap-2">
          <Plus size={14} /> Catatan
        </button>
      </header>

      {/* Daftar catatan */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {notes.length === 0 && (
          <div className="border border-dashed border-secondary/30 p-10 text-center">
            <p className="text-secondary text-sm mb-4">
              Belum ada catatan di kategori ini.
            </p>
            <button onClick={onCreate} className="btn-primary">
              + Tambah Catatan Pertama
            </button>
          </div>
        )}

        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
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

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    try {
      await onUpdate(note.id, title, content);
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } finally {
      setSaving(false);
    }
  }

  return (
    <article className="bg-surface border border-secondary/15 p-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Judul catatan..."
        className="w-full bg-transparent border-b border-transparent focus:border-tertiary outline-none text-lg font-semibold text-primary placeholder:text-secondary/40 pb-1 mb-3 transition-colors"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Ketik progres, data login, atau catatan lain di sini..."
        rows={9}
        className="w-full resize-y bg-background/50 border border-secondary/20 px-3 py-2.5 text-sm leading-relaxed text-primary placeholder:text-secondary/40 outline-none focus:border-tertiary transition-colors"
      />
      <div className="flex items-center justify-between mt-3 gap-3">
        <p className="text-[11px] text-secondary/70">
          {formatDate(note.updatedAt)}
          {saved && <span className="text-tertiary ml-2">✓ Tersimpan</span>}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn-primary px-4 py-2 disabled:opacity-50 flex items-center gap-2"
          >
            <Save size={13} /> {saving ? "Menyimpan..." : "Simpan"}
          </button>
          <button
            onClick={() => onDelete(note.id)}
            title="Hapus catatan"
            className="p-2 border border-secondary/30 text-secondary hover:text-tertiary hover:border-tertiary transition-colors"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
