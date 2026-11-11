# Dossier: Animation after Apple

Status: complete for published sources; live-site measurement not done (see Measurements). Last updated: 2026-11-11.

How sources were read: every page below was fetched with WebFetch on 2026-11-11 and the
quotes were extracted from the fetched page text. Three developer.apple.com pages (S1, S2,
S7) render with JavaScript and returned no body, so their content was read from the same
site's documentation data file (`developer.apple.com/tutorials/data/<path>.json`). Quotes
from S3, S4, S10, S11 and S13 were checked a second time against the page with an
exact-wording pass. The built-in browser refused both developer.apple.com and apple.com
(blocked by organisation policy), so nothing was read or measured through the browser.

## Sources read

| ID | Title | URL | Type | Opened on |
|---|---|---|---|---|
| S1 | Human Interface Guidelines: Motion | https://developer.apple.com/design/human-interface-guidelines/motion | leader-published (native) | 2026-11-11 |
| S2 | Human Interface Guidelines: Accessibility | https://developer.apple.com/design/human-interface-guidelines/accessibility | leader-published (native) | 2026-11-11 |
| S3 | WWDC18 session 803, Designing Fluid Interfaces (page with transcript) | https://developer.apple.com/videos/play/wwdc2018/803/ | talk (native) | 2026-11-11 |
| S4 | WWDC23 session 10158, Animate with springs (page with transcript) | https://developer.apple.com/videos/play/wwdc2023/10158/ | talk (native) | 2026-11-11 |
| S5 | WWDC23 session 10156, Explore SwiftUI animation (page with transcript) | https://developer.apple.com/videos/play/wwdc2023/10156/ | talk (native) | 2026-11-11 |
| S6 | WWDC24 session 10145, Enhance your UI animations and transitions (page with transcript) | https://developer.apple.com/videos/play/wwdc2024/10145/ | talk (native) | 2026-11-11 |
| S7 | SwiftUI documentation: Spring | https://developer.apple.com/documentation/swiftui/spring | leader-published (native) | 2026-11-11 |
| S8 | App Store Connect Help: Reduced Motion evaluation criteria | https://developer.apple.com/help/app-store-connect/manage-app-accessibility/reduced-motion-evaluation-criteria | leader-published (native) | 2026-11-11 |
| S9 | Apple Support: Reduce screen motion on your iPhone, iPad, or iPod touch | https://support.apple.com/en-us/111781 | leader-published (native) | 2026-11-11 |
| S10 | WebKit blog: Responsive Design for Motion (James Craig, 2017-05-15) | https://webkit.org/blog/7551/responsive-design-for-motion/ | leader-published (web) | 2026-11-11 |
| S11 | WebKit blog: A guide to Scroll-driven Animations with just CSS (Saron Yitbarek, 2025-06-20) | https://webkit.org/blog/17101/a-guide-to-scroll-driven-animations-with-just-css/ | leader-published (web) | 2026-11-11 |
| S12 | WebKit blog: News from WWDC25: WebKit in Safari 26 beta (2025-06-09) | https://webkit.org/blog/16993/news-from-wwdc25-web-technology-coming-this-fall-in-safari-26-beta/ | leader-published (web) | 2026-11-11 |
| S13 | WWDC25 session 233, What's new in Safari and WebKit (page with transcript) | https://developer.apple.com/videos/play/wwdc2025/233/ | talk (web) | 2026-11-11 |
| S14 | MDN: CSS scroll-driven animations (guide) | https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations | third-party | 2026-11-11 |
| S15 | MDN: prefers-reduced-motion media feature | https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion | third-party | 2026-11-11 |
| S16 | MDN: animation-timeline property | https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation-timeline | third-party | 2026-11-11 |
| S17 | W3C WAI: Understanding SC 2.3.3 Animation from Interactions (WCAG 2.2, level AAA) | https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html | canon | 2026-11-11 |
| S18 | web.dev: animations guide (Kayce Basques, Rachel Andrew) | https://web.dev/articles/animations-guide | canon | 2026-11-11 |
| S19 | Chrome for Developers: scroll-driven animations (Bramus, 2023-05-05) | https://developer.chrome.com/docs/css-ui/scroll-driven-animations | third-party | 2026-11-11 |

