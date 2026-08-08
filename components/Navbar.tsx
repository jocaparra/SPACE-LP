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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [utcTime, setUtcTime] = useState<string>('');
  const { lang, setLang, t } = useI18n();

  // Scroll handler & live UTC clock
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 40);
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`${hours}:${minutes}:${seconds} UTC`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <div
        className="h-[2px] bg-[#D6C3A3] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`py-5 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0E1013]/90 backdrop-blur-md border-b border-[#C7CDD6]/12 py-3.5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#"
            className="font-mono text-[13px] font-medium tracking-[0.24em] uppercase text-[#F3F1EC] flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span>AETHER</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px]">
            <a href="#missao" className="text-[#8C939D] hover:text-[#F3F1EC] transition-colors">
              Missão
            </a>
            <a href="#tecnologia" className="text-[#8C939D] hover:text-[#F3F1EC] transition-colors">
              Tecnologia
            </a>
            <a href="#problemas" className="text-[#8C939D] hover:text-[#F3F1EC] transition-colors">
              Problemas
            </a>
            <a href="#leitura" className="text-[#8C939D] hover:text-[#F3F1EC] transition-colors">
              Leitura
            </a>
            <a href="#contato" className="text-[#8C939D] hover:text-[#F3F1EC] transition-colors">
              Contato
            </a>
          </div>

          {/* Right Controls: Live Clock & Language Selector */}
          <div className="flex items-center gap-5">
            <span className="font-mono text-[11px] text-[#C7CDD6] tracking-[0.14em] uppercase hidden sm:inline-block">
              {utcTime || '00:00:00 UTC'}
            </span>

            {/* Language Selector */}
            <div className="flex items-center gap-1 font-mono text-xs border border-[#C7CDD6]/20 bg-[#171A1F]/80 backdrop-blur-md rounded px-2 py-1">
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
    </header>
  );
}
