/* Chapter 15 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   Treatment items are labeled "outside the DSM". */
SP.add("ch15", "vignettes", [
  {
    "id": "v15-01",
    "tag": "ODD in a preschooler",
    "stem": "A 4-year-old boy is brought by his parents. For the past 7 months, on most days, he has lost his temper with screaming and kicking, refused his parents’ and preschool teachers’ requests, deliberately pestered other children and been easily annoyed by small changes. The behavior happens both at home and at preschool, and he was asked to leave his first preschool. His language and hearing are normal, he has no history of trauma, and his parents say he is cheerful in the stretches between these episodes.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "No diagnosis; tantrums are normal at this age",
      "F91.3 oppositional defiant disorder, moderate",
      "F91.3 oppositional defiant disorder, mild",
      "F34.81 disruptive mood dysregulation disorder",
      "F63.81 intermittent explosive disorder"
    ],
    "answer": 1,
    "why": "He has **four symptoms** (temper loss, defiance, deliberately annoying others, touchy) for **7 months**. Under age 5 the behavior must occur on **most days**, which it does, and it caused impairment. Symptoms in **two settings** (home and preschool) make it **moderate** (pp. 522–523).",
    "whyNot": [
      "Weekly tantrums are common in preschoolers, but daily outbursts with three other symptoms and expulsion from preschool go beyond the normal range; only about 10% of preschoolers have daily tantrums.",
      "Correct.",
      "Mild means symptoms in only one setting; his occur at home and at preschool.",
      "DMDD is not diagnosed before age 6, and his mood is not persistently irritable between episodes.",
      "IED requires a chronological or developmental age of at least 6 years."
    ]
  },
  {
    "id": "v15-02",
    "tag": "Sibling-only conflict",
    "stem": "A 10-year-old girl’s parents report that for the past year she argues with her 7-year-old brother every day, blames him when things go wrong, takes his toys to annoy him and loses her temper with him several times a week. With her parents, teachers, classmates and grandparents she is cooperative and calm, follows rules and accepts correction. Her grades are good and she has close friends.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "F91.3 oppositional defiant disorder, mild",
      "F91.3 oppositional defiant disorder, moderate",
      "F91.8 other specified disruptive, impulse-control, and conduct disorder",
      "No oppositional defiant disorder; the behavior occurs only with a sibling",
      "F43.24 adjustment disorder with disturbance of conduct"
    ],
    "answer": 3,
    "why": "ODD symptoms must show up in interaction with **at least one person who is not a sibling** (Criterion A). Because these behaviors are common between siblings, conflict confined to a brother or sister does not count toward the diagnosis (pp. 522–523).",
    "whyNot": [
      "Sibling-only behavior cannot meet Criterion A, whatever the number of settings.",
      "She has no symptoms outside her relationship with her brother.",
      "Nothing suggests clinically significant impairment; she is doing well at school and with friends.",
      "Correct.",
      "There is no identifiable stressor, and the pattern has lasted a year."
    ]
  },
  {
    "id": "v15-03",
    "tag": "ODD severity",
    "stem": "A 9-year-old boy has, for 10 months, lost his temper several times a week, argued with his parents and teachers at least weekly, refused to follow rules at least weekly and deliberately annoyed his classmates at least weekly. Twice in the past 6 months he spitefully hid a classmate’s shoes after losing a game. These behaviors occur at home, at school and on his football team, where the coach has benched him. He has never been physically aggressive, has not destroyed property, stolen or lied to get things, and his mood between episodes is described as ordinary. He has no inattention or hyperactivity, and no depressive, manic or psychotic symptoms.",
    "q": "What is the diagnosis and severity?",
    "choices": [
      "F91.3 oppositional defiant disorder, severe",
      "F91.3 oppositional defiant disorder, moderate",
      "F91.3 oppositional defiant disorder, mild",
      "F91.2 conduct disorder, adolescent-onset type",
      "F34.81 disruptive mood dysregulation disorder"
    ],
    "answer": 0,
    "why": "Five symptoms for more than 6 months, at least weekly (the rule from age 5), with spitefulness at least **twice in 6 months** (A8). ODD severity is set by **how many settings**: three or more (home, school, team) is **severe** (pp. 522–523).",
    "whyNot": [
      "Correct.",
      "Moderate means at least two settings; he has three.",
      "Mild means one setting only.",
      "He has none of the 15 conduct disorder behaviors, such as aggression, destruction, theft or serious rule violations.",
      "His mood between episodes is ordinary, not persistently irritable, and his outbursts are not described as severe."
    ],
    "then": {
      "q": "Outside the DSM, what is the recommended first-line treatment for him?",
      "choices": [
        "Short-term risperidone with metabolic monitoring",
        "Parent management training, such as Parent–Child Interaction Therapy, Incredible Years or Triple P",
        "A residential boot-camp program",
        "Methylphenidate",
        "Individual psychodynamic therapy for the child alone"
      ],
      "answer": 1,
      "why": "Outside the DSM: **parent management training** (praise and rewards for wanted behavior, clear commands, calm and consistent consequences) is first line for children with ODD (NICE CG158, 2013; AACAP ODD practice parameter, 2007).",
      "whyNot": [
        "Antipsychotics are kept for severe, persistent aggression after psychosocial treatment has been tried; he is not aggressive.",
        "Correct.",
        "Fear-based and boot-camp programs can worsen outcomes.",
        "Stimulants help when ADHD is present; he has no ADHD symptoms.",
        "Family-based behavioral approaches have the best evidence; child-only insight therapy is not first line."
      ]
    }
  },
  {
    "id": "v15-04",
    "tag": "ODD versus DMDD",
    "stem": "An 8-year-old girl has had severe temper outbursts, with screaming and throwing objects, about four times a week at home and at school for 14 months. Between outbursts, her parents and teacher describe her as irritable and angry most of the day, nearly every day. The problem began at age 6. She also argues with adults, refuses to follow rules and blames others for her mistakes, at least weekly. She has never had a period of elevated mood, decreased need for sleep or a depressive episode, and she uses no substances.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F91.3 oppositional defiant disorder, moderate",
      "F34.81 disruptive mood dysregulation disorder and F91.3 oppositional defiant disorder",
      "F31.9 bipolar I disorder, unspecified",
      "F63.81 intermittent explosive disorder",
      "F34.81 disruptive mood dysregulation disorder"
    ],
    "answer": 4,
    "why": "She meets DMDD: severe outbursts **at least three times a week**, **persistently irritable mood** between them, over **12 months**, in **two settings**, onset at **6**. ODD Criterion C says ODD is **not** given when DMDD criteria are met, even if every ODD criterion is also met (pp. 523, 526).",
    "whyNot": [
      "Her ODD symptoms are real, but the DMDD exclusion in ODD Criterion C applies.",
      "The two are not diagnosed together; DMDD takes precedence.",
      "She has never had a manic episode.",
      "IED and DMDD are mutually exclusive, and her persistent irritability between outbursts points to DMDD.",
      "Correct."
    ]
  },
  {
    "id": "v15-05",
    "tag": "ADHD-only noncompliance",
    "stem": "An 8-year-old boy has ADHD, combined presentation, with criteria clearly met. His teacher reports that he does not finish worksheets and refuses to stay seated during long lessons, and his parents say he resists starting homework. He follows rules at recess, does his chores, plays games cooperatively and accepts correction. He is not touchy or easily angered, rarely loses his temper, does not argue with adults or blame others, and has never been spiteful.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F90.2 ADHD, combined presentation, and F91.3 oppositional defiant disorder, mild",
      "F90.2 ADHD, combined presentation, and F91.3 oppositional defiant disorder, moderate",
      "F90.2 ADHD, combined presentation",
      "F91.3 oppositional defiant disorder, moderate",
      "F90.2 ADHD, combined presentation, and F91.8 other specified disruptive, impulse-control, and conduct disorder"
    ],
    "answer": 2,
    "why": "To add ODD to ADHD, the failure to comply must **not occur only** in situations that demand **sustained effort and attention** or **sitting still** (p. 526). His noncompliance is limited to exactly those situations, and he has no other oppositional symptoms.",
    "whyNot": [
      "His refusals happen only in tasks that demand sustained effort or sitting still, which ADHD explains.",
      "Noncompliance in two settings does not help when it is confined to effortful or seated tasks.",
      "Correct.",
      "His ADHD is clearly present, and he has no ODD symptoms beyond ADHD-related noncompliance.",
      "There are no disruptive symptoms beyond those ADHD explains, so no residual category is needed."
    ]
  },
  {
    "id": "v15-06",
    "tag": "IED via A1",
    "stem": "A 26-year-old man has had verbal tirades about three times a week for 4 months: he shouts at his partner and co-workers, pounds the table and has shoved people, without breaking anything or injuring anyone. The triggers are minor, such as a late reply to a message or a mild comment, the outbursts come on within seconds and last 10–20 minutes, and he wants nothing from them; afterward he feels embarrassed. He has received a written warning at work. Between outbursts his mood is normal. He has no depressive, manic or psychotic symptoms, uses no alcohol or drugs, takes no medication, has never had a head injury and has a normal neurological examination. He has no pattern of rule breaking, unstable relationships or self-harm.",
    "q": "What is the diagnosis?",
    "choices": [
      "No diagnosis, because no one has been injured and nothing has been damaged",
      "F63.81 intermittent explosive disorder",
      "F60.2 antisocial personality disorder",
      "F07.0 personality change due to another medical condition, aggressive type",
      "F91.8 other specified disruptive, impulse-control, and conduct disorder, recurrent behavioral outbursts of insufficient frequency"
    ],
    "answer": 1,
    "why": "**Criterion A1**: verbal aggression or physical aggression **without damage or injury**, averaging **twice a week for 3 months**. The outbursts are out of proportion, impulsive, not aimed at a tangible goal, impairing, and not explained by another disorder, substance or medical condition (p. 527). Rapid onset, little prodrome and a duration under 30 minutes are typical (p. 527).",
    "whyNot": [
      "A1 is the nondamaging, noninjurious route; damage or injury is required only for A2.",
      "Correct.",
      "He has no pervasive pattern of disregard for others’ rights, and his aggression is impulsive, not instrumental.",
      "He has no head injury or other medical condition, and his examination is normal.",
      "Three outbursts a week for 4 months meets the A1 frequency, so full criteria are met."
    ]
  },
  {
    "id": "v15-07",
    "tag": "IED via A2",
    "stem": "A 38-year-old woman has had three outbursts in the past 11 months: she punched a hole in a wall when her husband criticized her cooking, smashed his phone when he came home late, and threw a mug that cut a co-worker’s hand after a minor disagreement. Between these, she has verbal arguments about twice a month. Each outburst was sudden and unplanned, aimed at nothing she could gain, and followed by shame; she now faces a civil claim from the co-worker. Her mood between outbursts is normal. She has no depressive, manic or psychotic symptoms, does not use alcohol or drugs, takes no medication and has no medical illness. She has had no recent stressors, and she has no pattern of unstable relationships, self-harm or antisocial behavior.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "She does not meet criteria, because her outbursts do not occur twice a week",
      "She does not meet criteria, because the outbursts targeted specific people",
      "F91.8 other specified disruptive, impulse-control, and conduct disorder",
      "F63.81 intermittent explosive disorder",
      "F43.24 adjustment disorder with disturbance of conduct"
    ],
    "answer": 3,
    "why": "**Criterion A2**: **three** outbursts with **property damage or physical injury** within **12 months**. No weekly frequency is needed for A2. Legal or financial consequences satisfy Criterion D (pp. 527–528).",
    "whyNot": [
      "The twice-weekly frequency applies only to A1; A2 needs three damaging or injurious outbursts in a year.",
      "Outbursts often follow minor provocation by a close intimate or associate; that is typical, not exclusionary.",
      "Full criteria are met, so a residual category is not used.",
      "Correct.",
      "No stressor is described, and adjustment disorder as an IED exclusion applies only to ages 6–18."
    ]
  },
  {
    "id": "v15-08",
    "tag": "IED age criterion",
    "stem": "A 5-year-old boy (developmentally typical for his age) has, for 4 months, screamed at and hit classmates about three times a week, without injuring anyone or breaking anything. The outbursts follow small frustrations, such as losing a turn, and end within minutes. Between them his mood is cheerful, he follows his teachers’ rules and he does not argue or blame others. There is no stressor, trauma or medical illness.",
    "q": "Which criterion prevents a diagnosis of intermittent explosive disorder at this time?",
    "choices": [
      "Criterion E (age)",
      "Criterion B (out of proportion)",
      "Criterion C (not premeditated)",
      "Criterion A1 (frequency)",
      "Criterion F (disruptive mood dysregulation disorder)"
    ],
    "answer": 0,
    "why": "IED requires a **chronological age of at least 6 years**, or an equivalent developmental level (Criterion E, p. 527). He is 5 and developmentally typical.",
    "whyNot": [
      "Correct.",
      "Hitting after losing a turn is out of proportion to the trigger.",
      "His outbursts are impulsive reactions to frustration.",
      "Three outbursts a week for 4 months meets the A1 frequency.",
      "His mood is cheerful between outbursts, and DMDD itself cannot be diagnosed before age 6."
    ]
  },
  {
    "id": "v15-09",
    "tag": "IED versus DMDD",
    "stem": "A 13-year-old boy’s outbursts began at age 11. For the past 5 months he has had verbal tirades and has pushed peers, without injury or damage, two to three times a week, usually after mild teasing. Each outburst lasts a few minutes, is unplanned, and he regrets it; he has had two suspensions. His parents and teachers agree that between outbursts he is cheerful and even-tempered. He follows rules, does not argue with adults and has no depressive or manic symptoms. There have been no recent stressors. He uses no substances and has no medical illness.",
    "q": "What is the diagnosis?",
    "choices": [
      "F34.81 disruptive mood dysregulation disorder",
      "F91.2 conduct disorder, adolescent-onset type",
      "F91.3 oppositional defiant disorder, moderate",
      "F43.24 adjustment disorder with disturbance of conduct",
      "F63.81 intermittent explosive disorder"
    ],
    "answer": 4,
    "why": "A1 is met (two to three times a week, at least the twice-weekly average, for over 3 months). DMDD is ruled out on two counts: his mood **between outbursts is normal**, and the outbursts began **after age 10** (p. 529).",
    "whyNot": [
      "DMDD needs persistently irritable mood between outbursts and onset before age 10.",
      "His aggression is impulsive, and he has no other conduct disorder behaviors.",
      "He has no argumentative or defiant symptoms; ODD aggression is mostly tantrums and arguments with authority figures.",
      "There is no stressor.",
      "Correct."
    ]
  },
  {
    "id": "v15-10",
    "tag": "Outbursts only when intoxicated",
    "stem": "A 31-year-old man is referred after his fifth bar fight in 6 months; two of the fights injured other men. Every fight happened while he was drunk. When sober, he has no outbursts: his partner and employer describe him as calm and patient, and he has had no aggressive episodes at home or at work. He has no depressive, manic or psychotic symptoms, and no medical illness.",
    "q": "Which conclusion about intermittent explosive disorder is correct?",
    "choices": [
      "IED is diagnosed, because Criterion A2 is met",
      "IED is not diagnosed, because it cannot first be diagnosed after age 30",
      "IED is not diagnosed, because his aggressive outbursts occur only during alcohol intoxication",
      "IED is not diagnosed, because his outbursts caused injuries",
      "IED is not diagnosed, because any substance use disorder rules it out"
    ],
    "answer": 2,
    "why": "IED is not diagnosed when the impulsive aggressive outbursts are **nearly always tied to intoxication or withdrawal** (Criterion F, p. 527; p. 530). It may be given if enough outbursts **also occur without** the substance and need independent attention.",
    "whyNot": [
      "A2 is not met (only two fights caused injury; three are needed), and outbursts that occur only during intoxication fail Criterion F anyway.",
      "Onset is usually in late childhood or adolescence and rarely first after 40, but no age limit applies at 30.",
      "Correct.",
      "Injury is part of Criterion A2, not a reason to exclude IED.",
      "Substance use disorders are common comorbidities of IED; the exclusion applies when the outbursts themselves are substance-bound."
    ]
  },
  {
    "id": "v15-11",
    "tag": "IED added to autism",
    "stem": "A 15-year-old boy has autism spectrum disorder without intellectual or language impairment (requiring support), diagnosed at age 4. In the past 10 months he has had four outbursts after minor teasing by peers: he broke a classroom window, punched a classmate causing a nosebleed, smashed his laptop and kicked in a door. These are not linked to changes in routine or sensory overload, are far beyond any aggression he showed before, and have led to a suspension and a separate treatment plan. Between outbursts his mood is normal. Problems with irritability or temper began only at age 14. He uses no substances, has no medical illness and has no other conduct problems.",
    "q": "Which diagnoses should be recorded?",
    "choices": [
      "F84.0 autism spectrum disorder only; aggression is part of autism",
      "F84.0 autism spectrum disorder and F63.81 intermittent explosive disorder",
      "F63.81 intermittent explosive disorder only",
      "F84.0 autism spectrum disorder and F34.81 disruptive mood dysregulation disorder",
      "F84.0 autism spectrum disorder and F91.2 conduct disorder, adolescent-onset type"
    ],
    "answer": 1,
    "why": "The note under the IED criteria allows IED **in addition to** ADHD, conduct disorder, ODD or **autism spectrum disorder** when the impulsive outbursts are **in excess of** those usually seen and **warrant independent clinical attention** (p. 527). He has four damaging or injurious outbursts in 10 months, more than the three in 12 months that A2 requires.",
    "whyNot": [
      "His outbursts exceed what is usual for him and need their own treatment.",
      "Correct.",
      "His autism remains a diagnosis.",
      "DMDD needs onset before 10 and persistent irritability between outbursts.",
      "He has no other conduct problems, and his aggression is impulsive."
    ]
  },
  {
    "id": "v15-12",
    "tag": "New aggression after brain injury",
    "stem": "A 52-year-old man had a severe traumatic brain injury with frontal contusions in a motorcycle crash 8 months ago. Since then, his wife reports, he shouts and throws objects several times a week in response to small annoyances, which he never did before the injury. Between outbursts his mood is normal. He has no depressive, manic or psychotic symptoms, drinks no alcohol, uses no drugs and has normal cognitive testing.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F63.81 intermittent explosive disorder",
      "F43.24 adjustment disorder with disturbance of conduct",
      "F60.2 antisocial personality disorder",
      "F07.0 personality change due to traumatic brain injury, aggressive type",
      "F91.8 other specified disruptive, impulse-control, and conduct disorder"
    ],
    "answer": 3,
    "why": "IED is not given when the outbursts result from the physiological effects of **another medical condition**, such as a brain injury with a personality change marked by aggression (p. 530). New onset after 40 is also unusual for IED (p. 528).",
    "whyNot": [
      "Outbursts that are attributable to a medical condition fail IED Criterion F.",
      "The aggression follows a brain injury, not a psychosocial stressor.",
      "There is no lifelong pattern of disregard for others, and the change followed the injury.",
      "Correct.",
      "A specific medical explanation exists, so a residual disruptive category is not appropriate."
    ]
  },
  {
    "id": "v15-13",
    "tag": "Counting conduct disorder symptoms",
    "stem": "A 14-year-old girl is evaluated after a shoplifting arrest. In the past 12 months she has often lied to relatives to get money, and she has shoplifted makeup and headphones of real value several times without confronting anyone. Since she turned 13 she has often stayed out at night despite her parents forbidding it, and since starting high school at 14 she has often skipped classes. Once she ran away overnight after an argument and came home the next morning. She has no history of conduct problems before age 12. At home she is not argumentative or irritable. Her grades have fallen.",
    "q": "How many conduct disorder Criterion A symptoms does she currently meet?",
    "choices": [
      "Two",
      "One",
      "Three",
      "Four",
      "Five"
    ],
    "answer": 0,
    "why": "Only **lying to obtain goods (A11)** and **stealing without confronting a victim (A12)** count. Staying out at night (A13) and truancy (A15) count only if they **began before age 13**; running away (A14) needs **two overnight episodes** or one without returning for a lengthy period (p. 531). Runaway episodes that are a direct result of physical or sexual abuse usually do not count either (p. 533).",
    "whyNot": [
      "Correct.",
      "Both lying for gain and shoplifting count.",
      "Staying out at night began at 13, not before 13.",
      "Truancy began at 14, so it does not count.",
      "A single overnight runaway with return the next day does not count."
    ],
    "then": {
      "q": "Two months later she breaks into a neighbor’s car and takes a laptop. Her lying and shoplifting continue, impairment persists, and there is still no evidence of any conduct problem before age 10. What is the diagnosis?",
      "choices": [
        "F91.1 conduct disorder, childhood-onset type",
        "F91.2 conduct disorder, adolescent-onset type",
        "F91.9 conduct disorder, unspecified onset",
        "F91.3 oppositional defiant disorder",
        "F91.8 other specified disruptive, impulse-control, and conduct disorder"
      ],
      "answer": 1,
      "why": "Breaking into a car (**A10**) brings her to **three** symptoms in 12 months, at least one in the past 6 months, with impairment. No symptom before age 10 makes it **adolescent-onset type (F91.2)** (p. 531).",
      "whyNot": [
        "Childhood-onset needs at least one symptom before age 10.",
        "Correct.",
        "Her history is known: there were no problems before age 12.",
        "She is not argumentative or irritable, and her behaviors are conduct disorder symptoms.",
        "Full criteria are now met."
      ]
    }
  },
  {
    "id": "v15-14",
    "tag": "Conduct disorder, unspecified onset",
    "stem": "A 17-year-old boy in a youth detention center has, in the past year, robbed a classmate at knifepoint, broken into three parked cars and often started fights; his most recent fight was last month. He has been expelled from school. He says he cannot remember anything about his childhood, his parents cannot be reached, and no earlier school or clinic records exist, so it is not possible to tell whether any conduct problem began before age 10. He is not irritable or argumentative with staff, and he has no mood or psychotic symptoms.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F91.1 conduct disorder, childhood-onset type",
      "F91.2 conduct disorder, adolescent-onset type",
      "F60.2 antisocial personality disorder",
      "F91.9 unspecified disruptive, impulse-control, and conduct disorder",
      "F91.9 conduct disorder, unspecified onset"
    ],
    "answer": 4,
    "why": "He meets conduct disorder (weapon use, robbery with confrontation, breaking into cars, starting fights). When there is **not enough information** to date the first symptom before or after age 10, the subtype is **unspecified onset, F91.9** (p. 531). The same code is used for unspecified disruptive, impulse-control, and conduct disorder, so the written name matters.",
    "whyNot": [
      "There is no evidence of a symptom before age 10.",
      "Adolescent-onset requires knowing that no symptom appeared before 10, which cannot be established.",
      "He is 17; antisocial personality disorder needs age 18 or older.",
      "Full criteria for conduct disorder are met; the unspecified category is for presentations that do not meet full criteria.",
      "Correct."
    ],
    "then": {
      "q": "A week later, records arrive from his primary school showing that at age 8 he was suspended twice for being physically cruel to younger children. How should the diagnosis now be recorded?",
      "choices": [
        "F91.1 conduct disorder, childhood-onset type",
        "F91.2 conduct disorder, adolescent-onset type",
        "F91.9 conduct disorder, unspecified onset",
        "F91.3 oppositional defiant disorder and F91.2 conduct disorder, adolescent-onset type",
        "F91.8 other specified disruptive, impulse-control, and conduct disorder"
      ],
      "answer": 0,
      "why": "Physical cruelty to people (**A4**) at age 8 is **one symptom before age 10**, which is enough for **childhood-onset type (F91.1)** (p. 531). This subtype predicts a more persistent course (p. 532).",
      "whyNot": [
        "Correct.",
        "A symptom before age 10 rules out adolescent-onset type.",
        "Onset can now be dated.",
        "There is no evidence of ODD, and the onset is now known to be in childhood.",
        "Full criteria for conduct disorder are met."
      ]
    }
  },
  {
    "id": "v15-15",
    "tag": "Limited prosocial emotions",
    "stem": "A 14-year-old boy meets criteria for conduct disorder, childhood-onset type, after repeated fights, cruelty to a neighbor’s dog and several car break-ins. He moved in with his aunt 5 months ago. In the interview he says he does not feel bad after hurting people and does not care how others feel. His aunt has noticed this coldness since he arrived. No one else who has known him longer has yet been interviewed.",
    "q": "What is the best next step regarding the “with limited prosocial emotions” specifier?",
    "choices": [
      "Add the specifier now, because he endorses two of the four traits",
      "Never add it, because the specifier requires three of the four traits",
      "Do not add it yet; gather reports from others who have known him for a long time, across settings, and confirm the traits over at least 12 months",
      "Never add it, because the specifier is reserved for adults",
      "Add it now, because cruelty to animals is enough for the specifier"
    ],
    "answer": 2,
    "why": "The specifier needs **at least two of four** traits shown **persistently for at least 12 months** in **multiple relationships and settings**, and assessment requires **multiple information sources**, including people who have known the person for extended periods (pp. 531–533). Youth with these traits may not readily admit them, but here self-report and 5 months of observation are not enough.",
    "whyNot": [
      "Two traits are endorsed, but the 12-month duration and multiple informants are not yet established.",
      "Two of four traits is the threshold.",
      "Correct.",
      "The specifier applies to conduct disorder at any age.",
      "The specifier is based on interpersonal and emotional traits, not on a particular conduct symptom."
    ],
    "then": {
      "q": "His mother, his grandmother and his former teacher, who have each known him for years, describe for at least the past 2 years, at home, at school and with friends: no guilt after hurting others except when he is punished, and a cold, uncaring attitude toward others’ feelings. He works hard at school and shows warm, genuine affection to his younger sister. How is the diagnosis now recorded (severity aside)?",
      "choices": [
        "F91.1 conduct disorder, childhood-onset type",
        "F91.1 conduct disorder, childhood-onset type, with limited prosocial emotions",
        "F91.2 conduct disorder, adolescent-onset type, with limited prosocial emotions",
        "F60.2 antisocial personality disorder",
        "F91.9 conduct disorder, unspecified onset, with limited prosocial emotions"
      ],
      "answer": 1,
      "why": "Two traits (**lack of remorse or guilt**; **callous, lack of empathy**) are present for **over 12 months**, across **relationships and settings**, confirmed by **multiple informants**. Remorse shown only when caught or punished does not count as remorse (p. 532).",
      "whyNot": [
        "The specifier is now supported and should be added.",
        "Correct.",
        "His onset is in childhood.",
        "He is 14; antisocial personality disorder needs age 18 or older.",
        "His onset is known to be in childhood."
      ]
    }
  },
  {
    "id": "v15-16",
    "tag": "Conduct disorder severity",
    "stem": "A 15-year-old boy is referred by his school. Since age 12 he has often skipped school and often stayed out at night despite his parents forbidding it, and over the past year he has often lied to avoid chores and schoolwork. He has never been aggressive, destroyed property or stolen. His teachers and parents report no conduct problems before age 12. He is failing two subjects and has been suspended. He is not irritable or argumentative, he has no mood symptoms, and no stressor preceded the problems.",
    "q": "What is the diagnosis?",
    "choices": [
      "F91.2 conduct disorder, adolescent-onset type, moderate",
      "F91.2 conduct disorder, adolescent-onset type, mild",
      "F91.1 conduct disorder, childhood-onset type, mild",
      "F91.3 oppositional defiant disorder, moderate",
      "F43.24 adjustment disorder with disturbance of conduct"
    ],
    "answer": 1,
    "why": "Three symptoms: **truancy and staying out, both beginning before 13** (A15, A13), and **lying to avoid obligations** (A11). No symptom before 10 makes it adolescent-onset. **Mild** means few if any problems beyond the threshold, causing relatively minor harm, such as lying, truancy and staying out after dark (pp. 531–532).",
    "whyNot": [
      "Moderate examples include stealing without confronting a victim and vandalism; he has only the minimum three, all low-harm.",
      "Correct.",
      "He had no conduct problems before age 12.",
      "He is not irritable or argumentative, and his behaviors are conduct disorder symptoms.",
      "There is no stressor, and the pattern has lasted 3 years."
    ]
  },
  {
    "id": "v15-17",
    "tag": "ODD with conduct disorder",
    "stem": "A 10-year-old boy has, for 14 months, lost his temper about twice a week, argued with his parents and teachers, refused to follow rules and blamed others for his mistakes, at least weekly, both at home and at school. Between episodes his mood is usually fine. Over the past year he has also often bullied younger classmates, often started fights, and deliberately broke a classmate’s tablet; his first fight was at age 9. He has no inattention or hyperactivity, and no depressive, manic or psychotic symptoms. He has been suspended twice.",
    "q": "Which diagnoses should be recorded (severity aside)?",
    "choices": [
      "F91.1 conduct disorder, childhood-onset type, only; ODD is not given when conduct disorder is present",
      "F91.3 oppositional defiant disorder only",
      "F91.3 oppositional defiant disorder and F91.2 conduct disorder, adolescent-onset type",
      "F91.3 oppositional defiant disorder and F91.1 conduct disorder, childhood-onset type",
      "F34.81 disruptive mood dysregulation disorder and F91.1 conduct disorder, childhood-onset type"
    ],
    "answer": 3,
    "why": "He meets ODD (four symptoms for over 6 months, at least weekly) and conduct disorder (bullying, starting fights, destroying property). When criteria for **both** are met, **both are diagnosed** (p. 536). A symptom at age 9 makes it **childhood-onset** (p. 531).",
    "whyNot": [
      "DSM-5-TR allows both diagnoses when criteria for each are met.",
      "Bullying, fighting and property destruction are conduct disorder symptoms, which ODD does not include.",
      "His first fight was at 9, before age 10.",
      "Correct.",
      "His outbursts are about twice a week and his mood is usually fine between them, so DMDD criteria are not met."
    ]
  },
  {
    "id": "v15-18",
    "tag": "Conduct disorder in an adult",
    "stem": "A 19-year-old man is assessed after an arrest. His first conduct problems began at age 16, when he started breaking into cars. Over the past 12 months he has often started fights, robbed a delivery rider by threatening him, and broken into two homes, the latest 3 months ago. His parents and school records confirm that he had no conduct problems at all before 16. He is unemployed after being fired for fighting. He has no mood or psychotic symptoms.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F91.2 conduct disorder, adolescent-onset type",
      "F60.2 antisocial personality disorder",
      "F91.1 conduct disorder, childhood-onset type",
      "F63.81 intermittent explosive disorder",
      "No diagnosis; conduct disorder cannot be given after age 18"
    ],
    "answer": 0,
    "why": "Conduct disorder **can be diagnosed in adults** (p. 534). Criterion C requires only that, at 18 or older, **antisocial personality disorder criteria are not met**. ASPD requires evidence of conduct disorder with **onset before age 15**; his began at 16, so ASPD cannot be diagnosed.",
    "whyNot": [
      "Correct.",
      "ASPD needs conduct disorder onset before age 15; his began at 16.",
      "He had no symptoms before age 10.",
      "His aggression includes robbery for gain and break-ins, which are instrumental rather than impulsive outbursts.",
      "Adults can receive the diagnosis when ASPD criteria are not met."
    ],
    "then": {
      "q": "A different man, aged 23, began starting fights, stealing and skipping school at age 11. Since age 15 he has repeatedly been arrested for theft, lied and used aliases to swindle people, failed to plan ahead, got into frequent assaults, driven recklessly and shown no remorse. What is the diagnosis?",
      "choices": [
        "F91.1 conduct disorder, childhood-onset type",
        "F60.2 antisocial personality disorder",
        "F91.1 conduct disorder, childhood-onset type, and F60.2 antisocial personality disorder",
        "F91.1 conduct disorder, childhood-onset type, with limited prosocial emotions",
        "F63.81 intermittent explosive disorder"
      ],
      "answer": 1,
      "why": "He is over 18, had conduct disorder **before 15**, and shows a pervasive pattern of disregard for others’ rights since 15 that meets ASPD. Conduct disorder Criterion C rules it out when ASPD criteria are met (p. 531).",
      "whyNot": [
        "At 18 or older, conduct disorder is not given when ASPD criteria are met.",
        "Correct.",
        "Criterion C makes the two mutually exclusive in adults.",
        "Conduct disorder cannot be diagnosed here because ASPD criteria are met.",
        "His antisocial behavior is broad and largely instrumental, not limited to impulsive outbursts."
      ]
    }
  },
  {
    "id": "v15-19",
    "tag": "Conduct problems during mania",
    "stem": "A 16-year-old girl is admitted in her first manic episode, which began 3 weeks ago: she sleeps 2 hours a night without fatigue, speaks rapidly, believes she will become a famous singer and has spent her savings. During this episode she took her uncle’s car without permission to drive to a concert, shoplifted clothes and got into two fistfights. Her parents and teachers say she had no conduct problems at any time before this episode. She uses no substances.",
    "q": "What is the most accurate formulation?",
    "choices": [
      "Bipolar I disorder, current episode manic, and conduct disorder, adolescent-onset type",
      "Bipolar I disorder, current episode manic, and intermittent explosive disorder",
      "Conduct disorder, adolescent-onset type, only",
      "Bipolar I disorder, current episode manic, and kleptomania",
      "Bipolar I disorder, current episode manic; conduct disorder is not diagnosed"
    ],
    "answer": 4,
    "why": "Conduct problems in mood disorders are separated from conduct disorder by **course**: conduct disorder shows substantial conduct problems **outside periods of mood disturbance**, either before the mood disorder began or as premeditated acts at other times (p. 536). Hers occur only during the manic episode.",
    "whyNot": [
      "Both can be diagnosed only when conduct disorder criteria are met independently of the mood episode.",
      "IED is not diagnosed when outbursts occur only during an episode of another mental disorder such as bipolar disorder.",
      "Her behavior is explained by a clear manic episode.",
      "Stealing during a manic episode is excluded from kleptomania (Criterion E).",
      "Correct."
    ]
  },
  {
    "id": "v15-20",
    "tag": "Conduct problems after a stressor",
    "stem": "A 14-year-old boy’s parents separated 2 months ago. Since then he has skipped school on four days, come home after his curfew several times and got into one fight at school. Before the separation he had no behavior problems, and teachers describe him as well liked. He is not depressed or anxious, has no trauma history and uses no substances. His grades have dropped.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "F91.2 conduct disorder, adolescent-onset type",
      "F91.3 oppositional defiant disorder, mild",
      "F43.24 adjustment disorder with disturbance of conduct",
      "F91.8 other specified disruptive, impulse-control, and conduct disorder",
      "F63.81 intermittent explosive disorder"
    ],
    "answer": 2,
    "why": "Clinically significant conduct problems that begin in **clear association with a stressor** and do not meet another specific disorder point to **adjustment disorder** with disturbance of conduct (p. 537). He does not reach three conduct disorder symptoms: truancy and staying out count only if they began **before 13**, and a single fight is not “often.”",
    "whyNot": [
      "He has no qualifying symptoms: truancy and curfew violations began at 14, and one fight is not frequent fighting.",
      "He has none of the angry or defiant symptoms of ODD, and the behavior has lasted only 2 months.",
      "Correct.",
      "A specific diagnosis, adjustment disorder, explains the presentation.",
      "One fight does not meet A1 or A2, and in ages 6–18 aggression that is part of an adjustment disorder is excluded from IED."
    ]
  },
  {
    "id": "v15-21",
    "tag": "Pyromania",
    "stem": "A 27-year-old man has set five fires in vacant lots and dumpsters over 2 years. Before each fire he feels mounting tension, and he feels relief and pleasure as he watches the flames and the fire trucks arrive. He reads about famous fires, listens to a fire-radio scanner and has applied to join a volunteer fire brigade. He did not gain money, was not angry at anyone, had no political aim, and was not hiding another crime. He is sober each time, has no hallucinations, delusions or manic episodes, has no intellectual or cognitive impairment, and has no history of conduct problems or other antisocial behavior.",
    "q": "What is the diagnosis?",
    "choices": [
      "F91.2 conduct disorder, adolescent-onset type",
      "F63.1 pyromania",
      "F60.2 antisocial personality disorder",
      "F63.81 intermittent explosive disorder",
      "F91.8 other specified disruptive, impulse-control, and conduct disorder"
    ],
    "answer": 1,
    "why": "Deliberate fire setting **more than once**, **tension or arousal before**, **fascination with fire** and its contexts (scanners, fire brigades), and **pleasure or relief** with the fire, with no money, ideology, revenge, crime concealment, psychosis, impaired judgment or antisocial explanation (pp. 537–538).",
    "whyNot": [
      "He has no other conduct problems, and fire setting for its own sake is not explained by conduct disorder.",
      "Correct.",
      "He has no pattern of disregard for others’ rights.",
      "Fire setting is not an aggressive outburst, and he is not angry.",
      "Full criteria for pyromania are met."
    ],
    "then": {
      "q": "Which additional finding would rule out pyromania?",
      "choices": [
        "He planned each fire carefully days in advance",
        "He seemed indifferent to the property damage",
        "He has a history of alcohol use disorder",
        "Each fire was set at the property of someone he wanted to get back at",
        "His fire setting has come and gone in frequency over the years"
      ],
      "answer": 3,
      "why": "Fire setting done **to express anger or vengeance** is excluded by Criterion E (p. 537). The same applies to fires set for money (e.g., insurance), ideology, to hide a crime, to improve living circumstances, in response to delusions or hallucinations, or from impaired judgment.",
      "whyNot": [
        "People with pyromania may prepare considerably in advance; planning does not exclude the diagnosis.",
        "Indifference to consequences is an associated feature.",
        "Alcohol use disorder is common in people who set fires impulsively and does not exclude the diagnosis.",
        "Correct.",
        "Episodes that wax and wane fit the described course."
      ]
    }
  },
  {
    "id": "v15-22",
    "tag": "Fire setting in dementia",
    "stem": "An 80-year-old woman with moderate major neurocognitive disorder due to Alzheimer’s disease has twice set newspapers alight in a metal wastebasket in her room “to warm up.” She describes no tension before, no particular interest in fire and no pleasure afterward. She has no hallucinations or delusions, no history of fire setting, and nothing to gain financially. She had no conduct problems or antisocial behavior earlier in life.",
    "q": "What best explains the fire setting?",
    "choices": [
      "Pyromania",
      "Antisocial personality disorder with late onset",
      "Fire setting for insurance gain",
      "Impaired judgment from her major neurocognitive disorder; pyromania is not diagnosed",
      "Kleptomania"
    ],
    "answer": 3,
    "why": "Pyromania is excluded when fire setting results from **impaired judgment**, as in **major neurocognitive disorder**, intellectual developmental disorder or substance intoxication (Criterion E, p. 537; p. 539). She also lacks the tension, fascination and pleasure that define pyromania.",
    "whyNot": [
      "She lacks tension before, fascination with fire and pleasure or relief, and impaired judgment excludes it.",
      "ASPD requires a pattern since age 15 and evidence of conduct disorder before 15.",
      "She has nothing to gain financially.",
      "Correct.",
      "Kleptomania concerns stealing, not fire setting."
    ]
  },
  {
    "id": "v15-23",
    "tag": "Kleptomania",
    "stem": "A 34-year-old accountant has, for 3 years, taken small items such as lipsticks and key rings from shops about twice a month. She can easily afford them and gives them away or throws them out. Before each theft she feels tension building; during it she feels relief. She acts alone and on the spur of the moment, avoids stealing when security staff are nearby, knows it is wrong and feels guilty afterward. She is not angry at the shops, has no hallucinations or delusions, has never had a manic episode and has no other rule-breaking or antisocial behavior.",
    "q": "What is the diagnosis?",
    "choices": [
      "F63.2 kleptomania",
      "Ordinary shoplifting; no mental disorder",
      "F91.2 conduct disorder, adolescent-onset type",
      "F60.2 antisocial personality disorder",
      "F91.9 unspecified disruptive, impulse-control, and conduct disorder"
    ],
    "answer": 0,
    "why": "Recurrent failure to resist impulses to steal objects **not needed for personal use or their monetary value**, **rising tension before** and **relief during** the theft, not from anger, psychosis, mania or an antisocial pattern (p. 539). Stealing alone, unplanned, and discarding or giving items away are typical (pp. 539–540).",
    "whyNot": [
      "Correct.",
      "Ordinary theft is motivated by the object’s usefulness or value; she neither needs nor values these items.",
      "She has no other conduct problems; a general antisocial pattern distinguishes conduct disorder.",
      "She has no general pattern of antisocial behavior and feels guilt.",
      "Full criteria for kleptomania are met."
    ],
    "then": {
      "q": "Outside the DSM, which treatment has randomized-trial support for reducing her urges and stealing?",
      "choices": [
        "Lithium",
        "Methylphenidate",
        "Naltrexone",
        "Risperidone",
        "No treatment; kleptomania does not respond to any intervention"
      ],
      "answer": 2,
      "why": "Outside the DSM: **naltrexone**, an opioid antagonist, reduced stealing urges and behavior in an 8-week randomized trial (Grant et al., 2009). **CBT** (covert sensitization, exposure) is also used, supported mainly by case series; SSRI evidence is mixed. No drug is FDA-approved for kleptomania.",
      "whyNot": [
        "There is no good evidence for lithium in kleptomania without bipolar disorder.",
        "Stimulants treat ADHD, not kleptomania.",
        "Correct.",
        "Antipsychotics have no established role in kleptomania.",
        "Psychological and drug treatments have evidence of benefit."
      ]
    }
  },
  {
    "id": "v15-24",
    "tag": "Theft that is not kleptomania",
    "stem": "A 29-year-old man is arrested for stealing three new smartphones from an electronics store; he planned the theft for a week, a friend acted as lookout, and he had already listed the phones for sale online. He has a steady job, no previous arrests and no other history of rule breaking. After his lawyer suggests a psychiatric report, he says he has “irresistible urges to steal.” He has no mood elevation, hallucinations or delusions, and no cognitive impairment.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "F63.2 kleptomania",
      "Theft during a manic episode",
      "F60.2 antisocial personality disorder",
      "Kleptomania, because he reports urges he cannot resist",
      "Not kleptomania: the theft was planned, assisted and for monetary gain; consider malingering (Z76.5)"
    ],
    "answer": 4,
    "why": "Ordinary theft is deliberate and driven by the object’s **usefulness or monetary worth**. Kleptomania thefts are **not preplanned** and are done **without help** from others, for items not needed for their value. People may **simulate** kleptomania to avoid prosecution (malingering) (pp. 539–540).",
    "whyNot": [
      "Planning, an accomplice and resale for money contradict kleptomania.",
      "He has no manic symptoms.",
      "He has no general pattern of antisocial behavior or prior conduct problems.",
      "Reported urges after arrest do not outweigh clear evidence of planned theft for profit.",
      "Correct."
    ]
  },
  {
    "id": "v15-25",
    "tag": "Other specified versus unspecified",
    "stem": "A 28-year-old woman has, for 5 months, had verbal tirades and has shoved people, without injury or damage, about once a week, after minor provocations at work. Each outburst is sudden, unplanned and out of proportion, and she gains nothing from it; she has been moved to another team because of them. She has had no outbursts with damage or injury. Between outbursts her mood is normal. She has no depressive, manic or psychotic symptoms, uses no substances, has no medical illness and has no recent stressor.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F63.81 intermittent explosive disorder",
      "F91.9 unspecified disruptive, impulse-control, and conduct disorder",
      "F91.8 other specified disruptive, impulse-control, and conduct disorder, recurrent behavioral outbursts of insufficient frequency",
      "F91.3 oppositional defiant disorder, mild",
      "No diagnosis"
    ],
    "answer": 2,
    "why": "Her outbursts are impairing but occur **once a week**, short of the A1 average of **twice a week**, and she has had no damaging or injurious outbursts for A2. When the clinician states the reason full criteria are not met, the category is **other specified (F91.8)**, and this exact reason is the manual’s example (p. 541).",
    "whyNot": [
      "Once a week is below the twice-weekly A1 frequency, and A2 is not met.",
      "The reason criteria are not met is known and can be stated, so other specified fits better.",
      "Correct.",
      "She has no argumentative, defiant or vindictive pattern.",
      "The outbursts cause clinically significant impairment."
    ],
    "then": {
      "q": "Later that night, a different patient, a 16-year-old boy, is brought to the emergency room by police after damaging a store display and threatening staff. He will not talk, no family or records are available, and he must be transferred within the hour. What is the most appropriate working diagnosis?",
      "choices": [
        "F91.9 conduct disorder, unspecified onset",
        "F91.9 unspecified disruptive, impulse-control, and conduct disorder",
        "F91.8 other specified disruptive, impulse-control, and conduct disorder",
        "F63.81 intermittent explosive disorder",
        "F91.2 conduct disorder, adolescent-onset type"
      ],
      "answer": 1,
      "why": "When disruptive symptoms predominate but there is **not enough information** to make a specific diagnosis or state a reason, such as in **emergency room settings**, the category is **unspecified (F91.9)** (p. 541). Conduct disorder, unspecified onset shares the code F91.9 but requires full conduct disorder criteria.",
      "whyNot": [
        "Conduct disorder criteria (three symptoms in 12 months) cannot be established from a single event.",
        "Correct.",
        "Other specified requires the clinician to state why criteria are not met, which is not possible here.",
        "There is no information about recurrent outbursts or their frequency.",
        "Neither criteria nor age at onset can be established."
      ]
    }
  }
]);
