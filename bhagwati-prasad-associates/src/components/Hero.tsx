"use client";

import { Scale, ShieldCheck, Award, ArrowRight, CheckCircle2, ChevronDown, BookOpen } from "lucide-react";
import { firmInfo } from "@/data/firmData";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-slate-50 dark:from-legal-950 dark:via-legal-950 dark:to-slate-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-400/15 to-blue-500/10 dark:from-gold-500/10 dark:to-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-amber-400/10 dark:bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 dark:bg-blue-900/10 rounded-full blur-2xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Legacy Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 dark:bg-slate-900/90 border border-amber-300 dark:border-gold-500/30 text-amber-800 dark:text-gold-400 text-xs sm:text-sm font-medium shadow-md dark:shadow-xl backdrop-blur-md animate-fade-in">
            <Award className="w-4 h-4 text-amber-600 dark:text-gold-400" />
            <span>{firmInfo.legacy}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            Decades of Judicial Wisdom. <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-gold-300 dark:via-gold-400 dark:to-amber-500 bg-clip-text text-transparent">
              Modern Strategic Advocacy.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-normal">
            {firmInfo.heroSubtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:-translate-y-0.5 transition-all"
            >
              <span>Schedule Confidential Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#practice-areas"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-100 border border-slate-300 hover:border-amber-400 text-slate-800 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:border-slate-700 dark:hover:border-gold-500/40 dark:text-slate-200 font-semibold px-8 py-4 rounded-xl text-base shadow-sm transition-all"
            >
              <BookOpen className="w-5 h-5 text-amber-600 dark:text-gold-400" />
              <span>Explore Practice Areas</span>
            </a>
          </div>

          {/* Key Practice Badges */}
          <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs font-medium text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" /> Supreme Court & High Court Writs
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" /> Property Partition & Title Suits
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" /> Urgent Criminal Bail & FIR Defense
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-gold-400" /> Commercial Arbitration & NCLT
            </span>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-200 dark:border-slate-800/80">
          {firmInfo.stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-gold-500/30 transition-colors shadow-sm dark:shadow-lg"
            >
              <span className="font-serif font-bold text-3xl sm:text-4xl text-amber-600 dark:text-gold-400 mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="mt-10 flex justify-center">
        <a href="#about" className="p-2 rounded-full text-slate-500 hover:text-amber-700 dark:text-slate-400 dark:hover:text-gold-400 transition-colors animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
