import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/chrome/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell me what you are building. I reply within two working days.",
};

export default function ContactPage() {
  return (
    <main id="main" className="section">
      <div className="shell">
        <div className="grid gap-14 sm:grid-cols-12">
          <div className="sm:col-span-5">
            <Reveal>
              <p className="tag">Contact</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-6 max-w-[14ch]">Tell me what you are building.</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede prose-measure mt-8">
                Three fields. I read every enquiry myself and reply within two working days
                with honest next steps, including if I think you would be better served
                elsewhere.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8">
                <a href={`mailto:${SITE.email}`} className="link">
                  {SITE.email}
                </a>
              </p>
            </Reveal>
          </div>

          <div className="sm:col-span-6 sm:col-start-7">
            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
