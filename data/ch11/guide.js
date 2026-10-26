/* Chapter 11 study guide. Source: DSM-5-TR, Elimination Disorders (pp. 399–406).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. Codes checked against ICD-10-CM through FY2027 (October 1, 2026):
   no changes for this chapter. Treatment notes are outside the DSM and labeled as such. */
SP.add("ch11", "guide", {
  intro: "The elimination disorders are about **urine or feces passed in the wrong place**, and they are usually first diagnosed in **childhood or adolescence** (p. 399). **Enuresis** is repeated voiding of urine into bed or clothes, from a **developmental age of 5**, at least **twice a week for 3 months** or with clinically significant distress or impairment. **Encopresis** is repeated passage of feces into inappropriate places, from a **developmental age of 4**, at least **once a month for 3 months**. Both may be **involuntary or intentional**, both exclude **substances and medical conditions** (encopresis allows a medical cause only **through constipation**), and both are subtyped: enuresis as **nocturnal only, diurnal only, or both**, encopresis as **with or without constipation and overflow incontinence**. They usually occur separately but can **co-occur**. The [[helper:elimination|elimination disorder helper]] walks you through the reasoning.",
  objectives: [
    "State the four criteria for **enuresis**, including the two ways to meet Criterion B, the **age 5** threshold and the medical and medication exclusions.",
    "Use the enuresis subtypes (**nocturnal only, diurnal only, nocturnal and diurnal**) and the course terms **primary** and **secondary**.",
    "State the four criteria for **encopresis**, including **once a month for 3 months**, the **age 4** threshold and the **constipation exception** in Criterion D.",
    "Tell the encopresis subtypes apart (**with** versus **without constipation and overflow incontinence**) by history, stool form, examination and transit studies.",
    "Know the prevalence, sex ratio, course, genetics and comorbidity figures the manual gives for each disorder.",
    "Separate the elimination disorders from **medical causes** (neurogenic bladder, diabetes, UTI, spina bifida, chronic diarrhea) and **medication effects** (diuretics, antipsychotics, laxatives).",
    "Code correctly: **F98.0**, **F98.1**, and the split codes for the other specified (**N39.498 / R15.9**) and unspecified (**R32 / R15.9**) categories."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s11-map",
          title: "How the chapter is built",
          pages: "399",
          blocks: [
            { type: "table", caption: "Diagnoses in this chapter (codes as printed in DSM-5-TR, 2022; unchanged through October 2026)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:enuresis|Enuresis]]", "F98.0", "Urine into bed or clothes; age **≥5**; **2×/week for 3 months** or distress or impairment", "399–402"],
              ["[[dx:encopresis|Encopresis]]", "F98.1", "Feces in inappropriate places; age **≥4**; **1×/month for 3 months**", "402–405"],
              ["[[dx:other-specified-elimination|Other specified elimination disorder]]", "N39.498 urinary · R15.9 fecal", "Subthreshold presentation with the **reason recorded** (e.g., low-frequency enuresis)", "405"],
              ["[[dx:unspecified-elimination|Unspecified elimination disorder]]", "R32 urinary · R15.9 fecal", "Reason not given or not enough information", "405–406"]
            ] },
            { type: "compare", title: "The two disorders side by side (pp. 399, 402)", items: [
              { title: "Enuresis (F98.0)", color: "guide", points: ["Urine into **bed or clothes**.", "Age **5** (chronological or developmental).", "At least **twice a week** for **3 consecutive months**, **or** clinically significant distress or impairment.", "Excludes substances (diuretics, antipsychotics) and medical conditions (diabetes, spina bifida, seizures).", "Specify **nocturnal only**, **diurnal only**, or **nocturnal and diurnal**."] },
              { title: "Encopresis (F98.1)", color: "case", points: ["Feces into **inappropriate places** (clothing, floor).", "Age **4** (chronological or developmental).", "At least **once a month** for **3 months**; **no** distress-or-impairment alternative.", "Excludes substances (laxatives) and medical conditions, **except** through a mechanism involving **constipation**.", "Specify **with** or **without constipation and overflow incontinence**."] }
            ] },
            { type: "callout", kind: "key", title: "Four ideas that run through the chapter", text: "1) The age thresholds are **developmental**, not only chronological: a child with intellectual disability needs a **mental age** of 5 (enuresis) or 4 (encopresis). 2) The behavior can be **involuntary or intentional**; most often it is involuntary. 3) Each disorder has a **primary** course (continence never achieved) and a **secondary** course (onset after a period of continence). 4) The two disorders usually occur **separately**, but **co-occurrence** is common, especially with constipation (p. 399)." },
            { type: "update", kind: "tr", title: "What the text revision changed", text: "The criteria and codes are the same as in DSM-5 (2013). The text revision rewrote the descriptive sections: updated **prevalence** figures from several countries, new **culture-related** and **sex- and gender-related** sections, the sleep and arousal model of nocturnal enuresis, and more detail on **diagnostic markers** for encopresis such as **colonic transit studies** and **anorectal manometry**. Confirm details against pp. 399–406." }
          ]
        },
        {
          id: "s11-coding",
          title: "Codes and how to record them",
          pages: "399–406",
          blocks: [
            { type: "table", caption: "ICD-10-CM codes for the chapter", head: ["Diagnosis", "Code", "Note"], rows: [
              ["Enuresis", "**F98.0**", "Enuresis not due to a substance or known physiological condition; one code for all three subtypes"],
              ["Encopresis", "**F98.1**", "Encopresis not due to a substance or known physiological condition; one code for both subtypes"],
              ["Other specified, with urinary symptoms", "**N39.498**", "Other specified urinary incontinence"],
              ["Other specified, with fecal symptoms", "**R15.9**", "Full incontinence of feces"],
              ["Unspecified, with urinary symptoms", "**R32**", "Unspecified urinary incontinence"],
              ["Unspecified, with fecal symptoms", "**R15.9**", "The **same** fecal code as other specified"]
            ] },
            { type: "callout", kind: "exam", title: "The coding pattern", text: "The two named disorders sit in the childhood **F98** block. The residual categories borrow **non-F codes**: urinary symptoms go to the genitourinary (**N39.498**, other specified) or symptom chapter (**R32**, unspecified), and **fecal** symptoms always go to **R15.9**, whether other specified or unspecified. The subtype is written out in words; it does not change the code." },
            { type: "steps", title: "Recording the diagnosis", items: [
              ["1. Name", "Enuresis or encopresis."],
              ["2. Subtype", "Enuresis: nocturnal only, diurnal only, or nocturnal and diurnal. Encopresis: with or without constipation and overflow incontinence."],
              ["3. Code", "F98.0 or F98.1. For the residual categories, choose the urinary or fecal code."],
              ["4. Residual reason", "Other specified: write the reason after the name, e.g., “other specified elimination disorder, low-frequency enuresis.”"]
            ] },
            { type: "update", kind: "post", year: "2026", title: "No code changes through FY2027", source: "ICD-10-CM FY2025, FY2026 and FY2027 code tables (effective October 1 of 2024, 2025 and 2026); APA DSM-5-TR coding updates (September 2022, 2023, 2024 and 2025)", text: "F98.0, F98.1, N39.498, R15.9 and R32 were **not changed** in the October 2024, October 2025 or October 2026 ICD-10-CM updates, and the APA’s DSM-5-TR coding updates have not touched this chapter. The codes printed in the manual are still current. Check the code set in force on the date of service." }
          ]
        }
      ]
    },
    {
      title: "Enuresis",
      sections: [
        {
          id: "s11-enuresis-criteria",
          title: "Enuresis: the criteria",
          pages: "399–400",
          blocks: [
            { type: "criteria", title: "Enuresis in brief", code: "F98.0", pages: "399", items: [
              ["A", "**Repeated voiding of urine** into bed or clothes, whether **involuntary or intentional**."],
              ["B", "Clinically significant, shown by **either**:", ["a frequency of at least **twice a week** for at least **3 consecutive months**, **or**", "clinically significant **distress or impairment** in social, academic (occupational) or other important areas."]],
              ["C", "Chronological age at least **5 years** (or the equivalent **developmental level**)."],
              ["D", "Not attributable to a **substance** (e.g., a diuretic, an antipsychotic) or **another medical condition** (e.g., diabetes, spina bifida, a seizure disorder)."]
            ], specifiers: [["Nocturnal only", "Urine passed only during **nighttime sleep**"], ["Diurnal only", "Urine passed during **waking hours**"], ["Nocturnal and diurnal", "A **combination** of the two"]] },
            { type: "defs", title: "Reading the criteria (p. 400)", items: [
              ["Voluntary or not", "Most voiding is **involuntary**; occasionally it is **intentional**. Both count."],
              ["Criterion B", "Frequency **or** impact. A child wetting **once a week** who is **distressed** or missing sleepovers still meets B."],
              ["Age", "The age at which continence is expected: **5 years** chronologically, or a **mental age of 5** in a child with developmental delay."],
              ["Medical exclusions", "Diabetes, spina bifida, **ectopic ureter** in a girl, **posterior urethral valves** in a boy, **tethered cord**, a seizure disorder."]
            ] },
            { type: "ladder", title: "Minimum frequency and duration", ticks: [[0, "0"], [33, "1 mo"], [66, "2 mo"], [100, "3 mo"]], rows: [
              { label: "Enuresis", dx: "enuresis", from: 0, to: 100, color: "guide", span: "≥2×/week for 3 consecutive months", note: "Or distress or impairment at any frequency" },
              { label: "Encopresis", dx: "encopresis", from: 0, to: 100, color: "case", span: "≥1×/month for 3 months", note: "No impairment alternative" }
            ], note: "Both need 3 months; enuresis counts **weekly**, encopresis **monthly**." },
            { type: "callout", kind: "exam", title: "The commonest exam twist", text: "A 6-year-old wets **once a week** but is ashamed and refuses sleepovers. Frequency is below twice weekly, but **distress or impairment** satisfies Criterion B: **enuresis**. Now a 6-year-old soils **twice a month** for **2 months**: not yet encopresis, because the **3-month** duration is not met." },
            { type: "case", title: "Clinical vignette: the boy who will not go to camp", text: "A 7-year-old boy has wet the bed about four nights a week for as long as his parents remember. He is dry during the day. Urinalysis and examination are normal, and he takes no medication. He refuses a school camping trip because he is afraid his classmates will find out.", point: "Repeated voiding into bed, more than twice a week for over 3 months, age over 5, with no medical or drug cause: **enuresis, nocturnal only (F98.0)**. It is **primary**, because he has never been dry." }
          ]
        },
        {
          id: "s11-enuresis-subtypes",
          title: "Subtypes and course of enuresis",
          pages: "399–400",
          blocks: [
            { type: "table", caption: "Enuresis subtypes (p. 399)", head: ["Subtype", "Also called", "What it looks like"], rows: [
              ["**Nocturnal only**", "**Monosymptomatic** enuresis", "The **most common** subtype; wetting only in nighttime sleep, typically in the **first third of the night**"],
              ["**Diurnal only**", "Urinary incontinence", "Wetting in waking hours without nighttime wetting; two groups: **urge incontinence** and **voiding postponement**"],
              ["**Nocturnal and diurnal**", "**Nonmonosymptomatic** enuresis", "Both day and night wetting"]
            ] },
            { type: "compare", title: "The two kinds of daytime wetting (p. 399)", items: [
              { title: "Urge incontinence", color: "drug", points: ["**Sudden urges** to void.", "**Detrusor instability** (an overactive bladder muscle).", "The child cannot hold on."] },
              { title: "Voiding postponement", color: "hy", points: ["The child **consciously defers** the urge until wetting results.", "Often busy with **play or school**, or **reluctant to use the toilet** because of social anxiety (p. 400)."] }
            ] },
            { type: "compare", title: "Primary and secondary enuresis (p. 400)", items: [
              { title: "Primary", color: "guide", points: ["The child has **never established** urinary continence.", "By definition it begins at **age 5**."] },
              { title: "Secondary", color: "case", points: ["Begins **after a period of continence**.", "Most common onset between **ages 5 and 8**, but it can start at any age.", "Look for a **stressor**, a **UTI**, **diabetes**, constipation or a new medication."] }
            ] },
            { type: "callout", kind: "pearl", title: "Primary versus secondary does not predict comorbidity", text: "The manual states that the prevalence of **comorbid mental disorders does not differ** between primary and secondary enuresis (p. 400). Secondary onset should still prompt a search for a **new medical cause or stressor**." },
            { type: "table", caption: "Course (p. 400)", head: ["Feature", "What the manual says"], rows: [
              ["Spontaneous remission", "**5%–10% per year** after age 5"],
              ["Adolescence", "**Most** children become continent by adolescence"],
              ["Adulthood", "About **1%** of cases continue into adulthood"],
              ["Diurnal enuresis", "**Uncommon after age 9**; occasional daytime wetting in middle childhood is more common with co-occurring cognitive and behavioral problems"],
              ["Late persistence", "If wetting persists into late childhood or adolescence, **urinary frequency** often persists after continence, and incontinence may **recur in adult women**"]
            ] }
          ]
        },
        {
          id: "s11-enuresis-features",
          title: "Enuresis: associated features and prevalence",
          pages: "400",
          blocks: [
            { type: "list", title: "Associated features (p. 400)", items: [
              "Nocturnal wetting occasionally occurs in **REM sleep**, and the child may recall a **dream of urinating**.",
              "Daytime wetting is often **deferred voiding**: social anxiety about school toilets, or absorption in **play or school** activity.",
              "Daytime events cluster in the **early afternoon on school days** or **after returning from school**.",
              "Children with **executive function** or other neurological problems, including those with disruptive behavior, may wet **without sensory awareness**.",
              "With daytime or combined wetting, incontinence often **persists after an associated infection is treated**."
            ] },
            { type: "table", caption: "Prevalence (p. 400)", head: ["Group", "Nocturnal enuresis", "Daytime incontinence"], rows: [
              ["Age 5", "About **5%–10%**", "—"],
              ["Age 7", "—", "**3.2%–9.0%**"],
              ["Age 10", "About **3%–5%**", "—"],
              ["Ages 11–13", "—", "1.1%–4.2%"],
              ["Ages 15–17", "—", "1.2%–3.0%"],
              ["Age 15 and older", "About **1%**", "—"]
            ] },
            { type: "list", title: "Who is affected more often (p. 400)", items: [
              "**Boys**, and members of **socially oppressed groups** (e.g., African American children in the United States; Turkish or Moroccan children in the Netherlands).",
              "Youth with **learning disabilities** or **ADHD**.",
              "Figures come from the **United States, the Netherlands and Hong Kong**, among other settings."
            ] },
            { type: "callout", kind: "mnemonic", title: "Count down by halves: 5–10, 3–5, 1", text: "Nocturnal enuresis falls from about **5%–10% at age 5**, to **3%–5% at age 10**, to about **1% at 15 or older**, as each year **5%–10%** of affected children become dry on their own. (Mnemonic written for this app; DSM check: p. 400.)" }
          ]
        },
        {
          id: "s11-enuresis-risk",
          title: "Enuresis: risk, genetics, culture and sex",
          pages: "401",
          blocks: [
            { type: "table", caption: "Risk and prognostic factors (p. 401)", head: ["Domain", "What the manual says"], rows: [
              ["Predisposing", "**Developmental delays** and **neuropsychiatric** problems"],
              ["Environmental", "**Delayed toileting** and **psychosocial stress**"],
              ["Physiological", "A **mismatch** between **nighttime urine production**, **nighttime bladder capacity** and the **ability to wake** from sleep; possibly abnormal CNS signal processing and the **default mode network**"],
              ["Sleep", "Arousal thresholds are **high**, yet sleep quality is often **poor**: these children do not simply sleep well"],
              ["Genetic", "**Genetically heterogeneous**; heritability shown in family, twin and segregation studies"],
              ["Family risk", "About **3.6 times** higher with an enuretic **mother**; **10.1 times** higher with paternal urinary incontinence"],
              ["Day versus night", "Risk magnitudes are **similar** for nocturnal enuresis and daytime incontinence"]
            ] },
            { type: "callout", kind: "analogy", title: "Three dials", text: "Think of nighttime dryness as three dials that must line up: **how much urine the kidneys make at night**, **how much the bladder can hold**, and **whether the brain wakes up** when the bladder is full. Wetting happens when production exceeds capacity in a child who does not wake. (Analogy written for this app; DSM check: p. 401.)" },
            { type: "callout", kind: "culture", title: "Culture and enuresis (p. 401)", text: "National prevalence and developmental trajectories are **remarkably similar** across Europe, Africa, Asia and the United States, but local school surveys range from **4% to 50%**, partly because of method. Rates are **very high in orphanages and residential institutions**, and this is **not explained** by how or how early toilet training happened. Explanations differ: **traditional Chinese medicine** links enuresis to a long-term deficiency of **kidney yang**. The burden on parents is greater where **care is hard to afford** or where policy limits family size (e.g., China’s former **one-child policy**), possibly raising parental emotional disorders." },
            { type: "table", caption: "Sex and gender (p. 401)", head: ["Finding", "Detail"], rows: [
              ["Nocturnal enuresis", "**Males** almost **2:1**, especially in younger children, milder cases and night-only wetting"],
              ["Daytime incontinence", "More common in **females**, and the ratio **increases with age**"],
              ["UTIs", "Often linked with **daytime wetting**, especially in girls"],
              ["Transmission", "Relative risk of an enuretic child is greater with a previously enuretic **father** than **mother**"]
            ] },
            { type: "p", text: "**Impairment** depends on limits on social activities (for example, **not going to sleep-away camp**), the effect on **self-esteem**, **ostracism by peers**, and **anger, punishment and rejection by caregivers** (p. 401). Asking about punishment is part of the assessment." }
          ]
        },
        {
          id: "s11-enuresis-ddx",
          title: "Enuresis: differential diagnosis and comorbidity",
          pages: "401–402",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 401–402)", head: ["Look-alike", "How to tell"], rows: [
              ["**Neurogenic bladder** or structural causes", "Posterior urethral valves, ectopic ureter, spina bifida, tethered cord: **no enuresis diagnosis** while these explain the wetting"],
              ["Conditions causing **polyuria or urgency**", "Untreated **diabetes mellitus** or **diabetes insipidus**"],
              ["**Acute UTI**", "Do not diagnose enuresis **during** the infection"],
              ["**Medication side effect**", "**Antipsychotics**, **diuretics**, or drugs that cause constipation, polyuria or changes in executive functioning: **note as a side effect**, not as enuresis"]
            ] },
            { type: "callout", kind: "key", title: "Two exceptions that allow the diagnosis", text: "Enuresis **can** be diagnosed alongside a medical condition or medication if the wetting was **regularly present before** the condition or drug began, **or** if it **persists after appropriate treatment** of the medical condition (pp. 401–402)." },
            { type: "list", title: "Comorbidity (p. 402)", items: [
              "**Most** children with enuresis have **no** comorbid mental disorder.",
              "Behavioral and developmental symptoms are **more common** when wetting is **both day and night**.",
              "**Developmental delays**: speech, language, learning and motor skills.",
              "**Encopresis and constipation** occur with both day and night wetting.",
              "Nocturnal enuresis is linked with **restless legs syndrome**, **NREM sleep arousal disorders** (sleepwalking, sleep terrors), **heavy snoring** and **sleep apnea**.",
              "About **50%** of enuretic children with proven **sleep-disordered breathing** become dry after **adenotonsillectomy**.",
              "**UTIs** are more common with daytime and nonmonosymptomatic wetting, especially the diurnal subtype."
            ] },
            { type: "callout", kind: "caution", title: "Antipsychotics and clozapine", text: "In psychiatric practice, new nighttime wetting in a patient on an **antipsychotic** (clozapine is the classic example) is a **medication side effect**. Record it as such rather than as enuresis, unless the wetting was regularly present before the drug was started (p. 402)." },
            { type: "case", title: "Clinical vignette: the girl who started wetting again", text: "An 8-year-old girl who had been dry for 3 years begins wetting the bed and having daytime accidents. Over 2 weeks she has been drinking much more and has lost weight. Her urine dipstick shows glucose.", point: "Secondary wetting with **polyuria** and glycosuria points to **new-onset diabetes mellitus**. Enuresis is **not** diagnosed while untreated diabetes explains the wetting; it could be considered only if wetting **persists after** the diabetes is treated." }
          ]
        }
      ]
    },
    {
      title: "Encopresis",
      sections: [
        {
          id: "s11-encopresis-criteria",
          title: "Encopresis: the criteria",
          pages: "402–403",
          blocks: [
            { type: "criteria", title: "Encopresis in brief", code: "F98.1", pages: "402", items: [
              ["A", "**Repeated passage of feces** into inappropriate places (e.g., clothing, floor), whether **involuntary or intentional**."],
              ["B", "At least **one such event each month** for at least **3 months**."],
              ["C", "Chronological age at least **4 years** (or the equivalent **developmental level**)."],
              ["D", "Not attributable to a **substance** (e.g., **laxatives**) or **another medical condition**, **except through a mechanism involving constipation**."]
            ], specifiers: [["With constipation and overflow incontinence", "Evidence of constipation on **physical examination or by history**"], ["Without constipation and overflow incontinence", "**No** evidence of constipation on examination or by history"]] },
            { type: "defs", title: "Reading the criteria (p. 403)", items: [
              ["Voluntary or not", "Most often **involuntary**; occasionally **intentional**."],
              ["Criterion B", "Frequency only: **no** distress-or-impairment alternative, unlike enuresis."],
              ["Age", "**4 years** chronologically, or a **mental age of 4** with developmental delay."],
              ["Criterion D", "The incontinence must not be **exclusively** due to a substance or medical condition. A medical condition that works **through constipation** (e.g., **hypothyroidism**, **celiac disease**) does **not** exclude encopresis."]
            ] },
            { type: "callout", kind: "exam", title: "Why the constipation exception matters", text: "Constipation is the usual engine of encopresis, and it can have medical causes. If a child with **hypothyroidism** becomes constipated and leaks stool, encopresis **with constipation and overflow incontinence** can still be diagnosed. But fecal incontinence from **chronic diarrhea**, **spina bifida** or **anal stenosis** does **not** qualify (p. 405)." },
            { type: "case", title: "Clinical vignette: the stained underwear", text: "A 6-year-old boy has had soiled underwear several times a week for 5 months. He passes large, hard stools every 5 to 7 days that sometimes block the toilet, and he hides behind the sofa crossing his legs when he feels the urge. A firm stool mass is felt in his left lower abdomen. He takes no medication and has no other illness.", point: "Repeated passage of feces into clothing, more than monthly for over 3 months, age over 4, with evidence of constipation: **encopresis, with constipation and overflow incontinence (F98.1)**. The leg-crossing is **withholding** behavior." }
          ]
        },
        {
          id: "s11-encopresis-subtypes",
          title: "Encopresis subtypes and mechanism",
          pages: "402–403",
          blocks: [
            { type: "compare", title: "The two subtypes (pp. 402–403)", items: [
              { title: "With constipation and overflow incontinence", color: "drug", points: ["The **majority** of children older than 4 with encopresis.", "Stool **usually poorly formed**; leakage ranges from **infrequent to continuous**, through the day and sometimes in sleep.", "Only **part** of the stool is passed at toileting.", "Incontinence **resolves when the constipation is treated**.", "Supported by a **rectal impaction** on examination, an abdominal radiograph, or **retained markers** on transit study."] },
              { title: "Without constipation and overflow incontinence", color: "case", points: ["**Less common**.", "Stool of **normal form and consistency**; soiling is **intermittent**.", "Feces may be deposited in a **prominent location**.", "Usually associated with **oppositional defiant disorder** or **conduct disorder**, or the result of **anal masturbation**.", "**Prompt evacuation** of transit markers; **enuresis** often co-occurs."] }
            ] },
            { type: "flow", title: "The withholding cycle (pp. 403–404)", steps: [
              ["Trigger", "Anxiety about a particular toilet, oppositional behavior, a painful stool, poor fluid intake, a medication", "guide"],
              ["Withholding", "Avoidance of defecation and excessive voluntary stool retention", "hy"],
              ["Constipation", "Hard stool, anal fissure, painful defecation, more retention", "mech"],
              ["Overflow", "Liquid or soft stool leaks around the impaction", "case"]
            ], note: "Painful defecation leads to constipation and a cycle of withholding that makes encopresis more likely. Treating the constipation breaks the cycle." },
            { type: "table", caption: "Causes of constipation the manual names (p. 403)", head: ["Kind", "Examples"], rows: [
              ["Psychological", "**Anxiety** about defecating in a particular place; a broader **anxious or oppositional** pattern"],
              ["Physiological", "Ineffectual straining; **paradoxical defecation dynamics** (the external sphincter or pelvic floor **contracts** instead of relaxing during straining)"],
              ["Diet and medical", "**Insufficient fluid**, **celiac disease**, **hypothyroidism**, a **medication side effect**"],
              ["Complications", "**Anal fissure**, painful defecation, further retention"]
            ] },
            { type: "callout", kind: "pearl", title: "Stool consistency can mislead", text: "Stool may be **normal or near normal**, or it may be **liquid** in children with overflow from retention (p. 403). A parent who reports “diarrhea” in a constipated child may be describing **overflow**. Examine the abdomen and ask about **large, infrequent, painful** stools." }
          ]
        },
        {
          id: "s11-encopresis-features",
          title: "Encopresis: associated features, prevalence and course",
          pages: "403–404",
          blocks: [
            { type: "list", title: "Associated features (p. 403)", items: [
              "**Shame** and avoidance of situations such as **camp or school** that could cause embarrassment.",
              "Impairment depends on **self-esteem**, **peer ostracism**, and caregiver **anger, punishment and rejection**.",
              "**Smearing** may be **deliberate** or **accidental**, when a child tries to clean up or hide feces passed involuntarily.",
              "When incontinence is **clearly deliberate**, features of **ODD** or **conduct disorder** may be present.",
              "Many children with encopresis and chronic constipation also have **enuresis**, and urinary **reflux** may cause chronic **UTIs**, which may remit when the constipation is treated."
            ] },
            { type: "table", caption: "Prevalence (p. 403)", head: ["Group", "Figure"], rows: [
              ["High-income countries", "**1%–4%** of children"],
              ["Some Asian countries (Iran, South Korea, Sri Lanka)", "**2%–8%** reported"],
              ["Ages 4–6", "**More than 4%**"],
              ["Ages 10–12", "**Less than 2%**"],
              ["Higher rates", "Children with early **abuse or neglect**; **low-income** youth"],
              ["Subtype", "**Most** children over 4 have the **with constipation** subtype"]
            ] },
            { type: "table", caption: "Development, course and risk (p. 404)", head: ["Topic", "What the manual says"], rows: [
              ["Predisposing", "**Inadequate or inconsistent toilet training**; psychosocial stress such as **entering school** or the **birth of a sibling**"],
              ["Course types", "**Primary** (fecal continence never established) and **secondary** (after a period of continence)"],
              ["Duration", "Can persist **for years** with intermittent exacerbations"],
              ["Risk factors", "Painful defecation; **male** sex; age **before adolescence**; anxiety, depression, behavioral disorders; stressors such as **bullying** or poor school performance; **lower socioeconomic status**"],
              ["Sex ratio", "**Equal** under age 5; in older children **more common in boys**, from **2:1** (United States) to **6:1**"],
              ["Quality of life", "Significantly lower **health-related quality of life** and **family functioning**, especially in **older children** (p. 404)"]
            ] },
            { type: "callout", kind: "culture", title: "Culture and encopresis (p. 404)", text: "Differences in **food and drink**, **hot tropical climates** and psychosocial adversity may influence constipation, unexplained abdominal pain and fecal retention. Some parents do not seek care for sociocultural reasons: for example, **Turkish and Moroccan** parents in the Netherlands may not report encopresis because of **religious concerns about the impurity** of urine and feces. In hot climates, ask about **fluid intake**." }
          ]
        },
        {
          id: "s11-encopresis-markers",
          title: "Encopresis: diagnostic markers",
          pages: "404",
          blocks: [
            { type: "p", text: "Encopresis is a **clinical diagnosis** made from **history and physical examination**; it generally needs **no tests** (p. 404). Tests help to define the subtype or to look for a medical cause when symptoms are refractory." },
            { type: "table", caption: "What each finding supports (p. 404)", head: ["Test", "Finding", "Supports"], rows: [
              ["**Digital rectal examination**", "Rectal **fecal impaction**", "With constipation and overflow incontinence"],
              ["**Abdominal radiograph**", "Fecal impaction (not indicated for diagnosis)", "With constipation and overflow incontinence"],
              ["**Colonic transit study** (radiopaque markers, then imaging)", "Markers **retained**", "With constipation and overflow incontinence"],
              ["Colonic transit study", "Markers **promptly evacuated**", "Without constipation and overflow incontinence"],
              ["**Anorectal manometry**", "Anorectal function and sensation", "Physiological contributors in selected children"]
            ] },
            { type: "callout", kind: "caution", title: "When to look further", text: "Refractory symptoms, or signs of an underlying medical condition, call for evaluation to **exclude other causes** of fecal incontinence (p. 404). Outside the DSM, red flags include delayed passage of meconium, failure to thrive, abnormal neurological or spinal findings, and blood in the stool." }
          ]
        },
        {
          id: "s11-encopresis-ddx",
          title: "Encopresis: differential diagnosis and comorbidity",
          pages: "405",
          blocks: [
            { type: "table", caption: "Differential diagnosis (p. 405)", head: ["Look-alike", "How to tell"], rows: [
              ["Another medical condition **with constipation**", "Encopresis **is** appropriate if the mechanism is constipation that the other condition **cannot** fully explain"],
              ["**Chronic diarrhea**", "Fecal incontinence from diarrhea is **not** encopresis"],
              ["**Spina bifida**, **anal stenosis**", "Structural or neurological incontinence is **not** encopresis"],
              ["**Laxative** effect", "Incontinence exclusively from laxatives is excluded by Criterion D"],
              ["**ODD or conduct disorder**", "Can **coexist**, especially with deliberate soiling **without** constipation; diagnose both when criteria are met"]
            ] },
            { type: "callout", kind: "key", title: "Comorbidity in one line", text: "**Enuresis** is often present with encopresis, **particularly** in the subtype **without constipation and overflow incontinence** (p. 405)." },
            { type: "callout", kind: "caution", title: "Soiling, smearing and safety", text: "Encopresis is **more common after early abuse or neglect** (p. 403). Deliberate soiling, smearing, **anal masturbation**, or a **new secondary** onset after a stressor should prompt a careful, nonjudgmental **psychosocial and safeguarding** history, without assuming abuse." }
          ]
        }
      ]
    },
    {
      title: "Residual categories and approach",
      sections: [
        {
          id: "s11-other",
          title: "Other specified and unspecified elimination disorder",
          pages: "405–406",
          blocks: [
            { type: "p", text: "Both categories cover elimination symptoms that cause **clinically significant distress or impairment** but do not meet full criteria for enuresis or encopresis (p. 405)." },
            { type: "compare", title: "Which residual category?", items: [
              { title: "Other specified", color: "guide", points: ["The clinician **states the reason** full criteria are not met.", "Record the name, then the reason, e.g., **“low-frequency enuresis.”**", "Codes: **N39.498** with urinary symptoms; **R15.9** with fecal symptoms."] },
              { title: "Unspecified", color: "case", points: ["The clinician **chooses not to specify** the reason, or there is **insufficient information** (e.g., **emergency room**).", "Codes: **R32** with urinary symptoms; **R15.9** with fecal symptoms."] }
            ] },
            { type: "table", caption: "Examples (the manual gives only “low-frequency enuresis”; the others are written for this app)", head: ["Presentation", "Category"], rows: [
              ["Soiling **once a month** for **2 months**, with distress", "**Other specified**, fecal symptoms (**R15.9**): duration short of 3 months"],
              ["Soiling about **every 6 weeks** for 6 months, with impairment", "**Other specified**, fecal symptoms (**R15.9**): below once a month"],
              ["Occasional nighttime wetting judged subthreshold by the clinician", "**Other specified**, urinary symptoms (**N39.498**): “low-frequency enuresis”"],
              ["A 9-year-old seen once in the emergency room for wetting, history unavailable", "**Unspecified**, urinary symptoms (**R32**)"]
            ] },
            { type: "callout", kind: "exam", title: "Check full criteria first", text: "For **enuresis**, distress or impairment can **replace** the twice-weekly frequency in Criterion B, so a child who wets less often but is clearly distressed may already meet **full enuresis**. For **encopresis** there is **no** impairment alternative: a **shorter** or **less frequent** course that still causes distress goes to **other specified**." }
          ]
        },
        {
          id: "s11-workup",
          title: "Beyond the DSM: assessment and treatment",
          pages: "399–405",
          blocks: [
            { type: "callout", kind: "caution", title: "Outside the DSM", text: "The DSM-5-TR does not cover treatment. This section summarizes widely used guidance for orientation; follow local pediatric and urology protocols. See the disorder pages for the **treatment bridge** to the Stahl Study Companion." },
            { type: "steps", title: "Assessing wetting", items: [
              ["1. History", "Day or night; primary or secondary; frequency; fluid intake; **bowel habits**; snoring; family history; stressors; punishment at home."],
              ["2. Diary", "A bladder diary of voids, volumes and wet nights (ICCS recommends one before treatment)."],
              ["3. Examination", "Abdomen for stool; genitalia; lower spine for dimples or hair tufts; gait and lower-limb neurology."],
              ["4. Urinalysis", "Glucose (diabetes), low specific gravity (diabetes insipidus), infection."],
              ["5. Treat constipation first", "Constipation worsens wetting; treat it before or alongside enuresis treatment."]
            ] },
            { type: "table", caption: "Treatment options for nocturnal enuresis (orientation only)", head: ["Option", "Key facts"], rows: [
              ["Reassurance and education", "No blame or punishment; spontaneous remission **5%–10% per year**"],
              ["**Enuresis alarm**", "First line with **desmopressin**; slower but more durable, with **lower relapse**; needs a motivated family"],
              ["**Desmopressin**", "First line; reduces nighttime urine; best for **nocturnal polyuria**; **oral** tablets or melts, taken at bedtime; **restrict fluids** from 1 hour before to 8 hours after because of **hyponatremia** risk; relapse after stopping is common"],
              ["Anticholinergics", "Add-on for bladder overactivity or daytime symptoms, usually with desmopressin"],
              ["**Imipramine**", "Third line, specialist use; risk of **cardiotoxicity and fatal overdose**"]
            ] },
            { type: "update", kind: "post", year: "2025", title: "Desmopressin evidence update", source: "Hahn D, Stewart F, Raman G. Cochrane Database Syst Rev 2025;(7):CD002112; summarized in Am Fam Physician 2026", text: "A 2025 Cochrane review found that desmopressin, compared with placebo, reduced wet nights by about **1.8 per week** and made **14 consecutive dry nights** about **3 times** as likely (number needed to treat about **5**), with no clear increase in adverse events. Adding an **alarm** or an **anticholinergic** to desmopressin gave a modest further benefit. Oral forms are preferred over nasal spray." },
            { type: "table", caption: "Treatment of encopresis with constipation (orientation only)", head: ["Step", "Key facts"], rows: [
              ["Education", "Explain the withholding cycle; **demystify** soiling; stop blame and punishment"],
              ["Disimpaction", "High-dose oral **polyethylene glycol** or enemas for **3–6 days**"],
              ["Maintenance", "Daily **PEG**, often for months; wean only after regular soft stools"],
              ["Toilet routine", "Scheduled sitting after meals, a footstool, praise or reward for sitting"],
              ["Behavioral therapy", "An **adjunct** to laxatives, not a replacement"]
            ] },
            { type: "update", kind: "post", year: "2026", title: "New pediatric constipation guideline", source: "Gordon M, de Geus A, Boruta M, et al. ESPGHAN/NASPGHAN guidelines for treatment of functional constipation in children aged 0–18 years. J Pediatr Gastroenterol Nutr 2026", text: "The 2026 ESPGHAN/NASPGHAN guideline, replacing the 2014 version, makes a **strong** recommendation for **polyethylene glycol** (with or without electrolytes). Disimpaction may use **high-dose PEG or enemas** for **3–6 days**. Behavioral interventions are advised as **adjuncts** to medication, and demystification and toilet-training advice are recommended for all." },
            { type: "callout", kind: "pearl", title: "Terms that differ outside the DSM", text: "The **International Children’s Continence Society (ICCS)** uses **enuresis** only for wetting **during sleep**; daytime wetting is **daytime urinary incontinence**, not “diurnal enuresis.” Pediatric gastroenterology uses **Rome IV**: **functional constipation** and **functional nonretentive fecal incontinence**, which roughly match the two encopresis subtypes." }
          ]
        },
        {
          id: "s11-approach",
          title: "Putting it together: the approach and the classic traps",
          pages: "399–406",
          blocks: [
            { type: "steps", title: "Five steps for wetting or soiling", items: [
              ["1. Urine or feces (or both)?", "Urine → enuresis pathway; feces → encopresis pathway; both → assess each, constipation first."],
              ["2. Old enough?", "Developmental age **5** for urine, **4** for feces; use **mental age** in developmental delay."],
              ["3. Often and long enough?", "Enuresis: **≥2×/week for 3 consecutive months** or distress or impairment. Encopresis: **≥1×/month for 3 months**."],
              ["4. Medical or medication cause?", "Urine: diabetes, diabetes insipidus, UTI, neurogenic bladder, structural anomaly, antipsychotics, diuretics. Feces: diarrhea, spina bifida, anal stenosis, laxatives (constipation-mediated causes are allowed)."],
              ["5. Subtype and code", "Enuresis: nocturnal only, diurnal only, both (**F98.0**). Encopresis: with or without constipation and overflow incontinence (**F98.1**). Residual: N39.498 or R32 for urine; R15.9 for feces."]
            ] },
            { type: "callout", kind: "key", title: "Ten traps", text: "1) Enuresis age **5**, encopresis age **4**. 2) Enuresis counts **weekly** (2×), encopresis **monthly** (1×); both need **3 months**. 3) Enuresis has a **distress-or-impairment** alternative; encopresis does **not**. 4) **Intentional** wetting or soiling still counts. 5) Developmental age, not just birthdays. 6) Encopresis allows a medical cause **only through constipation**. 7) Wetting on **antipsychotics or diuretics** is a side effect, unless it was present before. 8) Nocturnal only = **monosymptomatic**; nocturnal and diurnal = **nonmonosymptomatic**. 9) Soiling **without** constipation goes with **ODD or conduct disorder** and with **enuresis**. 10) Fecal residual codes are **R15.9** for both other specified and unspecified." },
            { type: "p", text: "Practice with the [[helper:elimination|elimination disorder helper]], then compare [[dx:enuresis|enuresis]] with [[dx:encopresis|encopresis]] side by side in the library." }
          ]
        }
      ]
    }
  ]
});
