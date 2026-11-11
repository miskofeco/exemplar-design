# Onboarding after Duolingo

Contents: [Scope](#scope) · [Leader fit](#leader-fit) · [Core](#core) ·
[Principles](#principles) · [Observed values](#observed-values) ·
[Anti-patterns](#anti-patterns) · [Critique checklist](#critique-checklist)

## Scope

Read this when: building or reviewing a first-run flow, sign-up, activation, goal
setting, first-session reward, or a reminder opt-in.
Not this file: the feedback of a single control (`micro-interactions.md`); the page that
leads into the flow (`landing-layout.md`).

## Leader fit

- Why this exemplar: Duolingo publishes the tests and reasoning behind its first-run and
  habit design, so most rules here rest on its own posts.
- Where it transfers poorly: products used rarely or for one task (daily streaks become
  nagging); B2B tools where an account is needed before any value exists; regulated or
  sensitive domains, where playful pressure reads as careless. Duolingo itself uses
  guilt and urgency in places; principle 8 marks where not to follow it.
- Grounding: strong for philosophy and tests; thin for live measurements (four pages,
  step count and order not recorded). Canon sources: NN/g, deceptive.design, B. J. Fogg.
- Last verified: 2026-11-11

## Core

Duolingo treats the first run as a motivation problem. It says outright that
[motivation is the hardest part of learning](https://blog.duolingo.com/duolingo-company-strategy/)
and designs for the user coming back tomorrow, not for a completed form. The reason is
commercial as much as kind: the product is free, [most users arrive organically](https://blog.duolingo.com/growth-model-duolingo/),
and money comes later from a small paying share, so a lost first session loses everything
after it. Hence the order: let people do the thing first, and
[ask for the account afterwards](https://review.firstround.com/the-tenets-of-a-b-testing-from-duolingos-master-growth-hacker/).
Ask for a commitment so small it is hard to refuse,
[one lesson a day](https://blog.duolingo.com/improving-the-streak/), and guard it with a
streak that [leans on loss aversion but is given slack](https://blog.duolingo.com/how-duolingo-streak-builds-habit).
Everything is A/B tested, yet the company names limits: mission over metrics, and
spammy notifications and deceptive patterns called short-term tactics. Its own posts
also admit guilt and a desperate mascot, so the method has an edge that needs watching.

Carry this: earn the next visit before you ask for anything, and never buy it with shame.

## Principles

### 1. Design the first run for the second visit

- Why: a user who finishes setup but feels nothing has no reason to return; the first
  session must end with a reason to come back.
- Evidence: `[published]` https://blog.duolingo.com/duolingo-company-strategy/
- Also supported by: Duolingo's growth model defines new-user retention as day-1 users who return on day 2, https://blog.duolingo.com/growth-model-duolingo/
- On the web:

```css
/* the last step is a result and a next action, not a "you're all set" dead end */
.onb-step--done { --done-next-cta: block; }
.onb-step--done .next-visit { display: var(--done-next-cta); }
```

### 2. Refuse wins that cost trust

- Why: tricks raise this week's number and teach the user to ignore or leave you.
  Duolingo names spammy notifications and deceptive patterns as short-term tactics.
- Evidence: `[published]` https://blog.duolingo.com/duolingo-company-strategy/
- Also supported by: then VP Growth on mission outranking metrics, https://review.firstround.com/the-tenets-of-a-b-testing-from-duolingos-master-growth-hacker/; former CPO J. Mazal on a rule to protect the notification channel, https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth
- On the web:

```css
/* no pre-ticked consent, no hidden decline: both choices are real controls */
.consent input[type="checkbox"] { accent-color: var(--onb-accent); } /* unchecked in markup */
```

### 3. Give value before asking for an account

- Why: the user experiences the product while curiosity is highest; a form first makes
  them pay before they know what for. Moving sign-up behind a first lesson raised daily
  actives by about 20% in Duolingo's test.
- Evidence: `[published]` https://review.firstround.com/the-tenets-of-a-b-testing-from-duolingos-master-growth-hacker/
- Also supported by: NN/g on login walls and reciprocity, https://www.nngroup.com/articles/login-walls/
- On the web:

```css
/* account step sits after the first real task in source order */
.onb-flow { display: grid; --onb-account-order: 99; }
.onb-step--account { order: var(--onb-account-order); }
```

### 4. Make the account ask skippable and frame it as saving progress

- Why: the user now has something to lose, so the ask makes sense; a quiet "later"
  keeps them in control. Skippable prompts before a mandatory one outperformed the
  mandatory one alone, and a muted "Later" beat a loud discard button.
- Evidence: `[published]` https://review.firstround.com/the-tenets-of-a-b-testing-from-duolingos-master-growth-hacker/
- Also supported by: Duolingo 101 presents the profile as a way to keep progress, https://blog.duolingo.com/duolingo-101-how-to-learn-a-language-on-duolingo/
- On the web:

```css
.onb-skip { /* real button, quiet but readable, never a threat */
  background: none; border: 0; color: var(--onb-text-muted);
  min-block-size: var(--onb-target, 44px); font: inherit;
}
```

### 5. Ask for the smallest daily commitment that still counts

- Why: an ambitious goal feels good on day one and becomes the reason to quit on day
  three. Duolingo found the goal itself was a barrier and let one lesson keep the streak.
- Evidence: `[published]` https://blog.duolingo.com/improving-the-streak/
- Also supported by: B. J. Fogg, behaviour needs ability as well as motivation, https://behaviormodel.org/
- On the web:

```css
/* the lightest option is the pre-selected, first-listed choice */
.goal-option:first-of-type { order: -1; }
.goal-option[aria-checked="true"] { border-color: var(--onb-accent); }
```

### 6. Let the user state the goal in their own terms

- Why: a goal the user picked is theirs; later reminders can refer to it instead of to
  your product's needs.
- Evidence: `[published]` https://blog.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals/
- On the web:

```css
.goal-list { display: grid; gap: var(--onb-gap, 12px); } /* radio group, one tap each */
.goal-option { min-block-size: var(--onb-target, 44px); text-align: start; }
```

### 7. Build slack into the commitment device

- Why: a streak works because people dislike losing it, and for the same reason a lost
  streak makes them quit. Duolingo says fear of loss can stop people starting, and adds
  a freeze day; more slack raised daily activity.
- Evidence: `[published]` https://blog.duolingo.com/how-duolingo-streak-builds-habit
- On the web:

```css
/* a missed day shown as "protected", not as a broken chain */
.streak-day[data-state="frozen"] { background: var(--onb-surface-calm); opacity: 1; }
```

### 8. Stop where motivation becomes guilt or pressure

- Why: decline options and reminders worded to shame the user steer a decision by
  discomfort, not by value. Duolingo's own posts describe guilt and a desperate mascot;
  do not copy that part.
- Evidence: `[canon]` deceptive.design, confirmshaming, https://www.deceptive.design/types/confirmshaming
- Also supported by: Duolingo lists deceptive patterns among tactics it rejects, https://blog.duolingo.com/duolingo-company-strategy/
- On the web:

```css
/* decline is neutral text ("Not now"), same font size, no red, no sad imagery */
.onb-skip, .onb-decline { color: var(--onb-text-muted); font-size: 1em; }
```

### 9. Rename the steps that sound like judgement

- Why: words such as "test" make a helpful step feel like an exam, so people skip it and
  start in the wrong place. Rewording a placement step doubled its use in Japan.
- Evidence: `[published]` https://blog.duolingo.com/lessons-from-asia-turning-local-research-into-global-experiments/
- On the web:

```html
<!-- "Find your starting point", not "Take the assessment" -->
<button class="onb-choice">Find my starting point</button>
```

### 10. Mark the first win, and praise effort

- Why: the first success is the moment the user decides whether this is for them.
  Milestone animations raised 7-day retention of brand-new learners.
- Evidence: `[published]` https://blog.duolingo.com/how-duolingo-streak-builds-habit
- Also supported by: effort-praising coach copy beat talent praise, https://review.firstround.com/the-tenets-of-a-b-testing-from-duolingos-master-growth-hacker/; character celebrations, https://blog.duolingo.com/building-character/
- On the web:

```css
.first-win { animation: pop var(--onb-celebrate, 400ms) ease-out both; }
@keyframes pop { from { transform: scale(.9); opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .first-win { animation: none; } }
```

### 11. Explain a reminder before asking permission for it

- Why: a bare permission prompt is a cost with no stated benefit. Saying how reminders
  help raised opt-in for German speakers and did nothing for Spanish speakers, so test
  the wording per audience and keep volume low.
- Evidence: `[published]` https://blog.duolingo.com/copy-testing-experiments/
- Also supported by: former CPO on never raising notification volume without strong cause, https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth
- On the web:

```css
/* benefit sentence sits above the two equal-weight choices */
.remind-ask { display: grid; gap: var(--onb-gap, 12px); }
.remind-ask .why { font-size: var(--onb-body, 1rem); }
```

### 12. One decision per screen, with the steps left in view

- Why: one question answered by one tap keeps effort low, and a visible count tells the
  user the end is near. This is our translation; the live flow was not measured.
- Evidence: `[inferred]` from Duolingo's bite-sized lesson principle, https://blog.duolingo.com/duolingo-teaching-method/
- Also supported by: NN/g on showing the number of steps, https://www.nngroup.com/articles/progress-indicators/
- On the web:

```css
.onb-progress { inline-size: 100%; block-size: var(--onb-bar, 8px); border-radius: 999px; }
.onb-step { max-inline-size: var(--onb-measure, 32rem); margin-inline: auto; }
```

## Observed values

Reference points, not a spec. How to read this: answers are large tappable cards and the one forward action is a 50px button, which fits one decision per screen (principle 12); progress and step changes move in 0.4 to 0.7s, slow enough to be noticed as a reward. Step count and order before the account request are still unknown; do not state them.

| What | Value | Where (URL) | Viewport | Date |
|---|---|---|---|---|
| Headings | h1 32px, h2 36px, both weight 700 | https://cs.duolingo.com/ | 375x762 | 2026-11-11 |
| Body text | 17px, weight 400, line-height 24px | https://cs.duolingo.com/ | 375x762 | 2026-11-11 |
| Call-to-action buttons | 50px tall, radius 12px, label 15px weight 700 with 0.8px letter-spacing; secondary has a 2px border | https://cs.duolingo.com/ | 375x762 | 2026-11-11 |
| Step heading | h1 32px, weight 700, line-height 40px | https://cs.duolingo.com/register | 1070x861 | 2026-11-11 |
| Choice cards (buttons) | 217px tall, radius 16px, 2px border, 12px padding, label 17px | https://cs.duolingo.com/register | 1070x861 | 2026-11-11 |
| Continue button | 50px tall, radius 16px, label 15px weight 700 | https://cs.duolingo.com/welcome | 1070x861 | 2026-11-11 |
| Progress-bar style motion | width transition 0.4s ease | https://cs.duolingo.com/welcome | 1070x861 | 2026-11-11 |
| Step transitions | transform 0.7s ease-in-out (5 elements); state changes 0.4s ease | https://cs.duolingo.com/welcome?welcomeStep=hdyhau | 1070x861 | 2026-11-11 |
| Step addressing | each question is its own URL state (`welcomeStep` parameter) | https://cs.duolingo.com/welcome?welcomeStep=hdyhau | 1070x861 | 2026-11-11 |

## Anti-patterns

- Sign-up form as step one, because it breaks principle 3.
- A decline button that names a loss or uses shame ("No, I don't care about my goals"),
  because it breaks principles 4 and 8.
- A crying or desperate mascot, countdowns or guilt copy to force a return, because it
  breaks principle 8 even though the exemplar does it.
- Defaulting to the most ambitious goal, because it breaks principle 5.
- A streak that resets to zero with no recovery, because it breaks principle 7.
- A badge or confetti for creating an account, because it breaks principle 10: Duolingo
  removed its sign-up badge when it had no effect.
- A permission prompt with no reason given, or more reminders to lift a metric, because
  it breaks principles 2 and 11.
- Copying a streak or league into a product nobody uses daily, because it breaks the
  leader-fit note.

## Critique checklist

- [ ] Does the final step give a reason and a path to return? (principle 1)
- [ ] Are all consent boxes unchecked and all declines visible? (principle 2)
- [ ] Can the user complete one real task before any account field appears? (principle 3)
- [ ] Is the account ask skippable and worded as keeping progress? (principle 4)
- [ ] Is the lightest commitment listed first or preselected? (principle 5)
- [ ] Does the user choose a goal, by tap, in plain words? (principle 6)
- [ ] Is there a visible way to recover from a missed day? (principle 7)
- [ ] Is every decline and reminder free of guilt, threat and sad imagery? (principle 8)
- [ ] Are step names free of "test", "assessment", "required"? (principle 9)
- [ ] Is the first success marked, with reduced-motion respected? (principle 10)
- [ ] Does a benefit sentence precede any permission request? (principle 11)
- [ ] One question per screen, steps remaining visible? (principle 12)
