'use client';

import { useI18n } from '../lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-20 md:py-[120px] pb-16 bg-[#0E1013]">
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="mono-eyebrow mb-6">{t('footer.eyebrow')}</span>
        <div className="mb-[80px]">
          <a
            href="mailto:founding@basx.space"
            className="font-mono text-3xl sm:text-4xl md:text-5xl text-[#F3F1EC] tracking-tight hover:text-[#D6C3A3] transition-colors"
          >
            founding@basx.space
          </a>
        </div>

        <div className="pt-10 border-t border-[#C7CDD6]/12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="font-mono text-[13px] font-medium tracking-[0.2em] uppercase text-[#F3F1EC] flex items-center gap-2.5 mb-2">
              <svg className="w-4 h-4 text-current" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="16" cy="16" r="3" fill="currentColor" />
                <path d="M 10,6 A 12,12 0 0,1 22,6" />
                <path d="M 26,10 A 12,12 0 0,1 26,22" />
                <path d="M 22,26 A 12,12 0 0,1 10,26" />
                <path d="M 6,22 A 12,12 0 0,1 6,10" />
              </svg>
              <span>BASX</span>
            </div>
            <span className="text-[14px] text-[#8C939D]">
              {t('footer.tagline')}
            </span>
          </div>

          <div className="flex gap-6 text-[14px] text-[#8C939D]">
            <a href="#hero" className="hover:text-[#F3F1EC] transition-colors">
              {t('nav.physics')}
            </a>
            <a href="#markets" className="hover:text-[#F3F1EC] transition-colors">
              {t('nav.markets')}
            </a>
            <a href="#approach" className="hover:text-[#F3F1EC] transition-colors">
              {t('nav.approach')}
            </a>
            <a href="#careers" className="hover:text-[#F3F1EC] transition-colors">
              {t('nav.careers')}
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center text-[12px] text-[#8C939D]">
          <span>© 2026 BASX</span>
          <span>{t('footer.engineered')}</span>
        </div>
      </div>
    </footer>
  );
}
