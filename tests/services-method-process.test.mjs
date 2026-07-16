import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createSiteConfig } from "../src/data/site.js";

const indexSource = await readFile(new URL("../src/pages/index.astro", import.meta.url), "utf8");
const css = await readFile(new URL("../src/styles/global.css", import.meta.url), "utf8");

test("services and Method process match the approved content and route", () => {
  const site = createSiteConfig();
  const serviceDescription = (title) =>
    site.services.find((service) => service.title === title)?.description;

  assert.equal(
    serviceDescription("Prevenzione Incendi"),
    "Progettiamo le misure di prevenzione e protezione antincendio e gestiamo le pratiche autorizzative presso i Vigili del Fuoco, nel rispetto della normativa vigente.",
  );
  assert.equal(
    serviceDescription("Sicurezza e Impianti Elettrici"),
    "Progettiamo impianti elettrici, illuminotecnici, fotovoltaici, domotici, antintrusione, trasmissione dati e supervisione, coordinandoli con le altre discipline progettuali.",
  );
  assert.equal(
    serviceDescription("Direzione Lavori"),
    "Coordiniamo e verifichiamo l’esecuzione degli impianti, controllando conformità al progetto, qualità delle lavorazioni, tempi, costi, prove funzionali e documentazione finale.",
  );
  assert.equal(
    site.approach.intro,
    "Dall’idea al collaudo: un processo coordinato per impianti affidabili e realizzabili.",
  );
  assert.deepEqual(site.approach.pillars, [
    {
      step: "01",
      title: "Analisi e rilievo",
      text: "Esaminiamo lo stato dei luoghi, le esigenze funzionali, i vincoli normativi e gli obiettivi energetici ed economici dell’intervento.",
    },
    {
      step: "02",
      title: "Progettazione integrata e BIM",
      text: "Sviluppiamo gli impianti meccanici, elettrici, speciali e antincendio, sfruttando anche la metodologia BIM attraverso un modello digitale condiviso permettendo di coordinare dati, strutture e impianti in tempo reale per ottimizzare l'opera e azzerare gli errori prima dell'avvio del cantiere.",
    },
    {
      step: "03",
      title: "Coordinamento e verifica",
      text: "Coordiniamo impianti, architettura e strutture, verificando interferenze, prestazioni, quantità e coerenza degli elaborati progettuali.",
    },
    {
      step: "04",
      title: "Direzione lavori e collaudo",
      text: "Seguiamo l’esecuzione delle opere, controllando conformità, qualità, tempi, prove funzionali e documentazione finale degli impianti.",
    },
  ]);

  assert.match(indexSource, /class="pillar-step">\{pillar\.step\}<\/span>/);
  assert.match(indexSource, /class="pillar-connector" aria-hidden="true"/);
  assert.match(css, /grid-template-areas:\s*"step-1 step-2"\s*"step-4 step-3";/);
  assert.match(
    css,
    /@media \(max-width: 980px\)[\s\S]*?\.pillar-card:nth-child\(n\)\s*{[^}]*grid-area:\s*auto;/,
  );
});
