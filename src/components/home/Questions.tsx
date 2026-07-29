import { Reveal } from "@/components/motion/Reveal";

const QA = [
  {
    q: "What does a site cost?",
    a: "Every project is quoted as one fixed price after the first call. No hourly billing, no surprise invoices. Tell me the budget you have and I will tell you honestly what is achievable inside it, or say if it is not enough.",
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
    q: "Why one person and not an agency?",
    a: "Because most web projects break at the handoff. One person costs less, moves faster and cannot lose the intent between the pitch and the build. The trade off is capacity: I take a small number of projects at a time.",
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
          <p className="tag">06 · Before you ask</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="heading mt-8 max-w-[20ch]">
            The questions everybody asks on the first call.
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
