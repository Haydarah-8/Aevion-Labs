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
          <h2 className="display mt-8 max-w-[16ch]">Tell us what you are building.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede prose-measure mt-8">
            Send what you are working on, roughly when you need it, and where you are
            starting from. You get a reply within two working days with honest next steps,
            an idea of cost, and a straight answer if the work would be better done
            somewhere else. No pitch deck, no discovery fee, no sequence of emails.
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
