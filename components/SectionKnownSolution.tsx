'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionKnownSolution() {
  const { t } = useI18n();

  return (
    <section id="sec-02" className="py-32 bg-[#0A0A0A] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec02.num')}</span>
        <h2 className="section-h2 mb-16">{t('sec02.title')}</h2>

        {/* 4-Stage Horizontal Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          {/* Stage 1 */}
          <div className="p-6 bg-[#262829] border border-[#F0F0EB]/10 rounded-[2px]">
            <span className="text-[11px] font-mono text-[#858C92] block mb-3 tnum">
              {t('sec02.stage1')}
            </span>
            <p className="text-sm text-[#F0F0EB]">
              {t('sec02.stage1Desc')}
            </p>
          </div>

          {/* Stage 2 */}
          <div className="p-6 bg-[#262829] border border-[#F0F0EB]/10 rounded-[2px]">
            <span className="text-[11px] font-mono text-[#858C92] block mb-3 tnum">
              {t('sec02.stage2')}
            </span>
            <p className="text-sm text-[#F0F0EB]">
              {t('sec02.stage2Desc')}
            </p>
          </div>

          {/* Stage 3 (Highlighted in Orange) */}
          <div className="p-6 bg-[#262829] border-2 border-[#FF3B20] rounded-[2px] relative">
            <span className="text-[11px] font-mono text-[#FF3B20] font-medium block mb-3 tnum">
              {t('sec02.stage3')}
            </span>
            <p className="text-sm text-[#F0F0EB] mb-4">
              {t('sec02.stage3Desc')}
            </p>
            <div className="pt-3 border-t border-[#FF3B20]/30 text-[11px] font-mono text-[#FF3B20] uppercase tracking-[0.05em] tnum">
              // {t('sec02.note')}
            </div>
          </div>

          {/* Stage 4 */}
          <div className="p-6 bg-[#262829] border border-[#F0F0EB]/10 rounded-[2px]">
            <span className="text-[11px] font-mono text-[#858C92] block mb-3 tnum">
              {t('sec02.stage4')}
            </span>
            <p className="text-sm text-[#F0F0EB]">
              {t('sec02.stage4Desc')}
            </p>
          </div>
        </div>

        {/* Big Number Block & Bound Conditions */}
        <div className="bg-[#262829] border border-[#F0F0EB]/10 p-8 md:p-12 max-w-[640px] rounded-[2px]">
          <div className="font-sans text-5xl md:text-6xl font-normal text-[#F0F0EB] tracking-tight mb-4 tnum">
            {t('sec02.bigNumber')}
          </div>
          <div className="font-mono text-xs md:text-sm text-[#858C92] uppercase tracking-[0.1em] border-t border-[#F0F0EB]/10 pt-4 tnum">
            // {t('sec02.conditions')}
          </div>
        </div>
      </div>
    </section>
  );
}
