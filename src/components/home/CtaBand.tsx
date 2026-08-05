import Link from "next/link";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { CTA, SITE } from "@/lib/site";

/**
 * The closing beat, and the only inverted surface on the site.
 *
 * Not a dark theme: BLUEPRINT rule 1 stands, no toggle and no
 * prefers-color-scheme branching anywhere. `.invert` redefines the colour
 * tokens on this subtree, so every child flips without knowing about it. The
 * white pill on black is the highest contrast element on the page, which is
 * where the peak-end rule says the ask belongs.
 */
export function CtaBand() {
  return (
    <section className="invert section-lg">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-center">Next</p>
        </Reveal>

        <RevealLines
          lines={["So, what", "are you building?"]}
          className="display-xl measure mt-6"
          delay={0.06}
        />

        <Reveal delay={0.14}>
          <p className="lede measure mt-7">
            A reply in two working days with honest next steps and an idea of cost. No
            deck, no discovery fee, no sequence of emails.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            <Link href="/contact" className="btn btn-lg">
              {CTA}
            </Link>
            <a href={"mailto:" + SITE.email} className="link-more">
              {SITE.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
