'use client';

import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer id="contato" className="py-20 md:py-[160px] pb-32 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow mb-8">CONTATO</span>

          {/* Large Mono Email */}
          <div className="mb-16">
            <a
              href="mailto:pesquisa@aether.space?subject=AETHER%20Thermal%20Rejection%20Research"
              className="font-mono text-3xl sm:text-5xl lg:text-6xl text-[#F3F1EC] tracking-tight hover:text-[#D6C3A3] transition-colors break-all"
            >
              pesquisa@aether.space
            </a>
          </div>

          {/* Location Coordinates (HYDREX style) */}
          <div className="mb-16 pt-8 border-t border-[#C7CDD6]/12 font-mono text-xs text-[#8C939D] tracking-[0.14em] uppercase">
            23°33&apos;01&quot;S 46°38&apos;02&quot;W — SÃO PAULO · BRASIL
          </div>

          {/* Footer Copyright */}
          <div className="pt-8 border-t border-[#C7CDD6]/12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs text-[#C7CDD6]">
            <span>AETHER — Rejeição térmica orbital. Est. 2026.</span>
            <span>Programa de pesquisa independente</span>
          </div>

          {/* Disclaimer Note */}
          <div className="mt-12 p-6 bg-[#171A1F] border border-[#C7CDD6]/12 max-w-[800px]">
            <p className="font-mono text-xs text-[#8C939D] leading-relaxed">
              // Valores citados são de literatura publicada, obtidos em condições de
              ensaio que diferem entre si. Não são desempenho garantido nem
              resultados próprios. Este é um programa de pesquisa em estágio
              inicial, sem produto.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
