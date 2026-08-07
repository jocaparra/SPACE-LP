'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'pt';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.physics': 'Physics',
    'nav.markets': 'Markets',
    'nav.approach': 'Approach',
    'nav.careers': 'Careers',
    'nav.join': 'Join the founding team',

    // Hero / Simulator
    'hero.eyebrow': 'THERMAL INFRASTRUCTURE FOR EXTREME COMPUTING',
    'hero.title': 'One variable. Three markets.',
    'hero.subhead':
      'The temperature at which heat leaves a system decides whether a data centre needs water, whether its heat can be sold, and how large a radiator must be in orbit. We engineer that variable.',
    'sim.label': 'REJECTION TEMPERATURE',
    'sim.brazilTitle': 'BRAZIL · WATER',
    'sim.waterLineViable': 'Evaporative cooling eliminated per MW of IT load',
    'sim.waterLineNotViable': 'Dry cooling not viable at 35 °C ambient',
    'sim.europeTitle': 'EUROPE · HEAT',
    'sim.heatLineGrade': 'District-heating grade — sellable as heat',
    'sim.heatLineBelow': 'Below district-heating grade',
    'sim.orbitTitle': 'ORBIT · MASS',
    'sim.orbitLine': 'Radiator area to reject 1 MW in vacuum',
    'sim.chartRad': 'Radiator Area (Norm.)',
    'sim.chartOrc': 'ORC Recovery (Norm.)',
    'sim.chartCaption': 'ε = 0.85 · ONE-SIDED RADIATOR · ORC AT 50% OF CARNOT',

    // Constraint
    'constraint.eyebrow': 'THE CONSTRAINT',
    'constraint.title': 'Every watt of compute becomes a watt of heat.',
    'constraint.body':
      'Air cooling ended when AI racks passed 100 kW. In vacuum there is no convection at all — heat leaves only by radiation, and radiator area dominates mass and launch cost. The same physics governs both.',
    'constraint.stat1Label': 'rack density where air cooling fails',
    'constraint.stat2Label': 'radiative rejection at 300 K in vacuum',
    'constraint.stat3Label': 'data centre grid connection requests in Brazil',
    'constraint.stat4Label': 'German heat reuse mandate, 2026 to 2028',

    // Markets
    'markets.eyebrow': 'THE SAME LEVER',
    'markets.title': 'One number, priced three ways.',
    'markets.card1Title': 'Brazil · Water',
    'markets.card1Body':
      "Brazil's data centre incentive regime ties tax relief to water efficiency targets, against 38 GW of connection requests concentrated in water-stressed regions. Raising rejection temperature makes dry cooling viable and removes evaporative water demand entirely.",
    'markets.card2Title': 'Europe · Heat',
    'markets.card2Body':
      'EU Directive 2023/1791 makes waste heat reuse assessment mandatory above 1 MW. Germany requires a 10% energy reuse factor from July 2026, rising to 20% by 2028. Heat above 70 °C is sellable to district networks — and worth roughly ten times the same heat converted to electricity.',
    'markets.card3Title': 'Orbit · Mass',
    'markets.card3Body':
      'Radiated power scales with the fourth power of surface temperature. Radiator area drives mass, and mass drives launch cost. Eight or more companies are racing to run GPUs in orbit; none has solved rejection at megawatt scale.',

    // Approach
    'approach.eyebrow': 'APPROACH',
    'approach.title': 'Earth first.',
    'approach.p0Tag': 'PHASE 0 · NOW',
    'approach.p0Title': 'Europe',
    'approach.p0Desc': 'Dry rejection at high temperature. Revenue before launch.',
    'approach.p1Tag': 'PHASE 1 · 2–5 YR',
    'approach.p1Title': 'Orbit',
    'approach.p1Desc': 'Flight-qualified thermal subsystems, supplied to orbital compute operators.',
    'approach.p2Tag': 'PHASE 2 · 5–12 YR',
    'approach.p2Title': 'Moon',
    'approach.p2Desc': 'Volatiles, power and cryogenic archival at a lunar pole.',
    'approach.p3Tag': 'PHASE 3 · 12+ YR',
    'approach.p3Title': 'Deep Space',
    'approach.p3Desc': 'Cryogenic computing in a permanently shadowed crater.',
    'approach.caption': 'Each phase funds the next. We do not skip steps.',

    // Careers
    'careers.eyebrow': 'FOUNDING TEAM',
    'careers.title': 'We are looking for one person.',
    'careers.body':
      'A senior thermal or cryogenic engineer, as a founding partner — not an employee. Meaningful equity. You will define the architecture.',
    'careers.haveHeader': 'WHAT WE HAVE',
    'careers.haveItem1': 'a validated first-order thermal model',
    'careers.haveItem2': 'a mapped route to non-dilutive funding',
    'careers.haveItem3': 'full-time commercial leadership',
    'careers.dontHeader': "WHAT WE DON'T",
    'careers.dontItem1': 'capital',
    'careers.dontItem2': 'a prototype',
    'careers.dontItem3': 'a technical founder',
    'careers.cta': 'Tell me where the model is wrong',

    // Footer
    'footer.eyebrow': 'CONTACT',
    'footer.tagline': 'Thermal infrastructure for extreme computing',
    'footer.engineered': 'Engineered in Brazil',
  },
  pt: {
    // Nav
    'nav.physics': 'Física',
    'nav.markets': 'Mercados',
    'nav.approach': 'Abordagem',
    'nav.careers': 'Carreiras',
    'nav.join': 'Junte-se à equipe fundadora',

    // Hero / Simulator
    'hero.eyebrow': 'INFRAESTRUTURA TÉRMICA PARA COMPUTAÇÃO EXTREMA',
    'hero.title': 'Uma variável. Três mercados.',
    'hero.subhead':
      'A temperatura na qual o calor deixa o sistema decide se um data center precisa de água, se seu calor pode ser vendido e quão grande deve ser o radiador na órbita. Nós projetamos essa variável.',
    'sim.label': 'TEMPERATURA DE REJEIÇÃO',
    'sim.brazilTitle': 'BRASIL · ÁGUA',
    'sim.waterLineViable': 'Resfriamento evaporativo eliminado por MW de carga de TI',
    'sim.waterLineNotViable': 'Resfriamento a seco não viável a 35 °C ambiente',
    'sim.europeTitle': 'EUROPA · CALOR',
    'sim.heatLineGrade': 'Classe de aquecimento urbano — vendável como calor',
    'sim.heatLineBelow': 'Abaixo da classe de aquecimento urbano',
    'sim.orbitTitle': 'ÓRBITA · MASSA',
    'sim.orbitLine': 'Área de radiador para rejeitar 1 MW no vácuo',
    'sim.chartRad': 'Área do Radiador (Norm.)',
    'sim.chartOrc': 'Recuperação ORC (Norm.)',
    'sim.chartCaption': 'ε = 0.85 · RADIADOR UNILATERAL · ORC A 50% DE CARNOT',

    // Constraint
    'constraint.eyebrow': 'A RESTRIÇÃO',
    'constraint.title': 'Cada watt de computação se transforma em um watt de calor.',
    'constraint.body':
      'O resfriamento por ar acabou quando os racks de IA ultrapassaram 100 kW. No vácuo não há convecção — o calor é dissipado apenas por radiação, e a área do radiador domina a massa e o custo de lançamento. A mesma física rege ambos.',
    'constraint.stat1Label': 'densidade por rack onde o resfriamento a ar falha',
    'constraint.stat2Label': 'rejeição radiativa a 300 K no vácuo',
    'constraint.stat3Label': 'pedidos de conexão à rede de data centers no Brasil',
    'constraint.stat4Label': 'mandato alemão de reuso de calor, 2026 a 2028',

    // Markets
    'markets.eyebrow': 'A MESMA ALAVANCA',
    'markets.title': 'Um número, precificado de três formas.',
    'markets.card1Title': 'Brasil · Água',
    'markets.card1Body':
      'O regime de incentivo a data centers no Brasil vincula a isenção fiscal a metas de eficiência hídrica, frente a 38 GW de solicitações de conexão concentradas em regiões com estresse hídrico. Elevar a temperatura de rejeição torna o resfriamento a seco viável e elimina totalmente a demanda de água evaporativa.',
    'markets.card2Title': 'Europa · Calor',
    'markets.card2Body':
      'A Diretiva da UE 2023/1791 torna obrigatória a avaliação do reuso de calor residual acima de 1 MW. A Alemanha exige um fator de reuso de energia de 10% a partir de julho de 2026, subindo para 20% até 2028. Calor acima de 70 °C é vendável para redes de aquecimento urbano — e vale cerca de dez vezes o mesmo calor convertido em eletricidade.',
    'markets.card3Title': 'Órbita · Massa',
    'markets.card3Body':
      'A potência radiada escala com a quarta potência da temperatura de superfície. A área do radiador impulsiona a massa, e a massa impulsiona o custo de lançamento. Oito ou mais empresas estão correndo para operar GPUs em órbita; nenhuma resolveu a rejeição em escala de megawatt.',

    // Approach
    'approach.eyebrow': 'ABORDAGEM',
    'approach.title': 'A Terra primeiro.',
    'approach.p0Tag': 'FASE 0 · AGORA',
    'approach.p0Title': 'Europa',
    'approach.p0Desc': 'Rejeição a seco em alta temperatura. Receita antes do lançamento.',
    'approach.p1Tag': 'FASE 1 · 2–5 ANOS',
    'approach.p1Title': 'Órbita',
    'approach.p1Desc': 'Subsistemas térmicos qualificados para voo fornecidos a operadores de computação orbital.',
    'approach.p2Tag': 'FASE 2 · 5–12 ANOS',
    'approach.p2Title': 'Lua',
    'approach.p2Desc': 'Voláteis, energia e arquivamento criogênico em um polo lunar.',
    'approach.p3Tag': 'FASE 3 · 12+ ANOS',
    'approach.p3Title': 'Espaço Profundo',
    'approach.p3Desc': 'Computação criogênica em uma cratera em sombra permanente.',
    'approach.caption': 'Cada fase financia a seguinte. Não pulamos etapas.',

    // Careers
    'careers.eyebrow': 'EQUIPE FUNDADORA',
    'careers.title': 'Estamos procurando por uma pessoa.',
    'careers.body':
      'Um engenheiro térmico ou criogênico sênior, como sócio fundador — não um funcionário. Participação relevante na empresa. Você definirá a arquitetura.',
    'careers.haveHeader': 'O QUE TEMOS',
    'careers.haveItem1': 'um modelo térmico de primeira ordem validado',
    'careers.haveItem2': 'uma rota mapeada para financiamento não dilutivo',
    'careers.haveItem3': 'liderança comercial em tempo integral',
    'careers.dontHeader': 'O QUE NÃO TEMOS',
    'careers.dontItem1': 'capital',
    'careers.dontItem2': 'um protótipo',
    'careers.dontItem3': 'um fundador técnico',
    'careers.cta': 'Diga-me onde o modelo está errado',

    // Footer
    'footer.eyebrow': 'CONTATO',
    'footer.tagline': 'Infraestrutura térmica para computação extrema',
    'footer.engineered': 'Engenharia no Brasil',
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('basx_lang') as Language | null;
    if (saved && (saved === 'en' || saved === 'pt')) {
      setLangState(saved);
    } else if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('pt')) {
      setLangState('pt');
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('basx_lang', newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] || translations.en[key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
