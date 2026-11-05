# AI Context Installer

> [!IMPORTANT]
> When a user supplies this repository and asks to install or create their AI context, treat that as installation intent. Read `BOOTSTRAP.md` and start the installer. Do not merely summarize the repository or ask for a longer installation prompt.

AI Context Installer creates a portable profile that teaches an AI who a person is, what they use AI for and how it should collaborate with them.

## Status

**Public beta candidate.** The package contract, structured profile, synthetic demo and local validation are implemented. A first external tester completed a link-only blind installation successfully; separate Claude and Codex verification is still pending.

## The problem it solves

Every new AI conversation tends to begin from zero. The user repeatedly explains their role, goals, expertise, preferred communication, approval boundaries and quality expectations. Generic memory or scattered instructions rarely form a complete, inspectable profile.

AI Context Installer converts that information into one verified collaboration profile that can travel with the user.

## What it does

The installer combines:

- a short guided conversation;
- user-approved CVs, documents and existing profiles;
- websites, social profiles and repositories supplied by the user;
- examples of accepted and corrected AI work;
- calibration of communication, autonomy and quality expectations.

It compiles the result into concise runtime instructions plus structured provenance and completion evidence.

This is a collaboration profile. It is not a second brain, project tracker, database, RAG system, transcript archive or autonomous memory service.

## Who it is for

It is useful for people who:

- regularly use Claude or Codex for professional work;
- are tired of repeating the same background and preferences;
- want consistent behavior across projects and conversations;
- need explicit privacy, approval and autonomy boundaries;
- want an inspectable profile rather than hidden conversational memory.

It may not be the right product if you want task management, note storage, automatic conversation memory or an operational content system.

## What you get

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

- `AI-CONTEXT.md` is the concise profile used during normal work.
- `profile.json` stores the complete structured profile.
- `sources.json` records approved provenance without copying source originals.
- `coverage.json` proves which fields are complete and which gates passed.
- `AGENTS.md` and `CLAUDE.md` route Codex and Claude to the same core profile.

## Example uses

After installation, an AI can:

- adapt explanations to the user's real expertise;
- communicate in the preferred level of detail and tone;
- recommend decisions using confirmed criteria;
- act autonomously only inside approved boundaries;
- produce deliverables that match the user's quality expectations;
- identify when context is missing instead of inventing it;
- reuse the same collaboration profile across supported workspaces.

Try:

```text
Read my AI context and explain briefly how you should collaborate with me before we start.
```

## Quick start

Open Claude Code, Claude Co-Work with local folder access, or Codex and send:

```text
Quiero instalar mi contexto para IA:

https://github.com/afmanu/ai-context-installer
```

The repository contains the remaining instructions. The user does not need to mention internal files, schemas or commands.

## How installation works

The profile is completed through at most six planned user interactions:

1. initial scope questions;
2. source contribution;
3. detected gaps and conflicts;
4. collaboration contract review;
5. calibration and closure;
6. final preview and approval.

Sources should answer most fields. The installer asks only for information that remains missing, contradictory or unconfirmed.

Installation is complete only when:

- every applicable profile field is resolved;
- every critical field is confirmed;
- no critical conflict remains open;
- source permissions and privacy rules are recorded;
- calibration passes for the activated use cases;
- the user approves the final profile;
- every installed file passes readback validation.

## Requirements and limitations

- Full installation requires an environment that can read this repository and write to a local destination.
- The current beta targets Claude and Codex.
- Other environments can still use `AI-CONTEXT.md` manually, but automatic setup is not yet verified there.
- The initial version installs into a new dedicated folder and does not merge with an existing profile.
- An inference is never presented as a confirmed fact.
- A blocked or unverified installation is never reported as complete.

See `INSTALL.md` and `QUICKSTART-ES.md` for detailed setup and recovery instructions.

## Privacy and safety

- Only sources explicitly supplied by the user may be consulted.
- Source originals are not copied into the installed profile.
- Credentials, authentication material and sensitive identifiers are never requested or stored.
- No global agent configuration is modified.
- Read-only inspection happens before any write.
- The complete profile and destination require final approval.

## Demo and development

- Synthetic demo: `examples/demo-context/`
- Spanish quick start: `QUICKSTART-ES.md`
- Installation modes: `INSTALL.md`
- Beta test matrix: `docs/beta-testing.md`

Validate the repository with:

```text
npm test
npm run validate
```

## License

MIT. See `LICENSE`.
