import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createSiteConfig } from "../src/data/site.js";

const indexSource = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");

test("landing page contains all approved copy", () => {
  const site = createSiteConfig();

  assert.equal(
    site.hero.intro,
    "Progettiamo impianti meccanici, elettrici, speciali, antincendio ed energetici per edifici civili, industriali e del terziario.",
  );
  assert.deepEqual(site.hero.primaryCta, {
    label: "Richiedi una Consulenza",
    href: "#contatti",
  });
  assert.equal(
    site.services.find(({ title }) => title === "Efficientamento Energetico")?.description,
    "Sviluppiamo interventi per ridurre i consumi energetici e migliorare le prestazioni degli edifici, attraverso diagnosi, simulazioni, riqualificazioni e integrazione delle fonti rinnovabili.",
  );
  assert.match(
    indexSource,
    /Competenze integrate per progettare impianti sicuri, efficienti e coordinati, anche in BIM\./,
  );
  assert.match(
    indexSource,
    /MC² TEK sviluppa progetti integrati per impianti meccanici, elettrici, speciali e antincendio, seguendo ogni intervento dallo studio preliminare alla direzione lavori\. Un unico interlocutore tecnico per coordinare prestazioni, sicurezza, sostenibilità e rispetto delle normative\./,
  );
});
