'use client';

import { motion } from 'framer-motion';

const openProblems = [
  {
    num: 'Problema 01',
    title: 'Desprendimento de ondas no filme do coletor',
    paragraphs: [
      'O filme formado na superfície do coletor desenvolve ondas, e das cristas escapam gotículas secundárias. A NASA identificou isso em 1987 como o mecanismo primário de perda e o caracterizou sem resolver.',
      'Um resultado paralelo mostrou que alvo em tela reduz respingo por fator de 500 em relação a placa plana. Nunca foi integrado a um coletor completo.',
    ],
    bet: 'alvo em tela combinado com injeção de filme auxiliar pode fechar o requisito de 1 em 10⁸. Caracterizável em bancada de vácuo, em gravidade normal, com câmera rápida. É o nosso primeiro experimento.',
  },
  {
    num: 'Problema 02',
    title: 'Molhamento da placa de orifícios',
    paragraphs: [
      'Um filme líquido na face de saída desvia a trajetória do jato. Revestimentos antiaderentes falharam: aplicados antes da furação impedem orifícios de qualidade, aplicados depois entopem os orifícios.',
    ],
    bet: 'fabricação MEMS permite geometrias e tratamentos de superfície que não existiam em 1987. Não testado.',
  },
  {
    num: 'Problema 03',
    title: 'Coleta magnética, reavaliada',
    paragraphs: [
      'Ferrofluido com ímã de cobalto-samário suprimiu completamente o respingo em ensaios dos anos 1980. A configuração foi abandonada porque os eletroímãs supercondutores tornavam o conjunto mais pesado.',
    ],
    bet: 'ímãs de terras raras modernos mudam essa conta. Um estudo recente reporta ~1.500 W/kg (equiv. 0,67 kg/kW) em escala CubeSat. Reproduzir com ímãs permanentes é barato e ainda não foi feito no nosso escopo.',
  },
  {
    num: 'Problema 04',
    title: 'Instrumentação de gotículas secundárias',
    paragraphs: [
      'No coletor centrífugo, a detecção de gotículas secundárias não foi possível visualmente em 1987 e permanece a investigar. As ondas superficiais previstas por análise não puderam ser comparadas com experimento porque o filme não molhou uniformemente a superfície.',
    ],
    bet: 'sombrografia digital e câmera de alta velocidade resolvem o problema de medição. Este é o menor risco técnico da lista.',
  },
  {
    num: 'Problema 05',
    title: 'Radiador de lâmina líquida',
    paragraphs: [
      'Uma variante substitui trilhões de gotículas por lâminas contínuas, eliminando a necessidade de milhões de orifícios. Viabilidade preliminar foi demonstrada, e a literatura registra que mais pesquisa é necessária. A linha foi praticamente abandonada.',
    ],
    bet: 'se a fabricação de orifícios deixou de ser o gargalo, a vantagem principal da lâmina desaparece. Precisamos verificar isso antes de escolher a arquitetura. Ainda não verificamos.',
  },
];

export default function OpenProblemsSection() {
  return (
    <section id="problemas" className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">PROBLEMAS EM ABERTO</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">O que ainda não</span>
            <span className="block text-[#F3F1EC] font-normal">conseguimos resolver.</span>
          </h2>

          <p className="body-text mb-16">
            Transparência é mais rápida que hype. Publicamos os problemas porque
            quem pode ajudar está lendo isto.
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

                {/* Highlighted Bet Box with Champagne Left Border */}
                <div className="bg-[#171A1F] border-l-2 border-[#D6C3A3] p-6 text-[15px] leading-relaxed text-[#F3F1EC]">
                  <strong className="font-mono text-xs uppercase tracking-[0.14em] text-[#D6C3A3] block mb-2 font-medium">
                    Nossa aposta:
                  </strong>
                  <span>{p.bet}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Section Closing */}
          <div className="mt-20 pt-12 border-t border-[#C7CDD6]/12">
            <a
              href="#contato"
              className="inline-flex items-center gap-3 font-mono text-base text-[#D6C3A3] hover:text-[#F3F1EC] transition-colors"
            >
              <span>Acha que consegue resolver algum destes?</span>
              <span>→ Contato</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
