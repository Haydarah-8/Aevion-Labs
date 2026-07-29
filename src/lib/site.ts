/**
 * Everything that changes when the business does. One place, so no component
 * ever hardcodes a contact detail or a claim.
 */
export const SITE = {
  name: "Aevion Labs",
  url: "https://aevionlabs.com",
  tagline: "Websites, apps and brands built like they matter.",
  email: "hello@theaevionlabs.com",
  general: "contact@theaevionlabs.com",
} as const;

/** Empty until the accounts exist. The footer hides the column rather than
    rendering links that go nowhere. */
export const SOCIALS: { label: string; href: string }[] = [];

export const NAV = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
] as const;
