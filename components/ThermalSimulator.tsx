'use client';

import { useState } from 'react';
import {
  radiatorAreaM2,
  orcRecoveryKw,
  waterSavedM3PerYear,
  isDryCoolingViable,
  isDistrictHeatGrade,
  T_AMBIENT_BR,
  T_AMBIENT_EU,
} from '../lib/thermal';
import { useI18n } from '../lib/i18n';

export default function ThermalSimulator() {
  const [tReject, setTReject] = useState<number>(60);
  const { t } = useI18n();

  const dryViable = isDryCoolingViable(tReject);
  const districtGrade = isDistrictHeatGrade(tReject);

  const waterSaved = waterSavedM3PerYear(tReject);
  const orcRecovery = Math.round(orcRecoveryKw(tReject, T_AMBIENT_BR));
  const radArea = Math.round(radiatorAreaM2(tReject));

  // Compute SVG chart data (40°C to 120°C sampled at 1°C steps)
  const chartWidth = 800;
  const chartHeight = 260;
  const padding = { top: 25, right: 35, bottom: 45, left: 35 };
  const plotW = chartWidth - padding.left - padding.right;
  const plotH = chartHeight - padding.top - padding.bottom;

  const baseRadArea = radiatorAreaM2(40);
  const maxOrc = orcRecoveryKw(120, T_AMBIENT_EU);

  const pointsCount = 120 - 40;
  const radPoints: { x: number; y: number }[] = [];
  const orcPoints: { x: number; y: number }[] = [];

  for (let c = 40; c <= 120; c++) {
    const xRatio = (c - 40) / pointsCount;
    const x = padding.left + xRatio * plotW;

    // Radiator area normalised to 40°C
    const normRad = radiatorAreaM2(c) / baseRadArea;
    const yRad = padding.top + (1 - normRad) * plotH;
    radPoints.push({ x, y: yRad });

    // ORC recovery normalised to 120°C
    const normOrc = Math.max(0, orcRecoveryKw(c, T_AMBIENT_EU) / maxOrc);
    const yOrc = padding.top + (1 - normOrc) * plotH;
    orcPoints.push({ x, y: yOrc });
  }

  const radPathD = radPoints.reduce(
    (acc, p, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(2)},${p.y.toFixed(2)}`,
    ''
  );

  const orcPathD = orcPoints.reduce(
    (acc, p, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(2)},${p.y.toFixed(2)}`,
    ''
  );

  // Hairline position
  const activeX = padding.left + ((tReject - 40) / pointsCount) * plotW;

  return (
    <div className="w-full">
      {/* Headline Block */}
      <div className="mb-12">
        <span className="mono-eyebrow">{t('hero.eyebrow')}</span>
        <h1 className="hero-h1">{t('hero.title')}</h1>
        <p className="body-text text-lg">
          {t('hero.subhead')}
        </p>
      </div>

      {/* Control Slider */}
      <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 md:p-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="temp-slider" className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C7CDD6]">
            {t('sim.label')}
          </label>
          <span className="font-mono text-[18px] font-medium text-[#D6C3A3]">
            {tReject} °C
          </span>
        </div>
        <input
          id="temp-slider"
          type="range"
          min="40"
          max="120"
          step="1"
          value={tReject}
          onChange={(e) => setTReject(Number(e.target.value))}
          aria-label="Rejection temperature in degrees Celsius"
          aria-valuetext={`${tReject} °C`}
          aria-valuenow={tReject}
          aria-valuemin={40}
          aria-valuemax={120}
          className="w-full h-2 bg-[#0E1013] rounded-lg appearance-none cursor-pointer accent-[#D6C3A3] focus:outline-none focus:ring-1 focus:ring-[#D6C3A3]"
        />
        <div className="flex justify-between font-mono text-[10px] text-[#8C939D] mt-2">
          <span>40 °C</span>
          <span>60 °C</span>
          <span>80 °C</span>
          <span>100 °C</span>
          <span>120 °C</span>
        </div>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Brazil Water */}
        <div
          className={`bg-[#171A1F] p-6 md:p-8 flex flex-col justify-between min-h-[180px] transition-colors duration-200 border ${
            dryViable ? 'border-[#D6C3A3]' : 'border-[#C7CDD6]/12'
          }`}
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C7CDD6] block mb-3">
              {t('sim.brazilTitle')}
            </span>
            <div className="font-mono text-3xl md:text-4xl text-[#F3F1EC] mb-2 font-normal">
              {dryViable ? `${waterSaved.toLocaleString('en-US')} m³/year` : '—'}
            </div>
          </div>
          <p className="text-[14px] text-[#8C939D] leading-snug">
            {dryViable
              ? t('sim.waterLineViable')
              : t('sim.waterLineNotViable')}
          </p>
        </div>

        {/* Card 2: Europe Heat */}
        <div
          className={`bg-[#171A1F] p-6 md:p-8 flex flex-col justify-between min-h-[180px] transition-colors duration-200 border ${
            districtGrade ? 'border-[#D6C3A3]' : 'border-[#C7CDD6]/12'
          }`}
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C7CDD6] block mb-3">
              {t('sim.europeTitle')}
            </span>
            <div className="font-mono text-3xl md:text-4xl text-[#F3F1EC] mb-2 font-normal">
              {orcRecovery} kW
            </div>
          </div>
          <p className="text-[14px] text-[#8C939D] leading-snug">
            {districtGrade
              ? t('sim.heatLineGrade')
              : t('sim.heatLineBelow')}
          </p>
        </div>

        {/* Card 3: Orbit Mass */}
        <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 md:p-8 flex flex-col justify-between min-h-[180px]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C7CDD6] block mb-3">
              {t('sim.orbitTitle')}
            </span>
            <div className="font-mono text-3xl md:text-4xl text-[#F3F1EC] mb-2 font-normal">
              {radArea.toLocaleString('en-US')} m²
            </div>
          </div>
          <p className="text-[14px] text-[#8C939D] leading-snug">
            {t('sim.orbitLine')}
          </p>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="bg-[#171A1F] border border-[#C7CDD6]/12 p-6 md:p-8">
        <div className="w-full overflow-hidden">
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto">
            {/* Grid Lines */}
            <line
              x1={padding.left}
              y1={padding.top}
              x2={chartWidth - padding.right}
              y2={padding.top}
              stroke="rgba(199,205,214,0.08)"
              strokeDasharray="4 4"
            />
            <line
              x1={padding.left}
              y1={padding.top + plotH / 2}
              x2={chartWidth - padding.right}
              y2={padding.top + plotH / 2}
              stroke="rgba(199,205,214,0.08)"
              strokeDasharray="4 4"
            />
            <line
              x1={padding.left}
              y1={padding.top + plotH}
              x2={chartWidth - padding.right}
              y2={padding.top + plotH}
              stroke="rgba(199,205,214,0.15)"
            />

            {/* X Axis Ticks & Labels */}
            {[40, 60, 80, 100, 120].map((tick) => {
              const tx = padding.left + ((tick - 40) / pointsCount) * plotW;
              return (
                <g key={tick}>
                  <line
                    x1={tx}
                    y1={padding.top + plotH}
                    x2={tx}
                    y2={padding.top + plotH + 5}
                    stroke="rgba(199,205,214,0.3)"
                  />
                  <text
                    x={tx}
                    y={padding.top + plotH + 20}
                    fill="#8C939D"
                    fontFamily="JetBrains Mono, monospace"
                    fontSize="10"
                    textAnchor="middle"
                  >
                    {tick}°C
                  </text>
                </g>
              );
            })}

            {/* Radiator Area Curve (#2a78d6) */}
            <path d={radPathD} fill="none" stroke="#2a78d6" strokeWidth="2" />

            {/* ORC Recovery Curve (#eb6834) */}
            <path d={orcPathD} fill="none" stroke="#eb6834" strokeWidth="2" />

            {/* Vertical Hairline following slider */}
            <line
              x1={activeX}
              y1={padding.top}
              x2={activeX}
              y2={padding.top + plotH}
              stroke="#D6C3A3"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              strokeOpacity="0.85"
            />
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-[#C7CDD6]/10 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-0.5 bg-[#2a78d6] inline-block" />
            <span className="text-[#8C939D]">{t('sim.chartRad')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-0.5 bg-[#eb6834] inline-block" />
            <span className="text-[#8C939D]">{t('sim.chartOrc')}</span>
          </div>
        </div>

        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#C7CDD6] text-center block mt-3">
          {t('sim.chartCaption')}
        </span>
      </div>
    </div>
  );
}
