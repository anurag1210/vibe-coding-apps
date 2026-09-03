"use client";

import { Award, CheckCircle, Trophy, Landmark } from "lucide-react";
import { caseResults } from "@/data/firmData";

export default function CaseResults() {
  return (
    <section id="case-results" className="py-20 bg-slate-950 dark:bg-legal-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            <span>Representative Precedents</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Benchmark Court Victories & Arbitral Awards
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A testament to our rigorous legal preparation, statutory mastery, and persuasive advocacy across High Courts & Arbitral Panels.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseResults.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-gold-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Category & Year */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-gold-400 uppercase tracking-wider bg-gold-500/10 px-2.5 py-1 rounded-md border border-gold-500/20">
                    {item.category}
                  </span>
                  <span className="font-mono text-slate-400 font-bold">{item.year}</span>
                </div>

                {/* Case Title */}
                <h3 className="font-serif font-bold text-xl text-white group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>

                {/* Court Tag */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <Landmark className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{item.court}</span>
                </div>

                {/* Outcome Badge */}
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{item.outcome}</span>
                </div>

                {/* Case Brief */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  {item.summary}
                </p>

              </div>

              {/* Bottom Decorative Line */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Verified Legal Record</span>
                <span className="text-gold-400 font-semibold">Bhagwati Prasad & Assoc.</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
