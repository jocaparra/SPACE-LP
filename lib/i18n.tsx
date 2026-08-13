'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'pt';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Nav
    'nav.missao': 'Missão',
    'nav.tecnologia': 'Tecnologia',
    'nav.problemas': 'Problemas',
    'nav.leitura': 'Leitura',
    'nav.contato': 'Contato',

    // StickyFooter
    'sticky.status': 'STATUS: FASE DE LITERATURA',
    'sticky.milestone': 'PRÓXIMO MARCO — REVISÃO PUBLICADA',

    // Hero
    'hero.eyebrow': 'AETHER — REJEIÇÃO TÉRMICA ORBITAL',
    'hero.h1Line1': 'Calor,',
    'hero.h1Line2': 'sem radiador.',
    'hero.body':
      'Uma cortina de gotículas de 100 micrômetros irradia calor no vácuo com até sete vezes menos massa que painéis sólidos. A NASA arquivou a ideia em 1990 por limites de fabricação que não existem mais.',
    'hero.ctaPrimary': 'Ler os problemas em aberto',
    'hero.ctaSecondary': 'Procuramos um engenheiro térmico',

    // DataBar
    'data.estagioLabel': 'Estágio',
    'data.estagioValue': 'Literatura',
    'data.inicioLabel': 'Início',
    'data.inicioValue': '2026',
    'data.baseLabel': 'Base',
    'data.baseValue': 'Brasil',
    'data.focoLabel': 'Foco',
    'data.focoValue': 'Coleta de gotículas',
    'data.vantagemLabel': 'Vantagem de massa',
    'data.vantagemValue': '6,4×',
    'data.issLabel': 'Referência ISS',
    'data.issValue': '70 W/kg',
    'data.alvoLabel': 'Alvo gotículas',
    'data.alvoValue': '450 W/kg',
    'data.arquivadoLabel': 'Arquivado em',
    'data.arquivadoValue': '1990',

    // ImageStrip
    'strip.img1': '01 — Radiador de ISS em teste de vácuo · NASA Lewis',
    'strip.img2': '02 — Câmara de vácuo térmico · NASA Lewis Facility',
    'strip.img3': '03 — Cápsula de ensaio de microgravidade · Zero Gravity Facility',
    'strip.img4': '04 — Bocal gerador de gotículas MEMS · Ensaio de laboratório',
    'strip.img5': '05 — Carga térmica com manta MLI · NASA NTRS',
    'strip.img6': '06 — Mecanismo de desdobramento · Ensaio em solo',

    // WhyNow
    'whynow.eyebrow': 'POR QUE AGORA',
    'whynow.h2Line1': 'A restrição',
    'whynow.h2Line2': 'acabou de voltar.',
    'whynow.body':
      'A SpaceX protocolou pedido para até um milhão de satélites de data center. A Google prepara protótipos do Suncatcher. A Starcloud operou uma GPU em órbita. A ESA mira cinquenta quilowatts de prova de conceito em 2031 e um gigawatt em 2050. Acima de dez megawatts, a massa de radiador passa a dominar a espaçonave.',
    'whynow.stat1Value': '10 MW',
    'whynow.stat1Label': 'escala em que a massa de radiador passa a dominar',
    'whynow.stat2Value': '1 em 10⁸',
    'whynow.stat2Label': 'perda de gotícula admissível para trinta anos de operação',

    // Diagram
    'diagram.eyebrow': 'COMPARAÇÃO DE MASSA — MESMO CALOR REJEITADO (PADRONIZADO EM W/kg)',
    'diagram.badge': '6,4× MAIS LEVE',
    'diagram.leftTitle': 'PAINEL SÓLIDO CONVENCIONAL',
    'diagram.leftStat': 'ISS — 70 W/kg',
    'diagram.leftSub': '(equiv. 14,3 kg/kW)',
    'diagram.leftNote': 'nota: tubulação, estrutura, fluido, blindagem contra micrometeoroides',
    'diagram.rightTitle': 'CORTINA DE GOTÍCULAS (LDR)',
    'diagram.rightStat': 'gotículas — até 450 W/kg',
    'diagram.rightSub': '(6,4× mais leve que ISS)',
    'diagram.generator': 'GERADOR',
    'diagram.collector': 'COLETOR',
    'diagram.rightNote': 'nota: sem painel, sem tubulação na área radiante',
    'diagram.leg1': '// Unidade W/kg: indica watt de calor rejeitado por quilo de massa do sistema — quanto maior o valor, mais leve e eficiente é a arquitetura.',
    'diagram.leg2': '// Comparação de literatura: Painel sólido ISS = 70 W/kg (1×, equiv. 14,3 kg/kW) | Gotículas estudo 2025 = 450 W/kg (6,4×) | Gotículas magnéticas CubeSat = ~1.500 W/kg (21×, equiv. 0,67 kg/kW).',
    'diagram.leg3': '// Condições de ensaio e temperatura de rejeição diferem entre estudos. Valores apresentados como referência de literatura.',

    // ProblemStatement
    'problem.eyebrow': 'O PROBLEMA',
    'problem.h2Line1': 'No vácuo',
    'problem.h2Line2': 'só existe radiação.',
    'problem.body':
      'Na Terra, o calor sai por convecção. No vácuo não há meio. A única saída é a radiação térmica, governada pela quarta potência da temperatura absoluta da superfície. Painéis sólidos resolvem isso até cerca de cem quilowatts. Acima disso, a massa de painel, tubulação e estrutura cresce mais rápido que o calor rejeitado.',
    'problem.note':
      '// Abaixo de 10 MW, análises independentes indicam que o painel solar, e não o radiador, domina a área da espaçonave. Não trabalhamos nessa faixa.',

    // Architecture
    'arch.eyebrow': 'ARQUITETURA',
    'arch.h2Line1': 'Quatro estágios,',
    'arch.h2Line2': 'nenhum painel.',
    'arch.st1Title': 'GERAR',
    'arch.st1Body': 'Um gerador forma bilhões de gotículas por quebra de jato de Rayleigh, com estímulo periódico. Diâmetros entre 50 e 500 micrômetros.',
    'arch.st1Detail': 'até 250 mil gotículas por segundo por orifício. Escala de megawatt exige da ordem de 10⁶ orifícios.',
    'arch.st2Title': 'IRRADIAR',
    'arch.st2Body': 'A cortina atravessa o vácuo e irradia. A área radiante é a soma da superfície de trilhões de esferas submilimétricas, que ocupam volume mínimo quando condensadas.',
    'arch.st2Detail': 'percurso típico de cem metros. A profundidade óptica da cortina governa a emitância do conjunto.',
    'arch.st3Title': 'COLETAR',
    'arch.st3Body': 'Um coletor captura as gotículas e desenvolve pressão suficiente para bombear o fluido de volta. Configurações estudadas: coletor linear e coletor centrífugo com captação tipo tubo de Pitot.',
    'arch.st3Detail': 'precisa capturar essencialmente tudo. Perder um fluxo entre 10⁵ custa, em duas semanas, massa equivalente a toda a cortina.',
    'arch.st4Title': 'RETORNAR',
    'arch.st4Body': 'O fluido volta ao trocador de calor e recomeça o ciclo.',
    'arch.st4Detail': 'a linha de retorno é ponto único de falha e precisa de proteção contra micrometeoroides, o que a torna massiva.',

    // TechnicalPillars
    'pillars.eyebrow': 'O QUE ISSO EXIGE',
    'pillars.h2Line1': 'As partes difíceis,',
    'pillars.h2Line2': 'declaradas.',
    'pillars.body': 'Listamos os obstáculos porque subestimá-los é como projetos falham.',
    'pillars.p1Title': 'Coleta de gotículas',
    'pillars.p1Body': 'O mecanismo dominante de perda não é ricochete. São gotículas secundárias desprendidas das cristas de ondas que se formam no filme líquido do coletor. Caracterizado pela NASA em 1987. Não resolvido.',
    'pillars.p1Diff': 'Severa',
    'pillars.p2Title': 'Fabricação dos orifícios',
    'pillars.p2Body': 'Escala de megawatt exige da ordem de 10⁶ orifícios, com mira melhor que 10 mrad. Em 1987 isso significava dois anos de furação mecânica contínua.',
    'pillars.p2Diff': 'Transformada desde 1990',
    'pillars.p3Title': 'Perda de fluido e contaminação',
    'pillars.p3Body': 'Gotículas perdidas são massa perdida e contaminam painéis solares, ópticas e sensores. Requisito: menos de uma perda em 10⁸.',
    'pillars.p3Diff': 'Severa',
    'pillars.p4Title': 'Estabilidade e apontamento da cortina',
    'pillars.p4Body': 'Manter alinhamento entre gerador e coletor ao longo de dezenas de metros, sob manobra e dilatação térmica.',
    'pillars.p4Diff': 'Alta',
    'pillars.diffLabel': 'DIFICULDADE:',

    // Thesis
    'thesis.eyebrow': 'A TESE',
    'thesis.h2Line1': 'Arquivado por fabricação,',
    'thesis.h2Line2': 'não por física.',
    'thesis.th1': 'BARREIRA EM 1987',
    'thesis.th2': 'SITUAÇÃO EM 2026',
    'thesis.r1b1987': '10⁶ orifícios = 2 anos de furação',
    'thesis.r1s2026': 'MEMS produz milhares de bocais por pastilha, precisão sub-mrad',
    'thesis.r2b1987': 'Mira limitada a ~3 mrad',
    'thesis.r2s2026': 'Cabeças de impressão superam',
    'thesis.r3b1987': 'Coletor magnético inviável pela massa dos eletroímãs',
    'thesis.r3s2026': 'Ímãs de terras raras e HTS mudam a conta. ~1.500 W/kg (equiv. 0,67 kg/kW) reportado em escala CubeSat',
    'thesis.r4b1987': 'Diagnóstico visual limitado',
    'thesis.r4s2026': 'Câmera rápida, PIV, sombrografia',
    'thesis.r5b1987': 'Sem demanda',
    'thesis.r5s2026': 'SpaceX, Google, Starcloud, ESA',
    'thesis.closing': 'O radiador de gotículas não foi abandonado por impossibilidade física.',

    // OpenProblems
    'problems.eyebrow': 'PROBLEMAS EM ABERTO',
    'problems.h2Line1': 'O que ainda não',
    'problems.h2Line2': 'conseguimos resolver.',
    'problems.body': 'Transparência é mais rápida que hype. Publicamos os problemas porque quem pode ajudar está lendo isto.',
    'problems.betLabel': 'Nossa aposta:',
    'problems.p1Title': 'Desprendimento de ondas no filme do coletor',
    'problems.p1Para1': 'O filme formado na superfície do coletor desenvolve ondas, e das cristas escapam gotículas secundárias. A NASA identificou isso em 1987 como o mecanismo primário de perda e o caracterizou sem resolver.',
    'problems.p1Para2': 'Um resultado paralelo mostrou que alvo em tela reduz respingo por fator de 500 em relação a placa plana. Nunca foi integrado a um coletor completo.',
    'problems.p1Bet': 'alvo em tela combinado com injeção de filme auxiliar pode fechar o requisito de 1 em 10⁸. Caracterizável em bancada de vácuo, em gravidade normal, com câmera rápida. É o nosso primeiro experimento.',

    'problems.p2Title': 'Molhamento da placa de orifícios',
    'problems.p2Para1': 'Um filme líquido na face de saída desvia a trajetória do jato. Revestimentos antiaderentes falharam: aplicados antes da furação impedem orifícios de qualidade, aplicados depois entopem os orifícios.',
    'problems.p2Bet': 'fabricação MEMS permite geometrias e tratamentos de superfície que não existiam em 1987. Não testado.',

    'problems.p3Title': 'Coleta magnética, reavaliada',
    'problems.p3Para1': 'Ferrofluido com ímã de cobalto-samário suprimiu completamente o respingo em ensaios dos anos 1980. A configuração foi abandonada porque os eletroímãs supercondutores tornavam o conjunto mais pesado.',
    'problems.p3Bet': 'ímãs de terras raras modernos mudam essa conta. Um estudo recente reporta ~1.500 W/kg (equiv. 0,67 kg/kW) em escala CubeSat. Reproduzir com ímãs permanentes é barato e ainda não foi feito no nosso escopo.',

    'problems.p4Title': 'Instrumentação de gotículas secundárias',
    'problems.p4Para1': 'No coletor centrífugo, a detecção de gotículas secundárias não foi possível visualmente em 1987 e permanece a investigar. As ondas superficiais previstas por análise não puderam ser comparadas com experimento porque o filme não molhou uniformemente a superfície.',
    'problems.p4Bet': 'sombrografia digital e câmera de alta velocidade resolvem o problema de medição. Este é o menor risco técnico da lista.',

    'problems.p5Title': 'Radiador de lâmina líquida',
    'problems.p5Para1': 'Uma variante substitui trilhões de gotículas por lâminas contínuas, eliminando a necessidade de milhões de orifícios. Viabilidade preliminar foi demonstrada, e a literatura registra que mais pesquisa é necessária. A linha foi praticamente abandonada.',
    'problems.p5Bet': 'se a fabricação de orifícios deixou de ser o gargalo, a vantagem principal da lâmina desaparece. Precisamos verificar isso antes de escolher a arquitetura. Ainda não verificamos.',
    'problems.cta': 'Acha que consegue resolver algum destes? → Contato',

    // Role / Team
    'role.eyebrow': 'TIME',
    'role.h2Line1': 'Procuramos',
    'role.h2Line2': 'uma pessoa.',
    'role.body': 'Um engenheiro ou pesquisador de transferência de calor, escoamento bifásico ou controle térmico espacial. Como parceiro fundador, não como contratado.',
    'role.haveHeader': 'O QUE TEMOS',
    'role.haveItem1': 'Revisão da literatura primária em andamento',
    'role.haveItem2': 'Lacuna técnica identificada e delimitada',
    'role.haveItem3': 'Dedicação integral',
    'role.haveItem4': 'Rota mapeada de fomento não dilutivo',
    'role.dontHeader': 'O QUE NÃO TEMOS',
    'role.dontItem1': 'Capital',
    'role.dontItem2': 'Laboratório próprio',
    'role.dontItem3': 'Protótipo',
    'role.dontItem4': 'Qualquer resultado experimental',
    'role.cta': 'Diga onde o raciocínio está errado',

    // Reading
    'reading.eyebrow': 'LEITURA',
    'reading.h2Line1': 'As fontes,',
    'reading.h2Line2': 'abertas.',
    'reading.body': 'Não temos publicações próprias. Estas são as fontes primárias em que o trabalho se apoia. Quase todas são de domínio público.',

    // Footer
    'footer.eyebrow': 'CONTATO',
    'footer.loc': '23°33\'01"S 46°38\'02"W — SÃO PAULO · BRASIL',
    'footer.copy': 'AETHER — Rejeição térmica orbital. Est. 2026.',
    'footer.tag': 'Programa de pesquisa independente',
    'footer.disclaimer': '// Valores citados são de literatura publicada, obtidos em condições de ensaio que diferem entre si. Não são desempenho garantido nem resultados próprios. Este é um programa de pesquisa em estágio inicial, sem produto.',
  },

  en: {
    // Nav
    'nav.missao': 'Mission',
    'nav.tecnologia': 'Technology',
    'nav.problemas': 'Problems',
    'nav.leitura': 'Reading',
    'nav.contato': 'Contact',

    // StickyFooter
    'sticky.status': 'STATUS: LITERATURE PHASE',
    'sticky.milestone': 'NEXT MILESTONE — PUBLISHED REVIEW',

    // Hero
    'hero.eyebrow': 'AETHER — ORBITAL THERMAL REJECTION',
    'hero.h1Line1': 'Heat,',
    'hero.h1Line2': 'without a radiator.',
    'hero.body':
      'A 100-micrometer liquid droplet curtain radiates heat in vacuum with up to seven times less mass than solid panels. NASA archived the idea in 1990 due to manufacturing limits that no longer exist.',
    'hero.ctaPrimary': 'Read open problems',
    'hero.ctaSecondary': 'Looking for a thermal engineer',

    // DataBar
    'data.estagioLabel': 'Stage',
    'data.estagioValue': 'Literature',
    'data.inicioLabel': 'Start',
    'data.inicioValue': '2026',
    'data.baseLabel': 'Base',
    'data.baseValue': 'Brazil',
    'data.focoLabel': 'Focus',
    'data.focoValue': 'Droplet collection',
    'data.vantagemLabel': 'Mass advantage',
    'data.vantagemValue': '6.4×',
    'data.issLabel': 'ISS Benchmark',
    'data.issValue': '70 W/kg',
    'data.alvoLabel': 'Droplet Target',
    'data.alvoValue': '450 W/kg',
    'data.arquivadoLabel': 'Archived in',
    'data.arquivadoValue': '1990',

    // ImageStrip
    'strip.img1': '01 — ISS Radiator panel under vacuum test · NASA Lewis',
    'strip.img2': '02 — Thermal vacuum chamber · NASA Lewis Facility',
    'strip.img3': '03 — Microgravity test capsule · Zero Gravity Facility',
    'strip.img4': '04 — MEMS droplet generator nozzle · Lab testing',
    'strip.img5': '05 — Thermal payload with MLI blanket · NASA NTRS',
    'strip.img6': '06 — Deployment mechanism · Ground testing',

    // WhyNow
    'whynow.eyebrow': 'WHY NOW',
    'whynow.h2Line1': 'The constraint',
    'whynow.h2Line2': 'just returned.',
    'whynow.body':
      'SpaceX filed for up to one million data center satellites. Google is preparing Suncatcher prototypes. Starcloud operated a GPU in orbit. ESA aims for fifty kilowatts proof-of-concept in 2031 and one gigawatt by 2050. Above ten megawatts, radiator mass dominates the spacecraft.',
    'whynow.stat1Value': '10 MW',
    'whynow.stat1Label': 'scale at which radiator mass dominates',
    'whynow.stat2Value': '1 in 10⁸',
    'whynow.stat2Label': 'allowable droplet loss for thirty years of operation',

    // Diagram
    'diagram.eyebrow': 'MASS COMPARISON — SAME HEAT REJECTED (STANDARDIZED IN W/kg)',
    'diagram.badge': '6.4× LIGHTER',
    'diagram.leftTitle': 'CONVENTIONAL SOLID PANEL',
    'diagram.leftStat': 'ISS — 70 W/kg',
    'diagram.leftSub': '(equiv. 14.3 kg/kW)',
    'diagram.leftNote': 'note: piping, structure, fluid, micrometeoroid shielding',
    'diagram.rightTitle': 'LIQUID DROPLET CURTAIN (LDR)',
    'diagram.rightStat': 'droplets — up to 450 W/kg',
    'diagram.rightSub': '(6.4× lighter than ISS)',
    'diagram.generator': 'GENERATOR',
    'diagram.collector': 'COLLECTOR',
    'diagram.rightNote': 'note: no panel, no piping in radiating area',
    'diagram.leg1': '// W/kg unit: indicates watts of rejected heat per kilogram of system mass — higher value means lighter and more efficient architecture.',
    'diagram.leg2': '// Literature comparison: ISS Solid panel = 70 W/kg (1×, equiv. 14.3 kg/kW) | Droplets 2025 study = 450 W/kg (6.4×) | Magnetic droplets CubeSat = ~1,500 W/kg (21×, equiv. 0.67 kg/kW).',
    'diagram.leg3': '// Test conditions and rejection temperatures differ across studies. Values presented as literature reference.',

    // ProblemStatement
    'problem.eyebrow': 'THE PROBLEM',
    'problem.h2Line1': 'In vacuum',
    'problem.h2Line2': 'there is only radiation.',
    'problem.body':
      'On Earth, heat leaves by convection. In vacuum there is no medium. The only way out is thermal radiation, governed by the fourth power of absolute surface temperature. Solid panels solve this up to around one hundred kilowatts. Above that, panel, piping, and structural mass grows faster than rejected heat.',
    'problem.note':
      '// Below 10 MW, independent analyses indicate that solar arrays, not radiators, dominate spacecraft area. We do not work in that regime.',

    // Architecture
    'arch.eyebrow': 'ARCHITECTURE',
    'arch.h2Line1': 'Four stages,',
    'arch.h2Line2': 'zero panels.',
    'arch.st1Title': 'GENERATE',
    'arch.st1Body': 'A generator produces billions of micro-droplets via Rayleigh jet breakup with periodic perturbation. Diameters between 50 and 500 micrometers.',
    'arch.st1Detail': 'up to 250,000 droplets per second per orifice. Megawatt scale requires on the order of 10⁶ orifices.',
    'arch.st2Title': 'RADIATE',
    'arch.st2Body': 'The curtain travels across vacuum and radiates heat. Radiating area is the sum of trillions of submillimeter spheres, occupying minimal volume when condensed.',
    'arch.st2Detail': 'typical path length of one hundred meters. Curtain optical depth dictates overall emissivity.',
    'arch.st3Title': 'COLLECT',
    'arch.st3Body': 'A collector captures droplets and develops sufficient hydraulic pressure to pump liquid back. Studied configurations: linear collector and centrifugal collector with Pitot-type scoop.',
    'arch.st3Detail': 'must capture essentially everything. Losing 1 in 10⁵ flow costs, in two weeks, mass equal to the entire liquid inventory.',
    'arch.st4Title': 'RETURN',
    'arch.st4Body': 'Fluid returns to the heat exchanger and restarts the cycle.',
    'arch.st4Detail': 'the return line is a single point of failure and requires micrometeoroid protection, making it heavy.',

    // TechnicalPillars
    'pillars.eyebrow': 'WHAT THIS DEMANDS',
    'pillars.h2Line1': 'The hard parts,',
    'pillars.h2Line2': 'stated clearly.',
    'pillars.body': 'We list obstacles because underestimating them is how projects fail.',
    'pillars.p1Title': 'Droplet collection',
    'pillars.p1Body': 'The dominant loss mechanism is not splashing. It is secondary droplets shed from wave crests forming on the collector liquid film. Characterized by NASA in 1987. Unresolved.',
    'pillars.p1Diff': 'Severe',
    'pillars.p2Title': 'Orifice manufacturing',
    'pillars.p2Body': 'Megawatt scale requires ~10⁶ orifices with aiming better than 10 mrad. In 1987 that meant two years of continuous mechanical drilling.',
    'pillars.p2Diff': 'Transformed since 1990',
    'pillars.p3Title': 'Fluid loss and contamination',
    'pillars.p3Body': 'Lost droplets mean lost mass and contamination of solar arrays, optics, and sensors. Requirement: less than 1 loss in 10⁸.',
    'pillars.p3Diff': 'Severe',
    'pillars.p4Title': 'Curtain stability and aiming',
    'pillars.p4Body': 'Maintaining alignment between generator and collector across tens of meters under maneuvers and thermal expansion.',
    'pillars.p4Diff': 'High',
    'pillars.diffLabel': 'DIFFICULTY:',

    // Thesis
    'thesis.eyebrow': 'THE THESIS',
    'thesis.h2Line1': 'Archived by manufacturing,',
    'thesis.h2Line2': 'not by physics.',
    'thesis.th1': '1987 BARRIER',
    'thesis.th2': '2026 STATUS',
    'thesis.r1b1987': '10⁶ orifices = 2 years of drilling',
    'thesis.r1s2026': 'MEMS produces thousands of nozzles per wafer, sub-mrad precision',
    'thesis.r2b1987': 'Aiming limited to ~3 mrad',
    'thesis.r2s2026': 'Modern printhead techniques surpass this',
    'thesis.r3b1987': 'Magnetic collector unviable due to electromagnet mass',
    'thesis.r3s2026': 'Rare-earth magnets and HTS change the equation. ~1,500 W/kg (equiv. 0.67 kg/kW) reported at CubeSat scale',
    'thesis.r4b1987': 'Limited optical diagnostics',
    'thesis.r4s2026': 'High-speed video, PIV, shadowgraphy',
    'thesis.r5b1987': 'No commercial demand',
    'thesis.r5s2026': 'SpaceX, Google, Starcloud, ESA',
    'thesis.closing': 'The liquid droplet radiator was not abandoned due to physical impossibility.',

    // OpenProblems
    'problems.eyebrow': 'OPEN PROBLEMS',
    'problems.h2Line1': 'What we cannot',
    'problems.h2Line2': 'yet solve.',
    'problems.body': 'Transparency is faster than hype. We publish our open problems because the people who can help are reading this.',
    'problems.betLabel': 'Our bet:',
    'problems.p1Title': 'Wave stripping on collector film',
    'problems.p1Para1': 'The liquid film on the collector surface develops waves, shedding secondary droplets from wave crests. NASA identified this in 1987 as the primary loss mechanism and characterized it without solving it.',
    'problems.p1Para2': 'A parallel result showed a wire-mesh screen target reduces splashing by 500× compared to a flat plate. It was never integrated into a full collector.',
    'problems.p1Bet': 'screen target combined with auxiliary film injection can satisfy the 1 in 10⁸ loss requirement. Characterizable in a vacuum bench test under normal gravity with high-speed video. This is our first experiment.',

    'problems.p2Title': 'Orifice plate wetting',
    'problems.p2Para1': 'A liquid film on the exit face deflects stream trajectory. Non-wetting coatings failed: applied before drilling they prevent high-quality orifices; applied after they clog holes.',
    'problems.p2Bet': 'MEMS fabrication enables surface geometries and treatments that did not exist in 1987. Untested.',

    'problems.p3Title': 'Magnetic collection, reassessed',
    'problems.p3Para1': 'Ferrofluid with samarium-cobalt magnets completely suppressed splashing in 1980s tests. The concept was shelved because superconducting electromagnets made the assembly heavy.',
    'problems.p3Bet': 'modern rare-earth permanent magnets change the math. A recent study reports ~1,500 W/kg (equiv. 0.67 kg/kW) at CubeSat scale. Reproducing with permanent magnets is inexpensive and not yet done in our scope.',

    'problems.p4Title': 'Secondary droplet instrumentation',
    'problems.p4Para1': 'In centrifugal collectors, visual detection of secondary droplets was impossible in 1987 and remains to be verified. Analytically predicted surface waves could not be compared to experiment due to non-uniform wetting.',
    'problems.p4Bet': 'digital shadowgraphy and high-speed optics solve the measurement challenge. This is the lowest technical risk on the list.',

    'problems.p5Title': 'Liquid sheet radiator',
    'problems.p5Para1': 'A variant replaces trillions of droplets with continuous liquid sheets, eliminating millions of orifices. Preliminary viability was proven, but research stalled and the line was largely abandoned.',
    'problems.p5Bet': 'if orifice fabrication is no longer the bottleneck, the key advantage of liquid sheets disappears. We must verify this before locking in architecture. We have not yet verified it.',
    'problems.cta': 'Think you can solve one of these? → Contact',

    // Role / Team
    'role.eyebrow': 'TEAM',
    'role.h2Line1': 'Looking for',
    'role.h2Line2': 'one person.',
    'role.body': 'A senior heat transfer, two-phase flow, or space thermal control engineer/researcher. As a founding partner, not an employee.',
    'role.haveHeader': 'WHAT WE HAVE',
    'role.haveItem1': 'Ongoing primary literature review',
    'role.haveItem2': 'Identified and bounded technical gap',
    'role.haveItem3': 'Full-time commercial commitment',
    'role.haveItem4': 'Mapped route to non-dilutive funding',
    'role.dontHeader': "WHAT WE DON'T HAVE",
    'role.dontItem1': 'Capital',
    'role.dontItem2': 'Own laboratory',
    'role.dontItem3': 'Prototype',
    'role.dontItem4': 'Any experimental results',
    'role.cta': 'Tell us where the reasoning is wrong',

    // Reading
    'reading.eyebrow': 'READING',
    'reading.h2Line1': 'Primary sources,',
    'reading.h2Line2': 'open.',
    'reading.body': 'We have no publications of our own yet. These are the primary literature sources backing our work. Almost all are public domain.',

    // Footer
    'footer.eyebrow': 'CONTACT',
    'footer.loc': '23°33\'01"S 46°38\'02"W — SÃO PAULO · BRAZIL',
    'footer.copy': 'AETHER — Orbital thermal rejection. Est. 2026.',
    'footer.tag': 'Independent research program',
    'footer.disclaimer': '// Cited values are from published literature under varying test conditions. They do not represent guaranteed performance or proprietary experimental results. This is an early-stage research program without a commercial product.',
  },
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('aether_lang') as Language | null;
    if (saved && (saved === 'en' || saved === 'pt')) {
      setLangState(saved);
    } else if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) {
      setLangState('en');
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('aether_lang', newLang);
    }
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations['pt']?.[key] || key;
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
