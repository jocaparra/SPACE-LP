'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section id="missao" className="relative min-h-[92vh] flex items-center pt-32 pb-20 border-b border-[#C7CDD6]/12 overflow-hidden bg-[#0E1013]">
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
          <span className="mono-eyebrow">{t('hero.eyebrow')}</span>

          {/* Signature H2 Device applied to H1 */}
          <h1 className="hero-h1 mb-8">
            <span className="block text-[#8C939D] font-light">{t('hero.h1Line1')}</span>
            <span className="block text-[#F3F1EC] font-normal">{t('hero.h1Line2')}</span>
          </h1>

          <p className="body-text text-lg md:text-xl mb-10 max-w-[64ch]">
            {t('hero.body')}
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-14">
            <a
              href="#problemas"
              className="px-6 py-3.5 bg-[#D6C3A3] text-[#0E1013] font-sans text-[14px] font-medium tracking-[0.02em] hover:bg-[#F3F1EC] transition-colors"
            >
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#time"
              className="px-6 py-3.5 border border-[#C7CDD6]/30 text-[#F3F1EC] font-sans text-[14px] bg-transparent hover:border-[#F3F1EC] hover:bg-[#F3F1EC]/5 transition-all"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>

          {/* Backed By Section */}
          <div className="pt-8 border-t border-[#C7CDD6]/12 max-w-[800px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#8C939D] block mb-6">
              {t('hero.backedBy')}
            </span>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <img
                src="/logo_nasa_clean.png"
                alt="NASA"
                className="h-6 md:h-7 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
              <img
                src="/logo_nvidia_clean.png"
                alt="NVIDIA Inception Program"
                className="h-6 md:h-7 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
              <img
                src="/logo_aws_clean.png"
                alt="AWS Startup Programs"
                className="h-6 md:h-7 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
              <img
                src="/logo_intel_clean.png"
                alt="Intel"
                className="h-7 md:h-8 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
