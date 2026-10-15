/*
 * What's new. Add a new entry at the top for every release, with the next id number.
 * Item types: "chapter", "feature", "correction", "update". Optional: `ch`, `href`, `link`.
 */
SP.changelog = [
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
