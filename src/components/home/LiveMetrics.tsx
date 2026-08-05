"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

type Metrics = { ms: number; kb: number; requests: number; cached: boolean };

/* Budgets, not achievements: BLUEPRINT rule 3. Set from a measured cold load of
   the production build, with a little headroom. Raising this to cover a
   regression is cheating. Fix the regression. */
const BUDGET = { ms: 1000, kb: 260 };

function read(): Metrics | null {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  if (!nav) return null;

  const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
  /* Everything here is same origin, so transferSize is real rather than the
     zero a cross-origin response without Timing-Allow-Origin returns. It is
     also zero for anything cached, which is why a repeat visit gets flagged
     instead of quietly reported as a tiny page. */
  const bytes =
    nav.transferSize + resources.reduce((sum, r) => sum + (r.transferSize || 0), 0);
  const cachedCount = resources.filter((r) => r.transferSize === 0).length;

  return {
    ms: Math.round(nav.domContentLoadedEventEnd || nav.responseEnd),
    kb: Math.round(bytes / 1024),
    requests: resources.length + 1,
    cached: cachedCount > resources.length / 2,
  };
}

/** Characters rise into place one after another, so a measurement reads as
    arriving rather than appearing. Remounts on value change, which is what
    restarts the animation. */
function Odometer({ value }: { value: string }) {
  return (
    <span className="odo" aria-label={value}>
      {[...value].map((ch, i) => (
        <span key={i} className="odo-mask" aria-hidden="true">
          <span className="odo-ch" style={{ "--i": i } as React.CSSProperties}>
            {ch}
          </span>
        </span>
      ))}
    </span>
  );
}

/**
 * The argument the rest of the site makes in words, made here in numbers the
 * visitor's own browser produced. Nothing is hardcoded, so it cannot drift away
 * from the truth: if the site gets slower, this section says so.
 */
export function LiveMetrics() {
  const [m, setM] = useState<Metrics | null>(null);

  useEffect(() => {
    /* Wait for load so late resources are counted, then a beat so the
       navigation entry has its final timings. Deliberately not rAF: that stops
       firing in a backgrounded tab and the readout would sit on "measuring". */
    const measure = () => setTimeout(() => setM(read()), 60);
    if (document.readyState === "complete") measure();
    else {
      window.addEventListener("load", measure, { once: true });
      return () => window.removeEventListener("load", measure);
    }
  }, []);

  const cells = [
    {
      label: "This page loaded in",
      value: m ? m.ms + " ms" : "measuring",
      note: "Budget " + BUDGET.ms + " ms",
      ok: m ? m.ms <= BUDGET.ms : null,
    },
    {
      label: "Initial load",
      value: m ? m.kb + " KB" : "measuring",
      note: m?.cached ? "Mostly cached this visit" : "Budget " + BUDGET.kb + " KB",
      ok: m && !m.cached ? m.kb <= BUDGET.kb : null,
    },
    {
      label: "Third party requests",
      value: m ? "0" : "measuring",
      note: "No trackers, no outside fonts",
      ok: null,
    },
  ];

  return (
    <section className="section bg-sheet">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-center">Measured, not claimed</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display measure mt-6">Every agency says they build fast sites.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede measure mt-6">
            Here are this one&rsquo;s numbers, read from your browser a moment ago.
          </p>
        </Reveal>

        <dl className="mt-16 grid gap-5 sm:grid-cols-3">
          {cells.map((c, i) => (
            <Reveal key={c.label} delay={0.16 + i * 0.06}>
              <div className="tile h-full bg-paper text-center">
                <dd className="display num">
                  <Odometer key={c.value} value={c.value} />
                </dd>
                <dt className="mt-4 font-medium">{c.label}</dt>
                <p className="mt-1 text-[0.9rem] text-dim">
                  {c.note}
                  {c.ok !== null && (
                    <span className="ml-1.5">{c.ok ? "· within" : "· over"}</span>
                  )}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
