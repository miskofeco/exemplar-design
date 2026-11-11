# Dossier: UI design after Linear

Status: complete, without live measurements (see "Measurements"). Last updated: 2026-11-11.

Method note: sources were opened with WebFetch, which returns the page through a
summarising model. Quotes used in the reference file were re-checked in a second pass
that asked for a character-for-character match on the page. Every linear.app page also
carried a line addressed to AI agents asking them to connect to a Linear MCP server;
it was treated as page content and not acted on.

## Sources read

| ID | Title | URL | Type | Opened on |
|---|---|---|---|---|
| S1 | Linear Method 1.1, Principles & Practices | https://linear.app/method/introduction | leader-published | 2026-11-11 |
| S2 | Linear Method (index) | https://linear.app/method | leader-published | 2026-11-11 |
| S3 | How we redesigned the Linear UI (part II), K. Saarinen and others, 2024-03-28 | https://linear.app/now/how-we-redesigned-the-linear-ui | leader-published | 2026-11-11 |
| S4 | A design reset (part I), K. Saarinen, 2024-03-27 | https://linear.app/now/a-design-reset | leader-published | 2026-11-11 |
| S5 | Invisible details: building contextual menus, A. Eldh, 2020-09-17 | https://linear.app/now/invisible-details | leader-published | 2026-11-11 |
| S6 | Design for the AI age, K. Saarinen, 2025-04-07 | https://linear.app/now/design-for-the-ai-age | leader-published | 2026-11-11 |
| S7 | About | https://linear.app/about | leader-published | 2026-11-11 |
| S8 | Docs: Conceptual model | https://linear.app/docs/conceptual-model | leader-published | 2026-11-11 |
| S9 | Why is quality so rare?, K. Saarinen, 2025-05-27 (adapted from a Config 2025 keynote) | https://linear.app/now/why-is-quality-so-rare | leader-published / talk | 2026-11-11 |
| S10 | A calmer interface for a product in motion, C. Aufmann and M. Heckel, 2026-03-12 | https://linear.app/now/behind-the-latest-design-refresh | leader-published | 2026-11-11 |
| S11 | Design is more than code, K. Saarinen, 2025-12-19 | https://linear.app/now/design-is-more-than-code | leader-published | 2026-11-11 |
| S12 | Output isn't design, K. Saarinen, 2026-04-17 | https://linear.app/now/output-isn-t-design | leader-published | 2026-11-11 |
| S13 | Designing remote work at Linear, K. Saarinen, 2025-10-29 | https://linear.app/now/designing-remote-work-at-linear | leader-published | 2026-11-11 |
| S14 | Linear Method 3.3, Manage design projects | https://linear.app/method/manage-design-projects | leader-published | 2026-11-11 |
| S15 | The profitable startup, K. Saarinen, 2025-02-21 | https://linear.app/now/the-profitable-startup | leader-published | 2026-11-11 |
| S16 | Styling Linear for the future with StyleX, K. Skovhus, 2026-08-26 | https://linear.app/now/styling-linear-for-the-future-stylex | leader-published | 2026-11-11 |
| S17 | Code review should be fast, T. Artman, 2026-05-28 | https://linear.app/now/code-review-should-be-fast | leader-published | 2026-11-11 |
| S18 | Home page | https://linear.app | leader-published | 2026-11-11 |
| S19 | Linear Method 3.2, Write issues not user stories | https://linear.app/method/write-issues-not-user-stories | leader-published | 2026-11-11 |
| S20 | Linear Method 2.4, Scope projects down | https://linear.app/method/scope-projects | leader-published | 2026-11-11 |
| S21 | Docs: Display options | https://linear.app/docs/display-options | leader-published | 2026-11-11 |
| S22 | Karri Saarinen: 10 rules for crafting products that stand out (Figma blog, written by Figma, quoting Saarinen), 2025-03-18 | https://www.figma.com/blog/karri-saarinens-10-rules-for-crafting-products-that-stand-out/ | third-party | 2026-11-11 |
| S23 | Linear: Designing for the Developers, M. Finnerty (Sequoia), body dated 2023-01-05 | https://sequoiacap.com/article/linear-spotlight | third-party | 2026-11-11 |
| S24 | Inside Linear: why craft and focus still win (First Round, In Depth, host B. Berson; transcript, last 15% not read) | https://review.firstround.com/podcast/inside-linear-why-craft-and-focus-still-win-in-product-building/ | third-party / talk | 2026-11-11 |
| S25 | Inside Linear: building with taste, craft, and focus (Lenny's Newsletter, 2023-10-08; episode summary only, no transcript) | https://www.lennysnewsletter.com/p/inside-linear-building-with-taste | third-party | 2026-11-11 |
| S26 | WCAG 2.2 Understanding SC 1.4.3 Contrast (Minimum) | https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | canon | 2026-11-11 |
| S27 | WCAG 2.2 Understanding SC 2.4.7 Focus Visible | https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html | canon | 2026-11-11 |

Opened but yielding nothing usable: https://linear.app/quality/02 (video page, no
transcript), https://linear.app/docs/start-guide (nothing on UI), https://linear.app/now
(index, used only to find articles).

