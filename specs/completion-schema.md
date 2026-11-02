# Completion schema

Completion is determined by verified profile state, not conversation length or model confidence.

## Completion formula

```text
complete =
  scope_locked
  AND source_extraction_complete
  AND applicable_field_coverage == 100%
  AND critical_field_confirmation == 100%
  AND open_critical_conflicts == 0
  AND source_consent_complete
  AND collaboration_contract_confirmed
  AND calibration_complete
  AND use_case_tests_passed
  AND output_contract_valid
  AND user_approved
```

## Required gates

### Scope gate

- At least one use case is confirmed.
- Target runtimes and excluded domains are resolved.
- Conditional modules are activated deterministically.

### Evidence gate

- Every consulted source was explicitly supplied or approved.
- Every active claim has provenance.
- Inferences remain candidates until confirmed.
- No source original is copied into the output.

### Coverage gate

- Universal and activated conditional fields appear in coverage.
- All applicable fields use a resolved status.
- Every critical field is `confirmed` or `calibrated`.
- No critical conflict remains open.

### Contract gate

- Working, communication, decision, autonomy, environment, output and privacy rules are confirmed.
- Safe defaults are named and explicitly accepted.

### Calibration gate

- Important uncertain preferences are tested through representative choices.
- At least one task, decision, approval boundary and adapted output are checked across activated use cases.
- Failed tests produce a correction before approval.

### Approval and build gate

- Interaction 6 contains the complete preview and exact destination.
- The user explicitly approves or supplies self-contained corrections followed by approval.
- JSON files parse, required Markdown sections exist and readback succeeds.

## Terminal statuses

- `complete`: every gate passed and installation was verified;
- `blocked`: a critical field, permission, capability or validation remains unresolved;
- `cancelled`: the user stopped installation;
- `needs_expansion`: the user introduced a new use case after scope was locked.

Never report a percentage below 100 as complete. Never convert `blocked` into `complete` because the six-interaction budget ended.

