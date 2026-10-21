/* Chapter 3 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch03", "vignettes", [
  {
    "id": "v3-01",
    "tag": "Antidepressant-emergent mania",
    "stem": "A 31-year-old woman with two prior major depressive episodes starts sertraline. Three weeks later she is euphoric, sleeping 2 hours a night without fatigue, talking nonstop, has spent her savings on a business scheme and is admitted after driving recklessly. Sertraline is stopped on admission, but the full manic syndrome persists unchanged for another 2 weeks.",
    "q": "What is the diagnosis?",
    "choices": [
      "Sertraline-induced bipolar and related disorder",
      "Bipolar I disorder, current episode manic",
      "Bipolar II disorder",
      "Major depressive disorder, with mixed features",
      "Other specified bipolar and related disorder"
    ],
    "answer": 1,
    "why": "A **full manic episode** that emerges during antidepressant treatment and **persists at a fully syndromal level beyond the physiological effect** of the drug is sufficient evidence for a manic episode, and therefore **bipolar I disorder**.",
    "whyNot": [
      "The substance-induced diagnosis is used when the syndrome is explained by the drug; persistence well beyond its effect points to bipolar I.",
      "Correct.",
      "Bipolar II excludes any manic episode; hospitalization makes this mania.",
      "She meets full criteria for a manic episode.",
      "Her presentation meets criteria for a specific disorder."
    ],
    "then": {
      "q": "She has 9 of the possible symptoms, cannot function and was hospitalized for safety, with no psychotic features. What is the code?",
      "choices": [
        "F31.11",
        "F31.12",
        "F31.13",
        "F31.2",
        "F31.9"
      ],
      "answer": 2,
      "why": "Bipolar I, current episode **manic, severe** = **F31.13**.",
      "whyNot": [
        "F31.11 is manic, mild.",
        "F31.12 is manic, moderate.",
        "Correct.",
        "F31.2 is manic with psychotic features.",
        "F31.9 is unspecified."
      ]
    }
  },
  {
    "id": "v3-02",
    "tag": "Bipolar I coding",
    "stem": "A 44-year-old man had a manic episode with hospitalization at 29. For the past 3 weeks he has had depressed mood, anhedonia, insomnia, guilt, fatigue and poor concentration. He is struggling at work but still working, with substantial but manageable distress. No psychosis.",
    "q": "What is the diagnosis?",
    "choices": [
      "Major depressive disorder, single episode",
      "Cyclothymic disorder",
      "Bipolar II disorder, current episode depressed",
      "Bipolar I disorder, current episode depressed",
      "Bipolar I disorder, most recent episode manic, in full remission"
    ],
    "answer": 3,
    "why": "Once there has been a manic episode, any later major depressive episode is coded as **bipolar I disorder, current episode depressed**.",
    "whyNot": [
      "Any past manic episode excludes MDD.",
      "Cyclothymia excludes full mood episodes.",
      "Bipolar II excludes any manic episode.",
      "Correct.",
      "He currently meets criteria for a major depressive episode."
    ],
    "then": {
      "q": "What is the code for this moderate episode?",
      "choices": [
        "F31.31",
        "F31.32",
        "F31.4",
        "F31.5",
        "F33.1"
      ],
      "answer": 1,
      "why": "Bipolar I, current episode **depressed, moderate** = **F31.32**. Note the irregular pattern: depressed severe is **F31.4** and depressed with psychotic features is **F31.5**.",
      "whyNot": [
        "F31.31 is depressed, mild.",
        "Correct.",
        "F31.4 is depressed, severe.",
        "F31.5 is depressed, with psychotic features.",
        "F33.1 is MDD, recurrent, moderate."
      ]
    }
  },
  {
    "id": "v3-03",
    "tag": "Hypomania with psychosis",
    "stem": "A 25-year-old has had 5 days of elevated mood, decreased need for sleep, racing thoughts and increased activity. She keeps working, but has become convinced that she has been chosen to receive messages from a television host. She has had a major depressive episode before.",
    "q": "What is the current episode?",
    "choices": [
      "Manic episode",
      "Hypomanic episode",
      "Hypomanic episode with mood-congruent psychotic features",
      "Mixed episode",
      "Major depressive episode with mixed features"
    ],
    "answer": 0,
    "why": "If there are **psychotic features**, the episode is **by definition manic**, whatever its length or the level of functioning. Hypomania cannot include psychosis. She therefore has bipolar I disorder.",
    "whyNot": [
      "Correct.",
      "Hypomania excludes psychotic features.",
      "There is no hypomanic episode with psychotic features.",
      "DSM-5 removed the mixed episode; mixed features is a specifier.",
      "The predominant episode is manic, not depressive."
    ]
  },
  {
    "id": "v3-04",
    "tag": "Mixed features in mania",
    "stem": "A 38-year-old man meets full criteria for a manic episode: grandiosity, pressured speech, no need for sleep and reckless spending. On most days of the episode he also feels deeply sad, has lost interest in things, feels worthless and thinks often about death. These are obvious to his family.",
    "q": "Which specifier applies?",
    "choices": [
      "With anxious distress",
      "None: this is a mixed episode",
      "With rapid cycling",
      "With melancholic features",
      "With mixed features"
    ],
    "answer": 4,
    "why": "A manic episode with at least **three depressive symptoms** (prominent dysphoria, anhedonia, psychomotor retardation, fatigue, worthlessness or guilt, recurrent thoughts of death) on most days, observable by others: **manic episode, with mixed features**.",
    "whyNot": [
      "Anxious distress is tension, restlessness and worry.",
      "The DSM-IV mixed episode no longer exists.",
      "Rapid cycling describes four or more episodes in 12 months.",
      "Melancholic features apply to depressive episodes.",
      "Correct."
    ]
  },
  {
    "id": "v3-05",
    "tag": "Both episodes at once",
    "stem": "A 29-year-old woman simultaneously meets full criteria for a manic episode and for a major depressive episode for 9 days.",
    "q": "How is the current episode classified?",
    "choices": [
      "Major depressive episode, with mixed features",
      "Mixed episode",
      "Manic episode, with mixed features",
      "Both a manic and a major depressive episode",
      "Schizoaffective disorder, bipolar type"
    ],
    "answer": 2,
    "why": "When full criteria for **both** mania and depression are met at the same time, the diagnosis is a **manic episode, with mixed features**, because mania is more impairing and clinically urgent.",
    "whyNot": [
      "Mania takes precedence when both are fully met.",
      "The mixed episode was removed in DSM-5.",
      "Correct.",
      "Only one current episode is recorded.",
      "There is no psychosis outside mood episodes."
    ]
  },
  {
    "id": "v3-06",
    "tag": "Bipolar II recording",
    "stem": "A 33-year-old has had three major depressive episodes and two hypomanic episodes, never mania. For the past 4 days she has been hypomanic: elevated mood, little sleep, talkative and productive. On most days she also feels keyed up, tense and worried something will go wrong.",
    "q": "How is the diagnosis recorded?",
    "choices": [
      "F31.0 bipolar I disorder, current episode hypomanic",
      "F31.81 bipolar II disorder, current episode hypomanic, with anxious distress",
      "F31.81 bipolar II disorder, current episode hypomanic, moderate, with anxious distress",
      "F31.89 other specified bipolar disorder",
      "F34.0 cyclothymic disorder, with anxious distress"
    ],
    "answer": 1,
    "why": "Bipolar II has **one code, F31.81**; everything else is written out. For a current hypomanic episode, severity is not specified (severity is used only for depressive episodes). Anxious distress can apply to hypomanic episodes.",
    "whyNot": [
      "There has never been a manic episode.",
      "Correct.",
      "Severity is not specified for a hypomanic episode.",
      "Full criteria for bipolar II are met.",
      "She has had full hypomanic and depressive episodes."
    ]
  },
  {
    "id": "v3-07",
    "tag": "Rapid cycling",
    "stem": "A 40-year-old with bipolar I disorder had, in the past 12 months: a manic episode in January; a major depressive episode from April to May; 3 weeks of near-normal mood; another major depressive episode in June and July; then a hypomanic episode in November.",
    "q": "Does the rapid cycling specifier apply?",
    "choices": [
      "Yes: there were four episodes",
      "No: rapid cycling applies only to bipolar II",
      "Yes: any four mood changes count",
      "No: the two depressive episodes count as one",
      "No: hypomanic episodes are not counted"
    ],
    "answer": 3,
    "why": "Episodes are separated by a **partial or full remission of at least 2 months** or a **switch to the opposite pole**. Three weeks of improvement does not separate the two depressive spells, so there were only three episodes.",
    "whyNot": [
      "Only three distinct episodes, once the depressive spells are combined.",
      "Rapid cycling applies to bipolar I and II.",
      "Each episode must meet full duration and symptom criteria and be properly demarcated.",
      "Correct.",
      "Hypomanic episodes do count."
    ]
  },
  {
    "id": "v3-08",
    "tag": "Cyclothymia",
    "stem": "A 15-year-old boy has had 13 months of frequent mood shifts: several days at a time of feeling unusually confident, chatty and energetic, alternating with stretches of low mood and fatigue. None has met criteria for a hypomanic or major depressive episode, and he has rarely been at his baseline for more than a few weeks.",
    "q": "What is the diagnosis?",
    "choices": [
      "Cyclothymic disorder",
      "Bipolar II disorder",
      "Persistent depressive disorder",
      "Disruptive mood dysregulation disorder",
      "Other specified bipolar and related disorder (short-duration cyclothymia)"
    ],
    "answer": 0,
    "why": "In children and adolescents, cyclothymic disorder needs only **1 year** (2 in adults) of numerous subthreshold hypomanic and depressive periods, present at least half the time, never symptom-free for more than 2 months.",
    "whyNot": [
      "Correct.",
      "Bipolar II needs full hypomanic and depressive episodes.",
      "The hypomanic-symptom periods exclude PDD.",
      "DMDD is chronic irritability with severe outbursts, not up-and-down mood cycling.",
      "Short-duration cyclothymia applies when the duration falls short; in youth 1 year is enough."
    ]
  },
  {
    "id": "v3-09",
    "tag": "Cyclothymia evolves",
    "stem": "A 30-year-old man has had cyclothymic disorder for 4 years. This month he develops a full major depressive episode for the first time. He has never had a hypomanic or manic episode.",
    "q": "How should the diagnosis be revised?",
    "choices": [
      "Cyclothymic disorder and major depressive disorder",
      "Keep cyclothymic disorder only",
      "Bipolar II disorder",
      "Persistent depressive disorder",
      "Major depressive disorder; cyclothymic disorder is dropped"
    ],
    "answer": 4,
    "why": "If a major depressive, manic or hypomanic episode occurs **after** the initial 2 years (1 year in youth), the diagnosis changes to MDD, bipolar I, or other specified/unspecified bipolar disorder respectively, and **cyclothymic disorder is dropped**.",
    "whyNot": [
      "The two are not given together after the initial period.",
      "A full episode changes the diagnosis.",
      "Bipolar II needs a full hypomanic episode.",
      "PDD is excluded by the history of hypomanic symptoms.",
      "Correct."
    ]
  },
  {
    "id": "v3-10",
    "tag": "Medical cause",
    "stem": "A 46-year-old woman develops 2 weeks of irritability, pressured speech, decreased need for sleep and racing thoughts. She has lost weight, has a tremor and palpitations, and her TSH is suppressed with a high free T4. She has never had a mood episode. Full criteria for a manic episode are met except that a medical cause explains it.",
    "q": "What is the diagnosis?",
    "choices": [
      "Bipolar I disorder, current episode manic",
      "Bipolar and related disorder due to hyperthyroidism, with mixed features",
      "Bipolar and related disorder due to hyperthyroidism, with manic- or hypomanic-like episode",
      "Substance-induced bipolar and related disorder",
      "Generalized anxiety disorder"
    ],
    "answer": 2,
    "why": "A manic syndrome that is the **direct physiological consequence** of hyperthyroidism, meeting full criteria except the exclusion for medical causes: **with manic- or hypomanic-like episode** (F06.33).",
    "whyNot": [
      "Bipolar I is excluded when a medical condition causes the episode.",
      "There are no prominent depressive symptoms.",
      "Correct.",
      "No substance or medication is involved.",
      "Her decreased need for sleep, pressured speech and racing thoughts are manic symptoms."
    ],
    "then": {
      "q": "How is it recorded?",
      "choices": [
        "F06.33 bipolar and related disorder due to hyperthyroidism; E05.90 hyperthyroidism",
        "E05.90 hyperthyroidism; F06.33 bipolar and related disorder due to hyperthyroidism, with manic- or hypomanic-like episode",
        "E05.90 hyperthyroidism; F06.34 bipolar and related disorder due to hyperthyroidism",
        "F31.11 bipolar I disorder, current episode manic, mild",
        "F06.33 alone"
      ],
      "answer": 1,
      "why": "The medical condition is coded and listed **immediately before** the mental disorder due to it. F06.33 covers both “with manic features” and “with manic- or hypomanic-like episode”; F06.34 is with mixed features.",
      "whyNot": [
        "The order is reversed.",
        "Correct.",
        "F06.34 is for mixed features.",
        "This is not bipolar I.",
        "The medical condition is coded too."
      ]
    }
  },
  {
    "id": "v3-11",
    "tag": "Substance-induced",
    "stem": "A 27-year-old with severe cocaine use disorder becomes irritable, grandiose and sleepless during a weekend binge, with pressured speech. The symptoms predominate and need clinical attention. He has never had mood episodes when not using.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Bipolar I disorder, current episode manic",
      "Severe cocaine use disorder with cocaine-induced bipolar and related disorder, with onset during intoxication",
      "Cocaine intoxication",
      "Cocaine-induced bipolar and related disorder, without use disorder",
      "Cyclothymic disorder"
    ],
    "answer": 1,
    "why": "Manic symptoms during intoxication with a substance that can cause them, predominating and needing attention: substance-induced bipolar and related disorder. The comorbid use disorder is written first; no separate use disorder diagnosis is given.",
    "whyNot": [
      "Mania that is explained by the drug does not establish bipolar I.",
      "Correct.",
      "The induced disorder is diagnosed when the mood symptoms predominate and warrant attention.",
      "He has a severe use disorder, which sets the code and is named first.",
      "Cyclothymia needs 2 years of fluctuating symptoms."
    ],
    "then": {
      "q": "What is the code?",
      "choices": [
        "F14.14",
        "F14.24",
        "F14.94",
        "F15.24",
        "F14.259"
      ],
      "answer": 1,
      "why": "Cocaine (F14), moderate or severe use disorder (**2**), bipolar and related disorder (**4**): **F14.24**.",
      "whyNot": [
        "The 1 is for a mild use disorder.",
        "Correct.",
        "The 9 is for no use disorder.",
        "F15 is amphetamine-type substances.",
        "F14.259 is cocaine-induced psychotic disorder."
      ]
    }
  },
  {
    "id": "v3-12",
    "tag": "Borderline vs bipolar II",
    "stem": "A 24-year-old woman says she has “bipolar.” Her mood shifts several times a day, usually within hours, in response to arguments with her partner; she feels empty, fears abandonment, self-harms when rejected and has unstable relationships. She has never had a sustained period of elevated mood with decreased need for sleep lasting days.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Bipolar II disorder",
      "Cyclothymic disorder",
      "Bipolar I disorder with rapid cycling",
      "Borderline personality disorder",
      "Disruptive mood dysregulation disorder"
    ],
    "answer": 3,
    "why": "Mood swings lasting **hours** and triggered by interpersonal events, with emptiness, abandonment fears, self-harm and unstable relationships, point to **borderline personality disorder**. Hypomania needs a **distinct period of at least 4 days**.",
    "whyNot": [
      "There has never been a hypomanic episode.",
      "Cyclothymic mood periods last days, not hours, and are not mainly reactive.",
      "Rapid cycling still needs four full episodes, demarcated by remission or a polarity switch.",
      "Correct.",
      "DMDD is diagnosed first between 6 and 18, with onset before 10."
    ]
  },
  {
    "id": "v3-13",
    "tag": "Schizoaffective vs bipolar",
    "stem": "A 26-year-old man is admitted in a manic episode with persecutory delusions. Over 8 weeks the mania resolves completely, but his persecutory delusions and voices continue unchanged for another 3 weeks with normal mood. Mood episodes have taken up most of his illness.",
    "q": "What is the diagnosis?",
    "choices": [
      "Schizoaffective disorder, bipolar type",
      "Bipolar I disorder, with mood-incongruent psychotic features",
      "Schizophrenia",
      "Brief psychotic disorder",
      "Delusional disorder"
    ],
    "answer": 0,
    "why": "Psychosis for **≥2 weeks without a major mood episode**, with mood episodes for the majority of the illness: **schizoaffective disorder, bipolar type**.",
    "whyNot": [
      "Correct.",
      "In bipolar I with psychotic features, psychosis occurs only during mood episodes.",
      "Mood episodes dominate the illness.",
      "The illness is longer than 1 month and includes mania.",
      "Prominent hallucinations and dominant mood episodes exclude it."
    ]
  },
  {
    "id": "v3-14",
    "tag": "Antidepressant activation",
    "stem": "Six days after starting escitalopram for depression, a 35-year-old woman says she feels jittery, more irritable and sleeps a little less. She has no elevated mood, grandiosity, pressured speech or increased goal-directed activity. The symptoms settle when the dose is lowered.",
    "q": "What is the best interpretation?",
    "choices": [
      "Bipolar II disorder: antidepressant-emergent hypomania",
      "Bipolar I disorder",
      "Cyclothymic disorder",
      "Substance-induced bipolar and related disorder",
      "Antidepressant activation side effects, not evidence of a bipolar diathesis"
    ],
    "answer": 4,
    "why": "One or two symptoms (especially **irritability, edginess or agitation**) after starting an antidepressant are **not sufficient** for a hypomanic episode and do not necessarily indicate a bipolar diathesis.",
    "whyNot": [
      "She does not meet criteria for a hypomanic episode.",
      "There is no manic episode.",
      "There is no 2-year pattern.",
      "A substance-induced bipolar disorder needs a prominent and persistent manic-like syndrome.",
      "Correct."
    ]
  },
  {
    "id": "v3-15",
    "tag": "Antidepressant-emergent hypomania",
    "stem": "A 28-year-old man with two past major depressive episodes starts bupropion. Two weeks later he has elevated mood, sleeps 4 hours without fatigue, is unusually talkative and productive, and friends notice the change, though he keeps working well. Bupropion is stopped, but the full hypomanic syndrome lasts another 10 days.",
    "q": "What is the diagnosis?",
    "choices": [
      "Bipolar I disorder",
      "Bupropion-induced bipolar and related disorder",
      "Bipolar II disorder",
      "Major depressive disorder, recurrent, with mixed features",
      "Cyclothymic disorder"
    ],
    "answer": 2,
    "why": "A **full hypomanic episode** emerging during antidepressant treatment and **persisting at a fully syndromal level beyond the drug’s effect** counts as a hypomanic episode. With past major depressive episodes and no mania: **bipolar II disorder**.",
    "whyNot": [
      "There is no marked impairment, hospitalization or psychosis.",
      "Persistence beyond the physiological effect of the drug establishes a true episode.",
      "Correct.",
      "The hypomanic symptoms were a separate episode, not features of a depressive episode.",
      "He has had full episodes."
    ]
  },
  {
    "id": "v3-16",
    "tag": "Late-onset mania",
    "stem": "A 67-year-old man with no psychiatric history develops a week of euphoria, grandiosity, pressured speech and decreased need for sleep. His wife noticed mild left-sided weakness 10 days ago that he did not report. He takes no new medications.",
    "q": "What is the most important next step?",
    "choices": [
      "Start lithium for new-onset bipolar I disorder",
      "Neurological examination and brain imaging",
      "Diagnose cyclothymic disorder",
      "Reassure the family that late-onset bipolar disorder is common",
      "Start an antidepressant"
    ],
    "answer": 1,
    "why": "First-onset mania in later life, especially with **new neurological signs**, strongly suggests a **medical cause** such as stroke. Evaluate before labeling it bipolar I; the diagnosis may be bipolar and related disorder due to another medical condition.",
    "whyNot": [
      "A medical cause must be excluded first.",
      "Correct.",
      "Cyclothymia needs 2 years of subthreshold symptoms.",
      "First-episode mania after 60 is uncommon and should prompt a search for a cause.",
      "Antidepressants do not treat mania."
    ]
  },
  {
    "id": "v3-17",
    "tag": "Bipolar I coding",
    "stem": "A 50-year-old woman with bipolar I disorder had a manic episode last year, her most recent episode. She has been on lithium and for the past 5 months has had no significant mood symptoms.",
    "q": "What is the code?",
    "choices": [
      "F31.73",
      "F31.76",
      "F31.72",
      "F31.74",
      "F31.9"
    ],
    "answer": 3,
    "why": "Most recent episode **manic**, **in full remission** (no significant symptoms for at least 2 months) = **F31.74**.",
    "whyNot": [
      "F31.73 is most recent manic, in partial remission.",
      "F31.76 is most recent depressed, in full remission.",
      "F31.72 is most recent hypomanic, in full remission.",
      "Correct.",
      "F31.9 is unspecified."
    ]
  },
  {
    "id": "v3-18",
    "tag": "Bipolar I coding",
    "stem": "A 36-year-old with bipolar I disorder (two past manic episodes) now has 6 days of elevated mood, little need for sleep and talkativeness. She is functioning, without psychosis or hospitalization, and friends notice the change.",
    "q": "How is the current episode coded?",
    "choices": [
      "F31.0",
      "F31.81",
      "F31.11",
      "F31.71",
      "F34.0"
    ],
    "answer": 0,
    "why": "In someone who already has bipolar I, a current **hypomanic** episode is coded **F31.0**. Severity and psychotic specifiers do not apply to hypomanic episodes.",
    "whyNot": [
      "Correct.",
      "F31.81 is bipolar II, excluded after any manic episode.",
      "F31.11 is a current manic episode, mild.",
      "F31.71 is most recent hypomanic, in partial remission.",
      "F34.0 is cyclothymic disorder."
    ]
  },
  {
    "id": "v3-19",
    "tag": "Catatonia in mania",
    "stem": "A 32-year-old with bipolar I disorder is admitted in a severe manic episode. For most of the episode he has shown purposeless excessive motor activity, grimacing, echolalia and stereotyped movements. There are no psychotic features. NMS and medical causes are excluded.",
    "q": "How is this coded?",
    "choices": [
      "F31.13 alone",
      "F31.13 plus R29.818",
      "F31.2 plus F06.1",
      "F06.1 alone",
      "F31.13 plus F06.1"
    ],
    "answer": 4,
    "why": "Three or more catatonic features during the episode: **with catatonia**, which carries the coding note to add **F06.1**. Manic, severe, no psychosis = F31.13.",
    "whyNot": [
      "The catatonia needs its own additional code.",
      "R29.818 is used only for unspecified catatonia.",
      "F31.2 is for psychotic features, which he does not have.",
      "Catatonia associated with a mental disorder is coded together with that disorder.",
      "Correct."
    ]
  },
  {
    "id": "v3-20",
    "tag": "Psychotic features",
    "stem": "During a manic episode, a 41-year-old woman says that her thoughts are being inserted by a satellite and that her neighbors control her movements. She has no grandiose or persecutory themes linked to her mood.",
    "q": "Which specifier describes her psychotic features?",
    "choices": [
      "With mood-congruent psychotic features",
      "With mixed features",
      "With mood-incongruent psychotic features",
      "With catatonia",
      "No specifier: these are not psychotic features"
    ],
    "answer": 2,
    "why": "In mania, mood-congruent themes are **grandiosity, invulnerability, persecution related to special status**, and so on. Thought insertion and delusions of control do not fit those themes: **mood-incongruent**.",
    "whyNot": [
      "The content does not match manic themes.",
      "There are no depressive symptoms.",
      "Correct.",
      "There are no catatonic features.",
      "Delusions of control and thought insertion are psychotic features."
    ]
  },
  {
    "id": "v3-21",
    "tag": "Other specified bipolar",
    "stem": "A 25-year-old has had 20 months of numerous subthreshold hypomanic and depressive periods, never meeting criteria for a full episode, and has rarely been symptom-free for more than a few weeks.",
    "q": "What is the diagnosis?",
    "choices": [
      "Cyclothymic disorder",
      "Other specified bipolar and related disorder (short-duration cyclothymia)",
      "Bipolar II disorder",
      "Persistent depressive disorder",
      "Unspecified bipolar and related disorder"
    ],
    "answer": 1,
    "why": "In an adult, cyclothymia needs 24 months. Fewer than 24 months of the same pattern is **short-duration cyclothymia**, an example of **other specified bipolar and related disorder** (F31.89).",
    "whyNot": [
      "Adults need at least 2 years.",
      "Correct.",
      "There have been no full episodes.",
      "The hypomanic symptoms rule out PDD.",
      "The presentation matches a named example, so it should be specified."
    ]
  },
  {
    "id": "v3-22",
    "tag": "Unspecified bipolar",
    "stem": "A man is brought to the emergency department by police after being found shouting on a highway. He is euphoric, grandiose, talks rapidly and has not slept, but is a poor historian, has no family available and the duration of symptoms is unknown. Toxicology is pending.",
    "q": "What is the most appropriate working diagnosis?",
    "choices": [
      "Bipolar I disorder, current episode manic",
      "Brief psychotic disorder",
      "Unspecified mood disorder",
      "Unspecified bipolar and related disorder",
      "Other specified bipolar and related disorder"
    ],
    "answer": 3,
    "why": "Bipolar-type symptoms predominate, but there is **insufficient information** for a specific diagnosis (duration unknown, substances not excluded): **unspecified bipolar and related disorder** (F31.9).",
    "whyNot": [
      "Duration and possible substance causes are unknown.",
      "There are no psychotic symptoms described.",
      "Unspecified mood disorder (F39) is for when you cannot tell whether a bipolar or depressive disorder is present; here the picture is clearly bipolar-type.",
      "Correct.",
      "“Other specified” requires stating a specific reason; here information is simply missing."
    ]
  },
  {
    "id": "v3-23",
    "tag": "Seasonal pattern",
    "stem": "A 39-year-old with bipolar II disorder has had major depressive episodes every winter for the last 4 years, with hypomania each spring and no episodes at other times of year. There are no seasonal stressors.",
    "q": "Which statement is correct?",
    "choices": [
      "With seasonal pattern can be specified for bipolar II disorder",
      "Seasonal pattern applies only to major depressive disorder",
      "Seasonal pattern requires episodes only in summer",
      "Seasonal pattern requires rapid cycling",
      "Seasonal pattern can be used only for a first episode"
    ],
    "answer": 0,
    "why": "With seasonal pattern applies to **bipolar I, bipolar II** and recurrent MDD. In bipolar disorder, it can describe the pattern of at least one type of episode (mania, hypomania or depression).",
    "whyNot": [
      "Correct.",
      "It applies to bipolar disorders too.",
      "Most seasonal patterns are fall or winter onset.",
      "The two specifiers are separate.",
      "It describes a recurrent pattern."
    ]
  },
  {
    "id": "v3-24",
    "tag": "Bipolar II requirements",
    "stem": "A 30-year-old woman has had two major depressive episodes and one 5-day period of elevated mood and increased energy with three other manic symptoms. During that period she was taken to hospital and admitted because she stopped eating and was walking into traffic.",
    "q": "What is the diagnosis?",
    "choices": [
      "Bipolar II disorder",
      "Other specified bipolar and related disorder",
      "Cyclothymic disorder",
      "Major depressive disorder",
      "Bipolar I disorder"
    ],
    "answer": 4,
    "why": "Hospitalization makes an episode **manic** regardless of its length. Any manic episode means **bipolar I**.",
    "whyNot": [
      "Bipolar II excludes any manic episode; hospitalization rules out hypomania.",
      "A specific diagnosis is possible.",
      "There have been full episodes.",
      "Any manic episode excludes MDD.",
      "Correct."
    ]
  },
  {
    "id": "v3-25",
    "tag": "Bipolar depression",
    "stem": "A 22-year-old has a severe major depressive episode with hypersomnia, psychomotor slowing and transient psychotic features. Her mother and maternal uncle have bipolar I disorder. She has never had a hypomanic or manic episode.",
    "q": "What is the current diagnosis, and what should guide treatment?",
    "choices": [
      "Bipolar II disorder; start a mood stabilizer",
      "Bipolar I disorder, because of her family history",
      "Major depressive disorder, with psychotic features; her features raise the risk of a later bipolar course",
      "Schizoaffective disorder",
      "Unspecified bipolar and related disorder"
    ],
    "answer": 2,
    "why": "Without a manic or hypomanic episode, the diagnosis is **MDD**. Early onset, psychotic features, a family history of bipolar disorder and atypical-like features increase the risk that the course will become bipolar, so monitor closely and be cautious with antidepressant monotherapy.",
    "whyNot": [
      "She has never had a hypomanic episode.",
      "Family history raises risk but does not make the diagnosis.",
      "Correct.",
      "Her psychosis occurs only during the depressive episode.",
      "Her presentation meets criteria for MDD."
    ]
  }
]);
