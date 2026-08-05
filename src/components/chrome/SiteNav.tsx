"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA, NAV, SITE } from "@/lib/site";

/**
 * One bar, per BLUEPRINT rule 4. Sticky rather than fixed so it can never cover
 * content, translucent with a blur so the page reads as continuing underneath
 * it, and `aria-current` marks the active route for a screen reader as well as
 * for the eye.
 *
 * The hairline under it doubles as a reading progress indicator, driven by
 * `animation-timeline: scroll()`. No listener, no frame loop.
 */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/80 backdrop-blur-xl">
      <nav className="shell-wide flex h-16 items-center justify-between" aria-label="Primary">
        <Link
          href="/"
          className="text-[0.95rem] font-semibold uppercase tracking-[0.16em] whitespace-nowrap"
        >
          {SITE.name}
        </Link>

        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 sm:flex">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      "text-[0.9rem] transition-colors " +
                      (active ? "text-ink" : "text-dim hover:text-ink")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className="btn px-5 py-2.5 text-[0.9rem]">
            {CTA}
          </Link>
        </div>
      </nav>

      {/* fills left to right as the document scrolls */}
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
