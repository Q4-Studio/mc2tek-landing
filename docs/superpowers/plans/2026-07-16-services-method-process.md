# Services and Method Process Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved service copy and turn the four Method cards into a numbered, connected 2×2 process.

**Architecture:** Keep all content in `src/data/site.js`, render separate step numbers and decorative connectors in `src/pages/index.astro`, and implement the desktop serpentine/mobile vertical route in `src/styles/global.css`. Extend the existing dependency-free source test before implementation.

**Tech Stack:** Astro 6, JavaScript ES modules, CSS, Node.js built-in assertions.

## Global Constraints

- Preserve the Method image, existing palette, typography families, service ordering, and all unrelated sections.
- Use exact approved Italian copy, punctuation, apostrophes, accents, and `Autodesk Revit` naming.
- Desktop route: `01 → 02 ↓ 03 ← 04` in a 2×2 grid.
- Mobile route at 980 px: `01 ↓ 02 ↓ 03 ↓ 04` in semantic DOM order.

---

### Task 1: Add failing content and process tests

**Files:**
- Modify: `tests/landing-copy-updates.test.mjs`

**Interfaces:**
- Consumes: `createSiteConfig()`, `src/pages/index.astro`, and `src/styles/global.css`.
- Produces: assertions for the three service descriptions, Method introduction, four numbered steps, rendering hooks, and serpentine CSS.

- [ ] Add assertions for the exact strings from the approved spec, `site.approach.pillars.map(({ step }) => step)` equal to `["01", "02", "03", "04"]`, `/pillar\.step/`, `/pillar-connector/`, and `grid-template-areas: "step-1 step-2" "step-4 step-3"`.
- [ ] Run `node tests/landing-copy-updates.test.mjs` and verify failure on the old Prevenzione Incendi description.

### Task 2: Implement approved data and process UI

**Files:**
- Modify: `src/data/site.js:53-101`
- Modify: `src/pages/index.astro:90-97`
- Modify: `src/styles/global.css:446-458,723-727`

**Interfaces:**
- Consumes: each `site.approach.pillars` item shaped as `{ step: string, title: string, text: string }`.
- Produces: semantic DOM order 01–04 and decorative connectors hidden from assistive technology.

- [ ] Replace the three service descriptions, Method introduction, and four pillar objects with the exact approved spec values.
- [ ] Render `<span class="pillar-step">{pillar.step}</span>` before each heading and render `<span class="pillar-connector" aria-hidden="true"></span>` only when `index < site.approach.pillars.length - 1`.
- [ ] Assign desktop grid areas `step-1 step-2 / step-4 step-3`; use right, down, and left arrow badges for steps 1–3. At 980 px, reset every card to automatic grid placement and make every connector a downward arrow below its card.
- [ ] Run `node tests/landing-copy-updates.test.mjs` and verify all assertions pass.

### Task 3: Verify and update PR

**Files:**
- Verify: `src/data/site.js`
- Verify: `src/pages/index.astro`
- Verify: `src/styles/global.css`
- Verify: `tests/landing-copy-updates.test.mjs`

**Interfaces:**
- Consumes: completed implementation.
- Produces: a clean commit pushed to PR #6.

- [ ] Run both test files directly with Node and expect 2 passing tests total.
- [ ] Run `git diff --check` and inspect the focused diff.
- [ ] Run `$env:ASTRO_TELEMETRY_DISABLED='1'; npx astro build` outside the restricted sandbox and expect one static page built.
- [ ] Commit with `feat: expand services and method process`, push `codex/header-copy-updates`, and verify PR #6 remains open.
