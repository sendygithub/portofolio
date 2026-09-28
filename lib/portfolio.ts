// Data profil Sendy Andreansah untuk halaman utama.
// ATURAN: semua isi di file ini harus fakta yang bisa dibuktikan.
// Jangan tambah angka, klien, atau pencapaian yang tidak ada buktinya.
import type {
  FaktaSingkat,
  KelompokKeahlian,
  KontakInfo,
  Layanan,
  Pendidikan,
  Pengalaman,
  Proyek,
  TautanSosial,
} from "./types";

export const NAMA = "Sendy Andreansah";
export const GELAR = "S.Kom";
export const LOKASI = "Kota Tangerang, Banten, Indonesia";
export const POSISI_DICARI =
  "IT Support · IT Administrator · Helpdesk · Desktop Support · IT Technician";

export const NOMOR_WHATSAPP = "6281281916880";
export const LABEL_WHATSAPP = "+62 812-8191-6880";
export const EMAIL = "sendy.lazada@gmail.com";

export const tautanWhatsApp = (pesan?: string) =>
  pesan
    ? `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURIComponent(pesan)}`
    : `https://wa.me/${NOMOR_WHATSAPP}`;

export const FILE_CV = "/CV-Sendy-Andreansah-IT-Support.pdf";

export const faktaSingkat: FaktaSingkat[] = [
  { label: "Servis komputer mandiri", nilai: "Sejak 2013" },
  { label: "Kerja sistem shift 1/2/3", nilai: "13 tahun" },
  { label: "Pendidikan", nilai: "S1 Sistem Informasi" },
  { label: "Domisili", nilai: "Tangerang" },
];

export const pengalaman: Pengalaman[] = [
  {
    jabatan: "Operator Produksi",
    perusahaan: "PT Gajah Tunggal, Tbk",
    periode: "Januari 2013 – Sekarang",
    lokasi: "Tangerang · On-site",
    poin: [
      "Bekerja sistem shift 1/2/3 di lini produksi: mengoperasikan mesin sesuai SOP, menjaga konsistensi mutu dan standar K3, serta bekerja dalam tim untuk memenuhi target harian.",
      "Penempatan di area produksi dengan jabatan administratif Junior Engineering — menangani pencatatan dan pelaporan hasil produksi.",
      "13 tahun menjalani rotasi shift membuktikan disiplin waktu dan kesiapan dipanggil di jam kerja mana pun — kebiasaan yang langsung kepakai untuk dukungan IT yang berjalan non-stop.",
    ],
    tag: ["Shift 1/2/3", "Disiplin Waktu", "Kerja Tim", "Administrasi Produksi"],
  },
  {
    jabatan: "Jasa Servis & Perbaikan Komputer",
    perusahaan: "Praktik Mandiri",
    periode: "2013 – Sekarang",
    lokasi: "Tangerang · Melayani teman dan rekan kerja",
    poin: [
      "Diagnosis dan perbaikan komputer/laptop: gagal booting, sistem lambat, BSOD, masalah RAM, storage, dan display.",
      "Upgrade RAM dan konversi HDD ke SSD, perakitan PC, serta uji fungsi komponen.",
      "Perbaikan laptop tingkat komponen: penggantian LCD, keyboard, dan perbaikan engsel.",
      "Instalasi Windows 7–11, Linux (Ubuntu/Debian), driver, dan Microsoft Office.",
      "Setup koneksi LAN dan printer untuk pengguna rumahan, termasuk pendampingan sampai pengguna bisa bekerja normal kembali.",
    ],
    tag: ["Troubleshooting", "Hardware", "Instalasi OS", "Laptop Repair", "Jaringan"],
  },
  {
    jabatan: "Pengembangan Aplikasi Web",
    perusahaan: "Proyek Mandiri — teman & UMKM",
    periode: "2022 – Sekarang",
    lokasi: "Tangerang · Freelance",
    poin: [
      "Membangun website dengan Next.js/React dan Laravel: landing page, katalog online shop, sistem internal (HR), dan halaman artikel.",
      "Merancang REST API, authentication, serta database PostgreSQL/MySQL dengan Prisma.",
      "Deploy ke Vercel dan menyerahkan proyek ke pemiliknya beserta panduan pemakaian.",
      "Nilai tambah untuk tim IT: bisa mendukung aplikasi bisnis, database, dan sistem internal perusahaan, tidak berhenti di perangkat pengguna saja.",
    ],
    tag: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Laravel", "Vercel"],
  },
];

