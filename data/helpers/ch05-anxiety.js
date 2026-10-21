/*
 * Diagnostic helpers for Chapter 5 (Anxiety Disorders), DSM-5-TR pp. 215–261.
 * "anxiety": choose among the anxiety disorders by cause, panic, what is feared and why, duration and threshold.
 * "panic": decide whether an episode is a panic attack, which disorder it belongs to, and whether it is panic disorder.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "anxiety",
    chapter: "ch05",
    title: "Which anxiety disorder?",
    summary: "Work through cause, panic attacks, what is feared and why, how many situations, duration and threshold to reach the anxiety disorder that fits, with its code.",
    caution: "A teaching aid built from DSM-5-TR pp. 215–261. Anxiety disorders are highly comorbid: after reaching one result, go back and check for others. Always ask about suicidal thoughts and substance use.",
    start: "cause",
    nodes: {
      cause: {
        q: "Could a substance, medication or medical condition be causing the anxiety?",
        help: "Think caffeine, stimulants, cannabis, alcohol or benzodiazepine withdrawal, bronchodilators, steroids, thyroid hormone; hyperthyroidism, pheochromocytoma, hypoglycemia, arrhythmia, COPD, seizures, vestibular disease. Be most suspicious with onset after 45 or atypical symptoms. Anxiety only during delirium is part of the delirium.",
        options: [
          { label: "No", to: "panic", note: "No substance, medication or medical cause is evident." },
          { label: "A substance or medication: anxiety began during or soon after use, withdrawal or a new medication", to: "subind", note: "A substance or medication is a candidate cause." },
          { label: "A medical condition with a plausible mechanism and a close time link", to: "r:medical", note: "A medical condition is the likely physiological cause." },
          { label: "Both are possible, or the evidence is insufficient", to: "r:unclearcause", note: "Cannot tell whether a substance, a medical condition or neither is responsible." }
        ]
      },
      subind: {
        q: "Is there evidence of an independent anxiety disorder?",
        help: "Anxiety that preceded the substance use, persists for a substantial time (about 1 month) after withdrawal or intoxication ends, or has recurred without substances is independent.",
        options: [
          { label: "No: it began with the substance and is settling with abstinence", to: "r:substance", note: "Onset with the substance, no independent history." },
          { label: "Yes: it preceded use, persists ≈1 month after stopping, or recurs without substances", to: "panic", note: "Evidence of an independent anxiety disorder." }
        ]
      },
      panic: {
        q: "Are there panic attacks: abrupt surges of fear peaking within minutes, with 4 or more of the 13 symptoms?",
        help: "Palpitations, sweating, trembling, breathlessness, choking, chest pain, nausea, dizziness, chills or heat, tingling, derealization, fear of losing control, fear of dying. Culture-specific symptoms such as tinnitus or neck soreness do not count.",
        options: [
          { label: "Yes, and at least some come out of the blue (unexpected)", to: "critb", note: "Unexpected full-symptom panic attacks." },
          { label: "Yes, but only with particular triggers (expected)", to: "focus", note: "Expected panic attacks only: note “with panic attacks” on the disorder that explains them." },
          { label: "Only attacks with fewer than four symptoms, some unexpected", to: "r:limited", note: "Limited-symptom attacks only." },
          { label: "No panic attacks", to: "focus", note: "No panic attacks." }
        ]
      },
      critb: {
        q: "Have the unexpected attacks recurred, and has at least one been followed by a month or more of worry about further attacks or a maladaptive change in behavior?",
        help: "Worry about having a heart attack, losing control or going crazy; avoiding exercise, unfamiliar places or being alone; carrying medication or a pulse monitor.",
        options: [
          { label: "Yes", to: "agorapd", note: "Recurrent unexpected attacks with Criterion B." },
          { label: "No: only one unexpected attack, or no lasting worry or behavior change", to: "focus", note: "Unexpected attacks without the criteria for panic disorder." }
        ]
      },
      agorapd: {
        q: "Does the person also fear or avoid two or more of: public transport, open spaces, enclosed places, lines or crowds, being outside the home alone, because escape or help might be unavailable?",
        help: "Agoraphobia is diagnosed irrespective of panic disorder; if both are met, both are coded.",
        options: [
          { label: "Yes, typically for 6 months or more", to: "r:pdagora", note: "Agoraphobic fear in two or more situations." },
          { label: "No, or only one situation", to: "r:panicdisorder", note: "No agoraphobia." }
        ]
      },
      focus: {
        q: "What is the fear, anxiety or worry mainly about?",
        help: "Ask what the person fears or avoids, and what they think would happen.",
        options: [
          { label: "Being separated from attachment figures, or harm coming to them", to: "sepdur", note: "Fear centered on separation." },
          { label: "Speaking: a child who is silent at school but talks at home", to: "smlang", note: "Failure to speak in specific social situations." },
          { label: "A specific object or situation (an animal, heights, storms, blood, needles, flying)", to: "phobiakind", note: "Fear of a circumscribed stimulus." },
          { label: "Being watched, judged or embarrassed by others", to: "socialscope", note: "Fear of scrutiny and negative evaluation." },
          { label: "Being trapped, or without help, in places if panic-like or embarrassing symptoms strike", to: "agoracount", note: "Agoraphobic cognition." },
          { label: "Many different everyday matters", to: "gadctrl", note: "Worry about a number of events or activities." },
          { label: "Something else: one’s own health, obsessions, trauma reminders, appearance or a recent stressor", to: "elsewhere", note: "Fear focused on content that belongs to another chapter." }
        ]
      },
      sepdur: {
        q: "Are three or more separation symptoms present, and for how long?",
        help: "Distress at separation; worry about harm to attachment figures; worry about an event causing separation; refusal to go out; fear of being alone; refusal to sleep away; nightmares; physical complaints.",
        options: [
          { label: "3 or more, for at least 4 weeks in someone under 18, or typically 6 months in an adult", to: "r:sad", note: "Separation anxiety criteria are met." },
          { label: "Fewer symptoms, or shorter duration", to: "r:subthreshold", note: "Separation fears below threshold." }
        ]
      },
      smlang: {
        q: "Does the child know the language required, and has the silence lasted more than a month beyond the first month of school?",
        help: "Children learning a new language often go through a normal silent period. Communication disorders affect speech in all settings.",
        options: [
          { label: "Yes to both, and speech is fluent elsewhere", to: "r:sm", note: "Selective mutism criteria are met." },
          { label: "No: the child is still learning the language", to: "r:silentperiod", note: "Lack of knowledge of the language." },
          { label: "No: it is only the first weeks of school", to: "r:subthreshold", note: "Not yet beyond the first month of school." }
        ]
      },
      phobiakind: {
        q: "Why is the object or situation feared, and how many agoraphobic-type situations are involved?",
        help: "Specific phobia: fear of direct harm, disgust or fainting from the stimulus itself. Agoraphobia: fear of being unable to escape or get help if symptoms strike, across two or more situations.",
        options: [
          { label: "Fear of the stimulus itself (a bite, a crash, a fall, blood), or only one agoraphobic-type situation", to: "phobiadur", note: "Fear of a circumscribed stimulus." },
          { label: "Fear of being trapped without help, across two or more agoraphobic situations", to: "agoradur", note: "Agoraphobic pattern." },
          { label: "The fear comes from obsessions (contamination, harming others) or trauma memories", to: "elsewhere", note: "Fear driven by obsessions or trauma." }
        ]
      },
      phobiadur: {
        q: "Does the stimulus almost always provoke immediate, out-of-proportion fear, with avoidance, typically for 6 months or more, and impairment?",
        help: "Fear on only one flight in five does not qualify. Transient childhood fears are developmentally normal.",
        options: [
          { label: "Yes", to: "r:phobia", note: "Specific phobia criteria are met." },
          { label: "No", to: "r:normalfear", note: "Fear below the threshold for specific phobia." }
        ]
      },
      socialscope: {
        q: "What explains the fear of being judged?",
        help: "In children, the fear must occur with peers, not only with adults. Check appearance concerns, social communication skills and mood.",
        options: [
          { label: "Fear of showing anxiety or acting in a humiliating way, typically for 6 months, almost always provoked", to: "socialperf", note: "Social anxiety pattern." },
          { label: "Only beliefs about a flaw in appearance", to: "r:bdd", note: "Social fear driven solely by appearance concerns." },
          { label: "Feeling worthless because of depression", to: "r:depression", note: "Fear of evaluation due to depressive self-view." },
          { label: "Lifelong social communication deficits", to: "r:autism", note: "Social difficulty from autism." },
          { label: "Ordinary shyness without real impairment", to: "r:shyness", note: "Normative shyness." }
        ]
      },
      socialperf: {
        q: "Is the fear restricted to speaking or performing in public?",
        help: "Performance only: the person does not fear or avoid nonperformance social situations such as conversations, parties or eating in front of others.",
        options: [
          { label: "Yes, only performance", to: "r:socialperf", note: "Fear limited to performance." },
          { label: "No, it extends to other social situations", to: "r:social", note: "Fear across social situations." }
        ]
      },
      agoracount: {
        q: "How many of the five agoraphobic situations are feared or avoided?",
        help: "Public transportation; open spaces; enclosed places; standing in line or in a crowd; being outside the home alone.",
        options: [
          { label: "Two or more", to: "agoradur", note: "Two or more agoraphobic situations." },
          { label: "Only one", to: "phobiadur", note: "A single agoraphobic situation: consider situational phobia." }
        ]
      },
      agoradur: {
        q: "Are the situations almost always frightening, avoided or endured only with a companion, out of proportion, and typically present for 6 months or more?",
        help: "Rule out realistic fears (a high-crime area, a medical condition) and cultural norms. If a medical condition is present, the fear must be clearly excessive.",
        options: [
          { label: "Yes", to: "r:agora", note: "Agoraphobia criteria are met." },
          { label: "No", to: "r:subthreshold", note: "Agoraphobic fears below threshold." }
        ]
      },
      gadctrl: {
        q: "Is the worry excessive and hard to control, more days than not, for at least 6 months?",
        help: "GAD worry spans several areas (work, health, family, finances, minor matters) and shifts between them.",
        options: [
          { label: "Yes", to: "gadsx", note: "Worry meets Criteria A and B." },
          { label: "Excessive worry, but less often than more days than not", to: "r:osgad", note: "Generalized anxiety below the frequency threshold." },
          { label: "Shorter, and it began within 3 months of a stressor", to: "r:adjust", note: "Stressor-related anxiety." }
        ]
      },
      gadsx: {
        q: "How many of these are present: restlessness, easy fatigue, poor concentration, irritability, muscle tension, sleep disturbance?",
        help: "Adults need three or more; children need one.",
        options: [
          { label: "Three or more (adult), or at least one (child)", to: "r:gad", note: "Criterion C is met." },
          { label: "Fewer", to: "r:subthreshold", note: "Too few associated symptoms." }
        ]
      },
      elsewhere: {
        q: "Which best describes the focus?",
        help: "These worries are excluded from the anxiety disorders and belong to other chapters.",
        options: [
          { label: "Having or getting a serious illness", to: "r:illness", note: "Health-focused fear." },
          { label: "Intrusive, unwanted thoughts or images, often with rituals", to: "r:ocd", note: "Obsessions." },
          { label: "Reminders of a traumatic event", to: "r:ptsd", note: "Trauma-linked fear." },
          { label: "A perceived flaw in appearance", to: "r:bdd", note: "Appearance concern." },
          { label: "A recent stressor, within 3 months, without meeting another disorder", to: "r:adjust", note: "Stressor-related anxiety." }
        ]
      }
    },
    results: {
      substance: { dx: "Substance/medication-induced anxiety disorder", line: "Coded by substance and use disorder, ending .x80: 4th character 1 (mild), 2 (moderate/severe), 9 (none), e.g., F10.280, F15.980 (caffeine), F19.980 (salbutamol). Opioids end in .x88.", points: ["Specify onset during intoxication, during withdrawal or after medication use.", "Diagnose instead of intoxication or withdrawal only if the anxiety predominates and needs attention in its own right.", "Persistence about 1 month after stopping would point to an independent anxiety disorder."], link: { ch: "ch05", sec: "s5-substance", label: "Substance/medication-induced anxiety disorder" }, dxId: "substance-induced-anxiety" },
      medical: { dx: "Anxiety disorder due to another medical condition (F06.4)", line: "Code the medical condition first, e.g., D35.00 pheochromocytoma; F06.4 anxiety disorder due to pheochromocytoma.", points: ["Look for a time link, atypical features (late onset) and a known mechanism.", "Not diagnosed if the anxiety occurs only during delirium.", "If the person is mainly distressed about what the illness means, consider adjustment disorder instead."], link: { ch: "ch05", sec: "s5-medical", label: "Anxiety due to a medical condition" }, dxId: "anxiety-due-to-amc" },
      unclearcause: { dx: "Other specified or unspecified anxiety disorder", line: "When it is unclear whether a substance, a medical condition or neither is responsible: F41.8 (reason recorded) or F41.9.", points: ["If both a medical condition and a substance contribute, both diagnoses can be given.", "A medication change can show whether the drug is causal."], link: { ch: "ch05", sec: "s5-substance", label: "Differential diagnosis" }, dxId: "unspecified-anxiety" },
      limited: { dx: "Other specified anxiety disorder (F41.8): limited-symptom attacks", line: "Unexpected attacks with fewer than four symptoms never qualify for panic disorder.", points: ["Record the reason: “other specified anxiety disorder, limited-symptom attacks.”", "Use unspecified anxiety disorder (F41.9) if you choose not to give the reason.", "Fearful spells may precede later panic disorder: follow up."], link: { ch: "ch05", sec: "s5-other", label: "Other specified anxiety disorder" }, dxId: "other-specified-anxiety" },
      panicdisorder: { dx: "Panic disorder (F41.0)", line: "Recurrent unexpected panic attacks plus at least 1 month of worry or maladaptive behavior change.", points: ["Do not add the “with panic attacks” specifier.", "Screen for depression (10%–65% lifetime), substance use and suicidal thoughts.", "Re-check other anxiety disorders: 80% have a lifetime comorbid diagnosis."], link: { ch: "ch05", sec: "s5-panic-criteria", label: "Panic disorder criteria" }, dxId: "panic-disorder" },
      pdagora: { dx: "Panic disorder (F41.0) and agoraphobia (F40.00)", line: "Both are coded when both are met.", points: ["Agoraphobia severity drives disability independent of panic.", "Onset before 20 predicts relapse after remission.", "Comorbid depression makes agoraphobia more treatment-resistant."], link: { ch: "ch05", sec: "s5-agora-criteria", label: "Agoraphobia criteria" }, dxId: "agoraphobia" },
      sad: { dx: "Separation anxiety disorder (F93.0)", line: "Three or more separation symptoms, for at least 4 weeks under 18 or typically 6 months in adults.", points: ["Adults can have it with no childhood history.", "Rule out agoraphobia (fear of being trapped), GAD (many worries) and illness anxiety (own health).", "Add “with panic attacks” if attacks occur around separation."], link: { ch: "ch05", sec: "s5-sad-criteria", label: "Separation anxiety criteria" }, dxId: "separation-anxiety" },
      sm: { dx: "Selective mutism (F94.0)", line: "Consistent failure to speak where speech is expected, despite speaking elsewhere, for at least 1 month beyond the first month of school.", points: ["Assess for social anxiety disorder: commonly comorbid, and both can be diagnosed.", "Exclude communication disorders, autism and psychosis."], link: { ch: "ch05", sec: "s5-sm", label: "Selective mutism" }, dxId: "selective-mutism" },
      silentperiod: { label: "Not selective mutism", dx: "Normal silent period of second-language learning", line: "Failure to speak due to lack of knowledge of the language is excluded.", points: ["Reconsider only if the child refuses to speak both languages despite adequate comprehension, across settings, for a prolonged period."], link: { ch: "ch05", sec: "s5-sm-ddx", label: "Selective mutism differential" } },
      phobia: { dx: "Specific phobia (F40.2xx)", line: "Code each stimulus type: animal F40.218, natural environment F40.228, blood-injection-injury F40.230–F40.233, situational F40.248, other F40.298.", points: ["75% fear more than one stimulus: ask about other fears and code each.", "Blood-injection-injury phobia typically causes vasovagal fainting.", "Add “with panic attacks” if attacks occur with the stimulus."], link: { ch: "ch05", sec: "s5-phobia-criteria", label: "Specific phobia criteria and coding" }, dxId: "specific-phobia" },
      normalfear: { label: "No anxiety disorder", dx: "Normal or transient fear", line: "Fear that is occasional, proportionate, developmentally expected or short-lived is not specific phobia.", points: ["Childhood fears are common and usually transitory.", "If the fear is impairing but subthreshold, other specified anxiety disorder can be used."], link: { ch: "ch05", sec: "s5-phobia-criteria", label: "Reading the criteria" } },
      social: { dx: "Social anxiety disorder (F40.10)", line: "Fear of scrutiny and negative evaluation across social situations, typically for 6 months or more.", points: ["In children, confirm the fear occurs with peers.", "Check for avoidant personality disorder, depression and alcohol use.", "People often wait 15–20 years to seek treatment."], link: { ch: "ch05", sec: "s5-social-criteria", label: "Social anxiety criteria" }, dxId: "social-anxiety" },
      socialperf: { dx: "Social anxiety disorder (F40.10), performance only", line: "Fear restricted to speaking or performing in public.", points: ["Typically most impairing in professional roles (musicians, athletes, speakers).", "If other social situations are feared too, drop the specifier."], link: { ch: "ch05", sec: "s5-social-criteria", label: "Performance only" }, dxId: "social-anxiety" },
      bdd: { label: "Consider", dx: "Body dysmorphic disorder", line: "Social avoidance caused only by beliefs about appearance does not warrant a separate social anxiety diagnosis.", points: ["Covered in Chapter 6 (obsessive-compulsive and related disorders)."], link: { ch: "ch05", sec: "s5-social-ddx", label: "Social anxiety differential" } },
      depression: { label: "Consider", dx: "A depressive disorder", line: "Fear of evaluation arising from feeling bad or unworthy points to depression, not social anxiety disorder.", points: ["Social anxiety disorder can coexist if fears about specific behaviors or symptoms are also present."], link: { ch: "ch05", sec: "s5-social-ddx", label: "Social anxiety differential" }, dxId: "mdd" },
      autism: { label: "Consider", dx: "Autism spectrum disorder", line: "Social communication deficits are core in autism; people with social anxiety usually have adequate social skills and relationships.", points: ["Social anxiety disorder can be comorbid with high-functioning autism in children."], link: { ch: "ch05", sec: "s5-social-ddx", label: "Social anxiety differential" } },
      shyness: { label: "No anxiety disorder", dx: "Normative shyness", line: "A common trait, valued in some cultures. Only about 12% of shy people meet criteria for social anxiety disorder.", points: ["Diagnose only when full criteria and significant impairment are present."], link: { ch: "ch05", sec: "s5-social-ddx", label: "Social anxiety differential" } },
      agora: { dx: "Agoraphobia (F40.00)", line: "Fear of two or more agoraphobic situations because escape or help may be unavailable, typically for 6 months or more.", points: ["Diagnosed whether or not panic disorder is present; if panic disorder is also met, code both.", "Screen for depression and alcohol or sedative misuse.", "Untreated, complete remission is rare (about 10%)."], link: { ch: "ch05", sec: "s5-agora-criteria", label: "Agoraphobia criteria" }, dxId: "agoraphobia" },
      gad: { dx: "Generalized anxiety disorder (F41.1)", line: "Hard-to-control worry about many things, more days than not for 6 months, with 3 of 6 symptoms (1 in children).", points: ["Check that the worry is not confined to another disorder’s focus (panic, evaluation, separation, illness, obsessions).", "Screen for major depression and suicidal thoughts.", "Full remission is very rare: plan for a chronic course."], link: { ch: "ch05", sec: "s5-gad-criteria", label: "GAD criteria" }, dxId: "gad" },
      osgad: { dx: "Other specified anxiety disorder (F41.8)", line: "“Generalized anxiety occurring less often than more days than not” is a listed example.", points: ["Record the reason after the diagnosis."], link: { ch: "ch05", sec: "s5-other", label: "Other specified anxiety disorder" }, dxId: "other-specified-anxiety" },
      subthreshold: { dx: "Other specified or unspecified anxiety disorder", line: "Impairing anxiety that falls short of a specific disorder: F41.8 with the reason recorded, or F41.9.", points: ["First rule out adjustment disorder with anxiety if there is a recent stressor.", "Reassess over time: short durations may extend to meet full criteria."], link: { ch: "ch05", sec: "s5-other", label: "Residual categories" }, dxId: "other-specified-anxiety" },
      adjust: { dx: "Adjustment disorder with anxiety (F43.22)", line: "Anxiety within 3 months of an identifiable stressor, out of proportion or impairing, not meeting another disorder.", points: ["Symptoms should end within 6 months after the stressor and its consequences end.", "Use “with mixed anxiety and depressed mood” (F43.23) if low mood is also prominent."], link: { ch: "ch05", sec: "s5-gad-ddx", label: "GAD differential" } },
      illness: { label: "Consider", dx: "Illness anxiety disorder or somatic symptom disorder", line: "If the only fear is having an illness, the diagnosis is illness anxiety disorder; worry centered on somatic symptoms suggests somatic symptom disorder.", points: ["Covered in Chapter 9.", "In GAD, health is one worry among many."], link: { ch: "ch05", sec: "s5-gad-ddx", label: "GAD differential" } },
      ocd: { label: "Consider", dx: "Obsessive-compulsive disorder", line: "Fear driven by intrusive, unwanted thoughts, urges or images belongs to OCD when its criteria are met.", points: ["Covered in Chapter 6.", "Social anxiety or a phobia is added only if those fears are independent of the obsessions."], link: { ch: "ch05", sec: "s5-phobia-ddx", label: "Specific phobia differential" } },
      ptsd: { label: "Consider", dx: "Posttraumatic stress disorder", line: "Fear and avoidance limited to reminders of a traumatic event suggest PTSD or acute stress disorder.", points: ["Specific phobia is assigned after a trauma only if PTSD criteria are not met.", "Covered in Chapter 7."], link: { ch: "ch05", sec: "s5-agora-ddx", label: "Agoraphobia differential" } }
    }
  },
  {
    id: "panic",
    chapter: "ch05",
    title: "Panic attack or panic disorder?",
    summary: "Decide whether an episode is a panic attack, check for medical and substance causes, sort expected from unexpected attacks, and see whether the criteria for panic disorder and agoraphobia are met.",
    caution: "A teaching aid built from DSM-5-TR pp. 235–246. Chest pain, syncope and breathlessness need medical assessment first. Panic attacks are linked with suicidal thoughts and attempts: always ask.",
    start: "surge",
    nodes: {
      surge: {
        q: "Was the episode an abrupt surge of intense fear or discomfort that peaked within minutes?",
        help: "Time the peak from the abrupt increase, not from when anxiety first began. The surge can start from a calm or an anxious state.",
        options: [
          { label: "Yes", to: "count", note: "Abrupt surge peaking within minutes." },
          { label: "No: a surge of anger or grief, not fear", to: "r:otherparox", note: "A paroxysm of another emotion." },
          { label: "No: anxiety that builds slowly and persists", to: "r:ongoing", note: "Ongoing anxiety rather than a discrete attack." }
        ]
      },
      count: {
        q: "How many of the 13 symptoms were present?",
        help: "Palpitations; sweating; trembling; breathlessness; choking; chest pain; nausea; dizziness; chills or heat; tingling; derealization or depersonalization; fear of losing control; fear of dying. Do not count tinnitus, neck soreness, headache or uncontrollable screaming or crying.",
        options: [
          { label: "Four or more", to: "flags", note: "A full-symptom panic attack." },
          { label: "Fewer than four", to: "r:limited", note: "A limited-symptom attack." }
        ]
      },
      flags: {
        q: "Are there red flags for a medical or substance cause?",
        help: "Onset after 45; vertigo, loss of consciousness, loss of bladder or bowel control, slurred speech, amnesia; stimulants, caffeine, cannabis, alcohol or sedative withdrawal, new medications.",
        options: [
          { label: "None", to: "cue", note: "No medical or substance red flags." },
          { label: "A medical condition (thyroid, parathyroid, pheochromocytoma, arrhythmia, asthma or COPD, seizures, vestibular)", to: "r:medical", note: "A medical cause is likely." },
          { label: "A substance or medication, with no independent history", to: "r:substance", note: "A substance cause is likely." }
        ]
      },
      cue: {
        q: "Were the attacks expected (with an obvious trigger) or unexpected (out of the blue)?",
        help: "Ask what happened just before each attack, and whether the person felt it came for no reason. Nocturnal attacks, waking from sleep in panic, are unexpected. Cultural explanations (wind, arguments) can make an attack seem expected.",
        options: [
          { label: "At least some were unexpected", to: "recurrent", note: "Unexpected attacks." },
          { label: "All were expected, with a clear trigger", to: "trigger", note: "Expected attacks only." }
        ]
      },
      trigger: {
        q: "What triggers the attacks?",
        help: "Expected attacks are recorded as a specifier on the disorder that explains them.",
        options: [
          { label: "Social or performance situations", to: "r:pasocial", note: "Cued by scrutiny." },
          { label: "A specific object or situation (animal, blood, flying, heights)", to: "r:paphobia", note: "Cued by a phobic stimulus." },
          { label: "Two or more agoraphobic situations, from fear of being trapped", to: "r:paagora", note: "Cued by agoraphobic situations." },
          { label: "Separation from attachment figures", to: "r:pasad", note: "Cued by separation." },
          { label: "Trauma reminders", to: "r:paptsd", note: "Cued by trauma reminders." },
          { label: "Worry, low mood, obsessions or another mental disorder", to: "r:paother", note: "Cued within another disorder." }
        ]
      },
      recurrent: {
        q: "Has there been more than one unexpected full-symptom attack, with at least one followed by a month or more of worry about further attacks or a maladaptive change in behavior?",
        help: "Worry about a heart attack, going crazy or losing control; avoiding exertion, unfamiliar places or being alone; restricting activities.",
        options: [
          { label: "Yes", to: "agora", note: "Criteria A and B of panic disorder are met." },
          { label: "Only one unexpected attack, or no lasting worry or behavior change", to: "r:notyet", note: "Unexpected attacks without the full panic disorder criteria." }
        ]
      },
      agora: {
        q: "Does the person fear or avoid two or more agoraphobic situations because escape or help might be unavailable?",
        help: "Public transportation; open spaces; enclosed places; lines or crowds; being outside the home alone.",
        options: [
          { label: "Yes", to: "r:pdagora", note: "Agoraphobia as well." },
          { label: "No", to: "r:pd", note: "No agoraphobia." }
        ]
      }
    },
    results: {
      otherparox: { label: "Not a panic attack", dx: "Another paroxysmal state", line: "Anger attacks or surges of grief lack the essential feature of a panic attack: an abrupt surge of fear or discomfort.", points: ["Consider intermittent explosive disorder, depression or grief depending on context."], link: { ch: "ch05", sec: "s5-panic-attack", label: "Panic attack differential" } },
      ongoing: { label: "Not a panic attack", dx: "Ongoing anxiety", line: "A panic attack is distinguished from ongoing anxiety by its peak within minutes, its discrete nature and its greater severity.", points: ["Persistent worry about many things suggests GAD: try the anxiety helper."], link: { ch: "ch05", sec: "s5-panic-attack", label: "Key distinctions" }, also: { href: "#/helpers/anxiety", label: "Which anxiety disorder?" } },
      limited: { dx: "Limited-symptom attack", line: "Fewer than four symptoms. If unexpected limited-symptom attacks are the only problem, consider other specified anxiety disorder (F41.8).", points: ["Panic disorder requires full-symptom unexpected attacks.", "Fearful spells are a risk factor for later panic disorder."], link: { ch: "ch05", sec: "s5-other", label: "Other specified anxiety disorder" }, dxId: "other-specified-anxiety" },
      medical: { dx: "Anxiety disorder due to another medical condition (F06.4)", line: "Panic is not diagnosed as panic disorder if it is a direct physiological consequence of a medical condition.", points: ["Serum calcium (hyperparathyroidism), Holter monitor (arrhythmia), thyroid tests, metanephrines (pheochromocytoma) as indicated.", "Code the medical condition first."], link: { ch: "ch05", sec: "s5-panic-ddx", label: "Causes to exclude" }, dxId: "anxiety-due-to-amc" },
      substance: { dx: "Substance/medication-induced anxiety disorder", line: "Panic during stimulant, caffeine or cannabis intoxication, or alcohol or sedative withdrawal, coded by substance (e.g., F14.280, F15.980, F10.280).", points: ["If attacks continue long after the substance effects end, or preceded use, consider panic disorder.", "A substance use disorder may be folded into the code."], link: { ch: "ch05", sec: "s5-substance", label: "Substance-induced anxiety" }, dxId: "substance-induced-anxiety" },
      pasocial: { dx: "Social anxiety disorder, with panic attacks", line: "Attacks cued only by social situations are expected; diagnose social anxiety disorder (F40.10) if its criteria are met.", points: ["The person fears the evaluation an attack would bring more than the attack itself."], link: { ch: "ch05", sec: "s5-social-ddx", label: "Social anxiety differential" }, dxId: "social-anxiety" },
      paphobia: { dx: "Specific phobia, with panic attacks", line: "Attacks only with the phobic stimulus are expected; code the phobia by stimulus type.", points: ["Add panic disorder only if unexpected attacks also occur."], link: { ch: "ch05", sec: "s5-phobia-ddx", label: "Specific phobia differential" }, dxId: "specific-phobia" },
      paagora: { dx: "Agoraphobia, with panic attacks", line: "Expected attacks in agoraphobic situations; agoraphobia (F40.00) can be diagnosed without panic disorder.", points: ["If unexpected attacks also occur, with a month of worry, add panic disorder."], link: { ch: "ch05", sec: "s5-agora-criteria", label: "Agoraphobia" }, dxId: "agoraphobia" },
      pasad: { dx: "Separation anxiety disorder, with panic attacks", line: "Attacks in anticipation of separation are expected; diagnose separation anxiety disorder (F93.0) if its criteria are met.", points: ["In panic disorder, attacks are unexpected and centered on fear of dying or going crazy."], link: { ch: "ch05", sec: "s5-sad-ddx", label: "Separation anxiety differential" }, dxId: "separation-anxiety" },
      paptsd: { dx: "PTSD (or acute stress disorder), with panic attacks", line: "Attacks cued by trauma reminders belong to the trauma-related disorder, recorded with the panic attack specifier.", points: ["Covered in Chapter 7."], link: { ch: "ch05", sec: "s5-panic-attack", label: "Panic attack specifier" }, dxId: "panic-attack" },
      paother: { dx: "[Disorder] with panic attacks", line: "Panic attacks occur across depressive, bipolar, obsessive-compulsive, eating, psychotic, personality and substance use disorders, and in GAD when triggered by worry.", points: ["Most people with panic attacks never meet criteria for panic disorder.", "The specifier marks greater severity, comorbidity and poorer treatment response."], link: { ch: "ch05", sec: "s5-panic-attack", label: "Why the specifier matters" }, dxId: "panic-attack" },
      notyet: { label: "Not panic disorder (yet)", dx: "Unexpected panic attacks without panic disorder", line: "Repeated unexpected attacks are necessary but not sufficient: Criterion B needs a month of worry or behavior change.", points: ["Record the panic attack specifier on any disorder present.", "Follow up: panic disorder may develop."], link: { ch: "ch05", sec: "s5-panic-criteria", label: "Panic disorder criteria" }, dxId: "panic-attack" },
      pd: { dx: "Panic disorder (F41.0)", line: "Recurrent unexpected panic attacks plus at least 1 month of worry or maladaptive behavior change.", points: ["Do not add the panic attack specifier.", "Screen for depression, substance use and suicidal thoughts."], link: { ch: "ch05", sec: "s5-panic-criteria", label: "Panic disorder" }, dxId: "panic-disorder" },
      pdagora: { dx: "Panic disorder (F41.0) and agoraphobia (F40.00)", line: "Both are coded when both are met; agoraphobia also needs fear that is out of proportion and typically lasts 6 months.", points: ["Agoraphobia raises disability and medical visits.", "Comorbid depression predicts a more treatment-resistant course."], link: { ch: "ch05", sec: "s5-agora-criteria", label: "Agoraphobia" }, dxId: "agoraphobia" }
    }
  }
]);
