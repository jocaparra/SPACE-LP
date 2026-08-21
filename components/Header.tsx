'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useI18n } from '../lib/i18n';

export default function Header() {
  const { lang, setLang } = useI18n();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Compact Floating Pill Navbar Header (Tropicalia.dev style) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[840px]">
        <div className="relative bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#F0F0EB]/15 rounded-full px-4 md:px-5 py-2 shadow-2xl flex items-center justify-between transition-all duration-300">
          {/* Reading Progress Fill inside Pill Border */}
          <div
            className="absolute bottom-0 left-5 right-5 h-[1.5px] bg-[#FF3B20] rounded-full transition-all duration-75 opacity-80"
            style={{ width: `calc(${scrollProgress}% - 40px)` }}
          />

          {/* Logo & Brand Name */}
          <a href="#sec-00" className="flex items-center gap-2.5 group py-0.5">
            <div className="w-7 h-7 rounded-full bg-[#262829] border border-[#F0F0EB]/15 flex items-center justify-center group-hover:border-[#FF3B20]/50 transition-colors">
              <Logo className="w-3.5 h-3.5 text-[#F0F0EB] group-hover:text-[#FF3B20] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-[13px] font-bold tracking-[0.2em] uppercase text-[#F0F0EB] leading-none">
                SPES
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-[0.1em] text-[#858C92] leading-tight mt-0.5">
                SPACE SYSTEMS ENGINEERING
              </span>
            </div>
          </a>

          {/* Right Controls: Language Switcher & Contact CTA Button */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher Pill */}
            <div className="flex items-center gap-0.5 font-mono text-[10px] tnum border border-[#F0F0EB]/15 bg-[#262829]/80 p-0.5 rounded-full">
              <button
                onClick={() => setLang('pt')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  lang === 'pt'
                    ? 'bg-[#FF3B20] text-[#F0F0EB] font-medium'
                    : 'text-[#858C92] hover:text-[#F0F0EB]'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  lang === 'en'
                    ? 'bg-[#FF3B20] text-[#F0F0EB] font-medium'
                    : 'text-[#858C92] hover:text-[#F0F0EB]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Tropicalia-style Action Button */}
            <a
              href="#sec-11"
              className="inline-flex items-center gap-1.5 bg-[#FF3B20] hover:bg-[#FF8266] text-[#F0F0EB] text-xs font-mono font-medium px-3.5 py-1.5 rounded-full transition-all shadow-md hover:shadow-orange-500/20"
            >
              <span>{lang === 'pt' ? 'Contato' : 'Contact'}</span>
              <span className="text-[10px]">→</span>
            </a>
          </div>
        </div>
      </header>

      {/* Right Edge Fixed Scroll Track Indicator */}
      <div className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-40 w-[2px] h-32 bg-[#F0F0EB]/10 rounded-full">
        <div
          className="w-full bg-[#FF3B20] rounded-full transition-all duration-100"
          style={{ height: `${scrollProgress}%` }}
        />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#858C92] tnum">
          {Math.round(scrollProgress)}%
        </div>
      </div>
    </>
  );
}
