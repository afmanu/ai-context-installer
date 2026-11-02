# Security and consent

## Consent levels

- Read-only runtime detection: implied by installation intent.
- Destination inspection: implied after the user supplies the exact path.
- State-file creation: explicit approval bundled into interaction 1.
- Source access: explicit contribution or approval in interaction 2.
- Final profile build: explicit approval in interaction 6.
- Modification of an installed profile: explicit approval of a later proposed diff.
- Deletion, movement, global configuration, unrelated external connections and publication: outside v0.2.

## Scope

Operate only inside the installer repository, approved destination and sources explicitly supplied by the user. Do not inspect sibling folders, the home directory, unrelated repositories or linked third-party profiles.

## Secrets and sensitive data

Never request or persist credentials, tokens, private keys, seed phrases, recovery codes, cookies or authentication configuration. Redact sensitive identifiers such as personal addresses, telephone numbers and government identifiers unless a specific operational need and explicit approval exist.

Do not infer sensitive personal attributes. Public content does not authorize private profiling.

## Data minimization

Store only information needed for AI collaboration. Do not copy source originals or full transcripts. Record source metadata, approved claims and minimal examples selected by the user.

A user may mark a field `not_applicable`, decline a source or accept a safe default. A critical unresolved field blocks completion rather than triggering an invented value.

