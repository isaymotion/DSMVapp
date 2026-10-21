/* Chapter 3 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch03", "mnemonics", [
  {
    id: "m3-01", name: "DIGFAST", dx: "bipolar-i", sec: "s3-manic",
    "for": "Manic and hypomanic episodes: the seven Criterion B symptoms",
    letters: [
      ["D", "Distractibility", "Attention drawn too easily to unimportant stimuli"],
      ["I", "Indiscretion", "Excessive involvement in risky activities: spending sprees, sexual indiscretions, foolish investments"],
      ["G", "Grandiosity", "Inflated self-esteem"],
      ["F", "Flight of ideas", "Or the subjective feeling that thoughts are racing"],
      ["A", "Activity increase", "More goal-directed activity, or psychomotor agitation"],
      ["S", "Sleep, decreased need", "Feels rested after little sleep (not insomnia)"],
      ["T", "Talkativeness", "More talkative than usual, or pressure to keep talking"]
    ],
    caveat: "DIGFAST lists only the B symptoms. First you need a distinct period of **abnormally elevated, expansive or irritable mood and increased energy or activity**, then **3** B symptoms (**4** if the mood is only irritable). Mania lasts **≥1 week** (any duration if hospitalized); hypomania **≥4 consecutive days**."
  },
  {
    id: "m3-02", name: "Hypo 4, Mania 7", original: true, dx: "bipolar-ii", sec: "s3-hypomanic",
    "for": "Episode time rules in the bipolar chapter",
    letters: [
      ["4", "Hypomanic episode", "At least 4 consecutive days, most of the day, nearly every day"],
      ["7", "Manic episode", "At least 1 week, or any duration if hospitalization is needed"],
      ["2–3", "Short-duration hypomania", "Episodes of 2–3 days with a past major depressive episode: other specified bipolar disorder"]
    ],
    caveat: "The depressive side of bipolar disorder uses the major depressive episode rule: **≥2 weeks**. Cyclothymic disorder needs **2 years** (1 in children and adolescents)."
  },
  {
    id: "m3-03", name: "PHI makes it mania", original: true, dx: "bipolar-i", sec: "s3-manic",
    "for": "Telling mania from hypomania by severity",
    letters: [
      ["P", "Psychotic features", "Any delusions or hallucinations during the episode"],
      ["H", "Hospitalization", "Needed to prevent harm to self or others"],
      ["I", "Impairment, marked", "In social or occupational functioning"]
    ],
    caveat: "Any one of the three makes the episode **manic**, whatever its length. A hypomanic episode is a clear, observable change in functioning but has **none** of them."
  }
]);
