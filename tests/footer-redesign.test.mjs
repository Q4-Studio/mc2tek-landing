import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createSiteConfig } from "../src/data/site.js";

const indexSource = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const css = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

test("footer uses the approved dark layout and exposes both social profiles", () => {
  const site = createSiteConfig();

  assert.deepEqual(site.footer.socials, [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/mc2-tek-ingegneria-e-servizi/",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/mc2_tek/",
    },
  ]);

  assert.match(indexSource, /class="footer-logo"/);
  assert.match(indexSource, /class="footer-socials"/);
  assert.match(indexSource, /site\.footer\.socials\.map/);
  assert.match(indexSource, /const currentYear = new Date\(\)\.getFullYear\(\);/);
  assert.match(css, /\.site-footer\s*{[^}]*background:\s*#1d211f;/s);
  assert.match(css, /\.footer-inner\s*{[^}]*grid-template-columns:\s*0\.8fr 1\.3fr 0\.9fr;/s);
  assert.match(css, /\.footer-logo\s*{[^}]*filter:\s*brightness\(0\) invert\(1\);/s);
});
