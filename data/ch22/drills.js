/* Chapter 22 practice drills.
   dxline:   name the condition and write its code (with the 7th character for the T codes). Codes follow DSM-5-TR (2022)
             with the APA's later corrections and updates, labeled where they differ from print: T14.91XA/XD (September 2022
             correction), Z91.199 (October 1, 2022), Z59.10 (October 1, 2023), Z59.71/Z59.72 (October 1, 2024); checked
             October 27, 2026. The chapter's conditions are not mental disorders and have no criteria sets (p. 821): the
             drills apply the manual's definitions, examples and coding notes.
   counting: decide which items belong to one of the chapter's lists or numbers, then whether the number is reached.
   Ids are stable keys for progress. */
(function () {
  SP.add("ch22", "dxline", [
    {
      id: "w22-01", tag: "Overdose with a note",
      "case": "A 24-year-old woman is brought to the emergency department 3 hours after swallowing a quantity of her prescribed tablets; she left a note saying she wanted to die. She is medically stable and has no organ injury. It is her first known attempt, and the on-call psychiatrist is seeing her for the first time.",
      parts: [
        { label: "Condition", options: ["Current suicidal behavior", "History of suicidal behavior", "Current nonsuicidal self-injury", "History of nonsuicidal self-injury"], answer: 0 },
        { label: "Code", options: ["T14.91A", "T14.91XA", "T14.91XD", "Z91.51", "R45.88"], answer: 1 }
      ],
      line: "**T14.91XA** Current suicidal behavior, initial encounter",
      why: "Intent to die is explicit (the note) and the act was carried out; that no injury resulted does not matter (p. 822). She is in active treatment in the emergency department and seen by a new clinician, so the letter is **A** (p. 822). The manual prints **T14.91A**, but the APA’s **September 2022 correction** made it **T14.91XA**: A is the **7th** character, with X holding the 6th place (APA coding update; labeled). Safety comes first: a full risk assessment and a supervised plan before any discharge (app guidance)."
    },
    {
      id: "w22-02", tag: "Bruising now, attempt at 16",
      "case": "A 19-year-old student tells his outpatient psychiatrist that for 4 months he has been hitting his thighs hard enough to bruise when he feels overwhelmed; he does it to calm down and has no wish to die when he does it. At 16 he took an overdose meaning to die and was treated in hospital. He reports no suicidal thoughts now.",
      parts: [
        { label: "Code for the current behavior", options: ["R45.88", "Z91.52", "T14.91XD", "R45.851"], answer: 0 },
        { label: "History codes to add", options: ["Z91.51 history of suicidal behavior", "Z91.52 history of nonsuicidal self-injury", "T14.91XD current suicidal behavior, subsequent encounter"], answer: [0], multi: true }
      ],
      line: "**R45.88** Current nonsuicidal self-injury; **Z91.51** History of suicidal behavior",
      why: "Self-inflicted damage likely to bruise, done **without suicidal intent** and happening now: **R45.88** (p. 822). The overdose at 16 carried intent to die, so it was suicidal behavior; it is in his lifetime but not current, so **Z91.51** (p. 822). Z91.52 would apply only if the self-injury had stopped; T14.91XD is for **current** suicidal behavior in follow-up care. R45.851 (suicidal ideations) is an ICD-10-CM code the chapter does not list (ICD-10-CM note). Ask about intent again at every visit (app guidance)."
    },
    {
      id: "w22-03", tag: "Fracture, father suspected",
      "case": "A 5-year-old girl is admitted with bruises of different ages on her back and a healing rib fracture. Her father’s account does not explain the injuries; the child protection team is investigating and nothing is confirmed yet. The child psychiatry service sees her on the ward for the first time to begin mental health care for her as a possible victim. Her father is the suspected abuser.",
      parts: [
        { label: "Event code", options: ["T74.12XA", "T76.12XA", "T76.12XD", "T76.22XA"], answer: 1 },
        { label: "Encounter code", options: ["Z69.010", "Z69.020", "Z69.011", "Z62.810"], answer: 0 }
      ],
      line: "**T76.12XA** Child physical abuse, suspected, initial encounter; **Z69.010** Encounter for mental health services for victim of child physical abuse by parent",
      why: "Not yet confirmed, so the **T76** (suspected) code, not T74 (pp. 822–823). A first evaluation by a new clinician during active care takes **A** (p. 823). The visit gives mental health services to the child and the suspected abuser is a **parent**: **Z69.010**. Z69.020 is for nonparental abuse, Z69.011 is the perpetrator’s code and Z62.810 is past history (p. 823). Reporting follows hospital protocol and local law, in the Philippines RA 7610 (outside the DSM; app guidance)."
    },
    {
      id: "w22-04", tag: "Questioned, isolated, follow-up",
      "case": "A 41-year-old woman is in her third session with you for anxiety. Her husband checks her phone daily, questions her for hours about where she has been, controls all the money, has cut her off from her friends and tells her she is imagining things when she objects. A protection order documented the pattern last year. There has been no physical or sexual violence, and she does not depend on him for care. Today is routine follow-up.",
      parts: [
        { label: "Event code", options: ["T76.31XD", "T74.31XA", "T74.31XD", "T74.01XD", "T74.32XD"], answer: 2 },
        { label: "Encounter code", options: ["Z69.11", "Z69.81", "Z69.12", "Z91.411"], answer: 0 }
      ],
      line: "**T74.31XD** Spouse or partner abuse, psychological, confirmed, subsequent encounter; **Z69.11** Encounter for mental health services for victim of spouse or partner psychological abuse",
      why: "Interrogation, economic control, isolation and making her doubt her own perceptions are the manual’s examples of partner psychological abuse (p. 827). Documented, so **confirmed** (T74); routine follow-up after active care is **D** (p. 823). The **1** in .31 marks an adult; T74.32 is the **child** code. Neglect (T74.01) needs a **dependent** partner (pp. 826–827). The victim encounter code is **Z69.11**; Z91.411 is past history (p. 827). Diagnose any anxiety disorder in its own right, and review her safety (app guidance)."
    },
    {
      id: "w22-05", tag: "Partner sexual violence, first visit",
      "case": "A 30-year-old woman is referred by a women’s crisis center for a first psychiatric appointment. Her former live-in partner forced her into sexual acts against her will on several occasions; the center and the police have documented it. She now has nightmares and startles easily. The referral asks for mental health care for her as the victim.",
      parts: [
        { label: "Event code", options: ["T74.21XA", "T74.22XA", "T76.21XA", "T74.11XA"], answer: 0 },
        { label: "Encounter code", options: ["Z69.11", "Z69.81", "Z69.82", "Z91.410"], answer: 1 }
      ],
      line: "**T74.21XA** Spouse or partner violence, sexual, confirmed, initial encounter; **Z69.81** Encounter for mental health services for victim of spouse or partner violence, sexual",
      why: "Using force or coercion to compel a sexual act against the partner’s will is partner sexual violence (p. 826); it is documented, so confirmed, and a new clinician’s first evaluation is **A**. The trap is the victim code: **Z69.81** for sexual violence, whereas physical violence, neglect and psychological abuse use **Z69.11** (pp. 826–827). Z69.82 is the perpetrator code for nonpartner adult abuse; Z91.410 is past history. Assess for PTSD in its own right and plan for safety (app guidance)."
    },
    {
      id: "w22-06", tag: "Grandmother as parent",
      "case": "A 9-year-old boy has lived with his maternal grandmother since infancy while his mother works abroad; the grandmother is his main caregiver. Since his ADHD diagnosis, homework time ends in shouting, she swings between harsh threats and doing everything for him, and he says she “always blames” him. Both ask for help with their relationship. There has been no injury and he is not afraid of her.",
      parts: [
        { label: "Condition", options: ["Parent-child relational problem", "Child affected by parental relationship distress", "High expressed emotion level within family", "Child psychological abuse"], answer: 0 },
        { label: "Code", options: ["Z62.820", "Z62.821", "Z62.822", "Z62.898", "Z63.8"], answer: 3 }
      ],
      line: "**Z62.898** Other caregiver–child relational problem",
      why: "The manual counts a relative such as a **grandparent** in a parental role as the “parent” for this category (p. 829). The focus is the **quality** of the relationship, with behavioral (escalating arguments, overprotection), cognitive (blame) and affective problems (p. 829). Z62.820–Z62.822 name the biological, adoptive and foster parent, so the grandmother’s relationship is **other caregiver–child, Z62.898** (app reading of p. 829). If being raised apart from his mother were itself the focus, **Z62.29** upbringing away from parents could be added (p. 829). Record the ADHD too."
    },
    {
      id: "w22-07", tag: "Critical, watchful parents",
      "case": "A 16-year-old girl with anorexia nervosa has been readmitted twice after weight restoration. In family sessions her parents criticize each meal, her mother sleeps in her room to watch her, and her father is openly hostile about “the trouble she causes.” The team decides to make this a target of treatment.",
      parts: [
        { label: "Code", options: ["Z63.0", "Z63.5", "Z63.8", "Z62.898"], answer: 2 }
      ],
      line: "**Z63.8** High expressed emotion level within family",
      why: "Expressed emotion measures the **hostility, emotional overinvolvement and criticism** a family directs at the member who is the identified patient; it is coded when it is the focus or affects that member’s disorder (p. 830). Z63.0 is the couple’s own relationship distress, Z63.5 separation or divorce, and Z62.898 a child affected by the **parents’ discord with each other** (pp. 829–830). Record anorexia nervosa as well. The ICD-10-CM title of Z63.8 is broader: “other specified problems related to primary support group” (ICD-10-CM title)."
    },
    {
      id: "w22-08", tag: "Car, then overpass",
      "case": "A 58-year-old man with alcohol use disorder has slept in his car and, since it was towed, under a highway overpass for the past 3 months. He cannot keep clinic appointments or store his medication. The team plans housing assistance.",
      parts: [
        { label: "Code", options: ["Z59.01", "Z59.02", "Z59.10", "Z59.2", "Z59.9"], answer: 1 }
      ],
      line: "**Z59.02** Unsheltered homelessness",
      why: "A car and an overpass are places **not meant for human habitation**: unsheltered homelessness (p. 831). **Sheltered** homelessness (Z59.01) means the main nighttime residence is a shelter, a motel or a temporary or transitional arrangement (p. 831). Z59.10 (printed Z59.1) is inadequate housing, which presumes a home. It is coded because it affects treatment (pp. 821, 831), beside the alcohol use disorder."
    },
    {
      id: "w22-09", tag: "Refused cover, clozapine",
      "case": "A 46-year-old woman with schizophrenia, well on clozapine, has lost her employer’s health coverage. A private insurer has refused her a policy because of her preexisting illness, and she cannot pay for the drug and the blood monitoring herself. Her income otherwise covers food and rent. The social worker is working on coverage.",
      parts: [
        { label: "Code", options: ["Z59.7", "Z59.71", "Z59.72", "Z59.6", "Z59.5"], answer: 1 }
      ],
      line: "**Z59.71** Insufficient health insurance coverage (APA coding update, September 2024; printed as Z59.7)",
      why: "Being unable to get adequate health insurance because of a **preexisting condition** is one of the manual’s examples for insufficient social or health insurance or welfare support (p. 832). The printed **Z59.7** stopped being a complete code on **October 1, 2024**: ICD-10-CM split it, and the APA’s September 2024 update gives **Z59.71** for insufficient health insurance coverage and **Z59.72** for insufficient welfare support (APA coding update; labeled). Low income (Z59.6) is not the problem here; coverage is."
    },
    {
      id: "w22-10", tag: "Night walks from the home",
      "case": "An 84-year-old man with major neurocognitive disorder due to Alzheimer’s disease lives in a nursing home. Three nights this month he left through an unlocked side door and was found walking along the main road; he says he was “going to work.” He takes no antipsychotic and shows no restlessness while seated. The team needs a safety plan.",
      parts: [
        { label: "Record first", options: ["The major neurocognitive disorder", "Z91.83 wandering", "Either order is acceptable"], answer: 0 },
        { label: "Code for the wandering", options: ["Z91.83", "G25.71", "Z59.3", "Z60.0"], answer: 0 }
      ],
      line: "[disorder code(s), Chapter 17] Major neurocognitive disorder due to Alzheimer’s disease; **Z91.83** Wandering associated with major neurocognitive disorder due to Alzheimer’s disease",
      why: "The coding note says to code the **associated mental disorder first**, then **Z91.83** with that disorder named in the title (p. 834). An urge to walk about that takes him out of a supervised setting and puts him at risk is the manual’s own example in major NCD (p. 834). It is not akathisia (G25.71: no dopamine blocker, no seated restlessness), and he is not escaping an unwanted placement (p. 834). Take the disorder’s own code from Chapter 17. The ICD-10-CM title of Z91.83 is “wandering in diseases classified elsewhere” (ICD-10-CM title)."
    },
    {
      id: "w22-11", tag: "Widow, 10 weeks",
      "case": "A 67-year-old widow comes 10 weeks after her husband’s death. She cries daily, sleeps poorly, eats little and has lost 3 kg. She still sees friends, attends church and minds her grandchildren, says she feels “as anyone would,” and asks only for help with sleep. She does not feel worthless and has no thoughts of ending her life.",
      parts: [
        { label: "Condition", options: ["Uncomplicated bereavement", "Major depressive disorder, single episode", "Prolonged grief disorder", "Phase of life problem"], answer: 0 },
        { label: "Code", options: ["Z63.4", "Z60.0", "Z63.5", "Z65.8"], answer: 0 }
      ],
      line: "**Z63.4** Uncomplicated bereavement",
      why: "A **normal** reaction to a death, with depressive-like symptoms (sadness, insomnia, poor appetite, weight loss) that she regards as normal, seeking help only for sleep: the manual’s picture (p. 834). Prolonged grief disorder needs at least **12 months** since the death in adults (Chapter 7), and an MDE is judged by the Chapter 4 guidance (p. 834). Review mood and ask directly about suicidal thoughts at follow-up (app guidance). The ICD-10-CM title of Z63.4 is “disappearance and death of family member” (ICD-10-CM title)."
    },
    {
      id: "w22-12", tag: "Voices before trial",
      "case": "A 33-year-old man charged with robbery is referred by his defense lawyer for a fitness evaluation. He says he hears voices “all day, every day,” yet jail staff see him playing cards and arguing calmly about the score, with no sign of responding to voices. He refuses psychological testing. His record shows conduct problems from age 12 and antisocial personality disorder diagnosed at 20.",
      parts: [
        { label: "Condition", options: ["Malingering", "Factitious disorder imposed on self", "Functional neurological symptom disorder", "Adult antisocial behavior"], answer: 0 },
        { label: "Code", options: ["Z76.5", "F68.10", "Z72.811", "No code: ASPD alone"], answer: 0 }
      ],
      line: "**Z76.5** Malingering (with **F60.2** antisocial personality disorder)",
      why: "Feigned psychotic symptoms with an obvious **external incentive**, evading prosecution (p. 835). All four indicators the manual lists are present: a medicolegal referral, a marked gap between claims and observation, refusal to cooperate, and antisocial personality disorder (p. 835). Factitious disorder is excluded by the incentive, FND by the intentional production (p. 835). Z72.811 is for antisocial behavior **not attributable to a disorder**, and he has one. The indicators call for **strong consideration**, not a verdict: record the observed discrepancies rather than assumed motives (app guidance)."
    },
    {
      id: "w22-13", tag: "Stopped lithium, tremor",
      "case": "A 52-year-old man with bipolar I disorder, stable for 3 years, stopped his lithium 2 months ago because a hand tremor and frequent urination embarrass him at work. He is not yet unwell, and he has no medical condition that a psychological factor is worsening. The visit focuses on his decision and the options.",
      parts: [
        { label: "Code", options: ["Z91.19", "Z91.199", "Z72.9", "F54"], answer: 1 }
      ],
      line: "**Z91.199** Nonadherence to medical treatment (APA coding update, September 2022; printed as Z91.19)",
      why: "Nonadherence to an important part of treatment, for a reason the manual lists (**discomfort from side effects**), severe enough to be the focus, and **not** psychological factors affecting other medical conditions (F54) (p. 835). The printed **Z91.19** was split by ICD-10-CM on October 1, 2022; the APA’s September 2022 update gives DSM-5-TR nonadherence **Z91.199** (APA coding update; labeled). ICD-10-CM also has Z91.190 (financial hardship) and Z91.198 (other reason), which the DSM does not list (ICD-10-CM note). Record bipolar I disorder as well."
    },
    {
      id: "w22-14", tag: "Names slip at 74",
      "case": "A 74-year-old retired engineer finds it takes longer to recall names and now writes appointments down so he does not miss them. He drives, runs his finances and enjoys complex hobbies. Repeat neuropsychological testing shows a modest drop from his own earlier scores, still within the expected range for his age and education. Mood is normal, and neurological examination and imaging show nothing of note.",
      parts: [
        { label: "Condition", options: ["Age-related cognitive decline", "Mild neurocognitive disorder due to possible Alzheimer’s disease", "Borderline intellectual functioning", "No diagnosis or condition"], answer: 0 },
        { label: "Code", options: ["R41.81", "R41.83", "G31.84", "Z03.89"], answer: 0 }
      ],
      line: "**R41.81** Age-related cognitive decline",
      why: "An **objectively identified** decline that comes with aging but stays **within normal limits for age**, with lapses for names and appointments as the manual’s examples (pp. 835–836). It is used only after a specific mental disorder and a neurological condition have been ruled out (p. 836). Mild NCD needs decline beyond the normal range (Chapter 17); R41.83 is borderline intellectual functioning; Z03.89 (Chapter 20) fits when the evaluation finds nothing at all to name."
    }
  ]);

  SP.add("ch22", "counting", [
    {
      id: "n22-01", tag: "Four reasons to code",
      "case": "A resident’s list of reasons for adding a code from this chapter to a record.",
      ask: "Mark the reasons the manual gives for coding a condition from this chapter. Are there 4?",
      items: [
        ["The problem is the reason for today’s visit", true, "Reason 1 (p. 821)."],
        ["It helps explain why a test, procedure or treatment is needed", true, "Reason 2 (p. 821)."],
        ["It plays a part in starting or worsening a mental disorder", true, "Reason 3 (p. 821)."],
        ["It is a problem to weigh in the overall management plan", true, "Reason 4 (p. 821)."],
        ["It appears in the DSM-5-TR Classification", false, "The Classification is the quick-reference list of codes (p. 821); being listed is not a reason to code."],
        ["It is present in the history, whether or not it matters to care", false, "Presence alone is not a reason; one of the four must apply (p. 821)."]
      ],
      need: 4,
      met: true,
      why: "Any **one** of the four reasons is enough: reason for the visit, explains a test or treatment, starts or worsens a disorder, or belongs in the management plan (p. 821). The conditions are **not mental disorders** (p. 821)."
    },
    {
      id: "n22-02", tag: "Malingering indicators",
      "case": "Findings recorded during a disability evaluation of a 44-year-old man after a minor workplace fall.",
      ask: "Mark the findings that are among the manual’s four indicators for strongly considering malingering. Are there 4?",
      items: [
        ["Referred by the lawyer handling his compensation claim", true, "Medicolegal context of the presentation (p. 835)."],
        ["Says he cannot lift his arm, but is seen carrying heavy bags in the parking lot", true, "Marked discrepancy between claimed disability and objective observation (p. 835)."],
        ["Misses the scheduled tests and does not take the prescribed treatment", true, "Lack of cooperation with evaluation and treatment (p. 835)."],
        ["Has antisocial personality disorder", true, "The fourth indicator (p. 835)."],
        ["Describes his symptoms dramatically and at great length", false, "Not on the list; a dramatic account proves nothing (app guidance)."],
        ["Has many hospital admissions with no clear cause and no gain from them", false, "Not on the list; feigning with no external incentive points toward factitious disorder (p. 835; Chapter 9)."],
        ["Is unemployed", false, "Not on the list."]
      ],
      need: 4,
      met: true,
      why: "The manual’s four: **medicolegal context**, **marked discrepancy** between claims and findings, **lack of cooperation**, and **antisocial personality disorder** (p. 835). **Any combination** should prompt strong consideration; they are not criteria and there is no threshold (p. 835)."
    },
    {
      id: "n22-03", tag: "Adult abuse categories",
      "case": "Headings from the abuse and neglect section, mixed with distractors.",
      ask: "Mark the categories the manual lists under adult maltreatment and neglect. Are there 5?",
      items: [
        ["Spouse or partner violence, physical", true, "p. 826."],
        ["Spouse or partner violence, sexual", true, "p. 826."],
        ["Spouse or partner neglect", true, "pp. 826–827."],
        ["Spouse or partner abuse, psychological", true, "p. 827."],
        ["Adult abuse by nonspouse or nonpartner", true, "pp. 827–828; physical, sexual and psychological abuse under one heading."],
        ["Child psychological abuse", false, "One of the **four** child categories: physical abuse, sexual abuse, neglect, psychological abuse (pp. 823–825)."],
        ["Adult neglect by nonspouse or nonpartner", false, "No such category; neglect appears only for children and dependent partners (pp. 824, 826–827)."],
        ["Adult financial abuse, suspected (T76.A)", false, "In ICD-10-CM but not in the DSM chapter (ICD-10-CM note)."]
      ],
      need: 5,
      met: true,
      why: "**Five** adult categories (four partner categories plus abuse by a nonspouse or nonpartner) against **four** child categories (pp. 823–828)."
    },
    {
      id: "n22-04", tag: "The 14 groups",
      "case": "Headings a student wrote from memory for the chapter’s numbered list.",
      ask: "Mark the headings that are among the chapter’s 14 numbered groups. Are there 7?",
      items: [
        ["Suicidal behavior and nonsuicidal self-injury", true, "Group 1 (p. 821)."],
        ["Housing problems", true, "Group 6 (p. 821)."],
        ["Problems related to interaction with the legal system", true, "Group 9 (p. 821)."],
        ["Problems related to access to medical and other health care", true, "Group 11 (p. 821)."],
        ["Circumstances of personal history", true, "Group 12 (p. 821)."],
        ["Other health service encounters for counseling and medical advice", true, "Group 13 (p. 822)."],
        ["Additional conditions or problems that may be a focus of clinical attention", true, "Group 14 (p. 822)."],
        ["Medication-induced movement disorders", false, "Chapter 21."],
        ["Conditions for further study", false, "Section III."],
        ["Problems related to the family environment", false, "A heading in the text (pp. 829–830), but not one of the numbered groups; the list puts separation or divorce under relational problems (p. 821)."]
      ],
      need: 7,
      met: true,
      why: "The list has **14** groups, from suicidal behavior and NSSI (1) and abuse and neglect (2) to additional conditions (14) (pp. 821–822)."
    },
    {
      id: "n22-05", tag: "Seventh characters",
      "case": "The T codes for suicidal behavior and for abuse and neglect.",
      ask: "Mark the final characters this chapter lists for these T codes. Are there 2?",
      items: [
        ["A, initial encounter: active treatment", true, "pp. 822–823."],
        ["D, subsequent encounter: routine care in recovery", true, "pp. 822–823."],
        ["S, sequela", false, "ICD-10-CM has it and Chapter 21 lists it for T43.205 and T50.905, but this chapter lists only A and D (pp. 822–823)."],
        ["X", false, "A placeholder in the 6th position (T74.12**X**A), not a choice of its own (ICD-10-CM convention)."],
        ["B", false, "Not used for these codes."]
      ],
      need: 2,
      met: true,
      why: "**Two**: A and D (pp. 822–823). The suicidal-behavior note prints “6th character,” but after the APA’s **September 2022 correction** the codes are T14.91XA/XD, so A or D is the 7th character there too (APA coding update; labeled)."
    },
    {
      id: "n22-06", tag: "Layers of an abuse code set",
      "case": "The code set for one child abuse or neglect category (pp. 823–825).",
      ask: "Mark the layers of coding the manual provides. Are there 3?",
      items: [
        ["The event, confirmed (T74) or suspected (T76)", true, "pp. 822–823."],
        ["The encounter, when it provides mental health services to the victim or perpetrator (Z69)", true, "p. 823."],
        ["The past history (Z62.81-)", true, "pp. 823–825."],
        ["A severity rating", false, "None is recorded; the 7th character marks the phase of care, not severity (pp. 822–823)."],
        ["A code showing the case was reported to authorities", false, "The chapter has none; reporting is a legal duty outside coding (app guidance)."],
        ["A code for the perpetrator’s mental disorder", false, "Any disorder is diagnosed in its own chapter; the Z69 perpetrator code records only the encounter (app guidance)."]
      ],
      need: 3,
      met: true,
      why: "**Three** layers: event, encounter and history (pp. 822–823). Partner categories use **Z91.41-** for history (pp. 826–827); the nonpartner adult category lists **no** history code (p. 828)."
    },
    {
      id: "n22-07", tag: "Inadequate housing",
      "case": "A home-visit report for a man with schizophrenia.",
      ask: "Mark the findings that match the manual’s examples of inadequate housing. Are there 6?",
      items: [
        ["No heating in cold weather, or no electricity", true, "p. 831."],
        ["Rats and cockroaches throughout the house", true, "Infestation (p. 831)."],
        ["Plumbing and toilet that do not work properly", true, "p. 831."],
        ["Nine people sharing two rooms", true, "Overcrowding (p. 831)."],
        ["Not enough space for everyone to sleep", true, "p. 831."],
        ["Constant loud noise from a workshop next door", true, "Excessive noise (p. 831)."],
        ["Living in a motel arranged by a charity", false, "Sheltered homelessness, Z59.01 (p. 831)."],
        ["Repeated quarrels with the landlord", false, "Z59.2 (p. 831)."]
      ],
      need: 6,
      met: true,
      why: "Six examples: heat or electricity, infestation, plumbing and toilets, overcrowding, sleeping space, noise (p. 831). Consider **cultural norms** first (p. 831). The code is **Z59.10** since October 1, 2023 (APA coding update, September 2023; printed Z59.1)."
    },
    {
      id: "n22-08", tag: "Social environment",
      "case": "Codes a resident filed under “social environment.”",
      ask: "Mark the codes that belong to problems related to the social environment. Are there 5?",
      items: [
        ["Z60.2 Problem related to living alone", true, "p. 832."],
        ["Z60.3 Acculturation difficulty", true, "p. 832."],
        ["Z60.4 Social exclusion or rejection", true, "p. 832."],
        ["Z60.5 Target of (perceived) adverse discrimination or persecution", true, "p. 832."],
        ["Z60.9 Other problem related to social environment", true, "p. 832."],
        ["Z60.0 Phase of life problem", false, "A Z60 code, but listed with the additional conditions (p. 834)."],
        ["Z65.8 Religious or spiritual problem", false, "Additional conditions (p. 834)."],
        ["Z64.4 Discord with social service provider", false, "Other psychosocial circumstances (p. 833)."]
      ],
      need: 5,
      met: true,
      why: "**Five**: Z60.2, Z60.3, Z60.4, Z60.5, Z60.9 (p. 832). Z60.0 shares the prefix but sits elsewhere (p. 834)."
    },
    {
      id: "n22-09", tag: "Legal system",
      "case": "Codes for a 35-year-old man recently out of prison and on probation.",
      ask: "Mark the codes in the legal-system group. Are there 4?",
      items: [
        ["Z65.0 Conviction in criminal proceedings without imprisonment", true, "p. 833."],
        ["Z65.1 Imprisonment or other incarceration", true, "p. 833."],
        ["Z65.2 Problems related to release from prison", true, "p. 833."],
        ["Z65.3 Problems related to other legal circumstances", true, "Civil litigation, custody or support proceedings (p. 833)."],
        ["Z64.4 Discord with social service provider, including probation officer", false, "Other psychosocial circumstances, even though it names the probation officer (p. 833)."],
        ["Z65.4 Victim of crime", false, "Other psychosocial circumstances (p. 833)."],
        ["Z65.5 Exposure to disaster, war, or other hostilities", false, "Other psychosocial circumstances (p. 833)."],
        ["Z71.9 Other counseling or consultation", false, "Counseling group (pp. 833–834)."]
      ],
      need: 4,
      met: true,
      why: "**Four** legal codes, Z65.0–Z65.3 (pp. 832–833). The counseling group also has four: Z31.5 genetic, Z70.9 sex, Z71.3 dietary, Z71.9 other (pp. 833–834)."
    },
    {
      id: "n22-10", tag: "Family environment",
      "case": "Codes proposed for a family seen in a child clinic.",
      ask: "Mark the codes listed under problems related to the family environment. Are there 4?",
      items: [
        ["Z62.29 Upbringing away from parents", true, "p. 829."],
        ["Z62.898 Child affected by parental relationship distress", true, "p. 830."],
        ["Z63.5 Disruption of family by separation or divorce", true, "p. 830."],
        ["Z63.8 High expressed emotion level within family", true, "p. 830."],
        ["Z63.0 Relationship distress with spouse or intimate partner", false, "Relational problems (p. 829)."],
        ["Z62.891 Sibling relational problem", false, "Relational problems (p. 829)."],
        ["Z59.3 Problem related to living in a residential institution", false, "Housing; Z62.29 explicitly excludes it (pp. 829, 831)."],
        ["Z63.4 Uncomplicated bereavement", false, "Additional conditions (p. 834)."]
      ],
      need: 4,
      met: true,
      why: "**Four**: Z62.29, Z62.898, Z63.5, Z63.8 (pp. 829–830). Z62.898 is also printed for other caregiver–child relational problem (p. 829)."
    }
  ]);
})();
