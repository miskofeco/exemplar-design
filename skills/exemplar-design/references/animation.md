# Animation after Apple

Contents: [Scope](#scope) · [Leader fit](#leader-fit) · [Core](#core) ·
[Principles](#principles) · [Observed values](#observed-values) ·
[Anti-patterns](#anti-patterns) · [Critique checklist](#critique-checklist)

## Scope

Read this when: a page or section should move as it loads or scrolls (hero entrances,
scroll-linked reveals, section transitions, pacing), or existing page motion needs review.
Not this file: hover, press, toggle and other single-control feedback; see
`micro-interactions.md`.

## Leader fit

- Why this exemplar: Apple has published more first-party reasoning about motion than any
  other product company (guidelines, conference talks, framework docs), and its browser
  team writes about motion on the web.
- Where it transfers poorly: the guidance is written for native, gesture-driven apps. A
  web page has scroll, not a tracked finger, and CSS has no real spring. Content-heavy or
  task-heavy pages (docs, dashboards, forms) need far less motion than a product showcase.
- Grounding: strong for beliefs, medium for web craft. Web rules derived from native
  guidance are `[inferred]`. Measured values cover the apple.com home page only, no product page.
- Last verified: 2026-11-11

## Core

Apple treats motion as a way for the interface to explain itself, not as decoration. Its
guidelines ask for motion that is
[added purposefully](https://developer.apple.com/design/human-interface-guidelines/motion),
never for its own sake, and optional: nothing important may depend on it. The model
underneath is the physical world. In its 2018 talk on
[fluid interfaces](https://developer.apple.com/videos/play/wwdc2018/803/) the design team
describes the goal as a tool that feels like an extension of the mind: it responds at
once, tracks the hand one to one, can be redirected mid-flight and moves things along
consistent paths. That is why Apple animates with
[springs](https://developer.apple.com/videos/play/wwdc2023/10158/) rather than fixed
curves: a spring keeps velocity continuous when a gesture hands over to an animation, and
the recommended default has no bounce. Restraint is the other half. Frequent interactions
get little or no motion and nobody is made to wait for an animation. When someone asks for
reduced motion, the meaning is kept and the movement is replaced, a position the WebKit
team [states for the web](https://webkit.org/blog/7551/responsive-design-for-motion/).
Everything except the WebKit material is published for native apps.

Carry this: motion answers "what just happened, and where did it go?" at the pace of the
user's own input, and the page is complete without it.

## Principles

Shared tokens used below (values are ours, not Apple's):

```css
:root {
  --motion-ease: cubic-bezier(0.2, 0.8, 0.2, 1); /* decelerates, never overshoots */
  --motion-duration: 0.5s;
  --motion-travel: 2rem;
  --motion-range-end: 50%;
}
```

### 1. Add motion only where it explains something

- Why: movement pulls the eye. If it carries no information (what appeared, what belongs
  together, where to look next) it distracts and can make people uncomfortable.
- Evidence: `[inferred]` from the native rule to add motion purposefully and not for its
  own sake, https://developer.apple.com/design/human-interface-guidelines/motion
- On the web:

```css
/* Animate the one or two elements that carry the section's message. */
.hero__media, .hero__title { /* motion applied here, see 6 to 8 */ }
.hero__nav, .hero__price, .hero__legal { animation: none; }
```

### 2. Make the page complete without motion

- Why: some people cannot or will not see the animation, and some browsers will not run
  it. Content that only exists after an animation has run is missing for them.
- Evidence: `[inferred]` from the native rules that motion is optional and never the only
  carrier of information, https://developer.apple.com/design/human-interface-guidelines/motion
- Also supported by: MDN's scroll-driven animations guide, whose sample guards with
  `@supports`, https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations
- On the web:

```css
/* Default state is the finished state. Motion is added on top, never required. */
.hero__media, .hero__title { opacity: 1; transform: none; }
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) { /* scroll-linked motion goes here */ }
}
```

### 3. Under reduced motion, keep the meaning and replace the movement

- Why: for people with vestibular disorders this is a medical need, not a taste. Deleting
  every animation can still leave the page confusing, so swap movement for a fade.
- Evidence: `[published]` WebKit: remove the known triggers and serve a simpler
  alternative, https://webkit.org/blog/7551/responsive-design-for-motion/
- Also supported by: Apple's reduced-motion criteria for apps (dissolve, highlight fade or
  colour shift),
  https://developer.apple.com/help/app-store-connect/manage-app-accessibility/reduced-motion-evaluation-criteria ;
  WCAG 2.3.3, https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- On the web:

```css
@keyframes dissolve { from { opacity: 0; } }
@media (prefers-reduced-motion: reduce) {
  .hero__media, .hero__title {
    animation: dissolve var(--motion-duration) linear both; /* no transform, no scroll link */
    animation-timeline: auto;
  }
}
```

### 4. Let the user's input drive the motion

- Why: when movement tracks what the hand is doing, the user stays in control and the
  page feels responsive. On a page, the input is scroll, so link to it instead of playing
  a timed show at the reader.
- Evidence: `[inferred]` from the native emphasis on one-to-one tracking of the gesture,
  https://developer.apple.com/videos/play/wwdc2018/803/
- Also supported by: WebKit's guide to tying animation to scroll progress,
  https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/
- On the web:

```css
.hero__media { animation: settle linear both; animation-timeline: view(); }
```

### 5. Never make the reader wait, and never take over the scroll

- Why: a reader who must sit through an animation, or whose scroll is hijacked, has lost
  control. Scroll-linked motion is interruptible by nature: stop scrolling and it stops,
  scroll back and it reverses.
- Evidence: `[inferred]` from the native rules to let people cancel motion and to allow
  constant interruption, https://developer.apple.com/design/human-interface-guidelines/motion
  and https://developer.apple.com/videos/play/wwdc2018/803/
- On the web:

```css
/* No scroll-snap mandatory on the page, no wheel handlers, no entrance delays. */
html { scroll-snap-type: none; }
.hero__title { animation-delay: 0s; }
```

### 6. Move things along one consistent path

- Why: if an element arrives from below and leaves sideways, the reader loses the spatial
  model of the page. Enter and exit should be the same path in reverse.
- Evidence: `[inferred]` from the native rule that an element enters and leaves along a
  consistent path, https://developer.apple.com/videos/play/wwdc2018/803/
- On the web:

```css
/* One keyframe set, played forward on entry; the scroll timeline reverses it for free. */
@keyframes settle {
  from { opacity: 0; transform: translateY(var(--motion-travel)); }
}
```

### 7. Default to motion that settles without bounce

- Why: Apple's motion model is a spring, and its recommended default has no overshoot;
  bounce is kept for gestures that carry momentum. A page reveal has no momentum, so it
  should decelerate and come to rest.
- Evidence: `[inferred]` from the native advice to use a spring with zero bounce when
  unsure, https://developer.apple.com/videos/play/wwdc2023/10158/ . CSS has no spring; a
  decelerating curve whose control points stay between 0 and 1 is our stand-in.
- On the web:

```css
.card { transition: transform var(--motion-duration) var(--motion-ease); }
/* Scroll-linked animations use linear: the scroll itself supplies the velocity. */
```

### 8. Keep it brief and small

- Why: short, precise motion reads as lightweight and gets the message across; long
  travel and long durations become the subject of the page. Large movement is also more
  likely to feel like real movement to motion-sensitive readers.
- Evidence: `[inferred]` from the native rule to aim for brevity and precision,
  https://developer.apple.com/design/human-interface-guidelines/motion . The token values
  above are our starting points, not Apple figures.
- Also supported by: WebKit on larger animations,
  https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/
- On the web:

```css
:root { --motion-travel: 2rem; --motion-duration: 0.5s; } /* tune down before up */
```

### 9. Finish the motion early so content is read at rest

- Why: text and images that are still moving are hard to read. End the animation well
  before the element reaches the middle of the viewport.
- Evidence: `[published]` WWDC25 "What's new in Safari and WebKit": the presenter limits
  the range so items are not moving the whole time,
  https://developer.apple.com/videos/play/wwdc2025/233/
- Also supported by: WebKit's guide, whose example ends the range at 50%,
  https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/
- On the web:

```css
.feature { animation-range: 0% var(--motion-range-end); }
```

### 10. Build scroll-linked motion with CSS timelines, not scroll listeners

- Why: the browser can tie the animation to scroll directly, with less code and better
  performance and battery life than script reacting to scroll events.
- Evidence: `[published]` WebKit's guide to scroll-driven animations,
  https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/
- Also supported by: WWDC25 "What's new in Safari and WebKit" on performance and battery,
  https://developer.apple.com/videos/play/wwdc2025/233/ ; MDN, `animation-timeline` must
  follow the `animation` shorthand,
  https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline
- On the web:

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .feature {
      animation: settle linear both;            /* shorthand first */
      animation-timeline: view();               /* timeline after it */
      animation-range: 0% var(--motion-range-end);
    }
  }
  @supports not (animation-timeline: view()) {  /* fallback: one timed entrance on load */
    .hero__media { animation: settle var(--motion-duration) var(--motion-ease) both; }
  }
}
```

Note `[inferred]`: an element already in view at load has no entry phase. For a top
section, either use the timed fallback above or link to the first screen of page scroll
with `animation-timeline: scroll()` and a short `animation-range`.

### 11. Animate transform and opacity only

- Why: properties that trigger layout or paint cost frames, and dropped frames break the
  feeling that the page is following the scroll.
- Evidence: `[canon]` web.dev animations guide, https://web.dev/articles/animations-guide
- On the web:

```css
@keyframes grow { from { transform: scale(0.96); } } /* not width, height, top or margin */
```

### 12. Leave out the known triggers, or gate them

- Why: parallax and other multi-speed or multi-directional movement, large scaling or
  zooming, spinning, and motion at the edge of vision cause dizziness or nausea for some
  readers. Ongoing motion that never stops needs a control.
- Evidence: `[published]` WebKit's list of vestibular triggers,
  https://webkit.org/blog/7551/responsive-design-for-motion/
- Also supported by: Apple's accessibility guidelines for apps,
  https://developer.apple.com/design/human-interface-guidelines/accessibility
- On the web:

```css
@media (prefers-reduced-motion: no-preference) {
  .backdrop { animation: drift linear both; animation-timeline: scroll(); } /* parallax: opt-in only */
}
```

## Observed values

Reference points, not a spec. How to read this: on the home page motion is short (under a third of a second), symmetric in easing and confined to opacity and transform, which matches principles 8 and 11. It says nothing about the long scroll sequences on product pages; those are still unmeasured.

| What | Value | Where (URL) | Viewport | Date |
|---|---|---|---|---|
| Properties that transition | almost only opacity, transform and color; one width transition (7 elements), no other layout property in the top 15 | https://www.apple.com/ | 1070x861 | 2026-11-11 |
| Opacity and transform durations | 0.12s to 0.32s, `ease`; most common 0.24s (115 elements) | https://www.apple.com/ | 1070x861 | 2026-11-11 |
| Colour transitions (230 elements) | 0.32s, cubic-bezier(0.4, 0, 0.6, 1) | https://www.apple.com/ | 1070x861 | 2026-11-11 |
| Longest transition seen | opacity 0.4s ease | https://www.apple.com/ | 1070x861 | 2026-11-11 |
| Show and hide | visibility 0.24s steps(1) paired with the opacity fade | https://www.apple.com/ | 1070x861 | 2026-11-11 |
| Scroll-timeline rules | 0 on this page | https://www.apple.com/ | 1070x861 | 2026-11-11 |
| Reduced-motion handling | 4 `prefers-reduced-motion` media rules | https://www.apple.com/ | 1070x861 | 2026-11-11 |
| Running animations at rest | 10 | https://www.apple.com/ | 1070x861 | 2026-11-11 |

## Anti-patterns

- Content hidden by default (`opacity: 0`) and revealed only by animation, because it
  breaks principle 2.
- `prefers-reduced-motion: reduce` handled with `animation: none` on everything, or not
  handled at all, because it breaks principle 3.
- Scroll-jacking, forced snap points or timed sequences the reader must sit through,
  because they break principle 5.
- Bounce or overshoot on a page reveal, because it breaks principle 7.
- Every block on the page sliding in, from mixed directions, because it breaks
  principles 1 and 6.
- Animations that span the element's whole pass through the viewport, because it breaks
  principle 9.
- Scroll event listeners setting styles each frame where a CSS timeline would do, because
  it breaks principle 10.
- Animating `width`, `height`, `top`, `margin` or animated blur, because it breaks
  principles 11 and 12.
- Background and foreground moving at different speeds for all users, or an auto-playing
  loop with no stop control, because it breaks principle 12.
- Calling any of these rules "what Apple documents for the web" when its tag is
  `[inferred]`.

## Critique checklist

- [ ] Can each animated element be matched to something it explains? (principle 1)
- [ ] With CSS animations disabled, is every piece of content visible? (principle 2)
- [ ] Is there a `prefers-reduced-motion: reduce` path that fades instead of moving? (principle 3)
- [ ] Is page-level motion tied to scroll rather than to timers and delays? (principle 4)
- [ ] Can the reader scroll freely at any moment, with no wait and no hijack? (principle 5)
- [ ] Do elements leave by the path they came in on? (principle 6)
- [ ] Do all easing curves settle without overshoot? (principle 7)
- [ ] Are travel distances and durations small, and set as custom properties? (principle 8)
- [ ] Is each reveal finished before the element reaches mid-viewport? (principle 9)
- [ ] Is scroll motion done with `animation-timeline`, declared after the shorthand, inside `@supports`? (principle 10)
- [ ] Do keyframes and transitions touch only `transform` and `opacity`? (principle 11)
- [ ] Is parallax, large scaling, spinning and looping motion absent or gated? (principle 12)
