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
    "Websites, web apps and brand systems for founders and small teams. Strategy, interface and engineering under one roof, so nothing is lost in a handoff.",
  openGraph: {
    title: `${SITE.name} · Web design and development`,
    description: "Fast, clear websites. Strategy, design and engineering under one roof.",
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
    "Web design and development for founders and small teams. Strategy, interface and engineering handled under one roof.",
  areaServed: "Worldwide",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={grotesk.variable}>
      <head>
        {/* last line of defence: no JavaScript, no hidden content */}
        {/* last line of defence: no JavaScript, no hidden content. Covers the
            fade, the masked heading lines and the clip-path picture reveal. */}
        <noscript>
          <style>
            {".reveal{opacity:1!important;transform:none!important}" +
              ".line{transform:none!important}" +
              ".img-reveal{clip-path:none!important}" +
              ".img-reveal img{transform:none!important}"}
          </style>
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
