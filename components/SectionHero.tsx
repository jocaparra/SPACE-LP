'use client';

import React from 'react';
import Logo from './Logo';
import { useI18n } from '../lib/i18n';

export default function SectionHero() {
  const { t } = useI18n();

  return (
    <section id="sec-00" className="relative bg-[#0A0A0A] border-b border-[#F0F0EB]/10 pt-20 pb-16 min-h-[calc(100vh-88px)] flex flex-col justify-between">
      <div className="max-w-[1280px] mx-auto px-6 w-full my-auto">
        <div className="max-w-[900px]">
          {/* Section Numbering */}
          <span className="section-num">{t('hero.num')}</span>

          {/* Logo & Descriptor */}
          <div className="flex items-center gap-4 mb-8">
            <Logo className="w-10 h-10 text-[#F0F0EB]" />
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#858C92] tnum">
              {t('hero.descriptor')}
            </span>
          </div>

          {/* Large Display Title */}
          <h1 className="hero-display mb-8">
            <span className="block text-[#FF3B20] font-medium">{t('hero.titleLine1')}</span>
            <span className="block text-[#F0F0EB] font-normal">{t('hero.titleLine2')}</span>
          </h1>

          {/* Support Paragraph */}
          <p className="text-lg md:text-xl text-[#858C92] leading-relaxed max-w-[64ch]">
            {t('hero.body')}
          </p>
        </div>
      </div>

      {/* 6-Column Data Bar */}
      <div className="w-full border-t border-b border-[#F0F0EB]/10 bg-[#262829]/50 mt-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-[#F0F0EB]/10">
            <div className="p-6">
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#858C92] block mb-2 tnum">
                {t('hero.data1Label')}
              </span>
              <span className="text-sm md:text-base text-[#F0F0EB] font-medium tnum">
                {t('hero.data1Value')}
              </span>
            </div>
            <div className="p-6">
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#858C92] block mb-2 tnum">
                {t('hero.data2Label')}
              </span>
              <span className="text-sm md:text-base text-[#F0F0EB] font-medium tnum">
                {t('hero.data2Value')}
              </span>
            </div>
            <div className="p-6">
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#858C92] block mb-2 tnum">
                {t('hero.data3Label')}
              </span>
              <span className="text-sm md:text-base text-[#F0F0EB] font-medium tnum">
                {t('hero.data3Value')}
              </span>
            </div>
            <div className="p-6">
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#858C92] block mb-2 tnum">
                {t('hero.data4Label')}
              </span>
              <span className="text-sm md:text-base text-[#F0F0EB] font-medium tnum">
                {t('hero.data4Value')}
              </span>
            </div>
            <div className="p-6">
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#858C92] block mb-2 tnum">
                {t('hero.data5Label')}
              </span>
              <span className="text-sm md:text-base text-[#F0F0EB] font-medium tnum">
                {t('hero.data5Value')}
              </span>
            </div>
            <div className="p-6">
              <span className="text-[11px] uppercase tracking-[0.1em] text-[#858C92] block mb-2 tnum">
                {t('hero.data6Label')}
              </span>
              <span className="text-sm md:text-base text-[#F0F0EB] font-medium tnum">
                {t('hero.data6Value')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
