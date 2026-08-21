'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useI18n } from '../lib/i18n';

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      {/* Floating Pill Navbar Header (Tropicalia.dev style) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1240px]">
        <div className="relative bg-[#0A0A0A]/85 backdrop-blur-xl border border-[#F0F0EB]/15 rounded-full px-5 md:px-7 py-2.5 shadow-2xl flex items-center justify-between transition-all duration-300">
          {/* Reading Progress Fill inside Pill Border */}
          <div
            className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-[#FF3B20] rounded-full transition-all duration-75 opacity-80"
            style={{ width: `calc(${scrollProgress}% - 48px)` }}
          />

          {/* Logo & Brand Name */}
          <a href="#sec-00" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-[#262829] border border-[#F0F0EB]/15 flex items-center justify-center group-hover:border-[#FF3B20]/50 transition-colors">
              <Logo className="w-4 h-4 text-[#F0F0EB] group-hover:text-[#FF3B20] transition-colors" />
            </div>
            <span className="font-sans text-[14px] font-bold tracking-[0.2em] uppercase text-[#F0F0EB]">
              SPES
            </span>
          </a>

          {/* Desktop Navigation Links (Tropicalia.dev Minimalist Pill Navigation) */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#858C92] hover:text-[#F0F0EB] hover:bg-[#F0F0EB]/10 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all tnum"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          {/* Right Controls: Language Switcher & Contact CTA Button */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center gap-1 font-mono text-[11px] tnum border border-[#F0F0EB]/15 bg-[#262829]/80 px-2 py-1 rounded-full">
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
              className="hidden sm:inline-flex items-center gap-2 bg-[#FF3B20] hover:bg-[#FF8266] text-[#F0F0EB] text-xs font-mono font-medium px-4 py-2 rounded-full transition-all shadow-lg hover:shadow-orange-500/20"
            >
              <span>{lang === 'pt' ? 'Contato' : 'Contact'}</span>
              <span>→</span>
            </a>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#858C92] hover:text-[#F0F0EB] focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-2 bg-[#0A0A0A]/95 backdrop-blur-2xl border border-[#F0F0EB]/15 rounded-3xl p-5 space-y-2 font-mono text-xs uppercase tracking-widest shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 rounded-xl text-[#858C92] hover:text-[#F0F0EB] hover:bg-[#F0F0EB]/10 transition-all tnum"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>
        )}
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
