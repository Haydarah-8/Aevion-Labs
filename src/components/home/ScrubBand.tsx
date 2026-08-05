import Image from "next/image";
import { BAND_IMAGES } from "@/lib/images";

/**
 * A full-bleed strip that scrubs sideways as the page scrolls past it.
 *
 * No scroll listener and no frame loop: the whole thing is a CSS
 * `animation-timeline: view()` declaration in globals.css, run by the
 * compositor, so the JavaScript budget does not move. Browsers without support
 * get a static strip, which is a perfectly good strip.
 *
 * Everything is lazy, so none of it counts against the initial-load figure
 * published further up the page until somebody scrolls this far.
 */
export function ScrubBand() {
  return (
    <section className="pb-2" aria-label="Selected imagery">
      <div className="band-viewport">
        {/* doubled so the strip still covers the viewport at both ends of the scrub */}
        <div className="band-track">
          {[...BAND_IMAGES, ...BAND_IMAGES].map((img, i) => (
            <div
              key={i}
              className="panel relative h-[15rem] w-[22rem] shrink-0 bg-sheet sm:h-[24rem] sm:w-[35rem]"
            >
              <Image
                src={img.src}
                alt={i < BAND_IMAGES.length ? img.alt : ""}
                sizes="(min-width: 640px) 35rem, 22rem"
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
