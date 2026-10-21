/* Chapter 4 practice drills.
   dxline:   build the full diagnosis line (diagnosis, coded specifiers, uncoded specifiers, code).
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var MDD_EP = ["Single episode", "Recurrent episode"];
  var MDD_SEV = ["Mild", "Moderate", "Severe", "With psychotic features", "In partial remission", "In full remission"];
  var MDD_SPEC = ["With anxious distress", "With mixed features", "With melancholic features", "With atypical features", "With mood-congruent psychotic features", "With mood-incongruent psychotic features", "With catatonia", "With peripartum onset", "With seasonal pattern"];
  function mdd(ep, sev, spec, codes, code) {
    return [
      { label: "Diagnosis", options: ["Major depressive disorder", "Persistent depressive disorder", "Bipolar II disorder", "Other specified depressive disorder"], answer: 0 },
      { label: "Single or recurrent", options: MDD_EP, answer: ep },
      { label: "Severity, psychotic features or remission (the coded slot)", options: MDD_SEV, answer: sev },
      { label: "Specifiers without codes", options: MDD_SPEC, answer: spec, multi: true },
      { label: "ICD-10-CM code", options: codes, answer: code }
    ];
  }

  SP.add("ch04", "dxline", [
    {
      id: "w4-01", tag: "MDD",
      "case": "A 42-year-old man has his third major depressive episode in 6 years; between episodes he was well for years. He has six of the nine symptoms, struggles at work but is still working, and the distress is substantial but manageable with support. Most days he feels keyed up, restless and worried something awful will happen. No psychosis.",
      parts: mdd(1, 1, [0], ["F32.1", "F33.0", "F33.1", "F33.2"], 2),
      line: "**F33.1** Major depressive disorder, recurrent episode, moderate, with anxious distress (moderate)",
      why: "Well between episodes for more than 2 months makes this **recurrent** (F33). Symptoms and impairment between mild and severe are **moderate** (F33.1). Three anxious distress symptoms make the anxious distress **moderate**. Order: diagnosis, single or recurrent, severity, then uncoded specifiers."
    },
    {
      id: "w4-02", tag: "MDD",
      "case": "A 63-year-old woman has her first major depressive episode: eight of nine symptoms, unable to care for herself. Nothing gives her pleasure and good news does not lift her mood; she is worst in the morning, wakes 3 hours early, has lost weight and is markedly slowed. No psychosis.",
      parts: mdd(0, 2, [2], ["F32.1", "F32.2", "F32.3", "F33.2"], 1),
      line: "**F32.2** Major depressive disorder, single episode, severe, with melancholic features",
      why: "First episode = single (F32). Symptoms far beyond those required with marked impairment = **severe** (F32.2). Loss of pleasure and lack of reactivity plus morning worsening, early waking, weight loss and psychomotor change = **melancholic features**."
    },
    {
      id: "w4-03", tag: "MDD",
      "case": "Three weeks after delivering her first child, a 29-year-old has a severe first major depressive episode and believes she is an evil mother who has already damaged her baby beyond repair. She has no history of mood episodes.",
      parts: mdd(0, 3, [4, 7], ["F32.2", "F32.3", "F33.3", "F32.9"], 1),
      line: "**F32.3** Major depressive disorder, single episode, with mood-congruent psychotic features, with peripartum onset",
      why: "Psychotic features fill the coded slot and are coded **regardless of severity** (F32.3). Delusions of guilt and inadequacy are **mood-congruent**. Onset within 4 weeks of delivery = **with peripartum onset**. F33.3 would need a previous episode."
    },
    {
      id: "w4-04", tag: "MDD",
      "case": "A 37-year-old with recurrent major depressive disorder has improved on treatment. Over the last 5 weeks she has had low mood and poor sleep but no longer meets full criteria. In the most recent episode, her mood brightened with good news, she slept 11 hours a day, gained weight and felt her limbs were heavy.",
      parts: mdd(1, 4, [3], ["F33.1", "F33.41", "F33.42", "F32.4"], 1),
      line: "**F33.41** Major depressive disorder, recurrent episode, in partial remission, with atypical features",
      why: "Symptoms still present without full criteria = **partial remission** (F33.41). Remission replaces severity in the coded slot. When MDD is in remission, the uncoded specifiers describe the **most recent** episode: atypical features."
    },
    {
      id: "w4-05", tag: "MDD",
      "case": "A 30-year-old has had major depressive episodes every October or November for the last 4 years, each remitting by March, with no other episodes in his life and no seasonal stressors. This November’s episode is mild: five symptoms, manageable distress, minor impairment. He sleeps much more and craves carbohydrates.",
      parts: mdd(1, 0, [8], ["F32.0", "F33.0", "F33.1", "F33.9"], 1),
      line: "**F33.0** Major depressive disorder, recurrent episode, mild, with seasonal pattern",
      why: "Recurrent and mild = **F33.0**. Two seasonal episodes in the last 2 years, seasonal remissions, no nonseasonal episodes and no seasonal stressor = **with seasonal pattern**. Hypersomnia and carbohydrate craving are typical but do not by themselves make atypical features (no mood reactivity, leaden paralysis or rejection sensitivity described)."
    },
    {
      id: "w4-06", tag: "MDD",
      "case": "A 26-year-old has a first major depressive episode of moderate severity. On most days his partner notices he is unusually talkative, his thoughts race, and he takes on several new projects, although he feels miserable. He has never had a hypomanic or manic episode.",
      parts: mdd(0, 1, [1], ["F32.1", "F31.81", "F33.1", "F32.89"], 0),
      line: "**F32.1** Major depressive disorder, single episode, moderate, with mixed features",
      why: "Three manic/hypomanic symptoms on most days of the episode, observable by others, without ever meeting criteria for hypomania or mania = **with mixed features**. F31.81 is bipolar II, which needs a full hypomanic episode."
    },
    {
      id: "w4-07", tag: "MDD",
      "case": "A 55-year-old with recurrent major depressive disorder is admitted in a severe episode. Through most of the episode he has been mute, rigidly holds odd postures and resists being moved. No delusions or hallucinations; medical causes excluded.",
      parts: mdd(1, 2, [6], ["F33.2", "F33.2 plus F06.1", "F06.1 alone", "F33.3"], 1),
      line: "**F33.2** Major depressive disorder, recurrent episode, severe, with catatonia; **F06.1** catatonia associated with major depressive disorder",
      why: "With catatonia carries a coding note: use the additional code **F06.1**. Recurrent and severe = F33.2."
    },
    {
      id: "w4-08", tag: "PDD",
      "case": "A 34-year-old has felt low most days since age 17, with poor appetite, low self-esteem and hopelessness, never well for more than a few weeks. She has never met full criteria for a major depressive episode. Most days she feels tense and worried she cannot concentrate. Impairment is moderate.",
      parts: [
        { label: "Diagnosis", options: ["Persistent depressive disorder", "Major depressive disorder, recurrent", "Cyclothymic disorder", "Other specified depressive disorder"], answer: 0 },
        { label: "Course over the last 2 years", options: ["With pure dysthymic syndrome", "With persistent major depressive episode", "With intermittent major depressive episodes, with current episode", "With intermittent major depressive episodes, without current episode"], answer: 0 },
        { label: "Onset", options: ["Early onset (before 21)", "Late onset (21 or older)"], answer: 0 },
        { label: "Features specifiers", options: ["With anxious distress", "With atypical features", "With melancholic features", "With mixed features"], answer: [0], multi: true },
        { label: "ICD-10-CM code", options: ["F34.1", "F33.1", "F34.81", "F32.89"], answer: 0 }
      ],
      line: "**F34.1** Persistent depressive disorder, with anxious distress, early onset, with pure dysthymic syndrome, moderate",
      why: "The manual sets no strict recording order for PDD; this line follows the order of the specifiers in the criteria set. No full MDE in the preceding 2 years = **pure dysthymic syndrome**; onset at 17 = **early onset**. Only **anxious distress** and **atypical features** are available as features specifiers for PDD; melancholic and mixed features are not. PDD has one code, F34.1."
    },
    {
      id: "w4-09", tag: "Substance-induced",
      "case": "A 31-year-old with moderate methamphetamine use disorder stopped using 3 days ago. Since then he has had depressed mood, anhedonia, hypersomnia and suicidal thoughts that dominate the picture and need clinical attention. He has no history of depression when not using.",
      parts: [
        { label: "Comorbid use disorder (named first)", options: ["None", "Mild methamphetamine use disorder", "Moderate methamphetamine use disorder", "Severe methamphetamine use disorder"], answer: 2 },
        { label: "Substance-induced disorder", options: ["Methamphetamine-induced depressive disorder", "Major depressive disorder", "Stimulant withdrawal", "Unspecified depressive disorder"], answer: 0 },
        { label: "Onset", options: ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"], answer: 1 },
        { label: "ICD-10-CM code", options: ["F15.14", "F15.24", "F15.94", "F14.24"], answer: 1 }
      ],
      line: "**F15.24** moderate methamphetamine use disorder with methamphetamine-induced depressive disorder, with onset during withdrawal",
      why: "Methamphetamine is an amphetamine-type substance (F15). A **moderate or severe** comorbid use disorder makes the 4th character **2**. The use disorder is written first, then “with,” then the induced disorder and the onset; no separate use disorder diagnosis is given."
    },
    {
      id: "w4-10", tag: "Medical cause",
      "case": "A 47-year-old with newly diagnosed, untreated hypothyroidism has low mood, fatigue and slowed thinking that began with the thyroid symptoms. She does not meet full criteria for a major depressive episode, but the symptoms need clinical attention.",
      parts: [
        { label: "Listed first", options: ["E03.9 hypothyroidism", "The depressive disorder"], answer: 0 },
        { label: "Diagnosis", options: ["Depressive disorder due to hypothyroidism", "Major depressive disorder", "Adjustment disorder with depressed mood", "Persistent depressive disorder"], answer: 0 },
        { label: "Specifier", options: ["With depressive features", "With major depressive–like episode", "With mixed features"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F06.31", "F06.32", "F06.34", "F32.89"], answer: 0 }
      ],
      line: "**E03.9** hypothyroidism; **F06.31** depressive disorder due to hypothyroidism, with depressive features",
      why: "The medical condition is coded and listed **first**. Full MDE criteria are not met, so the specifier is **with depressive features** (F06.31); F06.32 is for a full major depressive–like episode and F06.34 for mixed manic features."
    },
    {
      id: "w4-11", tag: "PMDD",
      "case": "A 33-year-old describes, from memory, a year of marked irritability, mood swings, anxiety, fatigue and bloating in the week before her period, gone a few days after it starts. She has not yet completed daily symptom ratings.",
      parts: [
        { label: "Diagnosis", options: ["Premenstrual dysphoric disorder", "Premenstrual syndrome", "Other specified depressive disorder", "Major depressive disorder"], answer: 0 },
        { label: "Status", options: ["Confirmed", "Provisional"], answer: 1 },
        { label: "ICD-10-CM code", options: ["F32.81", "F32.89", "F34.81", "N94.3"], answer: 0 }
      ],
      line: "**F32.81** Premenstrual dysphoric disorder, provisional",
      why: "Without prospective daily ratings over at least two symptomatic cycles, “provisional” is added after the name. PMDD is F32.81 (F34.81 is DMDD; F32.89 is other specified depressive disorder)."
    }
  ]);

  SP.add("ch04", "counting", [
    {
      id: "k4-01", tag: "MDE Criterion A",
      "case": "A 50-year-old with untreated hypothyroidism has had 3 weeks of the following.",
      ask: "Criterion A needs five of nine symptoms, including depressed mood or loss of interest, nearly every day for 2 weeks. Symptoms clearly attributable to another medical condition do not count. Mark each finding.",
      items: [
        ["Feels sad and empty most of the day, nearly every day", true, "Depressed mood (A1)."],
        ["Has lost interest in his woodworking and in seeing friends", true, "Diminished interest or pleasure (A2)."],
        ["Wakes at 4 a.m. nearly every night", true, "Insomnia (A4)."],
        ["Cold intolerance and dry skin", false, "Not a depressive symptom at all."],
        ["Tiredness that his endocrinologist attributes entirely to his low thyroid", false, "Symptoms **clearly and fully** attributable to another medical condition are not counted."],
        ["Feels guilty that his illness is a burden on his wife", false, "Self-reproach or guilt **about being sick** does not count unless it is excessive or delusional."],
        ["Cannot concentrate on reading, nearly every day", true, "Diminished ability to think or concentrate (A8)."],
        ["Has thought several times that he would be better off dead", true, "Recurrent thoughts of death (A9)."]
      ],
      need: 5, met: true,
      why: "Five symptoms count (depressed mood, anhedonia, insomnia, poor concentration, thoughts of death), including both core symptoms. Criterion A is met, but you must still decide whether the whole episode is attributable to hypothyroidism (Criterion C)."
    },
    {
      id: "k4-02", tag: "MDE Criterion A in youth",
      "case": "A 13-year-old girl, for the past 2½ weeks:",
      ask: "Which findings count toward Criterion A for a major depressive episode in an adolescent?",
      items: [
        ["Irritable and angry most of the day, nearly every day", true, "In children and adolescents, **irritable mood** can stand in for depressed mood."],
        ["Has not gained the expected weight since her last checkup", true, "In children, **failure to make expected weight gain** counts for A3."],
        ["Sleeps 11 hours and still naps after school", true, "Hypersomnia (A4)."],
        ["Says she feels “antsy inside,” but no one has noticed any restlessness", false, "Psychomotor agitation or retardation must be **observable by others**, not merely a subjective feeling."],
        ["Says she is “stupid and worthless” nearly every day", true, "Worthlessness (A7)."],
        ["Got angry and slammed a door once last week", false, "A single outburst is not a criterion symptom."]
      ],
      need: 5, met: false,
      why: "Four symptoms clearly count (irritable mood, weight, hypersomnia, worthlessness). Without a fifth, Criterion A is not met yet; ask about anhedonia, energy, concentration and thoughts of death."
    },
    {
      id: "k4-03", tag: "Mixed features",
      "case": "During most days of a major depressive episode, a 40-year-old man:",
      ask: "With mixed features needs at least three of seven manic/hypomanic symptoms. Three symptoms are deliberately **not** counted in depression. Mark each finding.",
      items: [
        ["Is much more talkative than usual", true, "More talkative or pressured speech counts."],
        ["Is easily distracted", false, "**Distractibility** is excluded because it overlaps with depressive poor concentration."],
        ["Is irritable with his family", false, "**Irritability** is excluded from depressive mixed features."],
        ["Paces and cannot sit still", false, "**Psychomotor agitation** is excluded because it occurs in depression too."],
        ["Says his thoughts are racing", true, "Racing thoughts or flight of ideas counts."],
        ["Sleeps 4 hours and feels rested", true, "**Decreased need for sleep** counts; insomnia with fatigue would not."],
        ["Spent $8,000 on a sports car on impulse", true, "Excessive involvement in risky activities counts."]
      ],
      need: 3, met: true,
      why: "Four of the seven count, so the mixed features specifier applies, provided the symptoms are observable by others and a change from usual, and full hypomania or mania has never been met."
    },
    {
      id: "k4-04", tag: "Melancholic features",
      "case": "At the worst point of her major depressive episode, a 58-year-old woman:",
      ask: "Melancholic features need one A item (loss of pleasure in almost everything, or lack of reactivity) and three B items. Mark the findings that count.",
      items: [
        ["Brightens briefly, to about a third of normal, when her grandchildren visit", true, "Brightening only partially (20%–40% of normal) for minutes still counts as **lack of reactivity** (A2)."],
        ["Says her mood is “sadder than ever before”", false, "A mood that is merely more severe is **not** a distinct quality; the quality must feel different in kind (despair, emptiness)."],
        ["Is worst in the mornings", true, "Depression regularly worse in the morning (B2)."],
        ["Wakes at 5 a.m.; her usual time is 6:30", false, "Early-morning awakening must be **at least 2 hours** before usual."],
        ["Has lost 6 kg without trying", true, "Significant anorexia or weight loss (B5)."],
        ["Feels excessively guilty about minor past failings", true, "Excessive or inappropriate guilt (B6)."]
      ],
      met: true,
      why: "A is met by lack of reactivity; B is met by morning worsening, weight loss and guilt (three items). Melancholic features apply."
    },
    {
      id: "k4-05", tag: "Atypical features",
      "case": "During a major depressive episode, a 27-year-old man:",
      ask: "Atypical features need mood reactivity plus two of four B items, and cannot be used with melancholic features or catatonia. Mark each finding.",
      items: [
        ["His mood lifts for the evening when friends invite him out", true, "**Mood reactivity** (A)."],
        ["Sleeps 10 to 11 hours a day", true, "Hypersomnia: at least 10 hours a day, or 2 hours more than when well."],
        ["Feels his arms and legs are heavy, like lead, for hours", true, "Leaden paralysis (B3)."],
        ["Has become very sensitive to criticism, only during this episode", false, "Rejection sensitivity must be a **long-standing trait**, present when not depressed too."],
        ["Has lost his appetite", false, "Atypical features need **increased** appetite or weight gain."]
      ],
      met: true,
      why: "Mood reactivity plus hypersomnia and leaden paralysis: atypical features apply."
    },
    {
      id: "k4-06", tag: "Anxious distress",
      "case": "During most days of her current major depressive episode, a 45-year-old woman:",
      ask: "Anxious distress needs at least two of five symptoms. Count them, then rate severity in your head (2 mild, 3 moderate, 4–5 moderate-severe, 4–5 with motor agitation severe).",
      items: [
        ["Feels keyed up and tense", true, "Symptom 1."],
        ["Has panic attacks twice a month", false, "Panic attacks are a separate specifier (in another chapter), not an anxious distress symptom."],
        ["Cannot concentrate because she worries constantly", true, "Symptom 3: difficulty concentrating **because of worry**."],
        ["Fears she might lose control of herself", true, "Symptom 5."],
        ["Avoids crowded shops", false, "Avoidance is not one of the five symptoms."]
      ],
      need: 2, met: true,
      why: "Three symptoms count: anxious distress, **moderate**. Anxious distress predicts higher suicide risk and poorer treatment response, so record its severity."
    },
    {
      id: "k4-07", tag: "PDD Criterion B",
      "case": "A 40-year-old man has felt low most days for 5 years. While depressed he:",
      ask: "PDD Criterion B needs two of six symptoms. Several core MDE symptoms are deliberately not on the PDD list. Mark each finding.",
      items: [
        ["Has lost interest in his hobbies", false, "**Anhedonia** is not a PDD B symptom."],
        ["Often thinks life is not worth living", false, "**Suicidal ideation** is not a PDD B symptom."],
        ["Feels guilty much of the time", false, "**Guilt** is not on the PDD list; **low self-esteem** is."],
        ["Feels hopeless about the future", true, "Hopelessness (B6)."],
        ["Has trouble making decisions", true, "Poor concentration or difficulty making decisions (B5)."]
      ],
      need: 2, met: true,
      why: "Hopelessness and indecision satisfy Criterion B. The PDD list is: appetite change, sleep change, low energy, low self-esteem, poor concentration or indecision, hopelessness."
    },
    {
      id: "k4-08", tag: "PMDD symptom count",
      "case": "In the final week before most periods over the past year, a 30-year-old woman has:",
      ask: "PMDD needs at least five symptoms in total, with at least one from Criterion B (affective). Physical symptoms together count as **one** Criterion C item. Mark which findings add to the count.",
      items: [
        ["Marked irritability and conflicts with her partner", true, "Criterion B2."],
        ["Breast tenderness", true, "Physical symptoms (C7): this is the first physical symptom, so it counts once."],
        ["Bloating", false, "Also physical: breast tenderness, bloating, joint pain and weight gain together make **one** item, already counted."],
        ["Food cravings", true, "Marked change in appetite or specific food cravings (C4)."],
        ["Feels overwhelmed", true, "Sense of being overwhelmed or out of control (C6)."],
        ["Headaches", false, "Another physical symptom, inside the single C7 item."]
      ],
      need: 5, met: false,
      why: "Only four items count (irritability, physical symptoms, cravings, feeling overwhelmed). One short of five: ask about mood lability, depressed mood, anxiety, interest, concentration, energy and sleep before deciding."
    },
    {
      id: "k4-09", tag: "Seasonal pattern",
      "case": "A 36-year-old woman with recurrent major depressive disorder:",
      ask: "Which findings support the seasonal pattern specifier?",
      items: [
        ["Her last two episodes began in November and remitted in March", true, "Regular onset (A) and remission (B) at a characteristic time of year."],
        ["She has had no nonseasonal episodes in the last 2 years", true, "Criterion C."],
        ["Over her lifetime, six winter episodes and one summer episode after a divorce", true, "Seasonal episodes **substantially outnumber** nonseasonal ones (D)."],
        ["She works as a teacher and dreads the start of every school year in September", false, "A seasonal **psychosocial stressor** argues against seasonal pattern, and her episodes start in November anyway."],
        ["She craves carbohydrates and oversleeps during episodes", false, "Typical of seasonal episodes but **not a criterion**."]
      ],
      met: true,
      why: "Criteria A–D are met: with seasonal pattern applies. Typical features such as hypersomnia and carbohydrate craving are descriptive, not required."
    },
    {
      id: "k4-10", tag: "DMDD requirements",
      "case": "An 8-year-old boy is evaluated for possible disruptive mood dysregulation disorder.",
      ask: "Mark the findings that satisfy a DMDD requirement.",
      items: [
        ["Severe temper outbursts about twice a week", false, "Outbursts must occur on average **three or more times per week**."],
        ["Irritable or angry most of the day, nearly every day, noticed by his teacher", true, "Criterion D, observable by others."],
        ["Symptoms for 15 months, never a break longer than 3 weeks", true, "≥12 months, never 3 consecutive months without symptoms."],
        ["Outbursts at home and at school, severe at home", true, "Two of three settings, severe in at least one."],
        ["Onset at age 7", true, "Onset before 10."]
      ],
      met: false,
      why: "Everything fits except outburst frequency: twice a week is below the required average of three. DMDD cannot be diagnosed yet; consider other diagnoses and follow up."
    }
  ]);
})();
