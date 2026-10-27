/* Chapter 22 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   The conditions in this chapter are not mental disorders and have no criteria sets (p. 821): items test the
   manual's definitions, coding mechanics and exclusions. Every stem states what the `why` relies on: intent (suicidal
   behavior versus NSSI), whether an act was initiated, injury or none, who did what to whom and their relationship,
   confirmed versus suspected, the phase of care (active treatment or a new clinician versus routine recovery care),
   duration, functioning, whether a mental disorder is present or excluded, dependency and age.
   Codes changed after printing are labeled: T14.91XA/XD (APA correction, September 2022), Z91.199 (October 2022),
   Z59.10 (October 2023), Z59.71/Z59.72 (October 2024). Law, ICD-10-CM notes and clinical advice are tagged
   "(outside the DSM)", "(app note)" or "(app guidance)". Abuse, suicidal behavior and self-injury stay at the level of
   the manual's definitions, with a safety-oriented discussion prompt. Disorders from other chapters are named in
   plain text. */
SP.add("ch22", "vignettes", [
  {
    "id": "v22-01",
    "tag": "After an attempt: which codes today?",
    "stem": "A 26-year-old call-center agent is brought to the emergency department of a district hospital in Bataan by her roommate a few hours after a suicide attempt. She tells the triage nurse, and then the psychiatry resident, whom she has never met, that she wanted to die and expected not to wake up. Medical evaluation finds no physical injury, and she needs only observation. At 19 she made a suicide attempt after a breakup and was admitted for it. She now meets criteria for a major depressive episode. The resident is documenting this first evaluation, which is part of her active emergency care.",
    "q": "Which codes from this chapter belong in today’s record, beside her depressive disorder?",
    "choices": [
      "R45.88 current nonsuicidal self-injury, with Z91.52",
      "T14.91XA current suicidal behavior, initial encounter, with Z91.51",
      "T14.91XD current suicidal behavior, subsequent encounter, with Z91.51",
      "T14.91XA alone, because the earlier attempt is too old to record",
      "No suicidal behavior code, because the act caused no injury"
    ],
    "answer": 1,
    "why": "She acted with **explicit intent to die**, and an attempt counts **whether or not it causes injury** (p. 822). An emergency visit and an evaluation by a **new clinician** are **active treatment**, so the encounter character is **A** (p. 822; the printed note calls it the 6th character, but in the corrected code T14.91XA it is the 7th: APA correction, September 2022). The attempt at 19 is recorded with **Z91.51**, which covers suicidal behavior at **any time in her life** (p. 822). The manual prints T14.91A; the APA’s September 2022 correction made it **T14.91XA** (APA coding update; app note). Her major depressive episode is diagnosed in its own right: these conditions are not mental disorders and do not replace one (p. 821).",
    "whyNot": [
      "Nonsuicidal self-injury requires the absence of suicidal intent (p. 822); she said she wanted to die.",
      "Correct.",
      "D is for routine care in the recovery phase after active treatment, such as a later medication adjustment (p. 822); an emergency visit with a new clinician is active treatment.",
      "Z91.51 has no time limit: it applies if suicidal behavior occurred at any point in the lifetime (p. 822).",
      "The manual counts an attempt even when it causes no actual self-injury (p. 822)."
    ],
    "then": {
      "q": "Three weeks after discharge she sees the same psychiatry resident in the outpatient clinic to adjust her antidepressant. She has had no further suicidal behavior, and the visit is routine follow-up care in her recovery. Which code records the recent attempt at this visit?",
      "choices": [
        "T14.91XA, because it is her first outpatient visit",
        "T14.91XD current suicidal behavior, subsequent encounter",
        "Z91.51 only, because the attempt is over",
        "R45.88 current nonsuicidal self-injury",
        "No code: suicidal behavior is recorded only at the emergency visit"
      ],
      "answer": 1,
      "why": "Once active treatment is over and the person is in **routine care during recovery** (medication adjustment, aftercare, follow-up), the encounter character is **D** (p. 822): **T14.91XD** (printed T14.91D; APA correction, September 2022). Z91.51 continues to record the attempt at 19 (p. 822).",
      "whyNot": [
        "A new setting is not a new clinician: she is seeing the same resident for routine aftercare, which the manual places under D (p. 822).",
        "Correct.",
        "The recent attempt is still part of the presentation being followed up, so the current code with D applies; Z91.51 is recorded as well, not instead (p. 822; app reading).",
        "There was suicidal intent, so the nonsuicidal self-injury code does not fit (p. 822).",
        "The manual provides a subsequent-encounter code precisely for these later visits (p. 822)."
      ]
    },
    "discuss": [
      "What should a safety plan at this follow-up visit contain, and who else should know about it (app guidance)?",
      "Why does the 7th character describe the phase of care rather than simply counting visits (pp. 822–823)?"
    ]
  },
  {
    "id": "v22-02",
    "tag": "He changed his mind",
    "stem": "A 41-year-old jeepney operator with moderate alcohol use disorder is brought by his brother to the hospital psychiatrist. Two nights ago, after losing his franchise, he decided to end his life, wrote a farewell message that he never sent, and then thought of his children and decided not to go through with it. He did not begin any act that could have harmed him and has no injury. He has never made a suicide attempt or injured himself before. He still has thoughts of death, drank heavily last night, and lives alone, but agrees to stay with his brother for now.",
    "q": "How should the events of two nights ago be recorded under this chapter?",
    "choices": [
      "T14.91XA current suicidal behavior, initial encounter",
      "Z91.51 history of suicidal behavior",
      "R45.88 current nonsuicidal self-injury",
      "No suicidal behavior code: document the ideation, plan and risk in the assessment, and code his disorder",
      "T14.91XD current suicidal behavior, subsequent encounter"
    ],
    "answer": 3,
    "why": "The category needs behavior that was actually **initiated**: if the person **changes their mind before initiating** it, or is talked out of it by someone else, the manual says it **does not apply** (p. 822). He decided and prepared, then stopped before starting any act. Writing a note is preparation, not an act that could injure him (p. 822; app reading). That is still serious **suicidal ideation with a plan**, which belongs in the risk assessment and safety plan (app guidance). ICD-10-CM has a separate code for suicidal ideation, R45.851, which this chapter does not list (outside the DSM). The current suicidal behavior codes are printed T14.91A/T14.91D; the APA’s September 2022 correction made them T14.91XA/T14.91XD (APA coding update; app note).",
    "whyNot": [
      "No behavior was initiated, so current suicidal behavior is not coded (p. 822).",
      "He has never engaged in suicidal behavior, so there is no history to record (p. 822).",
      "He did nothing to injure himself, and nonsuicidal self-injury needs an act without suicidal intent (p. 822).",
      "Correct.",
      "There was no suicidal behavior and no earlier active treatment for it, so neither the code nor the D fits (p. 822)."
    ],
    "discuss": [
      "Not coding the behavior does not lower the risk. Which features in this stem (a recent loss, heavy drinking, a plan, living alone, male sex) raise your concern (app guidance)?",
      "What would you put in his safety plan, including his brother’s role and his drinking (app guidance)?"
    ]
  },
  {
    "id": "v22-03",
    "tag": "Old scars, new behavior",
    "stem": "A 16-year-old Grade 11 student is referred by her school counselor to a child psychiatrist she has never seen, for low mood over 3 months. Assessment for a depressive disorder is under way. Between ages 13 and 14 she repeatedly cut the skin of her thighs when overwhelmed, causing bleeding; she says she never wanted to die and has never attempted suicide. She stopped about 2 years ago and has not hurt herself since; examination shows only old healed scars. She attends school and passes her subjects.",
    "q": "Which code records the self-injury at this visit?",
    "choices": [
      "Z91.52 history of nonsuicidal self-injury",
      "T14.91XA current suicidal behavior, initial encounter",
      "R45.88 current nonsuicidal self-injury",
      "Z91.51 history of suicidal behavior",
      "No code, because the behavior stopped 2 years ago"
    ],
    "answer": 0,
    "why": "Deliberate self-inflicted damage likely to cause **bleeding**, with **no suicidal intent**, is nonsuicidal self-injury (p. 822). It is **not part of the present picture**: she stopped 2 years ago. The history code **Z91.52** covers NSSI at **any time in the lifetime** (p. 822). The current suicidal behavior codes are printed T14.91A/T14.91D; the APA’s September 2022 correction made them T14.91XA/T14.91XD (APA coding update; app note).",
    "whyNot": [
      "Correct.",
      "She had no intent to die, and there is no current behavior (p. 822).",
      "R45.88 is for NSSI that is part of the current clinical presentation (p. 822); hers stopped 2 years ago.",
      "Z91.51 records past suicidal behavior, which needs some intent to die (p. 822).",
      "A lifetime history is exactly what Z91.52 records (p. 822), and it matters for her current depressive symptoms (app guidance)."
    ],
    "then": {
      "q": "At the second session she tells you that last week, after a fight with her mother, she burned the skin of her forearm, and has done it twice since. She again denies any wish to die, and careful questioning finds no suicidal intent. What now?",
      "choices": [
        "Keep Z91.52 only, since the behavior is the same kind as before",
        "Replace the record with T14.91XD",
        "Add Z91.51 history of suicidal behavior",
        "Add R45.88 current nonsuicidal self-injury",
        "Code Z62.820 parent–biological child relational problem instead of any self-injury code"
      ],
      "answer": 3,
      "why": "The self-injury is again **part of the clinical presentation**, so **R45.88** applies (p. 822). Intent is what separates this entry from suicidal behavior, and it can be **inferred from circumstances** as well as stated (p. 822), so it must be **re-asked at every visit** (app guidance); here it is absent.",
      "whyNot": [
        "Z91.52 records a past history; current behavior needs R45.88 (p. 822).",
        "There is no intent to die, so the suicidal behavior codes do not apply (p. 822).",
        "She has never engaged in suicidal behavior (p. 822).",
        "Correct.",
        "The conflict with her mother may also become a focus (p. 829), but a relational code does not record self-injury (p. 822; app reading)."
      ]
    },
    "discuss": [
      "How would you ask about intent and severity at each visit without making her less willing to tell you (app guidance)?",
      "Which safety steps, including a conversation with her mother, would you take this week (app guidance)?"
    ]
  },
  {
    "id": "v22-04",
    "tag": "Injuries that do not fit the story",
    "stem": "A 4-year-old boy is admitted to the pediatric ward with bruises of different ages on his back and buttocks and a healing rib fracture on x-ray. His father, who looks after him on weekdays, says he fell off a bed; the pediatricians judge the injuries inconsistent with that account. The hospital child protection unit has opened an investigation, which is not finished. The child psychiatry service, which has never seen him, is asked to evaluate him on the ward as part of his active care.",
    "q": "Which code best records the maltreatment at this consultation?",
    "choices": [
      "T74.12XA child physical abuse, confirmed, initial encounter",
      "T76.12XD child physical abuse, suspected, subsequent encounter",
      "Z62.810 personal history (past history) of physical abuse in childhood",
      "No abuse code until the investigation ends",
      "T76.12XA child physical abuse, suspected, initial encounter"
    ],
    "answer": 4,
    "why": "Nonaccidental injury to a child, from bruises to fractures, by a parent or other person responsible for him is child physical abuse **whether or not** the adult meant to hurt him (p. 823). The event is **not yet confirmed**, so the **suspected** code (T76) applies (p. 823). He is in active treatment and is being evaluated by a **new clinician**, so the 7th character is **A** (p. 823). Because abuse codes carry legal implications, the manual asks for **care** in assigning them (p. 822); the suspected code exists for this situation.",
    "whyNot": [
      "The investigation has not confirmed the abuse; T74 is for confirmed events (p. 823).",
      "He is in active treatment with a new clinician, which is A, not D (p. 823).",
      "A history code records past abuse; this is a current, suspected event (p. 823).",
      "The suspected code lets the concern be recorded before confirmation (p. 823).",
      "Correct."
    ],
    "then": {
      "q": "Six weeks later the investigation has confirmed that his father caused the injuries. He has been placed with his maternal aunt and sees the same child psychiatrist in the clinic for routine follow-up of trauma symptoms; the visit is to provide him with mental health services. Which pair is right?",
      "choices": [
        "T74.12XD with Z69.010",
        "T74.12XA with Z69.020",
        "T76.12XD with Z69.010",
        "T74.12XD with Z69.011",
        "Z62.810 with Z69.010"
      ],
      "answer": 0,
      "why": "The abuse is now **confirmed** (T74.12) and this is **routine follow-up after active treatment** (D) (p. 823). The encounter provides mental health services to the **victim of abuse by a parent**: **Z69.010** (p. 823).",
      "whyNot": [
        "Correct.",
        "He is past active treatment, and the abuser is his parent, so neither A nor the nonparental code Z69.020 fits (p. 823).",
        "The abuse has been confirmed, so the suspected code no longer applies (p. 823).",
        "Z69.011 is for mental health services to the perpetrator of parental abuse, not to the child (p. 823).",
        "The abuse is a current focus of his care, not only a past history (p. 823; app reading)."
      ]
    },
    "discuss": [
      "What are your reporting duties when a child’s injuries suggest abuse (outside the DSM: RA 7610 and your hospital’s child protection unit protocol)?",
      "How would you talk with a 4-year-old about what happened without leading him (app guidance)?"
    ]
  },
  {
    "id": "v22-05",
    "tag": "Spanking: where the line is",
    "stem": "A couple bring their 8-year-old daughter, who has attention-deficit/hyperactivity disorder, to her psychiatrist for a scheduled follow-up. The father mentions that once or twice a month, when she runs into the street, he spanks her with an open hand on the buttocks. There are no marks or injuries, the girl says she is not afraid of her father and describes a warm relationship with him, and there are no other concerns about her care, supervision or schooling. The parents ask whether this counts as abuse.",
    "q": "How does the manual classify the spanking described?",
    "choices": [
      "T74.32XA child psychological abuse, confirmed",
      "T76.12XA child physical abuse, suspected",
      "Not abuse: reasonable physical discipline that causes no bodily injury",
      "T76.02XA child neglect, suspected",
      "Z62.820 parent–biological child relational problem, which must be coded whenever physical discipline is used"
    ],
    "answer": 2,
    "why": "The manual states that physical discipline such as **spanking or paddling** is not abuse **provided it is reasonable and leaves no bodily injury** (p. 823). Nothing in the stem suggests injury, fear or other maltreatment. Clinicians may still discuss alternatives to physical punishment (app guidance), and local law or policy may set a stricter standard than the DSM (outside the DSM).",
    "whyNot": [
      "Psychological abuse needs acts that cause or could cause significant psychological harm, such as discipline at an extremely high frequency or duration (p. 825); infrequent spanking without fear does not fit.",
      "There is no nonaccidental injury and no other reason to suspect abuse (p. 823).",
      "Correct.",
      "Her basic needs are met; nothing points to neglect (p. 824).",
      "A relational code is used when the quality of the relationship is the focus or affects a disorder (p. 829), never automatically; here the relationship is warm."
    ],
    "then": {
      "q": "Some months later a teacher reports that the girl is exhausted and tearful. Social services confirm that for the past 4 months her father has punished every minor misbehavior by making her kneel or stand facing a wall for 2 to 3 hours most evenings while shouting that she is worthless, and on several nights locked her in a small storage room. She has no bruises or other injuries. She is referred urgently to the hospital’s child protection psychiatrist, who has not seen her before, to evaluate and begin treatment. Which category applies?",
      "choices": [
        "T74.12XA child physical abuse, confirmed",
        "Z62.820 parent–biological child relational problem only",
        "T74.32XA child psychological abuse, confirmed",
        "T76.32XA child psychological abuse, suspected",
        "Not abuse, because no injury occurred"
      ],
      "answer": 2,
      "why": "Discipline at an **extremely high frequency or duration**, even short of physical abuse and whether physical or not, is **psychological abuse**; so are berating and humiliating the child and **confining** her in a small enclosed space (p. 825). Social services have **confirmed** it (T74.32). A applies **while she is receiving active treatment** for the abuse, and evaluation and treatment by a **new clinician** is one of the coding note’s examples (A) (pp. 823, 825).",
      "whyNot": [
        "Physical abuse is nonaccidental physical injury (p. 823); she has none, and the manual places excessive discipline without injury under psychological abuse (p. 825).",
        "A relational code does not capture confirmed maltreatment with harm (pp. 825, 829).",
        "Correct.",
        "Social services have confirmed the events (p. 825).",
        "Psychological abuse needs no physical injury; the harm is psychological (p. 825)."
      ]
    },
    "discuss": [
      "How would you explain to these parents the difference between firm discipline and excessive discipline (app guidance)?",
      "What has to happen today to keep her safe at home (app guidance; RA 7610 reporting, outside the DSM)?"
    ]
  },
  {
    "id": "v22-06",
    "tag": "Abuse without contact",
    "stem": "A 12-year-old girl is brought by her grandmother to a child psychiatrist for the first time, after police removed her from her mother’s home. A completed police investigation established that over 6 months her mother pressured and threatened her into sexual acts performed in front of a webcam for paying adult viewers abroad. The mother never touched her sexually, and there was no physical contact with any viewer. The girl has nightmares and avoids school. She is now in active evaluation and treatment.",
    "q": "Which code records the maltreatment at this initial encounter?",
    "choices": [
      "T74.32XA child psychological abuse, confirmed",
      "T74.22XA child sexual abuse, confirmed",
      "T74.02XA child neglect, confirmed",
      "T76.22XA child sexual abuse, suspected",
      "No sexual abuse code, because there was no physical contact"
    ],
    "answer": 1,
    "why": "Child sexual abuse includes **noncontact exploitation** by a parent or caregiver: forcing, tricking, enticing, threatening or pressuring a child into acts for **other people’s sexual gratification**, with **no direct physical contact** between child and abuser (pp. 823–824). It is **confirmed** by the completed investigation (T74.22), and this is **active** treatment by a new clinician (A) (p. 823). ICD-10-CM also has forced sexual exploitation codes (T74.5-/T76.5-) that the DSM does not list (outside the DSM; app note). Her symptoms are assessed in their own right, for example for PTSD (app guidance).",
    "whyNot": [
      "Psychological abuse excludes sexual acts, which have their own category (p. 825).",
      "Correct.",
      "Neglect is deprivation of basic needs; this was active sexual exploitation (pp. 823–824).",
      "The investigation has confirmed the events, so the suspected code is not the best record (p. 823).",
      "The manual explicitly includes noncontact exploitation in child sexual abuse (p. 824)."
    ],
    "discuss": [
      "Which encounter code would you add if the visit is to provide her with mental health services, given that the abuser was her mother (p. 824)?",
      "What does a trauma-informed first interview with her look like, and who else must be involved (app guidance; child protection law, outside the DSM)?"
    ]
  },
  {
    "id": "v22-07",
    "tag": "Alone at night, with means at home",
    "stem": "A 3-year-old boy is brought to the emergency department by a neighbor who found him alone in the house at night, the third time this month. He is underweight, has untreated scabies and has missed all his vaccinations. Both parents have steady jobs, the household has food and money, and the barangay health worker reports that they have repeatedly declined free clinic visits. He has no injuries. Social services have opened a case but have not completed it. A child psychiatrist new to the family sees him in the emergency department.",
    "q": "Which code fits best?",
    "choices": [
      "Z59.5 extreme poverty",
      "T74.02XA child neglect, confirmed, initial encounter",
      "Z62.820 parent–biological child relational problem",
      "T76.02XA child neglect, suspected, initial encounter",
      "T76.12XA child physical abuse, suspected"
    ],
    "answer": 3,
    "why": "Child neglect is a confirmed or suspected **egregious act or omission** by a parent or caregiver that **deprives** the child of **basic age-appropriate needs** and causes, or could reasonably cause, harm; the forms include **abandonment**, **lack of supervision**, and failure to provide **medical care** and **nourishment** (p. 824). The family has the means, so poverty does not explain the deprivation. The case is **not completed** (T76.02), and the emergency visit with a new clinician is **A** (p. 823).",
    "whyNot": [
      "The household has steady income and food; the deprivation comes from the caregiving, not from money (pp. 824, 832).",
      "Social services have not finished their assessment, so the event is not yet confirmed (p. 823).",
      "A relational code does not record deprivation of basic needs with harm (pp. 824, 829).",
      "Correct.",
      "There is no nonaccidental injury (p. 823); his problems come from omission."
    ],
    "discuss": [
      "How would your thinking change if the parents had no income and no food? Which economic code might apply, and would neglect still need assessment (app guidance)?",
      "What does this child need in the next 24 hours (app guidance)?"
    ]
  },
  {
    "id": "v22-08",
    "tag": "Afraid, but never injured",
    "stem": "A 30-year-old schoolteacher attends her first appointment with a psychiatrist, referred by the police Women and Children Protection Desk. Over 8 months her husband has shoved her against walls, pinned her arms down during arguments and thrown dishes at her; none of this has ever left a mark or injury. She is now afraid of him every evening. A neighbor witnessed two incidents and the police record documents them, so the violence is confirmed. She has never struck him. She sleeps poorly but keeps working. The appointment is to provide her with mental health services.",
    "q": "Which codes fit?",
    "choices": [
      "T74.11XA with Z69.11",
      "Z63.0 relationship distress with spouse or intimate partner",
      "T76.11XA with Z69.11",
      "T74.11XA with Z69.12",
      "No violence code, because there was no physical injury"
    ],
    "answer": 0,
    "why": "Partner physical violence is nonaccidental physical force that causes or could reasonably cause physical harm, **or that evokes significant fear** (p. 826); shoving, restraining and throwing are on the manual’s list. **No injury is needed**. It is **confirmed** (T74.11), this is active care with a new clinician (A), and the visit provides mental health services to the **victim** (**Z69.11**) (pp. 823, 826).",
    "whyNot": [
      "Correct.",
      "Relationship distress does not cover nonaccidental force that frightens the partner (pp. 826, 829).",
      "A witness and a police record confirm the events (p. 826).",
      "Z69.12 is for the perpetrator (p. 826).",
      "Force that could cause harm or that evokes significant fear qualifies without injury (p. 826)."
    ],
    "then": {
      "q": "At her third session, routine follow-up with the same psychiatrist, she discloses that her husband has repeatedly threatened to leave her without money unless she agreed to sex when she had refused, and that she complied against her will. The visit is to provide her with mental health services. Which victim encounter code goes with the partner sexual violence?",
      "choices": [
        "Z69.11",
        "Z69.12",
        "Z91.410",
        "Z69.81",
        "Z69.010"
      ],
      "answer": 3,
      "why": "Physical force **or psychological coercion** to make a partner take part in a sexual act **against their will**, completed or not, is **partner sexual violence** (p. 826). Its victim encounter code is **Z69.81**, not the Z69.11 used for partner physical violence, neglect and psychological abuse (pp. 826–827). The perpetrator code (Z69.12) and the history code (Z91.410) are shared with physical violence (p. 826).",
      "whyNot": [
        "Z69.11 is the victim code for partner physical violence, neglect and psychological abuse, not sexual violence (pp. 826–827).",
        "Z69.12 is for the perpetrator (p. 826).",
        "Z91.410 records a past history, not a mental health encounter (p. 826).",
        "Correct.",
        "Z69.010 is for a child victim of abuse by a parent (p. 823)."
      ]
    },
    "discuss": [
      "What does a safety assessment and plan look like for her before she goes home tonight (app guidance)?",
      "Which Philippine law covers violence against women by an intimate partner, and how does it shape your documentation (outside the DSM: RA 9262)?"
    ]
  },
  {
    "id": "v22-09",
    "tag": "A dependent husband left alone",
    "stem": "A 58-year-old former fisherman has had tetraplegia since a fall 2 years ago and depends entirely on his wife for feeding, medicines, turning and toileting. A visiting nurse finds him dehydrated, with infected pressure sores and none of his medicines given for a week; his wife has been away for days at a time and left no one with him. He is cognitively intact and says he is frightened of being left alone. The barangay social worker has filed a report, which has not yet been investigated. The psychiatry consult service sees him for the first time on the medical ward.",
    "q": "Which category and code fit best?",
    "choices": [
      "Z63.0 relationship distress with spouse or intimate partner",
      "T76.31XA spouse or partner abuse, psychological, suspected",
      "T74.01XA spouse or partner neglect, confirmed",
      "T76.02XA child neglect, suspected",
      "T76.01XA spouse or partner neglect, suspected"
    ],
    "answer": 4,
    "why": "Partner neglect is an **egregious act or omission** that deprives a **dependent** partner of basic needs with actual or potential harm. The manual places it in relationships where one partner is **extremely dependent** on the other for care because of substantial physical, psychological/intellectual or cultural limitations (pp. 826–827). He depends on her completely and has been harmed. The report is **not yet investigated** (T76.01), and this is active care with a new clinician (A) (pp. 823, 827).",
    "whyNot": [
      "Distress about the relationship does not describe deprivation of a dependent partner’s basic needs with harm (pp. 826–827, 829).",
      "The problem is omission of care, not verbal or symbolic acts (pp. 826–827).",
      "The event has not been confirmed (p. 827).",
      "The child codes are for child victims; partner neglect has its own adult code (pp. 824, 826–827).",
      "Correct."
    ],
    "discuss": [
      "What would you want to know about his wife’s own health, burden and support before planning (app guidance)?",
      "Which immediate safety and care arrangements must be in place before he is discharged (app guidance)?"
    ]
  },
  {
    "id": "v22-10",
    "tag": "Money, phone and “you’re imagining it”",
    "stem": "A 35-year-old pharmacist sees a psychiatrist for the first time for anxiety and low mood. For 2 years her husband has taken her whole salary each payday and given her a small allowance, checked her phone every night, stopped her visiting her parents, and told her she is “imagining things” and “going crazy” whenever she recalls something he said. He has never used physical force or forced sex, and she does not fear physical harm. She is not dependent on him for care. Her sister has witnessed much of this and she shows messages that document it, so the account is confirmed. She continues to work.",
    "q": "Which category best describes what her husband is doing?",
    "choices": [
      "T74.01XA spouse or partner neglect, confirmed",
      "Z63.0 relationship distress with spouse or intimate partner",
      "T74.31XA spouse or partner abuse, psychological, confirmed",
      "T74.11XA spouse or partner violence, physical, confirmed",
      "Z59.6 low income"
    ],
    "answer": 2,
    "why": "Partner psychological abuse covers one partner’s nonaccidental verbal or symbolic acts with actual or potential **significant harm**, including **unwarranted restriction of economic resources**, **isolating** the victim from family, **interrogating** and monitoring, and **gaslighting**: trying to make the victim doubt their own sanity (p. 827). Confirmed, initial encounter: **T74.31XA** (p. 827). Her anxiety and low mood are assessed for a disorder in their own right (app guidance).",
    "whyNot": [
      "Neglect needs a dependent partner deprived of basic needs (pp. 826–827); she is independent.",
      "Relationship distress describes problems in the quality of the relationship such as conflict, withdrawal and negative attributions (p. 829); one-sided control, isolation and gaslighting are abuse (p. 827).",
      "Correct.",
      "There has been no physical force and she does not fear physical harm (p. 826).",
      "Her household income is not low; the problem is her husband’s control over it (pp. 827, 832)."
    ],
    "discuss": [
      "Why can psychological abuse be harder to recognize than physical violence, and which questions bring it out (app guidance)?",
      "Which safety and legal resources would you discuss with her (outside the DSM: RA 9262 also covers psychological and economic abuse)?"
    ]
  },
  {
    "id": "v22-11",
    "tag": "Assaulted by his son",
    "stem": "A 79-year-old widower with well-controlled hypertension lives with his 45-year-old son. He is brought to the emergency department with a forearm fracture and facial bruises. He says, and a neighbor who saw it confirms, that his son pushed him to the ground and punched him during an argument; the police have documented the assault. Cognitive testing is normal. The psychiatry consult team sees him for the first time on the ward, to provide him with mental health services.",
    "q": "Which codes fit?",
    "choices": [
      "T74.11XA with Z69.11",
      "T74.11XA with Z69.81",
      "T74.12XA with Z69.010",
      "T76.11XA with Z69.81",
      "T74.11XA with Z69.82"
    ],
    "answer": 1,
    "why": "This is maltreatment of an adult by **a second adult who is not their intimate partner** (pp. 827–828). The event codes are the **adult** ones, **the same** as for partner physical violence: confirmed, initial encounter, **T74.11XA** (p. 828). The relationship shows in the encounter code: **Z69.81**, mental health services for the victim of nonspousal or nonpartner adult abuse (p. 828).",
    "whyNot": [
      "Z69.11 is for the victim of partner violence; the abuser is his son, not his partner (pp. 826, 828).",
      "Correct.",
      "The child codes describe a victim who is a child, not an abuser who is someone’s child (pp. 823, 828).",
      "A witness and the police record confirm the event (p. 828).",
      "Z69.82 is for the perpetrator (p. 828)."
    ],
    "discuss": [
      "Elder abuse often comes in several forms at once. Which questions about money, isolation and threats would you add (pp. 827–828; app guidance)?",
      "Where can he safely go on discharge, and who should be involved (app guidance)?"
    ]
  },
  {
    "id": "v22-12",
    "tag": "Lola in the parent’s role",
    "stem": "A 68-year-old grandmother has been the primary caregiver of her two grandsons, now 13 and 10, since their parents went to work overseas 6 years ago; the parents call weekly. She brings the 13-year-old, who has no mental disorder on full evaluation, because the two of them argue daily about phone use and curfew, she swings between hovering over him and giving up, and he says she “hates him.” His grades have slipped. He says he does not mind living with her and is not troubled by his parents’ absence. There is no violence or threat of violence. She asks for help with their relationship.",
    "q": "Which code fits best?",
    "choices": [
      "Z62.820 parent–biological child relational problem",
      "Z62.29 upbringing away from parents",
      "Z63.8 high expressed emotion level within family",
      "Z62.898 other caregiver–child relational problem",
      "Z62.891 sibling relational problem"
    ],
    "answer": 3,
    "why": "In this category a **parent** is any of the child’s **primary caregivers**, including a relative such as a **grandparent** in a parental role (p. 829). The focus is the **quality** of their relationship, with behavioral (overprotection alternating with too little supervision), cognitive (negative attributions) and affective problems (p. 829). The specific codes name biological, adoptive and foster parents, so a grandparent caregiver is recorded with **Z62.898 other caregiver–child** (p. 829; app reading).",
    "whyNot": [
      "She is his grandmother, not his biological parent (p. 829).",
      "Z62.29 is for when the focus is being raised away from the parents (p. 829); he is untroubled by that, and the request is about the caregiver relationship.",
      "Expressed emotion describes a family-wide climate of hostility, overinvolvement and criticism toward an identified patient (p. 830); here the problem is the quality of one caregiver–child relationship (p. 829).",
      "Correct.",
      "The conflict is between caregiver and child, not between the brothers (p. 829)."
    ],
    "then": {
      "q": "Two months later the arguments with the grandmother have settled. Now the brothers fight daily, the 10-year-old has stopped eating with the family and has stomachaches before school, and the household is in turmoil. Neither boy meets criteria for a mental disorder. Which code fits?",
      "choices": [
        "Z62.898 other caregiver–child relational problem",
        "Z62.891 sibling relational problem",
        "Z63.5 disruption of family by separation or divorce",
        "Z60.4 social exclusion or rejection",
        "Z62.29 upbringing away from parents"
      ],
      "answer": 1,
      "why": "A **pattern of interaction among siblings** linked to significant impairment in family functioning, or to **symptoms** in one of them, is **Z62.891** (p. 829). It can be used for children or adults, and for full, half-, step-, foster and adopted siblings (p. 829).",
      "whyNot": [
        "The caregiver relationship is no longer the focus (p. 829).",
        "Correct.",
        "Z63.5 is for partners living apart because of relationship problems or divorcing (p. 830).",
        "Z60.4 describes recurrent exclusion by others in the social environment with a power imbalance, such as bullying by peers (p. 832); this is a family relationship.",
        "Being raised away from the parents is not the current focus (p. 829)."
      ]
    },
    "discuss": [
      "How would you take the boys’ developmental needs and the family’s cultural context into account, as the manual asks (p. 829)?",
      "What support exists in your area for children of overseas Filipino workers and their caregivers (app guidance)?"
    ]
  },
  {
    "id": "v22-13",
    "tag": "Distress, not abuse",
    "stem": "A married couple in their late 30s ask for couples sessions. For a year they have argued about money and his long work hours; arguments end with both withdrawing for days, each assumes the worst about the other’s motives, and she says he never notices what she does for the family. Neither has ever used physical force or threats, or tried to control the other’s money, movements or contacts, and neither is afraid of the other. Both work and function well, and assessment finds no mental disorder in either.",
    "q": "Which code fits?",
    "choices": [
      "Z63.0 relationship distress with spouse or intimate partner",
      "T74.31XA spouse or partner abuse, psychological, confirmed",
      "Z63.5 disruption of family by separation or divorce",
      "Z63.8 high expressed emotion level within family",
      "Z56.3 stressful work schedule"
    ],
    "answer": 0,
    "why": "The **major focus** is the **quality** of the intimate relationship, with **behavioral** (difficulty resolving conflict, withdrawal), **cognitive** (chronic negative attributions, dismissing the partner’s positive behavior) and **affective** problems (p. 829): **Z63.0**. There is no control, force, threat or fear, so none of the partner abuse categories applies (pp. 826–827).",
    "whyNot": [
      "Correct.",
      "Psychological abuse is one partner’s nonaccidental acts with actual or potential significant harm, such as control, isolation, threats or gaslighting (p. 827); this is mutual conflict.",
      "They live together and are not divorcing (p. 830).",
      "Expressed emotion describes a family’s hostility, overinvolvement and criticism toward an identified patient (p. 830); this is mutual conflict between two partners about the quality of their relationship (p. 829).",
      "His hours are one topic of conflict, but the focus of care is the relationship (p. 829)."
    ],
    "then": {
      "q": "Their 9-year-old son has wet the bed twice in the past month after years of dryness and is irritable at school. He hears the arguments at night, and each parent criticizes the other to him. Evaluation finds no mental disorder in him, and the parents ask for help for him. Which code fits the son?",
      "choices": [
        "Z63.0 relationship distress with spouse or intimate partner",
        "Z63.5 disruption of family by separation or divorce",
        "Z62.820 parent–biological child relational problem",
        "Z62.898 child affected by parental relationship distress",
        "Adjustment disorder"
      ],
      "answer": 3,
      "why": "When the focus is the **negative effect of parental relationship discord** (high conflict, distress or disparagement) on a **child** in the family, the code is **Z62.898 child affected by parental relationship distress** (p. 830). The same number is used for other caregiver–child relational problem; the recorded name tells them apart (pp. 829–830; app reading).",
      "whyNot": [
        "Z63.0 records the parents’ own relationship problem (p. 829), not its effect on the child.",
        "The parents are neither living apart nor divorcing (p. 830).",
        "The problem is the parents’ conflict and its effect on him, not the quality of his relationship with either parent (pp. 829–830).",
        "Correct.",
        "Evaluation found no mental disorder; the Z code records the problem without a diagnosis (p. 821)."
      ]
    },
    "discuss": [
      "How would you help the parents stop disparaging each other in front of their son (app guidance)?",
      "What would make you reconsider a disorder in the child at follow-up (app guidance)?"
    ]
  },
  {
    "id": "v22-14",
    "tag": "A family that cares too loudly",
    "stem": "A 24-year-old man with schizophrenia, treated with clozapine, lives with his parents and two sisters. He has relapsed twice in the past year, each time within weeks of a family crisis. On home visits the team sees his mother check on him every hour and answer for him, his father call him lazy in front of guests, and his sisters argue with him about his illness every day. The family care about him and want help. He takes his medicine reliably, confirmed by blood levels.",
    "q": "Which code best captures the family problem the team will target?",
    "choices": [
      "Z62.891 sibling relational problem",
      "Z62.820 parent–biological child relational problem",
      "Z63.0 relationship distress with spouse or intimate partner",
      "Z91.199 nonadherence to medical treatment (printed as Z91.19; APA coding update, October 2022)",
      "Z63.8 high expressed emotion level within family"
    ],
    "answer": 4,
    "why": "Expressed emotion is a qualitative measure of the **hostility, emotional overinvolvement and criticism** a family directs at a member who is an **identified patient** (p. 830). It is coded when it is the focus of attention or affects the course of that member’s disorder (p. 830): here, schizophrenia with repeated relapse. It is recorded **with** schizophrenia, not instead of it (p. 821).",
    "whyNot": [
      "The sisters’ arguing is part of a family-wide pattern aimed at him, which Z63.8 describes better (p. 830).",
      "The problem is the whole family’s emotional climate toward an identified patient, which has its own code (p. 830); the parent-child category concerns the quality of one parent-child relationship (p. 829).",
      "He has no partner; Z63.0 is for spouses or intimate partners (p. 829).",
      "Blood levels confirm that he takes his medicine (p. 835).",
      "Correct."
    ],
    "then": {
      "q": "He has gained 15 kg on clozapine, eats mostly fast food and stays indoors all day; his inactivity is partly a negative symptom. Because his weight and blood sugar now affect his treatment, the team makes exercise and diet a specific focus of care. How should the lifestyle problem be recorded?",
      "choices": [
        "Do not code it, because it is a symptom of schizophrenia",
        "Z72.9 problem related to lifestyle instead of schizophrenia",
        "E66.9 overweight or obesity and nothing else",
        "Z71.3 dietary counseling instead of schizophrenia",
        "Z72.9 problem related to lifestyle together with schizophrenia"
      ],
      "answer": 4,
      "why": "A problem that is due to a **symptom** of a mental disorder is **not coded** unless it is a **specific focus of treatment** or **directly affects** course, prognosis or treatment; when it is, **both** the disorder and the lifestyle problem are coded (p. 833). Lack of exercise and an inappropriate diet are now a specific focus.",
      "whyNot": [
        "The symptom rule has an exception: when the problem is a specific focus of treatment or directly affects it, it is coded (p. 833).",
        "A Z code never replaces a diagnosis that is met (p. 821); the manual asks for both (p. 833).",
        "E66.9 may be added when overweight is a focus (p. 835), but it does not record the inactivity and diet being targeted, and schizophrenia must still be coded (p. 833).",
        "Z71.3 is for a person seeking dietary counseling (p. 834); it neither replaces the diagnosis nor describes the lifestyle problem.",
        "Correct."
      ]
    },
    "discuss": [
      "What does family psychoeducation try to change, and how would you know it had worked (app guidance)?",
      "Which metabolic checks would you schedule for him on clozapine (outside the DSM)?"
    ]
  },
  {
    "id": "v22-15",
    "tag": "Orders to sail",
    "stem": "A 32-year-old Philippine Navy petty officer is scheduled to start a 9-month deployment at sea next month. His wife has a new baby, his mother is ill, and his absence will leave no one to manage the family’s affairs; his unit has refused a delay. He asks the psychiatrist for help documenting the problem for a deferment request. His mood, sleep, appetite and concentration are normal, he has realistic worry but no anxiety beyond it, and he is working fully. He has no mental disorder.",
    "q": "Which code fits?",
    "choices": [
      "Adjustment disorder, unspecified",
      "Z91.82 personal history of military deployment",
      "Z56.82 problem related to current military deployment status",
      "Z56.4 discord with boss and workmates",
      "Z63.5 disruption of family by separation or divorce"
    ],
    "answer": 2,
    "why": "**Z56.82** is used when an **occupational problem** directly related to **current deployment status** is the focus of attention (p. 830). He has no psychological reaction amounting to a disorder; the problem is practical and occupational.",
    "whyNot": [
      "He has no emotional or behavioral symptoms beyond realistic worry and no impairment (Chapter 7; app reading).",
      "Z91.82 records a past deployment as personal history (p. 833); this one is current and upcoming.",
      "Correct.",
      "The problem is deployment itself, which has its own code (p. 830).",
      "The couple are not living apart because of relationship problems or divorcing (p. 830)."
    ],
    "then": {
      "q": "Six weeks into the deployment he is sent home on emergency leave. Since the first 2 weeks at sea he has been tearful and unable to sleep, has stopped eating with his crew, and has made errors on duty that led to a reprimand. He does not meet criteria for a major depressive episode or any other specific disorder, and he has no suicidal thoughts. What now?",
      "choices": [
        "Z56.82 alone, because the trigger is deployment",
        "Z91.82 personal history of military deployment alone",
        "Z65.5 exposure to disaster, war or other hostilities",
        "Uncomplicated bereavement",
        "An adjustment disorder"
      ],
      "answer": 4,
      "why": "**Psychological reactions to deployment** are **not** included in Z56.82; the manual says they are better captured as an **adjustment disorder** or another mental disorder (p. 830). Distress and impaired work starting within weeks of the stressor, with no other disorder, fits an adjustment disorder (Chapter 7; app reading). Z56.82 may still be added if the occupational problem itself stays a focus (app guidance).",
      "whyNot": [
        "The manual excludes psychological reactions from Z56.82 (p. 830).",
        "A history code does not record a current reaction (pp. 830, 833).",
        "Nothing describes combat, disaster or hostilities (p. 833).",
        "No one has died (p. 834).",
        "Correct."
      ]
    },
    "discuss": [
      "How would you assess suicide risk in a service member far from his family, even when he denies suicidal thoughts (app guidance)?",
      "Which other entry in the chapter excludes the psychological reaction in the same way (Z59.3, p. 831)?"
    ]
  },
  {
    "id": "v22-16",
    "tag": "Nine in one room",
    "stem": "A 44-year-old woman with panic disorder lives with her husband and six children in a single rented room in a coastal settlement. The room has no electricity, the toilet is shared by twelve households and often blocked, rats come in at night, and there is not enough floor space for everyone to lie down, so the children sleep in shifts. Her panic attacks are worse at night and she cannot follow the sleep advice she was given. The team agrees the housing conditions are affecting her treatment. These conditions are unusual in her community, where most families have electricity and room to sleep.",
    "q": "Which code records the housing problem (current code)?",
    "choices": [
      "Z59.02 unsheltered homelessness",
      "Z59.10 inadequate housing (printed as Z59.1; APA coding update, effective October 1, 2023)",
      "Z59.2 discord with neighbor, lodger or landlord",
      "Z59.6 low income",
      "Z59.3 problem related to living in a residential institution"
    ],
    "answer": 1,
    "why": "No **electricity**, inadequate **plumbing and toilets**, **infestation**, **overcrowding** and too little **sleeping space** are the manual’s examples of **inadequate housing**, coded when it affects treatment or prognosis, after considering **cultural norms** (p. 831). The printed Z59.1 became **Z59.10** on October 1, 2023, when ICD-10-CM subdivided the code (APA coding update, September 2023; app note).",
    "whyNot": [
      "She has a home meant for living in; unsheltered homelessness means residing somewhere not meant for human habitation (p. 831).",
      "Correct.",
      "No discord is described (p. 831).",
      "Income may contribute, but the problem affecting her treatment is the housing itself (pp. 831–832).",
      "She lives in a rented room, not an institution (p. 831)."
    ],
    "then": {
      "q": "Three months later the family is evicted. For 2 weeks they slept in a bus terminal; now they have places in a church-run transitional shelter, where they stay every night. Her psychiatrist sees her today. Which housing code applies now?",
      "choices": [
        "Z59.01 sheltered homelessness",
        "Z59.02 unsheltered homelessness",
        "Z59.10 inadequate housing",
        "Z59.9 other housing problem",
        "Z59.3 problem related to living in a residential institution"
      ],
      "answer": 0,
      "why": "Homelessness is **sheltered** when the main nighttime residence is a homeless, warming or domestic violence shelter, a motel, or a **temporary or transitional** living situation (p. 831): **Z59.01**. The 2 weeks in the bus terminal, a public space not meant for habitation, would have been **Z59.02** at the time (p. 831).",
      "whyNot": [
        "Correct.",
        "That applied while they slept in the terminal; they now sleep in a shelter (p. 831).",
        "They no longer have housing of their own (p. 831).",
        "A specific code exists (p. 831).",
        "A transitional shelter for homeless families is sheltered homelessness, not a residential institution (p. 831; app reading)."
      ]
    },
    "discuss": [
      "Which of the manual’s four reasons to code (p. 821) justifies recording her housing in a psychiatric note?",
      "Who on the team should own the housing problem, and how will you follow it up (app guidance)?"
    ]
  },
  {
    "id": "v22-17",
    "tag": "Bullied, or discriminated against?",
    "stem": "A 13-year-old boy, small for his age, has missed school for 3 weeks. For most of the school year a group of older, bigger classmates has repeatedly pushed him aside in the hallway, mocked him, hidden his belongings and shut him out of group activities while others laughed. Nothing suggests he is targeted for belonging to any group. His grades were good until he stopped attending, and he gets on well with his teachers. Evaluation finds no anxiety, depressive or trauma-related disorder, and he is otherwise well. His mother asks for help with the bullying and what it is doing to him.",
    "q": "Which code fits?",
    "choices": [
      "T74.32XA child psychological abuse, confirmed",
      "Z55.4 educational maladjustment and discord with teachers and classmates",
      "Z60.5 target of (perceived) adverse discrimination or persecution",
      "Z60.4 social exclusion or rejection",
      "Z65.4 victim of crime"
    ],
    "answer": 3,
    "why": "**Z60.4** applies when an **imbalance of social power** produces **recurrent** exclusion or rejection: **bullying, teasing and intimidation**, verbal abuse and humiliation, and purposeful exclusion from peers’ activities (p. 832).",
    "whyNot": [
      "The child abuse categories require a parent or caregiver as the perpetrator (pp. 823–825); these are classmates.",
      "Discord implies conflict on both sides; here a more powerful group repeatedly targets him, which is the power imbalance that Z60.4 describes (pp. 830, 832; app reading).",
      "Nothing suggests he is targeted for membership in a category such as ethnicity or religion (p. 832).",
      "Correct.",
      "No crime is described; the focus is recurrent exclusion and rejection (p. 832)."
    ],
    "then": {
      "q": "A different patient: a 22-year-old nursing student from an Aeta community in Bataan, who has settled comfortably into university life, says that a clinical instructor repeatedly calls her by an ethnic slur, marks her lower than classmates for the same work, and told her that “people like her” should not become nurses. She feels anxious before every duty but meets criteria for no disorder. She wants help deciding whether to file a complaint. Which code fits?",
      "choices": [
        "Z60.3 acculturation difficulty",
        "Z55.8 problems related to inadequate teaching",
        "Z60.4 social exclusion or rejection",
        "Z56.81 sexual harassment on the job",
        "Z60.5 target of (perceived) adverse discrimination or persecution"
      ],
      "answer": 4,
      "why": "**Z60.5** covers **perceived or experienced** discrimination or persecution based on **membership, or perceived membership, in a category**, ethnicity among them (p. 832). The instructor targets her explicitly for her ethnicity.",
      "whyNot": [
        "She has not moved into a new culture (p. 832).",
        "The problem is discrimination, not poor teaching (pp. 830, 832).",
        "Z60.4 describes recurrent exclusion through a power imbalance (p. 832); when the treatment is driven by her ethnicity, Z60.5 names it more precisely (p. 832; app reading).",
        "Nothing sexual is described (p. 831).",
        "Correct."
      ]
    },
    "discuss": [
      "How do you document perceived discrimination neutrally, neither dismissing it nor ruling on it (app guidance)?",
      "Which school or university mechanisms can stop bullying and discrimination, and how would you involve them (app guidance)?"
    ]
  },
  {
    "id": "v22-18",
    "tag": "Her father and brother have bipolar disorder",
    "stem": "A 29-year-old engineer, recently married, comes alone to the outpatient clinic. Her father and her older brother both have bipolar I disorder. She has never had a mood episode, and a full assessment finds no mental disorder. She and her husband plan to have children within a year, and she wants to understand her own risk of developing bipolar disorder and the risk for a future child.",
    "q": "Which code records the reason for this visit?",
    "choices": [
      "Z31.5 genetic counseling",
      "Z03.89 no diagnosis or condition (Chapter 20)",
      "Z70.9 sex counseling",
      "Z91.49 personal history of psychological trauma",
      "Z71.9 other counseling or consultation"
    ],
    "answer": 0,
    "why": "**Z31.5 genetic counseling** is for a person who wants to understand the risk of a disorder with a **significant genetic component**, the manual’s example being **bipolar disorder**, for themselves and family members, including **future children** (p. 833).",
    "whyNot": [
      "Correct.",
      "The visit has a reason that this chapter names, so Z31.5 is more informative than recording no condition (p. 833; Chapter 20).",
      "Her question is about inherited risk, not sexuality (p. 834).",
      "Nothing in the stem describes trauma (p. 833).",
      "Z71.9 is for counseling not specified elsewhere in the chapter (p. 834); genetic counseling has its own code."
    ],
    "then": {
      "q": "In your note you justify recording Z31.5. Which of the manual’s reasons for coding a condition from this chapter applies most directly?",
      "choices": [
        "It is the reason for the current visit",
        "It helps start or worsen a mental disorder",
        "It is a mental disorder in its own right",
        "It must be coded for every patient with a family history of a mental disorder",
        "It replaces the need for a psychiatric assessment"
      ],
      "answer": 0,
      "why": "A condition from this chapter may be coded if it is **a reason for the current visit**, helps **explain the need for a test, procedure or treatment**, plays a **role in starting or worsening** a mental disorder, or is a **problem for the overall management plan** (p. 821). Her genetic question is the reason she came. The conditions in this chapter are **not mental disorders** (p. 821).",
      "whyNot": [
        "Correct.",
        "She has no mental disorder for it to start or worsen (p. 821).",
        "The manual states that the conditions in this chapter are not mental disorders (p. 821).",
        "A condition is coded for one of the four reasons, not automatically (p. 821).",
        "A Z code documents a problem; it does not replace the assessment that found no disorder (app guidance)."
      ]
    },
    "discuss": [
      "How would you explain her risk without false precision, and when would you refer her to a clinical geneticist (app guidance)?",
      "Give one example of each of the four reasons to code from patients you have seen (p. 821)."
    ]
  },
  {
    "id": "v22-19",
    "tag": "Out the gate again",
    "stem": "A 9-year-old boy with autism spectrum disorder, requiring very substantial support, and moderate intellectual developmental disorder has twice slipped out of his special education classroom and been found near the highway; at home he has opened the gate at night and walked out alone. He is not running from anything he dislikes: he walks with a restless urge, seems drawn to passing traffic and comes back happily when found. He takes no medication. His school and parents want a safety plan.",
    "q": "How should this be recorded?",
    "choices": [
      "Z62.820 parent–biological child relational problem for inadequate supervision",
      "Z91.83 wandering alone, since the wandering is the focus",
      "Z72.810 child or adolescent antisocial behavior",
      "Medication-induced acute akathisia",
      "Autism spectrum disorder first, then Z91.83 wandering associated with autism spectrum disorder"
    ],
    "answer": 4,
    "why": "Z91.83 is for a person **with a mental disorder** whose **desire to walk about** causes significant **management or safety** concerns, such as leaving supervised settings without needed accompaniment (p. 834). The coding note says to **code the mental disorder first** (autism spectrum disorder is one of the manual’s own examples), then **Z91.83 wandering associated with [that disorder]** (p. 834). Record the intellectual developmental disorder as well (app guidance).",
    "whyNot": [
      "Nothing suggests poor supervision by his parents; the manual treats this as a safety concern of the disorder (p. 834).",
      "The coding note requires the associated mental disorder to be coded first (p. 834).",
      "He is not breaking rules or violating others’ rights; he wanders because of an urge linked to his disorder (pp. 834–835).",
      "He takes no medication, and walking caused by akathisia is excluded from the wandering code (p. 834).",
      "Correct."
    ],
    "then": {
      "q": "A different patient: a 70-year-old man with schizophrenia was started on haloperidol 10 days ago. He now paces the ward corridor for hours, says he cannot sit still and feels restless inside, and never tries to leave the ward. Staff ask whether to code wandering. What is correct?",
      "choices": [
        "Schizophrenia, then Z91.83 wandering associated with schizophrenia",
        "Z91.83 alone",
        "Do not code wandering; assess for medication-induced acute akathisia",
        "Z59.3 problem related to living in a residential institution",
        "Z91.199 nonadherence to medical treatment (printed as Z91.19; APA coding update, October 2022)"
      ],
      "answer": 2,
      "why": "The wandering code **excludes** people who walk or pace because of **medication-induced akathisia** (p. 834). Subjective restlessness with an urge to move, starting within weeks of a dopamine-blocking drug, points to medication-induced acute akathisia (Chapter 21).",
      "whyNot": [
        "Pacing from akathisia is excluded from Z91.83 (p. 834).",
        "The coding note needs a mental disorder first, and akathisia is excluded anyway (p. 834).",
        "Correct.",
        "Nothing describes a problem with living on the ward as an institution (p. 831).",
        "He is taking his medication (p. 835)."
      ]
    },
    "discuss": [
      "What would you put in the boy’s safety plan at school and at home (app guidance)?",
      "A teenager who leaves home at night to escape family fights: is that wandering (p. 834)?"
    ]
  },
  {
    "id": "v22-20",
    "tag": "Seven weeks a widow",
    "stem": "A 63-year-old retired teacher lost her husband of 40 years to a heart attack 7 weeks ago. She cries daily, has lost 3 kg, sleeps poorly and thinks of him often. She feels sad but says “this is what grief is”; she still enjoys her grandchildren’s visits, keeps her self-esteem, and feels no worthlessness or guilt beyond wishing she had made him see a doctor. She has thoughts of being reunited with him someday but no wish to die now, no plan and no intent. She keeps up her household and church activities. She does not meet criteria for a major depressive episode. She asks for something to help her sleep.",
    "q": "What is the best formulation?",
    "choices": [
      "Major depressive disorder, single episode",
      "Prolonged grief disorder",
      "Z63.4 uncomplicated bereavement",
      "Adjustment disorder with depressed mood",
      "Insomnia disorder"
    ],
    "answer": 2,
    "why": "A **normal reaction** to the death of a loved one, with some depressive-like symptoms (sadness, **insomnia, poor appetite, weight loss**), in a person who regards her mood as **normal** and seeks help for **sleep**, is **uncomplicated bereavement** (p. 834). She does not meet criteria for a major depressive episode, and the manual points to the MDE and prolonged grief disorder texts for those distinctions (p. 834). How long and how openly people grieve varies by culture (p. 834).",
    "whyNot": [
      "She does not meet criteria for a major depressive episode; preserved self-esteem and enjoyment point to grief (p. 834; Chapter 4).",
      "Prolonged grief disorder needs at least 12 months since the death in an adult (Chapter 7); it has been 7 weeks.",
      "Correct.",
      "A normal grief reaction is not an adjustment disorder (Chapter 7; app reading).",
      "Her poor sleep is part of 7 weeks of grief and does not meet the 3-month duration of insomnia disorder (Chapter 12)."
    ],
    "then": {
      "q": "Fourteen months after the death she returns. For at least the past month she has felt intense longing for him nearly every day, cannot accept that he is gone, avoids the room where he died, feels that part of herself has died, and has withdrawn from church and her grandchildren. Her family says this is far beyond what is usual in their community. She still does not meet criteria for a major depressive episode. What now?",
      "choices": [
        "Z63.4 uncomplicated bereavement",
        "Prolonged grief disorder",
        "Major depressive disorder, single episode",
        "Z60.0 phase of life problem",
        "Z65.8 religious or spiritual problem"
      ],
      "answer": 1,
      "why": "Grief persisting **at least 12 months** after the death in an adult, with near-daily longing, several accompanying symptoms (identity disruption, marked disbelief, avoidance of reminders, difficulty reintegrating) and a duration and severity that **exceed cultural norms**, is prolonged grief disorder (Chapter 7). The bereavement entry refers to that text for the distinction (p. 834).",
      "whyNot": [
        "Her grief is no longer a normal reaction: it is persistent, impairing and beyond her community’s norms (p. 834; Chapter 7).",
        "Correct.",
        "She does not meet criteria for a major depressive episode (Chapter 4).",
        "The focus is grief that now meets criteria for a disorder, not adjustment to a life-cycle transition (p. 834; Chapter 7).",
        "Her withdrawal from church reflects grief, not a loss or questioning of faith (p. 834)."
      ]
    },
    "discuss": [
      "Which questions help you tell grief from depression at 7 weeks (Chapter 4; app guidance)?",
      "How would you ask about suicidal thoughts in a widow who speaks of being reunited with her husband (app guidance)?"
    ]
  },
  {
    "id": "v22-21",
    "tag": "Learning to be retired",
    "stem": "A 61-year-old bank manager retired 4 months ago after 35 years. He feels “useless,” misses his colleagues and has no routine, and he has started arguing with his wife about small things. He sleeps and eats normally, enjoys his grandchildren and his garden, and has no hopelessness. Assessment finds no depressive, anxiety or adjustment disorder, and he functions well at home. He asks for help “learning to be retired.”",
    "q": "Which code fits?",
    "choices": [
      "Adjustment disorder with depressed mood",
      "Z60.0 phase of life problem",
      "Z56.0 unemployment",
      "Z63.0 relationship distress with spouse or intimate partner",
      "Z60.2 problem related to living alone"
    ],
    "answer": 1,
    "why": "**Z60.0** is for a problem adjusting to a **life-cycle transition**; the manual’s examples include **retiring**, entering or finishing school, leaving parental control, marrying, starting a career, becoming a parent and the **empty nest** (p. 834).",
    "whyNot": [
      "Assessment found no adjustment disorder; the Z code records the problem without a diagnosis (p. 821).",
      "Correct.",
      "He chose to retire; this is not unemployment (pp. 831, 834).",
      "The arguments are minor and secondary; the focus is the transition (p. 834).",
      "He lives with his wife (p. 832)."
    ],
    "then": {
      "q": "His wife, 59, comes separately. Since a close friend died last year she has lost her faith, stopped going to Mass and feels guilty and adrift; she wants to talk it through with a clinician rather than a priest. She has no mood, anxiety or psychotic disorder, and her doubts are not delusional. Which code fits?",
      "choices": [
        "Z63.4 uncomplicated bereavement",
        "Z60.0 phase of life problem",
        "Z60.3 acculturation difficulty",
        "Z65.8 religious or spiritual problem",
        "Z60.5 target of (perceived) adverse discrimination or persecution"
      ],
      "answer": 3,
      "why": "**Z65.8** applies when the focus is a **religious or spiritual problem**: distressing **loss or questioning of faith**, problems with **conversion** to a new faith, or questioning of **spiritual values**, which need not involve an organized church (p. 834).",
      "whyNot": [
        "The friend’s death set it off, but the focus is her loss of faith, not her grief (p. 834).",
        "She is not adjusting to a life-cycle transition (p. 834).",
        "She has not moved into a new culture (p. 832).",
        "Correct.",
        "No one is discriminating against her (p. 832)."
      ]
    },
    "discuss": [
      "How would you respond if spiritual distress came with hopelessness or thoughts of death (app guidance)?",
      "When is it right to suggest a pastoral or spiritual counselor alongside clinical care (app guidance)?"
    ]
  },
  {
    "id": "v22-22",
    "tag": "One break-in",
    "stem": "A 15-year-old boy is referred by the barangay after he and two friends broke into a closed school canteen one night 2 weeks ago and took snacks and cash. It is his only such act: teachers, parents and records describe no fighting, cruelty, lying, fire-setting, truancy, running away or other rule-breaking at any time, and no temper outbursts. He shows remorse and is getting by at school. Assessment finds no mental disorder.",
    "q": "Which code fits?",
    "choices": [
      "Conduct disorder, adolescent-onset type",
      "Intermittent explosive disorder",
      "Z72.811 adult antisocial behavior",
      "Z72.810 child or adolescent antisocial behavior",
      "Oppositional defiant disorder"
    ],
    "answer": 3,
    "why": "**Z72.810** is for a child’s or adolescent’s antisocial behavior that **cannot be attributed to a mental disorder** such as intermittent explosive disorder or conduct disorder; the manual’s example is **isolated antisocial acts, not a pattern** (p. 835). Conduct disorder needs a **repetitive and persistent pattern** (Chapter 15).",
    "whyNot": [
      "One act is not the repetitive, persistent pattern that conduct disorder needs (Chapter 15).",
      "He has no recurrent aggressive outbursts (Chapter 15).",
      "He is 15; Z72.811 is the adult code (p. 835).",
      "Correct.",
      "He shows no pattern of angry, defiant or vindictive behavior (Chapter 15)."
    ],
    "then": {
      "q": "His teachers say he has always struggled with schoolwork, so he has standardized testing: his full-scale score falls just above the range seen in intellectual developmental disorder, evenly low across domains. He cooks, rides the jeepney alone, handles money, keeps friends and helps in his uncle’s sari-sari store; his adaptive functioning is average for his age. The team decides his learning profile should shape how they counsel him. What fits?",
      "choices": [
        "Mild intellectual developmental disorder",
        "Specific learning disorder, with impairment in reading",
        "R41.83 borderline intellectual functioning",
        "Unspecified intellectual developmental disorder",
        "R41.81 age-related cognitive decline"
      ],
      "answer": 2,
      "why": "**R41.83** is used when borderline intellectual functioning is the **focus** or **affects treatment or prognosis** (p. 836). Separating it from **mild intellectual developmental disorder** needs careful assessment of **intellectual and adaptive** functions and their **discrepancies** (p. 836); his adaptive functioning is average, so IDD does not fit. The DSM-5-TR text gives no IQ range for this category (app note).",
      "whyNot": [
        "IDD needs deficits in both intellectual and adaptive functioning (Chapter 1); his adaptive functioning is average.",
        "His scores are evenly low across domains rather than showing a specific academic deficit (Chapter 1; app reading).",
        "Correct.",
        "Unspecified IDD is for people over 5 who cannot be properly assessed (Chapter 1); he was assessed.",
        "R41.81 describes decline with aging (pp. 835–836)."
      ]
    },
    "discuss": [
      "Which co-occurring conditions does the manual say can make the distinction from mild IDD harder, and why (p. 836)?",
      "How would you adapt counseling and a diversion plan for him (app guidance)?"
    ]
  },
  {
    "id": "v22-23",
    "tag": "He stopped his insulin",
    "stem": "A 57-year-old tricycle driver with type 2 diabetes and major depressive disorder in full remission stopped his metformin and insulin 3 months ago, and his HbA1c has risen sharply. He explains that since his income fell he cannot afford the insulin, and that metformin gave him diarrhea that kept him from working. He understands the risks, is not anxious, shows no denial and does not minimize his diabetes; he says he would restart both if he could afford insulin and had a medicine he could tolerate. His mood remains normal. The nonadherence has become a separate focus of the diabetes team’s attention, and they ask psychiatry how to record it.",
    "q": "What fits best?",
    "choices": [
      "Z91.199 nonadherence to medical treatment (printed as Z91.19; APA coding update, effective October 1, 2022)",
      "Major depressive disorder, recurrent, current episode",
      "Z59.6 low income only",
      "Z72.9 problem related to lifestyle",
      "Psychological factors affecting other medical conditions"
    ],
    "answer": 0,
    "why": "Nonadherence to an important part of treatment is coded when it warrants **independent clinical attention** and criteria for **psychological factors affecting other medical conditions** are **not met** (p. 835). His reasons, **expense** and **side effects**, are on the manual’s list (p. 835). Poor adherence can itself be a behavioral factor in psychological factors affecting other medical conditions (Chapter 9), but here it is a reasoned response to cost and side effects, with no distress, denial or maladaptive coping behind it, and the team is attending to the nonadherence as a problem in its own right (p. 835; app reading). The printed Z91.19 is now **Z91.199** (APA coding update, September 2022); ICD-10-CM’s Z91.190 for financial hardship is more specific but is not the code the APA assigned (app note).",
    "whyNot": [
      "Correct.",
      "His depression is in full remission and his mood is normal (Chapter 4).",
      "Low income can be recorded as well (p. 832), but it does not capture the nonadherence that is the team’s focus (p. 835).",
      "Z72.9 covers lifestyle problems such as diet, exercise or sleep hygiene (p. 833), not stopping prescribed treatment.",
      "Poor adherence driven by psychological factors such as denial or maladaptive coping can meet PFAMC (Chapter 9); his stopping is a reasoned response to cost and side effects, and the manual reserves the nonadherence code for when PFAMC is not met (p. 835; app reading)."
    ],
    "then": {
      "q": "He tells you that he meets the income rules for the government cash-assistance program for poor households but has been turned away twice because he cannot provide proof of address; he rents a small house in an informal settlement that has no official street address. His medical care is otherwise covered by his national health insurance membership. Which additional code records this?",
      "choices": [
        "Z59.71 insufficient health insurance coverage",
        "Z59.5 extreme poverty",
        "Z75.3 unavailability or inaccessibility of health care facilities",
        "Z59.02 unsheltered homelessness",
        "Z59.72 insufficient welfare support (printed Z59.7; APA coding update, effective October 1, 2024)"
      ],
      "answer": 4,
      "why": "The manual’s Z59.7 covers people who **meet eligibility** but do not receive support, including those refused for lack of **documentation or proof of address** (p. 832). Since **October 1, 2024** the code is split into **Z59.71** insufficient health insurance coverage and **Z59.72** insufficient welfare support (APA coding update, September 2024; app note). What he lacks is welfare support.",
      "whyNot": [
        "His health insurance covers his care; the gap is the cash-assistance program (p. 832; APA coding update, September 2024).",
        "Nothing establishes extreme poverty; the problem is access to support he qualifies for (p. 832).",
        "Health care facilities are available to him (p. 833).",
        "He has a dwelling of his own; the problem being recorded is the support he was refused (pp. 831–832; app reading).",
        "Correct."
      ]
    },
    "discuss": [
      "What practical help, such as a social worker or a barangay certificate of residency, would address this (app guidance)?",
      "Why does the manual exclude cases that meet PFAMC criteria from the nonadherence code (p. 835)?"
    ]
  },
  {
    "id": "v22-24",
    "tag": "Voices before the trial",
    "stem": "A 34-year-old man charged with robbery is referred by his defense attorney for evaluation two weeks before trial. He reports hearing voices “all day” and says he cannot remember his own name or birthday. On the ward he chats with others, plays cards, and recalls details of his case when talking with his family; his account of the voices is vague, he describes no other psychotic features, and staff see no sign that he is responding to hallucinations. He refuses neuropsychological testing and will not take the antipsychotic offered on the ward. His records show conduct disorder before age 15 and a long adult history meeting criteria for antisocial personality disorder.",
    "q": "What is the most likely formulation?",
    "choices": [
      "Functional neurological symptom disorder",
      "Factitious disorder imposed on self",
      "Schizophrenia",
      "Dissociative amnesia",
      "Z76.5 malingering"
    ],
    "answer": 4,
    "why": "Malingering is the **intentional** production of false or grossly exaggerated symptoms for an **external incentive**, here evading criminal prosecution (p. 835). The manual says to **strongly consider** it with any combination of four features, and all four are present: a **medicolegal context** (attorney referral, pending charges), a **marked discrepancy** between claimed disability and what is observed, **lack of cooperation** with evaluation and treatment, and **antisocial personality disorder** (p. 835). These are indicators to consider, not criteria; document observations rather than presumed motives (app guidance).",
    "whyNot": [
      "In functional neurological symptom disorder the symptoms are not intentionally produced (p. 835).",
      "Factitious disorder requires that external incentives be absent (p. 835); his is obvious.",
      "His behavior on the ward does not match the hallucinations he reports (Chapter 2; app reading).",
      "He recalls personal details when it suits him, which is not the inability to recall autobiographical information of dissociative amnesia (Chapter 8; app reading).",
      "Correct."
    ],
    "then": {
      "q": "A different patient: a 28-year-old nursing aide is admitted for the third time with unexplained low blood sugar; insulin syringes are found in her locker although she does not have diabetes. She has no lawsuit, insurance claim or wish to avoid work, loses income with every admission, and appears to want to be cared for as a patient. Which formulation fits?",
      "choices": [
        "Z76.5 malingering",
        "Somatic symptom disorder",
        "Factitious disorder imposed on self",
        "Psychological factors affecting other medical conditions",
        "Z91.199 nonadherence to medical treatment (printed as Z91.19; APA coding update, October 2022)"
      ],
      "answer": 2,
      "why": "Deception without an obvious external reward, aimed at taking on the **sick role**, points to **factitious disorder**; malingering differs because its motive is an **external incentive** (p. 835). When feigning is definite, the apparent aim decides between them (p. 835).",
      "whyNot": [
        "There is no external incentive; she even loses income (p. 835).",
        "Somatic symptom disorder involves genuine distressing symptoms without deception (Chapter 9; app reading).",
        "Correct.",
        "PFAMC concerns psychological factors affecting a real medical condition; she has none (Chapter 9).",
        "She is not refusing treatment (p. 835)."
      ]
    },
    "discuss": [
      "Why is a medicolegal context on its own weak evidence, and what else would you look for (app guidance)?",
      "How would you word the conclusion so that it records observations rather than accusations (app guidance)?"
    ]
  },
  {
    "id": "v22-25",
    "tag": "Names slip, life goes on",
    "stem": "A 74-year-old retired accountant says that over 3 years he has become slower to recall the names of acquaintances, sometimes forgets an appointment unless he writes it down, and needs more time to work out complex tax problems for friends. He still drives, manages his money, cooks and keeps his diary without help; his wife has noticed nothing beyond the trouble with names. Detailed cognitive testing is within normal limits for his age and education, but his scores are slightly lower than on the same tests done for a work assessment 4 years ago. Neurological examination, blood tests and brain imaging are normal, and he has no depressive, anxiety or other mental disorder.",
    "q": "What fits?",
    "choices": [
      "Mild neurocognitive disorder due to possible Alzheimer’s disease",
      "Major neurocognitive disorder",
      "R41.81 age-related cognitive decline",
      "Z03.89 no diagnosis or condition, because he has no impairment",
      "R41.83 borderline intellectual functioning"
    ],
    "answer": 2,
    "why": "**R41.81** is for an **objectively identified** decline due to **aging** that stays **within normal limits for age**, with complaints such as forgetting **names or appointments** and difficulty with **complex problems** (pp. 835–836). It is considered only **after** a specific mental disorder and a neurological condition have been ruled out (p. 836), as here.",
    "whyNot": [
      "Mild NCD needs a modest decline from a previous level documented on testing, typically 1 to 2 standard deviations below norms (Chapter 17); his scores are within normal limits for his age.",
      "He is fully independent and his testing is normal (Chapter 17).",
      "Correct.",
      "There is a focus of attention that this chapter names, so R41.81 is more informative (pp. 835–836; Chapter 20).",
      "Borderline intellectual functioning is a lifelong level of intellectual function, not a decline with age (pp. 835–836; app reading)."
    ],
    "discuss": [
      "What would make you repeat testing in a year, and what change would matter (app guidance)?",
      "How would you explain to him that his experience falls within normal aging, while keeping the door open for review (app guidance)?"
    ]
  }
]);
