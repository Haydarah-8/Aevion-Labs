import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { Figure } from "@/components/media/Figure";
import { IMAGES } from "@/lib/images";
import { BUDGET } from "@/lib/site";
import { TalkLink } from "@/components/chrome/TalkModal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A case study of this site: the decisions, the trade-offs and the measured result. Every claim in it is testable from the page you are on.",
};

/**
 * The work page is a real case study of a real build, with real numbers, rather
 * than either a fabricated client list or an apology for not having one.
 * Absence of clients is never mentioned: it is not a selling point and it is
 * not the visitor's problem.
 */
const DECISIONS = [
  {
    n: "01",
    call: "No animation library",
    why: "One fade and a short rise is the whole motion vocabulary here. Shipping a library for that costs about 70 KB of JavaScript to do what four lines of CSS already do.",
    result: "70 KB removed. Motion now collapses under reduced-motion settings whether or not the page has finished hydrating.",
  },
  {
    n: "02",
    call: "No smooth scroll",
    why: "Smooth-scroll libraries put a delay between the wheel and the page. It reads as luxury in a screen recording and as lag in the hand, and it degrades find-on-page and keyboard scrolling.",
    result: "Native scroll. Nothing sits between the visitor and their input device.",
  },
  {
    n: "03",
    call: "Ten sections, not seventy",
    why: "Each section has to answer a question a buyer actually has. Anything that only answered 'what else could go here' was cut before it shipped.",
    result: "The page ends, and people reach the bottom of it.",
  },
  {
    n: "04",
    call: "A published speed budget",
    why: "Anyone can call a site fast. A budget printed on the page and checked against a live measurement cannot be quietly missed.",
    result: BUDGET.kb + " KB and one second, read from the Performance API on every visit.",
  },
  {
    n: "05",
    call: "Photography that costs nothing until it is wanted",
    why: "Images are the heaviest thing on most sites and most of them are never scrolled to. Every picture here is lazy, responsive, and sized per breakpoint.",
    result: "Zero image bytes in the initial load, so the published figure stays honest.",
  },
  {
    n: "06",
    call: "Works without JavaScript",
    why: "Reveal animations that depend on script are reveal animations that hide your content permanently the day script fails.",
    result: "A timer failsafe and a noscript override. Text on this site cannot end up invisible.",
  },
];

const NUMBERS = [
  { v: BUDGET.kb + " KB", k: "Published budget", n: "Measured live on the homepage, every visit" },
  { v: "0", k: "Third party requests", n: "No trackers, no fonts from elsewhere" },
  { v: "0", k: "Layout shift", n: "Every image reserves its space first" },
  { v: "100%", k: "Keyboard reachable", n: "Visible focus on every control" },
];

export default function WorkPage() {
  return (
    <main id="main">
      <section className="section pb-0">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Case study · 2026</p>
          </Reveal>
          <RevealLines
            as="h1"
            lines={["The best evidence available", "is the page you are standing on."]}
            className="display mt-6 max-w-[18ch]"
            delay={0.06}
          />
          <Reveal delay={0.12}>
            <p className="lede prose mt-8">
              Most portfolios ask you to take the screenshots on trust. This one does not
              need you to. Every decision below is visible in the thing you are reading it
              on, and every number is measurable from your own browser, right now.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Figure image={IMAGES.interlude} sizes="(min-width: 640px) 78rem, 100vw" ratio="21 / 9" />
        </div>
      </section>

      <section className="py-16">
        <div className="shell">
          <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {NUMBERS.map((x, i) => (
              <Reveal key={x.k} delay={0.05 * i}>
                <div>
                  <dd className="display num">{x.v}</dd>
                  <dt className="eyebrow mt-3">{x.k}</dt>
                  <p className="mt-1 text-[0.9rem] text-dim">{x.n}</p>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">The decisions</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="heading mt-8 max-w-[26ch]">
              Six calls, and what each one cost or saved.
            </h2>
          </Reveal>

          <ol className="mt-14 border-t border-rule">
            {DECISIONS.map((d, i) => (
              <li key={d.n}>
                <Reveal delay={0.04 * i}>
                  <div className="grid gap-4 border-b border-rule py-9 sm:grid-cols-12 sm:gap-6">
                    <span className="eyebrow sm:col-span-1">{d.n}</span>
                    <h3 className="text-[1.4rem] font-medium leading-tight sm:col-span-4">
                      {d.call}
                    </h3>
                    <div className="sm:col-span-7">
                      <p className="text-dim">{d.why}</p>
                      <p className="mt-3 border-l border-rule pl-4 text-[0.98rem]">{d.result}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <RevealLines
            lines={["This is the standard", "your project starts from."]}
            className="display max-w-[20ch]"
          />
          <Reveal delay={0.08}>
            <p className="lede prose mt-8">
              None of it is a premium tier or a stretch goal. It is simply what leaving the
              studio looks like. Bring a real problem to the first call and you will get a
              straight answer about whether it can be solved and what it takes.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-10 flex flex-wrap gap-3">
              <TalkLink />
              <Link href="/services" className="btn btn-quiet">
                What that covers
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
