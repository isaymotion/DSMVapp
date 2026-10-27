/* Chapter 20 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   The chapter has no criteria sets, so several items draw on Section I, “Use of the Manual” (pp. 22–24), and are labeled.
   Chapter 22 (Other conditions that may be a focus of clinical attention) is not yet in the app: it is named in plain text only.
   No treatment items: every question stays inside the DSM. */
SP.add("ch20", "vignettes", [
  {
    "id": "v20-01",
    "tag": "F06.8: seizure-related dissociation",
    "stem": "A 29-year-old teacher from Orani has had complex partial seizures from a left temporal focus for 6 years, confirmed by neurology. For the past 5 months she has had spells, several times a week, in which her surroundings look flat and unreal and she feels as if she is watching herself from outside. Video-EEG monitoring during an admission captured the spells with ictal and peri-ictal discharges, and the epileptologist and the consulting psychiatrist agree that they are a direct physiological effect of the seizure disorder. She stays aware that the experiences are not real, has no gaps in memory and no change in identity. Between spells she is alert, attends well and is fully oriented. She is frightened of the spells, has stopped teaching and no longer takes the jeepney alone. Mood, sleep and appetite are normal; there is no psychosis and no substance use.",
    "q": "Which record is most accurate?",
    "choices": [
      "F48.1 depersonalization/derealization disorder",
      "G40.209 complex partial seizures; F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms",
      "F44.89 other specified dissociative disorder, seizure-related dissociation",
      "G40.209 complex partial seizures; F05 delirium due to complex partial seizures",
      "G40.209 complex partial seizures only: dissociation during seizures is part of the epilepsy"
    ],
    "answer": 1,
    "why": "The dissociative symptoms are judged a **direct physiological consequence** of a medical condition, they cause **distress and impairment**, and no specific “due to another medical condition” disorder covers dissociation (p. 803). With the symptom picture stated, the category is **F06.8**, and the seizure code is listed **immediately before** it. This is the manual’s own worked example (p. 804).",
    "whyNot": [
      "That disorder requires that the symptoms are not attributable to a medical condition such as seizures (Chapter 8).",
      "Correct.",
      "The Chapter 8 residual categories are for dissociation without a medical cause; the manual places seizure-related dissociation in this chapter (p. 804).",
      "Attention and orientation are intact between spells and the course is months long; this is not delirium.",
      "The spells cause clinically significant distress and impairment, so they are a mental disorder that should be coded (p. 803)."
    ],
    "then": {
      "q": "The clinic’s referral letter to her new neurologist must use the shortest valid record, and the psychiatrist chooses not to state the symptom picture. How does the record change?",
      "choices": [
        "F06.8 other specified mental disorder due to complex partial seizures; G40.209 complex partial seizures",
        "G40.209 complex partial seizures; F09 unspecified mental disorder due to complex partial seizures",
        "G40.209 complex partial seizures; F99 unspecified mental disorder",
        "G40.209 complex partial seizures; F09 unspecified mental disorder due to complex partial seizures, dissociative symptoms"
      ],
      "answer": 1,
      "why": "When the clinician **chooses not to state the reason**, the category is **unspecified mental disorder due to another medical condition (F09)**. The condition’s name replaces “another medical condition”, the seizure code still comes **first**, and **no symptom phrase** is added (p. 805).",
      "whyNot": [
        "The medical condition is always coded and listed first (p. 804), and without a stated reason the code is F09.",
        "Correct.",
        "F99 is for presentations not attributed to a medical condition; here a medical cause is established (p. 803).",
        "Adding the symptom manifestation is what makes it “other specified”; the unspecified line stops at the condition’s name (p. 805)."
      ]
    },
    "discuss": [
      "Why does Chapter 8 have no “dissociative disorder due to another medical condition”, and what does that mean for where seizure-related dissociation is coded?",
      "What information from video-EEG made the medical attribution firm in this case?"
    ]
  },
  {
    "id": "v20-02",
    "tag": "F09 in the emergency room",
    "stem": "A 41-year-old man with HIV disease, diagnosed 8 years ago and poorly controlled, is brought to the emergency department at 11 p.m. by a housemate. Neurology notes from last year document HIV-associated brain involvement on MRI. For about 10 days he has been withdrawn, has made odd remarks, has neglected meals and bathing, and seems upset, and he has missed work all week. In the emergency room he is alert, keeps attention on serial 7s and digit span, and is oriented to person, place and date, with no change across 4 hours of observation. Toxicology is negative and blood glucose, sodium and calcium are normal. He gives brief, guarded answers; the housemate knows little of the details, and his records cannot be reached tonight. The emergency physician and the on-call psychiatrist judge the change a direct physiological effect of his HIV disease, but cannot yet say what kind of syndrome it is.",
    "q": "Which record fits best tonight?",
    "choices": [
      "F99 unspecified mental disorder",
      "B20 HIV disease; F05 delirium due to HIV disease",
      "F09 unspecified mental disorder due to HIV disease; B20 HIV disease",
      "B20 HIV disease; F09 unspecified mental disorder due to HIV disease",
      "B20 HIV disease; F06.8 other specified mental disorder due to HIV disease, behavioral change"
    ],
    "answer": 3,
    "why": "A **medical cause is established**, the symptoms cause distress and impairment, no specific “due to another medical condition” disorder can yet be identified, and there is **too little information** to say more: this is what **F09** is for, with the emergency room given as the setting example (p. 805). The medical condition is **coded and listed first**; the chapter’s own example is B20 HIV disease (p. 803).",
    "whyNot": [
      "F99 is for presentations not attributed to a medical condition; the team has attributed this one to HIV disease (p. 803).",
      "Attention and orientation are intact and stable over hours of observation; delirium is not supported.",
      "The order is reversed: the medical condition must be listed immediately before the mental disorder (pp. 803, 805).",
      "Correct.",
      "Other specified requires the clinician to state why no specific disorder fits; “behavioral change” does not characterize a picture the team cannot yet describe."
    ],
    "discuss": [
      "Which specific “due to another medical condition” disorders might replace F09 once a full history is available?",
      "Why is it important to test attention formally before using F09 in an emergency setting?"
    ]
  },
  {
    "id": "v20-03",
    "tag": "Specific AMC disorder beats F06.8",
    "stem": "A 34-year-old woman with systemic lupus erythematosus is admitted during a flare. Over 3 weeks she has become convinced that her neighbors are poisoning her water and following her to the market; she occasionally hears a voice calling her name, but the persecutory beliefs dominate the picture. She has not received corticosteroids or any other new medication in the past 3 months, and toxicology is negative. MRI shows new white-matter lesions and the CSF findings support neuropsychiatric lupus; rheumatology and psychiatry agree the psychosis is a direct physiological effect of the lupus. She is alert, attends normally and is fully oriented, with no fluctuation over several days. She has stopped eating at home and has quit her job. She has no history of psychosis or mood episodes.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "M32.19 other organ or system involvement in systemic lupus erythematosus; F06.2 psychotic disorder due to systemic lupus erythematosus, with delusions",
      "M32.19 other organ or system involvement in systemic lupus erythematosus; F06.8 other specified mental disorder due to systemic lupus erythematosus, psychotic symptoms",
      "M32.19 other organ or system involvement in systemic lupus erythematosus; F05 delirium due to systemic lupus erythematosus",
      "F23 brief psychotic disorder",
      "M32.19 other organ or system involvement in systemic lupus erythematosus; F09 unspecified mental disorder due to systemic lupus erythematosus"
    ],
    "answer": 0,
    "why": "Prominent delusions judged a direct physiological effect of a medical condition, not occurring only during a delirium, meet criteria for **psychotic disorder due to another medical condition** (Chapter 2). Delusions predominate, so the specifier is **with delusions (F06.2)**, and the medical condition is listed first. The Chapter 20 categories apply only when **no specific** “due to another medical condition” disorder fits (p. 803).",
    "whyNot": [
      "Correct.",
      "F06.8 is for symptoms that fall short of every specific “due to another medical condition” disorder; this picture meets one (p. 803).",
      "Attention and orientation are intact and stable; delirium is not present.",
      "The psychosis is attributed to a medical condition, which excludes the primary psychotic disorders.",
      "Enough information is available to name the specific disorder; F09 would discard it."
    ],
    "discuss": [
      "How would the diagnosis change if she had started high-dose prednisone 10 days before the delusions began?",
      "Which features of the history and workup support a direct physiological link rather than a coincidental illness?"
    ]
  },
  {
    "id": "v20-04",
    "tag": "Delirium, not a residual category",
    "stem": "A 74-year-old retired fisherman is on day 2 after repair of a hip fracture under spinal anesthesia. Since the previous evening his nurses have noticed that he cannot keep track of a conversation, loses his place when asked to name the months backward, and is calm and clear for an hour and then muddled again. He believes he is at home in Mariveles and gives the year as 1998. At night he picks at the sheets and says he sees insects on the wall. He has a fever, and urine culture grows E. coli; his medications have been reviewed and none is implicated. His daughter says he lived independently, managed his own money and had no memory problems before the fall. The team attributes the change to the urinary tract infection.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "N39.0 urinary tract infection; F06.0 psychotic disorder due to urinary tract infection, with hallucinations",
      "N39.0 urinary tract infection; F06.8 other specified mental disorder due to urinary tract infection, perceptual disturbances",
      "Major neurocognitive disorder due to another medical condition",
      "N39.0 urinary tract infection; F09 unspecified mental disorder due to urinary tract infection",
      "N39.0 urinary tract infection; F05 delirium due to urinary tract infection"
    ],
    "answer": 4,
    "why": "An acute change over hours to days in **attention** and **orientation**, with **fluctuation** through the day, an additional cognitive and perceptual disturbance, and evidence of a medical cause: this meets criteria for **delirium due to another medical condition** (Chapter 17). A specific disorder fits, so the Chapter 20 residuals do not apply (p. 803).",
    "whyNot": [
      "Hallucinations that occur only during a disturbance of attention and awareness belong to the delirium, not to a separate psychotic disorder.",
      "F06.8 is for presentations that meet no specific “due to another medical condition” disorder; delirium is met (p. 803).",
      "His cognition was normal until 1 day ago, and the course is acute and fluctuating, not a gradual decline.",
      "There is enough information for a specific diagnosis, so the unspecified category is not needed.",
      "Correct."
    ]
  },
  {
    "id": "v20-05",
    "tag": "Subthreshold depression: the chapter residual wins",
    "stem": "A 29-year-old call-center agent in Balanga has had depressed mood most of the day, nearly every day, for 5 weeks, with early waking and low energy. She still enjoys her weekend dance class, her appetite and weight are unchanged, and she reports no guilt, no trouble concentrating and no thoughts of death. She cannot point to any stressor or life change before the onset. She has never had a depressive, manic or hypomanic episode, has no psychotic symptoms, drinks rarely, and her thyroid tests and blood count are normal. She is distressed by how she feels and has missed six shifts.",
    "q": "Which diagnosis is most accurate?",
    "choices": [
      "Major depressive disorder, single episode",
      "F99 other specified mental disorder, subthreshold low mood",
      "F32.89 other specified depressive disorder, depressive episode with insufficient symptoms",
      "Z03.89 no diagnosis or condition",
      "F99 unspecified mental disorder"
    ],
    "answer": 2,
    "why": "She has depressed mood plus two other depressive symptoms (**3 of 9**, short of the 5 needed for a major depressive episode), for more than 2 weeks, with **distress and impairment**, no prior mood episode and no stressor. This is a recognizable **depressive** picture, so the residual comes from **Chapter 4**. F99 is used only when no chapter-specific other specified or unspecified category fits (p. 803).",
    "whyNot": [
      "Only three of the nine symptoms are present; five are required.",
      "Condition 3 on p. 803 fails: a chapter-specific residual (other specified depressive disorder) covers this picture.",
      "Correct.",
      "She has distress and impairment from depressive symptoms; this is a mental disorder, not a negative evaluation (p. 805).",
      "The picture is clearly depressive and the reason is known, so neither F99 nor “unspecified” is the best record."
    ],
    "then": {
      "q": "Suppose instead that the same symptoms began 3 weeks after she lost her previous job in a company restructuring, and that her distress is out of proportion to the loss. What is the best diagnosis now?",
      "choices": [
        "F32.89 other specified depressive disorder, depressive episode with insufficient symptoms",
        "F99 other specified mental disorder, reaction to job loss",
        "Other specified trauma- and stressor-related disorder",
        "F43.21 adjustment disorder, with depressed mood"
      ],
      "answer": 3,
      "why": "Emotional symptoms that begin **within 3 months** of an identifiable stressor, with **disproportionate distress** and impairment, and that meet no other mental disorder, meet criteria for **adjustment disorder** (Chapter 7); low mood is the predominant feature, so the subtype is **with depressed mood (F43.21)**. Again a specific disorder in an earlier chapter beats F99 (p. 803).",
      "whyNot": [
        "With an identifiable stressor and onset within 3 months, the adjustment disorder criteria are met, and a met specific disorder takes priority over a residual category.",
        "A specific disorder fits, so condition 2 on p. 803 fails.",
        "The trauma- and stressor-related residual is for presentations that do not meet adjustment disorder; here the criteria are met.",
        "Correct."
      ]
    },
    "discuss": [
      "List the four conditions on p. 803 and say which one F99 fails in each version of this case.",
      "What would make you reconsider a major depressive episode at follow-up?"
    ]
  },
  {
    "id": "v20-06",
    "tag": "A true F99 other specified",
    "stem": "A 33-year-old seafarer was sent home mid-contract 4 months ago and has not been able to rejoin a ship. Over 9 months he has had a mixture of problems, each mild: brief spells of feeling detached from himself a few times a month, unwanted doubts that lead him to recheck the cabin lock twice, short bursts of irritability with crewmates, and a vague sense of dread on waking. No group of symptoms predominates; none comes close to a specific disorder, and after a careful review the team agrees that the picture does not fit the definition of any chapter’s other specified or unspecified category. Neurology, EEG, MRI, thyroid tests and toxicology are normal, and no medical cause has been found. He is alert, attentive and oriented. He is distressed and is losing his livelihood. The psychiatrist wants the record to say why no specific diagnosis was made.",
    "q": "Which record is most accurate?",
    "choices": [
      "F44.89 other specified dissociative disorder, brief detachment spells",
      "F99 other specified mental disorder, mixed subthreshold symptoms from several domains with no predominant cluster",
      "F99 unspecified mental disorder",
      "F42.8 other specified obsessive-compulsive and related disorder, checking without full obsessions",
      "Z03.89 no diagnosis or condition"
    ],
    "answer": 1,
    "why": "All four conditions on p. 803 are met: it **is** a mental disorder (distress and impairment), **no specific** disorder fits, the team has determined that **no chapter-specific residual** fits, and nothing else applies. No medical cause has been found, so the F06.8/F09 categories do not apply. Because the clinician **chooses to record the reason**, the category is **other specified mental disorder**, written with the reason after the name (p. 805).",
    "whyNot": [
      "Detachment is only one of several equal problems and does not predominate; the team found that no chapter residual fits.",
      "Correct.",
      "Same code, but the psychiatrist wants to state the reason, which makes it “other specified” (p. 805).",
      "Checking is one minor strand of a mixed picture, not a predominant obsessive-compulsive presentation.",
      "He has distress and impairment, so a mental disorder is present (pp. 803, 805)."
    ],
    "discuss": [
      "Why is F99 meant to be rare, and what should you check before writing it?",
      "How would the record change if, at 3 months, the detachment spells became frequent and dominant?"
    ]
  },
  {
    "id": "v20-07",
    "tag": "Night admission: F99 unspecified, then a cluster",
    "stem": "A 19-year-old woman is admitted at 1 a.m. after police found her walking along the national highway, crying and barefoot. She answers in single words or not at all, so no history can be taken, and no family has been reached. She follows the examiner with her eyes, completes simple commands consistently, and nods correctly to questions about where she is and the date; her state does not change over 4 hours of observation. Vital signs, glucose, sodium and a head CT are normal; there is no sign of injury; urine toxicology is pending. No medical cause has been identified. The team cannot tell whether the picture is depressive, psychotic, dissociative, substance-related or a reaction to an event, but she clearly cannot look after herself.",
    "q": "What is the best placeholder diagnosis for the admission note?",
    "choices": [
      "F29 unspecified schizophrenia spectrum and other psychotic disorder",
      "F32.A unspecified depressive disorder",
      "F09 unspecified mental disorder due to another medical condition",
      "F99 unspecified mental disorder",
      "Z03.89 no diagnosis or condition"
    ],
    "answer": 3,
    "why": "She has a disorder causing marked impairment, but **no symptom cluster can yet be identified**, no medical cause has been established, and there is **too little information** to say more. That is the use the manual gives for **unspecified mental disorder (F99)**, with the emergency setting as its example (p. 805).",
    "whyNot": [
      "No psychotic symptoms have been elicited; choosing this chapter would be a guess.",
      "No depressive syndrome has been established; crying alone does not assign the chapter.",
      "F09 requires a judgment that the symptoms are a direct effect of a medical condition; none has been found (p. 803).",
      "Correct.",
      "She has not had an evaluation that excludes a disorder, and she is clearly impaired (p. 805)."
    ],
    "then": {
      "q": "By morning she is talking. She says that for “some weeks” a voice has been commenting on her actions and that her neighbors are poisoning her food. Toxicology is negative, but she cannot say how long this has lasted, and nothing is known yet about her mood history or functioning before admission. What should replace the admission diagnosis?",
      "choices": [
        "Keep F99 unspecified mental disorder until the full history is known",
        "F20.9 schizophrenia",
        "F29 unspecified schizophrenia spectrum and other psychotic disorder",
        "F28 other specified schizophrenia spectrum and other psychotic disorder",
        "F23 brief psychotic disorder"
      ],
      "answer": 2,
      "why": "Section I (pp. 22–23) describes the unspecified categories as placeholders for when only the **most prominent symptom cluster** can be identified; once that cluster is known (here **psychosis**), the **chapter’s own unspecified category** is preferred over the chapter-wide F99. Condition 3 on p. 803 now also fails for F99, since a chapter-specific residual fits.",
      "whyNot": [
        "F99 is used only when no chapter residual fits (p. 803); the psychotic cluster now points to Chapter 2.",
        "Duration, course and functioning are unknown, so schizophrenia criteria cannot be confirmed.",
        "Correct.",
        "Other specified requires stating why the presentation falls short of a specific disorder; the team does not yet know why.",
        "Brief psychotic disorder requires knowing the episode lasted less than 1 month with full return to baseline; neither is known."
      ]
    },
    "discuss": [
      "What information would you gather first the next day to move from a placeholder to a specific diagnosis?",
      "Why does the diagnosis code have no bearing on the immediate safety plan for this patient?"
    ]
  },
  {
    "id": "v20-08",
    "tag": "Z03.89 versus a relational Z code",
    "stem": "A 52-year-old man retired 6 months ago from a shipyard. His wife asks for an assessment because he now spends most weekends fishing with friends and she worries he is “depressed and hiding it.” The psychiatrist completes a full interview and mental status examination, takes collateral from the wife and their adult son, and reviews his clinic records and a validated depression rating. He reports good mood, sleep and appetite, enjoys his hobbies and his grandchildren, and helps run a parish livelihood program. No symptoms, distress or impairment are found, there is no psychosocial problem he or his wife wants help with, and both describe their marriage as close.",
    "q": "Which record fits the outcome of this evaluation?",
    "choices": [
      "Z03.89 no diagnosis or condition",
      "F99 unspecified mental disorder",
      "F32.A unspecified depressive disorder",
      "Z63.0 relationship distress with spouse or intimate partner",
      "F43.20 adjustment disorder, unspecified"
    ],
    "answer": 0,
    "why": "The man **was evaluated**, and the conclusion is that **no mental disorder and no other condition** is present. That is exactly the situation for **Z03.89, No diagnosis or condition** (p. 805).",
    "whyNot": [
      "Correct.",
      "No symptoms, distress or impairment were found, so there is no mental disorder to code (p. 803).",
      "There are no depressive symptoms, and the wife’s worry is not a finding.",
      "Both partners describe the marriage as close; there is no relational problem.",
      "Retirement is a life change, but he has no emotional or behavioral symptoms in response to it."
    ],
    "then": {
      "q": "In a different version, the assessment again finds no symptoms of a mental disorder in either partner; both work, sleep and socialize well. But since his retirement they argue daily about money and time, both are unhappy with the marriage, and they ask for help with the relationship. What is the best record?",
      "choices": [
        "Z63.0 relationship distress with spouse or intimate partner (a Z code from Chapter 22, not yet in the app)",
        "Z03.89 no diagnosis or condition",
        "F99 other specified mental disorder, marital conflict",
        "F43.20 adjustment disorder, unspecified"
      ],
      "answer": 0,
      "why": "There is still **no mental disorder**, but there **is a condition** that is the focus of the visit: the marital relationship. Z03.89 is only for an evaluation that finds **neither a disorder nor a condition** (p. 805), so the record takes the relational-problem Z code for spouse or partner distress from Chapter 22 (Other conditions that may be a focus of clinical attention; not yet in the app).",
      "whyNot": [
        "Correct.",
        "A condition that needs clinical attention is present, so “no diagnosis or condition” is wrong (p. 805).",
        "The F99 categories require a mental disorder in an individual; relationship distress alone is not one (p. 803).",
        "Neither partner has emotional or behavioral symptoms out of proportion to a stressor, and the request is for help with the relationship."
      ]
    },
    "discuss": [
      "Why is it worth coding a negative evaluation rather than leaving the diagnosis field blank?",
      "How would you explain Z03.89 to the wife without dismissing her concern?"
    ]
  },
  {
    "id": "v20-09",
    "tag": "Principal diagnosis: condition still first",
    "stem": "A 38-year-old woman with complex partial seizures from a right temporal focus, after a head injury 10 years ago, is admitted to the psychiatric ward for 2 weeks. The reason for admission is a 3-month run of spells of feeling detached and unreal, during which she has twice wandered onto a busy road; she is terrified of them and has stopped leaving the house. Video-EEG confirms the spells are peri-ictal, and neurology and psychiatry agree they are a direct physiological effect of the epilepsy. They meet criteria for no specific disorder, and the psychiatrist records the symptom picture. Between spells she is alert, attentive and oriented. The ward stay was chiefly for the dissociative spells, not for seizure control.",
    "q": "Following Section I (pp. 23–24), how should the discharge diagnoses be listed?",
    "choices": [
      "F99 other specified mental disorder, dissociative symptoms (principal diagnosis); G40.209 complex partial seizures",
      "F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms (principal diagnosis); G40.209 complex partial seizures",
      "G40.209 complex partial seizures (principal diagnosis); F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms",
      "F44.89 other specified dissociative disorder (principal diagnosis); G40.209 complex partial seizures",
      "G40.209 complex partial seizures; F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms (principal diagnosis)"
    ],
    "answer": 4,
    "why": "Section I: the **principal diagnosis** (the condition chiefly responsible for an inpatient admission) is normally listed first, but when it is a mental disorder **due to another medical condition**, ICD coding rules put the **etiological medical condition first**. The principal diagnosis is then the **second** line, and “(principal diagnosis)” may be added after it (pp. 23–24). The chapter itself also requires the condition’s code **immediately before** F06.8 (p. 804).",
    "whyNot": [
      "F99 is for presentations not attributed to a medical condition (p. 803).",
      "The order is wrong: the medical condition is coded and listed first even when the mental disorder is the reason for admission (pp. 23–24, 804).",
      "The order is right, but the admission was chiefly for the dissociative spells, so the label belongs on the F06.8 line.",
      "Dissociation caused by seizures is coded in this chapter, not as a Chapter 8 residual (p. 804).",
      "Correct."
    ],
    "discuss": [
      "What is the outpatient equivalent of “principal diagnosis”, and how would you label it here?",
      "Why might listing the seizure code first matter for continuity of care as well as for coding?"
    ]
  },
  {
    "id": "v20-10",
    "tag": "Provisional, not unspecified",
    "stem": "A 45-year-old market vendor is admitted from the outpatient clinic. Her daughter, who lives with her, gives a detailed history: for 6 weeks her mother has been sad and tearful nearly every day, has lost interest in the stall and in church, sleeps 3 hours a night, has lost about 5 kg without trying, and keeps saying she is a burden. The patient speaks very little but confirms that she feels “empty.” She is alert, attentive and oriented. She has never had a manic or hypomanic episode according to the daughter, and there is no psychosis. Thyroid tests and a toxicology screen were sent this afternoon; results are due in 2 days. She has not opened her stall for a month. The team has a strong presumption that full criteria will be confirmed once the results return and wants the record to name the disorder it expects.",
    "q": "According to Section I (p. 24), which record best reflects this?",
    "choices": [
      "F32.A unspecified depressive disorder",
      "F99 unspecified mental disorder",
      "Major depressive disorder, single episode (provisional)",
      "Z03.89 no diagnosis or condition",
      "F32.89 other specified depressive disorder, depressive episode with insufficient symptoms"
    ],
    "answer": 2,
    "why": "Section I: the modifier **“(provisional)”** after a specific diagnosis is used when there is a **strong presumption** that full criteria will ultimately be met but not yet enough information to make the diagnosis firmly; here the medical and substance exclusions are pending (p. 24). The **unspecified** categories are for when the clinician chooses not to, or cannot, say more (p. 805).",
    "whyNot": [
      "Defensible as a placeholder, but the team has a strong presumption about the specific disorder, which is what “(provisional)” is for (p. 24).",
      "A clear depressive cluster is identified, so the chapter-wide F99 is not appropriate (p. 803; Section I pp. 22–23).",
      "Correct.",
      "She has marked distress and impairment; this is not a negative evaluation (p. 805).",
      "The history describes at least five of the nine symptoms for 6 weeks; the count is not insufficient."
    ],
    "discuss": [
      "If the thyroid tests showed marked hypothyroidism, which disorder would replace the provisional diagnosis, and how would it be recorded?",
      "When would you remove the “(provisional)” label, and who should be told?"
    ]
  }
]);
