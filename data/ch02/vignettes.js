/* Chapter 2 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch02", "vignettes", [
  {
    "id": "v2-01",
    "tag": "Schizophrenia time rule",
    "stem": "A 22-year-old university student is admitted with 5 weeks of voices commenting on his actions and a belief that his professors implanted a tracking chip in his tooth. His parents say that for about 6 months before the voices began he gradually withdrew from friends, stopped showering, failed his courses and spoke of “energy fields” he could feel around people. There is no mood episode, no substance use, and medical workup is normal.",
    "q": "What is the diagnosis?",
    "choices": [
      "Schizophreniform disorder",
      "Schizophrenia",
      "Brief psychotic disorder",
      "Delusional disorder",
      "Schizotypal personality disorder"
    ],
    "answer": 1,
    "why": "The 6-month requirement (Criterion C) counts **prodromal and residual** periods, which may show only negative symptoms or attenuated Criterion A symptoms (odd beliefs, unusual perceptual experiences). Six months of prodrome plus 5 weeks of active-phase symptoms is more than 6 months: **schizophrenia**.",
    "whyNot": [
      "Schizophreniform needs a total duration under 6 months, including the prodrome. His illness is already longer.",
      "Correct.",
      "Brief psychotic disorder lasts under 1 month with a full return to baseline.",
      "Delusional disorder requires that Criterion A for schizophrenia has never been met; he has hallucinations and delusions.",
      "His odd beliefs and withdrawal were the prodrome of a psychotic illness, not a lifelong personality pattern."
    ],
    "then": {
      "q": "Which course specifier should be recorded now?",
      "choices": [
        "First episode, currently in acute episode",
        "Continuous",
        "Multiple episodes, currently in acute episode",
        "None yet: course specifiers are used only after 1 year",
        "Unspecified"
      ],
      "answer": 3,
      "why": "Course specifiers for schizophrenia are used only **after a 1-year duration** of the disorder. At about 7 months, none is recorded yet.",
      "whyNot": [
        "It describes his illness, but the specifier is not used before 1 year.",
        "Continuous also requires the 1-year duration.",
        "He has had only one episode, and the 1-year rule applies anyway.",
        "Correct.",
        "“Unspecified” is still a course specifier and is subject to the same rule."
      ]
    }
  },
  {
    "id": "v2-02",
    "tag": "Schizophreniform",
    "stem": "A 19-year-old who had been a popular, high-achieving student becomes acutely suspicious and confused over 10 days, hearing voices and appearing bewildered. Her affect is anxious and reactive, not flat. She has now been ill for 7 weeks and is improving on treatment, but has not yet returned to baseline. No mood episode, substance or medical cause.",
    "q": "What is the most appropriate diagnosis now?",
    "choices": [
      "Schizophrenia",
      "Brief psychotic disorder",
      "Schizophreniform disorder",
      "Schizophreniform disorder, provisional",
      "Unspecified schizophrenia spectrum and other psychotic disorder"
    ],
    "answer": 3,
    "why": "Criterion A is met and the illness has lasted more than 1 month but less than 6. Because she has **not yet recovered** and the illness could still pass 6 months, the diagnosis is recorded as **provisional**.",
    "whyNot": [
      "Schizophrenia needs at least 6 months.",
      "Brief psychotic disorder ends within 1 month.",
      "Without “provisional,” the label implies she has recovered within 6 months.",
      "Correct.",
      "Her presentation meets criteria for a specific disorder."
    ],
    "then": {
      "q": "Which specifier applies?",
      "choices": [
        "With good prognostic features",
        "Without good prognostic features",
        "With catatonia",
        "With marked stressor",
        "With peripartum onset"
      ],
      "answer": 0,
      "why": "Good prognostic features need **two of four**: psychotic symptoms within 4 weeks of the first change, **confusion or perplexity**, **good premorbid functioning**, and **absence of blunted or flat affect**. She has all four.",
      "whyNot": [
        "Correct.",
        "She has at least two good prognostic features.",
        "There are no catatonic features.",
        "Marked stressor is a brief psychotic disorder specifier.",
        "Peripartum onset is a brief psychotic disorder specifier and does not apply."
      ]
    }
  },
  {
    "id": "v2-03",
    "tag": "Brief psychotic",
    "stem": "Three days after surviving an earthquake that destroyed his village and killed his brother, a 34-year-old man becomes agitated, believes soldiers are coming to execute him and hears his brother calling him. His family says he was completely well before. Eleven days later the symptoms have fully resolved and he is back to his usual self.",
    "q": "What is the diagnosis?",
    "choices": [
      "Brief psychotic disorder, with marked stressor",
      "Acute stress disorder",
      "Schizophreniform disorder",
      "Brief psychotic disorder, without marked stressor",
      "Posttraumatic stress disorder with psychotic features"
    ],
    "answer": 0,
    "why": "Delusions and hallucinations lasting at least 1 day but less than 1 month, with full recovery, after events that would be markedly stressful to almost anyone in the person’s culture: **brief psychotic disorder with marked stressor(s)**, also called brief reactive psychosis.",
    "whyNot": [
      "Correct.",
      "Acute stress disorder involves intrusions, dissociation, avoidance and arousal, not delusions and hallucinations.",
      "Schizophreniform needs at least 1 month.",
      "A catastrophe of this size is a marked stressor.",
      "PTSD needs symptoms for more than 1 month, and DSM-5-TR has no psychotic-features specifier for it."
    ],
    "then": {
      "q": "What is the ICD-10-CM code?",
      "choices": [
        "F23",
        "F20.81",
        "F43.0",
        "F28",
        "F29"
      ],
      "answer": 0,
      "why": "Brief psychotic disorder is **F23**, whatever the specifier.",
      "whyNot": [
        "Correct.",
        "F20.81 is schizophreniform disorder.",
        "F43.0 is acute stress disorder.",
        "F28 is other specified schizophrenia spectrum and other psychotic disorder.",
        "F29 is unspecified schizophrenia spectrum and other psychotic disorder."
      ]
    }
  },
  {
    "id": "v2-04",
    "tag": "Delusional disorder",
    "stem": "A 61-year-old retired teacher has been convinced for 8 months that tiny insects live under her skin. She feels them crawling, picks at her arms and brings “specimens” of lint to her dermatologist. Otherwise she runs her household, plays bridge weekly and has no other odd behavior. Toxicology and medical workup are normal.",
    "q": "What is the diagnosis?",
    "choices": [
      "Schizophrenia",
      "Somatic symptom disorder",
      "Excoriation disorder",
      "Substance-induced psychotic disorder",
      "Delusional disorder"
    ],
    "answer": 4,
    "why": "A delusion for at least 1 month, with functioning otherwise preserved. **Tactile hallucinations related to the delusional theme** (feeling infestation with insects) are allowed in delusional disorder.",
    "whyNot": [
      "Schizophrenia needs two Criterion A symptoms and marked functional decline; hallucinations here are not prominent and fit the delusion.",
      "Somatic symptom disorder involves excessive worry about real symptoms, not a fixed false belief.",
      "Skin picking here is driven by a delusion, not by urges to pick.",
      "Toxicology is negative, and there is no stimulant use (a classic cause of formication).",
      "Correct."
    ],
    "then": {
      "q": "Which subtype applies?",
      "choices": [
        "Persecutory type",
        "Somatic type",
        "Grandiose type",
        "Mixed type",
        "Unspecified type"
      ],
      "answer": 1,
      "why": "Delusions centered on **bodily functions or sensations**, such as infestation, are the **somatic type**.",
      "whyNot": [
        "Persecutory delusions are about being harmed, cheated or conspired against.",
        "Correct.",
        "Grandiose delusions involve great talent, insight or importance.",
        "Mixed type is for when no single theme predominates.",
        "The theme here is clear."
      ]
    }
  },
  {
    "id": "v2-05",
    "tag": "OCD vs delusional disorder",
    "stem": "A 30-year-old man has spent 6 hours a day washing for 2 years because he is completely convinced that touching doorknobs will give him HIV, despite repeated negative tests. He knows the hand-washing is wrecking his life but feels it must be done. He has no hallucinations or other unusual beliefs.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Delusional disorder, somatic type",
      "Illness anxiety disorder",
      "Obsessive-compulsive disorder, with absent insight/delusional beliefs",
      "Schizophrenia",
      "Other specified psychotic disorder"
    ],
    "answer": 2,
    "why": "Contamination obsessions with washing compulsions are **OCD**, even when held with full conviction. The insight specifier **with absent insight/delusional beliefs** captures this; delusional disorder is excluded when OCD better explains the beliefs.",
    "whyNot": [
      "Criterion E of delusional disorder excludes beliefs better explained by OCD or body dysmorphic disorder.",
      "Illness anxiety disorder does not involve compulsions of this kind or delusional conviction.",
      "Correct.",
      "There are no other psychotic symptoms.",
      "A specific disorder explains the picture."
    ]
  },
  {
    "id": "v2-06",
    "tag": "Schizoaffective",
    "stem": "A 28-year-old woman has been ill for 3 years. She has had two manic episodes and one major depressive episode, which together account for most of the illness. During each mood episode she was also hallucinating and delusional. After her last manic episode resolved, her command hallucinations and persecutory delusions persisted for 4 more weeks without any mood symptoms.",
    "q": "What is the diagnosis?",
    "choices": [
      "Bipolar I disorder, with psychotic features",
      "Schizoaffective disorder, bipolar type",
      "Schizophrenia",
      "Schizoaffective disorder, depressive type",
      "Delusional disorder"
    ],
    "answer": 1,
    "why": "Mood episodes concurrent with Criterion A, **psychosis for ≥2 weeks without a mood episode**, and mood episodes for the **majority** of the illness: schizoaffective disorder. A manic episode makes it **bipolar type**.",
    "whyNot": [
      "In bipolar disorder with psychotic features, psychosis occurs only during mood episodes.",
      "Correct.",
      "In schizophrenia, mood episodes occupy only a minority of the illness.",
      "Depressive type applies only when there have been major depressive episodes and no manic episode.",
      "Delusional disorder excludes prominent hallucinations and mood episodes that dominate the course."
    ],
    "then": {
      "q": "What is the code?",
      "choices": [
        "F25.0",
        "F25.1",
        "F31.2",
        "F20.9",
        "F25.9"
      ],
      "answer": 0,
      "why": "Schizoaffective disorder, **bipolar type = F25.0**; depressive type = F25.1.",
      "whyNot": [
        "Correct.",
        "F25.1 is the depressive type.",
        "F31.2 is bipolar I, current episode manic, with psychotic features.",
        "F20.9 is schizophrenia.",
        "F25.9 is not a DSM-5-TR schizoaffective code."
      ]
    }
  },
  {
    "id": "v2-07",
    "tag": "Bipolar vs psychotic disorder",
    "stem": "A 33-year-old man is admitted with grandiose delusions that he is a prophet, pressured speech, no sleep and spending sprees. This is his third admission; each time the delusions began with a manic episode and cleared completely within days of the mood normalizing. Between episodes he works as an accountant without any psychotic symptoms.",
    "q": "What is the diagnosis?",
    "choices": [
      "Schizoaffective disorder, bipolar type",
      "Schizophrenia",
      "Delusional disorder, grandiose type",
      "Bipolar I disorder, current episode manic, with psychotic features",
      "Brief psychotic disorder"
    ],
    "answer": 3,
    "why": "Psychotic symptoms that occur **only during mood episodes** point to a mood disorder with psychotic features. Schizoaffective disorder needs ≥2 weeks of psychosis without a major mood episode.",
    "whyNot": [
      "He has never had psychosis outside a mood episode.",
      "There is no psychosis between episodes and mood episodes dominate the illness.",
      "Delusional disorder excludes mood episodes that dominate the course.",
      "Correct.",
      "Brief psychotic disorder is excluded when a mood disorder with psychotic features explains the symptoms."
    ]
  },
  {
    "id": "v2-08",
    "tag": "Substance-induced",
    "stem": "A 20-year-old with severe cannabis use disorder (high-potency products daily for 3 years) develops persecutory delusions and hears voices while using heavily. He has no prior psychiatric history, and the symptoms began within days of a binge. He believes the voices are real.",
    "q": "What is the most appropriate diagnosis now?",
    "choices": [
      "Severe cannabis use disorder with cannabis-induced psychotic disorder, with onset during intoxication",
      "Cannabis intoxication, with perceptual disturbances",
      "Schizophrenia",
      "Brief psychotic disorder",
      "Cannabis-induced psychotic disorder without use disorder"
    ],
    "answer": 0,
    "why": "Delusions and hallucinations during heavy use, by a substance that can cause them, with no evidence of an independent disorder. The comorbid use disorder is written first and sets the 4th character; no separate use disorder diagnosis is given.",
    "whyNot": [
      "Correct.",
      "“With perceptual disturbances” is used when **reality testing is intact**; he believes the voices are real.",
      "Schizophrenia needs 6 months and no substance explanation.",
      "Brief psychotic disorder is excluded when a substance explains the symptoms.",
      "He has a severe use disorder, which must be named."
    ],
    "then": {
      "q": "What is the ICD-10-CM code?",
      "choices": [
        "F12.159",
        "F12.259",
        "F12.959",
        "F12.24",
        "F19.259"
      ],
      "answer": 1,
      "why": "Cannabis (F12), **moderate or severe** use disorder (4th character **2**), induced psychotic disorder (**59**): **F12.259**.",
      "whyNot": [
        "The 1 is for a mild use disorder.",
        "Correct.",
        "The 9 is for no use disorder.",
        "F12.24 is not the psychotic disorder code.",
        "F19 is for other or unknown substances; cannabis has its own class."
      ]
    }
  },
  {
    "id": "v2-09",
    "tag": "Medication cause",
    "stem": "A 45-year-old woman with lupus is started on high-dose prednisone. Five days later she becomes convinced her neighbors are poisoning her water and hears them plotting through the wall. She has no prior psychiatric history, no delirium, and no evidence of CNS lupus on workup. The psychosis predominates and needs treatment.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Psychotic disorder due to systemic lupus erythematosus",
      "Schizophreniform disorder",
      "Brief psychotic disorder",
      "Delirium",
      "Prednisone-induced psychotic disorder"
    ],
    "answer": 4,
    "why": "Psychosis beginning days after starting a medication known to cause it, with no evidence of CNS lupus, is **medication-induced**. Corticosteroids are coded as an **other (or unknown) substance**: F19.959 without a use disorder.",
    "whyNot": [
      "Workup shows no CNS involvement, and the timing follows the medication. When both may contribute, clinical judgment decides.",
      "Schizophreniform needs at least 1 month and no substance explanation.",
      "Brief psychotic disorder is excluded when a substance or medication explains the symptoms.",
      "Attention and awareness are intact.",
      "Correct."
    ]
  },
  {
    "id": "v2-10",
    "tag": "Medical cause",
    "stem": "A 38-year-old man with poorly controlled temporal lobe epilepsy has a cluster of three seizures. After a lucid interval of about 36 hours, he becomes intensely paranoid and hears voices accusing him of crimes. Attention is intact. The episode resolves over a week.",
    "q": "Which statement is most accurate?",
    "choices": [
      "This is brief psychotic disorder",
      "This is delirium, so no psychotic diagnosis can be made",
      "This is postictal psychosis, the most common form of epilepsy-related psychosis",
      "This is interictal psychosis, the most common form",
      "Epilepsy-related psychosis is diagnosed as schizophrenia when hallucinations are prominent"
    ],
    "answer": 2,
    "why": "Psychosis after a cluster of seizures, typically following a **lucid interval**, is **postictal psychosis**, the most common epilepsy-related psychosis. It is diagnosed as **psychotic disorder due to another medical condition** (F06.0 if hallucinations predominate, F06.2 if delusions predominate).",
    "whyNot": [
      "Brief psychotic disorder is excluded when a medical condition explains the psychosis.",
      "Delirium requires a disturbance of attention and awareness, which is absent here.",
      "Correct.",
      "Interictal psychosis occurs between seizures and can be chronic; it is less common than postictal psychosis.",
      "A medical cause takes precedence."
    ]
  },
  {
    "id": "v2-11",
    "tag": "Delirium",
    "stem": "Two days after hip surgery, an 82-year-old woman sees children playing on her hospital bed and believes the nurses are stealing from her. She is drowsy in the morning, agitated at night, cannot keep track of a conversation and is disoriented to date. She had no psychiatric history.",
    "q": "What is the diagnosis?",
    "choices": [
      "Brief psychotic disorder",
      "Delirium",
      "Psychotic disorder due to another medical condition",
      "Major neurocognitive disorder with psychotic features",
      "Late-onset schizophrenia"
    ],
    "answer": 1,
    "why": "An acute, **fluctuating disturbance of attention and awareness** after surgery is **delirium**. Psychotic symptoms that occur only during delirium are not diagnosed separately.",
    "whyNot": [
      "Brief psychotic disorder occurs in a clear sensorium.",
      "Correct.",
      "Psychotic disorder due to another medical condition is not diagnosed when the symptoms occur exclusively during delirium.",
      "There is no history of prior cognitive decline, and the onset is acute and fluctuating.",
      "Schizophrenia needs 6 months and occurs in a clear sensorium."
    ]
  },
  {
    "id": "v2-12",
    "tag": "Catatonia due to medical condition",
    "stem": "A 55-year-old man with cirrhosis is brought in mute, holding rigid postures, resisting all attempts to move him and staring. He is awake and follows the examiner with his eyes, with no fluctuation in alertness. His ammonia is markedly elevated, and the same picture cleared with lactulose at a previous admission. He has no psychiatric history.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Catatonia associated with schizophrenia",
      "Neuroleptic malignant syndrome",
      "Unspecified catatonia",
      "Catatonic disorder due to hepatic encephalopathy",
      "Major depressive disorder, with catatonia"
    ],
    "answer": 3,
    "why": "Three or more catatonic features (mutism, posturing, negativism, staring/stupor) with evidence that they are the **direct pathophysiological consequence of a medical condition**: catatonic disorder due to another medical condition.",
    "whyNot": [
      "There is no evidence of schizophrenia.",
      "There is no exposure to a dopamine blocker, fever or autonomic instability.",
      "Unspecified catatonia is for when the cause is unclear; here it is clear.",
      "Correct.",
      "There is no depressive episode."
    ],
    "then": {
      "q": "How is it recorded?",
      "choices": [
        "F06.1 catatonic disorder due to hepatic encephalopathy; K72.90 hepatic encephalopathy",
        "K72.90 hepatic encephalopathy; F06.1 catatonic disorder due to hepatic encephalopathy",
        "R29.818; F06.1 unspecified catatonia",
        "F06.1 catatonia associated with another mental disorder",
        "K72.90 hepatic encephalopathy only"
      ],
      "answer": 1,
      "why": "The medical condition is coded and listed **immediately before** the catatonic disorder due to it, and its name goes into the disorder’s name.",
      "whyNot": [
        "The order is reversed.",
        "Correct.",
        "Unspecified catatonia is for when the cause is unclear.",
        "That code is for catatonia accompanying a mental disorder.",
        "The catatonia needs its own diagnosis."
      ]
    }
  },
  {
    "id": "v2-13",
    "tag": "Culture and religion",
    "stem": "A 40-year-old woman from a Pentecostal congregation tells her new primary care physician that she sometimes hears the voice of God during prayer services and has spoken in tongues. Her pastor and fellow members describe the same experiences. She works full time, raises two children, has no other unusual beliefs and is not distressed.",
    "q": "What is the most appropriate conclusion?",
    "choices": [
      "No psychotic disorder: these are culturally sanctioned experiences",
      "Brief psychotic disorder",
      "Schizophrenia, since hallucinations are present",
      "Other specified psychotic disorder (persistent auditory hallucinations)",
      "Schizotypal personality disorder"
    ],
    "answer": 0,
    "why": "Experiences shared and accepted within the person’s religious or cultural group, without distress, impairment or other psychotic features, are **not** symptoms of a psychotic disorder. Brief psychotic disorder explicitly excludes culturally sanctioned responses, and glossolalia alone is not disorganized speech.",
    "whyNot": [
      "Correct.",
      "A culturally sanctioned response is not counted as a symptom.",
      "Schizophrenia needs two Criterion A symptoms, functional decline and 6 months, assessed against cultural norms.",
      "Her experiences occur in a religious context and are not persistent hallucinations outside it.",
      "There is no pervasive pattern of eccentricity, social discomfort or odd beliefs beyond her subculture."
    ],
    "discuss": [
      "How would you use the Cultural Formulation Interview here?",
      "What would make you reconsider a psychotic disorder?"
    ]
  },
  {
    "id": "v2-14",
    "tag": "Secondary negative symptoms",
    "stem": "A 27-year-old man with schizophrenia has been stable on haloperidol for a year. Two weeks after his dose was doubled for a relapse, his family reports he barely shows any facial expression, speaks less, moves slowly and stays in his room. On exam he has cogwheel rigidity and a shuffling gait.",
    "q": "What best explains his new “negative” symptoms?",
    "choices": [
      "Progression of primary negative symptoms",
      "A new major depressive episode",
      "Tardive dyskinesia",
      "Catatonia associated with schizophrenia",
      "Medication-induced parkinsonism"
    ],
    "answer": 4,
    "why": "Reduced expression and movement that begin soon after a **dose increase**, with rigidity and shuffling gait, are **secondary** negative symptoms from **medication-induced parkinsonism**. Always rule out secondary causes before attributing negative symptoms to the illness.",
    "whyNot": [
      "Primary negative symptoms do not come with new rigidity and gait change after a dose increase.",
      "Depression can mimic negative symptoms, but there is no depressed mood here, and the parkinsonian signs point elsewhere.",
      "Tardive dyskinesia is involuntary choreoathetoid movement after long exposure, not bradykinesia.",
      "Catatonia needs three of the 12 catatonic features; rigidity and slowness from a D2 blocker are parkinsonism.",
      "Correct."
    ]
  },
  {
    "id": "v2-15",
    "tag": "Schizophrenia vs schizoaffective",
    "stem": "A 36-year-old man has had continuous hallucinations and delusions for 6 years. Over that time he has had two major depressive episodes, of 6 weeks and 2 months, both while psychotic. He was never manic.",
    "q": "What is the diagnosis?",
    "choices": [
      "Schizoaffective disorder, depressive type",
      "Major depressive disorder, with psychotic features",
      "Schizophrenia",
      "Schizophrenia and major depressive disorder",
      "Delusional disorder"
    ],
    "answer": 2,
    "why": "Mood episodes have occupied only about 3½ months of a 6-year illness, a **minority** of its duration. Schizoaffective disorder needs mood episodes for the **majority** of the active and residual illness.",
    "whyNot": [
      "Mood symptoms do not fill the majority of the illness.",
      "Psychosis has persisted for years outside the mood episodes.",
      "Correct.",
      "MDD is not diagnosed when the depressive episodes are superimposed on schizophrenia; they can be noted as other specified depressive disorder.",
      "Delusional disorder excludes schizophrenia’s Criterion A and prominent hallucinations."
    ]
  },
  {
    "id": "v2-16",
    "tag": "Delusional disorder",
    "stem": "A 47-year-old accountant has believed for 5 months that surgeons removed his kidneys during a colonoscopy and replaced them with a dead man’s, without leaving any scar. He continues to work and manage his finances, and his behavior is otherwise ordinary. He has no hallucinations, mood episodes or substance use.",
    "q": "What is the diagnosis?",
    "choices": [
      "Schizophrenia, because the delusion is bizarre",
      "Delusional disorder, somatic type, with bizarre content",
      "Delusional disorder is excluded by a bizarre delusion",
      "Schizophreniform disorder",
      "Body dysmorphic disorder"
    ],
    "answer": 1,
    "why": "Since DSM-5, a single bizarre delusion no longer means schizophrenia, and delusional disorder **can** have bizarre content: add the specifier **with bizarre content**. The theme concerns bodily organs, so the type is somatic.",
    "whyNot": [
      "Schizophrenia needs two Criterion A symptoms; one delusion is not enough, bizarre or not.",
      "Correct.",
      "DSM-IV excluded bizarre delusions; DSM-5 and DSM-5-TR do not.",
      "Schizophreniform also needs two Criterion A symptoms.",
      "Body dysmorphic disorder is a preoccupation with perceived flaws in appearance."
    ]
  },
  {
    "id": "v2-17",
    "tag": "Course specifiers",
    "stem": "A 31-year-old woman has had schizophrenia for 5 years. She had a first episode at 26, recovered partly, relapsed twice after stopping medication, and has now been stable for 8 months with mild residual suspiciousness and negative symptoms that do not meet Criterion A.",
    "q": "Which course specifier applies?",
    "choices": [
      "First episode, currently in partial remission",
      "Continuous",
      "Multiple episodes, currently in full remission",
      "Multiple episodes, currently in partial remission",
      "Multiple episodes, currently in acute episode"
    ],
    "answer": 3,
    "why": "Multiple episodes means at least two (a first episode, a remission and at least one relapse). Improvement maintained with criteria only partly met is **partial remission**.",
    "whyNot": [
      "She has had more than one episode.",
      "Continuous means symptoms meeting criteria for most of the illness, with only brief subthreshold periods.",
      "Residual symptoms remain, so it is not full remission.",
      "Correct.",
      "She does not currently meet Criterion A."
    ]
  },
  {
    "id": "v2-18",
    "tag": "Schizotypal",
    "stem": "A 23-year-old man develops schizophrenia. Since early adolescence he had been described as odd: few friends, magical thinking, ideas of reference without delusional conviction, eccentric dress and marked social anxiety, all meeting criteria for schizotypal personality disorder before the psychosis began.",
    "q": "How is his earlier pattern recorded alongside the schizophrenia?",
    "choices": [
      "Schizotypal personality disorder (premorbid)",
      "It is absorbed into the schizophrenia diagnosis and not recorded",
      "Attenuated psychosis syndrome",
      "Schizoid personality disorder",
      "Other specified psychotic disorder"
    ],
    "answer": 0,
    "why": "When schizotypal personality disorder criteria were met **before** the onset of schizophrenia, it is recorded with the word **“(premorbid)”** after it.",
    "whyNot": [
      "Correct.",
      "The manual allows it to be recorded, marked premorbid.",
      "Attenuated psychosis syndrome is a condition for further study, and his pattern was long-standing and trait-like.",
      "Schizoid personality lacks the cognitive-perceptual distortions and eccentricity.",
      "Not applicable to a long-standing personality pattern."
    ]
  },
  {
    "id": "v2-19",
    "tag": "Substance vs independent",
    "stem": "A 26-year-old man had persecutory delusions and auditory hallucinations during a 2-week methamphetamine binge. He has now been abstinent in a supervised setting for 7 weeks, but the voices and delusions continue unchanged, and his family says he had been withdrawn and suspicious for a year before he started using.",
    "q": "What is the most appropriate interpretation?",
    "choices": [
      "Methamphetamine-induced psychotic disorder, which can last many months",
      "Malingering",
      "Methamphetamine withdrawal",
      "Hallucinogen persisting perception disorder",
      "An independent psychotic disorder is likely"
    ],
    "answer": 4,
    "why": "Evidence of an **independent** disorder: symptoms that **persist for a substantial period (about 1 month)** after withdrawal or intoxication ends, and evidence of illness **before** substance use. The prodromal year argues for a primary psychotic disorder.",
    "whyNot": [
      "Although stimulant psychosis can be prolonged, persistence beyond about a month plus prior symptoms points to an independent disorder.",
      "Nothing suggests feigning.",
      "Stimulant withdrawal brings dysphoria, fatigue and hypersomnia, not persistent psychosis.",
      "HPPD involves recurring perceptual disturbances after hallucinogens, with intact reality testing.",
      "Correct."
    ]
  },
  {
    "id": "v2-20",
    "tag": "Hallucinogens",
    "stem": "A 24-year-old woman reports that, months after several LSD experiences, she still sees trails behind moving objects and halos around lights, several times a week. She knows they are not real, is distressed by them and has not used any drug for 6 months. She has no delusions.",
    "q": "What is the diagnosis?",
    "choices": [
      "Hallucinogen-induced psychotic disorder",
      "Schizophrenia",
      "Hallucinogen persisting perception disorder",
      "Psychotic disorder due to another medical condition",
      "Other specified psychotic disorder"
    ],
    "answer": 2,
    "why": "Re-experiencing perceptual disturbances (“flashbacks”) after stopping a hallucinogen, with **intact reality testing**, is **hallucinogen persisting perception disorder**, not a psychotic disorder.",
    "whyNot": [
      "Psychotic disorders require the experiences to be taken as real; she has insight.",
      "There are no delusions or other Criterion A symptoms.",
      "Correct.",
      "Nothing suggests a medical cause, though migraine and seizures belong in the differential.",
      "Her experiences are explained by a specific disorder."
    ]
  },
  {
    "id": "v2-21",
    "tag": "Unspecified catatonia",
    "stem": "A man of about 40 is brought to the emergency department by police, mute, staring and holding his arms in odd postures. He has no identification, no history is available, vitals and initial labs are normal, and a full workup is pending.",
    "q": "How is this recorded for now?",
    "choices": [
      "F06.1 catatonia associated with schizophrenia",
      "R29.818 other symptoms involving nervous and musculoskeletal systems; F06.1 unspecified catatonia",
      "F06.1 catatonic disorder due to another medical condition",
      "F29 unspecified psychotic disorder",
      "G21.0 neuroleptic malignant syndrome"
    ],
    "answer": 1,
    "why": "When catatonia is present but the underlying mental or medical condition is unclear, or information is insufficient (as in an emergency setting), it is **unspecified catatonia**: code first **R29.818**, then **F06.1**.",
    "whyNot": [
      "No psychotic disorder has been established.",
      "Correct.",
      "No medical cause has been established yet.",
      "There is no evidence of psychotic symptoms; the presentation is catatonic.",
      "There is no fever, rigidity with autonomic instability or dopamine-blocker exposure documented."
    ]
  },
  {
    "id": "v2-22",
    "tag": "Brief psychotic peripartum",
    "stem": "Ten days after delivering her first child, a 30-year-old woman becomes acutely convinced that the hospital switched her baby and hears voices telling her the child is an impostor. She has no mood episode, no prior psychiatric history, and medical workup including thyroid tests is normal. Within 3 weeks she has fully recovered.",
    "q": "Which diagnosis fits best?",
    "choices": [
      "Postpartum delirium",
      "Major depressive disorder, with psychotic features and peripartum onset",
      "Bipolar I disorder, with peripartum onset",
      "Brief psychotic disorder, with peripartum onset",
      "Delusional disorder"
    ],
    "answer": 3,
    "why": "Psychosis lasting at least 1 day but less than 1 month with full recovery, beginning **during pregnancy or within 4 weeks postpartum**, without a mood episode: **brief psychotic disorder, with peripartum onset**. Postpartum psychosis is often bipolar, so follow-up matters.",
    "whyNot": [
      "Attention and awareness are intact.",
      "There is no major depressive episode.",
      "There is no manic episode, though bipolar disorder is the leading concern in postpartum psychosis.",
      "Correct.",
      "Delusional disorder needs at least 1 month and does not resolve in 3 weeks."
    ]
  },
  {
    "id": "v2-23",
    "tag": "Delusional disorder vs schizophrenia",
    "stem": "A 52-year-old man has believed for 2 years that his former employer is having him followed. He files police complaints and has changed his locks, but works as an engineer and is pleasant with his family. He has never had hallucinations, disorganized speech or negative symptoms. A brief depressive episode last year lasted 3 weeks.",
    "q": "Which feature is consistent with delusional disorder here?",
    "choices": [
      "A brief mood episode relative to the duration of the delusional periods",
      "Prominent auditory hallucinations commenting on him",
      "Marked decline in functioning across all areas",
      "Disorganized speech",
      "Delusions only during the depressive episode"
    ],
    "answer": 0,
    "why": "Criterion D allows manic or major depressive episodes if they have been **brief relative to the duration of the delusional periods**. His functioning outside the delusion is preserved (Criterion C).",
    "whyNot": [
      "Correct.",
      "Prominent hallucinations would point toward schizophrenia; in delusional disorder they are absent or not prominent and related to the theme.",
      "Functioning apart from the delusion is not markedly impaired in delusional disorder.",
      "Disorganized speech is a Criterion A symptom of schizophrenia.",
      "That would suggest a depressive disorder with psychotic features."
    ]
  },
  {
    "id": "v2-24",
    "tag": "Clozapine and suicide",
    "stem": "A 25-year-old woman with schizoaffective disorder, depressive type, has had two serious suicide attempts in the past year despite adequate trials of risperidone and aripiprazole, both taken reliably.",
    "q": "Which medication is FDA-approved to reduce the risk of recurrent suicidal behavior in schizophrenia or schizoaffective disorder?",
    "choices": [
      "Xanomeline-trospium",
      "Lithium",
      "Haloperidol",
      "Lurasidone",
      "Clozapine"
    ],
    "answer": 4,
    "why": "**Clozapine** is approved for treatment-resistant schizophrenia and to reduce recurrent suicidal behavior in schizophrenia or schizoaffective disorder. The FDA ended the clozapine REMS program in 2025; neutropenia monitoring is still guided by the labeling. (Treatment is outside the DSM; see the treatment bridge.)",
    "whyNot": [
      "Xanomeline-trospium (2024) is approved for schizophrenia, without a suicide indication.",
      "Lithium has anti-suicidal effects in mood disorders but is not approved for this indication.",
      "Haloperidol has no such indication.",
      "Lurasidone is approved for schizophrenia and bipolar depression, not suicide risk reduction.",
      "Correct."
    ]
  },
  {
    "id": "v2-25",
    "tag": "Hallucinations without psychosis",
    "stem": "A 71-year-old woman with advanced macular degeneration describes seeing vivid, silent images of small people and flowers in her visual field. She knows they are not real, is not frightened and has no other psychiatric symptoms. Cognition is normal.",
    "q": "What is the most appropriate interpretation?",
    "choices": [
      "Late-onset schizophrenia",
      "Delirium",
      "Charles Bonnet syndrome: visual hallucinations from vision loss, with insight",
      "Psychotic disorder due to another medical condition",
      "Major neurocognitive disorder with Lewy bodies"
    ],
    "answer": 2,
    "why": "Vivid visual hallucinations in someone with significant vision loss, **with intact insight** and no other symptoms, fit **Charles Bonnet syndrome**. Insight and the absence of delusions argue against a psychotic disorder; visual hallucinations in late life should prompt a medical and neurological review.",
    "whyNot": [
      "There are no delusions, and insight is intact.",
      "Attention and awareness are normal.",
      "Correct.",
      "Psychotic disorder due to another medical condition requires prominent hallucinations or delusions that are not explained otherwise; with full insight and vision loss, Charles Bonnet syndrome is the better fit.",
      "Cognition is normal, and there is no parkinsonism or fluctuation."
    ]
  }
]);
