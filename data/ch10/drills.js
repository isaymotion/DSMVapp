/* Chapter 10 practice drills.
   dxline:   build the full diagnosis line (diagnosis, type, severity, code). Codes are those in force from October 1, 2024.
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var DX = ["Anorexia nervosa", "Bulimia nervosa", "Binge-eating disorder", "Avoidant/restrictive food intake disorder", "Pica", "Rumination disorder", "Other specified feeding or eating disorder", "Unspecified feeding or eating disorder"];
  var SEV = ["Mild", "Moderate", "Severe", "Extreme"];
  var TYPE = ["Restricting type", "Binge-eating/purging type"];

  SP.add("ch10", "dxline", [
    {
      id: "w10-01", tag: "Anorexia",
      "case": "A 19-year-old woman restricts to 600 kcal a day and runs 15 km daily. BMI 15.2. Intense fear of fatness. No binges or purging.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Type", options: TYPE, answer: 0 },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Code (from Oct 2024)", options: ["F50.012", "F50.01", "F50.022", "F50.011", "F50.013"], answer: 0 }
      ],
      line: "**F50.012** Anorexia nervosa, restricting type, severe",
      why: "BMI 15–15.99 = severe; restricting type ends .01x; severe is the third severity digit (0 mild, 1 moderate, 2 severe, 3 extreme)."
    },
    {
      id: "w10-02", tag: "Anorexia B/P",
      "case": "A 24-year-old woman with BMI 14.6 vomits after most meals and binges weekly. She is terrified of gaining weight.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Type", options: TYPE, answer: 1 },
        { label: "Severity", options: SEV, answer: 3 },
        { label: "Code (from Oct 2024)", options: ["F50.023", "F50.013", "F50.24", "F50.02", "F50.022"], answer: 0 }
      ],
      line: "**F50.023** Anorexia nervosa, binge-eating/purging type, extreme",
      why: "BMI <15 = extreme. Binges and purges at low weight are anorexia, not bulimia."
    },
    {
      id: "w10-03", tag: "Anorexia mild",
      "case": "A 16-year-old boy has a BMI at the 3rd percentile after weight loss, fears fatness and restricts. His clinician rates severity as mild on BMI percentile.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Type", options: TYPE, answer: 0 },
        { label: "Code (from Oct 2024)", options: ["F50.010", "F50.019", "F50.020", "F50.01", "F50.82"], answer: 0 }
      ],
      line: "**F50.010** Anorexia nervosa, restricting type, mild",
      why: "Youth severity uses BMI percentiles; restricting + mild = F50.010."
    },
    {
      id: "w10-04", tag: "Remission",
      "case": "A woman with past anorexia nervosa, binge-eating/purging type, has had a normal BMI for a year but still overvalues shape. No binges or purges.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Remission", options: ["In partial remission", "In full remission"], answer: 0 },
        { label: "Code (from Oct 2024)", options: ["F50.024", "F50.014", "F50.029", "F50.25", "F50.020"], answer: 0 }
      ],
      line: "**F50.024** Anorexia nervosa, binge-eating/purging type, in partial remission",
      why: "A not met, C still met = partial remission. The type follows the most recent presentation; partial and full share .x24."
    },
    {
      id: "w10-05", tag: "Bulimia",
      "case": "A normal-weight 21-year-old binges and vomits about six times a week for 5 months; her self-worth depends on her weight.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code (from Oct 2024)", options: ["F50.22", "F50.2", "F50.21", "F50.811", "F50.021"], answer: 0 }
      ],
      line: "**F50.22** Bulimia nervosa, moderate",
      why: "4–7 compensatory episodes a week = moderate."
    },
    {
      id: "w10-06", tag: "Bulimia extreme",
      "case": "A 28-year-old binges and vomits three times a day and takes laxatives daily, at a BMI of 21, for a year.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Severity", options: SEV, answer: 3 },
        { label: "Code (from Oct 2024)", options: ["F50.24", "F50.23", "F50.813", "F50.023", "F50.25"], answer: 0 }
      ],
      line: "**F50.24** Bulimia nervosa, extreme",
      why: "Count compensations: 21 vomits + 7 laxative episodes = 28 a week, ≥14 = extreme."
    },
    {
      id: "w10-07", tag: "Bulimia remission",
      "case": "A man treated for bulimia nervosa has had no binges or purges and no shape overvaluation for 14 months.",
      parts: [
        { label: "Remission", options: ["In partial remission", "In full remission"], answer: 1 },
        { label: "Code (from Oct 2024)", options: ["F50.25", "F50.20", "F50.814", "F50.014", "F50.2"], answer: 0 }
      ],
      line: "**F50.25** Bulimia nervosa, in full remission",
      why: "Partial and full remission share F50.25."
    },
    {
      id: "w10-08", tag: "BED",
      "case": "A 40-year-old binges about ten times a week with distress and 4 of 5 binge features, no compensation, for a year.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Code (from Oct 2024)", options: ["F50.812", "F50.81", "F50.23", "F50.811", "F50.813"], answer: 0 }
      ],
      line: "**F50.812** Binge-eating disorder, severe",
      why: "8–13 binges a week = severe; BED codes run F50.810–F50.814, F50.819."
    },
    {
      id: "w10-09", tag: "BED remission",
      "case": "A woman with past binge-eating disorder now binges about twice a month and has done so for 8 months.",
      parts: [
        { label: "Remission", options: ["In partial remission", "In full remission"], answer: 0 },
        { label: "Code (from Oct 2024)", options: ["F50.814", "F50.810", "F50.25", "F50.89", "F50.819"], answer: 0 }
      ],
      line: "**F50.814** Binge-eating disorder, in partial remission",
      why: "Partial remission in BED = binges average less than once a week for a sustained period."
    },
    {
      id: "w10-10", tag: "ARFID",
      "case": "A 9-year-old with sensory-based avoidance, weight faltering and supplement dependence, without weight concern.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Code", options: ["F50.82", "F50.89", "F98.21", "F50.010", "F50.9"], answer: 0 }
      ],
      line: "**F50.82** Avoidant/restrictive food intake disorder",
      why: "ARFID kept F50.82 in 2024."
    },
    {
      id: "w10-11", tag: "Pica",
      "case": "A 34-year-old woman eats clay and paint chips daily for 4 months, with lead toxicity. Not culturally sanctioned.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "Code (from Oct 2024)", options: ["F50.83", "F98.3", "F50.89", "F50.84", "F98.21"], answer: 0 }
      ],
      line: "**F50.83** Pica, in adults",
      why: "Adults F50.83 from October 2024 (was F50.89); children F98.3."
    },
    {
      id: "w10-12", tag: "Rumination",
      "case": "A 7-year-old girl regurgitates and re-chews food daily for 3 months; GI workup is normal.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 5 },
        { label: "Code", options: ["F98.21", "F50.84", "F98.3", "F50.83", "F50.82"], answer: 0 }
      ],
      line: "**F98.21** Rumination disorder",
      why: "Children keep F98.21; adults use F50.84 from October 2024."
    },
    {
      id: "w10-13", tag: "Other specified",
      "case": "A normal-weight woman vomits after ordinary meals to control her weight, without binges.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 6 },
        { label: "Reason", options: ["Purging disorder", "Atypical anorexia nervosa", "Night eating syndrome", "Bulimia nervosa of low frequency"], answer: 0 },
        { label: "Code", options: ["F50.89", "F50.9", "F50.2", "F50.83", "F50.82"], answer: 0 }
      ],
      line: "**F50.89** Other specified feeding or eating disorder, purging disorder",
      why: "Purging without binges; record the reason."
    },
    {
      id: "w10-14", tag: "Atypical",
      "case": "An adult loses 25 kg from a BMI of 36 to 25, with fear of fatness, body image disturbance and bradycardia.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 6 },
        { label: "Reason", options: ["Purging disorder", "Atypical anorexia nervosa", "Night eating syndrome", "Binge-eating disorder of low frequency"], answer: 1 },
        { label: "Code", options: ["F50.89", "F50.010", "F50.9", "F50.82", "F50.019"], answer: 0 }
      ],
      line: "**F50.89** Other specified feeding or eating disorder, atypical anorexia nervosa",
      why: "An adult BMI of 19 or more is not significantly low."
    }
  ]);

  SP.add("ch10", "counting", [
    {
      id: "n10-01", tag: "BED Criterion B",
      "case": "During her binges, a woman:",
      ask: "Mark the binge features that count toward Criterion B. Are three or more present?",
      items: [
        ["Eats much faster than usual", true, "Rapid eating (B1)."],
        ["Keeps eating until her stomach hurts", true, "Uncomfortably full (B2)."],
        ["Eats right after a full dinner", true, "Not physically hungry (B3)."],
        ["Vomits afterward", false, "Compensation; recurrent use excludes BED."],
        ["Craves chocolate specifically", false, "Binges are defined by amount, not craving."]
      ],
      need: 3,
      met: true,
      why: "Three features (B1–B3). She still needs marked distress, weekly frequency for 3 months, and no recurrent compensation."
    },
    {
      id: "n10-02", tag: "What is a binge",
      "case": "Which episodes are binges?",
      ask: "Mark the episodes that meet the definition of a binge. Is at least one present?",
      items: [
        ["Two large plates and a dessert at a holiday dinner, enjoyed, stopping when full", false, "Context makes the amount normal; no loss of control."],
        ["Snacking on crackers all afternoon", false, "Continual snacking is not a discrete binge."],
        ["A whole cake and a liter of ice cream in 40 minutes, unable to stop", true, "Large amount, discrete period, loss of control."],
        ["One cookie eaten with a sense of lost control", false, "Not an objectively large amount (loss-of-control eating)."]
      ],
      met: true,
      why: "Only one episode combines a definitely large amount, a discrete period and loss of control."
    },
    {
      id: "n10-03", tag: "Compensation",
      "case": "A normal-weight man with weekly binges also:",
      ask: "Mark the inappropriate compensatory behaviors (bulimia Criterion B). Is at least one present?",
      items: [
        ["Runs 2 hours daily even with a stress fracture", true, "Excessive exercise despite injury."],
        ["Fasts the day after each binge", true, "Fasting."],
        ["Takes 20 laxative tablets after binges", true, "Laxative misuse."],
        ["Eats a normal breakfast the next morning", false, "Not compensation."],
        ["Joins a gym class twice a week", false, "Ordinary exercise."]
      ],
      met: true,
      why: "Three compensatory behaviors; severity counts all of them per week."
    },
    {
      id: "n10-04", tag: "ARFID Criterion A",
      "case": "A 12-year-old who avoids most foods because of texture:",
      ask: "Mark the findings that meet an ARFID Criterion A consequence. Is Criterion A met?",
      items: [
        ["Fell from the 50th to the 15th weight percentile", true, "Faltering growth (A1)."],
        ["Ferritin is low", true, "Nutritional deficiency (A2)."],
        ["Prefers chicken nuggets", false, "Preference alone is not a consequence."],
        ["Cannot attend sleepovers because of food", true, "Psychosocial interference (A4)."],
        ["Says she wants to be thinner", false, "This would point toward anorexia and exclude ARFID."]
      ],
      met: true,
      why: "Three consequences. Any one suffices if weight or shape concern is absent."
    },
    {
      id: "n10-05", tag: "Anorexia Criterion C",
      "case": "A woman with a BMI of 16:",
      ask: "Mark the findings that meet anorexia Criterion C. Is it met?",
      items: [
        ["Says her thighs are huge", true, "Disturbed experience of shape."],
        ["Feels like a failure when she gains 200 g", true, "Undue influence on self-evaluation."],
        ["Says “I’m fine; doctors exaggerate”", true, "Lack of recognition of seriousness."],
        ["Is cold all the time", false, "A physical sign, not Criterion C."]
      ],
      met: true,
      why: "Any one of the three forms meets Criterion C; she shows all three."
    },
    {
      id: "n10-06", tag: "Anorexia subtype",
      "case": "In the last 3 months a patient with anorexia has:",
      ask: "Mark the behaviors that make the subtype binge-eating/purging. Is it binge-eating/purging type?",
      items: [
        ["Vomited after small meals several times a week", true, "Purging without bingeing counts."],
        ["Exercised 3 hours a day", false, "Restricting behavior."],
        ["Fasted on weekends", false, "Restricting behavior."],
        ["Taken diuretics weekly", true, "Purging."]
      ],
      met: true,
      why: "Recurrent purging in the last 3 months = binge-eating/purging type, even without binges."
    },
    {
      id: "n10-07", tag: "Bulimia severity",
      "case": "In a typical week a woman with bulimia:",
      ask: "Mark what counts toward severity. Is she in the severe range (8–13)?",
      items: [
        ["Vomits after 5 binges", true, "5 compensatory episodes."],
        ["Takes laxatives on 3 other days", true, "3 more."],
        ["Has 5 binges", false, "Binges set BED severity, not bulimia."],
        ["Weighs herself daily", false, "Not a compensatory behavior."]
      ],
      met: true,
      why: "5 + 3 = 8 compensatory behaviors a week = severe."
    },
    {
      id: "n10-08", tag: "Pica",
      "case": "Which of these meet pica Criteria A–C?",
      ask: "Mark the presentations that count as pica. Is any present?",
      items: [
        ["An 18-month-old mouths and swallows sand", false, "Developmentally normal under about 2 years."],
        ["A 9-year-old eats chalk daily for 3 months", true, "Persistent, inappropriate for age."],
        ["A woman eats clay as her community does for fertility", false, "Culturally supported practice."],
        ["A man eats diet crackers with little nutrition", false, "Diet products are food."]
      ],
      met: true,
      why: "Only the 9-year-old meets A–C."
    },
    {
      id: "n10-09", tag: "Low weight",
      "case": "Adults with fear of fatness and restriction:",
      ask: "Mark those whose weight can count as significantly low (Criterion A). Is it met for any?",
      items: [
        ["BMI 16.5", true, "Below 17: likely significantly low."],
        ["BMI 17.8 with amenorrhea and bradycardia", true, "17–18.5 can count with supporting physiology."],
        ["BMI 19.5 after losing 20 kg", false, "19 or more: atypical anorexia, not anorexia."],
        ["BMI 23", false, "Not underweight."]
      ],
      met: true,
      why: "BMI <17 likely; 17–18.5 by clinical judgment; ≥19 rules out anorexia."
    },
    {
      id: "n10-10", tag: "Rumination",
      "case": "A teenager brings up food after meals:",
      ask: "Mark findings consistent with rumination disorder. Is it rumination disorder?",
      items: [
        ["Effortless, without nausea or retching", true, "Typical."],
        ["Daily for 2 months", true, "At least 1 month, several times a week."],
        ["Normal GI workup", true, "Criterion B."],
        ["Does it to get rid of calories because she feels fat", false, "Points to anorexia or bulimia."]
      ],
      met: false,
      why: "Regurgitation driven by weight concern belongs to an eating disorder; rumination disorder is excluded if it occurs only during one."
    }
  ]);
})();
