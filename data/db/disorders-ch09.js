/* Disorder library: Chapter 9, Somatic Symptom and Related Disorders (DSM-5-TR pp. 349–370). */
SP.disorders = (SP.disorders || []).concat([
  {
    id: "ssd", ch: "ch09", sec: "s9-ssd-criteria", pages: "351–357", critPages: "351",
    name: "Somatic symptom disorder", code: "F45.1", aka: ["SSD", "somatization disorder", "pain disorder", "hypochondriasis (with symptoms)"],
    essence: "One or more **distressing somatic symptoms** with **excessive thoughts, feelings or behaviors** about them (disproportionate thoughts, high health anxiety, or excessive time and energy), persisting typically **more than 6 months**.",
    duration: "Typically more than 6 months (the symptomatic state persists)",
    functioning: "Often marked; health status more than 2 SD below norms",
    mood: "Health anxiety, demoralization; anxiety and depression each up to 50%",
    criteria: [
      ["A", "One or more somatic symptoms that are distressing or disrupt daily life."],
      ["B", "Excessive thoughts, feelings or behaviors: disproportionate thoughts about seriousness, persistently high health anxiety, or excessive time and energy (one or more)."],
      ["C", "The state of being symptomatic is persistent, typically more than 6 months."]
    ],
    specifiers: ["With predominant pain", "Persistent", "Severity: mild (one B), moderate (two or more B), severe (two or more B plus multiple complaints or one very severe symptom)"],
    epi: [["General population", "About 4%–6%"], ["Primary care", "10%–20%"], ["Specialty clinics", "40%–60%"], ["Sex", "Likely more common in women"]],
    risk: ["Negative affectivity (neuroticism); comorbid anxiety or depression.", "Low education and socioeconomic status; recent stressful events; childhood sexual abuse.", "Persistence: illness benefits, chronic illness, unemployment, older age, female sex."],
    differential: [
      { id: "iad", how: "No or mild somatic symptoms; fear of having a disease." },
      { id: "fnd", how: "Loss of function with positive incompatible signs; both can be diagnosed." },
      { id: "pfamc", how: "A medical condition worsened by psychological factors; thoughts need not be excessive." },
      { id: "panic-disorder", how: "Symptoms and health fear in acute attacks." },
      { id: "gad", how: "Worry about many domains, not just health." },
      { id: "mdd", how: "Depressed mood or anhedonia; somatic idioms common." },
      { id: "delusional-disorder", how: "Somatic conviction of delusional intensity." },
      { id: "bdd", how: "Appearance, not illness." },
      { id: "factitious", how: "Symptoms are deceptively falsified." }
    ],
    pearls: ["Not a diagnosis of exclusion: Criterion B is the core.", "Can coexist with real medical illness.", "Many with IBS or fibromyalgia do not qualify.", "Linked to suicidal thoughts and attempts."],
    cmp: { symptoms: "Distressing somatic symptoms + excessive thoughts, feelings, behaviors", exclusions: "None by exclusion; medical illness allowed", prevalence: "4%–6% general; 10%–20% primary care", course: "Chronic, fluctuating; >6 months" },
    clues: [["Core picture", "After an uncomplicated MI, daily chest tightness, hourly pulse checks, nine ED visits and stopped working"], ["Code", "F45.1"]]
  },
  {
    id: "iad", ch: "ch09", sec: "s9-iad-criteria", pages: "357–360", critPages: "357",
    name: "Illness anxiety disorder", code: "F45.21", aka: ["IAD", "hypochondriasis", "health anxiety"],
    essence: "**Preoccupation with having or acquiring a serious illness**, with **no or mild** somatic symptoms, high health anxiety, and **excessive checking or maladaptive avoidance**, for at least **6 months**.",
    duration: "At least 6 months (the feared illness may change)",
    functioning: "Role impairment, strained relationships; may become an invalid",
    mood: "High health anxiety; easily alarmed; two-thirds have another major mental disorder",
    criteria: [
      ["A", "Preoccupation with having or acquiring a serious illness."],
      ["B", "Somatic symptoms absent or mild; if a condition or high risk is present, preoccupation is clearly excessive."],
      ["C", "High anxiety about health; easily alarmed."],
      ["D", "Excessive health-related behaviors or maladaptive avoidance."],
      ["E", "At least 6 months; the specific illness may change."],
      ["F", "Not better explained by SSD, panic disorder, GAD, BDD, OCD or delusional disorder, somatic type."]
    ],
    specifiers: ["Care-seeking type", "Care-avoidant type"],
    epi: [["Community", "1.3%–10% (health anxiety or disease conviction)"], ["Ambulatory medical", "2.2%–8%, mean about 3%"], ["Specialty clinics", "About one-fifth"], ["Sex", "Similar in men and women"]],
    risk: ["Major life stress or a serious but benign health threat.", "Childhood abuse, serious childhood illness, parental illness or death.", "Onset in early to middle adulthood; transient in one-third to one-half."],
    differential: [
      { id: "ssd", how: "Distressing somatic symptoms are present." },
      { name: "Adjustment disorder", how: "Time-limited reaction to a real serious illness; IAD if disproportionate beyond 6 months." },
      { id: "panic-disorder", how: "Acute, episodic health fear." },
      { id: "gad", how: "Many worries, health only one." },
      { id: "ocd", how: "Intrusive fear of getting a disease in the future, with compulsions." },
      { id: "mdd", how: "Health rumination only during episodes." },
      { id: "delusional-disorder", how: "Bizarre or fixed somatic conviction." }
    ],
    pearls: ["About one-third of former hypochondriasis.", "Reassurance does not help and may worsen it.", "Dismissive care can miss real illness.", "In older adults, often fear of memory loss."],
    cmp: { symptoms: "Fear of serious illness; no or mild symptoms", exclusions: "SSD, panic, GAD, BDD, OCD, delusional disorder", prevalence: "About 3% in ambulatory care", course: "Chronic, relapsing; ≥6 months" },
    clues: [["Core picture", "A teacher sure she has lymphoma after feeling a normal lymph node, checking her neck all day after normal ultrasounds"], ["Code", "F45.21"]]
  },
  {
    id: "fnd", ch: "ch09", sec: "s9-fnd-criteria", pages: "360–364", critPages: "360",
    name: "Functional neurological symptom disorder (conversion disorder)", code: "F44.4–F44.7",
    codes: [["F44.4", "With weakness or paralysis, abnormal movement, swallowing or speech symptoms", "Motor"], ["F44.5", "With attacks or seizures", "Functional (nonepileptic) seizures"], ["F44.6", "With anesthesia or sensory loss, or special sensory symptom", "Sensory"], ["F44.7", "With mixed symptoms", "More than one type"]],
    aka: ["FND", "conversion disorder", "psychogenic nonepileptic seizures", "functional seizures", "hysteria"],
    essence: "Altered **voluntary motor or sensory** function with **positive clinical findings incompatible** with recognized neurological or medical conditions; a **rule-in** diagnosis, no stressor required.",
    duration: "Acute episode <6 months; persistent ≥6 months",
    functioning: "Disability can equal comparable neurological disease",
    mood: "Anxiety and depression common; dissociative symptoms frequent",
    criteria: [
      ["A", "One or more symptoms of altered voluntary motor or sensory function."],
      ["B", "Clinical findings show incompatibility with recognized neurological or medical conditions."],
      ["C", "Not better explained by another medical or mental disorder."],
      ["D", "Distress or impairment, or warrants medical evaluation."]
    ],
    specifiers: ["Acute episode (<6 months) or persistent (≥6 months)", "With psychological stressor (specify) or without psychological stressor"],
    epi: [["Incidence", "4–12 per 100,000 a year (persistent)"], ["Neurology clinics", "5%–15%"], ["Sex", "Women 2–3 times more"], ["Onset", "Attacks 20–29; motor 30–39"]],
    risk: ["Maladaptive personality traits, especially emotional instability.", "Childhood abuse and neglect; stressful events including physical injury.", "Neurological disease: about 1 in 5 with functional seizures also have epilepsy."],
    differential: [
      { name: "Neurological disease", how: "Main differential; rarely missed at follow-up but reassess progression; can coexist." },
      { id: "ssd", how: "Focus on distress; incompatibility usually not demonstrable. Both can be diagnosed." },
      { id: "factitious", how: "Definite evidence of feigning." },
      { id: "did", how: "Dissociative symptoms common; diagnose both if criteria met." },
      { id: "panic-disorder", how: "Retained awareness with cardiorespiratory symptoms." },
      { id: "mdd", how: "General limb heaviness, not focal weakness." }
    ],
    pearls: ["Hoover’s sign, entrainment, eye closure in attacks.", "La belle indifférence and secondary gain are nonspecific.", "Stressor absent in up to half.", "Good prognosis: short duration, agreeing with diagnosis."],
    cmp: { symptoms: "Motor or sensory loss with incompatible signs", exclusions: "Better explained by another medical or mental disorder", prevalence: "5%–15% of neurology outpatients", course: "Transient or persistent" },
    clues: [["Core picture", "A worker with a weak leg after a minor fall, positive Hoover’s sign and normal MRI"], ["Codes", "F44.4 motor · F44.5 seizures · F44.6 sensory · F44.7 mixed"]]
  },
  {
    id: "pfamc", ch: "ch09", sec: "s9-pfamc", pages: "364–367", critPages: "364–365",
    name: "Psychological factors affecting other medical conditions", code: "F54", aka: ["PFAMC", "psychosomatic"],
    essence: "A **medical condition** is **adversely affected** by psychological or behavioral factors that influence its course, interfere with treatment, add health risks, or worsen its pathophysiology.",
    duration: "No duration criterion",
    functioning: "Ranges from increased risk to life-threatening",
    mood: "Distress, coping styles, denial, depressive or anxiety symptoms below disorder thresholds",
    criteria: [
      ["A", "A medical symptom or condition (other than a mental disorder) is present."],
      ["B", "Psychological or behavioral factors adversely affect it: course, treatment, health risks or pathophysiology."],
      ["C", "Not better explained by another mental disorder."]
    ],
    specifiers: ["Severity: mild, moderate, severe, extreme"],
    epi: [["Prevalence", "Unclear; more common than somatoform diagnoses in US insurance data"], ["Age", "Across the lifespan"]],
    risk: ["Stress, coping style, denial, nonadherence, personality traits.", "Examples: anxiety and asthma, Takotsubo, insulin manipulation, denial of chest pain."],
    differential: [
      { name: "Mental disorder due to another medical condition", how: "Reversed arrow: the medical condition causes the mental symptoms." },
      { id: "adjustment", how: "Psychological reaction to the medical condition as a stressor." },
      { id: "ssd", how: "Excessive thoughts, feelings, behaviors about symptoms." },
      { id: "iad", how: "Worry about having a disease, usually without serious disease." }
    ],
    pearls: ["Mind → body: the reverse of “due to another medical condition.”", "For factors below a mental disorder threshold.", "Culturally sanctioned healing is not pathologized."],
    cmp: { symptoms: "Psychological factors worsening a medical condition", exclusions: "Another mental disorder better explains it", prevalence: "Unclear", course: "Varies with the medical condition" },
    clues: [["Core picture", "Angina whenever he is enraged; anxiety triggering asthma attacks"], ["Code", "F54"]]
  },
  {
    id: "factitious", ch: "ch09", sec: "s9-factitious", pages: "367–370", critPages: "367",
    name: "Factitious disorder", code: "F68.10 / F68.A",
    codes: [["F68.10", "Factitious disorder imposed on self", "Falsifies own illness"], ["F68.A", "Factitious disorder imposed on another", "Perpetrator diagnosed; victim may get an abuse code"]],
    aka: ["Munchausen syndrome", "Munchausen by proxy", "factitious disorder by proxy", "medical child abuse"],
    essence: "**Deceptive falsification** or **induction** of signs, symptoms, injury or disease in oneself or another, presented as illness, **even without obvious external rewards**.",
    duration: "Single or recurrent episodes",
    functioning: "Repeated hospitalizations, procedures and harm; imposed on another is abuse",
    mood: "Variable; motivations are not required for diagnosis",
    criteria: [
      ["A", "Falsification of signs or symptoms, or induction of injury or disease, with identified deception."],
      ["B", "Presents self (or another, the victim) as ill, impaired or injured."],
      ["C", "Deception evident even without obvious external rewards."],
      ["D", "Not better explained by another disorder (e.g., psychosis)."]
    ],
    specifiers: ["Single episode", "Recurrent episodes"],
    epi: [["Prevalence", "Unknown; about 1% of hospital psychiatric consultations"], ["Sex", "About two-thirds women"], ["Onset", "Early adulthood, often after a hospitalization"]],
    risk: ["A hospitalization (own or a child’s) often precedes onset.", "Course usually intermittent; may become lifelong."],
    differential: [
      { name: "Malingering", how: "Deception for external rewards; can coexist." },
      { id: "ssd", how: "Excessive care seeking without deception." },
      { id: "fnd", how: "Genuine, not feigned, incompatible symptoms." },
      { name: "Borderline personality disorder", how: "Self-harm without deceptive presentation as illness." },
      { name: "Lying to avoid liability", how: "A caregiver protecting themselves has an external reward." }
    ],
    pearls: ["Based on objective falsification, not inferred motives.", "Real illness can coexist.", "Imposed on another: the perpetrator is diagnosed.", "Methods: exaggeration, fabrication, simulation, induction."],
    cmp: { symptoms: "Falsified or induced illness, deceptive", exclusions: "External reward explains it; psychosis", prevalence: "≈1% of hospital consultations", course: "Intermittent episodes" },
    clues: [["Core picture", "A nurse with recurrent hypoglycemia, high insulin and low C-peptide, no external gain"], ["Codes", "F68.10 self · F68.A another"]]
  },
  {
    id: "other-specified-somatic", ch: "ch09", sec: "s9-other", pages: "370", critPages: "370",
    name: "Other specified somatic symptom and related disorder", code: "F45.8", aka: ["pseudocyesis", "brief somatic symptom disorder", "brief illness anxiety disorder"],
    essence: "Somatic symptom and related presentations that cause distress or impairment but do not meet full criteria, with the **reason** recorded.",
    duration: "Varies (brief forms under 6 months)",
    functioning: "Distress or impairment required",
    mood: "Varies",
    criteria: [
      ["1", "Brief somatic symptom disorder: under 6 months."],
      ["2", "Brief illness anxiety disorder: under 6 months."],
      ["3", "Illness anxiety disorder without excessive health-related behaviors (Criterion D not met)."],
      ["4", "Pseudocyesis: false belief of pregnancy with objective signs and reported symptoms."]
    ],
    specifiers: [],
    epi: [["Prevalence", "Not established"]],
    risk: ["Varies by presentation."],
    differential: [
      { id: "ssd", how: "Full criteria for 6 months or more." },
      { id: "iad", how: "Full criteria including health behaviors, 6 months or more." },
      { id: "unspecified-somatic", how: "Reason not specified; only in decidedly unusual situations." }
    ],
    pearls: ["Pseudocyesis requires objective signs.", "Record the reason, e.g., “brief illness anxiety disorder.”"],
    cmp: { symptoms: "Subthreshold or atypical somatic presentation", exclusions: "Full criteria for another disorder", prevalence: "Unknown", course: "Varies" },
    clues: [["Core picture", "A woman with amenorrhea, abdominal swelling and felt fetal movements, but negative pregnancy tests"], ["Code", "F45.8"]]
  },
  {
    id: "unspecified-somatic", ch: "ch09", sec: "s9-other", pages: "370", critPages: "370",
    name: "Unspecified somatic symptom and related disorder", code: "F45.9", aka: [],
    essence: "Somatic symptom and related symptoms causing distress or impairment without full criteria; **only in decidedly unusual situations** with insufficient information.",
    duration: "Not specified",
    functioning: "Distress or impairment required",
    mood: "Varies",
    criteria: [["", "Should not be used unless there are decidedly unusual situations with insufficient information for a more specific diagnosis."]],
    specifiers: [],
    epi: [["Prevalence", "Not established"]],
    risk: ["Not applicable."],
    differential: [{ id: "other-specified-somatic", how: "Use when the reason can be stated." }],
    pearls: ["Stricter wording than in most chapters."],
    cmp: { symptoms: "Insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
    clues: [["Code", "F45.9"]]
  }
]);
SP.comparePresets = (SP.comparePresets || []).concat([
  { label: "Somatic symptom vs illness anxiety disorder", ids: ["ssd", "iad"] },
  { label: "Somatic symptom disorder vs FND", ids: ["ssd", "fnd"] },
  { label: "Illness anxiety disorder vs OCD", ids: ["iad", "ocd"] },
  { label: "Illness anxiety vs panic disorder", ids: ["iad", "panic-disorder"] },
  { label: "FND vs factitious disorder", ids: ["fnd", "factitious"] },
  { label: "F54 vs adjustment disorder", ids: ["pfamc", "adjustment"] }
]);
