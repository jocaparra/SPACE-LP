export default function ConstraintSection() {
  return (
    <section id="physics" className="py-20 md:py-[140px] border-b border-[#C7CDD6]/12">
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="mono-eyebrow">THE CONSTRAINT</span>
        <h2 className="section-h2">Every watt of compute becomes a watt of heat.</h2>
        <p className="body-text mb-16">
          Air cooling ended when AI racks passed 100 kW. In vacuum there is no convection at all —
          heat leaves only by radiation, and radiator area dominates mass and launch cost. The same
          physics governs both.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#C7CDD6]/12">
          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 flex flex-col justify-between min-h-[140px]">
            <div className="font-mono text-3xl lg:text-4xl text-[#F3F1EC] font-normal mb-3">
              100+ kW
            </div>
            <div className="text-[14px] text-[#8C939D] leading-snug">
              rack density where air cooling fails
            </div>
          </div>

          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 flex flex-col justify-between min-h-[140px]">
            <div className="font-mono text-3xl lg:text-4xl text-[#F3F1EC] font-normal mb-3">
              0.4 kW/m²
            </div>
            <div className="text-[14px] text-[#8C939D] leading-snug">
              radiative rejection at 300 K in vacuum
            </div>
          </div>

          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 flex flex-col justify-between min-h-[140px]">
            <div className="font-mono text-3xl lg:text-4xl text-[#F3F1EC] font-normal mb-3">
              38 GW
            </div>
            <div className="text-[14px] text-[#8C939D] leading-snug">
              data centre grid connection requests in Brazil
            </div>
          </div>

          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 flex flex-col justify-between min-h-[140px]">
            <div className="font-mono text-3xl lg:text-4xl text-[#F3F1EC] font-normal mb-3">
              10 → 20%
            </div>
            <div className="text-[14px] text-[#8C939D] leading-snug">
              German heat reuse mandate, 2026 to 2028
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
