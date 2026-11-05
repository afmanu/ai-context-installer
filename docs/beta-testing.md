# Beta testing

## External blind validation

| Date | Prompt | Outcome | Runtime details |
|---|---|---|---|
| 2026-11-05 | Repository link only | Installation reported complete with no issues | Not recorded |

This validates the link-only entry experience with one external user. It does not mark the Claude or Codex columns below as passed because the runtime and sanitized scenario evidence were not recorded.

## Required scenarios

| Scenario | Claude | Codex | Result |
|---|---:|---:|---|
| Minimal prompt routes to bootstrap | Pending | Pending | Pending |
| Interaction 1 bundles destination, questions and state consent | Pending | Pending | Pending |
| Interaction 2 extracts supplied sources before questioning | Pending | Pending | Pending |
| Interaction 3 presents every known factual gap together | Pending | Pending | Pending |
| Interaction 4 proposes the full collaboration contract | Pending | Pending | Pending |
| Interaction 5 calibrates only unresolved preferences | Pending | Pending | Pending |
| Interaction 6 previews and approves the exact output | Pending | Pending | Pending |
| New empty destination installs successfully | Pending | Pending | Pending |
| Non-empty destination is rejected | Pending | Pending | Pending |
| Interrupted installation resumes without repetition | Pending | Pending | Pending |
| Source originals and secrets are not retained | Pending | Pending | Pending |
| Output contract and 100% coverage validate | Pending | Pending | Pending |

## Acceptance metrics

- No more than six onboarding responses after the minimal request.
- No question asks for information already available in approved evidence.
- Every question includes an example.
- Interaction 3 contains every factual blocker known at that point.
- Final coverage is 100% with zero open critical conflicts.
- A representative task, decision, approval boundary and adapted output pass calibration.
- A new session follows the profile without loading source originals.

A scenario is verified only with a real run and sanitized evidence. Repository instructions and fixture tests are not runtime proof.

