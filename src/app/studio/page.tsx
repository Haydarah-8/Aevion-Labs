import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { Figure } from "@/components/media/Figure";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "One studio for strategy, design and engineering, because most web projects break at the handoff rather than at the build.",
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
            Most web projects break at the handoff. This one has none.
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-12">
          <div className="prose-measure space-y-6 sm:col-span-7">
            <Reveal delay={0.12}>
              <p className="lede">
                Aevion Labs exists because too many sites get designed by one team, built
                by another, and launched slower, uglier and harder to edit than anyone
                intended. Every one of those failures happens in the gap between people.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-dim">
                So there is no gap. The same hands take a project from the first call to
                the deploy, which keeps the work direct, the costs honest, and the intent
                intact from the thing that was promised to the thing that ships.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-dim">
                Two projects run at a time, no more, mostly for founders and small teams
                who need a site that earns its keep rather than one that merely looks
                current. If that is not the brief, you will hear so on the first call.
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
                <dt className="tag">Model</dt>
                <dd className="mt-1">One studio, no subcontractors</dd>
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
