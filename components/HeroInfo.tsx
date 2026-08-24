const HeroInfo = () => {
  return (
    <div className="absolute bottom-0 left-0 bg-surface/70 text-primary grid grid-cols-3 w-full text-center h-56 items-center border-t border-secondary/10">
      <div>
        <p className="text-5xl font-display font-bold text-tertiary">80+</p>
        <h2 className="font-label uppercase tracking-widest text-xs text-secondary">
          Proyek Selesai
        </h2>
      </div>
      <div>
        <p className="text-5xl font-display font-bold text-tertiary">30+</p>
        <h2 className="font-label uppercase tracking-widest text-xs text-secondary">
          Mitra
        </h2>
      </div>
      <div>
        <p className="text-5xl font-display font-bold text-tertiary">140+</p>
        <h2 className="font-label uppercase tracking-widest text-xs text-secondary">
          Karyawan
        </h2>
      </div>
    </div>
  );
};

export default HeroInfo;
