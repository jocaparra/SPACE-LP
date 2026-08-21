'use client';

import React from 'react';
import Image from 'next/image';

export default function ImageMarquee() {
  const images = [
    {
      src: '/hero_radiator.jpg',
      label: '01 — Radiador de ISS em teste de vácuo · NASA Lewis',
    },
    {
      src: '/strip_vacuum_chamber.jpg',
      label: '02 — Câmara de vácuo térmico · NASA Lewis Facility',
    },
    {
      src: '/strip_zero_g.jpg',
      label: '03 — Cápsula de ensaio de microgravidade · Zero Gravity Facility',
    },
    {
      src: '/strip_droplet_gen.jpg',
      label: '04 — Bocal gerador de gotículas MEMS · Ensaio de laboratório',
    },
    {
      src: '/strip_thermal_vac.jpg',
      label: '05 — Carga térmica com manta MLI · NASA NTRS',
    },
    {
      src: '/strip_deployment.jpg',
      label: '06 — Mecanismo de desdobramento · Ensaio em solo',
    },
    {
      src: '/img_facility.jpg',
      label: '07 — Instalação de simulação de vácuo profundo',
    },
    {
      src: '/img_context.jpg',
      label: '08 — Trocador de calor e linha de retorno',
    },
  ];

  return (
    <section className="py-16 border-b border-[#F0F0EB]/10 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#858C92] block tnum">
          // GALERIA DE HARDWARE E TESTES HISTÓRICOS
        </span>
      </div>

      <div className="group flex overflow-hidden select-none">
        {/* Animated Marquee Strip */}
        <div className="flex shrink-0 gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {[...images, ...images].map((img, index) => (
            <div key={index} className="shrink-0 w-[380px] md:w-[460px]">
              <div className="relative h-[260px] md:h-[300px] w-full bg-[#262829] border border-[#F0F0EB]/10 overflow-hidden mb-3 rounded-[2px]">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[20%] brightness-90 hover:grayscale-0 hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#858C92] block tnum">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
