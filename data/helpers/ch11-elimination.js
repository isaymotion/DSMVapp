/*
 * Diagnostic helper for Chapter 11 (Elimination Disorders), DSM-5-TR pp. 399–406.
 * "elimination": from wetting or soiling to enuresis (with subtype), encopresis (with subtype),
 * a medical or medication cause, or a residual category, with the code.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "elimination",
    chapter: "ch11",
    title: "Which elimination disorder?",
    summary: "Start from wetting or soiling, then check developmental age, frequency and duration, and medical or medication causes to reach enuresis or encopresis with its subtype, or a residual category, with the code.",
    caution: "A teaching aid built from DSM-5-TR pp. 399–406. Examine the abdomen, lower spine and neurology, and test the urine before diagnosing. Codes are unchanged through October 2026; use the code set in force on the date of service.",
    start: "what",
    nodes: {
      what: {
        q: "What is being passed in the wrong place?",
        help: "If both, work through soiling first: constipation often drives wetting too. You can come back for the second problem.",
        options: [
          { label: "Urine (wetting bed or clothes)", to: "uage", note: "Wetting." },
          { label: "Feces (soiling clothes, floor or elsewhere)", to: "fage", note: "Soiling." }
        ]
      },
      uage: {
        q: "Is the child’s developmental age at least 5 years?",
        help: "Use chronological age, or mental age in a child with developmental delay.",
        options: [
          { label: "Yes", to: "umed", note: "Criterion C met." },
          { label: "No: under 5, or mental age under 5", to: "r:tooyoung-u", note: "Below the age threshold." }
        ]
      },
      umed: {
        q: "Is there a medical condition or a medication that explains the wetting?",
        help: "Diabetes mellitus or insipidus, an acute UTI, neurogenic bladder, spina bifida, tethered cord, posterior urethral valves, ectopic ureter, seizures; antipsychotics such as clozapine, diuretics.",
        options: [
          { label: "No medical or medication cause", to: "ufreq", note: "Criterion D met." },
          { label: "Yes, a medical condition", to: "umedbefore", note: "Possible medical cause." },
          { label: "Yes, a medication", to: "udrugbefore", note: "Possible medication effect." }
        ]
      },
      umedbefore: {
        q: "Was the wetting regularly present before the medical condition, or does it persist after appropriate treatment of it?",
        help: "For example, wetting that continues after a UTI has been treated, or long-standing bedwetting in a child newly diagnosed with diabetes.",
        options: [
          { label: "Yes", to: "ufreq", note: "Diagnosis still possible." },
          { label: "No: the condition explains the wetting", to: "r:medical-u", note: "Medical cause." }
        ]
      },
      udrugbefore: {
        q: "Was the wetting regularly present before the medication was started?",
        help: "Ask when the wetting began relative to the first dose.",
        options: [
          { label: "Yes", to: "ufreq", note: "Diagnosis still possible." },
          { label: "No: it began with the drug", to: "r:drug-u", note: "Medication side effect." }
        ]
      },
      ufreq: {
        q: "Has the wetting occurred at least twice a week for 3 consecutive months, or does it cause clinically significant distress or impairment?",
        help: "Either one satisfies Criterion B. Ask about shame, avoided sleepovers or camp, teasing and punishment.",
        options: [
          { label: "Yes", to: "utime", note: "Criterion B met." },
          { label: "No: less often and no distress or impairment", to: "r:subthreshold-u", note: "Below threshold." },
          { label: "Not known: not enough information (e.g., emergency room)", to: "r:unspec-u", note: "Insufficient information." }
        ]
      },
      utime: {
        q: "When does the wetting happen?",
        help: "Ask the family to keep a simple diary if unsure.",
        options: [
          { label: "Only during nighttime sleep", to: "r:enu-noct", note: "Nocturnal only." },
          { label: "Only during waking hours", to: "r:enu-diur", note: "Diurnal only." },
          { label: "Both day and night", to: "r:enu-both", note: "Nocturnal and diurnal." }
        ]
      },
      fage: {
        q: "Is the child’s developmental age at least 4 years?",
        help: "Use chronological age, or mental age in a child with developmental delay.",
        options: [
          { label: "Yes", to: "fmed", note: "Criterion C met." },
          { label: "No", to: "r:tooyoung-f", note: "Below the age threshold." }
        ]
      },
      fmed: {
        q: "Is the soiling explained by a substance or medical condition?",
        help: "Laxatives, chronic diarrhea, spina bifida, anal stenosis or another neurological or structural cause. A condition that acts only through constipation (e.g., hypothyroidism, celiac disease) does not count here.",
        options: [
          { label: "No, or only through constipation", to: "ffreq", note: "Criterion D met." },
          { label: "Yes: laxatives", to: "r:laxative", note: "Substance." },
          { label: "Yes: diarrhea, spina bifida, anal stenosis or similar", to: "r:medical-f", note: "Medical cause." }
        ]
      },
      ffreq: {
        q: "Has soiling occurred at least once a month for at least 3 months?",
        help: "Encopresis has no distress-or-impairment alternative to this rule.",
        options: [
          { label: "Yes", to: "fconst", note: "Criterion B met." },
          { label: "No, but it causes distress or impairment", to: "r:otherspec-f", note: "Subthreshold with distress." },
          { label: "Not known: not enough information", to: "r:unspec-f", note: "Insufficient information." }
        ]
      },
      fconst: {
        q: "Is there evidence of constipation on history or examination?",
        help: "Large, hard, infrequent or painful stools; withholding postures; a palpable stool mass or rectal impaction; liquid leakage around a mass.",
        options: [
          { label: "Yes", to: "r:enc-with", note: "With constipation." },
          { label: "No: normal stools, intermittent soiling", to: "r:enc-without", note: "Without constipation." }
        ]
      }
    },
    results: {
      "tooyoung-u": { label: "Not enuresis", dx: "Below the age for enuresis", line: "Wetting before a developmental age of 5 is usually expected and is not enuresis.", points: ["Reassure; look for constipation and medical clues if wetting is secondary or daytime.", "Reassess after the fifth (developmental) birthday."], link: { ch: "ch11", sec: "s11-enuresis-criteria", label: "Enuresis criteria" } },
      "medical-u": { label: "Not enuresis", dx: "Wetting due to a medical condition", line: "Diabetes, an acute UTI, neurogenic bladder or a structural anomaly explains the wetting; treat the cause.", points: ["Reconsider enuresis if wetting persists after appropriate treatment."], link: { ch: "ch11", sec: "s11-enuresis-ddx", label: "Enuresis differential" } },
      "drug-u": { label: "Not enuresis", dx: "Medication side effect", line: "Wetting that began with an antipsychotic, a diuretic or another drug is noted as a side effect.", points: ["Clozapine-associated enuresis is a classic example.", "Diagnose enuresis only if wetting was regularly present before the drug."], link: { ch: "ch11", sec: "s11-enuresis-ddx", label: "Medication side effects" } },
      "subthreshold-u": { label: "Usually no diagnosis", dx: "Below the threshold for enuresis", line: "Wetting less than twice a week without distress or impairment does not meet Criterion B, and the residual categories also require distress or impairment.", points: ["Monitor and reassess; check bowels and urine.", "If the clinician still judges it clinically significant, the manual’s example is other specified elimination disorder, low-frequency enuresis (N39.498)."], link: { ch: "ch11", sec: "s11-other", label: "Residual categories" } },
      "unspec-u": { dx: "Unspecified elimination disorder, urinary symptoms", line: "Wetting with distress or impairment when information is insufficient for a specific diagnosis.", points: ["Code: R32.", "Revise when the history is available."], link: { ch: "ch11", sec: "s11-other", label: "Residual categories" }, dxId: "unspecified-elimination" },
      "enu-noct": { dx: "Enuresis, nocturnal only", line: "The most common subtype (monosymptomatic), usually in the first third of the night.", points: ["Code: F98.0.", "Primary if never dry; secondary if after a period of continence.", "Ask about snoring and sleep apnea."], link: { ch: "ch11", sec: "s11-enuresis-subtypes", label: "Enuresis subtypes" }, dxId: "enuresis" },
      "enu-diur": { dx: "Enuresis, diurnal only", line: "Daytime wetting: urge incontinence (detrusor instability) or voiding postponement.", points: ["Code: F98.0.", "Uncommon after age 9; check for UTI, especially in girls."], link: { ch: "ch11", sec: "s11-enuresis-subtypes", label: "Enuresis subtypes" }, dxId: "enuresis" },
      "enu-both": { dx: "Enuresis, nocturnal and diurnal", line: "Nonmonosymptomatic enuresis; behavioral and developmental symptoms are more common.", points: ["Code: F98.0.", "Look for constipation and UTI; screen for ADHD and developmental delay."], link: { ch: "ch11", sec: "s11-enuresis-subtypes", label: "Enuresis subtypes" }, dxId: "enuresis" },
      "tooyoung-f": { label: "Not encopresis", dx: "Below the age for encopresis", line: "Soiling before a developmental age of 4 is not encopresis.", points: ["Treat any constipation; support toilet training."], link: { ch: "ch11", sec: "s11-encopresis-criteria", label: "Encopresis criteria" } },
      "laxative": { label: "Not encopresis", dx: "Incontinence due to laxatives", line: "Fecal incontinence exclusively from laxatives is excluded by Criterion D.", points: ["In an adolescent, ask whether laxatives are used for weight control (anorexia or bulimia nervosa)."], link: { ch: "ch11", sec: "s11-encopresis-ddx", label: "Encopresis differential" }, dxId: "anorexia" },
      "medical-f": { label: "Not encopresis", dx: "Fecal incontinence due to a medical condition", line: "Chronic diarrhea, spina bifida or anal stenosis does not warrant encopresis.", points: ["Refer for medical evaluation."], link: { ch: "ch11", sec: "s11-encopresis-ddx", label: "Encopresis differential" } },
      "otherspec-f": { dx: "Other specified elimination disorder, fecal symptoms", line: "Soiling with distress or impairment that falls short of monthly for 3 months; record the reason.", points: ["Code: R15.9.", "Reassess for full encopresis at 3 months."], link: { ch: "ch11", sec: "s11-other", label: "Residual categories" }, dxId: "other-specified-elimination" },
      "unspec-f": { dx: "Unspecified elimination disorder, fecal symptoms", line: "Soiling with distress or impairment when information is insufficient.", points: ["Code: R15.9 (same as other specified)."], link: { ch: "ch11", sec: "s11-other", label: "Residual categories" }, dxId: "unspecified-elimination" },
      "enc-with": { dx: "Encopresis, with constipation and overflow incontinence", line: "The usual form: retention, impaction and overflow; incontinence resolves when the constipation is treated.", points: ["Code: F98.1.", "Rectal impaction or retained transit markers support it.", "Look for coexisting enuresis and UTIs."], link: { ch: "ch11", sec: "s11-encopresis-subtypes", label: "Encopresis subtypes" }, dxId: "encopresis" },
      "enc-without": { dx: "Encopresis, without constipation and overflow incontinence", line: "Normal stools, intermittent soiling, sometimes in a prominent place.", points: ["Code: F98.1.", "Usually linked with oppositional defiant or conduct disorder, or anal masturbation.", "Enuresis often coexists; take a careful psychosocial history."], link: { ch: "ch11", sec: "s11-encopresis-subtypes", label: "Encopresis subtypes" }, dxId: "encopresis" }
    }
  }
]);
