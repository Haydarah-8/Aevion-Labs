"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * The only reveal on the site, and deliberately not built on an animation
 * library. There is exactly one effect here, a fade and a short rise, so
 * shipping Framer to the client for it cost about 70 KB to do what a CSS
 * transition already does. On a site that publishes its own page weight that
 * was not a defensible trade.
 *
 * Three guarantees, all learned from the previous build:
 *
 * 1. Reduced motion is handled in the stylesheet, so it holds even if this
 *    component never hydrates.
 * 2. Content can never stay invisible. If the observer never fires, a timer
 *    shows it anyway; if JavaScript never runs at all, the `noscript` override
 *    in the document head shows it.
 * 3. One shared IntersectionObserver for the whole page rather than one per
 *    element.
 */
const FAILSAFE_MS = 1200;

let observer: IntersectionObserver | null = null;

function watch(el: HTMLElement) {
  if (typeof IntersectionObserver === "undefined") {
    el.classList.add("is-in");
    return () => {};
  }
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px" }
  );
  observer.observe(el);
  return () => observer?.unobserve(el);
}

export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** seconds */
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const stop = watch(el);
    const t = setTimeout(() => el.classList.add("is-in"), FAILSAFE_MS + delay * 1000);
    return () => {
      stop();
      clearTimeout(t);
    };
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
