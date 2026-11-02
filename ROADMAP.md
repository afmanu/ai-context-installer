# Roadmap

## 0.1.0 beta candidate

| Milestone | Status | Exit criterion |
|---|---|---|
| Product contract and source map | Complete | Scope, provenance and exclusions documented |
| Installed context schema | Complete | Demo satisfies the output contract |
| Minimal-prompt bootstrap | Implemented, unverified | Real Claude and Codex runs start without an expanded prompt |
| Resumable onboarding | Implemented, unverified | Interrupted run resumes from `.ai-context/state.md` |
| Preview, consent and no-overwrite behavior | Implemented, unverified | Real run creates only approved files in an empty destination |
| Capture, brief and resume workflows | Implemented, fixture-tested | Runtime tests preserve states, scopes and boundaries |
| Claude and Codex adapters | Initial | At least one clean installation succeeds in each runtime |
| Package validation | Complete | `npm test` and `npm run validate` pass |
| External beta | Pending | At least three users install without repository knowledge |
| Public GitHub release | Pending | Beta evidence, sanitized issues and release checklist reviewed |

## Later candidates

- Adopt an existing workspace without replacing its conventions.
- Review and expire stale context.
- Add project-specific context files when a single `PROJECTS.md` no longer scales.
- Add Cursor after Claude and Codex behavior is verified.
- Export a minimal context summary for a separate chat without copying the full workspace.

## Evidence gate

Do not add RAG, a database, global configuration, synchronization, multi-agent orchestration or a dashboard without a beta problem that the file-based design cannot solve.

