/* Disorder library: Chapter 2, Schizophrenia Spectrum and Other Psychotic Disorders (DSM-5-TR pp. 101–138).
   One entry per diagnosis. `criteria` uses the same shape as the study guide's criteria block:
   [letter, text, [sub-items], note]. `clues` feed "Name that disorder" in teaching mode (the name is hidden automatically). */
SP.disorders = (SP.disorders || []).concat([
  {
    id: "schizotypal-pd", ch: "ch02", sec: "s2-schizotypal", pages: "104, 744–748", critPages: "744–745",
    name: "Schizotypal personality disorder", code: "F21", aka: ["Schizotypal disorder (ICD-10)", "schizotypal"],
    essence: "A pervasive pattern, from early adulthood, of discomfort with close relationships, **cognitive or perceptual distortions** and **eccentricity**, below the threshold of psychosis.",
    duration: "Pervasive pattern beginning **by early adulthood**",
    functioning: "Interpersonal deficits are part of the definition",
    mood: "Often seeks help for associated anxiety or depression",
    criteria: [
      ["A", "Pervasive social and interpersonal deficits with cognitive or perceptual distortions and eccentric behavior, from early adulthood, shown by **five or more of nine**:", ["Ideas of reference", "Odd beliefs or magical thinking", "Unusual perceptual experiences", "Odd thinking and speech", "Suspiciousness or paranoid ideation", "Inappropriate or constricted affect", "Odd or eccentric behavior or appearance", "No close friends besides first-degree relatives", "Social anxiety that does not lessen with familiarity, driven by paranoid fears"]],
      ["B", "Not exclusively during schizophrenia, a mood disorder with psychotic features, another psychotic disorder or autism spectrum disorder.", null, "Add “(premorbid)” if criteria were met before schizophrenia began."]
    ],
    specifiers: ["“(Premorbid)” when it precedes schizophrenia"],
    epi: [["Prevalence", "3.3% (NCS-R subsample), 3.9% (NESARC); median 0.6% across five studies"], ["Course", "Relatively stable; a small proportion develop schizophrenia or another psychotic disorder"], ["Sex", "Slightly more common in men"], ["Familial", "More common in first-degree relatives of people with schizophrenia"]],
    risk: ["Twin studies: stable genetic factors; schizophrenia risk variants may be linked to schizotypal PD.", "Judge supernatural and religious beliefs (sixth sense, evil eye, mind reading) against the person’s cultural norms."],
    differential: [
        { id: "attenuated-psychosis-syndrome", how: "Attenuated psychosis syndrome is a recent, state-like change (within a year) whereas schizotypal features are stable traits (Section III, p. 906)." },
      { id: "schizophrenia", how: "Persistent psychosis. Schizotypal PD is added only if it preceded the psychosis and persists in remission." },
      { id: "delusional-disorder", how: "Has true delusions held with delusional conviction, not ideas of reference." },
      { name: "Paranoid and schizoid PD", how: "No cognitive or perceptual distortions or marked oddness." },
      { name: "Avoidant PD", how: "Wants relationships but fears rejection; schizotypal PD lacks the desire." },
      { name: "Borderline PD", how: "Transient, stress- and affect-linked, often dissociative psychotic-like symptoms." },
      { name: "Autism spectrum or communication disorders", how: "Even less social awareness and reciprocity, stereotyped behavior; primacy of language impairment." }
    ],
    pearls: ["Ideas of reference ≠ delusions of reference: the difference is **conviction**.", "Social anxiety that **rises** over an evening, driven by suspicion, is characteristic."],
    cmp: { symptoms: "Five or more of nine schizotypal traits; no frank psychosis", exclusions: "Not only during a psychotic or mood disorder with psychosis or autism", prevalence: "0.6%–3.9%", course: "Stable; few progress to psychosis" },
    clues: [["Core picture", "Lifelong eccentricity, magical thinking and ideas of reference, with no friends outside the family"], ["Threshold", "Perceptual distortions stay below the level of a psychotic disorder"], ["A specifier", "Add “(premorbid)” if it preceded schizophrenia"], ["Code", "F21, listed in two chapters"]]
  },
  {
    id: "delusional-disorder", ch: "ch02", sec: "s2-delusional", pages: "104–108", critPages: "104–105",
    name: "Delusional disorder", code: "F22", aka: ["paranoia"],
    essence: "One or more delusions for **≥1 month** in someone who has **never met Criterion A for schizophrenia**, with functioning largely intact apart from the delusion.",
    duration: "Delusions for **≥1 month**",
    functioning: "**Not** markedly impaired apart from the delusion; behavior not bizarre",
    mood: "Mood episodes only **brief** relative to the delusional periods",
    criteria: [
      ["A", "One or more delusions lasting **1 month or longer**."],
      ["B", "Schizophrenia Criterion A **never met**; hallucinations, if any, not prominent and related to the delusion."],
      ["C", "Functioning not markedly impaired apart from the delusion; behavior not obviously bizarre or odd."],
      ["D", "Mood episodes, if any, brief relative to the delusional periods."],
      ["E", "Not due to a substance or medical condition; not better explained by BDD or OCD."]
    ],
    specifiers: ["**Type**: erotomanic, grandiose, jealous, persecutory, somatic, mixed, unspecified", "**With bizarre content**", "**Course** (after 1 year)", "**Severity** 0–4"],
    epi: [["Prevalence", "About 0.2% lifetime (Finnish sample)"], ["Commonest type", "Persecutory"], ["Sex", "No major overall difference; jealous type probably more common in men; men have worse outcomes"], ["Course", "About one-third of cases lasting 1–3 months become schizophrenia; stable after 6–12 months"], ["Age", "May be more prevalent in older people"]],
    risk: ["Significant familial link with schizophrenia and schizotypal PD.", "Traditional beliefs unfamiliar to Western clinicians can be mislabeled as delusional."],
    differential: [
        { id: "psychosis-severity-dimensions", how: "The “specify current severity” line rates the five primary symptoms 0–4 for the worst in the past 7 days with the Clinician-Rated Dimensions of Psychosis Symptom Severity, an 8-item Section III measure; the diagnosis can be made without it (Ch 2; Chapter 23, pp. 851–853)." },
        { id: "maladi-dyab", how: "A Haitian sent-sickness explanation shared by the community; the manual warns it may lead to misdiagnosis of delusional disorder, persecutory type (Chapter 24, p. 877)." },
        { id: "taijin-kyofusho", how: "Consider delusional disorder only when the fear of offending others has a delusional quality that resists reassurance or counterexample (Chapter 24, p. 879)." },
      { name: "OCD or body dysmorphic disorder", how: "Fully convinced OCD or BDD beliefs → that disorder **with absent insight/delusional beliefs**." },
      { name: "Major neurocognitive disorder", how: "Simple persecutory delusions in dementia → major NCD **with behavioral disturbance**." },
      { id: "substance-induced-psychotic", how: "Same cross-sectional picture; timing of substance use decides." },
      { id: "schizophrenia", how: "Other active-phase symptoms; delusions more disorganized and less systematized." },
      { name: "Mood disorder with psychotic features", how: "Delusions occur only during mood episodes." },
      { id: "other-specified-psychotic", how: "Delusions with mood episodes for a substantial portion of the disturbance." }
    ],
    pearls: ["**Catatonia excludes** delusional disorder (it would meet schizophrenia Criterion A).", "“Factual insight” without true insight.", "Delusional disorder delusions show more **conviction, extension and pressure**; schizophrenia delusions more **disorganization**."],
    cmp: { symptoms: "Delusions only; hallucinations, if any, not prominent and on-theme", exclusions: "Schizophrenia Criterion A ever met; OCD/BDD; substance or medical cause", prevalence: "≈0.2%", course: "Generally stable; better function than schizophrenia" },
    clues: [["Core picture", "A single systematized belief, held for months, in someone who otherwise looks and functions normally"], ["Time criterion", "At least 1 month"], ["Subtypes", "Erotomanic, grandiose, jealous, persecutory, somatic, mixed, unspecified"], ["Excluded by", "Ever meeting Criterion A for schizophrenia, or catatonia"]]
  },
  {
    id: "brief-psychotic-disorder", ch: "ch02", sec: "s2-brief", pages: "108–111", critPages: "108–109",
    name: "Brief psychotic disorder", code: "F23", aka: ["brief reactive psychosis"],
    essence: "Sudden positive psychotic symptoms lasting **at least 1 day but less than 1 month**, followed by a **full return** to premorbid functioning.",
    duration: "**≥1 day, <1 month**, then full recovery",
    functioning: "Can be severe during the episode; full return afterward is required",
    mood: "Not better explained by a mood disorder with psychotic features",
    criteria: [
      ["A", "**One or more** of delusions, hallucinations, disorganized speech, grossly disorganized or catatonic behavior; at least one of the first three.", null, "Culturally sanctioned responses do not count; negative symptoms are not listed."],
      ["B", "Episode lasts **≥1 day and <1 month**, with eventual full return to the premorbid level."],
      ["C", "Not better explained by a mood disorder with psychotic features, another psychotic disorder or catatonia; not due to a substance or medical condition."]
    ],
    specifiers: ["**With marked stressor(s)** (brief reactive psychosis)", "**Without marked stressor(s)**", "**With peripartum onset** (pregnancy or within 4 weeks postpartum)", "**With catatonia** (+F06.1)", "**Severity** 0–4"],
    epi: [["Share of first-onset psychosis", "2%–7%"], ["Average onset", "Mid-30s"], ["Relapse", "More than 50%"], ["Diagnostic change", "In under half, more often to a schizophrenia spectrum disorder"], ["Suicide", "Increased risk of suicidal behavior, especially when acute"]],
    risk: ["Distinguish culturally sanctioned experiences: voices during a religious ceremony, bereaved relatives sensing the deceased."],
    differential: [
        { id: "psychosis-severity-dimensions", how: "The “specify current severity” line rates the five primary symptoms 0–4 for the worst in the past 7 days with the Clinician-Rated Dimensions of Psychosis Symptom Severity, an 8-item Section III measure; the diagnosis can be made without it (Ch 2; Chapter 23, pp. 851–853)." },
      { id: "psychotic-due-to-amc", how: "Evidence of a direct medical cause (e.g., Cushing’s syndrome, brain tumor), or delirium." },
      { id: "substance-induced-psychotic", how: "A substance is causal: drug screen, blood alcohol, timeline." },
      { name: "Mood disorder with psychotic features", how: "Psychosis only within a full mood episode." },
      { id: "schizophreniform-disorder", how: "Symptoms lasting 1 month or more." },
      { name: "Malingering or factitious disorder", how: "Symptoms intentionally produced." },
      { name: "Personality disorders", how: "Transient stress-related symptoms usually need no extra diagnosis; ≥1 day may justify adding brief psychotic disorder." }
    ],
    pearls: ["The only psychotic disorder that **requires full recovery** within a month.", "Peripartum onset = during pregnancy or **within 4 weeks** postpartum."],
    cmp: { symptoms: "One or more of four positive symptoms (no negative symptoms)", exclusions: "Mood disorder with psychosis; other psychotic disorder; substance or medical cause", prevalence: "2%–7% of first-onset psychosis", course: ">50% relapse but usually favorable" },
    clues: [["Core picture", "Sudden turmoil, delusions and hallucinations in a previously well person, gone within weeks"], ["Time criterion", "At least a day but less than a month"], ["A specifier", "With marked stressor, also called reactive psychosis"], ["Course", "Full recovery required; more than half relapse later"]]
  },
  {
    id: "schizophreniform-disorder", ch: "ch02", sec: "s2-schizophreniform", pages: "111–113", critPages: "111–112",
    name: "Schizophreniform disorder", code: "F20.81", aka: [],
    essence: "The symptom picture of schizophrenia lasting **at least 1 month but less than 6 months**, with **no requirement** for functional decline.",
    duration: "**≥1 month, <6 months** (all phases); “provisional” while still ill",
    functioning: "**Not required**",
    mood: "Mood episodes absent or present for only a minority of the illness",
    criteria: [
      ["A", "Schizophrenia Criterion A: two or more of five symptoms for a significant part of 1 month, at least one being delusions, hallucinations or disorganized speech."],
      ["B", "Episode lasts **≥1 month and <6 months**; “provisional” if made before recovery."],
      ["C", "Schizoaffective disorder and mood disorders with psychotic features ruled out."],
      ["D", "Not due to a substance or another medical condition."]
    ],
    specifiers: ["**With good prognostic features** (≥2 of: psychosis within 4 weeks of first change; confusion or perplexity; good premorbid functioning; no blunted or flat affect)", "**Without good prognostic features**", "**With catatonia** (+F06.1)", "**Severity** 0–4"],
    epi: [["Incidence", "Possibly fivefold lower than schizophrenia in high-income countries; may equal it in lower-income settings"], ["Course", "About one-third recover within 6 months; most of the rest become schizophrenia or schizoaffective disorder"], ["Familial", "Relatives at increased risk of schizophrenia"]],
    risk: ["Differential and associated features follow schizophrenia."],
    differential: [
        { id: "psychosis-severity-dimensions", how: "The “specify current severity” line rates the five primary symptoms 0–4 for the worst in the past 7 days with the Clinician-Rated Dimensions of Psychosis Symptom Severity, an 8-item Section III measure; the diagnosis can be made without it (Ch 2; Chapter 23, pp. 851–853)." },
      { id: "brief-psychotic-disorder", how: "Lasts less than 1 month." },
      { id: "schizophrenia", how: "Lasts 6 months or more and requires functional decline." },
      { id: "schizoaffective-disorder", how: "Mood episodes for the majority of the illness." }
    ],
    pearls: ["Two differences from schizophrenia: **duration** and **no functional decline criterion**.", "If symptoms pass 6 months, change the diagnosis to schizophrenia."],
    cmp: { symptoms: "Schizophrenia Criterion A", exclusions: "Schizoaffective; mood disorder with psychosis; substance or medical cause", prevalence: "Lower than schizophrenia in high-income countries", course: "One-third recover; most others → schizophrenia/schizoaffective" },
    clues: [["Core picture", "A full schizophrenia-like illness that is only a few months old"], ["Time criterion", "At least 1 month but less than 6 months"], ["A specifier", "With good prognostic features, e.g., confusion or perplexity"], ["Not required", "Social or occupational decline"]]
  },
  {
    id: "schizophrenia", ch: "ch02", sec: "s2-scz-criteria", pages: "113–121", critPages: "113–114",
    name: "Schizophrenia", code: "F20.9", aka: [],
    essence: "Two or more psychotic domains (including delusions, hallucinations or disorganized speech) for a month, **functional decline**, and continuous signs for **≥6 months**.",
    duration: "**≥6 months** of continuous signs, including **≥1 month** of active-phase symptoms",
    functioning: "**Required** (Criterion B)",
    mood: "Absent during the active phase, or present for only a **minority** of the illness",
    criteria: [
      ["A", "Two or more for a significant part of 1 month (less if treated), at least one of the first three:", ["Delusions", "Hallucinations", "Disorganized speech", "Grossly disorganized or catatonic behavior", "Negative symptoms (diminished emotional expression or avolition)"]],
      ["B", "Marked decline in work, relationships or self-care (or failure to reach expected levels in youth)."],
      ["C", "Continuous signs for **≥6 months**, including ≥1 month of Criterion A; prodromal/residual periods may show negative or attenuated symptoms."],
      ["D", "Schizoaffective and mood disorders with psychotic features ruled out."],
      ["E", "Not due to a substance or another medical condition."],
      ["F", "With autism or a childhood communication disorder, prominent delusions or hallucinations for ≥1 month are also required."]
    ],
    specifiers: ["**Course** (after 1 year): first or multiple episodes, acute, partial or full remission; continuous; unspecified", "**With catatonia** (+F06.1)", "**Severity** 0–4"],
    epi: [["Lifetime prevalence", "About 0.3%–0.7%"], ["Onset", "Late teens to mid-30s; peak early–mid 20s (men), late 20s (women)"], ["First-episode outcome", "Remission 56%, recovery 30% (pooled)"], ["Suicide", "5%–6% die by suicide; about 20% attempt"], ["Tobacco", "More than half have tobacco use disorder"]],
    risk: ["Urban upbringing, migration and refugee status, discrimination, social adversity, childhood trauma.", "Season of birth (late winter/early spring; summer for the deficit form).", "Polygenic risk shared with bipolar disorder, depression and autism; most patients have no family history.", "Obstetric complications with hypoxia, older paternal age, prenatal infection, stress, malnutrition, maternal diabetes.", "Women: later onset with a midlife peak, more affective symptoms, better social functioning; symptoms track estrogen.", "Underserved ethnic and racialized groups (e.g., African Americans in the US) are more often misdiagnosed with schizophrenia."],
    differential: [
        { id: "psychosis-severity-dimensions", how: "The “specify current severity” line rates the five primary symptoms 0–4 for the worst in the past 7 days with the Clinician-Rated Dimensions of Psychosis Symptom Severity, an 8-item Section III measure; the diagnosis can be made without it (Ch 2; Chapter 23, pp. 851–853)." },
      { name: "MDD or bipolar disorder with psychotic or catatonic features", how: "Psychosis only during mood episodes." },
      { id: "schizoaffective-disorder", how: "Concurrent mood episode, mood present for the majority of the illness." },
      { id: "schizophreniform-disorder", how: "Less than 6 months." },
      { id: "brief-psychotic-disorder", how: "Less than 1 month, full recovery." },
      { id: "delusional-disorder", how: "No other characteristic symptoms." },
      { id: "schizotypal-pd", how: "Subthreshold, trait-like symptoms." },
      { name: "OCD or body dysmorphic disorder", how: "Prominent obsessions, compulsions or appearance preoccupations despite poor insight." },
      { name: "PTSD", how: "Trauma and reliving symptoms explain flashbacks and hypervigilance." },
      { name: "Autism spectrum or communication disorders", how: "Add schizophrenia only with ≥1 month of prominent delusions or hallucinations." },
      { id: "substance-induced-psychotic", how: "Timeline of substance use and remission without it." }
    ],
    pearls: ["**No single symptom is pathognomonic.**", "Anosognosia is the **most common predictor of nonadherence**.", "Most people with schizophrenia are **not violent** and are more often **victims**.", "Not generally a progressive neurodegenerative disorder."],
    cmp: { symptoms: "≥2 of 5, at least one of delusions, hallucinations or disorganized speech", exclusions: "Schizoaffective; mood disorder with psychosis; substance or medical cause; autism without ≥1 month of prominent psychosis", prevalence: "0.3%–0.7% lifetime", course: "Heterogeneous; first episode: 56% remission, 30% recovery" },
    clues: [["Core picture", "A young adult with voices, delusions and withdrawal, declining over many months"], ["Time criterion", "Six months of continuous signs, including one month of active-phase symptoms"], ["Associated feature", "Anosognosia, the most common predictor of nonadherence"], ["Epidemiology", "Lifetime prevalence about 0.3%–0.7%; peak onset early-to-mid 20s in men"]]
  },
  {
    id: "schizoaffective-disorder", ch: "ch02", sec: "s2-schizoaffective", pages: "121–125", critPages: "121–122",
    name: "Schizoaffective disorder", code: "F25.0 / F25.1", codes: [["F25.0", "Schizoaffective disorder, bipolar type", "A manic episode is part of the presentation"], ["F25.1", "Schizoaffective disorder, depressive type", "Only major depressive episodes"]],
    aka: [],
    essence: "A major mood episode **concurrent** with schizophrenia Criterion A, mood episodes for the **majority** of the illness, and **≥2 weeks** of delusions or hallucinations **without** a mood episode.",
    duration: "**≥2 weeks** of delusions or hallucinations without a major mood episode; mood for the **majority** of the illness",
    functioning: "Often impaired but **not required**",
    mood: "Major mood episodes present for the **majority** of the active and residual illness",
    criteria: [
      ["A", "Uninterrupted illness with a major depressive or manic episode concurrent with schizophrenia Criterion A.", null, "The depressive episode must include depressed mood."],
      ["B", "Delusions or hallucinations for **≥2 weeks** without a major mood episode, at some point in the illness."],
      ["C", "Mood episode symptoms present for the **majority** of the total active and residual illness."],
      ["D", "Not due to a substance or another medical condition."]
    ],
    specifiers: ["**Bipolar type (F25.0)** or **depressive type (F25.1)**", "**With catatonia** (+F06.1)", "**Course** (after 1 year)", "**Severity** 0–4"],
    epi: [["Prevalence", "About one-third as common as schizophrenia; 0.3% lifetime (Finnish sample)"], ["Sex", "Higher in women (DSM-IV criteria)"], ["Onset", "Usually early adulthood"], ["Prognosis", "Better than schizophrenia, worse than mood disorders"], ["Suicide", "Lifetime risk 5% (with schizophrenia); higher with depressive symptoms"]],
    risk: ["Relatives of people with schizophrenia, bipolar disorder or schizoaffective disorder are at higher risk.", "Polygenic risk scores for schizophrenia, bipolar disorder and MDD may all be elevated.", "African American and Hispanic patients who meet criteria are more often diagnosed with schizophrenia."],
    differential: [
        { id: "psychosis-severity-dimensions", how: "The “specify current severity” line rates the five primary symptoms 0–4 for the worst in the past 7 days with the Clinician-Rated Dimensions of Psychosis Symptom Severity, an 8-item Section III measure; the diagnosis can be made without it (Ch 2; Chapter 23, pp. 851–853)." },
      { id: "schizophrenia", how: "Mood episodes for only a minority of the illness (Criterion C)." },
      { name: "Bipolar or major depressive disorder with psychotic features", how: "No psychosis outside mood episodes (Criterion B)." },
      { id: "psychotic-due-to-amc", how: "A medical condition producing both psychotic and mood symptoms." },
      { id: "delusional-disorder", how: "Delusions only, mood brief." }
    ],
    pearls: ["Criterion B separates it from **mood disorders**; Criterion C from **schizophrenia**.", "The depressive episode needs **depressed mood**, not just anhedonia.", "Schizophrenia’s B (decline), C (6 months) and F (autism) are **not** required.", "Diagnoses shift over time, most often **to schizophrenia**."],
    cmp: { symptoms: "Schizophrenia Criterion A plus a major mood episode", exclusions: "Substance or medical cause", prevalence: "≈0.3%; one-third of schizophrenia", course: "Between schizophrenia and mood disorders" },
    clues: [["Core picture", "Recurrent mood episodes with psychosis, and voices that persist between episodes"], ["Time rule", "Two weeks of psychosis without a mood episode; mood for the majority of the illness"], ["Types", "Bipolar type or depressive type"], ["Prognosis", "Better than schizophrenia, worse than mood disorders"]]
  },
  {
    id: "substance-induced-psychotic", ch: "ch02", sec: "s2-substance", pages: "126–131", critPages: "126–127",
    name: "Substance/medication-induced psychotic disorder", code: "F1x.x59", codeNote: "the 4th character shows the comorbid use disorder",
    codes: [
      ["F10.159 / F10.259 / F10.959", "Alcohol-induced psychotic disorder", "With mild / moderate-severe / no alcohol use disorder"],
      ["F12.159 / F12.259 / F12.959", "Cannabis-induced psychotic disorder", "With mild / moderate-severe / no use disorder"],
      ["F16.159 / F16.259 / F16.959", "Phencyclidine- or other hallucinogen-induced psychotic disorder", "With mild / moderate-severe / no use disorder"],
      ["F18.159 / F18.259 / F18.959", "Inhalant-induced psychotic disorder", "With mild / moderate-severe / no use disorder"],
      ["F13.159 / F13.259 / F13.959", "Sedative-, hypnotic- or anxiolytic-induced psychotic disorder", "With mild / moderate-severe / no use disorder"],
      ["F15.159 / F15.259 / F15.959", "Amphetamine-type (or other stimulant)-induced psychotic disorder", "With mild / moderate-severe / no use disorder"],
      ["F14.159 / F14.259 / F14.959", "Cocaine-induced psychotic disorder", "With mild / moderate-severe / no use disorder"],
      ["F19.159 / F19.259 / F19.959", "Other (or unknown) substance-induced psychotic disorder", "Also for medications that fit no class, e.g., dexamethasone"]
    ],
    aka: ["drug-induced psychosis", "substance-induced psychosis"],
    essence: "Delusions or hallucinations judged to be a **direct physiological effect** of a drug of abuse, a medication or a toxin.",
    duration: "Onset **during or soon after** intoxication, withdrawal or medication exposure; persistence **≈1 month** after cessation suggests an independent disorder",
    functioning: "Distress or impairment required (Criterion E)",
    mood: "—",
    criteria: [
      ["A", "Delusions and/or hallucinations."],
      ["B", "Onset during or soon after intoxication, withdrawal or medication exposure, by a substance able to cause them."],
      ["C", "Not better explained by an independent psychotic disorder (onset before use; persistence ≈1 month after cessation; prior independent episodes)."],
      ["D", "Not exclusively during delirium."],
      ["E", "Clinically significant distress or impairment."]
    ],
    specifiers: ["**With onset during intoxication**", "**With onset during withdrawal**", "**With onset after medication use**", "**Severity** 0–4 (no disorganized speech rating)"],
    epi: [["First-episode psychosis", "7%–25% are substance/medication-induced"], ["Long-term", "32% later schizophrenia spectrum (26%) or bipolar (8%); cannabis-induced highest at 44%"]],
    risk: ["New delusions in a man older than 35 with no psychotic history suggest a substance or medication cause.", "In later life, polypharmacy makes prescription-induced psychosis more likely."],
    differential: [
        { id: "psychosis-severity-dimensions", how: "The “specify current severity” line rates the five primary symptoms 0–4 for the worst in the past 7 days with the Clinician-Rated Dimensions of Psychosis Symptom Severity, an 8-item Section III measure; the diagnosis can be made without it (Ch 2; Chapter 23, pp. 851–853)." },
      { name: "Intoxication or withdrawal with perceptual disturbances", how: "Reality testing intact: the person knows the perceptions are drug effects." },
      { name: "Hallucinogen persisting perception disorder", how: "Flashbacks long after hallucinogen use has stopped." },
      { name: "Delirium", how: "Psychosis only during a delirium is part of the delirium." },
      { id: "psychotic-due-to-amc", how: "The illness itself is causal; both diagnoses can be given." },
      { id: "schizophrenia", how: "Independent disorder: before use, during abstinence, or persisting ≥1 month." },
      { id: "other-specified-psychotic", how: "Induced disorganized or catatonic behavior without delusions or hallucinations." }
    ],
    pearls: ["No separate use disorder diagnosis: it is built into the code.", "Formication (bugs under the skin) with stimulants and cocaine.", "Cannabis psychosis usually remits within a day."],
    cmp: { symptoms: "Delusions and/or hallucinations only", exclusions: "Independent psychotic disorder; delirium; intact reality testing", prevalence: "7%–25% of first-episode psychosis", course: "Self-limited, but about one-third later convert" },
    clues: [["Core picture", "Paranoia and voices that began within hours of a binge and fade over days"], ["Coding", "The fourth character records whether a use disorder is present"], ["Specifiers", "Onset during intoxication, during withdrawal, or after medication use"], ["Not this if", "The person knows the perceptions are drug effects"]]
  },
  {
    id: "psychotic-due-to-amc", ch: "ch02", sec: "s2-medical", pages: "131–134", critPages: "131",
    name: "Psychotic disorder due to another medical condition", code: "F06.2 / F06.0",
    codes: [["F06.2", "Psychotic disorder due to [condition], with delusions", "Code the medical condition first"], ["F06.0", "Psychotic disorder due to [condition], with hallucinations", "Code the medical condition first"]],
    aka: ["secondary psychosis", "organic psychosis"],
    essence: "Prominent hallucinations or delusions that are the **direct pathophysiological consequence** of another medical condition.",
    duration: "Tracks the medical condition (**temporality** is the strongest evidence)",
    functioning: "Distress or impairment required (Criterion E)",
    mood: "—",
    criteria: [
      ["A", "Prominent hallucinations or delusions."],
      ["B", "Evidence that the disturbance is the direct pathophysiological consequence of another medical condition."],
      ["C", "Not better explained by another mental disorder."],
      ["D", "Not exclusively during delirium."],
      ["E", "Clinically significant distress or impairment."]
    ],
    specifiers: ["**With delusions (F06.2)**", "**With hallucinations (F06.0)**", "**Severity** 0–4 (no disorganized speech rating)"],
    epi: [["Lifetime prevalence", "0.21%–0.54%; 0.74% over age 65"], ["Epilepsy", "Postictal psychosis is the most common form (2%–7.8% of people with epilepsy)"], ["Older adults", "About 60% of new-onset psychosis has a medical cause"]],
    risk: ["Preexisting CNS injury may worsen the course.", "Vision, hearing and cognitive impairment may lower the threshold for psychosis in older people."],
    differential: [
        { id: "psychosis-severity-dimensions", how: "The “specify current severity” line rates the five primary symptoms 0–4 for the worst in the past 7 days with the Clinician-Rated Dimensions of Psychosis Symptom Severity, an 8-item Section III measure; the diagnosis can be made without it (Ch 2; Chapter 23, pp. 851–853)." },
      { name: "Delirium", how: "Psychosis only during delirium: no separate diagnosis." },
      { name: "Major or mild neurocognitive disorder", how: "Can be co-diagnosed when the same disease causes the psychosis (e.g., Lewy body disease)." },
      { id: "substance-induced-psychotic", how: "Symptoms within about 4 weeks of intoxication, withdrawal or medication use; both can be given." },
      { id: "schizophrenia", how: "No demonstrable causal mechanism; complex-sentence voices more typical of schizophrenia." }
    ],
    pearls: ["**Plausibility, temporality, typicality.**", "Olfactory hallucinations → think temporal lobe epilepsy, but no single hallucination is decisive.", "If reality testing is preserved, the diagnosis is generally not made."],
    cmp: { symptoms: "Prominent hallucinations or delusions", exclusions: "Delirium; another mental disorder", prevalence: "0.21%–0.54%; higher after 65", course: "Follows the medical condition" },
    clues: [["Core picture", "New-onset delusions in an older adult with a smell of burning rubber and lip-smacking spells"], ["Three tests", "Biological plausibility, temporality, typicality"], ["Codes", "F06.2 with delusions, F06.0 with hallucinations"], ["Epidemiology", "About 60% of new-onset psychosis in older adults"]]
  },
  {
    id: "catatonia-associated", ch: "ch02", sec: "s2-catatonia", pages: "134–136", critPages: "135",
    name: "Catatonia associated with another mental disorder", code: "F06.1", aka: ["catatonia specifier"],
    essence: "**Three or more of 12** psychomotor features during a neurodevelopmental, psychotic, bipolar, depressive or other mental disorder.",
    duration: "No time criterion",
    functioning: "—",
    mood: "Most catatonia occurs in **depressive or bipolar** disorders",
    criteria: [
      ["A", "Three or more of: stupor, catalepsy, waxy flexibility, mutism, negativism, posturing, mannerism, stereotypy, agitation not influenced by external stimuli, grimacing, echolalia, echopraxia."]
    ],
    specifiers: ["Code the associated mental disorder **first**, then **F06.1** catatonia associated with that disorder"],
    epi: [["Schizophrenia", "Up to 35% have catatonia"], ["Clinical samples", "About 9% of patients"], ["Mood disorders", "The majority of catatonia cases"]],
    risk: ["The association with mood disorders holds across cultures."],
    differential: [
      { id: "catatonic-due-to-amc", how: "Infectious, metabolic or neurological cause must be ruled out first." },
      { id: "nms", name: "Neuroleptic malignant syndrome (G21.0)", how: "On antipsychotics, with vital sign and laboratory abnormalities." },
      { id: "medication-induced-acute-dystonia", name: "Medication-induced movement disorders", how: "E.g., acute dystonia producing abnormal postures." }
    ],
    pearls: ["Rare signs such as **waxy flexibility** are overtaught; most catatonia is mutism, negativism, staring and posturing.", "Complications: malnutrition, exhaustion, thromboembolism, pressure ulcers, contractures, hyperpyrexia."],
    cmp: { symptoms: "≥3 of 12 catatonic features", exclusions: "Medical causes, medication effects, NMS", prevalence: "≈9% of clinical samples; up to 35% in schizophrenia", course: "Follows the associated disorder" },
    clues: [["Core picture", "A mute, rigid patient with depression who holds a raised arm in place for minutes"], ["Threshold", "Three or more of twelve psychomotor features"], ["Coding", "F06.1, after the associated mental disorder"], ["Rule out first", "Neuroleptic malignant syndrome"]]
  },
  {
    id: "catatonic-due-to-amc", ch: "ch02", sec: "s2-catatonia", pages: "136–137", critPages: "136–137",
    name: "Catatonic disorder due to another medical condition", code: "F06.1", aka: [],
    essence: "Catatonia (≥3 of 12 features) judged to be the **direct physiological effect** of another medical condition.",
    duration: "No time criterion",
    functioning: "Distress or impairment required (Criterion E)",
    mood: "Not better explained by another mental disorder (e.g., a manic episode)",
    criteria: [
      ["A", "Three or more of the 12 catatonic features."],
      ["B", "Evidence that it is the direct pathophysiological consequence of another medical condition."],
      ["C", "Not better explained by another mental disorder."],
      ["D", "Not exclusively during delirium."],
      ["E", "Clinically significant distress or impairment."]
    ],
    specifiers: ["Code the medical condition first (e.g., K72.90 hepatic encephalopathy), then F06.1 catatonic disorder due to that condition"],
    epi: [["Causes", "Neoplasms, head trauma, stroke, encephalitis; hypercalcemia, hepatic encephalopathy, homocystinuria, diabetic ketoacidosis"]],
    risk: [],
    differential: [
      { name: "Delirium or NMS", how: "Not diagnosed separately if catatonia occurs only during delirium or NMS." },
      { id: "catatonia-associated", how: "A mental disorder, not a medical condition, accounts for the catatonia." }
    ],
    pearls: ["Catatonic signs are common in delirium, but no separate diagnosis is made then."],
    cmp: { symptoms: "≥3 of 12 catatonic features", exclusions: "Delirium; NMS; another mental disorder", prevalence: "—", course: "Follows the medical condition" },
    clues: [["Core picture", "Stupor and posturing in a patient with hepatic encephalopathy"], ["Coding", "Medical condition first, then F06.1"], ["Not diagnosed if", "It occurs only during a delirium or NMS"]]
  },
  {
    id: "unspecified-catatonia", ch: "ch02", sec: "s2-catatonia", pages: "137", critPages: "137",
    name: "Unspecified catatonia", code: "R29.818 + F06.1", codes: [["R29.818 then F06.1", "Unspecified catatonia", "Code R29.818 (other symptoms involving nervous and musculoskeletal systems) first"]],
    aka: [],
    essence: "Catatonic symptoms causing distress or impairment when the **cause is unclear**, **full criteria are not met**, or there is **not enough information**.",
    duration: "No time criterion",
    functioning: "Distress or impairment required",
    mood: "—",
    criteria: ["Symptoms characteristic of catatonia with clinically significant distress or impairment, but the underlying disorder is unclear, full criteria are not met, or information is insufficient (e.g., in the emergency room)."],
    specifiers: ["Code **R29.818** first, then **F06.1**"],
    epi: [],
    risk: [],
    differential: [
      { id: "catatonia-associated", how: "Underlying mental disorder known and ≥3 features." },
      { id: "catatonic-due-to-amc", how: "Medical cause established." }
    ],
    pearls: ["The only catatonia diagnosis with **two codes**."],
    cmp: { symptoms: "Catatonic symptoms, criteria possibly incomplete", exclusions: "—", prevalence: "—", course: "—" },
    clues: [["Core picture", "A mute, posturing patient in the emergency room with no history available"], ["Coding", "R29.818 first, then F06.1"]]
  },
  {
    id: "other-specified-psychotic", ch: "ch02", sec: "s2-other", pages: "138", critPages: "138",
    name: "Other specified schizophrenia spectrum and other psychotic disorder", code: "F28", aka: ["attenuated psychosis syndrome", "shared psychotic disorder", "folie à deux", "persistent auditory hallucinations"],
    essence: "A psychotic presentation that causes distress or impairment but meets no full criteria, **with the reason recorded**.",
    duration: "—",
    functioning: "Distress or impairment required",
    mood: "Includes delusions with substantial overlapping mood episodes",
    criteria: ["Record “other specified schizophrenia spectrum and other psychotic disorder” followed by the reason. Examples: persistent auditory hallucinations alone; delusions with significant overlapping mood episodes; attenuated psychosis syndrome; delusional symptoms in a partner of someone with prominent delusions."],
    specifiers: ["The specific reason in parentheses"],
    epi: [],
    risk: [],
    differential: [
        { id: "attenuated-psychosis-syndrome", how: "The proposed Section III criteria for attenuated psychosis syndrome (weekly for a month, onset or worsening within a year, insight kept) are in Chapter 25; the chart records F28 with the reason (Section III, pp. 903–904; app guidance)." },
      { id: "unspecified-psychotic", how: "Same, but the reason is not stated." },
      { id: "delusional-disorder", how: "Mood episodes brief relative to the delusions." }
    ],
    pearls: ["Shared delusions (folie à deux) are an F28 example, not a separate diagnosis.", "Attenuated psychosis syndrome: subthreshold, transient, insight relatively kept."],
    cmp: { symptoms: "Subthreshold or atypical psychosis", exclusions: "Full criteria for a specific disorder", prevalence: "—", course: "—" },
    clues: [["Core picture", "A wife who adopts her husband’s persecutory delusion"], ["Examples", "Persistent auditory hallucinations alone; attenuated psychosis syndrome"], ["Code", "F28, with the reason recorded"]]
  },
  {
    id: "unspecified-psychotic", ch: "ch02", sec: "s2-other", pages: "138", critPages: "138",
    name: "Unspecified schizophrenia spectrum and other psychotic disorder", code: "F29", aka: [],
    essence: "A psychotic presentation that meets no full criteria when the clinician **does not state the reason** or there is **insufficient information**.",
    duration: "—",
    functioning: "Distress or impairment required",
    mood: "—",
    criteria: ["Psychotic symptoms causing distress or impairment that do not meet full criteria, when the clinician chooses not to give the reason or information is insufficient (e.g., the emergency room)."],
    specifiers: [],
    epi: [],
    risk: [],
    differential: [{ id: "other-specified-psychotic", how: "The reason is recorded." }],
    pearls: ["Typical use: the emergency department, before history and workup are complete."],
    cmp: { symptoms: "Psychotic symptoms, criteria not met or unclear", exclusions: "Full criteria for a specific disorder", prevalence: "—", course: "—" },
    clues: [["Core picture", "An acutely psychotic stranger in the ED with no history yet"], ["Code", "F29, no reason recorded"]]
  }
]);