export const pendidikan: Pendidikan[] = [
  {
    jenjang: "S1 Sistem Informasi",
    institusi: "STMIK Insan Pembangunan Tangerang",
    periode: "2016 – 2020",
    catatan: "IPK 3,46 — ditempuh sambil tetap bekerja shift.",
  },
  {
    jenjang: "SMK Teknik Komputer dan Jaringan",
    institusi: "SMK Prima Pekalongan",
    periode: "2009 – 2012",
    catatan:
      "Mulai belajar komponen komputer, instalasi Windows, dan Linux server.",
  },
];

export const proyek: Proyek[] = [
  {
    nomor: "01",
    judul: "Sistem HR Internal (DIV4)",
    deskripsi:
      "Aplikasi web sistem HR internal: login multi-user, dashboard, data departemen dan karyawan, serta absensi.",
    url: "https://divisi4.vercel.app",
    teknologi: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  },
  {
    nomor: "02",
    judul: "Hijab Paradise",
    deskripsi:
      "Toko online pakaian muslim: katalog produk, keranjang, alur pemesanan, dan halaman admin. Backend REST API sendiri dengan validasi, autentikasi, dan database PostgreSQL.",
    url: "https://online-shop-hijab.vercel.app",
    teknologi: ["Next.js", "Prisma", "PostgreSQL", "REST API"],
  },
  {
    nomor: "03",
    judul: "Dashboard POS Retail (Paw-some)",
    deskripsi:
      "Point of Sale untuk toko retail: login admin dan staff, manajemen produk, transaksi, serta laporan. Halaman demo menyediakan akun uji coba supaya bisa langsung dicoba.",
    url: "https://rkk-pos.vercel.app",
    teknologi: ["Next.js", "TypeScript", "Database"],
  },
  {
    nomor: "04",
    judul: "CodePath Academy",
    deskripsi:
      "Platform belajar terstruktur: kurikulum 10 level, materi, contoh kode, dan latihan.",
    url: "https://sinau-theta.vercel.app",
    teknologi: ["Next.js"],
  },
  {
    nomor: "05",
    judul: "Terong Zumba",
    deskripsi:
      "Website studio zumba: jadwal kelas, pendaftaran member, dan informasi program.",
    url: "https://terong-zumba.vercel.app",
    teknologi: ["Next.js", "Tailwind CSS"],
  },
  {
    nomor: "06",
    judul: "Pet Shop Curug",
    deskripsi:
      "Aplikasi web pet shop: manajemen produk, pencatatan stok, dan data pelanggan.",
    url: "https://rkk-petshop.vercel.app",
    teknologi: ["Next.js", "Database"],
  },
];

export const proyekLainnya: TautanSosial[] = [
  { nama: "Bintang Audio — rental sound system", url: "https://bintang-audio.vercel.app" },
  { nama: "Rumah Peradaban Subang — taman baca", url: "https://rpsncsubang.vercel.app" },
  { nama: "Oday Aquatic — toko ikan hias", url: "https://sky-fish.vercel.app" },
  { nama: "Tempe Kripik Mbak Sri — UMKM", url: "https://tempe-kripik-mbak-sri.vercel.app" },
];

