'use client';

import React, { useState, useEffect } from 'react';
import { useI18n } from '../lib/i18n';

export default function StatusBar() {
  const { t } = useI18n();
  const [utcTime, setUtcTime] = useState<string>('00:00:00 UTC');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getUTCHours()).padStart(2, '0');
      const minutes = String(now.getUTCMinutes()).padStart(2, '0');
      const seconds = String(now.getUTCSeconds()).padStart(2, '0');
      setUtcTime(`${hours}:${minutes}:${seconds} UTC`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-14 h-8 bg-[#0A0A0A] border-b border-[#F0F0EB]/10 text-[11px] uppercase tracking-[0.1em] tnum text-[#858C92]">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: UTC Clock */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#858C92]" />
          <span>{utcTime}</span>
        </div>

        {/* Center: Phase Label */}
        <div className="hidden sm:block text-[#F0F0EB] font-medium tracking-[0.14em]">
          {t('status.phase')}
        </div>

        {/* Right: Nominal Status Indicator with 6px Pulsing Orange Dot */}
        <div className="flex items-center gap-2 text-[#F0F0EB]">
          <span>{t('status.system')}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B20] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
