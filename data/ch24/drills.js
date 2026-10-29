/* Chapter 24 practice drills.
   dxline:   write what goes in the chart. None of the ten cultural concepts of distress is a diagnosis; they are
             illustrations (p. 873). The model answer is the Section II disorder that is met, an "other specified"
             category, a Chapter 22 code, or no diagnosis, followed by a formulation line that names the cultural concept
             and its type (p. 873). Codes come from the app's Section II and Chapter 22 chapters; F43.89 is the code in
             use since October 2022 for other specified trauma- and stressor-related disorder (DSM-5-TR prints F43.8).
             Which category fits each case is app guidance built on the chapter's "Related conditions" lists.
   counting: decide which findings count toward one rule or list from the chapter, then whether the threshold is reached.
   Self-harm content is brief and clinical. CFI questions are described, never quoted. Ids are stable keys for progress. */
(function () {
  SP.add("ch24", "dxline", [
    {
      id: "w24-01", tag: "Khyâl attacks, recorded",
      "case": "A 46-year-old Cambodian woman who resettled abroad after years in a refugee camp is seen at a community clinic during an overseas elective. For 4 months she has had sudden spells of pounding heart, dizziness, breathlessness, cold hands and feet, ringing in the ears and a sore neck. Some come on when she stands up quickly; others wake her at night with no trigger at all. She explains that wind is surging upward with her blood and could block her breathing or burst into her head and make her faint and die. Since the spells began she worries daily about the next one and no longer rides the bus alone. Thyroid tests, ECG and blood count are normal; she takes no stimulants.",
      parts: [
        { label: "Record as", options: ["Illness anxiety disorder", "Panic disorder", "Khyâl cap, as the diagnosis", "Other specified anxiety disorder"], answer: 1 },
        { label: "Code", options: ["F41.1", "F41.8", "F41.0", "No code: cultural concept of distress"], answer: 2 }
      ],
      line: "**F41.0** Panic disorder; formulation: attacks experienced as **khyâl cap** (a cultural syndrome; wind rising with the blood), with the catastrophic cognitions addressed in treatment",
      why: "Recurrent attacks, some **unexpected** (the night spells), and more than a month of worry and avoidance satisfy the Section II disorder (app's Ch 5). Khyâl attacks usually **meet panic attack criteria**, and the feared effects of the rising wind are **culturally specific catastrophic cognitions** that can drive the escalation (pp. 872, 875–876). The concept goes in the formulation, not the diagnosis line (p. 873). Standing up is one of the triggers the chapter lists (p. 876)."
    },
    {
      id: "w24-02", tag: "Ataque with brief dissociation",
      "case": "A 34-year-old Puerto Rican woman married to a Filipino seafarer is brought to a Bataan emergency room after a phone call telling her that her brother was killed in a road crash. Her husband says she screamed, wept, shook, struck at the wall and then sat staring, later unable to recall the half hour that followed. She says heat rose from her chest into her head and she felt she was not in control. Over the next three days she has two shorter episodes of feeling detached and unreal when relatives call. Between episodes she is grieving but oriented. There is no seizure history, no substance use, no recurrent unexpected panic, and the episodes stop within the week.",
      parts: [
        { label: "Record as", options: ["Ataque de nervios, as the diagnosis", "Panic disorder", "Other specified dissociative disorder (acute dissociative reactions to stressful events)", "Dissociative identity disorder"], answer: 2 },
        { label: "Code", options: ["F41.0", "F43.10", "No code: cultural concept of distress", "F44.89"], answer: 3 }
      ],
      line: "**F44.89** Other specified dissociative disorder (acute dissociative reactions to stressful events); formulation: episodes understood by the patient and family as **ataque de nervios** (a cultural syndrome), triggered by news of a relative’s death",
      why: "Ataque has **no one-to-one relationship** with any disorder, but other specified dissociative disorder is on its related list, and amnesia and derealization are prominent in some ataques (p. 874). The trigger is the **family-related stressor** the chapter describes (p. 874). The episodes are brief and stress-bound, which fits the Section II example of an acute dissociative reaction (app's Ch 8); panic disorder needs recurrent unexpected attacks with a month of worry (app guidance)."
    },
    {
      id: "w24-03", tag: "Ataque at a wake",
      "case": "At her father’s wake, a 52-year-old Dominican woman visiting relatives in Manila collapses to her knees, cries out and shakes for several minutes, then is comforted by her sisters. Her Filipino in-laws, alarmed, bring her to the clinic the next morning. She is sad but calm, sleeping and eating, says this is how grief comes out in her family, and has had no other episodes, no dissociation, and no thoughts of self-harm. Her functioning is intact and she is planning the burial.",
      parts: [
        { label: "Record as", options: ["Panic disorder", "Other specified dissociative disorder", "Functional neurological symptom disorder", "No diagnosis or condition"], answer: 3 },
        { label: "Code", options: ["F41.0", "Z03.89", "F44.89", "No code: cultural concept of distress"], answer: 1 }
      ],
      line: "**Z03.89** No diagnosis or condition; formulation: a single **normative ataque de nervios** (a cultural syndrome used here as an expression of acute grief) at a funeral, without clinical sequelae",
      why: "Some ataques are **normative expressions of acute distress**, the funeral being the chapter’s own example, with no clinical consequences (p. 874). Cultural concepts **span the severity range**, including pictures that meet no criteria (p. 872). Record what was evaluated and found; a grief-related Chapter 22 entry is an alternative if the loss itself is the focus (app guidance)."
    },
    {
      id: "w24-04", tag: "Dhat, persistent and consuming",
      "case": "A 23-year-old Indian deck cadet on a cargo vessel is seen at a port clinic in Mariveles. For about 9 months he has been convinced that a whitish discharge he notices when passing urine is semen leaking away, and that this is draining his strength. He reports fatigue, weakness and backache, checks his urine several times a day, has seen four doctors, and spends hours reading about it; his officer says his work has slipped. Urinalysis, urine culture and STI testing are normal. His mood is anxious, not depressed, he has no erectile complaint, and reassurance helps for only a day.",
      parts: [
        { label: "Record as", options: ["Dhat syndrome, as the diagnosis", "Delusional disorder, somatic type", "Somatic symptom disorder", "Erectile disorder"], answer: 2 },
        { label: "Code", options: ["F22", "F41.1", "No code: cultural concept of distress", "F45.1"], answer: 3 }
      ],
      line: "**F45.1** Somatic symptom disorder; formulation: symptoms attributed to semen loss (**dhat**, a cultural explanation rather than a discrete syndrome)",
      why: "Despite its name, dhat is **a cultural explanation**, not a discrete syndrome; its cardinal feature is anxiety and distress about loss of dhat with **no identifiable physiological dysfunction** (p. 874). Somatic symptom disorder is on its related list (p. 875). Here the symptoms are distressing, persist well over 6 months, and bring excessive time, checking and anxiety, which meets the Section II disorder (app's Ch 9). Ideas about harm from semen loss are widespread in the general population, so the belief alone is not a delusion (p. 875)."
    },
    {
      id: "w24-05", tag: "Withdrawn son, secondary type",
      "case": "A Japanese-Filipino couple in Pampanga bring their 21-year-old son. For 10 months he has left his room only at night, stopped college, and talks to people only through online games. When pressed, he says he cannot face classmates or neighbors because they will see how awkward he is and laugh at him; he had similar dread of reciting and eating in front of others since high school. He has no psychotic symptoms, normal social reciprocity as a child, and no depressive episode. He is increasingly unhappy about the isolation.",
      parts: [
        { label: "Record as", options: ["Hikikomori, as the diagnosis", "Social anxiety disorder", "Schizoid personality disorder", "Internet gaming disorder"], answer: 1 },
        { label: "Code", options: ["F40.10", "F41.1", "F42.8", "No code: cultural concept of distress"], answer: 0 }
      ],
      line: "**F40.10** Social anxiety disorder; formulation: withdrawal of the **hikikomori** type (a cultural syndrome), **secondary** to the anxiety disorder",
      why: "Withdrawal arising within an established disorder is called **secondary** hikikomori (p. 875). His fear of scrutiny and humiliation, years in duration, drives the avoidance, which meets the Section II disorder (app's Ch 5). The picture also fits the typical description: a young man in his room at the parents’ home, heavy online contact, no interest in school, **ego-syntonic at first and distressing later** (p. 875). Internet gaming disorder is only a proposed Section III condition (app's Ch 25)."
    },
    {
      id: "w24-06", tag: "Thinking too much",
      "case": "A 38-year-old Zimbabwean nurse working in a Manila hospital comes to the staff clinic. For about 8 months she has been “thinking too much” about her unemployed husband, school fees for her children back home and her own health. She worries most of the day about many things, cannot stop, and has muscle tension, restlessness, poor sleep, irritability and tiredness. She says the thinking is what makes her heart ache. She has had no panic attacks, no trauma exposure, and her mood is not persistently low. She uses no substances and her thyroid is normal.",
      parts: [
        { label: "Record as", options: ["Kufungisisa, as the diagnosis", "Posttraumatic stress disorder", "Persistent depressive disorder", "Generalized anxiety disorder"], answer: 3 },
        { label: "Code", options: ["F43.10", "F41.1", "F41.0", "No code: cultural concept of distress"], answer: 1 }
      ],
      line: "**F41.1** Generalized anxiety disorder; formulation: distress named as **kufungisisa** (“thinking too much”; here both an **idiom** of social difficulty and a **cultural explanation** for her somatic pain)",
      why: "Among the Shona, kufungisisa works as **both an idiom of distress and a cultural explanation**: as an explanation it is held to cause anxiety, depression and somatic problems, and as an idiom it signals interpersonal and money troubles (p. 876). GAD is on its related list (p. 876). Six months of hard-to-control worry with fatigue, restlessness, tension, irritability and poor sleep meet the Section II disorder (app's Ch 5)."
    },
    {
      id: "w24-07", tag: "Sent sickness, not a delusion",
      "case": "During an overseas rotation, a resident sees a 41-year-old Haitian man who was promoted to supervisor 3 months ago. For 5 weeks he has had low mood most days, lost interest in church and family, slept poorly, lost weight, felt worthless and struggled to concentrate; he denies thoughts of self-harm. He is sure a jealous co-worker paid someone to send the illness to him. His wife and pastor share this view, they have sought prayer, and he accepts that medicine may help too. He has no hallucinations, no other unusual beliefs, and no earlier episodes.",
      parts: [
        { label: "Record as", options: ["Delusional disorder, persecutory type", "Maladi dyab, as the diagnosis", "Major depressive disorder, single episode, moderate", "Schizophrenia"], answer: 2 },
        { label: "Code", options: ["F22", "F33.1", "No code: cultural concept of distress", "F32.1"], answer: 3 }
      ],
      line: "**F32.1** Major depressive disorder, single episode, moderate; formulation: illness attributed to **maladi dyab** (“sent sickness”, a cultural explanation) following his promotion",
      why: "Maladi dyab is a **cultural explanation** that can be attached to many disorders; visible success such as a new job is the classic provocation (pp. 876–877). The chapter warns that the supernatural explanation can lead to **misdiagnosis of delusional disorder, persecutory type, or schizophrenia** (p. 877). A belief shared by his family and pastor is culturally accepted, not a fixed false belief (app's Ch 2). Six depressive symptoms (low mood, loss of interest, insomnia, weight loss, worthlessness, poor concentration) for over 2 weeks meet the episode (app's Ch 4; severity here is app judgment)."
    },
    {
      id: "w24-08", tag: "Susto after a crash",
      "case": "A 29-year-old Mexican woman working in Subic survived a jeepney crash 3 months ago in which another passenger died. Her mother, on a video call, says she has susto: the fright knocked her soul out. Since the crash she has had intrusive memories, nightmares, a racing heart at the sound of brakes, refusal to ride any public vehicle, feeling cut off from friends, irritability and jumpiness. Her work and sleep have suffered. She drinks no alcohol and has no head injury.",
      parts: [
        { label: "Record as", options: ["Susto, as the diagnosis", "Posttraumatic stress disorder", "Major depressive disorder", "Somatic symptom disorder"], answer: 1 },
        { label: "Code", options: ["F43.89", "F45.1", "F43.10", "No code: cultural concept of distress"], answer: 2 }
      ],
      line: "**F43.10** Posttraumatic stress disorder; formulation: her family frames the illness as **susto** (a cultural explanation; the post-trauma type)",
      why: "Susto is a **cultural explanation** in which a fright makes the soul leave the body (p. 879). Of its three syndromic types, the one where **a traumatic event shapes the symptoms** points to PTSD; the interpersonal type points to MDD, and the recurrent somatic type to somatic symptom disorder (p. 879). Her intrusion, avoidance, mood and arousal symptoms for more than a month meet the Section II disorder (app's Ch 7)."
    },
    {
      id: "w24-09", tag: "Fear of offending by smell",
      "case": "A 26-year-old Japanese call-center agent in Taguig is referred by her team lead. For 2 years she has been preoccupied with the idea that she gives off a bad body odor that offends coworkers, though no one has noticed any smell. She showers four times a day, sniffs her clothes, changes shirts at lunch, keeps her distance, and asks her sister for reassurance; she says the idea may be exaggerated but she cannot shake it. She has no concern about her appearance, no other fixed beliefs, and no psychotic symptoms.",
      parts: [
        { label: "Record as", options: ["Taijin kyofusho, as the diagnosis", "Social anxiety disorder", "Delusional disorder, somatic type", "Other specified obsessive-compulsive and related disorder (olfactory reference syndrome)"], answer: 3 },
        { label: "Code", options: ["F42.8", "F40.10", "F22", "No code: cultural concept of distress"], answer: 0 }
      ],
      line: "**F42.8** Other specified obsessive-compulsive and related disorder (olfactory reference syndrome); formulation: the **jiko-shu-kyofu** (body odor) variant of offensive-type **taijin kyofusho** (a cultural syndrome)",
      why: "Taijin kyofusho is **broader than social anxiety disorder** and takes in pictures with features of BDD, olfactory reference syndrome and delusional disorder (p. 879). Olfactory reference syndrome is an **other specified OCRD** and is linked specifically to the **body-odor variant** (p. 879). Her insight is fair and she has repetitive checking and washing, so delusional disorder, which the chapter reserves for concerns of delusional quality that resist reassurance, does not fit (p. 879)."
    },
    {
      id: "w24-10", tag: "Nerves after migration",
      "case": "A 44-year-old Puerto Rican woman moved to Olongapo 6 months ago when her Filipino husband retired home. She says she has nervios: headaches at the back of her neck, some trouble sleeping, nervousness and easy tears when she cannot follow conversations in Tagalog or find the foods and church she knows. She is still running the household, enjoys her grandchildren and is taking language lessons. Her symptoms do not reach the threshold for an anxiety, depressive or adjustment disorder after a full evaluation; she asks for help settling in.",
      parts: [
        { label: "Record as", options: ["Acculturation difficulty", "Nervios, as the diagnosis", "Generalized anxiety disorder", "Somatic symptom disorder"], answer: 0 },
        { label: "Code", options: ["Z65.8", "F41.1", "Z60.3", "No code: cultural concept of distress"], answer: 2 }
      ],
      line: "**Z60.3** Acculturation difficulty; formulation: distress expressed as **nervios** (a cultural **idiom of distress** and causal explanation) during adjustment to a new country",
      why: "Nervios is an idiom and causal explanation for a **general vulnerability** to hard circumstances, and it **spans the severity range from no disorder** upward (p. 877). When no disorder is met, the person may still need care, and the chapter points to **acculturation problems** among the Chapter 22 conditions (p. 873). Whether her distress warrants an adjustment disorder instead is a clinical judgment; here the evaluation found it subthreshold (app guidance)."
    }
  ]);

  SP.add("ch24", "counting", [
    {
      id: "n24-01", tag: "When the CFI helps most",
      "case": "A resident sees a 30-year-old Haitian man brought by his brother. Notes from the first visit:",
      ask: "Mark the notes that match one of the seven situations in which the chapter says the CFI is especially helpful. Are at least three present?",
      items: [
        ["The resident is unsure whether his description of a spirit sitting on his chest fits sleep paralysis, panic or a psychotic symptom", true, "Uncertain **fit between culturally distinctive symptoms and the criteria** (p. 863)."],
        ["The family has already taken him to a houngan and expects a quick herbal cure", true, "Divergent **expectations of care** shaped by another healing system (p. 863)."],
        ["He is 30 years old", false, "Age is demographic background gathered before the CFI, not one of the seven situations (p. 863)."],
        ["He says people like him are never treated fairly in hospitals and doubts the staff", true, "Possible **mistrust of mainstream services** after collective histories of oppression (p. 863)."],
        ["He has missed two of three follow-up visits", true, "**Limited engagement and adherence** (p. 863)."],
        ["He speaks fluent English", false, "Language is a demographic domain; fluency alone is not one of the seven situations (p. 863)."]
      ],
      need: 3,
      met: true,
      why: "Four of the seven are present. The full list: difficult assessment from cultural, religious or socioeconomic differences; uncertain fit of distinctive symptoms; trouble judging **severity or impairment**; divergent views from other healing systems; disagreement on the course of care; mistrust after collective trauma and oppression; limited engagement and adherence (p. 863). The CFI can still be used with anyone, in any setting (p. 863)."
    },
    {
      id: "n24-02", tag: "Outline categories covered",
      "case": "A resident’s cultural formulation for an OFW returning from the Gulf contains these sections:",
      ask: "Mark the sections that correspond to one of the five categories of the Outline for Cultural Formulation. Are all five covered?",
      items: [
        ["Identity: Ilocano, Catholic, 15 years abroad, speaks Arabic and English, needs no interpreter", true, "**Cultural identity of the individual**, including migration and language (p. 861)."],
        ["How he names the problem, what he thinks caused it, and what help he expects", true, "**Cultural concepts of distress**, with help seeking (p. 861)."],
        ["Debt, loss of employment, discrimination he faced abroad, and support from his parish group", true, "**Psychosocial stressors and cultural features of vulnerability and resilience** (p. 861)."],
        ["His wariness of the government hospital and the difference in social status between him and the team", true, "**Relationship between the individual and the clinician, team and institution** (pp. 861–862)."],
        ["Laboratory results and medication list", false, "Clinical data, not an Outline category."]
      ],
      need: 5,
      met: false,
      why: "Four categories are present; the **overall cultural assessment**, which summarizes what the other four mean for differential diagnosis and management, is missing (p. 862). The Outline began in **DSM-IV** and was expanded in DSM-5-TR (pp. 860–861)."
    },
    {
      id: "n24-03", tag: "Explanations among the usages",
      "case": "Statements heard in one week at a clinic:",
      ask: "Mark the statements in which the cultural term is being used as a cultural explanation (a perceived cause). Are at least two?",
      items: [
        ["“My sister’s illness was sent by a neighbor who envied her new house” (maladi dyab)", true, "Attributes the illness to a cause: a **cultural explanation** (pp. 876–877)."],
        ["“I’ve been so stressed, I’m burned out” (a U.S. idiom)", false, "An **idiom of distress**; it conveys suffering and may not indicate a disorder (p. 859)."],
        ["“The baby was born with problems because his mother had depression while pregnant”", true, "“Depression” here names a **cause**: the chapter’s own example of an explanation (p. 872)."],
        ["A clinician describing a patient who meets criteria for a depressive episode as having depression", false, "“Depression” used for a **syndrome** (p. 872)."],
        ["“My heart is painful because I think too much” (kufungisisa)", true, "Thinking too much is held to cause the pain: an **explanation** (p. 876)."]
      ],
      need: 2,
      met: true,
      why: "Three of the five use the term as a perceived cause. The same word can be an **idiom, an explanation or a syndrome** depending on how it is used (p. 872); typing each usage is what helps clinicians and researchers (pp. 872–873)."
    },
    {
      id: "n24-04", tag: "Hikikomori: the 6-month guideline",
      "case": "Young people whose parents describe them as having shut themselves away:",
      ask: "Mark those who have reached the 6 months of social withdrawal required by the 2010 Japanese ministry guideline the chapter cites. Are at least three?",
      items: [
        ["Has not left his room or seen anyone in person for 8 months; games online all night", true, "More than **6 months** of withdrawal (p. 875)."],
        ["Withdrew 4 months ago after failing an entrance exam", false, "Short of the **6-month** guideline (p. 875)."],
        ["Stays home but goes out with two friends every weekend", false, "Keeps in-person contact; not the protracted, severe withdrawal described (p. 875)."],
        ["Has stayed in her room for a year, speaking only with her mother through the door", true, "Well beyond 6 months; the typical picture is male, but the definition is about the withdrawal (p. 875)."],
        ["Withdrew 7 weeks ago when his grandmother died", false, "Far short of 6 months, and grief is the first thing to assess (app guidance)."]
      ],
      need: 3,
      met: false,
      why: "Two of the five meet the guideline. The 6 months come from the **Japan Ministry of Health, Labor, and Welfare’s 2010 guideline**, not from a DSM criteria set; DSM-5-TR gives no criteria for hikikomori (p. 875). Whatever the duration, look for an established disorder (secondary type) such as social anxiety disorder, MDD or autism spectrum disorder (p. 875)."
    },
    {
      id: "n24-05", tag: "The four key features",
      "case": "Statements a resident wrote in a study note about cultural concepts of distress compared with the DSM nosology:",
      ask: "Mark the statements that are among the chapter’s four key features. Are all four present?",
      items: [
        ["Correspondence with a DSM diagnosis is seldom one-to-one; one concept can relate to several disorders and one disorder to several concepts", true, "Feature 1 (p. 872)."],
        ["They apply across the full range of severity, including presentations that meet no DSM criteria", true, "Feature 2 (p. 872)."],
        ["The same term often denotes more than one type of concept", true, "Feature 3: the “depression” example (p. 872)."],
        ["Concepts change over time with local and global influences", true, "Feature 4 (p. 872)."],
        ["Each concept is restricted to one geographic region", false, "This is the overstatement that led the chapter to **retire “culture-bound syndrome”** (pp. 871–872)."],
        ["Concepts arise only in people who meet criteria for a mental disorder", false, "Contradicts feature 2 (p. 872)."]
      ],
      need: 4,
      met: true,
      why: "The four: **seldom one-to-one**, **across the severity range**, **one term, several types**, and **change over time** (p. 872). The list of reasons the concepts matter is a separate list, with **seven** headed items (pp. 872–873)."
    },
    {
      id: "n24-06", tag: "Answers in the cause–context domain",
      "case": "Answers a patient gave during a core CFI (described, not quoted):",
      ask: "Mark the answers that fall in the domain Cultural Perceptions of Cause, Context, and Support (questions 4–10). Are at least three?",
      items: [
        ["She thinks the problem began because of a curse after a land dispute", true, "Perceived cause (questions 4–5; p. 864)."],
        ["Her prayer group helps her feel better", true, "Supports (question 6; p. 865)."],
        ["Being the only daughter in a family of migrants matters to how she sees the problem", true, "Role of cultural identity (questions 8–10; p. 865)."],
        ["She has tried herbal baths on her own", false, "Self-coping: question 11, in the **Self-Coping and Past Help Seeking** domain (questions 11–13; p. 865)."],
        ["She would like a female doctor who speaks Ilocano", false, "Preferences: **Current Help Seeking** domain (questions 14–16; pp. 866–867)."],
        ["She calls the problem being “weak in the head”", false, "Her own description of the problem: **Cultural Definition of the Problem** (questions 1–3; p. 864)."]
      ],
      need: 3,
      met: true,
      why: "Three answers fall in questions 4–10, which cover causes, stressors and supports, and cultural identity (pp. 863–865). The four domains: **1–3** definition, **4–10** cause, context and support, **11–13** self-coping and past help seeking, **14–16** current help seeking (p. 863)."
    },
    {
      id: "n24-07", tag: "CCMD-2-R clusters",
      "case": "A 48-year-old Chinese trader seen in Binondo reports these features since his business partner publicly blamed him for a failed deal:",
      ask: "Mark the features that belong to one of the five symptom clusters CCMD-2-R used to define shenjing shuairuo (each cluster once). Are three clusters present?",
      items: [
        ["Mental fatigue that makes reading the ledgers hard", true, "**Weakness** cluster (p. 877)."],
        ["Headaches by afternoon", true, "**Nervous pain** cluster (p. 877)."],
        ["Losing face in front of other traders", false, "A precipitant (loss of face), not a symptom cluster (p. 878)."],
        ["Poor appetite and weight loss", false, "Not one of the five clusters (p. 877)."],
        ["Palpitations when the phone rings", false, "Not one of the five clusters (p. 877)."]
      ],
      need: 3,
      met: false,
      why: "Only two clusters are present. CCMD-2-R required **three of five**: weakness (mental fatigue), emotions (feeling vexed, fan nao), excitement (increased recollections), nervous pain (headache) and sleep (insomnia) (pp. 877–878). Whatever the count, the chart takes a Section II disorder if one is met; many such patients meet none (p. 878)."
    },
    {
      id: "n24-08", tag: "Which susto type",
      "case": "A Central American woman says she has had susto since her partner left her a year ago. Features noted:",
      ask: "Mark the features that point to the interpersonal type of susto, the one the chapter links with major depressive disorder. Are at least three present?",
      items: [
        ["Feels abandoned and unloved by her family", true, "Loss, abandonment, not being loved: **interpersonal susto** (p. 879)."],
        ["Persistent sadness", true, "Part of the interpersonal picture (p. 879)."],
        ["Sees herself as worthless", true, "Poor self-image (p. 879)."],
        ["Has had passing thoughts of not wanting to live", true, "Suicidal thoughts belong to the interpersonal type; assess risk directly (p. 879; app guidance)."],
        ["Intrusive memories of a frightening event", false, "Points to the **post-trauma type** and PTSD (p. 879)."],
        ["Has consulted six practitioners for shifting body pains", false, "Points to the **recurrent somatic type** and somatic symptom disorder (p. 879)."]
      ],
      need: 3,
      met: true,
      why: "Four features match the **interpersonal** type (≈ MDD). The other two types: susto after trauma (≈ PTSD) and recurrent somatic susto with many practitioners (≈ somatic symptom disorder) (p. 879). Susto itself is a **cultural explanation** with no defining symptoms, and it is not recognized among **Caribbean** Latinx (p. 879)."
    }
  ]);
})();
