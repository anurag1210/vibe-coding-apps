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
  name: "Bhagawati Legal Consultants & Advocates",
  shortName: "Bhagawati Legal",
  legacy: "Carrying forward the legal heritage of Late Advocate Bhagawati Prasad (District Court Nagaon)",
  tagline: "Guwahati High Court & Appellate Legal Advocacy",
  heroSubtitle: "A sole proprietary concern of Advocate Sumeet Gupta, carrying forward the legal heritage of Late Bhagawati Prasad (District Court Nagaon) and Senior Advocate Girish Kumar Gupta (Guwahati High Court). Comprehensive legal representation across Guwahati High Court, DRT, AFT, Family Court, CJM Court, and District & Sessions Courts of Assam.",
  stats: [
    { label: "Generations of Legal Heritage", value: "3" },
    { label: "Jurisdiction & Reach", value: "Guwahati High Court & Assam" },
    { label: "Tribunals & Forums", value: "DRT, AFT, Family, MACT & CJM" },
    { label: "Consultation Mode", value: "By Appointment" },
  ],
  contact: {
    address: "18, Santipath, 3rd Bye Lane, Mathuranagar, P.O. Assam Sachivalaya, Guwahati - 781006",
    landmark: "Backside of Down Town Hospital",
    chamberCity: "Guwahati",
    phone: "+91 70020 69417",
    sumeetPhone: "+91 70020 69417",
    email: "advocatesumeetg@gmail.com",
    sumeetEmail: "advocatesumeetg@gmail.com",
    girishEmail: "mrgkgupta@gmail.com",
    hours: "By Appointment",
  }
};

