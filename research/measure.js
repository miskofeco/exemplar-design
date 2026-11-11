// Paste into the DevTools console on a leader's page. Takes about 30 seconds: it
// reads computed styles, then scrolls the page top to bottom to see what moves.
// The JSON result is copied to the clipboard (and returned). Reads only; sends nothing.
// On a multi-step flow, run it on every step in the same tab: the steps accumulate
// (sessionStorage) and the last run returns them all, in order.
// Reference points for the dossier "Measurements" table, not a token set:
// font families and full palettes are left out on purpose.
await (async () => {
  const clip = typeof copy === 'function' ? copy : null; // console helper, grab it before any await
  const visible = (e) => e.getClientRects().length > 0;
  const all = (sel) => [...document.querySelectorAll(sel)].filter(visible);
  const pick = (sel, props, max = 4) =>
    all(sel).slice(0, max).map((e) => {
      const s = getComputedStyle(e);
      return { el: e.tagName.toLowerCase(), ...Object.fromEntries(props.map((p) => [p, s[p]])) };
    });
  const type = ['fontSize', 'fontWeight', 'lineHeight', 'letterSpacing'];
  const box = ['height', 'paddingTop', 'paddingLeft', 'borderRadius', 'borderTopWidth'];

  // How often each transition / animation timing occurs on the page.
  const tally = {};
  const bump = (k) => (tally[k] = (tally[k] || 0) + 1);
  for (const e of document.querySelectorAll('*')) {
    const s = getComputedStyle(e);
    if (parseFloat(s.transitionDuration) > 0)
      bump(`transition ${s.transitionProperty} ${s.transitionDuration} ${s.transitionTimingFunction}`);
    if (s.animationName !== 'none')
      bump(`animation ${s.animationDuration} ${s.animationTimingFunction} timeline:${s.animationTimeline || 'n/a'}`);
  }
  const motion = Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 15);

  // Count rules that react to reduced motion or use scroll timelines.
  let reducedMotionRules = 0, scrollTimelineRules = 0, unreadableSheets = 0;
  const walk = (rules) => {
    for (const r of rules) {
      if (r.media && /prefers-reduced-motion/.test(r.conditionText || r.media.mediaText)) reducedMotionRules++;
      if (r.style && /scroll\(|view\(/.test(r.style.animationTimeline || '')) scrollTimelineRules++;
      if (r.cssRules) walk(r.cssRules);
    }
  };
  for (const sheet of document.styleSheets) {
    try { walk(sheet.cssRules); } catch { unreadableSheets++; } // cross-origin sheet
  }

  // Scroll pass: sample transform, opacity and pinning at half-viewport steps.
  const state = new Map(); // element -> samples
  const sample = (y) => {
    for (const e of document.querySelectorAll('body *')) {
      const s = getComputedStyle(e);
      const sticky = s.position === 'sticky';
      if (!state.has(e) && s.transform === 'none' && s.opacity === '1' && !sticky) continue;
      const m = new DOMMatrixReadOnly(s.transform === 'none' ? undefined : s.transform);
      const rec = state.get(e) || state.set(e, { el: e.tagName.toLowerCase(), sticky, tx: [], ty: [], sc: [], op: [], top: [] }).get(e);
      rec.tx.push(Math.round(m.e)); rec.ty.push(Math.round(m.f));
      rec.sc.push(+Math.hypot(m.a, m.b).toFixed(2)); rec.op.push(+(+s.opacity).toFixed(2));
      if (sticky) rec.top.push(Math.round(e.getBoundingClientRect().top));
    }
  };
  const startY = scrollY, step = Math.round(innerHeight / 2);
  const maxY = Math.min(document.documentElement.scrollHeight - innerHeight, step * 60); // shortcut: first 30 viewports only, raise the cap for longer pages
  for (let y = 0; y <= maxY; y += step) {
    scrollTo({ top: y, behavior: 'instant' });
    await new Promise((r) => setTimeout(r, 400)); // let triggered transitions settle
    sample(y);
  }
  scrollTo({ top: startY, behavior: 'instant' });
  const range = (a) => Math.max(...a) - Math.min(...a);
  const longestRun = (a) => a.reduce((acc, v, i) => (v === a[i - 1] ? { n: acc.n + 1, best: Math.max(acc.best, acc.n + 1) } : { n: 1, best: Math.max(acc.best, 1) }), { n: 0, best: 0 }).best;
  const moved = [...state.values()].map((r) => ({
    el: r.el,
    travelPx: Math.max(range(r.tx), range(r.ty)),
    scale: [Math.min(...r.sc), Math.max(...r.sc)],
    opacity: [Math.min(...r.op), Math.max(...r.op)],
    // many distinct values across steps = tied to scroll position; two = triggered once
    distinctPositions: new Set(r.ty.map((v, i) => `${v},${r.tx[i]},${r.sc[i]},${r.op[i]}`)).size,
    pinnedPx: r.sticky ? (longestRun(r.top) - 1) * step : 0,
  })).filter((r) => r.travelPx || r.scale[0] !== r.scale[1] || r.opacity[0] !== r.opacity[1] || r.pinnedPx);
  const scroll = {
    pageHeightInViewports: +(document.documentElement.scrollHeight / innerHeight).toFixed(1),
    samples: Math.floor(maxY / step) + 1,
    elementsThatChange: moved.length,
    scrollLinked: moved.filter((r) => r.distinctPositions > 3).length,
    triggeredOnce: moved.filter((r) => r.distinctPositions <= 3 && !r.pinnedPx).length,
    pinned: moved.filter((r) => r.pinnedPx).map((r) => ({ el: r.el, pinnedPx: r.pinnedPx })).slice(0, 10),
    largestTravel: moved.sort((a, b) => b.travelPx - a.travelPx).slice(0, 10),
  };

  // Flow log: what this screen asks for. Heading text is kept short, as a locator only.
  const inputs = all('input, select, textarea').map((e) => e.type || e.tagName.toLowerCase());
  const thisStep = {
    path: location.pathname + location.search,
    heading: (all('h1, h2, [role=heading]')[0]?.textContent || '').trim().slice(0, 80),
    choices: all('button, [role=button], [role=radio], label').length,
    inputs,
    asksForAccount: inputs.some((t) => /email|password/.test(t)),
    hasProgress: all('[role=progressbar], progress, [aria-valuenow]').length > 0,
  };
  let steps = [];
  try {
    steps = JSON.parse(sessionStorage.getItem('exemplarSteps') || '[]');
    if (steps.at(-1)?.path !== thisStep.path) steps.push(thisStep);
    sessionStorage.setItem('exemplarSteps', JSON.stringify(steps));
  } catch { steps = [thisStep]; } // storage blocked: this step only

  const out = {
    url: location.href,
    date: new Date().toISOString().slice(0, 10),
    viewport: `${innerWidth}x${innerHeight}`,
    headings: pick('h1, h2, h3', type),
    body: pick('p, li', type),
    controls: pick('button, [role=button], input, select', [...type, ...box]),
    motion,
    runningAnimations: document.getAnimations().length,
    reducedMotionRules, scrollTimelineRules, unreadableSheets,
    scroll,
    steps,
  };
  if (clip) clip(JSON.stringify(out, null, 1));
  return out;
})();
