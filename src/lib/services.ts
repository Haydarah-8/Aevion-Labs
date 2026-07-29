/** The four things Aevion Labs builds. One source, used by the homepage list,
    the services index, the detail pages and the sitemap. */
export type Service = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  includes: string[];
  timeline: string;
};

export const SERVICES: Service[] = [
  {
    slug: "websites",
    name: "Websites",
    summary:
      "Marketing sites that load fast, say the right thing first, and stay editable by your own team.",
    intro:
      "Most sites fail quietly. They load slowly, nobody can change a headline without a developer, and the traffic you paid for leaves before it converts. Rarely because of one bad decision, usually a dozen small ones.",
    includes: [
      "Discovery and content structure",
      "Interface design as a reusable system",
      "Next.js build on your own repository",
      "Headless CMS your team can actually use",
      "Performance and accessibility passes before launch",
    ],
    timeline: "Four to eight weeks",
  },
  {
    slug: "web-apps",
    name: "Web apps",
    summary:
      "Dashboards, portals and internal tools. Designed around the job, not around a template.",
    intro:
      "Internal tools get judged on one thing: whether the person using them all day stops noticing the interface. That takes understanding the job first and drawing screens second.",
    includes: [
      "User flows mapped with the people who will use it",
      "Component library and design tokens",
      "React and Next.js build",
      "API and third party integration",
      "Documentation and handover",
    ],
    timeline: "Six to twelve weeks",
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    summary:
      "Storefronts built phone first, with a checkout that asks for as little as possible.",
    intro:
      "Most of the people judging your shop are on a phone with one hand. Every extra step, every image that arrives late, every field asked for twice is a share of the traffic you paid for, gone.",
    includes: [
      "Phone first product and checkout design",
      "Storefront build and payment integration",
      "Image pipeline sized per breakpoint",
      "Core Web Vitals tuning",
      "Analytics and conversion tracking",
    ],
    timeline: "Six to ten weeks",
  },
  {
    slug: "brand-systems",
    name: "Brand systems",
    summary:
      "The type, colour and component rules underneath, so page ten costs a fraction of page one.",
    intro:
      "A brand system is not a logo. It is the set of decisions that means the next page, the next campaign and the next hire all produce something that looks like it belongs.",
    includes: [
      "Typography and colour system",
      "Component library and usage rules",
      "Design tokens shared by design and code",
      "Documentation with live examples",
      "Handover so your team can extend it",
    ],
    timeline: "Three to six weeks",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
