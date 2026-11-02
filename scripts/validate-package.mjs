import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

const repositoryFiles = [
  "README.md",
  "LICENSE",
  "BOOTSTRAP.md",
  "INSTALL.md",
  "AGENTS.md",
  "CLAUDE.md",
  "QUICKSTART-ES.md",
  "ROADMAP.md",
  "SECURITY.md",
  "docs/product-contract.md",
  "docs/source-map.md",
  "docs/recovery-prompts.md",
  "docs/beta-testing.md",
  "specs/context-schema.md",
  "specs/output-contract.md",
  "specs/security-and-consent.md",
  "specs/setup-state-machine.md",
  "core/operating-guide.md",
  "core/workflows/capture-context.md",
  "core/workflows/prepare-brief.md",
  "core/workflows/resume-work.md",
  "runtimes/claude.md",
  "runtimes/codex.md"
];

const installedFiles = [
  "START-HERE.md",
  "PROFILE.md",
  "PRIORITIES.md",
  "PROJECTS.md",
  "DECISIONS.md",
  "BOUNDARIES.md",
  "INBOX.md",
  "AGENTS.md",
  "CLAUDE.md",
  ".ai-context/state.md",
  ".ai-context/installation-report.md",
  ".ai-context/operating-guide.md",
  ".ai-context/workflows/capture-context.md",
  ".ai-context/workflows/prepare-brief.md",
  ".ai-context/workflows/resume-work.md"
];

const demoHeadings = {
  "PROFILE.md": ["## Rol", "## Responsabilidades", "## Preferencias de trabajo"],
  "PRIORITIES.md": ["# Prioridades"],
  "PROJECTS.md": ["# Proyectos", "Siguiente paso:"],
  "DECISIONS.md": ["# Decisiones"],
  "BOUNDARIES.md": ["## Requiere aprobación", "## Acciones prohibidas", "## Información que no debe almacenarse"],
  "INBOX.md": ["# Inbox"],
  ".ai-context/installation-report.md": ["Verification status: passed"]
};

async function isNonEmptyFile(filePath) {
  try {
    const details = await stat(filePath);
    return details.isFile() && details.size > 0;
  } catch {
    return false;
  }
}

async function load(filePath) {
  return readFile(filePath, "utf8");
}

export async function validatePackage(root = packageRoot) {
  const errors = [];

  for (const relativePath of repositoryFiles) {
    if (!(await isNonEmptyFile(path.join(root, relativePath)))) {
      errors.push(`Missing or empty repository file: ${relativePath}`);
    }
  }

  const demoRoot = path.join(root, "examples", "demo-context");
  for (const relativePath of installedFiles) {
    if (!(await isNonEmptyFile(path.join(demoRoot, relativePath)))) {
      errors.push(`Missing or empty demo output: ${relativePath}`);
    }
  }

  for (const [relativePath, headings] of Object.entries(demoHeadings)) {
    const filePath = path.join(demoRoot, relativePath);
    if (!(await isNonEmptyFile(filePath))) continue;
    const content = await load(filePath);
    for (const heading of headings) {
      if (!content.includes(heading)) {
        errors.push(`Demo file ${relativePath} is missing: ${heading}`);
      }
    }
  }

  const minimalPrompt = "Quiero instalar mi contexto para IA:";
  for (const relativePath of ["README.md", "QUICKSTART-ES.md", "INSTALL.md"]) {
    const content = await load(path.join(root, relativePath));
    if (!content.includes(minimalPrompt)) {
      errors.push(`${relativePath} does not contain the minimal installation prompt`);
    }
  }

  const bootstrap = await load(path.join(root, "BOOTSTRAP.md"));
  for (const requirement of [
    "read-only inspection",
    "one question at a time",
    "specs/output-contract.md",
    "Do not ask whether the user is ready to start"
  ]) {
    if (!bootstrap.includes(requirement)) {
      errors.push(`BOOTSTRAP.md is missing requirement: ${requirement}`);
    }
  }

  const demoFiles = await Promise.all(
    installedFiles.map(async (relativePath) => {
      const filePath = path.join(demoRoot, relativePath);
      return (await isNonEmptyFile(filePath)) ? load(filePath) : "";
    })
  );
  const demoText = demoFiles.join("\n");
  if (/{{[A-Z0-9_]+}}/.test(demoText)) {
    errors.push("Demo output contains unresolved template placeholders");
  }
  if (/(api[_-]?key|access[_-]?token|private[_-]?key|seed[_ -]?phrase)\s*[:=]\s*\S+/i.test(demoText)) {
    errors.push("Demo output appears to contain a credential-like value");
  }

  const copiedPairs = [
    ["core/operating-guide.md", ".ai-context/operating-guide.md"],
    ["core/workflows/capture-context.md", ".ai-context/workflows/capture-context.md"],
    ["core/workflows/prepare-brief.md", ".ai-context/workflows/prepare-brief.md"],
    ["core/workflows/resume-work.md", ".ai-context/workflows/resume-work.md"]
  ];
  for (const [source, installed] of copiedPairs) {
    const sourceContent = await load(path.join(root, source));
    const installedContent = await load(path.join(demoRoot, installed));
    if (sourceContent !== installedContent) {
      errors.push(`Demo copy differs from canonical source: ${installed}`);
    }
  }

  return { ok: errors.length === 0, errors };
}

const executedDirectly = process.argv[1] &&
  pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url;

if (executedDirectly) {
  const result = await validatePackage();
  if (!result.ok) {
    for (const error of result.errors) console.error(`ERROR: ${error}`);
    process.exitCode = 1;
  } else {
    console.log("AI Context Installer package validation passed.");
  }
}

