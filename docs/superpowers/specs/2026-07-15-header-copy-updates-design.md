# Header and copy updates

## Scope

Apply seven targeted updates to the existing Astro landing page without changing its overall layout, visual language, component structure, or deployment behavior.

## Header

- Add `Home` as the first navigation item, linking to `#top`.
- Increase the logo height from 40 px to 56 px on desktop.
- Use a 48 px logo height at the existing mobile breakpoint.
- Keep the current 80 px desktop header height and existing responsive behavior.

## Copy changes

- Replace the hero introduction with the approved description of MC2 TEK's engineering services.
- Rename the primary hero CTA to `Richiedi una Consulenza` while retaining its `#contatti` target.
- Replace the Services section heading with the approved BIM-focused copy.
- Replace the Services section introduction with the approved integrated-project description.
- Replace the Efficientamento Energetico card description with the approved expanded description.
- Preserve Italian accents, the `MC² TEK` spelling supplied by the user, and all requested capitalization.

## Implementation boundaries

- Update navigation and data-backed content in `src/data/site.js`.
- Update page-local Services copy in `src/pages/index.astro`.
- Update logo sizing and its responsive override in `src/styles/global.css`.
- Do not refactor unrelated content, components, assets, or styles.

## Verification

- Check each requested string and navigation target in the source.
- Inspect the Git diff to ensure only the intended files and lines changed.
- Run the Astro build using a Windows-compatible environment-variable invocation. If the known `.astro/content.d.ts` permission error persists, report it separately from source correctness.
