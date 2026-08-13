'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function FooterSection() {
  const { t } = useI18n();

  return (
    <footer id="contato" className="py-20 md:py-[160px] pb-32 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow mb-8">{t('footer.eyebrow')}</span>

          <div className="mb-16">
            <a
              href="mailto:pesquisa@aether.space?subject=AETHER%20Thermal%20Rejection%20Research"
              className="font-mono text-3xl sm:text-5xl lg:text-6xl text-[#F3F1EC] tracking-tight hover:text-[#D6C3A3] transition-colors break-all"
            >
              pesquisa@aether.space
            </a>
          </div>

          <div className="mb-16 pt-8 border-t border-[#C7CDD6]/12 font-mono text-xs text-[#8C939D] tracking-[0.14em] uppercase">
            {t('footer.loc')}
          </div>

          <div className="pt-8 border-t border-[#C7CDD6]/12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs text-[#C7CDD6]">
            <span>{t('footer.copy')}</span>
            <span>{t('footer.tag')}</span>
          </div>

          <div className="mt-12 p-6 bg-[#171A1F] border border-[#C7CDD6]/12 max-w-[800px]">
            <p className="font-mono text-xs text-[#8C939D] leading-relaxed">
              {t('footer.disclaimer')}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
