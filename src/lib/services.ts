/** The four things Aevion Labs builds. One source, used by the homepage list,
    the services index, the detail pages and the sitemap. */
export type Service = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  /** Symptoms, in the buyer's words. If they recognise two, this is their page. */
  signs: string[];
  includes: string[];
  /** What is deliberately out of scope, so nobody discovers it late. */
  excludes: string[];
  outcome: string;
  timeline: string;
};

export const SERVICES: Service[] = [
  {
    slug: "websites",
    signs: [
      "Changing a headline means raising a ticket and waiting",
      "The site looks right on a laptop and wrong in a hand",
      "You cannot say in one sentence what it is meant to make people do",
      "Traffic arrives and leaves without doing anything",
    ],
    excludes: [
      "Ongoing content writing, though structure and guidance are included",
      "Photography and video production",
      "Paid advertising management",
    ],
    outcome: "A site your team edits without calling anyone, that loads before a visitor loses interest.",
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
    signs: [
      "Work happens in a spreadsheet that three people have their own copy of",
      "Onboarding a new starter means teaching them the workarounds",
      "The tool exists but nobody uses it the way it was designed",
      "Every report is assembled by hand",
    ],
    excludes: [
      "Native iOS or Android applications",
      "Data migration from legacy systems, quoted separately",
      "Ongoing operational support outside a retainer",
    ],
    outcome: "A tool the person using it all day stops noticing, because it matches how the work actually runs.",
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
    signs: [
      "Most of the traffic is on phones and the checkout was designed on a desktop",
      "Carts fill up and do not convert",
      "Product pages take a developer to update",
      "Images arrive after the customer has already scrolled past",
    ],
    excludes: [
      "Warehouse and fulfilment integration, scoped case by case",
      "Product photography",
      "Marketplace listings such as Amazon or eBay",
    ],
    outcome: "A storefront that arrives fast on a phone and asks for as little as possible before it takes the money.",
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
    signs: [
      "Every new page looks slightly unlike the last one",
      "Two people describe what the company does two different ways",
      "Design decisions get re-argued from scratch each time",
      "The logo exists and nothing else does",
    ],
    excludes: [
      "Printed collateral and packaging",
      "Naming and verbal identity strategy",
      "Advertising creative",
    ],
    outcome: "A set of decisions made once, so the tenth page costs a fraction of the first and still belongs.",
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
