/* Disorder library: Chapter 8, Dissociative Disorders (DSM-5-TR pp. 329–348). */
SP.disorders = (SP.disorders || []).concat([
  {
    id: "did", ch: "ch08", sec: "s8-did-criteria", pages: "330–337", critPages: "330",
    name: "Dissociative identity disorder", code: "F44.81", aka: ["DID", "multiple personality disorder", "possession-form DID"],
    essence: "**Two or more distinct personality states** (or possession) with discontinuity of self and agency, plus **recurrent amnesia** for everyday events, personal information or trauma.",
    duration: "No duration criterion",
    functioning: "From apparently minimal to chronic, severe impairment",
    mood: "Chronic posttraumatic dysphoria; rapid state-linked shifts over minutes to hours",
    criteria: [
      ["A", "Two or more distinct personality states or possession, with discontinuity in sense of self and agency, observed or reported."],
      ["B", "Recurrent gaps in recall inconsistent with ordinary forgetting."],
      ["C", "Distress or impairment."],
      ["D", "Not accepted cultural or religious practice; in children, not imaginary playmates."],
      ["E", "Not due to a substance (blackouts) or medical condition (complex partial seizures)."]
    ],
    specifiers: [],
    epi: [["12-month prevalence", "1.5% (small US study)"], ["Sex", "Women predominate in adult clinics only"], ["Trauma", "≈90% report early abuse and neglect"], ["Suicide", ">70% of outpatients have attempted"]],
    risk: ["Early, severe, repeated trauma (neglect, abuse) usually before age 5–6, in disturbed attachment.", "Painful early medical procedures, war, trafficking, severe bullying.", "Genetics ≈45%–50% of dissociative symptom variance."],
    differential: [
      { id: "dissociative-amnesia", how: "Amnesia without identity states." },
      { id: "bipolar-ii", how: "Episodes of days, decreased need for sleep; DID shifts last minutes to hours." },
      { id: "schizophrenia", how: "Delusional explanations, mostly auditory hallucinations, low hypnotizability, no amnesia." },
      { id: "ptsd", how: "Amnesia limited to the trauma; most with DID also have PTSD." },
      { name: "Borderline personality disorder", how: "Pervasive, persistent pattern rather than variability across identities." },
      { name: "Malingering or factitious disorder", how: "Dramatic, media-based, stereotyped presentations; enjoys the diagnosis." }
    ],
    pearls: ["Most switching is subtle.", "Ask about time loss and unexplained possessions.", "Highest hypnotizability of any clinical group.", "Suicide attempts in >70%."],
    cmp: { symptoms: "Identity states + recurrent amnesia", exclusions: "Cultural practice, imaginary playmates, substances, seizures", prevalence: "1.5% (12-month)", course: "Chronic; triggered by new trauma or reminders" },
    clues: [["Core picture", "A nurse with time loss, clothes she never bought and internal voices, misdiagnosed as rapid-cycling bipolar"], ["Code", "F44.81"]]
  },
  {
    id: "dissociative-amnesia", ch: "ch08", sec: "s8-amnesia-criteria", pages: "337–343", critPages: "337",
    name: "Dissociative amnesia", code: "F44.0 / F44.1", codes: [["F44.0", "Dissociative amnesia", "Without dissociative fugue"], ["F44.1", "Dissociative amnesia, with dissociative fugue", "Purposeful travel or bewildered wandering with amnesia for identity"]],
    aka: ["psychogenic amnesia", "dissociative fugue", "fugue state"],
    essence: "Inability to recall **important autobiographical information**, usually **traumatic or stressful**, inconsistent with ordinary forgetting; localized, selective, systematized, generalized or continuous.",
    duration: "No duration criterion; generalized episodes may resolve quickly or become chronic",
    functioning: "Limited to severe; generalized amnesia impairs everything",
    mood: "Often unaware of the gaps; depression and turmoil as memories return",
    criteria: [
      ["A", "Inability to recall important autobiographical information, usually traumatic or stressful, inconsistent with ordinary forgetting."],
      ["B", "Distress or impairment."],
      ["C", "Not due to a substance or neurological condition (seizures, transient global amnesia, TBI)."],
      ["D", "Not better explained by DID, PTSD, acute stress disorder, somatic symptom disorder or a neurocognitive disorder."]
    ],
    specifiers: ["With dissociative fugue (F44.1)"],
    epi: [["12-month prevalence", "1.8% (small US study)"], ["Forms", "Localized and selective most common; generalized rare"], ["Age", "Any age; hard to assess under 12"]],
    risk: ["Severe acute or chronic trauma; childhood sexual abuse by a relative.", "Combat, trafficking, captivity, refugee status.", "Profound psychological conflict; genetics ≈50%."],
    differential: [
      { id: "did", how: "Identity states and ongoing everyday time loss." },
      { id: "ptsd", how: "Amnesia only for the trauma." },
      { name: "Transient global amnesia", how: "Neurological, anterograde, identity preserved." },
      { name: "Substance blackouts", how: "Only during intoxication." },
      { name: "Seizures", how: "Nonpurposive wandering, EEG abnormalities." },
      { name: "Major neurocognitive disorder", how: "Global decline; identity spared until late; anterograde deficits." },
      { name: "Malingering", how: "No reliable test; context of gain; can coexist." }
    ],
    pearls: ["A reversible retrieval deficit, usually retrograde.", "Fugue is a specifier: F44.1.", "Suicide risk when amnesia remits suddenly."],
    cmp: { symptoms: "Autobiographical gaps, no identity states", exclusions: "Substances, seizures, TGA, TBI; DID, PTSD, neurocognitive disorders", prevalence: "1.8%", course: "Acute or chronic; may recur" },
    clues: [["Core picture", "A man found at a bus station 400 km from home who cannot say his name, with a normal workup"], ["Code", "F44.0; F44.1 with fugue"]]
  },
  {
    id: "dpdr", ch: "ch08", sec: "s8-dpdr-criteria", pages: "343–347", critPages: "343",
    name: "Depersonalization/derealization disorder", code: "F48.1", aka: ["DPDR", "depersonalization disorder", "derealization"],
    essence: "Persistent or recurrent **depersonalization** (detached from self) and/or **derealization** (world unreal) with **intact reality testing**, causing distress or impairment.",
    duration: "Persistent or recurrent; no fixed duration",
    functioning: "Interpersonal and occupational impairment from hypoemotionality and disconnection",
    mood: "Anxiety and depression common; robotic demeanor despite distress",
    criteria: [
      ["A", "Persistent or recurrent depersonalization, derealization or both."],
      ["B", "Reality testing intact."],
      ["C", "Distress or impairment."],
      ["D", "Not due to a substance or medical condition (seizures)."],
      ["E", "Not better explained by schizophrenia, panic disorder, MDD, acute stress disorder, PTSD or another dissociative disorder."]
    ],
    specifiers: [],
    epi: [["Transient episodes", "≈50% of adults"], ["Disorder", "1%–2% (1-month, UK)"], ["Onset", "Mean 16; 5% after 25"], ["Drug-precipitated", "≈15%"]],
    risk: ["Emotional abuse and neglect.", "Harm-avoidant temperament.", "Severe stress, depression, panic, cannabis, hallucinogens, ketamine, MDMA, salvia."],
    differential: [
      { id: "panic-attack", how: "DPDR only during panic attacks." },
      { id: "mdd", how: "DPDR only during a depressive episode." },
      { id: "schizophrenia", how: "Nihilistic delusions without reality testing." },
      { id: "ptsd", how: "Dissociative subtype tied to trauma reminders." },
      { id: "did", how: "DPDR within DID is not diagnosed separately." },
      { name: "Seizures and other medical causes", how: "Onset after 40, atypical course: EEG, imaging." }
    ],
    pearls: ["“It feels as if” — reality testing intact.", "Onset after 40 needs a medical workup.", "PTSD comorbidity is low."],
    cmp: { symptoms: "Depersonalization and/or derealization, reality testing intact", exclusions: "Panic, MDD, PTSD, psychosis, substances, seizures", prevalence: "1%–2%", course: "Often persistent" },
    clues: [["Core picture", "A student who feels she watches herself in a film and the world is behind glass, knowing it is real"], ["Code", "F48.1"]]
  },
  {
    id: "other-specified-dissociative", ch: "ch08", sec: "s8-other", pages: "347–348", critPages: "347–348",
    name: "Other specified dissociative disorder", code: "F44.89", aka: ["dissociative trance", "acute dissociative reaction", "coercive persuasion"],
    essence: "Dissociative symptoms causing distress or impairment that do not meet a specific disorder, with the **reason recorded**.",
    duration: "Acute reactions typically less than 1 month; others chronic",
    functioning: "Clinically significant distress or impairment",
    mood: "Varies",
    criteria: [["", "Examples: **mixed dissociative syndromes** (identity disturbance or possession without amnesia); **identity disturbance due to coercive persuasion**; **acute dissociative reactions to stressful events** (<1 month); **dissociative trance**."]],
    specifiers: [],
    epi: [],
    risk: [],
    differential: [
      { id: "did", how: "Identity states with recurrent amnesia." },
      { id: "acute-stress", how: "9 of 14 symptoms, 3 days to 1 month after Criterion A trauma." },
      { id: "unspecified-dissociative", how: "Reason not given." }
    ],
    pearls: ["Four named examples: M-CAT.", "Trance within accepted practice is not a disorder."],
    cmp: { symptoms: "Atypical dissociative presentations", exclusions: "Specific dissociative disorders", prevalence: "—", course: "Varies" },
    clues: [["Example", "Possession episodes without memory gaps"], ["Code", "F44.89"]]
  },
  {
    id: "unspecified-dissociative", ch: "ch08", sec: "s8-other", pages: "348", critPages: "348",
    name: "Unspecified dissociative disorder", code: "F44.9",
    essence: "Dissociative symptoms causing distress or impairment, without a specific diagnosis, when the reason is not given or information is insufficient.",
    duration: "Varies",
    functioning: "Clinically significant distress or impairment",
    mood: "Varies",
    criteria: [["", "Dissociative symptoms predominate; criteria for a specific disorder are not met; reason not given or information insufficient (e.g., emergency settings)."]],
    specifiers: [],
    epi: [],
    risk: [],
    differential: [{ id: "other-specified-dissociative", how: "Use when the reason can be stated." }],
    pearls: ["Common in emergency settings."],
    cmp: { symptoms: "Dissociative symptoms, reason not given", exclusions: "Specific dissociative disorders", prevalence: "—", course: "Varies" },
    clues: [["Example", "An unresponsive patient in the emergency department with too little history"], ["Code", "F44.9"]]
  }
]);

SP.comparePresets = (SP.comparePresets || []).concat([
  { label: "DID vs schizophrenia", ids: ["did", "schizophrenia"] },
  { label: "DID vs bipolar II disorder", ids: ["did", "bipolar-ii"] },
  { label: "DID vs dissociative amnesia", ids: ["did", "dissociative-amnesia"] },
  { label: "Dissociative amnesia vs PTSD", ids: ["dissociative-amnesia", "ptsd"] },
  { label: "DPDR vs panic disorder", ids: ["dpdr", "panic-disorder"] }
]);
