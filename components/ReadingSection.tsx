'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

const references = [
  {
    code: 'NASA TM-89852',
    title: 'Liquid Droplet Radiator Development Status',
    authors: 'K. A. White III, NASA Lewis Research Center',
    venue: 'AIAA',
    year: '1987',
    url: 'https://ntrs.nasa.gov/citations/19870013063',
  },
  {
    code: 'NASA CR-185164',
    title: 'Conceptual Design of Liquid Droplet Radiator',
    authors: 'NASA Lewis Research Center',
    venue: 'NASA Contractor Report',
    year: '1989',
    url: 'https://ntrs.nasa.gov/citations/19900004928',
  },
  {
    code: 'AIAA JSR-2024',
    title: 'Magnetic Droplet Radiator for CubeSat Heat Rejection',
    authors: 'AIAA Journal of Spacecraft and Rockets',
    venue: 'Journal of Spacecraft and Rockets',
    year: '2024',
    url: 'https://doi.org/10.2514/1.A35820',
  },
  {
    code: 'SPACECOMPUTER-2026',
    title: 'Cooling for Orbital Compute — A Landscape Analysis',
    authors: 'SpaceComputer Systems Team',
    venue: 'SpaceComputer Technical Report',
    year: '2026',
    url: 'https://spacecomputer.io',
  },
  {
    code: 'MACH33-2025',
    title: 'Debunking the Cooling Constraint in Space Data Centers',
    authors: 'Mach33 Research Division',
    venue: 'Mach33 Analysis',
    year: '2025',
    url: 'https://mach33.io',
  },
];

export default function ReadingSection() {
  const { t } = useI18n();

  return (
    <section id="leitura" className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#0E1013]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">{t('reading.eyebrow')}</span>

          <h2 className="section-h2">
            <span className="block text-[#8C939D] font-light">{t('reading.h2Line1')}</span>
            <span className="block text-[#F3F1EC] font-normal">{t('reading.h2Line2')}</span>
          </h2>

          <p className="body-text mb-16">
            {t('reading.body')}
          </p>

          <div className="space-y-6 max-w-[960px]">
            {references.map((ref, idx) => (
              <a
                key={idx}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-[#171A1F] border border-[#C7CDD6]/12 hover:border-[#D6C3A3] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-3">
                  <span className="font-mono text-xs text-[#D6C3A3] tracking-[0.14em] uppercase">
                    {ref.code}
                  </span>
                  <span className="font-mono text-xs text-[#8C939D]">
                    {ref.venue} · {ref.year}
                  </span>
                </div>

                <h3 className="text-xl font-normal text-[#F3F1EC] group-hover:text-[#D6C3A3] transition-colors mb-2">
                  {ref.title}
                </h3>

                <p className="text-sm text-[#8C939D]">
                  {ref.authors}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
