import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  { n: "01", name: "Discovery", text: "A call about what the site has to achieve, who it is for, and what is failing now." },
  { n: "02", name: "Structure", text: "Sitemap, page by page content plan and user flows, agreed before any visual work." },
  { n: "03", name: "Design", text: "Key pages designed as a reusable system rather than one off mockups. You review as it goes." },
  { n: "04", name: "Build", text: "Built in Next.js on your own repository, with a CMS for anything you will want to edit." },
  { n: "05", name: "Launch", text: "Testing, performance and accessibility passes, analytics wired, then we go live." },
  { n: "06", name: "Support", text: "Keep me on for changes and improvements, or take the code and run it yourself." },
];

export function Process() {
  return (
    <section className="section border-t border-rule bg-sheet">
      <div className="shell">
        <Reveal>
          <p className="tag">03 · How it works</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="heading mt-8 max-w-[24ch]">
            You always know which step we are on, and what happens next.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.n} className="bg-paper">
              <Reveal delay={0.04 * i}>
                <div className="flex h-full flex-col gap-3 p-6 sm:p-8">
                  <span className="tag">{s.n}</span>
                  <h3 className="text-[1.35rem] font-medium leading-tight">{s.name}</h3>
                  <p className="text-[0.98rem] text-dim">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
