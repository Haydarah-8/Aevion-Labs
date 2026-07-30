"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA, NAV, SITE } from "@/lib/site";

/**
 * One ruled bar, per BLUEPRINT rule 4. Sticky rather than fixed so it can never
 * cover content, and `aria-current` marks the active route for a screen reader
 * as well as for the eye.
 *
 * The hairline under it doubles as a scroll progress indicator, driven by
 * `animation-timeline: scroll()`. No listener, no frame loop.
 */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <nav className="shell flex h-20 items-center justify-between" aria-label="Primary">
        <Link href="/" className="wordmark">
          {SITE.name}
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      "nav-link " + (active ? "text-ink" : "text-dim hover:text-ink")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className="btn px-5 py-3 text-[0.85rem] uppercase tracking-[0.1em]">{CTA}</Link>
        </div>
      </nav>

      {/* fills left to right as the document scrolls */}
      <div className="scroll-progress" aria-hidden="true" />
    </header>
  );
}
