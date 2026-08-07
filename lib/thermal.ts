// Constants
export const STEFAN_BOLTZMANN = 5.67e-8; // W m^-2 K^-4
export const EMISSIVITY       = 0.85;    // radiator surface
export const T_AMBIENT_BR     = 308.15;  // K, 35 °C Brazilian design ambient
export const T_AMBIENT_EU     = 283.15;  // K, 10 °C European design ambient
export const ORC_FRACTION     = 0.5;     // real ORC as fraction of Carnot
export const HOURS_YEAR       = 8000;
export const WUE_EVAPORATIVE  = 1.8;     // litres of water per kWh of IT load

/** Convert Celsius to Kelvin */
export function toKelvin(c: number): number {
  return c + 273.15;
}

/** Calculate Carnot efficiency given rejection temperature in Celsius and ambient in Kelvin */
export function carnotEfficiency(tRejectC: number, tAmbientK: number): number {
  return Math.max(0, 1 - tAmbientK / toKelvin(tRejectC));
}

/** Electrical output from a thermal input via organic Rankine cycle (kW) */
export function orcRecoveryKw(tRejectC: number, tAmbientK: number, thermalKw = 1000): number {
  return carnotEfficiency(tRejectC, tAmbientK) * ORC_FRACTION * thermalKw;
}

/** One-sided radiator area to reject a given heat load in vacuum (m²) */
export function radiatorAreaM2(tRejectC: number, thermalW = 1e6): number {
  const t = toKelvin(tRejectC);
  return thermalW / (EMISSIVITY * STEFAN_BOLTZMANN * Math.pow(t, 4));
}

/** Temperature difference between rejection temperature and ambient temperature (K) */
export function dryCoolingApproachK(tRejectC: number, tAmbientK = T_AMBIENT_BR): number {
  return toKelvin(tRejectC) - tAmbientK;
}

/** Check if dry cooling is viable (needs >= 15 K approach) */
export function isDryCoolingViable(tRejectC: number, tAmbientK = T_AMBIENT_BR): boolean {
  return dryCoolingApproachK(tRejectC, tAmbientK) >= 15;
}

/** Evaporative water saved per year when dry cooling becomes viable (m³/year) */
export function waterSavedM3PerYear(tRejectC: number, itLoadKw = 1000): number {
  if (!isDryCoolingViable(tRejectC)) return 0;
  return (itLoadKw * HOURS_YEAR * WUE_EVAPORATIVE) / 1000;
}

/** Check if rejection temperature is suitable for district heating networks (>= 70 °C) */
export function isDistrictHeatGrade(tRejectC: number): boolean {
  return tRejectC >= 70;
}
