/* Chapter 5 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch05", "vignettes", [
  {
    "id": "v5-01",
    "tag": "Panic disorder vs agoraphobia",
    "stem": "A 29-year-old teacher reports six attacks in 3 months of sudden pounding heart, sweating, trembling, breathlessness and fear she is dying, each peaking within 10 minutes. The first woke her from sleep; others came while grading papers at home. Emergency workups, including ECG, troponin, TSH and urine toxicology, were normal. For 2 months she has worried daily about another attack and stopped running. She still takes the bus, shops and goes out alone without difficulty.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Panic disorder and agoraphobia",
      "Panic disorder",
      "Generalized anxiety disorder with panic attacks",
      "Illness anxiety disorder",
      "Other specified anxiety disorder, limited-symptom attacks"
    ],
    "answer": 1,
    "why": "**Recurrent unexpected** full-symptom attacks (one nocturnal), followed by **more than a month** of worry and a maladaptive behavior change (stopping exercise), with medical and substance causes excluded: **F41.0 panic disorder**.",
    "whyNot": [
      "Agoraphobia needs fear or avoidance of **two or more** agoraphobic situations; she rides the bus, shops and goes out alone.",
      "Correct.",
      "GAD is worry about many everyday matters; her worry is about the attacks, and her attacks are unexpected, not triggered by worry.",
      "Illness anxiety is preoccupation with having an illness without panic attacks; her concern follows recurrent full attacks.",
      "Her attacks have four or more symptoms, so they are full panic attacks, not limited-symptom attacks."
    ],
    "discuss": [
      "How would you explain to her why her tests were normal?",
      "What would make you reconsider a medical cause?"
    ]
  },
  {
    "id": "v5-02",
    "tag": "Agoraphobia without panic",
    "stem": "A 71-year-old widow has stopped going to the supermarket, to church and to her granddaughter’s school events over the past year. In each place she fears she will fall and be unable to get up or get help. She goes out only when her son drives her and stays near him. Her gait, vision and bone density are normal for her age; she has fallen once, 3 years ago, without injury. She has never had a panic attack.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Normal age-related caution",
      "Specific phobia, other type (fear of falling)",
      "Panic disorder",
      "Agoraphobia",
      "Major depressive disorder"
    ],
    "answer": 3,
    "why": "Fear in **two or more** agoraphobic situations (enclosed places, crowds, being out alone) because **help might not be available** if an incapacitating symptom (**falling**, the classic older-adult example) occurs, requiring a **companion**, out of proportion and lasting about a year: **F40.00 agoraphobia**, which does not require panic attacks.",
    "whyNot": [
      "Her risk is normal and her avoidance is broad and impairing; older adults tend to underestimate how disproportionate their fears are.",
      "Fear of falling here is the agoraphobic cognition across several situations, which is exactly what agoraphobia Criterion B describes.",
      "No panic attacks at all.",
      "Correct.",
      "Nothing suggests depressed mood or anhedonia; she avoids places out of fear, not apathy."
    ],
    "discuss": [
      "How would you judge whether an older adult’s fear of falling is out of proportion?"
    ]
  },
  {
    "id": "v5-03",
    "tag": "Situational phobia vs agoraphobia",
    "stem": "A 38-year-old sales manager has refused promotions that require flying for 6 years. He also takes the stairs to his 9th-floor office. He believes the plane might crash and the elevator cable might snap. He has no difficulty with trains, buses, shopping malls, crowds or being out alone, and has never had an unexpected panic attack.",
    "q": "What is the diagnosis?",
    "choices": [
      "Specific phobia, situational type (F40.248)",
      "Agoraphobia (F40.00)",
      "Panic disorder with agoraphobia",
      "Specific phobia, natural environment type (F40.228)",
      "Other specified anxiety disorder"
    ],
    "answer": 0,
    "why": "Airplanes and elevators overlap with only **one** agoraphobic situation, and he fears **direct harm** (crash, falling), not being trapped without help. The manual’s own example of this pairing is **specific phobia, situational**.",
    "whyNot": [
      "Correct.",
      "Agoraphobia needs two or more agoraphobic situations and a fear that escape or help is unavailable if symptoms strike.",
      "There are no panic attacks, and no agoraphobia.",
      "Natural environment covers heights, storms and water; airplanes and elevators are situational. (If he also feared heights from the stairwell, that would be a second code.)",
      "Full criteria for specific phobia are met."
    ]
  },
  {
    "id": "v5-04",
    "tag": "Blood-injection-injury phobia",
    "stem": "A 19-year-old college student needs a blood test for a sports physical. She says she fainted the last three times she had blood drawn and once at the sight of a friend’s cut. She has avoided her flu shot and a recommended dental filling for years. As the needle approaches, her heart rate rises to 110 and then falls to 48, her blood pressure drops, and she slumps in the chair.",
    "q": "Which statement about her condition is correct?",
    "choices": [
      "Only a single code F40.23x is used, whatever the stimuli",
      "Fainting excludes a phobia and suggests a cardiac cause",
      "This response is typical of all specific phobia types",
      "Blood-injection-injury phobia is about twice as common in women as in men",
      "Code each feared stimulus, for example F40.230 (blood) and F40.231 (injections)"
    ],
    "answer": 4,
    "why": "The **vasovagal** pattern (brief rise, then fall in heart rate and blood pressure) is characteristic of **blood-injection-injury** phobia. Each stimulus type gets its own code: blood **F40.230**, injections and transfusions **F40.231**, other medical care (dental) **F40.232**.",
    "whyNot": [
      "F40.23x is a placeholder: the fifth character names the stimulus, and every one present is coded.",
      "Vasovagal fainting is the expected physiology of BII phobia, though a first syncope always deserves a medical history.",
      "Animal, natural environment and situational phobias produce **sympathetic** arousal, not fainting.",
      "BII phobia affects women and men **nearly equally**, unlike the other types (about 2:1).",
      "Correct."
    ],
    "then": {
      "q": "Which technique is specifically added to exposure therapy for this phobia?",
      "choices": [
        "Diaphragmatic breathing to slow the heart",
        "Applied tension",
        "A premedication benzodiazepine before each session",
        "Propranolol before exposure",
        "Thought stopping"
      ],
      "answer": 1,
      "why": "**Applied tension** (tensing large muscles to raise blood pressure) counters the vasovagal drop. This is treatment knowledge, not a DSM criterion.",
      "whyNot": [
        "Slowing the heart would worsen the vasovagal drop.",
        "Correct.",
        "Benzodiazepines can lower blood pressure and may interfere with exposure learning.",
        "Beta-blockade lowers heart rate further, the opposite of what she needs.",
        "Thought stopping is not an evidence-based treatment for phobia."
      ]
    }
  },
  {
    "id": "v5-05",
    "tag": "Social anxiety vs avoidant PD",
    "stem": "A 24-year-old graduate student avoids seminars, parties and eating in the cafeteria because she fears she will blush and others will think she is incompetent. Symptoms began at 14 after she froze during a school recital. She has two close friends and a supportive boyfriend, enjoys her lab work, and does not see herself as inferior overall: “I just can’t stand being watched.”",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Social anxiety disorder, performance only",
      "Avoidant personality disorder",
      "Social anxiety disorder",
      "Agoraphobia",
      "Autism spectrum disorder"
    ],
    "answer": 2,
    "why": "Fear of **scrutiny** and **negative evaluation** across interaction, observation and performance situations, with **blushing**, adolescent onset after a humiliating event, avoidance and impairment: **F40.10 social anxiety disorder**.",
    "whyNot": [
      "She also fears eating in front of others and parties: not restricted to performance.",
      "Avoidant personality disorder has broader avoidance, a pervasively negative self-concept and a lifelong sense of not fitting in; she has close relationships and a positive self-view outside scrutiny. The two can coexist.",
      "Correct.",
      "She fears being judged, not being trapped without help.",
      "She has adequate social communication and relationships."
    ]
  },
  {
    "id": "v5-06",
    "tag": "Social anxiety in a child",
    "stem": "An 8-year-old boy is described by his parents as chatty and confident with adult relatives and his teachers. At recess and birthday parties he stands alone, cries when classmates ask him to join games, and has begged to skip a classmate’s party. He worries that the other children will laugh at him. This has been going on for 9 months.",
    "q": "Which feature is required for social anxiety disorder in a child and is present here?",
    "choices": [
      "Recognition that the fear is excessive",
      "The anxiety occurs in peer settings, not only with adults",
      "At least 12 months of symptoms",
      "Panic attacks in social situations",
      "Onset after age 10"
    ],
    "answer": 1,
    "why": "In children, social anxiety must occur in **peer settings** and not only during interactions with adults. His fear is specifically about classmates.",
    "whyNot": [
      "Recognizing the fear as excessive is not required, for children or (since DSM-5) adults.",
      "Correct.",
      "The guide is typically 6 months.",
      "Panic attacks are not required; in children fear may show as crying, tantrums, freezing or clinging.",
      "There is no minimum age; median onset is 13, but earlier onset occurs."
    ]
  },
  {
    "id": "v5-07",
    "tag": "Performance only",
    "stem": "A 33-year-old concert cellist has severe tremor, palpitations and dread before solo performances, and recently canceled a festival appearance. She is relaxed at rehearsals with the orchestra, at dinner parties and when meeting new people. This has worsened over 2 years.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Panic disorder",
      "Social anxiety disorder (no specifier)",
      "Specific phobia, situational",
      "Social anxiety disorder, performance only",
      "Generalized anxiety disorder"
    ],
    "answer": 3,
    "why": "Fear restricted to **speaking or performing in public**, impairing her profession, without fear of nonperformance situations: **F40.10 social anxiety disorder, performance only**.",
    "whyNot": [
      "Her symptoms are cued by performances, not unexpected.",
      "The specifier applies because she does not fear other social situations.",
      "The feared situation is defined by evaluation, so it belongs to social anxiety, not specific phobia.",
      "Correct.",
      "Her anxiety is focused on one kind of situation, not many everyday worries."
    ],
    "then": {
      "q": "Which medication strategy is commonly used (off-label) for this specifier but not for generalized social anxiety?",
      "choices": [
        "Daily paroxetine",
        "Daily buspirone",
        "Propranolol taken before performances",
        "Daily pregabalin",
        "Daily quetiapine"
      ],
      "answer": 2,
      "why": "A **beta-blocker** taken before the performance reduces tremor and palpitations; beta-blockers have not been shown to help the generalized form. (Treatment knowledge, outside the DSM.)",
      "whyNot": [
        "SSRIs are used for the generalized form; for occasional performances, as-needed treatment is more practical.",
        "Buspirone has no good evidence in social anxiety.",
        "Correct.",
        "Pregabalin is a second-line option for generalized social anxiety.",
        "Antipsychotics are not used for performance anxiety."
      ]
    }
  },
  {
    "id": "v5-08",
    "tag": "Separation anxiety in an adult",
    "stem": "A 36-year-old engineer comes in at his wife’s urging. Since their son was born 14 months ago he has called her up to 15 times a day, refuses business travel, sleeps poorly when she visits her parents, and has recurrent nightmares that she and the baby die in a fire. He has stomach cramps when she leaves for work. He had no such problems as a child and worries about little else.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Separation anxiety disorder",
      "Generalized anxiety disorder",
      "Obsessive-compulsive disorder",
      "Dependent personality disorder",
      "Adjustment disorder with anxiety"
    ],
    "answer": 0,
    "why": "At least five separation symptoms (worry about harm to attachment figures, reluctance to be away, sleep difficulty, nightmares, physical complaints) lasting more than 6 months in an adult, triggered by becoming a parent: **F93.0 separation anxiety disorder**. A childhood history is **not** required.",
    "whyNot": [
      "Correct.",
      "His worries are confined to separation and his family’s safety; in GAD, worry spans many areas.",
      "There are no intrusive unwanted obsessions or rituals; his concern is about separation.",
      "Dependent personality disorder is lifelong and involves indiscriminate reliance on others; this began 14 months ago and centers on specific attachment figures.",
      "Adjustment disorder is used only when no other disorder’s criteria are met, and symptoms of over a year exceed its course."
    ]
  },
  {
    "id": "v5-09",
    "tag": "School refusal",
    "stem": "A 13-year-old has missed 20 days of school this term. On school mornings he says he has a headache. He is not at home on those days; he spends them at a friend’s house playing video games and has been caught shoplifting twice. He is relaxed with his parents and does not mind when they travel. He says school is “boring.”",
    "q": "Which diagnosis best accounts for the school avoidance?",
    "choices": [
      "Selective mutism",
      "Separation anxiety disorder",
      "Social anxiety disorder",
      "Specific phobia, situational",
      "Conduct disorder (truancy)"
    ],
    "answer": 4,
    "why": "In separation anxiety the child stays **at home** near attachment figures; in **truancy** the child stays **away from** home, without anxiety about separation. With other antisocial behavior, conduct disorder is the likely explanation (if its full criteria are met).",
    "whyNot": [
      "He speaks normally.",
      "He is not anxious about separation and is not at home.",
      "There is no fear of evaluation described.",
      "No circumscribed feared object or situation.",
      "Correct."
    ]
  },
  {
    "id": "v5-10",
    "tag": "Selective mutism vs silent period",
    "stem": "A 5-year-old girl whose family moved from Vietnam 3 months ago has not spoken at her English-language kindergarten. At home she speaks Vietnamese fluently with her parents and cousins. Her teacher notes she follows simple instructions only when demonstrated and plays happily with other children without words.",
    "q": "What is the most appropriate conclusion?",
    "choices": [
      "Social anxiety disorder",
      "Selective mutism",
      "She does not meet criteria for selective mutism; this is consistent with a normal silent period",
      "Language disorder",
      "Autism spectrum disorder"
    ],
    "answer": 2,
    "why": "Selective mutism is excluded when failure to speak is due to **lack of knowledge of, or comfort with, the language** (Criterion D). Young second-language learners often have a **silent period**. Consider selective mutism only if, with adequate comprehension, she refuses to speak **both** languages in several unfamiliar settings for a prolonged time.",
    "whyNot": [
      "She plays happily with peers and shows no fear of evaluation.",
      "Criterion D excludes this presentation.",
      "Correct.",
      "Her home language is fluent, so there is no language disorder.",
      "She plays reciprocally and speaks fluently at home."
    ]
  },
  {
    "id": "v5-11",
    "tag": "Selective mutism",
    "stem": "A 7-year-old girl has not spoken a word to her teacher or classmates since starting school 2 years ago, though she speaks English fluently at home with her parents and sister. She does not speak to her grandparents either. She points and writes notes, and joined the school play in a nonspeaking part. She freezes and looks away when asked a question in class and avoids eating with classmates for fear they will look at her.",
    "q": "What is the most complete diagnosis?",
    "choices": [
      "Selective mutism only",
      "Selective mutism and social anxiety disorder",
      "Social anxiety disorder only",
      "Autism spectrum disorder",
      "Social (pragmatic) communication disorder"
    ],
    "answer": 1,
    "why": "Consistent failure to speak where speech is expected, despite fluent speech at home, far beyond a month: **F94.0 selective mutism**. Her fear of being watched while eating, with avoidance, extends beyond speech: **social anxiety disorder** too. **Both** diagnoses may be given, and they commonly co-occur.",
    "whyNot": [
      "Her fear of evaluation in nonspeaking situations (eating) points to social anxiety disorder as well.",
      "Correct.",
      "Her consistent failure to speak is itself diagnosable as selective mutism.",
      "She has established speech at home and engages nonverbally.",
      "Pragmatic communication problems would occur in all settings."
    ]
  },
  {
    "id": "v5-12",
    "tag": "GAD",
    "stem": "A 46-year-old accountant says he has been “a worrier all my life,” but for the past year it has been worse: he worries about his daughter’s driving, the company’s finances, his parents’ health, being late and whether he locked the car. He knows it is excessive but cannot stop. He feels on edge, has tight shoulders, sleeps poorly and snaps at his wife. He drinks two coffees a day; thyroid tests are normal. He has no panic attacks, and he does not check repeatedly or perform rituals.",
    "q": "What is the diagnosis?",
    "choices": [
      "Persistent depressive disorder",
      "Obsessive-compulsive disorder",
      "Illness anxiety disorder",
      "Generalized anxiety disorder",
      "Caffeine-induced anxiety disorder"
    ],
    "answer": 3,
    "why": "Excessive, **hard-to-control** worry about **many** areas, more days than not for **at least 6 months**, with **four** of six symptoms (on edge, tension, sleep, irritability): **F41.1 GAD**.",
    "whyNot": [
      "There is no chronic depressed mood described.",
      "His worries are about real-life future problems, with no intrusive unwanted obsessions or rituals.",
      "Health is one worry among many, and not mainly his own.",
      "Correct.",
      "Two coffees a day is modest, and the worry is long-standing and independent."
    ]
  },
  {
    "id": "v5-13",
    "tag": "GAD in a child",
    "stem": "A 10-year-old girl redoes her homework until it is perfect, asks her mother many times each night whether she will pass her tests, worries about being late, about earthquakes and about her grandfather’s health. This has been the case for most days for 8 months. She has trouble falling asleep. Her teacher says she is an excellent student.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Generalized anxiety disorder",
      "Separation anxiety disorder",
      "Obsessive-compulsive disorder",
      "Social anxiety disorder",
      "No diagnosis: these are normal worries"
    ],
    "answer": 0,
    "why": "Excessive worry about **performance even when not evaluated**, punctuality, catastrophes and family health, with **perfectionism** and **reassurance seeking**, for 6+ months. In children only **one** associated symptom is needed (sleep): **F41.1 GAD**.",
    "whyNot": [
      "Correct.",
      "Her worries are not about being separated.",
      "Redoing work out of dissatisfaction is GAD-type perfectionism; there are no intrusive obsessions with neutralizing rituals.",
      "Her worry about performance does not depend on others’ evaluation.",
      "Persistent, excessive, impairing worry across topics is not developmentally normal."
    ]
  },
  {
    "id": "v5-14",
    "tag": "Caffeine-induced",
    "stem": "A 26-year-old resident on night float has had palpitations, tremor, restlessness, insomnia and two panic attacks over 3 weeks. She drinks six energy drinks and four coffees per shift. She had no anxiety before residency and has no use disorder. A week after stopping caffeine she feels “back to normal.”",
    "q": "What is the code for her diagnosis?",
    "choices": [
      "F19.980",
      "F15.180",
      "F41.0",
      "F41.1",
      "F15.980"
    ],
    "answer": 4,
    "why": "Panic and anxiety that developed during heavy caffeine intake and resolved with abstinence: **caffeine-induced anxiety disorder, with onset during intoxication**. Caffeine has only the without-use-disorder code, **F15.980**.",
    "whyNot": [
      "Caffeine has its own code (in the stimulant F15 block), not “other substance.”",
      "There is no caffeine use disorder in the main manual, so no F15.180 option exists for caffeine.",
      "Panic disorder is not diagnosed when the attacks are due to a substance.",
      "GAD needs 6 months and no substance cause.",
      "Correct."
    ]
  },
  {
    "id": "v5-15",
    "tag": "Alcohol withdrawal",
    "stem": "A 51-year-old man with severe alcohol use disorder stopped drinking 3 days ago. He is tremulous and sweaty with a pulse of 108, and his anxiety, with repeated panic attacks, dominates his presentation and needs specific treatment. He is fully oriented with no hallucinations. He had no anxiety disorder when abstinent for a year in the past.",
    "q": "What is the correct diagnosis?",
    "choices": [
      "F10.20 severe alcohol use disorder and F41.1 GAD",
      "F10.230 alcohol withdrawal and F41.0 panic disorder",
      "F10.280 severe alcohol use disorder with alcohol-induced anxiety disorder, with onset during withdrawal",
      "F10.980 alcohol-induced anxiety disorder, with onset during withdrawal",
      "F10.231 alcohol withdrawal delirium"
    ],
    "answer": 2,
    "why": "Anxiety **predominating** during withdrawal, warranting attention on its own, with a **severe** use disorder: 4th character **2**, **F10.280**. The use disorder is folded into the code, not listed separately.",
    "whyNot": [
      "GAD requires 6 months of worry not due to a substance.",
      "His attacks occur only in withdrawal and he had none during a year of abstinence; panic disorder is not diagnosed.",
      "Correct.",
      "The 4th character 9 is for no use disorder; he has a severe one.",
      "He is oriented and not hallucinating: no delirium."
    ],
    "discuss": [
      "Why is benzodiazepine treatment appropriate here but risky in long-term anxiety management?"
    ]
  },
  {
    "id": "v5-16",
    "tag": "Pheochromocytoma",
    "stem": "A 49-year-old woman has a 2-month history of sudden episodes of pounding headache, profuse sweating, palpitations and a sense of doom, several times a week, lasting 20–30 minutes. During one, her blood pressure was 230/124. Between attacks she is calm and her blood pressure is normal. Plasma free metanephrines are four times the upper limit of normal, and CT shows a 4-cm adrenal mass.",
    "q": "How is her anxiety diagnosis recorded?",
    "choices": [
      "F41.0 panic disorder",
      "D35.00 pheochromocytoma; F06.4 anxiety disorder due to pheochromocytoma",
      "F06.4 anxiety disorder due to pheochromocytoma; D35.00 pheochromocytoma",
      "F41.8 other specified anxiety disorder",
      "F43.22 adjustment disorder with anxiety"
    ],
    "answer": 1,
    "why": "Paroxysmal anxiety as a **direct physiological effect** of a demonstrated medical condition, with late onset and atypical features: **anxiety disorder due to another medical condition**. The medical condition is coded **first**, then **F06.4**.",
    "whyNot": [
      "Panic disorder is excluded when attacks are a physiological effect of a medical condition (Criterion C).",
      "Correct.",
      "The order is wrong: the medical condition is listed **immediately before** the anxiety disorder.",
      "A specific diagnosis is available.",
      "Adjustment disorder is a reaction to the meaning of an illness; here the tumor causes the symptoms physiologically."
    ]
  },
  {
    "id": "v5-17",
    "tag": "Adjustment vs medical",
    "stem": "A 60-year-old man was diagnosed with COPD 6 weeks ago. Since then he has been tense, tearful and preoccupied with what the illness means for his job as a mechanic and for his retirement plans. His breathing is stable on inhalers, oxygen saturation is normal, and his anxiety rises when he thinks about the future rather than with breathlessness.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Generalized anxiety disorder",
      "Anxiety disorder due to COPD",
      "Salbutamol-induced anxiety disorder",
      "Adjustment disorder with anxiety",
      "Illness anxiety disorder"
    ],
    "answer": 3,
    "why": "A maladaptive reaction within 3 months to the **meaning and consequences** of a new diagnosis, not meeting another disorder: **adjustment disorder with anxiety (F43.22)**. Anxiety due to a medical condition has a **physiological** mechanism and prominent physical symptoms.",
    "whyNot": [
      "Six weeks is too short, and the worry centers on one stressor.",
      "There is no physiological link: his breathing is stable and anxiety follows thoughts, not breathlessness.",
      "His anxiety tracks worry about the future, not inhaler use.",
      "Correct.",
      "He has a real, diagnosed illness and is reacting to it, not preoccupied with having an undiagnosed one."
    ]
  },
  {
    "id": "v5-18",
    "tag": "Panic in older adults",
    "stem": "A 67-year-old woman reports three episodes in a month of sudden fear, palpitations and dizziness. During the last one she lost consciousness briefly and was incontinent of urine. She has no prior psychiatric history. Her daughter wonders whether it is “just panic attacks like I get.”",
    "q": "What is the best next step?",
    "choices": [
      "Thorough medical evaluation, including cardiac rhythm monitoring and neurological assessment",
      "Diagnose panic disorder and start sertraline",
      "Diagnose agoraphobia",
      "Reassure her that panic disorder often starts in later life",
      "Prescribe alprazolam as needed"
    ],
    "answer": 0,
    "why": "**Onset after 45** and **atypical symptoms** (loss of consciousness, incontinence) suggest a **medical condition or substance** cause, such as an arrhythmia or seizures. Evaluate before any anxiety diagnosis.",
    "whyNot": [
      "Correct.",
      "Panic disorder cannot be diagnosed until medical causes are excluded, and these features are red flags.",
      "Nothing suggests situational avoidance.",
      "Onset after 55 is unusual for panic disorder.",
      "Benzodiazepines in an older adult with unexplained syncope could be dangerous and would delay diagnosis."
    ]
  },
  {
    "id": "v5-19",
    "tag": "Panic attack specifier",
    "stem": "A 42-year-old man with major depressive disorder, current episode moderate, describes sudden surges of terror with racing heart, sweating, shaking and chest tightness, peaking within minutes, that occur only when he thinks about his mounting debts. He has no unexpected attacks and no worry about having more attacks.",
    "q": "How should the panic attacks be recorded?",
    "choices": [
      "They should not be recorded because they are part of depression",
      "Major depressive disorder and panic disorder",
      "Major depressive disorder, with anxious distress, and F41.0",
      "Other specified anxiety disorder",
      "Major depressive disorder, with panic attacks"
    ],
    "answer": 4,
    "why": "Panic attacks can occur within **any** mental disorder. When they do, add the specifier: “**with panic attacks**.” It is not coded. Panic disorder needs **recurrent unexpected** attacks with a month of worry or behavior change.",
    "whyNot": [
      "The specifier exists precisely to record them: they mark greater severity and suicide risk.",
      "His attacks are cued, and there is no Criterion B worry.",
      "Anxious distress is a separate depressive specifier; F41.0 is panic disorder, which is not met.",
      "The attacks are explained within the depressive disorder.",
      "Correct."
    ]
  },
  {
    "id": "v5-20",
    "tag": "Cultural concepts",
    "stem": "A 45-year-old Cambodian refugee describes attacks of dizziness, ringing in the ears, neck soreness, palpitations and fear that the “wind” in her body will rise and burst the vessels in her neck. The attacks peak within minutes. She avoids standing up quickly because it brings them on.",
    "q": "How many of her symptoms count toward the panic attack threshold, and what cultural concept is described?",
    "choices": [
      "Two; ataque de nervios",
      "Four; khyâl attacks",
      "Two (dizziness, palpitations); khyâl attacks",
      "Five; trúng gió",
      "None; taijin kyofusho"
    ],
    "answer": 2,
    "why": "**Tinnitus** and **neck soreness** are culture-specific and **do not count**; dizziness and palpitations do (fear of the vessels bursting may count as fear of dying, so careful questioning matters). **Khyâl attacks** are a Cambodian cultural syndrome. Presentations that do not meet another disorder can be **other specified anxiety disorder (khyâl cap)**.",
    "whyNot": [
      "Ataque de nervios is a Latin American syndrome with screaming, crying, trembling and dissociation.",
      "Culture-specific symptoms such as tinnitus and neck soreness are excluded from the count.",
      "Correct.",
      "Trúng gió is Vietnamese, linked with wind exposure and headache.",
      "Taijin kyofusho is a Japanese and Korean social-evaluative fear."
    ],
    "discuss": [
      "How would you use the Cultural Formulation Interview with her?"
    ]
  },
  {
    "id": "v5-21",
    "tag": "Phobia vs OCD",
    "stem": "A 30-year-old nurse has stopped working on the ward because she avoids anything that might have blood on it. She describes intrusive images of having caught HIV from a speck of blood, which she knows are excessive, and washes her hands until they bleed, up to 50 times a day. She has no fainting and no fear of needles for herself.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Specific phobia, blood-injection-injury type",
      "Obsessive-compulsive disorder",
      "Illness anxiety disorder",
      "Generalized anxiety disorder",
      "Specific phobia, other type"
    ],
    "answer": 1,
    "why": "Her fear of blood is driven by **contamination obsessions** with **compulsive** washing. When the feared object is linked to obsessions and OCD criteria are met, diagnose **OCD**, not specific phobia.",
    "whyNot": [
      "BII phobia fears blood itself, often with fainting, not contamination.",
      "Correct.",
      "Her concern is contamination with compulsions, not preoccupation with having an illness already.",
      "Her worry is a single intrusive theme with rituals, not multiple everyday worries.",
      "The fear is explained by obsessions (Criterion G)."
    ]
  },
  {
    "id": "v5-22",
    "tag": "Agoraphobia vs MDD",
    "stem": "A 45-year-old man has not left his apartment in 6 weeks except for groceries his brother insists on. He says there is “no point” in going out, has lost interest in his hobbies, sleeps 12 hours, feels worthless and has lost 5 kg. When asked what would happen if he went to a mall or on a bus, he shrugs: “Nothing. I just don’t care.”",
    "q": "What is the best explanation for his staying home?",
    "choices": [
      "Panic disorder with agoraphobia",
      "Agoraphobia",
      "Social anxiety disorder",
      "Major depressive disorder",
      "Avoidant personality disorder"
    ],
    "answer": 3,
    "why": "He stays home from **apathy, anhedonia and low energy**, not fear. If avoidance is unrelated to fear of panic-like or embarrassing symptoms, agoraphobia is not diagnosed.",
    "whyNot": [
      "No panic attacks are described.",
      "Agoraphobia requires fear that escape or help would be unavailable; he expects nothing bad to happen.",
      "No fear of evaluation.",
      "Correct.",
      "His withdrawal is recent and episodic, not a lifelong pattern."
    ]
  },
  {
    "id": "v5-23",
    "tag": "Phobia and PTSD",
    "stem": "Eight months after being bitten badly by a dog, a 12-year-old boy crosses the street whenever he sees a dog, will not visit friends who have dogs, and screams when one barks nearby. He does not have nightmares or intrusive memories of the attack, does not avoid the park where it happened, and sleeps and concentrates normally.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "Specific phobia, animal type",
      "Posttraumatic stress disorder",
      "Acute stress disorder",
      "Adjustment disorder with anxiety",
      "Agoraphobia"
    ],
    "answer": 0,
    "why": "Phobias can follow a trauma. Because **PTSD criteria are not met** (no intrusions, no avoidance of memories or reminders of the event itself, no arousal changes), the diagnosis is **F40.218 specific phobia, animal**.",
    "whyNot": [
      "Correct.",
      "PTSD requires intrusion symptoms, avoidance of reminders, negative cognitions and arousal changes; he has fear of dogs in general only.",
      "Acute stress disorder lasts at most 1 month after the trauma.",
      "A specific disorder is met.",
      "Only one type of stimulus is feared, not agoraphobic situations."
    ]
  },
  {
    "id": "v5-24",
    "tag": "Other specified",
    "stem": "A 35-year-old woman has excessive, hard-to-control worry about her children, finances and health, with restlessness, fatigue and muscle tension. She describes it as coming in bursts about 1 day a week, for the past 2 years, causing her to miss work. She has no panic attacks and no substance or medical causes.",
    "q": "What is the most appropriate diagnosis?",
    "choices": [
      "Cyclothymic disorder",
      "Generalized anxiety disorder",
      "Unspecified anxiety disorder",
      "Adjustment disorder with anxiety",
      "Other specified anxiety disorder (generalized anxiety occurring less often than more days than not)"
    ],
    "answer": 4,
    "why": "Everything fits GAD except frequency: “**more days than not**” is not met. This exact presentation is a listed example of **F41.8 other specified anxiety disorder**, recorded with the reason.",
    "whyNot": [
      "Cyclothymia involves hypomanic and depressive symptoms, not worry.",
      "GAD requires worry more days than not.",
      "Unspecified (F41.9) is for when the clinician chooses not to state the reason; here the reason is clear and useful to record.",
      "There is no identifiable stressor, and 2 years exceeds adjustment disorder’s course.",
      "Correct."
    ]
  },
  {
    "id": "v5-25",
    "tag": "Comorbidity",
    "stem": "A 31-year-old woman has had recurrent unexpected panic attacks for a year, with constant worry about the next one. For 9 months she has avoided buses, the subway and supermarkets unless her husband comes. For the past month she has felt hopeless, lost interest in everything, wakes at 4 a.m. and has thought she would be better off dead.",
    "q": "Which diagnoses should be recorded?",
    "choices": [
      "Major depressive disorder with anxious distress only",
      "Panic disorder with agoraphobia (one code) and major depressive disorder with panic attacks",
      "Panic disorder, agoraphobia and major depressive disorder",
      "Agoraphobia and major depressive disorder only",
      "Panic disorder only"
    ],
    "answer": 2,
    "why": "Each disorder whose criteria are met is diagnosed: **F41.0 panic disorder** and **F40.00 agoraphobia** (two codes since DSM-5), plus a **major depressive episode** (likely F32.x). The panic attack specifier is not added where panic disorder is diagnosed. Her suicidal thoughts need immediate assessment.",
    "whyNot": [
      "Anxious distress describes anxiety within the episode; it does not replace full panic disorder and agoraphobia.",
      "There is no single combined code in DSM-5-TR; and with panic disorder present, the panic attack specifier is not used.",
      "Correct.",
      "Her unexpected attacks with a year of worry meet panic disorder criteria.",
      "Agoraphobia and the depressive episode are also met."
    ],
    "discuss": [
      "Why does comorbid depression change how you manage her agoraphobia?",
      "Which suicide risk factors does she have?"
    ]
  }
]);
