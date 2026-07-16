import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createSiteConfig } from "../src/data/site.js";

const contactFormSource = await readFile(new URL("../src/components/ContactForm.astro", import.meta.url), "utf8");
const indexSource = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");

test("public copy contains no prototype messaging and uses the approved brand and BIM text", () => {
  const site = createSiteConfig();
  const bimStep = site.approach.pillars.find(({ step }) => step === "02");

  assert.equal(
    bimStep?.text,
    "Sviluppiamo gli impianti meccanici, elettrici, speciali e antincendio, sfruttando anche la metodologia BIM attraverso un modello digitale condiviso permettendo di coordinare dati, strutture e impianti in tempo reale per ottimizzare l'opera e azzerare gli errori prima dell'avvio del cantiere.",
  );
  assert.equal(site.brand.name, "MC² TEK");
  assert.equal(site.brand.legalName, "MC² TEK Ingegneria e Servizi");
  assert.equal(site.hero.eyebrow, "MC² TEK Ingegneria e Servizi");
  assert.equal(
    site.contact.intro,
    "Descrivi le esigenze, gli obiettivi e lo stato del progetto: il nostro team ti ricontatterà per approfondire la richiesta.",
  );

  assert.doesNotMatch(
    contactFormSource,
    /GitHub Pages|Webhook form|Form custom statico|Endpoint non ancora configurato|PUBLIC_CONTACT_WEBHOOK_URL/,
  );
  assert.doesNotMatch(indexSource, /GitHub Pages in hosting statico|Webhook form configurabile in deploy/);
  assert.match(contactFormSource, /Il modulo non è al momento disponibile\. Contattaci via email o telefono\./);
  assert.match(indexSource, /&copy; \{currentYear\} \{site\.brand\.name\}/);
});
