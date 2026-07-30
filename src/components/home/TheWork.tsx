import Link from "next/link";
import { Reveal, RevealLines } from "@/components/motion/Reveal";

/**
 * Proof, not apology.
 *
 * An earlier draft led with "no client list yet". True, and a bad idea: nobody
 * buys because a studio volunteers what it lacks, and saying it out loud plants
 * a doubt the visitor had not yet had. The honest and persuasive version is the
 * same set of facts pointed forwards. Claim nothing untrue. Announce nothing
 * that does not help.
 */
const PROOF = [
  {
    n: "01",
    name: "Measured in front of you",
    text: "The load time at the top of this page came from your browser, not from a screenshot taken on a good day.",
  },
  {
    n: "02",
    name: "Readable by anything",
    text: "Semantic markup, visible focus on every control, full contrast. Works on a keyboard, with a screen reader, and with scripting switched off.",
  },
  {
    n: "03",
    name: "Nothing hidden in the build",
    text: "No trackers, no third party requests, no analytics loading quietly behind the design. What arrives is what you see.",
  },
];

export function TheWork() {
  return (
    <section className="section border-t border-rule" id="work">
      <div className="shell">
        <Reveal>
          <p className="tag">05 · proof</p>
        </Reveal>

        <RevealLines
          lines={["the case study is", "the page you are on."]}
          className="display mt-8 max-w-[20ch]"
          delay={0.06}
        />

        <Reveal delay={0.12}>
          <p className="lede prose-measure mt-8">
            Portfolios ask you to trust the screenshots. Everything claimed here is
            testable from where you are standing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-rule bg-rule sm:grid-cols-3">
          {PROOF.map((item, i) => (
            <Reveal key={item.n} delay={0.05 * i}>
              <div className="flex h-full flex-col gap-3 bg-paper p-6 sm:p-8">
                <span className="tag">{item.n}</span>
                <h3 className="text-[1.35rem] font-medium leading-tight">{item.name}</h3>
                <p className="text-[0.98rem] text-dim">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <p className="mt-10">
            <Link href="/work" className="link text-[1.05rem]">
              Read the full case study
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
