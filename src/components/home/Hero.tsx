import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

const FACTS = [
  { k: "Discipline", v: "Design and build" },
  { k: "Team", v: "One person, end to end" },
  { k: "Typical site", v: "Four to eight weeks" },
  { k: "Availability", v: "Taking work now" },
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
            I design and build fast, clear websites for founders and small teams. One
            person, start to finish, so nothing is lost between the person who promised it
            and the person who has to build it.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn">
              Start a project
            </Link>
            <Link href="/studio" className="btn btn-ghost">
              How I work
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
