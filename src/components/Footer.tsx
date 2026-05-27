/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CLINIC_NAME, CLINIC_FULL_NAME } from "../data";

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer 
      id="insights"
      className="w-full py-16 md:py-20 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8 bg-on-tertiary-fixed text-tertiary-fixed select-none"
    >
      {/* Footer Branding logo */}
      <div className="font-hanken text-2xl font-semibold tracking-tighter text-surface hover:opacity-80 transition-opacity">
        {CLINIC_NAME}
      </div>

      {/* Footer Secondary Navigation Anchor Links */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <a 
          href="#privacy" 
          onClick={(e) => {
            e.preventDefault();
            alert("Política de Privacidade Aetheria: Todos os seus dados, preferências de atendimento e históricos de agendamento são confidenciais e tratados com absoluto cuidado e sigilo.");
          }}
          className="text-tertiary-fixed-dim hover:text-white hover:opacity-100 transition-all font-hanken text-xs font-bold uppercase tracking-widest"
        >
          Política de Privacidade
        </a>
        <a 
          href="#terms" 
          onClick={(e) => {
            e.preventDefault();
            alert("Termos de Uso Aetheria: Ao confirmar um agendamento, garantimos um especialista e uma sala preparados exclusivamente para o seu bem-estar.");
          }}
          className="text-tertiary-fixed-dim hover:text-white hover:opacity-100 transition-all font-hanken text-xs font-bold uppercase tracking-widest"
        >
          Termos de Uso
        </a>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            onContactClick();
          }}
          className="text-tertiary-fixed-dim hover:text-white hover:opacity-100 transition-all font-hanken text-xs font-bold uppercase tracking-widest cursor-pointer"
        >
          Fale Conosco
        </a>
      </div>

      {/* Footer Copyright block */}
      <div className="font-manrope text-xs text-tertiary-fixed-dim/70 text-center md:text-right leading-relaxed max-w-[320px]">
        &copy; {new Date().getFullYear()} {CLINIC_FULL_NAME}. FEITO PARA SEU BEM-ESTAR.
      </div>
    </footer>
  );
}
