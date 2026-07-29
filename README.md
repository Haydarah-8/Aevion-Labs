# Aevion Labs

Web design and development studio site. Next.js App Router, TypeScript,
Tailwind v4. No animation library, no smooth-scroll library, no third party
requests at runtime.

## Rules this build holds to

Taken from `BLUEPRINT.md`, and checked before every commit:

1. **Light only.** No theme toggle, no dark variant.
2. **No em dashes** in rendered copy. Use a period, a comma, a colon, or a
   middle dot in numbered labels.
3. **No invented history.** No client names, no case studies, no testimonials,
   no past metrics. Every number is a target, a budget or a measurement, and is
   labelled as such.
4. **One navigation bar.**
5. **Motion animates transform and opacity only**, and collapses entirely under
   `prefers-reduced-motion`.
6. **Content can never be permanently invisible.** Reveals have a timer
   failsafe and a `noscript` override.
7. **The speed budget is published on the homepage** and measured live from the
   Performance API. Raising the budget to hide a regression is cheating.

## Measured

Cold load of the production build, gzip, homepage: about 240 KB, of which 43 KB
is the webfont and most of the remainder is the React and Next runtime. Zero
third party requests.

## Commands

```
npm run dev     # localhost:3000
npm run build
npm start
```

## Enquiry form

`/api/enquiry` validates and then sends via Resend. Without `RESEND_API_KEY` it
returns an honest 503 and the contact page falls back to a visible mailto link,
rather than silently dropping submissions. See `.env.example`.
