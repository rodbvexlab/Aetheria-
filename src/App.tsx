/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, MouseEvent } from "react";
import { Sparkles, Calendar, Clock, X, Trash2 } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Protocols from "./components/Protocols";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import CaseStudiesModal from "./components/CaseStudiesModal";
import { PROTOCOLS } from "./data";
import { Booking } from "./types";

export default function App() {
  // Booking modal state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedProtocol, setPreselectedProtocol] = useState<string | undefined>(undefined);

  // Case study slide-out state
  const [isCaseOpen, setIsCaseOpen] = useState(false);
  const [selectedCaseId, setSelectedCaseId] = useState("case-01");

  // Navigation scroll state
  const [activeSection, setActiveSection] = useState("");

  // Local storage booking tracker for user feedback
  const [activeBookings, setActiveBookings] = useState<Booking[]>([]);
  const [showActiveBookingsBanner, setShowActiveBookingsBanner] = useState(false);

  // Load and sync local storage bookings
  const syncBookings = () => {
    try {
      const saved = localStorage.getItem("aetheria_bookings");
      if (saved) {
        const parsed: Booking[] = JSON.parse(saved);
        setActiveBookings(parsed);
      }
    } catch (err) {
      console.error("Local storage sync error", err);
    }
  };

  useEffect(() => {
    syncBookings();
    
    // Check for scroll sections
    const handleScroll = () => {
      const sections = ["hero", "philosophy", "services", "residency", "insights"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Element is active if top is within upper third of screen
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Whenever booking dialog is closed, sync bookings list in case they scheduled a session
  useEffect(() => {
    if (!isBookingOpen) {
      syncBookings();
    }
  }, [isBookingOpen]);

  const handleOpenBooking = (protocolId?: string) => {
    setPreselectedProtocol(protocolId);
    setIsBookingOpen(true);
  };

  const handleOpenCaseStudy = (caseId: string) => {
    setSelectedCaseId(caseId);
    setIsCaseOpen(true);
  };

  const handleDeleteBooking = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    try {
      const updated = activeBookings.filter(b => b.id !== id);
      localStorage.setItem("aetheria_bookings", JSON.stringify(updated));
      setActiveBookings(updated);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-on-background font-sans antialiased selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden scroll-smooth">
      {/* Aesthetic High-End Analog Noise Overlays */}
      <div className="noise-overlay" />

      {/* Primary Header Navbar */}
      <Header 
        onOpenBooking={() => handleOpenBooking()} 
        activeSection={activeSection}
      />

      {/* Main Sections Assembly */}
      <main>
        {/* Hero Section */}
        <Hero onBeginJourney={() => handleOpenBooking("revive")} />

        {/* About Section */}
        <About />

        {/* Specialized Protocols Section */}
        <Protocols 
          onScheduleProtocol={(id) => handleOpenBooking(id)}
          onOpenCaseStudy={handleOpenCaseStudy}
        />
      </main>

      {/* Clinical Footer */}
      <Footer onContactClick={() => handleOpenBooking()} />

      {/* Interactive Booking Desk Modal overlays */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedProtocolId={preselectedProtocol}
      />

      {/* Portfolio Case study details slider panel */}
      <CaseStudiesModal 
        isOpen={isCaseOpen}
        onClose={() => setIsCaseOpen(false)}
        selectedCaseId={selectedCaseId}
      />

      {/* Persisted Residency alert summary panel (Floating badge at bottom right) */}
      {activeBookings.length > 0 && (
        <div className="fixed bottom-6 left-6 z-40 select-none">
          {!showActiveBookingsBanner ? (
            <button
              onClick={() => setShowActiveBookingsBanner(true)}
              className="bg-[#141b2b] text-white rounded-full px-5 py-3 border border-white/20 shadow-xl flex items-center gap-2 text-xs font-hanken font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all cursor-pointer hover:bg-neutral-800"
            >
              <Calendar className="h-4 w-4 text-primary-container animate-bounce" />
              <span>SEUS AGENDAMENTOS ({activeBookings.length})</span>
            </button>
          ) : (
            <div className="bg-white border border-outline-variant/40 rounded-2xl p-4 shadow-2xl max-w-sm space-y-3 animate-slide-in">
              <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                <span className="font-hanken text-[10px] font-bold text-primary uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                  <Sparkles className="h-3.5 w-3.5" /> Horários Reservados
                </span>
                <button 
                  onClick={() => setShowActiveBookingsBanner(false)}
                  className="rounded-full p-1 text-on-surface-variant hover:bg-black/5 hover:text-on-surface transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>

              <div className="space-y-2 max-h-40 overflow-y-auto hide-scrollbar">
                {activeBookings.map((b) => {
                  const protocolName = PROTOCOLS.find(p => p.id === b.protocolId)?.title || "Tratamento Personalizado";
                  return (
                    <div key={b.id} className="text-xs bg-surface-container-low p-2 rounded-lg flex items-center justify-between border border-outline-variant/10">
                      <div>
                        <p className="font-hanken font-bold text-on-background">{protocolName}</p>
                        <p className="text-[10px] text-on-surface-variant font-mono mt-0.5">{b.date} às {b.timeSlot}</p>
                        <p className="text-[9px] text-tertiary font-mono">{b.id}</p>
                      </div>
                      <button
                        onClick={(e) => handleDeleteBooking(b.id, e)}
                        className="p-1 rounded bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                        title="Cancelar Agendamento"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
