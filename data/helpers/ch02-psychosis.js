/*
 * Diagnostic helpers for Chapter 2 (Schizophrenia Spectrum and Other Psychotic Disorders).
 * Each helper is a small decision tree: options point to another node id or to "r:<resultId>".
 * Every option has a `note` that becomes one line of the reasoning trail. Results link to the
 * study-guide section (`link`) and to the disorder library (`dxId`). Built from DSM-5-TR pp. 101–138.
 * Add one file per chapter in data/helpers/ and list it in SP.extraFiles (data/chapters.js).
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "psychosis",
    chapter: "ch02",
    title: "Which psychotic disorder?",
    summary: "Work through cause, mood, symptom domains and time, in the order the DSM-5-TR reasons, to reach the most likely schizophrenia spectrum or other psychotic disorder, with the reasoning shown.",
    caution: "A teaching aid built from DSM-5-TR Chapter 2, not a substitute for a full evaluation. The diagnosis always rests on the complete history, collateral information, mental status examination and medical workup.",
    start: "real",
    nodes: {
      real: {
        q: "Is this psychosis, or an experience that falls within normal or cultural limits?",
        help: "Hypnagogic and hypnopompic experiences are normal. Glossolalia, possession trance, hearing God’s voice in some religious contexts, and bereaved relatives sensing the deceased are not psychosis on their own. Realistic fears after torture, political violence or discrimination are not persecutory delusions.",
        options: [
          { label: "Clearly psychotic: fixed false beliefs, true hallucinations, disorganization or catatonia", to: "delirium", note: "There is genuine psychosis, beyond cultural, religious or normal sleep-related experience." },
          { label: "Culturally sanctioned, sleep-related or a realistic trauma-related fear", to: "r:notpsychosis", note: "The experience is explained by culture, religion, sleep transitions or realistic fear." },
          { label: "Only odd beliefs, ideas of reference or perceptual distortions, lifelong, never frankly psychotic", to: "r:schizotypal", note: "Subthreshold, trait-like oddness since early adulthood without frank psychosis." }
        ]
      },
      delirium: {
        q: "Is consciousness or attention fluctuating, as in a delirium?",
        help: "Psychotic symptoms that occur only during a delirium are part of the delirium and are not diagnosed separately (pp. 126, 131, 133).",
        options: [
          { label: "Yes: the symptoms occur only during a delirium", to: "r:delirium", note: "Psychosis is confined to a delirium." },
          { label: "No: clear sensorium", to: "substance", note: "Sensorium is clear; delirium does not explain the psychosis." }
        ]
      },
      substance: {
        q: "Did the symptoms begin during or soon after intoxication or withdrawal, or exposure to a medication or toxin that can cause psychosis?",
        help: "Cocaine can cause psychosis within minutes; alcohol or sedatives may take days to weeks of heavy use. Corticosteroids, anticholinergics, antiparkinsonian drugs and many others are implicated. A new delusion in a man older than 35 with no psychotic history should raise this possibility.",
        options: [
          { label: "Yes, and the timing fits", to: "insight", note: "Onset is tied in time to a substance, medication or toxin able to cause psychosis." },
          { label: "No substance link, or psychosis clearly preceded use or occurred during sustained abstinence", to: "medical", note: "No plausible substance or medication explanation." }
        ]
      },
      insight: {
        q: "Does the person recognize the perceptions as drug effects, without believing or acting on them?",
        help: "With intact reality testing the diagnosis is intoxication or withdrawal with perceptual disturbances (alcohol withdrawal; cannabis intoxication; sedative, hypnotic or anxiolytic withdrawal; stimulant intoxication). Flashbacks long after hallucinogens are hallucinogen persisting perception disorder.",
        options: [
          { label: "Yes: reality testing is intact", to: "r:perceptual", note: "Reality testing is intact: the person knows the perceptions are drug-induced." },
          { label: "No: they believe the delusions or hallucinations", to: "persist", note: "Reality testing is lost." }
        ]
      },
      persist: {
        q: "Have the symptoms persisted for a substantial period (about 1 month) after acute intoxication or withdrawal ended, or are there prior independent episodes?",
        help: "Persistence for a month or more after the substance, or a history of recurrent episodes unrelated to substances, points to an independent psychotic disorder (Criterion C). Some agents (amphetamine-type substances, PCP, cocaine) can still cause psychosis lasting weeks.",
        options: [
          { label: "No: the symptoms are settling as the substance clears", to: "sform", note: "Psychosis is resolving with removal of the substance." },
          { label: "Yes: persisting about a month or longer, or prior independent episodes", to: "medical", note: "Persistence or history suggests an independent psychotic disorder, so the workup continues." }
        ]
      },
      sform: {
        q: "Which symptoms are present?",
        help: "The induced diagnosis covers only delusions and hallucinations. Substance-induced disorganized speech, disorganized or catatonic behavior without delusions or hallucinations goes to other specified or unspecified.",
        options: [
          { label: "Delusions and/or hallucinations", to: "r:substance", note: "The substance-induced symptoms are delusions and/or hallucinations." },
          { label: "Only disorganized speech or behavior, or catatonic behavior", to: "r:other", note: "Substance-induced symptoms other than delusions or hallucinations." }
        ]
      },
      medical: {
        q: "Could another medical condition directly cause the psychosis?",
        help: "Weigh biological plausibility (e.g., temporal lobe epilepsy, lupus, anti-NMDA receptor encephalitis, thyroid or adrenal disease, B12 deficiency, tumor), temporality (onset and remission track the illness) and typicality (late onset, visual or olfactory hallucinations). About 60% of new-onset psychosis in older adults has a medical cause.",
        options: [
          { label: "Yes: a plausible condition with a matching time course", to: "r:medical", note: "A medical condition plausibly and temporally explains the psychosis." },
          { label: "No: the medical workup is reassuring", to: "mood", note: "Medical causes have been reasonably excluded." }
        ]
      },
      mood: {
        q: "Across the whole illness, how do major mood episodes relate to the psychosis?",
        help: "Review the lifetime course, using records and informants. Count only full major depressive (with depressed mood) or manic episodes.",
        options: [
          { label: "No major mood episodes, or episodes brief relative to the psychotic illness", to: "domains", note: "Mood episodes are absent or occupy only a minority of the illness." },
          { label: "Psychosis occurs only during mood episodes", to: "r:mooddx", note: "Delusions or hallucinations occur exclusively within major mood episodes." },
          { label: "Mood episodes present for the majority of the illness, and psychosis at some time for ≥2 weeks without a mood episode", to: "satype", note: "Mood episodes fill the majority of the illness (Criterion C), with ≥2 weeks of psychosis alone (Criterion B)." },
          { label: "Persistent delusions with mood episodes for a substantial portion, but not meeting the above", to: "r:delmood", note: "Delusions overlap substantially with mood episodes without meeting schizoaffective criteria." }
        ]
      },
      satype: {
        q: "Has there been a manic episode?",
        help: "Bipolar type if a manic episode is part of the presentation (depressive episodes may also occur); depressive type if only major depressive episodes. The depressive episode must include depressed mood, not just loss of interest.",
        options: [
          { label: "Yes", to: "r:sa-bipolar", note: "A manic episode has occurred." },
          { label: "No, only major depressive episodes with depressed mood", to: "r:sa-depressive", note: "Only major depressive episodes, including depressed mood." }
        ]
      },
      domains: {
        q: "Which best describes the symptoms?",
        help: "Criterion A for schizophrenia: two or more of delusions, hallucinations, disorganized speech, grossly disorganized or catatonic behavior, negative symptoms, with at least one of the first three.",
        options: [
          { label: "Delusions only; hallucinations absent or minor and on-theme; behavior not bizarre; function largely intact", to: "deldur", note: "Delusions without other Criterion A symptoms." },
          { label: "Two or more domains, including delusions, hallucinations or disorganized speech", to: "fulldur", note: "Criterion A for schizophrenia is met." },
          { label: "One positive symptom (delusions, hallucinations, disorganized speech or grossly disorganized/catatonic behavior), sudden onset", to: "briefdur", note: "One or more positive symptoms of acute onset, not meeting full Criterion A." },
          { label: "Persistent auditory hallucinations alone, attenuated symptoms with insight, or a delusion taken over from a partner", to: "r:other", note: "A recognized subthreshold presentation." },
          { label: "Two or more symptoms but none is delusions, hallucinations or disorganized speech (e.g., negative symptoms + catatonia)", to: "r:notA", note: "Criterion A is not met: none of the required first three symptoms." }
        ]
      },
      deldur: {
        q: "Has Criterion A for schizophrenia ever been met, and how long have the delusions lasted?",
        help: "Delusional disorder needs ≥1 month of delusions and must never have met schizophrenia Criterion A. Catatonia with delusions meets Criterion A. Rule out OCD or body dysmorphic disorder with absent insight, and simple persecutory delusions of dementia.",
        options: [
          { label: "Never met Criterion A; delusions ≥1 month", to: "deltype", note: "Delusions for ≥1 month, and schizophrenia Criterion A has never been met." },
          { label: "Delusions <1 month with full recovery", to: "stressor", note: "Delusions lasted ≥1 day and <1 month, with full recovery." },
          { label: "The belief is an OCD or body dysmorphic concern held with full conviction", to: "r:ocd", note: "The fixed belief is an obsessional or appearance-related concern." },
          { label: "Simple persecutory delusions in a person with major neurocognitive disorder", to: "r:ncd", note: "Persecutory delusions arise within dementia." }
        ]
      },
      deltype: {
        q: "What is the central theme?",
        help: "Persecutory is the most common type. Bizarre content can be added as a specifier.",
        options: [
          { label: "Being conspired against, spied on, poisoned, harassed", to: "r:del-persecutory", note: "Persecutory theme." },
          { label: "A partner’s infidelity", to: "r:del-jealous", note: "Jealous theme." },
          { label: "Someone (often of higher status) is in love with them", to: "r:del-erotomanic", note: "Erotomanic theme." },
          { label: "Great talent, discovery or special identity", to: "r:del-grandiose", note: "Grandiose theme." },
          { label: "Bodily function or sensation (odor, infestation, parasite)", to: "r:del-somatic", note: "Somatic theme." },
          { label: "No single theme, or another theme (e.g., referential)", to: "r:del-other", note: "Mixed or unspecified theme." }
        ]
      },
      fulldur: {
        q: "How long has the illness lasted, counting prodromal, active and residual phases?",
        help: "Criterion A symptoms must be present for a significant part of 1 month (less if successfully treated). Schizophrenia also needs ≥6 months of continuous signs and functional decline.",
        options: [
          { label: "6 months or longer, with marked decline in work, relationships or self-care", to: "asd", note: "≥6 months of continuous signs with functional decline." },
          { label: "At least 1 month but less than 6 months", to: "sfrecov", note: "Total duration ≥1 and <6 months." },
          { label: "Less than 1 month", to: "stressor", note: "Total duration <1 month." },
          { label: "6 months or longer but without functional decline", to: "r:other", note: "Duration met, but no functional decline (Criterion B not met)." }
        ]
      },
      asd: {
        q: "Is there a history of autism spectrum disorder or a childhood-onset communication disorder?",
        help: "Criterion F: with such a history, schizophrenia is added only if prominent delusions or hallucinations have been present for ≥1 month.",
        options: [
          { label: "No", to: "r:scz", note: "No autism or communication disorder history." },
          { label: "Yes, and prominent delusions or hallucinations for ≥1 month", to: "r:scz-asd", note: "Autism history, with ≥1 month of prominent delusions or hallucinations (Criterion F met)." },
          { label: "Yes, but no prominent delusions or hallucinations for ≥1 month", to: "r:asd", note: "Disorganization and negative-like features are better explained by the developmental disorder." }
        ]
      },
      sfrecov: {
        q: "Has the person recovered?",
        help: "Schizophreniform disorder is diagnosed after recovery, or as “provisional” while still ill. If the illness passes 6 months, the diagnosis changes to schizophrenia.",
        options: [
          { label: "Yes, recovered within 6 months", to: "r:sform", note: "Recovered within 6 months." },
          { label: "Not yet: still ill, under 6 months", to: "r:sform-prov", note: "Still ill, total duration under 6 months." }
        ]
      },
      briefdur: {
        q: "How long did the episode last, and was there a full return to baseline?",
        help: "Brief psychotic disorder: ≥1 day and <1 month with eventual full recovery. Under a day does not qualify. Transient stress-related symptoms in personality disorders usually need no extra diagnosis.",
        options: [
          { label: "≥1 day and <1 month, then full recovery", to: "stressor", note: "Episode lasted ≥1 day, <1 month, with full recovery." },
          { label: "Less than 1 day", to: "r:toobrief", note: "Under 1 day." },
          { label: "1 month or longer", to: "r:other", note: "A single positive domain persisting ≥1 month without meeting another disorder." }
        ]
      },
      stressor: {
        q: "Did it follow events that would be markedly stressful to almost anyone in similar circumstances in the person’s culture, or begin in pregnancy or within 4 weeks postpartum?",
        help: "Brief psychotic disorder specifiers: with marked stressor(s) (brief reactive psychosis), without marked stressor(s), with peripartum onset.",
        options: [
          { label: "Yes: a marked stressor", to: "r:brief-stressor", note: "Onset followed a markedly stressful event." },
          { label: "Onset in pregnancy or within 4 weeks postpartum", to: "r:brief-peripartum", note: "Peripartum onset." },
          { label: "No marked stressor", to: "r:brief", note: "No marked stressor." }
        ]
      }
    },
    results: {
      notpsychosis: { label: "Conclusion", dx: "Not a psychotic disorder", line: "Culturally sanctioned, sleep-related or realistic trauma-related experiences are not diagnosed as psychosis.", points: ["Use the **Cultural Formulation Interview** and culturally adapted tools.", "When working through an interpreter, do not mistake **unfamiliar metaphors** for delusions.", "Reassess if the experience goes beyond what the person’s group accepts, persists, or comes with clearly psychotic symptoms."], link: { ch: "ch02", sec: "s2-delusions", label: "Delusions and culture" } },
      schizotypal: { dx: "Consider schizotypal personality disorder", line: "Five or more of nine schizotypal features from early adulthood, without frank psychosis.", points: ["Ideas of reference, magical thinking and perceptual distortions stay **below** the psychotic threshold.", "If schizophrenia develops later, record schizotypal PD with **“(premorbid)”**.", "Distinguish from paranoid and schizoid PD (no perceptual distortions), avoidant PD (wants relationships) and autism spectrum disorder."], link: { ch: "ch02", sec: "s2-schizotypal", label: "Schizotypal personality disorder" }, dxId: "schizotypal-pd" },
      delirium: { label: "Conclusion", dx: "Psychosis as part of a delirium", line: "No separate psychotic disorder diagnosis is made when psychosis occurs only during a delirium.", points: ["Treat the cause of the delirium.", "Severe alcohol withdrawal is a classic example.", "If psychosis persists after the delirium clears, start the assessment again."], link: { ch: "ch02", sec: "s2-substance", label: "Substance-induced psychosis: differential" } },
      perceptual: { dx: "Substance intoxication or withdrawal, with perceptual disturbances", line: "Altered perceptions with intact reality testing are not a psychotic disorder.", points: ["The specifier applies to **alcohol withdrawal**, **cannabis intoxication**, **sedative, hypnotic or anxiolytic withdrawal** and **stimulant intoxication**.", "“Flashbacks” long after hallucinogens are **hallucinogen persisting perception disorder**."], link: { ch: "ch02", sec: "s2-substance", label: "Reality testing decides" } },
      substance: { dx: "Substance/medication-induced psychotic disorder", line: "Delusions or hallucinations judged to be a direct effect of a substance, medication or toxin.", points: ["Code by substance and by use disorder (4th character **1** mild, **2** moderate or severe, **9** none); no separate use disorder diagnosis.", "Specify onset **during intoxication**, **during withdrawal** or **after medication use**.", "About **one-third** later receive a schizophrenia spectrum or bipolar diagnosis (**44%** after cannabis): follow up.", "If symptoms persist about a month after the substance is gone, reconsider an independent disorder."], link: { ch: "ch02", sec: "s2-substance", label: "Substance/medication-induced psychotic disorder" }, dxId: "substance-induced-psychotic" },
      medical: { dx: "Psychotic disorder due to another medical condition", line: "Prominent delusions (F06.2) or hallucinations (F06.0) caused directly by a medical condition.", points: ["Name the condition in the diagnosis and code the condition **first**.", "Not diagnosed if psychosis occurs only during delirium, or if reality testing is preserved.", "May be diagnosed **with** a neurocognitive disorder from the same disease (e.g., Lewy body disease).", "Treating the condition usually, but not always, resolves the psychosis."], link: { ch: "ch02", sec: "s2-medical", label: "Psychotic disorder due to another medical condition" }, dxId: "psychotic-due-to-amc" },
      mooddx: { dx: "Major depressive or bipolar disorder, with psychotic features", line: "Psychosis confined to mood episodes belongs to the mood disorder, not this chapter.", points: ["Schizoaffective disorder needs **≥2 weeks of psychosis without** a major mood episode.", "Underserved ethnic and racialized groups are at risk of being **misdiagnosed with schizophrenia** in this situation: assess mood fully."], link: { ch: "ch02", sec: "s2-scz-ddx", label: "Schizophrenia vs mood disorders" } },
      delmood: { dx: "Other specified schizophrenia spectrum and other psychotic disorder (delusions with significant overlapping mood episodes)", line: "F28, plus an other specified or unspecified depressive or bipolar disorder.", points: ["Delusional disorder allows only **brief** mood episodes relative to the delusions.", "Record the reason in parentheses."], link: { ch: "ch02", sec: "s2-other", label: "Other specified (F28)" }, dxId: "other-specified-psychotic" },
      "sa-bipolar": { dx: "Schizoaffective disorder, bipolar type (F25.0)", line: "Mood episodes for the majority of the illness, including mania, plus ≥2 weeks of psychosis without a mood episode.", points: ["Schizophrenia’s functional decline, 6-month and autism criteria are **not** required.", "May be more common in **young adults**.", "Prognosis: better than schizophrenia, worse than mood disorders. Diagnoses often shift over time, most often to schizophrenia."], link: { ch: "ch02", sec: "s2-schizoaffective", label: "Schizoaffective disorder" }, dxId: "schizoaffective-disorder" },
      "sa-depressive": { dx: "Schizoaffective disorder, depressive type (F25.1)", line: "Major depressive episodes (with depressed mood) for the majority of the illness, plus ≥2 weeks of psychosis without a mood episode.", points: ["Loss of interest alone does **not** count: depressed mood is required.", "May be more common in **older adults**.", "Depressive symptoms raise suicide risk (lifetime risk about 5%)."], link: { ch: "ch02", sec: "s2-schizoaffective", label: "Schizoaffective disorder" }, dxId: "schizoaffective-disorder" },
      notA: { label: "Rethink", dx: "Schizophrenia Criterion A is not met", line: "At least one symptom must be delusions, hallucinations or disorganized speech.", points: ["Negative symptoms with catatonia or disorganized behavior alone are **not** enough.", "Consider **catatonia** with a mood or medical cause, depression (which mimics negative symptoms), medication effects, or **other specified/unspecified** psychotic disorder."], link: { ch: "ch02", sec: "s2-scz-criteria", label: "Schizophrenia Criterion A" } },
      ocd: { dx: "OCD or body dysmorphic disorder, with absent insight/delusional beliefs", line: "Fully convinced obsessional or appearance beliefs stay in their own disorder.", points: ["Not delusional disorder.", "Look for obsessions, compulsions, appearance or body-odor preoccupations."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder: differential" } },
      ncd: { dx: "Major neurocognitive disorder, with behavioral disturbance", line: "Simple persecutory delusions within dementia are coded with the neurocognitive disorder.", points: ["If the delusions are a physiological effect of the disease process (e.g., Lewy body disease), psychotic disorder due to another medical condition can also be diagnosed."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder: differential" } },
      "del-persecutory": { dx: "Delusional disorder, persecutory type (F22)", line: "The most common type: conspired against, cheated, spied on, poisoned, harassed.", points: ["Small slights become the focus of a delusional system; repeated **legal action** is common.", "Resentment and anger; occasionally violence against the supposed persecutors.", "Add **“with bizarre content”** if the delusion is clearly implausible."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder" }, dxId: "delusional-disorder" },
      "del-jealous": { dx: "Delusional disorder, jealous type (F22)", line: "Conviction of a partner’s infidelity built on trivial “evidence.”", points: ["Probably **more common in men**.", "Confrontation of the partner and attempts to intervene; **legal difficulties** and violence can occur."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder" }, dxId: "delusional-disorder" },
      "del-erotomanic": { dx: "Delusional disorder, erotomanic type (F22)", line: "Another person, usually of higher status, is believed to be in love with the individual.", points: ["Efforts to **contact** the object are common.", "Legal difficulties are particularly common in this type."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder" }, dxId: "delusional-disorder" },
      "del-grandiose": { dx: "Delusional disorder, grandiose type (F22)", line: "Great unrecognized talent or insight, an important discovery, or a special identity or relationship.", points: ["May have religious content.", "Exclude **mania**: grandiosity confined to manic episodes is a mood disorder."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder" }, dxId: "delusional-disorder" },
      "del-somatic": { dx: "Delusional disorder, somatic type (F22)", line: "Bodily functions or sensations: foul odor, infestation, internal parasites, body parts not working.", points: ["On-theme tactile sensations (insects crawling) are allowed.", "Exclude **stimulant** formication and medical causes; exclude body dysmorphic disorder with absent insight."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder" }, dxId: "delusional-disorder" },
      "del-other": { dx: "Delusional disorder, mixed or unspecified type (F22)", line: "Mixed: no theme predominates. Unspecified: the theme is unclear or not listed (e.g., referential alone).", points: ["Course specifiers can be added only after 1 year."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder" }, dxId: "delusional-disorder" },
      scz: { dx: "Schizophrenia (F20.9)", line: "Criterion A for a month, functional decline, and ≥6 months of continuous signs, with mood, substance and medical causes excluded.", points: ["Add course specifiers once the illness has lasted **1 year**; add **F06.1** if catatonia is present.", "Assess cognition, depression and mania; anosognosia predicts nonadherence.", "Screen for **suicide risk** (5%–6% die by suicide), **tobacco** use and **metabolic** illness."], link: { ch: "ch02", sec: "s2-scz-criteria", label: "Schizophrenia" }, dxId: "schizophrenia" },
      "scz-asd": { dx: "Schizophrenia (F20.9), comorbid with autism spectrum or communication disorder", line: "Criterion F is met: prominent delusions or hallucinations for ≥1 month in addition to the other requirements.", points: ["Disorganized speech alone is common in autism and should not drive the diagnosis.", "Keep both diagnoses."], link: { ch: "ch02", sec: "s2-scz-criteria", label: "Schizophrenia Criterion F" }, dxId: "schizophrenia" },
      asd: { label: "Rethink", dx: "Features better explained by autism spectrum or a communication disorder", line: "Without ≥1 month of prominent delusions or hallucinations, schizophrenia is not added.", points: ["Disorganized speech and odd behavior are common in neurodevelopmental disorders, especially in children."], link: { ch: "ch02", sec: "s2-scz-ddx", label: "Schizophrenia: differential" } },
      sform: { dx: "Schizophreniform disorder (F20.81)", line: "A schizophrenia-like illness lasting ≥1 and <6 months, now recovered.", points: ["Functional decline is **not** required.", "Specify **with or without good prognostic features**.", "About a third of people recover within 6 months, as here."], link: { ch: "ch02", sec: "s2-schizophreniform", label: "Schizophreniform disorder" }, dxId: "schizophreniform-disorder" },
      "sform-prov": { dx: "Schizophreniform disorder, provisional (F20.81)", line: "Still ill but under 6 months: it is uncertain whether recovery will come in time.", points: ["If symptoms continue past 6 months, change the diagnosis to **schizophrenia**.", "Most of those who do not recover later meet criteria for schizophrenia or schizoaffective disorder."], link: { ch: "ch02", sec: "s2-schizophreniform", label: "Schizophreniform disorder" }, dxId: "schizophreniform-disorder" },
      brief: { dx: "Brief psychotic disorder, without marked stressor(s) (F23)", line: "≥1 day, <1 month, full return to baseline.", points: ["More than **50% relapse**; outcome is usually favorable.", "Suicidal behavior risk is increased during the acute episode."], link: { ch: "ch02", sec: "s2-brief", label: "Brief psychotic disorder" }, dxId: "brief-psychotic-disorder" },
      "brief-stressor": { dx: "Brief psychotic disorder, with marked stressor(s) (F23)", line: "Also called brief reactive psychosis.", points: ["The stress must be marked for almost anyone in similar circumstances in the person’s culture.", "If the reaction is to a severe medical illness, this (not psychotic disorder due to AMC) may be the diagnosis."], link: { ch: "ch02", sec: "s2-brief", label: "Brief psychotic disorder" }, dxId: "brief-psychotic-disorder" },
      "brief-peripartum": { dx: "Brief psychotic disorder, with peripartum onset (F23)", line: "Onset during pregnancy or within 4 weeks postpartum.", points: ["Exclude a mood episode with psychotic features and medical causes.", "Recovery within 1 month is required for this diagnosis."], link: { ch: "ch02", sec: "s2-brief", label: "Brief psychotic disorder" }, dxId: "brief-psychotic-disorder" },
      toobrief: { label: "Rethink", dx: "Too brief for a psychotic disorder diagnosis", line: "Under 1 day does not meet brief psychotic disorder.", points: ["Consider a substance, a personality disorder under stress, a panic attack or a dissociative episode.", "If still clinically significant, consider **unspecified** psychotic disorder (F29)."], link: { ch: "ch02", sec: "s2-brief", label: "Brief psychotic disorder" } },
      other: { dx: "Other specified (F28) or unspecified (F29) schizophrenia spectrum and other psychotic disorder", line: "Clinically significant psychosis that meets no full criteria.", points: ["**F28** when you record the reason, e.g., persistent auditory hallucinations, attenuated psychosis syndrome, or delusions taken over from a partner.", "**F29** when you do not state the reason or information is insufficient (e.g., the emergency room)."], link: { ch: "ch02", sec: "s2-other", label: "Other specified and unspecified" }, dxId: "other-specified-psychotic" }
    }
  },
  {
    id: "catatonia",
    chapter: "ch02",
    title: "Is it catatonia, and which kind?",
    summary: "Count the 12 catatonic features, rule out neuroleptic malignant syndrome and delirium, then decide between the catatonia specifier, catatonic disorder due to another medical condition and unspecified catatonia.",
    caution: "A teaching aid built from DSM-5-TR pp. 134–137. Catatonia can be life-threatening: suspected NMS, hyperpyrexia or medical instability needs urgent medical care, whatever the label.",
    start: "count",
    nodes: {
      count: {
        q: "How many of the 12 features dominate the picture?",
        help: "Stupor, catalepsy, waxy flexibility, mutism (not aphasia), negativism, posturing, mannerism, stereotypy, agitation not influenced by external stimuli, grimacing, echolalia, echopraxia.",
        options: [
          { label: "Three or more", to: "nms", note: "Three or more of the 12 catatonic features are present." },
          { label: "Fewer than three, but catatonic symptoms cause distress or impairment", to: "r:unspec", note: "Catatonic symptoms are present but full criteria are not met." }
        ]
      },
      nms: {
        q: "Is the person taking an antipsychotic (or other dopamine blocker), with fever, autonomic instability or laboratory abnormalities?",
        help: "Neuroleptic malignant syndrome (G21.0) can look catatonic, with vital sign and laboratory abnormalities. Abnormal postures may also be neuroleptic-induced acute dystonia.",
        options: [
          { label: "Yes, or NMS cannot be excluded", to: "r:nms", note: "NMS or another medication-induced movement disorder is possible." },
          { label: "No", to: "delirium", note: "NMS and medication-induced movement disorders are unlikely." }
        ]
      },
      delirium: {
        q: "Does the catatonia occur only during a delirium?",
        help: "Catatonic signs are common in delirium, but no separate catatonia diagnosis is made then.",
        options: [
          { label: "Yes", to: "r:delirium", note: "The catatonia occurs only within a delirium." },
          { label: "No", to: "cause", note: "Delirium does not account for the catatonia." }
        ]
      },
      cause: {
        q: "What is the cause?",
        help: "Medical causes named in the manual: neoplasms, head trauma, cerebrovascular disease, encephalitis, hypercalcemia, hepatic encephalopathy, homocystinuria, diabetic ketoacidosis, cerebral folate deficiency, rare autoimmune and paraneoplastic disorders. Rule these out before using the specifier.",
        options: [
          { label: "A mental disorder (psychotic, bipolar, depressive, neurodevelopmental or other)", to: "r:specifier", note: "A mental disorder accounts for the catatonia, and medical causes have been ruled out." },
          { label: "A medical condition, shown by history, examination or tests", to: "r:amc", note: "A medical condition directly causes the catatonia." },
          { label: "Unclear, or not enough information yet", to: "r:unspec", note: "The underlying cause is not yet known." }
        ]
      }
    },
    results: {
      specifier: { dx: "Catatonia associated with another mental disorder (F06.1)", line: "The catatonia specifier: code the mental disorder first, then F06.1.", points: ["Example: **F25.1** schizoaffective disorder, depressive type; **F06.1** catatonia associated with schizoaffective disorder.", "Most catatonia occurs in **depressive and bipolar** disorders; up to **35%** of people with schizophrenia have it.", "Watch for malnutrition, exhaustion, thromboembolism, pressure ulcers, contractures and hyperpyrexia."], link: { ch: "ch02", sec: "s2-catatonia", label: "Catatonia" }, dxId: "catatonia-associated" },
      amc: { dx: "Catatonic disorder due to another medical condition (F06.1)", line: "Code the medical condition first, then F06.1 catatonic disorder due to that condition.", points: ["Example: **K72.90** hepatic encephalopathy; **F06.1** catatonic disorder due to hepatic encephalopathy.", "Not diagnosed if it is better explained by another mental disorder (e.g., a manic episode)."], link: { ch: "ch02", sec: "s2-catatonia", label: "Catatonia" }, dxId: "catatonic-due-to-amc" },
      unspec: { dx: "Unspecified catatonia (R29.818 + F06.1)", line: "Cause unclear, full criteria not met, or not enough information (e.g., the emergency room).", points: ["Code **R29.818** first, then **F06.1**.", "Revisit the diagnosis as the workup progresses."], link: { ch: "ch02", sec: "s2-catatonia", label: "Catatonia" }, dxId: "unspecified-catatonia" },
      nms: { label: "Urgent", dx: "Consider neuroleptic malignant syndrome (G21.0) or a medication-induced movement disorder", line: "Catatonic-like features with vital sign or laboratory abnormalities in someone on antipsychotics.", points: ["Catatonic disorder due to another medical condition is not diagnosed if catatonia occurs only during NMS.", "Abnormal positioning may be **acute dystonia**."], link: { ch: "ch02", sec: "s2-catatonia", label: "Catatonia: think NMS first" } },
      delirium: { label: "Conclusion", dx: "Catatonic features within a delirium", line: "No separate catatonia diagnosis while the catatonia is confined to a delirium.", points: ["Treat the cause of the delirium.", "Reassess if catatonia persists after the delirium resolves."], link: { ch: "ch02", sec: "s2-catatonia", label: "Catatonia" } }
    }
  }
]);
