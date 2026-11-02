# Codex runtime

Codex may install directly when the repository, destination and user-supplied local sources are within approved filesystem scope. Repository access does not authorize unrelated reads or writes.

Detect file and URL capabilities before interaction 1. Request additional filesystem permission only for the exact approved destination or source when first needed.

Use `AGENTS.md` as the installed entrypoint and keep `CLAUDE.md` for portability. Verify Markdown and JSON files by direct readback and never report completion while any coverage or output gate is unresolved.

