/* Chapter 21 practice drills.
   dxline:   name the condition and write its code (and seventh character for the T codes). Every code is as printed in
             DSM-5-TR (2022) and unchanged in ICD-10-CM from FY2016 through FY2027 (October 1, 2026; checked
             October 27, 2026). The chapter's conditions are not mental disorders and have no criteria sets (p. 807):
             the drills apply the manual's descriptions and time rules.
   counting: decide which findings count toward one of the chapter's numbers, then whether the number is reached.
   Ids are stable keys for progress. */
(function () {
  var DX = [
    "Antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism",
    "Other medication-induced parkinsonism",
    "Neuroleptic malignant syndrome",
    "Medication-induced acute dystonia",
    "Medication-induced acute akathisia",
    "Tardive dyskinesia",
    "Tardive dystonia",
    "Tardive akathisia",
    "Medication-induced postural tremor",
    "Other medication-induced movement disorder",
    "Antidepressant discontinuation syndrome",
    "Other adverse effect of medication",
    "None of this chapter’s conditions"
  ];
  var G_CODES = ["G21.11", "G21.19", "G21.0", "G24.02", "G24.01", "G24.09", "G25.71", "G25.1", "G25.79"];
  var SEVENTH = ["A (initial encounter)", "D (subsequent encounter)", "S (sequelae)", "None needed"];

  SP.add("ch21", "dxline", [
    {
      id: "w21-01", tag: "Haloperidol, stiff and slow",
      "case": "A 47-year-old man with schizophrenia was switched to oral haloperidol 3 weeks ago. His sister says he now moves “like a robot.” On examination both elbows resist passive movement evenly through the whole arc with a ratchet feel at the wrists, he is slow to rise and turn, his face is masked and his steps are short. There is no tremor. Temperature, pulse and mental state are unchanged from baseline. He had no motor signs before the switch.",
      parts: [
        { label: "Condition", options: DX, answer: 0 },
        { label: "Code", options: G_CODES, answer: 0 }
      ],
      line: "**G21.11** Antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism",
      why: "Bilateral rigidity (lead-pipe with cogwheeling) and bradykinesia that appear **2–4 weeks** after starting a **high-D2-potency** antipsychotic (pp. 807–809). The missing tremor does not count against it: tremor is the **less** common feature and may be absent (p. 808). No fever or mental change, so not NMS (p. 809). The causative agent is a dopamine receptor blocker, so **G21.11**, not G21.19 (p. 807)."
    },
    {
      id: "w21-02", tag: "Lithium, no antipsychotic",
      "case": "A 61-year-old woman with bipolar I disorder has taken lithium alone for 2 months; she has never had an antipsychotic or antiemetic. Over the past month she has become slow, her handwriting has shrunk, her voice is soft, and both forearms show constant resistance to passive movement. A coarse-looking tremor of both hands is present at rest and fades when she reaches for a pen. Her lithium level is in the therapeutic range, she is not ataxic and there are no twitches.",
      parts: [
        { label: "Condition", options: DX, answer: 1 },
        { label: "Code", options: G_CODES, answer: 1 }
      ],
      line: "**G21.19** Other medication-induced parkinsonism",
      why: "**Lithium** is on the manual’s list of non-DRBA causes of parkinsonism (p. 808). The tremor is a **rest** tremor that settles with action, with rigidity, bradykinesia, micrographia and hypophonia: parkinsonism, not the **8–12 Hz** postural tremor that lithium more often causes (pp. 808–809, 817). No dopamine receptor blocker is involved, so the code is **G21.19**; G21.11 is reserved for antipsychotics and other DRBAs (p. 807). Coarsening with twitching or ataxia would instead raise toxicity (p. 817)."
    },
    {
      id: "w21-03", tag: "Metoclopramide, febrile",
      "case": "A 52-year-old man on a medical ward with diabetic gastroparesis and no psychiatric history was started on intravenous metoclopramide 2 days ago. Psychiatry is called because he is “catatonic.” He is stuporous, stiff throughout, soaked in sweat, with oral temperatures of 38.9 °C and 39.3 °C four hours apart. His pulse has climbed from 76 to 120 and creatine kinase is 7 times the upper limit of normal. He had no catatonic signs before admission.",
      parts: [
        { label: "Condition", options: DX, answer: 2 },
        { label: "Code", options: G_CODES, answer: 2 }
      ],
      line: "**G21.0** Neuroleptic malignant syndrome",
      why: "A dopamine antagonist within **72 hours**, oral hyperthermia **above 38.0 °C on two occasions** with profuse sweating, generalized rigidity, altered consciousness, tachycardia **more than 25%** above baseline and CK **at least 4 times** normal (p. 810). **Metoclopramide** is a listed DRBA and is named as implicated in NMS (pp. 807, 811), and NMS can occur in people with **no mental disorder** (p. 811). It is G21.0, not G25.79, because the drug **is** a dopamine receptor blocker (p. 818)."
    },
    {
      id: "w21-04", tag: "Antiemetic, eyes up",
      "case": "A 17-year-old boy was given prochlorperazine in the emergency room for gastroenteritis yesterday evening. About 20 hours later his eyes are locked upward, his head is pulled back and he cannot close his jaw properly. He is frightened and asking for help. Temperature is normal and his limbs move freely.",
      parts: [
        { label: "Condition", options: DX, answer: 3 },
        { label: "Code", options: G_CODES, answer: 3 }
      ],
      line: "**G24.02** Medication-induced acute dystonia",
      why: "Sustained abnormal postures (**oculogyric crisis**, **retrocollis**, jaw involvement) within **24–48 hours** of an antiemetic dopamine blocker (p. 812). Young males are the highest-risk group (p. 812). He is distressed and seeks help, unlike retarded catatonia; there is no fever or generalized rigidity to suggest NMS (p. 813). Acute dystonia is **G24.02**; tardive dystonia is G24.09."
    },
    {
      id: "w21-05", tag: "Sertraline, panic",
      "case": "A 29-year-old woman with panic disorder started sertraline 12 days ago and the dose was doubled 4 days ago. She returns saying her “anxiety is worse”: she cannot sit through a jeepney ride, feels a pull to keep moving her legs and gets upset when asked to keep them still. In the interview she shifts her weight from foot to foot whenever she stands. She says this is not like her panic attacks. Ferritin is normal and she has no parkinsonian signs.",
      parts: [
        { label: "Condition", options: DX, answer: 4 },
        { label: "Code", options: G_CODES, answer: 6 }
      ],
      line: "**G25.71** Medication-induced acute akathisia",
      why: "Subjective restlessness centered on the **legs** plus at least **one** observed movement (rocking from foot to foot), within **4 weeks** of starting and raising a causative drug (p. 813). **SSRIs** are on the list, and SSRI akathisia looks identical to the DRBA form (pp. 813–814). Feeling it as **different from her earlier anxiety** is a clue the manual gives (p. 814). Reading it as worse panic and raising the dose again is the trap (app guidance)."
    },
    {
      id: "w21-06", tag: "Older adult, metoclopramide",
      "case": "A 66-year-old woman has taken oral metoclopramide for gastroparesis for 10 weeks. For the last 5 weeks her daughter has noticed chewing, lip-pursing and tongue movements that are irregular and stop during sleep. There is no rhythmic tremor and no rigidity. Nobody in the family has a movement disorder, her dentures fit well, and the movements were not present before the drug.",
      parts: [
        { label: "Condition", options: DX, answer: 5 },
        { label: "Code", options: G_CODES, answer: 4 }
      ],
      line: "**G24.01** Tardive dyskinesia",
      why: "Choreiform orofacial movements present **at least 4 weeks**, during exposure to a postsynaptic dopamine blocker (**metoclopramide** is named, p. 814). At **60 or older** the exposure needed is only **1 month**, not 3 (p. 815), so 10 weeks is enough. Absent in sleep, not a 3–6 Hz tremor, and no denture, family or prior-onset explanation (pp. 815–816)."
    },
    {
      id: "w21-07", tag: "Depot, late neck twist",
      "case": "A 38-year-old man has received fluphenazine decanoate for 7 years. Over the past year his head has gradually come to turn and tilt to the right in a sustained way, with his trunk leaning the same way. The depot was stopped 5 months ago and the posture has not changed. There was never an acute reaction after a dose change, and there are no choreiform movements.",
      parts: [
        { label: "Condition", options: DX, answer: 6 },
        { label: "Code", options: G_CODES, answer: 5 }
      ],
      line: "**G24.09** Tardive dystonia",
      why: "A **dystonia** (sustained twisting posture) that emerged **late** in years of DRBA treatment and **persists** months after stopping: the defining features of the tardive category (p. 816). Not acute dystonia (hours to days, G24.02) and not tardive dyskinesia (choreoathetoid movements, G24.01). Tardive dystonia has its own code, **G24.09** (p. 816)."
    },
    {
      id: "w21-08", tag: "Restless for years",
      "case": "A 54-year-old woman with schizoaffective disorder has been on antipsychotics for 9 years without restlessness at the start. Over the last 18 months she has developed a constant inner urge to move, rocks when standing and paces the ward. Her antipsychotic was stopped 4 months ago because of this, and the restlessness has not eased. She is euthymic and not psychotic.",
      parts: [
        { label: "Condition", options: DX, answer: 7 },
        { label: "Code", options: G_CODES, answer: 6 }
      ],
      line: "**G25.71** Tardive akathisia",
      why: "Akathisia that appeared **late** in treatment and **persists** after the drug was stopped is tardive, not acute (p. 816); acute akathisia typically starts within **4 weeks** of a start or increase and tends to last as long as the drug continues (pp. 813–814). Both share **G25.71**, so the **written name** carries the difference (pp. 813, 816)."
    },
    {
      id: "w21-09", tag: "Lithium, cup and saucer",
      "case": "A 35-year-old teacher with bipolar I disorder has been on lithium for 6 weeks at a therapeutic level. She is embarrassed that her fingers shake when she holds chalk to the board or drinks coffee from a cup and saucer. The tremor is fine and fast, worse with arms outstretched, absent with her hands resting in her lap. There is no rigidity, slowness, ataxia or twitching, and she had no tremor before lithium.",
      parts: [
        { label: "Condition", options: DX, answer: 8 },
        { label: "Code", options: G_CODES, answer: 7 }
      ],
      line: "**G25.1** Medication-induced postural tremor",
      why: "A **fine** tremor on **holding a posture**, absent at rest, starting after **lithium** (p. 817). It is not parkinsonism: the parkinsonian tremor is **3–6 Hz**, worse at rest and comes with akinesia and rigidity (p. 817). No coarsening, ataxia or twitching to suggest toxicity, and no preexisting tremor (p. 817). Code **G25.1**."
    },
    {
      id: "w21-10", tag: "NMS-like, not a DRBA",
      "case": "A 49-year-old man with Huntington’s disease is taking tetrabenazine for chorea and has never received an antipsychotic or antiemetic. After a dose increase he develops fever on repeated oral readings, generalized rigidity, confusion, sweating and a racing pulse; CK is raised. Infection, heat stroke and serotonergic drugs are excluded.",
      parts: [
        { label: "Condition", options: DX, answer: 9 },
        { label: "Code", options: ["G21.0", "G25.79", "G25.70", "G21.19", "T50.905A"], answer: 1 }
      ],
      line: "**G25.79** Other medication-induced movement disorder",
      why: "The manual’s first example of this residual category is an **NMS-like presentation with a medication that is not** an antipsychotic or other dopamine receptor blocking agent (p. 818). Tetrabenazine is a **dopamine depleter** (listed among the causes of parkinsonism, p. 808), not a receptor blocker. G21.0 is kept for dopamine antagonists (p. 810). **G25.70** (unspecified) exists in ICD-10-CM but the DSM does not use it (ICD-10-CM note, outside the DSM)."
    },
    {
      id: "w21-11", tag: "Paroxetine, day 3",
      "case": "A 44-year-old accountant stopped paroxetine abruptly 3 days ago because she felt well. She comes in for the first time with dizziness, ringing in the ears, brief electric-shock sensations, poor sleep and sudden anxiety. Her mood is bright, she has no suicidal thoughts, and the paroxetine never caused hypomania. She has no wish for more of the drug for its own sake.",
      parts: [
        { label: "Condition", options: DX, answer: 10 },
        { label: "Code", options: ["T43.205", "T43.205A", "T43.205D", "T50.905A", "F32.A"], answer: 1 }
      ],
      line: "**T43.205A** Antidepressant discontinuation syndrome, initial encounter",
      why: "Onset **2–4 days** after the last dose of a **short half-life** agent (paroxetine is one of the two most often implicated), with the SSRI symptoms the manual describes; no mood relapse, no prior hypomania or mixed state, no craving (pp. 818–819). This is the **first** encounter, so the seventh character is **A**; **T43.205** alone is incomplete (p. 818; ICD-10-CM note)."
    },
    {
      id: "w21-12", tag: "Same patient, follow-up",
      "case": "The woman in w21-11 was restarted on paroxetine and given a slow taper plan. She returns 10 days later for a planned review of the same discontinuation symptoms, now much milder.",
      parts: [
        { label: "Condition", options: DX, answer: 10 },
        { label: "Seventh character", options: SEVENTH, answer: 1 }
      ],
      line: "**T43.205D** Antidepressant discontinuation syndrome, subsequent encounter",
      why: "The same condition seen again for ongoing care takes **D**, subsequent encounter (p. 818). **S** is for sequelae, a later consequence rather than continued care of the syndrome. The symptoms easing with a very gradual taper fits the manual’s course (p. 819)."
    },
    {
      id: "w21-13", tag: "Trazodone, ER",
      "case": "A 39-year-old man with major depressive disorder taking trazodone at night comes to the emergency room with a painful erection lasting 5 hours. Urology is called. His psychiatrist, reviewing the visit, wants the side effect recorded because it is now the main focus of care.",
      parts: [
        { label: "Condition", options: DX, answer: 11 },
        { label: "Code", options: ["T43.205A", "T50.905A", "T50.905D", "G25.79", "No code: side effects are not coded"], answer: 1 }
      ],
      line: "**T50.905A** Other adverse effect of medication, initial encounter",
      why: "An optional code for a medication side effect **other than a movement symptom** that becomes a main focus of clinical attention; **priapism** is one of the manual’s three examples, with severe hypotension and arrhythmias (p. 819). First encounter, so **A**. ICD-10-CM asks for the nature of the effect (the priapism) to be coded first (ICD-10-CM note, outside the DSM)."
    },
    {
      id: "w21-14", tag: "Known Parkinson’s, worse on drug",
      "case": "A 72-year-old man with Parkinson’s disease diagnosed 6 years ago (it began with a left-hand rest tremor, with loss of smell and dream-enactment behavior) develops psychosis and is given risperidone. Within 2 weeks his stiffness, slowness and falls are clearly worse. The team asks whether to record medication-induced parkinsonism.",
      parts: [
        { label: "Condition", options: DX, answer: 12 },
        { label: "Code", options: ["G21.11", "G21.19", "G20.C", "G25.79"], answer: 2 }
      ],
      line: "**G20.C** Parkinson’s disease (worsened by risperidone; record the drug effect in the note, not as G21.11)",
      why: "The manual excludes **antipsychotic-exacerbated Parkinson’s disease** from MIP (p. 808) and notes that people with primary parkinsonism also worsen on MIP-causing drugs (p. 809). His unilateral onset, hyposmia and REM sleep behavior disorder point to the disease itself (p. 809). Parkinson’s disease is coded **G20.C** since the APA’s **September 2023** coding update (G20 before; outside the printed DSM, Chapter 17)."
    }
  ]);

  SP.add("ch21", "counting", [
    {
      id: "n21-01", tag: "Fever readings",
      "case": "A man started on haloperidol 2 days ago becomes rigid and confused. His temperature chart for the day:",
      ask: "Mark the readings that count toward the NMS hyperthermia threshold. Are there 2?",
      items: [
        ["38.4 °C, oral", true, "Above 38.0 °C and measured orally (p. 810)."],
        ["38.0 °C, oral", false, "The threshold is **above** 38.0 °C (100.4 °F); exactly 38.0 does not exceed it."],
        ["38.7 °C, axillary", false, "The manual specifies readings **measured orally** (p. 810)."],
        ["38.3 °C, oral", true, "Above 38.0 °C, oral: the second qualifying occasion."],
        ["37.8 °C, oral", false, "Below the threshold."]
      ],
      need: 2,
      met: true,
      why: "Hyperthermia **above 100.4 °F / 38.0 °C** on **at least two occasions**, measured **orally**, with profuse sweating is the feature that sets NMS apart (p. 810). Two oral readings qualify. The thresholds describe the typical picture; no single number is a criterion (p. 810)."
    },
    {
      id: "n21-02", tag: "NMS thresholds",
      "case": "A woman given intramuscular olanzapine and haloperidol 50 hours ago is now stuporous and rigid. Baseline pulse 80, respiratory rate 16, blood pressure 120/80; the upper limit of normal for CK is 200 U/L.",
      ask: "Mark the findings that reach the manual’s stated thresholds. Are there 4?",
      items: [
        ["Dopamine antagonist given 50 hours before symptoms", true, "Within the **72 hours** before onset (p. 810)."],
        ["CK 900 U/L", true, "4.5 times the upper limit: **at least 4×** (p. 810)."],
        ["Pulse 104", true, "30% above baseline: more than **25%** (p. 810)."],
        ["Respiratory rate 26", true, "About 62% above baseline: more than **50%** (p. 810)."],
        ["Systolic pressure 140 for most of the day", false, "16.7% and 20 mmHg above baseline: short of **≥25%** above baseline and of a **≥25 mmHg** systolic swing within 24 hours (p. 810)."],
        ["CK 700 U/L on the previous day", false, "3.5 times the upper limit: below 4×."]
      ],
      need: 4,
      met: true,
      why: "Four findings pass: exposure within **72 h**, CK **≥4×** normal, pulse **>25%** and respiration **>50%** above baseline (p. 810). Work the percentages from the patient’s **own baseline**, not from population norms (app guidance)."
    },
    {
      id: "n21-03", tag: "Dystonia window",
      "case": "Five patients developed sustained abnormal postures after starting a dopamine receptor blocking agent. Time from the first dose to onset:",
      ask: "Mark the onsets within the window that covers about 90% of acute dystonic reactions. Are there 3?",
      items: [
        ["6 hours", true, "Inside 24–48 hours, where at least half begin (p. 812)."],
        ["40 hours", true, "Still inside 24–48 hours."],
        ["4 days", true, "Inside **5 days**, the window for about 90% (p. 812)."],
        ["9 days", false, "Beyond 5 days: possible but outside the 90% window; rethink the cause."],
        ["3 months, gradually worsening", false, "Late and insidious: think **tardive** dystonia (pp. 813, 816)."]
      ],
      need: 3,
      met: true,
      why: "**At least 50%** begin within **24–48 hours** and about **90%** within **5 days** of starting or rapidly raising a DRBA, or of cutting an anticholinergic (p. 812)."
    },
    {
      id: "n21-04", tag: "Akathisia movements",
      "case": "A man started risperidone 9 days ago and reports an inner restlessness in his legs that he cannot stand. During a 20-minute interview:",
      ask: "Mark the findings that count as an observed akathisia movement. Is the required number, 1, reached?",
      items: [
        ["He swings his legs constantly while seated", true, "Fidgety leg movements or swinging while seated (p. 813)."],
        ["He says his legs feel as if they must move", false, "A **subjective** complaint, not an observed movement."],
        ["He says he feels anxious and on edge", false, "Subjective dysphoria and anxiety; not observed."],
        ["A slow, rhythmic tremor of one hand at rest", false, "A parkinsonian sign (3–6 Hz), not akathisia (p. 808)."]
      ],
      need: 1,
      met: true,
      why: "The manual pairs **subjective restlessness** with **at least one** observed movement: fidgeting or leg swinging seated, rocking or “walking on the spot” standing, pacing, or being unable to sit or stand still for several minutes (p. 813). Onset within **4 weeks** of the start fits too (p. 813)."
    },
    {
      id: "n21-05", tag: "TD time rules",
      "case": "A 45-year-old man took oral haloperidol for 7 weeks, then stopped. Two weeks later irregular chewing and tongue movements began, and they have now lasted 5 weeks.",
      ask: "Mark the tardive dyskinesia time rules this history satisfies. Are all 4 satisfied?",
      items: [
        ["Exposure to the drug for the required minimum", false, "At 45 he needs **at least 3 months**; 7 weeks falls short. The **1-month** rule applies only at **60 or older** (p. 815)."],
        ["Movements present for at least 4 weeks", true, "Five weeks (p. 814)."],
        ["Onset during exposure or within 4 weeks of stopping an oral agent", true, "Two weeks after stopping an oral drug (p. 815)."],
        ["Movements of TD type rather than a 3–6 Hz tremor", true, "Irregular choreiform orofacial movements (pp. 814–815)."]
      ],
      need: 4,
      met: false,
      why: "Only **3 of 4**: the exposure rule fails, so tardive dyskinesia is not diagnosed (p. 815). Look for another cause of dyskinesia (p. 816); the app would describe it rather than force the label (app guidance)."
    },
    {
      id: "n21-06", tag: "After stopping",
      "case": "Five patients each had long enough exposure to a dopamine receptor blocking agent, stopped it, and later developed dyskinesia lasting more than 4 weeks.",
      ask: "Mark those whose dyskinesia began inside the window that still allows tardive dyskinesia. Are there 3?",
      items: [
        ["Oral risperidone; dyskinesia began 3 weeks after stopping", true, "Within **4 weeks** of an oral agent (p. 815)."],
        ["Oral haloperidol; began 6 weeks after stopping", false, "Outside the 4-week window for an oral drug."],
        ["Paliperidone palmitate injection; began 7 weeks after the last dose", true, "Within **8 weeks** of a long-acting injectable (p. 815)."],
        ["Fluphenazine decanoate; began 10 weeks after the last dose", false, "Outside the 8-week depot window."],
        ["Oral olanzapine; began 2 weeks after stopping", true, "Within 4 weeks."]
      ],
      need: 3,
      met: true,
      why: "TD can be diagnosed when the movements start during exposure or within **4 weeks** of stopping an **oral** agent, or **8 weeks** of stopping a **long-acting injectable** (p. 815). Dyskinesia that appears on withdrawal may remit; if it lasts **4 weeks** or more, TD may be warranted (p. 816)."
    },
    {
      id: "n21-07", tag: "Tremor frequencies",
      "case": "Four tremors recorded on a psychiatric ward:",
      ask: "Mark the tremors whose frequency and setting fit medication-induced postural tremor. Are there 2?",
      items: [
        ["4 Hz, hand at rest, settles when reaching, on haloperidol", false, "A **3–6 Hz** rest tremor: parkinsonian (pp. 808, 817)."],
        ["10 Hz, hands outstretched, on lithium", true, "Within **8–12 Hz** and seen on holding a posture (p. 817)."],
        ["9 Hz, tongue and mouth held open, on valproate", true, "Within 8–12 Hz, sustained posture; valproic acid is listed (p. 817)."],
        ["5 Hz, lips moving rhythmically at rest, on fluphenazine", false, "Perioral 3–6 Hz tremor: “rabbit syndrome,” a parkinsonian tremor (p. 808)."]
      ],
      need: 2,
      met: true,
      why: "Postural tremor: **8–12 Hz**, absent at rest, worse holding a posture or on action (p. 817). Parkinsonian tremor: **3–6 Hz**, worst at rest, suppressed by action (pp. 808, 817). Other nonparkinsonian tremors run about **10 Hz** (p. 809)."
    },
    {
      id: "n21-08", tag: "Discontinuation fit",
      "case": "A 37-year-old man stopped venlafaxine abruptly when he lost his job and his supply. Features noted at review:",
      ask: "Mark the features that support antidepressant discontinuation syndrome. Are there 4?",
      items: [
        ["Symptoms began on day 3 after the last dose", true, "Inside the usual **2–4 days** (p. 818)."],
        ["Dizziness and electric-shock sensations", true, "Described with serotonergic agents (p. 818)."],
        ["Strong craving for the drug and buying extra supplies", false, "Craving and drug-seeking point **away** from it (pp. 818–819)."],
        ["Symptoms faded by day 12", true, "Usually lasts **no more than 2 weeks** (p. 819)."],
        ["Venlafaxine never caused hypomania or a mixed state", true, "Required, so that mood instability from the drug is not the explanation (p. 818)."],
        ["Mood has been low for 6 weeks since stopping", false, "Points to **relapse** rather than discontinuation (p. 819)."]
      ],
      need: 4,
      met: true,
      why: "Four features fit: onset at **2–4 days**, typical symptoms, a course of **≤2 weeks** (seldom beyond 3), and no prior hypomania or mixed state (pp. 818–819). Craving and a lasting low mood argue for something else (p. 819)."
    },
    {
      id: "n21-09", tag: "The chapter’s percentages",
      "case": "Figures written on a resident’s review card.",
      ask: "Mark the figures that match the manual. Are there 5?",
      items: [
        ["NMS incidence in database studies: 0.01%–0.02% of antipsychotic-treated people", true, "p. 810 (0.11% in one Hong Kong population study)."],
        ["NMS fatality when unrecognized: 10%–20%", true, "p. 811."],
        ["Akathisia prevalence on antipsychotics or other DRBAs: 20%–75%", true, "p. 814; the range reflects inconsistent definitions."],
        ["TD prevalence with long-term antipsychotic treatment: 20%–30%", true, "p. 815."],
        ["Parkinsonian signs at some point in outpatients on long-term typical antipsychotics: at least 50%", true, "p. 808."],
        ["TD incidence in younger people: 25%–30% per year", false, "Younger people: **3%–5% per year**; 25%–30% is the incidence in middle-aged and elderly people after about 1 year (p. 815)."],
        ["Prior NMS episode in index cases: about 50%", false, "**15%–20%** (p. 811)."]
      ],
      need: 5,
      met: true,
      why: "Five match (pp. 808, 810, 811, 814, 815). The commonest slip is swapping the **younger (3%–5% a year)** and **older (25%–30%)** TD incidence figures."
    },
    {
      id: "n21-10", tag: "Seventh characters",
      "case": "Antidepressant discontinuation syndrome (T43.205-) and other adverse effect of medication (T50.905-).",
      ask: "Mark the seventh characters the manual lists for these codes. Are there 3?",
      items: [
        ["A, initial encounter", true, "pp. 818, 819."],
        ["D, subsequent encounter", true, "pp. 818, 819."],
        ["S, sequelae", true, "pp. 818, 819."],
        ["B, subsequent encounter for a complication", false, "Not listed by the manual."],
        ["None: T43.205 is a complete code", false, "A T code here is incomplete without its seventh character (ICD-10-CM note)."]
      ],
      need: 3,
      met: true,
      why: "**Three**: A, D and S, for both T43.205 and T50.905 (pp. 818–819). The G codes for the movement disorders take **no** seventh character."
    }
  ]);
})();
