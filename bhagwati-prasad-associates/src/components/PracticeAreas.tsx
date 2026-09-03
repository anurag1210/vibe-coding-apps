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
};

export default function PracticeAreas({ onOpenBooking }: PracticeAreasProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  const filterOptions = [
    { label: "All Practice Areas", value: "all" },
    { label: "Civil & Land Litigation", value: "civil" },
    { label: "Criminal & Financial Defense", value: "criminal" },
    { label: "Corporate & Arbitration", value: "corporate" },
    { label: "Writs & High Court", value: "writs" },
  ];

  const filteredAreas = practiceAreas.filter((area) => {
    if (activeFilter === "civil") return area.id.includes("civil") || area.id.includes("property") || area.id.includes("matrimonial");
    if (activeFilter === "criminal") return area.id.includes("criminal") || area.id.includes("cyber");
    if (activeFilter === "corporate") return area.id.includes("corporate") || area.id.includes("arbitration") || area.id.includes("banking");
    if (activeFilter === "writs") return area.id.includes("constitutional") || area.id.includes("civil");
    return true;
  });

  return (
    <section id="practice-areas" className="py-20 bg-slate-900 dark:bg-legal-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-4 h-4" />
            <span>Appellate & Trial Specializations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Comprehensive Legal Practice Areas
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Strategic representation tailored to complex litigation, corporate disputes, writ petitions, and ancestral land recovery.
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
                  ? "bg-gold-500 text-slate-950 shadow-lg shadow-gold-500/20 font-bold"
                  : "bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800"
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
                className="group relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-gold-500/40 hover:bg-slate-950 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon & Attorney Tag */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-full">
                      Lead: {area.leadAttorney}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-gold-300 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Subcategories list snippet */}
                  <div className="pt-2 border-t border-slate-900 space-y-1">
                    {area.subCategories.slice(0, 2).map((sub, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(area.leadAttorney, area.title)}
                    className="text-[11px] font-bold text-slate-950 bg-gold-500 hover:bg-gold-400 px-3 py-1.5 rounded-lg transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl bg-slate-900 border border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 space-y-6">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                  Lead Counsel: {selectedArea.leadAttorney}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">{selectedArea.title}</h3>
              </div>
              <button
                onClick={() => setSelectedArea(null)}
                className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedArea.description}
            </p>

            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold text-gold-300">
                Key Services & Sub-Specializations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedArea.subCategories.map((sub, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                    <span>{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedArea(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
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
                className="bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs"
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
