/* Chapter 12 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch12", "mnemonics", [
  {
    id: "m12-01", short: "Insomnia 3-3-3", name: "Three ways, three nights, three months", original: true, dx: "insomnia", sec: "s12-insomnia-criteria",
    "for": "Insomnia disorder: core symptom, frequency and duration (Criteria A, C, D)",
    letters: [
      ["3", "Three ways to sleep badly (A)", "Trouble falling asleep, trouble staying asleep, or waking too early and unable to get back to sleep"],
      ["3", "Three nights a week (C)", "At least 3 nights per week"],
      ["3", "Three months (D)", "At least 3 months; also needs adequate opportunity for sleep (E) and distress or impairment (B)"]
    ],
    caveat: "DSM check: under 3 months but otherwise met = **other specified insomnia disorder** (short-term), G47.09. Code **F51.01**, then list any comorbid mental, medical or sleep disorder after it; no causal link has to be proven."
  },
  {
    id: "m12-02", short: "Hypersomnolence 7 and 9", name: "Slept 7, still sleepy; over 9, still tired", original: true, dx: "hypersomnolence", sec: "s12-hypersomnolence",
    "for": "Hypersomnolence disorder: Criterion A and the frequency rule",
    letters: [
      ["7", "At least 7 hours slept", "Excessive sleepiness despite a main sleep period of at least 7 hours"],
      ["L", "Lapses into sleep", "Repeated sleep periods or lapses within the same day (A1)"],
      ["9", "Over 9 hours, unrefreshing", "A main sleep of more than 9 hours a day that is nonrestorative (A2)"],
      ["I", "Inertia", "Hard to become fully awake after abrupt waking (A3); sleep inertia occurs in about 40%"],
      ["3×3", "3 times a week, 3 months", "Criterion B"]
    ],
    caveat: "DSM check: rule out **insufficient sleep** first (under 7 hours a night, weekend catch-up): try **10–14 days of sleep extension**. Cataplexy **never** occurs in hypersomnolence disorder."
  },
  {
    id: "m12-03", short: "Narcolepsy B criteria", name: "C-H-P: Cataplexy, Hypocretin, PSG", original: true, dx: "narcolepsy", sec: "s12-narcolepsy-criteria",
    "for": "Narcolepsy: Criterion A plus at least one of B1–B3, and how they set the type",
    letters: [
      ["A", "Attacks 3×/week for 3 months", "Irrepressible need to sleep, lapsing into sleep or napping within the same day"],
      ["C", "Cataplexy (B1)", "A few times a month: brief bilateral tone loss with laughter or joking; in children or within 6 months of onset, grimacing, jaw opening, tongue thrusting or global hypotonia"],
      ["H", "Hypocretin low (B2)", "CSF hypocretin-1 ≤ 110 pg/mL or ≤ one-third of normal, not during acute brain injury, inflammation or infection"],
      ["P", "PSG or MSLT (B3)", "Nocturnal REM latency ≤ 15 minutes, or MSLT mean sleep latency ≤ 8 minutes with ≥ 2 SOREMPs"]
    ],
    caveat: "DSM check: **C or H = type 1 (G47.411)**; **P alone** with no cataplexy and hypocretin normal or unmeasured = **type 2 (G47.419)**. Due to a medical condition (G47.421/G47.429): code the **medical condition first**."
  },
  {
    id: "m12-04", short: "MSLT numbers", name: "8 and 2 by day, 15 by night", original: true, dx: "narcolepsy", sec: "s12-narcolepsy-features",
    "for": "Cut-offs for a positive sleep study in narcolepsy",
    letters: [
      ["8", "Mean sleep latency ≤ 8 minutes", "Averaged over a 4- or 5-nap MSLT"],
      ["2", "Two or more SOREMPs", "REM sleep in at least two naps"],
      ["15", "Nocturnal REM latency ≤ 15 minutes", "A nocturnal SOREMP on overnight PSG; very specific (95%–97%) but only about half as sensitive (54%–57%) for type 1"]
    ],
    caveat: "DSM check: stop psychotropics and confirm adequate sleep (ideally **2 weeks** of diary or actigraphy) first. **Shift work, circadian disorders, severe OSA, drugs and insufficient sleep** can give false-positive SOREMPs, and MSLT test-retest reliability is poor for **type 2**."
  },
  {
    id: "m12-05", short: "OSA thresholds", name: "5 with symptoms, 15 without; 15–30 cut-offs", original: true, dx: "osa", sec: "s12-osa-criteria",
    "for": "Obstructive sleep apnea hypopnea: diagnosis and severity by apnea hypopnea index",
    letters: [
      ["5", "AHI ≥ 5 plus a symptom (A1)", "Snoring, snorting or gasping, breathing pauses; or daytime sleepiness, fatigue or unrefreshing sleep not explained otherwise"],
      ["15", "AHI ≥ 15 with or without symptoms (A2)", "No symptoms needed"],
      ["<15", "Mild", "AHI under 15"],
      ["15–30", "Moderate", "AHI 15 to 30"],
      [">30", "Severe", "AHI over 30"]
    ],
    caveat: "DSM check: severity rises regardless of AHI with **> 10% of sleep below 90% saturation**, **arousal index > 30** or **N3 < 5%**. Children: an obstructive AHI of **≥ 1** is abnormal. Code **G47.33**."
  },
  {
    id: "m12-06", short: "Central sleep apnea subtypes", name: "I-C-O: Idiopathic, Cheyne-Stokes, Opioid", original: true, dx: "csa", sec: "s12-csa",
    "for": "Central sleep apnea: the three coded subtypes (all need ≥ 5 central apneas per hour)",
    letters: [
      ["I", "Idiopathic (G47.31)", "Variable breathing effort with no airway obstruction; high loop gain"],
      ["C", "Cheyne-Stokes breathing (R06.3)", "Crescendo-decrescendo tidal volume, cycle about 60 seconds; heart failure, stroke, renal failure"],
      ["O", "Opioid use (G47.37)", "Opioid effects on medullary rhythm generators; awake pCO2 may be raised"]
    ],
    caveat: "DSM check: central events must be **> 50%** of all respiratory events to call it central. For G47.37, code **F11.10 or F11.20 first** only if an opioid use disorder is present; otherwise G47.37 alone."
  },
  {
    id: "m12-07", short: "Circadian types and codes", name: "D-A-I-N-S: 21, 22, 23, 24, 26", original: true, dx: "circadian-delayed", sec: "s12-circadian-criteria",
    "for": "The five named circadian rhythm sleep-wake disorder types, in code order",
    letters: [
      ["D", "Delayed sleep phase (G47.21)", "Late sleep and wake, usually by more than 2 hours; adolescents and young adults; familial specifier"],
      ["A", "Advanced sleep phase (G47.22)", "Early sleep and wake; older adults; familial form autosomal dominant (PER2)"],
      ["I", "Irregular sleep-wake (G47.23)", "No main sleep period; at least 3 sleep bouts a day; neurocognitive and neurodevelopmental disorders"],
      ["N", "Non-24-hour (G47.24)", "Daily drift, usually later; about half of blind people"],
      ["S", "Shift work (G47.26)", "Regular work outside 8 a.m.–6 p.m.; sleepy at work and poor sleep at home"]
    ],
    caveat: "DSM check: all types need a circadian cause (A), **insomnia and/or sleepiness** (B) and distress or impairment (C). Unspecified type is **G47.20**. **Jet lag** is in ICSD-3, not DSM-5-TR."
  },
  {
    id: "m12-08", short: "NREM vs REM parasomnias", name: "Terror early and forgotten; nightmare late and remembered", original: true, dx: "sleep-terrors", sec: "s12-nrem-features",
    "for": "Telling sleep terrors and sleepwalking (NREM) from nightmares and RBD (REM)",
    letters: [
      ["Timing", "NREM: first third; REM: second half", "NREM arousals come out of slow-wave sleep early; REM periods lengthen toward morning"],
      ["Recall", "NREM: amnesia; REM: vivid story", "NREM: no dream or a single image; nightmares and RBD: detailed dream recall"],
      ["Waking", "NREM: confused; REM: alert", "Sleep terrors resist comfort; nightmare and RBD sufferers orient quickly"],
      ["Autonomic", "NREM: sudden surge; REM: mild build-up", "Heart rate can double or triple in sleep terrors; nightmares show a rise before waking"],
      ["Eyes", "NREM: open; RBD: closed", "Eyes typically open in NREM arousals, closed during RBD episodes"]
    ],
    caveat: "DSM check: NREM arousal disorders are coded by type: **sleepwalking F51.3** (with sleep-related eating or sexsomnia) and **sleep terrors F51.4**. Adult-onset sleepwalking should prompt a search for **OSA, seizures or medication**."
  },
  {
    id: "m12-09", short: "RBD criteria", name: "DREAM", original: true, dx: "rbd", sec: "s12-rbd",
    "for": "REM sleep behavior disorder: Criteria A–D and the prognosis",
    letters: [
      ["D", "Dream enactment", "Repeated arousals with vocalizing and/or complex movement (A)"],
      ["R", "REM timing", "Usually more than 90 minutes after sleep onset, later in the night, rarely in naps (B)"],
      ["E", "Easily, fully alert", "Wakes completely alert and oriented, not confused (C)"],
      ["A", "Atonia lost on PSG", "REM sleep without atonia (D1), or a suggestive history plus an established synucleinopathy (D2)"],
      ["M", "Monitor neurologically", "About 75% develop a neurodegenerative disease (usually a synucleinopathy) within 10–15 years"]
    ],
    caveat: "DSM check: code **G47.52**. Without PSG and without a synucleinopathy, use **other specified sleep-wake disorder**. In young women, consider **narcolepsy, medication, a brainstem lesion or autoimmune encephalopathy**; antidepressant-related cases are **medication-induced, parasomnia type**."
  },
  {
    id: "m12-10", short: "RLS criteria", name: "URGE", original: true, dx: "rls", sec: "s12-rls",
    "for": "Restless legs syndrome: the urge to move and its three features (Criterion A)",
    letters: [
      ["U", "Urge to move the legs", "Usually with unpleasant creeping, crawling, tingling or burning sensations"],
      ["R", "Rest makes it start or worsen", "Sitting or lying still (A1)"],
      ["G", "Gets better with movement", "Partial or full relief while moving (A2)"],
      ["E", "Evening and night worse", "Or present only in the evening or at night (A3)"]
    ],
    caveat: "DSM check: also **≥ 3 times a week for ≥ 3 months** (B), distress or impairment (C), and not cramps, edema, arthritis or positional discomfort (D) or **akathisia** (E). Children must describe the urge in **their own words**. Code **G25.81**."
  },
  {
    id: "m12-11", short: "Substance-induced sleep disorder coding", name: "1-2-9, plus caffeine and tobacco exceptions", original: true, dx: "substance-induced-sleep", sec: "s12-coding",
    "for": "The 4th character of substance/medication-induced sleep disorder codes",
    letters: [
      ["1", "Mild use disorder", "e.g., F10.182 alcohol"],
      ["2", "Moderate or severe use disorder", "e.g., F10.282 alcohol, F13.282 sedative"],
      ["9", "No use disorder", "e.g., F10.982 alcohol; F19.982 for a drug in no listed class, such as fluoxetine"],
      ["C", "Caffeine", "One code only: F15.982"],
      ["T", "Tobacco", "One code only: F17.208"]
    ],
    caveat: "DSM check: cannabis ends in **8** (F12.188/288/988). Do not code the use disorder separately. Specify type (**insomnia, daytime sleepiness, parasomnia, mixed**) and onset (**intoxication, withdrawal, after medication use**)."
  }
]);
