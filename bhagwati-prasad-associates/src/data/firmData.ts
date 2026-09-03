export interface Attorney {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  education: string[];
  barEnrollment: string;
  courts: string[];
  specialties: string[];
  languages: string[];
  bio: string;
  achievements: string[];
  quote: string;
  phone: string;
  email: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  subCategories: string[];
  leadAttorney: string;
}

export interface CaseResult {
  id: string;
  title: string;
  category: string;
  court: string;
  outcome: string;
  summary: string;
  year: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  rating: number;
  text: string;
  caseType: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const firmInfo = {
  name: "Bhagwati Prasad & Associates",
  shortName: "BP & Associates",
  legacy: "Chambers of Late Advocate Bhagwati Prasad",
  tagline: "High Court & Appellate Legal Advocacy",
  heroSubtitle: "Comprehensive legal representation across High Courts, District Courts, Family Courts, AFT, DRT, and Arbitral Panels, combining seasoned judicial wisdom with modern tactical litigation.",
  stats: [
    { label: "Combined Legal Experience", value: "9 Years" },
    { label: "Cases Handled & Won", value: "500+" },
    { label: "Courts & Tribunals", value: "High Court, Family Court, AFT & DRT" },
    { label: "Multilingual Legal Service", value: "English, Assamese, Hindi, Bengali" },
  ],
  contact: {
    address: "Chamber Suite 402, High Court Lawyers Block & Mathura Nagar Legal Desk",
    phone: "+91 98100 12345 / +91 98711 54321",
    emergencyPhone: "+91 99990 88776",
    email: "girish.gupta@bhagwatiprasadlaw.com",
    hours: "Mon - Sat: 9:00 AM - 8:30 PM (Sunday by appointment)",
  }
};

export const attorneys: Attorney[] = [
  {
    id: "girish-gupta",
    name: "Girish Kumar Gupta",
    role: "Senior Partner & Lead Counsel",
    experience: "8 Years Experience | LL.M",
    image: "/girish-gupta.jpg",
    education: [
      "LL.M (Master of Laws) - Specialization in Civil & Matrimonial Jurisprudence",
      "LL.B (Honours) - High Court Bar Association",
      "Certified Advocate & Legal Consultant"
    ],
    barEnrollment: "D/2018/HC",
    courts: ["High Court (H.C.)", "District & Sessions Court (D.C.)", "Family Court", "Armed Forces Tribunal (AFT)", "Debt Recovery Tribunal (DRT)"],
    specialties: [
      "Divorce & Matrimonial Disputes",
      "Commercial Contracts & Agreements",
      "Cheque Bounce (Sec 138 NI Act)",
      "Armed Forces Tribunal (AFT) & Service Law",
      "Urgent Criminal Bail & FIR Defense",
      "DRT & Financial Debt Recovery"
    ],
    languages: ["English", "Assamese", "Hindi", "Bengali"],
    bio: "Advocate Girish Kumar Gupta is an accomplished advocate holding a Master of Laws (LL.M) with 8 years of dedicated legal practice. Operating across High Courts, District Courts, Family Courts, AFT, and DRT, Advocate Gupta has established a stellar track record in civil litigation, family law, cheque bounce recovery, and service petitions.",
    achievements: [
      "8 Years of active practice in High Court, Family Court, and Tribunals",
      "Represented 400+ complex civil, matrimonial, and cheque recovery matters",
      "Key victories before Armed Forces Tribunal (AFT) for military personnel service rights",
      "Multi-lingual advocate fluent in English, Assamese, Hindi, and Bengali"
    ],
    quote: "Justice demands rigorous statutory interpretation, absolute client commitment, and honest guidance at every stage of litigation.",
    phone: "+91 98100 12345",
    email: "girish.gupta@bhagwatiprasadlaw.com"
  },
  {
    id: "sumeet-gupta",
    name: "Sumeet Gupta",
    role: "Junior Partner & Associate Advocate",
    experience: "1 Year Experience",
    image: "/sumeet-gupta.png",
    education: [
      "B.A. LL.B (Hons.) - Faculty of Law",
      "Post-Graduate Diploma in Corporate Law & Cyber Rights",
      "Certified Legal Researcher"
    ],
    barEnrollment: "D/2025/DEL",
    courts: ["High Court", "District & Sessions Courts", "NCLT & DRT", "Commercial Tribunals"],
    specialties: [
      "Corporate & Commercial Disputes",
      "Criminal Defense & Bail Applications",
      "Cyber Crime & Financial Offenses",
      "Trademark & Intellectual Property",
      "Contract Drafting & Legal Research"
    ],
    languages: ["English", "Hindi"],
    bio: "Sumeet Gupta is an energetic new advocate in his 1st year of legal practice, bringing modern legal research methods, fresh tactical perspectives, and digital-first case preparation to Bhagwati Prasad & Associates under the mentorship of Girish Kumar Gupta.",
    achievements: [
      "1 Year of dedicated advocacy and legal research excellence",
      "Assisted in major commercial contract draftings and corporate compliance cases",
      "Special interest in cyber security law, financial fraud defense, and IP protection",
      "Tech-savvy advocate driving modern legal research tools"
    ],
    quote: "Modern litigation requires equal parts courtroom firepower, tactical foresight, and technological fluency.",
    phone: "+91 98711 54321",
    email: "sumeet.gupta@bhagwatiprasadlaw.com"
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: "matrimonial-divorce",
    title: "Divorce & Family Court Litigation",
    description: "Expert representation in mutual & contested divorces, child custody, alimony, restitution of conjugal rights, and family court proceedings.",
    icon: "HeartHandshake",
    subCategories: ["Mutual & Contested Divorce", "Child Custody & Maintenance", "Family Settlement & Alimony", "Domestic Violence Protection"],
    leadAttorney: "Girish Kumar Gupta"
  },
  {
    id: "cheque-bounce-138",
    title: "Cheque Bounce (Sec 138 NI Act) & Recovery",
    description: "Specialized advocacy for financial recovery under Section 138 of the Negotiable Instruments Act, legal notice serving, and trial defense.",
    icon: "Landmark",
    subCategories: ["Section 138 NI Act Notices", "Summary Suits & Commercial Recovery", "Execution of Money Decrees", "Bank Debt Settlement"],
    leadAttorney: "Girish Kumar Gupta"
  },
  {
    id: "aft-service-law",
    title: "Armed Forces Tribunal (AFT) & Service Law",
    description: "Dedicated legal representation before the Armed Forces Tribunal (AFT) for defense personnel pensions, promotions, court martial appeals, and service grievances.",
    icon: "Scale",
    subCategories: ["AFT Pension & Disability Appeals", "Court Martial Defense", "Government Service & Administrative Writs", "Promotion & Discharge Writs"],
    leadAttorney: "Girish Kumar Gupta"
  },
  {
    id: "criminal-bail",
    title: "Criminal Defense & Bail Proceedings",
    description: "Robust defense strategies for anticipatory & regular bail, criminal trial representation, quashing of FIRs under Sec 482, and white-collar defense.",
    icon: "ShieldAlert",
    subCategories: ["Anticipatory & Regular Bail", "Quashing of FIR / Chargesheets", "Economic Offenses (EOW / PMLA)", "Trial & Cross Examination"],
    leadAttorney: "Sumeet Gupta"
  },
  {
    id: "corporate-contracts",
    title: "Commercial Contracts & Agreements",
    description: "Comprehensive advisory on breach of contract, commercial agreement drafting, shareholder disputes, NCLT proceedings, and business negotiations.",
    icon: "Briefcase",
    subCategories: ["Commercial Contract Drafting", "Breach of Contract Injunctions", "NCLT Insolvency Proceedings", "M&A Due Diligence"],
    leadAttorney: "Girish Kumar Gupta"
  },
  {
    id: "drt-banking",
    title: "Debt Recovery Tribunal (DRT) & SARFAESI",
    description: "Defending borrowers and financial institutions before Debt Recovery Tribunals (DRT), SARFAESI possession notices, and bank recovery proceedings.",
    icon: "Building2",
    subCategories: ["DRT Stay Applications", "SARFAESI Counter-Measures", "One-Time Settlement (OTS) Negotiations", "Bank Recovery Defense"],
    leadAttorney: "Girish Kumar Gupta"
  },
  {
    id: "arbitration-adr",
    title: "Commercial Arbitration & Mediation",
    description: "Domestic and international commercial arbitration advocacy under the Arbitration and Conciliation Act, including Section 9 & Section 11 applications.",
    icon: "Gavel",
    subCategories: ["Section 9 Interim Injunctions", "Section 11 Arbitrator Appointment", "Enforcement of Arbitral Awards", "Structured Mediation"],
    leadAttorney: "Sumeet Gupta"
  },
  {
    id: "cyber-ip",
    title: "Cyber Law & Intellectual Property",
    description: "Protecting digital assets, defending against cyber fraud charges, filing trademark & copyright infringement suits, and handling IT Act violations.",
    icon: "Lock",
    subCategories: ["Trademark & Copyright Litigation", "Cyber Fraud & Identity Theft Defense", "Data Privacy Compliance", "Domain Name Disputes"],
    leadAttorney: "Sumeet Gupta"
  }
];

export const caseResults: CaseResult[] = [
  {
    id: "case-1",
    title: "High Court Cheque Bounce Sec 138 Precedent Victory",
    category: "Financial Recovery",
    court: "High Court",
    outcome: "Full Recovery Decree & Conviction Upheld",
    summary: "Successfully secured a full recovery decree of ₹1.2 Crores along with legal interest for a commercial supplier under Section 138 NI Act.",
    year: "2024"
  },
  {
    id: "case-2",
    title: "Armed Forces Tribunal (AFT) Disability Pension Relief",
    category: "AFT Service Law",
    court: "Armed Forces Tribunal",
    outcome: "Disability Pension Restored with Arrears",
    summary: "Obtained a milestone order granting full disability pension and retrospective arrears for a retired defense officer.",
    year: "2023"
  },
  {
    id: "case-3",
    title: "Family Court Matrimonial & Custody Settlement",
    category: "Family & Matrimonial",
    court: "Family Court",
    outcome: "Amicable Custody & Settlement Secured",
    summary: "Resolved a complex 6-year matrimonial dispute with complete joint custody rights and equitable property division.",
    year: "2024"
  },
  {
    id: "case-4",
    title: "Anticipatory Bail & Discharge in Economic Offense",
    category: "Criminal Defense",
    court: "High Court / Sessions Court",
    outcome: "Interim Bail Protection Granted",
    summary: "Secured immediate anticipatory bail protection for a corporate director falsely implicated in a commercial fraud allegation.",
    year: "2023"
  },
  {
    id: "case-5",
    title: "DRT Stay Order Against Bank SARFAESI Auction",
    category: "DRT Banking",
    court: "Debt Recovery Tribunal (DRT)",
    outcome: "Auction Stayed & OTS Approved",
    summary: "Halted an imminent property auction by a nationalized bank and facilitated a favorable One-Time Settlement (OTS) for the client.",
    year: "2024"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Pranab Kumar Das",
    clientTitle: "Business Enterprise Owner",
    rating: 5,
    text: "Advocate Girish Kumar Gupta Sir handled our cheque bounce recovery cases with absolute legal brilliance. His LL.M depth, 8 years of courtroom practice, and clear communication in Assamese & English achieved complete recovery.",
    caseType: "Sec 138 NI Act Recovery"
  },
  {
    id: "test-2",
    clientName: "Subhedar Major (Retd.) R. K. Baruah",
    clientTitle: "Armed Forces Veteran",
    rating: 5,
    text: "When my pension benefits were delayed, Girish Sir represented my case at the Armed Forces Tribunal. His vast legal knowledge and compassionate advocacy got my pension restored with full back-pay.",
    caseType: "AFT Service Petition"
  },
  {
    id: "test-3",
    clientName: "Meenakshi & Aniket Roy",
    clientTitle: "Corporate Professional",
    rating: 5,
    text: "Girish Gupta Sir guided us through a stressful family court matter with utmost sensitivity and professional strength. Highly respected advocate who genuinely cares for his clients.",
    caseType: "Family Court Representation"
  },
  {
    id: "test-4",
    clientName: "Vikramaditya Oberoi",
    clientTitle: "Tech Entrepreneur & Founder",
    rating: 5,
    text: "Sumeet Gupta is an enthusiastic associate lawyer. He assisted our startup through cyber compliance and helped defend us against a frivolous IP lawsuit. Energetic and dedicated.",
    caseType: "Cyber & IP Advisory"
  }
];

export const faqs: FAQ[] = [
  {
    question: "How do I schedule a consultation with Advocate Girish Kumar Gupta?",
    answer: "You can book directly using our online booking form on this website, call our desk at +91 98100 12345, or email girish.gupta@bhagwatiprasadlaw.com. We offer phone consultations, video calls, and chamber appointments.",
    category: "Consultation"
  },
  {
    question: "In which languages can I discuss my legal matter?",
    answer: "Advocate Girish Kumar Gupta is fluent in English, Assamese, Hindi, and Bengali, ensuring clear, comfortable communication for clients across diverse regions.",
    category: "Languages"
  },
  {
    question: "What courts and tribunals does Advocate Girish Kumar Gupta practice in?",
    answer: "Advocate Girish Kumar Gupta regularly appears in the High Court, District & Sessions Courts, Family Courts, Armed Forces Tribunal (AFT), and Debt Recovery Tribunal (DRT).",
    category: "Courts"
  },
  {
    question: "What documents are required for a Cheque Bounce (Sec 138 NI Act) case?",
    answer: "Please bring the original bounced cheque, bank return memo, copy of the legal notice sent, courier/speed post tracking receipt, and invoice/agreement establishing legal debt liability.",
    category: "Documentation"
  },
  {
    question: "Do you handle urgent criminal bail applications?",
    answer: "Yes, for urgent anticipatory bail, regular bail applications, or emergency High Court stay motions, our emergency desk is available at +91 99990 88776.",
    category: "Emergency"
  }
];
