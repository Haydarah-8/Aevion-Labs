import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { SERVICES, SERVICE_SLUGS, getService } from "@/lib/services";

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

  return (
    <main id="main" className="section">
      <div className="shell">
        <Reveal>
          <p className="tag">Services · {service.timeline}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display mt-6 max-w-[18ch]">{service.name}</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede prose-measure mt-8">{service.intro}</p>
        </Reveal>

        <div className="mt-16 grid gap-10 border-t border-rule pt-10 sm:grid-cols-12">
          <p className="tag sm:col-span-4">What is included</p>
          <ul className="sm:col-span-8">
            {service.includes.map((item, i) => (
              <Reveal key={item} delay={0.04 * i}>
                <li className="border-b border-rule py-4 text-[1.05rem]">{item}</li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6">
          <Link href="/contact" className="btn">
            Start a project
          </Link>
          <Link href="/services" className="link">
            All services
          </Link>
        </div>

        <div className="mt-20 border-t border-rule pt-10">
          <p className="tag">Also</p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="link text-[1.15rem]">
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
