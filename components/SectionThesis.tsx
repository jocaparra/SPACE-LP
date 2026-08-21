'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionThesis() {
  const { t } = useI18n();

  return (
    <section id="sec-04" className="py-32 bg-[#0A0A0A] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec04.num')}</span>

        <div className="max-w-[1000px] mt-8 space-y-6">
          <p className="text-3xl md:text-5xl font-normal text-[#F0F0EB] leading-snug">
            {t('sec04.line1')}
          </p>
          <p className="text-3xl md:text-5xl font-normal text-[#858C92] leading-snug">
            {t('sec04.line2')}
          </p>
          <p className="text-3xl md:text-5xl font-medium text-[#FF3B20] leading-snug">
            {t('sec04.line3')}
          </p>
        </div>
      </div>
    </section>
  );
}
