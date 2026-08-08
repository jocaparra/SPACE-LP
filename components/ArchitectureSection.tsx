'use client';

import { motion } from 'framer-motion';

const stages = [
  {
    num: '01',
    title: 'GERAR',
    body: 'Um gerador forma bilhões de gotículas por quebra de jato de Rayleigh, com estímulo periódico. Diâmetros entre 50 e 500 micrômetros.',
    detail: 'até 250 mil gotículas por segundo por orifício. Escala de megawatt exige da ordem de 10⁶ orifícios.',
  },
  {
    num: '02',
    title: 'IRRADIAR',
    body: 'A cortina atravessa o vácuo e irradia. A área radiante é a soma da superfície de trilhões de esferas submilimétricas, que ocupam volume mínimo quando condensadas.',
    detail: 'percurso típico de cem metros. A profundidade óptica da cortina governa a emitância do conjunto.',
  },
  {
    num: '03',
    title: 'COLETAR',
    body: 'Um coletor captura as gotículas e desenvolve pressão suficiente para bombear o fluido de volta. Configurações estudadas: coletor linear e coletor centrífugo com captação tipo tubo de Pitot.',
    detail: 'precisa capturar essencialmente tudo. Perder um fluxo entre 10⁵ custa, em duas semanas, massa equivalente a toda a cortina.',
  },
  {
    num: '04',
    title: 'RETORNAR',
    body: 'O fluido volta ao trocador de calor e recomeça o ciclo.',
    detail: 'a linha de retorno é ponto único de falha e precisa de proteção contra micrometeoroides, o que a torna massiva.',
  },
];

export default function ArchitectureSection() {
  return (
    <section className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#171A1F]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">ARQUITETURA</span>

          <h2 className="section-h2 mb-16">
            <span className="block text-[#8C939D] font-light">Quatro estágios,</span>
            <span className="block text-[#F3F1EC] font-normal">nenhum painel.</span>
          </h2>

          <div className="space-y-0 divide-y divide-[#C7CDD6]/12 border-t border-b border-[#C7CDD6]/12">
            {stages.map((st, idx) => (
              <div
                key={idx}
                className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3 flex items-baseline gap-4">
                  <span className="font-mono text-xl text-[#D6C3A3]">
                    {st.num}
                  </span>
                  <h3 className="font-mono text-lg text-[#F3F1EC] tracking-[0.14em] uppercase">
                    {st.title}
                  </h3>
                </div>

                <div className="md:col-span-9 space-y-4">
                  <p className="body-text text-lg text-[#F3F1EC]/90">
                    {st.body}
                  </p>
                  <p className="font-mono text-xs text-[#8C939D] leading-relaxed pl-4 border-l border-[#D6C3A3]/40">
                    Detalhe: {st.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
