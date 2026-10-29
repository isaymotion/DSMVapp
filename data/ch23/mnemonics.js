/* Chapter 23 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable.
   Nothing in this chapter is a diagnosis: the measures guide inquiry and track change, and their scores go in the formulation and
   progress notes (app guidance). The forms are described, never reprinted; item counts are counted from the printed forms. */
SP.add("ch23", "mnemonics", [
  {
    id: "m23-01", short: "13 adult domains: Doctors Always Make Accurate Screens, So Patients Sleep; My Resident Dozes Past Sunrise", name: "Doctors Always Make Accurate Screens, So Patients Sleep; My Resident Dozes Past Sunrise: the 13 adult Level 1 domains in Table 1 order", original: true, dx: "level1-adult", sec: "s23-table1",
    "for": "The 13 domains of the adult self-rated Level 1 Cross-Cutting Symptom Measure, in the order of Table 1 (I to XIII)",
    letters: [
      ["D", "Depression", "I. Two questions (loss of interest, low mood); mild or greater; Level 2 PROMIS depression short form"],
      ["A", "Anger", "II. One question; mild or greater; Level 2 PROMIS anger short form"],
      ["M", "Mania", "III. Two questions; mild or greater; Level 2 ASRM"],
      ["A", "Anxiety", "IV. Three questions; mild or greater; Level 2 PROMIS anxiety short form"],
      ["S", "Somatic symptoms", "V. Two questions; mild or greater; Level 2 PHQ-15"],
      ["S", "Suicidal ideation", "VI. One question about thoughts of self-harm; slight or greater; no Level 2, ask directly"],
      ["P", "Psychosis", "VII. Two questions; slight or greater; no Level 2"],
      ["S", "Sleep problems", "VIII. One question; mild or greater; Level 2 PROMIS sleep disturbance short form"],
      ["M", "Memory", "IX. One question; mild or greater; no Level 2"],
      ["R", "Repetitive thoughts and behaviors", "X. Two questions; mild or greater; Level 2 FOCI severity scale"],
      ["D", "Dissociation", "XI. One question; mild or greater; no Level 2"],
      ["P", "Personality functioning", "XII. Two questions; mild or greater; no Level 2"],
      ["S", "Substance use", "XIII. Three questions (alcohol, tobacco, drugs or misused medicines); slight or greater; Level 2 adapted NIDA-Modified ASSIST"]
    ],
    caveat: "DSM check: pp. 843–844 (Table 1). **13 domains, 23 questions, past 2 weeks.** Five domains have **no Level 2 measure**: suicidal ideation, psychosis, memory, dissociation and personality functioning (p. 844). The parent/guardian form has a **different set of 12 domains** (adds inattention and irritability, drops memory, dissociation and personality functioning; p. 845). The app names the domains; it does not reprint the questions."
  },
  {
    id: "m23-02", short: "Slight Starts Probing: Substance use, Suicidal ideation, Psychosis", name: "Slight Starts Probing: the three adult Level 1 domains flagged at slight (1) or greater", original: true, dx: "level1-adult", sec: "s23-scoring-adult",
    "for": "The three adult Level 1 domains where a rating of slight (1) or greater, instead of mild (2) or greater, calls for further inquiry",
    letters: [
      ["S", "Substance use", "Any of the three substance questions rated slight or greater; Level 2 adapted NIDA-Modified ASSIST"],
      ["S", "Suicidal ideation", "The single question about thoughts of self-harm rated slight or greater; no Level 2, so assess directly the same day"],
      ["P", "Psychosis", "Either psychosis question rated slight or greater; no Level 2, so ask which experience was endorsed"]
    ],
    caveat: "DSM check: pp. 845–846 and Table 1 (p. 844). Every other adult domain uses **mild (2) or greater** on any item. On the **parent/guardian form the slight domains are inattention and psychosis** (p. 846), while the child substance and suicide items are **Yes/No/Don't Know**, with Yes or Don't Know prompting inquiry (pp. 845–846). A threshold is a cue to ask, not a diagnosis; clinical judgment guides decisions (p. 846)."
  },
  {
    id: "m23-03", short: "WHODAS: Uncle Gets Sick, Grandma Lends Pesos (6-5-4-5-8-8 = 36)", name: "Uncle Gets Sick, Grandma Lends Pesos: the six WHODAS 2.0 domains and their item counts", original: true, dx: "whodas", sec: "s23-whodas",
    "for": "The six domains of the 36-item self-administered WHODAS 2.0, in order, with the number of items in each",
    letters: [
      ["U", "Understanding and communicating (6)", "Scored as the cognition domain; the manual's example 18/6 = 3 comes from here"],
      ["G", "Getting around (5)", "Scored as the mobility domain"],
      ["S", "Self-care (4)", "Scored as the self-care domain"],
      ["G", "Getting along with people (5)", "Scored as the getting along domain"],
      ["L", "Life activities (8)", "Household (4) plus work or school (4); the work or school items are skipped if the person does not work or study"],
      ["P", "Participation in society (8)", "Scored as the participation domain"]
    ],
    caveat: "DSM check: pp. 842, 854–855; item counts are counted from the printed form (pp. 856–857, described). **Adults 18 and older, past 30 days, 36 items.** Simple score: sum of 1–5 ratings, **maximum 180**; IRT score: **0–100**; DSM-5-TR average scores: raw score divided by the number of items, read **1 none to 5 extreme** (pp. 854–855). With **10 or more items missing**, general scores may not help, but domains **75%–100% complete** can still be scored (p. 855). The app names the domains and counts only; the form is WHO copyright."
  },
  {
    id: "m23-04", short: "CRDPSS: Have Doctors Done A Neat Initial Dimensional Map?", name: "Have Doctors Done A Neat Initial Dimensional Map? The eight CRDPSS items in order", original: true, dx: "psychosis-severity-dimensions", sec: "s23-crdpss",
    "for": "The eight items of the Clinician-Rated Dimensions of Psychosis Symptom Severity, in the order of the form (I to VIII)",
    letters: [
      ["H", "Hallucinations", "I. Primary psychotic symptom"],
      ["D", "Delusions", "II. Primary psychotic symptom"],
      ["D", "Disorganized speech", "III. Primary psychotic symptom"],
      ["A", "Abnormal psychomotor behavior", "IV. Primary psychotic symptom; includes catatonia"],
      ["N", "Negative symptoms", "V. Primary psychotic symptom: restricted emotional expression or avolition"],
      ["I", "Impaired cognition", "VI. Added dimension, rated in SD bands below the mean expected for age and SES; predicts functioning and prognosis"],
      ["D", "Depression", "VII. Added dimension: flags co-occurring mood pathology"],
      ["M", "Mania", "VIII. Added dimension: flags co-occurring mood pathology"]
    ],
    caveat: "DSM check: pp. 851–853 and Ch 2, p. 109. **Clinician-rated, each item 0–4 (none, equivocal, mild, moderate, severe) at its most severe in the past 7 days**, with symptom-specific definitions for each level (p. 851). The **first five (H, D, D, A, N) are the primary symptoms** used for the Chapter 2 current severity specifier, which is optional: the diagnosis can be made without it (Ch 2, p. 109). Items are not summed into a diagnostic total. For the condensed levels, see the psychosis severity tool in Case tools."
  }
]);
