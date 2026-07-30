import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <main id="main" className="section">
      <div className="shell">
        <Reveal>
          <p className="tag">Services</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display mt-6 max-w-[20ch]">
            Four disciplines, one roof, so they fit together by default.
          </h1>
        </Reveal>

        <ul className="mt-16 border-t border-rule">
          {SERVICES.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={0.05 * i}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid gap-3 border-b border-rule py-10 transition-colors hover:bg-sheet sm:grid-cols-12 sm:gap-6 sm:px-4"
                >
                  <div className="sm:col-span-5">
                    <h2 className="heading">{s.name}</h2>
                    <p className="tag mt-3">{s.timeline}</p>
                  </div>
                  <p className="prose-measure text-dim sm:col-span-6">{s.summary}</p>
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
    </main>
  );
}
