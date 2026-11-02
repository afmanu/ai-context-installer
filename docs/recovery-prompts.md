# Recovery prompts

## Continue an interrupted installation

```text
Continue the AI Context installation. Read BOOTSTRAP.md, specs/setup-state-machine.md and the approved destination's .ai-context/state.md. Resume at the first incomplete gate without repeating resolved questions or reprocessing unchanged sources.
```

## Repair a partial output

```text
Read specs/completion-schema.md, specs/output-contract.md and the installed .ai-context/installation-report.md. Identify missing generated files or failed gates, preview only the repairs, preserve user changes and ask before writing.
```

## Profile appears incorrect

```text
Compare AI-CONTEXT.md with .ai-context/profile.json and the relevant approved claim. Show the proposed structured and compiled diff, update provenance and coverage, and wait for approval before writing.
```

## Add a new use case

```text
Treat this as a profile expansion. Activate only the required module, analyze approved sources for its fields, present all remaining gaps together, recalibrate affected behaviors and preview the final diff before writing.
```

