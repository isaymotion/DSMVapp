/* Chapter 21 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   The conditions in this chapter are not mental disorders and have no criteria sets (p. 807): items test the
   manual's descriptions, time rules and differentials, never "Criterion A". Every stem states the drug, dose changes
   and timing; two oral temperatures and the CK where NMS is an option; attention and orientation where delirium is an
   option; the movement type and frequency; exposure length and age for tardive dyskinesia; whether a stimulant
   augmenter was involved; and any history of hypomania for discontinuation cases.
   One item is clinical management outside the DSM and labeled so: the v21-07 `then` (first steps in suspected NMS).
   ICD-10-CM notes and discussion prompts that go beyond the manual are tagged "(outside the DSM)" or "(app note)".
   Disorders from other chapters (restless legs syndrome, stimulant withdrawal, catatonia) are named in plain text. */
SP.add("ch21", "vignettes", [
  {
    "id": "v21-01",
    "tag": "Parkinsonism: drug or disease?",
    "stem": "A 67-year-old retired midwife from Orion has major depressive disorder with psychotic features. She has taken sertraline 100 mg daily, unchanged, for 2 years. Risperidone 2 mg at night was added 3 weeks ago for nihilistic delusions. Over the past 10 days her husband has noticed that she walks slowly with small steps, no longer swings either arm and has a fixed, staring face. On examination both wrists show constant resistance through the whole range of passive movement, with cogwheeling, and there is a slight 4-per-second tremor of both hands at rest that stops when she reaches for a glass; the right side is a little worse than the left. She has never had a tremor or slowness before. Her sense of smell is normal, her husband has never seen her act out dreams, and she has no constipation, urinary urgency or dizziness on standing. There are no focal neurological signs. Oral temperature is 36.8 °C and 36.7 °C on two readings, and CK is normal. She is alert, attends well and is fully oriented. Her mood and delusions have begun to improve.",
    "q": "What is the most likely diagnosis for the motor picture?",
    "choices": [
      "Parkinson’s disease, newly presenting",
      "G21.0 neuroleptic malignant syndrome, early phase",
      "G21.11 antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism",
      "G21.19 other medication-induced parkinsonism, due to sertraline",
      "Psychomotor retardation of her major depressive episode"
    ],
    "answer": 2,
    "why": "Tremor, rigidity and slowness appeared **on both sides over days to weeks**, about **3 weeks after a D2-blocking antipsychotic** was started, which the manual calls highly suggestive of MIP (p. 808); onset 2–4 weeks after a DRBA is typical (p. 808). The features that point to **Parkinson’s disease** (hyposmia, REM sleep behavior disorder, autonomic symptoms) are absent (p. 809). Slight asymmetry **does not exclude** MIP (p. 808). The cause is an antipsychotic, so the code is **G21.11**.",
    "whyNot": [
      "Parkinson’s disease usually begins on one side and progresses asymmetrically, and is suggested by hyposmia, dream enactment and autonomic symptoms, all absent here (pp. 808–809).",
      "NMS requires hyperthermia on at least two oral readings, with raised CK; both are normal (p. 810).",
      "Correct.",
      "SSRIs can cause parkinsonism (p. 808), but sertraline has been unchanged for 2 years; the onset follows the risperidone, so the temporal link points to the antipsychotic (p. 807).",
      "Her depression is improving, and depressive slowing does not produce constant rigidity, cogwheeling and a rest tremor (p. 810)."
    ],
    "discuss": [
      "Which three questions about smell, sleep and autonomic function would you add to every new parkinsonism history, and why?",
      "If the signs persisted for months after risperidone was stopped, what would you reconsider (app reading of p. 809)?"
    ]
  },
  {
    "id": "v21-02",
    "tag": "Parkinsonism without an antipsychotic",
    "stem": "A 71-year-old retired tricycle driver with bipolar I disorder was switched from lithium to divalproex 8 weeks ago because of declining kidney function; his valproate level is in the upper therapeutic range. He has never taken an antipsychotic, metoclopramide, prochlorperazine or any other dopamine receptor blocking drug, and takes no other psychotropic. About 4 weeks after the switch his daughter noticed that he had slowed down, shuffled and had a tremor in both hands while watching television; she says it has crept up since. Examination shows bilateral bradykinesia, constant (lead-pipe) rigidity at both elbows and a 5-per-second rest tremor that lessens when he buttons his shirt. His sense of smell is intact, he has no dream enactment, and there are no focal signs. He is euthymic, sleeping and eating normally, with no hopelessness. Oral temperature is 36.6 °C and 36.9 °C, CK normal; he is alert, attentive and oriented.",
    "q": "Which record is most accurate for the motor picture?",
    "choices": [
      "G21.19 other medication-induced parkinsonism",
      "G21.11 antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism",
      "Parkinson’s disease, coded as a neurological condition",
      "G25.1 medication-induced postural tremor",
      "Bipolar I disorder, current episode depressed, with psychomotor retardation"
    ],
    "answer": 0,
    "why": "Parkinsonism with a clear **temporal link** to a medication that is **not** a dopamine blocker. Valproate is one of the antiepileptics the manual lists as a cause of MIP, along with lithium, SSRIs, calcium channel antagonists and others (p. 808). The DSM gives two parkinsonism codes: **G21.11** when an antipsychotic or other DRBA is the cause, **G21.19** for any other medication (p. 807).",
    "whyNot": [
      "Correct.",
      "He has never taken a dopamine receptor blocking agent; G21.11 is reserved for that cause (p. 807).",
      "Bilateral onset within weeks of a new causative drug, with no hyposmia or REM sleep behavior disorder, favors MIP over Parkinson’s disease (pp. 808–809).",
      "His tremor is a slow rest tremor that eases with action and comes with rigidity and bradykinesia: that is parkinsonism, not a postural tremor (p. 817).",
      "He is euthymic, with no vegetative signs or hopelessness, and depression does not cause lead-pipe rigidity or a rest tremor (p. 810)."
    ],
    "discuss": [
      "Lithium is also on the manual’s list of causes of MIP. How would you tell lithium-induced parkinsonism from lithium postural tremor at the bedside?",
      "Which ICD-10-CM convention, not mentioned in the DSM, asks for an additional adverse-effect code with G21.19 (app note)?"
    ]
  },
  {
    "id": "v21-03",
    "tag": "Slowed down: depression or the drug?",
    "stem": "A 45-year-old fish-port supervisor has major depressive disorder with psychotic features. Escitalopram 20 mg has been unchanged for 3 months; haloperidol 5 mg twice daily was added 4 weeks ago for guilty delusions. His wife brings him back because his depression “is worse”: he moves slowly, hardly changes expression and needs help to button his shirt. He says his mood is much better, he sleeps through to 6 a.m., his appetite has returned, he feels no guilt and he is hopeful about going back to work; the delusions have faded. On examination he blinks rarely, has resistance that is constant through the full range of movement at both wrists with cogwheeling, reduced arm swing on both sides and small handwriting. He is not mute, has no posturing or negativism and follows every instruction. Oral temperature 36.7 °C and 36.8 °C; CK normal. He is alert, attentive and oriented.",
    "q": "What best explains his slowness?",
    "choices": [
      "Worsening major depressive episode with psychomotor retardation",
      "Catatonia associated with major depressive disorder (F06.1)",
      "Parkinson’s disease unmasked by the antipsychotic",
      "G21.0 neuroleptic malignant syndrome",
      "G21.11 antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism"
    ],
    "answer": 4,
    "why": "Depressive slowing and drug-induced akinesia can look the same, but depression usually brings **vegetative signs, hopelessness and despair** (p. 810), and he has none of them: his mood, sleep and appetite have recovered. What he does have is the **examination of parkinsonism**: constant rigidity, cogwheeling, reduced blink and arm swing and micrographia (pp. 808–809), starting **4 weeks after haloperidol** (p. 808). These associated signs are what separate MIP from psychiatric slowing (p. 810).",
    "whyNot": [
      "His mood, sleep, appetite and hope have returned; the slowness comes with parkinsonian signs, not with depressive ones (p. 810).",
      "He is not mute, has no posturing or negativism and cooperates fully; the rigidity is constant, not the inconsistent kind seen in psychiatric conditions (p. 810).",
      "Nothing suggests a preexisting neurological disease (no earlier slowness, no hyposmia or dream enactment), and the onset follows the antipsychotic (pp. 808–809).",
      "Two normal oral temperatures and a normal CK rule out NMS (p. 810).",
      "Correct."
    ],
    "discuss": [
      "What would have happened if the team had raised the antidepressant or the antipsychotic for “worse depression”?",
      "Which items of your mental status examination best separate psychomotor retardation from akinesia?"
    ]
  },
  {
    "id": "v21-04",
    "tag": "Stiff and still: catatonia or parkinsonism?",
    "stem": "A 26-year-old woman with schizophrenia was started on haloperidol 10 mg daily 3 weeks ago during an admission for persecutory delusions. The ward team now wonders whether she is becoming catatonic: she sits still, her face is blank and she speaks little. On examination she answers every question, slowly but fully, follows commands, and says she feels “stiff like wood” and asks for something to help. Resistance to passive movement of her elbows and wrists is the same from the start to the end of the range, with ratchet-like catches at the wrists; there is a 4-per-second tremor of both hands at rest, and she walks with short steps and no arm swing. There is no posturing, no waxy flexibility, no echolalia or echopraxia, no negativism and no mutism. Before the haloperidol she moved normally. Oral temperature is 37.0 °C and 36.9 °C, CK normal, and she is alert, attentive and oriented.",
    "q": "What is the most likely explanation?",
    "choices": [
      "Catatonia associated with schizophrenia (F06.1)",
      "G21.11 antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism",
      "G21.0 neuroleptic malignant syndrome",
      "Negative symptoms of schizophrenia",
      "Functional neurological symptom disorder, with weakness or paralysis"
    ],
    "answer": 1,
    "why": "The decisive finding is the **quality of the rigidity**: in parkinsonism the resistance is **constant through the full range** (lead-pipe), whereas rigidity in psychiatric conditions is **inconsistent** (p. 810). Add the cogwheeling, rest tremor and gait, the onset **3 weeks after haloperidol** (p. 808), and her **distress and request for help**, and the picture is MIP. Catatonic signs are absent.",
    "whyNot": [
      "She shows none of the catatonic signs, and catatonic rigidity is not constant through the range (p. 810).",
      "Correct.",
      "Temperature and CK are normal on repeat, and she is alert and oriented (p. 810).",
      "Negative symptoms do not produce lead-pipe rigidity, cogwheeling or a rest tremor, and they did not begin 3 weeks after a drug (pp. 808–810).",
      "The manual notes rigidity can occur in this disorder, but it is not constant through the range, and her signs fit a drug effect with a clear temporal link (p. 810)."
    ],
    "discuss": [
      "Practice describing lead-pipe, cogwheel and clasp-knife rigidity in one sentence each, as you would to a consultant.",
      "Which bedside items from a catatonia rating scale would you document to show catatonia is absent (outside the DSM)?"
    ]
  },
  {
    "id": "v21-05",
    "tag": "The trembling lips",
    "stem": "A 52-year-old man with schizophrenia was started on haloperidol 10 mg daily 5 weeks ago; he had never taken an antipsychotic before. His sister notices that his lips “shiver”. On examination there are fast, regular, up-and-down movements of the lips at about 5 per second, seen while he sits quietly with his mouth closed; the tongue is not involved. The movement stops while he talks or sips water and returns when he is at rest. He also has mild cogwheeling at both wrists and a reduced arm swing. There are no writhing or irregular movements of the tongue, jaw or limbs, no sustained abnormal postures, and no tremor when he holds his arms out. He is calm and is not restless. He has no tics and no history of repetitive movements in childhood.",
    "q": "Which diagnosis fits the lip movement best?",
    "choices": [
      "G24.01 tardive dyskinesia",
      "G24.02 medication-induced acute dystonia, oromandibular",
      "G25.1 medication-induced postural tremor",
      "G21.11 antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism",
      "Stereotypic movement disorder"
    ],
    "answer": 3,
    "why": "A **regular 3–6 Hz** tremor **at rest** that is **suppressed by action** is parkinsonian, and the manual notes it can involve the lips, which is called **“rabbit syndrome”** (p. 808). It began **5 weeks after starting haloperidol** and comes with cogwheeling and reduced arm swing, other signs of MIP.",
    "whyNot": [
      "TD movements are irregular (choreiform, athetoid or semirhythmic), not a steady 3–6 Hz tremor, and he has only 5 weeks of exposure; under 60 he needs at least 3 months (pp. 814–815).",
      "Acute dystonia is a sustained contraction or posture, not a rhythmic tremor, and most cases start within days (p. 812).",
      "A postural tremor is faster (8–12 Hz), absent at rest and worse with action; his is the reverse (p. 817).",
      "Correct.",
      "Stereotypic movement disorder begins in early development and is not tied to a drug; he has no such history."
    ],
    "discuss": [
      "Why does the rhythm of a mouth movement (steady versus irregular) matter so much for treatment (outside the DSM; see p. 816)?",
      "What would you expect to see if he also had early tardive dyskinesia?"
    ]
  },
  {
    "id": "v21-06",
    "tag": "NMS by the numbers",
    "stem": "A 24-year-old man with schizophrenia was admitted agitated and dehydrated after days of refusing food and fluids. Haloperidol was started at 10 mg orally and titrated rapidly, with three extra 5 mg intramuscular doses over the first 48 hours; the last dose was 20 hours ago. On day 4 he is drenched in sweat. Oral temperature is 39.2 °C and, an hour later, 39.6 °C. He has generalized rigidity, constant through the range of movement, that did not change after intramuscular benztropine, plus coarse tremor and drooling. Heart rate is 128 (baseline 80) and blood pressure 168/104 (baseline 120/80). CK is 2,600 U/L (upper limit 200), white cell count is raised and serum iron is low. He has become mute and barely responsive since this morning. Before the haloperidol he was talkative and pacing, with no posturing, mutism or negativism. He has taken no serotonergic drug, the ward is air-conditioned, and blood cultures, chest X-ray, CT and CSF are normal.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "G21.0 neuroleptic malignant syndrome",
      "G21.11 antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism",
      "Catatonia associated with schizophrenia (F06.1), malignant form",
      "Serotonin syndrome",
      "Heat stroke"
    ],
    "answer": 0,
    "why": "Every element of the manual’s description is here: **DRBA exposure within 72 hours**; **hyperthermia above 38.0 °C on two oral readings** with **profuse sweating**; **generalized rigidity unresponsive to an antiparkinsonian drug**; **CK at least four times** the upper limit (here 13 times); **tachycardia more than 25% above baseline** and **blood pressure at least 25% above baseline**; and a **mental status change** (p. 810). His risk factors (agitation, dehydration, parenteral doses, rapid titration, a high-potency drug) are those the manual names (p. 811).",
    "whyNot": [
      "Correct.",
      "MIP does not cause fever, autonomic instability or a CK this high; those findings separate NMS from MIP (p. 809).",
      "Malignant catatonia can be indistinguishable from NMS (p. 811), but here catatonic signs were absent before the antipsychotic and appeared only with the rest of the syndrome after it.",
      "He has received no serotonergic drug, and lead-pipe rigidity with very high CK fits NMS (p. 811).",
      "He was indoors in an air-conditioned ward, and heat stroke does not explain generalized rigidity after a new dopamine blocker (p. 811)."
    ],
    "discuss": [
      "Recite the manual’s numerical thresholds for temperature, CK, heart rate, blood pressure and respiratory rate.",
      "Which of his risk factors could the team have changed (p. 811)?"
    ]
  },
  {
    "id": "v21-07",
    "tag": "NMS before the fever",
    "stem": "A 33-year-old woman with schizoaffective disorder, bipolar type, was given intramuscular haloperidol 5 mg twice daily for 2 days for agitation, and her oral haloperidol was raised from 5 to 15 mg daily. On day 3 the nurse finds her confused: she cannot keep her attention on a conversation, gives the year as 2019 and does not know she is in hospital. She has new generalized rigidity, constant through the range, and is drooling and dysarthric. Heart rate is 118 (baseline 84), blood pressure has swung from 110/70 to 150/98 within 12 hours, and she has wet the bed. CK is 1,200 U/L (upper limit 170). Oral temperature is 37.5 °C and 37.7 °C on two readings 2 hours apart. She has taken no serotonergic drug and no other new medication. The on-call doctor says “no fever, so it cannot be NMS” and suggests more intramuscular haloperidol for the confusion.",
    "q": "Which interpretation is best?",
    "choices": [
      "G21.11 antipsychotic-induced parkinsonism; NMS is excluded without fever",
      "Delirium of undetermined cause; the rigidity and CK rise are incidental",
      "Evolving neuroleptic malignant syndrome: mental status and neurological changes usually come before the systemic signs",
      "Catatonia associated with schizoaffective disorder (F06.1); more antipsychotic is indicated",
      "G24.02 medication-induced acute dystonia"
    ],
    "answer": 2,
    "why": "The manual stresses the **order of events**: changes in **mental status** and other **neurological signs usually precede the systemic signs** (p. 811), and mental status change is often an **early sign** (p. 810). **Autonomic instability** (tachycardia over 25% above baseline, a systolic swing of 40 mmHg within 24 hours, incontinence) is an **early clue** (p. 810), and the CK is already about 7 times the upper limit. Fever above 38.0 °C on two oral readings completes the classic picture, but its absence on day 3 does not end the story. A rising dose and parenteral route add risk (p. 811).",
    "whyNot": [
      "MIP does not cause confusion, autonomic swings or this CK rise, and the manual expects fever to come later in NMS (pp. 809–811).",
      "Her inattention and disorientation are real, but they are part of the NMS picture (delirium is one of its mental status changes, p. 810); calling rigidity, autonomic instability and CK incidental ignores the syndrome.",
      "Correct.",
      "Catatonic signs did not precede the drug, and adding more DRBA to an evolving NMS is dangerous (p. 811).",
      "Acute dystonia is a focal or segmental posture without confusion, autonomic instability or high CK (pp. 812–813)."
    ],
    "then": {
      "q": "The team agrees NMS is likely. What is the most appropriate first step (outside the DSM; app summary of 2016 reviews and the APA 2020 guideline)?",
      "choices": [
        "Give intramuscular benztropine and continue haloperidol at the same dose",
        "Stop haloperidol and every other dopamine blocker at once, begin intensive supportive care (cooling, intravenous fluids, close monitoring), and manage as NMS while other causes are excluded",
        "Switch to intramuscular chlorpromazine, a low-potency antipsychotic, for the agitation",
        "Wait for a second oral temperature above 38.0 °C before changing any treatment"
      ],
      "answer": 1,
      "why": "Outside the DSM: the core of management is to **stop the causative drug** and give **intensive supportive care** (cooling, fluids, monitoring for rhabdomyolysis, renal failure, aspiration and emboli). Dantrolene or bromocriptine are used on **case-series evidence**, and ECT is considered for refractory cases or when malignant catatonia cannot be excluded. The manual itself notes NMS is **self-limited in most cases once the drug is stopped** but can be fatal (10%–20%) when **unrecognized** (p. 811).",
      "whyNot": [
        "NMS rigidity usually does not respond to antiparkinsonian drugs (p. 810), and continuing the DRBA keeps the cause in place.",
        "Correct.",
        "Any DRBA can cause NMS, low-potency ones included (p. 811); adding another is unsafe.",
        "Waiting for the full picture delays recognition, which is when deaths occur (p. 811)."
      ]
    },
    "discuss": [
      "Why is a confused patient on a recently increased antipsychotic at risk of receiving more of the drug?",
      "When, and how, would you consider an antipsychotic again after she recovers (outside the DSM; see p. 811 on rechallenge)?"
    ]
  },
  {
    "id": "v21-08",
    "tag": "Hot and jerky: which syndrome?",
    "stem": "A 39-year-old bank teller has taken sertraline 150 mg daily for panic disorder for a year. Two days ago a clinic doctor prescribed tramadol for back pain; she took three doses yesterday. Within hours of the last dose she became restless and sweaty and developed diarrhea. Oral temperature is 38.6 °C and 38.8 °C. She has a fine tremor of both hands, brisk reflexes, inducible clonus at both ankles and dilated pupils. Muscle tone in the arms is normal, without lead-pipe rigidity. Heart rate is 122 and blood pressure 150/92. CK is 1.5 times the upper limit. She is anxious but attends well, is oriented to time, place and person, and says this feels nothing like her panic attacks. She has never taken an antipsychotic, metoclopramide, prochlorperazine or any other dopamine receptor blocking drug.",
    "q": "Which condition best explains the picture?",
    "choices": [
      "G21.0 neuroleptic malignant syndrome",
      "G25.79 other medication-induced movement disorder (NMS-like presentation with a non-DRBA drug)",
      "G25.1 medication-induced postural tremor",
      "Panic attack in panic disorder",
      "Serotonin syndrome from the sertraline–tramadol combination"
    ],
    "answer": 4,
    "why": "The manual lists **serotonin syndrome** first among drug-related look-alikes of NMS (p. 811). Here the **serotonergic combination**, onset **within hours**, **clonus, hyperreflexia, tremor, diarrhea and dilated pupils**, normal tone and only a slight CK rise all point to it. There is **no dopamine blocker** at all, so NMS is not the diagnosis (p. 810). The manual also notes that tremor can be an **early sign** of serotonin syndrome (p. 817).",
    "whyNot": [
      "NMS follows a dopamine antagonist and features generalized lead-pipe rigidity with a high CK; she has neither (p. 810).",
      "The G25.79 example is a presentation that resembles NMS; this one has the features of serotonin syndrome, which the manual names as a separate condition (pp. 811, 818; app reading).",
      "Fever, clonus, diarrhea and autonomic change are more than a postural tremor, and tremor can be an early sign of serotonin syndrome (p. 817).",
      "She says this is unlike her panic attacks, and panic does not cause fever, clonus or a CK rise.",
      "Correct."
    ],
    "discuss": [
      "List three bedside findings that separate serotonin syndrome from NMS, and the time course of each (the manual names the condition; the contrast is outside the DSM).",
      "Which other drugs commonly prescribed in the Philippines combine dangerously with SSRIs (outside the DSM)?"
    ]
  },
  {
    "id": "v21-09",
    "tag": "Catatonia came first",
    "stem": "A 30-year-old man with schizophrenia stopped all medication 6 months ago; his mother and the pharmacy confirm he has taken no antipsychotic, metoclopramide or any other dopamine blocker since. For 5 days before admission he was mute, held odd postures for hours, resisted every attempt to move him, kept his arm raised when it was placed there and refused food and water. In the emergency room he received only intravenous fluids. On day 2 of admission his oral temperature is 39.0 °C and 39.3 °C, he is sweating heavily, his rigidity is generalized, heart rate is 130 (baseline 88) and blood pressure swings between 100/60 and 160/100. CK is 1,000 U/L (upper limit 200). Blood and urine cultures, chest X-ray, MRI, CSF and EEG show no infection, structural lesion or seizure activity; thyroid tests are normal.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "G21.0 neuroleptic malignant syndrome",
      "Catatonia associated with schizophrenia (F06.1), malignant form",
      "G25.79 other medication-induced movement disorder",
      "Catatonic disorder due to another medical condition (F06.1)",
      "Heat stroke"
    ],
    "answer": 1,
    "why": "Fever, rigidity and autonomic instability here make **malignant catatonia**, which the manual says may be **indistinguishable from NMS** (p. 811). The deciding facts are the **sequence** (catatonic signs for days **before** any hyperthermia) and the **absence of any dopamine antagonist** in the preceding 6 months. NMS by definition follows exposure to a dopamine antagonist, generally **within 72 hours** (p. 810). The manual names malignant catatonia in schizophrenia or a mood disorder as the key look-alike (pp. 807, 811).",
    "whyNot": [
      "No dopamine antagonist was given in 6 months, so NMS cannot be diagnosed (p. 810).",
      "Correct.",
      "No medication was involved at all, so no medication-induced category applies (p. 818).",
      "A thorough workup found no medical cause, and the catatonia arose in the course of known schizophrenia.",
      "He was not exposed to heat, and heat stroke does not explain days of mutism, posturing and negativism (p. 811)."
    ],
    "discuss": [
      "Some investigators regard NMS as a drug-induced form of malignant catatonia (p. 811). How would that view change your approach to a patient with catatonia who needs an antipsychotic?",
      "Why might giving an antipsychotic to this man now be particularly risky (outside the DSM)?"
    ]
  },
  {
    "id": "v21-10",
    "tag": "NMS on the surgical ward",
    "stem": "A 70-year-old woman with no psychiatric history is on day 5 after bowel surgery under general anesthesia. For postoperative vomiting she was started on metoclopramide 10 mg intravenously every 6 hours 2 days ago; she takes no other new medication and no serotonergic drug. Psychiatry is consulted “for delirium”. She cannot hold attention on a simple task and thinks she is at her daughter’s house in March; this began yesterday afternoon. She also has generalized rigidity, constant through the range of movement, and is soaked in sweat. Oral temperature is 38.7 °C and 39.0 °C, heart rate 124 (baseline 82), blood pressure fluctuating by 30 mmHg systolic over 12 hours, and CK 1,800 U/L (upper limit 200). Blood and urine cultures, chest X-ray, wound inspection and abdominal CT show no infection or leak.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Delirium due to the postoperative state, with rigidity from bed rest",
      "G25.79 other medication-induced movement disorder, because metoclopramide is not an antipsychotic",
      "No chapter diagnosis: NMS occurs only in people treated for a mental disorder",
      "G21.0 neuroleptic malignant syndrome",
      "Malignant hyperthermia of anesthesia"
    ],
    "answer": 3,
    "why": "**Metoclopramide is a dopamine receptor blocking agent**: the manual lists it among the antiemetic DRBAs (p. 807) and names it among the medical-setting drugs implicated in NMS (p. 811). NMS is **not specific to any psychiatric diagnosis** and can occur in people without a mental disorder (p. 811). Exposure within 72 hours, fever on two oral readings with sweating, lead-pipe rigidity, autonomic instability, CK 9 times the upper limit and delirium complete the picture (p. 810). The record is **G21.0**.",
    "whyNot": [
      "Her inattention and disorientation are part of NMS (p. 810); bed rest does not explain fever, lead-pipe rigidity and a high CK.",
      "G25.79 is for NMS-like pictures with drugs other than DRBAs (p. 818); metoclopramide is a DRBA (p. 807).",
      "The manual says the opposite: NMS may occur in people with no diagnosable mental disorder (p. 811).",
      "Correct.",
      "Malignant hyperthermia occurs during anesthesia (p. 811); her anesthesia was 5 days ago and the syndrome followed the metoclopramide."
    ],
    "discuss": [
      "Which other “nonpsychiatric” DRBAs would you look for on a medical ward medication chart (p. 807)?",
      "How would you explain to the surgical team why the antiemetic matters?"
    ]
  },
  {
    "id": "v21-11",
    "tag": "Eyes up, then the airway",
    "stem": "A 19-year-old male college student with first-episode psychosis was given haloperidol 5 mg intramuscularly in the emergency department 20 hours ago and started on haloperidol 5 mg orally twice daily; he takes nothing else. For the past 40 minutes his eyes have been forced upward and he cannot bring them down; his neck is arched backward. He is frightened, says his eyes are “pulling up by themselves”, and keeps asking the nurses to help him. Oral temperature is 36.9 °C and 37.0 °C, heart rate 96. Tone in his limbs is normal, and there is no rigidity elsewhere. He has no history of seizures, is not confused, and follows every instruction he can.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "G24.02 medication-induced acute dystonia",
      "Catatonia associated with a psychotic disorder (F06.1)",
      "Worsening psychosis with bizarre posturing, calling for a higher dose",
      "G24.09 tardive dystonia",
      "Focal seizure"
    ],
    "answer": 0,
    "why": "A forced upward deviation of the eyes (**oculogyric crisis**) with **retrocollis**, starting **within 24–48 hours** of a high-potency DRBA, in a **young man**, the group at highest risk (p. 812). He is **distressed and seeks help**, as people with acute dystonia usually are (p. 813). No fever and no generalized rigidity, so not NMS (p. 813).",
    "whyNot": [
      "Correct.",
      "People with retarded catatonia are typically mute and withdrawn and do not express distress; he is frightened and asking for help (p. 813).",
      "The manual warns that dystonia can be mistaken for part of the psychosis, leading to a higher dose of the drug that caused it (p. 812).",
      "Tardive dystonia emerges late in treatment; this appeared within a day of the first dose (p. 816).",
      "He is fully responsive and the posture began within a day of a DRBA, the typical timing of acute dystonia (p. 812)."
    ],
    "then": {
      "q": "An hour later, before treatment is given, he clutches his throat, his voice becomes hoarse, and there is a high-pitched noise on breathing in; he is struggling to breathe. There is no rash, no lip or tongue swelling and blood pressure is normal; he has eaten nothing new. What is the most likely explanation?",
      "choices": [
        "A panic attack triggered by the eye spasm",
        "Anaphylaxis to haloperidol",
        "Acute laryngeal dystonia, a life-threatening form of acute dystonia",
        "Early neuroleptic malignant syndrome with respiratory involvement"
      ],
      "answer": 2,
      "why": "**Laryngeal dystonia** shows as clutching of the throat, **stridor, dysphonia** and respiratory distress, and it is **life-threatening** because it can obstruct the airway (p. 812). It belongs to the same acute reaction as his oculogyric crisis. Anaphylaxis is a mimic the manual lists (p. 813), but rash, swelling and hypotension are absent. Securing the airway comes first (outside the DSM).",
      "whyNot": [
        "Stridor and hoarseness are physical signs of laryngeal obstruction, not panic.",
        "Anaphylaxis is a mimic (p. 813), but there is no rash, swelling or hypotension, and the picture continues the dystonic reaction.",
        "Correct.",
        "There is no fever, generalized rigidity or autonomic instability (pp. 810, 813)."
      ]
    },
    "discuss": [
      "Which patients would you warn about acute dystonia before the first dose, and what would you tell them (p. 812)?",
      "How could this reaction affect his willingness to take medication later?"
    ]
  },
  {
    "id": "v21-12",
    "tag": "Twisted neck, no distress",
    "stem": "A 34-year-old woman with major depressive disorder with psychotic features stopped eating and talking 4 days ago. Her husband says that since then she has held her head turned sharply to the left and her right arm raised, for hours, and resists when anyone tries to move them. She was admitted yesterday and given olanzapine 5 mg for the first time last night; she had taken no antipsychotic, antiemetic or other medication before. This morning, the posture is unchanged. Intramuscular benztropine given 2 hours ago made no difference. She is mute, does not follow commands, does not look at the examiner and shows no sign of distress about the posture. Oral temperature 37.0 °C and 37.1 °C, heart rate 84, CK normal. There are no other neurological signs.",
    "q": "What is the most likely explanation for the posture?",
    "choices": [
      "G24.02 medication-induced acute dystonia, cervical (torticollis)",
      "G21.0 neuroleptic malignant syndrome",
      "Catatonia associated with major depressive disorder (F06.1)",
      "G24.09 tardive dystonia",
      "Idiopathic cervical dystonia"
    ],
    "answer": 2,
    "why": "The manual gives three clues that separate catatonia from acute dystonia: the **timing** (the posture **preceded** the antipsychotic), the **response to treatment** (no change with an anticholinergic), and **subjective distress** (people with acute dystonia are usually upset and seek help, whereas those with **retarded catatonia** are **mute, withdrawn and not distressed**) (p. 813). All three point to catatonia in her depressive episode.",
    "whyNot": [
      "The posture began 3 days before her first antipsychotic dose, did not respond to benztropine, and she shows no distress (p. 813).",
      "She is afebrile with normal CK on repeat (p. 810).",
      "Correct.",
      "Tardive dystonia needs long exposure; she had none before last night (p. 816).",
      "Mutism, refusal to eat and a held arm posture are not explained by an isolated neck dystonia, and the picture began with her depressive illness."
    ],
    "discuss": [
      "Why is the time order of the posture and the first dose the single most useful fact here?",
      "What risk does an antipsychotic carry for a patient who is already catatonic (pp. 811, 813)?"
    ]
  },
  {
    "id": "v21-13",
    "tag": "Restless: anxiety or the dose?",
    "stem": "A 35-year-old construction worker with schizophrenia was started on risperidone 2 mg daily 3 weeks ago. Ten days later he began to pace the ward. The team read this as anxiety and psychotic agitation and raised risperidone to 4 mg 5 days ago; since then the restlessness has become much worse. He says he has to keep moving his legs, the feeling is inside his legs, and he cannot sit through a 10-minute interview: when asked to stay seated he rocks his legs constantly and then stands to shift from foot to foot. He says “this is not like my nerves before.” His voices are quieter than on admission. He drinks no coffee, urine toxicology is negative, and hemoglobin and ferritin are normal. He has no history of ADHD, no mood episode and no neurological illness. The team is considering a further increase.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Generalized anxiety disorder",
      "Psychotic agitation of schizophrenia",
      "Substance withdrawal",
      "G24.01 tardive dyskinesia",
      "G25.71 medication-induced acute akathisia"
    ],
    "answer": 4,
    "why": "He has the **subjective inner restlessness in the legs** and the **observed movements** (leg rocking while seated, shifting from foot to foot) that define akathisia, starting **within 4 weeks** of a DRBA (p. 813). The strongest clue is the **dose response**: an increase made it **worse**, which is typical of akathisia (p. 814), and he experiences it as **different from his earlier feelings** (p. 814). The manual warns that misreading akathisia as psychosis leads to dose increases that aggravate it (p. 813).",
    "whyNot": [
      "Anxiety from a mental disorder would not have started after the drug or worsened with a dose increase (p. 814).",
      "His psychosis is improving while the restlessness worsens; psychotic agitation would not be made worse by more antipsychotic (p. 814).",
      "His toxicology is negative and he has no substance history.",
      "TD needs at least 3 months of exposure in someone his age, and a dose increase tends to relieve TD briefly, not worsen it (pp. 814–815).",
      "Correct."
    ],
    "discuss": [
      "Which two questions would best help a patient tell you whether this restlessness is new (p. 814)?",
      "Akathisia is linked with irritability, aggression and suicide attempts (p. 813). What would you document on the ward?"
    ]
  },
  {
    "id": "v21-14",
    "tag": "Akathisia on an SSRI",
    "stem": "A 22-year-old nursing student with a first major depressive episode began fluoxetine 20 mg daily 9 days ago; she takes no other medication and has never taken an antipsychotic or antiemetic. Over the past 5 days she has felt a driven restlessness, mainly in her legs. She cannot sit through lectures, crosses and uncrosses her legs constantly, and paces her room at night. She is irritable and miserable about the feeling and says she would “rather be dead than feel this”, though she has no plan. She sleeps about 7 hours and feels tired in the morning; she denies racing thoughts, extra energy or new projects, and her speech is normal in rate. She has never had a period of elevated mood, and there is no family history of bipolar disorder. She drinks one coffee a day, hemoglobin and ferritin are normal, and she does not use substances.",
    "q": "What best explains her new restlessness?",
    "choices": [
      "A hypomanic episode induced by fluoxetine",
      "G25.71 medication-induced acute akathisia",
      "Agitation from worsening depression",
      "Generalized anxiety disorder",
      "No medication-induced condition: akathisia requires a dopamine blocker"
    ],
    "answer": 1,
    "why": "SSRIs are on the manual’s list of drugs that cause akathisia, and SSRI-induced akathisia appears **identical in phenomenology and treatment response** to that from DRBAs (pp. 813–814). Inner leg restlessness with **observed** fidgeting and pacing, starting **within 4 weeks of a new drug**, fits (p. 813). The manual links akathisia to **dysphoria and suicide attempts** (p. 813), so her statement needs careful assessment.",
    "whyNot": [
      "She has no elevated or expansive mood, no increase in energy or activity and no decreased need for sleep.",
      "Correct.",
      "The restlessness began abruptly after a new drug, is felt in the legs and is unlike her depression; abrupt onset after a medication change is the key clue (p. 814).",
      "GAD requires months of excessive worry; this began within days of a drug.",
      "The manual includes SSRIs, TCAs, dopamine agonists and calcium channel blockers as causes, not only DRBAs (p. 813)."
    ],
    "discuss": [
      "How would you explain akathisia to a student who believes she is “getting worse”?",
      "What safety steps would you take after her statement about being dead (outside the DSM)?"
    ]
  }
