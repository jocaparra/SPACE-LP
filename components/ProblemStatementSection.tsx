'use client';

import { motion } from 'framer-motion';

export default function ProblemStatementSection() {
  return (
    <section className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">O PROBLEMA</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">No vácuo</span>
            <span className="block text-[#F3F1EC] font-normal">só existe radiação.</span>
          </h2>

          <p className="body-text mb-12">
            Na Terra, o calor sai por convecção. No vácuo não há meio. A única saída
            é a radiação térmica, governada pela quarta potência da temperatura
            absoluta da superfície. Painéis sólidos resolvem isso até cerca de cem
            quilowatts. Acima disso, a massa de painel, tubulação e estrutura cresce
            mais rápido que o calor rejeitado.
          </p>

          <div className="p-6 bg-[#171A1F] border border-[#C7CDD6]/12 max-w-[68ch]">
            <p className="font-mono text-xs text-[#8C939D] leading-relaxed">
              // Abaixo de 10 MW, análises independentes indicam que o painel solar,
              e não o radiador, domina a área da espaçonave. Não trabalhamos
              nessa faixa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
