/* Chapter 16 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var SUD_ASK = [
    ["1–2 Control", "“Do you often use more, or for longer, than you meant to? Have you tried to cut down?”"],
    ["3 Time", "“How much of your day goes into getting it, using it, or recovering?”"],
    ["4 Craving", "“Do you get strong urges to use? What sets them off?”", "The only criterion allowed in remission."],
    ["5–7 Consequences", "“Has it caused problems at work, school or home, or with people close to you? Have you given things up because of it?”"],
    ["8 Hazardous use", "“Have you driven, cared for children or done risky things while using?”"],
    ["9 Despite harm", "“Have you kept using even though it was hurting your health or mood?”"],
    ["10–11 Tolerance, withdrawal", "“Do you need more for the same effect? What happens if you stop?”", "Not counted for medicines taken as prescribed."]
  ];

  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "alcohol-use",
      ask: [["Screen", "“How many times in the past year have you had 5 or more drinks in a day (4 for women)?”", "A single-question screen; follow with AUDIT-C."]].concat(SUD_ASK, [
        ["Withdrawal history", "“Have you ever had shakes, seizures or seen things after stopping?”", "Predicts complicated withdrawal."]
      ]),
      tx: {
        asOf: "October 2026",
        first: "**Naltrexone** (oral or monthly injection) or **acamprosate** for moderate to severe AUD, with psychosocial treatment (CBT, motivational enhancement, mutual-help groups).",
        points: [
          "Naltrexone is contraindicated with current opioid use or acute hepatitis; acamprosate needs renal dose adjustment but is safe in liver disease.",
          "**Disulfiram** works only with supervised adherence; **topiramate** and **gabapentin** are off-label alternatives.",
          "Give **thiamine**; check liver function, GGT and CDT to monitor drinking.",
          "Treat co-occurring depression and anxiety, but reassess after several weeks of abstinence."
        ],
        stahl: [["Alcohol", "c/ch13/guide/s13-alcohol"], ["Naltrexone", "drugs/naltrexone"], ["Acamprosate", "drugs/acamprosate"], ["Disulfiram", "drugs/disulfiram"], ["Topiramate", "drugs/topiramate"], ["Gabapentin", "drugs/gabapentin"]]
      }
    },
    {
      id: "alcohol-withdrawal",
      ask: [
        ["A Timing", "“When was your last drink? How much were you drinking daily?”"],
        ["B Signs", "“Are you shaking, sweating, sick to your stomach or unable to sleep?”", "Score with CIWA-Ar."],
        ["B Perceptions", "“Are you seeing, hearing or feeling things others don’t? Do you know they aren’t real?”", "Insight → with perceptual disturbances."],
        ["Delirium", "Test orientation and attention (months backward).", "Disturbed attention → withdrawal delirium."],
        ["History", "“Have you had seizures or DTs before?”"],
        ["Other drugs", "“Are you also taking sleeping pills or anxiety pills?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Benzodiazepines** are first-line, symptom-triggered by CIWA-Ar when monitoring allows (e.g., [[stahl:drugs/diazepam|diazepam]]); **phenobarbital** is an alternative in monitored settings.",
        points: [
          "Give **thiamine before glucose** to prevent Wernicke encephalopathy.",
          "Admit for prior seizures or delirium tremens, severe symptoms, serious medical illness or no safe support; correct fluids and electrolytes.",
          "Avoid antipsychotics alone (they lower the seizure threshold); use them only as adjuncts for hallucinations or agitation.",
          "Withdrawal management is not treatment: start relapse-prevention medicines and link to care."
        ],
        stahl: [["Alcohol", "c/ch13/guide/s13-alcohol"], ["Diazepam", "drugs/diazepam"]]
      }
    },
    {
      id: "opioid-use",
      ask: [["Drugs used", "“Which opioids do you use, how, and how much? Have you used fentanyl?”", "Ask about injection and shared equipment."]].concat(SUD_ASK, [
        ["Overdose", "“Have you ever overdosed or needed naloxone? Do you have naloxone at home?”"]
      ]),
      tx: {
        asOf: "October 2026",
        first: "Offer **medication for OUD** promptly: **buprenorphine** or **methadone** (both cut overdose death), or **extended-release naltrexone** after detoxification.",
        points: [
          "Since 2023 any clinician with a DEA registration can prescribe buprenorphine (no X-waiver); methadone for OUD is dispensed through opioid treatment programs.",
          "With fentanyl, buprenorphine can **precipitate withdrawal**; start when withdrawal is clear or use a low-dose or high-dose induction strategy.",
          "Prescribe **naloxone** to every patient (available over the counter since 2023); test for HIV, hepatitis B and C.",
          "Continue treatment long term; stopping raises overdose risk because tolerance falls."
        ],
        stahl: [["Opioid use disorder treatment", "c/ch13/guide/s13-oud-tx"], ["Buprenorphine", "drugs/buprenorphine"], ["Methadone", "drugs/methadone"], ["Naltrexone", "drugs/naltrexone"], ["Naloxone", "drugs/naloxone"]]
      }
    },
    {
      id: "opioid-intox",
      ask: [
        ["C Signs", "Check pupils, breathing rate, oxygen saturation and level of consciousness.", "Triad: coma, respiratory depression, pinpoint pupils."],
        ["What and when", "Ask companions which drug, how much and when; look for patches and pill bottles."],
        ["Co-ingestants", "Ask about alcohol, benzodiazepines, xylazine and stimulants."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Support breathing and give **naloxone**, titrated to breathing rather than full arousal to avoid severe precipitated withdrawal.",
        points: [
          "Observe after reversal: naloxone wears off before long-acting opioids and some fentanyl analogs.",
          "Naloxone does not reverse xylazine or benzodiazepines.",
          "After an overdose, offer buprenorphine or methadone and a naloxone kit before discharge."
        ],
        stahl: [["Opioids", "c/ch13/guide/s13-opioids"], ["Naloxone", "drugs/naloxone"]]
      }
    },
    {
      id: "opioid-withdrawal",
      ask: [
        ["A Last use", "“When did you last use, and what? Short-acting or long-acting?”"],
        ["C Symptoms", "“Do you have aches, diarrhea, a runny nose, yawning or goosebumps?”", "Score with COWS."],
        ["Precipitated", "“Did you take naltrexone, buprenorphine or naloxone just before this started?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat with an opioid agonist: **buprenorphine** (once withdrawal is objective) or **methadone**, ideally continued as maintenance.",
        points: [
          "**Lofexidine** or clonidine reduce autonomic symptoms when agonists are not used; add symptomatic medicines for diarrhea, nausea and aches.",
          "Detoxification alone has high relapse and overdose risk."
        ],
        stahl: [["Opioid use disorder treatment", "c/ch13/guide/s13-oud-tx"], ["Buprenorphine", "drugs/buprenorphine"], ["Lofexidine", "drugs/lofexidine"]]
      }
    },
    {
      id: "sedative-use",
      ask: [["Source", "“Which pills do you take, how many, and where do you get them? More than one prescriber?”", "Check the prescription monitoring program."]].concat(SUD_ASK, [
        ["Other depressants", "“Do you drink or take opioids too?”", "Combinations cause fatal overdoses."]
      ]),
      tx: {
        asOf: "October 2026",
        first: "A **gradual, individualized taper**, often 5–10% every 2–4 weeks with slower steps at the end, combined with CBT for insomnia or anxiety.",
        points: [
          "Switching to a longer-acting benzodiazepine (e.g., [[stahl:drugs/diazepam|diazepam]]) can smooth the taper.",
          "No medicine is approved for sedative use disorder; treat the underlying anxiety or insomnia with non-benzodiazepine options.",
          "Prescribe naloxone if opioids are also used."
        ],
        stahl: [["Sedatives", "c/ch13/guide/s13-sedatives"], ["Diazepam", "drugs/diazepam"]]
      }
    },
    {
      id: "sedative-withdrawal",
      ask: [
        ["A Use", "“Which pills, what dose, how long, and when was the last one?”"],
        ["B Signs", "Ask about tremor, sweating, insomnia, anxiety, nausea, perceptual changes and seizures."],
        ["Alcohol", "“How much do you drink?”", "Cross-tolerant; withdrawal can combine."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Restart a benzodiazepine at a stabilizing dose, then **taper slowly**; severe withdrawal needs inpatient care.",
        points: ["Withdrawal from short-acting drugs starts sooner and can cause **seizures and delirium**.", "Never stop a long-term benzodiazepine abruptly."],
        stahl: [["Sedatives", "c/ch13/guide/s13-sedatives"]]
      }
    },
    {
      id: "stimulant-use",
      ask: [["Pattern", "“Do you use in binges or daily? Smoke, snort or inject?”"]].concat(SUD_ASK, [
        ["Complications", "“Any chest pain, paranoia, or hearing things while using?”"]
      ]),
      tx: {
        asOf: "October 2026",
        first: "**Contingency management** has the strongest evidence, with CBT and community reinforcement.",
        points: [
          "No medication is FDA-approved for stimulant use disorder; **bupropion plus extended-release naltrexone** showed benefit for methamphetamine use disorder (off-label).",
          "Fentanyl contamination is common: prescribe **naloxone** and test strips.",
          "For agitation or psychosis during intoxication, use benzodiazepines first, then an antipsychotic if needed."
        ],
        stahl: [["Stimulants", "c/ch13/guide/s13-stimulants"], ["Bupropion", "drugs/bupropion"], ["Naltrexone", "drugs/naltrexone"]]
      }
    },
    {
      id: "cannabis-use",
      ask: [["Pattern", "“How often do you use, and in what form: flower, vapes, edibles or concentrates?”", "High-potency products raise risk."]].concat(SUD_ASK, [
        ["Psychosis", "“Have you heard voices or felt paranoid between uses?”"],
        ["Vomiting", "“Any bouts of vomiting relieved by hot showers?”", "Cannabinoid hyperemesis syndrome."]
      ]),
      tx: {
        asOf: "October 2026",
        first: "**Motivational enhancement, CBT and contingency management**; no medication is FDA-approved.",
        points: ["Withdrawal is usually managed with support and sleep hygiene.", "Advise stopping in psychosis, pregnancy and cannabinoid hyperemesis syndrome."],
        stahl: [["Cannabis", "c/ch13/guide/s13-cannabis"]]
      }
    },
    {
      id: "tobacco-use",
      ask: [
        ["Time to first", "“How soon after waking do you smoke or vape?”", "Within 30 minutes signals higher dependence."],
        ["Amount", "“How many cigarettes a day, or how long does a vape pod last?”"],
        ["Quit attempts", "“Have you tried to quit? What happened?”"],
        ["Readiness", "“Would you like help to quit in the next month?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Varenicline** or **combination nicotine replacement** (patch plus a short-acting form) with counseling; **bupropion** is an alternative.",
        points: [
          "Varenicline is safe in psychiatric patients (EAGLES trial).",
          "Cytisinicline received an FDA complete response letter in June 2026; it is not yet approved in the United States.",
          "Stopping smoking raises levels of clozapine and olanzapine (CYP1A2 induction ends): monitor and adjust."
        ],
        stahl: [["Nicotine", "c/ch13/guide/s13-nicotine"], ["Varenicline", "drugs/varenicline"], ["Bupropion", "drugs/bupropion"], ["Nicotine replacement", "drugs/nicotine"]]
      }
    },
    {
      id: "hallucinogen-intox",
      ask: [
        ["What", "“What did you take and when?”", "MDMA, LSD, mushrooms, PCP or ketamine."],
        ["Insight", "“Do you know the experiences are from the drug?”"],
        ["Danger", "Check temperature, heart rate and agitation.", "Hyperthermia and serotonin syndrome with MDMA; violence and nystagmus with PCP."]
      ],
      tx: {
        asOf: "October 2026",
        first: "A **calm, low-stimulation setting** with reassurance (“talking down”); **benzodiazepines** for severe anxiety or agitation.",
        points: ["Cool and hydrate for hyperthermia; check sodium after MDMA.", "Avoid restraints if possible with PCP; watch for rhabdomyolysis."],
        stahl: [["Hallucinogens", "c/ch13/guide/s13-hallucinogens"]]
      }
    },
    {
      id: "gambling",
      ask: [
        ["1 Tolerance", "“Do you need to bet more to feel the same excitement?”"],
        ["3 Control", "“Have you tried to cut back or stop?”"],
        ["6 Chasing", "“After losing, do you go back to win it back?”"],
        ["7 Lying", "“Do you hide how much you gamble?”"],
        ["9 Bailout", "“Has anyone had to pay your debts?”"],
        ["Mania", "“Did the gambling happen during periods of high energy and little sleep?”"],
        ["Suicide", "“Have money troubles ever made you think of ending your life?”", "Suicide risk is high."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT** and motivational interviewing, with Gamblers Anonymous, self-exclusion and financial controls.",
        points: ["No medication is FDA-approved; opioid antagonists such as [[stahl:drugs/naltrexone|naltrexone]] have the most evidence (off-label).", "Screen for depression, substance use and suicide; involve family when possible."],
        stahl: [["Impulsive and compulsive disorders", "c/ch13/guide/s13-impulse"], ["Naltrexone", "drugs/naltrexone"]]
      }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "heavy-use", title: "Drinking or drug use getting out of hand",
      intro: "Count the 11 use disorder criteria over 12 months, ignoring tolerance and withdrawal from medicines taken as prescribed. Then check for intoxication, withdrawal and induced syndromes, and code them together.",
      ask: ["What do you use, how much, and how often?", "Have you tried to cut down?", "What problems has it caused?", "What happens when you stop?", "Any overdoses, seizures or blackouts?"],
      mustNotMiss: ["**Withdrawal risk**: alcohol and sedatives can cause seizures and delirium.", "**Overdose risk** and naloxone access.", "**Suicide risk**, and co-occurring depression, PTSD or psychosis."],
      helpers: ["substance", "induced"],
      items: [
        { ch: "ch16", dx: "alcohol-use", when: "Alcohol; 2–3 criteria mild, 4–5 moderate, 6+ severe." },
        { ch: "ch16", dx: "opioid-use", when: "Heroin, fentanyl or misused pain pills." },
        { ch: "ch16", dx: "cannabis-use", when: "Daily or near-daily cannabis." },
        { ch: "ch16", dx: "stimulant-use", when: "Cocaine or methamphetamine binges." },
        { ch: "ch16", dx: "sedative-use", when: "Benzodiazepines or sleeping pills beyond prescription." },
        { ch: "ch16", dx: "tobacco-use", when: "Cigarettes or vaping." },
        { ch: "ch16", dx: "other-substance-use", when: "Steroids, kratom, poppers or an unknown drug." }
      ]
    },
    {
      id: "intoxicated", title: "Intoxicated, overdosed or acting strangely after using",
      intro: "Match the signs to the drug: pupils, pulse, temperature, nystagmus and breathing narrow the field. Treat danger first, then confirm with history and toxicology.",
      ask: ["What was taken, how much and when?", "Any other drugs or alcohol?", "Do you know the experiences are from the drug?", "Any chest pain, seizures or trouble breathing?"],
      mustNotMiss: ["**Opioid overdose**: give naloxone.", "**Head injury**, hypoglycemia and other medical causes.", "**Delirium** and **serotonin syndrome**."],
      helpers: ["substance"],
      items: [
        { ch: "ch16", dx: "alcohol-intox", when: "Slurred speech, unsteady gait, nystagmus, alcohol odor." },
        { ch: "ch16", dx: "opioid-intox", when: "Drowsiness, pinpoint pupils, slow breathing." },
        { ch: "ch16", dx: "stimulant-intox", when: "Euphoria or paranoia, dilated pupils, tachycardia." },
        { ch: "ch16", dx: "cannabis-intox", when: "Red eyes, appetite, dry mouth, tachycardia." },
        { ch: "ch16", dx: "pcp-intox", when: "Violence, nystagmus, numbness, hypertension." },
        { ch: "ch16", dx: "hallucinogen-intox", when: "Perceptual changes, synesthesia, dilated pupils." },
        { ch: "ch16", dx: "sedative-intox", when: "Like alcohol, without the odor." },
        { ch: "ch16", dx: "inhalant-intox", when: "Solvent odor, rash around nose or mouth, dizziness." },
        { ch: "ch16", dx: "caffeine-intox", when: "Restless, flushed and tachycardic after much caffeine." }
      ]
    },
    {
      id: "withdrawal", title: "Shaking, sweating or sick after stopping alcohol or drugs",
      intro: "Timing and signs point to the drug. Alcohol and sedative withdrawal can kill; opioid withdrawal is miserable but rarely dangerous.",
      ask: ["What did you stop, and when?", "How much were you using daily?", "Have you had seizures or DTs before?", "Do you know what you are seeing isn’t real?"],
      mustNotMiss: ["**Seizures** and **delirium tremens**.", "**Wernicke encephalopathy**: give thiamine.", "Loss of tolerance and **overdose** after detox."],
      helpers: ["substance"],
      items: [
        { ch: "ch16", dx: "alcohol-withdrawal", when: "Tremor, sweating, tachycardia, insomnia; seizures, DTs." },
        { ch: "ch16", dx: "sedative-withdrawal", when: "Like alcohol, after stopping benzodiazepines or sleeping pills." },
        { ch: "ch16", dx: "opioid-withdrawal", when: "Yawning, rhinorrhea, dilated pupils, diarrhea, aches." },
        { ch: "ch16", dx: "stimulant-withdrawal", when: "Crash: dysphoria, hypersomnia, hunger." },
        { ch: "ch16", dx: "cannabis-withdrawal", when: "Irritability, poor sleep and appetite within a week." },
        { ch: "ch16", dx: "tobacco-withdrawal", when: "Irritability, restlessness and hunger within 24 hours." },
        { ch: "ch16", dx: "caffeine-withdrawal", when: "Headache, fatigue and low mood within 24 hours." }
      ]
    },
    {
      id: "gambling-problems", title: "Gambling that is out of control",
      intro: "Count 4 of 9 criteria in 12 months and rule out a manic episode. Ask directly about debts and suicide.",
      ask: ["Do you chase losses?", "Do you hide your gambling?", "Has anyone bailed you out?", "Did it happen during periods of high energy?", "Have money worries made you think of ending your life?"],
      mustNotMiss: ["**Suicide risk**.", "**Mania**.", "**Dopamine agonists** (Parkinson’s disease, restless legs) causing new compulsive gambling."],
      items: [
        { ch: "ch16", dx: "gambling", when: "4+ of 9 criteria; chasing, lying, bailouts." },
        { ch: "ch03", dx: "bipolar-i", when: "Gambling only during manic episodes." },
        { ch: "ch18", dx: "antisocial-pd", when: "Gambling within lifelong deceit and rule-breaking." }
      ]
    },
    {
      id: "after-substance", title: "Mood change after a new medicine or drug",
      items: [
        { ch: "ch16", dx: "stimulant-withdrawal", when: "Dysphoria and exhaustion days after a stimulant binge." },
        { ch: "ch16", dx: "alcohol-use", when: "Depression or anxiety with heavy drinking; reassess after about a month sober." }
      ]
    },
    {
      id: "psychosis", title: "Hearing voices or unusual beliefs",
      items: [
        { ch: "ch16", dx: "alcohol-withdrawal", when: "Hallucinations with insight during withdrawal (with perceptual disturbances)." },
        { ch: "ch16", dx: "stimulant-intox", when: "Paranoia during a cocaine or methamphetamine binge." },
        { ch: "ch16", dx: "hppd", when: "Lasting visual changes after hallucinogens, with insight." }
      ]
    },
    {
      id: "panic-episodes", title: "Sudden attacks of fear, palpitations or chest pain",
      items: [
        { ch: "ch16", dx: "caffeine-intox", when: "Attacks after large amounts of caffeine." },
        { ch: "ch16", dx: "cannabis-intox", when: "Panic during cannabis intoxication." }
      ]
    }
  ]);
})();
