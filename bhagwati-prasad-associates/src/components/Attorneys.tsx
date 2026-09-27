"use client";

import { useState } from "react";
import { UserCheck, Award, GraduationCap, Gavel, Phone, Mail, FileText, X, ChevronRight, Shield, Globe } from "lucide-react";
import { attorneys, Attorney } from "@/data/firmData";

interface AttorneysProps {
  onOpenBooking: (attorneyName?: string) => void;
}

export default function Attorneys({ onOpenBooking }: AttorneysProps) {
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(null);

  return (
    <section id="attorneys" className="py-20 bg-slate-50 dark:bg-legal-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <UserCheck className="w-4 h-4" />
            <span>Chamber Advocates</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Our Advocates & Counsel
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Direct courtroom representation and strategic counseling by Sole Proprietor Advocate Sumeet Gupta, guided by the senior jurisprudence of Advocate Girish Kumar Gupta in the Guwahati High Court.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {attorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="group relative rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-gold-500/50 transition-all duration-300 overflow-hidden shadow-md dark:shadow-2xl flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="h-1.5 bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600" />

              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Attorney Head Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-amber-400/50 dark:border-gold-500/40 shadow-md shrink-0 bg-slate-100 dark:bg-slate-800">
                    <img
                      src={attorney.image}
                      alt={attorney.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent dark:from-slate-950/80" />
                  </div>

                  <div className="space-y-1">
                    <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-200 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/20 px-2.5 py-0.5 rounded-full">
                      {attorney.experience}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-gold-300 transition-colors">
                      {attorney.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {attorney.role}
                    </p>
                    {attorney.languages && (
                      <p className="text-[11px] text-amber-800 dark:text-gold-400/90 flex items-center gap-1 font-medium pt-0.5">
                        <Globe className="w-3 h-3" /> Languages: {attorney.languages.join(", ")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Specialties Tags */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Core Specializations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {attorney.specialties.slice(0, 4).map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Short Bio Snippet */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed italic">
                  "{attorney.quote}"
                </p>

              </div>

              {/* Card Footer Actions */}
              <div className="p-6 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setSelectedAttorney(attorney)}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white font-semibold py-2.5 px-4 rounded-xl text-xs sm:text-sm border border-slate-300 dark:border-slate-700 shadow-sm transition-colors"
                >
                  <FileText className="w-4 h-4 text-amber-600 dark:text-gold-400" />
                  <span>Full Bio & Credentials</span>
                </button>

                <button
                  onClick={() => onOpenBooking(attorney.name)}
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-md transition-all"
                >
                  <span>Book Consult</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Attorney Detail Modal */}
      {selectedAttorney && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-slate-100 space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedAttorney(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-start gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
              <img
                src={selectedAttorney.image}
                alt={selectedAttorney.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-amber-400 dark:border-gold-400 shadow-lg"
              />
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-800 bg-amber-100 border border-amber-200 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/20 uppercase tracking-widest px-2.5 py-0.5 rounded-full">
                  {selectedAttorney.experience}
                </span>
                <h3 className="font-serif text-3xl font-bold text-slate-900 dark:text-white">{selectedAttorney.name}</h3>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{selectedAttorney.role}</p>
                {selectedAttorney.languages && (
                  <p className="text-xs text-amber-800 dark:text-gold-300 font-medium flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" /> Spoken Languages: {selectedAttorney.languages.join(", ")}
                  </p>
                )}
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-amber-800 dark:text-gold-300 flex items-center gap-2">
                <Gavel className="w-4 h-4 text-amber-600 dark:text-gold-400" /> Attorney Profile & Legal Overview
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{selectedAttorney.bio}</p>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-amber-800 dark:text-gold-300 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-amber-600 dark:text-gold-400" /> Qualifications & Degrees
              </h4>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                {selectedAttorney.education.map((edu, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-gold-400" />
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* Court Admissions */}
            <div className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-amber-800 dark:text-gold-300 flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-600 dark:text-gold-400" /> Practice Courts & Tribunals
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedAttorney.courts.map((court, i) => (
                  <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium">
                    {court}
                  </span>
                ))}
              </div>
            </div>

            {/* Notable Achievements */}
            <div className="space-y-2">
              <h4 className="font-serif text-sm font-bold text-amber-800 dark:text-gold-300 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600 dark:text-gold-400" /> Key Accomplishments & Case Experience
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {selectedAttorney.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-gold-400 font-bold">✓</span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" /> {selectedAttorney.phone}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" /> {selectedAttorney.email}</span>
              </div>

              <button
                onClick={() => {
                  const attorneyName = selectedAttorney.name;
                  setSelectedAttorney(null);
                  onOpenBooking(attorneyName);
                }}
                className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs shadow-md"
              >
                Book Consultation with {selectedAttorney.name.split(" ")[0]}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
