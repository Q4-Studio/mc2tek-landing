# Services and Method Process Updates

## Scope

Update three service descriptions and redesign the existing four Method cards as a clearly numbered, connected process. Preserve the rest of the page, the Method image, the established industrial visual language, and the current responsive breakpoint.

## Service copy

Replace the descriptions for these existing service cards with the exact approved Italian copy:

- `Prevenzione Incendi`: `Progettiamo le misure di prevenzione e protezione antincendio e gestiamo le pratiche autorizzative presso i Vigili del Fuoco, nel rispetto della normativa vigente.`
- `Sicurezza e Impianti Elettrici`: `Progettiamo impianti elettrici, illuminotecnici, fotovoltaici, domotici, antintrusione, trasmissione dati e supervisione, coordinandoli con le altre discipline progettuali.`
- `Direzione Lavori`: `Coordiniamo e verifichiamo l’esecuzione degli impianti, controllando conformità al progetto, qualità delle lavorazioni, tempi, costi, prove funzionali e documentazione finale.`

## Method introduction

Replace the current Method introduction with:

`Dall’idea al collaudo: un processo coordinato per impianti affidabili e realizzabili.`

## Process content

Replace the four current pillars with these numbered steps in semantic order:

1. `01 — Analisi e rilievo`: `Esaminiamo lo stato dei luoghi, le esigenze funzionali, i vincoli normativi e gli obiettivi energetici ed economici dell’intervento.`
2. `02 — Progettazione integrata e BIM`: `Sviluppiamo gli impianti meccanici, elettrici, speciali e antincendio, anche mediante modellazione BIM con Autodesk Revit.`
3. `03 — Coordinamento e verifica`: `Coordiniamo impianti, architettura e strutture, verificando interferenze, prestazioni, quantità e coerenza degli elaborati progettuali.`
4. `04 — Direzione lavori e collaudo`: `Seguiamo l’esecuzione delle opere, controllando conformità, qualità, tempi, prove funzionali e documentazione finale degli impianti.`

Store the number separately from the title so the visual hierarchy can emphasize it without altering the accessible heading text.

## Desktop layout

Keep the existing 2×2 card grid and place the steps in a connected serpentine route:

```text
01 Analisi       → 02 Progettazione
                     ↓
04 Realizzazione ← 03 Coordinamento
```

- Step 1 occupies the top-left cell.
- Step 2 occupies the top-right cell.
- Step 3 occupies the bottom-right cell.
- Step 4 occupies the bottom-left cell.
- Use restrained green directional connectors between adjacent cards.
- Keep the complete approved titles in the cards; the shortened labels above describe only the route.

## Mobile layout

At the existing `980px` breakpoint:

- Return cards to semantic DOM order in one column: 01, 02, 03, 04.
- Change all intermediate connectors to downward arrows.
- Do not render a connector after step 04.

## Implementation boundaries

- Update data in `src/data/site.js`.
- Render the separate step number and decorative connector in `src/pages/index.astro`.
- Implement card placement, numbering, and responsive connectors in `src/styles/global.css`.
- Do not change the Method image, typography families, colors outside the existing palette, service ordering, or other page sections.

## Verification

- Extend the existing dependency-free Node tests with all exact service and Method values.
- Assert semantic step order and the presence of separate step numbers in the page source.
- Verify desktop serpentine placement and mobile single-column reset in CSS.
- Run both Node test files, `git diff --check`, and the Astro production build.
