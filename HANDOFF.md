# Handoff: DSM-5-TR Study Companion, chapter-by-chapter build
Updated Nov 9, 2026 (after the **global fact-check of Chapters 2–11 and 16–18**; every chapter has now had the two-checker fact-check). Owner: Ma. Isabella P. Navarro, MD (psychiatry resident). This covers the **study-guide chapters**; the case-presentation work is in `claude/handoff.md`.

## 1. Project
- Static PWA for psychiatry residents, built from DSM-5-TR (2022), one chapter at a time. **All 22 Section II chapters and the four Section III chapters are built and fact-checked**: 23 Assessment Measures (pp. 841–857, 858 blank), 24 Culture and Psychiatric Diagnosis (pp. 859–879), 25 Conditions for Further Study (pp. 903–927), 26 Alternative DSM-5 Model for Personality Disorders (pp. 881–901, 902 blank). The app's numbering 23–26 is its own; the manual does not number Section III.
- Repo `isaymotion/DSMVapp`, branch `main` (last commit **f0d5902**, release 57.0.0). The user's own commits since Ch 26: the design refresh (55.0.0, Nov 5) and the DSM-V-TR icon (56.0.0, 6e73306, Nov 6). Live at https://isaymotion.github.io/DSMVapp/. No build step.
- The test and helper scripts are on branch **`dev-tools`** (adds `chapter-tools/factcheck_brief.md`, `research/codes-2026-11.md` = the Nov 9 APA/ICD-10-CM code-change report for Ch 2–11 and 16–18, and `HANDOFF.md` = a copy of this doc), which is not published: folders `chapter-tools/` and `tests/`. The scripts still work after the design refresh.
- Sibling app linked from treatment bridges: Stahl Study Companion. Repo `isaymotion/Stahl`, live at https://isaymotion.github.io/Stahl/.

