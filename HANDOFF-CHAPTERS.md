# Handoff: DSM-5-TR Study Companion, chapter-by-chapter build
Updated Oct 25, 2026. Owner: Ma. Isabella P. Navarro, MD (psychiatry resident). This covers the **study-guide chapters**; the case-presentation work is in `claude/handoff.md`.

## 1. Project
- Static PWA for psychiatry residents, built from DSM-5-TR (2022) Section II, one chapter at a time.
- Repo `isaymotion/DSMVapp`, branch `main` (last commit e1e9208). Live at https://isaymotion.github.io/DSMVapp/. No build step.
- The test and helper scripts are on branch **`dev-tools`**, which is not published: folders `chapter-tools/` and `tests/`.
- Sibling app linked from treatment bridges: Stahl Study Companion. Repo `isaymotion/Stahl`, live at https://isaymotion.github.io/Stahl/.

## 2. Fixed rules
- **Copyright.** Write everything in the app's own words, with DSM-5-TR page references. Paraphrase the criteria; never copy the manual's text. Never commit the PDF or any extracted text.
- **Attribution** (README and About): "App created by Isabella Navarro, MD." Independent study aid, not affiliated with the APA.
- Look: maroon and dark-orange theme matching the icon, dark by default.
- Plain, clear English.
- Codes: give ICD-10-CM codes as updated (the Oct 1, 2024 changes are in labeled post-publication `update` boxes). **Check for any FY2027 changes effective Oct 1, 2026** before writing a chapter's codes, and web-search for current facts.
- Bold the **answer**, not the topic, in high yield (the bold text becomes the blank).
- Card `id`s drive spaced repetition, so never rename existing ids.
- Mnemonics written for the app get `original: true`, plus a "DSM check" caveat.
- Commit trailers: `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` plus the session line. Push to `main` directly; this is how every chapter so far was shipped.

## 3. Files per chapter (README "Adding a chapter" and "Content conventions" have the full schemas)
| File | Content | Ch 10 count (typical range) |
|---|---|---|
| `data/chNN/guide.js` | `SP.add("chNN","guide",{intro, parts:[{sections:[{id:"sNN-slug", …blocks}]}]})`; block types are listed in the README | 21 sections (13–28) |
| `highyield.js` | `SP.add("chNN","highYield",[{id,topic,items:[…]}])` | 83 items (57–122) |
| `cards-criteria.js` / `cards-differential.js` / `cards-clinical.js` | flashcard decks | 28 / 28 / 29 (24–48 each) |
| `cards-cases.js` | board questions: `choices`, `answer` (0-based), `why`, `tag` | 38 (38–44) |
| `glossary.js` | `SP.glossary = (SP.glossary\|\|[]).concat([[term, def, "chNN"], …])`; skip terms already defined | 48 (≈45–55) |
| `mnemonics.js` | mnemonic deck, each with `sec` and `dx` | 8 (3–12) |
| `vignettes.js` | board vignettes: `stem`, `choices`, `answer`, `why`, `whyNot`, optional `then` and `discuss` | **25** |
| `drills.js` | `dxline` (write the diagnosis) and `counting` | 14 / 10 |
| `traps.js` | exam traps | 22 (16–22) |
| `data/db/disorders-chNN.js` | `SP.disorders` entries (`id`, `ch`, `sec`, criteria summary, `duration`, `differential`, codes), compare presets, time ladder | 8 (5–30) |
| `data/helpers/chNN-<name>.js` | decision tree: `nodes` and `results` | 1–2 helpers |
| `data/db/clinical-chNN.js` | `SP.dxExtra` (`ask`, and `tx` treatment bridge with Stahl links) and `SP.complaintData` (complaint hub entries; same id = merge) | 7 (5–12) |

Copy an existing chapter's files as templates: ch10 is the most recent and complete; ch16 is the largest.

## 4. Per-chapter recipe (two commits: core, then practice pack)
1. **Source.** Run `python3 -I chapter-tools/extract_chapter.py <DSM.pdf> FIRST LAST <scratch>/dsm/chNN.txt`, with FIRST and LAST from the `pages` field in `data/chapters.js` (e.g. Ch 11: `399 405`). Read the chapter text fully.
2. **Research.** Look up post-2022 updates: ICD-10-CM code changes (Oct 2024, Oct 2025, Oct 2026), DSM-5-TR corrections or updates from APA, and key new evidence. Cite these in `update` boxes.
3. **Core build:**
   - `guide.js`: for long chapters, draft it in parts in the scratchpad (p1.js, p2.js, …) and concatenate.
   - `highyield.js`, the three card decks, `cards-cases.js`, `glossary.js`, `mnemonics.js`.
   - `disorders-chNN.js` and the helper file.
4. **Register the core:**
   - In `data/chapters.js`: set `ready: true` and `files: SP.CHAPTER_FILES`; add the disorders and helper files to `SP.extraFiles`; update the chapter `summary`.
   - Changelog entry at the top of `data/changelog.js` (**next id 27**).
   - `sw.js` VERSION bump (currently `'2026-10-25-case-tools-4'`, e.g. `'2026-10-26-ch11'`).
   - README chapter table.
5. **Check, then commit** "Chapter NN: Title (core build)":
   - `check_links.js` must report `bad 0`, with no BAD/DUP/UNUSED lines.
   - The route smoke test must show no errors, NOTFOUND or OVERFLOW at 1400 px or 390 px.
