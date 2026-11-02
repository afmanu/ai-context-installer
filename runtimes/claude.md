# Claude runtime

Claude Code may install directly when it has approved filesystem access. Claude Co-Work may install directly only when the active session can access the repository, destination and user-supplied sources.

Detect local, document and URL access before interaction 1. Do not assume chat, mobile or Co-Work can read local files. If an approved source is unavailable, request an export or pasted excerpt during interaction 2.

Use `CLAUDE.md` as the installed entrypoint and keep `AGENTS.md` for portability. If local writes are unavailable, mark installation blocked or provide a Claude Code handoff; do not claim completion.

