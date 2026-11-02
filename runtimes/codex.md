# Codex runtime

Codex may install directly when the repository and destination are within approved filesystem scope. Repository access does not authorize writes outside the approved destination.

Use `AGENTS.md` as the installed entrypoint and keep `CLAUDE.md` for portability. Verify files by direct readback. If the destination requires additional filesystem permission, request it at the first write rather than broadening scope silently.

