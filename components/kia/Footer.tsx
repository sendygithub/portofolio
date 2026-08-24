export default function KiaFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-14 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#141619] flex items-center justify-center text-[#A8B0BC] font-semibold text-[14px]">
            P
          </div>
          <div className="text-left">
            <span className="block font-semibold text-white text-[15px] tracking-tight">
              Kia Komputer Tangerang
            </span>
            <span className="block text-[10px] uppercase tracking-[0.1em] text-[#A8B0BC]/50 font-medium">
              Tangerang District
            </span>
          </div>
        </div>

        <p className="text-[#A8B0BC]/50 text-[12px] font-medium">
          &copy; 2026 Kia Komputer. All rights reserved.
        </p>

        <div className="flex gap-6">
          {["Instagram", "Github"].map((item) => (
            <span
              key={item}
              className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50 hover:text-white cursor-pointer transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
