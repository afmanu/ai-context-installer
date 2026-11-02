# AI Context Installer

> [!IMPORTANT]
> When a user supplies this repository and says they want to install their AI context, treat that as installation intent. Read `BOOTSTRAP.md` and begin read-only environment detection. Do not merely summarize the repository or request a more detailed prompt.

AI Context Installer creates a small local workspace that gives Claude or Codex durable, user-approved context about role, priorities, projects, decisions, working preferences and boundaries.

It is not a database, global memory service, RAG system, transcript archive or autonomous agent. Context applies when the installed folder is opened or attached to a compatible agent session.

## Quick start

Open Claude Code, Claude Co-Work with local folder access, or Codex and send only:

```text
Quiero instalar mi contexto para IA:

https://github.com/afmanu/ai-context-installer
```

The repository contains the remaining instructions. The installer should ask only for an approved destination, five short personalization answers, corrections to the preview and consent before writing.

## What gets installed

```text
my-ai-context/
├── START-HERE.md
├── PROFILE.md
├── PRIORITIES.md
├── PROJECTS.md
├── DECISIONS.md
├── BOUNDARIES.md
├── INBOX.md
├── AGENTS.md
├── CLAUDE.md
└── .ai-context/
    ├── state.md
    ├── installation-report.md
    ├── operating-guide.md
    └── workflows/
        ├── capture-context.md
        ├── prepare-brief.md
        └── resume-work.md
```

## Core behaviors

- Retrieve confirmed context without inventing missing information.
- Keep global context separate from project-specific context.
- Preview context updates before writing them.
- Preserve corrections and mark superseded information clearly.
- Prepare a sourced situation brief.
- Resume a project from its recorded state and next step.

## Safety defaults

- Read-only inspection starts automatically.
- The user approves the destination and first write.
- Existing files are preserved by default.
- Passwords, API keys, private keys and recovery phrases are never requested or stored.
- No global agent configuration is modified.
- No external service is connected.

## Development status

This repository is an initial local beta candidate. The first validation targets are Claude and Codex on a newly created destination folder. Adopting an existing workspace is outside the first release.

See `QUICKSTART-ES.md`, `INSTALL.md` and `examples/demo-context/`.

## License

MIT. See `LICENSE`.

