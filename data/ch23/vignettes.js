/* Chapter 23 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   This is a non-disorder chapter (Section III, Assessment Measures, pp. 841–857). No measure is a diagnosis or a code: every
   keyed answer is a threshold decision, a next step, a version or rater choice, a score, or a frequency rule. The forms are
   copyrighted (APA; WHO for the WHODAS 2.0): stems state the form, the rater, the recall window and each relevant item rating
   in words, and never reprint item wording or anchors. Criteria applied from other chapters are tagged "(Ch N)". Self-harm
   items are described in general terms; any flagged suicidal ideation leads to direct same-day inquiry (app guidance).
   Settings are Philippine training-hospital and community settings (app color). */
SP.add("ch23", "vignettes", [
  {
    "id": "v23-01",
    "tag": "Which domains cross the line",
    "sec": "s23-scoring-adult",
    "dx": "level1-adult",
    "stem": "At the Mariveles OPD, a 29-year-old call-center agent who works night shifts comes in for poor sleep. In the waiting area she completes the adult self-rated Level 1 Cross-Cutting Symptom Measure, which asks about the past 2 weeks. She rates the single sleep question **mild (2)**. Of the three anxiety questions she rates one **slight (1)** and the other two none. Of the two psychosis questions she rates the one about hearing things other people cannot hear **slight (1)** and the other none. She rates the single anger question **slight (1)**. Every other item, including the three substance questions and the suicidal ideation question, is rated none.",
    "q": "Which domains reach the threshold that calls for further inquiry?",
    "choices": [
      "None: no item is rated moderate or higher",
      "Sleep only, because mild (2) is the threshold for every adult domain",
      "Sleep (mild on its item) and psychosis (slight is enough in that domain); anxiety and anger stay below their mild threshold",
      "Sleep, anxiety, anger and psychosis, because any rating above none counts",
      "Anxiety only, because its three items add up to more than the single sleep item"
    ],
    "answer": 2,
    "why": "Every adult item is rated **0–4** (none, slight, mild, moderate, severe) for the **past 2 weeks** (pp. 843, 845). For most domains a rating of **mild (2) or greater on any item** calls for further inquiry (pp. 845–846); for **substance use, suicidal ideation and psychosis** the bar is **slight (1) or greater** (p. 846). Her sleep item is mild, so sleep is flagged, and its Level 2 measure is the PROMIS Sleep Disturbance short form (Table 1, p. 844). Her slight psychosis item crosses the lower psychosis threshold; psychosis has **no Level 2 measure**, so the follow-up is the clinician’s own questions (p. 844). Anxiety and anger are mild-threshold domains rated only slight, so they are not flagged (p. 844). The scores prompt inquiry; they are not a diagnosis (p. 846).",
    "whyNot": [
      "The adult threshold is mild (2), or slight (1) in three domains, not moderate (pp. 845–846).",
      "Psychosis, substance use and suicidal ideation use the lower slight (1) threshold (p. 846).",
      "Correct.",
      "Slight counts only in the three exception domains; anxiety and anger need mild or greater (pp. 844–846).",
      "Level 1 items are not summed; the threshold is reached by any single item in a domain (pp. 845–846)."
    ],
    "discuss": [
      "How would you open the conversation about the voice-hearing item without suggesting she is “crazy” (app guidance)?",
      "Which other two adult domains share the slight threshold, and why might the manual have set it lower there (p. 846)?"
    ]
  },
  {
    "id": "v23-02",
    "tag": "Several slights do not make a mild",
    "sec": "s23-scoring-adult",
    "dx": "level1-adult",
    "stem": "A 45-year-old market vendor followed at the Mariveles OPD for hypertension is referred because she “worries about her body.” She completes the adult self-rated Level 1 measure for the past 2 weeks. She rates **both** somatic symptom questions **slight (1)**, the single anger question **slight (1)** and one of the two repetitive thoughts and behaviors questions **slight (1)**. She rates every other item none, including the suicidal ideation question, both psychosis questions and all three substance questions. The intern writes “somatic domain score 2: give the PHQ-15.”",
    "q": "What is the correct reading of her form?",
    "choices": [
      "Somatic symptoms is flagged, because its two slight items add up to the mild threshold of 2",
      "Every slight rating needs its own Level 2 measure",
      "Anger is flagged, because anger is one of the slight-threshold domains",
      "The form is uninterpretable until each domain has a total score",
      "No domain reaches its threshold: the somatic, anger and repetitive domains need mild on at least one item; the scores are kept as a baseline and the usual interview goes ahead"
    ],
    "answer": 4,
    "why": "The threshold is reached by **any single item** rated **mild (2) or greater** in most adult domains (pp. 845–846); the clinician records the **highest item score** in each domain, not a sum (p. 846). Her highest somatic, anger and repetitive-domain scores are all **1**, below the mild threshold for those domains (Table 1, p. 844). The three slight-threshold domains (**substance use, suicidal ideation, psychosis**) are all rated none (p. 846). So no domain calls for a Level 2 measure, and the scores serve as a **baseline** to compare with later ratings (Section I, p. 20). Clinical judgment still guides the interview about her concern (p. 846).",
    "whyNot": [
      "Items are not added: the highest item in the somatic domain is 1, below mild (pp. 845–846).",
      "Level 2 measures are for domains at or above threshold, and they are only one option for further inquiry (p. 846).",
      "The adult slight-threshold domains are substance use, suicidal ideation and psychosis; anger needs mild (p. 846).",
      "Level 1 has no domain totals; the clinician records the highest item score per domain (p. 846).",
      "Correct."
    ],
    "discuss": [
      "If her concern persists, what would you want to know before thinking about a somatic symptom presentation (Ch 9)?"
    ]
  },
  {
    "id": "v23-03",
    "tag": "A mother who does not know",
    "sec": "s23-scoring-child",
    "dx": "level1-child",
    "stem": "A public high school in Balanga refers a 14-year-old boy to the child psychiatry clinic for falling grades. His mother completes the parent/guardian-rated Level 1 measure, which asks about the past 2 weeks. She rates all the 0–4 items none or slight, with no item at mild or above, and inattention and psychosis rated none. On the Yes/No/Don’t Know items she answers **Don’t Know** to the alcohol question and the tobacco question, **No** to the other two substance questions, and **No** to both suicide questions. She says he spends most evenings out with older friends.",
    "q": "What does the manual suggest as the next step for the substance domain?",
    "choices": [
      "Probe with the boy himself, which may include the child-rated Level 2 substance measure (adapted from the NIDA-modified ASSIST) for ages 11–17",
      "Treat Don’t Know as No, since no Yes answer was given",
      "Give the parent the Level 2 substance measure, because Don’t Know is scored like Yes",
      "Stop, because the substance domain has no Level 2 measure in children",
      "Have the boy complete the adult self-rated Level 1 measure instead"
    ],
    "answer": 0,
    "why": "On the parent version **19 of 25** items use the 0–4 scale and **six** (four substance, the suicidal ideation and the suicide attempt items) are answered **Yes, No or Don’t Know** (p. 846). A parent’s **Don’t Know**, especially for a child aged **11–17**, may call for **probing with the child**, including the **child-rated Level 2** measure for that domain (p. 846). Table 2 gives the adapted **NIDA-modified ASSIST** as the substance Level 2: the parent version after a **Yes**, the **child-rated** version (ages 11–17) after a **Don’t Know** (p. 845). The child-rated Level 1 for ages 11–17 is also an option; it is online and has no Don’t Know choice (pp. 844, 846).",
    "whyNot": [
      "Correct.",
      "Don’t Know is a prompt to ask the adolescent, not a negative answer (p. 846).",
      "Table 2 pairs a parent’s Yes with the parent Level 2 and a Don’t Know with the child-rated one (p. 845).",
      "Substance use does have a pediatric Level 2 measure; the domains without one are psychosis, repetitive thoughts and behaviors, and suicidal ideation/attempts (p. 845).",
      "The adult form is for adults; a 14-year-old can complete the child-rated version for ages 11–17 (pp. 843–844)."
    ],
    "discuss": [
      "How would you arrange to talk with him alone about substance use, and what would you tell his mother about confidentiality (app guidance)?"
    ]
  },
  {
    "id": "v23-04",
    "tag": "A 9-year-old and a self-report",
    "sec": "s23-level1-child",
    "dx": "level1-child",
    "stem": "A grade 4 teacher in Mariveles refers a 9-year-old girl for daydreaming in class. At intake her father, who looks after her each afternoon, agrees to complete the Level 1 cross-cutting measure. The teacher’s referral note also asks that the girl “fill out her own form” so her view is recorded.",
    "q": "Which version or versions of Level 1 apply?",
    "choices": [
      "The adult self-rated version, read aloud to the girl",
      "The parent/guardian version plus the child-rated version, since both exist for children",
      "The child-rated version alone, because the child is the best reporter of her own attention",
      "The parent/guardian-rated version only: it covers ages 6–17, while the child-rated version is for ages 11–17",
      "No Level 1 version exists for children under 11"
    ],
    "answer": 3,
    "why": "The **parent/guardian-rated** Level 1 covers children aged **6–17**, with **25 questions** across **12 domains** for the **past 2 weeks** (p. 844). The clinician may **also** ask a child aged **11–17** to complete the **child-rated** version, which is online (pp. 842, 844). At 9 she is too young for the child-rated form, so her father completes the parent version. Her own account still comes from the interview (app guidance).",
    "whyNot": [
      "The adult version is for adults, completed by the person or by an informant when capacity is impaired (p. 843).",
      "The child-rated version starts at age 11 (p. 844).",
      "The child-rated version starts at 11 and supplements, rather than replaces, the parent version (p. 844).",
      "Correct.",
      "The parent/guardian version starts at age 6 (p. 844)."
    ],
    "then": {
      "q": "Her father rates the single inattention question **slight (1)**, one of the two somatic questions **slight (1)**, and every other 0–4 item none; he answers **No** to all six Yes/No/Don’t Know items. What is the best next step?",
      "choices": [
        "No further inquiry, since no item reaches mild",
        "Further inquiry into inattention, which may include the SNAP-IV parent Level 2 measure, followed by an interview with home and school history against the Section II criteria; the slight somatic item stays below its mild threshold",
        "Give the PHQ-15 for the somatic item and the SNAP-IV for inattention",
        "Record a diagnosis now, because the inattention domain crossed its threshold",
        "Repeat the parent form in 2 weeks before acting on a slight rating"
      ],
      "answer": 1,
      "why": "On the parent version the threshold is **mild (2)** for most domains but **slight (1)** for **inattention and psychosis** (p. 846). Her inattention item is slight, so it calls for further inquiry; Table 2 lists the **SNAP-IV** as the inattention Level 2 measure (p. 845). The somatic item is slight in a **mild-threshold** domain, so it is not flagged (pp. 845–846). A threshold score signals a possible need for detailed inquiry and is **not a diagnosis**; whether any disorder is present is decided in the interview against the criteria (p. 846; app guidance).",
      "whyNot": [
        "Inattention is one of the two child domains flagged at slight (p. 846).",
        "Correct.",
        "Somatic symptoms needs mild or greater on an item; a slight rating does not call for the PHQ-15 (pp. 845–846).",
        "Level 1 and Level 2 scores prompt inquiry; criteria decide the diagnosis (p. 846).",
        "A slight rating already crosses the inattention threshold; repeat ratings are for tracking change, not for confirming a flag (p. 846)."
      ]
    },
    "discuss": [
      "What would you ask the teacher for, given that the Level 1 parent form reflects only what her father sees at home (app guidance)?"
    ]
  },
  {
    "id": "v23-05",
    "tag": "The daughter fills in the form",
    "sec": "s23-level1-adult",
    "dx": "level1-adult",
    "stem": "A 78-year-old retired fisherman with major neurocognitive disorder is brought to the Mariveles OPD by his daughter, who lives with him and cares for him most of the day. He cannot follow the written instructions or keep the 2-week window in mind. His daughter completes the adult Level 1 measure about him, filling in the informant lines with her relationship and the hours a week they spend together. She rates the single memory question **severe (4)**, the sleep question **moderate (3)**, the anger question **mild (2)**, the hearing-things psychosis question **slight (1)**, and everything else none. His son, who visits once a month, offers to bring him to the next visit.",
    "q": "Which plan follows the manual?",
    "choices": [
      "Set the form aside, because Level 1 is valid only when the person rates himself",
      "Accept the daughter’s form as a knowledgeable informant’s rating, act on the flagged domains, and ideally have the same daughter complete it at follow-up",
      "Use the parent/guardian version, since a relative is the rater",
      "Let whichever relative attends complete the form each time, as long as someone who knows him answers",
      "Replace Level 1 with the WHODAS, since the WHODAS has no informant option"
    ],
    "answer": 1,
    "why": "If an adult cannot complete Level 1 because of **impaired capacity**, for example in **major neurocognitive disorder**, a **knowledgeable adult informant** may complete it (p. 843); the form has lines for the informant’s relationship and weekly hours with the person (p. 847). At follow-up, people with impaired capacity should ideally be rated by the **same knowledgeable informant** (p. 846). Her ratings flag **memory, sleep and anger** (mild or greater) and **psychosis** (slight or greater) (pp. 844–846). Memory and psychosis have **no Level 2 measure**, so the clinician asks directly; sleep and anger have PROMIS short forms (p. 844).",
    "whyNot": [
      "The manual allows an informant to complete the adult form when capacity is impaired (p. 843).",
      "Correct.",
      "The parent/guardian version is for children aged 6–17 (p. 844).",
      "The same informant should ideally complete it at follow-up, so changes in scores reflect him rather than a change of rater (p. 846).",
      "The WHODAS has a proxy-administered version for impaired capacity (p. 854), and it measures disability, not symptoms."
    ],
    "discuss": [
      "Why might a monthly visitor and a daily carer give different ratings of the same 2 weeks (app guidance)?"
    ]
  },
  {
    "id": "v23-06",
    "tag": "Rating a delusion on the ward",
    "sec": "s23-crdpss-rating",
    "dx": "psychosis-severity-dimensions",
    "stem": "On the male ward, the resident rates a 31-year-old tricycle driver with schizophrenia on the Clinician-Rated Dimensions of Psychosis Symptom Severity, at the end of his first week of admission. Using the interview, the nurses’ notes and his mother’s account, the resident notes that over the past 7 days he has been certain that his neighbors are poisoning the household water. On the worst day he refused all food and water at home and went to the neighbors’ gate shouting at them until the barangay tanod led him away; he is very distressed by the belief. He hears a voice commenting on him a few times a day, says it does not bother him and ignores it. His speech is at times hard to follow. He shows no abnormal or bizarre motor behavior.",
    "q": "What score does the delusions dimension receive?",
    "choices": [
      "0, not present",
      "1, equivocal",
      "2, present but mild",
      "3, present and moderate",
      "4, present and severe"
    ],
    "answer": 4,
    "why": "The clinician rates each of the **8** dimensions on **0–4** (none, equivocal, mild, moderate, severe), using **all available information**, for the symptom **at its most severe in the past 7 days**, and writes the number in the Score column (p. 851). For delusions, the mild, moderate and severe levels are graded by how much **pressure to act** on the belief the person feels and how **bothered** he is by it; the severe level is reached by severe pressure to act **or** being very bothered (p. 852). On his worst day he acted on the belief and he is very distressed, so delusions rate **4**. By the same anchors his voice, with little pressure to act and little distress, rates mild, and his speech, sometimes hard to follow, rates mild too (p. 852). The ratings document severity; they do not change the diagnosis (Ch 2; app guidance).",
    "whyNot": [
      "The belief is present and fixed.",
      "Equivocal is for a belief whose severity or duration is not enough to count as psychosis (p. 852).",
      "Mild means little pressure to act and not very bothered (p. 852); he acted on the belief and is very distressed.",
      "Moderate means some pressure to act or being somewhat bothered (p. 852); his worst day went beyond that.",
      "Correct."
    ],
    "then": {
      "q": "At week 6 the resident rates him again. He still believes the water was poisoned but says he no longer thinks about it much and has not acted on it. His mother and the nurses agree that he last mentioned hearing the voice **10 days ago**, and he denies hearing it since. What score does the hallucinations dimension receive at week 6?",
      "choices": [
        "0, not present",
        "1, equivocal",
        "2, present but mild",
        "3, present and moderate",
        "4, present and severe"
      ],
      "answer": 0,
      "why": "Each item is rated for the symptom **at its most severe during the past 7 days** (p. 851). The voice was last heard 10 days ago, outside the window, so hallucinations rate **0** at this rating. Repeating the measure **at regular intervals as clinically indicated** is how the manual tracks change (p. 851): his hallucinations fell from mild at week 1 to none at week 6, and the delusions dimension is re-rated by the same pressure-to-act and distress anchors (p. 852).",
      "whyNot": [
        "Correct.",
        "Equivocal describes a symptom present in the window but too slight to count as psychosis (p. 852); nothing was present in the past 7 days.",
        "Mild would need a voice within the past 7 days with little pressure to act (p. 852).",
        "Moderate would need a voice within the past 7 days with some pressure to respond or some distress (p. 852).",
        "Severe would need severe pressure to respond or marked distress within the past 7 days (p. 852)."
      ]
    },
    "discuss": [
      "Which five of his eight scores could be recorded as the Chapter 2 “current severity” specifier, and is the specifier required for the diagnosis (Ch 2, p. 109)?",
      "How would you rate impaired cognition for him, given that the anchors compare him with what is expected for his age and socioeconomic status (p. 853)?"
    ]
  },
  {
    "id": "v23-07",
    "tag": "Twelve blank items",
    "sec": "s23-whodas-tr",
    "dx": "whodas",
    "stem": "A 40-year-old jeepney dispatcher with panic disorder completes the self-administered 36-item WHODAS 2.0 at the Mariveles OPD, which asks about difficulty in the past 30 days. He works full time, so the work items apply. When the resident reviews it, **12 items are blank**: all **8** participation-in-society items, **3** of the 5 getting-along-with-people items, and **1** of the 6 understanding-and-communicating items. Every getting-around, self-care and life-activities item is answered. He has left the clinic.",
    "q": "Which scores can still be used?",
    "choices": [
      "All of them, because the WHODAS can be scored from whatever items were answered",
      "None of them; a WHODAS with any missing items must be repeated",
      "Not the simple or average general disability scores; domain scores may be used for the domains that are 75%–100% complete (understanding and communicating, getting around, self-care, life activities), not for getting along or participation",
      "Only the general disability score, because domain scores need every item",
      "The IRT-based score, because computer scoring corrects for missing items"
    ],
    "answer": 2,
    "why": "The manual asks that the person be encouraged to answer every item. Once **10 or more** items are unanswered (**more than 25%** of 36), computing the **general disability score**, simple or average, is unlikely to help; even then, any domain with **75%–100%** of its items answered can still be given its own simple or average **domain** score (p. 855). Here 12 are missing. Understanding and communicating has 5 of 6 answered (83%); getting around, self-care and life activities are complete; getting along has 2 of 5 (40%) and participation 0 of 8, so those two cannot be scored (domain item counts from the form, pp. 856–857; arithmetic is the app’s). At the next visit, ask him to complete the missing items in the interview (app guidance).",
    "whyNot": [
      "Ten or more missing items undermine the general scores (p. 855).",
      "The manual keeps the domain scores that are 75%–100% complete (p. 855).",
      "Correct.",
      "It is the reverse: the general scores lose their value at 10 or more missing items, while complete domains keep theirs (p. 855).",
      "The manual’s missing-data rule applies to the general scores whatever the method; IRT scoring weights items and response levels, it does not supply missing answers (pp. 854–855)."
    ]
  },
  {
    "id": "v23-08",
    "tag": "An average domain score",
    "sec": "s23-whodas-tr",
    "dx": "whodas",
    "stem": "A 34-year-old fisherman with major depressive disorder completes the self-administered 36-item WHODAS 2.0 at his first visit to the Mariveles OPD, rating difficulty in the past 30 days. He answers every item. The resident reviews each answer with him and leaves them unchanged in the Clinician Use Only column. His five getting-along-with-people items total **20**, and his overall raw score is **108**.",
    "q": "What are his average getting-along domain score and his average general disability score?",
    "choices": [
      "Getting along 20 (the raw score is the domain score); general 108",
      "Getting along 20 ÷ 36 = 0.6; general 108 ÷ 6 = 18",
      "Getting along 20 ÷ 8 = 2.5, mild to moderate; general 108 ÷ 180 = 0.6",
      "Getting along 20 ÷ 5 = 4, severe; general 108 ÷ 36 = 3, moderate",
      "Getting along 4 on the 0–100 IRT metric; general 60 on the same metric"
    ],
    "answer": 3,
    "why": "DSM-5-TR recommends **average** domain and general disability scores (p. 855). The **average domain score** is the raw domain score divided by the **number of items in the domain**; the text’s example is six moderate items, 18 ÷ 6 = 3 (p. 855). Getting along with people has **5** items (form, pp. 856–857), so 20 ÷ 5 = **4**. The **average general disability score** is the raw overall score divided by **36**: 108 ÷ 36 = **3** (p. 855). Averages sit on the WHODAS 1–5 scale: 1 none, 2 mild, 3 moderate, 4 severe, 5 extreme (p. 855), so his difficulty with people is severe and his overall disability moderate.",
    "whyNot": [
      "Raw scores are the starting point; DSM-5-TR asks for averages read on the 1–5 scale (p. 855).",
      "The divisors are swapped: domain ÷ its own items, general ÷ 36 (p. 855).",
      "Getting along has 5 items, not 8, and 180 is the maximum simple score, not a divisor (pp. 854–855).",
      "Correct.",
      "The 0–100 metric is WHO’s computer-based IRT conversion, not the DSM-5-TR average (pp. 854–855)."
    ],
    "then": {
      "q": "Three months later, after treatment, he completes the WHODAS again for the past 30 days, all items answered. His getting-along items now total **10** and his overall raw score is **72**. How is the change best described?",
      "choices": [
        "No change can be measured, because the WHODAS is not sensitive to change",
        "His disability has resolved, because a score of 72 is less than half of 180",
        "The comparison is invalid unless the IRT method is used both times",
        "Getting along rose from 4 to 10, a worsening",
        "Getting along fell from 4 (severe) to 2 (mild) and general disability from 3 (moderate) to 2 (mild); repeat at intervals that match the stability of his symptoms and treatment"
      ],
      "answer": 4,
      "why": "Average scores: getting along 10 ÷ 5 = **2**, mild; general 72 ÷ 36 = **2**, mild (p. 855). Compared with baseline (4 and 3), both improved. The WHODAS 2.0 has been shown to be **sensitive to change** (p. 854), and the manual suggests repeating it **at regular intervals as clinically indicated**, depending on the stability of symptoms and treatment (p. 855). Section I describes this use: a baseline rating at the initial evaluation compared with later ratings (p. 20).",
      "whyNot": [
        "The WHODAS 2.0 has demonstrated sensitivity to change (p. 854).",
        "An average of 2 is mild disability, not none; none is an average of 1 (p. 855).",
        "DSM-5-TR’s own guidance is to use the average scores, which can be compared visit to visit (p. 855).",
        "The raw domain score fell from 20 to 10; 4 and 2 are its averages (p. 855).",
        "Correct."
      ]
    },
    "discuss": [
      "What would you say in his progress note about function, now that the GAF no longer exists in the DSM (Section I, p. 16)?"
    ]
  },
  {
    "id": "v23-09",
    "tag": "Is she getting better?",
    "sec": "s23-frequency",
    "dx": "level2-measures",
    "stem": "A 38-year-old mother of three was diagnosed with major depressive disorder at the Mariveles OPD 8 weeks ago and started on treatment. At that visit she completed the adult self-rated Level 1 measure (past 2 weeks), rating both depression questions **severe (4)** and **moderate (3)** and the sleep question **moderate (3)**, and then the PROMIS depression short form as the Level 2 measure. She is now seen for follow-up at her barangay health station, where the visiting resident wants to show the consultant whether she is improving.",
    "q": "What is the best way to document change?",
    "choices": [
      "Repeat the Level 1 measure and the depression Level 2 measure and compare the new scores with her baseline, repeating them at intervals that match the stability of her symptoms and treatment",
      "Add up all 23 Level 1 items at each visit and compare the totals",
      "Wait for the 6-month interval the manual sets for repeating the measures",
      "Rate her on the Clinician-Rated Dimensions of Psychosis Symptom Severity, since it includes a depression dimension",
      "Stop using measures, because they are for the initial evaluation only"
    ],
    "answer": 0,
    "why": "To track change, the Level 1 and relevant **Level 2** measures may be repeated **at regular intervals as clinically indicated**, depending on the **stability** of symptoms and treatment (p. 846). Section I adds that these ratings are taken at the **initial evaluation as a baseline** and compared with later ratings (p. 20); this is the measurement-based care the chapter describes (pp. 841–842). Level 1 has **no total score**; the unit is the **highest item score per domain** (p. 846). The adult depression Level 2 measure in Table 1 is the PROMIS Emotional Distress—Depression short form (p. 844).",
    "whyNot": [
      "Correct.",
      "Level 1 records the highest item score in each domain; it has no total (p. 846).",
      "The manual sets no fixed interval; it says regular intervals as clinically indicated (p. 846).",
      "The psychosis dimensions measure is for psychotic disorders; its depression item flags mood pathology in psychosis (pp. 842, 851).",
      "The measures are meant for both the initial interview and follow-up (pp. 842, 846)."
    ],
    "discuss": [
      "If her sister completed the form at baseline because she could not read the English version, who should complete it now (p. 846)?"
    ]
  },
  {
    "id": "v23-10",
    "tag": "A positive screen, no disorder",
    "sec": "s23-level2",
    "dx": "level2-measures",
    "stem": "A 23-year-old nursing graduate reviewing for the licensure exam comes to the Mariveles OPD for a medical certificate. On the adult self-rated Level 1 measure (past 2 weeks) she rates two of the three anxiety questions **mild (2)** and the sleep question **mild (2)**; the suicidal ideation, psychosis and substance questions are all none. The resident gives the PROMIS anxiety short form as the Level 2 measure. In the interview she describes 3 weeks of worry about the exam that she can set aside when she chooses; she studies 6 hours a day as planned, sleeps 6–7 hours most nights, and has had no panic attacks, avoidance or other symptoms. She and her family see no change in how she functions. The resident concludes that she meets the criteria for no mental disorder.",
    "q": "How should the screening result be recorded?",
    "choices": [
      "As other specified anxiety disorder, because the Level 1 threshold was reached",
      "No diagnosis on the diagnosis line; the Level 1 and Level 2 scores go in the note as a baseline, with follow-up if she wishes",
      "As the anxiety domain score on the diagnosis line, in place of a diagnosis",
      "As generalized anxiety disorder, since both Level 1 and Level 2 were positive",
      "Leave the encounter open until the Level 1 anxiety domain falls below threshold"
    ],
    "answer": 1,
    "why": "A threshold score on Level 1 signals a **possible need for detailed clinical inquiry**, and a Level 2 measure is **one way** to get more information (p. 846). Scores may **indicate** a problem that **warrants further assessment**, and **clinical judgment should guide decision making** (p. 846). When the interview finds no criteria met, the screen does not create a diagnosis; the scores belong in the formulation or progress note, not on the diagnosis line (app guidance), and they serve as a baseline if she returns (Section I, p. 20).",
    "whyNot": [
      "Other specified categories still need clinically significant distress or impairment from the symptoms (Ch 5); a screen alone does not supply that.",
      "Correct.",
      "Measures and scores are never recorded as a diagnosis (app guidance; p. 846).",
      "Generalized anxiety disorder needs excessive, hard-to-control worry for at least 6 months with impairment (Ch 5); she has 3 weeks of controllable worry and no impairment.",
      "Nothing in the manual makes a decision wait for a score to change; judgment decides now (p. 846)."
    ],
    "discuss": [
      "What would you tell her the form showed, without suggesting she has an illness (app guidance)?"
    ]
  },
  {
    "id": "v23-11",
    "tag": "One slight rating on the safety question",
    "sec": "s23-table1",
    "dx": "level1-adult",
    "stem": "The psychiatry service is called to the medicine ward to see a 35-year-old construction worker admitted for gastritis. As part of the consult he completes the adult self-rated Level 1 measure for the past 2 weeks. He rates the single suicidal ideation question **slight (1)**, the heavy-drinking question **slight (1)** and one depression question **mild (2)**; every other item is none. The ward intern suggests waiting, because “slight is below the mild threshold.”",
    "q": "What is the next step for the suicidal ideation domain?",
    "choices": [
      "Wait, because a slight rating is below the adult threshold of mild",
      "Give the Level 2 suicidal ideation measure before the interview",
      "Repeat the Level 1 measure in 2 weeks to see whether the rating rises",
      "Ask him directly about thoughts of self-harm the same day: slight is the threshold for this domain, and it has no Level 2 measure",
      "Give only the depression Level 2 measure, since the suicide item is part of the depression domain"
    ],
    "answer": 3,
    "why": "For **suicidal ideation**, along with substance use and psychosis, a rating of **slight (1) or greater** guides additional inquiry (p. 846). Table 1 lists **no Level 2 measure** for suicidal ideation (p. 844), so the follow-up is the clinician’s own direct questions. The app’s rule is a **same-day** conversation and risk assessment, with safety planning if risk is present; the NCMH Crisis Hotline is 1553 (outside the DSM; confirm before giving out) (app guidance). His heavy-drinking item also crosses the slight threshold for substance use, and his depression item crosses mild; both domains have Level 2 measures (p. 844).",
    "whyNot": [
      "Suicidal ideation is a slight-threshold domain (p. 846).",
      "No Level 2 measure exists for suicidal ideation (p. 844).",
      "A flagged suicidal ideation item calls for inquiry now, not a repeat form (p. 846; app guidance).",
      "Correct.",
      "Suicidal ideation is its own domain (VI), separate from depression (I) (p. 844)."
    ],
    "discuss": [
      "How would you phrase the first question about thoughts of self-harm in Filipino or English with a medical-ward patient (app guidance)?"
    ]
  },
  {
    "id": "v23-12",
    "tag": "No computer at the health station",
    "sec": "s23-whodas-who",
    "dx": "whodas",
    "stem": "At a barangay health station in Bataan without a computer, a resident gives the self-administered 36-item WHODAS 2.0 to a 56-year-old woman with schizophrenia who has been stable for a year. She answers all 36 items for the past 30 days, each on the five levels from none to extreme. The resident needs a score before the end of clinic.",
    "q": "Which scoring statement is correct?",
    "choices": [
      "Only the IRT-based method is valid, so the form must be sent to the hospital for computer scoring",
      "Recode each item to 0–4 and add them for a maximum of 180",
      "Use simple scoring: add the item scores, each 1 (none) to 5 (extreme), for a maximum of 180; a total of 126 also gives an average general disability score of 126 ÷ 36 = 3.5",
      "Use simple scoring and convert the total to the 0–100 metric by hand",
      "Sum the highest item score in each domain, as for the Level 1 measure"
    ],
    "answer": 2,
    "why": "WHO gives two methods (p. 854). **Simple** scoring adds the item scores, **none 1 to extreme 5**, with no recoding or weighting, for a **maximum of 180**; it suits **hand scoring** in busy clinics and paper-and-pencil settings, and the simple sum is enough to describe the degree of functional limitation (p. 854). **IRT-based** scoring needs a **computer**: items are recoded to **0–4** (raw maximum **144**), the six domains summed, and the result converted to **0–100** (p. 854). DSM-5-TR adds the **average general disability score**, the raw total ÷ 36, read on the 1–5 scale (p. 855).",
    "whyNot": [
      "WHO describes simple scoring as practical and sufficient for hand scoring (p. 854).",
      "Recoding to 0–4 is the first IRT step and gives a maximum of 144, not 180 (p. 854).",
      "Correct.",
      "The 0–100 conversion is the last step of computer-based IRT scoring, not part of simple scoring (p. 854).",
      "The highest-item rule belongs to the Level 1 cross-cutting measure (p. 846); the WHODAS sums item scores (p. 854)."
    ]
  }
]);
