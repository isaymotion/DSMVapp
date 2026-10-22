/* Chapter 9 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch09", "vignettes", [
  {
    "id": "v9-01",
    "tag": "SSD with medical illness",
    "stem": "A 58-year-old man had a small inferior myocardial infarction treated with a stent 14 months ago. Echocardiogram and stress tests since are normal. He has daily left-sided chest twinges and fatigue, checks his blood pressure 15 times a day, has been to the emergency department 11 times, refuses to climb stairs and has taken early retirement. Each normal test relieves him for a day. He is not depressed and has no panic attacks.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "No mental disorder: his symptoms are explained by coronary disease",
      "Somatic symptom disorder",
      "Illness anxiety disorder",
      "Psychological factors affecting other medical conditions",
      "Panic disorder"
    ],
    "answer": 1,
    "why": "Distressing symptoms with **excessive** thoughts, anxiety and time devoted to them for more than 6 months. A real medical illness **does not exclude** somatic symptom disorder; his reaction is clearly disproportionate.",
    "whyNot": [
      "His heart disease is stable; the impairment is far beyond what it explains, and Criterion B is met.",
      "Correct.",
      "He has distressing somatic symptoms, not just worry with no or mild symptoms.",
      "F54 is for psychological factors that worsen the heart disease itself; his problem is the excessive response to symptoms.",
      "There are no discrete panic attacks."
    ],
    "then": {
      "q": "What severity and specifiers apply?",
      "choices": [
        "Severe, persistent",
        "Mild",
        "Moderate, with predominant pain",
        "Severe, with predominant pain",
        "Moderate, persistent"
      ],
      "answer": 0,
      "why": "All three Criterion B features plus multiple complaints (chest twinges, fatigue) = **severe**; severe symptoms, marked impairment and long duration = **persistent**. Pain is not the predominant symptom.",
      "whyNot": [
        "Correct.",
        "Mild needs only one B feature.",
        "He has three B features with multiple complaints.",
        "Pain does not predominate; fatigue and limitation are equally prominent.",
        "Three B features with multiple complaints is severe, not moderate."
      ]
    }
  },
  {
    "id": "v9-02",
    "tag": "SSD vs IAD",
    "stem": "A 29-year-old graduate student has spent 18 months convinced she has multiple sclerosis after reading about it online. She has no symptoms apart from occasional normal muscle twitches. She checks her balance on one leg many times a day, has had two brain MRIs and asks her partner nightly for reassurance. When tests are normal she worries they were done too early.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Delusional disorder, somatic type",
      "Somatic symptom disorder",
      "Obsessive-compulsive disorder",
      "Illness anxiety disorder, care-seeking type",
      "Generalized anxiety disorder"
    ],
    "answer": 3,
    "why": "Preoccupation with **having** a serious illness, **no or mild** symptoms, high health anxiety, checking and repeated tests, over 6 months: **IAD (F45.21), care-seeking type**.",
    "whyNot": [
      "She accepts the possibility the tests are right; her belief is not delusional.",
      "Somatic symptom disorder needs distressing somatic symptoms; normal twitches are mild sensations.",
      "Her concern is having MS now, not intrusive fears of getting it, and she has no other obsessions.",
      "Correct.",
      "Her worry is focused on one health concern, not many domains."
    ]
  },
  {
    "id": "v9-03",
    "tag": "IAD vs OCD",
    "stem": "A 24-year-old man washes his hands 60 times a day and avoids public restrooms because of intrusive images of catching hepatitis from surfaces. He knows the fears are excessive. He also arranges his books symmetrically and checks the stove repeatedly. He does not believe he currently has hepatitis.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Obsessive-compulsive disorder",
      "Illness anxiety disorder",
      "Somatic symptom disorder",
      "Specific phobia, other type",
      "Generalized anxiety disorder"
    ],
    "answer": 0,
    "why": "Intrusive fears of **getting** a disease in the future, with **compulsions** and other obsessions, point to **OCD**. Illness anxiety disorder is preoccupation with **having** a disease now.",
    "whyNot": [
      "Correct.",
      "He does not believe he has a disease; his thoughts are intrusive and neutralized by washing.",
      "He has no distressing somatic symptoms.",
      "Avoidance alone without obsessions and compulsions would suggest phobia; here there are multiple obsessions.",
      "His worries are intrusive images with rituals, not broad worry."
    ]
  },
  {
    "id": "v9-04",
    "tag": "IAD vs adjustment",
    "stem": "A 46-year-old woman had a breast lump excised 7 weeks ago; it was benign. Since then she checks her breasts daily, has trouble sleeping and worries she will develop cancer. Her concern is lessening week by week, and she has returned to work.",
    "q": "What is the best diagnosis now?",
    "choices": [
      "Brief illness anxiety disorder",
      "Illness anxiety disorder",
      "Somatic symptom disorder",
      "Generalized anxiety disorder",
      "Adjustment disorder with anxiety, or no disorder if not impairing"
    ],
    "answer": 4,
    "why": "Health anxiety after a real health scare is often **time-limited**; if impairing, it is an **adjustment disorder**. Illness anxiety disorder needs at least **6 months** of disproportionate concern.",
    "whyNot": [
      "Other specified brief IAD is for disproportionate concern under 6 months; hers is a reasonable, resolving reaction to a stressor.",
      "Only 7 weeks have passed, and the concern is a proportionate, fading reaction to a real threat.",
      "She has no distressing somatic symptoms.",
      "Her worry is about one health concern, and it is not 6 months long.",
      "Correct."
    ]
  },
  {
    "id": "v9-05",
    "tag": "Care-avoidant",
    "stem": "A 52-year-old man has been convinced for years that he has colon cancer because his father died of it. He has no symptoms. He refuses a colonoscopy, will not visit his father’s grave or hospitals, changes the channel when cancer is mentioned and thinks about it for hours daily.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Specific phobia",
      "Illness anxiety disorder, care-seeking type",
      "Illness anxiety disorder, care-avoidant type",
      "Prolonged grief disorder",
      "Somatic symptom disorder"
    ],
    "answer": 2,
    "why": "A strong family history (high risk) is present, but the preoccupation is **clearly excessive**. He **avoids** care, meeting Criterion D through **maladaptive avoidance**: **care-avoidant type**.",
    "whyNot": [
      "His avoidance is driven by fear of having cancer, with preoccupation and health anxiety, not a circumscribed phobic object.",
      "He rarely uses medical care.",
      "Correct.",
      "There is no persistent longing for his father or grief-related distress described.",
      "He has no somatic symptoms."
    ]
  },
  {
    "id": "v9-06",
    "tag": "FND weakness",
    "stem": "A 35-year-old woman awoke with left arm and leg weakness 2 months ago. CT and MRI of the brain and spine are normal. On examination, left hip extension is weak but becomes strong when she flexes her right hip against resistance. She drags her left leg rather than circumducting it. She denies any recent stress.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Functional neurological symptom disorder is excluded because there is no stressor",
      "Functional neurological symptom disorder, with weakness or paralysis, acute episode, without psychological stressor",
      "Somatic symptom disorder",
      "Factitious disorder",
      "Malingering"
    ],
    "answer": 1,
    "why": "A **positive Hoover’s sign** and a dragging gait show incompatibility with neurological disease. A stressor is **not required** (absent in up to half). Under 6 months = **acute episode**: **F44.4**.",
    "whyNot": [
      "DSM-5 removed the stressor requirement; it is recorded with a specifier.",
      "Correct.",
      "The main problem is loss of motor function with positive signs; SSD centers on distress and excessive concern.",
      "There is no evidence of deceptive falsification.",
      "There is no evidence of feigning or external reward."
    ]
  },
  {
    "id": "v9-07",
    "tag": "Functional seizures",
    "stem": "A 23-year-old woman has weekly episodes of whole-body shaking lasting 15–20 minutes. Her eyes are tightly closed and she resists opening them. Afterward she can recall people talking to her. Video-EEG during a typical event shows normal background rhythm. She has a history of childhood abuse and a past episode of depersonalization.",
    "q": "What is the most appropriate code?",
    "choices": [
      "F44.7",
      "F44.4",
      "F44.6",
      "F44.5",
      "G40.909 (epilepsy)"
    ],
    "answer": 3,
    "why": "Functional (nonepileptic) seizures with **eye closure**, **preserved awareness** and duration over 5 minutes, with a normal ictal EEG: **F44.5, with attacks or seizures**.",
    "whyNot": [
      "F44.7 is mixed symptoms.",
      "F44.4 covers weakness, abnormal movement, swallowing and speech, not attacks.",
      "F44.6 is sensory loss.",
      "Correct.",
      "The features and normal ictal EEG argue against epilepsy, though about 1 in 5 with functional seizures also have epilepsy."
    ]
  },
  {
    "id": "v9-08",
    "tag": "FND diagnostic error",
    "stem": "A resident wants to diagnose functional neurological symptom disorder in a 40-year-old man with intermittent double vision and leg numbness because “the MRI is normal, the symptoms look bizarre, and he seems strangely calm about them.”",
    "q": "What is the best response?",
    "choices": [
      "The diagnosis needs positive clinical findings of incompatibility; normal tests, bizarre symptoms and calmness are not enough",
      "The diagnosis is confirmed by la belle indifférence",
      "The diagnosis is confirmed once all tests are normal",
      "A psychological stressor must be found first",
      "The diagnosis should be factitious disorder"
    ],
    "answer": 0,
    "why": "FND is a **rule-in** diagnosis based on **positive signs**. La belle indifférence is **nonspecific**, and normal tests do not make the diagnosis. Fluctuating diplopia and numbness also call for considering multiple sclerosis.",
    "whyNot": [
      "Correct.",
      "La belle indifférence should not be used to make the diagnosis.",
      "FND is not a diagnosis of exclusion.",
      "A stressor is not required.",
      "There is no evidence of deception."
    ]
  },
  {
    "id": "v9-09",
    "tag": "FND tremor",
    "stem": "A 44-year-old woman has a right-hand tremor that began suddenly after a car accident 9 months ago. Its frequency varies. When asked to tap a fast rhythm with her left hand, the right tremor speeds up to match the tapping, then stops briefly.",
    "q": "Which statement is correct?",
    "choices": [
      "This indicates Parkinson disease",
      "This indicates essential tremor",
      "This proves she is feigning",
      "The diagnosis requires that she show la belle indifférence",
      "This is entrainment, a positive sign of functional tremor; the specifier is persistent, with psychological stressor"
    ],
    "answer": 4,
    "why": "**Entrainment** and variable frequency support **functional tremor (F44.4)**. Over 6 months = **persistent**; the accident can be recorded as a stressor.",
    "whyNot": [
      "Parkinsonian tremor does not adopt another limb’s rhythm.",
      "Essential tremor does not entrain to a copied rhythm.",
      "Positive functional signs show incompatibility, not intent.",
      "La belle indifférence is nonspecific and not required.",
      "Correct."
    ]
  },
  {
    "id": "v9-10",
    "tag": "FND prognosis",
    "stem": "A 30-year-old man with functional leg weakness for 3 years receives disability benefits, has a long-standing pattern of emotional instability, and rejects the diagnosis, saying doctors have missed his disease. A 22-year-old woman has had functional weakness for 4 weeks and says the explanation “makes sense.”",
    "q": "Which statement about prognosis is correct?",
    "choices": [
      "Disability benefits improve prognosis by reducing stress",
      "The man has better prognostic factors because he is male",
      "The woman has better prognostic factors: short duration and agreement with the diagnosis",
      "Prognosis is the same for both",
      "Rejecting the diagnosis predicts recovery"
    ],
    "answer": 2,
    "why": "**Short duration** and **agreement with the diagnosis** are positive factors; **disability benefits**, maladaptive personality traits and comorbid disease are negative.",
    "whyNot": [
      "Disability benefits are a negative prognostic factor.",
      "Sex is not a listed prognostic factor here.",
      "Correct.",
      "Their factors differ markedly.",
      "Agreement with the diagnosis predicts a better outcome."
    ]
  },
  {
    "id": "v9-11",
    "tag": "FND and dissociation",
    "stem": "A 27-year-old woman has functional seizures. During attacks and for hours afterward she feels detached from her body and the world seems unreal, while knowing it is real. This happens frequently outside attacks too and distresses her.",
    "q": "How should this be diagnosed?",
    "choices": [
      "Functional neurological symptom disorder only",
      "Functional neurological symptom disorder and depersonalization/derealization disorder",
      "Depersonalization/derealization disorder only",
      "Dissociative identity disorder",
      "Panic disorder"
    ],
    "answer": 1,
    "why": "Dissociative symptoms are **common** in FND. When criteria for a dissociative disorder are also met, **both** diagnoses are made.",
    "whyNot": [
      "Her depersonalization and derealization also occur outside attacks and meet criteria.",
      "Correct.",
      "Her seizures need their own diagnosis (F44.5).",
      "There are no identity states or recurrent amnesia.",
      "There are no panic attacks."
    ]
  },
  {
    "id": "v9-12",
    "tag": "F54",
    "stem": "A 19-year-old with moderate asthma has frequent attacks before exams. His spirometry worsens when he is anxious, and he has needed two emergency visits this term. He does not meet criteria for an anxiety disorder.",
    "q": "What is the diagnosis?",
    "choices": [
      "Somatic symptom disorder",
      "Psychological factors affecting other medical conditions, moderate",
      "Generalized anxiety disorder",
      "Psychological factors affecting other medical conditions, severe",
      "Adjustment disorder"
    ],
    "answer": 3,
    "why": "Anxiety **worsens** the asthma (pathophysiology) below an anxiety disorder threshold: **F54**. Emergency visits = **severe**.",
    "whyNot": [
      "There are no excessive thoughts about symptoms; the issue is the anxiety’s effect on the asthma.",
      "Moderate is aggravation of the condition; emergency visits make it severe.",
      "He does not meet criteria for an anxiety disorder.",
      "Correct.",
      "His anxiety is not a reaction to the asthma as a stressor."
    ]
  },
  {
    "id": "v9-13",
    "tag": "F54 vs adjustment",
    "stem": "A 62-year-old man with stable angina has two problems: his chest pain is reliably triggered when he becomes enraged at his son, and he has constant anticipatory worry that the pain will return at night, which keeps him awake.",
    "q": "Which pairing is correct?",
    "choices": [
      "Rage-triggered angina = psychological factors affecting other medical conditions; anticipatory worry = adjustment disorder",
      "Both are psychological factors affecting other medical conditions",
      "Both are adjustment disorder",
      "Rage-triggered angina = intermittent explosive disorder; worry = illness anxiety disorder",
      "Rage-triggered angina = anxiety disorder due to another medical condition"
    ],
    "answer": 0,
    "why": "The manual’s example: a psychological factor that **precipitates** angina is **F54**; anticipatory anxiety **about** the angina is a reaction to illness, an **adjustment disorder**.",
    "whyNot": [
      "Correct.",
      "The anticipatory anxiety is a reaction to the illness, not a factor worsening it.",
      "Rage triggering angina is a psychological factor affecting the condition.",
      "No recurrent aggressive outbursts are described, and he has serious disease with proportionate worry.",
      "The medical condition is not causing the mental symptoms physiologically."
    ]
  },
  {
    "id": "v9-14",
    "tag": "F54 severity",
    "stem": "A 49-year-old woman with type 2 diabetes believes medications are “poisons” and takes metformin only when her glucose meter reads very high. Her HbA1c has risen from 7.0% to 8.4%. She has not needed emergency care.",
    "q": "What severity of psychological factors affecting other medical conditions applies?",
    "choices": [
      "Not applicable; this is nonadherence, not a mental condition",
      "Moderate",
      "Severe",
      "Extreme",
      "Mild"
    ],
    "answer": 4,
    "why": "Inconsistent adherence that **increases medical risk** without hospitalization is **mild** (the manual’s example is inconsistent adherence with antihypertensives). Moderate would be clear aggravation of the condition.",
    "whyNot": [
      "Interfering with treatment is one of the ways F54 Criterion B is met.",
      "Moderate means the psychological factor aggravates the condition itself (e.g., anxiety worsening asthma).",
      "Severe requires hospitalization or an emergency visit.",
      "Extreme is life-threatening risk.",
      "Correct."
    ]
  },
  {
    "id": "v9-15",
    "tag": "Factitious self",
    "stem": "A 31-year-old laboratory technician has had five admissions for recurrent E. coli bacteremia. Different organisms appear in separate blood cultures; a syringe with brown fluid is found in her bag. She has no lawsuits, disability claims or financial difficulties and becomes angry when confronted, then leaves against medical advice.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Somatic symptom disorder",
      "Malingering",
      "Factitious disorder imposed on self, recurrent episodes",
      "Borderline personality disorder",
      "Illness anxiety disorder"
    ],
    "answer": 2,
    "why": "Objective evidence of **induction** (injecting contaminants) with deception and **no obvious external reward**, two or more events: **F68.10, recurrent episodes**.",
    "whyNot": [
      "Somatic symptom disorder involves authentic suffering without deception.",
      "No external reward is apparent.",
      "Correct.",
      "Self-harm in BPD is not presented deceptively as illness.",
      "She is inducing disease, not worrying about having one."
    ]
  },
  {
    "id": "v9-16",
    "tag": "Factitious on another",
    "stem": "A 4-year-old has had 14 admissions for “recurrent vomiting and hypoglycemia.” Episodes occur only when his mother is present. Testing during an episode shows high insulin with low C-peptide. The mother, a former medical assistant, is attentive and well liked by staff. She has no insurance claims or lawsuits pending.",
    "q": "Who receives which diagnosis?",
    "choices": [
      "Child: factitious disorder imposed on self",
      "Mother: factitious disorder imposed on another (F68.A); child: an abuse code",
      "Mother: malingering",
      "Child: factitious disorder imposed on another",
      "Mother: factitious disorder imposed on self (F68.10)"
    ],
    "answer": 1,
    "why": "The **perpetrator** receives **F68.A**; the child is a victim of abuse and may receive a **child abuse** code. Protecting the child comes first.",
    "whyNot": [
      "The child is not falsifying anything.",
      "Correct.",
      "There is no obvious external reward.",
      "The victim does not receive the factitious diagnosis.",
      "She falsifies illness in another, not herself (both could be given only if she also falsified her own illness)."
    ]
  },
  {
    "id": "v9-17",
    "tag": "Factitious vs malingering",
    "stem": "A 40-year-old man in a homeless shelter comes to the emergency department each winter night complaining of chest pain, asking to be admitted. When offered a shelter bed with a meal instead, his chest pain disappears. ECGs and troponins are normal.",
    "q": "What is the most likely explanation?",
    "choices": [
      "Illness anxiety disorder",
      "Factitious disorder imposed on self",
      "Somatic symptom disorder",
      "Malingering",
      "Panic disorder"
    ],
    "answer": 3,
    "why": "Feigned symptoms with an **obvious external reward** (shelter, food) and immediate resolution when it is obtained: **malingering (Z76.5)**.",
    "whyNot": [
      "He does not express fear of illness.",
      "Factitious disorder involves deception even without obvious external rewards.",
      "The symptom vanishes when the reward is met; there is no authentic distress pattern.",
      "Correct.",
      "There are no attacks of panic described."
    ]
  },
  {
    "id": "v9-18",
    "tag": "Pseudocyesis",
    "stem": "A 33-year-old woman after years of infertility treatment reports morning sickness, breast tenderness and feeling the baby kick. Her abdomen is distended and her periods have stopped. Serum hCG and ultrasound are negative. She accepts the results tearfully but says she “still feels pregnant.”",
    "q": "What is the diagnosis?",
    "choices": [
      "Other specified somatic symptom and related disorder (pseudocyesis)",
      "Delusional disorder, somatic type",
      "Factitious disorder",
      "Illness anxiety disorder",
      "Functional neurological symptom disorder"
    ],
    "answer": 0,
    "why": "A false belief of being pregnant with **objective signs** (amenorrhea, distension) and reported symptoms: **pseudocyesis**, other specified **F45.8**.",
    "whyNot": [
      "Correct.",
      "Objective signs are present, and she accepts the test results; a delusion of pregnancy would lack signs and be fixed.",
      "There is no evidence of deceptive falsification.",
      "She is not fearing a disease.",
      "She has no motor or sensory symptoms."
    ]
  },
  {
    "id": "v9-19",
    "tag": "Brief SSD",
    "stem": "A 38-year-old man developed widespread aches and fatigue after a viral illness 4 months ago. He now spends hours each day researching chronic fatigue, is convinced he has a lasting disease, and has stopped exercising. Tests are normal.",
    "q": "What is the diagnosis?",
    "choices": [
      "Unspecified somatic symptom and related disorder",
      "Somatic symptom disorder",
      "Illness anxiety disorder",
      "Adjustment disorder",
      "Other specified somatic symptom and related disorder: brief somatic symptom disorder"
    ],
    "answer": 4,
    "why": "Somatic symptom disorder criteria are met but for **under 6 months**: **brief somatic symptom disorder**, other specified F45.8.",
    "whyNot": [
      "Unspecified is only for decidedly unusual situations; the reason here can be stated.",
      "Criterion C typically requires more than 6 months.",
      "He has distressing somatic symptoms, not just worry.",
      "His presentation is better captured by excessive thoughts and behaviors about symptoms.",
      "Correct."
    ]
  },
  {
    "id": "v9-20",
    "tag": "Somatic delusion",
    "stem": "A 55-year-old man insists for 8 months that worms are eating his brain and that he can feel them moving. He has picked at his scalp until it bled. Neurological exam, imaging and skin examination are normal. He cannot consider any other explanation.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Somatic symptom disorder",
      "Illness anxiety disorder",
      "Delusional disorder, somatic type",
      "Factitious disorder",
      "Excoriation disorder"
    ],
    "answer": 2,
    "why": "A **fixed, bizarre** somatic belief held with **delusional** intensity points to **delusional disorder, somatic type** (exclude substances and medical causes). IAD beliefs are plausible and the person can acknowledge they may be wrong.",
    "whyNot": [
      "Somatic symptom disorder thoughts are not delusional.",
      "Illness anxiety disorder is excluded by Criterion F when delusional disorder explains it.",
      "Correct.",
      "There is no deception; the self-injury is driven by the delusion.",
      "The picking is driven by a delusion, not a repetitive habit."
    ]
  },
  {
    "id": "v9-21",
    "tag": "SSD in childhood",
    "stem": "A 10-year-old girl has had recurrent abdominal pain for a year, missing 30 school days. Her parents have taken her to four specialists; workup including endoscopy is normal. Her mother keeps a detailed pain diary and fears a missed rare disease. The girl spends afternoons in bed and is anxious whenever her stomach feels “funny.”",
    "q": "Which statement is most accurate?",
    "choices": [
      "Somatic symptom disorder cannot be diagnosed in children",
      "Somatic symptom disorder is possible; in children a single prominent symptom is common and parents’ interpretations shape distress and testing",
      "The mother should be diagnosed with factitious disorder imposed on another",
      "Illness anxiety disorder is most likely",
      "Functional neurological symptom disorder is most likely"
    ],
    "answer": 1,
    "why": "Children commonly present with **recurrent abdominal pain**, often a single symptom; **parents’** interpretations influence distress, school absence and testing.",
    "whyNot": [
      "It can be diagnosed in children.",
      "Correct.",
      "There is no evidence of falsification or induction; anxious parenting is not deception.",
      "She has a distressing somatic symptom, not just worry.",
      "Abdominal pain is not altered motor or sensory function."
    ]
  },
  {
    "id": "v9-22",
    "tag": "Culture",
    "stem": "A 45-year-old man recently arrived from rural South Asia reports weakness, fatigue and burning on urination, which he attributes to losing semen in his urine. He is very worried about his vitality. Urinalysis is normal. He is functioning at work but anxious.",
    "q": "What is the best approach?",
    "choices": [
      "Reassure him and discharge without further assessment",
      "Diagnose delusional disorder",
      "Diagnose factitious disorder",
      "Explore his cultural explanatory model and assess whether Criterion B is met before considering somatic symptom disorder or depression",
      "Diagnose illness anxiety disorder because he has no symptoms"
    ],
    "answer": 3,
    "why": "Culturally specific attributions (such as **semen loss**) shape somatic idioms of distress. Use the Cultural Formulation and check for excessive thoughts and behaviors, depression and anxiety.",
    "whyNot": [
      "Dismissive reassurance misses distress and possible depression or anxiety.",
      "A culturally shared explanation is not a delusion.",
      "There is no evidence of deception.",
      "Correct.",
      "He has somatic symptoms."
    ]
  },
  {
    "id": "v9-23",
    "tag": "Suicide",
    "stem": "A 50-year-old woman with severe somatic symptom disorder, chronic pain and two years of failed treatments says, “If no one can fix this, I don’t see the point.” She has no prior depression diagnosis.",
    "q": "What is the most important next step?",
    "choices": [
      "Ask directly about suicidal thoughts, plans and intent",
      "Reassure her that her tests are normal",
      "Refer her for another specialist opinion",
      "Start an opioid trial",
      "Document secondary gain"
    ],
    "answer": 0,
    "why": "Somatic symptom disorder is associated with **suicidal thoughts and attempts**; illness perceptions and symptom severity are **independent** risk factors beyond depression.",
    "whyNot": [
      "Correct.",
      "Reassurance does not address the risk.",
      "More referrals reinforce the cycle and do not assess safety.",
      "Opioids do not address her risk and may cause harm.",
      "Secondary gain is nonspecific and irrelevant to safety."
    ]
  },
  {
    "id": "v9-24",
    "tag": "Treatment SSD",
    "stem": "A primary care physician asks how to manage a patient with somatic symptom disorder who has had 30 visits this year, each prompted by a new symptom.",
    "q": "Which approach is most appropriate?",
    "choices": [
      "Start a benzodiazepine for health anxiety",
      "Order a full workup for each new symptom",
      "Tell the patient the symptoms are psychological and discharge",
      "Refer to as many specialists as needed until a cause is found",
      "Regular scheduled visits with one physician, a brief focused exam each time, limited testing and CBT referral"
    ],
    "answer": 4,
    "why": "Scheduled visits with **one physician**, validating symptoms while limiting unnecessary tests, and **CBT** are the mainstays. (Treatment knowledge, outside the DSM.)",
    "whyNot": [
      "Benzodiazepines are not a recommended treatment.",
      "Testing every symptom fuels iatrogenic harm and reassurance seeking.",
      "Dismissal damages the relationship and may miss real disease.",
      "Multiple specialists increase fragmentation and testing.",
      "Correct."
    ]
  },
  {
    "id": "v9-25",
    "tag": "Approach",
    "stem": "A 36-year-old woman has functional leg weakness with a positive Hoover’s sign. Months later she is noticed walking normally in the car park when she thinks she is unobserved, and a colleague reports she has filed a large insurance claim for the disability.",
    "q": "What is the most appropriate formulation?",
    "choices": [
      "Hoover’s sign proves she was always feigning",
      "Functional neurological symptom disorder is confirmed by the insurance claim",
      "Definite evidence of feigning for external reward now points to malingering, which can coexist with or replace a functional diagnosis",
      "Factitious disorder imposed on self",
      "Somatic symptom disorder"
    ],
    "answer": 2,
    "why": "Positive functional signs show **incompatibility**, not intent. A clear gap between **observed and reported** function plus an **external reward** is evidence of **malingering**. Avoid conclusions from hearsay alone; document objective observations.",
    "whyNot": [
      "Hoover’s sign occurs in genuine FND.",
      "Secondary gain does not confirm FND; it is nonspecific.",
      "Correct.",
      "An obvious external reward argues for malingering rather than factitious disorder.",
      "There are no excessive thoughts, feelings or behaviors described."
    ]
  }
]);
