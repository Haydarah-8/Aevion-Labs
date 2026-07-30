"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

type Metrics = { ms: number; kb: number; requests: number; cached: boolean };

/* Budgets, not achievements: BLUEPRINT rule 3. Set from a measured cold load of
   the production build (about 240 KB gzip, of which 43 KB is the webfont and
   most of the rest is the React and Next runtime), with a little headroom.
   Raising this to cover a regression is cheating. Fix the regression. */
const BUDGET = { ms: 1000, kb: 260 };

function read(): Metrics | null {
  const nav = performance.getEntriesByType("navigation")[0] as
    | PerformanceNavigationTiming
    | undefined;
  if (!nav) return null;

  const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
  /* Everything here is same origin, so transferSize is a real figure rather
     than the zero a cross-origin response without Timing-Allow-Origin gives.
     It is also zero for anything the browser had cached, which is why a repeat
     visit is flagged rather than quietly reported as a tiny page. */
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

/**
 * The argument the rest of the site makes in words, made here in numbers that
 * the visitor's own browser produced. Nothing is hardcoded, so it cannot drift
 * away from the truth: if the site gets slower, this section says so.
 */
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

export function LiveMetrics() {
  const [m, setM] = useState<Metrics | null>(null);

  useEffect(() => {
    /* wait for load so late resources are counted, then a beat so the
       navigation entry has its final timings. Deliberately not rAF: that stops
       firing in a backgrounded or non compositing tab and the readout would
       sit on "measuring" forever. */
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
      value: m ? `${m.ms} ms` : "measuring",
      note: `Budget ${BUDGET.ms} ms`,
      ok: m ? m.ms <= BUDGET.ms : null,
    },
    {
      label: "Initial load",
      value: m ? `${m.kb} KB` : "measuring",
      note: m?.cached ? "Mostly from cache this visit" : `Budget ${BUDGET.kb} KB`,
      ok: m && !m.cached ? m.kb <= BUDGET.kb : null,
    },
    {
      label: "Requests",
      value: m ? String(m.requests) : "measuring",
      note: "Everything same origin",
      ok: null,
    },
  ];

  return (
    <section className="section border-y border-rule bg-sheet">
      <div className="shell">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <p className="tag">01 · measured, not claimed</p>
            <p className="tag">read from your browser just now</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="heading mt-8 max-w-[24ch]">
            every agency says they build fast sites. here are this one&rsquo;s numbers.
          </h2>
        </Reveal>

        <dl className="mt-12 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-3">
          {cells.map((c, i) => (
            <Reveal key={c.label} delay={0.1 + i * 0.06}>
              <div className="h-full bg-paper p-6 sm:p-8">
                <dt className="tag">{c.label}</dt>
                <dd className="display mt-4 tabular-nums">
                  <Odometer key={c.value} value={c.value} />
                </dd>
                <p className="mt-3 text-[0.9rem] text-dim">
                  {c.note}
                  {c.ok !== null && (
                    <span className="ml-2">{c.ok ? "· within" : "· over"}</span>
                  )}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={0.3}>
          <p className="prose-measure mt-8 text-[0.95rem] text-dim">
            Read from the Performance API on this visit, not screenshotted on a good day.
            No third party scripts, no tracking, no font from someone else&rsquo;s domain.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
