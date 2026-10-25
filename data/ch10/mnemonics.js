/* Chapter 10 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch10", "mnemonics", [
  {
    id: "m10-01", short: "Three criteria, no amenorrhea", name: "W-F-I", original: true, dx: "anorexia", sec: "s10-an-criteria",
    "for": "Anorexia nervosa: Criteria A–C",
    letters: [
      ["W", "Weight significantly low", "Restriction of energy intake leading to significantly low weight for age, sex, development and health (A)"],
      ["F", "Fear of fat, or fighting gain", "Intense fear of weight gain or persistent behavior that interferes with gain (B)"],
      ["I", "Image disturbed or insight lacking", "Disturbed experience of weight or shape, self-worth tied to it, or not recognizing the seriousness of low weight (C)"]
    ],
    caveat: "Specify **restricting** or **binge-eating/purging** type from the **last 3 months**, and severity by **BMI**. Amenorrhea is **not** a criterion."
  },
  {
    id: "m10-02", short: "Count down from 17", name: "17 · 16 · 15", original: true, dx: "anorexia", sec: "s10-an-criteria",
    "for": "Anorexia nervosa: adult severity by BMI (kg/m²)",
    letters: [
      ["17", "Mild", "BMI ≥17"],
      ["16", "Moderate", "BMI 16–16.99"],
      ["15", "Severe", "BMI 15–15.99"],
      ["<15", "Extreme", "BMI below 15"]
    ],
    caveat: "Youth use **BMI-for-age percentiles**. Severity can be **raised** for symptoms, disability and the need for supervision. A BMI of **19 or more** rules out anorexia nervosa: think **atypical anorexia** (other specified)."
  },
  {
    id: "m10-03", short: "Both parts needed", name: "BIG + LOST", original: true, dx: "bulimia", sec: "s10-binge",
    "for": "What makes an episode a binge",
    letters: [
      ["BIG", "Definitely large amount", "More than most people would eat in a similar time and circumstances"],
      ["+", "In a discrete period", "Usually under 2 hours; continual snacking does not count"],
      ["LOST", "Loss of control", "Feeling unable to stop or control what or how much"]
    ],
    caveat: "The same definition serves **bulimia nervosa** and **binge-eating disorder**. Loss of control over a normal amount is not a DSM binge."
  },
  {
    id: "m10-04", short: "3 of 5 + marked distress", name: "RUN-AD", original: true, dx: "bed", sec: "s10-bed-criteria",
    "for": "Binge-eating disorder: Criterion B features",
    letters: [
      ["R", "Rapid", "Eating much more rapidly than normal"],
      ["U", "Uncomfortably full", "Eating until uncomfortably full"],
      ["N", "Not hungry", "Eating large amounts when not physically hungry"],
      ["A", "Alone", "Eating alone because of embarrassment about how much"],
      ["D", "Disgusted, depressed, guilty", "Feelings afterward"]
    ],
    caveat: "**Three** of the five are needed, plus **marked distress** (C), at least **weekly for 3 months** (D), and **no recurrent compensation** (E)."
  },
  {
    id: "m10-05", short: "1–3 · 4–7 · 8–13 · 14+", name: "One week at a time", original: true, dx: "bulimia", sec: "s10-bn-criteria",
    "for": "Bulimia nervosa and binge-eating disorder: severity by episodes per week",
    letters: [
      ["1", "Mild", "1–3 per week"],
      ["4", "Moderate", "4–7 per week (up to once a day)"],
      ["8", "Severe", "8–13 per week (more than daily)"],
      ["14", "Extreme", "14 or more per week (twice a day or more)"]
    ],
    caveat: "Bulimia counts **compensatory behaviors**; binge-eating disorder counts **binges**. Anorexia uses **BMI** instead."
  },
  {
    id: "m10-06", short: "Why the child won’t eat", name: "SAL", original: true, dx: "arfid", sec: "s10-arfid",
    "for": "ARFID: the three presentations",
    letters: [
      ["S", "Sensory", "Texture, smell, color, taste or temperature"],
      ["A", "Aversive consequences", "Fear after choking, vomiting or a painful procedure"],
      ["L", "Lack of interest", "Little appetite or interest in food"]
    ],
    caveat: "None is about **weight or shape**. ARFID also needs a consequence: weight loss or faltering growth, deficiency, tube or supplement dependence, or marked psychosocial interference."
  },
  {
    id: "m10-07", short: "Five other specified examples", name: "ABB-PN", original: true, dx: "other-specified-eating", sec: "s10-other",
    "for": "Other specified feeding or eating disorder (F50.89)",
    letters: [
      ["A", "Atypical anorexia nervosa", "All criteria but weight, which stays normal or high"],
      ["B", "Bulimia of low frequency or limited duration", "Under once a week and/or under 3 months"],
      ["B", "Binge-eating disorder of low frequency or limited duration", "Under once a week and/or under 3 months"],
      ["P", "Purging disorder", "Purging without binges"],
      ["N", "Night eating syndrome", "Eating after waking or after the evening meal, with recall"]
    ],
    caveat: "Record the reason after the diagnosis, e.g., “other specified feeding or eating disorder, **purging disorder**.”"
  },
  {
    id: "m10-08", short: "Two or more yes answers: assess", name: "SCOFF", dx: "anorexia", sec: "s10-approach",
    "for": "A five-question eating disorder screen (Morgan and colleagues, 1999)",
    letters: [
      ["S", "Sick", "Do you make yourself sick because you feel uncomfortably full?"],
      ["C", "Control", "Do you worry you have lost control over how much you eat?"],
      ["O", "One stone", "Have you recently lost more than one stone (about 6 kg) in 3 months?"],
      ["F", "Fat", "Do you believe yourself to be fat when others say you are too thin?"],
      ["F", "Food", "Would you say food dominates your life?"]
    ],
    caveat: "A **screening** tool, not DSM criteria: two or more “yes” answers call for a full assessment. It misses many with **ARFID** and binge-eating disorder."
  }
]);
