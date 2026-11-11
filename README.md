# exemplar-design

A Claude skill that builds and critiques web UI in ten design areas, each after one
named industry exemplar. Every principle carries an evidence tag and a source link.

Status: Phase 0 (foundation). No area content yet; see [PLAN.md](PLAN.md).

Not affiliated with, endorsed by or sponsored by any company named in this repository.
Company names are used only to identify the publicly visible work being described.

## Layout

- `skills/exemplar-design/` the skill (`SKILL.md`, `references/`, `evals/`)
- `templates/` authoring templates for an area file and a research dossier
- `research/` one dossier per area; kept in the repo, not shipped in the skill
- `.claude-plugin/` plugin and marketplace manifests

## Verify

```bash
claude plugin validate .
```

```bash
wc -l skills/exemplar-design/SKILL.md
```

## Licence

MIT, see [LICENSE](LICENSE).
