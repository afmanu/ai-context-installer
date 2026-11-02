# SCP profile protocol

AI Context Installer applies the Structured Conversation Protocol as a compact profile-building workflow. SCP controls progression; the profile, evidence, coverage, collaboration and completion schemas define the artifacts and exit criteria.

## Phase mapping

| SCP phase | Installer interaction | Required artifact |
|---|---|---|
| Conversation Contract | 1. Initial questions | locked scope and activated use cases |
| Problem Mapping | 2. Source contribution | source manifest and candidate profile |
| Focused Reasoning | 3. Detected gaps | complete factual profile |
| Cross-Integration | 4. Collaboration contract | confirmed behavioral contract |
| Cross-Integration and verification | 5. Calibration and closure | calibrated profile at 100% coverage |
| Final Synthesis | 6. Final approval | approved files and verification report |

## Minimum state

```json
{
  "current_interaction": 1,
  "scope": {},
  "activated_modules": [],
  "sources": [],
  "claims": [],
  "coverage": {},
  "open_conflicts": [],
  "collaboration_contract": {},
  "calibration_results": [],
  "risk_state": {},
  "approval_state": "pending"
}
```

## Transition policy

- Advance from interaction 1 only after scope is locked.
- Advance from interaction 2 only after every approved source is processed or explicitly skipped.
- Advance from interaction 3 only at 100% factual coverage with no critical conflict.
- Advance from interaction 4 only after the user confirms the full collaboration contract.
- Advance from interaction 5 only at 100% total coverage with passed calibration.
- Build during interaction 6 only after explicit approval and output validation.

Returning to a previous interaction is not a normal branch. If new evidence changes a confirmed value, update the claim, coverage and downstream contract inside the current interaction. A newly introduced use case after scope lock becomes `needs_expansion`.

## Efficiency rules

- Extract before asking.
- Present proposals for correction instead of blank questionnaires.
- Bundle related questions.
- Include an example with every question.
- Ask every known gap in one closure package.
- Prefer a targeted source request when it reduces user effort.
- Do not expose internal phase labels unless they help explain a blocker.

