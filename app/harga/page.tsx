"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Monitor,
  Cpu,
  HardDrive,
  Wrench,
  Zap,
  Keyboard,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Download,
  Sparkles,
  Wifi,
  Printer,
  Smartphone,
  Gamepad2,
  Search,
  ChevronDown,
  Package,
  RefreshCw,
  Shield,
  MonitorSmartphone,
  Thermometer,
  Globe,
  Minus,
  Plus,
  Info,
  Tag,
  Clock,
  Award,
  Smile,
} from "lucide-react";
import Link from "next/link";
import KiaNavbar from "@/components/kia/Navbar";
import KiaFooter from "@/components/kia/Footer";

// ===== DATA =====

interface PriceItem {
  name: string;
  price: string;
  note?: string;
  popular?: boolean;
}

interface PriceCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: PriceItem[];
}

const priceCategories: PriceCategory[] = [
  {
    icon: <Monitor className="w-5 h-5" />,
    title: "Instalasi Sistem Operasi",
    description:
      "Install OS Windows/Linux bersih, driver lengkap, dan siap pakai.",
    items: [
      {
        name: "Install Windows 10 / 11 Pro",
        price: "Rp 75.000",
        popular: true,
      },
      { name: "Install Windows 10 / 11 Home", price: "Rp 65.000" },
      {
        name: "Install Linux (Ubuntu, Mint, Pop!_OS, dll)",
        price: "Rp 100.000",
      },
      { name: "Dual-Boot (Windows + Linux)", price: "Rp 150.000" },
      { name: "Upgrade Windows 10 ke 11", price: "Rp 50.000" },
      { name: "Aktivasi Windows / Office", price: "Rp 25.000" },
      { name: "Install Ulang + Backup Data", price: "Rp 100.000" },
      {
        name: "Install macOS Hackintosh",
        price: "Rp 350.000",
        note: "Tergantung kompatibilitas hardware",
      },
    ],
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Instalasi Software & Driver",
    description:
      "Install software profesional, driver, dan aplikasi pendukung.",
    items: [
      { name: "Microsoft Office 2021 / 365", price: "Rp 50.000" },
      {
        name: "Adobe Photoshop / Premiere / After Effects",
        price: "Rp 75.000",
      },
      { name: "CorelDraw / AutoCAD / SketchUp", price: "Rp 75.000" },
      {
        name: "Antivirus (Kaspersky / Avast / Bitdefender)",
        price: "Rp 35.000",
      },
      { name: "Driver Lengkap (VGA, Audio, Chipset, LAN)", price: "Rp 40.000" },
      { name: "Browser & Multimedia Pack", price: "Rp 25.000" },
      {
        name: "Software Programming (VS Code, XAMPP, Git, Node.js)",
        price: "Rp 60.000",
      },
      {
        name: "Paket Lengkap Software (Office + Driver + Antivirus + Browser)",
        price: "Rp 100.000",
        popular: true,
      },
    ],
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Rakit PC & Upgrade Hardware",
    description: "Rakit PC baru atau upgrade komponen untuk performa maksimal.",
    items: [
      { name: "Rakit PC Gaming (Entry Level)", price: "Rp 200.000" },
      { name: "Rakit PC Gaming (Mid Range)", price: "Rp 300.000" },
      { name: "Rakit PC Gaming (High End)", price: "Rp 500.000" },
      { name: "Rakit PC Kantor / Desain", price: "Rp 150.000" },
      { name: "Rakit PC Editing Video", price: "Rp 250.000" },
      { name: "Pasang / Upgrade VGA Card", price: "Rp 50.000" },
      { name: "Pasang / Upgrade Processor", price: "Rp 75.000" },
      { name: "Pasang / Upgrade Motherboard", price: "Rp 75.000" },
      { name: "Pasang / Upgrade RAM Desktop", price: "Rp 30.000" },
      { name: "Pasang / Upgrade RAM Laptop (slot)", price: "Rp 50.000" },
      {
        name: "Pasang / Upgrade RAM Laptop (solder)",
        price: "Rp 150.000",
        note: "Perlu reballing",
      },
      {
        name: "Rakit PC + Install OS + Software Lengkap",
        price: "Rp 350.000",
        popular: true,
      },
    ],
  },
  {
    icon: <HardDrive className="w-5 h-5" />,
    title: "Storage & SSD Upgrade",
    description:
      "Upgrade SSD, clone HDD, dan konfigurasi RAID untuk performa storage.",
    items: [
      { name: "Pasang SSD NVMe M.2", price: "Rp 40.000" },
      { name: "Pasang SSD SATA", price: "Rp 35.000" },
      { name: "Clone HDD ke SSD (termasuk install)", price: "Rp 100.000" },
      { name: "Clone HDD ke SSD (data only)", price: "Rp 75.000" },
      { name: "Pasang Hardisk Internal 2.5 / 3.5", price: "Rp 30.000" },
      { name: "Pasang Hardisk Eksternal", price: "Rp 25.000" },
      { name: "Setup RAID 0 / 1 / 5", price: "Rp 150.000" },
      { name: "Partisi & Manajemen Drive", price: "Rp 30.000" },
      {
        name: "Data Recovery (Ringan)",
        price: "Rp 100.000",
        note: "Harga tergantung tingkat kerusakan",
      },
      {
        name: "Data Recovery (Berat)",
        price: "Rp 250.000 - 500.000",
        note: "Konsultasi dulu",
      },
    ],
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Optimasi & Perbaikan Sistem",
    description:
      "Atasi laptop lemot, BlueScreen, error sistem, dan masalah software.",
    items: [
      { name: "Bersihkan Virus / Malware / Adware", price: "Rp 75.000" },
      { name: "Optimasi Windows (Lemot / Lambat)", price: "Rp 60.000" },
      { name: "Atasi BlueScreen / BSOD Error", price: "Rp 75.000" },
      { name: "Atasi Laptop Restart / Mati Sendiri", price: "Rp 75.000" },
      { name: "Atasi Laptop Tidak Bisa Masuk Windows", price: "Rp 100.000" },
      { name: "Atasi Laptop Hang / Freeze", price: "Rp 60.000" },
      { name: "Bersihkan Startup & Registry", price: "Rp 40.000" },
      { name: "Update Driver & BIOS", price: "Rp 50.000" },
      { name: "Reset Password Windows / BIOS", price: "Rp 50.000" },
      {
        name: "Paket Lengkap Optimasi + Bersih Virus + Install Ulang",
        price: "Rp 150.000",
        popular: true,
      },
    ],
  },
  {
    icon: <Keyboard className="w-5 h-5" />,
    title: "Servis Hardware Laptop",
    description: "Perbaikan dan penggantian komponen hardware laptop.",
    items: [
      {
        name: "Ganti Keyboard Laptop",
        price: "Rp 100.000",
        note: "+ harga spare part",
      },
      {
        name: "Ganti LCD / Layar Laptop",
        price: "Rp 150.000",
        note: "+ harga spare part",
      },
      { name: "Ganti Flexible Cable LCD", price: "Rp 100.000" },
      { name: "Ganti Touchpad Laptop", price: "Rp 75.000" },
      { name: "Ganti DC Jack / Port Charger", price: "Rp 100.000" },
      { name: "Ganti Kipas / Fan Laptop", price: "Rp 75.000" },
      { name: "Ganti Speaker Laptop", price: "Rp 50.000" },
      { name: "Ganti Battery Laptop", price: "Rp 50.000" },
      {
        name: "Servis LCD Bergaris / Blank / Mati",
        price: "Rp 100.000 - 200.000",
      },
      { name: "Servis Touchpad Tidak Berfungsi", price: "Rp 75.000" },
    ],
  },
  {
    icon: <Thermometer className="w-5 h-5" />,
    title: "Perawatan & Pendinginan",
    description:
      "Bersihkan debu, ganti thermal paste, dan optimasi pendinginan.",
    items: [
      { name: "Bersihkan Debu Laptop (Full Cleaning)", price: "Rp 75.000" },
      { name: "Bersihkan Debu PC Desktop", price: "Rp 50.000" },
      { name: "Ganti Thermal Paste (CPU + GPU)", price: "Rp 50.000" },
      {
        name: "Paket Cleaning + Ganti Thermal Paste",
        price: "Rp 100.000",
        popular: true,
      },
      { name: "Servis Laptop Panas / Overheat", price: "Rp 100.000" },
      { name: "Tambahan Kipas / Fan Casing", price: "Rp 25.000" },
      { name: "Pasang Liquid Cooling AIO", price: "Rp 100.000" },
      {
        name: "Pasang Water Cooling Custom",
        price: "Rp 300.000",
        note: "Tergantung kompleksitas",
      },
    ],
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: "Servis Power Supply & Casing",
    description: "Ganti PSU, casing, dan perbaikan komponen power.",
    items: [
      { name: "Ganti Power Supply (PSU) Desktop", price: "Rp 50.000" },
      { name: "Ganti Power Supply (PSU) Laptop / Charger", price: "Rp 30.000" },
      { name: "Ganti Casing PC", price: "Rp 75.000" },
      { name: "Cable Management Rapi", price: "Rp 50.000" },
      { name: "Pasang RGB Strip / Fan RGB", price: "Rp 50.000" },
      { name: "Servis Power On / No Display", price: "Rp 75.000" },
      { name: "Servis Laptop Tidak Mau Nyala", price: "Rp 100.000" },
      { name: "Servis Laptop Nyala Tapi Layar Gelap", price: "Rp 75.000" },
    ],
  },
  {
    icon: <Wifi className="w-5 h-5" />,
    title: "Jaringan & Internet",
    description:
      "Setup jaringan WiFi, LAN, dan troubleshooting koneksi internet.",
    items: [
      { name: "Setting WiFi Router / Modem", price: "Rp 50.000" },
      { name: "Setting Jaringan LAN Kantor / Rumah", price: "Rp 100.000" },
      { name: "Crimping Kabel LAN (per titik)", price: "Rp 25.000" },
      { name: "Pasang Access Point / Extender", price: "Rp 75.000" },
      { name: "Troubleshoot Internet Lemot / Putus", price: "Rp 50.000" },
      { name: "Setting IP Printer / Sharing Printer", price: "Rp 50.000" },
      { name: "Setup VPN / Remote Desktop", price: "Rp 75.000" },
      { name: "Setting Jaringan Warnet / Kantor Kecil", price: "Rp 200.000" },
    ],
  },
  {
    icon: <Printer className="w-5 h-5" />,
    title: "Servis Printer & Scanner",
    description: "Perbaikan printer, instalasi driver, dan setting scanner.",
    items: [
      { name: "Install Driver Printer / Scanner", price: "Rp 35.000" },
      { name: "Setting Printer Network / WiFi", price: "Rp 50.000" },
      { name: "Servis Printer Tidak Mencetak", price: "Rp 50.000" },
      { name: "Bersihkan Head Printer (Cleaning)", price: "Rp 50.000" },
      { name: "Ganti Tinta / Toner Printer", price: "Rp 25.000" },
      { name: "Ganti Cartridge / Drum Printer", price: "Rp 50.000" },
      { name: "Servis Printer Error / Blinking", price: "Rp 75.000" },
      { name: "Setting Scan to Email / Folder", price: "Rp 50.000" },
    ],
  },
  {
    icon: <MonitorSmartphone className="w-5 h-5" />,
    title: "Servis Monitor & TV",
    description: "Perbaikan monitor, TV, dan perangkat display lainnya.",
    items: [
      { name: "Servis Monitor Mati / No Display", price: "Rp 100.000" },
      { name: "Servis Monitor Bergaris / Flicker", price: "Rp 75.000" },
      { name: "Servis Monitor Redup / Backlight Rusak", price: "Rp 100.000" },
      { name: "Ganti Port HDMI / VGA / DVI Monitor", price: "Rp 75.000" },
      { name: "Setting Dual Monitor / Extended Display", price: "Rp 35.000" },
      { name: "Kalibrasi Warna Monitor", price: "Rp 50.000" },
      { name: "Pasang TV Wall Mount", price: "Rp 100.000" },
      { name: "Servis TV LED Mati Total", price: "Rp 150.000" },
    ],
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Servis HP & Tablet",
    description: "Perbaikan smartphone dan tablet untuk masalah software.",
    items: [
      { name: "Install Ulang HP Android (Flash ROM)", price: "Rp 75.000" },
      { name: "Unlock / Bypass FRP HP Android", price: "Rp 50.000" },
      { name: "Root HP Android", price: "Rp 50.000" },
      { name: "Install Custom ROM", price: "Rp 100.000" },
      { name: "Atasi HP Bootloop / Mati Total (Software)", price: "Rp 75.000" },
      { name: "Backup & Restore Data HP", price: "Rp 50.000" },
      { name: "Install Ulang iPad / Tablet Android", price: "Rp 75.000" },
      { name: "Transfer Data HP ke HP Baru", price: "Rp 50.000" },
    ],
  },
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "Servis Gaming & Perangkat Khusus",
    description: "Perbaikan dan setup perangkat gaming, VR, dan aksesoris.",
    items: [
      { name: "Setup PC Gaming + Streaming", price: "Rp 250.000" },
      { name: "Setting Emulator Game (PS, Nintendo, dll)", price: "Rp 75.000" },
      { name: "Servis Joystick / Gamepad Rusak", price: "Rp 50.000" },
      { name: "Servis Keyboard Gaming (Mechanical)", price: "Rp 75.000" },
      { name: "Servis Mouse Gaming (Ganti Switch)", price: "Rp 50.000" },
      { name: "Setting VR Headset", price: "Rp 100.000" },
      { name: "Optimasi PC untuk Gaming", price: "Rp 75.000" },
      { name: "Setting Capture Card / Streaming", price: "Rp 100.000" },
    ],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Keamanan & Backup",
    description: "Setup keamanan data, backup, dan recovery sistem.",
    items: [
      { name: "Setup Antivirus + Firewall", price: "Rp 50.000" },
      { name: "Enkripsi Data / BitLocker", price: "Rp 50.000" },
      { name: "Backup Data ke Cloud / Eksternal", price: "Rp 75.000" },
      { name: "Setup Scheduled Backup Otomatis", price: "Rp 100.000" },
      { name: "Recovery File Terhapus", price: "Rp 100.000" },
      { name: "Setup Parental Control", price: "Rp 50.000" },
      { name: "Audit Keamanan Sistem", price: "Rp 150.000" },
      { name: "Setup CCTV / IP Camera (per titik)", price: "Rp 100.000" },
    ],
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Layanan Online & Remote",
    description: "Bantuan jarak jauh dan layanan online untuk kemudahan Anda.",
    items: [
      { name: "Remote TeamViewer / AnyDesk (per sesi)", price: "Rp 35.000" },
      { name: "Konsultasi Online (via WA / Video Call)", price: "Gratis" },
      {
        name: "Setting Email (Outlook, Gmail, Thunderbird)",
        price: "Rp 35.000",
      },
      { name: "Setting Domain & Hosting", price: "Rp 100.000" },
      { name: "Install & Setting CMS (WordPress, dll)", price: "Rp 150.000" },
      {
        name: "Setting Cloud Storage (Google Drive, OneDrive)",
        price: "Rp 35.000",
      },
      { name: "Migrasi Data ke PC Baru", price: "Rp 100.000" },
      { name: "Setting RDP / Remote Desktop", price: "Rp 75.000" },
    ],
  },
];

