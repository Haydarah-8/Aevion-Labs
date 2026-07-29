"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, SITE } from "@/lib/site";

/**
 * One ruled bar, per BLUEPRINT rule 4. Sticky rather than fixed so it can never
 * cover content, and `aria-current` marks the active route for screen readers
 * as well as for the eye.
 */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-sm">
      <nav className="shell flex h-14 items-center justify-between" aria-label="Primary">
        <Link href="/" className="text-[0.95rem] font-medium tracking-tight">
          {SITE.name}
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
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

          <Link href="/contact" className="btn px-4 py-2 text-[0.9rem]">
            Start a project
          </Link>
        </div>
      </nav>
    </header>
  );
}
