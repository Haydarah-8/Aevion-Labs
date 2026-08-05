import type { Metadata } from "next";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/chrome/ContactForm";

export const metadata: Metadata = {
  title: "Free site review",
  description:
    "Send your website address and get an honest written review back within two working days. Three things holding it back, in plain English. No charge and no obligation.",
};

/**
 * The low-commitment entry point.
 *
 * A first conversation is a large ask from a stranger. This is a small one: a
 * website address, no call, no meeting, nothing to prepare. Reciprocity does
 * the rest, and the review itself is the proof of competence that a studio
 * without a client list otherwise has no way to offer.
 *
 * IMPORTANT: everything promised on this page has to be delivered, personally,
 * within two working days. If that stops being realistic, take the page down
 * rather than letting the promise rot.
 */
const GET = [
  {
    n: "01",
    name: "What is slowing it down",
    text: "Measured, not guessed: load time, page weight, and the specific things costing you the most seconds.",
  },
  {
    n: "02",
    name: "What it looks like on a phone",
    text: "Where the layout breaks, what is unreadable, and what a customer has to do to reach you.",
  },
  {
    n: "03",
    name: "The one change worth making first",
    text: "Ranked by what it costs against what it returns. Often it is not a rebuild.",
  },
];

export default function ReviewPage() {
  return (
    <main id="main">
      <section className="section-lg pt-24 sm:pt-32">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-center">Free, no obligation</p>
          </Reveal>

          <RevealLines
            as="h1"
            lines={["Send your website.", "Get an honest review back."]}
            className="display-xl measure-wide mt-7"
            delay={0.06}
          />

          <Reveal delay={0.14}>
            <p className="lede measure mt-7">
              Three things holding your site back, in plain English, within two working
              days. No call, no meeting, nothing to prepare.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-sheet">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-center">What you get back</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display measure mt-6">Written, specific, and yours to keep.</h2>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {GET.map((g, i) => (
              <Reveal key={g.n} delay={0.06 * i}>
                <div className="tile h-full bg-paper">
                  <span className="eyebrow num">{g.n}</span>
                  <h3 className="mt-4 text-[1.25rem] font-semibold leading-tight tracking-[-0.02em]">
                    {g.name}
                  </h3>
                  <p className="body-dim mt-3 text-[1rem]">{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Naming the catch is what makes the absence of one believable. */}
          <Reveal delay={0.26}>
            <p className="lede measure mt-14">
              The catch, in full: if it looks like something worth working on together, you
              will be told so at the end. If it does not, you will be told that instead and
              the review is still yours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <h2 className="display text-center">Where should it go?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12">
                <ContactForm
                  briefLabel="Your website address"
                  briefPlaceholder="yourbusiness.co.uk, and anything you already suspect is wrong with it"
                  submitLabel="Send it over"
                  source="review"
                  confirmation="Your review will land within two working days."
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
