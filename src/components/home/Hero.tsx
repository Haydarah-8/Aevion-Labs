import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

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

        <Reveal delay={0.06}>
          <h1 className="display-xl mt-6 max-w-[16ch]">{SITE.tagline}</h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="lede prose-measure mt-8">
            Strategy, interface and engineering under one roof, so nothing is lost in a
            handoff and nobody has to wait three weeks for a headline change. Built to be
            fast on the first visit and easy to change on the hundredth.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn">
              Start a project
            </Link>
            <Link href="/studio" className="btn btn-ghost">
              How it works
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
