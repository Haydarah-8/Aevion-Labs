import type { StaticImageData } from "next/image";

import studioDesk from "../../public/images/studio-desk.avif";
import interlude from "../../public/images/interlude.avif";
import websites from "../../public/images/service-websites.avif";
import webApps from "../../public/images/service-web-apps.avif";
import ecommerce from "../../public/images/service-e-commerce.avif";
import brandSystems from "../../public/images/service-brand-systems.avif";
import band1 from "../../public/images/band-1.avif";
import band2 from "../../public/images/band-2.avif";
import band3 from "../../public/images/band-3.avif";
import band4 from "../../public/images/band-4.avif";
import band5 from "../../public/images/band-5.avif";
import band6 from "../../public/images/band-6.avif";

/**
 * Every picture on the site, in one place, with its alt text beside it so the
 * two can never drift apart. Static imports rather than string paths, so
 * `next/image` knows the intrinsic size and can reserve the space before the
 * file arrives. Nothing on this site is allowed to shift as it loads.
 *
 * TO SWAP ONE: replace the file in `public/images/` and update the alt below.
 */
export type Img = { src: StaticImageData; alt: string };

export const IMAGES = {
  studioDesk: {
    src: studioDesk,
    alt: "A monitor and keyboard on a desk, lit by a single lamp in a dark room",
  },
  interlude: {
    src: interlude,
    alt: "An empty concrete hall with a repeating grid of square openings",
  },
} satisfies Record<string, Img>;

/** One per service, keyed by slug so the detail page can look its own up. */
export const SERVICE_IMAGES: Record<string, Img> = {
  websites: {
    src: websites,
    alt: "Wireframe sketches laid out across a desk, viewed from above",
  },
  "web-apps": {
    src: webApps,
    alt: "A phone and a laptop side by side, both screens lit",
  },
  "e-commerce": {
    src: ecommerce,
    alt: "A phone lying on a concrete surface, its screen glowing faintly",
  },
  "brand-systems": {
    src: brandSystems,
    alt: "A grid of identical modules with one raised out of alignment",
  },
};

/* The strip that scrubs sideways. Neighbours should not share a material or the
   run reads as one long photograph rather than six separate things. */
export const BAND_IMAGES: Img[] = [
  { src: band1, alt: "Layered translucent panels receding into shadow" },
  { src: band2, alt: "An electrical cord coiled on a bare floor" },
  { src: band3, alt: "An open laptop on a desk in a darkened room" },
  { src: band4, alt: "Sheets of tracing paper overlapping on a light table" },
  { src: band5, alt: "Sheets of frosted acrylic stacked on concrete" },
  { src: band6, alt: "A bolt set in concrete casting a long shadow" },
];
