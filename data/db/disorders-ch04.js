/* Disorder library: Chapter 4, Depressive Disorders (DSM-5-TR pp. 177–214).
   Unspecified mood disorder (F39) lives in disorders-ch03.js and is cross-linked here. */
SP.disorders = (SP.disorders || []).concat([
  {
    id: "dmdd", ch: "ch04", sec: "s4-dmdd-criteria", pages: "178–182", critPages: "178",
    name: "Disruptive mood dysregulation disorder", code: "F34.81", aka: ["DMDD"],
    essence: "Severe, recurrent **temper outbursts** (≥3 a week) with **persistently irritable or angry mood** between them, for ≥12 months in two settings, in a child first diagnosed between **6 and 18** with onset before **10**.",
    duration: "**≥12 months**, never ≥3 consecutive months without symptoms",
    functioning: "Severe in at least one setting, present in two (home, school, peers)",
    mood: "**Chronic, nonepisodic** irritability; never a manic-like period >1 day",
    criteria: [
      ["A", "**Criteria A–C.** Severe temper outbursts, out of proportion and developmentally inappropriate, on average **three or more times per week**."],
      ["D", "**Persistently irritable or angry mood** between outbursts, most of the day, nearly every day, observable by others."],
      ["E", "**Criteria E–F.** **≥12 months** without a 3-month break; in **two of three settings**, severe in at least one."],
      ["G", "**Criteria G–H.** First diagnosed between ages **6 and 18**; onset **before 10**."],
      ["I", "Never a distinct period **>1 day** meeting full symptom criteria (except duration) for mania or hypomania."],
      ["J", "**Criteria J–K.** Not only during a major depressive episode; not better explained by another disorder or by a substance or medical condition. Cannot coexist with **ODD, IED or bipolar disorder**."]
    ],
    specifiers: [],
    epi: [["Prevalence", "2.5% (Brazilian 11-year-olds); 8.2% (US 6-year-olds)"], ["Sex", "No consistent difference in the community; clinic samples mostly boys"], ["Persistence", "About half still meet criteria 1 year later"], ["Outcome", "Unipolar depression and anxiety; bipolar conversion very low"]],
    risk: ["Chronic irritability history, often first meeting ODD criteria.", "Comorbid ADHD and anxiety from an early age.", "Disrupted family life: abuse, neglect, parental psychiatric disorder, divorce, parental death.", "Family history of depression."],
    differential: [
      { id: "bipolar-i", how: "**Episodic** mood change with elevated mood and grandiosity; any manic-like spell >1 day excludes DMDD and bipolar wins." },
      { id: "oppositional-defiant", how: "Lacks severe outbursts plus persistent mood disruption; only ~15% with ODD meet DMDD; if both, diagnose DMDD only." },
      { id: "ied", how: "No persistent irritability between outbursts; 3 months suffice; never diagnosed with DMDD." },
      { id: "mdd", how: "Irritability only during a major depressive episode → MDD instead." },
      { id: "asd", how: "Outbursts when routines are disturbed are secondary to autism." }
    ],
    pearls: ["Created to curb overdiagnosis of pediatric bipolar disorder.", "With ODD or IED, keep DMDD; with bipolar disorder, drop DMDD.", "Comorbidity is extremely high; DMDD alone is rare."],
    cmp: { symptoms: "Outbursts ≥3/week + irritable mood between", exclusions: "Bipolar disorder; ODD and IED not diagnosed with it; outbursts only in MDE, anxiety or autism contexts", prevalence: "2.5%–8.2% (community samples of children)", course: "Half persist at 1 year; later depression and anxiety" },
    clues: [["Core picture", "A 9-year-old who explodes over small frustrations several times a week and is grumpy all day in between"], ["Age rules", "First diagnosed 6–18, onset before 10"], ["Exclusions", "Wins over ODD and IED, loses to bipolar disorder"], ["Code", "F34.81"]]
  },
  {
    id: "mdd", ch: "ch04", sec: "s4-mdd-criteria", pages: "183–192", critPages: "183–185",
    name: "Major depressive disorder", code: "F32.x / F33.x", codeNote: "by single or recurrent episode, severity, psychosis and remission",
    codes: [
      ["F32.0 / F32.1 / F32.2", "Single episode: mild / moderate / severe", ""],
      ["F32.3", "Single episode, with psychotic features", "Coded regardless of severity"],
      ["F32.4 / F32.5", "Single episode, in partial / full remission", ""],
      ["F32.9", "Single episode, unspecified", "Not the same as F32.A"],
      ["F33.0 / F33.1 / F33.2", "Recurrent episode: mild / moderate / severe", "Recurrent = ≥2-month gap between episodes"],
      ["F33.3", "Recurrent episode, with psychotic features", ""],
      ["F33.41 / F33.42", "Recurrent episode, in partial / full remission", ""],
      ["F33.9", "Recurrent episode, unspecified", ""]
    ],
    aka: ["MDD", "unipolar depression", "clinical depression", "major depression"],
    essence: "One or more **major depressive episodes** (five of nine symptoms, including depressed mood or loss of interest, for **≥2 weeks**) and **never** a manic or hypomanic episode.",
    duration: "Episode **≥2 weeks**; recurrence needs a **2-month** gap",
    functioning: "Clinically significant distress or impairment",
    mood: "Depressed mood or anhedonia; irritable mood allowed in youth",
    criteria: [
      ["A", "**Five or more** of nine symptoms for **2 weeks**, at least one being **depressed mood** or **loss of interest or pleasure**.", ["Depressed mood (irritable in youth)", "Diminished interest or pleasure", "Weight or appetite change (>5% in a month)", "Insomnia or hypersomnia", "Psychomotor agitation or retardation (observable)", "Fatigue", "Worthlessness or guilt", "Poor concentration or indecision", "Recurrent thoughts of death, suicidal ideation, plan or attempt"]],
      ["B", "**Criteria B–C.** Distress or impairment; not due to a substance or medical condition."],
      ["D", "Not better explained by schizoaffective disorder or superimposed on a psychotic disorder."],
      ["E", "**Never** a manic or hypomanic episode (unless all were substance- or medically induced)."]
    ],
    specifiers: ["**Single or recurrent**; **severity** (mild, moderate, severe), **with psychotic features**, or **partial/full remission**", "With anxious distress, mixed features, melancholic, atypical, mood-congruent or incongruent psychotic features, catatonia (+F06.1), peripartum onset", "**With seasonal pattern** (recurrent only)"],
    epi: [["12-month prevalence (US)", "About 7%; ages 18–29 threefold those 60+"], ["Sex", "Women about 2×"], ["Onset", "Rises with puberty; US incidence peaks in the 20s"], ["Recovery", "40% begin within 3 months, 80% within 1 year"], ["Heritability", "About 40%; first-degree relatives 2–4×"], ["Suicide", "17-fold increased risk"]],
    risk: ["Neuroticism (negative affectivity).", "Multiple adverse childhood experiences.", "Low income, limited education, racism and discrimination.", "Nonmood disorders (anxiety, substance use, trauma, eating, OCD) and chronic medical illness.", "Reproductive stages: premenstrual, postpartum, perimenopause."],
    differential: [
      { id: "bipolar-ii", how: "Any lifetime hypomania (bipolar II) or mania (bipolar I) excludes MDD." },
      { id: "pdd", how: "Depressed mood more days than not for 2 years; diagnose both if both are met." },
      { id: "depressive-due-to-amc", how: "Episodes are the direct effect of a medical condition." },
      { id: "substance-induced-depressive", how: "Episodes caused by a substance or medication." },
      { id: "pmdd", how: "Symptoms confined to the premenstrual week." },
      { id: "schizoaffective-disorder", how: "≥2 weeks of psychosis without a major mood episode." },
      { name: "Adjustment disorder with depressed mood", how: "Stressor-related; full MDE criteria not met." },
      { name: "Grief", how: "Waves of emptiness tied to reminders, preserved self-esteem, positive emotions possible." }
    ],
    pearls: ["Either depressed mood or anhedonia is enough as the core symptom.", "Thoughts of death must recur; one attempt or plan is enough.", "Psychotic features change the code whatever the severity.", "Adolescent onset, psychosis, bipolar family history and mixed features predict a later bipolar diagnosis."],
    cmp: { symptoms: "Five of nine for 2 weeks (mood or interest)", exclusions: "Any mania or hypomania; substance or medical cause; psychotic disorders", prevalence: "≈7% (12-month, US)", course: "Episodic; 80% begin recovering within a year; recurrence common" },
    clues: [["Core picture", "Two weeks of low mood, early waking, weight loss, guilt and thoughts of death in someone who has never been high"], ["Threshold", "Five of nine symptoms, one being mood or interest"], ["Coding", "F32 single, F33 recurrent; psychotic features coded regardless of severity"], ["Course", "Recovery begins within a year for 80%"]]
  },
  {
    id: "pdd", ch: "ch04", sec: "s4-pdd-criteria", pages: "193–197", critPages: "193–194",
    name: "Persistent depressive disorder", code: "F34.1", aka: ["dysthymia", "dysthymic disorder", "chronic major depression", "chronic depression"],
    essence: "**Depressed mood** most of the day, **more days than not**, for **≥2 years** (1 in youth, mood may be irritable), with **two of six** symptoms and never symptom-free for more than 2 months.",
    duration: "**≥2 years** (≥1 year in children and adolescents)",
    functioning: "Distress or impairment; can equal or exceed MDD",
    mood: "Chronic depressed mood; MDEs may occur (then diagnose MDD too)",
    criteria: [
      ["A", "Depressed mood most of the day, more days than not, for **≥2 years** (youth: irritable mood allowed, **≥1 year**)."],
      ["B", "**Two or more** while depressed:", ["Poor appetite or overeating", "Insomnia or hypersomnia", "Low energy or fatigue", "Low self-esteem", "Poor concentration or indecision", "Hopelessness"]],
      ["C", "Never without symptoms for **more than 2 months** at a time."],
      ["D", "**Criteria D–E.** MDD criteria may be continuously present; **never** mania or hypomania."],
      ["F", "**Criteria F–H.** Not better explained by a psychotic disorder; not due to a substance or medical condition; distress or impairment."]
    ],
    specifiers: ["With anxious distress; with atypical features", "In partial or full remission", "**Early onset** (<21) or **late onset** (≥21)", "Course over the last 2 years: pure dysthymic syndrome; persistent major depressive episode; intermittent major depressive episodes with or without current episode", "Severity: mild, moderate, severe"],
    epi: [["12-month prevalence (US)", "0.5% dysthymia; 1.5% chronic MDD"], ["Sex", "Women 1.5× (dysthymia) and 2× (chronic MDD)"], ["Onset", "Often early and insidious"], ["Course", "Chronic; full resolution less likely than in nonchronic MDD"]],
    risk: ["Borderline personality disorder (particularly robust).", "Higher neuroticism, greater severity, poorer functioning, anxiety or conduct disorder predict worse outcome.", "Parental loss or separation and childhood adversity."],
    differential: [
      { id: "mdd", how: "If a major depressive episode occurs, diagnose both." },
      { id: "cyclothymic", how: "Numerous subthreshold hypomanic periods: cyclothymia precludes PDD." },
      { id: "other-specified-depressive", how: "Chronic depression whose symptoms (anhedonia, suicidality) are not PDD criteria." },
      { id: "bipolar-ii", how: "Hypomania with a past MDE → bipolar II; hypomania without any MDE → other specified bipolar." },
      { name: "Personality disorders", how: "Commonly co-occur; diagnose both." }
    ],
    pearls: ["Merges DSM-IV dysthymia and chronic major depression.", "Hopelessness and low self-esteem are PDD symptoms but not MDE symptoms.", "Early onset predicts Cluster B and C personality disorders."],
    cmp: { symptoms: "Depressed mood + two of six", exclusions: "Mania, hypomania, cyclothymia; psychotic disorders; substance or medical cause", prevalence: "0.5% + 1.5% (12-month, US)", course: "Early, insidious, chronic" },
    clues: [["Core picture", "Low most days since college: tired, poor sleep, low self-worth, hopeless, but never a full episode"], ["Time", "Two years in adults, one in youth; never well >2 months"], ["Overlap", "If a major episode appears, the other diagnosis is added"], ["Code", "F34.1"]]
  },
  {
    id: "pmdd", ch: "ch04", sec: "s4-pmdd-criteria", pages: "197–200", critPages: "197–198",
    name: "Premenstrual dysphoric disorder", code: "F32.81", aka: ["PMDD"],
    essence: "In most cycles, **five or more** symptoms (at least one affective: lability, irritability, depression, anxiety) in the **final week before menses**, improving within days of onset and **minimal the week after**; confirmed by **two cycles** of daily ratings.",
    duration: "Most cycles of the past year; confirmed over **2 cycles**",
    functioning: "Distress or interference with work, school, social life or relationships",
    mood: "Luteal-phase lability, irritability, dysphoria, anxiety",
    criteria: [
      ["A", "At least **five** symptoms in the final premenstrual week, improving after menses begin, minimal or absent the week after."],
      ["B", "At least **one**: affective lability; irritability or anger; depressed mood or hopelessness; anxiety or tension."],
      ["C", "At least one more to total five: decreased interest, poor concentration, lethargy, appetite change, sleep change, feeling overwhelmed, physical symptoms."],
      ["D", "**Criteria D–E.** Distress or interference; not merely an exacerbation of another disorder."],
      ["F", "Confirmed by **prospective daily ratings** for at least two cycles (**provisional** until then)."],
      ["G", "Not due to a substance (including hormones) or medical condition (e.g., hyperthyroidism)."]
    ],
    specifiers: ["Record “**provisional**” until confirmed by prospective ratings"],
    epi: [["12-month prevalence", "5.8% (Germany); 1.3% in rigorous US prospective study"], ["Incidence", "2.5% over 40 months"], ["Heritability", "30%–80% (premenstrual symptoms)"], ["Course", "After menarche until menopause"]],
    risk: ["Stress and interpersonal trauma.", "Seasonal changes.", "Sociocultural aspects of female gender roles."],
    differential: [
      { name: "Premenstrual syndrome", how: "No five-symptom or mood requirement; milder; about 20%." },
      { name: "Dysmenorrhea", how: "Painful menses starting with, not before, menstruation." },
      { id: "mdd", how: "Charting shows no premenstrual pattern; premenstrual worsening without a symptom-free week is exacerbation." },
      { id: "substance-induced-depressive", how: "Symptoms began with hormonal contraceptives and stop when they stop." }
    ],
    pearls: ["Five symptoms, one affective, two cycles of prospective ratings.", "A symptom-free follicular phase is essential.", "The most common previous disorder is a major depressive episode."],
    cmp: { symptoms: "≥5 premenstrual symptoms, ≥1 affective", exclusions: "Exacerbation of another disorder; hormones; medical causes", prevalence: "1.3%–5.8%", course: "Menarche to menopause" },
    clues: [["Core picture", "Tearful, irritable and overwhelmed every month for a week, then entirely well"], ["Confirmation", "Two cycles of daily symptom ratings"], ["Code", "F32.81"]]
  },
  {
    id: "substance-induced-depressive", ch: "ch04", sec: "s4-substance", pages: "201–206", critPages: "201–202",
    name: "Substance/medication-induced depressive disorder", code: "By substance", codeNote: "4th character: 1 mild use disorder, 2 moderate/severe, 9 none",
    codes: [
      ["F10.14 / F10.24 / F10.94", "Alcohol-induced depressive disorder", "With mild / moderate-severe / no use disorder"],
      ["F14.14 / F14.24 / F14.94", "Cocaine-induced", ""],
      ["F15.14 / F15.24 / F15.94", "Amphetamine-type (or other stimulant)-induced", ""],
      ["F11.14 / F11.24 / F11.94", "Opioid-induced", ""],
      ["F13.14 / F13.24 / F13.94", "Sedative-, hypnotic- or anxiolytic-induced", ""],
      ["F16.14 / F16.24 / F16.94", "Phencyclidine- or other hallucinogen-induced", ""],
      ["F18.14 / F18.24 / F18.94", "Inhalant-induced", ""],
      ["F19.14 / F19.24 / F19.94", "Other (or unknown) substance-induced", "Includes medications such as dexamethasone"]
    ],
    aka: ["drug-induced depression", "alcohol-induced depression", "medication-induced depression"],
    essence: "Prominent **depressed mood or anhedonia** that develops **during or soon after** intoxication, withdrawal or medication exposure, from a substance able to cause it, and is not better explained by an independent depression.",
    duration: "Usually remits within days to weeks; persistence ≈**1 month** after stopping suggests independence",
    functioning: "Predominates and warrants clinical attention",
    mood: "Depressed mood or anhedonia",
    criteria: [
      ["A", "Prominent, persistent **depressed mood or markedly diminished interest** that predominates."],
      ["B", "Developed during or soon after intoxication, withdrawal or medication exposure, and the substance can cause it."],
      ["C", "Not better explained by an independent depressive disorder (preceded use; persisted about 1 month after; recurrent non-substance episodes)."],
      ["D", "**Criteria D–E.** Not only during delirium; distress or impairment."]
    ],
    specifiers: ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"],
    epi: [["Among relevant use disorders", "Alcohol- or stimulant-induced episodes in 40% or more (lifetime)"], ["General population", "0.26% without independent depression"], ["Sex", "Similar risk in men and women"]],
    risk: ["Antisocial personality disorder, schizophrenia, bipolar disorder.", "Stressful events in the past year.", "Prior drug-induced depression; family history of substance use disorders."],
    differential: [
      { name: "Substance intoxication or withdrawal", how: "Dysphoria typical of the syndrome (e.g., cocaine withdrawal) without predominating mood disturbance." },
      { id: "mdd", how: "Depression seen when not using, or persisting well after stopping." },
      { id: "depressive-due-to-amc", how: "The illness itself, not its treatment, causes the depression; both may apply." }
    ],
    pearls: ["Depressants on intoxication and stimulants on withdrawal are the classic causes.", "Steroids, interferon, L-dopa, methyldopa, reserpine, isotretinoin, efavirenz, varenicline and hormonal agents are implicated.", "No cannabis, caffeine or tobacco code for induced depression.", "Negative drug screens do not exclude it."],
    cmp: { symptoms: "Depressed mood or anhedonia", exclusions: "Independent depression; delirium only", prevalence: "0.26% general population", course: "Remits within days to weeks of abstinence" },
    clues: [["Core picture", "Deep depression during cocaine withdrawal that lifts within 2 weeks of abstinence"], ["Timing", "Starts during or soon after use; clears with abstinence"], ["Coding", "One combined code naming the use disorder and the induced disorder"]]
  },
  {
    id: "depressive-due-to-amc", ch: "ch04", sec: "s4-medical", pages: "206–209", critPages: "206",
    name: "Depressive disorder due to another medical condition", code: "F06.31 / F06.32 / F06.34", codeNote: "by specifier; code the medical condition first",
    codes: [
      ["F06.31", "With depressive features", "Full MDE criteria not met"],
      ["F06.32", "With major depressive–like episode", "Full MDE criteria met (except C)"],
      ["F06.34", "With mixed features", "Manic/hypomanic symptoms present but not predominant"]
    ],
    aka: ["secondary depression", "organic depression", "poststroke depression"],
    essence: "Prominent **depressed mood or anhedonia** that is the **direct pathophysiological consequence** of another medical condition.",
    duration: "Follows the medical condition",
    functioning: "Distress or impairment",
    mood: "Depressed mood or anhedonia",
    criteria: [
      ["A", "Prominent, persistent depressed mood or markedly diminished interest that predominates."],
      ["B", "Evidence that it is the direct pathophysiological consequence of a medical condition."],
      ["C", "Not better explained by another disorder (e.g., adjustment disorder to the illness)."],
      ["D", "**Criteria D–E.** Not only during delirium; distress or impairment."]
    ],
    specifiers: ["F06.31 with depressive features", "F06.32 with major depressive–like episode", "F06.34 with mixed features"],
    epi: [["Sex", "Follows the medical condition (lupus more in women; stroke more in middle-aged men)"], ["Poststroke MDE", "Lasts 9–11 months on average"], ["Suicide", "Risk assumed no lower, perhaps higher"]],
    risk: ["Stroke: acute risk with left frontal lesions.", "Parkinson’s: early onset, heavier motor burden, longer illness.", "TBI: female gender, prior depression, early symptoms, lower brain volume, unemployment."],
    differential: [
      { id: "mdd", how: "Prior episodes, no plausible mechanism or no temporal link." },
      { id: "substance-induced-depressive", how: "The treatment (steroids, interferon) may be the cause." },
      { name: "Adjustment disorder", how: "The illness acts as a stressor; fewer, less pervasive symptoms." },
      { name: "Demoralization", how: "Helplessness and hopelessness without anhedonia." },
      { name: "Delirium", how: "Depression only during delirium is not diagnosed separately." }
    ],
    pearls: ["Strongest evidence: stroke, TBI, neoplasm, Parkinson’s, Huntington’s, hypothyroidism, Cushing’s, pancreatic cancer.", "Depression may be the first sign of Huntington’s disease and pancreatic cancer.", "Code the medical condition first (e.g., E03.9 then F06.31)."],
    cmp: { symptoms: "Depressed mood or anhedonia", exclusions: "Another mental disorder; delirium only", prevalence: "—", course: "Tracks the medical condition" },
    clues: [["Core picture", "Profound depression starting 3 days after a left frontal stroke in a man with no psychiatric history"], ["Evidence", "Temporal link, atypical features, known mechanism"], ["Codes", "F06.31, F06.32 or F06.34"]]
  },
  {
    id: "other-specified-depressive", ch: "ch04", sec: "s4-other", pages: "209–210", critPages: "209–210",
    name: "Other specified depressive disorder", code: "F32.89", aka: ["recurrent brief depression", "short-duration depressive episode", "subthreshold depression"],
    essence: "Depressive symptoms causing distress or impairment that do not meet full criteria for a depressive disorder or adjustment disorder, with the **reason recorded**.",
    duration: "Varies by presentation",
    functioning: "Distress or impairment",
    mood: "Depressed mood or affect",
    criteria: [
      ["1", "**Recurrent brief depression**: depressed mood + four symptoms for **2–13 days**, at least monthly, for 12 months."],
      ["2", "**Short-duration depressive episode**: depressed affect + four symptoms for **4–13 days**."],
      ["3", "**Depressive episode with insufficient symptoms**: depressed affect + at least one symptom for **≥2 weeks**."],
      ["4", "**MDE superimposed on a psychotic disorder** (not schizoaffective)."]
    ],
    specifiers: ["Record the reason, e.g., “other specified depressive disorder, short-duration depressive episode”"],
    epi: [], risk: [],
    differential: [
      { id: "unspecified-depressive", how: "The reason is not recorded." },
      { name: "Adjustment disorder with depressed mood", how: "Stressor-related presentations go there first." },
      { id: "mdd", how: "Full five-of-nine, 2-week criteria." }
    ],
    pearls: ["Recurrent brief and short-duration depression both need five symptoms; they differ only in time.", "An MDE on schizophrenia is recorded here; an MDE within schizoaffective disorder is not."],
    cmp: { symptoms: "Subthreshold or atypical depression", exclusions: "Full criteria for a depressive disorder or adjustment disorder", prevalence: "—", course: "—" },
    clues: [["Core picture", "Five depressive symptoms for 3–5 days every month for over a year, unrelated to the cycle"], ["Code", "F32.89 with the reason recorded"]]
  },
  {
    id: "unspecified-depressive", ch: "ch04", sec: "s4-other", pages: "210", critPages: "210",
    name: "Unspecified depressive disorder", code: "F32.A", aka: [],
    essence: "Depressive symptoms causing distress or impairment without full criteria, when the clinician does **not specify the reason** or information is **insufficient** (e.g., the emergency room).",
    duration: "—", functioning: "Distress or impairment", mood: "Depressive",
    criteria: ["Depressive symptoms predominate and cause distress or impairment, but criteria for any depressive disorder or adjustment disorder are not met, and the reason is not specified or information is insufficient."],
    specifiers: [], epi: [], risk: [],
    differential: [{ id: "other-specified-depressive", how: "The reason is recorded." }, { id: "unspecified-mood", how: "Cannot choose between bipolar and depressive." }],
    pearls: ["F32.A replaced F32.9 for this category; F32.9 is now MDD, single episode, unspecified."],
    cmp: { symptoms: "Depressive symptoms", exclusions: "Full criteria for a specific disorder", prevalence: "—", course: "—" },
    clues: [["Code", "F32.A, reason not stated"]]
  }
]);

