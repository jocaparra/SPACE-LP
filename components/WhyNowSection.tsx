'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function WhyNowSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">{t('whynow.eyebrow')}</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">{t('whynow.h2Line1')}</span>
            <span className="block text-[#F3F1EC] font-normal">{t('whynow.h2Line2')}</span>
          </h2>

          <p className="body-text mb-16">
            {t('whynow.body')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-[#C7CDD6]/12">
            <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[160px]">
              <div className="font-mono text-4xl lg:text-5xl text-[#F3F1EC] font-normal mb-4">
                {t('whynow.stat1Value')}
              </div>
              <p className="font-mono text-xs text-[#8C939D] uppercase tracking-[0.14em]">
                {t('whynow.stat1Label')}
              </p>
            </div>

            <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[160px]">
              <div className="font-mono text-4xl lg:text-5xl text-[#F3F1EC] font-normal mb-4">
                {t('whynow.stat2Value')}
              </div>
              <p className="font-mono text-xs text-[#8C939D] uppercase tracking-[0.14em]">
                {t('whynow.stat2Label')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
