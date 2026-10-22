/* Disorder library: Chapter 7, Trauma- and Stressor-Related Disorders (DSM-5-TR pp. 295–328).
   Prolonged grief disorder and other specified use the post-2022 ICD-10-CM codes (F43.81, F43.89). */
SP.disorders = (SP.disorders || []).concat([
  {
    id: "rad", ch: "ch07", sec: "s7-rad", pages: "295–298", critPages: "295–296",
    name: "Reactive attachment disorder", code: "F94.1", aka: ["RAD", "attachment disorder"],
    essence: "A neglected young child who **rarely seeks or responds to comfort**, with limited positive affect and unexplained irritability, sadness or fear; evident **before 5**, developmental age **≥9 months**, not autism.",
    duration: "Evident before age 5; **persistent** if >12 months",
    functioning: "Impaired relationships with adults and peers",
    mood: "Limited positive affect; unexplained sadness, fear or irritability",
    criteria: [
      ["A", "Inhibited, withdrawn: rarely seeks and rarely responds to comfort."],
      ["B", "≥2 of 3: minimal responsiveness; limited positive affect; unexplained irritability, sadness or fear."],
      ["C", "**Criteria C–D.** Extremes of insufficient care (neglect, repeated caregiver changes, institutions), presumed responsible."],
      ["E", "**Criteria E–G.** Not autism; evident before 5; developmental age ≥9 months."]
    ],
    specifiers: ["Persistent (>12 months)", "Severe"],
    epi: [["Prevalence", "Rare; <10% of severely neglected children"], ["Age", "9 months to 5 years"], ["Risk", "Serious social neglect (only known risk factor)"]],
    risk: ["Serious social neglect, institutional rearing, repeated caregiver changes."],
    differential: [
      { name: "Autism spectrum disorder", how: "Restricted interests and rituals; attachment present; rarely neglect." },
      { name: "Intellectual developmental disorder", how: "Selective attachments by a cognitive age of 7–9 months." },
      { id: "mdd", how: "Depressed young children still seek and accept comfort." },
      { id: "dsed", how: "Indiscriminately sociable rather than withdrawn." }
    ],
    pearls: ["Needs neglect, onset before 5 and not autism.", "Improves with good caregiving.", "Diagnose cautiously after age 5."],
    cmp: { symptoms: "No comfort seeking or response; low positive affect", exclusions: "Autism; developmental age <9 months", prevalence: "<10% of neglected children", course: "Improves with normative care" },
    clues: [["Core picture", "A toddler from an orphanage who stiffens when hugged and does not go to her parents when hurt"], ["Code", "F94.1"]]
  },
  {
    id: "dsed", ch: "ch07", sec: "s7-dsed", pages: "298–301", critPages: "298–299",
    name: "Disinhibited social engagement disorder", code: "F94.2", aka: ["DSED", "indiscriminate sociability"],
    essence: "A neglected child who **approaches and is overfamiliar with strangers**, does not check back with caregivers and will **go off with an unfamiliar adult**; not just impulsivity; developmental age **≥9 months**.",
    duration: "**Persistent** if >12 months",
    functioning: "Impaired peer and adult relationships; victimization risk",
    mood: "Inauthentic or attention-seeking emotional expression",
    criteria: [
      ["A", "Approaches unfamiliar adults with ≥2 of 4: reduced reticence; overfamiliarity; no checking back; goes off with strangers."],
      ["B", "Not limited to impulsivity (as in ADHD)."],
      ["C", "**Criteria C–D.** Extremes of insufficient care, presumed responsible."],
      ["E", "Developmental age ≥9 months."]
    ],
    specifiers: ["Persistent (>12 months)", "Severe"],
    epi: [["Prevalence", "Up to 2% (low-income UK communities); rare"], ["Age", "Second year of life into adulthood"], ["Neglect timing", "Not seen if neglect only after age 2"]],
    risk: ["Neglect, multiple placements, maternal borderline personality disorder, poor-quality care.", "Blunted reward sensitivity, poor inhibitory control."],
    differential: [
      { name: "ADHD", how: "Attention and hyperactivity problems; social impulsivity only." },
      { id: "rad", how: "Withdrawn rather than overfriendly." }
    ],
    pearls: ["Can occur with secure attachments.", "Often persists despite good care.", "Often comorbid with ADHD."],
    cmp: { symptoms: "Overfamiliar with strangers; goes off with them", exclusions: "Impulsivity alone (ADHD)", prevalence: "≤2%", course: "Moderately stable; may persist into adulthood" },
    clues: [["Core picture", "A child adopted from an orphanage who climbs into strangers’ laps and wanders off with them"], ["Code", "F94.2"]]
  },
  {
    id: "ptsd", ch: "ch07", sec: "s7-ptsd-criteria", pages: "301–313", critPages: "301–304",
    name: "Posttraumatic stress disorder", code: "F43.10", aka: ["PTSD", "posttraumatic stress", "complex trauma"],
    essence: "After a **Criterion A** trauma: **≥1 intrusion, ≥1 avoidance, ≥2 negative cognition/mood, ≥2 arousal** symptoms for **more than 1 month**, with distress or impairment.",
    duration: "**More than 1 month**; delayed expression if full criteria ≥6 months after",
    functioning: "Distress or impairment across social, occupational, physical domains",
    mood: "Fear, horror, anger, guilt, shame; inability to feel positive emotions",
    criteria: [
      ["A", "Actual or threatened death, serious injury or sexual violence: directly, witnessed, learned about (violent/accidental), or repeated work exposure to details."],
      ["B", "Intrusion ≥1 of 5: memories, dreams, flashbacks, cue distress, cue physiological reactions."],
      ["C", "Avoidance ≥1 of 2: internal or external reminders."],
      ["D", "Negative cognitions and mood ≥2 of 7."],
      ["E", "Arousal and reactivity ≥2 of 6."],
      ["F", "**Criteria F–H.** >1 month; distress or impairment; not due to a substance or medical condition."]
    ],
    specifiers: ["With dissociative symptoms (depersonalization or derealization)", "With delayed expression", "Separate criteria for children 6 years and younger"],
    epi: [["Lifetime (US, DSM-5)", "6.1%–8.3%"], ["12-month (US)", "4.7%"], ["Sex", "Women 8%–11% vs men 4.1%–5.4% (lifetime)"], ["Course", "Half recover within 3 months; some >50 years"]],
    risk: ["Pretraumatic: childhood adversity, prior disorders, neuroticism, low SES, discrimination.", "Peritraumatic: severity, interpersonal violence, peritraumatic dissociation.", "Posttraumatic: negative appraisals, acute stress disorder, new adversity; social support protects."],
    differential: [
      { id: "acute-stress", how: "3 days to 1 month." },
      { id: "adjustment", how: "Non-Criterion A stressor, or subthreshold symptoms." },
      { id: "mdd", how: "No intrusions or avoidance; both can coexist." },
      { id: "ocd", how: "Obsessions not tied to an experienced trauma; compulsions." },
      { id: "pgd", how: "Yearning for the deceased; intrusions about the relationship." },
      { name: "Traumatic brain injury", how: "Disorientation and confusion; failed encoding." }
    ],
    pearls: ["Media exposure counts only if work related.", "Natural deaths learned about do not count.", "1-1-2-2 for more than a month.", "Raises the transition from suicidal thoughts to attempts."],
    cmp: { symptoms: "Intrusion, avoidance, cognition/mood, arousal", exclusions: "Substance or medical cause", prevalence: "4.7% (12-month, US)", course: "Half recover in 3 months; may be chronic" },
    clues: [["Core picture", "A nurse held at knifepoint who has nightmares, avoids the ward, blames herself and startles at alarms 3 months later"], ["Threshold", "1-1-2-2, >1 month"], ["Code", "F43.10"]]
  },
  {
    id: "acute-stress", ch: "ch07", sec: "s7-asd-criteria", pages: "313–319", critPages: "313–315",
    name: "Acute stress disorder", code: "F43.0", aka: ["ASD (acute stress disorder)", "acute stress reaction"],
    essence: "After a **Criterion A** trauma, **9 or more of 14** intrusion, negative mood, dissociative, avoidance and arousal symptoms lasting **3 days to 1 month**.",
    duration: "**3 days to 1 month** after the trauma",
    functioning: "Distress or impairment",
    mood: "Inability to feel positive emotions; guilt; catastrophic thinking",
    criteria: [
      ["A", "Criterion A trauma (same as PTSD)."],
      ["B", "≥9 of 14 from any category: intrusion (4), negative mood (1), dissociation (2), avoidance (2), arousal (5)."],
      ["C", "3 days to 1 month."],
      ["D", "**Criteria D–E.** Distress or impairment; not substance, medical (mild TBI) or brief psychotic disorder."]
    ],
    specifiers: [],
    epi: [["After non-assault trauma", "<20%"], ["After interpersonal trauma", "19%–50%"], ["Progression", "About half of PTSD cases start as ASD"], ["Sex", "More common in women"]],
    risk: ["Catastrophic appraisals, avoidant coping, prior disorder or trauma, neuroticism, high startle."],
    differential: [
      { id: "ptsd", how: "More than 1 month; change the diagnosis if symptoms persist." },
      { id: "adjustment", how: "Any stressor or too few symptoms." },
      { id: "panic-disorder", how: "Unexpected attacks plus a month of worry." },
      { id: "brief-psychotic-disorder", how: "Hallucinations, delusions, disorganization." }
    ],
    pearls: ["Not before 3 days.", "No category minimums.", "Dissociation is part of the criteria, not a specifier."],
    cmp: { symptoms: "9 of 14 trauma symptoms", exclusions: "Brief psychotic disorder; substance or medical cause", prevalence: "<20% to 50% of exposed", course: "Remits or becomes PTSD" },
    clues: [["Core picture", "A teller 10 days after a robbery: dazed, flashbacks, amnesia for part of it, sleepless"], ["Code", "F43.0"]]
  },
  {
    id: "adjustment", ch: "ch07", sec: "s7-adjust", pages: "319–322", critPages: "319–320",
    name: "Adjustment disorders", code: "F43.20–F43.25",
    codes: [
      ["F43.21", "With depressed mood", ""],
      ["F43.22", "With anxiety", ""],
      ["F43.23", "With mixed anxiety and depressed mood", ""],
      ["F43.24", "With disturbance of conduct", ""],
      ["F43.25", "With mixed disturbance of emotions and conduct", ""],
      ["F43.20", "Unspecified", ""]
    ],
    aka: ["adjustment disorder", "situational depression", "reactive depression"],
    essence: "Out-of-proportion distress or impairment **within 3 months** of any identifiable stressor, ending **within 6 months** after the stressor or its consequences end, when no other disorder is met.",
    duration: "Onset **≤3 months** after the stressor; resolves **≤6 months** after it ends",
    functioning: "Distress out of proportion and/or impairment",
    mood: "Depressed, anxious, mixed, or conduct problems",
    criteria: [
      ["A", "Symptoms within 3 months of an identifiable stressor."],
      ["B", "Marked distress out of proportion and/or significant impairment."],
      ["C", "Not another mental disorder or an exacerbation of one."],
      ["D", "Not normal bereavement or prolonged grief disorder."],
      ["E", "Symptoms end within 6 months after the stressor or its consequences end."]
    ],
    specifiers: ["Subtype (six, with codes)", "Acute (<6 months) or persistent/chronic (≥6 months)"],
    epi: [["Outpatients (US)", "5%–20% principal diagnosis"], ["Consultation psychiatry", "Up to 50%"], ["Sex", "Possibly more women"]],
    risk: ["Disadvantaged life circumstances."],
    differential: [
      { id: "mdd", how: "Full MDE criteria met: diagnose MDD instead." },
      { id: "ptsd", how: "Criterion A trauma with full symptoms for >1 month." },
      { id: "pgd", how: "Grief beyond 12 months meeting criteria." },
      { name: "Normative stress reaction", how: "Expected distress without impairment." }
    ],
    pearls: ["3 in, 6 out.", "Full PTSD picture after a non-Criterion A stressor = adjustment disorder.", "Linked with suicide attempts and suicide."],
    cmp: { symptoms: "Distress or impairment after any stressor", exclusions: "Any other disorder; bereavement; prolonged grief", prevalence: "5%–20% of outpatients", course: "Resolves within 6 months of stressor’s end" },
    clues: [["Core picture", "Tearful and struggling at work 6 weeks after layoffs were announced, not meeting MDD"], ["Codes", "F43.20–F43.25"]]
  },
  {
    id: "pgd", ch: "ch07", sec: "s7-pgd-criteria", pages: "322–327", critPages: "322–323",
    name: "Prolonged grief disorder", code: "F43.81", codeNote: "printed as F43.8 in DSM-5-TR; F43.81 since October 2022", aka: ["complicated grief", "persistent complex bereavement disorder", "traumatic grief"],
    essence: "At least **12 months** after a death (**6** in youth): intense **yearning** or **preoccupation** plus **3 of 8** grief symptoms nearly every day for the last month, impairing and beyond cultural norms.",
    duration: "**≥12 months** since the death (≥6 in youth); symptoms nearly every day for the last month",
    functioning: "Distress or impairment; health and self-care decline",
    mood: "Yearning, emotional pain, numbness, loneliness, meaninglessness",
    criteria: [
      ["A", "Death of a close person ≥12 months ago (≥6 months in youth)."],
      ["B", "Yearning and/or preoccupation, nearly every day for the last month."],
      ["C", "≥3 of 8: identity disruption, disbelief, avoidance of reminders, emotional pain, poor reintegration, numbness, meaninglessness, loneliness."],
      ["D", "**Criteria D–F.** Distress or impairment; exceeds cultural norms; not better explained by MDD or PTSD; not substance or medical."]
    ],
    specifiers: [],
    epi: [["Pooled prevalence (6-month definition)", "9.8% of bereaved"], ["Bereaved US youth", "18%"], ["Highest risk", "Death of a child or partner; violent deaths"]],
    risk: ["Dependency on the deceased, death of a child or partner, violent or unexpected death, economic stress."],
    differential: [
      { id: "mdd", how: "Generalized low mood and worthlessness; both can coexist." },
      { id: "ptsd", how: "Event-focused intrusions, no yearning." },
      { id: "separation-anxiety", how: "Fear of separation from living people." },
      { id: "adjustment", how: "Before 12 months, out-of-proportion grief." },
      { name: "Normal grief", how: "Less than 12 months, within norms, or anniversary spikes only." }
    ],
    pearls: ["New in DSM-5-TR.", "Yearning separates it from PTSD.", "Hearing the deceased is common in normal grief.", "Suicidal ideation independent of MDD and PTSD."],
    cmp: { symptoms: "Yearning or preoccupation + 3 of 8", exclusions: "MDD, PTSD; within cultural norms", prevalence: "≈10% of bereaved", course: "Prolonged, especially after a child’s death" },
    clues: [["Core picture", "A widower 18 months on who aches for his wife daily, cannot believe she is gone and finds life meaningless"], ["Code", "F43.81 (printed F43.8)"]]
  },
  {
    id: "other-specified-trauma", ch: "ch07", sec: "s7-other", pages: "327–328", critPages: "327–328",
    name: "Other specified trauma- and stressor-related disorder", code: "F43.89", codeNote: "printed as F43.8 in DSM-5-TR; F43.89 since October 2022", aka: ["subthreshold PTSD", "partial PTSD"],
    essence: "Trauma- or stressor-related symptoms causing distress or impairment without a specific disorder, with the **reason recorded**.",
    duration: "Varies",
    functioning: "Clinically significant distress or impairment",
    mood: "Varies",
    criteria: [["", "Examples: adjustment-like with **delayed onset** (>3 months); adjustment-like with **prolonged duration** (>6 months); **persistent response to trauma with PTSD-like symptoms**; **ataque de nervios**; other cultural syndromes."]],
    specifiers: [],
    epi: [],
    risk: [],
    differential: [
      { id: "adjustment", how: "Onset within 3 months and resolution within 6 months of the end." },
      { id: "ptsd", how: "Full criteria met." },
      { id: "unspecified-trauma", how: "Reason not recorded." }
    ],
    pearls: ["Subthreshold PTSD beyond 6 months goes here.", "Code F43.89 since October 2022."],
    cmp: { symptoms: "Atypical stress reactions", exclusions: "Any specific trauma disorder", prevalence: "—", course: "Varies" },
    clues: [["Example", "Two years after an assault, intrusions and avoidance without full PTSD"], ["Code", "F43.89"]]
  },
  {
    id: "unspecified-trauma", ch: "ch07", sec: "s7-other", pages: "328", critPages: "328",
    name: "Unspecified trauma- and stressor-related disorder", code: "F43.9",
    essence: "Trauma- or stressor-related symptoms without a specific diagnosis, when the reason is not given or information is insufficient.",
    duration: "Varies",
    functioning: "Clinically significant distress or impairment",
    mood: "Varies",
    criteria: [["", "Trauma- or stressor-related symptoms predominate; criteria for a specific disorder not met; reason not given or information insufficient (e.g., emergency settings)."]],
    specifiers: [],
    epi: [],
    risk: [],
    differential: [{ id: "other-specified-trauma", how: "Use when the reason can be stated." }],
    pearls: ["Useful in emergency settings."],
    cmp: { symptoms: "Stress reaction, reason not given", exclusions: "Specific disorders", prevalence: "—", course: "Varies" },
    clues: [["Example", "Distress after an unclear stressor in the emergency department"], ["Code", "F43.9"]]
  }
]);