Count: 13 leader sources (9 native, 4 web), 6 third-party.

## Core thesis

Apple treats motion as a way for the interface to explain itself: it conveys status,
feedback and instruction (C1), is added only with a purpose (C2, C3), and is never the
only carrier of information (C4, C5). The model is the physical world (C17, C19, C28):
the stated goal of the 2018 fluid-interfaces work is a tool that feels like an extension
of the mind (C12), which the speakers break down into immediate response (C13),
one-to-one tracking of the hand (C15), constant interruptibility (C14, C10, C27) and
spatially consistent paths (C16, C7). Springs follow from that model, not from taste:
only a spring keeps position and velocity continuous when a gesture hands over to an
animation (C20, C21, C25), which is why SwiftUI made a spring its default (C26) and why
the recommended starting point has no bounce (C18, C22), with overshoot reserved for
motion that carries momentum (C23, C24). Restraint is the other half: brief and precise
(C8), little or none on frequent interactions (C9), never something to wait for (C10).
Reduced motion is treated as a design state rather than an off switch: triggers such as
scaling, parallax, spinning and peripheral or multi-speed movement are removed (C30,
C34, C35, C40, C41), while meaning is kept through a non-moving substitute such as a
dissolve (C31, C36, C37, C38, C42, C43). All of this except the WebKit material is
written for native apps. For the web, Apple's own voice is WebKit: scroll-linked
animation belongs in CSS rather than script (C45, C50, C52), should finish early enough
that content is readable at rest (C47, C51), and should sit behind a reduced-motion
check (C44, C48, C49, C53).

## Claims

