/* Chapter 17 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var CARER = "Support the **caregiver**: education, respite, and screening for caregiver depression. Plan early for **driving**, **firearms**, finances, **wandering** and advance directives while the person can take part.";
  var BPSD = "For agitation or psychosis, look first for **pain, infection, constipation, retention, sleep loss, sensory loss and unmet needs**, and use person-centered behavioral approaches. All antipsychotics carry a **boxed warning** for increased mortality in older adults with dementia.";
  var INFORMANT = ["Informant", "“What can’t they do now that they could do a year or two ago?”", "Always interview someone who knows the person well, separately if possible."];

  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "delirium",
      ask: [
        ["A Attention", "“Can you tell me the months of the year backward, starting with December?”", "Or serial 7s, or squeeze-on-the-letter-A. Errors or giving up show inattention."],
        ["A Awareness", "“Where are we right now? What is happening to you here?”"],
        ["B Onset", "To family: “When was she last her usual self? Did this come on over hours or days?”", "Baseline is essential."],
        ["B Fluctuation", "To nurses: “Is he different at night from in the morning?”", "Check the night notes."],
        ["C Cognition", "“What is today’s date? Are you seeing or hearing anything unusual?”", "Visual hallucinations and misperceptions are common."],
        ["D Arousal", "Does the person respond to voice and stay awake long enough to assess?", "If not, it is a disorder of arousal."],
        ["E Cause", "“Any new medicines, alcohol, sleeping tablets or drugs? Pain, fever, constipation, trouble passing urine?”", "Review every drug chart change."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Find and treat the **cause**; prevent harm with **non-drug** measures. No drug is approved to treat delirium.",
        points: [
          "Work-up: vital signs, oxygen saturation, glucose, electrolytes and calcium, renal and liver function, blood count, urinalysis and cultures, medication review, ECG; imaging or lumbar puncture when indicated.",
          "**Multicomponent** care (reorientation, glasses and hearing aids, sleep, mobility, hydration, family presence, avoiding restraints and catheters) prevents delirium in about a third of at-risk inpatients.",
          "Low-dose [[stahl:drugs/haloperidol|haloperidol]] or [[stahl:drugs/quetiapine|quetiapine]] only for **dangerous agitation** or distressing psychosis, for the shortest time; trials show no shortening of delirium. Avoid in Lewy body and Parkinson’s disease where possible.",
          "Avoid benzodiazepines, **except** for alcohol or sedative withdrawal delirium, where they are the treatment (e.g., [[stahl:drugs/diazepam|diazepam]]), with **thiamine** first.",
          "Reassess cognition after recovery: delirium often unmasks or accelerates an NCD."
        ],
        stahl: [["Haloperidol", "drugs/haloperidol"], ["Quetiapine", "drugs/quetiapine"], ["Diazepam", "drugs/diazepam"]]
      }
    },
    {
      id: "major-ncd",
      ask: [
        INFORMANT,
        ["A Concern", "“Have you noticed changes in your memory, finding words, finding your way, or planning?”", "A concern may need to be drawn out; many people minimize."],
        ["A Testing", "Bedside or formal tests across the six domains, against age and education norms.", "Brief screens miss high-premorbid decline."],
        ["B Independence", "“Who pays the bills and sets out the medicines now? Since when?”", "Help with complex IADLs = major."],
        ["Severity", "“Can she dress, bathe and eat without help?”", "IADLs mild, basic ADLs moderate, full care severe."],
        ["C Delirium", "“Has anything changed suddenly in the past days or weeks?”"],
        ["D Mood", "“How has your mood been? Do you still enjoy things?”", "Depression mimics and accompanies NCD."],
        ["Behavior", "“Any suspiciousness, seeing things, agitation, wandering, sleep problems, apathy?”", "Each disturbance is coded."],
        ["Safety", "“Is she still driving? Any firearms at home? Any thoughts of not wanting to live?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat **reversible contributors**, manage risk factors, address safety and caregiver needs; treat by etiology.",
        points: [
          "Screen: thyroid function, vitamin B12, folate, glucose, calcium, renal and liver function, blood count; syphilis and HIV when indicated; CT or MRI; hearing and vision; depression; medications with anticholinergic or sedative burden.",
          "Cholinesterase inhibitors and memantine by etiology (see the subtype pages).",
          BPSD,
          CARER
        ],
        stahl: [["Dementia: diagnosis and causes", "c/ch12/guide/s12-mci"], ["Agitation in dementia", "c/ch12/guide/s12-agitation"]]
      }
    },
    {
      id: "mild-ncd",
      ask: [
        INFORMANT,
        ["A Concern", "“Do tasks take more effort than before? Do you rely more on lists or reminders?”"],
        ["A Testing", "Formal neuropsychological testing is most useful at this stage.", "Typically 1–2 SD below norms."],
        ["B Independence", "“Do you still manage your money and medicines yourself, even if it takes longer?”", "Yes = mild."],
        ["D Mood and sleep", "“How is your mood and sleep? Any worries weighing on you?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat contributors (depression, sleep apnea, hearing loss, medications, vascular risk), encourage **exercise, social and cognitive activity**, and monitor with serial testing.",
        points: [
          "No cholinesterase inhibitor is approved for mild cognitive impairment, and trials show little benefit.",
          "For mild NCD due to Alzheimer’s disease with confirmed amyloid, [[stahl:drugs/lecanemab|lecanemab]] or [[stahl:drugs/donanemab|donanemab]] may be considered in specialist care, with MRI monitoring for ARIA.",
          "Reassess every 6–12 months; many remain stable or improve when contributors are treated."
        ],
        stahl: [["Mild cognitive impairment", "c/ch12/guide/s12-mci"], ["Amyloid treatments", "c/ch12/guide/s12-amyloid"]]
      }
    },
    {
      id: "ncd-alzheimers",
      ask: [
        INFORMANT,
        ["B Onset", "“When did you first notice? Has it worsened steadily, or in steps?”", "Steady decline; plateaus make it possible."],
        ["C Memory", "“Does he repeat questions or forget recent events and conversations?”", "Memory and learning first."],
        ["C Other domain", "“Any trouble finding words, finding the way, or using appliances?”", "A second domain for probable (major)."],
        ["C Genes", "“Did a parent or sibling develop dementia before 65?”", "Possible causative mutation."],
        ["D Stroke", "“Any strokes, mini-strokes or sudden changes?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "A **cholinesterase inhibitor** for mild to moderate disease; **memantine** for moderate to severe; anti-amyloid antibodies for selected early cases.",
        points: [
          "[[stahl:drugs/donepezil|Donepezil]], [[stahl:drugs/rivastigmine|rivastigmine]] or [[stahl:drugs/galantamine|galantamine]]: modest benefit; watch for nausea, bradycardia and syncope.",
          "[[stahl:drugs/memantine|Memantine]] for moderate to severe disease, alone or added to a cholinesterase inhibitor.",
          "[[stahl:drugs/lecanemab|Lecanemab]] and [[stahl:drugs/donanemab|donanemab]]: early symptomatic disease with confirmed amyloid; MRI monitoring for **ARIA**; highest risk in **APOE ε4 homozygotes**.",
          "[[stahl:drugs/brexpiprazole|Brexpiprazole]] is FDA-approved for agitation in Alzheimer’s dementia (2023).",
          BPSD,
          CARER
        ],
        stahl: [["Alzheimer’s disease", "c/ch12/guide/s12-ad"], ["Cholinesterase inhibitors", "c/ch12/guide/s12-ache"], ["Memantine", "c/ch12/guide/s12-memantine"], ["Donepezil", "drugs/donepezil"], ["Lecanemab", "drugs/lecanemab"]]
      }
    },
    {
      id: "ncd-frontotemporal",
      ask: [
        INFORMANT,
        ["C Disinhibition", "“Has he done or said things that are out of character or embarrassing?”"],
        ["C Apathy", "“Has she lost interest in work, hobbies or self-care?”"],
        ["C Empathy", "“Does he seem to care less about others’ feelings?”"],
        ["C Repetition", "“Any new routines, rituals, collecting or repeated phrases?”"],
        ["C Eating", "“Any changes in eating: sweets, overeating, putting things in the mouth?”"],
        ["C Language", "“Trouble finding words, speaking in sentences, or understanding word meanings?”"],
        ["D Memory", "“Can he still tell you about recent events and find his way?”", "Relative sparing supports FTD."]
      ],
      tx: {
        asOf: "October 2026",
        first: "No disease-modifying treatment; manage behavior, safety and family strain, and offer **genetic counseling** when familial.",
        points: [
          "Cholinesterase inhibitors **do not help** and may worsen behavior.",
          "SSRIs (e.g., [[stahl:drugs/sertraline|sertraline]] or [[stahl:drugs/citalopram|citalopram]]) or [[stahl:drugs/trazodone|trazodone]] are used for disinhibition, compulsions and hyperorality; evidence is limited.",
          "Speech and language therapy for the language variants; check for motor neuron disease.",
          CARER
        ],
        stahl: [["Frontotemporal dementia", "c/ch12/guide/s12-ftd"], ["Trazodone", "drugs/trazodone"]]
      }
    },
    {
      id: "ncd-lewy",
      ask: [
        INFORMANT,
        ["C Fluctuation", "“Are there days or hours when she is much clearer, and others when she stares blankly or is very drowsy?”"],
        ["C Hallucinations", "“Does he see people, animals or things that others can’t see?”", "Often well-formed and not frightening."],
        ["C Parkinsonism", "“Any stiffness, shuffling, tremor or falls? Which came first, the thinking or the movement?”", "The 1-year rule."],
        ["Suggestive: RBD", "To the bed partner: “Does he shout, punch or kick in his sleep, as if acting out dreams?”"],
        ["Suggestive: neuroleptics", "“Any bad reaction to a tranquilizer or antipsychotic?”"],
        ["Autonomic", "“Dizziness on standing, constipation, fainting, loss of smell?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "A **cholinesterase inhibitor** (rivastigmine or donepezil) helps cognition and hallucinations; **avoid typical antipsychotics**.",
        points: [
          "[[stahl:drugs/rivastigmine|Rivastigmine]] or [[stahl:drugs/donepezil|donepezil]] are first line for cognition and psychosis.",
          "If an antipsychotic is unavoidable, very low-dose [[stahl:drugs/quetiapine|quetiapine]] or [[stahl:drugs/clozapine|clozapine]]; [[stahl:drugs/pimavanserin|pimavanserin]] is used off-label; never [[stahl:drugs/haloperidol|haloperidol]].",
          "Levodopa at the lowest effective dose (may worsen hallucinations); manage orthostatic hypotension and falls; clonazepam or melatonin for REM sleep behavior disorder.",
          CARER
        ],
        stahl: [["Lewy body dementia", "c/ch12/guide/s12-lbd"], ["Psychosis in dementia", "c/ch12/guide/s12-psychosis"], ["Rivastigmine", "drugs/rivastigmine"]]
      }
    },
    {
      id: "ncd-vascular",
      ask: [
        ["B Events", "“Any strokes, mini-strokes, sudden weakness, speech or vision loss? Did the thinking change at that time?”"],
        ["B Pattern", "“Is she slower to think, and does she struggle to plan or switch tasks?”"],
        ["C Risk", "“Blood pressure, diabetes, cholesterol, smoking, irregular heartbeat?”"],
        ["Mood", "“Any low mood, tearfulness or laughing and crying without reason?”", "Vascular depression; emotional lability."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Secondary prevention** of stroke: blood pressure, antiplatelet or anticoagulant as indicated, statin, diabetes control, smoking cessation, exercise.",
        points: [
          "Cholinesterase inhibitors and memantine have small effects; consider them in mixed Alzheimer’s and vascular disease.",
          "Treat depression and apathy; rehabilitation for physical deficits.",
          CARER
        ],
        stahl: [["Vascular dementia", "c/ch12/guide/s12-vascular"]]
      }
    },
    {
      id: "ncd-tbi",
      ask: [
        ["B Injury", "“Tell me about the injury. Were you knocked out? For how long? What is the last thing you remember before, and the first after?”", "Grade with Table 2."],
        ["C Timing", "“Did the thinking problems start straight after the injury, or later?”", "Must start immediately."],
        ["Course", "“Have things improved, stayed the same or worsened since?”", "Late worsening: look for other causes."],
        ["Differential", "“Nightmares or flashbacks? Low mood? Sleep? Alcohol or drugs? A claim or court case?”", "PTSD, depression, substances, compensation."],
        ["Safety", "“Have you had thoughts of ending your life since the injury?”", "Suicide risk is raised after TBI."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Cognitive rehabilitation**, graded return to activity, and treatment of comorbid depression, PTSD, sleep and substance problems.",
        points: [
          "Avoid sedating and anticholinergic drugs where possible; people with TBI are more sensitive to psychotropic side effects.",
          "Amantadine and methylphenidate are used for arousal and attention after TBI; evidence is modest.",
          "Aggression: behavioral approaches first; propranolol has some evidence.",
          "Screen for seizures, headache and endocrine problems after moderate to severe TBI."
        ],
        stahl: [["Methylphenidate", "drugs/methylphenidate"], ["Amantadine", "drugs/amantadine"]]
      }
    },
    {
      id: "ncd-substance",
      ask: [
        ["B Timing", "“How long since your last drink or use? Were the memory problems there between binges?”", "Must persist beyond withdrawal."],
        ["C Exposure", "“How much, how often, for how many years?”"],
        ["D Course", "“Has your memory improved since you stopped?”"],
        ["Korsakoff", "Test new learning with a word list; note confabulation.", "Look for nystagmus, ataxia and gaze palsy (Wernicke’s)."],
        ["Other causes", "“Any head injuries? Ever tested for HIV, hepatitis C or syphilis?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Abstinence** and **thiamine**; recovery is common with sustained abstinence, especially before 50.",
        points: [
          "Parenteral thiamine for suspected Wernicke’s encephalopathy, before glucose; oral thiamine and nutrition long term.",
          "Treat the use disorder (see Chapter 16); simplify treatment for impaired memory.",
          "Korsakoff amnesia often needs supported living; confabulation is not lying."
        ],
        stahl: [["Alcohol", "c/ch13/guide/s13-alcohol"], ["Naltrexone", "drugs/naltrexone"], ["Acamprosate", "drugs/acamprosate"]]
      }
    },
    {
      id: "ncd-hiv",
      ask: [
        ["B HIV", "Confirm HIV status, CD4 nadir and viral load (plasma, and CSF if indicated)."],
        ["Function", "“Have you missed doses of your HIV medicines? Any change at work?”", "Adherence reflects function."],
        ["C Other causes", "“Any headache, fever, seizures or sudden change?”", "Opportunistic infection, lymphoma."],
        ["Comorbidity", "“Mood? Alcohol, methamphetamine or other drugs?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Effective **antiretroviral therapy** with viral suppression, and control of vascular risk, depression and substance use.",
        points: [
          "Consider CSF viral escape if decline occurs despite suppressed plasma virus.",
          "Simplify regimens and use adherence supports.",
          "Investigate any sudden change urgently."
        ],
        stahl: []
      }
    },
    {
      id: "ncd-prion",
      ask: [
        ["B Speed", "“How quickly has this happened: weeks, months or years?”", "Rapid decline over months is the alarm."],
        ["C Motor", "“Any jerks, jumps when startled, unsteadiness or abnormal movements?”"],
        ["Exposure", "“Any brain or eye surgery, growth hormone injections, dura grafts, or family members with a similar illness?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "No disease-modifying treatment: **palliative** care, family support and genetic counseling for familial forms.",
        points: [
          "Notify public health as required locally; use infection-control precautions for neurosurgical instruments.",
          "Clonazepam or valproate for myoclonus; treat distress and sleep."
        ],
        stahl: []
      }
    },
    {
      id: "ncd-parkinsons",
      ask: [
        ["B PD", "“When was Parkinson’s disease diagnosed? When did thinking problems start?”", "PD at least 1 year first."],
        ["C Course", "“Has it come on gradually?”"],
        ["Psychosis", "“Do you see people or animals that aren’t there, or feel someone is behind you?”"],
        ["Mood and sleep", "“Low mood, loss of drive, acting out dreams, daytime sleepiness?”"],
        ["Drugs", "Review dopaminergic and anticholinergic drugs.", "They can drive hallucinations and confusion."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Rivastigmine** (approved for PD dementia) or donepezil; reduce anticholinergics and simplify dopaminergic drugs.",
        points: [
          "[[stahl:drugs/rivastigmine|Rivastigmine]] may worsen tremor slightly.",
          "Psychosis: reduce offending drugs first; [[stahl:drugs/pimavanserin|pimavanserin]] is approved for PD psychosis; low-dose [[stahl:drugs/quetiapine|quetiapine]] or [[stahl:drugs/clozapine|clozapine]] are alternatives.",
          "Avoid typical antipsychotics and risperidone."
        ],
        stahl: [["Pimavanserin", "drugs/pimavanserin"], ["Rivastigmine", "drugs/rivastigmine"]]
      }
    },
    {
      id: "ncd-huntingtons",
      ask: [
        ["C Family", "“Did a parent have jerky movements, dementia or psychiatric illness, or die young?”"],
        ["Executive", "“Is organizing and planning harder? Slower to think?”"],
        ["Psychiatric", "“Irritability, low mood, worry, compulsions?”"],
        ["Suicide", "“Have you thought about ending your life?”", "Ask at every visit."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Multidisciplinary care, **genetic counseling** (especially before predictive testing), and treatment of mood, irritability and chorea.",
        points: [
          "Chorea: [[stahl:drugs/tetrabenazine|tetrabenazine]] or [[stahl:drugs/deutetrabenazine|deutetrabenazine]] (watch for depression and suicidality), or an antipsychotic.",
          "SSRIs for depression, irritability and obsessive symptoms.",
          "Plan for dysphagia, falls and future care."
        ],
        stahl: [["Tetrabenazine", "drugs/tetrabenazine"], ["Deutetrabenazine", "drugs/deutetrabenazine"]]
      }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "confusion", title: "Sudden confusion or acute change in mental state",
      intro: "An acute change in attention or alertness is **delirium until proven otherwise**: a medical emergency. Check arousal, test attention, establish the **baseline** from someone who knows the person, and look for the **cause**.",
      ask: ["When was the person last their usual self?", "Did it come on over hours or days? Is it worse at night?", "Can they keep attention on a simple task (months backward)?", "Any new medicines, alcohol, sedatives or drugs, or stopping them?", "Fever, pain, falls, constipation, urinary retention?", "Any memory problems before this?"],
      mustNotMiss: ["**Hypoxia, hypoglycemia, sepsis, stroke, intracranial bleeding**.", "**Alcohol or sedative withdrawal** (seizures, delirium tremens).", "**Wernicke’s encephalopathy**: give thiamine.", "**Hypoactive delirium** mistaken for depression or fatigue."],
      helpers: ["delirium", "neurocognitive"],
      items: [
        { ch: "ch17", dx: "delirium", when: "Acute, fluctuating inattention with a medical or substance cause." },
        { ch: "ch17", dx: "other-specified-delirium", when: "Delirium-like picture short of full criteria (F05)." },
        { ch: "ch17", dx: "unspecified-delirium", when: "Not enough information to specify, e.g., in the emergency room (F05)." },
        { ch: "ch17", dx: "ncd-lewy", when: "Fluctuating cognition and visual hallucinations over months, not days." },
        { ch: "ch16", dx: "alcohol-withdrawal", when: "Tremor, sweating and anxiety without disturbed attention; delirium if attention fails." },
        { ch: "ch02", dx: "brief-psychotic-disorder", when: "Sudden psychosis with a clear sensorium and no medical cause." },
        { ch: "ch08", dx: "dissociative-amnesia", when: "Sudden memory loss for personal information with intact attention." }
      ]
    },
    {
      id: "memory-older",
      helpers: ["neurocognitive"],
      items: [
        { ch: "ch17", dx: "mild-ncd", when: "Modest decline with independence kept through extra effort and lists." },
        { ch: "ch17", dx: "ncd-alzheimers", when: "Insidious, steady memory-led decline; patient often minimizes it." },
        { ch: "ch17", dx: "ncd-vascular", when: "Slowing and poor planning tied to strokes, with late-onset depression (vascular depression)." }
      ]
    },
    {
      id: "memory-gaps",
      helpers: ["neurocognitive"],
      items: [
        { ch: "ch17", dx: "ncd-substance", when: "Amnesia with confabulation after years of heavy drinking (Korsakoff)." },
        { ch: "ch17", dx: "ncd-tbi", when: "Memory problems that began immediately after a head injury." }
      ]
    }
  ]);
})();
