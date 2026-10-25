/* Chapter 16 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch16", "mnemonics", [
  {
    id: "m16-01", short: "2 of 11 in 12 months", name: "CSRP", original: true, dx: "alcohol-use", sec: "s16-sud",
    "for": "Substance use disorder: the four groups of criteria",
    letters: [
      ["C", "Control impaired (1–4)", "Larger amounts or longer; can’t cut down; much time; craving"],
      ["S", "Social impairment (5–7)", "Role failure; social problems; activities given up"],
      ["R", "Risky use (8–9)", "Physically hazardous use; use despite physical or psychological problems"],
      ["P", "Pharmacology (10–11)", "Tolerance; withdrawal (not counted for medicines taken as prescribed)"]
    ],
    caveat: "Severity: **mild 2–3, moderate 4–5, severe 6+**. Hallucinogen and inhalant use disorders lack the withdrawal criterion (10 items). In remission only **craving** may be present."
  },
  {
    id: "m16-02", short: "2 of 8", name: "HANGOVERS", original: true, dx: "alcohol-withdrawal", sec: "s16-alcohol-iw",
    "for": "Alcohol (and sedative) withdrawal symptoms",
    letters: [
      ["H", "Hand tremor", "Increased"],
      ["A", "Autonomic hyperactivity", "Sweating, pulse over 100"],
      ["N", "Nausea or vomiting", ""],
      ["G", "Grand mal seizures", "Under 3% in alcohol; up to 20%–30% in untreated sedative withdrawal"],
      ["O", "Overactivity", "Psychomotor agitation"],
      ["V", "Visual, tactile or auditory hallucinations", "Transient, or illusions"],
      ["E", "Edginess", "Anxiety"],
      ["R", "Reality testing intact?", "If hallucinations with insight and no delirium: add “with perceptual disturbances”"],
      ["S", "Sleeplessness", "Insomnia"]
    ],
    caveat: "Two or more of the eight symptoms (R is the specifier hint, not a symptom). Alcohol withdrawal begins 4–12 hours after the last drink and **peaks on day 2**."
  },
  {
    id: "m16-03", short: "3 of 9", name: "YAWNS DRIP", original: true, dx: "opioid-withdrawal", sec: "s16-opioid-iw",
    "for": "Opioid withdrawal symptoms",
    letters: [
      ["Y", "Yawning", ""],
      ["A", "Aches", "Muscle aches"],
      ["W", "Watery eyes and nose", "Lacrimation or rhinorrhea"],
      ["N", "Nausea or vomiting", ""],
      ["S", "Sleeplessness", "Insomnia"],
      ["D", "Dysphoric mood", ""],
      ["R", "Runs", "Diarrhea"],
      ["I", "Increased temperature", "Fever"],
      ["P", "Pupils dilated", "Or piloerection or sweating"]
    ],
    caveat: "Three or more, after heavy prolonged use **or an antagonist**. Heroin: onset 6–12 h, peak 1–3 days; methadone onset 2–4 days."
  },
  {
    id: "m16-04", short: "2 within 2 hours", name: "RAD T", original: true, dx: "cannabis-intox", sec: "s16-cannabis-iw",
    "for": "Cannabis intoxication: physical signs",
    letters: [
      ["R", "Red eyes", "Conjunctival injection"],
      ["A", "Appetite increased", ""],
      ["D", "Dry mouth", ""],
      ["T", "Tachycardia", ""]
    ],
    caveat: "Two or more within **2 hours**, with problematic changes (euphoria, anxiety, slowed time, impaired judgment). Alcohol and sedatives **lower** appetite and cause nystagmus."
  },
  {
    id: "m16-05", short: "2 within 1 hour", name: "RAGE NASH", original: true, dx: "pcp-intox", sec: "s16-hallucinogen-intox",
    "for": "Phencyclidine intoxication signs",
    letters: [
      ["R", "Rigidity", "Muscle rigidity"],
      ["A", "Ataxia", ""],
      ["G", "Grand mal seizures or coma", ""],
      ["E", "Elevated blood pressure or pulse", ""],
      ["N", "Nystagmus", "Vertical or horizontal"],
      ["A", "Analgesia", "Numbness, diminished pain response"],
      ["S", "Slurred speech", "Dysarthria"],
      ["H", "Hyperacusis", ""]
    ],
    caveat: "Two or more **within 1 hour**, with belligerence, assaultiveness and unpredictability. Nystagmus with bizarre violence is the classic clue."
  },
  {
    id: "m16-06", short: "Dysphoria + 2", name: "FAVIP", original: true, dx: "stimulant-withdrawal", sec: "s16-stimulant-iw",
    "for": "Stimulant withdrawal: the physiological changes",
    letters: [
      ["F", "Fatigue", ""],
      ["A", "Appetite increased", ""],
      ["V", "Vivid, unpleasant dreams", ""],
      ["I", "Insomnia or hypersomnia", ""],
      ["P", "Psychomotor retardation or agitation", ""]
    ],
    caveat: "**Dysphoric mood is required**, plus two of FAVIP. Bradycardia is common; anhedonia and craving are common but not criteria. Watch for suicidal depression."
  },
  {
    id: "m16-07", short: "4 of 9", name: "GAMBLER IS", original: true, dx: "gambling", sec: "s16-gambling",
    "for": "Gambling disorder criteria",
    letters: [
      ["G", "Gets even", "Chasing losses"],
      ["A", "Amounts increase", "To get the same excitement"],
      ["M", "Mood-driven", "Gambles when distressed"],
      ["B", "Bailouts", "Relies on others for money"],
      ["L", "Lies", "To conceal gambling"],
      ["E", "Efforts to stop fail", ""],
      ["R", "Restless or irritable", "When cutting down"],
      ["I", "Interferes", "Jeopardized relationship, job or opportunity"],
      ["S", "Spends time thinking", "Preoccupied with gambling"]
    ],
    caveat: "**Four or more** in 12 months (not two), not better explained by mania. Mild 4–5, moderate 6–7, severe 8–9. **F63.0**."
  }
]);
