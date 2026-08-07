export default function MarketsSection() {
  return (
    <section id="markets" className="py-20 md:py-[140px] border-b border-[#C7CDD6]/12">
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="mono-eyebrow">THE SAME LEVER</span>
        <h2 className="section-h2">One number, priced three ways.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 01 */}
          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="font-mono text-sm text-[#D6C3A3] tracking-[0.12em] block mb-6">
                01
              </span>
              <h3 className="text-2xl font-normal text-[#F3F1EC] mb-4">
                Brazil · Water
              </h3>
              <p className="text-[15px] text-[#8C939D] leading-[1.65]">
                Brazil&apos;s data centre incentive regime ties tax relief to water efficiency
                targets, against 38 GW of connection requests concentrated in water-stressed
                regions. Raising rejection temperature makes dry cooling viable and removes
                evaporative water demand entirely.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="font-mono text-sm text-[#D6C3A3] tracking-[0.12em] block mb-6">
                02
              </span>
              <h3 className="text-2xl font-normal text-[#F3F1EC] mb-4">
                Europe · Heat
              </h3>
              <p className="text-[15px] text-[#8C939D] leading-[1.65]">
                EU Directive 2023/1791 makes waste heat reuse assessment mandatory above 1 MW.
                Germany requires a 10% energy reuse factor from July 2026, rising to 20% by 2028.
                Heat above 70 °C is sellable to district networks — and worth roughly ten times the
                same heat converted to electricity.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="font-mono text-sm text-[#D6C3A3] tracking-[0.12em] block mb-6">
                03
              </span>
              <h3 className="text-2xl font-normal text-[#F3F1EC] mb-4">
                Orbit · Mass
              </h3>
              <p className="text-[15px] text-[#8C939D] leading-[1.65]">
                Radiated power scales with the fourth power of surface temperature. Radiator area
                drives mass, and mass drives launch cost. Eight or more companies are racing to run
                GPUs in orbit; none has solved rejection at megawatt scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
