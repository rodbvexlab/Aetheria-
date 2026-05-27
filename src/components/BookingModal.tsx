/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, FormEvent } from "react";
import { X, Calendar, Clock, User, Mail, Sparkles, Check, ChevronRight } from "lucide-react";
import { PROTOCOLS, AVAILABLE_TIME_SLOTS } from "../data";
import { Booking } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProtocolId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedProtocolId }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [protocol, setProtocol] = useState(selectedProtocolId || "revive");
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [successBooking, setSuccessBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (selectedProtocolId) {
      setProtocol(selectedProtocolId);
    }
  }, [selectedProtocolId]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !name || !email) {
      alert("Por favor preencha todos os campos obrigatórios.");
      return;
    }

    const newBooking: Booking = {
      id: "ath-" + Math.random().toString(36).substring(2, 9),
      protocolId: protocol,
      date,
      timeSlot: selectedSlot,
      clientName: name,
      clientEmail: email,
      notes,
      createdAt: new Date().toISOString()
    };

    // Store in localStorage
    const savedBookings = JSON.parse(localStorage.getItem("aetheria_bookings") || "[]");
    localStorage.setItem("aetheria_bookings", JSON.stringify([...savedBookings, newBooking]));

    setSuccessBooking(newBooking);
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedSlot("");
    setName("");
    setEmail("");
    setNotes("");
    setSuccessBooking(null);
    onClose();
  };

  const activeProtocol = PROTOCOLS.find(p => p.id === protocol) || PROTOCOLS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-background/40 backdrop-blur-md"
        onClick={handleReset}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-white/70 shadow-2xl backdrop-blur-2xl">
        {/* Subtle decorative mesh gradient inside modal */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-secondary-container/10 via-white/50 to-primary-container/5 pointer-events-none" />
                {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant/30 px-6 py-4 md:px-8">
          <div>
            <span className="font-label-caps text-[10px] text-primary uppercase tracking-widest block mb-1">
              {step === 1 ? "Ateliê de Agendamento" : "Confirmação de Reserva"}
            </span>
            <h3 className="font-hanken text-2xl font-semibold text-on-background tracking-tight">
              {step === 1 ? "Agende seu Momento de Bem-Estar" : "Seu Ritual está Confirmado"}
            </h3>
          </div>
          <button 
            onClick={handleReset}
            className="rounded-full p-2 text-on-surface-variant hover:bg-black/5 hover:text-on-surface transition-colors focus:outline-none"
            id="close-booking-modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto hide-scrollbar">
            {/* Step Indicators */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-12 rounded-full bg-primary-container"></span>
              <span className="text-xs font-medium text-on-surface-variant">Passo 1 de 2: Preferências de Cuidado</span>
            </div>

            {/* Protocol Selector */}
            <div className="space-y-3">
              <label className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider block">
                Escolha o Tratamento Personalizado
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROTOCOLS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setProtocol(p.id)}
                    className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-300 relative ${
                      protocol === p.id 
                        ? "bg-white border-primary shadow-sm" 
                        : "bg-white/30 border-outline-variant/55 hover:border-outline/50 hover:bg-white/50"
                    }`}
                  >
                    {protocol === p.id && (
                      <span className="absolute top-3 right-3 h-5 w-5 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                    <span className="font-label-caps text-[10px] text-tertiary mb-1 uppercase tracking-widest">{p.subtitle}</span>
                    <span className="font-hanken text-lg font-semibold text-on-background mb-1">{p.title}</span>
                    <span className="text-xs text-on-surface-variant line-clamp-2">{p.description}</span>
                    <span className="text-xs text-primary font-medium mt-3 font-mono">{p.duration}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Time Picking */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Datepicker */}
              <div className="space-y-3">
                <label className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-primary" /> Escolha o Dia
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 bg-white/50 border border-outline-variant/60 rounded-xl font-medium text-sm text-on-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                  required
                />
              </div>

              {/* Time slots */}
              <div className="space-y-3">
                <label className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" /> Horários Disponíveis
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {AVAILABLE_TIME_SLOTS.map((slot) => (
                    <button
                      key={slot.time}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`py-2 px-1 text-xs rounded-lg font-mono border transition-all duration-300 text-center ${
                        !slot.available 
                          ? "bg-black/5 border-transparent text-tertiary/40 cursor-not-allowed" 
                          : selectedSlot === slot.time 
                            ? "bg-on-background border-on-background text-white shadow-sm font-semibold" 
                            : "bg-white/30 border-outline-variant/50 text-on-surface-variant hover:bg-white hover:border-outline"
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="space-y-4 pt-2 border-t border-outline-variant/20">
              <label className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider block">
                Suas Informações de Contato
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-tertiary">
                    <User className="h-4 w-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 bg-white/50 border border-outline-variant/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-on-background"
                    required
                  />
                </div>

                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-tertiary">
                    <Mail className="h-4 w-4" />
                  </span>
                  <input
                    type="email"
                    placeholder="Endereço de E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 bg-white/50 border border-outline-variant/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-on-background"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Pedidos especiais, preferências aromáticas, tipos de pele ou detalhes que queira compartilhar (Opcional)"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-4 bg-white/50 border border-outline-variant/60 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 text-on-background"
                />
              </div>
            </div>

            {/* Footer with action */}
            <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
              <p className="text-xs text-on-surface-variant max-w-[280px]">
                Reservamos uma sala e uma equipe dedicada inteiramente ao seu ritual de autocuidado.
              </p>
              <button
                type="submit"
                className="group flex items-center gap-2 bg-primary-container text-on-primary-container font-label-caps text-xs tracking-widest px-6 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary-container/20 active:scale-95 cursor-pointer"
              >
                <span>CONFIRMAR AGENDAMENTO</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 md:p-8 space-y-6 text-center">
            {/* Success Celebration */}
            <div className="mx-auto h-16 w-16 bg-gradient-to-tr from-secondary-container to-white rounded-full flex items-center justify-center p-3 relative shadow-inner">
              <span className="absolute h-4 w-4 bg-primary rounded-full top-0 right-0 animate-ping"></span>
              <span className="absolute h-4 w-4 bg-primary rounded-full top-0 right-0"></span>
              <Sparkles className="h-8 w-8 text-primary" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h4 className="font-hanken text-2xl font-bold text-on-background">Momento Reservado</h4>
              <p className="text-sm text-on-surface-variant font-medium">
                Sua sessão no <span className="text-primary font-semibold">Aetheria Studio</span> foi agendada com carinho. Um e-mail com as informações de preparação e detalhes foi enviado para você.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="max-w-md mx-auto bg-white/50 border border-outline-variant/40 rounded-2xl p-6 text-left space-y-4">
              <div className="flex justify-between items-start border-b border-outline-variant/30 pb-3">
                <div>
                  <p className="text-[10px] font-label-caps text-tertiary">Código do Agendamento</p>
                  <p className="text-sm font-mono font-bold text-on-background uppercase">{successBooking?.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-label-caps text-tertiary">Status</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-secondary-container text-on-secondary-container">
                    ● CONFIRMADO
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-medium">
                <div>
                  <p className="text-[10px] font-label-caps text-tertiary">Tratamento Escolhido</p>
                  <p className="text-sm font-hanken font-bold text-on-background mt-0.5">{activeProtocol.title}</p>
                  <p className="text-[10px] text-on-surface-variant mt-0.5">{activeProtocol.duration}</p>
                </div>
                <div>
                  <p className="text-[10px] font-label-caps text-tertiary">Nome do Cliente</p>
                  <p className="text-sm text-on-background mt-0.5">{successBooking?.clientName}</p>
                  <p className="text-[10px] text-tertiary font-mono mt-0.5">{successBooking?.clientEmail}</p>
                </div>
                <div className="col-span-2 pt-2 border-t border-outline-variant/20 flex justify-between items-center text-xs">
                  <div>
                    <p className="text-[10px] font-label-caps text-tertiary">Data e Horário</p>
                    <p className="font-mono text-on-background font-semibold mt-0.5">{successBooking?.date} às {successBooking?.timeSlot}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-label-caps text-tertiary">Local</p>
                    <p className="text-on-background font-semibold mt-0.5">Aetheria Studio Boutique</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Tip box */}
            <div className="max-w-md mx-auto bg-primary-container/10 border border-primary-container/20 rounded-xl p-4 text-left">
              <p className="text-[10px] font-label-caps text-primary uppercase tracking-wider mb-1 font-bold">Instruções para o seu Ritual</p>
              <p className="text-xs text-on-primary-container italic">
                Recomendamos chegar com 10 minutos de antecedência para desfrutar de nosso chá de boas-vindas. Venha com roupas confortáveis para aproveitar ao máximo a sua experiência.
              </p>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={handleReset}
                className="bg-on-background hover:bg-neutral-800 text-surface font-label-caps text-xs tracking-widest px-8 py-3 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              >
                VOLTAR AO STUDIO
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
