/* Chapter 20 practice drills.
   dxline:   build the full diagnosis line (category, which line comes first, code). F06.8, F09, F99 and Z03.89
             unchanged from FY2016 through FY2027 (October 1, 2026); G40.209 unchanged through FY2026.
   counting: decide which items count, then whether the number is reached.
   Ids are stable keys for progress. */
(function () {
  var DX = ["Other specified mental disorder due to another medical condition", "Unspecified mental disorder due to another medical condition", "Other specified mental disorder", "Unspecified mental disorder", "No diagnosis or condition (additional code)"];

  SP.add("ch20", "dxline", [
    {
      id: "w20-01", tag: "Seizures + dissociation",
      "case": "A 26-year-old woman with documented complex partial seizures (not intractable, no status epilepticus) has repeated spells of feeling detached from herself and her surroundings, with gaps she cannot account for. Neurology links the spells to her seizure activity. The picture does not fit any specific “due to another medical condition” disorder in the earlier chapters, the spells frighten her and she has stopped driving and working. The psychiatrist decides to record the symptom picture.",
      parts: [
        { label: "Category", options: DX, answer: 0 },
        { label: "Listed first", options: ["F06.8", "G40.209 complex partial seizures", "F44.89", "Nothing: one line only"], answer: 1 },
        { label: "Mental disorder code", options: ["F09", "F99", "F06.8", "F44.9", "Z03.89"], answer: 2 }
      ],
      line: "**G40.209** complex partial seizures; **F06.8** other specified mental disorder due to complex partial seizures, dissociative symptoms",
      why: "Dissociative symptoms that are a **direct physiological effect** of seizures, with distress and impairment, fitting no specific disorder due to a medical condition: this is the manual’s own example (p. 804). The seizure code comes **immediately before** F06.8, the condition’s name replaces “another medical condition,” and the **symptom picture** follows the comma because the clinician states it (p. 804). A Chapter 8 dissociative code would ignore the medical cause."
    },
    {
      id: "w20-02", tag: "HIV, ER",
      "case": "A 41-year-old man with known HIV disease is brought to the emergency room by his sister for several weeks of irritability, odd behavior and poor sleep that have cost him his job. He is alert and attentive. The team judges the change to be a direct effect of the HIV infection, but there is too little history to say which specific disorder it is, and he is transferred before more can be learned.",
      parts: [
        { label: "Category", options: DX, answer: 1 },
        { label: "Listed first", options: ["F09", "B20 HIV disease", "F99", "Z03.89"], answer: 1 },
        { label: "Mental disorder code", options: ["F06.8", "F99", "F09", "F29", "F06.70"], answer: 2 }
      ],
      line: "**B20** HIV disease; **F09** unspecified mental disorder due to HIV disease",
      why: "A medical cause is established but the information is **insufficient** to name a specific disorder, an emergency room being the manual’s example: **unspecified … due to another medical condition, F09** (p. 805). **B20 HIV disease** is the chapter’s own example of the condition coded and listed **first** (p. 803). F09 lines carry **no symptom phrase** after the name (p. 805)."
    },
    {
      id: "w20-03", tag: "No chapter fits",
      "case": "A 33-year-old man has had distressing, impairing symptoms for a year that mix brief perceptual oddities, mild mood swings and bodily preoccupation, with no cluster dominant. Medical workup and toxicology are normal. After review, the team agrees the picture is not characteristic of any one chapter and is not covered by any chapter’s other specified or unspecified category. The psychiatrist writes down why.",
      parts: [
        { label: "Category", options: DX, answer: 2 },
        { label: "Code", options: ["F06.8", "F09", "F99", "F48.9", "Z03.89"], answer: 2 },
        { label: "What follows the name", options: ["The specific reason", "The medical condition", "Nothing", "“(provisional)” always"], answer: 0 }
      ],
      line: "**F99** other specified mental disorder, symptoms spread across several chapters with no dominant cluster",
      why: "All four conditions on p. 803 are met: a mental disorder (distress, impairment), no specific disorder, **no chapter-specific residual** fits, and no other diagnosis applies. The clinician **states the reason**, so record “other specified mental disorder” plus the reason (p. 805). The wording of the reason is the app’s example (app guidance)."
    },
    {
      id: "w20-04", tag: "ER, unclear",
      "case": "A man in his twenties is brought to the emergency room by police after shouting and pacing in a mall. He will not answer questions, no one knows him, and initial labs and toxicology are normal. Staff cannot tell whether the main problem is psychotic, mood-related or something else, and he is moved to another facility within hours.",
      parts: [
        { label: "Category", options: DX, answer: 3 },
        { label: "Code", options: ["F09", "F29", "F99", "Z03.89", "F06.8"], answer: 2 }
      ],
      line: "**F99** unspecified mental disorder",
      why: "Clearly a disturbance with impairment, but **not enough information** to place it in any chapter, an emergency room setting being the manual’s example (p. 805). With no identifiable symptom cluster, the chapter-wide **unspecified** category applies; it shares **F99** with other specified mental disorder (p. 805). Had a psychotic picture been evident, unspecified schizophrenia spectrum and other psychotic disorder (F29) would come first (app guidance; Section I, p. 22)."
    },
    {
      id: "w20-05", tag: "Nothing found",
      "case": "A 45-year-old teacher is referred after a complaint from a parent. A full psychiatric interview, collateral from her husband and her records show no symptoms, no distress, no impairment and no problem she wants help with.",
      parts: [
        { label: "Category", options: DX, answer: 4 },
        { label: "Code", options: ["F99", "Z71.1", "Z03.89", "No code is recorded"], answer: 2 }
      ],
      line: "**Z03.89** no diagnosis or condition",
      why: "She **was evaluated** and no mental disorder or condition is present: the additional code **Z03.89** (p. 805). It is not a disorder and not a placeholder for uncertainty. Its ICD-10-CM title differs (“Encounter for observation for other suspected diseases and conditions ruled out”); record the DSM name (outside the DSM)."
    },
    {
      id: "w20-06", tag: "Principal diagnosis",
      "case": "The woman in w20-01 is admitted to the psychiatric ward because of her dissociative spells due to complex partial seizures, recorded as other specified mental disorder due to complex partial seizures. The admission is for the mental disorder, and the discharge summary must show which diagnosis is principal.",
      parts: [
        { label: "Line 1", options: ["F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms", "G40.209 complex partial seizures", "Z03.89 no diagnosis or condition", "F44.89 other specified dissociative disorder"], answer: 1 },
        { label: "Line 2", options: ["G40.209 complex partial seizures", "F09 unspecified mental disorder due to complex partial seizures", "F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms", "F99 other specified mental disorder, seizures"], answer: 2 },
        { label: "“(principal diagnosis)” goes after", options: ["Line 1", "Line 2", "Neither line", "Both lines"], answer: 1 }
      ],
      line: "**G40.209** complex partial seizures; **F06.8** other specified mental disorder due to complex partial seizures, dissociative symptoms **(principal diagnosis)**",
      why: "Section I (pp. 23–24): the principal diagnosis is normally listed first, but for a mental disorder **due to another medical condition** ICD coding rules put the **medical condition first**, so the principal diagnosis sits on the **second** line and is marked “(principal diagnosis)”; outpatients get “(reason for visit)”."
    }
  ]);

  SP.add("ch20", "counting", [
    {
      id: "n20-01", tag: "F99 conditions",
      "case": "The chapter-wide residual categories (other specified and unspecified mental disorder, both F99).",
      ask: "Mark the conditions the manual requires before either F99 category can be used. Are there 4?",
      items: [
        ["The presentation is a mental disorder: symptoms bring distress or impairment", true, "Condition 1 (p. 803)."],
        ["Criteria for no specific Section II disorder are met", true, "Condition 2 (p. 803)."],
        ["None of the chapter-specific other specified or unspecified categories fits", true, "Condition 3 (p. 803)."],
        ["No other mental disorder diagnosis applies", true, "Condition 4 (p. 803)."],
        ["Symptoms have lasted at least 6 months", false, "The chapter sets no duration."],
        ["A medical condition has been ruled out by imaging", false, "Not a stated requirement; a medical cause points to F06.8 or F09 instead."]
      ],
      need: 4,
      met: true,
      why: "All **four** must hold together (p. 803). The third is the one examinees forget: a chapter’s own residual category always comes before F99."
    },
    {
      id: "n20-02", tag: "F06.8 lines",
      "case": "Dissociative symptoms judged a direct effect of complex partial seizures, recorded as other specified.",
      ask: "Mark the entries that belong in the record. Does it take 2 coded lines?",
      items: [
        ["G40.209 complex partial seizures", true, "The medical condition, coded and listed first (p. 804)."],
        ["F06.8 other specified mental disorder due to complex partial seizures, dissociative symptoms", true, "The mental disorder line, with condition name and symptom picture (p. 804)."],
        ["F44.89 other specified dissociative disorder", false, "A Chapter 8 residual ignores the medical cause."],
        ["F99 other specified mental disorder", false, "F99 is for presentations without a medical cause."],
        ["Z03.89 no diagnosis or condition", false, "A disorder is present."]
      ],
      need: 2,
      met: true,
      why: "**Two** lines: the condition’s code **immediately before** F06.8 (p. 804). The same two-line pattern applies to F09 (p. 805)."
    },
    {
      id: "n20-03", tag: "Shared code",
      "case": "The five entries in this chapter.",
      ask: "Mark the entries coded F99. Are there 2?",
      items: [
        ["Other specified mental disorder", true, "F99 (p. 805)."],
        ["Unspecified mental disorder", true, "F99 as well (p. 805)."],
        ["Other specified mental disorder due to another medical condition", false, "F06.8 (p. 803)."],
        ["Unspecified mental disorder due to another medical condition", false, "F09 (p. 805)."],
        ["No diagnosis or condition", false, "Z03.89 (p. 805)."]
      ],
      need: 2,
      met: true,
      why: "**Two** categories share **F99**; only the written name (and the stated reason) tells them apart (p. 805)."
    },
    {
      id: "n20-04", tag: "F06.8 examples",
      "case": "The manual’s list of example presentations under other specified mental disorder due to another medical condition.",
      ask: "Mark the presentations the manual actually lists there. Are 2 or more listed?",
      items: [
        ["Dissociative symptoms, for example with complex partial seizures", true, "The one listed example (p. 804)."],
        ["Psychotic symptoms due to a brain tumor", false, "Has its own disorder in Chapter 2; not listed here."],
        ["Depressive symptoms due to hypothyroidism", false, "Has its own disorder in Chapter 4; not listed here."],
        ["Mild cognitive decline due to a medical condition", false, "Mild neurocognitive disorder (Chapter 17); not listed here."]
      ],
      need: 2,
      met: false,
      why: "Only **one** example is listed: **dissociative symptoms** (p. 804). Many other “due to another medical condition” pictures already have a specific home in earlier chapters."
    },
    {
      id: "n20-05", tag: "Chapter contents",
      "case": "Codes and categories you might see on an exam answer sheet.",
      ask: "Mark the codes or categories that this chapter contains. Are there 5?",
      items: [
        ["F06.8 other specified mental disorder due to another medical condition", true, "p. 803."],
        ["F09 unspecified mental disorder due to another medical condition", true, "p. 805."],
        ["F99 other specified mental disorder", true, "p. 805."],
        ["F99 unspecified mental disorder", true, "p. 805."],
        ["Z03.89 no diagnosis or condition", true, "The additional code (p. 805)."],
        ["F29 unspecified schizophrenia spectrum and other psychotic disorder", false, "Chapter 2."],
        ["Z71.1 person with feared complaint in whom no diagnosis is made", false, "An ICD-10-CM code excluded from Z03 (outside the DSM)."]
      ],
      need: 5,
      met: true,
      why: "Four residual categories (two codes shared, so **three** distinct F codes) plus **one** additional code: **five** entries (pp. 803–805)."
    },
    {
      id: "n20-06", tag: "Apply the 4",
      "case": "A 28-year-old woman has had low mood, poor sleep and tearfulness for 3 weeks after a breakup, short of a major depressive episode, with distress and missed work. No medical cause or substance is found.",
      ask: "Mark the F99 conditions this presentation satisfies. Are all 4 satisfied?",
      items: [
        ["A mental disorder: distress or impairment is present", true, "Distress and missed work."],
        ["No specific Section II disorder is met", false, "Adjustment disorder (Chapter 7), a specific disorder, fits symptoms that begin within 3 months of an identifiable stressor (app reading of the facts)."],
        ["No chapter-specific other specified or unspecified category fits", false, "Even if adjustment disorder were ruled out, other specified depressive disorder (Chapter 4) would fit."],
        ["No other mental disorder diagnosis applies", false, "Adjustment disorder applies."]
      ],
      need: 4,
      met: false,
      why: "Only **1 of 4**: adjustment disorder comes first for a picture that follows a stressor, and failing that Chapter 4’s other specified depressive disorder applies, so F99 is **wrong** (p. 803; app guidance)."
    }
  ]);
})();
