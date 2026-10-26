/* Chapter 3 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var MANIA_ASK = [
    ["A Mood and energy", "“Has there been a time when you felt unusually happy, high or irritable, and full of energy, for days at a time? Did others notice you weren’t yourself?”", "Ask family; insight is often poor during highs."],
    ["Duration", "“How many days did it last? Was it most of the day, nearly every day?”", "Mania ≥1 week (any duration if hospitalized); hypomania ≥4 consecutive days."],
    ["B1 Grandiosity", "“Did you feel you had special talents, powers or plans?”"],
    ["B2 Sleep", "“How much did you sleep? Did you feel tired the next day?”", "Rested after little sleep is decreased need; tired after little sleep is insomnia."],
    ["B3 Speech", "“Were people telling you to slow down or that they couldn’t get a word in?”"],
    ["B4 Racing thoughts", "“Were your thoughts racing, jumping from one idea to another?”"],
    ["B5 Distractibility", "“Was it hard to stay on one thing because everything caught your attention?”"],
    ["B6 Activity", "“Did you take on many new projects, or feel restless and unable to sit still?”"],
    ["B7 Risky behavior", "“Did you spend money, drive, use drugs or have sex in ways that were unusual for you or that you later regretted?”"],
    ["Severity", "“Did it cause problems at work or with family? Were you hospitalized? Did you hear or believe things others didn’t?”", "Marked impairment, hospitalization or psychosis make it mania."],
    ["Triggers", "“Had you started any new medicine, such as an antidepressant or steroid, or used stimulants?”"]
  ];
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "bipolar-i",
      ask: MANIA_ASK.concat([["Depressive episodes", "“Have there been times you felt very low for 2 weeks or more?”", "Not required for bipolar I, but common."], ["Pattern", "“How many episodes in the past year? Do they come at a certain season, or after childbirth?”", "Rapid cycling, seasonal pattern, peripartum onset."]]),
      tx: {
        asOf: "October 2026",
        first: "Acute mania: [[stahl:drugs/lithium|lithium]], [[stahl:drugs/valproate|valproate]] or an antipsychotic, or a mood stabilizer plus an antipsychotic when severe. Stop antidepressants.",
        points: [
          "FDA-approved antipsychotics for mania include aripiprazole, asenapine, cariprazine, olanzapine, quetiapine, risperidone and ziprasidone; milsaperidone was approved in February 2026 for acute manic or mixed episodes.",
          "**Bipolar depression**: FDA-approved options are [[stahl:drugs/quetiapine|quetiapine]], [[stahl:drugs/lurasidone|lurasidone]], [[stahl:drugs/cariprazine|cariprazine]], [[stahl:drugs/lumateperone|lumateperone]] and olanzapine-fluoxetine. Avoid antidepressant monotherapy in bipolar I.",
          "**Maintenance**: lithium (which also lowers suicide risk), [[stahl:drugs/lamotrigine|lamotrigine]] (prevents depression more than mania), valproate, quetiapine, or long-acting injectable aripiprazole or risperidone.",
          "Lithium: monitor levels, kidney and thyroid function and calcium; NSAIDs, ACE inhibitors and thiazides raise levels.",
          "Valproate is a major teratogen; avoid it in anyone who could become pregnant unless no alternative works.",
          "[[stahl:drugs/carbamazepine|Carbamazepine]]: test for **HLA-B*15:02** first in people of Asian ancestry (including Filipino patients), because of the risk of Stevens-Johnson syndrome.",
          "ECT for severe, psychotic, catatonic or treatment-resistant episodes. Add psychoeducation, family-focused therapy, interpersonal and social rhythm therapy, and protect sleep."
        ],
        stahl: [["Lithium", "c/ch07/guide/s7-lithium"], ["Valproate and carbamazepine", "c/ch07/guide/s7-valproate-cbz"], ["Lamotrigine", "c/ch07/guide/s7-lamotrigine"], ["Antipsychotics in mania", "c/ch07/guide/s7-sda-mania"], ["Bipolar depression", "c/ch07/guide/s7-bipolar-depression"], ["Combinations", "c/ch07/guide/s7-bipolar-combos"]]
      }
    },
    {
      id: "bipolar-ii",
      ask: MANIA_ASK.concat([["Depressive episodes", "“Have there been times you felt very low, for 2 weeks or more?”", "At least one major depressive episode is required; patients usually present depressed."]]),
      tx: {
        asOf: "October 2026",
        first: "Bipolar II depression: [[stahl:drugs/quetiapine|quetiapine]] and [[stahl:drugs/lumateperone|lumateperone]] are FDA-approved; lithium and lamotrigine are widely used for prevention.",
        points: [
          "Use antidepressants cautiously, if at all, and with a mood stabilizer; watch for switching and rapid cycling.",
          "Psychoeducation, regular sleep and routines, and monitoring for suicide risk, which is high in bipolar II."
        ],
        stahl: [["Bipolar depression", "c/ch07/guide/s7-bipolar-depression"], ["Lamotrigine", "c/ch07/guide/s7-lamotrigine"], ["Lithium", "c/ch07/guide/s7-lithium"]]
      }
    },
    {
      id: "cyclothymic",
      ask: [
        ["Pattern", "“For the past 2 years, how often has your mood swung up or down? How long do the highs and lows last?”", "Numerous subthreshold periods, present at least half the time."],
        ["Symptom-free periods", "“What is the longest you have felt like your usual self?”", "Never more than 2 months."],
        ["Full episodes", "“Has a high or low ever been severe enough to stop you working or to need treatment?”", "Any full episode excludes cyclothymia."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Psychoeducation, mood charting, regular sleep and routines, and psychotherapy.",
        points: ["Mood stabilizers are used off-label when symptoms impair functioning; avoid antidepressant monotherapy.", "Follow up: 15%–50% later develop bipolar I or II disorder."],
        stahl: [["Lithium", "c/ch07/guide/s7-lithium"], ["Lamotrigine", "c/ch07/guide/s7-lamotrigine"]]
      }
    },
    {
      id: "substance-induced-bipolar",
      ask: [
        ["Timeline", "“Did the high start after you began a new medicine or used drugs? Has it happened when you weren’t using anything?”"],
        ["Medications", "“Are you taking steroids, an antidepressant, stimulants or Parkinson’s medicines?”"],
        ["Persistence", "After stopping: “Has the high settled?”", "A full syndrome that persists beyond the drug’s effect points to bipolar I or II."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Stop or reduce the causative substance or medication; short-term antipsychotic or benzodiazepine for agitation and sleep.",
        points: ["Treat the substance use disorder.", "If steroids cannot be stopped, a mood stabilizer or antipsychotic can be used alongside."],
        stahl: [["Antipsychotics in mania", "c/ch07/guide/s7-sda-mania"], ["Addiction", "c/ch13/guide"]]
      }
    },
    {
      id: "bipolar-due-to-amc",
      ask: [
        ["Timeline", "“Did the change begin around a new illness or when an illness worsened?”", "Usually within a month of the medical condition’s onset."],
        ["Physical symptoms", "“Any weight loss, tremor, palpitations, weakness, headaches or memory problems?”"],
        ["Workup", "Thyroid tests, neurological examination and imaging guided by the history, especially for first-onset mania after 50."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat the underlying condition (for example hyperthyroidism, Cushing’s syndrome, a brain lesion).",
        points: ["Use an antipsychotic or mood stabilizer for safety and sleep while the cause is treated."],
        stahl: [["Antipsychotics in mania", "c/ch07/guide/s7-sda-mania"]]
      }
    },
    {
      id: "other-specified-bipolar",
      ask: [["Episode length", "“How long did each high last?”", "2–3 days with past depressions = short-duration hypomania."], ["Symptom count", "“During the highs, which changes did you notice?”", "Too few symptoms for hypomania = hypomanic episodes with insufficient symptoms."]],
      tx: { asOf: "October 2026", first: "Treat according to the predominant problem, usually the depressions; be cautious with antidepressant monotherapy.", points: ["Follow up for evolution into bipolar I or II."], stahl: [["Bipolar depression", "c/ch07/guide/s7-bipolar-depression"]] }
    },
    {
      id: "unspecified-bipolar",
      tx: { asOf: "October 2026", first: "Ensure safety and stabilize; gather collateral history, toxicology and medical workup to reach a specific diagnosis.", points: [], stahl: [] }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "elevated", title: "Elevated or irritable mood with little sleep",
      items: [
        { ch: "ch03", dx: "bipolar-due-to-amc", when: "Hyperthyroidism, Cushing’s syndrome, stroke, multiple sclerosis or brain injury, with a time link." },
        { ch: "ch03", dx: "other-specified-bipolar", when: "Highs of 2–3 days, or with too few symptoms, plus past depressions." },
        { ch: "ch03", dx: "unspecified-bipolar", when: "Clearly bipolar-type, but not enough information yet." },
        { ch: "ch02", dx: "schizoaffective-disorder", when: "Mania plus ≥2 weeks of psychosis without mood symptoms." }
      ]
    },
    {
      id: "mood-swings", title: "Mood swings",
      intro: "“Mood swings” can mean anything from hours of reactive anger to weeks-long episodes. Pin down how long each swing lasts, what triggers it, and whether there are distinct episodes of elevated mood.",
      ask: ["How long does each up or down last: hours, days or weeks?", "Are the swings triggered by events, especially in relationships?", "During the highs, is there decreased need for sleep and more energy?", "Any substances or medicines?", "Since when?"],
      mustNotMiss: ["**Mania or mixed states**, with risky behavior.", "**Suicide risk**, especially with mixed features or borderline traits."],
      helpers: ["episode", "bipolar"],
      items: [
        { ch: "ch03", dx: "bipolar-i", when: "Distinct manic episodes lasting a week or more (or needing hospitalization)." },
        { ch: "ch03", dx: "bipolar-ii", when: "Hypomanic episodes of ≥4 days plus major depressive episodes." },
        { ch: "ch03", dx: "cyclothymic", when: "Frequent subthreshold highs and lows for ≥2 years." },
        { ch: "ch18", dx: "borderline-pd", when: "Shifts over hours, triggered by interpersonal events, with emptiness and fear of abandonment." },
        { ch: "ch04", dx: "dmdd", when: "In children: chronic irritability with frequent severe outbursts, not episodes." },
        { ch: "ch03", dx: "substance-induced-bipolar", when: "Swings tied to stimulant use or withdrawal, or to steroids." },
        { ch: "ch01", dx: "adhd", when: "Lifelong impulsivity and emotional reactivity, without distinct episodes." }
      ]
    },
    {
      id: "low-mood", title: "Low mood or sadness",
      items: [
        { ch: "ch03", dx: "other-specified-bipolar", when: "Depressions plus brief or subthreshold hypomanic periods." }
      ]
    },
    {
      id: "perinatal", title: "Mood change during pregnancy or after childbirth",
      items: [
        { ch: "ch03", dx: "bipolar-ii", when: "Hypomania can begin after delivery (with peripartum onset) and is easily mistaken for relief." }
      ]
    }
  ]);
})();
