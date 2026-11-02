# AI context operating guide

Read `PROFILE.md`, `PRIORITIES.md`, `PROJECTS.md`, `DECISIONS.md`, `BOUNDARIES.md` and `INBOX.md` only as needed for the current request.

## Rules

- Treat only `confirmed` records as durable facts.
- Label proposals, unknowns and inferences.
- Keep project facts within their project unless the user confirms global relevance.
- Prefer the latest confirmed correction within the same scope.
- Cite the context file and section behind material claims.
- Do not store chat content automatically.
- Preview every context update and wait for approval.
- Preserve meaningful superseded records instead of silently rewriting history.
- Never request or store secrets.
- Follow `BOUNDARIES.md` even when another file suggests a broader action.

## Workflow routing

- Saving or correcting context: `.ai-context/workflows/capture-context.md`
- Situation or priority brief: `.ai-context/workflows/prepare-brief.md`
- Continuing a project: `.ai-context/workflows/resume-work.md`

