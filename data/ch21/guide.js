/* Chapter 21 study guide. Source: DSM-5-TR, Medication-Induced Movement Disorders and Other Adverse Effects of
   Medication (pp. 807–820). Written in the app’s own words from the manual, with page references. The conditions in
   this chapter are not mental disorders and have no criteria sets (p. 807); the guide summarizes the manual’s
   descriptions, time rules and differentials. Codes checked against ICD-10-CM through FY2027 (October 1, 2026): all
   unchanged since FY2016. Treatment, post-2022 evidence, ICD-10-CM titles and exam advice are outside the DSM and
   labeled as such. */
SP.add("ch21", "guide", {
  intro: "This chapter is the one place in Section II where the entries are **not mental disorders** (p. 807). It is here because these conditions matter twice in psychiatric practice: in **managing medication** and in the **differential diagnosis** of mental disorders, where an anxiety disorder can hide an **akathisia**, **malignant catatonia** can look like **neuroleptic malignant syndrome**, and **tardive dyskinesia** can be mistaken for chorea (p. 807). The manual describes nine movement conditions (**parkinsonism**, **NMS**, **acute dystonia**, **acute akathisia**, **tardive dyskinesia**, **tardive dystonia**, **tardive akathisia**, **postural tremor** and a residual “other”), then **antidepressant discontinuation syndrome** and an optional code for **other adverse effects** (pp. 807–819). None has a criteria set, so the exam tests the **time rules** (hours for dystonia, days to weeks for akathisia and parkinsonism, months for tardive syndromes, 2–4 days for discontinuation), the **distinguishing features** (fever and rigidity in NMS; 3–6 Hz rest tremor versus 8–12 Hz postural tremor), the **dose-change clue** (a higher dose worsens akathisia but temporarily hides TD) and the **codes**, including the T codes with their seventh character. The [[helper:movement|movement-disorder helper]] sorts a presentation by timing and type.",
  objectives: [
    "Explain why these conditions are in Section II although they are **not mental disorders**, and why the manual replaces “neuroleptic” with **antipsychotic medications and other dopamine receptor blocking agents** (p. 807).",
    "Describe **medication-induced parkinsonism**: the causative agents, the **2–4 week** onset (usually by **3 months**), the **3–6 Hz** rest tremor, **lead-pipe** and **cogwheel** rigidity, bradykinesia, the risk factors, and how it is told from Parkinson’s disease, depression and catatonia (pp. 807–810).",
    "Recognize **neuroleptic malignant syndrome** from exposure within **72 hours**, **hyperthermia above 38.0 °C**, **generalized rigidity**, **mental status change**, **autonomic instability** and **CK at least 4 times** the upper limit, and recall its onset, recovery and fatality figures and its look-alikes (pp. 810–811).",
    "Describe **acute dystonia** (within **24–48 hours** in at least half, **5 days** in 90%) and **acute akathisia** (within **4 weeks**; subjective restlessness plus an observed movement), their causes, risk groups and differentials (pp. 812–814).",
    "State the **tardive dyskinesia** rules: movements for **at least 4 weeks**, exposure for **at least 3 months** (**1 month** at 60 or older), onset during exposure or within **4 weeks** of stopping an oral agent (**8 weeks** for a long-acting injectable), the movement types, risk factors and the two-way treatment trap with parkinsonism (pp. 814–816).",
    "Distinguish **medication-induced postural tremor** (**8–12 Hz**, worse holding a posture, classically lithium) from the parkinsonian tremor, and know the other tardive and residual categories (pp. 816–818).",
    "Describe **antidepressant discontinuation syndrome** (onset **2–4 days**, usually under **2 weeks**, short half-life agents such as **paroxetine** and **venlafaxine**, no craving) and separate it from relapse and from substance withdrawal (pp. 818–819).",
    "Code every entry, including the **T43.205** and **T50.905** codes with **A/D/S** seventh characters, the shared **G25.71**, and the ICD-10-CM titles that differ from the DSM names (app coding section)."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s21-map",
          title: "How the chapter is built",
          pages: "807–819",
          blocks: [
            { type: "table", caption: "Conditions and codes (as printed in DSM-5-TR, 2022; unchanged through October 2026)", head: ["Condition", "Code", "Key time rule", "Page"], rows: [
              ["[[dx:medication-induced-parkinsonism|Medication-induced parkinsonism]]", "G21.11 (antipsychotic/DRBA), G21.19 (other medication)", "Usually **2–4 weeks**, by **3 months**", "807–810"],
              ["[[dx:nms|Neuroleptic malignant syndrome]]", "G21.0", "Exposure within **72 hours**; most within the first week, virtually all within **30 days**", "810–811"],
              ["[[dx:medication-induced-acute-dystonia|Medication-induced acute dystonia]]", "G24.02", "≥50% within **24–48 hours**, ~90% within **5 days**", "812–813"],
              ["[[dx:medication-induced-acute-akathisia|Medication-induced acute akathisia]]", "G25.71", "Typically within **4 weeks**", "813–814"],
              ["[[dx:tardive-dyskinesia|Tardive dyskinesia]]", "G24.01", "Movements **≥4 weeks**; exposure **≥3 months** (**1 month** at ≥60)", "814–816"],
              ["[[dx:tardive-dystonia|Tardive dystonia]]", "G24.09", "Late emergence; may persist months to years", "816"],
              ["[[dx:tardive-akathisia|Tardive akathisia]]", "G25.71", "Late emergence; may persist months to years", "816"],
              ["[[dx:medication-induced-postural-tremor|Medication-induced postural tremor]]", "G25.1", "**8–12 Hz**, on holding a posture", "817"],
              ["[[dx:other-medication-induced-movement|Other medication-induced movement disorder]]", "G25.79", "Residual: NMS-like pictures with non-DRBAs, other tardive conditions", "818"],
              ["[[dx:antidepressant-discontinuation|Antidepressant discontinuation syndrome]]", "T43.205A / D / S", "Begins **2–4 days** after the last dose; usually **≤2 weeks**", "818–819"],
              ["[[dx:other-adverse-effect-medication|Other adverse effect of medication]]", "T50.905A / D / S", "Optional, for non-movement side effects that become the focus", "819"]
            ] },
            { type: "callout", kind: "key", title: "Four ideas carry the chapter", text: "1) These are **not mental disorders**; they are listed for medication management and for the differential diagnosis of mental disorders (p. 807). 2) **Causation is often hard to prove**, because the same movements occur without medication (p. 807). 3) The conditions are sorted by **time**: acute syndromes appear within hours to weeks of starting or raising a dopamine receptor blocking agent, tardive syndromes after months to years and may persist after stopping (pp. 812–816). 4) **Treatments cross over**: anticholinergics used for parkinsonism worsen tardive dyskinesia, and VMAT2 inhibitors used for tardive dyskinesia worsen parkinsonism (p. 816)." },
            { type: "update", kind: "tr", title: "What the text revision changed (app comparison)", text: "The app’s own comparison with DSM-5 (2013), not DSM text: the codes are the same, but entries were **renamed**: “neuroleptic-induced” parkinsonism, acute dystonia and acute akathisia became antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism, medication-induced acute dystonia and medication-induced acute akathisia, and the text now explains why “neuroleptic” is outdated (p. 807). The parkinsonism section is much longer (causes beyond antipsychotics, toxins, time course, rigidity types, complications, risk factors, pp. 807–810), and the TD differential now names the **VMAT2 inhibitor** cross-effect on parkinsonism (p. 816). The 4-week (oral) and 8-week (depot) post-withdrawal windows for TD were already in DSM-5. Confirm other changes against both editions." }
          ]
        },
        {
          id: "s21-intro",
          title: "Why the chapter exists, and the drugs it is about",
          pages: "807",
          blocks: [
            { type: "p", text: "The manual gives two reasons for keeping these conditions in Section II: their importance in the **medication management** of mental and other medical disorders, and their place in the **differential diagnosis** of mental disorders. Its three examples are worth memorizing: **anxiety disorder versus medication-induced akathisia**, **malignant catatonia versus neuroleptic malignant syndrome** (malignant catatonia being described as a particularly severe, potentially life-threatening form of catatonia), and **tardive dyskinesia versus chorea** (p. 807)." },
            { type: "callout", kind: "caution", title: "“Medication induced” is a label, not a proof", text: "The manual warns that the causal link between a drug and a movement disorder is **often difficult to establish**, because several of these movement disorders also occur **without** medication exposure (p. 807). Spontaneous dyskinesia in more than 5% of people, and more in older people, is the example it gives later (p. 816). Document the temporal relationship, and keep the differential open." },
            { type: "defs", title: "The agents the chapter is about (p. 807)", items: [
              ["Why “neuroleptic” is retired", "The manual calls the word **outdated**: it highlights the tendency of antipsychotics to cause abnormal movements. The replacement phrase is **antipsychotic medications and other dopamine receptor blocking agents** (DRBAs). Newer antipsychotics **may** be less likely to cause some of these disorders, but the disorders still occur."],
              ["First-generation (“typical”, conventional) antipsychotics", "Examples: chlorpromazine, haloperidol, fluphenazine."],
              ["Second-generation (“atypical”) antipsychotics", "Examples: clozapine, risperidone, olanzapine, quetiapine."],
              ["Dopamine receptor blockers used for nausea and gastroparesis", "Prochlorperazine, promethazine, trimethobenzamide, thiethylperazine, **metoclopramide**. These matter because a patient on no psychiatric drug can still develop any syndrome in this chapter."],
              ["Amoxapine", "An **antidepressant** with dopamine receptor blocking activity, listed alongside the antipsychotics."]
            ] },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A medical inpatient on **metoclopramide** for gastroparesis who develops an oculogyric crisis, or fever with rigidity, has a **medication-induced acute dystonia** or **neuroleptic malignant syndrome** exactly as an antipsychotic-treated patient would: the manual lists the antiemetic and promotility DRBAs explicitly (p. 807) and names metoclopramide and prochlorperazine under NMS (p. 811)." },
            { type: "p", text: "Everything that follows is description, not criteria. Where the manual gives a number (hours, weeks, percentages, hertz), the number is the testable fact; where it hedges (“may”, “usually”, “appears to”), keep the hedge." }
          ]
        }
      ]
    },
    {
      title: "Acute syndromes",
      sections: [
        {
          id: "s21-mip",
          title: "Medication-induced parkinsonism: causes and time course",
          pages: "807–808",
          blocks: [
            { type: "criteria", title: "Medication-induced parkinsonism in brief (a description, not a criteria set)", code: "G21.11 / G21.19", pages: "807–808", items: [
              ["What", "Parkinsonism (tremor, rigidity, bradykinesia and the associated signs) that appears in a **temporal relationship** with starting or raising a medication known to cause it, or with reducing an antiparkinsonian drug."],
              ["Not better explained by", "Catatonia, negative symptoms of schizophrenia or depressive psychomotor retardation; another medication-induced movement disorder; a neurological or medical condition such as **Parkinson’s disease** or **Wilson’s disease**; or **antipsychotic-exacerbated Parkinson’s disease** (p. 808)."],
              ["Codes", "**G21.11** when the agent is an antipsychotic or other dopamine receptor blocking agent; **G21.19** for any other medication (p. 807)."]
            ] },
            { type: "p", text: "The manual ranks medication-induced parkinsonism (MIP) **second among the causes of parkinsonism**, behind Parkinson’s disease, and links it to morbidity, disability and **treatment nonadherence**, especially in people with psychiatric disorders. Because early recognition matters, **any new parkinsonism should prompt a thorough medication history**, and a temporal link between the drug and the onset should be evident (p. 807)." },
            { type: "defs", title: "Which drugs (pp. 807–808)", items: [
              ["Most often", "Antipsychotics that block **D2** receptors. Rates are higher with **high-D2-potency** agents (**haloperidol, fluphenazine, risperidone**), but the clinical picture does **not** differ between first- and second-generation drugs."],
              ["Other medications", "**Calcium channel antagonists** (flunarizine, cinnarizine), **dopamine depleters** (reserpine, tetrabenazine), **antiepileptics** (phenytoin, valproate, levetiracetam), **antidepressants** (SSRIs, MAOIs), **lithium**, chemotherapy agents (cytosine arabinoside, cyclophosphamide, vincristine, doxorubicin, paclitaxel, etoposide) and immunosuppressants (cyclosporine, tacrolimus)."],
              ["Toxins", "MPTP, organophosphate pesticides, manganese, methanol, cyanide, carbon monoxide, carbon disulfide."]
            ] },
            { type: "flow", title: "Time course (p. 808)", vertical: true, steps: [
              ["Usual", "A few weeks after starting or raising a causative drug, or after **reducing an anticholinergic** that was treating or preventing dystonia or parkinsonism"],
              ["With antipsychotics and other DRBAs", "Typically **2–4 weeks** after starting; usually by **3 months**"],
              ["Variants", "Rapid onset after a start or dose increase, or an insidious onset after **many months**"],
              ["Second peak", "About **1 year**, reported mainly with **calcium channel blockers**"]
            ] },
            { type: "callout", kind: "pearl", title: "How common", text: "Reported rates are distorted by the lack of standard criteria, misattribution to Lewy body disease or to a psychiatric condition, and under-recognition of mild cases. The manual’s estimate: **at least 50%** of outpatients on **long-term typical antipsychotics** develop parkinsonian signs or symptoms at some point (p. 808)." },
            { type: "callout", kind: "key", title: "Symmetry is a clue, not a rule", text: "There is **no clinical feature that reliably separates** MIP from Parkinson’s disease. Parkinson’s disease starts **unilaterally** and progresses **asymmetrically**, so a **subacute, bilateral** onset within weeks of starting a causative drug is highly suggestive of MIP; but asymmetric MIP is not uncommon and does not exclude the diagnosis (p. 808)." }
          ]
        },
        {
          id: "s21-mip-features",
          title: "Parkinsonism: tremor, rigidity, bradykinesia and their consequences",
          pages: "808–809",
          blocks: [
            { type: "p", text: "In MIP, **rigidity and bradykinesia** are the more frequent findings; **tremor is somewhat less common and may be absent** (p. 808). That ordering is the opposite of the lay image of parkinsonism and is a favorite exam point." },
            { type: "defs", title: "The three motor features (pp. 808–809)", items: [
              ["Parkinsonian (“pill-rolling”) tremor", "A steady, rhythmic oscillation at **3–6 cycles per second**, present **at rest** and slower than other tremors; it can come and go, affect one or both sides, or depend on limb position; it can involve the limbs, head, jaw, mouth, lip (**“rabbit syndrome”**) or tongue. Because it is a rest tremor it can be **suppressed** when the person uses the limb for a task; patients may report that it worsens with anxiety, stress or fatigue."],
              ["Rigidity", "Involuntary stiffness of limb, shoulder, neck or trunk muscles, assessed as resistance to passive movement. **Lead-pipe**: increased tone that is **constant through the whole range** of motion (contrast the **clasp-knife** rigidity of spasticity, which gives way). **Cogwheel**: a ratchet-like resistance, thought to be a **tremor superimposed on rigidity**, most common at the wrists and elbows. Patients report tenderness, stiffness, tightness, aching or clumsiness."],
              ["Bradykinesia and akinesia", "**Decreased** and **absent** spontaneous movement respectively: global slowing and slowness in starting and carrying out movements, so everyday tasks such as grooming suffer. Patients complain of listlessness, lack of spontaneity and drive, or fatigue."]
            ] },
            { type: "list", title: "Other signs (p. 809)", items: [
              "Gait: shorter stride, reduced arm swing, less spontaneous walking; **hunched posture** with bent neck and stooped shoulders; **staring** face; small **shuffling** steps.",
              "**Drooling** from reduced pharyngeal activity and swallowing, but **less common with antipsychotics** because of their anticholinergic properties.",
              "**Micrographia**, reduced dexterity, **hypophonia**, reduced gag reflex, **dysphagia**, **postural instability**, reduced facial expression and blinking, **seborrhea**.",
              "Behavioral accompaniments: **depression** and **worsening of the negative signs** of schizophrenia."
            ] },
            { type: "callout", kind: "caution", title: "Why it matters in older people", text: "MIP goes with more **gait dysfunction, falls and nursing home placement**; the manual calls it a serious iatrogenic movement disorder in older individuals that deserves early diagnosis. With severe akinesia the medical complications are those of immobility: contractures and pressure sores, pulmonary emboli, incontinence, aspiration pneumonia, loss of weight and fractured hips (p. 809)." },
            { type: "table", caption: "Risk factors the manual calls consistent (p. 809)", head: ["Raises the risk", "Lowers the risk"], rows: [
              ["**Female** gender, **older** age, **cognitive impairment**, other neurological conditions, **HIV infection**, family history of Parkinson’s disease, severe psychiatric disease; also reported in **children** on antipsychotics", "Taking **anticholinergic** medication"]
            ] }
          ]
        },
        {
          id: "s21-mip-differential",
          title: "Parkinsonism: the differential",
          pages: "809–810",
          blocks: [
            { type: "table", caption: "Look-alikes and how the manual separates them (pp. 809–810)", head: ["Condition", "Points toward it rather than MIP"], rows: [
              ["[[dx:ncd-parkinsons|Parkinson’s disease]] and Parkinson-plus conditions (multiple system atrophy, progressive supranuclear palsy, Wilson’s disease)", "Their **other** signs: for Parkinson’s disease, **three or more cardinal features** (rest tremor, rigidity, bradykinesia, postural instability), **hyposmia**, sleep disturbance such as **REM sleep behavior disorder**, urinary and other **autonomic** symptoms; these are less likely in MIP. People with primary parkinsonism also worsen on MIP-causing drugs."],
              ["Nonparkinsonian tremors", "**Finer** (smaller amplitude) and **faster** (about **10 Hz**), and **worse on intention**, such as reaching for an object."],
              ["Substance withdrawal tremor", "Comes with **hyperreflexia** and **autonomic** signs."],
              ["Cerebellar tremor", "Worse on intention, with **nystagmus, ataxia or scanning speech**."],
              ["[[dx:tardive-dyskinesia|Tardive dyskinesia]]", "Choreiform movements **lack the steady rhythm** of a parkinsonian tremor."],
              ["Stroke and other CNS lesions", "Focal signs, or paralysis with **reduced strength** and **clasp-knife** tone; MIP has **lead-pipe** rigidity and **normal strength**."],
              ["[[dx:nms|Neuroleptic malignant syndrome]]", "Severe akinesia and rigidity **plus fever and raised creatine phosphokinase**."],
              ["[[dx:mdd|Major depressive disorder]]", "Psychomotor slowing can be indistinguishable from MIP akinesia, but depression more often brings **vegetative signs** (early-morning waking), **hopelessness** and despair."],
              ["Negative symptoms, [[dx:catatonia-associated|catatonia]] and catatonic mood disorders", "Can be hard to separate from medication-induced akinesia; look for the full parkinsonian constellation on examination."],
              ["Rigidity in psychiatric and other conditions", "Psychotic disorders, delirium, major NCD, anxiety disorders and functional neurological symptom disorder can show rigidity, but it is **inconsistent** through the range of motion; parkinsonian rigidity is **constant**."]
            ] },
            { type: "callout", kind: "exam", title: "Red flags that argue against MIP (p. 809)", text: "A **family history** of inherited neurological disease; parkinsonism that **progresses rapidly** without a recent medication change; or **focal neurological signs** (frontal release signs, cranial nerve findings, a positive **Babinski** sign)." },
            { type: "case", title: "Clinical vignette", text: "A 68-year-old woman with schizophrenia started risperidone 3 weeks ago. She now walks with small steps and no arm swing, her face is expressionless, and both arms show constant resistance to passive movement with a ratchet-like quality at the wrists. There is a mild rest tremor of the right hand that disappears when she reaches for a cup. Smell is normal, she has no dream-enactment behavior, and the signs appeared on both sides at once.", point: "**Medication-induced parkinsonism, G21.11**: bilateral subacute onset within weeks of a high-D2-potency agent, lead-pipe plus cogwheel rigidity, bradykinesia, a 3–6 Hz rest tremor suppressed by action, and none of the Parkinson’s disease pointers (unilateral onset, hyposmia, REM sleep behavior disorder) (pp. 808–810). Her age and sex are risk factors (p. 809)." }
          ]
        },
        {
          id: "s21-nms",
          title: "Neuroleptic malignant syndrome: the picture",
          pages: "810",
          blocks: [
            { type: "criteria", title: "Neuroleptic malignant syndrome in brief (a description, not a criteria set)", code: "G21.0", pages: "810", items: [
              ["Exposure", "A **dopamine antagonist** generally within the **72 hours** before symptoms begin."],
              ["Hyperthermia", "**Above 100.4 °F / 38.0 °C** on **at least two** oral measurements, with **profuse sweating**: the feature that sets NMS apart from the other neurological side effects of DRBAs. Extreme temperatures, reflecting failed central thermoregulation, support the diagnosis more strongly."],
              ["Rigidity", "**Generalized**, “lead pipe” at its most severe, usually **unresponsive to antiparkinsonian drugs**: a cardinal feature. Tremor, sialorrhea, akinesia, dystonia, trismus, myoclonus, dysarthria, dysphagia and rhabdomyolysis may accompany it."],
              ["Mental status", "**Delirium or altered consciousness** from stupor to coma, often an **early** sign; the person may look alert but dazed and unresponsive, like catatonic stupor."],
              ["Autonomic activation and instability", "**Tachycardia** (more than **25%** above baseline), sweating, **blood pressure** raised (systolic or diastolic **≥25%** above baseline) or fluctuating (**≥20 mmHg diastolic** or **≥25 mmHg systolic** change within 24 hours), urinary incontinence, pallor; may appear at any time and give an early clue."],
              ["Respiration", "**Tachypnea** (more than **50%** above baseline) is common; respiratory distress from acidosis, hypermetabolism, chest wall restriction, aspiration or emboli can end in **sudden respiratory arrest**."],
              ["Laboratory", "**Creatine kinase at least 4 times** the upper limit of normal is common; also leukocytosis, metabolic acidosis, hypoxia, **low serum iron**, raised muscle enzymes and catecholamines. CSF and imaging usually normal; EEG shows **generalized slowing**. **No single finding is specific.**"]
            ] },
            { type: "callout", kind: "key", title: "The order of appearance", text: "**Mental status change and neurological signs usually come before the systemic signs** (p. 811). A patient on a dopamine blocker who becomes confused and rigid before the fever arrives is already a suspect; do not wait for the full picture." },
            { type: "callout", kind: "pearl", title: "Two numbers to keep straight", text: "The fever threshold is **38.0 °C (100.4 °F), measured orally, on two occasions**; the CK threshold is **four times** the upper limit of normal (p. 810). Both are typical findings in the description, not criteria: the manual stresses that no laboratory abnormality is specific." },
            { type: "case", title: "Clinical vignette", text: "A 29-year-old man with a first psychotic episode was started on intramuscular haloperidol 2 days ago with rapid dose increases. This morning he is mute and dazed with generalized stiffness that does not improve with benztropine; his temperature is 39.1 °C orally on two readings, he is drenched in sweat, his pulse has risen from 80 to 128 and his blood pressure swings by 30 mmHg systolic over the day. CK is 6 times the upper limit; white cells are raised.", point: "**Neuroleptic malignant syndrome, G21.0**: dopamine antagonist within 72 hours, hyperthermia on two oral readings with diaphoresis, generalized rigidity unresponsive to an antiparkinsonian drug, altered consciousness, autonomic instability beyond the stated thresholds and CK above four times normal (p. 810). Parenteral route and rapid titration are listed risk factors (p. 811)." }
          ]
        },
        {
          id: "s21-nms-course",
          title: "NMS: how often, how fast, how it ends, who is at risk",
          pages: "810–811",
          blocks: [
            { type: "table", caption: "The manual’s figures (pp. 810–811)", head: ["Question", "Figure"], rows: [
              ["Incidence among people treated with antipsychotics", "**0.01%–0.02%** in database studies; **0.11%** in a Hong Kong population-based study"],
              ["Onset after starting the drug", "Hours to days; some within **24 hours**, most within the **first week**, virtually all within **30 days**"],
              ["Course after stopping the drug", "**Self-limited** in most cases; mean recovery **7–10 days**; most recover within **1 week**, nearly all within **30 days**; **longer** when a **long-acting** antipsychotic is involved; residual neurological signs for weeks reported in some"],
              ["Fatality when not recognized", "**10%–20%**"],
              ["Prior episode in index cases", "**15%–20%**, suggesting an underlying vulnerability (genetic findings not replicated consistently)"],
              ["Rechallenge", "Many do not recur; some do, especially when antipsychotics are restarted **soon** after the episode"]
            ] },
            { type: "list", title: "Risk factors (p. 811)", items: [
              "Any person given an antipsychotic or other DRBA is at risk; NMS is **not specific to any diagnosis** and occurs in people with **no mental disorder** who receive dopamine antagonists.",
              "Clinical and systemic factors: **agitation, exhaustion, dehydration, iron deficiency**.",
              "Drug factors: **high-potency** antipsychotics carry more risk than low-potency and atypical agents; **partial or milder forms** may go with newer drugs, though severity varies even with older ones; **metoclopramide and prochlorperazine** used in medical settings are implicated.",
              "Administration: **parenteral** routes, **rapid titration** and **higher total doses** raise the risk, yet NMS **usually occurs within the therapeutic dose range**."
            ] },
            { type: "callout", kind: "exam", title: "Exam twist (app guidance)", text: "“NMS only happens with overdoses” and “NMS only happens with typical antipsychotics” are both false by the manual’s account: it usually occurs at therapeutic doses, nearly all DRBAs have been implicated, and the antiemetics count (p. 811)." }
          ]
        },
        {
          id: "s21-nms-differential",
          title: "NMS: the differential",
          pages: "811",
          blocks: [
            { type: "defs", title: "Three groups of look-alikes (p. 811)", items: [
              ["Serious neurological and medical conditions", "Infections of the CNS; inflammatory and autoimmune disease; status epilepticus; structural subcortical lesions; and systemic illnesses such as **pheochromocytoma, thyrotoxicosis, tetanus and heat stroke**."],
              ["Syndromes from other substances or medications", "**Serotonin syndrome**; **parkinsonian hyperthermia syndrome** after abrupt withdrawal of dopamine agonists; alcohol or sedative withdrawal; **malignant hyperthermia** during anesthesia; hyperthermia from stimulant or hallucinogen misuse; **atropine poisoning** from anticholinergics."],
              ["Malignant catatonia", "In rare cases a person with schizophrenia or a mood disorder presents with malignant catatonia that **may be indistinguishable** from NMS; some investigators regard NMS as a **drug-induced form of malignant catatonia**."]
            ] },
            { type: "table", caption: "Classic contrasts (outside the DSM; app guidance for the bedside, confirm locally)", head: ["Syndrome", "Clues that separate it from NMS"], rows: [
              ["Serotonin syndrome", "A serotonergic drug (or a new combination) rather than a dopamine blocker; onset within **hours**; **hyperreflexia, clonus, myoclonus, mydriasis, diarrhea** rather than lead-pipe rigidity and bradykinesia"],
              ["Malignant hyperthermia", "During or just after **anesthesia** with volatile agents or succinylcholine; rapid rise in temperature and CO2"],
              ["Malignant catatonia", "Catatonic signs **before** any dopamine blocker, or a history of catatonia; the manual says the two may be indistinguishable (p. 811)"],
              ["Anticholinergic toxicity", "**Dry** skin, flushed, dilated pupils, urinary retention, no rigidity; NMS patients are **sweating** (p. 810)"],
              ["Heat stroke", "Exertion or heat exposure; **dry skin**; limbs often flaccid rather than rigid"]
            ] },
            { type: "callout", kind: "caution", title: "What the manual does not say", text: "The manual does not provide a diagnostic algorithm, criteria or a treatment section for NMS. The thresholds in the description (temperature, CK, heart rate and blood pressure changes) are **characteristic findings**, and it stresses that **no single laboratory abnormality is specific** (p. 810). Treatment is covered, labeled as outside the DSM, in the chapter’s treatment section." }
          ]
        },
        {
          id: "s21-dystonia",
          title: "Medication-induced acute dystonia",
          pages: "812",
          blocks: [
            { type: "criteria", title: "Medication-induced acute dystonia in brief (a description, not a criteria set)", code: "G24.02", pages: "812", items: [
              ["Essential feature", "**Sustained abnormal muscle contractions** (increased tone) and **postures** developing in association with a medication known to cause acute dystonia."],
              ["Timing", "**At least 50%** within **24–48 hours** of starting or rapidly raising a DRBA, or of **reducing** a drug used against acute extrapyramidal symptoms (an anticholinergic); about **90%** within **5 days**."],
              ["Not better explained by", "A mental disorder (catatonia); a primary neurological or another medical condition; or a **tardive** movement disorder from medication."]
            ] },
            { type: "p", text: "Any drug that blocks **D2-like** receptors can cause an acute dystonic reaction (ADR). Most come after **antipsychotics** and after **antiemetic and promotility** agents; SSRIs, cholinesterase inhibitors, opioids and methylphenidate are also reported (p. 812)." },
            { type: "defs", title: "Where it strikes (p. 812)", items: [
              ["Distribution", "**Focal, segmental or generalized**; most often **head and neck**, but it can extend to the limbs or trunk."],
              ["Oromandibular", "Tongue protrusion, gaping or grimacing postures that impair speech (dysarthria) and swallowing (dysphagia), evolving into **trismus** (lockjaw)."],
              ["Oculogyric crisis", "Involuntary, forced, sustained **conjugate deviation of the eyes** upward, downward or sideways, lasting **minutes to hours**. **Blepharospasm** can also occur."],
              ["Cervical", "Abnormal forward, backward, lateral or twisting head positions: **antecollis, retrocollis, laterocollis, torticollis**."],
              ["Limb and trunk", "Focal limb dystonia, generally more **distal**; **Pisa syndrome** (lateral trunk bending with a lean to one side); back arching that can become **opisthotonos**."],
              ["Laryngeal", "**Life-threatening**: airway obstruction, with the person “clutching the throat”, **stridor**, a changed voice, trouble swallowing, breathlessness and respiratory distress as the vocal cords and laryngeal muscles are affected."]
            ] },
            { type: "list", title: "Consequences and risk (p. 812)", items: [
              "**Fear and anxiety** are common, from the intensity, the loss of control and any trouble breathing, speaking or swallowing; **pain or cramps** in affected muscles; people not warned in advance are especially distressed, which raises later **nonadherence**.",
              "In psychosis, the dystonia can be **misread as a symptom of the illness** by the patient or by others, leading to a **higher dose** of the causative drug.",
              "Risk is greatest in **children** and in adults **younger than 40** with psychosis; **males** more than females in both groups; **prior dystonic reactions**; **high-potency typical** antipsychotics."
            ] },
            { type: "case", title: "Clinical vignette", text: "A 22-year-old man received intramuscular haloperidol in the emergency department for agitation 18 hours ago. He now has his eyes fixed upward, his neck twisted to the left and his jaw clenched; he is frightened, points at his throat and is drooling, with normal temperature and no generalized rigidity.", point: "**Medication-induced acute dystonia, G24.02**: oculogyric crisis, torticollis and trismus within 24–48 hours of a high-potency DRBA in a young man, a high-risk group (adults under 40, especially male; p. 812). Throat involvement is a warning: laryngeal dystonia obstructs the airway (p. 812). No fever and no generalized rigidity argue against NMS (p. 813)." }
          ]
        },
        {
          id: "s21-dystonia-differential",
          title: "Acute dystonia: the differential",
          pages: "812–813",
          blocks: [
            { type: "table", caption: "What else produces dystonia or looks like it (pp. 812–813)", head: ["Condition", "Separating features"], rows: [
              ["Primary neurological or medical dystonia", "**Time course**: dystonia that **preceded** the drug or **progresses without** a medication change; possibly **focal neurological signs**; idiopathic focal or segmental dystonias persist for **days to weeks** regardless of medication; a **family history** of dystonia"],
              ["[[dx:tardive-dystonia|Tardive dystonia]]", "**Not acute** in onset; may surface when the antipsychotic dose is **lowered**"],
              ["Other neurological conditions and endocrinopathies", "Seizures, viral and bacterial infections, trauma, space-occupying lesions; **hypoparathyroidism** producing **tetany**"],
              ["Mimics", "**Anaphylaxis**, **tardive laryngeal dystonia**, **respiratory dyskinesia**"],
              ["[[dx:nms|Neuroleptic malignant syndrome]]", "Can include dystonia, but adds **fever** and **generalized rigidity**"],
              ["[[dx:catatonia-associated|Catatonia]] with a mood disorder or schizophrenia", "The **temporal** relationship (dystonia before the antipsychotic), **no response** to lowering the dose or giving an anticholinergic; and demeanor: people with acute dystonia are **distressed and seek help**, whereas those with retarded-type catatonia are typically **mute, withdrawn and express no distress**"]
            ] },
            { type: "callout", kind: "pearl", title: "The response test", text: "The manual uses **response to intervention** as evidence: improvement after lowering the dose or giving an anticholinergic supports a medication-induced dystonia, and its absence points toward catatonia (p. 813). In practice this is also how the diagnosis is confirmed at the bedside (app guidance)." }
          ]
        },
        {
          id: "s21-akathisia",
          title: "Medication-induced acute akathisia",
          pages: "813–814",
          blocks: [
            { type: "criteria", title: "Medication-induced acute akathisia in brief (a description, not a criteria set)", code: "G25.71", pages: "813", items: [
              ["Subjective", "Complaints of **restlessness**: an inner restlessness mostly in the **legs**, a compulsion to move them, distress when asked to keep them still, dysphoria and anxiety."],
              ["Observed (at least one)", "When seated, **fidgeting** or **leg swinging**; when standing, **rocking** from one foot to the other or “**walking on the spot**”; **pacing** to ease the restlessness; or being **unable to stay seated or standing still** for several minutes or more. In the most severe form the person cannot hold any position for more than a few seconds."],
              ["Timing", "Typically within **4 weeks** of starting or raising a causative drug; occasionally after **reducing** an anticholinergic used against acute extrapyramidal symptoms."],
              ["Causative drugs", "Antipsychotics and other DRBAs, **tricyclic antidepressants**, **SSRIs**, **dopamine agonists**, **calcium channel blockers**."],
              ["Not better explained by", "A mental disorder (schizophrenia, substance withdrawal, agitation of a depressive or manic episode, ADHD hyperactivity) or a neurological or medical condition (**Parkinson’s disease**, **iron-deficiency anemia**)."]
            ] },
            { type: "list", title: "Why it matters (pp. 813–814)", items: [
              "The distress is **significant** and drives **nonadherence** to antipsychotic or antidepressant treatment.",
              "Associated with **dysphoria, irritability, aggression and suicide attempts**.",
              "Worsening psychosis or behavioral dyscontrol can prompt a **dose increase**, which **worsens** the akathisia.",
              "Can develop **very rapidly**; appears **dose dependent** and more frequent with **high-potency** drugs or those with high affinity for central dopamine receptors; **persists** while the drug continues, with fluctuating intensity.",
              "Reported prevalence on antipsychotics or other DRBAs: **20%–75%**, the range reflecting inconsistent definitions, prescribing practices, study design and populations."
            ] },
            { type: "callout", kind: "key", title: "The dose-change clue (p. 814)", text: "Raising the antipsychotic dose **often worsens akathisia** but **often temporarily relieves tardive dyskinesia**. The time course of symptoms relative to dose changes is the manual’s tool for separating the two." },
            { type: "case", title: "Clinical vignette", text: "A 34-year-old woman started aripiprazole 10 days ago for bipolar depression. She says she cannot sit through a meal because of an unbearable urge to move her legs, paces the ward, and describes the feeling as unlike any anxiety she has known. Seated, she swings her legs constantly. Mood is not elevated; there is no psychosis; ferritin is normal and there is no parkinsonism.", point: "**Medication-induced acute akathisia, G25.71**: subjective restlessness plus observed leg swinging and pacing within 4 weeks of a new dopamine-acting drug, with the medical and psychiatric look-alikes excluded (pp. 813–814). Her remark that it feels **different from previous feelings** is the manual’s own clue (p. 814)." }
          ]
        },
        {
          id: "s21-akathisia-differential",
          title: "Akathisia: the differential",
          pages: "814",
          blocks: [
            { type: "table", caption: "Restlessness that is not medication-induced acute akathisia (p. 814)", head: ["Condition", "Separating features"], rows: [
              ["Neurological and medical restlessness: [[dx:ncd-parkinsons|Parkinson’s disease]], iron-deficiency anemia", "Phenomenologically **similar**; the **abrupt** appearance soon after a medication start or increase usually marks the medication-induced form"],
              ["SSRI-induced akathisia", "Appears **identical** in phenomenology and treatment response to the DRBA form; it is still medication-induced acute akathisia"],
              ["[[dx:tardive-dyskinesia|Tardive dyskinesia]]", "Often has a component of **generalized restlessness** and may **coexist**; separated by the **nature of the movements** and their **relationship to the start** of medication; a **dose increase worsens akathisia but temporarily relieves TD**"],
              ["Agitation of a mental disorder: depressive or manic episode, [[dx:gad|GAD]], psychotic disorders, [[dx:adhd|ADHD]], [[dx:major-ncd|major NCD]], [[dx:delirium|delirium]], [[dx:stimulant-intox|cocaine intoxication]], [[dx:opioid-withdrawal|opioid withdrawal]]", "Onset **before** the causative drug, **no** increase with higher doses, **no relief** from lowering the dose or from anti-akathisia treatment; some patients can tell akathisia apart as **different** from feelings they have had before"]
            ] },
            { type: "callout", kind: "exam", title: "Exam twist (app guidance)", text: "“Restless legs” at night with relief on walking in a person on no new medication is [[dx:rls|restless legs syndrome]] (Chapter 12), not akathisia; the manual lists Parkinson’s disease and iron deficiency as the medical akathisia look-alikes (p. 814) and RLS has its own criteria. In the hub, see [[page:complaints/leg-restlessness|restless legs at night]]." }
          ]
        }
      ]
    },
    {
      title: "Tardive syndromes",
      sections: [
        {
          id: "s21-td",
          title: "Tardive dyskinesia: features and time rules",
          pages: "814–815",
          blocks: [
            { type: "criteria", title: "Tardive dyskinesia in brief (a description, not a criteria set)", code: "G24.01", pages: "814–815", items: [
              ["Essential feature", "Abnormal, **involuntary movements of the tongue, jaw, trunk or extremities** developing with the use of medications that block **postsynaptic dopamine receptors**: first- and second-generation antipsychotics and other drugs such as **metoclopramide**."],
              ["Duration", "Movements present for **at least 4 weeks**."],
              ["Character", "**Choreiform** (rapid, jerky, nonrepetitive), **athetoid** (slow, sinuous, continual) or **semirhythmic** (stereotypies); distinctly different from the **3–6 Hz rhythmic tremor** of parkinsonism."],
              ["Onset window", "During exposure, or within **4 weeks** of withdrawal from an **oral** agent (**8 weeks** from a **long-acting injectable**)."],
              ["Exposure history", "The causative drug must have been taken for **at least 3 months**, or **1 month** in people **aged 60 or older**."],
              ["Caution", "Any dyskinesia in a person on antipsychotics is **not necessarily** tardive dyskinesia."]
            ] },
            { type: "defs", title: "Where the movements are (p. 815)", items: [
              ["Orofacial", "The most obvious manifestation, seen in **most** affected people."],
              ["Limbs", "About **one half** have limb involvement."],
              ["Axial", "Up to **one quarter** have dyskinesia of the neck, shoulders or trunk."],
              ["Other muscles", "Pharyngeal, diaphragm or abdominal involvement is **uncommon**, especially without orofacial, limb or trunk dyskinesia."],
              ["Age pattern", "Limb or trunk dyskinesia **without** orofacial movements may be more common in **younger** people; orofacial dyskinesia is typical in **older** people."]
            ] },
            { type: "compare", title: "What makes TD worse and what hides it (p. 815)", items: [
              { title: "Worsens", color: "mech", points: ["**Stimulants**", "**Antipsychotic withdrawal**", "**Anticholinergics** such as benztropine (used for parkinsonism)", "Transiently: emotional arousal, stress, distraction by voluntary movement of **unaffected** parts"] },
              { title: "Reduces", color: "guide", points: ["**Relaxation**", "Voluntary movement of the **affected** parts", "**Sleep** (movements generally absent)", "A **higher antipsychotic dose**, at least temporarily"] }
            ] },
            { type: "callout", kind: "exam", title: "Exam twist (app guidance)", text: "The dose paradox cuts both ways: raising the antipsychotic **suppresses** TD for a while (p. 815), which is why a patient whose dose was just increased may look better, and why a dose **reduction or withdrawal** can **unmask** it; the manual therefore allows the diagnosis to be made within 4 weeks of stopping an oral agent and 8 weeks of stopping a depot (p. 815)." },
            { type: "case", title: "Clinical vignette", text: "A 66-year-old man has taken haloperidol for 9 years. For the past 2 months his wife has noticed lip smacking, tongue twisting and chewing movements that stop when he sleeps and briefly settle when he is asked to tap his fingers. There is no rigidity and no rhythmic tremor; he is unaware of the movements.", point: "**Tardive dyskinesia, G24.01**: choreoathetoid orofacial movements for more than 4 weeks after years of a D2 blocker, absent in sleep, reduced by voluntary movement of the affected area, and unlike the 3–6 Hz tremor of parkinsonism (pp. 814–815). Age and cumulative exposure are the most important risk factors (p. 815); insidious onset that escapes the patient is typical (p. 815)." }
          ]
        },
        {
          id: "s21-td-risk",
          title: "Tardive dyskinesia: how common, who is at risk, how it runs",
          pages: "815–816",
          blocks: [
            { type: "table", caption: "The manual’s figures (p. 815)", head: ["Measure", "Figure"], rows: [
              ["Prevalence with long-term antipsychotic treatment", "**20%–30%**"],
              ["Incidence in younger people", "**3%–5% per year**"],
              ["Middle-aged and elderly people", "Prevalence reported up to **50%**; incidence **25%–30%** after an average **1 year** of cumulative exposure"],
              ["Setting", "More common among **chronically institutionalized** people"],
              ["Why figures vary", "Inconsistent definitions, prescribing practices, study design, population demographics"]
            ] },
            { type: "list", title: "Risk factors (p. 815)", items: [
              "**No obvious gender difference**, though the risk may be somewhat greater in **postmenopausal women**.",
              "The two most consistent: **greater cumulative antipsychotic exposure** and **early acute extrapyramidal side effects** such as medication-induced parkinsonism.",
              "In some groups: **mood disorders (especially major depressive disorder)**, neurological conditions, **alcohol use disorder**.",
              "**Second-generation** antipsychotics carry a somewhat **lower** incidence than first-generation drugs, but the gap is **smaller than once thought**, especially once first-generation **dose** is allowed for; what matters most is **age** and **cumulative exposure**."
            ] },
            { type: "flow", title: "Course (pp. 815–816)", vertical: true, steps: [
              ["Onset", "Any age; almost always **insidious**; minimal to mild at first and missed except by a keen observer"],
              ["Usual severity", "Objectively mild, once thought merely cosmetic, yet linked to **distress and social avoidance**"],
              ["Severe cases", "Cheek and tongue ulcers, tooth loss, macroglossia, difficulty walking, swallowing or breathing, muffled speech, weight loss, **depression, suicidal ideation**"],
              ["With continued use in older people", "More likely to become **more severe or generalized**"],
              ["After stopping", "Some **improve** over time; for others TD is **enduring**"]
            ] },
            { type: "update", kind: "post", year: "2017", title: "A figure beyond the manual (outside the DSM)", text: "A 2017 meta-analysis of 41 studies (Carbon et al., J Clin Psychiatry) found an overall TD prevalence of **25.3%**, **30.0%** with current first-generation and **20.7%** with current second-generation antipsychotics, consistent with the manual’s 20%–30% and its remark that the generation gap is smaller than once thought. Modeled estimates for US antipsychotic users presented in 2024 were lower (about 9%–13%). App note; not DSM text.", source: "Carbon M, et al. J Clin Psychiatry 2017;78(3):e264–e278; APA 2024 poster (Thompson et al.) as reported by Psychiatric Times; checked October 27, 2026" }
          ]
        },
        {
          id: "s21-td-differential",
          title: "Tardive dyskinesia: the differential and the treatment trap",
          pages: "816",
          blocks: [
            { type: "callout", kind: "caution", title: "Why TD and parkinsonism must not be confused (p. 816)", text: "The treatments cross: **anticholinergics** given for medication-induced parkinsonism **worsen** tardive dyskinesia, and **VMAT2 inhibitors** given for tardive dyskinesia **worsen** medication-induced parkinsonism. The manual calls the distinction imperative." },
            { type: "table", caption: "Other causes of orofacial and body dyskinesia (p. 816)", head: ["Condition", "Notes"], rows: [
              ["Withdrawal dyskinesia", "Dyskinesia that emerges during withdrawal from a DRBA **may remit** as withdrawal continues; if it persists **at least 4 weeks**, TD may be warranted"],
              ["Neurological and systemic disease", "[[dx:ncd-huntingtons|Huntington’s disease]]; Wilson’s disease; **Sydenham’s chorea** (rheumatic); lupus (SLE); thyrotoxicosis; poisoning by heavy metals"],
              ["Mechanical", "**Ill-fitting dentures**"],
              ["Other drugs", "Dyskinesia from **L-dopa** or **bromocriptine**"],
              ["Spontaneous dyskinesia", "Occurs in **more than 5%** of people, more in the elderly, which can make causation hard to prove in an individual"],
              ["Clues to another cause", "Symptoms that **preceded** the DRBA, or **focal neurological signs**; other movement disorders may **coexist** with TD"]
            ] },
            { type: "ladder", title: "Onset after a dopamine blocker: the acute-to-tardive spectrum (p. 816)", ticks: [[0, "0"], [15, "days"], [40, "weeks"], [100, "months–years"]], rows: [
              { label: "Acute dystonia", span: [0, 12], note: "Hours to days" },
              { label: "Acute akathisia", span: [0, 30], note: "Hours to days; within 4 weeks" },
              { label: "Parkinsonism", span: [15, 45], note: "Weeks; usually by 3 months" },
              { label: "Tardive dyskinesia", span: [55, 100], note: "Months to years; ≥3 months’ exposure (1 month at ≥60); may appear after withdrawal" }
            ] },
            { type: "callout", kind: "pearl", title: "The minimum exposure, restated", text: "The differential section repeats the exposure rule with slightly different wording: at least **3 months** of antipsychotic use, or **1 month in middle-aged and elderly** individuals (p. 816), where the feature section says **60 years or older** (p. 815). Quote the 60-year figure when a number is asked for; the manual gives it only there." }
          ]
        },
        {
          id: "s21-tardive-other",
          title: "Tardive dystonia and tardive akathisia",
          pages: "816",
          blocks: [
            { type: "criteria", title: "The other tardive syndromes in brief", code: "G24.09 / G25.71", pages: "816", items: [
              ["What", "Tardive syndromes with **other** types of movement problem, such as **dystonia** or **akathisia**."],
              ["Distinguishing features", "**Late emergence** in the course of treatment, and **potential persistence for months to years**, even after the antipsychotic or other DRBA is **discontinued** or the **dose is reduced**."],
              ["Codes", "**G24.09** tardive dystonia; **G25.71** tardive akathisia, the **same code** as medication-induced acute akathisia."]
            ] },
            { type: "compare", title: "Acute versus tardive, the same movement", items: [
              { title: "Acute dystonia / acute akathisia", color: "mech", points: ["Within **hours to days** (dystonia) or **4 weeks** (akathisia) of a start or dose increase.", "Usually responds to dose reduction or antidotes (p. 813, app note).", "G24.02 / G25.71."] },
              { title: "Tardive dystonia / tardive akathisia", color: "guide", points: ["**Late** in treatment.", "May **persist** for months to years despite stopping or reducing the drug.", "Tardive dystonia may become evident when the dose is **lowered** (p. 813).", "G24.09 / G25.71."] }
            ] },
            { type: "callout", kind: "exam", title: "Coding trap (app guidance)", text: "**G25.71** covers both acute and tardive akathisia; the written diagnosis distinguishes them. Tardive dystonia has its own code, **G24.09**, different from acute dystonia’s **G24.02** and from tardive dyskinesia’s **G24.01** (p. 816)." }
          ]
        }
      ]
    },
    {
      title: "Tremor, other conditions and discontinuation",
      sections: [
        {
          id: "s21-tremor",
          title: "Medication-induced postural tremor",
          pages: "817",
          blocks: [
            { type: "criteria", title: "Medication-induced postural tremor in brief (a description, not a criteria set)", code: "G25.1", pages: "817", items: [
              ["Essential feature", "A **fine tremor** during attempts to **maintain a posture**, developing with the use of a medication."],
              ["Character", "Regular, rhythmic oscillation of the limbs (most often hands and fingers), head, mouth or tongue, usually **8–12 cycles per second**; easiest to see with the **hands outstretched** or the **mouth held open**; may worsen with intentional movement (**kinetic or action** tremor)."],
              ["Causative drugs", "**Lithium**, **β-adrenergic** drugs (isoproterenol), **stimulants** (amphetamine), **dopaminergic** drugs, **anticonvulsants** (valproic acid), **antidepressants**, **methylxanthines** (caffeine, theophylline)."],
              ["Not diagnosed when", "The tremor is better accounted for by **medication-induced parkinsonism**, or is a **preexisting** tremor (such as essential tremor) that the drug merely worsens."]
            ] },
            { type: "callout", kind: "pearl", title: "If you cannot see it, provoke it", text: "When the person describes a postural tremor that is not present in the room, the manual suggests **re-creating the situation**, for example drinking from a cup and saucer (p. 817)." },
            { type: "defs", title: "Lithium tremor, the best-studied example (p. 817)", items: [
              ["Usual course", "Common, usually **benign** and well tolerated at therapeutic doses, but a cause of social embarrassment, occupational difficulty and **nonadherence** in some; complaints tend to **decrease with duration** of treatment; nontoxic tremor may improve on its own."],
              ["Warning sign", "As serum lithium approaches **toxic** levels the tremor becomes **coarser**, with **muscle twitching, fasciculations or ataxia**."],
              ["Risk factors", "Older age, **high serum levels**, concurrent antidepressant, antipsychotic or other DRBA, **excessive caffeine**, personal or family history of tremor, alcohol use disorder, anxiety."],
              ["Exacerbating factors", "Anxiety, stress, fatigue, **hypoglycemia, thyrotoxicosis, pheochromocytoma, hypothermia** and **alcohol withdrawal**; a tremor may also be one of the **first signs of serotonin syndrome**."]
            ] },
            { type: "table", caption: "Postural tremor versus the parkinsonian tremor (p. 817)", head: ["Feature", "Medication-induced postural tremor", "Tremor of medication-induced parkinsonism"], rows: [
              ["Frequency", "**8–12 Hz**", "**3–6 Hz**"],
              ["At rest", "Usually **absent**", "**Worst** at rest"],
              ["On action or posture", "**Intensifies**", "**Suppressed** by intentional movement"],
              ["Company", "Often alone", "With **akinesia and rigidity**"]
            ] },
            { type: "list", title: "Differential (p. 817)", items: [
              "A **preexisting** tremor: look at the temporal relationship to the drug, the lack of correlation with **serum levels**, and persistence after the drug is stopped. Essential tremor made worse by a drug is **not** medication-induced postural tremor.",
              "The exacerbating factors listed above can cause tremor **on their own**, independent of the medication.",
              "**Medication-induced parkinsonism**, by frequency, rest behavior and accompanying signs."
            ] }
          ]
        },
        {
          id: "s21-other-mmd",
          title: "Other medication-induced movement disorder",
          pages: "818",
          blocks: [
            { type: "criteria", title: "The residual movement category", code: "G25.79", pages: "818", items: [
              ["Use", "Medication-induced movement disorders **not captured** by the specific conditions above."],
              ["Example 1", "Presentations **resembling neuroleptic malignant syndrome** but associated with medications **other than** antipsychotics and other dopamine receptor blocking agents."],
              ["Example 2", "**Other medication-induced tardive conditions.**"]
            ] },
            { type: "callout", kind: "exam", title: "Exam twist (app guidance)", text: "An NMS-like syndrome after abrupt withdrawal of a **dopamine agonist** in Parkinson’s disease (the manual’s “parkinsonian hyperthermia syndrome”, p. 811), or after a non-DRBA drug, is coded **G25.79**, not G21.0: the G21.0 name and the manual’s description tie NMS to dopamine antagonists (p. 810)." },
            { type: "update", kind: "post", year: "2026", title: "A code the manual does not use (ICD-10-CM note)", text: "ICD-10-CM also has **G25.70**, “drug induced movement disorder, unspecified”; DSM-5-TR lists only **G25.79** (“other drug induced movement disorders”) for this category (p. 818). Record the DSM name.", source: "ICD-10-CM FY2027 tabular list as shown on icd10data.com; checked October 27, 2026" }
          ]
        },
        {
          id: "s21-discontinuation",
          title: "Antidepressant discontinuation syndrome",
          pages: "818–819",
          blocks: [
            { type: "criteria", title: "Antidepressant discontinuation syndrome in brief (a description, not a criteria set)", code: "T43.205A / D / S", pages: "818–819", items: [
              ["What", "Symptoms following **discontinuation** (or a significant dose reduction) of an antidepressant of **any type**; **no pathognomonic symptom**, the picture is vague and variable."],
              ["Timing", "Begins **2–4 days** after the last dose; usually **short-lived, no more than 2 weeks**, seldom present beyond **3 weeks**; abates with **very gradual** dose reduction."],
              ["SSRI picture", "**Dizziness, tinnitus, “electric shock”–like sensations, insomnia, acute anxiety**."],
              ["TCA picture", "**Gastrointestinal cramping** (cholinergic rebound after stopping an anticholinergic drug) and **rebound hypomania**."],
              ["Exclusion", "The antidepressant use before stopping must **not** have produced **hypomania or a mixed state**: the syndrome should not be a fluctuation of mood stability caused by the earlier treatment."],
              ["Codes", "**T43.205A** initial encounter, **T43.205D** subsequent encounter, **T43.205S** sequelae."]
            ] },
            { type: "defs", title: "Who gets it (pp. 818–819)", items: [
              ["Half-life", "Incidence depends on the **dose**, the **half-life** and the **rate of taper**. **Short half-life** drugs stopped abruptly may carry the greatest risk; **paroxetine** and **venlafaxine** are the agents most often implicated; **fluoxetine**, with its long half-life, seldom causes significant effects."],
              ["Intermittent nonadherence", "The syndrome can appear **irregularly in people who have not stopped** the drug, especially with very short half-life agents such as venlafaxine."],
              ["Receptor and metabolism", "More likely with **serotonin reuptake inhibitors**; possibly more frequent in **rapid or ultrarapid metabolizers** of the relevant cytochrome enzymes. Prevalence is **unknown**; longitudinal data are lacking."]
            ] },
            { type: "callout", kind: "key", title: "Not a withdrawal syndrome in the substance sense (pp. 818–819)", text: "The syndrome rests on **pharmacological** factors alone: antidepressants have **no reinforcing or euphoric effects**, there is **no craving**, people do not **escalate** doses or **drug-seek**, and **substance use disorder criteria are not met**. If a **stimulant** was used to augment the antidepressant and is stopped abruptly, the picture is [[dx:stimulant-withdrawal|stimulant withdrawal]] (Chapter 16), not this syndrome." },
            { type: "table", caption: "Differential (p. 819)", head: ["Alternative", "How to think about it"], rows: [
              ["**Relapse** of the treated disorder (depression, [[dx:panic-disorder|panic disorder]])", "Discontinuation symptoms often **resemble** a persistent anxiety disorder or returning somatic symptoms of depression; the manual stresses not to confuse the two. Timing (2–4 days, fading within weeks) and the odd somatic and sensory symptoms point to discontinuation (app reading)"],
              ["[[dx:ssd|Somatic symptom disorder]]", "A longer-standing pattern of distressing somatic symptoms and related thoughts"],
              ["[[dx:bipolar-i|Bipolar I]] or [[dx:bipolar-ii|bipolar II]] disorder with mixed features", "Mood instability that the earlier antidepressant use may have unmasked; the syndrome is not diagnosed if the treatment caused hypomania or a mixed state"],
              ["Substance use disorders", "Reinforcement, craving, dose escalation and drug-seeking, all absent here"],
              ["Migraine, cerebrovascular accident", "Neurological explanations for dizziness and sensory symptoms"]
            ] },
            { type: "update", kind: "post", year: "2025", title: "What newer evidence adds (outside the DSM)", text: "The manual says prevalence is unknown (p. 818). Two large syntheses since: a 2024 Lancet Psychiatry meta-analysis of 79 studies (16,532 people stopping antidepressants) estimated that about **1 in 6** (≈15%, placebo-adjusted) have at least one discontinuation symptom and about **3%** severe symptoms, with **desvenlafaxine, venlafaxine, imipramine and paroxetine** among the highest; a 2025 JAMA Psychiatry meta-analysis of 50 randomized trials (17,828 participants) found on average about **one extra symptom** compared with placebo, **dizziness** the most frequent (≈6% placebo-adjusted, highest with venlafaxine), no worsening of mood attributable to stopping in the first weeks, and follow-up mostly under 2 weeks, so prolonged syndromes were not assessed. The **FINISH** mnemonic (Berber, 1998) summarizes the symptom groups: flu-like symptoms, insomnia, nausea, imbalance, sensory disturbances, hyperarousal. Taper rather than stop, and taper slowly with short half-life agents (app guidance).", source: "Henssler J, et al. Lancet Psychiatry 2024; Kalfas M, et al. JAMA Psychiatry 2025 (online July 9, 2025); Berber MJ. J Clin Psychiatry 1998;59:255; checked October 27, 2026" },
            { type: "case", title: "Clinical vignette", text: "A 41-year-old woman stopped venlafaxine 150 mg abruptly 3 days ago when her prescription ran out. She reports dizziness, brief electric-shock sensations in her head when she turns, nausea, poor sleep and a surge of anxiety. Her mood is not low, she has no suicidal thoughts, and she has never had hypomania.", point: "**Antidepressant discontinuation syndrome, T43.205A** (initial encounter): onset 2–4 days after stopping a short half-life serotonergic drug, the SSRI/SNRI-type symptoms, no mood relapse and no history of hypomania (pp. 818–819). Restarting and tapering slowly is the usual remedy (outside the DSM)." }
          ]
        },
        {
          id: "s21-adverse",
          title: "Other adverse effect of medication",
          pages: "819",
          blocks: [
            { type: "criteria", title: "The optional adverse-effect code", code: "T50.905A / D / S", pages: "819", items: [
              ["Use", "An **optional** code for side effects of medication **other than movement symptoms** when they become a **main focus of clinical attention**."],
              ["Examples", "**Severe hypotension, cardiac arrhythmias, priapism.**"],
              ["Seventh character", "**A** initial encounter, **D** subsequent encounter, **S** sequelae."]
            ] },
            { type: "callout", kind: "pearl", title: "How it is used (app guidance)", text: "List it alongside the mental disorder being treated when, for instance, an antipsychotic-related arrhythmia or a trazodone-related priapism is the reason for the visit; the DSM gives no further rules. ICD-10-CM’s own instruction for T50.905 is to code the **nature of the effect first** (the arrhythmia, the priapism), which is outside the DSM text." }
          ]
        }
      ]
    },
    {
      title: "Using the chapter",
      sections: [
        {
          id: "s21-timeline",
          title: "Sorting a movement problem by time and type",
          pages: "807–819",
          blocks: [
            { type: "p", text: "Because there are no criteria, the exam and the ward both reduce to two questions: **when** did it start relative to the medication change, and **what** is the movement. The [[helper:movement|movement-disorder helper]] asks them in that order." },
            { type: "flow", title: "From a medication change to a name (pp. 812–818; app synthesis)", vertical: true, steps: [
              ["Hours to 5 days: sustained postures", "**Acute dystonia**: ≥50% within 24–48 h, ~90% within 5 days (p. 812)"],
              ["Days to 4 weeks: restlessness with movement", "**Acute akathisia**: typically within 4 weeks; worse when the dose goes up (pp. 813–814)"],
              ["Within 72 h of exposure: fever, rigidity, confusion, autonomic storm", "**Neuroleptic malignant syndrome**: most within the first week, virtually all within 30 days (pp. 810–811)"],
              ["2–4 weeks, by 3 months: slowness, rigidity, rest tremor", "**Parkinsonism**: 3–6 Hz, lead-pipe or cogwheel (pp. 808–809)"],
              ["Any time on lithium or another listed drug: fine fast tremor holding a posture", "**Postural tremor**: 8–12 Hz, absent at rest (p. 817)"],
              ["Months to years, or within 4–8 weeks of stopping: choreoathetoid movements ≥4 weeks", "**Tardive dyskinesia** (3 months’ exposure, 1 month at ≥60) (pp. 814–815)"],
              ["Late, persisting dystonia or akathisia", "**Tardive dystonia**, **tardive akathisia** (p. 816)"],
              ["2–4 days after stopping an antidepressant: dizziness, shocks, insomnia, anxiety, nausea", "**Antidepressant discontinuation syndrome** (pp. 818–819)"]
            ] },
            { type: "table", caption: "Side by side (app synthesis of pp. 807–819)", head: ["Condition", "Movement", "Onset", "Key number", "Code"], rows: [
              ["Parkinsonism", "Rigidity, bradykinesia, rest tremor", "Weeks", "**3–6 Hz**; ≥50% on long-term typicals", "G21.11 / G21.19"],
              ["NMS", "Generalized rigidity + fever + mental change + autonomic instability", "Hours to days", "**>38.0 °C** ×2; **CK ≥4×**; 0.01%–0.02%", "G21.0"],
              ["Acute dystonia", "Sustained contraction, posture", "Hours to days", "**24–48 h** (≥50%), **5 days** (90%)", "G24.02"],
              ["Acute akathisia", "Subjective restlessness + observed movement", "Days to weeks", "**4 weeks**; 20%–75%", "G25.71"],
              ["Tardive dyskinesia", "Choreiform, athetoid, stereotyped", "Months to years", "**≥4 weeks**; **3 months / 1 month**; **4 / 8 weeks** after stopping", "G24.01"],
              ["Tardive dystonia / akathisia", "Dystonia / akathisia, late and persistent", "Late", "Months to years", "G24.09 / G25.71"],
              ["Postural tremor", "Fine tremor holding a posture", "Any time", "**8–12 Hz**", "G25.1"],
              ["Discontinuation syndrome", "Not a movement disorder", "**2–4 days** after the last dose", "≤2 weeks, seldom >3", "T43.205A/D/S"]
            ] },
            { type: "callout", kind: "key", title: "Three contrasts the manual itself names (p. 807)", text: "**Anxiety disorder versus akathisia** (ask about the legs, the timing after a dose change, and whether it feels unlike past anxiety, p. 814); **malignant catatonia versus NMS** (may be indistinguishable; some call NMS a drug-induced malignant catatonia, p. 811); **tardive dyskinesia versus chorea** (Huntington’s, Sydenham’s, Wilson’s and the other causes on p. 816)." }
          ]
        },
        {
          id: "s21-coding",
          title: "Coding and recording",
          pages: "807–819",
          blocks: [
            { type: "table", caption: "Codes as printed (DSM-5-TR, 2022) with their ICD-10-CM titles (app note; record the DSM name)", head: ["DSM-5-TR name", "Code", "ICD-10-CM title"], rows: [
              ["Antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism", "G21.11", "Neuroleptic induced parkinsonism"],
              ["Other medication-induced parkinsonism", "G21.19", "Other drug induced secondary parkinsonism"],
              ["Neuroleptic malignant syndrome", "G21.0", "Malignant neuroleptic syndrome"],
              ["Medication-induced acute dystonia", "G24.02", "Drug induced acute dystonia"],
              ["Medication-induced acute akathisia", "G25.71", "Drug induced akathisia"],
              ["Tardive dyskinesia", "G24.01", "Drug induced subacute dyskinesia (tardive dyskinesia is an inclusion term)"],
              ["Tardive dystonia", "G24.09", "Other drug induced dystonia"],
              ["Tardive akathisia", "G25.71", "Drug induced akathisia"],
              ["Medication-induced postural tremor", "G25.1", "Drug-induced tremor"],
              ["Other medication-induced movement disorder", "G25.79", "Other drug induced movement disorders"],
              ["Antidepressant discontinuation syndrome", "T43.205A / D / S", "Adverse effect of unspecified antidepressants, initial / subsequent encounter / sequela"],
              ["Other adverse effect of medication", "T50.905A / D / S", "Adverse effect of unspecified drugs, medicaments and biological substances, initial / subsequent encounter / sequela"]
            ] },
            { type: "list", title: "Rules to remember", items: [
              "**Two parkinsonism codes**: G21.11 when the cause is an antipsychotic or other dopamine receptor blocking agent, G21.19 for any other medication (p. 807). Lithium-, valproate- or SSRI-induced parkinsonism is **G21.19**.",
              "**One akathisia code**: G25.71 serves acute and tardive akathisia (pp. 813, 816); the name on the record tells them apart.",
              "**Three dystonia-family codes**: G24.02 acute dystonia, G24.09 tardive dystonia, G24.01 tardive dyskinesia (pp. 812, 814, 816).",
              "**T codes need a seventh character**: **A** for the initial encounter, **D** for a subsequent encounter, **S** for sequelae (pp. 818–819). Write it; T43.205 alone is not a complete code (ICD-10-CM note).",
              "The chapter’s conditions are **not mental disorders** (p. 807): they are listed alongside the mental disorder being treated, and the DSM gives no ordering rule for them (app note)."
            ] },
            { type: "update", kind: "post", year: "2026", title: "Codes current to October 2026", source: "ICD-10-CM FY2025, FY2026 and FY2027 code tables (effective October 1 of 2024, 2025 and 2026), read on icd10data.com; APA DSM-5-TR coding updates September 2022, 2023, 2024 and 2025; checked October 27, 2026", text: "Every code in this chapter (**G21.11, G21.19, G21.0, G24.02, G25.71, G24.01, G24.09, G25.1, G25.79, T43.205A/D/S, T50.905A/D/S**) dates from FY2016 and is **unchanged through FY2027**; no new subcodes were added under G21.1, G24.0, G25.7 or T43.205. **No APA DSM-5-TR update** touches the chapter. Two ICD-10-CM conventions the DSM does not mention: G21.0 and G21.11 carry an **Excludes1** note against each other (do not code both for the same episode), and G21.0, G21.11 and G21.19 ask for an **additional adverse-effect T code** for the drug (for example T43.3X5-, T43.4X5-, T43.505-, T43.595- for antipsychotics); T50.905 asks that the **nature of the effect** be coded first. One adjacent change: the APA’s September 2023 update moved **Parkinson’s disease** from G20 to **G20.C** (Chapter 17), which matters when the diagnosis is antipsychotic-exacerbated Parkinson’s disease rather than MIP. **ICD-11** (outside the DSM): drug-induced parkinsonism is **8A00.24**; the other ICD-11 codes were not verified for this app. Confirm against the official tabular list in force on the date of service." }
          ]
        },
        {
          id: "s21-treatment",
          title: "Assessment and treatment orientation (outside the DSM)",
          pages: "807–819",
          blocks: [
            { type: "callout", kind: "caution", title: "Read this as the app’s orientation, not DSM text", text: "DSM-5-TR describes and distinguishes these conditions; it does **not** give treatment recommendations. Everything below is a dated summary of guidelines and reviews for orientation; follow the guidelines and formulary that apply where you practice, and the Stahl Study Companion for mechanisms." },
            { type: "table", caption: "Orientation to management (outside the DSM; sources dated; checked October 27, 2026)", head: ["Condition", "Usual first steps", "Source"], rows: [
              ["Parkinsonism", "Lower the dose or switch to a lower-potency antipsychotic; anticholinergic ([[stahl:drugs/benztropine|benztropine]]) or [[stahl:drugs/amantadine|amantadine]]; avoid anticholinergics if TD is present (p. 816)", "APA schizophrenia guideline, 2020; [[stahl:c/ch05/guide/s5-motor|Stahl Ch 5, motor side effects]]"],
              ["NMS", "Stop the dopamine blocker at once; intensive supportive care (cooling, fluids, monitoring for rhabdomyolysis, renal failure, emboli, aspiration); [[stahl:drugs/dantrolene|dantrolene]] or bromocriptine on case-series evidence; ECT for refractory cases or when malignant catatonia cannot be excluded; rechallenge only after a drug-free interval, with a different lower-potency agent and slow titration", "Reviews (e.g., Ann Pharmacother 2016); evidence for specific drugs is from case series only"],
              ["Acute dystonia", "Parenteral anticholinergic (benztropine) or [[stahl:drugs/diphenhydramine|diphenhydramine]]; airway first in laryngeal dystonia (p. 812); then dose reduction, switch or prophylaxis in high-risk patients", "APA 2020"],
              ["Acute akathisia", "Reduce the dose or switch; a β-blocker such as propranolol or a benzodiazepine; anticholinergics help little; watch for suicidality (p. 813)", "APA 2020"],
              ["Tardive dyskinesia", "A reversible VMAT2 inhibitor ([[stahl:drugs/valbenazine|valbenazine]], [[stahl:drugs/deutetrabenazine|deutetrabenazine]]) is recommended for moderate-to-severe or disabling TD and may be considered for mild TD; consider switching to a lower-risk antipsychotic; stop anticholinergics (p. 815); do not count on a dose increase, which only suppresses it temporarily (p. 815)", "APA 2020; FDA approvals 2017, once-daily and sprinkle formulations 2023–2024; [[stahl:c/ch05/guide/s5-td|Stahl Ch 5, TD]] and [[stahl:c/ch05/guide/s5-vmat2|VMAT2 inhibitors]]"],
              ["Postural tremor (lithium)", "Check the level; reduce the dose or split it; cut caffeine; a β-blocker if needed; coarse tremor with ataxia or twitching means check for toxicity (p. 817)", "[[stahl:c/ch07/guide/s7-lithium|Stahl Ch 7, lithium]]"],
              ["Discontinuation syndrome", "Restart and taper slowly, or switch to a long half-life agent such as [[stahl:drugs/fluoxetine|fluoxetine]] before tapering; warn patients in advance, especially on [[stahl:drugs/paroxetine|paroxetine]] or [[stahl:drugs/venlafaxine|venlafaxine]] (p. 818)", "Henssler 2024; Kalfas 2025; [[stahl:c/ch07/guide/s7-ssri|Stahl Ch 7, SSRIs]]"]
            ] },
            { type: "list", title: "Assessment habits that the manual’s text supports (app guidance)", items: [
              "Take a **medication timeline** for every new movement problem: starts, dose increases, withdrawals of anticholinergics, depot injections (pp. 807–808, 812–815).",
              "Examine for **all four** acute syndromes at once: posture and eyes (dystonia), legs (akathisia), tone and gait (parkinsonism), temperature and mental state (NMS).",
              "Ask about **adherence and distress**: parkinsonism, acute dystonia, akathisia and lithium tremor are each tied to nonadherence (pp. 807, 812, 813, 817), and akathisia to suicide attempts (p. 813).",
              "Use a **structured rating** (for example the AIMS for TD) at baseline and at intervals; the manual notes that early TD escapes all but keen observers (p. 815). The AIMS is outside the DSM.",
              "In the Philippines, FGAs such as haloperidol and chlorpromazine remain widely used in public settings and VMAT2 inhibitors are not generally available; benztropine, diphenhydramine and propranolol are the practical tools, which makes **prevention** (lowest effective dose, lower-potency choices, early recognition) the main strategy (app note; verify local formularies)."
            ] },
            { type: "update", kind: "post", year: "2024", title: "What has changed since 2022 (outside the DSM)", source: "FDA labeling for valbenazine (Ingrezza, including sprinkle capsules, 2024) and deutetrabenazine (Austedo XR, 2023); APA Practice Guideline for the Treatment of Patients With Schizophrenia, 3rd ed., 2020; Henssler et al., Lancet Psychiatry 2024; Kalfas et al., JAMA Psychiatry 2025; checked October 27, 2026", text: "No new drug approval was identified for medication-induced parkinsonism, acute dystonia or akathisia; the TD treatments remain the two 2017 VMAT2 inhibitors, now also as once-daily and sprinkle formulations. The discontinuation-syndrome literature matured with the 2024 and 2025 meta-analyses summarized in that section. None of this changes the DSM-5-TR descriptions." }
          ]
        },
        {
          id: "s21-exam",
          title: "How this chapter is tested",
          pages: "807–819",
          blocks: [
            { type: "p", text: "App guidance. With no criteria sets, questions test **numbers**, **timing**, **contrasts** and **codes**." },
            { type: "list", title: "Traps to expect", items: [
              "Calling any of these a **mental disorder**: the chapter says they are not (p. 807).",
              "Diagnosing NMS **without the fever**, or missing it because the fever has not yet arrived: mental status change and neurological signs usually come first (p. 811).",
              "Expecting a **tremor** in every case of parkinsonism: rigidity and bradykinesia are the more frequent features and tremor may be absent (p. 808).",
              "Mixing the tremor frequencies: **3–6 Hz** parkinsonian rest tremor, **8–12 Hz** postural tremor, about **10 Hz** for other nonparkinsonian tremors (pp. 808, 809, 817).",
              "Mixing the TD time rules: movements **≥4 weeks**; exposure **≥3 months** (**1 month** at 60 or older); diagnosable within **4 weeks** of stopping an oral drug and **8 weeks** of stopping a depot (p. 815).",
              "Giving an **anticholinergic** for TD or a **VMAT2 inhibitor** for parkinsonism (p. 816).",
              "Reading **akathisia** as anxiety or psychotic agitation and **raising the dose** (pp. 813–814).",
              "Treating **antidepressant discontinuation** as substance withdrawal or as relapse (p. 819), or forgetting that a stopped stimulant augmenter gives **stimulant withdrawal** (p. 818).",
              "Forgetting the **seventh character** on T43.205 and T50.905 (pp. 818–819), or that **G25.71** is shared by acute and tardive akathisia (p. 816).",
              "Assuming **SGAs** cannot cause these syndromes: the manual says they still occur, and the TD gap between generations is smaller than once thought (pp. 807, 815)."
            ] },
            { type: "callout", kind: "mnemonic", title: "One line for the time course (app, original)", text: "**“Dystonia in days, akathisia in weeks, parkinsonism by three months, tardive after months, and the fever within 72 hours.”** Check against pp. 808–815: ≥50% of dystonias within 24–48 h and 90% within 5 days; akathisia typically within 4 weeks; parkinsonism 2–4 weeks and usually by 3 months; TD after ≥3 months of exposure; NMS after exposure within the preceding 72 hours." }
          ]
        }
      ]
    }
  ]
});
