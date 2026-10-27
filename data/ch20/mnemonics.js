/* Chapter 20 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch20", "mnemonics", [
  {
    id: "m20-01", short: "F99 gate: DINO", name: "DINO: the four gates before F99", original: true, dx: "unspecified-mental-disorder", sec: "s20-unspecified",
    "for": "The four requirements for the plain residual categories, other specified and unspecified mental disorder (F99)",
    letters: [
      ["D", "Disorder", "It is a mental disorder: clinically significant distress or impairment in an important area of functioning"],
      ["I", "Ineligible for specific sets", "It meets criteria for no specific Section II mental disorder"],
      ["N", "No chapter residual fits", "It does not fit any chapter-specific other specified or unspecified category (e.g., unspecified psychotic, other specified dissociative)"],
      ["O", "Only option", "No other mental disorder diagnosis applies (e.g., adjustment disorder)"]
    ],
    caveat: "DSM check: **all four** must hold (p. 803). If there is no distress or impairment after evaluation, the answer is **Z03.89 No diagnosis or condition**, not F99 (p. 805)."
  },
  {
    id: "m20-02", short: "Body before brain", name: "Body code first, then the F code", original: true, dx: "other-specified-mental-amc", sec: "s20-coding",
    "for": "Recording F06.8 and F09: order and wording",
    letters: [
      ["B", "Body code first", "The medical condition's code is listed immediately before F06.8 or F09 (e.g., B20 HIV disease; G40.209 complex partial seizures)"],
      ["N", "Name the condition", "Replace the words 'another medical condition' with the actual condition"],
      ["S", "Symptom phrase only for F06.8", "Other specified adds the manifestation (e.g., dissociative symptoms); F09 adds none"]
    ],
    caveat: "DSM check: G40.209 complex partial seizures, F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms (p. 804); the F09 version ends after the condition name (p. 805). Under Section I (pp. 23–24), when the disorder due to the medical condition is the principal diagnosis, it is the **second** line listed."
  },
  {
    id: "m20-03", short: "Say it or skip it", name: "Specified = Say why; Unspecified = Unsaid", original: true, dx: "other-specified-mental-disorder", sec: "s20-other-specified",
    "for": "Choosing between other specified and unspecified, in this chapter and throughout DSM-5-TR",
    letters: [
      ["S", "Specified = Say why", "The clinician chooses to write the reason criteria are not met, after the category name"],
      ["U", "Unspecified = Unsaid", "The clinician chooses not to give the reason, including when information is too thin (emergency room)"]
    ],
    caveat: "DSM check: the choice is the **clinician's**, not a matter of severity or duration (p. 803; Section I, p. 23). Both plain categories share **F99**; the medical pair is **F06.8** (specified) vs **F09** (unspecified) (pp. 803–805)."
  },
  {
    id: "m20-04", short: "Ladder: Specific, Medical, Chapter, Last", name: "Specific, then Medical cause, then Chapter residual, then Last resort", original: true, dx: "unspecified-mental-amc", sec: "s20-choose",
    "for": "Order of search before using any Chapter 20 code (app guidance)",
    letters: [
      ["S", "Specific disorder", "Try every specific criteria set first, including delirium"],
      ["M", "Medical cause", "If a medical condition directly causes the symptoms: the specific 'due to another medical condition' disorder if one fits, otherwise F06.8 (reason stated) or F09, with the medical condition coded first"],
      ["C", "Chapter residual", "Not medically caused: the other specified or unspecified category of the chapter that matches the main symptom cluster"],
      ["L", "Last resort", "Only then F99 (other specified or unspecified mental disorder); if evaluation finds no disorder at all, Z03.89"]
    ],
    caveat: "DSM check: F06.8 and F09 apply only when no specific 'due to another medical condition' disorder is met, and F99 only when no chapter-specific residual fits (p. 803). The ladder order is app guidance and matches the study guide and the residual-category helper."
  }
]);
