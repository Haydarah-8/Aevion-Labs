import Link from "next/link";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { CTA } from "@/lib/site";

/* Authored line breaks: a splitting library rewrites the markup it is given,
   which is how a heading ends up nested inside itself. */
const HEADLINE = ["Websites, apps and brands", "built like they matter."];

/**
 * Centred, and almost empty. Everything above the fold is one eyebrow, one
 * headline, one sentence and one action, in that order and nothing else.
 *
 * The temptation is to put the proof up here too. It belongs one screen down:
 * a hero that tries to say four things says none of them.
 */
export function Hero() {
  return (
    <section className="section-lg pt-24 sm:pt-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-center">Web design and development</p>
        </Reveal>

        <RevealLines
          as="h1"
          lines={HEADLINE}
          className="display-xl measure-wide mt-7"
          delay={0.06}
        />

        <Reveal delay={0.14}>
          <p className="lede measure mt-7">
            Strategy, interface and engineering under one roof. Fast on the first visit,
            easy to change on the hundredth.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            <Link href="/contact" className="btn btn-lg">
              {CTA}
            </Link>
            <Link href="/work" className="link-more">
              See the standard first
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
