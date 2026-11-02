# Setup state machine

## States

```text
not_started
runtime_detected
interaction_1_scope
interaction_2_sources
interaction_3_gaps
interaction_4_contract
interaction_5_calibration
interaction_6_approval
build_approved
files_created
verified
handed_off
blocked
cancelled
needs_expansion
```

## Transition rules

- Read-only runtime detection may start from `not_started`.
- Interaction 1 includes destination selection, state-file approval and initial scope questions.
- Interaction 2 requires locked scope and processes every approved source.
- Interaction 3 requires a complete source extraction pass and closes all factual gaps.
- Interaction 4 requires 100% factual coverage and produces a complete collaboration contract.
- Interaction 5 requires a confirmed contract and resolves calibration and behavioral gaps.
- Interaction 6 requires 100% coverage and shows the complete output preview.
- `build_approved` requires explicit final approval.
- `verified` requires readback against `specs/output-contract.md` and all gates in `specs/completion-schema.md`.
- Missing critical information, permission or capability moves to `blocked` with an exact reason.

## Resume

Read `.ai-context/state.md`, confirm the destination and interaction number, then continue from the first incomplete gate. Do not repeat resolved questions or reprocess unchanged sources. If state and files disagree, inspect and report the difference before writing.

