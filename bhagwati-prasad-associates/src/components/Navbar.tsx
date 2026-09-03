"use client";

import { useState, useEffect } from "react";
import { Scale, Phone, Menu, X, Calendar, ShieldCheck } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { firmInfo } from "@/data/firmData";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About Firm", href: "#about" },
    { label: "Our Lawyers", href: "#attorneys" },
    { label: "Practice Areas", href: "#practice-areas" },
    { label: "Case Victories", href: "#case-results" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 dark:bg-legal-950/95 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-xl"
          : "bg-gradient-to-b from-slate-950/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <Scale className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-slate-100 dark:text-white group-hover:text-gold-400 transition-colors">
              {firmInfo.name}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-400/90 font-medium">
              Advocates & Legal Consultants
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Header Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${firmInfo.contact.emergencyPhone}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-gold-400 bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 px-3 py-1.5 rounded-full transition-all"
            title="24/7 Urgent Bail & Stay Helpline"
          >
            <ShieldCheck className="w-3.5 h-3.5 animate-pulse" />
            <span>24/7 Helpline</span>
          </a>

          <ThemeToggle />

          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 hover:-translate-y-0.5 transition-all text-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:text-gold-400"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-gold-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-gold-400 py-2 border-b border-slate-800/80"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href={`tel:${firmInfo.contact.emergencyPhone}`}
              className="flex items-center justify-center gap-2 text-sm font-semibold text-gold-400 bg-gold-500/10 border border-gold-500/30 py-2.5 rounded-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency Helpline: +91 99990 88776</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 text-slate-950 font-bold py-3 rounded-xl shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
