/* Chapter 11 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch11", "mnemonics", [
  {
    id: "m11-01", short: "Urine at 5, stool at 4", name: "Pee 5, Poo 4", original: true, dx: "enuresis", sec: "s11-map",
    "for": "Minimum developmental ages for the elimination disorders",
    letters: [
      ["5", "Enuresis (urine)", "Chronological age at least 5, or equivalent developmental level"],
      ["4", "Encopresis (feces)", "Chronological age at least 4, or equivalent developmental level"]
    ],
    caveat: "Use **mental age** in developmental delay: a 7-year-old with a mental age of 4 can have encopresis but not yet enuresis."
  },
  {
    id: "m11-02", short: "Two a week, one a month", name: "2-W, 1-M, 3-M", original: true, dx: "encopresis", sec: "s11-map",
    "for": "Frequency and duration for enuresis and encopresis",
    letters: [
      ["2-W", "Enuresis: twice a week", "For at least 3 consecutive months, or distress or impairment instead"],
      ["1-M", "Encopresis: once a month", "No distress-or-impairment alternative"],
      ["3-M", "Both: 3 months", "The shared duration"]
    ],
    caveat: "Enuresis can be met by **distress or impairment** in place of the frequency rule; encopresis cannot."
  },
  {
    id: "m11-03", short: "Enuresis criteria", name: "WET-5", original: true, dx: "enuresis", sec: "s11-enuresis-criteria",
    "for": "Enuresis: Criteria A–D",
    letters: [
      ["W", "Wetting of bed or clothes", "Repeated, involuntary or intentional (A)"],
      ["E", "Every week twice, or effects", "At least twice weekly for 3 consecutive months, or distress or impairment (B)"],
      ["T", "Too medical? Toxic?", "Not due to a substance (diuretic, antipsychotic) or medical condition (diabetes, spina bifida, seizures) (D)"],
      ["5", "Five years old", "Or equivalent developmental level (C)"]
    ],
    caveat: "Specify **nocturnal only**, **diurnal only**, or **nocturnal and diurnal**. Code **F98.0**."
  },
  {
    id: "m11-04", short: "Encopresis subtypes", name: "Hard and leaky vs soft and placed", original: true, dx: "encopresis", sec: "s11-encopresis-subtypes",
    "for": "Telling the two encopresis subtypes apart",
    letters: [
      ["Hard", "With constipation and overflow", "Large infrequent stools, palpable mass or impaction, poorly formed leakage; resolves with treatment of constipation"],
      ["Soft", "Without constipation and overflow", "Normal stool, intermittent soiling, sometimes in a prominent place; ODD, conduct disorder, enuresis"]
    ],
    caveat: "Stool in the constipation subtype is **characteristically, not invariably** poorly formed, and overflow can be **liquid**. Transit studies: **retained** markers versus **prompt** evacuation."
  }
]);
