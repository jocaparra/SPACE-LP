'use client';

import { motion } from 'framer-motion';

export default function WhyNowSection() {
  return (
    <section className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">POR QUE AGORA</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">A restrição</span>
            <span className="block text-[#F3F1EC] font-normal">acabou de voltar.</span>
          </h2>

          <p className="body-text mb-16">
            A SpaceX protocolou pedido para até um milhão de satélites de data
            center. A Google prepara protótipos do Suncatcher. A Starcloud operou
            uma GPU em órbita. A ESA mira cinquenta quilowatts de prova de conceito
            em 2031 e um gigawatt em 2050. Acima de dez megawatts, a massa de
            radiador passa a dominar a espaçonave.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-[#C7CDD6]/12">
            <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[160px]">
              <div className="font-mono text-4xl lg:text-5xl text-[#F3F1EC] font-normal mb-4">
                10 MW
              </div>
              <p className="font-mono text-xs text-[#8C939D] uppercase tracking-[0.14em]">
                escala em que a massa de radiador passa a dominar
              </p>
            </div>

            <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[160px]">
              <div className="font-mono text-4xl lg:text-5xl text-[#F3F1EC] font-normal mb-4">
                1 em 10⁸
              </div>
              <p className="font-mono text-xs text-[#8C939D] uppercase tracking-[0.14em]">
                perda de gotícula admissível para trinta anos de operação
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
