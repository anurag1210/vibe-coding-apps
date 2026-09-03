"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutFirm from "@/components/AboutFirm";
import Attorneys from "@/components/Attorneys";
import PracticeAreas from "@/components/PracticeAreas";
import CaseResults from "@/components/CaseResults";
import Testimonials from "@/components/Testimonials";
import LegalFaq from "@/components/LegalFaq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import BarCouncilDisclaimerModal from "@/components/BarCouncilDisclaimerModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedAttorney, setSelectedAttorney] = useState<string | undefined>(undefined);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string | undefined>(undefined);

  const handleOpenBooking = (attorneyName?: string, practiceArea?: string) => {
    setSelectedAttorney(attorneyName);
    setSelectedPracticeArea(practiceArea);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedAttorney(undefined);
    setSelectedPracticeArea(undefined);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-legal-950 text-slate-900 dark:text-slate-100 selection:bg-gold-500 selection:text-slate-950 transition-colors duration-200">
      {/* Mandatory Bar Council of India Popup Disclaimer */}
      <BarCouncilDisclaimerModal />

      <Navbar onOpenBooking={() => handleOpenBooking()} />
      <Hero onOpenBooking={() => handleOpenBooking()} />
      <AboutFirm />
      <Attorneys onOpenBooking={(attorneyName) => handleOpenBooking(attorneyName)} />
      <PracticeAreas onOpenBooking={(attorneyName, practiceArea) => handleOpenBooking(attorneyName, practiceArea)} />
      <CaseResults />
      <Testimonials />
      <LegalFaq />
      <ContactSection />
      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialAttorney={selectedAttorney}
        initialPracticeArea={selectedPracticeArea}
      />
    </main>
  );
}
