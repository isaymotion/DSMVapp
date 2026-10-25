# DSM-5-TR Study Companion

A chapter-by-chapter study app for psychiatry residents, built from the *Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision* (DSM-5-TR, 2022). It runs entirely in the browser, works offline after the first visit, and can be installed on iPhone, iPad and desktop.

**Live site:** https://isaymotion.github.io/DSMVapp/ (after GitHub Pages is switched on; see below)

## Chapters

The app follows the 22 chapters of Section II (Diagnostic Criteria and Codes), one chapter at a time.

| Chapter | Status |
| --- | --- |
| 2. Schizophrenia Spectrum and Other Psychotic Disorders | Ready |
| 3. Bipolar and Related Disorders | Ready |
| 4. Depressive Disorders | Ready |
| 5. Anxiety Disorders | Ready |
| 6. Obsessive-Compulsive and Related Disorders | Ready |
| 7. Trauma- and Stressor-Related Disorders | Ready |
| 8. Dissociative Disorders | Ready |
| 9. Somatic Symptom and Related Disorders | Ready |
| 16. Substance-Related and Addictive Disorders | Ready |
| 18. Personality Disorders | Ready |
| All other Section II chapters | Listed in the menu as “Soon” |

## What's in each chapter

- **Study guide**: the whole chapter reorganized for learning, in the app's own words, with DSM-5-TR page references on every section, criteria boxes, duration ladders, comparison tables, clinical pearls, exam tips, culture checks and clinical vignettes. Every section has a **bookmark** ribbon.
- **High yield**: the must-know facts. Switch on *Hide key facts* to turn every bold fact into a blank. Each chapter has a **printable PDF** (A4 or Letter, answer key or fill-in worksheet).
- **Flashcards** in three decks: **Criteria**, **Differential**, and **Specifiers & course**, with spaced repetition (*Again*, *Hard*, *Good*, *Easy*).
- **Board questions**: single-best-answer clinical vignettes with explanations. They feed the timed exam, the mistakes pile and teaching mode.
- **Glossary terms**: every term the chapter defines links automatically (dotted underline) and opens a tap-to-define popover.
- **Diagnostic helper**: a step-by-step decision tree for the chapter's look-alike diagnoses, with the reasoning trail shown (e.g., “Which psychotic disorder?”).
- **Disorder library entries**: one page per diagnosis, with **How to ask it** (plain-language interview questions per criterion) and a **Treatment bridge** (clearly labeled as outside the DSM, linking to the [Stahl Study Companion](https://isaymotion.github.io/Stahl/)).
- **Mnemonics** deck (`data/chNN/mnemonics.js`): each mnemonic letter by letter with a “DSM check” caveat, drilled with spaced repetition and collected on the Library’s Mnemonics page (`#/mnemonics`). `#/mnemonics/pdf` prints them as a study sheet, a fill-in worksheet with answer key, or a one-page pocket card; chapter high-yield PDFs can append the chapter’s mnemonics. Mark mnemonics written for the app with `original: true`.
- **Practice pack** (Chapters 2–9, 16 and 18): **Board vignettes** (longer cases, some in two parts, every option explained), **Practice drills** (*Write the diagnosis* with code and specifiers, *Count the criteria*) and **Exam traps** (also shown at the end of the guide and in high yield). Chapter entries in **Start from the complaint**.

## Across the app

- **☰ menu** in the upper left on every screen size: all chapters (keeping your current study mode), study tools, the reference library and the educator pages. On wide screens there is also a collapsible sidebar; on phones and tablets, bottom tabs (Home, Chapters, Review, Exam, Library).
- **Back and forward buttons** (also Alt+Left / Alt+Right) and **search** across chapters, cards, questions, disorders, helpers and glossary (press `/`).
- **Daily review**, **board-style exam** (timed or untimed, scored by topic), **mistakes**, **bookmarks**.
- **Today's 10 minutes**: due flashcards, three board questions and five time rules, with a study streak.
- **My progress**: accuracy by chapter and topic, a 14-day activity chart, “falsely confident” answers and a **weak-spot drill** (whole app, one chapter or one topic). Optional **“How sure?”** confidence chips on every card feed it.
- **Time-rule drill**: 60-second sprint or 10 untimed questions, generated from the time ladders and disorder library.
- **Notes and highlights** in the study guides (select text to highlight; pencil button for notes), listed at `#/notes`.
- **Listen mode** for high yield and study guides (device speech voice, speed control).
- **One-page summary** per chapter (`#/c/chNN/summary`), built from the disorder library and designed to print on one sheet.
- **Reference library**: Disorder library, Diagnostic helpers, Compare disorders (with classic look-alike presets), Time criteria, ICD-10-CM codes, Glossary, and DSM-5-TR changes & updates.
- **For educators**: teaching mode (full-screen high-yield blanks, cards, board questions, vignettes and **“Name that disorder”**, with countdown, two teams or show-of-hands voting, discussion prompts, flags and a review PDF), all high-yield as one PDF, and a *What's new* page.
- **Backup progress**: export and import the review schedule, mistakes, exams, bookmarks and settings (with undo).
- Maroon and dark orange theme to match the app icon. Dark by default, with a light theme on the theme button.

Progress is saved in the browser on each device under its own `dsm:v1:` keys, and the offline cache uses its own `dsm-companion-` names, so it does not clash with the other study apps on the same GitHub Pages site.

## Publish on GitHub Pages

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
3. After a minute the site is live at `https://isaymotion.github.io/DSMVapp/`.

There is no build step and no dependencies. To preview locally, run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Folder structure

```
index.html                 App shell (top bar with ☰ menu, sidebar, bottom tabs)
css/app.css                Styles (dark and light themes)
js/app.js                  Router, menu, study guide, high yield, flashcards and spaced repetition,
                           review, exam, mistakes, glossary, disorder library, compare, time criteria,
                           codes, diagnostic helpers, search, printing, teaching mode, backup
js/practice.js             Practice drills, exam traps, complaint hub, clinical extras merge
js/study.js                Study tools: today's session, progress and weak-spot drill, time-rule drill,
                           notes and highlights, listen mode, one-page summary (uses SP._app from app.js)
js/pdf.js, pdf-fonts.js    PDF generator for handouts
data/chapters.js           Chapter registry (all 22 Section II chapters; `ready: true` for those built)
data/chNN/                 Chapter content
  guide.js                 Study guide
  highyield.js             High-yield topics
  cards-criteria.js        Criteria deck
  cards-differential.js    Differential deck
  cards-clinical.js        Specifiers & course deck
  cards-cases.js           Board questions
  glossary.js              Terms defined in the chapter (tap-to-define)
data/db/disorders-chNN.js  Disorder library entries, compare presets and time ladders for the chapter
data/helpers/chNN-*.js     Diagnostic helper decision trees for the chapter
data/changelog.js          What's new entries
icons/                     App icons
manifest.webmanifest       Install metadata
sw.js                      Offline cache
```

## Adding a chapter

1. Create `data/chNN/` with the same seven files as `data/ch02/`.
2. In `data/chapters.js`, set the chapter's `ready: true` and add `files: SP.CHAPTER_FILES`.
3. Add `data/db/disorders-chNN.js` (library entries, compare presets, a time ladder) and `data/helpers/chNN-<name>.js` (the chapter's diagnostic helper), and list both in `SP.extraFiles`.
4. Practice pack: add `vignettes.js`, `drills.js` and `traps.js` to `data/chNN/`, switch the chapter to `files: SP.CHAPTER_FILES.concat(SP.PRACTICE_FILES)`, and add `data/db/clinical-chNN.js` (interview questions, treatment bridge, complaint-hub entries) to `SP.extraFiles`. See the comments at the top of `js/practice.js` and `data/db/clinical-ch04.js` for the formats.
5. Add an entry to the top of `data/changelog.js`, and change `VERSION` in `sw.js` so returning users get the new content.

### Content conventions

- `**bold**` and `*italic*` work in all text. In high-yield items, bold marks the fact that becomes a blank, so bold the answer, not the topic.
- Cross-references: `[[dx:schizophrenia]]`, `[[dx:delusional-disorder|delusional disorder]]`, `[[helper:psychosis|the psychosis helper]]`, `[[ch:ch02|Chapter 2]]`, `[[gl:avolition]]`, `[[page:c/ch02/guide/s2-catatonia|section 2.21]]`.
- Study guide block types: `p`, `h`, `list`, `defs`, `table`, `callout` (`pearl`, `exam`, `caution`, `analogy`, `mnemonic`, `key`, `culture`), `case`, `steps`, `flow`, `compare`, `timeline`, `criteria` (`items: [letter, text, [sub-items], note]`, `specifiers`, `code`, `pages`), `ladder` (duration bars on a 0–100 axis), `update` (`kind: "tr"` for DSM-5 → DSM-5-TR changes; otherwise a post-publication box with `year`, `title`, `text`, `source`).
- Diagnostic helpers: `nodes` with `q`, `help` and `options` (`label`, `to`, `note`); `to` is another node id or `r:<result>`; results have `dx`, `line`, `points`, `link: {ch, sec, label}` and optional `dxId`.
- Board questions use `choices` and a zero-based `answer` index, plus `why`; their `tag` is the topic used in exam scoring. Board vignettes add `stem`, `whyNot` (one line per choice), optional `then` (a second part with the same fields) and optional `discuss` prompts for teaching mode.
- `[[stahl:drugs/fluoxetine|fluoxetine]]` links into the Stahl Study Companion (opens in a new tab).
- Card `id`s are the key for each card's review schedule, so keep them stable when editing content.

## Attribution

App created by Isabella Navarro, MD. Latest version October 2026. isaymotion@gmail.com

An independent study aid built from the DSM-5-TR. Not affiliated with or endorsed by the American Psychiatric Association. Criteria are summarized in the app's own words with page references. Always confirm exact wording, specifiers and codes against the manual.
