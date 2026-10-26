/* Chapter 12 practice drills.
   dxline:   build the full diagnosis line (diagnosis, subtype, specifiers, code). Codes unchanged through October 2026.
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var SEV = ["Mild", "Moderate", "Severe"];
  var INS_DUR = ["Episodic", "Persistent", "Recurrent"];
  var DUR3 = ["Acute", "Subacute", "Persistent"];
  var COMOR = ["With mental disorder", "With medical condition", "With another sleep disorder", "No comorbidity specifier"];
  var NT = ["Type 1: with cataplexy or hypocretin deficiency", "Type 2: without cataplexy, hypocretin not low or not measured", "Type 1 picture due to a medical condition", "Type 2 picture due to a medical condition"];
  var ONSET = ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"];
  var TYPE = ["Insomnia type", "Daytime sleepiness type", "Parasomnia type", "Mixed type"];

  SP.add("ch12", "dxline", [
    {
      id: "w12-01", tag: "Insomnia",
      "case": "A 38-year-old teacher has woken at 3 or 4 a.m. and lain awake at least five nights a week for 7 months, with 8 hours set aside for sleep. He also meets criteria for major depressive disorder, single episode, moderate, which began 5 months ago. The insomnia started first, distresses him in its own right, and the team is planning separate treatment for it. Sleep apnea, substances and medications have been excluded.",
      parts: [
        { label: "Diagnosis", options: ["Insomnia disorder", "Other specified insomnia disorder", "No separate diagnosis: insomnia is a symptom of the depression", "Hypersomnolence disorder", "Substance/medication-induced sleep disorder"], answer: 0 },
        { label: "Comorbidity specifier", options: COMOR, answer: 0 },
        { label: "Duration", options: INS_DUR, answer: 1 },
        { label: "Codes, in order", options: ["F32.1, then F51.01", "F51.01, then F32.1", "F51.01 only", "G47.00, then F32.1", "F51.11, then F32.1"], answer: 1 }
      ],
      line: "**F51.01** Insomnia disorder, with major depressive disorder, persistent; **F32.1** major depressive disorder, single episode, moderate",
      why: "Maintenance and early-waking trouble on 3 or more nights a week for over 3 months, adequate opportunity, and enough severity to need its own attention. You do not have to decide which disorder caused which. One code (F51.01) covers the specifier, and the comorbid disorder’s code goes **immediately after** it (p. 410)."
    },
    {
      id: "w12-02", tag: "Narcolepsy",
      "case": "A 22-year-old student has needed several naps a day for 2 years despite 8 hours of sleep at night. Several times a week, when she laughs, her jaw sags and her knees give way for a few seconds while she stays fully aware. CSF hypocretin has not been measured. No medical or neurological cause is found.",
      parts: [
        { label: "Diagnosis", options: ["Narcolepsy", "Hypersomnolence disorder", "Functional neurological symptom disorder", "Other specified hypersomnolence disorder"], answer: 0 },
        { label: "Subtype", options: NT, answer: 0 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code", options: ["G47.419", "G47.411", "G47.421", "F51.11", "G47.429"], answer: 1 }
      ],
      line: "**G47.411** Narcolepsy with cataplexy or hypocretin deficiency (type 1), moderate",
      why: "Sleep need 3 or more times a week for over 3 months plus emotion-triggered cataplexy (B1) makes type 1; no CSF test is needed. Several naps daily with cataplexy every few days is **moderate** (p. 422)."
    },
    {
      id: "w12-03", tag: "OSA",
      "case": "A 55-year-old man has a sleep study after a preoperative screen. He denies snoring, his wife has noticed nothing, and he feels rested by day. Polysomnography shows 38 obstructive apneas and hypopneas per hour; central events are rare.",
      parts: [
        { label: "Diagnosis", options: ["No disorder: he has no symptoms", "Obstructive sleep apnea hypopnea", "Central sleep apnea", "Sleep-related hypoventilation", "Primary snoring"], answer: 1 },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Code", options: ["G47.31", "G47.36", "G47.33", "R06.3"], answer: 2 }
      ],
      line: "**G47.33** Obstructive sleep apnea hypopnea, severe",
      why: "An AHI of 15 or more meets Criterion A2 **whatever the symptoms**. Severity follows the AHI: above 30 is severe (p. 429)."
    },
    {
      id: "w12-04", tag: "Central apnea",
      "case": "A 46-year-old man with a moderate opioid use disorder takes high doses of long-acting oxycodone obtained from several prescribers. He is sleepy and foggy by day. Polysomnography shows 22 central apneas per hour with an ataxic breathing pattern and few obstructive events.",
      parts: [
        { label: "Diagnosis", options: ["Idiopathic central sleep apnea", "Central sleep apnea comorbid with opioid use", "Obstructive sleep apnea hypopnea", "Opioid-induced sleep disorder, daytime sleepiness type", "Sleep-related hypoventilation, comorbid"], answer: 1 },
        { label: "Codes, in order", options: ["G47.37, then F11.20", "G47.37 only", "F11.20, then G47.37", "F11.282 only", "F11.10, then G47.37"], answer: 2 }
      ],
      line: "**F11.20** moderate opioid use disorder; **G47.37** central sleep apnea comorbid with opioid use",
      why: "Five or more central apneas per hour on PSG. When an opioid use disorder is present it is coded **first** (F11.10 mild, F11.20 moderate or severe); with no use disorder, G47.37 stands alone (p. 435)."
    },
    {
      id: "w12-05", tag: "Narcolepsy",
      "case": "A 34-year-old man with myotonic dystrophy type 1 sleeps 8 hours a night yet has fallen asleep at work every day for a year. He has never had cataplexy. After 2 weeks of regular sleep documented by actigraphy and a normal overnight study, his MSLT shows a mean sleep latency of 6 minutes with REM in three naps. CSF hypocretin is normal.",
      parts: [
        { label: "Subtype", options: NT.concat(["Hypersomnolence disorder, with medical condition"]), answer: 3 },
        { label: "Codes, in order", options: ["G47.429, then G71.11", "G71.11, then G47.429", "G47.419 only", "G71.11, then G47.421", "F51.11, then G71.11"], answer: 1 }
      ],
      line: "**G71.11** myotonic dystrophy; **G47.429** narcolepsy without cataplexy and without hypocretin deficiency due to myotonic dystrophy",
      why: "A positive MSLT (8 minutes or less with two or more SOREMPs) and no cataplexy or low hypocretin gives a type 2 picture; with a causal medical condition, the condition is coded **first** (p. 422)."
    },
    {
      id: "w12-06", tag: "Circadian",
      "case": "A 17-year-old cannot fall asleep before 2:30 a.m. on school nights and keeps missing first period. On weekends she sleeps from 2:30 to 10:30 a.m. and wakes refreshed. Her father and grandfather have kept the same late hours all their lives. The pattern has lasted 2 years and her grades are falling.",
      parts: [
        { label: "Type", options: ["Advanced sleep phase type", "Delayed sleep phase type", "Non-24-hour sleep-wake type", "Irregular sleep-wake type", "Insomnia disorder (not circadian)"], answer: 1 },
        { label: "Specifiers", options: ["Familial", "Overlapping with non-24-hour sleep-wake type", "Episodic", "Persistent", "Recurrent"], answer: [0, 3], multi: true },
        { label: "Code", options: ["G47.22", "G47.24", "G47.20", "G47.21", "F51.01"], answer: 3 }
      ],
      line: "**G47.21** Circadian rhythm sleep-wake disorder, delayed sleep phase type, familial, persistent",
      why: "Normal sleep when she sets her own late schedule points to **timing**, not insomnia. Family history earns **familial**; 3 months or longer is **persistent** (pp. 443–444)."
    },
    {
      id: "w12-07", tag: "NREM arousal",
      "case": "A 29-year-old woman who sleepwalked as a child finds food wrappers and a dirty pan in the kitchen on 2–3 mornings a week for 6 months, with no memory of getting up. Her partner has seen her eating with a blank stare about an hour after falling asleep; she is very hard to rouse. She takes no hypnotic, and polysomnography shows no apnea.",
      parts: [
        { label: "Diagnosis", options: ["NREM sleep arousal disorder, sleep terror type", "Night eating syndrome", "NREM sleep arousal disorder, sleepwalking type", "REM sleep behavior disorder", "Binge-eating disorder"], answer: 2 },
        { label: "Specifiers", options: ["With sleep-related eating", "With sleep-related sexual behavior (sexsomnia)"], answer: [0], multi: true },
        { label: "Code", options: ["F51.4", "F51.3", "G47.52", "F51.5"], answer: 1 }
      ],
      line: "**F51.3** Non–rapid eye movement sleep arousal disorder, sleepwalking type, with sleep-related eating",
      why: "Early-night incomplete arousals, blank stare, hard to wake and amnesia. In night eating syndrome the person is **fully awake** when eating (pp. 452–453, 456)."
    },
    {
      id: "w12-08", tag: "Nightmares",
      "case": "A 32-year-old veteran developed PTSD after combat 2 years ago. For the past 8 months he has had terrifying dreams of being hunted every night, waking fully alert and unable to get back to sleep. His other PTSD symptoms have eased with therapy; the nightmares are now his main problem and are being targeted with their own treatment.",
      parts: [
        { label: "Diagnosis", options: ["No separate diagnosis: nightmares are part of PTSD", "NREM sleep arousal disorder, sleep terror type", "REM sleep behavior disorder", "Nightmare disorder"], answer: 3 },
        { label: "Comorbidity specifier", options: COMOR, answer: 0 },
        { label: "Duration", options: DUR3, answer: 2 },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Codes, in order", options: ["F51.5, then F43.10", "F43.10, then F51.5", "F51.5 only", "F43.10 only"], answer: 0 }
      ],
      line: "**F51.5** Nightmare disorder, with posttraumatic stress disorder, persistent, severe; **F43.10** posttraumatic stress disorder",
      why: "Nightmares frequent and severe enough to need **independent** attention earn their own diagnosis. Six months or more is persistent; nightly is severe. The PTSD code follows F51.5 (pp. 457–458, 460)."
    },
    {
      id: "w12-09", tag: "Substance-induced",
      "case": "A 50-year-old man with severe alcohol use disorder stopped drinking 10 days ago. His tremor and sweating have settled, but he sleeps 2–3 broken hours a night with vivid dreams and is begging for sleeping pills. The insomnia now dominates the picture and needs its own plan. Before his drinking began he slept well.",
      parts: [
        { label: "Diagnosis", options: ["Alcohol withdrawal only", "Insomnia disorder, with alcohol use disorder", "Alcohol-induced sleep disorder", "Alcohol withdrawal delirium"], answer: 2 },
        { label: "Onset", options: ONSET, answer: 1 },
        { label: "Type", options: TYPE, answer: 0 },
        { label: "Code", options: ["F10.182", "F10.282", "F10.982", "F10.20 and F10.282", "F10.230"], answer: 1 }
      ],
      line: "**F10.282** Severe alcohol use disorder with alcohol-induced sleep disorder, with onset during withdrawal, insomnia type",
      why: "Used **instead of** withdrawal because the sleep problem predominates and needs attention of its own. The use disorder is named first inside the single code (4th character 2 for moderate or severe) and is **not** coded again (pp. 468–470)."
    },
    {
      id: "w12-10", tag: "Substance-induced",
      "case": "A 26-year-old programmer on a deadline drinks six to eight cups of strong coffee a day, the last at about 9 p.m. For 3 weeks he has lain awake until 3 a.m. most nights, restless and with a racing heart in the evenings, and is making mistakes at work. He slept well before; insomnia is his main complaint.",
      parts: [
        { label: "Diagnosis", options: ["Insomnia disorder", "Caffeine-induced sleep disorder", "Caffeine intoxication only", "Other specified insomnia disorder"], answer: 1 },
        { label: "Onset", options: ONSET, answer: 0 },
        { label: "Type", options: TYPE, answer: 0 },
        { label: "Code", options: ["F15.182", "F15.282", "F15.920", "F15.982", "F19.982"], answer: 3 }
      ],
      line: "**F15.982** Caffeine-induced sleep disorder, with onset during intoxication, insomnia type",
      why: "Caffeine use disorder is not an official DSM diagnosis, so there is only **one** code, F15.982 (p. 469). The manual uses heavy coffee as its own example of this diagnosis (p. 416)."
    },
    {
      id: "w12-11", tag: "Substance-induced",
      "case": "A 61-year-old man began fluoxetine for depression 2 months ago. Since then his wife says he shouts and punches in his sleep in the early morning; when woken he is alert and describes fighting off an attacker. Polysomnography shows REM sleep without atonia. He never did this before, and his neurological examination is normal.",
      parts: [
        { label: "Diagnosis", options: ["REM sleep behavior disorder", "Fluoxetine-induced sleep disorder", "NREM sleep arousal disorder, sleepwalking type", "Nightmare disorder"], answer: 1 },
        { label: "Onset", options: ONSET, answer: 2 },
        { label: "Type", options: TYPE, answer: 2 },
        { label: "Code", options: ["G47.52", "F13.982", "F19.982", "F19.182", "F15.982"], answer: 2 }
      ],
      line: "**F19.982** Fluoxetine-induced sleep disorder, with onset after medication use, parasomnia type",
      why: "The manual places RBD that appears with **SSRIs, SNRIs or TCAs** under substance/medication-induced sleep disorder, though the drug may only unmask a predisposition (p. 463). Fluoxetine fits no listed class, so it takes the **other (or unknown) substance** code with the drug named (pp. 469–470). Keep watching for signs of a synucleinopathy."
    },
    {
      id: "w12-12", tag: "Substance-induced",
      "case": "A 40-year-old woman with a moderate tobacco use disorder (a pack a day for 20 years) stopped smoking abruptly 5 days ago. Her irritability is manageable, but she now wakes many times a night and gets about 4 hours of sleep. The insomnia is her chief complaint and needs its own plan.",
      parts: [
        { label: "Diagnosis", options: ["Tobacco withdrawal only", "Insomnia disorder", "Tobacco-induced sleep disorder", "Other specified insomnia disorder"], answer: 2 },
        { label: "Onset", options: ONSET, answer: 1 },
        { label: "Type", options: TYPE, answer: 0 },
        { label: "Code", options: ["F17.282", "F17.208", "F17.982", "F17.188", "F17.210"], answer: 1 }
      ],
      line: "**F17.208** Moderate tobacco use disorder with tobacco-induced sleep disorder, with onset during withdrawal, insomnia type",
      why: "ICD-10-CM assumes this disorder occurs only with a **moderate or severe** tobacco use disorder, so there is a single code, F17.208 (p. 469)."
    },
    {
      id: "w12-13", tag: "Residual",
      "case": "Since her husband’s cancer diagnosis 6 weeks ago, a 52-year-old woman has needed over an hour to fall asleep and has woken at 3 a.m. on five nights a week, despite 8 hours in bed. She is exhausted and missing work. No mood, anxiety, substance or other sleep disorder is present. The clinician wants to record why full criteria are not met.",
      parts: [
        { label: "Diagnosis", options: ["Insomnia disorder, episodic", "Other specified insomnia disorder", "Unspecified insomnia disorder", "Other specified sleep-wake disorder"], answer: 1 },
        { label: "Reason recorded", options: ["Short-term insomnia disorder", "Restricted to nonrestorative sleep", "Brief-duration hypersomnolence", "Insufficient information"], answer: 0 },
        { label: "Code", options: ["G47.00", "F51.01", "G47.09", "G47.8"], answer: 2 }
      ],
      line: "**G47.09** Other specified insomnia disorder, short-term insomnia disorder",
      why: "Everything is met except the **3-month** duration. The note under the criteria sends short insomnia to other specified insomnia disorder; the episodic specifier does not rescue it (pp. 410, 475)."
    },
    {
      id: "w12-14", tag: "Residual",
      "case": "A 16-year-old boy has had four episodes in 2 years, each lasting about 10 days, in which he sleeps up to 20 hours a day and seems confused and detached when awake. Between episodes his sleep, alertness, mood and behavior are completely normal. The clinician wants to name the pattern.",
      parts: [
        { label: "Diagnosis", options: ["Hypersomnolence disorder", "Narcolepsy", "Unspecified hypersomnolence disorder", "Other specified hypersomnolence disorder", "Bipolar I disorder"], answer: 3 },
        { label: "Reason recorded", options: ["Short-term insomnia disorder", "Brief-duration hypersomnolence (as in Kleine-Levin syndrome)", "Insufficient sleep", "Insufficient information"], answer: 1 },
        { label: "Code", options: ["G47.10", "F51.11", "G47.19", "G47.8"], answer: 2 }
      ],
      line: "**G47.19** Other specified hypersomnolence disorder, brief-duration hypersomnolence (Kleine-Levin syndrome)",
      why: "Short recurrent episodes cannot meet the 3-times-a-week-for-3-months rule. The manual’s example for this category is **Kleine-Levin syndrome** (p. 475); its detailed clinical features are outside the DSM."
    },
    {
      id: "w12-15", tag: "Hypersomnolence",
      "case": "A 24-year-old graduate student sleeps 10 hours a night yet wakes unrefreshed and groggy, needs three alarms, and struggles to stay awake in seminars on 3 or 4 days each week. This has lasted 18 months. Diaries confirm regular hours; polysomnography shows no apnea; the MSLT shows a mean latency of 7 minutes with no SOREMPs. No cataplexy, normal mood, no drugs or medications.",
      parts: [
        { label: "Diagnosis", options: ["Narcolepsy type 2", "Insufficient sleep", "Hypersomnolence disorder", "Major depressive disorder, with atypical features", "Long sleeper (no disorder)"], answer: 2 },
        { label: "Duration", options: DUR3, answer: 2 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code", options: ["G47.10", "G47.419", "F51.11", "G47.19"], answer: 2 }
      ],
      line: "**F51.11** Hypersomnolence disorder, persistent, moderate",
      why: "Sleepiness despite at least 7 hours of sleep, with an unrefreshing main sleep over 9 hours and sleep inertia, more than 3 months. No SOREMPs rules out narcolepsy type 2. Severity is set by **days a week** with trouble staying alert: 3–4 is moderate (pp. 417–418)."
    }
  ]);

  SP.add("ch12", "counting", [
    {
      id: "n12-01", tag: "Insomnia Criterion A",
      "case": "A 41-year-old man who is unhappy with his sleep describes these problems:",
      ask: "Mark the findings that count as Criterion A symptoms of insomnia disorder. Is at least one present?",
      items: [
        ["Takes 90 minutes to fall asleep most nights after a normal bedtime", true, "Difficulty initiating sleep."],
        ["Wakes three times a night and lies awake about half an hour each time", true, "Difficulty maintaining sleep."],
        ["Wakes at 4 a.m. after an 11 p.m. bedtime and cannot get back to sleep", true, "Early-morning awakening."],
        ["Feels tired and irritable in the afternoons", false, "A daytime consequence (Criterion B territory), not an A symptom."],
        ["Gets only 5 hours because he works two jobs and goes to bed at 2 a.m.", false, "Not enough opportunity to sleep: sleep deprivation, which fails Criterion E."]
      ],
      need: 1,
      met: true,
      why: "Criterion A is dissatisfaction with the amount or quality of sleep plus at least one of trouble falling asleep, staying asleep, or waking too early (p. 409)."
    },
    {
      id: "n12-02", tag: "Hypersomnolence Criterion A",
      "case": "A 30-year-old woman sleeps 7½ hours every night and complains of excessive sleepiness:",
      ask: "Mark the findings that count toward hypersomnolence disorder Criterion A. Is at least one present?",
      items: [
        ["Dozes off at her desk twice most days", true, "Repeated lapses into sleep within the same day (A1)."],
        ["Needs half an hour and several alarms to become fully awake, groggy and irritable meanwhile", true, "Difficulty becoming fully awake after abrupt waking: sleep inertia (A3)."],
        ["Her 7½-hour night is unrefreshing", false, "A2 needs an unrefreshing main sleep of **more than 9 hours**."],
        ["Feels physically drained but cannot nap when she tries", false, "Fatigue, not sleepiness."],
        ["Snores loudly with pauses her partner has noticed", false, "Points to a breathing disorder to rule out (Criterion D), not an A symptom."]
      ],
      need: 1,
      met: true,
      why: "Sleepiness despite a main sleep of at least 7 hours, plus one of: lapses into sleep, an unrefreshing main sleep over 9 hours, or sleep inertia (p. 417)."
    },
    {
      id: "n12-03", tag: "Narcolepsy Criterion B",
      "case": "A 20-year-old has had irresistible sleep lapses every day for 6 months. Findings:",
      ask: "Mark the findings that satisfy narcolepsy Criterion B. Is at least one present?",
      items: [
        ["Knees buckle for a few seconds when he laughs at a joke, a few times a month, fully aware throughout", true, "Cataplexy (B1)."],
        ["CSF hypocretin-1 of 95 pg/mL, measured with no acute brain injury, inflammation or infection", true, "110 pg/mL or less: hypocretin deficiency (B2)."],
        ["Sleep paralysis on waking twice a week", false, "Supportive, but not a B criterion."],
        ["Vivid images when falling asleep", false, "Hypnagogic hallucinations are supportive only."],
        ["MSLT mean sleep latency 6 minutes with REM in one nap", false, "B3 needs a mean latency of 8 minutes or less **and two or more** SOREMPs."]
      ],
      need: 1,
      met: true,
      why: "B1 or B2 alone is enough, and either makes it **type 1 (G47.411)** (p. 422)."
    },
    {
      id: "n12-04", tag: "OSA Criterion A",
      "case": "Five patients have polysomnography with these results:",
      ask: "Mark each patient who meets OSA Criterion A. Do at least three meet it?",
      items: [
        ["AHI 9; no snoring, no witnessed pauses, wakes refreshed, not sleepy or fatigued", false, "5 or more counts only with a symptom (A1); 9 is below the A2 threshold of 15."],
        ["AHI 9 with loud snoring reported by his wife", true, "A1: at least 5 plus a nighttime breathing disturbance."],
        ["AHI 18; denies every symptom", true, "A2: 15 or more regardless of symptoms."],
        ["AHI 4 with loud snoring and daytime sleepiness", false, "Below 5: snoring or sleepiness from another cause."],
        ["AHI 12 with unrefreshing sleep and fatigue that no other disorder explains", true, "A1: at least 5 plus a daytime symptom."]
      ],
      need: 3,
      met: true,
      why: "A1 needs an AHI of at least 5 **plus** a night or day symptom; A2 needs 15 or more with or without symptoms (p. 429)."
    },
    {
      id: "n12-05", tag: "RLS Criterion A",
      "case": "A 58-year-old woman has had a crawling feeling in her calves with an urge to move them on 5 days a week for 6 months.",
      ask: "Mark the Criterion A features that are present. All three are required: is Criterion A met?",
      items: [
        ["The urge starts when she sits or lies still", true, "A1: begins or worsens with rest or inactivity."],
        ["Walking around eases it for as long as she keeps moving", true, "A2: relieved by movement."],
        ["It is just as bad at 10 a.m. as at 10 p.m. during equal periods of sitting", false, "A3 needs worsening in the evening or night (or symptoms only then)."],
        ["Her mother had similar symptoms", false, "Family history is supportive, not a criterion."]
      ],
      need: 3,
      met: false,
      why: "The urge must have **all three** features: rest, relief by movement and evening worsening (pp. 464–465). Without the circadian pattern, look for a mimic."
    },
    {
      id: "n12-06", tag: "NREM arousal",
      "case": "Parents describe their 9-year-old son’s night episodes:",
      ask: "Mark the findings that fit an NREM sleep arousal disorder. Do at least four fit?",
      items: [
        ["Episodes come about an hour after he falls asleep", true, "First third of the main sleep period."],
        ["Walks about with eyes open and a blank stare", true, "Sleepwalking; eyes are typically open."],
        ["Very hard to wake during an episode", true, "Part of Criterion A1."],
        ["Remembers nothing the next morning", true, "Amnesia (Criterion C)."],
        ["Wakes fully and tells a detailed story of being chased", false, "Quick alertness and vivid recall point to nightmares."],
        ["Identical movements several times a night, including in daytime naps", false, "Stereotyped, frequent episodes and naps suggest seizures."]
      ],
      need: 4,
      met: true,
      why: "Early-night incomplete arousals, unresponsiveness, little dream recall and amnesia define the NREM arousal disorders (pp. 452, 455–456)."
    },
    {
      id: "n12-07", tag: "RBD A–D",
      "case": "A 68-year-old man’s wife says he punches and shouts in his sleep. No sleep study has been done, and he has no diagnosis of Parkinson’s disease or another synucleinopathy.",
      ask: "Mark each REM sleep behavior disorder criterion that is met. Are A through D all met?",
      items: [
        ["A: repeated arousals with shouting and punching", true, "Vocalization and complex movements."],
        ["B: episodes in the last part of the night, never in the first hour", true, "Fits REM timing (usually more than 90 minutes after sleep onset)."],
        ["C: when woken he is at once alert and describes a dream of a fight", true, "Fully awake, not confused."],
        ["D: REM without atonia on PSG, or a suggestive history plus an established synucleinopathy", false, "Neither is present."]
      ],
      need: 4,
      met: false,
      why: "Criterion D is unmet. Arrange polysomnography, or record **other specified sleep-wake disorder (G47.8)** with the reason (pp. 461, 476)."
    },
    {
      id: "n12-08", tag: "Nightmare disorder",
      "case": "A 25-year-old woman describes her bad nights:",
      ask: "Mark the findings that fit nightmare disorder. Are at least four present?",
      items: [
        ["Long, vivid dreams of being attacked that she can recount in detail", true, "Criterion A."],
        ["Mostly in the second half of the night", true, "REM sleep dominates late in the night."],
        ["Oriented and alert soon after waking", true, "Criterion B."],
        ["Dreads bedtime and is tired and error-prone at work", true, "Distress and impairment (Criterion C)."],
        ["Shouts, thrashes and leaves the bed during the dreams", false, "Dream enactment suggests REM sleep behavior disorder; REM atonia usually stops movement in nightmares."],
        ["Confused and inconsolable in the episodes, with no memory the next day", false, "That is the sleep terror pattern."]
      ],
      need: 4,
      met: true,
      why: "Well-remembered dysphoric dreams, late-night timing, quick alertness and distress or impairment (pp. 457–458)."
    },
    {
      id: "n12-09", tag: "Substance-induced Criterion B",
      "case": "A 33-year-old man’s severe insomnia is his chief complaint.",
      ask: "Mark the findings that satisfy Criterion B of substance/medication-induced sleep disorder. Both parts are required: is Criterion B met?",
      items: [
        ["The insomnia began during a week of daily methamphetamine binges", true, "B1: onset during intoxication."],
        ["Methamphetamine is capable of causing insomnia", true, "B2: the substance can produce the symptom."],
        ["He had years of insomnia before he ever used stimulants", false, "This bears on Criterion C: it suggests an independent sleep disorder."],
        ["His mother has insomnia", false, "Irrelevant to Criterion B."]
      ],
      need: 2,
      met: true,
      why: "B needs **both** onset with intoxication or withdrawal (or medication exposure) and a capable substance (p. 468). B is met here, but the earlier insomnia counts against Criterion C."
    },
    {
      id: "n12-10", tag: "Circadian A–C",
      "case": "A 45-year-old factory worker moved to permanent night shifts 6 weeks ago.",
      ask: "Mark the findings that satisfy the circadian rhythm sleep-wake disorder criteria. Are Criteria A, B and C all met?",
      items: [
        ["His sleep problem comes from a mismatch between his body clock and the night-work schedule", true, "Criterion A: misalignment with a required schedule."],
        ["Sleeps 4 broken hours after his shift and fights sleep at work", true, "Criterion B: insomnia and sleepiness."],
        ["Two near misses driving home and a warning from his supervisor", true, "Criterion C: impairment."],
        ["Symptoms have lasted only 6 weeks", false, "Not a barrier: the circadian criteria have **no** minimum duration; 6 weeks is the episodic specifier."]
      ],
      need: 3,
      met: true,
      why: "All three are met: **circadian rhythm sleep-wake disorder, shift work type (G47.26), episodic** (pp. 443–444, 450)."
    }
  ]);
})();
