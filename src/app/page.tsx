import { Hero } from "@/components/home/Hero";
import { LiveMetrics } from "@/components/home/LiveMetrics";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Standard } from "@/components/home/Standard";
import { Interlude } from "@/components/home/Interlude";
import { TheWork } from "@/components/home/TheWork";
import { Questions } from "@/components/home/Questions";
import { CtaBand } from "@/components/home/CtaBand";

/**
 * Seven sections. The previous build shipped seventy, which is why nobody
 * reached the bottom of it. Anything that is not one of these earns a page of
 * its own or does not exist.
 */
export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <LiveMetrics />
      <Services />
      <Process />
      <Standard />
      <Interlude />
      <TheWork />
      <Questions />
      <CtaBand />
    </main>
  );
}