/* Classic look-alike pairs for the Compare page. */
SP.comparePresets = (SP.comparePresets || []).concat([
  { label: "Brief psychotic vs schizophreniform vs schizophrenia", ids: ["brief-psychotic-disorder", "schizophreniform-disorder", "schizophrenia"] },
  { label: "Schizophrenia vs schizoaffective", ids: ["schizophrenia", "schizoaffective-disorder"] },
  { label: "Delusional disorder vs schizophrenia", ids: ["delusional-disorder", "schizophrenia"] },
  { label: "Schizotypal PD vs delusional disorder", ids: ["schizotypal-pd", "delusional-disorder"] },
  { label: "Substance-induced vs medical cause", ids: ["substance-induced-psychotic", "psychotic-due-to-amc"] },
  { label: "The three catatonia diagnoses", ids: ["catatonia-associated", "catatonic-due-to-amc", "unspecified-catatonia"] },
  { label: "F28 vs F29", ids: ["other-specified-psychotic", "unspecified-psychotic"] }
]);

/* Duration ladders shown on the Time criteria page (one per chapter). */
SP.timeLadders = (SP.timeLadders || []).concat([
  { type: "ladder", title: "Chapter 2: psychotic disorders", ticks: [[0, "0"], [12, "1 day"], [26, "2 wk"], [38, "1 mo"], [72, "6 mo"], [92, "1 yr"]], rows: [
    { label: "Brief psychotic", dx: "brief-psychotic-disorder", from: 12, to: 38, color: "hy", span: "≥1 day, <1 month", note: "Then a full return to baseline" },
    { label: "Schizophreniform", dx: "schizophreniform-disorder", from: 38, to: 72, color: "drug", span: "≥1 month, <6 months", note: "“Provisional” while still ill" },
    { label: "Schizophrenia", dx: "schizophrenia", from: 72, to: 100, color: "mech", open: true, span: "≥6 months", note: "Including ≥1 month of active-phase symptoms" },
    { label: "Delusional disorder", dx: "delusional-disorder", from: 38, to: 100, color: "guide", open: true, span: "≥1 month", note: "Course specifiers only after 1 year" },
    { label: "Schizoaffective (psychosis alone)", dx: "schizoaffective-disorder", from: 26, to: 38, color: "case", span: "≥2 weeks without mood", note: "Plus mood episodes for the majority of the illness" },
    { label: "Substance-induced", dx: "substance-induced-psychotic", from: 0, to: 38, color: "clin", span: "Persisting ≈1 month → think independent", note: "Persistence for about a month after intoxication or withdrawal ends suggests an independent disorder" }
  ], note: "Course specifiers can be added only after the disorder has lasted 1 year." }
]);
