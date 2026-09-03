import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhagwati Prasad & Associates | Advocates & Legal Consultants",
  description: "Premier law firm portfolio of Senior Advocate Girish Gupta & Managing Partner Sumeet Gupta. Specializing in High Court & Supreme Court Writs, Civil Property Disputes, Commercial Arbitration, and Criminal Defense.",
  keywords: ["Bhagwati Prasad & Associates", "Girish Gupta Advocate", "Sumeet Gupta Lawyer", "High Court Lawyers Delhi", "Supreme Court Advocates", "Civil Property Partition Lawyer", "Commercial Arbitration Advocates"],
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
