/* Chapter 3 study guide. Source: DSM-5-TR, Bipolar and Related Disorders (pp. 139–176).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. */
SP.add("ch03", "guide", {
  intro: "Bipolar and related disorders sit **between** the psychotic disorders and the depressive disorders, because they bridge the two in symptoms, family history and genetics. Everything in the chapter is built from three **mood episodes**: the **manic episode** (≥1 week, marked impairment, hospitalization or psychosis), the **hypomanic episode** (≥4 days, a clear change others can see, but no marked impairment) and the **major depressive episode** (≥2 weeks, five of nine symptoms). **Bipolar I** needs one lifetime manic episode, nothing more. **Bipolar II** needs at least one hypomanic and one major depressive episode and **never** a manic episode. **Cyclothymic disorder** is two years of subthreshold highs and lows that never reach any full episode. The rest of the chapter covers manic syndromes caused by **substances, medications and medical conditions**, the **other specified** presentations (short hypomanias, too-few-symptom hypomanias), and the long list of **specifiers** that describe the current episode and the course. The chapter’s [[helper:bipolar|diagnostic helper]] and the [[helper:episode|episode helper]] walk you through the reasoning.",
  objectives: [
    "State the full criteria for a **manic**, **hypomanic** and **major depressive episode**, including durations, symptom counts (three, or **four if mood is only irritable**) and the impairment rules that separate mania from hypomania.",
    "Apply the **antidepressant rule**: a full manic or hypomanic syndrome that **persists beyond the physiological effect** of a treatment counts; one or two symptoms such as irritability or edginess do not.",
    "Diagnose **bipolar I** (≥1 manic episode), **bipolar II** (≥1 hypomanic + ≥1 major depressive episode, never mania) and **cyclothymic disorder** (≥2 years, 1 year in youth, never a full episode).",
    "Code bipolar I by **current or most recent episode**, **severity**, **psychotic features** and **remission**, and record bipolar II under its single code **F31.81**.",
    "Explain why bipolar II is **not a milder form** of bipolar I, and why bipolar disorder is so often **misdiagnosed as major depressive disorder**.",
    "Distinguish bipolar disorder from **ADHD**, **borderline personality disorder**, **DMDD**, anxiety disorders and PTSD, **schizoaffective disorder**, and substance- or medically induced mania.",
    "Use the bipolar **specifiers**: anxious distress, mixed features, rapid cycling, melancholic, atypical, psychotic (mood-congruent or incongruent), catatonia, peripartum onset, seasonal pattern, remission and severity.",
    "Recognize the five **other specified (F31.89)** presentations and when to use **unspecified bipolar (F31.9)** or **unspecified mood disorder (F39)**.",
    "Recall the key epidemiology, course, genetics, suicide risk and comorbidity of bipolar I and II disorders."
  ],
  parts: [
    {
      title: "The building blocks: mood episodes",
      sections: [
        {
          id: "s3-map",
          title: "How the chapter is built",
          pages: "139",
          blocks: [
            { type: "p", text: "The chapter is placed between schizophrenia spectrum disorders and depressive disorders as a **bridge** between them in **symptomatology, family history and genetics**. Bipolar I disorder is the modern version of classic **manic-depressive illness** (affective psychosis), except that **neither psychosis nor a lifetime major depressive episode is required**, although the vast majority of people with a full manic episode also have major depressive episodes during their lives." },
            { type: "flow", title: "Three episodes, three core disorders", steps: [
              ["Manic episode", "≥1 week (or any length if hospitalized); marked impairment, hospitalization or psychosis", "case"],
              ["Hypomanic episode", "≥4 days; clear change seen by others; no marked impairment, no psychosis", "hy"],
              ["Major depressive episode", "≥2 weeks; five of nine symptoms including depressed mood or loss of interest", "drug"]
            ], note: "**Bipolar I** = at least one manic episode. **Bipolar II** = at least one hypomanic + one major depressive episode, never mania. **Cyclothymic** = 2 years of subthreshold highs and lows, never a full episode." },
            { type: "table", caption: "Diagnoses in this chapter (codes as listed in DSM-5-TR)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:bipolar-i|Bipolar I disorder]]", "F31.x (by episode, severity, remission)", "At least one lifetime manic episode", "139–150"],
              ["[[dx:bipolar-ii|Bipolar II disorder]]", "F31.81", "≥1 hypomanic + ≥1 major depressive episode; never mania", "150–159"],
              ["[[dx:cyclothymic|Cyclothymic disorder]]", "F34.0", "≥2 years (1 in youth) of subthreshold highs and lows", "159–161"],
              ["[[dx:substance-induced-bipolar|Substance/medication-induced bipolar and related disorder]]", "By substance (e.g., F15.94)", "Elevated or irritable mood and energy caused by a substance or medication", "162–165"],
              ["[[dx:bipolar-due-to-amc|Bipolar and related disorder due to another medical condition]]", "F06.33 / F06.34", "Manic picture caused directly by a medical condition", "166–168"],
              ["[[dx:other-specified-bipolar|Other specified bipolar and related disorder]]", "F31.89", "Subthreshold bipolar presentation, reason stated", "168–169"],
              ["[[dx:unspecified-bipolar|Unspecified bipolar and related disorder]]", "F31.9", "Reason not stated or not enough information", "169"],
              ["[[dx:unspecified-mood|Unspecified mood disorder]]", "F39", "Mood disorder where bipolar vs depressive cannot yet be chosen", "169"]
            ] },
            { type: "callout", kind: "key", title: "Four questions, in this order", text: "**1. Cause?** (substance, medication, medical condition, delirium). **2. Has there ever been a manic episode?** If yes, it is bipolar I, whatever else happened. **3. If not, a full hypomanic episode plus a major depressive episode?** Then bipolar II. **4. If neither, two years of subthreshold swings?** Then cyclothymic disorder; anything else goes to other specified or unspecified. The [[helper:bipolar|bipolar helper]] asks exactly these." }
          ]
        },
        {
          id: "s3-manic",
          title: "The manic episode",
          pages: "140, 143–145",
          blocks: [
            { type: "criteria", title: "Manic episode in brief", pages: "140", items: [
              ["A", "A distinct period of abnormally and persistently **elevated, expansive or irritable mood** **and** abnormally and persistently **increased activity or energy**, lasting **at least 1 week**, most of the day, nearly every day (**any duration if hospitalization is needed**)."],
              ["B", "During that period, **three or more** of the following (**four if the mood is only irritable**), to a significant degree and as a clear change from usual behavior:", [
                "**Inflated self-esteem** or grandiosity",
                "**Decreased need for sleep** (e.g., rested after 3 hours)",
                "More **talkative** than usual or **pressure** to keep talking",
                "**Flight of ideas** or racing thoughts",
                "**Distractibility**, reported or observed",
                "Increased **goal-directed activity** (social, work or school, sexual) or **psychomotor agitation**",
                "Excessive involvement in **risky activities** with painful consequences (buying sprees, sexual indiscretions, foolish investments)"
              ]],
              ["C", "Severe enough to cause **marked impairment** in social or occupational functioning, **or** to need **hospitalization** to prevent harm, **or** there are **psychotic features**."],
              ["D", "Not due to a **substance** (drug of abuse, medication, other treatment) or another **medical condition**.", null, "A full manic episode that begins during antidepressant treatment (medication or ECT) but **persists at a fully syndromal level beyond the treatment’s physiological effect** counts as a manic episode, and therefore as bipolar I."]
            ], note: "Criteria A–D define a manic episode. One lifetime manic episode is enough for bipolar I disorder." },
            { type: "callout", kind: "mnemonic", title: "DIGFAST for Criterion B", text: "**D**istractibility · **I**ndiscretion (risky activities) · **G**randiosity · **F**light of ideas or racing thoughts · **A**ctivity increase or agitation · **S**leep need decreased · **T**alkativeness. Three needed (four if only irritable). This is a common teaching mnemonic, not part of the manual." },
            { type: "defs", title: "What each symptom looks like (pp. 143–145)", items: [
              ["Mood", "Euphoric, “on top of the world,” sometimes **infectious**, with unlimited enthusiasm (starting conversations with strangers). Often **irritable** instead, especially when wishes are denied or with substance use. Rapid shifts between euphoria, dysphoria and irritability are called **lability**."],
              ["Grandiosity (B1)", "From uncritical self-confidence to delusional grandiosity: writing a novel or promoting an impractical invention without any relevant skill; **grandiose delusions** (e.g., a special relationship with a famous person) are common."],
              ["Decreased need for sleep (B2)", "Distinct from **insomnia**: the person does not want or need sleep and feels rested. May go days without sleep without fatigue. Often **heralds** a manic episode."],
              ["Speech (B3)", "Rapid, pressured, loud, hard to interrupt; jokes, puns, theatricality, singing. If irritable: complaints, hostile comments, **angry tirades**."],
              ["Thoughts (B4)", "Racing faster than speech can express; **flight of ideas** with abrupt topic shifts; in severe cases disorganized or incoherent speech."],
              ["Distractibility (B5)", "Cannot screen out trivial stimuli (the interviewer’s clothes, background noise), so cannot hold a rational conversation."],
              ["Activity (B6)", "Excessive planning and many simultaneous projects (sexual, occupational, political, religious), intrusive **sociability**, pacing, many letters, emails and texts."],
              ["Risky behavior (B7)", "Spending sprees, giving possessions away, reckless driving, foolish investments, sexual indiscretions that are **unusual for the person**."],
              ["Impairment (C)", "Financial losses, job loss, school failure, divorce, or hospitalization for **exhaustion, hyperthermia** or self-injury. **Psychotic features automatically satisfy C.**"]
            ] },
            { type: "callout", kind: "caution", title: "Mania in children", text: "Happiness, silliness and “goofiness” are normal in many settings. They meet Criterion A only if they are **recurrent, inappropriate to the context, beyond developmental expectations**, distinctly increased from the **child’s own baseline**, and accompanied by **persistently increased energy** that people who know the child find clearly unusual. Believing one is the best at a sport is normal; grandiosity counts only against clear contrary evidence, with dangerous feats, and as a **change** from the child’s usual behavior. Developmentally inappropriate sexual preoccupation counts only when not explained by **abuse or exposure** to sexual material." },
            { type: "p", text: "Associated features (pp. 145–146): during mania people usually **do not see themselves as ill** and resist treatment. Dress and makeup may become more flamboyant or sexually suggestive; some report sharper senses; **gambling** and antisocial behavior can occur. Mood can turn quickly to **anger or depression**, and some become threatening, assaultive or suicidal, especially when delusional. Involuntary hospitalization, legal trouble and financial ruin come from poor judgment, lost insight and hyperactivity." }
          ]
        },
        {
          id: "s3-hypomanic",
          title: "The hypomanic episode",
          pages: "140–141, 153–154",
          blocks: [
            { type: "criteria", title: "Hypomanic episode in brief", pages: "140–141", items: [
              ["A", "A distinct period of abnormally and persistently elevated, expansive or irritable mood **and** increased activity or energy, lasting **at least 4 consecutive days**, most of the day, nearly every day."],
              ["B", "**Three or more** of the same seven symptoms as mania (**four if mood is only irritable**), persisting and clearly changed from usual."],
              ["C", "An **unequivocal change in functioning**, uncharacteristic of the person when well."],
              ["D", "The change in mood and functioning is **observable by others**."],
              ["E", "**Not** severe enough to cause marked impairment or need hospitalization. **Psychotic features make it manic by definition.**"],
              ["F", "Not due to a substance or another medical condition.", null, "A full hypomanic episode that emerges during antidepressant treatment and **persists at a fully syndromal level** beyond the treatment’s effect counts. One or two symptoms (irritability, edginess, agitation) after an antidepressant do **not**."]
            ], note: "Hypomanic episodes are common in bipolar I but are not required for it." },
            { type: "table", caption: "Mania versus hypomania", head: ["Feature", "Manic episode", "Hypomanic episode"], rows: [
              ["Minimum duration", "**1 week** (any duration if hospitalized)", "**4 consecutive days**"],
              ["Symptom count", "3 of 7 (4 if only irritable)", "3 of 7 (4 if only irritable)"],
              ["Functioning", "**Marked impairment**", "**Unequivocal change**, observable by others, **no** marked impairment"],
              ["Hospitalization", "Qualifies the episode as manic", "Excluded: if needed, the episode is manic"],
              ["Psychotic features", "Allowed (satisfy Criterion C)", "**Never**: psychosis makes it manic"],
              ["Disorder it defines", "Bipolar I", "Bipolar II (with a major depressive episode)"]
            ] },
            { type: "callout", kind: "pearl", text: "People rarely **complain** of hypomania: they either do not recognize it or **enjoy it**. They come for help during depression. Ask **close friends or relatives**, because Criterion D requires that others notice the change (p. 154)." },
            { type: "callout", kind: "caution", text: "Do not mistake the few days of **euthymia and restored energy** after a depressive episode remits for hypomania (p. 154)." }
          ]
        },
        {
          id: "s3-mde",
          title: "The major depressive episode, and grief",
          pages: "141–142, 176",
          blocks: [
            { type: "criteria", title: "Major depressive episode in brief", pages: "141", items: [
              ["A", "**Five or more** of the following during the same **2-week** period, a change from before; at least one is **depressed mood** or **loss of interest or pleasure** (do not count symptoms clearly due to a medical condition):", [
                "**Depressed mood** most of the day, nearly every day (in children and adolescents, can be **irritable** mood)",
                "Markedly diminished **interest or pleasure** in almost all activities",
                "Significant **weight** loss or gain (more than **5%** of body weight in a month) or appetite change (in children, failure to make expected gains)",
                "**Insomnia or hypersomnia**",
                "**Psychomotor agitation or retardation** observable by others",
                "**Fatigue** or loss of energy",
                "**Worthlessness** or excessive or inappropriate **guilt** (may be delusional)",
                "Diminished ability to **think or concentrate**, or indecisiveness",
                "Recurrent **thoughts of death**, suicidal ideation, a plan or an attempt"
              ]],
              ["B", "Clinically significant **distress or impairment**."],
              ["C", "Not due to a substance or another medical condition."]
            ], note: "Major depressive episodes are common in bipolar I but not required. They are required for bipolar II." },
            { type: "callout", kind: "mnemonic", title: "SIG E CAPS", text: "**S**leep · **I**nterest · **G**uilt · **E**nergy · **C**oncentration · **A**ppetite · **P**sychomotor change · **S**uicidality, plus depressed mood. Five of nine, for 2 weeks, with mood or interest among them. A teaching mnemonic, not part of the manual." },
            { type: "p", text: "A note after the criteria warns that responses to a **significant loss** (bereavement, financial ruin, a natural disaster, serious illness or disability) can include intense sadness, rumination, insomnia, poor appetite and weight loss that resemble a depressive episode. A major depressive episode **in addition to** the normal response should still be carefully considered, using the person’s history and **cultural norms** for expressing distress after loss." },
            { type: "table", caption: "Grief or a major depressive episode? (footnote, pp. 142 and 176)", head: ["Feature", "Grief", "Major depressive episode"], rows: [
              ["Predominant affect", "**Emptiness and loss**", "Persistent depressed mood; cannot anticipate happiness"],
              ["Pattern", "Comes in **waves** (“pangs of grief”) tied to reminders of the deceased; eases over days to weeks", "**Persistent**, not tied to specific thoughts"],
              ["Positive emotion", "Humor and positive emotions can coexist", "Pervasive unhappiness and misery"],
              ["Thought content", "Preoccupation with **memories of the deceased**", "Self-critical, pessimistic rumination"],
              ["Self-esteem", "**Preserved**; any self-blame concerns failings toward the deceased", "**Worthlessness** and self-loathing"],
              ["Thoughts of death", "About the deceased, perhaps “joining” them", "Ending one’s life because of worthlessness or unbearable pain"]
            ] }
          ]
        },
        {
          id: "s3-antidepressant",
          title: "Treatment-emergent mania and hypomania",
          pages: "140–141, 145, 164–165",
          blocks: [
            { type: "p", text: "Manic symptoms caused directly by a **drug of abuse** (cocaine, amphetamine), **medication side effects** (steroids, L-dopa, antidepressants, stimulants) or another **medical condition** do not count toward bipolar I. The important exception is a **treatment-emergent** episode." },
            { type: "compare", title: "The antidepressant rule", items: [
              { title: "Counts as a true episode", color: "case", points: ["A **fully syndromal** manic or hypomanic episode that begins during treatment (antidepressant medication, **ECT**, **light therapy**)…", "…and **persists beyond the physiological effect** of the treatment (after the drug has cleared, or after ECT effects should have dissipated).", "Diagnose **bipolar I** (mania) or **bipolar II** (hypomania, if a major depressive episode preceded it), not a substance-induced disorder."] },
              { title: "Does not count", color: "clin", points: ["**One or two symptoms**, especially **irritability, edginess or agitation** after starting an antidepressant.", "These are not enough for an episode and do not by themselves show a **bipolar diathesis**.", "Mania criterion symptoms are specific: simple agitation is not the same as excessive purposeful activity."] }
            ] },
            { type: "callout", kind: "exam", text: "Treatment-emergent hypomania that persists counts toward bipolar II **only if preceded by a major depressive episode** (p. 165), which is almost always the case, since the treatment was for depression. Treatment-emergent hypomania must last **at least 4 days** at a fully syndromal level beyond the drug’s effects (p. 154)." },
            { type: "p", text: "Even when a manic syndrome is truly substance-induced, it **may suggest an underlying bipolar diathesis** in someone never before diagnosed (p. 164)." }
          ]
        }
      ]
    },
    {
      title: "Bipolar I disorder",
      sections: [
        {
          id: "s3-bp1-criteria",
          title: "Bipolar I disorder: criteria, coding and recording",
          pages: "142–143",
          blocks: [
            { type: "criteria", title: "Bipolar I disorder in brief", code: "F31.x", pages: "142", items: [
              ["A", "Criteria met for **at least one manic episode**."],
              ["B", "At least one manic episode is **not better explained by schizoaffective disorder** and is **not superimposed on** schizophrenia, schizophreniform disorder, delusional disorder, or other specified/unspecified psychotic disorder."]
            ], note: "Hypomanic and major depressive episodes often precede or follow the manic episode but are **not required**." },
            { type: "table", caption: "ICD-10-CM codes for bipolar I disorder (p. 142)", head: ["Status", "Current or most recent: manic", "Hypomanic", "Depressed", "Unspecified"], rows: [
              ["Mild", "F31.11", "—", "F31.31", "—"],
              ["Moderate", "F31.12", "—", "F31.32", "—"],
              ["Severe", "F31.13", "—", "F31.4", "—"],
              ["With psychotic features", "F31.2", "—", "F31.5", "—"],
              ["In partial remission", "F31.73", "F31.71", "F31.75", "—"],
              ["In full remission", "F31.74", "F31.72", "F31.76", "—"],
              ["Unspecified", "F31.9", "F31.9", "F31.9", "F31.9"]
            ], note: "**Current hypomanic** (not in remission): **F31.0**; severity and psychotic specifiers do not apply. **Episode unspecified**: **F31.9**. **Psychotic features** take the psychotic code **whatever the severity**. Severity and psychotic codes apply only if a full manic or depressive episode is **current**; remission codes only if no full episode is current." },
            { type: "steps", title: "Recording order (p. 142)", items: [
              ["Disorder and episode. ", "“Bipolar I disorder, current (or most recent, if in remission) episode manic / hypomanic / depressed.”"],
              ["Coded specifier. ", "Severity, psychotic features, or partial/full remission."],
              ["Uncoded specifiers. ", "Anxious distress, mixed features, rapid cycling, melancholic, atypical, mood-congruent or incongruent psychotic features, catatonia (**+F06.1**), peripartum onset, seasonal pattern."],
              ["Example. ", "F31.2 bipolar I disorder, current episode manic, with mood-congruent psychotic features, with anxious distress."]
            ] },
            { type: "callout", kind: "exam", text: "“With rapid cycling” and “with seasonal pattern” describe the **pattern** of episodes over time; all the others describe the **current (or most recent) episode**." }
          ]
        },
        {
          id: "s3-bp1-features",
          title: "Bipolar I disorder: diagnostic and associated features",
          pages: "143–146",
          blocks: [
            { type: "p", text: "Bipolar I disorder is a course of **recurring** manic, depressive and hypomanic episodes, but **one manic episode is sufficient**. The diagnostic features describe the manic episode (see the manic episode section); hypomanic features are described with bipolar II and depressive features with major depressive disorder." },
            { type: "defs", title: "Associated features (pp. 145–146)", items: [
              ["Mixed features", "Depressive symptoms occur in about **35%** of manic episodes; mixed features predict a **poorer outcome** and **more suicide attempts**."],
              ["Quality of life", "Significant decrements in quality of life and well-being."],
              ["Trait-like features", "**Hyperthymic, depressive, cyclothymic, anxious and irritable temperaments**; sleep and circadian rhythm disturbances; **reward sensitivity**; **creativity**."],
              ["Family history", "A first-degree relative with bipolar disorder raises the risk about **10-fold**."]
            ] },
            { type: "case", title: "Clinical vignette: the start-up", text: "A 26-year-old software developer has slept 2–3 hours a night for 10 days, saying he feels “more rested than ever.” He has quit his job to found three companies at once, spent his savings on equipment and talks so fast his partner cannot get a word in. He is sure a tech billionaire is about to fund him personally. His family brings him to the emergency department after he drives at 180 km/h “to test the car.” No substances; thyroid and other tests are normal.", point: "Elevated mood and energy for over a week with grandiosity, decreased need for sleep, pressured speech, increased activity and risky behavior, plus a grandiose delusion: a **manic episode with psychotic features**. One manic episode is enough: **F31.2 bipolar I disorder, current episode manic, with mood-congruent psychotic features**." }
          ]
        },
        {
          id: "s3-bp1-course",
          title: "Bipolar I disorder: prevalence, development and course",
          pages: "146–147",
          blocks: [
            { type: "defs", title: "Prevalence", items: [
              ["United States", "12-month prevalence **1.5%** (DSM-5), equal in men (1.6%) and women (1.5%). Higher in **Native Americans**; lower in African Americans, Hispanics and Asians/Pacific Islanders compared with non-Hispanic Whites."],
              ["International", "12-month DSM-IV prevalence across 11 countries **0.0%–0.6%**, higher in high-income countries except **Japan** (0.01%)."],
              ["Sex ratio", "Lifetime male-to-female ratio about **1.1:1**."]
            ] },
            { type: "defs", title: "Onset", items: [
              ["Peak age", "**20–30 years**, but onset occurs across the life cycle."],
              ["Mean (US)", "**22 years**; slightly younger in women (**21.5**) than men (**23.0**). Median across six international sites: **24.3** years."],
              ["Children", "Judge each child against **their own baseline**."],
              ["Late onset", "First mania in the **60s or 70s** happens, but new manic symptoms (sexual or social disinhibition) in late midlife or later should prompt a search for **medical causes** (e.g., **frontotemporal** neurocognitive disorder) and **substances**."]
            ] },
            { type: "list", title: "Course (pp. 146–147)", items: [
              "**More than 90%** of people with a single manic episode have **recurrent** mood episodes.",
              "About **60%** of manic episodes occur **immediately before** a major depressive episode.",
              "**Four or more** mood episodes in 12 months = **with rapid cycling**, a common variant with **poorer outcomes**.",
              "About half have a **predominant polarity**: in one international study, **31.3%** predominant mania, **21.4%** predominant depression, **47.3%** no predominance.",
              "Patterns tend to repeat: psychotic mania predicts psychotic features in later manias. **Depressive onset** predicts more depressive episodes and more suicidal behavior.",
              "**Mixed features** in mania predict a poorer prognosis, **poorer lithium response** and suicidal behavior."
            ] },
            { type: "callout", kind: "exam", text: "One manic episode almost never stands alone: **>90% recur**. That is why a single lifetime manic episode is enough for a lifelong bipolar I diagnosis." }
          ]
        },
        {
          id: "s3-bp1-risk",
          title: "Bipolar I disorder: risk, culture, sex and gender, suicide, function",
          pages: "147–148",
          blocks: [
            { type: "table", caption: "Risk and prognostic factors (p. 147)", head: ["Domain", "Findings"], rows: [
              ["**Environmental**", "**Childhood adversity** (early emotional trauma, parental psychopathology, family conflict) raises risk, predisposes to **early onset**, and predicts a worse course with comorbidity, suicide and psychosis. Recent **negative life events** raise **depressive** relapse risk; **goal-attainment events** (marrying, finishing a degree) are linked to **manic** relapse. **Cannabis** and other substances worsen mania and are associated with first manic symptoms."],
              ["**Marriage**", "Marrying may be less common, and the diagnosis is associated with being **previously** rather than currently married."],
              ["**Genetic**", "Heritability around **90%** in some twin studies. Population risk about **1%**; first-degree relative **5%–10%**. Monozygotic concordance only **40%–70%**, so genes do not explain everything. Non-Mendelian, many small-effect genes; mania- and depression-proneness may be **inherited separately**; shared genetic origin with **schizophrenia**."]
            ] },
            { type: "callout", kind: "culture", text: "Symptoms are broadly consistent across cultures, but flight of ideas and delusion types (grandiose, persecutory, sexual, religious, somatic) vary. Countries with **reward-oriented** cultural values have relatively **higher** prevalence. In the United States, onset is **earlier** than in Europe, with more family history. **African Americans with bipolar I** are at higher risk of being **misdiagnosed with schizophrenia**: mood symptoms are under-recognized, **cultural mistrust** is misread as **paranoia**, delays in care lead to more florid psychosis at presentation, and assessments are shorter." },
            { type: "defs", title: "Sex- and gender-related features", items: [
              ["Women", "More **rapid cycling** and **mixed states**, more **depressive** symptoms, higher lifetime rates of **eating disorders**, and a higher lifetime risk of **alcohol use disorder** than men (and much higher than women in general)."],
              ["Reproductive cycle", "**Premenstrual** worsening (linked to a worse course) and severe disturbance in **perimenopause**. **No** increased episode risk in **pregnancy** unless medication is stopped; strong evidence of increased risk of mania and depression **postpartum**."],
              ["Postpartum psychosis", "Typically resembles a **manic or mixed episode with psychotic symptoms** and is strongly associated with **bipolar I**. Use “with peripartum onset” for episodes starting in pregnancy or within **4 weeks** of delivery."]
            ] },
            { type: "defs", title: "Suicide", items: [
              ["Risk", "Lifetime suicide risk **20- to 30-fold** greater than the general population; about **5%–6%** die by suicide."],
              ["Sex", "**Attempts** are more common in **women**; **lethal** suicide is more common in **men**."],
              ["Predictors", "A **past attempt** and the **percentage of days spent depressed** in the past year."],
              ["Alcohol", "**Nearly half** have an **alcohol use disorder**, and the combination raises the risk of attempts and death."]
            ] },
            { type: "list", title: "Functional consequences (p. 148)", items: [
              "About **30%** show severe impairment in work role function, though many return to full function **between episodes**.",
              "**Functional recovery lags** well behind symptomatic recovery, especially at work, giving **lower socioeconomic status** despite equal education.",
              "**Cognitive impairments persist** across the lifespan, **even when euthymic**.",
              "Higher **self-perceived stigma** goes with lower functioning."
            ] }
          ]
        },
        {
          id: "s3-bp1-ddx",
          title: "Bipolar I disorder: differential diagnosis and comorbidity",
          pages: "148–150",
          blocks: [
            { type: "callout", kind: "caution", title: "The most common mistake: calling it unipolar depression", text: "Bipolar I is easily misdiagnosed as MDD because **the first episode is often depressive**, **depressive symptoms dominate the long-term course**, and people **seek help for depression**. In anyone presenting depressed, **actively ask about past mania or hypomania**. Clues to bipolarity: **family history** of bipolar disorder, onset in the **early 20s**, **many past episodes**, **psychotic** symptoms, and **non-response** to antidepressants or **mania during** antidepressant treatment." },
            { type: "table", caption: "Differential diagnosis (pp. 148–150)", head: ["Consider", "The deciding point"], rows: [
              ["**Other bipolar disorders**", "Bipolar II, cyclothymic and other specified have hypomanic periods but **no manic episode**."],
              ["**GAD, panic, PTSD and other anxiety disorders**", "Anxious rumination can look like racing thoughts, and efforts to calm anxiety like impulsivity. Look for **episodes** (classic bipolar I is episodic) and **triggers**."],
              ["**Due to another medical condition**", "Mania judged a direct effect of a condition such as **Cushing’s disease** or **multiple sclerosis**."],
              ["**Substance/medication-induced**", "A substance (stimulants, PCP) or medication (steroids) causes it. People in mania **overuse substances**, so decide which came first; sometimes you must see whether mania **persists after abstinence**. Persistent **antidepressant-emergent** mania = bipolar I."],
              ["**Schizoaffective disorder**", "Needs ≥2 weeks of psychosis **without** a mood episode. Psychosis **only during** mood episodes = bipolar I **with psychotic features**."],
              ["**ADHD**", "Persistent (not episodic) inattention, hyperactivity and impulsivity with onset **by age 12**; mania occurs in **distinct episodes**, typically starting in late adolescence or early adulthood."],
              ["**Disruptive mood dysregulation disorder**", "Severe, **persistent** irritability in children. Diagnose bipolar I only with a **clear episode**: a distinct period, of the required length, clearly different from baseline, with other manic symptoms (grandiosity, decreased need for sleep, pressured speech, risk-taking)."],
              ["**Borderline personality disorder**", "Lability and impulsivity overlap. Bipolar I requires a **distinct episode** or a **noticeable increase over baseline**."]
            ] },
            { type: "defs", title: "Comorbidity (p. 150)", items: [
              ["Psychiatric", "The norm: most have **three or more** disorders. Most common: **anxiety disorders, alcohol use disorder, other substance use disorders, ADHD**. Frequently associated with **borderline, schizotypal and antisocial** personality disorders."],
              ["Borderline overlap", "May reflect **misdiagnosis** of borderline emotional extremes as bipolar I, borderline features raising vulnerability to bipolar I, and **early childhood adversity** feeding both."],
              ["Culture", "Countries that prohibit alcohol or other substances may have less substance comorbidity."],
              ["Medical", "Serious, often untreated medical illness largely explains **shortened life expectancy**: **cardiovascular** and **autoimmune** disease, **obstructive sleep apnea**, **metabolic syndrome**, **migraine**. **Overweight/obesity** is a particular concern and predicts poor treatment outcome."]
            ] }
          ]
        }
      ]
    },
    {
      title: "Bipolar II disorder",
      sections: [
        {
          id: "s3-bp2-criteria",
          title: "Bipolar II disorder: criteria, coding and recording",
          pages: "150–153",
          blocks: [
            { type: "criteria", title: "Bipolar II disorder in brief", code: "F31.81", pages: "150–152", items: [
              ["A", "Criteria met for **at least one hypomanic episode** and **at least one major depressive episode**."],
              ["B", "There has **never been a manic episode**."],
              ["C", "At least one hypomanic and one major depressive episode are not better explained by schizoaffective disorder and not superimposed on a psychotic disorder."],
              ["D", "The **depression**, or the **unpredictability** of frequent alternation between depression and hypomania, causes clinically significant distress or impairment."]
            ], specifiers: [
              ["Current or most recent episode", "**Hypomanic** or **depressed**."],
              ["If hypomanic", "In partial or full remission; with anxious distress, mixed features, rapid cycling, peripartum onset, seasonal pattern."],
              ["If depressed", "Mild, moderate or severe (if full criteria currently met) or partial/full remission; with anxious distress, mixed features, rapid cycling, melancholic, atypical, mood-congruent or incongruent psychotic features, catatonia (**+F06.1**), peripartum onset, seasonal pattern."]
            ] },
            { type: "callout", kind: "key", title: "One code only", text: "Bipolar II has a **single code, F31.81**. Severity, psychotic features, course and other specifiers are **written out, not coded**: e.g., “F31.81 bipolar II disorder, current episode depressed, moderate severity, with mixed features.”" },
            { type: "callout", kind: "exam", text: "Psychotic features can occur in bipolar II, but **only during major depressive episodes**. Psychosis during an elevated episode makes it **manic**, and the diagnosis becomes **bipolar I**." }
          ]
        },
        {
          id: "s3-bp2-features",
          title: "Bipolar II disorder: features and presentation",
          pages: "153–155",
          blocks: [
            { type: "list", title: "Diagnostic features (pp. 153–154)", items: [
              "At least one depressive and one hypomanic episode must **not** be due to a substance or medical condition. Hypomania that begins on an antidepressant and **persists ≥4 days at a full level** beyond the drug’s effect **does count**.",
              "Psychotic symptoms never occur in hypomania and appear **less frequent** in bipolar II depressions than bipolar I depressions.",
              "Major depressive episodes are often **more frequent and longer** than in bipolar I.",
              "People present **during depression** and rarely complain of hypomania; impairment comes from the depressions or the **unpredictable pattern** of mood and functioning. **Collateral history** is often essential."
            ] },
            { type: "callout", kind: "key", title: "Not a “milder” bipolar I", text: "Despite shorter, less severe highs, bipolar II has **greater chronicity** and more **time spent depressed**, and those depressions can be severe and disabling." },
            { type: "list", title: "Clinical hints in the depressive episodes (p. 154)", items: [
              "Insomnia **and** hypersomnia together occur in both bipolar II and MDD but are **overrepresented in women with bipolar II**.",
              "**Atypical** symptoms (hypersomnia, hyperphagia) are common in both, more so in **bipolar II**.",
              "Mixed states (depression during hypomania, or hypomanic symptoms during depression) are common, especially in **females**; hypomania with mixed features may be experienced as **depression with extra energy or irritability**."
            ] },
            { type: "defs", title: "Associated features and prevalence (p. 155)", items: [
              ["Impulsivity", "Common, contributing to **suicide attempts** and **substance use disorders**."],
              ["Creativity", "May rise in hypomania, though the link is nonlinear: greater lifetime creativity is linked to **milder** forms and is found in **unaffected relatives**. Attachment to hypomanic creativity can feed **ambivalence about treatment** and poor adherence."],
              ["12-month prevalence", "**0.8%** in the United States; **0.3%** internationally."],
              ["Combined bipolar spectrum", "DSM-IV bipolar I, II and NOS together: **1.8%** in community samples, **2.7%** in youth aged 12 and older."]
            ] },
            { type: "case", title: "Clinical vignette: the productive week", text: "A 31-year-old teacher seeks help for her third episode of depression: 5 weeks of low mood, oversleeping, overeating, heavy limbs and thoughts that her family would be better off without her. Her husband adds that last spring she had about 6 days of sleeping 4 hours a night, talking constantly, redecorating the whole house and signing up for three courses, which was “not her”; she remembers it as “finally feeling myself.” She kept working throughout and was never hospitalized or psychotic.", point: "A hypomanic episode (≥4 days, clear change noticed by others, no marked impairment) plus major depressive episodes, never mania: **F31.81 bipolar II disorder, current episode depressed, with atypical features**. The husband’s history is what made the diagnosis." }
          ]
        },
        {
          id: "s3-bp2-course",
          title: "Bipolar II disorder: course, risk, sex and gender, suicide, function",
          pages: "155–157",
          blocks: [
            { type: "defs", title: "Development and course (pp. 155–156)", items: [
              ["Onset", "Average **mid-20s**: slightly later than bipolar I, earlier than MDD. Age at onset does **not** reliably separate bipolar I from II."],
              ["How it starts", "Usually with **depression**; recognized only when hypomania appears, which happens in about **12%** of people first diagnosed with MDD. Anxiety, substance or eating disorders may come first."],
              ["Diagnostic delay", "Typically **more than 10 years** between illness onset and a bipolar diagnosis."],
              ["Recurrence", "**Over 50%** have a new episode within a year of the first; more **seasonal** variation than bipolar I; more lifetime episodes than MDD or bipolar I; intervals between episodes **shorten with age**."],
              ["Once bipolar II, always", "Once a hypomanic episode has occurred, the diagnosis **never reverts** to MDD."],
              ["Rapid cycling", "**5%–15%** have four or more episodes in 12 months; more common in **women**, may signal worsening."],
              ["Conversion", "About **5%–15%** eventually have a **manic episode**, which changes the diagnosis to **bipolar I** permanently."],
              ["Youth", "Hard to diagnose with **nonepisodic** irritability, which predicts later anxiety and MDD, **not** bipolar disorder. Youth-onset bipolar II may have a more **severe** lifetime course."],
              ["Older adults", "3-year incidence of first-onset bipolar II after 60 is **0.34%**; hypomanic symptoms during depression help separate it from MDD; always consider **medical and neurological** causes."]
            ] },
            { type: "list", title: "Risk and prognostic factors (p. 156)", items: [
              "Risk is highest in relatives of people with **bipolar II** (rather than bipolar I or MDD); about **one-third** report a family history of bipolar disorder; genetic architecture may be partly **distinct** from bipolar I and schizophrenia.",
              "**Rapid cycling** predicts a poorer prognosis. Younger age and milder depression favor social recovery. **More education, fewer years of illness and being married** independently predict functional recovery."
            ] },
            { type: "defs", title: "Sex and gender (pp. 156–157)", items: [
              ["Prevalence", "Little evidence of a sex difference in the general population; some clinical samples show more women, possibly reflecting **treatment seeking**."],
              ["Pattern", "Females report more **hypomania with mixed features** and **rapid cycling**."],
              ["Childbirth", "Can trigger hypomania in **10%–20%** of females in nonclinical populations, mostly early postpartum; a postpartum “high” is followed by depression in about **half**. Perimenopause can also destabilize mood."]
            ] },
            { type: "defs", title: "Suicide and function (p. 157)", items: [
              ["Attempts", "About **one-third** report a lifetime suicide attempt; attempt and death rates are **similar** to bipolar I and far above the general population."],
              ["Lethality", "Attempts may be **more lethal** in bipolar II (lower attempt-to-death ratio)."],
              ["Family", "First-degree relatives of bipolar II probands had a **6.5-fold** higher suicide risk than relatives of bipolar I probands."],
              ["Function", "At least **15%** keep some dysfunction between episodes and **20%** move straight into another episode. Functional recovery lags symptomatic recovery; cognitive test performance is poorer than in healthy people; prolonged unemployment is linked to more depressions, older age, panic disorder and alcohol use disorder."]
            ] }
          ]
        },
        {
          id: "s3-bp2-ddx",
          title: "Bipolar II disorder: differential diagnosis and comorbidity",
          pages: "157–159",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 157–158)", head: ["Consider", "The deciding point"], rows: [
              ["**Major depressive disorder**", "No manic or hypomanic episodes. Some subthreshold hypomanic symptoms are compatible with MDD, so **establish whether full hypomania occurred**. The depressions are identical, so only a history of **at least one prior hypomanic episode** distinguishes bipolar II."],
              ["**Cyclothymic disorder**", "Hypomanic and depressive **symptoms** that never reach full episodes; bipolar II needs **full** hypomanic and major depressive episodes."],
              ["**Schizophrenia**", "Diagnose schizophrenia if depressions occurred for only a **minority** of the active illness; psychosis **only during** depressions = bipolar II **with psychotic features**."],
              ["**Schizoaffective disorder**", "≥2 weeks of psychosis **without** a major depressive episode."],
              ["**Due to another medical condition / substance-induced**", "Hypomania caused by a condition (Cushing’s, MS) or a substance (stimulants, PCP, steroids). Persistent antidepressant-emergent hypomania = bipolar II."],
              ["**ADHD**", "Talkativeness, distractibility and less need for sleep overlap with hypomania, especially in youth. Avoid **double counting**: confirm a **distinct episode** and a **noticeable increase over baseline**."],
              ["**Personality disorders**", "Same convention as ADHD. Do not diagnose a personality disorder **during an untreated mood episode** unless the lifetime history supports it."],
              ["**Other bipolar disorders**", "Any past **mania** = bipolar I. **Fully syndromal** hypomania and depression separate bipolar II from other specified/unspecified."]
            ] },
            { type: "defs", title: "Comorbidity (p. 159)", items: [
              ["Overall", "About **60%** have **three or more** co-occurring disorders."],
              ["Anxiety", "**75%** have an anxiety disorder: **social anxiety (38%)**, **specific phobia (36%)**, **GAD (30%)**. Comorbid anxiety predicts a worse course; in youth it is more common than in bipolar I and usually comes first."],
              ["Substances", "Similar to bipolar I: **alcohol use disorder (42%)** and **cannabis use disorder (20%)**. Anxiety tracks **depressive** symptoms; substance use tracks **hypomanic** symptoms."],
              ["PTSD", "**Lower** rates than in bipolar I."],
              ["Eating disorders", "About **14%** have at least one, **binge-eating disorder** most often."],
              ["Premenstrual", "PMS and **PMDD** are common, especially in bipolar II, and worsen mood lability."],
              ["Medical", "Cardiovascular disease, migraine, autoimmune disorders."]
            ] }
          ]
        }
      ]
    },
    {
      title: "Cyclothymic disorder",
      sections: [
        {
          id: "s3-cyclothymic",
          title: "Cyclothymic disorder",
          pages: "159–161",
          blocks: [
            { type: "criteria", title: "Cyclothymic disorder in brief", code: "F34.0", pages: "159–160", items: [
              ["A", "For **at least 2 years** (**1 year in children and adolescents**), numerous periods of **hypomanic symptoms** that do not meet hypomanic episode criteria and numerous periods of **depressive symptoms** that do not meet major depressive episode criteria."],
              ["B", "During that time, symptoms present **at least half the time**, never absent for **more than 2 months** at a stretch."],
              ["C", "Criteria for a **major depressive, manic or hypomanic episode have never been met**."],
              ["D", "Not better explained by schizoaffective disorder or another psychotic disorder."],
              ["E", "Not due to a substance or another medical condition (e.g., **hyperthyroidism**)."],
              ["F", "Clinically significant **distress or impairment**."]
            ], specifiers: [["With anxious distress", "The only specifier for cyclothymic disorder."]] },
            { type: "flow", title: "What happens if a full episode appears after the first 2 years (1 in youth)?", steps: [
              ["Major depressive episode", "→ major depressive disorder", "drug"],
              ["Manic episode", "→ bipolar I disorder", "case"],
              ["Hypomanic episode", "→ other specified bipolar disorder (hypomanic episode without prior MDE)", "hy"]
            ], note: "The cyclothymic diagnosis is then **dropped**." },
            { type: "defs", title: "Epidemiology and course (pp. 160–161)", items: [
              ["Prevalence", "Lifetime **0.4%–2.5%** in the US and Europe; **3%–5%** in mood disorder clinics; equal in males and females in the community (women present more for treatment)."],
              ["Onset", "Usually adolescence or early adulthood; sometimes seen as a **temperamental predisposition** to other bipolar disorders. Most youth have onset **before age 10**. Insidious onset, persistent course."],
              ["Conversion", "**15%–50%** later develop **bipolar I or II**; conversion is higher in **youth**."],
              ["Late onset", "New persistent highs and lows late in adulthood need a medical workup (e.g., **multiple sclerosis**) first."],
              ["Familial", "MDD, bipolar I and bipolar II are more common in first-degree relatives; possibly more substance-related disorders. Cyclothymia may be more common in relatives of people with bipolar I."]
            ] },
            { type: "table", caption: "Differential diagnosis (p. 161)", head: ["Consider", "How to tell"], rows: [
              ["**Due to another medical condition**", "A specific, usually chronic condition (e.g., **hyperthyroidism**) physiologically causes the swings. If the swings are a **psychological** reaction to the illness or unrelated, code cyclothymic disorder **and** the condition."],
              ["**Substance/medication-induced** bipolar or depressive disorder", "A substance (especially **stimulants**) causes the swings, which usually **resolve after stopping**."],
              ["**Bipolar I or II with rapid cycling**", "Rapid cycling needs **full** episodes; cyclothymia never has them."],
              ["**Borderline personality disorder**", "Borderline mood shifts involve **anxiety, irritability and sadness**, not elation or increased energy. Self-damaging behavior counts toward cyclothymia only with other hypomanic symptoms. **Both** can be diagnosed if both are met."]
            ] },
            { type: "p", text: "Comorbidity: **substance-related** and **sleep** disorders (trouble initiating and maintaining sleep). Children with cyclothymia in outpatient settings have comorbidity rates similar to children with bipolar I or II, and higher than children with disruptive behavior or ADHD." }
          ]
        }
      ]
    },
    {
      title: "Bipolar symptoms with an identifiable cause",
      sections: [
        {
          id: "s3-substance",
          title: "Substance/medication-induced bipolar and related disorder",
          pages: "162–165",
          blocks: [
            { type: "criteria", title: "Substance/medication-induced bipolar and related disorder in brief", code: "Coded by substance", pages: "162", items: [
              ["A", "A **prominent and persistent** mood disturbance that **predominates** the clinical picture: abnormally elevated, expansive or irritable mood **and** increased activity or energy."],
              ["B", "Evidence that it began **during or soon after** intoxication, withdrawal or medication exposure, and that the substance **can** cause it."],
              ["C", "Not better explained by an **independent** bipolar disorder (symptoms **before** use; persistence **about 1 month** after acute withdrawal or severe intoxication ends; or recurrent non-substance episodes)."],
              ["D", "Not exclusively during **delirium**."],
              ["E", "Clinically significant **distress or impairment**."]
            ], specifiers: [["Onset", "**During intoxication**, **during withdrawal**, or **after medication use**."]], note: "Diagnose instead of intoxication or withdrawal only when the mood symptoms **predominate** and need independent clinical attention." },
            { type: "table", caption: "ICD-10-CM codes (p. 163)", head: ["Substance", "With mild use disorder", "With moderate or severe", "Without use disorder"], rows: [
              ["Alcohol", "F10.14", "F10.24", "F10.94"],
              ["Phencyclidine", "F16.14", "F16.24", "F16.94"],
              ["Other hallucinogen", "F16.14", "F16.24", "F16.94"],
              ["Sedative, hypnotic or anxiolytic", "F13.14", "F13.24", "F13.94"],
              ["Amphetamine-type substance (or other stimulant)", "F15.14", "F15.24", "F15.94"],
              ["Cocaine", "F14.14", "F14.24", "F14.94"],
              ["Other (or unknown) substance", "F19.14", "F19.24", "F19.94"]
            ], note: "Same logic as the psychotic disorders: 4th character **1** mild, **2** moderate or severe, **9** none; no separate use disorder code. **Cannabis and inhalants are not listed** for this disorder. Medications that fit no class (e.g., **dexamethasone**) use “other (or unknown)”." },
            { type: "p", text: "Recording examples from the manual: **F14.24 severe cocaine use disorder with cocaine-induced bipolar and related disorder, with onset during intoxication**; **F15.94 amphetamine-induced bipolar and related disorder, with onset during intoxication**; **F19.94 dexamethasone-induced bipolar and related disorder**." },
            { type: "table", caption: "Typical agents and time course (pp. 164–165)", head: ["Agent", "What to expect"], rows: [
              ["**Stimulants**", "Mania or hypomania within **minutes to 1 hour** of use; very brief, resolving over **1–2 days**."],
              ["**Phencyclidine**", "May start as a **delirium with affective features**, then an atypical manic or mixed state, within **hours to a few days**."],
              ["**Corticosteroids** and some immunosuppressants", "Mania, mixed or depressed states after **several days**; **higher doses** are much more likely to cause bipolar symptoms."],
              ["New compounds", "Synthetic cathinones (“**bath salts**”) and others keep emerging."]
            ] },
            { type: "callout", kind: "exam", text: "The key exception: mania or hypomania after an **antidepressant or ECT** that **persists beyond the treatment’s effect** is **true bipolar disorder**, not substance-induced. And one or two side effects (edginess, agitation) are never enough." },
            { type: "list", title: "Differential diagnosis (p. 165)", items: [
              "**Intoxication or withdrawal**: euphoria, irritability and energy occur in stimulant intoxication or **cannabis withdrawal**; use the induced diagnosis only if mood symptoms **predominate** and need clinical attention.",
              "Other bipolar disorders, substance-induced **delirium**, and medication side effects.",
              "Diagnostic markers: blood or urine tests identify the substance."
            ] }
          ]
        },
        {
          id: "s3-medical",
          title: "Bipolar and related disorder due to another medical condition",
          pages: "166–168",
          blocks: [
            { type: "criteria", title: "Bipolar and related disorder due to another medical condition in brief", code: "F06.33 / F06.34", pages: "166", items: [
              ["A", "A **prominent and persistent** period of abnormally elevated, expansive or irritable mood **and** increased activity or energy, predominating the picture."],
              ["B", "Evidence that it is the **direct pathophysiological consequence** of a medical condition."],
              ["C", "Not better explained by another mental disorder."],
              ["D", "Not exclusively during **delirium**."],
              ["E", "Distress or impairment, **or** hospitalization needed, **or** psychotic features."]
            ], specifiers: [
              ["F06.33 With manic features", "Full criteria for a manic or hypomanic episode are **not** met."],
              ["F06.33 With manic- or hypomanic-like episode", "Full criteria met **except** the medical exclusion (Criterion D of mania or F of hypomania)."],
              ["F06.34 With mixed features", "Depressive symptoms are also present but do not predominate."]
            ], note: "Code the medical condition **first**: e.g., **E05.90** hyperthyroidism; **F06.33** bipolar disorder due to hyperthyroidism, with manic features." },
            { type: "list", title: "Key features (pp. 166–167)", items: [
              "The manic picture usually appears **within the first weeks or month** of the medical condition, but can follow a **worsening or relapse** of a chronic illness. Judge causality on **timing** and **plausibility**.",
              "Not diagnosed when manic episodes **clearly preceded** the medical condition (that is bipolar disorder), unless all earlier episodes were substance-induced.",
              "Best-known causes: **Cushing’s disease**, **multiple sclerosis**, **stroke**, **traumatic brain injury**, and **anti-NMDA receptor encephalitis** (manic or mixed mood with psychosis).",
              "Markers follow the condition (e.g., **steroid levels** for Cushing’s; MS tests). It can remit before or just after the condition remits."
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 167–168)", head: ["Consider", "How to tell"], rows: [
              ["**Delirium**", "Mood disturbance **only during** delirium: no separate diagnosis (delirium can accompany mania in Cushing’s)."],
              ["**Major or mild NCD**", "Can be diagnosed **together** if the same disease causes the mood change and irritability or elevation is prominent."],
              ["**Catatonia and acute anxiety**", "Distinguish mania from **excited catatonia** and from agitation in acute anxiety."],
              ["**Medication-induced**", "The condition may be treated with drugs that cause mania (**steroids**, **alpha-interferon**); weigh which cause is most likely or most important."]
            ] }
          ]
        }
      ]
    },
    {
      title: "Residual categories",
      sections: [
        {
          id: "s3-other",
          title: "Other specified, unspecified and unspecified mood disorder",
          pages: "168–169",
          blocks: [
            { type: "list", title: "The five examples of other specified bipolar and related disorder (F31.89)", ordered: true, items: [
              "**Short-duration hypomanic episodes (2–3 days) and major depressive episodes**: one or more lifetime MDEs, never full mania or hypomania, but **two or more** hypomanias that meet full symptom criteria and last only **2–3 days**, not overlapping the depressions.",
              "**Hypomanic episodes with insufficient symptoms and major depressive episodes**: one or more MDEs, plus hypomanias lasting **≥4 days** but with too few symptoms (elevated mood + **one or two** others, or irritable mood + **two or three** others), not overlapping the depressions.",
              "**Hypomanic episode without prior major depressive episode**: one or more hypomanic episodes in someone who has never had an MDE or mania.",
              "**Short-duration cyclothymia (less than 24 months)**: cyclothymic picture lasting **<24 months** (<12 months in youth), symptoms more days than not, never symptom-free >2 months, no full episodes, no psychotic disorder.",
              "**Manic episode superimposed on** schizophrenia, schizophreniform disorder, delusional disorder or other specified/unspecified psychotic disorder (manic episodes that are part of **schizoaffective** disorder do not get this extra diagnosis)."
            ] },
            { type: "compare", items: [
              { title: "Unspecified bipolar (F31.9)", color: "hy", points: ["Bipolar-type symptoms that meet no full criteria, when the reason is **not stated** or information is **insufficient** (e.g., the emergency room)."] },
              { title: "Unspecified mood disorder (F39)", color: "drug", points: ["Mood symptoms meeting no full criteria, when it is **hard to choose** between unspecified bipolar and unspecified depressive disorder (e.g., **acute agitation**)."] }
            ] },
            { type: "callout", kind: "exam", text: "Why does a hypomanic episode **without** any depression not count as bipolar II? Because bipolar II requires **both** a hypomanic and a major depressive episode. Hypomania alone is **other specified bipolar disorder (F31.89)**. Note too that the hypomanias in examples 1 and 2 must **not overlap** the depressions; if they did, it would be a major depressive episode **with mixed features**." },
            { type: "p", text: "Section III includes proposed criteria for a disorder with **short-duration hypomania** to encourage research (p. 139)." }
          ]
        }
      ]
    },
    {
      title: "Specifiers for bipolar and related disorders",
      sections: [
        {
          id: "s3-spec-anxious-mixed",
          title: "With anxious distress and with mixed features",
          pages: "169–171",
          blocks: [
            { type: "criteria", title: "With anxious distress", pages: "169–170", items: [
              ["≥2", "At least **two** of these on the **majority of days** of the current (or most recent) episode, or of symptomatic days in cyclothymic disorder:", ["Feeling **keyed up or tense**", "Feeling unusually **restless**", "Difficulty concentrating because of **worry**", "Fear that something **awful** may happen", "Feeling one might **lose control** of oneself"]]
            ], specifiers: [["Mild", "Two symptoms"], ["Moderate", "Three symptoms"], ["Moderate-severe", "Four or five symptoms"], ["Severe", "Four or five symptoms **with motor agitation**"]], note: "High anxiety predicts **higher suicide risk**, longer illness and more treatment nonresponse." },
            { type: "compare", title: "With mixed features (pp. 170–171)", items: [
              { title: "Manic or hypomanic episode, with mixed features", color: "case", points: ["Full mania or hypomania **plus ≥3** depressive symptoms on most days:", "Prominent dysphoria or depressed mood; diminished interest or pleasure; **psychomotor retardation**; fatigue; worthlessness or guilt; thoughts of death or suicide."] },
              { title: "Depressive episode, with mixed features", color: "drug", points: ["Full major depressive episode **plus ≥3** manic/hypomanic symptoms on most days:", "Elevated mood; grandiosity; talkativeness; flight of ideas; increased energy or goal-directed activity; risky activities; **decreased need for sleep** (not insomnia)."] }
            ] },
            { type: "list", title: "Rules for both", items: [
              "Mixed symptoms must be **observable by others** and a **change** from usual behavior.",
              "If **full criteria for mania and depression are met at the same time**, diagnose a **manic episode, with mixed features**, because of the severity of full mania.",
              "Not attributable to a substance or treatment.",
              "Mixed features during a **major depressive episode** are a significant **risk factor for developing bipolar I or II**."
            ] },
            { type: "callout", kind: "exam", text: "Notice which symptoms are **left out** of the mixed lists because they overlap both poles: insomnia, agitation, distractibility, irritability and poor concentration are **not** counted. Decreased need for sleep counts toward mixed depression; insomnia does not." }
          ]
        },
        {
          id: "s3-spec-rapid-melancholic-atypical",
          title: "With rapid cycling, melancholic features and atypical features",
          pages: "171–173",
          blocks: [
            { type: "defs", title: "With rapid cycling (p. 171)", items: [
              ["Definition", "**At least four** mood episodes in the previous **12 months**: manic, hypomanic or major depressive in bipolar I; hypomanic or major depressive in bipolar II."],
              ["Demarcation", "Episodes are separated by partial or full remission of **at least 2 months** or a **switch to the opposite pole**. **Mania and hypomania count as the same pole.**"],
              ["Episodes counted", "Must meet full duration and symptom criteria; any order; **substance- or medically caused** episodes do not count."],
              ["Applies to", "Bipolar I and II only (not cyclothymia, which has no full episodes)."]
            ] },
            { type: "criteria", title: "With melancholic features", pages: "171–172", items: [
              ["A", "At the **most severe** point of the episode, **one** of: loss of pleasure in all or almost all activities; **lack of reactivity** to usually pleasurable things."],
              ["B", "**Three or more** of:", ["A **distinct quality** of depressed mood (profound despondency, despair, moroseness or “empty” mood)", "Depression regularly **worse in the morning**", "**Early-morning awakening** (≥2 hours before usual)", "Marked **psychomotor agitation or retardation**", "Significant **anorexia or weight loss**", "Excessive or inappropriate **guilt**"]]
            ], note: "A near-complete absence of pleasure; mood brightens at most **20%–40%** of normal for minutes. More frequent in **inpatients**, more severe episodes and those with **psychotic features**; only a modest tendency to recur across episodes." },
            { type: "criteria", title: "With atypical features", pages: "172–173", items: [
              ["A", "**Mood reactivity**: mood brightens with actual or potential positive events."],
              ["B", "**Two or more** of:", ["Significant **weight gain** or increased appetite", "**Hypersomnia** (≥10 hours a day, or ≥2 hours more than when not depressed)", "**Leaden paralysis** (heavy limbs, usually ≥1 hour a day)", "Long-standing **interpersonal rejection sensitivity** (a trait, present even when not depressed) causing significant impairment"]],
              ["C", "Not meeting **melancholic** or **catatonia** criteria in the same episode."]
            ], note: "“Atypical” is historical, contrasting with classic “endogenous” depression; it does **not** mean rare." },
            { type: "compare", title: "Melancholic versus atypical, side by side", items: [
              { title: "Melancholic", color: "drug", points: ["Mood does **not** brighten", "**Weight loss**, anorexia", "**Early-morning awakening**", "Worse in the **morning**", "Marked psychomotor change, guilt"] },
              { title: "Atypical", color: "hy", points: ["Mood **does** brighten", "**Weight gain**, increased appetite", "**Hypersomnia**", "**Leaden paralysis**", "Lifelong **rejection sensitivity**"] }
            ] }
          ]
        },
        {
          id: "s3-spec-psychotic-peripartum",
          title: "Psychotic features, catatonia and peripartum onset",
          pages: "173–174",
          blocks: [
            { type: "table", caption: "With psychotic features (p. 173)", head: ["Episode", "Mood-congruent themes", "Mood-incongruent"], rows: [
              ["Manic (bipolar I)", "**Grandiosity, invulnerability**; may include suspiciousness or paranoia about others **doubting** the person’s abilities or achievements", "Content without typical manic themes, or a **mixture**"],
              ["Major depressive (bipolar I or II)", "Personal **inadequacy, guilt, disease, death, nihilism, deserved punishment**", "Content without these themes, or a **mixture**"]
            ], note: "Psychotic features can be present **any time** in the current manic or depressive episode. They **never** apply to hypomania." },
            { type: "defs", title: "With catatonia (p. 173)", items: [
              ["Applies to", "The current manic or major depressive episode in bipolar I, or the major depressive episode in bipolar II, if catatonic features are present **during most of the episode**."],
              ["Coding", "Add **F06.1**. Criteria are those for catatonia associated with another mental disorder ([[ch:ch02|Chapter 2]])."]
            ] },
            { type: "defs", title: "With peripartum onset (pp. 173–174)", items: [
              ["Definition", "Onset of the manic, hypomanic or major depressive episode **during pregnancy or within 4 weeks after delivery**."],
              ["Timing", "About **50%** of postpartum major depressive episodes begin **before delivery**, hence “peripartum.”"],
              ["Depression prevalence", "About **9%** of women have an MDE between conception and birth; just under **7%** between birth and 12 months postpartum."],
              ["Postpartum psychotic episodes", "In **1 in 500 to 1 in 1,000** deliveries, possibly more in **first-time mothers**. Risk is highest after a **prior postpartum psychotic episode** and raised with a history of depressive or bipolar (especially **bipolar I**) disorder or a family history of bipolar disorder."],
              ["Recurrence", "After one postpartum psychotic episode, recurrence with each later delivery is **30%–50%**."],
              ["Infanticide", "Rare; most often with postpartum psychosis featuring **command hallucinations** to kill the infant or delusions that the infant is **possessed**."],
              ["Not to confuse", "**Postpartum delirium** (fluctuating awareness or attention); **maternity (“baby”) blues** (sudden tearfulness without impairment, self-limited, better **within a week**, not a mental disorder); **thyroid** and other medical causes (then diagnose a disorder due to another medical condition)."]
            ] }
          ]
        },
        {
          id: "s3-spec-seasonal-severity",
          title: "Seasonal pattern, remission and severity",
          pages: "174–175",
          blocks: [
            { type: "criteria", title: "With seasonal pattern (bipolar I and II)", pages: "174–175", items: [
              ["A", "A regular link between episode **onset** and a particular time of year (e.g., fall or winter); exclude obvious seasonal stressors such as seasonal unemployment."],
              ["B", "**Full remissions** (or a switch of pole) also occur at a characteristic time (e.g., depression lifts in spring)."],
              ["C", "In the **last 2 years**, episodes of that pole followed the seasonal pattern, with **no nonseasonal** episodes of that pole."],
              ["D", "Seasonal episodes **substantially outnumber** nonseasonal ones over the lifetime."]
            ], note: "Applies to the **lifetime pattern**; only one episode type needs to be seasonal. Most seasonal depressions start in **fall or winter**; seasonal mania or hypomania peaks **spring through summer**. Within bipolar disorders, seasonal depression is more likely in **bipolar II**. Winter pattern rises with **latitude** and is more common in **younger** people." },
            { type: "defs", title: "Remission (p. 175)", items: [
              ["In partial remission", "Symptoms of the last episode remain without full criteria, **or** a symptom-free period of **less than 2 months** after it."],
              ["In full remission", "No significant signs or symptoms for **the past 2 months**."]
            ] },
            { type: "table", caption: "Severity (p. 175)", head: ["Level", "Manic episode", "Major depressive episode"], rows: [
              ["Mild", "**Minimum** symptom criteria met", "Few symptoms beyond the minimum; distressing but **manageable**; minor impairment"],
              ["Moderate", "**Very significant** increase in activity or impairment in judgment", "Between mild and severe"],
              ["Severe", "**Almost continual supervision** needed to prevent physical harm", "Many more symptoms than required; seriously distressing and unmanageable; **marked** interference with functioning"]
            ] },
            { type: "table", caption: "Which specifiers go where", head: ["Specifier", "Bipolar I", "Bipolar II", "Cyclothymic"], rows: [
              ["Anxious distress", "Yes", "Yes", "**Yes** (its only one)"],
              ["Mixed features", "Manic, hypomanic, depressed", "Hypomanic, depressed", "No"],
              ["Rapid cycling", "Yes", "Yes", "No"],
              ["Melancholic / atypical", "Depressed episode", "Depressed episode", "No"],
              ["Psychotic features", "Manic or depressed", "**Depressed only**", "No"],
              ["Catatonia (+F06.1)", "Manic or depressed", "Depressed only", "No"],
              ["Peripartum onset", "Manic, hypomanic, depressed", "Hypomanic, depressed", "No"],
              ["Seasonal pattern", "Yes", "Yes", "No"],
              ["Severity", "Manic or depressed (coded)", "Depressed (written, not coded)", "No"]
            ] }
          ]
        },
        {
          id: "s3-approach",
          title: "Putting it together: a diagnostic approach",
          pages: "139–176",
          blocks: [
            { type: "steps", title: "Work through a mood presentation in this order", items: [
              ["Is there a cause? ", "**Delirium**, a **substance or medication** (stimulants, PCP, steroids; persistent antidepressant-emergent episodes are the exception), or a **medical condition** (Cushing’s, MS, stroke, TBI, anti-NMDA encephalitis)."],
              ["Is it psychosis with mood, or mood with psychosis? ", "Psychosis ≥2 weeks without mood episodes → **schizoaffective**; mania superimposed on a primary psychotic disorder → **other specified bipolar**; psychosis only during mood episodes → bipolar **with psychotic features**."],
              ["Has there ever been a manic episode? ", "≥1 week (or hospitalized), ≥3 symptoms (4 if irritable), marked impairment, hospitalization or psychosis → **bipolar I**, permanently."],
              ["If not: full hypomania plus a major depressive episode? ", "≥4 days, clear change seen by others, no marked impairment; plus ≥2 weeks of five depressive symptoms → **bipolar II (F31.81)**."],
              ["If not: two years of subthreshold swings? ", "Half the time, never well >2 months, never a full episode → **cyclothymic (F34.0)**."],
              ["Anything left? ", "Short or too-few-symptom hypomanias with depression, hypomania alone, short cyclothymia → **other specified (F31.89)**. Not enough information → **F31.9**; can’t choose bipolar or depressive → **F39**."],
              ["Describe it. ", "Current episode, severity or remission, then specifiers (anxious distress, mixed features, rapid cycling, melancholic, atypical, psychotic, catatonia, peripartum, seasonal)."]
            ] },
            { type: "ladder", title: "Time rules at a glance", ticks: [[6, "1 d"], [16, "4 d"], [26, "1 wk"], [36, "2 wk"], [46, "1 mo"], [56, "2 mo"], [76, "1 yr"], [92, "2 yr"]], rows: [
              { label: "Short hypomania (F31.89)", dx: "other-specified-bipolar", from: 11, to: 16, color: "guide", span: "2–3 days", note: "Full symptoms, too short for hypomania" },
              { label: "Hypomanic episode", dx: "bipolar-ii", from: 16, to: 100, color: "hy", open: true, span: "≥4 consecutive days" },
              { label: "Manic episode", dx: "bipolar-i", from: 26, to: 100, color: "case", open: true, span: "≥1 week (any if hospitalized)" },
              { label: "Major depressive episode", dx: "bipolar-ii", from: 36, to: 100, color: "drug", open: true, span: "≥2 weeks" },
              { label: "Full remission", from: 0, to: 56, color: "clin", span: "≥2 symptom-free months" },
              { label: "Rapid cycling window", dx: "bipolar-i", from: 0, to: 76, color: "mech", span: "≥4 episodes within 12 months" },
              { label: "Short cyclothymia (F31.89)", dx: "other-specified-bipolar", from: 46, to: 92, color: "guide", span: "<24 months (<12 in youth)" },
              { label: "Cyclothymic disorder", dx: "cyclothymic", from: 92, to: 100, color: "guide", open: true, span: "≥2 years (1 in youth)", note: "Never symptom-free >2 months" }
            ], note: "Peripartum onset = during pregnancy or within 4 weeks of delivery. Substance-induced: persistence ≈1 month after stopping suggests an independent disorder." },
            { type: "callout", kind: "key", title: "Eight traps", text: "1) **Irritable** mood needs **four** B symptoms. 2) **Hospitalization** makes any elevated episode manic, whatever its length. 3) **Psychosis** makes any elevated episode manic. 4) Bipolar I needs **no** depression. 5) Hypomania **without** depression is **F31.89**, not bipolar II. 6) Persistent **antidepressant-emergent** mania = bipolar I; one or two symptoms = nothing. 7) Bipolar II has **one code** and psychosis only in depression. 8) Rapid cycling and cyclothymia differ by **full episodes**." },
            { type: "p", text: "Practice with the [[helper:bipolar|bipolar disorders helper]] and the [[helper:episode|episode helper]], then compare [[dx:bipolar-i|bipolar I]] with [[dx:bipolar-ii|bipolar II]] side by side in the library." }
          ]
        }
      ]
    }
  ]
});
