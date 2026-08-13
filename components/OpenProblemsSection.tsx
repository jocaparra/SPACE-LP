'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function OpenProblemsSection() {
  const { t } = useI18n();

  const openProblems = [
    {
      num: 'Problema 01',
      title: t('problems.p1Title'),
      paragraphs: [t('problems.p1Para1'), t('problems.p1Para2')],
      bet: t('problems.p1Bet'),
    },
    {
      num: 'Problema 02',
      title: t('problems.p2Title'),
      paragraphs: [t('problems.p2Para1')],
      bet: t('problems.p2Bet'),
    },
    {
      num: 'Problema 03',
      title: t('problems.p3Title'),
      paragraphs: [t('problems.p3Para1')],
      bet: t('problems.p3Bet'),
    },
    {
      num: 'Problema 04',
      title: t('problems.p4Title'),
      paragraphs: [t('problems.p4Para1')],
      bet: t('problems.p4Bet'),
    },
    {
      num: 'Problema 05',
      title: t('problems.p5Title'),
      paragraphs: [t('problems.p5Para1')],
      bet: t('problems.p5Bet'),
    },
  ];

  return (
    <section id="problemas" className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">{t('problems.eyebrow')}</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">{t('problems.h2Line1')}</span>
            <span className="block text-[#F3F1EC] font-normal">{t('problems.h2Line2')}</span>
          </h2>

          <p className="body-text mb-16">
            {t('problems.body')}
          </p>

          <div className="space-y-16 max-w-[840px]">
            {openProblems.map((p, idx) => (
              <div key={idx} className="border-t border-[#C7CDD6]/12 pt-12 space-y-6">
                <span className="font-mono text-xs text-[#D6C3A3] uppercase tracking-[0.14em] block">
                  {p.num}
                </span>

                <h3 className="text-2xl font-normal text-[#F3F1EC]">
                  {p.title}
                </h3>

                <div className="space-y-4">
                  {p.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="body-text text-base md:text-lg">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="bg-[#171A1F] border-l-2 border-[#D6C3A3] p-6 text-[15px] leading-relaxed text-[#F3F1EC]">
                  <strong className="font-mono text-xs uppercase tracking-[0.14em] text-[#D6C3A3] block mb-2 font-medium">
                    {t('problems.betLabel')}
                  </strong>
                  <span>{p.bet}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-[#C7CDD6]/12">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 font-mono text-base text-[#D6C3A3] hover:text-[#F3F1EC] transition-colors"
            >
              <span>{t('problems.cta')}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
