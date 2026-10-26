/* Chapter 12 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   Treatment items are labeled "outside the DSM". */
SP.add("ch12", "vignettes", [
  {
    "id": "v12-01",
    "tag": "Insomnia with MDD",
    "stem": "A 41-year-old teacher has had trouble staying asleep for 14 months: she wakes around 2 a.m. and lies awake for 1–2 hours on about 5 nights a week, although she sets aside 8 hours for sleep. The problem began after a hospital stay for pneumonia, about a year before her mood changed. For the past 6 weeks she has also had depressed mood most of the day, loss of interest, poor appetite with weight loss, guilt and poor concentration, meeting criteria for a single, moderate major depressive episode. She says the sleeplessness is her main problem and asks for help with it specifically. She does not snore, has no leg discomfort, keeps a regular schedule, drinks one coffee before 9 a.m. and takes no medication. She is too tired to prepare her lessons.",
    "q": "Which recording is most accurate?",
    "choices": [
      "F32.1 major depressive disorder, single episode, moderate; the insomnia is a symptom and needs no separate diagnosis",
      "F51.01 insomnia disorder, with major depressive disorder; F32.1 major depressive disorder, single episode, moderate",
      "F32.1 major depressive disorder, single episode, moderate; F51.01 insomnia disorder, secondary to depression",
      "G47.09 other specified insomnia disorder; F32.1 major depressive disorder, single episode, moderate",
      "F51.01 insomnia disorder, with mental disorder; the depression is captured by the specifier and not coded"
    ],
    "answer": 1,
    "why": "Insomnia that needs **independent clinical attention** is diagnosed alongside the depression, with **no judgment about which caused which**. Record **F51.01 insomnia disorder, with [name of the comorbid disorder]**, then the comorbid disorder’s own code **immediately after** (p. 410).",
    "whyNot": [
      "Her insomnia predates the depression, is the main complaint and needs its own treatment, so a separate diagnosis is warranted.",
      "Correct.",
      "DSM-5 dropped causal labels such as “secondary”; the specifier names the comorbid disorder, and the insomnia code comes first.",
      "Duration (14 months), frequency (5 nights a week) and impairment meet full criteria for insomnia disorder.",
      "The specifier names the comorbid disorder, and that disorder still receives its own code after F51.01."
    ],
    "discuss": [
      "Why did DSM-5 stop asking clinicians to decide whether insomnia is primary or secondary?",
      "What does the manual say about insomnia that persists after a depressive episode resolves?"
    ]
  },
  {
    "id": "v12-02",
    "tag": "Short-term insomnia",
    "stem": "A 52-year-old man lost his job 6 weeks ago. Since then he takes about 90 minutes to fall asleep and wakes at 4 a.m. on 4–5 nights a week, although he goes to bed at 11 p.m. and can sleep until 7 a.m. He worries about not sleeping, feels drained and irritable, and has made errors in two job interviews. His mood is otherwise reactive, he enjoys time with his children, and he does not meet criteria for a depressive or anxiety disorder. He does not snore, has no leg symptoms, drinks no alcohol and has one morning coffee. He had no sleep problems before the job loss.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F51.01 insomnia disorder, episodic",
      "F51.01 insomnia disorder, persistent",
      "G47.00 unspecified insomnia disorder",
      "G47.09 other specified insomnia disorder (short-term insomnia disorder)",
      "No diagnosis; poor sleep after a stressor is expected"
    ],
    "answer": 3,
    "why": "Every requirement except **Criterion D (3 months)** is met. The note under the criteria sends acute and short-term insomnia to **other specified insomnia disorder (G47.09)**, recorded with the reason, e.g., “short-term insomnia disorder” (pp. 410, 475).",
    "whyNot": [
      "An episodic specifier exists, but insomnia disorder itself requires 3 months; shorter cases go to G47.09.",
      "Persistent means 3 months or longer, and the disorder itself needs 3 months.",
      "The reason the criteria are not met is known and can be stated, so the other specified category fits better.",
      "Correct.",
      "Insomnia on 4–5 nights a week with daytime impairment warrants a diagnosis even when a stressor explains its onset."
    ]
  },
  {
    "id": "v12-03",
    "tag": "Insufficient sleep vs hypersomnolence",
    "stem": "A 29-year-old software engineer reports 2 years of daytime sleepiness. Before starting a new job 3 months ago he slept 9–10 hours a night yet woke unrefreshed and dozed in lectures. Since the job began, a 2-week diary shows bedtimes around 1 a.m. and a 6:15 a.m. alarm on workdays because he stays up finishing tasks, with sleep until 11 a.m. on weekends; on the rare nights he goes to bed at 10:30 p.m. he falls asleep within minutes. Last week he nodded off at a traffic light. His partner reports no snoring or breathing pauses, and he denies cataplexy, sleep paralysis and sleep-related hallucinations. His mood is good, he takes no medication and he drinks two coffees in the morning.",
    "q": "What is the most appropriate next step?",
    "choices": [
      "Ask him to extend his sleep to at least 8 hours nightly for 10–14 days, documented by diary or actigraphy, and reassess",
      "Arrange an MSLT next week",
      "Diagnose hypersomnolence disorder now",
      "Diagnose circadian rhythm sleep-wake disorder, delayed sleep phase type",
      "Diagnose narcolepsy type 2"
    ],
    "answer": 0,
    "why": "He currently sleeps about **5 hours** on workdays and **catches up** on weekends. Hypersomnolence disorder should not be diagnosed while the **adequacy of night sleep is in question**; a **10–14 day trial of sleep extension** clarifies the picture (pp. 417, 420).",
    "whyNot": [
      "Correct.",
      "Sleep studies need about 2 weeks of adequate, documented sleep first; sleep loss can produce misleading SOREMPs.",
      "Present sleep loss could explain the current sleepiness, so the diagnosis cannot yet be made.",
      "His late bedtimes are chosen for work, and he falls asleep quickly when he goes to bed early.",
      "No sleep study has been done, and there is no cataplexy."
    ],
    "then": {
      "q": "During the trial actigraphy confirms 8½–9½ hours of sleep nightly, yet he still dozes off 5–6 days a week, takes 1–2-hour naps that leave him groggy and needs several alarms, appearing confused for half an hour after waking. Polysomnography shows an AHI of 2, sleep efficiency of 95% and a REM latency of 90 minutes; the next-day MSLT shows a mean sleep latency of 7 minutes with no SOREMPs. What is the diagnosis?",
      "choices": [
        "Hypersomnolence disorder",
        "Narcolepsy type 2",
        "Insufficient sleep only",
        "Obstructive sleep apnea hypopnea, mild",
        "Other specified hypersomnolence disorder"
      ],
      "answer": 0,
      "why": "Sleepiness **despite at least 7 hours** of sleep, long **unrefreshing** naps and **sleep inertia**, present for far longer than **3 months**, with no apnea and **no SOREMPs**: **hypersomnolence disorder (F51.11)**. Trouble staying alert **5–7 days a week** rates **severe** (pp. 417–419).",
      "whyNot": [
        "Correct.",
        "Narcolepsy type 2 needs a nocturnal REM latency ≤ 15 minutes or two or more SOREMPs on the MSLT; he has neither, and short naps would refresh him.",
        "The sleepiness persisted after adequate sleep was restored.",
        "An AHI of 2 is below the threshold of 5.",
        "Full criteria for hypersomnolence disorder are met, so a residual category is not used."
      ]
    },
    "discuss": [
      "How would you document adequate sleep before a sleep study?"
    ]
  },
  {
    "id": "v12-04",
    "tag": "Narcolepsy type 2 to type 1",
    "stem": "A 17-year-old girl has fallen asleep in class almost every day for 8 months despite sleeping 8 hours on a regular schedule, confirmed by 2 weeks of actigraphy. A 15-minute nap leaves her refreshed for a couple of hours. She sometimes sees a figure standing at her bedroom door as she drifts off. She has never had weakness when laughing, surprised or angry. She takes no medication. Polysomnography shows no apnea and a REM latency of 40 minutes; the next-day MSLT shows a mean sleep latency of 4 minutes with SOREMPs in three of five naps. CSF hypocretin has not been measured.",
    "q": "Which diagnosis and code fit best?",
    "choices": [
      "G47.411 narcolepsy with cataplexy or hypocretin deficiency (type 1)",
      "No diagnosis until CSF hypocretin is measured",
      "F51.11 hypersomnolence disorder",
      "G47.429 narcolepsy type 2 due to a medical condition",
      "G47.419 narcolepsy without cataplexy and either without hypocretin deficiency or hypocretin unmeasured (type 2)"
    ],
    "answer": 4,
    "why": "An irrepressible need to sleep **at least 3 times a week for 3 months**, plus an MSLT with mean latency **≤ 8 minutes** and **two or more SOREMPs** after documented adequate sleep, meets Criterion B3. Without cataplexy and with hypocretin **unmeasured**, this is **type 2 (G47.419)** (pp. 422–424).",
    "whyNot": [
      "Neither cataplexy nor low hypocretin has been shown.",
      "Hypocretin testing is not required; a positive MSLT alone satisfies Criterion B.",
      "Refreshing short naps, sleep-onset hallucinations and multiple SOREMPs point to narcolepsy.",
      "No causal medical condition has been identified.",
      "Correct."
    ],
    "then": {
      "q": "Two years later, her knees buckle and her jaw sags for a few seconds whenever she laughs hard with friends, several times a month. She stays fully aware throughout. How should the diagnosis change?",
      "choices": [
        "It stays type 2; the subtype is fixed at the first diagnosis",
        "Reassign to narcolepsy type 1, G47.411",
        "Add functional neurological symptom disorder",
        "Change to G47.421, type 1 due to a medical condition",
        "Add atonic seizures and keep type 2"
      ],
      "answer": 1,
      "why": "Cataplexy can appear **years after** the sleepiness. Someone first labeled type 2 on the basis of the MSLT is **reassigned to type 1** once cataplexy emerges (p. 423).",
      "whyNot": [
        "The manual explicitly allows reassignment when cataplexy appears.",
        "Correct.",
        "Brief, laughter-triggered, bilateral weakness with preserved awareness is classic cataplexy.",
        "No medical cause has been found.",
        "Atonic seizures are not usually triggered by emotion and cause abrupt falls."
      ]
    }
  },
  {
    "id": "v12-05",
    "tag": "Narcolepsy due to medical condition",
    "stem": "A 34-year-old man with genetically confirmed myotonic dystrophy type 1 is referred by his neurologist. For a year he has fallen asleep unintentionally several times a day on at least 5 days a week, despite sleeping 8 hours a night. He has never had cataplexy. He takes no medication. Polysomnography shows an AHI of 3 and no hypoventilation; the MSLT shows a mean sleep latency of 5 minutes with SOREMPs in two naps. CSF hypocretin is in the normal range. The team judges the sleepiness to be a consequence of the myotonic dystrophy.",
    "q": "How should this be coded?",
    "choices": [
      "G47.419 narcolepsy type 2 only",
      "G47.429 narcolepsy without cataplexy and without hypocretin deficiency due to myotonic dystrophy; G71.11 myotonic dystrophy",
      "G71.11 myotonic dystrophy; G47.429 narcolepsy without cataplexy and without hypocretin deficiency due to myotonic dystrophy",
      "G71.11 myotonic dystrophy; G47.421 narcolepsy with cataplexy or hypocretin deficiency due to myotonic dystrophy",
      "F51.11 hypersomnolence disorder, with medical condition; G71.11 myotonic dystrophy"
    ],
    "answer": 2,
    "why": "Criteria A and B3 are met, with no cataplexy and normal hypocretin (a **type 2** picture), attributed to a medical condition. **Code the medical condition first**, then **G47.429**; the manual uses this very pairing as its example (p. 422). NT2-like findings are reported in myotonic dystrophy (p. 423).",
    "whyNot": [
      "The cause is a medical condition, which has its own subtype.",
      "The medical condition is coded first.",
      "Correct.",
      "There is no cataplexy and hypocretin is normal, so the type 1 subtype does not apply.",
      "The positive MSLT with two SOREMPs meets narcolepsy Criterion B3."
    ]
  },
  {
    "id": "v12-06",
    "tag": "Pseudocataplexy",
    "stem": "A 26-year-old call-center worker reports collapsing 3–4 times a week for 5 months, usually after arguments with her supervisor or when she feels anxious. Each episode lasts 15–30 minutes; she slides to the floor with her eyes closed and afterward says she was “dreaming.” She has never collapsed while laughing. She sleeps 7½ hours a night, rarely naps and is not sleepy during the day. During an episode in clinic, her weakness is generalized and her knee and ankle reflexes remain brisk. A home video shows no jerking, She has no dizziness, dimming of vision or muffled hearing beforehand. On an MSLT she says she slept and dreamed in several naps, but the mean sleep latency is 14 minutes with no SOREMPs.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Narcolepsy type 1",
      "Functional neurological symptom disorder (pseudocataplexy)",
      "Atonic seizures",
      "Vasovagal syncope",
      "Narcolepsy type 2"
    ],
    "answer": 1,
    "why": "Long episodes with **unusual triggers**, frequent falls, **generalized** weakness without partial attacks, **intact reflexes**, and reported dreaming in naps **without SOREMPs** point to pseudocataplexy (p. 428). True cataplexy lasts seconds to about 2 minutes, follows mostly positive emotion and **abolishes** reflexes in full attacks (pp. 423–425).",
    "whyNot": [
      "She has no daytime sleepiness (Criterion A), and her episodes are too long and keep reflexes intact.",
      "Correct.",
      "Atonic seizures cause abrupt, brief falls and are not usually emotion-triggered; video and EEG findings do not fit.",
      "There is no presyncopal warning, and syncope does not produce 15–30 minutes of limpness with brisk reflexes.",
      "She is not sleepy and her MSLT is normal."
    ],
    "discuss": [
      "How would you explain this diagnosis without implying that she is faking?"
    ]
  },
  {
    "id": "v12-07",
    "tag": "Asymptomatic OSA",
    "stem": "A 58-year-old accountant with hypertension has polysomnography because his cardiologist suspects sleep apnea. He lives alone and is unaware of snoring. He denies daytime sleepiness, fatigue and unrefreshing sleep, and his Epworth score is normal. He sleeps 7 hours a night with no insomnia. The study shows 22 obstructive apneas and hypopneas per hour, with very few central events, and oxygen saturation below 90% for only 3% of sleep time. The arousal index is 18 per hour.",
    "q": "What is the correct conclusion?",
    "choices": [
      "No diagnosis: OSA requires nocturnal breathing symptoms or daytime sleepiness",
      "Obstructive sleep apnea hypopnea, mild",
      "Obstructive sleep apnea hypopnea, severe",
      "Obstructive sleep apnea hypopnea, moderate",
      "Primary snoring"
    ],
    "answer": 3,
    "why": "Criterion A2: **15 or more** obstructive apneas and hypopneas per hour establish OSA **whatever the symptoms**. An AHI of **15–30** is **moderate** (p. 429).",
    "whyNot": [
      "Symptoms are needed only when the AHI is 5–14 (Criterion A1).",
      "Mild means an AHI below 15.",
      "Severe means an AHI above 30; his desaturation and arousal index do not suggest extra severity.",
      "Correct.",
      "Primary snoring has a normal PSG, and no snoring is reported."
    ]
  },
  {
    "id": "v12-08",
    "tag": "Pediatric OSA vs ADHD",
    "stem": "A 6-year-old boy is referred by his school for possible ADHD. For 9 months his teacher has reported that he cannot stay seated, interrupts and loses focus, and he is irritable in the mornings. His parents say he snores loudly almost every night, breathes through his mouth, often sleeps on his hands and knees, and has started wetting the bed again after being dry for 2 years. Preschool teachers described him as calm and attentive. On examination his tonsils nearly meet in the midline; his BMI is normal. He takes no medication.",
    "q": "What is the most appropriate next step?",
    "choices": [
      "Arrange overnight polysomnography",
      "Diagnose ADHD, combined presentation, and start a stimulant",
      "Prescribe melatonin and sleep hygiene advice",
      "Reassure the parents that snoring is common at this age",
      "Refer to urology for the bedwetting first"
    ],
    "answer": 0,
    "why": "Inattention and hyperactivity can be symptoms of **childhood OSA**. **Snoring, labored breathing, adenotonsillar hypertrophy**, unusual postures such as **hands and knees**, and **new bedwetting** in a previously dry child call for a sleep study (pp. 432, 434). The two disorders can also co-occur.",
    "whyNot": [
      "Correct.",
      "Signs of obstructive breathing need assessment before attributing the behavior to ADHD.",
      "Melatonin does not address a likely obstructive breathing disorder.",
      "Loud nightly snoring with these associated signs is not benign.",
      "Relapse of bedwetting in a previously dry child is itself a clue to OSA; the sleep study is more informative."
    ],
    "then": {
      "q": "Polysomnography shows an obstructive apnea hypopnea index of 3 per hour, with snoring and labored breathing. How should this be interpreted?",
      "choices": [
        "Normal: the threshold is 5 events per hour",
        "Abnormal: in children, an obstructive AHI of 1 or more per hour is the threshold",
        "Indeterminate: repeat the study at age 8",
        "Central sleep apnea",
        "Normal unless oxygen saturation falls below 80%"
      ],
      "answer": 1,
      "why": "Pediatric criteria differ from adult ones: an obstructive AHI of **1 or more per hour**, or obstructive hypoventilation with snoring or flow limitation, is abnormal in children (p. 430).",
      "whyNot": [
        "The threshold of 5 applies to adults.",
        "Correct.",
        "The result is already abnormal; delay would leave a treatable cause unaddressed.",
        "The events are obstructive.",
        "No such oxygen threshold defines pediatric OSA."
      ]
    }
  },
  {
    "id": "v12-09",
    "tag": "CSA with methadone",
    "stem": "A 46-year-old man with severe opioid use disorder has taken methadone 140 mg daily for 2 years. He still craves heroin, used it several times last month and continues to meet criteria for the disorder. For 6 months he has had daytime sleepiness, morning headaches, poor concentration and frequent awakenings. He has no heart failure, stroke or kidney disease, and an echocardiogram is normal; he takes no benzodiazepines. Polysomnography shows 28 apneas per hour, about 80% of them without respiratory effort, in an irregular, ataxic breathing pattern; obstructive events are few and there is no sustained desaturation.",
    "q": "Which diagnosis fits best?",
    "choices": [
      "Obstructive sleep apnea hypopnea, severe",
      "Opioid-induced sleep disorder, daytime sleepiness type",
      "Central sleep apnea, Cheyne-Stokes breathing",
      "Sleep-related hypoventilation, comorbid",
      "Central sleep apnea comorbid with opioid use"
    ],
    "answer": 4,
    "why": "**Five or more central apneas per hour** (Criterion A), central events well over half of the total, an **ataxic** pattern and **long-term methadone**: **central sleep apnea comorbid with opioid use**. About **24%** of people on chronic opioids for pain, and a similar share on methadone, have CSA (pp. 435–438).",
    "whyNot": [
      "Most events lack respiratory effort, so they are central, not obstructive.",
      "The PSG documents a specific breathing-related sleep disorder that has its own opioid subtype and code.",
      "Cheyne-Stokes is a crescendo-decrescendo pattern, usually with heart failure or stroke; his heart is normal and the pattern is ataxic.",
      "Hypoventilation shows raised CO₂ with sustained desaturation, not discrete central apneas.",
      "Correct."
    ],
    "then": {
      "q": "How should the diagnosis be coded?",
      "choices": [
        "G47.37 central sleep apnea comorbid with opioid use, alone",
        "F11.20 severe opioid use disorder; G47.37 central sleep apnea comorbid with opioid use",
        "G47.37 central sleep apnea comorbid with opioid use; F11.20 severe opioid use disorder",
        "F11.10 mild opioid use disorder; G47.37 central sleep apnea comorbid with opioid use",
        "F11.282 severe opioid use disorder with opioid-induced sleep disorder"
      ],
      "answer": 1,
      "why": "When an opioid use disorder is present, code it **first** (**F11.10** mild, **F11.20** moderate or severe), then **G47.37**. Without a use disorder (e.g., after one heavy use), G47.37 is coded alone (p. 435).",
      "whyNot": [
        "G47.37 stands alone only when there is no opioid use disorder.",
        "Correct.",
        "The use disorder is coded first.",
        "His use disorder is severe, which takes F11.20.",
        "The breathing disorder is coded with its own G code, not as an induced sleep disorder."
      ]
    }
  },
  {
    "id": "v12-10",
    "tag": "Obesity hypoventilation",
    "stem": "A 55-year-old woman with a BMI of 44 reports a year of morning headaches, unrefreshing sleep and ankle swelling. She has no lung or neuromuscular disease and takes no opioids or sedatives. An awake arterial blood gas shows a pCO₂ of 51 mmHg. Polysomnography with CO₂ monitoring shows an AHI of 4, but her CO₂ rises to 62 mmHg for 50 minutes during REM sleep, with sustained rather than cyclical oxygen desaturation. Echocardiography shows pulmonary hypertension.",
    "q": "What is the diagnosis?",
    "choices": [
      "Obstructive sleep apnea hypopnea, mild",
      "Sleep-related hypoventilation, idiopathic hypoventilation (G47.34)",
      "Sleep-related hypoventilation, comorbid sleep-related hypoventilation (G47.36)",
      "Central sleep apnea, idiopathic (G47.31)",
      "Sleep-related hypoventilation, congenital central alveolar hypoventilation (G47.35)"
    ],
    "answer": 2,
    "why": "Raised CO₂ during sleep (**> 55 mmHg for more than 10 minutes**) with **sustained** desaturation, plus a cause: **obesity** (BMI > 30 with awake pCO₂ > 45, i.e., obesity hypoventilation). An identifiable cause makes it the **comorbid** subtype (pp. 439–442).",
    "whyNot": [
      "An AHI of 4 is below threshold, and the desaturation is sustained, not cyclical.",
      "The idiopathic subtype has no identifiable cause; severe obesity is one.",
      "Correct.",
      "She has few apneas of any kind.",
      "The congenital form usually presents at birth (PHOX2B-related), and an acquired cause is evident here."
    ]
  },
  {
    "id": "v12-11",
    "tag": "Delayed sleep phase",
    "stem": "A 16-year-old boy is brought by his mother because he is late for school three or four mornings a week and fell asleep in two first-period exams. For 18 months he has been unable to fall asleep before 2:30 a.m. on school nights, even when he goes to bed at 10:30 p.m. with his phone in another room. During the summer holiday, sleeping from 3 a.m. to 11 a.m., he fell asleep quickly, woke refreshed and felt fine all day. Two weeks of actigraphy confirm the pattern on school days and weekends. His father describes the same lifelong night-owl pattern, which made him miss morning classes. The boy does not snore, uses no drugs and has a good mood.",
    "q": "What is the diagnosis?",
    "choices": [
      "Insomnia disorder",
      "Circadian rhythm sleep-wake disorder, delayed sleep phase type, familial",
      "Circadian rhythm sleep-wake disorder, non-24-hour sleep-wake type",
      "Normal adolescent phase delay; no diagnosis",
      "Hypersomnolence disorder"
    ],
    "answer": 1,
    "why": "Sleep and wake times **more than 2 hours** later than needed, with **normal sleep on his own schedule**, causing sleep-onset insomnia, morning sleepiness and impairment: **delayed sleep phase type (G47.21)**. A family history of delayed phase supports the **familial** specifier (pp. 443–445).",
    "whyNot": [
      "He sleeps well when allowed to follow his own clock; the problem is timing.",
      "Correct.",
      "His sleep time is late but stable from day to day, not drifting later each day.",
      "Missed school and exams show impairment beyond the normal pubertal shift.",
      "His sleepiness is confined to mornings and disappears when he sleeps on his preferred schedule."
    ]
  },
  {
    "id": "v12-12",
    "tag": "Advanced sleep phase",
    "stem": "A 71-year-old retired teacher says that for 3 years she cannot stay awake past 7:30 p.m. and wakes at 3:30 a.m., unable to get back to sleep. She dozes off at evening concerts and family dinners and has stopped going to them. When she goes to bed at 7:30 p.m. she sleeps soundly for about 8 hours. Her mood, appetite, interest and energy are good, and she reports no guilt or hopelessness. She does not snore and takes no medication. She walks outdoors at dawn every day.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Major depressive disorder with early-morning awakening",
      "Insomnia disorder",
      "Circadian rhythm sleep-wake disorder, irregular sleep-wake type",
      "Circadian rhythm sleep-wake disorder, advanced sleep phase type",
      "Normal aging; no diagnosis"
    ],
    "answer": 3,
    "why": "Sleep and wake **several hours earlier** than desired, with **early waking and evening sleepiness** but **normal sleep** at the advanced times, causing social impairment: **advanced sleep phase type (G47.22)**. Early-morning light helps keep the phase advanced (pp. 446–447).",
    "whyNot": [
      "She has no depressive symptoms, and her total sleep is about 8 hours.",
      "Her sleep is normal in length and quality at the times her clock chooses.",
      "She has one consolidated sleep period.",
      "Correct.",
      "She is distressed and has withdrawn from evening activities, so this is more than a normal age-related shift."
    ]
  },
  {
    "id": "v12-13",
    "tag": "Non-24-hour type",
    "stem": "A 42-year-old woman who has had no light perception since infancy describes a pattern repeating for years. For about a week at a time she sleeps well from 11 p.m. to 7 a.m.; then, over several weeks, she falls asleep later and later until she is drowsy at work by day and awake at night, after which her sleep returns to normal. A 6-week sleep diary shows sleep onset moving roughly 30–60 minutes later each day. She keeps a regular daytime job. She has no depressive symptoms and takes no medication. She has had two written warnings for falling asleep at her desk.",
    "q": "What is the diagnosis?",
    "choices": [
      "Circadian rhythm sleep-wake disorder, non-24-hour sleep-wake type",
      "Circadian rhythm sleep-wake disorder, delayed sleep phase type",
      "Circadian rhythm sleep-wake disorder, irregular sleep-wake type",
      "Insomnia disorder, recurrent",
      "Circadian rhythm sleep-wake disorder, shift work type"
    ],
    "answer": 0,
    "why": "Without light to set it, the clock **free-runs**, so sleep **drifts later each day**, giving cycles of insomnia and daytime sleepiness between symptom-free spells: **non-24-hour sleep-wake type (G47.24)**. It affects an estimated **50%** of blind people in the US (pp. 448–449).",
    "whyNot": [
      "Correct.",
      "In delayed phase, sleep is late but stable from day to day.",
      "She has a consolidated nightly sleep period whose timing drifts; sleep is not scattered across the day.",
      "The symptoms cycle with the drifting clock, and she sleeps well when it is aligned.",
      "She works a regular day schedule."
    ]
  },
  {
    "id": "v12-14",
    "tag": "Shift work type",
    "stem": "A 39-year-old factory supervisor moved to a permanent 10 p.m. to 6 a.m. shift 8 months ago. On most workdays he sleeps only 4–5 hours after getting home at 7 a.m., waking repeatedly with daylight and household noise, and he struggles to stay awake between 3 and 5 a.m. at work, where he recently made a costly error. During a 2-week vacation on a daytime schedule he slept 7½ hours a night and felt alert. His wife reports no snoring or breathing pauses. He has no mood symptoms and drinks two coffees at the start of each shift.",
    "q": "What is the diagnosis?",
    "choices": [
      "Insomnia disorder",
      "Circadian rhythm sleep-wake disorder, delayed sleep phase type",
      "Hypersomnolence disorder",
      "Obstructive sleep apnea hypopnea",
      "Circadian rhythm sleep-wake disorder, shift work type"
    ],
    "answer": 4,
    "why": "Regularly scheduled work outside **8 a.m. to 6 p.m.**, with **insomnia during the main sleep period and sleepiness at work**, that **resolves on a day schedule**: **shift work type (G47.26)** (p. 450).",
    "whyNot": [
      "His sleep is normal when he sleeps at night; the problem follows the work schedule.",
      "His timing problem is imposed by work, not an intrinsic late clock.",
      "His sleepiness disappears with adequate sleep at normal times.",
      "There is no snoring or witnessed apnea, and symptoms vanish on day work.",
      "Correct."
    ],
    "discuss": [
      "What would you ask about the drive home after a night shift?",
      "Why does the manual single out people with bipolar disorder who work shifts?"
    ]
  },
  {
    "id": "v12-15",
    "tag": "Irregular sleep-wake in dementia",
    "stem": "An 82-year-old man with moderate major neurocognitive disorder due to Alzheimer’s disease has lived in a nursing home for a year. Staff charts over 3 weeks show that he sleeps in four or five short blocks across each 24 hours; the longest, usually between 2 and 6 a.m., lasts about 3 hours. He naps often in his chair by day and is awake and wandering at other times of the night, waking his roommate. He spends most of the day indoors in a dim lounge with little organized activity. He is not delirious, has no pain, and his medications have not changed in 6 months. His total sleep across 24 hours is about 8 hours.",
    "q": "What is the most likely sleep diagnosis?",
    "choices": [
      "Insomnia disorder, with medical condition",
      "Circadian rhythm sleep-wake disorder, advanced sleep phase type",
      "Circadian rhythm sleep-wake disorder, irregular sleep-wake type",
      "Delirium",
      "Hypersomnolence disorder"
    ],
    "answer": 2,
    "why": "No main sleep period, sleep in **at least three** blocks across 24 hours, the longest between **2 and 6 a.m.** and **under 4 hours**, in a person with **neurodegenerative disease** and **little light or structured daytime activity**: **irregular sleep-wake type (G47.23)** (pp. 447–448).",
    "whyNot": [
      "Total sleep is adequate; the problem is that sleep has no consolidated pattern.",
      "Advanced phase keeps one consolidated sleep period, only earlier.",
      "Correct.",
      "He is not delirious, and the pattern is stable over weeks.",
      "His total sleep is normal; it is scattered rather than excessive."
    ]
  },
  {
    "id": "v12-16",
    "tag": "Sleep terrors vs nightmares",
    "stem": "A 6-year-old girl’s parents report episodes on 2–3 nights a week for 4 months. About 90 minutes after falling asleep she sits up with a piercing scream, eyes wide open, sweating and breathing fast. She pushes her parents away when they try to comfort her, and after about 5 minutes she lies down and sleeps again. In the morning she remembers nothing; when woken during one episode she was confused and described only “something scary.” Her parents are exhausted, and she now refuses sleepovers. She takes no medication and does not snore, and her father had similar episodes as a child.",
    "q": "What is the diagnosis?",
    "choices": [
      "Nightmare disorder",
      "NREM sleep arousal disorder, sleep terror type",
      "Panic disorder with nocturnal panic attacks",
      "Sleep-related epilepsy",
      "REM sleep behavior disorder"
    ],
    "answer": 1,
    "why": "Abrupt arousals with a scream, intense fear and **autonomic signs**, **unresponsive to comfort**, in the **first third** of the night, with **amnesia** and at most a fragment of imagery: **NREM sleep arousal disorder, sleep terror type (F51.4)**. Family history is common (pp. 452, 454–455).",
    "whyNot": [
      "Nightmares come later in the night from REM sleep, and the child wakes fully and recalls a detailed dream.",
      "Correct.",
      "Nocturnal panic brings a rapid, complete awakening without confusion or amnesia.",
      "Nothing suggests highly stereotyped events, clusters through the night or events from naps.",
      "RBD arises from REM late in the night, with prompt alertness and dream recall, and is rare in children."
    ]
  },
  {
    "id": "v12-17",
    "tag": "Sleep-related eating, adult onset",
    "stem": "A 36-year-old woman has found signs of night-time eating 3–4 times a week for 5 months: open peanut-butter jars, cereal on the floor and once a burn on her hand she cannot explain. Her husband has seen her in the kitchen 1–2 hours after she fell asleep, eating clumsily with a blank expression; she is hard to rouse and remembers nothing the next day. She does not binge while awake and is not hungry at night. She takes no hypnotics or other sedatives and drinks no alcohol. Her husband adds that over the past year she has begun to snore loudly with pauses in her breathing.",
    "q": "What is the diagnosis?",
    "choices": [
      "Night eating syndrome",
      "Binge-eating disorder",
      "Substance/medication-induced sleep disorder, parasomnia type",
      "NREM sleep arousal disorder, sleepwalking type, with sleep-related eating",
      "Dissociative amnesia"
    ],
    "answer": 3,
    "why": "Eating during **incomplete arousals** early in the night, with a blank face, difficulty waking her and **amnesia**: **sleepwalking type (F51.3), with sleep-related eating** (pp. 452–453). In night eating syndrome the person is **fully awake** (p. 456).",
    "whyNot": [
      "Night eating syndrome involves full awakening and overeating, not incomplete arousal with amnesia.",
      "She does not binge while awake, and the eating occurs out of sleep.",
      "She takes no sedative-hypnotics or other causal substances.",
      "Correct.",
      "Dissociative episodes arise from wakefulness; she is seen in a confused, sleeping state."
    ],
    "then": {
      "q": "She never sleepwalked as a child. What is the most appropriate next step?",
      "choices": [
        "Reassure her that adult sleepwalking needs no investigation",
        "Search for a cause, with polysomnography for obstructive sleep apnea and nocturnal seizures",
        "Start a hypnotic to deepen her sleep",
        "Refer her for eating disorder therapy",
        "Treat her for night eating syndrome"
      ],
      "answer": 1,
      "why": "Sleepwalking that begins in an adult **without a childhood history** should prompt a search for a cause such as **OSA**, **nocturnal seizures** or a **medication** (p. 454). Her new snoring and pauses make OSA a likely trigger.",
      "whyNot": [
        "New adult-onset sleepwalking calls for a search for a cause.",
        "Correct.",
        "Sedative-hypnotics can provoke sleepwalking and sleep eating (p. 472).",
        "The eating is a parasomnia, not an eating disorder.",
        "She is not fully awake during the episodes."
      ]
    }
  },
  {
    "id": "v12-18",
    "tag": "Nightmare disorder with PTSD",
    "stem": "A 31-year-old woman developed PTSD after a violent home invasion 2 years ago. With trauma-focused therapy her intrusive memories, avoidance and hypervigilance have eased, but she still meets full PTSD criteria. She has long, vivid nightmares on 5 nights a week, usually after 3 a.m., of being chased or drowning, which only partly echo the assault. She wakes fully alert, remembers each dream in detail and is afraid to go back to sleep, so she is exhausted at work. She does not move or shout during the dreams, takes no medication and drinks no alcohol. The nightmares are the main reason she now seeks help, and her team plans treatment aimed at them.",
    "q": "Which recording is most accurate?",
    "choices": [
      "F51.5 nightmare disorder, with posttraumatic stress disorder; F43.10 posttraumatic stress disorder",
      "F43.10 posttraumatic stress disorder only; the nightmares are part of PTSD",
      "F43.10 posttraumatic stress disorder; F51.5 nightmare disorder, secondary to PTSD",
      "F51.5 nightmare disorder only",
      "Substance/medication-induced sleep disorder, parasomnia type"
    ],
    "answer": 0,
    "why": "Trauma-related nightmares are usually part of PTSD, but when they are frequent or severe enough to need **independent clinical attention**, nightmare disorder is added. Record **F51.5 nightmare disorder, with [comorbid disorder]**, followed by the comorbid code (pp. 458, 460). At least weekly but not nightly is **moderate**; 6 months or more is **persistent** (p. 457).",
    "whyNot": [
      "Correct.",
      "The nightmares need their own treatment, which justifies the added diagnosis.",
      "The nightmare code comes first, and causal labels such as “secondary” are not used.",
      "She still meets full PTSD criteria, which must also be coded.",
      "She takes no medication or substance."
    ]
  },
  {
    "id": "v12-19",
    "tag": "RBD and synucleinopathy",
    "stem": "A 66-year-old man is brought by his wife, who now sleeps in another room. For 3 years, usually in the early-morning hours, he has shouted, sworn and punched in his sleep about twice a week; last month he fell out of bed and cut his forehead. When she wakes him he is immediately alert and describes being attacked by strangers, matching his movements. He never sleepwalked, takes no antidepressants or other medication and drinks little alcohol. Neurological examination shows no parkinsonism, and no neurodegenerative disease has been diagnosed. Polysomnography will not be available for several months.",
    "q": "What is the most appropriate diagnosis now?",
    "choices": [
      "REM sleep behavior disorder",
      "Unspecified sleep-wake disorder",
      "NREM sleep arousal disorder, sleepwalking type",
      "Nightmare disorder",
      "Other specified sleep-wake disorder (repeated arousals in REM sleep without polysomnography or a synucleinopathy)"
    ],
    "answer": 4,
    "why": "RBD Criterion D needs **REM sleep without atonia on polysomnography** or a suggestive history with an **established synucleinopathy**. He has neither yet, so the manual’s own example of **other specified sleep-wake disorder (G47.8)** applies, recorded with the reason (pp. 461, 476).",
    "whyNot": [
      "Criterion D is not yet met.",
      "The reason criteria are not met is known and can be stated.",
      "His episodes come late in the night, with immediate alertness and vivid recall.",
      "He enacts his dreams with complex movements; nightmare disorder lacks dream enactment.",
      "Correct."
    ],
    "then": {
      "q": "Video polysomnography later shows REM sleep without atonia in the chin and arm leads, with a punching episode during REM. His neurological examination is still normal. What should he be told about his outlook?",
      "choices": [
        "Idiopathic RBD carries little risk of later neurological illness",
        "About 75% develop a neurodegenerative disease, usually a synucleinopathy, within 10–15 years",
        "Most develop Alzheimer’s disease within 2 years",
        "The risk applies only to people with a family history of Parkinson’s disease",
        "The risk applies mainly to women"
      ],
      "answer": 1,
      "why": "Now **REM sleep behavior disorder (G47.52)**. In idiopathic RBD, the risk of a defined neurodegenerative disease, most often a **synucleinopathy** (Parkinson’s disease, major or mild NCD with Lewy bodies, multiple system atrophy), is about **75% within 10–15 years**, roughly **6%–7% a year** (p. 462).",
      "whyNot": [
        "The risk of conversion is high.",
        "Correct.",
        "The usual outcome is a synucleinopathy, over years rather than months.",
        "The manual does not limit the risk to familial cases.",
        "RBD is more common in men over 50."
      ]
    }
  },
  {
    "id": "v12-20",
    "tag": "SSRI-induced RBD",
    "stem": "A 58-year-old woman started sertraline for generalized anxiety disorder 6 weeks ago, and the dose was raised to 150 mg 3 weeks ago. Since the increase, her husband reports that on 3–4 nights a week, in the second half of the night, she talks loudly, kicks and has struck him while dreaming of fighting off a dog; she wakes immediately alert and recalls the dream. She never had such episodes before. Polysomnography shows REM sleep without atonia and captures an episode in REM. She has no parkinsonism and takes no other medication. She is distressed, and her husband has a bruised arm.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "REM sleep behavior disorder",
      "Nightmare disorder",
      "Sertraline-induced sleep disorder, with onset after medication use, parasomnia type",
      "NREM sleep arousal disorder, sleepwalking type",
      "Generalized anxiety disorder; no separate sleep diagnosis"
    ],
    "answer": 2,
    "why": "TCAs, **SSRIs** and SNRIs can produce REM sleep without atonia and frank RBD, which the manual diagnoses as **medication-induced sleep disorder, parasomnia type** (p. 463). Onset after starting the drug and worsening after the dose increase meet Criterion B (p. 468) and the “with onset after medication use” specifier (p. 469). Whether the drug causes RBD or **unmasks** a predisposition is unknown (p. 463).",
    "whyNot": [
      "RBD Criterion F excludes behavior due to a medication.",
      "She enacts her dreams with injury; nightmare disorder lacks dream enactment.",
      "Correct.",
      "The episodes arise from REM late in the night, with full alertness and dream recall.",
      "The parasomnia is distressing and injurious and needs its own diagnosis."
    ],
    "then": {
      "q": "Which code is correct?",
      "choices": [
        "F19.982",
        "F13.982",
        "G47.52",
        "F19.282",
        "F15.982"
      ],
      "answer": 0,
      "why": "Drugs that fit none of the listed classes use the **other (or unknown) substance** code with the drug named; with no use disorder, the 4th character is **9**: **F19.982** sertraline-induced sleep disorder (pp. 469–470).",
      "whyNot": [
        "Correct.",
        "Sertraline is not a sedative, hypnotic or anxiolytic in the coding table.",
        "G47.52 is for RBD not attributable to a substance or medication.",
        "She has no use disorder, so the 4th character is 9.",
        "F15 is the stimulant and caffeine class."
      ]
    }
  },
  {
    "id": "v12-21",
    "tag": "RLS vs akathisia",
    "stem": "A 44-year-old man with schizophrenia, stable for 3 years on an unchanged dose of aripiprazole, reports trouble falling asleep and feeling worn out at his sheltered job. For about 10 years, long before any antipsychotic, he has had a creeping, crawling feeling deep in both calves with an urge to move his legs that starts when he sits to watch television in the evening or lies in bed, on nearly every night. Walking or stretching relieves it, but it returns when he lies down again. He has no restlessness during the day and no whole-body inner tension. His mother had similar symptoms. Examination shows no neuropathy, edema or joint disease.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Antipsychotic-induced akathisia",
      "Restless legs syndrome",
      "Nocturnal leg cramps",
      "Anxiety-related restlessness",
      "Peripheral neuropathy"
    ],
    "answer": 1,
    "why": "An **urge to move the legs**, brought on by **rest**, relieved by **movement** and **worse in the evening**, at least 3 times a week for over 3 months, with impairment, family history and onset **before** the antipsychotic: **restless legs syndrome (G25.81)**. Evening worsening is **more typical of RLS** than of medication-induced akathisia (pp. 464–467).",
    "whyNot": [
      "His symptoms predate the drug by years, are confined to the legs and occur only at rest in the evening.",
      "Correct.",
      "Cramps are painful muscle contractions without an urge to move.",
      "He reports no anxiety, and the pattern is tied to rest and evening.",
      "Examination shows no neuropathy, and the evening, rest-related urge points elsewhere."
    ]
  },
  {
    "id": "v12-22",
    "tag": "RLS in pregnancy",
    "stem": "A 30-year-old woman at 33 weeks in her second pregnancy has had an unpleasant pulling feeling in both legs, with an urge to move them, on most evenings since about 18 weeks. It begins when she sits down after dinner or lies in bed, eases when she walks, returns when she lies down and is almost absent in the morning. It delays her sleep by an hour or more, and she is exhausted at work. Her legs are not swollen, she has no joint or muscle pain, and she does not describe cramps. A change of position alone does not settle it. She takes only a prenatal vitamin; her hemoglobin is mildly low.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Insomnia disorder",
      "Nocturnal leg cramps",
      "Positional discomfort",
      "Restless legs syndrome",
      "Other specified sleep-wake disorder"
    ],
    "answer": 3,
    "why": "Urge to move, onset with **rest**, relief by **movement** and **evening** predominance, at least 3 times a week for over **3 months**, with impairment: **RLS (G25.81)**. Prevalence in pregnancy is **2–3 times** the general rate, peaking in the **third trimester** and usually resolving after delivery (pp. 464–467).",
    "whyNot": [
      "Her sleep-onset problem is explained by RLS (insomnia Criterion F).",
      "She has no painful contractions, and cramps lack the urge to move.",
      "Positional discomfort is relieved by one change of position.",
      "Correct.",
      "Full criteria for RLS are met."
    ],
    "then": {
      "q": "Outside the DSM, which investigation best guides her treatment?",
      "choices": [
        "Serum ferritin and transferrin saturation",
        "Nerve conduction studies",
        "Polysomnography to count periodic limb movements",
        "Lumbar puncture",
        "Dopamine transporter imaging"
      ],
      "answer": 0,
      "why": "Outside the DSM: **iron studies** come first in RLS care, and iron is given when they are low (AASM 2024 thresholds for oral iron: ferritin ≤ 75 ng/mL or transferrin saturation < 20%). The DSM notes that RLS is common with **iron deficiency** and pregnancy and can improve greatly when these resolve (p. 467).",
      "whyNot": [
        "Correct.",
        "Nothing suggests neuropathy.",
        "RLS is a clinical diagnosis; a sleep study is not needed here.",
        "There is no indication for CSF testing.",
        "Imaging does not guide RLS treatment and is inappropriate in pregnancy."
      ]
    }
  },
  {
    "id": "v12-23",
    "tag": "Alcohol-induced insomnia",
    "stem": "A 50-year-old man with severe alcohol use disorder completed a medically supervised detoxification 3 weeks ago and has not drunk since. The tremor, sweating and anxiety of withdrawal have resolved. The insomnia began during detoxification and has continued since. Every night he lies awake for 2–3 hours, wakes repeatedly from vivid, disturbing dreams and sleeps 3–4 hours in total. He had no sleep problems before he began drinking heavily at 30. The insomnia is now his main complaint, it is fueling his cravings, and the team is planning treatment specifically for it. He does not snore, has no mood episode and uses no other substances.",
    "q": "Which recording is most accurate?",
    "choices": [
      "F10.282 severe alcohol use disorder with alcohol-induced sleep disorder, with onset during withdrawal, insomnia type",
      "F10.20 severe alcohol use disorder; F51.01 insomnia disorder",
      "F10.20 severe alcohol use disorder; F10.230 alcohol withdrawal, without perceptual disturbances",
      "F10.982 alcohol-induced sleep disorder, with onset during withdrawal, insomnia type",
      "F10.20 severe alcohol use disorder; F10.282 alcohol-induced sleep disorder, insomnia type"
    ],
    "answer": 0,
    "why": "A prominent insomnia that began in **withdrawal**, has lasted under a month and needs its own attention: alcohol-induced sleep disorder. The use disorder is folded into **one code**, with **2** in the 4th position for moderate or severe: **F10.282** (pp. 468–470). Sleep disruption after alcohol withdrawal **predicts relapse** (p. 473).",
    "whyNot": [
      "Correct.",
      "Insomnia disorder requires 3 months and no substance cause; the use disorder is not coded separately.",
      "The withdrawal signs have resolved, and the sleep problem predominates and needs its own attention.",
      "The 4th character 9 means no use disorder; he has a severe one.",
      "The use disorder is included in the combined code, not listed again."
    ]
  },
  {
    "id": "v12-24",
    "tag": "Stimulant withdrawal sleepiness",
    "stem": "A 27-year-old woman with moderate methamphetamine use disorder stopped using 10 days ago when she entered a residential program. Since then she sleeps 13–14 hours a night, still falls asleep in group sessions, and staff cannot rouse her for morning activities. Her mood is low but improving, her appetite has returned and she has no suicidal thoughts. The sleepiness is now the dominant problem, and the program asks for a separate plan for it. Drug screens are negative for other substances, and she takes no medication.",
    "q": "Which recording is most accurate?",
    "choices": [
      "F15.23 amphetamine-type substance withdrawal",
      "F15.282 moderate methamphetamine use disorder with methamphetamine-induced sleep disorder, with onset during withdrawal, insomnia type",
      "F15.982 methamphetamine-induced sleep disorder, with onset during withdrawal, daytime sleepiness type",
      "F51.11 hypersomnolence disorder, with mental disorder; F15.20 moderate amphetamine-type substance use disorder",
      "F15.282 moderate methamphetamine use disorder with methamphetamine-induced sleep disorder, with onset during withdrawal, daytime sleepiness type"
    ],
    "answer": 4,
    "why": "Withdrawal from chronic stimulant use brings **long nights and daytime sleepiness** (p. 472). When the sleep problem **predominates** and needs independent attention, the induced sleep disorder is diagnosed **instead of** withdrawal (p. 468). Moderate use disorder gives **F15.282**, daytime sleepiness type (p. 469).",
    "whyNot": [
      "The sleep problem predominates and needs its own attention, so the induced sleep disorder replaces the withdrawal diagnosis.",
      "Her problem is excessive sleep, not insomnia.",
      "The 4th character 9 means no use disorder; hers is moderate.",
      "The sleepiness began in withdrawal and is attributed to the substance.",
      "Correct."
    ]
  },
  {
    "id": "v12-25",
    "tag": "Bupropion and caffeine",
    "stem": "A 35-year-old graphic designer with major depressive disorder started bupropion 300 mg daily 3 weeks ago. Within days she began taking over an hour to fall asleep and waking at 3 a.m. on most nights, and she is now too tired to meet deadlines, although her mood has started to improve. Her depressive episode had not disturbed her sleep before the medication. Her single morning coffee has not changed in years, she drinks no alcohol and she takes nothing else. She has no substance use disorder.",
    "q": "Which recording is most accurate?",
    "choices": [
      "F51.01 insomnia disorder, with major depressive disorder",
      "F15.982 bupropion-induced sleep disorder, insomnia type",
      "F19.982 bupropion-induced sleep disorder, with onset after medication use, insomnia type",
      "F19.182 mild bupropion use disorder with bupropion-induced sleep disorder, insomnia type",
      "G47.00 unspecified insomnia disorder"
    ],
    "answer": 2,
    "why": "Insomnia that began **after starting** a medication able to cause it, with no earlier sleep problem. A prescribed drug outside the listed classes takes the **other (or unknown) substance** code with the drug named; with no use disorder that is **F19.982**, the manual’s own bupropion example (pp. 468–470).",
    "whyNot": [
      "The insomnia began with the drug and has lasted 3 weeks, not 3 months.",
      "Bupropion is coded in the other (or unknown) class, not the stimulant class.",
      "Correct.",
      "She has no use disorder; taking a medication as prescribed is not one.",
      "The cause is identified, so a specific induced diagnosis can be made."
    ],
    "then": {
      "q": "The bupropion is replaced and her sleep returns to normal. Months later, during a deadline, she drinks five large coffees a day, the last at 9 p.m., feels jittery and restless with a flushed face, a racing heart, frequent urination, an upset stomach and muscle twitching, and develops sleep-onset insomnia on most nights for 3 weeks with marked daytime fatigue and errors. The insomnia is why she seeks help. How is it coded?",
      "choices": [
        "F15.182 mild caffeine use disorder with caffeine-induced sleep disorder",
        "F15.282 moderate caffeine use disorder with caffeine-induced sleep disorder",
        "F15.982 caffeine-induced sleep disorder, with onset during intoxication, insomnia type",
        "F15.920 caffeine intoxication",
        "G47.09 other specified insomnia disorder (short-term insomnia disorder)"
      ],
      "answer": 2,
      "why": "Caffeine use disorder is not an official diagnosis, so caffeine-induced sleep disorder has **one code, F15.982** (p. 469). Caffeine disturbs sleep in a **dose- and timing-dependent** way, especially with large doses late in the day (p. 471).",
      "whyNot": [
        "There is no official caffeine use disorder, so no 1 or 2 code exists for caffeine.",
        "There is no official caffeine use disorder, so no 1 or 2 code exists for caffeine.",
        "Correct.",
        "The sleep disturbance predominates and needs its own attention, so the induced sleep disorder is diagnosed instead.",
        "A substance clearly explains the insomnia (insomnia Criterion G)."
      ]
    }
  }
]);
