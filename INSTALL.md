# Installation guide

The complete user request is:

```text
Quiero instalar mi contexto para IA:

https://github.com/afmanu/ai-context-installer
```

No additional prompt is required. The agent must read `BOOTSTRAP.md`, detect its runtime and capabilities, ask for a new destination folder, conduct the five-question interview, show a preview, request write approval, create the workspace, verify it and hand it off.

The first release supports a new dedicated destination. If the selected folder contains user files, stop and ask for another empty folder. Existing-workspace adoption is not part of v0.1.

If the agent cannot access the repository from the URL, download or clone the repository, open it as the active workspace and repeat the same minimal request.

Do not claim success unless every requirement in `specs/output-contract.md` has been read back successfully or explicitly reported as unresolved.

