/* Chapter 7 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifiers, code).
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var DX = ["Posttraumatic stress disorder", "Acute stress disorder", "Adjustment disorder", "Prolonged grief disorder", "Other specified trauma- and stressor-related disorder", "Reactive attachment disorder", "Disinhibited social engagement disorder"];
  var PTSD_SPEC = ["With dissociative symptoms", "With delayed expression", "None"];
  var ADJ = ["With depressed mood", "With anxiety", "With mixed anxiety and depressed mood", "With disturbance of conduct", "With mixed disturbance of emotions and conduct", "Unspecified"];
  var ADJ_CODES = ["F43.20", "F43.21", "F43.22", "F43.23", "F43.24", "F43.25"];

  SP.add("ch07", "dxline", [
    {
      id: "w7-01", tag: "PTSD",
      "case": "A 29-year-old woman has full PTSD symptoms 5 months after an assault, with frequent episodes of feeling detached from her body and that the world is unreal. No substance use or seizures.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Specifiers", options: PTSD_SPEC, answer: [0], multi: true },
        { label: "Code", options: ["F43.10", "F43.0", "F43.8", "F44.81"], answer: 0 }
      ],
      line: "**F43.10** Posttraumatic stress disorder, with dissociative symptoms",
      why: "Depersonalization and derealization add the **dissociative** specifier. Full criteria came within 6 months, so not delayed."
    },
    {
      id: "w7-02", tag: "PTSD",
      "case": "A firefighter first meets full PTSD criteria 11 months after a fatal fire, though he had some nightmares from the start. He has no dissociative symptoms.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Specifiers", options: PTSD_SPEC, answer: [1], multi: true },
        { label: "Code", options: ["F43.10", "F43.0", "F43.89", "F43.21"], answer: 0 }
      ],
      line: "**F43.10** Posttraumatic stress disorder, with delayed expression",
      why: "Full criteria first met **at least 6 months** after the event = delayed expression."
    },
    {
      id: "w7-03", tag: "PTSD with both specifiers",
      "case": "A 40-year-old woman first meets full PTSD criteria 8 months after a hostage situation, and has persistent derealization. No substance use.",
      parts: [
        { label: "Specifiers", options: PTSD_SPEC, answer: [0, 1], multi: true },
        { label: "Code", options: ["F43.10", "F43.12", "F44.81", "F43.89"], answer: 0 }
      ],
      line: "**F43.10** Posttraumatic stress disorder, with dissociative symptoms, with delayed expression",
      why: "Both specifiers can apply together."
    },
    {
      id: "w7-04", tag: "Acute stress disorder",
      "case": "Two weeks after a bus crash, a 35-year-old woman has 11 of 14 acute stress symptoms and cannot work.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Code", options: ["F43.0", "F43.10", "F43.22", "F43.8"], answer: 0 }
      ],
      line: "**F43.0** Acute stress disorder",
      why: "Nine or more of 14, 3 days to 1 month. Acute stress disorder has no specifiers."
    },
    {
      id: "w7-05", tag: "Adjustment",
      "case": "Eight weeks after failing his bar exam, a 27-year-old man is tearful, hopeless and has stopped studying, without meeting criteria for MDD or another disorder.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Subtype", options: ADJ, answer: 0 },
        { label: "Duration", options: ["Acute", "Persistent (chronic)"], answer: 0 },
        { label: "Code", options: ADJ_CODES, answer: 1 }
      ],
      line: "**F43.21** Adjustment disorder with depressed mood, acute",
      why: "Low mood predominates (F43.21); less than 6 months = acute."
    },
    {
      id: "w7-06", tag: "Adjustment",
      "case": "A 70-year-old man has been worried, jittery and low in mood for 9 months since starting dialysis, which continues. He does not meet criteria for another disorder.",
      parts: [
        { label: "Subtype", options: ADJ, answer: 2 },
        { label: "Duration", options: ["Acute", "Persistent (chronic)"], answer: 1 },
        { label: "Code", options: ADJ_CODES, answer: 3 }
      ],
      line: "**F43.23** Adjustment disorder with mixed anxiety and depressed mood, persistent (chronic)",
      why: "Both anxiety and depression predominate (F43.23). An ongoing stressor allows a duration of 6 months or more: persistent (chronic)."
    },
    {
      id: "w7-07", tag: "Adjustment",
      "case": "A 14-year-old girl started shoplifting, skipping school and crying daily within a month of her parents’ separation. She does not meet criteria for conduct disorder or a depressive disorder.",
      parts: [
        { label: "Subtype", options: ADJ, answer: 4 },
        { label: "Code", options: ADJ_CODES, answer: 5 }
      ],
      line: "**F43.25** Adjustment disorder with mixed disturbance of emotions and conduct",
      why: "Both emotional symptoms and conduct problems predominate."
    },
    {
      id: "w7-08", tag: "Prolonged grief",
      "case": "Sixteen months after his wife’s death, a 66-year-old man yearns for her daily, feels part of him died, avoids reminders, feels life is meaningless and is intensely lonely, beyond his community’s norms. He does not meet MDD or PTSD criteria.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Code to use today", options: ["F43.81", "F43.8", "F43.89", "F43.21"], answer: 0 }
      ],
      line: "**F43.81** Prolonged grief disorder",
      why: "DSM-5-TR printed F43.8, but since **October 2022** prolonged grief disorder is coded **F43.81**."
    },
    {
      id: "w7-09", tag: "Other specified",
      "case": "Two years after an assault, a 33-year-old woman has intrusive memories and avoidance, but not enough cognition, mood or arousal symptoms for PTSD.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "Reason recorded", options: ["Persistent response to trauma with PTSD-like symptoms", "Adjustment-like disorder with delayed onset", "Adjustment-like disorder with prolonged duration", "Ataque de nervios"], answer: 0 },
        { label: "Code to use today", options: ["F43.89", "F43.8", "F43.9", "F43.10"], answer: 0 }
      ],
      line: "**F43.89** Other specified trauma- and stressor-related disorder, persistent response to trauma with PTSD-like symptoms",
      why: "Subthreshold PTSD beyond 6 months. Printed F43.8; F43.89 since October 2022."
    },
    {
      id: "w7-10", tag: "Other specified",
      "case": "A 41-year-old man develops low mood and anxiety 5 months after his business failed; he does not meet another disorder.",
      parts: [
        { label: "Diagnosis", options: ["Adjustment disorder", "Other specified trauma- and stressor-related disorder", "Major depressive disorder", "Unspecified trauma- and stressor-related disorder"], answer: 1 },
        { label: "Reason recorded", options: ["Adjustment-like disorder with delayed onset", "Adjustment-like disorder with prolonged duration", "Persistent response to trauma with PTSD-like symptoms"], answer: 0 }
      ],
      line: "**F43.89** Other specified trauma- and stressor-related disorder, adjustment-like disorder with delayed onset",
      why: "Adjustment disorder needs onset within 3 months; later onset is an other specified example."
    },
    {
      id: "w7-11", tag: "RAD",
      "case": "A 3-year-old girl reared in an orphanage until 30 months rarely seeks or accepts comfort, has limited positive affect and unexplained fearfulness, for 14 months. Developmental age 26 months; not autism.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 5 },
        { label: "Specifiers", options: ["Persistent", "Severe", "None"], answer: [0], multi: true },
        { label: "Code", options: ["F94.1", "F94.2", "F84.0", "F43.10"], answer: 0 }
      ],
      line: "**F94.1** Reactive attachment disorder, persistent",
      why: "Present for more than **12 months** = persistent. Add “severe” only if all symptoms are present at relatively high levels."
    },
    {
      id: "w7-12", tag: "DSED",
      "case": "A 6-year-old boy with five foster placements approaches every stranger, sits on their laps and would go off with them, with no checking back, for 2 years. All four signs are marked. No attention or activity problems.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 6 },
        { label: "Specifiers", options: ["Persistent", "Severe", "None"], answer: [0, 1], multi: true },
        { label: "Code", options: ["F94.2", "F94.1", "F90.2", "F43.24"], answer: 0 }
      ],
      line: "**F94.2** Disinhibited social engagement disorder, persistent, severe",
      why: "More than 12 months = persistent; all symptoms at high levels = severe."
    }
  ]);

  SP.add("ch07", "counting", [
    {
      id: "n7-01", tag: "Criterion A",
      "case": "Mark each event that meets PTSD Criterion A.",
      ask: "Actual or threatened death, serious injury or sexual violence: directly, witnessed in person, learned about (violent or accidental if a death), or repeated work exposure to details (media only if work related).",
      items: [
        ["Being held at gunpoint during a robbery", true, "Directly experienced threatened death."],
        ["Learning that a brother died of leukemia", false, "A **natural** death learned about does not count."],
        ["Learning that a close friend was killed by a drunk driver", true, "A violent or accidental death of a close person."],
        ["Watching a war documentary at home", false, "Media exposure not related to work."],
        ["A police officer repeatedly interviewing child abuse victims", true, "Repeated work exposure to aversive details (A4)."],
        ["Being fired and evicted", false, "A serious stressor, but not Criterion A."]
      ],
      met: true,
      why: "Three qualify. The others can cause adjustment disorders but not PTSD."
    },
    {
      id: "n7-02", tag: "PTSD clusters",
      "case": "Three months after an assault, a 26-year-old man reports:",
      ask: "PTSD needs ≥1 intrusion (B), ≥1 avoidance (C), ≥2 cognition/mood (D), ≥2 arousal (E). Mark the findings that count toward a cluster.",
      items: [
        ["Unwanted memories of the attack pop up daily", true, "B1 intrusion."],
        ["Avoids the bar where it happened", true, "C2 avoidance."],
        ["Believes no one can be trusted", true, "D2 exaggerated negative belief."],
        ["Feels he deserved it", true, "D3 distorted blame."],
        ["Startles at sudden noises", true, "E4."],
        ["Worries about his finances", false, "Not a trauma-related symptom."],
        ["Sleeps poorly", true, "E6."]
      ],
      met: true,
      why: "B (1), C (1), D (2), E (2): all four clusters are met. With more than a month and impairment, PTSD is diagnosed."
    },
    {
      id: "n7-03", tag: "PTSD clusters",
      "case": "Two months after a car crash, a woman has:",
      ask: "Check each cluster. Mark the findings that count.",
      items: [
        ["Nightmares of the crash", true, "B2 intrusion."],
        ["Panics and sweats when she hears brakes screech", true, "B4/B5 cue reactivity."],
        ["Avoids driving on the highway", true, "C2 avoidance."],
        ["Feels detached from her family", true, "D6."],
        ["Is hypervigilant in cars", true, "E3."],
        ["Is irritable with her children", true, "E1."]
      ],
      met: false,
      why: "Only **one** Criterion D symptom (detachment) is present; two are needed. Not PTSD yet: consider adjustment disorder, and ask about other D symptoms."
    },
    {
      id: "n7-04", tag: "Arousal vs cue reactivity",
      "case": "Which findings count as exaggerated startle (E4) rather than cue reactivity (B5)?",
      ask: "Startle is reflexive and can follow any sudden stimulus; B5 needs a cue linked to the trauma.",
      items: [
        ["Jumps when the phone rings", true, "Reflexive startle to an unrelated stimulus."],
        ["Heart pounds when he smells diesel, as on the day of the bombing", false, "A trauma-linked cue: B5."],
        ["Flinches at a door slamming", true, "Reflexive startle."]
      ],
      met: true,
      why: "Two are startle; the diesel reaction is physiological reactivity to a trauma cue."
    },
    {
      id: "n7-05", tag: "Acute stress disorder",
      "case": "Nine days after witnessing a fatal stabbing, a 20-year-old reports these symptoms. Count toward the 14:",
      ask: "Acute stress disorder needs 9 or more of 14 from any category.",
      items: [
        ["Intrusive memories", true, "Intrusion 1."],
        ["Nightmares", true, "Intrusion 2."],
        ["Flashbacks", true, "Intrusion 3."],
        ["Feels in a daze", true, "Dissociation 6."],
        ["Cannot remember how she got home", true, "Dissociation 7 (amnesia)."],
        ["Avoids thinking about it", true, "Avoidance 8."],
        ["Avoids the street", true, "Avoidance 9."],
        ["Cannot sleep", true, "Arousal 10."],
        ["Hypervigilant", true, "Arousal 12."],
        ["Worried about upcoming exams", false, "Not a trauma symptom."]
      ],
      need: 9, met: true,
      why: "Nine symptoms, 3 days to 1 month after a Criterion A event: acute stress disorder."
    },
    {
      id: "n7-06", tag: "Adjustment timing",
      "case": "Mark the presentations that fit adjustment disorder timing.",
      ask: "Onset within 3 months of the stressor; resolution within 6 months after the stressor or its consequences end (unless the stressor continues).",
      items: [
        ["Anxiety beginning 2 weeks after a cancer diagnosis, ongoing treatment", true, "Within 3 months; stressor ongoing."],
        ["Low mood beginning 5 months after a divorce", false, "Onset after 3 months: other specified."],
        ["Distress continuing 10 months after a resolved lawsuit, with no lasting consequences", false, "Beyond 6 months after the stressor ended: other specified or another disorder."],
        ["Conduct problems 1 month after a family move", true, "Within 3 months."]
      ],
      met: true,
      why: "Two fit adjustment disorder; the others are adjustment-like presentations recorded as other specified."
    },
    {
      id: "n7-07", tag: "Prolonged grief",
      "case": "Fourteen months after her mother’s death, a 40-year-old woman reports yearning daily and:",
      ask: "Prolonged grief needs ≥3 of 8 Criterion C symptoms nearly every day for the last month. Mark those that count.",
      items: [
        ["Feels part of herself died", true, "Identity disruption."],
        ["Still can’t believe her mother is gone", true, "Disbelief."],
        ["Cries on the anniversary and her mother’s birthday", false, "Anniversary surges alone do not count."],
        ["Feels intensely lonely", true, "Loneliness."],
        ["Has lost 4 kg and feels worthless", false, "Depressive symptoms: assess for MDD."]
      ],
      need: 3, met: true,
      why: "Three Criterion C symptoms with yearning, beyond 12 months: Criterion C is met. Assess for MDD as well."
    },
    {
      id: "n7-08", tag: "PGD vs PTSD",
      "case": "After his son was killed in a crash, which findings point to prolonged grief rather than PTSD?",
      ask: "Prolonged grief: yearning, intrusions about the relationship, avoidance of reminders that the person is gone. PTSD: event-focused, here-and-now intrusions and avoidance of trauma reminders.",
      items: [
        ["Longs to hear his son’s voice again", true, "Yearning: prolonged grief."],
        ["Avoids his son’s room because it makes his absence unbearable", true, "Avoiding reminders the person is gone."],
        ["Has vivid flashbacks of seeing the wreck", false, "Event-focused intrusion: PTSD."],
        ["Keeps thinking of happy times fishing together", true, "Relationship-focused preoccupation."]
      ],
      met: true,
      why: "Three findings point to prolonged grief; the flashback points to PTSD. Both disorders can coexist."
    },
    {
      id: "n7-09", tag: "RAD",
      "case": "A 3-year-old girl after institutional care. Mark findings that support RAD Criteria A and B.",
      ask: "A: rarely seeks and rarely responds to comfort (both). B: ≥2 of minimal responsiveness, limited positive affect, unexplained irritability, sadness or fear.",
      items: [
        ["Does not go to her mother when hurt", true, "A1."],
        ["Stays stiff and unsettled when held", true, "A2."],
        ["Rarely smiles or laughs", true, "B2 limited positive affect."],
        ["Lines up toys and becomes distressed if moved", false, "Suggests autism, which excludes RAD."],
        ["Has sudden sad spells during calm play", true, "B3."]
      ],
      met: true,
      why: "A and B are supported, but the lining-up behavior needs an autism assessment before diagnosing RAD (Criterion E)."
    },
    {
      id: "n7-10", tag: "DSED",
      "case": "A 5-year-old with a history of neglect. Mark the findings that count toward DSED Criterion A.",
      ask: "≥2 of: reduced reticence with strangers; overfamiliar behavior; not checking back; going off with strangers.",
      items: [
        ["Runs up to unfamiliar adults and chats freely", true, "Reduced reticence."],
        ["Climbs into a stranger’s lap at the clinic", true, "Overly familiar physical behavior."],
        ["Is restless in class and blurts out answers", false, "Impulsivity, as in ADHD (Criterion B)."],
        ["Never looks back for her mother in the mall", true, "Diminished checking back."]
      ],
      need: 2, met: true,
      why: "Three of four signs. Assess ADHD separately; DSED requires more than impulsivity."
    }
  ]);
})();