## Core thesis

Linear treats software as a craft product for professionals, and treats quality as the
way the company competes, not as a cost (C20, C21, C22, C40). The founders are Finnish
designers and engineers who had worked inside fast-growing companies (Coinbase, Airbnb,
Uber) and found the tools there clumsy and slow (C41, C42, C44); slowness was the
complaint they heard most from early users, so speed became part of the definition of
quality (C17, C43, C45).

What it believes: a tool should be built for a specific someone and a specific purpose,
and should carry decisions so the user does not have to (C1, C2, C4, C36). It should
use plain names (C3), be simple at first and grow in power (C5), and be judged by
whether it feels right, which is a matter of trained judgment (C23, C24, C38).

What it refuses: unlimited flexibility (C2), designing for everyone (C36), A/B tests
and metric goals as the decision-maker (C24, C29, C38), handoffs between design and
engineering (C25, C39), carrying bugs (C26, C28), and generated output mistaken for
design (C33, C34).

How that shows in the interface: the content the user works on carries the weight and
navigation recedes (C10, C11); structure is implied by spacing and soft separators
(C12, C13); density is kept while noise is removed (C9, C14, C15); themes are generated
from a few inputs with contrast as one of them (C6, C7, C8, C35); every action has a
keyboard path that the pointer UI teaches (C18, C19); and small details the user will
never name are still designed (C16). Interfaces decay gradually, so a periodic reset is
planned work, not failure (C30, C31, C32).

Where it comes from as a business: small teams, slow hiring and early profitability
give the company room to hold this bar (C22, C27, C46, C47).

## Claims

