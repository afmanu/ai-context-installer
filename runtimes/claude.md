# Claude runtime

Claude Code may install directly when it has approved filesystem access. Claude Co-Work may install directly only when the active session can access the repository and approved destination.

Do not assume chat, mobile or Co-Work has local access. Detect capability first. If local writes are unavailable, provide a handoff to Claude Code and mark installation as blocked or manual; do not claim completion.

Use `CLAUDE.md` as the installed entrypoint and keep `AGENTS.md` for portability.

