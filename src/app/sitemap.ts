import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICE_SLUGS } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/services", "/studio", "/review", "/contact"];
  const services = SERVICE_SLUGS.map((s) => `/services/${s}`);
  return [...routes, ...services].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }));
}
