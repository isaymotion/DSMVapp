/* Chapter 13 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   No treatment items: every question stays inside the DSM. */
SP.add("ch13", "vignettes", [
  {
    "id": "v13-01",
    "tag": "Lifelong early ejaculation",
    "stem": "A 26-year-old man has ejaculated about 20 seconds after vaginal penetration on roughly 9 of every 10 occasions since his first sexual experiences at age 19. It has happened with each of his three partners and in every setting. He feels he has no control, dreads future encounters and has stopped dating because he is so upset about it. Erections are normal. He takes no medications or drugs, drinks rarely, and has no urinary symptoms; thyroid tests and a prostate examination are normal. He has no depressive or anxiety symptoms.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F52.4 premature (early) ejaculation, lifelong, generalized, mild",
      "F52.4 premature (early) ejaculation, lifelong, generalized, moderate",
      "F52.4 premature (early) ejaculation, lifelong, generalized, severe",
      "F52.4 premature (early) ejaculation, acquired, situational, moderate",
      "No diagnosis; a short latency is normal in young men"
    ],
    "answer": 1,
    "why": "Ejaculation within **about 1 minute** of penetration, before he wishes, on **75%–100%** of occasions for far more than **6 months**, with distress. Present **since first sexual experiences** = **lifelong**; with every partner and setting = **generalized**. Premature ejaculation severity is set by **latency**, not distress: **about 15–30 seconds** is **moderate** (p. 502).",
    "whyNot": [
      "Mild is about 30 seconds to 1 minute; his latency is about 20 seconds.",
      "Correct.",
      "Severe means ejaculation before sexual activity, at its start, or within about 15 seconds of penetration.",
      "The problem began with his first sexual experiences and occurs with all partners and settings.",
      "A 20-second latency on nearly every occasion for 7 years, with marked distress, meets criteria."
    ],
    "then": {
      "q": "His clinician wonders how to establish the latency. What does the manual accept for clinical diagnosis?",
      "choices": [
        "Stopwatch timing by the partner over at least four encounters",
        "The man’s own estimate of the time from penetration to ejaculation",
        "Penile biothesiometry",
        "Nocturnal penile tumescence testing",
        "The partner’s estimate only, since men underestimate latency"
      ],
      "answer": 1,
      "why": "Estimated and measured latencies agree closely when latency is short, so in clinical settings the **man’s own estimate** is accepted in place of stopwatch timing (pp. 502, 504).",
      "whyNot": [
        "Stopwatch timing is used in research; the manual says it is not ideal in real-life sex and is not needed clinically.",
        "Correct.",
        "The manual lists no such test for premature ejaculation.",
        "This test helps separate organic from psychological erectile problems, not ejaculatory latency.",
        "The manual tells clinicians to accept the man’s estimate."
      ]
    },
    "discuss": [
      "Expert consensus now favors a 120-second threshold for lifelong premature ejaculation. How does that differ from the 1-minute DSM criterion, and why might prevalence estimates swing so widely?"
    ]
  },
  {
    "id": "v13-02",
    "tag": "Early ejaculation with a new partner",
    "stem": "A 24-year-old man had a usual latency of about 5 minutes during a 3-year relationship that ended last year. Three weeks ago he began a new relationship. During their first four sexual encounters he ejaculated within a minute of vaginal penetration; in the last two his latency was about 3 minutes. He is embarrassed and worried that something is wrong. He takes no medications or drugs, and his physical examination is normal.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "F52.4 premature (early) ejaculation, acquired, situational, mild",
      "F52.4 premature (early) ejaculation, lifelong, situational, mild",
      "F52.8 other specified sexual dysfunction",
      "No sexual dysfunction diagnosis"
    ],
    "answer": 3,
    "why": "**Episodic** early ejaculation with a **new partner** is common and normal, and the manual says it does not lead to a premature ejaculation diagnosis even when it is distressing. It has also lasted only **3 weeks**, far short of **6 months**, and is already improving (pp. 503–504).",
    "whyNot": [
      "Premature ejaculation requires at least 6 months of the pattern; this is episodic and brief.",
      "His latency was normal for years, so lifelong cannot apply, and the duration is not met.",
      "Short-term early ejaculation at the start of a relationship is an expected variation, not a residual disorder.",
      "Correct."
    ]
  },
  {
    "id": "v13-03",
    "tag": "Ejaculation before penetration",
    "stem": "A 41-year-old man had a latency of 6–8 minutes for the first 15 years of his marriage. For the past 8 months, on almost every occasion, he ejaculates during foreplay before penetration can take place, at home and on holidays alike. He is very upset and avoids intimacy. Erections are firm. His thyroid tests, urinalysis and prostate examination are normal; he takes no medications, has never used opioids or other drugs, and drinks one beer a week. He is not depressed or anxious, and the couple describe their marriage as close.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F52.4 premature (early) ejaculation, acquired, generalized, severe",
      "F52.4 premature (early) ejaculation, acquired, generalized, moderate",
      "F52.4 premature (early) ejaculation, lifelong, generalized, severe",
      "F52.8 other specified sexual dysfunction, since no penetrative latency can be measured",
      "F52.32 delayed ejaculation, acquired"
    ],
    "answer": 0,
    "why": "Normal function for years, then onset = **acquired**; in every setting = **generalized**. The **severe** level of premature ejaculation explicitly includes ejaculation **before sexual activity, at its start**, or within about 15 seconds of penetration. Acquired premature ejaculation typically starts in or after the **fourth decade** (pp. 502–503).",
    "whyNot": [
      "Correct.",
      "Moderate is about 15–30 seconds after penetration; he ejaculates before penetration.",
      "He had normal latency for 15 years.",
      "The severity scale already covers ejaculation before penetration, so the specific diagnosis applies.",
      "His ejaculation is too early, not too late."
    ]
  },
  {
    "id": "v13-04",
    "tag": "Early ejaculation in opioid withdrawal",
    "stem": "A 33-year-old man with severe opioid use disorder (seven criteria in the past year) stopped using heroin 6 days ago. He still has yawning, a runny nose, dilated pupils, gooseflesh and loose stools, though he says these are tolerable. Since stopping, he has had intercourse five times and ejaculated within about 20 seconds of penetration every time. While using heroin, and before he ever used it, his latency was several minutes. The early ejaculation is what he is most distressed about and asks for help with. He takes no other substances or medications.",
    "q": "How should the sexual problem be recorded?",
    "choices": [
      "F11.23 opioid withdrawal only",
      "F11.20 severe opioid use disorder and F52.4 premature (early) ejaculation, acquired, generalized, moderate",
      "F11.981 opioid-induced sexual dysfunction, with onset during withdrawal, severe",
      "F11.181 mild opioid use disorder with opioid-induced sexual dysfunction, with onset during withdrawal, severe",
      "F11.281 severe opioid use disorder with opioid-induced sexual dysfunction, with onset during withdrawal, severe"
    ],
    "answer": 4,
    "why": "Early ejaculation began **during opioid withdrawal** (withdrawal criteria are met), opioids can cause it, and it was absent before. With a **moderate or severe** use disorder the 4th character is **2**, and the use disorder is written into the same line, **not** given separately. Induced severity is by **frequency**: every occasion (**75% or more**) is **severe** (pp. 503–506).",
    "whyNot": [
      "The induced diagnosis replaces the withdrawal diagnosis when the sexual symptoms predominate and need clinical attention, as here.",
      "The problem is explained by withdrawal, so primary premature ejaculation is excluded (it would also need 6 months); the use disorder is not coded separately.",
      "The 4th character 9 is only for cases with no use disorder.",
      "His use disorder is severe, which takes the 4th character 2.",
      "Correct."
    ],
    "then": {
      "q": "Which later finding would most strongly suggest an independent sexual dysfunction rather than an induced one?",
      "choices": [
        "Early ejaculation that disappears within a week of the end of withdrawal",
        "Early ejaculation that is still present 2 months after withdrawal has fully resolved",
        "Early ejaculation that began 2 days after his last heroin use",
        "Return of a normal latency after he starts buprenorphine",
        "Distress that is worse than his other withdrawal symptoms"
      ],
      "answer": 1,
      "why": "Criterion C points to an independent dysfunction if symptoms came **before** the substance, **persist about 1 month or more** after acute withdrawal or severe intoxication ends, or there is a history of non-substance episodes (p. 505).",
      "whyNot": [
        "Prompt resolution after withdrawal supports the induced diagnosis.",
        "Correct.",
        "Onset soon after stopping fits withdrawal-related onset.",
        "Improvement as withdrawal is treated supports a substance link.",
        "Distress is required for either diagnosis and does not separate them."
      ]
    }
  },
  {
    "id": "v13-05",
    "tag": "Delayed ejaculation on fluoxetine",
    "stem": "A 35-year-old man started fluoxetine 20 mg daily for major depressive disorder 6 weeks ago, and his mood is clearly better. About 10 days after starting it, he noticed that ejaculation during sex with his wife became markedly delayed or did not happen at all on about 3 of every 5 occasions. Before fluoxetine his sexual function was normal for many years. He finds the change distressing and is thinking of stopping the drug. He uses no alcohol or other substances and has no medical illness.",
    "q": "Which diagnosis best accounts for the sexual problem?",
    "choices": [
      "F52.32 delayed ejaculation, acquired, generalized",
      "F19.981 fluoxetine-induced sexual dysfunction, with onset after medication use, severe",
      "F19.981 fluoxetine-induced sexual dysfunction, with onset after medication use, moderate",
      "F13.981 fluoxetine-induced sexual dysfunction, with onset after medication use, moderate",
      "No separate diagnosis; the problem is part of his major depressive disorder"
    ],
    "answer": 2,
    "why": "Onset **after starting** a drug that can delay ejaculation = **substance/medication-induced**. Antidepressants have no named class in the coding table, so they take the **other (or unknown) substance** code with **9** (no use disorder): **F19.981**, naming the drug. About **60%** of occasions is **moderate** (50%–75%) (pp. 505–507).",
    "whyNot": [
      "Delayed ejaculation is excluded when a medication explains the problem, and about a month falls far short of 6 months.",
      "Severe means 75% or more of occasions; his is about 60%.",
      "Correct.",
      "F13 is the sedative, hypnotic or anxiolytic class; fluoxetine belongs under other (or unknown) substance.",
      "The problem began with fluoxetine as his depression was improving, which points to the drug."
    ],
    "then": {
      "q": "Which course would establish the drug as the cause most clearly?",
      "choices": [
        "The problem continues unchanged for 3 months after fluoxetine is stopped",
        "The problem began before he started fluoxetine",
        "The problem resolves after fluoxetine is stopped and returns when it is restarted",
        "The problem worsens as his depression worsens",
        "His testosterone level is low-normal"
      ],
      "answer": 2,
      "why": "A clear diagnosis can be made when the problem starts **after** the drug is started, **fades** when it is stopped and **recurs** on **rechallenge** with the same agent (p. 509). Once the drug is stopped, improvement usually comes within days to several weeks (p. 507).",
      "whyNot": [
        "Persistence beyond about a month argues for an independent dysfunction (although SSRI effects occasionally persist).",
        "Onset before the drug rules out the induced diagnosis.",
        "Correct.",
        "Tracking with depression suggests the depression, not the drug, is responsible.",
        "A low-normal level does not establish any cause."
      ]
    }
  },
  {
    "id": "v13-06",
    "tag": "Cocaine and erectile problems",
    "stem": "A 28-year-old man has used cocaine most weekends for 7 months. He has tried and failed to cut down, and he has missed several Monday shifts while recovering; he has no other features of a use disorder. In the past 6 months he has had sex only after using cocaine. While high he is euphoric and talkative, with dilated pupils and a racing pulse, and on about 3 of every 5 of these occasions he cannot keep an erection. Morning erections and masturbation when sober are normal. He is bothered by the problem. He uses no other drugs or medications.",
    "q": "What is the correct diagnosis line?",
    "choices": [
      "F14.10 mild cocaine use disorder and F14.981 cocaine-induced sexual dysfunction, with onset during intoxication, moderate",
      "F14.181 mild cocaine use disorder with cocaine-induced sexual dysfunction, with onset during intoxication, moderate",
      "F14.281 moderate cocaine use disorder with cocaine-induced sexual dysfunction, with onset during intoxication, moderate",
      "F14.181 mild cocaine use disorder with cocaine-induced sexual dysfunction, with onset during intoxication, severe",
      "F52.21 erectile disorder, acquired, situational"
    ],
    "answer": 1,
    "why": "Two use-disorder criteria = **mild** use disorder, so the 4th character is **1**, and it is recorded **in the same line** before “with”. The problem arises during **cocaine intoxication** (signs present). About **60%** of occasions = **moderate** (pp. 505–506).",
    "whyNot": [
      "No separate use-disorder diagnosis is given; the use disorder is built into the induced code.",
      "Correct.",
      "Two criteria make the use disorder mild, not moderate.",
      "Severe means 75% or more of occasions.",
      "The problem occurs only while intoxicated, with normal erections when sober, so it is substance-induced."
    ],
    "then": {
      "q": "Suppose instead that he had no pattern of cocaine use and the same problem followed a single night of heavy use at a party. Which code would apply?",
      "choices": [
        "F14.181",
        "F14.281",
        "F14.981",
        "F19.981",
        "F52.21"
      ],
      "answer": 2,
      "why": "With **no** comorbid use disorder (for example, after one heavy use), the 4th character is **9** and only the induced dysfunction is recorded: **F14.981** cocaine-induced sexual dysfunction, with onset during intoxication (pp. 505–506).",
      "whyNot": [
        "The 1 is for a mild use disorder.",
        "The 2 is for a moderate or severe use disorder.",
        "Correct.",
        "Cocaine has its own row, so the other (or unknown) substance code is not used.",
        "A problem explained by intoxication is not erectile disorder."
      ]
    }
  },
  {
    "id": "v13-07",
    "tag": "Clonazepam and orgasm",
    "stem": "A 45-year-old woman with panic disorder started clonazepam 0.5 mg twice daily 3 months ago. She takes it exactly as prescribed, has never taken extra doses and has no features of a sedative use disorder; she takes no other medications. Her panic attacks are now rare. Within 2 weeks of starting clonazepam, she found that she could not reach orgasm, or reached it only after a long delay, on about 4 of every 5 occasions of sex with her husband. Before that, orgasm had been reliable for many years. Her desire and arousal are unchanged. She is distressed by the change.",
    "q": "How should the sexual problem be recorded?",
    "choices": [
      "F19.981 clonazepam-induced sexual dysfunction, with onset after medication use, severe",
      "F13.181 mild sedative, hypnotic, or anxiolytic use disorder with clonazepam-induced sexual dysfunction, with onset after medication use, severe",
      "F13.981 clonazepam-induced sexual dysfunction, with onset after medication use, moderate",
      "F13.981 clonazepam-induced sexual dysfunction, with onset after medication use, severe",
      "F52.31 female orgasmic disorder, acquired, generalized"
    ],
    "answer": 3,
    "why": "Benzodiazepines belong to a **named class** in the table (sedative, hypnotic, or anxiolytic), so the code is **F13**, with **9** because there is **no use disorder**. Onset after starting the drug = **with onset after medication use**. About **80%** of occasions = **severe** (75% or more) (pp. 505–507).",
    "whyNot": [
      "F19 is for substances that fit no class, such as antidepressants; benzodiazepines have their own class.",
      "Taking a medication as prescribed is not a use disorder, so the 4th character is 9.",
      "Moderate is 50%–75% of occasions; hers is about 80%.",
      "Correct.",
      "The problem began with the medication, and about 2½ months falls short of 6; the induced diagnosis applies instead."
    ]
  },
  {
    "id": "v13-08",
    "tag": "Low desire in depression",
    "stem": "A 38-year-old man has had depressed mood most of the day, loss of interest in nearly all activities, early-morning waking, a 6-kg weight loss, fatigue and feelings of worthlessness for 8 months. Since the depression began he has had no desire for sex and no sexual thoughts or fantasies, which troubles him. His desire was normal before. He takes no medications or substances, his testosterone, prolactin and thyroid tests are normal, and his relationship is supportive.",
    "q": "What is the most accurate diagnostic conclusion?",
    "choices": [
      "Major depressive disorder only; no separate sexual dysfunction diagnosis",
      "Major depressive disorder and F52.0 male hypoactive sexual desire disorder, acquired, generalized",
      "F52.0 male hypoactive sexual desire disorder, acquired, generalized, only",
      "F52.8 other specified sexual dysfunction",
      "Substance/medication-induced sexual dysfunction"
    ],
    "answer": 0,
    "why": "When a **nonsexual mental disorder** explains the sexual problem, **only** that disorder is diagnosed (p. 478). His low desire began with, and is part of, the pervasive loss of interest of **major depression** (p. 501).",
    "whyNot": [
      "Correct.",
      "Criterion D excludes male hypoactive sexual desire disorder when another mental disorder better explains it.",
      "This ignores the depressive episode that accounts for the low desire.",
      "The residual category is also not used when a nonsexual disorder explains the symptoms.",
      "He takes no medications or substances."
    ],
    "discuss": [
      "If his mood fully recovers but low desire and absent fantasies persist for months, how would your diagnosis change?"
    ]
  },
  {
    "id": "v13-09",
    "tag": "Erectile failure from vascular disease",
    "stem": "A 58-year-old man with 15 years of poorly controlled diabetes, hypertension and a 30-pack-year smoking history (he quit 10 years ago) describes erection problems that came on gradually over 2 years. He now cannot obtain a usable erection in any situation, including masturbation, and no longer wakes with erections. He is distressed. His medications (metformin and amlodipine) have been unchanged for a decade. Nocturnal penile tumescence testing shows no adequate erections during sleep, and penile Doppler ultrasound shows marked arterial insufficiency. He has no depressive symptoms, and his marriage is good.",
    "q": "What is the most appropriate diagnostic conclusion?",
    "choices": [
      "F52.21 erectile disorder, acquired, generalized, severe",
      "F52.8 other specified sexual dysfunction",
      "F52.9 unspecified sexual dysfunction",
      "Substance/medication-induced sexual dysfunction from amlodipine",
      "No mental disorder diagnosis; the erectile dysfunction is attributable to vascular disease"
    ],
    "answer": 4,
    "why": "When erectile problems are **fully explained by another medical condition**, **no psychiatric diagnosis** is made (pp. 478, 485). Gradual, generalized onset, age over 40–50 with vascular risk factors, **absent sleep erections** and abnormal Doppler all point to an organic cause.",
    "whyNot": [
      "Criterion D excludes erectile disorder when another medical condition accounts for it.",
      "Residual categories are for sexual dysfunctions that fall short of criteria, not for medical problems.",
      "There is enough information, and it points to a medical cause.",
      "Onset did not follow any change in his medications, which have been stable for 10 years.",
      "Correct."
    ],
    "then": {
      "q": "In a different man with erectile complaints, which test result would point most toward a psychological cause?",
      "choices": [
        "Low free testosterone",
        "Raised fasting glucose",
        "Adequate erections during REM sleep on nocturnal penile tumescence testing",
        "Slowed pudendal nerve conduction",
        "Abnormal dynamic infusion cavernosography"
      ],
      "answer": 2,
      "why": "Nocturnal tumescence testing assumes that **adequate erections in REM sleep** mean the erectile system works, so daytime failure is likely **psychological** (p. 484).",
      "whyNot": [
        "Low testosterone suggests an endocrine contribution.",
        "Raised glucose screens for diabetes, an organic risk factor.",
        "Correct.",
        "Abnormal nerve conduction suggests peripheral neuropathy.",
        "Cavernosography assesses vascular integrity; an abnormal result suggests vascular disease."
      ]
    }
  },
  {
    "id": "v13-10",
    "tag": "Diabetes but a psychological cause",
    "stem": "A 36-year-old man with well-controlled type 1 diabetes (HbA1c 6.6%) lost his erection once during sex with his wife 9 months ago after drinking at a party. Since then, sober, he loses his erection partway through intercourse with her on almost every occasion and dreads each attempt. He has firm erections on waking and when masturbating. Nocturnal penile tumescence testing is normal, and his foot sensation, testosterone and lipids are normal. He is distressed, but the marriage is otherwise warm and he has no depressive symptoms. He drinks rarely and takes only insulin.",
    "q": "Which description fits best?",
    "choices": [
      "No mental disorder; erectile dysfunction due to diabetes",
      "F52.21 erectile disorder, acquired, generalized",
      "F52.21 erectile disorder, acquired, situational",
      "F52.21 erectile disorder, lifelong, situational",
      "F10.981 alcohol-induced sexual dysfunction, with onset during intoxication"
    ],
    "answer": 2,
    "why": "Having a disease that can cause erectile problems **does not prove** it is the cause; a man with diabetes can develop erectile disorder from psychological factors (p. 485). Sudden onset, age under 40, firm erections when alone and normal sleep erections point to a **psychological** cause. Onset after normal function = **acquired**; only with partnered sex = **situational**.",
    "whyNot": [
      "Normal sleep and morning erections, normal nerve findings and good control make a diabetic cause unlikely.",
      "Erections are normal with masturbation and on waking, so the problem is limited to certain situations.",
      "Correct.",
      "Function was normal before 9 months ago.",
      "Alcohol was involved only in the first episode; the problem now occurs when sober."
    ],
    "discuss": [
      "Why might the manual still advise checking lipids in a man over 40 with erectile problems?"
    ]
  },
  {
    "id": "v13-11",
    "tag": "Normal erections, high expectations",
    "stem": "A 24-year-old man asks for help because, after ejaculating, he cannot regain an erection within 5 minutes to have intercourse again, as he sees in pornography. He gets and keeps firm erections and completes intercourse on every occasion, and his partner says she is satisfied. He is distressed about it and has felt this way for a year. He takes no medications or substances and has no medical illness.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "F52.21 erectile disorder, lifelong, generalized",
      "No diagnosis; normal erectile function with excessive expectations",
      "F52.21 erectile disorder, acquired, situational",
      "F52.8 other specified sexual dysfunction",
      "F52.0 male hypoactive sexual desire disorder"
    ],
    "answer": 1,
    "why": "The differential for erectile disorder includes **normal erectile function** in a man with **excessive expectations** (p. 484). He has no difficulty obtaining, maintaining or keeping rigidity; a refractory period after ejaculation is normal.",
    "whyNot": [
      "None of the three erectile symptoms is present.",
      "Correct.",
      "None of the three erectile symptoms is present in any situation.",
      "There is no sexual dysfunction to classify; his concern rests on unrealistic expectations.",
      "Nothing suggests low desire or deficient fantasies."
    ]
  },
  {
    "id": "v13-12",
    "tag": "Can’t ejaculate with a partner",
    "stem": "A 33-year-old man has been married for 3 years and the couple want a child. Since his first sexual partner at age 21, he has been unable to ejaculate during manual, oral or penile-vaginal sex on about 9 of every 10 occasions, despite wanting to; he usually stops after 30–40 minutes of thrusting, exhausted and sore. Alone, he ejaculates within a few minutes when masturbating, which he does daily using a firm, particular grip. He feels pleasure and has normal erections and desire. He is distressed. He takes no medications or drugs, drinks rarely, and his neurological examination, glucose and testosterone are normal. He has no depressive symptoms, and the marriage is affectionate.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "F52.8 other specified sexual dysfunction (anhedonic ejaculation)",
      "F52.32 delayed ejaculation, acquired",
      "No diagnosis; he can ejaculate, so there is no dysfunction",
      "F52.32 delayed ejaculation, lifelong",
      "F52.0 male hypoactive sexual desire disorder"
    ],
    "answer": 3,
    "why": "Marked delay or absence of ejaculation on **75%–100%** of **partnered** occasions (manual, oral, coital or anal count), without wanting the delay, for over **6 months**, with distress. Many men with delayed ejaculation **can ejaculate with self-stimulation**, and frequent masturbation with an **idiosyncratic technique** is an associated feature. Present since he became sexually active = **lifelong** (pp. 478–479).",
    "whyNot": [
      "Anhedonic ejaculation means normal ejaculation with reduced pleasure; his problem is failure to ejaculate.",
      "The problem has been present since his first partner.",
      "The criterion is about partnered sexual activity; ejaculating when alone does not rule out the diagnosis.",
      "Correct.",
      "His desire is normal."
    ],
    "discuss": [
      "Why does the manual say there is no agreed cutoff for “delay”, and what would make you decide his expectations were unrealistic?"
    ]
  },
  {
    "id": "v13-13",
    "tag": "Orgasm without ejaculate",
    "stem": "A 61-year-old man with 20 years of type 2 diabetes and documented autonomic neuropathy reports that for a year he has reached orgasm at the usual time and with the usual pleasure, but little or no fluid comes out. His urine just after orgasm is cloudy, and microscopy shows sperm. He is upset by the change. His medications (metformin and insulin) have not changed in 5 years, and he takes no alpha-blockers. Desire and erections are normal.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "No sexual dysfunction diagnosis; retrograde ejaculation from a medical cause",
      "F52.8 other specified sexual dysfunction (anhedonic ejaculation)",
      "F19.981 metformin-induced sexual dysfunction, with onset after medication use",
      "F52.32 delayed ejaculation, acquired"
    ],
    "answer": 0,
    "why": "Delayed ejaculation must be told apart from urological conditions such as **retrograde ejaculation**, which have hormonal, neurological or anatomical causes (p. 481). Sperm in urine after orgasm in a man with **autonomic neuropathy** shows the semen is going backward; a medical cause gets **no psychiatric diagnosis** (p. 478).",
    "whyNot": [
      "Correct.",
      "His pleasure is preserved, so this is not anhedonic ejaculation.",
      "Onset did not follow any change in medication.",
      "Orgasm comes at the usual time; semen is going into the bladder, which is a urological problem."
    ]
  },
  {
    "id": "v13-14",
    "tag": "Ejaculation without pleasure",
    "stem": "A 46-year-old man says that for 10 months, on every occasion, he ejaculates at his usual time with normal volume and force, but the sensation of orgasm is nearly absent. His desire and erections are normal. He still enjoys work and hobbies, and his mood is normal. He takes no medications, drinks two beers a week and uses no drugs. His neurological examination and testosterone are normal. He is distressed, and the clinician wants the record to state exactly what the problem is.",
    "q": "Which diagnosis is most appropriate?",
    "choices": [
      "F52.32 delayed ejaculation, acquired",
      "No diagnosis",
      "F52.9 unspecified sexual dysfunction",
      "F52.0 male hypoactive sexual desire disorder",
      "F52.8 other specified sexual dysfunction, anhedonic ejaculation"
    ],
    "answer": 4,
    "why": "Ejaculation and orgasm usually go together but can separate. Normal ejaculation with **decreased pleasure** (anhedonic ejaculation) is **not** delayed ejaculation; it can be coded as **other specified** or unspecified sexual dysfunction (p. 481). Because the clinician wants to name the reason, **other specified (F52.8)** with the reason written in is the fit (p. 509).",
    "whyNot": [
      "His ejaculation is not delayed, infrequent or absent.",
      "The symptom is distressing and is characteristic of a sexual dysfunction.",
      "Unspecified is used when the clinician chooses not to give the reason or lacks information; here the reason is known and to be recorded.",
      "His desire and fantasies are normal.",
      "Correct."
    ]
  },
  {
    "id": "v13-15",
    "tag": "Orgasm only with clitoral stimulation",
    "stem": "A 28-year-old woman reaches orgasm on most occasions when her partner stimulates her clitoris by hand or mouth or when they use a vibrator during sex, and she enjoys sex and becomes well aroused. She has never had an orgasm from penile-vaginal intercourse alone. After friends said they climax from intercourse, she became distressed and worried that she is abnormal. She takes no medications, and the relationship is good.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "F52.31 female orgasmic disorder, lifelong, situational",
      "F52.31 female orgasmic disorder, lifelong, generalized, never experienced an orgasm under any situation",
      "No sexual dysfunction diagnosis",
      "F52.22 female sexual interest/arousal disorder",
      "F52.8 other specified sexual dysfunction"
    ],
    "answer": 2,
    "why": "Many women need **clitoral stimulation** to reach orgasm, and few always climax during intercourse. Reaching orgasm with clitoral stimulation but **not during intercourse** does **not** meet criteria for female orgasmic disorder (p. 486).",
    "whyNot": [
      "Being unable to climax from intercourse alone, while reaching orgasm in other ways, is a normal variation.",
      "She has orgasms regularly.",
      "Correct.",
      "Her interest and arousal are good.",
      "There is no dysfunction to classify; education and reassurance may still help."
    ]
  },
  {
    "id": "v13-16",
    "tag": "Never had an orgasm",
    "stem": "A 30-year-old woman has never had an orgasm in any situation. She has tried masturbating by hand and with a vibrator, and her partner of 4 years gives her prolonged oral and manual clitoral stimulation; together they have read about techniques and given it plenty of time. Her desire, arousal and lubrication are good and she enjoys closeness during sex. She often cries afterward and says the problem causes her severe distress. She takes no medications, her gynecological and neurological examinations are normal, and she has no depressive or anxiety symptoms. The relationship is loving.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F52.31 female orgasmic disorder, lifelong, generalized, severe",
      "F52.31 female orgasmic disorder, lifelong, generalized, never experienced an orgasm under any situation, severe",
      "F52.31 female orgasmic disorder, acquired, generalized, never experienced an orgasm under any situation, severe",
      "F52.31 female orgasmic disorder, lifelong, situational, moderate",
      "No diagnosis; about 10% of women never experience orgasm"
    ],
    "answer": 1,
    "why": "Absent orgasm on **all** occasions despite **adequate stimulation**, for years, with distress. Present from the start = **lifelong**; in every situation = **generalized**. Female orgasmic disorder has its own extra specifier, **never experienced an orgasm under any situation**. Severity is by **distress**: severe (pp. 485–486).",
    "whyNot": [
      "This leaves out the specifier unique to this disorder, which applies because she has never had an orgasm.",
      "Correct.",
      "Orgasm difficulty has always been present.",
      "The problem occurs in every situation, and her distress is severe.",
      "That figure is a prevalence statistic, not a reason to withhold a diagnosis when criteria are met."
    ],
    "then": {
      "q": "Suppose instead she had only ever had brief intercourse with no clitoral stimulation, and she knew little about how her body responds. What would follow?",
      "choices": [
        "F52.31 female orgasmic disorder, lifelong, situational",
        "No sexual dysfunction diagnosis, although care such as education may still be needed",
        "F52.22 female sexual interest/arousal disorder",
        "F52.9 unspecified sexual dysfunction"
      ],
      "answer": 1,
      "why": "If difficulties result from **inadequate sexual stimulation**, including lack of knowledge about effective stimulation, a sexual dysfunction is **not** diagnosed, though she may still need care (pp. 477, 486).",
      "whyNot": [
        "Inadequate stimulation rules out the diagnosis.",
        "Correct.",
        "Nothing points to reduced interest or arousal.",
        "The reason is known and it is not a dysfunction, so no residual category is needed."
      ]
    }
  },
  {
    "id": "v13-17",
    "tag": "Counting interest/arousal indicators",
    "stem": "A 39-year-old woman says that for 10 months she has had little or no interest in sex, rarely has sexual thoughts or fantasies, and no longer starts sex; she usually turns down her husband’s approaches. When they do have sex she still feels pleasure and normal genital sensations most of the time, and a romantic film can still stir her interest. Her desire was normal through 12 years of marriage, and the change shows up at home and on holidays alike. She is distressed and misses how she used to feel. Her mood, sleep and interest in other activities are normal. She uses a copper IUD and takes no medications; thyroid tests and glucose are normal. The marriage is warm, with no conflict or violence, and she has no pain with sex.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F52.8 other specified sexual dysfunction",
      "F52.22 female sexual interest/arousal disorder, lifelong, generalized",
      "Not met; at least four of the six indicators are required",
      "F52.22 female sexual interest/arousal disorder, acquired, generalized",
      "F52.31 female orgasmic disorder, acquired, generalized"
    ],
    "answer": 3,
    "why": "Female sexual interest/arousal disorder needs **at least 3 of 6** indicators. She has **reduced interest** (A1), **reduced thoughts or fantasies** (A2) and **no initiation with unreceptiveness** (A3), for about **6 months or more**, with distress and no exclusion. Pleasure, sensations and response to cues are preserved, which does not matter once three are present. Normal before = **acquired** (pp. 489–490).",
    "whyNot": [
      "Full criteria are met, so the residual category is not used.",
      "Her desire was normal for 12 years.",
      "The threshold is three of six, not four.",
      "Correct.",
      "Nothing suggests orgasm difficulty."
    ],
    "then": {
      "q": "In a different couple, the wife wants sex twice a week and the husband wants it daily. She has none of the six indicators and is distressed only by their arguments about frequency. What is the conclusion?",
      "choices": [
        "F52.22 female sexual interest/arousal disorder, acquired, situational",
        "No sexual dysfunction diagnosis; a desire discrepancy alone is not enough",
        "F52.0 male hypoactive sexual desire disorder for the husband",
        "F52.9 unspecified sexual dysfunction"
      ],
      "answer": 1,
      "why": "A **desire discrepancy**, where one partner wants sex less often than the other, is **not sufficient** to diagnose female sexual interest/arousal disorder (p. 489).",
      "whyNot": [
        "She has none of the indicators; lower desire than her partner is not the same as absent or reduced interest.",
        "Correct.",
        "The husband has high, not low, desire.",
        "There is no sexual dysfunction to classify."
      ]
    },
    "discuss": [
      "How should a couple’s preferences about who usually starts sex shape the way you score Criterion A3?"
    ]
  },
  {
    "id": "v13-18",
    "tag": "Low desire, rich fantasies",
    "stem": "A 42-year-old man has had little desire for sex with his partner for 8 months and rarely initiates it. He has sexual fantasies several times a day and masturbates to them most days. He is personally distressed about the change. He describes the relationship as affectionate, with no conflict, and has no depressive symptoms. Erections are normal, he takes no medications or substances, and his testosterone, prolactin and thyroid tests are normal.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "Criteria for male hypoactive sexual desire disorder are not met, because his sexual thoughts and fantasies are not deficient",
      "F52.0 male hypoactive sexual desire disorder, acquired, generalized",
      "F52.0 male hypoactive sexual desire disorder, acquired, situational",
      "F52.21 erectile disorder, acquired, situational",
      "Z63.0 relationship distress with spouse or intimate partner"
    ],
    "answer": 0,
    "why": "Male hypoactive sexual desire disorder requires **both** deficient or absent sexual **thoughts or fantasies** **and** deficient **desire for sexual activity** (Criterion A). His frequent fantasies mean Criterion A is not met (pp. 498–499).",
    "whyNot": [
      "Correct.",
      "Criterion A is not met because his fantasies are frequent.",
      "Criterion A is not met because his fantasies are frequent.",
      "His erections are normal.",
      "The relationship is described as affectionate, without distress."
    ],
    "discuss": [
      "What further history about the relationship and his partner would you want before deciding how to help?"
    ]
  },
  {
    "id": "v13-19",
    "tag": "Erection problems and lost desire",
    "stem": "A 49-year-old man has had difficulty keeping an erection on almost every occasion for 10 months. A few months after the erection problems began, he lost interest in sex, and he now has little desire for it and almost no sexual thoughts or fantasies; these have also lasted more than 6 months. He is distressed by both. A urological evaluation, including penile Doppler, found no vascular or neurological cause, and his testosterone, prolactin, thyroid tests, glucose and lipids are normal. He takes no medications or substances, has no depressive symptoms, and his marriage is good.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F52.21 erectile disorder only, since the low desire is secondary",
      "F52.0 male hypoactive sexual desire disorder only",
      "F52.9 unspecified sexual dysfunction",
      "F52.8 other specified sexual dysfunction",
      "F52.21 erectile disorder and F52.0 male hypoactive sexual desire disorder"
    ],
    "answer": 4,
    "why": "When a person has **several** sexual dysfunctions, **all** are diagnosed (p. 477). Another sexual dysfunction does **not** exclude male hypoactive sexual desire disorder; up to half of men with low desire also have erectile difficulties (p. 501). Each set of criteria is met here.",
    "whyNot": [
      "Low desire that follows erectile problems is still diagnosed when its own criteria are met.",
      "The erectile problem fully meets its own criteria.",
      "The information is complete.",
      "Both specific disorders are fully met, so residual categories are not used.",
      "Correct."
    ]
  },
  {
    "id": "v13-20",
    "tag": "Asexual identity",
    "stem": "A 27-year-old man comes at his girlfriend’s urging. He has never felt desire for sex or had sexual fantasies, and since adolescence he has identified as asexual, which he sees as a settled part of who he is. He values the romantic relationship and is upset that his girlfriend is unhappy about it. His testosterone, prolactin and thyroid tests are normal, he takes no medications or substances, and he has no depressive symptoms.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "F52.0 male hypoactive sexual desire disorder, lifelong, generalized",
      "F52.8 other specified sexual dysfunction",
      "No sexual dysfunction diagnosis",
      "Z63.0 relationship distress with spouse or intimate partner, with F52.0 male hypoactive sexual desire disorder"
    ],
    "answer": 2,
    "why": "If a man’s low desire is explained by **self-identification as asexual**, male hypoactive sexual desire disorder is **not** diagnosed (p. 501). The same rule applies to female sexual interest/arousal disorder (p. 490).",
    "whyNot": [
      "His lifelong absence of desire is explained by his asexual identity.",
      "An asexual identity is not a dysfunction to be placed in a residual category.",
      "Correct.",
      "No sexual dysfunction is present, and nothing suggests severe relationship distress."
    ],
    "discuss": [
      "How would you support the couple without treating his identity as a disorder?"
    ]
  },
  {
    "id": "v13-21",
    "tag": "Pain and tightening with penetration",
    "stem": "A 23-year-old woman has felt sharp, burning pain at the vaginal entrance and a tightening of her pelvic floor with every attempt at penetration since she first tried to have intercourse 18 months ago. As a teenager she could never insert a tampon. She now dreads sex, although she enjoys sexual activity that does not involve penetration. Her gynecologist reproduces the pain by touching the vestibule with a cotton swab and finds no infection, skin disease or signs of endometriosis. She takes no medications. She describes severe distress, and her partner is supportive.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "F52.6 genito-pelvic pain/penetration disorder, lifelong, generalized, severe",
      "F52.6 genito-pelvic pain/penetration disorder, lifelong, severe",
      "F52.6 genito-pelvic pain/penetration disorder, acquired, severe",
      "F40.298 specific phobia, other type",
      "No mental disorder diagnosis; the pain is a gynecological condition"
    ],
    "answer": 1,
    "why": "She has penetration difficulty, pain, fear of pain and pelvic floor tightening (one of the four would be enough), for over **6 months**, with distress. Present since first attempts = **lifelong**. This disorder takes **only** lifelong/acquired and **severity**; it has **no generalized/situational** specifier (pp. 493–494). Tampon difficulty is an important early sign (p. 496).",
    "whyNot": [
      "Generalized/situational is not a specifier for this disorder.",
      "Correct.",
      "There has never been a period of pain-free intercourse.",
      "Her fear is tied to pain with penetration and comes with pain and muscle tightening, which this diagnosis covers.",
      "Even if her vestibular pain is labeled provoked vestibulodynia, the manual says such women are likely to meet criteria for this disorder, and a coexisting medical condition does not exclude it (pp. 495, 497)."
    ],
    "then": {
      "q": "A 35-year-old man reports a year of distressing pelvic and penile pain during and after intercourse, with fear of sex. Urology finds no infection or structural cause. Which diagnosis fits?",
      "choices": [
        "F52.6 genito-pelvic pain/penetration disorder, acquired",
        "F52.8 other specified sexual dysfunction",
        "F45.1 somatic symptom disorder",
        "No diagnosis is possible in a male"
      ],
      "answer": 1,
      "why": "Genito-pelvic pain/penetration disorder is given **only to females** for now. Males who appear to fit the pattern, such as those with urological chronic pelvic pain, may receive **other specified** or unspecified sexual dysfunction (p. 497).",
      "whyNot": [
        "The manual says research does not yet justify applying this diagnosis to males.",
        "Correct.",
        "Nothing suggests excessive thoughts, feelings or behaviors about the symptom.",
        "The residual categories are available."
      ]
    }
  },
  {
    "id": "v13-22",
    "tag": "Low desire after an affair",
    "stem": "A 37-year-old woman discovered her husband’s affair 9 months ago. Since then they argue nearly every day, sleep in separate rooms and are discussing separation. Over the same period she has had no interest in sex with him and no sexual thoughts, turns down his approaches and feels no pleasure on the few occasions they have had sex. Her sexual function was normal for the 10 years before. She is distressed. She feels sad when she thinks about the marriage, but her sleep, appetite, energy and concentration are normal and she enjoys work and friends. She takes no medications, and her thyroid tests and glucose are normal.",
    "q": "What is the most appropriate diagnostic conclusion?",
    "choices": [
      "F52.22 female sexual interest/arousal disorder, acquired, situational",
      "F52.22 female sexual interest/arousal disorder with Z63.0 relationship distress with spouse or intimate partner",
      "F32.0 major depressive disorder, single episode, mild",
      "No sexual dysfunction diagnosis; Z63.0 relationship distress with spouse or intimate partner",
      "F52.8 other specified sexual dysfunction"
    ],
    "answer": 3,
    "why": "If **severe relationship distress**, partner violence or major stressors better explain the problem, a sexual dysfunction is **not** diagnosed; a **Z code** such as **Z63.0** may be listed instead (p. 478).",
    "whyNot": [
      "Criterion D excludes the diagnosis when severe relationship distress explains the symptoms.",
      "The sexual diagnosis is excluded, so it is not listed alongside the Z code.",
      "Her sleep, appetite, energy, concentration and enjoyment are intact; she does not meet criteria for a depressive episode.",
      "Correct.",
      "The residual category is also not used for problems that relationship distress explains."
    ],
    "discuss": [
      "If her husband had also been physically violent, what would you need to do beyond choosing a code?"
    ]
  },
  {
    "id": "v13-23",
    "tag": "Too little information",
    "stem": "A 50-year-old man calls a sexual health clinic’s triage line. He says he has had a distressing “problem in bed” for about a year and wants an appointment, but he will not describe it further and ends the call. The triage clinician must record a provisional diagnosis to book the referral.",
    "q": "What is the most appropriate provisional diagnosis?",
    "choices": [
      "F52.9 unspecified sexual dysfunction",
      "F52.8 other specified sexual dysfunction",
      "F52.21 erectile disorder",
      "No diagnosis can be recorded"
    ],
    "answer": 0,
    "why": "**Unspecified sexual dysfunction (F52.9)** is used when distressing sexual symptoms predominate but there is **not enough information** for a specific diagnosis or when the clinician chooses not to give the reason (p. 509).",
    "whyNot": [
      "Correct.",
      "Other specified requires the clinician to state a specific reason, which is unknown here.",
      "Nothing indicates what kind of problem he has.",
      "The unspecified category exists for exactly this situation."
    ]
  },
  {
    "id": "v13-24",
    "tag": "Low desire after a business failure",
    "stem": "A 45-year-old man’s business failed 2 months ago, leaving him with heavy debts. Since then he has had almost no desire for sex and few sexual thoughts, which distresses him. Before this his desire was normal. He worries about money but has no persistent depressed mood, sleeps and eats normally and still enjoys football with friends. His erections are normal, he takes no medications or substances, his testosterone and thyroid tests are normal, and his marriage is supportive.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "F52.0 male hypoactive sexual desire disorder, acquired, generalized",
      "F52.8 other specified sexual dysfunction",
      "F52.0 male hypoactive sexual desire disorder, acquired, situational",
      "Major depressive disorder",
      "No male hypoactive sexual desire disorder at this time"
    ],
    "answer": 4,
    "why": "The **6-month** duration guards against diagnosing a **temporary, reactive** drop in desire after an adverse event such as **business failure**. If the stressor and low desire persist beyond 6 months, clinical judgment decides (p. 499).",
    "whyNot": [
      "Two months is well short of about 6 months, and the change is a reaction to an acute stressor.",
      "Short-term changes in desire are not diagnosed as a disorder, residual or otherwise.",
      "Two months is far short of the approximately 6 months required, and the drop in desire is a reaction to an acute stressor.",
      "He has no persistent depressed mood or loss of interest in other activities.",
      "Correct."
    ]
  },
  {
    "id": "v13-25",
    "tag": "Pain that began after childbirth",
    "stem": "A 33-year-old woman had pain-free intercourse for 8 years. Since giving birth 10 months ago, she has had marked burning pain at the vaginal entrance with every attempt at penetration. She is not afraid of sex and notices no muscle tightening; the pain is her only symptom. She stopped breastfeeding 7 months ago. Her perineum is well healed, and her gynecologist finds no infection, atrophy or other disease. She takes no medications, has no depressive symptoms, and rates her distress as moderate. Her partner is supportive.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Not met; at least two of the four symptom dimensions are required",
      "F52.6 genito-pelvic pain/penetration disorder, lifelong, moderate",
      "F52.6 genito-pelvic pain/penetration disorder, acquired, moderate",
      "No mental disorder diagnosis; postpartum pain is a medical condition",
      "F52.8 other specified sexual dysfunction"
    ],
    "answer": 2,
    "why": "Marked difficulty in **one** of the four dimensions (here, pain) is **enough**, though all four should be assessed (p. 494). A consistent period of **pain-free intercourse** before onset makes it **acquired** (p. 496). Pain can increase **postpartum** (p. 496), and no medical cause was found. Severity is by distress: moderate.",
    "whyNot": [
      "One dimension is sufficient.",
      "She had 8 years of pain-free intercourse.",
      "Correct.",
      "The perineum has healed and no medical condition was found to explain the pain.",
      "Full criteria are met, so the residual category is not used."
    ]
  }
]);