interface BundleItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  price: string;
  savings: string;
  popular?: boolean;
}

const bundles: BundleItem[] = [
  {
    icon: <Package className="w-5 h-5" />,
    title: "Paket Komplit PC Baru",
    description: "Rakit PC + Install OS + Software Lengkap + Bersih + Garansi",
    items: [
      "Rakit PC sesuai kebutuhan",
      "Install Windows 10/11 Pro",
      "Microsoft Office 2021",
      "Driver lengkap + Antivirus",
      "Browser & Multimedia",
      "Cable Management rapi",
      "Garansi servis 1 bulan",
    ],
    price: "Rp 350.000",
    savings: "Hemat Rp 100.000",
    popular: true,
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Paket Upgrade SSD",
    description: "Upgrade SSD + Clone Data + Optimasi Sistem",
    items: [
      "Pasang SSD baru (NVMe/SATA)",
      "Clone OS & data dari HDD lama",
      "Install driver & update",
      "Optimasi boot & startup",
      "Test performa & verifikasi",
      "Garansi hasil clone 7 hari",
    ],
    price: "Rp 150.000",
    savings: "Hemat Rp 50.000",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Paket Full Servis Laptop",
    description: "Cleaning + Ganti Thermal Paste + Install Ulang + Optimasi",
    items: [
      "Bersihkan debu full (bongkar total)",
      "Ganti thermal paste CPU & GPU",
      "Install ulang Windows 10/11",
      "Install driver & software dasar",
      "Optimasi sistem & startup",
      "Garansi servis 1 bulan",
    ],
    price: "Rp 200.000",
    savings: "Hemat Rp 75.000",
    popular: true,
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Paket Keamanan & Backup",
    description: "Backup Data + Antivirus + Firewall + Recovery Plan",
    items: [
      "Backup data ke HDD eksternal/cloud",
      "Install antivirus premium",
      "Setup firewall & keamanan",
      "Enkripsi data penting",
      "Buat recovery disk / USB",
      "Dokumentasi prosedur recovery",
    ],
    price: "Rp 200.000",
    savings: "Hemat Rp 50.000",
  },
];

