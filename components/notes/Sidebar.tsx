"use client";

import { useEffect, useState } from "react";
import {
  Check,
  LogOut,
  Pencil,
  Plus,
  StickyNote,
  Trash2,
  X,
} from "lucide-react";
import type { Category } from "@/lib/types";

type SidebarProps = {
  username: string;
  categories: Category[];
  selectedId: number | null;
  editMode: boolean;
  onToggleEdit: () => void;
  onSelect: (id: number) => void;
  onCreate: (name: string) => void;
  onRename: (id: number, name: string) => void;
  onDelete: (id: number) => void;
  onLogout: () => void;
};

export function Sidebar({
  username,
  categories,
  selectedId,
  editMode,
  onToggleEdit,
  onSelect,
  onCreate,
  onRename,
  onDelete,
  onLogout,
}: SidebarProps) {
  const [drafts, setDrafts] = useState<Record<number, string>>({});
  const [newName, setNewName] = useState("");

  // Setiap masuk mode edit, salin nama kategori ke draft
  useEffect(() => {
    if (editMode) {
      setDrafts(Object.fromEntries(categories.map((c) => [c.id, c.name])));
    }
  }, [editMode, categories]);

  function handleAdd() {
    const name = newName.trim();
    if (!name) return;
    onCreate(name);
    setNewName("");
  }

  return (
    <aside className="w-72 shrink-0 bg-surface border-r border-secondary/20 flex flex-col">
      {/* Header */}
      <div className="px-5 py-4 border-b border-secondary/20 flex items-center justify-between">
        <div>
          <p className="font-label uppercase tracking-[0.2em] text-secondary text-[10px]">
            Private
          </p>
          <h1 className="font-display uppercase font-bold text-primary tracking-wide">
            Catatan
          </h1>
        </div>
        <button
          onClick={onToggleEdit}
          title={editMode ? "Selesai mengedit" : "Edit daftar sidebar"}
          className={`p-2 border transition-colors ${
            editMode
              ? "border-tertiary text-tertiary"
              : "border-secondary/30 text-secondary hover:text-primary hover:border-primary"
          }`}
        >
          {editMode ? <X size={16} /> : <Pencil size={16} />}
        </button>
      </div>

      {/* Daftar kategori */}
      <nav className="flex-1 overflow-y-auto py-3">
        {categories.length === 0 && (
          <p className="px-5 py-3 text-sm text-secondary/60">
            Belum ada kategori. Ketik judul proyek di bawah lalu tambahkan.
          </p>
        )}

        {categories.map((category) => {
          const active = category.id === selectedId && !editMode;
          return (
            <div key={category.id}>
              {editMode ? (
                <div className="flex items-center gap-1 px-3 py-1.5">
                  <input
                    value={drafts[category.id] ?? category.name}
                    onChange={(e) =>
                      setDrafts((d) => ({ ...d, [category.id]: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") onRename(category.id, drafts[category.id] ?? "");
                    }}
                    className="flex-1 min-w-0 bg-background border border-secondary/30 px-2 py-1.5 text-sm text-primary outline-none focus:border-tertiary"
                  />
                  <button
                    onClick={() => onRename(category.id, drafts[category.id] ?? "")}
                    title="Simpan nama"
                    className="p-1.5 text-secondary hover:text-primary transition-colors"
                  >
                    <Check size={14} />
                  </button>
                  <button
                    onClick={() => onDelete(category.id)}
                    title="Hapus kategori"
                    className="p-1.5 text-secondary hover:text-tertiary transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => onSelect(category.id)}
                  className={`w-full flex items-center justify-between gap-2 px-5 py-2.5 text-left text-sm border-l-2 transition-colors ${
                    active
                      ? "bg-background/60 border-tertiary text-tertiary"
                      : "border-transparent text-primary/80 hover:bg-background/30 hover:text-primary"
                  }`}
                >
                  <span className="truncate">{category.name}</span>
                  <span
                    className={`text-[10px] font-label uppercase tracking-wider ${
                      active ? "text-tertiary" : "text-secondary/70"
                    }`}
                  >
                    {category._count.notes}
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </nav>

      {/* Tambah kategori (mode edit) */}
      {editMode && (
        <div className="px-4 py-3 border-t border-secondary/20">
          <div className="flex items-center gap-1">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              placeholder="Nama proyek baru..."
              className="flex-1 min-w-0 bg-background border border-secondary/30 px-2.5 py-2 text-sm text-primary placeholder:text-secondary/50 outline-none focus:border-tertiary"
            />
            <button
              onClick={handleAdd}
              title="Tambah kategori"
              className="p-2 bg-tertiary text-on-primary hover:opacity-90 transition-opacity"
            >
              <Plus size={14} />
            </button>
          </div>
          <button
            onClick={onToggleEdit}
            className="mt-2 w-full py-2 border border-secondary/30 text-xs font-label uppercase tracking-[0.14em] text-secondary hover:text-primary hover:border-primary transition-colors"
          >
            Selesai
          </button>
        </div>
      )}

      {/* Footer: user + logout */}
      <div className="px-5 py-4 border-t border-secondary/20 flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <StickyNote size={14} className="text-secondary shrink-0" />
          <span className="text-xs text-secondary truncate">{username}</span>
        </div>
        <button
          onClick={onLogout}
          title="Keluar"
          className="p-1.5 text-secondary hover:text-tertiary transition-colors"
        >
          <LogOut size={14} />
        </button>
      </div>
    </aside>
  );
}
