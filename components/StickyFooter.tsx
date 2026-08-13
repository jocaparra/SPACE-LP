'use client';

import { useI18n } from '../lib/i18n';

export default function StickyFooter() {
  const { t } = useI18n();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 h-[44px] bg-[#171A1F] border-t border-[#C7CDD6]/12 flex items-center">
      <div className="max-w-[1280px] mx-auto px-6 w-full flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-[#C7CDD6]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D6C3A3] animate-pulse" />
          <span>{t('sticky.status')}</span>
        </div>
        <div className="hidden sm:block text-right text-[#8C939D]">
          {t('sticky.milestone')}
        </div>
      </div>
    </div>
  );
}
