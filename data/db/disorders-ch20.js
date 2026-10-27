/* Disorder library: Chapter 20, Other Mental Disorders and Additional Codes (DSM-5-TR pp. 803–806).
   Codes as printed in the 2022 manual; checked against ICD-10-CM through FY2027 (October 1, 2026): F06.8, F09, F99 and
   Z03.89 unchanged since FY2016 (secondary code pages agreeing; confirm against the official tabular list). No APA
   DSM-5-TR update touches this chapter (checked October 27, 2026). The chapter has no criteria sets: each entry's
   `criteria` holds the definition and recording rule as lettered items. No duration rules, so no time ladder. */
(function () {
  var SRC = "ICD-10-CM FY2025–FY2027 code tables (icd10data.com, Find-A-Code and AAPC code pages; official CDC files not consulted directly); APA DSM-5-TR coding updates, September 2022–2025; checked October 27, 2026";
  var NC = "Unchanged through October 2026";
  var APA = " No APA DSM-5-TR coding update (September 2022, 2023, 2024 or 2025) touches pp. 803–806, and no 2026 APA update existed on the check date. Confirm against the official tabular list in force on the date of service.";
  var ICD11_AMC = " **ICD-11** (outside the DSM): the nearest home is the **6E6** block of secondary mental or behavioural syndromes (6E60–6E69, residuals **6E6Y** and **6E6Z**), coded together with the underlying disease; the mapping is the app’s own inference.";
  var ICD11_F99 = " **ICD-11** (outside the DSM): nearest equivalents are **6E8Y** (other specified) and **6E8Z** (unspecified) mental, behavioural or neurodevelopmental disorders; the mapping is the app’s own inference.";
  function upd(text) { return [{ kind: "post", year: "2026", title: "Codes checked through October 2026", source: SRC, text: text }]; }
  var NOMEAS = [["Prevalence", "Not given in the manual (p. 803–805)"], ["How often the code is used", "No usable 2020–2026 figures found (app research note)"]];
  var ZCODES = { name: "Z codes in the next chapter", how: "A psychosocial or relational problem without a mental disorder (for example, conflict at work or in a marriage) takes a Z code from “Other conditions that may be a focus of clinical attention”, not a residual category or Z03.89 (app guidance)." };
  var PROV = { name: "A specific diagnosis marked “(provisional)”", how: "When confirmation of a specific disorder is strongly expected once information arrives, Section I prefers that diagnosis with “(provisional)” added (Section I, p. 24)." };

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "other-specified-mental-amc", ch: "ch20", sec: "s20-amc-specified", pages: "803–804", critPages: "803–804",
      name: "Other specified mental disorder due to another medical condition", code: "F06.8",
      codes: [["F06.8", "Other specified mental disorders due to known physiological condition (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["other specified mental disorder due to AMC", "F06.8", "organic dissociative disorder (ICD-10-CM inclusion term, outside the DSM)", "secondary mental syndrome, other specified (ICD-11 6E6Y, outside the DSM)"],
      essence: "Psychiatric symptoms judged a **direct physiological consequence** of a **medical condition**, causing **distress or impairment**, that fit **no specific “due to another medical condition” disorder**, and the clinician **states the symptom picture**. The **medical condition is coded and listed first**. The manual’s one example: **dissociative symptoms** with **complex partial seizures** (pp. 803–804).",
      duration: "No duration requirement",
      functioning: "Clinically significant distress, or impairment socially, at work or in another important area is required (p. 803)",
      mood: "Whatever the medical condition produces; if the picture is a depressive, bipolar, anxiety or psychotic syndrome, the specific “due to another medical condition” disorder is used instead (app guidance)",
      criteria: [
        ["What", "Symptoms typical of a mental disorder due to a medical condition are the dominant feature and bring clinically significant distress or impairment (p. 803)."],
        ["Cause", "The symptoms have been judged a **direct physiological effect** of the medical condition (p. 803)."],
        ["But", "Full criteria for every **specific** mental disorder attributable to a medical condition are not met (pp. 803–804)."],
        ["Choice", "The clinician elects to **give the reason**, by naming the symptom manifestation (p. 804)."],
        ["Record", "Medical condition with its own code **first**, then F06.8 with the condition’s name put in place of “another medical condition” and the symptom picture after a comma: G40.209 complex partial seizures, F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms (p. 804)."]
      ],
      specifiers: [],
      epi: NOMEAS,
      risk: ["App guidance: the “risk factor” is the medical condition itself; the manual names only seizure disorders (complex partial seizures) in its example (p. 804)."],
      differential: [
        { id: "psychotic-due-to-amc", how: "Prominent hallucinations or delusions caused by the condition meet that specific set; use it, not F06.8 (p. 803)." },
        { id: "depressive-due-to-amc", how: "A persistent depressed mood or anhedonia caused by the condition has its own specific category (p. 803)." },
        { id: "bipolar-due-to-amc", how: "Elevated, expansive or irritable mood with increased energy caused by the condition is coded there." },
        { id: "anxiety-due-to-amc", how: "Panic or anxiety as the main physiological effect of the condition is coded there." },
        { id: "ocrd-due-to-amc", how: "Obsessions, compulsions or related symptoms caused by the condition are coded there." },
        { id: "catatonic-due-to-amc", how: "Three or more catatonic features from a medical cause take that specific code." },
        { id: "delirium", how: "Disturbed attention and awareness that fluctuates points to delirium, a specific disorder that comes first in the differential." },
        { id: "ncd-amc", how: "Cognitive decline from the condition is a mild or major neurocognitive disorder, not F06.8; mild NCD due to a medical condition now has its own codes F06.70/F06.71 (Chapter 17)." },
        { id: "personality-change-amc", how: "A lasting change in personality caused by the condition has its own specific category." },
        { id: "other-specified-dissociative", how: "Dissociation **without** a medical cause, short of a dissociative disorder, stays in Chapter 8; dissociation caused by seizures comes here, because Chapter 8 has no medical-cause disorder (p. 804; app reading)." },
        { id: "unspecified-mental-amc", how: "Same situation when the clinician does not name the symptom picture or lacks the information to do so (F09; p. 805)." }
      ],
      pearls: ["Two lines, two codes, the **medical condition first** (pp. 803–804).", "Put the condition’s actual name into the disorder name, then add the symptom picture after a comma (p. 804).", "Dissociation from complex partial seizures is the manual’s only listed example (p. 804).", "Check every specific “due to another medical condition” disorder first; F06.8 is what is left over (app guidance).", "Since October 2022, mild neurocognitive disorder due to a medical condition is F06.70/F06.71, not F06.8 (app research note)."],
      cmp: { symptoms: "Symptoms from a medical condition with distress or impairment; symptom picture stated", exclusions: "Any specific “due to another medical condition” disorder, delirium, NCD", prevalence: "Not given", course: "Follows the medical condition (app guidance)" },
      clues: [["Core picture", "A man with temporal lobe epilepsy whose peri-ictal detachment episodes, confirmed on video-EEG, have made him stop driving and working"], ["Order", "Seizure code first"], ["Code", "G40.209 then F06.8"]],
      updates: upd("**F06.8** (ICD-10-CM title “Other specified mental disorders due to known physiological condition”; billable, no subcodes) carries a **code first the underlying physiological condition** note; its inclusion terms include epileptic psychosis NOS, organic dissociative disorder, organic emotionally labile (asthenic) disorder and OCD-related disorder due to a known physiological condition. It is **unchanged from FY2016 through FY2027** (October 1, 2026). The neighbor that changed: since October 1, 2022, **mild neurocognitive disorder** due to a medical condition is coded **F06.70/F06.71** (Chapter 17). **G40.209**, the seizure code in the example, is unchanged through FY2026 with no FY2027 change documented." + APA + ICD11_AMC)
    },
    {
      id: "unspecified-mental-amc", ch: "ch20", sec: "s20-amc-unspecified", pages: "805", critPages: "805",
      name: "Unspecified mental disorder due to another medical condition", code: "F09",
      codes: [["F09", "Unspecified mental disorder due to known physiological condition (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["unspecified mental disorder due to AMC", "F09", "organic brain syndrome NOS (ICD-10-CM inclusion term, outside the DSM)", "organic mental disorder NOS (ICD-10-CM inclusion term, outside the DSM)", "secondary mental syndrome, unspecified (ICD-11 6E6Z, outside the DSM)"],
      essence: "Psychiatric symptoms from a **medical condition** causing **distress or impairment**, fitting **no specific “due to another medical condition” disorder**, when the clinician **does not state the reason**, including when there is **too little information** (for example, in an **emergency room**). The **medical condition is coded first**; **no symptom phrase** is added (p. 805).",
      duration: "No duration requirement",
      functioning: "Clinically significant distress, or impairment socially, at work or in another important area is required (p. 805)",
      mood: "Not characterized: that is the point of the category (app guidance)",
      criteria: [
        ["What", "Symptoms typical of a mental disorder due to a medical condition dominate and bring clinically significant distress or impairment (p. 805)."],
        ["But", "The picture falls short of every **specific** disorder due to a medical condition (p. 805)."],
        ["Choice", "The clinician elects **not to give the reason**, which covers having **insufficient information** for a more specific diagnosis, as in an emergency room (p. 805)."],
        ["Record", "Medical condition with its own code **first**, then F09 with the condition’s name put in place of “another medical condition”, and nothing after it: G40.209 complex partial seizures, F09 unspecified mental disorder due to complex partial seizures (p. 805)."]
      ],
      specifiers: [],
      epi: NOMEAS,
      risk: ["App guidance: any medical condition judged to cause the symptoms; the chapter intro uses B20 HIV disease and the category text uses complex partial seizures as examples (pp. 803, 805)."],
      differential: [
        { id: "other-specified-mental-amc", how: "Use F06.8 once the symptom picture can be named, and add it after a comma (p. 804)." },
        { id: "delirium", how: "Rule out first: fluctuating attention and awareness is a specific disorder, not an unspecified one." },
        { id: "psychotic-due-to-amc", how: "When the prominent cluster is clearly psychotic, the specific medical-cause disorder applies." },
        { id: "depressive-due-to-amc", how: "When the picture proves to be a depressive syndrome, revise to this specific diagnosis." },
        { id: "ncd-amc", how: "Cognitive decline is coded as a neurocognitive disorder; ICD-10-CM also bars pairing F09 with F06.7- (app research note)." },
        { id: "unspecified-psychotic", how: "Psychotic symptoms not attributed to a medical cause take this Chapter 2 placeholder; ICD-10-CM bars pairing F09 with F29 (app research note)." },
        { id: "unspecified-mental-disorder", how: "When no medical cause has been judged responsible, the plain F99 placeholder applies instead; ICD-10-CM bars using F99 with F09." }
      ],
      pearls: ["Same first line as F06.8; the second line has **no symptom tail** and the code is **F09** (pp. 804–805).", "Insufficient information, such as in an emergency room, is named as a reason to use it (p. 805).", "A placeholder: revise once the picture is characterized (Section I, pp. 22–23).", "Delirium is a specific disorder and must be ruled out before F09 (app guidance)."],
      cmp: { symptoms: "Symptoms from a medical condition with distress or impairment; reason not stated or information insufficient", exclusions: "Any specific “due to another medical condition” disorder, delirium, NCD", prevalence: "Not given", course: "Placeholder; revise when the picture is clear (app guidance)" },
      clues: [["Core picture", "A woman with HIV disease brought to the emergency department with new behavioral change, alert and oriented, history unobtainable"], ["Order", "Medical code first"], ["Code", "B20 then F09"]],
      updates: upd("**F09** (ICD-10-CM title “Unspecified mental disorder due to known physiological condition”; billable) carries a **code first** note and an **Excludes1** note against **F06.7-** (mild neurocognitive disorder due to a known physiological condition) and **F29** (unspecified psychosis not due to a substance or known physiological condition). It is **unchanged from FY2016 through FY2027** (October 1, 2026)." + APA + ICD11_AMC)
    },
    {
      id: "other-specified-mental-disorder", ch: "ch20", sec: "s20-other-specified", pages: "805", critPages: "803, 805",
      name: "Other specified mental disorder", code: "F99",
      codes: [["F99", "Mental disorder, not otherwise specified (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["F99 other specified", "mental illness NOS (ICD-10-CM inclusion term, outside the DSM)", "other specified mental, behavioural or neurodevelopmental disorder (ICD-11 6E8Y, outside the DSM)"],
      essence: "A **mental disorder** (distress or impairment) that meets **no specific disorder**, fits **no chapter-specific residual category**, and for which **no other diagnosis applies**; the clinician **records the reason** after the name. Same code, **F99**, as unspecified mental disorder (pp. 803, 805).",
      duration: "No duration requirement",
      functioning: "Clinically significant distress, or impairment socially, at work or in another important area is required (pp. 803, 805)",
      mood: "Not a mood category; a recognizable mood picture belongs to Chapters 3–4 and their residuals (app guidance)",
      criteria: [
        ["What", "Symptoms typical of a mental disorder dominate and bring clinically significant distress or impairment (p. 805)."],
        ["But", "Full criteria for any **specific** mental disorder are not met (p. 805)."],
        ["And", "All four conditions on p. 803 hold: it is a mental disorder; no specific Section II disorder fits; it meets the definition of **no other specified or unspecified category** in the earlier chapters; and no other mental disorder diagnosis applies."],
        ["Choice", "The clinician elects to **give the reason** the presentation falls short (p. 805)."],
        ["Record", "“Other specified mental disorder” followed by the specific reason, code F99 (p. 805). The manual gives no example presentation."]
      ],
      specifiers: [],
      epi: NOMEAS,
      risk: [],
      differential: [
        { id: "other-specified-depressive", how: "A subthreshold depressive picture belongs to Chapter 4’s residual, so condition 3 on p. 803 rules out F99." },
        { id: "other-specified-anxiety", how: "Subthreshold anxiety belongs to Chapter 5’s residual." },
        { id: "other-specified-psychotic", how: "Subthreshold psychosis belongs to Chapter 2’s residual." },
        { id: "other-specified-trauma", how: "A stress reaction short of a specific disorder belongs to Chapter 7’s residual." },
        { id: "adjustment", how: "Distress or impairment after an identifiable stressor is usually adjustment disorder, a specific diagnosis." },
        { id: "other-specified-dissociative", how: "Dissociation without a medical cause stays in Chapter 8." },
        { id: "other-specified-somatic", how: "Distressing bodily symptoms or health worry short of a specific disorder belong to Chapter 9." },
        { id: "other-specified-pd", how: "Enduring trait patterns short of a specific personality disorder belong to Chapter 18." },
        { id: "other-specified-paraphilic", how: "A named atypical sexual interest with harm or distress belongs to Chapter 19." },
        { id: "other-specified-mental-amc", how: "If the symptoms are judged a direct effect of a medical condition, use F06.8 (or F09) with the condition first; ICD-10-CM bars F99 alongside F09." },
        { id: "unspecified-mental-disorder", how: "Same code; use the unspecified name when the reason is not stated (p. 805)." },
        ZCODES
      ],
      pearls: ["Shares **F99** with unspecified mental disorder; the written name shows which one was meant (p. 805).", "The third of the four conditions does most of the work: almost every picture belongs to some chapter’s residual (p. 803; app reading).", "The manual offers no example presentation for this category (p. 805).", "Ask “which chapter?” before writing F99 (app guidance)."],
      cmp: { symptoms: "Mental disorder with distress or impairment, fitting no chapter; reason stated", exclusions: "Any specific disorder, any chapter-specific residual, any medical cause", prevalence: "Not given", course: "Not described" },
      clues: [["Core picture", "A year of brief, impairing episodes that match no criteria set and no chapter’s residual, with a full medical work-up negative"], ["Record", "Name, then the reason"], ["Code", "F99"]],
      updates: upd("**F99** (ICD-10-CM title “Mental disorder, not otherwise specified”; billable; inclusion term mental illness NOS) has an **Excludes1** note against **F09**, and F29 in turn excludes F99. It is **unchanged from FY2016 through FY2027** (October 1, 2026). DSM-5-TR uses the one code for both other specified and unspecified mental disorder." + APA + ICD11_F99)
    },
    {
      id: "unspecified-mental-disorder", ch: "ch20", sec: "s20-unspecified", pages: "805", critPages: "803, 805",
      name: "Unspecified mental disorder", code: "F99",
      codes: [["F99", "Mental disorder, not otherwise specified (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["F99 unspecified", "mental disorder NOS (ICD-10-CM style, outside the DSM)", "unspecified mental, behavioural or neurodevelopmental disorder (ICD-11 6E8Z, outside the DSM)"],
      essence: "A **mental disorder** (distress or impairment) that fits **no specific disorder**, when the clinician **does not state the reason**, including when there is **too little information** (for example, in an **emergency room**). Same code, **F99**, as other specified mental disorder (p. 805).",
      duration: "No duration requirement",
      functioning: "Clinically significant distress, or impairment socially, at work or in another important area is required (p. 805)",
      mood: "Not characterized (app guidance)",
      criteria: [
        ["What", "Symptoms typical of a mental disorder dominate and bring clinically significant distress or impairment (p. 805)."],
        ["But", "Full criteria for **any** mental disorder are not met (p. 805)."],
        ["Choice", "The clinician elects **not to give the reason**, which covers **insufficient information** for a more specific diagnosis, as in an emergency room (p. 805)."],
        ["Record", "“Unspecified mental disorder”, code F99, with nothing added (p. 805)."]
      ],
      specifiers: [],
      epi: NOMEAS,
      risk: [],
      differential: [
        { id: "unspecified-psychotic", how: "If the prominent cluster can be named (here, psychosis), Section I prefers that chapter’s unspecified category as the placeholder (Section I, pp. 22–23)." },
        { id: "unspecified-depressive", how: "A recognizable depressive cluster takes Chapter 4’s unspecified category." },
        { id: "unspecified-mood", how: "Mood symptoms that cannot yet be called depressive or bipolar take this Chapter 4 category." },
        { id: "unspecified-anxiety", how: "A recognizable anxiety cluster takes Chapter 5’s unspecified category." },
        { id: "unspecified-trauma", how: "A clear stressor-linked picture takes Chapter 7’s unspecified category." },
        { id: "unspecified-mental-amc", how: "If a medical condition is judged the cause, use F09 with the condition coded first." },
        { id: "other-specified-mental-disorder", how: "Same code; use the other specified name when the reason can be recorded (p. 805)." },
        PROV,
        { name: "No diagnosis or condition (Z03.89)", how: "Unspecified means a disorder is present but not characterized; Z03.89 means the evaluation found none (p. 805)." }
      ],
      pearls: ["Shares **F99** with other specified mental disorder (p. 805).", "Insufficient information, as in an emergency room, is named as a reason to use it (p. 805).", "A placeholder until a fuller differential is possible (Section I, pp. 22–23); replace it (app guidance).", "Prefer a chapter’s unspecified category whenever the prominent cluster can be named (Section I, pp. 22–23)."],
      cmp: { symptoms: "Mental disorder with distress or impairment; reason not stated or information insufficient", exclusions: "Any specific disorder; a nameable cluster belongs to its chapter", prevalence: "Not given", course: "Placeholder; revise when the picture is clear (app guidance)" },
      clues: [["Core picture", "An agitated, tearful man admitted at night, uncooperative, no collateral, toxicology pending, cluster unclear"], ["Record", "Name only"], ["Code", "F99"]],
      updates: upd("**F99** (ICD-10-CM title “Mental disorder, not otherwise specified”; billable) is **unchanged from FY2016 through FY2027** (October 1, 2026), with an **Excludes1** note against **F09**. The same code serves both plain residual categories, so the recorded DSM name carries the distinction." + APA + ICD11_F99)
    },
    {
      id: "no-diagnosis", ch: "ch20", sec: "s20-no-dx", pages: "805", critPages: "805",
      name: "No diagnosis or condition", code: "Z03.89",
      codes: [["Z03.89", "Encounter for observation for other suspected diseases and conditions ruled out (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["no diagnosis", "no mental disorder found", "Z03.89", "ruled out (ICD-10-CM wording, outside the DSM)"],
      essence: "An **additional code, not a disorder**: the person **was evaluated** and **no mental disorder or condition** is present (p. 805). It is a documented negative result, not “not sure yet”.",
      duration: "Not applicable",
      functioning: "Not applicable: no disorder, so no distress or impairment from one",
      mood: "Not applicable",
      criteria: [
        ["What", "An evaluation has been carried out (p. 805)."],
        ["Result", "It concludes that **no mental disorder or condition** is present (p. 805)."],
        ["Not for", "An unclear picture (use an unspecified category or “(provisional)”), a subthreshold disorder (other specified), or a psychosocial problem (a Z code from the next chapter) (app guidance; Section I, p. 24)."],
        ["Record", "Z03.89 no diagnosis or condition (p. 805)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not applicable; not given in the manual"]],
      risk: [],
      differential: [
        { id: "unspecified-mental-disorder", how: "A disorder is present but not characterized: F99, not Z03.89." },
        { id: "other-specified-mental-disorder", how: "A distressing subthreshold picture is a disorder, so it is coded, not ruled out." },
        PROV,
        ZCODES,
        { name: "Z71.1 (ICD-10-CM, outside the DSM)", how: "ICD-10-CM category Z03 excludes Z71.1, the person with a feared complaint in whom no diagnosis is made; signs or symptoms still under study are coded to the symptom (app research note)." }
      ],
      pearls: ["Requires a completed **evaluation** (p. 805).", "Means no disorder **and** no other condition of clinical focus (p. 805).", "The ICD-10-CM title (“…ruled out”) differs from the DSM name; record the DSM name (app research note).", "Not a placeholder: uncertainty is unspecified or provisional (app guidance)."],
      cmp: { symptoms: "None of clinical significance after evaluation", exclusions: "Any disorder; any condition that is a focus of clinical attention", prevalence: "Not applicable", course: "Not applicable" },
      clues: [["Core picture", "An occupational-health referral after a workplace argument; full assessment and collateral find nothing"], ["Status", "Additional code, not a disorder"], ["Code", "Z03.89"]],
      updates: upd("**Z03.89** (ICD-10-CM title “Encounter for observation for other suspected diseases and conditions ruled out”; billable, while the parent Z03 is not) is **unchanged from FY2016 through FY2027** (October 1, 2026). DSM-5-TR assigns it the plain meaning “No diagnosis or condition”. ICD-10-CM category Z03 carries **Excludes1** notes against **Z71.1** (person with feared complaint in whom no diagnosis is made), Z05.- (newborn observation), Z77.- (exposures) and signs or symptoms under study, which are coded to the symptom; these are ICD-10-CM conventions, not DSM text." + APA)
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "F06.8 vs F09 vs F99: the four residual categories", ids: ["other-specified-mental-amc", "unspecified-mental-amc", "other-specified-mental-disorder", "unspecified-mental-disorder"] },
    { label: "Residual categories vs no diagnosis (Z03.89)", ids: ["other-specified-mental-disorder", "unspecified-mental-disorder", "no-diagnosis"] },
    { label: "Chapter residual vs chapter-wide residual vs medical cause", ids: ["other-specified-dissociative", "other-specified-mental-disorder", "other-specified-mental-amc"] }
  ]);
})();
