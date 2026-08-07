'use client';

import { useI18n } from '../lib/i18n';

export default function MarketsSection() {
  const { t } = useI18n();

  return (
    <section id="markets" className="py-20 md:py-[140px] border-b border-[#C7CDD6]/12">
      <div className="max-w-[1200px] mx-auto px-6">
        <span className="mono-eyebrow">{t('markets.eyebrow')}</span>
        <h2 className="section-h2">{t('markets.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 01 */}
          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="font-mono text-sm text-[#D6C3A3] tracking-[0.12em] block mb-6">
                01
              </span>
              <h3 className="text-2xl font-normal text-[#F3F1EC] mb-4">
                {t('markets.card1Title')}
              </h3>
              <p className="text-[15px] text-[#8C939D] leading-[1.65]">
                {t('markets.card1Body')}
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="font-mono text-sm text-[#D6C3A3] tracking-[0.12em] block mb-6">
                02
              </span>
              <h3 className="text-2xl font-normal text-[#F3F1EC] mb-4">
                {t('markets.card2Title')}
              </h3>
              <p className="text-[15px] text-[#8C939D] leading-[1.65]">
                {t('markets.card2Body')}
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="font-mono text-sm text-[#D6C3A3] tracking-[0.12em] block mb-6">
                03
              </span>
              <h3 className="text-2xl font-normal text-[#F3F1EC] mb-4">
                {t('markets.card3Title')}
              </h3>
              <p className="text-[15px] text-[#8C939D] leading-[1.65]">
                {t('markets.card3Body')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