interface ExtraFee {
  service: string;
  fee: string;
  note: string;
}

const extraFees: ExtraFee[] = [
  {
    service: "Biaya antar jemput (Tangerang)",
    fee: "Gratis",
    note: "Wilayah Tangerang dan sekitarnya",
  },
  {
    service: "Biaya antar jemput (Luar Tangerang)",
    fee: "Rp 25.000 - 50.000",
    note: "Tergantung jarak",
  },
  {
    service: "Biaya diagnosa (jika tidak jadi servis)",
    fee: "Rp 25.000",
    note: "Gratis jika jadi servis",
  },
  {
    service: "Biaya konsultasi",
    fee: "Gratis",
    note: "Konsultasi via WA / telepon",
  },
  {
    service: "Biaya remote bantuan",
    fee: "Gratis - Rp 35.000",
    note: "Gratis untuk pelanggan servis",
  },
  {
    service: "Biaya spare part",
    fee: "Sesuai harga pasar",
    note: "Kami berikan harga terbaik",
  },
  {
    service: "Biaya prioritas (cepat)",
    fee: "+ 50% dari biaya jasa",
    note: "Prioritas pengerjaan 1 hari",
  },
];

// ===== COMPONENTS =====

function CategoryCard({
  category,
  index,
  isExpanded,
  onToggle,
}: {
  category: PriceCategory;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      id={`cat-${index}`}
      className="scroll-mt-28 border-b border-white/[0.06] last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 group text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center text-[#A8B0BC] group-hover:text-white transition-colors shrink-0">
            {category.icon}
          </div>
          <div>
            <h3 className="text-[15px] font-semibold text-white">
              {category.title}
            </h3>
            <p className="text-[13px] text-[#A8B0BC] mt-0.5 leading-relaxed max-w-lg">
              {category.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50 tabular-nums">
            {category.items.length} item
          </span>
          <div className="w-7 h-7 flex items-center justify-center text-[#A8B0BC]/50 group-hover:text-[#A8B0BC] transition-colors">
            {isExpanded ? (
              <Minus className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </div>
        </div>
      </button>

      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pb-5 pl-14">
            <div className="space-y-[1px]">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`flex items-center justify-between py-2.5 px-4 transition-colors ${
                    item.popular ? "bg-white/[0.03]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-start gap-2.5 flex-1 min-w-0 pr-4">
                    {item.popular && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4] shrink-0 mt-0.5">
                        ★
                      </span>
                    )}
                    <div className="min-w-0">
                      <span
                        className={`text-[14px] ${
                          item.popular
                            ? "text-white font-medium"
                            : "text-[#A8B0BC]"
                        }`}
                      >
                        {item.name}
                      </span>
                      {item.note && (
                        <span className="block text-[12px] text-[#A8B0BC]/50 mt-0.5">
                          {item.note}
                        </span>
                      )}
                    </div>
                  </div>
                  <span
                    className={`text-[14px] font-medium tabular-nums shrink-0 ${
                      item.popular ? "text-[#1C69D4]" : "text-white"
                    }`}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function BundleCard({ bundle, index }: { bundle: BundleItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group relative"
    >
      {bundle.popular && (
        <div className="absolute -top-[1px] left-6 right-6 z-10">
          <div className="bg-[#1C69D4] text-[11px] font-semibold text-white px-3 py-1 text-center mx-auto w-fit">
            Paling Laris
          </div>
        </div>
      )}
      <div
        className={`bg-[#141619] border ${
          bundle.popular ? "border-[#1C69D4]/30" : "border-white/[0.06]"
        } pt-7 pb-8 px-7 h-full flex flex-col`}
      >
        <div className="w-9 h-9 flex items-center justify-center text-[#A8B0BC] mb-5">
          {bundle.icon}
        </div>
        <h3 className="text-[17px] font-semibold text-white mb-1.5">
          {bundle.title}
        </h3>
        <p className="text-[13px] text-[#A8B0BC] mb-6 leading-relaxed">
          {bundle.description}
        </p>
        <ul className="space-y-2 mb-8 flex-1">
          {bundle.items.map((item, j) => (
            <li
              key={j}
              className="flex items-start gap-2.5 text-[13px] text-[#A8B0BC]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1C69D4] mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="pt-6 border-t border-white/[0.06]">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-[13px] text-[#A8B0BC]/50">Harga</span>
            <span className="text-xl font-semibold text-white">
              {bundle.price}
            </span>
          </div>
          <span className="block text-[12px] text-[#1C69D4]/70 font-medium mb-4">
            {bundle.savings}
          </span>
          <Link
            href={`https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(bundle.title)}`}
            target="_blank"
          >
            <span className="w-full inline-flex items-center justify-center bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium text-[14px] py-5 rounded-lg">
              <MessageCircle className="w-4 h-4 mr-2" />
              Ambil Paket Ini
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ===== MAIN PAGE =====

export default function HargaPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const filteredCategories = searchQuery
    ? priceCategories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cat.title.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    : priceCategories;

  return (
    <main className="min-h-screen bg-black text-[#A8B0BC] selection:bg-white/10 overflow-x-hidden">
      <KiaNavbar />
      <div className="h-20 w-full" />

      {/* HERO */}
      <section ref={heroRef} className="relative px-8 pt-24 pb-28">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="max-w-3xl"
        >
          <div className="mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              Price List
            </span>
          </div>
          <h1 className="text-[40px] md:text-[80px] font-bold tracking-[-0.02em] leading-[1.05] text-white mb-6">
            Harga Servis
            <br />
            <span className="text-[#A8B0BC]">Transparan & Terjangkau</span>
          </h1>
          <p className="text-[15px] text-[#A8B0BC] max-w-xl leading-relaxed mb-10">
            Semua harga sudah termasuk jasa servis. Biaya spare part dihitung
            terpisah sesuai harga pasar. Konsultasi gratis, bayar setelah beres.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20harga%20servis"
              target="_blank"
            >
              <span className="inline-flex items-center justify-center bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium px-8 py-6 text-[15px] rounded-lg">
                <MessageCircle className="mr-2 w-4 h-4" />
                Tanya Harga via WhatsApp
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
            <Link href="#price-list">
              <span className="inline-flex items-center justify-center border border-white/[0.12] text-[#A8B0BC] hover:text-white hover:border-white/[0.25] px-8 py-6 text-[15px] rounded-lg">
                Lihat Price List
                <ChevronDown className="ml-2 w-4 h-4" />
              </span>
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Harga Transparan",
              "Konsultasi Gratis",
              "Bayar Setelah Beres",
              "Bergaransi",
            ].map((tag, i) => (
              <span
                key={i}
                className="text-[13px] text-[#A8B0BC]/50 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SEARCH */}
      <div className="px-8 pb-8 max-w-3xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8B0BC]/50 pointer-events-none" />
          <input
            type="text"
            placeholder="Cari layanan atau harga..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border border-white/[0.12] py-3.5 pl-11 pr-10 text-[14px] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8B0BC]/50 hover:text-[#A8B0BC] transition-colors text-[13px]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* PRICE LIST */}
      <section id="price-list" className="px-8 pb-10 max-w-3xl">
        <div className="flex flex-wrap gap-2 mb-10">
          {priceCategories.map((cat, i) => (
            <Link
              key={i}
              href={`#cat-${i}`}
              className="px-3 py-1.5 text-[12px] text-[#A8B0BC]/50 hover:text-[#A8B0BC] transition-colors border border-white/[0.06] hover:border-white/[0.12]"
            >
              {cat.title}
            </Link>
          ))}
        </div>

        <div className="border-t border-white/[0.06]">
          {filteredCategories.map((category, catIndex) => (
            <CategoryCard
              key={catIndex}
              category={category}
              index={catIndex}
              isExpanded={expandedCategory === catIndex}
              onToggle={() => toggleCategory(catIndex)}
            />
          ))}
        </div>

        {filteredCategories.length === 0 && searchQuery && (
          <div className="text-center py-20">
            <Search className="w-8 h-8 text-[#A8B0BC]/30 mx-auto mb-4" />
            <p className="text-[#A8B0BC] text-[15px] font-medium">
              Tidak ada layanan yang cocok dengan &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-[#A8B0BC]/50 hover:text-[#A8B0BC] text-[13px] font-medium transition-colors"
            >
              Reset pencarian
            </button>
          </div>
        )}
      </section>

      {/* PAKET BUNDLING */}
      <section className="px-8 py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              Paket Hemat
            </span>
            <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-3">
              Paket Bundling Spesial
            </h2>
            <p className="text-[15px] text-[#A8B0BC] max-w-md">
              Dapatkan harga lebih hemat dengan paket bundling layanan kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {bundles.map((bundle, i) => (
              <BundleCard key={i} bundle={bundle} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BIAYA TAMBAHAN */}
      <section className="px-8 py-24 max-w-3xl mx-auto">
        <div className="mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
            Informasi Tambahan
          </span>
          <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-3">
            Biaya & Ketentuan
          </h2>
          <p className="text-[15px] text-[#A8B0BC] max-w-md">
            Informasi lengkap mengenai biaya tambahan dan ketentuan layanan.
          </p>
        </div>

        <div className="border-t border-white/[0.06]">
          {extraFees.map((fee, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-4 border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.01] transition-colors"
            >
              <div className="pr-4">
                <p className="text-[14px] font-medium text-white">
                  {fee.service}
                </p>
                <p className="text-[12px] text-[#A8B0BC]/50 mt-0.5">
                  {fee.note}
                </p>
              </div>
              <span
                className={`text-[14px] font-medium tabular-nums shrink-0 ${
                  fee.fee === "Gratis" ? "text-[#1C69D4]" : "text-white"
                }`}
              >
                {fee.fee}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 border border-white/[0.06] bg-[#141619]">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-[#A8B0BC]/50 mt-0.5 shrink-0" />
            <div>
              <p className="text-[13px] font-medium text-white mb-1">
                Catatan Penting
              </p>
              <p className="text-[12px] text-[#A8B0BC]/50 leading-relaxed">
                Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih
                dahulu. Harga final akan dikonfirmasi setelah diagnosa dan
                konsultasi dengan teknisi kami. Semua harga sudah termasuk PPN.
                Garansi jasa berlaku sesuai dengan jenis perbaikan yang
                dilakukan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KENAPA PILIH KAMI */}
      <section className="px-8 py-24 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              Kenapa Kami
            </span>
            <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-3">
              Kenapa Pilih Kami?
            </h2>
            <p className="text-[15px] text-[#A8B0BC] max-w-md">
              Harga bersaing dengan kualitas servis yang terjamin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Tag className="w-5 h-5" />,
                title: "Harga Transparan",
                desc: "Tidak ada biaya tersembunyi. Semua harga sudah termasuk jasa. Konsultasi gratis.",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: "Cepat & Tepat",
                desc: "Pengerjaan cepat tanpa mengorbankan kualitas. Hasil rapi dan terjamin.",
              },
              {
                icon: <Award className="w-5 h-5" />,
                title: "Bergaransi",
                desc: "Setiap servis dilengkapi garansi jasa. Kepuasan pelanggan prioritas kami.",
              },
              {
                icon: <Smile className="w-5 h-5" />,
                title: "Bayar Setelah Beres",
                desc: "Servis dulu, bayar setelah selesai dan Anda puas dengan hasilnya.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="bg-[#141619] border border-white/[0.06] p-8 h-full hover:border-white/[0.12] transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center text-[#A8B0BC] mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-[16px] font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#A8B0BC] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-32 text-center relative">
        <div className="max-w-2xl mx-auto">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
            Gratis Konsultasi
          </span>
          <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-4 mb-4">
            Siap Servis Komputer?
          </h2>
          <p className="text-[15px] text-[#A8B0BC] max-w-lg mx-auto leading-relaxed mb-10">
            Tanya harga dulu aja gratis! Ceritakan kebutuhan Anda, kami akan
            kasih solusi dan harga terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20harga%20servis"
              target="_blank"
            >
              <span className="inline-flex items-center justify-center bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium px-10 py-7 text-[15px] rounded-lg">
                <MessageCircle className="mr-2 w-4 h-4" />
                Klik Disini WhatsApp
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
            <p className="text-[13px] text-[#A8B0BC]/50">
              atau hubungi{" "}
              <span className="text-white font-medium">0812-3344-5566</span>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <KiaFooter />
    </main>
  );
}