## 2. Fixed rules
- **Copyright.** Write everything in the app's own words, with DSM-5-TR page references. Paraphrase the criteria; never copy the manual's text (the fact-checker flags runs of 12+ words; official names, code lists, ICD titles, the manual's lists of related disorders and its recording examples are exempt). Never commit the PDF or any extracted text. **Instruments (Ch 23, 24, 26): describe them, never reprint them.** The CFI questions are described by purpose; the Ch 23 measures at the purpose level, with **no item wording and no response-anchor wording**; the Ch 26 LPFS (Table 2) and trait taxonomy (Table 3) are condensed level and facet synopses, and the PID-5 forms, LPFS-SR, LPFS-BF 2.0 and SCID-5-AMPD are described by purpose and length only. The condensed CRDPSS anchors live in the Case tools rater `#/assess/scale/crdpss`; link to it, do not repeat it.
- **Attribution** (README and About): "App created by Isabella Navarro, MD." Independent study aid, not affiliated with the APA.
- Look: maroon and dark-orange theme matching the icon, dark by default (the design refresh added a match-device theme). Plain, clear English.
- Codes: give ICD-10-CM codes as updated (post-publication changes go in labeled `update` boxes). Check FY2027 (Oct 1, 2026) and the APA code-update PDFs before writing codes; web-search for current facts. **Say "no change was found for the codes checked; confirm against the official tabular list"** rather than "unchanged" for codes whose history was not pulled individually.
- **Section III rules:** the Ch 25 proposed criteria sets are research tools, **not official diagnoses** (p. 903); the chart answer is the Section II category or Chapter 22 code. The Ch 24 cultural concepts of distress are **illustrations, not diagnoses** (p. 873). **The Ch 23 measures are tools: a threshold or high score is a prompt for further inquiry, never a diagnosis, and no score goes on the diagnosis line.** **The Ch 26 alternative model is offered "as an alternative" (p. 881): the diagnosis line carries the Section II personality disorder and code (Ch 18), and the LPFS level and trait profile go in the formulation; every recording statement is app guidance.** Library entries use `code: "No code (Section III)"` / `"No code (cultural concept of distress)"` / `"No code (assessment measure)"` with the route in `codes`, labeled app guidance.
- Bold the **answer**, not the topic, in high yield. Card `id`s drive spaced repetition: never rename existing ids (new ids may be added; the fact-check added m3-04, m4-06, m11-05, m17-11, m18-13).
- Mnemonics written for the app get `original: true` plus a "DSM check" `caveat`; every mnemonic needs `dx` and `sec`. Mnemonics in the guide must match the ones in `mnemonics.js`.
- Label everything beyond the DSM text (treatment, ICD-10-CM titles, ICD-11, law, epidemiology not in the text, exam strategy, **Philippine context**, other chapters' criteria "(Ch N)", Section I "(Section I, p. 15)", app arithmetic and app counts, and the DSM-5 → DSM-5-TR comparison boxes) as outside the DSM / app guidance. Exam callouts in the guide end with "(app guidance)". **Keep the manual's hedges**; dropped hedges are the commonest finding. **Outside-the-DSM claims must be sourced**; unverifiable ones are relabeled "app guidance; not verified" or trimmed.
- Self-harm wording: clinical, at the manual's level of generality; never lethality, dose, technique, location beyond "forearm and thighs", or severity markers such as "needed emergency care". Prefer "began a self-poisoning attempt" to naming the agent in vignettes. (An **unintentional** substance overdose may name the agents, never quantities: v16-03.) For measures, say "the suicidal ideation item" / "the suicide attempt item"; for Ch 26, "self-harming behavior under emotional distress" and "thoughts of suicide and suicidal behavior".
- Philippine crisis line (verified Sept 2026, SunStar; Jan 2026 Tribune and findahelpline confirm 1553 and the mobile numbers): NCMH Crisis Hotline **1553** (toll-free from landlines) or 1800-1888-1553; 0919-057-1553 (Smart/TNT); 0917-899-8727 and 0966-351-4518 (Globe/TM); always "confirm before giving out". **Use the one full string everywhere.** Hopeline was removed from `clinical-ch22.js` and `clinical-ch25.js` (Nov 9); grep shows no Hopeline left.
- Commit trailers: `Co-Authored-By: Claude <model> <noreply@anthropic.com>` plus the session line. Push to `main` directly. The stop hook requires `git config user.name Claude` and `user.email noreply@anthropic.com` and a clean tree at the end of every turn (commit and push before replying; if a subagent is mid-edit, commit the finished files with a targeted `git add`).
- **Releases (since the design refresh):** every release adds an entry at the top of `data/changelog.js` with a semver `version` "n.0.0" (next **58.0.0**), then bumps `version` in `data/app-meta.js`, `VERSION` in `sw.js` (both now `'57.0.0'`), and "Latest version <Month YYYY>" in the footer (`index.html`), `data/app-meta.js` and `README.md` (currently November 2026). Item types: chapter, feature, correction, update, content; optional `ch`, `href`, `link`.
- After each build, give the user the full updated handoff text in one copy-pastable code block in the final reply, and re-upload this doc to the project.
- **Vignette and board-question style:** the keyed choice must not be systematically the longest option, answer positions must not follow a fixed cycle (many older chapters had an exact 1,3,0,4,2 cycle; now broken everywhere checked), and no choice carries an "(app guidance)" tag; put the detail in `why`. When reordering choices, move `answer` and `whyNot` in step.

## 3. Files per chapter (README "Adding a chapter" and "Content conventions" have the schemas)
| File | Content | Range |
|---|---|---|
| `data/chNN/guide.js` | `SP.add("chNN","guide",{intro, objectives, parts:[{title, sections:[{id:"sNN-slug", title, pages, blocks}]}]})`; `update` blocks `{type:"update", kind:"post", year, title, source, text}` | 10–31 sections |
| `highyield.js` | `SP.add("chNN","highYield",[{id:"hyNN-slug",topic,items:[…]}])` (items are plain strings with the page inside; no `sec`) | 50–276 items |
| `cards-criteria.js` / `cards-differential.js` / `cards-clinical.js` | ids `cNN-`, `dNN-`, `kNN-`, fields `id, tag, sec, q, a` | 18–62 each |
| `cards-cases.js` | board questions `qNN-`: `choices` (5), `answer` (0-based), `why`, `tag`, `sec` | 16–44 |
| `glossary.js` | `SP.glossary = (SP.glossary||[]).concat([[term, def, "Ch NN"], …])`; skip or disambiguate existing terms | 19–87 |
| `mnemonics.js` | `mNN-`, each with `sec`, `dx`, `caveat` | 3–13 |
| `vignettes.js` | `vNN-`: `tag`, `sec`, `dx`, `stem`, `q`, `choices`, `answer`, `why`, `whyNot`, optional `then`, `discuss` | 10–25 |
| `drills.js` | two calls: `SP.add("chNN","dxline",[…])` (`wNN-`; **vary the answer index, the app does not shuffle**) and `SP.add("chNN","counting",[…])` (`nNN-`, `items: [[text, counts, why]]`, `need`, `met`) | 6–15 / 6–10 |
| `traps.js` | `tNN-` with a real `sec` | 10–28 |
| `data/db/disorders-chNN.js` | `SP.disorders` entries (id, ch, sec, pages, critPages, name, code, codes, aka, essence, duration, functioning, mood, criteria, specifiers, epi, risk, differential, pearls, cmp, clues, updates), `SP.comparePresets`, optional `SP.timeLadders` | 4–34 |
| `data/helpers/chNN-<name>.js` | decision tree: `nodes` and `results` | 1–2 |
| `data/db/clinical-chNN.js` | `SP.dxExtra` and `SP.complaintData` | 4–34 |

Templates: ch20 (smallest), ch14 (small), ch21 and ch22 (mid-size non-disorder chapters), ch23 (tools-only Section III), ch24 (non-disorder Section III), ch25 (Section III proposed sets), ch26 (Section III model), ch19 (mid-size disorder chapter), ch12 and ch17 (full-size).

## 4. Recipes
### 4a. Per-chapter build (as used for Ch 19–26)
1. **Source.** `python3 -I ../dsm-devtools/chapter-tools/extract_chapter.py <DSM.pdf> FIRST LAST+1 <scratch>/dsm/chNN.txt` (**use LAST+1**: with LAST the final printed page is often cut; the extra text from the next chapter is harmless). The script also leaves the whole manual at `<scratch>/dsm/dsm.txt`. This PDF's page breaks do not match the printed pages: trust the printed markers.
2. **Research** with a Sonnet agent: code histories, APA update PDFs, evidence, Philippine context, treatment guidelines; list what was NOT verified.
3. **Spec file** in the scratchpad; count the manual's lists yourself; verify other-chapter page claims against dsm.txt.
4. **Core build.** Opus agents write decks and practice files from the spec; Claude writes `guide.js` and the helper; ngram check and reword.
5. **Register** in `data/chapters.js`, changelog (§2 release rule), `sw.js`, README; run the checks (§5); cross-links; commit, push.
6. **Fact-check** (4b).

### 4b. Two-checker fact-check (used for Ch 2–11 and 16–18 on Nov 9, ~3 h wall time)
- Brief: `../dsm-devtools/chapter-tools/factcheck_brief.md` (rules, categories, finding format, parse/ngram/link commands, "do not edit until told"). Copy it to the scratchpad and fix the `<scratch>` path.
- One Sonnet research agent first writes `<scratch>/research/codes.md` (APA code updates and ICD-10-CM changes for the chapters; ends "END OF REPORT").
- Per chapter, two Opus agents: **main** (every file except vignettes) and **vig** (vignettes only, with an AMBIGUOUS category). For the largest chapters (16, 17) split main into **mainA** (guide, highyield, disorders, clinical, helper) and **mainB** (cards, cases, glossary, mnemonics, drills, traps). Run 2–3 chapters at a time.
- Claude reviews every WRONG and AMBIGUOUS line against the text (`grep -E '(WRONG|AMBIGUOUS)( \([^)]*\))? —' findings/*.md`), then `SendMessage`s each agent "apply ALL findings" with any rulings; agents edit only their scope and report parse/ngram/links in one line; Claude commits per batch.
- **Tallies Nov 9** (wrong / imprecise / page / unlabeled / style, main + vig): Ch 2: 11/36/4/26/11; Ch 3: 9/31/2/13/5; Ch 4: 6/31/4/28/9; Ch 5: 4/44/6/17/6; Ch 6: 4/46/2/19/8; Ch 7: 6/40/3/16/9; Ch 8: 6/35/1/14/16; Ch 9: 1/30/3/16/7; Ch 10: 4/28/3/20/9; Ch 11: 3/21/2/13/11; Ch 16: 7/52/5/16/8; Ch 17: 6/64/1/22/19; Ch 18: 7/37/10/25/15. **Total 74 wrong**; ambiguous vignettes 31. Earlier chapters: Ch 20: 2/16/6/8/1; Ch 21: 5/16/6/3/3; Ch 22: 3/10/5/4/5; Ch 25: 4/24/5/4/7; Ch 24: 4/17/4/7/2; Ch 23: 11/24/5/11/5; Ch 26: 6/23/13/12/2.
- Most common WRONG type by far: **a case, drill or vignette stem that does not meet the criteria its keyed answer needs** (one symptom short; missing duration, impairment or Criterion D). Fix by adding the missing detail to the stem, not by changing the key.

The container can restart between turns: re-check `git log` and the working tree before assuming where you are. Waiting on agents: a foreground `until …; do sleep 20; done` loop (timeout ≤ 600 s).

## 5. Commands
    git clone https://github.com/isaymotion/DSMVapp dsmvapp
    cd dsmvapp && git config user.name Claude && git config user.email noreply@anthropic.com
    git fetch --depth 1 origin dev-tools && git worktree add ../dsm-devtools FETCH_HEAD && cd ..
    git clone --depth 1 https://github.com/isaymotion/Stahl Stahl          # only for check_stahl.js
    cd dsmvapp
    curl -s localhost:8766 >/dev/null || (nohup python3 -m http.server 8766 >/dev/null 2>&1 &)   # restart before every smoke test
    CH=chNN node ../dsm-devtools/chapter-tools/check_links.js      # "done bad 0", "gl dups []"
    CH=chNN STAHL=../Stahl node ../dsm-devtools/chapter-tools/check_stahl.js   # "bad 0"
    node ../dsm-devtools/chapter-tools/counts.js                    # content counts per chapter
    CH=chNN SC=<scratch>/shots/ node ../dsm-devtools/chapter-tools/practice_walk.mjs   # "ERR []" (trailing slash)
    SC=<scratch>/shots node ../dsm-devtools/chapter-tools/routes_smoke.mjs   # "ERRORS 0" twice
    python3 -I ../dsm-devtools/chapter-tools/ngram.py <scratch>/dsm/chNN.txt data/chNN/*.js data/db/*chNN.js data/helpers/chNN-*.js
- Parse check (**single `-e`**; with two `-e` flags node runs only the last): `node -e 'global.window={};global.SP=window.SP={add(){},glossary:[]};SP.disorders=[];SP.dxExtra=[];SP.complaintData=[];const vm=require("vm"),fs=require("fs");for(const f of process.argv.slice(1)){try{vm.runInThisContext(fs.readFileSync(f,"utf8"))}catch(e){console.log("ERR",f,e.message)}}console.log("parsed")' FILES`
- `data/chapters.js` needs `global.window={}; global.SP=window.SP={}` to load in node; the registry is `SP.manifest`.
- Always set `SC=`; don't run `playwright install`; the extraction script needs `pdftotext`; never commit screenshots.
- Push access: run `add_repo` (owner isaymotion, repo DSMVapp, access push) first in a new session (on Nov 9 it succeeded at the first call). The remote prints "This repository moved" (lowercase URL); pushes still work. To push `dev-tools` from the worktree: `git checkout -b dev-tools`, commit, `git push origin dev-tools:dev-tools`.
- Web fetches of the APA update PDFs from psychiatry.org were blocked (403) on Nov 9; search snippets and secondary sources worked.

## 6. Status
| Chapter | Pages | Status |
|---|---|---|
| 1, 12–15, 19–22 (Section II) | — | Built and fact-checked (earlier sessions) |
| **2–11, 16–18 (Section II)** | 101–405, 543–778 | **Fact-checked Nov 9** (two-checker routine, all files); commits d00bd9d, 629757f, c9e70a1, 5552807, f564181, c84eecc, 936d457, f0d5902 |
| 23 Assessment Measures | 841–857 | Done (Oct 30) |
| 24 Culture and Psychiatric Diagnosis | 859–879 | Done (Oct 28–29) |
| 25 Conditions for Further Study | 903–927 | Done (Oct 28) |
| 26 Alternative DSM-5 Model for PDs | 881–901 | Done (Nov 2) |

Release 57.0.0 (Nov 9): changelog entry "Fact-check: Chapters 2–11 and 16–18"; also 2b6fd0f (crisis line in Ch 22 and 25). All checks on Nov 9: links bad 0 and Stahl bad 0 for all 13 chapters, practice_walk ERR [] for all 13, routes_smoke ERRORS 0 at 1400 and 390 px.

## 7. Next steps (suggestions; the user decides)
- **APA September 2024 adjustment disorder subtype rewording** (Ch 7): not in the app; the APA PDF could not be read (403). Add a labeled `update` box once the wording is read from the PDF (the user can attach it).
- **APA September 2023 text change** in the Ch 2 delusional disorder / schizophrenia differentials (OCD, BDD, hoarding with absent insight / delusional beliefs): not in the app for the same reason.
- The APA September 2025 "-like" rewording now has labeled boxes in Ch 3, 4, 9, 10 and 17; it also touches **Ch 12** (insomnia examples): check Ch 12.
- Treatment points in `clinical-ch16.js` not individually web-checked (thiamine timing, antipsychotic caution, lofexidine/clonidine, CYP1A2, hallucinogen care steps) keep their outside-DSM label; a later pass could source them.
- Finishing touches: the README intro could say the app is complete; consider removing `renderSoon` and the `is-soon` nav styling if unused.
- Earlier candidates: a whole-app "Codes current to October 2026" page; exam-mode features (timed mixed sets; weak-area review); a "Measures" shortcut from the Case tools scales page to Chapter 23; a Chapter 18 ↔ 26 shortcut to the `ampd` helper.

## 8. Pitfalls
- **Global fact-check lessons (Nov 9):** hepatic encephalopathy is **K76.82** since Oct 1, 2022 (printed K72.90, p. 137). Substance/medication-induced psychotic disorder and psychotic disorder due to another medical condition rate **four** primary symptoms (no disorganized speech; pp. 127, 131). All three catatonia diagnoses use two codes; only unspecified catatonia starts with a symptom code (R29.818). Hypomania needs **3** B symptoms (4 if mood only irritable) plus Criterion A energy; a manic episode with psychosis still needs ≥1 week or hospitalization. Only MDD and PDD exclude any past manic/hypomanic episode; DMDD has its own rule; PMDD has none. Substance-induced depression: depressant **intoxication** and stimulant **withdrawal** (p. 203). Selective mutism: at least 1 month, not limited to the first month of school (p. 222). Panic attack specifier "should be noted" (p. 242). RAD must be evident before age 5 (p. 296). Prolonged grief: heightened suicidal **ideation**; link to behavior not established (p. 326). DPDR onset in the fourth decade (30s) or later is highly unusual (p. 344); onset after 40 needs medical workup (p. 345); substances collectively precipitate ~15% (p. 347). **Encopresis**: Criterion D (p. 402) and the differential (p. 405) read differently on medical causes of constipation (hypothyroidism, celiac named on p. 403); the app shows both and keys no item on the clash. Hallucinogen complications print **hypernatremia** (p. 594). NCD due to unknown etiology (F03.A0) came in the Sept 2022 code update; the printed manual uses R41.9 (p. 732). Thiamine before glucose is tradition; ASAM 2020 found no evidence of harm from glucose first.
- **Ch 26 lessons:** schizotypal PD's criteria and text are in **Chapter 18** (criteria p. 744, "(premorbid)" note p. 745); Chapter 2 only lists it (p. 104), although the library entry `schizotypal-pd` lives in `disorders-ch02.js`. Section II PD pages: general criteria 734, under-18 one-year rule 736, paranoid 737, schizoid 741, antisocial 748, borderline 752, histrionic 757, narcissistic 760, **avoidant 764**, dependent 768, OCPD 771, other specified/unspecified 778. Psychopathic features: high attention seeking + low withdrawal = social potency; low anxiousness = stress immunity (p. 885). Paranoid, schizoid, histrionic and dependent PD are current diagnoses represented by PD-TS (p. 891).
- **Ch 23 lessons:** the WHODAS "clinical judgment" sentence is on pp. 846 and 851 only; Level 2 measures are not APA instruments; PHQ-9 vs PROMIS; informant Level 1 only for impaired capacity (p. 843); five primary psychosis symptoms in criteria text vs eight in the Classification footnote (p. xxix).
- **Ch 24 lessons:** seven headed reasons (pp. 872–873); CFI Q1–5 p. 864, Q6–11 p. 865, Q12–15 p. 866, Q16 p. 867; Informant version 17 questions; cibih = Zapotec susto; dhat is an explanation (p. 874).
- **Ch 25 lessons:** APS A–F on p. 903; F31.89 example 2 (p. 168); ND-PAE "more than" thresholds (p. 918); caffeine withdrawal 3+ symptoms (pp. 571–572); hallucinogen, phencyclidine and inhalant use disorders have 10 criteria.
- **Ch 22 / 21 / 20 lessons:** Section I p. 28 coding sentence; T14.91XA/XD; Z62.898 for a grandparent in a parental role; rabbit syndrome 3–6 Hz; CK ≥4× ULN "commonly seen"; F99 shared by other specified and unspecified mental disorder.
- Earlier lessons unchanged: label hedges, rebalance answers, state every fact a `why` relies on, keep `specifiers` labels short, avoid wide timelines at 390 px, never commit screenshots, never rename ids.

## 9. Files to re-attach
- Not kept (one-off, already applied): the per-chapter apply scripts and findings files from the Nov 9 scratchpad; the extracted DSM text (copyrighted; re-extract from the PDF).
- **The DSM-5-TR PDF** (~8.9 MB as uploaded Nov 9, 1,376 pages) only if a chapter is to be re-checked.
- **The APA September 2024 and September 2023 update PDFs** if the §7 update boxes are to be written (they could not be downloaded here).
- **Use the project copy of this handoff** (`claude/handoff-dsm-chapters.md`).