| ID | Claim (paraphrase) | Short quote | Source | Status |
|---|---|---|---|---|
| C1 | Motion's job is status, feedback, instruction and enrichment | "conveying status, providing feedback and instruction, and enriching the visual experience" | S1 | confirmed |
| C2 | Motion must have a purpose and stay behind the experience | "Add motion purposefully, supporting the experience without overshadowing it." | S1 | confirmed |
| C3 | Motion for its own sake is refused | "Don't add motion for the sake of adding motion." | S1 | confirmed |
| C4 | Motion is optional | "Make motion optional." | S1 | confirmed |
| C5 | Motion must not be the sole carrier of important information | "avoid using it as the only way to communicate important information" | S1 | confirmed |
| C6 | Feedback motion should be realistic and follow the gesture | "realistic feedback motion that follows people's gestures and expectations" | S1 | confirmed |
| C7 | A view revealed from one direction should not leave in another | "they don't expect to dismiss the view by sliding it to the side" | S1 | confirmed |
| C8 | Animated feedback should be brief and precise | "Aim for brevity and precision in feedback animations." | S1 | confirmed |
| C9 | Frequent interactions should not get added motion | "generally avoid adding motion to UI interactions that occur frequently" | S1 | confirmed |
| C10 | People must be able to cancel motion and not wait for it | "don't make people wait for an animation to complete" | S1 | confirmed |
| C11 | When movement itself says nothing, fade instead of moving (visionOS section) | "Consider using fades when you need to relocate an object." | S1 | confirmed |
| C12 | A fluid interface feels like an extension of the mind | "when the tool feels like an extension of your mind" | S3 | confirmed |
| C13 | People notice latency; response must be immediate | "people are really, really sensitive to latency" | S3 | confirmed |
| C14 | Motion must be redirectable and interruptible at any time | "allow for constant redirection and interruption" | S3 | confirmed |
| C15 | Content should track the finger one to one | "One-to-one tracking is extremely important." | S3 | confirmed |
| C16 | An element enters and leaves along the same path | "It should have a consistent offscreen path as it enters and leaves." | S3 | confirmed |
| C17 | Physical-world behaviour is the basis for interface behaviour | "characteristics of the physical world make for great behaviors" | S3 | confirmed |
| C18 | Start tuning with no overshoot | "starting with 100% damping, or no overshoot" | S3 | confirmed |
| C19 | Elastic behaviour is not described by duration | "We actually like to avoid using duration when we're describing elastic behaviors." | S3 | confirmed |
| C20 | Goal: continuous position and velocity | "make our animations have continuous position and velocity" | S4 | confirmed |
| C21 | A fixed curve cannot carry an initial velocity | "there's no way to represent an initial velocity" | S4 | confirmed |
| C22 | Default to a spring with no bounce | "When you're not sure, use a spring with bounce 0" | S4 | confirmed |
| C23 | Overshoot is earned by momentum in the driving gesture | "reward that momentum with a little bit of overshoot" | S3 | confirmed |
| C24 | High bounce feels exaggerated for UI | "cautious about using values higher than around 0.4" | S4 | confirmed |
| C25 | Springs preserve velocity and come to rest naturally | "preserving velocity and naturally coming to rest" | S5 | confirmed |
| C26 | SwiftUI's default animation became a smooth spring (iOS 17) | "a smooth spring the new default" | S5 | confirmed |
| C27 | A new transition may start while another is running | "Be ready for a new transition to start at any time." | S6 | confirmed |
| C28 | Animations should feel like physical objects | "feel like the motion of objects in the physical world" | S4 | confirmed |
| C29 | Keeping the same element on screen across a transition gives continuity | "increase the sense of continuity in your app" | S6 | confirmed |
| C30 | With Reduce Motion on, cut automatic and repetitive animation, zoom, scale, peripheral motion | "reducing automatic and repetitive animations, including zooming, scaling, and peripheral motion" | S2 | confirmed |
| C31 | Under reduced motion, replace axis transitions with fades | "Replacing transitions in x-, y-, and z-axes with fades to avoid motion" | S2 | confirmed |
| C32 | Under reduced motion, tighten springs | "Tightening animation springs to reduce bounce effects" | S2 | confirmed |
| C33 | Spring is specified by perceptual duration and bounce; "smooth" preset has no bounce | "The perceptual duration, which defines the pace of the spring." | S7 | confirmed |
| C34 | Depth simulation (parallax, animated blur) is a trigger to disable or change | "parallax effects, animated blur, and depth-of-field effects" | S8 | confirmed |
| C35 | Multi-axis, multi-speed, spinning and vortex effects are triggers | "multi-axis motion, multi-speed motion, spinning, or vortex effects" | S8 | confirmed |
| C36 | Removing all animation harms understanding | "Removing animations entirely can have a negative effect on usability and understandability." | S8 | confirmed |
| C37 | Replace meaningful motion with a non-moving effect | "such as a dissolve, highlight fade, or color shift" | S8 | confirmed |
| C38 | The system itself swaps zoom and slide for dissolve under Reduce Motion | "use the dissolve effect instead of zoom or slide effects" | S9 | confirmed |
| C39 | Ongoing motion (auto-advancing carousels) needs a stop | "auto-advancing carousel screens or any other ongoing motion" | S8 | confirmed |
| C40 | On the web, reduced motion is a medical need for some | "It's a medical necessity for some." | S10 | confirmed |
| C41 | On the web, parallax and other multi-speed or multi-directional movement are triggers | "multi-speed or multi-directional movement can also trigger vestibular responses" | S10 | confirmed |
| C42 | On the web, remove only the known triggers | "only remove the animations you know to be vestibular triggers" | S10 | confirmed |
| C43 | On the web, removing everything can make the interface unusable; serve a simpler alternative | "removing the animation entirely may make the interface confusing or unusable" | S10 | confirmed |
| C44 | prefers-reduced-motion exists to serve alternate animations | "serve alternate animations that avoid motion sickness triggers" | S10 | confirmed |
| C45 | Scroll-linked animation can be done in CSS alone | "scroll-driven with nothing more than a few lines of CSS" | S11 | confirmed |
| C46 | animation-timeline must come after the animation shorthand | "`animation-timeline` property must be set after your `animation` property" | S11 | confirmed |
| C47 | animation-range sets where on the timeline the animation starts and stops; example uses 0% 50% | "tells our browser when to start and stop the animation along our timeline" | S11 | confirmed |
| C48 | Wrap scroll-driven animation in a reduced-motion query | "wrap your animation in a media query that checks for reduced motion preferences" | S11 | confirmed |
| C49 | Large animations read as real movement to motion-sensitive users | "more likely to experience these larger animations as real movement" | S11 | confirmed |
| C50 | Scroll-driven animation replaces JavaScript for linking motion to scroll | "skip JavaScript and link your animation to your scroll using just CSS" | S13 | confirmed |
| C51 | Do not run the animation over the full range; moving content is hard to read | "the blocks are in motion the whole time, making them hard to read" | S13 | confirmed |
| C52 | Avoiding script here improves performance and battery life | "users will get better performance and battery life" | S13 | confirmed |
| C53 | Respect the reduced-motion setting when adding scroll motion | "so that I don't accidentally cause motion discomfort" | S13 | confirmed |
| C54 | WebKit states progressive enhancement as a value (said in general, not about animation) | "We value the principles of progressive enhancement and separation of concerns." | S12 | confirmed |
| C55 | Scroll-driven animations shipped in the Safari 26 beta | "available in Safari 26 beta" | S11 | confirmed |
| C56 | MDN: scroll-driven animations move property values along a scroll timeline; its sample guards with `@supports` | "animate property values along a scroll-based timeline" | S14 | confirmed |
| C57 | MDN: prefers-reduced-motion detects a setting to minimise non-essential motion | "minimize the amount of non-essential motion" | S15 | confirmed |
| C58 | MDN: declare animation-timeline after the shorthand | "declare `animation-timeline` after declaring any `animation` shorthand" | S16 | confirmed |
| C59 | WCAG 2.3.3 (AAA): interaction-triggered motion can be disabled unless essential | "Motion animation triggered by interaction can be disabled, unless the animation is essential" | S17 | confirmed |
| C60 | web.dev: restrict animation to opacity and transform | "restrict animations to `opacity` and `transform`" | S18 | confirmed |
| C61 | web.dev: avoid properties that trigger layout or paint | "Avoid any property that triggers layout or paint unless it's absolutely necessary." | S18 | confirmed |
| C62 | Chrome docs: scroll-driven animations can run off the main thread; main-thread animation janks | "Main thread animations are subject to jank" | S19 | confirmed |
| C63 | Chrome docs: `entry` is the range while the box is entering the visibility range | "the range during which the principal box is entering the view progress visibility range" | S19 | confirmed |
| C64 | Apple's motion pages on apple.com use specific durations, easings, travel distances, pinned sections | none | not opened | discarded |
| C65 | Apple publishes guidance on page-level web motion for apple.com-style product pages | none | not found | discarded |

