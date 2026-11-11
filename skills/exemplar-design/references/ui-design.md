# UI design after Linear

Contents: [Scope](#scope) · [Leader fit](#leader-fit) · [Core](#core) ·
[Principles](#principles) · [Observed values](#observed-values) ·
[Anti-patterns](#anti-patterns) · [Critique checklist](#critique-checklist)

## Scope

Read this when: designing or reviewing application screens (lists, detail views,
sidebars, menus, settings), deciding density and hierarchy, or keeping components
consistent across a product people use all day.
Not this file: marketing pages (`landing-layout.md`), data-heavy overview pages
(`dashboards.md`), feedback of a single control (`micro-interactions.md`).

## Leader fit

- Why this exemplar: Linear publishes its reasoning (a method, redesign write-ups, essays on quality) and its interface is a direct consequence of that reasoning, so the beliefs can be cited and not guessed.
- Where it transfers poorly: products used rarely or by novices, where keyboard paths and density cost more than they give; products whose purpose is customisation (site builders, low-code); consumer and editorial surfaces where expression is the point.
- Grounding: strong for beliefs and decisions; thin for measured values (one marketing page at phone width, app not measured); canon source for principle 12: W3C, WCAG 2.2.
- Last verified: 2026-11-11

## Core

Linear starts from a view of work: people who build software are professionals, and
their tool should be made with the care of a craft object. Its founders, Finnish
designers and engineers who had worked at Coinbase, Airbnb and Uber, found the tools
there slow and cluttered ([Sequoia profile](https://sequoiacap.com/article/linear-spotlight),
[First Round interview](https://review.firstround.com/podcast/inside-linear-why-craft-and-focus-still-win-in-product-building/)).
Their answer is an opinionated product: [designed for a purpose](https://linear.app/method/introduction),
with decisions made for the user, plain names, and power that arrives when it is
needed. They refuse unlimited flexibility, designing for everyone, experiments as the
decision-maker, and handoffs between design and engineering
([quality essay](https://linear.app/now/why-is-quality-so-rare),
[Figma's write-up of Saarinen's rules](https://www.figma.com/blog/karri-saarinens-10-rules-for-crafting-products-that-stand-out/)).
Quality is the business strategy: Saarinen writes that it "creates gravity" and reports
profitability by year two with almost no marketing spend. It is judged by whether the
product feels right, and speed is part of that feeling. In the interface this becomes
calm: the work carries the weight, [navigation recedes and structure is felt](https://linear.app/now/behind-the-latest-design-refresh),
and details nobody will name [are still designed](https://linear.app/now/invisible-details).

Carry this: decide for the user, then remove whatever does not help them do the work
faster with less to look at.

## Principles

The rule and its evidence are the exemplar's. The CSS under "On the web" is our
translation; its values are placeholders to replace, not Linear's values.

### 1. Design for someone specific and make the decisions for them

- Why: a tool that leaves its own layout and workflow open hands the user a design job before they can start their real one.
- Evidence: `[published]` https://linear.app/method/introduction ("Purpose-built", "Say no to busy work")
- Also supported by: Figma blog on Saarinen's rules, "The best design is opinionated", https://www.figma.com/blog/karri-saarinens-10-rules-for-crafting-products-that-stand-out/
- On the web:

```css
:root { --row-h: 2rem; --row-gap: 0.5rem; } /* one density, chosen by the designer */
.row { min-height: var(--row-h); gap: var(--row-gap); }
/* no .compact / .comfortable variants until a real need appears */
```

### 2. Judge the screen by how it feels in use, not by what converts

- Why: users recognise quality as something feeling right before they can say why; unfinished states are where that feeling breaks.
- Evidence: `[published]` https://linear.app/now/why-is-quality-so-rare
- Also supported by: Linear on working without A/B tests, https://linear.app/now/designing-remote-work-at-linear
- On the web:

```css
.btn          { background: var(--btn-bg); }
.btn:hover    { background: var(--btn-bg-hover); }
.btn:active   { background: var(--btn-bg-active); }
.btn:disabled { opacity: var(--disabled-opacity); cursor: not-allowed; }
/* every state designed on purpose, none left to the browser default */
```

### 3. Cut scope before you cut quality

- Why: a small set of finished parts reads as a reliable product; a wide set of half-finished ones reads as none.
- Evidence: `[published]` https://linear.app/method/scope-projects
- Also supported by: Figma blog on Saarinen's rules, "reduce scope", https://www.figma.com/blog/karri-saarinens-10-rules-for-crafting-products-that-stand-out/
- On the web:

```css
.btn       { height: var(--control-h); padding-inline: var(--space-3); }
.btn-quiet { background: transparent; }
/* two button kinds, finished; add a third only when a screen cannot work without it */
```

### 4. Call things by their plain names

- Why: invented terms make the user translate before acting, and mean different things to different teams.
- Evidence: `[published]` https://linear.app/method/introduction ("Aim for clarity")
- Also supported by: Linear Method on plain-language issues, https://linear.app/method/write-issues-not-user-stories
- On the web:

```css
.label { text-transform: none; letter-spacing: normal; }
.title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
/* labels are words to read, set as ordinary text; titles stay scannable on one line */
```

### 5. Simple first, power on demand

- Why: a newcomer sees a short list of things to do; an expert finds the rest where the work is, without a settings detour.
- Evidence: `[published]` https://linear.app/method/introduction ("Simple first, then powerful")
- On the web:

```css
.row .actions { opacity: 0; }
.row:hover .actions,
.row:focus-within .actions { opacity: 1; } /* still reachable by keyboard */
```

### 6. Give weight to the work and let navigation recede

- Why: the eye should land on what the user is working on; orientation is needed in glances, not constantly.
- Evidence: `[published]` https://linear.app/now/behind-the-latest-design-refresh
- On the web:

```css
:root {
  --text: oklch(25% 0 0);      --surface: oklch(100% 0 0);
  --text-nav: oklch(48% 0 0);  --surface-nav: oklch(97% 0 0);
}
.sidebar { color: var(--text-nav); background: var(--surface-nav); }
main     { color: var(--text);     background: var(--surface); }
```

### 7. Let structure be felt, not drawn

- Why: every line is one more thing to read; spacing and a faint separator group content without asking for attention.
- Evidence: `[published]` https://linear.app/now/behind-the-latest-design-refresh
- On the web:

```css
.group { display: grid; gap: var(--space-1); }
.group + .group { margin-top: var(--space-5); } /* space separates first */
.sep { border: 0; height: 1px; border-radius: 1px;
       background: color-mix(in oklch, var(--text) 8%, transparent); }
```

### 8. Keep the density, remove the noise

- Why: people doing real work want many items in view; what tires them is decoration and misalignment, not quantity.
- Evidence: `[published]` https://linear.app/now/behind-the-latest-design-refresh
- Also supported by: Linear's 2024 redesign on aligning labels, icons and buttons, https://linear.app/now/how-we-redesigned-the-linear-ui
- On the web:

```css
.row { display: grid; align-items: center;
       grid-template-columns: var(--icon) 1fr auto; column-gap: var(--space-2); }
.row svg { inline-size: var(--icon); block-size: var(--icon); color: currentColor; }
/* one icon size, no coloured icon tiles, every row on the same three columns */
```

### 9. Generate the theme from a few inputs, with contrast as one of them

- Why: a derived palette stays consistent in light, dark and high contrast, so users who need more contrast get the same product.
- Evidence: `[published]` https://linear.app/now/how-we-redesigned-the-linear-ui
- Also supported by: Linear engineering on generated themes, https://linear.app/now/styling-linear-for-the-future-stylex
- On the web:

```css
:root { --base-l: 98%; --accent-h: 265; --contrast: 1; } /* the only inputs */
:root {
  --surface: oklch(var(--base-l) 0.005 var(--accent-h));
  --text:    oklch(calc(var(--base-l) - 72% * var(--contrast)) 0.01 var(--accent-h));
  --accent:  oklch(55% 0.18 var(--accent-h));
}
@media (prefers-contrast: more) { :root { --contrast: 1.2; } }
```

### 10. Treat speed as part of quality: give actions a keyboard path and show it

- Why: slowness breaks concentration; a shortcut shown beside the pointer action teaches the faster route without a manual.
- Evidence: `[published]` https://linear.app/now/invisible-details
- Also supported by: First Round interview with Saarinen on slow tools, https://review.firstround.com/podcast/inside-linear-why-craft-and-focus-still-win-in-product-building/
- On the web:

```css
.menu-item { display: flex; justify-content: space-between; gap: var(--space-4); }
.menu-item kbd { font: inherit; font-size: var(--text-sm); color: var(--text-muted); }
.menu { transition: opacity var(--t-fast) ease-out; } /* feedback never waits on animation */
```

### 11. Design the path of the pointer, not only the target

- Why: a sub-menu that closes when the cursor cuts the corner forces a slow, careful path; the user feels the fix without seeing it.
- Evidence: `[published]` https://linear.app/now/invisible-details
- On the web:

```css
.submenu-safe-area { /* invisible bridge from cursor to sub-menu; script sets --cx, --cy */
  position: absolute; inset: 0;
  clip-path: polygon(var(--cx) var(--cy), 100% 0, 100% 100%);
}
```

### 12. Keep focus visible and quiet text readable

- Why: a calm, low-contrast interface fails keyboard users if they lose the focus position, and fails everyone if secondary text drops below legibility.
- Evidence: `[canon]` W3C, WCAG 2.2 SC 2.4.7 and SC 1.4.3, https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html and https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- On the web:

```css
:focus-visible { outline: var(--focus-w) solid var(--accent); outline-offset: var(--focus-offset); }
:root { --text-muted: oklch(48% 0 0); } /* check: at least 4.5:1 on --surface */
```

## Observed values

Reference points, not a spec. How to read this: three heading sizes and two heading weights carry the hierarchy, borders are hairline or absent (principles 6 to 8), and state changes are near-instant at 0.1 to 0.16s (principle 10). The values come from the marketing page, not the app, so treat them as the house hand, not as app density.

| What | Value | Where (URL) | Viewport | Date |
|---|---|---|---|---|
| Page title (h1) | 38px, weight 510, line-height 1.1, letter-spacing -0.022em | https://linear.app/ | 375x762 | 2026-11-11 |
| Section heading (h2) | 24px, weight 510, line-height 1.33, letter-spacing -0.012em | https://linear.app/ | 375x762 | 2026-11-11 |
| Sub-heading (h3) | 20px, weight 590, line-height 1.33 | https://linear.app/ | 375x762 | 2026-11-11 |
| Body list text | 16px, weight 400, line-height 24px | https://linear.app/ | 375x762 | 2026-11-11 |
| Small controls | 28px tall; radius 8px or full pill; border 0.5px or none | https://linear.app/ | 375x762 | 2026-11-11 |
| Most common transition (216 elements) | color, 0.1s, cubic-bezier(0.25, 0.46, 0.45, 0.94) | https://linear.app/ | 375x762 | 2026-11-11 |
| Control state transitions | 0.16s on the same curve (filter, transform, border, background) | https://linear.app/ | 375x762 | 2026-11-11 |
| Slow, large movement | transform 0.7s cubic-bezier(0.32, 0.72, 0, 1) | https://linear.app/ | 375x762 | 2026-11-11 |
| Reduced-motion handling | 49 `prefers-reduced-motion` media rules in the page's stylesheets | https://linear.app/ | 375x762 | 2026-11-11 |

## Anti-patterns

- Density, layout and theme switches offered because no default was chosen, because the user inherits the design work (principle 1).
- Hover, pressed, disabled or empty states left at browser defaults, because the screen then feels unfinished however good the default state looks (principle 2).
- Many component variants, each slightly rough, because breadth was bought with quality (principle 3).
- Invented product vocabulary or uppercase, letter-spaced micro-labels where a plain word would do (principle 4).
- A sidebar as bright and heavy as the content, or coloured icon tiles on every row, because navigation then competes with the work (principles 6 and 8).
- Borders around every card, row and panel, because structure is drawn where spacing would carry it (principle 7).
- Padding added to look calm at the price of items in view, because calm should come from less noise, not less content (principle 8).
- Hand-picked colours per theme that drift apart between light, dark and high contrast (principle 9).
- Actions reachable only by pointer, or shortcuts that exist but are shown nowhere (principle 10).
- Removed focus outlines or grey-on-grey secondary text in the name of minimalism (principle 12).

## Critique checklist

- [ ] Is there one default density and layout, with no options the designer could have decided? (principle 1)
- [ ] Does every interactive element have designed hover, active, focus and disabled states? (principle 2)
- [ ] Can the number of component variants be counted on one hand per component? (principle 3)
- [ ] Is every label a word a new user already knows? (principle 4)
- [ ] Are secondary actions hidden until hover or focus, and still reachable by keyboard? (principle 5)
- [ ] Is the navigation visibly quieter than the content area in both text and surface? (principle 6)
- [ ] Could half the borders be deleted with grouping still clear from spacing? (principle 7)
- [ ] Do icons, labels and trailing metadata sit on shared columns across rows, at one icon size? (principle 8)
- [ ] Are colours derived from a few custom properties, and does a higher-contrast setting work? (principle 9)
- [ ] Does each menu action show its shortcut, and does feedback appear without waiting for an animation? (principle 10)
- [ ] Can the pointer move diagonally into a sub-menu without it closing? (principle 11)
- [ ] Is focus visible on every control, and does muted text reach 4.5:1? (principle 12)
