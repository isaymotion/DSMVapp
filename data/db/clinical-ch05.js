/* Chapter 5 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var BZD = "Benzodiazepines ([[stahl:drugs/alprazolam|alprazolam]], clonazepam, [[stahl:drugs/diazepam|diazepam]]) act fast but carry an FDA **boxed warning** (since 2020) for misuse, addiction, dependence and withdrawal; keep them short-term or as a bridge, and avoid them with substance use, in older adults and with opioids.";
  var CBT = "**CBT with exposure**, which is at least as effective as medication; combining the two helps in moderate to severe cases.";
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "separation-anxiety",
      ask: [
        ["A1 Distress", "To a parent: “What happens when you leave her at school or go out for the evening?”", "Ask the child separately too: children often report more symptoms than parents."],
        ["A2 Worry about others", "“When you’re away from Mom, do you worry something bad might happen to her?”"],
        ["A3 Worry about self", "“Do you worry about getting lost or being taken away, so you couldn’t see your family again?”"],
        ["A4–A5 Going out, being alone", "“Can you go to school, a friend’s house or another room by yourself?”", "Shadowing the parent around the house is typical."],
        ["A6 Sleep", "“Where do you sleep? Can you go to sleep if no one stays with you?”"],
        ["A7 Nightmares", "“Do you have bad dreams? What are they about?”"],
        ["A8 Body", "“Do you get tummy aches or headaches on school mornings, or when your parents go out?”"],
        ["Adults", "“How often do you check where your partner or children are? How do you feel when they travel?”", "Adults may text or call many times a day."],
        ["Duration and triggers", "“When did this start? Was there a move, a loss, an illness or bullying?”", "≥4 weeks under 18; typically 6 months in adults."]
      ],
      tx: {
        asOf: "October 2026",
        first: CBT + " For children, CBT with a strong **parent component** (graded separations, reducing accommodation) and a planned **return to school**.",
        points: [
          "Moderate to severe or CBT-resistant pediatric anxiety: an [[stahl:c/ch07/guide/s7-ssri|SSRI]] (sertraline is best studied; the CBT-plus-sertraline combination did best in the CAMS trial). Monitor for activation and suicidal thinking (boxed warning under 25).",
          "Adults: treat as for other anxiety disorders, with an SSRI or SNRI plus CBT.",
          "Avoid benzodiazepines in children."
        ],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"], ["Anxiety disorders as symptom sets", "c/ch08/guide/s8-subtypes"]]
      }
    },
    {
      id: "selective-mutism",
      ask: [
        ["A Pattern", "To a parent: “Where does she talk, and with whom? Where does she stay silent?”", "Ask for a home video: it shows established speech."],
        ["B Impact", "To a teacher: “Can you assess her reading? Does she ask for help or to use the restroom?”"],
        ["C Duration", "“When did school start, and how long has she been silent there?”", "Not the first month of school."],
        ["D Language", "“What language is spoken at home? How well does she understand the school language?”"],
        ["E Communication", "“How was her speech development? Does she stutter or have trouble with sounds at home?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Behavioral therapy** in the school setting: stimulus fading (gradually adding people and places where the child speaks), shaping, contingency management and reducing pressure to speak, with parents and teachers involved.",
        points: ["SSRIs (fluoxetine is the most studied) are used off-label for severe or persistent cases, alongside behavioral treatment.", "Treat comorbid social anxiety disorder; assess speech and language."],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "specific-phobia",
      ask: [
        ["A Object", "“Is there anything you are very afraid of, such as animals, heights, storms, needles, blood, flying or elevators?”", "Ask about every type: 75% fear more than one."],
        ["B Every time", "“Does it frighten you every time, straight away?”"],
        ["C Avoidance", "“What do you do to avoid it? Have you turned down a job, trip or medical test because of it?”", "Life choices can reveal avoidance even when fear is no longer felt."],
        ["Reason", "“What do you think would happen?”", "Direct harm (bite, crash) = phobia; being trapped without help = agoraphobia."],
        ["BII", "“Have you ever fainted at the sight of blood or a needle?”"],
        ["E Duration", "“How long has this been a problem?”", "Typically ≥6 months."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Exposure therapy** (graded in vivo, imaginal or virtual reality); even a single prolonged session (one-session treatment) can be effective.",
        points: ["Blood-injection-injury phobia: add **applied tension** (tensing the large muscles to raise blood pressure) to prevent fainting.", "Medication has a minor role; a benzodiazepine for an unavoidable rare exposure (e.g., a flight) relieves distress but may hinder learning in exposure therapy."],
        stahl: [["Fear conditioning", "c/ch08/guide/s8-conditioning"], ["Fear extinction", "c/ch08/guide/s8-extinction"]]
      }
    },
    {
      id: "social-anxiety",
      ask: [
        ["A Situations", "“How do you feel meeting new people, eating in front of others, speaking up in class or meetings, or giving a talk?”", "In children, ask about peers, not just adults."],
        ["B Feared outcome", "“What are you afraid people will notice or think?”", "Blushing, shaking, sweating, saying something stupid."],
        ["C–D Avoidance", "“What do you avoid, or do to get through it?”", "Subtle avoidance: overpreparing, little eye contact, drinking beforehand."],
        ["Performance only?", "“Is it only when you perform or speak in public, or with conversations and parties too?”"],
        ["Impairment", "“Has it stopped you from taking a job, course or relationship you wanted?”"],
        ["Alcohol", "“Do you drink or use anything to cope before social events?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: CBT + " For medication: an [[stahl:c/ch07/guide/s7-ssri|SSRI]] (FDA-approved: [[stahl:drugs/sertraline|sertraline]], [[stahl:drugs/paroxetine|paroxetine]]) or [[stahl:drugs/venlafaxine|venlafaxine]] XR.",
        points: [
          "Performance only: a beta-blocker such as propranolol taken before the event (off-label) eases tremor and palpitations; beta-blockers do not help generalized social anxiety.",
          "Second-line: MAOIs ([[stahl:drugs/phenelzine|phenelzine]]), [[stahl:drugs/pregabalin|pregabalin]] or [[stahl:drugs/gabapentin|gabapentin]] (off-label in the US).",
          BZD
        ],
        stahl: [["Social anxiety disorder", "c/ch08/guide/s8-social"], ["SSRIs", "c/ch07/guide/s7-ssri"], ["α2δ ligands", "c/ch08/guide/s8-a2d"]]
      }
    },
    {
      id: "panic-disorder",
      ask: [
        ["A Attack", "“Have you had sudden waves of intense fear that peak within a few minutes? What do you feel in your body?”", "Count the 13 symptoms; culture-specific ones do not count."],
        ["Unexpected", "“Did any come out of the blue, for example while relaxing or waking you from sleep?”"],
        ["B1 Worry", "“Between attacks, how much do you worry about another one, or that it means a heart attack or going crazy?”"],
        ["B2 Behavior", "“What have you changed because of the attacks: exercise, coffee, going out alone, places you avoid?”", "If two agoraphobic situations are avoided, add agoraphobia."],
        ["C Causes", "“How much coffee, energy drinks, cannabis, stimulants or alcohol do you use? Any new medicines?”", "ECG, thyroid tests, glucose, calcium and a drug screen as indicated."],
        ["Red flags", "“Have you fainted, lost bladder control, had vertigo, slurred speech or memory gaps during an attack?”", "Onset after 45 or atypical symptoms: look for a medical cause."]
      ],
      tx: {
        asOf: "October 2026",
        first: CBT + " For medication: an SSRI (FDA-approved: [[stahl:drugs/sertraline|sertraline]], [[stahl:drugs/paroxetine|paroxetine]], [[stahl:drugs/fluoxetine|fluoxetine]]) or [[stahl:drugs/venlafaxine|venlafaxine]] XR, started at a **low dose** because people with panic are sensitive to side effects.",
        points: [
          "Allow 8–12 weeks at an adequate dose; continue for about a year after response to reduce relapse.",
          "[[stahl:drugs/alprazolam|Alprazolam]] and clonazepam are FDA-approved for panic disorder. " + BZD,
          "Older options: TCAs ([[stahl:drugs/imipramine|imipramine]], [[stahl:drugs/clomipramine|clomipramine]]) and MAOIs.",
          "Reduce caffeine, stop smoking, treat comorbid depression and screen for suicidal thoughts."
        ],
        stahl: [["Panic disorder", "c/ch08/guide/s8-panic"], ["Benzodiazepines", "c/ch08/guide/s8-bzd"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "panic-attack",
      ask: [
        ["Surge", "“How quickly did it build? How long until it was at its worst?”", "Peak within minutes."],
        ["Symptoms", "“What did you feel: heart pounding, sweating, shaking, short of breath, choking, chest pain, nausea, dizziness, chills or heat, tingling, feeling unreal, fear of losing control or dying?”"],
        ["Cue", "“What were you doing just before? Did you expect it?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat the disorder the attacks belong to; panic attacks mark greater severity and suicide risk, so ask about suicidal thoughts.",
        points: ["Explain the physiology (the fight-or-flight response) and that attacks, though frightening, are not dangerous once medical causes are excluded.", "Slow breathing and interoceptive exposure (deliberately bringing on the sensations) are part of CBT."],
        stahl: [["The amygdala and fear", "c/ch08/guide/s8-amygdala"]]
      }
    },
    {
      id: "agoraphobia",
      ask: [
        ["A Situations", "“Do you avoid or dread buses, trains or planes; open places like parking lots or bridges; shops or cinemas; lines or crowds; or being out alone?”", "Two of five."],
        ["B Reason", "“What do you fear would happen there?”", "Escape hard or help unavailable if panic-like or embarrassing symptoms (falling, incontinence) strike."],
        ["D Companion", "“Can you go if someone comes with you? Do you sit near exits?”"],
        ["Severity", "“When did you last leave the house alone?”"],
        ["Panic", "“Have you ever had a sudden attack out of the blue?”", "If panic disorder is met, code both."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT with graded in vivo exposure** to the avoided situations; with panic disorder, treat both together. Medication as for panic disorder (an SSRI or venlafaxine XR).",
        points: ["Homebound patients may need home-based or video-delivered therapy to start.", "Comorbid depression makes the course more treatment-resistant: treat it actively.", "Watch for self-medication with alcohol or sedatives."],
        stahl: [["Panic disorder", "c/ch08/guide/s8-panic"], ["Fear extinction", "c/ch08/guide/s8-extinction"]]
      }
    },
    {
      id: "gad",
      ask: [
        ["A Worry", "“Do you worry a lot about everyday things, such as work, health, money or family? More days than not?”", "Ask for examples across several areas."],
        ["B Control", "“When you start worrying, can you stop?”"],
        ["Duration", "“How long has it been like this?”", "At least 6 months."],
        ["C Body", "“Do you feel restless or on edge, tire easily, lose concentration, feel irritable, tense or sleep badly?”", "3 of 6 in adults, 1 in children."],
        ["E Causes", "“How much caffeine do you drink? Any thyroid problems or new medicines?”"],
        ["F Focus", "“Is it mostly about one thing, such as having an illness, panic attacks or being judged?”", "A single focus points to another disorder."]
      ],
      tx: {
        asOf: "October 2026",
        first: CBT + " For medication: an SSRI or SNRI. FDA-approved: [[stahl:drugs/escitalopram|escitalopram]] (also ages 7–17), [[stahl:drugs/paroxetine|paroxetine]], [[stahl:drugs/venlafaxine|venlafaxine]] XR and [[stahl:drugs/duloxetine|duloxetine]] (also ages 7–17).",
        points: [
          "[[stahl:drugs/buspirone|Buspirone]] is FDA-approved for GAD: no dependence, slow onset, little effect on comorbid depression.",
          "[[stahl:drugs/pregabalin|Pregabalin]] is approved for GAD in Europe and used off-label in the US; [[stahl:drugs/hydroxyzine|hydroxyzine]] is approved for anxiety; [[stahl:drugs/quetiapine|quetiapine]] XR has evidence but metabolic costs.",
          BZD,
          "GAD is chronic: continue treatment for at least 6–12 months after response.",
          "Investigational: lysergide (MM120, now DT120) has phase 3 trials in GAD; no psychedelic is approved for anxiety as of October 2026."
        ],
        stahl: [["Generalized anxiety disorder", "c/ch08/guide/s8-gad"], ["Serotonin and buspirone", "c/ch08/guide/s8-serotonin"], ["α2δ ligands", "c/ch08/guide/s8-a2d"], ["Benzodiazepines", "c/ch08/guide/s8-bzd"]]
      }
    },
    {
      id: "substance-induced-anxiety",
      ask: [
        ["Timeline", "“When did the anxiety start in relation to your drinking, drug use or a new medicine? Was it there before?”"],
        ["Substances", "“How many cups of coffee, energy drinks or pre-workout supplements a day? Cannabis, stimulants, alcohol, sleeping pills?”"],
        ["Medications", "“Any inhalers, steroids, thyroid pills, decongestants or recent dose changes?”"],
        ["Persistence", "After stopping: “Has the anxiety settled?”", "Persisting about a month suggests an independent disorder."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Remove or reduce the cause (taper caffeine; switch the medication), and manage withdrawal safely (alcohol and sedative withdrawal can be dangerous).",
        points: ["Treat the substance use disorder.", "If anxiety persists after about a month, treat it as an independent anxiety disorder."],
        stahl: [["Addiction", "c/ch13/guide"]]
      }
    },
    {
      id: "anxiety-due-to-amc",
      ask: [
        ["Timeline", "“Did the anxiety start or worsen with a new illness or symptom?”"],
        ["Physical clues", "“Any weight loss, heat intolerance, tremor, headaches with sweating, shortness of breath, irregular heartbeat or low blood sugar spells?”"],
        ["Workup", "Thyroid tests, glucose, calcium, ECG, oxygen saturation, B12 and others guided by history; metanephrines if episodes are paroxysmal with hypertension."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat the underlying condition (e.g., hyperthyroidism, arrhythmia, pheochromocytoma).",
        points: ["Symptomatic treatment while the cause is addressed; avoid benzodiazepines in respiratory failure and delirium."],
        stahl: []
      }
    },
    {
      id: "other-specified-anxiety",
      tx: { asOf: "October 2026", first: "Treat according to the predominant problem, usually with CBT; follow up for evolution into a specific disorder.", points: [], stahl: [] }
    },
    {
      id: "unspecified-anxiety",
      tx: { asOf: "October 2026", first: "Ensure safety, exclude medical and substance causes, and gather more history to reach a specific diagnosis.", points: [], stahl: [] }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "anxious", title: "Anxiety, worry or nervousness",
      intro: "“Anxiety” covers very different disorders. The two questions that sort them are **what is feared or avoided** and **what the person thinks will happen**. Then exclude substances, medications and medical causes.",
      ask: ["What do you fear or avoid, and what do you think would happen?", "Do you have sudden attacks that peak within minutes? Any out of the blue?", "Is the worry about many things, or one focus?", "How long has it lasted, and what has it stopped you doing?", "Caffeine, alcohol, cannabis, stimulants, new medicines?"],
      mustNotMiss: ["**Medical causes**: hyperthyroidism, arrhythmia, hypoglycemia, pheochromocytoma, pulmonary embolism.", "**Alcohol or sedative withdrawal.**", "**Suicidal thoughts**, which anxiety raises, especially with depression."],
      helpers: ["anxiety", "panic"],
      items: [
        { ch: "ch05", dx: "gad", when: "Hard-to-control worry about many things, more days than not for 6 months." },
        { ch: "ch05", dx: "social-anxiety", when: "Fear of being judged or embarrassed in social situations." },
        { ch: "ch05", dx: "separation-anxiety", when: "Fear of separation from attachment figures or harm coming to them." },
        { ch: "ch05", dx: "specific-phobia", when: "Fear of a particular object or situation." },
        { ch: "ch05", dx: "agoraphobia", when: "Fear of being trapped without help in transport, crowds, shops or outside alone." },
        { ch: "ch05", dx: "substance-induced-anxiety", when: "Anxiety tied to caffeine, stimulants, cannabis, withdrawal or a medication." },
        { ch: "ch05", dx: "anxiety-due-to-amc", when: "Late onset, atypical symptoms, a medical condition with a known mechanism." },
        { ch: "ch04", dx: "mdd", when: "Low mood or anhedonia with anxiety (the anxious distress specifier)." },
        { ch: "ch06", dx: "ocd", when: "Intrusive, unwanted thoughts with rituals." },
        { ch: "ch07", name: "PTSD or adjustment disorder", when: "After a trauma, or within 3 months of a stressor." },
        { ch: "ch09", name: "Illness anxiety disorder", when: "Worry centered on having a serious illness." }
      ]
    },
    {
      id: "panic-episodes", title: "Sudden attacks of fear, palpitations or chest pain",
      intro: "First exclude a medical emergency. Then decide whether the episodes are panic attacks (4 of 13 symptoms, peak within minutes), whether they are expected or unexpected, and what disorder they belong to.",
      ask: ["How fast did it peak, and how long did it last?", "What were you doing just before? Did it come out of the blue?", "Did you faint, lose bladder control, have vertigo, slurred speech or memory loss?", "Since the attacks, what do you worry about or avoid?", "Coffee, energy drinks, stimulants, cannabis, alcohol or sedative withdrawal?"],
      mustNotMiss: ["**Acute coronary syndrome, arrhythmia, pulmonary embolism, asthma.**", "**Hypoglycemia, hyperthyroidism, pheochromocytoma, seizures.**", "Red flags: **onset after 45**, atypical symptoms."],
      helpers: ["panic"],
      items: [
        { ch: "ch05", dx: "panic-disorder", when: "Recurrent unexpected attacks plus a month of worry or avoidance." },
        { ch: "ch05", dx: "panic-attack", when: "Attacks within another disorder: add “with panic attacks.”" },
        { ch: "ch05", dx: "agoraphobia", when: "Attacks or panic-like fears in two or more agoraphobic situations." },
        { ch: "ch05", dx: "social-anxiety", when: "Attacks only in social or performance situations." },
        { ch: "ch05", dx: "anxiety-due-to-amc", when: "A medical cause such as arrhythmia, pheochromocytoma or hyperthyroidism." },
        { ch: "ch05", dx: "substance-induced-anxiety", when: "Stimulant, caffeine or cannabis intoxication; alcohol or sedative withdrawal." },
        { ch: "ch05", dx: "other-specified-anxiety", when: "Only limited-symptom attacks, or cultural syndromes (ataque de nervios, khyâl cap)." }
      ]
    },
    {
      id: "avoidance", title: "Avoiding places or situations",
      intro: "Avoidance is the behavior; the diagnosis comes from the reason. Ask what the person thinks would happen in the avoided place.",
      ask: ["What do you avoid, and how many kinds of places?", "What do you think would happen there?", "Can you go with someone you trust?", "Are you comfortable when entirely alone, or at home with family?"],
      mustNotMiss: ["**Depression** (staying home from apathy).", "**Psychosis** (avoidance driven by delusions)."],
      helpers: ["anxiety"],
      items: [
        { ch: "ch05", dx: "agoraphobia", when: "Two or more of transport, open spaces, enclosed places, crowds, outside alone; fear of being trapped." },
        { ch: "ch05", dx: "specific-phobia", when: "One situation or object, feared for direct harm." },
        { ch: "ch05", dx: "social-anxiety", when: "Situations where others might judge." },
        { ch: "ch05", dx: "separation-anxiety", when: "Anywhere away from attachment figures." },
        { ch: "ch05", dx: "panic-disorder", when: "Avoiding exercise, caffeine or places linked with attacks." },
        { ch: "ch04", dx: "mdd", when: "Staying home from low energy, anhedonia or low self-worth." },
        { ch: "ch07", name: "PTSD", when: "Avoiding reminders of a trauma." },
        { ch: "ch06", name: "OCD or body dysmorphic disorder", when: "Avoiding contamination or being seen because of appearance concerns." },
        { ch: "ch18", dx: "avoidant-pd", when: "Lifelong, pervasive avoidance with feelings of inadequacy." }
      ]
    },
    {
      id: "school-refusal", title: "A child who won’t go to school or won’t speak there",
      intro: "School refusal and silence at school have several engines. Ask what the child fears and whether they are well at home.",
      ask: ["What happens on school mornings? Physical complaints?", "Is the child comfortable at school if a parent is there?", "Does the child talk at home? In what language?", "Bullying, learning problems, a recent move or loss?", "Is the child staying home, or out somewhere else?"],
      mustNotMiss: ["**Bullying** or abuse.", "**Depression and suicidal thoughts.**", "Unrecognized **learning or language** problems."],
      helpers: ["anxiety"],
      items: [
        { ch: "ch05", dx: "separation-anxiety", when: "Fear of being away from parents; well at home or with the parent present." },
        { ch: "ch05", dx: "social-anxiety", when: "Fear of being judged by peers or teachers." },
        { ch: "ch05", dx: "selective-mutism", when: "Attends but does not speak at school; talks at home." },
        { ch: "ch05", dx: "gad", when: "Worries about performance, grades and many other things." },
        { ch: "ch05", dx: "specific-phobia", when: "A particular feared thing at school (a dog on the route, the toilets, vomiting)." },
        { ch: "ch04", dx: "mdd", when: "Low mood, irritability, loss of interest." },
        { ch: "ch15", name: "Conduct disorder (truancy)", when: "Stays away from home and school without anxiety." },
        { ch: "ch01", name: "Specific learning disorder or language disorder", when: "Avoids tasks that expose difficulties." }
      ]
    },
    {
      id: "after-substance", title: "Mood change after a new medicine or drug",
      items: [
        { ch: "ch05", dx: "substance-induced-anxiety", when: "Anxiety or panic with caffeine, stimulants, cannabis, withdrawal, bronchodilators or steroids." }
      ]
    },
    {
      id: "sleep", title: "Sleeping too much or too little",
      items: [
        { ch: "ch05", dx: "gad", when: "Trouble falling or staying asleep from worry, with tension and fatigue." },
        { ch: "ch05", dx: "panic-disorder", when: "Waking from sleep in panic (nocturnal panic attacks)." }
      ]
    }
  ]);
})();
