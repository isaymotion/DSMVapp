/* Chapter 11 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch11", "vignettes", [
  {
    "id": "v11-01",
    "tag": "Enuresis nocturnal",
    "stem": "A 7-year-old boy is brought because he wets the bed about four nights a week. He has never had a dry month. He is dry during the day, passes a soft stool daily and drinks normally. Urinalysis, abdominal and spinal examination are normal, and he takes no medication. He cried when he could not go to his cousin’s sleepover.",
    "q": "What is the diagnosis?",
    "choices": [
      "Enuresis, nocturnal and diurnal",
      "Enuresis, nocturnal only",
      "Other specified elimination disorder, low-frequency enuresis",
      "No diagnosis: bedwetting is normal at this age",
      "Separation anxiety disorder"
    ],
    "answer": 1,
    "why": "Repeated bedwetting **4 nights a week** for well over **3 months**, age **7**, no medical or drug cause, wetting **only in sleep**: **enuresis, nocturnal only (F98.0)**, primary course.",
    "whyNot": [
      "He is dry during the day.",
      "Correct.",
      "His frequency exceeds twice weekly; full criteria are met.",
      "The threshold age is 5; at 7 this needs attention.",
      "There is no fear of separation; he wanted to attend the sleepover."
    ],
    "then": {
      "q": "Outside the DSM, which plan is most appropriate first?",
      "choices": [
        "Imipramine at bedtime as the first medicine",
        "Fluid restriction all afternoon and punishment for wet nights",
        "Alarm or oral desmopressin, after checking for constipation",
        "Referral for cystoscopy",
        "Intranasal desmopressin with unrestricted evening fluids"
      ],
      "answer": 2,
      "why": "**Alarm** and **desmopressin** are first-line, with education and no blame; check and treat **constipation** first. Imipramine is third line (cardiotoxic); oral desmopressin is preferred, with evening fluid restriction to avoid **hyponatremia**."
    },
    "discuss": [
      "How would you explain the three-dials model (urine output, bladder capacity, arousal) to the parents?",
      "When would you choose an alarm over desmopressin?"
    ]
  },
  {
    "id": "v11-02",
    "tag": "Criterion B",
    "stem": "A 6-year-old girl has wet the bed about once a week for the past 5 months. She hides her wet sheets, says she is “a baby,” and has refused two sleepovers and a school overnight trip. Physical examination and urinalysis are normal. She is dry by day and takes no medication.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "No diagnosis: she wets less than twice a week",
      "Other specified elimination disorder, low-frequency enuresis",
      "Unspecified elimination disorder",
      "Enuresis, nocturnal only",
      "Social anxiety disorder"
    ],
    "answer": 3,
    "why": "Criterion B is met by frequency **or** by clinically significant **distress or impairment**. Her shame and avoided activities satisfy B: **enuresis, nocturnal only (F98.0)**.",
    "whyNot": [
      "Distress and impairment satisfy Criterion B without the frequency rule.",
      "Full criteria are met, so a residual category is not used.",
      "The information is sufficient for a specific diagnosis.",
      "Correct.",
      "Her avoidance is about wetting, not fear of scrutiny in general."
    ]
  },
  {
    "id": "v11-03",
    "tag": "Age",
    "stem": "Parents bring their 4-year-6-month-old son because he wets the bed most nights. He has been dry during the day since age 3 and is developing normally. Urinalysis is normal. They ask whether he has a disorder.",
    "q": "What is the best response?",
    "choices": [
      "Enuresis, nocturnal only",
      "Other specified elimination disorder",
      "Not a disorder yet; reassure and review after 5",
      "Start desmopressin",
      "Unspecified elimination disorder, pending more history"
    ],
    "answer": 2,
    "why": "Enuresis requires a chronological (or developmental) age of at least **5 years**. Nighttime wetting at 4½ is common and usually not a disorder.",
    "whyNot": [
      "Criterion C (age 5) is not met.",
      "No clinically significant distress or impairment is described, and wetting at this age is developmentally expected.",
      "Correct.",
      "Medication is not indicated before age 5 here (treatment guidance, outside the DSM).",
      "There is enough information; he is simply below the threshold."
    ]
  },
  {
    "id": "v11-04",
    "tag": "Medical cause",
    "stem": "An 8-year-old girl, dry since age 3, has wet the bed nightly and had two daytime accidents over the past 3 weeks. She is drinking large amounts, has lost 2 kg and seems tired. Her urine dipstick shows glucose 3+ and ketones.",
    "q": "What is the most appropriate next step?",
    "choices": [
      "Urgent evaluation for diabetes mellitus",
      "Diagnose secondary enuresis, nocturnal and diurnal",
      "Start an enuresis alarm",
      "Prescribe desmopressin",
      "Diagnose adjustment disorder"
    ],
    "answer": 0,
    "why": "Polyuria, weight loss and glycosuria point to **new-onset diabetes mellitus**. Enuresis is **not** diagnosed when another medical condition causes the wetting (Criterion D).",
    "whyNot": [
      "Correct.",
      "Diabetes explains the wetting (Criterion D).",
      "An alarm does not treat polyuria and delays urgent care.",
      "Desmopressin is wrong and dangerous in untreated diabetes (treatment guidance, outside the DSM).",
      "No stressor explains this; the cause is medical."
    ]
  },
  {
    "id": "v11-05",
    "tag": "Medication",
    "stem": "A 24-year-old man with treatment-resistant schizophrenia began clozapine 4 months ago. For the past 3 months he has wet the bed three or four nights a week and is embarrassed. He had been continent since early childhood. Urinalysis and glucose are normal.",
    "q": "How should the wetting be recorded?",
    "choices": [
      "As a clozapine side effect",
      "Enuresis, nocturnal only",
      "Other specified elimination disorder",
      "Unspecified elimination disorder",
      "Encopresis"
    ],
    "answer": 0,
    "why": "Wetting that begins during treatment with an **antipsychotic** may be noted as a **medication side effect**; enuresis would be diagnosed only if wetting was regularly present **before** the drug.",
    "whyNot": [
      "Correct.",
      "Criterion D excludes a substance effect.",
      "The cause is known: the medication.",
      "The cause is known.",
      "This is urinary, not fecal."
    ],
    "discuss": [
      "What practical steps can reduce clozapine-associated enuresis?",
      "Why does it matter to ask about wetting before starting an antipsychotic?"
    ]
  },
  {
    "id": "v11-06",
    "tag": "Diurnal",
    "stem": "An 8-year-old boy has wet his pants three times a week for 6 months, mostly in the early afternoon after school while playing video games. He squirms and crosses his legs but says he will “go in a minute.” He is dry at night. Urinalysis and examination are normal, and his stools are regular.",
    "q": "What is the diagnosis?",
    "choices": [
      "Enuresis, nocturnal only",
      "Enuresis, diurnal only",
      "Enuresis, nocturnal and diurnal",
      "Oppositional defiant disorder",
      "No diagnosis"
    ],
    "answer": 1,
    "why": "Wetting during **waking hours** only, at least twice weekly for over 3 months: **enuresis, diurnal only**. Deferring the urge until wetting occurs is **voiding postponement**.",
    "whyNot": [
      "He is dry at night.",
      "Correct.",
      "There is no nighttime wetting.",
      "There is no pattern of angry, defiant behavior.",
      "Full enuresis criteria are met."
    ],
    "then": {
      "q": "The parents ask what kind of daytime wetting this is. What is the best term?",
      "choices": [
        "Urge incontinence from detrusor instability",
        "Voiding postponement",
        "Overflow incontinence",
        "Monosymptomatic enuresis",
        "Giggle incontinence"
      ],
      "answer": 1,
      "why": "He **consciously defers** the urge until incontinence results: **voiding postponement**. Urge incontinence involves sudden urges and detrusor instability."
    }
  },
  {
    "id": "v11-07",
    "tag": "Combined",
    "stem": "A 7-year-old girl has, for the past 5 months, wet her clothes about four times a week after sudden, intense urges, often rushing to the toilet and leaking on the way, and wets the bed two or three nights a week. She has had two urinary tract infections this year, both treated, and the wetting continued unchanged afterward. Her urinalysis today is normal.",
    "q": "What is the diagnosis?",
    "choices": [
      "Enuresis, diurnal only",
      "Enuresis, nocturnal only",
      "Wetting due to urinary tract infection; enuresis cannot be diagnosed",
      "Enuresis, nocturnal and diurnal",
      "Other specified elimination disorder"
    ],
    "answer": 3,
    "why": "Day and night wetting, more than twice weekly for over 3 months, persisting **after** treated infections: **enuresis, nocturnal and diurnal** (nonmonosymptomatic), with **urge incontinence** by day.",
    "whyNot": [
      "She also wets at night.",
      "She also wets by day.",
      "Enuresis can be diagnosed when wetting persists after appropriate treatment of the infection.",
      "Correct.",
      "Full criteria are met."
    ],
    "then": {
      "q": "Which associated problem should be looked for most carefully?",
      "choices": [
        "Constipation",
        "Hypertension",
        "Hyperthyroidism",
        "Iron deficiency",
        "Celiac disease"
      ],
      "answer": 0,
      "why": "**Constipation** and encopresis occur with both day and night wetting. With chronic constipation, urinary reflux may lead to recurrent UTIs, which may remit when the constipation is treated."
    }
  },
  {
    "id": "v11-08",
    "tag": "Structural",
    "stem": "A 6-year-old girl has always been damp: her underwear is wet all day and her bed is wet every morning, although she also passes normal volumes of urine in the toilet several times a day. She has never had a dry day. Examination shows constant dribbling from near the urethral opening.",
    "q": "What is the most likely explanation?",
    "choices": [
      "Voiding postponement",
      "Enuresis, nocturnal and diurnal",
      "An ectopic ureter",
      "Encopresis",
      "Urge incontinence"
    ],
    "answer": 2,
    "why": "**Constant dribbling** with otherwise normal voiding in a girl suggests an **ectopic ureter**, a structural cause that excludes enuresis (clinical knowledge, outside the DSM; the manual lists ectopic ureter in a female as an excluding condition).",
    "whyNot": [
      "Postponement causes episodic wetting, not constant dribbling.",
      "A structural condition explains the wetting.",
      "Correct.",
      "This is urinary.",
      "Urge incontinence is episodic with sudden urges."
    ]
  },
  {
    "id": "v11-09",
    "tag": "Sleep apnea",
    "stem": "A 7-year-old boy has wet the bed five nights a week for as long as he can remember. His mother says he snores loudly, stops breathing for a few seconds at night, sleeps with his mouth open and is tired and inattentive at school. Urinalysis is normal and he takes no medication.",
    "q": "What is the best next step besides diagnosing enuresis?",
    "choices": [
      "Start imipramine",
      "Assess for sleep apnea",
      "Order a spinal MRI",
      "Diagnose ADHD and start a stimulant",
      "Restrict all fluids after noon"
    ],
    "answer": 1,
    "why": "Nocturnal enuresis is linked with **snoring and sleep apnea**; evaluate for obstructive sleep apnea.",
    "whyNot": [
      "Imipramine is third line and does not address apnea (treatment guidance, outside the DSM).",
      "Correct.",
      "There are no spinal or neurological signs.",
      "Inattention may come from disturbed sleep; evaluate sleep first.",
      "Severe restriction is not recommended (treatment guidance, outside the DSM)."
    ],
    "then": {
      "q": "If he has proven sleep-disordered breathing, about what proportion of such children become dry after adenotonsillectomy?",
      "choices": [
        "About 10%",
        "About 25%",
        "About 50%",
        "About 75%",
        "Nearly all"
      ],
      "answer": 2,
      "why": "About **50%** of enuretic children with proven sleep-disordered breathing become dry after adenotonsillectomy (p. 402)."
    }
  },
  {
    "id": "v11-10",
    "tag": "Developmental age",
    "stem": "A 10-year-old boy with mild intellectual developmental disorder (estimated mental age 7) wets the bed three or four nights a week and has done so continuously. He is dry by day. Examination, spine and urinalysis are normal, and he takes no medication. His parents assumed this was “part of his condition.”",
    "q": "What is the best diagnostic statement?",
    "choices": [
      "Enuresis cannot be diagnosed in intellectual disability",
      "Wait until his mental age reaches 10",
      "Other specified elimination disorder",
      "Encopresis",
      "Enuresis, nocturnal only"
    ],
    "answer": 4,
    "why": "The age criterion is **developmental**: a mental age of **7** is above 5. With frequency and duration met and no medical cause: **enuresis, nocturnal only**.",
    "whyNot": [
      "The criterion uses the equivalent developmental level, not exclusion.",
      "A developmental level of 5 is enough.",
      "Full criteria are met.",
      "This is urinary.",
      "Correct."
    ]
  },
  {
    "id": "v11-11",
    "tag": "Secondary",
    "stem": "A 9-year-old girl who had been dry at night since age 4 began wetting the bed 6 months ago, soon after her parents separated. She now wets three nights a week. Urinalysis, glucose and examination are normal, her bowels are regular and she takes no medication. She is sad at times but sleeps and eats well and enjoys school.",
    "q": "What is the diagnosis?",
    "choices": [
      "Primary enuresis, nocturnal only",
      "Enuresis, nocturnal only (secondary course)",
      "Major depressive disorder",
      "Not enuresis, because it followed a stressor",
      "Unspecified elimination disorder"
    ],
    "answer": 1,
    "why": "Wetting three nights a week for 6 months after a period of continence: **enuresis, nocturnal only**, with a **secondary** course. Psychosocial stress is a recognized risk factor and does not exclude the diagnosis.",
    "whyNot": [
      "She had been dry for years, so the course is secondary.",
      "Correct.",
      "Her mood symptoms fall well short of a depressive episode.",
      "Stressors do not exclude enuresis.",
      "There is enough information."
    ]
  },
  {
    "id": "v11-12",
    "tag": "After UTI",
    "stem": "A 7-year-old girl developed daytime wetting with a febrile urinary tract infection 5 months ago. The infection was treated and repeat cultures are negative, but she has kept wetting her clothes about three afternoons a week since then. She is dry at night. Examination is normal.",
    "q": "Can enuresis be diagnosed?",
    "choices": [
      "Yes: enuresis, diurnal only",
      "No, because a UTI is a medical cause",
      "No, because she is dry at night",
      "Only after 12 months",
      "Only if a renal ultrasound is normal"
    ],
    "answer": 0,
    "why": "Enuresis is compatible with a medical condition if wetting **persists after appropriate treatment** of it. Daytime-only wetting three times a week for over 3 months: **enuresis, diurnal only**.",
    "whyNot": [
      "Correct.",
      "The infection has been treated and the wetting persists.",
      "Diurnal-only is a valid subtype.",
      "The duration rule is 3 consecutive months.",
      "No imaging is required for the DSM diagnosis."
    ]
  },
  {
    "id": "v11-13",
    "tag": "Encopresis constipation",
    "stem": "A 6-year-old boy has soiled his underwear four or five times a week for the past 5 months. Every 5 to 7 days he passes a very large, hard stool that hurts and once blocked the toilet. He hides behind the sofa, stiffens and crosses his legs when he feels the urge. He takes no medication and is otherwise well. His parents punish him for the accidents.",
    "q": "What is the diagnosis?",
    "choices": [
      "Encopresis, with constipation and overflow incontinence",
      "Encopresis, without constipation and overflow incontinence",
      "Oppositional defiant disorder",
      "Other specified elimination disorder",
      "Hirschsprung disease"
    ],
    "answer": 0,
    "why": "Soiling more than monthly for over 3 months, age 6, with **infrequent large painful stools** and **withholding**: **encopresis, with constipation and overflow incontinence (F98.1)**.",
    "whyNot": [
      "Correct.",
      "There is clear constipation by history.",
      "Withholding is driven by pain, not defiance.",
      "Full criteria are met.",
      "Withholding with large, painful stools points to functional constipation (clinical knowledge, outside the DSM)."
    ],
    "then": {
      "q": "Which examination finding would best support the subtype?",
      "choices": [
        "Normal anal tone",
        "Rectal fecal impaction",
        "Hyperactive bowel sounds",
        "A sacral dimple",
        "An anal skin tag"
      ],
      "answer": 1,
      "why": "A **rectal fecal impaction** supports encopresis **with constipation and overflow incontinence**; an abdominal radiograph showing impaction would also support it, though it is not indicated for the diagnosis."
    },
    "discuss": [
      "How would you explain the withholding cycle to parents who punish soiling?",
      "What does the 2026 ESPGHAN/NASPGHAN guideline recommend first?"
    ]
  },
  {
    "id": "v11-14",
    "tag": "Encopresis without",
    "stem": "A 10-year-old boy has, for 8 months, left formed stools in the corner of the living room or in his sister’s room about twice a month, usually after being disciplined. His stools are soft and daily, the abdomen is soft without masses, and a transit study shows prompt evacuation of markers. He argues constantly with adults, refuses rules and deliberately annoys his sister.",
    "q": "What is the elimination diagnosis?",
    "choices": [
      "Encopresis, with constipation and overflow incontinence",
      "Unspecified elimination disorder",
      "Not encopresis, because the soiling is intentional and oppositional",
      "Encopresis, without constipation and overflow incontinence",
      "Other specified elimination disorder"
    ],
    "answer": 3,
    "why": "Intentional soiling still counts. Normal stools, intermittent soiling in a **prominent place**, prompt evacuation of markers: **without constipation and overflow incontinence**.",
    "whyNot": [
      "There is no constipation.",
      "There is enough information for a specific diagnosis.",
      "Criterion A includes intentional passage of feces.",
      "Correct.",
      "Frequency and duration are met (at least monthly for 3 months)."
    ],
    "then": {
      "q": "Which co-occurring diagnosis should you assess for most?",
      "choices": [
        "Oppositional defiant disorder",
        "Generalized anxiety disorder",
        "Hypothyroidism",
        "Celiac disease",
        "Autism spectrum disorder without intellectual impairment"
      ],
      "answer": 0,
      "why": "Depositing feces in a **prominent place** is usually associated with **oppositional defiant disorder** or **conduct disorder**; when soiling is clearly deliberate, their features may be present."
    }
  },
  {
    "id": "v11-15",
    "tag": "Encopresis age",
    "stem": "A 3-year-6-month-old girl in the middle of toilet training soils her pants most days. She uses the potty for urine. Her stools are soft and daily, and she is developing normally. Her grandmother worries that something is wrong.",
    "q": "What is the best response?",
    "choices": [
      "Encopresis, without constipation",
      "Encopresis, with constipation",
      "Other specified elimination disorder",
      "Refer for anorectal manometry and a barium enema",
      "Not encopresis; support toilet training"
    ],
    "answer": 4,
    "why": "Encopresis requires a chronological or developmental age of at least **4 years**. Soiling during toilet training at 3½ is expected.",
    "whyNot": [
      "She is below age 4.",
      "She has no constipation and is below age 4.",
      "No clinically significant distress or impairment is described, and soiling at this age is developmentally expected.",
      "Testing is not indicated.",
      "Correct."
    ]
  },
  {
    "id": "v11-16",
    "tag": "Subthreshold",
    "stem": "A 5-year-old boy has soiled his underwear twice in each of the last 2 months, after being continent for a year. He is ashamed and now refuses to go to school on swimming days. His stools are normal and the examination is normal. He takes no medication.",
    "q": "Which diagnosis fits best now?",
    "choices": [
      "Encopresis, without constipation and overflow incontinence",
      "Other specified elimination disorder, with fecal symptoms",
      "Unspecified elimination disorder, with urinary symptoms",
      "No diagnosis can ever be made without 3 months",
      "Separation anxiety disorder"
    ],
    "answer": 1,
    "why": "Encopresis needs events **monthly for 3 months**, with **no** impairment alternative. With distress and a stated reason (duration under 3 months): **other specified elimination disorder, with fecal symptoms (R15.9)**.",
    "whyNot": [
      "The 3-month duration is not met.",
      "Correct.",
      "His symptoms are fecal, not urinary, and a reason can be stated.",
      "A residual category can be used for a clinically significant subthreshold presentation.",
      "He avoids school because of soiling, not separation."
    ]
  },
  {
    "id": "v11-17",
    "tag": "Medical cause",
    "stem": "A 9-year-old girl with lumbosacral myelomeningocele (spina bifida) has had daily fecal incontinence since infancy, with reduced perianal sensation and lax anal tone. She also has a neurogenic bladder managed with catheterization.",
    "q": "Which statement is correct?",
    "choices": [
      "She has encopresis, with constipation and overflow incontinence",
      "She has encopresis, without constipation and overflow incontinence",
      "Spina bifida explains it; not encopresis",
      "She has enuresis and encopresis",
      "She has other specified elimination disorder"
    ],
    "answer": 2,
    "why": "Fecal incontinence from **spina bifida** is a medical cause not acting through constipation: **not encopresis** (p. 405). Her bladder problem is likewise neurogenic, not enuresis.",
    "whyNot": [
      "The mechanism is neurological.",
      "The mechanism is neurological.",
      "Correct.",
      "Neurogenic bladder and bowel exclude both.",
      "The cause is fully explained by the medical condition."
    ]
  },
  {
    "id": "v11-18",
    "tag": "Constipation exception",
    "stem": "A 7-year-old girl has withheld stool since a painful bowel movement at age 5. She passes hard stools about every 5 days and has soiled her underwear about three times a week since then. Six months ago she was found to have hypothyroidism; she has been euthyroid on treatment for the past 4 months, but the withholding, hard stools and soiling continue unchanged.",
    "q": "What is the best diagnostic statement?",
    "choices": [
      "Encopresis, with constipation and overflow incontinence",
      "Encopresis is excluded by the medical condition",
      "Encopresis, without constipation and overflow incontinence",
      "Unspecified elimination disorder",
      "Other specified elimination disorder"
    ],
    "answer": 0,
    "why": "Criterion D allows a medical condition only **through a mechanism involving constipation** (p. 402), and hypothyroidism can cause constipation (p. 403); the differential adds that the constipation must not be explained by another medical condition (p. 405). Her withholding constipation and soiling **began before** the hypothyroidism and **persist once she is euthyroid**: **encopresis, with constipation and overflow incontinence**.",
    "whyNot": [
      "Correct.",
      "Her constipation predates the hypothyroidism and persists after treatment, so it is not explained by it (p. 405).",
      "She is clearly constipated.",
      "There is enough information.",
      "Full criteria are met."
    ]
  },
  {
    "id": "v11-19",
    "tag": "Overflow",
    "stem": "A mother says her 5-year-old son has had “diarrhea” for 4 months: his underwear is stained with loose stool several times a day, and he sometimes has a huge stool that hurts. He has no fever or weight loss. On examination there is a firm mass in the left lower abdomen, and the rectum is full of hard stool.",
    "q": "What is the most appropriate interpretation?",
    "choices": [
      "Infectious diarrhea; start loperamide and oral rehydration",
      "Irritable bowel syndrome",
      "Encopresis, without constipation",
      "Encopresis, with constipation and overflow incontinence",
      "Inflammatory bowel disease; encopresis excluded"
    ],
    "answer": 3,
    "why": "Loose stool leaking around a **fecal impaction** is **overflow**. Soiling several times a day for over 3 months at age 5: **encopresis, with constipation and overflow incontinence**.",
    "whyNot": [
      "An antidiarrheal would worsen the impaction (treatment guidance, outside the DSM).",
      "The findings show retention and overflow.",
      "He has an impaction.",
      "Correct.",
      "No features suggest IBD, and the leaking is overflow."
    ]
  },
  {
    "id": "v11-20",
    "tag": "Laxatives",
    "stem": "A 16-year-old girl at normal weight has, for the past 4 months, had episodes of eating a very large amount of food with a sense of loss of control, followed by taking laxatives, about three times a week. Over the same period she has had fecal accidents at school. She says her weight decides how she feels about herself.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Encopresis, without constipation and overflow incontinence",
      "Other specified elimination disorder",
      "Encopresis and bulimia nervosa",
      "Unspecified elimination disorder",
      "Bulimia nervosa (Ch 10), not encopresis"
    ],
    "answer": 4,
    "why": "Incontinence exclusively from **laxatives** is excluded from encopresis (Criterion D). Binges with compensatory laxative misuse weekly for 3 months and shape-driven self-worth: **bulimia nervosa** (Ch 10).",
    "whyNot": [
      "Laxative-induced incontinence is not encopresis.",
      "A residual elimination category does not fit laxative effects.",
      "Encopresis is excluded.",
      "The cause is known.",
      "Correct."
    ]
  },
  {
    "id": "v11-21",
    "tag": "Codes",
    "stem": "A 9-year-old boy is brought to the emergency room late at night by a neighbor because he has been wetting himself repeatedly and is distressed. His parents cannot be reached, his history is unknown, and urinalysis is normal. The psychiatrist on call must record a provisional diagnosis.",
    "q": "Which diagnosis and code fit best?",
    "choices": [
      "Enuresis, F98.0",
      "Unspecified elimination disorder, R32",
      "Other specified elimination disorder, N39.498",
      "Unspecified elimination disorder, R15.9",
      "Other specified elimination disorder, R15.9"
    ],
    "answer": 1,
    "why": "With **insufficient information** (e.g., the emergency room) and urinary symptoms: **unspecified elimination disorder, R32**.",
    "whyNot": [
      "With no history, medical and substance causes (Criterion D) cannot be excluded.",
      "Correct.",
      "Other specified requires a stated reason.",
      "R15.9 is for fecal symptoms.",
      "Fecal code and a stated reason; neither fits."
    ]
  },
  {
    "id": "v11-22",
    "tag": "Both",
    "stem": "A 7-year-old girl has soiled her underwear several times a week for 6 months and passes large hard stools every week. She also wets her clothes most afternoons and wets the bed four nights a week, both for the same 6 months, with no medical cause found on urinalysis or examination apart from a palpable stool mass.",
    "q": "What is the best diagnostic formulation?",
    "choices": [
      "Encopresis, with constipation and overflow incontinence, only; the wetting is part of it",
      "Enuresis only; soiling is part of it",
      "Encopresis with constipation, plus enuresis, nocturnal and diurnal",
      "Other specified elimination disorder",
      "Unspecified elimination disorder"
    ],
    "answer": 2,
    "why": "Each disorder meets its own criteria, and **co-occurrence** is recognized: **encopresis, with constipation and overflow incontinence** plus **enuresis, nocturnal and diurnal**.",
    "whyNot": [
      "Wetting meets its own criteria.",
      "Soiling meets its own criteria.",
      "Correct.",
      "Both full disorders are present.",
      "There is enough information."
    ],
    "then": {
      "q": "Outside the DSM, which step is most important first in management?",
      "choices": [
        "Start desmopressin",
        "Treat the constipation",
        "Start an enuresis alarm",
        "Start oxybutynin",
        "Restrict fluids"
      ],
      "answer": 1,
      "why": "Treat **constipation first**: it drives soiling and worsens bladder symptoms and UTIs; wetting may improve once it resolves."
    }
  },
  {
    "id": "v11-23",
    "tag": "Markers",
    "stem": "A 9-year-old boy has soiled about twice a month for a year. His stools are of normal form, daily and painless. His parents ask for tests. A colonic transit study shows that the radiopaque markers were promptly evacuated.",
    "q": "What does this result support?",
    "choices": [
      "Encopresis, with constipation and overflow incontinence",
      "Hirschsprung disease",
      "Slow-transit constipation with colonic inertia, needing manometry",
      "Encopresis, without constipation and overflow incontinence",
      "Fecal impaction"
    ],
    "answer": 3,
    "why": "**Prompt evacuation** of markers supports encopresis **without** constipation and overflow incontinence; **retained** markers would support the constipation subtype.",
    "whyNot": [
      "Retained markers would support this subtype.",
      "Hirschsprung disease causes retention.",
      "Slow transit retains markers.",
      "Correct.",
      "Impaction would retain markers."
    ]
  },
  {
    "id": "v11-24",
    "tag": "Culture",
    "stem": "A 7-year-old boy who spent his first 5 years in a residential institution was adopted 2 years ago. He wets the bed four nights a week and has never been dry at night. Examination and urinalysis are normal. His adoptive parents think the institution “toilet-trained him too early and too harshly.”",
    "q": "Which statement about enuresis is most accurate?",
    "choices": [
      "Toilet training does not explain the high institutional rates",
      "Early, harsh toilet training explains the high institutional rates",
      "Enuresis is rare in children from institutions",
      "Enuresis in adopted children is coded as unspecified",
      "He cannot be diagnosed until he has lived with his family for 3 years"
    ],
    "answer": 0,
    "why": "The manual notes **very high rates in orphanages and residential institutions**; toilet-training method or early timing does **not** account for them. He meets criteria for **enuresis, nocturnal only**.",
    "whyNot": [
      "Correct.",
      "The manual says this does not explain the high rates.",
      "Rates are very high in institutions.",
      "Full criteria are met; use F98.0.",
      "There is no such rule."
    ],
    "discuss": [
      "What else would you assess in a child adopted from institutional care?"
    ]
  },
  {
    "id": "v11-25",
    "tag": "Course",
    "stem": "The parents of a 6-year-old boy with primary nocturnal enuresis (four nights a week, normal workup) ask about the future. His father wet the bed until age 12. They worry he will wet into adulthood.",
    "q": "What is the most accurate counseling?",
    "choices": [
      "Most children stay wet until adulthood",
      "Spontaneous remission does not occur after age 5",
      "His father’s history lowers his risk",
      "About half continue to wet the bed into adulthood despite treatment",
      "About 5%–10% become dry each year, most by adolescence"
    ],
    "answer": 4,
    "why": "After 5, **5%–10%** remit spontaneously each year, most are dry by **adolescence**, and only about **1%** continue into adulthood. Paternal incontinence raises a child’s risk about **10-fold**.",
    "whyNot": [
      "Only about 1% persist into adulthood.",
      "Remission continues at 5%–10% a year.",
      "Paternal history raises risk.",
      "Only about 1% persist.",
      "Correct."
    ]
  }
]);
