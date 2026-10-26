/* Chapter 1 study guide. Source: DSM-5-TR, Neurodevelopmental Disorders (pp. 35–99).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. Codes checked against ICD-10-CM through FY2027 (October 1, 2026)
   and the APA DSM-5-TR updates of September 2022–2025: no changes for this chapter. Treatment notes, rating scales
   and other clinical teaching are outside the DSM and labeled as such. */
SP.add("ch01", "guide", {
  intro: "The neurodevelopmental disorders begin in the **developmental period**, usually before school entry, and combine **developmental deficits or differences** with **impaired functioning**; symptoms alone are not enough (p. 35). They range from narrow problems (one academic skill, motor coordination) to global ones (**intellectual developmental disorder**). They lie on **dimensions** without a sharp boundary from typical development, and they **co-occur** constantly: autism with intellectual disability, ADHD with specific learning disorder, tics with OCD. The chapter covers **intellectual developmental disorders**, the **communication disorders**, **autism spectrum disorder**, **ADHD**, **specific learning disorder**, the **motor disorders** (developmental coordination disorder, stereotypic movement disorder, the **tic disorders**) and the residual categories. Most of the rules are about **age** (onset before 12 for ADHD, before 18 for tics, under 5 for global developmental delay), **thresholds** (IQ about 70 ± 5, six or five ADHD symptoms, 1.5 SD on achievement tests) and **when two diagnoses are allowed**. Use the [[helper:neurodevelopmental|neurodevelopmental helper]] and the [[helper:tics|movement and tic helper]] to practice the reasoning.",
  objectives: [
    "State the three criteria for **intellectual developmental disorder**, why severity is graded by **adaptive functioning** rather than IQ, and the IQ band of about **65–75** (70 ± 5).",
    "Use **global developmental delay** (under age 5) and **unspecified intellectual developmental disorder** (over age 5, testing impossible) correctly; both share the **F88** / **F79** codes with other diagnoses, so know which is which.",
    "Tell the four **communication disorders** apart: language (vocabulary, grammar, discourse), speech sound (articulation), childhood-onset fluency (stuttering) and **social (pragmatic)** communication disorder.",
    "State the **autism spectrum disorder** criteria (**all three** of A, **two of four** of B), the separate severity levels for each domain, every specifier including **with catatonia**, and the rule that ASD supersedes social (pragmatic) communication disorder.",
    "State the **ADHD** criteria: **six** symptoms (**five** from age 17), **6 months**, several symptoms **before 12**, **two or more settings**, the three presentations with their **F90.x** codes, partial remission and severity.",
    "State the **specific learning disorder** criteria, the **6 months despite intervention** rule, the **1.5 SD** (standard score ≤78) guide, and code each impaired domain separately (**F81.0**, **F81.81**, **F81.2**).",
    "Distinguish **developmental coordination disorder**, **stereotypic movement disorder** and the **tic disorders**; apply the tic hierarchy (**Tourette’s → persistent → provisional**), the **1-year** and **age 18** rules.",
    "Know the prevalence, sex ratios, course, genetics, suicide risk and comorbidity figures the manual gives, and the main differentials across chapters (selective mutism, social anxiety, OCD, schizophrenia, bipolar disorder, PTSD, personality disorders, neurocognitive disorders)."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s1-map",
          title: "How the chapter is built",
          pages: "35–37",
          blocks: [
            { type: "table", caption: "Diagnoses in this chapter (codes as printed in DSM-5-TR, 2022; unchanged through October 2026)", head: ["Group", "Diagnosis", "Code", "Page"], rows: [
              "Intellectual developmental disorders",
              ["IDD", "[[dx:idd|Intellectual developmental disorder (intellectual disability)]]", "F70 mild · F71 moderate · F72 severe · F73 profound", "37–46"],
              ["IDD", "[[dx:gdd|Global developmental delay]]", "F88", "46"],
              ["IDD", "[[dx:unspecified-idd|Unspecified intellectual developmental disorder]]", "F79", "46"],
              "Communication disorders",
              ["Comm.", "[[dx:language-disorder|Language disorder]]", "F80.2", "47–49"],
              ["Comm.", "[[dx:speech-sound-disorder|Speech sound disorder]]", "F80.0", "50–51"],
              ["Comm.", "[[dx:stuttering|Childhood-onset fluency disorder (stuttering)]]", "F80.81", "51–54"],
              ["Comm.", "[[dx:spcd|Social (pragmatic) communication disorder]]", "F80.82", "54–56"],
              ["Comm.", "[[dx:unspecified-communication|Unspecified communication disorder]]", "F80.9", "56"],
              "Autism spectrum disorder",
              ["ASD", "[[dx:asd|Autism spectrum disorder]]", "F84.0", "56–68"],
              "Attention-deficit/hyperactivity disorder",
              ["ADHD", "[[dx:adhd|ADHD]], combined · inattentive · hyperactive/impulsive", "F90.2 · F90.0 · F90.1", "68–76"],
              ["ADHD", "[[dx:other-specified-adhd|Other specified ADHD]] · [[dx:unspecified-adhd|unspecified ADHD]]", "F90.8 · F90.9", "76"],
              "Specific learning disorder",
              ["SLD", "[[dx:sld|Specific learning disorder]]: reading · written expression · mathematics", "F81.0 · F81.81 · F81.2", "76–85"],
              "Motor disorders",
              ["Motor", "[[dx:dcd|Developmental coordination disorder]]", "F82", "85–88"],
              ["Motor", "[[dx:stereotypic-movement|Stereotypic movement disorder]]", "F98.4", "89–92"],
              ["Motor", "[[dx:tourette|Tourette’s disorder]]", "F95.2", "93–98"],
              ["Motor", "[[dx:persistent-tic|Persistent (chronic) motor or vocal tic disorder]]", "F95.1", "93–98"],
              ["Motor", "[[dx:provisional-tic|Provisional tic disorder]]", "F95.0", "93–98"],
              ["Motor", "[[dx:other-specified-tic|Other specified tic disorder]] · [[dx:unspecified-tic|unspecified tic disorder]]", "F95.8 · F95.9", "98"],
              "Other neurodevelopmental disorders",
              ["Other", "[[dx:other-specified-nd|Other specified neurodevelopmental disorder]]", "F88", "99"],
              ["Other", "[[dx:unspecified-nd|Unspecified neurodevelopmental disorder]]", "F89", "99"]
            ] },
            { type: "callout", kind: "key", title: "Four ideas that run through the chapter", text: "1) **Symptoms plus impairment**: the dimensions shade into typical development, so a diagnosis needs both (p. 35). 2) **Onset in the developmental period**, but the disorder may become obvious only later, when demands exceed capacity (autism, social communication disorder, learning disorder). 3) **Co-occurrence is the rule**: give **both** diagnoses when both sets of criteria are met, with a few explicit exceptions (ASD supersedes social communication disorder; stereotypies in ASD are not diagnosed separately unless self-injurious or a focus of treatment). 4) In someone with intellectual disability, a second diagnosis needs symptoms **in excess of the developmental level**." },
            { type: "compare", title: "The families of disorders (pp. 35–37)", items: [
              { title: "Global", color: "guide", points: ["**Intellectual developmental disorder**: intellectual **and** adaptive deficits.", "**Global developmental delay**: milestones missed in several areas, under age 5, not yet testable."] },
              { title: "Communication", color: "case", points: ["**Language**: vocabulary, grammar, discourse.", "**Speech sound**: articulation.", "**Fluency**: stuttering.", "**Social (pragmatic)**: using language socially."] },
              { title: "Social and behavioral", color: "dx", points: ["**Autism spectrum disorder**: social communication **plus** restricted, repetitive behavior.", "**ADHD**: inattention and/or hyperactivity-impulsivity."] },
              { title: "Learning and motor", color: "hy", points: ["**Specific learning disorder**: reading, writing, math.", "**Developmental coordination disorder**: clumsiness.", "**Stereotypic movement disorder**: purposeless repetitive movement.", "**Tic disorders**: sudden, rapid, nonrhythmic movements or sounds."] }
            ] },
            { type: "table", caption: "Which disorders have which specifiers (p. 37)", head: ["Specifier type", "Available for"], rows: [
              ["**Severity**", "Intellectual developmental disorder, autism spectrum disorder, ADHD, specific learning disorder, stereotypic movement disorder"],
              ["**Current symptomatology**", "ADHD (presentation), specific learning disorder (domain and subskills), persistent tic disorder (motor or vocal only)"],
              ["**Associated with a known genetic or other medical condition or environmental factor**", "Autism spectrum disorder, stereotypic movement disorder"]
            ] },
            { type: "update", kind: "tr", title: "What the text revision changed", text: "The chapter keeps the DSM-5 (2013) structure. The main changes: **intellectual disability** is renamed **intellectual developmental disorder (intellectual disability)** to match ICD-11; ASD Criterion A now says the deficits are shown by **all of the following** (clarifying that all three are required); the ASD association specifiers were reworded (**associated with a known genetic or other medical condition or environmental factor**; **associated with a neurodevelopmental, mental, or behavioral problem**, where DSM-5 said “disorder”); and the descriptive text was updated throughout (prevalence, culture, sex and gender, suicide sections). Confirm details against pp. 35–99." }
          ]
        },
        {
          id: "s1-coding",
          title: "Codes and how to record them",
          pages: "35–99",
          blocks: [
            { type: "table", caption: "Code families in the chapter", head: ["Code block", "What it covers", "Watch for"], rows: [
              ["**F70–F73, F79**", "Intellectual developmental disorder by severity; unspecified", "The **severity** picks the code (F70 mild to F73 profound)"],
              ["**F80.x**", "Communication disorders", "Stuttering **F80.81** and social communication **F80.82** are the ones people miss"],
              ["**F81.x**", "Specific learning disorder", "One code **per impaired domain**: F81.0 reading, **F81.81** writing, F81.2 math"],
              ["**F82**", "Developmental coordination disorder", "One code, no subtypes"],
              ["**F84.0**", "Autism spectrum disorder", "Add **F06.1** for catatonia associated with ASD"],
              ["**F88**", "Global developmental delay **and** other specified neurodevelopmental disorder", "Same code, different meanings: record the **name**"],
              ["**F89**", "Unspecified neurodevelopmental disorder", "Not F79 (that is unspecified IDD)"],
              ["**F90.x**", "ADHD", "The **presentation** picks the code: F90.0 inattentive, F90.1 hyperactive/impulsive, F90.2 combined"],
              ["**F95.x**", "Tic disorders", "F95.2 Tourette’s, F95.1 persistent, F95.0 provisional"],
              ["**F98.4**", "Stereotypic movement disorder", "Shares the F98 block with enuresis, encopresis and adult-onset fluency disorder (**F98.5**)"]
            ] },
            { type: "steps", title: "Recording a neurodevelopmental diagnosis", items: [
              ["1. Name and code", "e.g., autism spectrum disorder (F84.0); ADHD, combined presentation (F90.2)."],
              ["2. Severity", "IDD by adaptive functioning; ASD **separately** for social communication and for restricted, repetitive behavior; ADHD, SLD and stereotypic movement disorder mild, moderate or severe."],
              ["3. Other specifiers", "ASD: intellectual impairment, language impairment (with the current verbal level), associated conditions, catatonia. SLD: each subskill. Stereotypic movement disorder: self-injury, associated condition."],
              ["4. Associated condition", "“ASD associated with tuberous sclerosis complex”; code the medical or genetic condition **as well**."],
              ["5. Co-occurring disorders", "List each one that meets criteria: ADHD, IDD, language disorder, DCD, tic disorder."]
            ] },
            { type: "update", kind: "post", year: "2026", title: "No code changes through FY2027", source: "ICD-10-CM FY2025, FY2026 and FY2027 code tables (effective October 1 of 2024, 2025 and 2026); APA DSM-5-TR coding updates (September 2022, 2023, 2024 and 2025)", text: "None of the chapter’s codes (**F70–F73, F79, F80.0–F80.9, F81.0, F81.2, F81.81, F82, F84.0, F88, F89, F90.0–F90.9, F95.0–F95.9, F98.4**) changed in the October 2024, 2025 or 2026 ICD-10-CM updates, and none of the APA’s DSM-5-TR updates touches this chapter. The codes printed in the manual are still current. Check the code set in force on the date of service." },
            { type: "callout", kind: "exam", title: "Same code, different diagnosis", text: "**F88** is both **global developmental delay** and **other specified neurodevelopmental disorder**. **F79** is unspecified **intellectual** developmental disorder; **F89** is unspecified **neurodevelopmental** disorder. Adult-onset stuttering is **F98.5**, not F80.81." }
          ]
        }
      ]
    },
    {
      title: "Intellectual developmental disorders",
      sections: [
        {
          id: "s1-idd-criteria",
          title: "Intellectual developmental disorder: the criteria",
          pages: "37–42",
          blocks: [
            { type: "criteria", title: "Intellectual developmental disorder (intellectual disability) in brief", code: "F70–F73", pages: "37–38", items: [
              ["A", "**Intellectual deficits** (reasoning, problem solving, planning, abstract thinking, judgment, academic learning, learning from experience), confirmed by **both** clinical assessment **and** individualized, standardized **intelligence testing**."],
              ["B", "**Adaptive deficits**: failure to meet developmental and sociocultural standards for **personal independence and social responsibility**. Without ongoing support, they limit one or more activities of daily life (communication, social participation, independent living) across **multiple environments** (home, school, work, community)."],
              ["C", "**Onset** of the intellectual and adaptive deficits **during the developmental period**."]
            ], specifiers: [["Mild (F70)", "Support for **complex** daily tasks"], ["Moderate (F71)", "Long teaching for self-care; **considerable** support at work"], ["Severe (F72)", "Support for **all** daily activities; supervision at all times"], ["Profound (F73)", "**Dependent on others** for all care"]], note: "The name matches ICD-11 (**disorders of intellectual development**); “intellectual disability” stays in parentheses. In the United States, **Rosa’s Law** (2010) replaced “mental retardation” with “intellectual disability” in federal law (p. 38)." },
            { type: "defs", title: "Reading the criteria (pp. 41–42)", items: [
              ["The IQ band", "About **two standard deviations or more below the mean**, with a margin of about **±5 points**: on a test with mean 100 and SD 15, a score of about **65–75 (70 ± 5)**."],
              ["IQ is not enough", "A person scoring **somewhat above 65–75** can still have IDD if adaptive problems (e.g., social judgment) make real-life functioning comparable to a lower score. IQ alone is **insufficient** for the diagnosis."],
              ["What lowers a score’s validity", "**Practice effects**, the **Flynn effect** (inflated scores from out-of-date norms), brief screening or **group** tests, highly discrepant subtests, tests not normed for the person’s culture or language, and co-occurring sensory, motor or communication problems."],
              ["Better than one number", "A **profile** from neuropsychological testing or cross-battery assessment shows relative strengths and weaknesses for school and vocational planning."],
              ["Criterion B threshold", "At least **one** adaptive domain (conceptual, social or practical) impaired enough that **ongoing support** is needed across settings."],
              ["Criterion C", "Deficits recognized in **childhood or adolescence**; may be met **by history**."]
            ] },
            { type: "compare", title: "The three adaptive domains (p. 42)", items: [
              { title: "Conceptual (academic)", color: "guide", points: ["Memory, language, reading, writing, **math reasoning**.", "Practical knowledge, problem solving, **judgment in novel situations**."] },
              { title: "Social", color: "case", points: ["Awareness of others’ thoughts and feelings; **empathy**.", "Interpersonal communication, friendship, **social judgment**."] },
              { title: "Practical", color: "hy", points: ["**Personal care**, job responsibilities, **money management**, recreation.", "Self-management of behavior; organizing school and work tasks."] }
            ] },
            { type: "list", title: "How adaptive functioning is assessed (p. 42)", items: [
              "Clinical evaluation **plus** individualized, culturally appropriate, psychometrically sound measures.",
              "Standardized measures completed with **knowledgeable informants** (parent, teacher, care provider) and the person, as far as possible.",
              "If testing is impossible (sensory impairment, severe problem behavior), consider **unspecified IDD**.",
              "In **controlled settings** (prisons, detention), seek evidence of functioning **outside** them."
            ] },
            { type: "list", title: "A comprehensive evaluation includes (p. 42)", items: [
              "Intellectual capacity and adaptive functioning.",
              "**Genetic and nongenetic causes**: pre- and perinatal history, a **three-generation pedigree**, physical examination, genetic testing (**karyotype or chromosomal microarray**, specific syndromes), metabolic screening, neuroimaging.",
              "Associated medical conditions (**cerebral palsy, seizures**).",
              "Co-occurring mental, emotional and behavioral disorders."
            ] },
            { type: "callout", kind: "exam", title: "Severity is adaptive, not IQ", text: "DSM-5-TR grades severity by **adaptive functioning**, because that decides the **level of support**, and because IQ tests are **less valid at the low end** (p. 41). An exam stem that gives only an IQ of 45 does **not** tell you the severity." },
            { type: "update", kind: "post", year: "2026", title: "Not in the DSM: common tools", source: "Clinical teaching outside DSM-5-TR", text: "Commonly used instruments include the **Wechsler** scales (WPPSI, WISC, WAIS) or Stanford-Binet for intellectual functioning, and the **Vineland Adaptive Behavior Scales** or ABAS for adaptive behavior. First-tier genetic testing for unexplained IDD is usually **chromosomal microarray** plus **fragile X** testing, with exome sequencing increasingly used. These are teaching notes, not DSM requirements." }
          ]
        },
        {
          id: "s1-idd-severity",
          title: "Severity levels of intellectual developmental disorder",
          pages: "39–41",
          blocks: [
            { type: "table", caption: "Table 1 in brief: severity by domain (pp. 39–41, paraphrased)", head: ["Level", "Conceptual", "Social", "Practical"], rows: [
              ["**Mild** (F70)", "Preschool: may look typical. School and adult: trouble with reading, writing, math, **time and money**; concrete thinking; weak executive function", "Immature; misreads social cues; **gullible**, at risk of being manipulated", "Personal care age-appropriate; support for **complex tasks** (shopping, transport, banking, health and legal decisions); employment in jobs not stressing conceptual skills"],
              ["**Moderate** (F71)", "Skills **lag markedly** throughout; adult academics at **elementary** level; others may take over conceptual tasks", "Spoken language **much simpler**; can have friendships and sometimes romance; caretakers help with **life decisions**", "Self-care achievable as an adult **after long teaching**; independent employment with **considerable support**; maladaptive behavior in a significant minority"],
              ["**Severe** (F72)", "**Little understanding** of written language, numbers, time or money", "Speech of **single words or phrases**, may use augmentative means; focused on the **here and now**", "Needs support for **all ADLs** and **supervision at all times**; cannot make responsible decisions; self-injury in a significant minority"],
              ["**Profound** (F73)", "Concepts about the **physical world**, not symbols; may match and sort objects", "Very limited understanding of symbolic communication; expresses wishes **nonverbally**", "**Dependent on others for all** physical care, health and safety; may help with simple tasks; sensory and motor impairments common"]
            ] },
            { type: "flow", title: "Language as a quick severity marker (pp. 40–41)", steps: [["Mild", "Concrete or immature, but conversational"], ["Moderate", "Spoken language is the main tool, but **much less complex**"], ["Severe", "**Single words or phrases**; augmentative communication"], ["Profound", "**Nonsymbolic**: gestures and emotional cues"]], note: "A teaching shortcut, not a DSM rule: always rate all three domains." },
            { type: "callout", kind: "pearl", title: "Mild IDD hides until school", text: "Severe forms show **delayed motor, language and social milestones in the first 2 years**; **mild** forms may not be recognized until **school age**, when academic learning gets hard (p. 43). Mild is by far the most common level." },
            { type: "case", title: "Clinical vignette: the helpful neighbor", text: "A 19-year-old man reads at about a third-grade level, cannot budget his allowance and was persuaded by acquaintances to sign for a loan. He dresses and bathes independently, holds a job stacking shelves and has friends at church. Testing gives a full-scale IQ of 66, and a standardized adaptive measure shows deficits in conceptual and social skills. School records describe special education from age 8.", point: "Intellectual and adaptive deficits with onset in childhood: **intellectual developmental disorder**. Independent self-care, supported complex tasks and **gullibility** fit **mild (F70)**. Severity follows the adaptive picture, not the IQ." }
          ]
        },
        {
          id: "s1-idd-course",
          title: "Intellectual developmental disorder: features, course and risk",
          pages: "42–44",
          blocks: [
            { type: "defs", title: "Associated features (pp. 42–43)", items: [
              ["Gullibility", "Naiveté in social situations and a tendency to be **easily led**; with poor awareness of risk, it exposes people to **exploitation**, fraud, unintentional criminal involvement, **false confessions** and abuse."],
              ["Legal relevance", "These features matter in **Atkins-type hearings** (death penalty cases)."],
              ["Injury", "Accidental injury rates may be higher because of **poor awareness of danger**."],
              ["Behavior", "Limited communication can predispose to **disruptive and aggressive** behavior."],
              ["Distress", "People can be **distressed** by their limitations, even when this does not change functioning."]
            ] },
            { type: "table", caption: "Epidemiology (pp. 43–44)", head: ["Item", "Figure"], rows: [
              ["General population prevalence", "About **10 per 1,000** (1%)"],
              ["Middle-income countries", "About **16 per 1,000**"],
              ["High-income countries", "About **9 per 1,000**"],
              ["Age", "Higher in **youth** than adults"],
              ["Western Australia example", "**39 per 1,000** among Aboriginal children vs **16 per 1,000** in non-Aboriginal youth"],
              ["Male:female", "Mild about **1.6:1**; severe about **1.2:1** (ratios vary widely)"],
              ["US ethnoracial groups", "No significant difference in prevalence per 1,000"]
            ] },
            { type: "list", title: "Development and course (pp. 43–44)", items: [
              "Some children under 5 who will meet IDD criteria first meet criteria for **global developmental delay**.",
              "Genetic syndromes may bring a **characteristic appearance** (Down syndrome) or a **behavioral phenotype** (e.g., **Lesch-Nyhan syndrome**).",
              "**Acquired** forms can start abruptly after meningitis, encephalitis or head injury in the developmental period; if skills are **lost**, both IDD and a **neurocognitive disorder** may be diagnosed.",
              "Generally **nonprogressive**, but **Rett syndrome** has periods of worsening then stabilization, and **Sanfilippo** and **Down syndrome** can show progressive decline (in Down syndrome often from **Alzheimer’s disease** in adulthood: give **both** diagnoses).",
              "Usually **lifelong**, though severity can change. Early intervention may improve function so much that the diagnosis no longer applies, so diagnosis in infants is often **delayed until after a course of intervention**.",
              "Ask whether gains are **stable, generalized new skills** (diagnosis may no longer apply) or **contingent on supports** (diagnosis still applies)."
            ] },
            { type: "compare", title: "Risk factors by timing (p. 44)", items: [
              { title: "Prenatal", color: "guide", points: ["Genetic syndromes: **sequence variants, copy number variants**, chromosomal disorders.", "**Inborn errors of metabolism**, brain malformations.", "Maternal and placental disease.", "Teratogens: **alcohol**, other drugs, toxins."] },
              { title: "Perinatal", color: "case", points: ["Labor and delivery events leading to **neonatal encephalopathy**."] },
              { title: "Postnatal", color: "hy", points: ["Hypoxic-ischemic injury, **TBI**, infections, demyelinating disorders.", "Seizure disorders (e.g., **infantile spasms**).", "Severe, chronic **social deprivation**.", "Toxic-metabolic syndromes and intoxications (**lead, mercury**)."] }
            ] },
            { type: "callout", kind: "culture", text: "Prevalence differences across groups often reflect **environmental risk** tied to socioeconomic status and health care access (perinatal injury, deprivation). Assessment must consider the person’s socioeconomic, ethnic, cultural and linguistic background and how they function **in their own community**. Some cultures explain IDD as **supernatural** or as punishment for a parent’s wrongdoing, which brings **shame and underreporting** (p. 44)." },
            { type: "callout", kind: "caution", title: "Suicide risk is real", text: "People with IDD can be at risk of suicide, linked to **comorbid mental disorder**, **higher** intellectual and adaptive function, and **recent stressors**. Comorbid disorders may look **atypical**, so screen for suicidal thoughts and watch for **changes in behavior** (p. 44)." }
          ]
        },
        {
          id: "s1-idd-ddx",
          title: "Intellectual developmental disorder: differential and comorbidity",
          pages: "45–46",
          blocks: [
            { type: "p", text: "Diagnose IDD **whenever Criteria A, B and C are met**. Do not assume IDD because of a genetic or medical condition; when a genetic syndrome is present, record it **as a concurrent diagnosis** (p. 45)." },
            { type: "table", caption: "Differential diagnosis (p. 45)", head: ["Look-alike", "How to tell", "Both allowed?"], rows: [
              ["[[dx:major-ncd|Major or mild neurocognitive disorder]]", "NCD is a **loss** of previously attained function; IDD is a failure to develop it", "**Yes**: e.g., Down syndrome with Alzheimer’s disease, or IDD with further loss after a head injury; also after a developmental-period brain injury once cognition has **stabilized**"],
              ["Communication disorders, specific learning disorder", "Deficits are **confined** to communication or learning; intellect and adaptive behavior are intact", "**Yes**, if full criteria for both are met"],
              ["[[dx:asd|Autism spectrum disorder]]", "IDD is common in ASD; social-communication and behavior problems can **interfere with testing**", "**Yes**; reassess IQ over development, because early IQ in ASD may be **unstable**"]
            ] },
            { type: "list", title: "Comorbidity (pp. 45–46)", items: [
              "Mental disorders, **cerebral palsy** and **epilepsy** are **3–4 times** more common than in the general population.",
              "Most common co-occurring disorders: **ADHD**, depressive and bipolar disorders, anxiety disorders, ASD, **stereotypic movement disorder** (with or without self-injury), impulse-control disorders and **major NCD**.",
              "**Major depressive disorder** can occur at **any** level of severity.",
              "**Self-injurious behavior** needs prompt attention and may warrant a separate diagnosis of stereotypic movement disorder.",
              "Aggression and property destruction, especially at more severe levels.",
              "More physical health problems, including **obesity**; people often **cannot describe symptoms**, so illness goes undiagnosed.",
              "**Knowledgeable informants** are essential for irritability, mood, aggression, eating and sleep problems."
            ] },
            { type: "compare", title: "Other classifications (p. 46)", items: [
              { title: "ICD-11", color: "guide", points: ["**Disorders of intellectual development**.", "A **metasyndrome** of the developmental period, analogous to dementia later in life.", "Four subtypes: mild, moderate, severe, profound."] },
              { title: "AAIDD", color: "case", points: ["Uses **intellectual disability**.", "**Multidimensional**, based on the disability construct.", "Emphasizes a **profile of supports** rather than severity specifiers."] }
            ] },
            { type: "callout", kind: "pearl", title: "Behavior change in a nonverbal adult with IDD", text: "New aggression, self-injury, sleep or appetite change can be **depression**, **anxiety**, **pain** (dental, constipation, reflux) or a **medical illness** the person cannot describe. Rule these out before calling it “behavioral” (pp. 45–46)." }
          ]
        },
        {
          id: "s1-gdd",
          title: "Global developmental delay and unspecified intellectual developmental disorder",
          pages: "46",
          blocks: [
            { type: "compare", title: "The two IDD residual diagnoses (p. 46)", items: [
              { title: "Global developmental delay (F88)", color: "guide", points: ["Age **under 5**.", "Fails to meet expected milestones in **several areas** of intellectual functioning.", "**Cannot undergo systematic testing**, including children too young for standardized tests, so severity cannot be rated reliably.", "Requires **reassessment** after a period of time."] },
              { title: "Unspecified IDD (F79)", color: "case", points: ["Age **over 5**.", "Assessment by locally available procedures is **difficult or impossible** because of blindness, **prelingual deafness**, locomotor disability, **severe problem behavior** or a co-occurring mental disorder.", "Use only in **exceptional circumstances**.", "Requires **reassessment**."] }
            ] },
            { type: "callout", kind: "exam", title: "The age-5 switch", text: "A 3-year-old with delays in language, motor and social milestones who cannot be tested: **global developmental delay (F88)**. A 9-year-old who is **blind** and **deaf** and cannot be tested with available tools: **unspecified IDD (F79)**. Neither is a diagnosis to keep forever: both require **reassessment**." },
            { type: "case", title: "Clinical vignette: the toddler who is behind", text: "A 30-month-old girl walked at 20 months, has five words, does not point or follow simple commands, and cannot complete a developmental test session. Hearing is normal. Her pediatrician refers her for early intervention.", point: "Delays across **several domains**, **under 5**, not reliably testable: **global developmental delay (F88)**, with reassessment later. Consider autism screening too, because the absence of pointing is a joint-attention sign." }
          ]
        }
      ]
    },
    {
      title: "Communication disorders",
      sections: [
        {
          id: "s1-language",
          title: "Speech, language and communication; language disorder",
          pages: "46–49",
          blocks: [
            { type: "defs", title: "Three terms the chapter keeps apart (pp. 46–47)", items: [
              ["Speech", "The **expressive production of sounds**: articulation, fluency, voice and resonance."],
              ["Language", "The **form, function and use** of a conventional symbol system (spoken words, **sign language**, written words, pictures) in a rule-governed way."],
              ["Communication", "**Any** verbal or nonverbal behavior, intentional or not, that can influence another person’s behavior, ideas or attitudes."]
            ] },
            { type: "callout", kind: "culture", text: "Assess speech, language and communication in the person’s **cultural and language context**, especially in **bilingual** homes, with tests normed for that group. Tests standardized for one group may not give valid norms for another (p. 47)." },
            { type: "criteria", title: "Language disorder in brief", code: "F80.2", pages: "47", items: [
              ["A", "Persistent difficulty **acquiring and using language** across modalities (spoken, written, sign) from deficits in **comprehension or production**, including:", ["**reduced vocabulary**;", "**limited sentence structure** (grammar and morphology);", "**impaired discourse** (connecting sentences to explain, describe or converse)."]],
              ["B", "Abilities **substantially and quantifiably below** age expectations, limiting communication, social participation, academic achievement or occupational performance."],
              ["C", "Onset in the **early developmental period**."],
              ["D", "Not due to **hearing or other sensory impairment**, motor dysfunction or another medical or neurological condition, and not better explained by **IDD** or **global developmental delay**."]
            ] },
            { type: "list", title: "What it looks like (pp. 47–48)", items: [
              "Late **first words and phrases**; a small, less varied vocabulary; short, simple sentences with grammatical errors, especially in the **past tense**.",
              "**Comprehension** deficits are often **underestimated**, because children use context to guess meaning.",
              "Word-finding problems, thin definitions, poor grasp of synonyms, multiple meanings and word play.",
              "Trouble remembering new words and sentences: following **longer instructions**, holding a phone number or shopping list.",
              "**Discourse**: cannot narrate a coherent story or give the key events.",
              "Assess **both receptive and expressive** language, because they can differ in severity.",
              "Children may seem **shy**, talk only with family; persistent social reticence warrants a **language assessment**."
            ] },
            { type: "table", caption: "Course and prognosis (pp. 48–49)", head: ["Point", "Detail"], rows: [
              ["Best early predictor", "**Late onset of language at 24 months** best predicted outcomes at age 7 in a population sample"],
              ["When it stabilizes", "By **age 4** individual differences are more stable and predictive; disorder diagnosed at 4 or older usually **persists into adulthood**"],
              ["Worse prognosis", "**Receptive** impairment: more treatment-resistant, with reading comprehension problems"],
              ["Social consequences", "Peer **victimization**; women with childhood language disorder may have almost **3 times** the risk of sexual assault in adulthood"],
              ["Bilingualism", "Does **not cause** or worsen language disorder; a true disorder affects **both languages**, so assess both"],
              ["Genetics", "**Highly heritable**; family history common; many interacting genes"]
            ] },
            { type: "table", caption: "Language disorder: differential (p. 49)", head: ["Look-alike", "Key distinction"], rows: [
              ["Normal variation", "Hard to separate **before age 4**; consider **dialects** and regional variation"],
              ["Hearing or sensory impairment", "Exclude hearing loss first; diagnose language disorder only if deficits are **in excess** of what the impairment explains"],
              ["[[dx:idd|Intellectual developmental disorder]]", "Language delay is often IDD’s **presenting** sign; a verbal–nonverbal **discrepancy is not required** for language disorder"],
              ["[[dx:asd|Autism spectrum disorder]]", "ASD adds lack of social interest, odd play, unusual communication (knows the alphabet but **does not respond to own name**) and **repetitive behaviors**"],
              ["Neurological disorders", "Acquired aphasia with epilepsy, e.g., **Landau-Kleffner syndrome**"],
              ["Language regression", "**Any loss** of speech or language at any age needs neurological work-up, including a **routine and sleep EEG**; early loss of social-communication skills (first 2 years) should prompt **ASD** assessment"]
            ] },
            { type: "callout", kind: "pearl", title: "Comorbidity", text: "Language disorder travels with **specific learning disorder** (literacy and numeracy), IDD, **ADHD**, ASD, **developmental coordination disorder** and **social (pragmatic) communication disorder**. In clinic samples it co-occurs with speech sound disorder, but a US population study of 6-year-olds found that overlap **rare (1.3%)** (p. 49)." }
          ]
        },
        {
          id: "s1-speech-sound",
          title: "Speech sound disorder",
          pages: "50–51",
          blocks: [
            { type: "criteria", title: "Speech sound disorder in brief", code: "F80.0", pages: "50", items: [
              ["A", "Persistent difficulty with **speech sound production** that interferes with **intelligibility** or prevents verbal communication of messages."],
              ["B", "Limits effective communication, interfering with social participation, academic achievement or occupational performance."],
              ["C", "Onset in the **early developmental period**."],
              ["D", "Not due to congenital or acquired conditions such as **cerebral palsy, cleft palate, deafness or hearing loss, TBI** or other medical or neurological conditions."]
            ] },
            { type: "table", caption: "Intelligibility milestones (pp. 50–51)", head: ["Age", "Typical speech"], rows: [
              ["**2 years**", "Only about **50%** understandable"],
              ["**3 years**", "Overall speech should be **intelligible**"],
              ["**5 years**", "**Most** sounds clear and most words pronounced accurately"],
              ["Up to **8 years**", "Misarticulating **one** of the “**late eight**” (l, r, s, z, th, ch, dzh, zh) can be within normal limits"]
            ] },
            { type: "defs", title: "Key terms (pp. 50–51)", items: [
              ["Two components", "**Phonological knowledge** of speech sounds and **motor coordination** of the articulators (jaw, tongue, lips) with breathing and voicing."],
              ["Childhood apraxia of speech", "Also **verbal dyspraxia**: speech production problems with a **motor** component; may come with trouble chewing, keeping the mouth closed, blowing the nose, or wider incoordination."],
              ["Lisping", "Misarticulated **sibilants**, frontal or lateral; may go with a **tongue-thrust** swallow."],
              ["Sex ratio", "Boys **1.5–1.8 : 1**."]
            ] },
            { type: "table", caption: "Differential diagnosis (p. 51)", head: ["Look-alike", "Key distinction"], rows: [
              ["Normal or dialect variation", "Bilingual children assessed **only in English** look less intelligible and make more and unusual errors"],
              ["Hearing impairment", "Diagnose only if errors are **in excess** of what hearing loss explains"],
              ["Structural deficits", "e.g., **cleft palate**"],
              ["**Dysarthria**", "A motor disorder (e.g., **cerebral palsy**) with neurological signs and distinctive voice; hard to separate under 3, e.g., **Worster-Drought syndrome**"],
              ["[[dx:selective-mutism|Selective mutism]]", "Limited speech in some settings from **anxiety**; normal speech in “safe” places. A child with a speech disorder may **develop** selective mutism from embarrassment"]
            ] },
            { type: "callout", kind: "key", title: "Prognosis", text: "Most children **respond well** to treatment and improve, so the disorder may **not** be lifelong. Prognosis is **poorer** when a **language disorder** coexists, which also raises the risk of **specific learning disorder** (p. 51). Code associated genetic conditions (Down syndrome, **22q deletion**, **FOXP2** mutation) too." }
          ]
        },
        {
          id: "s1-stuttering",
          title: "Childhood-onset fluency disorder (stuttering)",
          pages: "51–54",
          blocks: [
            { type: "criteria", title: "Childhood-onset fluency disorder (stuttering) in brief", code: "F80.81", pages: "51–52", items: [
              ["A", "Disturbed **fluency and time patterning** of speech, inappropriate for age and language skills, persisting over time, with **frequent and marked** occurrences of one or more of:", ["sound and syllable **repetitions**;", "sound **prolongations** (consonants and vowels);", "**broken words** (pauses within a word);", "audible or silent **blocking**;", "**circumlocutions** (substituting words to avoid hard ones);", "words produced with **excess physical tension**;", "**monosyllabic whole-word repetitions** (“I-I-I-I see him”)."]],
              ["B", "Causes **anxiety about speaking** or limits communication, social participation, or academic or occupational performance."],
              ["C", "Onset in the **early developmental period**.", [], "Later onset is coded **F98.5 adult-onset fluency disorder**."],
              ["D", "Not due to a speech-motor or sensory deficit, **neurological insult** (stroke, tumor, trauma) or another medical condition, and not better explained by another mental disorder."]
            ] },
            { type: "list", title: "What it looks like (pp. 52–53)", items: [
              "Worse under **pressure to communicate** (a school report, a job interview).",
              "Often **absent** during **oral reading, singing**, or talking to **pets or objects**.",
              "Fearful anticipation; avoidance by **changing speech rate** or avoiding words, sounds or situations (telephoning, public speaking).",
              "Accompanying movements: **eye blinks, tics**, lip or face tremor, head jerks, breathing movements, fist clenching.",
              "Stress and anxiety are both **features** and **aggravators**."
            ] },
            { type: "table", caption: "Course and risk (pp. 52–53)", head: ["Point", "Figure"], rows: [
              ["Onset", "By **age 6** in **80%–90%**; range **2–7 years**; gradual or sudden"],
              ["Early pattern", "Repeats initial consonants, first words of a phrase or long words; child may be **unaware**"],
              ["Recovery", "**65%–85%** of children recover"],
              ["Best predictor of persistence", "**Severity at age 8**"],
              ["Family risk", "First-degree relatives have **more than 3 times** the general population risk; mutations in **four genes** identified"],
              ["Sex", "**More males** than females"]
            ] },
            { type: "table", caption: "Differential diagnosis (p. 53)", head: ["Look-alike", "Key distinction"], rows: [
              ["Normal dysfluency", "Young children repeat **whole words or phrases** (“I want, I want ice cream”), use interjections and incomplete phrases; diagnose if dysfluency **increases** in frequency or complexity with age"],
              ["Sensory deficits", "Diagnose only if dysfluency **exceeds** what the deficit explains"],
              ["[[dx:sld|Specific learning disorder, reading]]", "Children who stutter read aloud **slowly** on timed tests; slow oral reading may not reflect true reading ability"],
              ["Bilingualism", "Dysfluency from learning a new language vs a disorder, which appears in **both languages**"],
              ["Medication side effect", "Temporal link to the drug"],
              ["**Adult-onset dysfluency**", "Onset **during or after adolescence**: not a neurodevelopmental disorder; linked to neurological, medical or mental disorders (**F98.5**)"],
              ["[[dx:tourette|Tourette’s disorder]]", "Vocal tics differ from stuttered repetitions in **nature and timing**"]
            ] },
            { type: "callout", kind: "pearl", title: "Comorbidity", text: "ADHD, ASD, IDD, language disorder or specific learning disorder, **seizure disorders**, **social anxiety disorder**, speech sound disorder and other developmental disorders (pp. 53–54). Ask about **social anxiety** in every adolescent who stutters." }
          ]
        },
        {
          id: "s1-spcd",
          title: "Social (pragmatic) communication disorder and unspecified communication disorder",
          pages: "54–56",
          blocks: [
            { type: "criteria", title: "Social (pragmatic) communication disorder in brief", code: "F80.82", pages: "54", items: [
              ["A", "Persistent difficulty in the **social use** of verbal and nonverbal communication, shown by **all four**:", ["using communication for **social purposes** (greeting, sharing information) appropriately;", "**changing communication** to fit the context or listener (classroom vs playground, child vs adult; avoiding overly formal language);", "following **rules of conversation and storytelling** (turn-taking, rephrasing when misunderstood, using signals to regulate interaction);", "understanding what is **not explicitly stated** and **nonliteral** language (inferences, idioms, humor, metaphors)."]],
              ["B", "Functional limits in communication, social participation, relationships, academic achievement or occupational performance."],
              ["C", "Onset in the early developmental period, though deficits may not show fully until **social demands exceed capacities**."],
              ["D", "Not due to a medical or neurological condition or to low **word structure and grammar** abilities, and not better explained by **ASD**, IDD, global developmental delay or another mental disorder."]
            ] },
            { type: "list", title: "Features and course (pp. 54–55)", items: [
              "The commonest associated feature is **language impairment**: a history of delayed milestones and past, if not current, **structural language** problems.",
              "Also more common: **ADHD**, emotional and behavioral problems, specific learning disorders; social **avoidance**.",
              "**Rare before age 4**, because pragmatics need adequate speech and language; most children can be assessed by **4 or 5**; milder forms may surface only in **early adolescence**.",
              "Outcome is **variable**; even improved children may keep lasting problems in relationships, written expression, **reading comprehension** and oral reading.",
              "Risk rises with a family history of **ASD**, communication disorders or specific learning disorder."
            ] },
            { type: "compare", title: "The key differential: ASD versus social (pragmatic) communication disorder (p. 55)", items: [
              { title: "Autism spectrum disorder", color: "dx", points: ["Social communication deficits **plus** restricted, repetitive behaviors, interests or activities.", "The repetitive features may have been present **only in early childhood**: take a full history.", "**Supersedes** SPCD whenever ASD criteria are met."] },
              { title: "Social (pragmatic) communication disorder", color: "case", points: ["Social communication deficits **without** current or past restricted, repetitive behaviors.", "Deficits may be **milder** but are qualitatively similar.", "Diagnose only after ruling out ASD **Criterion B by history**."] }
            ] },
            { type: "table", caption: "Other differentials (pp. 55–56)", head: ["Look-alike", "Key distinction"], rows: [
              ["[[dx:adhd|ADHD]]", "Primary ADHD deficits can impair social communication and participation"],
              ["[[dx:social-anxiety|Social anxiety disorder]]", "**Timing**: in SPCD effective social communication was **never** there; in social anxiety the skills developed but go **unused** because of fear"],
              ["IDD and global developmental delay", "Give SPCD only if social communication deficits **clearly exceed** the intellectual limits"]
            ] },
            { type: "callout", kind: "exam", title: "The DSM-IV patient", text: "A child with marked social communication deficits but **no** repetitive behaviors or restricted interests, **ever**: evaluate for **social (pragmatic) communication disorder**, not ASD (Note to ASD criteria, p. 57). A well-established DSM-IV diagnosis of autistic disorder, **Asperger’s** or PDD-NOS converts to **ASD**." },
            { type: "case", title: "Clinical vignette: the boy who says it like a textbook", text: "A 10-year-old boy speaks in long, correct sentences but lectures his classmates in the same formal way he speaks to teachers, misses jokes and idioms (“it’s raining cats and dogs” puzzles him), and does not rephrase when people look confused. He has friends who share his love of football and has never had special interests, routines, sensory issues or repetitive movements; his early development was typical apart from late talking.", point: "All four pragmatic deficits, no restricted or repetitive features by **history or now**, intact structural language: **social (pragmatic) communication disorder (F80.82)**." },
            { type: "defs", title: "Unspecified communication disorder (p. 56)", items: [
              ["Code", "**F80.9**"],
              ["Use", "Communication disorder symptoms with distress or impairment that do not meet full criteria, when the clinician **does not specify the reason** or information is **insufficient**."],
              ["Note", "There is **no other specified** communication disorder in DSM-5-TR."]
            ] }
          ]
        }
      ]
    },
    {
      title: "Autism spectrum disorder",
      sections: [
        {
          id: "s1-asd-criteria",
          title: "Autism spectrum disorder: the criteria and specifiers",
          pages: "56–60",
          blocks: [
            { type: "criteria", title: "Autism spectrum disorder in brief", code: "F84.0", pages: "56–57", items: [
              ["A", "Persistent deficits in **social communication and social interaction** across contexts, shown by **all three**, currently or by history:", ["**social-emotional reciprocity** (odd social approach, no back-and-forth conversation, little sharing of interests or feelings, not initiating or responding);", "**nonverbal communicative behaviors** (poor integration of words and gestures, atypical eye contact and body language, little use or understanding of gestures, no facial expression);", "**developing, maintaining and understanding relationships** (adjusting behavior to context, sharing imaginative play, making friends, interest in peers)."]],
              ["B", "**Restricted, repetitive** patterns of behavior, interests or activities, **at least two of four**, currently or by history:", ["**stereotyped or repetitive** movements, use of objects or speech (simple motor stereotypies, lining up toys, **echolalia**, idiosyncratic phrases);", "**insistence on sameness**, inflexible routines, ritualized patterns (distress at small changes, rigid thinking, greeting rituals, same route or food);", "**highly restricted, fixated interests** abnormal in intensity or focus;", "**hyper- or hyporeactivity** to sensory input or unusual sensory interests (indifference to pain or temperature, aversion to sounds or textures, smelling or touching objects, fascination with lights)."]],
              ["C", "Present in the **early developmental period**, though they may not show fully until **social demands exceed capacities**, or may be **masked by learned strategies** later."],
              ["D", "Clinically significant impairment in **current** functioning."],
              ["E", "Not better explained by **IDD** or **global developmental delay**. To diagnose both ASD and IDD, social communication must be **below that expected for general developmental level**."]
            ], specifiers: [
              ["Severity", "Level 1, 2 or 3, rated **separately** for social communication and for restricted, repetitive behavior"],
              ["Intellectual impairment", "**With or without** accompanying intellectual impairment; estimate verbal and nonverbal ability separately"],
              ["Language impairment", "**With or without** accompanying language impairment; record the current verbal level (e.g., no intelligible speech, single words, phrase speech)"],
              ["Associated condition", "**Associated with a known genetic or other medical condition or environmental factor**; code the condition as well"],
              ["Associated problem", "**Associated with a neurodevelopmental, mental, or behavioral problem**, e.g., irritability, sleep problems, self-injury, regression"],
              ["With catatonia", "Add **F06.1** catatonia associated with ASD"]
            ], note: "Note (p. 57): a well-established DSM-IV diagnosis of **autistic disorder, Asperger’s disorder or PDD-NOS** becomes ASD. Marked social communication deficits without the other ASD features: evaluate for **social (pragmatic) communication disorder**." },
            { type: "flow", title: "Counting rule", steps: [["Criterion A", "**3 of 3**", "dx"], ["Criterion B", "**2 of 4**", "case"], ["C, D, E", "Early onset, current impairment, not IDD alone", "guide"]], note: "All A and B items may be met **by history**; impairment (D) must be **current**." },
            { type: "table", caption: "Table 2 in brief: severity levels (p. 58, paraphrased)", head: ["Level", "Social communication", "Restricted, repetitive behavior"], rows: [
              ["**Level 3**: requiring **very substantial** support", "**Severe** deficits; very limited initiation, **minimal** response to others (e.g., few intelligible words, unusual approaches only to meet needs)", "Inflexibility and repetitive behavior **markedly interfere in all spheres**; great distress changing focus"],
              ["**Level 2**: requiring **substantial** support", "**Marked** deficits **even with supports**; limited initiation; reduced or odd responses (e.g., simple sentences, interaction limited to narrow interests, markedly odd nonverbal behavior)", "Repetitive behavior **obvious to the casual observer**; interferes in a variety of contexts"],
              ["**Level 1**: requiring support", "**Without supports**, noticeable impairment; difficulty initiating; atypical responses (e.g., full sentences but failed to-and-fro, odd unsuccessful attempts at friendship)", "Inflexibility interferes in **one or more** contexts; trouble switching activities; poor organization and planning"]
            ] },
            { type: "defs", title: "Using the specifiers (pp. 58–60)", items: [
              ["Rate each domain separately", "e.g., “requiring very substantial support for social communication and substantial support for restricted, repetitive behaviors.” Current symptoms may fall **below level 1**."],
              ["Not for services", "The levels describe symptoms and should **not** decide eligibility for services; people with better skills may face **greater** psychosocial challenges."],
              ["Order of recording", "Severity, then **intellectual** impairment, then **language** impairment with the current verbal level."],
              ["Intellectual profile", "Often **uneven**: estimate **verbal and nonverbal** skills separately (untimed nonverbal tests)."],
              ["Language", "Receptive language may **lag** expressive language in ASD; consider each."],
              ["Associated condition", "Genetic (**Rett, fragile X, Down syndrome**), medical (**epilepsy**), or prenatal exposure (**valproate, alcohol, rubella**). It records **clinical relevance**, not **causation**: even **Crohn’s disease** can be listed if it worsens behavior."],
              ["If the problem is a disorder", "When the associated problem meets criteria for another disorder (ADHD, DCD, anxiety, tics, feeding, sleep), diagnose **both**."],
              ["Catatonia", "Posturing, negativism, mutism, stupor, and in ASD also **worsening stereotypy and self-injury**. Record “catatonia associated with ASD” separately."]
            ] },
            { type: "callout", kind: "exam", title: "The specifier traps", text: "1) Severity is **two ratings**, not one. 2) “Associated with” is **not** a claim of cause. 3) **Catatonia** gets its own code (**F06.1**). 4) The language specifier describes the **current verbal level**. 5) ASD and IDD together require social communication **below the developmental level**." }
          ]
        },
        {
          id: "s1-asd-features",
          title: "Autism spectrum disorder: how it presents",
          pages: "60–62",
          blocks: [
            { type: "p", text: "Manifestations vary with **severity, developmental level, age and possibly gender**, hence “spectrum.” ASD absorbs the older labels **early infantile autism, childhood autism, Kanner’s autism, high-functioning autism, atypical autism, PDD-NOS, childhood disintegrative disorder and Asperger’s disorder** (p. 60). Diagnosis is most valid with **multiple sources**: clinician observation, caregiver history and self-report." },
            { type: "table", caption: "Criterion A across ages (pp. 60–61)", head: ["Domain", "Young child", "Older child or adult without IDD"], rows: [
              ["Reciprocity", "Little initiation, **no sharing** of emotions, little **imitation**; speech used to **request or label**, not comment", "Trouble with complex cues: **when and how to join** a conversation, what not to say; exhausted by **consciously calculating** what is intuitive to others"],
              ["Nonverbal", "Impaired **joint attention**: no pointing, showing or bringing objects; does not follow a point or gaze", "**Odd, wooden or exaggerated** body language; poor **integration** of eye contact, gesture, posture, prosody and expression"],
              ["Relationships", "No shared or **flexible pretend play**; later, **fixed rules** for play", "Misjudges context (casual at a **job interview**); misses irony and white lies; **one-sided** friendships or ones based only on shared interests"]
            ] },
            { type: "table", caption: "Criterion B examples (pp. 61–62)", head: ["Item", "Examples"], rows: [
              ["Stereotyped or repetitive", "**Hand flapping**, finger flicking; spinning coins, **lining up toys**; **echolalia** (immediate or delayed), using “**you**” for self, stereotyped words or prosody"],
              ["Sameness and rituals", "Distress at an **alternative route** to school; rigid rules; **repetitive questioning**, pacing a perimeter"],
              ["Restricted interests", "A toddler attached to a **pan or a piece of string**; a child preoccupied with **vacuum cleaners**; an adult writing out **timetables** for hours"],
              ["Sensory", "Extreme response to **sounds or textures**, excessive smelling or touching, **fascination with lights or spinning objects**, indifference to **pain, heat or cold**; rituals or restriction around **food** (may be the presenting feature)"]
            ] },
            { type: "callout", kind: "pearl", title: "Masking and camouflaging", text: "People without intellectual or language impairment may **suppress** repetitive behavior in public; rocking or finger flicking can be **self-soothing**. Many **mask** social difficulties at a cost: social contact is **exhausting**, concentration suffers and self-esteem drops. This lowers recognition, **perhaps especially in adult women**. Use longer assessments, naturalistic observation, and ask about the **toll** of social interaction (p. 61)." },
            { type: "defs", title: "Associated features (p. 62)", items: [
              ["Uneven abilities", "Even with average or high IQ, the profile is **uneven**; **adaptive skills are typically below measured IQ**."],
              ["Cognition", "**Theory-of-mind** deficits are common but not universal; **executive** deficits are common but nonspecific; weak **central coherence** (missing the big picture, overfocusing on detail)."],
              ["Motor", "Odd gait, clumsiness, **toe walking**."],
              ["Behavior", "**Self-injury** (head banging, wrist biting); disruptive behavior more common than in other disorders, including IDD."],
              ["Catatonia", "Catatonic-like slowing and “**freezing**” mid-action is common; a full catatonic episode (mutism, posturing, grimacing, **waxy flexibility**) can occur, with the highest risk in **adolescence**."]
            ] },
            { type: "compare", title: "Sex and gender (p. 65)", items: [
              { title: "Recognition gap", color: "case", points: ["Diagnosed **3–4 times** more often in males; **later** in females.", "Clinic females more often have **IDD and epilepsy**, suggesting girls without them go **unrecognized**."] },
              { title: "How females may differ", color: "guide", points: ["Better reciprocal conversation, more sharing of interests, better **integration** of verbal and nonverbal behavior, more situational **adjustment**.", "**Masking** by copying the dress, voice and manner of socially successful women.", "Fewer obvious repetitive behaviors; interests more **social** (a singer) or “normative” (**horses**) but unusual in **intensity**.", "Higher rates of **gender variance** than the general population."] }
            ] },
            { type: "callout", kind: "caution", title: "Scores do not make the diagnosis", text: "Standardized interviews, questionnaires and observation measures improve reliability, but ASD symptoms are **dimensional** with **no universally accepted cutoff**: the diagnosis is **clinical**, not dictated by a score (p. 62)." }
          ]
        },
        {
          id: "s1-asd-course",
          title: "Autism spectrum disorder: prevalence, course and risk",
          pages: "62–66",
          blocks: [
            { type: "table", caption: "Prevalence and sex ratio (pp. 62–63, 65)", head: ["Item", "Figure"], rows: [
              ["United States", "**1%–2%**, similar in children and adults"],
              ["US by group", "Lower reported in **African American (1.1%)** and **Latinx (0.8%)** vs **White (1.3%)** children, likely from under- and misdiagnosis"],
              ["Global", "Approaching **1%**; median **0.62%**, little variation by region"],
              ["Male:female", "About **3:1** in well-ascertained samples; **3–4×** more often diagnosed in males"]
            ] },
            { type: "update", kind: "post", year: "2025", title: "CDC ADDM: about 1 in 31 eight-year-olds", source: "Shaw KA et al., MMWR Surveillance Summaries 74(SS-2), April 17, 2025 (2022 surveillance year, 16 US sites)", text: "The CDC’s Autism and Developmental Disabilities Monitoring Network found ASD in **32.2 per 1,000** (about **1 in 31**) 8-year-olds in 2022, up from 1 in 36 in 2020, ranging from 9.7 per 1,000 to 53.1 per 1,000 across sites. Boys were about **3.4 times** as likely as girls. Prevalence was now **lowest among non-Hispanic White** children (27.7 per 1,000) and higher among Asian or Pacific Islander, American Indian or Alaska Native, Black and Hispanic children, the reverse of the pattern described in the 2022 manual. Children born in 2018 were identified earlier than those born in 2014. Rising figures largely reflect **better identification**; the DSM’s 1%–2% describes earlier surveys of the whole population." },
            { type: "flow", vertical: true, title: "Typical onset and course (pp. 63–64)", steps: [["0–12 months", "Lack of social interest in some infants; earlier signs if delays are severe", "guide"], ["12–24 months", "**Usually recognized**; declines in social or language skills typically occur here", "case"], ["Preschool and early school", "Symptoms **most marked**", "dx"], ["Later childhood", "Gains in some areas (e.g., more social interest)", "hy"], ["Adolescence", "Most improve, a few deteriorate; **catatonia** risk peaks", "drug"], ["Adulthood", "Learning continues; masking; first diagnosis is common", "pharm"]] },
            { type: "list", title: "Development and course (pp. 63–64)", items: [
              "Prospective studies show onset is usually tied to **declines** in critical social and communication behaviors in the **first 2 years**, which is unusual in other disorders and a useful **marker** of ASD.",
              "**Regression after at least 2 years of normal development** (formerly **childhood disintegrative disorder**) is rare and needs medical work-up for **continuous spike-waves during slow-wave sleep** and **Landau-Kleffner syndrome**, especially if self-care, toileting or motor skills are lost too.",
              "First signs often: **delayed language** with little social interest, pulling people by the hand without looking at them, carrying toys without playing, knowing the alphabet but **not answering to his name**; **deafness** is often suspected and ruled out.",
              "Preschoolers commonly like repetition, so judge restricted behavior by **type, frequency and intensity** (lining up objects for hours daily, distress if one is moved).",
              "ASD is **not degenerative**: learning and compensation continue throughout life.",
              "**First diagnosis in adulthood** is common (prompted by a child’s diagnosis or a breakdown at work or home). A compelling report of **sustained reciprocal friendships and good nonverbal skills** throughout childhood makes ASD much less likely, but **missing** history alone does not rule it out."
            ] },
            { type: "table", caption: "Risk and prognostic factors (p. 64)", head: ["Domain", "Detail"], rows: [
              ["Best prognostic factors", "Presence or absence of **IDD** and **language impairment** (**functional language by age 5** is a good sign), and additional mental health problems"],
              ["Epilepsy", "Goes with **greater intellectual disability** and lower verbal ability"],
              ["Environmental", "**Advanced parental age**, **extreme prematurity**, in utero **valproate** and other teratogens"],
              ["Heritability", "**37% to over 90%** from twin studies; a five-country cohort estimated **80%**"],
              ["Known genetic cause", "Up to **15%** of cases (de novo CNVs or gene mutations), **not fully penetrant**; most risk is **polygenic**"]
            ] },
            { type: "update", kind: "post", year: "2025", title: "Acetaminophen in pregnancy and leucovorin", source: "FDA announcement, September 22, 2025; ACOG and AAP statements, September 2025; Ahlqvist VH et al., JAMA 2024;331:1205–14", text: "In September 2025 the FDA began a **label change** for acetaminophen noting a possible **association** between use in pregnancy and later autism or ADHD, while stating that **a causal relationship has not been established**. ACOG said the change is not supported by the full body of evidence, and a sibling-controlled Swedish cohort of about 2.5 million children found **no association** once family factors were accounted for. The FDA also moved to relabel **leucovorin** (folinic acid) for **cerebral folate deficiency**; this is not an approval for autism itself. Expect residents and families to ask about both." },
            { type: "callout", kind: "culture", text: "Social norms differ, but people with ASD are impaired **against the norms of their own culture**. Diagnosis is often **delayed** in socially oppressed and racialized groups, and African American children are more often **misdiagnosed** with adjustment or conduct disorder (p. 65)." },
            { type: "list", title: "Suicide and functional consequences (pp. 65–66)", items: [
              "Higher risk of **suicide death**; children with impaired social communication had more suicidal thoughts, plans and self-harm with intent **by age 16**; adolescents and young adults have more **attempts**, even after adjusting for comorbidity.",
              "Routines, aversion to change and sensory sensitivities disrupt **eating, sleeping**, haircuts and dental care.",
              "Planning and organization problems hurt achievement **even with above-average IQ**; adult independence and employment are often poor, even without IDD.",
              "Premature mortality: deaths from **injury, poisoning and suicide** are higher. **Drowning is the leading cause of accidental death** in children with ASD.",
              "**Vocational rehabilitation** improves competitive employment for transition-age youth."
            ] }
          ]
        },
        {
          id: "s1-asd-ddx",
          title: "Autism spectrum disorder: differential and comorbidity",
          pages: "66–68",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 66–67)", head: ["Look-alike", "Key distinction", "Both?"], rows: [
              ["[[dx:adhd|ADHD]]", "ADHD can bring interrupting, loudness, ignoring personal space; **course** and **absence of restricted, repetitive behavior** separate them", "**Yes**, if attention problems exceed what is expected for **mental age**; ADHD is one of the commonest comorbidities"],
              ["[[dx:idd|IDD]] without ASD", "ASD if social communication is impaired **relative to nonverbal skills** (fine motor, nonverbal problem solving); IDD alone if there is **no discrepancy**", "**Yes**, with the discrepancy"],
              ["[[dx:language-disorder|Language disorder]]", "No abnormal **nonverbal** communication and no restricted, repetitive behavior", "Can co-occur"],
              ["[[dx:spcd|Social (pragmatic) communication disorder]]", "No restricted, repetitive behavior **now or in the past**", "**No**: ASD **supersedes** SPCD"],
              ["[[dx:selective-mutism|Selective mutism]]", "Early development normal; communicates well in some settings; **reciprocity intact** where mute; no repetitive behavior", "Rarely relevant"],
              ["[[dx:stereotypic-movement|Stereotypic movement disorder]]", "Stereotypies are **part of ASD**", "**Only** if stereotypies cause **self-injury** and become a **focus of treatment**"],
              ["**Rett syndrome**", "Autistic features during the **regressive phase (ages 1–4)** in girls usually fade afterward", "ASD only if **all** criteria are met"],
              ["Anxiety disorders", "Withdrawal and repetitive behavior can be **anxiety**; in ASD, **specific phobia** up to **30%**, social anxiety and agoraphobia up to **17%**", "**Yes**"],
              ["[[dx:ocd|OCD]]", "OCD compulsions answer **intrusive thoughts** to relieve anxiety; ASD repetitive behavior may be **pleasurable and reinforcing**", "**Yes**"],
              ["[[dx:schizophrenia|Schizophrenia]]", "Childhood-onset schizophrenia follows **normal or near-normal** development; **hallucinations and delusions** are not ASD features. Beware **concrete** answers (“Do you hear voices?” “Yes, on the radio”)", "**Yes**, when both are met"],
              ["Personality disorders", "Adults may look **schizotypal**, **schizoid** or narcissistic; the **early developmental course** (no imaginative play, repetitive behavior, sensory issues) decides", "Rarely"]
            ] },
            { type: "list", title: "Comorbidity (pp. 67–68)", items: [
              "Frequently with **IDD**, **language disorder**, specific learning difficulties and **developmental coordination disorder**.",
              "About **70%** have one comorbid mental disorder and **40%** two or more; **anxiety, depression and ADHD** are especially common.",
              "**ARFID** is a fairly frequent presenting feature; narrow food preferences may persist.",
              "In nonverbal people, changes in sleep, eating or challenging behavior should prompt a search for **anxiety, depression** or **pain** (medical or dental).",
              "Common medical conditions: **epilepsy** and **constipation**."
            ] },
            { type: "case", title: "Clinical vignette: the engineer’s first diagnosis", text: "A 34-year-old engineer comes after his son is diagnosed with autism. He has always found conversation exhausting, rehearses small talk, eats the same lunch daily and becomes distressed if his commute changes. As a boy he memorized bus timetables, had one friend who shared that interest and was teased for his flat voice. His marriage is strained because his wife says he never notices how she feels. He has no hallucinations or delusions.", point: "Lifelong reciprocity, nonverbal and relationship deficits (A: 3 of 3) with sameness and restricted interests (B: 2 of 4), childhood onset and current impairment: **autism spectrum disorder (F84.0)**, likely **level 1** in both domains, **without** intellectual or language impairment. Adult diagnosis prompted by a child’s diagnosis is common." }
          ]
        }
      ]
    },
    {
      title: "Attention-deficit/hyperactivity disorder",
      sections: [
        {
          id: "s1-adhd-criteria",
          title: "ADHD: the criteria, presentations and specifiers",
          pages: "68–70, 76",
          blocks: [
            { type: "criteria", title: "Attention-deficit/hyperactivity disorder in brief", code: "F90.x", pages: "68–70", items: [
              ["A", "A persistent pattern of **inattention and/or hyperactivity-impulsivity** that interferes with functioning or development:", ["**Inattention**: **six or more** of nine symptoms for at least **6 months**, inconsistent with developmental level and directly affecting social and academic or occupational activities;", "**Hyperactivity-impulsivity**: **six or more** of nine symptoms for at least **6 months**, same conditions."], "From **age 17**, **five** symptoms are enough in either domain. Symptoms must not be **solely** oppositional behavior, defiance, hostility or failure to understand instructions."],
              ["B", "**Several** symptoms present **before age 12**."],
              ["C", "**Several** symptoms present in **two or more settings** (home, school or work, friends or relatives, other activities)."],
              ["D", "Clear evidence that symptoms **interfere with or reduce the quality of** social, academic or occupational functioning."],
              ["E", "Not **exclusively** during schizophrenia or another psychotic disorder, and not better explained by another mental disorder (mood, anxiety, dissociative, personality, substance intoxication or withdrawal)."]
            ], specifiers: [
              ["Combined (F90.2)", "**Combined presentation**: A1 **and** A2 met for the past 6 months"],
              ["Inattentive (F90.0)", "**Predominantly inattentive presentation**: A1 met, A2 **not** met for the past 6 months"],
              ["Hyperactive/impulsive (F90.1)", "**Predominantly hyperactive/impulsive presentation**: A2 met, A1 **not** met for the past 6 months"],
              ["In partial remission", "Full criteria met before; **fewer** for the past 6 months, with **continuing impairment**"],
              ["Mild · moderate · severe", "From symptoms beyond the minimum and degree of impairment"]
            ] },
            { type: "compare", title: "The 18 symptoms, paraphrased (pp. 68–69)", items: [
              { title: "Inattention (A1)", color: "guide", points: ["a. **Careless mistakes**, misses details.", "b. Trouble **sustaining attention** (lectures, conversations, long reading).", "c. **Does not seem to listen** when spoken to directly.", "d. Does not **follow through**; leaves schoolwork, chores or duties unfinished.", "e. Poor **organization**: sequential tasks, belongings, time, deadlines.", "f. **Avoids sustained mental effort** (homework; reports, forms in adults).", "g. **Loses** things needed for tasks (keys, wallet, phone, books).", "h. Easily **distracted** (in adults, by unrelated thoughts).", "i. **Forgetful** in daily activities (errands, bills, appointments)."] },
              { title: "Hyperactivity-impulsivity (A2)", color: "case", points: ["a. **Fidgets**, taps, squirms.", "b. **Leaves seat** when expected to stay.", "c. **Runs or climbs** inappropriately (adolescents and adults: may be only **restlessness**).", "d. Cannot play or relax **quietly**.", "e. **“On the go,”** as if driven by a motor.", "f. **Talks excessively**.", "g. **Blurts out** answers; finishes others’ sentences.", "h. Trouble **waiting** his or her turn.", "i. **Interrupts or intrudes** (conversations, games, others’ things)."] }
            ] },
            { type: "flow", title: "The ADHD numbers", steps: [["6 / 5", "Symptoms per domain: **6** under 17, **5** from 17", "dx"], ["6 months", "Duration", "guide"], ["Before 12", "Several symptoms", "case"], ["2 settings", "Several symptoms", "hy"]], note: "Before DSM-5 (2013) the onset age was 7 and no adult threshold existed." },
            { type: "table", caption: "Severity and the residual categories (pp. 70, 76)", head: ["Term", "Meaning", "Code"], rows: [
              ["Mild", "Few symptoms beyond the minimum; **no more than minor** impairment", "—"],
              ["Moderate", "Between mild and severe", "—"],
              ["Severe", "Many symptoms beyond the minimum, or several **particularly severe**, or **marked** impairment", "—"],
              ["[[dx:other-specified-adhd|Other specified ADHD]]", "Subthreshold, **reason recorded** (e.g., “with insufficient inattention symptoms”)", "F90.8"],
              ["[[dx:unspecified-adhd|Unspecified ADHD]]", "Subthreshold, reason **not specified** or information insufficient", "F90.9"]
            ] },
            { type: "callout", kind: "exam", title: "Presentation is about the past 6 months", text: "A child with combined presentation who at 16 has **8 inattentive** but only **3** hyperactive symptoms now has **predominantly inattentive presentation (F90.0)**. If he had fallen to **4** inattentive symptoms with continuing impairment, the specifier would be **in partial remission**. The diagnosis is not lost when the presentation changes." },
            { type: "case", title: "Clinical vignette: the girl who daydreams", text: "A 9-year-old girl’s teacher says she stares out of the window, makes careless errors, loses her pencils and books and never finishes worksheets; her mother reports the same with chores, and she forgets what she was told to do. She is not disruptive, sits still and waits her turn. This has been true since first grade. Her grades are slipping, and testing shows average IQ and reading at grade level.", point: "Six or more inattentive symptoms, few hyperactive ones, onset before 12, home and school, impairing: **ADHD, predominantly inattentive presentation (F90.0)**. Girls more often present this way and are diagnosed later." }
          ]
        },
        {
          id: "s1-adhd-features",
          title: "ADHD: features, course and risk",
          pages: "70–73",
          blocks: [
            { type: "defs", title: "Reading the criteria (p. 70)", items: [
              ["Inattention", "Wandering off task, not following through, disorganization: **not** defiance or lack of comprehension."],
              ["Hyperactivity", "Excessive motor activity, fidgeting, tapping, talkativeness; in adults, **extreme restlessness** or wearing others out."],
              ["Impulsivity", "Hasty acts without forethought (**darting into the street**); wanting immediate reward; social intrusiveness; big decisions without considering consequences."],
              ["Why age 12", "Conveys a **substantial childhood presentation** without demanding exact recall; adult recall is **unreliable**, so get **collateral** information. No symptoms before 12 means **no ADHD**; symptoms first appearing **after 13** suggest another disorder or **substance** effects."],
              ["Why informants", "Symptoms vary by context and may **vanish** with frequent rewards, close supervision, novelty, interesting activities, **screens**, or **one-to-one** settings such as the **clinician’s office**."]
            ] },
            { type: "list", title: "Associated features (pp. 70–71)", items: [
              "**Emotional dysregulation**: quick to anger, easily frustrated, overreactive.",
              "Academic or work performance impaired even **without** a learning disorder.",
              "Neurocognitive deficits (working memory, set shifting, **reaction-time variability**, response inhibition, vigilance, planning) are **not** sensitive or specific enough for diagnosis.",
              "**Minor physical anomalies** (hypertelorism, high-arched palate, low-set ears) and **soft signs** may be more common; marked clumsiness is coded separately (DCD).",
              "Children with known-cause syndromes (**fragile X, 22q11 deletion**) get ADHD **if full criteria are met**."
            ] },
            { type: "table", caption: "Epidemiology (pp. 71–72)", head: ["Item", "Figure"], rows: [
              ["Children worldwide", "About **7.2%** (cross-national range **0.1%–10.2%**)"],
              ["Adults", "**2.5%** (cross-national meta-analysis)"],
              ["Higher in", "**Foster** children and **correctional** settings"],
              ["Male:female", "About **2:1** in children; **1.6:1** in adults"],
              ["Females", "More often **predominantly inattentive**"],
              ["Heritability", "About **74%**; no single gene; GWAS loci in evolutionarily constrained regions"]
            ] },
            { type: "flow", vertical: true, title: "How ADHD changes with age (p. 71)", steps: [["Toddler", "Excess activity may be noticed but is hard to tell from normal **before 4**", "guide"], ["Preschool", "**Hyperactivity** is the main sign", "case"], ["Elementary school", "**Inattention** becomes prominent; most often identified now", "dx"], ["Adolescence", "Running and climbing fade to **fidgeting** and inner restlessness", "hy"], ["Adulthood", "Inattention, restlessness, poor planning and **impulsivity** persist", "drug"]] },
            { type: "compare", title: "Risk factors (pp. 71–72)", items: [
              { title: "Temperament", color: "guide", points: ["Low behavioral inhibition and **effortful control**; negative emotionality; **novelty seeking** (not specific)."] },
              { title: "Environmental", color: "case", points: ["**Very low birth weight** and prematurity (the lower, the greater the risk).", "**Prenatal smoking** exposure, even after adjustment.", "Lead, encephalitis, prenatal **alcohol**: correlated, causation unknown.", "Diet in a **minority** of cases."] },
              { title: "Physiological", color: "hy", points: ["Consider **visual and hearing** problems, metabolic and nutritional causes.", "More common in **idiopathic epilepsy**."] },
              { title: "Course modifiers", color: "dx", points: ["Family interaction patterns **do not cause** ADHD but shape its course and secondary **conduct problems**."] }
            ] },
            { type: "callout", kind: "caution", title: "No test makes the diagnosis", text: "No biological marker is diagnostic. Early reports of raised **theta** and reduced **beta** EEG power were not confirmed, and meta-analyses of neuroimaging show **no** consistent differences: **no form of neuroimaging** can be used to diagnose ADHD (p. 72)." },
            { type: "callout", kind: "culture", text: "Prevalence differences between regions mostly reflect **methods** (which interview, whether and how impairment is required). In the United States, African American and Latinx youth are identified **less** often; ADHD symptoms may be mislabeled as **oppositional or disruptive** because of clinician bias, leading to overdiagnosis of disruptive disorders (p. 72)." },
            { type: "list", title: "Suicide and functional consequences (pp. 72–73)", items: [
              "A risk factor for **suicidal ideation and behavior** in children; in adults, more **attempts** when comorbid with mood, conduct or substance use disorders.",
              "Lower school performance; inattention links to **peer neglect**, hyperactivity-impulsivity to **peer rejection** and injury.",
              "Poor **job stability**, unemployment, interpersonal conflict; on average less schooling and lower vocational achievement.",
              "Higher risk of **conduct disorder** in adolescence and **antisocial personality disorder** in adulthood, and through them **substance use disorders** and **incarceration**.",
              "More **injuries**, **trauma and PTSD**, **traffic accidents**; **higher overall mortality**, mostly from accidents; possibly more **obesity and hypertension**."
            ] }
          ]
        },
        {
          id: "s1-adhd-ddx",
          title: "ADHD: differential and comorbidity",
          pages: "73–75",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 73–75)", head: ["Look-alike", "Key distinction"], rows: [
              ["Oppositional defiant disorder", "Resists tasks out of **negativity and defiance**, not because effort is hard to sustain; ADHD can **secondarily** bring oppositional attitudes"],
              ["Intermittent explosive disorder", "**Serious aggression** without attention problems; **rare in childhood**; can be diagnosed with ADHD"],
              ["[[dx:stereotypic-movement|Stereotypic movement disorder]]", "Movements **fixed and repetitive** (rocking, self-biting) vs ADHD’s **generalized** fidgeting"],
              ["[[dx:tourette|Tourette’s disorder]]", "Multiple tics can look like fidgetiness; **prolonged observation** may be needed"],
              ["[[dx:sld|Specific learning disorder]]", "Inattention only when the **impaired skill** is required"],
              ["[[dx:idd|IDD]]", "Symptoms in an academic setting **beyond the child’s ability**, absent in nonacademic tasks; ADHD needs symptoms **excessive for mental age**"],
              ["[[dx:asd|ASD]]", "ASD: social **disengagement and indifference** to facial and tonal cues; tantrums at **change**. ADHD: peer rejection; tantrums from **impulsivity**"],
              ["[[dx:rad|Reactive attachment disorder]]", "Social disinhibition without the full ADHD cluster, plus lack of **enduring relationships**"],
              ["Anxiety disorders", "Inattention from **worry and rumination**; ADHD inattention comes from attraction to **novel, stimulating** activities"],
              ["[[dx:ptsd|PTSD]]", "Under age 6, PTSD shows as restlessness, irritability and poor concentration; take a **trauma history**"],
              ["Depressive disorders", "Poor concentration **only during** the depressive episode"],
              ["Bipolar disorder", "**Episodic** (at least **4 days** for hypomania, even in children) with elevated mood and grandiosity; **rare before adolescence**. Same-day mood swings in ADHD are not episodes"],
              ["[[dx:dmdd|DMDD]]", "Pervasive irritability; most children with DMDD **also** meet ADHD criteria (diagnose both)"],
              ["Substance use disorders", "Need evidence of ADHD **before** substance use, from informants or records"],
              ["Personality disorders", "ADHD lacks **fear of abandonment, self-injury and extreme ambivalence**"],
              ["Psychotic disorders", "Not diagnosed if symptoms occur **only** during psychosis"],
              ["Medication-induced symptoms", "Bronchodilators, **isoniazid**, antipsychotics (**akathisia**), **thyroid replacement**: other specified or unspecified other (or unknown) substance-related disorder"],
              ["[[dx:major-ncd|Neurocognitive disorders]]", "NCD is a **decline**, usually with **adult onset**; ADHD was present **before 12**"]
            ] },
            { type: "table", caption: "Comorbidity figures (p. 75)", head: ["Co-occurring condition", "Figure or note"], rows: [
              ["Oppositional defiant disorder", "About **half** of combined presentation; about **a quarter** of inattentive presentation"],
              ["Conduct disorder", "About **a quarter** of children or adolescents with combined presentation"],
              ["DMDD", "Most with DMDD meet ADHD criteria; a **smaller** share of ADHD meets DMDD"],
              ["Anxiety, MDD, OCD, IED", "A **minority**, but more than the general population"],
              ["Substance use disorders", "Relatively more frequent, but present in only a **minority** of adults with ADHD"],
              ["Females", "Higher rates of ODD, **ASD**, personality and substance use disorders"],
              ["Sleep", "**A quarter to a half** report sleep problems: insomnia, circadian disorders, **sleep-disordered breathing**, **restless legs**; daytime sleepiness may meet hypersomnolence disorder"],
              ["Medical", "**Allergy and autoimmune** disorders, **epilepsy**"]
            ] },
            { type: "callout", kind: "key", title: "Ask about sleep and trauma first", text: "Before labeling inattention as ADHD, screen for **sleep-disordered breathing**, **trauma**, **anxiety**, **hearing or vision problems**, **substance use** and **medications**. Then gather symptoms from **two settings** and check that several were present **before 12** (pp. 72–75)." }
          ]
        }
      ]
    },
    {
      title: "Specific learning disorder",
      sections: [
        {
          id: "s1-sld-criteria",
          title: "Specific learning disorder: criteria, domains and severity",
          pages: "76–80",
          blocks: [
            { type: "criteria", title: "Specific learning disorder in brief", code: "F81.0 · F81.81 · F81.2", pages: "76–78", items: [
              ["A", "Difficulty learning and using academic skills, with **at least one** of six symptoms persisting **at least 6 months despite interventions** targeting them:", ["**inaccurate or slow, effortful word reading**;", "trouble understanding **what is read**;", "**spelling** difficulty;", "**written expression** difficulty (grammar, punctuation, organization, clarity);", "trouble with **number sense, number facts or calculation**;", "trouble with **mathematical reasoning**."]],
              ["B", "Affected skills are **substantially and quantifiably below** expectations for **chronological age**, interfering with school, work or daily activities, confirmed by **individually administered standardized achievement tests** and comprehensive assessment.", [], "From **age 17**, a documented **history** of impairing learning difficulty can replace the standardized assessment."],
              ["C", "Begins in the **school-age years**, though it may not show fully until demands exceed capacity (**timed tests**, long reports on tight deadlines, heavy loads)."],
              ["D", "Not better accounted for by **intellectual disability**, uncorrected **vision or hearing**, other mental or neurological disorders, **psychosocial adversity**, lack of proficiency in the **language of instruction**, or **inadequate instruction**."]
            ], specifiers: [
              ["Reading (F81.0)", "**With impairment in reading**: Word reading accuracy; reading rate or fluency; reading comprehension. **Dyslexia** is an alternative term for the decoding, word-recognition and spelling pattern."],
              ["Writing (F81.81)", "**With impairment in written expression**: Spelling accuracy; grammar and punctuation; clarity or organization."],
              ["Math (F81.2)", "**With impairment in mathematics**: Number sense; memorizing arithmetic facts; accurate or fluent calculation; accurate math reasoning. **Dyscalculia** is an alternative term for the number-processing pattern."],
              ["Mild · moderate · severe", "See the severity table"]
            ], note: "The four criteria are met by a **clinical synthesis** of history (developmental, medical, family, educational), school reports and psychoeducational assessment. Code **each impaired domain separately**, with its subskills." },
            { type: "table", caption: "Severity (p. 78, paraphrased)", head: ["Level", "Domains", "Support needed"], rows: [
              ["**Mild**", "One or two domains", "Can compensate or function well **with accommodations or support**, especially at school"],
              ["**Moderate**", "One or more, **marked**", "Unlikely to become proficient without **intervals of intensive, specialized teaching**; some accommodations for part of the day"],
              ["**Severe**", "**Several** domains", "Unlikely to learn the skills without **ongoing intensive individualized teaching** for most of school; may not manage all activities even with accommodations"]
            ] },
            { type: "defs", title: "The four core features (pp. 78–80)", items: [
              ["1. Persistent difficulty", "Restricted progress (not catching up) for **at least 6 months despite extra help** at home or school. Academic skills, unlike talking or walking, must be **explicitly taught**."],
              ["2. Well below age level", "Low achievement for age, or average achievement sustained only by **extraordinary effort or support**. For greatest certainty, scores at least **1.5 SD below the mean** (standard score **78 or less**, below the **7th percentile**); with converging evidence a more lenient **1.0 SD** may be used."],
              ["3. Early school years", "Most show difficulties early; some only in **later school years** when demands rise."],
              ["4. Specific", "Not explained by IDD (IQ generally **above about 70 ± 5**), external disadvantage (poverty, absenteeism, poor schooling), neurological, motor, vision or hearing disorders; may be confined to **one** skill. Hence **unexpected academic underachievement**."]
            ] },
            { type: "callout", kind: "pearl", title: "Twice-exceptional students", text: "SLD can occur in **intellectually gifted** people who cope through compensation and effort until **timed tests** or heavy demands expose the problem. Their achievement is low relative to their **own ability** or other domains, not to the population mean (p. 80)." },
            { type: "steps", title: "Recording example (p. 78)", items: [
              ["Reading", "F81.0 specific learning disorder with impairment in reading, with impairment in **reading rate or fluency** and **reading comprehension**."],
              ["Mathematics", "F81.2 specific learning disorder with impairment in mathematics, with impairment in **accurate or fluent calculation** and **accurate math reasoning**."],
              ["Rule", "Two domains → **two codes**, each with its own subskills."]
            ] },
            { type: "callout", kind: "caution", title: "Not needed for diagnosis", text: "Cognitive-processing tests, neuroimaging and genetic testing are **not useful for diagnosis** at present, and a cognitive-processing assessment is **not required** (p. 81). Reassessment is rarely needed because SLD usually **persists**." }
          ]
        },
        {
          id: "s1-sld-course",
          title: "Specific learning disorder: course, risk and differential",
          pages: "80–85",
          blocks: [
            { type: "table", caption: "How it shows at each age (pp. 81–82)", head: ["Age", "Typical signs"], rows: [
              ["Preschool", "No interest in **rhyming** or sound games; trouble learning nursery rhymes, letter names, numbers, days; baby talk"],
              ["Kindergarten", "Cannot recognize or write letters or **own name**; trouble splitting words into **syllables** (cow-boy), recognizing rhymes, linking letters with sounds"],
              ["Grades 1–3", "Cannot read one-syllable words (mat, top) or irregular words (said, two); errors like “big” for “got”; trouble with **number facts**"],
              ["Grades 4–6", "Mispronounces long words (“conible” for convertible); confuses sound-alikes; guesses after the first part (“clock” for clover); **fears reading aloud**"],
              ["Adolescence and adulthood", "Decoding may be mastered but reading stays **slow and effortful**; poor comprehension, written expression, spelling and math; **avoids** reading; uses audiobooks or text-to-speech"]
            ] },
            { type: "table", caption: "Epidemiology and risk (pp. 81–84)", head: ["Item", "Figure"], rows: [
              ["Prevalence", "**5%–15%** of school-age children (Brazil, Northern Ireland, US) across reading, writing and math; adult prevalence **unknown**"],
              ["Male:female", "About **2:1 to 3:1**, not explained by ascertainment bias"],
              ["Family risk", "First-degree relatives: **4–8 times** for reading and **5–10 times** for math"],
              ["Heritability", "High (**over 0.6**) for reading ability and disability, in alphabetic and nonalphabetic languages"],
              ["Neurofibromatosis type 1", "Up to **75%** have a learning disorder"],
              ["Other risks", "**Preterm birth** or very low birthweight; low SES; prenatal or early exposure to **air pollution, nicotine, flame retardants (PBDEs, PCBs), lead, manganese**"],
              ["Predictors", "Preschool **language impairment**, poor phonological awareness, working memory and **rapid naming**; comorbid **ADHD** predicts worse mental health"]
            ] },
            { type: "callout", kind: "culture", text: "In **English**, the hallmark of reading disorder is **inaccurate and slow** single-word reading; in languages with more direct sound-letter mapping (**Spanish, German**) and in nonalphabetic languages (**Chinese, Japanese**) it is **slow but accurate** reading. In English-language learners, assess proficiency in the **first language** too; speaking a different language at home does **not** itself cause phonological deficits (pp. 83–84)." },
            { type: "list", title: "Suicide and consequences (p. 84)", items: [
              "Poor reading at age 15 was linked to **suicidal thoughts and behavior**; adults with SLD had more lifetime **suicide attempts**, especially with **domestic violence exposure** or **major depression**.",
              "Lower attainment, **dropout**, unemployment and lower income; **social and emotional support** predicts better outcomes.",
              "**Anxiety**, including somatic complaints and panic attacks, is common across the lifespan."
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 84–85)", head: ["Look-alike", "Key distinction", "Both?"], rows: [
              ["Normal variation", "Lack of opportunity, poor instruction or learning in a **second language**: difficulties resolve with adequate teaching", "—"],
              ["[[dx:idd|IDD]]", "General learning problems with IQ **below about 70 ± 5**", "**Yes**, only if learning problems **exceed** those expected for the IDD"],
              ["Neurological or sensory disorders", "Pediatric stroke, TBI, hearing or vision loss: **abnormal neurological examination**", "—"],
              ["[[dx:major-ncd|Neurocognitive disorders]]", "SLD shows **no marked decline** from a former state, even if first noticed in adulthood", "—"],
              ["[[dx:adhd|ADHD]]", "ADHD impairs **performing** skills, not **learning** them", "**Yes**: co-occurrence is more than chance"],
              ["Psychotic disorders", "Cognitive **decline** (often rapid); reading deficits in SLD exceed those predicted from schizophrenia", "**Yes**"]
            ] },
            { type: "case", title: "Clinical vignette: the bright boy who hates reading aloud", text: "An 11-year-old boy with excellent spoken vocabulary and strong math reads aloud slowly, guessing words from their first letters, and his spelling is poor. A year of small-group phonics help has made little difference. Individually administered testing shows word reading and fluency standard scores of 74 and 76, average reading comprehension when text is read to him, and average IQ. Vision and hearing are normal.", point: "Persistent decoding and fluency problems **despite 6 months of intervention**, scores more than **1.5 SD** below the mean, normal intellect and senses: **specific learning disorder with impairment in reading (F81.0)**, word reading accuracy and reading rate or fluency (the dyslexia pattern). Add **F81.81** if spelling meets the written-expression criteria." }
          ]
        }
      ]
    },
    {
      title: "Motor disorders",
      sections: [
        {
          id: "s1-dcd",
          title: "Developmental coordination disorder",
          pages: "85–88",
          blocks: [
            { type: "criteria", title: "Developmental coordination disorder in brief", code: "F82", pages: "85–86", items: [
              ["A", "Acquiring and executing **coordinated motor skills** is substantially below expectations for age and opportunity: **clumsiness** (dropping or bumping into things) and **slow, inaccurate** motor performance (catching, scissors, cutlery, **handwriting**, riding a bike, sports)."],
              ["B", "The deficit **significantly and persistently** interferes with age-appropriate daily activities (self-care) and affects school productivity, prevocational and vocational activities, leisure and play."],
              ["C", "Onset in the **early developmental period**."],
              ["D", "Not better explained by **IDD** or **visual impairment**, and not due to a **neurological condition affecting movement** (cerebral palsy, muscular dystrophy, degenerative disorder)."]
            ] },
            { type: "defs", title: "Key points (pp. 86–87)", items: [
              ["Diagnosis", "Clinical synthesis of history, **physical and neurological examination**, **vision** examination, school or work reports and standardized motor tests."],
              ["Age", "Usually **not diagnosed before age 5**: motor skills vary, measurement is unstable and other causes may not have shown."],
              ["With IDD", "Motor problems must **exceed** what mental age explains; there is **no IQ cutoff or discrepancy** criterion."],
              ["Handwriting", "Often affected; separated from learning disorder by the **motoric** emphasis."],
              ["Subtypes", "None formally; may be mainly **gross** or **fine** motor."],
              ["Other names", "**Childhood dyspraxia**, specific developmental disorder of motor function, **clumsy child syndrome**."],
              ["Soft signs", "**Choreiform** movements of unsupported limbs and **mirror movements** are “overflow” signs of immaturity, not abnormalities; their diagnostic role is unclear."]
            ] },
            { type: "table", caption: "Figures (p. 87)", head: ["Item", "Figure"], rows: [
              ["Prevalence, ages 5–11", "**5%–8%** cross-nationally; **7%–8%** in Canada, Sweden and Taiwan"],
              ["UK, age 7", "**1.8%** severe and **3%** probable DCD"],
              ["Male:female", "Between **2:1 and 7:1**"],
              ["Persistence", "Problems continue through adolescence in about **50%–70%**"],
              ["Risk", "**Prematurity**, low birth weight, prenatal **alcohol**; possible **cerebellar** dysfunction and visual-motor deficits"]
            ] },
            { type: "table", caption: "Differential and comorbidity (p. 88)", head: ["Look-alike", "Key distinction"], rows: [
              ["Motor impairment from a medical condition", "Cerebral palsy, cerebellar lesions, **neuromuscular** disorders, visual impairment: extra findings on **neurological examination**"],
              ["[[dx:idd|IDD]]", "Diagnose DCD as well only if motor problems **exceed** the intellectual disability"],
              ["[[dx:adhd|ADHD]]", "Falls and bumping from **distractibility and impulsiveness**; diagnose both if both are met. ADHD is the **most frequent** comorbidity (about **50%**), and the pair is **more impairing** than ADHD alone"],
              ["[[dx:asd|ASD]]", "**Lack of interest** in ball games lowers test scores without reflecting motor competence; co-occurrence is common"],
              ["**Joint hypermobility syndrome**", "Hyperextensible joints, often with **pain**, can mimic DCD; also a comorbidity"]
            ] },
            { type: "callout", kind: "key", title: "Consequences", text: "Less participation in **team play and sports**, poor **self-esteem**, emotional and behavioral problems, lower achievement, poor **fitness**, less physical activity and **obesity**, and poorer quality of life (p. 88)." }
          ]
        },
        {
          id: "s1-stereotypic",
          title: "Stereotypic movement disorder",
          pages: "89–92",
          blocks: [
            { type: "criteria", title: "Stereotypic movement disorder in brief", code: "F98.4", pages: "89", items: [
              ["A", "**Repetitive, seemingly driven, apparently purposeless** motor behavior (hand shaking or waving, **body rocking, head banging, self-biting**, hitting oneself)."],
              ["B", "It **interferes** with social, academic or other activities and **may cause self-injury**."],
              ["C", "Onset in the **early developmental period**."],
              ["D", "Not due to a **substance** or **neurological condition**, and not better explained by another neurodevelopmental or mental disorder (**trichotillomania, OCD**)."]
            ], specifiers: [
              ["With self-injury", "**With self-injurious behavior** (or behavior that **would** injure without preventive measures)"],
              ["Without self-injury", "**Without self-injurious behavior**: interference without injury"],
              ["Associated condition", "**Associated with a known genetic or other medical condition, neurodevelopmental disorder, or environmental factor**, e.g., **Lesch-Nyhan syndrome**, IDD, intrauterine alcohol; code it as well"],
              ["Mild", "Easily **suppressed** by a sensory stimulus or distraction"],
              ["Moderate", "Needs explicit **protective measures** and behavioral modification"],
              ["Severe", "**Continuous monitoring** and protection to prevent serious injury"]
            ] },
            { type: "list", title: "What it looks like (pp. 89–90)", items: [
              "Often **rhythmic** movements of the head, hands or body; each person has a **“signature”** pattern.",
              "Non-self-injurious: rocking, bilateral **hand flapping** or rotating, finger flicking in front of the face, head nodding; **mouth stretching** with arm movements.",
              "Self-injurious: head banging, face slapping, **eye poking** (especially with **visual impairment**), biting hands or lips.",
              "Typically developing children usually **stop** when distracted or when attention is drawn to it; children with neurodevelopmental disorders respond less.",
              "Some show **self-restraint**: sitting on hands, wrapping arms in clothing.",
              "Movements may **reduce anxiety**, so “purposeless” means **apparently** purposeless.",
              "In children aged **1–3**, stereotypies may signal an **undetected** neurodevelopmental problem."
            ] },
            { type: "table", caption: "Figures (pp. 90–91)", head: ["Item", "Figure"], rows: [
              ["Simple stereotypies in young typical children", "**5%–19%** (UK, US)"],
              ["Complex stereotypies", "About **3%–4%**"],
              ["IDD (high-income countries)", "**4%–16%** have stereotypy and self-injury; higher in **severe** IDD"],
              ["IDD in residential facilities", "**10%–15%** may have stereotypic movement disorder with self-injury"],
              ["Onset of complex stereotypies", "About **80% before 24 months**, 12% at 24–35 months, 8% at 36 months or later"],
              ["Anatomy", "Reduced **putamen** volume; premotor–posterior putamen habit circuits"]
            ] },
            { type: "table", caption: "Stereotypies versus tics (pp. 91–92, 97)", head: ["Feature", "Stereotypies", "Tics"], rows: [
              ["Onset", "**Before 3**", "Mean **4–6 years**"],
              ["Pattern", "**Fixed**, consistent", "**Variable**, change over time"],
              ["Body parts", "Arms, hands, **whole body**", "Eyes, face, head, shoulders"],
              ["Rhythm and duration", "**Rhythmic**, prolonged (seconds to minutes)", "Brief, rapid, **random**, fluctuating"],
              ["Experience", "**Ego-syntonic**: children enjoy them", "Usually **ego-dystonic**"],
              ["Premonitory urge", "**Absent**", "**Present**; tics wax and wane"],
              ["Distraction", "Reduces them", "**Also** reduces them"]
            ] },
            { type: "table", caption: "Other differentials (pp. 91–92)", head: ["Look-alike", "Key distinction"], rows: [
              ["Normal development", "Simple stereotypies and **sleep-transition rocking** are common in infancy; easily suppressed, no distress, no effect on routine"],
              ["[[dx:asd|ASD]]", "Social communication deficits are absent in SMD; with ASD present, diagnose SMD **only** for self-injury or stereotypies severe enough to be a **focus of treatment**"],
              ["[[dx:ocd|OCD]]", "Driven by **obsessions** or rigid rules"],
              ["[[dx:trichotillomania|Trichotillomania]] and excoriation disorder", "Body-focused behaviors are **not apparently purposeless**, not necessarily rhythmic, and usually begin **around puberty**"],
              ["Neurological conditions", "Exclude habits, mannerisms, **paroxysmal dyskinesias**, benign hereditary chorea, myoclonus, dystonia, tics; **tardive dyskinesia** has a neuroleptic history and oro-facial movements and does not cause self-injury"],
              ["Neurogenetic syndromes", "**Lesch-Nyhan** (self-mutilation of fingers and lips), **Rett** and **Cornelia de Lange** (hand-to-mouth self-injury), fragile X, **Smith-Magenis**: record “SMD associated with…”"],
              ["Substance-induced", "Skin picking with **amphetamine** use is substance/medication-induced OCRD, not SMD"],
              ["Functional (conversion) stereotypies", "**Sudden onset**, distractibility, changing pattern, other functional neurological symptoms"]
            ] },
            { type: "callout", kind: "pearl", title: "Look for pain", text: "Stereotypic behavior can be driven by a **painful medical condition** (ear infection, dental problems, **gastroesophageal reflux**), and by social isolation, stress or fear. Comorbidities include **ADHD**, motor coordination problems, tics and anxiety (pp. 91–92)." }
          ]
        },
        {
          id: "s1-tic-criteria",
          title: "Tic disorders: the criteria and the hierarchy",
          pages: "93–95",
          blocks: [
            { type: "p", text: "A **tic** is a **sudden, rapid, recurrent, nonrhythmic** motor movement or vocalization (p. 93). The three specific tic disorders differ only in **which tics** (motor, vocal or both) and **how long** (more or less than 1 year since the **first** tic). All require **onset before 18** and no substance or medical cause." },
            { type: "table", caption: "The three tic disorders (p. 93, paraphrased)", head: ["Criterion", "Tourette’s disorder (F95.2)", "Persistent (chronic) motor or vocal (F95.1)", "Provisional (F95.0)"], rows: [
              ["A. Tics", "**Multiple motor and at least one vocal**, at some time, not necessarily together", "Single or multiple **motor or vocal**, **not both**", "Single or multiple motor **and/or** vocal"],
              ["B. Duration", "**More than 1 year** since first tic; may wax and wane", "**More than 1 year** since first tic", "**Less than 1 year** since first tic"],
              ["C. Onset", "Before **18**", "Before **18**", "Before **18**"],
              ["D. Cause", "Not a substance (**cocaine**) or medical condition (**Huntington’s disease**, postviral encephalitis)", "Same", "Same"],
              ["E. Hierarchy", "—", "**Never** met Tourette’s criteria", "**Never** met Tourette’s or persistent criteria"],
              ["Specifier", "—", "**With motor tics only** or **with vocal tics only**", "—"]
            ] },
            { type: "flow", title: "The hierarchy (pp. 93–94)", steps: [["Tourette’s disorder", "Motor + vocal, >1 year", "dx"], ["Persistent tic disorder", "Motor **or** vocal, >1 year", "case"], ["Provisional tic disorder", "Any tics, <1 year", "guide"], ["Other specified / unspecified", "Atypical, late onset, or known cause", "hy"]], note: "Once a higher diagnosis has been met, a lower one can **never** be given (Criterion E)." },
            { type: "defs", title: "Reading the criteria (pp. 94–95)", items: [
              ["Tic-free intervals", "Tics wax and wane; weeks to months tic-free do not reset the clock. **More than 1 year since first onset** means persistent, whatever the gaps."],
              ["Age 18", "Average onset **4–6 years**; new tics in adulthood are **exceedingly rare** and suggest **cocaine**, a CNS insult or a **functional** disorder. Many adolescents and adults recall **milder childhood tics** when asked carefully."],
              ["Known cause", "Strong evidence of a plausible, proximal, probable cause (history, exam, labs): use **other specified tic disorder**."],
              ["Motor versus vocal", "Both kinds are required **only** for Tourette’s; they need **not** be present at the same time."]
            ] },
            { type: "table", caption: "Simple and complex tics (p. 94)", head: ["Type", "Motor", "Vocal"], rows: [
              ["**Simple**", "Eye blinks, grimaces, shoulder shrugs, extending a limb", "Throat clearing, sniffing, chirps, barks, grunts"],
              ["**Complex**", "Combinations (head turn plus shrug), purposeful-looking gestures; **echopraxia** (imitating movements); **copropraxia** (obscene or taboo gestures)", "Words or partial words: **palilalia** (repeating one’s own words), **echolalia** (repeating the last heard word), **coprolalia** (obscenities or slurs)"]
            ] },
            { type: "callout", kind: "pearl", title: "Coprolalia is uncommon and has no prosody", text: "Coprolalia is an **abrupt, sharp bark or grunt** utterance, lacking the prosody of ordinary angry speech (p. 94). Most people with Tourette’s **never** have it; **eye blinking** is the classic first tic. Talking about tics, or seeing someone else’s gesture, can **trigger** tics, which teachers or police may misread as deliberate." },
            { type: "defs", title: "The premonitory urge (pp. 94–95)", items: [
              ["What", "A localized uncomfortable sensation **before** the tic, and an **urge** to tic."],
              ["Consequence", "Tics feel **involuntary**, yet many can be **suppressed** for a while; some must be done **“just right”** or repeated; **relief** follows."],
              ["Why it matters", "It separates tics from **stereotypies, myoclonus and chorea**, and it is the basis of behavioral treatment (outside the DSM)."]
            ] },
            { type: "case", title: "Clinical vignette: the sniff that would not stop", text: "A 9-year-old boy began blinking hard at age 6; over the next two years this was replaced by head jerks and shoulder shrugs. For the past 8 months he has also sniffed and cleared his throat many times a day, though an allergy work-up was negative. He says he feels an itch in his throat before sniffing and can hold it in at church but then has a burst afterward. He takes no medication or drugs.", point: "Multiple motor tics and at least one vocal tic, more than **1 year since the first tic**, onset before 18, no other cause: **Tourette’s disorder (F95.2)**. The vocal tics need not have lasted a year themselves, and the two kinds need not occur together." }
          ]
        },
        {
          id: "s1-tic-course",
          title: "Tic disorders: course, risk and differential",
          pages: "95–98",
          blocks: [
            { type: "table", caption: "Figures (pp. 95–96)", head: ["Item", "Figure"], rows: [
              ["US clinically identified cases", "About **3 per 1,000**; lower among African American and Latinx children (access to care)"],
              ["Tourette’s disorder, Canada", "**3–9 per 1,000** school-age children"],
              ["Male:female", "**2:1 to 4:1**; no sex difference in kinds of tics, onset or course"],
              ["Onset", "**4–6 years**; **eye blinking** is characteristic"],
              ["Peak severity", "Ages **10–12**, then decline in adolescence; a minority stay severe or worsen"],
              ["Heritability", "**70%–85%**, equal in males and females; shared genetics with **OCD, ADHD** and ASD"],
              ["Suicide (Swedish cohort)", "Attempts **OR 3.86**, deaths **OR 4.39** after adjusting for comorbidity; about **1 in 10** youth with persistent tic disorder has suicidal thoughts or behavior"]
            ] },
            { type: "compare", title: "Risk and course modifiers (pp. 95–96)", items: [
              { title: "Environmental", color: "case", points: ["**Advanced paternal age**.", "Pre- and perinatal events: impaired fetal growth, maternal fever, **maternal smoking**, severe maternal stress, preterm birth, **breech**, **cesarean** delivery."] },
              { title: "Immune", color: "guide", points: ["Higher risk of **autoimmune** disease (e.g., **Hashimoto’s**).", "Neuroinflammation matters in a subset (e.g., **Sydenham’s chorea**); the role of infection in **PANS/PANDAS** is still uncertain."] },
              { title: "What changes tics", color: "hy", points: ["Worse with **anxiety, excitement, exhaustion** (tests, exciting events).", "Better during **calm, focused** activity that needs attention and motor control."] }
            ] },
            { type: "list", title: "Co-occurring conditions over time (pp. 95, 97–98)", items: [
              "Prepubertal children: **ADHD**, **OCD** and **separation anxiety**.",
              "Teenagers and adults: **mood, anxiety and substance use** disorders.",
              "**ADHD** and **OCD** often cause **more impairment** than the tics; many people with mild or moderate tics have no impairment and may not notice them.",
              "Tic-related OCD starts **earlier** and features **symmetry and exactness** and taboo thoughts (aggressive, sexual, religious).",
              "Rare injuries: **eye injury**, orthopedic and neurological injury (disc disease) from forceful movements."
            ] },
            { type: "table", caption: "Differential diagnosis (p. 97)", head: ["Look-alike", "Key distinction"], rows: [
              ["Motor **stereotypies**", "Onset **before 3**, prolonged, **rhythmic**, predictable, **no premonitory urge**, stop with distraction"],
              ["**Chorea**", "Rapid, **random, continual**, irregular, usually bilateral, worse with voluntary action"],
              ["**Dystonia**", "Sustained co-contraction of agonists and antagonists causing **twisted posture**; absent in sleep"],
              ["**Paroxysmal dyskinesias**", "Episodic dystonic or choreoathetoid movements **triggered by voluntary movement or exertion**"],
              ["**Myoclonus**", "Sudden, unidirectional; **faster**, **not suppressible**, **no urge**; can occur in sleep"],
              ["[[dx:ocd|OCD]]", "Compulsions answer an **obsession** to reduce anxiety; complex tics follow a **“just right”** or symmetry need"],
              ["Body-focused repetitive behaviors", "Hair pulling, skin picking, nail biting are **more goal-directed and complex**"],
              ["**Functional tic disorder**", "**“Tic attacks”** lasting **15 minutes to hours**; sudden onset outside the usual age"]
            ] },
            { type: "update", kind: "post", year: "2026", title: "Ecopipam under FDA review", source: "Tourette Association of America update, September 2026; Teva press releases, 2026", text: "**Ecopipam**, a first-in-class **dopamine D1 receptor antagonist**, is under FDA **priority review** for **pediatric Tourette syndrome**, with an action date expected in the **first quarter of 2027**. It is **not approved** as of October 2026. The currently FDA-approved drugs for Tourette’s remain **haloperidol, pimozide and aripiprazole** (outside the DSM)." },
            { type: "defs", title: "Other specified and unspecified tic disorder (p. 98)", items: [
              ["Other specified (F95.8)", "Tic symptoms with distress or impairment, not meeting full criteria, **reason recorded**, e.g., **“with onset after age 18 years”**; also for tics with a **known cause**."],
              ["Unspecified (F95.9)", "Reason **not specified**, or information is **insufficient**."]
            ] }
          ]
        }
      ]
    },
    {
      title: "Other disorders and putting it together",
      sections: [
        {
          id: "s1-other-nd",
          title: "Other specified and unspecified neurodevelopmental disorder",
          pages: "99",
          blocks: [
            { type: "compare", title: "The chapter’s residual categories (p. 99)", items: [
              { title: "Other specified neurodevelopmental disorder (F88)", color: "guide", points: ["Neurodevelopmental symptoms causing **impairment** without full criteria for any disorder in the chapter.", "The clinician **records the reason**.", "Example: **neurodevelopmental disorder associated with prenatal alcohol exposure** (ND-PAE): developmental disabilities after in utero alcohol exposure."] },
              { title: "Unspecified neurodevelopmental disorder (F89)", color: "case", points: ["Same threshold, but the reason is **not given**.", "Includes **insufficient information**, e.g., **emergency room** settings."] }
            ] },
            { type: "callout", kind: "exam", title: "Pick the narrowest residual first", text: "If the subthreshold picture is clearly ADHD-like, use **other specified ADHD (F90.8)**; if tic-like, **other specified tic disorder (F95.8)**; if communication, **unspecified communication disorder (F80.9)**. Use the general **F88 / F89** only when the presentation does not fit one family. Remember **F88** also means **global developmental delay**." },
            { type: "update", kind: "post", year: "2026", title: "Not in Section II: ND-PAE criteria", source: "DSM-5-TR Section III, Conditions for Further Study; clinical teaching", text: "Proposed criteria for **ND-PAE** appear in Section III as a **condition for further study** (impaired neurocognition, self-regulation and adaptive functioning after more than minimal prenatal alcohol exposure). In practice it is coded through **other specified neurodevelopmental disorder (F88)**. Fetal alcohol spectrum disorder (FASD) frameworks used by pediatricians are **outside the DSM**." }
          ]
        },
        {
          id: "s1-synthesis",
          title: "Putting it together: ages, thresholds and double diagnoses",
          pages: "35–99",
          blocks: [
            { type: "ladder", title: "Ages that matter (years)", ticks: [[0, "0"], [16.7, "3"], [27.8, "5"], [66.7, "12"], [100, "18"]], rows: [
              { label: "Stereotypies", dx: "stereotypic-movement", from: 0, to: 16.7, color: "drug", span: "Usually before 3" },
              { label: "ASD", dx: "asd", from: 5.6, to: 11.1, color: "dx", span: "Seen at 12–24 mo" },
              { label: "Global delay", dx: "gdd", from: 0, to: 27.8, color: "guide", span: "Under 5" },
              { label: "Stuttering", dx: "stuttering", from: 11.1, to: 38.9, color: "case", span: "Onset 2–7" },
              { label: "ADHD", dx: "adhd", from: 0, to: 66.7, color: "hy", span: "Symptoms before 12" },
              { label: "Tics", dx: "tourette", from: 0, to: 100, color: "pharm", span: "Onset before 18" }
            ], note: "Also: **developmental coordination disorder** is rarely diagnosed **before 5**; **unspecified IDD** is for those **over 5**; ADHD and SLD lower the bar at **17** (five symptoms; history may replace testing)." },
            { type: "ladder", title: "Durations that matter", ticks: [[0, "0"], [33.3, "6 mo"], [66.7, "1 y"], [100, "18 mo"]], rows: [
              { label: "ADHD", dx: "adhd", from: 0, to: 33.3, color: "hy", span: "≥6 months" },
              { label: "SLD", dx: "sld", from: 0, to: 33.3, color: "guide", span: "≥6 mo despite help" },
              { label: "Provisional tic", dx: "provisional-tic", from: 0, to: 66.7, color: "case", span: "Under 1 year" },
              { label: "Persistent tic", dx: "persistent-tic", from: 66.7, to: 100, color: "dx", span: "Over 1 year", open: true },
              { label: "Tourette’s", dx: "tourette", from: 66.7, to: 100, color: "pharm", span: "Over 1 year", open: true }
            ], note: "Tic duration counts from the **first** tic, through tic-free gaps." },
            { type: "table", caption: "Can I diagnose both? (pp. 45–98)", head: ["Pair", "Rule"], rows: [
              ["ASD + IDD", "**Yes**, if social communication is **below** the general developmental level"],
              ["ASD + social (pragmatic) communication disorder", "**No**: ASD supersedes"],
              ["ASD + stereotypic movement disorder", "Only with **self-injury** or stereotypies that are a **focus of treatment**"],
              ["ASD + ADHD", "**Yes**, if attention problems exceed **mental age**"],
              ["IDD + ADHD, SLD, DCD, language disorder, SPCD", "**Yes**, each only if deficits **exceed** what IDD explains"],
              ["IDD + neurocognitive disorder", "**Yes** (Down syndrome with Alzheimer’s disease; loss after TBI)"],
              ["ADHD + SLD, DCD, ODD, DMDD", "**Yes**"],
              ["Tourette’s + persistent or provisional tic disorder", "**No**: hierarchy (Criterion E)"],
              ["ADHD + psychotic disorder", "Not if symptoms occur **only** during psychosis"],
              ["ASD + schizophrenia", "**Yes**, when both are met"]
            ] },
            { type: "table", caption: "Numbers to know", head: ["Disorder", "Number"], rows: [
              ["IDD", "IQ about **65–75** (70 ± 5); prevalence about **1%**"],
              ["ASD", "A **3/3**, B **2/4**; male:female about **3:1**; known genetic cause in up to **15%**"],
              ["ADHD", "**6** symptoms (**5** from 17), **6 months**, before **12**, **2** settings; **7.2%** of children, **2.5%** of adults"],
              ["SLD", "**6 months** despite help; **1.5 SD** (≤78, <7th percentile); **5%–15%** of school-age children"],
              ["Stuttering", "**80%–90%** by age 6; **65%–85%** recover"],
              ["DCD", "**5%–8%** of 5–11-year-olds; about **50%** have ADHD"],
              ["Tics", "Onset **4–6**, peak **10–12**, heritability **70%–85%**"]
            ] }
          ]
        },
        {
          id: "s1-beyond",
          title: "Beyond the DSM: assessment and treatment pointers",
          blocks: [
            { type: "callout", kind: "caution", title: "Outside the DSM", text: "This section is **clinical teaching**, not DSM-5-TR content. Treatment choices depend on age, comorbidity, local guidelines and product labeling. Check current prescribing information before using any drug." },
            { type: "table", caption: "Treatment pointers by disorder (clinical teaching, current to October 2026)", head: ["Disorder", "First steps", "Medication notes"], rows: [
              ["ADHD, ages 4–5", "**Parent training in behavior management** first (AAP 2019)", "[[stahl:drugs/methylphenidate|Methylphenidate]] if behavioral treatment is not enough; see the 2025 FDA note on extended-release stimulants under 6"],
              ["ADHD, school age and adolescents", "Medication **plus** behavioral and school supports", "**Stimulants** first line ([[stahl:drugs/methylphenidate|methylphenidate]], [[stahl:drugs/amphetamine|amphetamine]], [[stahl:drugs/lisdexamfetamine|lisdexamfetamine]]); nonstimulants: [[stahl:drugs/atomoxetine|atomoxetine]], [[stahl:drugs/viloxazine|viloxazine]], [[stahl:drugs/guanfacine|guanfacine ER]], [[stahl:drugs/clonidine|clonidine ER]]"],
              ["ADHD, adults", "Confirm childhood onset with **collateral**; screen for substance use", "Stimulants or [[stahl:drugs/atomoxetine|atomoxetine]]; see [[stahl:c/ch11/guide/s11-stim-principles|Stahl on stimulant principles]]"],
              ["ASD", "Early intensive **behavioral and developmental** interventions, speech and occupational therapy, school supports; treat comorbid ADHD, anxiety, sleep problems", "No drug treats core features; [[stahl:drugs/risperidone|risperidone]] (5–16 y) and [[stahl:drugs/aripiprazole|aripiprazole]] (6–17 y) are FDA-approved for **irritability** associated with autism"],
              ["Tic disorders", "Education and watchful waiting for mild tics; **CBIT** (comprehensive behavioral intervention for tics, built on the premonitory urge) is first-line behavioral treatment (AAN 2019)", "[[stahl:drugs/guanfacine|Guanfacine]] or [[stahl:drugs/clonidine|clonidine]], especially with ADHD; FDA-approved for Tourette’s: [[stahl:drugs/haloperidol|haloperidol]], [[stahl:drugs/pimozide|pimozide]], [[stahl:drugs/aripiprazole|aripiprazole]]"],
              ["IDD", "Supports, education, treat comorbid psychiatric and **medical** illness; look for pain", "Avoid using antipsychotics only to sedate behavior; reassess regularly"],
              ["Communication disorders and stuttering", "Speech-language therapy (e.g., the **Lidcombe** program for preschool stuttering)", "No approved drug"],
              ["SLD", "Structured, explicit **literacy or numeracy** instruction; accommodations (extra time, text-to-speech)", "Treat co-occurring ADHD"],
              ["DCD", "**Task-oriented** motor training (occupational or physical therapy)", "None"]
            ] },
            { type: "update", kind: "post", year: "2023", title: "Stimulant boxed warning updated", source: "FDA Drug Safety Communication, May 11, 2023", text: "The FDA required the boxed warning on **all prescription stimulants** to describe the risks of **misuse, abuse, addiction, overdose and death**, and to advise assessing risk before prescribing, monitoring during treatment, and counseling patients and families on safe storage and disposal and on **not sharing** medication." },
            { type: "update", kind: "post", year: "2025", title: "Extended-release stimulants in children under 6", source: "FDA labeling requirement announced in 2025 (reported by RAPS, July 1, 2025)", text: "The FDA required **extended-release stimulant** labels to state that in children **younger than 6** these products produce **higher drug exposure**, more adverse reactions and a risk of **clinically significant weight loss**, and that their benefits may not outweigh the risks in this age group. Monitor weight and growth, and consider stopping or switching if weight loss occurs." },
            { type: "update", kind: "post", year: "2026", title: "Adult ADHD guideline pending", source: "Psychiatric Times, October 12, 2026", text: "The American Professional Society of ADHD and Related Disorders (APSARD) is finalizing the first **US guideline for adult ADHD** (screening, differential diagnosis, drug and nondrug treatment). It had not been published as of mid-October 2026." }
          ]
        }
      ]
    }
  ]
});