export const attorneys: Attorney[] = [
  {
    id: "sumeet-gupta",
    name: "Advocate Sumeet Gupta",
    role: "Sole Proprietor & Practicing Advocate",
    experience: "Sole Proprietor | Guwahati High Court & Assam Courts",
    image: "/sumeet-gupta.png",
    education: [
      "B.A. LL.B (Honours)",
      "Advocate - Guwahati High Court Bar Association",
      "Specialized in Appellate Advocacy & Tribunal Litigation"
    ],
    barEnrollment: "Guwahati High Court Bar Association",
    courts: [
      "Guwahati High Court",
      "Debt Recovery Tribunal (DRT)",
      "Armed Forces Tribunal (AFT)",
      "Family Court Guwahati",
      "CJM Court & District & Sessions Court Guwahati",
      "Motor Accident Claims Tribunal (MACT)"
    ],
    specialties: [
      "Service Matters (Guwahati High Court)",
      "Bail Matters & Criminal Defense",
      "Debt Recovery Tribunal (DRT)",
      "Armed Forces Tribunal (AFT)",
      "Cheque Bouncing (Sec 138 NI Act)",
      "Family & Matrimonial Disputes",
      "MACT Compensation Claims",
      "Commercial Arbitration & Agreements"
    ],
    languages: ["English", "Assamese", "Hindi"],
    bio: "Advocate Sumeet Gupta is the Sole Proprietor of Bhagawati Legal Consultants & Advocates. Carrying forward the esteemed legal heritage of his grandfather, Late Advocate Bhagawati Prasad (who practiced in District Court Nagaon), and his father Advocate Girish Kumar Gupta (practicing advocate in Guwahati High Court). He has successfully tackled cases on Service matters and Bail matters in Guwahati High Court, as well as matters in the Debt Recovery Tribunal (DRT), Armed Forces Tribunal (AFT), Family Court, Cheque bouncing under Sec 138, and criminal cases in the CJM Court & District & Sessions Court Guwahati. In addition, the firm handles MACT cases and miscellaneous matters like Land Registration, Marriage Registration, Succession and Next of kin Certificates, Arbitration Matters, and Drafting of agreements.",
    achievements: [
      "Sole Proprietor heading Bhagawati Legal Consultants & Advocates",
      "Successful representation in Service and Bail petitions before Guwahati High Court",
      "Active litigation before DRT, Armed Forces Tribunal (AFT), and Family Court",
      "Advisory and documentation for Land, Marriage, Succession, and Commercial Agreements"
    ],
    quote: "Every legal matter deserves relentless statutory preparation, courtroom precision, and an honest commitment to safeguarding the client's rights.",
    phone: "+91 70020 69417",
    email: "advocatesumeetg@gmail.com"
  },
  {
    id: "girish-gupta",
    name: "Advocate Girish Kumar Gupta",
    role: "Senior Advocate & Counsel",
    experience: "Senior Practicing Advocate | Guwahati High Court",
    image: "/girish-gupta.jpg",
    education: [
      "Master of Laws (LL.M)",
      "Bachelor of Laws (LL.B)",
      "Senior Member - Guwahati High Court Bar Association"
    ],
    barEnrollment: "Guwahati High Court Bar Association",
    courts: [
      "Guwahati High Court",
      "District & Sessions Courts of Assam",
      "Appellate Tribunals"
    ],
    specialties: [
      "Appellate Civil & Criminal Litigation",
      "Constitutional & High Court Writs",
      "Commercial & Land Disputes",
      "Strategic Legal Advisory & Arbitration"
    ],
    languages: ["English", "Assamese", "Hindi"],
    bio: "Advocate Girish Kumar Gupta is a senior practicing advocate in the Guwahati High Court with a Master of Laws (LL.M). Son of Late Advocate Bhagawati Prasad (who practiced in District Court Nagaon) and father of Advocate Sumeet Gupta, he brings decades of courtroom wisdom, statutory mastery, and appellate litigation experience to the practice.",
    achievements: [
      "Decades of seasoned legal practice before the Guwahati High Court",
      "Master of Laws (LL.M) with deep jurisprudential authority",
      "Extensive record across complex civil, criminal, and constitutional appellate matters",
      "Guiding senior counsel for Bhagawati Legal Consultants & Advocates"
    ],
    quote: "The cornerstone of justice lies in the uncompromising fidelity to statutory law and unwavering advocacy for truth.",
    phone: "+91 70020 69417",
    email: "mrgkgupta@gmail.com"
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: "service-matters-high-court",
    title: "Service Matters (Guwahati High Court)",
    description: "Legal representation in government and public sector service disputes, promotion appeals, termination challenges, pension withholdings, and administrative writ petitions.",
    icon: "Scale",
    subCategories: ["High Court Service Writs", "Seniority & Promotion Appeals", "Disciplinary Proceedings Defense", "Pension & Arrears Claims"],
    leadAttorney: "Advocate Sumeet Gupta & Adv. Girish Kumar Gupta"
  },
  {
    id: "bail-criminal-defense",
    title: "Bail Matters & Criminal Defense",
    description: "Anticipatory bail and regular bail proceedings before the Guwahati High Court, CJM Court, and District & Sessions Court Guwahati, with FIR quashing and defense advocacy.",
    icon: "ShieldAlert",
    subCategories: ["Anticipatory Bail (High Court & Sessions)", "Regular Bail Applications", "CJM Court Trial Representation", "FIR & Chargesheet Defense"],
    leadAttorney: "Advocate Sumeet Gupta"
  },
  {
    id: "drt-debt-recovery",
    title: "Debt Recovery Tribunal (DRT) & SARFAESI",
    description: "Defending borrowers and handling financial disputes before the Debt Recovery Tribunal (DRT), SARFAESI stay petitions, and structured debt resolution.",
    icon: "Landmark",
    subCategories: ["DRT Stay Applications", "SARFAESI Counter-Measures", "Bank Recovery Defenses", "OTS Settlement Negotiation"],
    leadAttorney: "Advocate Sumeet Gupta"
  },
  {
    id: "aft-defense-service",
    title: "Armed Forces Tribunal (AFT)",
    description: "Dedicated advocacy before the Armed Forces Tribunal (AFT) for military personnel and defense veterans regarding disability pensions, promotions, and service grievances.",
    icon: "Gavel",
    subCategories: ["AFT Disability Pension Appeals", "Armed Forces Service Grievances", "Court Martial Appeals", "Post-Retirement Arrears"],
    leadAttorney: "Advocate Sumeet Gupta"
  },
  {
    id: "family-court-matrimonial",
    title: "Family Court & Matrimonial Matters",
    description: "Sensitive and robust legal representation in mutual and contested divorce proceedings, child custody, maintenance petitions, and restitution of conjugal rights in Family Court.",
    icon: "HeartHandshake",
    subCategories: ["Mutual & Contested Divorce", "Child Custody & Guardianship", "Maintenance & Alimony Claims", "Family Settlement Deeds"],
    leadAttorney: "Advocate Sumeet Gupta"
  },
  {
    id: "cheque-bouncing-138",
    title: "Cheque Bouncing (Sec 138 NI Act)",
    description: "Swift legal action and defense under Section 138 of the Negotiable Instruments Act, including drafting statutory legal notices, filing complaints, and trial advocacy.",
    icon: "Briefcase",
    subCategories: ["Section 138 NI Act Statutory Notices", "Complaint Filing & Prosecution", "Trial Defense & Settlement", "Financial Recovery Decrees"],
    leadAttorney: "Advocate Sumeet Gupta"
  },
  {
    id: "mact-claims",
    title: "Motor Accident Claims (MACT)",
    description: "Dedicated representation before the Motor Accident Claims Tribunal (MACT) for accident victims and families to secure fair, statutory compensation awards.",
    icon: "Building2",
    subCategories: ["MACT Claim Petition Filing", "Third-Party Insurance Claims", "Fatal & Severe Injury Compensation", "Appeals against Award Inadequacy"],
    leadAttorney: "Advocate Sumeet Gupta"
  },
  {
    id: "arbitration-agreements",
    title: "Arbitration & Agreement Drafting",
    description: "Comprehensive commercial arbitration representation and meticulous drafting of business contracts, commercial agreements, partnership deeds, and NDAs.",
    icon: "Lock",
    subCategories: ["Commercial Arbitration Proceedings", "Contract & Agreement Drafting", "Partnership & Joint Venture Deeds", "Legal Notice Drafting"],
    leadAttorney: "Advocate Sumeet Gupta"
  },
  {
    id: "land-marriage-registration",
    title: "Land & Marriage Registration",
    description: "Assistance with land title verifications, deed executions, land registrations, and legal solemnization and registration of marriages under applicable marriage acts.",
    icon: "CheckCircle2",
    subCategories: ["Land Title Search & Verification", "Sale Deed Execution & Registration", "Court Marriage Registration", "Special Marriage Act Formalities"],
    leadAttorney: "Advocate Sumeet Gupta"
  },
  {
    id: "succession-next-of-kin",
    title: "Succession & Next of Kin Certificates",
    description: "Legal documentation and court petitions for Succession Certificates, Next of Kin Certificates, Legal Heirship, and probate of wills across Assam courts.",
    icon: "Building2",
    subCategories: ["Succession Certificate Petitions", "Next of Kin / Legal Heir Certificates", "Probate of Wills & Letters of Admin", "Asset Inheritance Formalities"],
    leadAttorney: "Advocate Sumeet Gupta"
  }
];

