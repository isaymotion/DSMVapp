# Fact-check brief: DSM-5-TR Study Companion, Chapters 2–11 and 16–18

You are checking ONE chapter (or one chapter's vignettes) of a static study app for psychiatry residents, built from DSM-5-TR (2022). The content was written earlier and has NOT yet had a two-checker fact-check. Your job: find errors against the manual and label problems, write findings, then (only when told) apply them.

## Paths
- App repo: /home/claude/dsmvapp (do NOT commit, push or run git write commands; the lead does that)
- Chapter files: data/chNN/*.js, data/db/disorders-chNN.js, data/db/clinical-chNN.js, data/helpers/chNN-*.js
- DSM text of the chapter: /home/claude/scratch/dsm/chNN.txt (it may run a few pages into the next chapter; ignore that part). Whole manual: /home/claude/scratch/dsm/dsm.txt. Printed page numbers appear as bare numbers on their own line and mark the START of that printed page (inside tables they may sit in the first row). Use these markers, not PDF page numbers. To find a page: grep -n "^ *752 *$" file.
- Code research (ICD-10-CM changes since 2022): <scratch>/research/codes.md (may still be in progress when you start; read it before writing code findings, and wait for it if it is missing; it is complete when it ends with a line "END OF REPORT").
- Never copy DSM text into the repo. Never commit or move the PDF or text files.

## What to check (every file in your scope)
1. **Wrong**: a fact that contradicts the manual (criteria counts, durations, thresholds, specifiers, codes, ages, prevalence figures, which chapter/page something is in, differential statements, keyed answers in cases/vignettes/drills).
2. **Imprecise**: a dropped or added hedge ("may", "often", "can", "is an acceptable clinical option", "may serve as a guide"), an overstated or narrowed claim, "required" where the manual says "commonly", a figure given without its population/setting.
3. **Page**: wrong page reference (check criteria pages in particular).
4. **Unlabeled**: anything beyond the DSM text not labeled as outside the DSM / app guidance: treatment, ICD-10-CM titles, ICD-11, law, epidemiology not in the text, exam strategy, Philippine context, other chapters' criteria (should say "(Ch N)"), Section I material ("(Section I, p. N)"), app arithmetic/counts, DSM-5 → DSM-5-TR comparison boxes. Exam callouts in the guide end with "(app guidance)".
   - **Treatment and other outside claims** (mostly in clinical-chNN.js `tx` blocks, guide treatment bridges, pearls): verify each concrete claim with WebSearch (mode "standard") against a guideline, label or review (FDA label, NICE, APA practice guideline, Cochrane, major review). Specifically check any "FDA-approved", "first-line", "only approved", dosing, "evidence shows" wording. If you cannot verify it quickly, either trim it to what you can source or relabel it "app guidance; not verified". Record the source URL in your finding. Do not add new claims.
5. **Style**: 12+ word runs copied from the manual (run the ngram command below; official names, code lists, ICD titles, the manual's own lists of related disorders and recording examples are exempt; reword prose hits), bold on the topic instead of the answer in high yield, a keyed choice systematically the longest option, an "(app guidance)" tag inside a choice, mnemonics in guide not matching mnemonics.js, broken self-harm wording rules.

## Fixed rules (do not "fix" these into something else)
- Codes: ICD-10-CM as updated; post-publication changes go in labeled `update` boxes. For codes whose history was not pulled individually, wording is "no change was found for the codes checked; confirm against the official tabular list", never "unchanged". Use codes.md for any code verdict.
- Self-harm wording: clinical, at the manual's level of generality; never lethality, dose, technique, location beyond "forearm and thighs", or severity markers such as "needed emergency care". Prefer "began a self-poisoning attempt" to naming the agent.
- Philippine crisis line, the one full string to use wherever a crisis line appears: "NCMH Crisis Hotline 1553 (toll-free from landlines) or 1800-1888-1553; 0919-057-1553 (Smart/TNT); 0917-899-8727 and 0966-351-4518 (Globe/TM); confirm before giving out." Hopeline could not be verified: remove it if listed.
- Card `id`s drive spaced repetition: NEVER rename or delete ids. Do not change file structure or field names.
- Keep plain clear English. Keep the manual's hedges.
- In `drills.js` dxline items the app does not shuffle: keep answer indices varied.
- Known lessons from other chapters' checks: schizotypal PD's criteria and text are in Chapter 18 (criteria p. 744, "(premorbid)" note p. 745); Chapter 2 only lists it (p. 104). Section II PD pages: general criteria 734, under-18 one-year rule 736, paranoid 737, schizoid 741, antisocial 748, borderline 752, histrionic 757, narcissistic 760, avoidant 764, dependent 768, OCPD 771, other specified/unspecified 778. Caffeine withdrawal needs three or more symptoms (pp. 571–572). Hallucinogen, phencyclidine and inhalant use disorders have 10 criteria, not 11. The psychosis severity dimensions: the criteria text names five primary symptoms; the Classification footnote (p. xxix) lists eight. The F31.89 "example 2" is on p. 168. Section III proposed sets are not official diagnoses. Earlier checks found the commonest finding is a dropped hedge, then wrong pages.
- Ch 18 specifically: its treatment bridge was flagged as carrying unverified therapy names (TFP, schema therapy, GPM and similar) and an "FDA-approved" claim. Verify or relabel each.

## Commands (run from /home/claude/dsmvapp)
- Parse check after any edit (single -e): `node -e 'global.window={};global.SP=window.SP={add(){},glossary:[]};SP.disorders=[];const vm=require("vm"),fs=require("fs");for(const f of process.argv.slice(1)){try{vm.runInThisContext(fs.readFileSync(f,"utf8"))}catch(e){console.log("ERR",f,e.message)}}console.log("parsed")' data/chNN/*.js data/db/*chNN.js data/helpers/chNN-*.js` (add globals if a file needs them; the point is no syntax error).
- Ngram: `python3 -I ../dsm-devtools/chapter-tools/ngram.py /home/claude/scratch/dsm/chNN.txt data/chNN/*.js data/db/*chNN.js data/helpers/chNN-*.js`
- Links: `CH=chNN node ../dsm-devtools/chapter-tools/check_links.js` should end "bad 0" (it may have been bad before you; do not make it worse).

## Findings file
Write /home/claude/scratch/findings/chNN-<scope>.md (scope = "main" or "vig"). One line per finding, grouped by category, in this form:
`- [file:id-or-line] WRONG|IMPRECISE|PAGE|UNLABELED|STYLE — what the app says → what the manual says (p. N) → proposed fix (short)`
End with a tally line: `TALLY wrong N, imprecise N, page N, unlabeled N, style N` and then `END OF FINDINGS`.
Be precise and conservative: only flag what you checked against the text. Do not flag style preferences. Then STOP and report the tally in your final message (two lines, no list). Do not edit repo files until the lead messages you to apply.

## When told to apply
Apply exactly the findings the lead approves (the lead may strike some). Edit with minimal changes, keep ids, re-run the parse check, ngram and check_links, then reply with one line: files changed, parse OK, ngram count before/after, links result. Do not commit.
