'use client';

import React, { useState } from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionOpenProblems() {
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<number | null>(0); // First item open by default

  const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const problems = [
    {
      id: 1,
      titleKey: 'sec05.p1Title',
      diffKey: 'sec05.diffSevere',
      openKey: 'sec05.p1Open',
      betKey: 'sec05.p1Bet',
    },
    {
      id: 2,
      titleKey: 'sec05.p2Title',
      diffKey: 'sec05.diffHigh',
      openKey: 'sec05.p2Open',
      betKey: 'sec05.p2Bet',
    },
    {
      id: 3,
      titleKey: 'sec05.p3Title',
      diffKey: 'sec05.diffMedium',
      openKey: 'sec05.p3Open',
      betKey: 'sec05.p3Bet',
    },
    {
      id: 4,
      titleKey: 'sec05.p4Title',
      diffKey: 'sec05.diffSevere',
      openKey: 'sec05.p4Open',
      betKey: 'sec05.p4Bet',
    },
    {
      id: 5,
      titleKey: 'sec05.p5Title',
      diffKey: 'sec05.diffSevere',
      openKey: 'sec05.p5Open',
      betKey: 'sec05.p5Bet',
    },
    {
      id: 6,
      titleKey: 'sec05.p6Title',
      diffKey: 'sec05.diffHigh',
      openKey: 'sec05.p6Open',
      betKey: 'sec05.p6Bet',
    },
    {
      id: 7,
      titleKey: 'sec05.p7Title',
      diffKey: 'sec05.diffHigh',
      openKey: 'sec05.p7Open',
      betKey: 'sec05.p7Bet',
    },
    {
      id: 8,
      titleKey: 'sec05.p8Title',
      diffKey: 'sec05.diffMedium',
      openKey: 'sec05.p8Open',
      betKey: 'sec05.p8Bet',
    },
    {
      id: 9,
      titleKey: 'sec05.p9Title',
      diffKey: 'sec05.diffSevere',
      openKey: 'sec05.p9Open',
      betKey: 'sec05.p9Bet',
    },
  ];

  return (
    <section id="sec-05" className="py-32 bg-[#262829] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec05.num')}</span>
        <h2 className="section-h2 mb-16">{t('sec05.title')}</h2>

        {/* 01 - 09 Expandable Accordion List */}
        <div className="space-y-4 max-w-[1000px] mb-16">
          {problems.map((prob, index) => {
            const isOpen = expanded === index;
            return (
              <div
                key={prob.id}
                className="bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#151718] transition-colors"
                >
                  <span className="text-base md:text-lg font-medium text-[#F0F0EB] tnum">
                    {t(prob.titleKey)}
                  </span>
                  <div className="flex items-center gap-4 shrink-0 font-mono text-xs tnum">
                    <span className="px-2 py-0.5 border border-[#FF3B20]/40 text-[#FF3B20] uppercase tracking-[0.1em] rounded-[2px]">
                      {t(prob.diffKey)}
                    </span>
                    <span className="text-[#858C92] text-sm">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#F0F0EB]/10 space-y-4 text-sm md:text-base leading-relaxed text-[#858C92]">
                    <p>{t(prob.openKey)}</p>
                    <p className="text-[#F0F0EB] font-medium border-l-2 border-[#FF3B20] pl-4 py-1">
                      {t(prob.betKey)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Call to Action */}
        <div className="p-8 bg-[#0A0A0A] border border-[#F0F0EB]/10 rounded-[2px] flex flex-wrap items-center justify-between gap-6 max-w-[1000px]">
          <span className="text-xl text-[#F0F0EB]">
            {t('sec05.ctaText')}
          </span>
          <a
            href="#sec-11"
            className="px-6 py-3 bg-[#FF3B20] text-[#F0F0EB] font-mono text-xs uppercase tracking-[0.1em] font-medium hover:bg-[#FF8266] transition-colors rounded-[2px] tnum"
          >
            {t('sec05.ctaAction')}
          </a>
        </div>
      </div>
    </section>
  );
}
