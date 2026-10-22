/* Chapter 18 study guide. Source: DSM-5-TR, Personality Disorders (pp. 733–778), with a short overview of the
   Section III Alternative DSM-5 Model for Personality Disorders (pp. 881–901).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording against the manual. */
SP.add("ch18", "guide", {
  intro: "A **personality disorder** is an enduring pattern of inner experience and behavior that **deviates markedly** from the expectations of the person’s culture, is **pervasive and inflexible**, begins by **adolescence or early adulthood**, is **stable** over time and causes **distress or impairment** (p. 733). DSM-5-TR keeps the familiar **10 categorical disorders** in three **clusters**: **A** odd or eccentric (paranoid, schizoid, schizotypal), **B** dramatic, emotional or erratic (antisocial, borderline, histrionic, narcissistic) and **C** anxious or fearful (avoidant, dependent, obsessive-compulsive), plus **personality change due to another medical condition** and the other specified and unspecified categories. Exams test three things above all: the **thresholds** (how many of how many), the **age rules** (antisocial needs age ≥18 and conduct disorder before 15; any personality disorder under 18 needs ≥1 year of features) and the **look-alike pairs** (borderline vs bipolar, avoidant vs schizoid, OCPD vs OCD). The [[helper:personality|personality helper]] and the [[helper:pdpair|look-alike helper]] walk you through the reasoning.",
  objectives: [
    "State the **general criteria** for personality disorder (A–F) and the rules for diagnosing it **before age 18**, during another disorder, and as “**premorbid**.”",
    "Name the **10 personality disorders**, their **clusters**, **codes** and **thresholds** (4 of 7, 5 of 9, 3 of 7 and so on).",
    "Diagnose **antisocial personality disorder** with its age and **conduct disorder** requirements, and separate it from adult antisocial behavior and substance-driven behavior.",
    "Recognize **borderline personality disorder**, its course (frequent remission), suicide risk, and how it differs from bipolar, depressive and other personality disorders.",
    "Separate the **look-alike pairs**: schizoid vs avoidant vs schizotypal; histrionic vs narcissistic vs borderline; dependent vs borderline; OCPD vs OCD and hoarding.",
    "Apply **personality change due to another medical condition** (F07.0) and its subtypes.",
    "Outline the **Alternative DSM-5 Model** (Section III): level of personality functioning and five trait domains.",
    "Account for **culture** and **gender bias** when judging personality traits."
  ],
  parts: [
    {
      title: "General personality disorder",
      sections: [
        {
          id: "s18-map",
          title: "How the chapter is built",
          pages: "733–734",
          blocks: [
            { type: "table", caption: "Personality disorders in DSM-5-TR (codes and thresholds)", head: ["Disorder", "Code", "Core pattern", "Threshold"], rows: [
              ["**Cluster A: odd or eccentric**", "", "", ""],
              ["[[dx:paranoid-pd|Paranoid]]", "F60.0", "Distrust; others’ motives seen as malevolent", "4 of 7"],
              ["[[dx:schizoid-pd|Schizoid]]", "F60.1", "Detachment; restricted emotional expression", "4 of 7"],
              ["[[dx:schizotypal-pd|Schizotypal]]", "F21", "Discomfort in close relationships, cognitive-perceptual distortions, eccentricity", "5 of 9"],
              ["**Cluster B: dramatic, emotional or erratic**", "", "", ""],
              ["[[dx:antisocial-pd|Antisocial]]", "F60.2", "Disregard for and violation of others’ rights", "3 of 7 + age ≥18 + conduct disorder before 15"],
              ["[[dx:borderline-pd|Borderline]]", "F60.3", "Instability of relationships, self-image and affect; impulsivity", "5 of 9"],
              ["[[dx:histrionic-pd|Histrionic]]", "F60.4", "Excessive emotionality and attention seeking", "5 of 8"],
              ["[[dx:narcissistic-pd|Narcissistic]]", "F60.81", "Grandiosity, need for admiration, lack of empathy", "5 of 9"],
              ["**Cluster C: anxious or fearful**", "", "", ""],
              ["[[dx:avoidant-pd|Avoidant]]", "F60.6", "Social inhibition, inadequacy, hypersensitivity to negative evaluation", "4 of 7"],
              ["[[dx:dependent-pd|Dependent]]", "F60.7", "Need to be taken care of; submissive, clinging", "5 of 8"],
              ["[[dx:ocpd|Obsessive-compulsive]]", "F60.5", "Orderliness, perfectionism, control", "4 of 8"],
              ["**Other**", "", "", ""],
              ["[[dx:personality-change-amc|Personality change due to another medical condition]]", "F07.0", "A change from previous personality caused by a medical condition", "Criteria A–E"],
              ["[[dx:other-specified-pd|Other specified]]", "F60.89", "E.g., mixed personality features", "—"],
              ["[[dx:unspecified-pd|Unspecified]]", "F60.9", "Reason not given or insufficient information", "—"]
            ] },
            { type: "callout", kind: "mnemonic", title: "Clusters: weird, wild, worried", text: "**A** = **weird** (odd, eccentric; related to the psychotic spectrum). **B** = **wild** (dramatic, emotional, erratic). **C** = **worried** (anxious, fearful)." },
            { type: "defs", title: "About the clusters (p. 734)", items: [
              ["Use", "Useful for teaching and some research, but the clustering has **serious limitations** and has not been consistently validated."],
              ["Overlap", "Disorders from **different clusters** often co-occur; when criteria for more than one are met, **all are diagnosed**."],
              ["Prevalence (median across countries)", "Cluster A **3.6%**, Cluster B **4.5%**, Cluster C **2.8%**, **any personality disorder 10.5%**."],
              ["Two models", "Section II keeps the categorical criteria carried over from DSM-IV; **Section III** offers the dimensional **Alternative DSM-5 Model**."]
            ] }
          ]
        },
        {
          id: "s18-general",
          title: "General criteria, assessment and course",
          pages: "734–736",
          blocks: [
            { type: "criteria", title: "General personality disorder", code: "No code (applies to all)", pages: "734–735", items: [
              ["A", "An enduring pattern of inner experience and behavior that **deviates markedly** from cultural expectations, in **two or more** of:", ["**Cognition** (perceiving and interpreting self, others, events).", "**Affectivity** (range, intensity, lability, appropriateness of emotion).", "**Interpersonal functioning.**", "**Impulse control.**"]],
              ["B", "**Inflexible and pervasive** across a broad range of personal and social situations."],
              ["C", "Clinically significant **distress or impairment**."],
              ["D", "**Stable** and of long duration; onset traceable to at least **adolescence or early adulthood**."],
              ["E", "Not better explained by **another mental disorder**."],
              ["F", "Not attributable to a **substance** or **another medical condition** (e.g., head trauma)."]
            ] },
            { type: "callout", kind: "mnemonic", title: "Four areas of Criterion A: CAPI", text: "**C**ognition, **A**ffectivity, **P**eople (interpersonal functioning), **I**mpulse control. Two or more are required." },
            { type: "defs", title: "Assessment (pp. 735–736)", items: [
              ["Traits vs disorder", "Personality **traits** become a disorder only when **inflexible, maladaptive** and cause impairment or distress."],
              ["Long-term view", "Assess the **long-term** pattern; distinguish traits from transient states (mood or anxiety episodes, intoxication)."],
              ["More than one interview", "One interview is sometimes enough, but repeated interviews **spaced over time** are often needed."],
              ["Ego-syntonic traits", "The person may not see the traits as a problem, so **informants** help."]
            ] },
            { type: "table", caption: "Age and course rules (pp. 735–736)", head: ["Rule", "Detail"], rows: [
              ["Usual onset", "Recognizable in **adolescence or early adulthood**"],
              ["Under 18", "Allowed in unusual cases when traits are pervasive, persistent and not limited to a developmental stage; features present **at least 1 year**"],
              ["The exception", "**Antisocial personality disorder cannot be diagnosed under 18**"],
              ["Change with age", "**Antisocial and borderline** become less evident or remit with age; **obsessive-compulsive and schizotypal** less so"],
              ["Late onset", "A personality change in **middle or later life** calls for a search for a **medical condition** or an unrecognized **substance use disorder**"],
              ["Exacerbation", "Loss of a supporting person (spouse) or stabilizing situation (job) can unmask or worsen a disorder"]
            ] },
            { type: "callout", kind: "culture", title: "Culture and gender (p. 736)", text: "Do not confuse personality disorder with **acculturation** problems or with customs, religious or political values. Rigid-looking patterns may be **adaptive responses** to cultural constraints (relying on an abusive partner where divorce is forbidden is not necessarily dependency; risky political protest is not necessarily callousness). Consider clinician bias, instruments not normed for the person’s group, and **poverty, racism and discrimination**. **Antisocial** is diagnosed more in men; **borderline, histrionic and dependent** more in women (for borderline, possibly because women seek help more). Avoid over- or underdiagnosis based on gender stereotypes." }
          ]
        },
        {
          id: "s18-general-ddx",
          title: "General differential: when not to diagnose a personality disorder",
          pages: "736–737",
          blocks: [
            { type: "table", caption: "General differential (pp. 736–737)", head: ["Situation", "Rule"], rows: [
              ["Another mental disorder", "Diagnose a personality disorder only if features began **before early adulthood**, are typical of **long-term** functioning, and do **not occur only during an episode** of another disorder"],
              ["Spectrum relationships", "Schizotypal ↔ **schizophrenia**; avoidant ↔ **social anxiety disorder**. Early-onset persistent disorders (persistent depressive disorder) can be hard and not useful to separate"],
              ["Psychotic disorders", "Paranoid, schizoid and schizotypal exclude patterns occurring **only** during psychosis. If the personality disorder preceded schizophrenia, record it with “**(premorbid)**”"],
              ["Depressive and anxiety episodes", "Be **cautious** diagnosing personality disorder during an episode: symptoms mimic traits and distort recall"],
              ["PTSD", "Personality changes that **emerge after extreme stress** suggest PTSD"],
              ["Substance use disorders", "Do not diagnose from behavior caused by intoxication, withdrawal or **sustaining use** (e.g., stealing for drugs)"],
              ["Medical condition", "Enduring changes caused physiologically by a medical condition → **personality change due to another medical condition**"],
              ["Traits", "Traits below threshold are not a disorder; only when inflexible, maladaptive, persisting and impairing"]
            ] },
            { type: "callout", kind: "exam", text: "Three classic stems: **(1)** a woman during a severe depressive episode seems dependent and clingy → do **not** diagnose dependent personality disorder from the cross-section; **(2)** a 50-year-old with new disinhibition → look for a **frontal lesion** or substance, not a personality disorder; **(3)** a man with schizophrenia who was suspicious and isolated since adolescence → “paranoid personality disorder **(premorbid)**.”" }
          ]
        }
      ]
    },
    {
      title: "Cluster A: odd or eccentric",
      sections: [
        {
          id: "s18-paranoid",
          title: "Paranoid personality disorder",
          pages: "737–741",
          blocks: [
            { type: "criteria", title: "Paranoid personality disorder in brief", code: "F60.0", pages: "737–738", items: [
              ["A", "Pervasive **distrust and suspiciousness**, others’ motives interpreted as **malevolent**, from early adulthood, in a variety of contexts, with **four or more** of:", [
                "**Suspects** without basis that others are exploiting, harming or deceiving.",
                "Preoccupied with unjustified doubts about **loyalty** of friends or associates.",
                "Reluctant to **confide** for fear information will be used against them.",
                "Reads **hidden demeaning or threatening meanings** into benign remarks.",
                "Persistently bears **grudges**.",
                "Perceives **attacks on character** not apparent to others; quick to counterattack.",
                "Recurrent unjustified suspicions about **fidelity** of partner."
              ]],
              ["B", "Not exclusively during schizophrenia, a bipolar or depressive disorder with psychotic features or another psychotic disorder, and not due to a medical condition (e.g., temporal lobe epilepsy)."]
            ], note: "If criteria were met before schizophrenia, add “(premorbid).”" },
            { type: "defs", title: "Features and epidemiology (pp. 738–740)", items: [
              ["Style", "Argumentative, complaining or hostile aloofness; rigid, critical, need for **control**; **litigious**; attuned to power and rank; may form groups with shared paranoid beliefs."],
              ["Prevalence", "NCS-R 2.3%, NESARC 4.4%, **median 3.2%**; up to **23%** in forensic settings."],
              ["Development", "Childhood solitariness, poor peer relations, social anxiety, hypersensitivity; adolescent onset linked to **maltreatment**."],
              ["Risk", "**Childhood trauma**; social stressors (inequality, marginalization, **racism**); familial link to schizophrenia and especially **delusional disorder, persecutory type**."],
              ["Sex", "Mixed findings: more in men in a meta-analysis, more in women in NESARC."],
              ["Comorbidity", "Brief psychotic episodes (minutes to hours) under stress; may precede delusional disorder or schizophrenia; MDD, agoraphobia, OCD, substance use; schizotypal, schizoid, narcissistic, avoidant and borderline PD."]
            ] },
            { type: "callout", kind: "culture", title: "Mistrust that is not paranoia", text: "Migrants, members of **oppressed or racialized groups**, and people facing discrimination may be guarded or defensive in response to real hostility, language barriers or unfamiliar rules. A **vicious cycle of mutual mistrust** with clinicians should not be mistaken for paranoid personality disorder (p. 740)." },
            { type: "table", caption: "Differential diagnosis (pp. 740–741)", head: ["Condition", "How it differs"], rows: [
              ["[[dx:delusional-disorder|Delusional disorder]], [[dx:schizophrenia|schizophrenia]], mood disorder with psychosis", "**Persistent psychotic symptoms**; paranoid PD is added only if it preceded the psychosis and persists in remission"],
              ["[[dx:schizotypal-pd|Schizotypal PD]]", "Also has magical thinking, unusual perceptions, odd thinking and speech"],
              ["[[dx:schizoid-pd|Schizoid PD]]", "Cold and aloof but **no prominent paranoid ideation**"],
              ["[[dx:borderline-pd|Borderline]] and [[dx:histrionic-pd|histrionic PD]]", "Anger at minor stimuli but not pervasive suspiciousness; borderline is more impulsive and self-destructive"],
              ["[[dx:avoidant-pd|Avoidant PD]]", "Reluctant to confide from fear of **embarrassment**, not malice"],
              ["[[dx:antisocial-pd|Antisocial PD]]", "Antisocial acts for **gain**; in paranoid PD more often for **revenge**"],
              ["[[dx:narcissistic-pd|Narcissistic PD]]", "Suspiciousness from fear of **flaws being revealed**"],
              ["Physical handicaps", "Paranoid traits with **hearing impairment** and other handicaps"],
              ["Adaptive traits", "Paranoid traits can be adaptive in threatening environments"]
            ] }
          ]
        },
        {
          id: "s18-schizoid",
          title: "Schizoid personality disorder",
          pages: "741–744",
          blocks: [
            { type: "criteria", title: "Schizoid personality disorder in brief", code: "F60.1", pages: "741–742", items: [
              ["A", "Pervasive **detachment** from social relationships and **restricted emotional expression**, from early adulthood, with **four or more** of:", [
                "Neither **desires nor enjoys** close relationships, including family.",
                "Almost always chooses **solitary** activities.",
                "Little if any interest in **sexual** experiences with another person.",
                "Takes pleasure in **few, if any, activities**.",
                "Lacks **close friends** other than first-degree relatives.",
                "Appears **indifferent to praise or criticism**.",
                "Emotional **coldness**, detachment or flattened affect."
              ]],
              ["B", "Not exclusively during schizophrenia, a mood disorder with psychotic features, another psychotic disorder or **autism spectrum disorder**, and not due to a medical condition."]
            ], note: "If criteria were met before schizophrenia, add “(premorbid).”" },
            { type: "defs", title: "Features and epidemiology (pp. 742–743)", items: [
              ["Style", "“Loner”; prefers mechanical or abstract tasks; difficulty expressing anger; drifts in goals; may do well in **socially isolated work**."],
              ["Prevalence", "NCS-R 4.9%, NESARC 3.1%, **median 1.3%**; uncommon in clinical settings."],
              ["Risk", "More prevalent in relatives of people with **schizophrenia or schizotypal PD**."],
              ["Culture", "Rural-to-urban migrants may show “**emotional freezing**” for months; immigrants may seem cold in response to ostracism."],
              ["Comorbidity", "Very brief psychotic episodes under stress; may precede delusional disorder or schizophrenia; MDD; most often schizotypal, paranoid and avoidant PD."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 743–744)", head: ["Condition", "How it differs"], rows: [
              ["Psychotic disorders", "Persistent psychosis; schizoid PD added only if premorbid and persistent"],
              ["Autism spectrum disorder", "Very hard to separate in mild forms; ASD has **stereotyped behaviors and interests**"],
              ["[[dx:schizotypal-pd|Schizotypal PD]]", "Cognitive and perceptual **distortions**"],
              ["[[dx:paranoid-pd|Paranoid PD]]", "**Suspiciousness** and paranoid ideation"],
              ["[[dx:avoidant-pd|Avoidant PD]]", "Isolation from **fear of rejection**, with a wish for relationships"],
              ["[[dx:ocpd|OCPD]]", "Detachment from devotion to work and discomfort with emotion, but an underlying **capacity for intimacy**"],
              ["Introversion", "“Loners” become schizoid PD only when traits are inflexible, maladaptive and impairing"]
            ] }
          ]
        },
        {
          id: "s18-schizotypal",
          title: "Schizotypal personality disorder",
          pages: "744–748",
          blocks: [
            { type: "criteria", title: "Schizotypal personality disorder in brief", code: "F21", pages: "744–745", items: [
              ["A", "Pervasive social and interpersonal deficits with **acute discomfort** in close relationships, **cognitive or perceptual distortions** and **eccentricity**, from early adulthood, with **five or more** of:", [
                "**Ideas of reference** (not delusions of reference).",
                "**Odd beliefs or magical thinking** inconsistent with subcultural norms (clairvoyance, telepathy, sixth sense).",
                "**Unusual perceptual experiences**, including bodily illusions.",
                "**Odd thinking and speech** (vague, circumstantial, metaphorical, overelaborate, stereotyped).",
                "**Suspiciousness** or paranoid ideation.",
                "**Inappropriate or constricted affect.**",
                "**Odd, eccentric or peculiar** behavior or appearance.",
                "Lack of **close friends** other than first-degree relatives.",
                "**Excessive social anxiety** that does not lessen with familiarity, tied to **paranoid fears** rather than negative self-judgment."
              ]],
              ["B", "Not exclusively during schizophrenia, a mood disorder with psychotic features, another psychotic disorder or autism spectrum disorder."]
            ], note: "Also listed in the schizophrenia spectrum chapter. If criteria were met before schizophrenia, add “(premorbid).”" },
            { type: "defs", title: "Features and epidemiology (pp. 745–747)", items: [
              ["Examples", "Magical control (walking past an object three times to prevent harm); sensing a presence or hearing a voice murmur one’s name; speech loose and vague but **without derailment**."],
              ["At a party", "Becomes **more tense and suspicious** as the evening goes on, not more relaxed."],
              ["Help seeking", "Usually for **anxiety or depression**, not the personality features."],
              ["Prevalence", "NCS-R 3.3%, NESARC 3.9%, **median 0.6%**; slightly more in **men**."],
              ["Course", "**Relatively stable**; only a **small proportion** develop schizophrenia or another psychotic disorder."],
              ["Genetics", "More common in first-degree relatives of people with **schizophrenia**; shared genetic risk variants."],
              ["Culture", "Speaking in tongues, voodoo, shamanism, evil eye and similar beliefs can look schizotypal to an uninformed clinician."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 747–748)", head: ["Condition", "How it differs"], rows: [
              ["Psychotic disorders", "Persistent psychosis; transient psychotic episodes (minutes to hours) in schizotypal PD usually do not warrant another diagnosis"],
              ["Autism and communication disorders", "Even less social awareness and reciprocity, stereotyped interests; primary language impairment"],
              ["[[dx:paranoid-pd|Paranoid]] and [[dx:schizoid-pd|schizoid PD]]", "No cognitive or perceptual distortions or marked oddness"],
              ["[[dx:avoidant-pd|Avoidant PD]]", "Active **desire** for relationships constrained by fear of rejection"],
              ["[[dx:borderline-pd|Borderline PD]]", "Psychotic-like symptoms are **transient, affect-linked and dissociative**; isolation follows angry ruptures; impulsive and manipulative behavior"],
              ["Adolescence", "Schizotypal features may reflect **transient turmoil**"]
            ] },
            { type: "compare", title: "Cluster A in one look", items: [
              { title: "Paranoid", color: "clin", points: ["**Suspicious**: others mean harm.", "Grudges, counterattacks, jealousy.", "No perceptual oddness."] },
              { title: "Schizoid", color: "drug", points: ["**Indifferent**: no wish for closeness.", "Cold, solitary, few pleasures.", "No suspiciousness or oddness."] },
              { title: "Schizotypal", color: "case", points: ["**Odd**: magical thinking, ideas of reference, perceptual oddities.", "Social anxiety driven by suspicion.", "Closest to schizophrenia."] }
            ] }
          ]
        }
      ]
    },
    {
      title: "Cluster B: dramatic, emotional or erratic",
      sections: [
        {
          id: "s18-antisocial",
          title: "Antisocial personality disorder",
          pages: "748–752",
          blocks: [
            { type: "criteria", title: "Antisocial personality disorder in brief", code: "F60.2", pages: "748", items: [
              ["A", "Pervasive **disregard for and violation of the rights of others**, occurring **since age 15**, with **three or more** of:", [
                "**Failure to conform** to lawful norms: repeated acts that are grounds for arrest.",
                "**Deceitfulness**: lying, aliases, conning for profit or pleasure.",
                "**Impulsivity** or failure to plan ahead.",
                "**Irritability and aggressiveness**: repeated fights or assaults.",
                "**Reckless disregard** for safety of self or others.",
                "Consistent **irresponsibility**: work or financial obligations.",
                "**Lack of remorse**: indifferent to or rationalizing harm."
              ]],
              ["B", "At least **age 18**."],
              ["C", "Evidence of **conduct disorder with onset before age 15**."],
              ["D", "Not exclusively during **schizophrenia or bipolar disorder**."]
            ] },
            { type: "callout", kind: "mnemonic", title: "CORRUPT (the seven A items)", text: "**C**annot conform to law · **O**bligations ignored (irresponsible) · **R**eckless disregard for safety · **R**emorseless · **U**nderhanded (deceitful) · **P**lanning failure (impulsive) · **T**emper (irritable, aggressive). Three or more, since age 15." },
            { type: "defs", title: "Features and epidemiology (pp. 748–751)", items: [
              ["Also called", "**Psychopathy**, sociopathy, dyssocial personality disorder. Use **collateral information** because deceit is central."],
              ["Psychopathy features", "Lack of empathy, inflated self-appraisal, **glib superficial charm**: may best predict **recidivism** in forensic settings."],
              ["Prevalence", "NCS-R 0.6%, NESARC 3.6%, **median 3.6%**; **>70%** in men with the most severe alcohol use disorders and in prisons, forensic and substance clinics."],
              ["Sex", "About **3 times** more common in men; women more often have abuse histories and comorbid mood and anxiety disorders; may be **underdiagnosed in women** because conduct disorder criteria emphasize aggression."],
              ["Course", "Chronic, but becomes less evident or **remits with age, often by 40**, especially criminal behavior."],
              ["Risk", "Child abuse or neglect, erratic parenting and inconsistent discipline turn conduct disorder into antisocial PD; **childhood-onset conduct disorder (before 10)** with **ADHD** raises the risk."],
              ["Family", "Relatives have more antisocial PD and substance use (men) and somatization (women)."],
              ["Mortality", "More premature death from **natural causes and suicide**."]
            ] },
            { type: "callout", kind: "culture", title: "Context matters", text: "Associated with low socioeconomic status and urban settings, but antisocial-looking behavior can be a **survival strategy** (e.g., youth gangs amid violence and discrimination). People from oppressed groups are at risk of **overdiagnosis** because they are more often misdiagnosed with conduct disorder in adolescence (pp. 750–751)." },
            { type: "table", caption: "Differential diagnosis (pp. 751–752)", head: ["Condition", "How it differs"], rows: [
              ["Conduct disorder", "Diagnosed after 18 only if antisocial PD criteria are **not** met"],
              ["Substance use disorders", "Antisocial PD only if antisocial signs began in **childhood** and continued; diagnose both if both began in childhood"],
              ["[[dx:schizophrenia|Schizophrenia]] and [[dx:bipolar-i|bipolar disorder]]", "Antisocial behavior **only during** episodes is not antisocial PD"],
              ["[[dx:narcissistic-pd|Narcissistic PD]]", "Lacks impulsivity, aggression and deceit; needs admiration; usually no conduct disorder history"],
              ["[[dx:histrionic-pd|Histrionic PD]]", "More exaggerated emotions; no characteristic antisocial behavior; manipulates for **nurturance**"],
              ["[[dx:borderline-pd|Borderline PD]]", "Manipulates for **nurturance**; more emotionally unstable, less aggressive"],
              ["[[dx:paranoid-pd|Paranoid PD]]", "Antisocial acts for **revenge**, not gain"],
              ["**Adult antisocial behavior** (Z72.811)", "Criminal behavior for gain **without** the personality features"]
            ] },
            { type: "p", text: "**Comorbidity**: dysphoria, boredom intolerance, anxiety and mood disorders, **substance use disorders**, somatic symptom disorder, **gambling disorder**; borderline, histrionic and narcissistic PD." }
          ]
        },
        {
          id: "s18-borderline",
          title: "Borderline personality disorder: criteria and features",
          pages: "752–754",
          blocks: [
            { type: "criteria", title: "Borderline personality disorder in brief", code: "F60.3", pages: "752–753", items: [
              ["", "Pervasive **instability of relationships, self-image and affects**, and marked **impulsivity**, from early adulthood, with **five or more** of:", [
                "**Frantic efforts to avoid abandonment**, real or imagined (not counting suicidal or self-mutilating behavior).",
                "**Unstable, intense relationships** alternating between **idealization and devaluation**.",
                "**Identity disturbance**: markedly and persistently unstable self-image.",
                "**Impulsivity in at least two** self-damaging areas (spending, sex, substances, reckless driving, binge eating), not counting self-harm.",
                "Recurrent **suicidal behavior, gestures, threats or self-mutilation**.",
                "**Affective instability** from marked mood reactivity, usually **hours**, rarely more than a few days.",
                "Chronic feelings of **emptiness**.",
                "Inappropriate, intense **anger** or difficulty controlling it.",
                "Transient, stress-related **paranoid ideation or severe dissociative** symptoms."
              ]]
            ] },
            { type: "callout", kind: "mnemonic", title: "IMPULSIVE (the nine criteria)", text: "**I**dentity disturbance · **M**ood instability (hours) · **P**aranoia or dissociation under stress · **U**nstable relationships · **L**onely, empty · **S**uicidal or self-harm · **I**mpulsivity in two areas · **V**ery angry · **E**fforts to avoid abandonment. Five or more." },
            { type: "defs", title: "Reading the criteria (pp. 753–754)", items: [
              ["Abandonment", "Panic or fury when someone is a few minutes late or a session ends; linked to intolerance of being alone."],
              ["Splitting", "Idealizes a new partner or clinician, then **devalues** them as uncaring or absent."],
              ["Identity", "Sudden shifts in self-image (needy supplicant ↔ righteous avenger); a self-image of being **bad or evil**; at times feeling one does not exist."],
              ["Self-harm", "Cutting or burning, often during **dissociation**, brings relief by reaffirming the ability to feel or expiating badness; usually triggered by **separation or rejection**."],
              ["Affect", "Basic dysphoria broken by anger, panic or despair, **rarely** by well-being."],
              ["Psychotic-like", "Transient (minutes to hours), triggered by real or imagined **abandonment**; may remit when nurturance returns."],
              ["Self-undermining", "Drops out just before graduation, regresses after a good session, ends a relationship that could last."],
              ["Other", "**Transitional objects** (a pet or possession) may feel safer than people. Childhood abuse, neglect, conflict and early parental loss are more common."]
            ] }
          ]
        },
        {
          id: "s18-borderline-course",
          title: "Borderline personality disorder: course, suicide and differential",
          pages: "754–757",
          blocks: [
            { type: "table", caption: "Epidemiology and course (pp. 754–756)", head: ["Topic", "Detail"], rows: [
              ["Community prevalence", "NCS-R 1.4%, NESARC 5.9%, **median 2.7%**"],
              ["Clinical settings", "About **6%** primary care, **10%** mental health outpatients, **20%** psychiatric inpatients"],
              ["Onset", "Full criteria can be met at **age 12–13** in treatment settings"],
              ["Remission", "Stable remissions are **very common**; **impulsive** symptoms remit fastest, **affective** symptoms slowest"],
              ["Recovery", "Remission **plus** good psychosocial functioning is harder and less stable; worse with disability benefits and poor physical health"],
              ["Family", "About **5 times** more common in first-degree relatives; also familial substance use, anxiety, antisocial PD, mood disorders"],
              ["Abuse", "Childhood abuse and neglect common; sexual abuse is **neither necessary nor sufficient** and relates as much to severity"],
              ["Sex", "More women in **clinical** samples; **no difference** in community samples"],
              ["Suicide", "About **6%** died by suicide over 24 years in an inpatient cohort (vs 1.4% in other PDs); attempts fell from **79% to 13%** over 10 years. Deaths from accidents and illness are **more than twice** as common as suicide"]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 756–757)", head: ["Condition", "How it differs"], rows: [
              ["[[dx:mdd|Depressive]] and [[dx:bipolar-ii|bipolar disorders]]", "Often co-occur; **diagnose both** when both are met, but do not diagnose borderline from a **cross-sectional** picture during an episode"],
              ["[[dx:separation-anxiety|Separation anxiety disorder]] (adult)", "Fear of abandonment without central problems of identity, self-direction and impulsivity"],
              ["[[dx:histrionic-pd|Histrionic PD]]", "Attention seeking and shifting emotions, but **no self-destructiveness**, angry ruptures or deep emptiness"],
              ["[[dx:schizotypal-pd|Schizotypal PD]]", "Enduring psychotic-like symptoms less tied to affect"],
              ["[[dx:paranoid-pd|Paranoid]] and [[dx:narcissistic-pd|narcissistic PD]]", "Stable self-image; little self-destructiveness, impulsivity or abandonment fear"],
              ["[[dx:antisocial-pd|Antisocial PD]]", "Manipulates for **profit or power**; borderline for **concern of caretakers**"],
              ["[[dx:dependent-pd|Dependent PD]]", "Reacts to abandonment with **appeasement** and seeks a replacement; borderline with **rage, emptiness and demands**"],
              ["Identity problem", "A developmental **identity problem** in adolescence (especially with substance use) is not a mental disorder"],
              ["Medical condition or substances", "Personality change due to AMC; symptoms of persistent substance use"]
            ] },
            { type: "p", text: "**Comorbidity** (p. 757): depressive and bipolar disorders, substance use, anxiety (especially **panic** and **social anxiety**), eating disorders (**bulimia**, **binge eating**), **PTSD**, **ADHD** and other personality disorders." },
            { type: "case", title: "Clinical vignette: the 9-minute wait", text: "A 24-year-old woman storms out of her session when her therapist is 9 minutes late, texts that she will kill herself, then apologizes tearfully an hour later. She has had five intense relationships in two years that began with “finding my soulmate” and ended in rage. She binge drinks and spends impulsively, cuts her thighs when she feels “nothing,” and describes herself as a different person depending on whom she is with. Her moods swing within hours; she has never had days of elevated mood or decreased need for sleep.", point: "Abandonment fear, idealization–devaluation, identity disturbance, impulsivity in two areas, self-harm and suicidal threats, hours-long reactivity, emptiness: well over five of nine since early adulthood → **F60.3 borderline personality disorder**. No hypomanic episodes, so not bipolar." }
          ]
        },
        {
          id: "s18-histrionic",
          title: "Histrionic personality disorder",
          pages: "757–760",
          blocks: [
            { type: "criteria", title: "Histrionic personality disorder in brief", code: "F60.4", pages: "757", items: [
              ["", "Pervasive **excessive emotionality and attention seeking**, from early adulthood, with **five or more** of:", [
                "Uncomfortable when **not the center of attention**.",
                "Inappropriately **sexually seductive or provocative**.",
                "**Rapidly shifting, shallow** emotions.",
                "Uses **physical appearance** to draw attention.",
                "Speech **impressionistic and lacking in detail**.",
                "**Self-dramatization**, theatricality, exaggerated emotion.",
                "**Suggestible.**",
                "Considers relationships **more intimate** than they are."
              ]]
            ] },
            { type: "callout", kind: "mnemonic", title: "PRAISE ME (the eight criteria)", text: "**P**rovocative or seductive · **R**elationships seen as closer than they are · **A**ttention needed (center stage) · **I**nfluenced easily (suggestible) · **S**peech impressionistic · **E**motions shallow, rapidly shifting · **M**akes a show (theatrical) · **E**ye-catching appearance. Five or more." },
            { type: "defs", title: "Features and epidemiology (pp. 758–759)", items: [
              ["With clinicians", "Flattery, gifts, dramatic descriptions with **new symptoms each visit**; calls a doctor seen once by first name."],
              ["Speech", "Strong opinions with flair but **no supporting detail** (“a wonderful human being,” without examples)."],
              ["Impairment", "Generally **lower** than in many other PDs; mainly **interpersonal** and romantic (more divorce or never marrying)."],
              ["Style", "Social **dominance** ranging from warm and intrusive to cold and controlling; craves novelty; poor tolerance of delayed gratification."],
              ["Prevalence", "NCS-R **0.0%**, NESARC 1.8%, **median 0.9%**."],
              ["Sex", "Diagnosed more in women clinically, but in proportion to women in those settings; structured studies show **similar** rates."],
              ["Suicide", "Risk unknown; clinically, increased suicidal **gestures and threats**."],
              ["Comorbidity", "Borderline, narcissistic, paranoid, dependent, antisocial PD; substance use; **somatic symptom** and **functional neurological** disorders; MDD."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 759–760)", head: ["Condition", "How it differs"], rows: [
              ["[[dx:borderline-pd|Borderline PD]]", "Adds self-destructiveness, angry ruptures, emptiness and identity disturbance"],
              ["[[dx:antisocial-pd|Antisocial PD]]", "Shares impulsivity and seductiveness; histrionic manipulates for **nurturance**, antisocial for **gain**"],
              ["[[dx:narcissistic-pd|Narcissistic PD]]", "Wants praise for **superiority**; histrionic will appear **fragile or dependent** to get attention; narcissistic stresses friends’ **VIP** status"],
              ["[[dx:dependent-pd|Dependent PD]]", "Dependent on others for praise and guidance but **without flamboyance**"]
            ] }
          ]
        },
        {
          id: "s18-narcissistic",
          title: "Narcissistic personality disorder",
          pages: "760–764",
          blocks: [
            { type: "criteria", title: "Narcissistic personality disorder in brief", code: "F60.81", pages: "760", items: [
              ["", "Pervasive **grandiosity** (fantasy or behavior), **need for admiration** and **lack of empathy**, from early adulthood, with **five or more** of:", [
                "**Grandiose** sense of self-importance.",
                "Preoccupied with **fantasies** of unlimited success, power, brilliance, beauty or ideal love.",
                "Believes they are **special**; associates only with high-status people or institutions.",
                "Requires **excessive admiration**.",
                "Sense of **entitlement**.",
                "Interpersonally **exploitative**.",
                "Lacks **empathy**.",
                "**Envious** of others or believes others envy them.",
                "**Arrogant, haughty** behavior or attitudes."
              ]]
            ] },
            { type: "callout", kind: "mnemonic", title: "SPECIAL ME (the nine criteria)", text: "**S**pecial and unique · **P**reoccupied with fantasies · **E**ntitled · **C**an’t empathize · **I**nterpersonally exploitative · **A**rrogant · **L**ooks for admiration · **M**y importance is grandiose · **E**nvious. Five or more." },
            { type: "defs", title: "Features and epidemiology (pp. 761–763)", items: [
              ["Fragile self-esteem", "**Very fragile** self-esteem beneath grandiosity; criticism brings shame and humiliation, with rage, counterattack, or **withdrawal** and apparent humility masking grandiosity."],
              ["Empathy", "Some **cognitive** empathy, but little **emotional** empathy."],
              ["Functioning", "Ranges from high-achieving to very low vocational functioning from fear of failure."],
              ["Vulnerability", "Shame, envy, insecurity and perfectionism can bring depression and emptiness."],
              ["Prevalence", "NCS-R **0.0%**, NESARC 6.2%, **median 1.6%**; **50%–75%** of those diagnosed are men."],
              ["Course", "Narcissistic traits are common in **adolescents** without predicting the disorder; may present after **crises** (bankruptcy, demotion, divorce) or with aging; durable relationships and real achievements can be corrective."],
              ["Suicide", "Attempts tend to be **less impulsive** and of **higher lethality** than in other PDs, often after failure or exposure of imperfection."],
              ["Comorbidity", "PDD, MDD, **anorexia nervosa**, substance use (especially **cocaine**); histrionic, borderline, antisocial, paranoid PD."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 763–764)", head: ["Condition", "How it differs"], rows: [
              ["[[dx:histrionic-pd|Histrionic]], [[dx:antisocial-pd|antisocial]], [[dx:borderline-pd|borderline PD]]", "Interactive styles are **coquettish, callous and needy**; **grandiosity** marks narcissistic PD. Borderline is less stable in self-image and more impulsive and self-destructive"],
              ["[[dx:ocpd|OCPD]]", "Perfectionism about **order and rules**, usually self-critical; narcissistic believes they have **achieved** perfection"],
              ["Schizotypal, avoidant, paranoid PD", "Suspiciousness and withdrawal in narcissistic PD come from **shame and fear of flaws** being exposed"],
              ["[[dx:bipolar-i|Mania or hypomania]]", "Grandiosity with **mood change** and episodic course"],
              ["[[dx:pdd|Persistent depressive disorder]]", "Shame and inferiority can resemble PDD; diagnose both if both are met"]
            ] }
          ]
        },
        {
          id: "s18-clusterb-compare",
          title: "Telling Cluster B apart",
          pages: "751–764",
          blocks: [
            { type: "table", caption: "What each wants, and how they act", head: ["Disorder", "Goal of the behavior", "Style", "Key discriminator"], rows: [
              ["Antisocial", "**Profit, power**, material gain", "Callous, deceitful, aggressive", "Conduct disorder before 15; age ≥18"],
              ["Borderline", "**Concern of caretakers**; avoid abandonment", "Needy, unstable, self-destructive", "Self-harm, emptiness, identity disturbance"],
              ["Histrionic", "**Attention**, any kind (even appearing fragile)", "Coquettish, theatrical, shallow", "Seductiveness, impressionistic speech"],
              ["Narcissistic", "**Admiration** for superiority", "Grandiose, entitled, cold", "Grandiosity; fragile self-esteem"]
            ] },
            { type: "callout", kind: "exam", text: "The manual’s one-word styles: histrionic **coquettish**, antisocial **callous**, borderline **needy**; narcissistic is marked by **grandiosity**. All three of borderline, histrionic and narcissistic want attention, but narcissistic needs it to be **admiring**." }
          ]
        }
      ]
    },
    {
      title: "Cluster C: anxious or fearful",
      sections: [
        {
          id: "s18-avoidant",
          title: "Avoidant personality disorder",
          pages: "764–768",
          blocks: [
            { type: "criteria", title: "Avoidant personality disorder in brief", code: "F60.6", pages: "764–765", items: [
              ["", "Pervasive **social inhibition**, **feelings of inadequacy** and **hypersensitivity to negative evaluation**, from early adulthood, with **four or more** of:", [
                "Avoids **occupational** activities with interpersonal contact for fear of criticism or rejection.",
                "Unwilling to get involved unless **certain of being liked**.",
                "**Restraint in intimate relationships** for fear of shame or ridicule.",
                "**Preoccupied** with being criticized or rejected socially.",
                "**Inhibited in new** interpersonal situations from feeling inadequate.",
                "Views self as **socially inept, unappealing or inferior**.",
                "Unusually reluctant to take **personal risks** or new activities that may embarrass."
              ]]
            ] },
            { type: "callout", kind: "mnemonic", title: "CRINGES (the seven criteria)", text: "**C**ertain of being liked before getting involved · **R**ejection or criticism preoccupies · **I**nhibited in new situations · **N**ew activities and risks avoided · **G**ets restrained in intimacy (fear of shame) · **E**mployment with contact avoided · **S**elf seen as inferior. Four or more." },
            { type: "defs", title: "Features and epidemiology (pp. 765–767)", items: [
              ["Core", "**Wants** relationships but fears humiliation; tests others stringently; may decline promotions; repeated job changes after growing conviction colleagues see them as inferior."],
              ["Attachment", "Insecure, “**preoccupied**” or “**fearful**” attachment."],
              ["Prevalence", "NCS-R 5.2%, NESARC 2.4%, **median 2.1%**; **0.8%** in adults over 65; slightly more in **women**."],
              ["Course", "Childhood shyness is a common precursor but usually fades; may **remit with age**. Use great caution in children and adolescents."],
              ["Culture", "Avoidance after **loss of face** may aim to preserve social harmony; acculturation problems."],
              ["Comorbidity", "Depressive and anxiety disorders, especially **social anxiety disorder**; schizoid PD; substance use at rates like generalized social anxiety."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 767–768)", head: ["Condition", "How it differs"], rows: [
              ["[[dx:social-anxiety|Social anxiety disorder]]", "Large overlap, perhaps a severity spectrum; avoidant PD has a more **entrenched negative self-concept** and occurs without social anxiety disorder too, so both categories are kept"],
              ["[[dx:agoraphobia|Agoraphobia]]", "Avoidance motivated by fear of **panic or harm**"],
              ["[[dx:dependent-pd|Dependent PD]]", "Both inadequate and need reassurance; avoidant **withdraws**, dependent **seeks proximity**"],
              ["[[dx:schizoid-pd|Schizoid]] and [[dx:schizotypal-pd|schizotypal PD]]", "Content with or **prefer** isolation; avoidant feels loneliness deeply"],
              ["[[dx:paranoid-pd|Paranoid PD]]", "Reluctance to confide from fear of **malice**, not humiliation"]
            ] }
          ]
        },
        {
          id: "s18-dependent",
          title: "Dependent personality disorder",
          pages: "768–771",
          blocks: [
            { type: "criteria", title: "Dependent personality disorder in brief", code: "F60.7", pages: "768", items: [
              ["", "Pervasive, excessive **need to be taken care of**, with **submissive and clinging** behavior and fears of separation, from early adulthood, with **five or more** of:", [
                "Difficulty making **everyday decisions** without excessive advice and reassurance.",
                "Needs others to **assume responsibility** for major areas of life.",
                "Difficulty **expressing disagreement** for fear of losing support (not realistic fear of retribution).",
                "Difficulty **initiating** projects alone from lack of self-confidence, not motivation.",
                "Goes to excessive lengths for **nurturance**, even volunteering for unpleasant things.",
                "Uncomfortable or **helpless when alone**.",
                "**Urgently seeks another relationship** when one ends.",
                "Unrealistically preoccupied with fears of being **left to care for oneself**."
              ]]
            ] },
            { type: "callout", kind: "mnemonic", title: "RELIANCE (the eight criteria)", text: "**R**eassurance needed for everyday decisions · **E**xpressing disagreement is hard · **L**ife responsibilities handed to others · **I**nitiating projects is hard · **A**lone feels helpless · **N**urturance sought at any cost · **C**an’t be without a relationship (seeks a replacement) · **E**xcessive fear of being left alone. Five or more." },
            { type: "defs", title: "Reading the criteria (pp. 768–769)", items: [
              ["Beyond context", "In serious illness or disability, dependency must **exceed** what the condition explains; an older man with cancer moving in with his son is appropriate."],
              ["Abuse", "Tolerating abuse counts only when **other options are clearly available**; realistic fear of an abusive spouse is not evidence."],
              ["Competence", "May fear appearing competent lest support be withdrawn; functions well when **supervised**."]
            ] },
            { type: "table", caption: "Epidemiology and differential (pp. 769–771)", head: ["Topic", "Detail"], rows: [
              ["Prevalence", "NCS-R 0.6%, NESARC 0.5%, **median 0.4%**; diagnosed more in **women**"],
              ["Children", "Use with great caution, **if at all**"],
              ["Culture", "Politeness, passivity and deference are valued in some societies; dependent behavior counts only when **clearly in excess** of cultural norms"],
              ["[[dx:separation-anxiety|Separation anxiety disorder]]", "Fear for the **safety of attachment figures**; dependent PD fears being **unable to care for oneself**"],
              ["Other disorders", "Dependency from depression, panic disorder, agoraphobia or medical illness"],
              ["[[dx:borderline-pd|Borderline PD]]", "Rage, emptiness and demands vs **appeasement** and seeking a replacement; unstable relationships"],
              ["[[dx:histrionic-pd|Histrionic PD]]", "**Flamboyant**, actively demanding attention, less insight vs docile and self-effacing"],
              ["[[dx:avoidant-pd|Avoidant PD]]", "Withdraws until certain of acceptance vs **seeks and maintains** connections"],
              ["Comorbidity and risk", "Depressive, anxiety and adjustment disorders; borderline, avoidant, histrionic PD; **chronic physical illness** or **separation anxiety** in childhood may predispose"]
            ] }
          ]
        },
        {
          id: "s18-ocpd",
          title: "Obsessive-compulsive personality disorder",
          pages: "771–775",
          blocks: [
            { type: "criteria", title: "Obsessive-compulsive personality disorder in brief", code: "F60.5", pages: "771–772", items: [
              ["", "Pervasive preoccupation with **orderliness, perfectionism and control**, at the expense of **flexibility, openness and efficiency**, from early adulthood, with **four or more** of:", [
                "Preoccupied with **details, rules, lists**, order or schedules so the point is lost.",
                "**Perfectionism** that interferes with task completion.",
                "Excessive devotion to **work** excluding leisure and friends (not economic necessity).",
                "**Overconscientious, scrupulous, inflexible** about morality or values (not cultural or religious).",
                "Unable to **discard** worn-out or worthless objects without sentimental value.",
                "Reluctant to **delegate** unless others do it exactly their way.",
                "**Miserly** with self and others; hoards money for catastrophes.",
                "**Rigidity and stubbornness.**"
              ]]
            ] },
            { type: "callout", kind: "mnemonic", title: "PERFECTS (the eight criteria)", text: "**P**reoccupied with details · **E**thically rigid (overconscientious) · **R**eluctant to delegate · **F**inishing tasks blocked by perfectionism · **E**conomical (miserly) · **C**an’t discard objects · **T**ied to work, no leisure · **S**tubborn and rigid. Four or more." },
            { type: "defs", title: "Features and epidemiology (pp. 772–774)", items: [
              ["Style", "Rewrites a report until deadlines pass; turns play into work; anger expressed indirectly (ruminating over the tip) or as righteous indignation; deference to respected authority, resistance to others."],
              ["Emotion", "Stilted, controlled affection; uncomfortable with emotional people; rarely pays compliments."],
              ["Prevalence", "NCS-R 2.4%, NESARC 7.9%, **median 4.7%**; **equal** in men and women."],
              ["Culture", "Work-centered communities, religious groups, professions and migrants may embrace strict codes; these alone are not OCPD."],
              ["Comorbidity", "Anxiety disorders and OCD raise the likelihood, but **most people with OCD do not have OCPD**; overlaps with **type A** traits; possible links with mood and eating disorders."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 774–775)", head: ["Condition", "How it differs"], rows: [
              ["[[dx:ocd|OCD]]", "**True obsessions and compulsions**; diagnose both if both are met"],
              ["[[dx:hoarding|Hoarding disorder]]", "Consider when hoarding is **extreme** (fire hazard, blocked rooms); diagnose both if both are met"],
              ["[[dx:narcissistic-pd|Narcissistic PD]]", "Believes they have **achieved** perfection; OCPD is **self-critical**"],
              ["Narcissistic or antisocial PD", "Ungenerous to others but **indulge themselves**; OCPD is miserly to **both**"],
              ["[[dx:schizoid-pd|Schizoid PD]]", "Formality and detachment from a **lack of capacity for intimacy**, not discomfort with emotion and devotion to work"],
              ["Adaptive traits", "Moderate OCPD traits can be **adaptive** where high performance is rewarded"]
            ] },
            { type: "compare", title: "OCPD or OCD?", items: [
              { title: "OCPD", color: "drug", points: ["Pervasive **personality style**: perfectionism, control, rigidity.", "Usually **ego-syntonic**: “this is the right way.”", "No true obsessions or compulsions.", "F60.5"] },
              { title: "OCD", color: "case", points: ["**Obsessions and compulsions**, often time-consuming.", "Usually **ego-dystonic**, with insight specifiers.", "Most people with OCD do not have OCPD.", "F42.2"] }
            ] }
          ]
        },
        {
          id: "s18-clusterc-compare",
          title: "Telling Cluster C (and the loners) apart",
          pages: "764–775",
          blocks: [
            { type: "table", caption: "Why are they alone or unassertive?", head: ["Disorder", "Relationship wish", "Motive"], rows: [
              ["Schizoid", "**No** wish for closeness", "Indifference; limited capacity for intimacy"],
              ["Schizotypal", "Little wish; discomfort", "Suspicion; feels different"],
              ["Avoidant", "**Wants** closeness", "Fear of **humiliation and rejection**"],
              ["Dependent", "**Clings** to closeness", "Fear of being **left to care for oneself**"],
              ["Paranoid", "Distrusts", "Fear of **malicious** intent"],
              ["OCPD", "Has capacity", "Devotion to work, discomfort with emotion"]
            ] },
            { type: "callout", kind: "key", title: "The motive is the diagnosis", text: "Many personality disorders share the same **behavior** (not confiding, being alone, being unassertive). The manual separates them by **motive**: malice (paranoid), indifference (schizoid), humiliation (avoidant), losing support (dependent)." }
          ]
        }
      ]
    },
    {
      title: "Other personality disorders and the alternative model",
      sections: [
        {
          id: "s18-change-amc",
          title: "Personality change due to another medical condition",
          pages: "775–778",
          blocks: [
            { type: "criteria", title: "Personality change due to another medical condition in brief", code: "F07.0", pages: "775–776", items: [
              ["A", "A persistent personality disturbance that is a **change** from the previous characteristic pattern (in children, a marked deviation lasting **at least 1 year**)."],
              ["B", "Evidence that it is the **direct pathophysiological consequence** of a medical condition."],
              ["C", "Not better explained by another mental disorder (including another mental disorder due to AMC)."],
              ["D", "Not exclusively during **delirium**."],
              ["E", "Distress or impairment."]
            ], specifiers: [["Subtypes", "**Labile**, **disinhibited**, **aggressive**, **apathetic**, **paranoid**, other, **combined**, unspecified"], ["Coding", "Code the medical condition **first**, e.g., G40.209 temporal lobe epilepsy; F07.0 personality change due to temporal lobe epilepsy"]] },
            { type: "callout", kind: "mnemonic", title: "Subtypes: LAD APe", text: "**L**abile · **A**ggressive · **D**isinhibited · **A**pathetic · **P**aranoid, plus other, combined and unspecified." },
            { type: "defs", title: "Features and differential (pp. 776–778)", items: [
              ["Presentation", "Affective instability, poor impulse control, rage out of proportion, apathy, suspiciousness; others say the person is “**not themselves**.”"],
              ["Frontal lobe", "Poor judgment and foresight, **facetiousness**, disinhibition, euphoria."],
              ["Right hemisphere stroke", "Personality change with neglect, **anosognosia**, motor impersistence."],
              ["Causes", "CNS tumors, **head trauma**, stroke, **Huntington’s disease**, epilepsy, HIV and other CNS infections, endocrine disorders (hypothyroidism, adrenal), **lupus**."],
              ["Not if", "The change is a **psychological reaction** to illness (dependency after head injury); it occurs only in **delirium**; or another mental disorder due to AMC explains it."],
              ["With dementia", "Can be **added** to major neurocognitive disorder when the change is prominent and caused by the same process."],
              ["Substances", "Use other specified substance-related disorder (e.g., “with personality change”)."],
              ["vs personality disorder", "Requires a **change from baseline** and a specific medical cause."]
            ] }
          ]
        },
        {
          id: "s18-other",
          title: "Other specified and unspecified personality disorder",
          pages: "778",
          blocks: [
            { type: "table", caption: "Residual categories (pp. 733–734, 778)", head: ["Category", "Code", "Use"], rows: [
              ["[[dx:other-specified-pd|Other specified personality disorder]]", "**F60.89**", "Reason recorded: **mixed personality features** (general criteria met, traits of several disorders, none fully met) or a personality disorder **not in DSM-5** (e.g., **passive-aggressive**)"],
              ["[[dx:unspecified-pd|Unspecified personality disorder]]", "**F60.9**", "Reason not specified or **insufficient information**"]
            ] },
            { type: "p", text: "Note that both categories still require that personality disorder symptoms cause clinically significant distress or impairment and **predominate**." }
          ]
        },
        {
          id: "s18-ampd",
          title: "The Alternative DSM-5 Model (Section III)",
          pages: "881–901",
          blocks: [
            { type: "p", text: "Section III offers a **hybrid dimensional–categorical** model. A personality disorder requires **Criterion A** (impairment in personality functioning) and **Criterion B** (pathological traits), plus pervasiveness, stability, and exclusions (C–G, including not better understood as normal for the developmental stage or sociocultural environment)." },
            { type: "table", caption: "Criterion A: level of personality functioning", head: ["Element", "Meaning"], rows: [
              ["**Identity** (self)", "Experience of oneself as unique, stable self-esteem, emotional regulation"],
              ["**Self-direction** (self)", "Coherent goals, prosocial standards, self-reflection"],
              ["**Empathy** (interpersonal)", "Understanding others’ experiences and perspectives"],
              ["**Intimacy** (interpersonal)", "Depth and duration of connection, mutuality"],
              ["**Scale (LPFS)**", "Levels **0** (little or no impairment) to **4** (extreme); **moderate impairment (Level 2)** is required for a diagnosis"]
            ] },
            { type: "table", caption: "Criterion B: five trait domains (25 facets)", head: ["Domain", "Opposite pole", "Examples"], rows: [
              ["**Negative Affectivity**", "Emotional stability", "Anxiousness, emotional lability, separation insecurity, depressivity"],
              ["**Detachment**", "Extraversion", "Withdrawal, intimacy avoidance, anhedonia"],
              ["**Antagonism**", "Agreeableness", "Grandiosity, manipulativeness, deceitfulness, callousness, hostility"],
              ["**Disinhibition**", "Conscientiousness", "Impulsivity, irresponsibility, risk taking, distractibility"],
              ["**Psychoticism**", "Lucidity", "Eccentricity, unusual beliefs, cognitive and perceptual dysregulation"]
            ] },
            { type: "defs", title: "Diagnoses in the alternative model", items: [
              ["Six disorders", "**Antisocial, avoidant, borderline, narcissistic, obsessive-compulsive, schizotypal**. Paranoid, schizoid, histrionic and dependent are not retained as named types."],
              ["PD-TS", "**Personality disorder–trait specified** replaces “not otherwise specified”: moderate impairment plus a described trait profile."],
              ["Example", "Borderline: impairment in at least two of four elements plus **four of seven** traits, at least one of **impulsivity, risk taking or hostility**."],
              ["Link to the Big Five", "The five domains are maladaptive variants of the **Five-Factor Model**."]
            ] },
            { type: "callout", kind: "caution", text: "The alternative model is in **Section III** (emerging measures and models). Clinical diagnosis and coding use the **Section II** criteria above." }
          ]
        },
        {
          id: "s18-approach",
          title: "A practical approach and the classic traps",
          pages: "733–778",
          blocks: [
            { type: "steps", title: "Six steps for a suspected personality disorder", items: [
              ["1. Is it enduring?", "Onset by adolescence or early adulthood, stable, across contexts; get **collateral** history; assess over time."],
              ["2. Is it something else?", "Not only during a mood, anxiety or psychotic episode; not from substances; not a change caused by a medical condition (onset in later life is a red flag)."],
              ["3. Which cluster?", "Odd (A), dramatic (B) or anxious (C)."],
              ["4. Count the criteria", "Check the threshold for each candidate disorder; diagnose **all** that are met."],
              ["5. Check age and culture", "Antisocial: ≥18 with conduct disorder before 15. Others under 18: ≥1 year. Judge traits against cultural norms and gender stereotypes."],
              ["6. Comorbidity and safety", "Depression, substance use, PTSD, eating disorders; **suicide risk** (borderline, narcissistic, antisocial)."]
            ] },
            { type: "callout", kind: "key", title: "Twelve traps", text: "1) **Antisocial** never before 18, and needs **conduct disorder before 15**. 2) Others under 18 need **1 year** of features. 3) Do not diagnose from a **cross-section** during a mood episode. 4) Paranoid, schizoid, schizotypal **before** schizophrenia → “(premorbid).” 5) Schizotypal is **F21** (and listed with psychotic disorders). 6) Borderline affect shifts last **hours**, not days. 7) Borderline **remits often**; impulsivity first. 8) Histrionic wants **any** attention; narcissistic wants **admiration**. 9) Schizoid **doesn’t want** relationships; avoidant **does**. 10) Most people with **OCD do not** have OCPD. 11) Personality change in **later life** → medical or substance cause (F07.0). 12) Antisocial behavior only during **mania** is not antisocial PD." },
            { type: "p", text: "Practice with the [[helper:personality|personality helper]] and the [[helper:pdpair|look-alike helper]], then compare [[dx:borderline-pd|borderline]] with [[dx:bipolar-ii|bipolar II disorder]] side by side in the library." }
          ]
        }
      ]
    }
  ]
});
