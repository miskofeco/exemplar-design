// Paste into the DevTools console on a leader's page. Copies a JSON summary of
// computed styles to the clipboard (and returns it). Reads only; sends nothing.
// Reference points for the dossier "Measurements" table, not a token set:
// font families and full palettes are left out on purpose.
(() => {
  const visible = (e) => e.getClientRects().length > 0;
  const pick = (sel, props, max = 4) =>
    [...document.querySelectorAll(sel)].filter(visible).slice(0, max).map((e) => {
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
  const top = Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 15);

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

  const out = {
    url: location.href,
    date: new Date().toISOString().slice(0, 10),
    viewport: `${innerWidth}x${innerHeight}`,
    headings: pick('h1, h2, h3', type),
    body: pick('p, li', type),
    controls: pick('button, [role=button], input, select', [...type, ...box]),
    focusOutline: pick('a, button', ['outlineStyle', 'outlineWidth'], 2),
    motion: top,
    runningAnimations: document.getAnimations().length,
    stickyElements: [...document.querySelectorAll('*')].filter((e) => getComputedStyle(e).position === 'sticky').length,
    reducedMotionRules, scrollTimelineRules, unreadableSheets,
  };
  if (typeof copy === 'function') copy(JSON.stringify(out, null, 1));
  return out;
})();
