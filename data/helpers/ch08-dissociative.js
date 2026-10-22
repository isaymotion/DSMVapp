/*
 * Diagnostic helpers for Chapter 8 (Dissociative Disorders), DSM-5-TR pp. 329–348.
 * "dissociative": choose among DID, dissociative amnesia, DPDR and the residual categories.
 * "memoryloss": sort a memory gap into dissociative, traumatic, substance, neurological or feigned causes.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "dissociative",
    chapter: "ch08",
    title: "Which dissociative disorder?",
    summary: "Work through medical and substance causes, identity states, amnesia and depersonalization or derealization to reach the dissociative disorder that fits, with its code.",
    caution: "A teaching aid built from DSM-5-TR pp. 329–348. Dissociative disorders are often hidden and minimized: ask directly. Always assess suicide risk, self-injury and current safety, and screen for PTSD.",
    start: "cause",
    nodes: {
      cause: {
        q: "Could a substance, medication or medical condition explain the symptoms?",
        help: "Intoxication blackouts; cannabis, ketamine, hallucinogens, MDMA during use; complex partial and other seizures; TBI; transient global amnesia; sleep apnea; brain lesions. Onset of depersonalization after 40 is a red flag.",
        options: [
          { label: "No: workup and history do not point to one", to: "context", note: "No substance or medical cause." },
          { label: "Yes: symptoms occur only during intoxication or withdrawal", to: "r:substance", note: "Substance-related." },
          { label: "Yes: seizures, TBI, transient global amnesia or another medical cause", to: "r:medical", note: "Medical or neurological cause." }
        ]
      },
      context: {
        q: "Do the symptoms occur only within another disorder?",
        help: "Amnesia only for a trauma (PTSD); depersonalization only during panic attacks or a depressive episode; dissociation 3 days to 1 month after a trauma with 9 of 14 symptoms (acute stress disorder); unresponsiveness with posturing (catatonia).",
        options: [
          { label: "No", to: "identity", note: "Not confined to another disorder." },
          { label: "Yes", to: "r:otherdisorder", note: "Explained by another disorder." }
        ]
      },
      identity: {
        q: "Are there two or more distinct personality states, or an experience of possession, with discontinuity in sense of self and agency?",
        help: "Often subtle: voices inside the head, thoughts, emotions or actions that feel “not mine,” sudden shifts in preferences or skills, feeling like a different age or gender. Possession must be outside accepted cultural or religious practice, and not a child’s imaginary playmate.",
        options: [
          { label: "Yes", to: "didamnesia", note: "Identity disruption." },
          { label: "Possession only within an accepted cultural or religious practice, or a child’s imaginary playmate", to: "r:normal", note: "Normative experience." },
          { label: "No", to: "amnesia", note: "No identity states." }
        ]
      },
      didamnesia: {
        q: "Are there recurrent gaps in memory inconsistent with ordinary forgetting (time loss, unexplained possessions, forgotten skills or life events)?",
        help: "DID amnesia includes everyday events, not only trauma. People often minimize it: ask about being told of things they did, “coming to” somewhere, finding objects.",
        options: [
          { label: "Yes", to: "r:did", note: "Identity states plus recurrent amnesia." },
          { label: "No", to: "r:mixed", note: "Identity alteration without amnesia." }
        ]
      },
      amnesia: {
        q: "Is there an inability to recall important autobiographical information, usually traumatic or stressful, beyond ordinary forgetting?",
        help: "Localized (a period), selective (part of a period), systematized (a category), generalized (life history, identity) or continuous (each new event).",
        options: [
          { label: "Yes", to: "fugue", note: "Dissociative amnesia pattern." },
          { label: "No", to: "dpdr", note: "No dissociative amnesia." }
        ]
      },
      fugue: {
        q: "Was the amnesia accompanied by purposeful travel or bewildered wandering?",
        help: "Fugue usually accompanies generalized amnesia for identity; behavior is purposeful and may last days or weeks.",
        options: [
          { label: "Yes", to: "r:fugue", note: "With dissociative fugue." },
          { label: "No", to: "r:amnesia", note: "Without fugue." }
        ]
      },
      dpdr: {
        q: "Is there persistent or recurrent depersonalization (detached from self) or derealization (surroundings unreal)?",
        help: "Watching oneself from outside, feeling robotic or numb, the world foggy, dreamlike, flat or behind glass.",
        options: [
          { label: "Yes, and the person knows it is not literally true", to: "r:dpdr", note: "Reality testing intact." },
          { label: "Yes, but the person is convinced they are dead or the world has ended", to: "r:psychosis", note: "Reality testing lost." },
          { label: "No", to: "residual", note: "No depersonalization or derealization." }
        ]
      },
      residual: {
        q: "Which best describes the remaining presentation?",
        help: "These are named examples of other specified dissociative disorder.",
        options: [
          { label: "Identity change or questioning after cult membership, brainwashing, captivity or torture", to: "r:coercive", note: "Coercive persuasion." },
          { label: "A brief mix of dissociative symptoms after a stressor, lasting less than a month", to: "r:acute", note: "Acute dissociative reaction." },
          { label: "Profound unresponsiveness with loss of awareness of surroundings, outside accepted practice", to: "r:trance", note: "Dissociative trance." },
          { label: "Dissociative symptoms, but not enough information to say more", to: "r:unspecified", note: "Insufficient information." }
        ]
      }
    },
    results: {
      substance: { label: "Not a dissociative disorder", dx: "Substance-related symptoms", line: "Blackouts during intoxication, or depersonalization only during cannabis, ketamine or hallucinogen use, are substance effects.", points: ["If depersonalization persists without further use, depersonalization/derealization disorder applies.", "Recheck memory after detoxification."], link: { ch: "ch08", sec: "s8-amnesia-ddx", label: "Memory loss differential" } },
      medical: { label: "Not a dissociative disorder", dx: "A medical or neurological cause", line: "Seizures, TBI, transient global amnesia, brain lesions or sleep apnea.", points: ["Dissociative and epileptic amnesia can coexist.", "Mild TBI may precede dissociative amnesia when the memory loss is out of proportion to the injury."], link: { ch: "ch08", sec: "s8-amnesia-ddx", label: "Memory loss differential" } },
      otherdisorder: { label: "Consider", dx: "The disorder that contains the symptoms", line: "PTSD (amnesia for the trauma, dissociative subtype), acute stress disorder, panic disorder, major depression or catatonia.", points: ["Add a dissociative diagnosis only if symptoms clearly exceed or outlast the other disorder."], link: { ch: "ch08", sec: "s8-dpdr-features", label: "Differential diagnosis" } },
      normal: { label: "No mental disorder", dx: "A normative experience", line: "Possession within an accepted cultural or religious practice, or a child’s imaginary playmate, is not DID.", points: ["Reconsider if it becomes involuntary, distressing and violates cultural norms."], link: { ch: "ch08", sec: "s8-did-criteria", label: "DID Criterion D" } },
      did: { dx: "Dissociative identity disorder (F44.81)", line: "Two or more personality states or possession, plus recurrent amnesia.", points: ["Screen for PTSD (most), depression, substance use, eating disorders and nonepileptic seizures.", "Assess suicide risk: >70% of outpatients have attempted.", "Ask about current abuse and revictimization."], link: { ch: "ch08", sec: "s8-did-criteria", label: "DID criteria" }, dxId: "did" },
      mixed: { dx: "Other specified dissociative disorder (F44.89): mixed dissociative syndrome", line: "Identity disturbance or possession episodes without dissociative amnesia.", points: ["Record the reason after the diagnosis.", "Reassess for amnesia over time; patients often minimize it."], link: { ch: "ch08", sec: "s8-other", label: "Other specified dissociative disorder" }, dxId: "other-specified-dissociative" },
      amnesia: { dx: "Dissociative amnesia (F44.0)", line: "Autobiographical memory loss inconsistent with ordinary forgetting, without identity states.", points: ["Name the form: localized, selective, systematized, generalized or continuous.", "Watch for suicide risk as memories return."], link: { ch: "ch08", sec: "s8-amnesia-criteria", label: "Dissociative amnesia" }, dxId: "dissociative-amnesia" },
      fugue: { dx: "Dissociative amnesia, with dissociative fugue (F44.1)", line: "Amnesia for identity or important information with purposeful travel or bewildered wandering.", points: ["Exclude seizures (nonpurposive wandering) and consider feigning when legal or financial problems are present."], link: { ch: "ch08", sec: "s8-amnesia-criteria", label: "Fugue specifier" }, dxId: "dissociative-amnesia" },
      dpdr: { dx: "Depersonalization/derealization disorder (F48.1)", line: "Persistent or recurrent detachment from self or surroundings with intact reality testing.", points: ["Onset after 40 or atypical course: medical workup including EEG.", "Diagnose even if a drug started it, once symptoms persist without further use."], link: { ch: "ch08", sec: "s8-dpdr-criteria", label: "DPDR criteria" }, dxId: "dpdr" },
      psychosis: { label: "Not DPDR", dx: "A psychotic disorder", line: "Conviction that one is dead or the world has ended is a nihilistic delusion.", points: ["Consider psychotic depression or schizophrenia."], link: { ch: "ch08", sec: "s8-dpdr-features", label: "DPDR differential" } },
      coercive: { dx: "Other specified dissociative disorder (F44.89): identity disturbance due to coercive persuasion", line: "Prolonged identity change or questioning after intense coercive persuasion.", points: ["Assess for PTSD and depression."], link: { ch: "ch08", sec: "s8-other", label: "Other specified dissociative disorder" }, dxId: "other-specified-dissociative" },
      acute: { dx: "Other specified dissociative disorder (F44.89): acute dissociative reaction to stressful events", line: "Transient constricted consciousness, depersonalization, derealization, micro-amnesias or sensory-motor changes, typically under 1 month.", points: ["If 9 of 14 acute stress disorder symptoms follow a Criterion A trauma, diagnose acute stress disorder instead."], link: { ch: "ch08", sec: "s8-other", label: "Other specified dissociative disorder" }, dxId: "other-specified-dissociative" },
      trance: { dx: "Other specified dissociative disorder (F44.89): dissociative trance", line: "Acute loss of awareness with profound unresponsiveness, outside accepted cultural or religious practice.", points: ["Exclude seizures, catatonia and medical causes."], link: { ch: "ch08", sec: "s8-other", label: "Other specified dissociative disorder" }, dxId: "other-specified-dissociative" },
      unspecified: { dx: "Unspecified dissociative disorder (F44.9)", line: "When the reason is not given or information is insufficient.", points: ["Gather collateral history and reassess."], link: { ch: "ch08", sec: "s8-other", label: "Unspecified dissociative disorder" }, dxId: "unspecified-dissociative" }
    }
  },
  {
    id: "memoryloss",
    chapter: "ch08",
    title: "A gap in memory: dissociative or something else?",
    summary: "Sort a patient’s memory loss by its pattern: what is forgotten, when it started, and what surrounds it.",
    caution: "A teaching aid built from DSM-5-TR pp. 337–343 and related differential sections. Any acute memory loss needs a medical and neurological assessment first.",
    start: "context",
    nodes: {
      context: {
        q: "What surrounds the memory loss?",
        help: "Ask the patient and an informant; check toxicology, glucose, EEG and imaging as indicated.",
        options: [
          { label: "Only during heavy alcohol or drug use", to: "r:blackout", note: "Intoxication." },
          { label: "After a head injury with loss of consciousness or confusion", to: "tbi", note: "Head injury." },
          { label: "With seizure activity, or wandering that is aimless and brief", to: "r:seizure", note: "Seizure-related." },
          { label: "After a course of ECT", to: "r:ect", note: "ECT." },
          { label: "Gradual decline in learning new information in an older adult", to: "r:ncd", note: "Neurocognitive." },
          { label: "Sudden inability to form new memories for hours, identity preserved, in an older adult", to: "r:tga", note: "Transient global amnesia." },
          { label: "None of these: workup normal, often after trauma or conflict", to: "what", note: "Possibly dissociative." }
        ]
      },
      tbi: {
        q: "Is the memory loss in proportion to the injury, with neurocognitive deficits (attention, executive function, slowed processing)?",
        help: "Mild TBI can precede dissociative amnesia, but then the loss is out of proportion and follows a dissociative pattern.",
        options: [
          { label: "Yes", to: "r:ncdtbi", note: "Typical of TBI." },
          { label: "No: far beyond the injury, autobiographical, with dissociative features", to: "what", note: "Out of proportion." }
        ]
      },
      what: {
        q: "What exactly is forgotten?",
        help: "Ask about time loss in daily life, unexplained possessions, identity states and the link to trauma.",
        options: [
          { label: "Only the traumatic event itself, with intrusions, avoidance and arousal", to: "r:ptsd", note: "Trauma-limited." },
          { label: "Autobiographical periods, categories or identity, with no identity states", to: "r:da", note: "Dissociative amnesia." },
          { label: "Everyday time loss, unexplained possessions and identity states", to: "r:did", note: "DID." },
          { label: "Brief gaps within a short dissociative reaction to a stressor (under 1 month)", to: "r:acute", note: "Acute dissociative reaction." },
          { label: "Only for events tied to an obvious gain (legal, financial), dramatic presentation", to: "r:feigned", note: "Possible feigning." }
        ]
      }
    },
    results: {
      blackout: { label: "Not dissociative", dx: "Substance-related blackout", line: "Amnesia only during intoxication. Recheck after detoxification; long-term use can cause a neurocognitive disorder.", points: ["People with dissociative amnesia sometimes blame their gaps on substances: take a careful history."], link: { ch: "ch08", sec: "s8-amnesia-ddx", label: "Memory loss differential" } },
      ncdtbi: { label: "Not dissociative", dx: "Neurocognitive disorder due to TBI or posttraumatic amnesia", line: "Immediate onset after injury, with attention, executive and memory deficits and neurological signs.", points: ["Covered in Chapter 17."], link: { ch: "ch08", sec: "s8-amnesia-ddx", label: "Memory loss differential" } },
      seizure: { label: "Not dissociative", dx: "Seizure disorder", line: "Nonpurposive wandering limited to the seizure; EEG abnormalities; random loss of memories as epilepsy progresses.", points: ["Dissociative and epileptic amnesia can coexist."], link: { ch: "ch08", sec: "s8-amnesia-ddx", label: "Memory loss differential" } },
      ect: { label: "Not dissociative", dx: "ECT-related memory loss", line: "Mostly for the day of treatment, unrelated to stressful periods, remitting after the series.", points: ["ECT does not worsen dissociation."], link: { ch: "ch08", sec: "s8-amnesia-ddx", label: "Memory loss differential" } },
      ncd: { label: "Not dissociative", dx: "Mild or major neurocognitive disorder, or normal aging", line: "Difficulty learning and retaining new information; identity preserved until late.", points: ["Retrograde amnesia in neurocognitive disorders is almost always accompanied by anterograde amnesia."], link: { ch: "ch08", sec: "s8-amnesia-ddx", label: "Memory loss differential" } },
      tga: { label: "Not dissociative", dx: "Transient global amnesia", line: "A neurological condition excluded by dissociative amnesia Criterion C.", points: ["Refer for neurological assessment."], link: { ch: "ch08", sec: "s8-amnesia-ddx", label: "Transient global amnesia" } },
      ptsd: { dx: "PTSD (amnesia for an important aspect of the trauma)", line: "Amnesia limited to the traumatic event is a PTSD symptom.", points: ["Add dissociative amnesia if the loss extends beyond the trauma."], link: { ch: "ch07", sec: "s7-ptsd-criteria", label: "PTSD criteria" }, dxId: "ptsd" },
      da: { dx: "Dissociative amnesia (F44.0, or F44.1 with fugue)", line: "Autobiographical memory loss inconsistent with ordinary forgetting.", points: ["Name the form and ask about fugue."], link: { ch: "ch08", sec: "s8-amnesia-criteria", label: "Dissociative amnesia" }, dxId: "dissociative-amnesia" },
      did: { dx: "Dissociative identity disorder (F44.81)", line: "Recurrent everyday amnesia with identity states.", points: ["Assess suicide risk and PTSD."], link: { ch: "ch08", sec: "s8-did-criteria", label: "DID" }, dxId: "did" },
      acute: { dx: "Other specified dissociative disorder: acute dissociative reaction", line: "Micro-amnesias within a transient dissociative reaction to stress, under a month.", points: ["Consider acute stress disorder if its criteria are met."], link: { ch: "ch08", sec: "s8-other", label: "Other specified dissociative disorder" }, dxId: "other-specified-dissociative" },
      feigned: { label: "Consider", dx: "Malingering or factitious disorder", line: "No test reliably separates feigned from dissociative amnesia; suspect it with legal, financial or sexual problems, a wish to escape, or recovered-memory litigation.", points: ["Feigning and genuine amnesia can coexist.", "Many who feign confess when confronted."], link: { ch: "ch08", sec: "s8-amnesia-ddx", label: "Feigned amnesia" } }
    }
  }
]);
