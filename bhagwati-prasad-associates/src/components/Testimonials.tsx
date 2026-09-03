"use client";

import { Star, Quote, MessageSquare } from "lucide-react";
import { testimonials } from "@/data/firmData";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-legal-900 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Trusted by Business Leaders & Families Alike
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Hear directly from clients who relied on Bhagwati Prasad & Associates for critical courtroom advocacy and strategic legal guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-gold-500/30 transition-all duration-300 shadow-sm dark:shadow-xl flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 dark:text-slate-800 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500 dark:fill-gold-400 dark:text-gold-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-900 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-slate-900 dark:text-white text-base">{t.clientName}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.clientTitle}</p>
                </div>
                <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 border border-amber-200 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/20 px-3 py-1 rounded-full">
                  {t.caseType}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
