/* Chapter 2 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch02", "mnemonics", [
  {
    id: "m2-01", short: "2 of 5 for 1 month; at least one of H, D or S", name: "HD-SB Network", dx: "schizophrenia", sec: "s2-scz-criteria",
    "for": "Schizophrenia Criterion A: the five psychotic symptoms",
    letters: [
      ["H", "Hallucinations", "Perception-like experiences without a stimulus, in a clear sensorium"],
      ["D", "Delusions", "Fixed beliefs not changed by conflicting evidence"],
      ["S", "Speech, disorganized", "Frequent derailment or incoherence"],
      ["B", "Behavior, grossly disorganized or catatonic", ""],
      ["N", "Negative symptoms", "The 5 A’s; Criterion A5 names diminished emotional expression or avolition"]
    ],
    caveat: "Two or more for a significant portion of **1 month** (less if successfully treated), and **at least one must be H, D or S**. Disorganized behavior plus negative symptoms alone do not meet Criterion A."
  },
  {
    id: "m2-02", short: "Criterion A5 names diminished expression or avolition", name: "The 5 A’s", dx: "schizophrenia", sec: "s2-negative",
    "for": "Negative symptoms",
    letters: [
      ["A", "Affect, blunted", "Diminished emotional expression: face, eye contact, prosody, gestures"],
      ["A", "Alogia", "Diminished speech output"],
      ["A", "Avolition", "Less self-initiated, purposeful activity"],
      ["A", "Anhedonia", "Less pleasure from positive stimuli, or anticipating it"],
      ["A", "Asociality", "Apparent lack of interest in social interaction"]
    ],
    caveat: "Criterion A5 names only **diminished emotional expression** and **avolition**; all five make up the negative symptom domain. Rule out secondary causes first: depression, medication side effects, demoralization, lack of stimulation."
  },
  {
    id: "m2-03", short: "Delusional disorder ≥1 month; schizoaffective ≥2 weeks of psychosis without mood", name: "1 day, 1 month, 6 months", original: true, dx: "schizophreniform-disorder", sec: "s2-schizophreniform",
    "for": "The psychotic disorder time ladder",
    letters: [
      ["1 d", "Brief psychotic disorder", "At least 1 day but less than 1 month, then a full return to baseline"],
      ["1 mo", "Schizophreniform disorder", "At least 1 month but less than 6 months, including prodromal and residual phases"],
      ["6 mo", "Schizophrenia", "At least 6 months, including at least 1 month of active-phase symptoms"]
    ],
    caveat: "Two more numbers to pair with it: **delusional disorder** needs delusions for **≥1 month** with no upper limit, and **schizoaffective disorder** needs **≥2 weeks** of psychosis without a major mood episode."
  }
]);
