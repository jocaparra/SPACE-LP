'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionProductDR1() {
  const { t } = useI18n();

  return (
    <section id="sec-07" className="py-32 bg-[#262829] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec07.num')}</span>
        <h2 className="section-h2 mb-4">{t('sec07.title')}</h2>
        <p className="text-[#858C92] text-lg max-w-[68ch] mb-16">
          {t('sec07.body')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Technical SVG Line Drawing of Spes DR1 Test Bench */}
          <div className="lg:col-span-6 bg-[#0A0A0A] border border-[#F0F0EB]/10 p-8 rounded-[2px] aspect-[4/3] flex items-center justify-center relative">
            <svg viewBox="0 0 400 300" className="w-full h-full text-[#F0F0EB]" fill="none">
              {/* Vacuum Chamber Cylinder Outline */}
              <rect x="50" y="40" width="300" height="220" rx="4" stroke="#F0F0EB" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="6 4" />
              <line x1="50" y1="90" x2="350" y2="90" stroke="#F0F0EB" strokeOpacity="0.1" strokeWidth="1" />
              <line x1="50" y1="210" x2="350" y2="210" stroke="#F0F0EB" strokeOpacity="0.1" strokeWidth="1" />

              {/* Droplet Generator (Left) */}
              <rect x="70" y="110" width="40" height="80" stroke="#FF3B20" strokeWidth="1.5" fill="#262829" />
              <text x="90" y="154" fill="#FF3B20" fontFamily="Space Grotesk" fontSize="8" textAnchor="middle" letterSpacing="0.1em" className="uppercase font-medium tnum">
                GERADOR
              </text>

              {/* Collector Target (Right) */}
              <polygon points="310,110 340,130 340,170 310,190" stroke="#F0F0EB" strokeWidth="1.5" fill="#262829" />
              <text x="325" y="154" fill="#F0F0EB" fontFamily="Space Grotesk" fontSize="8" textAnchor="middle" letterSpacing="0.1em" className="uppercase font-medium tnum">
                COLETOR
              </text>

              {/* Droplet Stream (Dotted Lines) */}
              <path d="M 110 130 C 180 130, 240 135, 310 135" stroke="#F0F0EB" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.7" />
              <path d="M 110 150 C 180 150, 240 150, 310 150" stroke="#F0F0EB" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.9" />
              <path d="M 110 170 C 180 170, 240 165, 310 165" stroke="#F0F0EB" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.7" />

              {/* Optical Diagnostics Camera Vector */}
              <circle cx="210" cy="70" r="16" stroke="#858C92" strokeWidth="1.5" fill="#262829" />
              <line x1="210" y1="86" x2="210" y2="120" stroke="#858C92" strokeWidth="1" strokeDasharray="2 2" />
              <text x="210" y="55" fill="#858C92" fontFamily="Space Grotesk" fontSize="8" textAnchor="middle" letterSpacing="0.1em" className="uppercase tnum">
                CAM / PIV
              </text>

              {/* Dimension Annotations */}
              <line x1="70" y1="235" x2="340" y2="235" stroke="#858C92" strokeWidth="0.75" />
              <text x="205" y="248" fill="#858C92" fontFamily="Space Grotesk" fontSize="8" textAnchor="middle" letterSpacing="0.1em" className="uppercase tnum">
                ESCALA DE BANCADA (SPES DR1)
              </text>
            </svg>
          </div>

          {/* Right: Technical Specifications Data Table */}
          <div className="lg:col-span-6 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px] overflow-hidden">
            <div className="p-6 border-b border-[#F0F0EB]/10 font-mono text-xs text-[#FF3B20] uppercase tracking-[0.14em] font-medium tnum">
              // ESPECIFICAÇÕES TÉCNICAS DA BANCADA DR1
            </div>
            <div className="divide-y divide-[#F0F0EB]/10">
              <div className="p-4 flex items-center justify-between font-mono text-xs md:text-sm tnum">
                <span className="text-[#858C92]">{t('sec07.spec1Label')}</span>
                <span className="text-[#F0F0EB] font-medium">{t('sec07.spec1Value')}</span>
              </div>
              <div className="p-4 flex items-center justify-between font-mono text-xs md:text-sm tnum">
                <span className="text-[#858C92]">{t('sec07.spec2Label')}</span>
                <span className="text-[#F0F0EB] font-medium">{t('sec07.spec2Value')}</span>
              </div>
              <div className="p-4 flex items-center justify-between font-mono text-xs md:text-sm tnum">
                <span className="text-[#858C92]">{t('sec07.spec3Label')}</span>
                <span className="text-[#F0F0EB] font-medium">{t('sec07.spec3Value')}</span>
              </div>
              <div className="p-4 flex items-center justify-between font-mono text-xs md:text-sm tnum">
                <span className="text-[#858C92]">{t('sec07.spec4Label')}</span>
                <span className="text-[#F0F0EB] font-medium">{t('sec07.spec4Value')}</span>
              </div>
              <div className="p-4 flex items-center justify-between font-mono text-xs md:text-sm tnum bg-[#151718]">
                <span className="text-[#858C92]">{t('sec07.spec5Label')}</span>
                <span className="text-[#FF3B20] font-medium">{t('sec07.spec5Value')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
