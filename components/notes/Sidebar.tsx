"use client";

import { useEffect, useState } from "react";
import { Check, LogOut, Pencil, Plus, Trash2, X } from "lucide-react";
import type { Category } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    <aside className="flex h-full w-72 shrink-0 flex-col border-r border-border bg-muted">
      <div className="flex h-16 items-center justify-between border-b border-border px-5">
        <div className="min-w-0">
          <p className="eyebrow-accent">Arsip</p>
          <h1 className="truncate  text-[15px] font-bold uppercase leading-tight tracking-wide">
            Catatan
          </h1>
        </div>
        <Button
          onClick={onToggleEdit}
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          title={editMode ? "Selesai mengedit" : "Edit daftar"}
        >
          {editMode ? <X className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-3 py-4">
          <p className="eyebrow px-2 pb-3">Proyek</p>

          {categories.length === 0 && (
            <p className="body-sm px-2 py-2">Belum ada kategori.</p>
          )}

          <div>
            {categories.map((category) => {
              const active = category.id === selectedId && !editMode;
              return (
                <div
                  key={category.id}
                  className="border-b border-border"
                >
                  {editMode ? (
                    <div className="flex items-center gap-1 border-l-2 border-transparent py-1.5 pl-1 pr-1.5">
                      <Input
                        value={drafts[category.id] ?? category.name}
                        onChange={(e) =>
                          setDrafts((d) => ({ ...d, [category.id]: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter")
                            onRename(category.id, drafts[category.id] ?? "");
                        }}
                        className="h-8 flex-1 min-w-0 text-sm"
                      />
                      <Button
                        onClick={() => onRename(category.id, drafts[category.id] ?? "")}
                        variant="ghost"
                        size="icon"
                        title="Simpan"
                        className="h-8 w-8"
                      >
                        <Check className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        onClick={() => onDelete(category.id)}
                        variant="ghost"
                        size="icon"
                        title="Hapus"
                        className="h-8 w-8 hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  ) : (
                    <button
                      onClick={() => onSelect(category.id)}
                      className={`flex w-full items-center justify-between gap-3 border-l-2 py-3 pl-3 pr-2 text-left text-sm transition-all duration-300 ${
                        active
                          ? "border-primary bg-card text-foreground"
                          : "border-transparent text-muted-foreground hover:translate-x-1 hover:text-primary"
                      }`}
                    >
                      <span className="truncate">{category.name}</span>
                      <span
                        className={`shrink-0  text-[11px] font-medium tabular-nums ${
                          active ? "text-primary" : "text-muted-foreground/80"
                        }`}
                      >
                        {String(category._count.notes).padStart(2, "0")}
                      </span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollArea>

      {editMode && (
        <div className="border-t border-border p-3">
          <div className="flex items-center gap-2">
            <Input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              placeholder="Proyek baru..."
              className="h-9 flex-1 min-w-0"
            />
            <Button
              onClick={handleAdd}
              size="icon"
              className="h-9 w-9"
              title="Tambah"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <div className="flex h-16 items-center justify-between border-t border-border px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-input  text-[11px] font-bold uppercase text-primary">
            {username.charAt(0)}
          </div>
          <span className="truncate  text-[11px] uppercase tracking-wider text-muted-foreground">
            {username}
          </span>
        </div>
        <Button
          onClick={onLogout}
          variant="ghost"
          size="icon"
          title="Keluar"
          className="h-8 w-8"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </aside>
  );
}
