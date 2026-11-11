---
name: exemplar-design
description: Builds and critiques web UI by following one named industry exemplar per design area, with every principle tagged by evidence and linked to a source. Areas - UI design (Linear), onboarding (Duolingo), animation (Apple), landing page layout (Stripe), search and filters (Airbnb), micro-interactions (Framer), typography (Pentagram), minimalism (MUJI), art direction (Aesop), dashboards (Notion). Use when the user asks to design, build or review a page, screen, flow or component "like", "in the style of" or "to the standard of" one of these companies, asks what a leading product actually does in one of these areas, or wants design decisions justified with sources rather than taste. Not for generic visual polish, anti-slop cleanup, palette or font lookup, or accessibility audits where no exemplar or evidence is wanted; other design skills cover those.
license: MIT
metadata:
  version: "0.1.0"
---

# exemplar-design

Design web UI the way a specific leader does it, and show where each decision comes from.
The value of this skill is traceability: a reader can check any principle against its
source. A confident principle with no source is worse than no principle, because it
looks grounded and is not.

## Rules that always apply

1. **Tag every principle you apply or cite.** Use exactly one of the four tags below and
   carry the link from the reference file. Do not upgrade a tag: an `[inferred]` rule
   stays `[inferred]` in your output.
2. **Never invent evidence.** If a reference file does not contain a value, quote or
   claim, do not supply one from memory as if it were sourced. Say it is not covered and,
   if you still need a rule, state it as `[inferred]` with your reasoning.
3. **A missing reference file means the area is not grounded yet.** Tell the user in one
   line, then proceed with `[inferred]` reasoning only. Do not describe what the leader
   does from memory.
4. **Follow the method, do not clone the brand.** Reproduce principles (spacing logic,
   pacing, hierarchy), never a company's logo, name, proprietary typeface, full token
   set, copy or imagery. Pick original colours, type and content for the user's product.
5. **Observed values are dated.** Report them with their date and treat them as a
   reference point, not a spec to copy pixel for pixel.

## Evidence tags

| Tag | Meaning | Use it when |
|---|---|---|
| `[published]` | The leader's own guideline, post or talk | The reference file links the leader's own page |
| `[observed YYYY-MM-DD]` | Measured on the leader's live site on that date | The reference file's observed-values table has it |
| `[canon]` | A named outside authority | The rule rests on an outside source the reference names, not on the leader's own words |
| `[inferred]` | Our translation or reasoning, not a fact about the leader | Anything not directly backed by one of the three above |

## Router

Pick the area or areas the request touches and read only those files. Most requests
need one; read a second only when the request clearly spans two (for example a landing
page with scroll animation).

| Area | Exemplar | Reference file | Read when the request is about |
|---|---|---|---|
| UI design | Linear | `references/ui-design.md` | App screens, density, hierarchy, component consistency |
| Onboarding | Duolingo | `references/onboarding.md` | First-run flows, sign-up, activation, progressive commitment |
| Animation | Apple | `references/animation.md` | Scroll-driven or page-level motion, transitions, pacing |
| Landing page layout | Stripe | `references/landing-layout.md` | Marketing page structure, hero, section rhythm, grids |
| Search & filters | Airbnb | `references/search-filters.md` | Search bars, facets, category bars, result refinement |
| Micro-interactions | Framer | `references/micro-interactions.md` | Hover, press, toggle and feedback states on single components |
| Typography | Pentagram | `references/typography.md` | Type scale, pairing, measure, typographic identity |
| Minimalism | MUJI | `references/minimalism.md` | Reduction, restraint, emptiness as a choice |
| Art direction | Aesop | `references/art-direction.md` | Imagery, mood, tone, editorial composition |
| Dashboards | Notion | `references/dashboards.md` | Data-dense views, tables, database and overview pages |

Animation versus micro-interactions: animation is motion at page or section level;
micro-interactions are the feedback of a single control.

## Build workflow

1. Identify the area(s) from the router and read the reference file(s).
2. Read the "Leader fit" note. If the user's product differs from the leader's context
   in a way the note flags, say so before building. Read "Core" next: it is what the
   exemplar stands for, and it decides every case the principles do not cover.
3. Choose the principles that apply to this request. Applying four well beats naming
   twelve.
4. Build in plain HTML and CSS unless the project already uses something else, in which
   case follow the project. Put design values in CSS custom properties so they can be
   traced and changed in one place.
5. Check the result against the reference file's anti-patterns and critique checklist,
   and fix what fails.
6. End with an evidence note (format below).

## Critique workflow

1. Read the artefact the user gave (file, URL or screenshot) before the reference file,
   so first impressions are your own.
2. Read the reference file(s) for the area(s) and walk its critique checklist.
3. Report findings ordered by impact on the user's goal, most serious first. For each:
   what is there now, which principle it departs from (with tag and link), and a
   concrete fix as CSS or markup.
4. Say what already works and should be kept.
5. Do not edit files during a critique unless the user asked for fixes.

## Output format

Build: the files, then this note.

```markdown
## Evidence note
Area: <area> after <exemplar> (reference last verified <date>)

| Decision | Principle | Evidence |
|---|---|---|
| <what was done> | <rule in a few words> | [published] <link> |
| <what was done> | <rule in a few words> | [inferred] <one-line reasoning> |

Not covered by the reference: <gaps, or "none">
```

Critique: one block per finding, then "Keep".

```markdown
### <n>. <finding in a few words>
Now: <what the artefact does>
Principle: <rule> [tag] <link>
Fix: <CSS or markup>
```

## When areas conflict

1. The area the user named, or that the request is mainly about, wins.
2. If none is primary, prefer the principle with the stronger tag:
   `[published]` over `[observed]` over `[canon]` over `[inferred]`.
3. State the conflict and the choice in the evidence note rather than resolving it
   silently.

Not affiliated with or endorsed by any company named here. Names identify publicly
visible work only.
