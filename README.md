# dev-tools (not published)
Test and helper scripts for the DSM-5-TR Study Companion and PsychInterview. See HANDOFF.md.
- Clone DSMVapp to `dsmvapp/` and case-psychinterview beside it; serve dsmvapp on :8766 and the parent folder on :8770.
- Scripts write output to `$SC` (default: current folder). Line 1 imports Playwright from /home/claude/.npm-global; edit if needed.
- tests/t10.mjs, test.mjs: route smoke tests. ct.mjs: case tools end to end. ho.mjs: handout = 1 page. sc.mjs: script view. pi.mjs, pi2.mjs: PsychInterview inbox merge and deck PDF. st10.mjs: chapter screenshots.
- tests/mock-case.json: example case file (fictional "Mr. A"), valid for "Open case file".
- links10.js, stahl10.js, rebal*.js: per-chapter content checks used when building chapter packs.

## Chapter tools (chapter-tools/)
See HANDOFF-CHAPTERS.md for the per-chapter recipe.
- extract_chapter.py: chapter text from the user's DSM-5-TR PDF by printed page range (output stays in scratch, never committed).
- check_links.js (CH=chNN): cross-references, helper trees, mnemonic links, duplicate card ids, glossary duplicates.
- check_stahl.js (CH, STAHL=path to Stahl clone): treatment-bridge links into the Stahl app.
- counts.js: content counts per chapter.
- rebal_vignettes.js / rebal_cases.js FILE chNN: spread correct answers across positions.
- practice_walk.mjs (CH): answers every vignette, write-the-diagnosis and counting drill in the browser.
- routes_smoke.mjs: loads a route list at desktop and phone width; reports errors, missing pages and overflow.
