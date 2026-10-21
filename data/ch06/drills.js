/* Chapter 6 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifiers, code).
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var INSIGHT = ["With good or fair insight", "With poor insight", "With absent insight/delusional beliefs"];
  var ONSET = ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"];
  var DX = ["Obsessive-compulsive disorder", "Body dysmorphic disorder", "Hoarding disorder", "Trichotillomania", "Excoriation disorder", "Other specified OCRD"];

  SP.add("ch06", "dxline", [
    {
      id: "w6-01", tag: "OCD",
      "case": "A 29-year-old man checks locks and appliances for 3 hours a day because of images of his family dying in a fire or burglary. He thinks a fire would “probably” happen if he did not check. He had motor tics as a child that have since resolved.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Insight", options: INSIGHT, answer: 1 },
        { label: "Tic-related?", options: ["Yes", "No"], answer: 0 },
        { label: "Code", options: ["F42.2", "F42.3", "F42.4", "F63.3"], answer: 0 }
      ],
      line: "**F42.2** Obsessive-compulsive disorder, with poor insight, tic-related",
      why: "“Probably true” is **poor insight**. A **past** tic disorder still qualifies for **tic-related**."
    },
    {
      id: "w6-02", tag: "OCD",
      "case": "A 52-year-old woman with lifelong contamination fears washes for 4 hours a day. She is completely convinced she will die of infection if she does not wash in her exact sequence. She has no other psychotic symptoms and no tics.",
      parts: [
        { label: "Diagnosis", options: ["Obsessive-compulsive disorder", "Delusional disorder", "OCD and delusional disorder", "Illness anxiety disorder"], answer: 0 },
        { label: "Insight", options: INSIGHT, answer: 2 },
        { label: "Code", options: ["F42.2", "F22", "F45.21", "F42.8"], answer: 0 }
      ],
      line: "**F42.2** Obsessive-compulsive disorder, with absent insight/delusional beliefs",
      why: "Complete conviction about OCD beliefs is a **specifier**, not a separate psychotic disorder."
    },
    {
      id: "w6-03", tag: "BDD",
      "case": "A 24-year-old man believes his chest and arms are too small despite being very muscular, checks them in mirrors constantly, trains 4 hours a day and uses steroids. He also thinks his hairline is receding. He says he “might be seeing it wrong, but probably not.”",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Specifiers", options: ["With muscle dysmorphia", "With good or fair insight", "With poor insight", "With absent insight/delusional beliefs", "Tic-related"], answer: [0, 2], multi: true },
        { label: "Code", options: ["F45.22", "F42.2", "F45.21", "F42.8"], answer: 0 }
      ],
      line: "**F45.22** Body dysmorphic disorder, with muscle dysmorphia, with poor insight",
      why: "Muscle dysmorphia applies **even if other areas** (hairline) are also a focus. “Probably” true = **poor insight**."
    },
    {
      id: "w6-04", tag: "BDD",
      "case": "A 20-year-old woman spends 6 hours a day on concerns that her nose is crooked and her skin scarred. She checks, compares and camouflages. She is completely certain she is deformed and that strangers stare at her. Her appearance is normal.",
      parts: [
        { label: "Diagnosis", options: ["Body dysmorphic disorder", "Delusional disorder, somatic type", "Social anxiety disorder", "Schizophrenia"], answer: 0 },
        { label: "Insight", options: INSIGHT, answer: 2 },
        { label: "Code", options: ["F45.22", "F22", "F40.10", "F42.2"], answer: 0 }
      ],
      line: "**F45.22** Body dysmorphic disorder, with absent insight/delusional beliefs",
      why: "Appearance-related delusions and ideas of reference are part of BDD. Do not diagnose delusional disorder."
    },
    {
      id: "w6-05", tag: "Hoarding",
      "case": "A 61-year-old man cannot use his dining room or bed because of stacked books, papers and electronics he believes will be valuable. He buys more at flea markets each weekend. He agrees the amount is a problem and wants help.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Specifiers", options: ["With excessive acquisition", "With good or fair insight", "With poor insight", "With absent insight/delusional beliefs"], answer: [0, 1], multi: true },
        { label: "Code", options: ["F42.3", "F42.2", "F42.8", "F63.3"], answer: 0 }
      ],
      line: "**F42.3** Hoarding disorder, with excessive acquisition, with good or fair insight",
      why: "Weekly buying of unneeded items = **excessive acquisition**. Recognizing the problem = **good or fair insight**."
    },
    {
      id: "w6-06", tag: "Trichotillomania",
      "case": "A 13-year-old girl pulls hair from her crown while reading, leaving bald patches. She has tried to stop many times and is ashamed. She does not think her hair looks wrong.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Code", options: ["F63.3", "F42.4", "F42.2", "L63.9"], answer: 0 }
      ],
      line: "**F63.3** Trichotillomania (hair-pulling disorder)",
      why: "Trichotillomania keeps its impulse-control code **F63.3**; it has no specifiers."
    },
    {
      id: "w6-07", tag: "Excoriation",
      "case": "A 25-year-old woman picks at her face and arms for hours, causing scars and infections. She has repeatedly tried to stop, is not trying to fix her appearance, and uses no drugs.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "Code", options: ["F42.4", "L98.1", "F63.3", "F42.8"], answer: 0 }
      ],
      line: "**F42.4** Excoriation (skin-picking) disorder",
      why: "DSM-5-TR uses **F42.4**; DSM-5’s original printing listed L98.1."
    },
    {
      id: "w6-08", tag: "Substance-induced",
      "case": "A 30-year-old man with severe cocaine use disorder picks his skin repetitively during binges. The picking needs clinical attention in its own right; it stops when he is abstinent.",
      parts: [
        { label: "Code", options: ["F14.288", "F14.280", "F14.988", "F42.4"], answer: 0 },
        { label: "Onset", options: ONSET, answer: 0 }
      ],
      line: "**F14.288** Severe cocaine use disorder with cocaine-induced obsessive-compulsive and related disorder, with onset during intoxication",
      why: "The manual’s own example. Substance-induced OCRD codes end in **.x88**; severe use disorder = **2**."
    },
    {
      id: "w6-09", tag: "Substance-induced",
      "case": "A 58-year-old woman with restless legs syndrome develops repetitive, compulsive sorting and arranging after ropinirole was increased. She has no use disorder. It settles when the dose is reduced.",
      parts: [
        { label: "Substance class used for coding", options: ["Amphetamine-type (or other stimulant)", "Cocaine", "Other (or unknown) substance", "Sedative, hypnotic or anxiolytic"], answer: 2 },
        { label: "Onset", options: ONSET, answer: 2 },
        { label: "Code", options: ["F19.988", "F15.988", "F19.188", "F06.8"], answer: 0 }
      ],
      line: "**F19.988** Ropinirole-induced obsessive-compulsive and related disorder, with onset after medication use",
      why: "Ropinirole is the manual’s example of a substance that fits **no class**: other (or unknown), no use disorder = 4th character **9**."
    },
    {
      id: "w6-10", tag: "Medical condition",
      "case": "A 64-year-old man develops counting and ordering compulsions 6 weeks after a caudate infarct. He is not delirious.",
      parts: [
        { label: "Diagnosis", options: ["OCRD due to another medical condition", "Obsessive-compulsive disorder", "Major neurocognitive disorder", "Unspecified OCRD"], answer: 0 },
        { label: "Specifier", options: ["With OCD-like symptoms", "With appearance preoccupations", "With hoarding symptoms", "With hair-pulling symptoms", "With skin-picking symptoms"], answer: 0 },
        { label: "Order of codes", options: ["I69.398, then F06.8", "F06.8, then I69.398", "F42.2 only", "F06.8 only"], answer: 0 }
      ],
      line: "**I69.398** Cerebral infarction; **F06.8** obsessive-compulsive and related disorder due to cerebral infarction, with OCD-like symptoms",
      why: "The manual’s own example: the medical condition is listed **immediately before** F06.8. Choose the specifier for the **predominant** symptoms."
    },
    {
      id: "w6-11", tag: "Other specified",
      "case": "A 26-year-old man bites the inside of his cheeks until they bleed and ulcerate, many times a day, and has tried repeatedly to stop. It embarrasses him at work.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 5 },
        { label: "Reason recorded", options: ["Other body-focused repetitive behavior disorder", "Obsessional jealousy", "BDD-like disorder with actual flaws", "Olfactory reference disorder"], answer: 0 },
        { label: "Code", options: ["F42.8", "F42.9", "F42.4", "F63.3"], answer: 0 }
      ],
      line: "**F42.8** Other specified obsessive-compulsive and related disorder, other body-focused repetitive behavior disorder (cheek chewing)",
      why: "Cheek chewing, lip biting and nail biting with repeated attempts to stop are recorded as other BFRB disorder."
    },
    {
      id: "w6-12", tag: "OCD and OCPD",
      "case": "A 38-year-old woman has intrusive fears of contamination and washes for 2 hours a day, which she hates. She also has, since adolescence, a rigid, perfectionistic style, cannot delegate and is preoccupied with lists and rules, which she sees as virtues. She believes the contamination is “probably not” dangerous.",
      parts: [
        { label: "Diagnoses", options: ["Obsessive-compulsive disorder", "Obsessive-compulsive personality disorder", "Hoarding disorder", "Generalized anxiety disorder"], answer: [0, 1], multi: true },
        { label: "OCD insight", options: INSIGHT, answer: 0 }
      ],
      line: "**F42.2** Obsessive-compulsive disorder, with good or fair insight; **F60.5** obsessive-compulsive personality disorder",
      why: "OCD (ego-dystonic obsessions and compulsions) and OCPD (ego-syntonic perfectionism and control) are different disorders and **can both be diagnosed**."
    }
  ]);

  SP.add("ch06", "counting", [
    {
      id: "n6-01", tag: "Obsessions",
      "case": "A 30-year-old man reports these thoughts:",
      ask: "Obsessions are recurrent, intrusive and unwanted, and the person tries to ignore, suppress or neutralize them. Mark each thought that qualifies as an obsession.",
      items: [
        ["Repeated images of pushing his father down the stairs, which horrify him and which he tries to push away", true, "Intrusive, unwanted, resisted: a harm obsession."],
        ["Daydreams about winning the lottery, which he enjoys", false, "Pleasurable thoughts are not obsessions."],
        ["Constant worry about whether he can pay his rent", false, "A **real-life** worry, as in GAD."],
        ["Recurrent thoughts that he is worthless, consistent with his low mood", false, "Mood-congruent **rumination** of depression."],
        ["An urge to shout obscenities in church that he fights by praying silently", true, "An unwanted urge, neutralized by a mental compulsion."],
        ["A belief that his thoughts are being inserted by a neighbor", false, "**Thought insertion** points to psychosis (Criterion D)."]
      ],
      met: true,
      why: "Two thoughts are true obsessions. The others are pleasurable thoughts, worries, depressive rumination and a psychotic symptom."
    },
    {
      id: "n6-02", tag: "Compulsions",
      "case": "Which behaviors meet the definition of a compulsion?",
      ask: "Compulsions are driven responses to an obsession or rigid rules, aimed at reducing distress or preventing harm, and unrealistic or clearly excessive. They are not done for pleasure.",
      items: [
        ["Arranging books symmetrically so that her mother will not get sick", true, "Not realistically connected to the feared outcome."],
        ["Gambling every night because it is exciting, though it ruins her finances", false, "Pleasurable behavior is not a compulsion."],
        ["Counting to 100 in her head after each intrusive blasphemous thought", true, "A mental compulsion that neutralizes an obsession."],
        ["Showering for 3 hours after touching a doorknob", true, "Clearly excessive, in response to contamination fear."],
        ["Checking the door once before bed", false, "Ordinary checking, not excessive."]
      ],
      met: true,
      why: "Three qualify. Pleasurable behaviors and ordinary single checks do not."
    },
    {
      id: "n6-03", tag: "OCD Criterion B",
      "case": "A 22-year-old with contamination obsessions and washing rituals:",
      ask: "Criterion B needs symptoms that are time-consuming (e.g., more than 1 hour a day) or cause clinically significant distress or impairment. Mark the findings that support Criterion B.",
      items: [
        ["Spends about 40 minutes a day washing", false, "Under the 1-hour example on its own."],
        ["Has stopped using public transport and dropped a course", true, "Impairment."],
        ["Is intensely distressed by the thoughts", true, "Clinically significant distress."]
      ],
      met: true,
      why: "Criterion B is met through **distress and impairment**, even though time is under an hour: the rule is “time-consuming **or** distress or impairment.”"
    },
    {
      id: "n6-04", tag: "BDD",
      "case": "A 19-year-old woman is preoccupied with her “huge” nose, which looks normal to others:",
      ask: "BDD Criterion B needs repetitive behaviors or mental acts at some point. Mark the findings that count.",
      items: [
        ["Checks her nose in every mirror and phone screen", true, "Mirror checking."],
        ["Compares her nose with every woman she meets", true, "Comparing is a **mental act**."],
        ["Asks her sister several times a day whether it looks big", true, "Reassurance seeking."],
        ["Feels sad about her appearance", false, "An emotion, not a repetitive behavior."],
        ["Wears her hair forward to hide it", true, "Camouflaging."]
      ],
      met: true,
      why: "Four repetitive behaviors or mental acts: Criterion B is met."
    },
    {
      id: "n6-05", tag: "BDD threshold",
      "case": "A 30-year-old man with a large, clearly visible facial birthmark spends hours checking and covering it and avoids dating:",
      ask: "Does he meet BDD Criterion A?",
      items: [
        ["Preoccupation is excessive and impairing", true, "Supports a disorder."],
        ["The flaw is clearly observable to others", false, "BDD needs flaws **not observable or slight**."],
        ["He performs checking and camouflaging", true, "Supports BDD-like features."]
      ],
      met: false,
      why: "Criterion A fails because the flaw is clearly visible. Diagnose **other specified OCRD, BDD-like disorder with actual flaws**."
    },
    {
      id: "n6-06", tag: "Hoarding",
      "case": "A 55-year-old woman:",
      ask: "Mark the findings that support the criteria for hoarding disorder.",
      items: [
        ["Cannot throw away old magazines because she might need an article", true, "Difficulty discarding from a perceived need to save (A, B)."],
        ["Her garage and attic are full, but the house is tidy", false, "Clutter must compromise **active living areas** (C)."],
        ["Becomes very upset when her husband discards anything", true, "Distress at discarding (B)."],
        ["Her collection of stamps is catalogued in albums", false, "Organized, selective **collecting**."]
      ],
      met: false,
      why: "Difficulty discarding and distress are present, but active living areas are usable (and not because of a third party). Criterion C is not met."
    },
    {
      id: "n6-07", tag: "Hoarding Criterion C",
      "case": "A 68-year-old man whose house was fully cleared by his children 2 weeks ago:",
      ask: "Mark the findings that support Criterion C.",
      items: [
        ["His living room is currently clear", false, "Clear only because of third-party intervention."],
        ["The clearing was done by his children against his wishes", true, "Third-party intervention: Criterion C can still be met."],
        ["Before the clearing, he could not use his kitchen or bed", true, "Cluttered active living areas."]
      ],
      met: true,
      why: "If living areas are uncluttered only because of **third parties**, Criterion C is still met."
    },
    {
      id: "n6-08", tag: "Trichotillomania",
      "case": "A 16-year-old boy:",
      ask: "Mark the findings that meet the trichotillomania criteria.",
      items: [
        ["Pulls hair from his eyebrows, leaving visible gaps", true, "Pulling with hair loss (A)."],
        ["Has tried to stop several times with a fidget toy", true, "Repeated attempts to stop (B)."],
        ["Feels a sense of relief after pulling", false, "An associated feature, **not required**."],
        ["Is embarrassed and avoids swimming", true, "Distress and impairment (C)."],
        ["Pulls because he thinks his eyebrows are uneven and ugly", false, "This would point to **BDD** (E); here he says it is not about appearance."]
      ],
      met: true,
      why: "A–C are met; relief is not a criterion. Confirm that appearance is not the motive before diagnosing F63.3."
    },
    {
      id: "n6-09", tag: "Excoriation exclusions",
      "case": "Four people pick their skin. Mark those whose picking can count toward excoriation disorder.",
      ask: "Excoriation disorder excludes picking due to substances, medical conditions, psychosis, BDD, stereotypies or self-harm intent.",
      items: [
        ["A woman who picks scabs automatically while watching TV and keeps trying to stop", true, "Fits excoriation disorder."],
        ["A man who picks only during methamphetamine binges", false, "Substance-induced."],
        ["A teenager who picks to make her skin look smooth", false, "Appearance motive: BDD."],
        ["A man with scabies who scratches constantly", false, "Medical condition."]
      ],
      met: true,
      why: "Only the first person’s picking counts toward excoriation disorder."
    },
    {
      id: "n6-10", tag: "Substance vs primary",
      "case": "A 28-year-old with compulsive skin picking and stimulant use. Mark the findings that point to a **primary** OCRD rather than a substance-induced one:",
      ask: "Primary disorder: symptoms that preceded use, persist about a month after intoxication ends, or recur without substances.",
      items: [
        ["Began picking at 14, years before any stimulant use", true, "Preceded use."],
        ["Still picks daily after 3 months of abstinence", true, "Persists well beyond about 1 month."],
        ["Picks more during binges", false, "Substances can worsen a primary disorder; this alone does not settle it."]
      ],
      met: true,
      why: "Onset before use and persistence in abstinence point to **excoriation disorder** (plus the stimulant use disorder)."
    }
  ]);
})();
