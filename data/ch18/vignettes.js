/* Chapter 18 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch18", "vignettes", [
  {
    "id": "v18-01",
    "tag": "Borderline vs bipolar",
    "stem": "A 26-year-old woman has been treated for “rapid-cycling bipolar II disorder” with lithium and quetiapine for 3 years without benefit. Her mood swings from despair to fury to calm several times a day, usually after arguments with her boyfriend. She has cut her forearms since age 15, often after feeling “numb and empty.” She has had a series of intense relationships ending in rage. She has never had days of elevated mood with decreased need for sleep.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Bipolar II disorder, rapid cycling",
      "Borderline personality disorder",
      "Cyclothymic disorder",
      "Histrionic personality disorder",
      "Major depressive disorder with mixed features"
    ],
    "answer": 1,
    "why": "Mood shifts lasting **hours**, triggered **interpersonally**, with chronic emptiness, self-harm since adolescence and unstable intense relationships, and **no hypomanic episodes**: **borderline PD (F60.3)**.",
    "whyNot": [
      "Bipolar II requires hypomanic episodes of at least 4 days; hers are hours-long reactive shifts.",
      "Correct.",
      "Cyclothymia involves subthreshold hypomanic and depressive periods over 2 years, not reactive hours-long shifts with self-harm and emptiness.",
      "Histrionic PD lacks self-destructiveness, emptiness and angry ruptures.",
      "There is no 2-week depressive episode."
    ],
    "then": {
      "q": "Which first-line treatment is best supported?",
      "choices": [
        "A structured, evidence-based psychotherapy such as DBT or MBT",
        "Long-term lithium as the main treatment",
        "A benzodiazepine for mood swings",
        "Electroconvulsive therapy",
        "Antipsychotic monotherapy indefinitely"
      ],
      "answer": 0,
      "why": "The APA guideline (December 2024) strongly recommends a **structured psychotherapy** targeting core features (DBT, MBT, TFP, schema therapy; none is a gold standard). Medication is time-limited, targeted and adjunctive. (Treatment knowledge, outside the DSM.)",
      "whyNot": [
        "Correct.",
        "No medication treats the core symptoms; lithium also carries overdose risk.",
        "Benzodiazepines can worsen disinhibition and are risky.",
        "ECT is not a treatment for borderline PD.",
        "Antipsychotics may be used briefly for specific targets, not as the main or indefinite treatment."
      ]
    }
  },
  {
    "id": "v18-02",
    "tag": "Cross-section",
    "stem": "A 40-year-old engineer is admitted with a first severe major depressive episode after a divorce. On the ward she is tearful, clings to nurses, cannot make decisions, and asks the team to call her sister before choosing a meal. Her sister reports that until 3 months ago she ran a team, lived alone happily and was decisive.",
    "q": "What is the best formulation of her dependent behavior?",
    "choices": [
      "Dependent personality disorder (premorbid)",
      "Dependent personality disorder",
      "Borderline personality disorder",
      "Part of the depressive episode; do not diagnose a personality disorder",
      "Other specified personality disorder"
    ],
    "answer": 3,
    "why": "A personality disorder needs features from early adulthood that are **typical of long-term functioning**, not only during an episode. Her history shows a different, independent baseline.",
    "whyNot": [
      "“Premorbid” applies to Cluster A disorders preceding schizophrenia.",
      "Dependency confined to a depressive episode does not meet the general criteria.",
      "There is no long-standing pattern of instability.",
      "Correct.",
      "General criteria for a personality disorder are not met."
    ]
  },
  {
    "id": "v18-03",
    "tag": "Antisocial",
    "stem": "A 24-year-old man is seen in jail after an armed robbery. He has been arrested five times, has a long history of lying and using fake names, quits jobs without notice, and says the victims “should have known better.” His school records show fighting, cruelty to animals and repeated theft from age 11.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Antisocial personality disorder",
      "Conduct disorder",
      "Adult antisocial behavior",
      "Narcissistic personality disorder",
      "Intermittent explosive disorder"
    ],
    "answer": 0,
    "why": "Three or more A criteria since 15 (unlawful, deceitful, irresponsible, remorseless), age **≥18**, **conduct disorder before 15**: **antisocial PD (F60.2)**.",
    "whyNot": [
      "Correct.",
      "At 24, conduct disorder is given only if antisocial PD criteria are not met.",
      "He has the personality features and a conduct disorder history.",
      "Narcissistic PD lacks aggression, deceit and conduct disorder history.",
      "His behavior is planned, deceitful and remorseless, not just impulsive outbursts."
    ]
  },
  {
    "id": "v18-04",
    "tag": "Antisocial and SUD",
    "stem": "A 31-year-old man with opioid use disorder has stolen from his family and sold drugs for 4 years to support his habit. He describes deep shame about this. Before he started using opioids at 26 he worked steadily, had no legal problems, and his teachers remember him as a well-behaved child.",
    "q": "What is the correct diagnosis?",
    "choices": [
      "Adult antisocial behavior and antisocial personality disorder",
      "Antisocial personality disorder and opioid use disorder",
      "Antisocial personality disorder only",
      "Conduct disorder",
      "Opioid use disorder without antisocial personality disorder"
    ],
    "answer": 4,
    "why": "Antisocial acts done to **sustain substance use**, beginning in adulthood without **conduct disorder before 15**, do not establish antisocial PD.",
    "whyNot": [
      "Antisocial PD is excluded without childhood onset; his acts are tied to the substance use disorder.",
      "Both are diagnosed only when antisocial signs began in childhood and continued.",
      "Criterion C is not met.",
      "He is an adult with no childhood conduct problems.",
      "Correct."
    ]
  },
  {
    "id": "v18-05",
    "tag": "Antisocial in mania",
    "stem": "A 29-year-old woman with bipolar I disorder has been arrested twice for shoplifting and once for assault, all during manic episodes. Between episodes she works as a teacher, keeps her finances in order and feels guilty about past behavior. She had no behavioral problems as a child.",
    "q": "How should the antisocial behavior be classified?",
    "choices": [
      "Adult antisocial behavior",
      "Antisocial personality disorder",
      "As part of the manic episodes; antisocial personality disorder is not diagnosed",
      "Borderline personality disorder",
      "Kleptomania"
    ],
    "answer": 2,
    "why": "Antisocial behavior occurring **exclusively during bipolar disorder** is excluded (Criterion D), and she has no conduct disorder before 15.",
    "whyNot": [
      "The behavior is explained by mania.",
      "Criteria C and D are not met.",
      "Correct.",
      "There is no pervasive instability between episodes.",
      "Stealing during mania is excluded from kleptomania as well."
    ]
  },
  {
    "id": "v18-06",
    "tag": "Schizoid vs avoidant",
    "stem": "A 32-year-old man lives alone and has no friends. He says he would love a partner and feels painfully lonely, but he is sure people would find him boring and laugh at him. He turned down a promotion because it involved presentations and only talks to coworkers who have been reliably kind to him for months.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Schizoid personality disorder",
      "Avoidant personality disorder",
      "Schizotypal personality disorder",
      "Paranoid personality disorder",
      "Dependent personality disorder"
    ],
    "answer": 1,
    "why": "He **wants** relationships and feels lonely but avoids them from fear of **ridicule and rejection**, with inferiority and avoidance of occupational contact: **avoidant PD (F60.6)**.",
    "whyNot": [
      "Schizoid PD lacks the desire for relationships and is indifferent.",
      "Correct.",
      "There are no odd beliefs or perceptual distortions.",
      "He fears humiliation, not malice.",
      "He avoids rather than clings to others."
    ]
  },
  {
    "id": "v18-07",
    "tag": "Schizotypal",
    "stem": "A 30-year-old man is brought by his mother. He believes he can influence traffic lights by concentrating and that song lyrics on the radio carry special messages for him, though he admits this may be coincidence. He dresses in layered mismatched clothes, speaks in vague, overelaborate sentences, and has no friends. At family gatherings he grows more tense and suspicious. He has never had hallucinations or fixed delusions.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Schizoid personality disorder",
      "Schizophrenia",
      "Delusional disorder",
      "Schizotypal personality disorder",
      "Autism spectrum disorder"
    ],
    "answer": 3,
    "why": "Magical thinking, **ideas of reference** held without conviction, odd speech and appearance, no friends and social anxiety that **does not lessen with familiarity**: **schizotypal PD (F21)**.",
    "whyNot": [
      "Schizoid PD lacks cognitive-perceptual distortions and eccentricity.",
      "No persistent delusions or hallucinations.",
      "His ideas are not held with delusional conviction.",
      "Correct.",
      "Autism would show early social-communication deficits with stereotyped interests."
    ]
  },
  {
    "id": "v18-08",
    "tag": "Premorbid",
    "stem": "A 23-year-old man has just developed schizophrenia. Since early adolescence he has been a loner with no wish for friends, no interest in dating, and little emotional expression, but no odd beliefs. These traits continue during periods when his psychosis is in remission.",
    "q": "How should his long-standing traits be recorded?",
    "choices": [
      "Schizoid personality disorder (premorbid)",
      "No additional diagnosis; schizophrenia explains everything",
      "Schizotypal personality disorder",
      "Avoidant personality disorder",
      "Negative symptoms of schizophrenia only"
    ],
    "answer": 0,
    "why": "Schizoid PD criteria were met **before** psychosis and persist in remission: record it with “**(premorbid)**.”",
    "whyNot": [
      "Correct.",
      "The traits predate and persist beyond the psychosis.",
      "He has no cognitive-perceptual distortions.",
      "He has no wish for relationships.",
      "The traits began long before schizophrenia and persist in remission."
    ]
  },
  {
    "id": "v18-09",
    "tag": "Paranoid and culture",
    "stem": "A 38-year-old refugee is referred for “paranoia.” He refuses to give his address to the clinic, asks why staff need his information, and is wary of police. He fled persecution, has had his asylum documents misused by a previous landlord, and faces open hostility in his neighborhood. With his own community he is warm and trusting.",
    "q": "What is the best interpretation?",
    "choices": [
      "PTSD with paranoid features",
      "Paranoid personality disorder",
      "Delusional disorder, persecutory type",
      "Schizotypal personality disorder",
      "Understandable, context-driven mistrust that is not a personality disorder"
    ],
    "answer": 4,
    "why": "Guardedness in response to **real persecution and discrimination**, with trusting relationships elsewhere, is not pervasive paranoid PD. Avoid a cycle of mutual mistrust; use informants familiar with his culture.",
    "whyNot": [
      "PTSD would need intrusions, avoidance and other symptoms; screen for it, but this picture is understandable mistrust.",
      "His mistrust is not pervasive and has a realistic basis.",
      "There are no fixed false beliefs.",
      "There is no oddness or magical thinking.",
      "Correct."
    ]
  },
  {
    "id": "v18-10",
    "tag": "Paranoid",
    "stem": "A 50-year-old man has had five lawsuits against neighbors and former employers over perceived slights. He reads insults into compliments, never forgives, will not tell his doctor about his medical history because “it’s nobody’s business,” and constantly checks his wife’s phone though she has never been unfaithful. He has no hallucinations and no fixed delusions.",
    "q": "Which diagnosis fits best?",
    "choices": [
      "Narcissistic personality disorder",
      "Delusional disorder, jealous type",
      "Paranoid personality disorder",
      "Obsessive-compulsive personality disorder",
      "Antisocial personality disorder"
    ],
    "answer": 2,
    "why": "Grudges, hidden meanings, reluctance to confide, litigiousness and unjustified jealousy, **short of delusion**: **paranoid PD (F60.0)**.",
    "whyNot": [
      "Narcissistic suspiciousness stems from fear of flaws being exposed; there is no grandiosity.",
      "His jealousy is suspicion without fixed delusional conviction, and his distrust is broad.",
      "Correct.",
      "OCPD involves perfectionism and control, not suspicion of malice.",
      "His actions aim at revenge, not gain, and there is no conduct disorder history."
    ]
  },
  {
    "id": "v18-11",
    "tag": "Histrionic",
    "stem": "A 34-year-old woman arrives at her first clinic visit in a glamorous evening dress, hugs the receptionist, and refers to the psychiatrist by his first name as “my wonderful new doctor.” She describes her new boyfriend as “absolutely perfect” but cannot say why. She cries loudly when describing a minor argument, then laughs a moment later, and adopts opinions from whoever spoke last.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Borderline personality disorder",
      "Histrionic personality disorder",
      "Narcissistic personality disorder",
      "Bipolar I disorder, current episode manic",
      "Dependent personality disorder"
    ],
    "answer": 1,
    "why": "Attention seeking through appearance, overestimated intimacy, **impressionistic speech**, shallow shifting emotion, theatricality and suggestibility: **histrionic PD (F60.4)**.",
    "whyNot": [
      "No self-harm, emptiness or rage.",
      "Correct.",
      "She seeks attention, not admiration for superiority.",
      "No episode of elevated mood with decreased sleep.",
      "She is flamboyant, not docile and submissive."
    ]
  },
  {
    "id": "v18-12",
    "tag": "Narcissistic",
    "stem": "A 45-year-old executive is referred after a demotion. He says he was “too brilliant for small minds,” expects his assistants to work weekends without notice, and was unmoved when a colleague’s child was hospitalized. Since the demotion he has been withdrawn, ashamed and sleeping poorly, and he admits he has thought of ending his life because “failure is unbearable.”",
    "q": "Which statement best describes his risk?",
    "choices": [
      "Suicidal statements are manipulative gestures in narcissistic PD",
      "People with narcissistic PD do not attempt suicide",
      "His risk is low because he is high-functioning",
      "Suicide attempts in narcissistic PD tend to be less impulsive and more lethal, so his ideation needs careful assessment",
      "His risk is only related to substance use"
    ],
    "answer": 3,
    "why": "After failure or exposure of imperfection, people with narcissistic PD may become suicidal; attempts tend to be **less impulsive** and **more lethal**.",
    "whyNot": [
      "Dismissing his ideation is dangerous.",
      "Suicidal ideation and attempts occur.",
      "Functioning does not protect against high-lethality attempts.",
      "Correct.",
      "There is no information about substance use."
    ]
  },
  {
    "id": "v18-13",
    "tag": "Histrionic vs narcissistic",
    "stem": "Two patients both crave attention. Patient A tells everyone about his friendship with a famous surgeon and becomes cold when not praised. Patient B faints dramatically at a party when conversation turns away from her, and tells the nurse she is “so fragile and needs looking after.”",
    "q": "Which pairing is most likely?",
    "choices": [
      "A narcissistic, B histrionic",
      "A histrionic, B narcissistic",
      "Both histrionic",
      "Both narcissistic",
      "A antisocial, B borderline"
    ],
    "answer": 0,
    "why": "Narcissistic PD wants **admiration** and stresses friends’ **VIP** status. Histrionic PD accepts **any** attention, even appearing **fragile or dependent**.",
    "whyNot": [
      "Correct.",
      "Reversed.",
      "Patient A seeks admiration of superiority.",
      "Patient B uses fragility to gain attention.",
      "Neither shows conduct problems or self-destructive instability."
    ]
  },
  {
    "id": "v18-14",
    "tag": "Dependent vs borderline",
    "stem": "When her husband of 20 years died, a 52-year-old woman moved in with a man she met online within 3 weeks, saying she “cannot manage alone.” She has always let her husband choose her clothes, friends and job, agrees with others to avoid conflict, and fears being left to take care of herself. She has never harmed herself and her relationships have been long and stable.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Separation anxiety disorder",
      "Borderline personality disorder",
      "Prolonged grief disorder",
      "Histrionic personality disorder",
      "Dependent personality disorder"
    ],
    "answer": 4,
    "why": "Others take responsibility, difficulty disagreeing, fear of being left alone, and **urgently seeking a replacement** relationship, with stable relationships and no self-harm: **dependent PD (F60.7)**.",
    "whyNot": [
      "Her fear is of being unable to care for herself, not of harm coming to an attachment figure.",
      "Borderline reacts with rage and emptiness and has unstable, intense relationships.",
      "Her response is to replace the caregiver, not persistent longing or preoccupation with the deceased.",
      "She is not flamboyant or attention seeking.",
      "Correct."
    ]
  },
  {
    "id": "v18-15",
    "tag": "Dependent and abuse",
    "stem": "A 30-year-old woman stays with a husband who hits her and never disagrees with him. She has no income, her passport is held by him, and the nearest shelter is 300 km away. Before the marriage she lived independently and made her own decisions.",
    "q": "Which statement is correct?",
    "choices": [
      "She has borderline personality disorder",
      "She has dependent personality disorder",
      "Her behavior reflects realistic fear and lack of options, not dependent personality disorder",
      "She has avoidant personality disorder",
      "She has other specified personality disorder"
    ],
    "answer": 2,
    "why": "Realistic fear of **retribution** is excluded from Criterion 3, and tolerating abuse counts only when **other options are clearly available**. She also had an independent baseline.",
    "whyNot": [
      "No instability, self-harm or identity disturbance.",
      "The exclusions apply and there is no long-standing pattern.",
      "Correct.",
      "No pervasive social inhibition.",
      "General criteria for a personality disorder are not met."
    ]
  },
  {
    "id": "v18-16",
    "tag": "OCPD vs OCD",
    "stem": "A 37-year-old accountant spends 3 hours a day washing because of intrusive images of contamination that he recognizes as excessive. He also has been rigid, rule-bound and perfectionistic since adolescence: he rewrites reports until deadlines pass, will not delegate, works every weekend, and hoards money despite a high income.",
    "q": "What diagnosis or diagnoses should be made?",
    "choices": [
      "Obsessive-compulsive disorder only",
      "Obsessive-compulsive disorder and obsessive-compulsive personality disorder",
      "Obsessive-compulsive personality disorder only",
      "Hoarding disorder",
      "Generalized anxiety disorder"
    ],
    "answer": 1,
    "why": "He has **true obsessions and compulsions** (OCD) **and** a long-standing pattern meeting OCPD criteria. When both are met, **both are recorded**.",
    "whyNot": [
      "His lifelong perfectionism, rigidity, workaholism and miserliness meet OCPD criteria.",
      "Correct.",
      "His washing is a true compulsion driven by obsessions.",
      "He hoards money, not possessions; there is no clutter.",
      "His worries are specific obsessions with compulsions."
    ]
  },
  {
    "id": "v18-17",
    "tag": "OCPD",
    "stem": "A 55-year-old manager’s wife complains that he insists the dishwasher be loaded “the right way,” lectures their grandchildren for coloring outside the lines, refuses to throw away broken appliances, and has postponed their retirement trip for 6 years because work comes first. He is surprised by her complaints and thinks his way is simply correct.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Narcissistic personality disorder",
      "Obsessive-compulsive disorder",
      "Autism spectrum disorder",
      "Obsessive-compulsive personality disorder",
      "Hoarding disorder"
    ],
    "answer": 3,
    "why": "Rigid insistence on one way, turning play into work, inability to discard, devotion to work, and **ego-syntonic** perfectionism: **OCPD (F60.5)**.",
    "whyNot": [
      "He is rigid and controlling, not grandiose or seeking admiration.",
      "No intrusive obsessions or compulsions.",
      "No lifelong social-communication deficits.",
      "Correct.",
      "Keeping a few broken appliances is not extreme hoarding."
    ]
  },
  {
    "id": "v18-18",
    "tag": "Personality change",
    "stem": "A 58-year-old previously gentle school principal develops irritability, rage outbursts out of proportion to minor frustrations, and crude sexual comments over 9 months. His wife says he is “not himself.” MRI shows a large frontal meningioma. He is alert and oriented.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "Personality change due to another medical condition (combined type), coded after the meningioma",
      "Antisocial personality disorder",
      "Intermittent explosive disorder",
      "Bipolar I disorder",
      "Delirium"
    ],
    "answer": 0,
    "why": "A **change from previous personality** caused directly by a frontal tumor, with aggressive and disinhibited features (more than one predominates → **combined type**). Code the meningioma first, then **F07.0**.",
    "whyNot": [
      "Correct.",
      "Personality disorders begin by early adulthood; this is a late change with a medical cause.",
      "The outbursts are caused by a medical condition.",
      "No mood episodes are described.",
      "He is alert and oriented."
    ]
  },
  {
    "id": "v18-19",
    "tag": "Change vs reaction",
    "stem": "After a severe spinal cord injury, a 42-year-old man becomes withdrawn and relies on his wife for most decisions. Brain imaging is normal. He is sad and frustrated about his limitations.",
    "q": "What is correct?",
    "choices": [
      "Schizoid personality disorder",
      "Personality change due to another medical condition, apathetic type",
      "Dependent personality disorder",
      "Personality change due to another medical condition, other type",
      "This is a psychological adjustment to disability, not personality change due to another medical condition"
    ],
    "answer": 4,
    "why": "F07.0 needs a **direct pathophysiological** cause. Dependence arising from needing help after injury is a **behavioral or psychological adjustment**; consider adjustment disorder or depression.",
    "whyNot": [
      "There is no lifelong detachment.",
      "There is no brain process directly causing the change.",
      "There is no lifelong pattern.",
      "There is no direct physiological mechanism.",
      "Correct."
    ]
  },
  {
    "id": "v18-20",
    "tag": "Adolescent",
    "stem": "A 16-year-old girl has had 18 months of pervasive self-harm, rages when friends do not reply quickly, chaotic intense friendships, chronic emptiness, impulsive drinking and binge eating, and an unstable sense of who she is, across home, school and peers.",
    "q": "Can borderline personality disorder be diagnosed?",
    "choices": [
      "No, only conduct disorder can be diagnosed before 18",
      "No, personality disorders cannot be diagnosed before 18",
      "Yes, because features have been present at least 1 year and are pervasive",
      "Only after age 21",
      "Only if a parent has borderline personality disorder"
    ],
    "answer": 2,
    "why": "Under 18, a personality disorder may be diagnosed when traits are pervasive, persistent, not limited to a developmental stage, and present **at least 1 year**. Only **antisocial PD** is barred before 18.",
    "whyNot": [
      "Borderline PD can be diagnosed in adolescents; symptoms can meet criteria at 12–13.",
      "Only antisocial PD is barred before 18.",
      "Correct.",
      "There is no age 21 rule.",
      "Family history is a risk factor, not a requirement."
    ]
  },
  {
    "id": "v18-21",
    "tag": "Identity problem",
    "stem": "A 19-year-old university student has changed majors three times this year, is unsure about her sexual orientation, drinks heavily at parties and feels anxious about her future. She has close, stable friendships, no self-harm, and was settled and happy through high school.",
    "q": "What is the best formulation?",
    "choices": [
      "Borderline personality disorder",
      "An identity problem of young adulthood, not a personality disorder",
      "Histrionic personality disorder",
      "Dependent personality disorder",
      "Other specified personality disorder"
    ],
    "answer": 1,
    "why": "Developmental **identity concerns**, especially with substance use, can transiently resemble borderline PD; stable relationships and a settled history argue against a personality disorder.",
    "whyNot": [
      "No pervasive instability, self-harm or abandonment fears.",
      "Correct.",
      "No attention seeking or theatricality.",
      "She makes her own choices.",
      "General criteria are not met."
    ]
  },
  {
    "id": "v18-22",
    "tag": "Mixed",
    "stem": "A 36-year-old man meets the general criteria for a personality disorder. He has some suspiciousness, some grandiosity and entitlement, and some impulsivity, but he meets full criteria for no specific personality disorder. His clinician wants to record the reason.",
    "q": "Which diagnosis applies?",
    "choices": [
      "No diagnosis can be made",
      "Unspecified personality disorder",
      "Paranoid, narcissistic and antisocial personality disorders",
      "Other specified personality disorder (mixed personality features)",
      "Personality change due to another medical condition"
    ],
    "answer": 3,
    "why": "When the clinician states the reason, use **F60.89 other specified personality disorder**, e.g., “mixed personality features.”",
    "whyNot": [
      "A residual category exists for this situation.",
      "Unspecified (F60.9) is used when the reason is not stated.",
      "None is fully met.",
      "Correct.",
      "There is no change from baseline or medical cause."
    ]
  },
  {
    "id": "v18-23",
    "tag": "Gender bias",
    "stem": "A clinician tends to diagnose borderline personality disorder in women and antisocial personality disorder in men who present with anger, impulsivity and unstable relationships.",
    "q": "What does DSM-5-TR say about this?",
    "choices": [
      "Clinicians should avoid over- or underdiagnosis based on gender stereotypes; borderline PD shows no sex difference in community samples",
      "This reflects true sex ratios and is appropriate",
      "Borderline PD can only be diagnosed in women",
      "Antisocial PD cannot be diagnosed in women",
      "Sex differences in all personality disorders are fully explained by biology"
    ],
    "answer": 0,
    "why": "Borderline PD is more common in women **clinically**, but community samples show **no difference**, possibly reflecting help seeking. Antisocial PD may be **underdiagnosed in women**.",
    "whyNot": [
      "Correct.",
      "The manual warns against stereotype-driven diagnosis.",
      "It occurs equally in community samples of men and women.",
      "Antisocial PD occurs in women, perhaps underdiagnosed.",
      "The manual points to help seeking, stereotypes and measurement, not biology alone."
    ]
  },
  {
    "id": "v18-24",
    "tag": "Schizotypal vs borderline",
    "stem": "A 25-year-old woman reports hearing her name whispered and feeling that people on the bus are watching her, but only during the days after her partner threatened to leave. These experiences fade within hours when he reassures her. She has a history of self-harm, intense relationships and chronic emptiness.",
    "q": "How are these perceptual experiences best understood?",
    "choices": [
      "Delusional disorder",
      "Schizotypal personality disorder",
      "Brief psychotic disorder",
      "Schizophrenia",
      "Transient, stress-related psychotic-like symptoms of borderline personality disorder"
    ],
    "answer": 4,
    "why": "Borderline Criterion 9: **transient**, stress-related paranoid ideation, often after perceived **abandonment**, remitting when nurturance returns.",
    "whyNot": [
      "No fixed delusion.",
      "Schizotypal symptoms are enduring and less tied to affect.",
      "Brief psychotic disorder needs at least 1 day of frank psychosis; hers last hours and are part of borderline PD.",
      "No persistent psychosis.",
      "Correct."
    ]
  },
  {
    "id": "v18-25",
    "tag": "Avoidant vs social anxiety",
    "stem": "A 27-year-old man has lifelong fear of being criticized in any social setting, sees himself as inferior and unappealing, avoids dating and new activities, and has declined jobs requiring teamwork. He also has marked anxiety when speaking or eating in front of others.",
    "q": "Which statement is correct?",
    "choices": [
      "Only avoidant personality disorder can be diagnosed",
      "Only social anxiety disorder can be diagnosed",
      "Both avoidant personality disorder and social anxiety disorder can be diagnosed",
      "They are the same disorder",
      "Schizoid personality disorder is more likely"
    ],
    "answer": 2,
    "why": "The two overlap heavily but are kept as separate categories; avoidant PD adds an entrenched **negative self-concept**. When both are met, **both are diagnosed**.",
    "whyNot": [
      "His performance anxiety meets social anxiety disorder.",
      "His pervasive inferiority and avoidance meet avoidant PD.",
      "Correct.",
      "DSM-5-TR retains two categories.",
      "He wants relationships."
    ]
  }
]);
