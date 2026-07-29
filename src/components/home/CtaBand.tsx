import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="section border-t border-rule">
      <div className="shell">
        <Reveal>
          <p className="tag">07 · Next</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display mt-8 max-w-[16ch]">Tell me what you are building.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede prose-measure mt-8">
            Send a note with what you are working on, roughly when you need it, and where
            you are starting from. I read every enquiry myself and reply within two working
            days with honest next steps, including if I think you would be better served
            elsewhere.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href="/contact" className="btn">
              Start a project
            </Link>
            <a href={`mailto:${SITE.email}`} className="link">
              {SITE.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
