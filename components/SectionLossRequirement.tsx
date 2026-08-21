'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionLossRequirement() {
  const { t } = useI18n();

  return (
    <section id="sec-06" className="py-32 bg-[#0A0A0A] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec06.num')}</span>
        <h2 className="section-h2 mb-6">{t('sec06.title')}</h2>
        
        <p className="text-[#858C92] text-lg max-w-[64ch] mb-12">
          {t('sec06.body')}
        </p>

        {/* Monospace Formula in Hairline Box */}
        <div className="bg-[#262829] border border-[#F0F0EB]/10 p-8 md:p-12 rounded-[2px] max-w-[900px] mb-8">
          <span className="text-[11px] font-mono text-[#858C92] uppercase tracking-[0.14em] block mb-4 tnum">
            {t('sec06.formulaLabel')}
          </span>
          <div className="font-mono text-base md:text-xl text-[#FF3B20] bg-[#0A0A0A] border border-[#F0F0EB]/10 p-6 rounded-[2px] overflow-x-auto tnum">
            {t('sec06.formula')}
          </div>
        </div>

        {/* Note */}
        <p className="font-mono text-xs text-[#858C92] uppercase tracking-[0.1em] tnum">
          // {t('sec06.note')}
        </p>
      </div>
    </section>
  );
}
