/* Chapter 1 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch01", "mnemonics", [
  {
    id: "m1-01", short: "IDD adaptive domains", name: "CSP: Conceptual, Social, Practical", original: true, dx: "idd", sec: "s1-idd-criteria",
    "for": "The three adaptive domains that set IDD severity",
    letters: [
      ["C", "Conceptual", "Memory, language, reading, writing, math reasoning, judgment in new situations"],
      ["S", "Social", "Empathy, awareness of others, communication, friendships, social judgment"],
      ["P", "Practical", "Personal care, money, job duties, recreation, organizing tasks"]
    ],
    caveat: "DSM check: severity comes from **adaptive functioning**, not IQ; Criterion B needs at least **one** domain needing ongoing support."
  },
  {
    id: "m1-02", short: "ASD criteria A and B", name: "RNR + SIRS (3 of 3, 2 of 4)", original: true, dx: "asd", sec: "s1-asd-criteria",
    "for": "Autism spectrum disorder: all three A deficits and two of four B features",
    letters: [
      ["R", "Reciprocity (A1)", "Social-emotional back-and-forth"],
      ["N", "Nonverbal (A2)", "Eye contact, gestures, facial expression, integration"],
      ["R", "Relationships (A3)", "Developing, maintaining, understanding them"],
      ["S", "Stereotyped (B1)", "Movements, object use, speech (echolalia)"],
      ["I", "Insistence on sameness (B2)", "Routines, rituals, distress at change"],
      ["R", "Restricted interests (B3)", "Abnormal in intensity or focus"],
      ["S", "Sensory (B4)", "Hyper- or hyporeactivity, unusual sensory interests"]
    ],
    caveat: "DSM check: A needs **all three**, B needs **two of four**; both can be met **by history**, but impairment must be **current**."
  },
  {
    id: "m1-03", short: "ADHD numbers", name: "6-6-12-2 (5 at 17)", original: true, dx: "adhd", sec: "s1-adhd-criteria",
    "for": "The core ADHD thresholds",
    letters: [
      ["6", "Six symptoms", "In inattention and/or hyperactivity-impulsivity"],
      ["6", "Six months", "Minimum duration"],
      ["12", "Before age 12", "Several symptoms"],
      ["2", "Two settings", "Several symptoms in two or more"],
      ["5", "Five from 17", "Adolescents 17 and older and adults need five"]
    ],
    caveat: "DSM check: the presentation (F90.0, F90.1, F90.2) is based on the **past 6 months**; symptoms must not be **solely** oppositional."
  },
  {
    id: "m1-04", short: "ASD specifiers", name: "SILAC", original: true, dx: "asd", sec: "s1-asd-criteria",
    "for": "The specifiers recorded with autism spectrum disorder",
    letters: [
      ["S", "Severity", "Levels 1–3, separately for social communication and repetitive behavior"],
      ["I", "Intellectual impairment", "With or without"],
      ["L", "Language impairment", "With or without; record the current verbal level"],
      ["A", "Associated with…", "A genetic, medical or environmental factor, or a neurodevelopmental, mental or behavioral problem"],
      ["C", "Catatonia", "Add F06.1"]
    ],
    caveat: "DSM check: “associated with” records **clinical relevance**, not cause; code the associated medical condition too."
  },
  {
    id: "m1-05", short: "Social (pragmatic) communication deficits", name: "PACT", original: true, dx: "spcd", sec: "s1-spcd",
    "for": "The four Criterion A deficits of social (pragmatic) communication disorder",
    letters: [
      ["P", "Purpose", "Using communication for social purposes (greeting, sharing)"],
      ["A", "Adapt", "Changing style to context and listener"],
      ["C", "Conversation rules", "Turn-taking, rephrasing, storytelling"],
      ["T", "Take the hint", "Understanding inference, idioms, humor, metaphor"]
    ],
    caveat: "DSM check: **all four** are required, and any current or past restricted, repetitive behavior means **ASD** instead."
  },
  {
    id: "m1-06", short: "Language disorder components", name: "VSD: Vocabulary, Sentences, Discourse", original: true, dx: "language-disorder", sec: "s1-language",
    "for": "The three deficits in language disorder Criterion A",
    letters: [
      ["V", "Vocabulary", "Reduced word knowledge and use"],
      ["S", "Sentence structure", "Grammar and word endings"],
      ["D", "Discourse", "Connecting sentences to explain, narrate or converse"]
    ],
    caveat: "DSM check: exclude **hearing loss** first; a verbal–nonverbal discrepancy is **not** required."
  },
  {
    id: "m1-07", short: "Specific learning disorder numbers", name: "6 · 1.5 · 17", original: true, dx: "sld", sec: "s1-sld-criteria",
    "for": "The key thresholds for specific learning disorder",
    letters: [
      ["6", "Six months", "Persisting despite targeted intervention"],
      ["1.5", "1.5 SD", "Below the mean (standard score ≤78) for greatest certainty"],
      ["17", "Age 17", "A documented history can replace standardized testing"]
    ],
    caveat: "DSM check: 1.0 SD may be used with **converging evidence**; code each impaired domain separately (**F81.0, F81.81, F81.2**)."
  },
  {
    id: "m1-08", short: "Stereotypies versus tics", name: "Stereotypies are EaRly, Rhythmic, Fixed, Fun", original: true, dx: "stereotypic-movement", sec: "s1-stereotypic",
    "for": "Telling motor stereotypies from tics",
    letters: [
      ["E", "Early", "Usually before age 3 (tics 4–6)"],
      ["R", "Rhythmic", "And prolonged; tics are brief and random"],
      ["F", "Fixed", "Same pattern; tics change over time"],
      ["F", "Fun", "Ego-syntonic and no premonitory urge; tics are usually unwelcome and preceded by an urge"]
    ],
    caveat: "DSM check: **both** stereotypies and tics are reduced by distraction, so distraction does not separate them."
  },
  {
    id: "m1-09", short: "Tic disorders", name: "Tourette’s = Two kinds, Twelve months, Teens", original: true, dx: "tourette", sec: "s1-tic-criteria",
    "for": "Tourette’s disorder criteria and the tic hierarchy",
    letters: [
      ["Two kinds", "Motor and vocal", "Multiple motor plus at least one vocal, not necessarily together"],
      ["Twelve months", "More than 1 year", "Since the first tic, through tic-free gaps"],
      ["Teens", "Onset before 18", "Later onset: other specified tic disorder"]
    ],
    caveat: "DSM check: hierarchy **Tourette’s → persistent → provisional**; once higher criteria are met, a lower diagnosis is never given."
  },
  {
    id: "m1-10", short: "Ages that matter", name: "3 · 5 · 12 · 17 · 18", original: true, dx: "adhd", sec: "s1-synthesis",
    "for": "The age rules across the chapter",
    letters: [
      ["3", "Stereotypies", "Usually begin before 3"],
      ["5", "Global delay vs unspecified IDD", "Under 5: global developmental delay; over 5: unspecified IDD. DCD is rarely diagnosed before 5"],
      ["12", "ADHD", "Several symptoms before 12"],
      ["17", "ADHD and SLD", "Five symptoms suffice; history may replace testing"],
      ["18", "Tics", "Onset before 18"]
    ],
    caveat: "DSM check: autism is usually recognized at **12–24 months** and stuttering begins by **6** in 80%–90%."
  }
]);
