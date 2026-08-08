'use client';

import Image from 'next/image';

const images = [
  {
    src: '/hero_radiator.jpg',
    caption: '01 — Radiador de ISS em teste de vácuo · NASA Lewis',
  },
  {
    src: '/strip_vacuum_chamber.jpg',
    caption: '02 — Câmara de vácuo térmico · NASA Lewis Facility',
  },
  {
    src: '/strip_zero_g.jpg',
    caption: '03 — Cápsula de ensaio de microgravidade · Zero Gravity Facility',
  },
  {
    src: '/strip_droplet_gen.jpg',
    caption: '04 — Bocal gerador de gotículas MEMS · Ensaio de laboratório',
  },
  {
    src: '/strip_thermal_vac.jpg',
    caption: '05 — Carga térmica com manta MLI · NASA NTRS',
  },
  {
    src: '/strip_deployment.jpg',
    caption: '06 — Mecanismo de desdobramento · Ensaio em solo',
  },
];

export default function ImageStrip() {
  // Duplicate array for continuous marquee loop
  const marqueeImages = [...images, ...images];

  return (
    <section className="py-16 border-b border-[#C7CDD6]/12 bg-[#0E1013] overflow-hidden">
      <div className="group flex overflow-hidden select-none">
        <div className="flex shrink-0 gap-4 animate-marquee group-hover:[animation-play-state:paused]">
          {marqueeImages.map((img, idx) => (
            <div key={idx} className="shrink-0 w-[426px]">
              <div className="relative h-[320px] w-full bg-[#171A1F] border border-[#C7CDD6]/12 overflow-hidden mb-3">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#C7CDD6] block">
                {img.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
