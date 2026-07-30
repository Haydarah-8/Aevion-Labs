import Image from "next/image";
import { BAND_IMAGES } from "@/lib/images";

/**
 * A full-bleed strip that scrubs sideways as the page scrolls past it.
 *
 * There is no scroll listener and no animation frame loop behind this. The
 * whole thing is a CSS `animation-timeline: view()` declaration in globals.css,
 * so the compositor drives it and the JavaScript budget does not move at all.
 * Browsers without support get a static strip, which is a perfectly good strip.
 *
 * Everything is lazy, so none of it counts against the initial-load figure
 * published at the top of the page until somebody scrolls this far.
 */
export function ScrubBand() {
  return (
    <section className="border-t border-rule" aria-label="Selected imagery">
      <div className="band-viewport">
        {/* doubled so the strip still covers the viewport at both ends of the scrub */}
        <div className="band-track">
          {[...BAND_IMAGES, ...BAND_IMAGES].map((img, i) => (
            <div
              key={i}
              className="relative h-[14rem] w-[20rem] shrink-0 overflow-hidden bg-sheet sm:h-[22rem] sm:w-[32rem]"
            >
              <Image
                src={img.src}
                alt={i < BAND_IMAGES.length ? img.alt : ""}
                sizes="(min-width: 640px) 32rem, 20rem"
                loading="lazy"
                className="h-full w-full object-cover"
                fill
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
