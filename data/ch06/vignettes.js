/* Chapter 6 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch06", "vignettes", [
  {
    "id": "v6-01",
    "tag": "OCD taboo thoughts",
    "stem": "A 27-year-old kindergarten teacher asks for help because she has repeated, horrifying images of touching children inappropriately. She has never acted on them and feels disgusted by them. She avoids being alone with children, mentally reviews every interaction for hours to make sure nothing happened, and repeatedly asks her husband whether she is “a bad person.” She has taken sick leave. She has no sexual interest in children.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Pedophilic disorder",
      "Obsessive-compulsive disorder",
      "Generalized anxiety disorder",
      "Major depressive disorder with mood-congruent psychotic features",
      "Delusional disorder"
    ],
    "answer": 1,
    "why": "**Taboo (sexual) obsessions**: intrusive, unwanted, ego-dystonic images, neutralized by **mental reviewing**, **avoidance** and **reassurance seeking**, taking hours a day and impairing work. This is OCD, not a paraphilia.",
    "whyNot": [
      "Paraphilic urges are sexually arousing and not experienced as unwanted intrusions; she has no sexual interest in children. OCD Criterion D distinguishes them.",
      "Correct.",
      "GAD worries concern real-life matters; these are intrusive images with rituals.",
      "No depressive episode or psychotic beliefs are described; she recognizes the thoughts as unwanted.",
      "She has no fixed false belief; her doubts are obsessional."
    ],
    "discuss": [
      "How would you ask about taboo obsessions without shaming the patient?",
      "Why do these thoughts not indicate risk to children?"
    ]
  },
  {
    "id": "v6-02",
    "tag": "OCD insight",
    "stem": "A 34-year-old man washes his hands up to 80 times a day after touching anything outside his room. He is completely certain that he will contract a fatal disease unless he washes exactly 20 times with each soap. He has no hallucinations, his speech is organized, and he has no other unusual beliefs. His hands are raw and bleeding.",
    "q": "What is the correct diagnosis?",
    "choices": [
      "Illness anxiety disorder",
      "Delusional disorder, somatic type",
      "Schizophrenia",
      "OCD, with absent insight/delusional beliefs",
      "OCD and delusional disorder"
    ],
    "answer": 3,
    "why": "Complete conviction about OCD beliefs is captured by the **absent insight/delusional beliefs** specifier. With obsessions and compulsions and no other psychotic features, a psychotic disorder is **not** diagnosed.",
    "whyNot": [
      "His fear drives washing rituals; illness anxiety disorder lacks compulsions of this kind and concerns having an illness now.",
      "Delusional disorder lacks obsessions and compulsions; OCD with delusional insight is diagnosed as OCD.",
      "There are no hallucinations, disorganization or negative symptoms.",
      "Correct.",
      "Only add a psychotic disorder if delusions extend beyond OCD content."
    ]
  },
  {
    "id": "v6-03",
    "tag": "Tic-related OCD",
    "stem": "A 10-year-old boy touches doorframes in sets of four until it feels “just right” and arranges his pencils symmetrically, becoming distressed if anyone moves them. These rituals take about 2 hours a day. Since age 6 he has had eye blinking, shoulder shrugging and sniffing. His teacher also reports marked inattention and restlessness.",
    "q": "Which statement is most accurate?",
    "choices": [
      "OCD, tic-related; assess for a tic disorder and ADHD, which form a recognized childhood triad",
      "His rituals are complex tics, so OCD is not diagnosed",
      "OCD cannot be diagnosed in children who cannot state the aim of their rituals",
      "Tourette’s disorder excludes OCD",
      "This is autism spectrum disorder"
    ],
    "answer": 0,
    "why": "Symmetry obsessions with **just-right** compulsions over an hour a day: OCD. A current tic disorder gives the **tic-related** specifier, most common in boys with childhood onset. The **OCD–tic–ADHD triad** occurs in children.",
    "whyNot": [
      "Correct.",
      "Rituals performed until things feel “just right” are compulsions; when both OCD and tics are present, both are diagnosed.",
      "The note to Criterion A says young children may not be able to articulate the aims of their rituals.",
      "OCD and tic disorders, including Tourette’s, can both be diagnosed.",
      "No social communication deficits are described."
    ]
  },
  {
    "id": "v6-04",
    "tag": "OCD vs OCPD",
    "stem": "A 45-year-old engineer is referred by his wife. He insists the house be organized exactly his way, spends weekends reorganizing files, has rigid rules for the children, and cannot delegate at work because others “do it wrong.” He has done this since early adulthood, sees it as the right way to live, and denies intrusive thoughts or urges to perform rituals.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Generalized anxiety disorder",
      "Obsessive-compulsive disorder",
      "Hoarding disorder",
      "Autism spectrum disorder",
      "Obsessive-compulsive personality disorder"
    ],
    "answer": 4,
    "why": "A lifelong, **ego-syntonic** pattern of perfectionism, orderliness and control, **without** intrusive thoughts or compulsions performed in response to them: OCPD.",
    "whyNot": [
      "There is no excessive worry about many areas.",
      "OCD requires obsessions or compulsions, usually experienced as unwanted.",
      "He does not have difficulty discarding or clutter.",
      "No social communication deficits or early-childhood restricted interests are described.",
      "Correct."
    ]
  },
  {
    "id": "v6-05",
    "tag": "Postpartum OCD",
    "stem": "Three weeks after delivering her first child, a 31-year-old woman reports constant images of stabbing the baby with kitchen knives. She is terrified by them, has hidden all the knives, will not bathe the baby alone and checks repeatedly that the baby is breathing. She is sleeping poorly but has no hallucinations, no delusional beliefs about the baby and no wish to harm her.",
    "q": "What is the most appropriate interpretation?",
    "choices": [
      "Major depressive disorder with peripartum onset, with psychotic features",
      "Postpartum psychosis requiring emergency admission",
      "Obsessive-compulsive disorder with harm obsessions; the thoughts are ego-dystonic and do not indicate intent",
      "Normal new-parent worries; reassure and discharge",
      "Homicidal ideation requiring child protection referral"
    ],
    "answer": 2,
    "why": "Intrusive, **unwanted** harm images with **avoidance** and **checking**: OCD, which can begin or worsen in the **peripartum** period. Ego-dystonic harm obsessions are resisted and are not intent.",
    "whyNot": [
      "No depressive episode or psychotic features are described; screen for depression, which often coexists.",
      "Postpartum psychosis brings confusion, hallucinations or delusions, which are absent.",
      "Correct.",
      "Hours of rituals and avoidance that disrupt infant care are not normal.",
      "She has no wish to harm the baby; mislabeling obsessions as intent causes harm. Assess carefully and treat."
    ],
    "discuss": [
      "How would you explain the difference between an obsession and an intention to this mother?"
    ]
  },
  {
    "id": "v6-06",
    "tag": "OCD vs GAD",
    "stem": "A 30-year-old woman spends several hours a day worrying. When asked for examples, she says she worries that if she does not tap the light switch an even number of times, her parents will die in a car crash. She knows this makes no sense, but tapping relieves her anxiety. She has no other worries.",
    "q": "Which feature most clearly points to OCD rather than GAD?",
    "choices": [
      "The number of hours spent worrying",
      "Magical content linked to a neutralizing compulsion",
      "The presence of anxiety",
      "Worry about her parents’ safety",
      "Recognition that her worries are excessive"
    ],
    "answer": 1,
    "why": "GAD worry concerns **real-life** matters; OCD obsessions often have **odd, irrational or magical** content and are linked to **compulsions** that neutralize them.",
    "whyNot": [
      "Both can take hours.",
      "Correct.",
      "Anxiety is common to both.",
      "Worry about family safety occurs in both; the magical link to tapping is the clue.",
      "Insight varies in both and does not separate them."
    ]
  },
  {
    "id": "v6-07",
    "tag": "BDD",
    "stem": "A 17-year-old boy has missed 3 months of school because he believes his skin is “covered in holes.” He spends 5 hours a day examining pores, picking at them with tweezers to make them smaller, applying concealer and asking his mother whether people will notice. His dermatologist finds only mild acne. He has thought that he would be better off dead.",
    "q": "What is the diagnosis that best accounts for the picking?",
    "choices": [
      "Obsessive-compulsive disorder",
      "Excoriation disorder",
      "Social anxiety disorder",
      "Body dysmorphic disorder",
      "Major depressive disorder"
    ],
    "answer": 3,
    "why": "Preoccupation with a slight flaw, with checking, **picking to improve appearance**, camouflage and reassurance seeking, and severe impairment: **BDD**. Picking intended to fix perceived defects is BDD, not excoriation disorder. His suicidal thinking needs urgent assessment.",
    "whyNot": [
      "His preoccupation is limited to appearance.",
      "Excoriation disorder is excluded when the picking aims to improve appearance (Criterion E).",
      "His avoidance stems from fear of looking defective, with rituals: BDD.",
      "Correct.",
      "Depression may be present and should be assessed, but it does not explain the appearance preoccupation and rituals."
    ],
    "then": {
      "q": "He asks to be referred for laser resurfacing. What is the best response?",
      "choices": [
        "Refer to a cosmetic dermatologist as requested",
        "Explain that cosmetic treatment rarely helps BDD and offer CBT and an SSRI, with a safety plan",
        "Prescribe an antipsychotic for delusional beliefs",
        "Recommend camouflage makeup only",
        "Tell him the acne is mild and discharge him"
      ],
      "answer": 1,
      "why": "BDD **responds poorly** to cosmetic treatment and may worsen. Evidence-based care is CBT for BDD and an SSRI (often at high doses), with close attention to suicide risk. (Treatment knowledge, outside the DSM.)",
      "whyNot": [
        "Cosmetic procedures rarely help and can worsen BDD.",
        "Correct.",
        "SSRIs work even with delusional insight; antipsychotics have weak evidence in BDD.",
        "Camouflage is itself a BDD behavior.",
        "Dismissal ignores serious impairment and suicide risk."
      ]
    }
  },
  {
    "id": "v6-08",
    "tag": "Muscle dysmorphia",
    "stem": "A 23-year-old man who competes in bodybuilding says he looks “skinny and weak.” He trains 4 hours a day despite a torn rotator cuff, refuses to eat at restaurants because he cannot control his protein, checks his arms in every mirror and has used injected testosterone for a year. Friends say he is extremely muscular.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Body dysmorphic disorder, with muscle dysmorphia",
      "Anorexia nervosa",
      "Anabolic steroid use disorder only",
      "Obsessive-compulsive disorder",
      "Narcissistic personality disorder"
    ],
    "answer": 0,
    "why": "Preoccupation with the body being **too small or insufficiently muscular**, with checking and excessive exercise, despite a very muscular build: **BDD with muscle dysmorphia**. Steroid use is common and should be addressed too.",
    "whyNot": [
      "Correct.",
      "He is not trying to be thin or low weight; his concern is muscularity.",
      "Steroid use is a consequence of the appearance preoccupation; assess it, but it does not explain the core disorder.",
      "His preoccupation is limited to appearance.",
      "Nothing suggests a pervasive grandiose pattern."
    ]
  },
  {
    "id": "v6-09",
    "tag": "BDD vs eating disorder",
    "stem": "A 19-year-old woman with a BMI of 16 restricts food, exercises excessively and believes her thighs are huge. She also spends hours checking her nose, which she believes is grotesquely crooked, and has asked three surgeons about rhinoplasty. Her nose looks normal.",
    "q": "Which diagnoses are appropriate?",
    "choices": [
      "Avoidant/restrictive food intake disorder",
      "Anorexia nervosa only",
      "Body dysmorphic disorder only",
      "Delusional disorder, somatic type",
      "Anorexia nervosa and body dysmorphic disorder"
    ],
    "answer": 4,
    "why": "Concerns about **weight and shape** belong to anorexia nervosa. Her **nose** preoccupation is separate, so **BDD** is diagnosed as well. The two can be comorbid.",
    "whyNot": [
      "Her restriction is driven by body image concern, which excludes ARFID.",
      "Her nose concern goes beyond weight and needs its own diagnosis.",
      "Her restriction and low weight meet anorexia nervosa.",
      "Delusional appearance beliefs are BDD with absent insight, not delusional disorder.",
      "Correct."
    ]
  },
  {
    "id": "v6-10",
    "tag": "Olfactory reference",
    "stem": "A 28-year-old man has showered five times a day for 2 years, uses large amounts of deodorant and avoids buses because he is sure he smells of feces. He sniffs his clothing repeatedly and often asks his sister if he smells. No one has ever noticed an odor, and physical examination is normal.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Social anxiety disorder",
      "Body dysmorphic disorder",
      "Other specified obsessive-compulsive and related disorder (olfactory reference disorder)",
      "Schizophrenia",
      "Illness anxiety disorder"
    ],
    "answer": 2,
    "why": "Preoccupation with emitting a **foul body odor** unnoticed by others, with checking, washing, camouflage and reassurance seeking: **olfactory reference disorder** (jikoshu-kyofu), an example of other specified OCRD (F42.8).",
    "whyNot": [
      "His avoidance is driven by the odor belief and its rituals.",
      "BDD concerns appearance; odor preoccupation is explicitly excluded from BDD.",
      "Correct.",
      "No hallucinations, disorganization or other delusions are described.",
      "He fears smelling, not having a disease."
    ]
  },
  {
    "id": "v6-11",
    "tag": "Hoarding",
    "stem": "A 72-year-old widower is referred by adult protective services. Paths through his house are narrow between piles of newspapers, catalogs, plastic containers and broken appliances; he cannot use his stove or bathtub. He says each item “could be useful someday” and becomes tearful and angry when his son tries to remove anything. He buys more containers weekly. His cognitive testing is normal, and he denies feeling depressed. He thinks the clutter is “a little untidy.”",
    "q": "What is the full diagnosis?",
    "choices": [
      "Hoarding disorder, with good or fair insight",
      "Hoarding disorder, with excessive acquisition, with poor insight",
      "Obsessive-compulsive disorder",
      "Major neurocognitive disorder due to frontotemporal degeneration",
      "Diogenes syndrome as a separate DSM diagnosis"
    ],
    "answer": 1,
    "why": "Difficulty discarding from a perceived need to save, distress at discarding, cluttered **active living areas**: **F42.3 hoarding disorder**, **with excessive acquisition** (weekly buying), **with poor insight** (mostly convinced it is not a problem despite evidence).",
    "whyNot": [
      "He does not recognize the problem, so insight is poor, not good.",
      "Correct.",
      "His saving is driven by perceived usefulness, not obsessions.",
      "Cognitive testing is normal and no behavioral variant features are described.",
      "Diogenes syndrome is not a DSM-5-TR diagnosis."
    ],
    "then": {
      "q": "His son plans to hire a crew to clear the house completely while he is away. What is the most likely outcome?",
      "choices": [
        "Lasting resolution",
        "Marked distress and rapid re-accumulation",
        "Improvement in insight",
        "No emotional reaction",
        "Conversion to OCD"
      ],
      "answer": 1,
      "why": "Forced clean-outs without treatment cause **high distress** and are usually followed by re-accumulation. Third-party clearing does not remove the diagnosis (Criterion C). Treatment uses CBT for hoarding with graded discarding, coordinated with safety services.",
      "whyNot": [
        "Clearing does not change the underlying difficulty discarding.",
        "Correct.",
        "Insight does not improve through forced clearing.",
        "Attempts by others to discard possessions cause high distress.",
        "Hoarding disorder does not convert to OCD."
      ]
    }
  },
  {
    "id": "v6-12",
    "tag": "Hoarding vs OCD",
    "stem": "A 40-year-old man’s apartment is filled with bags of used tissues, receipts and food wrappers. He keeps them because he fears that throwing something away might accidentally discard an important document and cause his family to lose their home. He finds this terrifying and wishes he could stop; he takes no pleasure in his possessions and does not acquire new items.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Schizophrenia",
      "Hoarding disorder",
      "Hoarding disorder and OCD",
      "Obsessive-compulsive disorder",
      "Major depressive disorder"
    ],
    "answer": 3,
    "why": "Accumulation driven by a **harm obsession**, unwanted, without pleasure or acquisition, with odd items, points to **OCD**. Add hoarding disorder only if severe hoarding is independent of other OCD symptoms.",
    "whyNot": [
      "No psychotic symptoms are described.",
      "Hoarding disorder saving is driven by perceived usefulness, value or sentiment.",
      "The hoarding is a direct consequence of his OCD obsession.",
      "Correct.",
      "No depressive inertia is described."
    ]
  },
  {
    "id": "v6-13",
    "tag": "Hoarding vs dementia",
    "stem": "A 76-year-old woman with no prior history began collecting rubbish from the street 18 months ago. Her house now contains rotting food and piles of trash, she is unwashed, and she has become disinhibited and has lost interest in her family. She does not object when her daughter throws items away. MRI shows frontal and temporal atrophy.",
    "q": "What best explains the accumulation?",
    "choices": [
      "A neurocognitive disorder (e.g., due to frontotemporal degeneration)",
      "Hoarding disorder",
      "Obsessive-compulsive disorder",
      "Normative collecting",
      "Excoriation disorder"
    ],
    "answer": 0,
    "why": "Late onset, squalor, disinhibition, apathy and no distress at discarding, with frontotemporal atrophy: accumulation as a direct consequence of a **neurocognitive disorder** (Criterion F excludes hoarding disorder).",
    "whyNot": [
      "Correct.",
      "Hoarding disorder begins early in life and involves distress when items are discarded.",
      "No obsessions are described.",
      "Collecting is organized and selective.",
      "Not relevant."
    ]
  },
  {
    "id": "v6-14",
    "tag": "Trichotillomania",
    "stem": "A 15-year-old girl is brought by her mother because she has no eyelashes and sparse eyebrows. She pulls them out while doing homework, often without noticing, and sometimes rolls the hairs between her fingers and bites them. She has tried wearing gloves and using fidget toys. She feels ashamed and avoids swimming. She is not concerned about how her eyebrows look and has no other rituals.",
    "q": "What is the diagnosis?",
    "choices": [
      "Stereotypic movement disorder",
      "Body dysmorphic disorder",
      "Obsessive-compulsive disorder",
      "Alopecia areata",
      "Trichotillomania (hair-pulling disorder)"
    ],
    "answer": 4,
    "why": "Recurrent pulling with **hair loss**, **repeated attempts to stop**, and distress and avoidance: **F63.3 trichotillomania**, largely **automatic**. Eyelids and eyebrows are among the commonest sites.",
    "whyNot": [
      "Stereotypic movement disorder begins in early development, often with intellectual disability or autism.",
      "She is not pulling to improve her appearance.",
      "There are no obsessions; pulling is not a response to intrusive thoughts.",
      "She admits pulling; alopecia areata would not explain it.",
      "Correct."
    ],
    "then": {
      "q": "Which complication should you ask about given that she bites the hairs?",
      "choices": [
        "Carpal tunnel syndrome",
        "Blepharitis",
        "Trichobezoar",
        "Scarring alopecia",
        "Hypothyroidism"
      ],
      "answer": 2,
      "why": "Biting and swallowing hair (**trichophagia**) can form a **trichobezoar**, causing abdominal pain, vomiting, anemia, obstruction or perforation.",
      "whyNot": [
        "Can occur, but swallowing hair is the specific risk here.",
        "Possible with eyelash pulling, but the biting raises the more serious concern.",
        "Correct.",
        "Trichotillomania usually causes nonscarring hair loss.",
        "Not a complication of hair pulling."
      ]
    }
  },
  {
    "id": "v6-15",
    "tag": "Excoriation",
    "stem": "A 22-year-old woman picks at scabs and small bumps on her arms for 1–2 hours most evenings, using pins. She has had two skin infections treated with antibiotics. She has tried many times to stop. She says she does not dislike her skin’s appearance, has no intention of hurting herself, uses no drugs, and her dermatologist finds no underlying skin disease.",
    "q": "What is the diagnosis?",
    "choices": [
      "Nonsuicidal self-injury",
      "Body dysmorphic disorder",
      "Excoriation (skin-picking) disorder",
      "Delusional parasitosis",
      "Factitious disorder"
    ],
    "answer": 2,
    "why": "Recurrent picking with **lesions**, **repeated attempts to stop**, and distress or impairment, not due to a substance, skin disease or another disorder: **F42.4 excoriation disorder**.",
    "whyNot": [
      "She has no intent to harm herself.",
      "She is not trying to improve appearance.",
      "Correct.",
      "She has no delusions of infestation.",
      "She acknowledges her picking; there is no deception."
    ]
  },
  {
    "id": "v6-16",
    "tag": "Skin picking vs psychosis",
    "stem": "A 39-year-old man has dug at his forearms with a knife for 3 weeks to remove “bugs” he can feel crawling under his skin. He brings a matchbox of skin fragments to show the “eggs.” He admits to daily methamphetamine use for 2 months.",
    "q": "Why is excoriation disorder not diagnosed?",
    "choices": [
      "Excoriation disorder requires onset in adolescence",
      "The picking is driven by formication and a delusion of infestation, likely substance-induced",
      "He has not had lesions",
      "Men cannot have excoriation disorder",
      "He has not been picking for 6 months"
    ],
    "answer": 1,
    "why": "Excoriation disorder is excluded when picking follows **delusions or tactile hallucinations** (formication) or is due to a substance (Criteria D and E). Methamphetamine-induced psychotic disorder is likely.",
    "whyNot": [
      "There is no age requirement.",
      "Correct.",
      "He has lesions.",
      "Men can have it, though most are women.",
      "There is no duration criterion."
    ]
  },
  {
    "id": "v6-17",
    "tag": "Skin picking and stimulants",
    "stem": "A 26-year-old woman with severe amphetamine use disorder picks compulsively at her face for hours during binges, causing sores. She does not pick when abstinent and has no psychotic symptoms. The picking needs clinical attention in its own right.",
    "q": "What is the correct code?",
    "choices": [
      "F15.988",
      "F15.280",
      "F42.4",
      "F15.288",
      "F19.288"
    ],
    "answer": 3,
    "why": "Substance/medication-induced OCRD codes end in **.x88**. Amphetamine-type with a **severe** use disorder: **F15.288** severe amphetamine use disorder with amphetamine-induced OCRD, with onset during intoxication.",
    "whyNot": [
      "9 means no use disorder; she has a severe one.",
      ".x80 endings are for anxiety disorders, not OCRDs.",
      "Picking only during intoxication is substance-induced, not excoriation disorder.",
      "Correct.",
      "Amphetamine has its own class (F15), not other or unknown."
    ]
  },
  {
    "id": "v6-18",
    "tag": "Sydenham’s chorea",
    "stem": "A 9-year-old girl develops jerky, irregular movements of her face and hands, emotional lability and new contamination fears with handwashing over 2 weeks. She had a sore throat 2 months ago. She has a new heart murmur, and her antistreptolysin O titer is raised.",
    "q": "How should her obsessive-compulsive symptoms be diagnosed?",
    "choices": [
      "OCD and related disorder due to another medical condition (Sydenham’s chorea)",
      "Obsessive-compulsive disorder, tic-related",
      "PANDAS",
      "Conversion disorder",
      "Tourette’s disorder"
    ],
    "answer": 0,
    "why": "**Sydenham’s chorea** (rheumatic fever after group A strep) with OCD-like symptoms is diagnosed as **OCRD due to another medical condition** (F06.8), with the medical condition coded first.",
    "whyNot": [
      "Correct.",
      "Her symptoms have a demonstrable medical cause, and chorea is not a tic.",
      "PANDAS, by definition, lacks chorea, carditis and arthritis.",
      "Organic findings (chorea, murmur, raised ASO) argue against it.",
      "Chorea is not tics, and onset is acute."
    ]
  },
  {
    "id": "v6-19",
    "tag": "Stroke",
    "stem": "A 66-year-old man with no psychiatric history develops repetitive checking and counting rituals 6 weeks after a right caudate infarct. He is distressed by them. He is not delirious.",
    "q": "What is the correct way to record the diagnosis?",
    "choices": [
      "Major neurocognitive disorder",
      "F42.2 obsessive-compulsive disorder",
      "F06.8 OCRD due to cerebral infarction; I69.398 cerebral infarction",
      "F42.9 unspecified OCRD",
      "I69.398 cerebral infarction; F06.8 obsessive-compulsive and related disorder due to cerebral infarction"
    ],
    "answer": 4,
    "why": "Late onset with a **striatal** lesion and a clear time link: **OCRD due to another medical condition**, with the medical condition coded **immediately before** F06.8, as in the manual’s own example.",
    "whyNot": [
      "No cognitive decline is described.",
      "A demonstrable physiological cause excludes primary OCD.",
      "The order is reversed.",
      "A specific diagnosis is available.",
      "Correct."
    ]
  },
  {
    "id": "v6-20",
    "tag": "Obsessional jealousy",
    "stem": "A 35-year-old man checks his wife’s phone, email and location many times a day and repeatedly asks her to reassure him that she has not been unfaithful. He admits there is no evidence, says she is “probably faithful,” and is distressed by his own doubts, which take hours a day and are damaging the marriage.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Paranoid personality disorder",
      "Delusional disorder, jealous type",
      "Other specified obsessive-compulsive and related disorder (obsessional jealousy)",
      "Obsessive-compulsive disorder",
      "Generalized anxiety disorder"
    ],
    "answer": 2,
    "why": "**Nondelusional** preoccupation with a partner’s infidelity, with repetitive checking and reassurance seeking, causing distress and impairment: **obsessional jealousy**, a named example of other specified OCRD (F42.8).",
    "whyNot": [
      "There is no pervasive distrust of others in general.",
      "He does not hold the belief with conviction.",
      "Correct.",
      "The manual places this presentation under other specified OCRD.",
      "His worry is focused on one theme with rituals."
    ]
  },
  {
    "id": "v6-21",
    "tag": "Nail biting",
    "stem": "A 30-year-old woman bites her nails and the surrounding skin until they bleed, many times a day, especially when bored. She has tried bitter nail polish, gloves and acrylic nails, without success. She hides her hands at work and has had two paronychia infections.",
    "q": "What is the correct diagnosis?",
    "choices": [
      "Excoriation disorder",
      "Other specified OCRD (other body-focused repetitive behavior disorder)",
      "Obsessive-compulsive disorder",
      "Trichotillomania",
      "No disorder: nail biting is a common habit"
    ],
    "answer": 1,
    "why": "Nail biting with repeated attempts to stop and distress or impairment is **other body-focused repetitive behavior disorder**, an example of other specified OCRD (F42.8).",
    "whyNot": [
      "Excoriation disorder concerns picking; nail biting has its own listed example.",
      "Correct.",
      "There are no obsessions.",
      "No hair pulling is described.",
      "Repeated failed attempts to stop, infections and concealment indicate a disorder."
    ]
  },
  {
    "id": "v6-22",
    "tag": "Koro",
    "stem": "During a rumor-fueled outbreak in his village, a 20-year-old man suddenly becomes terrified that his penis is shrinking into his abdomen. He holds it tightly and has relatives pull on it, convinced he will die if it disappears. The episode lasts a day.",
    "q": "Which statement is correct?",
    "choices": [
      "This is delusional disorder, somatic type",
      "This is body dysmorphic disorder",
      "This is a panic attack only",
      "This is koro, a culture-related syndrome listed under other specified OCRD",
      "This is dhat syndrome"
    ],
    "answer": 3,
    "why": "**Koro**: sudden, intense anxiety that the genitals will retract into the body, possibly causing death, often in epidemics in Southeast Asia. Listed as an example of other specified OCRD.",
    "whyNot": [
      "The brief, epidemic, culturally shaped episode fits koro.",
      "BDD focuses on ugliness, not on death from retraction.",
      "The cultural syndrome is better captured as koro.",
      "Correct.",
      "Dhat syndrome concerns loss of semen; the manual says koro is related to dhat syndrome but they differ."
    ]
  },
  {
    "id": "v6-23",
    "tag": "OCD and schizophrenia",
    "stem": "A 33-year-old man with stable schizophrenia on clozapine develops new intrusive thoughts that his hands are contaminated, which he recognizes as excessive, and washes for 2 hours a day. His hallucinations and delusions are unchanged and unrelated to contamination.",
    "q": "Which statement is most accurate?",
    "choices": [
      "OCD can be diagnosed in addition to schizophrenia; it occurs in about 12% of people with schizophrenia",
      "OCD cannot be diagnosed in someone with schizophrenia",
      "These are delusions and need a higher clozapine dose",
      "This is substance-induced OCRD and must be clozapine-related",
      "This is a prodrome of a new psychotic episode"
    ],
    "answer": 0,
    "why": "OCD is common in schizophrenia and schizoaffective disorder (about **12%**) and can be diagnosed when true obsessions and compulsions are present. Clozapine and other antipsychotics with serotonin blockade can cause or worsen OCD symptoms, which would be worth considering.",
    "whyNot": [
      "Correct.",
      "They can coexist; screen for OCD in schizophrenia.",
      "He recognizes the thoughts as excessive; they are not his delusions.",
      "A medication cause is possible but not certain; it would be judged from timing and course.",
      "His psychosis is stable and unchanged."
    ]
  },
  {
    "id": "v6-24",
    "tag": "OCD suicide",
    "stem": "A 25-year-old man with severe OCD (taboo religious obsessions), comorbid major depression and alcohol use says he is “tired of fighting his mind.”",
    "q": "Which statement about suicide risk in OCD is correct?",
    "choices": [
      "Only the contamination dimension is linked to suicide",
      "OCD protects against suicide because of its anxiety",
      "Suicide risk in OCD is entirely explained by depression",
      "Suicidal thoughts are rare in OCD",
      "OCD carries a markedly raised risk of suicide death, and taboo thoughts, depression and substance use raise it further"
    ],
    "answer": 4,
    "why": "Swedish registry: suicide death **OR 9.8**, attempt OR 5.5, still high after adjusting for comorbidity. Risk is higher with **severity**, the **unacceptable thoughts** dimension, comorbid **depression**, **substance use** and personality disorders.",
    "whyNot": [
      "The taboo (unacceptable) thoughts dimension is the one linked to risk.",
      "The opposite is true.",
      "Risk remains substantial after adjustment for comorbidity.",
      "Lifetime suicidal ideation averages about 44% in clinical samples.",
      "Correct."
    ]
  },
  {
    "id": "v6-25",
    "tag": "BDD-like with actual flaws",
    "stem": "A 40-year-old woman with prominent facial scars from a car accident spends 4 hours a day checking them, applying makeup and avoiding friends. She has turned down promotions to avoid meetings. Others agree the scars are clearly visible.",
    "q": "What is the best diagnosis?",
    "choices": [
      "PTSD",
      "Body dysmorphic disorder",
      "Other specified OCRD (BDD-like disorder with actual flaws)",
      "Social anxiety disorder",
      "Adjustment disorder"
    ],
    "answer": 2,
    "why": "BDD requires flaws that are **not observable or slight**. Excessive, impairing preoccupation with a **clearly visible** flaw is **BDD-like disorder with actual flaws**, an example of other specified OCRD.",
    "whyNot": [
      "No intrusions, avoidance of accident reminders or arousal symptoms are described.",
      "The flaws are clearly noticeable, so BDD Criterion A is not met.",
      "Correct.",
      "Her avoidance is driven by appearance preoccupation with rituals.",
      "Hours of daily rituals and long-term impairment go beyond adjustment disorder."
    ]
  }
]);
