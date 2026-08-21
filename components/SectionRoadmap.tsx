'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionRoadmap() {
  const { t } = useI18n();

  const items = [
    {
      dateKey: 'sec08.item1Date',
      titleKey: 'sec08.item1Title',
      descKey: 'sec08.item1Desc',
      active: true,
    },
    {
      dateKey: 'sec08.item2Date',
      titleKey: 'sec08.item2Title',
      descKey: 'sec08.item2Desc',
      active: false,
    },
    {
      dateKey: 'sec08.item3Date',
      titleKey: 'sec08.item3Title',
      descKey: 'sec08.item3Desc',
      active: false,
    },
    {
      dateKey: 'sec08.item4Date',
      titleKey: 'sec08.item4Title',
      descKey: 'sec08.item4Desc',
      active: false,
    },
    {
      dateKey: 'sec08.item5Date',
      titleKey: 'sec08.item5Title',
      descKey: 'sec08.item5Desc',
      active: false,
    },
  ];

  return (
    <section id="sec-08" className="py-32 bg-[#0A0A0A] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec08.num')}</span>
        <h2 className="section-h2 mb-16">{t('sec08.title')}</h2>

        {/* Vertical Timeline with Hairline & Markers */}
        <div className="relative border-l border-[#F0F0EB]/10 pl-6 md:pl-10 ml-3 space-y-12 max-w-[800px]">
          {items.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Marker */}
              <span
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full border-2 ${
                  item.active
                    ? 'bg-[#FF3B20] border-[#FF3B20] shadow-none'
                    : 'bg-[#0A0A0A] border-[#858C92]'
                }`}
              />

              <span className="text-xs font-mono text-[#FF3B20] tracking-[0.14em] uppercase block mb-1 tnum">
                {t(item.dateKey)}
              </span>
              <h3 className="text-xl md:text-2xl font-normal text-[#F0F0EB] mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm md:text-base text-[#858C92] leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
