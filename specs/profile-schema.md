# Profile schema

The profile is a finite representation of the information an AI needs to collaborate effectively with a person. It is not a biography, activity log, knowledge base or project history.

`specs/profile-fields.json` is the machine-readable field registry and authoritative coverage denominator. This document defines the meaning and resolution rules for those fields.

## Field envelope

Every profile field uses this structure in `.ai-context/profile.json`:

```json
{
  "value": "field value",
  "status": "confirmed",
  "source_ids": ["user-interaction-1"],
  "last_verified": "2026-11-02"
}
```

Allowed statuses:

- `candidate`: extracted or inferred but not confirmed;
- `confirmed`: explicitly approved by the user;
- `calibrated`: confirmed through a user choice or representative test;
- `accepted_safe_default`: the user accepted the documented conservative behavior;
- `not_applicable`: the field does not apply to activated use cases;
- `conflicted`: incompatible evidence remains unresolved;
- `missing`: no usable evidence exists.

Only `confirmed`, `calibrated`, `accepted_safe_default` and `not_applicable` resolve a field.

## Universal profile

Every installation evaluates these sections.

### Meta and scope

- `meta.schema_version`
- `meta.profile_id`
- `meta.created_at`
- `meta.last_verified`
- `meta.primary_language`
- `meta.time_zone`
- `scope.target_runtimes`
- `scope.activated_use_cases`
- `scope.excluded_domains`

### Professional identity

- `identity.preferred_name`
- `identity.professional_summary`
- `identity.roles`
- `identity.responsibilities`
- `identity.sectors`
- `identity.audiences`
- `identity.public_private_distinction`

### AI objectives

- `objectives.desired_outcomes`
- `objectives.recurring_uses`
- `objectives.non_goals`
- `objectives.success_signals`
- `objectives.current_frustrations`

### Expertise

- `expertise.advanced_areas`
- `expertise.intermediate_areas`
- `expertise.learning_areas`
- `expertise.assumed_knowledge`
- `expertise.explain_when`
- `expertise.methods_and_frameworks`
- `expertise.terminology`
- `expertise.trusted_source_types`

### Collaboration contract

The complete contract defined in `specs/collaboration-contract-schema.md` is universal. A field may be `not_applicable`, but no field may be omitted from coverage.

### Quality and calibration

- `quality.success_criteria_by_use_case`
- `quality.critical_failure_modes`
- `quality.approved_examples`
- `quality.rejected_examples`
- `quality.calibration_choices`
- `quality.validation_results`

## Conditional modules

Activate modules from `scope.activated_use_cases`. Every activated module becomes part of the coverage denominator.

### Creator

Activate for content, public communication or brand work:

- audience;
- positioning;
- voice and tone;
- vocabulary and avoided language;
- channels and formats;
- storytelling preferences;
- representative samples;
- claims and publication approval rules.

### Developer

Activate for programming or technical implementation:

- stack and runtime;
- package manager;
- repository conventions;
- code style;
- testing and verification;
- dependency policy;
- security expectations;
- documentation expectations.

### Founder and strategy

Activate for business or strategic decision support:

- business context;
- decision criteria;
- risk tolerance;
- reversibility preference;
- time horizon;
- stakeholder considerations;
- cost, speed and maintainability trade-offs.

### Research

Activate for research or evidence synthesis:

- evidence threshold;
- citation requirements;
- preferred source hierarchy;
- recency requirements;
- fact, inference and estimate separation;
- acceptable uncertainty.

### Consultant

Activate for client work:

- client types;
- diagnostic approach;
- proposal structure;
- confidentiality rules;
- deliverable standards;
- stakeholder communication.

### Learning

Activate for education or skill development:

- current level;
- learning objectives;
- explanation depth;
- example preference;
- practice and feedback style;
- when to reveal the answer.

## Scope boundary

Do not store active projects, tasks, notes, priorities, historical decisions, transcripts or an inbox. Those belong in a second brain or project workspace. A new use case activates a later profile expansion; it does not silently enlarge the initial installation.

