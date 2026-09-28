export default function KiaFooter() {
  return (
    <footer className="border-t border-border">
      <div className="shell flex flex-col justify-between gap-10 py-14 md:flex-row md:items-center">
        <div className="flex items-baseline gap-2">
          <div className="text-left">
            <span className="block  text-[18px] font-bold leading-none text-foreground">
              Kia Komputer Tangerang
            </span>
            <span className="eyebrow mt-2 block">
              Tangerang District
            </span>
          </div>
        </div>

        <p className="body-subtle font-body text-[12px]">
          &copy; 2026 Kia Komputer. All rights reserved.
        </p>

        <div className="flex gap-6">
          {["Instagram", "Github"].map((item) => (
            <span
              key={item}
              className="eyebrow cursor-pointer transition-transform duration-300 hover:translate-x-1 hover:text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
