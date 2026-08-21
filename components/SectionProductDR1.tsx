'use client';

import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { useI18n } from '../lib/i18n';

export default function SectionProductDR1() {
  const { t } = useI18n();

  return (
    <section id="sec-07" className="py-32 bg-[#262829] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <ScrollReveal>
          <span className="section-num">{t('sec07.num')}</span>
          <h2 className="section-h2 mb-4">{t('sec07.title')}</h2>
          <p className="text-[#858C92] text-lg max-w-[68ch] mb-16">
            {t('sec07.body')}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Combined Visual Image & Technical Diagram Card */}
          <ScrollReveal delay={100} className="lg:col-span-6 space-y-6">
            <div className="bg-[#0A0A0A] border border-[#F0F0EB]/10 p-6 md:p-8 rounded-[2px] relative overflow-hidden">
              <div className="relative w-full aspect-[4/3] rounded-[2px] overflow-hidden mb-6 border border-[#F0F0EB]/10">
                <Image
                  src="/strip_droplet_gen.jpg"
                  alt="Droplet Generator Laboratory Testing"
                  fill
                  className="object-cover filter grayscale-[10%] brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end font-mono text-[10px] uppercase text-[#F0F0EB] tracking-[0.1em] tnum">
                  <span className="bg-[#0A0A0A]/90 px-2 py-1 border border-[#F0F0EB]/20">
                    ENSAIO MEMS · CÂMARA DE VÁCUO
                  </span>
                  <span className="text-[#FF3B20]">SPES DR1</span>
                </div>
              </div>

              {/* Technical SVG Diagram Overlay */}
              <div className="w-full h-32 relative">
                <svg viewBox="0 0 400 120" className="w-full h-full text-[#F0F0EB]" fill="none">
                  <rect x="20" y="20" width="360" height="80" rx="2" stroke="#F0F0EB" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
                  <rect x="40" y="40" width="35" height="40" stroke="#FF3B20" strokeWidth="1.5" fill="#262829" />
                  <text x="57" y="64" fill="#FF3B20" fontFamily="Space Grotesk" fontSize="7" textAnchor="middle" letterSpacing="0.1em" className="uppercase font-medium tnum">
                    GERADOR
                  </text>

                  <polygon points="320,40 350,50 350,70 320,80" stroke="#F0F0EB" strokeWidth="1.5" fill="#262829" />
                  <text x="335" y="64" fill="#F0F0EB" fontFamily="Space Grotesk" fontSize="7" textAnchor="middle" letterSpacing="0.1em" className="uppercase font-medium tnum">
                    COLETOR
                  </text>

                  <path d="M 75 50 C 140 50, 220 55, 320 55" stroke="#F0F0EB" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.7" />
                  <path d="M 75 60 C 140 60, 220 60, 320 60" stroke="#F0F0EB" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.9" />
                  <path d="M 75 70 C 140 70, 220 65, 320 65" stroke="#F0F0EB" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.7" />

                  <circle cx="200" cy="30" r="10" stroke="#858C92" strokeWidth="1" fill="#262829" />
                  <line x1="200" y1="40" x2="200" y2="60" stroke="#858C92" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Technical Specifications Data Table */}
          <ScrollReveal delay={200} className="lg:col-span-6 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px] overflow-hidden">
            <div className="p-6 border-b border-[#F0F0EB]/10 font-mono text-xs text-[#FF3B20] uppercase tracking-[0.14em] font-medium tnum flex items-center justify-between">
              <span>// ESPECIFICAÇÕES TÉCNICAS DA BANCADA DR1</span>
              <span className="w-2 h-2 rounded-full bg-[#FF3B20] animate-pulse" />
            </div>
            <div className="divide-y divide-[#F0F0EB]/10">
              <div className="p-5 flex items-center justify-between font-mono text-xs md:text-sm tnum">
                <span className="text-[#858C92]">{t('sec07.spec1Label')}</span>
                <span className="text-[#F0F0EB] font-medium">{t('sec07.spec1Value')}</span>
              </div>
              <div className="p-5 flex items-center justify-between font-mono text-xs md:text-sm tnum">
                <span className="text-[#858C92]">{t('sec07.spec2Label')}</span>
                <span className="text-[#F0F0EB] font-medium">{t('sec07.spec2Value')}</span>
              </div>
              <div className="p-5 flex items-center justify-between font-mono text-xs md:text-sm tnum">
                <span className="text-[#858C92]">{t('sec07.spec3Label')}</span>
                <span className="text-[#F0F0EB] font-medium">{t('sec07.spec3Value')}</span>
              </div>
              <div className="p-5 flex items-center justify-between font-mono text-xs md:text-sm tnum">
                <span className="text-[#858C92]">{t('sec07.spec4Label')}</span>
                <span className="text-[#F0F0EB] font-medium">{t('sec07.spec4Value')}</span>
              </div>
              <div className="p-5 flex items-center justify-between font-mono text-xs md:text-sm tnum bg-[#151718]">
                <span className="text-[#858C92]">{t('sec07.spec5Label')}</span>
                <span className="text-[#FF3B20] font-medium">{t('sec07.spec5Value')}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
