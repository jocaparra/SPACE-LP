'use client';

import { useI18n } from '../lib/i18n';

export default function ConstraintSection() {
  const { t } = useI18n();

  return (
    <section id="physics" className="py-20 md:py-[140px] border-b border-[#C7CDD6]/12">
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="mono-eyebrow">{t('constraint.eyebrow')}</span>
        <h2 className="section-h2">{t('constraint.title')}</h2>
        <p className="body-text mb-16">
          {t('constraint.body')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#C7CDD6]/12">
          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 flex flex-col justify-between min-h-[140px]">
            <div className="font-mono text-3xl lg:text-4xl text-[#F3F1EC] font-normal mb-3">
              100+ kW
            </div>
            <div className="text-[14px] text-[#8C939D] leading-snug">
              {t('constraint.stat1Label')}
            </div>
          </div>

          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 flex flex-col justify-between min-h-[140px]">
            <div className="font-mono text-3xl lg:text-4xl text-[#F3F1EC] font-normal mb-3">
              0.4 kW/m²
            </div>
            <div className="text-[14px] text-[#8C939D] leading-snug">
              {t('constraint.stat2Label')}
            </div>
          </div>

          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 flex flex-col justify-between min-h-[140px]">
            <div className="font-mono text-3xl lg:text-4xl text-[#F3F1EC] font-normal mb-3">
              38 GW
            </div>
            <div className="text-[14px] text-[#8C939D] leading-snug">
              {t('constraint.stat3Label')}
            </div>
          </div>

          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 flex flex-col justify-between min-h-[140px]">
            <div className="font-mono text-3xl lg:text-4xl text-[#F3F1EC] font-normal mb-3">
              10 → 20%
            </div>
            <div className="text-[14px] text-[#8C939D] leading-snug">
              {t('constraint.stat4Label')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
