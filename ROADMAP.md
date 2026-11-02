# Roadmap

## 0.2.0 beta candidate

| Milestone | Status | Exit criterion |
|---|---|---|
| Finite profile schema | Implemented | Universal and conditional fields have resolution rules |
| Evidence and provenance | Implemented | Approved sources produce traceable candidate claims |
| Six-interaction SCP flow | Implemented, unverified | A real installation reaches approval without extra onboarding interactions |
| Gap closure | Implemented, unverified | Interaction 3 contains every known factual blocker |
| Collaboration contract | Implemented, fixture-tested | Behavioral rules are confirmed independently from factual identity |
| Calibration and completion | Implemented, fixture-tested | Demo reaches 100% applicable coverage with no critical conflict |
| Claude and Codex adapters | Initial | One clean installation succeeds in each runtime |
| Package validation | Complete | `npm test` and `npm run validate` pass |
| External beta | Pending | Three users complete a profile without repository knowledge |
| Public GitHub release | Pending | Beta evidence and release checklist are reviewed |

## Later candidates

- Adopt an existing workspace without replacing its conventions.
- Add Cursor and ChatGPT adapters after Claude and Codex are verified.
- Refresh an approved profile through a diff-based update flow.
- Add optional source connectors only when file and URL contribution is insufficient.
- Export task-specific context without exposing the full profile.

## Evidence gate

Do not add RAG, a database, global configuration, synchronization, multi-agent orchestration or a dashboard without a beta problem the file-based design cannot solve.

