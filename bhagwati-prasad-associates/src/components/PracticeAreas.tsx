"use client";

import { useState } from "react";
import { 
  Building2, ShieldAlert, Briefcase, Scale, Gavel, Lock, HeartHandshake, Landmark, ChevronRight, CheckCircle2 
} from "lucide-react";
import { practiceAreas, PracticeArea } from "@/data/firmData";

interface PracticeAreasProps {
  onOpenBooking: (attorneyName?: string, practiceArea?: string) => void;
}

const iconMap: Record<string, any> = {
  Building2,
  ShieldAlert,
  Briefcase,
  Scale,
  Gavel,
  Lock,
  HeartHandshake,
  Landmark,
  CheckCircle2,
};

export default function PracticeAreas({ onOpenBooking }: PracticeAreasProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const filterOptions = [
    { label: "All Practice Matters", value: "all" },
    { label: "High Court & Tribunals", value: "tribunals" },
    { label: "Criminal, Bail & Cheque Bounce", value: "criminal" },
    { label: "Civil, Family & Registration", value: "civil" },
    { label: "Arbitration & Contracts", value: "arbitration" },
  ];

  const filteredAreas = practiceAreas.filter((area) => {
    if (activeFilter === "tribunals") {
      return area.id.includes("service") || area.id.includes("drt") || area.id.includes("aft");
    }
    if (activeFilter === "criminal") {
      return area.id.includes("bail") || area.id.includes("cheque");
    }
    if (activeFilter === "civil") {
      return area.id.includes("family") || area.id.includes("mact") || area.id.includes("registration") || area.id.includes("succession");
    }
    if (activeFilter === "arbitration") {
      return area.id.includes("arbitration");
    }
    return true;
  });

  return (
    <section id="practice-areas" className="py-20 bg-white dark:bg-legal-900 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4" />
            <span>Chamber Practice Matters</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Comprehensive Legal Practice Areas
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Strategic representation across Guwahati High Court, statutory tribunals (DRT & AFT), Family Courts, CJM & District Courts across Assam.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === opt.value
                  ? "bg-amber-500 dark:bg-gold-500 text-slate-950 shadow-md font-bold"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-slate-950/80 dark:text-slate-400 dark:hover:text-white dark:border-slate-800"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Scale;
            return (
              <div
                key={area.id}
                className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-gold-500/40 hover:bg-white dark:hover:bg-slate-950 transition-all duration-300 shadow-sm dark:shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon & Attorney Tag */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-amber-100 text-amber-800 border border-amber-200 dark:bg-gold-500/10 dark:text-gold-400 dark:border-gold-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 dark:text-slate-400 dark:bg-slate-900 dark:border-slate-800 px-2.5 py-1 rounded-full shadow-sm">
                      Lead: {area.leadAttorney}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif font-bold text-lg text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-gold-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Subcategories list snippet */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-900 space-y-1">
                    {area.subCategories.slice(0, 2).map((sub, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-amber-600 dark:text-gold-400 shrink-0" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="text-xs font-semibold text-amber-800 hover:text-amber-700 dark:text-gold-400 dark:hover:text-gold-300 flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(area.leadAttorney, area.title)}
                    className="text-[11px] font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 dark:bg-gold-500 dark:hover:bg-gold-400 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                  >
                    Consult
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Practice Detail Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100 space-y-6">
            
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-800 dark:text-gold-400 uppercase tracking-widest">
                  Lead Counsel: {selectedArea.leadAttorney}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">{selectedArea.title}</h3>
              </div>
              <button
                onClick={() => setSelectedArea(null)}
                className="p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedArea.description}
            </p>

            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold text-amber-800 dark:text-gold-300">
                Key Services & Sub-Specializations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedArea.subCategories.map((sub, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-gold-400 shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedArea(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const lead = selectedArea.leadAttorney;
                  const title = selectedArea.title;
                  setSelectedArea(null);
                  onOpenBooking(lead, title);
                }}
                className="bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs shadow-md"
              >
                Book Consultation for {selectedArea.title.split(" ")[0]}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
