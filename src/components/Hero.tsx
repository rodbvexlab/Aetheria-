/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from "lucide-react";

interface HeroProps {
  onBeginJourney: () => void;
}

export default function Hero({ onBeginJourney }: HeroProps) {
  return (
    <section 
      id="hero"
      className="relative min-h-screen md:h-[960px] w-full overflow-hidden bg-[#EFEFEF] flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-20 pt-36"
    >
      {/* Background Organic Shaders mimicking moving clouds & liquid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary-container/40 mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-surface-variant/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-[-20%] left-[20%] w-[70%] h-[70%] rounded-full bg-outline-variant/30 mix-blend-multiply filter blur-3xl opacity-70 animate-blob [animation-delay:4s]" />
        
        {/* Soft glass overlay to flatten shaders for visual comfort */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[60px]" />
      </div>

      {/* Hero Content (aligned bottom left) */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Small subtitle badge */}
        <p className="font-hanken text-xs font-bold text-[#56595d] uppercase tracking-widest mb-6 select-none animate-fade-in">
          Aetheria Studio
        </p>

        {/* Master Heading statement */}
        <h1 
          className="font-hanken text-4xl sm:text-6xl md:text-8xl text-on-background max-w-5xl leading-[1.05] tracking-tighter mb-6 select-text"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
        >
          Cuidado, beleza e bem-estar <br className="hidden md:block" />
          em uma experiência feita <br className="hidden md:block" />
          para desacelerar.
        </h1>

        {/* Suggested Subtitle */}
        <p className="font-manrope text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mb-12 animate-fade-in leading-relaxed">
          Aetheria é um studio boutique de beleza e bem-estar que combina tratamentos personalizados, ambiente acolhedor e uma jornada de cuidado pensada nos detalhes.
        </p>

        {/* Action button bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button 
            onClick={onBeginJourney}
            className="group bg-primary-container text-on-primary-container pl-8 pr-4 py-3.5 md:py-4 rounded-full font-hanken text-xs font-bold uppercase tracking-widest flex items-center gap-4 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary-container/20 cursor-pointer"
          >
            <div className="text-roll-container">
              <div className="text-roll-inner">
                <span>AGENDAR MEU MOMENTO</span>
                <span aria-hidden="true">AGENDAR MEU MOMENTO</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:-rotate-45">
              <ArrowRight className="h-4.5 w-4.5 text-on-primary-container" />
            </div>
          </button>

          {/* Secondary CTA */}
          <a 
            href="#services"
            className="group border border-[#56595d]/30 text-on-background px-8 py-3.5 md:py-4 rounded-full font-hanken text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-all text-center inline-block"
          >
            Conhecer tratamentos
          </a>

          {/* Wellness Provider certified tag badge */}
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur-md border border-white/40 px-6 py-3.5 rounded-full shadow-sm sm:ml-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-hanken text-xs font-bold text-on-surface-variant uppercase tracking-wider">
              Studio Boutique Autorizado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
