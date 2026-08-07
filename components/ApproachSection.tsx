export default function ApproachSection() {
  return (
    <section id="approach" className="py-20 md:py-[140px] border-b border-[#C7CDD6]/12">
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="mono-eyebrow">APPROACH</span>
        <h2 className="section-h2">Earth first.</h2>

        {/* Timeline */}
        <div className="relative mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hairline rule for desktop */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-[#C7CDD6]/12 z-0" />

          {/* Phase 0 */}
          <div className="relative z-10 pt-0 md:pt-12 pl-6 md:pl-0 border-l md:border-l-0 border-[#C7CDD6]/12">
            <div className="absolute top-1 md:top-5 left-[-5px] md:left-0 w-2.5 h-2.5 rounded-full bg-[#D6C3A3] border border-[#D6C3A3] shadow-[0_0_12px_rgba(214,195,163,0.4)]" />
            <span className="font-mono text-[11px] tracking-[0.12em] text-[#F3F1EC] uppercase block mb-3">
              PHASE 0 · NOW
            </span>
            <h3 className="text-lg font-normal text-[#F3F1EC] mb-2">Brazil</h3>
            <p className="text-[14px] text-[#8C939D] leading-[1.5]">
              Dry rejection at high temperature. Revenue before launch.
            </p>
          </div>

          {/* Phase 1 */}
          <div className="relative z-10 pt-0 md:pt-12 pl-6 md:pl-0 border-l md:border-l-0 border-[#C7CDD6]/12">
            <div className="absolute top-1 md:top-5 left-[-5px] md:left-0 w-2.5 h-2.5 rounded-full bg-[#0E1013] border border-[#C7CDD6]" />
            <span className="font-mono text-[11px] tracking-[0.12em] text-[#8C939D] uppercase block mb-3">
              PHASE 1 · 2–5 YR
            </span>
            <h3 className="text-lg font-normal text-[#F3F1EC] mb-2">Orbit</h3>
            <p className="text-[14px] text-[#8C939D] leading-[1.5]">
              Flight-qualified thermal subsystems, supplied to orbital compute operators.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="relative z-10 pt-0 md:pt-12 pl-6 md:pl-0 border-l md:border-l-0 border-[#C7CDD6]/12">
            <div className="absolute top-1 md:top-5 left-[-5px] md:left-0 w-2.5 h-2.5 rounded-full bg-[#0E1013] border border-[#C7CDD6]" />
            <span className="font-mono text-[11px] tracking-[0.12em] text-[#8C939D] uppercase block mb-3">
              PHASE 2 · 5–12 YR
            </span>
            <h3 className="text-lg font-normal text-[#F3F1EC] mb-2">Moon</h3>
            <p className="text-[14px] text-[#8C939D] leading-[1.5]">
              Volatiles, power and cryogenic archival at a lunar pole.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="relative z-10 pt-0 md:pt-12 pl-6 md:pl-0 border-l md:border-l-0 border-[#C7CDD6]/12">
            <div className="absolute top-1 md:top-5 left-[-5px] md:left-0 w-2.5 h-2.5 rounded-full bg-[#0E1013] border border-[#C7CDD6]" />
            <span className="font-mono text-[11px] tracking-[0.12em] text-[#8C939D] uppercase block mb-3">
              PHASE 3 · 12+ YR
            </span>
            <h3 className="text-lg font-normal text-[#F3F1EC] mb-2">Deep Space</h3>
            <p className="text-[14px] text-[#8C939D] leading-[1.5]">
              Cryogenic computing in a permanently shadowed crater.
            </p>
          </div>
        </div>

        <p className="mt-12 text-[14px] text-[#8C939D]">
          Each phase funds the next. We do not skip steps.
        </p>
      </div>
    </section>
  );
}
