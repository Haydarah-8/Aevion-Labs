import Link from "next/link";
import { Reveal, RevealLines } from "@/components/motion/Reveal";

/**
 * Proof, not apology.
 *
 * An earlier draft led with "no client list yet". True, and a bad idea: nobody
 * buys because a studio volunteers what it lacks, and saying it out loud plants
 * a doubt the visitor had not yet had. Same facts, pointed forwards. Claim
 * nothing untrue. Announce nothing that does not help.
 */
const PROOF = [
  {
    n: "01",
    name: "Measured in front of you",
    text: "The load time above came from your browser, not from a screenshot taken on a good day.",
  },
  {
    n: "02",
    name: "Readable by anything",
    text: "Semantic markup, visible focus, full contrast. Works on a keyboard, with a screen reader, and with scripting off.",
  },
  {
    n: "03",
    name: "Nothing hidden in the build",
    text: "No trackers, no third party requests, no analytics loading quietly behind the design.",
  },
];

export function TheWork() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-center">Proof</p>
        </Reveal>

        <RevealLines
          lines={["The case study is", "the page you are on."]}
          className="display measure mt-6"
          delay={0.06}
        />

        <Reveal delay={0.12}>
          <p className="lede measure mt-6">
            Portfolios ask you to trust the screenshots. Everything claimed here is
            testable from where you are standing.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {PROOF.map((item, i) => (
            <Reveal key={item.n} delay={0.06 * i}>
              <div className="tile tile-tight h-full">
                <span className="eyebrow num">{item.n}</span>
                <h3 className="mt-4 text-[1.25rem] font-semibold leading-tight tracking-[-0.02em]">
                  {item.name}
                </h3>
                <p className="body-dim mt-3 text-[1rem]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.26}>
          <p className="mt-12 text-center">
            <Link href="/work" className="link-more">
              Read the full case study
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
