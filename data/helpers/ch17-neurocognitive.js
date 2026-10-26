/*
 * Diagnostic helpers for Chapter 17 (Neurocognitive Disorders), DSM-5-TR pp. 667–732.
 * "delirium": from acute confusion to delirium (with subtype and code), a disorder of arousal, or another route.
 * "neurocognitive": from cognitive decline to major or mild NCD and its etiological subtype, with current codes.
 * Codes follow the APA coding update of September 2022 and later changes (G20.C, G35.D), checked through October 2026.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "delirium",
    chapter: "ch17",
    title: "Is it delirium?",
    summary: "Start from an acutely confused person: check arousal, attention and onset, then find the cause to reach the delirium subtype and its code, or another route.",
    caution: "A teaching aid built from DSM-5-TR pp. 672–678. Delirium is a medical emergency: assess vital signs, oxygen, glucose, medications and withdrawal at once. Codes are current through October 2026; use the code set in force on the date of service.",
    start: "arousal",
    nodes: {
      arousal: {
        q: "Is the person awake enough to respond to your voice and engage, even briefly?",
        help: "Delirium needs enough cortical arousal for verbal assessment. Someone who responds only to pain, or not at all, has a disorder of arousal (stupor or coma).",
        options: [
          { label: "Yes, responds to voice", to: "attn", note: "Can be assessed." },
          { label: "No: only minimal response to stimulation", to: "r:arousal", note: "Stupor or coma." }
        ]
      },
      attn: {
        q: "Is attention disturbed (hard to direct, focus, sustain or shift), with reduced awareness of the surroundings?",
        help: "Test it: months of the year backward, serial 7s, or say “squeeze when you hear the letter A” over a string of letters. Questions must be repeated; answers perseverate.",
        options: [
          { label: "Yes", to: "onset", note: "Criterion A." },
          { label: "No: attention is intact", to: "r:notattn", note: "Not delirium." }
        ]
      },
      onset: {
        q: "Did it develop over hours to a few days, as a change from the person’s usual state, and does it fluctuate during the day?",
        help: "Ask a family member or carer about baseline. Fluctuation is often worse in the evening and at night.",
        options: [
          { label: "Yes", to: "cog", note: "Criterion B." },
          { label: "No: gradual over months or years", to: "r:gradual", note: "Think NCD." }
        ]
      },
      cog: {
        q: "Is there another cognitive disturbance as well: memory, disorientation, language, visuospatial ability or perception (illusions, hallucinations)?",
        help: "Disorientation to time and place and recent memory loss are the most common.",
        options: [
          { label: "Yes", to: "ncd", note: "Criterion C." },
          { label: "No, or only mildly: falls short of full delirium", to: "r:subsyndromal", note: "Subthreshold." }
        ]
      },
      ncd: {
        q: "Is the whole picture already explained by a known NCD, with nothing new (for example, the usual fluctuations of Lewy body disease)?",
        help: "An NCD makes delirium more likely; it does not exclude it. A new, acute change on top of an NCD is delirium until proven otherwise.",
        options: [
          { label: "No: this is a new acute change", to: "cause", note: "Criterion D met." },
          { label: "Yes: the established NCD explains it", to: "r:ncdexplains", note: "No delirium." }
        ]
      },
      cause: {
        q: "What does the history, examination or laboratory evidence point to?",
        help: "Criterion E. Look for infection, metabolic and electrolyte problems, hypoxia, organ failure, stroke, pain, retention, new drugs, intoxication and withdrawal.",
        options: [
          { label: "Intoxication with a substance", to: "r:intox", note: "Intoxication delirium." },
          { label: "Withdrawal from a substance", to: "wd", note: "Withdrawal delirium." },
          { label: "A medication taken as prescribed", to: "r:med", note: "Medication-induced." },
          { label: "A medical condition", to: "r:amc", note: "Due to another medical condition." },
          { label: "More than one of these", to: "r:multiple", note: "Multiple etiologies." },
          { label: "Not yet known, or not enough information (e.g., emergency room)", to: "r:unspec", note: "Keep looking." }
        ]
      },
      wd: {
        q: "Withdrawal from which substance?",
        help: "Only alcohol, sedatives/hypnotics/anxiolytics, opioids and other or unknown substances have withdrawal delirium codes.",
        options: [
          { label: "Alcohol", to: "r:wd-alcohol", note: "Delirium tremens." },
          { label: "Sedative, hypnotic or anxiolytic", to: "r:wd-sed", note: "e.g., benzodiazepine." },
          { label: "Opioid", to: "r:wd-opioid", note: "Uncommon." },
          { label: "Other or unknown", to: "r:wd-other", note: "F19." }
        ]
      }
    },
    results: {
      "arousal": { label: "Not delirium (yet)", dx: "A disorder of arousal (stupor or coma)", line: "Delirium cannot be diagnosed when arousal is too low for verbal assessment (Criterion D).", points: ["Treat as a medical emergency.", "Reassess as arousal improves: delirium often follows emergence from coma or sedation."], link: { ch: "ch17", sec: "s17-delirium-criteria", label: "Delirium criteria" } },
      "notattn": { label: "Not delirium", dx: "Attention is intact", line: "Without a disturbance of attention and awareness, Criterion A is not met.", points: ["Consider a psychotic, mood or anxiety disorder, or an NCD.", "Recheck later: delirium fluctuates."], link: { ch: "ch17", sec: "s17-delirium-ddx", label: "Delirium differential" } },
      "gradual": { label: "Probably not delirium", dx: "Gradual decline: consider an NCD", line: "Onset over months or years fits major or mild NCD rather than delirium.", points: ["Use the [[helper:neurocognitive|neurocognitive helper]].", "Consider persistent delirium if a cause is ongoing."], link: { ch: "ch17", sec: "s17-ncd-criteria", label: "Major and mild NCD" }, dxId: "major-ncd" },
      "subsyndromal": { dx: "Other specified delirium (subsyndromal delirium)", line: "Delirium-like disturbance of attention, thinking and circadian rhythm that falls short of full criteria; record the reason.", points: ["Code: F05.", "Look for a cause anyway: subsyndromal delirium still predicts poor outcomes."], link: { ch: "ch17", sec: "s17-delirium-ddx", label: "Residual categories" }, dxId: "other-specified-delirium" },
      "ncdexplains": { label: "No delirium", dx: "The established NCD explains the picture", line: "Fluctuation or confusion that is part of a known NCD, with no new acute change, is not delirium.", points: ["Lewy body disease fluctuates by itself.", "Any new acute worsening deserves a medical check."], link: { ch: "ch17", sec: "s17-delirium-ddx", label: "Delirium versus NCD" }, dxId: "ncd-lewy" },
      "intox": { dx: "Substance intoxication delirium", line: "Diagnose instead of intoxication when attention and cognitive symptoms predominate and need clinical attention.", points: ["Code F1x.121 (mild use disorder), F1x.221 (moderate or severe), F1x.921 (none); e.g., F14.221 severe cocaine use disorder with cocaine intoxication delirium.", "Add acute or persistent, and hyperactive, hypoactive or mixed."], link: { ch: "ch17", sec: "s17-delirium-specifiers", label: "Delirium codes" }, dxId: "delirium" },
      "med": { dx: "Medication-induced delirium", line: "A side effect of a medication taken as prescribed.", points: ["Code the class with the 9 code: F11.921 opioid, F13.921 sedative, F15.921 stimulant, F16.921 ketamine, F12.921 pharmaceutical cannabinoid; F19.921 for others (e.g., dexamethasone).", "Review anticholinergic and sedative burden."], link: { ch: "ch17", sec: "s17-delirium-specifiers", label: "Delirium codes" }, dxId: "delirium" },
      "amc": { dx: "Delirium due to another medical condition", line: "Name the condition in the diagnosis and code it first.", points: ["Code: condition, then F05 (e.g., K76.82 hepatic encephalopathy; F05 delirium due to hepatic encephalopathy).", "Treat the cause; non-drug care first."], link: { ch: "ch17", sec: "s17-delirium-specifiers", label: "Delirium codes" }, dxId: "delirium" },
      "multiple": { dx: "Delirium due to multiple etiologies", line: "More than one medical condition, or a medical condition plus a substance or medication.", points: ["Code each: e.g., K76.82; F05 delirium due to hepatic failure; F10.231 alcohol withdrawal delirium.", "Common in older and ICU patients."], link: { ch: "ch17", sec: "s17-delirium-specifiers", label: "Delirium codes" }, dxId: "delirium" },
      "unspec": { dx: "Unspecified delirium (for now)", line: "Delirium symptoms with insufficient information for a specific subtype.", points: ["Code: F05.", "Keep searching for the cause and revise."], link: { ch: "ch17", sec: "s17-delirium-ddx", label: "Residual categories" }, dxId: "unspecified-delirium" },
      "wd-alcohol": { dx: "Alcohol withdrawal delirium", line: "Usually in moderate or severe alcohol use disorder, often with a medical illness.", points: ["Code: F10.131 (mild), F10.231 (moderate or severe), F10.931 (no use disorder).", "Benzodiazepines are indicated here; give thiamine."], link: { ch: "ch17", sec: "s17-delirium-specifiers", label: "Delirium codes" }, dxId: "delirium" },
      "wd-sed": { dx: "Sedative, hypnotic or anxiolytic withdrawal delirium", line: "Can follow regular prescribed use as well as misuse.", points: ["Code: F13.131, F13.231 or F13.931 (prescribed use without a use disorder).", "Risk of seizures: reinstate and taper."], link: { ch: "ch17", sec: "s17-delirium-specifiers", label: "Delirium codes" }, dxId: "delirium" },
      "wd-opioid": { dx: "Opioid withdrawal delirium", line: "Uncommon; uses the “other opioid-induced disorder” codes.", points: ["Code: F11.188, F11.288 or F11.988.", "Look for another medical cause."], link: { ch: "ch17", sec: "s17-delirium-specifiers", label: "Delirium codes" }, dxId: "delirium" },
      "wd-other": { dx: "Other (or unknown) substance withdrawal delirium", line: "For substances outside the named classes.", points: ["Code: F19.131, F19.231 or F19.931."], link: { ch: "ch17", sec: "s17-delirium-specifiers", label: "Delirium codes" }, dxId: "delirium" }
    }
  },
  {
    id: "neurocognitive",
    chapter: "ch17",
    title: "Which neurocognitive disorder?",
    summary: "Start from a cognitive concern: rule out delirium, confirm an acquired decline, decide major or mild by independence, then work out the cause and certainty, with current codes.",
    caution: "A teaching aid built from DSM-5-TR pp. 679–732 and the APA coding updates (2022–2025). Always look for reversible contributors and delirium. Codes are current through October 2026; use the code set in force on the date of service.",
    start: "acute",
    nodes: {
      acute: {
        q: "Is there an acute disturbance of attention or awareness right now, developing over hours to days?",
        help: "Major and mild NCD cannot be diagnosed from deficits that occur only during delirium.",
        options: [
          { label: "Yes", to: "r:delirium-first", note: "Delirium first." },
          { label: "No", to: "decline", note: "Go on." }
        ]
      },
      decline: {
        q: "Is there a decline from a previous level: a concern from the person, an informant or you, and objective impairment on testing?",
        help: "Both are needed. Ask specific questions (shopping lists, TV plots, resuming interrupted tasks, bills) and test against norms for age, education and culture.",
        options: [
          { label: "Yes: a concern and objective impairment", to: "other", note: "Criterion A." },
          { label: "A concern, but testing is normal for age and education", to: "r:noncd", note: "No objective decline." },
          { label: "No: the difficulty has been lifelong", to: "r:neurodev", note: "Not acquired." },
          { label: "Cannot establish yet (no informant, no testing)", to: "r:unspecified", note: "Insufficient." }
        ]
      },
      other: {
        q: "Could another mental disorder, such as major depression or schizophrenia, better explain the deficits?",
        help: "Depression gives variable, effort-dependent results that improve with cues and with treatment. When in doubt, treat and retest.",
        options: [
          { label: "No", to: "indep", note: "Criterion D met." },
          { label: "Yes, or possibly: depression began first and testing is variable", to: "r:mdd", note: "Treat and retest." }
        ]
      },
      indep: {
        q: "Does the person now need someone else to help with complex instrumental activities, such as bills or medications?",
        help: "Major NCD: help needed (then rate mild = IADLs, moderate = basic ADLs, severe = fully dependent). Mild NCD: independent, with more effort or compensation. Each result gives both codes.",
        options: [
          { label: "Yes: major NCD", to: "course", note: "Criterion B (major)." },
          { label: "No: mild NCD", to: "course", note: "Criterion B (mild)." }
        ]
      },
      course: {
        q: "What best describes the onset and context?",
        help: "Onset and course are the strongest clues to etiology.",
        options: [
          { label: "Immediately after a head injury with loss of consciousness, amnesia, confusion or neurological signs", to: "r:tbi", note: "TBI." },
          { label: "Tied to a stroke, stepwise, or prominent slowing and executive decline with vascular disease", to: "vasc", note: "Vascular." },
          { label: "Rapid over weeks to months, with myoclonus, startle or ataxia", to: "r:prion", note: "Prion." },
          { label: "Persisting beyond intoxication and withdrawal in heavy substance use", to: "r:substance", note: "Substance-induced." },
          { label: "In documented HIV infection", to: "r:hiv", note: "HIV." },
          { label: "With another medical condition (thyroid, B12, tumor, subdural, NPH, MS, lupus, neurosyphilis)", to: "r:amc", note: "Another medical condition." },
          { label: "Insidious onset and gradual progression", to: "degen", note: "Neurodegenerative." }
        ]
      },
      vasc: {
        q: "Is there neuroimaging evidence of significant cerebrovascular injury, a documented stroke tied in time to the decline, or clinical plus genetic evidence (e.g., CADASIL)?",
        help: "Imaging evidence: large vessel infarcts or hemorrhages, a strategic infarct (angular gyrus, thalamus, basal forebrain), two or more lacunes outside the brainstem, or extensive confluent white matter lesions.",
        options: [
          { label: "Yes", to: "r:vasc-prob", note: "Probable." },
          { label: "No imaging and no documented temporal link", to: "r:vasc-poss", note: "Possible." },
          { label: "Imaging shows only mild white matter change, and memory loss came first", to: "ad", note: "Think Alzheimer’s." }
        ]
      },
      degen: {
        q: "What came first or dominates the picture?",
        help: "Ask the informant about the earliest change.",
        options: [
          { label: "Memory and learning", to: "ad", note: "Alzheimer’s?" },
          { label: "Behavior: disinhibition, apathy, lost empathy, compulsions, hyperorality", to: "ftd", note: "Frontotemporal?" },
          { label: "Language", to: "lang", note: "Aphasia." },
          { label: "Fluctuations, visual hallucinations, parkinsonism or dream enactment", to: "lewy", note: "Lewy bodies?" },
          { label: "Established Parkinson’s disease came first", to: "pd", note: "Parkinson’s?" },
          { label: "Chorea, or Huntington’s disease in the family or on genetic testing", to: "r:hd", note: "Huntington’s." },
          { label: "Several processes seem to contribute", to: "r:multiple", note: "Mixed." },
          { label: "Cannot tell", to: "r:unknown", note: "Unknown." }
        ]
      },
      ad: {
        q: "Which best fits?",
        help: "For major NCD, a typical picture (memory plus another domain, steady decline without long plateaus) is enough for probable. For mild NCD, only a causative mutation makes it probable.",
        options: [
          { label: "A causative mutation (APP, PSEN1, PSEN2) by testing or family history", to: "r:ad-prob", note: "Probable." },
          { label: "Major NCD: memory plus another domain, steadily progressive, no long plateaus", to: "r:ad-prob", note: "Probable." },
          { label: "Mild NCD: memory decline, steadily progressive, no mutation", to: "r:ad-poss", note: "Possible." },
          { label: "Atypical course (long plateaus) or not clearly memory-led", to: "r:ad-poss", note: "Possible." },
          { label: "Another process (e.g., strokes) clearly adds to it", to: "r:multiple", note: "Multiple etiologies." }
        ]
      },
      ftd: {
        q: "Are three or more of the five behavioral symptoms present, with decline in social cognition or executive function, and relative sparing of memory and perceptual-motor skills?",
        help: "Disinhibition; apathy or inertia; loss of sympathy or empathy; perseverative, stereotyped or compulsive behavior; hyperorality and dietary change.",
        options: [
          { label: "Yes", to: "ftdimg", note: "Behavioral variant." },
          { label: "No: fewer features, or memory is affected early", to: "r:unknown", note: "Unclear." }
        ]
      },
      lang: {
        q: "What kind of language problem?",
        help: "Semantic: loss of word meaning. Nonfluent/agrammatic: effortful, ungrammatical speech. Logopenic: word-finding pauses and poor repetition.",
        options: [
          { label: "Semantic or nonfluent/agrammatic", to: "ftdimg", note: "Language variant." },
          { label: "Logopenic", to: "r:logopenic", note: "Usually Alzheimer’s." }
        ]
      },
      ftdimg: {
        q: "Is there a causative mutation, or disproportionate frontal and/or temporal involvement on imaging?",
        help: "MAPT, GRN, C9orf72 and others; frontal and anterior temporal atrophy, or hypoperfusion or hypometabolism there.",
        options: [
          { label: "Yes", to: "r:ftd-prob", note: "Probable." },
          { label: "No mutation evidence and no imaging done", to: "r:ftd-poss", note: "Possible." }
        ]
      },
      lewy: {
        q: "Count the features. Core: fluctuating cognition, recurrent detailed visual hallucinations, parkinsonism after the cognitive decline. Suggestive: REM sleep behavior disorder, severe neuroleptic sensitivity.",
        help: "Low dopamine transporter uptake, low MIBG uptake or REM sleep without atonia carry the weight of a core feature.",
        options: [
          { label: "Two core, or one suggestive plus at least one core", to: "r:lewy-prob", note: "Probable." },
          { label: "One core only, or suggestive features only", to: "r:lewy-poss", note: "Possible." },
          { label: "Parkinson’s disease was diagnosed at least 1 year before the cognitive decline", to: "pd", note: "Think Parkinson’s." }
        ]
      },
      pd: {
        q: "Did Parkinson’s disease clearly come first, and is there no evidence of another contributing cause?",
        help: "Probably due to Parkinson’s disease needs both. Lewy body criteria attribute dementia to PD when PD was present at least 1 year before major NCD.",
        options: [
          { label: "Both: PD clearly first and no mixed etiology", to: "r:pd-prob", note: "Probably due to." },
          { label: "Only one of the two", to: "r:pd-poss", note: "Possibly due to." },
          { label: "Cognition began before or within 12 months of PD", to: "r:lewy-or-pd", note: "Clinician chooses." }
        ]
      }
    },
    results: {
      "delirium-first": { label: "Delirium first", dx: "Assess and treat delirium", line: "Deficits that occur only during delirium cannot support an NCD diagnosis; delirium management takes priority.", points: ["Use the [[helper:delirium|delirium helper]].", "Reassess cognition after recovery: hospital delirium often unmasks an NCD."], link: { ch: "ch17", sec: "s17-delirium-ddx", label: "Delirium versus NCD" }, dxId: "delirium" },
      "noncd": { label: "No NCD", dx: "Concern without objective decline", line: "Criterion A needs both a concern and objective impairment.", points: ["Reassure, address mood, sleep and hearing.", "Repeat testing over time if the concern persists."], link: { ch: "ch17", sec: "s17-ncd-ddx", label: "NCD differential" } },
      "neurodev": { label: "Not an NCD", dx: "A lifelong pattern", line: "NCDs are acquired; a lifelong deficit suggests a neurodevelopmental disorder.", points: ["Consider intellectual developmental disorder or specific learning disorder.", "Clarify baseline from school and work history."], link: { ch: "ch17", sec: "s17-ncd-ddx", label: "NCD differential" } },
      "unspecified": { dx: "Unspecified neurocognitive disorder (for now)", line: "NCD symptoms predominate but full criteria cannot yet be confirmed.", points: ["Code: R41.9.", "Get an informant history and testing, then revise."], link: { ch: "ch17", sec: "s17-multiple-unknown", label: "Unspecified NCD" }, dxId: "unspecified-ncd" },
      "mdd": { label: "Consider depression", dx: "Major depressive disorder with cognitive symptoms", line: "Variable, effort-dependent deficits with mood symptoms first suggest depression; it may also coexist with an NCD.", points: ["Treat the depression and retest.", "If depression is caused by the NCD’s disease, diagnose depressive disorder due to that condition."], link: { ch: "ch17", sec: "s17-ncd-ddx", label: "NCD differential" }, dxId: "mdd" },
      "tbi": { dx: "Major or mild NCD due to traumatic brain injury", line: "Deficits began immediately after the injury (or recovery of consciousness) and persist past the acute period.", points: ["Major: S06.2XAS, then F02.[A/B/C][disturbance].", "Mild: S06.2XAS, then F06.70 or F06.71.", "After mild TBI, first treat depression, PTSD, sleep and substance problems."], link: { ch: "ch17", sec: "s17-tbi", label: "NCD due to TBI" }, dxId: "ncd-tbi" },
      "vasc-prob": { dx: "Major or mild vascular NCD, probable", line: "Cerebrovascular disease on imaging or a documented, temporally related event explains the deficits.", points: ["Major: F01.[A/B/C][disturbance], with no cerebrovascular code.", "Mild: I67.9, then F06.70 or F06.71.", "If Alzheimer’s disease also contributes, diagnose both (multiple etiologies)."], link: { ch: "ch17", sec: "s17-vascular", label: "Vascular NCD" }, dxId: "ncd-vascular" },
      "vasc-poss": { dx: "Major or mild vascular NCD, possible", line: "Clinical criteria are met, but there is no imaging and no established link to an event.", points: ["Major: F03.[A/B/C][disturbance].", "Mild: G31.84.", "Order an MRI if possible."], link: { ch: "ch17", sec: "s17-vascular", label: "Vascular NCD" }, dxId: "ncd-vascular" },
      "prion": { dx: "Major or mild NCD due to prion disease", line: "Rapid progression with myoclonus or ataxia, or biomarker evidence.", points: ["Major: A81.9, then F02.[A/B/C][disturbance].", "Tests: MRI DWI, CSF RT-QuIC, 14-3-3, EEG.", "Infection-control precautions for procedures."], link: { ch: "ch17", sec: "s17-prion", label: "Prion disease" }, dxId: "ncd-prion" },
      "substance": { dx: "Substance/medication-induced major or mild NCD", line: "Deficits persist beyond intoxication and withdrawal and fit the timing of use and abstinence.", points: ["Codes by substance: e.g., F10.26 (alcohol, amnestic-confabulatory, severe use disorder), F10.288 (alcohol, mild NCD).", "Give thiamine; reassess after abstinence."], link: { ch: "ch17", sec: "s17-substance", label: "Substance-induced NCD" }, dxId: "ncd-substance" },
      "hiv": { dx: "Major or mild NCD due to HIV infection", line: "A subcortical pattern in documented HIV, not explained by secondary brain disease.", points: ["Major: B20, then F02.[A/B/C][disturbance].", "Mild: B20, then F06.70 or F06.71.", "Sudden change: look for opportunistic infection, lymphoma, delirium."], link: { ch: "ch17", sec: "s17-hiv", label: "NCD due to HIV" }, dxId: "ncd-hiv" },
      "amc": { dx: "Major or mild NCD due to another medical condition", line: "The NCD is the pathophysiological consequence of another medical condition.", points: ["Major: the condition’s code (e.g., G35.D), then F02.[A/B/C][disturbance].", "Mild: the condition’s code, then F06.70 or F06.71.", "If deficits persist after treatment, consider another etiology."], link: { ch: "ch17", sec: "s17-amc", label: "Another medical condition" }, dxId: "ncd-amc" },
      "hd": { dx: "Major or mild NCD due to Huntington’s disease", line: "Gradual executive-led decline with established Huntington’s disease or genetic or family risk.", points: ["Major: G10, then F02.[A/B/C][disturbance].", "Mild: G10, then F06.70 or F06.71.", "Screen for depression and suicide risk."], link: { ch: "ch17", sec: "s17-huntingtons", label: "Huntington’s disease" }, dxId: "ncd-huntingtons" },
      "multiple": { dx: "Major or mild NCD due to multiple etiologies", line: "More than one etiological process contributes (substances are coded separately).", points: ["Major: all medical etiology codes except vascular, then F02.xx once; add F01.xx if vascular; add any substance-induced NCD code.", "Mild: all etiology codes (I67.9 for vascular), then F06.70 or F06.71."], link: { ch: "ch17", sec: "s17-multiple-unknown", label: "Multiple etiologies" }, dxId: "ncd-multiple" },
      "unknown": { dx: "Major or mild NCD due to unknown etiology", line: "The syndrome is clear and a medical cause is presumed, but it cannot be established.", points: ["Major: F03.[A/B/C][disturbance].", "Mild: G31.84.", "Revisit as the course and tests evolve."], link: { ch: "ch17", sec: "s17-multiple-unknown", label: "Unknown etiology" }, dxId: "ncd-unknown" },
      "ad-prob": { dx: "Major or mild NCD due to probable Alzheimer’s disease", line: "A causative mutation, or (major NCD) memory plus another domain with steady progression.", points: ["Major: G30.9, then F02.[A/B/C][disturbance] (e.g., F02.A0).", "Mild (mutation only): G30.9, then F06.70 or F06.71.", "Biomarkers (amyloid, tau) add certainty."], link: { ch: "ch17", sec: "s17-alzheimers", label: "Alzheimer’s criteria" }, dxId: "ncd-alzheimers" },
      "ad-poss": { dx: "Major or mild NCD due to possible Alzheimer’s disease", line: "Alzheimer’s disease is likely but the probable criteria are not met.", points: ["Major: F03.[A/B/C][disturbance], with no G30.9.", "Mild: G31.84.", "Biomarkers may clarify."], link: { ch: "ch17", sec: "s17-alzheimers", label: "Alzheimer’s criteria" }, dxId: "ncd-alzheimers" },
      "logopenic": { dx: "Logopenic progressive aphasia: usually Alzheimer’s disease", line: "Left temporoparietal dysfunction, often due to Alzheimer’s pathology; not a frontotemporal variant.", points: ["Consider NCD due to Alzheimer’s disease (usually possible without biomarkers: F03.xx or G31.84).", "Amyloid and tau biomarkers help."], link: { ch: "ch17", sec: "s17-ftd", label: "Frontotemporal syndromes" }, dxId: "ncd-alzheimers" },
      "ftd-prob": { dx: "Major or mild frontotemporal NCD, probable", line: "Behavioral or language variant with a causative mutation or frontal/temporal involvement on imaging.", points: ["Major: G31.09, then F02.[A/B/C][disturbance].", "Mild: G31.09, then F06.70 or F06.71.", "Add F06.33 or F07.0 if mood or personality change is a focus."], link: { ch: "ch17", sec: "s17-ftd", label: "Frontotemporal NCD" }, dxId: "ncd-frontotemporal" },
      "ftd-poss": { dx: "Major or mild frontotemporal NCD, possible", line: "Criteria met without mutation evidence and without neuroimaging.", points: ["Major: F03.[A/B/C][disturbance].", "Mild: G31.84.", "Imaging would raise it to probable."], link: { ch: "ch17", sec: "s17-ftd", label: "Frontotemporal NCD" }, dxId: "ncd-frontotemporal" },
      "lewy-prob": { dx: "Major or mild NCD with probable Lewy bodies", line: "Two core features, or one suggestive with one or more core features.", points: ["Major: G31.83, then F02.[A/B/C][disturbance].", "Mild: G31.83, then F06.70 or F06.71.", "Avoid typical antipsychotics: up to 50% are severely sensitive."], link: { ch: "ch17", sec: "s17-lewy", label: "Lewy bodies" }, dxId: "ncd-lewy" },
      "lewy-poss": { dx: "Major or mild NCD with possible Lewy bodies", line: "One core feature only, or suggestive features only.", points: ["Major: F03.[A/B/C][disturbance].", "Mild: G31.84.", "A DaT scan or polysomnography may upgrade it."], link: { ch: "ch17", sec: "s17-lewy", label: "Lewy bodies" }, dxId: "ncd-lewy" },
      "pd-prob": { dx: "Major or mild NCD probably due to Parkinson’s disease", line: "Parkinson’s disease clearly preceded the NCD and nothing else contributes.", points: ["Major: G20.C, then F02.[A/B/C][disturbance].", "Mild: G20.C, then F06.70 or F06.71.", "Use motor-free tests."], link: { ch: "ch17", sec: "s17-parkinsons", label: "Parkinson’s disease" }, dxId: "ncd-parkinsons" },
      "pd-poss": { dx: "Major or mild NCD possibly due to Parkinson’s disease", line: "Only one of the two conditions (PD first; no mixed etiology) is met.", points: ["Major: F03.[A/B/C][disturbance].", "Mild: G31.84."], link: { ch: "ch17", sec: "s17-parkinsons", label: "Parkinson’s disease" }, dxId: "ncd-parkinsons" },
      "lewy-or-pd": { dx: "NCD with Lewy bodies or NCD due to Parkinson’s disease: clinician’s choice", line: "When the NCD starts before or within 12 months of Parkinson’s disease, the expert criteria disagree, and the clinician decides.", points: ["At the mild level, use unspecified NCD (R41.9) until the order becomes clear.", "Either way, be cautious with antipsychotics."], link: { ch: "ch17", sec: "s17-parkinsons", label: "The 1-year rule" }, dxId: "ncd-lewy" }
    }
  }
]);