SP.comparePresets = (SP.comparePresets || []).concat([
  { label: "MDD vs persistent depressive disorder", ids: ["mdd", "pdd"] },
  { label: "DMDD vs bipolar I", ids: ["dmdd", "bipolar-i"] },
  { label: "MDD vs bipolar II", ids: ["mdd", "bipolar-ii"] },
  { label: "PMDD vs MDD", ids: ["pmdd", "mdd"] },
  { label: "Substance-induced vs medically caused depression", ids: ["substance-induced-depressive", "depressive-due-to-amc"] },
  { label: "PDD vs cyclothymic disorder", ids: ["pdd", "cyclothymic"] }
]);

SP.timeLadders = (SP.timeLadders || []).concat([
  { type: "ladder", title: "Chapter 4: depressive disorders", ticks: [[10, "2 d"], [18, "4 d"], [36, "2 wk"], [46, "1 mo"], [56, "2 mo"], [66, "3 mo"], [78, "1 yr"], [92, "2 yr"]], rows: [
    { label: "Recurrent brief depression (F32.89)", dx: "other-specified-depressive", from: 10, to: 36, color: "guide", span: "2–13 days, monthly × 12 months" },
    { label: "Short-duration depressive episode (F32.89)", dx: "other-specified-depressive", from: 18, to: 36, color: "guide", span: "4–13 days" },
    { label: "Major depressive episode", dx: "mdd", from: 36, to: 100, color: "drug", open: true, span: "≥2 weeks" },
    { label: "Gap between recurrent episodes", dx: "mdd", from: 0, to: 56, color: "clin", span: "≥2 months" },
    { label: "Disruptive mood dysregulation disorder", dx: "dmdd", from: 78, to: 100, color: "case", open: true, span: "≥12 months" },
    { label: "Persistent depressive disorder", dx: "pdd", from: 92, to: 100, color: "mech", open: true, span: "≥2 years (1 in youth)" }
  ], note: "PMDD: confirmed over 2 cycles. Substance-induced: persistence ≈1 month after stopping suggests independence. Peripartum onset: within 4 weeks of delivery. Full remission: 2 symptom-free months." }
]);
