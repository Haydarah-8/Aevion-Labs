import { Reveal, RevealLines } from "@/components/motion/Reveal";

/**
 * Self-recognition, placed immediately after the hero while attention is still
 * highest.
 *
 * These are symptoms in the visitor's own words, not services in ours. Someone
 * who reads two of them and thinks "that is my site" has diagnosed the problem
 * themselves, and a conclusion you reached yourself is worth more than the same
 * conclusion argued at you. It also qualifies: anyone who recognises none of
 * these is not a buyer, and both of us find that out in ten seconds.
 *
 * The closing line is the only place the cost is named, and it is named once.
 */
const SYMPTOMS = [
  "Changing a phone number means emailing whoever built it.",
  "It looks fine on your laptop and wrong in your hand.",
  "You pay for ads that land on a page nobody waits for.",
  "You would rather describe your business than send the link.",
];

export function Recognition() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Sound familiar</p>
        </Reveal>

        <RevealLines
          lines={["Four signs a website", "is costing more than it returns."]}
          className="display measure mt-6"
          delay={0.06}
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2">
          {SYMPTOMS.map((s, i) => (
            <li key={s}>
              <Reveal delay={0.06 * i}>
                <div className="tile tile-tight flex h-full items-start gap-4">
                  <span className="eyebrow plain num mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[1.0625rem] leading-snug">{s}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <p className="lede measure mt-12">
            Recognise two and the site is already costing you work. The good news is that
            none of them are expensive to fix.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
