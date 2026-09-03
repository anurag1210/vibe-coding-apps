"use client";

import { useState } from "react";
import { Shield, Scale, Gavel, Award, CheckCircle, Landmark, Users } from "lucide-react";
import { firmInfo } from "@/data/firmData";

export default function AboutFirm() {
  const [activeTab, setActiveTab] = useState<"legacy" | "ethos" | "reach">("legacy");

  return (
    <section id="about" className="py-20 bg-white dark:bg-legal-900 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4" />
            <span>About The Firm</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            A Legacy of Legal Precision & Unyielding Integrity
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Built on the foundational legal ethics established by Late Advocate Bhagwati Prasad, our practice seamlessly unites senior judicial experience with modern tactical advocacy.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Card / Quote */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative p-8 rounded-3xl bg-gradient-to-b from-slate-50 to-amber-50/40 dark:from-slate-800/90 dark:to-slate-950/90 border border-slate-200 dark:border-gold-500/30 shadow-lg dark:shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-amber-500/10 dark:bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-amber-100 text-amber-800 border border-amber-300 dark:bg-gold-500/20 dark:text-gold-400 dark:border-gold-500/40">
                  <Landmark className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 dark:text-white">Bhagwati Prasad & Associates</h3>
                  <p className="text-xs text-amber-800 dark:text-gold-400 font-medium uppercase tracking-wider">Chambers & Appellate Legal Practice</p>
                </div>
              </div>

              <blockquote className="text-slate-700 dark:text-slate-300 italic text-sm sm:text-base leading-relaxed mb-6 border-l-2 border-amber-500 dark:border-gold-400 pl-4">
                "The strength of a legal practice lies not in the number of cases argued, but in the precision of law applied and the trust preserved with every client."
              </blockquote>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-amber-600 dark:text-gold-400" /> High Court Bar Member</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-amber-600 dark:text-gold-400" /> Senior & Junior Counsel Partnership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Navigation */}
            <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-slate-950/80 rounded-xl border border-slate-200 dark:border-slate-800 max-w-md">
              <button
                onClick={() => setActiveTab("legacy")}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "legacy"
                    ? "bg-amber-500 dark:bg-gold-500 text-slate-950 shadow-md"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                Our Legacy
              </button>
              <button
                onClick={() => setActiveTab("ethos")}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "ethos"
                    ? "bg-amber-500 dark:bg-gold-500 text-slate-950 shadow-md"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                Our Ethos
              </button>
              <button
                onClick={() => setActiveTab("reach")}
                className={`flex-1 py-2.5 px-4 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "reach"
                    ? "bg-amber-500 dark:bg-gold-500 text-slate-950 shadow-md"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                Jurisdiction & Reach
              </button>
            </div>

            {/* Tab 1: Legacy */}
            {activeTab === "legacy" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  Dedicated & Result-Oriented Legal Practice
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Bhagwati Prasad & Associates was founded to carry forward the principles of legal excellence, unyielding ethics, and deep legal mastery. Under the leadership of Advocate Girish Kumar Gupta (LL.M) and Advocate Sumeet Gupta, the firm provides client-focused legal representation across High Courts, District Courts, Family Courts, AFT, and DRT.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-amber-600 dark:text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">LL.M High Court Practice</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Led by Advocate Girish Kumar Gupta with 8 years of active practice across High Courts & Tribunals.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-start gap-3 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-amber-600 dark:text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Modern Tactical Edge</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Driven by Sumeet Gupta focusing on corporate, cyber, and tech-driven legal prep.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Ethos */}
            {activeTab === "ethos" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  Uncompromising Standards of Client Advocacy
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Every legal issue demands a tailored legal strategy. We reject template legal advice in favor of rigorous case research, precise drafting, and fierce courtroom representation.
                </p>
                <ul className="space-y-3 pt-2">
                  <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <Gavel className="w-4 h-4 text-amber-600 dark:text-gold-400 shrink-0" />
                    <span>Transparent, non-ambiguous fee structures and regular case status updates.</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <Shield className="w-4 h-4 text-amber-600 dark:text-gold-400 shrink-0" />
                    <span>Strict attorney-client confidentiality and institutional data security.</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <Award className="w-4 h-4 text-amber-600 dark:text-gold-400 shrink-0" />
                    <span>Exhaustive statutory research and precedent analysis prior to every hearing.</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Tab 3: Reach */}
            {activeTab === "reach" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  Comprehensive Appellate & Tribunal Practice
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Our attorneys are enrolled with the Bar Council of Delhi and regularly appear across all major judicial and quasi-judicial forums in the National Capital Region and pan-India.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-medium">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-amber-900 dark:text-gold-300">
                    • Supreme Court of India
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-amber-900 dark:text-gold-300">
                    • High Court of Delhi
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-amber-900 dark:text-gold-300">
                    • National Company Law Tribunal (NCLT)
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-amber-900 dark:text-gold-300">
                    • Debt Recovery Tribunal (DRT)
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-amber-900 dark:text-gold-300">
                    • District & Sessions Courts
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-amber-900 dark:text-gold-300">
                    • Commercial Arbitration Panels
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
