import { describe, it, expect } from 'vitest';
import {
  radiatorAreaM2,
  carnotEfficiency,
  orcRecoveryKw,
  isDryCoolingViable,
  isDistrictHeatGrade,
  T_AMBIENT_BR,
  T_AMBIENT_EU,
} from './thermal';

function isWithinPercent(value: number, target: number, percent = 2): boolean {
  const diff = Math.abs(value - target);
  return (diff / target) * 100 <= percent;
}

describe('Thermal Physics Module', () => {
  it('radiatorAreaM2 test values (2% tolerance)', () => {
    expect(isWithinPercent(radiatorAreaM2(26.85), 2564, 2)).toBe(true);
    expect(isWithinPercent(radiatorAreaM2(60), 1689, 2)).toBe(true);
    expect(isWithinPercent(radiatorAreaM2(80), 1337, 2)).toBe(true);
  });

  it('radiatorAreaM2 must fall monotonically as temperature rises', () => {
    let prevArea = radiatorAreaM2(40);
    for (let temp = 41; temp <= 120; temp++) {
      const currentArea = radiatorAreaM2(temp);
      expect(currentArea).toBeLessThan(prevArea);
      prevArea = currentArea;
    }
  });

  it('carnotEfficiency test values (2% tolerance)', () => {
    expect(isWithinPercent(carnotEfficiency(60, 308.15), 0.0750, 2)).toBe(true);
    expect(isWithinPercent(carnotEfficiency(80, 308.15), 0.1274, 2)).toBe(true);
    expect(isWithinPercent(carnotEfficiency(60, 283.15), 0.1501, 2)).toBe(true);
  });

  it('orcRecoveryKw test values (2% tolerance)', () => {
    expect(isWithinPercent(orcRecoveryKw(60, 308.15), 37.5, 2)).toBe(true);
    expect(isWithinPercent(orcRecoveryKw(80, 308.15), 63.7, 2)).toBe(true);
  });

  it('isDryCoolingViable threshold test', () => {
    expect(isDryCoolingViable(45)).toBe(false);
    expect(isDryCoolingViable(60)).toBe(true);
  });

  it('isDistrictHeatGrade threshold test', () => {
    expect(isDistrictHeatGrade(60)).toBe(false);
    expect(isDistrictHeatGrade(80)).toBe(true);
  });
});
