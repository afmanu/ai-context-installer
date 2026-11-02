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
  "specs/profile-schema.md",
  "specs/profile-fields.json",
  "specs/evidence-schema.md",
  "specs/coverage-schema.md",
  "specs/collaboration-contract-schema.md",
  "specs/completion-schema.md",
  "specs/scp-profile-protocol.md",
  "specs/output-contract.md",
  "specs/security-and-consent.md",
  "specs/setup-state-machine.md",
  "core/operating-guide.md",
  "templates/AI-CONTEXT.md",
  "templates/profile.json",
  "templates/sources.json",
  "templates/coverage.json",
  "runtimes/claude.md",
  "runtimes/codex.md"
];

const installedFiles = [
  "START-HERE.md",
  "AI-CONTEXT.md",
  "AGENTS.md",
  "CLAUDE.md",
  ".ai-context/profile.json",
  ".ai-context/sources.json",
  ".ai-context/coverage.json",
  ".ai-context/state.md",
  ".ai-context/installation-report.md",
  ".ai-context/operating-guide.md"
];

const legacyFiles = [
  "PROFILE.md",
  "PRIORITIES.md",
  "PROJECTS.md",
  "DECISIONS.md",
  "BOUNDARIES.md",
  "INBOX.md",
  ".ai-context/workflows/capture-context.md",
  ".ai-context/workflows/prepare-brief.md",
  ".ai-context/workflows/resume-work.md"
];

const profileHeadings = [
  "## Identidad y contexto profesional",
  "## Objetivos y casos de uso activados",
  "## Experiencia y nivel de explicación",
  "## Cómo trabajar conmigo",
  "## Comunicación",
  "## Razonamiento y decisiones",
  "## Autonomía y aprobaciones",
  "## Herramientas y entorno",
  "## Outputs y calidad",
  "## Privacidad y límites",
  "## Especializaciones activadas",
  "## Procedencia"
];

async function isNonEmptyFile(filePath) {
  try {
    const details = await stat(filePath);
    return details.isFile() && details.size > 0;
  } catch {
    return false;
  }
}

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function load(filePath) {
  return readFile(filePath, "utf8");
}

async function parseJson(filePath, errors, label) {
  try {
    return JSON.parse(await load(filePath));
  } catch (error) {
    errors.push(`${label} is not valid JSON: ${error.message}`);
    return null;
  }
}

function getPath(object, dottedPath) {
  return dottedPath.split(".").reduce((value, key) => value?.[key], object);
}

