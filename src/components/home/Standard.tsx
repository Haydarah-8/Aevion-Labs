import { Reveal } from "@/components/motion/Reveal";

const COMMITMENTS = [
  {
    n: "01",
    name: "You talk to the person building it",
    text: "No account managers, no brief passed down a chain until the intent is gone. The person who scopes the project is the person who writes the code.",
  },
  {
    n: "02",
    name: "You own everything",
    text: "Code on your repository, content in a CMS you control, domain and hosting in your name. Keep me because the work is good, not because leaving is painful.",
  },
  {
    n: "03",
    name: "Fast is a feature",
    text: "Performance and accessibility are measured before launch and after, not treated as a nice to have once the design is signed off.",
  },
  {
    n: "04",
    name: "Built to be changed",
    text: "Most sites die because updating them is harder than living with them. Yours is built in components, documented, editable without calling anyone.",
  },
];

export function Standard() {
  return (
    <section className="section">
      <div className="shell">
        <Reveal>
          <p className="tag">04 · The standard</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="heading mt-8 max-w-[26ch]">
            Four commitments, in writing. The things any studio should be willing to put
            in front of you before you sign anything.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {COMMITMENTS.map((c, i) => (
            <Reveal key={c.n} delay={0.05 * i}>
              <div className="border-t border-rule pt-6">
                <span className="tag">{c.n}</span>
                <h3 className="mt-3 text-[1.4rem] font-medium leading-tight">{c.name}</h3>
                <p className="mt-3 text-dim">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
