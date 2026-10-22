/* Chapter 9 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifier, code).
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var DX = ["Somatic symptom disorder", "Illness anxiety disorder", "Functional neurological symptom disorder", "Psychological factors affecting other medical conditions", "Factitious disorder imposed on self", "Factitious disorder imposed on another", "Other specified somatic symptom and related disorder", "Malingering (not a mental disorder)"];
  var CODES = ["F45.1", "F45.21", "F44.4", "F44.5", "F44.6", "F44.7", "F54", "F68.10", "F68.A", "F45.8", "Z76.5"];
  var SSDSPEC = ["With predominant pain", "Persistent", "None"];
  var SEV = ["Mild", "Moderate", "Severe"];
  var FNDDUR = ["Acute episode", "Persistent"];
  var FNDSTR = ["With psychological stressor", "Without psychological stressor"];
  var F54SEV = ["Mild", "Moderate", "Severe", "Extreme"];
  var EPI = ["Single episode", "Recurrent episodes"];

  SP.add("ch09", "dxline", [
    {
      id: "w9-01", tag: "SSD",
      "case": "A 42-year-old woman has had low back and neck pain for 2 years despite normal imaging. Analgesics do not help. She is persistently convinced the pain means a serious spinal disease and is highly anxious about it, but she still works full time and spends little time on it beyond that. Pain is her only complaint.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Specifiers", options: SSDSPEC, answer: [0], multi: true },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code", options: CODES, answer: 0 }
      ],
      line: "**F45.1** Somatic symptom disorder, with predominant pain, moderate",
      why: "Two Criterion B features (disproportionate thoughts, high anxiety) = **moderate**; pain predominates. Not persistent: impairment is not marked."
    },
    {
      id: "w9-02", tag: "SSD",
      "case": "A 61-year-old man has had dizziness, palpitations, fatigue, bowel complaints and headaches for 4 years. He believes they mean a fatal illness, is anxious about his health all day, spends most of his time on doctor visits and online research, and is unable to work.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Specifiers", options: SSDSPEC, answer: [1], multi: true },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Code", options: CODES, answer: 0 }
      ],
      line: "**F45.1** Somatic symptom disorder, persistent, severe",
      why: "Three B features with **multiple** somatic complaints = **severe**; marked impairment and long duration = **persistent**."
    },
    {
      id: "w9-03", tag: "IAD",
      "case": "A 37-year-old man has feared for 9 months that he has a brain tumor, then ALS. He has no symptoms, checks his grip strength many times a day and has had three neurology consultations and two MRIs.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Type", options: ["Care-seeking type", "Care-avoidant type"], answer: 0 },
        { label: "Code", options: CODES, answer: 1 }
      ],
      line: "**F45.21** Illness anxiety disorder, care-seeking type",
      why: "No symptoms, preoccupation over 6 months with a changing feared illness, checking and repeated care."
    },
    {
      id: "w9-04", tag: "IAD",
      "case": "A 49-year-old woman has been certain for 2 years she has ovarian cancer. She has no symptoms and has not seen a doctor since, for fear of the diagnosis, and avoids hospitals entirely.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Type", options: ["Care-seeking type", "Care-avoidant type"], answer: 1 },
        { label: "Code", options: CODES, answer: 1 }
      ],
      line: "**F45.21** Illness anxiety disorder, care-avoidant type",
      why: "Maladaptive **avoidance** meets Criterion D: care-avoidant type."
    },
    {
      id: "w9-05", tag: "FND",
      "case": "A 28-year-old man developed right leg weakness 5 weeks after his father’s death. Hoover’s sign is positive; MRI is normal.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Code", options: CODES, answer: 2 },
        { label: "Duration", options: FNDDUR, answer: 0 },
        { label: "Stressor", options: FNDSTR, answer: 0 }
      ],
      line: "**F44.4** Functional neurological symptom disorder, with weakness or paralysis, acute episode, with psychological stressor (father’s death)",
      why: "Motor weakness = **F44.4**; under 6 months = **acute**; specify the stressor."
    },
    {
      id: "w9-06", tag: "FND",
      "case": "A 22-year-old woman has had nonepileptic attacks with eye closure and preserved awareness for 2 years. No stressor is identified.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Code", options: CODES, answer: 3 },
        { label: "Duration", options: FNDDUR, answer: 1 },
        { label: "Stressor", options: FNDSTR, answer: 1 }
      ],
      line: "**F44.5** Functional neurological symptom disorder, with attacks or seizures, persistent, without psychological stressor",
      why: "Attacks or seizures = **F44.5**; 6 months or more = **persistent**."
    },
    {
      id: "w9-07", tag: "FND",
      "case": "A 45-year-old woman has had a tubular visual field and inconsistent acuity in both eyes for 3 months, plus functional numbness of the left arm.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Code", options: CODES, answer: 4 },
        { label: "Duration", options: FNDDUR, answer: 0 }
      ],
      line: "**F44.6** Functional neurological symptom disorder, with special sensory symptom and anesthesia or sensory loss, acute episode",
      why: "Visual (special sensory) and numbness (sensory loss) are **both F44.6**, so this is not “mixed”: mixed (F44.7) combines different code types, such as weakness with sensory loss."
    },
    {
      id: "w9-08", tag: "FND",
      "case": "A 33-year-old man has had functional left-sided weakness and functional seizures for 10 months, without a clear stressor.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Code", options: CODES, answer: 5 },
        { label: "Duration", options: FNDDUR, answer: 1 }
      ],
      line: "**F44.7** Functional neurological symptom disorder, with mixed symptoms, persistent, without psychological stressor",
      why: "Motor (F44.4) plus seizures (F44.5) = **mixed, F44.7**."
    },
    {
      id: "w9-09", tag: "F54",
      "case": "A 57-year-old man with known coronary disease ignored crushing chest pain for 2 days because he “refuses to be a burden,” arriving with a large infarct. He has no mental disorder.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Severity", options: F54SEV, answer: 3 },
        { label: "Code", options: CODES, answer: 6 }
      ],
      line: "**F54** Psychological factors affecting other medical conditions, extreme",
      why: "Ignoring heart attack symptoms is the manual’s example of **extreme** (life-threatening) severity."
    },
    {
      id: "w9-10", tag: "Factitious",
      "case": "A 26-year-old woman has had three admissions for unexplained bleeding; she has been taking warfarin secretly. She has no financial or legal incentives.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "Course", options: EPI, answer: 1 },
        { label: "Code", options: CODES, answer: 7 }
      ],
      line: "**F68.10** Factitious disorder imposed on self, recurrent episodes",
      why: "Induction with deception, no obvious reward, two or more events = **recurrent episodes**."
    },
    {
      id: "w9-11", tag: "Factitious",
      "case": "A father adds his own blood to his daughter’s urine samples, leading to cystoscopy. It happened once; there is no external reward.",
      parts: [
        { label: "Diagnosis (father)", options: DX, answer: 5 },
        { label: "Course", options: EPI, answer: 0 },
        { label: "Code", options: CODES, answer: 8 }
      ],
      line: "**F68.A** Factitious disorder imposed on another, single episode (in the father)",
      why: "The **perpetrator** is diagnosed; the daughter may receive an abuse code."
    },
    {
      id: "w9-12", tag: "Other specified",
      "case": "A 30-year-old woman has worried for 3 months that she has a heart condition despite no symptoms; she checks her pulse constantly.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 6 },
        { label: "Code", options: CODES, answer: 9 }
      ],
      line: "**F45.8** Other specified somatic symptom and related disorder, brief illness anxiety disorder",
      why: "Illness anxiety criteria met for **under 6 months**: record the reason after the diagnosis."
    }
  ]);

  SP.add("ch09", "counting", [
    {
      id: "n9-01", tag: "SSD Criterion B",
      "case": "A 40-year-old man with chronic abdominal pain reports:",
      ask: "Somatic symptom disorder Criterion B needs at least one of three features. Mark the findings that count.",
      items: [
        ["Believes the pain must be cancer despite three normal scans", true, "Disproportionate, persistent thoughts about seriousness (B1)."],
        ["Feels anxious about his health most of the day", true, "Persistently high health anxiety (B2)."],
        ["Spends hours daily reading about bowel disease and visiting clinics", true, "Excessive time and energy (B3)."],
        ["The pain is moderate and disrupts his sleep", false, "That is Criterion A (distressing symptom), not B."],
        ["The pain has lasted 8 months", false, "Duration is Criterion C."]
      ],
      met: true,
      why: "Three B features: met, and with multiple complaints this would be severe. Distress (A) and duration (C) are separate criteria."
    },
    {
      id: "n9-02", tag: "SSD severity",
      "case": "A 35-year-old woman whose only complaint is headaches:",
      ask: "Mark each Criterion B feature present. Is the severity at least moderate (two or more)?",
      items: [
        ["Thinks her headaches are likely a sign of a stroke, despite reassurance", true, "B1."],
        ["Is not particularly anxious about her health", false, "B2 absent."],
        ["Cancelled her social life to rest and monitor her symptoms", true, "B3: excessive time and energy."],
        ["Has headaches most days", false, "A somatic symptom (Criterion A), not B."]
      ],
      need: 2,
      met: true,
      why: "Two B features = **moderate**. Severe would need two or more B features **plus multiple somatic complaints** (or one very severe symptom)."
    },
    {
      id: "n9-03", tag: "IAD criteria",
      "case": "A 32-year-old man for 8 months:",
      ask: "Which findings support illness anxiety disorder (A–E)?",
      items: [
        ["Preoccupied that a mole is melanoma, despite a dermatologist’s reassurance", true, "A: preoccupation."],
        ["No itching, bleeding or growth of the mole", true, "B: no or mild symptoms."],
        ["Easily alarmed by news stories about cancer", true, "C: high health anxiety."],
        ["Photographs the mole every day and compares pictures", true, "D: excessive checking."],
        ["Severe daily headaches that prevent work", false, "A distressing symptom points toward somatic symptom disorder, not B of IAD."]
      ],
      met: true,
      why: "A–D are present for over 6 months (E). Severe distressing symptoms would point to somatic symptom disorder instead."
    },
    {
      id: "n9-04", tag: "IAD Criterion D",
      "case": "Which behaviors satisfy illness anxiety disorder Criterion D (excessive health behaviors or maladaptive avoidance)?",
      ask: "Mark those that count.",
      items: [
        ["Checking her throat in the mirror several times a day", true, "Repeated body checking."],
        ["Researching symptoms online for hours", true, "Excessive health-related behavior."],
        ["Avoiding visiting a sick relative for fear of what she might learn about illness", true, "Maladaptive avoidance."],
        ["Attending a routine annual checkup", false, "Normal health behavior."],
        ["Taking prescribed antihypertensive medication", false, "Appropriate care."]
      ],
      met: true,
      why: "Checking, searching and avoidance all count. Without any, use other specified (IAD without excessive health-related behaviors)."
    },
    {
      id: "n9-05", tag: "FND positive signs",
      "case": "A patient with left leg weakness and shaking spells:",
      ask: "Which findings are positive signs of functional neurological symptom disorder?",
      items: [
        ["Hip extension strengthens with contralateral hip flexion against resistance", true, "Hoover’s sign."],
        ["Normal brain MRI", false, "Normal tests support but do not make the diagnosis."],
        ["Eyes tightly closed during a 12-minute shaking spell with recall afterward", true, "Features of functional seizures."],
        ["Appears unconcerned about the weakness", false, "La belle indifférence is nonspecific."],
        ["Is seeking compensation for a workplace fall", false, "Secondary gain is nonspecific."]
      ],
      met: true,
      why: "Only positive examination findings show incompatibility; normal tests, indifference and secondary gain do not."
    },
    {
      id: "n9-06", tag: "F54 Criterion B",
      "case": "Which situations show psychological or behavioral factors adversely affecting a medical condition?",
      ask: "Mark those that fit F54 Criterion B.",
      items: [
        ["Anxiety precipitating asthma attacks", true, "Influences pathophysiology."],
        ["Denial delaying treatment for chest pain", true, "Influences course and treatment."],
        ["Omitting insulin to lose weight (no eating disorder)", true, "Interferes with treatment, adds risk."],
        ["Depression caused by hypothyroidism", false, "The medical condition causes the mental symptoms (due to AMC)."],
        ["Sadness and worry after a new diagnosis of lymphoma", false, "A reaction to illness: adjustment disorder or normal."]
      ],
      met: true,
      why: "F54 runs from mind to body. Body-to-mind causation is “due to another medical condition”; reactions to illness are adjustment."
    },
    {
      id: "n9-07", tag: "Factitious",
      "case": "Which findings support factitious disorder imposed on self?",
      ask: "Mark those that count toward Criteria A–C.",
      items: [
        ["Exogenous insulin found (high insulin, low C-peptide)", true, "Objective evidence of induction."],
        ["Falsified hospital discharge letters", true, "Fabrication with deception."],
        ["No lawsuit, disability claim or other obvious reward", true, "Criterion C."],
        ["Many emergency visits with genuine fear of illness", false, "Care seeking without deception (SSD or IAD)."],
        ["Seeking a sick note to avoid a court appearance", false, "External reward suggests malingering."]
      ],
      met: true,
      why: "Deception must be identified objectively and not explained by an external reward."
    },
    {
      id: "n9-08", tag: "SSD vs medical",
      "case": "A patient with diabetes and widespread pain:",
      ask: "Which features suggest somatic symptom disorder rather than a medical condition alone?",
      items: [
        ["Analgesics never help", true, "Listed distinguishing feature."],
        ["A history of anxiety and depression", true, "History of mental disorders."],
        ["Symptoms persist without any break", true, "Persistence without cessation."],
        ["Pain clearly worse with walking and relieved by rest, with abnormal vascular studies", false, "Clear provoking and relieving factors with objective disease."],
        ["Symptoms flare with stress", true, "Stress is a distinguishing factor."]
      ],
      met: true,
      why: "Clues include ineffective analgesics, mental health history, unclear provoking or relieving factors, persistence without cessation and stress. Criterion B must still be met."
    },
    {
      id: "n9-09", tag: "Other specified",
      "case": "Which presentations are named examples of other specified somatic symptom and related disorder?",
      ask: "Mark the named examples.",
      items: [
        ["Somatic symptom disorder lasting 4 months", true, "Brief somatic symptom disorder."],
        ["Illness anxiety disorder lasting 3 months", true, "Brief illness anxiety disorder."],
        ["Illness anxiety disorder with no checking or avoidance", true, "Without excessive health-related behaviors."],
        ["False belief of pregnancy with amenorrhea and abdominal distension", true, "Pseudocyesis."],
        ["Functional weakness lasting 2 months", false, "That is functional neurological symptom disorder, acute episode."]
      ],
      met: true,
      why: "Four named examples. Functional neurological symptom disorder has no minimum duration; under 6 months is specified as acute."
    },
    {
      id: "n9-10", tag: "IAD Criterion B",
      "case": "A 41-year-old woman has feared stomach cancer for a year. She reports:",
      ask: "Mark the findings compatible with illness anxiety disorder Criterion B (somatic symptoms absent or only mild). Is Criterion B met?",
      items: [
        ["Occasional mild bloating after meals", true, "A mild symptom."],
        ["Belching", true, "A discomfort not indicative of disease."],
        ["Brief dizziness on standing up quickly", true, "A normal physiological sensation."],
        ["Severe daily abdominal pain that keeps her off work", false, "A distressing, impairing symptom."]
      ],
      met: false,
      why: "A **severe, distressing** somatic symptom means Criterion B of IAD is not met; with excessive thoughts and behaviors, consider **somatic symptom disorder** instead."
    }
  ]);
})();
