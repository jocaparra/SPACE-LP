'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '../lib/i18n';

function UsaFlag() {
  return (
    <svg className="w-4 h-3 rounded-[1px] inline-block shrink-0" viewBox="0 0 760 400" fill="none">
      <rect width="760" height="400" fill="#B22234" />
      <path
        d="M0,30.77 h760 M0,92.3 h760 M0,153.8 h760 M0,215.4 h760 M0,276.9 h760 M0,338.5 h760"
        stroke="#FFFFFF"
        strokeWidth="30.77"
      />
      <rect width="304" height="215.4" fill="#3C3B6E" />
      <circle cx="50" cy="35" r="7" fill="#FFFFFF" />
      <circle cx="150" cy="35" r="7" fill="#FFFFFF" />
      <circle cx="250" cy="35" r="7" fill="#FFFFFF" />
      <circle cx="100" cy="85" r="7" fill="#FFFFFF" />
      <circle cx="200" cy="85" r="7" fill="#FFFFFF" />
      <circle cx="50" cy="135" r="7" fill="#FFFFFF" />
      <circle cx="150" cy="135" r="7" fill="#FFFFFF" />
      <circle cx="250" cy="135" r="7" fill="#FFFFFF" />
      <circle cx="100" cy="180" r="7" fill="#FFFFFF" />
      <circle cx="200" cy="180" r="7" fill="#FFFFFF" />
    </svg>
  );
}

function BrazilFlag() {
  return (
    <svg className="w-4 h-3 rounded-[1px] inline-block shrink-0" viewBox="0 0 720 504" fill="none">
      <rect width="720" height="504" fill="#009B3A" />
      <polygon points="360,50 670,252 360,454 50,252" fill="#FEDF00" />
      <circle cx="360" cy="252" r="126" fill="#002776" />
      <path d="M 235,260 A 136,136 0 0,1 484,242" stroke="#FFFFFF" strokeWidth="18" fill="none" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0E1013]/85 backdrop-blur-md border-b border-[#C7CDD6]/12 py-4'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-mono text-[13px] font-medium tracking-[0.2em] uppercase text-[#F3F1EC] flex items-center gap-2.5">
          <svg className="w-4 h-4 text-current" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="16" cy="16" r="3" fill="currentColor" />
            <path d="M 10,6 A 12,12 0 0,1 22,6" />
            <path d="M 26,10 A 12,12 0 0,1 26,22" />
            <path d="M 22,26 A 12,12 0 0,1 10,26" />
            <path d="M 6,22 A 12,12 0 0,1 6,10" />
          </svg>
          <span>BASX</span>
        </a>

        <div className="flex items-center gap-6 md:gap-8 text-[14px]">
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-[#8C939D] hover:text-[#F3F1EC] transition-colors">
              {t('nav.physics')}
            </a>
            <a href="#markets" className="text-[#8C939D] hover:text-[#F3F1EC] transition-colors">
              {t('nav.markets')}
            </a>
            <a href="#approach" className="text-[#8C939D] hover:text-[#F3F1EC] transition-colors">
              {t('nav.approach')}
            </a>
            <a href="#careers" className="text-[#8C939D] hover:text-[#F3F1EC] transition-colors">
              {t('nav.careers')}
            </a>
            <a
              href="#careers"
              className="inline-block px-5 py-2.5 border border-[#C7CDD6] text-[#F3F1EC] text-[13px] font-sans font-normal tracking-[0.02em] bg-transparent hover:border-[#F3F1EC] hover:bg-[#F3F1EC]/5 transition-all"
            >
              {t('nav.join')}
            </a>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-1.5 font-mono text-xs border border-[#C7CDD6]/20 bg-[#171A1F]/80 backdrop-blur-md rounded px-2.5 py-1">
            <button
              onClick={() => setLang('en')}
              className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded transition-colors ${
                lang === 'en' ? 'text-[#D6C3A3] font-medium' : 'text-[#8C939D] hover:text-[#F3F1EC]'
              }`}
              aria-label="Switch language to English"
            >
              <UsaFlag />
              <span>EN</span>
            </button>
            <span className="text-[#C7CDD6]/30 select-none">/</span>
            <button
              onClick={() => setLang('pt')}
              className={`flex items-center gap-1.5 px-1.5 py-0.5 rounded transition-colors ${
                lang === 'pt' ? 'text-[#D6C3A3] font-medium' : 'text-[#8C939D] hover:text-[#F3F1EC]'
              }`}
              aria-label="Alternar idioma para Português"
            >
              <BrazilFlag />
              <span>PT</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
