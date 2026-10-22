/* Chapter 8 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifier, code).
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var DX = ["Dissociative identity disorder", "Dissociative amnesia", "Depersonalization/derealization disorder", "Other specified dissociative disorder", "Unspecified dissociative disorder"];
  var CODES = ["F44.81", "F44.0", "F44.1", "F48.1", "F44.89", "F44.9"];

  SP.add("ch08", "dxline", [
    {
      id: "w8-01", tag: "DID",
      "case": "A 34-year-old woman has two identity states with different names and preferences, observed by her partner, and recurrent time loss and unexplained purchases. No substances; EEG normal.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Code", options: CODES, answer: 0 }
      ],
      line: "**F44.81** Dissociative identity disorder",
      why: "Identity states plus recurrent amnesia. DID has **no specifiers**."
    },
    {
      id: "w8-02", tag: "Amnesia",
      "case": "A 26-year-old woman cannot recall a 3-month period during which she was held captive, though she remembers before and after. No PTSD symptoms; normal workup.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Form", options: ["Localized", "Selective", "Systematized", "Generalized", "Continuous"], answer: 0 },
        { label: "Code", options: CODES, answer: 1 }
      ],
      line: "**F44.0** Dissociative amnesia (localized)",
      why: "A circumscribed period is **localized** amnesia. The form is not part of the code, but naming it is useful clinically."
    },
    {
      id: "w8-03", tag: "Fugue",
      "case": "A 39-year-old man is found 600 km from home, living under a new name, with no memory of his identity, after a devastating family conflict. Normal EEG, MRI and toxicology.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Specifier", options: ["None", "With dissociative fugue"], answer: 1 },
        { label: "Code", options: CODES, answer: 2 }
      ],
      line: "**F44.1** Dissociative amnesia, with dissociative fugue",
      why: "Generalized amnesia with **purposeful travel** takes the fugue specifier and the code **F44.1**."
    },
    {
      id: "w8-04", tag: "DPDR",
      "case": "A 18-year-old has felt detached from her body and as if the world were a movie set for a year, knowing it is not literally so. No drugs, panic or depression; normal EEG.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Code", options: CODES, answer: 3 }
      ],
      line: "**F48.1** Depersonalization/derealization disorder",
      why: "Note the code block: DPDR is **F48.1**, not F44.x."
    },
    {
      id: "w8-05", tag: "Other specified",
      "case": "A 40-year-old woman has recurrent episodes of possession by an ancestor, distressing and outside her community’s practices, but she remembers them fully and has no other memory gaps.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Reason recorded", options: ["Chronic and recurrent syndromes of mixed dissociative symptoms", "Identity disturbance due to coercive persuasion", "Acute dissociative reaction to stressful events", "Dissociative trance"], answer: 0 },
        { label: "Code", options: CODES, answer: 4 }
      ],
      line: "**F44.89** Other specified dissociative disorder, chronic and recurrent syndrome of mixed dissociative symptoms (possession without amnesia)",
      why: "Possession or identity alteration **without dissociative amnesia** does not meet DID Criterion B."
    },
    {
      id: "w8-06", tag: "Other specified",
      "case": "Five days after a violent carjacking, a 30-year-old man reports time slowing, derealization, a numb arm and brief memory gaps, without intrusions, avoidance or arousal symptoms.",
      parts: [
        { label: "Diagnosis", options: ["Acute stress disorder", "Other specified dissociative disorder", "PTSD", "Dissociative amnesia"], answer: 1 },
        { label: "Reason recorded", options: ["Chronic and recurrent syndromes of mixed dissociative symptoms", "Identity disturbance due to coercive persuasion", "Acute dissociative reaction to stressful events", "Dissociative trance"], answer: 2 },
        { label: "Code", options: CODES, answer: 4 }
      ],
      line: "**F44.89** Other specified dissociative disorder, acute dissociative reaction to stressful events",
      why: "Dissociative symptoms alone fall short of the 9 of 14 needed for acute stress disorder; the acute reaction example fits."
    },
    {
      id: "w8-07", tag: "Other specified",
      "case": "A 28-year-old woman released after 3 years of captivity by an armed group questions her identity, uses the name her captors gave her and shifts between their beliefs and her own. No amnesia.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Reason recorded", options: ["Chronic and recurrent syndromes of mixed dissociative symptoms", "Identity disturbance due to coercive persuasion", "Acute dissociative reaction to stressful events", "Dissociative trance"], answer: 1 },
        { label: "Code", options: CODES, answer: 4 }
      ],
      line: "**F44.89** Other specified dissociative disorder, identity disturbance due to prolonged and intense coercive persuasion",
      why: "Indoctrination in captivity is one of the manual’s examples of coercive persuasion."
    },
    {
      id: "w8-08", tag: "Other specified",
      "case": "A 34-year-old man repeatedly becomes completely unresponsive for an hour, eyes open, outside any religious or cultural practice. EEG and labs are normal.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Reason recorded", options: ["Chronic and recurrent syndromes of mixed dissociative symptoms", "Identity disturbance due to coercive persuasion", "Acute dissociative reaction to stressful events", "Dissociative trance"], answer: 3 },
        { label: "Code", options: CODES, answer: 4 }
      ],
      line: "**F44.89** Other specified dissociative disorder, dissociative trance",
      why: "Trance must be **outside** accepted collective cultural or religious practice."
    },
    {
      id: "w8-09", tag: "Unspecified",
      "case": "A 22-year-old is brought to the emergency department, staring, slow to respond and unsure of recent events. Toxicology and initial labs are normal; no collateral history is available yet.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "Code", options: CODES, answer: 5 }
      ],
      line: "**F44.9** Unspecified dissociative disorder",
      why: "With insufficient information, as in emergency settings, unspecified is appropriate; reassess as history emerges."
    },
    {
      id: "w8-10", tag: "PTSD and amnesia",
      "case": "A 25-year-old veteran with PTSD from an ambush cannot recall the ambush and also has no memory of large parts of his deployment and childhood. No identity states.",
      parts: [
        { label: "Diagnoses", options: ["PTSD", "Dissociative amnesia", "Dissociative identity disorder", "Acute stress disorder"], answer: [0, 1], multi: true },
        { label: "Dissociative amnesia code", options: CODES, answer: 1 }
      ],
      line: "**F43.10** Posttraumatic stress disorder; **F44.0** dissociative amnesia",
      why: "Amnesia for the ambush belongs to PTSD; amnesia **extending beyond** the trauma warrants dissociative amnesia as well."
    }
  ]);

  SP.add("ch08", "counting", [
    {
      id: "n8-01", tag: "DID Criterion B",
      "case": "A 30-year-old woman reports:",
      ask: "DID Criterion B needs recurrent gaps in recall inconsistent with ordinary forgetting. Mark the findings that count.",
      items: [
        ["Finding clothes she doesn’t remember buying", true, "Unexplained possessions."],
        ["Forgetting where she put her keys sometimes", false, "Ordinary forgetting."],
        ["No memory of her own wedding", true, "A gap in important autobiographical memory."],
        ["“Coming to” in her car without knowing how she got there", true, "Time loss and fugue-like travel."],
        ["Memory gaps only after drinking heavily", false, "Blackouts are excluded (Criterion E)."]
      ],
      met: true,
      why: "Three findings show recurrent dissociative amnesia; ordinary forgetting and intoxication blackouts do not count."
    },
    {
      id: "n8-02", tag: "DID Criterion A",
      "case": "Which findings support DID Criterion A (distinct personality states with discontinuity of self and agency)?",
      ask: "Mark the findings that count toward Criterion A.",
      items: [
        ["Feels her actions are sometimes not her own, as if watching from outside", true, "Altered sense of agency and self."],
        ["A child’s voice and a critical voice inside her head that feel like someone else", true, "Intrusions of other states."],
        ["Her partner reports she sometimes speaks like a child and calls herself “Annie”", true, "Observed by others."],
        ["She has an imaginative inner life and enjoys writing fiction", false, "Normal imagination."],
        ["Her mood is low for two weeks at a time", false, "A mood symptom, not identity disruption."]
      ],
      met: true,
      why: "Three findings support Criterion A. Criterion B (recurrent amnesia) must also be present."
    },
    {
      id: "n8-03", tag: "DID exclusions",
      "case": "Four people report possession or identity experiences. Mark those whose experiences could count toward DID.",
      ask: "Criterion D excludes accepted cultural or religious practice and children’s imaginary playmates; Criterion E excludes substances and seizures.",
      items: [
        ["A woman involuntarily possessed at home and work, distressed, outside her community’s rituals", true, "Possession-form DID is possible."],
        ["A spirit medium who enters possession during community ceremonies by choice", false, "Accepted cultural practice."],
        ["A 5-year-old who plays with an imaginary friend", false, "Imaginary playmate."],
        ["A man who acts strangely and remembers nothing during alcohol binges", false, "Alcohol blackouts and chaotic behavior are excluded."]
      ],
      met: true,
      why: "Only the first person’s experiences can count toward DID."
    },
    {
      id: "n8-04", tag: "Dissociative amnesia",
      "case": "A 31-year-old man with memory problems:",
      ask: "Which findings support dissociative amnesia rather than another cause?",
      items: [
        ["Cannot recall a year of his childhood when his father was violent", true, "Autobiographical, linked to trauma."],
        ["Normal EEG, MRI and toxicology", true, "Supports Criterion C."],
        ["Struggles to learn new information since a car crash with loss of consciousness", false, "Points to a neurocognitive disorder after TBI."],
        ["No identity states or everyday time loss", true, "Distinguishes it from DID (Criterion D)."]
      ],
      met: true,
      why: "Three findings support dissociative amnesia; the post-crash learning problem needs a separate neurocognitive assessment."
    },
    {
      id: "n8-05", tag: "Fugue vs seizure",
      "case": "Mark the findings that favor dissociative fugue over seizure-related wandering.",
      ask: "Fugue: purposeful, complex, goal-directed, lasting days to weeks. Seizure: nonpurposive, brief, EEG abnormalities.",
      items: [
        ["Bought a train ticket and rented a room in another city", true, "Purposeful, complex behavior."],
        ["Lasted 9 days", true, "Long duration."],
        ["Aimless walking for 2 minutes with lip smacking", false, "Seizure features."],
        ["Telemetric EEG showed seizure activity during an episode", false, "Points to epilepsy."]
      ],
      met: true,
      why: "Purposeful travel over days favors fugue; the last two findings would point to seizures."
    },
    {
      id: "n8-06", tag: "DPDR Criterion A",
      "case": "A 20-year-old reports these experiences:",
      ask: "Mark the findings that count as depersonalization or derealization.",
      items: [
        ["Feels like a robot, watching himself act", true, "Depersonalization."],
        ["“I know I have feelings but I don’t feel them”", true, "Hypoemotionality (depersonalization)."],
        ["The world looks flat, foggy and two-dimensional", true, "Derealization."],
        ["Believes his neighbors are spying on him", false, "A persecutory belief, not DPDR."],
        ["Feels sad and hopeless", false, "Mood symptom."]
      ],
      met: true,
      why: "Three findings are depersonalization or derealization; check reality testing (Criterion B)."
    },
    {
      id: "n8-07", tag: "DPDR exclusions",
      "case": "Four people with depersonalization. Mark those for whom DPDR can be diagnosed.",
      ask: "DPDR is excluded during intoxication, only during panic attacks or depression, with lost reality testing, or within DID.",
      items: [
        ["Constant derealization for 2 years after one ketamine use, none since", true, "Persisting without further use: DPDR."],
        ["Depersonalization only during panic attacks", false, "Part of panic attacks."],
        ["Certainty that he is dead", false, "Nihilistic delusion: reality testing lost."],
        ["Depersonalization alongside identity states and amnesia", false, "Part of DID."]
      ],
      met: true,
      why: "Only the first person qualifies."
    },
    {
      id: "n8-08", tag: "Acute reaction vs acute stress disorder",
      "case": "Two weeks after an assault, a woman has:",
      ask: "Acute stress disorder needs 9 of 14 symptoms. Mark the findings that count toward acute stress disorder.",
      items: [
        ["Derealization and time slowing", true, "One symptom: altered sense of the reality of surroundings or self."],
        ["Inability to remember part of the assault", true, "Dissociative amnesia (counts)."],
        ["Numb arm with no neurological cause", false, "A sensory-motor dissociative change, but not one of the 14 symptoms."],
        ["No intrusions, avoidance or arousal", false, "Absent symptoms."]
      ],
      need: 9, met: false,
      why: "Only two of the 14 symptoms are present: acute stress disorder is not met. An **acute dissociative reaction** (other specified dissociative disorder) fits."
    }
  ]);
})();
