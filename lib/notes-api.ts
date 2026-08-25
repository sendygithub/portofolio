// Helper fetch untuk API notes — dipakai komponen client.
import type { Category, Note } from "./types";

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error((body as { error?: string }).error || "Terjadi kesalahan");
  }
  return res.json() as Promise<T>;
}

function json(method: string, body?: unknown): RequestInit {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  };
}

export const notesApi = {
  // ---- auth ----
  login: (username: string, password: string) =>
    fetch("/api/auth/login", json("POST", { username, password })).then((r) =>
      handle<{ ok: boolean }>(r),
    ),
  logout: () => fetch("/api/auth/logout", json("POST")).then((r) => handle<{ ok: boolean }>(r)),

  // ---- kategori (item sidebar) ----
  getCategories: () =>
    fetch("/api/notes/categories").then((r) => handle<Category[]>(r)),
  createCategory: (name: string) =>
    fetch("/api/notes/categories", json("POST", { name })).then((r) => handle<Category>(r)),
  renameCategory: (id: number, name: string) =>
    fetch(`/api/notes/categories/${id}`, json("PUT", { name })).then((r) => handle<Category>(r)),
  deleteCategory: (id: number) =>
    fetch(`/api/notes/categories/${id}`, json("DELETE")).then((r) => handle<{ ok: boolean }>(r)),

  // ---- catatan ----
  getNotes: (categoryId: number) =>
    fetch(`/api/notes?categoryId=${categoryId}`).then((r) => handle<Note[]>(r)),
  createNote: (categoryId: number, title: string, content: string) =>
    fetch("/api/notes", json("POST", { categoryId, title, content })).then((r) =>
      handle<Note>(r),
    ),
  updateNote: (id: number, title: string, content: string) =>
    fetch(`/api/notes/${id}`, json("PUT", { title, content })).then((r) => handle<Note>(r)),
  deleteNote: (id: number) =>
    fetch(`/api/notes/${id}`, json("DELETE")).then((r) => handle<{ ok: boolean }>(r)),
};
