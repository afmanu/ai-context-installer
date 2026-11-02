import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { validatePackage } from "../scripts/validate-package.mjs";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

test("repository and demo satisfy the package contract", async () => {
  const result = await validatePackage(root);
  assert.deepEqual(result, { ok: true, errors: [] });
});

test("demo preserves confirmed, unknown and boundary semantics", async () => {
  const projects = await readFile(path.join(root, "examples/demo-context/PROJECTS.md"), "utf8");
  const boundaries = await readFile(path.join(root, "examples/demo-context/BOUNDARIES.md"), "utf8");
  const inbox = await readFile(path.join(root, "examples/demo-context/INBOX.md"), "utf8");

  assert.match(projects, /Estado: confirmed/);
  assert.match(projects, /unknown/);
  assert.match(boundaries, /Requiere aprobación/);
  assert.match(boundaries, /credenciales/i);
  assert.match(inbox, /no son contexto duradero confirmado/);
});

test("installed entrypoints route to the shared operating guide", async () => {
  for (const name of ["AGENTS.md", "CLAUDE.md"]) {
    const content = await readFile(path.join(root, "examples/demo-context", name), "utf8");
    assert.match(content, /\.ai-context\/operating-guide\.md/);
  }
});

