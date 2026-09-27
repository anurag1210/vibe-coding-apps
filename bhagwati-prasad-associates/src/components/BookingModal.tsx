"use client";

import { useState } from "react";
import { X, Calendar, Clock, User, CheckCircle2, Shield, Scale, ChevronRight, Phone, MessageSquare } from "lucide-react";
import { practiceAreas, firmInfo } from "@/data/firmData";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAttorney?: string;
  initialPracticeArea?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialAttorney,
  initialPracticeArea,
}: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedAttorney, setSelectedAttorney] = useState<string>(initialAttorney || "Advocate Sumeet Gupta");
  const [selectedArea, setSelectedArea] = useState<string>(initialPracticeArea || practiceAreas[0].title);
  const consultType = "chamber";
  const [date, setDate] = useState<string>("2026-09-25");
  const [time, setTime] = useState<string>("11:00 AM");
  
  const [clientInfo, setClientInfo] = useState({
    name: "",
    phone: "",
    email: "",
    brief: "",
  });

  const [bookingRef, setBookingRef] = useState<string>("");

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep((step + 1) as any);
    } else if (step === 3) {
      if (!clientInfo.name || !clientInfo.phone) return;
      const randomCode = "BLA-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomCode);
      setStep(4);
    }
  };

  const handleReset = () => {
    setStep(1);
    setClientInfo({ name: "", phone: "", email: "", brief: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100 space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/30 text-[11px] font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              <span>Chamber Consultation (By Appointment)</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">Book Legal Consultation</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instant Contact Ribbon */}
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber-900 dark:text-gold-300 font-medium">
            <Phone className="w-4 h-4 text-amber-600 dark:text-gold-400 shrink-0" />
            <span>Direct Desk with <strong>Advocate Sumeet Gupta</strong>:</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:+917002069417"
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 dark:bg-gold-500 dark:hover:bg-gold-400 text-slate-950 font-bold font-mono text-xs flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 70020 69417</span>
            </a>
            <a
              href="https://wa.me/917002069417?text=Hello%20Advocate%20Sumeet%20Gupta,%20I%20would%20like%20to%20schedule%20a%20legal%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Progress Stepper */}
        {step < 4 && (
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 px-2 pb-2 border-b border-slate-200 dark:border-slate-800/80">
            <span className={step >= 1 ? "text-amber-800 dark:text-gold-400 font-bold" : ""}>1. Counsel Selection</span>
            <span className={step >= 2 ? "text-amber-800 dark:text-gold-400 font-bold" : ""}>2. Practice Area</span>
            <span className={step >= 3 ? "text-amber-800 dark:text-gold-400 font-bold" : ""}>3. Date & Case Brief</span>
          </div>
        )}

        {/* Step 1: Consulting Advocate */}
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">Your Consulting Advocate</h4>
            
            {/* Fixed Sumeet Gupta card */}
            <div className="p-4 rounded-2xl border bg-amber-50/70 border-amber-500 ring-2 ring-amber-500/30 dark:bg-slate-950 dark:border-gold-500 dark:ring-gold-500/40 shadow-sm dark:shadow-lg">
              <div className="flex items-center gap-4">
                <img src="/sumeet-gupta.png" alt="Advocate Sumeet Gupta" className="w-16 h-16 rounded-xl object-cover border-2 border-amber-400 dark:border-gold-400 shadow-md" />
                <div>
                  <h5 className="font-serif font-bold text-slate-900 dark:text-white text-base">Advocate Sumeet Gupta</h5>
                  <p className="text-xs text-amber-800 dark:text-gold-400 font-semibold">Sole Proprietor & Practicing Advocate</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">📞 +91 70020 69417</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">✉️ advocatesumeetg@gmail.com</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                Guwahati High Court | DRT | AFT | Family Court | CJM & District Sessions Court | MACT
              </p>
            </div>

            {/* Consultation Mode: In-Person Only */}
            <div className="pt-2">
              <div className="p-3 rounded-xl border bg-amber-50 border-amber-300 dark:bg-slate-950 dark:border-gold-500/40 text-xs font-bold text-amber-900 dark:text-gold-300 flex items-center gap-2">
                🏛️ In-Person Chamber Consultation — Guwahati
              </div>
            </div>
          </div>
        )}


        {/* Step 2: Practice Area Selection */}
        {step === 2 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">Select Legal Practice Matter</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-60 overflow-y-auto pr-1">
              {practiceAreas.map((area) => (
                <div
                  key={area.id}
                  onClick={() => setSelectedArea(area.title)}
                  className={`p-3 rounded-xl border cursor-pointer text-xs transition-all ${
                    selectedArea === area.title
                      ? "bg-amber-50/80 border-amber-500 font-bold dark:bg-slate-950 dark:border-gold-500 text-amber-900 dark:text-gold-300 ring-1 ring-amber-500/30"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300 dark:bg-slate-950/60 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {area.title}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Date & Details */}
        {step === 3 && (
          <div className="space-y-4 animate-in fade-in">
            <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">Appointment Date & Case Information</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Preferred Time Slot</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 shadow-sm"
                >
                  <option>10:30 AM - Morning Slot</option>
                  <option>11:30 AM - High Court Morning Slot</option>
                  <option>02:30 PM - Afternoon Chamber Slot</option>
                  <option>04:30 PM - Evening Advisory Slot</option>
                  <option>06:00 PM - Post-Court Advisory</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra"
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={clientInfo.phone}
                  onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 shadow-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Case Brief / Relevant Details</label>
              <textarea
                rows={3}
                placeholder="Mention court notice dates, property or service dispute details, or bail requirements..."
                value={clientInfo.brief}
                onChange={(e) => setClientInfo({ ...clientInfo, brief: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 resize-none shadow-sm"
              />
            </div>
          </div>
        )}

        {/* Step 4: Confirmation Screen */}
        {step === 4 && (
          <div className="space-y-6 text-center py-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-gold-500/20 text-emerald-700 dark:text-gold-400 mx-auto flex items-center justify-center border border-emerald-300 dark:border-gold-500/40 shadow-xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-200 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/20 uppercase tracking-widest px-3 py-1 rounded-full">
                Consultation Request Confirmed
              </span>
              <h4 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">Reference Code: {bookingRef}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900 dark:text-white">{clientInfo.name}</strong>. Your consultation has been routed directly to <strong className="text-amber-800 dark:text-gold-400">{selectedAttorney}</strong> for {selectedArea}.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto font-mono">
              <p><span className="text-slate-500 dark:text-slate-400">Direct Contact:</span> <strong className="text-amber-800 dark:text-gold-300">+91 70020 69417 (Advocate Sumeet Gupta)</strong></p>
              <p><span className="text-slate-500 dark:text-slate-400">Email:</span> <strong className="text-slate-900 dark:text-white">advocatesumeetg@gmail.com / mrgkgupta@gmail.com</strong></p>
              <p><span className="text-slate-500 dark:text-slate-400">Mode:</span> <strong className="text-slate-900 dark:text-white">{consultType === "chamber" ? "In-Person Guwahati Chamber" : "Secure Video Consult"}</strong></p>
              <p><span className="text-slate-500 dark:text-slate-400">Date & Slot:</span> <strong className="text-amber-800 dark:text-gold-300">{date} at {time}</strong></p>
              <p><span className="text-slate-500 dark:text-slate-400">Chamber:</span> {firmInfo.contact.address} (Landmark: {firmInfo.contact.landmark})</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href="https://wa.me/917002069417?text=Hello%20Advocate%20Sumeet%20Gupta,%20I%20have%20booked%20a%20consultation%20with%20reference%20code%20BLA."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open WhatsApp to Confirm</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 font-bold px-8 py-3 rounded-xl text-xs shadow-lg"
              >
                Done & Return to Main Page
              </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons for Steps 1-3 */}
        {step < 4 && (
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((step - 1) as any)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Back
              </button>
            ) : <div />}

            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1.5 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs shadow-lg transition-all"
            >
              <span>{step === 3 ? "Confirm & Schedule" : "Continue"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
