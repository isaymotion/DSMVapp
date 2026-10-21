/* Chapter 4 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch04", "mnemonics", [
  {
    id: "m4-01", short: "+ depressed mood; 5 of 9 for 2 weeks, including mood or interest", name: "SIGECAPS", dx: "mdd", sec: "s4-mdd-criteria",
    "for": "Major depressive episode: eight of the nine Criterion A symptoms (“prescribe SIG: Energy CAPSules”)",
    letters: [
      ["S", "Sleep", "Insomnia or hypersomnia nearly every day"],
      ["I", "Interest, diminished", "Loss of interest or pleasure (anhedonia): a core symptom"],
      ["G", "Guilt", "Or worthlessness; not merely guilt about being ill"],
      ["E", "Energy, low", "Fatigue nearly every day"],
      ["C", "Concentration, poor", "Or indecisiveness"],
      ["A", "Appetite", "Or weight change: more than 5% in a month; in children, failure to make expected gains"],
      ["P", "Psychomotor change", "Agitation or retardation, observable by others"],
      ["S", "Suicide", "Recurrent thoughts of death or suicidal ideation, or an attempt or specific plan"]
    ],
    caveat: "SIGECAPS leaves out **depressed mood** itself. Criterion A needs **5 of the 9** (depressed mood plus the eight SIGECAPS items) for **2 weeks**, and one of the five must be **depressed mood or loss of interest**."
  },
  {
    id: "m4-02", short: "Depressed mood + 2 of 6; never well >2 months", name: "HE’S 2 SAD", dx: "pdd", sec: "s4-pdd-criteria",
    "for": "Persistent depressive disorder: the time rule and the six Criterion B symptoms",
    letters: [
      ["H", "Hopelessness", ""],
      ["E", "Energy, low", "Or fatigue"],
      ["S", "Self-esteem, low", ""],
      ["2", "2 years", "Depressed mood more days than not; 1 year in children and adolescents"],
      ["S", "Sleep", "Insomnia or hypersomnia"],
      ["A", "Appetite", "Poor appetite or overeating"],
      ["D", "Decisions, difficult", "Or poor concentration"]
    ],
    caveat: "Depressed mood is the core (Criterion A), plus **2 of the 6** symptoms, never symptom-free for more than **2 months**. Anhedonia, guilt, psychomotor change and suicidality are **not** on the PDD list."
  },
  {
    id: "m4-03", short: "Mood reactivity + 2 of 4; not with melancholic features or catatonia", name: "R + HEAL", original: true, dx: "mdd", sec: "s4-spec-melancholic-atypical",
    "for": "With atypical features",
    letters: [
      ["R", "Reactive mood", "Required: mood brightens with actual or potential good news"],
      ["H", "Hypersomnia", "At least 10 hours a day, or 2 hours more than when not depressed"],
      ["E", "Eating more", "Significant weight gain or increased appetite"],
      ["A", "Arms and legs like lead", "Leaden paralysis, usually for an hour or more a day"],
      ["L", "Long-standing rejection sensitivity", "A trait, present when not depressed too, causing impairment"]
    ],
    caveat: "Mood reactivity **plus 2 of the 4** HEAL features. It cannot be used if **melancholic features** or **catatonia** apply to the same episode."
  },
  {
    id: "m4-04", short: "Mixed features needs 3 other manic symptoms", name: "DIP: the three that don’t count", original: true, dx: "mdd", sec: "s4-spec-anxious-mixed",
    "for": "Manic symptoms not counted toward mixed features in a depressive episode",
    letters: [
      ["D", "Distractibility", "Overlaps with depressive poor concentration"],
      ["I", "Irritability", "Common in depression itself"],
      ["P", "Psychomotor agitation", "Also a depressive symptom"]
    ],
    caveat: "Mixed features needs **3** of: elevated mood, grandiosity, talkativeness, racing thoughts, increased energy or activity, risky activities and **decreased need for sleep**, on most days of the episode and observable by others. Full mania or hypomania means bipolar disorder instead."
  },
  {
    id: "m4-05", short: "+ irritability between outbursts; never a manic-like period >1 day", name: "3-12-2, 6-18-10", original: true, dx: "dmdd", sec: "s4-dmdd-criteria",
    "for": "Disruptive mood dysregulation disorder: the numbers",
    letters: [
      ["3", "Outbursts a week", "On average three or more"],
      ["12", "Months", "Never 3 consecutive months without symptoms"],
      ["2", "Settings of 3", "Home, school, peers; severe in at least one"],
      ["6–18", "Age at first diagnosis", "Not diagnosed for the first time before 6 or after 18"],
      ["10", "Onset before age 10", ""]
    ],
    caveat: "Plus **persistent irritability between outbursts**, and never a manic-like period lasting **more than 1 day**. DMDD absorbs ODD and intermittent explosive disorder but yields to bipolar disorder."
  }
]);
