"use client";

import { Scale, ShieldCheck } from "lucide-react";
import { firmInfo } from "@/data/firmData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gold-500 text-slate-950 font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-lg text-white">
                {firmInfo.name}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs max-w-md">
              {firmInfo.tagline}. Dedicated to high-stakes courtroom litigation, constitutional writ petitions, corporate arbitration, and land recovery.
            </p>
            <p className="text-[11px] text-gold-400 font-mono">
              {firmInfo.legacy}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-white text-sm mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Our Chambers</a></li>
              <li><a href="#attorneys" className="hover:text-gold-400 transition-colors">Legal Partners (Girish & Sumeet)</a></li>
              <li><a href="#practice-areas" className="hover:text-gold-400 transition-colors">Practice Areas & Specializations</a></li>
              <li><a href="#case-results" className="hover:text-gold-400 transition-colors">Representative Precedents</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Chamber Contact & Helpline</a></li>
            </ul>
          </div>

          {/* Legal Emergency */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-white text-sm mb-3">Emergency Desk</h4>
            <p className="text-xs text-slate-400">
              For urgent High Court stay applications or weekend bail motions:
            </p>
            <p className="text-sm font-bold text-gold-400 font-mono pt-1">
              +91 99990 88776
            </p>
            <p className="text-[11px] text-slate-400 pt-2">
              High Court Lawyers Chambers Complex, New Delhi
            </p>
          </div>

        </div>

        {/* Bar Council Compliance Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-gold-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Bar Council Compliance & Legal Disclaimer</span>
          </div>
          <p>
            As per the rules of the Bar Council of India, law firms and advocates are strictly prohibited from soliciting work or advertising in any form. By accessing this website, the user acknowledges that they are seeking information regarding Bhagwati Prasad & Associates of their own accord and that there has been no advertisement, personal communication, or solicitation by the firm or its attorneys.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} Bhagwati Prasad & Associates. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Built with legal precision & modern web technology
          </p>
        </div>

      </div>
    </footer>
  );
}
