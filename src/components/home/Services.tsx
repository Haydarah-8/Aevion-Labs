import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

const SERVICES = [
  {
    n: "01",
    slug: "websites",
    name: "Websites",
    text: "Marketing sites that load fast, say the right thing first, and stay editable by your own team.",
  },
  {
    n: "02",
    slug: "web-apps",
    name: "Web apps",
    text: "Dashboards, portals and internal tools. Designed around the job, not around a template.",
  },
  {
    n: "03",
    slug: "e-commerce",
    name: "E-commerce",
    text: "Storefronts built phone first, with a checkout that asks for as little as possible.",
  },
  {
    n: "04",
    slug: "brand-systems",
    name: "Brand systems",
    text: "The type, colour and component rules underneath, so page ten costs a fraction of page one.",
  },
];

export function Services() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <Reveal>
          <p className="tag">02 · What we build</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="heading mt-8 max-w-[22ch]">
            Four disciplines, one roof, so they fit together by default.
          </h2>
        </Reveal>

        <ul className="mt-14 border-t border-rule">
          {SERVICES.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={0.05 + i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid gap-4 border-b border-rule py-8 transition-colors hover:bg-sheet sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4"
                >
                  <span className="tag sm:col-span-1">{s.n}</span>
                  <span className="heading sm:col-span-4">{s.name}</span>
                  <span className="prose-measure text-dim sm:col-span-6">{s.text}</span>
                  <span
                    aria-hidden="true"
                    className="text-dim transition-transform group-hover:translate-x-1 sm:col-span-1 sm:justify-self-end"
                  >
                    &rarr;
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
