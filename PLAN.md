# exemplar-design: phased plan

## Context

You want a design skill for web work where each design area is grounded in one industry
leader and every principle is traceable to a fact, built in batches. The project folder
`/Users/michalfeco/Projects/skillfull-design-principles` is empty (no git repo yet).
Research covered three things: current skill standards (agentskills.io spec, Anthropic
best-practice docs, Claude Code skill and plugin-eval docs), the seven design skills
already installed here, and how well each leader can be grounded in citable sources.

What the research changes:

- Existing skills (impeccable, ui-ux-pro-max, unslop, frontend-design) already cover
  animation, onboarding, typography and landing pages generically. None uses real
  companies as exemplars, none tags evidence, none has evals. That is this skill's niche.
- Search & filters and micro-interactions have no dedicated coverage anywhere: highest
  added value.
- Grounding strength: strong for Apple, Duolingo, Linear; medium-strong for Stripe,
  Airbnb; medium for Framer, MUJI; weak for Pentagram, Notion, Aesop.
- The research agent read search snippets only. No quoted figure is usable until its
  source page has been opened and checked.

## Goal

One portable skill, `exemplar-design`, that builds and critiques web UI in ten areas,
each after one named leader, with every principle carrying an evidence tag and a source.
Shipped as a plugin repo (source of truth) plus a packaged `.skill` file.

## Decisions (yours)

- Distribution: plugin repo + `.skill` file.
- Mode: build and critique.
- Stack: agnostic, HTML/CSS first (custom properties, plain CSS values).
- Weak leaders: keep the leader as exemplar, fill gaps from a labelled canonical source.
- Name: `exemplar-design`.

## Constraints

- One skill, not ten. Reasons: impeccable moved from many skills to one for context cost;
  ten overlapping descriptions would compete with each other and with installed skills;
  one folder packages cleanly to `.skill`.
- Frontmatter limited to the six open-spec fields (`name`, `description`, `license`,
  `compatibility`, `metadata`, `allowed-tools`). claude.ai rejects any other key.
- `description`: third person, what + "Use when...", key use case first, max 1024 chars,
  and says what it is not for (generic polish goes to other skills).
- `SKILL.md` under 500 lines and about 5,000 tokens, critical rules at the top (only the
  first 5,000 tokens survive compaction).
- References one level deep, a table of contents in any file over 100 lines, target
  200 lines per area file.
- IP: brand names as plain text only, no logos, no brand in the skill name, paraphrase
  with links, quotes under 15 words, measured values labelled "observed on <date>",
  never a full token set or proprietary font, and a "not affiliated" line.
- Org policy: no secrets or personal data; the `.skill` zip is a build artifact, so it
  is git-ignored and never committed.
- No new dependencies. `skills-ref` is optional and only used if already installed.

## Repo layout

- `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`
- `skills/exemplar-design/SKILL.md`: router table (area -> reference file), build
  workflow, critique workflow, evidence rules, cross-area conflict rules
- `skills/exemplar-design/references/<area>.md`: ten files, one template
- `skills/exemplar-design/evals/<case-name>/`: `prompt.md`, `case.yaml`, `graders/`
  (format from skill-creator `references/schemas.md`, "Test cases" section)
- `research/<area>.md`: dossier per area (sources read, quotes, measurements, dates).
  Kept in the repo, not shipped inside the skill.
- `README.md`, `LICENSE`, `.gitignore`
- `exemplar-design-workspace/` (sibling of the skill, git-ignored): eval run outputs

## Evidence contract (the core of "grounded")

Every principle in a reference file carries one tag and a link:

- `[published]` the leader's own guideline, post or talk
- `[observed YYYY-MM-DD]` measured on the live site (computed styles, timings, layout)
- `[canon]` a recognised outside authority, named (used for the four weak leaders)
- `[inferred]` our translation to the web, stated as such, never presented as fact

Area file template: scope and when to read; leader fit note with last-verified date;
core (what the exemplar stands for); 8 to 12 principles ordered from belief to craft
(rule, why, tag + link, optional third-party support, CSS translation); table of
observed values; anti-patterns; critique checklist.

Direction set at the start of Phase 1: an area file is not a spec sheet. It leads with
the exemplar's philosophy (what it believes and refuses, the psychology and business
reasoning behind it), and measurements only illustrate that. The leader's own material
comes first; named third-party sources may back a principle as "Also supported by", or
carry it alone under `[canon]`.

## Per-area pipeline (repeated for every area)

1. Dossier: open and read each source (leader first, then named third parties), record
   claim, short quote, URL and date in `research/<area>.md`, and write the core thesis.
   Discard anything not confirmed on the page.
