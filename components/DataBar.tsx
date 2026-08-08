'use client';

import { motion } from 'framer-motion';

const dataItems = [
  { label: 'Estágio', value: 'Literatura' },
  { label: 'Início', value: '2026' },
  { label: 'Base', value: 'Brasil' },
  { label: 'Foco', value: 'Coleta de gotículas' },
  { label: 'Vantagem de massa', value: '6,4×' },
  { label: 'Referência ISS', value: '70 W/kg' },
  { label: 'Alvo gotículas', value: '450 W/kg' },
  { label: 'Arquivado em', value: '1990' },
];

export default function DataBar() {
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
