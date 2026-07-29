import type { StaticImageData } from "next/image";

import studioDesk from "../../public/images/studio-desk.avif";
import interlude from "../../public/images/interlude.avif";
import websites from "../../public/images/service-websites.avif";
import webApps from "../../public/images/service-web-apps.avif";
import ecommerce from "../../public/images/service-e-commerce.avif";
import brandSystems from "../../public/images/service-brand-systems.avif";

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
