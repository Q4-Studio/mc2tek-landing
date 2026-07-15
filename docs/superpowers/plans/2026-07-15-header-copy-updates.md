# Header and Copy Updates Implementation Plan

Implementation follows the approved design in `../specs/2026-07-15-header-copy-updates-design.md`:

- Add `Home` as the first navigation item linking to `#top`.
- Set the logo to `3.5rem` on desktop and `3rem` at the existing 980 px breakpoint.
- Apply the five exact approved copy replacements in `src/data/site.js` and `src/pages/index.astro`.
- Add a dependency-free Node source regression test.
- Verify with `node --test`, `git diff --check`, diff inspection, and an Astro build attempt.
