/* Chapter 17 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch17", "mnemonics", [
  {
    id: "m17-01", short: "Delirium criteria", name: "A-B-C-D-E", original: true, dx: "delirium", sec: "s17-delirium-criteria",
    "for": "Delirium: Criteria A–E",
    letters: [
      ["A", "Attention and awareness", "Disturbed attention with reduced awareness of the environment (A)"],
      ["B", "Brief, baseline change, bobbing", "Develops over hours to days, a change from baseline, fluctuating through the day (B)"],
      ["C", "Cognition also", "An additional cognitive disturbance: memory, orientation, language, visuospatial, perception (C)"],
      ["D", "Don’t if NCD or coma", "Not better explained by an NCD; not in severely reduced arousal (D)"],
      ["E", "Evidence of a cause", "Medical condition, substance, medication, toxin or several (E)"]
    ],
    caveat: "DSM check: the letters happen to match the criteria letters. Specify **acute or persistent** and **hyperactive, hypoactive or mixed**."
  },
  {
    id: "m17-02", short: "Major NCD severity", name: "I-B-D", original: true, dx: "major-ncd", sec: "s17-ncd-criteria",
    "for": "Severity specifiers of major NCD",
    letters: [
      ["I", "IADLs (mild)", "Difficulty with instrumental activities: housework, money, medications"],
      ["B", "Basic ADLs (moderate)", "Difficulty with feeding, dressing, bathing"],
      ["D", "Dependent (severe)", "Fully dependent on others"]
    ],
    caveat: "DSM check: these rate **major** NCD. A person who keeps IADLs with effort has **mild NCD**, not major NCD of mild severity. Coded as **A, B, C** in the 4th character."
  },
  {
    id: "m17-03", short: "Disturbance codes", name: "0 · 11 · 18 · 2 · 3 · 4", original: true, dx: "major-ncd", sec: "s17-coding",
    "for": "5th–6th characters of F01/F02/F03 (since October 2022)",
    letters: [
      ["0", "None", "Without behavioral or psychological disturbance"],
      ["11", "Agitation", "Aggression, combativeness, violent behavior"],
      ["18", "Other behavior", "Sleep disturbance, social or sexual disinhibition"],
      ["2", "Psychosis", "Hallucinations, delusions, paranoia"],
      ["3", "Mood", "Depression, apathy, anhedonia"],
      ["4", "Anxiety", "Anxiety symptoms"]
    ],
    caveat: "DSM check: think **“1 for agitation, 2 for psychosis, 3 for mood, 4 for anxiety”** with agitation split into 11 and other behavior 18. Code **each** disturbance present."
  },
  {
    id: "m17-04", short: "Behavioral-variant FTD", name: "DASH-P", original: true, dx: "ncd-frontotemporal", sec: "s17-ftd",
    "for": "Frontotemporal NCD, behavioral variant: the five symptoms (need three)",
    letters: [
      ["D", "Disinhibition", "Socially inappropriate behavior, impulsivity"],
      ["A", "Apathy or inertia", "Loss of interest, drive and self-care"],
      ["S", "Sympathy lost", "Loss of sympathy or empathy"],
      ["H", "Hyperorality", "Dietary change, overeating, sweets"],
      ["P", "Perseveration", "Perseverative, stereotyped or compulsive/ritualistic behavior"]
    ],
    caveat: "DSM check: **three or more**, plus prominent decline in **social cognition and/or executive** ability, with memory and perceptual-motor function **relatively spared**."
  },
  {
    id: "m17-05", short: "Lewy body features", name: "F-V-P + R-N", original: true, dx: "ncd-lewy", sec: "s17-lewy",
    "for": "NCD with Lewy bodies: three core and two suggestive features",
    letters: [
      ["F", "Fluctuations", "Core: pronounced variation in attention and alertness"],
      ["V", "Visual hallucinations", "Core: recurrent, well formed and detailed"],
      ["P", "Parkinsonism", "Core: spontaneous, beginning after cognitive decline"],
      ["R", "REM sleep behavior disorder", "Suggestive"],
      ["N", "Neuroleptic sensitivity", "Suggestive: severe"]
    ],
    caveat: "DSM check: **probable** = 2 core, or 1 suggestive + at least 1 core. **Possible** = 1 core alone, or suggestive features alone."
  },
  {
    id: "m17-06", short: "Alzheimer’s genes", name: "21-14-1", original: true, dx: "ncd-alzheimers", sec: "s17-alzheimers-clinical",
    "for": "Chromosomes of autosomal dominant Alzheimer’s disease",
    letters: [
      ["21", "APP", "Amyloid precursor protein; extra copy in Down syndrome"],
      ["14", "PSEN1", "Presenilin 1; the most common causative gene"],
      ["1", "PSEN2", "Presenilin 2"]
    ],
    caveat: "DSM check: a causative mutation makes Alzheimer’s disease **probable** at both major and mild levels. **APOE ε4** (chromosome 19) is a risk factor, not a cause."
  },
  {
    id: "m17-07", short: "TBI severity cut-offs", name: "30 minutes, 1 day, 13", original: true, dx: "ncd-tbi", sec: "s17-tbi",
    "for": "Upper limits of mild TBI (Table 2)",
    letters: [
      ["30", "Loss of consciousness", "30 minutes or less (severe: 24 hours or more)"],
      ["1", "Posttraumatic amnesia", "1 day or less (severe: 7 days or more)"],
      ["13", "Glasgow Coma Scale", "13–15 at 30 minutes (moderate 9–12; severe 3–8)"]
    ],
    caveat: "DSM check: abnormal CT or MRI turns mild into **complicated mild** TBI. Rate the severity of the **NCD** separately by daily function."
  },
  {
    id: "m17-08", short: "Prion disease", name: "Rapid, jerky, wobbly", original: true, dx: "ncd-prion", sec: "s17-prion",
    "for": "Clues to NCD due to prion disease",
    letters: [
      ["R", "Rapid", "Progression to major NCD in as little as 6 months"],
      ["J", "Jerky", "Myoclonus and exaggerated startle"],
      ["W", "Wobbly", "Ataxia and gait disturbance"]
    ],
    caveat: "DSM check: Criterion C needs **motor features or biomarker** evidence. Tests: MRI DWI (most sensitive), **RT-QuIC** (most specific), 14-3-3, periodic EEG complexes."
  },
  {
    id: "m17-09", short: "Huntington’s repeat lengths", name: "36 maybe, 40 always", original: true, dx: "ncd-huntingtons", sec: "s17-huntingtons",
    "for": "CAG repeat length in HTT",
    letters: [
      ["36–39", "Maybe", "Partially penetrant; if disease occurs, usually after 70"],
      ["40+", "Always", "Fully penetrant; longer repeats, earlier onset"]
    ],
    caveat: "DSM check: the **gene alone** is not Huntington’s disease, which needs motor signs; but the NCD can be diagnosed with **risk** from family history or testing."
  },
  {
    id: "m17-10", short: "Probable vs possible codes", name: "Probable gets a partner", original: true, dx: "ncd-alzheimers", sec: "s17-coding",
    "for": "How certainty changes the major NCD code",
    letters: [
      ["Probable", "Disease code + F02", "G30.9 / G31.09 / G31.83 / G20.C, then F02.xx"],
      ["Vascular", "F01 alone", "Probably due to vascular disease: F01.xx, no partner code"],
      ["Possible", "F03 alone", "No disease code; F03.xx"]
    ],
    caveat: "DSM check: for **mild** NCD, probable = disease code + **F06.70/71** (vascular: **I67.9** + F06.7x); possible or unknown = **G31.84**."
  }
]);
