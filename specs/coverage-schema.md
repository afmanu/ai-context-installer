# Coverage schema

Coverage gives the installer a finite denominator and a deterministic stop condition.

## Coverage record

`.ai-context/coverage.json` contains:

```json
{
  "schema_version": "0.2.0",
  "applicable_fields": 42,
  "resolved_fields": 42,
  "coverage_percent": 100,
  "critical_fields": 18,
  "confirmed_critical_fields": 18,
  "open_conflicts": [],
  "missing_fields": [],
  "accepted_safe_defaults": [],
  "not_applicable_fields": [],
  "activated_modules": ["developer"],
  "status": "complete"
}
```

## Denominator

The denominator contains:

- every universal field in `specs/profile-schema.md`;
- every field in an activated conditional module;
- every collaboration-contract field;
- every required quality and calibration field.

Fields from inactive modules are excluded. Fields inside an active section may resolve as `not_applicable`, but must still appear in the report.

## Resolution

Resolved statuses:

- `confirmed`;
- `calibrated`;
- `accepted_safe_default`;
- `not_applicable`.

Blocking statuses:

- `missing`;
- `candidate` when confirmation is required;
- `conflicted`;
- stale critical information without reconfirmation.

## Gap closure

Interaction 3 must produce one complete list of every known factual blocker. Interaction 5 must produce one complete list of every remaining behavioral or calibration blocker. Every gap item identifies:

- field path;
- why it matters;
- current evidence;
- acceptable direct answer;
- optional source that could resolve it;
- safe default when one exists.

Do not use an average confidence score as a substitute for field resolution.

