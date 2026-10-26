/* Chapter 15 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch15", "mnemonics", [
  {
    id: "m15-01", short: "ODD: TAR, A BAD, S", name: "TAR (mood) + A BAD (behavior) + S (spite)", original: true, dx: "oppositional-defiant", sec: "s15-odd-criteria",
    "for": "Oppositional defiant disorder: the 8 symptoms in their 3 groups (Criterion A)",
    letters: [
      ["T", "Temper (A1)", "Often loses temper. Angry/irritable mood group"],
      ["A", "Annoyed easily (A2)", "Often touchy or easily annoyed"],
      ["R", "Resentful (A3)", "Often angry and resentful"],
      ["A", "Argues (A4)", "With authority figures, or with adults for children and adolescents. Argumentative/defiant group"],
      ["B", "Blames (A7)", "Blames others for own mistakes or misbehavior"],
      ["A", "Annoys on purpose (A6)", "Deliberately annoys others"],
      ["D", "Defies (A5)", "Actively defies or refuses requests from authority figures or rules"],
      ["S", "Spiteful (A8)", "Spiteful or vindictive at least twice in 6 months. Vindictiveness group"]
    ],
    caveat: "DSM check: need **≥4 of 8** for **≥6 months**, shown with **at least one person who is not a sibling**. Not exclusively during psychotic, substance use, depressive or bipolar disorder, and **not if DMDD criteria are met**. Code **F91.3**."
  },
  {
    id: "m15-02", short: "ODD frequency and severity", name: "Under 5 daily, 5 and up weekly; settings 1-2-3", original: true, dx: "oppositional-defiant", sec: "s15-odd-criteria",
    "for": "ODD: the frequency guide in the Criterion A note and the severity specifier",
    letters: [
      ["<5", "Most days", "Children under 5: the behavior on most days for at least 6 months"],
      ["5+", "Weekly", "Age 5 and older: at least once a week for at least 6 months"],
      ["1", "Mild", "Symptoms in only one setting (usually home)"],
      ["2", "Moderate", "Some symptoms in at least two settings"],
      ["3", "Severe", "Some symptoms in three or more settings"]
    ],
    caveat: "DSM check: the frequency guide is a **minimum**; behavior must also exceed what is normative for age, gender and culture. **A8 (spite) has its own rule: twice in 6 months.** Daily tantrums occur in only about 10% of preschoolers."
  },
  {
    id: "m15-03", short: "IED 2×3 or 3 in 12", name: "Two a week for three months, or three in twelve", original: true, dx: "ied", sec: "s15-ied-criteria",
    "for": "Intermittent explosive disorder: the two routes through Criterion A",
    letters: [
      ["2", "Twice a week (A1)", "Verbal aggression or physical aggression without damage or injury, twice weekly on average"],
      ["3", "For 3 months (A1)", "Sustained over a 3-month period"],
      ["3", "Three big ones (A2)", "Outbursts that damage or destroy property or physically injure a person or animal"],
      ["12", "In 12 months (A2)", "All three within one year"],
      ["6", "Age 6 or older (E)", "Chronological age, or equivalent developmental level"]
    ],
    caveat: "DSM check: either route is enough. Also needs **out of proportion** (B), **not premeditated and not for a tangible goal** (C), distress, impairment or financial/legal consequences (D). Ages 6–18: not if part of an **adjustment disorder**. Code **F63.81**."
  },
  {
    id: "m15-04", short: "DMDD versus IED", name: "Mood between, before 10, not first after 18", original: true, dx: "ied", sec: "s15-ied-ddx",
    "for": "Telling disruptive mood dysregulation disorder from IED",
    letters: [
      ["M", "Mood between outbursts", "DMDD: persistently irritable or angry most of the day, nearly every day. IED: mood is normal in between"],
      ["10", "Onset before 10", "DMDD can be given only if outbursts began before age 10"],
      ["18", "Not first diagnosed after 18", "DMDD is never diagnosed for the first time after age 18"],
      ["X", "Mutually exclusive", "Otherwise, IED and DMDD are not given together"]
    ],
    caveat: "DSM check: IED **can be added** to ADHD, conduct disorder, ODD or autism spectrum disorder when outbursts go beyond what those disorders usually show and need their own attention. ODD is **not** given when DMDD criteria are met."
  },
  {
    id: "m15-05", short: "Conduct disorder 7-2-3-3", name: "A Person Destroys Rules: 7 + 2 + 3 + 3 = 15", original: true, dx: "conduct-disorder", sec: "s15-cd-criteria",
    "for": "Conduct disorder: the four symptom groups of Criterion A",
    letters: [
      ["A", "Aggression to people and animals (7)", "Bullies, starts fights, weapon, cruel to people, cruel to animals, steals while confronting a victim, forced sex (A1–A7)"],
      ["P", "Property destruction (2)", "Fire setting meant to cause serious damage; other deliberate destruction (A8–A9)"],
      ["D", "Deceitfulness or theft (3)", "Breaking in, conning, stealing without confronting a victim (A10–A12)"],
      ["R", "Rule violations (3)", "Out at night before 13, running away overnight, truancy before 13 (A13–A15)"]
    ],
    caveat: "DSM check: **≥3 of 15 in the past 12 months, ≥1 in the past 6 months**, with impairment. Running away as a **direct consequence of abuse** does not typically count. Age 18+: diagnose only if **antisocial personality disorder** criteria are not met."
  },
  {
    id: "m15-06", short: "Conduct disorder numbers", name: "10 sets the type, 13 sets the rules, 18 sets the limit", original: true, dx: "conduct-disorder", sec: "s15-cd-specifiers",
    "for": "Conduct disorder: the age cut-offs and onset subtype codes",
    letters: [
      ["10", "Onset subtype", "Any one symptom before 10 = childhood-onset F91.1; none before 10 = adolescent-onset F91.2; unknown = unspecified onset F91.9"],
      ["13", "Rule-breaking start", "Staying out at night (A13) and truancy (A15) count only if they began before 13"],
      ["16", "Late onset is rare", "First onset after 16 is rare"],
      ["18", "ASPD check", "At 18 or older, conduct disorder is diagnosed only if antisocial personality disorder criteria are not met"]
    ],
    caveat: "DSM check: childhood onset needs only **one symptom** before 10, not full criteria. **F91.9** is shared with **unspecified disruptive, impulse-control, and conduct disorder**. Severity mild/moderate/severe depends on number of problems **and harm to others**."
  },
  {
    id: "m15-07", short: "Limited prosocial emotions: no RECS", name: "No Remorse, Empathy, Concern or Sincere affect", original: true, dx: "conduct-disorder", sec: "s15-cd-specifiers",
    "for": "Conduct disorder specifier with limited prosocial emotions: the four traits",
    letters: [
      ["R", "Remorse or guilt lacking", "Does not feel bad after wrongdoing; remorse only when caught or facing punishment does not count"],
      ["E", "Empathy lacking (callous)", "Cold, unconcerned about others' feelings, focused on effects on self"],
      ["C", "Concern about performance lacking", "Does not care about poor school or work performance; blames others"],
      ["S", "Shallow or deficient affect", "Emotion is superficial, insincere, switched on and off, or used for gain"]
    ],
    caveat: "DSM check: **≥2 of 4**, **persistently ≥12 months**, across **multiple relationships and settings**. Needs **multiple informants** who have known the person for a long time, since self-report may hide the traits. More common with childhood onset and severe ratings."
  },
  {
    id: "m15-08", short: "Pyromania and kleptomania: rule out C-M-A", name: "Conduct disorder, Mania, ASPD first; then check the motive", original: true, dx: "pyromania", sec: "s15-motive",
    "for": "Shared exclusions for pyromania (Criteria E–F) and kleptomania (Criteria D–E)",
    letters: [
      ["C", "Conduct disorder", "Fire setting or stealing that is part of a broader antisocial pattern"],
      ["M", "Manic episode", "Acts that occur only during mania"],
      ["A", "Antisocial personality disorder", "Adult general pattern of antisocial behavior"],
      ["A", "Anger or vengeance", "Excluded for both disorders"],
      ["P", "Psychosis", "Acts in response to a delusion or hallucination are excluded for both"]
    ],
    caveat: "DSM check: pyromania also excludes **money, sociopolitical ideology, concealing a crime, improving living circumstances** and **impaired judgment** (major NCD, intellectual developmental disorder, intoxication). Kleptomania items are **not needed for use or value**; ordinary theft and **malingering** are key look-alikes."
  }
]);
