/* Disorder library: Chapter 3, Bipolar and Related Disorders (DSM-5-TR pp. 139–176). */
SP.disorders = (SP.disorders || []).concat([
  {
    id: "bipolar-i", ch: "ch03", sec: "s3-bp1-criteria", pages: "139–150", critPages: "140–142",
    name: "Bipolar I disorder", code: "F31.x", codeNote: "by current or most recent episode, severity, psychosis and remission",
    codes: [
      ["F31.11 / F31.12 / F31.13", "Bipolar I, current or most recent episode manic: mild / moderate / severe", ""],
      ["F31.2", "Bipolar I, current or most recent episode manic, with psychotic features", "Psychotic code applies regardless of severity"],
      ["F31.73 / F31.74", "Bipolar I, most recent episode manic, in partial / full remission", ""],
      ["F31.0", "Bipolar I, current or most recent episode hypomanic", "Not in remission; severity and psychotic specifiers do not apply"],
      ["F31.71 / F31.72", "Bipolar I, most recent episode hypomanic, in partial / full remission", ""],
      ["F31.31 / F31.32 / F31.4", "Bipolar I, current or most recent episode depressed: mild / moderate / severe", ""],
      ["F31.5", "Bipolar I, current or most recent episode depressed, with psychotic features", ""],
      ["F31.75 / F31.76", "Bipolar I, most recent episode depressed, in partial / full remission", ""],
      ["F31.9", "Bipolar I, episode unspecified (or unspecified status)", ""]
    ],
    aka: ["manic-depressive illness", "bipolar 1", "bipolar disorder type I"],
    essence: "At least **one lifetime manic episode**: ≥1 week (or any length if hospitalized) of elevated, expansive or irritable mood and energy with marked impairment, hospitalization or psychosis.",
    duration: "Manic episode **≥1 week** (any duration if hospitalized)",
    functioning: "**Marked impairment**, hospitalization or psychosis during mania",
    mood: "Depressive and hypomanic episodes common but **not required**",
    criteria: [
      ["A", "At least one **manic episode**: elevated, expansive or irritable mood **and** increased energy ≥1 week (any duration if hospitalized), with **three** B symptoms (**four** if only irritable), causing marked impairment, hospitalization or psychosis, not due to a substance or medical condition.", ["Grandiosity", "Decreased need for sleep", "Talkativeness or pressured speech", "Flight of ideas or racing thoughts", "Distractibility", "Increased goal-directed activity or agitation", "Risky activities"]],
      ["B", "At least one manic episode not better explained by schizoaffective disorder and not superimposed on a primary psychotic disorder."]
    ],
    specifiers: ["**Current or most recent episode**: manic, hypomanic, depressed, unspecified", "**Severity** (mild, moderate, severe), **with psychotic features**, or **partial/full remission**", "With anxious distress, mixed features, rapid cycling, melancholic, atypical, mood-congruent or incongruent psychotic features, catatonia (+F06.1), peripartum onset, seasonal pattern"],
    epi: [["12-month prevalence (US)", "1.5%; equal in men and women"], ["Onset", "Peak 20–30; US mean 22"], ["Recurrence", ">90% after a single manic episode"], ["Heritability", "About 90% (twins); first-degree relative risk 5%–10%"], ["Suicide", "20–30× general population; 5%–6% die by suicide"]],
    risk: ["Childhood adversity predisposes to early onset and a worse course.", "Goal-attainment events trigger manic relapse; negative events trigger depressive relapse.", "Cannabis and other substances worsen mania.", "Women: more rapid cycling and mixed states; strong postpartum risk.", "African Americans with bipolar I are at risk of misdiagnosis as schizophrenia."],
    differential: [
      { name: "Major depressive disorder", how: "Misdiagnosis is common because the first episode is often depressive: ask about past mania." },
      { id: "bipolar-ii", how: "Hypomania only, never mania." },
      { id: "bipolar-due-to-amc", how: "Mania caused by Cushing’s disease, MS, stroke, TBI." },
      { id: "substance-induced-bipolar", how: "Mania caused by stimulants, PCP or steroids; persistent antidepressant-emergent mania is bipolar I." },
      { id: "schizoaffective-disorder", how: "≥2 weeks of psychosis without a mood episode." },
      { name: "ADHD", how: "Persistent symptoms from before age 12, not episodes." },
      { name: "Disruptive mood dysregulation disorder", how: "Persistent severe irritability without a distinct manic episode." },
      { name: "Borderline personality disorder", how: "Lability without a distinct episode or increase over baseline." }
    ],
    pearls: ["One manic episode is enough; no depression is required.", "Hospitalization or psychosis makes any elevated episode manic.", "Persistent antidepressant-emergent mania = bipolar I.", "Mixed features predict poorer outcome, suicide attempts and poorer lithium response."],
    cmp: { symptoms: "A manic episode (3 of 7 B symptoms, 4 if irritable)", exclusions: "Substance or medical cause; better explained by schizoaffective or a psychotic disorder", prevalence: "1.5% (12-month, US)", course: ">90% recur; heterogeneous; functional recovery lags symptoms" },
    clues: [["Core picture", "A week of no sleep, grandiose plans, spending sprees and pressured speech, ending in hospital"], ["Threshold", "One lifetime episode of this kind is enough; depression not required"], ["Course", "More than 90% have further episodes"], ["Coding", "Coded by current or most recent episode, severity, psychosis and remission"]]
  },
  {
    id: "bipolar-ii", ch: "ch03", sec: "s3-bp2-criteria", pages: "150–159", critPages: "150–152",
    name: "Bipolar II disorder", code: "F31.81", aka: ["bipolar 2", "bipolar disorder type II"],
    essence: "At least one **hypomanic** episode and at least one **major depressive** episode, and **never a manic episode**.",
    duration: "Hypomania **≥4 consecutive days**; major depression **≥2 weeks**",
    functioning: "Hypomania: change seen by others, **no** marked impairment; depression or unpredictability causes impairment",
    mood: "Major depressive episodes **required**; dominate the course",
    criteria: [
      ["A", "At least one **hypomanic episode** (≥4 days, three B symptoms or four if irritable, observable change, no marked impairment or psychosis) and at least one **major depressive episode** (five of nine symptoms for 2 weeks)."],
      ["B", "**Never** a manic episode."],
      ["C", "Not better explained by schizoaffective disorder or superimposed on a psychotic disorder."],
      ["D", "Depression or the **unpredictability** of alternating episodes causes distress or impairment."]
    ],
    specifiers: ["**Current or most recent episode**: hypomanic or depressed", "Severity (depressed), partial/full remission, written out (not coded)", "With anxious distress, mixed features, rapid cycling, peripartum onset, seasonal pattern; for depression also melancholic, atypical, psychotic features, catatonia (+F06.1)"],
    epi: [["12-month prevalence", "0.8% (US); 0.3% internationally"], ["Onset", "Mid-20s; usually begins with depression"], ["Diagnostic delay", "Typically >10 years"], ["Conversion to bipolar I", "5%–15%"], ["Suicide attempts", "About one-third"]],
    risk: ["Risk highest in relatives of people with bipolar II.", "Rapid cycling predicts poorer prognosis.", "Childbirth can trigger hypomania (10%–20% of females in nonclinical samples).", "Anxiety disorders in 75%, most often social anxiety."],
    differential: [
      { name: "Major depressive disorder", how: "Only a history of at least one full hypomanic episode distinguishes them." },
      { id: "bipolar-i", how: "Any lifetime manic episode." },
      { id: "cyclothymic", how: "Only subthreshold hypomanic and depressive symptoms." },
      { id: "other-specified-bipolar", how: "Hypomania too short (2–3 days), too few symptoms, or without depression." },
      { name: "ADHD and personality disorders", how: "Require a distinct episode and an increase over baseline." }
    ],
    pearls: ["Not a milder bipolar I: more chronicity, more time depressed.", "Psychosis only in depressive episodes.", "One code (F31.81); specifiers written out.", "Once hypomania occurs, never reverts to MDD."],
    cmp: { symptoms: "≥1 hypomanic + ≥1 major depressive episode", exclusions: "Any manic episode; substance or medical cause", prevalence: "0.8% (12-month, US)", course: "Highly recurrent; depression dominates; 5%–15% convert to bipolar I" },
    clues: [["Core picture", "Recurrent depressions, plus a 6-day stretch of energy and productivity that a spouse noticed"], ["Rule", "Never a manic episode"], ["Coding", "A single code, F31.81"], ["Myth", "It is not a milder form of the other bipolar disorder"]]
  },
  {
    id: "cyclothymic", ch: "ch03", sec: "s3-cyclothymic", pages: "159–161", critPages: "159–160",
    name: "Cyclothymic disorder", code: "F34.0", aka: ["cyclothymia"],
    essence: "At least **2 years** (1 in youth) of numerous **subthreshold** hypomanic and depressive periods, present half the time, **never** reaching a full episode.",
    duration: "**≥2 years** (≥1 year in children and adolescents); never symptom-free >2 months",
    functioning: "Distress or impairment required",
    mood: "**Never** a manic, hypomanic or major depressive episode",
    criteria: [
      ["A", "≥2 years (1 in youth) of numerous hypomanic-symptom and depressive-symptom periods that do not meet episode criteria."],
      ["B", "Symptoms at least half the time; never without them for more than 2 months."],
      ["C", "Never met criteria for a major depressive, manic or hypomanic episode."],
      ["D", "Not better explained by a psychotic disorder."],
      ["E", "Not due to a substance or medical condition (e.g., hyperthyroidism)."],
      ["F", "Distress or impairment."]
    ],
    specifiers: ["**With anxious distress** (the only one)"],
    epi: [["Lifetime prevalence", "0.4%–2.5% (US and Europe); 3%–5% in mood clinics"], ["Onset", "Adolescence or early adulthood; most youth before age 10"], ["Conversion", "15%–50% to bipolar I or II"]],
    risk: ["MDD, bipolar I and II more common in first-degree relatives.", "May be more common in relatives of people with bipolar I."],
    differential: [
      { id: "bipolar-due-to-amc", how: "A chronic medical condition (e.g., hyperthyroidism) physiologically causes the swings." },
      { id: "substance-induced-bipolar", how: "Stimulant-related swings that resolve after stopping." },
      { id: "bipolar-i", how: "Rapid cycling requires full episodes." },
      { name: "Borderline personality disorder", how: "Mood shifts of anxiety, irritability and sadness, not elation; both can be diagnosed." }
    ],
    pearls: ["If a full episode appears after the first 2 years, the diagnosis changes and cyclothymia is dropped.", "Short-duration cyclothymia (<24 months) is other specified bipolar disorder."],
    cmp: { symptoms: "Subthreshold hypomanic and depressive symptoms only", exclusions: "Any full episode; psychotic disorder; substance or medical cause", prevalence: "0.4%–2.5% lifetime", course: "Insidious, persistent; 15%–50% convert" },
    clues: [["Core picture", "Years of mild highs and lows that never reach a full episode"], ["Time criterion", "Two years in adults, one in youth"], ["Rule", "Never symptom-free for more than 2 months"], ["Code", "F34.0"]]
  },
  {
    id: "substance-induced-bipolar", ch: "ch03", sec: "s3-substance", pages: "162–165", critPages: "162",
    name: "Substance/medication-induced bipolar and related disorder", code: "F1x.x4", codeNote: "4th character: 1 mild, 2 moderate or severe, 9 no use disorder",
    codes: [
      ["F10.14 / F10.24 / F10.94", "Alcohol-induced bipolar and related disorder", "Mild / moderate-severe / no use disorder"],
      ["F16.14 / F16.24 / F16.94", "Phencyclidine- or other hallucinogen-induced bipolar and related disorder", ""],
      ["F13.14 / F13.24 / F13.94", "Sedative-, hypnotic- or anxiolytic-induced bipolar and related disorder", ""],
      ["F15.14 / F15.24 / F15.94", "Amphetamine-type (or other stimulant)-induced bipolar and related disorder", ""],
      ["F14.14 / F14.24 / F14.94", "Cocaine-induced bipolar and related disorder", ""],
      ["F19.14 / F19.24 / F19.94", "Other (or unknown) substance-induced bipolar and related disorder", "e.g., dexamethasone"]
    ],
    aka: ["drug-induced mania", "steroid-induced mania"],
    essence: "A prominent, persistent elevated, expansive or irritable mood with increased energy caused by a **substance, medication or toxin**.",
    duration: "Onset during or soon after exposure; persistence **≈1 month** after stopping suggests an independent disorder",
    functioning: "Distress or impairment required",
    mood: "—",
    criteria: [
      ["A", "Prominent, persistent elevated, expansive or irritable mood and increased activity or energy."],
      ["B", "Onset during or soon after intoxication, withdrawal or medication exposure, by a substance able to cause it."],
      ["C", "Not better explained by an independent bipolar disorder."],
      ["D", "Not only during delirium."],
      ["E", "Distress or impairment."]
    ],
    specifiers: ["With onset during intoxication / during withdrawal / after medication use"],
    epi: [["Typical agents", "Stimulants, phencyclidine, steroids; new compounds such as bath salts"], ["Prevalence", "Limited data; depends on substance availability"]],
    risk: ["May reveal an underlying bipolar diathesis."],
    differential: [
      { id: "bipolar-i", how: "Persistent antidepressant- or ECT-emergent mania is bipolar I." },
      { name: "Substance intoxication or withdrawal", how: "Use the induced diagnosis only if mood symptoms predominate and need clinical attention." },
      { name: "Delirium", how: "Mood symptoms only during delirium (e.g., PCP, steroids)." }
    ],
    pearls: ["Stimulant mania: minutes to an hour, gone in 1–2 days.", "Steroid mania: after several days, dose-related.", "Cannabis and inhalants are not on the code list."],
    cmp: { symptoms: "Elevated/irritable mood + increased energy", exclusions: "Independent bipolar disorder; delirium", prevalence: "Limited data", course: "Usually brief once the agent is removed" },
    clues: [["Core picture", "Euphoria and grandiosity within an hour of a methamphetamine binge, gone in 2 days"], ["Classic agents", "Stimulants, PCP, steroids"], ["Coding", "Fourth character records any use disorder"]]
  },
  {
    id: "bipolar-due-to-amc", ch: "ch03", sec: "s3-medical", pages: "166–168", critPages: "166",
    name: "Bipolar and related disorder due to another medical condition", code: "F06.33 / F06.34",
    codes: [
      ["F06.33", "Bipolar and related disorder due to [condition], with manic features", "Full manic or hypomanic criteria not met; code the condition first"],
      ["F06.33", "…with manic- or hypomanic-like episode", "Full criteria met except the medical exclusion"],
      ["F06.34", "…with mixed features", "Depressive symptoms present but not predominant"]
    ],
    aka: ["secondary mania"],
    essence: "A prominent, persistent manic picture that is the **direct pathophysiological consequence** of a medical condition.",
    duration: "Usually within the **first weeks or month** of the medical condition",
    functioning: "Impairment, hospitalization or psychotic features",
    mood: "—",
    criteria: [
      ["A", "Prominent, persistent elevated, expansive or irritable mood and increased energy."],
      ["B", "Evidence of a direct medical cause."],
      ["C", "Not better explained by another mental disorder."],
      ["D", "Not only during delirium."],
      ["E", "Impairment, hospitalization or psychotic features."]
    ],
    specifiers: ["With manic features (F06.33)", "With manic- or hypomanic-like episode (F06.33)", "With mixed features (F06.34)"],
    epi: [["Classic causes", "Cushing’s disease, multiple sclerosis, stroke, traumatic brain injury, anti-NMDA receptor encephalitis"]],
    risk: ["Culture and sex differences follow the medical condition (e.g., lupus more common in females)."],
    differential: [
      { name: "Delirium", how: "Mood disturbance only during delirium." },
      { name: "Major or mild NCD", how: "Can be co-diagnosed if the same disease causes the mood change." },
      { name: "Excited catatonia or acute anxiety", how: "Distinguish from mania." },
      { id: "substance-induced-bipolar", how: "Steroids or alpha-interferon used to treat the condition." }
    ],
    pearls: ["Not diagnosed if manic episodes clearly preceded the medical condition.", "Code the medical condition first."],
    cmp: { symptoms: "Elevated/irritable mood + increased energy", exclusions: "Delirium; another mental disorder", prevalence: "—", course: "Follows the condition; may remit with it" },
    clues: [["Core picture", "Euphoria and spending sprees in a woman with purple striae and central obesity"], ["Codes", "F06.33 or F06.34, after the medical condition"]]
  },
  {
    id: "other-specified-bipolar", ch: "ch03", sec: "s3-other", pages: "168–169", critPages: "168–169",
    name: "Other specified bipolar and related disorder", code: "F31.89", aka: ["short-duration hypomania", "short-duration cyclothymia", "subthreshold hypomania"],
    essence: "A bipolar-type presentation that meets no full criteria, **with the reason recorded**.",
    duration: "e.g., hypomania of **2–3 days**; cyclothymia **<24 months**",
    functioning: "Distress or impairment",
    mood: "Examples include major depressive episodes with subthreshold hypomania",
    criteria: ["Five examples: short-duration hypomanic episodes (2–3 days) with MDEs; hypomania with insufficient symptoms with MDEs; hypomanic episode without prior MDE; short-duration cyclothymia (<24 months, <12 in youth); manic episode superimposed on a primary psychotic disorder."],
    specifiers: ["The specific reason in parentheses"],
    epi: [],
    risk: [],
    differential: [
      { id: "bipolar-ii", how: "Full hypomania (≥4 days, full symptoms) plus an MDE." },
      { name: "MDE with mixed features", how: "Hypomanic symptoms that overlap the depression." },
      { id: "cyclothymic", how: "Full 2 years (1 in youth)." }
    ],
    pearls: ["Hypomania alone (no depression) is F31.89, not bipolar II.", "Manic episodes within schizoaffective disorder do not get this extra diagnosis."],
    cmp: { symptoms: "Subthreshold or atypical bipolar presentation", exclusions: "Full criteria for a specific disorder", prevalence: "—", course: "—" },
    clues: [["Core picture", "Repeated depressions with several 2-day highs that meet every symptom criterion"], ["Example", "A hypomanic episode in someone never depressed"], ["Code", "F31.89"]]
  },
  {
    id: "unspecified-bipolar", ch: "ch03", sec: "s3-other", pages: "169", critPages: "169",
    name: "Unspecified bipolar and related disorder", code: "F31.9", aka: [],
    essence: "Bipolar-type symptoms meeting no full criteria when the reason is **not stated** or information is **insufficient**.",
    duration: "—", functioning: "Distress or impairment", mood: "—",
    criteria: ["Bipolar-type symptoms causing distress or impairment without full criteria, when the reason is not given or information is insufficient (e.g., the emergency room)."],
    specifiers: [], epi: [], risk: [],
    differential: [{ id: "other-specified-bipolar", how: "The reason is recorded." }, { id: "unspecified-mood", how: "Cannot choose between bipolar and depressive." }],
    pearls: ["F31.9 is also the bipolar I code when the episode is unspecified."],
    cmp: { symptoms: "Bipolar-type symptoms", exclusions: "Full criteria for a specific disorder", prevalence: "—", course: "—" },
    clues: [["Code", "F31.9, reason not stated"]]
  },
  {
    id: "unspecified-mood", ch: "ch03", sec: "s3-other", pages: "169", critPages: "169",
    name: "Unspecified mood disorder", code: "F39", aka: [],
    essence: "Mood symptoms meeting no full criteria when it is **hard to choose** between unspecified bipolar and unspecified depressive disorder.",
    duration: "—", functioning: "Distress or impairment", mood: "—",
    criteria: ["Mood symptoms causing distress or impairment without full criteria for any bipolar or depressive disorder, when it is difficult to choose between unspecified bipolar and unspecified depressive disorder (e.g., acute agitation)."],
    specifiers: [], epi: [], risk: [],
    differential: [{ id: "unspecified-bipolar", how: "Clearly bipolar-type symptoms." }],
    pearls: ["Listed in both the bipolar and the depressive chapters."],
    cmp: { symptoms: "Mood symptoms, polarity unclear", exclusions: "Full criteria for any mood disorder", prevalence: "—", course: "—" },
    clues: [["Core picture", "Acute agitation with mood symptoms where polarity cannot be determined"], ["Code", "F39"]]
  }
]);

