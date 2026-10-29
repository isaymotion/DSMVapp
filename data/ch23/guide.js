/* Chapter 23 study guide. Source: DSM-5-TR Section III, Assessment Measures (pp. 841–857; p. 858 is blank).
   Written in the app’s own words from the manual, with page references. Nothing in this chapter is a diagnosis or a
   code: the three printed instruments (the DSM-5 Level 1 Cross-Cutting Symptom Measure in its adult and parent/guardian
   versions, the Clinician-Rated Dimensions of Psychosis Symptom Severity, and the WHODAS 2.0) are assessment tools whose
   results inform the diagnosis and the plan. The forms themselves are copyrighted (APA; WHO for the WHODAS): the guide
   DESCRIBES what each item asks and how each is scored and never reprints an item, an anchor or an instruction. The
   condensed psychosis-severity rater already in the app’s Case tools is linked, not repeated. Research findings beyond the
   text, measurement-based-care evidence, ICD-11, Philippine context and exam strategy are outside the DSM and labeled. */
SP.add("ch23", "guide", {
  intro: "The first Section III chapter answers a practical question: **how do you measure what the criteria only name?** The manual’s case for **dimensional** assessment is that categories alone miss severity, subthreshold illness and comorbidity (p. 841). It then prints three tools and tells you how to use them (p. 842). The **DSM-5 Level 1 Cross-Cutting Symptom Measure** is a “review of mental systems”: **23 questions over 13 domains** for adults, **25 questions over 12 domains** for a parent or guardian of a child aged 6–17, each asking about the **past 2 weeks**, with **thresholds** that send you to a **Level 2** measure or to further questions (pp. 843–850). The **Clinician-Rated Dimensions of Psychosis Symptom Severity** rates **eight dimensions** on a **0–4** scale for the **past 7 days** and is the instrument behind the “specify current severity” line in Chapter 2 (pp. 851–853; Ch 2 p. 109). The **WHODAS 2.0** measures **disability** across **six domains** and **36 items** over the **past 30 days**, with WHO’s scoring and the text revision’s own advice to use **average scores** (pp. 854–857). The [[helper:measures|measures helper]] takes you from a clinical purpose to the right form, its threshold and the next step.",
  objectives: [
    "State the manual’s reasons for adding **dimensional** measures to categorical diagnosis and the **three kinds** of measure Section III offers (pp. 841–842).",
    "Give the structure of the adult Level 1 measure: **23 items, 13 domains, 1–3 items each, past 2 weeks, 0–4 scale**, and the **mild (2)** threshold with its three **slight (1)** exceptions (pp. 843–846).",
    "Give the structure of the parent/guardian version: **25 items, 12 domains, ages 6–17**, 19 items on the 0–4 scale and six answered **Yes/No/Don’t Know**, the **slight** exceptions for inattention and psychosis, and what a **“Don’t Know”** should trigger (pp. 844–846).",
    "Name the Level 2 measures that exist for each domain, the domains that have **none**, and where everything not printed lives (**www.psychiatry.org/dsm5**) (pp. 844–846).",
    "Describe the Clinician-Rated Dimensions of Psychosis Symptom Severity: **8 items, 0–4, clinician-rated, worst in the past 7 days**, the three dimensions that go beyond the five primary symptoms, and how it serves the Chapter 2 severity specifier (pp. 851–853; Ch 2).",
    "Describe the WHODAS 2.0 and compute its scores: **36 items, 6 domains, past 30 days**; WHO’s **simple** and **IRT-based** scoring; DSM-5-TR’s **average domain** and **average general disability** scores; the **missing-data** rule (pp. 854–855).",
    "Apply the shared rules of **frequency of use** and **same informant**, and explain why a threshold score is a prompt for inquiry, never a diagnosis (pp. 846, 851, 855)."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s23-map",
          title: "What the chapter is for",
          pages: "841–842",
          blocks: [
            { type: "p", text: "Section III opens with the tools rather than the proposed disorders. The chapter argues that a **dimensional** layer should sit alongside the categorical diagnoses, because categories by themselves do not capture how severe a person’s symptoms are, do not record symptoms that fall outside the diagnosis, and leave out people who are **severe and disabled yet meet no criteria set** (p. 841). It then prints three instruments with their **clinician instructions, scoring and interpretation**: the **Level 1 Cross-Cutting Symptom Measure** (adult self-rated and parent/guardian-rated versions), the **Clinician-Rated Dimensions of Psychosis Symptom Severity**, and the **WHODAS 2.0** (p. 842). The **child-rated** version of Level 1 is not printed because it so closely resembles the parent version; it, the Level 2 measures and the disorder-specific severity measures are online at **www.psychiatry.org/dsm5** (p. 842)." },
            { type: "defs", title: "The chapter in one table (pp. 841–857)", items: [
              ["Why dimensions (p. 841)", "Categories fail to show **zones of rarity** between disorders, need **intermediate** categories such as schizoaffective disorder, produce **high comorbidity** and frequent **other or unspecified** diagnoses, add little to the search for **antecedent validators**, and lack **treatment specificity**."],
              ["Cross-cutting measures (pp. 841–850)", "A **review of mental systems** across diagnoses: **Level 1** screens 13 (adult) or 12 (child) domains; **Level 2** looks deeper at a flagged domain."],
              ["Severity measures (p. 842)", "**Disorder-specific** scales that track the criteria of one diagnosis; the printed example is the psychosis measure (pp. 851–853)."],
              ["Disability (pp. 854–857)", "The **WHODAS 2.0**, WHO’s measure of functioning in six areas, usable in any medical condition."]
            ] },
            { type: "callout", kind: "key", title: "A measure is a prompt, not a verdict", text: "Every scoring section in the chapter ends the same way: a high or threshold score **may** indicate a problem that **warrants further assessment**, and **clinical judgment should guide decision making** (pp. 846, 851, 855). No score in this chapter makes a diagnosis, and none is recorded on the diagnosis line; the result belongs in the formulation and the progress note (app guidance)." },
            { type: "callout", kind: "exam", title: "How this chapter is examined (app guidance)", text: "Expect **numbers** (23/13, 25/12, 8, 36/6; 2 weeks, 7 days, 30 days; 0–4; 180, 144, 0–100), **thresholds** (mild = 2 for most domains; slight = 1 for substance use, suicidal ideation and psychosis in adults, and for inattention and psychosis in children), **which Level 2 instrument** goes with which domain, the **GAF → WHODAS** replacement (Section I, p. 16) and the WHODAS **missing-data** rule. The forms are copyrighted: learn what each item covers, not its wording (app guidance)." }
          ]
        },
        {
          id: "s23-dimensional",
          title: "Why the manual wants dimensions",
          pages: "841",
          blocks: [
            { type: "p", text: "The chapter lists the shortcomings of a purely categorical system (p. 841): disorders do not separate from one another along **natural boundaries** (no “zones of rarity”); the system needs **in-between** categories such as schizoaffective disorder; **comorbidity** is the rule; clinicians lean heavily on **other specified and unspecified** diagnoses; the categories have been of **limited help in finding antecedent validators** (causes and risk markers unique to one disorder); and treatments are **not specific** to a category. A dimensional approach, combined with the categories, lets a clinician record **how severe** each symptom is (including symptoms that are associated with a disorder but not part of its criteria), measured by **intensity, duration and effect on functioning**, and it brings into view people who are **severe and disabling but below threshold** (p. 841)." },
            { type: "p", text: "The manual is candid about where this is heading: as pathophysiology, neurocircuitry and gene–environment research matures, **more objective measures** are expected to enter the criteria sets; until then the dimensional approach rests mainly on the person’s **own report of symptoms**, read with the clinician’s judgment, and current evaluation guidelines treat it as a step toward better diagnosis (p. 841)." },
            { type: "callout", kind: "analogy", title: "The review of systems", text: "The manual’s own image: a general medical **review of systems** runs through organ systems to catch problems the patient did not come in about. The cross-cutting measure does the same for **mental systems**, drawing attention to domains of mental health and functioning that matter for care even when they are not the presenting complaint (p. 841; Section I p. 15 uses the same phrase)." },
            { type: "callout", kind: "pearl", title: "Measurement-based care, defined", text: "The text defines **measurement-based care** as the process in which standardized tools are given and their results used to **track progress over time** and guide a **more precise plan** (pp. 841–842). The cross-cutting measures are meant for **both** the initial interview **and** follow-up, and the chapter says they have been named as components of psychiatric assessment in **clinical practice guidelines** (p. 842)." }
          ]
        },
        {
          id: "s23-three-kinds",
          title: "Three kinds of measure",
          pages: "841–842",
          blocks: [
            { type: "compare", title: "Cross-cutting, severity and disability measures (pp. 841–842)", items: [
              { title: "Cross-cutting symptom measures", color: "guide", points: [
                "Cut **across diagnoses** and age groups; a review of mental systems (p. 841).",
                "**Level 1**: 1–3 questions for each of **13 adult** domains (self-rated) or **12 child** domains (parent-rated for 6–17; child-rated for 11–17) (p. 841).",
                "**Level 2**: a deeper look at one flagged domain, for example depression, anxiety, mania, anger, irritability or somatic symptoms (p. 841).",
                "For the first visit **and** follow-up: the backbone of measurement-based care (pp. 841–842)."
              ] },
              { title: "Severity measures", color: "mech", points: [
                "**Disorder-specific**, following the criteria of one diagnosis closely (p. 842).",
                "Given to people who **have** the diagnosis or a clinically significant syndrome **short of** full criteria (p. 842).",
                "Some are **self-rated**, others **clinician-rated** from observation (p. 842).",
                "Operationalize symptom **frequency, intensity or duration**, overall severity or symptom type for many, not all, diagnoses; the text names GAD, social anxiety disorder, psychotic disorders, PTSD, autism spectrum disorder and social (pragmatic) communication disorder (p. 842)."
              ] },
              { title: "Disability: the WHODAS 2.0", color: "clin", points: [
                "Developed by **WHO** for **any medical condition**, not only mental disorders (p. 842).",
                "**Six areas**: understanding and communicating; getting around; self-care; getting along with people; life activities (household, work or school); participation in society (p. 842).",
                "Matches the concepts of the WHO **International Classification of Functioning, Disability and Health (ICF)** (p. 842).",
                "Tracks functioning over time; most DSM criteria sets require **clinically significant distress or impairment**, so functioning is part of diagnosis itself (p. 842)."
              ] }
            ] },
            { type: "p", text: "Why the manual cares so much about functioning: people with mental disorders are **more likely to be severely impaired** (in communication and understanding, getting along, daily activities at work, home or school, and social participation) than people with chronic medical conditions; many seek help **because** of the functional impact; impairment carries **prognostic** weight across diagnoses; and **residual impairment after symptoms settle** raises the risk of recurrence or relapse in conditions such as major depressive disorder and the anxiety disorders (p. 842)." },
            { type: "callout", kind: "caution", title: "A severity measure is given to a diagnosed patient, a cross-cutting measure to anyone", text: "The manual’s example makes the order clear: the psychosis severity dimensions are used in people whose symptoms **meet criteria for schizophrenia** (p. 842). The Level 1 measure, by contrast, is a first-visit screen for **everyone** (Section I, p. 15). A common exam confusion is to give a disorder-specific severity scale as a screen (app guidance)." }
          ]
        },
        {
          id: "s23-where",
          title: "Printed, online, and what Section I says about them",
          pages: "842; Section I pp. 15–16, 20",
          blocks: [
            { type: "table", caption: "Printed in the chapter versus online at www.psychiatry.org/dsm5 (p. 842)", head: ["Measure", "Printed", "Online only"], rows: [
              ["Level 1 Cross-Cutting, adult self-rated", "Yes (pp. 847–848)", "Also online"],
              ["Level 1 Cross-Cutting, parent/guardian of child 6–17", "Yes (pp. 849–850)", "Also online"],
              ["Level 1 Cross-Cutting, child-rated 11–17", "No: items, scoring and instructions are close to the parent version (p. 842)", "Yes"],
              ["Level 2 Cross-Cutting measures", "No (named in Tables 1 and 2)", "Yes (pp. 844–846)"],
              ["Disorder-specific severity measures", "Only the psychosis measure (pp. 851–853)", "The rest (p. 842)"],
              ["WHODAS 2.0, 36-item self-administered", "Yes (pp. 856–857)", "The proxy-administered version (p. 854)"]
            ] },
            { type: "defs", title: "Where else the manual mentions these tools (Section I; app cross-references)", items: [
              ["p. 15, “Cross-Cutting Symptom Measures”", "The Level 1 measure is a **review of mental systems** meant to uncover possible disorders, atypical and subsyndromal presentations and coexisting pathology; it is **recommended as an important component of the psychiatric evaluation**, and the **APA Practice Guidelines for the Psychiatric Evaluation of Adults** endorse it as a first step; the three versions are **free online for clinical use**."],
              ["p. 16, “Removal of the DSM-IV Multiaxial System”", "DSM-5 dropped the axes; psychosocial and contextual factors are recorded with **Z codes** (Chapter 22), and the **Global Assessment of Functioning (GAF)** of Axis V was **replaced by the WHODAS**, which is based on the ICF and usable across medicine."],
              ["p. 20, “Clinical Utility”", "Section III measures help build a diagnosis and plan tailored to the person; cross-cutting and severity measures give **quantitative ratings** meant to be taken at the **initial evaluation as a baseline** and repeated to **monitor change**; where cultural dynamics matter, the **Cultural Formulation Interview** ([[ch:ch24|Chapter 24]]) should be used."],
              ["p. 5, preface to DSM-5", "Dimensional measures “in 13 symptom domains” and the WHODAS, replacing the “more limited” GAF, were among the features new to DSM-5."]
            ] },
            { type: "callout", kind: "caution", title: "Copyright: describe, do not reprint (app guidance)", text: "The Level 1 and Level 2 measures are **APA** instruments; the WHODAS 2.0 is a **WHO** instrument whose printed form notes that clinicians may reproduce it for their own patients while any other use, including electronic use, needs WHO’s written permission (p. 857). This guide therefore describes what each item asks and never quotes it. Use the printed pages or the APA site for the forms themselves; the app’s [[page:assess/scale/crdpss|psychosis severity tool]] in Case tools is a condensed rater for bedside use." }
          ]
        }
      ]
    },
    {
      title: "The cross-cutting symptom measures",
      sections: [
        {
          id: "s23-level1-adult",
          title: "Level 1, adult version: 23 questions, 13 domains",
          pages: "843–844",
          blocks: [
            { type: "p", text: "The **DSM-5 Level 1 Cross-Cutting Symptom Measure** can be completed by the **person or by an informant**, and it covers domains that matter **across** diagnoses. It is meant to point the clinician toward **additional areas of inquiry** that may affect treatment and prognosis, and it can be repeated to **track change** (p. 843). The adult version has **23 questions** across **13 domains**, **one to three** questions each; every item asks **how much, or how often,** the person has been bothered by the symptom during the **past 2 weeks** (p. 843). If the person cannot complete it because of **impaired capacity**, for instance in a major neurocognitive disorder, a **knowledgeable adult informant** may answer instead (p. 843)." },
            { type: "table", caption: "The 13 adult domains and how many questions each has (pp. 843–848; counts from the form, items described not quoted)", head: ["Domain", "Items", "What the questions cover"], rows: [
              ["I. Depression", "2", "Loss of interest or pleasure; feeling down or hopeless"],
              ["II. Anger", "1", "Being more irritable or angry than usual"],
              ["III. Mania", "2", "Needing less sleep yet full of energy; starting many projects or taking more risks"],
              ["IV. Anxiety", "3", "Nervousness or worry; panic or fright; avoiding anxiety-provoking situations"],
              ["V. Somatic symptoms", "2", "Unexplained aches and pains; feeling one’s illnesses are not taken seriously"],
              ["VI. Suicidal ideation", "1", "Thoughts of harming oneself"],
              ["VII. Psychosis", "2", "Hearing things others cannot; thought broadcasting or mind reading"],
              ["VIII. Sleep problems", "1", "Sleep problems affecting overall sleep quality"],
              ["IX. Memory", "1", "Trouble with memory or finding one’s way"],
              ["X. Repetitive thoughts and behaviors", "2", "Unwanted intrusive thoughts, urges or images; feeling driven to repeat behaviors or mental acts"],
              ["XI. Dissociation", "1", "Feeling detached from oneself, one’s body, surroundings or memories"],
              ["XII. Personality functioning", "2", "Not knowing who one is or what one wants; not feeling close to others"],
              ["XIII. Substance use", "3", "Heavy drinking days; any tobacco; any non-prescribed or misused medicines or drugs"]
            ] },
            { type: "callout", kind: "pearl", title: "Why the item counts matter", text: "The clinician is asked to look at **each item inside a multi-item domain**, not only the domain’s highest score, to see **which symptom** is the problem (for instance a voice-hearing item versus a thought-broadcasting item in the psychosis domain), especially when no Level 2 measure exists for that domain (p. 845). Knowing that anxiety has three items, psychosis two and suicidal ideation one tells you where that review has work to do (app guidance)." },
            { type: "callout", kind: "key", title: "What the DSM-5 Field Trials found (p. 844)", text: "In adult clinical samples in the **United States and Canada** the measure was **clinically useful** with **good reliability**. When the ratings were **shared with the clinician before the meeting**, patients said the results **helped communication** in the encounter; clinicians in academic centers and routine practice found the measures **useful and feasible** for everyday and specialty care. Beyond the trials, a large U.S. study of **college students who were not seeking treatment** showed **acceptable internal consistency and internal validity** (p. 844). (The research section names the studies and their item-level findings, outside the DSM.)" }
          ]
        },
        {
          id: "s23-table1",
          title: "Table 1: thresholds and the Level 2 measure for each adult domain",
          pages: "844",
          blocks: [
            { type: "table", caption: "Adult Level 1: threshold that prompts further inquiry, and the Level 2 measure available online (Table 1, p. 844)", head: ["Domain", "Threshold", "Level 2 measure (adult)"], rows: [
              ["I. Depression", "**Mild** or greater", "PROMIS Emotional Distress—Depression—Short Form"],
              ["II. Anger", "**Mild** or greater", "PROMIS Emotional Distress—Anger—Short Form"],
              ["III. Mania", "**Mild** or greater", "Altman Self-Rating Mania Scale (ASRM)"],
              ["IV. Anxiety", "**Mild** or greater", "PROMIS Emotional Distress—Anxiety—Short Form"],
              ["V. Somatic symptoms", "**Mild** or greater", "Patient Health Questionnaire–15 (PHQ-15) Somatic Symptom Severity Scale"],
              ["VI. Suicidal ideation", "**Slight** or greater", "**None**"],
              ["VII. Psychosis", "**Slight** or greater", "**None**"],
              ["VIII. Sleep problems", "**Mild** or greater", "PROMIS Sleep Disturbance—Short Form"],
              ["IX. Memory", "**Mild** or greater", "**None**"],
              ["X. Repetitive thoughts and behaviors", "**Mild** or greater", "Florida Obsessive-Compulsive Inventory (FOCI) Severity Scale"],
              ["XI. Dissociation", "**Mild** or greater", "**None**"],
              ["XII. Personality functioning", "**Mild** or greater", "**None**"],
              ["XIII. Substance use", "**Slight** or greater", "Adapted from the NIDA-Modified ASSIST"]
            ] },
            { type: "callout", kind: "key", title: "The three “slight” domains and the five “no Level 2” domains", text: "Adults: the threshold drops to **slight (1)** for **substance use, suicidal ideation and psychosis**, the three domains where even a rare symptom deserves a question (pp. 844–846). Five adult domains have **no Level 2 measure**: **suicidal ideation, psychosis, memory, dissociation and personality functioning**; for these the follow-up is the clinician’s own inquiry (p. 844). Notice the overlap: two of the three slight-threshold domains are also no-Level-2 domains (app observation)." },
            { type: "callout", kind: "pearl", title: "What the Level 2 names tell you (app note, outside the DSM)", text: "Most adult Level 2 measures are **PROMIS** short forms (depression, anger, anxiety, sleep), one is a **mania** self-report (ASRM), one a **somatic** symptom count (PHQ-15), one an **obsessive-compulsive** severity scale (FOCI) and one a **substance** screen adapted from the **NIDA-Modified ASSIST** (p. 844). The APA site lists these same eight adult Level 2 measures as of October 2026 (research notes; verify online before use)." }
          ]
        },
        {
          id: "s23-level1-child",
          title: "Level 1, parent/guardian version: 25 questions, 12 domains, ages 6–17",
          pages: "844–845",
          blocks: [
            { type: "p", text: "The **parent/guardian-rated** version covers children aged **6–17** with **25 questions** across **12 domains**: depression, anger, irritability, mania, anxiety, somatic symptoms, inattention, suicidal ideation or attempt, psychosis, sleep disturbance, repetitive thoughts and behaviors, and substance use (p. 844). Each item asks how much, or how often, the **child** has been bothered during the **past 2 weeks** (p. 844). It too was **clinically useful with good reliability** in pediatric clinical samples in the DSM-5 Field Trials (p. 844). For children aged **11–17** the clinician may **also** have the child complete the **child-rated** version, which is online only (p. 844)." },
            { type: "table", caption: "Table 2 order: the 12 child domains, thresholds and Level 2 measures (p. 845); item counts from the form (pp. 849–850)", head: ["Domain", "Items", "Threshold", "Level 2 measure (parent/guardian of child 6–17)"], rows: [
              ["I. Somatic symptoms", "2", "**Mild** or greater", "PHQ-15 Somatic Symptom Severity Scale"],
              ["II. Sleep problems", "1", "**Mild** or greater", "PROMIS Sleep Disturbance—Short Form"],
              ["III. Inattention", "1", "**Slight** or greater", "Swanson, Nolan, and Pelham, Version IV (SNAP-IV)"],
              ["IV. Depression", "2", "**Mild** or greater", "PROMIS Emotional Distress—Depression—Parent Item Bank"],
              ["V. Anger", "2 shared with VI", "**Mild** or greater", "PROMIS Calibrated Anger Measure—Parent"],
              ["VI. Irritability", "(shared with V)", "**Mild** or greater", "Affective Reactivity Index (ARI)"],
              ["VII. Mania", "2", "**Mild** or greater", "Altman Self-Rating Mania Scale (ASRM)"],
              ["VIII. Anxiety", "3", "**Mild** or greater", "PROMIS Emotional Distress—Anxiety—Parent Item Bank"],
              ["IX. Psychosis", "2", "**Slight** or greater", "**None**"],
              ["X. Repetitive thoughts and behaviors", "4", "**Mild** or greater", "**None**"],
              ["XI. Substance use", "4", "**Yes**; or **Don’t Know**", "Adapted NIDA-modified ASSIST (parent); if Don’t Know, the **child-rated** adapted NIDA-modified ASSIST (11–17)"],
              ["XII. Suicidal ideation / suicide attempts", "2", "**Yes** or **Don’t Know**", "**None**"]
            ] },
            { type: "compare", title: "Adult versus parent/guardian version (pp. 843–846)", items: [
              { title: "Adult self-rated", color: "guide", points: ["**23** items, **13** domains", "All items on the **0–4** scale", "Slight threshold: **substance use, suicidal ideation, psychosis**", "No Level 2: suicidal ideation, psychosis, **memory, dissociation, personality functioning**", "Informant may complete it when capacity is impaired"] },
              { title: "Parent/guardian of child 6–17", color: "case", points: ["**25** items, **12** domains", "**19** items on 0–4; **6** answered Yes / No / Don’t Know (4 substance, suicidal ideation, suicide attempt)", "Slight threshold: **inattention, psychosis**", "No Level 2: psychosis, repetitive thoughts and behaviors, suicidal ideation/attempts", "Adds **irritability** and **inattention**; drops memory, dissociation and personality functioning", "Child-rated version for ages 11–17 online, with no “Don’t Know” option"] }
            ] },
            { type: "callout", kind: "pearl", title: "Spot the domains that changed", text: "Three adult domains have **no child counterpart** (memory, dissociation, personality functioning) and two child domains have **no adult counterpart** (irritability, inattention); 13 − 3 + 2 = 12 (app arithmetic from Tables 1 and 2, pp. 844–845)." }
          ]
        },
        {
          id: "s23-scoring-adult",
          title: "Scoring the adult measure",
          pages: "845–846",
          blocks: [
            { type: "steps", title: "Adult Level 1: how to score and read it (pp. 845–846)", items: [
              ["1. The scale", "Every item is rated **0–4**: **0 = none** (not at all); **1 = slight** (rare, less than a day or two); **2 = mild** (several days); **3 = moderate** (more than half the days); **4 = severe** (nearly every day) (p. 845)."],
              ["2. Look inside each domain", "Review **each item** within a multi-item domain, above all when no Level 2 measure exists for it, to see **which symptom** is driving the score (p. 845)."],
              ["3. Apply the threshold", "A rating of **mild (2) or greater on any item** in a domain strongly suggests the need for **further inquiry and follow-up**, which may include the domain’s **Level 2** measure (pp. 845–846)."],
              ["4. The three exceptions", "For **substance use, suicidal ideation and psychosis**, **slight (1) or greater** on any item is enough to guide additional inquiry (p. 846)."],
              ["5. Record the highest score", "Write the **highest item score** in each domain in the **“Highest domain score”** column; Table 1 gives the threshold per domain (p. 846)."]
            ] },
            { type: "case", title: "Worked example (app)", text: "A 41-year-old man seen at the Mariveles OPD for insomnia completes the adult form. He rates the sleep item **moderate (3)**, one depression item **mild (2)**, the other **slight (1)**, the heavy-drinking item **slight (1)**, everything else **none (0)**.", point: "Three domains cross their thresholds: **sleep** and **depression** at mild or greater, and **substance use** at slight or greater, so each gets further inquiry, and the sleep and depression domains have Level 2 measures to offer (pp. 844–846). The highest domain scores recorded are 3, 2 and 1. Nothing here is a diagnosis: the next step is the interview, not a code (p. 846; app guidance)." },
            { type: "callout", kind: "caution", title: "“Any item” means any item", text: "The threshold is reached by **any single item** in the domain, not by a sum or an average (pp. 845–846). The Level 1 measure has **no total score**; its output is a set of highest-domain scores and a list of domains to pursue (app reading of pp. 845–846)." }
          ]
        },
        {
          id: "s23-scoring-child",
          title: "Scoring the parent/guardian measure",
          pages: "846",
          blocks: [
            { type: "steps", title: "Parent/guardian Level 1: how to score and read it (p. 846)", items: [
              ["1. Two kinds of item", "**19 of the 25** items use the same **0–4** scale as the adult form; the **suicidal ideation, suicide attempt and substance** items are answered **Yes, No or Don’t Know** (p. 846)."],
              ["2. Look inside each domain", "As with adults, review the items within a domain to find the symptom that matters (the text’s example is a visual versus an auditory hallucination item in the psychosis domain) (p. 846)."],
              ["3. Apply the threshold", "**Mild (2) or greater** on any 0–4 item in a domain may guide additional inquiry and the domain’s **Level 2** measure (p. 846)."],
              ["4. The two exceptions", "For **inattention** and **psychosis**, **slight (1) or greater** is the guide (p. 846)."],
              ["5. “Don’t Know”", "A parent’s **Don’t Know** on the suicidal ideation, suicide attempt or any substance item, **especially for ages 11–17**, may call for **probing with the child**, including the **child-rated Level 2** measure for that domain where one exists (p. 846); Table 2 offers one for substance use but none for the suicide items, so those are asked about directly (p. 845; app reading)."],
              ["6. Record the highest score", "Because inquiry follows the **highest item** in a domain, enter it in the **“Highest Domain Score”** column (p. 846)."]
            ] },
            { type: "callout", kind: "key", title: "The child-rated version (ages 11–17)", text: "Its instructions and guidelines are **similar** to the parent version’s, with one difference: there is **no “Don’t Know”** option, because the young person answers about themselves (p. 846). It is online, not printed (pp. 842, 844)." },
            { type: "case", title: "Worked example (app)", text: "The mother of a 14-year-old referred by a school in Bataan completes the form. She rates the inattention item **slight (1)**, both anxiety items she can judge **mild (2)**, answers **Don’t Know** to the alcohol and the non-prescribed medicine items, and **No** to both suicide items.", point: "**Inattention** crosses its slight threshold, so inquiry and the **SNAP-IV** Level 2 are options; **anxiety** crosses the mild threshold with its own Level 2; the two **Don’t Know** answers on substance items in a 14-year-old are the manual’s cue to ask the adolescent directly and consider the **child-rated** substance Level 2 (pp. 845–846). The two **No** answers on the suicide items do not end the matter if the interview suggests otherwise: the form prompts, judgment decides (p. 846; app guidance)." }
          ]
        },
        {
          id: "s23-level2",
          title: "Level 2 measures",
          pages: "846",
          blocks: [
            { type: "p", text: "A threshold score on Level 1 signals a **possible need for detailed clinical inquiry**; the **Level 2** measures are **one way** to get more in-depth information on a flagged domain to inform diagnosis, treatment planning and follow-up (p. 846). They are **online** at www.psychiatry.org/dsm5, with **adult and pediatric (parent and child) versions for most** Level 1 domains; Tables 1 and 2 show which domains have one (p. 846)." },
            { type: "flow", title: "From Level 1 to the interview (pp. 845–846; app layout)", steps: [
              "Patient (or informant, or parent) completes Level 1 for the past 2 weeks",
              "Clinician reads every item, records the highest score per domain",
              "Domain at or above threshold (mild; or slight for the exception domains)?",
              "Yes, and a Level 2 exists → give it; yes, and none exists → ask directly",
              "Interview against Section II criteria; chart the disorder that is met, if any; keep the scores for follow-up"
            ] },
            { type: "callout", kind: "caution", title: "Level 2 is optional; inquiry is not", text: "The manual’s wording is that further inquiry “**may include**” the Level 2 measure (pp. 846). A threshold score with no Level 2 measure, for example in psychosis or suicidal ideation, is the clearest case where the clinician’s questions **are** the follow-up (p. 844; app guidance)." }
          ]
        },
        {
          id: "s23-frequency",
          title: "Frequency of use",
          pages: "846",
          blocks: [
            { type: "p", text: "To track change, the Level 1 and relevant Level 2 measures may be repeated at **regular intervals as clinically indicated**, depending on how **stable** the person’s symptoms and treatment are (p. 846). For people with **impaired capacity** and for children aged **6–17**, the measures should ideally be completed at follow-up by the **same knowledgeable informant** or the **same parent or guardian** as before (p. 846). **Consistently high** scores on a domain may mark a significant, problematic symptom that warrants assessment, treatment and follow-up; **clinical judgment should guide decision making** (p. 846)." },
            { type: "callout", kind: "pearl", title: "The same three sentences appear three times", text: "The psychosis measure (p. 851) and the WHODAS (p. 855) carry almost identical “Frequency of Use” paragraphs: **regular intervals as clinically indicated**, **consistently high scores warrant further assessment**, **judgment guides**. The one addition for the cross-cutting measures is the **same-informant** rule (p. 846). Learn it once (app guidance)." }
          ]
        },
        {
          id: "s23-forms",
          title: "What the printed forms look like (described, not reproduced)",
          pages: "847–850",
          blocks: [
            { type: "p", text: "The **adult form** (pp. 847–848) opens with name, age and date, then two lines for an **informant**: their relationship to the person and roughly **how many hours a week** they spend together (p. 847). The instructions ask the respondent to circle how much or how often each problem bothered them in the past **two weeks**; the five columns run from **none** to **severe**, and a last column, **“Highest domain score (clinician)”**, is for the clinician (p. 847). The 23 items are grouped by Roman-numeral domain, I–XIII (pp. 847–848). The three substance items are the longest, because the third lists the **kinds of medicines and drugs** it means, from prescription painkillers and stimulants to cannabis, cocaine and inhalants (p. 848)." },
            { type: "p", text: "The **parent/guardian form** (pp. 849–850) opens with the child’s name, age, the date and the respondent’s **relationship to the child**, and asks about the past **two weeks** in the same five columns with the same clinician column (p. 849). Its 25 items follow Table 2’s order, I–XII; anger and irritability (V and VI) **share** two items (p. 849). The last six items switch to **Yes / No / Don’t Know** boxes: four on alcohol, tobacco, drugs and non-prescribed medicines, then a question about talk of suicide in the past two weeks and one about **any lifetime** suicide attempt (p. 850)." },
            { type: "callout", kind: "caution", title: "One item is not “past 2 weeks”", text: "On the parent form the **suicide attempt** item asks whether the child has **ever** made an attempt, while every other item, including the suicidal ideation item just before it, asks about the past **two weeks** (p. 850). The adult form’s single suicidal ideation item keeps the two-week window (p. 847). Ask about an attempt directly whatever the box says (app guidance)." }
          ]
        }
      ]
    },
    {
      title: "Clinician-Rated Dimensions of Psychosis Symptom Severity",
      sections: [
        {
          id: "s23-crdpss",
          title: "Why rate psychosis in dimensions",
          pages: "851; Ch 2 p. 109",
          blocks: [
            { type: "p", text: "The chapter restates the Chapter 2 argument: psychotic disorders are **heterogeneous**, and the **severity** of symptoms predicts important features of the illness, such as the degree of **cognitive and neurobiological deficit** (p. 851). Dimensional ratings capture meaningful variation in severity, which helps with **treatment planning, prognosis and research** on mechanisms (p. 851). The **Clinician-Rated Dimensions of Psychosis Symptom Severity** rates the **five primary symptoms of psychosis** (hallucinations, delusions, disorganized speech, abnormal psychomotor behavior, negative symptoms) and adds **three more dimensions**: **impaired cognition**, because cognitive deficits across many domains predict functional ability and prognosis, and **depression** and **mania**, which flag **co-occurring mood pathology** whose severity has prognostic value and guides treatment (p. 851)." },
            { type: "defs", title: "The measure in brief (p. 851)", items: [
              ["Items", "**8**: hallucinations, delusions, disorganized speech, abnormal psychomotor behavior, negative symptoms (restricted emotional expression or avolition), impaired cognition, depression, mania (pp. 851–853)."],
              ["Who rates", "The **clinician**, at the time of the clinical assessment, using **all available information** and clinical judgment (p. 851)."],
              ["Window", "Each symptom is rated as it was at its **most severe during the past 7 days** (p. 851)."],
              ["Scale", "**0–4**: 0 = **not present**; 1 = **equivocal**; 2 = **present, but mild**; 3 = **present and moderate**; 4 = **present and severe**, with a **symptom-specific definition** of each level (p. 851)."],
              ["Recording", "Tick the level that fits, then write the number in the **Score** column (p. 851)."],
              ["Total", "None is described; the measure yields **eight dimension scores** (app reading of pp. 851–853)."]
            ] },
            { type: "callout", kind: "key", title: "How it connects to Chapter 2 (Ch 2, p. 109 and the other psychotic disorders)", text: "Every Chapter 2 disorder carries **“Specify current severity”**: a quantitative rating of the **five primary symptoms**, each **0 (not present) to 4 (present and severe)** for the **most severe in the last 7 days**, with a pointer to this measure, and a note that the **diagnosis can be made without the specifier** (Ch 2, p. 109 for brief psychotic disorder; the same note recurs for [[dx:schizophrenia]], [[dx:schizophreniform-disorder|schizophreniform disorder]], [[dx:schizoaffective-disorder|schizoaffective disorder]] and [[dx:delusional-disorder|delusional disorder]]). The three extra dimensions, cognition, depression and mania, are **not** part of the specifier; they are the measure’s own additions (p. 851; app reading)." },
            { type: "callout", kind: "exam", title: "Three numbers that get swapped (app guidance)", text: "**7 days** (psychosis dimensions) versus **2 weeks** (Level 1) versus **30 days** (WHODAS); **8** items (psychosis) versus **5** primary symptoms (the Chapter 2 specifier); **clinician-rated** (psychosis dimensions) versus **self-rated** (Level 1 adult, WHODAS) versus **parent-rated** (Level 1 child). The app’s [[page:assess/scale/crdpss|psychosis severity tool]] in Case tools uses the same eight dimensions and the same 0–4 scale." }
          ]
        },
        {
          id: "s23-crdpss-rating",
          title: "The eight dimensions and how the levels are defined",
          pages: "851–853",
          blocks: [
            { type: "table", caption: "What separates the levels in each dimension (pp. 852–853; described in the app’s words, not the form’s)", head: ["Dimension", "“Equivocal” means", "Mild → moderate → severe is graded by"], rows: [
              ["I. Hallucinations", "Severity or duration too slight to count as psychosis", "How much **pressure to act** on the voices or other hallucinations, and how **bothered** the person is: little / some / severe"],
              ["II. Delusions", "Severity or duration too slight to count as psychosis", "How much **pressure to act** on the beliefs and how **bothered** by them: little / some / severe"],
              ["III. Disorganized speech", "Not enough to count as disorganization", "How hard the speech is to **follow**: some difficulty / often difficult / almost impossible"],
              ["IV. Abnormal psychomotor behavior", "Not enough to count as abnormal", "How **often** abnormal or bizarre motor behavior or catatonia appears: occasional / frequent / almost constant"],
              ["V. Negative symptoms", "An equivocal decrease", "The **degree of decrease** in facial expressivity, prosody, gestures or self-initiated behavior: mild / moderate / severe"],
              ["VI. Impaired cognition", "Function not clearly outside what is expected for age and socioeconomic status (within **0.5 SD** of the mean)", "How far **below the expected** level for age and SES: **0.5–1 SD** / **1–2 SD** / **more than 2 SD**"],
              ["VII. Depression", "Occasional sadness or hopelessness, some concern about having failed, without preoccupation", "**Frequency and depth** of depressed mood and the degree of **guilt or self-reproach**, up to daily depression with **delusional guilt**"],
              ["VIII. Mania", "Occasional elevated, expansive or irritable mood or some restlessness", "**Frequency and extent** of elevated, expansive or irritable mood or restlessness, up to daily and extensive"]
            ] },
            { type: "callout", kind: "pearl", title: "Two things the cognition item tells you", text: "It is the only item anchored to **standard deviations** from the mean **expected for the person’s age and socioeconomic status** (p. 853), so a formal or at least an informed estimate of premorbid level is implied; and it is one of the three dimensions that sit **outside** the Chapter 2 severity specifier (p. 851; app reading). The form’s footnote spells out **SD** and **SES** (p. 853)." },
            { type: "callout", kind: "caution", title: "Pressure to act, not content, grades hallucinations and delusions", text: "The mild, moderate and severe levels for hallucinations and delusions turn on **pressure to act or respond** and on **distress**, not on how bizarre the content is (pp. 852–853, app paraphrase). A quietly held, bizarre delusion the person feels no pressure to act on may rate lower than a mundane persecutory belief that drives behavior; that is the measure working as designed (app guidance)." },
            { type: "case", title: "Worked example (app)", text: "On a ward in Bataan, a 26-year-old woman with schizophrenia, in her second week of treatment, still hears a voice most days that tells her to leave the ward; she has tried twice to walk out and is distressed by it. Her speech is a little hard to follow at times. She sits with a flat face and starts nothing on her own, moderately so. She denies low mood; the team notes no elevation.", point: "Rate the **worst in the past 7 days** (p. 851): hallucinations **4** (severe pressure to respond, very bothered), disorganized speech **2** (some difficulty following), negative symptoms **3** (moderate decrease), depression and mania **0**, delusions and psychomotor behavior as the record supports, cognition after an estimate against her expected level (pp. 852–853). Repeat at regular intervals to track response (p. 851). The scores do not alter the diagnosis; they document severity for the Chapter 2 specifier and for follow-up (Ch 2; app guidance)." }
          ]
        }
      ]
    },
    {
      title: "WHODAS 2.0",
      sections: [
        {
          id: "s23-whodas",
          title: "What the WHODAS 2.0 measures",
          pages: "854",
          blocks: [
            { type: "p", text: "The printed version is the **adult, self-administered, 36-item** WHODAS 2.0, for people aged **18 and older** (p. 854). It has been **validated across many cultures** and shown to be **sensitive to change** (p. 854). It rates **disability** in **six domains**: understanding and communicating; getting around; self-care; getting along with people; life activities (household, and work or school); and participation in society (p. 854). Each item asks how much **difficulty** the person had in that area during the **past 30 days** (p. 854). If the person cannot complete it because of **impaired capacity** (the text’s example is major neurocognitive disorder), a knowledgeable informant can complete the **proxy-administered** version, which is online (p. 854)." },
            { type: "table", caption: "The six domains and their item counts (p. 854; counts from the form, pp. 856–857)", head: ["Domain", "Items", "Scoring name (p. 854)", "What the items ask about"], rows: [
              ["1. Understanding and communicating", "6", "Cognition", "Concentrating, remembering, solving problems, learning new tasks, understanding others, holding a conversation"],
              ["2. Getting around", "5", "Mobility", "Standing, rising from sitting, moving about the home, leaving the home, walking a long distance"],
              ["3. Self-care", "4", "Self-care", "Washing, dressing, eating, being alone for a few days"],
              ["4. Getting along with people", "5", "Getting along", "Strangers, friendships, close relationships, making friends, sexual activity"],
              ["5. Life activities", "8 (4 household + 4 work/school)", "Life activities", "Doing, doing well, finishing and finishing on time one’s household work; the same four for work or school, skipped if the person neither works nor studies"],
              ["6. Participation in society", "8", "Participation", "Joining community activities, barriers around the person, living with dignity, time and emotional cost of the condition, financial drain, family burden, time for relaxation or pleasure"]
            ] },
            { type: "callout", kind: "key", title: "Disability, not symptoms", text: "The WHODAS asks about **difficulty doing things** because of **any** health condition, physical or mental, over 30 days (p. 854; the form’s preamble, p. 856). It does not ask about mood, voices or worry: that is the job of the symptom measures. The pairing, **symptoms from Level 1 and function from the WHODAS**, is what the manual means by a comprehensive assessment (pp. 842, 854; app reading)." },
            { type: "callout", kind: "pearl", title: "Where the GAF went (Section I, p. 16)", text: "DSM-IV’s **Axis V Global Assessment of Functioning** was a single clinician-judged number on a hypothetical health–illness continuum. DSM-5 replaced it with the **WHODAS**, chosen because it is grounded in the **ICF** and usable **across all of medicine** (p. 16). The preface calls the GAF “more limited” (p. 5). No GAF score appears anywhere in DSM-5-TR (app observation)." }
          ]
        },
        {
          id: "s23-whodas-who",
          title: "WHO’s scoring: simple and complex",
          pages: "854",
          blocks: [
            { type: "compare", title: "Two ways to score the 36-item WHODAS 2.0 (WHO instructions, p. 854)", items: [
              { title: "Simple scoring", color: "guide", points: [
                "Each item is scored **1 (none)** to **5 (extreme)** and the scores are **summed**.",
                "Maximum total raw score **180** (36 × 5).",
                "No recoding, collapsing or weighting of items.",
                "Practical for **hand scoring**, busy clinics and paper-and-pencil interviews.",
                "WHO regards the simple sum as a **sufficient statistic** for the degree of functional limitation."
              ] },
              { title: "Complex (IRT-based) scoring", color: "mech", points: [
                "**Item-response-theory** scoring allows for **different levels of difficulty** across items and treats each response level separately.",
                "Needs a **computer**; the program is on the WHO website.",
                "**Step 1**: recode each item from 1–5 to **0–4** and sum within each domain (total raw score now **144**).",
                "**Step 2**: sum the **six** domain scores.",
                "**Step 3**: convert to a **0–100** metric: **0 = no disability, 100 = full disability**."
              ] }
            ] },
            { type: "p", text: "WHODAS 2.0 also yields **domain-specific scores** for the six domains, named in the scoring text as **cognition, mobility, self-care, getting along, life activities (household and work/school) and participation** (p. 854). **Population norms** for IRT-based scores and their distribution are published by WHO (the text gives a WHO web address, p. 854)." },
            { type: "callout", kind: "exam", title: "180 versus 144 (app guidance)", text: "**180** is the maximum of the **simple** sum (items scored 1–5). **144** is the maximum after the IRT **recoding** to 0–4 (36 × 4). **100** is the top of the converted IRT metric. A question that mixes these is testing whether you know which scoring method it is describing (p. 854)." }
          ]
        },
        {
          id: "s23-whodas-tr",
          title: "DSM-5-TR’s own guidance: average scores and missing items",
          pages: "855",
          blocks: [
            { type: "steps", title: "Additional scoring and interpretation guidance for DSM-5-TR users (p. 855)", items: [
              ["1. Review each answer in the interview", "The clinician goes over the person’s response to **every item** during the clinical interview and enters the self-reported score in the **“Clinician Use Only”** section."],
              ["2. Correct if warranted", "If the interview and other information suggest a different score, the clinician may write a **corrected score** in the raw item score box."],
              ["3. Use average scores", "On the strength of the DSM-5 Field Trials in adult patients at **six U.S. sites and one in Canada**, DSM-5-TR recommends calculating **average scores for each domain and for general disability**."],
              ["4. Read them on the 1–5 scale", "Averages stay on the WHODAS five-point scale, so disability can be thought of on the same **1 (none) to 5 (extreme)** ladder, with mild, moderate and severe between; the trials found the averages **reliable, easy to use and clinically useful**."],
              ["5. Average domain score", "Raw domain score ÷ **number of items in the domain**. The text’s example: all six understanding-and-communicating items rated moderate → **18 ÷ 6 = 3**, moderate disability."],
              ["6. Average general disability score", "Raw overall score ÷ **36**."],
              ["7. Missing items", "Encourage completion of every item. If **10 or more** items are unanswered (**more than 25%** of 36), the **general disability scores**, simple and average, **lose their value**. If 10 or more are missing overall but a domain is **75%–100% complete**, that domain’s simple or average score may still be used."]
            ] },
            { type: "case", title: "Worked example (app)", text: "A 52-year-old teacher recovering from a major depressive episode completes the WHODAS at the Mariveles OPD. She answers all 36 items. Her getting-around items are all **none** (five 1s); her participation items total **32**; her overall raw score is **90**.", point: "Average domain scores: getting around **5 ÷ 5 = 1**, none; participation **32 ÷ 8 = 4**, severe. Average general disability **90 ÷ 36 = 2.5**, between mild and moderate (p. 855). The pattern, mobility intact while participation is severely limited, is the clinically useful part, and it is what you would compare at the next visit (pp. 854–855; app guidance)." },
            { type: "callout", kind: "caution", title: "The 10-item rule is about the total, the 75% rule about a domain", text: "Ten missing items spoil the **general** scores. A domain can still be scored if **at least three quarters** of its items are answered: for a 4-item domain that means **3 of 4**, for an 8-item domain **6 of 8** (p. 855; arithmetic is the app’s). A work/school block legitimately skipped by someone who neither works nor studies is a planned omission, handled by the form’s own instruction, not a missing-data problem (p. 857; app reading)." },
            { type: "p", text: "**Frequency of use** mirrors the other measures: repeat at **regular intervals as clinically indicated**, depending on the stability of symptoms and treatment; **consistently high** scores on a domain may point to a problem area that warrants further assessment and intervention (p. 855)." }
          ]
        },
        {
          id: "s23-whodas-form",
          title: "What the printed form looks like (described, not reproduced)",
          pages: "856–857",
          blocks: [
            { type: "p", text: "The two-page form is headed **WHODAS 2.0, 36-item version, self-administered**, with the person’s name, age and the date (p. 856). A short preamble explains that the questions concern **difficulties due to health conditions**, defines health conditions broadly (illnesses, injuries, mental or emotional problems, problems with alcohol or drugs), asks the person to think back over the **past 30 days**, and asks for **one circled answer** per item (p. 856). Each item is answered **None, Mild, Moderate, Severe, or Extreme/cannot do**; a shaded column at the right, marked **Clinician Use Only**, holds the raw item score, the raw domain score and the average domain score (p. 856). The six domains follow in order; the **life activities** domain has a household block for everyone and a **work/school** block with a skip instruction for those who neither work nor study (p. 857); the form ends with a **General Disability Score** total (p. 857)." },
            { type: "callout", kind: "caution", title: "WHO’s copyright line (p. 857)", text: "The form carries WHO’s copyright (2012) and the WHODAS 2.0 manual reference, and states that WHO has allowed the publisher to reproduce the instrument; **clinicians may reproduce it for use with their own patients**, while **any other use, including electronic use, requires WHO’s written permission** (p. 857). That is why this app describes the WHODAS and does not reproduce it (app guidance)." }
          ]
        }
      ]
    },
    {
      title: "Beyond the text (outside the DSM, labeled)",
      sections: [
        {
          id: "s23-evidence",
          title: "The evidence behind the measures (research, outside the DSM)",
          pages: "844, 855; research",
          blocks: [
            { type: "callout", kind: "caution", title: "Label", text: "Everything in this section comes from the published studies the manual alludes to (pp. 844, 855) or from later research, not from the DSM text. Figures are as reported in those sources and should be checked before being cited." },
            { type: "defs", title: "The DSM-5 Field Trials (Clarke et al. 2013; Narrow et al. 2013, Am J Psychiatry)", items: [
              ["Design", "**11** sites: six adult and four pediatric sites in the United States and one adult site in Canada; **279** clinicians and **2,246** patients; a test–retest design with web-based data capture (Clarke et al. 2013)."],
              ["Adult Level 1 reliability", "Most items had **good to excellent** test–retest reliability; the two **mania** items were the weak spots (ICC about 0.56 and 0.53, “questionable”) (Narrow et al. 2013)."],
              ["Parent and child versions", "19 of the 25 parent items were good or excellent; the **misuse-of-legal-drugs** item was unreliable in parents of younger children. In the child self-report, 17 items were good or excellent and six questionable, again including both mania items (Narrow et al. 2013)."],
              ["Reading", "The manual’s “good reliability” (p. 844) is true of the measure as a whole; the **mania and substance** items are where a clinician should trust the interview over the form (app reading of the research)."]
            ] },
            { type: "defs", title: "Later studies", items: [
              ["College students (Bravo et al. 2018, Psychological Assessment)", "**7,217** non-treatment-seeking students at **10** U.S. universities: acceptable internal consistency for the multi-item domains and support for convergent and criterion validity. This is the study the manual summarizes on p. 844."],
              ["Psychosis dimensions (Berendsen et al. 2020, Schizophrenia Research)", "In **335** people with recent-onset schizophrenia-spectrum disorders, **inter-rater agreement was low** for most of the eight items (Krippendorff’s alpha roughly 0.35–0.64) except delusions (0.74); three factors emerged (deficit/motor, positive, mood). The authors call for **rater training**: a reminder that “clinician-rated” is not the same as “reliable” (app reading)."],
              ["WHODAS 2.0 (WHO)", "WHO also publishes a **12-item** version that gives an overall score only, explains about **81%** of the variance of the 36-item version and takes about 5 minutes; the 36-item version takes about 20 minutes and exists in interviewer-, self- and proxy-administered forms. Reproduction or electronic embedding goes through WHO licensing."]
            ] },
            { type: "defs", title: "Measurement-based care and guidelines", items: [
              ["Fortney et al. 2017, Psychiatric Services", "About **18%** of U.S. psychiatrists and **11%** of psychologists routinely used symptom rating scales; trials in which **frequent, timely** patient-reported scores reached the clinician **during** the encounter improved outcomes, whereas one-time screening or infrequent measurement did not."],
              ["APA Practice Guidelines for the Psychiatric Evaluation of Adults, 3rd ed. (2016)", "Guideline I describes the Level 1 measure as a useful tool for symptoms that cut across diagnoses, usable at the initial evaluation and for monitoring; a separate guideline covers quantitative assessment. This is the endorsement Section I cites (p. 15)."],
              ["APA online measures (October 2026)", "The APA page lists the three Level 1 versions, eight adult and nine pediatric Level 2 measures, ten adult and ten child disorder-specific severity measures, six clinician-rated severity measures (including the psychosis dimensions), the two WHODAS versions, the personality inventories, the Early Development and Home Background forms and the Cultural Formulation Interview, with the caution that the measures should **enhance clinical decision-making** and never be **the sole basis** of a diagnosis (research notes; confirm online)."]
            ] },
            { type: "callout", kind: "pearl", title: "ICD-11 (outside the DSM)", text: "ICD-11 offers **supplementary codes** for people already diagnosed with a primary psychotic disorder, **6A25 Symptomatic manifestations of primary psychotic disorders**: positive, negative, depressive mood, manic mood, psychomotor and cognitive symptoms. The dimensions mirror the DSM measure’s eight, with the positive symptoms grouped into one (research notes)." }
          ]
        },
        {
          id: "s23-practice",
          title: "Using the measures on a Philippine training service (app guidance)",
          pages: "app guidance",
          blocks: [
            { type: "steps", title: "A resident’s workflow built on the chapter (app guidance; the rules cited are the manual’s)", items: [
              ["Before the first interview", "Give the adult Level 1 (or the parent version, and the child version for ages 11–17) in the waiting area; it asks about the past 2 weeks (pp. 843–844). Where literacy or language is a barrier, read it aloud or use a knowledgeable informant (p. 843)."],
              ["Read it before you walk in", "Scan the highest domain scores; the Field Trials found that scores seen **before** the meeting improved communication (p. 844). Note the slight-threshold domains first: substance use, suicidal ideation, psychosis (p. 846)."],
              ["Follow the thresholds", "Mild-or-greater domains get questions and, where one exists, a Level 2 measure; the five adult domains without a Level 2 get your own questions (pp. 844–846)."],
              ["Diagnose on criteria", "Nothing on the form is a diagnosis (p. 846). Interview against Section II; chart what is met, or an other specified or unspecified category, or a Chapter 22 code; record the scores in the formulation."],
              ["Add function", "Give the WHODAS 2.0 at baseline; compute average domain and general scores (p. 855). This is the functioning statement that the GAF used to provide (Section I, p. 16)."],
              ["For psychotic disorders", "Rate the eight dimensions for the worst of the past 7 days and record the five primary-symptom scores as the Chapter 2 severity specifier (p. 851; Ch 2)."],
              ["Repeat", "At intervals that match the stability of the illness, with the same informant or parent when one is used (pp. 846, 851, 855)."]
            ] },
            { type: "callout", kind: "caution", title: "Safety first when the form flags self-harm (app guidance)", text: "A **slight** rating on the adult suicidal ideation item, or a **Yes** or **Don’t Know** on the parent items, means a direct conversation the same day, not a Level 2 form, because none exists for these items (pp. 844–846). If risk is present, plan for safety in the usual way; in the Philippines the **NCMH Crisis Hotline** is **1553** (toll-free from landlines), **0919-057-1553** (Smart/TNT), **0917-899-8727** and **0966-351-4518** (Globe/TM) (outside the DSM; confirm before giving out)." }
          ]
        },
        {
          id: "s23-philippines",
          title: "Philippine context (outside the DSM)",
          pages: "outside the DSM",
          blocks: [
            { type: "callout", kind: "culture", title: "Label", text: "Nothing in this section is in DSM-5-TR. It is local context for residents at a Philippine training hospital; check each item against current local sources before relying on it." },
            { type: "defs", title: "What exists, and what does not (research notes, October 2026)", items: [
              ["Translations", "No validated **Filipino** version of the Level 1 Cross-Cutting Symptom Measure or of the WHODAS 2.0 was found. WHO notes that translations not produced by WHO are not vouched for. Until a validated translation exists, the English forms, read aloud and explained where needed, are what is available, and that limitation belongs in the note."],
              ["PHQ-9 and GAD-7 in Filipino", "A Filipino PHQ-9 and GAD-7 were validated by Garabiles and colleagues (2019) in Filipino domestic workers in Macao, a migrant sample rather than a Philippine clinic sample, with optimal cut scores of **6** (PHQ-9) and **7** (GAD-7). The PHQ-9 is also the APA’s adult Level 2 depression severity measure online."],
              ["Who completes the form", "Many patients arrive with a relative; the **informant** line on the adult form and the **same-informant** follow-up rule (pp. 843, 846) fit the Philippine OPD well. Record who answered."],
              ["Crisis line", "NCMH Crisis Hotline **1553** (toll-free from landlines) or 1800-1888-1553; **0919-057-1553** (Smart/TNT); **0917-899-8727** and **0966-351-4518** (Globe/TM); 24/7, run by the National Center for Mental Health. Confirm before giving out."]
            ] }
          ]
        },
        {
          id: "s23-tr-changes",
          title: "DSM-5 to DSM-5-TR: what changed in this chapter (app comparison)",
          pages: "app comparison",
          blocks: [
            { type: "update", kind: "tr", title: "New in the text revision (app comparison)", text: "The app’s own comparison with DSM-5 (2013): the three printed instruments, their domains and thresholds are the same. The visible addition is the WHODAS section headed **“Additional Scoring and Interpretation Guidance for DSM-5-TR Users”** (p. 855), which recommends **average domain and general disability scores** read on the 1–5 scale, gives the 18 ÷ 6 example, and adds the **missing-data rules** (10 or more items; 75%–100% domain completeness). The text also now cites **psychometric studies beyond the Field Trials**, including the college-student study (p. 844). Treat this as the app’s reading, and confirm against both editions before citing." }
          ]
        },
        {
          id: "s23-exam",
          title: "Exam strategy and mnemonics (app guidance)",
          pages: "app guidance",
          blocks: [
            { type: "table", caption: "The numbers in one place (pp. 841–857)", head: ["Measure", "Items / domains", "Rater", "Window", "Scale", "Threshold or score"], rows: [
              ["Level 1, adult", "23 / 13", "Self (or informant)", "2 weeks", "0–4", "Mild (2) on any item; slight (1) for substance use, suicidal ideation, psychosis"],
              ["Level 1, child 6–17", "25 / 12", "Parent or guardian (child-rated 11–17 online)", "2 weeks (attempt item: ever)", "0–4 on 19 items; Yes/No/Don’t Know on 6", "Mild (2); slight (1) for inattention, psychosis; Yes or Don’t Know on substance and suicide items"],
              ["Level 2", "Varies", "Self or parent (child 11–17)", "Varies", "Varies", "A deeper look at one flagged domain; online"],
              ["Psychosis dimensions", "8", "Clinician", "7 days, at worst", "0–4 (none, equivocal, mild, moderate, severe)", "No total; five items feed the Ch 2 severity specifier"],
              ["WHODAS 2.0", "36 / 6", "Self (proxy online)", "30 days", "1–5 (none to extreme)", "Simple sum max 180; IRT 0–100 (raw 144); average scores 1–5; 10+ missing spoils general scores"]
            ] },
            { type: "callout", kind: "exam", title: "Traps the exam sets (app guidance)", text: "(1) Treating a threshold score as a **diagnosis**: it is a prompt for inquiry (p. 846). (2) Giving a disorder-specific **severity** measure as a screen: that is Level 1’s job (pp. 842, 15). (3) Mixing the windows: **7 days / 2 weeks / 30 days**. (4) Saying the psychosis measure has **5** items: it has **8**; the specifier uses 5 (p. 851). (5) Forgetting that **suicidal ideation, psychosis, memory, dissociation and personality functioning** have **no** adult Level 2 (p. 844). (6) Summing Level 1 items: there is no total; the unit is the **highest item per domain** (p. 846). (7) Confusing the WHODAS maxima **180** (simple) and **144** (IRT raw) (p. 854). (8) Forgetting the **same informant** rule for children and people with impaired capacity (p. 846). (9) Thinking the **GAF** survives anywhere in DSM-5-TR: the WHODAS replaced it (Section I, p. 16)." },
            { type: "callout", kind: "mnemonic", title: "“Doctors Always Make Accurate Screens, So Patients Sleep; My Resident Dozes Past Sunrise” (app, original)", text: "The 13 adult Level 1 domains in Table 1 order: **D**epression, **A**nger, **M**ania, **A**nxiety, **S**omatic symptoms, **S**uicidal ideation, **P**sychosis, **S**leep problems, **M**emory, **R**epetitive thoughts and behaviors, **D**issociation, **P**ersonality functioning, **S**ubstance use. DSM check: Table 1, p. 844; the order on the form is the same (pp. 847–848)." },
            { type: "callout", kind: "mnemonic", title: "“Slight Starts Probing” (app, original)", text: "The three adult domains flagged at **slight (1)** or greater rather than mild: **S**ubstance use, **S**uicidal ideation, **P**sychosis. DSM check: pp. 844–846; in the parent version the slight domains are **inattention and psychosis** instead (p. 846)." },
            { type: "callout", kind: "mnemonic", title: "“Uncle Gets Sick, Grandma Lends Pesos” (app, original)", text: "The six WHODAS 2.0 domains with their item counts, 6-5-4-5-8-8 = 36: **U**nderstanding and communicating (6), **G**etting around (5), **S**elf-care (4), **G**etting along with people (5), **L**ife activities (8), **P**articipation in society (8). DSM check: the domains are on pp. 842 and 854; the item counts are the app’s count of the form (pp. 856–857)." },
            { type: "callout", kind: "mnemonic", title: "“Have Doctors Done A Neat Initial Dimensional Map?” (app, original)", text: "The eight psychosis dimensions in order: **H**allucinations, **D**elusions, **D**isorganized speech, **A**bnormal psychomotor behavior, **N**egative symptoms, **I**mpaired cognition, **D**epression, **M**ania. DSM check: pp. 851–853; the first five are the primary symptoms used by the optional Chapter 2 severity specifier (Ch 2, p. 109)." }
          ]
        }
      ]
    }
  ]
});