## Measurements

Not done. On 2026-11-11 the built-in browser refused `https://www.apple.com/` ("blocked by
your organization's policy"), and the brief says not to work around a refusal. No
`[observed]` value exists for this area.

| ID | Page URL | What | Value | Viewport | Method | Date |
|---|---|---|---|---|---|---|
| | | | | | | |

## Discarded

- Any statement about how apple.com product pages are built (durations, easing curves,
  travel distance, sticky or pinned sections, canvas or video scrubbing, their
  reduced-motion stylesheet) because the site could not be opened; nothing was measured.
- "Apple documents how to do scroll motion on marketing pages" because no such Apple page
  was found; the only web guidance read is WebKit's (S10 to S13), which teaches the CSS
  feature and reduced motion, not a house style.
- The WWDC25 transcript wording that scroll-driven animations are in "Safari 19" because
  the WebKit posts read (S11, S12) call the release Safari 26; the version claim rests on
  S11 only.
- Numeric spring presets as a web recommendation (for example a 0.5 s duration) because
  the sessions show them as code examples, not as guidance.
- Any link to the classic twelve animation principles because no source was opened and no
  Apple source read here cites them.
- Performance claim "scroll-driven animations run off the main thread in Safari" because
  the WebKit sources read do not say it; S19 says it for Chrome only, S13 says only that
  skipping script helps performance and battery.

## Open questions

- Live-site measurement: needs a browser that is allowed to open apple.com. Until then
  the "Observed values" table in the reference file is empty.
- Whether WebKit recommends a specific fallback for browsers without scroll timelines;
  not found in S11 to S13. The fallback rule in the reference file is `[inferred]`.
- Whether Apple says anything for the web about animating only compositor properties; not
  found, so that rule is `[canon]` (web.dev).
- Full speaker names for S3 to S6 are not shown on the session pages; sources are cited
  by session title.
