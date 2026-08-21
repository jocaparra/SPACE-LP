'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useI18n } from '../lib/i18n';

export default function SectionFooter() {
  const { t } = useI18n();

  // Countdown to Dec 31, 2026
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-12-31T23:59:59Z').getTime();

    const calculateDifference = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateDifference();
    const interval = setInterval(calculateDifference, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="sec-11" className="py-32 bg-[#262829] text-[#F0F0EB]">
      <div className="max-w-[1280px] mx-auto px-6">
        <span className="section-num">{t('sec11.num')}</span>
        <h2 className="section-h2 mb-16">{t('sec11.title')}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Email & Location */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#858C92] uppercase tracking-[0.14em] block tnum">
                {t('sec11.emailLabel')}
              </span>
              <a
                href="mailto:contato@spes.space"
                className="text-2xl md:text-3xl font-medium text-[#F0F0EB] hover:text-[#FF3B20] transition-colors tnum"
              >
                {t('sec11.emailValue')}
              </a>
            </div>

            <div className="space-y-2 pt-6 border-t border-[#F0F0EB]/10">
              <span className="text-xs font-mono text-[#858C92] uppercase tracking-[0.14em] block tnum">
                {t('sec11.locationLabel')}
              </span>
              <p className="text-lg text-[#F0F0EB] font-mono tnum">
                {t('sec11.locationValue')}
              </p>
            </div>
          </div>

          {/* Live Countdown Timer to Milestone (Dec 2026) */}
          <div className="lg:col-span-6 bg-[#0A0A0A] border border-[#F0F0EB]/10 p-8 rounded-[2px] space-y-6">
            <span className="text-xs font-mono text-[#FF3B20] uppercase tracking-[0.14em] block font-medium tnum">
              // {t('sec11.countdownLabel')}
            </span>

            <div className="grid grid-cols-4 gap-4 text-center font-mono tnum">
              <div className="p-4 bg-[#262829] border border-[#F0F0EB]/10 rounded-[2px]">
                <span className="text-2xl md:text-4xl text-[#F0F0EB] font-medium block">
                  {String(timeLeft.days).padStart(3, '0')}
                </span>
                <span className="text-[10px] text-[#858C92] uppercase tracking-[0.1em] block mt-1">
                  DIAS
                </span>
              </div>
              <div className="p-4 bg-[#262829] border border-[#F0F0EB]/10 rounded-[2px]">
                <span className="text-2xl md:text-4xl text-[#F0F0EB] font-medium block">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-[#858C92] uppercase tracking-[0.1em] block mt-1">
                  HORAS
                </span>
              </div>
              <div className="p-4 bg-[#262829] border border-[#F0F0EB]/10 rounded-[2px]">
                <span className="text-2xl md:text-4xl text-[#F0F0EB] font-medium block">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-[#858C92] uppercase tracking-[0.1em] block mt-1">
                  MIN
                </span>
              </div>
              <div className="p-4 bg-[#262829] border border-[#F0F0EB]/10 rounded-[2px]">
                <span className="text-2xl md:text-4xl text-[#FF3B20] font-medium block">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-[#858C92] uppercase tracking-[0.1em] block mt-1">
                  SEG
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-12 border-t border-[#F0F0EB]/10 space-y-6 text-xs text-[#858C92] font-mono tnum leading-relaxed">
          <p>// {t('sec11.disclaimer')}</p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#F0F0EB]/10">
            <div className="flex items-center gap-3">
              <Logo className="w-4 h-4 text-[#F0F0EB]" />
              <span className="text-[#F0F0EB] uppercase tracking-[0.1em]">SPES SPACE SYSTEMS ENGINEERING SOLUTIONS</span>
            </div>
            <span>{t('sec11.copyright')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
