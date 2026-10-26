/* Chapter 1 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch01", "vignettes", [
  {
    "id": "v1-01",
    "tag": "IDD diagnosis",
    "stem": "An 18-year-old man is referred before leaving school. He reads at about a fourth-grade level, cannot work out change or plan a weekly budget, and was recently talked into lending his savings to a stranger who promised to double it. He bathes, dresses and cooks simple meals on his own and takes the bus to a part-time job stocking shelves. Two individually administered intelligence tests give full-scale IQs of 71 and 73. A standardized adaptive behavior measure, completed with his mother, shows deficits in the conceptual and social domains. He received special education from age 7. Hearing and vision are normal.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "No diagnosis, because IQ is above 70",
      "Intellectual developmental disorder, mild",
      "Specific learning disorder with impairment in mathematics",
      "Borderline intellectual functioning only",
      "Intellectual developmental disorder, moderate"
    ],
    "answer": 1,
    "why": "Intellectual deficits on standardized testing (scores within the **65–75** band once measurement error is allowed), **adaptive deficits** needing support, and onset in childhood: **IDD**. Independent self-care with support for complex tasks and **gullibility** fit **mild (F70)**.",
    "whyNot": [
      "IQ alone is insufficient; scores of 71–73 fall within 70 ± 5, and adaptive deficits are confirmed.",
      "Correct.",
      "His difficulties are global (reading, money, social judgment), not confined to one academic skill.",
      "Adaptive deficits needing ongoing support meet IDD Criterion B, so this is more than borderline functioning.",
      "He is independent in self-care and works; moderate IDD needs long teaching for self-care and considerable support."
    ],
    "then": {
      "q": "Outside the DSM, which first-tier investigation is most appropriate to look for a cause?",
      "choices": [
        "Brain MRI for every patient",
        "Chromosomal microarray and fragile X testing",
        "EEG",
        "Thyroid function tests only",
        "No investigation; mild IDD has no identifiable causes"
      ],
      "answer": 1,
      "why": "Common first-tier genetic tests for unexplained IDD are **chromosomal microarray** and **fragile X** testing (exome sequencing increasingly). The DSM lists genetic evaluation (karyotype or microarray) as part of a comprehensive evaluation (p. 42); imaging and EEG are guided by findings."
    },
    "discuss": [
      "Why does DSM-5-TR rate severity by adaptive functioning rather than IQ?",
      "How would you protect this patient from exploitation without removing his independence?"
    ]
  },
  {
    "id": "v1-02",
    "tag": "IDD severity",
    "stem": "A 24-year-old woman with a lifelong developmental disability lives with her parents. She speaks in short, simple sentences, recognizes a few printed words and cannot use money. After several years of teaching she now feeds, dresses and bathes herself with occasional reminders. She works four mornings a week in a supported bakery program where a job coach manages her schedule and transport. Her parents make her medical and financial decisions with her. She enjoys friendships at a day center.",
    "q": "Which severity level best fits?",
    "choices": [
      "Mild",
      "Severe",
      "Profound",
      "Moderate",
      "Severity cannot be rated without an IQ score"
    ],
    "answer": 3,
    "why": "Self-care achieved only after **extended teaching**, spoken language much simpler than peers’, elementary-level academics, supported employment and caretaker help with **life decisions**: **moderate IDD (F71)**.",
    "whyNot": [
      "In mild IDD personal care is age-appropriate and support is needed only for complex tasks.",
      "In severe IDD speech is single words or phrases and supervision is needed at all times.",
      "In profound IDD communication is largely nonsymbolic and the person depends on others for all care.",
      "Correct.",
      "Severity is defined by adaptive functioning, not IQ."
    ]
  },
  {
    "id": "v1-03",
    "tag": "Global developmental delay",
    "stem": "A 2-year-9-month-old boy is referred because he says only six words, walked at 21 months and cannot stack blocks or use a spoon. He smiles at his parents, brings toys to show them and looks where they point. Formal developmental testing cannot be completed because he cannot follow the test instructions. Hearing and vision are normal. There is no history of loss of skills.",
    "q": "What is the most appropriate diagnosis now?",
    "choices": [
      "Global developmental delay",
      "Autism spectrum disorder",
      "Intellectual developmental disorder, severity to be determined",
      "Language disorder",
      "Unspecified intellectual developmental disorder"
    ],
    "answer": 0,
    "why": "Under **5**, delays in **several** domains (language, motor, adaptive), and **not reliably testable**: **global developmental delay (F88)**, with reassessment later.",
    "whyNot": [
      "Correct.",
      "Joint attention (showing, following a point) and social engagement are intact; no repetitive behaviors are described.",
      "IDD needs standardized testing and a rated severity; he cannot yet be tested.",
      "His delays are not confined to language.",
      "Unspecified IDD is for those over 5 whose testing is impossible because of sensory, physical or behavioral factors."
    ],
    "discuss": [
      "What would make you reassess him for autism at the next visit?",
      "Why is it common practice to delay an IDD diagnosis until after a course of early intervention?"
    ]
  },
  {
    "id": "v1-04",
    "tag": "IDD and NCD",
    "stem": "A 48-year-old man with Down syndrome and lifelong moderate intellectual developmental disorder has lived in a group home for 20 years. Over the past 2 years staff report that he gets lost in the house, no longer dresses himself, has lost interest in his job and has had two new seizures. Thyroid tests, vision and hearing are unchanged from last year.",
    "q": "How should his current condition be diagnosed?",
    "choices": [
      "Change the diagnosis to severe intellectual developmental disorder",
      "Major neurocognitive disorder only; the IDD diagnosis no longer applies",
      "Major depressive disorder",
      "Unspecified intellectual developmental disorder",
      "Moderate IDD plus major neurocognitive disorder, probably due to Alzheimer’s disease"
    ],
    "answer": 4,
    "why": "A **decline** from his own baseline is a **neurocognitive disorder**. People with Down syndrome are at high risk of **Alzheimer’s disease**, and **both** IDD and NCD are diagnosed (pp. 43, 45).",
    "whyNot": [
      "Severity is not upgraded for a new decline; the decline is a separate disorder.",
      "IDD remains: it is lifelong and began in development.",
      "Depression should be screened for, but progressive disorientation, loss of self-care and new seizures point to dementia.",
      "His severity was established; nothing has made assessment impossible.",
      "Correct."
    ],
    "discuss": [
      "How would you measure decline in someone whose baseline was already impaired?"
    ]
  },
  {
    "id": "v1-05",
    "tag": "Language disorder",
    "stem": "A 5-year-old girl’s kindergarten teacher reports that she speaks in short sentences with errors such as “Yesterday I go park,” struggles to follow two-step instructions and cannot retell a simple story. She plays imaginatively with peers, points and shares, makes good eye contact and has no repetitive behaviors. A full audiological assessment is normal, and nonverbal problem solving is average. Her father was a late talker.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Social (pragmatic) communication disorder",
      "Autism spectrum disorder",
      "Language disorder",
      "Speech sound disorder",
      "Global developmental delay"
    ],
    "answer": 2,
    "why": "Deficits in **vocabulary, grammar (past tense) and discourse** with comprehension problems, normal hearing and nonverbal ability: **language disorder (F80.2)**. Family history is common.",
    "whyNot": [
      "Her problem is structural language (grammar, vocabulary), which SPCD Criterion D excludes.",
      "Social interest, joint attention and play are intact, and there are no repetitive behaviors.",
      "Correct.",
      "The problem is not articulation of sounds.",
      "Her nonverbal ability is average and she is 5; delays are confined to language."
    ]
  },
  {
    "id": "v1-06",
    "tag": "Language regression",
    "stem": "A 5-year-old boy who spoke in full sentences began to ignore spoken requests 3 months ago and now uses only a few words. His parents first thought he was deaf, but audiometry is normal. He still plays with toys appropriately, seeks comfort from his mother and has no repetitive behaviors. His teacher has noticed brief staring episodes.",
    "q": "What is the most appropriate next step?",
    "choices": [
      "Diagnose language disorder and refer for speech therapy",
      "Arrange a routine and sleep EEG and neurological assessment",
      "Diagnose autism spectrum disorder",
      "Diagnose selective mutism",
      "Reassure and review in 6 months"
    ],
    "answer": 1,
    "why": "**Loss** of language at any age needs neurological assessment, including a **routine and sleep EEG**, to look for epileptic causes such as **Landau-Kleffner syndrome** (p. 49).",
    "whyNot": [
      "Language disorder is a failure to develop, not a loss; regression needs investigation first.",
      "Correct.",
      "Social relatedness and play are preserved, and loss after 2 normal years warrants medical work-up first.",
      "Selective mutism is anxiety-based failure to speak in specific settings, not loss of comprehension.",
      "Regression with staring spells needs prompt investigation."
    ]
  },
  {
    "id": "v1-07",
    "tag": "Speech sound disorder",
    "stem": "A 4-and-a-half-year-old girl is hard for strangers and her preschool teacher to understand. She says “tat” for cat, “do” for go and drops final consonants (“ba” for ball). Her vocabulary and sentence length are age-appropriate, she understands everything said to her and she is sociable. Hearing, palate and oral-motor examination are normal. Other children have begun to tease her.",
    "q": "What is the diagnosis?",
    "choices": [
      "Normal development; reassess at 8",
      "Language disorder",
      "Childhood-onset fluency disorder",
      "Speech sound disorder",
      "Dysarthria"
    ],
    "answer": 3,
    "why": "Persistent sound errors that make her **unintelligible** past the age (3) when speech should be intelligible, with normal language, hearing and structures, causing social limits: **speech sound disorder (F80.0)**.",
    "whyNot": [
      "Only a single “late eight” sound can be normal until 8; she has multiple errors affecting intelligibility.",
      "Vocabulary, grammar and comprehension are age-appropriate.",
      "There are no repetitions, prolongations or blocks.",
      "Correct.",
      "Oral-motor examination is normal and there are no neurological signs."
    ]
  },
  {
    "id": "v1-08",
    "tag": "Stuttering",
    "stem": "A 5-year-old boy began repeating the first sounds of words (“b-b-b-ball”) 8 months ago; he now also gets stuck with no sound coming out and blinks hard when blocked. He speaks fluently when singing and when talking to the family dog. He has started to say “I don’t know” rather than answer in class. Hearing and development are otherwise normal, and he takes no medication.",
    "q": "What is the diagnosis?",
    "choices": [
      "Childhood-onset fluency disorder (stuttering)",
      "Normal developmental dysfluency",
      "Tourette’s disorder",
      "Adult-onset fluency disorder",
      "Social anxiety disorder"
    ],
    "answer": 0,
    "why": "Sound repetitions and **blocks** with accompanying eye blinks, onset in early childhood, fluent when singing or speaking to a pet, and **avoidance** in class: **childhood-onset fluency disorder (F80.81)**.",
    "whyNot": [
      "Correct.",
      "Normal dysfluency involves whole-word or phrase repetitions without blocks, tension or avoidance.",
      "Blinking during blocks is an accompanying movement of stuttering, not evidence of motor and vocal tics.",
      "Onset is in early childhood.",
      "His avoidance is driven by dysfluency; social anxiety disorder may co-occur later but does not explain the speech pattern."
    ],
    "then": {
      "q": "His parents ask about the outlook. According to DSM-5-TR, what proportion of children recover?",
      "choices": [
        "Fewer than 10%",
        "About a quarter",
        "About half",
        "About 65%–85%",
        "All children recover by puberty"
      ],
      "answer": 3,
      "why": "Longitudinal studies show **65%–85%** recover; **severity at age 8** predicts recovery or persistence (p. 53)."
    }
  },
  {
    "id": "v1-09",
    "tag": "ASD versus SPCD",
    "stem": "A 9-year-old boy is referred for social difficulties. He talks at length about planets without noticing when others are bored, takes idioms literally and does not adjust his speech for teachers versus classmates. His vocabulary and grammar are advanced. Currently he has no unusual routines or sensory problems. His mother recalls that from ages 2 to 5 he lined up toy cars for hours, screamed if one was moved, insisted on the same route to preschool and covered his ears at the sound of the vacuum cleaner.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Social (pragmatic) communication disorder",
      "Language disorder",
      "Both social (pragmatic) communication disorder and autism spectrum disorder",
      "ADHD",
      "Autism spectrum disorder"
    ],
    "answer": 4,
    "why": "Restricted, repetitive behaviors (repetitive play, insistence on sameness, sensory hyperreactivity) were present **by history**, which satisfies Criterion B. With the social communication deficits, this is **ASD (F84.0)**, which **supersedes** SPCD (pp. 55, 66).",
    "whyNot": [
      "SPCD requires no restricted, repetitive behavior now or in the past.",
      "His vocabulary and grammar are advanced.",
      "ASD supersedes SPCD; they are not diagnosed together.",
      "Nothing suggests six inattentive or hyperactive symptoms.",
      "Correct."
    ],
    "discuss": [
      "What questions would you ask parents to uncover past restricted and repetitive behaviors?"
    ]
  },
  {
    "id": "v1-10",
    "tag": "SPCD",
    "stem": "An 11-year-old girl is described as “socially awkward.” She uses the same formal style with her younger cousins as with her principal, misses sarcasm and jokes, does not rephrase when misunderstood and struggles to work out what a character in a story implies. Her vocabulary, grammar and reading are age-appropriate. She has two friends, enjoys a range of activities and has never shown repetitive movements, rigid routines, intense narrow interests or sensory sensitivities, according to her parents and preschool records. She is not anxious about social situations.",
    "q": "What is the diagnosis?",
    "choices": [
      "Autism spectrum disorder, level 1",
      "Social anxiety disorder",
      "Social (pragmatic) communication disorder",
      "Language disorder",
      "No diagnosis"
    ],
    "answer": 2,
    "why": "All four **pragmatic** deficits with intact structural language and **no** restricted, repetitive features ever: **social (pragmatic) communication disorder (F80.82)**.",
    "whyNot": [
      "ASD needs at least two restricted, repetitive features, now or by history.",
      "She is not anxious, and the skills never developed rather than being inhibited by fear.",
      "Correct.",
      "Vocabulary and grammar are age-appropriate.",
      "The deficits limit her communication and relationships."
    ]
  },
  {
    "id": "v1-11",
    "tag": "ASD specifiers",
    "stem": "A 4-year-old boy has no words, leads adults by the hand to what he wants without looking at them and does not respond when his name is called. He rarely initiates interaction and responds only to very direct approaches. He spins the wheels of toy cars for hours, flaps his hands, becomes extremely distressed by any change in routine and cannot be redirected. Nonverbal problem-solving testing places him near age level for puzzles. Hearing is normal; fragile X testing is negative.",
    "q": "Which recording is most accurate?",
    "choices": [
      "Autism spectrum disorder, requiring support (level 1) for both domains",
      "Autism spectrum disorder, requiring very substantial support (level 3) for social communication and for restricted, repetitive behaviors, without accompanying intellectual impairment, with accompanying language impairment (no intelligible speech)",
      "Autism spectrum disorder with accompanying intellectual impairment, level 2",
      "Global developmental delay",
      "Language disorder and stereotypic movement disorder"
    ],
    "answer": 1,
    "why": "Minimal initiation and response, no speech, and repetitive behavior interfering in all spheres: **level 3** in **both** domains, rated separately. Nonverbal skills near age level argue **against** intellectual impairment; the **language** specifier records the current verbal level (pp. 58–60).",
    "whyNot": [
      "Level 1 describes noticeable impairment without supports in someone who speaks in full sentences.",
      "Correct.",
      "Nonverbal problem solving is near age level, and the severity is greater than level 2.",
      "Criteria for ASD are clearly met; global developmental delay would not explain the social and repetitive pattern.",
      "Language delay and stereotypies are part of ASD; stereotypic movement disorder is not added without self-injury or a treatment focus."
    ]
  },
  {
    "id": "v1-12",
    "tag": "ASD in women",
    "stem": "A 29-year-old accountant seeks assessment after reading about autism. She says she has always studied people to work out how to behave, copies the clothes and phrases of a popular colleague and rehearses conversations, and that socializing leaves her exhausted for days. She has a strong interest in horses that has filled her free time since childhood and she becomes very distressed when plans change. Her mother confirms she had one friend in school, preferred to play alone, lined up her toy horses and screamed at loud hand dryers. She is often anxious but has never had hallucinations or delusions.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Social anxiety disorder only",
      "Avoidant personality disorder",
      "Schizoid personality disorder",
      "Autism spectrum disorder",
      "Obsessive-compulsive personality disorder"
    ],
    "answer": 3,
    "why": "Lifelong social communication deficits hidden by **masking** (copying a successful woman, rehearsing), an interest unusual in **intensity** though “normative” in topic, insistence on sameness and **sensory** sensitivity in childhood: **ASD**. Later diagnosis in women is common (p. 65).",
    "whyNot": [
      "Anxiety is present, but social anxiety does not explain the lifelong reciprocity deficits, rigid routines and sensory history.",
      "Avoidant PD centers on fear of rejection, not a developmental pattern of social communication deficits and repetitive behavior.",
      "Schizoid PD lacks the restricted, repetitive and sensory features; the early developmental course decides.",
      "Correct.",
      "OCPD is perfectionism and control, not a developmental social communication disorder."
    ],
    "discuss": [
      "What would you ask about the “cost” of social interaction?",
      "How does masking affect the diagnostic interview?"
    ]
  },
  {
    "id": "v1-13",
    "tag": "ASD and catatonia",
    "stem": "A 15-year-old autistic boy with phrase speech has, over 3 weeks, stopped speaking, stands frozen in doorways for minutes, resists being moved, holds his arm in the air after it is positioned and has stopped eating. His hand-biting has increased markedly. He is afebrile; there is no rigidity, and he takes no medication. Blood tests are normal.",
    "q": "How should this be recorded?",
    "choices": [
      "Autism spectrum disorder with catatonia, plus F06.1 catatonia associated with autism spectrum disorder",
      "Autism spectrum disorder; increased stereotypy only",
      "Unspecified catatonia only",
      "Stereotypic movement disorder with self-injurious behavior",
      "Neuroleptic malignant syndrome"
    ],
    "answer": 0,
    "why": "Mutism, posturing, negativism, **waxy flexibility** and food refusal, with **worsening stereotypy and self-injury**: catatonia in ASD. Record **ASD with catatonia** and code **F06.1** (pp. 57, 60, 62). Adolescence is the peak risk period.",
    "whyNot": [
      "Correct.",
      "Mutism, posturing and waxy flexibility are catatonic signs, not just more stereotypy.",
      "Catatonia here is associated with a known mental disorder, ASD.",
      "The change is part of a catatonic syndrome, not an independent stereotypic disorder.",
      "He takes no antipsychotic and has no fever or rigidity."
    ],
    "then": {
      "q": "Outside the DSM, what is the usual first-line treatment?",
      "choices": [
        "Haloperidol",
        "A lorazepam challenge and benzodiazepine treatment, with ECT if needed",
        "Methylphenidate",
        "Applied behavior analysis alone",
        "Risperidone"
      ],
      "answer": 1,
      "why": "Catatonia, including in autism, is usually treated with **benzodiazepines** (a lorazepam challenge first) and **ECT** if response is inadequate; antipsychotics may worsen catatonia."
    }
  },
  {
    "id": "v1-14",
    "tag": "ASD versus psychosis",
    "stem": "A 19-year-old man with autism spectrum disorder diagnosed at age 4 is brought by his family because he answered “yes” when a nurse asked whether he hears voices when no one is around. On interview he explains that he hears voices “from the television in the next room.” He has always had few friends, talks mainly about train timetables and follows a fixed daily routine. There has been no change in functioning, sleep or behavior, and he denies any beliefs that others are plotting against him. He is concrete and literal throughout the interview.",
    "q": "What is the best formulation?",
    "choices": [
      "New-onset schizophrenia; start an antipsychotic",
      "Schizophreniform disorder",
      "Schizotypal personality disorder",
      "Brief psychotic disorder",
      "Autism spectrum disorder with concrete interpretation of the question; no psychotic disorder"
    ],
    "answer": 4,
    "why": "People with ASD may answer screening questions **concretely** (“Yes, from the TV”). There are no hallucinations, delusions or decline, so no psychotic disorder (p. 67). ASD and schizophrenia **can** co-occur, but criteria must be met.",
    "whyNot": [
      "There are no true hallucinations or delusions and no decline.",
      "No psychotic symptoms are present.",
      "His lifelong pattern began in early development with restricted interests and routines: ASD.",
      "No psychotic symptoms are present.",
      "Correct."
    ]
  },
  {
    "id": "v1-15",
    "tag": "ADHD combined",
    "stem": "An 8-year-old boy’s teacher and parents complete rating scales. At school and at home he makes careless mistakes, cannot stay on task, loses his books, does not seem to listen, avoids homework and forgets chores. He also fidgets, leaves his seat, runs around the classroom, talks constantly, blurts out answers and cannot wait in line. His parents say he has been “like this since he could walk.” He sleeps well, has no history of trauma and his hearing and vision are normal. His grades are falling and classmates avoid him.",
    "q": "What is the diagnosis?",
    "choices": [
      "ADHD, predominantly inattentive presentation",
      "ADHD, predominantly hyperactive/impulsive presentation",
      "ADHD, combined presentation",
      "Oppositional defiant disorder",
      "Specific learning disorder"
    ],
    "answer": 2,
    "why": "Six inattentive **and** six hyperactive-impulsive symptoms, before 12, in **two settings**, impairing, with other causes excluded: **ADHD, combined presentation (F90.2)**.",
    "whyNot": [
      "Hyperactive-impulsive symptoms also meet threshold.",
      "Inattentive symptoms also meet threshold.",
      "Correct.",
      "There is no pattern of angry, defiant or vindictive behavior.",
      "His problems are not confined to learning one academic skill."
    ],
    "then": {
      "q": "Outside the DSM, what is the recommended first-line treatment for a school-age child with ADHD?",
      "choices": [
        "Behavioral treatment only, with medication avoided until adolescence",
        "An FDA-approved ADHD medication, usually a stimulant, together with behavioral and school supports",
        "An antipsychotic",
        "Dietary elimination alone",
        "Neurofeedback"
      ],
      "answer": 1,
      "why": "For ages 6–11, guidelines (e.g., AAP 2019) recommend **FDA-approved medication** (stimulants first line) **plus** behavioral parent training and school supports."
    },
    "discuss": [
      "Why are reports from two settings required?",
      "What would you check before starting a stimulant?"
    ]
  },
  {
    "id": "v1-16",
    "tag": "Adult ADHD",
    "stem": "A 26-year-old software tester has been warned about missed deadlines. She describes losing track of tasks, careless errors, being easily distracted by unrelated thoughts, forgetting appointments and bills, and avoiding long reports. She fidgets and feels restless in meetings but is otherwise not hyperactive. Her old school reports from ages 8 to 11 say she “daydreams,” “loses her homework” and “never finishes classwork.” Her partner confirms the problems at home. She drinks two glasses of wine a week, sleeps 7 hours and has no mood episodes.",
    "q": "Which statement is correct?",
    "choices": [
      "ADHD cannot be diagnosed because she has fewer than six symptoms",
      "ADHD, predominantly inattentive presentation, can be diagnosed with five inattentive symptoms",
      "ADHD cannot be diagnosed because hyperactivity is absent",
      "Generalized anxiety disorder explains her symptoms",
      "Major neurocognitive disorder should be considered"
    ],
    "answer": 1,
    "why": "From **age 17**, **five** symptoms suffice. She has five inattentive symptoms, onset documented **before 12**, two settings and impairment: **ADHD, predominantly inattentive presentation (F90.0)**.",
    "whyNot": [
      "The threshold drops to five from age 17.",
      "Correct.",
      "Hyperactivity is not required for the inattentive presentation.",
      "Her inattention is lifelong and not driven by worry.",
      "There is no decline from a previous level; symptoms date from childhood."
    ]
  },
  {
    "id": "v1-17",
    "tag": "ADHD versus bipolar",
    "stem": "An 11-year-old girl is referred for “ADHD.” Her parents describe three separate weeks this year when she slept 3 hours a night without tiredness, talked nonstop, claimed she would be a famous scientist and teacher at the same time, started many projects and was unusually silly and giddy. Between these weeks her attention, sleep and behavior are normal, and her teachers have had no concerns in earlier years.",
    "q": "What is the most likely explanation?",
    "choices": [
      "ADHD, combined presentation",
      "Disruptive mood dysregulation disorder",
      "Oppositional defiant disorder",
      "A bipolar disorder",
      "Normal preadolescent behavior"
    ],
    "answer": 3,
    "why": "**Episodic** periods lasting days with elevated mood, grandiosity and reduced need for sleep, with normal function between, point to **bipolar disorder**. ADHD is **persistent**, begins before 12 and is not episodic (p. 74).",
    "whyNot": [
      "ADHD symptoms are persistent, not confined to discrete episodes.",
      "DMDD is chronic irritability with outbursts, not episodic elation.",
      "There is no pattern of defiance.",
      "Correct.",
      "Episodes with grandiosity and no need for sleep are not normal."
    ]
  },
  {
    "id": "v1-18",
    "tag": "ADHD versus PTSD",
    "stem": "A 5-year-old boy is brought because his preschool says he “cannot sit still,” is irritable and cannot concentrate, starting about 5 months ago. Before that, teachers described him as calm. On careful questioning his mother discloses that he witnessed his father seriously assault her 6 months ago; since then he startles easily, plays out the fight with toy figures and has nightmares.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Posttraumatic stress disorder",
      "ADHD, predominantly hyperactive/impulsive presentation",
      "Generalized anxiety disorder",
      "Disruptive mood dysregulation disorder",
      "Reactive attachment disorder"
    ],
    "answer": 0,
    "why": "In children **under 6**, PTSD often shows as restlessness, irritability and poor concentration that **mimic ADHD**. Recent onset after a trauma, with startle, **play reenactment** and nightmares, points to **PTSD** (p. 74).",
    "whyNot": [
      "Correct.",
      "Symptoms began after the trauma in a previously calm child, with trauma-specific features.",
      "Worry is not the core; the symptoms are trauma-linked.",
      "DMDD is not diagnosed before age 6.",
      "He has a selective attachment to his mother; RAD requires grossly insufficient care."
    ]
  },
  {
    "id": "v1-19",
    "tag": "ADHD presentation change",
    "stem": "A 16-year-old was diagnosed with ADHD, combined presentation, at age 7. Over the past 6 months he has had seven inattentive symptoms (careless errors, disorganization, losing things, forgetting assignments, distractibility, not finishing work, avoiding sustained effort) but only three hyperactive-impulsive symptoms (fidgeting, inner restlessness, interrupting). His grades remain poor.",
    "q": "How should his diagnosis now be recorded?",
    "choices": [
      "ADHD, combined presentation, unchanged",
      "The ADHD diagnosis should be removed",
      "ADHD in partial remission",
      "Other specified ADHD",
      "ADHD, predominantly inattentive presentation"
    ],
    "answer": 4,
    "why": "The presentation is based on the **past 6 months**: inattention meets threshold, hyperactivity-impulsivity does not, so **predominantly inattentive presentation (F90.0)**. The diagnosis is not lost when the presentation changes (pp. 69–71).",
    "whyNot": [
      "Hyperactive-impulsive symptoms no longer meet threshold for the past 6 months.",
      "Symptoms persist and impair him.",
      "Partial remission applies when fewer than full criteria are met overall; inattention still meets full threshold.",
      "Full criteria are met, so a residual category is not used.",
      "Correct."
    ]
  },
  {
    "id": "v1-20",
    "tag": "SLD reading",
    "stem": "A 10-year-old girl with a large spoken vocabulary reads aloud slowly, sounding out short words and guessing longer ones from the first letter. Her spelling is phonetically odd (“sed” for said). After 8 months of small-group phonics tutoring she has made little progress. On individually administered achievement tests, word reading accuracy and reading fluency standard scores are 75 and 74; listening comprehension and math are average. Full-scale IQ is 108. Vision and hearing are normal and she has attended school regularly.",
    "q": "What is the diagnosis?",
    "choices": [
      "ADHD, predominantly inattentive presentation",
      "Language disorder",
      "Specific learning disorder with impairment in reading",
      "Intellectual developmental disorder, mild",
      "No diagnosis until age 12"
    ],
    "answer": 2,
    "why": "Inaccurate, slow word reading persisting **despite at least 6 months** of targeted help, scores more than **1.5 SD** below the mean, normal IQ, senses and schooling: **SLD with impairment in reading (F81.0)**, word reading accuracy and fluency (dyslexia pattern).",
    "whyNot": [
      "No inattention outside reading is described.",
      "Spoken vocabulary and listening comprehension are good.",
      "Correct.",
      "IQ is 108.",
      "SLD can be diagnosed once formal schooling has begun."
    ],
    "then": {
      "q": "Her spelling and written expression scores are also more than 1.5 SD below the mean. How is this coded?",
      "choices": [
        "F81.0 only, with spelling listed as a reading subskill",
        "F81.0 and F81.81, each with its impaired subskills",
        "F81.9",
        "F81.2",
        "F88"
      ],
      "answer": 1,
      "why": "Each impaired domain is coded **separately**: **F81.0** reading and **F81.81** written expression (spelling accuracy)."
    }
  },
  {
    "id": "v1-21",
    "tag": "SLD exclusions",
    "stem": "A 9-year-old boy arrived from a conflict zone 5 months ago after missing two years of schooling. He now attends a school that teaches in a language he is still learning. His teacher refers him because he reads far below grade level in the new language. His parents report that he was reading well in his first language before the war. He is attentive and sociable; vision and hearing are normal.",
    "q": "What is the best statement?",
    "choices": [
      "Specific learning disorder with impairment in reading",
      "Specific learning disorder should not be diagnosed now; his difficulties are explained by interrupted schooling and the language of instruction",
      "Intellectual developmental disorder, mild",
      "Language disorder",
      "ADHD, predominantly inattentive presentation"
    ],
    "answer": 1,
    "why": "SLD Criterion D excludes **inadequate instruction**, lack of proficiency in the **language of instruction** and psychosocial adversity. He also has not had 6 months of targeted intervention. Assess first-language skills and reassess after teaching (pp. 77, 83–84).",
    "whyNot": [
      "Exclusions in Criterion D apply, and he previously read well in his first language.",
      "Correct.",
      "Nothing suggests global intellectual or adaptive deficits.",
      "Language disorder would affect both languages; he was competent in his first.",
      "He is attentive."
    ],
    "discuss": [
      "What risk factors for learning problems in refugee and migrant children does the manual list?"
    ]
  },
  {
    "id": "v1-22",
    "tag": "DCD and ADHD",
    "stem": "A 7-year-old boy has trouble buttoning his shirt, using a knife and fork, catching a ball and riding a bicycle; his handwriting is slow and barely legible even when he concentrates in a quiet one-to-one setting. He also has six inattentive and six hyperactive-impulsive symptoms at home and school since age 4. Neurological and visual examinations are normal; IQ is average.",
    "q": "What is the best diagnosis?",
    "choices": [
      "ADHD, combined presentation, only; the clumsiness is from distractibility",
      "Developmental coordination disorder only",
      "Cerebral palsy",
      "Both ADHD, combined presentation, and developmental coordination disorder",
      "Specific learning disorder with impairment in written expression"
    ],
    "answer": 3,
    "why": "Motor incompetence persists even in a **focused one-to-one** setting, so it is not just distractibility; with full ADHD criteria, **both** are diagnosed. ADHD is the most frequent DCD comorbidity (about **50%**) (p. 88).",
    "whyNot": [
      "Poor coordination persists when he is attentive and undistracted.",
      "Full ADHD criteria are also met.",
      "The neurological examination is normal.",
      "Correct.",
      "His handwriting problem is motor, not a written-expression learning disorder."
    ]
  },
  {
    "id": "v1-23",
    "tag": "Stereotypic movement disorder",
    "stem": "A 12-year-old boy with severe intellectual developmental disorder in a residential school bangs his head against walls and bites his hands many times a day, especially when bored. He has calluses and recent lacerations and wears a helmet; staff must supervise him continuously and use arm splints at times. The behavior began before age 3 and has the same rhythmic pattern each time. He has no social communication deficits beyond his developmental level and no tics. Dental and ear examinations are normal.",
    "q": "What is the diagnosis?",
    "choices": [
      "Stereotypic movement disorder, with self-injurious behavior, severe, associated with intellectual developmental disorder",
      "Tourette’s disorder",
      "Autism spectrum disorder",
      "Nonsuicidal self-injury",
      "Obsessive-compulsive disorder"
    ],
    "answer": 0,
    "why": "Repetitive, rhythmic, apparently purposeless self-injury from early childhood needing **continuous monitoring and protection**: **SMD with self-injurious behavior, severe (F98.4)**, recorded as associated with IDD (pp. 89–91).",
    "whyNot": [
      "Correct.",
      "There are no tics; the pattern is fixed and rhythmic.",
      "His social communication matches his developmental level.",
      "Nonsuicidal self-injury is deliberate self-harm to relieve distress; this rhythmic self-injury beginning before 3 in severe IDD is a stereotypy.",
      "There are no obsessions."
    ],
    "discuss": [
      "Which medical causes of pain can drive self-injury in a nonverbal child?"
    ]
  },
  {
    "id": "v1-24",
    "tag": "Tourette’s disorder",
    "stem": "A 10-year-old boy began blinking hard at age 6; since then he has had head jerks, shoulder shrugs and facial grimaces that come and go, with a tic-free summer last year. For the past 7 months he has also sniffed and cleared his throat many times a day; ENT and allergy assessments are normal. He describes a “tickle” before each tic, can hold them in at school and has a burst when he gets home. He takes no medication or drugs. He is also distractible and loses things at home and school.",
    "q": "What is the tic diagnosis?",
    "choices": [
      "Provisional tic disorder",
      "Persistent (chronic) motor tic disorder",
      "Stereotypic movement disorder",
      "Other specified tic disorder",
      "Tourette’s disorder"
    ],
    "answer": 4,
    "why": "Multiple motor tics and at least one vocal tic, more than **1 year since the first tic** (tic-free gaps do not reset the clock), onset before 18: **Tourette’s disorder (F95.2)**. Vocal tics need not have lasted a year themselves.",
    "whyNot": [
      "It has been 4 years since the first tic.",
      "He also has vocal tics, which moves him up the hierarchy.",
      "Tics are nonrhythmic, variable and preceded by an urge.",
      "Full criteria for a specific tic disorder are met.",
      "Correct."
    ],
    "then": {
      "q": "His tics are mild, but he also meets criteria for ADHD. Outside the DSM, which approach fits current guidance best?",
      "choices": [
        "Haloperidol first line",
        "Education, CBIT for tics if needed, and treatment of ADHD, for example with an alpha-2 agonist such as guanfacine",
        "Avoid all ADHD treatment because it always worsens tics",
        "Pimozide",
        "No treatment of any kind"
      ],
      "answer": 1,
      "why": "Mild tics often need only **education**; **CBIT** is first-line behavioral treatment. With comorbid ADHD, **alpha-2 agonists** treat both, and stimulants are not absolutely contraindicated. ADHD often impairs more than the tics."
    },
    "discuss": [
      "How would you explain the premonitory urge to his teacher?"
    ]
  },
  {
    "id": "v1-25",
    "tag": "Persistent tic disorder",
    "stem": "A 15-year-old girl has had repetitive eye squinting, nose twitching and neck stretching for 3 years. They wax and wane, are preceded by an urge and worsen before exams. She has never had sniffing, throat clearing, words or any other sounds, according to her and her parents. She takes no medication, and her neurological examination is normal apart from the tics.",
    "q": "What is the diagnosis?",
    "choices": [
      "Tourette’s disorder",
      "Provisional tic disorder",
      "Persistent (chronic) motor or vocal tic disorder, with motor tics only",
      "Other specified tic disorder",
      "Stereotypic movement disorder"
    ],
    "answer": 2,
    "why": "Motor tics only, never vocal, for more than **1 year**, onset before 18: **persistent (chronic) motor or vocal tic disorder, with motor tics only (F95.1)**.",
    "whyNot": [
      "Tourette’s needs at least one vocal tic at some time.",
      "Tics have lasted more than 1 year.",
      "Correct.",
      "Full criteria for a specific tic disorder are met.",
      "Tics are preceded by an urge and vary; stereotypies are rhythmic and begin before 3."
    ]
  }
]);
