/* Chapter 9 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "ssd",
      ask: [
        ["A Symptoms", "“Which symptoms bother you most, and how do they affect your day?”", "Take every symptom seriously and examine; validation comes first."],
        ["B1 Thoughts", "“What do you think is causing them? What worries you most about them?”", "Look for persistent, disproportionate beliefs about seriousness."],
        ["B2 Anxiety", "“How much of the day do you feel worried about your health?”"],
        ["B3 Time", "“How much time goes into the symptoms: appointments, checking, reading, resting?”", "Count B features for severity."],
        ["C Duration", "“How long have you felt unwell in this way?”", "Typically more than 6 months."],
        ["Reassurance", "“When a test comes back normal, how long does the relief last?”"],
        ["Mood", "“Have you been feeling down or lost interest in things?”", "Depression and anxiety each occur in up to half."],
        ["Safety", "“Has it ever felt so bad you’ve thought of ending your life?”", "SSD is linked to suicidal thoughts and attempts."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT** (targeting catastrophic interpretation, checking, reassurance seeking and avoidance) has the best evidence, alongside a **collaborative primary-care plan**: one physician, **regular scheduled visits** not driven by new symptoms, a brief exam each time, and limited, justified testing.",
        points: [
          "Validate that symptoms are real; explain them in terms of bodily processes (sensitization, attention) rather than “it’s all in your head.”",
          "Antidepressants have modest benefit, especially with pain or comorbid depression: [[stahl:drugs/duloxetine|duloxetine]] or another [[stahl:c/ch07/guide/s7-snri|SNRI]], low-dose [[stahl:drugs/amitriptyline|amitriptyline]], or an [[stahl:c/ch07/guide/s7-ssri|SSRI]]. Avoid opioids and benzodiazepines.",
          "Encourage graded return to activity; treat comorbid depression and anxiety.",
          "No new drug for somatic symptom disorder has been approved as of October 2026."
        ],
        stahl: [["Chronic pain", "c/ch09/guide/s9-pain"], ["Fibromyalgia", "c/ch09/guide/s9-fibromyalgia"], ["SNRIs", "c/ch07/guide/s7-snri"]]
      }
    },
    {
      id: "iad",
      ask: [
        ["A Preoccupation", "“Do you worry that you have, or will get, a serious illness? Which one?”", "Ask whether the feared illness has changed over time."],
        ["B Symptoms", "“What physical symptoms, if any, do you notice?”", "None or mild; distressing symptoms point to SSD."],
        ["C Anxiety", "“How easily are you alarmed by a news story or by someone else being ill?”"],
        ["D Checking", "“How often do you check your body, look things up online or ask for reassurance?”", "Care-seeking type."],
        ["D Avoidance", "“Are there doctors, tests or places you avoid because of what you might find out?”", "Care-avoidant type."],
        ["E Duration", "“How long has this been on your mind?”", "At least 6 months."],
        ["F Others", "“Do you have sudden attacks of panic? Worries about many other things? Intrusive thoughts you try to cancel out?”", "Panic, GAD, OCD."],
        ["Insight", "“Is it possible you don’t have the illness?”", "Acknowledging uncertainty argues against a delusion."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT** for health anxiety (including internet-delivered CBT) is first line: reducing checking, reassurance seeking and avoidance and testing catastrophic beliefs. Arrange **regular scheduled visits** with one clinician.",
        points: [
          "SSRIs have trial support for health anxiety: [[stahl:drugs/fluoxetine|fluoxetine]], [[stahl:drugs/paroxetine|paroxetine]]; see [[stahl:c/ch07/guide/s7-ssri|SSRIs]].",
          "Limit repeat testing, but do not dismiss new symptoms: real illness can be missed.",
          "Treat comorbid GAD, panic disorder, OCD and depression (two-thirds have another disorder).",
          "No drug is specifically approved for illness anxiety disorder as of October 2026."
        ],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"], ["GAD", "c/ch08/guide/s8-gad"]]
      }
    },
    {
      id: "fnd",
      ask: [
        ["A Symptom", "“Show me what the weakness, shaking or numbness is like. When did it start, and how?”", "Sudden onset is common, often after an injury or illness."],
        ["Attacks", "“During an attack, are your eyes open or closed? Can you hear people? How long does it last?”", "Ask a witness; review home video if available."],
        ["Dissociation", "“Before or during attacks, do you feel detached, unreal or lose time?”", "Dissociative symptoms are common."],
        ["Stressor", "“Was anything stressful or physically painful happening around that time?”", "Record with or without stressor; it may be absent."],
        ["Other symptoms", "“Do you also have pain, fatigue, poor sleep or memory problems?”"],
        ["Understanding", "“What do you think is causing it? Does the explanation I gave make sense?”", "Agreement with the diagnosis predicts a better outcome."],
        ["Safety", "“Have you had thoughts of ending your life?”", "Suicidality is higher than in comparable neurological disease."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Give a **clear, positive explanation** of the diagnosis (show the patient their Hoover’s sign or entrainment), then **symptom-specific rehabilitation**: FND-informed **physiotherapy** for motor symptoms, **CBT-based psychotherapy** for functional seizures, speech therapy for speech or swallowing symptoms.",
        points: [
          "Evidence is mixed: the CODES trial (CBT for dissociative seizures) and the Physio4FMD trial (specialist physiotherapy) did not beat usual care on their primary outcomes, though secondary outcomes improved; multidisciplinary care is still recommended.",
          "No medication treats FND itself; treat comorbid depression, anxiety, PTSD and pain (e.g., an [[stahl:c/ch07/guide/s7-ssri|SSRI]]).",
          "With functional seizures, avoid escalating antiseizure drugs and emergency intubation; taper antiseizure medicine if epilepsy is excluded.",
          "Reassess if symptoms progress; FND can coexist with neurological disease."
        ],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"], ["PTSD", "c/ch08/guide/s8-ptsd"]]
      }
    },
    {
      id: "pfamc",
      ask: [
        ["A Condition", "“What medical conditions are you being treated for?”"],
        ["B Course", "“Have you noticed your condition getting worse when you’re stressed, angry or upset?”"],
        ["B Treatment", "“How often do you take your medicines as prescribed? What gets in the way?”", "Nonadherence, denial, beliefs about medicines."],
        ["B Risk", "“When symptoms worried you in the past, what did you do?”", "Denial or delay of care is a risk factor."],
        ["Culture", "“Do you also see a traditional or religious healer?”", "Culturally sanctioned healing is not pathologized."],
        ["Severity", "“Has this ever led to an emergency visit or a hospital stay?”", "Mild, moderate, severe, extreme."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Target the specific factor: **stress management** and CBT for stress-triggered symptoms, **motivational interviewing** and adherence support for nonadherence, and collaborative care with the medical team.",
        points: [
          "Treat subthreshold anxiety or depression when they drive the medical illness.",
          "In diabetes with insulin omission, screen carefully for an eating disorder.",
          "Respect cultural healing practices while negotiating essential medical care."
        ],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "factitious",
      ask: [
        ["History", "“Which hospitals and doctors have you seen before?”", "Gather records from every setting with consent."],
        ["Inconsistencies", "Compare reported history, examination and investigation results.", "Look for objective evidence: lab tests, drug levels, sample tampering."],
        ["Reward", "Ask about lawsuits, disability claims, housing, drugs or legal problems.", "An obvious external reward suggests malingering."],
        ["Another person", "In a child with unexplained recurrent illness, “Do symptoms happen when you’re not there?”", "Separate observation; involve child protection."],
        ["Safety", "“Have you ever done something to make yourself ill or hurt yourself?”", "Ask non-judgmentally; self-harm and suicide risk."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Safety first**: stop harmful investigations and procedures, and in **imposed on another**, protect the victim through **child or adult protection services**. Then a **nonpunitive, supportive confrontation** by the team, offering ongoing psychiatric care.",
        points: [
          "Coordinate one primary clinician; share information across settings within legal limits.",
          "Treat comorbid depression, personality disorder and substance use; no medication treats factitious disorder itself.",
          "Expect denial and self-discharge; document objective findings carefully."
        ],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "other-specified-somatic",
      ask: [
        ["Duration", "“How long has this been going on?”", "Under 6 months → brief SSD or brief IAD."],
        ["Behaviors", "“Do you check your body or avoid doctors because of the worry?”", "If not, IAD without health behaviors."],
        ["Pregnancy", "“What makes you feel you are pregnant?”", "Pseudocyesis needs objective signs; check hCG and ultrasound."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Manage as the closest full disorder (CBT, scheduled visits), and reassess when the duration reaches 6 months.",
        points: ["Pseudocyesis: sensitive disclosure of results, exploration of grief or infertility, gynecological and endocrine follow-up."],
        stahl: []
      }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "body-symptoms", title: "Physical symptoms that won’t go away",
      intro: "Assess the symptoms medically and take them seriously. Then look for positive psychological features: excessive thoughts, anxiety or time devoted to the symptoms, rather than diagnosing by exclusion.",
      ask: ["Which symptoms bother you most, and for how long?", "What do you think is causing them?", "How much of your day goes into them?", "How long does relief from a normal test last?", "Are you feeling down, or having panic attacks?"],
      mustNotMiss: ["**Occult medical disease**: endocrine, autoimmune, neurological, malignancy.", "**Depression** and **suicide risk**.", "**Iatrogenic harm** from repeated testing and opioids."],
      helpers: ["somatic"],
      items: [
        { ch: "ch09", dx: "ssd", when: "Distressing symptoms with excessive thoughts, feelings or behaviors, typically >6 months." },
        { ch: "ch09", dx: "pfamc", when: "Psychological factors worsening a known medical condition." },
        { ch: "ch04", dx: "mdd", when: "Pain and fatigue with depressed mood or anhedonia." },
        { ch: "ch05", dx: "panic-disorder", when: "Symptoms in discrete attacks of fear." },
        { ch: "ch05", dx: "gad", when: "Muscle tension, fatigue and many worries." },
        { ch: "ch02", dx: "delusional-disorder", when: "Somatic conviction of delusional intensity." },
        { ch: "ch09", dx: "factitious", when: "Objective evidence of falsification." },
        { ch: "ch09", dx: "other-specified-somatic", when: "The same picture for under 6 months." }
      ]
    },
    {
      id: "health-worry", title: "Worried about having a serious illness",
      intro: "Separate fear with no or mild symptoms (illness anxiety) from distressing symptoms (somatic symptom disorder), then check for panic, GAD, OCD, depression and delusion.",
      ask: ["Which illness do you fear, and has it changed?", "Do you have physical symptoms, and how severe?", "Do you check, search or ask for reassurance, or avoid doctors?", "Is it possible you don’t have it?", "Do you worry about many other things?"],
      mustNotMiss: ["A **real illness** being dismissed.", "**Somatic delusions** (psychosis, psychotic depression).", "**Depression** with health rumination."],
      helpers: ["somatic"],
      items: [
        { ch: "ch09", dx: "iad", when: "No or mild symptoms, high health anxiety, checking or avoidance, ≥6 months." },
        { ch: "ch09", dx: "ssd", when: "Distressing somatic symptoms with excessive concern." },
        { ch: "ch06", dx: "ocd", when: "Intrusive fears of catching a disease, with compulsions." },
        { ch: "ch05", dx: "panic-disorder", when: "Fear of dying during discrete attacks." },
        { ch: "ch05", dx: "gad", when: "Health is one of many worries." },
        { ch: "ch04", dx: "mdd", when: "Health rumination only during depressive episodes." },
        { ch: "ch07", dx: "adjustment", when: "Time-limited worry after a real diagnosis." },
        { ch: "ch02", dx: "delusional-disorder", when: "Fixed, implausible conviction." }
      ]
    },
    {
      id: "neuro-symptoms", title: "Weakness, seizures or numbness with normal tests",
      intro: "Functional neurological symptom disorder is diagnosed on positive examination findings, not on normal tests. Look for the signs, and keep neurological disease in view.",
      ask: ["How did it start: suddenly, after an injury or illness?", "During attacks, are the eyes closed, and can you hear people?", "Any feeling of detachment or lost time?", "Do you have epilepsy or another neurological condition?", "What do you think is going on?"],
      mustNotMiss: ["**Neurological disease** (MS, stroke, epilepsy, movement disorders), which can coexist.", "**Suicide risk**.", "Evidence of **feigning** (rare)."],
      helpers: ["somatic", "deception"],
      items: [
        { ch: "ch09", dx: "fnd", when: "Positive signs incompatible with disease (Hoover’s, entrainment, functional seizure features)." },
        { ch: "ch09", dx: "ssd", when: "The focus is distress and excessive concern; can be added to FND." },
        { ch: "ch08", dx: "did", when: "Seizure-like episodes with identity states and amnesia." },
        { ch: "ch08", dx: "dissociative-amnesia", when: "Memory gaps, sometimes with fugue." },
        { ch: "ch05", dx: "panic-disorder", when: "Tingling and shaking with retained awareness and fear." },
        { ch: "ch09", dx: "factitious", when: "Definite evidence of deception." }
      ]
    },
    {
      id: "feigned", title: "Suspected feigned or induced illness",
      intro: "Suspicion is not evidence. Look for objective proof of falsification, then ask whether an external reward explains it. If a child or dependent adult may be harmed, protect them first.",
      ask: ["Is there objective evidence (labs, observation, records)?", "Is there an external reward: money, drugs, avoiding work or court?", "Who is presented as ill: the person or someone in their care?", "Do symptoms appear only when one caregiver is present?"],
      mustNotMiss: ["**Child abuse** in factitious disorder imposed on another.", "A **real illness** alongside falsification.", "**Suicide and self-harm** risk."],
      helpers: ["deception"],
      items: [
        { ch: "ch09", dx: "factitious", when: "Deception even without obvious external rewards; self (F68.10) or another (F68.A)." },
        { ch: "ch22", name: "Malingering (Z76.5)", when: "Deception for external rewards; not a mental disorder." },
        { ch: "ch09", dx: "fnd", when: "Genuine symptoms with positive incompatible signs." },
        { ch: "ch09", dx: "ssd", when: "Heavy care seeking without deception." },
        { ch: "ch08", dx: "did", when: "Dramatic presentations raise the question of feigned DID." }
      ]
    },
    {
      id: "fatigue", title: "Fatigue or low energy",
      items: [
        { ch: "ch09", dx: "ssd", when: "Persistent fatigue with excessive concern and time devoted to it." }
      ]
    },
    {
      id: "panic-episodes", title: "Sudden attacks of fear, palpitations or chest pain",
      items: [
        { ch: "ch09", dx: "fnd", when: "Shaking attacks with loss of awareness or amnesia suggest functional seizures." }
      ]
    }
  ]);
})();
