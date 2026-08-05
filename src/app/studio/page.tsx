import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealLines } from "@/components/motion/Reveal";
import { Figure } from "@/components/media/Figure";
import { IMAGES } from "@/lib/images";
import { CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "One studio for strategy, design and engineering, because most web projects break at the handoff rather than at the build.",
};

/* Saying plainly what a studio will not take on is rarer than another list of
   what it will, and it reads as confidence rather than as a limitation. */
const NOT_THIS = [
  { n: "01", name: "Templates dressed up", text: "No theme bought, recoloured and sold on as bespoke. If a template is genuinely the right answer for your budget, you will be told to buy one and shown which." },
  { n: "02", name: "Design by committee", text: "One decision maker on your side. Work reviewed by six people arrives back as an average of six opinions and pleases none of them." },
  { n: "03", name: "Rescue jobs mid flight", text: "Taking over somebody else's half-built project usually costs more than starting again and never satisfies anyone." },
  { n: "04", name: "Lock-in of any kind", text: "No proprietary CMS, no hosting you cannot leave, no retainer required to keep the lights on." },
];

const STACK = [
  { k: "Framework", v: "Next.js, React, TypeScript" },
  { k: "Styling", v: "Tailwind, design tokens" },
  { k: "Content", v: "Headless CMS, your account" },
  { k: "Hosting", v: "Vercel or your own infrastructure" },
  { k: "Payments", v: "Stripe" },
  { k: "Analytics", v: "Privacy first, or none at all" },
];

const WEEK = [
  { d: "Monday", t: "Priorities for the week agreed in writing. Ten minutes, not a meeting." },
  { d: "Midweek", t: "Build continues against them. Questions go out as they come up rather than being saved for a call." },
  { d: "Friday", t: "A working link, not a screenshot. You click through what changed and say what is wrong." },
];

export default function StudioPage() {
  return (
    <main id="main" className="section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">Studio</p>
        </Reveal>
        <RevealLines
          as="h1"
          lines={["Most web projects break", "at the handoff.", "This one has none."]}
          className="display mt-6 max-w-[20ch]"
          delay={0.06}
        />

        <div className="mt-12 grid gap-10 sm:grid-cols-12">
          <div className="prose space-y-6 sm:col-span-7">
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
                <dt className="eyebrow">Founded</dt>
                <dd className="mt-1">2026</dd>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="border-t border-rule pt-4">
                <dt className="eyebrow">Model</dt>
                <dd className="mt-1">One studio, no subcontractors</dd>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="border-t border-rule pt-4">
                <dt className="eyebrow">Stack</dt>
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

        {/* ——— what the studio turns down ——— */}
        <div className="mt-28 border-t border-rule pt-14">
          <Reveal>
            <p className="eyebrow">01 · What we do not do</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="heading mt-8 max-w-[24ch]">
              Four kinds of work that go somewhere else.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {NOT_THIS.map((x, i) => (
              <Reveal key={x.n} delay={0.05 * i}>
                <div className="border-t border-rule pt-6">
                  <span className="eyebrow">{x.n}</span>
                  <h3 className="mt-3 text-[1.35rem] font-medium leading-tight">{x.name}</h3>
                  <p className="mt-3 text-dim">{x.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ——— the week, so nobody wonders what is happening ——— */}
        <div className="mt-28 border-t border-rule pt-14">
          <Reveal>
            <p className="eyebrow">02 · How a week runs</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="heading mt-8 max-w-[26ch]">
              You are never more than five days from seeing something real.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-3">
            {WEEK.map((w, i) => (
              <li key={w.d} className="bg-paper">
                <Reveal delay={0.05 * i}>
                  <div className="flex h-full flex-col gap-3 p-6 sm:p-8">
                    <span className="eyebrow">{w.d}</span>
                    <p className="text-[1.02rem]">{w.t}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* ——— the tools, named ——— */}
        <div className="mt-28 border-t border-rule pt-14">
          <Reveal>
            <p className="eyebrow">03 · What it is built with</p>
          </Reveal>
          <Reveal delay={0.04}>
            <h2 className="heading mt-8 max-w-[24ch]">
              Boring tools, chosen so anyone can pick this up.
            </h2>
          </Reveal>
          <dl className="mt-10 grid gap-x-12 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {STACK.map((x, i) => (
              <Reveal key={x.k} delay={0.04 * i}>
                <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-3">
                  <dt className="eyebrow">{x.k}</dt>
                  <dd className="text-right text-[1.02rem]">{x.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.24}>
            <p className="prose mt-8 text-[0.95rem] text-dim">
              Boring on purpose. Every one of these is something another developer can pick
              up without a handover call, which matters more than whatever is fashionable
              this year.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.28}>
          <div className="mt-24 border-t border-rule pt-14">
            <Link href="/contact" className="btn">{CTA}</Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
