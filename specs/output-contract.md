# Installed output contract

An installation is complete only when every required file exists, JSON parses, required sections can be read back and every completion gate passes.

## Required files

```text
START-HERE.md
AI-CONTEXT.md
AGENTS.md
CLAUDE.md
.ai-context/profile.json
.ai-context/sources.json
.ai-context/coverage.json
.ai-context/state.md
.ai-context/installation-report.md
.ai-context/operating-guide.md
```

## Required Markdown sections

`AI-CONTEXT.md` contains:

- identity and professional context;
- AI objectives and activated use cases;
- expertise and explanation level;
- how to work with the user;
- communication;
- reasoning and decisions;
- autonomy and approvals;
- tools and environment;
- outputs and quality;
- privacy and boundaries;
- activated specializations;
- provenance and verification date.

## Required JSON checks

- `profile.json` declares schema version `0.2.0` and contains the approved structured profile.
- `sources.json` contains only metadata and approved source records, not source bodies.
- `coverage.json` reports 100% applicable coverage, zero open critical conflicts and `complete` status.
- `state.md` records interaction 6, explicit approval and `verified` or the precise incomplete state.

## Adapter checks

- `AGENTS.md` and `CLAUDE.md` route to `.ai-context/operating-guide.md` and `AI-CONTEXT.md`.
- The installed operating guide equals `core/operating-guide.md`.
- No project tracker, priorities file, decisions log, inbox or source original is created.

## Installation report

The report lists created, preserved, blocked and verified items, source-retention checks, coverage status and manual checks.

## Repair rule

Preview repairs and create only missing generated files. Never overwrite a user-modified file without explicit approval.

