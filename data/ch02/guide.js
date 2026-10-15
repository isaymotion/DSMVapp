/* Chapter 2 study guide. Source: DSM-5-TR, Schizophrenia Spectrum and Other Psychotic Disorders (pp. 101–138);
   schizotypal personality disorder criteria from the Personality Disorders chapter (pp. 744–748).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. */
SP.add("ch02", "guide", {
  intro: "This chapter covers every diagnosis built on psychosis. They share **five domains** of psychopathology: **delusions**, **hallucinations**, **disorganized thinking (speech)**, **grossly disorganized or abnormal motor behavior (including catatonia)** and **negative symptoms**. The chapter is arranged as a **gradient**: first the presentations that stay below the psychotic threshold or involve a single domain (schizotypal personality disorder, delusional disorder, catatonia), then the **time-limited** disorders (brief psychotic and schizophreniform disorder), then **schizophrenia** and **schizoaffective disorder**, and finally psychosis with an identifiable cause (a substance, a medication or another medical condition). Most of the board-level difficulty lives in four questions: **What caused it? Where do the mood episodes fall? Which domains are present? How long has it lasted?** The guide follows that logic, and the chapter’s [[helper:psychosis|diagnostic helper]] walks you through it case by case.",
  objectives: [
    "Define the **five psychotic domains** and distinguish **bizarre** from nonbizarre delusions, true hallucinations from **hypnagogic/hypnopompic** experiences, and **diminished emotional expression** from **avolition**.",
    "State the **time rules** that separate **brief psychotic disorder** (≥1 day, <1 month), **schizophreniform disorder** (≥1 month, <6 months) and **schizophrenia** (≥6 months, including ≥1 month of active phase).",
    "Apply **Criterion A for schizophrenia**: two or more of five symptoms, at least one of which is **delusions, hallucinations or disorganized speech**.",
    "Explain how **schizoaffective disorder** differs from schizophrenia (**Criterion C**: mood episodes for the **majority** of the illness) and from mood disorders with psychotic features (**Criterion B**: ≥2 weeks of psychosis **without** a major mood episode).",
    "Recognize **delusional disorder** and its seven subtypes, and why a single prior episode meeting schizophrenia Criterion A rules it out.",
    "Separate **substance/medication-induced psychotic disorder** from intoxication or withdrawal **with perceptual disturbances**, and code it correctly with or without a comorbid use disorder.",
    "Use **biological plausibility, temporality and typicality** to judge a **psychotic disorder due to another medical condition**.",
    "List the **12 features of catatonia** (three or more needed), the **three catatonia diagnoses**, and the coding rule **F06.1**.",
    "Use the course, catatonia and **severity** specifiers, and choose between **other specified (F28)** and **unspecified (F29)**.",
    "Describe the epidemiology, course, risk factors, culture and sex/gender issues, suicide risk, comorbidity and differential diagnosis of schizophrenia."
  ],
  parts: [
    {
      title: "The five psychotic domains",
      sections: [
        {
          id: "s2-map",
          title: "How the chapter is built",
          pages: "101, 103",
          blocks: [
            { type: "p", text: "Schizophrenia spectrum and other psychotic disorders include **schizophrenia**, the **other psychotic disorders** and **schizotypal (personality) disorder**. Every one of them is defined by abnormality in at least one of the five domains below, and the domains are the vocabulary of the whole chapter." },
            { type: "flow", title: "The gradient the chapter follows (p. 103)", steps: [
              ["Below threshold or one domain", "Schizotypal PD; delusional disorder; catatonia", "guide"],
              ["Time-limited", "Brief psychotic disorder; schizophreniform disorder", "hy"],
              ["Full syndrome", "Schizophrenia; schizoaffective disorder", "mech"],
              ["Identifiable cause", "Substance/medication; another medical condition", "case"]
            ], note: "Clinicians are told to consider conditions that do not reach full criteria first, then the time-limited conditions; a schizophrenia spectrum diagnosis always requires that another cause of psychosis has been excluded." },
            { type: "table", caption: "Diagnoses in this chapter (codes as listed in DSM-5-TR)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:schizotypal-pd|Schizotypal (personality) disorder]]", "F21", "Lifelong oddness, suspiciousness and perceptual distortion below the psychotic threshold", "104 (criteria 744)"],
              ["[[dx:delusional-disorder|Delusional disorder]]", "F22", "≥1 month of delusions; schizophrenia Criterion A never met", "104"],
              ["[[dx:brief-psychotic-disorder|Brief psychotic disorder]]", "F23", "≥1 day, <1 month, then full recovery", "108"],
              ["[[dx:schizophreniform-disorder|Schizophreniform disorder]]", "F20.81", "Schizophrenia-like illness lasting ≥1 and <6 months", "111"],
              ["[[dx:schizophrenia|Schizophrenia]]", "F20.9", "≥6 months, ≥1 month of Criterion A, functional decline", "113"],
              ["[[dx:schizoaffective-disorder|Schizoaffective disorder]]", "F25.0 / F25.1", "Mood episode + Criterion A, mood for most of the illness, ≥2 weeks psychosis alone", "121"],
              ["[[dx:substance-induced-psychotic|Substance/medication-induced psychotic disorder]]", "By substance (e.g., F12.959)", "Delusions/hallucinations caused by a substance, medication or toxin", "126"],
              ["[[dx:psychotic-due-to-amc|Psychotic disorder due to another medical condition]]", "F06.2 / F06.0", "Delusions or hallucinations caused directly by a medical condition", "131"],
              ["[[dx:catatonia-associated|Catatonia associated with another mental disorder]]", "F06.1", "Catatonia specifier: ≥3 of 12 features with a mental disorder", "135"],
              ["[[dx:catatonic-due-to-amc|Catatonic disorder due to another medical condition]]", "F06.1", "≥3 of 12 features caused by a medical condition", "136"],
              ["[[dx:unspecified-catatonia|Unspecified catatonia]]", "R29.818 + F06.1", "Catatonia with unclear cause or incomplete criteria", "137"],
              ["[[dx:other-specified-psychotic|Other specified schizophrenia spectrum and other psychotic disorder]]", "F28", "Subthreshold presentation, reason stated", "138"],
              ["[[dx:unspecified-psychotic|Unspecified schizophrenia spectrum and other psychotic disorder]]", "F29", "Subthreshold or unclear presentation, reason not stated", "138"]
            ] },
            { type: "callout", kind: "key", title: "Four questions, in this order", text: "**1. Cause?** (substance, medication, medical condition, delirium). **2. Mood?** (Is psychosis confined to mood episodes, or present for ≥2 weeks without them? Do mood episodes fill most of the illness?). **3. Domains?** (delusions only, or two or more of the five?). **4. Time?** (<1 day, 1 day to <1 month, 1 to <6 months, ≥6 months). The [[helper:psychosis|psychosis helper]] asks exactly these." }
          ]
        },
        {
          id: "s2-delusions",
          title: "Delusions",
          pages: "101–102",
          blocks: [
            { type: "p", text: "A **delusion** is a **fixed belief** that does **not change** when the person meets conflicting evidence. The line between a delusion and a strongly held idea can be hard to draw; it depends largely on **how firmly the belief is held** despite clear or reasonable evidence against it." },
            { type: "table", caption: "Delusional themes named in the chapter (p. 101)", head: ["Theme", "The belief", "Note"], rows: [
              ["**Persecutory**", "One will be harmed or harassed by a person, organization or group", "The **most common** theme"],
              ["**Referential**", "Gestures, comments or cues in the environment are aimed at oneself", "Also common"],
              ["**Grandiose**", "One has exceptional abilities, wealth or fame", ""],
              ["**Erotomanic**", "Another person (often of higher status) is in love with one", ""],
              ["**Nihilistic**", "A major catastrophe will occur", ""],
              ["**Somatic**", "Preoccupation with health or organ function", "e.g., infestation, foul odor"],
              ["Religious", "Content drawn from religion", "Elevated religiosity can accompany many psychoses"]
            ] },
            { type: "defs", title: "Bizarre or not?", items: [
              ["Bizarre delusion", "**Clearly implausible**, **not understandable to same-culture peers**, and **not derived from ordinary life experience**. Example in the manual: an outside force removed one’s organs and replaced them with someone else’s without leaving a wound or scar."],
              ["Nonbizarre delusion", "Implausible in this case but possible in life, e.g., being under police surveillance despite no convincing evidence."],
              ["Loss-of-control delusions", "Generally considered **bizarre**: **thought withdrawal** (thoughts removed by an outside force), **thought insertion** (alien thoughts put into one’s mind) and **delusions of control** (body or actions manipulated from outside)."]
            ] },
            { type: "callout", kind: "culture", text: "Some religious and supernatural beliefs (**evil eye**, illness caused by **curses**, the influence of **spirits**) look bizarre in one cultural context and are widely accepted in another. People who have survived **torture, political violence or discrimination** may voice fears that sound persecutory but are realistic fears of recurrence or posttraumatic symptoms; judge whether the fear is justified by what actually happened before calling it a delusion." },
            { type: "callout", kind: "exam", text: "Bizarreness no longer earns a special place in the schizophrenia criteria: Criterion A simply lists **delusions**. Bizarreness survives as the **“with bizarre content”** specifier of [[dx:delusional-disorder|delusional disorder]]." }
          ]
        },
        {
          id: "s2-hallucinations",
          title: "Hallucinations",
          pages: "102",
          blocks: [
            { type: "p", text: "A **hallucination** is a **perception-like experience without an external stimulus**. It is vivid and clear, carries the full force of a normal perception, and is **not under voluntary control**. Any sensory modality can be involved, but **auditory** hallucinations are the most common in schizophrenia and related disorders, usually **voices** (familiar or not) that the person experiences as **distinct from their own thoughts**." },
            { type: "list", title: "What does not count", items: [
              "Experiences that occur **without a clear sensorium** (the hallucination must occur in a clear sensorium).",
              "**Hypnagogic** (falling asleep) and **hypnopompic** (waking) experiences: within the range of normal experience.",
              "Hallucinations that are a **normal part of religious experience** in some cultural contexts, e.g., hearing God’s voice."
            ] },
            { type: "callout", kind: "pearl", text: "Modality is a clue, not a verdict. **Visual**, **olfactory**, **gustatory** and **tactile** hallucinations raise suspicion of a medical or substance cause (olfactory → **temporal lobe epilepsy**; formication → **stimulants**), yet visual hallucinations are not rare in schizophrenia or bipolar disorder and unpleasant smells are consistent with schizophrenia. Never decide on one hallucination alone (p. 134)." }
          ]
        },
        {
          id: "s2-disorganization",
          title: "Disorganized thinking (speech)",
          pages: "102",
          blocks: [
            { type: "p", text: "Disorganized thinking (**formal thought disorder**) is usually **inferred from speech**. Because mildly disorganized speech is common and nonspecific, it counts only when it is **severe enough to substantially impair communication**." },
            { type: "defs", items: [
              ["Derailment (loose associations)", "Switching from one topic to another."],
              ["Tangentiality", "Answers that are only obliquely related, or completely unrelated, to the question."],
              ["Incoherence (“word salad”)", "Rare: speech so disorganized it is nearly incomprehensible, resembling **receptive aphasia**."]
            ] },
            { type: "callout", kind: "culture", text: "**Glossolalia** (“speaking in tongues”) and **possession trance** produce disorganized speech but are **not psychosis** unless clearly psychotic symptoms accompany them. A clinician from a different linguistic background may misjudge severity, and narrative styles vary across cultures." },
            { type: "p", text: "Milder disorganization is expected in the **prodromal** and **residual** periods of schizophrenia." }
          ]
        },
        {
          id: "s2-motor",
          title: "Grossly disorganized or abnormal motor behavior, including catatonia",
          pages: "102",
          blocks: [
            { type: "p", text: "This domain runs from childlike **“silliness”** to **unpredictable agitation**, and shows up as trouble with any goal-directed behavior, including activities of daily living." },
            { type: "p", text: "**Catatonic behavior** is a marked **decrease in reactivity** to the environment: resisting instructions (**negativism**), holding a rigid, inappropriate or bizarre **posture**, or complete lack of verbal and motor response (**mutism** and **stupor**). It can also be purposeless, excessive motor activity without obvious cause (**catatonic excitement**), with stereotyped movements, staring, grimacing and echoing of speech." },
            { type: "callout", kind: "key", text: "Catatonia has historically been tied to schizophrenia, but it is **nonspecific**: it occurs in **bipolar and depressive disorders** and in **medical conditions**. The full catatonia criteria are in [[page:c/ch02/guide/s2-catatonia|section 2.21]] of this guide." }
          ]
        },
        {
          id: "s2-negative",
          title: "Negative symptoms",
          pages: "102–103",
          blocks: [
            { type: "p", text: "Negative symptoms account for **much of the morbidity** of schizophrenia and are **less prominent** in the other psychotic disorders. Two are especially prominent in schizophrenia and are the two named in **Criterion A5**." },
            { type: "defs", items: [
              ["Diminished emotional expression", "Less expression of emotion in the **face**, **eye contact**, **prosody** (intonation of speech) and the hand, head and face movements that normally add emotional emphasis to speech."],
              ["Avolition", "Fewer **motivated, self-initiated, purposeful activities**: sitting for long periods with little interest in work or social activities."],
              ["Alogia", "Diminished **speech output**."],
              ["Anhedonia", "Decreased ability to experience pleasure. People with schizophrenia can still enjoy an activity **in the moment** and recall it, but they **engage in pleasurable activities less often**."],
              ["Asociality", "Apparent lack of interest in social interaction; can go with avolition, or reflect **limited opportunities** for social contact."]
            ] },
            { type: "callout", kind: "mnemonic", text: "The five A’s plus one D: **D**iminished emotional expression, **A**volition, **A**logia, **A**nhedonia, **A**sociality. Only **diminished emotional expression** and **avolition** are written into Criterion A5." },
            { type: "callout", kind: "caution", text: "Before calling something a negative symptom, consider the alternatives: **depression** (withdrawal and poor self-care), **medication effects**, and **culture or language** (alogia when the interview is not in the person’s primary language; different norms for eye contact and emotional display). Negative symptoms that **begin after psychosis onset** are more variable and may be **secondary** (p. 117)." }
          ]
        },
        {
          id: "s2-assessment",
          title: "Rating severity and assessing across cultures",
          pages: "103–104",
          blocks: [
            { type: "p", text: "Psychotic disorders are heterogeneous, and symptom severity predicts things that matter, such as the degree of cognitive or neurobiological deficit. Section III (“Assessment Measures”) provides the **Clinician-Rated Dimensions of Psychosis Symptom Severity**." },
            { type: "table", caption: "The severity specifier used throughout the chapter", head: ["Feature", "Rule"], rows: [
              ["What is rated", "The primary psychotic symptoms: **delusions, hallucinations, disorganized speech, abnormal psychomotor behavior, negative symptoms**"],
              ["Scale", "**0 (not present) to 4 (present and severe)**"],
              ["Time window", "The **most severe** level in the **past 7 days**"],
              ["Extra dimensions in Section III", "**Impaired cognition**, **depression** and **mania**"],
              ["Required?", "**No**: every diagnosis can be made without the severity specifier"],
              ["Exception", "Disorganized speech is **not** rated for substance/medication-induced psychotic disorder or psychotic disorder due to another medical condition"]
            ] },
            { type: "p", text: "The chapter repeats one sentence under nearly every disorder: assessing **cognition, depression and mania** is vital for the distinctions between these diagnoses. Mood severity has **prognostic value and guides treatment**, and cognitive impairment in many domains **predicts functional status**. A brief bedside cognitive assessment can be enough for diagnosis; formal neuropsychological testing must be given and scored by trained staff." },
            { type: "callout", kind: "culture", text: "Accuracy improves with interview approaches and scales **adapted or validated for the person’s culture** and with the **Cultural Formulation Interview** (Section III). When assessing through interpreters or in a second or third language, do not mistake **unfamiliar metaphors** for delusions." },
            { type: "update", kind: "tr", title: "Why the text says so much about culture and bias", text: "The text revision added a review by a **work group on Ethnoracial Equity and Inclusion**, which checked every chapter for attention to risk factors such as **racism and discrimination** and for **nonstigmatizing language**. That is why the psychotic disorders text repeatedly warns about **misdiagnosis in underserved ethnic and racialized groups** and about discrimination as a risk factor.", source: "DSM-5-TR Introduction, p. 11" }
          ]
        }
      ]
    },
    {
      title: "Below threshold or a single domain",
      sections: [
        {
          id: "s2-schizotypal",
          title: "Schizotypal (personality) disorder",
          pages: "104; criteria 744–748",
          blocks: [
            { type: "p", text: "Schizotypal personality disorder is listed here because it sits on the **schizophrenia spectrum** (ICD-10 calls it **schizotypal disorder**), but its criteria and text live in the Personality Disorders chapter. It is a **pervasive pattern** of social and interpersonal deficits with **cognitive or perceptual distortions** and **eccentric behavior**, beginning by **early adulthood**. Beliefs, thinking and perception stay **below the threshold** of a psychotic disorder." },
            { type: "criteria", title: "Schizotypal personality disorder in brief", code: "F21", pages: "744–745", items: [
              ["A", "A pervasive pattern of acute discomfort with, and reduced capacity for, close relationships, plus cognitive or perceptual distortions and eccentricity, starting by early adulthood and present across contexts, shown by **five or more** of:", [
                "**Ideas of reference** (not delusions of reference)",
                "**Odd beliefs or magical thinking** that influence behavior and go beyond subcultural norms (superstition, clairvoyance, telepathy, “sixth sense”; bizarre fantasies in youth)",
                "**Unusual perceptual experiences**, including bodily illusions",
                "**Odd thinking and speech** (vague, circumstantial, metaphorical, overelaborate or stereotyped)",
                "**Suspiciousness** or paranoid ideation",
                "**Inappropriate or constricted affect**",
                "**Odd, eccentric or peculiar** behavior or appearance",
                "**No close friends** or confidants other than first-degree relatives",
                "**Excessive social anxiety** that does not ease with familiarity and comes from **paranoid fears**, not negative self-judgment"
              ]],
              ["B", "Not only during schizophrenia, a bipolar or depressive disorder with psychotic features, another psychotic disorder, or autism spectrum disorder.", null, "If criteria were met **before** schizophrenia began, add **“(premorbid)”**, e.g., schizotypal personality disorder (premorbid)."]
            ] },
            { type: "compare", title: "Telling schizotypal PD from its neighbors (pp. 747–748)", items: [
              { title: "Psychotic disorders", color: "mech", points: ["They have a **period of persistent psychosis**.", "Schizotypal PD is diagnosed alongside only if it **preceded** the psychosis and **persists** in remission."] },
              { title: "Paranoid and schizoid PD", color: "drug", points: ["Share detachment and restricted affect.", "Only schizotypal PD has **cognitive/perceptual distortions** and marked **oddness**."] },
              { title: "Avoidant PD", color: "clin", points: ["Avoidant: **wants** relationships, held back by fear of rejection.", "Schizotypal: **lacks desire** for relationships; persistent detachment."] },
              { title: "Borderline PD", color: "case", points: ["Transient psychotic-like symptoms tied to **affective shifts** under stress, often **dissociative**.", "Schizotypal: **enduring** psychotic-like symptoms."] }
            ] },
            { type: "defs", title: "Epidemiology and course", items: [
              ["Prevalence", "**3.3%** (NCS-R subsample) and **3.9%** (NESARC); a review of five studies found a median of **0.6%**."],
              ["Course", "**Relatively stable**; only a **small proportion** go on to schizophrenia or another psychotic disorder."],
              ["Childhood", "May show first as solitariness, poor peer relationships, social anxiety, underachievement, peculiar thoughts and language, and bizarre fantasies."],
              ["Familial", "More common in **first-degree relatives of people with schizophrenia**."],
              ["Sex", "Slightly more common in **men**."],
              ["Help-seeking", "People usually seek treatment for associated **anxiety or depression**, not the personality features."]
            ] },
            { type: "callout", kind: "pearl", text: "The **dinner-party test**: people with social anxiety disorder or avoidant PD relax as the evening goes on; a person with schizotypal PD may grow **more tense and suspicious**, because the anxiety comes from suspicion about others’ motives." }
          ]
        },
        {
          id: "s2-delusional",
          title: "Delusional disorder",
          pages: "104–108",
          blocks: [
            { type: "criteria", title: "Delusional disorder in brief", code: "F22", pages: "104–105", items: [
              ["A", "**One or more delusions** lasting **1 month or longer**."],
              ["B", "**Criterion A for schizophrenia has never been met.**", null, "Hallucinations, if present, are **not prominent** and fit the delusional theme (e.g., feeling insects crawling with a delusion of infestation)."],
              ["C", "Apart from the delusion and its ramifications, functioning is **not markedly impaired** and behavior is **not obviously bizarre or odd**."],
              ["D", "Any manic or major depressive episodes have been **brief relative to** the delusional periods."],
              ["E", "Not due to a substance or another medical condition, and not better explained by another mental disorder such as **body dysmorphic disorder** or **OCD**."]
            ], specifiers: [
              ["Type", "**Erotomanic**, **grandiose**, **jealous**, **persecutory**, **somatic**, **mixed** (no theme predominates) or **unspecified** (e.g., referential delusions without a prominent persecutory or grandiose component)."],
              ["With bizarre content", "Delusions that are clearly implausible, not understandable and not derived from ordinary experience."],
              ["Course", "First episode / multiple episodes, currently in acute episode, partial or full remission; continuous; unspecified. **Only after 1 year** of illness."],
              ["Severity", "0–4 ratings of the primary psychotic symptoms over the last 7 days (optional)."]
            ] },
            { type: "table", caption: "The seven types (pp. 105–106)", head: ["Type", "Central theme", "Typical behavior"], rows: [
              ["**Erotomanic**", "Another person is in love with the individual", "The object is usually of **higher status** (a celebrity, a superior at work) but can be a stranger; **attempts to contact** are common; legal trouble"],
              ["**Grandiose**", "Great unrecognized talent or insight, an important discovery, a special relationship with or identity as a prominent person", "May be religious; the real prominent person may be called an impostor"],
              ["**Jealous**", "The spouse or lover is **unfaithful**", "Built on small bits of “evidence” (disarrayed clothing); **confronting** the partner and trying to intervene; probably **more common in men**"],
              ["**Persecutory**", "Being conspired against, cheated, spied on, followed, poisoned or drugged, maligned, harassed or obstructed", "**Most common type**; small slights magnified; repeated **legal or legislative action**; resentment, anger, sometimes violence"],
              ["**Somatic**", "Bodily functions or sensations", "Most often: emitting a **foul odor**, **insect infestation** of the skin, an **internal parasite**, or body parts not working"],
              ["**Mixed**", "No single theme predominates", ""],
              ["**Unspecified**", "Theme cannot be determined or is not one of the above", "e.g., referential delusions alone"]
            ] },
            { type: "p", text: "Delusions are the **sine qua non**. **Hallucinations and negative symptoms are uncommon**, **disorganization is rare**, and **catatonia excludes the diagnosis** (delusions plus catatonia would meet schizophrenia Criterion A). A subset has prominent **depressive** symptoms; cognitive impairment and mania are rare." },
            { type: "defs", title: "Associated features, epidemiology and course", items: [
              ["Insight", "There may be **“factual insight”** (knowing that others see the belief as irrational) without **true insight**."],
              ["Mood and behavior", "Irritable or dysphoric mood, often a reaction to the delusion. Anger and violence can occur with **persecutory, jealous and erotomanic** types; **litigious** behavior (e.g., hundreds of protest letters); legal trouble especially in **jealous and erotomanic** types."],
              ["Prevalence", "About **0.2%** lifetime (Finnish sample); **persecutory** type most frequent; no major sex difference overall."],
              ["Course", "Global functioning is generally **better than in schizophrenia**. About **one-third** of people with 1–3 months of delusional disorder are later diagnosed with **schizophrenia**; the diagnosis is much more stable once it has lasted **6–12 months**. May be more prevalent in **older** people."],
              ["Familial", "Significant familial relationship with **schizophrenia** and **schizotypal PD**."],
              ["Function", "Impairment is usually **circumscribed**; behavior and appearance can look normal when the delusion is not being discussed. **Men** tend to have more severe symptoms and worse outcomes."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 107–108)", head: ["Consider", "How to tell"], rows: [
              ["OCD or body dysmorphic disorder", "If the person is completely convinced their OCD or BDD beliefs are true, diagnose **OCD or BDD with absent insight/delusional beliefs**, not delusional disorder."],
              ["Delirium, major NCD, psychotic disorder due to another medical condition", "Simple persecutory delusions in major neurocognitive disorder are coded as **major NCD, with behavioral disturbance**."],
              ["Substance/medication-induced psychotic disorder", "Can look identical cross-sectionally; the **timing** of substance use against onset and remission decides."],
              ["Schizophrenia or schizophreniform disorder", "No other active-phase symptoms. Delusions in delusional disorder show more **conviction, extension and pressure**; in schizophrenia they are more **disorganized** (less internally consistent and systematized)."],
              ["Mood disorders and schizoaffective disorder", "Delusions **only during mood episodes** → mood disorder with psychotic features. Mood episodes may be superimposed on delusional disorder only if **brief overall**; if not, use **other specified/unspecified psychotic disorder** plus an other specified/unspecified depressive or bipolar disorder."]
            ] },
            { type: "case", title: "Clinical vignette: the neighbor’s signals", text: "A 61-year-old retired accountant has, for 2 years, believed that his upstairs neighbor pumps gas through the ventilation to drive him out. He has filed dozens of complaints with the building board and the police and installed air filters in every room. He has no hallucinations, his speech is organized, he still manages his finances and plays chess at a club, and he looks entirely ordinary until the neighbor comes up. There is no substance use, and the neurological and cognitive workup is normal.", point: "One nonbizarre persecutory delusion for ≥1 month, schizophrenia Criterion A never met, functioning intact apart from the delusion, and no medical or substance cause: **delusional disorder, persecutory type**. The litigious complaints are typical of the type." }
          ]
        }
      ]
    },
    {
      title: "Time-limited psychotic disorders",
      sections: [
        {
          id: "s2-brief",
          title: "Brief psychotic disorder",
          pages: "108–111",
          blocks: [
            { type: "criteria", title: "Brief psychotic disorder in brief", code: "F23", pages: "108–109", items: [
              ["A", "**One or more** of the following, at least one being (1), (2) or (3):", ["Delusions", "Hallucinations", "Disorganized speech (frequent derailment or incoherence)", "Grossly disorganized or catatonic behavior"], "A **culturally sanctioned response** does not count. Note that **negative symptoms are not on this list**."],
              ["B", "An episode lasts **at least 1 day but less than 1 month**, with an **eventual full return** to the premorbid level of functioning."],
              ["C", "Not better explained by a depressive or bipolar disorder with psychotic features, another psychotic disorder (such as schizophrenia) or catatonia, and not due to a substance or another medical condition."]
            ], specifiers: [
              ["With marked stressor(s)", "Also called **brief reactive psychosis**: symptoms follow events that would be markedly stressful to almost anyone in similar circumstances in the person’s culture."],
              ["Without marked stressor(s)", "No such events."],
              ["With peripartum onset", "Onset **during pregnancy or within 4 weeks postpartum**."],
              ["With catatonia", "Add **F06.1** catatonia associated with brief psychotic disorder."],
              ["Severity", "Optional 0–4 ratings over the last 7 days."]
            ] },
            { type: "defs", title: "Associated features, epidemiology and course", items: [
              ["Experience", "Typically **emotional turmoil** or overwhelming confusion with rapid shifts between intense affects."],
              ["Severity", "Brief but can be **severe**: supervision may be needed for nutrition, hygiene and protection from poor judgment."],
              ["Suicide", "**Increased risk of suicidal behavior**, especially during the acute episode."],
              ["Prevalence", "About **2%–7%** of first-onset psychosis in several countries."],
              ["Onset", "Adolescence or early adulthood onward; **average onset in the mid-30s**."],
              ["Course", "Full remission within 1 month by definition, sometimes after only a few days. **More than 50% relapse** later, yet outcome is **usually favorable**. In **under half** of cases the diagnosis later changes, more often to a **schizophrenia spectrum** disorder."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 110–111)", head: ["Consider", "How to tell"], rows: [
              ["Another medical condition or delirium", "History, examination or laboratory findings show the symptoms are a direct effect of a condition (e.g., **Cushing’s syndrome**, **brain tumor**)."],
              ["Substance-related disorders", "A substance is judged causal; a **urine drug screen**, **blood alcohol** and a careful timeline help."],
              ["Depressive and bipolar disorders", "Psychosis occurring **exclusively during** a mood episode is a mood disorder with psychotic features."],
              ["Other psychotic disorders", "Symptoms lasting **1 month or longer** point to schizophreniform, delusional, mood or other specified disorders. If treatment ended symptoms before 1 month, the line with schizophreniform disorder is hard to draw; watch for a **recurrent disorder**."],
              ["Malingering and factitious disorder", "Symptoms are **intentionally produced**; in malingering for an understandable goal."],
              ["Personality disorders", "Stress can cause transient psychotic symptoms that usually need no extra diagnosis; if they last **at least 1 day**, brief psychotic disorder may be added."]
            ] },
            { type: "callout", kind: "culture", text: "Voices heard during a **religious ceremony** that do not persist and are not seen as abnormal by the community are not psychosis. In many cultures, **bereaved relatives** commonly hear, see or interact with the spirit of a recently deceased loved one without pathological consequences." },
            { type: "case", title: "Clinical vignette: three days after the flood", text: "A 34-year-old man is brought in 3 days after his home and shop were destroyed in a flood. He is terrified, says the rescue workers are poisoning the water to kill survivors, and hears voices calling his name. He is confused at times and his mood swings from weeping to rage. He has no psychiatric history; toxicology and the medical workup are negative. Sixteen days later he is calm, insightful and back to helping his family rebuild.", point: "Delusions and hallucinations lasting ≥1 day and <1 month with a full return to baseline, triggered by an event that would be markedly stressful to almost anyone: **brief psychotic disorder, with marked stressor (brief reactive psychosis)**. Watch for relapse, which happens in more than half." }
          ]
        },
        {
          id: "s2-schizophreniform",
          title: "Schizophreniform disorder",
          pages: "111–113",
          blocks: [
            { type: "criteria", title: "Schizophreniform disorder in brief", code: "F20.81", pages: "111–112", items: [
              ["A", "The **same Criterion A as schizophrenia**: two or more of delusions, hallucinations, disorganized speech, grossly disorganized or catatonic behavior, negative symptoms, for a significant part of a 1-month period (less if successfully treated); at least one is delusions, hallucinations or disorganized speech."],
              ["B", "An episode lasts **at least 1 month but less than 6 months**.", null, "If the diagnosis must be made before recovery, call it **“provisional.”**"],
              ["C", "Schizoaffective disorder and mood disorders with psychotic features ruled out: **no concurrent mood episodes**, or mood episodes present for only a **minority** of the active and residual periods."],
              ["D", "Not due to a substance or another medical condition."]
            ], specifiers: [
              ["With good prognostic features", "**At least two** of: onset of prominent psychotic symptoms **within 4 weeks** of the first noticeable change in behavior or functioning; **confusion or perplexity**; **good premorbid** social and occupational functioning; **absence of blunted or flat affect**."],
              ["Without good prognostic features", "Fewer than two of the above."],
              ["With catatonia", "Add **F06.1** catatonia associated with schizophreniform disorder."],
              ["Severity", "Optional 0–4 ratings over the last 7 days."]
            ] },
            { type: "compare", title: "Two differences from schizophrenia", items: [
              { title: "Duration", color: "hy", points: ["Total illness, **including prodromal, active and residual phases**, is ≥1 and <6 months.", "Intermediate between brief psychotic disorder (<1 month) and schizophrenia (≥6 months)."] },
              { title: "Functioning", color: "clin", points: ["**No criterion** requiring social or occupational decline.", "Impairment may be present but is **not needed**."] }
            ] },
            { type: "list", title: "When the diagnosis is made", ordered: true, items: [
              "The episode lasted 1 to 6 months and the person has **already recovered**.",
              "The person has been ill for **less than 6 months** and has **not yet recovered**: record **“schizophreniform disorder (provisional).”** If the disturbance passes 6 months, change the diagnosis to **schizophrenia**."
            ] },
            { type: "defs", title: "Epidemiology and course", items: [
              ["Incidence", "In the United States and other high-income countries, possibly **fivefold lower** than schizophrenia; in lower-income countries it may be higher, especially **with good prognostic features**, sometimes as common as schizophrenia."],
              ["Course", "About **one-third** recover within 6 months and keep the diagnosis; **most of the other two-thirds** are eventually diagnosed with **schizophrenia or schizoaffective disorder**."],
              ["Familial", "Relatives have an increased risk of **schizophrenia**."],
              ["Tests", "As in schizophrenia, **no laboratory or psychometric test**; imaging and other research findings are not diagnostic."]
            ] },
            { type: "callout", kind: "exam", text: "The differential of schizophreniform disorder is essentially that of schizophrenia, because the two differ mainly in duration. The classic trap: a 4-month illness with clear decline is still **schizophreniform**, not schizophrenia; the **time rule** decides, not the severity." }
          ]
        }
      ]
    },
    {
      title: "Schizophrenia and schizoaffective disorder",
      sections: [
        {
          id: "s2-scz-criteria",
          title: "Schizophrenia: criteria and diagnostic features",
          pages: "113–115",
          blocks: [
            { type: "criteria", title: "Schizophrenia in brief", code: "F20.9", pages: "113–114", items: [
              ["A", "**Two or more** of the following, each for a significant part of a **1-month** period (less if successfully treated), at least one being (1), (2) or (3):", ["**Delusions**", "**Hallucinations**", "**Disorganized speech** (frequent derailment or incoherence)", "**Grossly disorganized or catatonic behavior**", "**Negative symptoms** (diminished emotional expression or avolition)"]],
              ["B", "For a significant part of the time since onset, functioning in work, relationships or self-care is **markedly below** the previous level (in children and adolescents, **failure to reach** the expected level)."],
              ["C", "Continuous signs for **at least 6 months**, including **at least 1 month of active-phase** (Criterion A) symptoms; prodromal or residual periods may show only negative symptoms or attenuated Criterion A symptoms (odd beliefs, unusual perceptions)."],
              ["D", "**Schizoaffective disorder and mood disorders with psychotic features ruled out**: no mood episodes during the active phase, or mood episodes present for only a **minority** of the active and residual periods."],
              ["E", "Not due to a **substance** or another **medical condition**."],
              ["F", "With a history of **autism spectrum disorder** or a **childhood-onset communication disorder**, schizophrenia is added only if **prominent delusions or hallucinations** are present for **at least 1 month** (less if treated), in addition to the other required symptoms."]
            ], specifiers: [
              ["Course (after 1 year)", "First episode, currently in acute episode / partial remission / full remission; multiple episodes (at least two episodes: a first episode, a remission and at least one relapse), currently in acute episode / partial remission / full remission; continuous; unspecified."],
              ["With catatonia", "Add **F06.1** catatonia associated with schizophrenia."],
              ["Severity", "Optional 0–4 ratings of the primary psychotic symptoms, most severe in the last 7 days."]
            ] },
            { type: "p", text: "**No single symptom is pathognomonic.** The diagnosis rests on a **constellation** of signs and symptoms together with impaired functioning, and the disorder is heterogeneous: individuals vary substantially on most features." },
            { type: "list", title: "Reading the criteria correctly (pp. 114–115)", items: [
              "**Criterion A**: if active symptoms **remit within a month because of treatment**, A is still met when the clinician judges they would have persisted untreated.",
              "**Criterion B**: compare with **unaffected siblings** when onset is in childhood. **Avolition** (A5) links directly to the social dysfunction of B, and **cognitive impairment** is strongly related to functional impairment.",
              "**Criterion C**: the **prodrome** often precedes the active phase and **residual** symptoms may follow: odd beliefs short of delusion (**ideas of reference**, **magical thinking**), unusual perceptions (sensing an unseen presence), vague but understandable speech, odd behavior (mumbling in public). **Negative symptoms** are common and can be severe in these phases; withdrawal from routines is often the **first sign**.",
              "**Criterion D**: mood symptoms and even full mood episodes are common in schizophrenia, but the diagnosis needs **delusions or hallucinations in the absence of mood episodes**, and mood episodes must fill only a **minority** of the total illness."
            ] },
            { type: "callout", kind: "exam", text: "Negative symptoms + catatonia, or negative symptoms + disorganized behavior, can give “two symptoms” but **never satisfy Criterion A**: one of the first three (**delusions, hallucinations, disorganized speech**) is mandatory." },
            { type: "case", title: "Clinical vignette: the engineering student", text: "A 22-year-old engineering student stopped attending lectures 9 months ago and gradually withdrew from friends. Over the past 6 weeks he has heard a running commentary on his actions and believes his professors broadcast his thoughts through the campus Wi-Fi. He sits for hours without doing anything, his face shows little expression, and he has not showered in weeks. He had no mood episodes, the drug screen is negative and the medical workup is unremarkable.", point: "Criterion A (hallucinations, delusions, negative symptoms) for >1 month, marked decline (B), and **≥6 months** of continuous signs counting the prodromal withdrawal (C), with mood, substance and medical causes excluded: **schizophrenia**. Course specifiers cannot be used until the illness has lasted 1 year." }
          ]
        },
        {
          id: "s2-scz-associated",
          title: "Schizophrenia: associated features",
          pages: "116",
          blocks: [
            { type: "list", title: "Associated features", items: [
              "**Inappropriate affect** (laughing without an appropriate stimulus); dysphoric mood (depression, anxiety, anger); **disturbed sleep** (sleeping by day, active at night); lack of interest in eating or **food refusal**.",
              "**Depersonalization, derealization and somatic concerns**, sometimes reaching delusional proportions; anxiety and phobias are common.",
              "**Cognitive deficits** are common and strongly linked to vocational and functional impairment: declarative and **working memory**, language and other **executive functions**, **slower processing speed**, sensory processing, inhibition and attention.",
              "**Social cognition** deficits, including **theory of mind** (inferring others’ intentions); attending to irrelevant events and treating them as meaningful may generate **explanatory delusions**. These impairments often **persist in remission**."
            ] },
            { type: "defs", title: "Anosognosia", items: [
              ["What it is", "Lack of insight or awareness of the disorder, including unawareness of its symptoms; may last the **entire course**."],
              ["What it is not", "Usually a **symptom of schizophrenia itself**, not a coping strategy; compared to the unawareness of deficits after brain injury."],
              ["Why it matters", "It is the **most common predictor of nonadherence** and predicts **higher relapse rates**, more **involuntary treatment**, poorer psychosocial functioning, **aggression** and a poorer course."]
            ] },
            { type: "callout", kind: "key", title: "Violence: the facts", text: "Hostility and aggression can occur, but **spontaneous or random assault is uncommon**. Aggression is more frequent in **younger males** and with a history of **violence, nonadherence, substance abuse and impulsivity**. The **vast majority** of people with schizophrenia are **not aggressive**, and they are **more often victimized** than the general population." },
            { type: "list", title: "Biological findings (group differences, not tests)", items: [
              "There are **no radiological, laboratory or psychometric tests** for schizophrenia.",
              "Group differences across neuroimaging, neuropathology and neurophysiology: cellular architecture, **white matter connectivity**, **gray matter volume** (prefrontal and temporal cortices), **reduced overall brain volume**, with steeper volume loss with age than in healthy people.",
              "Differences in **eye-tracking** and electrophysiological indices.",
              "**Neurological soft signs**: poor motor coordination, sensory integration and sequencing of complex movements, **left-right confusion**, disinhibition of associated movements. **Minor physical anomalies** of the face and limbs may occur."
            ] }
          ]
        },
        {
          id: "s2-scz-course",
          title: "Schizophrenia: prevalence, development and course",
          pages: "116–118",
          blocks: [
            { type: "defs", title: "Prevalence", items: [
              ["Lifetime", "About **0.3%–0.7%**, varying over a **fivefold** range across nationally representative surveys."],
              ["Higher in", "Some groups defined by **migration and refugee status**, **urbanicity**, and the **economic status and latitude** of the country; some groups are also more likely to be **misdiagnosed or overdiagnosed**."],
              ["Sex", "Presentations with **prominent negative symptoms and long duration** (poorer outcome) show higher incidence in **men**; definitions that include more mood symptoms and brief presentations show **equal risk**. A large worldwide study found **no sex difference in prevalence**."]
            ] },
            { type: "timeline", title: "Typical age at onset", cols: ["Teens", "20s", "30s", "40+"], rows: [
              { label: "Range", from: 0, to: 3, color: "mech", bar: "Late teens to mid-30s", note: "Onset before adolescence is rare." },
              { label: "Men", from: 1, to: 2, color: "drug", bar: "Peak early to mid-20s" },
              { label: "Women", from: 1, to: 3, color: "guide", bar: "Peak late 20s; second midlife peak" }
            ] },
            { type: "list", title: "Onset and early course", items: [
              "Onset may be **abrupt or insidious**, but most people develop symptoms **slowly and gradually**: social withdrawal, emotional and cognitive changes, and declining role function. **Half** show **depressive symptoms**.",
              "**Prognosis** depends on **duration**, **severity** and **gender**. **Men**, especially with a **long duration of untreated psychosis** and **poor premorbid adjustment**, have more negative symptoms, more cognitive impairment and worse functional outcomes.",
              "**Sociocognitive deficits** may appear during development, before psychosis, and persist as stable impairments that **do not respond to antipsychotics**."
            ] },
            { type: "table", caption: "Outcome figures quoted in the manual (p. 117)", head: ["Source", "Finding"], rows: [
              ["Meta-analysis of **79** first-episode studies (>1 year follow-up)", "Pooled **remission 56%** (mild or absent symptoms for ≥6 months); pooled **recovery 30%** (symptomatic and functional improvement for >2 years)"],
              ["Meta-analysis of **50** studies of broadly defined schizophrenia", "Median proportion meeting **recovery criteria: 13.5%**"]
            ] },
            { type: "compare", title: "Three symptom dimensions, three courses", items: [
              { title: "Positive symptoms", color: "case", points: ["Most people stay **vulnerable to exacerbations**; a chronic course is common, but many have **remission or recovery** periods.", "Psychotic experiences tend to **lessen in late life**."] },
              { title: "Cognition", color: "mech", points: ["**Declines during development**, before full psychosis.", "Then relatively **stable** over the long term."] },
              { title: "Negative symptoms", color: "clin", points: ["Present during development: relatively **stable traits**.", "Starting **after** psychosis onset: more **variable**, may be **secondary**."] }
            ] },
            { type: "callout", kind: "key", text: "Schizophrenia is **generally not a progressive neurodegenerative disorder**. Life challenges, lifestyle changes and persistent symptoms can still produce progressive dysfunction in severe chronic cases, and many people need long-term mental health care and living support." },
            { type: "defs", title: "Age-related features", items: [
              ["Childhood onset", "Same essential features but harder to diagnose. Delusions and hallucinations are **less elaborate**; **visual hallucinations are more common** and must be distinguished from **normal fantasy play**. Disorganized speech (autism spectrum disorder) and disorganized behavior (ADHD) are common in other childhood disorders, so consider those first. Childhood-onset cases resemble **poor-outcome adult cases**: gradual onset, prominent negative symptoms. Antecedents: nonspecific emotional-behavioral problems, intellectual and language changes, subtle **motor delays**."],
              ["Late onset (after 40)", "**Overrepresented by women** (who may have married); **predominantly psychotic** symptoms with **preserved affect and social functioning**. It is not yet clear whether this is the same condition as schizophrenia diagnosed before midlife (e.g., before 55)."]
            ] }
          ]
        },
        {
          id: "s2-scz-risk",
          title: "Schizophrenia: risk, culture, sex and gender, suicide",
          pages: "118–119",
          blocks: [
            { type: "table", caption: "Risk and prognostic factors", head: ["Domain", "Factors"], rows: [
              ["**Environmental**", "**Season of birth** (late winter/early spring in some places; **summer** for the **deficit** form); growing up in an **urban** environment; being a **refugee**, some **migrant** groups, and socially oppressed groups facing **discrimination**; social deprivation and adversity. Severity of positive and negative symptoms correlates with **adverse childhood experiences** (trauma, neglect)."],
              ["**Ethnic density**", "Higher rates for some ethnic and racialized groups living where **fewer people share their ethnicity**, probably from: more **discrimination** (or fear of it); less social support and more stigma; more **social isolation**; and less access to **normalizing explanations** of unusual experiences."],
              ["**Genetic**", "A **strong genetic contribution**, yet **most people with schizophrenia have no family history** of psychosis. Liability comes from **many common and rare alleles**, each contributing a small fraction, and shared with **bipolar disorder, depression and autism spectrum disorder**."],
              ["**Prenatal and perinatal**", "Pregnancy and birth complications with **hypoxia**, **greater paternal age**, prenatal **stress, infection, malnutrition, maternal diabetes**. The **vast majority** of exposed offspring do **not** develop schizophrenia."]
            ] },
            { type: "callout", kind: "culture", text: "Symptom form and content vary across cultures: the ratio of **visual to auditory** hallucinations (auditory are more common worldwide, but visual are relatively more frequent in some regions), the themes of delusions and hallucinations (command, abusive, religious) and the fear attached to them. Assess affect with sensitivity to cultural norms for emotional expression, eye contact and body language. In some groups, distress takes the form of **pseudo-hallucinations** or **overvalued ideas** that look psychotic but are normative." },
            { type: "callout", kind: "caution", title: "Misdiagnosis", text: "People with **mood disorders with psychotic features** or other disorders are **more likely to be misdiagnosed with schizophrenia** if they belong to **underserved ethnic and racialized groups**; in the United States this applies especially to **African Americans**. Clinical bias, racism and discrimination can limit the quality of information and lead to misinterpretation. Always assess mood fully." },
            { type: "defs", title: "Sex- and gender-related features", items: [
              ["Women", "**Later onset** with a **second midlife peak**; more **affect-laden** symptoms and more psychotic symptoms that tend to **worsen in later life**; **fewer negative symptoms and less disorganization**; **better-preserved social functioning** (with frequent exceptions)."],
              ["Estrogen", "Symptoms **worsen premenstrually** as estrogen falls, so admissions rise just before and during menses. Low estrogen after **menopause** may contribute to the second peak. Symptoms tend to **improve in pregnancy** and **worsen postpartum**."]
            ] },
            { type: "defs", title: "Suicide", items: [
              ["Rates", "About **5%–6%** die by suicide; about **20%** attempt at least once; many more have significant ideation."],
              ["Triggers", "Sometimes **command hallucinations** to harm oneself or others."],
              ["Highest risk", "Risk stays high across the lifespan, but may be especially high in **younger men with comorbid substance use**."],
              ["Other risk factors", "**Depressive symptoms**, **hopelessness**, unemployment, the period **after a psychotic episode or hospital discharge**, number of admissions, **closeness to illness onset**, older age at onset. Depressive symptoms in first-episode psychosis raise the odds of later suicidal behavior."],
              ["Meta-analytic findings", "**Suicide attempts**: alcohol, tobacco and drug abuse, depression, number of hospitalizations, physical comorbidity, family history of depression and suicidal behavior. **Suicide**: male sex, younger age, **higher IQ**, previous attempts, hopelessness, poor adherence."]
            ] }
          ]
        },
        {
          id: "s2-scz-ddx",
          title: "Schizophrenia: functional consequences, differential diagnosis and comorbidity",
          pages: "119–121",
          blocks: [
            { type: "list", title: "Functional consequences", items: [
              "Significant **social and occupational dysfunction**.",
              "**Reading** deficits are worse than general cognitive impairment would predict: a secondary or **acquired dyslexia** behind academic problems.",
              "**Avolition** and other manifestations often block education and employment even when cognitive skills are adequate.",
              "Most people are employed at a **lower level than their parents**; most, particularly **men**, **do not marry** or have limited social contact outside the family."
            ] },
            { type: "table", caption: "Differential diagnosis of schizophrenia (pp. 120–121)", head: ["Consider", "The deciding point"], rows: [
              ["**MDD or bipolar disorder with psychotic or catatonic features**", "Timing and severity of mood symptoms: if delusions or hallucinations occur **only during** mood episodes, it is a mood disorder."],
              ["**Schizoaffective disorder**", "A major mood episode **concurrent** with active-phase symptoms, and mood symptoms present for the **majority** of the illness."],
              ["**Schizophreniform and brief psychotic disorders**", "**Shorter**: <6 months and ≥1 day to <1 month respectively."],
              ["**Delusional disorder**", "**No other** characteristic symptoms of schizophrenia."],
              ["**Schizotypal PD**", "**Subthreshold** symptoms tied to persistent personality features."],
              ["**OCD and body dysmorphic disorder**", "Insight may be poor or absent, but there are prominent **obsessions, compulsions**, appearance or body-odor **preoccupations**, hoarding or body-focused repetitive behaviors."],
              ["**PTSD**", "Flashbacks can feel hallucinatory and hypervigilance can look paranoid, but PTSD needs a **traumatic event** and characteristic reliving and reactivity symptoms."],
              ["**Autism spectrum or communication disorders**", "Social and communication deficits with restricted, repetitive behavior; schizophrenia is added only with **prominent hallucinations or delusions for ≥1 month** (Criterion F)."],
              ["**Delirium, major or mild NCD**", "Psychosis follows the **onset of cognitive changes**."],
              ["**Substance/medication-induced psychotic disorder**", "The **timing** of substance use against onset and remission (psychosis **remits** without the substance)."]
            ] },
            { type: "defs", title: "Comorbidity", items: [
              ["Substances", "High rates of **substance-related disorders**; **over half** have **tobacco use disorder** and smoke regularly."],
              ["Anxiety", "Increasingly recognized; **OCD** and **panic disorder** are more common than in the general population."],
              ["Personality", "**Schizotypal or paranoid PD** may **precede** schizophrenia."],
              ["Medical", "**Reduced life expectancy** from associated medical conditions: weight gain, **diabetes**, **metabolic syndrome**, **cardiovascular and pulmonary disease**. Contributors include poor health maintenance (cancer screening, exercise), **medications**, lifestyle, **smoking** and diet, and possibly a **shared vulnerability**."]
            ] }
          ]
        },
        {
          id: "s2-schizoaffective",
          title: "Schizoaffective disorder: criteria and the majority rule",
          pages: "121–123",
          blocks: [
            { type: "criteria", title: "Schizoaffective disorder in brief", code: "F25.0 / F25.1", pages: "121–122", items: [
              ["A", "An **uninterrupted period of illness** with a **major mood episode** (major depressive or manic) **concurrent** with **Criterion A of schizophrenia**.", null, "The major depressive episode must include **depressed mood** (A1); loss of interest alone does not count, because it is so common in schizophrenia."],
              ["B", "**Delusions or hallucinations for 2 or more weeks without a major mood episode** at some point in the lifetime course of the illness."],
              ["C", "Symptoms meeting criteria for a major mood episode are present for the **majority** of the total active and residual illness."],
              ["D", "Not due to a substance or another medical condition."]
            ], specifiers: [
              ["Bipolar type (F25.0)", "A **manic episode** is part of the presentation; major depressive episodes may also occur."],
              ["Depressive type (F25.1)", "**Only major depressive episodes**."],
              ["With catatonia", "Add **F06.1** catatonia associated with schizoaffective disorder."],
              ["Course (after 1 year)", "First or multiple episodes, acute / partial / full remission; continuous; unspecified."],
              ["Severity", "Optional 0–4 ratings over the last 7 days."]
            ] },
            { type: "compare", title: "What each criterion is designed to do", items: [
              { title: "Criterion B", color: "drug", points: ["Separates schizoaffective disorder from a **mood disorder with psychotic features**.", "In a mood disorder, psychosis occurs **only within** mood episodes."] },
              { title: "Criterion C", color: "mech", points: ["Separates schizoaffective disorder from **schizophrenia**.", "If mood episodes fill only a **minority** of the illness, it is schizophrenia."] },
              { title: "What is not required", color: "clin", points: ["Schizophrenia’s **B** (social dysfunction), **C** (6 months) and **F** (autism exclusion) do **not** have to be met."] }
            ] },
            { type: "p", text: "Criterion C asks about the **whole lifetime course**, so it needs a careful history and often **collateral information and records**. Count the time when significant mood symptoms (untreated, or needing antidepressant or mood-stabilizing treatment) accompanied psychosis, then compare it with the total duration of active and residual illness." },
            { type: "ladder", title: "The manual’s typical pattern (p. 124): 7 months of illness", ticks: [[0, "0"], [28.6, "2 mo"], [85.7, "6 mo"], [100, "7 mo"]], rows: [
              { label: "Psychosis", from: 0, to: 100, color: "case", span: "Throughout", note: "Hallucinations and persecutory delusions" },
              { label: "Major depressive episode", from: 28.6, to: 85.7, color: "drug", span: "4 of 7 months", note: "Mood present for the **majority** → Criterion C met" },
              { label: "Psychosis alone", from: 0, to: 28.6, color: "hy", span: "2 months + 1 month", note: "≥2 weeks without a mood episode → Criterion B met" }
            ], note: "Result: schizoaffective disorder, depressive type." },
            { type: "callout", kind: "exam", title: "The counter-example", text: "Four years of active and residual schizophrenia, with depressive and manic episodes adding up to **no more than 1 year**: mood is present for a **minority**, Criterion C is **not** met, and the diagnosis stays **schizophrenia** (p. 123)." },
            { type: "case", title: "Clinical vignette: voices that outlast the mania", text: "A 27-year-old woman has had three hospital admissions over 5 years. Each began with weeks of elevated mood, little sleep, pressured speech and grandiose plans, together with voices commenting on her. Collateral history shows the manic and depressive episodes have filled about 3½ of the 5 years. Between episodes, when her mood was normal, the voices and the belief that she is being watched persisted for a month or more at a time. Drug screens have been negative.", point: "Mood episodes concurrent with Criterion A, mood present for the **majority** of the illness (C), and **≥2 weeks** of psychosis without a mood episode (B), with a manic episode in the history: **schizoaffective disorder, bipolar type (F25.0)**. Without the mood-free psychosis this would be bipolar I disorder with psychotic features; with mood for only a minority of the illness it would be schizophrenia." }
          ]
        },
        {
          id: "s2-schizoaffective-course",
          title: "Schizoaffective disorder: features, course and differential",
          pages: "123–125",
          blocks: [
            { type: "list", title: "Associated features", items: [
              "Occupational and social functioning is **frequently impaired**, but impairment is **not a defining criterion** (unlike schizophrenia).",
              "Restricted social contact and difficulty with self-care occur, but **negative symptoms are less severe and less persistent** than in schizophrenia.",
              "**Anosognosia** is common but usually **less severe and pervasive** than in schizophrenia.",
              "If mood symptoms continue after Criterion A symptoms remit, there may be a later risk of **major depressive or bipolar disorder**. Alcohol and other substance-related disorders may be associated.",
              "No definitive test. Cognitive deficits (executive function, verbal memory, processing speed) are often **less pronounced** than in schizophrenia; **gray matter volume loss** resembles schizophrenia."
            ] },
            { type: "defs", title: "Epidemiology and course", items: [
              ["Prevalence", "About **one-third as common as schizophrenia**; **0.3%** lifetime in a Finnish sample, **higher in women** under DSM-IV criteria. Expected to be **lower** under the stricter DSM-5 Criterion C (“majority” rather than DSM-IV’s “substantial portion”)."],
              ["Onset", "Typically **early adulthood**, but anywhere from adolescence to late life."],
              ["Diagnostic shifts", "Diagnoses move **into** schizoaffective disorder as mood episodes become clear, and **out of** it to schizophrenia or a mood disorder; a change **to schizophrenia** is more common, and more so under DSM-5. If later follow-up shows only residual psychosis or negative symptoms, the diagnosis may change to schizophrenia."],
              ["Prognosis", "**Better than schizophrenia, worse than mood disorders.**"],
              ["Type by age", "**Bipolar type** may be more common in **young adults**; **depressive type** in **older adults**."],
              ["Genetics", "Increased risk in first-degree relatives of people with schizophrenia, bipolar disorder or schizoaffective disorder; **polygenic risk scores** for schizophrenia, bipolar disorder and MDD may all be elevated."],
              ["Suicide", "Lifetime suicide risk for schizophrenia and schizoaffective disorder is **5%**; **depressive symptoms** raise it. Rates appear higher in **North American** populations than in European, Eastern European, South American and Indian populations."],
              ["Comorbidity", "Especially **substance use and anxiety disorders**; increased **metabolic syndrome** and reduced life expectancy."]
            ] },
            { type: "callout", kind: "caution", text: "Mood symptoms during the **prodrome** of schizophrenia do not make it schizoaffective: what counts is the **co-occurrence** of a full mood episode with active psychosis. And because the proportion of mood to psychosis changes, the right diagnosis can change over time: a 4-month major depressive episode early in a chronic psychosis that then runs for years without another mood episode becomes **schizophrenia**." },
            { type: "callout", kind: "culture", text: "**African American and Hispanic** people who meet criteria for schizoaffective disorder are **more likely to be diagnosed with schizophrenia**. Guard against bias by evaluating **both psychotic and mood symptoms** comprehensively." },
            { type: "p", text: "The differential is wide: delirium, major NCD, substance-induced psychotic or neurocognitive disorder, bipolar or major depressive disorder with psychotic features, mood disorders with catatonic features, schizotypal, schizoid or paranoid PD, brief psychotic, schizophreniform and delusional disorders, schizophrenia, other specified/unspecified psychotic disorders, and **psychotic disorder due to another medical condition**, which can combine psychotic and mood symptoms and must be excluded." }
          ]
        }
      ]
    },
    {
      title: "Psychosis with an identifiable cause",
      sections: [
        {
          id: "s2-substance",
          title: "Substance/medication-induced psychotic disorder",
          pages: "126–131",
          blocks: [
            { type: "criteria", title: "Substance/medication-induced psychotic disorder in brief", code: "Coded by substance", pages: "126–127", items: [
              ["A", "**Delusions, hallucinations or both.**"],
              ["B", "History, examination or laboratory evidence that (1) the symptoms began **during or soon after** intoxication or withdrawal, or exposure to or withdrawal from a medication, and (2) the substance or medication **can produce** them."],
              ["C", "Not better explained by an **independent** psychotic disorder. Evidence of independence: symptoms **preceded** the substance use; symptoms **persist for a substantial period (about 1 month)** after acute withdrawal or severe intoxication ends; or other evidence, such as a history of recurrent non-substance-related episodes."],
              ["D", "Not exclusively during a **delirium**."],
              ["E", "Clinically significant **distress or impairment**."]
            ], specifiers: [
              ["Onset", "**With onset during intoxication**, **with onset during withdrawal**, or **with onset after medication use** (at initiation, a change in use, or withdrawal of a medication)."],
              ["Severity", "Optional 0–4 ratings of delusions, hallucinations, abnormal psychomotor behavior and negative symptoms (no disorganized speech rating)."]
            ], note: "Diagnose this **instead of** intoxication or withdrawal only when the psychotic symptoms **predominate** and are severe enough to warrant clinical attention." },
            { type: "table", caption: "ICD-10-CM codes (p. 127): the 4th character tracks a comorbid use disorder", head: ["Substance", "With mild use disorder", "With moderate or severe use disorder", "Without use disorder"], rows: [
              ["Alcohol", "F10.159", "F10.259", "F10.959"],
              ["Cannabis", "F12.159", "F12.259", "F12.959"],
              ["Phencyclidine", "F16.159", "F16.259", "F16.959"],
              ["Other hallucinogen", "F16.159", "F16.259", "F16.959"],
              ["Inhalant", "F18.159", "F18.259", "F18.959"],
              ["Sedative, hypnotic or anxiolytic", "F13.159", "F13.259", "F13.959"],
              ["Amphetamine-type substance (or other stimulant)", "F15.159", "F15.259", "F15.959"],
              ["Cocaine", "F14.159", "F14.259", "F14.959"],
              ["Other (or unknown) substance", "F19.159", "F19.259", "F19.959"]
            ], note: "Fourth character **1** = mild use disorder, **2** = moderate or severe, **9** = no use disorder (e.g., one-time heavy use). A **separate** use disorder diagnosis is **not** given. Substances that fit no class (e.g., **dexamethasone**) use the “other (or unknown)” code." },
            { type: "steps", title: "Recording the diagnosis (pp. 127–128)", items: [
              ["Use disorder first. ", "Name the comorbid use disorder (if any) and its severity, then “with.”"],
              ["Then the induced disorder. ", "Name the specific substance: e.g., **F14.259 severe cocaine use disorder with cocaine-induced psychotic disorder, with onset during intoxication**."],
              ["No use disorder? ", "Record only the induced disorder: e.g., **F16.959 phencyclidine-induced psychotic disorder, with onset during intoxication**."],
              ["More than one substance? ", "List each separately."]
            ] },
            { type: "compare", title: "Induced or independent? (p. 128)", items: [
              { title: "Points to substance/medication", color: "case", points: ["Onset **during or soon after** exposure, intoxication or withdrawal.", "**Atypical features**, e.g., new delusions in a **man older than 35** with no psychotic history.", "Symptoms continue while use continues and settle after removal (though they can persist for weeks)."] },
              { title: "Points to an independent disorder", color: "mech", points: ["Symptoms **before** the substance use, or during **sustained abstinence**.", "Persistence for **a month or more** after intoxication, withdrawal or medication ends.", "**Prior recurrent** independent episodes."] }
            ] },
            { type: "callout", kind: "exam", title: "Reality testing decides", text: "If a person **knows** the perception is drug-induced and neither believes nor acts on it, the diagnosis is **intoxication or withdrawal with perceptual disturbances**, not a psychotic disorder. That specifier exists for **alcohol withdrawal; cannabis intoxication; sedative, hypnotic or anxiolytic withdrawal; and stimulant intoxication**." },
            { type: "table", caption: "Which substances cause psychosis, and when (p. 129)", head: ["Phase", "Substance classes"], rows: [
              ["During **intoxication**", "Alcohol; cannabis; hallucinogens (including **phencyclidine**); inhalants; sedatives, hypnotics and anxiolytics; stimulants (including cocaine); other or unknown"],
              ["During **withdrawal**", "**Alcohol**; **sedatives, hypnotics and anxiolytics**; other or unknown"]
            ] },
            { type: "list", title: "Medications and toxins named in the chapter (p. 129)", cols: true, items: [
              "Anesthetics and analgesics", "Anticholinergic agents", "Anticonvulsants", "Antihistamines", "Antihypertensive and cardiovascular drugs", "Antimicrobials", "Antiparkinsonian drugs", "Chemotherapy (e.g., cyclosporine, procarbazine)", "**Corticosteroids**", "Gastrointestinal drugs", "Muscle relaxants", "NSAIDs", "OTC drugs (phenylephrine, pseudoephedrine)", "Antidepressants", "Disulfiram",
              "Toxins: anticholinesterases, **organophosphate insecticides**, sarin and other nerve gases, **carbon monoxide**, carbon dioxide, volatile substances (fuel, paint)"
            ] },
            { type: "table", caption: "Course by substance (pp. 129–130)", head: ["Substance", "What to expect"], rows: [
              ["**Cocaine** (high dose, smoked)", "Psychosis within **minutes**"],
              ["**Alcohol**, sedatives", "**Days or weeks** of high-dose use. **Alcohol-induced psychotic disorder with hallucinations** follows prolonged heavy drinking in moderate to severe alcohol use disorder; hallucinations are usually **auditory**."],
              ["**Amphetamine-type** and cocaine", "Similar pictures: **persecutory delusions** soon after use; **formication** (bugs crawling in or under the skin) with scratching and excoriation."],
              ["**Cannabis**", "Soon after high-dose use: **persecutory delusions, marked anxiety, emotional lability, depersonalization**; usually **remits within a day**."],
              ["Amphetamine-type, **PCP**, cocaine", "Can persist **for weeks or longer** after removal despite antipsychotic treatment."],
              ["Later life", "**Polypharmacy** and drugs for parkinsonism and cardiovascular disease make **prescription-induced** psychosis more likely than drug-of-abuse psychosis."]
            ] },
            { type: "defs", title: "Epidemiology and outcome", items: [
              ["Prevalence", "Unknown in the general population; **7%–25%** of people with a **first episode of psychosis** in different settings."],
              ["Long-term", "Danish registry over 20 years: about **one-third (32%)** later diagnosed with a **schizophrenia spectrum disorder (26%)** or **bipolar disorder (8%)**; highest for **cannabis-induced** psychosis (**44%**)."],
              ["Markers", "A blood level consistent with **toxicity** (e.g., alcohol, digoxin) increases diagnostic certainty."],
              ["Function", "Typically **severely disabling** and seen most in **emergency departments**, but usually **self-limited** once the agent is removed."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 130–131)", head: ["Consider", "How to tell"], rows: [
              ["Intoxication or withdrawal **with perceptual disturbances**", "Reality testing **intact**. Also: stimulants, cannabis, the opioid **meperidine**, PCP, alcohol or sedative withdrawal can alter perception."],
              ["**Hallucinogen persisting perception disorder**", "“**Flashback**” hallucinations long after hallucinogen use has stopped."],
              ["**Delirium**", "Psychotic symptoms **only during a delirium** (e.g., severe alcohol withdrawal) are part of the delirium."],
              ["**Major or mild NCD**", "Delusions there are coded as NCD **with behavioral disturbance**."],
              ["**Independent psychotic disorder**", "No substance judged causal."],
              ["**Psychotic disorder due to another medical condition**", "The illness itself, not its treatment, is causal; **both** diagnoses can be given if both contribute. A medication trial off or a switch may be needed to decide."],
              ["**Other specified/unspecified psychotic disorder**", "Substance-induced **disorganized or catatonic behavior, disorganized speech**: the induced diagnosis covers **only delusions and hallucinations**."]
            ] },
            { type: "case", title: "Clinical vignette: the festival", text: "A 19-year-old college student is brought to the emergency department after 2 days at a music festival, where he used high-potency cannabis edibles repeatedly. He believes festival security is hunting him, is intensely anxious, cries and laughs in turn, and says his body feels unreal. He has never been psychotic before and does not meet criteria for cannabis use disorder. By the next afternoon he is calm and embarrassed.", point: "Delusions arising during intoxication with a substance known to cause them, resolving within a day: **F12.959 cannabis-induced psychotic disorder, with onset during intoxication** (no use disorder → 4th character 9). Follow him up: cannabis-induced psychosis had the highest later conversion (44%) to schizophrenia spectrum or bipolar disorder in the Danish registry." }
          ]
        },
        {
          id: "s2-medical",
          title: "Psychotic disorder due to another medical condition",
          pages: "131–134",
          blocks: [
            { type: "criteria", title: "Psychotic disorder due to another medical condition in brief", code: "F06.2 / F06.0", pages: "131", items: [
              ["A", "**Prominent hallucinations or delusions.**"],
              ["B", "History, examination or laboratory evidence that the disturbance is the **direct pathophysiological consequence** of another medical condition."],
              ["C", "Not better explained by another mental disorder."],
              ["D", "Not exclusively during a **delirium**."],
              ["E", "Clinically significant **distress or impairment**."]
            ], specifiers: [
              ["F06.2 With delusions", "Delusions predominate."],
              ["F06.0 With hallucinations", "Hallucinations predominate."],
              ["Severity", "Optional 0–4 ratings (no disorganized speech rating)."]
            ], note: "Name the condition in the diagnosis and code the condition **first**: e.g., **C34.90** malignant lung neoplasm; **F06.2** psychotic disorder due to malignant lung neoplasm, with delusions." },
            { type: "flow", title: "Three considerations for a medical cause (p. 132)", steps: [
              ["Biological plausibility", "A condition that can cause psychosis through a plausible mechanism (severe infection, porphyria, lupus, temporal lobe epilepsy)", "mech"],
              ["Temporality", "Onset, worsening and remission of the condition track the psychosis: the strongest evidence", "hy"],
              ["Typicality", "Features atypical for a primary psychosis: unusual age at onset, visual or olfactory hallucinations", "case"]
            ], note: "Then rule out other causes, especially substance or medication effects (e.g., **steroids** used to treat an autoimmune disease)." },
            { type: "list", title: "Clinical features (pp. 131–132)", items: [
              "Hallucinations in any modality; certain causes favor certain hallucinations (**olfactory → temporal lobe epilepsy**). They range from simple and unformed to complex and organized.",
              "If the person keeps **reality testing** and knows the hallucinations come from the medical condition, the diagnosis is generally **not** made.",
              "Delusions can be somatic, grandiose or religious, but are **most commonly persecutory**; links between delusions and specific conditions are **less specific** than for hallucinations.",
              "A psychologically mediated reaction to a severe illness is not this diagnosis; it may be **brief psychotic disorder, with marked stressor**."
            ] },
            { type: "table", caption: "Medical causes named in the chapter (p. 132)", head: ["Group", "Examples"], rows: [
              ["Neurological", "Neoplasms, cerebrovascular disease, **Huntington’s** and **Parkinson’s** disease, **multiple sclerosis**, **epilepsy**, auditory or visual nerve injury, **deafness**, migraine, CNS infections"],
              ["Endocrine", "Hyper- and **hypothyroidism**, hyper- and hypoparathyroidism, hyper- and hypoadrenocorticism"],
              ["Metabolic", "Hypoxia, hypercarbia, **hypoglycemia**"],
              ["Other", "**Vitamin B12 deficiency**, fluid and electrolyte imbalance, hepatic and renal disease"],
              ["Autoimmune with CNS involvement", "**Systemic lupus erythematosus**, **anti-NMDA receptor encephalitis**"]
            ] },
            { type: "defs", title: "Epidemiology and course", items: [
              ["Prevalence", "Lifetime **0.21%–0.54%** (Sweden, Finland); **0.74%** in people **older than 65** (Finland)."],
              ["Common causes", "Untreated **endocrine and metabolic** disorders, **autoimmune** disorders, **temporal lobe epilepsy**."],
              ["Epilepsy", "Psychosis may be **ictal, postictal or interictal**; **postictal is the most common**, in **2%–7.8%** of people with epilepsy."],
              ["Older adults", "About **60%** of older people with **new-onset psychosis** have a **medical cause**; possibly more common in older women."],
              ["Course", "A single transient state or **recurrent** with the illness. Treating the condition usually resolves the psychosis, but not always (e.g., focal brain injury); chronic conditions (**MS**, interictal psychosis) can give a long-term course."],
              ["Age pattern", "Younger people: epilepsy, head trauma, autoimmune and neoplastic disease. Older people: **neurodegenerative disease**, stroke, anoxia, multimorbidity; cognitive, **vision and hearing impairment** may lower the threshold for psychosis."],
              ["Prognosis", "Identifying and treating the condition has the greatest impact; preexisting CNS injury (head trauma, cerebrovascular disease) may worsen the course."],
              ["Suicide", "Not clearly defined, but **epilepsy** and **MS** carry higher suicide rates that psychosis may raise further."],
              ["Comorbidity", "Over **80** years: associated with **major NCD**. Psychosis commonly accompanies **Alzheimer’s disease** and is a **defining feature of Lewy body disease**."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 133–134)", head: ["Consider", "How to tell"], rows: [
              ["**Delirium**", "Psychosis **only during** a delirium: no separate diagnosis."],
              ["**Major or mild NCD**", "Can be diagnosed **together** if the psychosis comes from the same disease process, e.g., psychotic disorder due to **Lewy body disease**, with delusions."],
              ["**Substance/medication-induced**", "Recent or prolonged use, withdrawal or toxin exposure (e.g., **LSD intoxication, alcohol withdrawal**); symptoms within about **4 weeks** of intoxication, withdrawal or medication use point there. Both diagnoses can be given."],
              ["**Primary psychotic or mood disorder**", "No direct causal mechanism can be shown. **Late onset** with **no personal or family history** of schizophrenia or delusional disorder calls for a thorough medical workup. Voices speaking in **complex sentences** are more typical of schizophrenia."]
            ] },
            { type: "case", title: "Clinical vignette: the new voices at 58", text: "A 58-year-old teacher with no psychiatric history starts accusing colleagues of stealing her lesson plans and reports a smell of burning rubber that no one else notices. Episodes of staring and lip-smacking lasting a minute have been noticed for a few months. EEG shows left temporal epileptiform discharges; MRI shows mesial temporal sclerosis. Her suspiciousness settles after seizure control improves.", point: "Late onset, olfactory hallucinations and a clear temporal link with a plausible neurological cause: **psychotic disorder due to temporal lobe epilepsy, with delusions (F06.2)**, coded after the epilepsy." }
          ]
        }
      ]
    },
    {
      title: "Catatonia",
      sections: [
        {
          id: "s2-catatonia",
          title: "Catatonia: one syndrome, three diagnoses",
          pages: "134–137",
          blocks: [
            { type: "p", text: "The manual does **not** treat catatonia as an independent class. It recognizes **catatonia associated with another mental disorder** (a specifier for neurodevelopmental, psychotic, bipolar, depressive and other mental disorders), **catatonic disorder due to another medical condition**, and **unspecified catatonia**. All are defined by **3 or more of 12** psychomotor features." },
            { type: "criteria", title: "The 12 features (Criterion A of both full catatonia diagnoses)", code: "≥3 of 12", pages: "135–136", items: [
              ["1", "**Stupor**: no psychomotor activity; not actively relating to the environment."],
              ["2", "**Catalepsy**: a posture held against gravity after it is **passively induced** by the examiner."],
              ["3", "**Waxy flexibility**: slight, even resistance to positioning by the examiner."],
              ["4", "**Mutism**: no or very little verbal response (exclude a known aphasia)."],
              ["5", "**Negativism**: opposition or no response to instructions or external stimuli."],
              ["6", "**Posturing**: spontaneous, **active** maintenance of a posture against gravity."],
              ["7", "**Mannerism**: odd, circumstantial caricature of normal actions."],
              ["8", "**Stereotypy**: repetitive, abnormally frequent, non-goal-directed movements."],
              ["9", "**Agitation** not influenced by external stimuli."],
              ["10", "**Grimacing**."],
              ["11", "**Echolalia**: mimicking another’s speech."],
              ["12", "**Echopraxia**: mimicking another’s movements."]
            ] },
            { type: "callout", kind: "mnemonic", text: "Catalepsy versus posturing: in **catalepsy** the examiner **places** the limb and it stays; in **posturing** the person **adopts** the posture **spontaneously**. Waxy flexibility is the even resistance felt while moving the limb." },
            { type: "compare", title: "The three catatonia diagnoses", items: [
              { title: "Associated with another mental disorder", color: "mech", points: ["**F06.1**, the **catatonia specifier**.", "Code the mental disorder **first**: e.g., F25.1 schizoaffective disorder, depressive type; **F06.1** catatonia associated with schizoaffective disorder.", "Rule out medical causes and **medication effects** first."] },
              { title: "Due to another medical condition", color: "case", points: ["**F06.1**; code the medical condition first: e.g., **K72.90** hepatic encephalopathy; **F06.1** catatonic disorder due to hepatic encephalopathy.", "Not better explained by another mental disorder (e.g., a manic episode); not only during **delirium**; causes distress or impairment."] },
              { title: "Unspecified", color: "hy", points: ["Catatonic symptoms causing distress or impairment when the **cause is unclear**, **full criteria are not met**, or information is insufficient (e.g., the **emergency room**).", "Code **R29.818** first, then **F06.1**."] }
            ] },
            { type: "defs", title: "Clinical picture (p. 135)", items: [
              ["Decreased activity", "Severe immobility (**stupor**) or moderate (**catalepsy**, **waxy flexibility**)."],
              ["Decreased engagement", "Severe (**mutism**) or moderate (**negativism**)."],
              ["Excessive or peculiar activity", "Complex (**stereotypy**) or simple (**agitation**), including echolalia and echopraxia."],
              ["Waxing and waning", "The same person may swing between decreased and excessive motor activity."],
              ["Why it is missed", "Opposite-looking features, variable presentations and teaching that **overemphasizes rare signs** such as waxy flexibility."],
              ["Dangers", "**Malnutrition, exhaustion, thromboembolism, pressure ulcers, muscle contractures, hyperpyrexia** and self-injury; severe stages need close supervision."]
            ] },
            { type: "defs", title: "How common", items: [
              ["Schizophrenia", "Catatonia occurs in **up to 35%** of people with schizophrenia (usually diagnosed in inpatients)."],
              ["Mood disorders", "Yet the **majority** of catatonia cases involve **depressive or bipolar disorders**, an association seen across cultures."],
              ["Clinical samples", "About **9%** of patients had catatonia in a meta-analysis."]
            ] },
            { type: "callout", kind: "caution", title: "Think NMS first in anyone on an antipsychotic", text: "Because of its serious complications, consider **G21.0 neuroleptic malignant syndrome** whenever catatonia appears in someone taking antipsychotics: catatonic-like features with **vital sign or laboratory abnormalities**. Abnormal postures may also be **neuroleptic-induced acute dystonia**. A separate catatonic disorder due to another medical condition is not diagnosed if catatonia occurs **only during a delirium or NMS** (though catatonic signs are common in delirium)." },
            { type: "list", title: "Medical causes of catatonia (p. 137)", items: [
              "**Neurological**: neoplasms, head trauma, cerebrovascular disease, **encephalitis**.",
              "**Metabolic**: **hypercalcemia**, **hepatic encephalopathy**, **homocystinuria**, **diabetic ketoacidosis**.",
              "Also named in the chapter introduction: **cerebral folate deficiency** and rare **autoimmune and paraneoplastic** disorders."
            ] },
            { type: "p", text: "Catatonic symptoms can appear in **five psychotic disorders** (brief psychotic, schizophreniform, schizophrenia, schizoaffective, substance/medication-induced), in some **neurodevelopmental** disorders, in **all bipolar and depressive disorders**, and in other mental disorders. Note what is missing from that list: **delusional disorder**, because catatonia plus delusions meets schizophrenia Criterion A." },
            { type: "case", title: "Clinical vignette: the silent patient on the medical ward", text: "A 45-year-old man admitted with severe depression has stopped speaking and eating for 3 days. He lies rigidly in one position, resists when the nurse tries to move his arm, and keeps a raised arm in the air for minutes after the examiner lets go. He is not taking any antipsychotic, is afebrile with normal vital signs and creatine kinase, and the metabolic and neurological workup is negative.", point: "Mutism, negativism, catalepsy and stupor (≥3 of 12) during a major depressive episode, with NMS and medical causes excluded: **major depressive disorder** coded first, then **F06.1 catatonia associated with major depressive disorder**." }
          ]
        }
      ]
    },
    {
      title: "Residual categories and putting it together",
      sections: [
        {
          id: "s2-other",
          title: "Other specified and unspecified psychotic disorders",
          pages: "138",
          blocks: [
            { type: "p", text: "Both categories are for psychotic presentations that cause clinically significant **distress or impairment** but **do not meet full criteria** for any disorder in the class. The difference is whether you **state the reason**." },
            { type: "compare", items: [
              { title: "Other specified (F28)", color: "mech", points: ["You **record the reason**: “other specified schizophrenia spectrum and other psychotic disorder (persistent auditory hallucinations).”"] },
              { title: "Unspecified (F29)", color: "hy", points: ["You **choose not to** state the reason, or there is **not enough information** (e.g., the emergency room)."] }
            ] },
            { type: "list", title: "The four examples of “other specified” (p. 138)", ordered: true, items: [
              "**Persistent auditory hallucinations** with no other features.",
              "**Delusions with significant overlapping mood episodes**: persistent delusions with mood episodes present for a **substantial portion** of the delusional disturbance, so delusional disorder’s “brief mood” rule fails.",
              "**Attenuated psychosis syndrome**: psychotic-like symptoms **below the threshold** for full psychosis: less severe, more transient, and with **insight relatively maintained**.",
              "**Delusional symptoms in the context of a relationship** with a person who has prominent delusions: the partner’s delusional material supplies the content of the same delusion in someone who may not otherwise meet criteria for a psychotic disorder (formerly called **shared psychotic disorder** or folie à deux)."
            ] },
            { type: "callout", kind: "exam", text: "Shared delusions (folie à deux) no longer have their own diagnosis; they are an **example under F28**. Attenuated psychosis syndrome is likewise an F28 example here, and is described more fully among the conditions for further study in Section III." }
          ]
        },
        {
          id: "s2-specifiers",
          title: "Specifiers across the chapter",
          pages: "105–138",
          blocks: [
            { type: "table", caption: "Which specifiers apply where", head: ["Diagnosis", "Type or feature", "Course (after 1 year)", "Catatonia (+F06.1)", "Severity 0–4"], rows: [
              ["Delusional disorder", "7 types; **with bizarre content**", "Yes", "**No** (catatonia rules it out)", "Yes"],
              ["Brief psychotic disorder", "With/without **marked stressor**; **peripartum onset**", "No", "Yes", "Yes"],
              ["Schizophreniform disorder", "With/without **good prognostic features**", "No", "Yes", "Yes"],
              ["Schizophrenia", "—", "Yes", "Yes", "Yes"],
              ["Schizoaffective disorder", "**Bipolar** or **depressive** type", "Yes", "Yes", "Yes"],
              ["Substance/medication-induced", "Onset during **intoxication**, **withdrawal** or **after medication use**", "No", "Catatonic signs can occur (p. 137); induced catatonic behavior **without** delusions or hallucinations → F28/F29", "Yes (no speech rating)"],
              ["Due to another medical condition", "**With delusions (F06.2)** or **with hallucinations (F06.0)**", "No", "Use catatonic disorder due to AMC", "Yes (no speech rating)"]
            ] },
            { type: "defs", title: "The course specifiers, defined (pp. 105, 114, 122)", items: [
              ["Acute episode", "A period in which the **symptom criteria are fulfilled**."],
              ["Partial remission", "Improvement after an episode is maintained, and criteria are **only partly** fulfilled."],
              ["Full remission", "**No disorder-specific symptoms** after an episode."],
              ["Multiple episodes", "At least **two** episodes: a first episode, a remission and **at least one relapse**."],
              ["Continuous", "Symptoms meeting criteria for **most of the course**, with only very brief subthreshold periods."],
              ["Unspecified", "None of the above can be determined."]
            ] },
            { type: "callout", kind: "exam", text: "Course specifiers are used **only after the disorder has lasted 1 year**, and only if they do not contradict the diagnostic course criteria. They apply to **delusional disorder, schizophrenia and schizoaffective disorder**: the three diagnoses that can last that long." }
          ]
        },
        {
          id: "s2-approach",
          title: "Putting it together: a diagnostic approach",
          pages: "101–138",
          blocks: [
            { type: "steps", title: "Work through a psychotic presentation in this order", items: [
              ["Is it really psychosis? ", "Rule out **culturally sanctioned** experiences, hypnagogic or hypnopompic phenomena, glossolalia or possession trance, and realistic fears after trauma."],
              ["Is there a cause? ", "**Delirium** (psychosis only during a delirium: no separate diagnosis); a **substance, medication or toxin** (timing; ~1 month persistence after cessation suggests independence); **another medical condition** (plausibility, temporality, typicality)."],
              ["Where are the mood episodes? ", "**Only during mood episodes** → mood disorder with psychotic features. **Concurrent, for the majority of the illness, plus ≥2 weeks of psychosis alone** → schizoaffective disorder. **Brief relative to the psychosis** → keep going."],
              ["Which domains? ", "**Delusions only** (no Criterion A ever) → delusional disorder. **≥2 domains including delusions, hallucinations or disorganized speech** → the schizophrenia family. **One domain, short** → consider brief psychotic disorder."],
              ["How long? ", "**≥1 day, <1 month** with full recovery → brief psychotic disorder. **≥1, <6 months** → schizophreniform (provisional if still ill). **≥6 months** with decline → schizophrenia."],
              ["Anything left? ", "Catatonia (≥3 of 12): add the **F06.1** specifier, or diagnose catatonic disorder due to AMC or unspecified catatonia. Subthreshold → **F28** (reason stated) or **F29**."]
            ] },
            { type: "ladder", title: "Time rules at a glance", ticks: [[0, "0"], [12, "1 day"], [26, "2 wk"], [38, "1 mo"], [72, "6 mo"], [92, "1 yr"]], rows: [
              { label: "Brief psychotic", dx: "brief-psychotic-disorder", from: 12, to: 38, color: "hy", span: "≥1 day, <1 month", note: "Then a full return to baseline" },
              { label: "Schizophreniform", dx: "schizophreniform-disorder", from: 38, to: 72, color: "drug", span: "≥1 month, <6 months", note: "“Provisional” while still ill" },
              { label: "Schizophrenia", dx: "schizophrenia", from: 72, to: 100, color: "mech", open: true, span: "≥6 months", note: "Including ≥1 month of active-phase symptoms" },
              { label: "Delusional disorder", dx: "delusional-disorder", from: 38, to: 100, color: "guide", open: true, span: "≥1 month", note: "Course specifiers only after 1 year" },
              { label: "Schizoaffective (psychosis alone)", dx: "schizoaffective-disorder", from: 26, to: 38, color: "case", span: "≥2 weeks without mood", note: "Plus mood episodes for the majority of the illness" }
            ], note: "Course specifiers (first/multiple episodes, remission, continuous) can be added only after 1 year." },
            { type: "callout", kind: "key", title: "Seven traps", text: "1) Two negative symptoms are **not** Criterion A. 2) Schizophreniform disorder needs **no functional decline**. 3) Schizoaffective depression needs **depressed mood**, not just anhedonia. 4) **Catatonia excludes delusional disorder**. 5) Hallucinations the person **knows** are drug-induced = intoxication/withdrawal **with perceptual disturbances**. 6) **Simple persecutory delusions in dementia** = major NCD with behavioral disturbance. 7) **Shared delusions** = F28, not a separate disorder." },
            { type: "p", text: "Practice the reasoning with the [[helper:psychosis|psychotic disorders helper]] and the [[helper:catatonia|catatonia helper]], then compare look-alikes side by side in the library, e.g. [[dx:schizophreniform-disorder|schizophreniform disorder]] against [[dx:schizophrenia|schizophrenia]]." }
          ]
        }
      ]
    }
  ]
});
