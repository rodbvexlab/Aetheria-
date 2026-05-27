/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ArrowUpRight, Sparkles, Sliders, Brain, Heart, Landmark } from "lucide-react";
import { CLINIC_PHILOSOPHY } from "../data";

export default function About() {
  const [showPillars, setShowPillars] = useState(false);

  return (
    <section 
      id="philosophy"
      className="bg-surface py-20 md:py-32 px-6 md:px-20 border-b border-outline-variant/10"
    >
      <div className="max-w-6xl mx-auto w-full space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-4 border-b border-outline-variant/30 pb-8">
          <div className="w-10 h-10 rounded-full bg-on-surface text-surface flex items-center justify-center font-hanken text-lg font-bold">
            1
          </div>
          <h2 className="font-hanken text-xs font-bold text-on-surface uppercase tracking-widest">
            Conheça o Studio
          </h2>
        </div>

        {/* Catchphrase statement */}
        <div className="max-w-4xl">
          <h3 
            className="font-hanken text-3xl sm:text-4xl md:text-5xl text-on-background leading-[1.15] tracking-tight font-medium"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            {CLINIC_PHILOSOPHY.shortPromo}
          </h3>
        </div>

        {/* Media Layout & Core Text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left image of hot stones (Small) */}
          <div className="md:col-span-3">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] relative group shadow-sm bg-neutral-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1IRcadrdSYFGtUtM5-DLjWdGmUFNY8ewD_t_ehV-hpwDGQRg0wLNLhm493RW0huEweSMN5aCM_GpXG8rt9BZ8bXeh9O2U49uW1hwvDE215ASwLdrbuu7gKMmZbfEeKRw-5gCV9KX2IV7mNUp2DRb6i3zhiDEJokBQGRVwD82F2aQG_TE15D8Gt8jrIGp5rti4EZfr2dTwzXyUaXoWGmlGDBRRvRSKGeKeqiBx2rsvcZAuoxDk6vLbTLc04mX8LEf4Z1yVM5JLBtU1"
                alt="Aetheria serene hot stones setup and folded towel"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Center Column with descriptions & toggle */}
          <div className="md:col-span-5 md:col-start-5 flex flex-col justify-center space-y-8">
            <p className="font-manrope text-sm md:text-base leading-relaxed text-on-surface-variant">
              {CLINIC_PHILOSOPHY.extendedText}
            </p>

            <div>
              <button 
                onClick={() => setShowPillars(!showPillars)}
                className="group inline-flex items-center gap-4 text-on-background font-hanken text-xs font-bold uppercase tracking-widest border border-outline-variant rounded-full px-6 py-3 hover:bg-on-background hover:text-surface transition-all duration-300 cursor-pointer"
              >
                <div className="text-roll-container">
                  <div className="text-roll-inner">
                    <span>{showPillars ? "FECHAR PILARES DE AUTOCUIDADO" : "NOSSA FILOSOFIA DE BEM-ESTAR"}</span>
                    <span aria-hidden="true">{showPillars ? "FECHAR PILARES DE AUTOCUIDADO" : "NOSSA FILOSOFIA DE BEM-ESTAR"}</span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right image of clinical lobby (Large) */}
          <div className="md:col-span-4 md:col-start-9">
            <div className="rounded-2xl overflow-hidden aspect-square md:aspect-[4/5] relative group shadow-sm bg-neutral-200">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJBdEaDnpcdzuUiAKnl2xmV2oNlllmurYXG1SI_k7ArlAAvEm3iNtqP6R_5pXgqjDUbj6C1O0PiiUm8w1mVd9lYbugNc-MX0rEqAF5cn6bOh6yxCFhIMeNU3OhkOlUDimj4bVgNkFWK1EV83ZXNfNmFZp7SpTNfFyUKRj-Pboa8daSP6SSeI3duao_egzixSxFlhEOc9YPb_66mkOtkV-G61s5YfGlm3FKB8x08ksutBLC57e-R7pN6ZaZ_6MvnF-daD4AgilVZiRo"
                alt="Tranquil, minimalist interior of high-end wellness clinic lobby"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>

        {/* Expandable Philosophy Pillars details */}
        {showPillars && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-outline-variant/20 animate-slide-in">
            {CLINIC_PHILOSOPHY.corePillars.map((pillar, index) => {
              const Icon = index === 0 ? Sliders : index === 1 ? Sparkles : Brain;
              return (
                <div key={pillar.title} className="bg-white/40 border border-outline-variant/30 rounded-2xl p-6 space-y-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container/10 text-primary flex items-center justify-center p-2.5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-hanken text-lg font-bold text-on-background">{pillar.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
