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
    <aside className="flex h-full w-72 shrink-0 flex-col border-r bg-background">
      <div className="flex h-14 items-center justify-between border-b px-5">
        <h1 className="text-sm font-semibold tracking-tight">Catatan</h1>
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
        <div className="px-2 py-3">
          <p className="px-3 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Proyek
          </p>

          {categories.length === 0 && (
            <p className="px-3 py-2 text-sm text-muted-foreground">
              Belum ada kategori.
            </p>
          )}

          <div className="space-y-0.5">
            {categories.map((category) => {
              const active = category.id === selectedId && !editMode;
              return (
                <div key={category.id}>
                  {editMode ? (
                    <div className="flex items-center gap-1 rounded-md px-1 py-1">
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
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  ) : (
                    <button
                      onClick={() => onSelect(category.id)}
                      className={`flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        active
                          ? "bg-secondary text-secondary-foreground"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      }`}
                    >
                      <span className="truncate">{category.name}</span>
                      <span
                        className={`shrink-0 text-xs tabular-nums ${
                          active ? "text-foreground/70" : "text-muted-foreground/70"
                        }`}
                      >
                        {category._count.notes}
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
        <div className="space-y-2 border-t p-3">
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

      <div className="flex h-14 items-center justify-between border-t px-5">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-semibold uppercase">
            {username.charAt(0)}
          </div>
          <span className="truncate text-sm text-foreground">{username}</span>
        </div>
        <Button
          onClick={onLogout}
          variant="ghost"
          size="icon"
          title="Keluar"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    </aside>
  );
}
