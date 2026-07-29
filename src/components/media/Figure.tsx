import Image from "next/image";
import type { Img } from "@/lib/images";

/**
 * The only way a picture gets onto this site.
 *
 * `next/image` with a static import, so the intrinsic size is known at build
 * time and the space is reserved before the file arrives. Nothing here is
 * allowed to shift as it loads.
 *
 * `sizes` is mandatory rather than optional: without it Next serves the widest
 * variant to every device, which is exactly the mistake the homepage metrics
 * would then report back as a heavier page.
 */
export function Figure({
  image,
  sizes,
  priority = false,
  className,
  ratio,
  caption,
}: {
  image: Img;
  /** e.g. "(min-width: 640px) 50vw, 100vw" */
  sizes: string;
  priority?: boolean;
  className?: string;
  /** CSS aspect-ratio, e.g. "16 / 9" */
  ratio?: string;
  caption?: string;
}) {
  return (
    <figure className={className}>
      <div className="relative overflow-hidden bg-sheet" style={ratio ? { aspectRatio: ratio } : undefined}>
        <Image
          src={image.src}
          alt={image.alt}
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={ratio ? "h-full w-full object-cover" : "h-auto w-full"}
          {...(ratio ? { fill: true } : {})}
        />
      </div>
      {caption && <figcaption className="tag mt-3">{caption}</figcaption>}
    </figure>
  );
}
