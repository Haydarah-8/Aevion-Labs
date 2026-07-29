import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The honest version of a case study section.
 *
 * BLUEPRINT rule 3: no invented history, no client names, no testimonials. The
 * previous build broke that rule eight times over. Saying "nothing yet" plainly
 * is more persuasive than a fabricated client list, because every visitor has
 * seen a fabricated client list before.
 */
const INSTEAD = [
  {
    n: "01",
    name: "This site",
    text: "Its numbers are at the top of this page, measured live rather than screenshotted. Judge the build by the thing you are standing in.",
  },
  {
    n: "02",
    name: "The standard",
    text: "Four commitments, written down above, in plain language. Hold me to them.",
  },
  {
    n: "03",
    name: "A conversation",
    text: "Bring a real problem to the first call. You will get a straight answer about whether I can solve it, including when I cannot.",
  },
];

export function TheWork() {
  return (
    <section className="section border-t border-rule" id="work">
      <div className="shell">
        <Reveal>
          <p className="tag">05 · The work</p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="display mt-8 max-w-[18ch]">
            No client list yet.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="lede prose-measure mt-8">
            Aevion Labs is new. I could fill this page with invented logos and five star
            quotes from people who do not exist, and you would probably recognise them for
            what they are. So here is the truth instead, and three things you can judge me
            on in the meantime.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-rule bg-rule sm:grid-cols-3">
          {INSTEAD.map((item, i) => (
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
            <Link href="/contact" className="link text-[1.05rem]">
              Be the first one
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
