'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionSources() {
  const { t } = useI18n();

  return (
    <section id="sec-10" className="py-32 bg-[#0A0A0A] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec10.num')}</span>
        <h2 className="section-h2 mb-16">{t('sec10.title')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Primary Literature Block */}
          <div className="lg:col-span-7 bg-[#262829] border border-[#F0F0EB]/10 p-8 rounded-[2px] space-y-6">
            <span className="text-xs font-mono text-[#FF3B20] tracking-[0.14em] uppercase font-medium block border-b border-[#F0F0EB]/10 pb-4 tnum">
              {t('sec10.primTitle')}
            </span>
            <ul className="space-y-4 font-mono text-xs md:text-sm text-[#F0F0EB] tnum leading-relaxed">
              <li className="p-3 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px]">
                {t('sec10.prim1')}
              </li>
              <li className="p-3 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px]">
                {t('sec10.prim2')}
              </li>
              <li className="p-3 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px]">
                {t('sec10.prim3')}
              </li>
              <li className="p-3 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px]">
                {t('sec10.prim4')}
              </li>
              <li className="p-3 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px]">
                {t('sec10.prim5')}
              </li>
            </ul>
          </div>

          {/* Market Analyses Block */}
          <div className="lg:col-span-5 bg-[#262829] border border-[#F0F0EB]/10 p-8 rounded-[2px] space-y-6">
            <span className="text-xs font-mono text-[#858C92] tracking-[0.14em] uppercase font-medium block border-b border-[#F0F0EB]/10 pb-4 tnum">
              {t('sec10.mktTitle')}
            </span>
            <ul className="space-y-4 font-mono text-xs md:text-sm text-[#858C92] tnum leading-relaxed">
              <li className="p-3 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px]">
                {t('sec10.mkt1')}
              </li>
            </ul>
          </div>
        </div>

        {/* Counter-Argument Rebuttal Block */}
        <div className="p-8 md:p-10 bg-[#262829] border border-[#F0F0EB]/10 rounded-[2px] space-y-4 max-w-[1000px]">
          <span className="text-xs font-mono text-[#FF3B20] tracking-[0.14em] uppercase font-medium block tnum">
            // {t('sec10.counterTitle')}
          </span>
          <p className="text-base md:text-lg text-[#858C92] leading-relaxed">
            {t('sec10.counterBody')}
          </p>
        </div>
      </div>
    </section>
  );
}
