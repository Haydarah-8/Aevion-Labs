import Link from "next/link";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { TalkLink } from "@/components/chrome/TalkModal";

/* Authored line breaks: a splitting library rewrites the markup it is given,
   which is how a heading ends up nested inside itself. */
const HEADLINE = ["A website that", "earns its place."];

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
          <p className="eyebrow centred">Web design and development</p>
        </Reveal>

        <RevealLines
          as="h1"
          lines={HEADLINE}
          className="display-xl measure-wide centred mt-7"
          delay={0.06}
        />

        <Reveal delay={0.14}>
          <p className="lede measure centred mt-7">
            Fast to load. Clear to read. Easy to change yourself. Built by the person you
            actually speak to.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            <TalkLink className="btn btn-lg" />
            <Link href="/review" className="link-more">
              Get a free review of your site
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
