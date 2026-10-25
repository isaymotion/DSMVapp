/*
 * Diagnostic helper for Chapter 10 (Feeding and Eating Disorders), DSM-5-TR pp. 371–398.
 * "eating": from the main eating problem to pica, rumination, ARFID, anorexia, bulimia, binge-eating disorder
 * or an other specified presentation, with the code (2022 and from October 2024).
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "eating",
    chapter: "ch10",
    title: "Which feeding or eating disorder?",
    summary: "Start from the main eating problem, then weigh low weight, fear of fatness, binges, compensation and frequency to reach the feeding or eating disorder that fits, with its codes.",
    caution: "A teaching aid built from DSM-5-TR pp. 371–398. Check medical safety first (vital signs, ECG, electrolytes, phosphate) and ask about suicidal thoughts. Codes changed on October 1, 2024; use the code set in force on the date of service.",
    start: "what",
    nodes: {
      what: {
        q: "What is the main eating problem?",
        help: "Pick the behavior that brought the person in. You can come back and work through a second behavior.",
        options: [
          { label: "Restricting or avoiding food", to: "weight", note: "Restriction." },
          { label: "Binge eating: a large amount with loss of control", to: "binge", note: "Binges." },
          { label: "Vomiting or laxatives after normal amounts, without binges", to: "purgeweight", note: "Purging only." },
          { label: "Eating nonfood substances", to: "picadur", note: "Nonfood." },
          { label: "Bringing swallowed food back up into the mouth", to: "rumgi", note: "Regurgitation." },
          { label: "Eating at night", to: "night", note: "Night eating." }
        ]
      },
      weight: {
        q: "Is the person’s weight significantly low?",
        help: "Adults: BMI below 17 is likely low; 17–18.5 only with supporting history; 19 or more is not low. Youth: BMI-for-age below the 5th percentile, or failure to keep the growth trajectory (but not above the median).",
        options: [
          { label: "Yes: significantly low", to: "anfear", note: "Low weight (Criterion A possible)." },
          { label: "No: normal or high weight", to: "normal", note: "Not significantly low." }
        ]
      },
      anfear: {
        q: "Is there fear of gaining weight or persistent behavior that prevents gain, with disturbed experience of weight or shape, or denial of how serious the low weight is?",
        help: "Fear can be inferred from collateral history, observation and course when it is denied, especially in younger patients. Ask why the person does not eat.",
        options: [
          { label: "Yes", to: "antype", note: "Criteria B and C." },
          { label: "No: the reason is texture or smell, fear of choking or vomiting, or no interest in food", to: "arfidcause", note: "No weight or shape concern." }
        ]
      },
      antype: {
        q: "In the last 3 months, has there been recurrent binge eating or purging (vomiting, laxatives, diuretics, enemas)?",
        help: "Some purge after small amounts without bingeing; that still counts.",
        options: [
          { label: "No: dieting, fasting or exercise only", to: "r:anr", note: "Restricting type." },
          { label: "Yes", to: "r:anbp", note: "Binge-eating/purging type." }
        ]
      },
      normal: {
        q: "At a normal or high weight, what is the picture?",
        help: "Weight loss from a high weight can still be dangerous.",
        options: [
          { label: "Significant weight loss with fear of fatness and body image disturbance", to: "r:atypical", note: "All anorexia features except weight." },
          { label: "No weight concern, but deficiency, supplement dependence or marked impairment from avoiding foods", to: "arfidcause", note: "ARFID possible." },
          { label: "Only a narrow range of foods in a young child who is growing normally", to: "r:picky", note: "Developmentally normal." }
        ]
      },
      arfidcause: {
        q: "Is the restriction explained by lack of food, a cultural or religious practice, a medical condition or another mental disorder?",
        help: "ARFID can coexist with autism, anxiety, OCD, depression or a medical illness if the eating disturbance goes beyond them and needs its own treatment.",
        options: [
          { label: "No, or it goes beyond them and needs its own treatment", to: "arfidconseq", note: "Not explained." },
          { label: "Lack of food or a cultural or religious practice", to: "r:noarfid", note: "Criterion B." },
          { label: "Fully explained by a medical condition, depression or psychosis", to: "r:otherexplains", note: "Criterion D." }
        ]
      },
      arfidconseq: {
        q: "Is there at least one consequence: significant weight loss or faltering growth, nutritional deficiency, dependence on tube feeding or supplements, or marked psychosocial interference?",
        help: "Family disruption, such as separate meals or special shops, can meet the psychosocial criterion.",
        options: [
          { label: "Yes", to: "r:arfid", note: "Criterion A met." },
          { label: "No", to: "r:picky", note: "No ARFID-level consequence." }
        ]
      },
      binge: {
        q: "Are there recurrent inappropriate compensatory behaviors: vomiting; laxatives, diuretics or other drugs; fasting; or excessive exercise?",
        help: "A binge is a definitely large amount in a discrete period (usually under 2 hours) with loss of control. Grazing all day is not a binge.",
        options: [
          { label: "Yes, recurrent", to: "bnweight", note: "Compensation present." },
          { label: "No, or only occasionally", to: "bedfeat", note: "No recurrent compensation." }
        ]
      },
      bnweight: {
        q: "Is weight significantly low?",
        help: "Binges and purges at a significantly low weight are anorexia nervosa.",
        options: [
          { label: "Yes", to: "r:anbp", note: "Low weight." },
          { label: "No: normal or high", to: "bnfreq", note: "Not low." }
        ]
      },
      bnfreq: {
        q: "Do binges and compensation both occur at least once a week for 3 months, with self-evaluation unduly influenced by shape and weight?",
        help: "After anorexia nervosa, require all bulimia criteria for 3 months.",
        options: [
          { label: "Yes", to: "r:bn", note: "Criteria C and D met." },
          { label: "Less than weekly or less than 3 months", to: "r:bnlow", note: "Low frequency or limited duration." }
        ]
      },
      bedfeat: {
        q: "Do the binges come with at least 3 of: eating rapidly, until uncomfortably full, when not hungry, alone from embarrassment, disgusted or guilty after; and is there marked distress?",
        help: "There is no weight criterion: normal weight, overweight or obese.",
        options: [
          { label: "Yes", to: "bedfreq", note: "Criteria B and C met." },
          { label: "No", to: "r:bednot", note: "Criteria B or C not met." }
        ]
      },
      bedfreq: {
        q: "Do binges occur at least once a week for 3 months?",
        help: "Partial remission is defined as less than one binge a week for a sustained period.",
        options: [
          { label: "Yes", to: "r:bed", note: "Criterion D met." },
          { label: "Less than weekly or less than 3 months", to: "r:bedlow", note: "Low frequency or limited duration." }
        ]
      },
      purgeweight: {
        q: "Is weight significantly low?",
        help: "Purging after small amounts at low weight is anorexia nervosa, binge-eating/purging type.",
        options: [
          { label: "Yes", to: "r:anbp", note: "Low weight." },
          { label: "No: normal or high", to: "r:purging", note: "Not low." }
        ]
      },
      picadur: {
        q: "Has the person eaten nonnutritive, nonfood substances for at least 1 month, beyond normal developmental mouthing (about age 2 or older), outside a culturally supported practice?",
        help: "Paper, soil, clay, chalk, ice, hair, paint, starch, metal. Diet products with little nutrition do not count as nonfood.",
        options: [
          { label: "Yes", to: "picawhy", note: "Criteria A–C met." },
          { label: "It is a culturally supported practice", to: "r:cultural", note: "Criterion C." },
          { label: "Under 1 month, or a toddler mouthing objects", to: "r:picky", note: "Not pica yet." }
        ]
      },
      picawhy: {
        q: "Why does the person eat the substance?",
        help: "The reason points to the diagnosis.",
        options: [
          { label: "Craving, habit or no clear reason", to: "r:pica", note: "Pica." },
          { label: "To fill up and control appetite or weight", to: "r:anpica", note: "Weight control." },
          { label: "Deceptively, to produce illness", to: "r:factitious", note: "Deception." },
          { label: "Swallowing sharp or dangerous objects during emotional crises", to: "r:nssi", note: "Self-injury." }
        ]
      },
      rumgi: {
        q: "Has a medical cause been excluded (reflux, pyloric stenosis, gastroparesis, hiatal hernia, Sandifer syndrome in infants)?",
        help: "Rumination is effortless, without nausea, retching or disgust, at least several times a week.",
        options: [
          { label: "Yes", to: "rumwhy", note: "Not medically explained." },
          { label: "No, or not yet assessed", to: "r:rumgi", note: "Assess first." }
        ]
      },
      rumwhy: {
        q: "Is the regurgitation done to get rid of calories because of weight or shape concern?",
        help: "Rumination disorder is excluded if it occurs only during anorexia, bulimia, binge-eating disorder or ARFID.",
        options: [
          { label: "No: habitual, self-soothing or out of control, for at least 1 month", to: "r:rumination", note: "Rumination disorder." },
          { label: "Yes", to: "weight", note: "Consider anorexia or bulimia." }
        ]
      },
      night: {
        q: "Is the person aware of the eating and able to recall it?",
        help: "Night eating means eating after waking or excessive eating after the evening meal.",
        options: [
          { label: "Yes, with distress or impairment", to: "r:night", note: "Recall present." },
          { label: "No: little or no memory of it", to: "r:sleep", note: "No recall." },
          { label: "It is part of large binges with loss of control", to: "binge", note: "Binges." }
        ]
      }
    },
    results: {
      anr: { dx: "Anorexia nervosa, restricting type", line: "Restriction to a significantly low weight with fear of fatness or weight-preventing behavior and disturbed body experience.", points: ["Printed code F50.01. From October 2024: F50.010 mild (BMI ≥17), .011 moderate, .012 severe, .013 extreme, .014 in remission, .019 unspecified.", "Check vital signs, ECG, electrolytes and phosphate; ask about suicide.", "Add OCD, BDD or social anxiety only for symptoms unrelated to food, shape or weight."], link: { ch: "ch10", sec: "s10-an-criteria", label: "Anorexia criteria" }, dxId: "anorexia" },
      anbp: { dx: "Anorexia nervosa, binge-eating/purging type", line: "Significantly low weight with binge eating or purging in the last 3 months.", points: ["Printed code F50.02. From October 2024: F50.020 mild, .021 moderate, .022 severe, .023 extreme, .024 in remission, .029 unspecified.", "Do not add bulimia nervosa: the disorders are mutually exclusive.", "Check potassium and acid–base status; screen for substance use."], link: { ch: "ch10", sec: "s10-an-criteria", label: "Anorexia criteria" }, dxId: "anorexia" },
      atypical: { dx: "Other specified feeding or eating disorder (F50.89): atypical anorexia nervosa", line: "All anorexia criteria except weight, which is within or above normal after significant loss.", points: ["Medical complications can match anorexia nervosa: check vital signs and labs.", "Record the reason after the name."], link: { ch: "ch10", sec: "s10-other", label: "Other specified" }, dxId: "other-specified-eating" },
      arfid: { dx: "Avoidant/restrictive food intake disorder (F50.82)", line: "Restriction from sensory aversion, fear of aversive consequences or low interest, with a significant consequence and no body image disturbance.", points: ["Never diagnosed together with anorexia nervosa.", "Can coexist with autism, anxiety, OCD or a medical condition if the eating needs its own treatment.", "Specify in remission when applicable."], link: { ch: "ch10", sec: "s10-arfid", label: "ARFID" }, dxId: "arfid" },
      noarfid: { label: "Not ARFID", dx: "Food insecurity or a cultural practice", line: "Restriction due to lack of available food or a culturally sanctioned practice (e.g., religious fasting) is excluded by Criterion B.", points: ["Address food access and medical consequences.", "Reassess if restriction persists beyond the practice."], link: { ch: "ch10", sec: "s10-arfid", label: "ARFID Criterion B" } },
      otherexplains: { label: "Consider", dx: "The medical condition or mental disorder that explains it", line: "Depression, psychosis, GI disease or cancer can reduce intake; ARFID is added only when the disturbance goes beyond them and needs specific attention.", points: ["Treat the cause and follow weight.", "If restriction persists after the illness resolves, reconsider ARFID."], link: { ch: "ch10", sec: "s10-arfid-ddx", label: "ARFID differential" } },
      picky: { label: "Not yet a disorder", dx: "Developmentally normal or subthreshold eating", line: "Transient picky eating in young children, or narrow eating without significant consequences, does not meet criteria.", points: ["Follow growth and nutrition.", "Reassess if weight falters, deficiency develops or functioning suffers."], link: { ch: "ch10", sec: "s10-arfid-ddx", label: "ARFID differential" } },
      bn: { dx: "Bulimia nervosa", line: "Binges and compensatory behaviors at least weekly for 3 months at normal or high weight, with shape-driven self-evaluation.", points: ["Severity by compensatory behaviors per week: mild 1–3, moderate 4–7, severe 8–13, extreme ≥14.", "Printed code F50.2. From October 2024: F50.21 mild, F50.22 moderate, F50.23 severe, F50.24 extreme, F50.25 remission, F50.20 unspecified.", "Check potassium; screen for substance use, depression, borderline PD and suicide."], link: { ch: "ch10", sec: "s10-bn-criteria", label: "Bulimia criteria" }, dxId: "bulimia" },
      bnlow: { dx: "Other specified feeding or eating disorder (F50.89): bulimia nervosa of low frequency and/or limited duration", line: "All bulimia criteria except frequency (<1/week) or duration (<3 months).", points: ["Record the reason after the name.", "Reassess: many progress to full criteria."], link: { ch: "ch10", sec: "s10-other", label: "Other specified" }, dxId: "other-specified-eating" },
      bed: { dx: "Binge-eating disorder", line: "Binges with 3 of 5 features and marked distress, at least weekly for 3 months, without recurrent compensation.", points: ["Severity by binges per week: mild 1–3, moderate 4–7, severe 8–13, extreme ≥14.", "Printed code F50.81. From October 2024: F50.810 mild, .811 moderate, .812 severe, .813 extreme, .814 remission, .819 unspecified.", "Screen for MDD, alcohol use disorder and bipolar disorder."], link: { ch: "ch10", sec: "s10-bed-criteria", label: "BED criteria" }, dxId: "bed" },
      bedlow: { dx: "Other specified feeding or eating disorder (F50.89): binge-eating disorder of low frequency and/or limited duration", line: "All BED criteria except frequency (<1/week) or duration (<3 months).", points: ["Record the reason after the name."], link: { ch: "ch10", sec: "s10-other", label: "Other specified" }, dxId: "other-specified-eating" },
      bednot: { label: "Not binge-eating disorder", dx: "Overeating without the full binge picture", line: "Binges without 3 of 5 features or marked distress do not meet BED; consider obesity (not a mental disorder), mood episodes or other specified.", points: ["Increased appetite in depression or bipolar disorder may lack loss of control.", "Use other specified (F50.89) if a significant eating disturbance remains."], link: { ch: "ch10", sec: "s10-bed-features", label: "BED differential" } },
      purging: { dx: "Other specified feeding or eating disorder (F50.89): purging disorder", line: "Recurrent purging to influence weight or shape without binge eating, at normal weight.", points: ["Check potassium and acid–base status.", "At significantly low weight, it is anorexia nervosa, binge-eating/purging type."], link: { ch: "ch10", sec: "s10-other", label: "Other specified" }, dxId: "other-specified-eating" },
      night: { dx: "Other specified feeding or eating disorder (F50.89): night eating syndrome", line: "Eating after waking or excessive eating after the evening meal, with awareness and recall, causing distress or impairment.", points: ["Not explained by sleep-schedule changes, social norms, BED, another disorder, substances or medication."], link: { ch: "ch10", sec: "s10-other", label: "Other specified" }, dxId: "other-specified-eating" },
      sleep: { label: "Consider", dx: "Sleepwalking with sleep-related eating, or a medication effect", line: "Eating during partial arousal without recall points to an NREM sleep arousal disorder (Chapter 12) or a sedative-hypnotic such as zolpidem.", points: ["Review medications.", "Consider sleep evaluation."], link: { ch: "ch10", sec: "s10-other", label: "Night eating" } },
      pica: { dx: "Pica", line: "Persistent eating of nonfood substances for at least 1 month, developmentally inappropriate and not culturally sanctioned.", points: ["Codes: F98.3 in children; adults F50.89 as printed, F50.83 from October 2024.", "With autism, intellectual developmental disorder or pregnancy, diagnose only if it needs additional attention.", "Check for lead, iron and zinc deficiency, obstruction and infection."], link: { ch: "ch10", sec: "s10-pica", label: "Pica" }, dxId: "pica" },
      anpica: { label: "Consider", dx: "Anorexia nervosa", line: "Eating tissues or paper to control appetite is part of anorexia nervosa, which is primary.", points: ["Assess weight, fear of fatness and body image."], link: { ch: "ch10", sec: "s10-pica", label: "Pica differential" }, dxId: "anorexia" },
      factitious: { label: "Consider", dx: "Factitious disorder", line: "Swallowing foreign objects deceptively to falsify illness.", points: ["Diagnosis rests on objective evidence of deception."], link: { ch: "ch10", sec: "s10-pica", label: "Pica differential" }, dxId: "factitious" },
      nssi: { label: "Consider", dx: "Nonsuicidal self-injury or a personality disorder pattern", line: "Swallowing pins, needles or batteries in crises is self-injury rather than pica.", points: ["Assess suicide risk.", "Consider borderline personality disorder."], link: { ch: "ch10", sec: "s10-pica", label: "Pica differential" }, dxId: "borderline-pd" },
      cultural: { label: "Not pica", dx: "A culturally supported practice", line: "Eating earth or similar substances with spiritual, medicinal or social value is excluded by Criterion C.", points: ["Do not assume the behavior is normative without evaluation.", "Check for medical risk, especially in pregnancy."], link: { ch: "ch10", sec: "s10-pica", label: "Pica and culture" } },
      rumgi: { label: "Not yet", dx: "Complete the medical assessment", line: "Rule out reflux, pyloric stenosis, gastroparesis, hiatal hernia and Sandifer syndrome before diagnosing rumination disorder.", points: ["History and observation usually suffice; the regurgitation is effortless."], link: { ch: "ch10", sec: "s10-rumination", label: "Rumination differential" } },
      rumination: { dx: "Rumination disorder", line: "Repeated effortless regurgitation for at least 1 month, not medically explained or confined to another eating disorder.", points: ["Codes: F98.21 as printed; from October 2024 F98.21 in children and F50.84 in adults.", "Watch for malnutrition, especially in infants."], link: { ch: "ch10", sec: "s10-rumination", label: "Rumination disorder" }, dxId: "rumination" }
    }
  }
]);
