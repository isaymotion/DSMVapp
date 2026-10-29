/* Chapter 23 practice drills.
   dxline:   this chapter has no diagnoses and no codes, so the "line" is the plan line a resident writes in the note after
             scoring a measure: which form, who rated it, the recall window, the scores that matter, the next step, and the
             reminder that the form does not make the diagnosis (p. 846). Each `parts` entry is a decision (threshold reached,
             next step, which Level 2, which version, rater, score). Where the score goes in the record, and the wording of the
             plan line, are app guidance. Answers are spread across the option positions because the app does not shuffle.
   counting: decide which findings count toward one rule from the chapter (an item threshold, an average score, an item
             count, the WHODAS missing-data rule), then whether the stated number is reached.
   The forms are copyrighted (APA; WHO for the WHODAS): items are described by what they cover, never quoted, and no
   response anchors are reprinted. Self-harm items are referred to in general clinical terms. Ids are stable keys for progress. */
(function () {
  SP.add("ch23", "dxline", [
    {
      id: "w23-01", tag: "Slight is enough for psychosis",
      "case": "A 29-year-old call-center agent comes to the Mariveles OPD because she cannot stop worrying about her job and her mother’s health. In the waiting area she completes the adult self-rated Level 1 measure for the past 2 weeks. She rates two of the three anxiety items mild and the third moderate, the voice-hearing item in the psychosis domain slight, the other psychosis item none, and the sleep item slight. Every other item is none.",
      parts: [
        { label: "Domains at threshold", options: ["Anxiety only", "Anxiety and sleep", "Anxiety and psychosis", "Anxiety, psychosis and sleep"], answer: 2 },
        { label: "Level 2 for anxiety", options: ["PHQ-15 Somatic Symptom Severity Scale", "PROMIS Emotional Distress—Anxiety—Short Form", "FOCI Severity Scale", "None exists; ask directly"], answer: 1 },
        { label: "Next step for psychosis", options: ["Give the adult psychosis Level 2 measure", "Nothing yet: slight is below threshold", "Direct inquiry about the voice-hearing item; no Level 2 exists", "Repeat Level 1 in 2 weeks before asking"], answer: 2 }
      ],
      line: "Level 1 adult (self-rated, past 2 weeks): highest domain scores anxiety **3**, psychosis **1** (voice-hearing item), sleep 1 → **PROMIS anxiety Level 2**; **direct inquiry** on the voice-hearing item (no Level 2); no diagnosis from the form",
      why: "For adults the threshold is **mild (2)** on any item for most domains, but **slight (1)** for **substance use, suicidal ideation and psychosis** (pp. 845–846), so the single slight psychosis rating counts and the slight sleep rating does not. Anxiety has a PROMIS short form as its Level 2 (p. 844); psychosis has **none**, so the clinician’s own questions are the follow-up, and reviewing which psychosis item was endorsed tells you where to start (pp. 844–845). The plan line records scores and next steps, not a disorder (p. 846; app guidance)."
    },
    {
      id: "w23-02", tag: "Informant for major NCD",
      "case": "A 74-year-old retired fisherman with a known major neurocognitive disorder is brought to the OPD by his daughter, who lives with him and spends most of each day with him. He cannot follow the written questions. The team wants a cross-cutting screen. The daughter’s ratings for the past 2 weeks: the memory item moderate, the sleep item mild, the dissociation item none, everything else none or slight, with no slight rating in the substance, suicidal ideation or psychosis domains.",
      parts: [
        { label: "Who completes the adult Level 1", options: ["A knowledgeable adult informant: his daughter", "He does, with the items read aloud", "The clinician, from the interview alone", "No one: Level 1 is not used when capacity is impaired"], answer: 0 },
        { label: "Next step for memory", options: ["The adult memory Level 2 measure", "Nothing: memory is flagged only at severe", "The clinician’s own inquiry; there is no memory Level 2", "PROMIS Sleep Disturbance covers it"], answer: 2 },
        { label: "At the 3-month follow-up", options: ["Whichever relative brings him that day", "He completes it himself, for comparison", "No repeat: Level 1 is a one-time screen", "Ideally the same informant, his daughter, again"], answer: 3 }
      ],
      line: "Level 1 adult (**informant**-rated by daughter, past 2 weeks): memory **3**, sleep **2** → clinician inquiry on memory (no Level 2); **PROMIS sleep Level 2**; repeat with the **same informant** at follow-up; no diagnosis from the form",
      why: "When impaired capacity, for example a major NCD, prevents the person from completing it, a **knowledgeable adult informant** may answer the adult form (p. 843). Memory is a **mild-threshold** domain with **no Level 2** (p. 844); sleep has the PROMIS Sleep Disturbance short form (p. 844). For people with impaired capacity, follow-up ratings should ideally come from the **same informant** (p. 846). For his functioning, the WHODAS has a proxy version online (p. 854)."
    },
    {
      id: "w23-03", tag: "Don’t Know at 15",
      "case": "A 15-year-old boy is referred by his school in Balanga for falling grades. His mother completes the parent/guardian Level 1 measure for the past 2 weeks. She rates one depression item moderate and the other mild, the two anger and irritability items slight, and the other 0–4 items none. On the Yes/No/Don’t Know items she answers **Don’t Know** to the alcohol item and **No** to the tobacco, drug and medicine items and to both suicide items.",
      parts: [
        { label: "Domains needing inquiry", options: ["Depression only", "Depression and substance use", "Depression, anger and substance use", "Substance use only"], answer: 1 },
        { label: "Substance follow-up", options: ["Parent version of the adapted NIDA-modified ASSIST only", "None exists; leave it", "Wait until the mother finds out", "Ask him directly and consider the child-rated substance Level 2"], answer: 3 },
        { label: "Level 2 for depression", options: ["PROMIS Emotional Distress—Depression—Parent Item Bank", "PHQ-15 Somatic Symptom Severity Scale", "Affective Reactivity Index", "PROMIS Calibrated Anger Measure—Parent"], answer: 0 }
      ],
      line: "Level 1 parent/guardian (mother, past 2 weeks): depression **3**; alcohol item **Don’t Know** → PROMIS depression parent Level 2; **ask the adolescent** about substance use and consider the **child-rated** substance Level 2 (11–17); no diagnosis from the form",
      why: "In the parent version most domains flag at **mild (2)**, so the slight anger and irritability ratings do not reach threshold (p. 846). A parent’s **Don’t Know** on a substance item, especially at ages **11–17**, calls for **probing with the child** and the child-rated Level 2 for that domain (p. 846); Table 2 names the child-rated adapted NIDA-modified ASSIST for that case (p. 845). Depression has the PROMIS parent item bank (p. 845). He could also complete the child-rated Level 1, which is online (p. 844)."
    },
    {
      id: "w23-04", tag: "A 9-year-old and the inattention item",
      "case": "A 9-year-old girl is brought to a barangay health station follow-up because her teacher says she daydreams in class. Her father completes the parent/guardian Level 1 measure for the past 2 weeks. He rates both somatic items mild (stomachaches before school), the inattention item slight, the sleep item slight, and all other 0–4 items none; he answers No to every Yes/No/Don’t Know item. The midwife asks whether the girl should fill in her own form as well.",
      parts: [
        { label: "Child-rated Level 1 too?", options: ["Yes, for every child aged 6–17", "No: the child-rated version is for ages 11–17", "Yes, in place of the father’s form", "Only if the father had answered Don’t Know"], answer: 1 },
        { label: "Domains at threshold", options: ["Somatic only", "Somatic and sleep", "Inattention only", "Somatic and inattention"], answer: 3 },
        { label: "Level 2 for inattention", options: ["SNAP-IV", "FOCI Severity Scale", "Affective Reactivity Index", "None exists"], answer: 0 }
      ],
      line: "Level 1 parent/guardian (father, past 2 weeks): somatic **2**, inattention **1** → PHQ-15 and **SNAP-IV** Level 2 measures and interview; sleep 1 below threshold; no child-rated form (age 9); no diagnosis from the form",
      why: "The child-rated version is meant for ages **11–17** (p. 844), so at 9 the parent form stands alone. In the parent version **inattention and psychosis** flag at **slight (1)**; the rest, including sleep and somatic symptoms, at **mild (2)** (p. 846). Table 2 gives **SNAP-IV** for inattention and **PHQ-15** for somatic symptoms (p. 845). A flagged inattention item is a reason to ask, not a diagnosis (p. 846; app guidance)."
    },
    {
      id: "w23-05", tag: "One slight rating on the self-harm item",
      "case": "A 22-year-old college student comes to the Bataan ER the night after a breakup. While waiting she completes the adult self-rated Level 1 measure for the past 2 weeks. She rates one depression item moderate and the other mild, the suicidal ideation item slight, the heavy-drinking item none, and everything else none. She is calm, cooperative and accompanied by her roommate.",
      parts: [
        { label: "Suicidal ideation domain", options: ["Waiting for a Yes/No answer first", "Below threshold: needs mild (2)", "At threshold: slight (1) or more is enough", "Flagged only together with depression"], answer: 2 },
        { label: "Next step for that item", options: ["The suicidal ideation Level 2 measure", "Repeat Level 1 at the next visit", "The PROMIS depression form covers it", "A direct conversation about the thoughts the same day; no Level 2 exists"], answer: 3 },
        { label: "Level 2 for depression", options: ["Altman Self-Rating Mania Scale", "PHQ-15 Somatic Symptom Severity Scale", "PROMIS Emotional Distress—Depression—Short Form", "None exists"], answer: 2 }
      ],
      line: "Level 1 adult (self-rated, past 2 weeks): depression **3**, suicidal ideation **1** → **direct inquiry on thoughts of self-harm today** (no Level 2) with a safety plan if risk is present; PROMIS depression Level 2; no diagnosis from the form",
      why: "Suicidal ideation is one of the three adult domains flagged at **slight (1) or greater** (p. 846), and it has **no Level 2** measure (p. 844), so the clinician’s own questions are the follow-up. Depression flags at mild and has a PROMIS short form (p. 844). Doing that conversation the same day, and the NCMH Crisis Hotline 1553 if risk is present (confirm before giving out), is app guidance."
    },
    {
      id: "w23-06", tag: "Rating the psychosis dimensions",
      "case": "On a ward in Bataan, a 33-year-old man admitted with schizophrenia is reviewed at the end of his first week. Over the past 7 days, at his worst, he has been convinced that the cook is poisoning his food; he eats only sealed biscuits his brother brings and is somewhat distressed by the idea, but still comes to the dining area. He hears no voices, his speech is easy to follow, and he has no abnormal movements. The team wants a dimensional rating to track his response.",
      parts: [
        { label: "Which measure", options: ["Clinician-Rated Dimensions of Psychosis Symptom Severity", "Adult Level 1 cross-cutting measure", "WHODAS 2.0", "An adult psychosis Level 2 measure"], answer: 0 },
        { label: "Rater and window", options: ["Patient, past 2 weeks", "Clinician, average over 30 days", "Family, past 7 days", "Clinician, worst in the past 7 days"], answer: 3 },
        { label: "Delusions score (app judgment)", options: ["1 (equivocal)", "2 (mild)", "3 (moderate)", "4 (severe)"], answer: 2 }
      ],
      line: "Psychosis severity dimensions (clinician-rated, worst in past 7 days): delusions **3**, hallucinations 0, disorganized speech 0, abnormal psychomotor behavior 0; remaining dimensions as assessed → repeat weekly to track response; scores in the progress note",
      why: "The measure is **clinician-rated**, using all available information, for each symptom at its **most severe in the past 7 days**, on a **0–4** scale (p. 851). The delusion levels are graded by **pressure to act** on the belief and **how bothered** the person is (pp. 852–853): here the belief clearly changes his eating and distresses him, but not to the severe end, so **moderate** is the app’s rating (the condensed anchors are in the psychosis severity tool in Case tools). Level 1 is a screen, not a severity rating, and no psychosis Level 2 exists (p. 844). The diagnosis stands on the Chapter 2 criteria with or without the rating (Ch 2)."
    },
    {
      id: "w23-07", tag: "WHODAS average scores",
      "case": "A 45-year-old woman being treated for depression completes the self-administered 36-item WHODAS 2.0 at the Mariveles OPD, answering every item for the past 30 days. Her four self-care items total **8**, her five getting-along items total **15**, and her overall raw score is **108**.",
      parts: [
        { label: "Average self-care score", options: ["2 (mild)", "8", "1.6", "4 (severe)"], answer: 0 },
        { label: "Average getting-along score", options: ["15", "3 (moderate)", "2.5", "5 (extreme)"], answer: 1 },
        { label: "Average general disability score", options: ["2.5", "108 ÷ 180 = 0.6", "36", "3 (moderate)"], answer: 3 }
      ],
      line: "WHODAS 2.0 (self-administered, past 30 days, all 36 items): average self-care **2**, getting along **3**, general disability **3** (simple total 108 of 180) → baseline for follow-up; scores in the formulation",
      why: "DSM-5-TR recommends **average** scores: the raw domain score divided by the **number of items in that domain**, and the raw total divided by **36**, read on the same **1 (none) to 5 (extreme)** scale (p. 855). So 8 ÷ 4 = 2, 15 ÷ 5 = 3 and 108 ÷ 36 = 3. The simple sum (here 108) has a maximum of **180** (p. 854); dividing by 180 is not a WHODAS score. The pattern, getting along worse than self-care, is what to compare at the next visit (app guidance)."
    },
    {
      id: "w23-08", tag: "WHODAS with 12 blanks",
      "case": "A 60-year-old market vendor completes the WHODAS 2.0 at home and returns it with **12** items blank: 2 of the 6 understanding-and-communicating items, none of the getting-around items, 1 of the 4 self-care items, 3 of the 5 getting-along items, 2 of the 8 life-activities items and 4 of the 8 participation items. The resident is about to score it.",
      parts: [
        { label: "General disability score", options: ["Use the simple sum", "Use the average general score instead", "Neither is useful: 10 or more items are missing", "Prorate the blanks to 36 items"], answer: 2 },
        { label: "Domains still usable", options: ["Getting around only", "Getting around, self-care and life activities", "All except participation", "None"], answer: 1 },
        { label: "Best first step", options: ["Go over the blank items with her in the interview", "Record the form as invalid and stop", "Replace it with a GAF rating", "Fill each blank with the domain average"], answer: 0 }
      ],
      line: "WHODAS 2.0 (self-administered, past 30 days): **12 items missing** → general disability scores not interpretable; domain scores usable for getting around (5/5), self-care (3/4) and life activities (6/8); review the blank items with her and rescore",
      why: "When **10 or more** items are unanswered (more than **25%** of 36), the simple and average **general** scores may not be useful; a domain may still be scored when it is **75%–100%** complete (p. 855). Here that is 5/5, 3/4 and 6/8; cognition (4/6), getting along (2/5) and participation (4/8) fall short (app arithmetic). The manual asks clinicians to **encourage completion** of every item (p. 855), and the clinician reviews each response in the interview anyway (p. 855). The GAF was replaced by the WHODAS (Section I, p. 16); imputing blanks is not part of the DSM-5-TR guidance (app reading)."
    }
  ]);

  SP.add("ch23", "counting", [
    {
      id: "n23-01", tag: "Adult thresholds, item by item",
      "case": "Ratings on one patient’s adult self-rated Level 1 measure (past 2 weeks), with the rest of the items none:",
      ask: "Mark the ratings that put their domain at or above its threshold. Are at least three domains flagged?",
      items: [
        ["The heavy-drinking item rated slight (1)", true, "Substance use flags at **slight** or more (p. 846)."],
        ["The sleep item rated slight (1)", false, "Sleep needs **mild (2)** (p. 844)."],
        ["One anxiety item rated mild (2), the other two none", true, "**Any single item** at mild is enough; there is no domain sum (pp. 845–846)."],
        ["The anger item rated slight (1)", false, "Anger needs **mild** (p. 844)."],
        ["The memory item rated mild (2)", true, "Memory flags at mild; it has **no Level 2**, so the follow-up is your own inquiry (p. 844)."],
        ["Both mania items rated slight (1)", false, "Two slight ratings do not add up to mild: the unit is the **highest item**, and mania needs mild (pp. 844–846; app reading)."]
      ],
      need: 3,
      met: true,
      metLabel: "So, are at least three domains flagged?",
      why: "Three domains reach threshold: substance use, anxiety and memory. The adult rule is **mild (2) or greater on any item**, except **substance use, suicidal ideation and psychosis**, which flag at **slight (1)** (pp. 845–846). Record the **highest item score** per domain in the clinician column (p. 846)."
    },
    {
      id: "n23-02", tag: "Parent form thresholds",
      "case": "A grandmother completes the parent/guardian Level 1 measure for her 12-year-old grandson (past 2 weeks). Selected answers:",
      ask: "Mark the answers that reach their domain’s threshold or trigger further inquiry. Are at least four?",
      items: [
        ["The inattention item rated slight (1)", true, "Inattention flags at **slight** in the parent version (p. 846)."],
        ["One psychosis item (seeing things others cannot) rated slight (1)", true, "Psychosis also flags at **slight** (p. 846)."],
        ["The sleep item rated slight (1)", false, "Sleep needs **mild** (p. 845)."],
        ["One repetitive thoughts and behaviors item rated mild (2)", true, "Mild threshold met; this domain has **no Level 2** in the child version (p. 845)."],
        ["No to the tobacco item", false, "Only **Yes** or **Don’t Know** triggers the substance follow-up (p. 845)."],
        ["Don’t Know to the suicide attempt item", true, "**Yes or Don’t Know** on the suicide items calls for direct inquiry; there is no Level 2 (pp. 845–846)."]
      ],
      need: 4,
      met: true,
      metLabel: "So, are at least four flagged?",
      why: "Four answers trigger follow-up. In the parent version the slight-threshold domains are **inattention and psychosis** (not the adult trio), most others flag at **mild**, and the six Yes/No/Don’t Know items flag on **Yes or Don’t Know** (pp. 845–846). At 12 he could also complete the child-rated version online, which has no Don’t Know option (pp. 844, 846)."
    },
    {
      id: "n23-03", tag: "Where no adult Level 2 exists",
      "case": "An adult’s Level 1 measure flags five domains: psychosis, repetitive thoughts and behaviors, sleep problems, mania and dissociation.",
      ask: "Mark the flagged domains for which no adult Level 2 measure exists, so the follow-up is the clinician’s own inquiry. Are at least three?",
      items: [
        ["Psychosis", true, "**No** adult Level 2 (p. 844)."],
        ["Repetitive thoughts and behaviors", false, "Adult Level 2: the **FOCI Severity Scale** (p. 844). (In the child version this domain has none, p. 845.)"],
        ["Sleep problems", false, "Adult Level 2: **PROMIS Sleep Disturbance** short form (p. 844)."],
        ["Mania", false, "Adult Level 2: the **Altman Self-Rating Mania Scale** (p. 844)."],
        ["Dissociation", true, "**No** adult Level 2 (p. 844)."]
      ],
      need: 3,
      met: false,
      metLabel: "So, are at least three without a Level 2?",
      why: "Only two of these five lack a Level 2. The five adult domains with **none** are **suicidal ideation, psychosis, memory, dissociation and personality functioning** (p. 844). Level 2 measures are online, and the manual calls them **one** way to look deeper, not the only one (p. 846)."
    },
    {
      id: "n23-04", tag: "WHODAS domain averages",
      "case": "A man’s self-administered WHODAS 2.0, all 36 items answered for the past 30 days. Raw domain scores:",
      ask: "Mark the domains whose average score is 3 (moderate) or worse. Are at least four?",
      items: [
        ["Understanding and communicating: 21 over 6 items", true, "21 ÷ 6 = **3.5** (p. 855)."],
        ["Getting around: 8 over 5 items", false, "8 ÷ 5 = **1.6** (p. 855)."],
        ["Self-care: 12 over 4 items", true, "12 ÷ 4 = **3**, moderate (p. 855)."],
        ["Getting along with people: 12 over 5 items", false, "12 ÷ 5 = **2.4** (p. 855)."],
        ["Life activities: 20 over 8 items", false, "20 ÷ 8 = **2.5** (p. 855)."],
        ["Participation in society: 28 over 8 items", true, "28 ÷ 8 = **3.5** (p. 855)."]
      ],
      need: 4,
      met: false,
      metLabel: "So, are at least four at moderate or worse?",
      why: "Three domains average 3 or more. The **average domain score** is the raw domain score divided by that domain’s **number of items**, read on the 1 (none) to 5 (extreme) scale; the manual’s own example is 18 ÷ 6 = 3, moderate (p. 855). Item counts are 6, 5, 4, 5, 8, 8 (app count of the form, pp. 856–857)."
    },
    {
      id: "n23-05", tag: "The missing-data rule",
      "case": "A woman returns a WHODAS 2.0 with 11 items blank. Answered items per domain:",
      ask: "Mark the domains whose scores may still be used. Are at least four?",
      items: [
        ["Understanding and communicating: 5 of 6 answered", true, "83%: within **75%–100%** (p. 855)."],
        ["Getting around: 3 of 5 answered", false, "60%: below 75% (p. 855)."],
        ["Self-care: 3 of 4 answered", true, "Exactly **75%** (p. 855)."],
        ["Getting along with people: 4 of 5 answered", true, "80% (p. 855)."],
        ["Life activities: 4 of 8 answered", false, "50% (p. 855)."],
        ["Participation in society: 6 of 8 answered", true, "Exactly **75%** (p. 855)."]
      ],
      need: 4,
      met: true,
      metLabel: "So, are at least four domains usable?",
      why: "Four domains are usable. With **10 or more** items missing (more than 25% of 36), the **general** disability scores, simple and average, may not be useful, but a domain that is **75%–100%** complete can still be scored (p. 855). The percentages are the app’s arithmetic. First, though, encourage her to complete the blanks (p. 855)."
    },
    {
      id: "n23-06", tag: "The counts in the chapter",
      "case": "Statements a resident wrote on a review sheet:",
      ask: "Mark the statements that are correct. Are at least five correct?",
      items: [
        ["The adult Level 1 measure has 23 items over 13 domains", true, "p. 843."],
        ["The parent/guardian version has 25 items over 12 domains", true, "p. 844."],
        ["The psychosis severity measure has five items, one per primary symptom", false, "It has **eight**; only the five primary symptoms feed the Chapter 2 specifier (p. 851; Ch 2)."],
        ["The printed WHODAS 2.0 has 36 items in six domains", true, "p. 854."],
        ["Six parent-version items are answered Yes, No or Don’t Know", true, "Four substance items and the two suicide items; the other **19** use 0–4 (p. 846)."],
        ["The adult substance use domain has four items", false, "**Three** in the adult form (alcohol, tobacco, other drugs or misused medicines); the parent form has **four** (pp. 848, 850)."]
      ],
      need: 5,
      met: false,
      metLabel: "So, are at least five correct?",
      why: "Four are correct. The core numbers: **23/13** adult, **25/12** parent, **8** psychosis dimensions, **36/6** WHODAS, and **19 + 6** items in the parent form (pp. 843–854). Per-domain item counts come from the forms themselves (pp. 847–850)."
    },
    {
      id: "n23-07", tag: "Simple, IRT and average",
      "case": "A patient rates every one of the 36 WHODAS items as mild (scored 2 on the 1–5 scale). Calculations on the resident’s worksheet:",
      ask: "Mark the calculations that are correct. Are at least four?",
      items: [
        ["Simple score: 36 × 2 = 72 (maximum 180)", true, "Simple scoring sums the 1–5 item scores (p. 854)."],
        ["Average general disability score: 72 ÷ 36 = 2, mild", true, "Raw total ÷ 36, read on the 1–5 scale (p. 855)."],
        ["IRT step 1: each item recoded to 1, so the recoded raw total is 36 (maximum 144)", true, "Recoding 1–5 to **0–4** turns mild into 1 (p. 854)."],
        ["IRT score: 72 ÷ 180 × 100 = 40", false, "The 0–100 IRT metric comes from WHO’s **computer program**, not a hand ratio (p. 854)."],
        ["Average self-care score: 8 ÷ 4 = 2", true, "Four self-care items, each 2 (p. 855)."]
      ],
      need: 4,
      met: true,
      metLabel: "So, are at least four correct?",
      why: "Four are correct. **Simple**: sum of 1–5, maximum **180**. **IRT**: recode to 0–4 (maximum **144**), sum the six domains, convert by computer to **0–100** (p. 854). **DSM-5-TR averages**: divide by the item count and stay on 1–5 (p. 855)."
    },
    {
      id: "n23-08", tag: "What the Chapter 2 severity rating uses",
      "case": "A resident lists the psychosis dimensions she plans to record as the “specify current severity” rating for a patient with schizophreniform disorder:",
      ask: "Mark the dimensions that belong to the Chapter 2 severity specifier. Are all five present?",
      items: [
        ["Hallucinations", true, "A primary symptom (p. 851; Ch 2)."],
        ["Delusions", true, "A primary symptom (p. 851; Ch 2)."],
        ["Impaired cognition", false, "One of the measure’s **three added** dimensions, not part of the specifier (p. 851)."],
        ["Disorganized speech", true, "A primary symptom (p. 851; Ch 2)."],
        ["Negative symptoms", true, "A primary symptom (p. 851; Ch 2)."],
        ["Depression", false, "An added dimension for co-occurring mood pathology (p. 851)."],
        ["Mania", false, "An added dimension (p. 851)."]
      ],
      need: 5,
      met: false,
      metLabel: "So, are all five present?",
      why: "Four of the five are listed; **abnormal psychomotor behavior** is missing. The specifier rates the **five primary symptoms** 0–4 for the worst of the last 7 days, and the diagnosis can be made without it (Ch 2, p. 109). The full measure has **eight** dimensions, adding cognition, depression and mania (p. 851)."
    }
  ]);
})();
