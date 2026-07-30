import { Reveal } from "@/components/motion/Reveal";

const QA = [
  {
    q: "What does a site cost?",
    a: "Every project is quoted as one fixed price after the first call. No hourly billing, no surprise invoices. Say what the budget is and you will get an honest answer about what fits inside it, or a straight no if it does not stretch far enough.",
  },
  {
    q: "How long does it take?",
    a: "A typical marketing site runs four to eight weeks from first call to launch. The build is rarely the bottleneck. Waiting on copy and photography usually is, so we agree that schedule up front.",
  },
  {
    q: "What happens after launch?",
    a: "You get a walkthrough of how to edit everything yourself. Keep me on a retainer for changes if it is useful, and if it is not, the site runs perfectly well without me.",
  },
  {
    q: "What happens if it goes wrong?",
    a: "You see the work every week rather than at the end, so a wrong direction surfaces in week two and not week eight. If you decide to stop at any point, everything produced up to then is yours: designs, code, repository access, no argument and no exit fee.",
  },
  {
    q: "What do you need from me?",
    a: "Roughly four hours across the whole project: one call at the start, a review each week, and a decision when one is needed. Copy and photography are the usual bottleneck, so if you have them ready the schedule holds.",
  },
];

/**
 * Native `details` elements. Keyboard accessible, works without JavaScript, and
 * needs no accordion state machine. The old build shipped three different
 * hand rolled accordions.
 */
export function Questions() {
  return (
    <section className="section border-t border-rule bg-sheet">
      <div className="shell">
        <Reveal>
          <p className="tag">06 · before you ask</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="heading mt-8 max-w-[20ch]">
            the things worth knowing before you send anything.
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-rule">
          {QA.map((item, i) => (
            <Reveal key={item.q} delay={0.04 * i}>
              <details className="group border-b border-rule">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 text-[1.2rem] font-medium">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-dim transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="prose-measure pb-7 text-dim">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
