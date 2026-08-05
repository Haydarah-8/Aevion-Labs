import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICES } from "@/lib/services";

/**
 * Four tiles, one line each. The detail lives on the service pages rather than
 * being crammed in here: a grid that tries to be a brochure stops being
 * scannable, and scanning is the only job this section has.
 *
 * The whole tile is the target, not just the label. Fitts's law, and it is also
 * what people try to click anyway.
 *
 * Data comes from lib/services so this grid, the index, the detail pages and
 * the sitemap cannot drift apart.
 */
export function Services() {
  return (
    <section className="section" id="services">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-center">What we build</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display measure mt-6">Everything under one roof.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede measure mt-6">
            Most projects need two or three at once. Buying them separately is how a site
            gets designed against one set of assumptions and built against another.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={0.08 + i * 0.06}>
              <Link
                href={"/services/" + s.slug}
                className="tile tile-link flex h-full flex-col justify-between gap-10"
              >
                <div>
                  <p className="eyebrow">{s.timeline}</p>
                  <h3 className="heading mt-4">{s.name}</h3>
                  <p className="body-dim mt-4">{s.summary}</p>
                </div>
                <span className="link-more">Learn more</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
