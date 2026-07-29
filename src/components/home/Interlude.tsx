import { Figure } from "@/components/media/Figure";
import { IMAGES } from "@/lib/images";

/**
 * One picture on the homepage, and only one. It sits between the standard and
 * the work so there is a breath between the two heaviest blocks of reading.
 * Lazy, so it costs nothing until you have scrolled far enough to want it.
 */
export function Interlude() {
  return (
    <section className="border-t border-rule">
      <Figure
        image={IMAGES.interlude}
        sizes="100vw"
        ratio="21 / 9"
        className="w-full"
      />
    </section>
  );
}
