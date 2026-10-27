/* Chapter 21 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [element, plain-language question, optional tip]   — "How to ask it" on each library page
   tx:  orientation to assessment and management, labeled as outside the DSM, with Stahl Study Companion links
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var ASOF = "October 2026";
  var TIMELINE = "Build a **medication timeline** first: every start, dose increase, depot injection, anticholinergic reduction and discontinuation, with dates (the manual anchors every condition in this chapter to such a change, pp. 807–819).";
  var ADHERE = "Ask about **adherence and distress**: parkinsonism, acute dystonia, akathisia and lithium tremor are each tied to nonadherence (pp. 807, 812, 813, 817) and akathisia to suicide attempts (p. 813).";
  var LOCAL = "In the Philippines, high-potency first-generation agents remain common in public services and VMAT2 inhibitors are not generally available, so prevention (lowest effective dose, lower-potency choices, early recognition) is the main strategy; benztropine, diphenhydramine and propranolol are the usual tools (app note; verify local formularies).";
  function care(first, points, stahl) {
    return { asOf: ASOF, first: "Outside the DSM: " + first, points: [TIMELINE].concat(points).concat([ADHERE, LOCAL]), stahl: stahl || [] };
  }

  var MIP_CARE = care("confirm the temporal link and exclude Parkinson’s disease (unilateral onset, hyposmia, REM sleep behavior disorder, autonomic symptoms, p. 809); then lower the dose, switch to a lower-potency antipsychotic, or add an anticholinergic or amantadine (APA schizophrenia guideline, 2020).", [
    "Examine tone through the full range of motion (lead-pipe is constant; psychiatric rigidity is inconsistent, p. 810) and check for cogwheeling at the wrists (p. 808).",
    "Do not add an anticholinergic if tardive dyskinesia is present: it worsens TD (p. 816).",
    "In older patients, treat parkinsonism as a falls and aspiration risk (p. 809)."
  ], [["Motor side effects of D2 blockade", "c/ch05/guide/s5-motor"], ["Benztropine", "drugs/benztropine"], ["Amantadine", "drugs/amantadine"], ["Haloperidol", "drugs/haloperidol"]]);

  var NMS_CARE = care("treat as a medical emergency: stop the dopamine blocker, admit for intensive supportive care (cooling, fluids, monitoring of CK, renal function, electrolytes, for aspiration and emboli), and consider dantrolene or bromocriptine on case-series evidence and ECT for refractory cases or when malignant catatonia cannot be excluded (reviews, e.g., Ann Pharmacother 2016).", [
    "Suspect it early: mental status change and neurological signs usually precede the fever (p. 811); check temperature twice orally and CK (p. 810).",
    "Exclude serotonin syndrome (serotonergic drug, clonus, hyperreflexia), malignant hyperthermia (anesthesia), heat stroke, infection and anticholinergic toxicity (p. 811; app guidance).",
    "Rechallenge, if needed, only after a drug-free interval, with a different lower-potency agent and slow titration; recurrence is more likely when antipsychotics are restarted soon after the episode (p. 811)."
  ], [["Motor side effects of D2 blockade", "c/ch05/guide/s5-motor"], ["Dantrolene", "drugs/dantrolene"]]);

  var DYST_CARE = care("secure the airway if the larynx is involved (p. 812), give a parenteral anticholinergic (benztropine) or diphenhydramine, then reduce the dose or switch and consider prophylaxis in high-risk patients (APA 2020).", [
    "Warn young patients, especially men under 40 on high-potency agents, before the first dose (p. 812).",
    "Rapid relief after an anticholinergic supports the diagnosis and argues against catatonia (p. 813)."
  ], [["Motor side effects of D2 blockade", "c/ch05/guide/s5-motor"], ["Benztropine", "drugs/benztropine"], ["Diphenhydramine", "drugs/diphenhydramine"]]);

  var AKA_CARE = care("reduce the dose or switch antipsychotic; a β-blocker such as propranolol or a benzodiazepine helps; anticholinergics are of little use (APA 2020).", [
    "Ask whether the restlessness feels different from any anxiety the person has known (p. 814) and whether it worsened after the last dose increase (p. 814).",
    "Screen for suicidal thoughts and aggression (p. 813); do not treat akathisia by raising the antipsychotic dose (p. 814).",
    "SSRI-induced akathisia behaves the same way (p. 814)."
  ], [["Motor side effects of D2 blockade", "c/ch05/guide/s5-motor"], ["SSRIs", "c/ch07/guide/s7-ssri"]]);

  var TD_CARE = care("rate the movements (the AIMS, outside the DSM) and, for moderate-to-severe or disabling TD, treat with a reversible VMAT2 inhibitor (valbenazine or deutetrabenazine; recommended by the APA 2020 guideline, which says treatment may also be considered for mild TD); consider switching to a lower-risk antipsychotic; stop anticholinergics.", [
    "Do not rely on a dose increase: it only suppresses TD temporarily (p. 815).",
    "Remember the trap: anticholinergics worsen TD, and VMAT2 inhibitors worsen parkinsonism (p. 816).",
    "Where VMAT2 inhibitors are unavailable, prevention and the lowest effective dose are the realistic approach (app note).",
    "VMAT2 inhibitors were approved for TD in 2017; once-daily deutetrabenazine (2023) and valbenazine sprinkle capsules (2024) followed; no new class identified (checked October 2026)."
  ], [["Tardive dyskinesia: how the brain learns it", "c/ch05/guide/s5-td"], ["VMAT2 inhibitors", "c/ch05/guide/s5-vmat2"], ["Valbenazine", "drugs/valbenazine"], ["Deutetrabenazine", "drugs/deutetrabenazine"], ["Tetrabenazine", "drugs/tetrabenazine"]]);

  var TARD_CARE = care("the same principles as tardive dyskinesia: review the need for the dopamine blocker, avoid anticholinergics for tardive dyskinesia, and refer for movement-disorder assessment when dystonia or akathisia persists after the drug is stopped (app guidance).", [
    "Tardive dystonia may surface when the dose is lowered (p. 813); tardive akathisia shares its code with the acute form (p. 816)."
  ], [["Tardive dyskinesia: how the brain learns it", "c/ch05/guide/s5-td"]]);

  var TREM_CARE = care("check the serum level, reduce or split the dose, cut caffeine, and add a β-blocker if the tremor is disabling (app guidance from the manual’s risk factors, p. 817).", [
    "A coarse tremor with twitching, fasciculations or ataxia means check for lithium toxicity (p. 817).",
    "Exclude a preexisting tremor and medication-induced parkinsonism (p. 817)."
  ], [["Lithium", "c/ch07/guide/s7-lithium"], ["Lithium (drug page)", "drugs/lithium"], ["Valproate", "drugs/valproate"]]);

  var OTHER_CARE = care("manage the underlying syndrome medically (NMS-like pictures need the same supportive care as NMS) and document the causative drug (app guidance).", [
    "An NMS-like syndrome after abrupt withdrawal of a dopamine agonist is the manual’s parkinsonian hyperthermia syndrome (p. 811)."
  ], [["Motor side effects of D2 blockade", "c/ch05/guide/s5-motor"]]);

  var DISC_CARE = care("restart the antidepressant and taper slowly, or switch to a long half-life agent such as fluoxetine before tapering; warn patients in advance, especially on paroxetine or venlafaxine (p. 818; Henssler 2024; Kalfas 2025).", [
    "Separate it from relapse: discontinuation symptoms start within days and fade within weeks, with sensory and vestibular symptoms; relapse returns over weeks with the original syndrome (p. 819; app reading).",
    "Ask about a stimulant augmenter stopped at the same time (p. 818) and about any history of hypomania (p. 818).",
    "The 2024 Lancet Psychiatry meta-analysis estimated about 1 in 6 people have at least one symptom and about 3% severe symptoms; the 2025 JAMA Psychiatry meta-analysis found about one extra symptom versus placebo, dizziness the commonest, highest with venlafaxine (outside the DSM)."
  ], [["SSRIs", "c/ch07/guide/s7-ssri"], ["SNRIs", "c/ch07/guide/s7-snri"], ["Tricyclics", "c/ch07/guide/s7-tca"], ["Paroxetine", "drugs/paroxetine"], ["Venlafaxine", "drugs/venlafaxine"], ["Fluoxetine", "drugs/fluoxetine"]]);

  var ADV_CARE = care("treat the adverse effect on its merits (priapism is a urological emergency; arrhythmias and severe hypotension need medical care) and review the causative drug (app guidance).", [
    "The code is optional and is for non-movement side effects that become the focus of the visit (p. 819)."
  ], [["Antipsychotic receptor profiles", "c/ch05/guide/s5-binding"]]);

  var ASK_MOVE = [
    ["Timeline", "“Which medicines were started, increased, injected or stopped in the past weeks, and on what dates?”", "Every condition here is tied to a medication change (pp. 807–819)."],
    ["What it looks like", "“Show me, or describe, exactly what your body does: stiffness, slowness, shaking, twisting, restlessness, or movements you cannot stop.”", "Type and timing sort the chapter (app guidance)."],
    ["Distress and function", "“How much does it bother you? Has it made you skip or stop a medicine?”", "Nonadherence is the common consequence (pp. 807, 812, 813)."],
    ["Red flags", "“Any fever, confusion, sweating, racing heart, trouble breathing or swallowing?”", "NMS and laryngeal dystonia are emergencies (pp. 810, 812)."]
  ];

  SP.dxExtra = (SP.dxExtra || []).concat([
    { id: "medication-induced-parkinsonism", ask: ASK_MOVE.concat([
      ["Tremor", "“Does the shaking happen when your hands are resting, and stop when you reach for something?”", "Rest tremor, 3–6 Hz, suppressed by action (p. 808)."],
      ["Parkinson’s pointers", "“Did it start on one side? Any loss of smell, acting out dreams, constipation or dizziness on standing?”", "Point toward Parkinson’s disease (p. 809)."],
      ["Mood", "“Have you felt slowed down and hopeless, or waking early?”", "Depression can mimic akinesia (p. 810)."]
    ]), tx: MIP_CARE },
    { id: "nms", ask: ASK_MOVE.concat([
      ["Exposure", "“Which dopamine-blocking medicine was given in the past 3 days, by which route, at what dose?”", "Exposure within 72 hours; parenteral route and rapid titration raise risk (pp. 810–811)."],
      ["Early signs", "To staff or family: “When did the confusion or stiffness begin, and did the fever come after?”", "Mental change and neurological signs usually come first (p. 811)."],
      ["Risk state", "“Had the person been agitated, exhausted or dehydrated? Any previous episode?”", "Listed risk factors (p. 811)."]
    ]), tx: NMS_CARE },
    { id: "medication-induced-acute-dystonia", ask: ASK_MOVE.concat([
      ["Onset", "“How many hours after the dose did the twisting or eye-rolling start?”", "≥50% within 24–48 hours, ~90% within 5 days (p. 812)."],
      ["Airway", "“Any trouble breathing, a tight throat, a changed voice?”", "Laryngeal dystonia is life-threatening (p. 812)."],
      ["Experience", "“Were you warned this could happen? How did it feel?”", "Fear and later nonadherence (p. 812); distress and help-seeking separate it from catatonia (p. 813)."]
    ]), tx: DYST_CARE },
    { id: "medication-induced-acute-akathisia", ask: ASK_MOVE.concat([
      ["Inner restlessness", "“Do you feel you must keep moving, especially your legs? What happens if you try to sit still?”", "Subjective component (p. 813)."],
      ["Observed", "Observe seated and standing: fidgeting, leg swinging, rocking, pacing.", "At least one observed movement (p. 813)."],
      ["Different from anxiety?", "“Is this like any nervousness you have felt before, or something new?”", "Patients may recognize it as different (p. 814)."],
      ["Dose", "“Did it get worse after the last increase?”", "A dose increase worsens akathisia (p. 814)."],
      ["Safety", "“Has it made you feel like harming yourself or lashing out?”", "Linked to suicide attempts and aggression (p. 813)."]
    ]), tx: AKA_CARE },
    { id: "tardive-dyskinesia", ask: ASK_MOVE.concat([
      ["Exposure", "“How many months or years have you taken the medicine? When did the last dose change happen?”", "≥3 months (1 month at ≥60); onset on the drug or within 4 weeks (oral) or 8 weeks (depot) of stopping (p. 815)."],
      ["Duration", "“How long have the movements been present?”", "At least 4 weeks (p. 814)."],
      ["Awareness", "To family: “Have you noticed chewing, lip or tongue movements? Do they stop in sleep?”", "Early TD escapes the patient; absent in sleep (p. 815)."],
      ["Anticholinergics", "“Are you taking benztropine or a similar tablet?”", "Anticholinergics worsen TD (p. 815)."]
    ]), tx: TD_CARE },
    { id: "tardive-dystonia", ask: ASK_MOVE, tx: TARD_CARE },
    { id: "tardive-akathisia", ask: ASK_MOVE, tx: TARD_CARE },
    { id: "medication-induced-postural-tremor", ask: ASK_MOVE.concat([
      ["Posture", "“Does your hand shake when you hold it out or hold a cup, rather than at rest?”", "Postural, 8–12 Hz (p. 817)."],
      ["Lithium", "“What was your last lithium level? Any coffee, missed meals, alcohol?”", "Risk and exacerbating factors (p. 817)."],
      ["Toxicity", "“Has the shaking become coarser, with twitching or unsteadiness?”", "Approaching toxic levels (p. 817)."]
    ]), tx: TREM_CARE },
    { id: "other-medication-induced-movement", ask: ASK_MOVE, tx: OTHER_CARE },
    { id: "antidepressant-discontinuation", ask: [
      ["Timing", "“When did you take the last dose, and when did the symptoms start?”", "2–4 days after the last dose (p. 818)."],
      ["Symptoms", "“Dizziness, electric-shock feelings, ringing in the ears, poor sleep, sudden anxiety, stomach cramps?”", "SSRI and TCA pictures (p. 818)."],
      ["The drug", "“Which antidepressant, and was it stopped suddenly? Any missed doses lately?”", "Short half-life agents; intermittent nonadherence (p. 818)."],
      ["Mood history", "“Have you ever had a period of unusually high energy or mood, including on the antidepressant?”", "Prior hypomania or a mixed state excludes the syndrome (p. 818)."],
      ["Other drugs", "“Were you also taking a stimulant that was stopped?”", "Stimulant withdrawal instead (p. 818)."],
      ["Relapse", "“Is this the old depression or panic coming back, or something different?”", "Do not confuse with relapse (p. 819)."]
    ], tx: DISC_CARE },
    { id: "other-adverse-effect-medication", ask: [
      ["The effect", "“What exactly happened, and when, relative to the medicine?”", "Severe hypotension, arrhythmia, priapism are the manual’s examples (p. 819)."],
      ["Focus", "“Is this the main reason for today’s visit?”", "The code is for side effects that become a main focus of attention (p. 819)."]
    ], tx: ADV_CARE }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "abnormal-movements", title: "Abnormal movements, stiffness or restlessness on a medication",
      intro: "Rule out the emergency first: **fever with rigidity, confusion and autonomic instability** after a dopamine blocker is neuroleptic malignant syndrome until proven otherwise (p. 810). Then sort by **type** (posture, restlessness, slowness, dyskinesia, tremor) and **timing** relative to the medication change: hours to days for dystonia, up to 4 weeks for akathisia, 2–4 weeks and usually by 3 months for parkinsonism, months to years for tardive syndromes (pp. 808–816). Remember that antiemetics such as metoclopramide are dopamine blockers too (p. 807). The [[helper:movement|movement-disorder helper]] follows this order.",
      ask: ["Which medicines were started, increased, injected, reduced or stopped recently, and when?", "Show me the movement: stiffness, slowness, shaking, twisting, an urge to move, or movements you cannot stop?", "Any fever, sweating, confusion, racing heart, trouble breathing or swallowing?", "Does the shaking happen at rest or when you hold something?", "How long have the movements lasted, and how long have you taken the medicine?", "Has this made you skip or stop a medicine? Any thoughts of harming yourself?"],
      mustNotMiss: ["**Neuroleptic malignant syndrome** (p. 810) and **laryngeal dystonia** (p. 812): both can kill.", "**Akathisia-related suicidality and aggression** (p. 813).", "**Parkinson’s disease** or another primary neurological cause (p. 809) and the other causes of dyskinesia (p. 816).", "**Lithium toxicity** behind a coarsening tremor (p. 817).", "The treatment trap: **anticholinergics worsen TD, VMAT2 inhibitors worsen parkinsonism** (p. 816)."],
      helpers: ["movement", "catatonia"],
      items: [
        { ch: "ch21", dx: "nms", when: "Fever on two oral readings, generalized rigidity, mental change and autonomic instability within 72 hours of a dopamine blocker; CK often ≥4× normal." },
        { ch: "ch21", dx: "medication-induced-acute-dystonia", when: "Sustained postures (eyes, jaw, neck, trunk, throat) within hours to 5 days of a start, increase or anticholinergic reduction." },
        { ch: "ch21", dx: "medication-induced-acute-akathisia", when: "Inner restlessness with observed fidgeting, rocking or pacing within 4 weeks; worse with higher doses." },
        { ch: "ch21", dx: "medication-induced-parkinsonism", when: "Rigidity, bradykinesia, 3–6 Hz rest tremor 2–4 weeks (by 3 months) after a dopamine blocker (G21.11) or another drug (G21.19)." },
        { ch: "ch21", dx: "tardive-dyskinesia", when: "Choreoathetoid or stereotyped movements for ≥4 weeks after ≥3 months (1 month at ≥60) of a dopamine blocker, or within 4–8 weeks of stopping it." },
        { ch: "ch21", dx: "tardive-dystonia", when: "Late, persistent dystonia, sometimes unmasked by a dose reduction." },
        { ch: "ch21", dx: "tardive-akathisia", when: "Late, persistent akathisia despite stopping or reducing the drug." },
        { ch: "ch21", dx: "medication-induced-postural-tremor", when: "Fine 8–12 Hz tremor holding a posture on lithium, valproate, stimulants, antidepressants or caffeine." },
        { ch: "ch21", dx: "other-medication-induced-movement", when: "NMS-like picture with a drug that is not a dopamine blocker, or another tardive condition." },
        { ch: "ch02", dx: "catatonia-associated", when: "Mutism, posturing or stupor that preceded the drug, with no response to dose reduction or anticholinergics, and no distress expressed." },
        { ch: "ch17", dx: "ncd-parkinsons", when: "Unilateral onset, hyposmia, REM sleep behavior disorder, autonomic symptoms: Parkinson’s disease rather than a drug effect." },
        { ch: "ch12", dx: "rls", when: "Evening and night urge to move the legs relieved by walking, with no new medication." },
        { ch: "ch17", dx: "delirium", when: "Fluctuating attention and awareness: consider delirium and, if rigid and febrile, NMS." }
      ]
    },
    {
      id: "leg-restlessness",
      items: [
        { ch: "ch21", dx: "medication-induced-acute-akathisia", when: "Restlessness with observed fidgeting or pacing within 4 weeks of starting or raising an antipsychotic, antidepressant, dopamine agonist or calcium channel blocker; worse with higher doses, not confined to the evening (pp. 813–814)." },
        { ch: "ch21", dx: "tardive-akathisia", when: "Akathisia that emerged late in treatment and persists after the drug is stopped or reduced (p. 816)." }
      ]
    },
    {
      id: "catatonic",
      items: [
        { ch: "ch21", dx: "nms", when: "Rigidity and stupor with fever on two oral readings, sweating, autonomic instability and raised CK within 72 hours of a dopamine blocker (p. 810); malignant catatonia may be indistinguishable (p. 811)." },
        { ch: "ch21", dx: "medication-induced-parkinsonism", when: "Slowness and constant lead-pipe rigidity weeks after an antipsychotic; psychiatric rigidity is inconsistent through the range of motion (p. 810)." },
        { ch: "ch21", dx: "medication-induced-acute-dystonia", when: "A fixed posture within days of a dopamine blocker in a distressed person who seeks help, relieved by an anticholinergic (p. 813)." }
      ]
    },
    {
      id: "confusion",
      items: [
        { ch: "ch21", dx: "nms", when: "Delirium or stupor with generalized rigidity, fever and autonomic instability after a dopamine receptor blocking agent, including antiemetics; mental change often comes first (pp. 810–811)." }
      ]
    },
    {
      id: "anxious",
      items: [
        { ch: "ch21", dx: "medication-induced-acute-akathisia", when: "“Anxiety” that is really an urge to move the legs, with observed fidgeting or pacing, starting within 4 weeks of a new antipsychotic or antidepressant and worse after a dose increase (pp. 813–814)." },
        { ch: "ch21", dx: "antidepressant-discontinuation", when: "Acute anxiety with dizziness, electric-shock sensations and insomnia 2–4 days after stopping an antidepressant, especially paroxetine or venlafaxine (p. 818)." }
      ]
    },
    {
      id: "after-substance",
      items: [
        { ch: "ch21", dx: "antidepressant-discontinuation", when: "Symptoms 2–4 days after stopping or sharply reducing an antidepressant, fading within 2 weeks, with no craving or drug-seeking (pp. 818–819)." },
        { ch: "ch21", dx: "medication-induced-acute-akathisia", when: "Dysphoria and irritability with an urge to move after a new antipsychotic or antidepressant (p. 813)." }
      ]
    },
    {
      id: "neuro-symptoms",
      items: [
        { ch: "ch21", dx: "medication-induced-acute-dystonia", when: "Twisting postures, eye deviation or throat tightness within days of a dopamine blocker, including an antiemetic (p. 812)." },
        { ch: "ch21", dx: "medication-induced-postural-tremor", when: "A fine postural tremor (may worsen with action) on lithium, valproate or another listed drug, absent at rest (p. 817)." }
      ]
    }
  ]);
})();
