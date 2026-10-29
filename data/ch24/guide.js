/* Chapter 24 study guide. Source: DSM-5-TR Section III, Culture and Psychiatric Diagnosis (pp. 859–879; p. 880 is blank).
   Written in the app’s own words from the manual, with page references. Nothing in this chapter is a diagnosis: the
   Outline for Cultural Formulation and the Cultural Formulation Interview (CFI) are assessment tools, and the ten
   cultural concepts of distress are illustrations (p. 873). The CFI is an APA instrument: the guide describes what each
   question asks and never reprints it. The chart records the DSM-5-TR disorder that is met (or an other specified
   category, or a Chapter 22 code), with the cultural term in the formulation (p. 873). Philippine material, ICD-11,
   evidence beyond the text, treatment and exam strategy are outside the DSM and labeled. */
SP.add("ch24", "guide", {
  intro: "This Section III chapter is the manual’s own answer to a question every resident meets in the first week: **how does a person’s culture change what you see, what they tell you, and what you should write down?** It has three parts (p. 859). **Key terms** defines **culture**, **race** and **ethnicity** (p. 860). **Cultural Formulation** gives the **Outline for Cultural Formulation** (five categories, pp. 860–862) and the **Cultural Formulation Interview (CFI)**: a **16-question core interview**, an **Informant version** and online **Supplementary modules** (pp. 862–871). **Cultural Concepts of Distress** replaces the old idea of a “culture-bound syndrome” with three kinds of concept (**idioms**, **explanations**, **syndromes**), explains how they relate to DSM diagnoses, and walks through **ten well-studied examples** from ataque de nervios to taijin kyofusho (pp. 871–879). Nothing here is a diagnosis: the chart records the DSM-5-TR disorder that is actually met, or an other specified category, or a Chapter 22 code, and names the cultural concept in the formulation (p. 873). The [[helper:cultural|cultural helper]] takes a presentation with a cultural concept to the Section II conditions worth considering and to the right recording route.",
  objectives: [
    "Define **culture**, **race** and **ethnicity** the way the manual does, and say why race is a **social construct** that still matters for psychiatry (p. 860).",
    "List the **five categories** of the Outline for Cultural Formulation and what each one asks you to describe (pp. 860–862).",
    "Describe the CFI’s **three components**, its **four-part definition of culture**, its **two-column format**, the **demographic information** it is paired with, and the **seven situations** in which it is especially helpful (pp. 862–863).",
    "Map the core CFI’s **16 questions** onto its **four domains** (questions 1–3, 4–10, 11–13 and 14–16) and know what the **Informant version** is for and when it replaces the core interview (pp. 863–871).",
    "Distinguish **cultural idioms of distress**, **cultural explanations** and **cultural syndromes**, explain why “culture-bound syndrome” was retired, and state the **four key features** and **seven reasons** cultural concepts matter for diagnosis (pp. 871–873).",
    "Apply the recording rule: decide whether a presentation meets criteria for a **specified disorder** or is best classified as **other specified**, include the cultural term in the **case formulation**, and remember that someone who meets no criteria may still need treatment (p. 873).",
    "For each of the **ten examples**, give the cultural context, the **type** of concept, the core picture, the related concepts elsewhere, and the manual’s list of **related DSM-5-TR conditions**, including the named **misdiagnosis traps** (pp. 873–879)."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s24-map",
          title: "What the chapter is for",
          pages: "859",
          blocks: [
            { type: "p", text: "The chapter gives basic guidance on bringing **culture and social context** into diagnosis, in three sections: **key terms**, **cultural formulation** and **cultural concepts of distress** (p. 859). Its central claim is that **symptom presentation, the way a person interprets the illness or predicament that brought them in, and what they expect from help are always shaped by cultural background and social context** (p. 859). A person-centered cultural assessment therefore improves the care of **every** individual, not only those whose background is unfamiliar to the clinician, and it may be **especially helpful** for people affected by **healthcare disparities driven by systemic disadvantage and discrimination** (p. 859)." },
            { type: "defs", title: "The three sections and what each one holds (p. 859)", items: [
              ["Key terms", "Culture, race and ethnicity: the words the rest of the chapter depends on (p. 860)."],
              ["Cultural formulation", "The **Outline for Cultural Formulation**, a systematic person-centered assessment meant for **any clinician, any individual, any setting**, plus the **CFI**, the interview protocol that puts the outline into practice (pp. 860–871)."],
              ["Cultural concepts of distress", "How people **express, report and interpret** illness and distress: **idioms**, **explanations or perceived causes**, and **syndromes**, with ten examples chosen because they are **well studied** and because their unfamiliarity to many U.S. clinicians makes their expressions and communicative functions stand out (pp. 859, 871–879)."]
            ] },
            { type: "callout", kind: "key", title: "Idioms are everywhere, including at home", text: "The chapter’s first example of an idiom of distress is not exotic at all: in the United States, **“burnout,” “feeling stressed,” “nervous breakdown”** and **“feeling depressed”** are everyday ways of talking about dissatisfaction or discouragement that often **do not meet criteria for any disorder** (p. 859). An idiom can carry a wide range of concerns and **may not indicate a psychiatric disorder** (p. 859). Keep this in mind before any of the ten examples: the same is true of *nerbyos* or *stress* in a Philippine waiting room (app note)." },
            { type: "callout", kind: "exam", title: "How this chapter is examined (app guidance)", text: "Questions tend to be of four kinds: **definitions** (the three key terms; the three types of cultural concept), **structure** (five Outline categories; three CFI components; four domains and their question numbers; seven situations where the CFI helps), **matching** (which DSM-5-TR conditions the manual lists for each example; which examples are idioms versus explanations versus syndromes), and **recording** (the disorder that is met, or other specified, with the concept named in the formulation; p. 873). Nothing in the chapter is a codable diagnosis, so any option that “diagnoses susto” is wrong (app guidance)." }
          ]
        },
        {
          id: "s24-key-terms",
          title: "Key terms: culture, race, ethnicity",
          pages: "860",
          blocks: [
            { type: "p", text: "Understanding the cultural context of illness is described as **essential** for diagnostic assessment and clinical management (p. 859). The manual then defines three words that are often used loosely and should not be (p. 860)." },
            { type: "defs", title: "The three definitions (p. 860)", items: [
              ["Culture", "The **knowledge, concepts, values, norms and practices** a group **learns and hands down** across generations. It includes language, religion and spirituality, family structure, life-cycle stages, rituals and customs, ways of understanding health and illness, and moral, political, economic and legal systems. Cultures are **open and dynamic**: they keep changing, and most people today draw on **several cultural contexts** to build an identity and make sense of experience. Much of culture is **implicit**, so people may find it hard to describe their own."],
              ["Race", "A **social, not biological, construct** that sorts humanity by superficial physical traits such as skin color, which were **falsely** taken to signal inherent attributes and capacities. Racial categories have varied across history and societies and have been used to justify **oppression, slavery and genocide**. Race matters to psychiatry because it gives rise to **racial ideologies, racism, discrimination and exclusion**, which harm mental health; there is evidence that **racism can worsen many disorders** and lead to poor outcomes, and that **racial bias can distort diagnostic assessment**."],
              ["Ethnicity", "A **culturally constructed group identity** used to define peoples and communities, rooted in shared history, ancestry, geography, language, religion or other characteristics. It can be **self-assigned or attributed by outsiders**. Mobility and intermarriage create **mixed, multiple or hybrid** ethnic identities and can also **dilute** ethnic identification."]
            ] },
            { type: "callout", kind: "caution", title: "Do not stereotype", text: "Because culture is largely background knowledge and assumption, the manual warns against **overgeneralizing cultural information** or **stereotyping** groups as having fixed cultural traits (p. 860). The same page insists that **all** forms of illness and distress, **including the DSM disorders themselves**, are shaped by cultural context: culture influences how people build an identity and how they interpret and respond to symptoms (p. 860)." },
            { type: "p", text: "Culture, race and ethnicity connect to **structural inequities** (political, economic and social) that come with racism and discrimination and produce **health disparities**. At the same time, these identities can be **sources of strength and group support** that build **resilience**, or sources of psychological, interpersonal and **intergenerational conflict** that call for a culturally informed assessment (p. 860). Further terms about racialization and racism are defined in **Section I**, under “Cultural and Social Structural Issues,” in the subsection on the impact of racism and discrimination on diagnosis (p. 860; see [[ch:ch01|Chapter 1]])." },
            { type: "callout", kind: "culture", title: "Philippine reading (outside the DSM; app guidance)", text: "“Culture” in a Bataan clinic is not one thing: a patient may move between Tagalog and Kapampangan, Catholic devotion and a visit to an *albularyo*, a fishing-village family structure and a call-center night shift, with an OFW parent abroad. The manual’s point that most people inhabit **several cultural contexts** (p. 860) is the everyday reality here. Treat “Filipino” as a starting question, never as an answer." }
          ]
        }
      ]
    },
    {
      title: "Cultural formulation",
      sections: [
        {
          id: "s24-outline",
          title: "The Outline for Cultural Formulation: five categories",
          pages: "860–862",
          blocks: [
            { type: "p", text: "The **Outline for Cultural Formulation** first appeared in **DSM-IV** as a framework for gathering information about the cultural features of a mental health problem and its social and cultural context and history (p. 860). It is useful for **every** individual, not only those with an unfamiliar background (p. 860). DSM-5-TR **expands** the Outline and pairs it with the **CFI**, which was **field-tested** with clinicians, patients and the relatives who came with them and found **feasible, acceptable and useful** (p. 861)." },
            { type: "steps", title: "The five categories of the Outline (pp. 861–862)", items: [
              ["1. Cultural identity of the individual", "Demographic and other socially defined characteristics (age, gender, ethnoracial background) that shape relationships, access to resources and current challenges; also **religion and spirituality, class, caste, places of birth and upbringing, migrant status, occupation, sexual orientation**. Note which aspects the person **prioritizes** and how they interact (**intersectionality**). For migrants, note involvement with the context of **origin** and the **new** context; for members of racialized and ethnic groups, the degree of interaction with their own group and the rest of society. **Language** abilities, preferences and patterns flag problems with access, integration, communication and the need for an **interpreter** (p. 861)."],
              ["2. Cultural concepts of distress", "The constructs through which the person experiences, understands and communicates the problem: **idioms**, **explanations or perceived causes**, and **syndromes**. Judge **severity and meaning against the norms of the person’s own background**. Ask about **priority symptoms, perceived seriousness, stigma and expected outcome**, and about the **help-seeking expectations** of the person and of family or friends, **self-coping**, and past help-seeking, including **professional and traditional, alternative or complementary** sources of care (p. 861)."],
              ["3. Psychosocial stressors and cultural features of vulnerability and resilience", "Key stressors, challenges and supports, local and distant: **social determinants** such as access to resources (housing, transport) and opportunities (education, employment); exposure to **racism, discrimination and institutional stigmatization**; **social marginalization or exclusion** (structural violence); the role of **religion, family and social networks** (including online groups) in causing stress or giving emotional, instrumental and informational support. Functioning, disability and resilience are judged **in light of the person’s cultural background** (p. 861)."],
              ["4. Cultural features of the relationship between the individual and the clinician, treatment team and institution", "Differences in **background, language, education and social status** that can hinder communication and shape diagnosis and treatment; how each party is **positioned socially** and perceives the other; and the way experiences of racism and discrimination in the wider society can **block trust and safety** in the encounter, with effects on eliciting symptoms, reading their significance, and building rapport (pp. 861–862)."],
              ["5. Overall cultural assessment", "A **summary** of what the first four categories imply for the **differential diagnosis**, for other clinically relevant problems, and for **management and treatment** (p. 862)."]
            ] },
            { type: "callout", kind: "mnemonic", title: "“I Can See Real Origins” (app, original)", text: "**I**dentity, **C**oncepts of distress, **S**tressors and resilience, **R**elationship with the clinician and institution, **O**verall assessment. DSM check: the five headings are on pp. 861–862; the fourth is the one most often forgotten and the one the CFI’s question 16 was written for (app guidance)." },
            { type: "callout", kind: "pearl", title: "Two words the Outline uses that the exam likes", text: "**Intersectionality**: the way a person’s prioritized aspects of identity **interact**, which may itself reflect the clinical setting and the health concern (p. 861). **Structural violence**: the manual’s term for social marginalization or exclusion, listed with racism, discrimination and institutional stigmatization among the stressors to identify (p. 861)." },
            { type: "case", title: "Clinical vignette", text: "A 34-year-old woman from a Mindanao Muslim family has worked in Manila for eight years. She comes with insomnia and “nerbyos” after her husband was laid off. She prays at the clinic’s nearby mosque but says her colleagues “do not know I am Muslim.” She has consulted a traditional healer and has avoided the psychiatric clinic until now because “people will say I am crazy.”", point: "The Outline organizes what you already heard: identity she **prioritizes** (faith; a migrant to a city; the parts she conceals at work), the **idiom** (nerbyos) and the **stigma** she anticipates, **stressors** (job loss) and **supports** (prayer, the healer), and the **relationship** question of whether a clinician who does not share her background can earn her trust (pp. 861–862). None of this is the diagnosis; it is the frame in which the diagnosis is made (app guidance)." }
          ]
        },
        {
          id: "s24-cfi-overview",
          title: "The Cultural Formulation Interview: what it is",
          pages: "862–863",
          blocks: [
            { type: "p", text: "The **CFI** is a set of protocols for gathering, during a mental health assessment, information about how culture affects the key aspects of a person’s presentation and care (p. 862). It has **three components**: the **core CFI**, **16 questions** for an initial assessment of **any** individual; an **Informant version** of the core CFI for collateral information; and **Supplementary modules** that expand the evaluation as needed (p. 862). The core and informant versions are printed in the chapter and, with the modules, are available online at www.psychiatry.org/dsm5 (pp. 862–863)." },
            { type: "defs", title: "What “culture” means inside the CFI: four parts (p. 862)", items: [
              ["Meaning-making", "The processes by which people assign meaning to experience, drawing on the values, orientations, knowledge and practices of the social groups they belong to (ethnic, faith, occupational, veterans’ groups) and their communities."],
              ["Background and position", "Aspects of background, development and current social position that shape perspective: **age and gender, social class, where they come from and whether they migrated, language, religion, sexual orientation, disability, and ethnic or racialized background**."],
              ["Social network", "The influence of family, friends and other community members on the illness experience."],
              ["The clinicians and the system", "The cultural background of the **providers** and the values and assumptions built into **health care organizations and institutions**, which affect the clinical interaction."]
            ] },
            { type: "p", text: "Because cultural processes involve the person’s interaction with local and larger social contexts, a cultural assessment looks at **the context as much as the person** (p. 862). The CFI is a **brief, semistructured** interview that keeps the focus on the person’s own experience and the social contexts of the problem; it is **person-centered**, eliciting the individual’s own views and those of their network, which is how it **avoids stereotyping**. Since it asks for personal views, **there are no right or wrong answers** (p. 862)." },
            { type: "defs", title: "Format and use (p. 863)", items: [
              ["Two columns", "The **left** column holds instructions for the interviewer and the goal of each domain; the **right** column holds questions that **illustrate** how to explore the domain and are **not exhaustive**. Follow-up questions are expected, questions may be **rephrased**, and the CFI should be used **flexibly** to keep a natural flow and rapport."],
              ["Pair it with demographic information", "Gather demographic details **before** the interview to tailor the questions. A full set covers where the person was born, age and gender, ethnic or racialized background, marital status and household, schooling, which languages they speak and how well, sexual orientation, religion or spirituality, work and employment, income, and the migration story."],
              ["Who, where, how much", "Usable in the initial assessment of people of **any age** in **any setting**, whatever the background of the person **or** the clinician; people who seem to share a background may still differ in ways that matter. Use it **whole** or bring **components** into an evaluation as needed."]
            ] },
            { type: "callout", kind: "exam", title: "Three numbers to lock in (app guidance)", text: "**3** components (core, Informant, Supplementary modules), **16** core questions, **4** domains. The Informant version has **17** questions because it adds one at the start about the informant’s relationship to the patient (p. 868). The modules are **online**, not printed in the manual (p. 863)." }
          ]
        },
        {
          id: "s24-cfi-when",
          title: "When the CFI is especially helpful",
          pages: "863",
          blocks: [
            { type: "p", text: "The CFI can be used with anyone, but the manual lists **seven situations** in which it may be **especially helpful** in clinical practice (p. 863). They are worth memorizing, because they describe the moments when a cultural assessment changes the diagnosis or the plan rather than decorating the note." },
            { type: "list", title: "The seven situations (p. 863)", items: [
              "**Difficulty in diagnostic assessment** because the clinician and the individual differ significantly in cultural, religious or socioeconomic background.",
              "**Uncertainty about fit** between culturally distinctive symptoms and the diagnostic criteria.",
              "**Difficulty judging how severe or impairing** the illness is.",
              "**Divergent views** of the symptoms, or expectations of care shaped by earlier contact with a different healing tradition or health system.",
              "**Disagreement** between patient and clinician about what the treatment should be.",
              "**Potential mistrust** of mainstream services and institutions among people whose group carries a collective history of **trauma and oppression**.",
              "**Poor engagement** with treatment and **poor adherence**."
            ] },
            { type: "callout", kind: "mnemonic", title: "“Different Unusual Severe Healers Clash, Mistrust, Exit” (app, original)", text: "**D**ifferent backgrounds, **U**nusual (uncertain-fit) symptoms, **S**everity hard to judge, other **H**ealers’ expectations, **C**lash on the course of care, **M**istrust from collective trauma, **E**xit (poor engagement). DSM check: seven bullets on p. 863; they are situations where the CFI *may be especially helpful*, not requirements for using it." },
            { type: "p", text: "The process and the information both serve three goals: to enhance the **cultural validity** of diagnostic assessment, to support **treatment planning**, and to promote **engagement and satisfaction**. The clinician is expected to **integrate** the CFI material with everything else into a comprehensive clinical and contextual evaluation (p. 863)." },
            { type: "case", title: "Clinical vignette", text: "A 61-year-old Aeta man from Zambales, brought by a barangay health worker, is thought by the referring physician to be “paranoid” because he will not take medicines from government clinics and speaks of past broken promises about land. He answers in short phrases through his nephew.", point: "At least three of the seven situations are present: a large background gap, uncertainty whether “suspicion” is a symptom or **socially warranted** (p. 872), and possible **mistrust** grounded in a collective history. This is exactly when the CFI is meant to be used, with the Informant version if the nephew is the better historian (pp. 863, 868; app guidance)." }
          ]
        },
        {
          id: "s24-cfi-domains",
          title: "The core CFI: four domains, 16 questions",
          pages: "863–867",
          blocks: [
            { type: "p", text: "The core CFI emphasizes **four domains** (p. 863). Domain 1, questions 1–3: **Cultural Definition of the Problem**. Domain 2, questions 4–10: **Cultural Perceptions of Cause, Context, and Support**. Domain 3, questions 11–13: **Cultural Factors Affecting Self-Coping and Past Help Seeking**. Domain 4, questions 14–16: **Cultural Factors Affecting Current Help Seeking**. The interview opens with an **introduction** that says the clinician wants to understand the problems from the person’s point of view, will ask about what is going on and how they are handling it, and that there are **no right or wrong answers** (p. 864). What follows describes each question’s purpose in the app’s words; the manual’s wording is in the chapter and online." },
            { type: "table", caption: "Domain 1 (questions 1–3, p. 864): Cultural Definition of the Problem", head: ["Q", "What it asks", "Interviewer guidance"], rows: [
              ["1", "What brings the person in today; if they give only symptoms or a medical label, how they would **describe the problem in their own way**", "Elicit the person’s **own** understanding; then use their term or phrase (“your conflict with your son”) for the problem in later questions"],
              ["2", "How they describe the problem to **family, friends or others** in their community", "People often frame a problem differently for their social network"],
              ["3", "What **troubles them most** about it", "Find the aspect that matters most to the person"]
            ] },
            { type: "table", caption: "Domain 2 (questions 4–10, pp. 864–865): Cultural Perceptions of Cause, Context, and Support", head: ["Q", "What it asks", "Interviewer guidance"], rows: [
              ["4", "Why they think it is happening; what they see as the **causes** (prompt: life events, problems with others, physical illness, spiritual reasons, many other causes)", "**Causes.** The person’s explanatory model; people may give **several** causes for different facets of the problem"],
              ["5", "What **family, friends or community** think is causing it", "Network views may differ from the person’s"],
              ["6", "**Supports** that make the problem better (family, friends, others)", "**Stressors and supports.** Resources, social support, resilience; may probe co-workers, religion or spirituality"],
              ["7", "**Stresses** that make it worse (money, family problems)", "May probe relationship problems, work or school, discrimination"],
              ["8", "After a short preamble that “background or identity” can mean communities, languages, origin, race or ethnicity, gender or sexual orientation, faith: the **most important aspects** of their background or identity", "**Role of cultural identity.** Use the answer to tailor questions 9–10"],
              ["9", "Aspects of identity that **make a difference** to the problem", "Probe clinical worsening from discrimination (migration status, race or ethnicity, sexual orientation)"],
              ["10", "Aspects of identity causing **other concerns or difficulties**", "Probe migration-related problems, conflict across generations or over gender roles"]
            ] },
            { type: "table", caption: "Domain 3 (questions 11–13, pp. 865–866): Cultural Factors Affecting Self-Coping and Past Help Seeking", head: ["Q", "What it asks", "Interviewer guidance"], rows: [
              ["11", "What they have done **on their own** to cope", "**Self-coping**"],
              ["12", "What kinds of **treatment, help, advice or healing** they have sought before, from any kind of doctor, helper or healer; if not volunteered, which were **useful** and which were not", "**Past help seeking.** Medical care, mental health treatment, support groups, work-based counseling, folk healing, religious or spiritual counseling, other traditional or alternative healing"],
              ["13", "Whether anything has **prevented** them from getting the help they need (probe: money, work or family commitments, stigma or discrimination, no services that understand their language or background)", "**Barriers** to help seeking, access and engagement"]
            ] },
            { type: "table", caption: "Domain 4 (questions 14–16, pp. 866–867): Cultural Factors Affecting Current Help Seeking", head: ["Q", "What it asks", "Interviewer guidance"], rows: [
              ["14", "After a transition to the help they need now: what kinds of help would be **most useful** at this time", "**Preferences.** Probe if only one source is named"],
              ["15", "Other kinds of help that **family, friends or others** have suggested", "The network’s view of help seeking"],
              ["16", "After a preamble that doctors and patients can misunderstand each other because of different backgrounds or expectations: whether they have been **concerned about this**, and what the clinic can do to give them the care they need", "**Clinician-patient relationship.** Perceived racism, language barriers or cultural differences that could undermine goodwill, communication or care; address concerns raised earlier"]
            ] },
            { type: "callout", kind: "key", title: "The one habit the CFI teaches", text: "Question 1 ends with the person’s **own word** for the problem, and the interviewer is told to **use that word** from then on (p. 864). Every later question has a slot for it. That single move, naming the problem the way the patient does, is the mechanism by which the CFI avoids stereotyping (p. 862; app reading)." },
            { type: "callout", kind: "pearl", title: "Question 16 is the Outline’s fourth category in interview form", text: "The clinician-patient relationship domain exists because perceived **racism, language barriers or cultural differences** can undermine goodwill, communication and the delivery of care (p. 867). It is the question residents skip most and the one that most often changes adherence (app guidance)." },
            { type: "case", title: "Clinical vignette", text: "A 45-year-old seafarer’s wife in Mariveles presents with headaches, poor sleep and crying spells. Asked what brings her in, she says “my nerves.” She tells her sisters it is “stress from the children”; what troubles her most is that she “cannot be the mother she should be.” Her mother thinks it is from a long-ago fright; her church group has been her main support; money and shame have kept her from the clinic. She wants “something for sleep” and her sister has suggested she talk to someone.", point: "Her answers walk through all four domains: definition (Q1–3: “my nerves,” the family framing, the role failure that troubles her most), cause and context (Q4–10: a fright explanation in the family, church support, money stress), coping and past help (Q11–13: barriers of money and stigma), and current preferences (Q14–15: sleep medicine; counseling suggested by the network). The diagnosis is still made on Section II criteria; the CFI tells you how to make it well and how to negotiate the plan (pp. 863–867; app guidance)." }
          ]
        },
        {
          id: "s24-cfi-informant",
          title: "The CFI Informant version",
          pages: "868–871",
          blocks: [
            { type: "p", text: "The **Informant version** collects collateral information from someone who **knows the person’s clinical problems and life circumstances** (p. 868). It can **supplement** the core CFI, or **replace** it when the person cannot provide the information: the manual’s examples are **children or adolescents**, people with **florid psychosis**, and people with **cognitive impairment** (p. 868)." },
            { type: "defs", title: "How it differs from the core CFI (pp. 868–871)", items: [
              ["One extra opening question", "Question 1 clarifies the **informant’s relationship** to the person or the family, with a probe about how often they see the person (p. 868). Everything after is the core CFI reframed for an observer, so the numbering runs **one higher**: definition of the problem 2–4, causes 5–6, stressors and supports 7–8, cultural identity 9–11, self-coping 12, past help seeking 13, barriers 14, preferences 15–16, clinician-patient relationship 17 (pp. 868–871)."],
              ["Same domains, informant’s viewpoint", "The introduction tells the informant the clinician wants to understand the problems that bring their family member or friend in, from the informant’s experience and ideas, with no right or wrong answers (p. 868). The identity questions ask about the **individual’s** identity as the informant sees it, and the help-seeking questions ask what the individual has done and what help others have suggested (pp. 869–871)."],
              ["Total", "**17** questions (pp. 868–871), versus 16 in the core CFI (app count from the printed version)."]
            ] },
            { type: "callout", kind: "exam", title: "Core versus Informant (app guidance)", text: "Core CFI: **16** questions, the person’s own views, any individual (p. 862). Informant CFI: **17** questions, a knowledgeable other, used **with** the core or **instead** of it when the person cannot answer (children and adolescents, florid psychosis, cognitive impairment; p. 868). Both share the four domains (p. 863)." },
            { type: "case", title: "Clinical vignette", text: "A 19-year-old man is brought to the emergency department mute and agitated after three days of not sleeping, convinced that a neighbor has “sent” something to him. His mother can describe the onset, the family’s view that a *mangkukulam* is responsible, the healer they visited first, and the stigma that delayed the hospital visit.", point: "He cannot complete a core CFI during florid psychosis; the **Informant version** with his mother captures the definition, the causal explanation, the past help seeking and the barriers (p. 868). The psychosis is diagnosed on Section II criteria; the family’s explanation goes into the formulation, not into the diagnosis line (p. 873; app guidance). The *kulam* explanation is a Philippine idea outside the manual, labeled here as such." }
          ]
        },
        {
          id: "s24-modules",
          title: "Supplementary modules",
          pages: "863–867 (online)",
          blocks: [
            { type: "p", text: "The **Supplementary modules** expand each domain of the core CFI for clinicians who want to go deeper, and there are also modules for **specific populations**: **children and adolescents, elderly individuals, caregivers, and immigrants and refugees** (p. 863). They are referenced in the core CFI under the relevant subheadings, in parentheses, and are **available online** at www.psychiatry.org/dsm5 rather than printed in the manual (p. 863)." },
            { type: "table", caption: "Modules named in parentheses under the core CFI subheadings (pp. 864–867)", head: ["Core CFI subtopic", "Modules the chapter names"], rows: [
              ["Cultural definition of the problem", "Explanatory Model, Level of Functioning"],
              ["Causes", "Explanatory Model, Social Network, Older Adults"],
              ["Stressors and supports", "Social Network, Caregivers, Psychosocial Stressors, Religion and Spirituality, Immigrants and Refugees, Cultural Identity, Older Adults, Coping and Help Seeking"],
              ["Role of cultural identity", "Cultural Identity, Psychosocial Stressors, Religion and Spirituality, Immigrants and Refugees, Older Adults, Children and Adolescents"],
              ["Self-coping", "Coping and Help Seeking, Religion and Spirituality, Older Adults, Caregivers, Psychosocial Stressors"],
              ["Past help seeking", "Coping and Help Seeking, Religion and Spirituality, Older Adults, Caregivers, Psychosocial Stressors, Immigrants and Refugees, Social Network, Clinician-Patient Relationship"],
              ["Barriers", "Coping and Help Seeking, Religion and Spirituality, Older Adults, Psychosocial Stressors, Immigrants and Refugees, Social Network, Clinician-Patient Relationship"],
              ["Preferences", "Social Network, Caregivers, Religion and Spirituality, Older Adults, Coping and Help Seeking"],
              ["Clinician-patient relationship", "Clinician-Patient Relationship, Older Adults"]
            ] },
            { type: "callout", kind: "pearl", title: "Twelve module names, counted from the chapter (app count)", text: "Collecting the names that appear in parentheses gives **twelve**: Explanatory Model, Level of Functioning, Social Network, Psychosocial Stressors, Religion and Spirituality, Cultural Identity, Coping and Help Seeking, Clinician-Patient Relationship, Older Adults, Caregivers, Immigrants and Refugees, and Children and Adolescents (pp. 863–867). The manual itself does not state a total; the online set is the authority (app note)." },
            { type: "callout", kind: "exam", title: "What is printed and what is online (app guidance)", text: "Printed in the chapter: the **core CFI** and the **Informant version** (pp. 864–871). Online only: the **Supplementary modules** (p. 863). All three are also online (pp. 862–863). A question that asks which component is *not* in the manual is asking for the modules." }
          ]
        }
      ]
    },
    {
      title: "Cultural concepts of distress",
      sections: [
        {
          id: "s24-concepts-types",
          title: "Three types of concept, and why “culture-bound syndrome” was retired",
          pages: "871–872",
          blocks: [
            { type: "p", text: "**Cultural concepts of distress** are the ways people **experience, understand and communicate** their suffering, their behavioral problems, or thoughts and emotions that trouble them (p. 871). The manual distinguishes **three main types**." },
            { type: "defs", title: "The three types (p. 871)", items: [
              ["Cultural idioms of distress", "Ways of **expressing** distress that need not involve specific symptoms or a syndrome, but give a group a **shared way of experiencing and talking about** personal or social concerns. Everyday talk about “nerves” or “depression” can cover very different kinds of suffering without mapping onto one set of symptoms."],
              ["Cultural explanations or perceived causes", "Labels, attributions or features of an **explanatory model** that give a culturally recognized **meaning or cause** for symptoms, illness or distress."],
              ["Cultural syndromes", "**Clusters of symptoms and attributions** that tend to **co-occur** among people in a particular group, community or context and are **recognized locally** as a coherent pattern."]
            ] },
            { type: "compare", title: "Why the three types replaced “culture-bound syndrome” (pp. 871–872)", items: [
              { title: "“Culture-bound syndrome” (the older term)", color: "mech", points: [
                "Ignored that the clinically important cultural differences are often in **explanation or experience** rather than in a distinctive **configuration of symptoms**.",
                "Overstated how **idiosyncratic** these concepts are and how tightly they are **bound to one geographic region**.",
                "Implied that only *other* cultures have culture-shaped illness (app reading; the manual’s point is that all distress, DSM disorders included, is locally shaped, p. 871)."
              ] },
              { title: "Cultural concepts of distress (the current framing)", color: "guide", points: [
                "Idioms, explanations and syndromes are **more relevant to clinical practice**.",
                "**All** distress is locally shaped, **including the DSM disorders**; many DSM diagnoses can be read as **operationalized prototypes** that began as cultural syndromes and spread because they proved useful clinically and in research.",
                "Across groups there remain **culturally patterned differences** in symptoms, in ways of talking about distress, and in perceived causes, which shape coping and help seeking."
              ] }
            ] },
            { type: "p", text: "These concepts come out of local diagnostic systems, **folk** or **professional**, for mental and emotional distress, and **biomedical** ideas can shape them too (pp. 871–872). A concept is not sealed off from medicine: the same word, “depression,” can be used for a syndrome, an idiom or a cause, depending on context (p. 872)." },
            { type: "callout", kind: "exam", title: "The retired term is a favorite distractor (app guidance)", text: "If an option says “culture-bound syndrome,” it is describing the **DSM-IV** framing. DSM-5 and DSM-5-TR use **cultural concepts of distress** with three types; the reasons for the change are on pp. 871–872. The retired term appears in the manual only to be criticized." }
          ]
        },
        {
          id: "s24-concepts-features",
          title: "Four key features, and seven reasons they matter",
          pages: "872–873",
          blocks: [
            { type: "p", text: "In relation to the DSM-5 nosology, cultural concepts of distress have **four key features** (p. 872)." },
            { type: "steps", title: "The four key features (p. 872)", items: [
              ["Seldom one-to-one", "A cultural concept rarely corresponds to a single DSM entity; the relation is usually **one-to-many in either direction**. One concept may contain symptoms that DSM would sort into several disorders, and presentations DSM treats as variants of one disorder may be split into several concepts by a local system."],
              ["Any severity", "Concepts apply across the **whole range of severity**, including presentations that **meet no DSM criteria**. A person in acute grief, or caught in a social predicament, can use the very idiom, or show the very syndrome, that another person uses with severe psychopathology."],
              ["One term, several types", "In common use the same term often denotes more than one type of concept. “Depression” can be a **syndrome** (major depressive disorder), an **idiom** (“I feel depressed”), or an **explanation** (a baby born with emotional problems because the mother was depressed in pregnancy)."],
              ["They change", "Like culture, and like the DSM itself, cultural concepts of distress **change over time** under local and global influences."]
            ] },
            { type: "p", text: "The manual then gives **seven reasons** these concepts are important to psychiatric diagnosis (pp. 872–873)." },
            { type: "table", caption: "Why cultural concepts of distress matter (pp. 872–873)", head: ["Reason", "What the manual says"], rows: [
              ["Identify concerns and detect psychopathology", "Using cultural concepts in **screening** or a review of systems helps, because people know these terms better than professional ones."],
              ["Avoid misdiagnosis", "Cultural variation in symptoms and explanatory models can make a clinician **misjudge severity** or **assign the wrong diagnosis**: **socially warranted suspicion** read as **paranoia**; **unfamiliar presentations** misdiagnosed as **psychosis**."],
              ["Obtain useful clinical information", "Variation in symptoms and attributions can be linked to **risk, resilience and outcome**; asking about it shows how context drives symptom development, course and the response to coping."],
              ["Improve rapport and engagement", "“Speaking the language of the patient,” linguistically and through their concepts and metaphors, improves communication and satisfaction, helps **treatment negotiation**, and raises **retention and adherence**."],
              ["Improve therapeutic efficacy", "Culture shapes the **psychological mechanisms** of a disorder; the example is culturally specific **catastrophic cognitions** that drive symptoms into **panic attacks**."],
              ["Guide clinical research", "Locally perceived links between concepts can point to **comorbidity patterns**, biological substrates, and unrecognized disorders or variants; the example is **possession**, added to the DSM-5 criteria for **dissociative identity disorder** (a change from DSM-IV)."],
              ["Clarify cultural epidemiology", "Concepts are **not endorsed uniformly** within a culture; separating idioms, explanations and syndromes lets researchers study how cultural features of illness are distributed across settings and over time, and what determines risk, course and outcome."]
            ] },
                        { type: "callout", kind: "pearl", title: "Count check", text: "The printed list on pp. 872–873 has **seven** headed reasons (identification and detection, misdiagnosis, clinical information, rapport and engagement, therapeutic efficacy, research, epidemiology). Some summaries split the first into two and say eight; answer from the printed list (app note)." },
            { type: "callout", kind: "key", title: "The two misdiagnosis sentences", text: "Memorize the pair on p. 872: **socially warranted suspicion → mistaken for paranoia**, and **unfamiliar symptom presentations → misdiagnosed as psychosis**. The psychosis warning returns concretely in the maladi dyab entry, where the supernatural explanation may lead to misdiagnosis of delusional disorder or schizophrenia (p. 877); taijin kyofusho shows the other side, where delusional disorder *should* be considered when a concern has a delusional quality (p. 879). Section I’s text on racism and discrimination develops the same theme (Chapter 1; app note)." }
          ]
        },
        {
          id: "s24-concepts-practice",
          title: "Using cultural concepts in diagnosis: the recording rule and the other tools",
          pages: "873",
          blocks: [
            { type: "p", text: "DSM-5 included cultural concepts of distress to improve the **accuracy of diagnosis** and the **comprehensiveness of assessment** (p. 873). When someone presents with a cultural concept, the assessment should determine whether the presentation **meets criteria for a specified disorder** or is best classified as an **other specified** diagnosis. Once a disorder is diagnosed, the **cultural terms and explanations** go into the **case formulation**, where they can clarify symptoms and attributions that would otherwise confuse. People whose symptoms meet no criteria may **still expect and require treatment**, judged case by case (p. 873)." },
            { type: "flow", title: "The recording rule in practice (p. 873; app layout)", steps: [
              "The person presents with a cultural concept (idiom, explanation or syndrome)",
              "Assess with the CFI and Section II criteria",
              "Criteria for a **specified disorder** met → diagnose it; name the concept in the formulation",
              "Clinically significant but below threshold → an **other specified** category; name the concept",
              "No disorder → consider a **Chapter 22** condition (acculturation, parent-child, religious or spiritual problem) or normative distress; treatment may still be needed"
            ] },
            { type: "defs", title: "Other DSM-5-TR tools for integrating culture (p. 873)", items: [
              ["The culture-related text in each disorder", "The updated disorder texts describe cultural variation in **symptom expression**, **attributions** for causes or precipitants, factors behind **differential prevalence** across groups, cultural norms that move the **threshold** for pathology and perceived severity, the **risk of misdiagnosis** when evaluating people from socially oppressed ethnoracial or marginalized groups, and associated cultural concepts of distress. Because there is **no one-to-one correspondence** at the categorical level, differential diagnosis must combine this text with what the CFI elicits."],
              ["Other Conditions That May Be a Focus of Clinical Attention", "Some concerns the CFI surfaces match a **Chapter 22** condition with an ICD-10-CM code: the examples are **acculturation problems**, **parent-child relational problems** and **religious or spiritual problems** (see [[ch:ch22|Chapter 22]]: [[dx:social-environment-problem|Z60.3]], [[dx:parent-child-relational|Z62.820]], [[dx:religious-spiritual-problem|Z65.8]]; codes from the app’s Chapter 22 material)."]
            ] },
            { type: "callout", kind: "caution", title: "Never write the concept on the diagnosis line", text: "The manual’s instruction is to decide between a **specified** disorder and an **other specified** diagnosis and to put the cultural term in the **formulation** (p. 873). “Ataque de nervios” is not a codable diagnosis and has no ICD-10-CM code; neither does any of the other nine examples (app guidance). The only exceptions to “no code” are the Chapter 22 Z codes for the situations the chapter names." },
            { type: "p", text: "The **ten examples** that follow were chosen to show how cultural concepts can affect the **process** of diagnosis; the principles apply to the many other concepts found in specific contexts (p. 873). Two reminders precede them: the same term can be used for **several types** of concept and several presentations depending on context, and a concept can occur **on its own or with any psychiatric disorder**, shaping presentation, course and outcome; among U.S. Latinx communities, ataque de nervios has been found alongside **nearly all** psychiatric disorders (p. 873). Each example ends with **Related conditions in DSM-5-TR**, which lists (1) disorders that **overlap phenomenologically** with the concept (panic disorder and ataque, paroxysmal and symptomatically similar) and (2) disorders that are **frequently attributed** to the explanation or idiom (PTSD and kufungisisa) (pp. 873–874)." },
            { type: "callout", kind: "exam", title: "Which type is each example? (app reading of pp. 874–879)", text: "**Syndromes:** ataque de nervios, hikikomori, khyâl cap, shenjing shuairuo, taijin kyofusho. **Explanations:** dhat (explicitly “not a discrete syndrome”), maladi dyab, susto. **Idiom and explanation together:** kufungisisa, nervios. Remember the third key feature: a term can be more than one type (ataque is also an idiom for any fit-like outburst; dhat is also an idiom for an STI)." }
          ]
        }
      ]
    },
    {
      title: "The ten examples",
      sections: [
        {
          id: "s24-ataque",
          title: "Ataque de nervios",
          pages: "873–874",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "874", items: [
              ["Context", "A **syndrome** found in **Latinx** cultural contexts; the name means “attack of nerves.”"],
              ["Picture", "Intense emotional upset: **acute anxiety, anger or grief**; **uncontrollable screaming or shouting**; **crying attacks**; **trembling**; **heat rising from the chest into the head**; **verbal and physical aggression**."],
              ["Sometimes", "Some attacks feature **dissociation** (depersonalization, derealization, amnesia), **seizure-like or fainting** episodes, or **suicidal behavior**; others have none of these."],
              ["Core feeling", "A sense of being **out of control**."],
              ["Trigger", "Usually a **direct result of a stressful family event**: news of a close relative’s death, conflict with a spouse or children, witnessing an accident involving a family member. In a **minority** there is no trigger; vulnerability comes from **accumulated suffering**."],
              ["Also an idiom", "The term can also mean any **“fit”-like paroxysm of emotion** (even hysterical laughing) or an episode of losing control under an intense stressor."]
            ] },
            { type: "p", text: "Ataque has **no one-to-one match** with any psychiatric disorder, although it shares symptoms with **panic disorder**, with **other specified or unspecified dissociative disorder** and with **functional neurological symptom disorder** (p. 874). In community samples ataque is reported by **7%–15% of U.S. Latinx adults** and **4%–9% of youth**, depending on region and subgroup, and it is associated with **suicidal thoughts, disability and outpatient psychiatric use** even after adjusting for diagnoses, trauma exposure and other covariates (p. 874). Yet some ataques are **normative** expressions of acute distress, for example at a funeral, with no clinical sequelae (p. 874)." },
            { type: "defs", title: "Related concepts and conditions (p. 874)", items: [
              ["Other cultural contexts", "**Indisposition** (Haiti), **blacking out** (several West Indies and Caribbean countries), **falling out** (Southern United States). Blacking out and falling out here are **not** alcohol- or substance-induced blackouts or amnesia."],
              ["Related DSM-5-TR conditions", "[[dx:panic-attack|Panic attack]], [[dx:panic-disorder|panic disorder]], [[dx:other-specified-dissociative|other specified]] or [[dx:unspecified-dissociative|unspecified dissociative disorder]], [[dx:fnd|functional neurological symptom disorder]], [[dx:ied|intermittent explosive disorder]], [[dx:other-specified-anxiety|other specified]] or [[dx:unspecified-anxiety|unspecified anxiety disorder]], [[dx:other-specified-trauma|other specified]] or [[dx:unspecified-trauma|unspecified trauma- and stressor-related disorder]]."]
            ] },
            { type: "compare", title: "Ataque de nervios versus a panic attack (pp. 874; Chapter 5; app comparison)", items: [
              { title: "Ataque de nervios", color: "mech", points: ["Usually **provoked** by a family stressor.", "**Anger, grief, shouting, aggression** and dissociation are typical.", "Feeling **out of control** is the core.", "Can be **normative** (a funeral)."] },
              { title: "Panic attack", color: "guide", points: ["Often **unexpected**; an abrupt surge peaking within minutes (Chapter 5).", "Autonomic symptoms plus fear of dying or losing control (Chapter 5).", "Panic **disorder** needs recurrent unexpected attacks with a month of worry or behavior change (Chapter 5).", "An ataque that meets panic criteria is recorded as the panic diagnosis, with “ataque de nervios” in the formulation (p. 873; app guidance)."] }
            ] },
            { type: "case", title: "Clinical vignette", text: "A 38-year-old Puerto Rican woman seen at a New York clinic during an overseas rotation began screaming, shaking and striking her brother minutes after being told by phone that her mother had died; she then felt “outside herself” for an hour and remembers little. Over the past 2 years she has had four similar episodes, always after family conflicts, and no unexpected attacks.", point: "The picture is an **ataque de nervios**: a family trigger, anger and grief, aggression, dissociation and loss of control (p. 874). It is not a diagnosis; the stressor-bound pattern without unexpected attacks does not meet panic disorder, so consider [[dx:other-specified-dissociative|other specified dissociative disorder]] or an other specified anxiety or trauma- and stressor-related disorder if clinically significant, and name the ataque in the formulation (pp. 873–874; app guidance)." }
          ]
        },
        {
          id: "s24-dhat",
          title: "Dhat syndrome",
          pages: "874–875",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "874–875", items: [
              ["Context and origin", "A term **coined in South Asia** little more than half a century ago for the common presentation of **young men** who attribute varied symptoms to **semen loss**."],
              ["Type", "Despite the name, **not a discrete syndrome** but a **cultural explanation** of distress."],
              ["Symptoms attributed", "Anxiety, fatigue, weakness, weight loss, erectile dysfunction, multiple somatic complaints, depressed mood."],
              ["Cardinal feature", "**Anxiety and distress about the loss of dhat** with **no identifiable physiological dysfunction**; dhat is identified as a **white discharge** noticed on defecation or urination."],
              ["Explanatory root", "The concept of **dhatu** (semen) in **Ayurveda**, one of **seven essential bodily fluids** whose balance keeps a person healthy."]
            ] },
            { type: "p", text: "Although dhat syndrome was framed as a clinical category for local practice, beliefs about the harm of semen loss are **widespread in the general population**, suggesting a cultural disposition to explain symptoms in dhat-related terms (p. 875). Prevalence estimates in health care settings vary: **64%** of men attending psychiatric clinics in India for sexual complaints and **30%** of men attending general medical clinics in Pakistan (p. 875). It is most often identified in **young men from lower socioeconomic backgrounds**, but **middle-aged men** are affected too; a **female variant** involves concern about white vaginal discharge (leukorrhea); and the term may also serve as an idiom and explanation for **sexually transmitted infections** such as gonorrhea or chlamydia, **without** psychological distress (p. 875)." },
            { type: "defs", title: "Related concepts and conditions (p. 875)", items: [
              ["Other cultural contexts", "**Koro** in Southeast Asia, particularly Singapore ([[gl:koro]]), and **shen-k’uei** (“kidney deficiency”) in China."],
              ["Related DSM-5-TR conditions", "[[dx:mdd|Major depressive disorder]], [[dx:pdd|persistent depressive disorder]], [[dx:gad|generalized anxiety disorder]], [[dx:ssd|somatic symptom disorder]], [[dx:iad|illness anxiety disorder]], [[dx:erectile-disorder|erectile disorder]], [[dx:premature-ejaculation|early (premature) ejaculation]], [[dx:other-specified-sexual|other specified]] or [[dx:unspecified-sexual|unspecified sexual dysfunction]], [[dx:educational-problem|educational problems]]."]
            ] },
            { type: "callout", kind: "pearl", title: "Two traps in one entry", text: "First, the word “syndrome” is in the name, but the manual calls dhat an **explanation**, not a syndrome (p. 874). Second, “dhat” may be a lay word for an **STI** with no distress at all (p. 875): examine and test before assuming a psychiatric presentation (app guidance)." },
            { type: "case", title: "Clinical vignette", text: "A 24-year-old Indian seafarer at a Subic port clinic reports 8 months of fatigue, weakness, poor concentration and low mood, which he blames on “losing dhat” in his urine; he fears he is becoming impotent. Examination and urinalysis are normal. He has lost interest in his hobbies, sleeps poorly and feels worthless most days.", point: "Dhat is the **explanation**; the picture is assessed against Section II. With pervasive low mood, anhedonia, poor sleep and worthlessness over months, [[dx:mdd|major depressive disorder]] should be considered, with the dhat attribution and the Ayurvedic concept recorded in the formulation (pp. 873–875; app guidance). If the symptoms were health-focused worry without depressive features, [[dx:ssd|somatic symptom disorder]] or [[dx:iad|illness anxiety disorder]] would be the candidates (p. 875)." }
          ]
        },
        {
          id: "s24-hikikomori",
          title: "Hikikomori",
          pages: "875",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "875", items: [
              ["Context and name", "A **syndrome** of protracted, severe **social withdrawal** observed in **Japan**; from *hiku* (pull back) and *moru* (seclude oneself)."],
              ["Typical picture", "A **teenage or young adult male**, living with his parents, who **stays in his room** and has **no face-to-face social contact**; withdrawal may end all in-person contact."],
              ["Course", "May begin **ego-syntonic** but usually becomes **distressing** over time; often accompanied by **intense Internet use** and virtual social exchange; no interest in or willingness to attend **school or work**."],
              ["Duration", "Japan’s Ministry of Health, Labor, and Welfare set a **6-month** withdrawal threshold in its **2010 guideline**."],
              ["Primary versus secondary", "The withdrawal may occur within an established DSM-5 disorder (**secondary**) or on its own (**primary**)."]
            ] },
            { type: "defs", title: "Related concepts and conditions (p. 875)", items: [
              ["Other cultural contexts", "Protracted social withdrawal of adolescents and young adults is reported in many settings: Australia, Bangladesh, Brazil, China, France, India, Iran, Italy, Oman, South Korea, Spain, Taiwan, Thailand and the United States. People with hikikomori-type behavior in Japan, India, South Korea and the United States show **high loneliness, limited social networks and moderate functional impairment**."],
              ["Related DSM-5-TR conditions", "[[dx:social-anxiety|Social anxiety disorder]], [[dx:mdd|major depressive disorder]], [[dx:gad|generalized anxiety disorder]], [[dx:ptsd|posttraumatic stress disorder]], [[dx:asd|autism spectrum disorder]], [[dx:schizoid-pd|schizoid]] and [[dx:avoidant-pd|avoidant personality disorder]], [[dx:schizophrenia|schizophrenia]] or another psychotic disorder; also associated with [[dx:internet-gaming-disorder|Internet gaming disorder]] (a Section III proposal, Chapter 25) and, in adolescents, with **school refusal**."]
            ] },
            { type: "update", kind: "tr", title: "New in the text revision (app comparison)", text: "The app’s own comparison with DSM-5 (2013): hikikomori was **not** among DSM-5’s nine glossary concepts; the text revision adds it as the tenth example and the only one from East Asia defined by withdrawal rather than by anxiety or somatic distress (app note; the DSM-5 list is in the exam section)." },
            { type: "callout", kind: "pearl", title: "Beyond the text: how common (outside the DSM; app note)", text: "Japanese Cabinet Office surveys, which use the same 6-month definition, estimated about **541,000** people aged 15–39 (2015 survey) and **613,000** aged 40–64 (2018 survey), and a 2022 survey put the figure near **1.46 million**, about **2%** of people aged 15–64 (government survey reports as summarized in the press; figures outside the manual, verify before citing)." },
            { type: "callout", kind: "pearl", title: "Hikikomori is the exception to the “no duration” rule", text: "The other nine concepts have no time criterion. Hikikomori carries a **6-month** figure, but it comes from a **Japanese ministry guideline**, not from the DSM (p. 875). Secondary hikikomori is diagnosed as the underlying disorder; primary hikikomori with distress or impairment is still recorded through Section II categories such as [[dx:other-specified-anxiety|other specified anxiety disorder]] or the closest fit, with the term in the formulation (p. 873; app guidance)." },
            { type: "case", title: "Clinical vignette", text: "A 22-year-old Japanese-Filipino man in Quezon City has not left his bedroom in his mother’s house for 14 months except at night. He games online most of the day, has no friends he meets in person, and dropped out of college. He denies low mood, hallucinations or fear of being judged; he says he simply “prefers it,” though lately he feels stuck and ashamed.", point: "Protracted withdrawal past the **6-month** ministry threshold, Internet use, no school or work, early ego-syntonic then distressing: **hikikomori** (p. 875). Screen for the listed disorders (social anxiety, depression, autism spectrum, psychosis, personality disorders) and for [[dx:internet-gaming-disorder|Internet gaming disorder]]; if none is met, this is **primary** hikikomori, recorded through the nearest Section II category or a Chapter 22 problem, with the term in the formulation (pp. 873, 875; app guidance)." }
          ]
        },
        {
          id: "s24-khyal",
          title: "Khyâl cap (wind attacks)",
          pages: "875–876",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "875–876", items: [
              ["Context", "A **syndrome** in **Cambodian** cultural contexts: “khyâl attacks” or “wind attacks.”"],
              ["Symptoms", "Those of a **panic attack** (dizziness, palpitations, shortness of breath, cold extremities) plus other anxiety and autonomic symptoms, notably **tinnitus** and **neck soreness**."],
              ["Catastrophic cognitions", "Fear that **khyâl**, a windlike substance, may **rise in the body with the blood** and cause serious harm: compressing the lungs (shortness of breath, asphyxia) or entering the cranium (tinnitus, dizziness, blurry vision, a fatal syncope)."],
              ["Triggers", "May come without warning, but often provoked by **worrisome thoughts**, **standing up** (orthostasis), **odors** with negative associations, and **agoraphobic cues** such as crowds or riding in a car."],
              ["Relation to DSM", "Usually **meet panic attack criteria**; may shape other anxiety and trauma- and stressor-related disorders; associated with **considerable disability**."]
            ] },
            { type: "defs", title: "Related concepts and conditions (p. 876)", items: [
              ["Other cultural contexts", "**Pen lom** (Laos), **srog rlung gi nad** (Tibet), **vata** (Sri Lanka), **hwa byung** (Korea)."],
              ["Related DSM-5-TR conditions", "[[dx:panic-attack|Panic attack]], [[dx:panic-disorder|panic disorder]], [[dx:gad|generalized anxiety disorder]], [[dx:agoraphobia|agoraphobia]], [[dx:ptsd|posttraumatic stress disorder]], [[dx:iad|illness anxiety disorder]]."]
            ] },
            { type: "callout", kind: "key", title: "Why khyâl cap is the manual’s example of “therapeutic efficacy”", text: "Page 872 says culture shapes the **psychological mechanisms** of a disorder and gives **culturally specific catastrophic cognitions escalating into panic attacks** as the example. Khyâl attacks are that example in full: the fear of wind rising with the blood turns dizziness on standing into a panic attack (pp. 875–876). Treating the panic without addressing the khyâl belief misses the mechanism (app reading)." },
            { type: "case", title: "Clinical vignette", text: "A 52-year-old Cambodian woman, a refugee seen in a Lowell, Massachusetts clinic during an elective, has had episodes several times a week for 6 months in which she becomes dizzy on standing, her neck aches, her ears ring, her heart pounds and she fears the wind inside her will rise and stop her breathing. She now avoids markets and car rides and worries constantly about the next attack. She survived the Khmer Rouge years and has nightmares about them.", point: "The episodes meet **panic attack** criteria and she has a month of worry and avoidance: [[dx:panic-disorder|panic disorder]] with [[dx:agoraphobia|agoraphobia]] to be considered, and [[dx:ptsd|PTSD]] to be assessed given the trauma history, with **khyâl cap** named in the formulation (pp. 873, 875–876; app guidance). The wind explanation is the catastrophic cognition the manual says treatment must address (p. 872)." }
          ]
        },
        {
          id: "s24-kufungisisa",
          title: "Kufungisisa (thinking too much)",
          pages: "876",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "876", items: [
              ["Context and type", "“Thinking too much” in **Shona**; for the Shona of **Zimbabwe** it is both an **idiom of distress** and a **cultural explanation**."],
              ["As an explanation", "Considered **causative** of anxiety, depression and somatic problems (“my heart hurts because I think so much”)."],
              ["As an idiom", "Signals **interpersonal and social difficulties**: marital problems, no money to care for the children, unemployment."],
              ["Content", "**Ruminating** on upsetting thoughts, especially **worries**, including worry about chronic physical illness such as **HIV**-related disorders."],
              ["Associations", "Anxiety symptoms, excessive worry, panic attacks, depressive symptoms, irritability and PTSD; in a random community sample, **two-thirds** of the cases flagged by a general psychopathology measure included this complaint."]
            ] },
            { type: "defs", title: "Related concepts and conditions (p. 876)", items: [
              ["Other cultural contexts", "“Thinking too much” is a common idiom and explanation across many countries and groups (Africa, Asia, the Caribbean and Latin America, the Middle East, indigenous groups), with important **heterogeneity** across and within contexts. It is a key part of **brain fag** in Nigeria, where excessive **study** is thought to damage the brain, with **heat or crawling sensations in the head**. Cross-culturally it usually refers to **ruminative, intrusive or anxious** thoughts, sometimes about a single concern or past trauma, sometimes about many current worries; in some contexts it is believed to lead to more severe disorder, psychosis, suicidal thoughts or death."],
              ["Related DSM-5-TR conditions", "[[dx:mdd|Major depressive disorder]], [[dx:pdd|persistent depressive disorder]], [[dx:gad|generalized anxiety disorder]], [[dx:ptsd|posttraumatic stress disorder]], [[dx:ocd|obsessive-compulsive disorder]], [[dx:pgd|prolonged grief disorder]]."]
            ] },
            { type: "callout", kind: "pearl", title: "The manual’s example of an idiom that is also an explanation", text: "Kufungisisa is the clearest illustration of the third key feature (one term, several types; p. 872): the same phrase names **what the person feels** and **why they think they feel it** (p. 876). It is also the manual’s example, on p. 874, of a disorder being **attributed** to an idiom: PTSD and kufungisisa." },
            { type: "callout", kind: "culture", title: "“Masyadong nag-iisip” (outside the DSM; app guidance)", text: "“Thinking too much” has close Tagalog cousins: *masyadong nag-iisip*, *sobrang pag-iisip*, *iniisip nang iniisip*. They are idioms, not diagnoses, and they cover the same range the manual describes for kufungisisa: worry, grief, money troubles, and sometimes a depressive or anxiety disorder underneath. Ask what the person thinks the thinking is doing to them; that is the explanation half of the concept." }
          ]
        },
        {
          id: "s24-maladi-dyab",
          title: "Maladi dyab (sent sickness)",
          pages: "876–877",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "876–877", items: [
              ["Context and type", "**Maladi dyab** or **maladi satan** (“devil” or “Satan illness,” also “sent sickness”): a **cultural explanation** used in **Haitian** communities for all sorts of medical and psychiatric disorders, for other bad experiences, and for problems in functioning."],
              ["The model", "**Envy and malice** lead people to harm their enemies by having **sorcerers send illnesses**: psychosis, depression, social or academic failure, inability to carry out daily activities. The sicknesses have names by the way they are sent (ekspedisyon, mòvè zespri, kout poud)."],
              ["Who is attacked", "Visible **success** (a new job, an expensive purchase) is thought to provoke envy; one person’s gain is another’s loss, so success makes a person vulnerable. The **attractive, intelligent or wealthy** are seen as especially at risk, and even **healthy young children** can be targets."],
              ["How the label is assigned", "Depends more on **mode of onset**, **social status** and **which treatment works** than on the symptoms themselves; **acute onset** of new symptoms or an **abrupt behavioral change** raises suspicion of a spiritual attack."]
            ] },
            { type: "defs", title: "Related concepts and conditions (p. 877)", items: [
              ["Other cultural contexts", "Illness, usually physical, attributed to **envy or social conflict** is common worldwide, often as the **“evil eye”** (*mal de ojo* in Spanish, *mal’occhiu* in Italian)."],
              ["Related DSM-5-TR conditions", "**Subsyndromal affliction** (problems related to the [[dx:social-environment-problem|social environment]], [[dx:educational-problem|educational problems]]) and a **wide range of psychiatric disorders**. The supernatural explanation may lead to **misdiagnosis** of [[dx:delusional-disorder|delusional disorder, persecutory type]], or [[dx:schizophrenia|schizophrenia]]."]
            ] },
            { type: "callout", kind: "caution", title: "A shared belief is not a delusion", text: "The maladi dyab entry warns that the **supernatural explanation may lead to misdiagnosis** of delusional disorder, persecutory type, or schizophrenia (p. 877), a concrete case of the p. 872 warning that unfamiliar presentations can be misread as psychosis (app reading). A belief that a neighbor sent an illness, held within a community where that explanation is ordinary, is a **cultural explanation**, not evidence of a psychotic disorder; delusional disorder and schizophrenia are listed as **misdiagnoses** to avoid, not as related syndromes (p. 877). Section II’s definition of a delusion already excludes beliefs shared by the person’s culture or subculture ([[ch:ch02|Chapter 2]]; app reading)." },
            { type: "callout", kind: "culture", title: "Kulam, barang and usog (outside the DSM; app guidance)", text: "The Philippines has its own sent-sickness explanations: *kulam* and *barang* (sorcery sent by a *mangkukulam* or *mambabarang*, often blamed on envy or a grudge), *usog* or *balis* (illness in a child after a stranger’s greeting or gaze, treated with saliva or *pabulong*), and *gaba* in the Visayas. None is in DSM-5-TR. Handle them exactly as the manual handles maladi dyab: record the Section II disorder if one is met, name the explanation in the formulation, and do not read a culturally shared attribution as a persecutory delusion." },
            { type: "case", title: "Clinical vignette", text: "A 40-year-old Haitian man, seen during a Miami elective, has had 3 weeks of insomnia, weight loss, tearfulness and a conviction that a cousin paid a sorcerer to make him ill after he bought a car. His family shares the explanation and has arranged a healer. He has no hallucinations, his thinking is organized, and the belief is confined to this one event. He feels hopeless and has stopped working.", point: "The explanation is **maladi dyab** (p. 876–877); the belief is culturally shared, so it is not by itself a delusion. The depressive syndrome is assessed on Section II criteria: with 3 weeks of pervasive symptoms and hopelessness, [[dx:mdd|major depressive disorder]] should be considered, with the sent-sickness explanation in the formulation and the healer noted under help seeking (pp. 873, 877; app guidance). Writing “delusional disorder” here would be the misdiagnosis the manual warns against (p. 877)." }
          ]
        },
        {
          id: "s24-nervios",
          title: "Nervios",
          pages: "877",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "877", items: [
              ["Context and type", "“Nerves”: in **Latinx** cultural contexts of the United States and Latin America, a common **idiom of distress** that doubles as a **causal explanation**."],
              ["Meaning", "A general state of **vulnerability** to stressful life experiences and difficult circumstances; covers a wide range of emotional distress, somatic disturbance and inability to function."],
              ["Common symptoms", "**Headaches and “brain aches”** (occipital neck tension), irritability, gastrointestinal upset, sleep difficulty, nervousness, easy tearfulness, poor concentration, trembling, tingling, and **mareos** (dizziness with occasional vertigo-like exacerbations)."],
              ["Range", "From **no mental disorder** at all to pictures that look like **adjustment, anxiety, depressive, dissociative, somatic symptom or psychotic** disorders."],
              ["As an explanation", "For many forms of psychological distress, especially those involving **weakness, enervation and anxiety**; refers literally to the anatomical nerves, with regional variation."],
              ["Puerto Rican forms", "**“Being nervous since childhood”**, more a **trait**, which may precede **social anxiety disorder**; and **“being ill with nerves”**, closer to psychiatric problems, especially **dissociation and depression**."]
            ] },
            { type: "defs", title: "Related concepts and conditions (p. 877)", items: [
              ["Other cultural contexts", "**Nevra** (Greek North Americans), **nierbi** (Sicilian North Americans) and **“nerves”** (White communities of Appalachia and Newfoundland); among South Asians the related idiom and explanation is **“tension.”**"],
              ["Related DSM-5-TR conditions", "[[dx:mdd|Major depressive disorder]], [[dx:pdd|persistent depressive disorder]], [[dx:gad|generalized anxiety disorder]], [[dx:social-anxiety|social anxiety disorder]], [[dx:other-specified-dissociative|other specified]] or [[dx:unspecified-dissociative|unspecified dissociative disorder]], [[dx:ssd|somatic symptom disorder]], [[dx:schizophrenia|schizophrenia]]."]
            ] },
            { type: "compare", title: "Nervios versus ataque de nervios (pp. 874, 877; app comparison)", items: [
              { title: "Nervios", color: "mech", points: ["A **state**: chronic vulnerability and a cluster of everyday symptoms.", "An **idiom and explanation**.", "Spans no disorder to psychotic-looking presentations.", "“Nervous since childhood” is trait-like."] },
              { title: "Ataque de nervios", color: "guide", points: ["An **event**: an acute paroxysm with shouting, crying, aggression, dissociation.", "A **syndrome** (and an idiom for any fit).", "Usually follows a family stressor.", "Overlaps with panic, dissociative and functional neurological presentations."] }
            ] },
            { type: "callout", kind: "culture", title: "Nerbyos (outside the DSM; app guidance)", text: "Tagalog *nerbyos* (“nerves”) behaves much like nervios: a word for shakiness, palpitations, poor sleep and worry that ranges from ordinary stress to a panic or depressive disorder. Treat it as an **idiom**, ask what the person means by it and what they think causes it, and assess against Section II. Related everyday Philippine idioms include *stress*, *sumpong* (a spell of moodiness or irritability) and *tampo* (hurt withdrawal after a slight); none is in the manual." },
            { type: "case", title: "Clinical vignette", text: "A 55-year-old Mexican-American woman in a Texas clinic says she has “had nerves all my life”: trembling, tingling hands, headaches at the back of the neck, poor sleep and mareos, worse since her son was deported. Most days for 3 months she has been worried about everything, restless, irritable, tired and unable to concentrate. She has never had an attack of screaming or losing control.", point: "**Nervios** is the idiom and the explanation (p. 877). Six months of excessive, hard-to-control worry with restlessness, fatigue, irritability, poor concentration and sleep disturbance would meet [[dx:gad|generalized anxiety disorder]]; at 3 months, an [[dx:other-specified-anxiety|other specified anxiety disorder]] or [[dx:adjustment|adjustment disorder]] is considered, with the deportation stressor in the formulation (pp. 873, 877; Chapter 5; app guidance). The absence of paroxysms separates it from an ataque (p. 874)." }
          ]
        },
        {
          id: "s24-shenjing",
          title: "Shenjing shuairuo",
          pages: "877–879",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "877–878", items: [
              ["Context and type", "“Weakness of the nervous system” in Mandarin Chinese: a **cultural syndrome** that blends categories of **Traditional Chinese Medicine** with the Western construct of **neurasthenia**."],
              ["The CCMD definition", "In the **CCMD-2-R** (the second, revised Chinese Classification of Mental Disorders) it was defined as **three of five symptom clusters**: **weakness** (mental fatigue), **emotions** (feeling vexed), **excitement** (increased recollections), **nervous pain** (headache) and **sleep** (insomnia). **Fan nao** (feeling vexed) is irritability blended with worry, and distress about conflicting thoughts and wishes that go unmet."],
              ["Classification history", "**CCMD-3** kept it as a **somatoform diagnosis of exclusion**; China adopted **ICD-10** as its official classification in **2011**, displacing the CCMD; ICD-10 includes neurasthenia, **ICD-11 does not**."],
              ["Current use", "Has **fallen sharply**; in urban areas at least, idioms of **depression and anxiety** have taken its place; clinicians may still invoke it with traditional patients to **ease communication and limit stigma**."],
              ["Precipitants and theory", "Work or family stressors, **loss of face** (mianzi, lianzi), an acute sense of **failure** (academic); related to traditional **weakness** (xu) and imbalance from depletion of **qi** after overstrain or stagnation of qi from worry; channels (jing) carrying vital forces (shen) become dysregulated by social stressors such as an unchangeable, frustrating situation."],
              ["Relation to DSM", "Associated with **mood, anxiety and somatic symptom** disorders; in Chinese medical clinics **up to 45%** of patients with shenjing shuairuo meet criteria for **no DSM-IV disorder**."]
            ] },
            { type: "defs", title: "Related concepts and conditions (p. 879)", items: [
              ["Other cultural contexts", "Neurasthenia-spectrum idioms and syndromes in India (**ashaktapanna**), Mongolia (**yadargaa**) and Japan (**shinkei-suijaku**); **brain fag**, **burnout syndrome** and **chronic fatigue syndrome** are closely related."],
              ["Related DSM-5-TR conditions", "[[dx:mdd|Major depressive disorder]], [[dx:pdd|persistent depressive disorder]], [[dx:gad|generalized anxiety disorder]], [[dx:ssd|somatic symptom disorder]], [[dx:social-anxiety|social anxiety disorder]], [[dx:specific-phobia|specific phobia]], [[dx:ptsd|posttraumatic stress disorder]]."]
            ] },
            { type: "callout", kind: "pearl", title: "The concept with a classification history", text: "Shenjing shuairuo is the only example given a **symptom-count definition** in another classification (three of five clusters, CCMD-2-R; p. 877) and the only one whose decline the manual narrates: CCMD-3, then ICD-10 in 2011, then ICD-11 without neurasthenia (p. 878). The 45% figure (p. 878) is the chapter’s strongest illustration of the second key feature (app reading): concepts cover presentations that meet **no** DSM criteria (p. 872)." },
            { type: "case", title: "Clinical vignette", text: "A 47-year-old Chinese-Filipino shop owner in Binondo describes 5 months of mental exhaustion, headaches, poor sleep and feeling “vexed” after a business failure that cost him face in his family. He frames it as weak nerves and has been taking tonics for qi. He denies pervasive sadness or anhedonia but worries most of the day about debts and his health and feels on edge.", point: "**Shenjing shuairuo** as the person understands it (pp. 877–878). On Section II criteria the worry, restlessness, fatigue, poor sleep and headaches over 5 months point to [[dx:gad|generalized anxiety disorder]] once 6 months are reached, with [[dx:ssd|somatic symptom disorder]] and a depressive disorder in the differential; the neurasthenia framing, the loss of face and the tonics go in the formulation (pp. 873, 877–878; app guidance)." }
          ]
        },
        {
          id: "s24-susto",
          title: "Susto (fright)",
          pages: "879",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "879", items: [
              ["Context and type", "“Fright”: a **cultural explanation** for distress and misfortune in some **Latinx** cultural contexts in North, Central and South America; **not** recognized as an illness category among Latinx from the **Caribbean**."],
              ["The model", "A **frightening event** causes the **soul to leave the body**, producing unhappiness, sickness and difficulty in key social roles."],
              ["Timing", "Symptoms can appear **days to years** after the fright; in extreme cases susto may **result in death**."],
              ["Symptoms", "No defining symptoms. Often reported: appetite disturbance, too little or too much sleep, troubled sleep or dreams, sadness, low self-worth or a sense of dirtiness, interpersonal sensitivity, lack of motivation; somatic: muscle aches, cold extremities, pallor, headache, stomachache, diarrhea."],
              ["Precipitants", "Natural phenomena, animals, interpersonal situations, supernatural agents, among others."],
              ["Three syndromic types", "Three types of susto (**cibih** in Zapotec), each mapping differently: an **interpersonal** susto (loss, abandonment, not being loved; sadness, poor self-image, suicidal thoughts) is close to **major depressive disorder**; susto after a **traumatic event** that shapes the symptoms and their processing fits **PTSD** better; **recurrent somatic** susto, for which the person consults several practitioners, resembles **somatic symptom disorder**."]
            ] },
            { type: "defs", title: "Related concepts and conditions (p. 879)", items: [
              ["Other cultural contexts", "Similar etiological concepts and symptom patterns worldwide; in the Andes susto is **espanto**. **Soul loss** conditions in South and Southeast Asia share features: after a fright the person is thought to lose the soul, a piece of it, or one of many souls, which leaves them vulnerable to other distress."],
              ["Related DSM-5-TR conditions", "[[dx:mdd|Major depressive disorder]], [[dx:ptsd|posttraumatic stress disorder]], [[dx:other-specified-trauma|other specified]] or [[dx:unspecified-trauma|unspecified trauma- and stressor-related disorder]], [[dx:ssd|somatic symptom disorder]]."]
            ] },
            { type: "table", caption: "The three types of susto and where they point (p. 879)", head: ["Type", "Picture", "Closest DSM-5-TR disorder"], rows: [
              ["Interpersonal", "Loss, abandonment, feeling unloved; sadness, poor self-image, suicidal thoughts", "Major depressive disorder"],
              ["After trauma", "A traumatic fright shapes the symptoms and the emotional processing of the event", "Posttraumatic stress disorder"],
              ["Somatic", "Recurrent bodily symptoms; help sought from several practitioners", "Somatic symptom disorder"]
            ] },
            { type: "callout", kind: "exam", title: "Geography matters (app guidance)", text: "Two details are testable: susto is **not** recognized among **Caribbean** Latinx (p. 879), while ataque de nervios is described across Latinx cultural contexts, with related concepts in Haiti and the West Indies and Caribbean (p. 874). A vignette set in the Dominican Republic or Puerto Rico that invokes susto is signaling the wrong concept." },
            { type: "case", title: "Clinical vignette", text: "A 30-year-old Guatemalan farm worker, seen at a California clinic during an elective, has had 4 months of poor sleep with nightmares, sadness, loss of appetite and the feeling that “something left me” after he nearly drowned in a flood. He startles at rain, avoids the river and feels detached from his family. His mother says it is susto and has arranged a *limpia*.", point: "The explanation is **susto**; the fright and the re-experiencing, avoidance, startle and detachment make the **traumatic** type, so [[dx:ptsd|PTSD]] is the Section II diagnosis to assess, with the soul-loss explanation and the cleansing ritual in the formulation (pp. 873, 879; app guidance). Had the picture been sadness and worthlessness after a bereavement, the interpersonal type would point to [[dx:mdd|major depressive disorder]] (p. 879)." }
          ]
        },
        {
          id: "s24-taijin",
          title: "Taijin kyofusho",
          pages: "879",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "No code: record the DSM-5-TR disorder that is met", pages: "879", items: [
              ["Context and type", "“Interpersonal fear disorder” in Japanese: a **syndrome** in **Japanese** cultural contexts."],
              ["Core", "Anxiety about and **avoidance of interpersonal situations** because of the thought, feeling or conviction that one’s **appearance and actions** are **inadequate or offensive to others**."],
              ["Two forms", "A **sensitive type** (extreme social sensitivity and anxiety about interactions) and an **offensive type** (the main concern is **offending others**)."],
              ["Variants", "**Sekimen-kyofu** (facial blushing), **jiko-shu-kyofu** (offensive body odor), **jiko-shisen-kyofu** (inappropriate gaze, too much or too little eye contact), **shubo-kyofu** (stiff or awkward expression or movements, or body deformity)."],
              ["Breadth", "A **broader** construct than social anxiety disorder in DSM-5: it also takes in presentations with features of **body dysmorphic disorder**, of **olfactory reference syndrome** and of **delusional disorder**. Consider delusional disorder when the concern has a **delusional quality** and responds poorly to reassurance or counterexample."]
            ] },
            { type: "defs", title: "Related concepts and conditions (p. 879)", items: [
              ["Other cultural contexts", "The distinctive symptoms appear in specific contexts and, to a degree, wherever social anxiety is severe. **Taein kong po** in Korea, and other societies that stress the self-conscious maintenance of appropriate behavior in **hierarchical** relationships. An **interdependent self-construal** (the self defined through relatedness and social roles) may be a risk factor across cultures. The **offensive-type** concern is also described in the United States, Australia, Indonesia and New Zealand."],
              ["Related DSM-5-TR conditions", "[[dx:social-anxiety|Social anxiety disorder]], [[dx:bdd|body dysmorphic disorder]], [[dx:delusional-disorder|delusional disorder]], [[dx:ocd|obsessive-compulsive disorder]], **olfactory reference syndrome** (a type of [[dx:other-specified-ocrd|other specified obsessive-compulsive and related disorder]]), which relates specifically to the **jikoshu-kyofu** variant and is seen in cultures outside Japan."]
            ] },
            { type: "compare", title: "Which Section II diagnosis a taijin kyofusho presentation reaches (p. 879; Chapters 5–6; app comparison)", items: [
              { title: "Fear of being judged or of offending; insight kept", color: "mech", points: ["[[dx:social-anxiety|Social anxiety disorder]]: Chapter 5 already includes fear of offending others among the feared outcomes (app note).", "Sensitive type and most offensive-type presentations land here."] },
              { title: "Fixed concern about appearance, odor or gaze", color: "guide", points: ["Appearance defect → [[dx:bdd|body dysmorphic disorder]] (shubo-kyofu).", "Body odor → olfactory reference syndrome, an other specified OCRD (jiko-shu-kyofu).", "Delusional conviction that resists counterexample → [[dx:delusional-disorder|delusional disorder]] (p. 879)."] }
            ] },
            { type: "case", title: "Clinical vignette", text: "A 26-year-old Japanese engineer posted to a Clark electronics plant avoids meetings and lunch with colleagues because he is sure his eye contact is wrong and makes others uncomfortable; he has begun to believe his body gives off an odor that offends the people beside him, though no one has said so and he showers several times a day. He concedes the odor “might” be imagined.", point: "**Taijin kyofusho**, offensive type, with the gaze and odor variants (p. 879). Because he can still entertain doubt, [[dx:social-anxiety|social anxiety disorder]] and olfactory reference syndrome (an other specified OCRD) are the Section II candidates; if the odor conviction became unshakable, [[dx:delusional-disorder|delusional disorder]] would be considered (p. 879). The concept and its variant names go in the formulation (p. 873; app guidance)." }
          ]
        }
      ]
    },
    {
      title: "Using the chapter",
      sections: [
        {
          id: "s24-philippines",
          title: "Philippine concepts of distress (outside the DSM)",
          pages: "app guidance",
          blocks: [
            { type: "callout", kind: "caution", title: "Everything in this section is outside DSM-5-TR", text: "The manual’s ten examples come from Latinx, South Asian, Japanese, Cambodian, Shona, Haitian and Chinese contexts; it names no Philippine concept. This section applies the manual’s **method** (idiom, explanation or syndrome; assess against Section II; name the concept in the formulation; p. 873) to concepts residents will meet in Bataan and elsewhere in the country. The descriptions are the app’s summaries of the Philippine literature, labeled app guidance; verify locally and ask the patient what the word means to them." },
            { type: "table", caption: "Common Philippine concepts, sorted by the manual’s three types (outside the DSM; app guidance)", head: ["Concept", "Type", "What it usually refers to", "Section II conditions to assess"], rows: [
              ["Nerbyos", "Idiom and explanation", "“Nerves”: shakiness, palpitations, worry, poor sleep; from ordinary stress to a disorder", "Anxiety, panic, depressive and somatic symptom disorders; no disorder"],
              ["Masyadong nag-iisip / sobrang pag-iisip", "Idiom and explanation", "“Thinking too much,” as in kufungisisa; worry, grief, money problems", "GAD, depressive disorders, PTSD, prolonged grief disorder"],
              ["Pasma", "Explanation (and a syndrome in lay use)", "Tremor, sweating, numbness or weakness attributed to hot–cold exposure (washing after ironing, cold water on tired hands)", "Anxiety disorders, somatic symptom disorder, medical causes first"],
              ["Usog / balis", "Explanation", "A child’s fever, colic or fussiness after a stranger’s greeting or gaze; treated with the greeter’s saliva or *pabulong*", "Pediatric medical assessment; parent-child relational problem if that is the focus"],
              ["Kulam / barang / gaba", "Explanation", "Sorcery or a curse sent out of envy or a grudge, close to maladi dyab", "Any disorder; do not mistake the shared belief for a persecutory delusion"],
              ["Sapi", "Explanation and syndrome", "Possession by a spirit, sometimes with trance, altered voice or amnesia", "Dissociative disorders (possession-form DID, other specified dissociative disorder), psychotic disorders, seizures"],
              ["Bangungot", "Explanation", "Death in sleep after a heavy meal, attributed to a nightmare or a sitting spirit (the *batibat*); overlaps with sudden unexplained nocturnal death", "Not a psychiatric presentation; a cardiology referral in survivors or relatives"],
              ["Lihi", "Explanation", "Pregnancy cravings and aversions thought to shape the child", "Normative; no disorder"],
              ["Hiya, tampo, sumpong", "Idioms", "Shame or face; hurt withdrawal after a slight; a spell of moodiness", "Usually normative; relational problems; depressive or personality presentations when persistent"],
              ["Bahala na", "Idiom (coping)", "Leaving the outcome to God or fate; can be resilience or fatalism", "A coping style to ask about in CFI questions 11 and 14, not a symptom"]
            ] },
            { type: "p", text: "Help seeking in the Philippines commonly runs through the **family**, **prayer and the church**, the *albularyo* or *manghihilot*, faith healers and *barangay* health workers before a psychiatrist is seen, which is exactly the sequence CFI questions 12–13 are built to elicit (p. 866; app guidance). **Stigma** (“baliw,” “sira ang ulo”) and cost are the usual barriers the manual’s question 13 anticipates (p. 866). The **Mental Health Act (RA 11036, 2018)** guarantees access and confidentiality and is the legal frame for referral; the **NCMH Crisis Hotline** (1553, toll-free from landlines, or 1800-1888-1553; 0919-057-1553 Smart/TNT; 0917-899-8727 and 0966-351-4518 Globe/TM, as published in September 2026) is the national line to give out, after confirming the current numbers (app guidance; outside the DSM)." },
            { type: "callout", kind: "pearl", title: "Amok is the historical Philippine entry (app note)", text: "DSM-IV’s glossary of culture-bound syndromes listed **amok** (a dissociative outburst of violence after a brooding period, described in Malaysia, the Philippines and elsewhere). DSM-5 and DSM-5-TR dropped it with the rest of that glossary; the current chapter has no Philippine example (app note on the DSM-IV appendix)." }
          ]
        },
        {
          id: "s24-exam",
          title: "Exam strategy and the text revision",
          pages: "859–879",
          blocks: [
            { type: "update", kind: "tr", title: "What the text revision changed (app comparison)", text: "The app’s own comparison with DSM-5 (2013): the chapter was titled **“Cultural Formulation”** and the nine concepts sat in an appendix, the **Glossary of Cultural Concepts of Distress** (ataque de nervios, dhat syndrome, khyâl cap, kufungisisa, **maladi moun**, nervios, shenjing shuairuo, susto, taijin kyofusho). DSM-5-TR renamed the chapter **“Culture and Psychiatric Diagnosis,”** added the **Key Terms** section (culture, race, ethnicity, p. 860), expanded the Outline (p. 861), moved the examples into the chapter as **ten** worked examples, added **hikikomori**, and renamed maladi moun **maladi dyab** (app comparison; verify against the two editions)." },
            { type: "table", caption: "The ten examples at a glance (pp. 874–879; app summary)", head: ["Concept", "Context", "Type", "First disorders the manual lists"], rows: [
              ["Ataque de nervios", "Latinx", "Syndrome (also an idiom)", "Panic attack, panic disorder, dissociative, FND, IED"],
              ["Dhat syndrome", "South Asia", "Explanation", "MDD, PDD, GAD, SSD, IAD, sexual dysfunctions"],
              ["Hikikomori", "Japan", "Syndrome", "Social anxiety, MDD, GAD, PTSD, ASD, schizoid and avoidant PD, psychosis"],
              ["Khyâl cap", "Cambodia", "Syndrome", "Panic attack, panic disorder, GAD, agoraphobia, PTSD, IAD"],
              ["Kufungisisa", "Shona, Zimbabwe", "Idiom and explanation", "MDD, PDD, GAD, PTSD, OCD, prolonged grief disorder"],
              ["Maladi dyab", "Haiti", "Explanation", "Subsyndromal problems; misdiagnosis as delusional disorder or schizophrenia"],
              ["Nervios", "Latinx", "Idiom and explanation", "MDD, PDD, GAD, social anxiety, dissociative, SSD, schizophrenia"],
              ["Shenjing shuairuo", "China", "Syndrome", "MDD, PDD, GAD, SSD, social anxiety, specific phobia, PTSD"],
              ["Susto", "Latinx (not Caribbean)", "Explanation", "MDD, PTSD, other specified trauma- and stressor-related, SSD"],
              ["Taijin kyofusho", "Japan", "Syndrome", "Social anxiety, BDD, delusional disorder, OCD, olfactory reference syndrome"]
            ] },
            { type: "list", title: "Numbers and names the exam asks for (app guidance)", items: [
              "**3** key terms; **5** Outline categories; **3** CFI components; **16** core questions in **4** domains (1–3, 4–10, 11–13, 14–16); **17** informant questions; **7** situations where the CFI helps; **3** types of concept; **4** key features; **7** headed reasons; **10** examples.",
              "Figures: ataque **7%–15%** of U.S. Latinx adults, **4%–9%** of youth (p. 874); dhat **64%** (Indian psychiatric clinics, sexual complaints) and **30%** (Pakistani general clinics) (p. 875); hikikomori **6 months** (Japanese ministry guideline, 2010; p. 875); kufungisisa in **two-thirds** of the cases a general psychopathology measure identified in a random community sample (p. 876); shenjing shuairuo **up to 45%** with no DSM-IV disorder (p. 878); CCMD-2-R **three of five** clusters (p. 877); China adopted ICD-10 in **2011** (p. 878).",
              "Traps: “culture-bound syndrome” is the retired term (pp. 871–872); dhat is an **explanation** despite its name (p. 874); blacking out and falling out are not substance blackouts (p. 874); maladi dyab is a **misdiagnosis** risk for delusional disorder and schizophrenia, not a psychotic syndrome (p. 877); susto is not Caribbean (p. 879); taijin kyofusho is **broader** than social anxiety disorder (p. 879); the Informant version can **replace** the core CFI in children, florid psychosis and cognitive impairment (p. 868).",
              "Recording: specified disorder or **other specified**; the concept goes in the **formulation**; treatment may be needed without a diagnosis; Chapter 22 codes for acculturation, parent-child and religious or spiritual problems (p. 873)."
            ] },
            { type: "callout", kind: "exam", title: "How to answer a cultural vignette (app guidance)", text: "1) Name the concept and its **type**. 2) Ask whether the belief is **shared** by the person’s group (then it is not a delusion). 3) Run the **Section II criteria** for the disorders the manual lists. 4) Choose: the disorder met, an other specified category, a Chapter 22 code, or normative distress. 5) Put the concept in the **formulation** and plan around the explanatory model (p. 873). An option that makes the concept itself the diagnosis is always wrong." },
            { type: "callout", kind: "pearl", title: "Where this chapter connects", text: "Section I’s text on racism and discrimination in diagnosis ([[ch:ch01|Chapter 1]]); the culture-related features in every Section II disorder; the Chapter 22 Z codes ([[ch:ch22|Chapter 22]]); the Chapter 25 proposal for [[dx:internet-gaming-disorder|Internet gaming disorder]] that the hikikomori entry cites ([[ch:ch25|Chapter 25]]); and the Section III assessment measures, which include a clinician-rated severity scale that cultural assessment should inform (pp. 841–858; app note)." }
          ]
        }
      ]
    }
  ]
});
