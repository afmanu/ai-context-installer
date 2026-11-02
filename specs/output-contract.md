# Installed output contract

An installation is complete only when every required file exists, required sections can be read back and unresolved checks are reported.

## Required files

```text
START-HERE.md
PROFILE.md
PRIORITIES.md
PROJECTS.md
DECISIONS.md
BOUNDARIES.md
INBOX.md
AGENTS.md
CLAUDE.md
.ai-context/state.md
.ai-context/installation-report.md
.ai-context/operating-guide.md
.ai-context/workflows/capture-context.md
.ai-context/workflows/prepare-brief.md
.ai-context/workflows/resume-work.md
```

## Required validation

- `START-HERE.md` explains how to use the workspace.
- Profile, priority, project and boundary files contain the user's approved preview.
- Unknown information remains marked unknown.
- `AGENTS.md` and `CLAUDE.md` route to `.ai-context/operating-guide.md`.
- All three workflow files exist and are non-empty.
- State is `verified` or records the precise incomplete state.
- The installation report lists created, preserved, blocked and manually verified items.
- No file exists outside the approved destination as a result of installation.

## Repair rule

Preview repairs and create only missing generated files. Never overwrite a user-modified file without explicit approval.

