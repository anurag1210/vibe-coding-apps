import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhagawati Legal Consultants & Advocates | Guwahati High Court & Assam",
  description: "Bhagawati Legal Consultants & Advocates is a sole proprietary concern of Advocate Sumeet Gupta, continuing the legal heritage of Late Bhagawati Prasad (District Court Nagaon) and Senior Advocate Girish Kumar Gupta. Comprehensive legal advocacy in Guwahati High Court, DRT, AFT, Family Court, CJM Court, and District & Sessions Courts across Assam.",
  keywords: ["Bhagawati Legal Consultants & Advocates", "Advocate Sumeet Gupta", "Advocate Girish Kumar Gupta", "Guwahati High Court Advocates", "Guwahati Lawyers", "Service Matters Guwahati High Court", "Bail Matters High Court Assam", "DRT Guwahati", "AFT Guwahati", "Family Court Guwahati", "MACT Assam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('bp_theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-legal-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-gold-500 selection:text-slate-950 transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
