/* Chapter 3 practice drills.
   dxline:   build the full diagnosis line (diagnosis, episode, coded specifier, uncoded specifiers, code).
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var EP = ["Current episode manic", "Current episode hypomanic", "Current episode depressed", "Most recent episode manic", "Most recent episode hypomanic", "Most recent episode depressed"];
  var SEV = ["Mild", "Moderate", "Severe", "With psychotic features", "In partial remission", "In full remission", "None (hypomanic episode)"];
  var SPEC = ["With anxious distress", "With mixed features", "With rapid cycling", "With melancholic features", "With atypical features", "With mood-congruent psychotic features", "With mood-incongruent psychotic features", "With catatonia", "With peripartum onset", "With seasonal pattern"];
  function bp1(ep, sev, spec, codes, code) {
    return [
      { label: "Diagnosis", options: ["Bipolar I disorder", "Bipolar II disorder", "Cyclothymic disorder", "Schizoaffective disorder, bipolar type"], answer: 0 },
      { label: "Current or most recent episode", options: EP, answer: ep },
      { label: "Severity, psychotic features or remission (the coded slot)", options: SEV, answer: sev },
      { label: "Specifiers without codes", options: SPEC, answer: spec, multi: true },
      { label: "ICD-10-CM code", options: codes, answer: code }
    ];
  }

  SP.add("ch03", "dxline", [
    {
      id: "w3-01", tag: "Bipolar I",
      "case": "A 30-year-old is admitted in a manic episode, believing he is a messenger chosen by God to save the world. He has had one previous manic episode.",
      parts: bp1(0, 3, [5], ["F31.13", "F31.2", "F31.5", "F25.0"], 1),
      line: "**F31.2** Bipolar I disorder, current episode manic, with mood-congruent psychotic features",
      why: "Psychotic features are coded **regardless of severity** (F31.2 for a manic episode). Grandiose, divine-mission themes fit mania: **mood-congruent**."
    },
    {
      id: "w3-02", tag: "Bipolar I",
      "case": "A 42-year-old with bipolar I disorder (one past manic episode) has a current moderate major depressive episode. On most days she feels tense, restless and worried something terrible will happen.",
      parts: bp1(2, 1, [0], ["F31.31", "F31.32", "F31.4", "F33.1"], 1),
      line: "**F31.32** Bipolar I disorder, current episode depressed, moderate, with anxious distress",
      why: "Current depressed, moderate = **F31.32**. Three anxious distress symptoms: with anxious distress (moderate)."
    },
    {
      id: "w3-03", tag: "Bipolar I",
      "case": "A 37-year-old with bipolar I disorder has 5 days of elevated mood, little need for sleep and talkativeness, without impairment, psychosis or hospitalization.",
      parts: bp1(1, 6, [], ["F31.0", "F31.81", "F31.11", "F31.71"], 0),
      line: "**F31.0** Bipolar I disorder, current episode hypomanic",
      why: "A current hypomanic episode in bipolar I is **F31.0**; severity and psychotic specifiers do not apply to hypomania."
    },
    {
      id: "w3-04", tag: "Bipolar I",
      "case": "A 55-year-old with bipolar I disorder last had a manic episode 2 years ago. For the past year she has had no significant mood symptoms.",
      parts: bp1(3, 5, [], ["F31.73", "F31.74", "F31.76", "F31.9"], 1),
      line: "**F31.74** Bipolar I disorder, most recent episode manic, in full remission",
      why: "Most recent episode manic, no significant symptoms for at least 2 months = **in full remission**, F31.74."
    },
    {
      id: "w3-05", tag: "Bipolar I",
      "case": "A 34-year-old with bipolar I disorder is in a moderate manic episode; on most days she is also tearful, feels worthless and has lost interest in things, which her family notices. She has had five mood episodes in the last 12 months, each separated by switches or 2-month remissions.",
      parts: bp1(0, 1, [1, 2], ["F31.12", "F31.13", "F31.32", "F31.0"], 0),
      line: "**F31.12** Bipolar I disorder, current episode manic, moderate, with mixed features, with rapid cycling",
      why: "Three depressive symptoms during mania = **with mixed features**. Four or more properly separated episodes in 12 months = **with rapid cycling**, which describes the pattern of episodes."
    },
    {
      id: "w3-06", tag: "Bipolar I",
      "case": "A 47-year-old with bipolar I disorder is in a severe major depressive episode that began in November, as her last three depressive episodes did; they all remitted in spring. Nothing gives her pleasure, she is worst in the mornings, wakes 3 hours early and has lost weight. No psychosis.",
      parts: bp1(2, 2, [3, 9], ["F31.32", "F31.4", "F31.5", "F33.2"], 1),
      line: "**F31.4** Bipolar I disorder, current episode depressed, severe, with melancholic features, with seasonal pattern",
      why: "Bipolar I depressed, **severe = F31.4**: the depressed codes run F31.31, F31.32, then F31.4 (severe) and F31.5 (psychotic). Loss of pleasure plus morning worsening, early waking and weight loss = melancholic features. A regular fall onset with spring remissions = seasonal pattern."
    },
    {
      id: "w3-07", tag: "Bipolar II",
      "case": "A 28-year-old has had two hypomanic episodes and is now in a moderate major depressive episode. On most days she is also unusually talkative, her thoughts race and she has started several new projects, which her partner notices.",
      parts: [
        { label: "Diagnosis", options: ["Bipolar II disorder", "Bipolar I disorder", "Major depressive disorder", "Cyclothymic disorder"], answer: 0 },
        { label: "Current or most recent episode", options: ["Current episode depressed", "Current episode hypomanic"], answer: 0 },
        { label: "Severity or remission", options: ["Mild", "Moderate", "Severe", "In partial remission"], answer: 1 },
        { label: "Specifiers", options: SPEC, answer: [1], multi: true },
        { label: "ICD-10-CM code", options: ["F31.81", "F31.32", "F33.1", "F31.89"], answer: 0 }
      ],
      line: "**F31.81** Bipolar II disorder, current episode depressed, moderate severity, with mixed features",
      why: "Bipolar II has **one code, F31.81**; the episode, severity and specifiers are written out. This is the manual’s own example."
    },
    {
      id: "w3-08", tag: "Cyclothymic",
      "case": "A 26-year-old has had 3 years of many subthreshold hypomanic and depressive periods, never a full episode, never well for more than a few weeks. During the low periods she is often keyed up and worried.",
      parts: [
        { label: "Diagnosis", options: ["Cyclothymic disorder", "Bipolar II disorder", "Persistent depressive disorder", "Other specified bipolar disorder"], answer: 0 },
        { label: "Specifier", options: ["With anxious distress", "With mixed features", "With rapid cycling", "None"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F34.0", "F34.1", "F31.81", "F31.89"], answer: 0 }
      ],
      line: "**F34.0** Cyclothymic disorder, with anxious distress",
      why: "Cyclothymic disorder is **F34.0** (F34.1 is persistent depressive disorder). With anxious distress is its only specifier."
    },
    {
      id: "w3-09", tag: "Substance-induced",
      "case": "A 24-year-old with moderate amphetamine use disorder becomes grandiose, sleepless and pressured during a binge; the manic symptoms predominate and need attention.",
      parts: [
        { label: "Comorbid use disorder (named first)", options: ["None", "Mild amphetamine use disorder", "Moderate amphetamine use disorder", "Severe amphetamine use disorder"], answer: 2 },
        { label: "Induced disorder", options: ["Amphetamine-induced bipolar and related disorder", "Bipolar I disorder", "Amphetamine-induced psychotic disorder", "Stimulant intoxication"], answer: 0 },
        { label: "Onset", options: ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F15.14", "F15.24", "F15.94", "F15.259"], answer: 1 }
      ],
      line: "**F15.24** moderate amphetamine use disorder with amphetamine-induced bipolar and related disorder, with onset during intoxication",
      why: "Bipolar and related disorder codes end in **.x4** (as for depression); psychotic disorder codes end in .x59. Moderate or severe use disorder = 4th character **2**."
    },
    {
      id: "w3-10", tag: "Medical cause",
      "case": "A 50-year-old with untreated hyperthyroidism has elevated mood, increased energy and pressured speech that do not meet full criteria for a manic or hypomanic episode.",
      parts: [
        { label: "Listed first", options: ["E05.90 hyperthyroidism", "The bipolar and related disorder"], answer: 0 },
        { label: "Specifier", options: ["With manic features", "With manic- or hypomanic-like episode", "With mixed features"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F06.33", "F06.34", "F31.0", "F06.32"], answer: 0 }
      ],
      line: "**E05.90** hyperthyroidism; **F06.33** bipolar and related disorder due to hyperthyroidism, with manic features",
      why: "Full criteria for an episode are not met = **with manic features**. Both manic specifiers share **F06.33**; F06.34 is with mixed features. The medical condition is listed first."
    },
    {
      id: "w3-11", tag: "Other specified",
      "case": "A 32-year-old has had three major depressive episodes and five separate periods of 2–3 days of full hypomanic symptoms, never a hypomanic episode lasting 4 days.",
      parts: [
        { label: "Diagnosis", options: ["Other specified bipolar and related disorder", "Bipolar II disorder", "Cyclothymic disorder", "Major depressive disorder"], answer: 0 },
        { label: "Reason recorded", options: ["Short-duration hypomanic episodes (2–3 days) and major depressive episodes", "Hypomanic episodes with insufficient symptoms", "Hypomanic episode without prior major depressive episode", "Short-duration cyclothymia"], answer: 0 },
        { label: "ICD-10-CM code", options: ["F31.89", "F31.9", "F31.81", "F39"], answer: 0 }
      ],
      line: "**F31.89** Other specified bipolar and related disorder, short-duration hypomanic episodes and major depressive episodes",
      why: "Hypomanic episodes need **4 days**. Shorter ones with past major depressive episodes are a named example of other specified bipolar and related disorder, recorded with the reason."
    }
  ]);

  SP.add("ch03", "counting", [
    {
      id: "k3-01", tag: "Manic Criterion B",
      "case": "For 10 days a 29-year-old has had **euphoric** mood and increased energy, plus:",
      ask: "With elevated or expansive mood, Criterion B needs three of seven symptoms. Mark the findings that count.",
      items: [
        ["Sleeps 3 hours and feels full of energy", true, "Decreased need for sleep (B2)."],
        ["Lies awake worrying and feels exhausted next day", false, "That is **insomnia**, not decreased need for sleep."],
        ["Talks so fast others cannot interrupt", true, "Pressured speech (B3)."],
        ["Believes she will win a Nobel Prize for her new diet", true, "Grandiosity (B1)."],
        ["Feels irritable when interrupted", false, "Irritability is a mood (Criterion A), not a B symptom."]
      ],
      need: 3, met: true,
      why: "Three B symptoms with euphoric mood meet Criterion B; with ≥1 week and marked impairment, this is a manic episode."
    },
    {
      id: "k3-02", tag: "Irritable mood",
      "case": "For 9 days a 35-year-old man has had **irritable** (not euphoric) mood and increased energy, plus:",
      ask: "When the mood is only irritable, Criterion B needs **four** symptoms. Mark the findings that count.",
      items: [
        ["Sleeps 4 hours and does not feel tired", true, "Decreased need for sleep."],
        ["Is easily drawn to irrelevant noises", true, "Distractibility."],
        ["Has started three businesses this week", true, "Increased goal-directed activity."],
        ["Snaps at his coworkers", false, "Irritability is the mood itself, not an extra symptom."]
      ],
      need: 4, met: false,
      why: "Only three B symptoms with irritable mood: not enough. Four are required when the mood is only irritable. Ask about speech, racing thoughts, grandiosity and risky behavior."
    },
    {
      id: "k3-03", tag: "Mania or hypomania?",
      "case": "During a 5-day period of elevated mood with four B symptoms, a woman:",
      ask: "Mark the findings that make the episode **manic** rather than hypomanic.",
      items: [
        ["Was admitted to hospital to keep her safe", true, "Hospitalization makes it mania, whatever the duration."],
        ["Believed she had been chosen by God", true, "Psychotic features make it mania."],
        ["Was noticed by friends to be unusually cheerful", false, "Observable change is required for hypomania too."],
        ["Was more productive at work than usual", false, "Increased productivity is typical of hypomania, not marked impairment."]
      ],
      met: true,
      why: "Hospitalization or psychotic features (or marked impairment) make the episode manic, so this is bipolar I."
    },
    {
      id: "k3-04", tag: "Mixed features in mania",
      "case": "During most days of a manic episode, a 40-year-old:",
      ask: "Mixed features in mania needs three of six depressive symptoms. Mark the findings that count.",
      items: [
        ["Feels deeply sad and is tearful", true, "Prominent dysphoria or depressed mood."],
        ["Cannot sleep", false, "Insomnia is **not** on the list (it overlaps with mania)."],
        ["Has lost interest in everything", true, "Diminished interest or pleasure."],
        ["Cannot concentrate", false, "Poor concentration is not on the list (it overlaps with distractibility)."],
        ["Feels worthless and guilty", true, "Worthlessness or guilt."],
        ["Thinks about death every day", true, "Recurrent thoughts of death."]
      ],
      need: 3, met: true,
      why: "Four of the six count. The list is dysphoria, anhedonia, psychomotor retardation, fatigue, worthlessness or guilt, and thoughts of death; insomnia, appetite and concentration are left out."
    },
    {
      id: "k3-05", tag: "Rapid cycling",
      "case": "A woman with bipolar II disorder, over the last 12 months:",
      ask: "Mark each period that counts as a separate episode toward rapid cycling.",
      items: [
        ["A major depressive episode in January", true, "A full episode."],
        ["A hypomanic episode right after it, in February", true, "A switch to the opposite pole separates episodes."],
        ["A 2-week return of depression in March, after 3 weeks of normal mood", false, "Without a 2-month remission or a switch, it continues the same episode (and 2 weeks of depression is not a new episode here)."],
        ["A major depressive episode in July, after 3 months of normal mood", true, "Separated by a remission of at least 2 months."],
        ["A hypomanic episode in October", true, "A switch to the opposite pole."]
      ],
      need: 4, met: true,
      why: "Four properly separated episodes in 12 months: with rapid cycling."
    },
    {
      id: "k3-06", tag: "Cyclothymic requirements",
      "case": "A 27-year-old is evaluated for cyclothymic disorder.",
      ask: "Mark the findings that satisfy a cyclothymic disorder requirement.",
      items: [
        ["Numerous periods of hypomanic symptoms for 2½ years", true, "At least 2 years (1 in youth) of hypomanic-symptom periods."],
        ["Numerous periods of depressive symptoms in the same years", true, "Depressive-symptom periods are also required."],
        ["Symptoms present at least half the time", true, "Required."],
        ["One 3-month stretch without symptoms last year", false, "Never without symptoms for **more than 2 months** at a time."],
        ["Never met criteria for a full episode", true, "Required."]
      ],
      met: false,
      why: "The 3-month symptom-free stretch breaks Criterion B. Consider other specified bipolar disorder or reassess the timeline."
    },
    {
      id: "k3-07", tag: "Antidepressant-emergent symptoms",
      "case": "After starting an SSRI, a man with depression:",
      ask: "Mark the findings that count as evidence of a true hypomanic episode.",
      items: [
        ["Felt jittery and irritable in the first week", false, "One or two symptoms such as irritability or edginess are not enough."],
        ["Developed elevated mood and three B symptoms for 5 days", true, "A full hypomanic syndrome."],
        ["The syndrome persisted 2 weeks after the SSRI was stopped", true, "Persistence beyond the physiological effect of the drug."],
        ["Sleeps a little less but feels tired", false, "That is insomnia, not decreased need for sleep."]
      ],
      met: true,
      why: "A full hypomanic syndrome that persists beyond the drug’s effect counts as a hypomanic episode. With his past depression, the diagnosis becomes bipolar II."
    },
    {
      id: "k3-08", tag: "Bipolar II requirements",
      "case": "A 31-year-old is evaluated for bipolar II disorder.",
      ask: "Mark the findings that satisfy a bipolar II requirement.",
      items: [
        ["A 6-day period of elevated mood and four B symptoms, noticed by friends", true, "A hypomanic episode."],
        ["Two past major depressive episodes", true, "At least one is required."],
        ["Episodes cause distress and impairment, mainly during depression", true, "Required (often from the depressions or the unpredictable cycling)."],
        ["Once hospitalized during a high, after 4 days", false, "Hospitalization makes that episode **manic**, which excludes bipolar II."]
      ],
      met: false,
      why: "One manic episode (the hospitalized high) means **bipolar I**, regardless of the other findings."
    },
    {
      id: "k3-09", tag: "Hypomanic episode",
      "case": "A 26-year-old describes a recent high.",
      ask: "Mark the findings that fit a hypomanic episode.",
      items: [
        ["Lasted 5 consecutive days, most of the day", true, "At least 4 consecutive days."],
        ["Elevated mood and increased energy with three B symptoms", true, "Criteria A and B."],
        ["A clear change in functioning that others noticed", true, "Required for hypomania."],
        ["Severe enough that she lost her job", false, "**Marked impairment** makes the episode manic."]
      ],
      met: false,
      why: "Losing her job reflects marked impairment: this was a **manic** episode."
    },
    {
      id: "k3-10", tag: "Medical cause clues",
      "case": "A 62-year-old develops mania for the first time.",
      ask: "Mark the findings that point toward a medical or substance cause.",
      items: [
        ["First manic episode after age 60", true, "Late first onset is atypical and calls for a workup."],
        ["Began within days of starting high-dose prednisone", true, "A time link to a medication that can cause mania."],
        ["New left-sided weakness", true, "Focal neurological signs suggest a brain lesion."],
        ["A strong family history of bipolar I disorder", false, "Family history favors a primary bipolar disorder."]
      ],
      met: true,
      why: "Late onset, a medication time link and new neurological signs all require evaluation before diagnosing bipolar I."
    }
  ]);
})();
