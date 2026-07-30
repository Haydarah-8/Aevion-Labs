import Link from "next/link";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { CTA, SITE } from "@/lib/site";

/**
 * The closing beat, and the only inverted surface on the site.
 *
 * Not a dark theme: BLUEPRINT rule 1 stands, there is no toggle and no
 * prefers-color-scheme branching anywhere. `.invert` redefines the colour
 * tokens on this subtree, so every `bg-paper`, `text-ink` and `border-rule`
 * inside flips without a single component knowing about it. The result is the
 * highest-contrast thing on the page, which is where the peak-end rule says the
 * ask belongs.
 */
export function CtaBand() {
  return (
    <section className="invert section-lg">
      <div className="shell">
        <div className="flex items-baseline justify-between gap-6">
          <Reveal>
            <p className="tag">07 · next</p>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="tag hidden sm:block">Two working days</p>
          </Reveal>
        </div>

        <RevealLines
          lines={["so, what", "are you building?"]}
          className="display-xl mt-10 max-w-[13ch]"
          delay={0.06}
        />

        <div className="mt-16 grid gap-10 border-t border-rule pt-10 sm:grid-cols-12">
          <Reveal delay={0.12} className="sm:col-span-5">
            <p className="lede">
              A reply in two working days with honest next steps and an idea of cost. No
              deck, no discovery fee, no sequence of emails.
            </p>
          </Reveal>

          <Reveal delay={0.18} className="sm:col-span-6 sm:col-start-7">
            <div className="flex flex-wrap items-center gap-8">
              <Link href="/contact" className="btn btn-lg">
                {CTA}
              </Link>
              <a href={`mailto:${SITE.email}`} className="link text-dim">
                {SITE.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
