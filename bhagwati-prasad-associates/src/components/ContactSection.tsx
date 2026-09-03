"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, CheckCircle2 } from "lucide-react";
import { firmInfo } from "@/data/firmData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-legal-900 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-gold-400 dark:bg-gold-500/10 dark:border-gold-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4" />
            <span>Appellate Chambers & Office</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Get in Touch with Our Legal Team
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Visit our chambers at the High Court Lawyers Block or send us a direct message for immediate case evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <div className="flex items-center gap-3 text-amber-800 dark:text-gold-400 font-bold">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="font-serif text-lg text-slate-900 dark:text-white">Chamber Location</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-8">
                {firmInfo.contact.address}
              </p>
            </div>

            {/* Direct Phone Lines */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <div className="flex items-center gap-3 text-amber-800 dark:text-gold-400 font-bold">
                <Phone className="w-5 h-5 shrink-0" />
                <span className="font-serif text-lg text-slate-900 dark:text-white">Direct Desk Lines</span>
              </div>
              <div className="pl-8 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <p><strong className="text-amber-800 dark:text-gold-400">Girish Gupta (Senior Advocate):</strong> +91 98100 12345</p>
                <p><strong className="text-amber-800 dark:text-gold-400">Sumeet Gupta (Managing Partner):</strong> +91 98711 54321</p>
              </div>
            </div>

            {/* Emergency Helpline Highlight */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/60 dark:via-slate-950 dark:to-slate-950 border border-amber-300 dark:border-gold-500/40 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-amber-800 dark:text-gold-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-gold-400 animate-pulse" />
                <span>24/7 Emergency Bail & Stay Helpline</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 pl-7">
                For urgent weekend bail motions or emergency High Court stay petitions:
              </p>
              <a
                href={`tel:${firmInfo.contact.emergencyPhone}`}
                className="inline-block ml-7 text-sm font-bold text-amber-900 hover:text-amber-700 dark:text-gold-300 dark:hover:text-white underline font-mono"
              >
                +91 99990 88776
              </a>
            </div>

            {/* Email & Hours */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 shadow-sm">
              <div className="flex items-center gap-3 text-amber-800 dark:text-gold-400 font-bold">
                <Clock className="w-5 h-5 shrink-0" />
                <span className="font-serif text-lg text-slate-900 dark:text-white">Chamber Hours</span>
              </div>
              <p className="pl-8 text-slate-600 dark:text-slate-300">{firmInfo.contact.hours}</p>
              <div className="flex items-center gap-3 text-amber-800 dark:text-gold-400 font-bold pt-2">
                <Mail className="w-5 h-5 shrink-0" />
                <span className="text-slate-900 dark:text-white text-xs sm:text-sm font-mono">{firmInfo.contact.email}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-2xl space-y-6">
              
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">Send Direct Message to Chambers</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  All communications are strictly confidential and protected by attorney-client privilege.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">Message Transmitted to Chambers</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Senior Counsel Girish Gupta / Advocate Sumeet Gupta will review your legal query and respond within 4 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs font-semibold text-amber-800 dark:text-gold-400 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Legal Matter Subject</label>
                      <input
                        type="text"
                        placeholder="e.g. High Court Property Writ Petition"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">Case Brief / Details</label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your legal dispute, court notice details, or legal requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 dark:focus:border-gold-500 resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-gold-500/20 text-sm transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Confidential Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
