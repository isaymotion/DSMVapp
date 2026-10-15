/*
 * What's new. Add a new entry at the top for every release, with the next id number.
 * Item types: "chapter", "feature", "correction", "update". Optional: `ch`, `href`, `link`.
 */
SP.changelog = [
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
