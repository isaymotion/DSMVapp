/* Chapter 4 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch04", "vignettes", [
  {
    "id": "v4-01",
    "tag": "MDD vs bipolar II",
    "stem": "A 34-year-old woman is referred for her third episode of depression: 4 weeks of low mood, anhedonia, hypersomnia, guilt and poor concentration. Her two earlier episodes responded to sertraline. She denies ever feeling “high.” Her husband, interviewed separately, describes a week 2 years ago when she slept 4 hours a night without seeming tired, talked much faster than usual, started planning a catering business and spent $2,000 on equipment. Friends commented on the change. She kept working and was never hospitalized; she calls that week “the only time I felt like myself.”",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Major depressive disorder, recurrent episode",
      "Bipolar II disorder, current episode depressed",
      "Bipolar I disorder, current episode depressed",
      "Cyclothymic disorder",
      "Major depressive disorder, recurrent episode, with mixed features"
    ],
    "answer": 1,
    "why": "The husband describes a **hypomanic episode**: at least 4 days of elevated mood and increased energy with ≥3 B symptoms (decreased need for sleep, pressured speech, increased goal-directed activity, risky spending), observable by others, without marked impairment or hospitalization. Any lifetime hypomania plus a major depressive episode makes **bipolar II**, and excludes MDD.",
    "whyNot": [
      "MDD requires that there has **never** been a manic or hypomanic episode. Collateral history is often the only way hypomania is found.",
      "Correct. Hypomania plus at least one major depressive episode, never mania.",
      "Bipolar I needs a **manic** episode: marked impairment, hospitalization or psychosis. She kept working and was never hospitalized.",
      "Cyclothymia needs 2 years of numerous **subthreshold** highs and lows and never a full episode; she has had full depressive episodes and a full hypomanic episode.",
      "Mixed features are manic symptoms **during** a depressive episode. Her hypomania was a separate week, and full hypomania means bipolar disorder, not a specifier."
    ],
    "discuss": [
      "Why do patients so often deny past hypomania, and how do you ask about it?",
      "How does this diagnosis change your treatment plan?"
    ]
  },
  {
    "id": "v4-02",
    "tag": "Bereavement and MDE",
    "stem": "A 58-year-old woman is brought in by her daughter 7 weeks after her husband died suddenly. For the past 4 weeks she has stayed in bed most of the day, stopped eating (6-kg weight loss), wakes at 3 a.m., moves and speaks slowly, and cannot follow a television program. She says she is “a useless person who has always been a burden,” unrelated to her husband, and that the family would be better off without her. She no longer smiles at her grandchildren’s visits. She has no history of mood episodes and takes no medication.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Normal grief",
      "Prolonged grief disorder",
      "Adjustment disorder with depressed mood",
      "Major depressive disorder, single episode",
      "Persistent depressive disorder"
    ],
    "answer": 3,
    "why": "A major depressive episode can be diagnosed **in addition to** a normal response to loss. Pervasive anhedonia that does not lift with reminders or visits, **worthlessness unrelated to the deceased**, psychomotor retardation and thoughts of death focused on being a burden all point to an MDE, not grief.",
    "whyNot": [
      "In grief, dysphoria comes in waves tied to reminders, self-esteem is preserved and thoughts of death focus on joining the deceased. None of that fits.",
      "Prolonged grief disorder needs at least **12 months** since the death in adults, with intense yearning or preoccupation as the core.",
      "Adjustment disorder is diagnosed only when criteria for another disorder, such as an MDE, are **not** met.",
      "Correct. Five or more MDE symptoms for 2 weeks, a change from before, with distress and impairment.",
      "PDD needs at least **2 years** of depressed mood."
    ],
    "then": {
      "q": "She meets 8 of the 9 symptoms, cannot care for herself, is overwhelmed by the distress and has no psychotic features. What is the code?",
      "choices": [
        "F32.0",
        "F32.1",
        "F32.2",
        "F32.3",
        "F33.2"
      ],
      "answer": 2,
      "why": "Severity rests on the number of symptoms, their intensity and the disability. Symptoms well beyond the five required, unmanageable distress and marked impairment make it **severe**: single episode, severe = **F32.2**.",
      "whyNot": [
        "F32.0 is mild: few if any symptoms beyond those required, manageable distress, minor impairment.",
        "F32.1 is moderate, between mild and severe.",
        "Correct.",
        "F32.3 is for psychotic features, coded regardless of severity. She has none.",
        "F33 codes are for **recurrent** episodes. This is her first."
      ]
    }
  },
  {
    "id": "v4-03",
    "tag": "PDD and MDD",
    "stem": "A 38-year-old accountant says he has “always been a gloomy person.” Since about age 19 he has felt down most days, with poor appetite, low self-esteem and hopelessness about ever being happier; he has never had more than a few weeks of feeling well. For the past 3 weeks things have become much worse: he has lost interest in everything, cannot sleep, feels exhausted and guilty, cannot concentrate at work and has thought he would be better off dead. He has never had periods of elevated mood.",
    "q": "What is the diagnosis?",
    "choices": [
      "Major depressive disorder only",
      "Persistent depressive disorder only",
      "Persistent depressive disorder and major depressive disorder",
      "Other specified depressive disorder",
      "Cyclothymic disorder"
    ],
    "answer": 2,
    "why": "He has met PDD criteria for years (depressed mood more days than not for ≥2 years plus ≥2 B symptoms, never well >2 months). When full criteria for a major depressive episode are met during PDD, **both** diagnoses are given, with the PDD course specifier.",
    "whyNot": [
      "MDD alone would ignore nearly 20 years of chronic depressive symptoms that meet PDD criteria.",
      "PDD alone misses the current full major depressive episode, which is diagnosed separately.",
      "Correct.",
      "Other specified depressive disorder is for presentations that do **not** meet criteria for a specific depressive disorder.",
      "Cyclothymia needs numerous hypomanic-symptom periods. He has never been elevated."
    ],
    "then": {
      "q": "Which persistent depressive disorder course specifier applies?",
      "choices": [
        "With pure dysthymic syndrome",
        "With persistent major depressive episode",
        "With intermittent major depressive episodes, with current episode",
        "With intermittent major depressive episodes, without current episode",
        "Late onset"
      ],
      "answer": 2,
      "why": "Full MDE criteria are **currently** met, and in the preceding 2 years there were periods of at least 8 weeks below the MDE threshold: **with intermittent major depressive episodes, with current episode**. Onset at 19 also makes it **early onset** (before 21).",
      "whyNot": [
        "Pure dysthymic syndrome means no full MDE in at least the preceding 2 years. He has one now.",
        "Persistent MDE means full MDE criteria were met **throughout** the preceding 2 years.",
        "Correct.",
        "“Without current episode” is for when MDE criteria are not met now.",
        "Onset at 19 is **early** onset (before age 21)."
      ]
    }
  },
  {
    "id": "v4-04",
    "tag": "Alcohol and depression",
    "stem": "A 46-year-old man with severe alcohol use disorder is admitted for detoxification. For the last 2 months, while drinking about a liter of vodka a day, he has had depressed mood, anhedonia, insomnia, guilt and passive thoughts of death. He had no depressive symptoms during a 2-year period of sobriety that ended 6 months ago. The depressive symptoms predominate and need clinical attention.",
    "q": "What is the most appropriate diagnosis now?",
    "choices": [
      "Major depressive disorder, single episode, and severe alcohol use disorder",
      "F10.24 severe alcohol use disorder with alcohol-induced depressive disorder, with onset during withdrawal",
      "F10.94 alcohol-induced depressive disorder, with onset during intoxication",
      "Alcohol withdrawal",
      "F10.24 severe alcohol use disorder with alcohol-induced depressive disorder, with onset during intoxication"
    ],
    "answer": 4,
    "why": "The depression began **during heavy use**, alcohol can cause it, and there is no evidence of an independent disorder (no depression during 2 sober years). The comorbid use disorder is named first and sets the 4th character: severe use disorder = **2** (F10.24).",
    "whyNot": [
      "Diagnosing independent MDD now ignores that the symptoms began during heavy use and were absent during sobriety.",
      "The symptoms began during heavy drinking, not during withdrawal.",
      "The 4th character **9** is only for when there is **no** comorbid use disorder.",
      "The mood symptoms predominate and need attention, so the substance-induced disorder is diagnosed instead of intoxication or withdrawal alone.",
      "Correct."
    ],
    "then": {
      "q": "He stays abstinent in a residential program. Six weeks later he still meets full criteria for a major depressive episode. How should the depression now be understood?",
      "choices": [
        "Still alcohol-induced: wait 6 months before reconsidering",
        "An independent major depressive disorder",
        "Alcohol withdrawal with perceptual disturbances",
        "Adjustment disorder with depressed mood",
        "Unspecified depressive disorder"
      ],
      "answer": 1,
      "why": "Persistence for a substantial period (about **1 month**) after acute withdrawal or intoxication ends is evidence of an **independent** depressive disorder (Criterion C). He now merits a diagnosis of MDD alongside the alcohol use disorder.",
      "whyNot": [
        "The manual’s benchmark is about 1 month, not 6.",
        "Correct.",
        "Withdrawal resolves within days to about a week, and perceptual disturbances are not depression.",
        "Adjustment disorder is excluded when full MDE criteria are met.",
        "There is enough information for a specific diagnosis."
      ]
    }
  },
  {
    "id": "v4-05",
    "tag": "Medical cause",
    "stem": "A 52-year-old woman has 6 weeks of depressed mood, anhedonia, hypersomnia, fatigue, slowed thinking, weight gain and feeling worthless. She also reports cold intolerance, constipation and dry skin that began at the same time. Her TSH is markedly elevated with a low free T4. She has no prior psychiatric history.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "Depressive disorder due to hypothyroidism, with major depressive–like episode",
      "Major depressive disorder, single episode, moderate",
      "Depressive disorder due to hypothyroidism, with depressive features",
      "Adjustment disorder with depressed mood",
      "Major depressive disorder, with atypical features"
    ],
    "answer": 0,
    "why": "There is a plausible physiological mechanism and a close **temporal** link: the mood syndrome began with the hypothyroid symptoms. Because full criteria (except Criterion C) for a major depressive episode are met, the specifier is **with major depressive–like episode** (F06.32).",
    "whyNot": [
      "Correct.",
      "MDD requires that the episode is not attributable to another medical condition.",
      "“With depressive features” is used when full criteria for a major depressive episode are **not** met.",
      "The illness is not just a stressor here; it is the direct physiological cause.",
      "Atypical features is a specifier of MDD or PDD, which do not apply when the cause is medical."
    ],
    "then": {
      "q": "How is the diagnosis recorded?",
      "choices": [
        "F06.32 depressive disorder due to hypothyroidism, with major depressive–like episode; E03.9 hypothyroidism",
        "E03.9 hypothyroidism; F06.32 depressive disorder due to hypothyroidism, with major depressive–like episode",
        "F06.32 depressive disorder due to another medical condition",
        "F32.1 major depressive disorder; E03.9 hypothyroidism",
        "E03.9 hypothyroidism only"
      ],
      "answer": 1,
      "why": "The **medical condition is listed first**, immediately before the depressive disorder due to it, and the name of the condition goes into the disorder’s name.",
      "whyNot": [
        "The order is reversed: the medical condition comes first.",
        "Correct.",
        "The specific medical condition is written into the name and also coded first.",
        "This is not MDD.",
        "The depressive disorder needs its own code when it meets criteria and needs attention."
      ]
    }
  },
  {
    "id": "v4-06",
    "tag": "PMDD",
    "stem": "A 27-year-old graduate student says that for most of the past year, in the week before her period, she becomes tearful and snaps at her partner, feels hopeless and anxious, sleeps poorly, craves sweets and has breast tenderness. Within 2 or 3 days of her period starting she feels fine, and she is symptom-free the week after. She has missed exams because of it. She has not kept any symptom records.",
    "q": "What is the most appropriate diagnosis at this visit?",
    "choices": [
      "Premenstrual syndrome",
      "Premenstrual dysphoric disorder",
      "Premenstrual dysphoric disorder, provisional",
      "Premenstrual exacerbation of major depressive disorder",
      "Other specified depressive disorder"
    ],
    "answer": 2,
    "why": "She describes at least five symptoms (including affective ones: lability, irritability, hopelessness, anxiety) in the final week before menses, improving within days of onset and minimal the week after, with impairment. Until **prospective daily ratings** confirm the pattern, the diagnosis is recorded as **provisional**.",
    "whyNot": [
      "PMS does not need five symptoms or affective symptoms; she has both, plus marked impairment.",
      "Criterion F requires confirmation by prospective daily ratings, which have not been done yet.",
      "Correct.",
      "Premenstrual exacerbation means an underlying disorder that worsens premenstrually **without** a symptom-free postmenstrual interval. She is well after menses.",
      "She meets the criteria for a named disorder."
    ],
    "then": {
      "q": "What confirms the diagnosis?",
      "choices": [
        "A single detailed retrospective interview",
        "Prospective daily symptom ratings over at least two symptomatic cycles",
        "Serum estradiol and progesterone levels",
        "Symptom ratings for one full cycle",
        "Improvement with an SSRI"
      ],
      "answer": 1,
      "why": "Criterion F: confirmation by **prospective daily ratings during at least two symptomatic cycles**. Retrospective recall overestimates the pattern.",
      "whyNot": [
        "Retrospective accounts are exactly what prospective ratings are meant to check.",
        "Correct.",
        "No hormone level makes or excludes the diagnosis.",
        "One cycle is not enough; at least two symptomatic cycles are required.",
        "Treatment response is not a diagnostic criterion."
      ]
    }
  },
  {
    "id": "v4-07",
    "tag": "Psychotic depression",
    "stem": "A 71-year-old retired teacher has a first episode of severe depression over 5 weeks: he barely eats, has lost 8 kg, sits motionless for hours and wakes at 3 a.m. He insists that his bowels have “rotted away” and that he deserves to die for “ruining” his family through an old tax mistake. Cognition is otherwise intact, and medical workup, including thyroid tests, is unremarkable.",
    "q": "Which specifier describes his psychotic features?",
    "choices": [
      "With mood-congruent psychotic features",
      "With mood-incongruent psychotic features",
      "With catatonia",
      "With melancholic features only; these are overvalued ideas",
      "With mixed features"
    ],
    "answer": 0,
    "why": "Delusions of **disease** (rotting bowels) and **guilt and deserved punishment** are the typical depressive themes, so the psychotic features are **mood-congruent**.",
    "whyNot": [
      "Correct.",
      "Mood-incongruent content does not involve themes of inadequacy, guilt, disease, death, nihilism or deserved punishment (for example, thought insertion).",
      "Sitting still is psychomotor retardation; catatonia needs three of the 12 catatonic features.",
      "He holds these beliefs with fixed, delusional conviction. Melancholic features may also apply, but they do not describe the psychosis.",
      "Mixed features means manic symptoms during depression. There are none."
    ],
    "then": {
      "q": "What is the ICD-10-CM code?",
      "choices": [
        "F32.2",
        "F32.3",
        "F33.3",
        "F06.32",
        "F32.9"
      ],
      "answer": 1,
      "why": "Single episode with psychotic features = **F32.3**. Psychotic features are coded **irrespective of severity**.",
      "whyNot": [
        "Severity codes are replaced by the psychotic-features code when psychosis is present.",
        "Correct.",
        "F33.3 is for a recurrent episode; this is his first.",
        "The medical workup is unremarkable, so this is not due to another medical condition.",
        "There is enough information to code specifically."
      ]
    }
  },
  {
    "id": "v4-08",
    "tag": "DMDD",
    "stem": "A 10-year-old boy is referred by his school. For the past 18 months he has had screaming, kicking or object-throwing outbursts about four times a week, at home and in class, over minor frustrations. Between outbursts his parents and teacher describe him as “cranky and angry almost all the time.” His outbursts began at age 8. He also has long-standing inattention and hyperactivity that meet criteria for ADHD, and his defiance and vindictiveness meet criteria for oppositional defiant disorder. He has never had a period of elevated mood or decreased need for sleep.",
    "q": "Which diagnoses should be made?",
    "choices": [
      "Disruptive mood dysregulation disorder, ADHD and oppositional defiant disorder",
      "Intermittent explosive disorder and ADHD",
      "Oppositional defiant disorder and ADHD",
      "Bipolar I disorder and ADHD",
      "Disruptive mood dysregulation disorder and ADHD"
    ],
    "answer": 4,
    "why": "He meets DMDD: outbursts ≥3 a week, persistent irritability between them, ≥12 months, two settings, onset before 10, first diagnosed between 6 and 18. **DMDD cannot coexist with ODD** (only DMDD is diagnosed), but **can coexist with ADHD**.",
    "whyNot": [
      "When criteria for both DMDD and ODD are met, only DMDD is diagnosed.",
      "IED cannot be diagnosed with DMDD, and IED lacks the persistent irritability between outbursts.",
      "ODD is absorbed into DMDD when both are met.",
      "Bipolar disorder is episodic and needs a manic episode. Chronic irritability without elevated mood is not mania.",
      "Correct."
    ],
    "then": {
      "q": "Which new finding would most change the diagnosis?",
      "choices": [
        "A 3-day period of euphoria, grandiosity, pressured speech and sleeping 3 hours without fatigue",
        "A 2-week episode of sadness and anhedonia",
        "Starting to steal and set fires",
        "Alcohol use on weekends",
        "A specific learning disorder in reading"
      ],
      "answer": 0,
      "why": "Any distinct period of **more than 1 day** meeting full symptom criteria (except duration) for mania or hypomania rules out DMDD (Criterion I). The bipolar diagnosis then takes precedence.",
      "whyNot": [
        "Correct.",
        "MDD can be diagnosed together with DMDD.",
        "Conduct disorder can be diagnosed together with DMDD.",
        "Substance use disorders can coexist with DMDD.",
        "Learning disorders do not affect the DMDD diagnosis."
      ]
    }
  },
  {
    "id": "v4-09",
    "tag": "Mixed features",
    "stem": "A 29-year-old man has had 3 weeks of depressed mood, anhedonia, guilt, poor concentration and fatigue. On most days of the episode his wife notes he talks much more than usual, says his thoughts are “racing,” and has started reorganizing the entire garage at night despite feeling miserable. He sleeps 5 hours and feels exhausted. There has never been a period of elevated mood, and he takes no substances.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Bipolar II disorder",
      "Bipolar I disorder, current episode manic, with mixed features",
      "Major depressive disorder, with anxious distress",
      "Major depressive disorder, with mixed features",
      "Cyclothymic disorder"
    ],
    "answer": 3,
    "why": "During most days of a major depressive episode he has **three** manic/hypomanic symptoms (talkativeness, racing thoughts, increased goal-directed activity), observable by others and a change from his usual self, without ever meeting full criteria for hypomania or mania: **with mixed features**. It raises the risk of a later bipolar diagnosis.",
    "whyNot": [
      "Bipolar II needs a full hypomanic episode (≥4 days of elevated or irritable mood with increased energy). He has never had one.",
      "There is no manic episode; the predominant picture is depressive.",
      "Anxious distress is tension, restlessness and worry, not racing thoughts and increased goal-directed activity.",
      "Correct.",
      "Cyclothymia needs 2 years of fluctuating subthreshold highs and lows."
    ],
    "discuss": [
      "Why does sleeping 5 hours and feeling exhausted not count as decreased need for sleep?",
      "Which three symptoms are not counted toward mixed features in depression, and why?"
    ]
  },
  {
    "id": "v4-10",
    "tag": "Atypical features",
    "stem": "A 24-year-old woman has been depressed for 2 months. Her mood lifts noticeably when friends visit, then sinks again when they leave. She sleeps 11 to 12 hours a day, has gained 5 kg eating sweets, and says her arms and legs feel “like lead” for hours each afternoon. Since adolescence she has been devastated by small criticisms and has quit two jobs after feeling slighted.",
    "q": "Which specifier best describes this episode?",
    "choices": [
      "With atypical features",
      "With melancholic features",
      "With seasonal pattern",
      "With mixed features",
      "With anxious distress"
    ],
    "answer": 0,
    "why": "**Mood reactivity** (Criterion A) plus at least two of: weight gain or increased appetite, hypersomnia, **leaden paralysis**, and long-standing **interpersonal rejection sensitivity**. She has all four.",
    "whyNot": [
      "Correct.",
      "Melancholic features require loss of pleasure or **lack** of reactivity; her mood brightens. The two specifiers cannot be applied to the same episode.",
      "Seasonal pattern needs a regular link between episode onset and a time of year across at least 2 years.",
      "There are no manic or hypomanic symptoms.",
      "Anxious distress needs two of: keyed up, restless, worry-driven poor concentration, fear of something awful, fear of losing control."
    ]
  },
  {
    "id": "v4-11",
    "tag": "Peripartum onset",
    "stem": "A 31-year-old woman, now 2 weeks postpartum, has had depressed mood, anhedonia, insomnia even when the baby sleeps, guilt about being “a bad mother” and poor concentration. Her husband says the low mood actually began in the last month of pregnancy and has steadily worsened. She has no history of mood episodes and no psychotic symptoms.",
    "q": "Which statement about the peripartum onset specifier is correct here?",
    "choices": [
      "It does not apply, because symptoms began before delivery",
      "This is maternity blues, which is not a mental disorder",
      "It applies only if onset is within 2 weeks after delivery",
      "It cannot be used without psychotic features",
      "It applies, because onset was during pregnancy"
    ],
    "answer": 4,
    "why": "With peripartum onset applies when mood symptoms begin **during pregnancy** or in the **4 weeks following delivery**. About half of “postpartum” major depressive episodes actually begin before delivery.",
    "whyNot": [
      "Onset during pregnancy is explicitly included.",
      "Maternity blues causes no impairment and improves within about a week. Her symptoms are worsening and meet MDE criteria.",
      "The window is 4 weeks after delivery, and pregnancy is included.",
      "Peripartum episodes can occur with or without psychotic features.",
      "Correct."
    ]
  },
  {
    "id": "v4-12",
    "tag": "Seasonal pattern",
    "stem": "A 44-year-old construction worker has had four major depressive episodes, each starting in December and remitting in March. His company lays off its crews every December, and he spends winters unemployed and in debt; when work resumes in March he recovers. He has had no other episodes.",
    "q": "Should the seasonal pattern specifier be used?",
    "choices": [
      "Yes, because the episodes are winter-onset",
      "Yes, because there are at least two seasonal episodes in 2 years",
      "No, because the pattern is explained by a seasonal psychosocial stressor",
      "No, because seasonal pattern applies only to bipolar disorder",
      "No, because seasonal pattern needs summer episodes"
    ],
    "answer": 2,
    "why": "Cases with an obvious effect of **seasonally related psychosocial stressors** (such as being unemployed every winter) are excluded. His episodes track the layoffs, not the season.",
    "whyNot": [
      "A winter pattern alone is not enough when a seasonal stressor explains it.",
      "Two seasonal episodes in 2 years is necessary but not sufficient.",
      "Correct.",
      "Seasonal pattern applies to recurrent major depressive disorder and to bipolar I and II disorder.",
      "Most seasonal patterns are fall or winter onset; summer patterns are the less common type."
    ]
  },
  {
    "id": "v4-13",
    "tag": "Grief",
    "stem": "Five weeks after her husband’s death, a 66-year-old woman tells you she sometimes hears his voice calling her name from the kitchen, and once briefly “saw” him in his chair. She knows he is gone. She cries in waves, especially when she finds his belongings, but laughs with her children telling stories about him. She is sleeping and eating somewhat less but still sees friends, and her sense of herself is unchanged.",
    "q": "What is the most appropriate interpretation?",
    "choices": [
      "Major depressive disorder with psychotic features",
      "Brief psychotic disorder with marked stressor",
      "Prolonged grief disorder",
      "Normal grief",
      "Other specified depressive disorder"
    ],
    "answer": 3,
    "why": "Brief experiences of hearing or seeing the deceased are common in grief and do not mean psychosis. Waves of dysphoria tied to reminders, preserved self-esteem and positive emotions all point to **normal grief**.",
    "whyNot": [
      "She does not meet MDE criteria, and these perceptual experiences are part of normal bereavement, held with insight.",
      "She keeps full insight, and these are grief experiences, not delusions or hallucinations of psychosis.",
      "Prolonged grief disorder needs at least 12 months since the death in adults.",
      "Correct.",
      "Normal grief is not a mental disorder."
    ]
  },
  {
    "id": "v4-14",
    "tag": "Catatonia",
    "stem": "A 49-year-old man with recurrent major depressive disorder is admitted in a severe episode. For most of the past 2 weeks he has been mute, holds his arm raised for long periods, resists every attempt to move him, and stares without responding. He has no psychotic features. Medical causes have been excluded.",
    "q": "How is this episode coded?",
    "choices": [
      "F33.2 alone",
      "F33.2 plus F06.1",
      "F06.1 alone",
      "F33.3",
      "F32.2 plus F06.1"
    ],
    "answer": 1,
    "why": "Mutism, posturing, negativism and stupor give three or more catatonic features, so the specifier **with catatonia** applies. The coding note requires the additional code **F06.1** (catatonia associated with another mental disorder) after the MDD code: recurrent, severe = F33.2.",
    "whyNot": [
      "The catatonia needs its own additional code.",
      "Correct.",
      "Catatonia associated with another mental disorder is coded together with the disorder it accompanies.",
      "F33.3 is for psychotic features, which he does not have.",
      "This is a recurrent episode (F33), not a single one."
    ]
  },
  {
    "id": "v4-15",
    "tag": "Medication cause",
    "stem": "A 55-year-old man with chronic hepatitis C has had no psychiatric symptoms in the 10 years since diagnosis. Four weeks after he started interferon-based treatment, he developed depressed mood, anhedonia, insomnia, fatigue and hopelessness. His liver function is stable.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Major depressive disorder, single episode",
      "Depressive disorder due to hepatitis C",
      "Unspecified depressive disorder",
      "Adjustment disorder with depressed mood",
      "Interferon-induced depressive disorder"
    ],
    "answer": 4,
    "why": "The timing tracks the **medication**: 10 years of hepatitis C without depression, then onset weeks after starting interferon, a classic depressogenic drug. Interferon does not fit a named class, so it is coded as an **other (or unknown) substance** (F19.94 without a use disorder).",
    "whyNot": [
      "An independent MDD is unlikely when the onset follows medication exposure and the drug can cause it.",
      "The illness has been stable for 10 years; the new exposure is the medication. When both might contribute, clinical judgment decides, and both can be diagnosed.",
      "The cause is identifiable, so a specific diagnosis is possible.",
      "Adjustment disorder is excluded when a substance or medication explains the symptoms.",
      "Correct."
    ]
  },
  {
    "id": "v4-16",
    "tag": "Youth depression",
    "stem": "A 14-year-old girl has been “impossible to live with” for 3 weeks: angry and snapping at everyone most of the day, no longer playing basketball, staying up until 3 a.m. and unable to get up for school, failing tests because she cannot focus, and saying she is “worthless.” Her pediatrician notes she has not gained the expected weight since her last visit. She has had no outbursts before this month.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Major depressive disorder, single episode",
      "Disruptive mood dysregulation disorder",
      "Persistent depressive disorder",
      "Oppositional defiant disorder",
      "Adjustment disorder with mixed disturbance of emotions and conduct"
    ],
    "answer": 0,
    "why": "In children and adolescents, **irritable mood** can stand in for depressed mood, and **failure to make expected weight gain** counts as the weight criterion. With anhedonia, sleep change, poor concentration and worthlessness she has five symptoms for 2 weeks.",
    "whyNot": [
      "Correct.",
      "DMDD needs ≥12 months of chronic irritability with frequent outbursts; this is a new 3-week episode.",
      "PDD in youth needs at least **1 year**.",
      "ODD is a long-standing pattern of defiance, not a new episode with anhedonia and worthlessness.",
      "An adjustment disorder is excluded when MDE criteria are met, and no stressor is described."
    ]
  },
  {
    "id": "v4-17",
    "tag": "Cognition in depression",
    "stem": "A 74-year-old widower’s daughter worries he has dementia. Over 2 months he has become forgetful and slow, says “I don’t know” to many questions, and complains bitterly about his memory. He has lost interest in his garden, sleeps poorly, has lost weight and feels he has “nothing to live for.” On testing he gives up easily, but when encouraged his recall improves. There was no cognitive decline before this.",
    "q": "What is the most likely explanation of his cognitive problems?",
    "choices": [
      "Major neurocognitive disorder due to Alzheimer’s disease",
      "Mild neurocognitive disorder",
      "Delirium",
      "Major depressive episode with depression-related cognitive impairment",
      "Persistent depressive disorder"
    ],
    "answer": 3,
    "why": "In older adults, memory complaints during a major depressive episode can be mistaken for dementia (**“pseudodementia”**). Clues: a subacute onset with depressive symptoms, prominent complaints about memory, “don’t know” answers, poor effort that improves with encouragement, and no prior decline. Depression in late life can also herald later neurocognitive disorder, so follow up.",
    "whyNot": [
      "Dementia usually has a gradual premorbid decline, and patients tend to minimize rather than emphasize deficits.",
      "His deficits are better explained by the depressive episode, which also needs treatment first.",
      "There is no fluctuating disturbance of attention and awareness.",
      "Correct.",
      "PDD needs at least 2 years of depressed mood."
    ]
  },
  {
    "id": "v4-18",
    "tag": "Adjustment vs MDD",
    "stem": "A 36-year-old man was laid off 5 weeks ago. Since then he has felt sad and discouraged most days and has trouble falling asleep, but he enjoys time with his children, eats normally, concentrates on job applications and has no guilt or thoughts of death. He finds the distress “out of proportion,” and it is affecting his marriage.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "Major depressive disorder, single episode, mild",
      "Adjustment disorder with depressed mood",
      "Other specified depressive disorder, depressive episode with insufficient symptoms",
      "Persistent depressive disorder",
      "No diagnosis: a normal reaction to job loss"
    ],
    "answer": 1,
    "why": "Depressive symptoms in response to an identifiable stressor, within 3 months of it, causing distress or impairment, **without meeting criteria for a major depressive episode**: adjustment disorder with depressed mood.",
    "whyNot": [
      "He has only two MDE symptoms (low mood and insomnia).",
      "Correct.",
      "Adjustment disorder takes precedence when the symptoms are a response to a stressor.",
      "Five weeks is far short of 2 years.",
      "Marked distress and impairment in his marriage go beyond an expected reaction."
    ]
  },
  {
    "id": "v4-19",
    "tag": "PDD in youth",
    "stem": "A 16-year-old boy has been irritable and down most days for 14 months, since starting a new school. He has low energy, low self-esteem and trouble concentrating. He has never gone more than a few weeks feeling well. He has never met criteria for a major depressive episode and has no history of elevated mood or substance use.",
    "q": "What is the diagnosis?",
    "choices": [
      "Major depressive disorder",
      "Other specified depressive disorder",
      "Disruptive mood dysregulation disorder",
      "Adjustment disorder with depressed mood",
      "Persistent depressive disorder"
    ],
    "answer": 4,
    "why": "In children and adolescents, persistent depressive disorder needs depressed **or irritable** mood for at least **1 year** (not 2), with two or more B symptoms and never more than 2 months without symptoms.",
    "whyNot": [
      "He has never met MDE criteria.",
      "He meets criteria for a specific disorder.",
      "DMDD needs severe temper outbursts ≥3 a week and cannot be diagnosed for the first time after 18; it also needs onset before 10.",
      "Adjustment disorder symptoms should not persist more than 6 months after the stressor or its consequences end.",
      "Correct."
    ]
  },
  {
    "id": "v4-20",
    "tag": "Cyclothymia vs PDD",
    "stem": "A 26-year-old woman says that for the past 3 years her mood has swung every few weeks. Low periods of a week or two bring fatigue, self-doubt and poor concentration but never meet MDE criteria. In between, she has several days of feeling unusually confident, chatty and productive on little sleep, never enough to meet hypomania criteria. She has rarely felt “normal” for more than a month.",
    "q": "What is the diagnosis?",
    "choices": [
      "Persistent depressive disorder",
      "Bipolar II disorder",
      "Cyclothymic disorder",
      "Major depressive disorder, recurrent, with mixed features",
      "Other specified depressive disorder"
    ],
    "answer": 2,
    "why": "At least 2 years of numerous periods of **subthreshold hypomanic** and **subthreshold depressive** symptoms, present at least half the time, never without symptoms for more than 2 months, and never a full episode: **cyclothymic disorder**. A diagnosis of cyclothymia precludes PDD.",
    "whyNot": [
      "The hypomanic-symptom periods rule out PDD; cyclothymic disorder precludes it.",
      "Bipolar II needs a full hypomanic episode and a full major depressive episode.",
      "Correct.",
      "She has never had a major depressive episode.",
      "She meets criteria for a specific disorder, in the bipolar chapter."
    ]
  },
  {
    "id": "v4-21",
    "tag": "Schizoaffective vs MDD",
    "stem": "A 33-year-old man developed a severe depressive episode 4 months ago and soon afterward began believing that neighbors were transmitting his thoughts to the police. The depression fully remitted 3 weeks ago with treatment, but the delusions have continued unchanged throughout those 3 weeks. For most of the 4-month illness he met full criteria for a major depressive episode.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Schizoaffective disorder, depressive type",
      "Major depressive disorder, with mood-incongruent psychotic features",
      "Schizophrenia",
      "Delusional disorder",
      "Brief psychotic disorder"
    ],
    "answer": 0,
    "why": "Delusions for **≥2 weeks without a major mood episode** (Criterion B), while mood episodes are present for the **majority** of the illness: schizoaffective disorder, depressive type.",
    "whyNot": [
      "Correct.",
      "In psychotic depression the psychosis occurs only during the mood episode. His delusions persisted 3 weeks after the depression remitted.",
      "In schizophrenia, mood episodes are present for only a minority of the illness.",
      "Delusional disorder excludes mood episodes that occupy most of the illness.",
      "Brief psychotic disorder lasts less than 1 month."
    ]
  },
  {
    "id": "v4-22",
    "tag": "Other specified",
    "stem": "A 23-year-old law student has had 8 days of depressed mood, anhedonia, insomnia, fatigue and poor concentration, with impaired studying. She has never had a depressive or bipolar episode before, and no stressor, substance or medical illness explains it. You see her on day 8.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "Major depressive disorder, single episode",
      "Other specified depressive disorder (short-duration depressive episode)",
      "Recurrent brief depression",
      "Adjustment disorder with depressed mood",
      "Unspecified depressive disorder"
    ],
    "answer": 1,
    "why": "Depressed affect plus four of the other eight MDE symptoms for **more than 4 but less than 14 days**, with distress or impairment, in someone who has never met criteria for another depressive or bipolar disorder: a **short-duration depressive episode**, recorded as other specified depressive disorder (F32.89).",
    "whyNot": [
      "The 2-week minimum has not been met yet.",
      "Correct.",
      "Recurrent brief depression requires episodes of 2–13 days at least monthly for 12 consecutive months.",
      "There is no identifiable stressor.",
      "“Unspecified” is used when the clinician does not specify the reason. Here the presentation is a recognized example and can be named."
    ]
  },
  {
    "id": "v4-23",
    "tag": "Anxious distress",
    "stem": "A 51-year-old woman in a major depressive episode says she feels keyed up and tense, cannot sit still, cannot concentrate because she worries constantly, and fears something awful will happen to her children. She paces the ward and wrings her hands most of the day. She does not fear losing control.",
    "q": "What is the severity of her anxious distress?",
    "choices": [
      "Mild",
      "Moderate",
      "Moderate-severe",
      "Severe",
      "Anxious distress does not apply because she is depressed"
    ],
    "answer": 3,
    "why": "She has four of the five anxious distress symptoms. Four or five symptoms are **moderate-severe**; with **motor agitation** they are **severe**.",
    "whyNot": [
      "Mild is two symptoms.",
      "Moderate is three symptoms.",
      "Moderate-severe is four or five symptoms **without** motor agitation; her pacing and hand-wringing raise it.",
      "Correct.",
      "Anxious distress is a specifier for depressive and bipolar episodes; it is common and linked to suicide risk and poorer treatment response."
    ]
  },
  {
    "id": "v4-24",
    "tag": "Recurrent brief depression",
    "stem": "A 25-year-old man has had depressed mood and four other depressive symptoms in episodes lasting 3 to 5 days, about once a month, for the past 14 months. The episodes are not linked to any cycle, substance or stressor and impair his work each time. He has never met criteria for any other depressive or bipolar disorder.",
    "q": "What is the diagnosis?",
    "choices": [
      "Major depressive disorder, recurrent",
      "Persistent depressive disorder",
      "Other specified depressive disorder (recurrent brief depression)",
      "Cyclothymic disorder",
      "Unspecified depressive disorder"
    ],
    "answer": 2,
    "why": "Depressed mood plus at least four other symptoms for **2–13 days**, at least **once a month**, for at least **12 consecutive months**, not tied to the menstrual cycle, in someone who never met criteria for another depressive or bipolar disorder: **recurrent brief depression**, recorded as other specified depressive disorder.",
    "whyNot": [
      "Each episode is shorter than 2 weeks.",
      "PDD needs depressed mood more days than not for 2 years.",
      "Correct.",
      "There are no hypomanic symptoms.",
      "The presentation matches a named example, so it should be specified."
    ]
  },
  {
    "id": "v4-25",
    "tag": "Melancholic features",
    "stem": "A 60-year-old man in a major depressive episode says nothing gives him any pleasure, and even news that his first grandchild was born “did not touch” him. He describes his mood as a heavy emptiness unlike the sadness he felt when his father died. He is worst in the morning, wakes at 4 a.m. (his usual time is 7), has lost 7 kg and is visibly slowed.",
    "q": "Which specifier applies?",
    "choices": [
      "With atypical features",
      "With melancholic features",
      "With mixed features",
      "With mood-congruent psychotic features",
      "With seasonal pattern"
    ],
    "answer": 1,
    "why": "Criterion A: pervasive **loss of pleasure** and **lack of reactivity** (even very good news does not brighten mood). Criterion B (three or more): distinct quality of mood, **morning worsening**, **early-morning awakening** of ≥2 hours, psychomotor retardation and weight loss.",
    "whyNot": [
      "Atypical features require mood reactivity, which he lacks.",
      "Correct.",
      "There are no manic or hypomanic symptoms.",
      "There are no delusions or hallucinations.",
      "Nothing suggests a seasonal link across years."
    ]
  }
]);
