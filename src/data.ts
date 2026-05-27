/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Protocol, CaseStudy } from "./types";

export const CLINIC_NAME = "AETHERIA";
export const CLINIC_FULL_NAME = "AETHERIA STUDIO";

export const CLINIC_PHILOSOPHY = {
  shortPromo: "Cuidado, beleza e bem-estar em uma experiência feita para desacelerar.",
  extendedText: "Aetheria é um studio boutique de beleza e bem-estar que combina tratamentos personalizados, ambiente acolhedor e uma jornada de cuidado pensada nos detalhes. Acreditamos que a verdadeira luminosidade floresce a partir de um momento de dedicação exclusiva para você.",
  detailedPhilosophy: `Nossa filosofia apoia-se no conceito de desaceleração e autocuidado integral. Compreendemos que o ritmo contemporâneo sobrecarrega o corpo e a pele, e criar pausas de renovação profunda é vital para resgatar a sua melhor versão.

  Ao invés de tratamentos invasivos ou apressados, priorizamos abordagens manuais delicadas, ativos botânicos e biotecnológicos de extrema pureza e vivências sensoriais personalizadas. No Aetheria Studio, as técnicas de massagem e cuidados de estética facial são integradas para trazer tranquilidade mental e resultados visíveis.
  
  Cada atendimento inicia-se com uma breve avaliação olfativa e de bem-estar corporal, permitindo-nos adaptar os óleos essenciais e o fluxo das manobras às suas reais necessidades do dia.`,
  corePillars: [
    {
      title: "Equilíbrio & Pausa",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquat proin magna suspendisse morbi. Proin sodales semper ultrices rhoncus vitae magna elementum.",
    },
    {
      title: "Ativos Selecionados",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat nisl in arcu elementum, nec iaculis tellus tempor. Sed eget lectus magna elementum.",
    },
    {
      title: "Paz & Autoestima",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque luctus urna, ac gravida sem hendrerit a. Proin vel congue mi.",
    }
  ]
};

