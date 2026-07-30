import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICES } from "@/lib/services";

/**
 * Progressive disclosure, on native `<details>`.
 *
 * Four lines at rest, detail only for the one you ask about. The section stays
 * short for a visitor who already knows what they want and complete for one who
 * does not, without making either read the other's version.
 *
 * `<details>` rather than a bespoke accordion: keyboard operable and findable by
 * browser search for free, works with scripting off, and there is no open-state
 * machine to fall out of sync. The previous build shipped three different
 * hand-rolled accordions between them.
 *
 * Data comes from lib/services, so this list, the index, the detail pages and
 * the sitemap cannot drift apart.
 */
export function Services() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <Reveal>
          <p className="tag">02 · what we build</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="heading mt-8 max-w-[22ch]">
            four disciplines, one roof, so they fit together by default.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-rule">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={0.05 + i * 0.04}>
              <details className="group border-b border-rule">
                <summary className="flex cursor-pointer list-none items-baseline gap-5 py-7 sm:gap-8">
                  <span className="tag shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="heading flex-1">{s.name}</span>
                  <span className="hidden max-w-[34ch] text-dim lg:block">{s.summary}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[1.5rem] leading-none text-dim transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="grid gap-8 pb-9 sm:grid-cols-12">
                  <p className="prose-measure text-dim sm:col-span-6 lg:hidden">{s.summary}</p>
                  <ul className="sm:col-span-6">
                    {s.includes.map((item) => (
                      <li key={item} className="border-t border-rule-soft py-2.5 text-[1rem]">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="sm:col-span-5 sm:col-start-8">
                    <p className="tag">Typically</p>
                    <p className="mt-2 text-[1.05rem]">{s.timeline}</p>
                    <Link href={`/services/${s.slug}`} className="link mt-6 inline-block">
                      The whole picture
                    </Link>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