6. **Practice pack:**
   - Add `vignettes.js`, `drills.js`, `traps.js` and `data/db/clinical-chNN.js`.
   - Change the chapter's files to `SP.CHAPTER_FILES.concat(SP.PRACTICE_FILES)` and add the clinical file to `extraFiles`.
   - Rebalance the answer positions: `node chapter-tools/rebal_vignettes.js data/chNN/vignettes.js chNN` and `rebal_cases.js … cards-cases.js chNN`.
   - Run `check_stahl.js` (it must report `bad 0`) and `practice_walk.mjs` (`ERR []`).
   - Add a new changelog entry, bump the SW version again, update the README practice-pack list.
   - Commit "Chapter NN practice pack: …".
7. **Fact-check pass** before pushing: re-verify every code, duration, threshold and epidemiology figure against the chapter text and current sources. Fix, and note corrections in the changelog (type `"correction"`).
8. Push, then confirm with `git ls-remote origin main`. Update the status table here (§6) and re-upload this doc.

## 5. Commands
```
git clone https://github.com/isaymotion/DSMVapp dsmvapp
cd dsmvapp && git fetch origin dev-tools && git worktree add ../dsm-devtools dev-tools && cd ..
git clone https://github.com/isaymotion/Stahl Stahl          # only for check_stahl.js
(cd dsmvapp && python3 -m http.server 8766 >/dev/null 2>&1 &)
cd dsmvapp
CH=ch11 node ../dsm-devtools/chapter-tools/check_links.js      # "done bad 0"
CH=ch11 STAHL=../Stahl node ../dsm-devtools/chapter-tools/check_stahl.js   # "bad 0"
node ../dsm-devtools/chapter-tools/counts.js                    # content counts table per chapter
CH=ch11 SC=/tmp/out node ../dsm-devtools/chapter-tools/practice_walk.mjs   # "ERR []"
node ../dsm-devtools/chapter-tools/routes_smoke.mjs             # "ERRORS 0" twice; edit the routes list for the new chapter first
```
- Chromium and Playwright are preinstalled; **don't run `playwright install`**. The .mjs files import Playwright from `/home/claude/.npm-global/lib/node_modules/playwright/index.mjs`; edit line 1 if that path differs.
- The extraction script needs `pdftotext` (poppler-utils). It writes `dsm.txt` once next to the output file.

## 6. Status
| Chapter | Pages | Status |
|---|---|---|
| 2 Schizophrenia spectrum | 101–138 | Core and practice done |
| 3 Bipolar | 139–176 | Core and practice done |
| 4 Depressive | 177–214 | Core and practice done |
| 5 Anxiety | 215–261 | Core and practice done |
| 6 OCD and related | 263–294 | Core and practice done |
| 7 Trauma and stressor | 295–328 | Core and practice done |
| 8 Dissociative | 329–348 | Core and practice done |
| 9 Somatic symptom | 349–370 | Core and practice done |
| 10 Feeding and eating | 371–397 | Core and practice done |
| 16 Substance-related | 543–665 | Core and practice done |
| 18 Personality | 733–778 | Core and practice done |
| **11 Elimination** | 399–405 | **Next** |
| 17 Neurocognitive | 667–732 | Then |
| 1 Neurodevelopmental | 35–99 | Then |
| 12 Sleep-wake | 407–476 | Then |
| 15 Disruptive, impulse-control, conduct | 521–541 | Then |
| 13 Sexual dysfunctions | 477–510 | Then |
| 14 Gender dysphoria | 511–520 | Then |
| 19 Paraphilic; 20 Other mental; 21 Medication-induced movement; 22 Other conditions | 779–836 | Later |

The order is the user's choice: 11 → 17 → 1 → 12 → 15 → 13 → 14 → the rest. Also available: the case tools (`#/assess`); see `claude/handoff.md`.

## 7. Next step
**Chapter 11, Elimination Disorders** (pp. 399–405): enuresis, encopresis, other specified and unspecified.
- It is small, so the counts can be at the low end, but keep **25 vignettes** and about 10 counting drills.
- Ids: sections `s11-…`, high-yield `hy11-…`; helper file `data/helpers/ch11-elimination.js`, e.g. "Which elimination disorder?" (enuresis vs encopresis vs a medical cause; nocturnal vs diurnal; with or without constipation and overflow incontinence).
- Changelog id 27, then 28 for the practice pack.
- Complaint hub ideas: "bedwetting", "soiling". Stahl treatment bridges: desmopressin, imipramine (check that the Stahl app has these drug pages using check_stahl).

## 8. Pitfalls
- Vignette and board answers cluster on one letter unless rebalanced; run the rebal scripts after writing.
- Ambiguous vignettes have slipped through before (v10-19 had to be rewritten so that all criteria were clearly met). In each stem, state the duration and frequency explicitly.
- Tables overflow at phone width; check the 390 px OVERFLOW lines.
- Glossary: don't repeat terms defined in earlier chapters (the check reports duplicates).
- Write large files in parts; a single huge Write can fail.
- Merging pull requests is blocked by the permission classifier; push straight to `main` or ask the user to merge.
- `project_write` with `local_path` requires a file inside the working directory, not the scratchpad.
- The repo is public: no patient data and no copyrighted text.

## 9. Files to re-attach
- **The DSM-5-TR PDF** (the user's copy, ~7.5 MB, 1,376 pages: *Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision*). Attach it to the new chat **every time a new chapter is built**; it is needed for step 1.
