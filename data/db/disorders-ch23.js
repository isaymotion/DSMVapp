/* Disorder library: Chapter 23, Assessment Measures (DSM-5-TR Section III, pp. 841–857; p. 858 is blank).
   NOTHING in this file is a diagnosis. All six entries are assessment tools (the Level 1 Cross-Cutting Symptom Measure in
   its adult and child versions, the Level 2 measures, the disorder-specific severity measures, the psychosis severity
   dimensions (CRDPSS) and WHO’s disability schedule, WHODAS 2.0). None has a DSM or ICD-10-CM code. The `criteria` field
   holds the manual’s DESCRIPTION of each measure as labeled items, in the app’s own words, never a criteria set. A score is
   a prompt for inquiry (pp. 846, 851, 855; clinical judgment, pp. 846, 851): it never goes on the diagnosis line; it belongs in the formulation and the
   progress note (app guidance). The forms are copyrighted (APA; WHO for the WHODAS): entries describe what the items
   cover and how they are scored and never reprint an item, an anchor or an instruction. Item counts per domain are the
   app’s count of the printed forms. Research, Philippine context and exam strategy are outside the DSM and labeled.
   Self-harm content stays at general wording. */
(function () {
  var CODE = "No code (assessment measure)";
  var REC = "An assessment measure, not a diagnosis: the scores go in the formulation and progress notes; the diagnosis line holds the Section II disorder that is met, an other specified or unspecified category, or a Chapter 22 code (pp. 846, 851; app guidance)";
  function codes(extra) {
    var rows = [["—", REC, "App guidance"]];
    if (extra) rows.push(extra);
    return rows;
  }
  function upd(name, text) {
    return [{ kind: "post", year: "2026", title: "Not a diagnosis: how to record", source: "DSM-5-TR pp. 846, 851; app guidance",
      text: "**App guidance**: the " + name + " is an **assessment measure** and carries **no code**. A score at or above threshold **may** point to a problem that **warrants further assessment** (pp. 846, 851, 855), and **clinical judgment** decides (pp. 846, 851). **Never** write a measure or a score on the **diagnosis line**: record it in the formulation and the progress note, and diagnose on Section II criteria. " + text }];
  }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "level1-adult", ch: "ch23", sec: "s23-level1-adult", pages: "843–848", critPages: "843–846",
      name: "DSM-5 Level 1 Cross-Cutting Symptom Measure—Adult (self-rated)", code: CODE,
      codes: codes(["—", "Record the highest domain scores and the domains pursued in the note, not as a diagnosis (p. 846; app guidance)", "App guidance"]),
      aka: ["cross-cutting measure", "Level 1 adult", "review of mental systems (Section I, p. 15)", "DSM-5 Self-Rated Level 1"],
      essence: "A **review of mental systems** for adults: **23 questions** over **13 domains**, **one to three** each, every item rated **0–4** for how much or how often the symptom bothered the person in the **past 2 weeks** (p. 843). **Mild (2)** on any item flags a domain for further inquiry, with the threshold lowered to **slight (1)** for **substance use, suicidal ideation and psychosis** (pp. 845–846). It points the clinician toward areas to explore and can be repeated to track change; it is a screen, not a diagnosis (pp. 843, 846).",
      duration: "Not applicable; recall window = past 2 weeks (p. 843)",
      functioning: "Not rated by this form; functioning is measured with the WHODAS 2.0 (pp. 842, 854)",
      mood: "Two depression items, one anger item and two mania items among the 13 domains (pp. 844, 847–848; items described, not quoted)",
      criteria: [
        ["Type", "A self-rated cross-cutting symptom screen, not a disorder or a criteria set (pp. 841, 843)."],
        ["Who completes it", "The person; a **knowledgeable adult informant** may complete it when capacity is impaired, for example in major neurocognitive disorder (p. 843)."],
        ["Structure", "**23 items, 13 domains**: depression 2, anger 1, mania 2, anxiety 3, somatic symptoms 2, suicidal ideation 1, psychosis 2, sleep problems 1, memory 1, repetitive thoughts and behaviors 2, dissociation 1, personality functioning 2, substance use 3 (Table 1 order, p. 844; counts from the form, pp. 847–848)."],
        ["Window and scale", "Each item asks about the **past 2 weeks**, rated **0 none, 1 slight, 2 mild, 3 moderate, 4 severe**, the levels tied to how many days the symptom was present (pp. 843, 845)."],
        ["Threshold", "**Mild (2) or greater** on **any single item** in a domain suggests further inquiry, which may include the Level 2 measure (pp. 845–846)."],
        ["Three exceptions", "**Slight (1) or greater** may serve as a guide for **substance use, suicidal ideation and psychosis** (p. 846)."],
        ["Reading the form", "Review **each item** within a multi-item domain to find the symptom driving the score, especially if a Level 2 is not indicated; write the **highest item score** per domain in the clinician column (pp. 845–846). There is **no total score** (app reading)."],
        ["Domains with no Level 2", "**Suicidal ideation, psychosis, memory, dissociation, personality functioning** (p. 844); the clinician’s own questions are the follow-up (app guidance)."],
        ["Evidence in the text", "DSM-5 Field Trials in U.S. and Canadian adult clinical samples: clinically useful, good reliability; scores shared before the visit helped communication; a large study of non-treatment-seeking U.S. college students showed acceptable internal consistency and validity (p. 844)."],
        ["Frequency of use", "Repeat at regular intervals as clinically indicated; use the **same informant** at follow-up when one was used (p. 846)."],
        ["Chart", "Scores go in the formulation and progress note; diagnose on Section II criteria (p. 846; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Numbers to know", "23 items; 13 domains; 1–3 items per domain; 0–4 scale; past 2 weeks; 3 slight-threshold domains; 5 domains without a Level 2 (pp. 843–846)"],
        ["Field trials (research, outside the DSM)", "Most items good to excellent test–retest reliability; the two mania items were the weakest (Narrow et al. 2013; see the guide’s evidence section)"]
      ],
      risk: [
        "Not applicable as risk factors. The slight threshold for substance use, suicidal ideation and psychosis exists so that even a rarely endorsed symptom gets a question (p. 846; app reading).",
        "A rating of slight or more on the suicidal ideation item calls for a direct conversation the same day; no Level 2 form exists for it (p. 844; app guidance)."
      ],
      differential: [
        { id: "mdd", how: "The depression domain (two items) feeds a Level 2 PROMIS depression form; a threshold score is a reason to interview against the MDD criteria, not a diagnosis (pp. 844–846; app guidance)." },
        { id: "gad", how: "Three anxiety items lead to the PROMIS anxiety Level 2; the disorder-specific GAD severity measure is for a patient with the diagnosis or a near-threshold syndrome (pp. 842, 844)." },
        { id: "bipolar-i", how: "Two mania items lead to the Altman Self-Rating Mania Scale; elevated scores prompt inquiry for a manic episode (p. 844; app guidance)." },
        { id: "ocd", how: "The repetitive thoughts and behaviors domain leads to the FOCI Severity Scale (p. 844)." },
        { id: "schizophrenia", how: "The psychosis domain flags at slight and has no Level 2; the interview and, for a psychotic disorder or a near-threshold syndrome, the psychosis severity dimensions follow (pp. 842, 844, 846, 851)." },
        { id: "major-ncd", how: "The memory domain has no Level 2; when capacity is impaired an informant completes the form (pp. 843–844)." },
        { id: "no-diagnosis", how: "A threshold score that the interview does not confirm leaves no disorder to record (Chapter 20; app guidance)." },
        { id: "other-specified-mental-disorder", how: "A clinically significant flagged picture that fits no specific disorder may land here; the score itself is never the diagnosis (app guidance)." }
      ],
      pearls: [
        "**Any single item** at threshold flags the domain; items are not summed (pp. 845–846).",
        "Slight-threshold domains, adult: **substance use, suicidal ideation, psychosis** (p. 846).",
        "No Level 2: **suicidal ideation, psychosis, memory, dissociation, personality functioning** (p. 844).",
        "Window: **past 2 weeks** (p. 843).",
        "Scores seen **before** the visit helped patient–clinician communication in the Field Trials (p. 844).",
        "Section I calls it a **review of mental systems** and the APA evaluation guideline endorses it as a first step (Section I, p. 15)."
      ],
      cmp: {
        symptoms: "23 items over 13 domains, self-rated 0–4",
        exclusions: "Not a diagnosis; a threshold score prompts inquiry (p. 846)",
        prevalence: "Not applicable",
        course: "Past 2 weeks; repeat at regular intervals to track change (pp. 843, 846)"
      },
      clues: [
        ["Core picture", "A new OPD adult completing a one-page symptom review in the waiting area"],
        ["Key test", "Is any item at mild, or at slight for substance use, suicidal ideation or psychosis?"],
        ["Recording (app guidance)", "Highest domain scores in the note; diagnosis on criteria"]
      ],
      updates: upd("Level 1 Cross-Cutting Symptom Measure", "The form is an APA instrument, free online for clinical use (Section I, p. 15; www.psychiatry.org/dsm5); the app only describes it.")
    },
    {
      id: "level1-child", ch: "ch23", sec: "s23-level1-child", pages: "844–850", critPages: "844–846",
      name: "Level 1 Cross-Cutting Symptom Measure—Child 6–17 (parent/guardian-rated; child-rated 11–17 online)", code: CODE,
      codes: codes(["—", "Record who completed the form (parent, guardian, or the young person) with the highest domain scores (p. 846; app guidance)", "App guidance"]),
      aka: ["cross-cutting measure", "Level 1 parent/guardian", "Level 1 child-rated (11–17)", "review of mental systems (Section I, p. 15)"],
      essence: "The pediatric **review of mental systems**: a **parent or guardian** answers **25 questions** over **12 domains** about a child aged **6–17**, for the **past 2 weeks** (p. 844). **19** items use the 0–4 scale and **6** (four substance items, suicidal ideation, suicide attempt) are answered **Yes / No / Don’t Know** (p. 846). **Mild (2)** flags most domains, **slight (1)** flags **inattention and psychosis**, and a **Don’t Know** on a suicide or substance item is a cue to ask the young person directly (pp. 845–846). Children aged **11–17** may also complete the **child-rated** version, online only and without a Don’t Know option (pp. 842, 844, 846).",
      duration: "Not applicable; recall window = past 2 weeks, except the suicide attempt item, which asks about ever (pp. 844, 850)",
      functioning: "Not rated by this form (app reading)",
      mood: "Depression, anger, irritability and mania domains; anger and irritability share two items (pp. 845, 849)",
      criteria: [
        ["Type", "A parent/guardian-rated cross-cutting symptom screen, not a disorder or a criteria set (p. 844)."],
        ["Structure", "**25 items, 12 domains** in Table 2 order: somatic symptoms 2, sleep problems 1, inattention 1, depression 2, anger and irritability 2 (shared), mania 2, anxiety 3, psychosis 2, repetitive thoughts and behaviors 4, substance use 4, suicidal ideation/suicide attempts 2 (p. 845; counts from the form, pp. 849–850)."],
        ["Window and response types", "Past **2 weeks**; **19** items on the 0–4 scale, **6** on Yes / No / Don’t Know (pp. 844, 846). The attempt item asks about **any lifetime** attempt (p. 850)."],
        ["Threshold", "**Mild (2) or greater** on any 0–4 item; **slight (1) or greater** for **inattention and psychosis** (p. 846)."],
        ["Yes / Don’t Know items", "Substance use: **Yes** → the parent Level 2; **Don’t Know** → the **child-rated** substance Level 2 (11–17). Suicide items: **Yes or Don’t Know** → no Level 2 exists (pp. 845–846), so ask directly (app guidance)."],
        ["Domains with no Level 2", "**Psychosis, repetitive thoughts and behaviors, suicidal ideation/attempts** (p. 845)."],
        ["Reading the form", "Review items within a domain (the text contrasts a visual with an auditory hallucination item); record the **highest item score** per domain (p. 846)."],
        ["Child-rated version (11–17)", "Online only; instructions and scoring similar to the parent version but with **no Don’t Know** option (pp. 842, 846)."],
        ["Compared with the adult form", "Adds **irritability** and **inattention**; drops memory, dissociation and personality functioning (pp. 844–845; app arithmetic: 13 − 3 + 2 = 12)."],
        ["Evidence in the text", "Clinically useful with good reliability in pediatric clinical samples in the DSM-5 Field Trials (p. 844)."],
        ["Frequency of use", "Repeat at regular intervals as clinically indicated, ideally with the **same parent or guardian** completing it (p. 846)."]
      ],
      specifiers: [],
      epi: [
        ["Numbers to know", "25 items; 12 domains; ages 6–17 (child-rated 11–17); 19 items on 0–4 and 6 Yes/No/Don’t Know; 2 slight-threshold domains; 3 domains without a Level 2 (pp. 844–846)"],
        ["Field trials (research, outside the DSM)", "19 of 25 parent items good or excellent; the misuse-of-legal-drugs item was unreliable for younger children (Narrow et al. 2013)"]
      ],
      risk: [
        "Not applicable as risk factors. A parent’s Don’t Know on substance or suicide items, especially at ages 11–17, signals that the parent may not know and the young person should be asked (p. 846).",
        "A No on the suicide items does not close the question if the interview suggests risk (app guidance)."
      ],
      differential: [
        { id: "adhd", how: "The single inattention item flags at slight and leads to the SNAP-IV Level 2; diagnosis still rests on the ADHD criteria and settings (p. 845; app guidance)." },
        { id: "mdd", how: "Two depression items lead to the PROMIS parent depression item bank (p. 845)." },
        { id: "gad", how: "Three anxiety items lead to the PROMIS parent anxiety item bank (p. 845)." },
        { id: "ocd", how: "Four repetitive thoughts and behaviors items, with no pediatric Level 2: the clinician asks (p. 845)." },
        { id: "schizophrenia", how: "Two psychosis items flag at slight with no Level 2; visual versus auditory content guides the interview (pp. 845–846)." },
        { id: "asd", how: "Not screened by Level 1; a disorder-specific severity measure exists online for a diagnosed child (p. 842)." },
        { id: "no-diagnosis", how: "A flagged domain the interview does not confirm leaves no disorder to record (Chapter 20; app guidance)." }
      ],
      pearls: [
        "Parent version slight domains: **inattention and psychosis** (p. 846).",
        "**Don’t Know** → ask the child; for substances, the **child-rated** Level 2 (pp. 845–846).",
        "Child-rated version: ages **11–17**, online, **no Don’t Know** (pp. 842, 846).",
        "The **attempt** item is the only one asking about **ever** (p. 850).",
        "Anger and irritability **share** two items but have different Level 2 measures (PROMIS anger; ARI) (pp. 845, 849).",
        "A 9-year-old has only the parent version; the child-rated form starts at 11 (p. 844)."
      ],
      cmp: {
        symptoms: "25 items over 12 domains, parent-rated (19 on 0–4, 6 Yes/No/Don’t Know)",
        exclusions: "Not a diagnosis; a threshold score prompts inquiry (p. 846)",
        prevalence: "Not applicable",
        course: "Past 2 weeks (attempt item: ever); repeat with the same parent (pp. 844, 846, 850)"
      },
      clues: [
        ["Core picture", "A mother completing a symptom review for her 14-year-old at a school referral"],
        ["Key test", "Mild on most domains, slight on inattention or psychosis, and any Yes or Don’t Know"],
        ["Recording (app guidance)", "Who answered and the highest domain scores, in the note"]
      ],
      updates: upd("parent/guardian Level 1 Cross-Cutting Symptom Measure", "The child-rated version for ages 11–17 is online at www.psychiatry.org/dsm5, not printed (p. 842).")
    },
    {
      id: "level2-measures", ch: "ch23", sec: "s23-level2", pages: "844–846", critPages: "844–846",
      name: "Level 2 Cross-Cutting Symptom Measures", code: CODE,
      codes: codes(),
      aka: ["Level 2", "cross-cutting measure, in-depth", "domain-specific follow-up measures"],
      essence: "When a Level 1 domain reaches threshold, the **Level 2** measure for that domain is **one way** to get more detailed information to inform diagnosis, planning and follow-up (p. 846). They are **online** at www.psychiatry.org/dsm5, with **adult and pediatric** (parent and child) versions for **most** domains; Tables 1 and 2 list them (pp. 844–846). Several domains have **none** (pp. 844–845), and there the clinician’s own questions are the follow-up (app guidance).",
      duration: "Not applicable; varies by measure (online)",
      functioning: "Not rated (app reading)",
      mood: "PROMIS depression and anger forms, the ARI for irritability, and the Altman scale for mania (pp. 844–845)",
      criteria: [
        ["Type", "A family of online, domain-specific follow-up measures, not a disorder or a criteria set (p. 846)."],
        ["When used", "After a Level 1 threshold score; further inquiry **may include** the Level 2 measure (pp. 845–846)."],
        ["Adult Level 2 (Table 1)", "PROMIS Emotional Distress short forms for **depression, anger, anxiety**; **Altman Self-Rating Mania Scale (ASRM)**; **PHQ-15** Somatic Symptom Severity Scale; **PROMIS Sleep Disturbance** short form; **FOCI** Severity Scale for repetitive thoughts and behaviors; a substance measure **adapted from the NIDA-Modified ASSIST** (p. 844)."],
        ["Adult domains with none", "Suicidal ideation, psychosis, memory, dissociation, personality functioning (p. 844)."],
        ["Child Level 2 (Table 2)", "PHQ-15 (somatic); PROMIS Sleep Disturbance; **SNAP-IV** (inattention); PROMIS parent item banks for depression and anxiety; PROMIS Calibrated Anger Measure—Parent; **Affective Reactivity Index (ARI)** (irritability); ASRM (mania); adapted NIDA-modified ASSIST, parent or **child-rated** (substance use) (p. 845)."],
        ["Child domains with none", "Psychosis, repetitive thoughts and behaviors, suicidal ideation/suicide attempts (p. 845)."],
        ["Parent Don’t Know", "On a substance item, especially at 11–17, a Don’t Know may lead to probing with the child, including the **child-rated** Level 2 (p. 846)."],
        ["Frequency of use", "Level 1 and the relevant Level 2 may be repeated at regular intervals as clinically indicated, with the same informant or parent where one is used (p. 846)."]
      ],
      specifiers: [],
      epi: [
        ["APA site (research notes, outside the DSM)", "Eight adult, nine parent-rated and nine child-rated (11–17) Level 2 measures listed as of October 2026; confirm online"]
      ],
      risk: [
        "Not applicable as risk factors.",
        "No Level 2 exists for suicidal ideation or attempts in either version: ask directly the same day (pp. 844–845; app guidance)."
      ],
      differential: [
        { id: "mdd", how: "PROMIS depression forms deepen a flagged depression domain; the interview decides (pp. 844–845)." },
        { id: "gad", how: "PROMIS anxiety forms for a flagged anxiety domain (pp. 844–845)." },
        { id: "bipolar-i", how: "The ASRM for a flagged mania domain, adult and child (pp. 844–845)." },
        { id: "ocd", how: "The FOCI Severity Scale for a flagged adult repetitive thoughts domain; none for children (pp. 844–845)." },
        { id: "adhd", how: "The SNAP-IV for a flagged child inattention item (p. 845)." },
        { id: "no-diagnosis", how: "An elevated Level 2 score is still not a diagnosis; if criteria are not met, nothing is coded (app guidance)." }
      ],
      pearls: [
        "Level 2 is **one method**; further inquiry is what the threshold calls for (p. 846; app reading).",
        "Online only: **www.psychiatry.org/dsm5** (p. 846).",
        "Mania: **ASRM** in both tables; inattention: **SNAP-IV**; irritability: **ARI**; repetitive: **FOCI** (adult only) (pp. 844–845).",
        "Substance: **adapted NIDA-Modified ASSIST** for adults, parents and youths 11–17 (pp. 844–845)."
      ],
      cmp: {
        symptoms: "One in-depth form per flagged domain, adult and pediatric versions for most domains",
        exclusions: "Not a diagnosis; some domains have none (pp. 844–845)",
        prevalence: "Not applicable",
        course: "After a Level 1 threshold; repeat to track change (p. 846)"
      },
      clues: [
        ["Core picture", "A Level 1 anxiety item rated mild, followed by a longer anxiety form"],
        ["Key test", "Does the flagged domain have a Level 2 in Table 1 or 2?"],
        ["Recording (app guidance)", "Score in the note; diagnosis on criteria"]
      ],
      updates: upd("Level 2 Cross-Cutting Symptom Measure", "The instruments are online, not printed; Tables 1 and 2 only name them (pp. 844–846).")
    },
    {
      id: "severity-measures", ch: "ch23", sec: "s23-three-kinds", pages: "842", critPages: "842",
      name: "Disorder-specific severity measures", code: CODE,
      codes: codes(["—", "Where a Section II disorder has a severity specifier, the rating supports it; the measure itself is not coded (app guidance)", "App guidance"]),
      aka: ["severity measures", "disorder-specific measures", "dimensional severity ratings"],
      essence: "Scales tied closely to the criteria of **one** disorder, for people who **have** the diagnosis or a clinically significant syndrome **short of** full criteria (p. 842). Some are **self-rated**, others **clinician-rated** from observation; they help put numbers on symptom **frequency, intensity or duration**, overall severity or symptom type for many, not all, diagnoses, and can be repeated over time (p. 842). Only the **psychosis** measure is printed (pp. 851–853); the rest are online (p. 842).",
      duration: "Not applicable; varies by measure (online)",
      functioning: "Not the purpose; functioning is the WHODAS’s job (p. 842)",
      mood: "Not applicable as a whole; depends on the disorder (p. 842)",
      criteria: [
        ["Type", "A class of disorder-specific scales, not a disorder or a criteria set (p. 842)."],
        ["Who gets one", "People with the diagnosis, or with a clinically significant syndrome below full criteria; the text’s example is the psychosis dimensions in someone meeting schizophrenia criteria (p. 842)."],
        ["Rater", "Self-rated for some, clinician-rated from observation for others (p. 842)."],
        ["What they quantify", "Symptom frequency, intensity or duration, overall severity, or symptom type (p. 842)."],
        ["Diagnoses named", "Generalized anxiety disorder, social anxiety disorder, psychotic disorders, PTSD, autism spectrum disorder, social (pragmatic) communication disorder, among others (p. 842)."],
        ["When", "At the initial interview and over time, to follow severity and treatment response (p. 842)."],
        ["Where", "Online at www.psychiatry.org/dsm5; only the psychosis measure is printed (pp. 842, 851–853)."],
        ["Contrast with Level 1", "A severity measure follows a **diagnosed** (or near-threshold) disorder; Level 1 is recommended for **every individual presenting for psychiatric care** (p. 842; Section I, p. 15)."]
      ],
      specifiers: [],
      epi: [
        ["APA site (research notes, outside the DSM)", "Ten adult and ten child disorder-specific severity measures and six clinician-rated severity measures listed as of October 2026; confirm online"]
      ],
      risk: ["Not applicable as risk factors."],
      differential: [
        { id: "gad", how: "Named on p. 842 among diagnoses with a severity measure; given with the diagnosis or a near-threshold syndrome, not as a screen (app guidance)." },
        { id: "social-anxiety", how: "Named on p. 842 among diagnoses with a severity measure." },
        { id: "panic-disorder", how: "An anxiety disorder with an online severity measure (APA site; research notes, outside the DSM)." },
        { id: "ptsd", how: "Named on p. 842 among diagnoses with a severity measure." },
        { id: "asd", how: "Named on p. 842; the ASD severity levels are part of the Chapter 1 criteria (Ch 1; app guidance)." },
        { id: "spcd", how: "Social (pragmatic) communication disorder is named on p. 842 among diagnoses with a severity measure." },
        { id: "mdd", how: "Depression is one of the symptom types the severity measures quantify (p. 842); the online adult depression measure is the PHQ-9 (research notes, outside the DSM)." },
        { id: "schizophrenia", how: "The printed example: the psychosis severity dimensions in someone meeting schizophrenia criteria (p. 842)." }
      ],
      pearls: [
        "Severity measure = **after** a diagnosis (or near-threshold syndrome); cross-cutting = **anyone** (p. 842).",
        "Only one is printed: the **psychosis** dimensions (pp. 851–853).",
        "Some are self-rated, some clinician-rated (p. 842).",
        "Named on p. 842: **GAD, social anxiety, psychotic disorders, PTSD, ASD, social (pragmatic) communication disorder**."
      ],
      cmp: {
        symptoms: "Disorder-specific; mirror the criteria of one diagnosis",
        exclusions: "Not a screen and not a diagnosis (p. 842; app guidance)",
        prevalence: "Not applicable",
        course: "At diagnosis and over time to track response (p. 842)"
      },
      clues: [
        ["Core picture", "A patient already diagnosed with PTSD rating symptom severity at each visit"],
        ["Key test", "Is there a diagnosis (or near-threshold syndrome) to follow?"],
        ["Recording (app guidance)", "Score in the note; severity specifier where the disorder has one"]
      ],
      updates: upd("disorder-specific severity measure", "Giving one as a screen to an undiagnosed patient is the misuse the exam likes to test (app guidance).")
    },
    {
      id: "psychosis-severity-dimensions", ch: "ch23", sec: "s23-crdpss", pages: "851–853", critPages: "851",
      name: "Clinician-Rated Dimensions of Psychosis Symptom Severity", code: CODE,
      codes: codes(["—", "The five primary-symptom scores may be recorded as the Chapter 2 “specify current severity” rating; the diagnosis can be made without it (Ch 2, p. 109)", "Ch 2"]),
      aka: ["CRDPSS", "psychosis severity dimensions", "clinician-rated psychosis dimensions"],
      essence: "A **clinician-rated** measure of **eight** dimensions: the **five primary symptoms** of psychosis (hallucinations, delusions, disorganized speech, abnormal psychomotor behavior, negative symptoms) plus **impaired cognition**, **depression** and **mania**, each rated **0–4** at its **most severe in the past 7 days** (p. 851). Each level has a symptom-specific definition (pp. 852–853). It is the instrument behind the Chapter 2 **“specify current severity”** line, which uses the five primary symptoms (Ch 2, p. 109). The app’s condensed rater is the psychosis severity tool in Case tools (#/assess/scale/crdpss).",
      duration: "Not applicable; recall window = most severe in the past 7 days (p. 851)",
      functioning: "Not rated; cognitive deficits are included because they predict functional ability (p. 851)",
      mood: "Two of the eight dimensions are depression and mania, to capture co-occurring mood pathology (p. 851)",
      criteria: [
        ["Type", "A clinician-rated, disorder-specific severity measure, not a disorder or a criteria set (pp. 842, 851)."],
        ["Rationale", "Psychotic disorders are heterogeneous, and severity predicts features such as cognitive and neurobiological deficits; dimensions help with planning, prognosis and mechanism research (p. 851)."],
        ["Eight items", "I hallucinations; II delusions; III disorganized speech; IV abnormal psychomotor behavior; V negative symptoms (restricted emotional expression or avolition); VI impaired cognition; VII depression; VIII mania (pp. 851–853)."],
        ["Rater and window", "The clinician, at the assessment, using all available information; each item rated at its **worst in the past 7 days** (p. 851)."],
        ["Scale", "**0–4**: none (not present on the form), equivocal, present but mild, present and moderate, present and severe, each level defined for that symptom (pp. 851–852). Hallucinations and delusions are graded by pressure to act and distress; speech by how hard it is to follow; psychomotor behavior by frequency; negative symptoms by degree of decrease (pp. 852–853; app paraphrase)."],
        ["Cognition anchors", "Graded in **standard deviations** below the level expected for **age and socioeconomic status**: within 0.5 SD equivocal, 0.5–1 SD mild, 1–2 SD moderate, more than 2 SD severe (p. 853)."],
        ["Recording", "Tick the level and enter the number in the Score column; no total is described (p. 851; app reading)."],
        ["Link to Chapter 2", "In the Chapter 2 criteria text, the five primary-symptom items are the **“specify current severity”** rating for schizophrenia and the other psychotic disorders; the diagnosis can be made **without** it (Ch 2, p. 109). Cognition, depression and mania are added dimensions (p. 851); the DSM-5-TR Classification footnote lists all eight dimensions under the specifier (p. xxix; app note)."],
        ["Frequency of use", "Repeat at regular intervals as clinically indicated; consistently high scores warrant further assessment, guided by judgment (p. 851)."],
        ["App tool", "The psychosis severity tool in Case tools (#/assess/scale/crdpss) holds condensed anchors for the same eight dimensions (app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Numbers to know", "8 items; 5 named by the Chapter 2 criteria-text specifier (Ch 2, p. 109); 0–4; past 7 days at worst; cognition anchored at 0.5, 1 and 2 SD (pp. 851–853)"],
        ["Reliability (research, outside the DSM)", "Low inter-rater agreement for most items except delusions in a recent-onset sample (Berendsen et al. 2020); rater training matters"]
      ],
      risk: ["Not applicable as risk factors; higher severity predicts more cognitive and neurobiological deficit (p. 851)."],
      differential: [
        { id: "schizophrenia", how: "The text’s own example of use; the five primary-symptom scores serve the severity specifier (pp. 842, 851; Ch 2)." },
        { id: "schizophreniform-disorder", how: "Same optional severity specifier (Ch 2)." },
        { id: "brief-psychotic-disorder", how: "Ch 2, p. 109 carries the severity specifier pointing to this measure." },
        { id: "schizoaffective-disorder", how: "Specifier as above; the depression and mania items capture the mood component (p. 851; Ch 2)." },
        { id: "delusional-disorder", how: "Specifier as above; the delusions item is graded by pressure to act and distress (p. 852; Ch 2), not bizarreness (app reading)." },
        { id: "bipolar-i", how: "A high mania rating flags co-occurring mood pathology; whether a mood disorder is present is decided on its own criteria (p. 851; app guidance)." }
      ],
      pearls: [
        "**8** items (p. 851), but the Chapter 2 criteria-text specifier names **5** (Ch 2, p. 109).",
        "Window: **7 days, at worst** (p. 851).",
        "**Clinician**-rated, unlike Level 1 and the WHODAS (p. 851).",
        "Cognition is the only item anchored to **SD** from the expected level for age and SES (p. 853).",
        "The specifier is **optional**: the diagnosis stands without it (Ch 2, p. 109).",
        "Bedside version: the psychosis severity tool in Case tools (#/assess/scale/crdpss; app guidance)."
      ],
      cmp: {
        symptoms: "8 dimensions rated 0–4 by the clinician",
        exclusions: "Not a diagnosis; given to people with a psychotic disorder or near-threshold syndrome (p. 842)",
        prevalence: "Not applicable",
        course: "Worst in the past 7 days; repeat to track response (p. 851)"
      },
      clues: [
        ["Core picture", "A ward patient with schizophrenia rated weekly on voices, speech, negative symptoms and mood"],
        ["Key test", "Rate each dimension at its worst in the past 7 days"],
        ["Recording (app guidance)", "Five primary-symptom scores as the severity specifier; all eight in the note"]
      ],
      updates: upd("Clinician-Rated Dimensions of Psychosis Symptom Severity", "When used, the five primary-symptom scores may be written as the Chapter 2 severity specifier beside the diagnosis; the measure is not itself the diagnosis, and the diagnosis can be made without it (Ch 2, p. 109).")
    },
    {
      id: "whodas", ch: "ch23", sec: "s23-whodas", pages: "854–857", critPages: "854–855",
      name: "WHODAS 2.0 (36-item, self-administered)", code: CODE,
      codes: codes(["—", "Average domain and general disability scores belong in the note as the functioning statement; there is no GAF in DSM-5-TR (Section I, p. 16; app guidance)", "App guidance"]),
      aka: ["WHODAS 2.0", "WHO Disability Assessment Schedule", "disability schedule", "GAF replacement (Section I, p. 16)"],
      essence: "WHO’s measure of **disability** in **six domains** for adults **18 and older**: **36 items** rated for difficulty over the **past 30 days**, validated across cultures and sensitive to change (p. 854). WHO scores it by a **simple sum** (36–180) or by **IRT** on a 0–100 metric; DSM-5-TR adds **average domain** and **average general disability** scores on the 1–5 scale and a **missing-data** rule (pp. 854–855). It replaced the GAF (Section I, p. 16).",
      duration: "Not applicable; recall window = past 30 days (p. 854)",
      functioning: "This is the functioning measure: difficulty because of any health condition in six domains (p. 854)",
      mood: "Not rated; the WHODAS asks about difficulty doing things, not symptoms (p. 854; app reading)",
      criteria: [
        ["Type", "A self-administered disability measure for any health condition, based on the WHO ICF; not a disorder or a criteria set (pp. 842, 854)."],
        ["Who completes it", "Adults **18+**; a knowledgeable informant uses the online **proxy-administered** version when capacity is impaired, for example in major neurocognitive disorder (p. 854)."],
        ["Six domains and item counts", "**Understanding and communicating 6; getting around 5; self-care 4; getting along with people 5; life activities 8** (4 household + 4 work/school, the work/school block skipped by those who neither work nor study); **participation in society 8**; total **36** (p. 854; counts from the form, pp. 856–857)."],
        ["Window and responses", "Difficulty over the **past 30 days**, each item answered none, mild, moderate, severe, or extreme/cannot do (pp. 854, 856)."],
        ["WHO simple scoring", "Score each item **1 (none) to 5 (extreme)** and **sum**, with no recoding or weighting: maximum **180**; suited to hand scoring and busy clinics, and WHO treats the sum as sufficient to describe the degree of limitation (p. 854)."],
        ["WHO complex (IRT) scoring", "Computer-based item-response-theory scoring that weights item difficulty and each response level: recode items to **0–4** and sum per domain (raw maximum **144**), sum the six domains, convert to **0–100** (0 = no disability, 100 = full disability); domain scores are named cognition, mobility, self-care, getting along, life activities and participation; WHO publishes population norms (p. 854)."],
        ["DSM-5-TR review step", "The clinician reviews every answer in the interview, records it under **Clinician Use Only**, and may enter a **corrected** raw item score (p. 855)."],
        ["DSM-5-TR average scores", "Based on Field Trials at six U.S. sites and one in Canada: **average domain score** = raw domain score ÷ items in the domain (all six understanding-and-communicating items moderate → 18 ÷ 6 = **3**, moderate); **average general disability score** = raw total ÷ **36**; both read on **1 none – 5 extreme** (p. 855)."],
        ["Missing data", "If **10 or more** items are unanswered (**more than 25%**), the simple and average **general** scores may not be useful; a domain that is **75%–100% complete** can still be scored by its simple or average score (p. 855)."],
        ["Frequency of use", "Repeat at regular intervals as clinically indicated; consistently high domain scores may mark problem areas for further assessment and intervention (p. 855)."],
        ["Copyright", "WHO’s form; clinicians may reproduce it for their own patients, other uses including electronic use need WHO permission (p. 857)."]
      ],
      specifiers: [],
      epi: [
        ["Numbers to know", "36 items; 6 domains (6-5-4-5-8-8); ages 18+; past 30 days; simple max 180; IRT raw max 144, metric 0–100; averages 1–5; 10+ missing; 75% domain rule (pp. 854–855)"],
        ["12-item version (research, outside the DSM)", "WHO’s short form gives an overall score only and explains about 81% of the 36-item variance"]
      ],
      risk: ["Not applicable as risk factors; residual impairment after symptoms settle raises relapse risk in conditions such as MDD and the anxiety disorders (p. 842)."],
      differential: [
        { id: "mdd", how: "Residual disability after an episode carries relapse risk; follow it with average domain scores (p. 842; app guidance)." },
        { id: "major-ncd", how: "Impaired capacity → the online proxy version completed by an informant (p. 854)." },
        { id: "schizophrenia", how: "Pairs with the psychosis dimensions: symptoms from one, disability from the other (pp. 851, 854; app reading)." },
        { id: "cultural-formulation", how: "Functioning is judged against the person’s cultural background (app guidance); where cultural dynamics matter, the CFI should be considered (Section I, p. 20; Chapter 24)." },
        { id: "no-diagnosis", how: "Disability alone is not a diagnosis; most criteria sets need clinically significant distress or impairment, which the WHODAS helps document (p. 842; app guidance)." }
      ],
      pearls: [
        "Domain items **6-5-4-5-8-8 = 36** (app count of the form, pp. 856–857).",
        "**180** simple max; **144** IRT raw max; **0–100** IRT metric (p. 854).",
        "Average domain = raw ÷ items; general = raw ÷ **36**; read on **1–5** (p. 855).",
        "With **10 or more** missing, the general scores may not be helpful; a domain **75%–100%** complete is still usable (p. 855).",
        "Window: **past 30 days** (p. 854).",
        "It **replaced the GAF** (Section I, p. 16)."
      ],
      cmp: {
        symptoms: "36 difficulty items over 6 functioning domains, self-rated",
        exclusions: "Not a diagnosis and not a symptom measure (app reading)",
        prevalence: "Not applicable",
        course: "Past 30 days; repeat at intervals to track disability (pp. 854–855)"
      },
      clues: [
        ["Core picture", "A teacher recovering from depression whose mobility is intact but participation severely limited"],
        ["Key test", "Average domain scores and how many items are missing"],
        ["Recording (app guidance)", "Average domain and general scores in the note as the functioning statement"]
      ],
      updates: upd("WHODAS 2.0", "Between editions, the WHODAS guidance heading now names DSM-5-TR users; the expanded introduction (pp. 841–842) and the college-student study (p. 844) are the visible additions (app comparison).")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Level 1 adult vs Level 1 child (parent/guardian)", ids: ["level1-adult", "level1-child"] },
    { label: "Level 1 adult vs Level 2 measures", ids: ["level1-adult", "level2-measures"] },
    { label: "Psychosis severity dimensions vs WHODAS 2.0", ids: ["psychosis-severity-dimensions", "whodas"] },
    { label: "WHODAS 2.0 vs Level 1 adult", ids: ["whodas", "level1-adult"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 23: recall windows of the printed measures", ticks: [[0, "now"], [25, "7 days"], [45, "2 weeks"], [70, "30 days"], [100, "ever"]], rows: [
      { label: "Psychosis dimensions", dx: "psychosis-severity-dimensions", from: 0, to: 25, color: "guide", span: "past 7 days, at worst" },
      { label: "Level 1 (adult and parent)", dx: "level1-adult", from: 0, to: 45, color: "case", span: "past 2 weeks" },
      { label: "WHODAS 2.0", dx: "whodas", from: 0, to: 70, color: "clin", span: "past 30 days" },
      { label: "Parent suicide attempt item", dx: "level1-child", from: 0, to: 100, color: "hy", span: "ever" }
    ], note: "These are **recall windows**, the period each form asks the respondent or clinician to look back over, **not durations of illness** and not criteria. The psychosis dimensions rate each symptom at its worst in the past 7 days (p. 851); the Level 1 items cover the past 2 weeks (pp. 843–844); the WHODAS covers the past 30 days (p. 854); on the parent form the suicide attempt item alone asks about any lifetime attempt (p. 850). The scale is not linear." }
  ]);
})();
