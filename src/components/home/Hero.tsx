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
 * the first screen: what this is, who it is for, what to do next.
 */
export function Hero() {
  return (
    <section className="section pt-16 sm:pt-24">
      <div className="shell">
        <Reveal>
          <p className="tag">Web design and development</p>
        </Reveal>

        <RevealLines
          as="h1"
          lines={HEADLINE}
          className="display-xl mt-6 max-w-[16ch]"
          delay={0.06}
        />

        <Reveal delay={0.12}>
          <p className="lede prose-measure mt-8">
            Strategy, interface and engineering under one roof. Fast on the first visit,
            easy to change on the hundredth.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link href="/contact" className="btn btn-lg">{CTA}</Link>
            <Link href="/work" className="link text-dim">
              See the standard first
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rule pt-8 lg:grid-cols-4">
            {FACTS.map((f) => (
              <div key={f.k}>
                <dt className="tag">{f.k}</dt>
                <dd className="mt-2 text-[1.05rem]">{f.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
