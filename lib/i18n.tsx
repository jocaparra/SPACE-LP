'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

type Translations = Record<string, string>;

const dictionary: Record<Language, Translations> = {
  pt: {
    // Header & Navigation
    'nav.hero': '00 — HERO',
    'nav.constraint': '01 — RESTRIÇÃO',
    'nav.solution': '02 — SOLUÇÃO',
    'nav.literatureError': '03 — ERRO LITERATURA',
    'nav.thesis': '04 — TESE',
    'nav.problems': '05 — PROBLEMAS',
    'nav.lossReq': '06 — REQUISITO',
    'nav.dr1': '07 — DR1',
    'nav.roadmap': '08 — ROTEIRO',
    'nav.compare': '09 — STATUS',
    'nav.sources': '10 — FONTES',
    'nav.contact': '11 — CONTATO',
    'status.phase': 'R&D — FASE 1',
    'status.system': 'SISTEMA: NOMINAL',

    // 00 — Hero
    'hero.num': '00 —',
    'hero.descriptor': 'SPES — SPACE SYSTEMS ENGINEERING SOLUTIONS',
    'hero.titleLine1': 'Beyond the HEAT',
    'hero.titleLine2': 'A camada térmica da computação orbital.',
    'hero.body': 'No vácuo não existe convecção. Acima de certa escala, o radiador domina a massa da espaçonave, e massa é custo de lançamento. A rejeição de calor é a restrição que limita a computação em órbita.',
    'hero.backedBy': 'APOIADO POR',
    'hero.data1Label': 'Status',
    'hero.data1Value': 'Fase de literatura',
    'hero.data2Label': 'Fundação',
    'hero.data2Value': '2026',
    'hero.data3Label': 'Sede',
    'hero.data3Value': 'Campinas, SP',
    'hero.data4Label': 'Foco',
    'hero.data4Value': 'Radiador de gotículas',
    'hero.data5Label': 'Faixa de operação',
    'hero.data5Value': '275 a 335 K',
    'hero.data6Label': 'Próximo marco',
    'hero.data6Value': 'Dez 2026',

    // 01 — A restrição
    'sec01.num': '01 —',
    'sec01.title': 'No vácuo, o calor só sai por radiação.',
    'sec01.body': 'Na ausência de atmosfera, a troca térmica ocorre exclusivamente por emissão infravermelha, regida pela lei de Stefan-Boltzmann (E = εσT⁴). Como a potência dissipada cresce linearmente com o processamento, a área de radiador escala rapidamente, tornando o sistema térmico a maior fração de massa da nave.',
    'sec01.legend': 'Acima de certa potência, o radiador domina a massa da nave.',
    'sec01.chartLabelX': 'POTÊNCIA DISSIPADA (kW)',
    'sec01.chartLabelY': 'MASSA DO SISTEMA (kg)',
    'sec01.curvePanel': 'Radiador de painel sólido',
    'sec01.curveDroplet': 'Cortina de gotículas (Spes)',
    'sec01.crossoverLabel': 'Domínio da massa do radiador',

    // 02 — A solução conhecida
    'sec02.num': '02 —',
    'sec02.title': 'A resposta existe desde os anos 1980.',
    'sec02.stage1': '01 — GERAR',
    'sec02.stage1Desc': 'Orifícios formam jatos colimados de fluido.',
    'sec02.stage2': '02 — IRRADIAR',
    'sec02.stage2Desc': 'Trilhões de gotículas emitem IV no vácuo.',
    'sec02.stage3': '03 — COLETAR',
    'sec02.stage3Desc': 'Captura do filme e bombeamento de retorno.',
    'sec02.stage4': '04 — RETORNAR',
    'sec02.stage4Desc': 'Trocador de calor recicla o fluido resfriado.',
    'sec02.note': 'é aqui que está o problema não resolvido',
    'sec02.bigNumber': '~10× mais leve',
    'sec02.conditions': 'fluido de silicone · 275 a 335 K · escala de módulo',

    // 03 — O erro que a literatura popular comete
    'sec03.num': '03 —',
    'sec03.title': 'O erro que a literatura popular comete.',
    'sec03.subtitle': 'Estudos dos anos 1980 focaram em reatores nucleares a 700 K. A computação orbital opera entre 275 e 335 K.',
    'sec03.leftHeader': 'CENÁRIO COMPUTACIONAL (SILICONE)',
    'sec03.leftLine1': 'Óleo de silicone',
    'sec03.leftLine2': '275 a 335 K',
    'sec03.leftLine3': 'compatível com processador',
    'sec03.leftLine4': 'Ótimo do sistema: centenas de kW',
    'sec03.rightHeader': 'CENÁRIO NUCLEAR (METAL LÍQUIDO)',
    'sec03.rightLine1': 'Metal líquido',
    'sec03.rightLine2': '700 K e acima',
    'sec03.rightLine3': 'reator nuclear',
    'sec03.rightLine4': 'Ótimo do sistema: 10 a 100 MW (com replicação modular)',
    'sec03.banner': 'Um data center orbital não é um radiador. São dezenas de módulos replicados.',
    'sec03.subBanner': 'Ninguém publicou a massa auxiliar dessa replicação.',

    // 04 — A tese
    'sec04.num': '04 —',
    'sec04.line1': 'A física do radiador de gotículas é conhecida.',
    'sec04.line2': 'Falta demonstrar que a vantagem de massa sobrevive à escala.',
    'sec04.line3': 'A Spes existe para medir isso.',

    // 05 — Problemas em aberto
    'sec05.num': '05 —',
    'sec05.title': 'Problemas em aberto.',
    'sec05.diffSevere': 'SEVERO',
    'sec05.diffHigh': 'ALTO',
    'sec05.diffMedium': 'MÉDIO',

    'sec05.p1Title': '01 — Sobrevivência da vantagem de massa sob replicação modular',
    'sec05.p1Open': 'O que está aberto: A literatura calcula a razão W/kg para um único módulo ideal. Em um sistema espacial de grande porte com replicação modular de megawatts, a massa de tubulações, coletores distribuídos e trocadores de calor intermediários pode anular o benefício.',
    'sec05.p1Bet': 'Nossa aposta: Um modelo paramétrico que inclui massa de bombeamento e conexões modulares revela o limite real de viabilidade antes da fabricação.',

    'sec05.p2Title': '02 — Massa dos componentes auxiliares por módulo',
    'sec05.p2Open': 'O que está aberto: Eletroímãs de contenção, bombas de vácuo de pressurização e manifolds de distribuição adicionam massa morta a cada módulo.',
    'sec05.p2Bet': 'Nossa aposta: Otimização de coletores capilares passivos e bombas integradas reduz a penalidade de massa dos auxiliares.',

    'sec05.p3Title': '03 — Espessura óptica da cortina e reabsorção',
    'sec05.p3Open': 'O que está aberto: Cortinas muito densas reabsorvem a radiação emitida pelas gotículas internas, reduzindo a emissividade efetiva abaixo de 0,5.',
    'sec05.p3Bet': 'Nossa aposta: Geometria de cortina plana delgada com espaçamento calibrado via simulação Monte Carlo de transferência radiativa.',

    'sec05.p4Title': '04 — Coleta sem desprendimento de gotículas secundárias',
    'sec05.p4Open': 'O que está aberto: Ao atingir o filme de coleta, o impacto da gotícula primária gera microgotículas secundárias que espirram de volta ao vácuo.',
    'sec05.p4Bet': 'Nossa aposta: Alvo de malha porosa desaceleradora com captação de filme por diferencial de pressão reduz em 500× a formação secundária.',

    'sec05.p5Title': '05 — Perda total de fluido: coleta falha, evaporação e contaminação',
    'sec05.p5Open': 'O que está aberto: Perda contínua de fluido diminui a massa térmica embarcada e deposita filme de silicone sobre painéis solares e sensores.',
    'sec05.p5Bet': 'Nossa aposta: Fluidos de silicone de ultra-baixa pressão de vapor (<10⁻⁸ Torr a 300 K) com sistema de reciclagem de névoa no coletor.',

    'sec05.p6Title': '06 — Seleção e degradação do fluido em órbita baixa',
    'sec05.p6Open': 'O que está aberto: Oxigênio atômico (AO) e radiação UV degradam cadeias de siloxano, alterando viscosidade e pressão de vapor.',
    'sec05.p6Bet': 'Nossa aposta: Aditivos antioxidantes e fluorados estáveis a AO para operação prolongada em LEO.',

    'sec05.p7Title': '07 — Apontamento e dinâmica da cortina sob manobra',
    'sec05.p7Open': 'O que está aberto: Acionamentos de atitude e acelerações da espaçonave desviam o feixe de gotículas, fazendo-o errar o coletor.',
    'sec05.p7Bet': 'Nossa aposta: Guiamento magnético do feixe ou coletor superdimensionado com malha de retenção capilar.',

    'sec05.p8Title': '08 — Detritos, contaminação e licenciamento',
    'sec05.p8Open': 'O que está aberto: Agências reguladoras exigem prova de que a cortina não gerará detritos líquidos em órbita nem contaminará satélites vizinhos.',
    'sec05.p8Bet': 'Nossa aposta: Protocolos de contenção passiva e isolamento físico para ensaios orbitais seguros.',

    'sec05.p9Title': '09 — Cadeia térmica completa, do processador ao vácuo',
    'sec05.p9Open': 'O que está aberto: A resistência térmica da junção do chip ao fluido de silicone pode ser o verdadeiro gargalo do sistema.',
    'sec05.p9Bet': 'Nossa aposta: Refrigeração por imersão direta do substrato de silício no fluido de arrefecimento antes da ejeção.',

    'sec05.ctaText': 'Acha que consegue resolver um destes?',
    'sec05.ctaAction': '→ Fale conosco',

    // 06 — Requisito de perda
    'sec06.num': '06 —',
    'sec06.title': 'Requisito de perda.',
    'sec06.body': 'O requisito de taxa de perda aceitável não é uma constante empírica citada na literatura, mas um valor estritamente derivado da arquitetura e da vida útil planejada.',
    'sec06.formulaLabel': 'EQUAÇÃO DE DERIVAÇÃO DE PERDA ACEITÁVEL',
    'sec06.formula': 'perda tolerável = (reserva × massa de fluido embarcada) ÷ (vazão mássica × vida de missão)',
    'sec06.note': 'Publicamos em quilogramas por ano, com coleta falha, evaporação e contaminação separadas.',

    // 07 — Spes DR1
    'sec07.num': '07 —',
    'sec07.title': 'O instrumento que precisamos construir é o produto que já podemos vender.',
    'sec07.subtitle': 'Bancada de ensaio de geração, trajetória e coleta de gotículas em vácuo.',
    'sec07.body': 'Desenvolvida para validar experimentos térmicos de alta precisão. Duas formas de aquisição: equipamento completo para laboratório, ou campanha de ensaio contratada executada pela nossa equipe. Não existe fornecedor nacional equivalente.',
    'sec07.spec1Label': 'Pressão de vácuo',
    'sec07.spec1Value': '< 10⁻⁵ mbar',
    'sec07.spec2Label': 'Vazão de gotículas',
    'sec07.spec2Value': '10.000 a 250.000 /s',
    'sec07.spec3Label': 'Diâmetro de orifício',
    'sec07.spec3Value': '50 a 300 µm',
    'sec07.spec4Label': 'Diagnóstico óptico',
    'sec07.spec4Value': 'Sombrografia e PIV integrada',
    'sec07.spec5Label': 'Modos de contrato',
    'sec07.spec5Value': 'Bancada completa ou Campanha contratada',

    // 08 — Roteiro
    'sec08.num': '08 —',
    'sec08.title': 'Roteiro de desenvolvimento.',
    'sec08.item1Date': 'DEZ 2026',
    'sec08.item1Title': 'Modelo paramétrico de massa publicado',
    'sec08.item1Desc': 'Lançamento do código aberto para estimativa de massa de sistemas de gotículas vs painéis.',
    'sec08.item2Date': 'MAR 2027',
    'sec08.item2Title': 'Responsável técnico na equipe e proposta de fomento submetida',
    'sec08.item2Desc': 'Submissão de proposta de pesquisa aplicada aos órgãos de fomento com liderança acadêmica.',
    'sec08.item3Date': 'SET 2027',
    'sec08.item3Title': 'Bancada operacional e calibrada',
    'sec08.item3Desc': 'Primeiro disparo da bancada Spes DR1 em câmara de vácuo com amostragem óptica.',
    'sec08.item4Date': 'DEZ 2027',
    'sec08.item4Title': 'Primeira unidade entregue',
    'sec08.item4Desc': 'Entrega da primeira bancada de ensaio contratada para parceiro de pesquisa.',
    'sec08.item5Date': '2028',
    'sec08.item5Title': 'Campanha experimental de coleta e publicação',
    'sec08.item5Desc': 'Validação em gravidade normal da eficiência de coleta e publicação dos resultados primários.',

    // 09 — O que temos e o que não temos
    'sec09.num': '09 —',
    'sec09.title': 'O que temos e o que não temos.',
    'sec09.leftTitle': 'O QUE TEMOS',
    'sec09.left1': 'Revisão de literatura em andamento',
    'sec09.left2': 'Modelo paramétrico em construção',
    'sec09.left3': 'Equipe e papéis definidos',
    'sec09.rightTitle': 'O QUE NÃO TEMOS',
    'sec09.right1': 'Engenheiro sênior de transferência de calor',
    'sec09.right2': 'Laboratório próprio',
    'sec09.right3': 'Protótipo físico construído',
    'sec09.right4': 'Qualquer resultado experimental nosso',
    'sec09.closing': 'Primeira verificação: quatro meses, custo próximo de zero, antes de qualquer compra de equipamento.',

    // 10 — Fontes
    'sec10.num': '10 —',
    'sec10.title': 'Fontes e literatura.',
    'sec10.primTitle': 'LITERATURA PRIMÁRIA',
    'sec10.prim1': 'NASA TM-89852 (1987) — Liquid Droplet Radiator Systems Analysis',
    'sec10.prim2': 'NASA CR-185164 (1989) — Advanced Droplet Collector Testing',
    'sec10.prim3': 'NASA CR-175033 (1986) — Droplet Generation in High Vacuum',
    'sec10.prim4': 'Mattick & Hertzberg (Acta Astronautica, 1982) — Liquid Droplet Radiators for Heat Rejection in Space',
    'sec10.prim5': 'Journal of Spacecraft and Rockets (2024) — Re-evaluating Thermal Management for Megawatt Orbiting Compute',
    'sec10.mktTitle': 'ANÁLISES DE MERCADO',
    'sec10.mkt1': 'Relatórios de demanda de dados orbitais e constelações de IA em LEO',
    'sec10.counterTitle': 'CONTRA-ARGUMENTO E CONTRADITÓRIO',
    'sec10.counterBody': 'Existem análises independentes sustentando que a rejeição de calor não é o gargalo da computação orbital. Discordamos, e o motivo é a faixa de potência considerada. Abaixo de centenas de quilowatts o painel solar domina a área; acima de megawatts com replicação modular, a massa do radiador se torna o fator crítico.',

    // 11 — Contato e rodapé
    'sec11.num': '11 —',
    'sec11.title': 'Contato.',
    'sec11.emailLabel': 'CORRESPONDÊNCIA TÉCNICA',
    'sec11.emailValue': 'contato@spes.space',
    'sec11.locationLabel': 'SEDE E COORDENADAS',
    'sec11.locationValue': 'Campinas, SP — Brasil · 22°54\'S 47°03\'W',
    'sec11.countdownLabel': 'CONTAGEM REGRESSIVA (PRÓXIMO MARCO: DEZ 2026)',
    'sec11.disclaimer': 'Valores técnicos apresentados neste site são metas de desenvolvimento e parâmetros de modelo de engenharia, não desempenho garantido ou produto comercial homologado.',
    'sec11.copyright': '© 2026 SPES SPACE SYSTEMS ENGINEERING SOLUTIONS. TODOS OS DIREITOS RESERVADOS.'
  },
  en: {
    // Header & Navigation
    'nav.hero': '00 — HERO',
    'nav.constraint': '01 — CONSTRAINT',
    'nav.solution': '02 — SOLUTION',
    'nav.literatureError': '03 — LITERATURE ERROR',
    'nav.thesis': '04 — THESIS',
    'nav.problems': '05 — PROBLEMS',
    'nav.lossReq': '06 — REQUIREMENT',
    'nav.dr1': '07 — DR1',
    'nav.roadmap': '08 — ROADMAP',
    'nav.compare': '09 — STATUS',
    'nav.sources': '10 — SOURCES',
    'nav.contact': '11 — CONTACT',
    'status.phase': 'R&D — PHASE 1',
    'status.system': 'SYSTEM: NOMINAL',

    // 00 — Hero
    'hero.num': '00 —',
    'hero.descriptor': 'SPES — SPACE SYSTEMS ENGINEERING SOLUTIONS',
    'hero.titleLine1': 'Beyond the HEAT',
    'hero.titleLine2': 'The thermal layer of orbital computing.',
    'hero.body': 'In vacuum there is no convection. Above a certain scale, the radiator dominates spacecraft mass, and mass is launch cost. Heat rejection is the constraint limiting orbital computing.',
    'hero.backedBy': 'BACKED BY',
    'hero.data1Label': 'Status',
    'hero.data1Value': 'Literature phase',
    'hero.data2Label': 'Foundation',
    'hero.data2Value': '2026',
    'hero.data3Label': 'HQ',
    'hero.data3Value': 'Campinas, SP',
    'hero.data4Label': 'Focus',
    'hero.data4Value': 'Liquid droplet radiator',
    'hero.data5Label': 'Operating range',
    'hero.data5Value': '275 to 335 K',
    'hero.data6Label': 'Next milestone',
    'hero.data6Value': 'Dec 2026',

    // 01 — A restrição
    'sec01.num': '01 —',
    'sec01.title': 'In vacuum, heat only leaves through radiation.',
    'sec01.body': 'In the absence of atmosphere, thermal exchange occurs exclusively via infrared emission governed by the Stefan-Boltzmann law (E = εσT⁴). As chip dissipated power scales linearly with compute, radiator area expands dramatically, making thermal control the dominant spacecraft mass fraction.',
    'sec01.legend': 'Above a certain power, the radiator dominates spacecraft mass.',
    'sec01.chartLabelX': 'DISSIPATED POWER (kW)',
    'sec01.chartLabelY': 'SYSTEM MASS (kg)',
    'sec01.curvePanel': 'Solid panel radiator',
    'sec01.curveDroplet': 'Liquid droplet curtain (Spes)',
    'sec01.crossoverLabel': 'Radiator mass dominance',

    // 02 — A solução conhecida
    'sec02.num': '02 —',
    'sec02.title': 'The answer has existed since the 1980s.',
    'sec02.stage1': '01 — GENERATE',
    'sec02.stage1Desc': 'Orifices form collimated fluid streams.',
    'sec02.stage2': '02 — RADIATE',
    'sec02.stage2Desc': 'Trillions of droplets emit IR in vacuum.',
    'sec02.stage3': '03 — COLLECT',
    'sec02.stage3Desc': 'Film capture and return pumping.',
    'sec02.stage4': '04 — RETURN',
    'sec02.stage4Desc': 'Heat exchanger recycles cooled fluid.',
    'sec02.note': 'this is where the unsolved problem lies',
    'sec02.bigNumber': '~10× lighter',
    'sec02.conditions': 'silicone fluid · 275 to 335 K · module scale',

    // 03 — O erro que a literatura popular comete
    'sec03.num': '03 —',
    'sec03.title': 'The mistake popular literature makes.',
    'sec03.subtitle': '1980s studies focused on 700 K nuclear reactors. Orbital compute operates between 275 and 335 K.',
    'sec03.leftHeader': 'COMPUTATIONAL SCENARIO (SILICONE)',
    'sec03.leftLine1': 'Silicone oil',
    'sec03.leftLine2': '275 to 335 K',
    'sec03.leftLine3': 'processor compatible',
    'sec03.leftLine4': 'System optimum: hundreds of kW',
    'sec03.rightHeader': 'NUCLEAR SCENARIO (LIQUID METAL)',
    'sec03.rightLine1': 'Liquid metal',
    'sec03.rightLine2': '700 K and above',
    'sec03.rightLine3': 'nuclear reactor',
    'sec03.rightLine4': 'System optimum: 10 to 100 MW (with modular replication)',
    'sec03.banner': 'An orbital data center is not one radiator. It is dozens of replicated modules.',
    'sec03.subBanner': 'No one has published the auxiliary mass of this replication.',

    // 04 — A tese
    'sec04.num': '04 —',
    'sec04.line1': 'The physics of liquid droplet radiators is known.',
    'sec04.line2': 'It remains to be shown that the mass advantage survives scale.',
    'sec04.line3': 'Spes exists to measure this.',

    // 05 — Problemas em aberto
    'sec05.num': '05 —',
    'sec05.title': 'Open problems.',
    'sec05.diffSevere': 'SEVERE',
    'sec05.diffHigh': 'HIGH',
    'sec05.diffMedium': 'MEDIUM',

    'sec05.p1Title': '01 — Survival of mass advantage under modular replication',
    'sec05.p1Open': 'What is open: Literature calculates the W/kg ratio for a single ideal module. In large-scale megawatt space systems with modular replication, the mass of manifold piping, distributed collectors, and heat exchangers can offset the benefit.',
    'sec05.p1Bet': 'Our bet: A parametric model including pumping mass and modular interconnects reveals the true viability boundary before manufacturing.',

    'sec05.p2Title': '02 — Auxiliary component mass per module',
    'sec05.p2Open': 'What is open: Containment electromagnets, pressurization vacuum pumps, and distribution manifolds add dead mass to every module.',
    'sec05.p2Bet': 'Our bet: Optimization of passive capillary collectors and integrated pumps reduces auxiliary mass penalty.',

    'sec05.p3Title': '03 — Curtain optical thickness and reabsorption',
    'sec05.p3Open': 'What is open: Overly dense droplet curtains reabsorb radiation emitted by inner droplets, driving effective emissivity below 0.5.',
    'sec05.p3Bet': 'Our bet: Thin planar curtain geometry with calibrated spacing via Monte Carlo radiative transfer simulation.',

    'sec05.p4Title': '04 — Collection without secondary droplet splashing',
    'sec05.p4Open': 'What is open: Upon striking the collection film, primary droplet impact generates secondary micro-droplets that splash back into vacuum.',
    'sec05.p4Bet': 'Our bet: Decelerating porous mesh target with film pressure differential capture reduces secondary splashing by 500×.',

    'sec05.p5Title': '05 — Total fluid loss: failed collection, evaporation, and contamination',
    'sec05.p5Open': 'What is open: Continuous fluid loss depletes onboard thermal mass and deposits silicone film onto solar panels and optical sensors.',
    'sec05.p5Bet': 'Our bet: Ultra-low vapor pressure silicone fluids (<10⁻⁸ Torr at 300 K) with mist recycling systems in the collector.',

    'sec05.p6Title': '06 — Fluid selection and LEO degradation',
    'sec05.p6Open': 'What is open: Atomic oxygen (AO) and UV radiation degrade siloxane chains, altering fluid viscosity and vapor pressure.',
    'sec05.p6Bet': 'Our bet: Antioxidant additives and AO-stable fluorinated compounds for prolonged LEO operation.',

    'sec05.p7Title': '07 — Curtain pointing and dynamics under maneuver',
    'sec05.p7Open': 'What is open: Spacecraft attitude thrusters and orbital maneuvers deflect the droplet stream, causing it to miss the collector.',
    'sec05.p7Bet': 'Our bet: Magnetic stream guidance or oversized collector with capillary retention mesh.',

    'sec05.p8Title': '08 — Debris, contamination, and licensing',
    'sec05.p8Open': 'What is open: Regulatory agencies require proof that droplet curtains will not generate orbital liquid debris or contaminate neighboring satellites.',
    'sec05.p8Bet': 'Our bet: Passive containment protocols and physical isolation enclosures for safe orbital testing.',

    'sec05.p9Title': '09 — Complete thermal chain, from processor to vacuum',
    'sec05.p9Open': 'What is open: Thermal resistance from chip junction to silicone fluid may be the system\'s true bottleneck.',
    'sec05.p9Bet': 'Our bet: Direct immersion cooling of silicon substrate in thermal fluid prior to droplet ejection.',

    'sec05.ctaText': 'Think you can solve one of these?',
    'sec05.ctaAction': '→ Talk to us',

    // 06 — Requisito de perda
    'sec06.num': '06 —',
    'sec06.title': 'Loss requirement.',
    'sec06.body': 'The acceptable loss rate requirement is not an empirical constant quoted in literature, but a value strictly derived from system architecture and mission lifetime.',
    'sec06.formulaLabel': 'ACCEPTABLE LOSS DERIVATION EQUATION',
    'sec06.formula': 'tolerable loss = (reserve × onboard fluid mass) ÷ (mass flow rate × mission lifetime)',
    'sec06.note': 'We publish in kilograms per year, with failed collection, evaporation, and contamination accounted for separately.',

    // 07 — Spes DR1
    'sec07.num': '07 —',
    'sec07.title': 'The instrument we need to build is the product we can already sell.',
    'sec07.subtitle': 'Test bench for droplet generation, trajectory, and collection in vacuum.',
    'sec07.body': 'Engineered to validate high-precision space thermal experiments. Two acquisition modes: complete laboratory equipment, or contracted test campaign executed by our team. No equivalent domestic supplier exists.',
    'sec07.spec1Label': 'Vacuum pressure',
    'sec07.spec1Value': '< 10⁻⁵ mbar',
    'sec07.spec2Label': 'Droplet rate',
    'sec07.spec2Value': '10,000 to 250,000 /s',
    'sec07.spec3Label': 'Orifice diameter',
    'sec07.spec3Value': '50 to 300 µm',
    'sec07.spec4Label': 'Optical diagnostics',
    'sec07.spec4Value': 'Integrated Shadowgraphy & PIV',
    'sec07.spec5Label': 'Acquisition modes',
    'sec07.spec5Value': 'Complete Bench or Contracted Campaign',

    // 08 — Roteiro
    'sec08.num': '08 —',
    'sec08.title': 'Development roadmap.',
    'sec08.item1Date': 'DEC 2026',
    'sec08.item1Title': 'Parametric mass model published',
    'sec08.item1Desc': 'Open source release for estimating mass of droplet systems vs solid panels.',
    'sec08.item2Date': 'MAR 2027',
    'sec08.item2Title': 'Technical lead recruited and grant proposal submitted',
    'sec08.item2Desc': 'Applied research proposal submission to funding agencies with academic leadership.',
    'sec08.item3Date': 'SEP 2027',
    'sec08.item3Title': 'Test bench operational and calibrated',
    'sec08.item3Desc': 'First firing of Spes DR1 bench in vacuum chamber with optical sampling.',
    'sec08.item4Date': 'DEC 2027',
    'sec08.item4Title': 'First unit delivered',
    'sec08.item4Desc': 'Delivery of first contracted test bench to research partner.',
    'sec08.item5Date': '2028',
    'sec08.item5Title': 'Experimental collection campaign & publication',
    'sec08.item5Desc': '1G validation of collection efficiency and publication of primary results.',

    // 09 — O que temos e o que não temos
    'sec09.num': '09 —',
    'sec09.title': 'What we have and what we don\'t.',
    'sec09.leftTitle': 'WHAT WE HAVE',
    'sec09.left1': 'Literature review in progress',
    'sec09.left2': 'Parametric model under construction',
    'sec09.left3': 'Team & roles defined',
    'sec09.rightTitle': 'WHAT WE DON\'T HAVE',
    'sec09.right1': 'Senior heat transfer engineer',
    'sec09.right2': 'Own laboratory',
    'sec09.right3': 'Physical prototype built',
    'sec09.right4': 'Any experimental results of our own',
    'sec09.closing': 'First verification: four months, near-zero cost, before any equipment purchase.',

    // 10 — Fontes
    'sec10.num': '10 —',
    'sec10.title': 'Sources and literature.',
    'sec10.primTitle': 'PRIMARY LITERATURE',
    'sec10.prim1': 'NASA TM-89852 (1987) — Liquid Droplet Radiator Systems Analysis',
    'sec10.prim2': 'NASA CR-185164 (1989) — Advanced Droplet Collector Testing',
    'sec10.prim3': 'NASA CR-175033 (1986) — Droplet Generation in High Vacuum',
    'sec10.prim4': 'Mattick & Hertzberg (Acta Astronautica, 1982) — Liquid Droplet Radiators for Heat Rejection in Space',
    'sec10.prim5': 'Journal of Spacecraft and Rockets (2024) — Re-evaluating Thermal Management for Megawatt Orbiting Compute',
    'sec10.mktTitle': 'MARKET ANALYSIS',
    'sec10.mkt1': 'Reports on orbital data demand and AI constellation requirements in LEO',
    'sec10.counterTitle': 'COUNTER-ARGUMENT & REBUTTAL',
    'sec10.counterBody': 'Independent analyses exist suggesting heat rejection is not the bottleneck of orbital computing. We disagree, and the reason is the power scale considered. Below hundreds of kilowatts solar panel area dominates; above megawatts with modular replication, radiator mass becomes the critical bottleneck.',

    // 11 — Contato e rodapé
    'sec11.num': '11 —',
    'sec11.title': 'Contact.',
    'sec11.emailLabel': 'TECHNICAL CORRESPONDENCE',
    'sec11.emailValue': 'contato@spes.space',
    'sec11.locationLabel': 'HQ AND COORDINATES',
    'sec11.locationValue': 'Campinas, SP — Brazil · 22°54\'S 47°03\'W',
    'sec11.countdownLabel': 'COUNTDOWN (NEXT MILESTONE: DEC 2026)',
    'sec11.disclaimer': 'Technical values on this website are engineering model parameters and development targets, not guaranteed performance or commercial products.',
    'sec11.copyright': '© 2026 SPES SPACE SYSTEMS ENGINEERING SOLUTIONS. ALL RIGHTS RESERVED.'
  }
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('spes_lang') as Language;
    if (saved === 'pt' || saved === 'en') {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('spes_lang', newLang);
  };

  const t = (key: string): string => {
    return dictionary[lang]?.[key] || dictionary['pt']?.[key] || key;
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
