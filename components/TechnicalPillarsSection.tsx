'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function TechnicalPillarsSection() {
  const { t } = useI18n();

  const pillars = [
    {
      idx: '01',
      title: t('pillars.p1Title'),
      body: t('pillars.p1Body'),
      difficulty: t('pillars.p1Diff'),
      isSevere: true,
    },
    {
      idx: '02',
      title: t('pillars.p2Title'),
      body: t('pillars.p2Body'),
      difficulty: t('pillars.p2Diff'),
      isSevere: false,
    },
    {
      idx: '03',
      title: t('pillars.p3Title'),
      body: t('pillars.p3Body'),
      difficulty: t('pillars.p3Diff'),
      isSevere: true,
    },
    {
      idx: '04',
      title: t('pillars.p4Title'),
      body: t('pillars.p4Body'),
      difficulty: t('pillars.p4Diff'),
      isSevere: false,
    },
  ];

  return (
    <section className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">{t('pillars.eyebrow')}</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">{t('pillars.h2Line1')}</span>
            <span className="block text-[#F3F1EC] font-normal">{t('pillars.h2Line2')}</span>
          </h2>

          <p className="body-text mb-16">
            {t('pillars.body')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item) => (
              <div
                key={item.idx}
                className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <span className="font-mono text-sm text-[#D6C3A3] block mb-4">
                    {item.idx}
                  </span>
                  <h3 className="text-xl font-normal text-[#F3F1EC] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#8C939D] leading-[1.65]">
                    {item.body}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#C7CDD6]/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#8C939D] uppercase tracking-[0.14em]">
                    {t('pillars.diffLabel')}
                  </span>
                  <span
                    className={`uppercase tracking-[0.14em] font-medium ${
                      item.isSevere ? 'text-[#A32D2D]' : 'text-[#C7CDD6]'
                    }`}
                  >
                    {item.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
