# Bootstrap

This is the canonical installation entrypoint.

## Installation intent

Treat a request to install, set up or create the user's AI context, accompanied by this repository or its URL, as complete installation intent.

Do not ask the user to mention internal files, schemas, permissions or verification. Do not summarize the repository unless analysis was explicitly requested.

Installation intent authorizes read-only inspection and planning. It does not authorize writing files, changing configuration, following unprovided links or connecting external services.

## Required references

Read before acting:

1. `specs/setup-state-machine.md`
2. `specs/scp-profile-protocol.md`
3. `specs/profile-schema.md`
4. `specs/profile-fields.json`
5. `specs/evidence-schema.md`
6. `specs/coverage-schema.md`
7. `specs/collaboration-contract-schema.md`
8. `specs/completion-schema.md`
9. `specs/security-and-consent.md`
10. `specs/output-contract.md`
11. The matching file in `runtimes/`

## Interaction contract

The initial installation uses at most six user responses after the minimal installation request. Destination selection and approval to create resumable state are bundled into interaction 1. Source permissions are bundled into interaction 2. Final build approval is bundled into interaction 6.

Every question must:

- resolve one or more named profile fields;
- include a clear example of the expected answer;
- reuse information already supplied;
- avoid requesting information that an approved source can provide;
- be grouped with related questions in the same interaction.

If a critical field remains unresolved after interaction 6, record `blocked` and explain the exact missing field. Never claim completion and never invent a seventh onboarding interaction.

## Automatic start

1. Detect whether the runtime is Claude Code, Claude Co-Work, Codex or unsupported.
2. Inspect read, write, command and web capabilities without modifying state.
3. Explain the detected mode and relevant limitation in one short message.
4. Begin interaction 1 immediately. Do not ask whether the user is ready.

## Interaction 1 — Initial questions

Bundle the destination, first-write consent and these four questions in one message.

1. **Who are you professionally and what roles do you perform?**
   Explain that the answer should cover current activity, responsibilities and the roles from which the person will use AI.
   Example: `Soy fundador de una consultora de IA, diseñador de sistemas y creador de contenido. Como fundador decido estrategia y producto; como consultor diseño soluciones; como creador explico IA aplicada.`
2. **What do you want to use AI for, and what outcome do you expect from each use?**
   Example: `Construir productos: convertir ideas en arquitecturas e implementaciones validadas. Crear contenido: transformar ideas propias en publicaciones que mantengan mi voz.`
3. **What should AI do better for the profile to be successful?**
   Ask for observable desired behavior and current frustrations.
   Example: `Debe recomendar una opción, respetar mi nivel técnico, actuar en tareas reversibles y verificar antes de afirmar que ha terminado. Me frustran las respuestas genéricas y las preguntas innecesarias.`
4. **Where should the profile work, and what areas must remain outside it?**
   Example: `Debe funcionar en Claude, Codex, ChatGPT y Cursor. Excluye salud, familia, finanzas personales, conversaciones privadas y credenciales.`

Also ask for:

- an absolute path to a new dedicated destination;
- approval to create `.ai-context/state.md` for resumable installation.

Example: `Destino: C:\Users\Alex\Documents\my-ai-profile. Autorizo crear la carpeta y .ai-context/state.md para poder reanudar la instalación.`

Inspect the destination and its parent read-only. If the destination is not empty, record the blocker inside the same interaction result and require a replacement path before progressing.

Exit only when `scope_locked` and `use_cases_activated` are true.

## Interaction 2 — Source contribution

Ask for all useful sources at once:

- CV or professional bio;
- LinkedIn, GitHub, website and social profiles;
- portfolio and repositories;
- authored posts, videos or scripts;
- professional documents and methods;
- existing AI instructions;
- examples of accepted and corrected AI responses;
- representative deliverables.

Example: `Adjunto mi CV y comparto LinkedIn, GitHub, mi web, cinco publicaciones, tres guiones, AGENTS.md y dos conversaciones con Claude. La web representa mi posición actual; el CV es correcto para la trayectoria, pero su introducción está desactualizada.`

Present the default source policy and ask only for exceptions:

- inspect only explicitly supplied sources;
- do not sign in or investigate additional profiles;
- do not copy originals into the profile;
- retain only source metadata and approved claims;
- ignore credentials and sensitive identifiers;
- prefer direct user corrections over every source.

Example exception: `Confirmo la política. Como excepción, puedes conservar cinco fragmentos concretos que yo apruebe como ejemplos de voz.`

Analyze approved sources before progressing. If a source cannot be accessed, request an export or pasted excerpt within this same interaction.

Exit only when the source manifest and extraction pass are complete.

## Interaction 3 — Detected gaps

Compare extracted claims with every applicable field in `specs/profile-schema.md`. Present one complete closure package containing:

- every missing applicable field;
- every critical contradiction;
- every stale or ambiguous claim;
- every inference requiring confirmation;
- the specific document that could answer a gap, when applicable.

Example: `Faltan cinco elementos: nivel real de programación, posicionamiento actual, acciones permitidas sin aprobación, un ejemplo de output excelente y si la voz de LinkedIn también aplica a guiones. Puedes responder directamente o aportar un repositorio, el documento de posicionamiento y un entregable aprobado.`

Do not ask known questions again. Accept direct answers, targeted documents, `not_applicable` or an explicitly accepted safe default.

Exit only when factual coverage is 100%, no critical conflict is open and no critical claim remains unconfirmed.

## Interaction 4 — Collaboration contract

Generate the complete proposed collaboration contract from confirmed evidence. It must cover:

- working style;
- communication;
- reasoning and decisions;
- uncertainty handling;
- autonomy and approvals;
- tools and environment;
- output preferences and quality bar;
- privacy and storage boundaries;
- behaviors required by activated use cases.

Ask the user to confirm everything or state only corrections.

Example: `Confirmo el contrato salvo dos cambios: debe pedirme permiso antes de instalar dependencias y quiero más profundidad cuando diseñemos arquitecturas.`

Exit only when every behavioral field is resolved and the contract is confirmed.

## Interaction 5 — Calibration and closure

Create only the calibration choices required by important, uncertain or conflicting preferences. Use short scenarios and show what each answer changes.

Example:

```text
Ante una petición ambigua:
A. Detenerse y pedir contexto.
B. Avanzar con un supuesto reversible y declararlo.

Ante varias alternativas viables:
A. Presentarlas sin tomar posición.
B. Recomendar una y explicar el trade-off.
```

Also test at least one representative task, one decision, one approval boundary and one adapted output across the activated use cases. Resolve every remaining field through a user choice, direct correction, `not_applicable` or an accepted safe default.

Exit only when calibration is complete, use-case tests pass and profile coverage is 100%.

## Interaction 6 — Final approval

Present the complete preview:

- compiled `AI-CONTEXT.md`;
- structured profile;
- collaboration contract;
- source manifest and provenance summary;
- coverage report;
- safe defaults and non-applicable fields;
- calibration results;
- destination and exact files to create.

Ask:

```text
Antes de cerrar el perfil, ¿quieres añadir o corregir algo dentro de los usos definidos?

Responde “Aprobar” o indica los cambios y termina con “Aprobar después de aplicar estos cambios”.
```

Example: `Elimina X como canal y cambia mi nivel técnico a intermedio-bajo. Aprobar después de aplicar estos cambios.`

Apply self-contained corrections before building. A new use case is a later profile expansion, not a reason to reopen this installation.

Build only when the final approval is explicit and every completion gate passes.

## Build and verification

Use `templates/` and the approved profile to create the output defined by `specs/output-contract.md`.

Copy `core/operating-guide.md` unchanged to `.ai-context/operating-guide.md`. Generate both `AGENTS.md` and `CLAUDE.md` for portability.

Read back every required file, validate JSON, verify required sections, confirm that no source original was copied and write the installation report.

## Handoff

Report:

- destination;
- files created and preserved;
- coverage and verification status;
- warnings or blocked checks;
- the first safe prompt: `Lee mi perfil y dime cómo debes colaborar conmigo antes de empezar una tarea.`

Never convert a partial or blocked installation into a success claim.

