#!/usr/bin/env node
/**
 * Post-build pass for GitHub Pages deployments.
 *
 * Astro auto-prefixes asset URLs (img, link, script) with the configured `base`,
 * but it does NOT touch arbitrary `<a href="/...">` strings in templates.
 * This script walks the built /dist tree and prefixes every internal href that
 * starts with "/" but doesn't already start with the BASE.
 *
 * Run only when DEPLOY_TARGET=pages.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const BASE = "/clout-website";
const DIST = process.argv[2] ?? "./dist";

let scanned = 0;
let rewritten = 0;

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (extname(entry.name) === ".html" || extname(entry.name) === ".xml") {
      await rewrite(full);
    }
  }
};

const rewrite = async (file) => {
  scanned += 1;
  const original = await readFile(file, "utf8");
  let updated = original;

  // href / src / action / formaction / srcset / poster / data-src starting with "/"
  // but NOT already prefixed with /clout-website and NOT protocol-relative.
  updated = updated.replace(
    /(\s(?:href|src|action|formaction|srcset|poster|data-src))=("|')\/(?!\/|clout-website\/)/g,
    (_m, attr, quote) => `${attr}=${quote}${BASE}/`,
  );

  // root-href edge case: href="/" → href="/clout-website/"
  updated = updated.replace(
    /(\s(?:href|action|formaction))=("|')\/("|')/g,
    (_m, attr, q1, _q2) => `${attr}=${q1}${BASE}/${q1}`,
  );

  // url(/...) inside inline style attributes
  updated = updated.replace(
    /url\((["']?)\/(?!\/|clout-website\/)/g,
    (_m, quote) => `url(${quote}${BASE}/`,
  );

  if (updated !== original) {
    await writeFile(file, updated, "utf8");
    rewritten += 1;
  }
};

await walk(DIST);

// Drop a Jekyll-disabling marker so GitHub Pages serves files starting with `_`
// (e.g. /_astro/* JS bundles).
await writeFile(join(DIST, ".nojekyll"), "");

console.log(`Pages post-build: scanned ${scanned} HTML/XML file(s); rewrote ${rewritten}.`);
