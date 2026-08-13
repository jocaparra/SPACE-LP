'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function RoleSection() {
  const { t } = useI18n();

  return (
    <section id="time" className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#171A1F]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">{t('role.eyebrow')}</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">{t('role.h2Line1')}</span>
            <span className="block text-[#F3F1EC] font-normal">{t('role.h2Line2')}</span>
          </h2>

          <p className="body-text mb-16">
            {t('role.body')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[#C7CDD6]/12 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#C7CDD6] block mb-6">
                {t('role.haveHeader')}
              </span>
              <ul className="space-y-4 text-[15px] text-[#8C939D]">
                <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                  {t('role.haveItem1')}
                </li>
                <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                  {t('role.haveItem2')}
                </li>
                <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                  {t('role.haveItem3')}
                </li>
                <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                  {t('role.haveItem4')}
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#C7CDD6] block mb-6">
                {t('role.dontHeader')}
              </span>
              <ul className="space-y-4 text-[15px] text-[#8C939D]">
                <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                  {t('role.dontItem1')}
                </li>
                <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                  {t('role.dontItem2')}
                </li>
                <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                  {t('role.dontItem3')}
                </li>
                <li className="relative pl-5 before:content-['—'] before:absolute before:left-0 before:text-[#C7CDD6]">
                  {t('role.dontItem4')}
                </li>
              </ul>
            </div>
          </div>

          <div>
            <a
              href="mailto:pesquisa@aether.space?subject=Feedback%20sobre%20Rejeicao%20Termica%20Orbital"
              className="inline-block px-8 py-4 border border-[#D6C3A3] text-[#D6C3A3] text-[14px] font-sans bg-transparent hover:bg-[#D6C3A3] hover:text-[#0E1013] transition-colors"
            >
              {t('role.cta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
