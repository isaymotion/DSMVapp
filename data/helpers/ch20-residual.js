/*
 * Diagnostic helper for Chapter 20 (Other Mental Disorders and Additional Codes), DSM-5-TR pp. 803–806.
 * "residual": from a presentation that fits no criteria set to the right residual category (chapter-specific
 * or chapter-wide), the "no diagnosis" code, or a reminder that a specific disorder applies after all.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "residual",
    chapter: "ch20",
    title: "It fits no criteria set: which residual category, or no diagnosis?",
    summary: "Start from a presentation that meets no specific criteria set, confirm distress or impairment, check for a medical cause and for a chapter the picture belongs to, then choose between the chapter-specific residual categories, F06.8/F09, F99 and Z03.89, with the recording order.",
    caution: "A teaching aid built from DSM-5-TR pp. 803–805 and the Section I conventions on pp. 22–24. The chapter-wide categories are used only when no chapter-specific other specified or unspecified category fits (p. 803). Other specified versus unspecified depends only on whether the clinician records the reason; unspecified also covers insufficient information (p. 805). F06.8, F09, F99 and Z03.89 are unchanged through October 2026; use the code set in force on the date of service.",
    start: "distress",
    nodes: {
      distress: {
        q: "Do the symptoms cause clinically significant distress or impairment (social, occupational or another important area)?",
        help: "This is the chapter’s working definition of a mental disorder (p. 803). Without distress or impairment, nothing in this chapter applies: either the evaluation found nothing, or the problem is a psychosocial circumstance rather than a disorder.",
        options: [
          { label: "Yes: distress or impairment is present", to: "specific", note: "A mental disorder; find its place." },
          { label: "No: a full evaluation found no mental disorder or other condition", to: "r:nodx", note: "Z03.89." },
          { label: "No disorder, but there is a psychosocial problem that is the focus of attention", to: "r:zcode", note: "A Z code from the next chapter." }
        ]
      },
      specific: {
        q: "Does the presentation meet full criteria for any specific disorder in Chapters 1–19, or is confirmation of one expected soon?",
        help: "The residual categories are only for presentations that meet no specific criteria set (p. 803). If criteria are probably met but the information is still arriving, Section I allows the specific diagnosis with the modifier “(provisional)” (p. 24).",
        options: [
          { label: "Yes: a specific disorder is met", to: "r:specific", note: "Diagnose it." },
          { label: "Probably, once collateral or records arrive", to: "r:provisional", note: "Specific diagnosis (provisional)." },
          { label: "No: no criteria set is met", to: "medical", note: "A residual category." }
        ]
      },
      medical: {
        q: "Are the symptoms judged a direct physiological consequence of another medical condition?",
        help: "Evidence from history, examination or laboratory findings that a medical condition is producing the symptoms, as the earlier chapters require for their “due to another medical condition” disorders. The manual’s example is dissociative symptoms from complex partial seizures (pp. 803–804).",
        options: [
          { label: "Yes: a medical condition is the direct cause", to: "amc", note: "Medical-cause route." },
          { label: "No, or not established", to: "chapter", note: "Non-medical route." }
        ]
      },
      amc: {
        q: "Does a specific “due to another medical condition” disorder from an earlier chapter fit?",
        help: "Psychotic, bipolar, depressive, anxiety and obsessive-compulsive and related disorder due to another medical condition; catatonic disorder due to another medical condition; delirium and major or mild neurocognitive disorder due to a medical condition; personality change due to another medical condition. Chapter 8 has no dissociative version, which is why dissociative symptoms are the manual’s example for this chapter (p. 804).",
        options: [
          { label: "Yes: one of them fits", to: "r:amc-specific", note: "Diagnose that disorder." },
          { label: "No, and I will state the symptom picture", to: "r:f068", note: "F06.8, after the medical condition." },
          { label: "No, and I will not state the reason, or there is too little information", to: "r:f09", note: "F09, after the medical condition." }
        ]
      },
      chapter: {
        q: "Can the symptoms be assigned to a chapter (a recognizable depressive, anxiety, psychotic, dissociative, somatic or other picture)?",
        help: "Every chapter has its own other specified and unspecified categories, and Section I prefers the chapter’s unspecified category as a placeholder when only the prominent symptom cluster can be identified, for example in the emergency department (pp. 22–23). The third condition on p. 803 bars F99 when a chapter-specific residual category fits.",
        options: [
          { label: "Yes: the picture belongs to a chapter", to: "r:chapter-residual", note: "That chapter’s other specified or unspecified category." },
          { label: "No: it fits no chapter, or the picture is mixed and cannot be assigned", to: "reason", note: "F99." }
        ]
      },
      reason: {
        q: "Will you record the specific reason the presentation does not meet criteria?",
        help: "Entirely a matter of clinical judgment (Section I, p. 23). Record the reason when the information allows you to characterize the presentation; choose unspecified when you prefer not to, or when there is not enough information yet (p. 805).",
        options: [
          { label: "Yes: record the reason", to: "r:f99-spec", note: "F99 other specified mental disorder, [reason]." },
          { label: "No, or not enough information", to: "r:f99-unspec", note: "F99 unspecified mental disorder." }
        ]
      }
    },
    results: {
      "nodx": { dx: "No diagnosis or condition", line: "The person was evaluated and no mental disorder or condition is present (p. 805).", points: ["Code: Z03.89.", "ICD-10-CM titles it “encounter for observation for other suspected diseases and conditions ruled out”; record the DSM name (app note).", "Not for “unsure yet”: that is an unspecified category or a provisional diagnosis."], link: { ch: "ch20", sec: "s20-no-dx", label: "Z03.89" }, dxId: "no-diagnosis" },
      "zcode": { label: "Not this chapter", dx: "A condition that may be a focus of clinical attention (Z code)", line: "A relational, abuse, educational, occupational, housing, economic, legal or other psychosocial problem without a mental disorder takes a Z code from the next chapter, “Other Conditions That May Be a Focus of Clinical Attention” (app guidance; Chapter 22 is not yet in the app).", points: ["Z03.89 is wrong when a problem that needs attention was found.", "Z codes may also be listed alongside a mental disorder when the problem is a focus of care."], link: { ch: "ch20", sec: "s20-no-dx", label: "What Z03.89 is not" } },
      "specific": { label: "Not a residual category", dx: "A specific disorder", line: "Residual categories are only for presentations that meet no criteria set (p. 803). Diagnose the specific disorder, with its chapter’s specifiers and code.", points: ["If it is a mental disorder due to a medical condition, list the medical condition first (Section I, pp. 23–24).", "Use the chapter helpers to confirm the criteria."], link: { ch: "ch20", sec: "s20-choose", label: "The decision in order" } },
      "provisional": { label: "Specific diagnosis, pending", dx: "Specific disorder, recorded as “(provisional)”", line: "Section I: when criteria are probably met but the confirming information (an informant, records) is still expected, record the specific diagnosis followed by “(provisional)” and remove the modifier once confirmed (p. 24).", points: ["Choose unspecified instead when you cannot yet name the disorder at all (p. 805).", "Section I’s other use of “(provisional)”: a diagnosis whose duration has an upper limit that has not yet been reached (p. 24)."], link: { ch: "ch20", sec: "s20-coding", label: "Section I rules" } },
      "amc-specific": { label: "Not this chapter", dx: "A specific mental disorder due to another medical condition", line: "When a specific “due to another medical condition” disorder fits, it takes precedence over F06.8 and F09 (p. 803).", points: ["Code the medical condition first, then the disorder (Section I, pp. 23–24).", "Examples: [[dx:psychotic-due-to-amc|psychotic disorder due to another medical condition]], [[dx:depressive-due-to-amc|depressive disorder due to another medical condition]], [[dx:delirium|delirium]], [[dx:ncd-amc|neurocognitive disorder due to another medical condition]]."], link: { ch: "ch20", sec: "s20-choose", label: "Look-alike decisions" } },
      "f068": { dx: "Other specified mental disorder due to another medical condition", line: "Symptoms characteristic of a mental disorder due to a medical condition, with distress or impairment, meeting no specific set, and the clinician states the symptom picture (pp. 803–804).", points: ["Code: F06.8, listed after the medical condition’s own code.", "Record the disorder name with the condition inserted, then the symptom manifestation: “G40.209 complex partial seizures; F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms” (p. 804).", "The manual’s only listed example presentation is dissociative symptoms (p. 804)."], link: { ch: "ch20", sec: "s20-amc-specified", label: "F06.8" }, dxId: "other-specified-mental-amc" },
      "f09": { dx: "Unspecified mental disorder due to another medical condition", line: "Same situation, but the clinician chooses not to specify the reason, including when there is not enough information, as in an emergency room (p. 805).", points: ["Code: F09, listed after the medical condition’s own code.", "Record the disorder name with the condition inserted and stop: “G40.209 complex partial seizures; F09 unspecified mental disorder due to complex partial seizures” (p. 805).", "Replace it with a specific diagnosis when the picture becomes clear (app guidance)."], link: { ch: "ch20", sec: "s20-amc-unspecified", label: "F09" }, dxId: "unspecified-mental-amc" },
      "chapter-residual": { label: "Not this chapter", dx: "The chapter’s own other specified or unspecified category", line: "A recognizable picture that falls short of a chapter’s criteria sets takes that chapter’s residual category, which bars the chapter-wide F99 categories (third condition, p. 803).", points: ["Examples: [[dx:other-specified-depressive|other specified depressive disorder]], [[dx:other-specified-anxiety|other specified anxiety disorder]], [[dx:unspecified-psychotic|unspecified schizophrenia spectrum and other psychotic disorder]], [[dx:other-specified-dissociative|other specified dissociative disorder]].", "Section I: in the emergency department, the chapter’s unspecified category is the placeholder when only the prominent cluster can be identified (pp. 22–23)."], link: { ch: "ch20", sec: "s20-choose", label: "The decision in order" } },
      "f99-spec": { dx: "Other specified mental disorder", line: "A mental disorder that meets no specific criteria set and no chapter-specific residual definition, with the reason recorded (p. 805).", points: ["Code: F99.", "Record “other specified mental disorder” followed by the reason (p. 805).", "All four conditions on p. 803 must hold; the manual gives no example presentation."], link: { ch: "ch20", sec: "s20-other-specified", label: "F99 other specified" }, dxId: "other-specified-mental-disorder" },
      "f99-unspec": { dx: "Unspecified mental disorder", line: "A mental disorder that meets no criteria set, with the reason not recorded, including when there is too little information, as in an emergency room (p. 805).", points: ["Code: F99, the same code as other specified mental disorder; the name carries the difference.", "A placeholder: gather collateral and records and replace it (Section I, pp. 22–23; app guidance)."], link: { ch: "ch20", sec: "s20-unspecified", label: "F99 unspecified" }, dxId: "unspecified-mental-disorder" }
    }
  }
]);
