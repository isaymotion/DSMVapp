/* Disorder library: Chapter 11, Elimination Disorders (DSM-5-TR pp. 399–406).
   Codes as printed in the 2022 manual; checked against ICD-10-CM through FY2027 (October 1, 2026): unchanged. */
(function () {
  var SRC = "ICD-10-CM FY2025–FY2027 code tables; APA DSM-5-TR coding updates through September 2025";
  function upd(text) { return [{ kind: "post", year: "2026", title: "Codes checked through October 2026", source: SRC, text: text }]; }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "enuresis", ch: "ch11", sec: "s11-enuresis-criteria", pages: "399–402", critPages: "399",
      name: "Enuresis", code: "F98.0",
      codes: [["F98.0", "Enuresis not due to a substance or known physiological condition", "Unchanged through October 2026"]],
      aka: ["bedwetting", "nocturnal enuresis", "monosymptomatic enuresis", "daytime wetting", "urinary incontinence in children"],
      essence: "Repeated voiding of urine into **bed or clothes**, involuntary or intentional, at least **twice a week for 3 consecutive months** or with **distress or impairment**, from a developmental age of **5**, not due to a **substance or medical condition**.",
      duration: "At least 3 consecutive months at ≥2 times a week (or distress or impairment)",
      functioning: "Limits on sleepovers and camp, low self-esteem, peer ostracism, caregiver anger and punishment",
      mood: "Shame and embarrassment are common; most children have no comorbid mental disorder",
      criteria: [
        ["A", "Repeated voiding of urine into bed or clothes, involuntary or intentional."],
        ["B", "At least twice a week for at least 3 consecutive months, or clinically significant distress or impairment."],
        ["C", "Chronological age at least 5 years (or equivalent developmental level)."],
        ["D", "Not attributable to a substance (e.g., diuretic, antipsychotic) or another medical condition (e.g., diabetes, spina bifida, seizure disorder)."]
      ],
      specifiers: ["Nocturnal only", "Diurnal only", "Nocturnal and diurnal"],
      epi: [["Age 5", "About 5%–10% (nocturnal)"], ["Age 10", "About 3%–5%"], ["15 and older", "About 1%"], ["Daytime, age 7", "3.2%–9.0%"], ["Sex", "Nocturnal: males almost 2:1; daytime: more often female"]],
      risk: ["Delayed toileting and psychosocial stress.", "Mismatch of nighttime urine production, bladder capacity and arousal from sleep.", "Family history: 3.6× with an enuretic mother, 10.1× with paternal incontinence.", "Developmental delay, learning disabilities, ADHD."],
      differential: [
        { name: "Neurogenic bladder or structural anomaly", how: "Spina bifida, tethered cord, posterior urethral valves, ectopic ureter explain the wetting." },
        { name: "Diabetes mellitus or diabetes insipidus", how: "Polyuria with thirst; check urine glucose and specific gravity." },
        { name: "Urinary tract infection", how: "Do not diagnose during an acute infection; diagnose if wetting persists after treatment." },
        { name: "Medication side effect", how: "Antipsychotics (e.g., clozapine) or diuretics; note as a side effect unless wetting preceded the drug." },
        { id: "osa", how: "Snoring and pauses; about half become dry after adenotonsillectomy." },
        { id: "encopresis", how: "Soiling; often coexists, especially with constipation." }
      ],
      pearls: ["Distress or impairment can replace the frequency rule.", "Most common subtype: nocturnal only (monosymptomatic).", "Remits spontaneously 5%–10% a year.", "Ask about bowels: treat constipation first.", "Ask about punishment at home."],
      cmp: { symptoms: "Wetting bed or clothes", exclusions: "Substances (diuretics, antipsychotics); medical causes", prevalence: "5%–10% at age 5; 1% at 15+", course: "Remits 5%–10% a year; about 1% into adulthood" },
      clues: [["Core picture", "A 7-year-old boy who has never been dry at night and refuses school camp"], ["Code", "F98.0"]],
      updates: upd("**F98.0** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "encopresis", ch: "ch11", sec: "s11-encopresis-criteria", pages: "402–405", critPages: "402",
      name: "Encopresis", code: "F98.1",
      codes: [["F98.1", "Encopresis not due to a substance or known physiological condition", "Unchanged through October 2026"]],
      aka: ["soiling", "fecal soiling", "fecal incontinence in children", "functional constipation with overflow"],
      essence: "Repeated passage of feces into **inappropriate places**, involuntary or intentional, at least **once a month for 3 months**, from a developmental age of **4**, not due to a substance (laxatives) or medical condition **except through constipation**.",
      duration: "At least 3 months at ≥1 event a month",
      functioning: "Shame, avoidance of school and camp, peer ostracism, lower quality of life and family functioning",
      mood: "Shame; anxiety or oppositional features may drive withholding or deliberate soiling",
      criteria: [
        ["A", "Repeated passage of feces into inappropriate places (clothing, floor), involuntary or intentional."],
        ["B", "At least one such event each month for at least 3 months."],
        ["C", "Chronological age at least 4 years (or equivalent developmental level)."],
        ["D", "Not attributable to a substance (e.g., laxatives) or another medical condition, except through a mechanism involving constipation."]
      ],
      specifiers: ["With constipation and overflow incontinence", "Without constipation and overflow incontinence"],
      epi: [["High-income countries", "1%–4% of children"], ["Some Asian countries", "2%–8%"], ["Ages 4–6", ">4%"], ["Ages 10–12", "<2%"], ["Sex", "Equal under 5; boys 2:1 to 6:1 when older"]],
      risk: ["Painful defecation and the withholding cycle.", "Inadequate or inconsistent toilet training; stress such as starting school or a new sibling.", "Male sex, pre-adolescent age, anxiety, depression, behavioral disorders, bullying, low SES.", "Early abuse or neglect."],
      differential: [
        { name: "Chronic diarrhea", how: "Incontinence from diarrhea is not encopresis." },
        { name: "Spina bifida or anal stenosis", how: "Neurological or structural incontinence is not encopresis." },
        { name: "Laxative effect", how: "Incontinence exclusively from laxatives is excluded." },
        { id: "oppositional-defiant", name: "Oppositional defiant or conduct disorder", how: "Often coexists with deliberate soiling without constipation; diagnose both." },
        { id: "anorexia", how: "Laxative misuse for weight control causing accidents." },
        { id: "enuresis", how: "Often coexists, especially without constipation." }
      ],
      pearls: ["No distress-or-impairment alternative.", "Most cases have constipation with overflow.", "Reported “diarrhea” may be overflow.", "Diagnosis is clinical; impaction on exam supports the constipation subtype.", "Higher after early abuse or neglect: take a careful psychosocial history."],
      cmp: { symptoms: "Feces in inappropriate places", exclusions: "Substances (laxatives); medical causes not acting through constipation", prevalence: "1%–4% in high-income countries", course: "Can persist for years with exacerbations" },
      clues: [["Core picture", "A 6-year-old with soiled underwear, large hard stools every week and leg-crossing withholding"], ["Code", "F98.1"]],
      updates: upd("**F98.1** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "other-specified-elimination", ch: "ch11", sec: "s11-other", pages: "405", critPages: "405",
      name: "Other specified elimination disorder", code: "N39.498 / R15.9",
      codes: [["N39.498", "With urinary symptoms (other specified urinary incontinence)", "Unchanged through October 2026"], ["R15.9", "With fecal symptoms (full incontinence of feces)", "Unchanged through October 2026"]],
      aka: ["low-frequency enuresis", "subthreshold encopresis"],
      essence: "Elimination symptoms causing distress or impairment without full criteria, **with the reason recorded**, e.g., **low-frequency enuresis**.",
      duration: "Varies",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Symptoms characteristic of an elimination disorder with distress or impairment, not meeting full criteria; record the reason (e.g., low-frequency enuresis)."]],
      specifiers: ["Record the reason after the name", "Urinary or fecal symptoms (decides the code)"],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["As for enuresis and encopresis."],
      differential: [
        { id: "enuresis", how: "Distress or impairment may already meet Criterion B." },
        { id: "encopresis", how: "Monthly for 3 months." },
        { id: "unspecified-elimination", how: "When no reason is recorded." }
      ],
      pearls: ["Urinary: N39.498; fecal: R15.9.", "Check full enuresis criteria first: distress can replace frequency."],
      cmp: { symptoms: "Subthreshold wetting or soiling", exclusions: "Full criteria for a specific disorder", prevalence: "Not given", course: "Varies" },
      clues: [["Core picture", "A 5-year-old soiling monthly for 2 months, with distress"], ["Code", "R15.9 (fecal) or N39.498 (urinary)"]],
      updates: upd("**N39.498** and **R15.9** are unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "unspecified-elimination", ch: "ch11", sec: "s11-other", pages: "405–406", critPages: "405",
      name: "Unspecified elimination disorder", code: "R32 / R15.9",
      codes: [["R32", "With urinary symptoms (unspecified urinary incontinence)", "Unchanged through October 2026"], ["R15.9", "With fecal symptoms (full incontinence of feces)", "Unchanged through October 2026"]],
      aka: [],
      essence: "Elimination symptoms causing distress or impairment without full criteria, when the reason is **not specified** or information is **insufficient** (e.g., the emergency room).",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "The clinician chooses not to specify the reason, or there is insufficient information for a more specific diagnosis."]],
      specifiers: ["Urinary or fecal symptoms (decides the code)"],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "other-specified-elimination", how: "Use when the reason can be stated." }],
      pearls: ["Urinary: R32; fecal: R15.9 (same as other specified).", "Revise once the picture is clear."],
      cmp: { symptoms: "Insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "R32 (urinary) or R15.9 (fecal)"]],
      updates: upd("**R32** and **R15.9** are unchanged through the October 2026 ICD-10-CM update.")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Enuresis vs encopresis", ids: ["enuresis", "encopresis"] },
    { label: "Other specified vs unspecified elimination disorder", ids: ["other-specified-elimination", "unspecified-elimination"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 11: elimination disorders", ticks: [[0, "0"], [33.3, "1 mo"], [66.7, "2 mo"], [100, "3 mo"]], rows: [
      { label: "Enuresis", dx: "enuresis", from: 0, to: 100, color: "guide", span: "≥2×/week for 3 consecutive months (or distress or impairment)" },
      { label: "Encopresis", dx: "encopresis", from: 0, to: 100, color: "case", span: "≥1×/month for 3 months" }
    ], note: "Minimum developmental age: 5 for enuresis, 4 for encopresis." }
  ]);
})();
