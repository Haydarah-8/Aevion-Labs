import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Figure } from "@/components/media/Figure";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Aevion Labs is one developer who designs and builds the whole thing, because most web projects break at the handoff.",
};

export default function StudioPage() {
  return (
    <main id="main" className="section">
      <div className="shell">
        <Reveal>
          <p className="tag">Studio</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display mt-6 max-w-[20ch]">
            One developer who designs and builds the whole thing.
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-12">
          <div className="prose-measure space-y-6 sm:col-span-7">
            <Reveal delay={0.12}>
              <p className="lede">
                I started Aevion Labs after watching too many sites get designed by one
                team, built by another, and launched slower, uglier and harder to edit than
                anyone intended.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-dim">
                I am a solo developer, and that is deliberate. It keeps the work direct,
                the costs honest, and it means nothing is lost between the person who
                promised something and the person who has to build it.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-dim">
                I take a small number of projects at a time, mostly for founders and small
                teams who need a site that earns its keep rather than one that just looks
                current. If that is not you, I will say so on the first call.
              </p>
            </Reveal>
          </div>

          <dl className="space-y-6 sm:col-span-4 sm:col-start-9">
            <Reveal delay={0.14}>
              <div className="border-t border-rule pt-4">
                <dt className="tag">Founded</dt>
                <dd className="mt-1">2026</dd>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="border-t border-rule pt-4">
                <dt className="tag">Size</dt>
                <dd className="mt-1">One person</dd>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="border-t border-rule pt-4">
                <dt className="tag">Stack</dt>
                <dd className="mt-1">Next.js, TypeScript, headless CMS</dd>
              </div>
            </Reveal>
          </dl>
        </div>

        <Reveal delay={0.26}>
          <Figure
            image={IMAGES.studioDesk}
            sizes="(min-width: 640px) 78rem, 100vw"
            ratio="16 / 9"
            className="mt-16"
            caption="Where it gets built"
          />
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-16">
            <Link href="/contact" className="btn">
              Start a project
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
