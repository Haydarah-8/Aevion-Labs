import Link from "next/link";
import { NAV, SITE, SOCIALS } from "@/lib/site";

/**
 * Quiet by design. The footer's job is to be findable, not to be another
 * chance to sell: everything persuasive already happened one section up, and
 * repeating the pitch here would only dilute it.
 */
export function SiteFooter() {
  return (
    <footer className="mt-auto bg-sheet">
      <div className="shell-wide py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[0.95rem] font-semibold uppercase tracking-[0.16em]">
              {SITE.name}
            </p>
            <p className="body-dim mt-4 max-w-[26ch] text-[1.05rem]">{SITE.tagline}</p>
            <a href={"mailto:" + SITE.email} className="link-more mt-6">
              {SITE.email}
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow">Pages</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-dim transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/review" className="text-dim transition-colors hover:text-ink">
                  Free site review
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dim transition-colors hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow">Admin</p>
            <ul className="mt-5 space-y-3 text-dim">
              <li>
                <a href={"mailto:" + SITE.general} className="transition-colors hover:text-ink">
                  {SITE.general}
                </a>
              </li>
              <li>Remote, UK and EU hours</li>
            </ul>

            {/* The socials column only exists once the accounts do. */}
            {SOCIALS.length > 0 && (
              <ul className="mt-5 space-y-3">
                {SOCIALS.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      className="text-dim transition-colors hover:text-ink"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8 text-[0.85rem] text-dim">
          <p>
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p>Designed and built in house.</p>
        </div>
      </div>
    </footer>
  );
}
