/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Sparkles, Trophy, CheckCircle, ArrowRight, Eye } from "lucide-react";
import { PROTOCOLS, CASE_STUDIES } from "../data";

interface ProtocolsProps {
  onScheduleProtocol: (protocolId: string) => void;
  onOpenCaseStudy: (caseId: string) => void;
}

export default function Protocols({ onScheduleProtocol, onOpenCaseStudy }: ProtocolsProps) {
  const [activeTab, setActiveTab] = useState<"protocols" | "portfolio">("protocols");

  return (
    <section 
      id="services"
      className="bg-surface-container-low py-20 md:py-32 px-6 md:px-20 rounded-t-[40px] relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-8">
          <div className="w-10 h-10 rounded-full bg-on-surface text-surface flex items-center justify-center font-hanken text-lg font-bold">
            2
          </div>
          <h2 className="font-hanken text-xs font-bold text-on-surface uppercase tracking-widest">
            Tratamentos Personalizados
          </h2>
        </div>

        {/* Catchphrase and Filter Selector Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-hanken text-xs font-bold text-primary uppercase tracking-widest block mb-2 select-none">
              Cardápio de Rituais
            </span>
            <h3 className="font-hanken text-3xl sm:text-4xl md:text-5xl text-on-background font-medium tracking-tight">
              {activeTab === "protocols" ? "Tratamentos Personalizados" : "Experiências de Cuidado"}
            </h3>
          </div>

          {/* Interactive tab picker for Portfolio toggle */}
          <div className="flex bg-white/50 border border-outline-variant/40 p-1 rounded-full w-max select-none">
            <button
              onClick={() => setActiveTab("protocols")}
              className={`px-5 py-2 rounded-full font-hanken text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeTab === "protocols"
                  ? "bg-on-background text-white shadow-sm font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Tratamentos
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`px-5 py-2 rounded-full font-hanken text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeTab === "portfolio"
                  ? "bg-on-background text-white shadow-sm font-semibold"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Experiências de Cuidado
            </button>
          </div>
        </div>

        {/* Dynamic content rendering based on selected Tab */}
        {activeTab === "protocols" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Loop through each protocol */}
            {PROTOCOLS.map((p) => (
              <div 
                key={p.id}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-square flex flex-col justify-end p-6 md:p-8 isolate cursor-pointer bg-surface-dim shadow-sm border border-white/10"
              >
                {/* Background image fade transitions */}
                <div className="absolute inset-0 z-0 bg-surface-dim">
                  <img 
                    src={p.imageUrl} 
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                  />
                  {/* Outer shadow gradient to allow text contrasts */}
                  <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/15 to-transparent transition-opacity duration-300" />
                </div>

                {/* Info Overlay Panel */}
                <div className="relative z-10 w-full flex justify-between items-end gap-4">
                  <div className="space-y-2 select-none">
                    <p className="font-hanken text-[10px] text-surface/80 uppercase tracking-widest font-bold">{p.subtitle}</p>
                    <h4 className="font-hanken text-2xl md:text-3xl font-semibold text-surface tracking-tight">{p.title}</h4>
                    <p className="text-white/70 text-xs line-clamp-2 max-w-sm font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {/* Learn more trigger opens detail modal sheet */}
                    <button 
                      onClick={() => {
                        const mappingId = p.id === "glow" ? "case-01" : "case-02";
                        onOpenCaseStudy(mappingId);
                      }}
                      className="bg-white/20 backdrop-blur-md border border-white/30 text-surface rounded-full px-5 py-2.5 font-hanken text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:text-on-background flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Eye className="h-3 w-3" />
                      <span>Ver Detalhes</span>
                    </button>

                    {/* Book trigger starts scheduler directly with preselected protocol */}
                    <button 
                      onClick={() => onScheduleProtocol(p.id)}
                      className="bg-primary hover:bg-primary-container text-white rounded-full px-5 py-2.5 font-hanken text-[10px] font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Reservar</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Portfolio Case log screen */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" id="residency">
            {CASE_STUDIES.map((c) => {
              const protocolMap = PROTOCOLS.find(p => p.id === c.protocolId) || PROTOCOLS[0];
              return (
                <div 
                  key={c.id} 
                  className="bg-white/60 border border-outline-variant/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow duration-300 backdrop-blur-md"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start border-b border-outline-variant/20 pb-4">
                      <div>
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-outline-variant/30 text-on-surface-variant font-mono text-[9px] font-bold uppercase tracking-wider">
                          Tratamento: {protocolMap.title}
                        </span>
                        <h4 className="font-hanken text-lg font-bold text-on-background mt-2">
                          História de Transformação
                        </h4>
                      </div>
                      <span className="font-mono text-xs font-bold text-primary font-semibold text-right block">
                        {c.radianceScore}
                      </span>
                    </div>

                    <p className="text-xs text-on-surface-variant leading-relaxed italic">
                      &ldquo;{c.summary}&rdquo;
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="bg-white/80 border border-outline-variant/20 rounded-xl p-3 space-y-1">
                        <span className="font-label-caps text-[8px] text-tertiary">RESULTADO OBSERVADO</span>
                        <p className="text-xs text-[#4C635B] font-bold font-mono">{c.recoveryMetric}</p>
                      </div>
                      <div className="bg-white/80 border border-outline-variant/20 rounded-xl p-3 space-y-1">
                        <span className="font-label-caps text-[8px] text-tertiary">DURAÇÃO DO CICLO</span>
                        <p className="text-xs text-on-background font-bold">{c.duration}</p>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Card actions */}
                  <div className="flex items-center justify-between border-t border-outline-variant/20 pt-4">
                    <p className="text-[10px] text-on-surface-variant">Clique para ver os detalhes da transformação.</p>
                    <button
                      onClick={() => onOpenCaseStudy(c.id)}
                      className="group flex items-center gap-1 bg-on-background text-surface hover:bg-neutral-800 font-hanken text-[10px] font-bold uppercase tracking-widest px-4 py-2.5 rounded-full cursor-pointer transition-transform"
                    >
                      <span>Ver Detalhes</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