SP.comparePresets = (SP.comparePresets || []).concat([
  { label: "Bipolar I vs bipolar II", ids: ["bipolar-i", "bipolar-ii"] },
  { label: "Bipolar II vs cyclothymic vs other specified", ids: ["bipolar-ii", "cyclothymic", "other-specified-bipolar"] },
  { label: "Bipolar I vs schizoaffective", ids: ["bipolar-i", "schizoaffective-disorder"] },
  { label: "Substance-induced vs medically caused mania", ids: ["substance-induced-bipolar", "bipolar-due-to-amc"] }
]);

SP.timeLadders = (SP.timeLadders || []).concat([
  { type: "ladder", title: "Chapter 3: bipolar and related disorders", ticks: [[6, "1 d"], [16, "4 d"], [26, "1 wk"], [36, "2 wk"], [46, "1 mo"], [56, "2 mo"], [76, "1 yr"], [92, "2 yr"]], rows: [
    { label: "Short hypomania (F31.89)", dx: "other-specified-bipolar", from: 11, to: 16, color: "guide", span: "2–3 days" },
    { label: "Hypomanic episode", dx: "bipolar-ii", from: 16, to: 100, color: "hy", open: true, span: "≥4 consecutive days" },
    { label: "Manic episode", dx: "bipolar-i", from: 26, to: 100, color: "case", open: true, span: "≥1 week (any if hospitalized)" },
    { label: "Major depressive episode", dx: "bipolar-ii", from: 36, to: 100, color: "drug", open: true, span: "≥2 weeks" },
    { label: "Short cyclothymia (F31.89)", dx: "other-specified-bipolar", from: 46, to: 92, color: "guide", span: "<24 months (<12 in youth)" },
    { label: "Cyclothymic disorder", dx: "cyclothymic", from: 92, to: 100, color: "mech", open: true, span: "≥2 years (1 in youth)" }
  ], note: "Rapid cycling: ≥4 episodes in 12 months. Full remission: 2 symptom-free months. Peripartum onset: within 4 weeks of delivery." }
]);