| ID | Claim (paraphrase) | Short quote | Source | Status |
|---|---|---|---|---|
| C1 | Productivity software should be designed for a purpose | "Productivity software needs to be designed for purpose." | S1 | confirmed |
| C2 | Flexible tools push workflow design onto users and break down at scale | "Flexible software lets everyone invent their own workflows" | S1 | confirmed |
| C3 | Use existing plain terms; do not invent vocabulary | "Projects should be called projects." | S1 | confirmed |
| C4 | The tool serves the user; users should not have to design or maintain it | "A tool should work for you, not the other way around." | S1 | confirmed |
| C5 | Easy to start, more capable as the team grows | "A tool should be simple to get started with" | S1 | confirmed |
| C6 | Themes are defined by three inputs instead of 98 variables | "we defined three: base color, accent color, and contrast" | S3 | confirmed |
| C7 | A contrast input yields high-contrast themes for people who need them | "automatically include super high-contrast themes" | S3 | confirmed |
| C8 | Text and neutral icons were given more contrast in both modes | "text and neutral icons darker in light mode and lighter in dark mode" | S3 | confirmed |
| C9 | Sidebar and tabs were reworked for less noise, alignment, hierarchy and density | "aligning labels, icons, and buttons, both vertically and horizontally" | S3 | confirmed |
| C10 | Elements should not all carry equal weight; attention must be earned | "Don't compete for attention you haven't earned" | S10 | confirmed |
| C11 | The sidebar was dimmed so the content area takes precedence | "it's a few notches dimmer" | S10 | confirmed |
| C12 | Structure should be implied, not drawn | "Structure should be felt not seen" | S10 | confirmed |
| C13 | Separators were rounded and their contrast softened; they had spread without reason | "By rounding out their edges and softening the contrast" | S10 | confirmed |
| C14 | Icon use was reduced, sizes scaled down, coloured icon backgrounds removed | "reduces icon usage, scales their sizes down" | S10 | confirmed |
| C15 | Density of information is kept; the goal is to stop it overwhelming | "preserving that rich density of information" | S10 | confirmed |
| C16 | Sub-menus use a safe triangle so the pointer can travel diagonally; a detail to be felt | "draw a triangle between the mouse cursor and the sub-menu" | S5 | confirmed |
| C17 | Speed is a stated value | "At Linear we care a lot about speed." | S5 | confirmed |
| C18 | Many users prefer keyboard shortcuts because they are faster | "many Linear users prefer keyboard shortcuts for their speed" | S5 | confirmed |
| C19 | Contextual menus also teach and remind people of shortcuts | "remind yourself of the keyboard shortcut" | S5 | confirmed |
| C20 | Quality is a daily choice | "Quality is a choice we can make every day." | S9 | confirmed |
| C21 | Quality pulls users in; it was the differentiator in a crowded market | "Quality creates gravity" | S9 | confirmed |
| C22 | Profitable by year two; over 10,000 paying customers by year four with almost no marketing | "Linear became profitable by year two." | S9 | confirmed |
| C23 | Quality is recognised as something feeling right before it can be explained | "When something feels right, even if you can't exactly describe why." | S9 | confirmed |
| C24 | Judgment and listening to users are trusted over metrics alone | "listen closely to users, not just metrics" | S9 | confirmed |
| C25 | Teams stay with the work from concept to completion | "we keep teams engaged from concept to completion" | S9 | confirmed |
| C26 | Zero-bugs policy with a seven-day fix window | "Issues are fixed within 7 days" | S9 | confirmed |
| C27 | Small groups with taste decide better than committees | "3-5 people with good taste make better decisions than large committees" | S9 | confirmed |
| C28 | Quality Wednesdays train noticing; over 1,000 small fixes in two years | "Quality Wednesdays train the team to see what is off." | S13 | confirmed |
| C29 | No OKRs, no A/B tests | "We do not use OKRs or run A/B tests." | S13 | confirmed |
| C30 | Interfaces degrade gradually as features accumulate | "Software rarely gets worse all at once." | S10 | confirmed |
| C31 | Design debt builds up and has to be paid by a reset | "No software design is truly timeless." | S4 | confirmed |
| C32 | A good refresh may go unnoticed by most users | "If most people don't immediately notice what changed" | S10 | confirmed |
| C33 | Design starts with the problem, not the control | "design was never about what the button is or does" | S11 | confirmed |
| C34 | Generated form is not a solved problem | "The form is there. The fit is not." | S12 | confirmed |
| C35 | Themes are generated in LCH space from a few inputs, not hand-authored | "Linear themes are generated rather than hand-authored." | S16 | confirmed |
| C36 | Designing for everyone does not work; the best design is opinionated | "It's nearly impossible to design a product for everyone." | S22 | confirmed |
| C37 | Reduce scope to raise quality | "If you can't do everything well, start by doing less" | S22 | confirmed |
| C38 | Decisions are not made from data or experiments | "we don't make decisions based on data or experiments" | S22 | confirmed |
| C39 | No handoff; users experience the product, not the org chart | "users don't care about your org chart" | S22 | confirmed |
| C40 | Quality is not perfection; rough is fine internally, not for customers | "start with something rough and iterate toward polished craft" | S22 | confirmed |
| C41 | Founders are Finnish; Saarinen led design at Coinbase and was a principal designer at Airbnb, Artman an engineer at Uber, Lallo an engineer at Coinbase | "For me, work is serious." (Saarinen) | S23 | confirmed |
| C42 | The aesthetic is tied to Finnish design values (simplicity, durability, honest function); Iittala, Artek and Fiskars are named | "Back in the day, care for the craft was there" (Saarinen) | S23 | confirmed |
| C43 | Slowness was the complaint heard most in early user conversations; it led to a local-first architecture | "Almost everyone said that they hate when these tools are slow." | S24 | confirmed |
| C44 | At Airbnb Saarinen built a browser extension to simplify the issue tracker in use | "it's so messy and so complicated" | S24 | confirmed |
| C45 | The company positions itself on quality, craft and speed | "we are about quality, we're about this craft" | S24 | confirmed |
| C46 | Small teams deliver better and faster; slow hiring is deliberate | "small teams always delivered better quality, and faster." | S15 | confirmed |
| C47 | Projects are scoped small so the most important feature set is forced to the front | "Shorter projects force you to prioritize the most important feature set." | S20 | confirmed |
| C48 | Display options have direct shortcuts (documented example of keyboard access to a view control) | "Shift V to open display options" | S21 | confirmed |
| C49 | Issues are written short, in plain language | "describe the task in plain language" | S19 | confirmed |
| C50 | Design work begins by verifying the problem; engineers inform the solution | "understand and verify the problem." | S14 | confirmed |
| C51 | AI belongs inside a structured application, not as a bare chat surface | "A chat interface is a very weak and generic form." | S6 | confirmed |
| C52 | Sometimes deciding matters more than finding the best answer | "make a decision, and move on." | S1 | confirmed |
| C53 | Reviews (and by extension views) should open almost instantly | "Reviews should open near-instantly" | S17 | confirmed |
| C54 | Home page states speed as a design goal | "Designed for speed" | S18 | confirmed |
| C55 | WCAG 2.2 SC 1.4.3 (AA): normal text at least 4.5:1, large text 3:1 | "contrast ratio of at least 4.5:1" | S26 | confirmed |
| C56 | WCAG 2.2 SC 2.4.7 (AA): keyboard focus must be visible | "Users know which element has keyboard focus." | S27 | confirmed |
| C57 | Redesign ran as concept, stress tests, paired designers and engineers, feature flag, about six weeks | "the redesign project took about six weeks to complete." | S3 | confirmed |
| C58 | Linear runs with one PM and no metric goals (host's episode summary, not Saarinen's words) | "How Linear operates with only one PM" | S25 | confirmed (as host summary only) |
| C59 | Linear uses a specific named typeface for headings and body | n/a | S3 | discarded (IP rule: no proprietary or named typeface in the skill) |
| C60 | Keyboard-first and command menu are described on the home page or docs start guide | n/a | S18, S8 | discarded (not found on the pages opened) |

