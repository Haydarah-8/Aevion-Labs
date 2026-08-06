"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CTA, NAV, SITE } from "@/lib/site";

/**
 * One bar, per BLUEPRINT rule 4. Sticky rather than fixed so it can never cover
 * content, translucent with a blur so the page reads as continuing underneath.
 *
 * The links were previously `hidden sm:flex` with nothing behind them, which
 * meant that on a phone the only reachable page from the header was the contact
 * form. Everything else was unreachable unless you scrolled to the footer. This
 * adds the menu that was missing.
 *
 * Kept deliberately plain: a button that toggles a panel, Escape to close,
 * focus returned to the button afterwards, and the route change closing it.
 * No portal, no focus trap library, no scroll lock. It is nine links.
 */
export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuRoute, setMenuRoute] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  /* A route change should never leave the menu hanging open over the new page.
     Adjusted during render rather than in an effect: an effect would paint the
     open menu over the new route for a frame first, and React flags the
     cascading render it causes. */
  if (menuRoute !== pathname) {
    setMenuRoute(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/80 backdrop-blur-xl">
      <nav className="shell-wide flex h-16 items-center justify-between" aria-label="Primary">
        <Link
          href="/"
          className="text-[0.95rem] font-semibold uppercase tracking-[0.16em] whitespace-nowrap"
        >
          {SITE.name}
        </Link>

        <div className="flex items-center gap-4 sm:gap-7">
          <ul className="hidden items-center gap-7 sm:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={
                    "text-[0.9rem] transition-colors " +
                    (isActive(item.href) ? "text-ink" : "text-dim hover:text-ink")
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn px-5 py-2.5 text-[0.9rem]">
            {CTA}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-1 flex h-10 w-10 items-center justify-center sm:hidden"
          >
            {/* two bars that become a cross, so the control says what it will do */}
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span
                className={
                  "absolute left-0 block h-px w-5 bg-ink transition-transform duration-300 " +
                  (open ? "top-2 rotate-45" : "top-1")
                }
              />
              <span
                className={
                  "absolute left-0 block h-px w-5 bg-ink transition-transform duration-300 " +
                  (open ? "top-2 -rotate-45" : "top-3")
                }
              />
            </span>
          </button>
        </div>
      </nav>

      <div className="scroll-progress" aria-hidden="true" />

      {/* Rendered only when open: a hidden menu that is still in the tab order
          is worse than no menu, and `hidden` on a parent is easy to get wrong. */}
      {open && (
        <div id="mobile-menu" className="border-t border-rule bg-paper sm:hidden">
          <ul className="shell-wide py-4">
            {[...NAV, { label: "Free site review", href: "/review" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={
                    "block py-3.5 text-[1.15rem] transition-colors " +
                    (isActive(item.href) ? "text-ink" : "text-dim")
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
