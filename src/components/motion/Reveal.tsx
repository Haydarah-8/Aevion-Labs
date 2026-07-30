"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Every entrance on the site runs through here, and none of it uses an
 * animation library. One shared IntersectionObserver adds `is-in` to whatever
 * it sees; the stylesheet decides what that means. Three guarantees:
 *
 * 1. Reduced motion is handled in CSS, so it holds even without hydration.
 * 2. Content can never stay hidden. A timer adds `is-in` regardless, and a
 *    `noscript` override in the document head covers scripting being off.
 * 3. One observer for the page, not one per element.
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

function useInView(delay: number) {
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
  return ref;
}

/** Fade and a short rise. The default entrance for anything that is not a heading. */
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
  const ref = useInView(delay);
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

/**
 * Headings only: each line rises out of its own mask on a stagger.
 *
 * Lines are authored rather than measured. A splitting library rewrites the
 * markup it is pointed at, which is how the previous build ended up with a
 * title nested three deep inside itself. Passing an array costs a moment of
 * thought per heading and cannot go wrong.
 */
export function RevealLines({
  as: Tag = "h2",
  lines,
  className,
  delay = 0,
  stagger = 0.07,
}: {
  as?: ElementType;
  lines: readonly string[];
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useInView(delay);
  return (
    <Tag ref={ref} className={className ? `reveal-lines ${className}` : "reveal-lines"}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <span
            className="line"
            style={{ "--line-delay": `${delay + i * stagger}s` } as React.CSSProperties}
          >
            {/* Trailing space on every line but the last. The lines are block
                level so it never renders, but without it the heading's text
                content runs together as "breakat the handoff" for anyone
                copying it, and for anything reading the DOM rather than the
                layout. */}
            {i < lines.length - 1 ? `${line} ` : line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/** Wrapper that only adds `is-in`. Used by Figure for the clip reveal. */
export function InView({
  children,
  className,
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useInView(delay);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className} style={style}>
      {children}
    </div>
  );
}
