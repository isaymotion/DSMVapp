/*
 * What's new. Add a new entry at the top for every release, with the next id number.
 * Item types: "chapter", "feature", "correction", "update". Optional: `ch`, `href`, `link`.
 */
SP.changelog = [
  {
    id: 7,
    date: "2026-10-21",
    title: "Mnemonics PDFs",
    summary: "Print or share the mnemonics in three layouts, and add them to any chapter’s high-yield PDF.",
    items: [
      { type: "feature", text: "Mnemonics PDF: a study sheet with every detail and DSM check, a fill-in worksheet with an answer key at the end, or a one-page pocket card. All chapters or one, A4 or Letter.", href: "#/mnemonics/pdf", link: "Create a mnemonics PDF" },
      { type: "feature", text: "Chapter high-yield PDFs can now end with the chapter’s mnemonics (on by default; in the worksheet version, each word becomes a blank).", href: "#/c/ch04/handout", link: "Chapter 4 PDF" }
    ]
  },
  {
    id: 6,
    date: "2026-10-21",
    title: "Mnemonics, with a spell-it-out drill",
    summary: "A Mnemonics page in the Library and a Mnemonics deck in each chapter, on the same review schedule as the flashcards.",
    items: [
      { type: "feature", text: "Mnemonics page: every mnemonic letter by letter, with a “DSM check” that says where it differs from the criteria. Filter by chapter or search.", href: "#/mnemonics", link: "Open Mnemonics" },
      { type: "feature", text: "Spell-it-out drill: see the letters, say each word, tap to check, then rate yourself. Mnemonics come back in Daily review and Today’s 10 minutes.", href: "#/mnemonics/drill", link: "Start the drill" },
      { type: "chapter", ch: "ch02", text: "Chapter 2: HD-SB Network (Criterion A), the 5 A’s of negative symptoms, and 1 day, 1 month, 6 months.", href: "#/c/ch02/cards/mnemonics", link: "Chapter 2 mnemonics" },
      { type: "chapter", ch: "ch03", text: "Chapter 3: DIGFAST, Hypo 4 Mania 7, and PHI makes it mania.", href: "#/c/ch03/cards/mnemonics", link: "Chapter 3 mnemonics" },
      { type: "chapter", ch: "ch04", text: "Chapter 4: SIGECAPS, HE’S 2 SAD, R + HEAL (atypical features), DIP (what doesn’t count toward mixed features) and the DMDD numbers.", href: "#/c/ch04/cards/mnemonics", link: "Chapter 4 mnemonics" }
    ]
  },
  {
    id: 5,
    date: "2026-10-21",
    title: "Practice pack for Chapter 4, and a new “Start from the complaint” hub",
    summary: "Board vignettes, write-the-diagnosis and criteria-counting drills, exam traps, interview questions and treatment bridges, piloted on Chapter 4.",
    items: [
      { type: "feature", ch: "ch04", text: "25 board vignettes: longer cases, seven in two parts, with an explanation for every answer choice. They join the exam, daily review, mistakes and teaching mode.", href: "#/c/ch04/cards/vignettes", link: "Open the vignettes" },
      { type: "feature", ch: "ch04", text: "Practice drills: 11 “Write the diagnosis” cases (diagnosis, specifiers and code in recording order) and 10 “Count the criteria” cases.", href: "#/c/ch04/practice", link: "Open the drills" },
      { type: "feature", ch: "ch04", text: "16 exam traps, each with the rule that beats it: in Practice drills (with rules hidden), at the end of the study guide and in high yield.", href: "#/c/ch04/practice/traps", link: "See the traps" },
      { type: "feature", ch: "ch04", text: "Disorder pages now have “How to ask it” interview questions for each criterion and a treatment bridge, labeled as outside the DSM, that links to the Stahl Study Companion.", href: "#/dx/mdd", link: "Major depressive disorder" },
      { type: "feature", text: "Start from the complaint: 14 presenting complaints (low mood, irritable child, after childbirth, suicidal thoughts and more) with the diagnoses to consider across chapters, first questions and must-not-miss causes.", href: "#/complaints", link: "Open the hub" },
      { type: "feature", text: "Teaching mode: new “Board vignettes” and “Exam traps” slide types and a “Vignettes and traps” preset.", href: "#/teach", link: "Teaching mode" }
    ]
  },
  {
    id: 4,
    date: "2026-10-21",
    title: "New study tools: daily session, progress, time drill, notes, listen mode",
    summary: "Seven new ways to study every chapter, built from the content that is already in the app.",
    items: [
      { type: "feature", text: "Today’s 10 minutes: due flashcards, three board questions and five time rules in one short daily session, with a study streak.", href: "#/today", link: "Start today’s session" },
      { type: "feature", text: "My progress: accuracy by chapter and topic (weakest first), a 14-day activity chart, “falsely confident” answers, and a weak-spot drill for the whole app, a chapter or a single topic.", href: "#/progress", link: "Open My progress" },
      { type: "feature", text: "“How sure?” on every card: tap Guess, Unsure or Sure before you answer. Sure-but-wrong and lucky guesses feed the weak-spot drill. You can turn it off in My progress.", href: "#/progress", link: "Settings" },
      { type: "feature", text: "Time-rule drill: a 60-second sprint or 10 untimed questions on every duration rule, with your best score saved.", href: "#/time-drill", link: "Try the drill" },
      { type: "feature", text: "Notes and highlights in the study guides: select a sentence to highlight it, or tap the pencil beside a section title to write a note. All are listed on one page and included in progress backups.", href: "#/notes", link: "My notes" },
      { type: "feature", text: "Listen mode: high yield and study guides read aloud by your device’s voice, with speed control. On an iPhone, keep the screen on while listening." },
      { type: "feature", text: "One-page summary for each chapter: every diagnosis with code, core picture, time rule and main exclusion, designed to print on a single sheet.", href: "#/c/ch04/summary", link: "Chapter 4 summary" },
      { type: "feature", text: "Teaching mode: a “Show of hands” scoring option that tallies votes for each answer and shows the room’s spread, plus discussion prompts after every board question and vignette.", href: "#/teach", link: "Teaching mode" }
    ]
  },
  {
    id: 3,
    date: "2026-10-15",
    title: "Chapter 4 added: Depressive Disorders",
    summary: "The full depressive disorders chapter with two new diagnostic helpers, eight new disorder library entries and a depressive time ladder.",
    items: [
      { type: "chapter", ch: "ch04", text: "Chapter 4 study guide: 26 sections on DMDD, major depressive disorder (criteria, full coding table, symptom-by-symptom features, course, risk and suicide), grief and its look-alikes, persistent depressive disorder and its course specifiers, PMDD, substance- and medically caused depression, the other specified presentations, every specifier, and a step-by-step approach.", href: "#/c/ch04/guide", link: "Open the guide" },
      { type: "chapter", ch: "ch04", text: "High yield, criteria, differential and specifier/course flashcards, and 44 board questions.", href: "#/c/ch04/high-yield", link: "High yield" },
      { type: "feature", ch: "ch04", text: "New diagnostic helpers: “Which depressive disorder?” and “Grief, depression or something else?”", href: "#/helpers", link: "Open the helpers" },
      { type: "feature", ch: "ch04", text: "Disorder library: DMDD, MDD, persistent depressive disorder, PMDD, substance-induced, due to another medical condition, other specified and unspecified depressive disorder, with six new compare presets and a depressive time ladder.", href: "#/dx", link: "Open the library" },
      { type: "update", text: "Glossary: 47 new depressive terms, tap-to-define everywhere. The bipolar helper now links to the depressive helper." }
    ]
  },
  {
    id: 2,
    date: "2026-10-15",
    title: "Chapter 3 added: Bipolar and Related Disorders",
    summary: "The full bipolar chapter with two new diagnostic helpers, eight new disorder library entries and a bipolar time ladder.",
    items: [
      { type: "chapter", ch: "ch03", text: "Chapter 3 study guide: 23 sections on manic, hypomanic and major depressive episodes, treatment-emergent mania, bipolar I and II (with full coding tables), cyclothymic disorder, substance and medical causes, the other specified presentations, every specifier, and a step-by-step diagnostic approach.", href: "#/c/ch03/guide", link: "Open the guide" },
      { type: "chapter", ch: "ch03", text: "High yield, criteria, differential and specifier/course flashcards, and 44 board questions.", href: "#/c/ch03/high-yield", link: "High yield" },
      { type: "feature", ch: "ch03", text: "New diagnostic helpers: “Manic, hypomanic or neither?” and “Which bipolar disorder?”", href: "#/helpers", link: "Open the helpers" },
      { type: "feature", ch: "ch03", text: "Disorder library: bipolar I, bipolar II, cyclothymic, substance-induced, due to another medical condition, other specified, unspecified bipolar and unspecified mood disorder, with new compare presets and a bipolar time ladder.", href: "#/dx", link: "Open the library" },
      { type: "update", text: "Glossary: 45 new bipolar terms, tap-to-define everywhere." }
    ]
  },
  {
    id: 1,
    date: "2026-10-15",
    title: "First release: Chapter 2, Schizophrenia Spectrum and Other Psychotic Disorders",
    summary: "The app opens with the full psychotic disorders chapter, a disorder library, diagnostic helpers, and the study, review and teaching tools from the companion apps, in a maroon and dark orange theme.",
    items: [
      { type: "chapter", ch: "ch02", text: "Chapter 2 study guide: 24 sections across the five psychotic domains, schizotypal PD, delusional, brief psychotic, schizophreniform, schizophrenia and schizoaffective disorders, substance and medical causes, catatonia, specifiers and a step-by-step diagnostic approach, with page references, criteria boxes, time ladders and clinical vignettes.", href: "#/c/ch02/guide", link: "Open the guide" },
      { type: "chapter", ch: "ch02", text: "High yield (95 points), criteria, differential and specifier/course flashcards, and 44 board questions.", href: "#/c/ch02/high-yield", link: "High yield" },
      { type: "feature", text: "Diagnostic helpers: “Which psychotic disorder?” and “Is it catatonia, and which kind?”, step-by-step decision trees with the reasoning shown. A new helper comes with each chapter.", href: "#/helpers", link: "Open the helpers" },
      { type: "feature", text: "Disorder library with 13 entries, compare disorders, time criteria and ICD-10-CM code pages.", href: "#/dx", link: "Open the library" },
      { type: "feature", text: "Tap-to-define glossary, bookmarks for every guide section, daily review with spaced repetition, board-style exam, mistakes, teaching mode with “Name that disorder,” printable high-yield PDFs and progress backup." },
      { type: "feature", text: "☰ menu in the upper left on every screen size: all 22 chapters, study tools, the library and the educator pages." }
    ]
  }
];
