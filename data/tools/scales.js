/* Case tools: rating scales. All are freely available for clinical use; wording is condensed.
   item: { q, opts: [[score, label]] } or { q, max, anchors: [[score, label]] } for 0..max sliders.
   bands: [[min, max, label, note]] */
SP.tools = SP.tools || {};
var _F = [[0, "Never"], [1, "Less than monthly"], [2, "Monthly"], [3, "Weekly"], [4, "Daily or almost daily"]];
var _INJ = [[0, "No"], [2, "Yes, but not in the last year"], [4, "Yes, during the last year"]];
SP.tools.scales = [
  {
    id: "audit", name: "AUDIT", full: "Alcohol Use Disorders Identification Test", for: "alcohol",
    source: "World Health Organization (Babor and colleagues, 2001). Past 12 months. One standard drink is about 10 g of alcohol.",
    items: [
      { q: "How often do you have a drink containing alcohol?", opts: [[0, "Never"], [1, "Monthly or less"], [2, "2–4 times a month"], [3, "2–3 times a week"], [4, "4 or more times a week"]] },
      { q: "How many standard drinks do you have on a typical day when you are drinking?", opts: [[0, "1 or 2"], [1, "3 or 4"], [2, "5 or 6"], [3, "7 to 9"], [4, "10 or more"]] },
      { q: "How often do you have six or more drinks on one occasion?", opts: _F },
      { q: "How often in the last year have you found that you were not able to stop drinking once you had started?", opts: _F },
      { q: "How often in the last year have you failed to do what was normally expected of you because of drinking?", opts: _F },
      { q: "How often in the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?", opts: _F },
      { q: "How often in the last year have you had a feeling of guilt or remorse after drinking?", opts: _F },
      { q: "How often in the last year have you been unable to remember what happened the night before because of drinking?", opts: _F },
      { q: "Have you or someone else been injured because of your drinking?", opts: _INJ },
      { q: "Has a relative, friend, doctor or other health worker been concerned about your drinking or suggested you cut down?", opts: _INJ }
    ],
    sub: { label: "AUDIT-C (items 1–3)", items: [0, 1, 2], note: "Positive screen: 4 or more in men, 3 or more in women." },
    bands: [[0, 7, "Zone I: low risk", "Alcohol education."], [8, 15, "Zone II: hazardous drinking", "Simple advice."], [16, 19, "Zone III: harmful drinking", "Brief counseling and continued monitoring."], [20, 40, "Zone IV: possible dependence", "Refer for specialist diagnostic evaluation and treatment."]]
  },
  {
    id: "ciwa", name: "CIWA-Ar", full: "Clinical Institute Withdrawal Assessment for Alcohol, revised", for: "alcohol",
    source: "Sullivan and colleagues, 1989. Public domain. Rate what you observe and what the patient reports now; repeat to guide symptom-triggered treatment.",
    items: [
      { q: "Nausea and vomiting", max: 7, anchors: [[0, "None"], [1, "Mild nausea, no vomiting"], [4, "Intermittent nausea with dry heaves"], [7, "Constant nausea, frequent dry heaves and vomiting"]] },
      { q: "Tremor (arms extended, fingers spread)", max: 7, anchors: [[0, "None"], [1, "Not visible, can be felt fingertip to fingertip"], [4, "Moderate, with arms extended"], [7, "Severe, even with arms not extended"]] },
      { q: "Paroxysmal sweats", max: 7, anchors: [[0, "None visible"], [1, "Barely perceptible, palms moist"], [4, "Beads of sweat on forehead"], [7, "Drenching sweats"]] },
      { q: "Anxiety", max: 7, anchors: [[0, "At ease"], [1, "Mildly anxious"], [4, "Moderately anxious or guarded"], [7, "Acute panic, as in severe delirium"]] },
      { q: "Agitation", max: 7, anchors: [[0, "Normal activity"], [1, "Somewhat more than normal"], [4, "Moderately fidgety and restless"], [7, "Paces or constantly thrashes about"]] },
      { q: "Tactile disturbances (itching, pins and needles, burning, bugs crawling)", max: 7, anchors: [[0, "None"], [1, "Very mild"], [4, "Moderately severe hallucinations"], [7, "Continuous hallucinations"]] },
      { q: "Auditory disturbances (harsh or frightening sounds, hearing things)", max: 7, anchors: [[0, "Not present"], [1, "Very mild harshness or ability to frighten"], [4, "Moderately severe hallucinations"], [7, "Continuous hallucinations"]] },
      { q: "Visual disturbances (light too bright, colors different, seeing things)", max: 7, anchors: [[0, "Not present"], [1, "Very mild sensitivity"], [4, "Moderately severe hallucinations"], [7, "Continuous hallucinations"]] },
      { q: "Headache, fullness in head", max: 7, anchors: [[0, "Not present"], [1, "Very mild"], [4, "Moderately severe"], [7, "Extremely severe"]] },
      { q: "Orientation and clouding of sensorium", max: 4, anchors: [[0, "Oriented, can do serial additions"], [1, "Cannot do serial additions or uncertain about date"], [2, "Date off by no more than 2 days"], [3, "Date off by more than 2 days"], [4, "Disoriented for place or person"]] }
    ],
    bands: [[0, 8, "Absent or minimal withdrawal", "Usually no medication needed; keep monitoring."], [9, 15, "Moderate withdrawal", "Symptom-triggered benzodiazepine; reassess regularly."], [16, 67, "Severe withdrawal", "Higher risk of seizures and delirium tremens; treat promptly and consider a higher level of care."]],
    note: "Thresholds vary between protocols (many treat at ≥8 or ≥10). Hallucinations with insight are “with perceptual disturbances”; disturbed attention or awareness means withdrawal delirium."
  },
  {
    id: "ftnd", name: "Fagerström", full: "Fagerström Test for Nicotine Dependence (now also called the Fagerström Test for Cigarette Dependence)", for: "tobacco",
    source: "Heatherton and colleagues, 1991; Fagerström, 2012.",
    items: [
      { q: "How soon after waking do you smoke your first cigarette?", opts: [[3, "Within 5 minutes"], [2, "6–30 minutes"], [1, "31–60 minutes"], [0, "After 60 minutes"]] },
      { q: "Is it difficult to refrain from smoking where it is forbidden (church, library, cinema)?", opts: [[1, "Yes"], [0, "No"]] },
      { q: "Which cigarette would you hate most to give up?", opts: [[1, "The first one in the morning"], [0, "Any other"]] },
      { q: "How many cigarettes a day do you smoke?", opts: [[0, "10 or fewer"], [1, "11–20"], [2, "21–30"], [3, "31 or more"]] },
      { q: "Do you smoke more often in the first hours after waking than during the rest of the day?", opts: [[1, "Yes"], [0, "No"]] },
      { q: "Do you smoke when you are so ill that you are in bed most of the day?", opts: [[1, "Yes"], [0, "No"]] }
    ],
    sub: { label: "Heaviness of Smoking Index (items 1 and 4)", items: [0, 3], note: "0–6; 5–6 indicates high dependence." },
    bands: [[0, 2, "Very low dependence", ""], [3, 4, "Low dependence", ""], [5, 5, "Medium dependence", ""], [6, 7, "High dependence", "Combination NRT or varenicline usually needed."], [8, 10, "Very high dependence", "Combination NRT or varenicline usually needed."]],
    note: "Smoking induces CYP1A2: stopping or starting smoking changes clozapine and olanzapine levels."
  },
  {
    id: "cows", name: "COWS", full: "Clinical Opiate Withdrawal Scale", for: "opioid",
    source: "Wesson and Ling, 2003. Rate each item over the period of the assessment.",
    items: [
      { q: "Resting pulse rate (after sitting 1 minute)", opts: [[0, "80 or below"], [1, "81–100"], [2, "101–120"], [4, "Above 120"]] },
      { q: "Sweating (past half hour, not due to room temperature or activity)", opts: [[0, "No chills or flushing"], [1, "Subjective chills or flushing"], [2, "Flushed or moist face"], [3, "Beads of sweat on brow or face"], [4, "Sweat streaming off face"]] },
      { q: "Restlessness", opts: [[0, "Able to sit still"], [1, "Reports difficulty sitting still, but able to"], [3, "Frequent shifting or extraneous movements"], [5, "Unable to sit still more than a few seconds"]] },
      { q: "Pupil size", opts: [[0, "Pinned or normal for room light"], [1, "Possibly larger than normal"], [2, "Moderately dilated"], [5, "Only the rim of the iris visible"]] },
      { q: "Bone or joint aches", opts: [[0, "None"], [1, "Mild diffuse discomfort"], [2, "Severe diffuse aching"], [4, "Rubbing joints or muscles, unable to sit still"]] },
      { q: "Runny nose or tearing", opts: [[0, "None"], [1, "Nasal stuffiness or moist eyes"], [2, "Nose running or tearing"], [4, "Constant running or tears streaming"]] },
      { q: "GI upset (past half hour)", opts: [[0, "None"], [1, "Stomach cramps"], [2, "Nausea or loose stool"], [3, "Vomiting or diarrhea"], [5, "Multiple episodes of vomiting or diarrhea"]] },
      { q: "Tremor (outstretched hands)", opts: [[0, "None"], [1, "Felt, not observed"], [2, "Slight, observable"], [4, "Gross tremor or muscle twitching"]] },
      { q: "Yawning", opts: [[0, "None"], [1, "Once or twice during assessment"], [2, "Three or more times"], [4, "Several times a minute"]] },
      { q: "Anxiety or irritability", opts: [[0, "None"], [1, "Reports increasing irritability or anxiety"], [2, "Obviously irritable or anxious"], [4, "So irritable or anxious that assessment is difficult"]] },
      { q: "Gooseflesh skin", opts: [[0, "Smooth skin"], [3, "Piloerection felt or hairs standing up"], [5, "Prominent piloerection"]] }
    ],
    bands: [[0, 4, "No active withdrawal", ""], [5, 12, "Mild withdrawal", ""], [13, 24, "Moderate withdrawal", "Buprenorphine is usually started at about 8–12 or more."], [25, 36, "Moderately severe withdrawal", ""], [37, 48, "Severe withdrawal", ""]]
  },
  {
    id: "crdpss", name: "Psychosis severity", full: "Clinician-Rated Dimensions of Psychosis Symptom Severity (DSM-5-TR Section III)", for: "psychosis",
    source: "DSM-5-TR Section III assessment measure; rate the most severe level in the past 7 days. Reproducible for clinical use.",
    items: [
      { q: "I. Hallucinations", max: 4, anchors: [[0, "Not present"], [1, "Equivocal (severity or duration not enough to be psychosis)"], [2, "Mild: little pressure to act on voices, not very bothered"], [3, "Moderate: some pressure to respond, or somewhat bothered"], [4, "Severe: severe pressure to respond, or very bothered"]] },
      { q: "II. Delusions", max: 4, anchors: [[0, "Not present"], [1, "Equivocal"], [2, "Mild: little pressure to act, not very bothered"], [3, "Moderate: some pressure to act, or somewhat bothered"], [4, "Severe: severe pressure to act, or very bothered"]] },
      { q: "III. Disorganized speech", max: 4, anchors: [[0, "Not present"], [1, "Equivocal"], [2, "Mild: some difficulty following"], [3, "Moderate: often difficult to follow"], [4, "Severe: almost impossible to follow"]] },
      { q: "IV. Abnormal psychomotor behavior", max: 4, anchors: [[0, "Not present"], [1, "Equivocal"], [2, "Mild: occasional abnormal or bizarre behavior or catatonia"], [3, "Moderate: frequent"], [4, "Severe: almost constant"]] },
      { q: "V. Negative symptoms (restricted emotional expression or avolition)", max: 4, anchors: [[0, "Not present"], [1, "Equivocal"], [2, "Mild decrease"], [3, "Moderate decrease"], [4, "Severe decrease"]] },
      { q: "VI. Impaired cognition", max: 4, anchors: [[0, "Not present"], [1, "Equivocal"], [2, "Mild: some reduction in function, about 0.5–1 SD below expected"], [3, "Moderate: clear reduction, about 1–2 SD below"], [4, "Severe: severe reduction, more than 2 SD below"]] },
      { q: "VII. Depression", max: 4, anchors: [[0, "Not present"], [1, "Equivocal: occasional sadness or hopelessness"], [2, "Mild: frequent sadness, guilt or worthlessness, with some preoccupation"], [3, "Moderate: frequent deep sadness, preoccupied with guilt"], [4, "Severe: deep sadness every day, guilt or worthlessness of delusional proportions"]] },
      { q: "VIII. Mania", max: 4, anchors: [[0, "Not present"], [1, "Equivocal: occasional elevated or irritable mood"], [2, "Mild: frequent elevated, expansive or irritable mood or restlessness"], [3, "Moderate: frequent and extensive elevated mood or restlessness"], [4, "Severe: daily and extreme"]] }
    ],
    noTotal: true,
    note: "DSM-5-TR lets you specify current severity of schizophrenia with these eight dimensions; the diagnosis does not require them. Report each domain rather than a total."
  }
];
