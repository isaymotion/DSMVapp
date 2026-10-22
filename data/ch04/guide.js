/* Chapter 4 study guide. Source: DSM-5-TR, Depressive Disorders (pp. 177–214).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. */
SP.add("ch04", "guide", {
  intro: "Every depressive disorder shares **sad, empty or irritable mood** with somatic and cognitive changes that affect function. What separates them is **duration, timing or presumed cause** (p. 177). **Major depressive disorder** is the classic condition: discrete episodes of **at least 2 weeks**, with remissions between them, and **never** a manic or hypomanic episode. **Persistent depressive disorder** is depression lasting **2 years** (1 year in youth) and merges DSM-IV dysthymia with chronic major depression. **Disruptive mood dysregulation disorder** gives a home to children aged 6–18 with **chronic, nonepisodic irritability** and frequent outbursts, so they are not labeled bipolar. **Premenstrual dysphoric disorder** is tied to the **luteal phase** and must be confirmed by **daily prospective ratings**. Substances, medications and medical conditions can all cause depression, and the **other specified** and **unspecified** categories catch the rest. The chapter closes with the **specifiers** that describe the current episode. The [[helper:depressive|depressive disorders helper]] and the [[helper:grief|grief helper]] walk you through the reasoning.",
  objectives: [
    "State the full criteria for a **major depressive episode** (five of nine symptoms for **2 weeks**, including depressed mood or loss of interest) and explain how symptoms that may come from a **medical condition** are counted.",
    "Code major depressive disorder by **single or recurrent episode**, **severity**, **psychotic features** and **remission**, knowing that a recurrence needs a **2-month** gap.",
    "Separate a major depressive episode from **normal sadness**, **grief**, **demoralization**, **adjustment disorder** and **prolonged grief disorder**.",
    "Diagnose **persistent depressive disorder** (≥2 years, 1 in youth, two of six symptoms, never symptom-free >2 months) and assign its **course specifiers**.",
    "Apply the **disruptive mood dysregulation disorder** rules: outbursts ≥3 times a week, irritable mood between them, ≥12 months, two settings, onset **before 10**, first diagnosed between **6 and 18**, and its exclusions with **bipolar disorder, ODD and IED**.",
    "Diagnose **premenstrual dysphoric disorder** (five symptoms, at least one affective, confirmed by **two cycles** of daily ratings) and distinguish it from **premenstrual syndrome** and premenstrual exacerbation.",
    "Recognize **substance/medication-induced** and **medically caused** depression, with their codes, typical agents and conditions, and how they differ from independent depression.",
    "Use the depressive **specifiers**: anxious distress, mixed features, melancholic, atypical, psychotic (congruent or incongruent), catatonia, peripartum onset, seasonal pattern, remission and severity.",
    "Recall the key epidemiology, course, suicide risk and comorbidity of each disorder."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s4-map",
          title: "How the chapter is built",
          pages: "177",
          blocks: [
            { type: "p", text: "The depressive disorders are grouped because they all involve **sad, empty or irritable mood** plus changes that significantly affect function, such as the somatic and cognitive changes of major depression. The disorders differ in **duration**, **timing** (for example, the premenstrual week) and **presumed etiology** (a substance or a medical condition). Unlike DSM-IV, DSM-5 separates the depressive disorders from the bipolar disorders into their own chapter." },
            { type: "table", caption: "Diagnoses in this chapter (codes as listed in DSM-5-TR)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:dmdd|Disruptive mood dysregulation disorder]]", "F34.81", "Children 6–18: severe outbursts ≥3/week + persistently irritable mood, ≥12 months, onset <10", "178–182"],
              ["[[dx:mdd|Major depressive disorder]]", "F32.x / F33.x", "≥1 major depressive episode (≥2 weeks), never mania or hypomania", "183–192"],
              ["[[dx:pdd|Persistent depressive disorder]]", "F34.1", "Depressed mood most days for ≥2 years (1 in youth) + two of six symptoms", "193–197"],
              ["[[dx:pmdd|Premenstrual dysphoric disorder]]", "F32.81", "≥5 symptoms in the final premenstrual week, gone the week after menses", "197–200"],
              ["[[dx:substance-induced-depressive|Substance/medication-induced depressive disorder]]", "By substance (e.g., F10.24)", "Depression caused by intoxication, withdrawal or a medication", "201–206"],
              ["[[dx:depressive-due-to-amc|Depressive disorder due to another medical condition]]", "F06.31 / F06.32 / F06.34", "Depression as the direct physiological effect of a medical condition", "206–209"],
              ["[[dx:other-specified-depressive|Other specified depressive disorder]]", "F32.89", "Subthreshold or atypical presentations, reason recorded", "209–210"],
              ["[[dx:unspecified-depressive|Unspecified depressive disorder]]", "F32.A", "Subthreshold, reason not recorded or information insufficient", "210"],
              ["[[dx:unspecified-mood|Unspecified mood disorder]]", "F39", "Cannot yet choose between bipolar and depressive", "210"]
            ] },
            { type: "flow", title: "What separates the depressive disorders", steps: [
              ["Duration", "2 weeks (major depressive episode) · 2 years, 1 in youth (persistent depressive) · 12 months (DMDD)", "drug"],
              ["Timing", "Premenstrual week (PMDD) · seasonal pattern · peripartum onset", "hy"],
              ["Etiology", "A substance, a medication or another medical condition", "case"]
            ], note: "Every primary depressive disorder requires that there has **never** been a manic or hypomanic episode (DMDD: never a manic-like period lasting more than 1 day). Any lifetime mania or hypomania moves the diagnosis to [[ch:ch03|Chapter 3]]." },
            { type: "callout", kind: "key", title: "Five questions, in this order", text: "**1. Cause?** (substance, medication, medical condition, delirium). **2. Ever manic or hypomanic?** If yes, it is a bipolar disorder. **3. A child with chronic irritability and outbursts?** Consider DMDD. **4. Tied to the menstrual cycle?** Consider PMDD. **5. Full major depressive episode, chronic course, or neither?** That decides between major depressive disorder, persistent depressive disorder (or both) and the other specified categories. The [[helper:depressive|depressive helper]] asks exactly these." }
          ]
        }
      ]
    },
    {
      title: "Disruptive mood dysregulation disorder",
      sections: [
        {
          id: "s4-dmdd-criteria",
          title: "DMDD: criteria and why it exists",
          pages: "178–179",
          blocks: [
            { type: "criteria", title: "Disruptive mood dysregulation disorder in brief", code: "F34.81", pages: "178", items: [
              ["A", "Severe **recurrent temper outbursts**, verbal (rages) and/or behavioral (aggression toward people or property), **grossly out of proportion** to the situation."],
              ["B", "Outbursts are **inconsistent with developmental level**."],
              ["C", "Outbursts occur on average **three or more times per week**."],
              ["D", "Between outbursts, mood is **persistently irritable or angry** most of the day, nearly every day, and **observable by others** (parents, teachers, peers)."],
              ["E", "Criteria A–D present for **12 or more months**, with no period of **3 or more consecutive months** without all of them."],
              ["F", "A and D are present in **at least two of three settings** (home, school, with peers) and **severe in at least one**."],
              ["G", "Not diagnosed for the first time **before age 6** or **after age 18**."],
              ["H", "By history or observation, onset of A–E is **before age 10**."],
              ["I", "Never a distinct period lasting **more than 1 day** with full symptom criteria (except duration) for a **manic or hypomanic** episode.", [], "Developmentally appropriate mood elevation, such as excitement about a highly positive event, does not count as mania."],
              ["J", "Not only during a **major depressive episode** and not better explained by another disorder (autism spectrum disorder, PTSD, separation anxiety disorder, persistent depressive disorder).", [], "**Cannot coexist** with oppositional defiant disorder, intermittent explosive disorder or bipolar disorder. **Can coexist** with major depressive disorder, ADHD, conduct disorder and substance use disorders. If criteria for DMDD and ODD are both met, diagnose **only DMDD**. Any lifetime manic or hypomanic episode rules DMDD out."],
              ["K", "Not due to a substance or another medical or neurological condition."]
            ] },
            { type: "callout", kind: "mnemonic", title: "The numbers: 3 · 12 · 3 · 2 · 6–18 · 10 · 1", text: "Outbursts **3**×/week · for **12** months · no break of **3** months · in **2** of 3 settings · first diagnosed age **6–18** · onset before **10** · never a manic-like spell longer than **1** day. A teaching device, not part of the manual." },
            { type: "p", text: "DMDD was added in DSM-5 because of concern, in the United States and increasingly elsewhere, about the **overdiagnosis and treatment of bipolar disorder in children**. Late in the twentieth century, some researchers argued that severe, **nonepisodic irritability** was how mania looked in children, and rates of pediatric bipolar diagnoses rose sharply. The rise came from lumping two presentations together: **classic, episodic** mania and **chronic, nonepisodic** severe irritability. DSM-5 reserves the term bipolar disorder for **episodic** presentations and gives the nonepisodic group its own diagnosis (p. 179)." },
            { type: "p", text: "It sits in the depressive chapter because children with this pattern typically develop **unipolar depressive or anxiety disorders**, not bipolar disorders, as they grow into adolescence and adulthood (p. 177)." },
            { type: "defs", title: "The two faces of severe irritability (p. 178)", items: [
              ["Temper outbursts", "Usually in response to **frustration**; verbal or behavioral (aggression against property, self or others). They must be frequent (≥3 a week on average), last at least a year in at least two settings, and be developmentally inappropriate."],
              ["Irritable or angry mood between outbursts", "**Chronic and persistent**: characteristic of the child, present most of the day nearly every day, and noticeable to others in the child’s environment."]
            ] },
            { type: "case", title: "Clinical vignette: the third-grade explosions", text: "A 9-year-old boy has screamed, thrown furniture or hit his siblings about four times a week for 18 months, over small frustrations such as losing a game. His teacher reports the same outbursts in class, and between them he is grumpy and snaps at everyone almost all day. His parents date the problem to kindergarten. There have never been days of unusual elation, grandiosity or decreased need for sleep.", point: "Frequent, out-of-proportion outbursts with **persistently irritable mood between them**, for over a year, in two settings, onset before 10, first diagnosed at 9, and no manic-like episodes: **F34.81 disruptive mood dysregulation disorder**. Even if he also meets criteria for ODD, only DMDD is diagnosed." }
          ]
        },
        {
          id: "s4-dmdd-features",
          title: "DMDD: prevalence, course, risk and impact",
          pages: "179–181",
          blocks: [
            { type: "list", title: "Prevalence (p. 179)", items: [
              "**Common** in pediatric mental health clinics; community prevalence is **unclear**.",
              "**2.5%** among 11-year-olds in a population-based Brazilian cohort.",
              "Possibly more common in younger children: **8.2%** in a US community sample of **6-year-olds**.",
              "No consistent sex difference in **population** samples, but **clinic** samples are mostly boys (up to **80%** in one Turkish chart review)."
            ] },
            { type: "list", title: "Development and course (pp. 179–180)", items: [
              "Onset must be **before 10**; the diagnosis is not applied below a **developmental age of 6**. Use it in the age range where its validity was established, **6–18 years**.",
              "About **half** still meet criteria **1 year later** (a large, mainly rural US study); those who no longer do often keep clinically impairing irritability.",
              "Conversion to **bipolar disorder is very low**. The usual adult outcome is **unipolar depressive and/or anxiety disorders**."
            ] },
            { type: "defs", title: "Risk and prognostic factors (p. 180)", items: [
              ["Temperamental", "A long history of chronic irritability, often first meeting criteria for **ODD**. Many also meet criteria for **ADHD** and an **anxiety disorder** from an early age; some meet criteria for major depressive disorder."],
              ["Environmental", "Disrupted family life: psychological abuse or neglect, parental psychiatric disorder, limited parental education, single-parent household, early trauma, parental death or grief, divorce, and malnutrition (e.g., vitamin deficiency)."],
              ["Genetic and physiological", "A family history of **depression** may be a risk factor; twin data suggest the link between early irritability and later depression and anxiety is partly genetic. Children with DMDD share some information-processing deficits with pediatric bipolar disorder (face-emotion labeling, decision-making, cognitive control), but the same behavior may rest on different neural dysfunction."]
            ] },
            { type: "callout", kind: "culture", text: "Culture-related data are limited. Sociocultural factors shape impulsivity and emotion, reward, threat and behavior dysregulation, especially in **postconflict zones** or communities affected by long-standing **racism and discrimination**. Distinguish DMDD from **adaptive, context-dependent and transitory** responses to adversity (p. 180)." },
            { type: "p", text: "**Sex and gender** (p. 180): irritability is strongly genetic in both sexes, but in boys genetic factors explain more of the variance as childhood goes on, while in girls the genetic share falls in adolescence and environment matters more." },
            { type: "p", text: "**Functional consequences** (pp. 180–181): marked disruption of family and peer relationships and school performance. Very low frustration tolerance makes school hard and keeps children out of ordinary activities. Dysfunction is **comparable to pediatric bipolar disorder**, and **aggression and psychiatric hospitalization** are common in both." }
          ]
        },
        {
          id: "s4-dmdd-ddx",
          title: "DMDD: differential diagnosis and comorbidity",
          pages: "181–182",
          blocks: [
            { type: "compare", title: "DMDD or pediatric bipolar disorder?", items: [
              { title: "Bipolar disorder", color: "case", points: ["**Episodic**: discrete episodes clearly different from the child’s usual mood.", "Mood change comes with new or worse distractibility, goal-directed activity and other B symptoms.", "Parents can name a **distinct period** when the child was markedly different.", "**Elevated or expansive mood and grandiosity** are common."] },
              { title: "DMDD", color: "drug", points: ["**Persistent** irritability over many months; it waxes and wanes but is characteristic of the child.", "No distinct episodes.", "Elevated mood and grandiosity are **not** characteristic.", "Ruled out by any full hypomanic or manic episode, or any manic-like period **lasting more than 1 day**."] }
            ] },
            { type: "defs", title: "Other differentials (pp. 181–182)", items: [
              ["Oppositional defiant disorder", "ODD symptoms are typical in DMDD, but DMDD-level mood symptoms are **rare in ODD**: only about **15%** of children with ODD meet DMDD criteria. DMDD needs severe, frequent outbursts **plus** persistent mood disruption between them, severe in one setting and at least mild to moderate in a second. If both are met, diagnose **only DMDD**."],
              ["Intermittent explosive disorder", "Severe outbursts too, but **no persistent irritable mood** between them, and IED can be diagnosed after only **3 months** (verbal or nondamaging physical aggression twice a week) instead of 12. Never diagnose both: with persistent irritability between outbursts, diagnose **only DMDD**."],
              ["ADHD, major depressive disorder, anxiety disorders", "Can be diagnosed **together** with DMDD. But irritability present **only** during a major depressive episode or persistent depressive disorder means the depressive diagnosis instead, and irritability only during an anxiety flare means the anxiety disorder instead."],
              ["Autism spectrum disorder", "Outbursts when routines are disturbed are **secondary to autism**; do not diagnose DMDD."]
            ] },
            { type: "table", caption: "What can coexist with DMDD? (p. 178 note to Criterion J)", head: ["Cannot coexist (diagnose one)", "Can coexist (diagnose both)"], rows: [
              ["**Bipolar disorder** → diagnose bipolar only", "**Major depressive disorder**"],
              ["**Oppositional defiant disorder** → diagnose DMDD only", "**ADHD**"],
              ["**Intermittent explosive disorder** → diagnose DMDD only", "**Conduct disorder**"],
              ["", "**Substance use disorders**"]
            ] },
            { type: "p", text: "**Comorbidity** (p. 182) is **extremely high**, higher than for many other pediatric disorders; DMDD alone is rare. The strongest overlap is with **ODD**, and the range of comorbid disruptive, mood, anxiety and even autism spectrum symptoms is unusually wide. Do not diagnose DMDD when the outbursts occur only in an **anxiety-provoking** context, when the routines of a child with **autism or OCD** are disturbed, or only during a **major depressive episode**." },
            { type: "callout", kind: "exam", text: "The asymmetry is the classic question: with **bipolar** disorder, keep bipolar and drop DMDD; with **ODD or IED**, keep DMDD and drop the other. Most children with DMDD also meet ODD criteria, but only about **15%** of children with ODD meet DMDD criteria." }
          ]
        }
      ]
    },
    {
      title: "Major depressive disorder",
      sections: [
        {
          id: "s4-mdd-criteria",
          title: "Major depressive disorder: criteria",
          pages: "183–184",
          blocks: [
            { type: "criteria", title: "Major depressive disorder in brief", code: "F32.x / F33.x", pages: "183", items: [
              ["A", "**Five or more** symptoms during the same **2-week** period, a change from previous functioning; at least one is **(1) depressed mood** or **(2) loss of interest or pleasure**. Do not count symptoms clearly due to another medical condition.", [
                "**Depressed mood** most of the day, nearly every day, by report or observation (in children and adolescents, can be **irritable mood**)",
                "Markedly diminished **interest or pleasure** in all or almost all activities, most of the day, nearly every day",
                "Significant **weight loss** when not dieting or **weight gain** (more than **5%** of body weight in a month), or appetite change nearly every day (in children, failure to make expected weight gain)",
                "**Insomnia or hypersomnia** nearly every day",
                "**Psychomotor agitation or retardation** nearly every day, **observable by others**, not just subjective restlessness or slowing",
                "**Fatigue** or loss of energy nearly every day",
                "**Worthlessness** or excessive or inappropriate **guilt** (may be delusional) nearly every day, not just self-reproach about being sick",
                "Diminished ability to **think or concentrate**, or **indecisiveness**, nearly every day",
                "Recurrent **thoughts of death** (not just fear of dying), recurrent suicidal ideation without a plan, a suicide attempt or a specific plan"
              ]],
              ["B", "Clinically significant **distress or impairment**."],
              ["C", "Not attributable to a **substance** or another **medical condition**.", [], "Criteria A–C define a **major depressive episode**."],
              ["D", "At least one episode is **not better explained by schizoaffective disorder** and not superimposed on schizophrenia, schizophreniform disorder, delusional disorder or other psychotic disorders."],
              ["E", "There has **never** been a manic or hypomanic episode.", [], "Does not apply if every manic-like or hypomanic-like episode was **substance-induced** or due to a **medical condition**."]
            ], note: "A note after Criterion C covers responses to a **significant loss** (bereavement, financial ruin, losses from a natural disaster, serious illness or disability). They may include intense sadness, rumination, insomnia, poor appetite and weight loss that resemble depression. These may be understandable, but a major depressive episode **in addition to** the normal response should still be carefully considered, using the person’s history and **cultural norms** for expressing distress after loss." },
            { type: "callout", kind: "mnemonic", title: "SIG E CAPS", text: "**S**leep · **I**nterest · **G**uilt · **E**nergy · **C**oncentration · **A**ppetite · **P**sychomotor change · **S**uicidality, plus depressed mood. Five of nine, for 2 weeks, with mood or interest among them. A teaching mnemonic, not part of the manual." },
            { type: "defs", title: "Counting rules (p. 185)", items: [
              ["New or worse", "A symptom counts only if it is **newly present** or **clearly worse** than before the episode."],
              ["Nearly every day", "All symptoms must be present nearly every day for **2 consecutive weeks**, except **thoughts of death and suicidal ideation** (must be **recurrent**) and a **suicide attempt or specific plan** (once is enough)."],
              ["Effortful normality", "In milder episodes, functioning may look normal but take **markedly increased effort**."],
              ["Medical illness", "Symptoms count **unless clearly and fully** due to the medical condition (weight loss with untreated diabetes, fatigue with cancer, hypersomnia early in pregnancy, insomnia late in pregnancy or postpartum). Weigh the **nonvegetative** symptoms (dysphoria, anhedonia, guilt or worthlessness, poor concentration or indecision, suicidal thoughts) with particular care. Criteria limited to these identify **nearly the same people** as the full criteria (p. 187)."]
            ] },
            { type: "callout", kind: "exam", text: "The presenting complaint is often **insomnia or fatigue**, not low mood, so not probing for the other symptoms leads to **underdiagnosis**. **Psychomotor** changes are much less common than fatigue and sleep problems but mark **greater severity**, as does **delusional or near-delusional guilt** (p. 185)." }
          ]
        },
        {
          id: "s4-mdd-coding",
          title: "Major depressive disorder: coding and recording",
          pages: "184–185",
          blocks: [
            { type: "p", text: "The code depends on whether the episode is **single or recurrent**, the current **severity**, **psychotic features** and **remission status**. Severity and psychotic features are coded only when full criteria for a major depressive episode are **currently met**; remission specifiers only when they are **not**." },
            { type: "table", caption: "ICD-10-CM codes for major depressive disorder (p. 184)", head: ["Severity / course specifier", "Single", "Recurrent"], rows: [
              ["Mild", "F32.0", "F33.0"],
              ["Moderate", "F32.1", "F33.1"],
              ["Severe", "F32.2", "F33.2"],
              ["With psychotic features", "F32.3", "F33.3"],
              ["In partial remission", "F32.4", "F33.41"],
              ["In full remission", "F32.5", "F33.42"],
              ["Unspecified", "F32.9", "F33.9"]
            ] },
            { type: "defs", title: "Rules behind the table (p. 184)", items: [
              ["Recurrent", "Needs an interval of at least **2 consecutive months** between separate episodes during which criteria for a major depressive episode are not met."],
              ["Psychotic features", "Code “with psychotic features” **irrespective of severity** (F32.3 / F33.3)."],
              ["F32.9 is not F32.A", "**F32.9** is major depressive disorder, single episode, **unspecified**. **F32.A** is the separate catch-all category **unspecified depressive disorder**."]
            ] },
            { type: "steps", title: "Recording order (pp. 184–185)", items: [
              ["Disorder and course. ", "“Major depressive disorder, single episode” or “recurrent episode.”"],
              ["Coded specifier. ", "Severity, psychotic features, or partial/full remission."],
              ["Uncoded specifiers. ", "As many as apply to the current (or most recent) episode: anxious distress, mixed features, melancholic, atypical, mood-congruent or incongruent psychotic features, catatonia (**+F06.1**), peripartum onset. **Seasonal pattern** describes the pattern of recurrent episodes."],
              ["Example. ", "F33.2 major depressive disorder, recurrent episode, severe, with melancholic features, with anxious distress, moderate."]
            ] },
            { type: "callout", kind: "pearl", text: "Catatonia is the only depressive specifier with its **own extra code**: list **F06.1** catatonia associated with another mental disorder after the depressive diagnosis (see [[page:c/ch02/guide/s2-catatonia|catatonia in Chapter 2]])." }
          ]
        },
        {
          id: "s4-mdd-features",
          title: "Major depressive disorder: what the symptoms look like",
          pages: "185–187",
          blocks: [
            { type: "defs", title: "Symptom by symptom (pp. 185–187)", items: [
              ["Depressed mood (A1)", "Described as sad, hopeless, discouraged or “down in the dumps.” Sadness may be denied at first and elicited at interview (e.g., the person looks about to cry). Some report feeling “blah,” having no feelings, or anxiety; some stress **bodily aches and pains**; many show increased **irritability**. In children and adolescents, an irritable or cranky mood may replace sadness, to be distinguished from irritability only when frustrated."],
              ["Loss of interest or pleasure (A2)", "Nearly always present to some degree: “not caring anymore,” dropping hobbies (the avid golfer who stops playing), social withdrawal, and often reduced **sexual interest**."],
              ["Appetite and weight (A3)", "A decrease (forcing oneself to eat) or an increase, often with **cravings for sweets or carbohydrates**. In children, failure to make expected weight gains."],
              ["Sleep (A4)", "Insomnia is typically **middle insomnia** (waking at night, difficulty returning to sleep) or **terminal insomnia** (waking too early); initial insomnia also occurs. Hypersomnia means long night sleep or more daytime sleep. Disturbed sleep is sometimes the reason for seeking care."],
              ["Psychomotor change (A5)", "Agitation (unable to sit still, pacing, hand-wringing, pulling or rubbing skin or clothing) or retardation (slowed speech, thinking and movement, long pauses before answering, quiet or monotonous speech, muteness). Must be **observable by others**. People with one type often have a history of the other."],
              ["Fatigue (A6)", "Sustained tiredness without exertion; washing and dressing may take twice as long. Accounts for **much of the impairment**, both in episodes and in incomplete remission."],
              ["Worthlessness or guilt (A7)", "Unrealistic negative self-evaluation, rumination over minor past failings, misreading trivial events as proof of defects. May reach **delusional** proportions (responsible for world poverty). Blaming oneself for being sick is common and does **not** meet the criterion unless delusional."],
              ["Concentration (A8)", "Distractibility, memory complaints, indecision. A precipitous **drop in grades** in children. In older adults memory complaints may be mistaken for early dementia (**pseudodementia**) and often fully remit with treatment, but depression can also be the **first sign of an irreversible dementia**."],
              ["Death and suicide (A9)", "From a passive wish not to wake up, or a belief others would be better off, to recurrent thoughts of suicide and a specific plan. Warning signs: putting affairs in order, acquiring means, choosing a time and place. Motives include giving up, ending unbearable pain, seeing no future enjoyment, and not wanting to be a burden. **Resolution of such thinking** may be a better measure of reduced risk than denial of plans."]
            ] },
            { type: "p", text: "**Impairment** (Criterion B) ranges from mild interference that others barely notice to inability to manage basic self-care or hygiene. The person’s report may be limited by poor concentration and memory or a tendency to deny or explain away symptoms, so **collateral informants** help, both for the current episode and to look for **past mania or hypomania**. Because episodes can begin gradually, asking about the **worst part** of the current episode is most likely to detect symptoms (p. 187)." },
            { type: "p", text: "**Associated features** (p. 187): high mortality, mostly but not only from **suicide** (depressed people admitted to nursing homes have a markedly higher chance of dying in the first year). Tearfulness, irritability, brooding, obsessive rumination, anxiety, phobias, health worry and **pain** complaints are common; children may show **separation anxiety**. No laboratory test is sensitive or specific enough for diagnosis. **HPA axis hyperactivity** is the most studied abnormality and is linked to **melancholia**, psychotic features and later suicide; neurotrophic factor variants, pro-inflammatory cytokines and imaging changes in emotion, reward and regulation circuits are also implicated." }
          ]
        },
        {
          id: "s4-mdd-course",
          title: "Major depressive disorder: prevalence and course",
          pages: "187–189",
          blocks: [
            { type: "list", title: "Prevalence (pp. 187–188)", items: [
              "US **12-month prevalence about 7%**.",
              "Ages **18–29** have **threefold** the prevalence of people aged 60 or older.",
              "Females have about **twofold** higher rates, especially between **menarche and menopause**. The sex difference is the most reproducible finding; it peaks in adolescence and then stabilizes.",
              "Women report more **atypical** symptoms: hypersomnia, increased appetite, leaden paralysis.",
              "Prevalence varies **eight- to ninefold** across world regions.",
              "US prevalence **rose from 2005 to 2015**, fastest in **youth**; after adjustment, the increase was significant in non-Hispanic Whites but not in non-Hispanic Blacks or Hispanics."
            ] },
            { type: "list", title: "Development and course (pp. 188–189)", items: [
              "Can start at any age; the likelihood of onset rises markedly with **puberty**. US incidence **peaks in the 20s**, but first onset in **late life** is not uncommon.",
              "The course varies: some people rarely if ever remit; others have years with few or no symptoms between discrete episodes. Course may reflect **poverty, racism and marginalization**.",
              "**Remission** = **2 or more months** with no symptoms, or only one or two mild symptoms.",
              "Ask for the last **2-month period entirely free** of symptoms: chronicity raises the likelihood of underlying **personality, anxiety and substance use disorders** and lowers the chance of full recovery. Symptoms most days may warrant an added diagnosis of **persistent depressive disorder**.",
              "Recovery begins within **3 months** for **40%** and within **1 year** for **80%**. **Recency of onset** strongly predicts near-term recovery.",
              "Lower recovery rates: **psychotic features**, prominent **anxiety**, **personality disorders**, greater **severity** (and longer current episode).",
              "Recurrence risk **falls** the longer remission lasts, and is higher after a **severe** episode, in **younger** people and after **multiple** episodes. Even **mild leftover symptoms** strongly predict recurrence."
            ] },
            { type: "callout", kind: "exam", title: "Who turns out to be bipolar?", text: "A substantial proportion of people who first look like major depressive disorder later prove to have **bipolar disorder**. This is more likely with onset in **adolescence**, **psychotic features**, a **family history of bipolar illness** and the **mixed features** specifier. Major depression, especially **with psychotic features**, can also transition to **schizophrenia**, much more often than the reverse (p. 188)." },
            { type: "p", text: "**Age** has no clear effect on course or treatment response, but **hypersomnia and hyperphagia** are more likely in younger people and **melancholic** symptoms, especially psychomotor change, in older people. Earlier-onset depression is **more familial** and more often involves personality disturbance. Mean time to recovery does not change across episodes, and the chance of being in an episode does not generally rise or fall with time (p. 189)." }
          ]
        },
        {
          id: "s4-mdd-risk",
          title: "Major depressive disorder: risk, culture, sex and gender, suicide",
          pages: "189–190",
          blocks: [
            { type: "defs", title: "Risk and prognostic factors (p. 189)", items: [
              ["Temperamental", "**Negative affectivity (neuroticism)** is well established; high levels make depressive episodes after stressful life events more likely."],
              ["Environmental", "**Adverse childhood experiences**, especially multiple and varied ones, are potent risk factors. Women may be disproportionately exposed (including **sexual abuse**). Low income, limited education, **racism and discrimination** also raise risk. Stressful events often **precipitate** episodes, but their presence or absence near onset does **not** guide prognosis or treatment."],
              ["Genetic and physiological", "First-degree relatives have **2–4 times** the general risk, higher for **early-onset and recurrent** forms. Heritability is about **40%**, much of it shared with **neuroticism**. Women are also at risk at specific reproductive stages: **premenstrual**, **postpartum** and **perimenopause**."],
              ["Course modifiers", "Essentially all major nonmood disorders (anxiety, substance use, trauma- and stressor-related, feeding and eating, obsessive-compulsive) raise the risk of depression, and depression arising on top of them is often **more refractory**. Substance use, anxiety and **borderline personality** disorders are among the most common and may be **obscured** by the depression. Chronic medical illness (**diabetes, morbid obesity, cardiovascular disease**) raises risk, and those episodes more often become **chronic**."]
            ] },
            { type: "callout", kind: "culture", text: "A syndrome like major depression is found across cultures, though prevalence, course and symptoms vary. Common symptoms not in the criteria include **social isolation or loneliness, anger, crying and diffuse pain**, plus many culturally variable somatic complaints. Underdetection can lead to **overdiagnosis of schizophrenia spectrum disorders** in some ethnic and racialized groups facing discrimination. Greater **income inequality** goes with higher prevalence. In the US, depression appears **more chronic** among African Americans and Caribbean Blacks than non-Latinx Whites, possibly from racism, discrimination, sociostructural adversity and poor access to care (pp. 189–190)." },
            { type: "p", text: "**Sex and gender** (p. 190): no clear differences in treatment response or functional consequences. Women have more appetite and sleep disturbance (including **hyperphagia and hypersomnia**), **interpersonal sensitivity** and **gastrointestinal** symptoms. Men more often report maladaptive coping: **alcohol or drug misuse, risk taking and poor impulse control**." },
            { type: "list", title: "Association with suicidal thoughts or behavior (p. 190)", items: [
              "US age-adjusted suicide rates rose from **10.5 to 14.0 per 100,000** over two decades.",
              "Depressive illness carried a **17-fold** increased risk of suicide over the age- and sex-adjusted population rate in an earlier review.",
              "Suicide **attempts** become less likely in middle and late life, but the risk of **death by suicide** does not.",
              "Suicidal behavior is possible **at any time** during an episode.",
              "The most consistent risk factor is a **past attempt or threat**, yet **most suicides are not preceded** by a nonfatal attempt.",
              "**Anhedonia** is particularly strongly associated with suicidal ideation.",
              "Other risk factors: being single, living alone, social disconnection, early adversity, access to **firearms** or other lethal means, sleep disturbance, cognitive and decision-making deficits, and **hopelessness**.",
              "Women **attempt** more often; men more often **die by suicide**, though the sex gap is smaller in depression than in the general population.",
              "Comorbid aggressive-impulsive traits, borderline personality disorder, substance use, anxiety, medical illness and functional impairment add risk."
            ] },
            { type: "update", kind: "tr", title: "New in the text revision: a suicide section for every disorder", text: "DSM-5-TR added an **“Association With Suicidal Thoughts or Behavior”** section to the text of disorders where the evidence supports it, after review by a cross-cutting **Suicide** review group. In this chapter, the sections for MDD, PDD, PMDD, the substance-induced and the medically caused disorders all address it." },
            { type: "p", text: "**Functional consequences** (p. 190): from impairment so mild others do not notice to complete incapacity, mutism or catatonia. In general medical settings, people with major depression have **more pain and physical illness** and greater declines in physical, social and role function. Depressed women report more impairment in **relationships** than men." }
          ]
        },
        {
          id: "s4-mdd-ddx",
          title: "Major depressive disorder: differential diagnosis and comorbidity",
          pages: "191–192",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 191–192)", items: [
              ["Manic episodes with irritable mood or mixed features", "Irritable depression can resemble irritable mania. Count manic symptoms: **three** if mood is elevated, **four** if only irritable."],
              ["Bipolar I, bipolar II, other specified bipolar", "Any history of **mania** → bipolar I; **hypomania** without mania → bipolar II. Past periods of subthreshold hypomania may be diagnosed as **other specified bipolar** or **major depressive disorder**, depending on the clinician’s judgment of their significance."],
              ["Depressive disorder due to another medical condition", "If all the depressive-like episodes are the direct physiological effect of a condition (multiple sclerosis, stroke, hypothyroidism), MDD is not diagnosed."],
              ["Substance/medication-induced depressive disorder", "A substance is etiologically related: depression only during **cocaine withdrawal** is cocaine-induced depressive disorder."],
              ["Persistent depressive disorder", "Depressed mood **more days than not for 2 years**. If both are met, **diagnose both**."],
              ["Premenstrual dysphoric disorder", "Symptoms in the **final premenstrual week** that remit after menses; MDD episodes are not tied to the cycle."],
              ["Disruptive mood dysregulation disorder", "Outbursts with **persistent** irritable mood between them; in MDD irritability is **confined to episodes**."],
              ["Psychotic disorders", "Depressive symptoms are usually **associated features** of schizophrenia, delusional or schizophreniform disorder. A full major depressive episode superimposed on them can be added as **other specified depressive disorder**."],
              ["Schizoaffective disorder", "Requires delusions or hallucinations for **at least 2 weeks without** a major depressive episode, unlike MDD with psychotic features."],
              ["ADHD", "Distractibility and low frustration tolerance overlap; diagnose both if both are met, but do not overdiagnose depression in children with ADHD whose mood is **irritable rather than sad**."],
              ["Adjustment disorder with depressed mood", "A response to a stressor that does **not** meet full criteria for a major depressive episode."],
              ["Sadness", "A normal part of life. Do not diagnose an episode unless **severity** (five of nine), **duration** (2 weeks) and **impairment** are met; impairing subthreshold depression may be **other specified depressive disorder**."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 192): substance-related disorders, **panic disorder**, **generalized anxiety disorder**, **PTSD**, **OCD**, anorexia and bulimia nervosa, and **borderline personality disorder**. Women more often report comorbid anxiety disorders, bulimia and somatic symptom disorders; men more often report comorbid **alcohol and substance** use." },
            { type: "callout", kind: "exam", text: "Two pairs that are **both** diagnosed: **MDD + PDD** when criteria for each are met, and **MDD + ADHD**. A pair where only **one** is diagnosed: a depressive episode in someone with past **hypomania** is bipolar II, never MDD." }
          ]
        },
        {
          id: "s4-grief",
          title: "Grief, sadness and a major depressive episode",
          pages: "183, 192, 214",
          blocks: [
            { type: "p", text: "**Bereavement** is the loss of a loved one to death. It triggers grief that can be intense and share features with depression: sadness, poor sleep, poor concentration. Bereavement causes great suffering but does **not typically** cause a major depressive episode. When the two do occur together, symptoms and impairment are more severe and the **prognosis worse** than grief alone, and bereavement-related episodes tend to occur in people with **other vulnerabilities** (p. 177). In someone with past major depression, bereavement can trigger a **new episode or worsen** an existing one (p. 192)." },
            { type: "table", caption: "Grief or a major depressive episode? (footnote, p. 214)", head: ["Feature", "Grief", "Major depressive episode"], rows: [
              ["Predominant affect", "**Emptiness and loss**", "Persistent depressed mood; cannot anticipate happiness or pleasure"],
              ["Pattern", "Comes in **waves** (“pangs of grief”) tied to thoughts or reminders of the deceased; eases over days to weeks", "**Persistent**, not tied to specific thoughts"],
              ["Positive emotion", "Humor and positive emotions can coexist with the pain", "Pervasive unhappiness and misery"],
              ["Thought content", "Preoccupation with **thoughts and memories of the deceased**", "Self-critical, pessimistic rumination"],
              ["Self-esteem", "**Preserved**; any self-blame concerns failings toward the deceased (not visiting enough)", "**Worthlessness** and self-loathing"],
              ["Thoughts of death", "About the deceased, perhaps “joining” them", "Ending one’s life because of worthlessness, undeservingness or unbearable pain"]
            ] },
            { type: "compare", title: "Four look-alikes", items: [
              { title: "Normal sadness", color: "clin", points: ["Part of human experience.", "Fails the five-of-nine, 2-week or impairment test.", "Impairing but subthreshold → **other specified depressive disorder**."] },
              { title: "Adjustment disorder, depressed mood", color: "hy", points: ["Within **3 months** of a stressor.", "Full criteria for a major depressive episode are **not** met.", "Ends within 6 months after the stressor ends (Chapter 7)."] },
              { title: "Demoralization", color: "mech", points: ["Common in **chronic medical illness**: subjective incompetence, helplessness, hopelessness, wish to give up.", "Usually **no anhedonia**: pleasure and moments of happiness remain (p. 209)."] },
              { title: "Prolonged grief disorder", color: "drug", points: ["At least **12 months** after the death (**6** in children and adolescents).", "Intense **yearning** or **preoccupation** nearly every day for the last month, plus three other grief symptoms.", "Printed as **F43.8** (p. 322); coded **F43.81** since the October 2022 ICD-10-CM update."] }
            ] },
            { type: "update", kind: "tr", title: "Prolonged grief disorder joined the manual", text: "DSM-5-TR added **prolonged grief disorder** to the trauma- and stressor-related disorders. Its Criterion F says the symptoms must not be **better explained by major depressive disorder** or PTSD, and adjustment disorder now excludes reactions **better explained by prolonged grief disorder**. Bereavement can therefore lead to normal grief, a major depressive episode, adjustment disorder or prolonged grief disorder, each with its own rules." },
            { type: "case", title: "Clinical vignette: six weeks after the funeral", text: "A 58-year-old man lost his wife 6 weeks ago. He cries when he finds her handwriting and wishes he had taken her to the doctor sooner, yet laughs while telling stories about her and still enjoys his grandchildren’s visits. He sleeps poorly but is back at work. Over the past week, he has started saying he is “a worthless burden,” stopped eating, stays in bed all day, and says everyone would be better off if he were dead.", point: "The first weeks show **grief**: waves tied to reminders, preserved self-esteem, positive moments. The new picture adds **worthlessness**, pervasive loss of pleasure, functional collapse and **suicidal thinking** focused on himself. If it lasts 2 weeks with five symptoms, a **major depressive episode** should be diagnosed in addition to grief, and suicide risk assessed now." }
          ]
        }
      ]
    },
    {
      title: "Persistent depressive disorder",
      sections: [
        {
          id: "s4-pdd-criteria",
          title: "Persistent depressive disorder: criteria and specifiers",
          pages: "193–194",
          blocks: [
            { type: "criteria", title: "Persistent depressive disorder in brief", code: "F34.1", pages: "193", items: [
              ["A", "**Depressed mood** most of the day, **more days than not**, by report or observation, for **at least 2 years**.", [], "In children and adolescents, mood can be **irritable** and the duration must be at least **1 year**."],
              ["B", "While depressed, **two or more** of:", [
                "Poor appetite or overeating",
                "Insomnia or hypersomnia",
                "Low energy or fatigue",
                "Low self-esteem",
                "Poor concentration or difficulty making decisions",
                "Feelings of hopelessness"
              ]],
              ["C", "During the 2 years (1 for youth), **never without** the A and B symptoms for **more than 2 months** at a time."],
              ["D", "Criteria for major depressive disorder **may be continuously present** for 2 years."],
              ["E", "There has **never** been a manic or hypomanic episode."],
              ["F", "Not better explained by a persistent **schizoaffective disorder**, schizophrenia, delusional disorder or another psychotic disorder."],
              ["G", "Not due to a **substance** or another **medical condition** (e.g., hypothyroidism)."],
              ["H", "Clinically significant **distress or impairment**."]
            ], specifiers: [
              ["Features", "With anxious distress · with atypical features"],
              ["Remission", "In partial remission · in full remission"],
              ["Onset", "**Early onset**: before age 21 · **late onset**: age 21 or older"],
              ["Course (last 2 years)", "With pure dysthymic syndrome · with persistent major depressive episode · with intermittent major depressive episodes, with current episode · with intermittent major depressive episodes, without current episode"],
              ["Severity", "Mild · moderate · severe"]
            ], note: "If a major depressive episode is met at any time during the 2 years, **also diagnose major depressive disorder**, with the matching course specifier on the persistent depressive disorder (p. 193)." },
            { type: "callout", kind: "mnemonic", title: "HE’S 2 SAD", text: "**H**opelessness · **E**nergy low · **S**elf-esteem low · **2** years · **S**leep · **A**ppetite · **D**ecisions or concentration. Two of the six, more days than not. A teaching mnemonic, not part of the manual." },
            { type: "p", text: "The disorder **consolidates** DSM-IV **dysthymic disorder** and **chronic major depressive disorder** (p. 193). Major depression may precede it, and major depressive episodes may occur during it. People whose symptoms meet MDD criteria for 2 years receive **both** diagnoses (p. 194)." },
            { type: "callout", kind: "exam", title: "Look at what is missing", text: "The six PDD symptoms leave out **anhedonia**, **psychomotor change**, **guilt** and **suicidality**, and add **hopelessness** and **low self-esteem**. So a few people have 2+ years of depression that meets **neither** PDD nor MDD; they receive **other specified** or **unspecified** depressive disorder (p. 196)." }
          ]
        },
        {
          id: "s4-pdd-course",
          title: "Persistent depressive disorder: course specifiers, prevalence and risk",
          pages: "193–196",
          blocks: [
            { type: "table", caption: "Course specifiers: what happened in the last 2 years? (pp. 193–194, 195–196)", head: ["Specifier", "Major depressive episode in the last 2 years", "Add MDD?"], rows: [
              ["**With pure dysthymic syndrome**", "Full criteria **not** met in at least the preceding 2 years", "No"],
              ["**With persistent major depressive episode**", "Full criteria met **throughout** the preceding 2 years", "Yes"],
              ["**With intermittent major depressive episodes, with current episode**", "Criteria met **now**, with periods of **≥8 weeks** below threshold in the preceding 2 years", "Yes"],
              ["**With intermittent major depressive episodes, without current episode**", "Not met now, but **one or more** episodes in the preceding 2 years", "Yes"]
            ] },
            { type: "p", text: "Symptoms may have become part of everyday life, especially with early onset (“I’ve always been this way”), so they may not be reported unless the person is **asked directly** (p. 194)." },
            { type: "list", title: "Prevalence (p. 194)", items: [
              "US 12-month prevalence about **0.5%** for (DSM-IV) **dysthymic disorder** and **1.5%** for **chronic major depressive disorder**.",
              "Women have about **1.5** and **2** times the rate of men, respectively.",
              "Dysthymia estimates may be higher in **high-income** countries, but suicide risk and disability are comparable everywhere."
            ] },
            { type: "list", title: "Development and course (p. 194)", items: [
              "Often an **early and insidious onset** (childhood, adolescence or early adulthood) and by definition **chronic**.",
              "**Borderline personality disorder** is a particularly robust risk factor; when both are present, their features covary over time.",
              "**Early onset (before 21)** carries a higher likelihood of comorbid **personality** and **substance use** disorders.",
              "When symptoms rise to a major depressive episode, they tend to **fall back** to the lower level, and full resolution is **much less likely** than in nonchronic depression."
            ] },
            { type: "defs", title: "Risk and prognostic factors (p. 195)", items: [
              ["Temperamental", "Poorer long-term outcome with higher **neuroticism**, greater severity, poorer global functioning, and **anxiety disorders or conduct disorder**."],
              ["Environmental", "**Parental loss or separation** and **childhood adversity**."],
              ["Genetic and physiological", "No clear differences between DSM-IV dysthymia and chronic major depression, so findings for either apply. Relatives likely have more persistent depressive disorder and more depressive disorders in general than relatives of people with nonchronic MDD. Prefrontal cortex, anterior cingulate, amygdala and hippocampus are implicated; polysomnographic abnormalities are possible."]
            ] },
            { type: "callout", kind: "culture", text: "Cultures and age cohorts differ in how abnormal they consider chronic low mood; some regard **long-standing depressive symptoms** as a normal reaction to adversity, which affects detection and acceptance of treatment (p. 195)." },
            { type: "p", text: "**Suicide and function** (p. 195): elevated suicide risk in high-, middle- and low-income countries alike. Effects on social and occupational function vary widely but can be **as great as or greater than** those of major depressive disorder." }
          ]
        },
        {
          id: "s4-pdd-ddx",
          title: "Persistent depressive disorder: differential diagnosis",
          pages: "195–197",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 195–197)", items: [
              ["Major depressive disorder", "Depressed mood more days than not + two Criterion B symptoms for ≥2 years = PDD. If a major depressive episode occurs at any point, **add MDD** and the course specifier."],
              ["Other specified depressive disorder", "Chronic depression that never meets PDD criteria (because the symptoms present are the MDE-only ones) and has never met MDE criteria."],
              ["Bipolar I and II", "Any **manic** episode → bipolar I. **Hypomania** with a past major depressive episode → bipolar II. Hypomania with chronic depression that **never** reached a major depressive episode → **other specified bipolar** disorder."],
              ["Cyclothymic disorder", "**Precludes PDD.** Two years of depressed mood with **numerous hypomanic-symptom periods**, never symptom-free >2 months and never a full episode = cyclothymic disorder."],
              ["Psychotic disorders", "Depression is a common feature of chronic psychosis; no separate PDD if it occurs **only** during the psychotic disorder, including **residual phases**."],
              ["Depressive or bipolar disorder due to another medical condition", "If the mood disturbance is the direct effect of a usually **chronic** condition (multiple sclerosis), diagnose that; if not, record PDD and list the medical condition (e.g., diabetes) as concomitant."],
              ["Substance/medication-induced disorder", "A substance is judged etiologically related."],
              ["Personality disorders", "Commonly co-occur. If criteria for both are met, **diagnose both**."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 197): compared with MDD, people with PDD have more psychiatric comorbidity overall, especially **anxiety**, **substance use** and **personality** disorders. **Early-onset** PDD is strongly associated with **Cluster B and C** personality disorders." },
            { type: "case", title: "Clinical vignette: “I’ve always been this way”", text: "A 34-year-old accountant comes in for a sleep problem. Asked directly, she says she has felt low most days since college, with poor sleep, low energy, low self-confidence and a sense that nothing will improve. The longest good stretch she remembers lasted about a month. She has never had two weeks of five or more symptoms, nor any elevated periods, and she does not drink or use drugs.", point: "Depressed mood more days than not for well over 2 years, with **four** Criterion B symptoms and no symptom-free spell over 2 months: **F34.1 persistent depressive disorder, early onset (began before 21), with pure dysthymic syndrome**." }
          ]
        }
      ]
    },
    {
      title: "Premenstrual dysphoric disorder",
      sections: [
        {
          id: "s4-pmdd-criteria",
          title: "PMDD: criteria and recording",
          pages: "197–198",
          blocks: [
            { type: "criteria", title: "Premenstrual dysphoric disorder in brief", code: "F32.81", pages: "197", items: [
              ["A", "In **most menstrual cycles**, at least **five** symptoms are present in the **final week before menses**, start to improve within a few days after menses begin, and become **minimal or absent** in the week after menses."],
              ["B", "At least **one** of these affective symptoms:", [
                "Marked **affective lability** (mood swings, sudden sadness or tearfulness, rejection sensitivity)",
                "Marked **irritability or anger**, or more interpersonal conflict",
                "Marked **depressed mood**, hopelessness or self-deprecating thoughts",
                "Marked **anxiety**, tension, feeling keyed up or on edge"
              ]],
              ["C", "At least **one** of these, to reach **five in total** with Criterion B:", [
                "Decreased **interest** in usual activities",
                "Subjective difficulty **concentrating**",
                "**Lethargy**, easy fatigability, marked lack of energy",
                "Marked **appetite** change, overeating or food cravings",
                "**Hypersomnia or insomnia**",
                "Feeling **overwhelmed** or out of control",
                "**Physical** symptoms: breast tenderness or swelling, joint or muscle pain, “bloating,” weight gain"
              ], "Criteria A–C must have been met in most cycles of the **preceding year**."],
              ["D", "Clinically significant **distress or interference** with work, school, social activities or relationships."],
              ["E", "Not merely an **exacerbation** of another disorder (MDD, panic disorder, PDD, a personality disorder), although it may co-occur with any of them."],
              ["F", "Criterion A is confirmed by **prospective daily ratings** for at least **two symptomatic cycles** (the diagnosis may be made **provisionally** before then)."],
              ["G", "Not due to a substance (drug, medication, other treatment) or another medical condition (e.g., **hyperthyroidism**)."]
            ], note: "Recording (p. 198): until two cycles of prospective ratings confirm it, write **“premenstrual dysphoric disorder, provisional.”**" },
            { type: "callout", kind: "mnemonic", title: "5 · 1 · 2", text: "**Five** symptoms, at least **one** affective (lability, irritability, depression, anxiety), confirmed over **two** cycles of daily ratings. A teaching device, not part of the manual." },
            { type: "p", text: "PMDD moved from a DSM-IV appendix of criteria for further study into the main manual in DSM-5, after almost **20 years** of research confirming a specific, **treatment-responsive** depressive disorder that begins after **ovulation**, remits within a few days of **menses** and markedly affects function (p. 177)." }
          ]
        },
        {
          id: "s4-pmdd-features",
          title: "PMDD: features, prevalence and differential diagnosis",
          pages: "198–200",
          blocks: [
            { type: "list", title: "Diagnostic features (p. 198)", items: [
              "Core: **mood lability, irritability, dysphoria and anxiety** in the premenstrual phase, remitting around or shortly after menses begin.",
              "Symptoms usually **peak around the onset of menses** and may linger into the first few days, but there must be a **symptom-free period in the follicular phase**.",
              "**Somatic or behavioral** symptoms without mood or anxiety symptoms are **not enough**.",
              "Severity (not duration) is comparable to a major depressive episode or generalized anxiety disorder.",
              "Expression is shaped by social and cultural background, religious beliefs, attitudes toward the reproductive cycle and gender roles.",
              "Delusions and hallucinations in the late luteal phase have been described but are **rare**."
            ] },
            { type: "list", title: "Prevalence and course (pp. 198–199)", items: [
              "12-month community prevalence **5.8%** (a large German study).",
              "**1.3%** of menstruating US women over two cycles of prospective ratings, with impairment and no co-occurring mental disorder (the most rigorous US estimate).",
              "Retrospective estimates run **higher** than prospective ones, but daily ratings may undercount the most severe cases.",
              "Possibly more common in **adolescent girls**.",
              "Onset any time after **menarche**; new-case incidence **2.5%** over 40 months (Germany).",
              "Symptoms **stop after menopause**, though cyclical hormone replacement can bring them back."
            ] },
            { type: "defs", title: "Risk, markers and suicide (p. 199)", items: [
              ["Environmental", "Stress, **interpersonal trauma**, seasonal changes, and sociocultural aspects of female sexual behavior and gender roles."],
              ["Genetic", "No heritability studies of PMDD itself; heritability of premenstrual dysphoric **symptoms** is estimated at **30%–80%**."],
              ["Diagnostic markers", "Two months of **prospective ratings**. Validated scales include the **Daily Rating of Severity of Problems**, the **Visual Analogue Scales for Premenstrual Mood Symptoms** and the **Premenstrual Tension Syndrome Rating Scale** (self-report and observer versions)."],
              ["Suicide", "Some consider the premenstrual phase a **risk period for suicide**."],
              ["Function", "Partner discord and problems with children, family or friends that occur **only** with the PMDD (not chronic interpersonal problems); work and quality-of-life impairment **on par with MDD and PDD**."]
            ] },
            { type: "callout", kind: "culture", text: "PMDD has been observed in the United States, Europe, India, Nigeria, Brazil and Asia. Frequency, intensity, perceived consequences and help-seeking are shaped by **sexual abuse or domestic violence**, limited social support and cultural attitudes toward **menstruation** (p. 199)." },
            { type: "defs", title: "Differential diagnosis (pp. 199–200)", items: [
              ["Premenstrual syndrome", "Does **not** require five symptoms or **mood** symptoms and is usually milder. More common, around **20%**. Somatic or behavioral symptoms without affective ones = PMS, not PMDD."],
              ["Dysmenorrhea", "Painful menses, not an affective syndrome; begins **with** menses, whereas PMDD begins **before**."],
              ["Bipolar, major depressive and persistent depressive disorders", "Many women with these believe they have PMDD, but **charting** shows no premenstrual pattern; menses are memorable, so retrospective reports mislead. This is why **prospective daily ratings** are required. Overlap is greatest with MDE, PDD, bipolar disorder and **borderline personality disorder**."],
              ["Hormonal treatments", "Symptoms that began after starting **hormonal contraceptives** or other exogenous hormones, and disappear when they stop, point to **substance/medication-induced depressive disorder**."],
              ["Other medical conditions", "Rule out conditions such as **thyroid deficiency** and **anemia**."]
            ] },
            { type: "callout", kind: "exam", title: "Premenstrual exacerbation is not PMDD", text: "Many conditions (migraine, asthma, seizures, depressive, bipolar, anxiety and eating disorders) **worsen premenstrually**. With **no symptom-free postmenstrual interval**, the diagnosis is premenstrual exacerbation of that condition, not PMDD. PMDD can be added only if the premenstrual symptoms are characteristic of PMDD and **markedly different** from the ongoing disorder. The most common prior disorder in women presenting with PMDD is a **major depressive episode** (p. 200)." },
            { type: "case", title: "Clinical vignette: the week before", text: "A 27-year-old teacher reports that for about a week before each period she becomes tearful, snaps at colleagues, feels overwhelmed, craves sweets, sleeps badly and has breast tenderness. Within 2–3 days of her period starting she feels herself again, and she is well for the rest of the month. This has happened most months for 2 years and has led to arguments at work. She has not yet kept a symptom diary.", point: "Five or more symptoms including affective ones, confined to the luteal phase with a clear symptom-free follicular phase, causing impairment: **premenstrual dysphoric disorder, provisional (F32.81)** until two cycles of prospective daily ratings confirm it. Check thyroid function and whether she uses hormonal contraception." }
          ]
        }
      ]
    },
    {
      title: "Substances, medical conditions and catch-all categories",
      sections: [
        {
          id: "s4-substance",
          title: "Substance/medication-induced depressive disorder",
          pages: "201–206",
          blocks: [
            { type: "criteria", title: "Substance/medication-induced depressive disorder in brief", pages: "201", items: [
              ["A", "A prominent, persistent mood disturbance that **predominates** in the picture: **depressed mood** or markedly diminished **interest or pleasure**."],
              ["B", "Evidence of both: (1) it developed **during or soon after** intoxication or withdrawal, or after exposure to or withdrawal from a medication; and (2) the substance **can produce** these symptoms."],
              ["C", "Not better explained by an **independent** depressive disorder. Evidence for independence: symptoms **preceded** the substance use; they **persist** for a substantial time (e.g., **about 1 month**) after acute withdrawal or severe intoxication ends; or other evidence such as recurrent non-substance-related episodes."],
              ["D", "Not exclusively during **delirium**."],
              ["E", "Clinically significant distress or impairment."]
            ], specifiers: [["Onset", "**With onset during intoxication** · **with onset during withdrawal** · **with onset after medication use** (at initiation, with a change in use, or during withdrawal of the medication)"]], note: "Diagnose instead of intoxication or withdrawal only when the mood symptoms **predominate** and are severe enough to warrant clinical attention." },
            { type: "table", caption: "ICD-10-CM codes (p. 202)", head: ["Substance", "With mild use disorder", "With moderate or severe use disorder", "Without use disorder"], rows: [
              ["Alcohol", "F10.14", "F10.24", "F10.94"],
              ["Phencyclidine", "F16.14", "F16.24", "F16.94"],
              ["Other hallucinogen", "F16.14", "F16.24", "F16.94"],
              ["Inhalant", "F18.14", "F18.24", "F18.94"],
              ["Opioid", "F11.14", "F11.24", "F11.94"],
              ["Sedative, hypnotic or anxiolytic", "F13.14", "F13.24", "F13.94"],
              ["Amphetamine-type substance (or other stimulant)", "F15.14", "F15.24", "F15.94"],
              ["Cocaine", "F14.14", "F14.24", "F14.94"],
              ["Other (or unknown) substance", "F19.14", "F19.24", "F19.94"]
            ] },
            { type: "steps", title: "Coding and recording (pp. 201–203)", items: [
              ["4th character. ", "**1** = comorbid mild use disorder; **2** = moderate or severe use disorder; **9** = no use disorder (e.g., one-time heavy use)."],
              ["One diagnosis, not two. ", "The comorbid use disorder is written into the name, not given separately: “mild cocaine use disorder **with** cocaine-induced depressive disorder.”"],
              ["Name the substance. ", "Start with the specific substance (cocaine, dexamethasone). Substances outside the classes, or an unknown substance, use **other (or unknown)**: F19.x."],
              ["Add the onset. ", "Example: **F14.24** severe cocaine use disorder with cocaine-induced depressive disorder, with onset during withdrawal. Example without use disorder: **F16.94** phencyclidine-induced depressive disorder, with onset during intoxication."],
              ["More than one substance. ", "List each separately (e.g., F15.24 severe methylphenidate use disorder with methylphenidate-induced depressive disorder, with onset during withdrawal; F19.94 dexamethasone-induced depressive disorder, with onset during intoxication)."]
            ] },
            { type: "callout", kind: "exam", text: "Look at which classes are **not** in the depressive table: **cannabis**, **caffeine** and **tobacco** have no substance-induced depressive disorder code. The two drug-of-abuse groups most likely to cause depression are **depressants on intoxication** (alcohol, benzodiazepines and other sedatives) and **stimulants on withdrawal** (amphetamine-type substances, cocaine) (p. 203)." },
            { type: "defs", title: "Medications implicated (p. 203)", items: [
              ["Especially likely", "**Steroids**; antihypertensives **clonidine, guanethidine, methyldopa and reserpine**; **interferon**; **L-dopa**."],
              ["With varying evidence", "Antibiotics; antivirals (**efavirenz**); cardiovascular agents (**beta-blockers, calcium channel blockers**); retinoic acid derivatives (**isotretinoin**); antidepressants; anticonvulsants; antimigraine agents (**triptans**); antipsychotics; hormonal agents (**corticosteroids, oral contraceptives, GnRH agonists, tamoxifen**); chemotherapy; smoking cessation agents (**varenicline**)."]
            ] },
            { type: "list", title: "Course, prevalence and diagnosis (pp. 203–205)", items: [
              "Most likely when the person took **high doses** and has **no history** of independent depression, e.g., depression in the first weeks of **alpha-methyldopa**.",
              "A known recurrent depression can recur **coincidentally** while taking a depressogenic drug; judge whether the drug is causal.",
              "Onset usually within the **first few weeks to 1 month** of heavy use. After stopping, symptoms usually remit within **days to several weeks**, depending on half-life and withdrawal.",
              "If symptoms persist **4 weeks beyond** the expected course of withdrawal, consider other causes.",
              "Lifetime rate of alcohol- and stimulant-induced depressive episodes is **40% or higher** among people with those use disorders, but only **0.26%** of US adults have it without any independent depressive disorder.",
              "Lingering depression after substance treatment predicts **relapse** into substance use.",
              "Risk factors: **antisocial personality disorder**, schizophrenia, bipolar disorder, stressful events in the past year, prior drug-induced depression, family history of substance use disorders. Risk appears **similar in men and women**.",
              "Urine and blood tests are of limited value: they are often **negative** by the time of assessment, because the depression can last **up to 4 weeks** after use stops. A positive test shows recent use only.",
              "Suicide attempts are more likely in people with possible **alcohol use disorder** who have depressive episodes, whether induced or independent."
            ] },
            { type: "defs", title: "Differential diagnosis and comorbidity (pp. 205–206)", items: [
              ["Intoxication or withdrawal", "Dysphoria is typical of **cocaine withdrawal**; diagnose the induced disorder only when mood symptoms predominate and need separate attention."],
              ["Independent depressive disorder", "Depression seen at times **other than** substance use is independent, even with heavy use."],
              ["Due to another medical condition", "The illness, not its treatment, may be causing it. Sometimes a **medication change** is needed to tell. Both can be diagnosed; if the evidence is insufficient, use **other specified or unspecified depressive disorder**."],
              ["Comorbidity", "Compared with independent MDD: more comorbidity overall, more **tobacco use disorder, gambling disorder and antisocial personality disorder**, and less **persistent depressive disorder**."]
            ] }
          ]
        },
        {
          id: "s4-medical",
          title: "Depressive disorder due to another medical condition",
          pages: "206–209",
          blocks: [
            { type: "criteria", title: "Depressive disorder due to another medical condition in brief", pages: "206", items: [
              ["A", "A prominent, persistent period of **depressed mood** or markedly diminished **interest or pleasure** that predominates."],
              ["B", "Evidence that it is the **direct pathophysiological consequence** of another medical condition."],
              ["C", "Not better explained by another mental disorder (e.g., **adjustment disorder with depressed mood**, where the stressor is the illness)."],
              ["D", "Not exclusively during **delirium**."],
              ["E", "Clinically significant distress or impairment."]
            ], specifiers: [
              ["F06.31 With depressive features", "Full criteria for a major depressive episode are **not** met."],
              ["F06.32 With major depressive–like episode", "Full criteria are met (**except Criterion C**)."],
              ["F06.34 With mixed features", "Manic or hypomanic symptoms are also present but **do not predominate**."]
            ], note: "Code the medical condition **first**, then the depressive disorder with the condition in its name: **E03.9** hypothyroidism; **F06.31** depressive disorder due to hypothyroidism, with depressive features." },
            { type: "defs", title: "Is the condition causing it? (pp. 206–208)", items: [
              ["Temporal link", "Onset, worsening or remission of the medical condition goes with that of the mood disturbance."],
              ["Atypical features", "Features unusual for an independent depression: **atypical age at onset or course**, or **no family history**."],
              ["Literature", "Evidence that the condition can directly cause mood symptoms. The list of conditions is **never complete**; clinical judgment is the essence of the diagnosis."],
              ["Ruling out primary depression", "**No** depressive episodes before the condition began; the condition **can** cause depression; and depression began **shortly after** onset or worsening, especially if it **remits** when the condition is treated (p. 208)."]
            ] },
            { type: "table", caption: "Conditions with the strongest links (pp. 207–208)", head: ["Condition", "What to know"], rows: [
              ["**Stroke (CVA)**", "Onset often **within days**; major depressive episode lasts **9–11 months** on average. Acute risk (1 day to a week) is greatest with **left frontal** strokes and least with right frontal; the laterality link fades for depression 2–6 months later. Women may be at higher risk after stroke."],
              ["**Huntington’s disease**", "Depression often precedes motor and cognitive signs; considered the **first neuropsychiatric symptom**. May become less common as the neurocognitive disorder progresses."],
              ["**Parkinson’s disease**", "Depression often precedes major motor and cognitive impairment; risk rises with **early onset**, heavier motor burden and longer illness."],
              ["**Traumatic brain injury**", "Risk with **female gender**, prior depression, early psychiatric symptoms after injury, lower brain volume and unemployment."],
              ["**Cushing’s syndrome**, **hypothyroidism**", "Depression can be an **early manifestation**. Steroid levels help confirm Cushing’s, which can cause manic or depressive syndromes."],
              ["**Pancreatic cancer**", "Depression often **precedes** other features."],
              ["Others", "Focal lesions and neoplasms, **systemic lupus erythematosus**, **vitamin B12 deficiency**, multiple sclerosis (the evidence for causation is stronger for some than others)."]
            ] },
            { type: "p", text: "Support for a direct mechanism is strongest for **focal lesions** (stroke, TBI, neoplasm), **Parkinson’s** and **Huntington’s** diseases, **hypothyroidism**, **Cushing’s syndrome** and **pancreatic cancer** (p. 207). Sex differences follow the medical condition (lupus is more common in women; stroke somewhat more common in middle-aged men). Suicide risk should be assumed to be **no lower, and perhaps higher**, than for other depressive episodes: serious medical illness is clearly linked to suicide, especially soon after onset or diagnosis (p. 208)." },
            { type: "defs", title: "Differential diagnosis (pp. 208–209)", items: [
              ["Independent depressive disorder", "Prior episodes, no plausible mechanism, or no temporal link."],
              ["Medication-induced depression", "The treatment (**steroids, alpha-interferon**) may be the cause; use judgment to identify the most likely or most important factor."],
              ["Delirium; major or mild neurocognitive disorder", "Not diagnosed if only during **delirium**. Can be added to a neurocognitive disorder when depression is a prominent physiological consequence of the same process."],
              ["Adjustment disorder", "The illness is itself a stressor; the **pervasiveness**, number and quality of depressive symptoms decide."],
              ["Demoralization", "Subjective incompetence, helplessness, hopelessness and a wish to give up, often with low mood and fatigue, but usually **without anhedonia**: pleasure and moments of happiness remain."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 209) follows the causative medical condition. Delirium can precede or accompany depression (e.g., in Cushing’s disease), and generalized **anxiety** symptoms are common in depression of any cause." }
          ]
        },
        {
          id: "s4-other",
          title: "Other specified, unspecified depressive and unspecified mood disorder",
          pages: "209–210",
          blocks: [
            { type: "p", text: "Both catch-all categories apply when depressive symptoms cause distress or impairment and predominate, but criteria are not met for any depressive disorder **or for adjustment disorder** with depressed mood or with mixed anxiety and depressed mood. **Other specified** records the reason; **unspecified** does not, or there is too little information (for example, in the **emergency room**)." },
            { type: "defs", title: "Other specified depressive disorder (F32.89): the four examples (pp. 209–210)", items: [
              ["1. Recurrent brief depression", "Depressed mood + **at least four** other symptoms for **2–13 days**, at least **once a month** (not tied to menses), for at least **12 consecutive months**. Never met criteria for another depressive or bipolar disorder; not currently psychotic."],
              ["2. Short-duration depressive episode (4–13 days)", "Depressed affect + **at least four** of the other eight MDE symptoms with distress or impairment, lasting **more than 4 days but less than 14**. Never met another depressive or bipolar disorder; not psychotic; not recurrent brief depression."],
              ["3. Depressive episode with insufficient symptoms", "Depressed affect + **at least one** of the other eight MDE symptoms with distress or impairment for **at least 2 weeks**. Never met another depressive or bipolar disorder; not psychotic; not mixed anxiety-depressive symptoms."],
              ["4. Major depressive episode superimposed on a psychotic disorder", "On schizophrenia, schizophreniform disorder, delusional disorder or other psychotic disorders. Episodes that are part of **schizoaffective disorder** do **not** get this extra diagnosis."]
            ] },
            { type: "table", caption: "The three catch-all codes (p. 210)", head: ["Category", "Code", "When"], rows: [
              ["[[dx:other-specified-depressive|Other specified depressive disorder]]", "F32.89", "Subthreshold or atypical depression; the reason is recorded"],
              ["[[dx:unspecified-depressive|Unspecified depressive disorder]]", "F32.A", "Reason not recorded, or insufficient information"],
              ["[[dx:unspecified-mood|Unspecified mood disorder]]", "F39", "Mood symptoms where it is hard to choose between unspecified **bipolar** and unspecified **depressive** disorder (e.g., acute agitation)"]
            ] },
            { type: "update", kind: "tr", title: "A new code for unspecified depressive disorder", text: "DSM-5-TR lists unspecified depressive disorder under **F32.A**, an ICD-10-CM code created after DSM-5 was published. In DSM-5 it shared **F32.9**, which now belongs only to **major depressive disorder, single episode, unspecified**." },
            { type: "callout", kind: "exam", text: "Recurrent brief depression and short-duration depression both need depressed mood **plus four** other symptoms (five in all, as for an MDE). They differ only in **time**: **2–13 days monthly for a year** versus **4–13 days** once. Insufficient-symptom depression has the full **2 weeks** but only **two to four** symptoms in total (depressed affect plus at least one)." }
          ]
        }
      ]
    },
    {
      title: "Specifiers for depressive disorders",
      sections: [
        {
          id: "s4-spec-map",
          title: "Which specifiers apply where",
          pages: "184–185, 193–194, 210–214",
          blocks: [
            { type: "p", text: "Most specifiers describe the **current major depressive episode**, or the most recent one if major depressive disorder is in partial or full remission. **Seasonal pattern** describes the **pattern of recurrent episodes**. Persistent depressive disorder takes only a short list." },
            { type: "table", caption: "Specifiers by disorder", head: ["Specifier", "MDD", "PDD", "Coded?"], rows: [
              ["With anxious distress", "✓", "✓", "No (severity can be added)"],
              ["With mixed features", "✓", "—", "No"],
              ["With melancholic features", "✓", "—", "No"],
              ["With atypical features", "✓", "✓", "No"],
              ["With psychotic features (congruent / incongruent)", "✓", "—", "Psychotic features **change the code** (F32.3 / F33.3)"],
              ["With catatonia", "✓", "—", "Add **F06.1**"],
              ["With peripartum onset", "✓", "—", "No"],
              ["With seasonal pattern", "**Recurrent** only", "—", "No"],
              ["Partial / full remission", "✓", "✓", "Changes the MDD code"],
              ["Severity (mild, moderate, severe)", "✓", "✓", "Changes the MDD code"],
              ["Early / late onset; course over the last 2 years", "—", "✓", "No"]
            ] },
            { type: "callout", kind: "exam", text: "Compare with [[ch:ch03|Chapter 3]]: **rapid cycling** exists only for bipolar disorders. **Mixed features** in a depressive episode is a significant risk factor for later **bipolar I or II** disorder." }
          ]
        },
        {
          id: "s4-spec-anxious-mixed",
          title: "With anxious distress; with mixed features",
          pages: "210–211",
          blocks: [
            { type: "criteria", title: "With anxious distress", pages: "210", items: [
              ["", "At least **two** of these on the **majority of days** of the current (or most recent) major depressive episode, or of current persistent depressive disorder:", [
                "Feeling **keyed up or tense**",
                "Feeling unusually **restless**",
                "Difficulty concentrating because of **worry**",
                "**Fear that something awful** may happen",
                "Feeling one might **lose control** of oneself"
              ]]
            ], specifiers: [["Mild", "Two symptoms"], ["Moderate", "Three symptoms"], ["Moderate-severe", "Four or five symptoms"], ["Severe", "Four or five symptoms **with motor agitation**"]], note: "Prominent in both bipolar and major depressive disorder, in primary care and specialty settings. High anxiety predicts **higher suicide risk**, **longer illness** and more **treatment nonresponse**, so specify it and its severity." },
            { type: "criteria", title: "With mixed features (depressive episode)", pages: "211", items: [
              ["A", "At least **three** manic or hypomanic symptoms on the **majority of days** of the current (or most recent) major depressive episode:", [
                "**Elevated, expansive** mood",
                "Inflated **self-esteem** or grandiosity",
                "More **talkative** or pressure to keep talking",
                "**Flight of ideas** or racing thoughts",
                "Increased **energy or goal-directed activity**",
                "Excessive involvement in **risky activities** (buying sprees, sexual indiscretions, foolish investments)",
                "**Decreased need for sleep** (rested despite less sleep, unlike insomnia)"
              ]],
              ["B", "Mixed symptoms are **observable by others** and a change from usual behavior."],
              ["C", "If full criteria for **mania or hypomania** are met, the diagnosis is **bipolar I or II**."],
              ["D", "Not due to a substance (drug, medication or other treatment)."]
            ], note: "Mixed features in a major depressive episode are a **significant risk factor for bipolar I or II**, so note them for treatment planning." },
            { type: "callout", kind: "pearl", title: "What the list leaves out", text: "**Distractibility**, **irritability** and **psychomotor agitation** are not on the depressive mixed-features list, because they overlap with depression itself. Only symptoms that clearly point toward mania count." }
          ]
        },
        {
          id: "s4-spec-melancholic-atypical",
          title: "With melancholic features; with atypical features",
          pages: "211–212",
          blocks: [
            { type: "criteria", title: "With melancholic features", pages: "211", items: [
              ["A", "During the **most severe** period of the episode, **one** of:", ["Loss of pleasure in all or almost all activities", "Lack of **reactivity** to usually pleasurable stimuli (does not feel much better, even briefly, when something good happens)"]],
              ["B", "**Three or more** of:", [
                "A **distinct quality** of depressed mood: profound despondency, despair, moroseness or “empty” mood",
                "Depression regularly **worse in the morning**",
                "**Early-morning awakening** (at least **2 hours** before usual)",
                "Marked **psychomotor agitation or retardation**",
                "Significant **anorexia or weight loss**",
                "Excessive or inappropriate **guilt**"
              ]]
            ], note: "Capacity for pleasure is **nearly absent**, not just reduced. Even highly desired events do not brighten mood, or brighten it only partly (up to **20%–40%** of normal, for minutes). A mood that is simply more severe, longer or unexplained is **not** a distinct quality. Psychomotor changes are **nearly always present**. Melancholia repeats only modestly across episodes and is more frequent in **inpatients**, in **severe** episodes and with **psychotic features** (pp. 211–212)." },
            { type: "criteria", title: "With atypical features", pages: "212", items: [
              ["A", "**Mood reactivity**: mood brightens in response to actual or potential positive events."],
              ["B", "**Two or more** of:", [
                "Significant **weight gain** or increased appetite",
                "**Hypersomnia**",
                "**Leaden paralysis** (heavy, leaden feelings in the arms or legs)",
                "A long-standing pattern of **interpersonal rejection sensitivity**, not limited to mood episodes, causing significant impairment"
              ]],
              ["C", "Criteria are **not** met for melancholic features or catatonia in the same episode."]
            ], note: "Applies when these features predominate during the majority of days of the current (or most recent) major depressive episode, or of current persistent depressive disorder." },
            { type: "defs", title: "Atypical features, defined (p. 212)", items: [
              ["“Atypical”", "A historical term, contrasting with the classic agitated, “endogenous” depression seen when depression was rarely diagnosed in outpatients and young people. It does **not** mean uncommon."],
              ["Mood reactivity", "Can be cheered by positive events (a visit from children, compliments); mood may stay euthymic for long periods if circumstances stay good."],
              ["Hypersomnia", "Night sleep plus naps totaling at least **10 hours a day**, or at least **2 hours more** than when not depressed."],
              ["Leaden paralysis", "Feeling heavy or weighted down, usually in the arms or legs, generally **at least an hour a day**, often many hours."],
              ["Rejection sensitivity", "A **trait** with early onset that persists through most of adult life, present whether or not the person is depressed (may worsen during episodes)."]
            ] },
            { type: "compare", title: "Melancholic or atypical?", items: [
              { title: "Melancholic", color: "case", points: ["Mood does **not** react", "**Early-morning awakening**, worse in the **morning**", "**Anorexia**, weight loss", "Marked psychomotor change, excessive guilt", "Inpatients, severe and psychotic episodes; older age"] },
              { title: "Atypical", color: "drug", points: ["Mood **reacts** to good events", "**Hypersomnia**", "**Increased appetite**, weight gain", "Leaden paralysis, lifelong rejection sensitivity", "More often reported by women; hypersomnia and hyperphagia more likely in the young"] }
            ] }
          ]
        },
        {
          id: "s4-spec-psychotic-catatonia",
          title: "With psychotic features; with catatonia",
          pages: "212–213",
          blocks: [
            { type: "defs", title: "With psychotic features (pp. 212–213)", items: [
              ["Definition", "**Delusions and/or hallucinations** at any time in the current (or most recent) major depressive episode. It is coded (F32.3 / F33.3) **regardless of severity**."],
              ["Mood-congruent", "All delusions and hallucinations fit depressive themes: **personal inadequacy, guilt, disease, death, nihilism or deserved punishment**."],
              ["Mood-incongruent", "Content does **not** involve those themes, or mixes congruent and incongruent themes."]
            ] },
            { type: "defs", title: "With catatonia (p. 213)", items: [
              ["Definition", "Catatonic features during **most of the episode**, using the criteria for catatonia associated with another mental disorder in [[page:c/ch02/guide/s2-catatonia|Chapter 2]]."],
              ["Coding", "Add **F06.1** catatonia associated with another mental disorder."]
            ] },
            { type: "case", title: "Clinical vignette: the rotting body", text: "A 71-year-old widower has eaten little for a month, wakes at 3 a.m. and paces his room. He insists his intestines have rotted away and that he deserves to die for “ruining” his family. He hears a voice telling him he is wicked. He had a similar episode at 60 that fully remitted.", point: "A recurrent major depressive episode with **nihilistic and guilt delusions** and an accusing voice: **F33.3 major depressive disorder, recurrent episode, with mood-congruent psychotic features**, and likely **with melancholic features**. The psychotic code applies whatever the severity rating." }
          ]
        },
        {
          id: "s4-spec-peripartum",
          title: "With peripartum onset",
          pages: "213",
          blocks: [
            { type: "p", text: "Applies when mood symptoms begin **during pregnancy** or in the **4 weeks after delivery**. About **50%** of “postpartum” major depressive episodes actually begin **before** delivery, which is why they are called **peripartum** episodes." },
            { type: "list", title: "Numbers to know (p. 213)", items: [
              "About **9%** of women have a major depressive episode between conception and birth.",
              "Just below **7%** between birth and **12 months** postpartum.",
              "Postpartum mood episodes **with psychotic features**: **1 in 500 to 1 in 1,000** deliveries, possibly more common in **primiparous** women.",
              "Risk of postpartum psychosis is highest after a **prior postpartum psychotic episode**, and also raised with past depressive or bipolar disorder (especially **bipolar I**) and a family history of bipolar disorder.",
              "After one postpartum psychotic episode, recurrence risk is **30%–50%** with each later delivery."
            ] },
            { type: "defs", title: "Distinguish from (p. 213)", items: [
              ["Maternity blues", "Much more common and **not a disorder**: sudden mood changes (tearfulness without depression), sleep disturbance and even confusion soon after delivery, **without functional impairment**, improving **within a week** without treatment."],
              ["Postpartum delirium", "Marked by a **fluctuating** level of awareness or attention."],
              ["Medical causes", "Perinatal **thyroid abnormalities** and other conditions; if causal, diagnose **depressive disorder due to another medical condition** instead."]
            ] },
            { type: "callout", kind: "caution", text: "**Infanticide** is rare and most often linked to **postpartum psychotic** episodes with command hallucinations to kill the infant or delusions that the infant is possessed. Psychotic symptoms can also occur in severe postpartum episodes without such content. Ask directly about thoughts of harming the baby." }
          ]
        },
        {
          id: "s4-spec-seasonal-severity",
          title: "With seasonal pattern; remission; severity",
          pages: "214",
          blocks: [
            { type: "criteria", title: "With seasonal pattern (recurrent major depressive disorder)", pages: "214", items: [
              ["A", "A regular temporal relationship between onset of episodes and a **particular time of year** (e.g., fall or winter).", [], "Exclude obvious **seasonal stressors** (being unemployed every winter, the school schedule)."],
              ["B", "**Full remissions** also occur at a characteristic time (e.g., spring)."],
              ["C", "In the last **2 years**, **two** major depressive episodes showed this pattern and **no nonseasonal** episodes occurred."],
              ["D", "Seasonal episodes **substantially outnumber** nonseasonal ones over the lifetime."]
            ], note: "Most episodes begin in **fall or winter** and remit in spring; recurrent **summer** depression is less common. Seasonal episodes often bring **loss of energy, hypersomnia, overeating, weight gain and carbohydrate craving**. Winter-type prevalence rises with **latitude**, and **younger** people are at higher risk." },
            { type: "defs", title: "Remission (p. 214)", items: [
              ["In partial remission", "Symptoms of the last episode are present but full criteria are not met, **or** a period of **less than 2 months** without significant symptoms has followed the episode."],
              ["In full remission", "No significant signs or symptoms for the **past 2 months**."]
            ] },
            { type: "defs", title: "Severity (p. 214): number, intensity and functional impact", items: [
              ["Mild", "Few if any symptoms beyond those required; distressing but **manageable**; **minor** impairment."],
              ["Moderate", "Between mild and severe."],
              ["Severe", "Symptoms **substantially in excess** of those required; seriously distressing and **unmanageable**; **marked** interference with function."]
            ] }
          ]
        },
        {
          id: "s4-approach",
          title: "Putting it together: a step-by-step approach",
          pages: "177–214",
          blocks: [
            { type: "steps", title: "Seven steps", items: [
              ["Rule out a cause. ", "Substance, medication (steroids, interferon, isotretinoin, hormones), medical condition (hypothyroidism, stroke, Parkinson’s, Cushing’s, pancreatic cancer) or delirium."],
              ["Rule out bipolarity. ", "Any lifetime **mania or hypomania** (not substance- or medically caused) → [[ch:ch03|Chapter 3]]. In a child, any manic-like period **over 1 day** rules out DMDD."],
              ["A child with outbursts? ", "Outbursts ≥3/week + irritable mood between, ≥12 months, two settings, onset <10, age 6–18 → **DMDD** (not with ODD or IED)."],
              ["Tied to the cycle? ", "Five symptoms in the premenstrual week, gone the week after menses, one affective → **PMDD** (provisional until two cycles of daily ratings)."],
              ["Full major depressive episode? ", "Five of nine for 2 weeks with mood or interest → **MDD** (single or recurrent; recurrence needs a 2-month gap). Check psychotic disorders and schizoaffective disorder first."],
              ["Chronic? ", "Depressed mood more days than not for **2 years** (1 in youth) + two of six → **PDD**; add MDD if an MDE ever occurred."],
              ["Anything left? ", "Recurrent brief, short-duration, insufficient-symptom depression or an MDE on a psychotic disorder → **F32.89**; reason not given → **F32.A**; can’t tell bipolar from depressive → **F39**. Then add the specifiers."]
            ] },
            { type: "ladder", title: "Time rules at a glance", ticks: [[10, "2 d"], [18, "4 d"], [36, "2 wk"], [46, "1 mo"], [56, "2 mo"], [66, "3 mo"], [78, "1 yr"], [92, "2 yr"]], rows: [
              { label: "Recurrent brief depression (F32.89)", dx: "other-specified-depressive", from: 10, to: 36, color: "guide", span: "2–13 days, monthly for 12 months" },
              { label: "Short-duration depressive episode (F32.89)", dx: "other-specified-depressive", from: 18, to: 36, color: "guide", span: "4–13 days" },
              { label: "Major depressive episode", dx: "mdd", from: 36, to: 100, color: "drug", open: true, span: "≥2 weeks" },
              { label: "Remission; gap between recurrent episodes", dx: "mdd", from: 0, to: 56, color: "clin", span: "≥2 months" },
              { label: "PMDD confirmation", dx: "pmdd", from: 0, to: 56, color: "hy", span: "≥2 cycles of daily ratings" },
              { label: "Disruptive mood dysregulation disorder", dx: "dmdd", from: 78, to: 100, color: "case", open: true, span: "≥12 months, no 3-month break" },
              { label: "Persistent depressive disorder", dx: "pdd", from: 92, to: 100, color: "mech", open: true, span: "≥2 years (1 in youth)", note: "Never symptom-free >2 months" }
            ], note: "Substance-induced: depression persisting about **1 month** after withdrawal or intoxication ends suggests an independent disorder. Peripartum onset: during pregnancy or within **4 weeks** of delivery. Seasonal pattern: **two** seasonal episodes in the last **2 years**." },
            { type: "callout", kind: "key", title: "Ten traps", text: "1) **Five** of nine, one being mood or interest. 2) Thoughts of death must be **recurrent**; one attempt or plan is enough. 3) Recurrent = **2 months** between episodes. 4) Psychotic features code **regardless of severity**. 5) **F32.9** (MDD, single, unspecified) is not **F32.A** (unspecified depressive). 6) **MDD + PDD** can both be diagnosed. 7) **Cyclothymia precludes PDD.** 8) DMDD beats **ODD and IED**; **bipolar** beats DMDD. 9) PMDD needs **prospective** ratings and a symptom-free follicular phase. 10) Seasonal pattern only for **recurrent** MDD." },
            { type: "p", text: "Practice with the [[helper:depressive|depressive disorders helper]] and the [[helper:grief|grief helper]], then compare [[dx:mdd|major depressive disorder]] with [[dx:pdd|persistent depressive disorder]] side by side in the library." }
          ]
        }
      ]
    }
  ]
});
