/* Chapter 11 practice drills.
   dxline:   build the full diagnosis line (diagnosis, subtype, code). Codes unchanged through October 2026.
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var DX = ["Enuresis", "Encopresis", "Other specified elimination disorder", "Unspecified elimination disorder", "No elimination disorder"];
  var ENU = ["Nocturnal only", "Diurnal only", "Nocturnal and diurnal"];
  var ENC = ["With constipation and overflow incontinence", "Without constipation and overflow incontinence"];
  var SYM = ["With urinary symptoms", "With fecal symptoms"];

  SP.add("ch11", "dxline", [
    {
      id: "w11-01", tag: "Enuresis",
      "case": "An 8-year-old boy has wet the bed five nights a week since infancy and is dry by day. Workup is normal; no medication.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Subtype", options: ENU, answer: 0 },
        { label: "Code", options: ["F98.0", "F98.1", "N39.498", "R32", "R15.9"], answer: 0 }
      ],
      line: "**F98.0** Enuresis, nocturnal only",
      why: "Bedwetting more than twice weekly for over 3 months at age 8, no medical cause; wetting only in sleep."
    },
    {
      id: "w11-02", tag: "Enuresis",
      "case": "A 7-year-old girl wets her clothes most afternoons and the bed three nights a week, for 6 months. Urinalysis is normal.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Subtype", options: ENU, answer: 2 },
        { label: "Code", options: ["F98.0", "N39.498", "R32", "F98.1", "R15.9"], answer: 0 }
      ],
      line: "**F98.0** Enuresis, nocturnal and diurnal",
      why: "Day and night wetting: the nonmonosymptomatic subtype. The code is the same for every subtype."
    },
    {
      id: "w11-03", tag: "Enuresis",
      "case": "A 9-year-old boy delays going to the toilet while playing and wets his pants three afternoons a week for 4 months. He is dry at night.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Subtype", options: ENU, answer: 1 },
        { label: "Code", options: ["F98.0", "F98.1", "R32", "N39.498", "F91.3"], answer: 0 }
      ],
      line: "**F98.0** Enuresis, diurnal only",
      why: "Waking-hours wetting only, from voiding postponement."
    },
    {
      id: "w11-04", tag: "Encopresis",
      "case": "A 6-year-old soils several times a week for 5 months, with large hard stools every week and a palpable stool mass.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Subtype", options: ENC, answer: 0 },
        { label: "Code", options: ["F98.1", "F98.0", "R15.9", "K59.00", "N39.498"], answer: 0 }
      ],
      line: "**F98.1** Encopresis, with constipation and overflow incontinence",
      why: "Monthly or more for over 3 months at age 6, with constipation on history and examination."
    },
    {
      id: "w11-05", tag: "Encopresis",
      "case": "An 11-year-old boy with defiant behavior leaves normal stools on the bathroom floor about twice a month for 7 months. No constipation.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Subtype", options: ENC, answer: 1 },
        { label: "Code", options: ["F98.1", "R15.9", "F98.0", "F91.3", "R32"], answer: 0 }
      ],
      line: "**F98.1** Encopresis, without constipation and overflow incontinence",
      why: "Intentional soiling counts. Assess separately for oppositional defiant disorder."
    },
    {
      id: "w11-06", tag: "Residual",
      "case": "A 6-year-old girl soiled twice in each of the last 2 months and is distressed. Stools are normal. The clinician records the reason criteria are not met.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Symptoms", options: SYM, answer: 1 },
        { label: "Code", options: ["R15.9", "N39.498", "R32", "F98.1", "F98.8"], answer: 0 }
      ],
      line: "**R15.9** Other specified elimination disorder, with fecal symptoms (duration under 3 months)",
      why: "Encopresis needs 3 months and has no impairment alternative. Fecal symptoms take R15.9."
    },
    {
      id: "w11-07", tag: "Residual",
      "case": "A clinician judges occasional bedwetting in a 7-year-old clinically significant but subthreshold and writes “low-frequency enuresis.”",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Symptoms", options: SYM, answer: 0 },
        { label: "Code", options: ["N39.498", "R32", "F98.0", "R15.9", "N39.44"], answer: 0 }
      ],
      line: "**N39.498** Other specified elimination disorder, low-frequency enuresis",
      why: "The manual’s own example. Urinary symptoms in the other specified category take N39.498."
    },
    {
      id: "w11-08", tag: "Residual",
      "case": "A 10-year-old is seen in the emergency room for repeated wetting with distress; no history is available.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Symptoms", options: SYM, answer: 0 },
        { label: "Code", options: ["R32", "N39.498", "R15.9", "F98.0", "F98.9"], answer: 0 }
      ],
      line: "**R32** Unspecified elimination disorder, with urinary symptoms",
      why: "Insufficient information: unspecified. Urinary symptoms in the unspecified category take R32."
    },
    {
      id: "w11-09", tag: "Residual",
      "case": "A 7-year-old is seen in the emergency room for fecal soiling with distress; the history is unavailable.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Symptoms", options: SYM, answer: 1 },
        { label: "Code", options: ["R15.9", "R32", "F98.1", "N39.498", "K59.00"], answer: 0 }
      ],
      line: "**R15.9** Unspecified elimination disorder, with fecal symptoms",
      why: "Fecal symptoms take R15.9 in both residual categories."
    },
    {
      id: "w11-10", tag: "Exclusion",
      "case": "A 20-year-old started clozapine 3 months ago and now wets the bed most nights; he had been continent since childhood.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "Record as", options: ["Medication side effect", "Enuresis, nocturnal only", "Other specified elimination disorder", "Unspecified elimination disorder"], answer: 0 }
      ],
      line: "No elimination disorder: **clozapine-associated enuresis**, recorded as a medication side effect",
      why: "Wetting during antipsychotic treatment is not diagnosed as enuresis unless it was regularly present before the drug."
    }
  ]);

  SP.add("ch11", "counting", [
    {
      id: "n11-01", tag: "Enuresis Criterion B",
      "case": "A 6-year-old boy’s wetting:",
      ask: "Mark the findings that satisfy Criterion B. Is at least one present?",
      items: [
        ["Wets three nights a week for the past 4 months", true, "Twice weekly or more for 3 consecutive months."],
        ["Refused a school camp because of the wetting", true, "Impairment in social activities counts."],
        ["Wets once every 2 weeks and is not bothered", false, "Neither frequency nor distress or impairment."],
        ["Wet four nights a week for the last 3 weeks only", false, "Frequency is high, but the 3-month duration is not met."]
      ],
      need: 1,
      met: true,
      why: "Criterion B is met either by frequency (twice weekly for 3 consecutive months) or by distress or impairment."
    },
    {
      id: "n11-02", tag: "Enuresis Criterion D",
      "case": "In children who wet:",
      ask: "Mark the findings that exclude enuresis at present. Is enuresis excluded in at least one?",
      items: [
        ["Untreated diabetes insipidus with large urine volumes", true, "A medical cause of polyuria."],
        ["Wetting began after starting a diuretic", true, "A substance effect."],
        ["Wetting persisting 4 months after a treated UTI", false, "Persistence after treatment allows the diagnosis."],
        ["Comorbid ADHD", false, "A comorbidity, not an exclusion."],
        ["Wetting present for years before starting risperidone", false, "Wetting regularly present before the drug allows the diagnosis."]
      ],
      need: 1,
      met: true,
      why: "Exclude only when a substance or medical condition explains the wetting now."
    },
    {
      id: "n11-03", tag: "Encopresis Criterion B",
      "case": "A 5-year-old’s soiling diary over the last 3 months:",
      ask: "Mark the months with at least one soiling event. Are all 3 months covered?",
      items: [
        ["Month 1: two accidents", true, "At least one event."],
        ["Month 2: one accident", true, "At least one event."],
        ["Month 3: no accidents", false, "No event this month."]
      ],
      need: 3,
      met: false,
      why: "Encopresis needs at least one event **each month** for at least 3 months. A gap month resets the count."
    },
    {
      id: "n11-04", tag: "Encopresis Criterion D",
      "case": "Children who soil, each with another condition:",
      ask: "Mark the conditions that still allow a diagnosis of encopresis. Is at least one compatible?",
      items: [
        ["Hypothyroidism causing constipation", true, "Acts through constipation."],
        ["Celiac disease causing constipation", true, "Acts through constipation."],
        ["Chronic diarrhea", false, "Fecal incontinence from diarrhea is not encopresis."],
        ["Spina bifida", false, "A neurological cause."],
        ["Daily stimulant laxatives", false, "A substance effect."]
      ],
      need: 1,
      met: true,
      why: "Criterion D allows a medical condition only **through a mechanism involving constipation**."
    },
    {
      id: "n11-05", tag: "Constipation subtype",
      "case": "A 6-year-old who soils:",
      ask: "Mark the findings that are evidence of constipation. Is the with-constipation subtype supported?",
      items: [
        ["Large, hard stools every 6 days", true, "Infrequent hard stools."],
        ["A palpable mass in the left lower abdomen", true, "Fecal loading on examination."],
        ["Painful defecation with leg-crossing", true, "Withholding."],
        ["Normal stools left in a prominent place", false, "Typical of the subtype without constipation."],
        ["Soiling after arguments", false, "Not evidence of constipation."]
      ],
      need: 1,
      met: true,
      why: "Evidence of constipation by **history or examination** establishes the with-constipation subtype."
    },
    {
      id: "n11-06", tag: "Age",
      "case": "Children who wet the bed several nights a week:",
      ask: "Mark the children who meet Criterion C for enuresis. Do at least three?",
      items: [
        ["A typically developing 6-year-old", true, "Age 5 or more."],
        ["A typically developing 5-year-old", true, "Exactly at the threshold."],
        ["A 12-year-old with a mental age of 6", true, "Developmental level above 5."],
        ["A 9-year-old with a mental age of 4", false, "Developmental level below 5."],
        ["A typically developing 4-year-old", false, "Below age 5."]
      ],
      need: 3,
      met: true,
      why: "Criterion C uses chronological age **or the equivalent developmental level** of 5."
    },
    {
      id: "n11-07", tag: "Associations",
      "case": "Conditions in a child with nocturnal enuresis:",
      ask: "Mark the conditions the manual links with nocturnal enuresis. Are at least three listed?",
      items: [
        ["Obstructive sleep apnea or heavy snoring", true, "Linked; adenotonsillectomy helps about half."],
        ["Restless legs syndrome", true, "Linked."],
        ["Sleepwalking or sleep terrors", true, "NREM sleep arousal disorders are linked."],
        ["Narcolepsy", false, "Not named in the chapter."],
        ["REM sleep behavior disorder", false, "Not named; it is mainly an adult disorder."]
      ],
      need: 3,
      met: true,
      why: "Restless legs, NREM arousal disorders, heavy snoring and sleep apnea are associated (p. 402)."
    },
    {
      id: "n11-08", tag: "Without constipation",
      "case": "Features of soiling:",
      ask: "Mark the features typical of encopresis without constipation and overflow incontinence. Are at least three present?",
      items: [
        ["Feces of normal form and consistency", true, "Typical."],
        ["Intermittent soiling", true, "Typical."],
        ["Feces deposited in a prominent place", true, "Typical, often with ODD or conduct disorder."],
        ["Continuous liquid leakage", false, "Overflow: the constipation subtype."],
        ["Retained transit markers", false, "Supports the constipation subtype."]
      ],
      need: 3,
      met: true,
      why: "Normal stools, intermittent soiling and prominent placement mark the subtype without constipation."
    },
    {
      id: "n11-09", tag: "Voiding postponement",
      "case": "A child with daytime wetting:",
      ask: "Mark the features of voiding postponement. Are at least two present?",
      items: [
        ["Puts off going to the toilet while playing", true, "Conscious deferral."],
        ["Avoids school toilets out of social anxiety", true, "Reluctance to use the toilet."],
        ["Sudden overwhelming urges with detrusor instability", false, "Urge incontinence, the other group."],
        ["Wets only during nighttime sleep", false, "Nocturnal, not diurnal."]
      ],
      need: 2,
      met: true,
      why: "Voiding postponement is conscious deferral of the urge until incontinence results (p. 399)."
    },
    {
      id: "n11-10", tag: "Encopresis A–D",
      "case": "A 5-year-old boy with hypothyroidism has hard stools and has soiled weekly for 4 months, involuntarily.",
      ask: "Mark each encopresis criterion that is met. Are all four met?",
      items: [
        ["A: repeated passage of feces into clothing", true, "Involuntary passage counts."],
        ["B: at least monthly for 3 months", true, "Weekly for 4 months."],
        ["C: age at least 4", true, "Age 5."],
        ["D: not due to a substance or medical condition except through constipation", true, "Hypothyroidism acts through constipation."]
      ],
      need: 4,
      met: true,
      why: "All four are met: **encopresis, with constipation and overflow incontinence (F98.1)**."
    }
  ]);
})();
