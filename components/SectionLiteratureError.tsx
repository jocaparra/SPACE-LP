'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionLiteratureError() {
  const { t } = useI18n();

  return (
    <section id="sec-03" className="py-32 bg-[#262829] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec03.num')}</span>
        <h2 className="section-h2 mb-4">{t('sec03.title')}</h2>
        <p className="text-[#858C92] text-lg max-w-[64ch] mb-16">
          {t('sec03.subtitle')}
        </p>

        {/* 2-Column Comparison with Vertical Hairline Divider */}
        <div className="bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px] mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#F0F0EB]/10">
            {/* Left Column: Silicone Compute */}
            <div className="p-8 md:p-12 space-y-6">
              <span className="text-xs font-mono text-[#FF3B20] tracking-[0.14em] uppercase font-medium block border-b border-[#F0F0EB]/10 pb-4 tnum">
                {t('sec03.leftHeader')}
              </span>
              <ul className="space-y-4 text-base md:text-lg text-[#F0F0EB] font-sans">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B20]" />
                  <span>{t('sec03.leftLine1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#858C92]" />
                  <span className="tnum">{t('sec03.leftLine2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#858C92]" />
                  <span>{t('sec03.leftLine3')}</span>
                </li>
                <li className="flex items-center gap-3 pt-4 border-t border-[#F0F0EB]/10 font-mono text-sm text-[#FF3B20] tnum">
                  <span>{t('sec03.leftLine4')}</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Liquid Metal Nuclear */}
            <div className="p-8 md:p-12 space-y-6 bg-[#121314]">
              <span className="text-xs font-mono text-[#858C92] tracking-[0.14em] uppercase block border-b border-[#F0F0EB]/10 pb-4 tnum">
                {t('sec03.rightHeader')}
              </span>
              <ul className="space-y-4 text-base md:text-lg text-[#858C92] font-sans">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#858C92]" />
                  <span>{t('sec03.rightLine1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#858C92]" />
                  <span className="tnum">{t('sec03.rightLine2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#858C92]" />
                  <span>{t('sec03.rightLine3')}</span>
                </li>
                <li className="flex items-center gap-3 pt-4 border-t border-[#F0F0EB]/10 font-mono text-sm text-[#858C92] tnum">
                  <span>{t('sec03.rightLine4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Full-width Bottom Banner */}
        <div className="p-8 md:p-12 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px] space-y-4">
          <p className="text-2xl md:text-3xl font-normal text-[#F0F0EB] leading-tight">
            {t('sec03.banner')}
          </p>
          <p className="font-mono text-sm text-[#858C92] uppercase tracking-[0.1em] border-t border-[#F0F0EB]/10 pt-4 tnum">
            // {t('sec03.subBanner')}
          </p>
        </div>
      </div>
    </section>
  );
}
