# Evidence schema

Evidence supports profile claims without turning supplied material into a permanent archive.

## Source record

Each approved source in `.ai-context/sources.json` records:

```json
{
  "source_id": "src-001",
  "type": "cv",
  "label": "Professional CV",
  "location": "user-supplied-file",
  "scope": ["identity", "expertise"],
  "authored_by_user": true,
  "current": true,
  "authority": "supporting",
  "permission": "approved",
  "retention": "metadata_only",
  "accessed_at": "2026-11-02"
}
```

Allowed source types include direct user input, CV, website, social profile, repository, document, authored sample, AI instruction file, accepted AI response and corrected AI response.

## Claim record

Extraction produces claims before it produces profile facts:

```json
{
  "claim_id": "claim-001",
  "field": "expertise.intermediate_areas",
  "value": ["automation"],
  "source_ids": ["src-001"],
  "evidence_type": "observed",
  "confidence": "medium",
  "status": "candidate",
  "requires_confirmation": true
}
```

Evidence types:

- `declared`: stated directly by the user;
- `observed`: extracted from an approved source;
- `calibrated`: demonstrated through a user choice or test;
- `inferred`: model interpretation requiring confirmation.

## Authority order

When evidence conflicts, prefer:

1. the user's latest explicit correction;
2. direct user confirmation during installation;
3. a current source the user marked authoritative;
4. current authored material;
5. older professional documents;
6. public profiles and social content;
7. model inference.

Recency does not override a different scope. Public writing may support voice or positioning, but cannot define private preferences, autonomy or privacy boundaries without confirmation.

## Source limits

- Inspect only files, folders and URLs the user explicitly supplies.
- Do not follow unrelated links, sign in or expand to third-party profiles.
- Do not retain source bodies in the installed profile.
- Store metadata and approved claims only.
- Redact secrets and sensitive identifiers from previews and records.

