import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Aevion Labs is new and has no client work to show yet. Here is what you can judge the studio on instead.",
};

/** Deliberately empty of case studies. See TheWork on the homepage: inventing
    a client list is the one thing that would make everything else unbelievable. */
export default function WorkPage() {
  return (
    <main id="main" className="section">
      <div className="shell">
        <Reveal>
          <p className="tag">Work</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display mt-6 max-w-[16ch]">Nothing to show you yet.</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede prose-measure mt-8">
            Aevion Labs is new. There is no client list, no case study and no testimonial
            on this page, because there is not yet an honest one to put here. When there
            is, it will arrive with real numbers next to it: what the site weighed before,
            what it weighs now, and what changed as a result.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="lede prose-measure mt-6">
            Until then, the most useful thing I can show you is this site. Its load time
            and page weight are measured live on the homepage, against a published budget.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn">
              Be the first project
            </Link>
            <Link href="/" className="btn btn-ghost">
              See the numbers
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
