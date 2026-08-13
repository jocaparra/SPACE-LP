'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function ThesisSection() {
  const { t } = useI18n();

  const comparisonRows = [
    {
      b1987: t('thesis.r1b1987'),
      s2026: t('thesis.r1s2026'),
    },
    {
      b1987: t('thesis.r2b1987'),
      s2026: t('thesis.r2s2026'),
    },
    {
      b1987: t('thesis.r3b1987'),
      s2026: t('thesis.r3s2026'),
    },
    {
      b1987: t('thesis.r4b1987'),
      s2026: t('thesis.r4s2026'),
    },
    {
      b1987: t('thesis.r5b1987'),
      s2026: t('thesis.r5s2026'),
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
          <span className="mono-eyebrow">{t('thesis.eyebrow')}</span>

          <h2 className="section-h2 mb-16">
            <span className="block text-[#8C939D] font-light">{t('thesis.h2Line1')}</span>
            <span className="block text-[#F3F1EC] font-normal">{t('thesis.h2Line2')}</span>
          </h2>

          <div className="w-full bg-[#0E1013] border border-[#C7CDD6]/12 overflow-x-auto mb-16">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#C7CDD6]/12 bg-[#171A1F]/50 font-mono text-xs text-[#D6C3A3] uppercase tracking-[0.14em]">
                  <th className="py-5 px-6 font-medium w-1/2 border-r border-[#C7CDD6]/12">
                    {t('thesis.th1')}
                  </th>
                  <th className="py-5 px-6 font-medium w-1/2">
                    {t('thesis.th2')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C7CDD6]/12 text-[15px]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#171A1F]/30 transition-colors">
                    <td className="py-5 px-6 text-[#8C939D] border-r border-[#C7CDD6]/12 font-mono text-sm">
                      {row.b1987}
                    </td>
                    <td className="py-5 px-6 text-[#F3F1EC] font-sans">
                      {row.s2026}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center pt-8 max-w-[800px] mx-auto">
            <p className="text-2xl md:text-3xl text-[#F3F1EC] font-light leading-snug">
              {t('thesis.closing')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