export async function validatePackage(root = packageRoot) {
  const errors = [];

  for (const relativePath of repositoryFiles) {
    if (!(await isNonEmptyFile(path.join(root, relativePath)))) {
      errors.push(`Missing or empty repository file: ${relativePath}`);
    }
  }

  for (const relativePath of ["templates/profile.json", "templates/sources.json", "templates/coverage.json", "specs/profile-fields.json"]) {
    await parseJson(path.join(root, relativePath), errors, relativePath);
  }

  const demoRoot = path.join(root, "examples", "demo-context");
  for (const relativePath of installedFiles) {
    if (!(await isNonEmptyFile(path.join(demoRoot, relativePath)))) {
      errors.push(`Missing or empty demo output: ${relativePath}`);
    }
  }

  for (const relativePath of legacyFiles) {
    if (await exists(path.join(demoRoot, relativePath))) {
      errors.push(`Legacy second-brain output remains in demo: ${relativePath}`);
    }
  }

  const contextPath = path.join(demoRoot, "AI-CONTEXT.md");
  if (await isNonEmptyFile(contextPath)) {
    const content = await load(contextPath);
    for (const heading of profileHeadings) {
      if (!content.includes(heading)) {
        errors.push(`AI-CONTEXT.md is missing: ${heading}`);
      }
    }
  }

  const profile = await parseJson(path.join(demoRoot, ".ai-context", "profile.json"), errors, "profile.json");
  if (profile) {
    if (profile.meta?.schema_version !== "0.2.0") errors.push("profile.json has the wrong schema version");
    if (profile.meta?.status !== "complete") errors.push("profile.json is not complete");
    for (const section of ["scope", "identity", "objectives", "expertise", "collaboration_contract", "specializations", "quality"]) {
      if (!profile[section]) errors.push(`profile.json is missing section: ${section}`);
    }
  }

  const sources = await parseJson(path.join(demoRoot, ".ai-context", "sources.json"), errors, "sources.json");
  if (sources) {
    if (sources.source_policy?.retain_originals !== false) errors.push("sources.json must not retain source originals");
    if (!Array.isArray(sources.sources) || sources.sources.length === 0) errors.push("sources.json has no approved sources");
    for (const source of sources.sources ?? []) {
      if (source.permission !== "approved") errors.push(`Source ${source.source_id ?? "unknown"} is not approved`);
    }
  }

  const coverage = await parseJson(path.join(demoRoot, ".ai-context", "coverage.json"), errors, "coverage.json");
  if (coverage) {
    const registry = await parseJson(path.join(root, "specs", "profile-fields.json"), errors, "profile-fields.json");
    const moduleFields = (coverage.activated_modules ?? []).flatMap((name) => registry?.modules?.[name] ?? []);
    const expectedFields = [...(registry?.universal ?? []), ...moduleFields];
    const expectedCritical = expectedFields.filter((field) => field.critical).length;
    if (coverage.applicable_fields !== expectedFields.length) errors.push("coverage.json applicable field count differs from registry");
    if (coverage.critical_fields !== expectedCritical) errors.push("coverage.json critical field count differs from registry");
    if (coverage.coverage_percent !== 100) errors.push("coverage.json does not report 100% coverage");
    if (coverage.resolved_fields !== coverage.applicable_fields) errors.push("coverage.json field counts do not match");
    if (coverage.confirmed_critical_fields !== coverage.critical_fields) errors.push("coverage.json critical field counts do not match");
    if (coverage.open_conflicts?.length !== 0) errors.push("coverage.json has open conflicts");
    if (coverage.missing_fields?.length !== 0) errors.push("coverage.json has missing fields");
    if (coverage.status !== "complete") errors.push("coverage.json is not complete");
    const resolvedStatuses = new Set(["confirmed", "calibrated", "accepted_safe_default", "not_applicable"]);
    for (const field of expectedFields) {
      const record = getPath(profile, field.path);
      if (!record) errors.push(`profile.json is missing applicable field: ${field.path}`);
      else if (!resolvedStatuses.has(record.status)) errors.push(`profile.json field is unresolved: ${field.path}`);
    }
    for (const gate of ["source_consent_complete", "collaboration_contract_confirmed", "calibration_complete", "use_case_tests_passed", "user_approved"]) {
      if (coverage[gate] !== true) errors.push(`coverage.json gate failed: ${gate}`);
    }
  }

  const minimalPrompt = "Quiero instalar mi contexto para IA:";
  for (const relativePath of ["README.md", "QUICKSTART-ES.md", "INSTALL.md"]) {
    const content = await load(path.join(root, relativePath));
    if (!content.includes(minimalPrompt)) errors.push(`${relativePath} does not contain the minimal installation prompt`);
  }

  const bootstrap = await load(path.join(root, "BOOTSTRAP.md"));
  for (const requirement of [
    "Interaction 1",
    "Interaction 2",
    "Interaction 3",
    "Interaction 4",
    "Interaction 5",
    "Interaction 6",
    "include a clear example",
    "Do not ask whether the user is ready",
    "Never convert a partial or blocked installation into a success claim"
  ]) {
    if (!bootstrap.includes(requirement)) errors.push(`BOOTSTRAP.md is missing requirement: ${requirement}`);
  }

  const demoFiles = await Promise.all(installedFiles.map(async (relativePath) => {
    const filePath = path.join(demoRoot, relativePath);
    return (await isNonEmptyFile(filePath)) ? load(filePath) : "";
  }));
  const demoText = demoFiles.join("\n");
  if (/{{[A-Z0-9_]+}}/.test(demoText)) errors.push("Demo output contains unresolved template placeholders");
  if (/(api[_-]?key|access[_-]?token|private[_-]?key|seed[_ -]?phrase)\s*[:=]\s*\S+/i.test(demoText)) {
    errors.push("Demo output appears to contain a credential-like value");
  }

  const canonicalGuide = await load(path.join(root, "core", "operating-guide.md"));
  const installedGuide = await load(path.join(demoRoot, ".ai-context", "operating-guide.md"));
  if (canonicalGuide !== installedGuide) errors.push("Demo operating guide differs from canonical source");

  for (const name of ["AGENTS.md", "CLAUDE.md"]) {
    const content = await load(path.join(demoRoot, name));
    if (!content.includes("AI-CONTEXT.md") || !content.includes(".ai-context/operating-guide.md")) {
      errors.push(`${name} does not route to the profile and operating guide`);
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

