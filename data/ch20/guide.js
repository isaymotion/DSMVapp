/* Chapter 20 study guide. Source: DSM-5-TR, Other Mental Disorders and Additional Codes (pp. 803–806).
   Written in the app’s own words from the manual, with page references. The chapter has no criteria sets, only
   definitions and recording rules, so this guide also draws on Section I, “Use of the Manual” (pp. 22–24), and
   labels those pages. Codes checked against ICD-10-CM through FY2027 (October 1, 2026): F06.8, F09, F99 and
   Z03.89 are unchanged since FY2016. ICD-10-CM titles, ICD-11 equivalents and all practical advice are outside the
   DSM and labeled as such. */
SP.add("ch20", "guide", {
  intro: "This is the shortest chapter in Section II (app observation) and it contains **no criteria sets**. It supplies four **residual categories** for presentations that are mental disorders (symptoms with **clinically significant distress or impairment**) but fit **none** of the disorders in Chapters 1–19, plus one **additional code** for the opposite situation: the person was assessed and **no mental disorder or condition is present** (p. 803). Two of the four categories are for symptoms that are the **direct physiological consequence of another medical condition** (coded **F06.8** when you state the reason, **F09** when you do not), and two are for everything else (**F99** either way). The exam, in the app’s experience, tests three things: the **difference between other specified and unspecified**, the rule that the **medical condition is coded and listed first**, and the fact that these chapter-wide categories are used only when the **chapter-specific** residual categories in Chapters 1–19 do not apply (p. 803). The [[helper:residual|residual-category helper]] walks through the decision.",
  objectives: [
    "State what makes a presentation a **mental disorder** for the purposes of this chapter (**clinically significant distress or impairment**) and why the chapter exists (p. 803).",
    "Define the four residual categories and give each its code: **other specified** and **unspecified mental disorder due to another medical condition** (**F06.8**, **F09**) and **other specified** and **unspecified mental disorder** (**F99** for both).",
    "List the **four conditions** that must all be met before other specified or unspecified mental disorder is used, including that **no chapter-specific residual category** fits (p. 803).",
    "Explain the one difference between **other specified** and **unspecified**: whether the clinician **chooses to record the reason** full criteria are not met (p. 803; Section I pp. 22–23).",
    "Record a diagnosis in this chapter correctly: the **medical condition first** with its own code, then the mental disorder named **with the condition inserted**, then (for other specified) the **symptom manifestation** (pp. 803–805).",
    "Use **Z03.89, No diagnosis or condition**, only after an evaluation finds **no mental disorder or condition** (p. 805), and know its ICD-10-CM title (app note).",
    "Apply the Section I conventions that this chapter leans on: **principal diagnosis** and **reason for visit**, the **etiological condition listed first**, and the **(provisional)** modifier (p. 24)."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s20-map",
          title: "How the chapter is built",
          pages: "803–805",
          blocks: [
            { type: "table", caption: "The four categories and the one additional code (codes as printed in DSM-5-TR, 2022; unchanged through October 2026)", head: ["Category", "Code", "Use it when", "Page"], rows: [
              ["[[dx:other-specified-mental-amc|Other specified mental disorder due to another medical condition]]", "F06.8", "Symptoms are the **direct physiological consequence** of a medical condition, fit no specific “due to another medical condition” disorder, and you **state the reason** (the symptom picture)", "803–804"],
              ["[[dx:unspecified-mental-amc|Unspecified mental disorder due to another medical condition]]", "F09", "Same situation, but you **do not state the reason**, including when there is **too little information**", "805"],
              ["[[dx:other-specified-mental-disorder|Other specified mental disorder]]", "F99", "A mental disorder that fits **no specific disorder and no chapter-specific residual category**; you **state the reason**", "805"],
              ["[[dx:unspecified-mental-disorder|Unspecified mental disorder]]", "F99", "Same, but you **do not state the reason** (for example, in an emergency setting)", "805"],
              ["[[dx:no-diagnosis|No diagnosis or condition]]", "Z03.89", "The person was **evaluated** and **no mental disorder or condition** is present", "805"]
            ] },
            { type: "callout", kind: "key", title: "Three ideas carry the whole chapter", text: "1) These are **mental disorders**: the symptoms bring **clinically significant distress or impairment** socially, at work or elsewhere, but no criteria set in Chapters 1–19 is met (p. 803). 2) The split between **other specified** and **unspecified** is the same one used in every chapter: it depends only on whether the clinician **chooses to communicate why** the presentation falls short (p. 803). 3) For the two **due to another medical condition** categories, the **medical condition is coded and listed first**, then the F06.8 or F09 line (p. 803)." },
            { type: "callout", kind: "exam", title: "Two codes you cannot tell apart from the number alone (app guidance)", text: "**F99** is shared by other specified mental disorder **and** unspecified mental disorder (p. 805). The written diagnosis, not the code, shows which one was meant, so the recorded name matters. Compare **F06.8** versus **F09**, which do differ." },
            { type: "update", kind: "tr", title: "What the text revision changed (app comparison)", text: "The app’s own comparison: DSM-5 (2013) had the same four residual categories, printed with ICD-9-CM codes beside the ICD-10-CM ones (294.8 for F06.8, 294.9 for F09, 300.9 for F99); DSM-5-TR prints only **ICD-10-CM**. The visible change is the chapter’s second half: the title gained “and Additional Codes” and the code **Z03.89, No diagnosis or condition**, which DSM-IV had carried as V71.09 and DSM-5 had dropped, was reinstated here under its own heading (p. 805). Confirm against pp. 803–806 and the APA’s list of text-revision changes." },
            { type: "p", text: "Read the next section first. Every item in this chapter is defined by what it is **not**, so the definition of a mental disorder and the list of what must be excluded are the real content." }
          ]
        },
        {
          id: "s20-when",
          title: "What makes it a mental disorder, and what this chapter is for",
          pages: "803",
          blocks: [
            { type: "p", text: "The chapter opens with a working test. A presentation belongs here only if it is a **mental disorder**, which the chapter defines operationally: the symptoms produce **clinically significant distress** or **impairment** socially, at work or in another important area (p. 803). Symptoms that cause neither do not get a residual-category code; they are described in the record, or, if the person was evaluated and nothing is wrong, coded **Z03.89** (p. 805)." },
            { type: "defs", title: "The two families of categories (p. 803)", items: [
              ["Due to another medical condition (F06.8, F09)", "The psychiatric symptoms (the manual’s example is **dissociative symptoms**) have been judged a **direct physiological consequence** of a medical condition, but the picture does not meet criteria for any of the specific “due to another medical condition” disorders in the earlier chapters, such as psychotic, bipolar, depressive, anxiety or obsessive-compulsive and related disorder due to another medical condition, or catatonia, delirium or a neurocognitive disorder due to a medical condition (the list is the app’s, compiled from Chapters 2–7 and 17; p. 803 names none)."],
              ["The plain residual categories (F99)", "Used when **all four** of the following hold: the presentation **is** a mental disorder (distress or impairment); it meets criteria for **no specific** Section II disorder; it does **not** meet the definition of any chapter-specific **other specified or unspecified** category; and **no other** mental disorder diagnosis applies."]
            ] },
            { type: "steps", title: "The four conditions for other specified or unspecified mental disorder (p. 803)", items: [
              ["It is a mental disorder", "Clinically significant distress or impairment is present. Without it there is nothing to code here."],
              ["No specific disorder fits", "None of the criteria sets in Chapters 1–19 is met."],
              ["No chapter-specific residual fits", "The presentation does not meet the definition of any other specified or unspecified category in Chapters 1–19 (for example, it is not a recognizable depressive, anxiety or dissociative picture that would take that chapter’s residual code)."],
              ["No other diagnosis applies", "Nothing else in the manual accounts for it."]
            ] },
            { type: "callout", kind: "pearl", title: "Why the third condition does most of the work", text: "Almost every symptom cluster belongs to a chapter, and every chapter has its own **other specified** and **unspecified** categories (Section I, p. 22). A person with low mood that falls short of major depressive disorder takes **other specified** or **unspecified depressive disorder**, not F99. **F99 is for a mental disorder whose symptoms fit no chapter at all**, or a mixed picture the clinician cannot assign to any chapter (app reading of p. 803)." },
            { type: "callout", kind: "culture", title: "Where the convention comes from (Section I, pp. 22–23)", text: "Section I explains that the categorical system does not capture every presentation seen in practice, so every chapter carries “other specified” and “unspecified” options, and that in settings such as the **emergency department** it may only be possible to identify the most prominent symptom cluster (delusions, mania, anxiety, intoxication and so on), in which case the corresponding **unspecified** disorder serves as a **placeholder** until a full differential is possible (p. 22). The choice between other specified and unspecified is described as **entirely a matter of clinical judgment** (p. 23)." },
            { type: "case", title: "Clinical vignette: the right chapter first", text: "A 24-year-old woman presents with 3 weeks of low mood, poor sleep and tearfulness after a breakup, with reduced work performance. She has four of the nine major depressive symptoms.", point: "This is a recognizable **depressive** picture that falls short of major depressive disorder, so a chapter-specific category applies: first [[dx:adjustment|adjustment disorder]] from Chapter 7, since the symptoms followed a stressor within 3 months, and only if that is not met a Chapter 4 residual such as [[dx:other-specified-depressive|other specified depressive disorder]] (app reading of Chapters 4 and 7). **F99 is wrong** here because the third condition on p. 803 is not met." }
          ]
        }
      ]
    },
    {
      title: "The four residual categories",
      sections: [
        {
          id: "s20-amc-specified",
          title: "Other specified mental disorder due to another medical condition (F06.8)",
          pages: "803–804",
          blocks: [
            { type: "criteria", title: "Definition in brief (not a criteria set)", code: "F06.8", pages: "803–804", items: [
              ["What", "Symptoms **characteristic of a mental disorder due to another medical condition** predominate and cause **clinically significant distress or impairment**."],
              ["But", "The picture does **not** meet full criteria for any **specific** mental disorder attributable to another medical condition."],
              ["Choice", "The clinician **chooses to communicate the specific reason** the presentation falls short, by naming the symptom picture."]
            ] },
            { type: "steps", title: "How to record it (p. 804)", items: [
              ["Code and list the medical condition first", "Its own ICD-10-CM code goes **immediately before** the F06.8 line."],
              ["Name the disorder with the condition inserted", "Replace “another medical condition” with the actual condition: “other specified mental disorder due to **complex partial seizures**”."],
              ["Add the symptom manifestation", "Finish with the specific picture that fell short of a named disorder: “…, **dissociative symptoms**”."]
            ] },
            { type: "callout", kind: "key", title: "The manual’s worked example (p. 804)", text: "**G40.209 complex partial seizures, F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms.** Two lines, two codes, the seizure disorder first. The only example presentation the manual lists under this category is **dissociative symptoms**, such as those occurring with complex partial seizures (p. 804)." },
            { type: "callout", kind: "pearl", title: "Why dissociative symptoms land here", text: "Chapter 8 has **no** “dissociative disorder due to another medical condition”; its criteria sets each **exclude** symptoms attributable to a medical condition such as complex partial seizures (Chapter 8). So when dissociation is judged a direct physiological effect of seizures, the only place to code it is this chapter, which fits the example the manual chooses (p. 804). This explanation is the app’s reading of Chapter 8, not a statement in the chapter; see [[dx:other-specified-dissociative|other specified dissociative disorder]] for the non-medical residual." },
            { type: "case", title: "Clinical vignette", text: "A 31-year-old man with documented temporal lobe epilepsy (complex partial seizures) has, for 6 months, episodes of feeling detached from his body and his surroundings that begin minutes before some seizures and sometimes occur between them, confirmed on video-EEG monitoring to be ictal and peri-ictal. They frighten him and he has stopped driving and working. He is alert and oriented between episodes; no memory gaps, no identity disturbance.", point: "Dissociative symptoms judged a **direct physiological consequence** of the seizure disorder, causing distress and impairment, not meeting depersonalization/derealization disorder (which excludes medical causes) or any “due to another medical condition” disorder: **G40.209 complex partial seizures; F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms** (pp. 803–804)." },
            { type: "update", kind: "post", year: "2026", title: "F06.8 unchanged through FY2027", source: "ICD-10-CM FY2025, FY2026 and FY2027 code tables (effective October 1 of 2024, 2025 and 2026), read on icd10data.com, Find-A-Code and AAPC code pages; APA DSM-5-TR coding updates September 2022–2025; checked October 27, 2026", text: "The ICD-10-CM title is “**Other specified mental disorders due to known physiological condition**”, with the instruction to **code first** the underlying physiological condition; it has no subcodes and has not changed since FY2016. Record the DSM name. One neighbor did change: the APA’s September 2022 coding update moved **mild neurocognitive disorder** due to a medical condition from G31.84 to **F06.70/F06.71** (Chapter 17), effective October 1, 2022; it was never F06.8. No APA DSM-5-TR update touches this chapter, and no 2026 update exists as of the check date. Confirm against the official tabular list in force on the date of service." }
          ]
        },
        {
          id: "s20-amc-unspecified",
          title: "Unspecified mental disorder due to another medical condition (F09)",
          pages: "805",
          blocks: [
            { type: "criteria", title: "Definition in brief (not a criteria set)", code: "F09", pages: "805", items: [
              ["What", "Symptoms **characteristic of a mental disorder due to another medical condition** predominate and cause **clinically significant distress or impairment**."],
              ["But", "The picture falls **short** of the full criteria of every specific disorder attributable to a medical condition."],
              ["Choice", "The clinician **chooses not to specify** the reason, which includes having **insufficient information** for a more specific diagnosis (for example, in an emergency room)."]
            ] },
            { type: "steps", title: "How to record it (p. 805)", items: [
              ["Code and list the medical condition first", "Its code goes immediately before the F09 line."],
              ["Name the disorder with the condition inserted", "“Unspecified mental disorder due to **complex partial seizures**”."],
              ["Stop there", "No symptom manifestation is added; that is the point of “unspecified”."]
            ] },
            { type: "callout", kind: "key", title: "The manual’s worked example (p. 805)", text: "**G40.209 complex partial seizures, F09 unspecified mental disorder due to complex partial seizures.** Same patient, same first line; the second line loses the “, dissociative symptoms” tail and the code changes from F06.8 to F09." },
            { type: "compare", title: "F06.8 versus F09: one difference", items: [
              { title: "Other specified (F06.8)", color: "guide", points: ["You **say why**: the symptom picture is named.", "Example ends “…, dissociative symptoms”.", "Implies enough information to characterize the presentation."] },
              { title: "Unspecified (F09)", color: "hy", points: ["You **do not say why**.", "Example ends at the condition’s name.", "Covers **insufficient information**, as in an emergency room (p. 805).", "Section I: the choice is a matter of clinical judgment (p. 23)."] }
            ] },
            { type: "case", title: "Clinical vignette: the emergency room", text: "A 58-year-old woman with known HIV disease is brought to the emergency department by her sister because of 2 weeks of new, unexplained behavioral change with distress and withdrawal from her usual activities. She is alert, attention is intact and she is oriented; the sister cannot describe the symptoms in detail, the patient is reluctant to talk, records are unavailable, and the team judges the change a direct effect of her HIV disease but cannot yet characterize the picture.", point: "A mental disorder due to a medical condition, not meeting any specific set, with **too little information** to say more: **B20 HIV disease; F09 unspecified mental disorder due to HIV disease** (pp. 803, 805). Delirium is excluded by intact attention and orientation; if the picture later proves to be, say, a depressive syndrome, the diagnosis changes to [[dx:depressive-due-to-amc|depressive disorder due to HIV disease]]." },
            { type: "update", kind: "post", year: "2026", title: "F09 unchanged through FY2027", source: "ICD-10-CM FY2025–FY2027 code tables (icd10data.com, Find-A-Code, AAPC); APA DSM-5-TR coding updates September 2022–2025; checked October 27, 2026", text: "ICD-10-CM title “**Unspecified mental disorder due to known physiological condition**”, code first the underlying condition; its inclusion terms are the older “organic” labels (organic brain syndrome NOS, organic mental disorder NOS). It carries an Excludes1 note against **F06.7-** (mild neurocognitive disorder due to a known physiological condition) and **F29** (unspecified psychosis), so do not pair F09 with those on the same encounter for the same problem. Unchanged since FY2016; no APA update. Confirm against the official tabular list." }
          ]
        },
        {
          id: "s20-other-specified",
          title: "Other specified mental disorder (F99)",
          pages: "805",
          blocks: [
            { type: "criteria", title: "Definition in brief (not a criteria set)", code: "F99", pages: "805", items: [
              ["What", "Symptoms **characteristic of a mental disorder** predominate and cause **clinically significant distress or impairment**."],
              ["But", "The picture does **not** meet full criteria for any **specific** mental disorder."],
              ["And", "The four conditions on p. 803 are met: it is a mental disorder, no specific disorder fits, **no chapter-specific residual category** fits, and no other diagnosis applies."],
              ["Choice", "The clinician **chooses to communicate the specific reason**: record “other specified mental disorder” followed by the reason."]
            ] },
            { type: "callout", kind: "key", title: "How the line reads", text: "“**Other specified mental disorder, [reason]**” with code **F99** (p. 805). Unlike the medical-condition categories there is no first line to code, and the manual gives no example presentation for this category, which is itself a clue: it is meant to be rare (app reading)." },
            { type: "callout", kind: "caution", title: "Not a shortcut past the chapters", text: "Before writing F99, ask which **chapter** the symptoms belong to. A subthreshold anxiety picture is [[dx:other-specified-anxiety|other specified anxiety disorder]]; a stress reaction that does not meet adjustment disorder is [[dx:other-specified-trauma|other specified trauma- and stressor-related disorder]]; subthreshold psychosis is [[dx:other-specified-psychotic|other specified schizophrenia spectrum and other psychotic disorder]]. F99 is for a presentation that **fits no chapter**, or a **mixed** picture that cannot be assigned to one (p. 803; app guidance)." },
            { type: "case", title: "Clinical vignette: a picture that fits no chapter", text: "A 40-year-old man has, for a year, a stable pattern of brief daily episodes of intense, unprovoked, non-sexual bodily excitement with racing thoughts lasting minutes, no mood change, no anxiety, no psychosis, no substance use, normal examination, EEG and bloods, and a neurology opinion that no medical cause is found. The episodes have cost him two jobs.", point: "A mental disorder (impairment) that meets no criteria set and fits no chapter’s residual definition, with the reason recorded: **F99 other specified mental disorder, recurrent brief episodes of excitation without mood or anxiety features** (p. 805). If the clinician preferred not to characterize it, the same code with the name “unspecified mental disorder” would be used. (App vignette; the manual gives no example.)" }
          ]
        },
        {
          id: "s20-unspecified",
          title: "Unspecified mental disorder (F99)",
          pages: "805",
          blocks: [
            { type: "criteria", title: "Definition in brief (not a criteria set)", code: "F99", pages: "805", items: [
              ["What", "Symptoms **characteristic of a mental disorder** predominate and cause **clinically significant distress or impairment**."],
              ["But", "The picture does **not** meet full criteria for **any** mental disorder."],
              ["Choice", "The clinician **chooses not to specify** the reason, which includes **insufficient information** for a more specific diagnosis (for example, in an emergency room)."]
            ] },
            { type: "callout", kind: "exam", title: "Same code, different name (app guidance)", text: "Other specified mental disorder and unspecified mental disorder are **both F99** (p. 805). An exam item that asks “what distinguishes them” wants the answer **whether the reason is recorded**, never the code." },
            { type: "compare", title: "The four categories side by side", items: [
              { title: "F06.8", color: "mech", points: ["Due to a medical condition.", "Reason **stated** (symptom picture).", "Condition coded first."] },
              { title: "F09", color: "mech", points: ["Due to a medical condition.", "Reason **not stated**; includes too little information.", "Condition coded first."] },
              { title: "F99 other specified", color: "guide", points: ["Not attributed to a medical condition.", "Reason **stated** after the name.", "Fits no chapter."] },
              { title: "F99 unspecified", color: "guide", points: ["Not attributed to a medical condition.", "Reason **not stated**; includes too little information.", "Fits no chapter."] }
            ] },
            { type: "callout", kind: "pearl", title: "Unspecified is a placeholder, not a verdict (Section I, pp. 22–23; app guidance)", text: "Section I describes the chapter-specific unspecified categories as **placeholders** in settings such as the emergency department, until a fuller differential is possible (p. 22). The app extends the same advice to F99 and F09: write it, gather collateral and records, and **replace** it. If the delay is only about waiting for information that will probably confirm a specific disorder, the Section I modifier **“(provisional)”** after that specific diagnosis is the alternative (p. 24)." },
            { type: "case", title: "Clinical vignette: the night admission", text: "A 27-year-old man is admitted at 2 a.m. after being found agitated and tearful in the street, saying he cannot go on; he is uncooperative with the interview, there is no collateral, toxicology is pending, and the team cannot tell whether the picture is depressive, psychotic, substance-related or a reaction to an event. His presentation has clearly impaired him.", point: "Too little information for any chapter, so the placeholder is **F99 unspecified mental disorder** (p. 805). If the team could at least name the prominent cluster (for example, psychotic symptoms), Section I would prefer that chapter’s unspecified category, such as [[dx:unspecified-psychotic|unspecified schizophrenia spectrum and other psychotic disorder]] (pp. 22–23). Suicide risk is managed regardless of the code (app guidance)." }
          ]
        }
      ]
    },
    {
      title: "Additional code",
      sections: [
        {
          id: "s20-no-dx",
          title: "Z03.89, No diagnosis or condition",
          pages: "805",
          blocks: [
            { type: "p", text: "The chapter ends with a single additional code. **Z03.89, No diagnosis or condition**, is for the situation in which the person **has been evaluated** and the conclusion is that **no mental disorder or condition is present** (p. 805). It is the opposite of everything above: not a residual disorder, not a subthreshold picture, but a documented negative result." },
            { type: "defs", title: "What it is and is not (p. 805; app guidance)", items: [
              ["It is", "A code for a completed evaluation with a negative conclusion: no mental disorder, and no other condition that may be a focus of clinical attention."],
              ["It is not", "A code for “not sure yet” (that is an **unspecified** category or a **provisional** diagnosis), for a subthreshold picture that causes distress (that is an **other specified** category), or for a psychosocial problem without a disorder (that takes a **Z code** from Chapter 22, “Other Conditions That May Be a Focus of Clinical Attention” (not yet in the app))."]
            ] },
            { type: "callout", kind: "caution", title: "The ICD-10-CM title is different (app note)", text: "In ICD-10-CM the code Z03.89 is titled “**Encounter for observation for other suspected diseases and conditions ruled out**”. DSM-5-TR assigns it the plain-language meaning “No diagnosis or condition” (p. 805). The ICD-10-CM category Z03 also has an Excludes1 note against **Z71.1** (person with a feared complaint in whom no diagnosis is made) and against signs or symptoms under study, which are coded to the symptom; these are ICD-10-CM conventions, not DSM text. Record the DSM name and use the code set in force where you practice." },
            { type: "case", title: "Clinical vignette", text: "A 35-year-old woman is referred by her employer’s occupational health service after a workplace incident in which she argued with a colleague. A full psychiatric assessment, collateral from her partner and a review of records find no symptoms, no distress, no impairment and no psychosocial problem she wants help with.", point: "Evaluated, nothing found: **Z03.89 No diagnosis or condition** (p. 805). Had she wanted help with the conflict at work, a Z code for an occupational problem from Chapter 22 would be the record instead (app guidance)." },
            { type: "update", kind: "post", year: "2026", title: "Z03.89 and F99 unchanged through FY2027", source: "ICD-10-CM FY2025–FY2027 code tables (icd10data.com, Find-A-Code, AAPC); APA DSM-5-TR coding updates September 2022–2025; checked October 27, 2026", text: "**Z03.89** (billable; its parent Z03 is not) and **F99** (“Mental disorder, not otherwise specified”, inclusion term “mental illness NOS”) have not changed since FY2016, and neither appears in any APA DSM-5-TR coding update. F99 carries an Excludes1 note against **F09**, so a presentation attributed to a medical condition takes F06.8 or F09, never F99 alongside them. Confirm against the official tabular list." }
          ]
        }
      ]
    },
    {
      title: "Using the chapter",
      sections: [
        {
          id: "s20-choose",
          title: "Which residual category? The decision in order",
          pages: "803–805",
          blocks: [
            { type: "p", text: "The chapter’s own logic (p. 803) plus the Section I convention (pp. 22–23) gives a fixed order of questions. The [[helper:residual|helper]] follows the same order." },
            { type: "flow", title: "From “does not fit” to a code (pp. 803–805; Section I pp. 22–23)", vertical: true, steps: [
              ["Distress or impairment?", "No: none of the four residual categories applies. After a full evaluation with nothing found, **Z03.89**; a psychosocial problem takes a Z code from Chapter 22 (not yet in the app)."],
              ["A specific disorder?", "Yes: diagnose it (with “(provisional)” if confirmation is expected, Section I p. 24)."],
              ["A direct physiological effect of a medical condition?", "Yes, and a specific “due to another medical condition” disorder fits: diagnose that one (psychotic, bipolar, depressive, anxiety, OCD-related, catatonia, delirium, neurocognitive, personality change). None fits: **F06.8** if you state the symptom picture, **F09** if not; medical condition coded first."],
              ["Does the picture belong to a chapter?", "Yes: that chapter’s **other specified** (reason stated) or **unspecified** category."],
              ["No chapter fits", "**F99 other specified mental disorder, [reason]**, or **F99 unspecified mental disorder**."]
            ], note: "Other specified versus unspecified at every step depends only on whether you **record the reason**; unspecified also covers **insufficient information** (p. 805)." },
            { type: "table", caption: "Look-alike decisions (app guidance built from pp. 803–805 and the chapters named)", head: ["Presentation", "Correct category", "Why not this chapter?"], rows: [
              ["Dissociative symptoms that are a direct effect of complex partial seizures", "**F06.8** (or F09) after G40.209", "Chapter 8 has no “due to another medical condition” disorder; this is the manual’s own example (p. 804)"],
              ["Dissociative symptoms with no medical cause, short of any dissociative disorder", "[[dx:other-specified-dissociative|Other specified dissociative disorder]] (Chapter 8)", "A chapter-specific residual fits, so condition 3 on p. 803 fails"],
              ["Hallucinations judged a direct effect of a brain tumor", "[[dx:psychotic-due-to-amc|Psychotic disorder due to another medical condition]] (Chapter 2)", "A specific “due to AMC” disorder fits"],
              ["Fluctuating attention and awareness after surgery", "[[dx:delirium|Delirium]] (Chapter 17)", "A specific disorder fits"],
              ["Subthreshold depressive symptoms after a breakup", "[[dx:adjustment|Adjustment disorder]] (Chapter 7), or a Chapter 4 residual such as [[dx:other-specified-depressive|other specified depressive disorder]] if adjustment disorder is not met", "Chapters 7 and 4 cover it (app reading)"],
              ["Marital conflict, no disorder", "A relational-problem Z code (Chapter 22, not yet in the app)", "Not a mental disorder: no distress or impairment from a disorder"],
              ["Full evaluation, nothing found", "**Z03.89**", "Not a disorder at all (p. 805)"]
            ] },
            { type: "callout", kind: "analogy", title: "A filing analogy (app)", text: "Think of Chapters 1–19 as labeled drawers, each with a “miscellaneous” folder at the back (the chapter’s other specified and unspecified categories). This chapter is the **miscellaneous drawer for the whole cabinet**: you open it only when the paper belongs in no drawer at all (F99), or when a **medical** cause is the real file and no drawer has a matching medical-cause folder (F06.8, F09). Z03.89 is the note that says the cabinet was searched and nothing needed filing." }
          ]
        },
        {
          id: "s20-coding",
          title: "Coding and recording",
          pages: "803–805",
          blocks: [
            { type: "table", caption: "Recording formats in this chapter (pp. 804–805)", head: ["Category", "Line(s) to write", "Example"], rows: [
              ["Other specified … due to AMC", "1) medical condition with its code; 2) **F06.8** other specified mental disorder due to **[condition]**, **[symptom picture]**", "G40.209 complex partial seizures; F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms"],
              ["Unspecified … due to AMC", "1) medical condition with its code; 2) **F09** unspecified mental disorder due to **[condition]**", "G40.209 complex partial seizures; F09 unspecified mental disorder due to complex partial seizures"],
              ["Other specified mental disorder", "**F99** other specified mental disorder, **[reason]**", "F99 other specified mental disorder, [reason]"],
              ["Unspecified mental disorder", "**F99** unspecified mental disorder", "F99 unspecified mental disorder"],
              ["No diagnosis or condition", "**Z03.89** no diagnosis or condition", "Z03.89 no diagnosis or condition"]
            ] },
            { type: "list", title: "Rules to remember", items: [
              "The **medical condition** is coded and listed **immediately before** F06.8 or F09; the chapter’s own intro example is **B20 HIV disease** (p. 803), the category text’s example is **G40.209** (pp. 804–805).",
              "Insert the **name of the condition** in place of “another medical condition” in the disorder name (pp. 804–805).",
              "Only the **other specified** version adds the **symptom manifestation** after a comma (p. 804).",
              "**F99** is used for both plain residual categories; the **name** carries the distinction (p. 805).",
              "Section I: when a mental disorder due to a medical condition is the **principal diagnosis** (inpatient) or **reason for visit** (outpatient), ICD rules still put the **medical condition first**, so the principal diagnosis is the **second** line; add “(principal diagnosis)” or “(reason for visit)” for clarity (p. 24).",
              "Section I: **“(provisional)”** after a specific diagnosis marks a strong presumption that criteria will be confirmed when information arrives (p. 24); the unspecified categories are for when you choose not to, or cannot, say more (p. 805)."
            ] },
            { type: "callout", kind: "exam", title: "Exam favorites (app guidance)", text: "1) “Which is listed first?” The **medical condition**. 2) “Which code for unspecified mental disorder?” **F99**, the same as other specified mental disorder. 3) “Patient evaluated, no disorder found?” **Z03.89**. 4) “Dissociative symptoms from seizures?” **F06.8** after the seizure code, not a Chapter 8 code." },
            { type: "update", kind: "post", year: "2026", title: "Codes current to October 2026", source: "ICD-10-CM FY2025, FY2026 and FY2027 code tables (icd10data.com, Find-A-Code, AAPC code pages; the official CDC files were not consulted directly); APA DSM-5-TR coding updates September 2022, 2023, 2024 and 2025; checked October 27, 2026", text: "**F06.8, F09, F99 and Z03.89** are unchanged from FY2016 through FY2027 (effective October 1, 2026), and **G40.209** is unchanged through FY2026 with no FY2027 change documented. No APA DSM-5-TR update (September 2022–2025) touches pp. 803–806, and no 2026 APA update existed on the check date. **ICD-11** (outside the DSM): the closest equivalents are **6E8Y** other specified and **6E8Z** unspecified mental, behavioural or neurodevelopmental disorders, and, for the medical-condition categories, the **6E6** block of secondary mental or behavioural syndromes (residuals **6E6Y**, **6E6Z**), coded with the underlying disease; the mapping is the app’s own." }
          ]
        },
        {
          id: "s20-exam",
          title: "How this chapter is tested",
          pages: "803–805",
          blocks: [
            { type: "p", text: "App guidance. Four pages, no criteria, so the questions are about **rules**: which category, which code, which line first, and when **not** to use the chapter." },
            { type: "list", title: "Traps to expect", items: [
              "Choosing **F99** for a subthreshold picture that belongs to a chapter (depressive, anxiety, psychotic, dissociative): the chapter-specific residual wins (p. 803).",
              "Choosing a **Chapter 8** dissociative residual for dissociation caused by **seizures**: the manual’s example is F06.8 (p. 804).",
              "Putting the **F code first**: the medical condition is coded and listed first (pp. 803–805).",
              "Thinking other specified and unspecified mental disorder have **different codes**: both F99 (p. 805).",
              "Using **Z03.89** when the picture is unclear: that is unspecified (or provisional), not “no diagnosis” (pp. 805, 24).",
              "Using Z03.89 when there **is** a psychosocial problem: that takes a Z code from Chapter 22 (app guidance).",
              "Forgetting that the four categories require **distress or impairment**: without it, none of them applies (p. 803)."
            ] },
            { type: "callout", kind: "mnemonic", title: "One line to remember the whole chapter (app, original)", text: "**“Condition first, reason if you can, F99 if no chapter, Z if nothing.”** Check against pp. 803–805: condition coded first for F06.8/F09; other specified = reason recorded; F99 only when no chapter fits; Z03.89 only after evaluation finds nothing." }
          ]
        }
      ]
    }
  ]
});
