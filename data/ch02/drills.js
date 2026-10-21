/* Chapter 2 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifiers, code) in recording order.
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var COURSE = ["None yet: less than 1 year", "First episode, currently in acute episode", "First episode, currently in partial remission", "Multiple episodes, currently in acute episode", "Multiple episodes, currently in partial remission", "Continuous"];

  SP.add("ch02", "dxline", [
    {
      id: "w2-01", tag: "Schizophrenia",
      "case": "A 24-year-old has had schizophrenia for 3 years: a first episode, partial recovery, a relapse, and now a second acute episode with hallucinations and delusions. For most of the current episode he has been mute, posturing and resisting being moved. NMS and medical causes are excluded.",
      parts: [
        { label: "Diagnosis", options: ["Schizophrenia", "Schizophreniform disorder", "Schizoaffective disorder", "Brief psychotic disorder"], answer: 0 },
        { label: "Course (after 1 year)", options: COURSE, answer: 3 },
        { label: "Other specifier", options: ["With catatonia", "With good prognostic features", "With marked stressor", "None"], answer: 0 },
        { label: "ICD-10-CM code(s)", options: ["F20.9", "F20.9 plus F06.1", "F20.81 plus F06.1", "F06.1 alone"], answer: 1 }
      ],
      line: "**F20.9** Schizophrenia, multiple episodes, currently in acute episode, with catatonia; **F06.1** catatonia associated with schizophrenia",
      why: "Course specifiers may be used after 1 year; a first episode, a remission and a relapse make **multiple episodes**. With catatonia carries the coding note: add **F06.1**."
    },
    {
      id: "w2-02", tag: "Schizophreniform",
      "case": "A 20-year-old who was doing well at college became acutely psychotic within 2 weeks of first changing, appears perplexed, and has a reactive affect. She has been ill for 6 weeks and has not yet recovered.",
      parts: [
        { label: "Diagnosis", options: ["Schizophreniform disorder", "Schizophrenia", "Brief psychotic disorder", "Delusional disorder"], answer: 0 },
        { label: "Status", options: ["Provisional", "Confirmed (recovered within 6 months)"], answer: 0 },
        { label: "Prognostic specifier", options: ["With good prognostic features", "Without good prognostic features"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F20.81", "F20.9", "F23", "F29"], answer: 0 }
      ],
      line: "**F20.81** Schizophreniform disorder, provisional, with good prognostic features",
      why: "Ill 1–6 months and not yet recovered = **provisional**. Rapid onset (within 4 weeks), perplexity, good premorbid functioning and no flat affect give at least two **good prognostic features**."
    },
    {
      id: "w2-03", tag: "Brief psychotic",
      "case": "A 42-year-old man became psychotic the day after his house burned down and his business failed, and recovered fully 2 weeks later. No mood episode, substance or medical cause.",
      parts: [
        { label: "Diagnosis", options: ["Brief psychotic disorder", "Schizophreniform disorder", "Acute stress disorder", "Other specified psychotic disorder"], answer: 0 },
        { label: "Stressor specifier", options: ["With marked stressor(s)", "Without marked stressor(s)", "With peripartum onset"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F23", "F20.81", "F43.0", "F28"], answer: 0 }
      ],
      line: "**F23** Brief psychotic disorder, with marked stressor(s)",
      why: "At least 1 day but less than 1 month, with full recovery, after events that would be markedly stressful to almost anyone in his culture: **with marked stressor(s)** (brief reactive psychosis)."
    },
    {
      id: "w2-04", tag: "Delusional disorder",
      "case": "A 58-year-old man has been convinced for 18 months, without interruption, that his wife is having an affair. He checks her phone and follows her, but otherwise functions well. No hallucinations, mood episodes or substances.",
      parts: [
        { label: "Diagnosis", options: ["Delusional disorder", "Schizophrenia", "Paranoid personality disorder", "Obsessive-compulsive disorder"], answer: 0 },
        { label: "Type", options: ["Jealous type", "Persecutory type", "Erotomanic type", "Mixed type"], answer: 0 },
        { label: "Bizarre content?", options: ["Not bizarre (no specifier)", "With bizarre content"], answer: 0 },
        { label: "Course (after 1 year)", options: COURSE, answer: 5 },
        { label: "ICD-10-CM code", options: ["F22", "F20.9", "F60.0", "F28"], answer: 0 }
      ],
      line: "**F22** Delusional disorder, jealous type, continuous",
      why: "A spouse’s infidelity is the **jealous** type and is not implausible, so no bizarre-content specifier. Course specifiers can be used after 1 year; symptoms meeting criteria throughout = **continuous**."
    },
    {
      id: "w2-05", tag: "Schizoaffective",
      "case": "A 29-year-old has had two manic episodes with psychosis, plus 3 weeks of hallucinations and delusions without any mood episode; mood episodes have filled most of the 10-month illness.",
      parts: [
        { label: "Diagnosis", options: ["Schizoaffective disorder", "Bipolar I disorder", "Schizophrenia", "Delusional disorder"], answer: 0 },
        { label: "Type", options: ["Bipolar type", "Depressive type"], answer: 0 },
        { label: "Course (after 1 year)", options: COURSE, answer: 0 },
        { label: "ICD-10-CM code", options: ["F25.0", "F25.1", "F31.2", "F20.9"], answer: 0 }
      ],
      line: "**F25.0** Schizoaffective disorder, bipolar type",
      why: "A manic episode makes it the **bipolar type** (F25.0). At 10 months, course specifiers cannot be used yet."
    },
    {
      id: "w2-06", tag: "Schizoaffective with catatonia",
      "case": "A 35-year-old with schizoaffective disorder (only major depressive episodes, never mania) has catatonia throughout his current depressive episode: stupor, mutism, waxy flexibility.",
      parts: [
        { label: "Diagnosis", options: ["Schizoaffective disorder", "Major depressive disorder", "Schizophrenia", "Catatonic disorder due to another medical condition"], answer: 0 },
        { label: "Type", options: ["Bipolar type", "Depressive type"], answer: 1 },
        { label: "Other specifier", options: ["With catatonia", "None"], answer: 0 },
        { label: "ICD-10-CM codes", options: ["F25.1 plus F06.1", "F25.1 alone", "F25.0 plus F06.1", "R29.818 plus F06.1"], answer: 0 }
      ],
      line: "**F25.1** Schizoaffective disorder, depressive type, with catatonia; **F06.1** catatonia associated with schizoaffective disorder",
      why: "This is the manual’s own example: code the schizoaffective disorder first, then **F06.1** catatonia associated with it."
    },
    {
      id: "w2-07", tag: "Substance-induced",
      "case": "A 23-year-old with moderate cannabis use disorder develops persecutory delusions during heavy use. No independent psychotic disorder is evident.",
      parts: [
        { label: "Comorbid use disorder (named first)", options: ["None", "Mild cannabis use disorder", "Moderate cannabis use disorder", "Severe cannabis use disorder"], answer: 2 },
        { label: "Induced disorder", options: ["Cannabis-induced psychotic disorder", "Cannabis intoxication, with perceptual disturbances", "Schizophreniform disorder", "Brief psychotic disorder"], answer: 0 },
        { label: "Onset", options: ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F12.159", "F12.259", "F12.959", "F12.24"], answer: 1 }
      ],
      line: "**F12.259** moderate cannabis use disorder with cannabis-induced psychotic disorder, with onset during intoxication",
      why: "Psychotic disorder codes end in **.x59**. A moderate or severe use disorder makes the 4th character **2**. The use disorder is written first, then “with,” the induced disorder and the onset."
    },
    {
      id: "w2-08", tag: "Substance-induced",
      "case": "A 19-year-old with no substance use disorder takes phencyclidine once at a party and develops delusions and hallucinations during intoxication, needing admission.",
      parts: [
        { label: "Comorbid use disorder", options: ["None", "Mild phencyclidine use disorder", "Moderate phencyclidine use disorder"], answer: 0 },
        { label: "Onset", options: ["With onset during intoxication", "With onset during withdrawal"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F16.959", "F16.159", "F16.259", "F19.959"], answer: 0 }
      ],
      line: "**F16.959** phencyclidine-induced psychotic disorder, with onset during intoxication",
      why: "Without a use disorder (a one-time use), the 4th character is **9** and only the induced disorder is recorded. Phencyclidine shares the F16 class with other hallucinogens."
    },
    {
      id: "w2-09", tag: "Medical cause",
      "case": "A 64-year-old with metastatic lung cancer develops fixed persecutory delusions, the predominant symptom, attributed to brain metastases. No delirium.",
      parts: [
        { label: "Listed first", options: ["C34.90 malignant lung neoplasm", "The psychotic disorder"], answer: 0 },
        { label: "Diagnosis", options: ["Psychotic disorder due to malignant lung neoplasm", "Delusional disorder", "Brief psychotic disorder", "Delirium"], answer: 0 },
        { label: "Specifier (predominant symptom)", options: ["With delusions", "With hallucinations"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F06.2", "F06.0", "F22", "F06.1"], answer: 0 }
      ],
      line: "**C34.90** malignant lung neoplasm; **F06.2** psychotic disorder due to malignant lung neoplasm, with delusions",
      why: "The code depends on the **predominant** symptom: **F06.2 with delusions**, F06.0 with hallucinations. The medical condition is coded and listed immediately before. This is the manual’s own example."
    },
    {
      id: "w2-10", tag: "Unspecified catatonia",
      "case": "An unidentified man in the emergency department is mute, posturing and staring. No history is available and the workup is pending.",
      parts: [
        { label: "Diagnosis", options: ["Unspecified catatonia", "Catatonia associated with schizophrenia", "Catatonic disorder due to another medical condition", "Unspecified psychotic disorder"], answer: 0 },
        { label: "Codes, in order", options: ["R29.818 then F06.1", "F06.1 then R29.818", "F06.1 alone", "F29"], answer: 0 }
      ],
      line: "**R29.818** other symptoms involving nervous and musculoskeletal systems; **F06.1** unspecified catatonia",
      why: "Unspecified catatonia is coded with **R29.818 first, then F06.1**."
    }
  ]);

  SP.add("ch02", "counting", [
    {
      id: "k2-01", tag: "Schizophrenia Criterion A",
      "case": "Over the past month, a 23-year-old has shown the following.",
      ask: "Criterion A needs two or more of five symptoms, each for a significant portion of a month, and at least one must be delusions, hallucinations or disorganized speech. Mark which findings count.",
      items: [
        ["Flat facial expression and monotone speech", true, "Diminished emotional expression: a negative symptom (A5)."],
        ["Stopped attending classes and sits at home doing nothing", true, "Avolition: also A5. Two negative symptoms still count as one Criterion A item."],
        ["Grossly disorganized behavior: wears a winter coat in summer, eats from the trash", true, "Grossly disorganized behavior (A4)."],
        ["Believes, with some doubt, that a song on the radio was about him", false, "An idea of reference held **without delusional conviction** is attenuated, not a delusion."],
        ["Speaks in tongues at his church, as the congregation does", false, "Culturally sanctioned experiences are not counted."]
      ],
      met: false,
      why: "He has negative symptoms (A5) and disorganized behavior (A4): two items, but **none of A1–A3**. Criterion A is not met. Look carefully for delusions, hallucinations or disorganized speech."
    },
    {
      id: "k2-02", tag: "Catatonia",
      "case": "A patient on the medical ward shows the following.",
      ask: "Catatonia needs three of 12 features. Mark the findings that count.",
      items: [
        ["Arm stays raised where the examiner placed it", true, "Catalepsy."],
        ["No verbal response, in a man with known Broca’s aphasia", false, "Mutism does **not** count when an established aphasia explains it."],
        ["Pacing and shouting whenever the TV news is on", false, "Agitation must be **not influenced by external stimuli**."],
        ["Repeats the examiner’s words back", true, "Echolalia."],
        ["Rocks back and forth for hours, without purpose", true, "Stereotypy."],
        ["Slight, even resistance when the examiner bends his elbow", true, "Waxy flexibility."]
      ],
      need: 3, met: true,
      why: "Four features count (catalepsy, echolalia, stereotypy, waxy flexibility). Catatonia is present; now look for the associated mental disorder or medical cause, and exclude NMS."
    },
    {
      id: "k2-03", tag: "Good prognostic features",
      "case": "A 21-year-old with schizophreniform disorder:",
      ask: "With good prognostic features needs two of four specific features. Mark which findings count.",
      items: [
        ["Psychotic symptoms appeared within 3 weeks of the first change in behavior", true, "Onset of prominent psychosis within 4 weeks of the first noticeable change."],
        ["Is female", false, "Sex is not one of the four features."],
        ["Was a struggling, isolated student before the illness", false, "Good premorbid functioning is the feature; this is the opposite."],
        ["Has a flat affect", false, "**Absence** of blunted or flat affect is the feature."],
        ["Appears bewildered and perplexed", true, "Confusion or perplexity."]
      ],
      need: 2, met: true,
      why: "Two features (rapid onset and perplexity) are enough for **with good prognostic features**."
    },
    {
      id: "k2-04", tag: "Brief psychotic Criterion A",
      "case": "For 9 days after a major loss, a 30-year-old woman:",
      ask: "Brief psychotic disorder needs one of four symptoms, and at least one must be delusions, hallucinations or disorganized speech. Mark the findings that count.",
      items: [
        ["Believes her neighbors poisoned her food", true, "A delusion (1)."],
        ["Has lost interest in everything and barely speaks", false, "Negative symptoms are **not** part of brief psychotic disorder’s Criterion A."],
        ["Behaves in a grossly disorganized way", true, "Grossly disorganized behavior (4) counts, though it cannot be the only symptom."],
        ["Prays aloud and hears God’s reply, as her religious community does", false, "Culturally sanctioned responses are not counted."]
      ],
      need: 1, met: true,
      why: "A delusion satisfies Criterion A. Negative symptoms are not on the brief psychotic disorder list."
    },
    {
      id: "k2-05", tag: "Schizoaffective requirements",
      "case": "A 33-year-old has been ill for 2 years.",
      ask: "Mark the findings that satisfy a schizoaffective disorder requirement.",
      items: [
        ["A major depressive episode concurrent with hallucinations and delusions", true, "Criterion A: a major mood episode concurrent with schizophrenia Criterion A."],
        ["The depressive episode includes depressed mood, not only loss of interest", true, "The MDE must include **depressed mood** (A1); anhedonia alone overlaps with negative symptoms."],
        ["Three weeks of hallucinations with no mood episode", true, "Criterion B: ≥2 weeks of psychosis without a major mood episode."],
        ["Mood episodes present for about a quarter of the illness", false, "Criterion C needs mood episodes for the **majority** of the illness."]
      ],
      met: false,
      why: "Criteria A and B are met, but mood episodes fill only a minority of the illness: this is **schizophrenia**, not schizoaffective disorder."
    },
    {
      id: "k2-06", tag: "Delusional disorder requirements",
      "case": "A 60-year-old is evaluated for delusional disorder.",
      ask: "Mark the findings that are consistent with delusional disorder.",
      items: [
        ["Has believed for 4 months that bugs infest her skin", true, "A delusion lasting at least 1 month."],
        ["Feels insects crawling under the skin", true, "Hallucinations, if present, are not prominent and related to the delusional theme: allowed."],
        ["Manages her finances and social life normally", true, "Functioning apart from the delusion is not markedly impaired."],
        ["Hears two voices discussing her throughout the day", false, "Prominent auditory hallucinations unrelated to the theme point toward schizophrenia’s Criterion A."]
      ],
      met: false,
      why: "The prominent, unrelated voices plus the delusion meet schizophrenia Criterion A, which excludes delusional disorder (Criterion B). Reassess for a schizophrenia spectrum diagnosis."
    },
    {
      id: "k2-07", tag: "Primary negative symptoms",
      "case": "A 28-year-old with schizophrenia shows the following.",
      ask: "Which findings are best counted as **primary** negative symptoms of the illness, rather than secondary to something else?",
      items: [
        ["Has done almost nothing all day for a year, despite no depression or side effects", true, "Avolition: primary."],
        ["Speaks very little, giving one-word answers, since his first episode", true, "Alogia: primary."],
        ["Avoids people because he believes they are spying on him", false, "Social withdrawal driven by a **persecutory delusion** is secondary."],
        ["Mask-like face and bradykinesia since his antipsychotic dose was doubled", false, "Secondary to **medication-induced parkinsonism**."],
        ["Lost interest in everything during a recent major depressive episode", false, "Secondary to **depression**."]
      ],
      met: true,
      why: "Two findings count as primary negative symptoms. Always rule out secondary causes (positive symptoms, depression, medication, lack of stimulation) before attributing symptoms to the illness."
    },
    {
      id: "k2-08", tag: "Medical cause clues",
      "case": "A 59-year-old woman develops psychosis for the first time.",
      ask: "Mark the findings that point toward a medical cause.",
      items: [
        ["Onset after age 55, with no prior psychiatric history", true, "An atypical age at onset (typicality)."],
        ["Prominent visual and olfactory hallucinations", true, "Visual or olfactory hallucinations are atypical for primary psychosis."],
        ["Began within days of a new seizure", true, "A close **time link** (temporality) is the strongest evidence."],
        ["Her father had schizophrenia", false, "Family history favors a primary psychotic disorder."],
        ["Her attention and orientation are intact", false, "Intact attention argues against delirium, but does not argue for or against a medical cause in general."]
      ],
      met: true,
      why: "Late onset, atypical hallucination modalities and a time link to a neurological event all call for a thorough medical and neurological workup."
    },
    {
      id: "k2-09", tag: "Substance vs independent",
      "case": "A 25-year-old with stimulant use has psychosis.",
      ask: "Mark the findings that suggest an **independent** psychotic disorder rather than a substance-induced one.",
      items: [
        ["Psychotic symptoms began a year before any drug use", true, "Symptoms that **preceded** use."],
        ["Symptoms persist 6 weeks into supervised abstinence", true, "Persistence for a substantial period (about **1 month**) after intoxication or withdrawal ends."],
        ["Two past psychotic episodes during periods without any use", true, "A history of non-substance-related episodes."],
        ["Symptoms appear only during binges and clear within days", false, "That pattern favors a **substance-induced** disorder."],
        ["He recognizes that the voices come from the drug", false, "Insight points to intoxication with perceptual disturbances, not an independent psychosis."]
      ],
      met: true,
      why: "Three findings point to an independent disorder. When present, diagnose the primary psychotic disorder, plus the substance use disorder."
    },
    {
      id: "k2-10", tag: "Six-month rule",
      "case": "A 24-year-old is assessed for schizophrenia.",
      ask: "Mark the periods that count toward the 6 months of continuous signs (Criterion C).",
      items: [
        ["4 months of withdrawal, odd beliefs and declining self-care before psychosis", true, "The **prodromal** phase counts, with negative or attenuated symptoms."],
        ["5 weeks of hallucinations and delusions", true, "The **active phase** counts (at least 1 month needed)."],
        ["1 month of residual flat affect and avolition after treatment", true, "The **residual** phase counts."],
        ["2 years earlier, a 3-week depressive episode with full recovery", false, "Not part of the continuous disturbance."]
      ],
      met: true,
      why: "Prodrome (4 months) + active phase (over 1 month) + residual phase (1 month) is more than 6 months of continuous signs: Criterion C is met."
    }
  ]);
})();
