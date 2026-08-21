'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useI18n } from '../lib/i18n';

export default function Header() {
  const { lang, setLang, t } = useI18n();
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

  const navLinks = [
    { href: '#sec-00', labelKey: 'nav.hero' },
    { href: '#sec-01', labelKey: 'nav.constraint' },
    { href: '#sec-02', labelKey: 'nav.solution' },
    { href: '#sec-03', labelKey: 'nav.literatureError' },
    { href: '#sec-04', labelKey: 'nav.thesis' },
    { href: '#sec-05', labelKey: 'nav.problems' },
    { href: '#sec-06', labelKey: 'nav.lossReq' },
    { href: '#sec-07', labelKey: 'nav.dr1' },
    { href: '#sec-08', labelKey: 'nav.roadmap' },
    { href: '#sec-09', labelKey: 'nav.compare' },
    { href: '#sec-10', labelKey: 'nav.sources' },
    { href: '#sec-11', labelKey: 'nav.contact' },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#262829]/95 backdrop-blur-sm border-b border-[#F0F0EB]/10">
        {/* Top Reading Progress Bar */}
        <div
          className="h-[2px] bg-[#FF3B20] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />

        <nav className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <a href="#sec-00" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <Logo className="w-5 h-5 text-[#F0F0EB]" />
            <span className="font-sans text-[13px] font-bold tracking-[0.2em] uppercase text-[#F0F0EB]">
              SPES
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-5 text-[11px] uppercase tracking-[0.1em]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#858C92] hover:text-[#F0F0EB] transition-colors tnum"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 font-mono text-[11px] tnum">
            <button
              onClick={() => setLang('pt')}
              className={`px-2 py-0.5 rounded-[2px] transition-colors ${
                lang === 'pt'
                  ? 'text-[#FF3B20] font-medium border border-[#FF3B20]/40'
                  : 'text-[#858C92] hover:text-[#F0F0EB]'
              }`}
            >
              PT
            </button>
            <span className="text-[#858C92]/30 select-none">/</span>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded-[2px] transition-colors ${
                lang === 'en'
                  ? 'text-[#FF3B20] font-medium border border-[#FF3B20]/40'
                  : 'text-[#858C92] hover:text-[#F0F0EB]'
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      {/* Right Edge Fixed Scroll Track Indicator (Hydrexx Style) */}
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
