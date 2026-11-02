# Setup state machine

## States

```text
not_started
runtime_detected
destination_selected
checkpoint_approved
interview_in_progress
preview_ready
build_approved
files_created
verified
handed_off
blocked
```

## Transition rules

- Read-only runtime detection may start from `not_started`.
- `destination_selected` requires an absolute, dedicated destination.
- `checkpoint_approved` requires approval to create `.ai-context/state.md`.
- Each interview answer is checkpointed before the next question.
- `build_approved` requires the complete file preview and explicit approval.
- `verified` requires readback against `specs/output-contract.md`.
- `handed_off` requires a verification result and first safe action.
- Any missing capability moves to `blocked` with a reason and recovery instruction.

## Resume

Read `.ai-context/state.md`, confirm the destination still matches and continue from the next incomplete step. Do not ask confirmed questions again. If state and files disagree, inspect and report the difference before writing.

