"use client";

import { useState, useEffect } from "react";
import { Scale, Check, X } from "lucide-react";
import { firmInfo } from "@/data/firmData";

export default function BarCouncilDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer in this session/browser
    const accepted = localStorage.getItem("bp_disclaimer_accepted");
    if (!accepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("bp_disclaimer_accepted", "true");
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-slate-950/90 backdrop-blur-lg animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-gold-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100 space-y-6">
        
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="p-3 rounded-2xl bg-amber-100 text-amber-800 border border-amber-300 dark:bg-gold-500/20 dark:text-gold-400 dark:border-gold-500/40 shrink-0">
            <Scale className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-100 border border-amber-200 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/20 uppercase tracking-widest px-2.5 py-0.5 rounded-full">
              Bar Council of India Rule Compliance
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Disclaimer & Terms of Access
            </h3>
          </div>
        </div>

        {/* Disclaimer Text */}
        <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-h-[50vh] overflow-y-auto pr-2 font-sans">
          <p>
            As per the rules of the <strong className="text-slate-900 dark:text-white">Bar Council of India</strong> (Rule 36 of Section IV of the Bar Council of India Rules), advocates and law firms are strictly prohibited from soliciting work or advertising in any manner.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <p className="font-semibold text-amber-800 dark:text-gold-300">
              By clicking "I Agree" below, you acknowledge and confirm the following:
            </p>
            <ul className="space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-300">
              <li>
                There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from <strong className="text-slate-900 dark:text-white">{firmInfo.name}</strong> or any of its attorneys to solicit work through this website.
              </li>
              <li>
                You wish to gain information about <strong className="text-slate-900 dark:text-white">{firmInfo.name}</strong> for your own knowledge and personal use.
              </li>
              <li>
                The information provided on this website is made available to you solely at your request for informational purposes only and should not be interpreted as legal advice.
              </li>
              <li>
                <strong className="text-slate-900 dark:text-white">{firmInfo.name}</strong> is not liable for any action taken by the user relying on the material/information provided on this website.
              </li>
            </ul>
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-[11px] italic">
            If you require specific legal advice or representation for your matter, please consult Advocate Sumeet Gupta or Senior Advocate Girish Kumar Gupta directly through formal appointment.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleDecline}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-600 hover:text-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
          >
            <X className="w-4 h-4" />
            <span>Decline & Exit</span>
          </button>

          <button
            onClick={handleAgree}
            className="w-full sm:w-auto bg-gradient-to-r from-gold-500 via-gold-400 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-slate-950 font-bold px-8 py-3 rounded-xl text-xs sm:text-sm shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>I Agree & Proceed to Website</span>
          </button>
        </div>

      </div>
    </div>
  );
}