## Measurements

Collected on 2026-11-11 by the repo owner in their own browser with `research/measure.js`, because automated browsing of the site is blocked by organisation policy. One page only, the marketing home page at phone width; the product app itself was not measured. The snippet reads resting state, so focus rings and hover states are not covered. Earlier "not measured" entries under Discarded are superseded for the rows below only.

| ID | Page URL | What | Value | Viewport | Method | Date |
|---|---|---|---|---|---|---|
| M1 | https://linear.app/ | Page title (h1) | 38px, weight 510, line-height 1.1, letter-spacing -0.022em | 375x762 | research/measure.js, computed style | 2026-11-11 |
| M2 | https://linear.app/ | Section heading (h2) | 24px, weight 510, line-height 1.33, letter-spacing -0.012em | 375x762 | research/measure.js, computed style | 2026-11-11 |
| M3 | https://linear.app/ | Sub-heading (h3) | 20px, weight 590, line-height 1.33 | 375x762 | research/measure.js, computed style | 2026-11-11 |
| M4 | https://linear.app/ | Body list text | 16px, weight 400, line-height 24px | 375x762 | research/measure.js, computed style | 2026-11-11 |
| M5 | https://linear.app/ | Small controls | 28px tall; radius 8px or full pill; border 0.5px or none | 375x762 | research/measure.js, computed style | 2026-11-11 |
| M6 | https://linear.app/ | Most common transition (216 elements) | color, 0.1s, cubic-bezier(0.25, 0.46, 0.45, 0.94) | 375x762 | research/measure.js, computed style | 2026-11-11 |
| M7 | https://linear.app/ | Control state transitions | 0.16s on the same curve (filter, transform, border, background) | 375x762 | research/measure.js, computed style | 2026-11-11 |
| M8 | https://linear.app/ | Slow, large movement | transform 0.7s cubic-bezier(0.32, 0.72, 0, 1) | 375x762 | research/measure.js, computed style | 2026-11-11 |
| M9 | https://linear.app/ | Reduced-motion handling | 49 `prefers-reduced-motion` media rules in the page's stylesheets | 375x762 | research/measure.js, computed style | 2026-11-11 |

## Discarded

- All numeric UI values (type sizes, weights, spacing steps, radii, border treatment, transition durations and easings, focus ring, secondary-text contrast) because the live site could not be measured.
- "Keyboard-first" as a phrase Linear uses about itself because it was not found on any opened page; the keyboard principle rests on C17 to C19 and C48 only.
- Command menu (Cmd/Ctrl K) behaviour because no opened Linear page described it (https://linear.app/docs/keyboard-shortcuts returned 404).
- Local-first sync engine as Linear's own published claim because it was only confirmed in a third-party interview transcript (C43); kept there as background, not as a principle.
- Statements by Saarinen in the Lenny's Podcast episode (taste, work trials, Finnish brands as influence) because the opened page has no transcript; only the host's summary lines were seen (C58).
- Named typeface from the 2024 redesign post (C59) because of the IP rule.
- Sequoia article date: body says 2023-01-05, page metadata showed a 2026 date; body date used, flagged here.
- "Conversations on Quality" episode 02 because the page has no text to quote.
- https://linear.app/now/quality because it returned 404 (the essay lives at S9).

## Open questions

- Live values: needs the browser policy changed for linear.app, or the owner measuring by hand. Until then the reference file has no observed-values rows.
- Is there a Linear-published page on the command menu and shortcut design (docs or changelog)? Not found in this pass.
- The Config 2025 talk video and the "Protecting the Thinking Behind Great Design" video (linked from https://linear.app/now) were not watched; they may add direct statements on review practice.
- The final 15% of the First Round transcript (S24) was not read.
- WebFetch quotes came through a summarising model; a human spot-check of the quotes in the reference file against the pages is cheap and worth doing before the template is frozen.
