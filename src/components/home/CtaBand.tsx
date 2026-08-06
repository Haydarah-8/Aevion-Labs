import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";
import { TalkLink } from "@/components/chrome/TalkModal";

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
          <p className="eyebrow centred">Next</p>
        </Reveal>

        <RevealLines
          lines={["So, what", "are you building?"]}
          className="display-xl measure centred mt-6"
          delay={0.06}
        />

        <Reveal delay={0.14}>
          <p className="lede measure centred mt-7">
            Two working days to a reply, with honest next steps and an idea of cost. No
            deck. No discovery fee. No sequence of emails.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
            <TalkLink className="btn btn-lg" />
            <a href={"mailto:" + SITE.email} className="link-more">
              {SITE.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
