'use client';

import { motion } from 'framer-motion';

const comparisonRows = [
  {
    b1987: '10⁶ orifícios = 2 anos de furação',
    s2026: 'MEMS produz milhares de bocais por pastilha, precisão sub-mrad',
  },
  {
    b1987: 'Mira limitada a ~3 mrad',
    s2026: 'Cabeças de impressão superam',
  },
  {
    b1987: 'Coletor magnético inviável pela massa dos eletroímãs',
    s2026: 'Ímãs de terras raras e HTS mudam a conta. 0,67 kg/kW reportado em escala CubeSat',
  },
  {
    b1987: 'Diagnóstico visual limitado',
    s2026: 'Câmera rápida, PIV, sombrografia',
  },
  {
    b1987: 'Sem demanda',
    s2026: 'SpaceX, Google, Starcloud, ESA',
  },
];

export default function ThesisSection() {
  return (
    <section className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#171A1F]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">A TESE</span>

          <h2 className="section-h2 mb-16">
            <span className="block text-[#8C939D] font-light">Arquivado por fabricação,</span>
            <span className="block text-[#F3F1EC] font-normal">não por física.</span>
          </h2>

          {/* Table */}
          <div className="w-full bg-[#0E1013] border border-[#C7CDD6]/12 overflow-x-auto mb-16">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#C7CDD6]/12 bg-[#171A1F]/50 font-mono text-xs text-[#D6C3A3] uppercase tracking-[0.14em]">
                  <th className="py-5 px-6 font-medium w-1/2 border-r border-[#C7CDD6]/12">
                    BARREIRA EM 1987
                  </th>
                  <th className="py-5 px-6 font-medium w-1/2">
                    SITUAÇÃO EM 2026
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

          {/* Centered Closing Statement */}
          <div className="text-center pt-8 max-w-[800px] mx-auto">
            <p className="text-2xl md:text-3xl text-[#F3F1EC] font-light leading-snug">
              O radiador de gotículas não foi abandonado por impossibilidade física.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
