'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="missao" className="relative min-h-[92vh] flex items-center pt-32 pb-24 border-b border-[#C7CDD6]/12 overflow-hidden bg-[#0E1013]">
      {/* Background Image with 35% opacity and 40% bottom gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-35">
        <Image
          src="/hero_radiator.jpg"
          alt="Space station thermal radiator panel undergoing vacuum testing"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1013]/60 via-[#0E1013]/80 to-[#0E1013]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-[800px]"
        >
          <span className="mono-eyebrow">AETHER — REJEIÇÃO TÉRMICA ORBITAL</span>

          {/* Signature H2 Device applied to H1 */}
          <h1 className="hero-h1 mb-8">
            <span className="block text-[#8C939D] font-light">Calor,</span>
            <span className="block text-[#F3F1EC] font-normal">sem radiador.</span>
          </h1>

          <p className="body-text text-lg md:text-xl mb-12 max-w-[64ch]">
            Uma cortina de gotículas de 100 micrômetros irradia calor no vácuo com
            até sete vezes menos massa que painéis sólidos. A NASA arquivou a ideia
            em 1990 por limites de fabricação que não existem mais.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#problemas"
              className="px-6 py-3.5 bg-[#D6C3A3] text-[#0E1013] font-sans text-[14px] font-medium tracking-[0.02em] hover:bg-[#F3F1EC] transition-colors"
            >
              Ler os problemas em aberto
            </a>
            <a
              href="#time"
              className="px-6 py-3.5 border border-[#C7CDD6]/30 text-[#F3F1EC] font-sans text-[14px] bg-transparent hover:border-[#F3F1EC] hover:bg-[#F3F1EC]/5 transition-all"
            >
              Procuramos um engenheiro térmico
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
