import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createSiteConfig } from "../src/data/site.js";

const css = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

test("header exposes Home first and uses the approved responsive logo sizes", () => {
  const site = createSiteConfig();

  assert.deepEqual(site.nav[0], { label: "Home", href: "#top" });
  assert.match(css, /\.brand-mark\s*{[^}]*height:\s*3\.5rem;/s);
  assert.match(
    css,
    /@media \(max-width: 980px\)[\s\S]*?\.brand-mark\s*{[^}]*height:\s*3rem;/,
  );
});
