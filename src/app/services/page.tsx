import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { SERVICES } from "@/lib/services";
import { CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web apps, e-commerce and brand systems, designed and built as one connected system rather than bought from four suppliers.",
};

const BASELINE = [
  { n: "01", name: "A speed budget", text: "Agreed before the build starts and measured against on every page before launch." },
  { n: "02", name: "Accessibility", text: "Semantic markup, keyboard paths and contrast checked as part of the work, not sold as an audit afterwards." },
  { n: "03", name: "Your repository", text: "Code lives in your account from the first commit. No handover negotiation, because there is nothing to hand over." },
  { n: "04", name: "A CMS you control", text: "Anything you will realistically want to change is editable without a developer." },
  { n: "05", name: "Weekly review", text: "You see progress every week. A wrong direction surfaces in week two, not week eight." },
  { n: "06", name: "Documentation", text: "How it is built, how to change it, and what to do if you bring in someone else." },
];

const TERMS = [
  { k: "Fixed price", v: "One number, quoted after the first call. No hourly billing and no invoice you did not expect." },
  { k: "Two at a time", v: "Capacity is deliberately limited, so the project in front of you has attention rather than a queue position." },
  { k: "Stop whenever", v: "If you end it early, everything produced to that point is yours. No exit fee and no argument." },
];

export default function ServicesPage() {
  return (
    <main id="main" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Services</p>
        </Reveal>
        <RevealLines
          as="h1"
          lines={["Four disciplines, one roof,", "so they fit together by default."]}
          className="display mt-6 max-w-[20ch]"
          delay={0.06}
        />
        <Reveal delay={0.12}>
          <p className="lede prose mt-8">
            Most projects need two or three of these at once. Buying them separately is
            how a site ends up designed against one set of assumptions and built against
            another.
          </p>
        </Reveal>

        <ul className="mt-16 border-t border-rule">
          {SERVICES.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={0.05 * i}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid gap-3 border-b border-rule py-10 transition-colors hover:bg-sheet sm:grid-cols-12 sm:gap-6 sm:px-4"
                >
                  <div className="sm:col-span-5">
                    <h2 className="heading">{s.name}</h2>
                    <p className="eyebrow mt-3">{s.timeline}</p>
                  </div>
                  <p className="prose text-dim sm:col-span-6">{s.summary}</p>
                  <span
                    aria-hidden="true"
                    className="text-dim transition-transform group-hover:translate-x-1 sm:col-span-1 sm:justify-self-end"
                  >
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* the baseline: true of every engagement regardless of which one */}
        <div className="mt-24 border-t border-rule pt-14">
          <Reveal>
            <p className="eyebrow">Always included</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="heading mt-8 max-w-[26ch]">
              Whichever one you buy, these are not extras.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BASELINE.map((b, i) => (
              <li key={b.name}>
                <Reveal delay={0.04 * i}>
                  <div className="flex h-full flex-col gap-3 p-6 sm:p-8">
                    <span className="eyebrow">{b.n}</span>
                    <h3 className="text-[1.25rem] font-medium leading-tight">{b.name}</h3>
                    <p className="text-[0.96rem] text-dim">{b.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* how buying works, without a pricing page */}
        <div className="mt-24 border-t border-rule pt-14">
          <Reveal>
            <p className="eyebrow">How engagements work</p>
          </Reveal>
          <dl className="mt-10 grid gap-10 sm:grid-cols-3">
            {TERMS.map((t, i) => (
              <Reveal key={t.k} delay={0.05 * i}>
                <div className="border-t border-rule pt-5">
                  <dt className="text-[1.25rem] font-medium">{t.k}</dt>
                  <dd className="mt-2 text-dim">{t.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.2}>
            <div className="mt-14">
              <Link href="/contact" className="btn">{CTA}</Link>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
