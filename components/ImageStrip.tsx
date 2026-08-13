'use client';

import Image from 'next/image';
import { useI18n } from '../lib/i18n';

export default function ImageStrip() {
  const { t } = useI18n();

  const images = [
    { src: '/hero_radiator.jpg', caption: t('strip.img1') },
    { src: '/strip_vacuum_chamber.jpg', caption: t('strip.img2') },
    { src: '/strip_zero_g.jpg', caption: t('strip.img3') },
    { src: '/strip_droplet_gen.jpg', caption: t('strip.img4') },
    { src: '/strip_thermal_vac.jpg', caption: t('strip.img5') },
    { src: '/strip_deployment.jpg', caption: t('strip.img6') },
  ];

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
