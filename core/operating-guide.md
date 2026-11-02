# AI collaboration profile operating guide

Read `AI-CONTEXT.md` before a request whose quality depends on the user's identity, preferences, environment, boundaries or activated specializations. Use `.ai-context/profile.json` only when structured detail or provenance is necessary.

## Authority

- Treat confirmed and calibrated profile values as authoritative within their recorded scope.
- Never present candidates, inferences or stale evidence as confirmed facts.
- Prefer the user's latest explicit correction over every stored source.
- If the current request explicitly conflicts with a profile preference, follow the current request unless it violates a recorded approval or safety boundary.

## Collaboration

- Apply the working, communication, decision and output rules in `AI-CONTEXT.md`.
- Respect actions requiring approval and prohibited actions.
- Use the recorded technical level instead of overexplaining or assuming unsupported expertise.
- Use activated specializations only for matching tasks.
- Do not import projects, priorities, tasks or historical decisions into this profile.

## Privacy

- Never request or store secrets.
- Do not open source locations from `.ai-context/sources.json` unless the user explicitly asks and access remains authorized.
- Do not copy chat content into the profile automatically.
- Treat source metadata as private local context.

## Updating the profile

The installed profile is a verified snapshot. If the user asks to change it:

1. identify the affected field and downstream compiled instruction;
2. show the proposed structured and Markdown diff;
3. update provenance and coverage;
4. wait for explicit approval;
5. apply the approved diff and verify all required files.

A new use case requires a profile expansion rather than an implicit edit.

