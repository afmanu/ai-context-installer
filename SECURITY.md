# Security

AI Context Installer stores an approved collaboration profile as local Markdown and JSON. It does not provide encryption, access control, cloud synchronization or secret management.

Never request or persist passwords, API keys, access tokens, private keys, seed phrases, recovery codes, authentication cookies or sensitive identifiers.

Only inspect files, folders and URLs the user explicitly supplies. Do not sign in, crawl unrelated profiles, inspect sibling folders or expand a source scope silently. Source originals must not be copied into the installed profile; retain only minimal metadata and approved claims.

The installer must stay inside the installer repository and approved destination. It must not modify global Claude, Codex, shell, Git or operating-system configuration.

Report security issues privately to the repository owner. Do not include real profile data, credentials or complete private paths in public issues.

