# dev-tools (not published)
Test and helper scripts for the DSM-5-TR Study Companion and PsychInterview. See HANDOFF.md.
- Clone DSMVapp to `dsmvapp/` and case-psychinterview beside it; serve dsmvapp on :8766 and the parent folder on :8770.
- Scripts write output to `$SC` (default: current folder). Line 1 imports Playwright from /home/claude/.npm-global; edit if needed.
- tests/t10.mjs, test.mjs: route smoke tests. ct.mjs: case tools end to end. ho.mjs: handout = 1 page. sc.mjs: script view. pi.mjs, pi2.mjs: PsychInterview inbox merge and deck PDF. st10.mjs: chapter screenshots.
- tests/mock-case.json: example case file (fictional "Mr. A"), valid for "Open case file".
- links10.js, stahl10.js, rebal*.js: per-chapter content checks used when building chapter packs.
