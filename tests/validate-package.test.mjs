import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { validatePackage } from "../scripts/validate-package.mjs";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const demo = path.join(root, "examples", "demo-context");

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

test("repository and demo satisfy the package contract", async () => {
  const result = await validatePackage(root);
  assert.deepEqual(result, { ok: true, errors: [] });
});

test("demo proves complete coverage and approved evidence", async () => {
  const coverage = JSON.parse(await readFile(path.join(demo, ".ai-context", "coverage.json"), "utf8"));
  const sources = JSON.parse(await readFile(path.join(demo, ".ai-context", "sources.json"), "utf8"));
  const profile = JSON.parse(await readFile(path.join(demo, ".ai-context", "profile.json"), "utf8"));

  assert.equal(coverage.coverage_percent, 100);
  assert.equal(coverage.resolved_fields, coverage.applicable_fields);
  assert.deepEqual(coverage.open_conflicts, []);
  assert.equal(coverage.collaboration_contract_confirmed, true);
  assert.equal(coverage.calibration_complete, true);
  assert.equal(sources.source_policy.retain_originals, false);
  assert.ok(sources.sources.every((source) => source.permission === "approved"));
  assert.equal(profile.meta.status, "complete");
});

test("installed entrypoints route to the profile and shared guide", async () => {
  for (const name of ["AGENTS.md", "CLAUDE.md"]) {
    const content = await readFile(path.join(demo, name), "utf8");
    assert.match(content, /AI-CONTEXT\.md/);
    assert.match(content, /\.ai-context\/operating-guide\.md/);
  }
});

test("demo contains no second-brain outputs", async () => {
  for (const name of ["PROFILE.md", "PRIORITIES.md", "PROJECTS.md", "DECISIONS.md", "BOUNDARIES.md", "INBOX.md"]) {
    assert.equal(await pathExists(path.join(demo, name)), false, `${name} should not exist`);
  }
  for (const name of ["capture-context.md", "prepare-brief.md", "resume-work.md"]) {
    assert.equal(await pathExists(path.join(demo, ".ai-context", "workflows", name)), false, `${name} should not exist`);
  }
});

test("bootstrap defines exactly six numbered interactions", async () => {
  const bootstrap = await readFile(path.join(root, "BOOTSTRAP.md"), "utf8");
  const matches = bootstrap.match(/^## Interaction [1-6] —/gm) ?? [];
  assert.equal(matches.length, 6);
});

