'use client';

import React from 'react';
import Image from 'next/image';
import Logo from './Logo';
import ScrollReveal from './ScrollReveal';
import { useI18n } from '../lib/i18n';

export default function SectionHero() {
  const { t } = useI18n();

  return (
    <section id="sec-00" className="relative bg-[#0A0A0A] border-b border-[#F0F0EB]/10 pt-20 pb-16 min-h-[calc(100vh-88px)] flex flex-col justify-between overflow-hidden">
      {/* Background Image Rail with Gradient Mask (Hydrexx Style) */}
      <div className="absolute right-0 top-0 w-full lg:w-3/5 h-full pointer-events-none opacity-30 lg:opacity-50">
        <Image
          src="/hero_radiator.jpg"
          alt="Space station thermal radiator undergoing vacuum testing"
          fill
          priority
          className="object-cover object-center filter grayscale-[15%] brightness-[0.75] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full my-auto">
        <ScrollReveal className="max-w-[850px]">
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
          <p className="text-lg md:text-xl text-[#858C92] leading-relaxed max-w-[64ch] mb-12">
            {t('hero.body')}
          </p>

          {/* APOIADO POR / BACKED BY Logos Row */}
          <div className="pt-8 border-t border-[#F0F0EB]/10 max-w-[800px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#858C92] block mb-6 tnum">
              {t('hero.backedBy')}
            </span>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <img
                src="/logo_nasa_v2.png"
                alt="NASA"
                className="h-7 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity filter brightness-0 invert"
              />
              <img
                src="/logo_nvidia_clean.png"
                alt="NVIDIA Inception Program"
                className="h-6 md:h-7 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <img
                src="/logo_aws_clean.png"
                alt="AWS Startup Programs"
                className="h-7 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <img
                src="/logo_intel_clean.png"
                alt="Intel"
                className="h-7 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* 6-Column Data Bar */}
      <div className="relative z-10 w-full border-t border-b border-[#F0F0EB]/10 bg-[#262829]/80 backdrop-blur-md mt-16">
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
