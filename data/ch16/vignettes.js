/* Chapter 16 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch16", "vignettes", [
  {
    "id": "v16-01",
    "tag": "Alcohol withdrawal",
    "stem": "A 54-year-old man is admitted for elective knee surgery. On postoperative day 2 he is tremulous, diaphoretic, pulse 122, BP 172/98, anxious and sleepless, and says he sees small animals running across the floor, which he knows cannot be real. He is oriented to time, place and person and can attend to the interview. His wife reports he drinks about 12 beers daily, has tried and failed to cut down, needs far more beer than he used to for the same effect, has given up his weekend basketball league because of drinking, keeps drinking although his doctor told him it is damaging his liver, and drinks in the morning to steady his hands.",
    "q": "What is the most accurate diagnosis and code?",
    "choices": [
      "Alcohol withdrawal delirium, with moderate or severe alcohol use disorder (F10.231)",
      "Alcohol-induced psychotic disorder, with onset during withdrawal, with moderate or severe alcohol use disorder (F10.259)",
      "Alcohol use disorder, severe (F10.20) and alcohol withdrawal (F10.930)",
      "Alcohol withdrawal, with perceptual disturbances, with moderate or severe alcohol use disorder (F10.232)",
      "Alcohol intoxication (F10.220)"
    ],
    "answer": 3,
    "why": "Withdrawal signs with hallucinations, **intact reality testing** and **no delirium** = **with perceptual disturbances**. One combined code: **F10.232**.",
    "whyNot": [
      "He is oriented and attentive; no disturbance of consciousness.",
      "He knows the animals are not real; psychosis requires impaired reality testing.",
      "Do not code the use disorder separately, and F10.930 means no use disorder.",
      "Correct.",
      "He stopped drinking 2 days ago."
    ],
    "then": {
      "q": "Which laboratory finding most strongly predicts a severe withdrawal course?",
      "choices": [
        "High HDL cholesterol",
        "Low mean corpuscular volume (MCV)",
        "Low potassium and low platelets",
        "High albumin",
        "Normal gamma-glutamyltransferase (GGT)"
      ],
      "answer": 2,
      "why": "Predictors of severe withdrawal include **low potassium**, **low platelets**, **systolic hypertension**, and prior severe withdrawal or delirium.",
      "whyNot": [
        "Not a predictor.",
        "Heavy drinkers tend to have high-normal MCV.",
        "Correct.",
        "Not a predictor.",
        "A normal GGT is not predictive."
      ]
    }
  },
  {
    "id": "v16-02",
    "tag": "Induced vs independent",
    "stem": "A 42-year-old woman with severe alcohol use disorder is admitted with low mood, anhedonia, insomnia, guilt and passive suicidal thoughts for 3 weeks during a period of daily heavy drinking. She has no depressive episodes during her two prior years of sobriety. After 3 weeks of abstinence her mood is nearly normal.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Alcohol-induced depressive disorder, with onset during intoxication, with severe alcohol use disorder",
      "Adjustment disorder with depressed mood, in response to her drinking-related problems",
      "Major depressive disorder, single episode, independent of her alcohol use, with comorbid severe alcohol use disorder",
      "Persistent depressive disorder",
      "Alcohol intoxication only"
    ],
    "answer": 0,
    "why": "Onset during heavy use, no episodes during long sobriety and **remission within about a month** of abstinence point to an **induced** disorder.",
    "whyNot": [
      "Correct.",
      "There is no identifiable non-substance stressor driving it, and criteria for an induced disorder are met.",
      "Independent MDD would precede use, occur during abstinence or persist beyond about a month.",
      "Requires 2 years of depressed mood.",
      "The depressive syndrome is in excess of intoxication and needs attention in its own right."
    ]
  },
  {
    "id": "v16-03",
    "tag": "Opioid overdose",
    "stem": "A 26-year-old man is found unresponsive in a public restroom. Respirations 6/min, pupils pinpoint. Two doses of intranasal naloxone produce brief arousal before he becomes drowsy again. His friend says he snorted a powder sold as heroin and had taken alprazolam earlier. Urine opiate screen is negative; benzodiazepine screen is positive.",
    "q": "What best explains the negative opiate screen and the poor naloxone response?",
    "choices": [
      "He took no opioid at all; the alprazolam alone explains his miosis and slow breathing",
      "Naloxone does not work on heroin",
      "Fentanyl (missed by standard screens) plus a co-ingested benzodiazepine",
      "The benzodiazepine alone causes pinpoint pupils",
      "A false-negative screen from dilute urine is the only explanation"
    ],
    "answer": 2,
    "why": "Standard opiate screens detect morphine and miss **fentanyl**; a potent opioid and **co-ingested sedatives** blunt the naloxone response.",
    "whyNot": [
      "Miosis, respiratory depression and a partial naloxone response indicate an opioid.",
      "Naloxone reverses heroin.",
      "Correct.",
      "Benzodiazepines do not cause miosis.",
      "Possible, but fentanyl is far more likely given the clinical picture."
    ]
  },
  {
    "id": "v16-04",
    "tag": "Pain and OUD",
    "stem": "A 50-year-old woman has taken prescribed oxycodone for 3 years after spinal surgery. She has tolerance and withdrawal when doses are late. Over the past year she has run out early every month, obtained prescriptions from two other doctors without telling them, bought pills from a neighbor, spends hours planning supply, has stopped her book club, and keeps using despite worsening constipation and drowsiness at work.",
    "q": "Which statement is correct?",
    "choices": [
      "She has somatic symptom disorder",
      "She has opioid use disorder",
      "She cannot have opioid use disorder because her opioids were prescribed",
      "Only tolerance and withdrawal are present, so no diagnosis applies",
      "She has opioid withdrawal only (F11.93)"
    ],
    "answer": 1,
    "why": "Tolerance and withdrawal from supervised use do not count, but she meets other criteria (larger amounts, much time spent obtaining it from several prescribers, activities given up, use despite physical problems): **opioid use disorder**.",
    "whyNot": [
      "Her drug-seeking pattern is an opioid use disorder.",
      "Correct.",
      "Prescription opioids can lead to opioid use disorder when used nonmedically.",
      "Several other criteria are met.",
      "F11.93 is withdrawal without a use disorder."
    ]
  },
  {
    "id": "v16-05",
    "tag": "Precipitated withdrawal",
    "stem": "A man who injects fentanyl daily comes to start buprenorphine. He last used 4 hours ago and has no withdrawal symptoms. Within an hour of his first buprenorphine dose he develops severe yawning, rhinorrhea, piloerection, vomiting, diarrhea and cramps.",
    "q": "What happened?",
    "choices": [
      "An allergic reaction to buprenorphine",
      "Buprenorphine overdose with opioid toxicity",
      "Serotonin syndrome",
      "Opioid intoxication",
      "Precipitated opioid withdrawal"
    ],
    "answer": 4,
    "why": "A **partial agonist** displaces a full agonist and can **precipitate withdrawal**; induction is usually started once withdrawal is present. (p. 618; induction timing is treatment knowledge, outside the DSM.)",
    "whyNot": [
      "The signs match opioid withdrawal.",
      "Overdose causes sedation and miosis, not withdrawal.",
      "No clonus, hyperthermia or serotonergic drugs.",
      "These are withdrawal, not intoxication, signs.",
      "Correct."
    ]
  },
  {
    "id": "v16-06",
    "tag": "Benzodiazepine withdrawal",
    "stem": "A 68-year-old woman has taken lorazepam 2 mg three times daily for 15 years exactly as prescribed for panic disorder, with no dose escalation. She does not drink alcohol. She was admitted for pneumonia and the drug was not continued. On day 2 she becomes tremulous, sweaty, agitated and has a generalized seizure. Between symptoms she is alert, oriented and attentive.",
    "q": "What is the correct diagnosis?",
    "choices": [
      "Sedative, hypnotic or anxiolytic withdrawal without a use disorder (F13.930)",
      "Sedative, hypnotic or anxiolytic use disorder, severe, with withdrawal (F13.230)",
      "Panic disorder relapse",
      "Alcohol withdrawal",
      "Delirium due to pneumonia"
    ],
    "answer": 0,
    "why": "Withdrawal from a benzodiazepine **taken as prescribed** does not establish a use disorder: **F13.930**. The manual estimates that perhaps as many as 20%–30% of people in untreated withdrawal may have a grand mal seizure.",
    "whyNot": [
      "Correct.",
      "Tolerance and withdrawal from prescribed use do not count; no other criteria.",
      "Seizures are not a feature of panic disorder.",
      "She does not drink alcohol; benzodiazepine cessation explains the picture.",
      "She is alert, oriented and attentive; no disturbance of attention or awareness."
    ]
  },
  {
    "id": "v16-07",
    "tag": "Stimulant psychosis",
    "stem": "A 30-year-old man has smoked methamphetamine continuously for 4 days. He is brought in by police, pacing, convinced his neighbors are filming him through the walls and picking at “bugs” under his skin. Pupils are dilated, pulse 130, BP 170/100, temperature 38.4 °C. He has no psychiatric history. He is not reassured that the bugs are imaginary.",
    "q": "Which diagnosis best fits?",
    "choices": [
      "Delusional disorder, somatic type",
      "Amphetamine-type substance–induced psychotic disorder, with onset during intoxication",
      "Amphetamine-type substance intoxication, with perceptual disturbances",
      "Schizophrenia",
      "Bipolar I disorder, current episode manic, severe, with mood-incongruent psychotic features"
    ],
    "answer": 1,
    "why": "Delusions and hallucinations **without insight**, predominating and needing attention, during intoxication: **stimulant-induced psychotic disorder**. The perceptual-disturbance specifier requires intact reality testing.",
    "whyNot": [
      "Onset during intoxication with persecutory delusions too.",
      "Correct.",
      "The specifier applies only when reality testing is intact.",
      "No prior history; onset during a binge; expect resolution with abstinence.",
      "No mood episode is described."
    ]
  },
  {
    "id": "v16-08",
    "tag": "Stimulant withdrawal",
    "stem": "Two days after a weekend cocaine binge, a 35-year-old woman sleeps most of the day, eats heavily, has vivid nightmares, feels worthless and says she wants to die. Pulse is 52. She has moderate cocaine use disorder.",
    "q": "What is the diagnosis and the most urgent step?",
    "choices": [
      "Major depressive disorder; start an antidepressant",
      "Cocaine intoxication; give a benzodiazepine",
      "Bipolar II disorder; start a mood stabilizer",
      "Cocaine withdrawal (F14.23); assess suicide risk now",
      "Opioid withdrawal; start buprenorphine"
    ],
    "answer": 3,
    "why": "Dysphoria with hypersomnia, hunger and vivid dreams after stopping = **stimulant withdrawal**. Depression with suicidal thoughts or behavior can occur and is generally the **most serious** withdrawal problem; **bradycardia** supports it.",
    "whyNot": [
      "Withdrawal mood symptoms usually resolve within hours to days but can persist for a month; safety comes first.",
      "These are withdrawal, not intoxication, signs.",
      "No hypomania.",
      "Correct.",
      "No opioid use."
    ]
  },
  {
    "id": "v16-09",
    "tag": "PCP",
    "stem": "A 19-year-old is brought in after attacking strangers. He is agitated, has vertical and horizontal nystagmus, BP 180/110, muscle rigidity, and does not react to a deep laceration on his hand. He covers his ears at normal voices.",
    "q": "Which substance is most likely?",
    "choices": [
      "Alcohol",
      "Cocaine",
      "Phencyclidine",
      "LSD",
      "Cannabis"
    ],
    "answer": 2,
    "why": "**Nystagmus, analgesia, rigidity, hypertension, hyperacusis** and violence: **PCP intoxication**.",
    "whyNot": [
      "Alcohol causes ataxia and nystagmus but not rigidity and hyperacusis.",
      "Cocaine does not typically cause vertical nystagmus or analgesia.",
      "Correct.",
      "LSD produces perceptual changes with mydriasis, not rigidity and analgesia.",
      "Cannabis causes red eyes and appetite, not violence and nystagmus."
    ]
  },
  {
    "id": "v16-10",
    "tag": "HPPD",
    "stem": "A 23-year-old graphic designer took LSD three times in college. Eighteen months later she still sees halos around lights, trails behind moving objects and colors that seem too intense, especially in dark rooms. She knows these come from the drug and is distressed. MRI and EEG are normal.",
    "q": "What is the diagnosis?",
    "choices": [
      "Schizophrenia",
      "Other hallucinogen intoxication",
      "Migraine with aura",
      "Hallucinogen-induced psychotic disorder, with onset during intoxication",
      "Hallucinogen persisting perception disorder (F16.983)"
    ],
    "answer": 4,
    "why": "Reexperiencing intoxication perceptions while sober, with **intact reality testing**, causing distress: **HPPD**. It can follow minimal exposure and last years.",
    "whyNot": [
      "Reality testing is intact; no delusions.",
      "She has not used for 18 months.",
      "Normal workup, and the perceptions mirror LSD effects; migraine aura without headache must still be ruled out (Criterion C).",
      "She has insight.",
      "Correct."
    ]
  },
  {
    "id": "v16-11",
    "tag": "Inhalants vs other",
    "stem": "A 29-year-old line cook has inhaled nitrous oxide from whipped-cream chargers daily for a year, has failed to stop, missed work, and continues despite numbness and unsteady gait. MRI shows dorsal column changes and B12 levels are low-normal.",
    "q": "How should the substance disorder be recorded?",
    "choices": [
      "Other (or unknown) substance use disorder (nitrous oxide use disorder)",
      "Inhalant use disorder",
      "Sedative use disorder",
      "No use disorder, because nitrous oxide is a legal product sold for whipped cream",
      "Unspecified inhalant-related disorder"
    ],
    "answer": 0,
    "why": "Nitrous oxide and nitrites are **other (or unknown)** substances; only **hydrocarbons** are inhalants. Very frequent use may cause **subacute combined degeneration**.",
    "whyNot": [
      "Correct.",
      "Inhalants are volatile hydrocarbons only.",
      "Not a sedative-hypnotic.",
      "Legal status is irrelevant.",
      "Not an inhalant category."
    ]
  },
  {
    "id": "v16-12",
    "tag": "Inhalant",
    "stem": "A 13-year-old boy has repeated episodes of dizziness, slurred speech, euphoria and unsteady gait after school. Urine drug screens are always negative. His mother finds paint-stained rags and notes a rash around his nose and mouth.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Absence epilepsy",
      "Inhalant intoxication",
      "Cannabis intoxication",
      "Caffeine intoxication",
      "Opioid intoxication"
    ],
    "answer": 1,
    "why": "Recurrent intoxication with **negative screens**, paraphernalia and **glue-sniffer’s rash** in a young adolescent: **inhalants**.",
    "whyNot": [
      "Absence seizures do not cause euphoria or rash.",
      "Correct.",
      "Cannabis would show on screens and causes red eyes and appetite.",
      "Caffeine causes restlessness, not slurred speech.",
      "Opioids show miosis and usually positive screens."
    ]
  },
  {
    "id": "v16-13",
    "tag": "Cannabis",
    "stem": "A 20-year-old college student vapes high-potency cannabis several times daily. He is failing classes, has tried to cut down three times, spends most of each day getting, using or recovering from cannabis, needs much more than before, and becomes irritable, anxious and sleepless with strange dreams and no appetite when he stops. He has dropped soccer.",
    "q": "What is the severity of his cannabis use disorder?",
    "choices": [
      "Mild",
      "Moderate",
      "Severe",
      "Cannot be rated because cannabis is legal in his state",
      "No use disorder, since cannabis has no withdrawal"
    ],
    "answer": 2,
    "why": "Role failure, failed efforts, much time, tolerance, withdrawal, activities given up: **six or more** criteria = **severe**.",
    "whyNot": [
      "Mild is 2–3.",
      "Moderate is 4–5.",
      "Correct.",
      "Legal status does not matter.",
      "Cannabis withdrawal is a recognized syndrome."
    ]
  },
  {
    "id": "v16-14",
    "tag": "Cannabis medical",
    "stem": "A 60-year-old woman with chemotherapy-induced nausea uses prescribed dronabinol exactly as directed. She has developed tolerance and feels irritable and sleeps poorly if she misses doses. She has no craving, no failed attempts to cut down and no impairment from use.",
    "q": "What is the correct interpretation?",
    "choices": [
      "No cannabis use disorder",
      "Other specified cannabis-related disorder",
      "Mild cannabis use disorder",
      "Moderate cannabis use disorder",
      "Cannabis intoxication"
    ],
    "answer": 0,
    "why": "When cannabinoids are taken as medically indicated, tolerance and withdrawal **should not be the primary basis** for a use disorder.",
    "whyNot": [
      "Correct.",
      "No disorder is present.",
      "No other criteria are met.",
      "No other criteria are met.",
      "No problematic intoxication is described."
    ]
  },
  {
    "id": "v16-15",
    "tag": "Caffeine",
    "stem": "A 17-year-old drinks four energy drinks to study overnight. He becomes restless, nervous, flushed, urinates frequently, has stomach upset, muscle twitching, racing speech and a pulse of 128, and cannot finish his exam.",
    "q": "What is the diagnosis?",
    "choices": [
      "Caffeine use disorder",
      "Panic disorder",
      "Stimulant intoxication, amphetamine-type (F15.920)",
      "Caffeine intoxication (F15.920)",
      "Generalized anxiety disorder"
    ],
    "answer": 3,
    "why": "**Five or more** of 12 signs after heavy caffeine with impairment. Caffeine intoxication shares the F15 class code.",
    "whyNot": [
      "Not a Section II diagnosis.",
      "Symptoms are tied to caffeine and do not include recurrent unexpected attacks.",
      "No amphetamine was taken; record the substance as caffeine.",
      "Correct.",
      "Acute and drug-related."
    ]
  },
  {
    "id": "v16-16",
    "tag": "Caffeine withdrawal",
    "stem": "A 45-year-old woman who drinks four cups of coffee daily is fasting for a morning colonoscopy. By noon she has a severe throbbing headache, marked fatigue, irritability, difficulty concentrating and nausea. The headache resolves 40 minutes after a cup of coffee.",
    "q": "What is the diagnosis?",
    "choices": [
      "Migraine without aura",
      "Caffeine intoxication",
      "Hypoglycemia",
      "Viral illness",
      "Caffeine withdrawal (F15.93)"
    ],
    "answer": 4,
    "why": "Three or more of five symptoms **within 24 hours** of stopping daily caffeine, relieved by caffeine within 30–60 minutes.",
    "whyNot": [
      "The timing and relief with caffeine point to withdrawal.",
      "She stopped caffeine.",
      "Fasting is brief; relief by caffeine argues against it.",
      "No fever; prompt relief with caffeine.",
      "Correct."
    ]
  },
  {
    "id": "v16-17",
    "tag": "Tobacco",
    "stem": "A 40-year-old man with schizophrenia, stable on clozapine and smoking 30 cigarettes daily, is admitted to a smoke-free unit. Within a day he becomes irritable, restless, anxious, hungry and sleepless. On day 6 he is unusually sedated and drooling, and his clozapine level has doubled.",
    "q": "What explains the two phases?",
    "choices": [
      "Clozapine withdrawal, then neuroleptic malignant syndrome",
      "Tobacco withdrawal, then a rise in clozapine levels",
      "Psychotic relapse, then catatonia",
      "Alcohol withdrawal, then hepatic failure",
      "Caffeine withdrawal, then hypothyroidism"
    ],
    "answer": 1,
    "why": "**Tobacco withdrawal** (4 of 7 within 24 hours), then **higher clozapine levels**: smoking increases the metabolism of many psychotropics, an effect that appears to be due to compounds in tobacco smoke rather than nicotine.",
    "whyNot": [
      "He is still taking clozapine; no fever or rigidity.",
      "Correct.",
      "Symptoms match withdrawal; sedation follows rising drug levels.",
      "No alcohol history.",
      "Not explained by caffeine or thyroid."
    ]
  },
  {
    "id": "v16-18",
    "tag": "Tobacco coding",
    "stem": "A 33-year-old woman smokes 10 cigarettes daily. She has tried to cut down twice without success and smokes despite her asthma getting worse. She has no other criteria.",
    "q": "How is her tobacco use disorder coded?",
    "choices": [
      "F17.200",
      "F17.203",
      "Z72.0 (mild)",
      "F17.210",
      "No diagnosis"
    ],
    "answer": 2,
    "why": "Two criteria = **mild**; DSM-5-TR codes mild tobacco use disorder as **Z72.0**.",
    "whyNot": [
      "F17.200 is moderate or severe.",
      "F17.203 is tobacco withdrawal.",
      "Correct.",
      "Not the DSM-5-TR code.",
      "Two criteria meet the threshold."
    ]
  },
  {
    "id": "v16-19",
    "tag": "Gambling",
    "stem": "A 34-year-old accountant bets on sports online nightly. He needs larger bets to feel excited, returns the next day to win back losses, lies to his wife about the amount, borrowed $20,000 from his parents to cover debts, thinks about the next bet throughout the workday, and is restless when he tries to cut back. He has never had a manic or hypomanic episode.",
    "q": "What is the diagnosis and severity?",
    "choices": [
      "No disorder; sports betting is legal",
      "Gambling disorder, mild",
      "Gambling disorder, severe",
      "Gambling disorder, moderate (F63.0)",
      "Bipolar II disorder"
    ],
    "answer": 3,
    "why": "Escalating bets, chasing, lying, bailout, preoccupation and restlessness = **six** criteria: **moderate (6–7)**. Mild 4–5, severe 8–9.",
    "whyNot": [
      "Legality is irrelevant.",
      "He has six criteria.",
      "Severe needs 8–9.",
      "Correct.",
      "No hypomanic episodes."
    ]
  },
  {
    "id": "v16-20",
    "tag": "Gambling and dopamine",
    "stem": "A 66-year-old man with Parkinson’s disease starts pramipexole. Within months he gambles away his savings on slot machines, lies to his family, and is preoccupied with gambling. He had never gambled before.",
    "q": "What does DSM-5-TR say about the diagnosis?",
    "choices": [
      "Gambling disorder is still diagnosed",
      "This must be coded as a medication-induced bipolar disorder",
      "Gambling disorder is excluded because a medication caused it",
      "This is a personality change due to Parkinson’s disease",
      "No diagnosis applies"
    ],
    "answer": 0,
    "why": "Gambling symptoms that meet criteria as a consequence of **dopaminergic medication** are still diagnosed as **gambling disorder**.",
    "whyNot": [
      "Correct.",
      "There is no mood episode.",
      "The manual explicitly includes these cases.",
      "The cause is a medication, not the disease directly.",
      "Criteria are met."
    ]
  },
  {
    "id": "v16-21",
    "tag": "Antisocial PD and SUD",
    "stem": "A 28-year-old man with severe heroin use disorder has been arrested for burglary and drug dealing since age 22, always to fund heroin. As a child he was a good student with no fights, theft or truancy.",
    "q": "Does he have antisocial personality disorder?",
    "choices": [
      "Yes; three antisocial criteria are met",
      "Yes; drug dealing is enough",
      "No; antisocial PD cannot coexist with opioid use disorder",
      "Yes, if he lacks remorse",
      "No; conduct disorder before 15 is absent"
    ],
    "answer": 4,
    "why": "Antisocial behavior in the service of sustaining use, beginning in adulthood without **conduct disorder before 15**, does not establish antisocial PD (Ch 18, p. 751).",
    "whyNot": [
      "Criterion C (conduct disorder before 15) is missing.",
      "Not sufficient.",
      "They can coexist when both are met.",
      "Remorse does not replace the childhood requirement.",
      "Correct."
    ]
  },
  {
    "id": "v16-22",
    "tag": "Remission specifiers",
    "stem": "A 39-year-old man with past severe opioid use disorder has taken buprenorphine daily for 14 months. He has had no opioid use disorder criteria apart from tolerance to buprenorphine, though he still has occasional cravings.",
    "q": "How is his status recorded?",
    "choices": [
      "In early remission",
      "Severe, in sustained remission, on maintenance therapy (F11.21)",
      "Opioid use disorder, severe, current (F11.20)",
      "No diagnosis now, because his buprenorphine is prescribed by his doctor",
      "Opioid withdrawal"
    ],
    "answer": 1,
    "why": "No criteria except craving for **≥12 months** = sustained remission; agonist treatment adds **on maintenance therapy**.",
    "whyNot": [
      "Over 12 months is sustained.",
      "Correct.",
      "He meets no current criteria.",
      "The diagnosis remains, in remission.",
      "No withdrawal symptoms."
    ]
  },
  {
    "id": "v16-23",
    "tag": "Delirium tremens",
    "stem": "On day 3 of a hospital admission for GI bleeding, a 61-year-old man with severe alcohol use disorder becomes acutely confused, disoriented, fluctuating, tremulous, febrile and tachycardic, and picks at imaginary insects.",
    "q": "What is the correct diagnosis?",
    "choices": [
      "Alcohol withdrawal, with perceptual disturbances",
      "Alcohol-induced psychotic disorder",
      "Alcohol withdrawal delirium (delirium tremens)",
      "Alcohol intoxication delirium",
      "Wernicke encephalopathy only"
    ],
    "answer": 2,
    "why": "Disturbed attention and awareness during withdrawal = **alcohol withdrawal delirium**; hallucinations during delirium are part of it. A medical condition (here GI bleeding) often coexists.",
    "whyNot": [
      "The specifier requires no delirium.",
      "Symptoms only during delirium belong to the delirium.",
      "Correct.",
      "He stopped drinking 3 days ago.",
      "Consider and treat thiamine deficiency (treatment, outside the DSM), but the picture is withdrawal delirium."
    ]
  },
  {
    "id": "v16-24",
    "tag": "Synthetic cannabinoids",
    "stem": "A 22-year-old smoked “K2” from a gas station. He is agitated, paranoid, tachycardic and has a seizure. Standard urine screen for THC is negative.",
    "q": "In which class is this substance coded?",
    "choices": [
      "Inhalant",
      "Other (or unknown) substance",
      "Hallucinogen",
      "Cannabis",
      "Stimulant"
    ],
    "answer": 3,
    "why": "**Synthetic cannabinoids** (K2, Spice) are explicitly included in the **cannabis** class (p. 654); they may cause more severe adverse effects than plant cannabis, including seizures (p. 577). (That standard THC screens miss them is clinical knowledge, outside the DSM.)",
    "whyNot": [
      "Not a hydrocarbon inhalant.",
      "They are assigned to cannabis, not other.",
      "Not a hallucinogen class.",
      "Correct.",
      "Not a stimulant."
    ]
  },
  {
    "id": "v16-25",
    "tag": "Treatment AUD",
    "stem": "A 47-year-old man with severe alcohol use disorder completes detoxification and wants medication to help stay abstinent. He has chronic hepatitis with mildly raised transaminases and no kidney disease. He does not use opioids.",
    "q": "Which medication is a reasonable first choice given his liver disease?",
    "choices": [
      "Acamprosate",
      "Chlordiazepoxide long term",
      "Disulfiram",
      "Methadone",
      "Gabapentin as the only FDA-approved option"
    ],
    "answer": 0,
    "why": "**Acamprosate** is renally cleared and suits liver disease; naltrexone is also first line but needs liver monitoring; disulfiram is hepatotoxic and needs supervision. (Treatment knowledge, outside the DSM.)",
    "whyNot": [
      "Correct.",
      "Benzodiazepines are for withdrawal, not maintenance.",
      "Disulfiram carries hepatotoxicity and relies on adherence.",
      "Methadone treats opioid, not alcohol, use disorder.",
      "Gabapentin is used off-label; FDA-approved drugs are naltrexone, acamprosate and disulfiram."
    ]
  }
]);
