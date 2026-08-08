'use client';

import { motion } from 'framer-motion';

export default function ComparativeDiagram() {
  return (
    <section id="tecnologia" className="py-20 md:py-[160px] border-b border-[#C7CDD6]/12 bg-[#171A1F]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="mono-eyebrow">
            COMPARAÇÃO DE MASSA — MESMO CALOR REJEITADO (PADRONIZADO EM W/kg)
          </span>

          <div className="w-full bg-[#0E1013] border border-[#C7CDD6]/12 p-6 md:p-10 my-8 overflow-hidden rounded-sm">
            <svg
              viewBox="0 0 1000 340"
              className="w-full h-auto text-[#F3F1EC]"
              fill="none"
            >
              {/* Central Divider */}
              <line
                x1="500"
                y1="20"
                x2="500"
                y2="320"
                stroke="#C7CDD6"
                strokeOpacity="0.15"
                strokeDasharray="4 4"
              />

              {/* Central Marker: 6,4x mais leve */}
              <g transform="translate(500, 160)">
                <rect
                  x="-65"
                  y="-18"
                  width="130"
                  height="36"
                  rx="4"
                  fill="#171A1F"
                  stroke="#D6C3A3"
                  strokeWidth="1.5"
                />
                <text
                  x="0"
                  y="5"
                  fill="#D6C3A3"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="12"
                  fontWeight="500"
                  textAnchor="middle"
                >
                  6,4× MAIS LEVE
                </text>
              </g>

              {/* LEFT SIDE: PAINEL SÓLIDO */}
              <g transform="translate(40, 20)">
                <text
                  x="0"
                  y="20"
                  fill="#C7CDD6"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="12"
                  letterSpacing="0.14em"
                  className="uppercase font-medium"
                >
                  PAINEL SÓLIDO CONVENCIONAL
                </text>
                <text
                  x="0"
                  y="45"
                  fill="#F3F1EC"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="22"
                  className="font-normal"
                >
                  ISS — 70 W/kg
                </text>
                <text
                  x="0"
                  y="62"
                  fill="#8C939D"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="11"
                >
                  (equiv. 14,3 kg/kW)
                </text>

                {/* Heavy Solid Panel Representation */}
                <rect
                  x="50"
                  y="80"
                  width="320"
                  height="155"
                  fill="#171A1F"
                  stroke="#C7CDD6"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                />
                {/* Internal Heat Pipes */}
                <path
                  d="M 80 100 H 340 M 80 125 H 340 M 80 150 H 340 M 80 175 H 340 M 80 200 H 340 M 80 220 H 340"
                  stroke="#8C939D"
                  strokeOpacity="0.5"
                  strokeWidth="2"
                />
                {/* Micrometeoroid Shield Armor Hash */}
                <path
                  d="M 50 80 L 370 235 M 90 80 L 370 195 M 130 80 L 370 155 M 170 80 L 370 115"
                  stroke="#C7CDD6"
                  strokeOpacity="0.08"
                  strokeWidth="1"
                />

                <text
                  x="0"
                  y="270"
                  fill="#8C939D"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="11"
                >
                  nota: tubulação, estrutura, fluido, blindagem contra micrometeoroides
                </text>
              </g>

              {/* RIGHT SIDE: CORTINA DE GOTÍCULAS */}
              <g transform="translate(540, 20)">
                <text
                  x="0"
                  y="20"
                  fill="#D6C3A3"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="12"
                  letterSpacing="0.14em"
                  className="uppercase font-medium"
                >
                  CORTINA DE GOTÍCULAS (LDR)
                </text>
                <text
                  x="0"
                  y="45"
                  fill="#F3F1EC"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="22"
                  className="font-normal"
                >
                  gotículas — até 450 W/kg
                </text>
                <text
                  x="0"
                  y="62"
                  fill="#D6C3A3"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="11"
                >
                  (6,4× mais leve que ISS)
                </text>

                {/* Droplet Generator (Left) */}
                <rect
                  x="20"
                  y="90"
                  width="40"
                  height="130"
                  fill="#171A1F"
                  stroke="#D6C3A3"
                  strokeWidth="1.5"
                />
                <text
                  x="40"
                  y="160"
                  fill="#D6C3A3"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="9"
                  textAnchor="middle"
                >
                  GERADOR
                </text>

                {/* Droplet Collector (Right) */}
                <path
                  d="M 360 80 L 400 110 V 200 L 360 230 Z"
                  fill="#171A1F"
                  stroke="#D6C3A3"
                  strokeWidth="1.5"
                />
                <text
                  x="380"
                  y="160"
                  fill="#D6C3A3"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="9"
                  textAnchor="middle"
                >
                  COLETOR
                </text>

                {/* Sheet of Converging Micro-Droplets */}
                {Array.from({ length: 65 }).map((_, i) => {
                  const yStart = 95 + (i % 13) * 9.5;
                  const x = 70 + (i * 4.4);
                  const y = yStart + (i * 0.15);
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="1.8"
                      fill="#D6C3A3"
                      opacity={0.85}
                    />
                  );
                })}
                {Array.from({ length: 55 }).map((_, i) => {
                  const x = 85 + (i * 4.8);
                  const y = 105 + ((i * 17) % 100);
                  return (
                    <circle
                      key={`b-${i}`}
                      cx={x}
                      cy={y}
                      r="1.4"
                      fill="#F3F1EC"
                      opacity={0.6}
                    />
                  );
                })}

                <text
                  x="0"
                  y="270"
                  fill="#8C939D"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="11"
                >
                  nota: sem painel, sem tubulação na área radiante
                </text>
              </g>
            </svg>
          </div>

          {/* Mono Legend Below */}
          <div className="font-mono text-xs text-[#8C939D] space-y-1.5 leading-relaxed">
            <p>
              // Unidade W/kg: indica watt de calor rejeitado por quilo de massa do sistema — quanto maior o valor, mais leve e eficiente é a arquitetura.
            </p>
            <p>
              // Comparação de literatura: Painel sólido ISS = 70 W/kg (1×, equiv. 14,3 kg/kW) | Gotículas estudo 2025 = 450 W/kg (6,4×) | Gotículas magnéticas CubeSat = ~1.500 W/kg (21×, equiv. 0,67 kg/kW).
            </p>
            <p>
              // Condições de ensaio e temperatura de rejeição diferem entre estudos. Valores apresentados como referência de literatura.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
