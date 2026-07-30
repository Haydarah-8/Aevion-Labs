import Link from "next/link";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { CTA } from "@/lib/site";

/* Authored line breaks: a splitting library rewrites the markup it is given,
   which is how a heading ends up nested inside itself. */
const HEADLINE = ["websites, apps and brands", "built like they matter."];

const FACTS = [
  { k: "Discipline", v: "Strategy, design, build" },
  { k: "Access", v: "Direct to who builds it" },
  { k: "Typical site", v: "Four to eight weeks" },
  { k: "Capacity", v: "Two projects at a time" },
];

/**
 * No loader, no wordmark takeover, no scroll hint. Three questions answered in
 * the first screen: what this is, who it is for, and what to do next.
 *
 * The facts sit on a ruled strip at the foot of the screen rather than in the
 * reading column. It gives the type above room to be the only thing happening,
 * and it puts something concrete at the fold for the reader who scans before
 * they read.
 */
export function Hero() {
  return (
    <section className="section-lg pt-20 sm:pt-28">
      <div className="shell">
        <div className="flex items-baseline justify-between gap-6">
          <Reveal>
            <p className="tag">Web design and development</p>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="tag hidden sm:block">Est. 2026 · Remote</p>
          </Reveal>
        </div>

        <RevealLines
          as="h1"
          lines={HEADLINE}
          className="display-xl mt-10 max-w-[15ch]"
          delay={0.06}
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-12">
          <Reveal delay={0.12} className="sm:col-span-6 lg:col-span-5">
            <p className="lede">
              Strategy, interface and engineering under one roof. Fast on the first visit,
              easy to change on the hundredth.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="sm:col-span-5 sm:col-start-8">
            <div className="flex flex-wrap items-center gap-8">
              <Link href="/contact" className="btn btn-lg">
                {CTA}
              </Link>
              <Link href="/work" className="link text-dim">
                See the standard first
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* full-bleed rule, so the strip reads as the floor of the screen rather
          than as another card inside the column */}
      <div className="mt-20 border-y border-rule sm:mt-28">
        <div className="shell">
          <dl className="grid grid-cols-2 divide-rule sm:grid-cols-4 sm:divide-x">
            {FACTS.map((f, i) => (
              <Reveal key={f.k} delay={0.24 + i * 0.05}>
                <div className="py-7 sm:px-6 sm:first:pl-0">
                  <dt className="tag">{f.k}</dt>
                  <dd className="mt-2 text-[1.05rem] leading-snug">{f.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
