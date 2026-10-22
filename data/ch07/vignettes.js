/* Chapter 7 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch07", "vignettes", [
  {
    "id": "v7-01",
    "tag": "PTSD",
    "stem": "A 28-year-old woman was raped by an acquaintance 4 months ago. She has intrusive images of the assault several times a day and nightmares most nights. She stopped going to the gym where she met him and avoids talking about it. She believes it was her fault for drinking, feels “dirty,” has lost interest in seeing friends and feels numb with her partner. She sleeps 4 hours a night, startles at loud noises and is constantly scanning for danger.",
    "q": "What is the diagnosis?",
    "choices": [
      "Acute stress disorder",
      "Posttraumatic stress disorder",
      "Adjustment disorder with mixed anxiety and depressed mood",
      "Major depressive disorder",
      "Generalized anxiety disorder"
    ],
    "answer": 1,
    "why": "Criterion A (sexual violence), **intrusion** (images, nightmares), **avoidance** (gym, conversation), **negative cognitions and mood** (self-blame, shame, lost interest, numbness), **arousal** (sleep, startle, hypervigilance), for **more than 1 month**: **F43.10 PTSD**.",
    "whyNot": [
      "Acute stress disorder is limited to 3 days to 1 month.",
      "Correct.",
      "Full PTSD criteria are met, so adjustment disorder does not apply.",
      "Intrusions and avoidance are not part of MDD; screen for MDD as well, since both can be diagnosed.",
      "Her symptoms are tied to a specific trauma, not diffuse worry."
    ],
    "discuss": [
      "How would you ask about sexual trauma sensitively?",
      "Which first-line psychotherapies would you offer?"
    ]
  },
  {
    "id": "v7-02",
    "tag": "Criterion A",
    "stem": "A 45-year-old man’s father died of a heart attack in hospital 3 months ago; he was told by phone. Since then he has had recurrent memories of the call, avoids hospitals, feels detached and has insomnia and irritability.",
    "q": "Why is PTSD not diagnosed?",
    "choices": [
      "PTSD cannot follow the death of a parent",
      "Symptoms have not lasted 6 months",
      "He did not witness the death",
      "Learning of a death from natural causes does not meet Criterion A",
      "He lacks dissociative symptoms"
    ],
    "answer": 3,
    "why": "Learning about a close person’s death meets Criterion A **only if it was violent or accidental**. A heart attack is a natural death. Consider normal grief, adjustment disorder or MDD.",
    "whyNot": [
      "A violent or accidental death of a parent can be Criterion A.",
      "PTSD needs more than 1 month, not 6.",
      "Learning about a violent or accidental death would qualify without witnessing it.",
      "Correct.",
      "Dissociative symptoms are a specifier, not a requirement."
    ]
  },
  {
    "id": "v7-03",
    "tag": "Criterion A4",
    "stem": "A 34-year-old content moderator reviews violent and abusive videos for 8 hours a day. Over the past 3 months she has had intrusive images from the videos, nightmares, avoidance of news and social media, a belief that “the world is evil,” emotional numbness, irritability and hypervigilance.",
    "q": "Does her exposure meet Criterion A?",
    "choices": [
      "Yes: repeated work-related exposure to aversive details, including through media, qualifies",
      "No: exposure through screens never qualifies",
      "No: she did not directly experience the events",
      "Only if she knew the victims",
      "Only if she has also been physically threatened"
    ],
    "answer": 0,
    "why": "Criterion **A4**: repeated or extreme exposure to aversive details; the exclusion of electronic media does **not** apply when the exposure is **work related**. With full symptoms for more than a month, this is PTSD.",
    "whyNot": [
      "Correct.",
      "Media exposure is excluded only when it is not work related.",
      "Indirect occupational exposure is one of the four routes.",
      "Knowing the victims is not required for A4.",
      "A4 alone is sufficient."
    ]
  },
  {
    "id": "v7-04",
    "tag": "Acute stress disorder",
    "stem": "Twelve days after surviving a building collapse, a 40-year-old engineer feels as if he is watching himself in a movie, cannot recall how he got out, has nightmares and flashbacks, avoids the site and any news of it, cannot feel happy, sleeps poorly and jumps at every noise. He has no head injury.",
    "q": "What is the diagnosis?",
    "choices": [
      "Adjustment disorder",
      "PTSD with dissociative symptoms",
      "Dissociative amnesia",
      "Brief psychotic disorder",
      "Acute stress disorder"
    ],
    "answer": 4,
    "why": "Criterion A trauma with **9 or more of 14** symptoms (dissociation, amnesia, nightmares, flashbacks, two kinds of avoidance, no positive emotions, sleep, startle) between **3 days and 1 month**: **F43.0 acute stress disorder**.",
    "whyNot": [
      "Full acute stress disorder criteria are met.",
      "PTSD needs more than 1 month.",
      "Amnesia is one of many trauma symptoms here; dissociative amnesia alone would lack the rest.",
      "There are no hallucinations, delusions or disorganization.",
      "Correct."
    ],
    "then": {
      "q": "Six weeks later, most symptoms remain and he meets PTSD criteria. What should happen to the diagnosis?",
      "choices": [
        "Keep acute stress disorder and add PTSD",
        "Change it to PTSD",
        "Wait 6 months and diagnose PTSD with delayed expression",
        "Change it to adjustment disorder",
        "Keep acute stress disorder until 3 months"
      ],
      "answer": 1,
      "why": "When symptoms persist beyond **1 month** and meet PTSD criteria, the diagnosis is **changed** from acute stress disorder to PTSD.",
      "whyNot": [
        "They are not diagnosed together for the same episode.",
        "Correct.",
        "Delayed expression means full criteria first met at least 6 months later; here they were met earlier.",
        "Full PTSD criteria are met.",
        "Acute stress disorder ends at 1 month by definition."
      ]
    }
  },
  {
    "id": "v7-05",
    "tag": "Too early",
    "stem": "A 25-year-old woman is seen in the emergency department 18 hours after being robbed at knifepoint. She is shaking, tearful, dazed and cannot stop replaying the event.",
    "q": "What is the most appropriate statement?",
    "choices": [
      "PTSD",
      "Acute stress disorder",
      "No trauma-related disorder can be diagnosed yet; offer support and follow up",
      "Brief psychotic disorder",
      "Panic disorder"
    ],
    "answer": 2,
    "why": "Acute stress disorder needs symptoms for **at least 3 days**. Early reactions are expected; offer safety, support and information (psychological first aid) and arrange follow-up.",
    "whyNot": [
      "Not before 1 month.",
      "Not before 3 days.",
      "Correct.",
      "No psychotic symptoms.",
      "Her distress is tied to the robbery."
    ]
  },
  {
    "id": "v7-06",
    "tag": "PTSD vs adjustment",
    "stem": "Two months after her husband unexpectedly announced he was leaving her, a 39-year-old woman has intrusive memories of the conversation, nightmares about it, avoidance of their old neighborhood, self-blame, numbness, irritability and insomnia, and is struggling at work.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "PTSD",
      "Adjustment disorder",
      "Acute stress disorder",
      "Major depressive disorder",
      "Borderline personality disorder"
    ],
    "answer": 1,
    "why": "A full PTSD-like picture after a stressor that does **not** meet Criterion A (no threat of death, serious injury or sexual violence) is an **adjustment disorder**.",
    "whyNot": [
      "PTSD requires a Criterion A event.",
      "Correct.",
      "Acute stress disorder also requires a Criterion A event and lasts only up to a month.",
      "No full major depressive episode is described; if present, MDD would be diagnosed instead.",
      "These symptoms began with the stressor."
    ]
  },
  {
    "id": "v7-07",
    "tag": "Delayed expression",
    "stem": "A 31-year-old paramedic responded to a school shooting 9 months ago. He had occasional nightmares afterward but kept working. Over the past 2 months, after a similar call, he has had daily intrusive images, avoidance of school calls, guilt that he could not save a child, detachment from his family, hypervigilance and insomnia.",
    "q": "Which diagnosis and specifier apply?",
    "choices": [
      "Adjustment disorder",
      "PTSD, with dissociative symptoms",
      "Acute stress disorder",
      "PTSD, with delayed expression",
      "Other specified trauma- and stressor-related disorder"
    ],
    "answer": 3,
    "why": "Full criteria were first met **at least 6 months** after the event, though some symptoms began early: **PTSD with delayed expression**.",
    "whyNot": [
      "Full PTSD criteria are met.",
      "No depersonalization or derealization is described.",
      "Acute stress disorder ends 1 month after the event.",
      "Correct.",
      "Full criteria are met."
    ]
  },
  {
    "id": "v7-08",
    "tag": "PTSD in a young child",
    "stem": "A 4-year-old boy saw his mother being beaten by his father 3 months ago. Since then he repeatedly crashes toy figures together while shouting, wakes screaming from dreams he cannot describe, has stopped playing with other children, has extreme tantrums and startles easily. He seems cheerful when he plays the crashing game.",
    "q": "Which statement is correct?",
    "choices": [
      "He meets PTSD criteria for children 6 and younger; intrusive memories may not appear distressing and may be expressed in play",
      "PTSD cannot be diagnosed before age 6",
      "He must show fear while reenacting for it to count",
      "The adult criteria apply, so he needs 2 cognition and mood symptoms",
      "Witnessing violence to a parent does not count for young children"
    ],
    "answer": 0,
    "why": "In children **6 and younger**, intrusive memories may **not appear distressing** and may show as **play reenactment**; dreams may lack recognizable content; avoidance and negative cognitions are combined (≥1 of 6); arousal ≥2. Witnessing violence to a caregiver qualifies.",
    "whyNot": [
      "Correct.",
      "PTSD can occur after the first year of life.",
      "The note to B1 says memories may not appear distressing.",
      "Separate criteria apply to young children.",
      "Witnessing violence to a caregiver is a listed route."
    ]
  },
  {
    "id": "v7-09",
    "tag": "Dissociative subtype",
    "stem": "A 36-year-old woman with PTSD after childhood sexual abuse reports frequent episodes in which she feels detached from her body and as if she were watching herself from the ceiling, and that her surroundings look flat and unreal. She does not use alcohol or drugs, and an EEG is normal.",
    "q": "How should this be diagnosed?",
    "choices": [
      "Borderline personality disorder",
      "PTSD and depersonalization/derealization disorder",
      "Dissociative identity disorder",
      "Schizophrenia",
      "PTSD, with dissociative symptoms"
    ],
    "answer": 4,
    "why": "Full PTSD plus persistent **depersonalization** and **derealization**, not due to substances or seizures: the **with dissociative symptoms** specifier.",
    "whyNot": [
      "Not supported by the history given.",
      "When full PTSD criteria are met, the dissociative subtype captures these symptoms.",
      "No distinct identities or amnesia for everyday events are described.",
      "Depersonalization is not psychosis; reality testing is intact.",
      "Correct."
    ]
  },
  {
    "id": "v7-10",
    "tag": "PTSD vs TBI",
    "stem": "A 26-year-old soldier was knocked unconscious by a roadside bomb 4 months ago. He has headaches, poor concentration, light sensitivity and irritability. He also has nightmares of the blast, avoids driving, feels guilty about a comrade who died, and is hypervigilant.",
    "q": "What is the best interpretation?",
    "choices": [
      "Only PTSD: TBI cannot coexist",
      "Only TBI: the symptoms are postconcussive",
      "PTSD, possibly with a co-occurring neurocognitive disorder due to TBI; reexperiencing and avoidance point to PTSD",
      "Malingering",
      "Functional neurological symptom disorder"
    ],
    "answer": 2,
    "why": "Blasts can cause both PTSD and TBI. **Reexperiencing and avoidance** are characteristic of PTSD; headaches, light sensitivity and concentration problems occur in both; persistent **disorientation** would point to TBI.",
    "whyNot": [
      "They often coexist.",
      "Nightmares, avoidance and guilt are not explained by TBI.",
      "Correct.",
      "Nothing suggests feigning.",
      "No neurological symptoms incompatible with disease are described."
    ]
  },
  {
    "id": "v7-11",
    "tag": "PTSD vs psychosis",
    "stem": "A 33-year-old refugee who was tortured reports “hearing” the voices of his torturers when he is stressed and sometimes believes he is being followed. He has nightmares, avoidance, hypervigilance and startle. His thinking is organized, and he has no other delusions.",
    "q": "Which statement is most accurate?",
    "choices": [
      "He must have schizophrenia",
      "Pseudo-hallucinations and paranoid ideation can occur in PTSD",
      "PTSD with psychotic features is a DSM-5-TR specifier",
      "This is delirium",
      "This is malingering to support an asylum claim"
    ],
    "answer": 1,
    "why": "**Auditory pseudo-hallucinations** and **paranoid ideation** can occur in PTSD, especially after severe interpersonal trauma. Flashbacks and these phenomena relate directly to the trauma, without other psychotic features.",
    "whyNot": [
      "Organized thinking, no other delusions and trauma-linked content argue against schizophrenia.",
      "Correct.",
      "There is no psychotic-features specifier for PTSD.",
      "No disturbance of attention or awareness is described.",
      "Nothing in the history suggests feigning."
    ]
  },
  {
    "id": "v7-12",
    "tag": "Adjustment disorder",
    "stem": "A 52-year-old man was diagnosed with type 2 diabetes 6 weeks ago. Since then he has been anxious and tearful, skips meals unpredictably, has stopped checking his glucose and calls in sick often. He does not meet criteria for a major depressive episode or GAD.",
    "q": "What is the diagnosis and code?",
    "choices": [
      "Acute stress disorder (F43.0)",
      "Psychological factors affecting other medical conditions",
      "Adjustment disorder with anxiety (F43.22)",
      "Adjustment disorder with mixed anxiety and depressed mood (F43.23)",
      "Generalized anxiety disorder (F41.1)"
    ],
    "answer": 3,
    "why": "A reaction within 3 months to a new illness, with anxiety **and** low mood, impairing, not meeting another disorder: **F43.23**. The illness is the stressor.",
    "whyNot": [
      "A diabetes diagnosis is not a Criterion A trauma.",
      "That diagnosis applies when psychological factors worsen an illness; here the illness is causing the reaction. (His poor self-care could warrant it as well if it is harming the diabetes.)",
      "Depressed mood is also prominent.",
      "Correct.",
      "GAD needs 6 months of worry about many things."
    ]
  },
  {
    "id": "v7-13",
    "tag": "Adjustment vs MDD",
    "stem": "Seven weeks after losing his job, a 44-year-old man has depressed mood most of the day, loss of interest, weight loss, early waking, guilt, poor concentration and thoughts that his family would be better off without him, nearly every day for 3 weeks.",
    "q": "What is the correct diagnosis?",
    "choices": [
      "Major depressive disorder",
      "Adjustment disorder with depressed mood",
      "Normal reaction to job loss",
      "Persistent depressive disorder",
      "Prolonged grief disorder"
    ],
    "answer": 0,
    "why": "Full major depressive episode criteria are met. A stressor does not prevent the diagnosis; adjustment disorder applies only when **no other disorder** is met.",
    "whyNot": [
      "Correct.",
      "Excluded because MDD criteria are met (Criterion C).",
      "Seven symptoms with suicidal ideation are not a normal reaction.",
      "Not 2 years.",
      "There is no death."
    ]
  },
  {
    "id": "v7-14",
    "tag": "Persistent adjustment disorder",
    "stem": "A 60-year-old woman has been caring for her husband with advancing dementia for 2 years. For the past 14 months she has felt tearful, hopeless and overwhelmed, with poor sleep, but does not meet criteria for a major depressive episode or GAD.",
    "q": "Which diagnosis fits best?",
    "choices": [
      "No diagnosis: caregiving stress is normal",
      "Adjustment disorder cannot last more than 6 months, so other specified",
      "Persistent depressive disorder",
      "Prolonged grief disorder",
      "Adjustment disorder with depressed mood, persistent (chronic)"
    ],
    "answer": 4,
    "why": "The 6-month limit runs from the **end** of the stressor. With an ongoing stressor, the **persistent (chronic)** specifier applies. With depressed mood predominant: **F43.21**.",
    "whyNot": [
      "Impairing, out-of-proportion distress is diagnosable.",
      "The stressor is ongoing, so the disorder can continue.",
      "PDD needs 2 years of depressed mood with 2 of 6 symptoms; check, but it is not described here.",
      "Her husband is alive.",
      "Correct."
    ]
  },
  {
    "id": "v7-15",
    "tag": "Prolonged grief disorder",
    "stem": "A 58-year-old woman’s 24-year-old son died by suicide 15 months ago. She longs for him almost constantly, still sets a place for him at the table, cannot believe he is gone, feels her life has no purpose, has stopped seeing friends and feels intensely alone. Her religious community expected her to resume activities after 6 months. She eats and sleeps normally and does not feel worthless. She sometimes wishes she could join him.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Normal grief",
      "Major depressive disorder",
      "Prolonged grief disorder",
      "PTSD",
      "Persistent depressive disorder"
    ],
    "answer": 2,
    "why": "More than **12 months**, intense **yearning**, plus **disbelief, meaninglessness, poor reintegration and loneliness**, beyond cultural norms: **prolonged grief disorder (F43.81)**. Her wish to join him needs a careful suicide assessment.",
    "whyNot": [
      "Her grief clearly exceeds her community’s norms and impairs her.",
      "No generalized depressed mood, worthlessness or neurovegetative symptoms are described.",
      "Correct.",
      "She did not witness the death and has no event-focused intrusions.",
      "Not chronic generalized depression."
    ],
    "then": {
      "q": "Which feature of this case most raises her risk of suicidal ideation?",
      "choices": [
        "Her age",
        "The death of a child under 25 by violent means",
        "Normal sleep",
        "Religious affiliation",
        "Absence of worthlessness"
      ],
      "answer": 1,
      "why": "Suicidal ideation in prolonged grief is greater after **violent loss** (including suicide) and after the death of a **child, especially under 25**.",
      "whyNot": [
        "Older age raises risk of the disorder, but the specific loss matters most here.",
        "Correct.",
        "Not a risk factor.",
        "Not a listed risk factor.",
        "Suicidal ideation in prolonged grief occurs independent of depression."
      ]
    }
  },
  {
    "id": "v7-16",
    "tag": "PGD timing",
    "stem": "Seven months after her husband’s sudden death, a 50-year-old woman yearns for him every day, feels numb and lonely, and cannot return to work. She does not meet criteria for a major depressive episode.",
    "q": "What is the most appropriate diagnosis now?",
    "choices": [
      "Prolonged grief disorder",
      "Adjustment disorder",
      "Normal grief",
      "Other specified trauma- and stressor-related disorder",
      "Acute stress disorder"
    ],
    "answer": 1,
    "why": "Adults need **12 months** for prolonged grief disorder. Before that, out-of-proportion or impairing grief can be diagnosed as **adjustment disorder**. Reassess at 12 months.",
    "whyNot": [
      "Not before 12 months in adults.",
      "Correct.",
      "Her grief is impairing her ability to work.",
      "Other specified applies to grief beyond 12 months that is subthreshold.",
      "A sudden natural death learned about is not Criterion A, and it has been months."
    ]
  },
  {
    "id": "v7-17",
    "tag": "PGD vs PTSD",
    "stem": "A 35-year-old man found his brother’s body after a fatal shooting 14 months ago. He has vivid, here-and-now flashbacks of the scene, avoids the street where it happened and is hypervigilant. He also longs intensely for his brother daily, feels part of himself died and cannot imagine a future, beyond what his culture expects.",
    "q": "Which diagnoses are appropriate?",
    "choices": [
      "Major depressive disorder",
      "PTSD only",
      "Prolonged grief disorder only",
      "PTSD and prolonged grief disorder",
      "Adjustment disorder"
    ],
    "answer": 3,
    "why": "Event-focused, perceptual intrusions and trauma avoidance meet **PTSD**; yearning, identity disruption and meaninglessness meet **prolonged grief disorder**. Both are common after **violent** deaths and can be diagnosed together.",
    "whyNot": [
      "Not described.",
      "His yearning and grief symptoms also meet prolonged grief criteria.",
      "His trauma symptoms also meet PTSD.",
      "Correct.",
      "Full criteria for specific disorders are met."
    ]
  },
  {
    "id": "v7-18",
    "tag": "Grief experiences",
    "stem": "Five months after her husband died, a 72-year-old woman says she often feels him sitting in his chair and once heard him say goodnight as she was falling asleep. She finds this comforting. She is sad but functioning, with no other unusual beliefs or experiences.",
    "q": "What is the best interpretation?",
    "choices": [
      "A common experience in normal grief",
      "Late-onset schizophrenia",
      "Prolonged grief disorder",
      "Major depressive disorder with psychotic features",
      "Delirium"
    ],
    "answer": 0,
    "why": "Sensing the presence or hearing the voice of the deceased, often **hypnagogic** and **comforting**, is common in normal grief across cultures. Psychosis requires other symptoms.",
    "whyNot": [
      "Correct.",
      "No delusions, disorganization or negative symptoms.",
      "Under 12 months and she is functioning.",
      "No depressive episode is described.",
      "She is alert and oriented."
    ]
  },
  {
    "id": "v7-19",
    "tag": "RAD",
    "stem": "A 2½-year-old boy spent his first 2 years in an institution with one caregiver for 15 children. Three months after adoption, he does not go to his parents when he falls, does not settle when picked up, rarely smiles and has sudden fearful episodes during calm play. He makes eye contact, points to share interest and has no repetitive behaviors. His developmental age is about 20 months.",
    "q": "What is the diagnosis?",
    "choices": [
      "PTSD in a young child",
      "Autism spectrum disorder",
      "Disinhibited social engagement disorder",
      "Intellectual developmental disorder",
      "Reactive attachment disorder"
    ],
    "answer": 4,
    "why": "Rarely seeks and rarely responds to comfort, limited positive affect, unexplained fear, after **institutional rearing**, before 5, developmental age over 9 months, not autism: **F94.1 RAD**.",
    "whyNot": [
      "No specific traumatic event with intrusion symptoms is described.",
      "Joint attention (pointing to share) and no repetitive behaviors argue against autism.",
      "He is withdrawn, not indiscriminately friendly.",
      "Social and emotional skills are below his developmental level, which suggests RAD.",
      "Correct."
    ],
    "then": {
      "q": "What is the most important determinant of his prognosis?",
      "choices": [
        "The quality of his caregiving from now on",
        "Starting an SSRI",
        "His IQ",
        "Genetic testing",
        "Holding therapy"
      ],
      "answer": 0,
      "why": "Prognosis in RAD depends on the **quality of the caregiving environment** after neglect. Coercive holding therapies are harmful.",
      "whyNot": [
        "Correct.",
        "No medication treats attachment.",
        "Not the main determinant.",
        "Not relevant here.",
        "Coercive holding therapies are harmful and should be avoided."
      ]
    }
  },
  {
    "id": "v7-20",
    "tag": "DSED",
    "stem": "A 7-year-old girl adopted at age 3 from a foster care system with eight placements hugs strangers in the supermarket, tells unfamiliar adults personal details, and once left the park with a stranger’s family without hesitation. She has a warm relationship with her adoptive mother. Her teacher reports normal attention and activity levels.",
    "q": "What is the diagnosis?",
    "choices": [
      "ADHD",
      "Reactive attachment disorder",
      "Disinhibited social engagement disorder",
      "Normal friendliness",
      "Autism spectrum disorder"
    ],
    "answer": 2,
    "why": "Overfamiliarity and willingness to go off with strangers after **repeated caregiver changes**, not due to impulsivity: **F94.2 DSED**. It can coexist with a warm, even secure, attachment to current caregivers.",
    "whyNot": [
      "Attention and activity are normal.",
      "She is not withdrawn and seeks comfort from her mother.",
      "Correct.",
      "Going off with strangers exceeds age and cultural norms and is dangerous.",
      "No restricted interests or social communication deficits."
    ]
  },
  {
    "id": "v7-21",
    "tag": "Subthreshold PTSD",
    "stem": "Twenty months after a serious car crash, a 47-year-old man still has intrusive memories and avoids driving on highways, but he denies negative changes in mood or beliefs and has only one arousal symptom (startle). His avoidance limits his job.",
    "q": "What is the best diagnosis?",
    "choices": [
      "PTSD",
      "Other specified trauma- and stressor-related disorder (persistent response to trauma with PTSD-like symptoms)",
      "Adjustment disorder with anxiety",
      "Specific phobia, situational",
      "No diagnosis"
    ],
    "answer": 1,
    "why": "Subthreshold PTSD persisting **more than 6 months** cannot be an adjustment disorder. It is **other specified**, recorded as persistent response to trauma with PTSD-like symptoms (F43.89).",
    "whyNot": [
      "Criteria D and E are not met.",
      "Correct.",
      "Adjustment disorder cannot extend this long after the stressor without enduring consequences.",
      "Intrusive memories of the crash point to a trauma-related condition. (Specific phobia after a trauma is diagnosed only if PTSD-like criteria are not better fits.)",
      "His impairment is significant."
    ]
  },
  {
    "id": "v7-22",
    "tag": "PTSD and suicide",
    "stem": "A 30-year-old veteran with PTSD from combat, comorbid alcohol use disorder and recent divorce says he has been thinking about suicide and recently bought a gun.",
    "q": "Which statement about PTSD and suicide is most accurate?",
    "choices": [
      "Veterans with PTSD rarely attempt suicide",
      "PTSD is not linked to suicide deaths",
      "His risk is explained solely by alcohol",
      "PTSD increases the transition from suicidal thoughts to plans and attempts, independent of mood disorders",
      "Suicide risk falls once symptoms last more than a year"
    ],
    "answer": 3,
    "why": "PTSD is linked with suicidal thoughts, attempts and **deaths**, and with moving **from thoughts to plans or attempts**, independent of mood disorders. Access to a firearm, alcohol and a recent loss make this urgent.",
    "whyNot": [
      "Not true.",
      "It is linked to suicide deaths.",
      "PTSD raises risk independently.",
      "Correct.",
      "Chronic PTSD does not lower risk."
    ],
    "discuss": [
      "How would you approach lethal means counseling with him?"
    ]
  },
  {
    "id": "v7-23",
    "tag": "Medical trauma",
    "stem": "A 55-year-old man woke during cardiac surgery, unable to move but aware of pain and the surgeons’ voices. Four months later he has nightmares, flashbacks, avoidance of hospitals, detachment, irritability and insomnia.",
    "q": "Does the event meet Criterion A?",
    "choices": [
      "Yes: a catastrophic treatment event such as waking during surgery can qualify",
      "No: medical illness never qualifies",
      "No: he was not in danger of dying",
      "Only if surgery was an emergency",
      "Only if he has a new diagnosis of cancer"
    ],
    "answer": 0,
    "why": "Most illnesses are not Criterion A, but **sudden catastrophic medical events** qualify: waking during surgery, anaphylaxis, myocardial infarction, emergency cardioversion, burn debridement.",
    "whyNot": [
      "Correct.",
      "Some medical events qualify.",
      "The experience evoked terror and helplessness of a qualifying kind.",
      "Not required.",
      "A cancer diagnosis in itself is not a Criterion A event."
    ]
  },
  {
    "id": "v7-24",
    "tag": "Adjustment disorder conduct",
    "stem": "A 15-year-old boy whose family was evicted 2 months ago has started skipping school, fighting and vandalizing a bus shelter. He has no history of behavior problems, does not meet criteria for conduct disorder, and has no significant mood or anxiety symptoms.",
    "q": "What is the code?",
    "choices": [
      "F43.21",
      "F43.25",
      "F91.1",
      "F43.20",
      "F43.24"
    ],
    "answer": 4,
    "why": "Adjustment disorder **with disturbance of conduct**: F43.24. With prominent emotional symptoms too, F43.25.",
    "whyNot": [
      "There is no prominent depressed mood.",
      "Emotional symptoms are not prominent.",
      "Conduct disorder criteria are not met.",
      "A specific subtype fits.",
      "Correct."
    ]
  },
  {
    "id": "v7-25",
    "tag": "ASD and brief psychosis",
    "stem": "Five days after surviving a mass shooting, a 22-year-old woman believes the shooter is controlling her thoughts through the television, hears his voice commenting on her actions and speaks incoherently.",
    "q": "Which diagnosis should be considered rather than acute stress disorder?",
    "choices": [
      "PTSD",
      "Acute stress disorder",
      "Brief psychotic disorder, with marked stressor",
      "Adjustment disorder",
      "Dissociative identity disorder"
    ],
    "answer": 2,
    "why": "Acute stress disorder Criterion E excludes presentations better explained by **brief psychotic disorder**. Delusions, hallucinations and disorganized speech after a stressor suggest brief psychotic disorder **with marked stressor** (Chapter 2).",
    "whyNot": [
      "Too early, and psychotic features dominate.",
      "Excluded when better explained by brief psychotic disorder.",
      "Correct.",
      "Psychotic symptoms point to a psychotic disorder.",
      "No identity disruption is described."
    ]
  }
]);
