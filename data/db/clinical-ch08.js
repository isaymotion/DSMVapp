/* Chapter 8 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "did",
      ask: [
        ["B Time loss", "“Do you ever lose time, find that hours or days have passed and you don’t know what happened?”", "Ask gently and repeatedly; people minimize amnesia."],
        ["B Evidence", "“Have you found things you don’t remember buying or writing, or been told about things you did but can’t recall?”"],
        ["B Fugue", "“Have you ever found yourself somewhere without knowing how you got there?”"],
        ["A Self and agency", "“Do you sometimes feel your actions, words or feelings aren’t yours, or that you’re watching yourself from outside?”"],
        ["A Voices", "“Do you hear voices or thoughts inside your head that feel like they belong to someone else, such as a child or an angry person?”", "Ego-alien, often frightening; ask what they say."],
        ["A States", "“Do you sometimes feel like a different person, a different age, or as if parts of you want different things?”"],
        ["D Culture", "“Do you think these experiences could be spirits or possession? Does your community see them that way?”", "Distinguish accepted practice from involuntary, distressing possession."],
        ["Safety", "“Have you ever tried to hurt or kill yourself? Are you safe at home now?”", "Over 70% have attempted suicide; revictimization is common."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Phase-oriented psychotherapy** (ISSTD treatment guidelines): **1** safety, stabilization and symptom reduction; **2** careful processing of traumatic memories; **3** integration and rehabilitation. Treatment is long term and outpatient where possible.",
        points: [
          "No medication treats dissociation itself; none is FDA-approved for DID. Medications target comorbid **PTSD, depression and anxiety** (e.g., an [[stahl:c/ch07/guide/s7-ssri|SSRI]]), and [[stahl:drugs/prazosin|prazosin]] is sometimes used for nightmares.",
          "Address safety first: suicidality, self-injury, current abuse or exploitation, and substance use.",
          "Avoid suggestive memory-recovery techniques; work collaboratively with all identity states without favoring some."
        ],
        stahl: [["PTSD", "c/ch08/guide/s8-ptsd"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "dissociative-amnesia",
      ask: [
        ["A Gaps", "“Are there parts of your life, or periods of time, you can’t remember at all?”", "Ask about childhood, school years, specific events."],
        ["Form", "“Is it a particular day, part of it, a certain person or place, or everything about who you are?”", "Localized, selective, systematized, generalized."],
        ["Fugue", "“Have you ever traveled somewhere and not known who you were or how you got there?”"],
        ["C Causes", "“Any head injury, seizures, blackouts from drinking or drugs, or new medications?”", "EEG, imaging and toxicology as indicated."],
        ["Context", "“What was happening in your life just before the memory loss?”", "Trauma or intense conflict."],
        ["Safety", "“As memories come back, have you had thoughts of hurting yourself?”", "Risk rises when amnesia remits suddenly."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Ensure **safety** and remove the person from ongoing danger or stress; memory often returns when this happens. Supportive, trauma-informed psychotherapy follows.",
        points: [
          "Avoid pressuring recall or using suggestive techniques; retrieval should be paced to what the person can tolerate.",
          "Monitor closely for suicidal thoughts as memories return.",
          "Treat comorbid PTSD, depression and functional neurological symptoms."
        ],
        stahl: [["PTSD", "c/ch08/guide/s8-ptsd"]]
      }
    },
    {
      id: "dpdr",
      ask: [
        ["A1 Depersonalization", "“Do you ever feel detached from yourself, as if you were watching yourself in a film, or like a robot?”"],
        ["A2 Derealization", "“Does the world around you ever seem unreal, foggy, flat or as if behind glass?”"],
        ["B Reality testing", "“When it happens, do you know that you and the world are real, even though it doesn’t feel that way?”", "Intact reality testing is required."],
        ["Course", "“When did it start? Is it constant or does it come and go? What makes it worse?”", "Onset after 40 needs a medical workup."],
        ["D Triggers", "“Did it start after using cannabis, ketamine, ecstasy or hallucinogens?”"],
        ["E Context", "“Does it happen only during panic attacks or when you are depressed?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Psychoeducation** (it is common, not psychosis or brain damage) and **CBT for depersonalization**: reducing avoidance, checking and self-monitoring, and reattributing catastrophic interpretations.",
        points: [
          "No FDA-approved medication. Evidence for drugs is limited: [[stahl:drugs/lamotrigine|lamotrigine]] added to an SSRI and opioid antagonists such as [[stahl:drugs/naltrexone|naltrexone]] have small or mixed studies.",
          "Treat comorbid depression and anxiety (often with an SSRI) and stop triggering drugs such as cannabis.",
          "Grounding techniques and attention to sleep and overstimulation help reduce exacerbations."
        ],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "other-specified-dissociative",
      tx: { asOf: "October 2026", first: "Treat by type: support and safety for acute dissociative reactions; trauma-informed therapy for coercive persuasion; medical workup and cultural assessment for trance.", points: [], stahl: [] }
    },
    {
      id: "unspecified-dissociative",
      tx: { asOf: "October 2026", first: "Ensure safety, exclude seizures, intoxication and other medical causes, and gather collateral history.", points: [], stahl: [] }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "memory-gaps", title: "Gaps in memory or lost time",
      intro: "Start with medical and substance causes, then ask exactly what is forgotten: a trauma, a period, a category, an identity, or everyday events with signs of identity states.",
      ask: ["What can’t you remember, and since when?", "Do you lose time in everyday life or find things you don’t remember getting?", "Any head injury, seizures, drinking or drug use?", "What was happening just before the memory loss?", "Have you found yourself somewhere without knowing how?"],
      mustNotMiss: ["**Seizures, TBI, transient global amnesia, delirium.**", "**Intoxication** blackouts.", "**Suicide risk** as memories return; current abuse."],
      helpers: ["memoryloss", "dissociative"],
      items: [
        { ch: "ch08", dx: "dissociative-amnesia", when: "Autobiographical gaps, usually after trauma or conflict, normal workup." },
        { ch: "ch08", dx: "did", when: "Everyday time loss, unexplained possessions and identity states." },
        { ch: "ch07", dx: "ptsd", when: "Amnesia only for the traumatic event, with intrusions and avoidance." },
        { ch: "ch08", dx: "other-specified-dissociative", when: "Micro-amnesias within a brief reaction to stress." },
        { ch: "ch17", name: "Neurocognitive disorder", when: "Decline in learning new information; identity preserved until late." },
        { ch: "ch16", dx: "alcohol-intox", when: "Gaps only during heavy use (blackouts)." }
      ]
    },
    {
      id: "unreal", title: "Feeling unreal, detached or outside one’s body",
      intro: "Depersonalization and derealization are common and usually transient. Check reality testing, the context (panic, depression, trauma, drugs) and age at onset.",
      ask: ["Does it feel as if, or are you sure it is true?", "Only during panic attacks or low mood?", "Did it start with cannabis, ketamine or other drugs?", "When did it start, and is it constant?", "Any seizures or head injury?"],
      mustNotMiss: ["**Psychosis**: nihilistic delusions without insight.", "**Seizures** (temporal lobe) or brain lesions, especially with onset after 40.", "**Suicide risk** in severe chronic cases."],
      helpers: ["dissociative"],
      items: [
        { ch: "ch08", dx: "dpdr", when: "Persistent or recurrent, reality testing intact, not only in another disorder." },
        { ch: "ch05", dx: "panic-attack", when: "Only during panic attacks." },
        { ch: "ch07", dx: "ptsd", when: "Dissociative subtype, linked to trauma reminders." },
        { ch: "ch04", dx: "mdd", when: "Numbness and unreality only during a depressive episode." },
        { ch: "ch08", dx: "did", when: "With identity states and amnesia." },
        { ch: "ch02", dx: "schizophrenia", when: "Conviction that the self or world is unreal or dead (nihilistic delusions)." }
      ]
    },
    {
      id: "psychosis", title: "Hearing voices or holding unusual beliefs",
      items: [
        { ch: "ch08", dx: "did", when: "Voices inside the head felt as ego-alien identities, with amnesia and time loss, no delusional explanation." }
      ]
    },
    {
      id: "after-trauma", title: "Symptoms after a traumatic event",
      items: [
        { ch: "ch08", dx: "dissociative-amnesia", when: "Memory loss extending beyond the traumatic event itself." },
        { ch: "ch08", dx: "other-specified-dissociative", when: "A brief dissociative reaction (under a month) that does not meet acute stress disorder." }
      ]
    }
  ]);
})();
