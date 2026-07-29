import Link from "next/link";
import { NAV, SITE, SOCIALS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule bg-sheet">
      <div className="shell py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="heading max-w-[18ch]">{SITE.tagline}</p>
            <a href={`mailto:${SITE.email}`} className="link mt-6 inline-block text-[1.05rem]">
              {SITE.email}
            </a>
          </div>

          <div>
            <p className="tag mb-4">Pages</p>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-dim transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-dim transition-colors hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* The socials column only exists once the accounts do. */}
          {SOCIALS.length > 0 && (
            <div>
              <p className="tag mb-4">Elsewhere</p>
              <ul className="space-y-2">
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
            </div>
          )}

          <div>
            <p className="tag mb-4">Admin</p>
            <ul className="space-y-2 text-dim">
              <li>
                <a href={`mailto:${SITE.general}`} className="transition-colors hover:text-ink">
                  {SITE.general}
                </a>
              </li>
              <li>Remote, working with UK and EU time zones</li>
            </ul>
          </div>
        </div>

        <hr className="rule my-10" />

        <div className="flex flex-wrap items-center justify-between gap-4 text-[0.85rem] text-dim">
          <p>
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p>Designed and built in house.</p>
        </div>
      </div>
    </footer>
  );
}
