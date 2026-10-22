/* Chapter 8 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch08", "vignettes", [
  {
    "id": "v8-01",
    "tag": "DID vs bipolar",
    "stem": "A 32-year-old woman has been treated for 6 years for “rapid-cycling bipolar II disorder” with lithium, lamotrigine and quetiapine, without benefit. Her mood switches from tearful to cheerful to enraged within an hour, several times a week. She often wakes from nightmares about her stepfather. She reports finding notebooks in handwriting she does not recognize and being told by friends about arguments she cannot recall. She has never had days of decreased need for sleep.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Bipolar II disorder, rapid cycling",
      "Dissociative identity disorder",
      "Borderline personality disorder",
      "Cyclothymic disorder",
      "Dissociative amnesia"
    ],
    "answer": 1,
    "why": "**Minute-to-hour** state shifts, sleep broken by **nightmares** rather than decreased need for sleep, plus **recurrent everyday amnesia** and unexplained possessions point to **DID**, which is often misdiagnosed as bipolar II with mixed features.",
    "whyNot": [
      "Bipolar episodes last days, with decreased need for sleep; her shifts last minutes to hours and she has amnesia.",
      "Correct.",
      "Borderline traits may appear, but they do not explain the amnesia and unrecognized handwriting.",
      "Cyclothymia involves subthreshold hypomanic and depressive periods over 2 years, not dissociative amnesia.",
      "She has identity discontinuities as well as amnesia."
    ],
    "discuss": [
      "Which questions would you add to every mood assessment to catch dissociation?"
    ]
  },
  {
    "id": "v8-02",
    "tag": "DID vs schizophrenia",
    "stem": "A 26-year-old man hears a child crying and two adult voices arguing about him inside his head. He finds them frightening and “not me,” and does not believe anyone is putting them there. He also sees flashes of a basement where he was locked as a child and smells cigarette smoke when no one is smoking. He loses hours at a time and recently “came to” on a bus to another city. His speech is organized, and he has no delusions.",
    "q": "Which feature most strongly favors DID over schizophrenia?",
    "choices": [
      "Young adult onset",
      "Hearing voices arguing",
      "Hearing voices inside the head",
      "Recurrent amnesia with time loss and fugue",
      "Male sex"
    ],
    "answer": 3,
    "why": "Voices can occur in both. **Dissociative amnesia** (time loss, fugue) is characteristic of DID and not of psychotic disorders. His voices are ego-alien without delusional explanation, and his hallucinations are multimodal, flashback-like.",
    "whyNot": [
      "Both often present in young adulthood.",
      "Arguing voices resemble first-rank symptoms but occur in DID too.",
      "Location of voices is not a reliable discriminator.",
      "Correct.",
      "Not discriminating."
    ]
  },
  {
    "id": "v8-03",
    "tag": "Possession",
    "stem": "In a rural community, a 19-year-old woman has repeated episodes in which she speaks in the voice of a girl who died by suicide in the village years ago. The episodes occur at home and at school, at unpredictable times, are terrifying to her, and her family has taken her to several healers without effect. She has no memory of what she says during the episodes and has lost time on many other days.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "Dissociative identity disorder, possession form",
      "No mental disorder: culturally accepted possession",
      "Other specified dissociative disorder, dissociative trance",
      "Schizophrenia",
      "Brief psychotic disorder"
    ],
    "answer": 0,
    "why": "Possession that is **recurrent, involuntary, distressing**, occurs outside culturally sanctioned times and places, causes conflict, and comes with **recurrent amnesia**: **possession-form DID**.",
    "whyNot": [
      "Correct.",
      "Her possession is involuntary, distressing and outside accepted practice, so Criterion D does not exclude it.",
      "Trance is unresponsiveness without identity states and recurrent amnesia.",
      "No delusions, disorganization or negative symptoms are described.",
      "The pattern is recurrent and dissociative, not a brief psychotic episode."
    ]
  },
  {
    "id": "v8-04",
    "tag": "Imaginary companions",
    "stem": "A 7-year-old girl in foster care after severe neglect talks to “Ruby,” who she says makes her steal food and hit other children. Her foster mother notices she sometimes stares blankly, does not remember things she did that morning, and responds to a different name. Her teacher reports similar forgetting and sudden changes in her behavior and handwriting.",
    "q": "What is the most appropriate next step?",
    "choices": [
      "Diagnose oppositional defiant disorder",
      "Reassure that this is a normal imaginary playmate",
      "Diagnose ADHD",
      "Diagnose childhood-onset schizophrenia",
      "Assess for a dissociative disorder, gathering information from several informants"
    ],
    "answer": 4,
    "why": "Imaginary playmates alone are normal, but **independently acting companions** with **amnesia**, responding to another name and changes in handwriting, in a severely neglected child, warrant careful assessment for DID using **several informants**.",
    "whyNot": [
      "Her behavior is better explained by dissociative phenomena.",
      "Normal imaginary play does not bring amnesia, name changes and handwriting shifts.",
      "Inattention does not explain responding to a different name or handwriting changes.",
      "No psychotic features are described.",
      "Correct."
    ]
  },
  {
    "id": "v8-05",
    "tag": "Feigned DID",
    "stem": "A 33-year-old man awaiting trial for assault tells the forensic evaluator that “Max,” his evil alter, committed the crime while he, “the real me,” was asleep. He describes Max in detail, switches dramatically with a deep voice when the evaluator watches, and asks whether the diagnosis will reduce his sentence. He denies depression and any memory gaps other than the night of the assault. Records show no previous dissociative symptoms.",
    "q": "What is the most likely explanation?",
    "choices": [
      "Dissociative amnesia",
      "Dissociative identity disorder",
      "Malingering",
      "Factitious disorder",
      "Antisocial personality disorder with DID"
    ],
    "answer": 2,
    "why": "A stereotyped **“all-bad” alter**, amnesia only for the crime, **dramatic switching when observed**, interest in legal benefit and no prior history suggest feigned DID for **external gain**: malingering.",
    "whyNot": [
      "Amnesia limited to an event tied to gain is suspicious for feigning.",
      "Genuine DID is usually hidden, shameful and underreported, with amnesia for everyday events.",
      "Correct.",
      "Factitious disorder feigns illness without obvious external rewards; here the goal is legal.",
      "Antisocial traits may be present, but the DID presentation is not credible."
    ]
  },
  {
    "id": "v8-06",
    "tag": "DID suicide",
    "stem": "A 28-year-old woman with DID and PTSD tells you that one of her identity states “wants to die” and has cut her arms several times this month. She has attempted suicide twice before. She currently lives with a partner who hits her.",
    "q": "Which statement best guides your assessment?",
    "choices": [
      "Self-harm by one identity state does not reflect real risk",
      "Suicide attempts are very common in DID; assess all identity states and current safety, including intimate partner violence",
      "DID protects against suicide because of dissociation",
      "Suicidality should be addressed only after trauma processing",
      "Hospitalize only if the host identity endorses suicidal thoughts"
    ],
    "answer": 1,
    "why": "More than **70%** of outpatients with DID have attempted suicide; dissociation independently predicts repeated attempts. Ask about **all identity states**, self-injury and **revictimization** (intimate partner violence is common).",
    "whyNot": [
      "Self-harm by any state is real self-harm.",
      "Correct.",
      "Dissociation is a risk factor, not protective.",
      "Safety and stabilization come first in phase-oriented treatment.",
      "Risk must be assessed across states, not only the presenting one."
    ]
  },
  {
    "id": "v8-07",
    "tag": "Localized amnesia",
    "stem": "A 40-year-old firefighter cannot recall anything from the 6 hours after a building collapse that killed two colleagues, though he remembers the morning and the following day. He has no intrusions, nightmares, avoidance or hyperarousal. Neurological examination and MRI are normal, and he had no head injury. The gap distresses him and is affecting his return to work.",
    "q": "What is the diagnosis?",
    "choices": [
      "Neurocognitive disorder due to TBI",
      "PTSD",
      "Acute stress disorder",
      "Dissociative amnesia, localized (F44.0)",
      "Dissociative amnesia with dissociative fugue (F44.1)"
    ],
    "answer": 3,
    "why": "Failure to recall a **circumscribed period** around a trauma, with distress and a normal workup, and **no PTSD symptoms**: dissociative amnesia, localized form.",
    "whyNot": [
      "No head injury, normal examination and imaging.",
      "PTSD would need intrusions, avoidance, negative cognitions and arousal.",
      "Acute stress disorder needs 9 of 14 symptoms in the first month.",
      "Correct.",
      "There was no travel or wandering."
    ]
  },
  {
    "id": "v8-08",
    "tag": "Fugue",
    "stem": "A 45-year-old accountant is found in a coastal town 500 km from home, working as a dishwasher under a different name. He cannot recall his past and appears puzzled when shown his driver’s license. Three weeks earlier, his firm discovered he had embezzled money. His EEG, MRI and toxicology are normal.",
    "q": "Which statement is most accurate?",
    "choices": [
      "Dissociative amnesia with dissociative fugue (F44.1) is likely, but feigning should be considered because of legal problems",
      "This must be malingering because of the legal problems",
      "This is a complex partial seizure",
      "This is DID",
      "This is transient global amnesia"
    ],
    "answer": 0,
    "why": "Generalized amnesia with **purposeful travel** and a new identity fits fugue (F44.1). Legal or financial problems raise the possibility of feigning, but **no test** reliably separates them, and they can coexist.",
    "whyNot": [
      "Correct.",
      "Context raises suspicion but does not prove malingering.",
      "Seizure wandering is brief and nonpurposive; EEG is normal.",
      "There is no evidence of two personality states with recurrent amnesia.",
      "TGA is brief anterograde amnesia with identity preserved."
    ]
  },
  {
    "id": "v8-09",
    "tag": "Transient global amnesia",
    "stem": "A 63-year-old man is brought in after swimming in cold water. For the past 5 hours he has repeatedly asked his wife what day it is and why they are at the beach, forgetting her answers within minutes. He knows his name, his wife and his job. His neurological examination is otherwise normal.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Major neurocognitive disorder",
      "Dissociative amnesia, continuous form",
      "Dissociative fugue",
      "Delirium due to hypothermia",
      "Transient global amnesia"
    ],
    "answer": 4,
    "why": "Sudden **anterograde** amnesia for hours with repetitive questioning and **preserved identity** in an older adult after exertion or cold water is classic **transient global amnesia**, a neurological condition excluded from dissociative amnesia (Criterion C).",
    "whyNot": [
      "The onset is sudden and transient.",
      "Continuous dissociative amnesia is rare and the presentation here is classic TGA.",
      "He has not traveled or lost his identity.",
      "He is attentive and oriented to person; nothing suggests delirium.",
      "Correct."
    ]
  },
  {
    "id": "v8-10",
    "tag": "Amnesia vs PTSD",
    "stem": "Three months after a sexual assault, a 22-year-old woman has nightmares, avoids the neighborhood, startles easily and feels shame. She cannot recall most of the night of the assault. She also cannot remember large parts of the past 2 years, including her sister’s wedding and her graduation, which were not traumatic.",
    "q": "Which diagnoses are appropriate?",
    "choices": [
      "Dissociative amnesia only",
      "PTSD only",
      "PTSD and dissociative amnesia",
      "Acute stress disorder",
      "DID"
    ],
    "answer": 2,
    "why": "Amnesia for the assault is part of PTSD. Because her amnesia **extends beyond the trauma** to unrelated events, **dissociative amnesia** is added.",
    "whyNot": [
      "She meets PTSD criteria too.",
      "PTSD covers amnesia for the trauma only.",
      "Correct.",
      "Symptoms have lasted more than a month.",
      "No identity states are described."
    ]
  },
  {
    "id": "v8-11",
    "tag": "Blackouts",
    "stem": "A 38-year-old man with severe alcohol use disorder reports repeated episodes of waking with no memory of the previous evening. His wife confirms each occurred after heavy drinking. After 3 months of abstinence, he has had no further gaps, and his cognitive testing is normal.",
    "q": "What best explains his memory gaps?",
    "choices": [
      "Dissociative amnesia",
      "Alcohol-related blackouts",
      "DID",
      "Alcohol-induced major neurocognitive disorder",
      "Transient global amnesia"
    ],
    "answer": 1,
    "why": "Gaps occurring **only during intoxication** and stopping with abstinence are blackouts, not dissociative amnesia.",
    "whyNot": [
      "Dissociative amnesia is not explained by intoxication.",
      "Correct.",
      "No identity states or sober amnesia.",
      "Cognitive testing is normal and the deficits did not persist.",
      "TGA is not linked to drinking episodes in this way."
    ]
  },
  {
    "id": "v8-12",
    "tag": "Amnesia remission",
    "stem": "A 30-year-old woman with generalized dissociative amnesia after a violent assault 2 months ago suddenly recovers detailed memories of the event during a therapy session. That evening she calls the clinic, sobbing, saying she cannot bear what she now remembers.",
    "q": "What is the most important immediate step?",
    "choices": [
      "Begin intensive exposure therapy the next day",
      "Reassure her that recovered memories confirm recovery",
      "Schedule a routine follow-up next month",
      "Assess suicide risk and safety now",
      "Refer for EEG"
    ],
    "answer": 3,
    "why": "Suicidal behavior may be a particular risk when amnesia **remits suddenly** and floods the person with intolerable memories.",
    "whyNot": [
      "Stabilization and safety come before intensive processing.",
      "Reassurance alone ignores acute risk.",
      "Too slow given her distress.",
      "Correct.",
      "Not the priority; her presentation is not neurological."
    ]
  },
  {
    "id": "v8-13",
    "tag": "DPDR",
    "stem": "A 17-year-old boy has felt for 10 months that he is “living in a dream,” that his hands do not belong to him and that he watches himself from above. He knows this is not literally true but fears he has brain damage. He checks his reflection repeatedly to see whether he exists. Symptoms began suddenly at a party where he smoked cannabis for the first time; he has not used since. EEG and MRI are normal.",
    "q": "What is the diagnosis?",
    "choices": [
      "Depersonalization/derealization disorder",
      "Cannabis intoxication",
      "Cannabis-induced psychotic disorder",
      "Obsessive-compulsive disorder",
      "Illness anxiety disorder"
    ],
    "answer": 0,
    "why": "Persistent depersonalization and derealization with **intact reality testing**, persisting long **without further drug use**: DPDR. Substances precipitate about 15% of cases. His checking is limited to the DPDR experience.",
    "whyNot": [
      "Correct.",
      "Symptoms have lasted 10 months without use.",
      "He has no delusions or hallucinations; reality testing is intact.",
      "His checking concerns only his depersonalization, with no other OCD symptoms.",
      "His fear of brain damage is a common associated feature of DPDR."
    ],
    "then": {
      "q": "Which first-line approach best fits?",
      "choices": [
        "Antipsychotic medication",
        "Psychoeducation and CBT for depersonalization, with continued abstinence from cannabis",
        "Benzodiazepines as needed",
        "Electroconvulsive therapy",
        "Hypnosis to recover memories"
      ],
      "answer": 1,
      "why": "Psychoeducation and CBT targeting avoidance, checking and catastrophic interpretations are first-line; no medication is FDA-approved. (Treatment knowledge, outside the DSM.)",
      "whyNot": [
        "There is no psychosis.",
        "Correct.",
        "Not indicated and may worsen detachment.",
        "Not indicated.",
        "Not relevant: there is no amnesia."
      ]
    }
  },
  {
    "id": "v8-14",
    "tag": "DPDR vs panic",
    "stem": "A 24-year-old woman with panic disorder reports that during her panic attacks she feels detached from her body and that the room looks unreal. Between attacks she feels completely normal.",
    "q": "Should depersonalization/derealization disorder be diagnosed?",
    "choices": [
      "Yes, if the symptoms last more than 10 minutes",
      "Yes: she has both depersonalization and derealization",
      "Yes: DPDR and panic disorder are always diagnosed together",
      "No: DPDR cannot coexist with an anxiety disorder",
      "No: the symptoms occur only during panic attacks"
    ],
    "answer": 4,
    "why": "DPDR is not diagnosed when symptoms occur **only during panic attacks**. It can be diagnosed if DPDR exceeds the attacks from the start or persists after panic remits.",
    "whyNot": [
      "There is no such duration rule.",
      "Context matters: these are panic attack symptoms.",
      "They are not automatically paired.",
      "They can coexist if DPDR occurs independently.",
      "Correct."
    ]
  },
  {
    "id": "v8-15",
    "tag": "DPDR late onset",
    "stem": "A 52-year-old woman with no psychiatric history develops episodes of feeling that the world is unreal and that she is detached from her body, lasting a few minutes, with a strange smell and a sense of déjà vu. She remembers the episodes.",
    "q": "What is the most appropriate next step?",
    "choices": [
      "Start an SSRI",
      "Diagnose DPDR and start CBT",
      "EEG (ambulatory if needed) and brain imaging",
      "Diagnose panic disorder",
      "Reassure that these are normal transient experiences"
    ],
    "answer": 2,
    "why": "Onset after **40**, brief stereotyped episodes with an **olfactory aura** and déjà vu suggest **temporal lobe seizures**. DSM-5-TR advises EEG (ambulatory if needed) and imaging when onset is late or atypical.",
    "whyNot": [
      "Premature.",
      "A medical cause must be excluded first.",
      "Correct.",
      "Episodes with olfactory auras and déjà vu point to seizures, not panic.",
      "Late, stereotyped onset is not reassuring."
    ]
  },
  {
    "id": "v8-16",
    "tag": "DPDR vs psychosis",
    "stem": "A 60-year-old man with severe depression says he has no blood, his organs have rotted and he is already dead, and that there is no point eating. He cannot be persuaded otherwise.",
    "q": "How are these experiences best described?",
    "choices": [
      "Depersonalization/derealization disorder",
      "Nihilistic delusions in psychotic depression",
      "Dissociative amnesia",
      "Dissociative trance",
      "Illness anxiety disorder"
    ],
    "answer": 1,
    "why": "Fixed conviction that he is dead (Cotard-type) is a **nihilistic delusion**. DPDR requires **intact reality testing**.",
    "whyNot": [
      "He lacks insight; DPDR is excluded.",
      "Correct.",
      "Not a memory problem.",
      "He is not unresponsive.",
      "He is convinced, not worried, and the belief is delusional."
    ]
  },
  {
    "id": "v8-17",
    "tag": "DPDR epidemiology",
    "stem": "A medical student asks about depersonalization/derealization disorder after reading about it.",
    "q": "Which statement is correct?",
    "choices": [
      "PTSD is its most common comorbidity",
      "The disorder usually begins after 40",
      "It is rare to have transient episodes",
      "Transient episodes are common, affecting about half of adults; mean onset of the disorder is 16",
      "Sexual abuse is its most consistent childhood antecedent"
    ],
    "answer": 3,
    "why": "About **half** of adults have had a transient episode. Mean onset is **16**; onset after 40 is highly unusual. PTSD comorbidity is **low**; **emotional** abuse and neglect are the most consistent antecedents.",
    "whyNot": [
      "PTSD comorbidity is low.",
      "Onset after 40 is highly unusual.",
      "Transient episodes are common.",
      "Correct.",
      "Emotional abuse and neglect, not sexual abuse."
    ]
  },
  {
    "id": "v8-18",
    "tag": "Acute dissociative reaction",
    "stem": "After surviving a building fire 10 days ago, a 33-year-old woman reports that time seems slowed, objects look tiny and far away, she feels her body is numb, and she has short gaps in memory for parts of each day. She has no intrusive memories, avoidance or hyperarousal. Medical workup is normal.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "Other specified dissociative disorder (acute dissociative reaction to stressful events)",
      "Acute stress disorder",
      "PTSD",
      "Dissociative amnesia",
      "Depersonalization/derealization disorder"
    ],
    "answer": 0,
    "why": "Constricted consciousness, **time slowing, micropsia, numbness and micro-amnesias** soon after a stressor, lasting less than a month, without enough acute stress disorder symptoms: **acute dissociative reaction** (F44.89).",
    "whyNot": [
      "Correct.",
      "Acute stress disorder needs 9 of 14 symptoms across intrusion, mood, dissociation, avoidance and arousal; she has only dissociative symptoms.",
      "PTSD needs more than a month and the four clusters.",
      "Her micro-amnesias are part of a broader acute reaction.",
      "DPDR is persistent or recurrent; this is acute and stress-linked."
    ]
  },
  {
    "id": "v8-19",
    "tag": "Coercive persuasion",
    "stem": "A 27-year-old man left a high-control religious group after 6 years of isolation, sleep deprivation and constant indoctrination. He now says he does not know who he is, uses the name the group gave him, and alternately rejects and defends their beliefs. He has no memory gaps.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Adjustment disorder",
      "DID",
      "Delusional disorder",
      "Borderline personality disorder",
      "Other specified dissociative disorder (identity disturbance due to prolonged and intense coercive persuasion)"
    ],
    "answer": 4,
    "why": "Prolonged changes in, or questioning of, identity after **intense coercive persuasion** (cults, brainwashing, captivity) are a named example of other specified dissociative disorder.",
    "whyNot": [
      "The identity disturbance is better captured by the specific dissociative example.",
      "No distinct identity states with recurrent amnesia.",
      "His ambivalent questioning is not a fixed false belief.",
      "His identity disturbance follows a specific coercive experience rather than a lifelong pattern.",
      "Correct."
    ]
  },
  {
    "id": "v8-20",
    "tag": "Dissociative trance",
    "stem": "A 35-year-old woman is brought to the emergency department after becoming completely unresponsive at work for 2 hours, eyes open, with small repetitive finger movements she did not seem aware of. She has no history of seizures; EEG during a later episode is normal, and glucose and toxicology are normal. Her community does not practice trance rituals.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Absence seizures",
      "Catatonia",
      "Other specified dissociative disorder (dissociative trance)",
      "Dissociative identity disorder",
      "Malingering"
    ],
    "answer": 2,
    "why": "Acute loss of awareness of surroundings with profound **unresponsiveness** and minor stereotyped movements, **outside accepted cultural practice**, with a normal workup: dissociative trance (F44.89).",
    "whyNot": [
      "Absence seizures last seconds and the EEG was normal.",
      "No posturing, rigidity, negativism or waxy flexibility are described.",
      "Correct.",
      "No identity states or recurrent amnesia.",
      "Nothing suggests deliberate production for gain."
    ]
  },
  {
    "id": "v8-21",
    "tag": "DID comorbidity",
    "stem": "A 31-year-old woman with DID is referred to neurology for frequent convulsive episodes. Video-EEG captures three typical episodes with no epileptic activity. She also meets criteria for PTSD and has binge eating.",
    "q": "Which statement is most accurate?",
    "choices": [
      "Her episodes must be epileptic because they are convulsive",
      "Nonepileptic seizures are common functional neurological symptoms in DID, alongside PTSD and eating disorders",
      "PTSD cannot be diagnosed together with DID",
      "Her eating disorder excludes DID",
      "She should be diagnosed only with functional neurological symptom disorder"
    ],
    "answer": 1,
    "why": "**Nonepileptic seizures** (often resembling grand mal or complex partial seizures), PTSD and eating disorders are all common comorbidities of DID.",
    "whyNot": [
      "Video-EEG shows no epileptic activity.",
      "Correct.",
      "Most people with DID meet PTSD criteria.",
      "Eating disorders are comorbid, not exclusionary.",
      "Her identity states and amnesia require DID as well."
    ]
  },
  {
    "id": "v8-22",
    "tag": "DID vs BPD",
    "stem": "A 29-year-old woman has a history of self-harm, unstable relationships and intense anger. On assessment she describes long periods she cannot account for, finding cigarettes although she does not smoke, and colleagues calling her by another name. She is avoidant and prefers to be alone, and she has stayed in one abusive relationship for 8 years rather than fearing abandonment.",
    "q": "Which feature most strongly suggests DID rather than borderline personality disorder alone?",
    "choices": [
      "Unstable relationships",
      "Self-harm",
      "Anger",
      "Recurrent amnesia with unexplained possessions and being called by another name",
      "History of abuse"
    ],
    "answer": 3,
    "why": "**Recurrent amnesia** with evidence of another identity (unexplained possessions, another name) points to DID. Self-harm, anger and abuse histories overlap. DID often shows avoidant traits rather than frantic abandonment avoidance.",
    "whyNot": [
      "Common in both.",
      "Common in both.",
      "Common in both.",
      "Correct.",
      "Common in both."
    ]
  },
  {
    "id": "v8-23",
    "tag": "DID trigger",
    "stem": "A 44-year-old man with long-standing but mild dissociative symptoms has a marked increase in time loss, internal voices and self-harm over 2 months. He mentions that his father, who abused him severely as a child, has just been diagnosed with terminal cancer, and that his own son recently turned 8, the age at which the abuse began.",
    "q": "How should these events be understood?",
    "choices": [
      "Both are recognized triggers that can worsen DID",
      "They are unrelated coincidences",
      "Worsening indicates a new psychotic disorder",
      "Worsening indicates feigning",
      "They indicate bipolar disorder"
    ],
    "answer": 0,
    "why": "The **death or fatal illness of the abuser** and one’s **child reaching the age of one’s own abuse** are recognized triggers of DID exacerbation.",
    "whyNot": [
      "Correct.",
      "These are classic triggers.",
      "Voices and time loss fit DID.",
      "Nothing suggests feigning.",
      "No mood episodes are described."
    ]
  },
  {
    "id": "v8-24",
    "tag": "DPDR course",
    "stem": "A 30-year-old man has had depersonalization since age 15. He describes it as constant for the past 10 years, worse in bright supermarkets and when he sleeps poorly. He has moderate depression and social anxiety but no PTSD symptoms.",
    "q": "Which statement about his course is correct?",
    "choices": [
      "Onset at 15 is atypical",
      "DPDR always resolves within a year",
      "Constant symptoms suggest a psychotic disorder",
      "His lack of PTSD makes DPDR unlikely",
      "Persistent courses are common, and overstimulating settings and sleep loss typically worsen symptoms"
    ],
    "answer": 4,
    "why": "About a third of cases are continuous from the start and a third become continuous. **Overstimulating settings**, lighting and **lack of sleep** are typical exacerbating factors. PTSD comorbidity is low, and onset in adolescence is typical.",
    "whyNot": [
      "Mean onset is 16.",
      "The course is often persistent.",
      "Reality testing is intact.",
      "PTSD comorbidity is low in DPDR.",
      "Correct."
    ]
  },
  {
    "id": "v8-25",
    "tag": "ECT and dissociation",
    "stem": "A 50-year-old woman with DID develops severe psychotic depression and stops eating. ECT is recommended. Her therapist worries that ECT will worsen her amnesia and dissociation.",
    "q": "Which statement is most accurate?",
    "choices": [
      "ECT will cause new identity states",
      "ECT is contraindicated in DID",
      "ECT memory effects are mainly for the treatment days and remit; ECT does not worsen dissociation, and memory access may improve as depression remits",
      "ECT selectively erases traumatic memories",
      "ECT causes permanent dissociative amnesia"
    ],
    "answer": 2,
    "why": "ECT-related memory loss mostly involves the **day of treatment** and remits after the series. In severely depressed people with dissociative disorders, ECT **does not worsen dissociation**.",
    "whyNot": [
      "No evidence.",
      "It is not contraindicated.",
      "Correct.",
      "ECT memory loss is unrelated to traumatic periods.",
      "Extensive ECT amnesia usually remits."
    ]
  }
]);
