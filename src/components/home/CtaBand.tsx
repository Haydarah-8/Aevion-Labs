import Link from "next/link";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { CTA, SITE } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="section border-t border-rule">
      <div className="shell">
        <Reveal>
          <p className="tag">07 · next</p>
        </Reveal>
        <RevealLines
          lines={["so, what", "are you building?"]}
          className="display mt-8 max-w-[16ch]"
          delay={0.06}
        />
        <Reveal delay={0.12}>
          <p className="lede prose-measure mt-8">
            A reply in two working days with honest next steps and an idea of cost. No
            deck, no discovery fee, no sequence of emails.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <Link href="/contact" className="btn btn-lg">{CTA}</Link>
            <a href={`mailto:${SITE.email}`} className="link">
              {SITE.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
