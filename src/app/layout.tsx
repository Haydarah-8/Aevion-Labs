import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/chrome/SiteNav";
import { SiteFooter } from "@/components/chrome/SiteFooter";
import { SITE } from "@/lib/site";

const grotesk = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · Web design and development`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "I design and build fast, clear websites for founders and small teams. One person, start to finish, so nothing is lost in a handoff.",
  openGraph: {
    title: `${SITE.name} · Web design and development`,
    description: "Fast, clear websites. Designed and built by one person, start to finish.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description:
    "Web design and development for founders and small teams. Strategy, interface and engineering handled by one person.",
  areaServed: "Worldwide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={grotesk.variable}>
      <head>
        {/* last line of defence: no JavaScript, no hidden content */}
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-dvh flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteNav />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
