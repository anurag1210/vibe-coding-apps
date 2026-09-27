"use client";

import { Scale, ShieldCheck, MapPin, Phone, Mail } from "lucide-react";
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
              {firmInfo.tagline}. A sole proprietary concern of Advocate Sumeet Gupta. Dedicated to courtroom advocacy across Guwahati High Court, DRT, AFT, CJM Court, and District Courts throughout Assam.
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
              <li><a href="#attorneys" className="hover:text-gold-400 transition-colors">Our Advocates (Sumeet & Girish)</a></li>
              <li><a href="#practice-areas" className="hover:text-gold-400 transition-colors">Practice Areas & Specializations</a></li>
              <li><a href="#case-results" className="hover:text-gold-400 transition-colors">Representative Matters</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Chamber Contact & Appointment</a></li>
            </ul>
          </div>

          {/* Chamber Contact Details */}
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-white text-sm mb-3">Chamber Direct Desk</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href={`tel:${firmInfo.contact.phone}`} className="hover:text-white font-mono text-gold-300 font-bold">
                  {firmInfo.contact.phone}
                </a>
              </p>
              <div className="flex flex-col gap-1">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <a href={`mailto:${firmInfo.contact.sumeetEmail}`} className="hover:text-white font-mono text-[11px]">
                    {firmInfo.contact.sumeetEmail}
                  </a>
                </p>
                <p className="flex items-center gap-2 pl-5">
                  <a href={`mailto:${firmInfo.contact.girishEmail}`} className="hover:text-white font-mono text-[11px]">
                    {firmInfo.contact.girishEmail}
                  </a>
                </p>
              </div>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{firmInfo.contact.address} <span className="text-gold-400/90 font-medium">(Landmark: {firmInfo.contact.landmark})</span></span>
              </p>
            </div>
          </div>

        </div>

        {/* Bar Council Compliance Disclaimer */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-gold-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Bar Council Compliance & Legal Disclaimer</span>
          </div>
          <p>
            As per the rules of the Bar Council of India, advocates and legal practitioners are strictly prohibited from soliciting work or advertising in any form. By accessing this website, the user acknowledges that they are seeking information regarding {firmInfo.name} of their own accord and that there has been no advertisement, personal communication, solicitation, or inducement by the firm or its advocates.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} {firmInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Guwahati High Court & Courts of Assam Legal Advocacy
          </p>
        </div>

      </div>
    </footer>
  );
}
