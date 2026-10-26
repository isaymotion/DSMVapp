/* Chapter 17 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Codes are current (APA coding updates 2022–2025). Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch17", "vignettes", [
  {
    "id": "v17-01",
    "tag": "Hypoactive delirium",
    "stem": "An 84-year-old woman is admitted with a urinary tract infection. Her daughter says she lived alone, cooked, and managed her own money until 3 days ago. On the ward she sleeps most of the day, answers slowly, loses track of questions halfway through, cannot name the months backward, and thinks she is in her own home. By late evening she is even harder to rouse. Nurses describe her as “no trouble at all.”",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Major NCD due to Alzheimer’s disease",
      "Delirium due to another medical condition, acute, hypoactive",
      "Major depressive disorder with psychomotor retardation",
      "Unspecified neurocognitive disorder",
      "Delirium due to another medical condition, acute, hyperactive"
    ],
    "answer": 1,
    "why": "A disturbance of **attention and awareness** that developed over **days**, is a clear change from baseline, fluctuates (worse in the evening) and has a **medical cause**: **delirium due to the UTI**, **acute**, **hypoactive** (sluggish, drowsy). Code the infection first, then **F05**.",
    "whyNot": [
      "She was independent 3 days ago; NCD needs a decline from baseline that is not only during delirium.",
      "Correct.",
      "Inattention and disorientation of acute onset with a medical cause point to delirium, not depression.",
      "Full delirium criteria are met.",
      "She is drowsy and slowed, not agitated."
    ],
    "then": {
      "q": "Which statement about this presentation is supported by DSM-5-TR?",
      "choices": [
        "Hypoactive delirium is more frequent in older adults and is often unrecognized",
        "Hypoactive delirium is usually caused by drug withdrawal",
        "She cannot have delirium because she is not agitated",
        "Delirium in hospital typically lasts about 3 months",
        "Falls are an established risk factor for her delirium"
      ],
      "answer": 0,
      "why": "The **hypoactive** form is more frequent in **older adults** and often **missed** in EDs and hospitals; withdrawal is linked with the **hyperactive** form; hospital delirium usually lasts **about 1 week**; falls are an outcome, not a risk factor."
    },
    "discuss": [
      "Which bedside attention tests would you teach the night nurse?",
      "How would you explain to the daughter why her mother seems “quiet” rather than confused?"
    ]
  },
  {
    "id": "v17-02",
    "tag": "Withdrawal delirium",
    "stem": "A 52-year-old man has drunk about a liter of rum daily for 10 years, with failed attempts to cut down, morning tremor and lost jobs. Three days after emergency surgery for a fractured femur he is sweating, tremulous, pulse 124, shouting that insects are crawling on the walls, and pulling at his lines. He does not know where he is and cannot keep attention on a single question. Glucose and sodium are normal.",
    "q": "What is the correct diagnosis and code?",
    "choices": [
      "F05 delirium due to another medical condition",
      "F10.232 alcohol withdrawal with perceptual disturbances",
      "F10.921 alcohol intoxication delirium",
      "F10.231 severe alcohol use disorder with alcohol withdrawal delirium, acute, hyperactive",
      "F10.20 severe alcohol use disorder and F05 delirium"
    ],
    "answer": 3,
    "why": "Inattention, disorientation and hallucinations during **withdrawal**, severe enough for clinical attention: **alcohol withdrawal delirium**. With a **moderate or severe** use disorder the code is **F10.231**, recorded with course and activity level; **no separate** use disorder code.",
    "whyNot": [
      "The substance cause is clear; add F05 only if a medical condition also contributes (multiple etiologies).",
      "Perceptual disturbances with **intact reality testing** and no delirium; he is disoriented and inattentive.",
      "He is withdrawing, not intoxicated.",
      "Correct.",
      "The use disorder is folded into F10.231; it is not coded separately."
    ],
    "then": {
      "q": "Outside the DSM, which management is most appropriate?",
      "choices": [
        "Haloperidol alone to control agitation",
        "A benzodiazepine by symptom-triggered or loading protocol, with parenteral thiamine before glucose",
        "Physical restraints until withdrawal ends",
        "Donepezil",
        "Observation only, since withdrawal delirium resolves without treatment"
      ],
      "answer": 1,
      "why": "**Benzodiazepines** treat alcohol withdrawal delirium; give **thiamine** to prevent Wernicke’s encephalopathy and look for medical complications. Antipsychotics alone lower the seizure threshold and do not treat withdrawal."
    }
  },
  {
    "id": "v17-03",
    "tag": "Delirium on NCD",
    "stem": "A 79-year-old man with a 4-year history of gradually worsening memory has been needing help with his bills and medications for a year, but he dresses and bathes himself. Over the past 2 days, since starting oxybutynin for urgency, he has become restless at night, sees strangers in the room, and drifts in and out of conversations. His wife says this is “completely different” from his usual forgetfulness.",
    "q": "What is the best formulation?",
    "choices": [
      "Medication-induced delirium superimposed on major NCD",
      "Progression of his major NCD; no new diagnosis",
      "NCD with Lewy bodies, because of visual hallucinations",
      "Brief psychotic disorder",
      "Major NCD with behavioral disturbance only"
    ],
    "answer": 0,
    "why": "An **acute**, fluctuating change in **attention** after starting an **anticholinergic** is **delirium** (medication-induced, F19.921) **superimposed** on his established major NCD. The NCD increases vulnerability; **manage the delirium first**.",
    "whyNot": [
      "Correct.",
      "A change over 2 days with inattention is not the slow course of his NCD.",
      "Hallucinations began abruptly with a new drug; the picture is delirium, not a new neurodegenerative syndrome.",
      "Psychosis here comes with disturbed attention and a clear drug cause.",
      "The acute attention disturbance needs its own diagnosis."
    ],
    "discuss": [
      "Which other medications would you review in this man?",
      "When would you reassess his cognition?"
    ]
  },
  {
    "id": "v17-04",
    "tag": "Delirium vs coma",
    "stem": "A 61-year-old woman in intensive care after cardiac arrest has been deeply sedated for 4 days. Sedation was lightened this morning. She opens her eyes only to a sternal rub, does not follow commands and makes no verbal response. An EEG shows diffuse slowing.",
    "q": "What is the correct conclusion about delirium at this point?",
    "choices": [
      "Hypoactive delirium",
      "Other specified delirium",
      "Mixed-level delirium",
      "Persistent delirium",
      "Delirium cannot be assessed: her arousal is too low (stupor or coma)"
    ],
    "answer": 4,
    "why": "Criterion D: delirium is not diagnosed when arousal is so reduced that the person cannot respond to **verbal** stimulation. This is a **disorder of arousal**. Delirium often appears on **emergence**, so reassess as she wakes.",
    "whyNot": [
      "Hypoactive delirium still requires enough arousal to engage with assessment.",
      "This is not a subthreshold delirium; it is reduced arousal.",
      "Activity level cannot be judged without assessable consciousness.",
      "Duration is irrelevant until delirium can be assessed.",
      "Correct."
    ]
  },
  {
    "id": "v17-05",
    "tag": "Delirium vs psychosis",
    "stem": "A 68-year-old retired teacher with no psychiatric history is brought in after 36 hours of believing her neighbors are poisoning her water. She sees “little children” on the curtains. She cannot repeat five digits, loses the thread of the interview, and is oriented only to person. Temperature is 38.4 °C and she has flank tenderness. She was well a week ago.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "Delusional disorder, persecutory type",
      "Brief psychotic disorder",
      "Delirium due to another medical condition (pyelonephritis)",
      "Psychotic disorder due to another medical condition",
      "Major NCD with psychotic disturbance"
    ],
    "answer": 2,
    "why": "Psychotic symptoms with **impaired attention and orientation**, **acute** onset and an obvious **medical cause**: delirium (F05 after the infection code). **Visual** hallucinations also point to a medical cause.",
    "whyNot": [
      "Attention and orientation are disturbed; delusional disorder has a clear sensorium.",
      "Brief psychotic disorder is excluded when a medical condition explains the symptoms.",
      "Correct.",
      "Diagnose psychotic disorder due to another medical condition only when psychosis occurs **without** delirium.",
      "She was well a week ago; there is no prior decline."
    ]
  },
  {
    "id": "v17-06",
    "tag": "Major vs mild",
    "stem": "A 73-year-old retired bank manager notices over 2 years that he forgets recent conversations and must re-read chapters of novels. He now keeps a detailed calendar, sets phone reminders for his pills, and takes twice as long to do his tax return, but still does it himself. His wife confirms the change. Neuropsychological testing shows delayed recall 1.5 SD below norms for age and education; other domains are normal. MRI shows mild hippocampal atrophy. No genetic testing has been done and there is no family history.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Major NCD due to probable Alzheimer’s disease, mild",
      "Mild NCD due to possible Alzheimer’s disease",
      "Mild NCD due to probable Alzheimer’s disease",
      "Normal aging",
      "Major NCD due to possible Alzheimer’s disease"
    ],
    "answer": 1,
    "why": "Independence is **preserved** with compensation (mild NCD), with a **memory-led**, steadily progressive decline. At the **mild** level, **probable** requires a **causative mutation**; without one it is **possible**. Code **G31.84**.",
    "whyNot": [
      "He still manages his own finances and medications.",
      "Correct.",
      "Probable at the mild level needs genetic evidence.",
      "There is a confirmed concern and objective decline beyond norms.",
      "He is not dependent in IADLs."
    ],
    "then": {
      "q": "How is this diagnosis coded?",
      "choices": [
        "G30.9, G31.84",
        "G31.84",
        "G30.9, F06.70",
        "F03.A0",
        "R41.9"
      ],
      "answer": 1,
      "why": "**Possible** etiology at the mild level is coded **G31.84** alone; the Alzheimer’s code is used only for **probable** etiology (with F06.70/F06.71)."
    }
  },
  {
    "id": "v17-07",
    "tag": "Alzheimer’s coding",
    "stem": "An 81-year-old woman has had steadily worsening memory for 5 years without plateaus, now with word-finding pauses and getting lost in her own neighborhood. Over the past 6 months she has accused her daughter of stealing her jewelry and hits out during bathing. She needs help dressing and bathing but feeds herself. There is no history of stroke, and MRI shows hippocampal and parietal atrophy.",
    "q": "Which codes are correct?",
    "choices": [
      "G30.9, F02.81",
      "G30.9, F02.C11, F02.C2",
      "F03.B11, F03.B2",
      "G30.9, F02.B11, F02.B2",
      "G30.9, F02.B18"
    ],
    "answer": 3,
    "why": "**Probable** Alzheimer’s disease (memory plus other domains, steady decline, no plateaus) → **G30.9 + F02**. Help with **basic** ADLs = **moderate (B)**. Combative behavior = **agitation (11)**; theft delusions = **psychotic (2)**; each coded.",
    "whyNot": [
      "F02.81 is no longer valid, and severity is now coded.",
      "She is not fully dependent; that would be severe.",
      "Probable etiology uses G30.9 + F02, not F03.",
      "Correct.",
      "Agitation (x11) and psychosis (x2) have their own codes; x18 is for other disturbances."
    ]
  },
  {
    "id": "v17-08",
    "tag": "Frontotemporal",
    "stem": "A 55-year-old engineer is referred to psychiatry for “late-onset bipolar disorder.” Over 2 years he has made crude remarks to colleagues, bought three cars on impulse, eaten whole cakes at a sitting, and walks the same route around the block several times daily. He seems unmoved by his wife’s tears. He remembers recent events in detail and finds his way easily. He has never had a period of decreased need for sleep or racing thoughts. MRI shows bilateral medial frontal and anterior temporal atrophy. His wife now manages their money.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Major frontotemporal NCD, behavioral variant, probable",
      "Bipolar I disorder, current episode manic",
      "Major NCD due to Alzheimer’s disease",
      "Major frontotemporal NCD, behavioral variant, possible",
      "Obsessive-compulsive personality disorder"
    ],
    "answer": 0,
    "why": "Disinhibition, loss of empathy, **hyperorality** and stereotyped behavior (four of five), with **spared memory and navigation**, insidious progression and loss of IADL independence. **Imaging** showing frontal and anterior temporal involvement makes it **probable**: G31.09 + F02.A18.",
    "whyNot": [
      "Correct.",
      "No mood episode, and the decline is progressive.",
      "Memory and perceptual-motor function are spared.",
      "Neuroimaging was done and is supportive, so it is probable.",
      "Personality disorders begin early and are not acquired declines."
    ],
    "discuss": [
      "Why do people with behavioral-variant frontotemporal NCD often reach psychiatry first?",
      "Which treatments would you avoid or expect not to help?"
    ]
  },
  {
    "id": "v17-09",
    "tag": "Lewy bodies",
    "stem": "A 76-year-old man has had 18 months of slowly worsening concentration and planning. His wife says some days he is “almost himself” and on others stares blankly for hours. He describes small children sitting at the dinner table. For years he has shouted and kicked in his sleep. He has a mild resting tremor and slowed gait that began 6 months ago. He needs help with his pills and finances.",
    "q": "What is the diagnosis?",
    "choices": [
      "Major NCD due to Parkinson’s disease",
      "Major NCD with possible Lewy bodies",
      "Major NCD due to Alzheimer’s disease",
      "Delirium due to multiple etiologies",
      "Major NCD with probable Lewy bodies"
    ],
    "answer": 4,
    "why": "Three **core** features (fluctuating cognition, well-formed visual hallucinations, parkinsonism **after** cognitive decline) plus a **suggestive** one (REM sleep behavior disorder): **probable** NCD with Lewy bodies. Code G31.83 + F02.A2.",
    "whyNot": [
      "Parkinsonism came after the cognitive decline, not at least a year before.",
      "Two or more core features make it probable.",
      "Early attention, executive and visuoperceptual deficits with these features fit Lewy body disease.",
      "The course is 18 months of gradual decline; fluctuation is a core Lewy body feature.",
      "Correct."
    ],
    "then": {
      "q": "He becomes very agitated one evening. Which drug choice carries the greatest risk in this disorder?",
      "choices": [
        "Haloperidol",
        "Rivastigmine",
        "Melatonin",
        "Low-dose quetiapine",
        "Reorientation and family presence"
      ],
      "answer": 0,
      "why": "Up to **50%** have **severe neuroleptic sensitivity**; typical antipsychotics such as **haloperidol** can cause rigidity, sedation, falls and death. Cholinesterase inhibitors are used in Lewy body disease."
    }
  },
  {
    "id": "v17-10",
    "tag": "Lewy vs Parkinson’s",
    "stem": "A 70-year-old woman was diagnosed with Parkinson’s disease 7 years ago, with a good levodopa response. Over the past 2 years she has become slow in thinking, struggles to plan meals, and now needs her son to manage her medications and bills. She has occasional visual hallucinations of a cat. There is no history of stroke and MRI shows no vascular lesions.",
    "q": "What is the most appropriate diagnosis and code?",
    "choices": [
      "Major NCD with probable Lewy bodies: G31.83, F02.A2",
      "Major NCD possibly due to Parkinson’s disease: F03.A2",
      "Major NCD probably due to Parkinson’s disease: G20.C, F02.A2",
      "Major NCD probably due to Parkinson’s disease: G20, F02.81",
      "Psychotic disorder due to Parkinson’s disease only"
    ],
    "answer": 2,
    "why": "Parkinson’s disease preceded the NCD by **more than 1 year**, and there is **no mixed etiology**: **probably due to Parkinson’s disease**. Parkinson’s disease is **G20.C** since 2023; mild severity (IADLs) with psychotic disturbance = **F02.A2**.",
    "whyNot": [
      "Both expert systems agree on NCD due to PD when PD came at least 1 year first.",
      "Both conditions for probable are met.",
      "Correct.",
      "G20 and F02.81 are outdated codes.",
      "There is a major NCD; hallucinations can be added as F06.0 if a separate focus."
    ]
  },
  {
    "id": "v17-11",
    "tag": "Vascular",
    "stem": "A 74-year-old man with hypertension and atrial fibrillation had a left thalamic stroke 8 months ago. Since the stroke, his family notes he is slow, apathetic and unable to organize his day; there was no decline before it. He now needs help with medications and appointments but manages self-care. Cognition has been stable since the first month. MRI confirms the thalamic infarct.",
    "q": "What is the diagnosis and code?",
    "choices": [
      "Major vascular NCD, possible: F03.A3",
      "Major vascular NCD, probable, mild, with apathy: F01.A3",
      "Major NCD due to Alzheimer’s disease: G30.9, F02.A3",
      "Major vascular NCD, probable: I67.9, F01.A3",
      "Mild vascular NCD: I67.9, F06.71"
    ],
    "answer": 1,
    "why": "Onset **temporally related** to a documented stroke in a **strategic** site with imaging support: **probable** vascular NCD. Needs help with IADLs only = **mild (A)**. Apathy is coded as **mood disturbance (3)**. No cerebrovascular code is added for **major** vascular NCD.",
    "whyNot": [
      "Imaging and a documented, temporally related event make it probable.",
      "Correct.",
      "There was no prior memory decline; onset followed the stroke.",
      "I67.9 is used only for mild vascular NCD.",
      "He needs help with IADLs, so this is major NCD."
    ]
  },
  {
    "id": "v17-12",
    "tag": "Vascular vs depression",
    "stem": "A 69-year-old woman with old lacunar infarcts developed low mood, anhedonia, poor sleep and guilt 4 months ago after her husband’s death. At the same time she began forgetting appointments and making errors with her pension. Before that she was cognitively sharp, according to her sister. Testing shows variable performance with many “I don’t know” answers.",
    "q": "What is the best next step in diagnosis?",
    "choices": [
      "Diagnose major vascular NCD because of the lacunes",
      "Diagnose major NCD due to unknown etiology",
      "Diagnose depressive disorder due to cerebrovascular disease",
      "Diagnose major depressive disorder; treat it and reassess cognition",
      "Diagnose prolonged grief disorder only"
    ],
    "answer": 3,
    "why": "When MDD is present and the cognitive problems began **with** the depression, **do not** diagnose vascular NCD. Treat the depression and re-test; variable, effort-dependent performance favors depression.",
    "whyNot": [
      "Old lacunes do not establish that vascular disease caused this decline.",
      "An MDD explains the picture better for now.",
      "That is chosen when the NCD **preceded** the depression or cognition is out of proportion to it.",
      "Correct.",
      "Prolonged grief needs at least 12 months after the death, and she meets MDD criteria."
    ]
  },
  {
    "id": "v17-13",
    "tag": "TBI",
    "stem": "A 34-year-old construction worker fell 4 meters and was unconscious for about 3 hours. He remembers nothing of the following 5 days. CT showed bifrontal contusions, and his Glasgow Coma Scale at 30 minutes was 10. Ten months later he is slow, distractible and cannot plan a sequence of tasks; he has explosive temper outbursts. His wife manages their finances and his appointments; he cares for himself.",
    "q": "What is the diagnosis and code?",
    "choices": [
      "Major NCD due to TBI, mild, with agitation: S06.2XAS, F02.A11",
      "Mild NCD due to TBI: S06.2XAS, F06.71",
      "Major NCD due to TBI: S06.2X9S, F02.81",
      "Personality change due to TBI only",
      "Major NCD due to TBI, severe: S06.2XAS, F02.C11"
    ],
    "answer": 0,
    "why": "A **moderate** TBI (LOC >30 min to <24 h, PTA >1 to <7 days, GCS 9–12) with deficits from the time of injury that **persist**. He needs help with **IADLs** (major, **mild** severity); temper outbursts = **agitation (11)**. Rate the severity of the **NCD**, not the injury.",
    "whyNot": [
      "Correct.",
      "He has lost independence for IADLs, so it is major.",
      "Both codes are outdated.",
      "The cognitive decline is the main problem; personality change may be added (F07.0) if it is a focus.",
      "He manages self-care; severity is mild."
    ],
    "then": {
      "q": "Which TBI severity does his injury meet?",
      "choices": [
        "Mild",
        "Complicated mild",
        "Moderate",
        "Severe",
        "Cannot be classified without MRI"
      ],
      "answer": 2,
      "why": "LOC 3 hours, PTA 5 days and GCS 10 all fall in the **moderate** band (Table 2, p. 708). Severe needs LOC ≥24 hours, PTA ≥7 days or GCS 3–8."
    }
  },
  {
    "id": "v17-14",
    "tag": "Mild TBI",
    "stem": "A 26-year-old woman was briefly unconscious (under a minute) after a car crash 7 months ago; CT was normal and she was confused for a few hours. She still reports poor concentration and forgetfulness at work. Since the crash she has had nightmares about it, avoids driving, startles easily and sleeps about 4 hours a night. Testing shows mild attention deficits with valid effort.",
    "q": "What is the most appropriate approach?",
    "choices": [
      "Diagnose mild NCD due to TBI now",
      "Diagnose major NCD due to TBI",
      "Diagnose complicated mild TBI and NCD",
      "Diagnose malingering",
      "Diagnose and treat PTSD and the sleep disturbance, then reassess cognition"
    ],
    "answer": 4,
    "why": "Cognitive problems after **mild** TBI usually resolve by **3–12 months**. Persistent symptoms should prompt treatment of other causes such as **PTSD** and **sleep disturbance**; diagnose NCD due to TBI only if deficits persist after.",
    "whyNot": [
      "Premature while untreated PTSD and severe sleep loss can explain the deficits.",
      "She is independent.",
      "CT was normal, so this is uncomplicated mild TBI.",
      "Effort is valid and there is no evidence of feigning.",
      "Correct."
    ]
  },
  {
    "id": "v17-15",
    "tag": "Korsakoff",
    "stem": "A 58-year-old man with 25 years of heavy daily drinking and poor nutrition was treated for Wernicke’s encephalopathy 3 months ago and has been abstinent since. He still cannot learn new information: he forgets the ward staff within minutes and gives detailed, false accounts of having been at work that morning. Attention, language and visuospatial skills are relatively intact. He met criteria for severe alcohol use disorder before admission.",
    "q": "What is the diagnosis and code?",
    "choices": [
      "F10.27 severe alcohol use disorder with alcohol-induced major NCD, nonamnestic-confabulatory type",
      "F10.231 alcohol withdrawal delirium",
      "F10.26 severe alcohol use disorder with alcohol-induced major NCD, amnestic-confabulatory type, persistent",
      "Dissociative amnesia",
      "F10.288 alcohol-induced mild NCD"
    ],
    "answer": 2,
    "why": "Recent memory loss **out of proportion** to other deficits, rapid forgetting and **confabulation** after Wernicke’s encephalopathy: the **amnestic-confabulatory (Korsakoff)** type. Severe use disorder → **F10.26**; still significant after months of abstinence → **persistent**.",
    "whyNot": [
      "That type has broader deficits without the disproportionate amnesia.",
      "He has been abstinent 3 months with clear attention.",
      "Correct.",
      "There is a clear substance and nutritional cause; he cannot learn new information.",
      "He cannot function independently with this amnesia; it is major."
    ],
    "discuss": [
      "Why does confabulation not count as lying?",
      "What should every heavy drinker receive on admission, and why before glucose?"
    ]
  },
  {
    "id": "v17-16",
    "tag": "Substance NCD coding",
    "stem": "A 33-year-old man with moderate cocaine use disorder has used crack cocaine heavily for 8 years. After 4 months of abstinence in a residential program he still has modest difficulties with learning new material and planning, confirmed on testing, but holds a job and manages his own affairs. MRI is normal.",
    "q": "What is the correct code?",
    "choices": [
      "F14.27",
      "F14.288",
      "F14.188",
      "F14.988",
      "G31.84"
    ],
    "answer": 1,
    "why": "Persistent deficits beyond intoxication and withdrawal with preserved independence: **cocaine-induced mild NCD**. With a **moderate** use disorder the 4th character is **2**: **F14.288**. Cocaine has **mild NCD codes only**.",
    "whyNot": [
      "There is no cocaine major NCD code.",
      "Correct.",
      "The 1 code is for a mild use disorder.",
      "The 9 code is for no use disorder.",
      "Substance-induced NCDs use substance codes, not G31.84."
    ]
  },
  {
    "id": "v17-17",
    "tag": "HIV",
    "stem": "A 51-year-old man has had HIV for 20 years, with an undetectable viral load on antiretroviral therapy. Over 18 months he has become slow, misses doses, struggles to follow conversations at work and was moved to a simpler role. Naming and recognition memory are intact; free recall and processing speed are impaired on testing. MRI shows patchy white matter hyperintensities; CSF is negative for cryptococcus and JC virus.",
    "q": "What is the most likely diagnosis and code?",
    "choices": [
      "Major NCD due to HIV infection: B20, F02.A0",
      "Asymptomatic neurocognitive impairment",
      "Major NCD due to Alzheimer’s disease",
      "Mild NCD due to HIV infection: B20, F06.70",
      "Progressive multifocal leukoencephalopathy"
    ],
    "answer": 3,
    "why": "A **subcortical** pattern (slowing, poor free recall, spared recognition and naming) in documented HIV, with secondary brain disease excluded and a **functional** effect but preserved independence: **mild NCD due to HIV**, **B20 + F06.70**.",
    "whyNot": [
      "He still manages his own affairs; this is not major NCD.",
      "He has functional change (role change, missed doses), so it is not asymptomatic.",
      "Spared recognition and naming with slowing fit a subcortical HIV pattern.",
      "Correct.",
      "CSF is negative for JC virus."
    ],
    "then": {
      "q": "Two years later he develops headache, fever and new confusion over 3 days. What is the best next step?",
      "choices": [
        "Record progression of HIV NCD",
        "Start donepezil",
        "Urgently investigate for opportunistic infection, lymphoma or delirium",
        "Change the diagnosis to major NCD",
        "Arrange neuropsychological testing next month"
      ],
      "answer": 2,
      "why": "Rapid change is **uncommon** in treated HIV NCD; **sudden worsening demands active investigation** of non-HIV causes such as toxoplasmosis, cryptococcosis, CNS lymphoma and delirium."
    }
  },
  {
    "id": "v17-18",
    "tag": "Prion",
    "stem": "A 64-year-old previously healthy accountant develops fatigue and poor concentration. Over the next 4 months he becomes unable to recognize his family, walks unsteadily, and has sudden jerks of his limbs when startled by noise. He is now bedbound. MRI diffusion imaging shows cortical ribboning and caudate hyperintensity.",
    "q": "Which test result would most strongly support the diagnosis?",
    "choices": [
      "Positive CSF RT-QuIC",
      "Low CSF amyloid-β42",
      "Low striatal dopamine transporter uptake",
      "CAG repeat of 42 in HTT",
      "Positive serum anti-NMDA receptor antibodies"
    ],
    "answer": 0,
    "why": "Rapid decline with **startle myoclonus** and **ataxia** and typical MRI suggests **sporadic CJD**. **RT-QuIC** has **extremely high specificity**. The diagnosis is NCD due to prion disease, **A81.9 + F02.C0**.",
    "whyNot": [
      "Correct.",
      "Supports Alzheimer’s disease, which progresses far more slowly.",
      "Supports Lewy body or Parkinson’s disease.",
      "Huntington’s disease has a slower course with chorea.",
      "Autoimmune encephalitis is in the differential, but the MRI and course point to prion disease; RT-QuIC is the most specific test here."
    ]
  },
  {
    "id": "v17-19",
    "tag": "Huntington’s",
    "stem": "A 39-year-old woman is referred for irritability and depression of 3 years’ duration. Her manager reports she now misses deadlines and cannot organize projects; testing shows slowed processing and poor planning with fair memory. Her mother died at 55 in a nursing home “with jerky movements.” Examination shows only mild fidgetiness of the fingers. She still runs her household.",
    "q": "Which diagnosis is most accurate now?",
    "choices": [
      "Major depressive disorder only",
      "Unspecified NCD",
      "Major NCD due to Huntington’s disease",
      "Major vascular NCD",
      "Mild NCD due to Huntington’s disease"
    ],
    "answer": 4,
    "why": "Criterion C accepts **risk** of Huntington’s disease from **family history** or genetic testing; motor signs are not required for the NCD. Executive-led decline with preserved independence = **mild NCD**: **G10 + F06.71** (with behavioral disturbance).",
    "whyNot": [
      "Depression may coexist, but the progressive executive decline with family risk points to Huntington’s disease.",
      "Criteria for a specific etiology are met.",
      "She remains independent.",
      "No vascular history; family history points elsewhere.",
      "Correct."
    ],
    "discuss": [
      "What must be discussed before predictive genetic testing?",
      "How would you assess suicide risk in this patient?"
    ]
  },
  {
    "id": "v17-20",
    "tag": "Another medical condition",
    "stem": "A 66-year-old man has 9 months of slowed thinking, unsteady magnetic gait and urinary urgency with incontinence. He now needs help with his finances. CT shows enlarged ventricles out of proportion to sulcal atrophy. After a large-volume lumbar tap his gait and attention improve for several days.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Major NCD due to Alzheimer’s disease",
      "Major vascular NCD",
      "Major NCD due to another medical condition (normal-pressure hydrocephalus)",
      "Major NCD due to Parkinson’s disease",
      "Major NCD due to unknown etiology"
    ],
    "answer": 2,
    "why": "Gait disturbance, incontinence and cognitive slowing with ventriculomegaly and a response to CSF drainage: **normal-pressure hydrocephalus**, named among the structural causes of **NCD due to another medical condition**. Code the hydrocephalus first, then F02.A0.",
    "whyNot": [
      "Gait and continence problems early, with ventriculomegaly, point elsewhere.",
      "No strokes or vascular lesions are described.",
      "Correct.",
      "There is no established Parkinson’s disease.",
      "The cause has been identified."
    ]
  },
  {
    "id": "v17-21",
    "tag": "Multiple etiologies",
    "stem": "An 83-year-old woman with 6 years of steadily progressive memory loss (probable Alzheimer’s disease) had a right parietal stroke a year ago, after which she declined further, with left neglect and new difficulty dressing. She now needs help bathing and dressing and shouts at carers during personal care. She feeds herself.",
    "q": "Which codes are correct?",
    "choices": [
      "G30.9, F02.B11",
      "G30.9, F02.B11, F01.B11",
      "G30.9, I67.9, F02.B11",
      "F01.B11 only",
      "F03.B11"
    ],
    "answer": 1,
    "why": "Two contributing processes: **NCD due to multiple etiologies**. Code the medical etiologies **except vascular** (G30.9), **F02.xx once**, then **F01.xx** for the vascular contribution. Moderate (basic ADLs) with agitation = **B11**. The 2024 revision makes explicit that Alzheimer’s disease can be one of the etiologies.",
    "whyNot": [
      "Leaves out the vascular contribution.",
      "Correct.",
      "Vascular disease is not coded with a medical code in major NCD.",
      "Leaves out Alzheimer’s disease.",
      "The etiologies are known, not possible or unknown."
    ]
  },
  {
    "id": "v17-22",
    "tag": "Possible Alzheimer’s",
    "stem": "A 78-year-old man has had memory and word-finding decline for 4 years. His daughter says he “got worse, then stayed the same for about 2 years, then worsened again.” He now needs help with bills and medications. There is no stroke history and MRI shows only mild generalized atrophy. No genetic or biomarker testing is available.",
    "q": "How should the etiology and code be recorded?",
    "choices": [
      "Probable Alzheimer’s disease: G30.9, F02.A0",
      "Vascular NCD: F01.A0",
      "Possible Alzheimer’s disease: G30.9, F03.A0",
      "Possible Alzheimer’s disease: F03.A0",
      "Unspecified NCD: R41.9"
    ],
    "answer": 3,
    "why": "Without a mutation, probable Alzheimer’s disease in major NCD needs **steady** progression **without extended plateaus**. A 2-year plateau makes it **possible**: **F03.A0**, with **no** G30.9.",
    "whyNot": [
      "The extended plateau rules out probable.",
      "No cerebrovascular evidence.",
      "G30.9 is used only with probable etiology.",
      "Correct.",
      "Full major NCD criteria are met with a likely etiology."
    ]
  },
  {
    "id": "v17-23",
    "tag": "Depression vs NCD",
    "stem": "A 71-year-old woman says her memory has “gone completely” over 2 months. She dates the start to her retirement, has lost interest in her garden, wakes at 4 a.m. and feels worthless. On testing she often says “I can’t” and gives up quickly; recall improves markedly with cues. She still manages her finances. Thyroid function, B12 and CT are normal.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Major depressive disorder",
      "Mild NCD due to possible Alzheimer’s disease",
      "Major NCD due to unknown etiology",
      "Delirium",
      "Unspecified NCD"
    ],
    "answer": 0,
    "why": "Subacute, dated onset with **depressive symptoms first**, effort-dependent and **variable** performance, and recall that **improves with cues** favor **MDD**. Treat and re-test; persistent deficits would raise an NCD.",
    "whyNot": [
      "Correct.",
      "Alzheimer’s disease gives consistent deficits that do not improve with cues.",
      "Criterion D: another mental disorder better explains the deficits.",
      "Attention and awareness are not acutely disturbed.",
      "Depression explains the picture."
    ]
  },
  {
    "id": "v17-24",
    "tag": "Unknown etiology",
    "stem": "A 67-year-old man has 3 years of progressive decline in memory, attention and planning and now needs help with medications and appointments. Course has been irregular. MRI shows moderate white matter changes and mild hippocampal atrophy; amyloid PET is negative; there are no strokes, no parkinsonism and no behavioral features. Thyroid, B12, syphilis and HIV tests are normal. The team agrees a neurodegenerative or vascular process is likely but cannot decide which.",
    "q": "Which diagnosis fits best?",
    "choices": [
      "Major NCD due to probable Alzheimer’s disease",
      "Unspecified NCD (R41.9)",
      "Mild NCD (G31.84)",
      "Major vascular NCD, probable (F01.A0)",
      "Major NCD due to unknown etiology (F03.A0)"
    ],
    "answer": 4,
    "why": "Full **major NCD** criteria are met and a medical cause is **presumed** but **cannot be established**: the 2022 diagnosis **NCD due to unknown etiology**, **F03.A0** (needs help with IADLs; no disturbance).",
    "whyNot": [
      "Negative amyloid PET and an irregular course argue against probable Alzheimer’s disease.",
      "Unspecified NCD is for presentations that do not meet full criteria or are too uncertain.",
      "He needs help with IADLs: major NCD.",
      "Imaging changes alone are not judged sufficient here, and there are no events.",
      "Correct."
    ]
  },
  {
    "id": "v17-25",
    "tag": "Mild NCD coding",
    "stem": "A 68-year-old woman with Parkinson’s disease for 6 years notices that she is slower to plan and loses her place when interrupted. Testing confirms executive and processing-speed deficits 1–2 SD below norms. She still manages her own finances and medications, with lists and alarms, and has had low mood and apathy for 6 months. There are no vascular lesions.",
    "q": "Which codes are correct?",
    "choices": [
      "G20.C, F02.A3",
      "G31.84",
      "G20.C, F06.71",
      "G20.C, F06.70",
      "F03.A3"
    ],
    "answer": 2,
    "why": "**Mild NCD probably due to Parkinson’s disease** (PD clearly first, no mixed etiology): disease code **G20.C**, then **F06.71** because there is a behavioral disturbance (apathy, low mood).",
    "whyNot": [
      "F02 is for major NCD; she is independent.",
      "G31.84 is for possible or unknown etiology.",
      "Correct.",
      "F06.70 is for no behavioral disturbance.",
      "F03 is for major NCD with possible or unknown etiology."
    ]
  }
]);
