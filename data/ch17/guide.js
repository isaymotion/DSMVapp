/* Chapter 17 study guide. Source: DSM-5-TR, Neurocognitive Disorders (pp. 667–732).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. Codes follow the ICD-10-CM changes adopted by the APA in
   September 2022 (effective October 1, 2022) and later updates (G20.C in 2023, the Alzheimer’s criteria revision
   in 2024, G35.D in 2025), checked through FY2027 (October 1, 2026): no further changes for this chapter.
   Treatment notes are outside the DSM and labeled as such. */
SP.add("ch17", "guide", {
  intro: "The neurocognitive disorders (NCDs) are the only DSM chapter in which the **primary deficit is cognitive** and **acquired**: the person has **declined from a level once reached**, so a lifelong limitation is not an NCD (p. 667). The chapter opens with **delirium**, an acute disturbance of **attention and awareness** that fluctuates over hours to days. It then defines two syndromes on one continuum: **major NCD** (roughly what used to be called dementia), where cognitive loss **takes away independence**, and **mild NCD** (roughly mild cognitive impairment), where independence is kept with **extra effort**. Each syndrome is then tied to its **cause**: Alzheimer’s disease, frontotemporal degeneration, Lewy body disease, vascular disease, traumatic brain injury, a substance or medication, HIV infection, prion disease, Parkinson’s disease, Huntington’s disease, another medical condition, multiple etiologies, or an unknown etiology. Unlike most of the manual, the **underlying pathology can often be identified**, and the criteria were harmonized with each disease’s expert consensus criteria. Coding changed substantially in **October 2022**, so the codes in this guide are the **current** ones, with the 2022 printing noted where it differs. Two helpers walk you through the reasoning: [[helper:delirium|the delirium helper]] and [[helper:neurocognitive|the neurocognitive helper]].",
  objectives: [
    "Name the **six cognitive domains** and give an everyday example of a mild and a major deficit in each.",
    "State the five criteria for **delirium**, its **acute/persistent** and **hyperactive/hypoactive/mixed** specifiers, and its **etiological subtypes** with their codes.",
    "Separate delirium from **coma**, from **major NCD** and from **primary psychosis**, and explain why delirium management takes **priority** when both are present.",
    "Tell **major** from **mild NCD** by **independence in instrumental activities**, and use the testing thresholds (**2 SD / 3rd percentile** versus **1–2 SD / 3rd–16th percentile**).",
    "Record **severity** (mild, moderate, severe) and **behavioral or psychological disturbance**, and code them with the post-2022 **F01 / F02 / F03** codes and **F06.70 / F06.71 / G31.84**.",
    "Apply the **probable versus possible** rules for Alzheimer’s, frontotemporal, Lewy body, vascular and Parkinson’s NCD, including the **2024 Alzheimer’s revision**.",
    "Recognize each etiological subtype from its **onset, course, early domains and hallmark features** (e.g., fluctuations, visual hallucinations and parkinsonism in Lewy body disease; disinhibition in behavioral-variant frontotemporal NCD).",
    "Use the **1-year rule** between NCD with Lewy bodies and NCD due to Parkinson’s disease, the **TBI severity table**, and the **substance-induced** coding table, including the amnestic-confabulatory (Korsakoff) type.",
    "Know the prevalence, course, risk and suicide figures the manual gives, and the main **post-2022 developments** in biomarkers and disease-modifying treatment."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s17-map",
          title: "How the chapter is built",
          pages: "667–668",
          blocks: [
            { type: "table", caption: "Diagnoses in this chapter (current ICD-10-CM codes; see the coding section for the full rules)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              "Delirium",
              ["[[dx:delirium|Delirium]]", "F05 (medical or multiple causes); F1x.x21 / F1x.x31 (substance or medication)", "Acute disturbance of **attention and awareness**, fluctuating, with another cognitive change, caused by a medical condition, substance, toxin or several of these", "672–678"],
              ["[[dx:other-specified-delirium|Other specified delirium]]", "F05 (R41.0 in the 2022 printing)", "Delirium-like picture short of full criteria, **reason recorded** (e.g., subsyndromal)", "678"],
              ["[[dx:unspecified-delirium|Unspecified delirium]]", "F05 (R41.0 in the 2022 printing)", "Reason not given or not enough information", "678"],
              "Major and mild neurocognitive disorders (syndromes)",
              ["[[dx:major-ncd|Major NCD]]", "By cause: F01 / F02 / F03 + severity + behavior", "**Significant** decline; **needs help** with complex instrumental activities", "679–680"],
              ["[[dx:mild-ncd|Mild NCD]]", "By cause: F06.70 / F06.71 or G31.84", "**Modest** decline; independence kept with **effort or compensation**", "680–681"],
              "Etiological subtypes",
              ["[[dx:ncd-alzheimers|Due to Alzheimer’s disease]]", "G30.9 + F02.xx (probable)", "Insidious, steadily progressive; **memory and learning** first", "690–695"],
              ["[[dx:ncd-frontotemporal|Frontotemporal]]", "G31.09 + F02.xx (probable)", "**Behavior or language** first; memory relatively spared", "695–699"],
              ["[[dx:ncd-lewy|With Lewy bodies]]", "G31.83 + F02.xx (probable)", "**Fluctuations, visual hallucinations, parkinsonism**, REM sleep behavior disorder", "699–702"],
              ["[[dx:ncd-vascular|Vascular]]", "F01.xx (probable)", "Tied to **cerebrovascular events** or prominent **attention/executive** slowing", "702–706"],
              ["[[dx:ncd-tbi|Due to traumatic brain injury]]", "S06.2XAS + F02.xx", "Begins **immediately** after a TBI and persists", "706–712"],
              ["[[dx:ncd-substance|Substance/medication-induced]]", "F10.26/.27, F1x.17/.27/.97, F1x.188/.288/.988", "Persists **beyond intoxication and withdrawal**", "712–717"],
              ["[[dx:ncd-hiv|Due to HIV infection]]", "B20 + F02.xx", "**Subcortical** pattern in documented HIV", "717–721"],
              ["[[dx:ncd-prion|Due to prion disease]]", "A81.9 + F02.xx", "**Rapid** progression, **myoclonus**, ataxia", "721–723"],
              ["[[dx:ncd-parkinsons|Due to Parkinson’s disease]]", "G20.C + F02.xx (probable)", "Cognitive decline in **established** Parkinson’s disease", "723–726"],
              ["[[dx:ncd-huntingtons|Due to Huntington’s disease]]", "G10 + F02.xx", "**Executive** decline, chorea, **CAG repeat**", "726–729"],
              ["[[dx:ncd-amc|Due to another medical condition]]", "Condition code + F02.xx", "e.g., hypothyroidism, B12 deficiency, tumor, MS, NPH", "729–730"],
              ["[[dx:ncd-multiple|Due to multiple etiologies]]", "All causes + F02.xx once (+ F01.xx if vascular)", "More than one process contributes", "731"],
              ["[[dx:ncd-unknown|Due to unknown etiology]]", "F03.xx (major) · G31.84 (mild)", "Added in 2022: a medical cause is presumed but cannot be pinned down", "Update 2022"],
              ["[[dx:unspecified-ncd|Unspecified NCD]]", "R41.9", "NCD symptoms predominate; criteria not met or etiology too uncertain", "732"]
            ] },
            { type: "callout", kind: "key", title: "Five ideas that run through the chapter", text: "1) NCDs are **acquired**: a decline from a previously attained level, not a lifelong pattern. 2) **Delirium** is a disturbance of **attention and awareness** that develops over **hours to days** and fluctuates; major and mild NCD are not diagnosed when the deficits occur **only during delirium**. 3) **Major vs mild** is about **independence** in everyday activities, not about which test score you got. 4) Every NCD is then labeled by its **cause**, and some causes carry a **probable or possible** certainty level that changes the code. 5) **Behavioral and psychological symptoms** (psychosis, mood, agitation, apathy) are recorded with the NCD, and may need their own *due to another medical condition* diagnosis." },
            { type: "callout", kind: "pearl", title: "Dementia is still allowed", text: "DSM-5 folded **dementia** into **major NCD**, but the word may still be used where it is customary, especially for the degenerative dementias of older age. *Neurocognitive disorder* is preferred for younger people, as after TBI or HIV infection. Major NCD is **broader** than dementia: **one** impaired domain is enough, so the old **amnestic disorder** (memory loss alone) is now **major NCD** (p. 667)." },
            { type: "update", kind: "tr", title: "What the text revision changed", text: "The NCD criteria are essentially those of DSM-5 (2013). The text revision rewrote the descriptive sections with newer prevalence data, new **culture-related** and **sex- and gender-related** sections, a section on **suicidal thoughts and behavior** for several subtypes, and updated **biomarker** text (amyloid and tau PET, CSF markers, dopamine transporter imaging, RT-QuIC for prion disease). The coding was then **rebuilt in October 2022** (next section). Confirm details against pp. 667–732." }
          ]
        },
        {
          id: "s17-domains",
          title: "The six cognitive domains",
          pages: "668–671",
          blocks: [
            { type: "p", text: "Every NCD criterion refers to the same six domains. The manual’s Table 1 (pp. 669–671) gives, for each, what a **major** and a **mild** deficit looks like in daily life and how it can be **tested**. Learn one example of each: it is how you elicit a **cognitive concern** and judge **severity**." },
            { type: "table", wide: true, caption: "Neurocognitive domains, with everyday examples and bedside tests (paraphrased from Table 1)", head: ["Domain (subdomains)", "Mild deficit", "Major deficit", "Ways to test"], rows: [
              ["**Complex attention** (sustained, divided, selective attention; processing speed)", "Routine tasks take **longer**; more errors and double-checking; easier with no competing noise", "Swamped by **multiple stimuli** (TV, conversation); cannot hold a phone number just given; cannot do mental arithmetic", "Press a button for each tone; count only the letters in a mixed list; time a task (serial 3s, symbol matching)"],
              ["**Executive function** (planning, decision-making, working memory, feedback, inhibition, flexibility)", "Multistage projects need more **effort**; hard to **resume a task** after an interruption; tired by organizing", "**Abandons** complex projects; others must **plan** daily tasks and make decisions", "Maze; digit span backward; Stroop-type naming of ink color; switching between numbers and letters"],
              ["**Learning and memory** (immediate span, recent memory with free recall, cued recall and recognition; very-long-term and implicit memory)", "Relies on **lists and calendars**; repeats self to the same person over weeks; loses track of bills paid", "**Repeats self** in the same conversation; cannot keep a short shopping list; needs frequent reorientation", "Word list or story: **free recall**, then **cued** recall, then **recognition**"],
              ["**Language** (naming, word finding, fluency, grammar and syntax; comprehension)", "Noticeable **word-finding** pauses; general words for specific ones; subtle grammatical slips", "“That thing”, pronouns for names; may forget names of family; echolalia and automatic speech before **mutism**", "Confrontation naming; **fluency** (animals or “F” words in 1 minute); following spoken commands"],
              ["**Perceptual-motor** (visual perception, visuoconstruction, praxis, gnosis)", "Needs **maps or directions**; gets turned around when not concentrating; less precise parking", "Trouble with familiar tools and **driving**; lost in familiar places; worse **at dusk**", "Copy a drawing; clock or block design; pantomime tool use; recognize faces and colors"],
              ["**Social cognition** (recognizing emotions, theory of mind)", "Subtle **personality change**: misses social cues, less empathy, mild disinhibition or apathy", "Behavior clearly outside social norms; ignores safety and others; **little insight**", "Name the emotion in faces; story cards about what a character believes or feels"]
            ] },
            { type: "callout", kind: "pearl", title: "What stays intact", text: "Except in **severe** major NCD, **semantic**, **autobiographical** and **implicit (procedural)** memory are relatively preserved compared with **recent memory** (p. 670). A person who cannot recall breakfast can often still tell the story of their wedding and ride a bicycle." },
            { type: "callout", kind: "exam", title: "Free recall versus recognition", text: "Poor **free recall** that improves with **cues or recognition** points to a **retrieval** problem (subcortical pattern: vascular, Parkinson’s, HIV, depression). Poor recall that **does not** improve with cues points to an **encoding/storage** problem, the typical **amnestic** pattern of Alzheimer’s disease. The manual lists the three recall formats under learning and memory (p. 670); the interpretation is standard neuropsychology." }
          ]
        },
        {
          id: "s17-coding",
          title: "Codes and how to record them",
          pages: "673–674, 680–683",
          blocks: [
            { type: "p", text: "The 2022 printing coded major NCD as **F02.80 / F02.81** (without or with behavioral disturbance), **F01.50 / F01.51** for vascular disease, and every mild NCD as **G31.84**. On **October 1, 2022**, ICD-10-CM added codes for **severity** and **type of disturbance**, and the APA rebuilt the chapter’s coding around them. Use the current scheme below; the manual’s own examples (e.g., *G30.9, F02.80*) are out of date." },
            { type: "flow", title: "Building a major NCD code", steps: [
              ["Etiology picks the category", "**F02** a probable or known medical cause (code the disease **first**) · **F01** probable vascular disease · **F03** possible etiology or unknown etiology (no disease code)"],
              ["Severity picks the 4th character", "**A** mild (IADLs) · **B** moderate (basic ADLs) · **C** severe (fully dependent) · unspecified severity: **8** in F02, **5** in F01, **9** in F03"],
              ["Disturbance picks the 5th–6th characters", "**0** without · **11** agitation · **18** other behavioral or psychological disturbance · **2** psychotic · **3** mood · **4** anxiety"],
              ["One code per disturbance", "Code **each** disturbance present (e.g., F02.C11 and F02.C2 for agitation plus psychosis)"]
            ] },
            { type: "table", caption: "Major NCD: category by etiology (APA coding update, September 2022)", head: ["Etiology", "Code first", "Major NCD code"], rows: [
              ["Alzheimer’s disease, **probable**", "G30.9", "F02.xx"],
              ["Alzheimer’s disease, **possible**", "None", "F03.xx"],
              ["Frontotemporal degeneration, probable / possible", "G31.09 / none", "F02.xx / F03.xx"],
              ["Lewy body disease, probable / possible", "G31.83 / none", "F02.xx / F03.xx"],
              ["Parkinson’s disease, probably / possibly due to", "**G20.C** / none", "F02.xx / F03.xx"],
              ["Vascular disease, probably / possibly due to", "None", "**F01.xx** / F03.xx"],
              ["Traumatic brain injury", "**S06.2XAS**", "F02.xx"],
              ["HIV infection", "B20", "F02.xx"],
              ["Prion disease", "A81.9", "F02.xx"],
              ["Huntington’s disease", "G10", "F02.xx"],
              ["Another medical condition", "The condition (e.g., **G35.D** multiple sclerosis)", "F02.xx"],
              ["Multiple etiologies", "All causes except vascular", "F02.xx **once**, plus F01.xx if vascular, plus any substance-induced code"],
              ["Unknown etiology", "None", "F03.xx"],
              ["Substance/medication-induced", "None", "Substance code (e.g., **F10.27**), unchanged"],
              ["Unspecified NCD", "None", "**R41.9**"]
            ] },
            { type: "table", caption: "Worked examples of the 4th–6th characters", head: ["Presentation", "Codes"], rows: [
              ["Probable Alzheimer’s disease, mild severity, no disturbance", "G30.9 · **F02.A0**"],
              ["Probable Alzheimer’s disease, severe, with agitation and delusions", "G30.9 · **F02.C11** · **F02.C2**"],
              ["Possible Alzheimer’s disease, moderate, with depression", "**F03.B3** (no G30.9)"],
              ["Probable vascular NCD, moderate, with apathy", "**F01.B3** (apathy is coded as a mood disturbance)"],
              ["Major NCD due to TBI, severity not recorded, with irritability and aggression", "S06.2XAS · **F02.811**"],
              ["Major NCD due to multiple sclerosis, moderate, with psychotic disturbance", "G35.D · **F02.B2**"]
            ] },
            { type: "defs", title: "What goes in each disturbance code (ICD-10-CM inclusion terms)", items: [
              ["x11 agitation", "Aggression, combativeness, violent behavior, verbal or physical agitation."],
              ["x18 other behavioral or psychological disturbance", "Sleep disturbance, social disinhibition, sexual disinhibition; anything not covered by the other codes."],
              ["x2 psychotic disturbance", "Hallucinations, delusions, paranoia, suspiciousness."],
              ["x3 mood disturbance", "Depression, **apathy**, anhedonia, elation."],
              ["x4 anxiety", "Anxiety symptoms."],
              ["x0 without", "No clinically significant behavioral or psychological disturbance."]
            ] },
            { type: "table", caption: "Mild NCD codes (APA coding update, September 2022)", head: ["Situation", "Codes"], rows: [
              ["Probable or known medical etiology (Alzheimer’s, frontotemporal, Lewy body, Parkinson’s, TBI, HIV, prion, Huntington’s, another medical condition)", "Etiology code first, then **F06.70** without or **F06.71** with behavioral disturbance"],
              ["Probably due to vascular disease", "**I67.9** cerebrovascular disease first, then F06.70 / F06.71"],
              ["Multiple etiologies", "All etiology codes (including I67.9), then F06.70 / F06.71 **once**"],
              ["Possible etiology, or unknown etiology", "**G31.84** only; behavior recorded in words, not coded"],
              ["Substance/medication-induced", "F1x.188 / .288 / .988 by substance and use disorder"],
              ["Unspecified NCD", "**R41.9**"]
            ] },
            { type: "callout", kind: "exam", title: "The coding traps", text: "1) **Probable** gets the disease code plus F02; **possible** gets **F03** and no disease code. 2) **Vascular** disease never gets a medical code for major NCD (**F01** carries it); for mild NCD it gets **I67.9**. 3) Severity **is coded** for major NCD now (4th character); it could not be coded in the 2022 printing. 4) For mild NCD only **with or without** behavioral disturbance is coded (F06.71 vs F06.70), and nothing at all for **G31.84**. 5) **F02.81** no longer exists: agitation is **F02.811**, other disturbance **F02.818**." },
            { type: "update", kind: "post", year: "2022", title: "ICD-10-CM restructuring of the NCD codes", source: "APA, DSM-5-TR Neurocognitive Disorders Supplement and DSM-5-TR Update, September 2022; ICD-10-CM FY2023", text: "Effective **October 1, 2022**: severity and disturbance codes for **F01, F02 and F03**; **F06.70 / F06.71** for mild NCD due to a known physiological condition; **G31.84** kept for possible or unknown etiology; **possible** etiologies moved to **F03**; a new **major or mild NCD due to unknown etiology**; the TBI sequela code changed from **S06.2X9S** to **S06.2XAS**; hepatic encephalopathy in the delirium examples changed from **K72.90** to **K76.82**; and other specified and unspecified delirium changed from **R41.0** to **F05**." },
            { type: "update", kind: "post", year: "2023–2025", title: "Later code changes", source: "APA DSM-5-TR Updates, September 2023 and September 2025", text: "**Parkinson’s disease**: **G20** became **G20.C** (parkinsonism, unspecified) on October 1, 2023. **Multiple sclerosis**: **G35** became **G35.D** (multiple sclerosis, unspecified) on October 1, 2025; the three-character G35 is no longer valid." },
            { type: "update", kind: "post", year: "2026", title: "No further changes in FY2027", source: "ICD-10-CM FY2027 code tables (effective October 1, 2026)", text: "The October 2026 update added no codes in F01–F09, G10, G20, G30, G31, G35, A81, B20, I67, R41 or S06 that affect this chapter. Check the code set in force on the date of service." }
          ]
        }
      ]
    },
    {
      title: "Delirium",
      sections: [
        {
          id: "s17-delirium-criteria",
          title: "Delirium: the criteria",
          pages: "672",
          blocks: [
            { type: "criteria", title: "Delirium in brief", code: "F05 or substance code", pages: "672", items: [
              ["A", "A disturbance of **attention** (directing, focusing, sustaining and shifting it) with **reduced awareness** of the environment."],
              ["B", "It develops over a **short period** (usually **hours to a few days**), is a **change from baseline**, and tends to **fluctuate** during the day."],
              ["C", "An **additional cognitive disturbance**: memory, **disorientation**, language, visuospatial ability or **perception**."],
              ["D", "A and C are **not better explained** by a preexisting, established or evolving NCD, and do **not** occur in a severely reduced level of arousal such as **coma**."],
              ["E", "History, examination or laboratory findings show it is a **direct physiological consequence** of another medical condition, substance intoxication or withdrawal, a medication, a **toxin**, or **multiple etiologies**."]
            ], specifiers: [
              ["Acute", "Lasting **a few hours or days**."],
              ["Persistent", "Lasting **weeks or months**."],
              ["Hyperactive", "Increased psychomotor activity, often with mood lability, agitation or refusal of care."],
              ["Hypoactive", "Decreased psychomotor activity, with sluggishness and lethargy approaching stupor."],
              ["Mixed level of activity", "Normal activity despite disturbed attention and awareness, **or** rapidly fluctuating activity."]
            ], note: "Specify the etiological subtype: substance intoxication, substance withdrawal, medication-induced, due to another medical condition, or due to multiple etiologies (next section)." },
            { type: "callout", kind: "key", title: "Attention and awareness are the core", text: "Delirium is an **acute impairment of consciousness**: attention wanders, questions must be repeated, the person perseverates on an earlier answer, and is easily distracted (p. 675). Disorientation and memory loss are **Criterion C** add-ons; without the **attention and awareness** disturbance of Criterion A it is not delirium." },
            { type: "callout", kind: "mnemonic", title: "Five letters, five criteria", text: "**A**ttention and awareness; **B**rief onset, **B**aseline change, **B**obbing (fluctuating) course; **C**ognition also affected; **D**on’t call it delirium if an NCD explains it or the person is in coma; **E**vidence of a physiological cause. Original to this app: check the wording on p. 672." },
            { type: "flow", title: "Arousal is a continuum (p. 676)", steps: [
              ["Normal", "Alert, attending"],
              ["Delirium", "Aroused cortex, **impaired** attention and awareness", "case"],
              ["Stupor", "Reduced arousal; minimal response; **not testable**", "dx"],
              ["Coma", "No cognition, no sleep-wake cycle, no meaningful response", "dx"]
            ], note: "Delirium needs enough arousal to respond to **verbal stimulation**. A person who barely responds has a **disorder of arousal**, not delirium, though delirium often appears on **emergence** from coma or stupor." },
            { type: "case", title: "Clinical vignette: the quiet patient", text: "An 82-year-old woman is admitted with pneumonia. On day 2 the nurse notes she is “no trouble”: she sleeps much of the day, answers slowly and drifts off mid-sentence. She cannot keep track of the months backward, thinks she is at home, and in the evening picks at the bedsheets. Her daughter says she was managing her own finances last week.", point: "**Hypoactive delirium** due to another medical condition (pneumonia), acute: inattention and reduced awareness that developed over a day, fluctuate, and represent a clear change from baseline. Hypoactive delirium is **more common in older adults** and is often **missed** (p. 675)." }
          ]
        },
        {
          id: "s17-delirium-specifiers",
          title: "Delirium subtypes, specifiers and codes",
          pages: "672–675",
          blocks: [
            { type: "table", caption: "Substance intoxication delirium (code by substance and comorbid use disorder)", head: ["Substance", "With mild use disorder", "With moderate or severe use disorder", "No use disorder"], rows: [
              ["Alcohol", "F10.121", "F10.221", "F10.921"],
              ["Cannabis", "F12.121", "F12.221", "F12.921"],
              ["Phencyclidine; other hallucinogen", "F16.121", "F16.221", "F16.921"],
              ["Inhalant", "F18.121", "F18.221", "F18.921"],
              ["Opioid", "F11.121", "F11.221", "F11.921"],
              ["Sedative, hypnotic or anxiolytic", "F13.121", "F13.221", "F13.921"],
              ["Amphetamine-type or other stimulant", "F15.121", "F15.221", "F15.921"],
              ["Cocaine", "F14.121", "F14.221", "F14.921"],
              ["Other (or unknown) substance", "F19.121", "F19.221", "F19.921"]
            ], note: "The 4th character is **1** for a mild use disorder, **2** for moderate or severe, **9** for none. Diagnose intoxication delirium **instead of** intoxication when attention and cognitive symptoms predominate and need clinical attention." },
            { type: "table", caption: "Substance withdrawal delirium", head: ["Substance", "With mild use disorder", "With moderate or severe use disorder", "No use disorder"], rows: [
              ["Alcohol", "F10.131", "F10.231", "F10.931"],
              ["Opioid", "F11.188", "F11.288", "F11.988"],
              ["Sedative, hypnotic or anxiolytic", "F13.131", "F13.231", "F13.931"],
              ["Other (or unknown) substance", "F19.131", "F19.231", "F19.931"]
            ], note: "Only these four classes have a withdrawal delirium code. **Opioid** withdrawal delirium uses the **.x88** “other opioid-induced disorder” codes." },
            { type: "defs", title: "The other subtypes", items: [
              ["Medication-induced delirium", "A side effect of a medication **taken as prescribed**, coded with the **9** (no use disorder) code of its class: e.g., **F11.921** prescribed opioid, **F13.921** prescribed benzodiazepine, **F15.921** prescribed stimulant, **F16.921** ketamine, **F12.921** pharmaceutical cannabinoid, **F19.921** for drugs outside the classes (e.g., **dexamethasone**). Withdrawal from a prescribed opioid or sedative: **F11.988** or **F13.931**."],
              ["Delirium due to another medical condition", "**F05**, with the condition’s name in the diagnosis, and the condition **coded first**: e.g., **K76.82** hepatic encephalopathy; **F05** delirium due to hepatic encephalopathy."],
              ["Delirium due to multiple etiologies", "**F05** plus separate codes for each cause: e.g., K76.82 hepatic encephalopathy; F05 delirium due to hepatic failure; **F10.231** alcohol withdrawal delirium."]
            ] },
            { type: "steps", title: "Recording a substance delirium (pp. 674–675)", items: [
              ["1. Use disorder first", "Severity of the comorbid use disorder, then the word **with** (no separate use disorder diagnosis is given)."],
              ["2. Delirium name", "[Substance] intoxication delirium, withdrawal delirium, or [medication]-induced delirium."],
              ["3. Course", "Acute or persistent."],
              ["4. Activity", "Hyperactive, hypoactive or mixed."],
              ["Example", "**F10.231** severe alcohol use disorder with alcohol withdrawal delirium, acute, hyperactive. **F19.921** dexamethasone-induced delirium, acute, hyperactive."]
            ] },
            { type: "callout", kind: "pearl", title: "Activity level and course", text: "In hospital, delirium usually lasts **about 1 week**, but some symptoms persist after discharge. People can **switch rapidly** between hyperactive and hypoactive states. The **hyperactive** form is more often recognized and is linked to **medication side effects and drug withdrawal**; the **hypoactive** form is more frequent in **older adults** and is **often unrecognized** (p. 675)." },
            { type: "update", kind: "post", year: "2022", title: "Hepatic encephalopathy code", source: "APA DSM-5-TR Update, September 2022", text: "The manual’s coding examples use **K72.90**; since October 1, 2022, hepatic encephalopathy is **K76.82**. The F05 code itself is unchanged." }
          ]
        },
        {
          id: "s17-delirium-features",
          title: "Delirium: features, prevalence and markers",
          pages: "675–677",
          blocks: [
            { type: "defs", title: "Associated features (p. 676)", items: [
              ["Sleep-wake disturbance", "Daytime sleepiness, nighttime agitation, trouble falling asleep, or **complete reversal** of the sleep-wake cycle; so common it has been proposed as a **core** criterion."],
              ["Emotional disturbance", "Anxiety, fear, depression, irritability, anger, euphoria or apathy, with **rapid, unpredictable shifts**; calling out, screaming, cursing, moaning, especially **at night** and when cues are lacking."],
              ["Perceptual disturbance", "Misinterpretations, **illusions** or hallucinations, **typically visual**, from simple to highly complex."],
              ["Worse in the evening", "Fluctuation often worsens at **night**, when external orienting stimuli decrease."]
            ] },
            { type: "table", caption: "How common delirium is (pp. 676–677)", head: ["Setting", "Figure"], rows: [
              ["Community, overall", "**1%–2%**"],
              ["Older adults in North American emergency departments", "**8%–17%**"],
              ["On hospital admission", "**18%–35%**"],
              ["Arising during hospitalization (general hospital)", "**29%–64%**"],
              ["Older adults after surgery", "**11%–51%**"],
              ["Intensive care", "Up to **81%**"],
              ["Nursing homes or post-acute care", "**20%–22%**"],
              ["End of life (terminal illness)", "Up to **88%**"]
            ] },
            { type: "defs", title: "Sex, markers and consequences", items: [
              ["Sex and gender", "Men more often show **motor agitation and affective lability**; women more often **hypoactive** delirium. **Male sex** is a risk factor (p. 677)."],
              ["EEG", "Often **generalized irregular theta slowing**; **fast activity** occasionally (e.g., some alcohol withdrawal delirium). Slowing within the alpha range is hard to see without a premorbid baseline."],
              ["Function", "More functional decline and **institutional placement**; hospitalized people **65 and older** with delirium have higher rates of death, institutionalization and dementia after discharge."]
            ] },
            { type: "callout", kind: "exam", title: "Delirium and the EEG", text: "Diffuse **slowing** is the classic EEG of delirium; **fast** (beta) activity points to **sedative or alcohol withdrawal** or benzodiazepine effect. A normal EEG argues for a primary psychiatric cause when the picture is unclear." }
          ]
        },
        {
          id: "s17-delirium-course",
          title: "Delirium: course, risk and outcome",
          pages: "677",
          blocks: [
            { type: "list", title: "Course (p. 677)", items: [
              "Most people **recover fully**, with or without treatment, especially those who are **not elderly**.",
              "Untreated or undetected, it can progress to **stupor, coma, seizures or death**.",
              "In older adults it is increasingly linked with **later cognitive decline or major NCD**, especially when cognition was already impaired.",
              "**38%–41%** of people with delirium **die within 1 year** of diagnosis; risk is highest with malignancy and serious medical illness."
            ] },
            { type: "list", title: "Risk factors named in the text", cols: true, items: [
              "Functional impairment",
              "**Preexisting cognitive impairment** (mild or major NCD)",
              "**Sensory impairment** (vision, hearing)",
              "Increasing **age**",
              "Illness severity and comorbidity",
              "Infection",
              "Depression",
              "History of **stroke**",
              "History of **alcohol use**",
              "**Male** sex"
            ] },
            { type: "callout", kind: "caution", title: "Two surprises in the risk text", text: "**Falls** may be an **outcome** of delirium but were **not** found to be a **risk factor**. And in a meta-analysis of studies from 1990 to 2016, **anticholinergic use** was **not a validated predictor** of delirium (p. 677). Anticholinergic burden still matters clinically, but do not state it as an established DSM risk factor." },
            { type: "callout", kind: "pearl", title: "Age and susceptibility", text: "Older adults are **especially** susceptible. Susceptibility is also high in **infancy and childhood**, with significant morbidity and mortality, and **lower** in early to mid-adulthood (p. 677). In a large US ICU case series, younger **African American** patients had **lower** delirium rates than White patients of similar age despite more risk factors." }
          ]
        },
        {
          id: "s17-delirium-ddx",
          title: "Delirium: differential diagnosis and residual categories",
          pages: "677–678",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 677–678)", head: ["Condition", "How to tell"], rows: [
              ["**Major NCD**", "The most common dilemma in confused older adults. Decide whether this is delirium, **delirium on top of an NCD**, or NCD alone; acute onset and fluctuating attention favor delirium. When both are present, **manage the delirium first**."],
              ["Psychotic, bipolar or depressive disorders with psychotic features", "Vivid hallucinations, delusions and agitation can mimic them, but delirium has **disturbed attention and awareness**, a **medical or substance cause**, and usually **visual** rather than auditory hallucinations."],
              ["Acute stress disorder", "Fear, anxiety and dissociation follow a **traumatic event**; attention and arousal are not globally impaired."],
              ["Malingering and factitious disorder", "Atypical symptoms and **no medical condition or substance** that explains the apparent cognitive change."]
            ] },
            { type: "compare", title: "Delirium versus major NCD", items: [
              { title: "Delirium", color: "case", points: ["Onset over **hours to days**.", "**Fluctuates** within a day; worse at night.", "**Attention and awareness** impaired early.", "Usually a **reversible** cause.", "Sleep-wake cycle disrupted."] },
              { title: "Major NCD (e.g., Alzheimer’s)", color: "guide", points: ["Onset over **months to years**.", "Relatively **stable** day to day (except Lewy body disease).", "Attention **preserved** until late; memory first.", "Usually **progressive**.", "Delirium does **not exclude** NCD: it can sit on top of it."] }
            ] },
            { type: "defs", title: "Residual categories (p. 678)", items: [
              ["Other specified delirium (F05)", "Delirium-like presentation that does not meet full criteria, with the **reason recorded**. The manual’s example: **subsyndromal delirium**, with disturbed attention, higher-level thought and circadian rhythm but cognitive impairment **short of** delirium."],
              ["Unspecified delirium (F05)", "The reason is not given, or there is **not enough information**, e.g., in the **emergency room**."]
            ] },
            { type: "update", kind: "post", year: "2022, 2025", title: "Residual delirium codes and the subsyndromal example", source: "APA DSM-5-TR Updates, September 2022 and September 2025", text: "Since October 1, 2022, other specified and unspecified delirium are coded **F05** (the 2022 printing gives **R41.0**). In September 2025 the APA reworded the other specified example as **subsyndromal delirium-like disorder**, in line with the manual’s use of “-like” for a presentation that resembles a disorder but misses one requirement." },
            { type: "callout", kind: "exam", title: "Residual delirium is still a delirium code", text: "Both residual delirium categories use **F05**, the same code as delirium due to another medical condition. The diagnosis name (with the recorded reason) is what tells them apart." }
          ]
        }
      ]
    },
    {
      title: "Major and mild neurocognitive disorders",
      sections: [
        {
          id: "s17-ncd-criteria",
          title: "Major and mild NCD: the criteria",
          pages: "679–681",
          blocks: [
            { type: "compare", title: "The two syndromes side by side (pp. 679–680)", items: [
              { title: "Major NCD", color: "case", points: ["**A** **Significant** decline in one or more domains, shown by (1) a **concern** of the person, an informant or the clinician **and** (2) **substantial** impairment on testing, ideally standardized neuropsychological tests.", "**B** Deficits **interfere with independence**: at minimum, needs help with **complex IADLs** (paying bills, managing medications).", "**C** Not **exclusively during delirium**.", "**D** Not better explained by another mental disorder (e.g., MDD, schizophrenia).", "Severity: **mild** (IADLs), **moderate** (basic ADLs), **severe** (fully dependent)."] },
              { title: "Mild NCD", color: "guide", points: ["**A** **Modest** decline in one or more domains, shown by (1) a **concern** **and** (2) **modest** impairment on testing.", "**B** Deficits do **not** interfere with independence: complex IADLs are **preserved**, though they may need **more effort, compensatory strategies or accommodation**.", "**C** Not exclusively during delirium.", "**D** Not better explained by another mental disorder.", "No severity specifier."] }
            ] },
            { type: "criteria", title: "Specifiers for both syndromes", pages: "679–681", items: [
              ["Etiology", "Due to Alzheimer’s disease, frontotemporal degeneration, Lewy body disease, vascular disease, traumatic brain injury, substance/medication use, HIV infection, prion disease, Parkinson’s disease, Huntington’s disease, another medical condition, multiple etiologies, or **unknown etiology** (the 2022 printing says *unspecified etiology*)."],
              ["Behavior", "**Without** behavioral disturbance, or **with** behavioral disturbance (specify: psychotic symptoms, mood disturbance, agitation, apathy, or other)."],
              ["Severity (major only)", "**Mild**: difficulty with instrumental activities (housework, managing money). **Moderate**: difficulty with **basic** activities (feeding, dressing). **Severe**: **fully dependent**."]
            ], note: "Psychiatric symptoms caused by the same condition get **additional** codes, e.g., **F06.2** psychotic disorder due to Alzheimer’s disease, with delusions; **F06.32** depressive disorder due to Parkinson’s disease, with major depressive–like episode." },
            { type: "callout", kind: "key", title: "Independence, not test scores, divides major from mild", text: "Both syndromes need a **concern plus objective evidence**. What separates them is **Criterion B**: does the person need **someone else** to take over tasks they used to do alone? Needing help with bills or medications makes it **major**; managing them with lists, alarms and extra time keeps it **mild**. The boundary is **inherently arbitrary**, so judge it from a careful history (p. 686)." },
            { type: "callout", kind: "caution", title: "Severity is the NCD’s, not the disease’s", text: "The **mild / moderate / severe** specifier rates the **major NCD** by daily function. Do not confuse it with the **mild NCD** diagnosis, or with the severity of an underlying illness such as a TBI. “Major NCD, mild” is a person who needs help with IADLs; “mild NCD” is a person who does not." },
            { type: "update", kind: "post", year: "2022", title: "Severity is now coded", source: "APA DSM-5-TR Neurocognitive Disorders Supplement, September 2022", text: "The 2022 printing says the severity specifiers **cannot be coded** for major NCD. Since October 1, 2022 they are coded in the **4th character** (A mild, B moderate, C severe), and the type of behavioral disturbance in the 5th–6th characters. For mild NCD, **with vs without** behavioral disturbance is now coded (**F06.71 / F06.70**) when the etiology is probable or known." }
          ]
        },
        {
          id: "s17-ncd-assessment",
          title: "Establishing decline: concern, testing and function",
          pages: "685–686, 688–689",
          blocks: [
            { type: "p", text: "Criterion A asks for **both** a concern and objective evidence because each alone misleads (p. 685). Tests alone miss decline in a **high-functioning** person whose “normal” score is a big drop for them, and over-diagnose someone whose low score is their **lifelong baseline** or a result of test conditions or passing illness. Concern alone misses people with **poor insight** or unobservant informants, and over-diagnoses the **worried well**." },
            { type: "ladder", title: "Typical test thresholds (p. 685)", ticks: [[0, "−3 SD"], [33.3, "−2 SD"], [66.7, "−1 SD"], [100, "mean"]], rows: [
              { label: "Major NCD", from: 0, to: 33.3, color: "case", span: "≥2 SD below (≤3rd percentile)" },
              { label: "Mild NCD", from: 33.3, to: 66.7, color: "guide", span: "1–2 SD below (3rd–16th)" },
              { label: "Expected range", from: 66.7, to: 100, color: "hy", span: "Within 1 SD" }
            ], note: "These are guides, not criteria: thresholds depend on the test, the norms, test conditions, sensory limits and intercurrent illness." },
            { type: "defs", title: "Doing it well", items: [
              ["Elicit the concern", "A **concern** differs from a **complaint**: it may need to be **drawn out** with specific questions (forgetting a short grocery list, losing the plot of a TV show, trouble resuming an interrupted task, organizing taxes, planning a holiday meal)."],
              ["Confirm it is a change", "The difficulty must be a **change**, not a lifelong pattern; the person, an informant, prior contact or occupational clues establish this."],
              ["Rule out motor and sensory limits", "Make sure the difficulty is **cognitive**, not due to poor vision, hearing or movement."],
              ["Use appropriate norms", "Compare with norms for **age, sex, education and cultural background**; prefer **culturally validated** tests. Norms are hardest to apply at very high or very low education and outside the person’s language."],
              ["Bedside tests", "When formal testing is unavailable, the domain tests in Table 1 or a brief global screen can supply objective data, but brief screens are **insensitive** to single-domain or high-premorbid decline and **oversensitive** at low premorbid ability."],
              ["Serial testing", "A **longitudinal** quantified evaluation may be the key to detecting mild NCD and is a benchmark for decline or treatment response."]
            ] },
            { type: "callout", kind: "culture", title: "Culture, education and bias (pp. 687–688)", text: "Families may **normalize** decline as ordinary aging, and **stigma** can delay help-seeking. Decline is noticed sooner in people with **complex** jobs or hobbies. Interpreting tests must allow for **stereotype threat**, the clinician’s **implicit bias**, and the right **language** for bilingual people, who may lose a later-learned language first. Where **filial piety** means adult children take over tasks, a functional loss can be **hidden**." },
            { type: "case", title: "Clinical vignette: the retired engineer", text: "A 71-year-old retired civil engineer scores in the normal range on a brief screen. His wife says he now needs her to check the household accounts he once ran easily, he keeps three calendars to avoid missing appointments, and he no longer follows the plots of novels. Detailed testing shows recall 1.5 SD below his age and education norms. He still pays the bills himself, slowly.", point: "**Mild NCD**: a concern from an informant, **modest** objective impairment against appropriate norms, and **preserved independence** with compensation. A normal screen does not exclude decline in a **high-premorbid** person." }
          ]
        },
        {
          id: "s17-ncd-behavior",
          title: "Behavioral and psychological symptoms",
          pages: "684–685, 691–692",
          blocks: [
            { type: "table", caption: "Behavioral features and the subtypes where they stand out (pp. 684–685)", head: ["Feature", "Notes from the text", "Typical subtypes"], rows: [
              ["**Psychotic symptoms**", "Common at the **mild-to-moderate** stage of major NCD; **persecutory** delusions; **visual** hallucinations more common than in mood or psychotic disorders; disorganized speech and behavior are **not** characteristic", "Alzheimer’s, **Lewy body**, frontotemporal"],
              ["**Depression**", "Common **early**, even at the mild NCD stage", "Alzheimer’s, **Parkinson’s**, vascular"],
              ["**Elation**", "More common in frontotemporal degeneration", "Frontotemporal"],
              ["**Agitation**", "Disruptive motor or vocal activity, often from **confusion or frustration**, and **combative** resistance to bathing or dressing; increases in **moderate to severe** stages", "All, late"],
              ["**Apathy**", "Less motivation and goal-directed behavior with **blunted emotional responsiveness**; may appear early", "Alzheimer’s; **prominent** in frontotemporal"],
              ["**Sleep disturbance**", "Insomnia, hypersomnia, circadian rhythm problems", "All; REM sleep behavior disorder in Lewy body and Parkinson’s"],
              ["Other", "**Wandering, disinhibition, hyperphagia, hoarding**", "Disinhibition and hyperphagia in frontotemporal"]
            ] },
            { type: "callout", kind: "key", title: "Record each disturbance, and consider a second diagnosis", text: "When more than one behavioral disturbance is present, note **each** under “with behavioral disturbance” (p. 685), and since 2022 code each one separately. If the psychotic or mood symptoms are judged due to the same disease, add the **due to another medical condition** diagnosis: e.g., **F06.2** psychotic disorder due to Alzheimer’s disease, with delusions; **F06.33** bipolar and related disorder due to frontotemporal degeneration, with manic features; **F07.0** personality change due to frontotemporal degeneration, disinhibited type. See [[dx:psychotic-due-to-amc]], [[dx:depressive-due-to-amc]] and [[dx:personality-change-amc]]." },
            { type: "defs", title: "Neuropsychiatric symptoms in Alzheimer’s disease (pp. 691–692)", items: [
              ["How common", "Nearly **universal**: in one US sample, **98%** developed them within 5 years."],
              ["Why they matter", "More disability, worse quality of life, faster decline, more caregiver burden, **earlier institutionalization**, higher mortality; often more distressing than the memory loss and the usual **reason families seek help**."],
              ["Often first", "**More than half** of people who develop dementia begin with neuropsychiatric symptoms."],
              ["By stage", "Mild NCD or mildest major NCD: **depression, irritability, apathy**. Moderately severe: **delusions, agitation, combativeness, wandering**. Late: **gait disturbance, dysphagia, incontinence, myoclonus, seizures**."]
            ] },
            { type: "callout", kind: "pearl", title: "Psychosis of NCD looks different", text: "Psychosis in NCD has **persecutory** delusions and **visual** hallucinations, but **not** the disorganized speech and behavior of earlier-onset psychosis (p. 684). In practice the delusions are often simple (theft, infidelity, intruders) or misidentifications; that detail is clinical teaching, not DSM text. New psychosis after 60 with these features should prompt a cognitive and medical work-up rather than a schizophrenia diagnosis." }
          ]
        },
        {
          id: "s17-ncd-epi",
          title: "Prevalence, course, risk and suicide",
          pages: "686–689",
          blocks: [
            { type: "table", caption: "Prevalence (pp. 686–687)", head: ["Syndrome", "Age 65", "Age 85"], rows: [
              ["Dementia (≈ major NCD), international", "**1%–2%**", "Up to **30%**"],
              ["Mild cognitive impairment (≈ mild NCD)", "**2%–10%**", "**5%–25%**"]
            ], note: "Prevalence climbs steeply after 60, so narrow age bands are more accurate than “over 65”. Mild NCD estimates are very sensitive to how it is defined." },
            { type: "defs", title: "Who and how", items: [
              ["Sex", "Higher dementia prevalence in **women**, largely or wholly due to **longer life**; women show more depression, anxiety and delusions, men more aggression, apathy and vegetative symptoms."],
              ["Ethnoracial differences (US)", "Some studies find incidence highest in **African Americans**, then American Indians/Alaska Natives, Latinx, Pacific Islanders, non-Latinx Whites and Asian Americans; among four Asian American groups, **Filipino Americans** had the highest incidence. Differences track risk factors and social determinants, not race itself."],
              ["Strongest risk factor", "**Age**, because it raises the risk of neurodegenerative and cerebrovascular disease. Lower **education and literacy** also raise risk."],
              ["Course by subtype", "**Static** after a single event (TBI, stroke) once swelling settles; **fluctuating** (consider superimposed delirium); **insidious and progressive** in the neurodegenerative diseases."],
              ["Age of onset", "Easiest to identify in **youth and midlife**, when families seek care (malingering or factitious disorder may be a concern); in very late life symptoms may go unnoticed, and mild NCD must be told from **normal aging**."],
              ["Childhood onset", "May also warrant **intellectual developmental disorder** or another neurodevelopmental diagnosis to capture the whole picture."]
            ] },
            { type: "callout", kind: "caution", title: "Suicide risk is raised", text: "Large studies show **elevated suicidal behavior** across NCD etiologies (p. 689). In Denmark, people with a hospital diagnosis of dementia had a **3- to 8-fold** suicide risk; a Taiwanese study linked late-life **suicide attempts** with later dementia. Suicide risk is especially high in **Huntington’s disease** and after **TBI**. Keep asking about mood and suicidal thoughts at every stage." }
          ]
        },
        {
          id: "s17-ncd-ddx",
          title: "Differential diagnosis of major and mild NCD",
          pages: "689–690",
          blocks: [
            { type: "table", caption: "Differential diagnosis (p. 689)", head: ["Condition", "How to tell"], rows: [
              ["**Normal cognition**", "The boundary with mild NCD is arbitrary; use careful history and **serial** quantified assessment."],
              ["**Delirium**", "Persistent delirium can resemble NCD and can **co-occur**; assess **attention and arousal**."],
              ["**Major depressive disorder**", "Can co-occur. **Consistent** memory and executive deficits suggest Alzheimer’s; **variable**, nonspecific performance suggests depression. Treating the depression and **re-observing** may settle it."],
              ["**Specific learning disorder and other neurodevelopmental disorders**", "Clarify **baseline**: a lifelong deficit is not a decline."]
            ] },
            { type: "compare", title: "Depression with cognitive complaints versus early Alzheimer’s NCD (classic clinical contrasts; only the testing pattern is in the DSM text)", items: [
              { title: "Depression (“pseudodementia”)", color: "clin", points: ["Onset often dated, with mood symptoms **first**.", "Complains **a lot** of memory loss; highlights failures.", "“I don’t know” answers; **poor effort**; variable testing.", "Recall **improves with cues**.", "Improves with **treatment of depression**."] },
              { title: "Early Alzheimer’s NCD", color: "guide", points: ["Insidious onset; **memory first**.", "Often **minimizes** deficits; family is more worried.", "Tries hard; near-miss answers; **consistent** deficits.", "Recall **does not** improve with cues.", "Progresses; depression may coexist."] }
            ] },
            { type: "callout", kind: "exam", title: "Depression and NCD often go together", text: "Late-life depression is both a **risk factor** for and a **prodrome** of NCD. If cognitive deficits **persist** after the mood recovers, keep following the person. When depressive symptoms are judged due to the NCD’s disease, diagnose **depressive disorder due to [the disease]** rather than MDD (p. 695). See [[gl:pseudodementia]]." },
            { type: "callout", kind: "pearl", title: "Delirium often unmasks an NCD", text: "In older adults, a **hospital delirium** is often the first time an NCD is noticed, though a careful history usually reveals earlier decline (p. 689). After the delirium clears, **reassess cognition** before discharge and again weeks later." }
          ]
        }
      ]
    },
    {
      title: "Neurodegenerative subtypes",
      sections: [
        {
          id: "s17-alzheimers",
          title: "NCD due to Alzheimer’s disease: the criteria",
          pages: "690–691",
          blocks: [
            { type: "criteria", title: "Major or mild NCD due to Alzheimer’s disease in brief", code: "G30.9 + F02.xx · F03.xx · F06.7x · G31.84", pages: "690", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "**Insidious onset** and **gradual progression** in one or more domains; for **major** NCD, at least **two** domains must be impaired."],
              ["C", "Probable or possible Alzheimer’s disease:", [
                "**Major NCD, probable**: either (1) a **causative genetic mutation** from family history or testing, or (2) **both** clear decline in **memory and learning plus at least one other domain**, and **steadily progressive** decline **without extended plateaus**. Otherwise, **possible**.",
                "**Mild NCD, probable**: only with a **causative mutation** (testing or family history).",
                "**Mild NCD, possible**: no mutation, and **both** clear decline in **memory and learning** and steadily progressive decline without extended plateaus."
              ], "The 2022 printing adds a third requirement to the major-probable and mild-possible lists: **no evidence of mixed etiology**. The APA removed it in **September 2024** (see the update box)."],
              ["D", "Not better explained by cerebrovascular disease, another neurodegenerative disease, a substance, or another mental, neurological or systemic disorder."]
            ], note: "Major, probable: **G30.9** then **F02.xx**. Major, possible: **F03.xx** only. Mild, probable: G30.9 then **F06.70 / F06.71**. Mild, possible: **G31.84** only. Add codes for psychiatric symptoms due to Alzheimer’s disease (e.g., F06.2, F06.32)." },
            { type: "callout", kind: "key", title: "The asymmetry between major and mild", text: "For **major** NCD, a **typical clinical picture** (memory plus another domain, steady progression) is enough for **probable** Alzheimer’s disease. For **mild** NCD the same picture earns only **possible**, because it is less certain that mild deficits will progress; **probable** at the mild level needs a **causative mutation** (p. 691). The manual notes that **biomarkers** (amyloid or tau PET, CSF) increase certainty and may change how probable and possible are used." },
            { type: "update", kind: "post", year: "2024", title: "Alzheimer’s criteria revised: mixed etiologies allowed", source: "APA DSM-5-TR Update, September 2024", text: "The “**no evidence of mixed etiology**” item was **deleted** from the probable (major NCD) and possible (mild NCD) lists, and the lead-ins changed from “all three” to “**both**”. The reason given: mixed pathology is common, and the old wording prevented Alzheimer’s disease from being one of the causes in **NCD due to multiple etiologies**. Criterion D is unchanged. No codes changed." },
            { type: "update", kind: "post", year: "2022", title: "Possible Alzheimer’s disease takes F03", source: "APA DSM-5-TR Neurocognitive Disorders Supplement, September 2022", text: "Since October 1, 2022, **probable** Alzheimer’s disease is coded **G30.9 + F02.xx** (major) or **G30.9 + F06.7x** (mild), while **possible** Alzheimer’s disease takes **F03.xx** (major) or **G31.84** (mild) with **no** G30.9. The 2022 printing coded both as G30.9 + F02.80/F02.81 and both mild forms as G31.84." },
            { type: "case", title: "Clinical vignette: the repeated question", text: "A 76-year-old retired teacher has, over 3 years, begun asking the same question several times in one conversation, forgetting appointments and getting lost driving to her daughter’s house. Her son now manages her medications and bills; she dresses and feeds herself. Testing shows poor delayed recall that does not improve with cues, and impaired figure copying. There is no stroke history; MRI shows hippocampal atrophy only.", point: "**Major NCD due to probable Alzheimer’s disease, mild**: memory plus a second domain (perceptual-motor), steady progression, needs help with **IADLs only**. Code **G30.9, F02.A0**." }
          ]
        },
        {
          id: "s17-alzheimers-clinical",
          title: "Alzheimer’s disease: features, course and markers",
          pages: "691–695",
          blocks: [
            { type: "defs", title: "Presentation (p. 691)", items: [
              ["Typical", "**Amnestic**: impaired learning and memory, sometimes with executive deficits at the mild stage."],
              ["Major stage", "Visuoconstruction/perceptual-motor and **language** (word retrieval) also impaired, especially when moderate to severe."],
              ["Atypical variants", "**Visuospatial** and **logopenic aphasic** variants; less often a dysexecutive-behavioral variant."],
              ["Social cognition", "Usually **preserved until late**, except in the dysexecutive-behavioral variants."],
              ["Behavior first", "Likely **more than half** first show behavioral symptoms before cognitive ones."]
            ] },
            { type: "table", caption: "Numbers to know (pp. 692–693)", head: ["Item", "Figure"], rows: [
              ["Prevalence, high-income countries", "**5%–10%** at 60–69, at least **25%** thereafter"],
              ["Dementia due to Alzheimer’s disease, US", "**11%** of people 65+; **32%** of people 85+; **81%** of cases are 75 or older"],
              ["Share of all dementias", "About **60% to over 90%**, depending on setting and criteria"],
              ["Usual onset", "Ages **70–89**; early-onset at **40–59** is often but not always genetic"],
              ["Survival after diagnosis", "About **10 years** (reflects age at diagnosis); some live **20 years**"],
              ["Usual cause of death", "**Aspiration**"],
              ["Genetic contribution", "**60%–80%** of attributable risk; more than **45** risk loci"]
            ] },
            { type: "defs", title: "Genetics and risk (p. 693)", items: [
              ["Autosomal dominant", "Rare mutations on chromosomes **1, 14 and 21**: **PSEN2**, **PSEN1**, **APP**."],
              ["Down syndrome", "**Trisomy 21** (extra APP copy): Alzheimer’s disease if they survive to midlife."],
              ["APOE ε4", "The strongest common susceptibility gene: raises risk and **lowers age at onset**, especially in **homozygotes**; it is a **risk factor**, not a diagnostic test, and its effect varies across ethnic groups."],
              ["Other genes", "e.g., a **PSEN1 Gly206Ala** mutation in some people of Puerto Rican descent; a stronger **ABCA7** association in African Americans."],
              ["Modifiable risks", "Low education; midlife **hypertension, obesity, hearing loss**; late-life **smoking, depression, physical inactivity, social isolation, diabetes**; multiple vascular risk factors; TBI (controversial)."]
            ] },
            { type: "defs", title: "Diagnostic markers (pp. 693–694)", items: [
              ["Pathology", "**Amyloid** neuritic plaques, **tau** neurofibrillary tangles and neuronal loss (hippocampal, parietal, frontal atrophy)."],
              ["Amyloid", "Amyloid PET, or **low CSF amyloid-β42** (amyloid deposition is an **early** step)."],
              ["Tau", "Tau PET, or **raised CSF total tau or phospho-tau**."],
              ["Neuronal injury (less specific)", "**Hippocampal and temporoparietal** atrophy on MRI; **temporoparietal hypometabolism** on FDG-PET."],
              ["Blood tests", "Described as **being developed** in 2022 (see the update box)."]
            ] },
            { type: "update", kind: "post", year: "2025", title: "Blood biomarkers reach the clinic", source: "US FDA clearances: Fujirebio Lumipulse plasma pTau217/β-amyloid 1-42 ratio (May 2025); Roche Elecsys pTau181 (October 2025)", text: "The FDA has cleared blood tests that detect Alzheimer’s pathology in adults **with cognitive symptoms**: a **pTau217 / amyloid-β42 ratio** for specialty care, and a **pTau181** test for **ruling out** Alzheimer’s pathology in primary care. They support, but do not replace, the clinical diagnosis; a positive result is usually confirmed with PET or CSF." },
            { type: "update", kind: "post", year: "2023–2026", title: "Anti-amyloid antibodies", source: "US FDA approvals of lecanemab (traditional approval July 2023; subcutaneous autoinjector 2025–2026) and donanemab (July 2024); prescribing information", text: "**Lecanemab** and **donanemab** are approved for **early symptomatic** Alzheimer’s disease (the **mild NCD** or **mild dementia** stage) with **confirmed amyloid** pathology. They modestly slow decline. The main risk is **ARIA** (amyloid-related imaging abnormalities: edema or microhemorrhage), monitored with **MRI**; risk is highest in **APOE ε4 homozygotes**, so APOE testing is advised before treatment. Availability outside the US varies." },
            { type: "update", kind: "post", year: "2024", title: "Modifiable risk: the 2024 Lancet Commission", source: "Livingston G, et al. Dementia prevention, intervention, and care: 2024 report of the Lancet standing Commission. Lancet 2024", text: "The Commission lists **14 modifiable risk factors** across life (adding **untreated vision loss** and **high LDL cholesterol** to the earlier 12) and estimates that about **45%** of dementia could in principle be prevented or delayed. It overlaps with the manual’s list and concerns dementia generally, not only Alzheimer’s disease." },
            { type: "callout", kind: "caution", title: "Suicide and safety", text: "Alzheimer’s disease carries a **moderate** suicide risk even years after diagnosis, so keep assessing mood and suicidality (p. 694). Early on, memory loss, disorientation and mood symptoms raise **safety** issues such as **driving**. **Caregivers** often lose their social network and develop health problems of their own." },
            { type: "table", caption: "Differential diagnosis (pp. 694–695)", head: ["Condition", "How to tell"], rows: [
              ["NCD with Lewy bodies", "Early **fluctuations**, parkinsonism, gait imbalance, **visual hallucinations**."],
              ["Frontotemporal NCD", "Early **behavior or language** change; memory relatively spared."],
              ["Vascular NCD", "Stroke **temporally related** to onset, and infarcts or hemosiderin on imaging sufficient to explain it. **White matter change alone** is not enough to call it mixed."],
              ["Other neurological or systemic illness", "Thyroid disease, **vitamin B12 deficiency**: hard to separate at the mild level; check for them."],
              ["Major depressive disorder", "Especially at the mild level; improvement with treatment helps; if depression is due to Alzheimer’s disease, diagnose **depressive disorder due to Alzheimer’s disease, with major depressive–like episode**."]
            ] }
          ]
        },
        {
          id: "s17-ftd",
          title: "Frontotemporal NCD",
          pages: "695–699",
          blocks: [
            { type: "criteria", title: "Major or mild frontotemporal NCD in brief", code: "G31.09 + F02.xx · F03.xx · F06.7x · G31.84", pages: "695–696", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "**Insidious onset** and **gradual progression**."],
              ["C", "Either:", [
                "**Behavioral variant**: **three or more** of (i) behavioral **disinhibition**; (ii) **apathy or inertia**; (iii) loss of **sympathy or empathy**; (iv) **perseverative, stereotyped or compulsive/ritualistic** behavior; (v) **hyperorality** and dietary changes; **plus** prominent decline in **social cognition and/or executive** abilities.",
                "**Language variant**: prominent decline in **language** (speech production, word finding, naming, grammar or comprehension)."
              ]],
              ["D", "**Relative sparing** of **learning and memory** and **perceptual-motor** function."],
              ["E", "Not better explained by cerebrovascular disease, another neurodegenerative disease, a substance, or another disorder."]
            ], specifiers: [
              ["Probable", "A **causative mutation** (family history or testing) **or** **disproportionate frontal and/or temporal** involvement on **neuroimaging**."],
              ["Possible", "No mutation evidence, and **neuroimaging not performed**."]
            ], note: "Major, probable: **G31.09** then **F02.xx**; possible: **F03.xx**. Mild: G31.09 + F06.7x (probable) or G31.84 (possible). Psychiatric codes, e.g., **F06.33** bipolar and related disorder due to frontotemporal degeneration, with manic features; **F07.0** personality change, disinhibited type." },
            { type: "callout", kind: "mnemonic", title: "The behavioral-variant five", text: "**DASH-P**: **D**isinhibition, **A**pathy, loss of **S**ympathy, **H**yperorality, **P**erseveration. Need **three**, plus social-cognitive or executive decline. Original to this app: check the list on p. 696." },
            { type: "table", caption: "The three frontotemporal syndromes (pp. 696–698)", head: ["Variant", "Picture", "Atrophy"], rows: [
              ["**Behavioral** (about **60%**)", "Apathy or disinhibition, loss of interest in self-care, socially inappropriate acts, changes in social style and in religious or political beliefs, repetitive movements, hoarding, **hyperorality**; poor insight; often referred to **psychiatry first**", "**Medial frontal** and anterior temporal lobes"],
              ["**Semantic** language", "Loss of **word meaning** and object knowledge; fluent but empty speech", "Middle, inferior and anterior **temporal** lobes, bilateral but **left > right**"],
              ["**Nonfluent/agrammatic** language", "Effortful, halting speech with **grammatical** errors", "**Left posterior frontal-insular**"],
              ["*Logopenic* (not frontotemporal)", "Word-finding pauses and poor repetition", "Left temporoparietal; usually **Alzheimer’s** pathology"]
            ] },
            { type: "defs", title: "Clinical figures (pp. 697–698)", items: [
              ["Onset", "Commonly in the **50s** (range 20s to 80s); a common cause of NCD **before 65**; **20%–25%** of cases start after 65."],
              ["Prevalence", "**2–31 per 100,000**; about **5%** of dementias in unselected autopsy series; men and women about equal."],
              ["Survival", "Median **6–11 years** from symptoms and **3–4 years** from diagnosis; **faster** decline than typical Alzheimer’s; **motor neuron disease** shortens it further."],
              ["Genetics", "About **40%** have a family history of early-onset NCD and about **10%** autosomal dominant inheritance: **MAPT** (tau), **GRN** (progranulin), **C9orf72**; also TARDBP (TDP-43), VCP, CHMP2B, FUS."],
              ["Associated", "Extrapyramidal signs overlapping **PSP** and **corticobasal degeneration**; **motor neuron disease** features; a subset have **visual hallucinations**; late **loss of sphincter control**."],
              ["Testing", "Few deficits early on formal tests; executive problems (flexibility, abstraction, response inhibition) with **memory and perceptual-motor skills spared**."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 698–699)", head: ["Condition", "How to tell"], rows: [
              ["Alzheimer’s disease", "Early **memory** loss; but **10%–30%** of frontotemporal-looking syndromes have Alzheimer’s pathology at autopsy (especially dysexecutive or logopenic)."],
              ["Primary mental disorder (MDD, bipolar disorder, schizophrenia)", "Behavioral variant is often first treated as a psychiatric illness; **progressive cognitive decline** settles it. Treatable mimics: metabolic, nutritional, infectious."],
              ["Progressive supranuclear palsy", "**Vertical supranuclear gaze palsy**, axial parkinsonism, **backward falls (retropulsion)**, pseudobulbar signs."],
              ["Corticobasal degeneration", "**Asymmetric** rigidity, **limb apraxia**, myoclonus, **alien limb**, cortical sensory loss."],
              ["Vascular NCD", "Can cause apathy and executive loss, but a **cerebrovascular event** is tied to onset and imaging shows lesions."]
            ] },
            { type: "case", title: "Clinical vignette: the changed accountant", text: "A 56-year-old accountant has, over 2 years, started telling crude jokes at work, shoplifted sweets, eats whole packets of biscuits, and repeats the same walk route three times a day. He shows no concern when his wife cries. He remembers recent events and finds his way easily. His wife now handles their money because he made reckless purchases. MRI shows bilateral medial frontal and anterior temporal atrophy.", point: "**Major frontotemporal NCD, behavioral variant, probable** (imaging), with behavioral disturbance: disinhibition, loss of empathy, hyperorality and stereotyped behavior with **memory spared**. Code **G31.09** with **F02.A18** (other behavioral disturbance: disinhibition)." }
          ]
        },
        {
          id: "s17-lewy",
          title: "NCD with Lewy bodies",
          pages: "699–702",
          blocks: [
            { type: "criteria", title: "Major or mild NCD with Lewy bodies in brief", code: "G31.83 + F02.xx · F03.xx · F06.7x · G31.84", pages: "699", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "**Insidious onset** and **gradual progression**."],
              ["C", "A combination of core and suggestive features:", [
                "**Core**: (a) **fluctuating cognition** with pronounced variation in attention and alertness; (b) **recurrent, well-formed, detailed visual hallucinations**; (c) spontaneous **parkinsonism** beginning **after** the cognitive decline.",
                "**Suggestive**: (a) **REM sleep behavior disorder**; (b) **severe neuroleptic sensitivity**."
              ]],
              ["D", "Not better explained by cerebrovascular disease, another neurodegenerative disease, a substance, or another disorder."]
            ], specifiers: [
              ["Probable", "**Two core** features, **or** one suggestive feature **with one or more** core features."],
              ["Possible", "**One core** feature only, **or** one or more **suggestive** features only."]
            ], note: "Major, probable: **G31.83** then **F02.xx**; possible: **F03.xx**. Mild: G31.83 + F06.7x (probable) or G31.84 (possible). Psychiatric codes, e.g., **F06.0** psychotic disorder due to Lewy body disease, with hallucinations." },
            { type: "callout", kind: "mnemonic", title: "Counting to probable", text: "Think **2 core = probable**; **1 core + 1 suggestive = probable**; **1 core alone or suggestive alone = possible**. A suggestive feature can **upgrade** a core feature but cannot make it probable by itself. Original to this app: check p. 699." },
            { type: "defs", title: "Features (pp. 700–701)", items: [
              ["Cognition", "Early **attention, executive and visuoperceptual** deficits, rather than memory."],
              ["Fluctuation", "Can look like **delirium**, with or without a trigger; may need caregiver reports or **fluctuation scales**."],
              ["Parkinsonism", "Often mild, variable levodopa response; **up to 25%** never develop it; must be told from **neuroleptic-induced** signs."],
              ["Neuroleptic sensitivity", "Severe in **up to 50%**: antipsychotics only with **extreme caution**."],
              ["Associated", "**Repeated falls**, syncope, transient unresponsiveness; **autonomic** dysfunction (orthostatic hypotension, constipation, urinary incontinence); hypersomnia; **hyposmia**; hallucinations in other senses; apathy, anxiety, depression, delusions."],
              ["Prodrome", "Often **acute confusional episodes** (delirium) after illness or surgery."],
              ["Function", "**More impaired than expected** for the cognitive deficit, because of motor and autonomic problems; worse quality of life than Alzheimer’s disease."]
            ] },
            { type: "table", caption: "Biomarkers (p. 701)", head: ["Weight", "Marker"], rows: [
              ["Equivalent to a core feature", "**Low striatal dopamine transporter uptake** on SPECT or PET (DaT scan); **low MIBG** myocardial uptake (cardiac sympathetic denervation); **REM sleep without atonia** on polysomnography"],
              ["Supportive only", "**Relative preservation of medial temporal lobes** on MRI; low occipital perfusion/metabolism with or without the **cingulate island sign**; posterior slow-wave EEG activity with periodic fluctuations"],
              ["Pathology", "Misfolded **α-synuclein**, mainly **limbic** (with or without neocortex)"]
            ] },
            { type: "table", caption: "Numbers to know (pp. 700–701)", head: ["Item", "Figure"], rows: [
              ["Population prevalence (older adults)", "**0%–1.2%**"],
              ["Share of dementia", "**4.2%** in the community; **7.5%** in clinics; Lewy bodies found in **20%–35%** of dementias at autopsy"],
              ["Sex", "Incidence about **3 times** higher in men 65+ (Minnesota study)"],
              ["Onset", "Ages **50–89**, mostly **mid-70s**"],
              ["Survival", "**5.5–7.7 years** from cognitive onset"]
            ] },
            { type: "callout", kind: "caution", title: "Before you prescribe the antipsychotic", text: "A confused older adult with **visual hallucinations**, **fluctuating** alertness and **falls** may have Lewy body disease. Up to half react badly to antipsychotics (rigidity, sedation, falls, confusion, even death). Ask about **acting out dreams** and look for subtle parkinsonism first." }
          ]
        },
        {
          id: "s17-parkinsons",
          title: "NCD due to Parkinson’s disease, and the 1-year rule",
          pages: "702, 723–726",
          blocks: [
            { type: "criteria", title: "Major or mild NCD due to Parkinson’s disease in brief", code: "G20.C + F02.xx · F03.xx · F06.7x · G31.84", pages: "723", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "Occurs in the setting of **established Parkinson’s disease**."],
              ["C", "**Insidious onset** and **gradual progression**."],
              ["D", "Not attributable to another medical condition or better explained by another mental disorder."]
            ], specifiers: [
              ["Probably due to", "**Both**: (1) **no evidence of mixed etiology**, and (2) Parkinson’s disease **clearly precedes** the NCD."],
              ["Possibly due to", "**Only one** of these is met."]
            ], note: "Major, probably due to: **G20.C** then **F02.xx**; possibly due to: **F03.xx**. Mild: G20.C + F06.7x or G31.84. Psychiatric codes, e.g., F06.0 psychotic disorder due to Parkinson’s disease, with hallucinations; F06.31 depressive disorder due to Parkinson’s disease, with depressive features." },
            { type: "update", kind: "post", year: "2023", title: "Parkinson’s disease is now G20.C", source: "APA DSM-5-TR Update, September 2023; ICD-10-CM FY2024", text: "On October 1, 2023, ICD-10-CM split **G20** into more specific codes. DSM-5-TR uses **G20.C** (parkinsonism, unspecified) wherever the manual prints G20. The new dyskinesia and fluctuation codes (G20.A1–G20.B2) are not used in DSM-5-TR." },
            { type: "timeline", title: "Which comes first? The 1-year rule (pp. 702, 725)", cols: ["Year −2", "Year −1", "Year 0", "Year +1", "Year +2"], rows: [
              { label: "Lewy bodies", from: 0, to: 3, color: "case", bar: "Cognition first or within 1 year" },
              { label: "Either", from: 1, to: 3, color: "hy", bar: "Clinician chooses", note: "NCD begins before or within 12 months of Parkinson’s disease." },
              { label: "Parkinson’s disease", from: 3, to: 5, color: "guide", bar: "PD ≥1 year before NCD" }
            ] },
            { type: "callout", kind: "key", title: "How the two expert systems agree and disagree", text: "Lewy body consensus criteria attribute dementia to **Parkinson’s disease** only if PD was diagnosed **at least 1 year before** cognition reached the major NCD level; in **NCD with Lewy bodies**, cognitive symptoms may begin **before, with, or without** parkinsonism. Parkinson’s criteria allow cognition to come first. So when NCD starts **before or within 12 months** of PD, the clinician **chooses**; when PD has been present **1 year or more** before cognitive symptoms, **both** agree on NCD due to Parkinson’s disease. At the **mild** level the order may be unclear: use **unspecified NCD** until it becomes evident (pp. 702, 725)." },
            { type: "defs", title: "Clinical figures (pp. 724–725)", items: [
              ["Parkinson’s prevalence, US", "About **0.4%** at 60–69 rising to **1.4%** at 80–89; more common in **men**."],
              ["Cognitive outcome", "Up to **80%** eventually develop **major NCD**; **25%–27%** of those without major NCD have **mild NCD**; **9%–19%** of new untreated PD have mild NCD, and one study found major NCD in **24%** of newly diagnosed untreated PD."],
              ["Onset", "PD typically at **50–89**, most often in the **early 60s**; mild NCD comes early, major NCD later."],
              ["Associated", "Apathy, depression, anxiety, hallucinations, delusions, personality change, **REM sleep behavior disorder**, daytime sleepiness, **freezing of gait**, falls, **postural instability and gait disturbance (PIGD)** subtype, hyposmia."],
              ["Risk for NCD in PD", "Older age at onset, more severe disease, prominent **gait** symptoms, severe autonomic disturbance (especially **orthostatic hypotension**), REM sleep behavior disorder, possibly male sex and less education; **GBA** mutations and **APOE ε4**."],
              ["Testing", "Use tests **not affected by motor slowing**; early attention, executive, processing-speed, memory and visuospatial deficits, with language largely intact."],
              ["Markers", "**DaT scans** separate Lewy body–related dementias (PD, DLB) from others such as Alzheimer’s disease."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 725–726)", head: ["Condition", "How to tell"], rows: [
              ["NCD with Lewy bodies", "Timing: the **1-year rule** above."],
              ["Alzheimer’s disease", "**Motor features** are the key; the two can co-occur, and established Alzheimer’s can bring mild parkinsonism."],
              ["Vascular NCD", "Parkinsonian features from small vessel disease, usually **not enough** for PD, with a course tied to cerebrovascular change."],
              ["Other brain disorders", "**PSP**, corticobasal degeneration, **multiple system atrophy**, tumors, **hydrocephalus**."],
              ["Antipsychotic-induced parkinsonism", "Especially when antipsychotics are given for behavioral symptoms of another NCD."]
            ] },
            { type: "callout", kind: "culture", title: "Guam parkinsonism-dementia complex", text: "A late-onset NCD in **8.8%** of **Chamorro** people 65 and older on Guam, with **neurofibrillary tangles but no amyloid plaques**, possibly related to a parkinsonism-dementia complex and ALS, and associated with eating **fadang** made from **cycad seeds** (p. 725)." }
          ]
        },
        {
          id: "s17-huntingtons",
          title: "NCD due to Huntington’s disease",
          pages: "726–729",
          blocks: [
            { type: "criteria", title: "Major or mild NCD due to Huntington’s disease in brief", code: "G10 + F02.xx · G10 + F06.7x", pages: "726", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "**Insidious onset** and **gradual progression**."],
              ["C", "**Clinically established** Huntington’s disease, **or risk** for it from family history or genetic testing."],
              ["D", "Not attributable to another medical condition or better explained by another mental disorder."]
            ], note: "Major: **G10** then **F02.xx**. Mild: G10 then F06.70 / F06.71. Psychiatric codes, e.g., **F06.31** depressive disorder due to Huntington’s disease, with depressive features; **F06.4** anxiety disorder due to Huntington’s disease." },
            { type: "defs", title: "Features and figures (pp. 727–728)", items: [
              ["Cognition", "**Executive** changes (processing speed, organization, planning) come before memory decline."],
              ["Sequence", "Cognitive and behavioral changes often **precede** the motor signs, sometimes by **a decade or more**."],
              ["Definite disease", "Unequivocal extrapyramidal motor signs **plus** a family history or a **CAG expansion** in **HTT** on chromosome **4**; the gene alone is not the diagnosis."],
              ["Psychiatric", "**Irritability**, apathy, anxiety, **obsessive-compulsive** symptoms, **depression**, rarely psychosis; disinhibition, impulsivity, poor insight; apathy grows over time."],
              ["Motor", "Early fidgetiness and mild apraxia; then **chorea**, bradykinesia, gait ataxia and postural instability; **dysarthria** with relatively intact cognition; end-stage **dysphagia**."],
              ["Juvenile form", "Onset **before 20**: more **bradykinesia, dystonia and rigidity** than chorea."],
              ["Prevalence", "**2.7 per 100,000** worldwide; **5.7** in North America, Europe and Australia; **0.40** in Asia."],
              ["Onset and survival", "Symptoms most often at **35–45**; survival about **10–20 years** after diagnosis; death usually from **aspiration pneumonia**."],
              ["CAG repeats", "**40 or more**: always Huntington’s disease; **36–39**: **partially penetrant**, usually late onset (after 70); longer repeats mean **earlier** onset."],
              ["Imaging", "Progressive volume loss in the **caudate and putamen**."]
            ] },
            { type: "callout", kind: "caution", title: "High suicide risk", text: "Suicide is among the **leading causes of death** in Huntington’s disease: in a large European cohort, pneumonia **19.5%**, other infections **6.9%**, **suicide 6.6%**. Risk is raised **before and after** motor onset; depression, anxiety, irritability, psychosis and apathy add to it (p. 728)." },
            { type: "table", caption: "Differential diagnosis (pp. 728–729)", head: ["Condition", "How to tell"], rows: [
              ["Another mental disorder", "Early mood instability, irritability or compulsions; **genetic testing** or motor signs settle it. If mood symptoms are a focus, add **depressive disorder due to Huntington’s disease**."],
              ["Other NCDs", "Early executive and speed deficits can resemble **vascular** NCD."],
              ["Other choreas", "**Wilson’s disease**, **tardive dyskinesia**, **Sydenham’s chorea**, **lupus**, senile chorea; gene-negative cases are **phenocopies**."]
            ] }
          ]
        },
        {
          id: "s17-prion",
          title: "NCD due to prion disease",
          pages: "721–723",
          blocks: [
            { type: "criteria", title: "Major or mild NCD due to prion disease in brief", code: "A81.9 + F02.xx", pages: "721", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "**Insidious onset**, and **rapid progression** is common."],
              ["C", "**Motor features** of prion disease (e.g., **myoclonus**, ataxia) **or biomarker** evidence."],
              ["D", "Not attributable to another medical condition or better explained by another mental disorder."]
            ], note: "Major: **A81.9** then **F02.xx**. Mild: A81.9 then F06.70 / F06.71 (rare, because progression is fast)." },
            { type: "defs", title: "Features and figures (pp. 721–722)", items: [
              ["The diseases", "**Sporadic Creutzfeldt-Jakob disease (CJD)**, the most common; genetic, iatrogenic and **variant** CJD; variably protease-sensitive prionopathy; **kuru** (Fore people, Papua New Guinea); Gerstmann-Sträussler-Scheinker syndrome; **fatal insomnia**."],
              ["Presentation", "Cognitive decline with **ataxia** and **myoclonus**, chorea or dystonia, and a prominent **startle**; progression to major NCD in as little as **6 months**, so it is usually seen only at the **major** level."],
              ["Prodrome", "Fatigue, anxiety, appetite or sleep problems, poor concentration; weeks later, incoordination, altered vision, abnormal gait or movements."],
              ["Variant CJD", "Linked to **bovine spongiform encephalopathy**; more **psychiatric** symptoms early (low mood, withdrawal, anxiety); younger people."],
              ["Epidemiology", "Sporadic CJD **1–2 per million per year**; highest at **65+** (**4.8 per million**); peak age about **67**."],
              ["Transmission", "Corneal transplants, cadaveric **dura mater** grafts, contaminated neurosurgical instruments, cadaver-derived **growth hormone** and gonadotropins, and blood transfusion (variant CJD only); **no** raised risk for health workers."],
              ["Genetics", "**PRNP** mutations in up to **15%**; the **codon 129** polymorphism modifies risk, onset and duration."]
            ] },
            { type: "table", caption: "Diagnostic markers (p. 722)", head: ["Test", "Finding"], rows: [
              ["Confirmation", "Only by **brain biopsy or autopsy**"],
              ["CSF", "**14-3-3** and **tau**: sensitive, variable specificity; **RT-QuIC**: extremely **high specificity**"],
              ["MRI (DWI)", "The **most sensitive** test: **multifocal gray matter hyperintensities** (cortical ribboning, basal ganglia)"],
              ["EEG", "**Periodic sharp, often triphasic** synchronous discharges at **0.5–2 Hz** at some point in the course"]
            ] },
            { type: "callout", kind: "exam", title: "Rapid, jerky, fatal", text: "A rapidly progressive dementia over **months**, with **startle myoclonus** and **ataxia**, points to prion disease. The DSM differential is short: other NCDs progress more slowly and lack the **rapid course and prominent cerebellar and motor signs** (p. 723)." }
          ]
        }
      ]
    },
    {
      title: "Vascular, traumatic, toxic and other causes",
      sections: [
        {
          id: "s17-vascular",
          title: "Vascular NCD",
          pages: "702–706",
          blocks: [
            { type: "criteria", title: "Major or mild vascular NCD in brief", code: "F01.xx · I67.9 + F06.7x · F03.xx · G31.84", pages: "702–703", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "Features consistent with a vascular cause, shown by **either**:", ["onset **temporally related** to one or more **cerebrovascular events**; or", "decline **prominent in complex attention** (including **processing speed**) and **frontal-executive** function."]],
              ["C", "Evidence of **cerebrovascular disease** from history, examination and/or **neuroimaging** sufficient to account for the deficits."],
              ["D", "Not better explained by another brain disease or systemic disorder."]
            ], specifiers: [
              ["Probable", "**One** of: (1) **neuroimaging** evidence of significant parenchymal injury from cerebrovascular disease; (2) the NCD is **temporally related** to one or more **documented** cerebrovascular events; (3) **clinical and genetic** evidence (e.g., **CADASIL**)."],
              ["Possible", "Clinical criteria met, but **no neuroimaging** and no established temporal link to an event."]
            ], note: "Major, probably due to vascular disease: **F01.xx** with **no** medical code. Possibly due to: **F03.xx**. Mild, probable: **I67.9** then F06.70 / F06.71; possible: **G31.84**. Psychiatric codes, e.g., **F06.31** depressive disorder due to cerebrovascular disease, with depressive features." },
            { type: "defs", title: "Imaging and clinical evidence (p. 704)", items: [
              ["Clinical evidence", "Documented **stroke** with cognitive decline at that time, or signs of stroke: **hemiparesis**, **pseudobulbar** syndrome, **visual field** defect."],
              ["Imaging evidence (MRI preferred)", "One or more **large vessel** infarcts or hemorrhages; a **strategic** single infarct or hemorrhage (**angular gyrus, thalamus, basal forebrain**); **two or more lacunes** outside the brainstem; or **extensive, confluent white matter** lesions (small vessel disease)."],
              ["How much is enough", "**Mild** vascular NCD: a **single stroke** or **extensive white matter** disease is generally enough. **Major**: **two or more** strokes, a **strategic** stroke, or **white matter disease plus one or more lacunes**."],
              ["Why image", "Without imaging, **silent** infarcts and white matter lesions are missed; but if cognition is clearly tied to documented strokes, **probable** can be made without imaging."]
            ] },
            { type: "defs", title: "Course and subtypes (pp. 703–705)", items: [
              ["Course", "**Stepwise** or fluctuating decline with periods of stability or improvement (multiple infarcts); or **gradual, slow** progression from **small vessel disease** in white matter, basal ganglia or thalamus, which can mimic Alzheimer’s disease."],
              ["Clinical subtypes", "**Poststroke** NCD; **subcortical ischemic** vascular NCD; **multi-infarct (cortical)** NCD; **cortical-subcortical** vascular NCD."],
              ["Associated", "History of stroke or **TIA**; personality and mood change, **abulia**, depression, **emotional lability**; **vascular depression** (late-onset depression with psychomotor slowing and executive dysfunction)."],
              ["Mechanisms", "Hypoperfusion and hypoxia, oxidative stress, endothelial dysfunction, impaired autoregulation, disrupted neurovascular coupling."]
            ] },
            { type: "table", caption: "Numbers to know (pp. 704–705)", head: ["Item", "Figure"], rows: [
              ["Rank", "**Second** most common cause of NCD after Alzheimer’s disease"],
              ["US prevalence of vascular dementia", "**0.98%** at 71–79; **4.09%** at 80–89; **6.19%** at 90+"],
              ["After stroke", "**20%–30%** diagnosed with dementia **within 3 months**"],
              ["European autopsy series (60–103 years)", "Pure vascular dementia **12.3%**; mixed Alzheimer’s plus vascular **5.5%**"],
              ["Ethnic differences", "Higher in African Americans, Mexican Americans and South Asian Americans than non-Latinx Whites; ischemic stroke progressing to vascular NCD within 5 years almost **twice** as often in African Americans"],
              ["Sex", "Stroke more common in men up to 65 and in women after 65"]
            ] },
            { type: "list", title: "Risk factors (p. 705)", cols: true, items: ["**Hypertension**", "**Diabetes**", "Smoking", "Obesity", "High cholesterol", "High **homocysteine**", "**Atrial fibrillation** and emboli", "**Cerebral amyloid angiopathy** (hemorrhage)", "**CADASIL** (genetic)"] },
            { type: "table", caption: "Differential diagnosis (pp. 705–706)", head: ["Condition", "How to tell"], rows: [
              ["Alzheimer’s disease", "Early, progressive **memory** loss and decline in language, executive and perceptual-motor function **without** matching focal lesions. Incidental white matter lesions are common in older people. If both are present, diagnose **both** (p. 706)."],
              ["NCD with Lewy bodies", "**Fluctuations, visual hallucinations, spontaneous parkinsonism**."],
              ["Frontotemporal NCD", "**Insidious, gradual** behavioral or language change, not typical of vascular disease."],
              ["Other medical conditions", "Brain tumor, **multiple sclerosis**, encephalitis, toxic or metabolic disorders severe enough to explain it."],
              ["Delirium", "Not diagnosed if symptoms are **entirely** due to delirium; delirium may sit on top of vascular NCD (diagnose both)."],
              ["Major depressive disorder", "If MDD is present and cognitive impairment began **with** the depression, do not diagnose vascular NCD. If the NCD came **first** or cognition is **out of proportion** to the depression, diagnose **depressive disorder due to cerebrovascular disease**."]
            ] },
            { type: "callout", kind: "exam", title: "Vascular coding in one line", text: "**Major**: probable **F01**, possible **F03**, and **never** a cerebrovascular code. **Mild**: probable **I67.9 + F06.7x**, possible **G31.84**. In **multiple etiologies**, vascular disease is **not** listed with the other medical codes; instead **F01.xx** is added after F02.xx." }
          ]
        },
        {
          id: "s17-tbi",
          title: "NCD due to traumatic brain injury",
          pages: "706–712",
          blocks: [
            { type: "criteria", title: "Major or mild NCD due to traumatic brain injury in brief", code: "S06.2XAS + F02.xx · S06.2XAS + F06.7x", pages: "706–707", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "Evidence of a **TBI** (an impact to the head or rapid movement or displacement of the brain in the skull) with **one or more** of:", ["**loss of consciousness**;", "**posttraumatic amnesia**;", "**disorientation and confusion**;", "**neurological signs** (imaging showing injury, visual field cuts, anosmia, hemiparesis, hemisensory loss, cortical blindness, aphasia, apraxia, weakness, loss of balance, other unexplained sensory loss)."]],
              ["C", "The NCD appears **immediately** after the injury or **immediately after recovery of consciousness**, and **persists past the acute post-injury period**."]
            ], note: "Major: **S06.2XAS** (diffuse TBI with loss of consciousness of unspecified duration, sequela) then **F02.xx**. Mild: S06.2XAS then F06.70 / F06.71. Rate the severity of the **NCD**, not of the injury. Psychiatric codes, e.g., **F06.34** bipolar and related disorder due to TBI, with mixed features; **F07.0** personality change due to TBI, apathetic type." },
            { type: "update", kind: "post", year: "2022", title: "TBI sequela code", source: "APA DSM-5-TR Update, September 2022", text: "The manual prints **S06.2X9S**; since October 1, 2022 the code is **S06.2XAS** (diffuse TBI with loss of consciousness status unknown, sequela)." },
            { type: "table", wide: true, caption: "Classifying TBI severity (Table 2, p. 708)", head: ["Feature", "Mild", "Complicated mild", "Moderate", "Severe"], rows: [
              ["Loss of consciousness", "≤30 min", "≤30 min", ">30 min to <24 h", "≥24 h"],
              ["Posttraumatic amnesia", "≤1 day", "≤1 day", ">1 to <7 days", "≥7 days"],
              ["Altered consciousness (confusion, slowed thinking)", "≤1 day", "≤1 day", ">1 to <7 days", "≥7 days"],
              ["Glasgow Coma Scale at 30 min", "13–15", "13–15", "9–12", "3–8"],
              ["CT or MRI", "Normal", "**Abnormal**", "Normal or abnormal", "Normal or abnormal"]
            ], note: "**Complicated mild** TBI meets mild criteria but has traumatic intracranial findings (epidural or subdural hematoma, subarachnoid or intracerebral hemorrhage, contusion, laceration); its outcomes resemble **moderate** TBI." },
            { type: "defs", title: "Course and features (pp. 708–710)", items: [
              ["Typical deficits", "**Complex attention, processing speed, learning and memory, executive function**, and **social cognition**; focal deficits (aphasia, apraxia, perceptual-motor) with contusion, hemorrhage or penetrating injury."],
              ["Mild TBI", "Cognitive problems usually resolve within **days to weeks**, with **complete** resolution within **3–12 months**. Persistent symptoms should prompt a search for **MDD, PTSD, anxiety, substance use, sleep problems, negative expectations**; diagnose NCD due to TBI only if deficits persist **after** these are treated."],
              ["Moderate and severe TBI", "Improve over weeks to months; recovery often **incomplete**, but improvement can continue for **years**, and more people improve than decline in the first 5 years. Complications: **seizures** (especially year 1), photosensitivity, hyperacusis, irritability, **aggression**, depression, apathy; possibly later **neurodegeneration**."],
              ["Supportive signs", "**Primitive reflexes** (glabellar, snout, palmomental), saccade and pursuit deficits, focal **posttraumatic epilepsy** matching the impaired domain."],
              ["Older adults", "Even **mild** TBI can produce outcomes like moderate or severe TBI in younger adults."],
              ["Children", "Delayed milestones, worse school performance, impaired social development."]
            ] },
            { type: "table", caption: "Numbers to know (pp. 708–711)", head: ["Item", "Figure"], rows: [
              ["US TBIs a year", "More than **2.87 million** (837,000 in children): **2.5 million** ED visits, **288,000** hospitalizations, more than **56,000** deaths"],
              ["Leading causes", "**Falls** (178.4/100,000), struck by or against (92.7), motor vehicle crashes (74.7), assaults (50.6)"],
              ["Sex", "Men about **40%** more likely up to adulthood; parity after 75; women may be at higher risk after 65. Women more often injured by **assault and domestic violence**"],
              ["Living with TBI-related disability, US", "About **3.17 million** (1.1%)"],
              ["Suicide after TBI", "Ideation up to **10%**; attempts **0.8%–1.7%** over 20 years"]
            ] },
            { type: "list", title: "Risk factors for a poor cognitive outcome (p. 710)", items: ["Age **over 40**", "Lower pre-injury cognitive ability or education", "Pre-injury depression, possibly unemployment", "Injury severity and **longer posttraumatic amnesia**", "Intracranial abnormalities on early CT or MRI, including **diffuse axonal injury**", "**APOE ε4**, COMT and ANKK1 genotypes", "Pre-injury **alcohol or substance use disorder**"] },
            { type: "table", caption: "Differential diagnosis and comorbidity (pp. 711–712)", head: ["Condition", "How to tell"], rows: [
              ["Mental disorders and medications", "MDD, anxiety, **PTSD**, substance use, sleep problems; **typical antipsychotics, benzodiazepines, anticholinergics, antiepileptics** can explain or add to deficits."],
              ["Factitious disorder and malingering", "Symptoms out of keeping with the expected outcome (especially after **mild** TBI) and **poor effort** on testing, particularly with **compensation** at stake."],
              ["PTSD", "Produces similar attention, speed, memory and executive deficits; either or both may explain them."],
              ["Common comorbidity after moderate-severe TBI", "In order: back pain, **depression**, hypertension, **anxiety**, fractures, high cholesterol, sleep disorders, panic attacks, osteoarthritis, diabetes."]
            ] },
            { type: "case", title: "Clinical vignette: after the motorcycle crash", text: "A 28-year-old man was unconscious for 2 hours after a motorcycle crash; he remembers nothing for the following 4 days, and CT showed frontal contusions. Eight months later he is slow, loses track of conversations, cannot plan his shifts, and has angry outbursts. His mother now manages his money and appointments; he dresses and cooks simple meals.", point: "**Major NCD due to TBI, mild severity, with behavioral disturbance (agitation)**: a **moderate** TBI (LOC >30 min, PTA >1 day) with deficits that began **immediately** and **persisted**. Code **S06.2XAS, F02.A11**." }
          ]
        },
        {
          id: "s17-substance",
          title: "Substance/medication-induced NCD",
          pages: "712–717",
          blocks: [
            { type: "criteria", title: "Substance/medication-induced major or mild NCD in brief", code: "By substance (table below)", pages: "712", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "Not exclusively during **delirium**, and persisting **beyond the usual duration of intoxication and acute withdrawal**."],
              ["C", "The substance, and the **duration and extent** of use, are **capable** of producing the impairment."],
              ["D", "The time course fits use and **abstinence** (e.g., deficits stable or **improving** after abstinence)."],
              ["E", "Not attributable to another medical condition or better explained by another mental disorder."]
            ], specifiers: [["Persistent", "Impairment remains significant after an **extended period of abstinence**."]] },
            { type: "table", wide: true, caption: "ICD-10-CM codes (p. 713)", head: ["Substance", "With mild use disorder", "With moderate or severe use disorder", "No use disorder"], rows: [
              "Major NCD",
              ["Alcohol, **nonamnestic-confabulatory** type", "NA", "**F10.27**", "F10.97"],
              ["Alcohol, **amnestic-confabulatory** type", "NA", "**F10.26**", "F10.96"],
              ["Inhalant", "F18.17", "F18.27", "F18.97"],
              ["Sedative, hypnotic or anxiolytic", "NA", "F13.27", "F13.97"],
              ["Other (or unknown)", "F19.17", "F19.27", "F19.97"],
              "Mild NCD",
              ["Alcohol", "F10.188", "F10.288", "F10.988"],
              ["Inhalant", "F18.188", "F18.288", "F18.988"],
              ["Sedative, hypnotic or anxiolytic", "F13.188", "F13.288", "F13.988"],
              ["Amphetamine-type or other stimulant", "F15.188", "F15.288", "F15.988"],
              ["Cocaine", "F14.188", "F14.288", "F14.988"],
              ["Other (or unknown)", "F19.188", "F19.288", "F19.988"]
            ], note: "**NA**: a **mild** alcohol or sedative use disorder is judged **insufficient** to cause a major NCD. **Stimulants and cocaine** have **mild** NCD codes only. No separate use disorder diagnosis is given." },
            { type: "steps", title: "Recording (p. 714)", items: [
              ["Order", "Use disorder (if any) **with** [substance]-induced major or mild NCD, then the **alcohol type**, then **persistent**."],
              ["Example", "**F10.26** severe alcohol use disorder with alcohol-induced major NCD, amnestic-confabulatory type, persistent."],
              ["Other substances", "**F19.988** intrathecal methotrexate-induced mild NCD; **F19.97** unknown substance-induced major NCD."]
            ] },
            { type: "defs", title: "Patterns by substance (pp. 714–715)", items: [
              ["Alcohol", "Combined **executive** and **memory** deficits. **Amnestic-confabulatory (Korsakoff)** type: recent memory loss **out of proportion** to other deficits, rapid forgetting and **confabulation**, often with signs of **Wernicke’s encephalopathy** (nystagmus, ataxia, **lateral gaze palsy**)."],
              ["Sedatives, hypnotics, anxiolytics", "Memory more affected than other functions."],
              ["Inhalants", "Executive dysfunction, slowed speed, poor Wisconsin Card Sorting and Stroop performance; solvent smell, rash around nose and mouth."],
              ["Stimulants", "Learning, memory and executive problems; **methamphetamine** can cause **vascular injury** and a vascular-like profile."],
              ["Other", "**Intrathecal methotrexate**, **organophosphate** insecticides, **kratom**."],
              ["Caution on causation", "Poor impulse control may **precede** stimulant use; persistent NCD from drugs **other than alcohol, depressants and inhalants** is not clearly established."]
            ] },
            { type: "defs", title: "Prevalence and course (pp. 715–716)", items: [
              ["Alcohol use disorder", "Mild NCD in about **30%–40%** in the **first 2 months** of abstinence; it may persist, especially if stable abstinence comes **after 50**. Major NCD is **rare** and usually tied to **nutritional** deficits; maybe more common in men."],
              ["Inhalants", "Persistent use to the point of NCD in **less than 1%** of the US population."],
              ["Recovery", "Substantial or **complete** recovery is common with stable abstinence **before 50**; persistence is most likely with use continuing **past 50**."],
              ["Risk", "Older age, longer use, use past 50, **nutritional deficits**; for alcohol also liver disease, vascular risk, and **transketolase deficiency** (amnestic type)."],
              ["Imaging", "Alcohol: cortical thinning, white matter loss, enlarged sulci and ventricles; many changes **reverse** with abstinence. Methamphetamine: hyperintensities or infarcts."]
            ] },
            { type: "callout", kind: "pearl", title: "Look for the other causes", text: "People with substance use disorders also have more **TBI**, **HIV**, **hepatitis C** and **syphilis**, and stimulant users have more **vascular** NCD. Each can cause or compound the cognitive problem and may need its own diagnosis (p. 717). See [[ch:ch16|Chapter 16]] for the use disorders." },
            { type: "update", kind: "post", year: "2024", title: "Specifier note for mild NCD", source: "APA DSM-5-TR Update, September 2024", text: "The coding note now lists the specifiers separately: **mild, moderate, severe** apply to substance-induced **major** NCD; **with or without behavioral disturbance** apply to **major and mild** NCD. None of them can be coded for the substance-induced NCDs, but all should be **recorded**. No codes changed." }
          ]
        },
        {
          id: "s17-hiv",
          title: "NCD due to HIV infection",
          pages: "717–721",
          blocks: [
            { type: "criteria", title: "Major or mild NCD due to HIV infection in brief", code: "B20 + F02.xx · B20 + F06.7x", pages: "717", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "**Documented** HIV infection."],
              ["C", "Not better explained by non-HIV conditions, including **secondary brain diseases** such as **progressive multifocal leukoencephalopathy** or **cryptococcal meningitis**."],
              ["D", "Not attributable to another medical condition or better explained by a mental disorder."]
            ], note: "Major: **B20** then **F02.xx**. Mild: B20 then F06.70 / F06.71. Psychiatric codes, e.g., F06.34 bipolar and related disorder due to HIV infection, with mixed features." },
            { type: "defs", title: "Features (pp. 718–719)", items: [
              ["Subcortical pattern", "**Executive** dysfunction, **slowed processing**, trouble with demanding attention, difficulty **learning** new information, but **fewer problems recalling** learned information; **aphasia uncommon**; motor slowing, procedural learning and free recall deficits, with recognition, abstraction and naming relatively spared."],
              ["Major NCD", "Prominent slowing; **incoordination, ataxia, motor slowing**."],
              ["Risk", "Older age, less education, **female** sex, MDD, substance use, diabetes, hypertension; prior immunosuppression, high **CSF viral load**, inflammatory markers, **low CD4 nadir**, anemia, low albumin."]
            ] },
            { type: "table", caption: "How common (pp. 718–719)", head: ["Group", "Figure"], rows: [
              ["Any neurocognitive disturbance", "About **one-third to over half**, by HIV stage"],
              ["Most of these", "**Asymptomatic neurocognitive impairment (ANI)**: test deficits, **no** functional impairment, so not an NCD"],
              ["Mild NCD", "About **one-quarter** of those with HIV-related disturbance"],
              ["Major NCD", "Typically **less than 5%**"],
              ["German clinic (90% treated)", "43% overall: ANI 20%, mild NCD 17%, HIV-associated dementia 6%"],
              ["On effective treatment, full test batteries", "Overall impairment about **25%–35%**"]
            ] },
            { type: "callout", kind: "key", title: "Sudden change means look for something else", text: "With modern antiretroviral therapy, **rapid** decline is **uncommon**; the most severe forms have fallen sharply, but milder NCD has **not** declined. An **abrupt** change or sudden worsening demands a search for **opportunistic infection** (toxoplasmosis, cryptococcosis), **CNS lymphoma**, other infections, or **delirium** (p. 720). More than **50%** of people with HIV in the US are **over 50**, so Alzheimer’s and vascular disease enter the differential." },
            { type: "defs", title: "Markers and function (pp. 720–721)", items: [
              ["Tests", "HIV diagnosis from blood, oral fluid or urine; CSF viral load **higher than plasma** (escape) or high neuroinflammation supports it."],
              ["MRI", "Reduced brain and white matter volume, cortical thinning, patchy white matter hyperintensities; MRI or **lumbar puncture** to exclude cryptococcal meningitis, HSV encephalitis, PML."],
              ["Function", "Executive and speed deficits can undermine **antiretroviral adherence**; assess function directly to rate severity."]
            ] },
            { type: "callout", kind: "pearl", title: "HAND terminology (outside the DSM)", text: "HIV clinicians use the **Frascati** terms: **ANI**, **mild neurocognitive disorder (MND)** and **HIV-associated dementia (HAD)**, together called **HAND**. DSM mild and major NCD due to HIV roughly match MND and HAD; ANI is **not** a DSM diagnosis. Newer proposals stress separating HIV-related brain injury from **comorbid** causes. (Frascati criteria, Antinori et al., 2007.)" }
          ]
        },
        {
          id: "s17-amc",
          title: "NCD due to another medical condition",
          pages: "729–730",
          blocks: [
            { type: "criteria", title: "Major or mild NCD due to another medical condition in brief", code: "Condition code + F02.xx · condition code + F06.7x", pages: "729", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "History, examination or laboratory findings show the NCD is the **pathophysiological consequence** of another medical condition (e.g., **multiple sclerosis**)."],
              ["C", "Not better explained by another mental disorder (e.g., MDD) or **another specific NCD** (e.g., Alzheimer’s disease)."]
            ], note: "Major: code the condition first, e.g., **G35.D** multiple sclerosis, then **F02.xx** (e.g., **F02.B2** for moderate, with psychotic disturbance). Mild: the condition, then F06.70 / F06.71." },
            { type: "table", caption: "Causes named in the text (p. 729)", head: ["Group", "Examples"], rows: [
              ["Structural", "Primary or secondary **brain tumors**, **subdural hematoma**, slowly progressive or **normal-pressure hydrocephalus**"],
              ["Hypoxia", "Hypoperfusion from **heart failure**"],
              ["Endocrine", "**Hypothyroidism**, hypercalcemia, **hypoglycemia**"],
              ["Nutritional", "Deficiency of **thiamine** or **niacin**"],
              ["Infectious", "**Neurosyphilis**, cryptococcosis"],
              ["Immune", "**Temporal arteritis**, **systemic lupus erythematosus**"],
              ["Organ failure", "Hepatic or renal failure"],
              ["Metabolic", "Kufs’ disease, adrenoleukodystrophy, metachromatic leukodystrophy, other storage diseases"],
              ["Neurological", "**Epilepsy**, **multiple sclerosis**"],
              ["Unusual injuries", "Electrical shock, intracranial radiation"]
            ] },
            { type: "callout", kind: "key", title: "The best evidence is timing and treatment response", text: "A **temporal link** between the onset or worsening of the medical condition and the cognitive deficit gives the strongest support. Certainty grows if deficits **improve or stabilize** with treatment (p. 729). The NCD follows the illness: it may improve with treatable causes (hypothyroidism) and progress with deteriorating ones (secondary progressive MS). If deficits **persist** after successful treatment, look for **another** etiology (p. 730)." },
            { type: "update", kind: "post", year: "2025", title: "Multiple sclerosis is now G35.D", source: "APA DSM-5-TR Update, September 2025; ICD-10-CM FY2026", text: "Since October 1, 2025, multiple sclerosis is **G35.D** (multiple sclerosis, unspecified); the three-character **G35** printed in the manual is no longer valid." }
          ]
        },
        {
          id: "s17-multiple-unknown",
          title: "Multiple etiologies, unknown etiology and unspecified NCD",
          pages: "731–732",
          blocks: [
            { type: "criteria", title: "Major or mild NCD due to multiple etiologies in brief", code: "All causes + F02.xx (+ F01.xx) · F06.7x", pages: "731", items: [
              ["A", "Criteria for **major or mild NCD** are met."],
              ["B", "Evidence that the NCD is the consequence of **more than one etiological process**, **excluding substances** (e.g., Alzheimer’s disease followed by vascular NCD)."],
              ["C", "Not better explained by another mental disorder, and not **exclusively during delirium**."]
            ], note: "Use each etiology’s own criteria to establish it. Substances are **not** counted here; code a substance-induced NCD **as well**." },
            { type: "steps", title: "Coding multiple etiologies (pp. 731, updated 2022)", items: [
              ["1. Medical codes", "List **every** etiological medical condition **except vascular disease**."],
              ["2. One F02", "Then **F02.xx once** for the NCD due to all of them."],
              ["3. Vascular", "If vascular disease contributes, add **F01.xx**."],
              ["4. Substances", "Add the substance-induced NCD code if a substance contributes."],
              ["Example", "Moderate major NCD with agitation due to Alzheimer’s disease, vascular disease and HIV, with heavy drinking contributing: **G30.9, B20, F02.B11, F01.B11, F10.27** (the manual’s version used F02.81 and F01.51)."]
            ] },
            { type: "defs", title: "The two residual-type categories", items: [
              ["Major or mild NCD due to unknown etiology (new, 2022)", "NCD criteria are met, and there is evidence of a presumed medical condition, combination of conditions, or conditions plus substances, but the **specific cause cannot be established**. Major: **F03.xx** (e.g., **F03.B2** moderate, with psychotic disturbance). Mild: **G31.84**."],
              ["Unspecified NCD (R41.9)", "NCD symptoms that cause distress or impairment **predominate** but **full criteria** for no NCD are met, and the etiology cannot be determined with enough certainty. No etiology codes; behavior recorded, not coded."]
            ] },
            { type: "update", kind: "post", year: "2022", title: "New diagnosis: NCD due to unknown etiology", source: "APA DSM-5-TR Update and Neurocognitive Disorders Supplement, September 2022", text: "The APA added **major or mild NCD due to unknown etiology** and revised **unspecified NCD**. Use unknown etiology when the **syndrome** is clear but the **cause** is not; use unspecified NCD when the presentation does **not meet** full NCD criteria or the picture is too uncertain." },
            { type: "callout", kind: "exam", title: "Mixed pathology is the rule in old age", text: "Many etiologies become more common with age, so **mixed** NCDs are frequent (p. 689). Alzheimer’s plus vascular is the classic pair; Lewy body pathology often coexists with Alzheimer’s, **TDP-43** and vascular pathology in the oldest people, with **faster decline** (p. 702). Since 2024 Alzheimer’s disease can be one of the **multiple etiologies**." }
          ]
        }
      ]
    },
    {
      title: "Putting it together",
      sections: [
        {
          id: "s17-compare",
          title: "The subtypes at a glance",
          pages: "684–732",
          blocks: [
            { type: "table", wide: true, caption: "Etiological subtypes compared", head: ["Subtype", "Onset and course", "Early domains", "Hallmarks", "Key test"], rows: [
              ["Alzheimer’s disease", "Insidious; **steady** decline, few plateaus; usually 70s–80s", "**Memory and learning**", "Repeats questions; later language and visuospatial loss; social cognition kept until late", "Amyloid and tau (PET, CSF, blood)"],
              ["Frontotemporal", "Insidious; **50s**; faster than Alzheimer’s", "**Social cognition, executive**, or **language**", "Disinhibition, apathy, lost empathy, hyperorality, compulsions; or progressive aphasia", "Frontal/anterior temporal atrophy"],
              ["Lewy bodies", "Insidious; **mid-70s**; fluctuating", "**Attention, executive, visuoperceptual**", "Fluctuations, **visual hallucinations**, parkinsonism after cognition, REM sleep behavior disorder, **neuroleptic sensitivity**", "DaT scan, MIBG, polysomnography"],
              ["Parkinson’s disease", "Gradual, in **established** PD (≥1 year)", "Attention, executive, speed, visuospatial", "Motor PD first; apathy, depression, hallucinations", "DaT scan"],
              ["Vascular", "**Stepwise** after strokes, or gradual with small vessel disease", "**Complex attention, processing speed, executive**", "Focal signs, TIA or stroke history, emotional lability, vascular depression", "MRI: infarcts, lacunes, white matter disease"],
              ["Traumatic brain injury", "**Immediately** after the injury; then static or improving", "Attention, speed, memory, executive, social cognition", "Loss of consciousness or posttraumatic amnesia; irritability, aggression", "CT/MRI; TBI severity table"],
              ["Substance/medication", "Persists beyond intoxication and withdrawal; **improves with abstinence**", "Executive and memory (alcohol); memory (sedatives)", "Korsakoff: amnesia with confabulation", "Abstinence trial; MRI"],
              ["HIV infection", "Variable; rapid decline is unusual on treatment", "**Subcortical**: speed, executive, learning", "Motor slowing; recognition spared", "HIV tests; CSF viral load; MRI"],
              ["Prion disease", "**Rapid** (months)", "Global", "**Myoclonus, startle, ataxia**", "MRI DWI, RT-QuIC, periodic EEG complexes"],
              ["Huntington’s disease", "Insidious; **35–45**; psychiatric and cognitive signs may come first", "**Executive**, speed", "**Chorea**, irritability, depression, suicide risk", "CAG repeat ≥40 in HTT"]
            ] },
            { type: "callout", kind: "mnemonic", title: "Cortical versus subcortical", text: "**Cortical** NCDs (Alzheimer’s, frontotemporal) hit the **“A’s”**: amnesia, aphasia, apraxia, agnosia, with speed relatively kept. **Subcortical** NCDs (vascular small vessel, Parkinson’s, Huntington’s, HIV) hit **speed**: slowed thinking, poor retrieval helped by cues, apathy, depression and **motor** signs. This is a classic teaching frame, not DSM text; many people have features of both." },
            { type: "flow", vertical: true, title: "A first-pass approach to new cognitive symptoms", steps: [
              ["Is attention or arousal disturbed, with acute onset and fluctuation?", "Yes: **delirium** first. Find and treat the cause; reassess cognition afterward.", "case"],
              ["Is there an acquired decline in one or more domains, with concern and objective evidence?", "No: normal cognition, a lifelong (neurodevelopmental) pattern, or another mental disorder.", "guide"],
              ["Does the person need help with complex IADLs?", "Yes: **major** NCD (rate mild, moderate, severe). No: **mild** NCD.", "hy"],
              ["What explains it?", "Onset (sudden or insidious), course (static, stepwise, progressive, rapid), early domains, motor and behavioral signs, imaging and biomarkers.", "dx"],
              ["How certain?", "Probable or possible where the subtype allows it; **multiple** if several; **unknown** if presumed but unclear; **unspecified** if criteria are not met.", "upd"]
            ] }
          ]
        },
        {
          id: "s17-workup",
          title: "Work-up and treatment bridges",
          pages: "Outside the DSM",
          blocks: [
            { type: "callout", kind: "caution", title: "Beyond the manual", text: "DSM-5-TR does not give treatment or a standard work-up. This section summarizes common practice so you can connect the diagnosis to care; follow local guidelines and the [[stahl:c/ch12/guide/s12-ad|Stahl Study Companion]] for drug details." },
            { type: "defs", title: "Delirium", items: [
              ["Find the cause", "Vital signs, oxygen, glucose; electrolytes, calcium, renal and liver function; complete blood count; urinalysis and cultures; review **every medication** (anticholinergics, benzodiazepines, opioids, steroids); look for withdrawal, retention, constipation, pain; ECG; imaging or lumbar puncture when indicated."],
              ["Screen", "Bedside tools such as the **CAM** or **4AT**; test **attention** directly (months of the year backward)."],
              ["Non-drug care first", "Reorientation, glasses and hearing aids, family presence, sleep hygiene, mobilization, hydration, avoiding restraints and catheters; multicomponent programs such as **HELP** prevent delirium."],
              ["Drugs", "No drug is approved to treat delirium. A **low-dose antipsychotic** (e.g., [[stahl:drugs/haloperidol|haloperidol]], [[stahl:drugs/quetiapine|quetiapine]]) is reserved for **dangerous agitation** or distressing psychosis; trials show it does not shorten delirium. Avoid benzodiazepines **except** for alcohol or sedative withdrawal. Give **thiamine** when alcohol use or malnutrition is possible."]
            ] },
            { type: "defs", title: "Major and mild NCD", items: [
              ["Reversible contributors", "Thyroid function, **vitamin B12**, folate, glucose, calcium, renal and liver function, complete blood count; syphilis and HIV serology when risk is present; **neuroimaging** (CT or MRI); depression screen; medication review; hearing and vision."],
              ["Cognitive enhancers", "**Cholinesterase inhibitors** ([[stahl:drugs/donepezil|donepezil]], [[stahl:drugs/rivastigmine|rivastigmine]], [[stahl:drugs/galantamine|galantamine]]) for Alzheimer’s, Lewy body and Parkinson’s disease dementia; [[stahl:drugs/memantine|memantine]] for moderate to severe Alzheimer’s disease. They do **not** help frontotemporal NCD."],
              ["Disease-modifying", "[[stahl:drugs/lecanemab|Lecanemab]] and [[stahl:drugs/donanemab|donanemab]] for early Alzheimer’s disease with confirmed amyloid, with MRI monitoring for ARIA."],
              ["Behavioral symptoms", "Look for **pain, infection, constipation, sleep loss** and unmet needs; behavioral and caregiver approaches first. [[stahl:drugs/brexpiprazole|Brexpiprazole]] is FDA-approved for **agitation in Alzheimer’s dementia**; all antipsychotics carry a **boxed warning** for increased mortality in older adults with dementia. [[stahl:drugs/pimavanserin|Pimavanserin]] is approved for **Parkinson’s disease psychosis**. In **Lewy body disease**, avoid typical antipsychotics."],
              ["Safety and planning", "Driving, firearms, medications, finances, wandering; advance care planning while capacity remains; **caregiver** support."]
            ] },
            { type: "update", kind: "post", year: "2023", title: "Brexpiprazole for agitation in Alzheimer’s dementia", source: "US FDA approval, May 2023", text: "**Brexpiprazole** became the first drug approved in the US for **agitation associated with dementia due to Alzheimer’s disease**. The antipsychotic class boxed warning for mortality in older adults with dementia-related psychosis still applies. See the [[stahl:c/ch12/guide/s12-agitation|Stahl agitation section]]." }
          ]
        }
      ]
    }
  ]
});
