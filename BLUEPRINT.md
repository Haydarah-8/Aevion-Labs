# AEVION LABS · THE COMPLETE BLUEPRINT

A start-to-finish specification for the Aevion Labs website: a web design and
development studio for businesses that refuse to stay ordinary. This document
covers everything from brand foundation to launch checklist. Build exactly what
is written here. Nothing on the site should exist that this file does not
explain.

Design codename: **PAPER & SIGNAL**.

---

## 0 · NON-NEGOTIABLE RULES

1. **Light mode only.** No theme toggle, no dark variant, no `prefers-color-scheme` branching.
2. **No em dashes** in any rendered copy, anywhere, ever. Use periods, commas, or colons.
3. **No invented history.** No client names, no case studies, no testimonials, no past metrics. Every number on the site is a target, a budget, or a promise, and is labelled as such.
4. **One navigation bar.** A single ruled top bar. Nothing else fixed at the top.
5. **Wordmark only.** "Aevion Labs" set in type. No logo glyph, no icon mark.
6. **No pricing page.** Money is a conversation. Every commercial CTA is "Let's talk".
7. **Motion animates transform and opacity only.** Never width, height, top, left, margin, or box-shadow. All motion collapses under `prefers-reduced-motion`.
8. **Every page ships against a speed budget** (see §10). The site must prove the speed it sells.

---

## 1 · BRAND FOUNDATION

### 1.1 Positioning

Aevion Labs designs and builds websites, web apps, e-commerce storefronts and
the brand systems underneath them, as one connected foundation. The site's job
is not to list services. Its job is to make an ambitious founder feel that
staying ordinary is the expensive option, and that one conversation is the
obvious next step.

### 1.2 The one-line promise

> Websites, apps and brands built like they matter.

### 1.3 Voice

- Second person, present tense. Talk to "you", about "your visitors", "your week".
- Short declaratives. One idea per sentence.
- Confident, never loud. No exclamation marks. No jargon ("synergy", "solutions", "digital transformation" are banned).
- All claims are promises about how we work, never fabricated track record.
- The single recurring CTA phrase, everywhere, is: **"Let's talk"**.

### 1.4 The editorial conceit

