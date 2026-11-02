# Bootstrap

This is the canonical installation entrypoint.

## Installation intent

Treat a request to install, set up or create the user's AI context, accompanied by this repository or its URL, as installation intent.

The minimal request is complete. Do not ask the user to mention internal files, runtimes, schemas, permissions or verification. Do not summarize the repository unless analysis was explicitly requested.

Installation intent authorizes read-only inspection and planning. It does not authorize creating files, installing packages, changing configuration or connecting services.

## Required references

Read before acting:

1. `specs/setup-state-machine.md`
2. `specs/security-and-consent.md`
3. `specs/context-schema.md`
4. `specs/output-contract.md`
5. The matching file in `runtimes/`

## Automatic start

1. Detect whether the current runtime is Claude Code, Claude Co-Work, Codex or unsupported.
2. Inspect available read, write and command capabilities without modifying local state.
3. Explain the detected mode and any limitation in one short message.
4. Ask for an absolute path to a new dedicated destination folder.
5. Inspect the destination and its parent read-only.
6. If the destination is not empty, stop and ask for another folder. Do not merge into it in v0.1.
7. Explain that resumable onboarding requires creating `.ai-context/state.md`, then request approval for that first write.
8. After approval, create the initial state file and conduct the interview below one question at a time. Checkpoint each confirmed answer.
9. Generate a complete preview of files and content.
10. Accept corrections until the user approves the preview.
11. Create only the approved files.
12. Verify by reading every required file and section.
13. Write the installation report and hand off the workspace.

Do not ask whether the user is ready to start. They already requested installation.

## Interview

Reuse anything the user already supplied. Ask only missing questions:

1. What do you do, and what responsibilities should the AI understand?
2. What are your three current priorities?
3. What active projects should the AI know, including outcome, current state and next step when known?
4. How do you prefer the AI to communicate, plan and collaborate with you?
5. What boundaries should it respect, and what must it never store or do?

Do not request secrets. If the user provides one, do not persist it; ask them to revoke or rotate it when appropriate and continue with a redacted description only.

## Build

Use `templates/` and the approved answers to create the output defined by `specs/output-contract.md`.

Copy these repository files unchanged into the installed workspace:

- `core/operating-guide.md` to `.ai-context/operating-guide.md`
- `core/workflows/capture-context.md` to `.ai-context/workflows/capture-context.md`
- `core/workflows/prepare-brief.md` to `.ai-context/workflows/prepare-brief.md`
- `core/workflows/resume-work.md` to `.ai-context/workflows/resume-work.md`

Generate both `AGENTS.md` and `CLAUDE.md` so the workspace remains portable.

## Handoff

Report:

- destination;
- files created and preserved;
- verification status;
- warnings or manual checks;
- the first safe prompt: `Prepárame un brief de situación utilizando únicamente mi contexto confirmado.`

If installation cannot be verified, say so. Never convert a partial installation into a success claim.