2. Measure: load the leader's live site in the built-in browser and record computed
   values that illustrate the principles.
3. Distill: write `references/<area>.md` from the dossier using the template.
4. Eval prompts: add or adjust case prompts for the area. No runs here; all billed
   runs, graders and revisions happen in Phase 5.

## Folder roadmap

| Folder | Filled in | Holds |
|---|---|---|
| `templates/` | Phase 0, frozen after Phase 1 review | Area and dossier templates |
| `research/` | Phases 1 to 3 | One dossier per area |
| `skills/exemplar-design/references/` | Phases 1 to 3 | One area file per area |
| `skills/exemplar-design/SKILL.md` | Phase 0, conflict rules in Phase 4 | Router, workflows, evidence rules |
| `skills/exemplar-design/evals/<case>/prompt.md`, `case.yaml` | Phases 0 to 4 | Case prompts and expected outcomes |
| `skills/exemplar-design/evals/<case>/graders/` | Phase 5 | Real graders, written after first runs |
| `exemplar-design-workspace/iteration-N/` (git-ignored) | Phase 5 | Run outputs, benchmarks, one folder per improvement round |
| `dist/*.skill` (git-ignored) | Phase 6 | Packaged skill |

## Phases

Phase 0, Foundation (no area content)
1. `git init`, plugin manifest, marketplace file, `.gitignore`, licence, README stub.
2. `SKILL.md` skeleton: router, both workflows, evidence rules, draft description.
3. Area template and dossier template.
4. Three eval cases written before any content, plus no-skill baseline runs.
5. Run validation; fix until clean.

Phase 1, Pilot batch (strongest grounding, proves the template)
- UI design after Linear; onboarding after Duolingo; animation after Apple.
- Exit: template and evidence tags adjusted from your review, then frozen.

Phase 2, Measurable batch (live-site measurement carries most of the weight)
- Landing page layout after Stripe; search & filters after Airbnb; micro-interactions
  after Framer (Motion library docs cited as the published source, flagged as such).

Phase 3, Canon-supplemented batch
- Typography after Pentagram (+ Butterick); minimalism after MUJI (+ Hara, Fukasawa);
  art direction after Aesop; dashboards after Notion (+ Stephen Few, NN/g).
- Each canon source is confirmed with you at the start of the phase.

Phase 4, Integrate
1. Cross-area conflict rules (for example minimalism versus micro-interactions).
2. Complete the eval set: one build and one critique case per area, prompts and
   expected outcomes only.

Phase 5, Evaluate and self-improve (all billed runs live here)
1. Baseline: every case with-skill and no-skill into `iteration-1/`.
2. Write real graders from what those runs show.
3. Improvement loop: review in the skill-creator viewer, your feedback, revise
   reference files and `SKILL.md`, re-run into `iteration-N/`, compare benchmarks.
   Stop when a round no longer improves the with-skill score.
4. Description optimisation: 20 trigger queries, including near-misses that should go
   to impeccable, ui-ux-pro-max or unslop instead.

Phase 6, Release
1. Package `.skill`, finish README and marketplace entry, tag v1.0.0.
2. Record a re-verification date per area (observed values go stale).

Each phase ends with a commit and your review before the next starts.

## Verification

Run from the repo root:

- `claude plugin validate .`
- `wc -l skills/exemplar-design/SKILL.md` (must be under 500)
- `claude plugin eval . --allow-tools Write,Edit,Bash` (real, billed runs)
- From the skill-creator folder: `python -m scripts.package_skill <repo>/skills/exemplar-design`
- From the skill-creator folder: `python -m scripts.aggregate_benchmark <workspace>/iteration-N --skill-name exemplar-design`
- Per area, by hand: every principle has a tag and a working link; no `[published]`
  claim without a dossier entry; no quote over 15 words.

## Risks

- Trigger collisions with four installed design skills. Mitigated by a narrow
  description and near-miss tests in Phase 5, not before.
- Apple's published motion principles are for native apps; the web translation is
  `[inferred]` and will be labelled so.
- Observed values drift as sites redesign (Airbnb reportedly changed its category bar
  in 2025). Dates are recorded and re-checked.
- Design quality is subjective: graders check evidence and structure; visual quality is
  judged by you in the viewer.
- Not yet verified: whether `claude plugin eval` and `package_skill` handle an `evals/`
  folder inside the skill the way the docs imply. Checked at the start of Phase 5.
- No area content is tested until Phase 5, so a template flaw found there costs a
  rewrite of up to ten files. Your review at the end of Phase 1 is the early check.

## Questions

- None blocking. Canon sources for Phase 3 and the public licence (MIT assumed) are
  confirmed when those steps come up.
