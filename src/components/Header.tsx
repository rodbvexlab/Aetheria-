/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export default function Header({ onOpenBooking, activeSection }: HeaderProps) {
  const [saoPauloTime, setSaoPauloTime] = useState("09:00 BRT");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      };
      const formatted = now.toLocaleTimeString("pt-BR", options);
      setSaoPauloTime(`${formatted} BRT`);
    }

    updateClock();
    const interval = setInterval(updateClock, 10000); // update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    { label: "Filosofia", href: "#philosophy" },
    { label: "Tratamentos", href: "#services" },
    { label: "Experiências", href: "#residency" },
    { label: "Contato", href: "#insights" }
  ];

  return (
    <>
      <nav 
        id="top-nav-bar"
        className="fixed top-8 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 flex justify-between items-center px-6 md:px-8 py-3 rounded-full border border-white/20 backdrop-blur-[40px] bg-white/10 shadow-none hover:scale-[1.02] transition-all duration-300"
      >
        {/* Logo */}
        <a 
          href="#" 
          className="font-hanken text-xl md:text-2xl font-semibold tracking-tighter text-on-surface hover:opacity-80 transition-opacity flex-shrink-0"
        >
          AETHERIA
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-hanken text-xs font-bold uppercase tracking-widest transition-colors ${
                activeSection === item.href.substring(1) 
                  ? "text-primary-container" 
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Widgets */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <span className="hidden lg:block font-hanken text-xs font-bold uppercase tracking-widest text-[#56595d] mr-4 select-none">
            {saoPauloTime}
          </span>
          
          <button 
            onClick={onOpenBooking}
            className="bg-white/10 text-primary rounded-full px-5 py-2 font-hanken text-xs font-bold uppercase tracking-widest border border-primary/20 hover:bg-primary/10 transition-colors flex items-center gap-2 group cursor-pointer"
          >
            <div className="text-roll-container">
              <div className="text-roll-inner">
                <span>Agendar Momento</span>
                <span aria-hidden="true">Agendar Momento</span>
              </div>
            </div>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-white/10 hover:bg-white/20 p-2.5 rounded-full text-on-surface transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Glassmorphic Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-40 bg-white/90 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 shadow-xl flex flex-col md:hidden animate-fade-in space-y-4">
          <p className="font-hanken text-[10px] text-primary uppercase tracking-widest border-b border-outline-variant/20 pb-2">
            Menu de Navegação ({saoPauloTime})
          </p>
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-hanken text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-on-surface py-2 flex justify-between items-center"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-primary opacity-60" />
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-outline-variant/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center bg-primary-container text-on-primary-container py-3 rounded-full font-hanken text-xs font-bold uppercase tracking-widest shadow-md"
            >
              Agendar Momento
            </button>
          </div>
        </div>
      )}
    </>
  );
}
