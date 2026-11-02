# Installation guide

The complete user request is:

```text
Quiero instalar mi contexto para IA:

https://github.com/afmanu/ai-context-installer
```

No expanded prompt is required. The agent must read `BOOTSTRAP.md`, detect its runtime and conduct the six-interaction profile flow.

The first release supports a new dedicated destination. Interaction 1 bundles the destination path, initial questions and approval to create resumable state. Interaction 2 collects all approved sources. Interaction 3 closes factual gaps. Interaction 4 confirms the collaboration contract. Interaction 5 calibrates behavior. Interaction 6 previews and approves the final installation.

If the selected folder contains user files, do not merge into it in v0.2. Request a new empty destination within interaction 1. If the agent cannot access a supplied source, request an export or pasted excerpt during interaction 2.

Do not claim success unless every gate in `specs/completion-schema.md` and every requirement in `specs/output-contract.md` passes.

