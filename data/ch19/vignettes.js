/* Chapter 19 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   Every stem states duration, consent, distress or impairment, age and whether the behavior occurs outside
   intoxication, mania or other disinhibiting states. Wording is clinical and forensic-aware; nothing is graphic.
   Items stay inside the DSM except the two labeled next-step items (v19-13 `then`: asking about breath restriction;
   v19-19: confidentiality limits and reporting duties under RA 7610), which are clinical management outside the DSM. */
SP.add("ch19", "vignettes", [
  {
    "id": "v19-01",
    "tag": "The incidental interest",
    "stem": "A 38-year-old jeepney driver from Balanga is seen at the provincial hospital outpatient clinic for generalized anxiety. When the resident takes a routine sexual history, he says that for about 15 years he has been most strongly aroused when his wife wears leather clothing. His wife knows, is a willing partner and includes it in their sex life by choice. He has never involved anyone who did not agree, and he feels no guilt, shame or worry about the interest. His marriage, work and social life are unaffected. He has no mood episodes, does not drink, and has no medical or neurological illness.",
    "q": "How should this sexual interest be handled in the diagnostic formulation?",
    "choices": [
      "Fetishistic disorder (F65.0), nonliving object(s)",
      "Unspecified paraphilic disorder (F65.9)",
      "Note the fetishistic interest in the history; there is no paraphilic disorder",
      "Fetishistic disorder (F65.0), in full remission",
      "Other specified paraphilic disorder (F65.89), leather"
    ],
    "answer": 2,
    "why": "He has a paraphilia (Criterion A: an intense, long-standing interest in a nonliving object), but **no distress, no impairment and no harm to anyone**, so Criterion B is absent. A paraphilia is **necessary but not sufficient**: the word diagnosis is kept for A plus B, and an incidental benign paraphilia is described, **not diagnosed** (pp. 779–780, 798).",
    "whyNot": [
      "Fetishistic disorder needs distress or impairment (Criterion B), which he does not have (p. 796).",
      "The residual categories also require clinically significant distress or impairment (p. 801).",
      "Correct.",
      "Remission describes a disorder that once met criteria; he never had the disorder (p. 796).",
      "Leather is a classic object of fetishism, and in any case there is no distress or impairment to justify a residual diagnosis (pp. 797, 801)."
    ],
    "discuss": [
      "How would you word this finding in the chart so that it is accurate but not stigmatizing?",
      "What single change in his history would turn this into fetishistic disorder?"
    ]
  },
  {
    "id": "v19-02",
    "tag": "BDSM without distress",
    "stem": "A married couple in their early 30s from Manila come to a clinic because the wife has insomnia after a job change. In the history they explain that for 8 years they have both taken part in a community BDSM group: the husband takes a dominant role and enjoys his wife’s staged suffering, and she enjoys being bound and disciplined. Everything is negotiated in advance, both consent fully, and they stop when either asks. Neither feels distressed, ashamed or troubled by the interests, and both work and socialize well. Neither has a mood disorder, psychosis or substance use, and the activities do not depend on alcohol.",
    "q": "Which conclusion about their sexual interests is correct?",
    "choices": [
      "No paraphilic disorder for either partner: consensual activity without distress or impairment is a sexual interest",
      "Sexual sadism disorder (F65.52) for the husband only, because he enjoys another person’s suffering",
      "Sexual masochism disorder (F65.51) for the wife only, because masochism has no nonconsenting-person arm",
      "Sexual sadism disorder for the husband and sexual masochism disorder for the wife, recorded separately",
      "Other specified paraphilic disorder (F65.89), BDSM"
    ],
    "answer": 0,
    "why": "Both have the paraphilic interest, but **Criterion B is missing**: no distress or impairment, and the husband has **never acted on his urges with a nonconsenting person**. The manual notes that most people active in **community BDSM networks** are not dissatisfied with their interests and would not meet criteria (pp. 788, 790, 792).",
    "whyNot": [
      "Correct.",
      "Sadism disorder requires acting on the urges with a nonconsenting person or distress or impairment; his partner consents and he is not distressed (p. 790).",
      "Masochism disorder needs distress or impairment, which she does not report (p. 788).",
      "Neither partner meets Criterion B, so neither disorder applies (pp. 788, 790).",
      "BDSM is a community practice, not a residual diagnosis, and there is no distress or impairment (pp. 788, 801)."
    ],
    "discuss": [
      "Which facts in this history are the ones you would document to show that Criterion B is absent?",
      "How does ICD-11 (outside the DSM) handle consensual sadomasochism differently?"
    ]
  },
  {
    "id": "v19-03",
    "tag": "Interest, not disorder",
    "stem": "A 30-year-old call-center agent in Manila is being assessed for a single depressive episode that has now resolved. Asked about sexual fantasies, he says frankly that for about 3 years he has often fantasized about exposing himself to unsuspecting women. He has never done it, has never come close, and says the fantasies are private and do not trouble him. He feels no guilt or anxiety about them and his work and relationships are unaffected. There is no substance use, no manic history and no medical illness.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "Exhibitionistic disorder (F65.2), sexually aroused by exposing genitals to physically mature individuals",
      "Exhibitionistic disorder (F65.2), in a controlled environment",
      "Unspecified paraphilic disorder (F65.9)",
      "No conclusion is possible until he has acted on the fantasies",
      "Exhibitionistic sexual interest without exhibitionistic disorder"
    ],
    "answer": 4,
    "why": "Fantasies alone can meet Criterion A, but Criterion B needs either **acting on the urges with a nonconsenting person** or **distress or impairment**. He has neither. A person who acknowledges the interest, is not distressed or impaired and has never acted on it has **exhibitionistic sexual interest, not the disorder** (pp. 783–784).",
    "whyNot": [
      "Criterion B is not met: he has not acted and is not distressed or impaired (p. 783).",
      "The specifier applies to a disorder in a setting that restricts opportunity; he has neither (p. 783).",
      "The residual category also needs distress or impairment (p. 801).",
      "Acting is one route to Criterion B, but distress or impairment is another; the conclusion can be drawn now, and it is that he has the interest only (pp. 783–784).",
      "Correct."
    ],
    "discuss": [
      "If he returned saying the fantasies now made him avoid the bus terminal and arrive late at work, what would you diagnose?",
      "Why does the manual keep the word diagnosis for Criterion A plus Criterion B?"
    ]
  },
  {
    "id": "v19-04",
    "tag": "The nondisclosing voyeur",
    "stem": "A 31-year-old man is referred by the PNP for evaluation after being caught for the third time in 14 months filming through the bathroom window of a boarding house in Balanga. Three different women were recorded, and none knew or agreed. He says each time that he was “checking the signal” and denies any sexual interest. He reports no distress and says his only problem is the police. Each episode happened while he was sober, and he has no history of mood episodes, psychosis, intellectual disability or neurological illness.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "No diagnosis, because he denies any sexual urge",
      "Voyeuristic disorder (F65.3)",
      "Unspecified paraphilic disorder (F65.9), because his motive cannot be confirmed",
      "Antisocial personality disorder only",
      "Voyeuristic disorder (F65.3), in full remission"
    ],
    "answer": 1,
    "why": "The criteria apply to **nondisclosing** people too. Recurrent secret watching of **unsuspecting** people, with **multiple victims on separate occasions**, supports Criterion A, and acting on it with nonconsenting people satisfies Criterion B. He is over **18** (Criterion C). **Voyeuristic disorder (F65.3)** can be diagnosed despite his denial (pp. 780–781).",
    "whyNot": [
      "Self-report is not required: repeated behavior with several victims meets Criterion A (p. 781).",
      "Correct.",
      "Full criteria are met from the behavior itself, so a residual category is not used (pp. 781, 801).",
      "Nothing suggests a broad antisocial pattern, and the behavior is specifically voyeuristic (p. 782).",
      "Remission needs 5 years without acting in an uncontrolled environment; his last episode is recent (p. 780)."
    ],
    "discuss": [
      "What does the manual mean by “recurrent” when the person denies any urge?",
      "Would one victim filmed on many occasions be enough?"
    ]
  },
  {
    "id": "v19-05",
    "tag": "The 17-year-old",
    "stem": "A 17-year-old high school student in Mariveles is brought by his mother after a neighbor caught him twice in 7 months looking through her window while she undressed. The neighbor did not know and did not agree. He admits that for about 8 months he has been aroused by the idea of watching women undress without their knowledge, and he is ashamed and has trouble concentrating in class. The episodes occurred while he was sober, and he has no mood, psychotic or developmental disorder. He has no other rule-breaking behavior.",
    "q": "What is the most accurate conclusion about a paraphilic diagnosis?",
    "choices": [
      "Voyeuristic disorder (F65.3)",
      "Other specified paraphilic disorder (F65.89), voyeurism below the age threshold",
      "Unspecified paraphilic disorder (F65.9)",
      "Voyeuristic disorder cannot be diagnosed because he is under 18",
      "Conduct disorder, because he violated a neighbor’s privacy"
    ],
    "answer": 3,
    "why": "Voyeuristic disorder has an age rule: **Criterion C requires the person to be at least 18**. The floor exists because puberty and adolescence bring heightened sexual curiosity, and the manual wants to avoid **pathologizing normal adolescent interest** (pp. 780–781). The behavior still needs a clinical and family response, but not this diagnosis.",
    "whyNot": [
      "Criterion C (age 18 or older) is not met (p. 780).",
      "The age rule is part of the definition; using a residual category to get around it would defeat its purpose (pp. 781, 801).",
      "An unspecified label would also attach a paraphilic diagnosis the age rule is designed to avoid (p. 781).",
      "Correct.",
      "Two episodes of a single behavior without other rule-breaking do not make the broad pattern conduct disorder needs (p. 782)."
    ],
    "discuss": [
      "Which other two disorders in the chapter have no minimum age, and what problem does the manual note for adolescents?",
      "How would you talk with the student and his mother about what this is and what it is not?"
    ]
  },
  {
    "id": "v19-06",
    "tag": "Exhibitionistic subtype",
    "stem": "A 40-year-old man is referred after conviction for exposing himself to prepubertal schoolchildren, aged about 7 to 10, outside a public elementary school in Balanga on four occasions over 18 months. None of the children consented or expected it. He has never exposed himself to adults, and he admits that only children produce the urge. He says he feels no distress, only fear of prison. Every episode happened while he was sober, and he has no manic, psychotic, cognitive or developmental disorder.",
    "q": "How should the exhibitionistic disorder be specified?",
    "choices": [
      "Sexually aroused by exposing genitals to prepubertal children",
      "Sexually aroused by exposing genitals to physically mature individuals",
      "The combined subtype (children and physically mature individuals alike)",
      "No subtype, because the subtype applies only to people who disclose their interest",
      "In a controlled environment, because he is now in custody"
    ],
    "answer": 0,
    "why": "Exhibitionistic disorder is subtyped by the **age or physical maturity** of the people the person prefers to expose to. He exposes **only to prepubertal children**, so the subtype is **sexually aroused by exposing genitals to prepubertal children** (pp. 783–784).",
    "whyNot": [
      "Correct.",
      "He has never exposed himself to adults (p. 783).",
      "His exposures are limited to children (p. 783).",
      "The subtypes are set by the target group, not by whether the person discloses (pp. 783–784).",
      "The specifier is only used when the person is living in a restricted setting; the subtype question is separate, and his history is of acts in the community (p. 783)."
    ],
    "then": {
      "q": "What does the target-age subtype prompt the clinician to do next?",
      "choices": [
        "Nothing further: exposure without contact rules out pedophilic disorder",
        "Record exhibitionistic disorder only, because it is the more specific diagnosis",
        "Consider pedophilic disorder as well, since exposure aimed only at prepubertal children may warrant both diagnoses",
        "Replace exhibitionistic disorder with pedophilic disorder",
        "Use other specified paraphilic disorder to cover both interests"
      ],
      "answer": 2,
      "why": "The subtypes exist so that a **co-occurring pedophilic disorder is not missed**; exposure to children does **not** rule it out. Someone who exposes himself **exclusively to prepubertal children** may need **both** diagnoses, whereas exposure to people of any age may need only exhibitionistic disorder. Noncontact acts with children count as acting on pedophilic urges (pp. 784, 793, 795).",
      "whyNot": [
        "Pedophilic behaviors include acts without physical contact, such as exposure (p. 793).",
        "The manual expects a separate diagnosis when more than one paraphilia causes harm (pp. 780, 795).",
        "Correct.",
        "Both disorders can be present; one does not replace the other (p. 795).",
        "Both listed disorders can be fully diagnosed, so a residual category is not needed (p. 801)."
      ]
    },
    "discuss": [
      "How would you record the two diagnoses with their specifiers?",
      "Which of the manual’s markers of pedophilic disorder in a person who has offended are present here?"
    ]
  },
  {
    "id": "v19-07",
    "tag": "Frotteuristic disorder",
    "stem": "A 27-year-old warehouse worker is brought by the PNP after four women, on different days over the past year, reported that he pressed his body against them on crowded jeepneys along the Manila–Bataan route. None of the women consented. He admits that for about 2 years the crowded ride has been the main thing that arouses him. He says the urges do not bother him and that his only problem is being caught. He was sober each time, and he has no mood, psychotic, cognitive or developmental disorder and no broader history of rule-breaking.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "No diagnosis, because he is not distressed",
      "Antisocial personality disorder",
      "Frotteuristic disorder (F65.81)",
      "Other specified paraphilic disorder (F65.89), rubbing in public transport",
      "Exhibitionistic disorder (F65.2)"
    ],
    "answer": 2,
    "why": "More than **6 months** of urges and behaviors involving **touching or rubbing against nonconsenting people** meets Criterion A. Criterion B is met by **acting on the urges with nonconsenting people**, so his lack of distress does not matter. **Frotteuristic disorder (F65.81)** (pp. 785–786).",
    "whyNot": [
      "For frotteuristic disorder, acting with a nonconsenting person satisfies Criterion B without distress (p. 786).",
      "There is no broad antisocial pattern, and the specific sexual interest is present (p. 787).",
      "Correct.",
      "The behavior is exactly what frotteuristic disorder describes (pp. 785–786, 801).",
      "He touches people; he does not expose himself (p. 783)."
    ],
    "discuss": [
      "Frotteuristic Criterion A says nonconsenting, not unsuspecting: why might that wording fit crowded transport?",
      "Which other paraphilic disorders most often co-occur with this one?"
    ]
  },
  {
    "id": "v19-08",
    "tag": "Frontotemporal disinhibition",
    "stem": "A 66-year-old retired teacher in Mariveles is brought by his daughter. Over the past year he has become apathetic, tactless and impulsive, eats compulsively and has lost interest in his grandchildren. In the past 4 months he has exposed himself to two home carers and a nurse on three occasions; none expected or agreed to it. His family says there was never any such behavior before the illness, and he shows no concern about it. He does not drink, has no mood episode, and neuroimaging shows frontal and anterior temporal atrophy.",
    "q": "What is the most accurate diagnostic conclusion?",
    "choices": [
      "Exhibitionistic disorder (F65.2), with a comorbid neurocognitive disorder",
      "Exhibitionistic disorder (F65.2), in a controlled environment",
      "Other specified paraphilic disorder (F65.89), late-onset exposure",
      "Unspecified paraphilic disorder (F65.9)",
      "Major frontotemporal neurocognitive disorder; no exhibitionistic disorder"
    ],
    "answer": 4,
    "why": "A **major neurocognitive disorder** can loosen judgment and impulse control and lead to exposure. A paraphilic disorder is diagnosed **only if the behavior also occurs outside** that state. Here it began with the illness and occurs only within it, so the exposures belong to the **neurocognitive disorder** (p. 785).",
    "whyNot": [
      "The exposures arose only within the neurocognitive disorder, so no separate paraphilic diagnosis is made (p. 785).",
      "No paraphilic disorder is present to specify (p. 785).",
      "The residual categories are for paraphilic presentations, not disinhibition from another disorder (pp. 785, 801).",
      "The cause of the behavior is known, and it is not a paraphilic disorder (p. 785).",
      "Correct."
    ],
    "discuss": [
      "What history would you need before deciding that the behavior also occurs outside the neurocognitive disorder?",
      "How would you protect the carers and nurses while respecting the patient?"
    ]
  },
  {
    "id": "v19-09",
    "tag": "Manic disinhibition",
    "stem": "A 29-year-old sales agent is brought to a Manila emergency room after passengers on the LRT complained that he repeatedly touched and leaned against strangers over two days; none consented. For 10 days he has slept 2 hours a night, talked rapidly, spent his savings and announced plans to become a senator. He has had one previous manic episode, and his family confirms that he has never touched strangers or described such urges when well over the past 5 years. Urine toxicology is negative. He is not distressed and feels “better than ever.”",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Frotteuristic disorder (F65.81) with comorbid bipolar I disorder",
      "Bipolar I disorder, current episode manic; no frotteuristic disorder",
      "Frotteuristic disorder (F65.81) only, because he acted on the urges",
      "Unspecified paraphilic disorder (F65.9)",
      "Frotteuristic disorder (F65.81), in full remission"
    ],
    "answer": 1,
    "why": "The touching occurred **only during a manic episode**, and the 6-month pattern of Criterion A is absent. Sexual disinhibition from mania is not a paraphilic disorder unless the behavior **also occurs outside** the episode (p. 787).",
    "whyNot": [
      "There is no frotteuristic pattern outside the manic episode, so only the mood disorder is diagnosed (p. 787).",
      "Correct.",
      "Acting with nonconsenting people satisfies Criterion B only when Criterion A is met; here the behavior is two days long and confined to mania (pp. 786–787).",
      "The behavior has a known cause and is not a paraphilic disorder (p. 787).",
      "He never had frotteuristic disorder, so there is nothing to be in remission (p. 786)."
    ],
    "discuss": [
      "Which other conditions in the shared differential can produce the same picture?",
      "What would you document for the PNP or the complainants?"
    ]
  },
  {
    "id": "v19-10",
    "tag": "Intoxication",
    "stem": "A 35-year-old fisherman from Bagac is referred by the barangay after he exposed himself to women at two town fiestas over 8 months; neither woman expected or agreed to it. Both times he had been drinking heavily for hours, and witnesses describe him as staggering and slurring. He says he remembers little, is deeply ashamed, and denies any such urges or fantasies when sober. His wife and the barangay officials know of no other episode. He has no mood, psychotic or cognitive disorder.",
    "q": "Based on this information, what is the most accurate conclusion about a paraphilic diagnosis?",
    "choices": [
      "Exhibitionistic disorder (F65.2), because two women were involved",
      "Exhibitionistic disorder (F65.2), because his shame meets Criterion B",
      "Other specified paraphilic disorder (F65.89), alcohol-related exposure",
      "No exhibitionistic disorder: the exposures occurred only during intoxication",
      "Unspecified paraphilic disorder (F65.9)"
    ],
    "answer": 3,
    "why": "**Substance intoxication** can disinhibit a person and lead to exposure. The paraphilic diagnosis is made only when the behavior **also occurs outside** intoxication. On this history both acts happened only while heavily intoxicated and he reports no sober urges (p. 785). His drinking needs its own assessment.",
    "whyNot": [
      "Two victims support Criterion A only when the behavior is not explained by intoxication (pp. 784–785).",
      "Shame after the event is not Criterion B when Criterion A is not established (pp. 783, 785).",
      "Intoxication is a differential, not a reason for a residual paraphilic diagnosis (pp. 785, 801).",
      "Correct.",
      "The likely cause is known (intoxication), so no paraphilic diagnosis is made (p. 785)."
    ],
    "then": {
      "q": "A month later, PNP records show he also exposed himself to women on three other occasions over the past year, each time sober and in daylight, and he now admits recurrent urges for about a year. What changes?",
      "choices": [
        "Nothing: once alcohol is involved, the paraphilic diagnosis is excluded",
        "Exhibitionistic disorder (F65.2) can now be diagnosed, because the behavior also occurs outside intoxication",
        "Only alcohol use disorder should be diagnosed",
        "Other specified paraphilic disorder (F65.89), because some episodes were intoxicated",
        "Exhibitionistic disorder (F65.2), in a controlled environment"
      ],
      "answer": 1,
      "why": "Intoxication excludes the diagnosis only when the behavior is **confined** to intoxication. Recurrent sober exposures to unsuspecting women over more than 6 months, with admitted urges, meet Criteria A and B: **exhibitionistic disorder (F65.2)**, sexually aroused by exposing genitals to physically mature individuals (pp. 783–785).",
      "whyNot": [
        "The rule is about behavior that occurs only in that state; his does not (p. 785).",
        "Correct.",
        "A substance diagnosis may be added if criteria are met, but it does not explain the sober exposures (p. 785).",
        "Full criteria are now met, so a residual category is not used (p. 801).",
        "He lives in the community; the specifier is for restricted settings (p. 783)."
      ]
    },
    "discuss": [
      "Which risk factors for recidivism among men who expose themselves does the manual list, and does he have any?",
      "How would you assess his drinking alongside the paraphilic disorder?"
    ]
  },
  {
    "id": "v19-11",
    "tag": "Antisocial, not paraphilic",
    "stem": "A 23-year-old man is assessed at the provincial jail in Balanga. Since age 12 he has stolen, lied, fought, run away from home and been expelled from two schools, and as an adult he has committed robberies and assaults without remorse. During a bag-snatching on a jeepney 3 months ago he grabbed and groped the woman he was robbing; she did not consent. Records and interviews show no other episode of sexual touching, and he describes no sexual fantasies or urges about touching strangers. He was sober during the robbery and has no mood, psychotic or cognitive disorder. He denies any distress.",
    "q": "What is the most accurate diagnostic conclusion?",
    "choices": [
      "Antisocial personality disorder; frotteuristic disorder is not diagnosed",
      "Frotteuristic disorder (F65.81), because he touched a nonconsenting person",
      "Frotteuristic disorder (F65.81) with comorbid antisocial personality disorder",
      "Sexual sadism disorder (F65.52)",
      "Unspecified paraphilic disorder (F65.9)"
    ],
    "answer": 0,
    "why": "Conduct disorder and antisocial personality disorder bring a **broad pattern of norm-breaking**, and the **specific sexual interest** in touching nonconsenting people is usually missing. One act during a robbery, no fantasies or urges, and no 6-month pattern: **antisocial personality disorder** without a paraphilic disorder (p. 787).",
    "whyNot": [
      "Correct.",
      "A single act with no sexual interest and no 6-month pattern does not meet Criterion A (pp. 785–787).",
      "Both can be diagnosed only when the frotteuristic criteria are met in their own right; they are not (p. 787).",
      "There is no evidence that suffering arouses him (pp. 790, 792).",
      "The behavior is explained by the antisocial pattern; there is no paraphilic presentation (pp. 787, 801)."
    ],
    "discuss": [
      "What evidence would make you add frotteuristic disorder to the antisocial personality disorder?",
      "How does this reasoning parallel the ASPD differential under pedophilic disorder?"
    ]
  },
  {
    "id": "v19-12",
    "tag": "Instrumental pain",
    "stem": "A 34-year-old man in Manila is evaluated after conviction for one sexual assault on an adult woman 2 years ago; she did not consent. The medical report describes injuries consistent with being held down, and nothing beyond what restraining her required. A search of his devices found no violent or sadistic pornography, and he denies any arousal from suffering. There are no other known victims, and he was sober at the time. He has no mood or psychotic disorder, and he says he feels no distress apart from being in prison.",
    "q": "What is the most accurate conclusion about sexual sadism disorder?",
    "choices": [
      "Sexual sadism disorder (F65.52), because he caused pain to a nonconsenting person",
      "Sexual sadism disorder (F65.52), in a controlled environment",
      "Sexual sadism disorder is not diagnosed: pain used instrumentally during the assault does not show arousal by suffering",
      "Other specified paraphilic disorder (F65.89), coercion",
      "Sexual sadism disorder can be diagnosed only if he admits the interest"
    ],
    "answer": 2,
    "why": "Pain caused **instrumentally**, while subduing or restraining a victim during a sexual assault, does **not** by itself indicate sexual sadism disorder. The manual asks for evidence that the **suffering itself is arousing**: an admission, a preference for sadistic pornography, or **violence beyond what the assault required** (p. 792). None is present.",
    "whyNot": [
      "Causing pain is not the same as being aroused by suffering (p. 792).",
      "A specifier cannot be attached to a disorder that has not been established (pp. 790, 792).",
      "Correct.",
      "Coercion alone is not a paraphilia, and the manual does not list it as an other specified example (pp. 792, 801).",
      "Denial does not block the diagnosis; objective evidence such as repeated acts or excess violence can support it (pp. 790–791)."
    ],
    "then": {
      "q": "Which additional finding would most support a diagnosis of sexual sadism disorder in a man like this?",
      "choices": [
        "A diagnosis of antisocial personality disorder",
        "A history of alcohol use before the assault",
        "Injuries well beyond what was needed to overpower the victim, on more than one occasion",
        "A history of childhood sexual abuse",
        "Legal conviction for the assault"
      ],
      "answer": 2,
      "why": "The manual’s markers that the suffering is arousing are an **admission** of that arousal, a preference for **sadistic pornography**, and **violence beyond what was needed** to commit the assault. Repetition across occasions supports Criterion A in a person who denies the interest (pp. 791–792).",
      "whyNot": [
        "Cruelty and forced sex can occur in antisocial personality disorder without sadistic arousal (p. 792).",
        "Intoxication points toward disinhibition, not toward a sadistic interest (p. 792).",
        "Correct.",
        "Childhood abuse is not listed as a marker of sadism (pp. 791–792).",
        "A conviction says nothing about whether the suffering was arousing (p. 792)."
      ]
    },
    "discuss": [
      "Why must forensic reports keep the questions “did he offend” and “does he have a paraphilic disorder” separate?",
      "If he did have both sadism and antisocial personality disorder, could both be diagnosed?"
    ]
  },
  {
    "id": "v19-13",
    "tag": "Masochism and the next question",
    "stem": "A 26-year-old male nursing graduate in Manila asks for help. For about 2 years his arousal has depended almost entirely on fantasies of being bound and humiliated, and his girlfriend, who consents, has taken part in this at his request. He feels intense shame, has failed his board review exams because he cannot concentrate, and has stopped seeing friends. No one has been involved without consent. He does not drink or use drugs, and he has no mood episodes or psychotic symptoms.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "No diagnosis, because his partner consents",
      "Sexual sadism disorder (F65.52)",
      "Other specified paraphilic disorder (F65.89), humiliation",
      "Major depressive disorder only",
      "Sexual masochism disorder (F65.51)"
    ],
    "answer": 4,
    "why": "More than **6 months** of intense arousal from **being bound and humiliated** (Criterion A) with **distress and impairment** (Criterion B). Masochism has **no nonconsenting-person arm**: Criterion B is distress or impairment only, so a consenting partner does not prevent the diagnosis. **Sexual masochism disorder (F65.51)** (p. 788).",
    "whyNot": [
      "Consent matters for disorders with a victim; here Criterion B is met by his own distress and impairment (p. 788).",
      "He wants to receive humiliation, not to inflict suffering (pp. 788, 790).",
      "Being humiliated is part of the masochism definition itself (pp. 788, 801).",
      "He describes no depressive syndrome; his distress comes from the paraphilia (p. 788).",
      "Correct."
    ],
    "then": {
      "q": "Clinical management outside the DSM: before ending the first interview, which question is the most important to ask next?",
      "choices": [
        "Whether he has ever restricted his breathing, or had it restricted, during sexual activity",
        "Whether his girlfriend also has masochistic interests",
        "At what age he first masturbated",
        "Whether he would accept an antiandrogen",
        "Which pornography websites he visits"
      ],
      "answer": 0,
      "why": "Asking directly about **breath restriction** is a safety step (clinical management, outside the DSM text). The manual gives masochism one disorder-specific specifier, **with asphyxiophilia**, notes more distress and maladjustment in people who report it, and warns of **accidental death** from asphyxiophilia and other autoerotic practices (pp. 788–789).",
      "whyNot": [
        "Correct.",
        "Her interests do not change his risk or his diagnosis (p. 788).",
        "This detail does not address any risk or specifier (p. 789).",
        "Medication decisions come later and depend on a full assessment; the manual itself says nothing about treatment.",
        "Pornography use is an associated feature, but it is not the safety question (p. 788)."
      ]
    },
    "discuss": [
      "If he says yes, how would you record the diagnosis, and what safety advice would you give?",
      "The manual links stigma-related shame and guilt with suicidal ideation in BDSM practitioners: how would you screen for it here?"
    ]
  },
  {
    "id": "v19-14",
    "tag": "Pedophilic specifiers",
    "stem": "A 46-year-old man is evaluated at a forensic unit after conviction for sexual contact with his daughter and his niece, who were 9 and 10 years old and prepubertal at the time. The contacts happened repeatedly over about 3 years, and neither child could consent. He acknowledges sexual interest in both girls and says he has never been interested in children outside the family. He has been sexually active with adult women, including his wife, throughout. He was sober during the contacts and has no mood, psychotic or cognitive disorder. He reports some distress, mostly about his family’s rejection of him.",
    "q": "Which recording is most complete?",
    "choices": [
      "Pedophilic disorder (F65.4), exclusive type, sexually attracted to females",
      "Pedophilic disorder (F65.4), nonexclusive type, sexually attracted to females, limited to incest",
      "Pedophilic disorder (F65.4), nonexclusive type, sexually attracted to both",
      "Pedophilic disorder (F65.4), limited to incest, in a controlled environment",
      "Other specified paraphilic disorder (F65.89), incest"
    ],
    "answer": 1,
    "why": "He has acted on urges about prepubescent children over more than 6 months (A, B) and is over 16 and more than 5 years older (C). He is also attracted to adults, so **nonexclusive type**; his interest is in girls, so **sexually attracted to females**; and it is confined to family, so **limited to incest** (pp. 792–793).",
    "whyNot": [
      "He is also attracted to adult women, so the type is nonexclusive (p. 793).",
      "Correct.",
      "Both of the children he targeted were girls (p. 793).",
      "Pedophilic disorder has no controlled-environment specifier, and the type and sex specifiers are missing (pp. 792–793).",
      "Pedophilic disorder is fully met; incest is a specifier, not a residual diagnosis (pp. 793, 801)."
    ],
    "then": {
      "q": "He has now been in custody for 6 years with no incidents and asks whether his diagnosis can be marked as being in remission. Which statement is correct?",
      "choices": [
        "Yes: “in full remission” after 5 years without acting",
        "No: but “in a controlled environment” can be added",
        "Yes: “in full remission,” because a prison counts as an uncontrolled setting",
        "No: pedophilic disorder has neither the full remission nor the controlled-environment specifier",
        "Yes, but only if he also reports no distress"
      ],
      "answer": 3,
      "why": "**Pedophilic disorder is the only disorder in the chapter without the shared specifiers**: there is no “in full remission” and no “in a controlled environment” option. The manual describes pedophilia itself as lifelong while the disorder fluctuates (pp. 792–794).",
      "whyNot": [
        "That specifier exists for the other paraphilic disorders, not this one (pp. 792–793).",
        "The controlled-environment specifier is also unavailable for pedophilic disorder (pp. 792–793).",
        "A prison is the example of a controlled environment, and in any case the specifier does not exist here (pp. 780, 792–793).",
        "Correct.",
        "No combination of conditions creates a remission specifier for this disorder (pp. 792–793)."
      ]
    },
    "discuss": [
      "Which of the manual’s markers of pedophilic disorder in a person who has offended are absent here, and why does that matter?",
      "How would you word the diagnosis line in a report to the court?"
    ]
  },
  {
    "id": "v19-15",
    "tag": "Images alone and Criterion B",
    "stem": "A 38-year-old office worker in Manila is referred for evaluation after the PNP Anti-Cybercrime Group found sexual images of prepubertal children on his laptop, collected over about 2 years. Investigators found no evidence of any in-person sexual contact with a child, and he has no access to children through work or family. He says he does not want to act on the images and reports no distress, guilt or difficulty with his partner, friends or work. He was not intoxicated when viewing them. He has no mood, psychotic or cognitive disorder, and the court asks whether he has a paraphilic disorder.",
    "q": "Which statement about the pedophilic disorder criteria is most accurate?",
    "choices": [
      "Criteria A, B and C are all met, because viewing the images is acting on the urges",
      "No criterion is met, because there was no contact",
      "Criterion B is met by the risk of harm the images represent",
      "The images support Criterion A, but image use alone does not satisfy Criterion B",
      "The diagnosis must wait for penile plethysmography"
    ],
    "answer": 3,
    "why": "Use of sexual images of prepubescent children is typical of pedophilic interest and informs **Criterion A**, but **on its own, without in-person sexual interaction with a child, it is not enough for Criterion B** (p. 793). The diagnosis would need acting on the urges, or **marked distress or interpersonal difficulty**. The offense is a legal matter regardless of the diagnosis.",
    "whyNot": [
      "The manual says image use alone does not establish Criterion B (p. 793).",
      "Image use is relevant evidence for Criterion A; and he meets Criterion C (pp. 792–793).",
      "Criterion B for pedophilic disorder is acting on the urges or marked distress or interpersonal difficulty; image use alone does not count (p. 793).",
      "Correct.",
      "Laboratory measures can help but are not required, and their sensitivity and specificity vary between sites (p. 795)."
    ],
    "discuss": [
      "What further history might show marked distress or interpersonal difficulty?",
      "Why does the manual mention a legal problem with using sexual images of children for testing, and how does it get around it?"
    ]
  },
  {
    "id": "v19-16",
    "tag": "OCD, not pedophilic",
    "stem": "A 29-year-old call-center supervisor in Manila asks for help because for 8 months he has been tormented by thoughts that he might be sexually attracted to his 8-year-old nephew. The thoughts horrify him, he has never felt aroused by them and never masturbates to them, and he has never had sexual contact with any child. He avoids family gatherings, checks his body for signs of arousal, and repeatedly asks his wife for reassurance. He also has intrusive doubts about whether he is secretly gay, and as a teenager he had contamination fears. He does not use substances and has no mood episodes.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Obsessive-compulsive disorder; not pedophilic disorder",
      "Pedophilic disorder (F65.4), because his distress meets Criterion B",
      "Pedophilic disorder (F65.4), nonexclusive type, sexually attracted to males",
      "Unspecified paraphilic disorder (F65.9)",
      "Pedophilic interest without pedophilic disorder"
    ],
    "answer": 0,
    "why": "Some people present with **ego-dystonic** worries that they might be attracted to children. The pointers away from pedophilic disorder are **no positive feelings** about the thoughts, **no link to sexual behavior** such as masturbation, and **other intrusive sexual ideas** (for example about orientation). This is **obsessive-compulsive disorder** (p. 796).",
    "whyNot": [
      "Correct.",
      "Distress meets Criterion B only when Criterion A, a real arousing interest, is present; his thoughts are obsessions, not arousal (pp. 792, 796).",
      "There is no sexual interest in children to specify (p. 796).",
      "This is not a paraphilic presentation at all (pp. 796, 801).",
      "He has no interest in children; he has intrusive fears about having one (p. 796)."
    ],
    "discuss": [
      "How would you ask about arousal and behavior in a way that is safe for him to answer honestly?",
      "Why can reassurance-seeking make these obsessions worse?"
    ]
  },
  {
    "id": "v19-17",
    "tag": "Access, not attraction",
    "stem": "A 30-year-old man is evaluated at the provincial hospital forensic clinic after conviction for sexual contact with a 10-year-old prepubertal neighbor whom he was left to watch one evening; the child could not consent. Since age 13 he has stolen, lied, fought and broken rules repeatedly, and as an adult he has convictions for robbery and assault and shows no remorse. Collateral history, his partners and his devices show sexual interest only in adult women, and he has no fantasies, urges or other behavior involving children before or since. He was sober at the time and has no mood, psychotic or cognitive disorder. He says he is not distressed and calls the act “a chance thing.”",
    "q": "What is the most accurate diagnostic conclusion?",
    "choices": [
      "Pedophilic disorder (F65.4), because he acted on the urge",
      "Pedophilic disorder (F65.4), nonexclusive type",
      "Pedophilic disorder (F65.4) with comorbid antisocial personality disorder",
      "Other specified paraphilic disorder (F65.89), one child victim",
      "Antisocial personality disorder; pedophilic disorder is not added without a 6-month interest in children"
    ],
    "answer": 4,
    "why": "Antisocial personality disorder raises the chance that a person **primarily attracted to adults** will approach a child because the child is **accessible**. Pedophilic disorder is added **only** when there are **at least 6 months** of recurrent fantasies, urges or behaviors centered on prepubescent children (pp. 795–796). Nothing here shows that.",
    "whyNot": [
      "A single act without a 6-month interest in children does not meet Criterion A (pp. 792, 796).",
      "The type cannot be specified when the disorder is not present (pp. 793, 796).",
      "Both are diagnosed only if pedophilic criteria are met in their own right (p. 796).",
      "Criteria are clear here: the behavior is explained by antisocial personality disorder, not a paraphilia (pp. 796, 801).",
      "Correct."
    ],
    "discuss": [
      "Which of the manual’s markers of pedophilic disorder in a person who has offended (p. 793) would you look for in the records?",
      "How do antisocial traits interact with pedophilia as a risk factor?"
    ]
  },
  {
    "id": "v19-18",
    "tag": "The late-adolescent exclusion",
    "stem": "An 18-year-old senior high school student in Mariveles is referred by the barangay after a report of sexual contact with his 13-year-old girlfriend, with whom he has been in a relationship for about 10 months. She is the only person involved and was not described as unwilling, though she is legally a child. He has no sexual interest in younger children, no fantasies about children, and no history of using sexual images of children. He feels anxious about the report but is otherwise functioning. He was sober and has no mood, psychotic, developmental or cognitive disorder.",
    "q": "What is the most accurate conclusion about pedophilic disorder?",
    "choices": [
      "Pedophilic disorder (F65.4), because he is over 16 and 5 years older than her",
      "Pedophilic disorder (F65.4), nonexclusive type, sexually attracted to females",
      "Pedophilic disorder is not diagnosed: the note under Criterion C leaves out late adolescents whose continuing partner is 12 or 13",
      "Other specified paraphilic disorder (F65.89), age-gap relationship",
      "Pedophilic disorder cannot be judged until she is examined for pubertal status"
    ],
    "answer": 2,
    "why": "Criterion C asks for age **16 or older** and **at least 5 years older** than the child, and its note **excludes a late adolescent whose continuing sexual partner is 12 or 13 years old** (p. 793). He also lacks the interest in prepubescent children that Criterion A requires. Outside the DSM, the legal question is separate: in the Philippines, RA 11648 (2022) set the age of sexual consent at 16, and its close-in-age exemption never applies when the younger person is under 13.",
    "whyNot": [
      "The note under Criterion C specifically excludes this situation (p. 793).",
      "No disorder is present to specify (p. 793).",
      "Correct.",
      "This is not a paraphilic presentation and the manual lists no such example (pp. 793, 801).",
      "The note applies to 12- and 13-year-olds in ongoing relationships regardless, and he shows no interest in prepubescent children (pp. 792–793)."
    ],
    "discuss": [
      "Why does the manual consider the pubertal age range a hard place to make this diagnosis?",
      "How would you separate the clinical opinion from the legal process in your note?"
    ]
  },
  {
    "id": "v19-19",
    "tag": "Next step: the forensic interview",
    "stem": "The PNP Women and Children Protection Desk refers a 35-year-old man to the psychiatry service of the provincial hospital in Balanga for evaluation. He is accused of sexual contact with a 9-year-old prepubertal girl in his barangay on one occasion 2 months ago; the child could not consent. The referral asks whether he has a psychiatric disorder. He says he is not distressed, denies any interest in children, and has no known history of intoxication, mood episodes or psychosis. He arrives without a lawyer and asks the resident whether “everything here stays between us.”",
    "q": "Clinical management outside the DSM: what is the best first step before asking about the allegation?",
    "choices": [
      "Begin with detailed questions about the alleged contact while he is willing to talk",
      "Explain the purpose of the evaluation, who will receive the report, and the limits of confidentiality, including reporting duties for child abuse under RA 7610",
      "Assure him that everything he says is protected by doctor–patient confidentiality",
      "Arrange penile plethysmography before any interview",
      "Start an SSRI to reduce any sexual urges before the interview"
    ],
    "answer": 1,
    "why": "This is **clinical and legal management, outside the DSM**. In a forensic referral the clinician is not acting only as the man’s treating doctor, so he must be told the **purpose of the evaluation, who will see the report and the limits of confidentiality**, including **reporting of child abuse under RA 7610**, **before** offending is discussed. Follow hospital policy and document the explanation. The DSM content (Criterion A for 6 months, the denying-person route, markers on p. 793) comes after.",
    "whyNot": [
      "Interviewing before he understands how his statements will be used is unethical and can make the evaluation unusable.",
      "Correct.",
      "A promise of full confidentiality is false in a court-referred evaluation and conflicts with reporting duties.",
      "Laboratory measures are optional aids whose accuracy varies between sites, not a first step (p. 795).",
      "Treatment before any assessment has no basis; the manual does not address treatment, and guideline frameworks (WFSBP, outside the DSM) start with assessment of risk."
    ],
    "discuss": [
      "How would you document the confidentiality explanation in the chart?",
      "With a single alleged event and denial, what information would you need before saying whether pedophilic disorder is present?"
    ]
  },
  {
    "id": "v19-20",
    "tag": "Fetishistic Criterion C",
    "stem": "A 32-year-old teacher from Orani asks whether she has a fetish. For about 3 years she has reached orgasm, alone or with her husband, only with a vibrator, and she prefers it to other stimulation. Her husband is supportive and takes part willingly. She is mildly embarrassed but not distressed, and her marriage and work are fine. She has no interest in other objects or body parts, uses no substances and has no mood disorder.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "Fetishistic disorder (F65.0), nonliving object(s)",
      "Fetishistic disorder (F65.0), other",
      "Other specified paraphilic disorder (F65.89), device dependence",
      "No fetishistic disorder: devices designed for genital stimulation are excluded by Criterion C",
      "Unspecified paraphilic disorder (F65.9)"
    ],
    "answer": 3,
    "why": "**Criterion C** says the fetish objects are **not limited to devices designed for genital stimulation**, such as a **vibrator** (p. 796). A device that stimulates the genitals because it was made to do so is not a fetish. She also has no distress or impairment, so Criterion B would fail anyway.",
    "whyNot": [
      "Criterion C excludes devices designed for genital stimulation (p. 796).",
      "The “other” specifier is still fetishistic disorder, which Criterion C excludes here (p. 796).",
      "There is no paraphilia and no distress or impairment (pp. 796, 801).",
      "Correct.",
      "The residual categories need distress or impairment and a paraphilic presentation; there is neither (p. 801)."
    ],
    "then": {
      "q": "A different patient, a 40-year-old man, has for 4 years been aroused only when wearing women’s slips, which he wears alone; he thinks of himself as dressed as a woman, is ashamed, and has stopped dating. Why is fetishistic disorder not the diagnosis?",
      "choices": [
        "Clothing cannot be a fetish object",
        "Criterion C excludes objects limited to clothing used in cross-dressing; this points to transvestic disorder",
        "He is not distressed",
        "He has no partner, so impairment cannot be judged",
        "Fetishistic disorder requires a body-part focus"
      ],
      "answer": 1,
      "why": "Fetishistic **Criterion C** also excludes objects **limited to articles of clothing worn in cross-dressing**; arousal from wearing them, with thoughts of being dressed as a woman, is **transvestic disorder (F65.1)** (pp. 796, 798, 800).",
      "whyNot": [
        "Undergarments and other clothing are common fetish objects when they are not used only for cross-dressing (p. 797).",
        "Correct.",
        "He reports shame and has stopped dating, so distress and impairment are present (p. 798).",
        "Impairment can be in social life, including avoiding relationships (p. 798).",
        "Nonliving objects are one of the specifiers; a body part is not required (p. 796)."
      ]
    },
    "discuss": [
      "What questions does the manual suggest for separating fetishistic from transvestic disorder when underwear is involved?",
      "How would you reassure the teacher without dismissing her question?"
    ]
  },
  {
    "id": "v19-21",
    "tag": "Partialism",
    "stem": "A 29-year-old seafarer from Mariveles is referred by his wife’s gynecologist. For as long as he can remember, and certainly for the past 6 years, his arousal has centered almost entirely on women’s feet, and for the past year he has been unable to maintain an erection with his wife unless her feet are the focus. She agreed at first but now refuses, and the marriage is near breaking point; he feels hopeless. He has never involved anyone without consent. He does not drink and has no mood, psychotic or medical disorder, and erections are normal when the focus is present.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Fetishistic disorder (F65.0), body part(s)",
      "Other specified paraphilic disorder (F65.89), partialism",
      "Erectile disorder",
      "Fetishistic disorder (F65.0), nonliving object(s)",
      "No diagnosis, because body parts are part of ordinary sexual interest"
    ],
    "answer": 0,
    "why": "A **highly specific focus on a nongenital body part** for more than 6 months (Criterion A) with **distress and relationship impairment** (Criterion B). Partialism was a paraphilia not otherwise specified in DSM-IV-TR and was **re-incorporated** into fetishistic disorder; record **fetishistic disorder, body part(s) (F65.0)** (pp. 796–797).",
    "whyNot": [
      "Correct.",
      "Partialism now sits inside fetishistic disorder rather than the residual category (p. 797).",
      "His erections are normal when the focus is present; the problem is the fetishistic dependence (pp. 797–798).",
      "Feet are a body part, not an object (p. 796).",
      "An exclusive, highly specific nongenital focus with distress and impairment is exactly what Criterion A and B describe (p. 796)."
    ],
    "discuss": [
      "Which sexual-function problem does the manual list as a consequence of fetishistic disorder in a relationship?",
      "If he also became aroused by her shoes, how would you specify the disorder?"
    ]
  },
  {
    "id": "v19-22",
    "tag": "Forced cross-dressing",
    "stem": "A 37-year-old engineer in Manila reports that for about 3 years his main sexual fantasy has been of a woman forcing him to dress in women’s clothes and then mocking him. He says the clothes themselves do nothing for him; it is the humiliation and being controlled that arouse him. He has never involved anyone without consent and acts it out only in fantasy. He is ashamed, sleeps poorly and has withdrawn from a relationship because of the fantasies. He has no substance use, mood disorder or psychosis, and he has no wish to be a woman.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Transvestic disorder (F65.1)",
      "Fetishistic disorder (F65.0), nonliving object(s)",
      "Sexual masochism disorder (F65.51)",
      "Transvestic disorder (F65.1), with fetishism",
      "Gender dysphoria in adolescents and adults"
    ],
    "answer": 2,
    "why": "When a person fantasizes about **“forced cross-dressing”** and is aroused mainly by the **domination or humiliation**, with distress or impairment, the diagnosis is **sexual masochism disorder**, not fetishistic or transvestic disorder (pp. 788, 798).",
    "whyNot": [
      "The cross-dressing itself is not what arouses him (p. 798).",
      "The clothes are not the object of arousal (p. 798).",
      "Correct.",
      "The fetishism specifier is for arousal by fabrics or garments, which he denies (pp. 798–799).",
      "He has no incongruence and no wish to be another gender (p. 800)."
    ],
    "discuss": [
      "Which question about his thoughts during arousal separates masochism from transvestic disorder here?",
      "What safety question would you ask about his masochistic interests?"
    ]
  },
  {
    "id": "v19-23",
    "tag": "Autogynephilia and its course",
    "stem": "A 42-year-old married bank officer in Balanga has been sexually aroused by cross-dressing since adolescence, now with a full outfit and wig. During these episodes his arousal centers on imagining himself with a woman’s body rather than on the fabric. Three times in 5 years he has thrown away his women’s clothes to fight the urge and then bought them again. His wife recently discovered them and has moved out, and he is miserable. He says he has never felt that he is a woman, has never wanted to live as one, and had no cross-gender behavior in childhood. He does not drink and has no mood disorder.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Fetishistic disorder (F65.0), nonliving object(s)",
      "Gender dysphoria in adolescents and adults",
      "Transvestic disorder (F65.1), with fetishism",
      "Sexual masochism disorder (F65.51)",
      "Transvestic disorder (F65.1), with autogynephilia"
    ],
    "answer": 4,
    "why": "Recurrent arousal from **cross-dressing** for far longer than 6 months, with **distress and marital impairment**; the **purge-and-rebuy** cycle is the manual’s sign of distress. His arousal is to **thoughts or images of himself as a woman**: **with autogynephilia**. This specifier **raises** the likelihood of later gender dysphoria, whereas **with fetishism lowers** it (pp. 798–799).",
    "whyNot": [
      "Arousal from wearing the clothes, with thoughts of being a woman, is transvestic, and Criterion C excludes cross-dressing clothes from fetishism (pp. 796, 800).",
      "He has no incongruence, no wish to be a woman and no childhood cross-gender history (p. 800).",
      "His arousal is to himself as a woman, not to the fabrics or garments (p. 799).",
      "There is no domination or humiliation theme (p. 798).",
      "Correct."
    ],
    "then": {
      "q": "Twelve years later, at 54, he returns. Arousal from cross-dressing has faded almost to nothing, but for the past 2 years he has felt strongly that his body does not match who he is, wants to live as a woman full time and is seeking hormones; he is distressed by the mismatch. What is the most accurate formulation?",
      "choices": [
        "Transvestic disorder, unchanged, because the history began with arousal",
        "Gender dysphoria in adolescents and adults, consistent with the progression the manual describes",
        "No diagnosis, because sexual arousal has disappeared",
        "Fetishistic disorder, because arousal has changed",
        "Other specified paraphilic disorder (F65.89), late-life cross-dressing"
      ],
      "answer": 1,
      "why": "Some men with transvestic disorder **progress to gender dysphoria**, wanting to stay in the female role longer and to feminize their bodies, usually with **reduced sexual arousal** to cross-dressing. Middle-aged and older men with a transvestic history are **more likely to present with gender dysphoria** than with transvestic disorder (p. 800). Evaluate with the Chapter 14 criteria.",
      "whyNot": [
        "His arousal has faded and the problem is now incongruence, which transvestic disorder does not describe (p. 800).",
        "Correct.",
        "His distress about the incongruence is the clinical problem now (p. 800).",
        "There is no object-centered arousal (pp. 796, 800).",
        "This is not a paraphilic presentation (pp. 800–801)."
      ]
    },
    "discuss": [
      "If he still had distressing arousal from cross-dressing and also met gender dysphoria criteria, could both be diagnosed?",
      "Why might the manual’s specifiers help predict which men later develop gender dysphoria?"
    ]
  },
  {
    "id": "v19-24",
    "tag": "Remission versus custody",
    "stem": "A 52-year-old man was diagnosed with frotteuristic disorder 9 years ago after repeated incidents with nonconsenting women on crowded buses. For the past 6 years he has lived at home in Pilar, commutes daily by jeepney, and, according to his wife, his employer and police records, has not touched anyone without consent. He reports no distress or impairment and functions well. He admits he still sometimes notices the old interest. He does not drink and has no mood disorder.",
    "q": "How should his diagnosis be specified now?",
    "choices": [
      "Frotteuristic disorder (F65.81), in a controlled environment",
      "Frotteuristic disorder (F65.81), in full remission",
      "The diagnosis should be removed, because he has had no behavior for over 5 years",
      "Frotteuristic disorder (F65.81), current, because the interest persists",
      "Remission cannot be specified while any interest remains"
    ],
    "answer": 1,
    "why": "**In full remission** needs **5 years** in an **uncontrolled environment** with **no acting on urges with a nonconsenting person and no distress or impairment**. He has 6 such years in the community. Remission **does not mean the interest has gone**; the specifier says nothing about whether the paraphilia persists (p. 786).",
    "whyNot": [
      "He lives freely in the community; the controlled-environment specifier is for restricted settings (p. 786).",
      "Correct.",
      "The manual uses a remission specifier for this situation rather than removing the diagnosis (p. 786).",
      "Neither behavior nor distress has occurred for 6 years, which meets the remission rule (p. 786).",
      "The remission specifier explicitly does not address whether the interest remains (p. 786)."
    ],
    "then": {
      "q": "A different man with exhibitionistic disorder has spent the past 5 years in New Bilibid Prison with no incidents and no reported distress. How should his disorder be specified?",
      "choices": [
        "In full remission, because 5 years have passed",
        "No specifier: the diagnosis lapses in custody",
        "In a controlled environment",
        "In full remission, in a controlled environment",
        "Pedophilic disorder rules apply, so no specifier is available"
      ],
      "answer": 2,
      "why": "The 5-year remission clock runs only in an **uncontrolled** environment. Years in a setting where the opportunity is restricted, such as a prison, are recorded as **in a controlled environment**, not as remission (pp. 783–784).",
      "whyNot": [
        "Five years in custody do not count toward remission (p. 783).",
        "The specifier exists precisely for people in institutional settings (p. 783).",
        "Correct.",
        "Remission requires an uncontrolled environment, so the two cannot be combined here (p. 783).",
        "Exhibitionistic disorder has both shared specifiers; only pedophilic disorder lacks them (pp. 783, 792–793)."
      ]
    },
    "discuss": [
      "Why does the manual insist that remission be shown in an uncontrolled environment?",
      "What would you tell the prison board about what “in a controlled environment” does and does not mean?"
    ]
  },
  {
    "id": "v19-25",
    "tag": "Other specified and unspecified",
    "stem": "A 30-year-old man in Quezon City is referred after a barangay complaint. For about 18 months he has made obscene telephone calls to women he does not know, and the calls are what arouse him most; the women did not consent and were upset. He is ashamed, fears losing his job, and has trouble sleeping. He has no other paraphilic interests, does not expose himself or touch anyone, and makes the calls while sober. He has no mood episodes or psychosis.",
    "q": "How is this best recorded?",
    "choices": [
      "Exhibitionistic disorder (F65.2)",
      "Unspecified paraphilic disorder (F65.9)",
      "Frotteuristic disorder (F65.81)",
      "Other specified paraphilic disorder (F65.89), telephone scatologia",
      "No diagnosis, because no physical contact occurred"
    ],
    "answer": 3,
    "why": "A paraphilia present for **at least 6 months** with **marked distress or impairment** that fits none of the eight listed disorders is recorded as **other specified paraphilic disorder** followed by the reason. **Telephone scatologia** (obscene calls) is one of the manual’s own examples (p. 801).",
    "whyNot": [
      "He does not expose his genitals (p. 783).",
      "The reason is known and can be stated, so other specified is more accurate (p. 801).",
      "He does not touch anyone (p. 785).",
      "Correct.",
      "Physical contact is not required for a paraphilic disorder; distress and impairment are present (pp. 780, 801)."
    ],
    "then": {
      "q": "In the emergency room, another man says only that for about a year he has had sexual urges that “are not normal,” which make him unable to work; he refuses to describe them, and no collateral history is available. How is this best recorded for now?",
      "choices": [
        "Other specified paraphilic disorder (F65.89), reason unknown",
        "No diagnosis can be recorded",
        "Unspecified paraphilic disorder (F65.9)",
        "Fetishistic disorder (F65.0)",
        "Other specified paraphilic disorder (F65.89), in a controlled environment"
      ],
      "answer": 2,
      "why": "**Unspecified paraphilic disorder (F65.9)** is used when there are symptoms of a paraphilic disorder with distress or impairment, but the clinician **chooses not to give the reason** or there is **not enough information** for a more specific diagnosis (p. 801).",
      "whyNot": [
        "Other specified requires a stated reason (p. 801).",
        "The unspecified category exists for this situation (p. 801).",
        "Correct.",
        "Nothing indicates an object or body-part focus (p. 796).",
        "A reason is still needed for other specified, and he is not in a restricted setting (p. 801)."
      ]
    },
    "discuss": [
      "Name the other examples the manual gives for the other specified category.",
      "Which specifiers can still be attached to other specified paraphilic disorder?"
    ]
  }
]);
