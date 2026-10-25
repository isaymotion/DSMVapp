/* Chapter 10 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable. */
SP.add("ch10", "vignettes", [
  {
    "id": "v10-01",
    "tag": "Anorexia",
    "stem": "A 15-year-old girl is brought by her parents after fainting at swim practice. Over 9 months she has cut out fats and carbohydrates, swims twice daily and has dropped from the 55th to below the 3rd BMI-for-age percentile. She says she is “a bit soft around the stomach” and refuses to eat when her mother serves pasta. She denies bingeing or vomiting. Pulse 42, temperature 35.6 °C, orthostatic dizziness. Menses stopped 5 months ago.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Anorexia nervosa, binge-eating/purging type",
      "Anorexia nervosa, restricting type",
      "Avoidant/restrictive food intake disorder",
      "Other specified feeding or eating disorder, atypical anorexia nervosa",
      "Major depressive disorder with weight loss"
    ],
    "answer": 1,
    "why": "Restriction to a **significantly low** weight for age, disturbed body experience and weight-preventing behavior, **no binge or purge** in 3 months: **restricting type**.",
    "whyNot": [
      "No bingeing or purging in the last 3 months.",
      "Correct.",
      "She has weight and shape concerns, which exclude ARFID.",
      "Her weight is significantly low, so full anorexia applies.",
      "Mood is not the driver; weight loss serves thinness."
    ],
    "then": {
      "q": "Which finding should prompt immediate medical admission?",
      "choices": [
        "Persistent amenorrhea",
        "Lanugo on the back",
        "Heart rate of 42 with orthostatic symptoms",
        "Hypercholesterolemia",
        "Low-normal T4"
      ],
      "answer": 2,
      "why": "Marked **bradycardia** with **orthostatic instability** and hypothermia signals medical instability needing inpatient care. The other findings are common and expected in starvation."
    }
  },
  {
    "id": "v10-02",
    "tag": "Anorexia B/P",
    "stem": "A 23-year-old woman (BMI 16.3) eats one meal a day. Three times a week she eats a box of cereal and a loaf of bread in an hour, feeling unable to stop, then vomits. She weighs herself 20 times a day and says weight decides her mood. Potassium 2.9 mmol/L, bicarbonate 34 mmol/L.",
    "q": "What is the correct diagnosis?",
    "choices": [
      "Anorexia nervosa, restricting type, moderate",
      "Bulimia nervosa, moderate",
      "Anorexia nervosa and bulimia nervosa",
      "Anorexia nervosa, binge-eating/purging type, moderate",
      "Anorexia nervosa, binge-eating/purging type, severe"
    ],
    "answer": 3,
    "why": "Binges and purges at a **significantly low weight** are anorexia, **binge-eating/purging** type; BMI 16–16.99 = **moderate** (from October 2024, **F50.021**).",
    "whyNot": [
      "She binges and purges.",
      "Bulimia is excluded during anorexia (Criterion E).",
      "The disorders are mutually exclusive in one episode.",
      "Correct.",
      "Severe is BMI 15–15.99."
    ]
  },
  {
    "id": "v10-03",
    "tag": "Atypical anorexia",
    "stem": "A 17-year-old boy with a BMI previously at the 97th percentile lost 22 kg in 8 months by fasting and running. His BMI is now at the 60th percentile. He fears regaining, checks his abdomen in the mirror many times a day and was found to have a pulse of 44 and a phosphate level at the low limit of normal.",
    "q": "Which diagnosis is most accurate?",
    "choices": [
      "Other specified feeding or eating disorder, atypical anorexia nervosa",
      "Anorexia nervosa, restricting type, mild",
      "No eating disorder, since his weight is normal",
      "ARFID",
      "Body dysmorphic disorder"
    ],
    "answer": 0,
    "why": "All anorexia features except weight, which is **above the median** for age: **atypical anorexia nervosa** (F50.89). His bradycardia shows it can be medically dangerous.",
    "whyNot": [
      "Correct.",
      "Youth above the median BMI for age should not receive anorexia nervosa.",
      "Normal weight after major loss with these features is still a disorder, and medically risky.",
      "He fears weight gain.",
      "The concern is about weight and shape, which belongs to the eating disorder."
    ]
  },
  {
    "id": "v10-04",
    "tag": "Bulimia",
    "stem": "A 20-year-old college student of normal weight (BMI 22) has, for 6 months, binged on large amounts of sweets two or three evenings a week, with a sense of losing control, then vomited each time. On the other days she skips meals. She feels worthless when her jeans feel tight. Her dentist noticed erosion of the inner surfaces of her front teeth.",
    "q": "What is the diagnosis and severity?",
    "choices": [
      "Other specified feeding or eating disorder, purging disorder",
      "Bulimia nervosa, moderate",
      "Binge-eating disorder, mild",
      "Anorexia nervosa, binge-eating/purging type",
      "Bulimia nervosa, mild"
    ],
    "answer": 4,
    "why": "Binges and compensation **≥1/week for 3 months** at normal weight with shape-driven self-worth; **2–3** compensatory episodes per week = **mild** (from October 2024, **F50.21**).",
    "whyNot": [
      "She binges.",
      "Moderate needs 4–7 compensatory episodes per week.",
      "She compensates regularly.",
      "Her weight is normal.",
      "Correct."
    ]
  },
  {
    "id": "v10-05",
    "tag": "Bulimia labs",
    "stem": "A 26-year-old woman with bulimia nervosa vomits after binges about 10 times a week. She feels weak and has palpitations. Her parotid glands are swollen and she has calluses on the backs of her fingers.",
    "q": "Which laboratory pattern is most likely?",
    "choices": [
      "Hypernatremia and respiratory alkalosis",
      "Hyperkalemia and metabolic acidosis",
      "Hypokalemia, hypochloremia and metabolic alkalosis",
      "Hypoglycemia and ketoacidosis",
      "Normal electrolytes with high cholesterol only"
    ],
    "answer": 2,
    "why": "Vomiting removes gastric acid and chloride: **hypochloremic, hypokalemic metabolic alkalosis**; hypokalemia can cause **arrhythmias**. Amylase may be raised (salivary).",
    "whyNot": [
      "Not typical of purging.",
      "Potassium falls, and vomiting causes alkalosis.",
      "Correct.",
      "Not the pattern of vomiting.",
      "Purging at this frequency usually changes electrolytes."
    ],
    "then": {
      "q": "What is her bulimia severity?",
      "choices": [
        "Mild",
        "Moderate",
        "Severe",
        "Extreme",
        "Cannot be rated without the binge count"
      ],
      "answer": 2,
      "why": "Severity counts **compensatory behaviors**: 8–13 per week = **severe** (from October 2024, F50.23)."
    }
  },
  {
    "id": "v10-06",
    "tag": "Binge-eating disorder",
    "stem": "A 38-year-old man with a BMI of 33 eats a family-size bag of chips, a pizza and a pint of ice cream in under an hour about five evenings a week, feeling he cannot stop. He eats quickly, alone in his car, until in pain, and feels disgusted afterward. This has lasted 2 years. He has tried several diets but never vomits, uses laxatives or exercises to compensate. He is very distressed.",
    "q": "What is the diagnosis?",
    "choices": [
      "Binge-eating disorder, mild",
      "Binge-eating disorder, moderate",
      "Bulimia nervosa, moderate",
      "Obesity, not a mental disorder",
      "Night eating syndrome"
    ],
    "answer": 1,
    "why": "Recurrent binges with ≥3 features and **marked distress**, ≥1/week for 3 months, no compensation; **4–7** binges per week = **moderate** (from October 2024, **F50.811**).",
    "whyNot": [
      "Mild is 1–3 binges per week.",
      "Correct.",
      "There is no recurrent compensatory behavior.",
      "Obesity is not a mental disorder, but his binges meet BED.",
      "He eats in the evening without waking, in clear binges."
    ]
  },
  {
    "id": "v10-07",
    "tag": "BED vs mood",
    "stem": "A 45-year-old woman has binged several times a week for a year, with loss of control, eating alone and feeling guilty. For the past month she has also had low mood, anhedonia, hypersomnia, guilt and poor concentration most of the day. She does not compensate.",
    "q": "How should this be diagnosed?",
    "choices": [
      "Bulimia nervosa",
      "Major depressive disorder with atypical features only",
      "Binge-eating disorder only",
      "Binge-eating disorder and major depressive disorder",
      "Other specified depressive disorder"
    ],
    "answer": 3,
    "why": "If full criteria for **both** are met, **both** are diagnosed. BED preceded the episode and has its own features.",
    "whyNot": [
      "No compensation.",
      "Her binges have loss of control and predate the episode.",
      "She meets MDD criteria as well.",
      "Correct.",
      "MDD criteria are fully met."
    ]
  },
  {
    "id": "v10-08",
    "tag": "ARFID",
    "stem": "An 8-year-old boy eats only white bread, plain rice, crackers and milk. Since infancy he gags at mixed textures and the smell of vegetables. He has dropped from the 40th to the 5th weight percentile, has low ferritin and needs supplement drinks. He wants to grow tall like his father. Autism screening is negative.",
    "q": "What is the diagnosis?",
    "choices": [
      "Avoidant/restrictive food intake disorder",
      "Anorexia nervosa, restricting type",
      "Developmentally normal picky eating",
      "Pica",
      "Specific phobia, other type"
    ],
    "answer": 0,
    "why": "**Sensory** avoidance with faltering weight, deficiency and supplement dependence, and **no** weight or shape concern: **ARFID (F50.82)**.",
    "whyNot": [
      "Correct.",
      "He has no fear of fatness or body image disturbance.",
      "Picky eating does not cause faltering growth or deficiency.",
      "He eats foods, not nonfood substances.",
      "There is no fear-based avoidance; the problem is sensory."
    ]
  },
  {
    "id": "v10-09",
    "tag": "ARFID vs phobia",
    "stem": "A 28-year-old woman choked on a piece of chicken 6 months ago. Since then she eats only soups and yogurt, cuts everything into tiny pieces, chews each bite many times and has lost 9 kg (BMI 18.0). She is frightened of choking again and has stopped eating at restaurants with friends. She has no concerns about her body shape.",
    "q": "What is the best diagnosis?",
    "choices": [
      "Illness anxiety disorder",
      "Anorexia nervosa",
      "Functional neurological symptom disorder",
      "Social anxiety disorder",
      "Avoidant/restrictive food intake disorder"
    ],
    "answer": 4,
    "why": "Fear of an **aversive consequence** (choking) leading to weight loss and social interference: when the eating problem is the focus of care, diagnose **ARFID** rather than specific phobia.",
    "whyNot": [
      "She fears choking, not having a disease.",
      "No fear of fatness or shape disturbance.",
      "No altered motor or sensory function.",
      "She avoids restaurants because of choking, not evaluation.",
      "Correct."
    ]
  },
  {
    "id": "v10-10",
    "tag": "Pica",
    "stem": "A 31-year-old woman, 24 weeks pregnant, eats several handfuls of laundry starch and a cup of ice daily. She lives in a food desert, and her hemoglobin is 8.9 g/dL with low ferritin. No one in her family or community eats starch. She has abdominal pain and constipation.",
    "q": "Which statement is most accurate?",
    "choices": [
      "This is ARFID",
      "Pica cannot be diagnosed during pregnancy",
      "Pica can be diagnosed because the ingestion poses medical risk",
      "This is a normal pregnancy craving that needs no diagnosis",
      "The correct code is F98.3"
    ],
    "answer": 2,
    "why": "In pregnancy, diagnose pica only when eating nonfood substances **poses medical risk**, as here (anemia, GI symptoms). Adults are coded **F50.89** as printed, **F50.83** from October 2024.",
    "whyNot": [
      "She eats nonfood substances.",
      "Pregnancy does not exclude pica if Criterion D is met.",
      "Correct.",
      "The amount and harm go beyond a craving.",
      "F98.3 is pica in children."
    ]
  },
  {
    "id": "v10-11",
    "tag": "Pica vs anorexia",
    "stem": "A 19-year-old woman with a BMI of 15.8 eats tissues and paper napkins to feel full, says she must lose more weight and avoids all fats.",
    "q": "What is the primary diagnosis?",
    "choices": [
      "Pica",
      "Anorexia nervosa",
      "Pica and anorexia nervosa",
      "Rumination disorder",
      "Factitious disorder"
    ],
    "answer": 1,
    "why": "When nonfood substances are eaten **to control appetite or weight**, anorexia nervosa is the primary diagnosis.",
    "whyNot": [
      "The eating serves weight control.",
      "Correct.",
      "Pica is not added when the behavior is a means of weight control.",
      "She does not regurgitate food.",
      "There is no deception."
    ]
  },
  {
    "id": "v10-12",
    "tag": "Rumination",
    "stem": "A 22-year-old man with mild intellectual developmental disorder brings food back into his mouth after nearly every meal, chews it and swallows it again, appearing calm and content. It has happened for 2 years, several times daily. Upper endoscopy and gastric emptying studies are normal. Staff note he does it more when bored.",
    "q": "What is the diagnosis and the current code?",
    "choices": [
      "Bulimia nervosa",
      "Rumination disorder (F98.3)",
      "Gastroesophageal reflux disease",
      "Rumination disorder (F50.84 from October 2024)",
      "Stereotypic movement disorder only"
    ],
    "answer": 3,
    "why": "Effortless regurgitation for ≥1 month, not medically explained, severe enough for attention in the context of intellectual disability: **rumination disorder**; adults are coded **F50.84** from October 2024 (F98.21 as printed).",
    "whyNot": [
      "There is no binge or weight concern.",
      "F98.3 is pica in children.",
      "Workup excludes it, and there is no nausea or retching.",
      "Correct.",
      "The regurgitation is itself a primary focus needing intervention."
    ]
  },
  {
    "id": "v10-13",
    "tag": "Purging disorder",
    "stem": "A 24-year-old woman of normal weight vomits after every ordinary meal and uses laxatives twice a week to “stay flat.” She has never binged. Her self-esteem depends on her weight. This has continued for a year.",
    "q": "What is the diagnosis?",
    "choices": [
      "Other specified feeding or eating disorder, purging disorder",
      "Bulimia nervosa",
      "Anorexia nervosa, binge-eating/purging type",
      "Rumination disorder",
      "Unspecified feeding or eating disorder"
    ],
    "answer": 0,
    "why": "Recurrent purging to influence weight or shape **without binge eating** at normal weight: **purging disorder** (F50.89).",
    "whyNot": [
      "Correct.",
      "Bulimia requires binges.",
      "Her weight is normal.",
      "The vomiting is deliberate and weight-driven.",
      "The reason can be specified."
    ]
  },
  {
    "id": "v10-14",
    "tag": "Night eating",
    "stem": "A 52-year-old man eats more than half his daily food after dinner and wakes twice a night to eat sandwiches, fully aware, remembering it in the morning and feeling ashamed. He has no binges with loss of control, works days and takes no sleep medicines.",
    "q": "What is the diagnosis?",
    "choices": [
      "Insomnia disorder",
      "Binge-eating disorder",
      "NREM sleep arousal disorder, sleepwalking type, with sleep-related eating",
      "Bulimia nervosa",
      "Other specified feeding or eating disorder, night eating syndrome"
    ],
    "answer": 4,
    "why": "Excessive eating after the evening meal and eating after waking **with awareness and recall**, causing distress, not explained by BED, schedule or medication: **night eating syndrome**.",
    "whyNot": [
      "The main problem is the eating, not sleep.",
      "There are no binges with loss of control.",
      "He is fully aware and remembers it.",
      "No binges or compensation.",
      "Correct."
    ]
  },
  {
    "id": "v10-15",
    "tag": "Bulimia vs Kleine-Levin",
    "stem": "A 16-year-old boy has had three 10-day episodes this year of sleeping 18 hours a day, eating enormous amounts when awake, irritability and disinhibition, with normal behavior between episodes. He has no concern about weight or shape and does not compensate.",
    "q": "What is the most likely explanation?",
    "choices": [
      "Binge-eating disorder",
      "Bulimia nervosa",
      "Kleine-Levin syndrome",
      "Bipolar I disorder",
      "Major depressive disorder with atypical features"
    ],
    "answer": 2,
    "why": "Recurrent **hypersomnia** with **hyperphagia** and disinhibition, normal between episodes, without shape concern: **Kleine-Levin syndrome**.",
    "whyNot": [
      "Overeating is confined to hypersomnolent episodes.",
      "No compensation or shape and weight concern.",
      "Correct.",
      "No mania; he sleeps more, not less.",
      "Episodes are brief and dominated by hypersomnia."
    ]
  },
  {
    "id": "v10-16",
    "tag": "Anorexia vs medical",
    "stem": "A 46-year-old woman has lost 14 kg over 5 months with early satiety and fatigue. She says she would love to regain weight, eats what she can and is frightened by how thin she looks. She has no history of eating problems.",
    "q": "What is the most appropriate next step?",
    "choices": [
      "Diagnose anorexia nervosa, late onset",
      "Full medical evaluation for an occult illness",
      "Diagnose ARFID",
      "Start an antidepressant",
      "Refer for family-based treatment"
    ],
    "answer": 1,
    "why": "Onset after 40, **no fear of gain** and a wish to regain weight point to a **medical** cause (GI disease, cancer, hyperthyroidism).",
    "whyNot": [
      "She lacks fear of gain and body image disturbance.",
      "Correct.",
      "Medical causes must be excluded first.",
      "No depressive syndrome is described.",
      "Family-based treatment is for adolescents with eating disorders."
    ]
  },
  {
    "id": "v10-17",
    "tag": "Anorexia + OCD",
    "stem": "A 21-year-old woman with anorexia nervosa (BMI 16.0) cuts food into tiny pieces and eats in a fixed order. She also spends 3 hours a day checking that the stove and door locks are off and locked, fearing her family will die in a fire.",
    "q": "How should she be diagnosed?",
    "choices": [
      "Obsessive-compulsive personality disorder",
      "Anorexia nervosa only; all rituals are due to starvation",
      "OCD only",
      "Anorexia nervosa and obsessive-compulsive disorder",
      "ARFID and OCD"
    ],
    "answer": 3,
    "why": "Food rituals belong to anorexia, but obsessions and compulsions **unrelated to food, shape or weight** warrant an additional diagnosis of **OCD**.",
    "whyNot": [
      "These are ego-dystonic obsessions and compulsions.",
      "The checking is unrelated to food and is time-consuming.",
      "Her weight and shape concerns meet anorexia.",
      "Correct.",
      "She has fear of fatness, so not ARFID."
    ]
  },
  {
    "id": "v10-18",
    "tag": "Remission",
    "stem": "A 27-year-old woman treated for anorexia nervosa, restricting type, has kept a BMI of 20.5 for 14 months. She eats regular meals but still feels her worth depends on her shape and weighs herself daily.",
    "q": "Which specifier applies?",
    "choices": [
      "In partial remission",
      "In full remission",
      "Atypical anorexia nervosa",
      "Restricting type, mild",
      "No specifier"
    ],
    "answer": 0,
    "why": "Criterion A has not been met for a sustained period, but **Criterion C** persists → **partial remission** (from October 2024, **F50.014**).",
    "whyNot": [
      "Correct.",
      "Full remission requires none of the criteria.",
      "Atypical anorexia is a current presentation with weight loss at normal weight, not recovery.",
      "She no longer has a significantly low weight.",
      "Remission must be specified."
    ]
  },
  {
    "id": "v10-19",
    "tag": "Crossover",
    "stem": "A 22-year-old woman had anorexia nervosa, binge-eating/purging type, at 18. For the past 4 months her BMI has been 21, and throughout that time she has binged and vomited about five times a week, with her mood tied to her weight.",
    "q": "What is the correct diagnosis now?",
    "choices": [
      "Bulimia nervosa and anorexia nervosa",
      "Bulimia nervosa, moderate",
      "Binge-eating disorder",
      "Anorexia nervosa, binge-eating/purging type, mild",
      "Anorexia nervosa, binge-eating/purging type, in partial remission"
    ],
    "answer": 1,
    "why": "After anorexia, bulimia nervosa is diagnosed once **all** its criteria have been met for **3 months** at a weight that is no longer significantly low. Five compensatory episodes a week = **moderate** (from October 2024, **F50.22**).",
    "whyNot": [
      "The disorders are mutually exclusive.",
      "Correct.",
      "She compensates.",
      "Her weight is no longer significantly low.",
      "Her weight is normal and she now meets all bulimia criteria for over 3 months; remission specifiers do not replace a current disorder."
    ]
  },
  {
    "id": "v10-20",
    "tag": "Substances",
    "stem": "A 25-year-old woman (BMI 16.8) uses methamphetamine daily “to stay thin,” fears becoming fat and says she looks bloated. She also meets criteria for moderate stimulant use disorder.",
    "q": "How should this be diagnosed?",
    "choices": [
      "Stimulant-induced eating disorder",
      "Stimulant use disorder only",
      "Anorexia nervosa and stimulant use disorder",
      "ARFID and stimulant use disorder",
      "Bulimia nervosa"
    ],
    "answer": 2,
    "why": "Stimulant use can be the **persistent behavior that interferes with weight gain** (Criterion B). With low weight and fear of fatness, diagnose **comorbid anorexia nervosa**.",
    "whyNot": [
      "There is no such DSM diagnosis.",
      "Weight concern and body image disturbance point to anorexia.",
      "Correct.",
      "She fears fatness.",
      "Her weight is significantly low and she does not binge."
    ]
  },
  {
    "id": "v10-21",
    "tag": "Culture",
    "stem": "A 20-year-old woman recently arrived from Hong Kong has lost weight to a BMI of 15.9. She says eating makes her stomach bloated and uncomfortable, and denies any fear of fatness. She refuses to gain weight in the clinic, cannot accept that her weight is dangerous, and exercises daily. GI workup is normal.",
    "q": "What diagnosis should be considered?",
    "choices": [
      "ARFID",
      "Anorexia nervosa (non–fat phobic presentation)",
      "Somatic symptom disorder",
      "Irritable bowel syndrome only",
      "Major depressive disorder"
    ],
    "answer": 1,
    "why": "Fear of fatness may be absent, especially in some Asian presentations, with restriction explained by **GI discomfort**; persistent behavior blocking gain and denial of seriousness can meet **Criteria B and C**.",
    "whyNot": [
      "Persistent behavior preventing gain and denial of seriousness point to anorexia; follow over time.",
      "Correct.",
      "The main problem is restriction to a dangerous weight.",
      "Workup is normal and weight is dangerously low.",
      "No depressive syndrome is described."
    ]
  },
  {
    "id": "v10-22",
    "tag": "Mortality",
    "stem": "A medical student asks about prognosis in eating disorders for a teaching session.",
    "q": "Which statement is correct according to DSM-5-TR?",
    "choices": [
      "Most people with anorexia nervosa remain ill after 10 years",
      "Bulimia nervosa has a higher crude mortality than anorexia nervosa",
      "Binge-eating disorder has the lowest remission rate of the three",
      "The crude mortality of anorexia nervosa is about 5% per decade, and suicide is its second leading cause of death",
      "Suicidal ideation is rare in binge-eating disorder"
    ],
    "answer": 3,
    "why": "Anorexia: about **5% per decade**, deaths from **medical complications or suicide**; most remit within **5 years**. Bulimia nearly 2% per decade; BED has the **highest** remission; suicidal ideation about 25% in BED.",
    "whyNot": [
      "Most remit within 5 years of presentation.",
      "Bulimia is nearly 2% per decade.",
      "BED has higher remission than bulimia or anorexia.",
      "Correct.",
      "About 25% have suicidal ideation."
    ]
  },
  {
    "id": "v10-23",
    "tag": "Factitious",
    "stem": "A 4-year-old is admitted for the third time with “failure to thrive.” The mother reports he vomits every food and needs nasogastric feeding. On the ward, when the mother is away, he eats normally and gains weight. A syringe of ipecac is found in her bag.",
    "q": "Who receives which diagnosis?",
    "choices": [
      "The mother: factitious disorder imposed on another (F68.A)",
      "The child: ARFID",
      "The child: rumination disorder",
      "The mother: munchausen by proxy is not a DSM diagnosis, so no diagnosis",
      "The child: factitious disorder imposed on self"
    ],
    "answer": 0,
    "why": "In factitious disorder imposed on another, the **caregiver** is diagnosed (F68.A); the child is the victim. Report as abuse.",
    "whyNot": [
      "Correct.",
      "He eats normally away from the mother.",
      "The vomiting is induced.",
      "It is a DSM diagnosis, given to the perpetrator.",
      "The child is not falsifying anything."
    ]
  },
  {
    "id": "v10-24",
    "tag": "Low frequency",
    "stem": "A 30-year-old woman has binged with loss of control about twice a month for a year, eating rapidly and alone, then feeling disgusted. She never compensates and is distressed.",
    "q": "What is the diagnosis?",
    "choices": [
      "No diagnosis",
      "Binge-eating disorder, mild",
      "Bulimia nervosa of low frequency",
      "Unspecified feeding or eating disorder",
      "Other specified feeding or eating disorder, binge-eating disorder of low frequency"
    ],
    "answer": 4,
    "why": "All BED criteria except frequency (**less than once a week**): record under **other specified** (F50.89) with the reason.",
    "whyNot": [
      "Distress and impairment justify a diagnosis.",
      "Mild BED needs at least 1 binge per week.",
      "She does not compensate.",
      "The reason can be specified.",
      "Correct."
    ]
  },
  {
    "id": "v10-25",
    "tag": "Coding",
    "stem": "In November 2026 you diagnose a 34-year-old with bulimia nervosa who vomits after binges five times a week.",
    "q": "Which ICD-10-CM code should be recorded?",
    "choices": [
      "F50.21",
      "F50.2",
      "F50.22",
      "F50.023",
      "F50.811"
    ],
    "answer": 2,
    "why": "Since **October 1, 2024**, bulimia carries severity: 4–7 compensatory behaviors a week = **moderate** = **F50.22**.",
    "whyNot": [
      "F50.21 is mild (1–3 per week).",
      "F50.2 was the 2022 code and is no longer billable.",
      "Correct.",
      "F50.023 is anorexia, binge-eating/purging type, extreme.",
      "F50.811 is binge-eating disorder, moderate."
    ],
    "then": {
      "q": "Two years later she has had no binges or compensation for 8 months but still judges herself by her weight. Which code applies?",
      "choices": [
        "F50.20",
        "F50.24",
        "F50.810",
        "F50.25",
        "F50.014"
      ],
      "answer": 3,
      "why": "Some but not all criteria met for a sustained period = **partial remission**; bulimia in partial or full remission is **F50.25**."
    }
  }
]);
