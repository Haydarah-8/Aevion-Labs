import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  { n: "01", name: "Discovery", text: "A call about what the site has to achieve, who it is for, and what is failing now." },
  { n: "02", name: "Structure", text: "Sitemap, content plan and user flows, agreed before any visual work begins." },
  { n: "03", name: "Design", text: "Key pages designed as a reusable system, not one off mockups. You review as it goes." },
  { n: "04", name: "Build", text: "Built in Next.js on your own repository, with a CMS for anything you will edit." },
  { n: "05", name: "Launch", text: "Testing, performance and accessibility passes, analytics wired, then live." },
  { n: "06", name: "Support", text: "Keep us on for changes, or take the code and run it yourself." },
];

export function Process() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-center">How it works</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display measure mt-6">You always know which step we are on.</h2>
        </Reveal>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={0.05 * i}>
                <div className="tile tile-tight flex h-full flex-col gap-3">
                  <span className="eyebrow num">{s.n}</span>
                  <h3 className="text-[1.35rem] font-semibold leading-tight tracking-[-0.02em]">
                    {s.name}
                  </h3>
                  <p className="body-dim text-[1rem]">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
