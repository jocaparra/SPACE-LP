'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionStatusCompare() {
  const { t } = useI18n();

  return (
    <section id="sec-09" className="py-32 bg-[#262829] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec09.num')}</span>
        <h2 className="section-h2 mb-16">{t('sec09.title')}</h2>

        {/* 2-Column Status Comparison */}
        <div className="bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px] mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#F0F0EB]/10">
            {/* Left: What We Have (Main White Text) */}
            <div className="p-8 md:p-12 space-y-6">
              <span className="text-xs font-mono text-[#F0F0EB] tracking-[0.14em] uppercase font-medium block border-b border-[#F0F0EB]/10 pb-4 tnum">
                {t('sec09.leftTitle')}
              </span>
              <ul className="space-y-4 text-base md:text-lg text-[#F0F0EB]">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF3B20] font-mono mt-1">✓</span>
                  <span>{t('sec09.left1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF3B20] font-mono mt-1">✓</span>
                  <span>{t('sec09.left2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF3B20] font-mono mt-1">✓</span>
                  <span>{t('sec09.left3')}</span>
                </li>
              </ul>
            </div>

            {/* Right: What We Don't Have (Secondary Gray Text) */}
            <div className="p-8 md:p-12 space-y-6 bg-[#121314]">
              <span className="text-xs font-mono text-[#858C92] tracking-[0.14em] uppercase font-medium block border-b border-[#F0F0EB]/10 pb-4 tnum">
                {t('sec09.rightTitle')}
              </span>
              <ul className="space-y-4 text-base md:text-lg text-[#858C92]">
                <li className="flex items-start gap-3">
                  <span className="text-[#858C92] font-mono mt-1">✕</span>
                  <span>{t('sec09.right1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#858C92] font-mono mt-1">✕</span>
                  <span>{t('sec09.right2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#858C92] font-mono mt-1">✕</span>
                  <span>{t('sec09.right3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#858C92] font-mono mt-1">✕</span>
                  <span>{t('sec09.right4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Verification Line */}
        <div className="p-8 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px]">
          <p className="text-lg md:text-xl text-[#F0F0EB] font-normal">
            {t('sec09.closing')}
          </p>
        </div>
      </div>
    </section>
  );
}
