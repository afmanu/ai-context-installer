# AI Context Installer

> [!IMPORTANT]
> When a user supplies this repository and asks to install or create their AI context, treat that as installation intent. Read `BOOTSTRAP.md` and start the installer. Do not merely summarize the repository or ask the user to write a longer installation prompt.

AI Context Installer builds a portable collaboration profile for Claude and Codex. It combines a short guided conversation with user-approved CVs, documents, websites, social profiles, repositories and examples, then compiles the result into concise runtime instructions.

The product describes how an AI should understand and collaborate with a person. It is not a second brain, project tracker, database, RAG system, transcript archive or autonomous memory service.

## Quick start

Open Claude Code, Claude Co-Work with local folder access, or Codex and send:

```text
Quiero instalar mi contexto para IA:

https://github.com/afmanu/ai-context-installer
```

The repository contains the remaining instructions. The profile is completed through at most six user interactions:

1. initial scope questions;
2. source contribution;
3. detected gaps;
4. collaboration contract review;
5. calibration and closure;
6. final approval.

Sources should answer most fields. The installer asks only for information that remains missing, contradictory or unconfirmed.

## What gets installed

```text
my-ai-profile/
├── START-HERE.md
├── AI-CONTEXT.md
├── AGENTS.md
├── CLAUDE.md
└── .ai-context/
    ├── profile.json
    ├── sources.json
    ├── coverage.json
    ├── state.md
    ├── installation-report.md
    └── operating-guide.md
```

`AI-CONTEXT.md` is the concise profile consumed during normal work. The `.ai-context/` files preserve the structured profile, source provenance, completion evidence and installation report.

## Completion rule

Installation is complete only when:

- every applicable profile field is resolved;
- every critical field is confirmed;
- no critical conflict remains open;
- source permissions and privacy rules are recorded;
- calibration passes for the activated use cases;
- the user approves the final profile;
- every installed file passes readback validation.

The installer never fills gaps by presenting an inference as a confirmed fact.

## Safety defaults

- Read-only runtime and destination inspection starts automatically.
- Only sources explicitly supplied by the user may be consulted.
- Source originals are not copied into the installed profile.
- Credentials, authentication material and sensitive identifiers are never requested or stored.
- No global agent configuration is modified.
- The complete profile and destination require final approval before installation.

## Development status

This repository is a local beta candidate. Initial validation targets Claude and Codex using a new dedicated destination folder. See `QUICKSTART-ES.md`, `INSTALL.md` and `examples/demo-context/`.

## License

MIT. See `LICENSE`.

