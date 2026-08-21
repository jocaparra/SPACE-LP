'use client';

import React from 'react';
import { useI18n } from '../lib/i18n';

export default function SectionConstraint() {
  const { t } = useI18n();

  return (
    <section id="sec-01" className="py-32 bg-[#262829] border-b border-[#F0F0EB]/10">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec01.num')}</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="section-h2">{t('sec01.title')}</h2>
            <p className="text-[#858C92] text-base md:text-lg leading-relaxed">
              {t('sec01.body')}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0A0A0A] border border-[#F0F0EB]/10 p-6 md:p-8 rounded-[2px]">
              {/* SVG 2-Curve Graph */}
              <div className="w-full aspect-[16/9] relative">
                <svg viewBox="0 0 600 320" className="w-full h-full text-[#F0F0EB]" fill="none">
                  {/* Grid Lines */}
                  <line x1="50" y1="40" x2="550" y2="40" stroke="#F0F0EB" strokeOpacity="0.08" strokeDasharray="4 4" />
                  <line x1="50" y1="110" x2="550" y2="110" stroke="#F0F0EB" strokeOpacity="0.08" strokeDasharray="4 4" />
                  <line x1="50" y1="180" x2="550" y2="180" stroke="#F0F0EB" strokeOpacity="0.08" strokeDasharray="4 4" />
                  <line x1="50" y1="250" x2="550" y2="250" stroke="#F0F0EB" strokeOpacity="0.08" strokeDasharray="4 4" />

                  {/* Axes */}
                  <line x1="50" y1="20" x2="50" y2="270" stroke="#F0F0EB" strokeOpacity="0.2" strokeWidth="1" />
                  <line x1="50" y1="270" x2="570" y2="270" stroke="#F0F0EB" strokeOpacity="0.2" strokeWidth="1" />

                  {/* Axis Labels */}
                  <text x="30" y="30" fill="#858C92" fontFamily="Space Grotesk" fontSize="9" letterSpacing="0.1em" textAnchor="end" className="tnum">
                    {t('sec01.chartLabelY')}
                  </text>
                  <text x="560" y="295" fill="#858C92" fontFamily="Space Grotesk" fontSize="9" letterSpacing="0.1em" textAnchor="end" className="tnum">
                    {t('sec01.chartLabelX')}
                  </text>

                  {/* Solid Panel Curve (Steep Exponential) */}
                  <path
                    d="M 50 250 Q 250 240, 360 170 T 520 40"
                    stroke="#858C92"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                    fill="none"
                  />

                  {/* Droplet Curtain Curve (Flat Linear / Low slope) */}
                  <path
                    d="M 50 258 Q 300 240, 550 200"
                    stroke="#F0F0EB"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Intersection Crossover Point in Orange */}
                  <line x1="330" y1="20" x2="330" y2="270" stroke="#FF3B20" strokeOpacity="0.4" strokeDasharray="3 3" strokeWidth="1" />
                  <circle cx="330" cy="188" r="5" fill="#FF3B20" />
                  <circle cx="330" cy="188" r="8" stroke="#FF3B20" strokeOpacity="0.5" fill="none" />

                  {/* Crossover Annotation */}
                  <rect x="340" y="165" width="180" height="24" fill="#262829" stroke="#FF3B20" strokeWidth="1" rx="2" />
                  <text x="348" y="181" fill="#FF3B20" fontFamily="Space Grotesk" fontSize="9" fontWeight="500" letterSpacing="0.08em" className="uppercase tnum">
                    {t('sec01.crossoverLabel')}
                  </text>
                </svg>
              </div>

              {/* Graph Legend */}
              <div className="mt-6 pt-4 border-t border-[#F0F0EB]/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono tnum">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-[2px] bg-[#858C92]" />
                    <span className="text-[#858C92]">{t('sec01.curvePanel')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-[2px] bg-[#F0F0EB]" />
                    <span className="text-[#F0F0EB]">{t('sec01.curveDroplet')}</span>
                  </div>
                </div>
                <p className="text-[#858C92] text-xs">
                  // {t('sec01.legend')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
