/* Chapter 20 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [element, plain-language question, optional tip]   — "How to ask it" on each library page
   tx:  orientation to the practical use of the residual categories, labeled as outside the DSM; no Stahl links
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var CARE = {
    asOf: "October 2026",
    first: "Outside the DSM: a residual category is a **working label**, not an end point. Document **why** no criteria set is met, what is **missing** (collateral, records, investigations, time), and **when** the diagnosis will be reviewed. Treat the symptoms and the risk in front of you; the code does not decide the care.",
    points: [
      "**Record the reason** whenever you can (other specified rather than unspecified): it tells the next clinician what you saw (app guidance; the choice itself is the clinician’s, p. 803 and Section I p. 23).",
      "**Medical cause first**: for F06.8 and F09 the medical condition is coded and listed first (pp. 803–805); the medical team treats it while psychiatric symptom control runs alongside (app guidance).",
      "**Reassess** every unspecified diagnosis (app guidance, extending Section I’s emergency-department placeholder, p. 22). Set a date, obtain collateral and records, and replace it with the specific disorder or the chapter’s other specified category.",
      "**Safety is independent of the code**: assess suicide, violence and self-neglect risk the same way for F99 unspecified as for any named disorder (app guidance).",
      "**Z03.89 is a finding, not a dismissal**: write what was evaluated and what was excluded, and give the person a route back if symptoms develop (app guidance).",
      "Philippine practice note: the ICD-10 edition your institution or PhilHealth uses may differ from ICD-10-CM at the subcode level (codes such as Z03.89 and G40.209 are ICD-10-CM subcodes), so check the local code set, and record the DSM name beside the code so the written diagnosis is unambiguous, since F99 serves two categories (app guidance)."
    ],
    stahl: []
  };

  var ASK_AMC = [
    ["Distress or impairment", "“How much do these symptoms trouble you, and what have they stopped you doing?”", "Without clinically significant distress or impairment there is no mental disorder to code (p. 803)."],
    ["Medical cause", "“What medical conditions do you have, and did the symptoms start or change with them or their treatment?”", "The symptoms must be a direct physiological consequence of the condition (p. 803); review history, examination and tests."],
    ["Specific disorder first", "“Have you had changes in mood, anxiety, thinking, perception, memory or alertness?”", "A specific disorder due to another medical condition (psychotic, mood, anxiety, OCD-related, catatonia, delirium, neurocognitive, personality change) takes precedence."],
    ["Symptom picture", "“Describe exactly what happens, how long it lasts and how often.”", "Needed to name the manifestation for F06.8, e.g., dissociative symptoms (p. 804)."],
    ["Information", "“Who else can tell us about this? Are there records we can obtain?”", "Insufficient information is a reason for the unspecified category (p. 805)."]
  ];

  var ASK_PLAIN = [
    ["Distress or impairment", "“How much does this interfere with your life, work or relationships?”", "The first of the four conditions (p. 803)."],
    ["Any chapter?", "“Which symptoms bother you most: mood, worry, fear, thoughts, perceptions, memory, body, sleep, eating, behavior?”", "A recognizable cluster takes that chapter’s residual category, not F99 (p. 803)."],
    ["Medical and substance causes", "“Any medical illness, new medication, alcohol or drug use around the time this started?”", "A medical cause moves the diagnosis to F06.8/F09 or a specific due-to-AMC disorder; a substance or medication cause moves it to the matching substance/medication-induced disorder (in its symptom chapter) or to Chapter 16 (app guidance)."],
    ["Course", "“When did it start, how has it changed, and what makes it better or worse?”", "Helps decide whether a specific disorder will declare itself (provisional, Section I p. 24)."],
    ["Information", "“May we speak to someone who knows you well, and obtain your records?”", "Insufficient information supports unspecified; record the plan to review (p. 805)."]
  ];

  SP.dxExtra = (SP.dxExtra || []).concat([
    { id: "other-specified-mental-amc", ask: ASK_AMC, tx: CARE },
    { id: "unspecified-mental-amc", ask: ASK_AMC, tx: CARE },
    { id: "other-specified-mental-disorder", ask: ASK_PLAIN, tx: CARE },
    { id: "unspecified-mental-disorder", ask: ASK_PLAIN, tx: CARE },
    {
      id: "no-diagnosis",
      ask: [
        ["Reason for referral", "“Who suggested this assessment, and what were they worried about?”", "Third-party referrals (employer, court, family) are the usual setting (app guidance)."],
        ["Symptoms", "“Over the past months, any change in mood, sleep, appetite, energy, concentration, thinking or behavior?”", "Screen each chapter briefly."],
        ["Functioning", "“How are work, studies, relationships and daily life going?”", "No distress and no impairment supports the conclusion."],
        ["Psychosocial problems", "“Is there anything in your life you would like help with: relationships, work, housing, money, legal matters?”", "A problem that needs attention takes a Z code from Chapter 22, Other Conditions That May Be a Focus of Clinical Attention (not yet in the app), instead of Z03.89 (app guidance)."],
        ["Collateral", "“May we hear from someone who knows you well?”", "A negative evaluation is stronger with collateral and records."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Outside the DSM: Z03.89 documents a **completed evaluation with a negative result** (p. 805). Write what was assessed, what was excluded and why, and how the person can return if symptoms appear.",
        points: [
          "Do not use it to close an **uncertain** case: that is an unspecified category or a provisional diagnosis (pp. 805, 24).",
          "Do not use it when a **psychosocial problem** was found and is the focus of attention: use a Z code from Chapter 22, Other Conditions That May Be a Focus of Clinical Attention (not yet in the app) (app guidance).",
          "ICD-10-CM titles the code “encounter for observation for other suspected diseases and conditions ruled out”; record the DSM name beside it (app note)."
        ],
        stahl: []
      }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "no-clear-fit", title: "Symptoms that fit no specific diagnosis",
      intro: "First confirm that the symptoms cause **distress or impairment** (otherwise there is no mental disorder to code). Then ask whether a **specific disorder** is met or expected (provisional), whether a **medical condition** is the direct cause, and whether the picture belongs to a **chapter**; only then consider the chapter-wide residual categories (p. 803). The [[helper:residual|residual-category helper]] follows this order.",
      ask: ["What are the symptoms, exactly, and since when?", "How much do they interfere with your life?", "Any medical illness, medication, alcohol or drug use around the onset?", "Which group do they belong to: mood, anxiety, thinking, perception, memory, body, sleep, eating, behavior?", "Who else can tell us about this, and are there records?", "Any thoughts of harming yourself or anyone else?"],
      mustNotMiss: ["**A medical cause** (pp. 803–804) or a **substance cause** (app guidance) hiding behind an atypical picture.", "**Delirium** when attention and awareness fluctuate (Chapter 17).", "**Suicide risk**, which the code does not change (app guidance).", "A **specific disorder** that will declare itself: review every unspecified diagnosis (Section I, pp. 22–24)."],
      helpers: ["residual"],
      items: [
        { ch: "ch20", dx: "other-specified-mental-amc", when: "Direct effect of a medical condition, no specific due-to-AMC disorder fits, and you state the symptom picture; medical condition coded first." },
        { ch: "ch20", dx: "unspecified-mental-amc", when: "Same, but you do not state the reason or there is too little information; medical condition coded first." },
        { ch: "ch20", dx: "other-specified-mental-disorder", when: "Fits no chapter at all, and you record the reason." },
        { ch: "ch20", dx: "unspecified-mental-disorder", when: "Fits no chapter, reason not recorded, or too little information (emergency setting)." },
        { ch: "ch20", dx: "no-diagnosis", when: "Full evaluation, no mental disorder or condition found." },
        { ch: "ch08", dx: "other-specified-dissociative", when: "A recognizable dissociative picture without a medical cause: the chapter residual wins." },
        { ch: "ch04", dx: "other-specified-depressive", when: "A recognizable depressive picture below threshold: the chapter residual wins." },
        { ch: "ch02", dx: "unspecified-psychotic", when: "Emergency setting with an identifiable psychotic cluster: the chapter’s unspecified category is the placeholder (Section I, p. 22)." },
        { ch: "ch07", dx: "adjustment", when: "Symptoms within 3 months of a stressor, out of proportion or impairing." },
        { ch: "ch17", dx: "delirium", when: "Acute, fluctuating disturbance of attention and awareness." }
      ]
    },
    {
      id: "neuro-symptoms",
      items: [
        { ch: "ch20", dx: "other-specified-mental-amc", when: "Dissociative or other psychiatric symptoms that are a direct effect of a confirmed neurological condition such as complex partial seizures, fitting no specific due-to-AMC disorder (pp. 803–804)." }
      ]
    },
    {
      id: "unreal",
      items: [
        { ch: "ch20", dx: "other-specified-mental-amc", when: "Depersonalization or derealization proven to be ictal or peri-ictal in a seizure disorder: coded after the seizure code, the manual’s F06.8 example (p. 804). App reasoning: not a Chapter 8 disorder, because its criteria exclude medically caused symptoms (Chapter 8)." }
      ]
    },
    {
      id: "memory-gaps",
      items: [
        { ch: "ch20", dx: "other-specified-mental-amc", when: "Dissociative symptoms judged a direct physiological effect of a medical condition (the manual’s example is complex partial seizures), when no specific due-to-AMC disorder fits (p. 804)." }
      ]
    },
    {
      id: "confusion",
      items: [
        { ch: "ch20", dx: "unspecified-mental-amc", when: "Behavioral or psychiatric change attributed to a medical condition, attention and orientation intact (so not delirium), too little information to characterize it yet; medical condition coded first (p. 805)." }
      ]
    }
  ]);
})();
