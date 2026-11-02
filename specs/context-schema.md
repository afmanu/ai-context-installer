# Context schema

## Record states

Every durable statement must have one of these states:

- `confirmed`: directly approved by the user or supported by an approved source;
- `proposed`: suggested but not confirmed;
- `unknown`: required information is unavailable;
- `superseded`: previously valid but replaced by a newer confirmed statement.

Never silently convert proposed or inferred information into confirmed context.

## Minimum provenance

Durable records should include, inline or in their section:

- state;
- source, normally `user` or an approved file;
- date last confirmed;
- scope: global or named project;
- predecessor when a correction supersedes earlier context.

## File responsibilities

### PROFILE.md

Confirmed role, responsibilities, stable working preferences and communication preferences.

### PRIORITIES.md

Current priorities, intended outcome, status, review condition and last confirmation date.

### PROJECTS.md

One section per active project: outcome, state, known evidence, latest completed result, blockers, next step and open questions.

### DECISIONS.md

Confirmed or proposed decisions with scope, rationale supplied by the user, alternatives when known, review condition and supersession link.

### BOUNDARIES.md

Actions requiring approval, prohibited actions, sensitive categories, collaboration preferences and explicit non-goals.

### INBOX.md

Unclassified or temporary material. Inbox content is not confirmed durable context until reviewed.

## Precedence

When records conflict, prefer:

1. a newer explicit user correction;
2. a newer confirmed scoped record;
3. an older confirmed record;
4. a proposal;
5. an inference.

Do not use recency alone to override a record with a different scope.

