/* Disorder library: Chapter 17, Neurocognitive Disorders (DSM-5-TR pp. 667–732).
   Codes are the current ones: the APA coding update of September 2022 (effective October 1, 2022), G20.C (2023),
   the Alzheimer’s criteria revision (2024) and G35.D (2025); checked through FY2027 (October 1, 2026). */
(function () {
  var SRC = "APA DSM-5-TR Neurocognitive Disorders Supplement and Updates (September 2022, 2023, 2024, 2025); ICD-10-CM through FY2027";
  function upd(text, year) { return [{ kind: "post", year: year || "2022", title: "Current coding", source: SRC, text: text }]; }
  var MAJ = "Probable or known etiology: disease code + F02.[A/B/C][0/11/18/2/3/4]; possible: F03.xx";
  var MILD = "Probable or known etiology: disease code + F06.70 (without) / F06.71 (with behavioral disturbance); possible: G31.84";

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "delirium", ch: "ch17", sec: "s17-delirium-criteria", pages: "672–678", critPages: "672",
      name: "Delirium", code: "F05 · F1x.x21 / .x31",
      codes: [
        ["F05", "Delirium due to another medical condition; due to multiple etiologies (code the condition first)", "Unchanged"],
        ["F10.121 / F10.221 / F10.921", "Alcohol intoxication delirium (mild / moderate-severe / no use disorder)", "Same pattern for F11–F19 .x21"],
        ["F10.131 / F10.231 / F10.931", "Alcohol withdrawal delirium", "Also F13.x31, F19.x31; opioid F11.x88"],
        ["F19.921", "Medication-induced delirium outside the classes (e.g., dexamethasone)", "Prescribed opioid F11.921, sedative F13.921, stimulant F15.921, ketamine F16.921"]
      ],
      aka: ["acute confusional state", "acute brain failure", "encephalopathy", "ICU psychosis", "delirium tremens"],
      essence: "An acute disturbance of **attention and awareness**, developing over **hours to days** and **fluctuating**, with another **cognitive** change, caused by a **medical condition, substance, medication, toxin** or several, and not in **coma**.",
      duration: "Hours to days to develop; acute (hours–days) or persistent (weeks–months); about 1 week in hospital",
      functioning: "Functional decline, institutional placement, higher mortality (38%–41% at 1 year)",
      mood: "Fear, anxiety, irritability, euphoria or apathy, with rapid shifts; worse at night",
      criteria: [
        ["A", "Disturbed attention (direct, focus, sustain, shift) with reduced awareness of the environment."],
        ["B", "Develops over a short period (hours to a few days), a change from baseline, fluctuating during the day."],
        ["C", "An additional cognitive disturbance (memory, orientation, language, visuospatial ability, perception)."],
        ["D", "Not better explained by another NCD; not in severely reduced arousal such as coma."],
        ["E", "Evidence of a direct physiological cause: medical condition, substance intoxication or withdrawal, medication, toxin, or multiple."]
      ],
      specifiers: ["Acute / persistent", "Hyperactive / hypoactive / mixed level of activity", "Substance intoxication, substance withdrawal, medication-induced, due to another medical condition, due to multiple etiologies"],
      epi: [["Community", "1%–2%"], ["Older adults in EDs", "8%–17%"], ["Hospital admission", "18%–35%"], ["ICU", "Up to 81%"], ["End of life", "Up to 88%"]],
      risk: ["Preexisting NCD, sensory impairment, older age, illness severity.", "Infection, depression, history of stroke, alcohol use.", "Male sex; functional impairment."],
      differential: [
        { id: "major-ncd", how: "Slow onset, preserved attention; delirium can sit on top of NCD." },
        { id: "brief-psychotic-disorder", how: "No disturbance of attention or awareness; no medical cause." },
        { id: "acute-stress", how: "Follows trauma; attention intact." },
        { id: "factitious", how: "Atypical picture and no medical or substance cause." }
      ],
      pearls: ["Test attention directly (months backward).", "Hypoactive delirium is common and missed.", "Treat the cause; manage delirium before NCD.", "Clinical teaching: visual hallucinations suggest a medical cause."],
      cmp: { symptoms: "Inattention, reduced awareness, fluctuation", exclusions: "Coma; explained by an NCD", prevalence: "1%–2% community; up to 81% ICU", course: "Usually recovers; 38%–41% die within 1 year" },
      clues: [["Core picture", "An 84-year-old, confused and drowsy on day 2 of pneumonia, worse at night"], ["Code", "J18.9 then F05 (pneumonia, then delirium due to it)"]],
      updates: upd("Hepatic encephalopathy in the examples is now **K76.82** (was K72.90). F05 and the substance codes are unchanged through October 2026.")
    },
    {
      id: "other-specified-delirium", ch: "ch17", sec: "s17-delirium-ddx", pages: "678", critPages: "678",
      name: "Other specified delirium", code: "F05",
      codes: [["F05", "Other specified delirium (R41.0 in the 2022 printing)", "Changed October 1, 2022"]],
      aka: ["subsyndromal delirium", "subsyndromal delirium-like disorder"],
      essence: "Delirium-like symptoms with distress or impairment that do not meet full criteria, with the **reason recorded**, e.g., **subsyndromal delirium**.",
      duration: "Varies", functioning: "Distress or impairment required", mood: "Varies",
      criteria: [["", "Symptoms characteristic of delirium predominate but full criteria for delirium or another NCD are not met; record the reason."]],
      specifiers: ["Record the reason (e.g., subsyndromal delirium)"],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["As for delirium."],
      differential: [{ id: "delirium", how: "Full criteria met." }, { id: "unspecified-delirium", how: "No reason recorded." }],
      pearls: ["Same code (F05) as delirium due to another medical condition.", "Subsyndromal delirium still predicts poor outcomes; look for a cause."],
      cmp: { symptoms: "Delirium-like, short of criteria", exclusions: "Full delirium", prevalence: "Not given", course: "Varies" },
      clues: [["Code", "F05"]],
      updates: upd("Coded **F05** since October 2022 (was R41.0). In September 2025 the APA reworded the example as **subsyndromal delirium-like disorder**.", "2022, 2025")
    },
    {
      id: "unspecified-delirium", ch: "ch17", sec: "s17-delirium-ddx", pages: "678", critPages: "678",
      name: "Unspecified delirium", code: "F05",
      codes: [["F05", "Unspecified delirium (R41.0 in the 2022 printing)", "Changed October 1, 2022"]],
      aka: [],
      essence: "Delirium-like symptoms with distress or impairment, reason **not specified** or **insufficient information** (e.g., the emergency room).",
      duration: "Not specified", functioning: "Distress or impairment required", mood: "Varies",
      criteria: [["", "The clinician chooses not to specify the reason, or there is not enough information for a more specific diagnosis."]],
      specifiers: [],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "other-specified-delirium", how: "Use when the reason can be stated." }, { id: "unspecified-ncd", how: "When NCD symptoms, not acute attention problems, predominate." }],
      pearls: ["Revise as soon as the cause is found."],
      cmp: { symptoms: "Insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "F05"]],
      updates: upd("Coded **F05** since October 2022 (was R41.0).")
    },
    {
      id: "major-ncd", ch: "ch17", sec: "s17-ncd-criteria", pages: "679–690", critPages: "679",
      name: "Major neurocognitive disorder", code: "F01 / F02 / F03 by etiology",
      codes: [
        ["Disease code + F02.xx", "Probable or known medical etiology", "4th character A/B/C severity (8 = unspecified)"],
        ["F01.xx", "Probably due to vascular disease", "Unspecified severity F01.5x"],
        ["F03.xx", "Possible etiology or unknown etiology", "Unspecified severity F03.9x"],
        ["5th–6th characters", "0 none · 11 agitation · 18 other · 2 psychotic · 3 mood · 4 anxiety", "Code each disturbance"]
      ],
      aka: ["dementia", "major cognitive disorder", "senility (lay term)"],
      essence: "**Significant** acquired decline in one or more domains, shown by a **concern** and **substantial** objective impairment, that **interferes with independence** (help with complex IADLs at least), not only during delirium and not better explained by another mental disorder.",
      duration: "No minimum; must be a decline from a previous level",
      functioning: "Needs help with IADLs (mild), basic ADLs (moderate) or full care (severe)",
      mood: "Depression, apathy, anxiety, psychosis and agitation are common",
      criteria: [
        ["A", "Significant decline in one or more domains: concern of the person, an informant or the clinician, and substantial impairment, ideally on standardized testing."],
        ["B", "Deficits interfere with independence (at minimum, help with complex IADLs)."],
        ["C", "Not exclusively during delirium."],
        ["D", "Not better explained by another mental disorder."]
      ],
      specifiers: ["Due to: Alzheimer’s, frontotemporal, Lewy body, vascular, TBI, substance/medication, HIV, prion, Parkinson’s, Huntington’s, another medical condition, multiple, unknown etiology", "Without / with behavioral disturbance (specify)", "Severity: mild, moderate, severe"],
      epi: [["Age 65", "1%–2%"], ["Age 85", "Up to 30%"], ["Sex", "More women (longer life)"]],
      risk: ["Age (strongest).", "Low education and literacy.", "Vascular risk factors, head injury, social determinants."],
      differential: [
        { id: "mild-ncd", how: "Independence preserved." },
        { id: "delirium", how: "Acute, fluctuating, inattentive; may coexist." },
        { id: "mdd", how: "Variable test performance; improves with treatment." }
      ],
      pearls: ["One domain is enough.", "Severity is coded in the 4th character since 2022.", "Look for reversible contributors.", "Ask about suicide and safety (driving, firearms)."],
      cmp: { symptoms: "Significant decline; loss of independence", exclusions: "Delirium only; other mental disorder", prevalence: "1%–2% at 65; 30% at 85", course: "By etiology: static, stepwise or progressive" },
      clues: [["Core picture", "A 78-year-old whose son now handles her money and medications"], ["Code", "Etiology + F02.A0 (example: probable Alzheimer’s, mild, no disturbance)"]],
      updates: upd("Since October 1, 2022: severity (A/B/C) and disturbance codes in F01/F02/F03; possible etiologies take **F03**; **F02.81** is no longer valid (use F02.811 or F02.818).")
    },
    {
      id: "mild-ncd", ch: "ch17", sec: "s17-ncd-criteria", pages: "680–690", critPages: "680",
      name: "Mild neurocognitive disorder", code: "F06.70 / F06.71 · G31.84",
      codes: [
        ["Disease code + F06.70", "Probable or known etiology, without behavioral disturbance", "Since October 2022"],
        ["Disease code + F06.71", "Probable or known etiology, with behavioral disturbance", "Since October 2022"],
        ["I67.9 + F06.7x", "Probably due to vascular disease", "Since October 2022"],
        ["G31.84", "Possible or unknown etiology", "Behavior recorded, not coded"]
      ],
      aka: ["mild cognitive impairment", "MCI", "minor neurocognitive disorder"],
      essence: "**Modest** acquired decline in one or more domains, shown by a **concern** and **modest** objective impairment, with **independence preserved** though tasks need more effort or compensation.",
      duration: "No minimum; a decline from a previous level",
      functioning: "Independent, with extra effort, strategies or accommodation",
      mood: "Depression, irritability and apathy are common early",
      criteria: [
        ["A", "Modest decline in one or more domains: a concern and modest impairment, ideally on standardized testing."],
        ["B", "Does not interfere with independence (complex IADLs preserved, possibly with more effort or compensation)."],
        ["C", "Not exclusively during delirium."],
        ["D", "Not better explained by another mental disorder."]
      ],
      specifiers: ["Due to: the same etiologies as major NCD", "Without / with behavioral disturbance"],
      epi: [["Age 65", "2%–10% (MCI)"], ["Age 85", "5%–25%"]],
      risk: ["As for major NCD; varies with etiology."],
      differential: [
        { id: "major-ncd", how: "Loss of independence." },
        { id: "mdd", how: "Variable deficits; mood first; improves with treatment." },
        { name: "Normal aging", how: "No objective decline beyond age and education norms." }
      ],
      pearls: ["Testing typically 1–2 SD below norms.", "Brief screens miss it in high-premorbid people.", "Serial testing helps.", "Etiology is often uncertain: G31.84."],
      cmp: { symptoms: "Modest decline; independence kept", exclusions: "Loss of independence", prevalence: "2%–10% at 65", course: "May progress, stay stable or improve" },
      clues: [["Core picture", "A retired engineer who keeps three calendars and needs longer to do his accounts"], ["Code", "G31.84 (etiology uncertain)"]],
      updates: upd("Since October 1, 2022, mild NCD with a probable or known etiology is coded with the disease code plus **F06.70 / F06.71**; **G31.84** is for possible or unknown etiology.")
    },
    {
      id: "ncd-alzheimers", ch: "ch17", sec: "s17-alzheimers", pages: "690–695", critPages: "690",
      name: "Major or mild NCD due to Alzheimer’s disease", code: "G30.9 + F02.xx",
      codes: [["G30.9 + F02.xx", "Major, probable Alzheimer’s disease", MAJ], ["F03.xx", "Major, possible Alzheimer’s disease", "No G30.9"], ["G30.9 + F06.70 / F06.71", "Mild, probable", "Probable only with a causative mutation"], ["G31.84", "Mild, possible", "Behavior recorded, not coded"]],
      aka: ["Alzheimer’s dementia", "dementia of the Alzheimer type", "senile dementia"],
      essence: "**Insidious, gradually progressive** NCD (two or more domains if major), typically **amnestic**, meeting **probable** criteria (causative mutation, or memory plus another domain with steady progression) or **possible** criteria.",
      duration: "Gradual over years; survival about 10 years after diagnosis",
      functioning: "Progressive loss of IADLs then basic ADLs; driving and safety concerns",
      mood: "Depression, irritability and apathy early; delusions, agitation and wandering later",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Insidious onset and gradual progression (at least two domains for major NCD)."],
        ["C", "Probable or possible Alzheimer’s disease criteria are met (mutation; or memory plus another domain and steady progression)."],
        ["D", "Not better explained by cerebrovascular, other neurodegenerative, substance or other disease."]
      ],
      specifiers: ["Probable / possible", "Without / with behavioral disturbance", "Severity (major)"],
      epi: [["65+ (US)", "11%"], ["85+ (US)", "32%"], ["Share of dementias", "60% to over 90%"], ["Onset", "70–89"]],
      risk: ["Age; APOE ε4; APP, PSEN1, PSEN2 mutations; Down syndrome.", "Low education, midlife hypertension, obesity, hearing loss.", "Late-life smoking, depression, inactivity, social isolation, diabetes."],
      differential: [
        { id: "ncd-lewy", how: "Early fluctuation, hallucinations, parkinsonism." },
        { id: "ncd-frontotemporal", how: "Early behavior or language change; memory spared." },
        { id: "ncd-vascular", how: "Stroke tied to onset; lesions on imaging." },
        { id: "mdd", how: "Variable deficits; improves with treatment." },
        { id: "ncd-amc", how: "Thyroid disease, B12 deficiency." }
      ],
      pearls: ["Recall does not improve with cues.", "Social cognition preserved until late.", "Over half start with behavioral symptoms.", "Mild NCD: probable only with a mutation."],
      cmp: { symptoms: "Amnestic; then language and visuospatial", exclusions: "Other primary etiology", prevalence: "60% to over 90% of dementias", course: "Steady progression; ~10 years" },
      clues: [["Core picture", "A 76-year-old who repeats questions and gets lost driving, needing help with bills"], ["Code", "G30.9, F02.A0"]],
      updates: [
        { kind: "post", year: "2024", title: "Mixed etiologies allowed", source: "APA DSM-5-TR Update, September 2024", text: "The **no evidence of mixed etiology** item was removed from the probable (major) and possible (mild) criteria, so Alzheimer’s disease can be one of several causes in **NCD due to multiple etiologies**." },
        { kind: "post", year: "2022", title: "Possible takes F03", source: SRC, text: "**Probable**: G30.9 + F02.xx (major) or G30.9 + F06.7x (mild). **Possible**: F03.xx (major) or G31.84 (mild), with no G30.9." }
      ]
    },
    {
      id: "ncd-frontotemporal", ch: "ch17", sec: "s17-ftd", pages: "695–699", critPages: "695",
      name: "Major or mild frontotemporal NCD", code: "G31.09 + F02.xx",
      codes: [["G31.09 + F02.xx", "Major, probable", MAJ], ["F03.xx", "Major, possible", "No G31.09"], ["G31.09 + F06.70 / F06.71", "Mild, probable", MILD], ["G31.84", "Mild, possible", ""]],
      aka: ["frontotemporal dementia", "FTD", "Pick’s disease", "behavioral-variant FTD", "primary progressive aphasia"],
      essence: "**Insidious, progressive** decline in **behavior** (three of disinhibition, apathy, lost empathy, perseveration, hyperorality, plus social-cognitive or executive decline) or **language**, with **memory and perceptual-motor function relatively spared**.",
      duration: "Gradual; median survival 6–11 years from onset",
      functioning: "Early severe impairment at work and home; legal and family problems before diagnosis",
      mood: "Apathy, elation, poor insight",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Insidious onset and gradual progression."],
        ["C", "Behavioral variant (three of five symptoms plus social-cognitive or executive decline) or language variant."],
        ["D", "Relative sparing of learning and memory and perceptual-motor function."],
        ["E", "Not better explained by another disease or disorder."]
      ],
      specifiers: ["Behavioral variant / language variant", "Probable (mutation or imaging) / possible", "Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Prevalence", "2–31 per 100,000"], ["Onset", "50s (20s–80s)"], ["Share of dementia (autopsy)", "About 5%"], ["Behavioral variant", "About 60%"]],
      risk: ["Family history in about 40%; autosomal dominant in about 10%.", "MAPT, GRN, C9orf72 mutations.", "Motor neuron disease shortens survival."],
      differential: [
        { id: "ncd-alzheimers", how: "Early memory loss; 10%–30% of cases are Alzheimer’s at autopsy." },
        { id: "bipolar-i", how: "Episodic; no progressive cognitive decline." },
        { id: "schizophrenia", how: "Earlier onset; no progressive decline." },
        { id: "ncd-vascular", how: "Cerebrovascular event tied to onset." }
      ],
      pearls: ["Often presents first to psychiatry.", "Formal tests may be near normal early.", "Outside the DSM: cholinesterase inhibitors do not help.", "Check for motor neuron disease."],
      cmp: { symptoms: "Disinhibition, apathy, hyperorality; or aphasia", exclusions: "Prominent early amnesia", prevalence: "2–31/100,000", course: "Faster than Alzheimer’s" },
      clues: [["Core picture", "A 56-year-old accountant who shoplifts sweets and shows no concern for his wife"], ["Code", "G31.09, F02.A18"]],
      updates: upd("Probable: **G31.09 + F02.xx**; possible: **F03.xx**. Mild: G31.09 + F06.7x or G31.84.")
    },
    {
      id: "ncd-lewy", ch: "ch17", sec: "s17-lewy", pages: "699–702", critPages: "699",
      name: "Major or mild NCD with Lewy bodies", code: "G31.83 + F02.xx",
      codes: [["G31.83 + F02.xx", "Major, probable", MAJ], ["F03.xx", "Major, possible", "No G31.83"], ["G31.83 + F06.70 / F06.71", "Mild, probable", MILD], ["G31.84", "Mild, possible", ""]],
      aka: ["dementia with Lewy bodies", "DLB", "Lewy body dementia", "NCDLB"],
      essence: "**Insidious, progressive** NCD with **fluctuating cognition**, **recurrent visual hallucinations** and **spontaneous parkinsonism** (core), and **REM sleep behavior disorder** and **neuroleptic sensitivity** (suggestive).",
      duration: "Gradual; survival 5.5–7.7 years",
      functioning: "More impaired than cognition predicts (motor and autonomic problems)",
      mood: "Apathy, anxiety, depression, delusions",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Insidious onset and gradual progression."],
        ["C", "Probable: two core, or one suggestive plus one or more core. Possible: one core, or suggestive only."],
        ["D", "Not better explained by another disease or disorder."]
      ],
      specifiers: ["Probable / possible", "Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Older adults", "0%–1.2%"], ["Share of dementia", "4.2% community; 7.5% clinics"], ["Onset", "Mid-70s"], ["Sex", "Incidence ~3× in men 65+ (one study)"]],
      risk: ["Familial aggregation in some; most have no family history.", "Genetic risk comparable to Alzheimer’s and Parkinson’s disease."],
      differential: [
        { id: "ncd-parkinsons", how: "PD at least 1 year before NCD." },
        { id: "ncd-alzheimers", how: "Memory first; no early fluctuation or parkinsonism." },
        { id: "delirium", how: "Fluctuation can mimic it; look for a precipitant." },
        { id: "ncd-vascular", how: "Stroke-linked onset." }
      ],
      pearls: ["Up to 50% have severe neuroleptic sensitivity.", "Up to 25% never develop parkinsonism.", "Ask about dream enactment.", "DaT scan has core-level weight."],
      cmp: { symptoms: "Fluctuation, visual hallucinations, parkinsonism, RBD", exclusions: "PD ≥1 year before NCD", prevalence: "4.2%–7.5% of dementias", course: "Progressive; 5.5–7.7 years" },
      clues: [["Core picture", "A 75-year-old with good and bad days, seeing children in the garden, and a shuffling gait"], ["Code", "G31.83, F02.A2"]],
      updates: upd("Probable: **G31.83 + F02.xx**; possible: **F03.xx**. Mild: G31.83 + F06.7x or G31.84.")
    },
    {
      id: "ncd-vascular", ch: "ch17", sec: "s17-vascular", pages: "702–706", critPages: "702",
      name: "Major or mild vascular NCD", code: "F01.xx",
      codes: [["F01.xx", "Major, probably due to vascular disease", "No cerebrovascular code; unspecified severity F01.5x"], ["F03.xx", "Major, possibly due to vascular disease", ""], ["I67.9 + F06.70 / F06.71", "Mild, probable", "Since October 2022"], ["G31.84", "Mild, possible", ""]],
      aka: ["vascular dementia", "multi-infarct dementia", "poststroke dementia", "subcortical ischemic vascular dementia", "Binswanger disease"],
      essence: "NCD **temporally linked to cerebrovascular events** or with prominent **complex attention, processing speed and executive** decline, with cerebrovascular disease on history, examination or imaging **sufficient** to explain it.",
      duration: "Acute after stroke, stepwise, or slowly progressive",
      functioning: "Physical deficits add disability",
      mood: "Depression, abulia, emotional lability; vascular depression",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Onset temporally related to cerebrovascular events, or prominent decline in complex attention and frontal-executive function."],
        ["C", "Cerebrovascular disease on history, examination and/or imaging sufficient to account for the deficits."],
        ["D", "Not better explained by another brain or systemic disease."]
      ],
      specifiers: ["Probable (imaging, documented event, or clinical plus genetic) / possible", "Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Rank", "Second most common NCD"], ["80–89 (US)", "4.09%"], ["After stroke", "20%–30% dementia within 3 months"]],
      risk: ["Hypertension, diabetes, smoking, obesity, cholesterol, homocysteine.", "Atrial fibrillation; cerebral amyloid angiopathy.", "CADASIL (genetic)."],
      differential: [
        { id: "ncd-alzheimers", how: "Early memory loss without matching lesions; often coexists (diagnose both)." },
        { id: "ncd-lewy", how: "Fluctuation, hallucinations, parkinsonism." },
        { id: "mdd", how: "Cognition began with the depression." },
        { id: "delirium", how: "Entirely explained by delirium." }
      ],
      pearls: ["Strategic infarcts: angular gyrus, thalamus, basal forebrain.", "Two or more lacunes outside the brainstem count.", "MRI preferred.", "Mild: I67.9 + F06.7x."],
      cmp: { symptoms: "Slowing, executive dysfunction, focal signs", exclusions: "Other brain disease", prevalence: "Second most common", course: "Stepwise or gradual" },
      clues: [["Core picture", "A man with two strokes and a stepwise decline in planning and speed"], ["Code", "F01.B0 (moderate, no disturbance)"]],
      updates: upd("Major: probable **F01.xx** (no medical code), possible **F03.xx**. Mild: probable **I67.9 + F06.7x**, possible **G31.84**.")
    },
    {
      id: "ncd-tbi", ch: "ch17", sec: "s17-tbi", pages: "706–712", critPages: "706",
      name: "Major or mild NCD due to traumatic brain injury", code: "S06.2XAS + F02.xx",
      codes: [["S06.2XAS + F02.xx", "Major NCD due to TBI", "S06.2X9S in the 2022 printing"], ["S06.2XAS + F06.70 / F06.71", "Mild NCD due to TBI", "Since October 2022"]],
      aka: ["post-traumatic dementia", "post-concussional cognitive disorder", "dementia pugilistica"],
      essence: "NCD that begins **immediately** after a TBI (loss of consciousness, posttraumatic amnesia, confusion or neurological signs) or after recovery of consciousness, and **persists** past the acute period.",
      duration: "Persists past the acute post-injury period; mild TBI usually resolves in 3–12 months",
      functioning: "Problems with work, independent living and relationships; neuromotor deficits",
      mood: "Irritability, aggression, depression, apathy, anxiety; raised suicide risk",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Evidence of a TBI with loss of consciousness, posttraumatic amnesia, disorientation and confusion, or neurological signs."],
        ["C", "Presents immediately after the injury or recovery of consciousness and persists past the acute period."]
      ],
      specifiers: ["Without / with behavioral disturbance", "Severity of the NCD (not of the TBI)"],
      epi: [["US TBIs a year", "More than 2.87 million"], ["Leading cause", "Falls"], ["Living with TBI disability (US)", "About 3.17 million"]],
      risk: ["Age over 40, lower pre-injury ability, pre-injury depression.", "Severity, longer posttraumatic amnesia, abnormal early imaging.", "APOE ε4; pre-injury substance use disorder."],
      differential: [
        { id: "ptsd", how: "Similar cognitive symptoms; often coexists." },
        { id: "mdd", how: "Treat and reassess, especially after mild TBI." },
        { id: "factitious", how: "Poor effort; severity out of keeping with injury." }
      ],
      pearls: ["Grade the TBI with Table 2; grade the NCD by function.", "Complicated mild TBI behaves like moderate.", "Screen for suicide risk.", "Older adults do worse after mild TBI."],
      cmp: { symptoms: "Attention, speed, memory, executive, social cognition", exclusions: "Late onset after injury", prevalence: "Depends on severity", course: "Most severe early, then improves" },
      clues: [["Core picture", "A 28-year-old slowed, with angry outbursts, 8 months after a crash with 2 hours of LOC"], ["Code", "S06.2XAS, F02.A11"]],
      updates: upd("The TBI sequela code changed from **S06.2X9S** to **S06.2XAS**; mild NCD due to TBI now takes **F06.70 / F06.71** after it.")
    },
    {
      id: "ncd-substance", ch: "ch17", sec: "s17-substance", pages: "712–717", critPages: "712",
      name: "Substance/medication-induced major or mild NCD", code: "F10.26 / F10.27 / F1x.188 …",
      codes: [
        ["F10.26 / F10.96", "Alcohol, major NCD, amnestic-confabulatory type (moderate-severe / no use disorder)", "No code with mild use disorder"],
        ["F10.27 / F10.97", "Alcohol, major NCD, nonamnestic-confabulatory type", "No code with mild use disorder"],
        ["F18.17 / F18.27 / F18.97", "Inhalant, major NCD", ""],
        ["F13.27 / F13.97", "Sedative, hypnotic or anxiolytic, major NCD", "No code with mild use disorder"],
        ["F1x.188 / .288 / .988", "Mild NCD: alcohol, inhalant, sedative, stimulant, cocaine, other", "Stimulants and cocaine: mild only"],
        ["F19.17 / .27 / .97", "Other or unknown substance, major NCD", "e.g., unknown substance F19.97"]
      ],
      aka: ["alcohol-related dementia", "Korsakoff syndrome", "Wernicke-Korsakoff syndrome", "alcoholic dementia", "solvent encephalopathy"],
      essence: "NCD that **persists beyond intoxication and acute withdrawal**, caused by a substance or medication **capable** of producing it, with a course that fits use and **abstinence**.",
      duration: "Beyond intoxication and withdrawal; persistent if still significant after extended abstinence",
      functioning: "Reduced cognitive efficiency; motor syndromes (ataxia) add impairment",
      mood: "Irritability, anxiety and dysphoria (depressants); rebound depression and apathy (stimulants)",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Not only during delirium; persists beyond the usual intoxication and acute withdrawal."],
        ["C", "The substance and its duration and extent of use can cause the impairment."],
        ["D", "Time course fits use and abstinence (stable or improving after abstinence)."],
        ["E", "Not due to another medical condition or better explained by another mental disorder."]
      ],
      specifiers: ["Persistent", "Alcohol: amnestic-confabulatory / nonamnestic-confabulatory type", "Recorded but not coded: severity (major), behavioral disturbance"],
      epi: [["Alcohol use disorder, early abstinence", "Mild NCD in 30%–40% (first 2 months)"], ["Inhalant NCD (US)", "<1%"]],
      risk: ["Older age, longer use, use past 50.", "Nutritional deficits, liver disease, vascular risk.", "Transketolase deficiency (amnestic type)."],
      differential: [
        { id: "alcohol-withdrawal", how: "Deficits only during withdrawal." },
        { id: "delirium", how: "Inattention during intoxication or withdrawal." },
        { id: "ncd-tbi", how: "Head injuries are common in substance users." },
        { id: "ncd-hiv", how: "Shared risk through injection use." }
      ],
      pearls: ["Outside the DSM: give thiamine.", "Many improve with abstinence before 50.", "Korsakoff: amnesia with confabulation.", "Methamphetamine can cause vascular NCD."],
      cmp: { symptoms: "Executive and memory deficits", exclusions: "Only during intoxication or withdrawal", prevalence: "30%–40% mild NCD early in alcohol abstinence", course: "Often improves with abstinence" },
      clues: [["Core picture", "A malnourished man who cannot learn new facts and fills gaps with stories"], ["Code", "F10.26"]],
      updates: upd("Codes unchanged. In September 2024 the APA aligned the coding note: severity (major) and behavioral specifiers (major and mild) are recorded but not coded.", "2024")
    },
    {
      id: "ncd-hiv", ch: "ch17", sec: "s17-hiv", pages: "717–721", critPages: "717",
      name: "Major or mild NCD due to HIV infection", code: "B20 + F02.xx",
      codes: [["B20 + F02.xx", "Major NCD due to HIV infection", MAJ], ["B20 + F06.70 / F06.71", "Mild NCD due to HIV infection", "Since October 2022"]],
      aka: ["HIV-associated neurocognitive disorder", "HAND", "HIV-associated dementia", "AIDS dementia complex"],
      essence: "NCD in **documented HIV infection**, typically **subcortical** (slowing, executive and learning deficits), not better explained by **secondary brain disease** or other causes.",
      duration: "Variable: resolves, stable, slowly or rapidly worsening, or fluctuating",
      functioning: "Can undermine antiretroviral adherence",
      mood: "Depression and substance use are common comorbidities",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Documented HIV infection."],
        ["C", "Not better explained by non-HIV conditions, including PML or cryptococcal meningitis."],
        ["D", "Not due to another medical condition or better explained by a mental disorder."]
      ],
      specifiers: ["Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Any disturbance", "One-third to over half"], ["Mild NCD", "About one-quarter of disturbances"], ["Major NCD", "<5%"]],
      risk: ["Older age, less education, female sex.", "Low CD4 nadir, high CSF viral load, inflammation.", "Substance use, MDD, diabetes, hypertension."],
      differential: [
        { name: "Opportunistic infection or CNS lymphoma", how: "Sudden onset or worsening." },
        { id: "ncd-alzheimers", how: "More progressive decline in older adults." },
        { id: "ncd-substance", how: "e.g., methamphetamine." },
        { id: "delirium", how: "Frequent across the HIV course." }
      ],
      pearls: ["Asymptomatic impairment is not an NCD.", "Abrupt change: look for another cause.", "Over half of people with HIV in the US are over 50."],
      cmp: { symptoms: "Slowing, executive, learning", exclusions: "Secondary brain disease", prevalence: "Mild NCD ~25% of disturbances", course: "Variable" },
      clues: [["Core picture", "A 52-year-old on ART, slowed at work, with normal naming, still independent"], ["Code", "B20, F06.70"]],
      updates: upd("Mild NCD due to HIV infection: **B20 + F06.70 / F06.71** since October 2022 (G31.84 in the 2022 printing).")
    },
    {
      id: "ncd-prion", ch: "ch17", sec: "s17-prion", pages: "721–723", critPages: "721",
      name: "Major or mild NCD due to prion disease", code: "A81.9 + F02.xx",
      codes: [["A81.9 + F02.xx", "Major NCD due to prion disease", MAJ], ["A81.9 + F06.70 / F06.71", "Mild NCD due to prion disease", "Rare: progression is fast"]],
      aka: ["Creutzfeldt-Jakob disease", "CJD", "variant CJD", "spongiform encephalopathy", "kuru", "fatal insomnia"],
      essence: "**Insidious** onset with often **rapid** progression, plus **motor features** (myoclonus, ataxia) or **biomarker** evidence of prion disease.",
      duration: "Major NCD in as little as 6 months; rarely over 2 years",
      functioning: "Rapid loss of all function",
      mood: "Variant CJD: early low mood, withdrawal, anxiety",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Insidious onset; rapid progression is common."],
        ["C", "Motor features (myoclonus, ataxia) or biomarker evidence."],
        ["D", "Not due to another medical condition or better explained by another mental disorder."]
      ],
      specifiers: ["Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Sporadic CJD", "1–2 per million a year"], ["Peak age", "About 67"]],
      risk: ["PRNP mutations (up to 15%); codon 129 polymorphism.", "Iatrogenic: dura grafts, corneas, instruments, growth hormone.", "Bovine spongiform encephalopathy (variant CJD)."],
      differential: [{ id: "ncd-alzheimers", how: "Much slower, without early myoclonus and ataxia." }, { id: "ncd-lewy", how: "Slower; fluctuations and hallucinations." }],
      pearls: ["MRI DWI: most sensitive.", "RT-QuIC: most specific.", "EEG: periodic sharp complexes.", "Confirm only by biopsy or autopsy."],
      cmp: { symptoms: "Rapid dementia, myoclonus, ataxia", exclusions: "Slower course", prevalence: "1–2/million/year", course: "Death within months" },
      clues: [["Core picture", "A 66-year-old bedbound within 5 months, with startle jerks"], ["Code", "A81.9, F02.C0"]],
      updates: upd("Mild NCD due to prion disease: **A81.9 + F06.70 / F06.71** since October 2022.")
    },
    {
      id: "ncd-parkinsons", ch: "ch17", sec: "s17-parkinsons", pages: "723–726", critPages: "723",
      name: "Major or mild NCD due to Parkinson’s disease", code: "G20.C + F02.xx",
      codes: [["G20.C + F02.xx", "Major, probably due to Parkinson’s disease", "G20 in the 2022 printing"], ["F03.xx", "Major, possibly due to", ""], ["G20.C + F06.70 / F06.71", "Mild, probably due to", ""], ["G31.84", "Mild, possibly due to", ""]],
      aka: ["Parkinson’s disease dementia", "PDD", "Parkinson’s disease with mild cognitive impairment"],
      essence: "Gradual cognitive decline in **established Parkinson’s disease**; **probably** due to PD when there is **no mixed etiology** and PD **clearly precedes** the NCD.",
      duration: "Gradual; mild NCD early, major NCD later",
      functioning: "Motor symptoms, depression, psychosis and apathy worsen function",
      mood: "Apathy, depression, anxiety; hallucinations and delusions",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Occurs in the setting of established Parkinson’s disease."],
        ["C", "Insidious onset and gradual progression."],
        ["D", "Not due to another medical condition or better explained by another mental disorder."]
      ],
      specifiers: ["Probably due to (both: no mixed etiology, PD precedes) / possibly due to (one)", "Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Eventual major NCD in PD", "Up to 80%"], ["Mild NCD in PD", "25%–27%"]],
      risk: ["Older age at onset, severe disease, gait symptoms.", "Orthostatic hypotension, REM sleep behavior disorder.", "GBA mutations, APOE ε4."],
      differential: [
        { id: "ncd-lewy", how: "Cognition before or within 1 year of parkinsonism." },
        { id: "ncd-alzheimers", how: "No early motor features." },
        { id: "ncd-vascular", how: "Vascular parkinsonism; course tied to strokes." },
        { id: "medication-induced-parkinsonism", name: "Antipsychotic-induced parkinsonism", how: "Motor signs after a dopamine blocker." }
      ],
      pearls: ["The 1-year rule.", "Use motor-free tests.", "DaT scan separates Lewy body dementias from Alzheimer’s.", "Outside the DSM: pimavanserin is approved for PD psychosis."],
      cmp: { symptoms: "Attention, executive, speed, visuospatial", exclusions: "Cognition before PD (consider Lewy bodies)", prevalence: "Up to 80% of PD eventually", course: "Gradual" },
      clues: [["Core picture", "A 72-year-old with PD for 8 years now needing help with his pills"], ["Code", "G20.C, F02.A0"]],
      updates: upd("Parkinson’s disease is **G20.C** since October 1, 2023 (was G20).", "2023")
    },
    {
      id: "ncd-huntingtons", ch: "ch17", sec: "s17-huntingtons", pages: "726–729", critPages: "726",
      name: "Major or mild NCD due to Huntington’s disease", code: "G10 + F02.xx",
      codes: [["G10 + F02.xx", "Major NCD due to Huntington’s disease", MAJ], ["G10 + F06.70 / F06.71", "Mild NCD due to Huntington’s disease", "Since October 2022"]],
      aka: ["Huntington’s chorea", "Huntington’s disease dementia"],
      essence: "Gradual **executive-predominant** NCD with **clinically established** Huntington’s disease or **risk** from family history or genetic testing.",
      duration: "Gradual; survival 10–20 years after diagnosis",
      functioning: "Early occupational decline; later gait, dysarthria and chorea add care needs",
      mood: "Irritability, apathy, anxiety, depression, OCD symptoms; high suicide risk",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Insidious onset and gradual progression."],
        ["C", "Clinically established Huntington’s disease, or risk from family history or genetic testing."],
        ["D", "Not due to another medical condition or better explained by another mental disorder."]
      ],
      specifiers: ["Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Worldwide", "2.7 per 100,000"], ["Western countries", "5.7 per 100,000"], ["Asia", "0.40 per 100,000"], ["Onset", "35–45"]],
      risk: ["Autosomal dominant CAG expansion in HTT (chromosome 4); 40+ fully penetrant."],
      differential: [
        { id: "mdd", how: "Genetic testing or motor signs settle it." },
        { id: "ncd-vascular", how: "Executive slowing can look similar." },
        { name: "Wilson’s disease, tardive dyskinesia, Sydenham’s chorea, lupus", how: "Other choreas." }
      ],
      pearls: ["Psychiatric signs can precede chorea by a decade.", "Juvenile form: rigidity more than chorea.", "Screen for suicide often."],
      cmp: { symptoms: "Executive slowing, chorea, irritability", exclusions: "Other choreas", prevalence: "2.7/100,000", course: "10–20 years" },
      clues: [["Core picture", "A 42-year-old with irritability, poor planning and fidgety hands whose father had chorea"], ["Code", "G10, F06.71"]],
      updates: upd("Mild NCD due to Huntington’s disease: **G10 + F06.70 / F06.71** since October 2022.")
    },
    {
      id: "ncd-amc", ch: "ch17", sec: "s17-amc", pages: "729–730", critPages: "729",
      name: "Major or mild NCD due to another medical condition", code: "Condition + F02.xx",
      codes: [["Condition code + F02.xx", "Major NCD (e.g., G35.D multiple sclerosis, F02.B2)", "MS is G35.D since October 2025"], ["Condition code + F06.70 / F06.71", "Mild NCD", "Since October 2022"]],
      aka: ["reversible dementia", "secondary dementia", "dementia due to hypothyroidism", "MS-related cognitive impairment"],
      essence: "NCD that is the **pathophysiological consequence** of another medical condition (tumor, subdural hematoma, NPH, hypothyroidism, B12 or thiamine deficiency, neurosyphilis, lupus, organ failure, MS, epilepsy).",
      duration: "Follows the medical condition",
      functioning: "Varies with the condition",
      mood: "Varies",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Evidence that the NCD is the pathophysiological consequence of another medical condition."],
        ["C", "Not better explained by another mental disorder or another specific NCD."]
      ],
      specifiers: ["Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Prevalence", "Depends on the condition"]],
      risk: ["The underlying condition."],
      differential: [
        { id: "ncd-alzheimers", how: "Persistent deficits after successful treatment suggest another etiology." },
        { id: "delirium", how: "Acute, fluctuating attention." },
        { id: "ncd-multiple", how: "More than one cause." }
      ],
      pearls: ["Timing and treatment response are the best evidence.", "Screen thyroid, B12, syphilis, imaging.", "Normal-pressure hydrocephalus: gait, continence, cognition."],
      cmp: { symptoms: "Depends on the cause", exclusions: "Another specific NCD", prevalence: "Varies", course: "Tracks the medical condition" },
      clues: [["Core picture", "Slowed thinking that improves after hypothyroidism is treated"], ["Code", "E03.9, F02.A0 (example)"]],
      updates: upd("Multiple sclerosis in the coding example is **G35.D** since October 1, 2025 (the manual prints G35).", "2025")
    },
    {
      id: "ncd-multiple", ch: "ch17", sec: "s17-multiple-unknown", pages: "731", critPages: "731",
      name: "Major or mild NCD due to multiple etiologies", code: "All causes + F02.xx (+ F01.xx)",
      codes: [["Etiology codes + F02.xx once", "Major NCD due to multiple etiologies", "Do not list vascular disease with them"], ["+ F01.xx", "If vascular disease contributes", ""], ["+ substance code", "If a substance contributes", "e.g., F10.27"], ["Etiology codes + F06.70 / F06.71", "Mild NCD (I67.9 for vascular)", "Since October 2022"]],
      aka: ["mixed dementia", "mixed Alzheimer’s and vascular dementia"],
      essence: "NCD with evidence of **more than one** etiological process (substances excluded from the count), each established by its own criteria.",
      duration: "Varies", functioning: "Mixed pathology often means faster decline", mood: "Varies",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Evidence of more than one etiological process, excluding substances."],
        ["C", "Not better explained by another mental disorder; not only during delirium."]
      ],
      specifiers: ["Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Mixed Alzheimer’s plus vascular (European autopsy)", "5.5%"]],
      risk: ["Age: many etiologies increase together."],
      differential: [{ id: "ncd-alzheimers", how: "Single etiology." }, { id: "ncd-unknown", how: "Cause presumed but not identifiable." }],
      pearls: ["Code F02 once.", "Vascular goes in F01, not as a medical code.", "The 2024 revision makes explicit that Alzheimer’s can be one of the etiologies."],
      cmp: { symptoms: "Mixed features", exclusions: "Single etiology", prevalence: "Common in the oldest old", course: "Often faster" },
      clues: [["Core picture", "Probable Alzheimer’s disease with a later stroke and further decline"], ["Code", "G30.9, F02.B0, F01.B0"]],
      updates: upd("The manual’s example (G30.9, B20, F02.81, F01.51, F10.27) becomes **G30.9, B20, F02.B__, F01.B__, F10.27** under current codes, with the disturbance suffix chosen by type (e.g., **F02.B11, F01.B11** for agitation).")
    },
    {
      id: "ncd-unknown", ch: "ch17", sec: "s17-multiple-unknown", pages: "731–732 (added 2022)",
      name: "Major or mild NCD due to unknown etiology", code: "F03.xx · G31.84",
      codes: [["F03.xx", "Major NCD due to unknown etiology (e.g., F03.B2)", "Added September 2022"], ["G31.84", "Mild NCD due to unknown etiology", "Added September 2022"]],
      aka: ["unspecified dementia", "dementia NOS"],
      essence: "NCD criteria are met and a medical cause is **presumed**, but the specific etiology **cannot be established**.",
      duration: "Varies", functioning: "As for major or mild NCD", mood: "Varies",
      criteria: [
        ["A", "Criteria for major or mild NCD are met."],
        ["B", "Evidence of a presumed medical condition, combination of conditions, or conditions plus substances, but the specific cause cannot be established."],
        ["C", "Not better explained by another disorder or substance; not only during delirium."]
      ],
      specifiers: ["Without / with behavioral disturbance", "Severity (major)"],
      epi: [["Prevalence", "Not given"]],
      risk: ["Not applicable."],
      differential: [{ id: "unspecified-ncd", how: "Full criteria not met, or too uncertain." }, { id: "ncd-multiple", how: "Each cause identified." }],
      pearls: ["Added by the APA in 2022; not in the printed manual.", "Revise when the etiology becomes clear."],
      cmp: { symptoms: "Established NCD", exclusions: "Identified etiology", prevalence: "Not given", course: "Varies" },
      clues: [["Code", "F03.B2 (moderate, psychotic) or G31.84"]],
      updates: upd("A **new diagnosis** added in the September 2022 update (replacing the *unspecified etiology* subtype).")
    },
    {
      id: "unspecified-ncd", ch: "ch17", sec: "s17-multiple-unknown", pages: "732", critPages: "732",
      name: "Unspecified neurocognitive disorder", code: "R41.9",
      codes: [["R41.9", "Unspecified neurocognitive disorder", "No etiology codes"]],
      aka: ["cognitive disorder NOS"],
      essence: "NCD symptoms causing distress or impairment **predominate** but **full criteria** for no NCD are met, and the etiology cannot be determined with enough certainty.",
      duration: "Not specified", functioning: "Distress or impairment required", mood: "Varies",
      criteria: [["", "Symptoms characteristic of an NCD predominate without meeting full criteria; the precise etiology cannot be determined with sufficient certainty."]],
      specifiers: ["Behavior recorded, not coded"],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "ncd-unknown", how: "Full NCD criteria met; cause unknown." }, { id: "unspecified-delirium", how: "Acute attention problems predominate." }],
      pearls: ["Use while the order of motor and cognitive symptoms in PD or Lewy body disease is unclear.", "Revise as information accrues."],
      cmp: { symptoms: "NCD symptoms short of criteria", exclusions: "Specific NCDs", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "R41.9"]],
      updates: upd("R41.9 unchanged; the definition was revised in September 2022.")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Delirium vs major NCD", ids: ["delirium", "major-ncd"] },
    { label: "Major vs mild NCD", ids: ["major-ncd", "mild-ncd"] },
    { label: "Alzheimer’s vs frontotemporal vs Lewy body NCD", ids: ["ncd-alzheimers", "ncd-frontotemporal", "ncd-lewy"] },
    { label: "Lewy bodies vs Parkinson’s disease", ids: ["ncd-lewy", "ncd-parkinsons"] },
    { label: "Alzheimer’s vs vascular NCD", ids: ["ncd-alzheimers", "ncd-vascular"] },
    { label: "Unknown etiology vs unspecified NCD", ids: ["ncd-unknown", "unspecified-ncd"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 17: time rules", ticks: [[0, "0"], [25, "1 wk"], [50, "1 mo"], [75, "6 mo"], [100, "1 yr+"]], rows: [
      { label: "Delirium onset", dx: "delirium", from: 0, to: 8, color: "case", span: "Hours to a few days" },
      { label: "Delirium, acute", dx: "delirium", from: 0, to: 15, color: "case", span: "Hours or days (~1 week in hospital)" },
      { label: "Delirium, persistent", dx: "delirium", from: 25, to: 75, color: "case", span: "Weeks or months" },
      { label: "Prion disease", dx: "ncd-prion", from: 25, to: 75, color: "dx", span: "Major NCD in ~6 months" },
      { label: "Lewy bodies vs Parkinson’s", dx: "ncd-parkinsons", from: 75, to: 100, color: "guide", span: "PD ≥1 year before NCD" },
      { label: "Mild TBI recovery", dx: "ncd-tbi", from: 25, to: 100, color: "hy", span: "Resolves by 3–12 months" },
      { label: "Alcohol, early abstinence", dx: "ncd-substance", from: 50, to: 75, color: "drug", span: "Mild NCD in 30%–40% (first 2 mo)" }
    ], note: "Neurodegenerative NCDs have no minimum duration: they require insidious onset and gradual progression." }
  ]);
})();