The whole site reads like a beautifully printed studio publication: chapters,
indices, hairline rules, marginal annotations, a colophon. The recurring
typographic ornament is the asterisk **✳** (a printer's mark, not a logo).
Chapter numbers are set in mono. This print-shop identity is what makes the
site feel unlike every glassy SaaS template on the internet.

---

## 2 · TYPOGRAPHY (the personality layer)

Three typefaces, all loaded locally via `next/font/google` (self-hosted at
build, zero layout shift, zero third-party requests).

### 2.1 Display · **Audiowide** (user-supplied, self-hosted)

A wide techno display face with strong personality. Loaded from the local
TTF at `src/app/fonts/Audiowide-Regular.ttf` via `next/font/local` (SIL OFL
1.1; the license ships alongside the file). This is the voice of every
headline and the wordmark.

- Single weight (400), no italic: all display classes set `font-weight: 400`.
- Emphasis inside a headline is **color only**: one word per big headline in Signal. Example: "Make them choose *you*." (the emphasis word is red, not italic).
- Audiowide runs wide, so the type scale is sized smaller than a serif would be.
- Never used below 1.4rem. Audiowide is for statements, not paragraphs.

### 2.2 Text and UI · **Instrument Sans** (variable)

A grotesque with slightly flared terminals: clean enough for UI, warm enough
to sit beside Audiowide without fighting it.

- Body copy, buttons, forms, cards, nav links.
- Weights used: 400, 500, 600. Nothing bolder; Audiowide owns the drama.

### 2.3 Data and labels · **Spline Sans Mono**

Eyebrows, chapter indices, stat labels, form microcopy, the marquee.

- Always uppercase, `letter-spacing: 0.22em`, size 0.72rem, weight 500.
- This mono voice is the "ledger" thread that stitches every section together.

### 2.4 Type scale (fluid)

| Token        | Size                          | Face       | Weight | Line height | Tracking  |
| ------------ | ----------------------------- | ---------- | ------ | ----------- | --------- |
| `t-hero`     | clamp(2.3rem, 6vw, 5.5rem)    | Audiowide  | 400    | 1.06        | -0.005em  |
| `t-display`  | clamp(1.8rem, 4.4vw, 3.8rem)  | Audiowide  | 400    | 1.1         | -0.005em  |
| `t-title`    | clamp(1.45rem, 2.9vw, 2.4rem) | Audiowide  | 400    | 1.16        | 0         |
| `t-card`     | 1.3rem                        | Instrument | 600    | 1.25        | -0.01em   |
| body         | 1.0625rem                     | Instrument | 400    | 1.7         | 0         |
| small        | 0.875rem                      | Instrument | 400    | 1.6         | 0         |
| `eyebrow`    | 0.72rem uppercase             | Spline Mono| 500    | 1           | 0.22em    |

---

## 3 · COLOR (light only)

Warm paper, warm ink, one hot signal. Nothing else.

| Token            | Value                   | Role                                                    |
| ---------------- | ----------------------- | ------------------------------------------------------- |
| `--paper`        | `#f4f1e9`               | Page canvas. Warm, unmistakably not white.               |
| `--sheet`        | `#fdfbf5`               | Raised surfaces: cards, panels, the nav bar.             |
| `--ink`          | `#181510`               | Text, primary buttons, the "elite" wipe panel.           |
| `--dim`          | `#6e6857`               | Secondary text. Warm gray, never cold.                   |
| `--signal`       | `#dc2626`               | Red. Accents, emphasis words, ornaments, graphics. Large text only. |
| `--signal-deep`  | `#b91c1c`               | Signal for small text (meets 4.5:1 on paper).            |
| `--rule`         | `rgba(24, 21, 16, 0.14)`| Hairline rules. A visible, deliberate motif.             |
| `--tint`         | `rgba(24, 21, 16, 0.05)`| Quiet fills: chips, wells, hover states.                 |
| `--tint-strong`  | `rgba(24, 21, 16, 0.10)`| Active fills.                                            |
| `--shadow-soft`  | `0 1px 2px rgba(24,21,16,0.05), 0 12px 32px rgba(24,21,16,0.07)` | Resting cards. |
| `--shadow-lift`  | `0 2px 6px rgba(24,21,16,0.06), 0 24px 56px rgba(24,21,16,0.12)` | Hover lift.    |

Rules of use:

- Signal appears **at most once per viewport-height of content**. Scarcity is what makes it hot.
- Hairline rules (`--rule`) are horizontal only, full-bleed or full-column, like a ledger. Never boxed borders around cards; cards are `--sheet` fill + `--shadow-soft` + 24px radius.
- A fixed, full-page **paper grain** overlay (inline SVG `feTurbulence` data URI, ~2.5% opacity, `pointer-events: none`) gives the canvas physical texture. It must cost zero requests.

---

## 4 · LAYOUT SYSTEM

- Shell: `max-width: 92rem`, horizontal padding `5vw`, centered. Class `.shell`.
- Section rhythm: block padding `clamp(6rem, 14vh, 10rem)`.
- The ledger grid: content sections are organised as **rows divided by hairline rules**, each row a 12-column grid: mono index (cols 1-2), heading (cols 3-7), supporting copy (cols 8-12). On mobile the row stacks in the same order.
- Radius: 24px cards, 16px inputs, 999px pills.
- Registration marks: a small `✳` sits at the start of key section eyebrows, in Signal.
- Chapter indicator: on the home page a small fixed mono label at the left edge (desktop only) shows the current chapter ("03 · THE MIRROR"), updating as sections scroll past. It is text, not chrome, and hides on mobile.

---

## 5 · MOTION LANGUAGE

| Name          | Duration | Easing                              | Used for                          |
| ------------- | -------- | ----------------------------------- | --------------------------------- |
| `ease-out`    | 0.6s     | cubic-bezier(0.22, 0.61, 0.36, 1)   | Reveals, rises                    |
| `ease-press`  | 0.55s    | cubic-bezier(0.65, 0, 0.35, 1)      | Curtains, wipes, big moves        |
| UI            | 0.3s     | ease-out                            | Hovers, buttons, chips            |

Signature moves (the site's motion identity):

1. **Ink-line reveal.** Headlines enter as clipped lines rising from behind an invisible rule (translateY inside `overflow: hidden`), staggered 80ms.
2. **Rule-draw.** Every hairline rule scales from `scaleX(0)` to `scaleX(1)` (transform-origin left) as it enters the viewport. The ledger literally draws itself.
3. **Italic swap.** On hover of major links, the roman word crossfades and the italic Fraunces version rises in its place.
4. **Counter flips.** Stats count up only while pinned in view (rAF, tabular-nums).
5. **Marquee drag.** The ticker drifts continuously; grabbing it scrubs it with momentum.
6. **The wipe.** The Ordinary vs Elite comparison is a draggable full-panel wipe.
7. **Orbit drag.** The brand orbit spins with drag momentum; hovering a node isolates it.
8. **Cursor.** Desktop only: 8px dot + lagging ring, `mix-blend-difference`. Elements with `data-cursor="Label"` expand the ring into a labelled pill.
9. **Magnetic CTAs.** Primary buttons ease 4 to 6px toward the pointer.
10. **Entrance stamp.** First visit per session: a paper curtain holds for 0.65s while the wordmark "stamps" in (scale 1.06 to 1, opacity 0 to 1, like a press impression), then the curtain lifts.

Scroll infrastructure: Lenis smooth scroll. Pinned scenes use a rAF progress
hook writing straight to `element.style` (no React re-render per frame).
Everything respects `prefers-reduced-motion`, collapsing to static layouts.

---

## 6 · SITE MAP AND NAVIGATION

```
/                      Home (the film, 11 chapters)
/services/websites     Service detail
/services/web-apps     Service detail
/services/e-commerce   Service detail
/services/brand-systems Service detail (flagship)
/studio                Who we are, what we hold ourselves to
/questions             Buyer-anxiety FAQ
/lets-talk             The conversation page (single commercial endpoint)
```

Removed forever: `/pricing`, `/about`, `/contact`, `/difference`, `/start`.
`next.config.ts` permanently redirects: `/about → /studio`, `/contact → /lets-talk`,
`/pricing → /lets-talk`, `/start → /lets-talk`, `/difference → /`.

### 6.1 The nav (the only bar)

A full-width bar on `--sheet` with a single hairline rule underneath. Left:
wordmark "Aevion Labs" in Fraunces 600, 1.05rem. Right: mono links
`SERVICES · STUDIO · QUESTIONS` and a Signal pill **"Let's talk"** (ink text on
signal? No: signal background, paper text, 999px radius). On scroll past 24px
the bar gains a soft backdrop blur and its rule darkens slightly. On mobile the
links collapse to `MENU`, opening a full-screen paper overlay with the links
set in `t-display` Fraunces, each with the italic-swap hover.

### 6.2 The footer (the colophon)

- Top: a full-bleed outlined wordmark, Fraunces, ~14vw, `-webkit-text-stroke: 1px var(--rule)`, fill transparent. Decorative, `aria-hidden`.
- Middle: four ruled columns. Explore (4 service links) · Studio · Questions · Let's talk (mailto + page link).
- Bottom colophon line, mono: `SET IN AUDIOWIDE & INSTRUMENT SANS ✳ BUILT ON THE SYSTEM WE SELL ✳ © {YEAR} AEVION LABS`.

---

## 7 · THE HOME PAGE, CHAPTER BY CHAPTER

The home page is a film with a spine. Every chapter has a mono index. The
fixed chapter indicator (§4) tracks them.

### CH 00 · ENTRANCE

Paper curtain (`--paper`), wordmark stamps in, curtain lifts after ~1.2s total.
Session-scoped via `sessionStorage`; never blocks the network or repeat visits.

### CH 01 · THE OPENING LINE (hero)

Type only. No imagery, no 3D, no gradient wash. The confidence of a printed
title page.

- Beat 1 (0.0s): `t-hero` Fraunces, ink: **"Ordinary is a choice."**
- Beat 2 (0.9s): the line exits upward; enters: **"You did not come here to make it."**
- Beat 3 (2.0s): resolves to the standing headline: **"Make them choose *you*."** with "you" in Signal red. Short, second person, choice psychology: the visitor is told the outcome they want, in four words.
- Sub (Instrument, dim, max 34ch): "Aevion Labs is a web design and development studio for businesses that refuse to blend in. One team, one standard, one connected system."
- CTA row: Signal pill "Let's talk" (magnetic) + mono scroll cue "READ ON ↓".
- Any scroll or click skips the beats instantly to the standing state.
- A hairline rule draws across the bottom of the hero as beat 3 lands.

### CH 02 · THE TICKER

Full-bleed marquee between two hairline rules, mono, uppercase:
`WEBSITES ✳ WEB APPS ✳ E-COMMERCE ✳ BRAND SYSTEMS ✳ SUB-SECOND PAGES ✳ FIXED QUOTES ✳ WEEKLY STAGING LINKS ✳ ONE MESSAGE AWAY ✳` (repeated).
Drifts left ~60s/loop; drag to scrub with momentum; pauses on hover.

### CH 03 · THE COST (pinned scrub)

Mono eyebrow: `✳ 01 · THE COST`. The paragraph scrubs word by word from
`--rule`-gray to ink as the user scrolls through the pin:

> "Somewhere today, a visitor left your site in the first five seconds and never came back. Ordinary is quietly expensive."

### CH 04 · THE EVIDENCE (pinned counters)

Eyebrow: `✳ 02 · THE EVIDENCE`. Three beats pinned, each a giant Fraunces
number counting up with a sentence beneath:

- **94%** "of first impressions come down to design. Is yours ready?"
- **88%** "of visitors will not return after one bad experience."
- **5s** "is all a slow experience gets before people leave."

Each stat is labelled honestly in mono small print: `INDUSTRY RESEARCH, NOT OUR SCORECARD`.

### CH 05 · THE MIRROR

Eyebrow: `✳ 03 · THE MIRROR`. Three second-person lines, each taking a full
viewport of scroll, ink-line reveal:

1. "You did not build this business to blend in."
2. "You were not made to apologize for your website."
3. "You are here to be chosen. It should show."

### CH 06 · THE GAP (the wipe)

Eyebrow: `✳ 04 · THE GAP`. The draggable wipe panel. Left of the handle: the
**Elite** layer, solid ink panel, paper text, mono tag `BUILT LIKE IT MATTERS`
in Signal. Right: the **Ordinary** layer, sheet panel, dim text, tag
`ORDINARY, AND IT SHOWS`. Five rows compare: First Impression, Brand
Consistency, Updating Anything, Mobile Experience, What Happens at Scale.
Handle: sheet bubble with ink arrows on a Signal hairline.

### CH 07 · THE SHIFT (letter morph)

Eyebrow: `✳ 05 · THE SHIFT`. Pinned rail of four transformations, letters
morphing as the pin progresses, with a hover-to-preview affordance:

`Invisible → Found` · `Generic → Unmistakable` · `Slow → Instant` · `Ordinary → Unstoppable`.

### CH 08 · THE OFFER (services index)

Eyebrow: `✳ 06 · THE OFFER`. Title: **"Not services. Outcomes."**

Not a bento grid. An **editorial index**: four full-width ruled rows, each
with mono index (01 to 04), the service name in `t-display` Fraunces, and the
tagline in dim. Hovering (or focusing) a row: the name swaps to italic, the row
lifts its rule to Signal, and a preview panel (line-art visual + three
capability lines) unfolds beneath it. Row 01 is the flagship, Brand & Design
Systems, marked `✳ FLAGSHIP` in Signal mono.

| Index | Service                 | Tagline                                    |
| ----- | ----------------------- | ------------------------------------------ |
| 01 ✳  | Brand & Design Systems  | The foundation everything else stands on.  |
| 02    | Websites                | The first impression that keeps winning.   |
| 03    | Web Apps & Platforms    | The tool your business actually deserves.  |
| 04    | E-commerce              | A storefront that sells while you sleep.   |

### CH 09 · THE SYSTEM (orbit)

Eyebrow: `✳ 07 · THE SYSTEM`. Title: **"One brand. One system."**
The drag-to-spin orbit: ink core "Your Brand"; inner ring Design, Development,
Content; outer ring SEO, Hosting & Care, Growth. Sheet nodes, rule ellipses,
Signal highlight on the hovered node, hover isolates and explains in a caption.

### CH 10 · THE PROOF (speed race)

Eyebrow: `✳ 08 · THE PROOF`. Title: **"Speed is a first impression."**
Two panels race to paint: "Your Aevion page" (finishes ~0.8s) vs "An ordinary
page" (~4s, skeleton shimmering). Mono caption: "By the time an ordinary page
appears, yours has already made its case." Button: "Run it again".

### CH 11 · THE WEEK AFTER (future pacing)

Eyebrow: `✳ 09 · THE WEEK AFTER`. Three scroll beats, each an ink-line reveal
pair (bold claim + quiet consequence):

1. "Every visitor arrives to a site that already looks like the answer." / "No second-guessing, no bounce. The first screen does the convincing."
2. "Every click confirms the price you charge." / "Premium is not a claim anymore. It is legible in a second."
3. "Every competitor starts wondering how you moved so fast." / "You stop explaining your ambition. People can finally see it."

### CH 12 · THE STANDARD (ledger)

Eyebrow: `✳ 10 · THE STANDARD`. Four ruled ledger rows, mono index + Instrument statement:

- 01 · "Speed has a budget here."
- 02 · "You see staging links every week."
- 03 · "Every quote is fixed before we start."
- 04 · "A real person, always one message away."

### CH 13 · THE INVITATION (final CTA)

Eyebrow: `✳ 11 · THE INVITATION`. `t-hero` Fraunces: **"Say the ambitious *thing*."**
("thing" italic Signal.) Sub: "Tell us what you imagine. We reply within one
business day." Signal pill "Let's talk" (magnetic, cursor label "TALK") and a
mono mailto underneath. Then the colophon footer.

---

## 8 · INNER PAGES

### 8.1 `/services/[slug]` (all four share this template)

1. **Hero.** Mono breadcrumb `SERVICES / 02` + service name eyebrow; `t-hero` tagline with one italic Signal word; sub; CTA "Let's talk" + mono link "ALL SERVICES ↓? " (back to home index). Hairline rule draws beneath.
2. **The visual.** Sheet card containing the line-art scene (ink strokes, one Signal element per scene).
3. **Outcomes.** Three ruled ledger rows: `t-title` Fraunces claim + body explanation. (Copy per service lives in `src/lib/services.ts` and is already final.)
4. **The proof moment.** The service's interactive widget: Websites → speed race; Web Apps → week toggle; E-commerce → live dashboard build; Brand Systems → system assembly.
5. **The possibility band.** Title + body + three counters. Every counter is a target or budget, labelled in mono (`TARGET`, `BUDGET`, `PROMISE`).
6. **Capabilities.** Two-column ruled list, each row prefixed by a Signal `✳`.
7. **Before you ask.** The service's four-question accordion.
8. **Next.** A giant Fraunces italic-swap link to the next service (`NEXT ✳ E-COMMERCE →`) plus the "Let's talk" pill. This makes the four pages a loop.

### 8.2 `/studio`

1. Hero: eyebrow `✳ THE STUDIO`; `t-hero`: "The advantage of the *ambitious*."; sub: "Great design and engineering used to belong to the enormous. We exist to hand it to the businesses hungry enough to use it well."
2. Belief band (sheet): "We believe the next great companies will not be the ones with the most people. They will be the ones whose brand and product feel inevitable."
3. Principles: four ruled ledger rows (mono 01 to 04): "Outcomes over output." / "Consistency with muscle." / "Craft is the strategy." / "Built to compound." Each with its two-sentence body.
4. The standard: same four ledger rows as home CH 12 (shared component).
5. CTA: "If that sounds like your future, we should talk." + "Let's talk" pill.

### 8.3 `/questions`

1. Hero: eyebrow `✳ BEFORE YOU BUILD`; `t-display`: "The questions you are holding."
2. Mono filter chips: ALL · RISK · OWNERSHIP · PRICING · TIMELINE (ink pill active, tint idle). Filtering re-flows the list with layout animation.
3. Ruled accordion, one open at a time, `+` rotates 45° with a spring. Category tag in Signal mono under each answer. Eight questions (copy final in the page).
4. Quiet CTA row: "Still holding one? **Let's talk.**"

### 8.4 `/lets-talk`

The only commercial endpoint. Calm, personal, zero pressure.

1. Left column: eyebrow `✳ LET'S TALK`; `t-hero`: "Say the ambitious *thing*."; sub: "One conversation. A clear picture of what a real website, app or brand system could do for your business. We reply within one business day." Then, in mono, the three honest steps: `01 YOU WRITE ✳ 02 WE REPLY WITHIN A DAY ✳ 03 A 30 MINUTE CALL, NO OBLIGATION`. Direct links: calendar ("Pick a time now") and `hello@aevionlabs.com`.
2. Right column: the two-step form on a sheet card. Step 1: "What are we building?" chips (Websites / Web Apps / E-commerce / Brand & Design Systems / Not sure yet). Step 2: name, email, company (optional), "What should we build first?" textarea, submit "Send it ✳". Success state: ink stamp circle + "Received. We reply within one business day." Errors inline in `signal-deep`.
3. POSTs to `/api/lead` (file-backed store + optional webhook, unchanged).

### 8.5 System pages

- **404:** wordmark eyebrow, `t-display` "This page does not exist.", dim line "Yet. We build things like that.", ink pill "Back home".
- **Loading:** none. Every page is static and serves complete HTML; a root `loading.tsx` would wrap the whole site in a streamed Suspense shell for no benefit, so it is deliberately omitted.
- **OG image:** paper background, ink Fraunces-style bold text "Built for businesses that refuse ordinary.", mono footer line with Signal `✳` separators. Wordmark text only.

---

## 9 · COMPONENT INVENTORY

| Component            | File                              | Notes                                             |
| -------------------- | --------------------------------- | ------------------------------------------------- |
| SiteNav              | `components/marketing/SiteNav.tsx` | Ruled bar, mono links, Signal pill, mobile overlay |
| SiteFooter           | `components/marketing/SiteFooter.tsx` | Outlined wordmark + ruled columns + colophon   |
| EntranceCurtain      | `components/EntranceCurtain.tsx`  | Paper stamp entrance, session-scoped               |
| ChapterSpine         | `components/ChapterSpine.tsx`     | Fixed mono chapter indicator (home, desktop only)  |
| Hero                 | `components/Hero.tsx`             | Three-beat anime.js timeline, skip on input        |
| Ticker               | `components/Ticker.tsx`           | Drag-scrub marquee                                 |
| TextScrub            | `components/TextScrub.tsx`        | Word-by-word ink scrub (pinned)                    |
| StatJourney          | `components/StatJourney.tsx`      | Pinned counting stats                              |
| MirrorScene          | `components/MirrorScene.tsx`      | Second-person reveal beats                         |
| WipeCompare          | `components/WipeCompare.tsx`      | Draggable ordinary/elite wipe                      |
| ShiftRail            | `components/ShiftRail.tsx`        | Letter-morph transformations                       |
| ServicesIndex        | `components/ServicesIndex.tsx`    | Editorial ruled index with unfold previews         |
| BrandOrbit           | `components/BrandOrbit.tsx`       | Drag-spin orbit, hover isolation                   |
| SpeedMeter           | `components/SpeedMeter.tsx`       | Speed race proof                                   |
| WeekToggle           | `components/WeekToggle.tsx`       | Before/after week proof                            |
| DashboardBuild       | `components/DashboardBuild.tsx`   | Dashboard assembly proof                           |
| SystemAssemble       | `components/SystemAssemble.tsx`   | Brand system assembly proof                        |
| VisionStory          | `components/VisionStory.tsx`      | Future-pacing beats                                |
| StandardLedger       | `components/StandardLedger.tsx`   | The four-promise ruled ledger (shared)             |
| ServiceVisual        | `components/ServiceVisual.tsx`    | Ink line-art scenes, one Signal element each       |
| FaqAccordion         | `components/FaqAccordion.tsx`     | Ruled accordion                                    |
| LeadForm             | `components/LeadForm.tsx`         | Two-step chips + details form                      |
| Reveal / MaskedText  | existing                          | Ink-line reveal primitives                         |
| RuleDraw             | `components/RuleDraw.tsx`         | Hairline that draws itself on entry                |
| CountUp / Magnetic   | existing                          | Unchanged logic                                    |
| Cursor               | `components/Cursor.tsx`           | Dot + ring, data-cursor labels                     |
| Spotlight            | `components/Spotlight.tsx`        | Signal-tinted pointer glow (final CTAs)            |
| LenisProvider        | existing                          | Smooth scroll                                      |

Data: `src/lib/services.ts` (service copy, final), `src/lib/constants.ts`
(CALENDAR_URL, client-safe), `src/lib/leads.ts` (server-only file store).

---

## 10 · TECHNICAL ARCHITECTURE

- **Framework:** Next.js 16 App Router, TypeScript strict, Tailwind CSS v4 (`@theme inline` mapped to the §3 tokens).
- **Fonts:** `next/font/google`: Fraunces (`axes: ["SOFT","WONK","opsz"]`), Instrument Sans, Spline Sans Mono. CSS variables `--font-display`, `--font-sans`, `--font-mono`.
- **Motion stack:** Lenis (smooth scroll), anime.js (hero timeline), rAF progress hook for pinned scenes, Framer Motion (`motion/react`) for layout/AnimatePresence moments only.
- **Client/server boundary:** anything importing `node:fs` (leads.ts) stays server-side; client components import only from `constants.ts`.
- **Performance budgets:** LCP < 1.2s on 4G mid-tier, CLS < 0.02, JS on `/` < 220KB gz, every page Lighthouse 95+. The grain overlay, ornaments and rules are CSS/inline-SVG: zero image requests on the home page.
- **Accessibility:** WCAG AA. Focus-visible rings (2px Signal offset ring), skip link, `aria-expanded` on accordions, `role="checkbox"` semantics on selectable chips, all pinned scenes readable with reduced motion, small Signal text always `--signal-deep`.
- **SEO:** per-page metadata, Organization + Service JSON-LD, sitemap, robots, OG image per §8.5, canonical `https://aevionlabs.com`.

---

## 11 · BUILD ORDER (zero to launch)

1. **Foundation.** Fonts in `layout.tsx`, tokens + component classes in `globals.css`, grain overlay, rule/ledger utilities.
2. **Chrome.** SiteNav, SiteFooter, EntranceCurtain, Cursor, ChapterSpine.
3. **Primitives.** Reveal, MaskedText, RuleDraw, CountUp, Magnetic, Ticker.
4. **Scenes.** Hero, TextScrub, StatJourney, MirrorScene, WipeCompare, ShiftRail, ServicesIndex, BrandOrbit, proof widgets, VisionStory, StandardLedger.
5. **Pages.** Home, four service pages, Studio, Questions, Let's Talk, 404, loading, OG.
6. **Plumbing.** Redirects in `next.config.ts`, sitemap, robots, lead API.
7. **QA.** `tsc --noEmit` clean, `next build` clean, keyboard pass, reduced-motion pass, 375px pass (no horizontal scroll), copy sweep (zero em dashes), token sweep (zero stale classes).
8. **Launch.** Deploy, connect domain, verify OG cards, submit sitemap, confirm lead delivery end to end.

---

## 12 · COPY BANK (verbatim, final)

Everything quoted in §7 and §8 is final copy. Global strings:

- Meta title: `Aevion Labs · Websites, Web Apps & Brand Systems`
- Meta description: `Websites, web apps, e-commerce and brand systems for businesses that refuse to stay ordinary. Built as one connected system, not six separate vendors.`
- CTA: `Let's talk` · Secondary: `hello@aevionlabs.com`
- Footer colophon: `SET IN AUDIOWIDE & INSTRUMENT SANS ✳ BUILT ON THE SYSTEM WE SELL ✳ © 2026 AEVION LABS`

*End of blueprint. Build it exactly like this.*
