"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { ContactForm } from "@/components/chrome/ContactForm";
import { CTA, SITE } from "@/lib/site";

/**
 * The ask, without leaving the page.
 *
 * Navigating to a contact page costs the visitor their place in whatever
 * convinced them to click. A dialog keeps the argument on screen behind them,
 * which is the whole reason this pattern is worth having.
 *
 * Built on the native `<dialog>` element rather than a headless UI library.
 * `showModal()` gives focus trapping, Escape to close, the top layer, an inert
 * background and a `::backdrop` for free, all of it implemented by the browser
 * and better than a hand-rolled version. It also costs zero bytes, which
 * matters on a site that publishes its own weight.
 *
 * `/contact` stays a real page: it is linkable, indexable, and the fallback for
 * anyone arriving without JavaScript.
 */
type Ctx = { open: () => void };

const TalkContext = createContext<Ctx>({ open: () => {} });

export function useTalk() {
  return useContext(TalkContext);
}

export function TalkProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);

  const open = useCallback(() => {
    setMounted(true);
    ref.current?.showModal();
  }, []);

  /* Reset the form when it closes, so reopening does not show the previous
     visitor's confirmation still sitting there. */
  const onClose = useCallback(() => setMounted(false), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, [onClose]);

  return (
    <TalkContext.Provider value={{ open }}>
      {children}

      <dialog ref={ref} className="talk-dialog" aria-labelledby="talk-title">
        <div className="talk-panel">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="talk-close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <p className="eyebrow">{CTA}</p>
          <h2 id="talk-title" className="heading mt-3">
            Tell us what you are building.
          </h2>
          <p className="body-dim mt-4">
            A reply in two working days with honest next steps and an idea of cost.
          </p>

          <div className="mt-8">
            {/* keyed so a close and reopen gives a clean form */}
            {mounted && <ContactForm key="talk" source="modal" />}
          </div>

          <p className="mt-8 text-[0.9rem] text-dim">
            Or email{" "}
            <a href={"mailto:" + SITE.email} className="link-under text-ink">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </dialog>
    </TalkContext.Provider>
  );
}

/**
 * The one action on the site.
 *
 * A real link to /contact, upgraded to the dialog only when scripting is
 * available. Rendering a <button> here would mean no destination at all
 * without JavaScript, and would take the address out of the page for anything
 * reading it as a document. Modifier clicks and middle clicks fall through so
 * 'open in new tab' still behaves like a link, because it is one.
 */
export function TalkLink({ className = "btn" }: { className?: string }) {
  const { open } = useTalk();
  return (
    <Link
      href="/contact"
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        open();
      }}
    >
      {CTA}
    </Link>
  );
}
