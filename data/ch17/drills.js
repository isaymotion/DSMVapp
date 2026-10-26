/* Chapter 17 practice drills.
   dxline:   build the full diagnosis line (diagnosis, certainty or subtype, severity, code). Codes are the current ones
             (APA coding updates 2022–2025), checked through October 2026.
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var SYN = ["Delirium", "Major NCD", "Mild NCD", "No NCD"];
  var SEV = ["Mild (IADLs)", "Moderate (basic ADLs)", "Severe (fully dependent)", "Not applicable: mild NCD"];
  var CERT = ["Probable", "Possible", "Not applicable"];
  var ACT = ["Hyperactive", "Hypoactive", "Mixed level of activity"];

  SP.add("ch17", "dxline", [
    {
      id: "w17-01", tag: "Delirium",
      "case": "A 77-year-old man becomes inattentive, disoriented and drowsy over 1 day with pneumonia; he sleeps most of the day and is slow to answer.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 0 },
        { label: "Activity level", options: ACT, answer: 1 },
        { label: "Code", options: ["J18.9, F05", "F05, J18.9", "R41.0", "F03.90", "R41.9"], answer: 0 }
      ],
      line: "**J18.9** pneumonia; **F05** delirium due to pneumonia, acute, hypoactive",
      why: "Code the medical condition first, then F05; record course and activity level."
    },
    {
      id: "w17-02", tag: "Delirium",
      "case": "A man with severe alcohol use disorder becomes agitated, tremulous, disoriented and hallucinating 3 days after his last drink.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 0 },
        { label: "Activity level", options: ACT, answer: 0 },
        { label: "Code", options: ["F10.231", "F10.131", "F10.931", "F10.221", "F05"], answer: 0 }
      ],
      line: "**F10.231** severe alcohol use disorder with alcohol withdrawal delirium, acute, hyperactive",
      why: "Withdrawal delirium with a moderate or severe use disorder; the use disorder is not coded separately."
    },
    {
      id: "w17-03", tag: "Delirium",
      "case": "A woman given high-dose dexamethasone for spinal cord compression becomes restless, inattentive and disoriented within 2 days; she has no substance use disorder.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 0 },
        { label: "Activity level", options: ACT, answer: 0 },
        { label: "Code", options: ["F19.921", "F19.121", "F05", "F13.921", "F06.8"], answer: 0 }
      ],
      line: "**F19.921** dexamethasone-induced delirium, acute, hyperactive",
      why: "Medications outside the named classes use the “other substance” code with no use disorder."
    },
    {
      id: "w17-04", tag: "Alzheimer’s",
      "case": "An 80-year-old has 5 years of steadily progressive memory and language decline, now needs help bathing and dressing, and has no other disturbance. No strokes.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Certainty", options: CERT, answer: 0 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code", options: ["G30.9, F02.B0", "F03.B0", "G30.9, F02.80", "G30.9, F02.A0", "G31.84"], answer: 0 }
      ],
      line: "**G30.9** Alzheimer’s disease; **F02.B0** major NCD due to probable Alzheimer’s disease, moderate, without behavioral disturbance",
      why: "Memory plus another domain, steady progression: probable. Basic ADLs: moderate (B)."
    },
    {
      id: "w17-05", tag: "Alzheimer’s",
      "case": "A 75-year-old with memory-led decline has needed help with bills for a year; the course included a 2-year plateau. No genetic or biomarker data. She is often low and tearful.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Certainty", options: CERT, answer: 1 },
        { label: "Severity", options: SEV, answer: 0 },
        { label: "Code", options: ["F03.A3", "G30.9, F02.A3", "G30.9, F03.A3", "F02.A3", "G31.84"], answer: 0 }
      ],
      line: "**F03.A3** major NCD due to possible Alzheimer’s disease, mild, with mood disturbance",
      why: "An extended plateau makes it possible: F03 with no G30.9."
    },
    {
      id: "w17-06", tag: "Frontotemporal",
      "case": "A 57-year-old with disinhibition, apathy, hyperorality and lost empathy, spared memory, and frontal atrophy on MRI; his wife handles his money and medications.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Certainty", options: CERT, answer: 0 },
        { label: "Severity", options: SEV, answer: 0 },
        { label: "Code", options: ["G31.09, F02.A18", "F03.A18", "G31.09, F02.A0", "G31.83, F02.A18", "G31.09, F06.71"], answer: 0 }
      ],
      line: "**G31.09** frontotemporal degeneration; **F02.A18** major frontotemporal NCD, probable, mild, with other behavioral disturbance (disinhibition)",
      why: "Imaging makes it probable; disinhibition is coded as other behavioral disturbance (18)."
    },
    {
      id: "w17-07", tag: "Lewy bodies",
      "case": "A 74-year-old with fluctuating alertness and recurrent visual hallucinations, but no parkinsonism or sleep disorder, needs help with IADLs.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Certainty", options: CERT, answer: 0 },
        { label: "Severity", options: SEV, answer: 0 },
        { label: "Code", options: ["G31.83, F02.A2", "F03.A2", "G31.83, F02.A0", "G20.C, F02.A2", "G31.84"], answer: 0 }
      ],
      line: "**G31.83** Lewy body disease; **F02.A2** major NCD with probable Lewy bodies, mild, with psychotic disturbance",
      why: "Two core features make it probable; visual hallucinations are coded as psychotic disturbance."
    },
    {
      id: "w17-08", tag: "Vascular",
      "case": "A 70-year-old has one lacunar stroke on MRI and slowed processing, but manages his life independently with extra effort; no behavioral symptoms.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 2 },
        { label: "Certainty", options: CERT, answer: 0 },
        { label: "Severity", options: SEV, answer: 3 },
        { label: "Code", options: ["I67.9, F06.70", "F01.A0", "G31.84", "I67.9, F06.71", "F06.70"], answer: 0 }
      ],
      line: "**I67.9** cerebrovascular disease; **F06.70** mild vascular NCD, probable, without behavioral disturbance",
      why: "For mild vascular NCD, a single stroke is generally enough; probable mild vascular NCD takes I67.9 first."
    },
    {
      id: "w17-09", tag: "TBI",
      "case": "A 30-year-old is slow and disorganized 1 year after a TBI with 3 days of posttraumatic amnesia; he needs help with finances and has no behavioral symptoms.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Severity", options: SEV, answer: 0 },
        { label: "Code", options: ["S06.2XAS, F02.A0", "S06.2X9S, F02.80", "S06.2XAS, F06.70", "F03.A0", "G31.84"], answer: 0 }
      ],
      line: "**S06.2XAS** diffuse TBI, sequela; **F02.A0** major NCD due to TBI, mild, without behavioral disturbance",
      why: "S06.2XAS replaced S06.2X9S in 2022; severity is the NCD’s, not the injury’s."
    },
    {
      id: "w17-10", tag: "Substance",
      "case": "A man with severe alcohol use disorder has persistent amnesia with confabulation after Wernicke’s encephalopathy, 4 months abstinent.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Code", options: ["F10.26", "F10.27", "F10.96", "F10.288", "F10.231"], answer: 0 }
      ],
      line: "**F10.26** severe alcohol use disorder with alcohol-induced major NCD, amnestic-confabulatory type, persistent",
      why: "Amnestic-confabulatory type with a moderate or severe use disorder: F10.26."
    },
    {
      id: "w17-11", tag: "HIV",
      "case": "A woman with treated HIV has slowed processing and poor free recall that affect her job, but she lives independently; she is irritable.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 2 },
        { label: "Code", options: ["B20, F06.71", "B20, F06.70", "G31.84", "B20, F02.A18", "F06.71"], answer: 0 }
      ],
      line: "**B20** HIV disease; **F06.71** mild NCD due to HIV infection, with behavioral disturbance",
      why: "Known etiology: disease code then F06.7x; irritability is a behavioral disturbance."
    },
    {
      id: "w17-12", tag: "Parkinson’s",
      "case": "A man with Parkinson’s disease for 8 years, no other contributing disease, now needs full care, with hallucinations.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Certainty", options: CERT, answer: 0 },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Code", options: ["G20.C, F02.C2", "G20, F02.C2", "F03.C2", "G31.83, F02.C2", "G20.C, F02.C0"], answer: 0 }
      ],
      line: "**G20.C** Parkinson’s disease; **F02.C2** major NCD probably due to Parkinson’s disease, severe, with psychotic disturbance",
      why: "G20.C since October 2023; fully dependent = severe (C)."
    },
    {
      id: "w17-13", tag: "Other medical",
      "case": "A woman with multiple sclerosis has cognitive decline needing help with basic care, and paranoid delusions.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code", options: ["G35.D, F02.B2", "G35, F02.B2", "F03.B2", "G35.D, F06.71", "G35.D, F02.81"], answer: 0 }
      ],
      line: "**G35.D** multiple sclerosis; **F02.B2** major NCD due to multiple sclerosis, moderate, with psychotic disturbance",
      why: "MS is G35.D since October 2025."
    },
    {
      id: "w17-14", tag: "Unknown etiology",
      "case": "Clear major NCD (help with bills) with a presumed but unidentifiable cause after full work-up; no behavioral symptoms.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Severity", options: SEV, answer: 0 },
        { label: "Code", options: ["F03.A0", "R41.9", "G31.84", "F02.A0", "F03.90"], answer: 0 }
      ],
      line: "**F03.A0** major NCD due to unknown etiology, mild, without behavioral disturbance",
      why: "Unknown etiology takes F03; unspecified NCD (R41.9) is for presentations short of full criteria."
    }
  ]);

  SP.add("ch17", "counting", [
    {
      id: "n17-01", tag: "Delirium Criterion A",
      "case": "Findings in a confused 80-year-old:",
      ask: "Mark the findings that show the core disturbance of delirium (Criterion A). Is Criterion A met?",
      items: [
        ["Cannot say the months of the year backward", true, "Impaired sustained attention."],
        ["Questions must be repeated because her attention wanders", true, "Impaired focusing and shifting."],
        ["Does not know the date", false, "Disorientation is Criterion C."],
        ["Sees insects on the wall", false, "A perceptual disturbance: Criterion C."],
        ["Unaware she is in a hospital ward", true, "Reduced awareness of the environment."]
      ],
      need: 1,
      met: true,
      why: "Criterion A is a disturbance of attention with reduced awareness; orientation and perception belong to Criterion C."
    },
    {
      id: "n17-02", tag: "Delirium Criterion E",
      "case": "Possible causes in a delirious patient:",
      ask: "Mark the findings that satisfy Criterion E (evidence of a physiological cause). Is Criterion E met?",
      items: [
        ["Sodium 118 mmol/L", true, "A medical condition."],
        ["Started oxybutynin 2 days ago", true, "A medication."],
        ["Recent bereavement", false, "A psychological stressor is not a physiological cause."],
        ["Last drink 3 days ago after years of heavy use", true, "Substance withdrawal."],
        ["History of schizophrenia", false, "A mental disorder, not a physiological cause."]
      ],
      need: 1,
      met: true,
      why: "Any medical condition, substance intoxication or withdrawal, medication or toxin, or several, satisfies Criterion E; with more than one, code multiple etiologies."
    },
    {
      id: "n17-03", tag: "Major vs mild",
      "case": "Daily functioning of a man with cognitive decline:",
      ask: "Mark the findings that show loss of independence (major NCD, Criterion B). Is the major NCD threshold met?",
      items: [
        ["Uses a pill organizer and phone alarms, and takes his pills correctly", false, "Compensation with preserved independence: mild."],
        ["Takes longer to do his tax return but finishes it", false, "More effort, still independent."],
        ["His daughter now pays his bills", true, "Someone else has taken over a complex IADL."],
        ["Needs his wife to set out his medications each day", true, "Help with medication management."]
      ],
      need: 1,
      met: true,
      why: "Major NCD needs help with at least complex IADLs such as bills or medications."
    },
    {
      id: "n17-04", tag: "Criterion A evidence",
      "case": "Evidence offered for cognitive decline in a 70-year-old:",
      ask: "Which findings supply the two required kinds of evidence (concern and objective impairment)? Are both present?",
      items: [
        ["Her husband says she forgets conversations she used to recall", true, "A concern from an informant."],
        ["Delayed recall 1.3 SD below age and education norms", true, "Objective impairment."],
        ["She has always been poor at arithmetic", false, "A lifelong pattern is not decline."],
        ["MRI shows mild white matter changes", false, "Imaging is not the cognitive performance evidence Criterion A asks for."]
      ],
      need: 2,
      met: true,
      why: "Criterion A needs both a concern and objective (preferably standardized) evidence of impairment."
    },
    {
      id: "n17-05", tag: "Alzheimer’s probable",
      "case": "A man with major NCD (no genetic data):",
      ask: "Mark the requirements for probable Alzheimer’s disease that are met. Are both met?",
      items: [
        ["Clear decline in memory and in visuospatial ability", true, "Memory plus at least one other domain."],
        ["Steadily progressive over 4 years with no plateaus", true, "Steady progression without extended plateaus."],
        ["Mild periventricular white matter change", false, "Not a requirement; and white matter change alone does not make it mixed."]
      ],
      need: 2,
      met: true,
      why: "Without a mutation, probable Alzheimer’s disease (major NCD) needs both: memory plus another domain, and steady progression. The mixed-etiology item was removed in 2024."
    },
    {
      id: "n17-06", tag: "Frontotemporal behavioral variant",
      "case": "Behavioral changes in a 58-year-old:",
      ask: "Mark the behavioral-variant symptoms present. Are at least three present?",
      items: [
        ["Makes sexual remarks to strangers", true, "Disinhibition."],
        ["Shows no reaction when his wife is in hospital", true, "Loss of sympathy or empathy."],
        ["Eats until sick, mostly sweets", true, "Hyperorality and dietary change."],
        ["Forgets appointments", false, "Memory loss is not one of the five; memory should be relatively spared."],
        ["Hears voices", false, "Not a behavioral-variant criterion."]
      ],
      need: 3,
      met: true,
      why: "Three or more of disinhibition, apathy, lost empathy, perseverative behavior and hyperorality, plus social-cognitive or executive decline."
    },
    {
      id: "n17-07", tag: "Lewy bodies",
      "case": "Features in a 72-year-old with major NCD:",
      ask: "Mark the core features of NCD with Lewy bodies. Are two core features present (probable without a suggestive feature)?",
      items: [
        ["Acts out dreams, punching in his sleep", false, "REM sleep behavior disorder is suggestive, not core."],
        ["Sees detailed people in the garden that are not there", true, "Recurrent well-formed visual hallucinations."],
        ["Severe rigidity after one dose of haloperidol", false, "Neuroleptic sensitivity is suggestive, not core."],
        ["Tremor that began 3 years before the memory problems", false, "Parkinsonism counts only if it begins after the cognitive decline; this pattern suggests Parkinson’s disease."]
      ],
      need: 2,
      met: false,
      why: "Only one core feature; but one core plus one or more suggestive features also makes it probable. Check the timing of parkinsonism against the 1-year rule."
    },
    {
      id: "n17-08", tag: "Vascular imaging",
      "case": "MRI findings in a man with cognitive decline:",
      ask: "Mark the findings that count as imaging evidence of cerebrovascular disease for vascular NCD. Is at least one present?",
      items: [
        ["One lacune in the pons", false, "Lacunes must be outside the brainstem, and two or more."],
        ["Small infarct in the left thalamus", true, "A strategically placed single infarct."],
        ["Mild periventricular caps", false, "Not extensive or confluent."],
        ["Hippocampal atrophy", false, "Neurodegenerative, not vascular."]
      ],
      need: 1,
      met: true,
      why: "Evidence: large vessel infarcts or hemorrhages, a strategic infarct (angular gyrus, thalamus, basal forebrain), two or more lacunes outside the brainstem, or extensive confluent white matter lesions."
    },
    {
      id: "n17-09", tag: "TBI Criterion B",
      "case": "After a fall, a woman had:",
      ask: "Mark the findings that count as evidence of TBI (Criterion B). Is at least one present?",
      items: [
        ["No memory of the hour after the fall", true, "Posttraumatic amnesia."],
        ["Confused for several hours", true, "Disorientation and confusion."],
        ["A bruise on the forehead", false, "An impact alone, without one of the four signs, is not enough."],
        ["Headache for 2 days", false, "A common symptom, not one of the four criteria signs."],
        ["Loss of smell since the fall", true, "Anosmia is a neurological sign."]
      ],
      need: 1,
      met: true,
      why: "Criterion B needs an impact or rapid brain displacement with loss of consciousness, posttraumatic amnesia, disorientation and confusion, or neurological signs."
    },
    {
      id: "n17-10", tag: "Substance-induced NCD",
      "case": "A woman with sedative use disorder and memory problems:",
      ask: "Mark the findings that support substance/medication-induced NCD (Criteria B–D). Are B, C and D all supported?",
      items: [
        ["Deficits persist 3 months after completing a supervised taper", true, "Beyond intoxication and acute withdrawal (B)."],
        ["Years of escalating high-dose benzodiazepine use", true, "Duration and extent capable of causing it (C)."],
        ["Memory has improved slightly since stopping", true, "Course consistent with abstinence (D)."],
        ["She was confused only during the first week of the taper", false, "Confusion during withdrawal points to withdrawal or delirium, not the NCD."]
      ],
      need: 3,
      met: true,
      why: "Substance-induced NCD requires persistence beyond withdrawal, a capable substance and dose, and a course consistent with use and abstinence."
    }
  ]);
})();
