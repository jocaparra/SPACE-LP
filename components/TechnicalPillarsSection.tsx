'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    idx: '01',
    title: 'Coleta de gotículas',
    body: 'O mecanismo dominante de perda não é ricochete. São gotículas secundárias desprendidas das cristas de ondas que se formam no filme líquido do coletor. Caracterizado pela NASA em 1987. Não resolvido.',
    difficulty: 'Severa',
    isSevere: true,
  },
  {
    idx: '02',
    title: 'Fabricação dos orifícios',
    body: 'Escala de megawatt exige da ordem de 10⁶ orifícios, com mira melhor que 10 mrad. Em 1987 isso significava dois anos de furação mecânica contínua.',
    difficulty: 'Transformada desde 1990',
    isSevere: false,
  },
  {
    idx: '03',
    title: 'Perda de fluido e contaminação',
    body: 'Gotículas perdidas são massa perdida e contaminam painéis solares, ópticas e sensores. Requisito: menos de uma perda em 10⁸.',
    difficulty: 'Severa',
    isSevere: true,
  },
  {
    idx: '04',
    title: 'Estabilidade e apontamento da cortina',
    body: 'Manter alinhamento entre gerador e coletor ao longo de dezenas de metros, sob manobra e dilatação térmica.',
    difficulty: 'Alta',
    isSevere: false,
  },
];

export default function TechnicalPillarsSection() {
  return (
    <section className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">O QUE ISSO EXIGE</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">As partes difíceis,</span>
            <span className="block text-[#F3F1EC] font-normal">declaradas.</span>
          </h2>

          <p className="body-text mb-16">
            Listamos os obstáculos porque subestimá-los é como projetos falham.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item) => (
              <div
                key={item.idx}
                className="bg-[#171A1F] border border-[#C7CDD6]/12 p-8 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <span className="font-mono text-sm text-[#D6C3A3] block mb-4">
                    {item.idx}
                  </span>
                  <h3 className="text-xl font-normal text-[#F3F1EC] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#8C939D] leading-[1.65]">
                    {item.body}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#C7CDD6]/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-[#8C939D] uppercase tracking-[0.14em]">
                    DIFICULDADE:
                  </span>
                  <span
                    className={`uppercase tracking-[0.14em] font-medium ${
                      item.isSevere ? 'text-[#A32D2D]' : 'text-[#C7CDD6]'
                    }`}
                  >
                    {item.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
