import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/chrome/ContactForm";
import { SITE } from "@/lib/site";

/* The unspoken question on a contact form is 'and then what'. Answering it
   before it is asked is the cheapest friction you will ever remove. */
const NEXT = [
  { n: "01", t: "A reply within two working days", d: "Read by the person who would do the work, not routed to anyone." },
  { n: "02", t: "A call, if it looks like a fit", d: "Thirty minutes on what you are trying to achieve. No deck, no discovery fee." },
  { n: "03", t: "One fixed price", d: "A written scope and a single number. Say no and nothing has cost you anything." },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you are building. A reply within two working days, with honest next steps and an idea of cost.",
};

export default function ContactPage() {
  return (
    <main id="main" className="section">
      <div className="shell">
        <div className="grid gap-14 sm:grid-cols-12">
          <div className="sm:col-span-5">
            <Reveal>
              <p className="tag">Contact</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-6 max-w-[14ch]">Tell us what you are building.</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede prose-measure mt-8">
                Three fields, and a reply within two working days with honest next steps
                and an idea of cost. If the work would be better done somewhere else, you
                will be told that instead.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8">
                <a href={`mailto:${SITE.email}`} className="link">
                  {SITE.email}
                </a>
              </p>
            </Reveal>
          </div>

          <div className="sm:col-span-6 sm:col-start-7">
            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>

        <div className="mt-24 border-t border-rule pt-14">
          <Reveal>
            <p className="tag">What happens next</p>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="heading mt-6 max-w-[22ch]">Three steps, none of them a funnel.</h2>
          </Reveal>
          <ol className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-3">
            {NEXT.map((x, i) => (
              <li key={x.n} className="bg-paper">
                <Reveal delay={0.05 * i}>
                  <div className="flex h-full flex-col gap-3 p-6 sm:p-8">
                    <span className="tag">{x.n}</span>
                    <h3 className="text-[1.2rem] font-medium leading-tight">{x.t}</h3>
                    <p className="text-[0.96rem] text-dim">{x.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
