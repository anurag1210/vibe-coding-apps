"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, Scale } from "lucide-react";
import { faqs } from "@/data/firmData";

export default function LegalFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-legal-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Legal Consultations & Procedure Guidance
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Clear answers regarding consultation booking, required documentation, fee transparency, and emergency representation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-100 hover:text-amber-700 dark:hover:text-gold-300 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Scale className="w-4 h-4 text-amber-600 dark:text-gold-400 shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-600 dark:text-gold-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
