/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Sparkles, TrendingUp, Droplet, Clock, Heart, Award, ShieldAlert } from "lucide-react";
import { CASE_STUDIES, PROTOCOLS } from "../data";

interface CaseStudiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCaseId: string;
}

export default function CaseStudiesModal({ isOpen, onClose, selectedCaseId }: CaseStudiesModalProps) {
  if (!isOpen) return null;

  const caseStudy = CASE_STUDIES.find(c => c.id === selectedCaseId) || CASE_STUDIES[0];
  const protocol = PROTOCOLS.find(p => p.id === caseStudy.protocolId) || PROTOCOLS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-background/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Slide-out Drawer Panel */}
      <div className="relative w-full max-w-2xl h-full bg-white border-l border-outline-variant/30 flex flex-col shadow-2xl z-10 animate-slide-in">
        {/* Subtle background glass patterns */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-container-low via-white to-surface pointer-events-none" />

        {/* Sticky top bar header */}
        <div className="flex items-center justify-between border-b border-outline-variant/30 px-6 py-6 md:px-8">
          <div>
            <span className="font-label-caps text-[10px] text-primary uppercase tracking-widest block mb-1">
              Portfólio de Transformações
            </span>
            <h3 className="font-hanken text-xl md:text-2xl font-semibold text-on-background tracking-tight">
              Acompanhamento de Resultados
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-2.5 text-on-surface-variant hover:bg-black/5 hover:text-on-surface transition-colors focus:outline-none cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Body Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 hide-scrollbar">
          {/* Main Cover Header */}
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-sm isolate">
            <img 
              src={caseStudy.imageUrl} 
              alt={caseStudy.title}
              className="w-full h-full object-cover opacity-90 mix-blend-luminosity brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-white/20 backdrop-blur-md border border-white/20 uppercase tracking-widest">
                RITUAL {protocol.title} COMPILADO
              </span>
              <h4 className="font-hanken text-lg md:text-2xl font-bold leading-tight">{caseStudy.title}</h4>
            </div>
          </div>

          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-white/50 border border-outline-variant/40 p-4 rounded-xl space-y-1">
              <span className="font-label-caps text-[9px] text-tertiary uppercase flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-primary" /> PERÍODO
              </span>
              <p className="font-semibold text-on-background text-sm">{caseStudy.duration}</p>
            </div>

            <div className="bg-white/50 border border-outline-variant/40 p-4 rounded-xl space-y-1">
              <span className="font-label-caps text-[9px] text-tertiary uppercase flex items-center gap-1">
                <TrendingUp className="h-3.5 w-3.5 text-[#4C635B]" /> MELHORA OBSERVADA
              </span>
              <p className="font-semibold text-on-background text-sm">{caseStudy.recoveryMetric}</p>
            </div>

            <div className="col-span-2 md:col-span-1 bg-white/50 border border-outline-variant/40 p-4 rounded-xl space-y-1">
              <span className="font-label-caps text-[9px] text-tertiary uppercase flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-primary" /> AVALIAÇÃO FINAL
              </span>
              <p className="font-semibold text-on-background text-sm">{caseStudy.radianceScore}</p>
            </div>
          </div>

          {/* Portfolio Scientific sections */}
          <div className="space-y-6">
            {/* Overview / Summary */}
            <div className="space-y-2">
              <h5 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <Award className="h-4 w-4 text-primary" /> Resumo da Experiência
              </h5>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                {caseStudy.summary}
              </p>
            </div>

            {/* Assessment challenge */}
            <div className="space-y-2 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
              <h5 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <ShieldAlert className="h-4 w-4 text-primary" /> Desafio de Cuidado
              </h5>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Bio-medical solution */}
            <div className="space-y-2">
              <h5 className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <Droplet className="h-4 w-4 text-secondary" /> Cuidado Personalizado Proposto
              </h5>
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
                {caseStudy.solution}
              </p>
              <div className="bg-background border border-outline-variant/20 p-4 rounded-xl mt-3 space-y-1">
                <p className="text-[10px] font-mono text-primary font-bold tracking-wider uppercase">Método e Ativos Selecionados</p>
                <p className="text-xs text-on-surface font-medium">{protocol.clinicalRigor}</p>
              </div>
            </div>

            {/* Trial results bullet points */}
            <div className="space-y-3 pt-4 border-t border-outline-variant/20">
              <h5 className="font-label-caps text-sm text-on-background uppercase tracking-widest font-bold">
                Resultados Percebidos
              </h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-xs text-on-surface-variant">
                    <span className="mt-0.5 h-4 w-4 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Drawer footer containing actions */}
        <div className="border-t border-outline-variant/30 p-6 bg-white flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="text-xs text-on-surface-variant max-w-[280px]">
            Este relato de transformação respeita a privacidade de nossos clientes. Nomes e identidades foram protegidos.
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto bg-on-background text-surface hover:bg-neutral-800 px-8 py-3.5 rounded-full font-label-caps text-xs tracking-widest transition-transform hover:scale-105"
          >
            FECHAR DETALHES
          </button>
        </div>
      </div>
    </div>
  );
}
