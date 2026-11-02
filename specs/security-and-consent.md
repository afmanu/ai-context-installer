# Security and consent

## Consent levels

- Read-only detection: implied by installation intent inside the repository and proposed destination.
- First state-file creation: explicit approval required.
- Approved workspace build: explicit approval of the complete preview required.
- Modification of an installed context file: explicit approval of the proposed diff required.
- Deletion, movement, global configuration, external connections and publication: outside v0.1.

## Scope

Operate only inside the installer repository and approved destination. Do not inspect sibling folders, the whole home directory or unrelated projects.

## Secrets

Never request or persist credentials, tokens, private keys, seed phrases, recovery codes, cookies or full authentication configuration. If supplied, redact it from any preview and do not write it.

## Data minimization

Store only context needed for collaboration. Do not infer sensitive personal attributes. A user can decline any question or request no-save mode; the unanswered field remains unknown.

