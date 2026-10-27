/* Disorder library: Chapter 21, Medication-Induced Movement Disorders and Other Adverse Effects of Medication
   (DSM-5-TR pp. 807–820). Codes as printed in the 2022 manual; checked against ICD-10-CM through FY2027 (October 1,
   2026): every code in the chapter dates from FY2016 and is unchanged (secondary code pages agreeing; confirm against
   the official tabular list). No APA DSM-5-TR update touches this chapter (checked October 27, 2026). These conditions
   are NOT mental disorders and have NO criteria sets (p. 807): each entry's `criteria` holds the manual's essential
   features, time rules and exclusions as labeled items, and `duration` holds the time rule. Treatment, ICD-10-CM
   conventions, ICD-11 and post-2022 evidence are outside the DSM and labeled. */
(function () {
  var SRC = "ICD-10-CM FY2016–FY2027 code tables (icd10data.com code pages; official CDC files not consulted directly); APA DSM-5-TR coding updates, September 2022–2025; treatment and evidence sources as named in the text; checked October 27, 2026";
  var NC = "Unchanged through October 2026";
  var APA = " **No APA DSM-5-TR coding update** (September 2022, 2023, 2024 or 2025) touches pp. 807–820, and no 2026 APA update existed on the check date. Confirm against the official tabular list in force on the date of service.";
  var UNCH = " is billable, new in **FY2016** and **unchanged every year through FY2027** (October 1, 2026)";
  var PD = " Adjacent change: the APA’s **September 2023** update moved **Parkinson’s disease** from G20 to **G20.C** (Chapter 17), which matters when the diagnosis is antipsychotic-exacerbated Parkinson’s disease rather than a medication-induced condition.";
  var TCODE = " **ICD-10-CM note** (not DSM text): G21.0 and G21.11 (and G21.19) carry a **use additional code** instruction for the adverse-effect T code of the drug (for antipsychotics, for example T43.3X5-, T43.4X5-, T43.505-, T43.595-); the DSM does not mention this.";
  var NOTMD = "Not a mental disorder (p. 807); listed beside the mental disorder being treated (app note)";
  function upd(text) { return [{ kind: "post", year: "2026", title: "Codes and evidence checked through October 2026", source: SRC, text: text }]; }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "medication-induced-parkinsonism", ch: "ch21", sec: "s21-mip", pages: "807–810", critPages: "807–808",
      name: "Medication-induced parkinsonism", code: "G21.11",
      codes: [
        ["G21.11", "Neuroleptic induced parkinsonism (ICD-10-CM title; record the DSM name: antipsychotic medication– and other dopamine receptor blocking agent–induced parkinsonism)", NC],
        ["G21.19", "Other drug induced secondary parkinsonism (ICD-10-CM title; record the DSM name: other medication-induced parkinsonism)", NC]
      ],
      aka: ["MIP", "drug-induced parkinsonism", "neuroleptic-induced parkinsonism (older term)", "antipsychotic-induced parkinsonism", "extrapyramidal symptoms (EPS, umbrella term)", "pseudoparkinsonism", "rabbit syndrome (perioral tremor variant)", "drug-induced parkinsonism (ICD-11 8A00.24, outside the DSM)"],
      essence: "**Rigidity, bradykinesia** and, less often, a **3–6 Hz rest tremor**, appearing in a **time link** with starting or raising a causative drug (most often a **high-D2-potency antipsychotic**) or with **cutting an anticholinergic**. Typically **2–4 weeks** after a dopamine blocker is started and **usually by 3 months**; the **second commonest cause of parkinsonism** after Parkinson’s disease. **G21.11** for antipsychotics and other DRBAs, **G21.19** for any other drug (pp. 807–808).",
      duration: "No minimum duration; with antipsychotics or other DRBAs onset is typically 2–4 weeks after starting and usually by 3 months (second onset peak near 1 year, mainly with calcium channel blockers) (p. 808)",
      functioning: "Linked to morbidity, disability, nonadherence, gait problems, falls and nursing home placement in older people (pp. 807, 809). " + NOTMD,
      mood: "Depression and worsened negative symptoms can accompany it; depressive psychomotor slowing is a key look-alike (pp. 809–810)",
      criteria: [
        ["Feature", "Parkinsonian signs: **rigidity** (lead-pipe, or cogwheel at wrists and elbows) and **bradykinesia/akinesia** are the more frequent findings; the **pill-rolling rest tremor** (3–6 Hz) is less common and may be absent (pp. 808–809)."],
        ["Cause", "A drug able to cause parkinsonism: most often a D2-blocking antipsychotic (higher rates with haloperidol, fluphenazine, risperidone); also calcium channel antagonists, dopamine depleters, some antiepileptics, SSRIs and MAOIs, lithium, chemotherapy and immunosuppressants (pp. 807–808)."],
        ["Timing", "A clear temporal link: usually a few weeks after starting or raising the drug, or after reducing an anticholinergic; with DRBAs typically 2–4 weeks and usually by 3 months; rapid or insidious onset can occur (p. 808)."],
        ["Pattern", "A **subacute, bilateral** onset within weeks of a causative drug strongly suggests MIP; asymmetry is not uncommon and does not rule it out (p. 808)."],
        ["Not better explained by", "Catatonia, negative symptoms of schizophrenia or depressive psychomotor retardation; another, nonparkinsonian medication-induced movement disorder; Parkinson’s disease, Wilson’s disease or another neurological or medical condition; or Parkinson’s disease made worse by an antipsychotic (p. 808)."],
        ["Codes", "**G21.11** when the agent is an antipsychotic or other dopamine receptor blocking agent; **G21.19** for any other medication (p. 807)."]
      ],
      specifiers: [],
      epi: [["Long-term typical antipsychotics, outpatients", "At least **50%** develop parkinsonian signs or symptoms at some point (p. 808)"], ["Rank among causes of parkinsonism", "Second, after Parkinson’s disease (p. 807)"], ["Why reported rates vary", "No standard criteria, misattribution to Lewy body disease or a psychiatric condition, under-recognition of mild cases (p. 808)"]],
      risk: ["Consistent risk factors: **female** sex, **older age**, **cognitive impairment**, other neurological conditions, **HIV infection**, family history of Parkinson’s disease, severe psychiatric illness (p. 809).", "Drug factors: **high D2 potency** (haloperidol, fluphenazine, risperidone); the clinical picture is the same with first- and second-generation agents (pp. 807–808).", "Reported in **children** on antipsychotics (p. 809).", "Concurrent **anticholinergic** treatment lowers the risk (p. 809)."],
      differential: [
        { id: "ncd-parkinsons", how: "Parkinson’s disease starts on one side and progresses asymmetrically, with three or more cardinal features, hyposmia, REM sleep behavior disorder and autonomic symptoms; these are less likely in MIP. People with Parkinson’s disease also worsen on MIP-causing drugs (pp. 808–809). Parkinson’s disease itself is coded G20.C since October 2023 (APA update)." },
        { id: "ncd-lewy", how: "Lewy body disease can be wrongly credited with signs that are really drug-induced (p. 808); marked neuroleptic sensitivity is itself a Lewy body feature (Chapter 17)." },
        { name: "Wilson’s disease and Parkinson-plus conditions (multiple system atrophy, progressive supranuclear palsy)", how: "Separated by their other accompanying signs; family history, rapid progression without a drug change, or focal signs (frontal release, cranial nerve findings, Babinski) point away from MIP (p. 809)." },
        { id: "nms", how: "Severe akinesia and rigidity **plus fever and raised CK** and the other physical and laboratory findings (p. 809)." },
        { id: "mdd", how: "Psychomotor slowing may be indistinguishable, but depression more often brings vegetative signs such as early waking, hopelessness and despair (p. 810)." },
        { id: "catatonia-associated", how: "Catatonia with schizophrenia or a mood disorder can mimic drug-induced akinesia; examine for the full parkinsonian constellation (p. 810)." },
        { id: "schizophrenia", how: "Negative symptoms can look like akinesia; the tremor–rigidity–bradykinesia constellation favors MIP (p. 810)." },
        { id: "tardive-dyskinesia", how: "Choreiform movements lack the steady rhythm of a parkinsonian tremor (p. 809); the treatments cross over: anticholinergics worsen TD and VMAT2 inhibitors worsen MIP (p. 816)." },
        { id: "medication-induced-postural-tremor", how: "8–12 Hz, absent at rest and worse holding a posture or in action, usually without akinesia or rigidity (p. 817)." },
        { name: "Essential, cerebellar and withdrawal tremors", how: "Finer, faster (about 10 Hz) and worse on intention; withdrawal tremor adds hyperreflexia and autonomic signs; cerebellar tremor adds nystagmus, ataxia or scanning speech (p. 809)." },
        { name: "Stroke and other CNS lesions", how: "Focal signs, weakness and clasp-knife tone, against the lead-pipe rigidity and normal strength of MIP (p. 809)." },
        { id: "fnd", how: "Rigidity in functional, psychotic, anxiety disorders, delirium or major NCD is **inconsistent** through the range of motion; parkinsonian rigidity is constant (p. 810)." }
      ],
      pearls: ["**Any new parkinsonism** calls for a thorough **medication history** (p. 807).", "Rigidity and bradykinesia are commoner than tremor; tremor may be absent (p. 808).", "Bilateral, subacute onset within weeks of a new drug points to MIP; asymmetry does not exclude it (p. 808).", "Drooling is **less** common with antipsychotics than with other MIP-causing drugs because of their anticholinergic action (p. 809).", "Lithium-, valproate- or SSRI-induced parkinsonism is **G21.19**, not G21.11 (p. 807; app guidance).", "Treatment (outside the DSM; APA 2020): lower the dose or switch, or add [[stahl:drugs/benztropine|benztropine]] or [[stahl:drugs/amantadine|amantadine]]; see [[stahl:c/ch05/guide/s5-motor|Stahl, motor side effects]]."],
      cmp: { symptoms: "Rigidity, bradykinesia, 3–6 Hz rest tremor (may be absent), shuffling gait, masked face", exclusions: "Parkinson’s disease, Wilson’s disease, catatonia, negative symptoms, depressive retardation, other drug movement disorders", prevalence: "≥50% of outpatients on long-term typical antipsychotics at some point", course: "Onset typically 2–4 weeks after a DRBA, usually by 3 months" },
      clues: [["Core picture", "A 70-year-old woman, 3 weeks into haloperidol, with a masked face, short shuffling steps and symmetric cogwheel rigidity"], ["Onset", "2–4 weeks, by 3 months"], ["Code", "G21.11 (DRBA) or G21.19 (other drug)"]],
      updates: upd("**G21.11** (ICD-10-CM title “Neuroleptic induced parkinsonism”) and **G21.19** (“Other drug induced secondary parkinsonism”)" + UNCH + "; no new subcodes under G21.1. **ICD-10-CM note**: G21.11 has an **Excludes1** note against **G21.0** (neuroleptic malignant syndrome), so the two are not coded together for one episode." + TCODE + PD + " **Treatment reference points** (outside the DSM; APA schizophrenia guideline, 2020): lower the dose, switch to a lower-potency agent, or add an anticholinergic or amantadine; no new drug for drug-induced parkinsonism was identified for 2022–2026. **ICD-11** (outside the DSM): drug-induced parkinsonism is **8A00.24**." + APA)
    },
    {
      id: "nms", ch: "ch21", sec: "s21-nms", pages: "810–811", critPages: "810",
      name: "Neuroleptic malignant syndrome", code: "G21.0",
      codes: [["G21.0", "Malignant neuroleptic syndrome (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["NMS", "neuroleptic malignant syndrome", "malignant neuroleptic syndrome (ICD-10-CM title)", "drug-induced malignant catatonia (a view some investigators hold, p. 811)"],
      essence: "After exposure to a **dopamine antagonist** (generally within the preceding **72 hours**): **fever above 38.0 °C** on two oral readings with **heavy sweating**, **generalized (lead-pipe) rigidity** that antiparkinsonian drugs do not relieve, **altered mental status** (often first), **autonomic instability** and usually **CK at least 4 times** normal. Most cases begin in the **first week**; unrecognized, **10%–20%** die (pp. 810–811).",
      duration: "Exposure generally within 72 hours before onset; onset hours to days after starting the drug, most within the first week, virtually all within 30 days; recovery after stopping averages 7–10 days, nearly all within 30 days (pp. 810–811)",
      functioning: "A medical emergency: respiratory distress can end in sudden respiratory arrest; fatal in 10%–20% when not recognized (pp. 810–811). " + NOTMD,
      mood: "Mental status change (delirium, stupor to coma) is often the earliest sign; the person can look like catatonic stupor (p. 810)",
      criteria: [
        ["Exposure", "A dopamine antagonist, generally within the **72 hours** before symptoms (p. 810)."],
        ["Feature: hyperthermia", "**Above 100.4 °F / 38.0 °C** on **at least two** oral measurements, with **profuse diaphoresis**: the feature that separates NMS from the other neurological side effects of DRBAs; extreme temperatures support the diagnosis more strongly (p. 810)."],
        ["Feature: rigidity", "**Generalized**, “lead pipe” at its worst, usually **unresponsive to antiparkinsonian agents**; may come with tremor, sialorrhea, akinesia, dystonia, trismus, myoclonus, dysarthria, dysphagia or rhabdomyolysis (p. 810)."],
        ["Feature: mental status", "Delirium or altered consciousness ranging from stupor to coma, often **early**; may appear alert but dazed and unresponsive (p. 810)."],
        ["Feature: autonomic", "Heart rate **>25%** above baseline; sweating; blood pressure **≥25%** above baseline or swinging by **≥20 mmHg diastolic / ≥25 mmHg systolic** within 24 hours; urinary incontinence; pallor. Tachypnea **>50%** above baseline is common (p. 810)."],
        ["Laboratory", "CK **≥4×** the upper limit of normal is common; leukocytosis, metabolic acidosis, hypoxia, **low serum iron**, raised muscle enzymes and catecholamines; CSF and imaging generally normal; EEG generalized slowing. **No single finding is specific** (p. 810)."],
        ["Timing", "Mental status and neurological signs usually come **before** systemic signs; onset hours to days, most within week 1, virtually all within 30 days (p. 811)."],
        ["Not better explained by", "CNS infection, inflammatory or autoimmune disease, status epilepticus, subcortical lesions, systemic illness, another drug-induced hyperthermic syndrome, or malignant catatonia (p. 811)."]
      ],
      specifiers: [],
      epi: [["Incidence on antipsychotics, database studies", "**0.01%–0.02%** (p. 810)"], ["Incidence, Hong Kong population-based study", "**0.11%** (p. 810)"], ["Prior episode among index cases", "**15%–20%** (p. 811)"], ["Fatality when unrecognized", "**10%–20%** (p. 811)"], ["Mean recovery after stopping the drug", "**7–10 days**; most within 1 week, nearly all within 30 days; longer with long-acting agents (p. 811)"], ["Outside the DSM", "A 2016 review gives 0.02%–0.03%; the DSM figure is 0.01%–0.02% (app research note)"]],
      risk: ["Anyone given an antipsychotic or other DRBA; **not specific to any diagnosis**, and seen in people with no mental disorder (p. 811).", "Clinical and metabolic: **agitation, exhaustion, dehydration, iron deficiency** (p. 811).", "A **prior episode** (15%–20% of index cases); receptor-gene findings not consistently replicated (p. 811).", "Drug: **high-potency** agents more than low-potency and atypical ones; milder or partial forms with newer drugs; **metoclopramide** and **prochlorperazine** implicated (p. 811).", "Administration: **parenteral** route, **rapid titration**, **higher total dose**; yet it usually occurs within the **therapeutic range** (p. 811).", "Rechallenge: many do not recur; some do, especially when antipsychotics restart **soon** after the episode (p. 811)."],
      differential: [
        { id: "catatonia-associated", how: "**Malignant catatonia** in schizophrenia or a mood disorder may be indistinguishable; some investigators regard NMS as a drug-induced malignant catatonia. Catatonic signs that predate any dopamine blocker favor catatonia (p. 811; app guidance)." },
        { id: "catatonic-due-to-amc", how: "CNS infections and inflammatory or autoimmune conditions are on the manual’s list (p. 811); catatonia caused by them is the app’s link to this entry (app guidance)." },
        { name: "Serotonin syndrome", how: "A serotonergic drug or new combination rather than a dopamine blocker; onset within hours; hyperreflexia, clonus, myoclonus, mydriasis and diarrhea rather than lead-pipe rigidity and bradykinesia (named on p. 811; contrasts are app guidance, outside the DSM)." },
        { name: "Malignant hyperthermia", how: "Arises during anesthesia (volatile agents or succinylcholine) (p. 811; app guidance)." },
        { name: "Parkinsonian hyperthermia syndrome", how: "Follows **abrupt withdrawal of dopamine agonists** in Parkinson’s disease (p. 811); an NMS-like picture without a dopamine antagonist is coded G25.79 (app guidance from p. 818)." },
        { id: "other-medication-induced-movement", how: "NMS-like presentations with drugs other than antipsychotics and DRBAs belong to the residual category, G25.79 (p. 818)." },
        { id: "alcohol-withdrawal", how: "Alcohol or sedative withdrawal can produce fever, autonomic storm and confusion; history of use and tremor with hyperreflexia point there (pp. 809, 811)." },
        { id: "stimulant-intox", how: "Hyperthermia from stimulant or hallucinogen misuse is a listed look-alike (p. 811)." },
        { name: "Anticholinergic (atropine) poisoning", how: "Listed on p. 811; dry, flushed skin and urinary retention contrast with the sweating of NMS (app guidance)." },
        { name: "CNS infection, status epilepticus, subcortical lesions, pheochromocytoma, thyrotoxicosis, tetanus, heat stroke", how: "The serious medical conditions the manual lists (p. 811); work-up guided by history and examination." },
        { id: "medication-induced-parkinsonism", how: "Rigidity and akinesia without fever, raised CK or autonomic instability (p. 809)." },
        { id: "medication-induced-acute-dystonia", how: "Dystonia can be part of NMS, but acute dystonia has no fever and no generalized rigidity (p. 813)." }
      ],
      pearls: ["The fever (above 38.0 °C, two oral readings) with sweating is what sets NMS apart (p. 810).", "Confusion and rigidity often come **before** the fever: do not wait for the full picture (p. 811).", "It usually occurs at **therapeutic** doses (p. 811).", "Antiemetic DRBAs (metoclopramide, prochlorperazine) can cause it in medical wards (p. 811).", "**Low serum iron** and **CK ≥4×** are typical findings, but no laboratory test is specific (p. 810).", "Management (outside the DSM; case-series evidence for specific drugs): stop the agent; ICU-level supportive care with cooling and fluids; [[stahl:drugs/dantrolene|dantrolene]] or bromocriptine; ECT for refractory cases or malignant catatonia overlap; rechallenge only after a drug-free interval, with a different, lower-potency agent and slow titration."],
      cmp: { symptoms: "Fever >38.0 °C ×2 with sweating, lead-pipe rigidity, altered consciousness, autonomic instability, CK ≥4×", exclusions: "Serotonin syndrome, malignant hyperthermia, malignant catatonia, CNS infection, withdrawal, heat stroke, anticholinergic toxicity", prevalence: "0.01%–0.02% (database); 0.11% (Hong Kong)", course: "Most within week 1; self-limited after stopping; recovery 7–10 days; 10%–20% fatal if unrecognized" },
      clues: [["Core picture", "A man given rapidly increased IM haloperidol 2 days ago, now dazed, rigid, 39.4 °C and sweating, CK 8 times normal"], ["Timing", "Exposure within 72 h; most in week 1"], ["Code", "G21.0"]],
      updates: upd("**G21.0** (ICD-10-CM title “Malignant neuroleptic syndrome”)" + UNCH + ". **ICD-10-CM note**: G21.0 and G21.11 carry an **Excludes1** note against each other (do not code both for one episode)." + TCODE + " **Management reference points** (outside the DSM; review in Ann Pharmacother, 2016): stop the dopamine blocker, supportive or intensive care with cooling and fluids, dantrolene or bromocriptine (case-series evidence only), ECT for refractory cases or malignant catatonia overlap; rechallenge after a drug-free interval, with a different, lower-potency agent and slow titration. That review gives an incidence of 0.02%–0.03%; the DSM figure remains **0.01%–0.02%** (p. 810)." + APA)
    },
    {
      id: "medication-induced-acute-dystonia", ch: "ch21", sec: "s21-dystonia", pages: "812–813", critPages: "812",
      name: "Medication-induced acute dystonia", code: "G24.02",
      codes: [["G24.02", "Drug induced acute dystonia (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["acute dystonic reaction", "ADR", "oculogyric crisis", "acute torticollis from medication", "laryngeal dystonia (life-threatening form)", "Pisa syndrome (trunk form)"],
      essence: "**Sustained abnormal muscle contractions and postures** caused by a dopamine-blocking (or other listed) drug, mostly in the **head and neck**: tongue protrusion, trismus, **oculogyric crisis**, torticollis. **At least half** begin within **24–48 hours** of starting or rapidly raising a DRBA (or cutting an anticholinergic) and about **90% within 5 days**; **laryngeal** dystonia threatens the airway (p. 812).",
      duration: "At least 50% within 24–48 hours and about 90% within 5 days of starting or rapidly raising the drug, or of reducing an anticholinergic (p. 812)",
      functioning: "Fear, pain and nonadherence; laryngeal dystonia can obstruct the airway (p. 812). " + NOTMD,
      mood: "Fear and anxiety are common; people are distressed and seek help, unlike retarded catatonia (pp. 812–813)",
      criteria: [
        ["Feature", "Sustained abnormal contractions (raised muscle tone) and abnormal postures, arising with a medication known to cause acute dystonia (p. 812)."],
        ["Cause", "Any drug blocking **D2-like** receptors; most often antipsychotics and antiemetic or promotility agents; also reported with SSRIs, cholinesterase inhibitors, opioids and methylphenidate (p. 812)."],
        ["Forms", "Focal, segmental or generalized; oromandibular (tongue protrusion, grimacing, trismus), **oculogyric crisis** (minutes to hours), blepharospasm, cervical (antecollis, retrocollis, laterocollis, torticollis), distal limb, **Pisa syndrome**, opisthotonos, and life-threatening **laryngeal** dystonia (p. 812)."],
        ["Timing", "**≥50%** within **24–48 hours** of starting or rapidly raising a DRBA, or of reducing a drug that treats or prevents acute extrapyramidal symptoms; about **90%** within **5 days** (p. 812)."],
        ["Not better explained by", "A mental disorder such as catatonia; a neurological or medical cause of dystonia; or a tardive (late-onset) drug-induced movement disorder (p. 812)."]
      ],
      specifiers: [],
      epi: [["Onset, first 24–48 hours", "At least **50%** (p. 812)"], ["Onset within 5 days", "About **90%** (p. 812)"], ["Prevalence", "Not given in the manual (p. 812)"]],
      risk: ["**Children** and adults **under 40** with psychosis carry the highest risk; **males** more than females at all ages (p. 812).", "A **prior** dystonic reaction to a DRBA (p. 812).", "**High-potency typical** antipsychotics (p. 812).", "Not being warned beforehand raises distress and later nonadherence (p. 812)."],
      differential: [
        { id: "catatonia-associated", how: "Dystonia before any antipsychotic, no improvement with dose reduction or an anticholinergic; retarded catatonia is mute and withdrawn without distress, whereas acute dystonia brings distress and help-seeking (p. 813)." },
        { id: "tardive-dystonia", how: "Not acute in onset; may surface when the dose is **lowered** (p. 813)." },
        { id: "nms", how: "Can include dystonia but adds **fever** and **generalized rigidity** (p. 813)." },
        { name: "Primary (idiopathic) focal or segmental dystonia", how: "Precedes the drug or progresses without a medication change, may have focal signs or a family history, and persists for days to weeks regardless of medication (pp. 812–813)." },
        { name: "Seizures, infections, trauma, space-occupying lesions; hypoparathyroidism (tetany)", how: "Other neurological and endocrine causes of dystonia-like postures (p. 813)." },
        { name: "Anaphylaxis, tardive laryngeal dystonia, respiratory dyskinesia", how: "Named mimics of acute dystonia; most relevant when the throat or breathing is involved (p. 813)." },
        { id: "schizophrenia", how: "Postures can be misread as psychotic mannerisms, leading to a higher dose of the causative drug (p. 812)." },
        { id: "fnd", how: "Functional dystonic postures lack the drug timing and the response to an anticholinergic (app guidance)." }
      ],
      pearls: ["Highest risk: **children** and **adults under 40** with psychosis, males more than females; **high-potency** typicals add risk (p. 812).", "Oculogyric crisis can last minutes to hours (p. 812).", "Throat clutching, stridor and a changed voice mean **laryngeal dystonia**: an airway emergency (p. 812).", "Reducing an **anticholinergic** can trigger it too (p. 812).", "Response to an anticholinergic supports the diagnosis; no response suggests catatonia (p. 813).", "Treatment (outside the DSM; APA 2020): parenteral [[stahl:drugs/benztropine|benztropine]] or [[stahl:drugs/diphenhydramine|diphenhydramine]]; airway first in laryngeal dystonia."],
      cmp: { symptoms: "Sustained contractions and postures: oculogyric crisis, torticollis, trismus, tongue protrusion, laryngeal spasm", exclusions: "Catatonia, primary dystonia, tardive dystonia, NMS, tetany, anaphylaxis", prevalence: "Not given", course: "≥50% in 24–48 h, ~90% in 5 days" },
      clues: [["Core picture", "A 19-year-old man, 20 hours after IM haloperidol, with eyes fixed upward, neck twisted, frightened and asking for help"], ["Onset", "24–48 h (≥50%), 5 days (~90%)"], ["Code", "G24.02"]],
      updates: upd("**G24.02** (ICD-10-CM title “Drug induced acute dystonia”)" + UNCH + "; no new subcodes under G24.0. **Treatment reference points** (outside the DSM; APA schizophrenia guideline, 2020): an anticholinergic or diphenhydramine, then dose reduction, switch or prophylaxis in high-risk patients; no new drug identified for 2022–2026. ICD-11 codes for this entry were not verified for the app." + APA)
    },
    {
      id: "medication-induced-acute-akathisia", ch: "ch21", sec: "s21-akathisia", pages: "813–814", critPages: "813",
      name: "Medication-induced acute akathisia", code: "G25.71",
      codes: [["G25.71", "Drug induced akathisia (ICD-10-CM title; record the DSM name; shared with tardive akathisia)", NC]],
      aka: ["akathisia", "acute akathisia", "drug-induced restlessness", "SSRI-induced akathisia (same condition)", "jitteriness (patient term)"],
      essence: "**Inner restlessness**, felt mostly in the **legs**, plus at least one **observed** movement (fidgeting or leg swinging seated, rocking or marching on the spot standing, **pacing**, inability to stay still for several minutes), typically within **4 weeks** of starting or raising a DRBA, TCA, SSRI, dopamine agonist or calcium channel blocker. A **higher dose worsens it**; it is linked to **aggression and suicide attempts** (pp. 813–814).",
      duration: "Typically within 4 weeks of starting or raising the drug (occasionally after reducing an anticholinergic); can begin very rapidly; persists while the drug continues (pp. 813–814)",
      functioning: "Significant distress and nonadherence; dysphoria, irritability, aggression or suicide attempts (p. 813). " + NOTMD,
      mood: "Dysphoria and anxiety are part of the subjective complaint; agitation of depression or mania is the main look-alike (pp. 813–814)",
      criteria: [
        ["Subjective", "Complaints of restlessness: inner restlessness mostly in the legs, an urge to move them, distress when asked to keep them still, dysphoria and anxiety (p. 813)."],
        ["Observed (at least one)", "Fidgeting or leg swinging when seated; rocking from foot to foot or “walking on the spot” when standing; pacing to ease the restlessness; or being unable to sit or stand still for at least several minutes. In the severest form no position can be held for more than a few seconds (p. 813)."],
        ["Cause", "Antipsychotics and other DRBAs, **tricyclic antidepressants**, **SSRIs**, **dopamine agonists**, **calcium channel blockers**; occasionally reduction of an anticholinergic (p. 813)."],
        ["Timing", "Typically within **4 weeks** of starting or raising the dose (p. 813)."],
        ["Not better explained by", "A mental disorder (schizophrenia, substance withdrawal, agitation in a depressive or manic episode, ADHD hyperactivity) or a neurological or medical condition (**Parkinson’s disease**, **iron-deficiency anemia**) (p. 813)."]
      ],
      specifiers: [],
      epi: [["Prevalence on antipsychotics or other DRBAs", "**20%–75%**, the spread reflecting definitions, prescribing, study design and populations (p. 814)"]],
      risk: ["**Dose dependent**; more frequent with **high-potency** antipsychotics or drugs with high central dopamine affinity (p. 813).", "A dose increase prompted by apparent worsening psychosis can aggravate it (p. 813).", "Can follow reduction of an anticholinergic (p. 813)."],
      differential: [
        { id: "gad", how: "Anxiety that predates the drug, does not rise with dose and is not relieved by dose reduction or anti-akathisia treatment; some patients can describe akathisia as **unlike** anything felt before (p. 814). The manual’s own example contrast (p. 807)." },
        { id: "mdd", how: "Agitation of a depressive episode; check onset relative to the drug and response to dose changes (pp. 813–814)." },
        { id: "bipolar-i", how: "Agitation of a manic episode can be indistinguishable; timing after a dose change marks akathisia (p. 814)." },
        { id: "schizophrenia", how: "Psychotic agitation; misreading akathisia as psychosis leads to a dose increase that worsens it (pp. 813–814)." },
        { id: "adhd", how: "Hyperactivity predates any medication and is not tied to dose changes (pp. 813–814)." },
        { id: "opioid-withdrawal", how: "Withdrawal restlessness; substance history and other withdrawal signs (pp. 813–814)." },
        { id: "stimulant-intox", how: "Cocaine intoxication causes agitation that can look like akathisia (p. 814)." },
        { id: "delirium", how: "Restlessness with disturbed attention and awareness (p. 814)." },
        { id: "tardive-dyskinesia", how: "TD can include generalized restlessness and may coexist; the movement type and timing separate them, and a **dose increase worsens akathisia but temporarily relieves TD** (p. 814)." },
        { id: "tardive-akathisia", how: "Same phenomenology and code, but late in treatment and persisting after the drug is stopped or reduced (p. 816)." },
        { id: "rls", how: "Evening urge to move the legs with relief on movement, tied to rest and time of day rather than a drug change (Chapter 12; app guidance)." },
        { name: "Restlessness in Parkinson’s disease or iron-deficiency anemia", how: "Phenomenologically similar; the abrupt appearance soon after a medication start or increase usually marks the drug-induced form (p. 814)." }
      ],
      pearls: ["Two parts: **subjective** restlessness **and** an **observed** movement (p. 813).", "**SSRIs** cause the same akathisia, identical in look and treatment response (p. 814).", "Raising the dose worsens akathisia but briefly hides TD (p. 814).", "Ask whether it feels **different** from earlier anxiety (p. 814).", "Ask about suicidal thoughts: akathisia is linked to suicide attempts (p. 813).", "Treatment (outside the DSM; APA 2020): reduce the dose or switch, a β-blocker such as propranolol or a benzodiazepine; anticholinergics help little."],
      cmp: { symptoms: "Inner restlessness (legs) plus observed fidgeting, rocking, pacing or inability to stay still", exclusions: "Anxiety, mania, depressive agitation, psychosis, ADHD, withdrawal, PD and iron-deficiency restlessness", prevalence: "20%–75% on antipsychotics/DRBAs", course: "Within 4 weeks; persists while the drug continues" },
      clues: [["Core picture", "A woman 10 days into an antipsychotic who paces the ward, swings her legs and says the urge to move is unlike any anxiety she has had"], ["Onset", "Within 4 weeks"], ["Code", "G25.71"]],
      updates: upd("**G25.71** (ICD-10-CM title “Drug induced akathisia”)" + UNCH + "; it serves both acute and tardive akathisia, and no new subcodes were added under G25.7. **Treatment reference points** (outside the DSM; APA schizophrenia guideline, 2020): dose reduction or switch, a benzodiazepine or β-blocker; akathisia responds poorly to anticholinergics; no new drug identified for 2022–2026. ICD-11 codes for this entry were not verified for the app." + APA)
    },
    {
      id: "tardive-dyskinesia", ch: "ch21", sec: "s21-td", pages: "814–816", critPages: "814–815",
      name: "Tardive dyskinesia", code: "G24.01",
      codes: [["G24.01", "Drug induced subacute dyskinesia (ICD-10-CM title, with tardive dyskinesia as an inclusion term; record the DSM name)", NC]],
      aka: ["TD", "tardive dyskinesia", "orobuccolingual dyskinesia", "drug-induced orofacial dyskinesia (ICD-10-CM inclusion term)", "withdrawal-emergent dyskinesia (when it persists ≥4 weeks)"],
      essence: "**Involuntary choreiform, athetoid or semirhythmic movements**, most visibly **orofacial**, from drugs that block **postsynaptic dopamine receptors**, present **at least 4 weeks**, after **at least 3 months** of exposure (**1 month at 60 or older**), arising during treatment or within **4 weeks** of stopping an oral drug (**8 weeks** for a depot). **Anticholinergics worsen it**; a **higher antipsychotic dose hides it** for a while (pp. 814–816).",
      duration: "Movements present at least 4 weeks; exposure at least 3 months (1 month at age 60 or older); onset during exposure or within 4 weeks of stopping an oral agent (8 weeks for a long-acting injectable) (p. 815)",
      functioning: "Usually objectively mild but tied to distress and social avoidance; severe cases bring ulcers, tooth loss, trouble walking, swallowing or breathing, weight loss, depression and suicidal ideation (p. 815). " + NOTMD,
      mood: "Mood disorders, especially MDD, are risk factors in some groups; depression and suicidal ideation can follow severe TD (p. 815)",
      criteria: [
        ["Feature", "Abnormal, involuntary movements of the **tongue, jaw, trunk or extremities** arising with drugs that block postsynaptic dopamine receptors (first- and second-generation antipsychotics, **metoclopramide**) (p. 814)."],
        ["Character", "**Choreiform** (quick, jerky, nonrepetitive), **athetoid** (slow, sinuous, continual) or **semirhythmic** (stereotypies); clearly unlike the 3–6 Hz tremor of parkinsonism (pp. 814–815)."],
        ["Duration", "Movements present for **at least 4 weeks** (p. 814)."],
        ["Exposure", "The causative drug taken for **at least 3 months**, or **1 month** at age **60 or older** (p. 815)."],
        ["Timing", "Appears during exposure or within **4 weeks** of withdrawing an oral agent (**8 weeks** for a long-acting injectable) (p. 815)."],
        ["Caution", "Not every dyskinesia in a person on antipsychotics is TD (p. 815)."],
        ["Not better explained by", "Huntington’s, Wilson’s or Sydenham’s chorea, SLE, thyrotoxicosis, heavy metals, ill-fitting dentures, L-dopa or bromocriptine dyskinesia, spontaneous dyskinesia, or an acute medication-induced movement disorder (p. 816)."]
      ],
      specifiers: [],
      epi: [["Prevalence, long-term antipsychotic treatment", "**20%–30%** (p. 815)"], ["Incidence, younger people", "**3%–5% per year** (p. 815)"], ["Middle-aged and elderly", "Prevalence up to **50%**; incidence **25%–30%** after an average of 1 year’s cumulative exposure (p. 815)"], ["Setting", "Higher in chronically institutionalized people (p. 815)"], ["Spontaneous dyskinesia (background)", "More than **5%**, higher in older people (p. 816)"], ["Outside the DSM", "Carbon et al. 2017 meta-analysis: 25.3% overall, 30.0% FGA, 20.7% SGA"]],
      risk: ["The **most important**: **age** and **cumulative exposure** (p. 815).", "Two most consistent: **greater cumulative antipsychotic dose** and **early acute extrapyramidal effects** such as parkinsonism (p. 815).", "In some groups: **mood disorders (especially MDD)**, neurological conditions, **alcohol use disorder** (p. 815).", "No obvious sex difference; possibly higher in **postmenopausal women** (p. 815).", "SGAs carry a somewhat lower incidence than FGAs, but the gap is smaller than once thought once FGA dose is considered (p. 815)."],
      differential: [
        { id: "medication-induced-parkinsonism", how: "Imperative to separate: **anticholinergics** for parkinsonism **worsen TD**, and **VMAT2 inhibitors** for TD **worsen parkinsonism**; parkinsonism appears within weeks with a steady 3–6 Hz rhythm (p. 816)." },
        { id: "medication-induced-acute-akathisia", how: "Acute akathisia develops within hours to days and worsens with a dose increase, which temporarily relieves TD (pp. 814, 816)." },
        { id: "medication-induced-acute-dystonia", how: "Develops within hours to days of a start or dose rise, not after months (p. 816)." },
        { id: "ncd-huntingtons", how: "Chorea with family history and cognitive or psychiatric change; the manual’s example contrast is TD versus chorea (pp. 807, 816)." },
        { name: "Withdrawal-emergent dyskinesia", how: "May remit as withdrawal continues; if it lasts **≥4 weeks**, TD may be diagnosed (p. 816)." },
        { name: "Wilson’s disease, Sydenham’s chorea, SLE, thyrotoxicosis, heavy metal poisoning", how: "Neurological or systemic causes of chorea; symptoms before the DRBA or focal signs point to them (p. 816)." },
        { name: "Ill-fitting dentures; L-dopa or bromocriptine dyskinesia", how: "Mechanical and other drug causes of orofacial movements (p. 816)." },
        { name: "Spontaneous dyskinesia", how: "Seen in more than 5% of people, more in the elderly, which can make causation hard to prove (p. 816)." },
        { id: "tourette", how: "Tics begin in childhood, are often preceded by an urge and are briefly suppressible (Chapter 1; app guidance)." },
        { id: "stereotypic-movement", how: "Developmental onset in early life, unrelated to a dopamine blocker (Chapter 1; app guidance)." }
      ],
      pearls: ["**4 weeks** of movements; **3 months** of exposure (**1 month at 60+**); **4 / 8 weeks** after stopping an oral drug / a depot (p. 815).", "Orofacial most obvious; about half have limb and up to a quarter axial involvement (p. 815).", "Worse with stimulants, antipsychotic withdrawal, **anticholinergics**, stress; better with relaxation; absent in sleep (p. 815).", "A higher dose **temporarily suppresses** TD: improvement after a dose rise is not a cure (p. 815).", "Onset is insidious and escapes all but a keen observer: screen regularly, for example with the AIMS (outside the DSM).", "Treatment (outside the DSM; APA 2020): a VMAT2 inhibitor ([[stahl:drugs/valbenazine|valbenazine]], [[stahl:drugs/deutetrabenazine|deutetrabenazine]]) for moderate-to-severe or disabling TD, may be considered for mild; see [[stahl:c/ch05/guide/s5-td|Stahl, TD]]."],
      cmp: { symptoms: "Choreiform, athetoid or stereotyped movements, mostly orofacial, ≥4 weeks", exclusions: "Huntington’s, Wilson’s, Sydenham’s, SLE, thyrotoxicosis, dentures, L-dopa dyskinesia, spontaneous dyskinesia, acute drug syndromes", prevalence: "20%–30% on long-term antipsychotics; up to 50% in older people", course: "Insidious; may worsen with continued use in older people; improves in some after stopping, enduring in others" },
      clues: [["Core picture", "A 67-year-old man on haloperidol for 10 years with lip smacking and tongue writhing, gone in sleep, noticed by his wife"], ["Rules", "≥4 wk movements; ≥3 mo exposure (1 mo at 60+)"], ["Code", "G24.01"]],
      updates: upd("**G24.01** (ICD-10-CM title “Drug induced subacute dyskinesia”; tardive dyskinesia, drug-induced orofacial dyskinesia and drug-induced blepharospasm are inclusion terms)" + UNCH + "; no new subcodes under G24.0. **Treatment reference points** (outside the DSM): the VMAT2 inhibitors valbenazine and deutetrabenazine were FDA-approved for TD in **2017**; once-daily deutetrabenazine XR (2023) and valbenazine sprinkle capsules (2024) followed; the APA schizophrenia guideline (2020) recommends a VMAT2 inhibitor for moderate-to-severe or disabling TD and says one may be considered for mild TD. **Epidemiology beyond the DSM**: Carbon et al. (J Clin Psychiatry, 2017) found prevalence 25.3% overall (30.0% FGA, 20.7% SGA), consistent with the manual’s 20%–30%. ICD-11 codes for this entry were not verified for the app." + APA)
    },
    {
      id: "tardive-dystonia", ch: "ch21", sec: "s21-tardive-other", pages: "816", critPages: "816",
      name: "Tardive dystonia", code: "G24.09",
      codes: [["G24.09", "Other drug induced dystonia (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["tardive dystonia", "late-onset drug-induced dystonia", "tardive laryngeal dystonia (a form named on p. 813)"],
      essence: "A **tardive** syndrome in which the movement is **dystonia**: it emerges **late** in treatment with an antipsychotic or other DRBA and **may persist for months to years** even after the drug is stopped or the dose reduced; it may surface when the dose is **lowered** (pp. 813, 816).",
      duration: "Late emergence in the course of treatment; may persist months to years despite discontinuation or dose reduction (p. 816)",
      functioning: "Not described separately; persistence despite stopping the drug is the burden (p. 816). " + NOTMD,
      mood: "Not described in the manual",
      criteria: [
        ["Feature", "Dystonia (sustained abnormal contractions and postures) as the movement type of a tardive syndrome (p. 816)."],
        ["Timing", "**Late** emergence in the course of DRBA treatment, not an acute onset; may become evident when the antipsychotic dose is **lowered** (pp. 813, 816)."],
        ["Course", "May **persist for months to years**, even after the drug is discontinued or reduced (p. 816)."],
        ["Not better explained by", "Acute dystonia, a primary (idiopathic) dystonia, or another neurological or medical condition (pp. 812–813, 816; app synthesis)."],
        ["Code", "**G24.09**, distinct from acute dystonia (G24.02) and tardive dyskinesia (G24.01) (p. 816)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the manual (p. 816)"]],
      risk: ["Not detailed in the manual; app guidance: the TD risk factors (age, cumulative exposure) are a reasonable starting point but are not stated for this syndrome (p. 815 by analogy)."],
      differential: [
        { id: "medication-induced-acute-dystonia", how: "Acute onset within hours to days (≥50% in 24–48 h) after a start or dose rise, usually responding to an anticholinergic (pp. 812–813)." },
        { id: "tardive-dyskinesia", how: "Choreiform, athetoid or stereotyped movements rather than sustained postures; separate code G24.01 (pp. 814–816)." },
        { name: "Primary (idiopathic) or hereditary dystonia", how: "Predates the drug, progresses without medication change, family history or focal signs (pp. 812–813)." },
        { id: "other-medication-induced-movement", how: "Other tardive conditions without a specific DSM entry go to G25.79 (p. 818)." }
      ],
      pearls: ["Same family as TD: late, persistent and may outlast the drug (p. 816).", "Lowering the dose can **unmask** it (p. 813).", "Three neighboring codes: **G24.02** acute dystonia, **G24.09** tardive dystonia, **G24.01** TD (pp. 812–816).", "The manual gives no figures or risk factors for it (p. 816)."],
      cmp: { symptoms: "Sustained dystonic postures emerging late in DRBA treatment", exclusions: "Acute dystonia, primary dystonia, TD", prevalence: "Not given", course: "May persist months to years after stopping" },
      clues: [["Core picture", "A man on depot fluphenazine for 6 years with fixed retrocollis that has not eased 4 months after the depot was stopped"], ["Timing", "Late and persistent"], ["Code", "G24.09"]],
      updates: upd("**G24.09** (ICD-10-CM title “Other drug induced dystonia”)" + UNCH + "; no new subcodes under G24.0. **Treatment reference points** (outside the DSM): VMAT2 inhibitors are FDA-approved for tardive dyskinesia, not specifically for tardive dystonia; no new drug identified for 2022–2026. ICD-11 codes for this entry were not verified for the app." + APA)
    },
    {
      id: "tardive-akathisia", ch: "ch21", sec: "s21-tardive-other", pages: "816", critPages: "816",
      name: "Tardive akathisia", code: "G25.71",
      codes: [["G25.71", "Drug induced akathisia (ICD-10-CM title; record the DSM name; shared with medication-induced acute akathisia)", NC]],
      aka: ["tardive akathisia", "late-onset akathisia", "chronic akathisia (loose usage)"],
      essence: "A **tardive** syndrome in which the movement problem is **akathisia**: it emerges **late** in DRBA treatment and **may persist for months to years** despite stopping or reducing the drug. It shares **G25.71** with acute akathisia; the written name tells them apart (p. 816).",
      duration: "Late emergence in the course of treatment; may persist months to years despite discontinuation or dose reduction (p. 816)",
      functioning: "Not described separately; the acute form’s distress, nonadherence and suicide risk are reasonable concerns (p. 813; app guidance). " + NOTMD,
      mood: "Not described in the manual; dysphoria and anxiety belong to the akathisia picture (p. 813)",
      criteria: [
        ["Feature", "Akathisia (subjective restlessness with observed restless movement) as the movement type of a tardive syndrome (pp. 813, 816)."],
        ["Timing", "**Late** in the course of treatment rather than within the first weeks (p. 816)."],
        ["Course", "May **persist for months to years**, even after the drug is stopped or the dose reduced (p. 816)."],
        ["Not better explained by", "Acute akathisia, agitation of a mental disorder, restless legs syndrome, or restlessness from Parkinson’s disease or iron deficiency (pp. 813–814, 816; app synthesis)."],
        ["Code", "**G25.71**, the same code as medication-induced acute akathisia (p. 816)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the manual (p. 816)"]],
      risk: ["Not detailed in the manual (p. 816)."],
      differential: [
        { id: "medication-induced-acute-akathisia", how: "Same phenomenology and code; acute akathisia appears within about 4 weeks of a start or dose rise and lasts while the drug continues (pp. 813–814)." },
        { id: "tardive-dyskinesia", how: "TD often carries generalized restlessness and the two may coexist; look for choreoathetoid movements (p. 814)." },
        { id: "rls", how: "Evening urge to move the legs, relieved by movement, without the drug history (Chapter 12; app guidance)." },
        { id: "gad", how: "Anxiety that predates the drug and feels like familiar worry (p. 814 by analogy)." }
      ],
      pearls: ["**G25.71** is shared with acute akathisia: write the full name (p. 816).", "May persist after the drug is stopped, unlike typical acute akathisia, which lasts while the drug continues (pp. 814, 816).", "The manual gives no figures or risk factors for it (p. 816)."],
      cmp: { symptoms: "Akathisia (inner restlessness plus restless movement) emerging late in treatment", exclusions: "Acute akathisia, mental-disorder agitation, RLS", prevalence: "Not given", course: "May persist months to years after stopping" },
      clues: [["Core picture", "A woman treated with antipsychotics for 8 years whose pacing and inner restlessness began late and continue months after stopping"], ["Timing", "Late and persistent"], ["Code", "G25.71 (shared)"]],
      updates: upd("**G25.71** (ICD-10-CM title “Drug induced akathisia”)" + UNCH + "; one code for acute and tardive akathisia, and no new subcodes under G25.7. ICD-11 codes for this entry were not verified for the app." + APA)
    },
    {
      id: "medication-induced-postural-tremor", ch: "ch21", sec: "s21-tremor", pages: "817", critPages: "817",
      name: "Medication-induced postural tremor", code: "G25.1",
      codes: [["G25.1", "Drug-induced tremor (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["lithium tremor", "drug-induced tremor", "postural tremor from medication", "valproate tremor"],
      essence: "A **fine, regular 8–12 Hz tremor** seen when a body part **holds a posture** (hands outstretched, mouth open), often worse in action and **absent at rest**, caused by a drug such as **lithium**, valproate, stimulants, β-agonists, antidepressants or caffeine. A **coarser** lithium tremor with twitching or ataxia signals **toxicity** (p. 817).",
      duration: "No time rule; tied to medication use, with lack of correlation with serum levels and persistence after stopping arguing for a preexisting tremor (p. 817)",
      functioning: "Usually benign and well tolerated, but can cause social embarrassment, occupational difficulty and nonadherence (p. 817). " + NOTMD,
      mood: "Anxiety is both a risk factor for lithium tremor and an exacerbating factor (p. 817)",
      criteria: [
        ["Feature", "A **fine tremor** during attempts to **maintain a posture**, developing with medication use (p. 817)."],
        ["Character", "Regular rhythmic oscillation of limbs (mostly hands and fingers), head, mouth or tongue, usually **8–12 Hz**; best seen with hands outstretched or mouth held open; may worsen with intentional movement (kinetic or action tremor) (p. 817)."],
        ["Cause", "Lithium, β-adrenergic drugs (isoproterenol), stimulants (amphetamine), dopaminergic drugs, anticonvulsants (valproic acid), antidepressants, methylxanthines (caffeine, theophylline) (p. 817)."],
        ["Observation", "If described but not seen, re-create the situation, for example drinking from a cup and saucer (p. 817)."],
        ["Not better explained by", "A **preexisting** tremor (essential tremor worsened by a drug does not count); medication-induced parkinsonism; or a tremor from anxiety, fatigue, hypoglycemia, thyrotoxicosis, pheochromocytoma, hypothermia or alcohol withdrawal on its own (p. 817)."]
      ],
      specifiers: [],
      epi: [["Lithium tremor", "Common at therapeutic doses; complaints fall with longer treatment (p. 817)"], ["Other drugs", "Little information; most data concern lithium (p. 817)"]],
      risk: ["For lithium tremor: **older age**, **high serum levels**, a concurrent antidepressant, antipsychotic or other DRBA, **excess caffeine**, personal or family history of tremor, alcohol use disorder, anxiety (p. 817).", "Exacerbating factors: anxiety, stress, fatigue, hypoglycemia, thyrotoxicosis, pheochromocytoma, hypothermia, alcohol withdrawal (p. 817).", "Tremor can be an early sign of **serotonin syndrome** (p. 817)."],
      differential: [
        { id: "medication-induced-parkinsonism", how: "Parkinsonian tremor is 3–6 Hz, worst at rest, suppressed by intentional movement and accompanied by akinesia and rigidity; postural tremor is absent at rest and worse in action or posture (p. 817)." },
        { name: "Essential tremor (or another preexisting tremor)", how: "Predates the drug, does not track serum levels and persists after stopping; a preexisting tremor made worse by a drug is not this condition (p. 817)." },
        { id: "alcohol-withdrawal", how: "Withdrawal tremor with hyperreflexia and autonomic signs; alcohol withdrawal can also cause tremor independently (pp. 809, 817)." },
        { name: "Lithium toxicity", how: "Coarser tremor with muscle twitching, fasciculations or ataxia as levels approach toxic range (p. 817)." },
        { name: "Serotonin syndrome", how: "Tremor can be an early feature; look for the other serotonergic signs (p. 817; app guidance)." },
        { name: "Thyrotoxicosis, hypoglycemia, pheochromocytoma", how: "Can cause tremor independent of the medication (p. 817)." },
        { id: "gad", how: "Anxiety can produce or worsen a fine tremor (p. 817)." }
      ],
      pearls: ["**8–12 Hz**, postural, absent at rest; parkinsonian tremor is **3–6 Hz** at rest (p. 817).", "Use the **cup and saucer** to provoke it (p. 817).", "A tremor that becomes **coarse** with twitching or ataxia: check the lithium level (p. 817).", "Essential tremor worsened by lithium is **not** this condition (p. 817).", "Nontoxic lithium tremor may improve on its own (p. 817).", "Management (outside the DSM): check the level, reduce or split the dose, cut caffeine, consider propranolol; see [[stahl:c/ch07/guide/s7-lithium|Stahl, lithium]]."],
      cmp: { symptoms: "Fine 8–12 Hz tremor holding a posture, worse in action, absent at rest", exclusions: "Preexisting/essential tremor, parkinsonian tremor, tremor from medical causes alone", prevalence: "Common with lithium; no figure given", course: "Lithium tremor often eases with time; coarsening suggests toxicity" },
      clues: [["Core picture", "A man on lithium for 2 months whose tea cup rattles on its saucer, with a fine tremor of outstretched hands and none at rest"], ["Frequency", "8–12 Hz"], ["Code", "G25.1"]],
      updates: upd("**G25.1** (ICD-10-CM title “Drug-induced tremor”)" + UNCH + ". ICD-11 codes for this entry were not verified for the app." + APA)
    },
    {
      id: "other-medication-induced-movement", ch: "ch21", sec: "s21-other-mmd", pages: "818", critPages: "818",
      name: "Other medication-induced movement disorder", code: "G25.79",
      codes: [["G25.79", "Other drug induced movement disorders (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["other medication-induced movement disorder", "NMS-like syndrome with a non-DRBA drug", "parkinsonism-hyperpyrexia syndrome after dopamine agonist withdrawal (app example)", "other tardive syndromes"],
      essence: "The **residual** category for medication-induced movement disorders that fit **none of the specific entries**. The manual’s two examples: **NMS-like presentations with drugs other than antipsychotics and DRBAs**, and **other tardive conditions** (p. 818).",
      duration: "No time rule (p. 818)",
      functioning: "Varies with the presentation (p. 818). " + NOTMD,
      mood: "Not described",
      criteria: [
        ["Use", "A medication-induced movement disorder **not captured** by any specific condition in the chapter (p. 818)."],
        ["Example 1", "A presentation **resembling NMS** associated with a medication **other than** an antipsychotic or other DRBA (p. 818)."],
        ["Example 2", "**Other** medication-induced **tardive** conditions (p. 818)."],
        ["Not better explained by", "Any specific condition in the chapter, or a non-drug neurological or medical condition (p. 818; app synthesis)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the manual (p. 818)"]],
      risk: [],
      differential: [
        { id: "nms", how: "An NMS picture after a **dopamine antagonist** is G21.0; the same picture with a non-DRBA drug (for example after abrupt dopamine agonist withdrawal, p. 811) is G25.79 (app guidance)." },
        { id: "tardive-dyskinesia", how: "Choreoathetoid tardive movements have their own code, G24.01 (p. 814)." },
        { id: "tardive-dystonia", how: "Tardive dystonia has its own code, G24.09 (p. 816)." },
        { id: "tardive-akathisia", how: "Tardive akathisia has its own code, G25.71 (p. 816)." },
        { id: "medication-induced-postural-tremor", how: "Drug-induced postural tremor is G25.1 (p. 817)." },
        { name: "Serotonin syndrome", how: "Not listed as an example of this category; the manual names it only as an NMS look-alike (p. 811). Code choice for it lies outside the DSM (app note)." }
      ],
      pearls: ["Two named examples only: **NMS-like with a non-DRBA drug**, and **other tardive conditions** (p. 818).", "ICD-10-CM also has G25.70 (unspecified); DSM-5-TR uses only **G25.79** (app research note).", "Check every specific entry first (app guidance)."],
      cmp: { symptoms: "Drug-induced movement disorder fitting no specific entry", exclusions: "All specific chapter conditions", prevalence: "Not given", course: "Not described" },
      clues: [["Core picture", "A man with Parkinson’s disease who stops his dopamine agonist abruptly and develops fever, rigidity and confusion without any dopamine blocker (app example)"], ["Category", "Residual"], ["Code", "G25.79"]],
      updates: upd("**G25.79** (ICD-10-CM title “Other drug induced movement disorders”)" + UNCH + ". ICD-10-CM also contains **G25.70** (“Drug induced movement disorder, unspecified”), which the DSM does not use; no new subcodes were added under G25.7." + PD + " ICD-11 codes for this entry were not verified for the app." + APA)
    },
    {
      id: "antidepressant-discontinuation", ch: "ch21", sec: "s21-discontinuation", pages: "818–819", critPages: "818–819",
      name: "Antidepressant discontinuation syndrome", code: "T43.205A",
      codes: [
        ["T43.205A", "Adverse effect of unspecified antidepressants, initial encounter (ICD-10-CM title; record the DSM name)", NC],
        ["T43.205D", "Adverse effect of unspecified antidepressants, subsequent encounter (ICD-10-CM title; record the DSM name)", NC],
        ["T43.205S", "Adverse effect of unspecified antidepressants, sequela (ICD-10-CM title; record the DSM name)", NC]
      ],
      aka: ["SSRI discontinuation syndrome", "antidepressant withdrawal (lay and research term)", "discontinuation symptoms", "brain zaps (patient term)", "FINISH (Berber 1998 mnemonic, outside the DSM)"],
      essence: "Vague, variable symptoms beginning **2–4 days** after stopping (or sharply cutting) an antidepressant, most with **short half-life** drugs such as **paroxetine** and **venlafaxine**: **dizziness, tinnitus, electric-shock sensations, insomnia, acute anxiety** (SSRIs) or **GI cramping and rebound hypomania** (TCAs). Usually **≤2 weeks**; **no craving**, so it is **not substance withdrawal** (pp. 818–819).",
      duration: "Begins 2–4 days after the last dose; usually lasts no more than 2 weeks and is seldom present beyond 3 weeks (pp. 818–819)",
      functioning: "Not specified; can be mistaken for relapse and prompt unnecessary treatment changes (p. 819; app guidance). " + NOTMD,
      mood: "Acute anxiety is typical; earlier antidepressant use must not have caused hypomania or a mixed state; TCAs can cause rebound hypomania (p. 818)",
      criteria: [
        ["Feature", "Symptoms after discontinuing, or substantially reducing, an antidepressant of **any type**; **no pathognomonic symptom**; vague and variable (p. 818)."],
        ["SSRI picture", "Dizziness, tinnitus, “electric shock”-like sensations, insomnia, acute anxiety (p. 818)."],
        ["TCA picture", "Gastrointestinal cramping (cholinergic rebound) and **rebound hypomania** (p. 818)."],
        ["Timing", "Begins **2–4 days** after the last dose; usually **≤2 weeks**, seldom beyond **3 weeks**; may appear irregularly with intermittent nonadherence, especially with very short half-life drugs (pp. 818–819)."],
        ["Exclusion", "The antidepressant use before stopping must **not** have caused **hypomania or a mixed state** (p. 818)."],
        ["Not better explained by", "Relapse of the treated disorder, somatic symptom disorder, bipolar disorder with mixed features, a substance use disorder or stimulant withdrawal, migraine or stroke (pp. 818–819)."],
        ["Codes", "**T43.205A** initial encounter, **T43.205D** subsequent encounter, **T43.205S** sequelae (p. 818)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "**Unknown** (p. 818)"], ["Higher with", "Higher pre-stop dose, **short half-life**, serotonin reuptake inhibition, possibly rapid or ultrarapid metabolizer status (pp. 818–819)"], ["Agents most often implicated", "**Paroxetine**, **venlafaxine**; **fluoxetine** seldom (p. 818)"], ["Outside the DSM: Henssler et al., Lancet Psychiatry 2024", "79 studies, 16,532 people: about **1 in 6** (~15% placebo-adjusted) with at least one symptom, about **3%** severe"], ["Outside the DSM: Kalfas et al., JAMA Psychiatry 2025", "50 RCTs, 17,828 people: about one extra symptom vs placebo; dizziness ~6% placebo-adjusted"]],
      risk: ["**Short half-life** drug stopped **abruptly** or cut sharply rather than tapered (p. 818).", "Higher dose before stopping; serotonin reuptake inhibitors (pp. 818–819).", "**Intermittent nonadherence**, especially with very short half-life drugs such as venlafaxine (p. 818).", "Possibly **rapid or ultrarapid** cytochrome metabolizer status (p. 819).", "Protective: symptoms appear to abate with very gradual dose reduction (p. 819)."],
      differential: [
        { id: "mdd", how: "Relapse of the original depression: the manual stresses not to confuse the two; the 2–4 day onset, odd sensory symptoms and fading within weeks point to discontinuation (p. 819; app reading)." },
        { id: "panic-disorder", how: "Relapse of panic or a persistent anxiety disorder can resemble the acute anxiety of discontinuation (p. 819)." },
        { id: "ssd", how: "A longer-standing pattern of distressing somatic symptoms and related thoughts (p. 819)." },
        { id: "bipolar-i", how: "Bipolar I with mixed features; the syndrome is not diagnosed if prior antidepressant use caused hypomania or a mixed state (pp. 818–819)." },
        { id: "bipolar-ii", how: "Bipolar II with mixed features is on the same list (p. 819)." },
        { id: "stimulant-withdrawal", how: "When a **stimulant augmenter** is stopped abruptly, the picture is stimulant withdrawal, not this syndrome (p. 818)." },
        { name: "Substance use disorders and substance withdrawal", how: "Antidepressants are not reinforcing or euphoric: no craving, no self-escalation, no drug-seeking, and substance use disorder criteria are not met (pp. 818–819)." },
        { name: "Migraine, cerebrovascular accident", how: "Neurological causes of dizziness and sensory symptoms (p. 819)." }
      ],
      pearls: ["Onset **2–4 days**, usually over within **2 weeks** (pp. 818–819).", "**Paroxetine** and **venlafaxine** most often; **fluoxetine** seldom (p. 818).", "It can occur in someone who has **not stopped**, through missed doses (p. 818).", "No craving: **not** a substance withdrawal (pp. 818–819).", "Mnemonic (Berber, 1998; outside the DSM): **FINISH**: flu-like symptoms, insomnia, nausea, imbalance, sensory disturbances, hyperarousal.", "Management (outside the DSM): restart and taper slowly, or cross to [[stahl:drugs/fluoxetine|fluoxetine]] before tapering; warn patients on [[stahl:drugs/paroxetine|paroxetine]] or [[stahl:drugs/venlafaxine|venlafaxine]]."],
      cmp: { symptoms: "Dizziness, tinnitus, electric shocks, insomnia, anxiety (SSRI); GI cramps, rebound hypomania (TCA)", exclusions: "Relapse, SSD, bipolar mixed features, substance withdrawal, stimulant withdrawal, migraine, stroke", prevalence: "Unknown in the DSM; ~1 in 6 in a 2024 meta-analysis (outside the DSM)", course: "Starts 2–4 days after last dose; ≤2 weeks, seldom >3" },
      clues: [["Core picture", "A woman who stopped paroxetine abruptly 3 days ago, now dizzy, nauseated, with head ‘zaps’ and anxiety, mood not low"], ["Onset", "2–4 days after last dose"], ["Code", "T43.205A (initial)"]],
      updates: upd("**T43.205A / D / S** (ICD-10-CM title “Adverse effect of unspecified antidepressants”, initial encounter / subsequent encounter / sequela; antidepressant discontinuation syndrome is an inclusion term)" + UNCH + "; no new subcodes under T43.205. The seventh character is required (ICD-10-CM convention). **Evidence beyond the DSM**: Henssler et al. (Lancet Psychiatry, 2024; 79 studies, 16,532 people) estimated about 1 in 6 (~15% placebo-adjusted) with at least one symptom and about 3% severe, with desvenlafaxine, venlafaxine, imipramine and paroxetine among the highest; Kalfas et al. (JAMA Psychiatry, 2025; 50 RCTs, 17,828 people) found about one extra symptom versus placebo, dizziness the commonest (~6% placebo-adjusted, highest with venlafaxine), and no mood worsening attributable to stopping in the first weeks, though follow-up was mostly 2 weeks or less, so long-term effects were not addressed. The **FINISH** mnemonic is Berber’s (J Clin Psychiatry, 1998). ICD-11 codes for this entry were not verified for the app." + APA)
    },
    {
      id: "other-adverse-effect-medication", ch: "ch21", sec: "s21-adverse", pages: "819", critPages: "819",
      name: "Other adverse effect of medication", code: "T50.905A",
      codes: [
        ["T50.905A", "Adverse effect of unspecified drugs, medicaments and biological substances, initial encounter (ICD-10-CM title; record the DSM name)", NC],
        ["T50.905D", "Adverse effect of unspecified drugs, medicaments and biological substances, subsequent encounter (ICD-10-CM title; record the DSM name)", NC],
        ["T50.905S", "Adverse effect of unspecified drugs, medicaments and biological substances, sequela (ICD-10-CM title; record the DSM name)", NC]
      ],
      aka: ["adverse drug effect", "medication side effect as focus of care", "T50.905"],
      essence: "An **optional** code for a medication side effect **other than a movement symptom** that becomes a **main focus of clinical attention**: the manual’s examples are **severe hypotension, cardiac arrhythmias and priapism** (p. 819).",
      duration: "No time rule (p. 819)",
      functioning: "Defined by being a main focus of clinical attention, not by impairment (p. 819). " + NOTMD,
      mood: "Not applicable",
      criteria: [
        ["Use", "**Optional**, at the clinician’s discretion (p. 819)."],
        ["Feature", "A side effect of medication that is **not a movement symptom** (p. 819)."],
        ["Threshold", "The adverse effect has become a **main focus of clinical attention** (p. 819)."],
        ["Examples", "Severe hypotension, cardiac arrhythmias, priapism (p. 819)."],
        ["Codes", "**T50.905A** initial encounter, **T50.905D** subsequent encounter, **T50.905S** sequelae (p. 819)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not applicable; not given in the manual (p. 819)"]],
      risk: [],
      differential: [
        { id: "medication-induced-parkinsonism", how: "Movement side effects take the specific G codes in this chapter, not T50.905 (pp. 807–818)." },
        { id: "antidepressant-discontinuation", how: "Symptoms after stopping an antidepressant have their own T43.205 codes (p. 818)." },
        { id: "other-medication-induced-movement", how: "A drug-induced movement problem with no specific entry is G25.79, not T50.905 (p. 818)." }
      ],
      pearls: ["Optional, and only for **non-movement** side effects (p. 819).", "Examples to remember: **hypotension, arrhythmia, priapism** (p. 819).", "Seventh character required: **A / D / S** (p. 819).", "ICD-10-CM asks for the **nature of the effect** (the arrhythmia, the priapism) to be coded first (ICD-10-CM note, outside the DSM)."],
      cmp: { symptoms: "Non-movement medication side effect that is a main focus of care", exclusions: "Movement side effects; antidepressant discontinuation", prevalence: "Not applicable", course: "Not applicable" },
      clues: [["Core picture", "A man on trazodone admitted for a 5-hour painful erection that is now the focus of the visit"], ["Status", "Optional code"], ["Code", "T50.905A"]],
      updates: upd("**T50.905A / D / S** (ICD-10-CM title “Adverse effect of unspecified drugs, medicaments and biological substances”, initial encounter / subsequent encounter / sequela)" + UNCH + ". **ICD-10-CM note** (not DSM text): the T50.905 codes carry an instruction to **code first the nature of the adverse effect** (for example the arrhythmia or priapism). ICD-11 codes for this entry were not verified for the app." + APA)
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Acute dystonia vs akathisia vs parkinsonism vs tardive dyskinesia", ids: ["medication-induced-acute-dystonia", "medication-induced-acute-akathisia", "medication-induced-parkinsonism", "tardive-dyskinesia"] },
    { label: "NMS vs malignant catatonia vs NMS-like syndromes from other drugs", ids: ["nms", "catatonia-associated", "other-medication-induced-movement"] },
    { label: "Medication-induced parkinsonism vs Parkinson’s disease", ids: ["medication-induced-parkinsonism", "ncd-parkinsons"] },
    { label: "Antidepressant discontinuation vs stimulant withdrawal", ids: ["antidepressant-discontinuation", "stimulant-withdrawal"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 21: onset windows after a medication change", ticks: [[0, "0"], [15, "2 d"], [30, "1 wk"], [50, "4 wk"], [70, "3 mo"], [100, "months–years"]], rows: [
      { label: "Acute dystonia", dx: "medication-induced-acute-dystonia", from: 0, to: 25, color: "case", span: "≥50% in 24–48 h; ~90% by 5 days" },
      { label: "NMS", dx: "nms", from: 0, to: 50, color: "hy", span: "Exposure within 72 h; most in week 1; virtually all ≤30 days" },
      { label: "Acute akathisia", dx: "medication-induced-acute-akathisia", from: 0, to: 50, color: "guide", span: "Typically within 4 weeks" },
      { label: "Parkinsonism", dx: "medication-induced-parkinsonism", from: 38, to: 70, color: "clin", span: "Typically 2–4 weeks; usually by 3 months" },
      { label: "Tardive dyskinesia", dx: "tardive-dyskinesia", from: 70, to: 100, color: "mech", span: "≥3 months’ exposure (1 month at ≥60); movements ≥4 weeks" },
      { label: "Discontinuation (from last dose)", dx: "antidepressant-discontinuation", from: 15, to: 38, color: "drug", span: "Starts 2–4 days after last dose; usually ≤2 weeks" }
    ], note: "Clocks start at the start or increase of the drug (or a cut in an anticholinergic), except antidepressant discontinuation, which is timed from the last dose. TD may also appear within 4 weeks of stopping an oral agent or 8 weeks of stopping a depot; tardive dystonia and tardive akathisia emerge late and may persist for months to years (pp. 808–819)." }
  ]);
})();