export const caseResults: CaseResult[] = [
  {
    id: "case-1",
    title: "Guwahati High Court Service Matter Writ",
    category: "Service Law",
    court: "Guwahati High Court",
    outcome: "Relief & Service Rights Upheld",
    summary: "Successfully secured favorable directions from the Guwahati High Court protecting employee service seniority and legitimate entitlement benefits.",
    year: "Guwahati H.C."
  },
  {
    id: "case-2",
    title: "Urgent High Court & Sessions Bail Motions",
    category: "Criminal Defense",
    court: "Guwahati High Court & Sessions Court",
    outcome: "Anticipatory & Regular Bail Secured",
    summary: "Successfully argued critical anticipatory bail and regular bail applications, shielding clients from unlawful custody and procedural overreach.",
    year: "Assam Courts"
  },
  {
    id: "case-3",
    title: "Debt Recovery Tribunal (DRT) Defense",
    category: "DRT Banking",
    court: "Debt Recovery Tribunal (DRT)",
    outcome: "Stay Granted & Restructured Resolution",
    summary: "Appeared before the Debt Recovery Tribunal to defend commercial borrowers against harsh recovery actions and obtained vital interim protections.",
    year: "DRT"
  },
  {
    id: "case-4",
    title: "Armed Forces Tribunal (AFT) Pension Relief",
    category: "Defense Service",
    court: "Armed Forces Tribunal (AFT)",
    outcome: "Pension Grievance Resolved Favorably",
    summary: "Represented defense personnel before the Armed Forces Tribunal, achieving restoration of rightful pension entitlements and service recognition.",
    year: "AFT"
  },
  {
    id: "case-5",
    title: "Cheque Bouncing Sec 138 NI Act Recovery",
    category: "Commercial Recovery",
    court: "CJM & Judicial Magistrate Courts",
    outcome: "Full Recovery & Decree Secured",
    summary: "Successfully prosecuted negotiable instrument default proceedings under Section 138 NI Act, securing full recovery of dues for the client.",
    year: "CJM Court"
  },
  {
    id: "case-6",
    title: "Family Court Matrimonial & Custody Settlement",
    category: "Family Law",
    court: "Family Court Guwahati",
    outcome: "Amicable Resolution & Protection Granted",
    summary: "Handled complex family court proceedings with legal sensitivity, achieving an equitable settlement and safeguarding client welfare.",
    year: "Family Court"
  }
];

export const testimonials: Testimonial[] = [];

export const faqs: FAQ[] = [];
