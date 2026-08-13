'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function ProblemStatementSection() {
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
          <span className="mono-eyebrow">{t('problem.eyebrow')}</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">{t('problem.h2Line1')}</span>
            <span className="block text-[#F3F1EC] font-normal">{t('problem.h2Line2')}</span>
          </h2>

          <p className="body-text mb-12">
            {t('problem.body')}
          </p>

          <div className="p-6 bg-[#171A1F] border border-[#C7CDD6]/12 max-w-[68ch]">
            <p className="font-mono text-xs text-[#8C939D] leading-relaxed">
              {t('problem.note')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