export const keahlian: KelompokKeahlian[] = [
  {
    nomor: "01",
    judul: "Dukungan & Perbaikan Perangkat",
    ringkas: "Yang paling sering dikerjakan setiap hari",
    daftar: [
      "Diagnosis kerusakan: gagal booting, sistem lambat, BSOD",
      "Perbaikan & upgrade hardware: RAM, storage, display",
      "Perakitan PC dan uji fungsi komponen",
      "Perbaikan laptop: penggantian LCD, keyboard, engsel",
      "Perawatan dan pembersihan perangkat",
    ],
  },
  {
    nomor: "02",
    judul: "Sistem Operasi & Software",
    ringkas: "Instalasi dan konfigurasi siap pakai",
    daftar: [
      "Instalasi Windows 7 – 11",
      "Instalasi Linux (Ubuntu/Debian)",
      "Instalasi driver dan Microsoft Office",
      "Konfigurasi sistem dan pengaturan pengguna",
      "Migrasi HDD ke SSD tanpa kehilangan data",
    ],
  },
  {
    nomor: "03",
    judul: "Jaringan & Peripheral",
    ringkas: "Sampai pengguna bisa kerja normal kembali",
    daftar: [
      "Setup koneksi LAN dan dasar TCP/IP",
      "IP addressing dan konfigurasi router",
      "Setup printer: driver, perkabelan, pengisian cartridge",
      "Troubleshooting koneksi dan perangkat peripheral",
      "Pendampingan pengguna (user support)",
    ],
  },
  {
    nomor: "04",
    judul: "Nilai Tambah — Aplikasi Web",
    ringkas: "Bekal kalau tim IT perlu dukung aplikasi bisnis",
    daftar: [
      "Next.js, React, TypeScript, Node.js",
      "Prisma dengan PostgreSQL / MySQL",
      "REST API dan authentication",
      "Tailwind CSS dan shadcn/ui",
      "Git, Docker, Vercel",
    ],
  },
];

export const layanan: Layanan[] = [
  {
    nomor: "01",
    judul: "Rakit PC & Upgrade Hardware",
    deskripsi: "Merakit PC kantor, gaming, atau editing sesuai kebutuhan.",
    poin: ["Rakit PC", "Upgrade RAM", "Pasang VGA", "Ganti motherboard"],
  },
  {
    nomor: "02",
    judul: "Pasang SSD & Upgrade Storage",
    deskripsi: "Membuat laptop/PC lama kembali responsif.",
    poin: ["SSD NVMe / SATA", "Clone HDD ke SSD", "Hardisk eksternal"],
  },
  {
    nomor: "03",
    judul: "Instalasi Sistem Operasi",
    deskripsi: "Windows, Linux, atau dual-boot, lengkap dengan driver.",
    poin: ["Windows 10 / 11", "Linux Ubuntu / Debian", "Dual-boot"],
  },
  {
    nomor: "04",
    judul: "Perbaikan Laptop & Komputer",
    deskripsi: "Perbaikan sampai tingkat komponen, bukan cuma instal ulang.",
    poin: ["Ganti LCD", "Ganti keyboard", "Perbaikan engsel", "Servis motherboard"],
  },
];

export const kontak: KontakInfo[] = [
  {
    label: "Email",
    nilai: EMAIL,
    tautan: `mailto:${EMAIL}`,
  },
  {
    label: "WhatsApp",
    nilai: LABEL_WHATSAPP,
    tautan: tautanWhatsApp(
      "Halo Sendy, saya mau tanya soal dukungan/servis komputer."
    ),
  },
  {
    label: "Lokasi",
    nilai: LOKASI,
    tautan: "https://maps.google.com/?q=Kota+Tangerang,+Banten",
  },
];

export const tautanSosial: TautanSosial[] = [
  { nama: "GitHub", url: "https://github.com/sendygithub" },
  { nama: "LinkedIn", url: "https://linkedin.com/in/andreansah" },
  { nama: "Email", url: `mailto:${EMAIL}` },
];
