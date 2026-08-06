import { Reveal } from "@/components/motion/Reveal";

const COMMITMENTS = [
  {
    n: "01",
    name: "You talk to the person building it",
    text: "No account managers, no brief passed down a chain until the intent is gone. The person who scopes the project writes the code.",
  },
  {
    n: "02",
    name: "You own everything",
    text: "Code on your repository, content in a CMS you control, domain and hosting in your name. Keep us because the work is good, not because leaving is painful.",
  },
  {
    n: "03",
    name: "Fast is a feature",
    text: "Performance and accessibility are measured before launch and after, not treated as a nice to have once the design is signed off.",
  },
  {
    n: "04",
    name: "Built to be changed",
    text: "Most sites die because updating them is harder than living with them. Yours is built in components, documented, and editable without calling anyone.",
  },
];

export function Standard() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">The standard</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display measure mt-6">
            Four commitments, in writing, before you sign anything.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {COMMITMENTS.map((c, i) => (
            <Reveal key={c.n} delay={0.06 * i}>
              <div className="tile h-full">
                <span className="eyebrow plain num">{c.n}</span>
                <h3 className="mt-4 text-[1.4rem] font-semibold leading-tight tracking-[-0.02em]">
                  {c.name}
                </h3>
                <p className="body-dim mt-3">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
