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

/**
 * Every commercial call to action on the site, in one string.
 *
 * BLUEPRINT rule 6: money is a conversation, so the ask is always the same
 * three words. One label, repeated everywhere, is worth more than four clever
 * variations: the visitor learns the shape of the action once and stops having
 * to read it. Hick's law, applied to copy.
 */
export const CTA = "Let's talk";

/** Empty until the accounts exist. The footer hides the column rather than
    rendering links that go nowhere. */
export const SOCIALS: { label: string; href: string }[] = [];

export const NAV = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
] as const;
