/* Chapter 5 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifiers, onset, code).
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var ANX = ["Separation anxiety disorder", "Selective mutism", "Specific phobia", "Social anxiety disorder", "Panic disorder", "Agoraphobia", "Generalized anxiety disorder"];
  var ONSET = ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"];
  var FOURTH = ["1: mild use disorder", "2: moderate or severe use disorder", "9: no use disorder"];

  SP.add("ch05", "dxline", [
    {
      id: "w5-01", tag: "Specific phobia",
      "case": "A 27-year-old veterinary student has fainted twice when watching injections and avoids her own vaccinations. She has also been terrified of heights since childhood, avoiding balconies and glass elevators, and takes a longer route to avoid a neighbor’s German shepherd. Each fear is immediate, out of proportion and has lasted years.",
      parts: [
        { label: "Diagnosis", options: ["Specific phobia", "Agoraphobia", "Panic disorder", "Illness anxiety disorder"], answer: 0 },
        { label: "Stimulus types present", options: ["Animal", "Natural environment", "Blood-injection-injury", "Situational", "Other"], answer: [0, 1, 2], multi: true },
        { label: "Codes", options: ["F40.218", "F40.228", "F40.231", "F40.248", "F40.298", "F40.10"], answer: [0, 1, 2], multi: true }
      ],
      line: "**F40.231** Specific phobia, blood-injection-injury (fear of injections and transfusions); **F40.228** specific phobia, natural environment; **F40.218** specific phobia, animal",
      why: "Each stimulus type is a separate diagnosis with its own code. Injections are **F40.231** (blood would be F40.230). Heights are **natural environment** (glass elevators here are feared for the height, not as an enclosed space). Dogs are **animal**."
    },
    {
      id: "w5-02", tag: "Social anxiety",
      "case": "A 40-year-old lawyer has avoided arguing in court for 3 years, sending junior colleagues instead, because his voice shakes and he fears the judge will think him incompetent. He is at ease in meetings, at dinner parties and with new clients.",
      parts: [
        { label: "Diagnosis", options: ["Social anxiety disorder", "Specific phobia, situational", "Avoidant personality disorder", "Generalized anxiety disorder"], answer: 0 },
        { label: "Specifier", options: ["None", "Performance only", "Generalized", "With panic attacks"], answer: 1 },
        { label: "Code", options: ["F40.10", "F40.00", "F40.248", "F41.1"], answer: 0 }
      ],
      line: "**F40.10** Social anxiety disorder, performance only",
      why: "Fear restricted to speaking or performing in public, without fear of nonperformance social situations, is **performance only**. “Generalized” was DSM-IV’s specifier and no longer exists."
    },
    {
      id: "w5-03", tag: "Panic and agoraphobia",
      "case": "A 26-year-old has had unexpected panic attacks for 8 months and worries constantly about the next one. For 7 months she has avoided trains, cinemas and crowded markets unless her sister comes, fearing she would panic with no way out.",
      parts: [
        { label: "Diagnoses", options: ["Panic disorder", "Agoraphobia", "Specific phobia, situational", "Social anxiety disorder"], answer: [0, 1], multi: true },
        { label: "Codes", options: ["F41.0", "F40.00", "F40.248", "F41.1"], answer: [0, 1], multi: true },
        { label: "Add “with panic attacks”?", options: ["Yes, to agoraphobia", "Yes, to panic disorder", "No"], answer: 2 }
      ],
      line: "**F41.0** Panic disorder; **F40.00** agoraphobia",
      why: "Agoraphobia (three situations: transport, enclosed places, crowds) is coded **separately** from panic disorder. The panic attack specifier is not used where panic disorder is diagnosed, since the attacks are already explained by it."
    },
    {
      id: "w5-04", tag: "Panic attack specifier",
      "case": "A 52-year-old man has his second major depressive episode (the first was 5 years ago, with full recovery). He has six symptoms and is struggling at work but still functioning. Several times a week, when he thinks about his failed business, he has sudden surges of terror with pounding heart, sweating, shaking and chest tightness, peaking within minutes. He has never had an attack out of the blue. No psychosis, no anxious distress features between surges.",
      parts: [
        { label: "Diagnosis", options: ["Major depressive disorder", "Panic disorder", "Major depressive disorder and panic disorder", "Generalized anxiety disorder"], answer: 0 },
        { label: "Code", options: ["F32.1", "F33.1", "F41.0", "F33.0"], answer: 1 },
        { label: "Specifiers", options: ["With panic attacks", "With mixed features", "With melancholic features", "With peripartum onset"], answer: [0], multi: true }
      ],
      line: "**F33.1** Major depressive disorder, recurrent episode, moderate, with panic attacks",
      why: "Second episode after full recovery = **recurrent** (F33); moderate = **F33.1**. Cued panic attacks within depression are recorded with the uncoded **“with panic attacks”** specifier. Without unexpected attacks, there is no panic disorder."
    },
    {
      id: "w5-05", tag: "Sedative withdrawal",
      "case": "A 45-year-old woman with severe lorazepam use disorder ran out of her supply 2 days ago. She has severe anxiety and repeated panic attacks that dominate the picture and need treatment in their own right. She had no anxiety disorder before her benzodiazepine use.",
      parts: [
        { label: "Diagnosis", options: ["Sedative-, hypnotic- or anxiolytic-induced anxiety disorder", "Panic disorder", "Generalized anxiety disorder", "Sedative withdrawal only"], answer: 0 },
        { label: "4th character", options: FOURTH, answer: 1 },
        { label: "Onset", options: ONSET, answer: 1 },
        { label: "Code", options: ["F13.180", "F13.280", "F13.980", "F13.230"], answer: 1 }
      ],
      line: "**F13.280** Severe lorazepam use disorder with lorazepam-induced anxiety disorder, with onset during withdrawal",
      why: "This is the manual’s own example. The **severe** use disorder makes the 4th character **2**, and it is named first but not coded separately. Anxiety predominating and needing attention justifies this diagnosis over withdrawal alone."
    },
    {
      id: "w5-06", tag: "Medication-induced",
      "case": "A 34-year-old woman with asthma began using her salbutamol inhaler eight times a day during a chest infection. Within days she developed marked anxiety, tremor and palpitations that impair her work. She has no substance use disorder and no anxiety history; symptoms fade on days she uses it less.",
      parts: [
        { label: "Substance class used for coding", options: ["Amphetamine-type (or other stimulant)", "Other (or unknown) substance", "Sedative, hypnotic or anxiolytic", "Caffeine"], answer: 1 },
        { label: "Onset", options: ONSET, answer: 2 },
        { label: "Code", options: ["F15.980", "F19.980", "F19.180", "F41.1"], answer: 1 }
      ],
      line: "**F19.980** Salbutamol-induced anxiety disorder, with onset after medication use",
      why: "Medications that do not fit any class use **other (or unknown) substance**. No use disorder: 4th character **9**. Onset with a medication is “**with onset after medication use**.”"
    },
    {
      id: "w5-07", tag: "Cannabis",
      "case": "A 20-year-old with mild cannabis use disorder has had three panic attacks while high on potent edibles over the past month, now dominating the clinical picture. He has none when not using.",
      parts: [
        { label: "Diagnosis", options: ["Cannabis-induced anxiety disorder", "Panic disorder", "Cannabis intoxication only", "Unspecified anxiety disorder"], answer: 0 },
        { label: "Onset", options: ONSET, answer: 0 },
        { label: "Code", options: ["F12.180", "F12.280", "F12.980", "F12.188"], answer: 0 }
      ],
      line: "**F12.180** Mild cannabis use disorder with cannabis-induced anxiety disorder, with onset during intoxication",
      why: "Mild use disorder = 4th character **1**. Cannabis intoxication is a recognized cause of panic attacks; with attacks only during use, panic disorder is not diagnosed."
    },
    {
      id: "w5-08", tag: "Opioid withdrawal",
      "case": "A 38-year-old man with moderate opioid use disorder is in his second day of withdrawal from oxycodone. Severe anxiety and restlessness dominate, beyond the usual withdrawal picture, and need specific treatment.",
      parts: [
        { label: "4th character", options: FOURTH, answer: 1 },
        { label: "Onset", options: ONSET, answer: 1 },
        { label: "Code", options: ["F11.280", "F11.288", "F11.188", "F11.988"], answer: 1 }
      ],
      line: "**F11.288** Moderate oxycodone use disorder with oxycodone-induced anxiety disorder, with onset during withdrawal",
      why: "Opioid-induced anxiety codes end in **.x88**, not .x80. Moderate use disorder = **2**."
    },
    {
      id: "w5-09", tag: "Caffeine",
      "case": "A 22-year-old student drank about 1 g of caffeine a day during exams and developed restlessness, insomnia, tremor and two panic attacks that required a clinic visit. All resolved within a week of stopping.",
      parts: [
        { label: "Diagnosis", options: ["Caffeine-induced anxiety disorder", "Panic disorder", "Generalized anxiety disorder", "Caffeine use disorder"], answer: 0 },
        { label: "Onset", options: ONSET, answer: 0 },
        { label: "Code", options: ["F15.180", "F15.280", "F15.980", "F19.980"], answer: 2 }
      ],
      line: "**F15.980** Caffeine-induced anxiety disorder, with onset during intoxication",
      why: "Caffeine has only the “without use disorder” code, **F15.980**: caffeine use disorder is a condition for further study, not a main-manual diagnosis."
    },
    {
      id: "w5-10", tag: "Medical condition",
      "case": "A 47-year-old woman develops anxiety, palpitations, tremor, weight loss and heat intolerance over 2 months. TSH is suppressed with high free T4, and she is diagnosed with hyperthyroidism (E05.90). The anxiety predominates and impairs her work; she is not delirious.",
      parts: [
        { label: "Diagnosis", options: ["Anxiety disorder due to another medical condition", "Generalized anxiety disorder", "Panic disorder", "Adjustment disorder with anxiety"], answer: 0 },
        { label: "Order of codes", options: ["E05.90, then F06.4", "F06.4, then E05.90", "F06.4 only", "E05.90 only"], answer: 0 }
      ],
      line: "**E05.90** Hyperthyroidism; **F06.4** anxiety disorder due to hyperthyroidism",
      why: "Name the condition in the diagnosis and list its code **immediately before** F06.4."
    },
    {
      id: "w5-11", tag: "Other specified",
      "case": "A 30-year-old man has had sudden, unprovoked surges of fear with palpitations and trembling only (two symptoms), several times a month for a year. He now avoids caffeine and worries about them. Workup is normal.",
      parts: [
        { label: "Diagnosis", options: ["Panic disorder", "Other specified anxiety disorder", "Unspecified anxiety disorder", "Generalized anxiety disorder"], answer: 1 },
        { label: "Reason recorded", options: ["Limited-symptom attacks", "Generalized anxiety less than more days than not", "Khyâl cap", "Insufficient information"], answer: 0 },
        { label: "Code", options: ["F41.0", "F41.8", "F41.9", "F41.1"], answer: 1 }
      ],
      line: "**F41.8** Other specified anxiety disorder, limited-symptom attacks",
      why: "Panic disorder needs **full-symptom** (four or more) unexpected attacks. Limited-symptom attacks are a listed example of other specified anxiety disorder."
    },
    {
      id: "w5-12", tag: "Separation anxiety",
      "case": "A 33-year-old mother has, for 10 months, called her husband and nanny many times a day to check that her toddler is safe, refused a promotion requiring travel, and had nightmares of losing her child. When her husband takes the child out, she sometimes has sudden surges of terror with racing heart, sweating, shaking and breathlessness. She has never had an attack out of the blue.",
      parts: [
        { label: "Diagnosis", options: ANX, answer: 0 },
        { label: "Specifier", options: ["None", "With panic attacks", "Performance only"], answer: 1 },
        { label: "Code", options: ["F93.0", "F41.0", "F41.1", "F40.00"], answer: 0 }
      ],
      line: "**F93.0** Separation anxiety disorder, with panic attacks",
      why: "Adult separation anxiety disorder (typically 6 months; here 10). Her attacks are **expected**, cued by separation, so they are recorded with the specifier rather than as panic disorder."
    }
  ]);

  SP.add("ch05", "counting", [
    {
      id: "n5-01", tag: "Separation anxiety",
      "case": "A 9-year-old boy, for the past 6 weeks:",
      ask: "Separation anxiety disorder needs at least three of eight symptoms. Mark the findings that count.",
      items: [
        ["Cries and begs his mother not to leave at the school gate", true, "Excessive distress at separation (A1)."],
        ["Asks repeatedly whether his father will be killed driving to work", true, "Worry about harm to attachment figures (A2)."],
        ["Is shy with new children at the park", false, "Shyness is not a separation symptom."],
        ["Insists his mother lies with him until he falls asleep", true, "Reluctance to sleep without an attachment figure nearby (A6)."],
        ["Is afraid of thunderstorms", false, "A specific fear, unrelated to separation."],
        ["Gets stomachaches on school mornings, not on weekends", true, "Physical complaints when separation is anticipated (A8)."]
      ],
      need: 3, met: true,
      why: "Four symptoms count, beyond the 4-week minimum for youth. Criterion A is met."
    },
    {
      id: "n5-02", tag: "Panic attack",
      "case": "A 48-year-old Cambodian man describes episodes that peak within minutes:",
      ask: "A panic attack needs four of 13 symptoms. Culture-specific symptoms do not count. Mark the findings that count.",
      items: [
        ["Dizziness", true, "Dizziness, unsteadiness or faintness."],
        ["Ringing in the ears", false, "**Tinnitus** is a culture-specific symptom (khyâl attacks): not counted."],
        ["Neck soreness", false, "Culture-specific: not counted."],
        ["Pounding heart", true, "Palpitations."],
        ["Headache", false, "Culture-specific: not counted."],
        ["Cold hands and chills", true, "Chills or heat sensations."]
      ],
      need: 4, met: false,
      why: "Only three of the 13 symptoms count. Ask about the rest (fear of dying, breathlessness, tingling); if no fourth, this is a limited-symptom attack."
    },
    {
      id: "n5-03", tag: "Agoraphobia",
      "case": "A 35-year-old woman, for 8 months, avoids or dreads:",
      ask: "Agoraphobia needs fear of two of five situations, because escape or help might be unavailable. Mark the findings that count.",
      items: [
        ["Buses and the subway, in case she panics and cannot get off", true, "Public transportation, with agoraphobic cognition."],
        ["Long lines at the bank, for the same reason", true, "Standing in line or in a crowd."],
        ["Giving a toast at weddings, for fear of looking foolish", false, "Fear of evaluation points to social anxiety."],
        ["Flying, because she thinks the plane will crash", false, "Fear of **direct harm** suggests specific phobia."],
        ["Spiders", false, "Animal phobia, not an agoraphobic situation."]
      ],
      need: 2, met: true,
      why: "Two agoraphobic situations with the right cognition (transport, lines): Criterion A is met. The other fears may be separate diagnoses."
    },
    {
      id: "n5-04", tag: "GAD Criterion C (adult)",
      "case": "A 39-year-old man with 8 months of uncontrollable worry about money, work and his children, more days than not:",
      ask: "Adults need three of six associated symptoms. Mark the findings that count.",
      items: [
        ["Feels keyed up and on edge", true, "Restlessness or feeling keyed up (C1)."],
        ["Has a racing heart and shortness of breath", false, "Autonomic hyperarousal is not a Criterion C symptom (and is less prominent in GAD than in panic)."],
        ["Tires easily during the day", true, "Easily fatigued (C2)."],
        ["Has sudden attacks of terror out of the blue", false, "Unexpected panic attacks suggest panic disorder."],
        ["Lies awake for an hour most nights", true, "Sleep disturbance (C6)."],
        ["Has had diarrhea when stressed", false, "An associated somatic symptom, not a criterion."]
      ],
      need: 3, met: true,
      why: "Three of six (restlessness, fatigue, sleep): Criterion C is met. Ask about the unexpected attacks separately: panic disorder may coexist."
    },
    {
      id: "n5-05", tag: "GAD Criterion C (child)",
      "case": "An 11-year-old girl worries most days for 7 months about grades, being late and her family’s safety, and cannot stop:",
      ask: "In children, how many Criterion C symptoms are needed? Mark the findings that count.",
      items: [
        ["Asks for reassurance many times each evening", false, "Typical of childhood GAD, but not a Criterion C symptom."],
        ["Is irritable with her brother most days", true, "Irritability (C4)."],
        ["Redoes homework until perfect", false, "Perfectionism is associated, not a criterion."]
      ],
      need: 1, met: true,
      why: "Only **one** associated symptom is needed in children; irritability suffices."
    },
    {
      id: "n5-06", tag: "Panic disorder Criterion B",
      "case": "After her third unexpected panic attack 6 weeks ago, a 30-year-old woman:",
      ask: "Criterion B needs at least 1 month of persistent worry about attacks or their consequences, or a maladaptive behavior change. Mark the findings that count.",
      items: [
        ["Worries daily that the next attack will be a heart attack", true, "Worry about the consequences of attacks (B1)."],
        ["Has stopped going to the gym so her heart won’t race", true, "Maladaptive behavior change (B2)."],
        ["Worries about her mortgage", false, "Not about the attacks."],
        ["Felt embarrassed once, the day after an attack at work", false, "A passing reaction, not persistent worry for a month."]
      ],
      need: 1, met: true,
      why: "Both B1 and B2 are present for over a month; only one is required."
    },
    {
      id: "n5-07", tag: "Specific phobia",
      "case": "A 25-year-old reports fear of flying:",
      ask: "Which findings support the specific phobia criteria (B: almost always and immediate; C: avoided or endured; D: out of proportion; E: typically 6 months)?",
      items: [
        ["Feels anxious on about one in five flights", false, "Specific phobia needs fear **almost always**; occasional anxiety does not qualify (B)."],
        ["Fear starts as soon as she boards", true, "Immediate (B)."],
        ["Has turned down a job requiring travel", true, "Avoidance can be shown by life choices (C)."],
        ["Has felt this way for 2 years", true, "Typically 6 months or more (E)."]
      ],
      met: false,
      why: "Criterion B fails: fear on only one flight in five is not “almost always.” Clarify the history; if fear really is occasional, specific phobia is not diagnosed."
    },
    {
      id: "n5-08", tag: "Selective mutism",
      "case": "A 6-year-old boy, now in his third month of first grade:",
      ask: "Which findings support a diagnosis of selective mutism?",
      items: [
        ["Speaks fluently with his parents at home", true, "Speech in other situations (A)."],
        ["Has not spoken to his teacher since school began", true, "Consistent failure to speak where expected, beyond the first month (A, C)."],
        ["Teacher cannot assess his reading", true, "Interference with achievement (B)."],
        ["Speaks the school’s language at home", true, "Rules out lack of language knowledge (D)."],
        ["Stutters at home and at school", false, "Fluency problems in all settings would point to a communication disorder (E)."]
      ],
      met: true,
      why: "Criteria A–D are supported. Confirm the stutter is absent or not the explanation (E) before diagnosing F94.0."
    },
    {
      id: "n5-09", tag: "Social anxiety (child)",
      "case": "A 9-year-old girl, for 8 months:",
      ask: "Which findings count toward social anxiety disorder in a child?",
      items: [
        ["Freezes and cries when classmates invite her to play", true, "Fear in **peer** settings, expressed as freezing or crying."],
        ["Is shy only with adult strangers, fine with peers", false, "In children, anxiety must occur with **peers**, not only adults."],
        ["Avoids eating lunch in the cafeteria for fear others will laugh", true, "Avoidance of observation by peers."],
        ["Is comfortable at a party only if her mother stays", false, "Comfort only with the attachment figure present suggests separation anxiety."]
      ],
      met: true,
      why: "Fear and avoidance in peer settings are present. Explore separation anxiety too, since both can coexist."
    },
    {
      id: "n5-10", tag: "Substance-induced vs independent",
      "case": "A 34-year-old with panic attacks and heavy cocaine use. Mark the findings that are evidence of an **independent** anxiety disorder (Criterion C):",
      ask: "Evidence of independence: symptoms that preceded use, persist about a month after acute withdrawal or intoxication ends, or recurrent episodes without substances.",
      items: [
        ["Had unexpected panic attacks at 19, before he ever used cocaine", true, "Symptoms preceding use."],
        ["Attacks continue unexpectedly 3 months into abstinence", true, "Persistence well beyond about a month."],
        ["Attacks peak during binges", false, "Consistent with induced anxiety."],
        ["Cocaine is capable of causing panic", false, "This supports Criterion B2 of induced anxiety, not independence."]
      ],
      met: true,
      why: "With attacks before use and persisting in abstinence, diagnose **panic disorder** (plus the cocaine use disorder), not cocaine-induced anxiety disorder."
    }
  ]);
})();
