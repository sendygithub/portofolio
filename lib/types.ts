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

// ---- Profil portofolio (halaman utama) ----

export type FaktaSingkat = {
  label: string;
  nilai: string;
};

export type Pengalaman = {
  jabatan: string;
  perusahaan: string;
  periode: string;
  lokasi: string;
  poin: string[];
  tag: string[];
};

export type Pendidikan = {
  jenjang: string;
  institusi: string;
  periode: string;
  catatan: string;
};

export type Proyek = {
  nomor: string;
  judul: string;
  deskripsi: string;
  url: string;
  teknologi: string[];
};

export type KelompokKeahlian = {
  nomor: string;
  judul: string;
  ringkas: string;
  daftar: string[];
};

export type Layanan = {
  nomor: string;
  judul: string;
  deskripsi: string;
  poin: string[];
};

export type KontakInfo = {
  label: string;
  nilai: string;
  tautan: string;
};

export type TautanSosial = {
  nama: string;
  url: string;
};
