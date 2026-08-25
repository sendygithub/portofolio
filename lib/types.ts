// Tipe bersama untuk fitur Notes — dipakai server (page/route) & client (UI).
export type Category = {
  id: number;
  name: string;
  position: number;
  _count: { notes: number };
  createdAt: string;
  updatedAt: string;
};

export type Note = {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
};

export type NotesInitialData = {
  username: string;
  categories: Category[];
  selectedCategoryId: number | null;
  notes: Note[];
};
