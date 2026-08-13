'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function DataBar() {
  const { t } = useI18n();

  const dataItems = [
    { label: t('data.estagioLabel'), value: t('data.estagioValue') },
    { label: t('data.inicioLabel'), value: t('data.inicioValue') },
    { label: t('data.baseLabel'), value: t('data.baseValue') },
    { label: t('data.focoLabel'), value: t('data.focoValue') },
    { label: t('data.vantagemLabel'), value: t('data.vantagemValue') },
    { label: t('data.issLabel'), value: t('data.issValue') },
    { label: t('data.alvoLabel'), value: t('data.alvoValue') },
    { label: t('data.arquivadoLabel'), value: t('data.arquivadoValue') },
  ];

  return (
    <section className="border-b border-[#C7CDD6]/12 bg-[#171A1F]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-2 lg:grid-cols-8 divide-x divide-y lg:divide-y-0 divide-[#C7CDD6]/12"
        >
          {dataItems.map((item, idx) => (
            <div key={idx} className="p-6 flex flex-col justify-between min-h-[100px]">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8C939D] block mb-2">
                {item.label}
              </span>
              <span className="font-mono text-lg text-[#F3F1EC] font-normal">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