SP.comparePresets = (SP.comparePresets || []).concat([
  { label: "PTSD vs acute stress disorder", ids: ["ptsd", "acute-stress"] },
  { label: "PTSD vs adjustment disorders", ids: ["ptsd", "adjustment"] },
  { label: "Prolonged grief vs MDD", ids: ["pgd", "mdd"] },
  { label: "Prolonged grief vs PTSD", ids: ["pgd", "ptsd"] },
  { label: "RAD vs DSED", ids: ["rad", "dsed"] }
]);

SP.timeLadders = (SP.timeLadders || []).concat([
  { type: "ladder", title: "Chapter 7: trauma and stressor-related disorders", ticks: [[6, "3 d"], [20, "1 mo"], [40, "3 mo"], [58, "6 mo"], [80, "12 mo"]], rows: [
    { label: "Acute stress disorder", dx: "acute-stress", from: 6, to: 20, color: "hy", span: "3 days to 1 month" },
    { label: "PTSD", dx: "ptsd", from: 20, to: 100, color: "drug", open: true, span: ">1 month" },
    { label: "Adjustment disorder onset", dx: "adjustment", from: 0, to: 40, color: "guide", span: "Within 3 months of the stressor" },
    { label: "Prolonged grief disorder (youth)", dx: "pgd", from: 58, to: 100, color: "case", open: true, span: "≥6 months after the death" },
    { label: "Prolonged grief disorder (adults)", dx: "pgd", from: 80, to: 100, color: "case", open: true, span: "≥12 months after the death" }
  ], note: "PTSD delayed expression: full criteria ≥6 months after the event. Adjustment disorder: gone within 6 months after the stressor ends. RAD/DSED persistent: >12 months; RAD onset before 5." }
]);
