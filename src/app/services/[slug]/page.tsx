import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { Figure } from "@/components/media/Figure";
import { SERVICE_IMAGES } from "@/lib/images";
import { SERVICES, SERVICE_SLUGS, getService } from "@/lib/services";
import { CTA } from "@/lib/site";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== slug);
  const image = SERVICE_IMAGES[slug];

  return (
    <main id="main">
      <section className="section pb-0">
        <div className="shell">
          <Reveal>
            <p className="tag">Services · {service.timeline}</p>
          </Reveal>
          <RevealLines as="h1" lines={[service.name]} className="display mt-6" delay={0.06} />
          <Reveal delay={0.12}>
            <p className="lede prose-measure mt-8">{service.intro}</p>
          </Reveal>
        </div>
      </section>

      {image && (
        <section className="section pb-0">
          <div className="shell">
            <Figure image={image} sizes="(min-width: 640px) 78rem, 100vw" ratio="16 / 9" />
          </div>
        </section>
      )}

      {/* Symptoms in the buyer's own words. If they recognise two, this is
          their page, and they worked that out themselves rather than being
          told. */}
      <section className="section">
        <div className="shell">
          <Reveal>
            <p className="tag">01 · Signs this is the one</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="heading mt-8 max-w-[24ch]">
              Recognise two of these and we should talk.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-2">
            {service.signs.map((sign, i) => (
              <li key={sign} className="bg-paper">
                <Reveal delay={0.04 * i}>
                  <p className="flex gap-4 p-6 text-[1.05rem] sm:p-8">
                    <span className="tag shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                    {sign}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section border-t border-rule bg-sheet">
        <div className="shell grid gap-12 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <Reveal>
              <p className="tag">02 · What is included</p>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="heading mt-6">The scope, in full</h2>
            </Reveal>
            <ul className="mt-8 border-t border-rule">
              {service.includes.map((item, i) => (
                <Reveal key={item} delay={0.04 * i}>
                  <li className="border-b border-rule py-4 text-[1.05rem]">{item}</li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Naming what is out of scope up front is worth more than one more
              bullet of what is in it. Nobody gets surprised in week six. */}
          <div className="sm:col-span-4 sm:col-start-9">
            <Reveal delay={0.1}>
              <p className="tag">03 · What is not</p>
            </Reveal>
            <Reveal delay={0.14}>
              <h2 className="mt-6 text-[1.3rem] font-medium leading-tight">
                Out of scope, on purpose
              </h2>
            </Reveal>
            <ul className="mt-8 border-t border-rule">
              {service.excludes.map((item, i) => (
                <Reveal key={item} delay={0.1 + 0.04 * i}>
                  <li className="border-b border-rule py-4 text-[0.98rem] text-dim">{item}</li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal>
            <p className="tag">04 · What you end up with</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display mt-8 max-w-[22ch]">{service.outcome}</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link href="/contact" className="btn">{CTA}</Link>
              <Link href="/work" className="link">
                See the standard it ships against
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-rule">
        <div className="shell">
          <Reveal>
            <p className="tag">Also built here</p>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="heading mt-6">The other three</h2>
          </Reveal>
          <ul className="mt-10 border-t border-rule">
            {others.map((o, i) => (
              <li key={o.slug}>
                <Reveal delay={0.05 * i}>
                  <Link
                    href={`/services/${o.slug}`}
                    className="group grid gap-3 border-b border-rule py-7 transition-colors hover:bg-sheet sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4"
                  >
                    <span className="text-[1.5rem] font-medium sm:col-span-4">{o.name}</span>
                    <span className="text-dim sm:col-span-7">{o.summary}</span>
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
    </main>
  );
}
