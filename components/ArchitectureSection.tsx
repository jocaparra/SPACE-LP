'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function ArchitectureSection() {
  const { t } = useI18n();

  const stages = [
    {
      num: '01',
      title: t('arch.st1Title'),
      body: t('arch.st1Body'),
      detail: t('arch.st1Detail'),
    },
    {
      num: '02',
      title: t('arch.st2Title'),
      body: t('arch.st2Body'),
      detail: t('arch.st2Detail'),
    },
    {
      num: '03',
      title: t('arch.st3Title'),
      body: t('arch.st3Body'),
      detail: t('arch.st3Detail'),
    },
    {
      num: '04',
      title: t('arch.st4Title'),
      body: t('arch.st4Body'),
      detail: t('arch.st4Detail'),
    },
  ];

  return (
    <section className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#171A1F]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">{t('arch.eyebrow')}</span>

          <h2 className="section-h2 mb-16">
            <span className="block text-[#8C939D] font-light">{t('arch.h2Line1')}</span>
            <span className="block text-[#F3F1EC] font-normal">{t('arch.h2Line2')}</span>
          </h2>

          <div className="space-y-0 divide-y divide-[#C7CDD6]/12 border-t border-b border-[#C7CDD6]/12">
            {stages.map((st, idx) => (
              <div
                key={idx}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3 flex items-baseline gap-4">
                  <span className="font-mono text-xl text-[#D6C3A3]">
                    {st.num}
                  </span>
                  <h3 className="font-mono text-lg text-[#F3F1EC] tracking-[0.14em] uppercase">
                    {st.title}
                  </h3>
                </div>

                <div className="md:col-span-9 space-y-4">
                  <p className="body-text text-lg text-[#F3F1EC]/90">
                    {st.body}
                  </p>
                  <p className="font-mono text-xs text-[#8C939D] leading-relaxed pl-4 border-l border-[#D6C3A3]/40">
                    Detalhe: {st.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
