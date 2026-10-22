/* Chapter 7 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch07", "mnemonics", [
  {
    id: "m7-01", short: "1 intrusion, 1 avoidance, 2 cognition/mood, 2 arousal; >1 month", name: "TRAUMA", dx: "ptsd", sec: "s7-ptsd-criteria",
    "for": "PTSD: the criteria in order",
    letters: [
      ["T", "Traumatic event", "Actual or threatened death, serious injury or sexual violence (A)"],
      ["R", "Reexperiencing", "Intrusive memories, dreams, flashbacks, cue reactivity (B, ≥1)"],
      ["A", "Avoidance", "Of memories and feelings, or of reminders (C, ≥1)"],
      ["U", "Unable to function", "Distress or impairment (G)"],
      ["M", "Month or more", "Duration more than 1 month (F)"],
      ["A", "Arousal and negative mood", "Cognitions and mood (D, ≥2) and arousal (E, ≥2)"]
    ],
    caveat: "TRAUMA squeezes two clusters into one letter. Criterion D (negative cognitions and mood, **≥2 of 7**) and Criterion E (arousal, **≥2 of 6**) are separate. Children 6 and younger have their own criteria."
  },
  {
    id: "m7-02", short: "At least 2 of the 6 in Criterion E", name: "HIRSCH", original: true, dx: "ptsd", sec: "s7-ptsd-criteria",
    "for": "PTSD Criterion E: arousal and reactivity",
    letters: [
      ["H", "Hypervigilance", ""],
      ["I", "Irritability", "Angry outbursts with little or no provocation"],
      ["R", "Reckless behavior", "Or self-destructive behavior"],
      ["S", "Startle, exaggerated", "Reflexive, to any stimulus"],
      ["C", "Concentration problems", ""],
      ["H", "Hours of sleep lost", "Sleep disturbance"]
    ],
    caveat: "Adults need **2 of 6**. In children 6 and younger, reckless behavior is not listed (2 of 5)."
  },
  {
    id: "m7-03", short: "At least 2 of the 7 in Criterion D", name: "BAD MOOD", original: true, dx: "ptsd", sec: "s7-ptsd-criteria",
    "for": "PTSD Criterion D: negative cognitions and mood",
    letters: [
      ["B", "Blame", "Distorted cognitions about cause or consequences, blaming self or others"],
      ["A", "Amnesia", "For an important aspect, dissociative"],
      ["D", "Detachment", "From others"],
      ["M", "Mood negative", "Persistent fear, horror, anger, guilt or shame"],
      ["O", "Outlook negative", "Exaggerated negative beliefs about self, others, world"],
      ["O", "Out of interest", "Markedly diminished interest or participation"],
      ["D", "Deficit of positive emotion", "Inability to feel happiness, satisfaction, love"]
    ],
    caveat: "Criterion D needs **2 of 7**, beginning or worsening after the trauma."
  },
  {
    id: "m7-04", short: "Yearning or preoccupation + 3 of 8; ≥12 months (6 in youth)", name: "I’D ALWAYS (miss him)", original: true, dx: "pgd", sec: "s7-pgd-criteria",
    "for": "Prolonged grief disorder: the eight Criterion C symptoms",
    letters: [
      ["I", "Identity disruption", "Part of oneself has died"],
      ["D", "Disbelief", "Marked disbelief about the death"],
      ["A", "Avoidance", "Of reminders that the person is dead"],
      ["L", "Loneliness", "Intense loneliness since the death"],
      ["W", "Woe", "Intense emotional pain: anger, bitterness, sorrow"],
      ["A", "Absent emotions", "Emotional numbness"],
      ["Y", "Yields no meaning", "Life feels meaningless"],
      ["S", "Social reintegration difficult", "Trouble resuming relationships, interests, plans"]
    ],
    caveat: "First the core (**B**): intense **yearning** or **preoccupation**. Then **3 of these 8**, most days and nearly every day for the last month, at least **12 months** after the death (6 in youth), beyond cultural norms."
  },
  {
    id: "m7-05", short: "3 days to 1 month; 9 of 14 from any category", name: "IN DAA", original: true, dx: "acute-stress", sec: "s7-asd-criteria",
    "for": "Acute stress disorder: the five symptom categories (with how many items each)",
    letters: [
      ["I", "Intrusion", "4 items"],
      ["N", "Negative mood", "1 item"],
      ["D", "Dissociation", "2 items"],
      ["A", "Avoidance", "2 items"],
      ["A", "Arousal", "5 items"]
    ],
    caveat: "Nine of the 14 from **any** category: there are no category minimums, unlike PTSD."
  },
  {
    id: "m7-06", short: "Onset within 3 months; gone within 6 months of the stressor’s end", name: "3 in, 6 out", original: true, dx: "adjustment", sec: "s7-adjust",
    "for": "Adjustment disorders: the time rules",
    letters: [
      ["3", "Months to start", "Symptoms begin within 3 months of the stressor"],
      ["6", "Months to stop", "Symptoms end within 6 months after the stressor or its consequences end"]
    ],
    caveat: "With a chronic stressor the disorder can last longer (**persistent/chronic** specifier). Later onset or longer duration without an ongoing stressor = other specified."
  }
]);
