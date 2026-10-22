/* Chapter 8 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch08", "mnemonics", [
  {
    id: "m8-01", short: "No duration criterion", name: "SPLITS", original: true, dx: "did", sec: "s8-did-criteria",
    "for": "Dissociative identity disorder: the criteria",
    letters: [
      ["S", "States, two or more", "Distinct personality states with discontinuity of self and agency (A)"],
      ["P", "Possession counts", "Some cultures describe the identities as possession (A)"],
      ["L", "Lost time", "Recurrent gaps in recall of everyday events, personal information or trauma (B)"],
      ["I", "Impairment", "Clinically significant distress or impairment (C)"],
      ["T", "Tradition and toys excluded", "Not accepted cultural or religious practice; in children, not imaginary playmates (D)"],
      ["S", "Substances and seizures excluded", "Not alcohol blackouts or complex partial seizures (E)"]
    ],
    caveat: "Both **identity states (A)** and **recurrent amnesia (B)** are required. Identity alterations or possession **without amnesia** are other specified dissociative disorder."
  },
  {
    id: "m8-02", short: "Most common: localized and selective", name: "Let Some Stuff Go, Continuously", original: true, dx: "dissociative-amnesia", sec: "s8-amnesia-criteria",
    "for": "Dissociative amnesia: the five forms",
    letters: [
      ["L", "Localized", "A circumscribed period of time"],
      ["S", "Selective", "Some, but not all, events in a period"],
      ["S", "Systematized", "A category of information (a person, a place)"],
      ["G", "Generalized", "Most or all of life history, often identity; rare, acute, often with fugue"],
      ["C", "Continuous", "Anterograde: forgetting each new event"]
    ],
    caveat: "Code **F44.0**, or **F44.1** with dissociative fugue. Not diagnosed if due to substances, seizures, transient global amnesia or TBI, or better explained by DID, PTSD, acute stress disorder, somatic symptom disorder or a neurocognitive disorder."
  },
  {
    id: "m8-03", short: "Persistent or recurrent; distress or impairment", name: "DREAM", original: true, dx: "dpdr", sec: "s8-dpdr-criteria",
    "for": "Depersonalization/derealization disorder: the core experience",
    letters: [
      ["D", "Detached from self", "Depersonalization: outside observer of one’s thoughts, body or actions"],
      ["R", "Reality testing intact", "“It feels as if,” never conviction (Criterion B)"],
      ["E", "Emotional numbing", "Hypoemotionality: “I know I have feelings but don’t feel them”"],
      ["A", "Altered time and perception", "Time too fast or slow; macropsia, micropsia, flatness, muted sounds"],
      ["M", "Misty world", "Derealization: in a fog, dream or bubble, behind a glass wall"]
    ],
    caveat: "Not diagnosed if symptoms occur only during panic attacks, depression, PTSD, schizophrenia, another dissociative disorder or intoxication. Onset after **40** calls for a medical workup."
  },
  {
    id: "m8-04", short: "F44.89, with the reason recorded", name: "M-CAT", original: true, dx: "other-specified-dissociative", sec: "s8-other",
    "for": "Other specified dissociative disorder: the four named examples",
    letters: [
      ["M", "Mixed dissociative syndromes", "Identity disturbance or possession without dissociative amnesia"],
      ["C", "Coercive persuasion", "Identity change after brainwashing, cults, captivity or torture"],
      ["A", "Acute dissociative reactions", "To stressful events, typically less than 1 month, with micro-amnesias"],
      ["T", "Trance", "Profound unresponsiveness outside accepted cultural or religious practice"]
    ],
    caveat: "Use **unspecified dissociative disorder (F44.9)** when the reason is not given or information is insufficient."
  }
]);
