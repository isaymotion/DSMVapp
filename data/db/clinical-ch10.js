/* Chapter 10 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var SAFETY = "Check medical stability at every stage: vital signs and orthostatics, temperature, ECG (bradycardia, QTc), electrolytes including **phosphate** and magnesium, and glucose; screen for suicide.";
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "anorexia",
      ask: [
        ["A Weight", "“What is the most and least you have weighed since you were a teenager?”", "Plot weights on a growth chart in youth."],
        ["A Restriction", "“Walk me through what you ate yesterday.”"],
        ["B Fear", "“How would you feel if you gained 2 kilos?”", "If denied, look at behavior and ask family."],
        ["B Behaviors", "“Do you exercise to burn calories, skip meals, or use pills to control weight?”"],
        ["C Body image", "“When you look in the mirror, what do you see? Are there parts you think are too big?”"],
        ["C Self-worth", "“How much does your weight decide how you feel about yourself?”"],
        ["C Seriousness", "“Do you think your weight is a danger to your health?”"],
        ["Subtype", "“In the past 3 months, have you binged, made yourself sick, or used laxatives or diuretics?”"],
        ["Safety", "“Have you fainted, had chest pain or palpitations? Any thoughts of ending your life?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Nutritional rehabilitation with weight restoration** plus **eating-disorder-focused psychotherapy**: **family-based treatment** for adolescents; for adults, **CBT-ED**, MANTRA or specialist supportive clinical management (APA guideline, 2023).",
        points: [
          SAFETY,
          "Refeed carefully and watch for **refeeding syndrome** (falling phosphate, potassium and magnesium, fluid overload) in the first 1–2 weeks; admit for medical instability.",
          "No medication is FDA-approved for anorexia nervosa. Low-dose [[stahl:drugs/olanzapine|olanzapine]] has modest evidence for weight gain (off-label); antidepressants do not help at low weight.",
          "Avoid **bupropion** (seizure risk) and drugs that prolong the QTc."
        ],
        stahl: [["Olanzapine", "drugs/olanzapine"]]
      }
    },
    {
      id: "bulimia",
      ask: [
        ["A Binges", "“Are there times you eat what most people would think is a large amount and feel you can’t stop?”", "Ask what and how much."],
        ["B Compensation", "“After eating, do you make yourself sick, use laxatives, diuretics or other pills, fast, or exercise hard?”"],
        ["C Frequency", "“How many times a week, and for how long has this been happening?”", "Count compensations for severity."],
        ["D Self-evaluation", "“How much do your shape and weight affect how you feel about yourself?”"],
        ["E Weight", "“What is your lowest weight since this began?”", "Low weight → anorexia, binge-eating/purging type."],
        ["Comorbidity", "“How much do you drink? Any stimulants or diet pills?”", "Substance use ≥30%."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT for eating disorders (CBT-ED)** is first-line; guided self-help CBT is an option.",
        points: [
          "[[stahl:drugs/fluoxetine|Fluoxetine]] **60 mg/day** is the only FDA-approved medicine for bulimia nervosa, usually alongside psychotherapy.",
          "**Bupropion is contraindicated** in bulimia and anorexia (seizure risk).",
          "Check and replace potassium; refer for dental care; screen for depression, substance use, borderline PD and suicide."
        ],
        stahl: [["Fluoxetine", "drugs/fluoxetine"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "bed",
      ask: [
        ["A Binges", "“Do you ever eat a very large amount in a short time and feel out of control?”"],
        ["B Features", "“During these times, do you eat fast, until uncomfortably full, when not hungry, or alone? How do you feel after?”", "Need 3 of 5."],
        ["C Distress", "“How upsetting is the bingeing for you?”"],
        ["D Frequency", "“How many times a week, and for how long?”"],
        ["E Compensation", "“Do you ever make up for it by vomiting, laxatives, fasting or exercise?”"],
        ["Mood", "“How has your mood been? Any times of high energy?”", "Screen for MDD and bipolar disorder."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT-ED** (or interpersonal psychotherapy) is first-line, including guided self-help.",
        points: [
          "[[stahl:drugs/lisdexamfetamine|Lisdexamfetamine]] is FDA-approved for **moderate to severe** binge-eating disorder in adults; watch blood pressure and misuse.",
          "SSRIs and [[stahl:drugs/topiramate|topiramate]] reduce bingeing in trials (off-label). GLP-1 receptor agonists are being studied but are not approved for BED.",
          "Address weight separately if needed; treat comorbid depression and alcohol use."
        ],
        stahl: [["Binge eating disorder", "c/ch13/guide/s13-bed"], ["Lisdexamfetamine", "drugs/lisdexamfetamine"], ["Topiramate", "drugs/topiramate"]]
      }
    },
    {
      id: "arfid",
      ask: [
        ["A Pattern", "“Which foods do you eat, and what happens with others?”", "List the safe foods."],
        ["A Reason", "“Is it the look, smell or texture, a fear of choking or being sick, or just not feeling hungry?”"],
        ["A Consequences", "Check growth curve, labs, supplements and tube feeds, school and family meals."],
        ["C Body image", "“Do you worry about your weight or shape?”", "A yes points to anorexia."],
        ["D Other causes", "Ask about GI symptoms, allergies, autism features, anxiety and mood."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Cognitive-behavioral therapy for ARFID (CBT-AR)** or family-based approaches, with graded **exposure** to new foods and nutritional rehabilitation.",
        points: [
          SAFETY,
          "No medication is FDA-approved; small studies of mirtazapine, cyproheptadine and olanzapine for appetite or anxiety are off-label.",
          "Involve dietitians, speech and feeding therapists, and treat comorbid anxiety, autism or ADHD."
        ],
        stahl: [["Mirtazapine", "drugs/mirtazapine"]]
      }
    },
    {
      id: "pica",
      ask: [
        ["A What and how long", "“What do you (or does your child) eat that isn’t food, and since when?”"],
        ["B Age", "Note developmental level.", "Under about 2 years, mouthing is normal."],
        ["C Culture", "“Is eating clay or earth a custom in your family or community?”"],
        ["Pregnancy", "“Are you pregnant? Do you crave ice, starch or clay?”"],
        ["Medical", "Check iron, zinc and lead levels; ask about abdominal pain and constipation."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat **medical complications and deficiencies** (iron, zinc, lead), then **behavioral** strategies: supervision, restricting access, differential reinforcement and alternative oral items.",
        points: ["Address food insecurity and neglect.", "No medication is approved; treat comorbid autism, intellectual disability or OCD."],
        stahl: []
      }
    },
    {
      id: "rumination",
      ask: [
        ["A Regurgitation", "“After eating, does food come back into your mouth without feeling sick? What do you do with it?”"],
        ["Frequency", "“How often, and for how long?”"],
        ["B Medical", "Ask about heartburn, vomiting with nausea, weight loss; arrange GI assessment."],
        ["C Weight concern", "“Do you bring food up to control your weight?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Diaphragmatic breathing** as a competing response (habit reversal) is first-line, with education and support.",
        points: ["Treat malnutrition, especially in infants; improve caregiver interaction and stimulation.", "Baclofen has been tried off-label in refractory cases."],
        stahl: []
      }
    },
    {
      id: "other-specified-eating",
      ask: [
        ["Atypical anorexia", "“How much weight have you lost, and over what time?”", "Check vital signs even at normal weight."],
        ["Purging", "“Do you vomit or use laxatives after normal meals?”"],
        ["Night eating", "“Do you wake to eat? Do you remember it in the morning?”"],
        ["Frequency", "“How often do the binges or purges happen?”", "Under weekly → low frequency."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat as the **closest full disorder**: CBT-ED for purging disorder and low-frequency bulimia or BED; nutritional and medical care for atypical anorexia.",
        points: [SAFETY],
        stahl: []
      }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "weight-loss", title: "Weight loss or not eating enough",
      intro: "Ask **why** the person is not eating. Weight or shape concern points to anorexia nervosa; texture, fear of choking or vomiting, or low interest points to ARFID. Rule out medical illness and depression, and check medical safety first.",
      ask: ["How much weight, over what time?", "Why do you eat less?", "How do you feel about your body?", "Do you binge, vomit, use laxatives or exercise a lot?", "Any fainting, palpitations, or thoughts of ending your life?"],
      mustNotMiss: ["**Medical instability**: bradycardia, hypotension, hypothermia, electrolytes, phosphate.", "**Medical causes**: GI disease, hyperthyroidism, cancer, diabetes, AIDS.", "**Suicide** risk."],
      helpers: ["eating"],
      items: [
        { ch: "ch10", dx: "anorexia", when: "Significantly low weight, fear of fatness or weight-preventing behavior, body image disturbance." },
        { ch: "ch10", dx: "arfid", when: "Sensory aversion, fear of choking or vomiting, or low interest; no weight concern." },
        { ch: "ch10", dx: "other-specified-eating", when: "Atypical anorexia: major loss to a normal weight." },
        { ch: "ch04", dx: "mdd", when: "Appetite loss with depressed mood or anhedonia." },
        { ch: "ch02", dx: "delusional-disorder", when: "Avoiding food believed to be poisoned." },
        { ch: "ch16", dx: "stimulant-use", when: "Appetite loss from stimulants; fear of gain suggests comorbid anorexia." }
      ]
    },
    {
      id: "binge-purge", title: "Binge eating, vomiting or laxative use",
      intro: "Define the binge (large amount, discrete period, loss of control), then ask about compensation, frequency and weight. Low weight makes it anorexia; regular compensation at normal weight makes it bulimia; binges with distress and no compensation make it binge-eating disorder.",
      ask: ["What and how much do you eat in a binge?", "Do you vomit, use laxatives, fast or exercise afterward?", "How often, and for how long?", "What is your weight now and at its lowest?", "How much does your weight affect how you see yourself?"],
      mustNotMiss: ["**Hypokalemia** and arrhythmia.", "**Low weight** (anorexia, binge-eating/purging type).", "**Suicide** risk and substance use."],
      helpers: ["eating"],
      items: [
        { ch: "ch10", dx: "bulimia", when: "Binges and compensation weekly for 3 months at normal or high weight." },
        { ch: "ch10", dx: "bed", when: "Binges with distress, no recurrent compensation." },
        { ch: "ch10", dx: "anorexia", when: "Binges or purges at significantly low weight." },
        { ch: "ch10", dx: "other-specified-eating", when: "Purging without binges, low-frequency forms, night eating." },
        { ch: "ch04", dx: "mdd", when: "Overeating in atypical depression without compensation." },
        { ch: "ch18", dx: "borderline-pd", when: "Bingeing as part of impulsivity." }
      ]
    },
    {
      id: "odd-eating", title: "Eating nonfood things or bringing food back up",
      intro: "Nonfood eating for at least a month beyond toddlerhood suggests pica; effortless regurgitation for at least a month suggests rumination disorder. Exclude medical causes, cultural practice and weight-driven behavior.",
      ask: ["What is eaten, and since when?", "Is this a custom in the family or community?", "Does food come back up without nausea?", "Is it done to control weight?"],
      mustNotMiss: ["**Lead poisoning**, bezoar and bowel obstruction.", "**Iron deficiency**, pregnancy.", "**Neglect** in young children; GI disease in regurgitation."],
      helpers: ["eating"],
      items: [
        { ch: "ch10", dx: "pica", when: "Nonfood substances for ≥1 month, developmentally and culturally inappropriate." },
        { ch: "ch10", dx: "rumination", when: "Effortless regurgitation for ≥1 month without a medical cause." },
        { ch: "ch10", dx: "anorexia", when: "Tissues eaten or food spat out to control weight." },
        { ch: "ch09", dx: "factitious", when: "Objects swallowed deceptively." },
        { ch: "ch06", dx: "trichotillomania", when: "Pulled hair is eaten." }
      ]
    },
    {
      id: "picky-child", title: "A child who eats very few foods",
      intro: "Picky eating is common and usually passes. Think of ARFID when restriction causes faltering growth, deficiency, supplement dependence or marked family and social disruption, without weight or shape concern.",
      ask: ["Which foods does the child eat?", "Is growth on track?", "What happens with new foods: texture, fear of choking, or no interest?", "Any autism features, anxiety or GI problems?"],
      mustNotMiss: ["**Faltering growth** and nutritional deficiency.", "**Medical** causes (GI disease, allergies, swallowing problems).", "**Neglect** or caregiver problems."],
      helpers: ["eating"],
      items: [
        { ch: "ch10", dx: "arfid", when: "Restriction with weight faltering, deficiency, supplements or impairment." },
        { ch: "ch10", dx: "anorexia", when: "Fear of fatness or body image concerns, even if denied." },
        { ch: "ch05", dx: "specific-phobia", when: "Fear of choking or vomiting before eating becomes the focus." },
        { ch: "ch06", dx: "ocd", when: "Food rituals or contamination fears." },
        { ch: "ch07", dx: "rad", when: "Feeding disturbed by withdrawal from caregivers after neglect." }
      ]
    },
    {
      id: "appearance", title: "Preoccupied with appearance",
      items: [
        { ch: "ch10", dx: "bed", when: "Distress about weight with binges but no compensation." }
      ]
    },
    {
      id: "neglected-child", title: "A young child after neglect or institutional care",
      items: [
        { ch: "ch10", dx: "pica", when: "Eating nonfood substances when unsupervised." },
        { ch: "ch10", dx: "rumination", when: "Self-soothing regurgitation in an understimulated infant." }
      ]
    },
    {
      id: "avoidance", title: "Avoiding places or situations",
      items: [
        { ch: "ch10", dx: "arfid", when: "Avoiding meals with others because of restricted eating." }
      ]
    }
  ]);
})();