export const PROTOCOLS: Protocol[] = [
  {
    id: "revive",
    title: "Revive",
    subtitle: "Tratamento 01",
    description: "Restauração corporal e facial integrando massagem relaxante, aromaterapia personalizada e pedras aquecidas para desfazer pontos de tensão.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac elit a massa hendrerit tincidunt. Curabitur vel lectus id est tempor sodales. Proin id massa tincidunt, elementum elit quis, vestibulum nunc. Mauris convallis feugiat turpis ut gravida. Aliquam nec arcu pellentesque, tristique sem vulputate, tempor magna.",
    clinicalRigor: "Método Relax Integrativo (Massagem corporal com aromaterapia de lavanda francesa e técnicas de pedras quecidas).",
    duration: "75 Minutos",
    benefits: [
      "Alívio profundo de tensões musculares na face e cervical",
      "Estímulo suave para drenagem linfática e eliminação de toxinas",
      "Acalma a mente, auxiliando a restabelecer ciclos de sono saudáveis",
      "Uso exclusivo de bálsamos botânicos e óleos aquecidos"
    ],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoScBRvlOaPaoq-kq5oJUmtPhnZhe2JgdLOlcnR1hq80Y5Ry7Zn4Ctw0cSeBQAG5y5lccrcPJV3ADVK-yn_1wtE28eclErpO6sam5Njv4Jtpp8qJ6z97SDvx732u9s5vpwvb__x0XG54J5LHw9G-JMqIF8JzUpg0kdcIZ2OGZ-KRIhs0I8r16GxmG0VY7P9i0jOEE9h7x5XcEnQTHYf0NKpAbQzxjvH4uD13LQ9nJOqSMb67OHDMzf_4L8Jn7bEROn45F9O3DPYrrz",
    accentColor: "#F26522"
  },
  {
    id: "glow",
    title: "Glow",
    subtitle: "Tratamento 02",
    description: "Ritual de hidratação e esfoliação regeneradora facial profunda com complexo de vitaminas e massagem lifting rejuvenescedora.",
    longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar metus ut nisl interdum eleifend. Proin vel augue id lorem elementum efficitur sit amet in erat. Nunc vel elementum purus. Aliquam luctus tempor nibh, tempor elementum magna viverra sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis libero id orci euismod rhoncus sed quis ex.",
    clinicalRigor: "Luminore Glow Therapy (Ativos antioxidantes nobres aliados a manobras revigorantes Firming Touch).",
    duration: "90 Minutos",
    benefits: [
      "Luminosidade natural imediata e redução do aspecto de cansaço",
      "Dmae e ácido hialurônico para hidratação de camadas superficiais",
      "Estímulo natural ao colágeno e melhora na textura cutânea",
      "Toque sedoso e viço facial prolongado"
    ],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB98a36y4GiLI13eILAMbzsiDA7z2D4_2WfHkKj5Yjf_9xCYNhKObWK87cItwoHmGrEZgSR4NLkxGUafH6qsvmPMrS5kUEsFwe6jW47aR5GruCwxFZINy1txLnBgWhu4V1kOdFtMIXIQwjI1vKgFq6IpfVVEXCYrIyyUWIZbYUQXsXkdEV9E8Vbt-nfX7W96X0P-05iZYOs7Hll1R1VUTcAiTI4DoqwJzNuVuhD0QioEF4pfQ2Fuk4MjRD6Ak16SmLsFOijj1Mg1Y-F",
    accentColor: "#4C635B"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-01",
    title: "Revitalização e Viço Facial (Histórias de Transformação — Tratamento Glow)",
    protocolId: "glow",
    duration: "4 Semanas",
    recoveryMetric: "+42% de Hidratação e Maciez",
    radianceScore: "Luminosidade Restaurada",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel ligula sit amet nunc molestie condimentum. Sed pretium congue nunc, id accumsan diam vestibulum volutpat. Cras gravida scelerisque leo, sed placerat massa finibus sed.",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam sit amet risus hendrerit malesuada. Suspendisse potenti. Nam efficitur, nulla sed posuere egestas, erat risus hendrerit erat, ut dignissim ante tortor et leo.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec arcu pellentesque, tristique sem vulputate, tempor magna. Cras quis tincidunt elit, sit amet accumsan est.",
    results: [
      "Melhora expressiva no brilho natural da pele",
      "Restauração das barreiras naturais de proteção cutânea",
      "Textura extremamente aveludada e hidratação profunda",
      "Sensação completa de descanso mental após cada ritual"
    ],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB98a36y4GiLI13eILAMbzsiDA7z2D4_2WfHkKj5Yjf_9xCYNhKObWK87cItwoHmGrEZgSR4NLkxGUafH6qsvmPMrS5kUEsFwe6jW47aR5GruCwxFZINy1txLnBgWhu4V1kOdFtMIXIQwjI1vKgFq6IpfVVEXCYrIyyUWIZbYUQXsXkdEV9E8Vbt-nfX7W96X0P-05iZYOs7Hll1R1VUTcAiTI4DoqwJzNuVuhD0QioEF4pfQ2Fuk4MjRD6Ak16SmLsFOijj1Mg1Y-F"
  },
  {
    id: "case-02",
    title: "Alívio Muscular Escapular e Dispersão de Estresse (Histórias de Transformação — Tratamento Revive)",
    protocolId: "revive",
    duration: "Após a Primeira Sessão",
    recoveryMetric: "Alívio físico imediato contra fadiga acumulada",
    radianceScore: "Sensação Corporal de Extrema Leveza",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lectus mi. Vivamus cursus pretium facilisis. Cras rhoncus dictum nisl at pulvinar. Proin accumsan elit urna, in condimentum quam consequat id.",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie, purus ut auctor porta, diam nisl elementum nunc, sed convallis est neque quis dolor. In condimentum porta finibus.",
    solution: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida leo velit, et finibus felis iaculis hendrerit. Phasellus aliquet felis diam, id volutpat eros feugiat vel.",
    results: [
      "Redução instantânea de nós de tensão nos ombros e pescoço",
      "Relaxamento do sistema muscular corporal geral",
      "Melhora na qualidade das noites de sono seguintes",
      "Restauração de fôlego corporal com aromaterapia integrada"
    ],
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoScBRvlOaPaoq-kq5oJUmtPhnZhe2JgdLOlcnR1hq80Y5Ry7Zn4Ctw0cSeBQAG5y5lccrcPJV3ADVK-yn_1wtE28eclErpO6sam5Njv4Jtpp8qJ6z97SDvx732u9s5vpwvb__x0XG54J5LHw9G-JMqIF8JzUpg0kdcIZ2OGZ-KRIhs0I8r16GxmG0VY7P9i0jOEE9h7x5XcEnQTHYf0NKpAbQzxjvH4uD13LQ9nJOqSMb67OHDMzf_4L8Jn7bEROn45F9O3DPYrrz"
  }
];

export const AVAILABLE_TIME_SLOTS = [
  { time: "09:30", available: true },
  { time: "11:00", available: true },
  { time: "14:00", available: false },
  { time: "15:30", available: true },
  { time: "17:00", available: true },
  { time: "18:30", available: false }
];
