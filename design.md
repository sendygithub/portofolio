---
version: 2
name: shadcn Neutral (Hitam & Putih)
description: shadcn/ui default components on the neutral base color — pure black and white, no chromatic accent.
colors:
  background: "hsl(0 0% 100%)"
  foreground: "hsl(0 0% 3.9%)"
  card: "hsl(0 0% 100%)"
  primary: "hsl(0 0% 9%)"
  primary-foreground: "hsl(0 0% 98%)"
  secondary: "hsl(0 0% 96.1%)"
  muted: "hsl(0 0% 96.1%)"
  muted-foreground: "hsl(0 0% 45.1%)"
  accent: "hsl(0 0% 96.1%)"
  border: "hsl(0 0% 89.8%)"
  input: "hsl(0 0% 89.8%)"
  ring: "hsl(0 0% 3.9%)"
  destructive: "hsl(0 84.2% 60.2%)"
  dark-background: "hsl(0 0% 3.9%)"
  dark-foreground: "hsl(0 0% 98%)"
typography:
  family: Inter
  display:
    fontSize: 3.75rem
    fontWeight: 600
    letterSpacing: "-0.025em"
  h1:
    fontSize: 2.25rem
    fontWeight: 600
    letterSpacing: "-0.025em"
  body:
    fontSize: 1rem
    lineHeight: 1.625
  label:
    fontSize: 0.75rem
    fontWeight: 500
    letterSpacing: "0.05em"
    textTransform: uppercase
rounded:
  lg: var(--radius)              # 0.5rem — Card
  md: calc(var(--radius) - 2px)  # 6px    — Button, Input, Badge (border-radius)
  sm: calc(var(--radius) - 4px)  # 4px
  full: 9999px                   # Badge & Avatar foto profil
spacing:
  sm: 8px
  md: 16px
  lg: 32px
components:
  button-default:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    height: 40px
    padding: 16px
  button-outline:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.input}"
    textColor: "{colors.foreground}"
    hoverBackgroundColor: "{colors.accent}"
    rounded: "{rounded.md}"
    height: 40px
  card:
    backgroundColor: "{colors.card}"
    borderColor: "{colors.border}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: 24px
  input:
    backgroundColor: "{colors.background}"
    borderColor: "{colors.input}"
    rounded: "{rounded.md}"
    height: 40px
---

## Overview

Seluruh UI memakai komponen template [shadcn/ui](https://ui.shadcn.com) apa adanya
(style `default`, base color `neutral`) dengan palet **hitam & putih**: tanpa warna
aksen kromatik, tanpa gradient, tanpa glow. Kedalaman dibentuk oleh border 1px,
latar `muted`, dan bayangan tipis `shadow-sm` — bukan oleh warna.

Sumber kebenaran token ada di `app/globals.css` (variabel HSL) dan
`tailwind.config.ts` (kelas `hsl(var(--token))`).

## Colors

- **background / foreground:** pasangan dasar halaman. Terang `0 0% 100%`, gelap `0 0% 3.9%`.
- **primary:** aksi utama (tombol, tab aktif, badge terisi). Di mode gelap otomatis terbalik.
- **secondary / muted / accent:** permukaan abu-abu netral untuk seksi, hover, dan kartu non-putih.
- **muted-foreground:** teks pendukung, caption, dan label kecil.
- **border / input / ring:** garis pemisah, garis form, dan warna focus ring.
- **destructive:** satu-satunya warna non-abu, hanya untuk aksi hapus/error.

## Typography

- **Font tunggal:** Inter (`--font-sans`) untuk semua teks — Oswald sudah tidak dipakai.
- **Judul:** `font-semibold tracking-tight` (mengikuti `CardTitle` shadcn).
- **Label mikro:** `text-xs font-medium uppercase tracking-wider text-muted-foreground`.

## Radius

Skala radius dikendalikan satu variabel `--radius: 0.5rem`:

| Kelas          | Nilai                      | Dipakai untuk             |
| -------------- | -------------------------- | ------------------------- |
| `rounded-lg`   | `var(--radius)`            | Card, panel, gambar       |
| `rounded-md`   | `calc(var(--radius) - 2px)`| Button, Input, Textarea   |
| `rounded-sm`   | `calc(var(--radius) - 4px)`| elemen kecil              |
| `rounded-full` | `9999px`                   | Badge, Avatar, foto profil|

## Components

Pakai komponen dari `components/ui` — jangan menulis ulang gayanya:

- `Button` (`default`, `outline`, `secondary`, `ghost`, `destructive`, `link`)
- `Card` + `CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter`
- `Badge`, `Avatar`, `Separator`, `Input`, `Textarea`, `Label`, `Sheet`, `ScrollArea`

Utilitas bersama (`.frame`, `.btn-accent`, `.btn-outline`, `.chip`, `.section-container`,
`.display-1…4`, `.body-*`, `.eyebrow`, `.input-elegant`) di `app/globals.css` hanya
lapisan tipis di atas token shadcn agar halaman lama tetap satu bahasa visual.

## Do's and Don'ts

- **Do** pakai satu aksi `primary` per layar; sisanya `outline` atau `ghost`.
- **Do** biarkan `border-border` dan ruang kosong yang membentuk struktur.
- **Don't** menambah warna kromatik (merah/biru/hijau/ungu/amber) di luar `destructive`.
- **Don't** memakai gradient, glow, atau `shadow-lg` — maksimum `shadow-sm` / `shadow-md` saat hover.
- **Don't** membuat radius manual (`rounded-none`, `rounded-[6px]`) — pakai skala di atas.
