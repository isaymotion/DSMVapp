/* Chapter 2 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var PSYCHOSIS_ASK = [
    ["Hallucinations", "“Do you ever hear voices or sounds when no one is around? What do they say? Do you see things others don’t?”", "Ask about commands to harm self or others."],
    ["Delusions", "“Do you feel anyone is watching, following or trying to harm you? Do you have special powers or a special mission? Does the TV or radio send you messages?”", "Gauge conviction: “Could there be another explanation?”"],
    ["Disorganization", "Assessed mainly by observing speech and behavior: derailment, tangentiality, incoherence, odd or purposeless behavior.", ""],
    ["Negative symptoms", "“How do you spend your day? What do you enjoy? Do you see friends?”", "Ask family; rule out depression, medication effects and isolation."],
    ["Mood episodes", "“Have there been times you felt very low for weeks, or so high or energetic you barely slept?”", "Mood episodes decide between schizophrenia, schizoaffective disorder and mood disorders with psychosis."],
    ["Substances and medical causes", "“What do you drink, smoke or take, including medicines and supplements? Any seizures, head injuries or recent illness?”"]
  ];
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "schizophrenia",
      ask: PSYCHOSIS_ASK.concat([
        ["Duration and prodrome", "To family: “When did you first notice a change, even before the voices or beliefs? How has school, work and self-care been since then?”", "The 6 months include prodromal and residual periods."],
        ["Insight", "“Do you think these experiences could be part of an illness?”", "Anosognosia is common and the strongest predictor of nonadherence."]
      ]),
      tx: {
        asOf: "October 2026",
        first: "An antipsychotic, usually second-generation, chosen by side-effect profile, together with psychosocial treatment: coordinated specialty care for a first episode, family psychoeducation, CBT for psychosis, supported employment and social-skills training.",
        points: [
          "Use the lowest effective dose; judge response after an adequate trial, usually 4–6 weeks.",
          "**Treatment-resistant** schizophrenia (failure of two adequate antipsychotic trials): [[stahl:drugs/clozapine|clozapine]], also approved to reduce recurrent suicidal behavior. The FDA ended the clozapine REMS program in 2025; follow the labeling for neutrophil monitoring.",
          "**Long-acting injectables** help when adherence is a problem; options include risperidone, paliperidone, aripiprazole and olanzapine, among them a once-monthly subcutaneous olanzapine approved in October 2026.",
          "[[stahl:drugs/xanomeline|Xanomeline-trospium]] (2024) treats schizophrenia through muscarinic receptors rather than D2 blockade.",
          "Monitor weight, glucose, lipids, prolactin and movement; treat tardive dyskinesia with a VMAT2 inhibitor ([[stahl:drugs/valbenazine|valbenazine]], [[stahl:drugs/deutetrabenazine|deutetrabenazine]]).",
          "Negative and cognitive symptoms respond poorly to current drugs; rule out secondary causes first."
        ],
        stahl: [["Schizophrenia", "c/ch04/guide/s4-scz"], ["Five symptom dimensions", "c/ch04/guide/s4-five"], ["D2 antagonists", "c/ch05/guide/s5-fga"], ["The pines (clozapine)", "c/ch05/guide/s5-pines"], ["Partial agonists", "c/ch05/guide/s5-pa"], ["New mechanisms", "c/ch05/guide/s5-future"], ["Metabolic effects", "c/ch05/guide/s5-metabolic"], ["Tardive dyskinesia", "c/ch05/guide/s5-td"]]
      }
    },
    {
      id: "schizophreniform-disorder",
      ask: PSYCHOSIS_ASK.concat([["Onset and course", "To family: “How quickly did this come on? How was she doing before?”", "Rapid onset, perplexity, good premorbid functioning and reactive affect are good prognostic features."]]),
      tx: {
        asOf: "October 2026",
        first: "Treat as a first episode of psychosis: an antipsychotic plus psychosocial support, ideally in a coordinated specialty care program.",
        points: ["Follow up closely: about a third recover within 6 months, and most of the remaining two-thirds go on to a diagnosis of schizophrenia or schizoaffective disorder.", "Re-evaluate for mood, substance and medical causes as the course unfolds."],
        stahl: [["Schizophrenia", "c/ch04/guide/s4-scz"], ["D2 antagonists", "c/ch05/guide/s5-fga"]]
      }
    },
    {
      id: "brief-psychotic-disorder",
      ask: PSYCHOSIS_ASK.slice(0, 2).concat([
        ["Stressor", "“What was happening in the days or weeks before this started?”", "Marked stressors are judged against the person’s culture."],
        ["Postpartum", "“Are you pregnant, or have you given birth in the last month?”", "Peripartum onset; postpartum psychosis is often bipolar."],
        ["Recovery", "On follow-up: “Are you back to your usual self?”", "Full recovery within 1 month is required."]
      ]),
      tx: {
        asOf: "October 2026",
        first: "Ensure safety; a short course of an antipsychotic, with a benzodiazepine for agitation if needed, and support around any stressor.",
        points: ["Follow up after recovery: more than half of people with brief psychotic disorder relapse.", "Postpartum psychosis is an emergency: admit and screen for bipolar disorder."],
        stahl: [["D2 antagonists", "c/ch05/guide/s5-fga"]]
      }
    },
    {
      id: "delusional-disorder",
      ask: [
        ["The belief", "“Tell me about what has been worrying you. How sure are you? What would change your mind?”", "Listen without arguing; conviction is the finding."],
        ["Theme", "Persecution, jealousy, love from a higher-status person, grandiosity, bodily concerns?", "The theme gives the type."],
        ["Hallucinations", "“Do you ever hear or feel things others don’t?”", "Allowed only if not prominent and related to the theme."],
        ["Functioning", "“Apart from this, how are work and family?”", "Functioning outside the delusion is preserved."],
        ["Danger", "“Have you thought about confronting or harming the person involved?”", "Jealous and erotomanic types can lead to violence or stalking."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Build a therapeutic alliance without confronting the belief; offer an antipsychotic, framed around distress, sleep or anxiety.",
        points: ["CBT can reduce conviction and distress.", "Somatic type (for example delusional parasitosis) often responds to antipsychotics; coordinate with dermatology or primary care.", "Assess and manage risk in jealous and erotomanic types."],
        stahl: [["D2 antagonists", "c/ch05/guide/s5-fga"]]
      }
    },
    {
      id: "schizoaffective-disorder",
      ask: PSYCHOSIS_ASK.concat([["Timeline", "Build a lifetime timeline: when were mood episodes present, and was there psychosis for 2 weeks or more with normal mood?", "Mood episodes must cover the majority of the illness."]]),
      tx: {
        asOf: "October 2026",
        first: "An antipsychotic (paliperidone is FDA-approved for schizoaffective disorder), plus a mood stabilizer for the bipolar type or an antidepressant for the depressive type when needed.",
        points: ["Clozapine reduces recurrent suicidal behavior in schizoaffective disorder.", "Combine with psychosocial treatment as for schizophrenia."],
        stahl: [["Mania and depression", "c/ch05/guide/s5-mania-dep"], ["The dones", "c/ch05/guide/s5-dones"], ["Lithium", "c/ch07/guide/s7-lithium"]]
      }
    },
    {
      id: "substance-induced-psychotic",
      ask: [
        ["Timeline", "“When did the voices or beliefs start, compared with your drug or alcohol use? Did they ever happen when you weren’t using?”"],
        ["Insight", "“Do you think the voices could be from the drug?”", "Intact reality testing means intoxication or withdrawal with perceptual disturbances instead."],
        ["Medications", "“Any new medicines, like steroids, stimulants or Parkinson’s drugs?”"],
        ["Persistence", "After abstinence: “Have the experiences stopped?”", "Persistence about 1 month after use ends suggests an independent disorder."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Stop the substance or medication, keep the person safe, and use a short course of an antipsychotic or benzodiazepine for agitation if needed.",
        points: ["Treat the substance use disorder.", "Follow up: in a 20-year Danish registry, about a third of substance-induced psychoses were later diagnosed as a schizophrenia spectrum or bipolar disorder, 44% for cannabis."],
        stahl: [["Addiction", "c/ch13/guide"]]
      }
    },
    {
      id: "psychotic-due-to-amc",
      ask: [
        ["Onset and age", "“When did this start? Any new health problems around then?”", "Late or abrupt onset suggests a medical cause."],
        ["Neurological symptoms", "“Any seizures, headaches, weakness, memory problems or changes in vision or smell?”"],
        ["Hallucination type", "“Are the experiences things you hear, see, smell or feel?”", "Visual, olfactory and tactile hallucinations are more typical of medical causes."],
        ["Workup", "Physical and neurological examination, labs, and imaging or EEG guided by the history."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat the underlying medical condition; use a low-dose antipsychotic for distress or danger.",
        points: ["Parkinson’s disease psychosis: [[stahl:drugs/pimavanserin|pimavanserin]] is FDA-approved; low-dose quetiapine or clozapine are alternatives; avoid D2 antagonists that worsen parkinsonism.", "Dementia with Lewy bodies is highly sensitive to antipsychotics."],
        stahl: [["Parkinson’s disease psychosis", "c/ch04/guide/s4-pdp"], ["Dementia-related psychosis", "c/ch04/guide/s4-drp"]]
      }
    },
    {
      id: "catatonia-associated",
      ask: [
        ["Observation", "Examine for the 12 features: stupor, catalepsy, waxy flexibility, mutism, negativism, posturing, mannerism, stereotypy, agitation, grimacing, echolalia, echopraxia.", "A standardized scale such as the Bush-Francis helps."],
        ["Underlying disorder", "To family: “Has there been depression, mania or psychosis recently?”", "Most catatonia occurs with mood disorders."],
        ["Medications", "“Is he taking antipsychotics or any new medicines? Any fever or sweating?”", "Exclude neuroleptic malignant syndrome."]
      ],
      tx: {
        asOf: "October 2026",
        first: "A lorazepam challenge and scheduled lorazepam; ECT if benzodiazepines fail or the catatonia is malignant.",
        points: ["Hold antipsychotics until NMS is excluded.", "Treat the underlying disorder and support nutrition, hydration and clot prevention."],
        stahl: []
      }
    },
    {
      id: "catatonic-due-to-amc",
      ask: [["Medical history", "“Any recent infection, seizure, head injury, liver or kidney disease?”", "Neurological and metabolic causes are common."], ["Delirium screen", "Check attention and awareness.", "Not diagnosed if it occurs only during delirium."]],
      tx: { asOf: "October 2026", first: "Treat the medical cause; benzodiazepines often help the catatonic features.", points: ["Monitor for complications of immobility."], stahl: [] }
    },
    {
      id: "schizotypal-pd",
      ask: [
        ["Unusual experiences", "“Do you ever feel you can sense things before they happen, or that events have special meaning for you?”", "Held with less than delusional conviction."],
        ["Relationships", "“Do you have close friends? How comfortable are you in social situations?”", "Social anxiety does not lessen with familiarity."],
        ["Course", "“Have you always been this way, since adolescence?”", "A long-standing pattern, unlike a prodrome."]
      ],
      tx: { asOf: "October 2026", first: "Supportive psychotherapy and social-skills work; low-dose antipsychotics for transient psychotic-like symptoms.", points: ["Follow up for emerging psychosis."], stahl: [] }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "psychosis", title: "Hearing voices or unusual beliefs",
      items: [
        { ch: "ch02", dx: "brief-psychotic-disorder", when: "At least 1 day but less than 1 month, with full recovery." },
        { ch: "ch02", dx: "schizophreniform-disorder", when: "1 to 6 months, including prodrome and residual phases." },
        { ch: "ch02", dx: "delusional-disorder", when: "Delusions for ≥1 month, functioning otherwise intact, no prominent hallucinations." },
        { ch: "ch02", dx: "psychotic-due-to-amc", when: "Late or abrupt onset, atypical hallucinations, neurological signs." }
      ]
    },
    {
      id: "odd", title: "Odd beliefs or eccentric behavior",
      intro: "Eccentricity runs from personality style to the prodrome of schizophrenia. The key questions are how long it has been present, how firmly beliefs are held, and whether functioning is declining.",
      ask: ["Has this been lifelong, or is it a change from before?", "How firmly are the beliefs held: could there be another explanation?", "Is school, work or self-care declining?", "Any voices or other perceptual experiences?"],
      mustNotMiss: ["**Emerging psychosis**: a recent decline with odd beliefs may be a prodrome.", "**Neurological and developmental conditions**, such as autism spectrum disorder."],
      helpers: ["psychosis"],
      items: [
        { ch: "ch02", dx: "schizotypal-pd", when: "Lifelong odd beliefs, perceptual distortions and social anxiety, held with less than delusional conviction." },
        { ch: "ch02", dx: "schizophrenia", when: "A recent decline: odd beliefs and withdrawal as the **prodrome**." },
        { ch: "ch02", dx: "delusional-disorder", when: "One fixed belief held with full conviction, otherwise ordinary behavior." },
        { ch: "ch02", dx: "other-specified-psychotic", when: "Attenuated psychosis syndrome: psychotic-like symptoms with insight, less severe and transient." },
        { ch: "ch01", dx: "asd", when: "Lifelong social communication differences and restricted interests, not a decline." }
      ]
    },
    {
      id: "catatonic", title: "Not moving or not speaking",
      intro: "Mutism, immobility and odd postures suggest catatonia, which is treatable and can be life-threatening. Look for the cause while treating.",
      ask: ["Which of the 12 catatonic features are present?", "Any recent mood or psychotic symptoms?", "Is the person on antipsychotics? Fever, rigidity, sweating?", "Any medical illness, seizures or substances?"],
      mustNotMiss: ["**Neuroleptic malignant syndrome**: fever, rigidity, autonomic instability, raised creatine kinase.", "**Malignant catatonia**.", "**Delirium**, nonconvulsive status epilepticus, encephalitis."],
      helpers: ["catatonia"],
      items: [
        { ch: "ch02", dx: "catatonia-associated", when: "With a mood, psychotic or other mental disorder; most often depression or bipolar disorder." },
        { ch: "ch02", dx: "catatonic-due-to-amc", when: "Caused by a medical condition, such as encephalitis or hepatic encephalopathy." },
        { ch: "ch02", dx: "unspecified-catatonia", when: "Cause unclear or information insufficient (e.g., in the emergency department)." },
        { ch: "ch04", dx: "mdd", when: "Severe depression with stupor and mutism: **with catatonia**." },
        { ch: "ch21", dx: "nms", when: "After a dopamine blocker, with fever and autonomic instability." }
      ]
    },
    {
      id: "older-psychosis", title: "New psychosis in an older adult",
      intro: "First-onset psychosis late in life has a medical, neurological or medication cause far more often than in young adults.",
      ask: ["Any cognitive decline before the psychosis?", "Fluctuating attention or alertness?", "New medicines (steroids, dopaminergic drugs, anticholinergics)?", "Vision or hearing loss?", "Visual hallucinations, parkinsonism or falls?"],
      mustNotMiss: ["**Delirium**.", "**Stroke, tumor or seizures**.", "**Medication toxicity**."],
      items: [
        { ch: "ch17", dx: "delirium", when: "Acute, fluctuating attention and awareness." },
        { ch: "ch02", dx: "psychotic-due-to-amc", when: "A medical condition with a plausible mechanism and time link." },
        { ch: "ch02", dx: "substance-induced-psychotic", when: "Onset after a medication change." },
        { ch: "ch17", dx: "ncd-lewy", when: "Psychosis in Alzheimer’s disease or Lewy body disease (visual hallucinations, parkinsonism, fluctuations)." },
        { ch: "ch02", dx: "delusional-disorder", when: "Late-onset fixed delusions with intact cognition, often with hearing loss." },
        { ch: "ch04", dx: "mdd", when: "Psychotic depression with nihilistic or guilt delusions." }
      ]
    },
    {
      id: "after-substance", title: "Mood change after a new medicine or drug",
      items: [
        { ch: "ch02", dx: "substance-induced-psychotic", when: "Delusions or hallucinations from a substance, without insight." }
      ]
    }
  ]);
})();
