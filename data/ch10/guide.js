/* Chapter 10 study guide. Source: DSM-5-TR, Feeding and Eating Disorders (pp. 371–398).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. ICD-10-CM codes changed on October 1, 2024; the changes are kept
   in labeled post-publication boxes. */
SP.add("ch10", "guide", {
  intro: "Feeding and eating disorders are a **persistent disturbance of eating or eating-related behavior** that alters the **consumption or absorption** of food and significantly impairs **physical health or psychosocial functioning** (p. 371). Three of them, **anorexia nervosa**, **bulimia nervosa** and **binge-eating disorder**, form a **mutually exclusive** scheme: during a single episode only one can be assigned, because they differ in course, outcome and treatment. Anorexia nervosa needs a **significantly low weight**; bulimia nervosa pairs **binges with compensatory behaviors** at least weekly for 3 months at normal or high weight; binge-eating disorder has binges **without regular compensation**. **ARFID** restricts food for reasons **other than weight or shape** (sensory, fear of aversive consequences, low interest). **Pica** and **rumination disorder** complete the chapter, and **obesity is not a mental disorder**. The ICD-10-CM codes for these disorders **changed on October 1, 2024**, now carrying severity and remission. The [[helper:eating|eating disorder helper]] walks you through the reasoning.",
  objectives: [
    "Explain the **mutually exclusive** hierarchy of anorexia nervosa, bulimia nervosa and binge-eating disorder, and why obesity is not a mental disorder.",
    "Diagnose **pica** and **rumination disorder** (at least 1 month; developmentally inappropriate; not culturally sanctioned; not better explained medically), with codes for children and adults.",
    "Diagnose **ARFID** from its four consequences, recognize its three presentations, and separate it from anorexia nervosa, specific phobia, autism, depression and picky eating.",
    "State the three criteria for **anorexia nervosa**, its **restricting** and **binge-eating/purging** types (last 3 months), the **BMI severity** bands, and the BMI rules for adults and youth.",
    "State the criteria for **bulimia nervosa** and **binge-eating disorder**, define a **binge**, and grade severity by weekly frequency.",
    "Recognize the medical complications and laboratory findings of starvation and purging, and the elevated **mortality and suicide** risk.",
    "Code correctly after the **October 2024** ICD-10-CM update (F50.01x, F50.02x, F50.2x, F50.81x, F50.83, F50.84).",
    "Use the **other specified** examples: atypical anorexia nervosa, low-frequency bulimia and binge-eating disorder, purging disorder and night eating syndrome."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s10-map",
          title: "How the chapter is built",
          pages: "371",
          blocks: [
            { type: "table", caption: "Diagnoses in this chapter (codes as printed in DSM-5-TR, 2022)", head: ["Diagnosis", "Code (2022)", "Core idea", "Page"], rows: [
              ["[[dx:pica|Pica]]", "F98.3 children · F50.89 adults", "Eating **nonnutritive, nonfood** substances for ≥1 month", "371–373"],
              ["[[dx:rumination|Rumination disorder]]", "F98.21", "Repeated **regurgitation** of food for ≥1 month", "374–375"],
              ["[[dx:arfid|Avoidant/restrictive food intake disorder]]", "F50.82", "Restriction with weight loss, deficiency, tube or supplement dependence or impairment, **without** weight or shape concern", "376–381"],
              ["[[dx:anorexia|Anorexia nervosa]]", "F50.01 restricting · F50.02 binge-eating/purging", "**Significantly low weight**, fear of fatness, disturbed body experience", "381–387"],
              ["[[dx:bulimia|Bulimia nervosa]]", "F50.2", "Binges + compensatory behaviors ≥1/week for 3 months; shape-driven self-worth", "387–392"],
              ["[[dx:bed|Binge-eating disorder]]", "F50.81", "Binges with distress ≥1/week for 3 months, no regular compensation", "392–396"],
              ["[[dx:other-specified-eating|Other specified feeding or eating disorder]]", "F50.89", "Atypical anorexia, low-frequency forms, purging disorder, night eating", "396"],
              ["[[dx:unspecified-eating|Unspecified feeding or eating disorder]]", "F50.9", "Reason not given or not enough information", "397"]
            ] },
            { type: "update", kind: "post", year: "2024", title: "New ICD-10-CM codes from October 1, 2024", source: "ICD-10-CM update effective October 1, 2024; APA DSM-5-TR coding update (September 2024)", text: "Anorexia nervosa, bulimia nervosa and binge-eating disorder now carry **severity and remission** in the code: **F50.010–F50.019** (anorexia, restricting), **F50.020–F50.029** (anorexia, binge-eating/purging), **F50.20–F50.25** (bulimia) and **F50.810–F50.819** (binge-eating disorder). **Pica in adults** moved from F50.89 to **F50.83**, and **rumination disorder in adults** got its own code, **F50.84**. Children keep F98.3 and F98.21. See [[page:c/ch10/guide/s10-coding|the coding table]]." },
            { type: "callout", kind: "key", title: "One diagnosis per episode", text: "Anorexia nervosa, bulimia nervosa and binge-eating disorder are **mutually exclusive** during a single episode. Binges and purges at a **significantly low weight** are **anorexia nervosa, binge-eating/purging type**, not bulimia. Bulimia nervosa is excluded if it occurs **only during anorexia**, and binge-eating disorder is excluded by **regular compensatory behavior** (p. 371)." },
            { type: "list", title: "Two framing points (p. 371)", items: [
              "Some patients describe **craving** and **compulsive** eating like substance use disorders, perhaps through shared **reward and self-control** circuits; how much the two overlap is not yet understood.",
              "**Obesity is not a mental disorder**: it results from long-term excess energy intake over expenditure, with many genetic, physiological, behavioral and environmental causes. It is linked with binge-eating, depressive and bipolar disorders and schizophrenia, and with **psychotropic side effects**."
            ] }
          ]
        },
        {
          id: "s10-coding",
          title: "Coding after the October 2024 update",
          pages: "371–397",
          blocks: [
            { type: "p", text: "DSM-5-TR (2022) printed one code per subtype. From **October 1, 2024**, ICD-10-CM adds a final character for **severity** or **remission**. The criteria are unchanged; only the codes are new. Record the full name with type and severity, then the code. The 2022 codes **F50.01, F50.02, F50.2 and F50.81** are no longer billable." },
            { type: "table", caption: "Anorexia nervosa from October 2024", head: ["Specifier", "Restricting type", "Binge-eating/purging type"], rows: [
              ["Mild (BMI ≥17)", "**F50.010**", "**F50.020**"],
              ["Moderate (BMI 16–16.99)", "F50.011", "F50.021"],
              ["Severe (BMI 15–15.99)", "F50.012", "F50.022"],
              ["Extreme (BMI <15)", "F50.013", "F50.023"],
              ["In partial or full remission", "**F50.014**", "**F50.024**"],
              ["Severity unspecified", "F50.019", "F50.029"]
            ] },
            { type: "table", caption: "Bulimia nervosa and binge-eating disorder from October 2024", head: ["Specifier", "Bulimia nervosa", "Binge-eating disorder"], rows: [
              ["Mild (1–3/week)", "**F50.21**", "**F50.810**"],
              ["Moderate (4–7/week)", "F50.22", "F50.811"],
              ["Severe (8–13/week)", "F50.23", "F50.812"],
              ["Extreme (≥14/week)", "F50.24", "F50.813"],
              ["In partial or full remission", "**F50.25**", "**F50.814**"],
              ["Severity unspecified", "**F50.20**", "F50.819"]
            ] },
            { type: "table", caption: "The rest of the chapter", head: ["Diagnosis", "DSM-5-TR (2022)", "From October 1, 2024"], rows: [
              ["Pica, children", "F98.3", "F98.3"],
              ["Pica, adults", "F50.89", "**F50.83**"],
              ["Rumination disorder, children", "F98.21", "F98.21"],
              ["Rumination disorder, adults", "F98.21", "**F50.84**"],
              ["ARFID", "F50.82", "F50.82"],
              ["Other specified", "F50.89", "F50.89"],
              ["Unspecified", "F50.9", "F50.9"]
            ] },
            { type: "callout", kind: "exam", title: "Patterns that make the codes easy", text: "For all three severity-coded disorders the last digit runs **mild → moderate → severe → extreme → remission**, and **9** (or **0** for bulimia, F50.20) means **unspecified**. Partial and full remission **share** one code. Severity for anorexia comes from **BMI**; for bulimia from **compensatory behaviors** per week; for binge-eating disorder from **binges** per week." },
            { type: "update", kind: "post", year: "2024", title: "Why the codes changed", source: "ICD-10-CM FY2025 addenda", text: "The 2024 ICD-10-CM update expanded the eating disorder codes so that **severity and remission** can be tracked in claims and registries, and gave adults with pica and rumination disorder codes in the **F50** block rather than the childhood F98 block. Check the code set in force on the date of service." }
          ]
        }
      ]
    },
    {
      title: "Pica and rumination disorder",
      sections: [
        {
          id: "s10-pica",
          title: "Pica",
          pages: "371–373",
          blocks: [
            { type: "criteria", title: "Pica in brief", code: "F98.3 children · F50.89 adults (F50.83 from Oct 2024)", pages: "371–372", items: [
              ["A", "**Persistent** eating of **nonnutritive, nonfood** substances for at least **1 month**."],
              ["B", "The eating is **inappropriate to the developmental level**."],
              ["C", "It is **not part of a culturally supported** or socially normative practice."],
              ["D", "If it occurs with another mental disorder (intellectual developmental disorder, autism, schizophrenia) or medical condition (**including pregnancy**), it is severe enough to warrant **additional clinical attention**."]
            ], specifiers: [["In remission", "Criteria not met for a sustained period after previously being met"]] },
            { type: "defs", title: "Reading the criteria (p. 372)", items: [
              ["Substances", "Paper, soap, cloth, hair, string, wool, soil, chalk, talc, paint, gum, metal, pebbles, charcoal, ash, **clay**, starch or **ice**; they vary with age and availability."],
              ["“Nonfood”", "Excludes **diet products** with minimal nutritional content."],
              ["Appetite", "There is typically **no aversion to food** in general."],
              ["Age", "A minimum age of **2 years** is suggested, to exclude normal infant mouthing."],
              ["With another disorder", "Diagnose pica separately only if the behavior needs **additional** clinical attention."]
            ] },
            { type: "table", caption: "Pica facts", head: ["Topic", "What the manual says (pp. 372–373)"], rows: [
              ["Associated", "Zinc or iron deficiency is reported, but often **no biological abnormality**. Comes to attention through **bowel obstruction (bezoar)**, perforation, **toxoplasmosis or toxocariasis** (eating feces or dirt), or **lead poisoning** from paint."],
              ["Prevalence", "About **5%** of school-age children; about **one-third** of pregnant women, especially with **food insecurity**; a meta-analysis found **28%** in pregnancy or postpartum."],
              ["Course", "Onset most often in **childhood**; in adults, more often with intellectual developmental disorder or another mental disorder. Can be protracted and **fatal**, depending on what is eaten."],
              ["Risk", "**Neglect**, lack of supervision, developmental delay; lack of food and vitamin deficiency."],
              ["Pregnancy", "Cravings for chalk or ice are common; diagnose pica only if eating nonfood substances poses **medical risk**."],
              ["Markers", "Abdominal flat plate, ultrasound and other imaging for obstruction; blood tests for poisoning or infection."],
              ["Comorbidity", "**Autism** and **intellectual developmental disorder**; less often schizophrenia and OCD. With **trichotillomania** and **excoriation**, the hair or skin is eaten. Also with ARFID with strong sensory features."]
            ] },
            { type: "list", title: "Differential diagnosis (p. 373)", items: [
              "**Anorexia nervosa**: some eat tissues or paper to **control appetite**; if the aim is weight control, anorexia nervosa is primary.",
              "**Factitious disorder**: foreign objects swallowed **deceptively** to falsify illness.",
              "**Nonsuicidal self-injury** or personality disorders: swallowing pins, needles or knives.",
              "**Kleine-Levin syndrome**, autism, schizophrenia: add pica only if persistent and severe enough to need attention."
            ] },
            { type: "callout", kind: "culture", title: "Earth eating and culture", text: "In some populations eating earth or similar substances has **spiritual, medicinal or social** value; that does **not** warrant pica (Criterion C). But do not assume a behavior is normative without evaluating it (pp. 372–373)." },
            { type: "case", title: "Clinical vignette: the boy who eats paint chips", text: "A 6-year-old boy in an old rented house has eaten paint flakes and soil daily for 3 months. He eats meals normally. His blood lead level is high and he has iron deficiency. His mother works two jobs and he is often unsupervised.", point: "Persistent eating of nonfood substances for over 1 month, developmentally inappropriate at 6 and not culturally sanctioned: **pica, F98.3** (child). Treat lead poisoning and iron deficiency, and address supervision." }
          ]
        },
        {
          id: "s10-rumination",
          title: "Rumination disorder",
          pages: "374–375",
          blocks: [
            { type: "criteria", title: "Rumination disorder in brief", code: "F98.21 (adults F50.84 from Oct 2024)", pages: "374", items: [
              ["A", "Repeated **regurgitation** of food for at least **1 month**; it may be re-chewed, re-swallowed or spit out."],
              ["B", "Not attributable to a **gastrointestinal or other medical condition** (gastroesophageal reflux, pyloric stenosis)."],
              ["C", "Does not occur **exclusively** during anorexia nervosa, bulimia nervosa, binge-eating disorder or ARFID."],
              ["D", "With intellectual developmental disorder or another neurodevelopmental disorder, it is severe enough to warrant **additional clinical attention**."]
            ], specifiers: [["In remission", "Criteria not met for a sustained period after previously being met"]] },
            { type: "defs", title: "Key features (pp. 374–375)", items: [
              ["The act", "Partly digested food comes back into the mouth **without nausea, retching or disgust**; it is re-chewed and spat out or re-swallowed."],
              ["Frequency", "At least **several times a week**, typically **daily**."],
              ["Infants", "Straining and **arching the back** with the head back, sucking movements of the tongue, apparent satisfaction; hungry and irritable between episodes; **weight loss** and failure to gain despite eating a lot."],
              ["Older people", "Hide it with a hand over the mouth or coughing; avoid eating with others or before work or school; may **restrict** and lose weight."],
              ["Diagnosis", "Often **observed** directly; otherwise by self-report or caregivers. Described as habitual or out of control."]
            ] },
            { type: "table", caption: "Rumination disorder facts", head: ["Topic", "What the manual says (p. 375)"], rows: [
              ["Prevalence", "Limited European data: about **1%–2%** of grade-school children; historically described in intellectual disability."],
              ["Onset", "Any age; in infants usually **3–12 months**. Often remits spontaneously in infants but can cause **severe malnutrition** and be **fatal**, especially in infancy."],
              ["Function", "In infants and in neurodevelopmental disorders it seems **self-soothing or self-stimulating**, like head banging."],
              ["Risk", "Lack of stimulation, neglect, stress and **parent-child relationship** problems in infants and young children."],
              ["Consequences", "Growth delay and harm to development and learning; social impairment in older children and adults."]
            ] },
            { type: "list", title: "Differential diagnosis (p. 375)", items: [
              "**Gastrointestinal conditions**: gastroparesis, pyloric stenosis, hiatal hernia, **Sandifer syndrome** in infants; ruled out by history and observation.",
              "**Anorexia and bulimia nervosa**: regurgitation and spitting out food to get rid of **calories** because of weight concern.",
              "With a medical condition or another mental disorder (e.g., GAD), diagnose rumination disorder only if it **exceeds** what that condition explains."
            ] },
            { type: "case", title: "Clinical vignette: the student who skips breakfast", text: "A 17-year-old regurgitates food into her mouth after most meals, without nausea, and re-chews or spits it out. It has happened daily for a year. Endoscopy and pH studies are normal. She skips breakfast before school so it won’t happen in class and has lost 3 kg. She has no concerns about her weight or shape.", point: "Repeated effortless regurgitation for over 1 month, not medically explained, not driven by weight concern: **rumination disorder** (F98.21 as printed; from October 2024 **F50.84** if she is an adult, F98.21 at 17)." }
          ]
        }
      ]
    },
    {
      title: "Avoidant/restrictive food intake disorder",
      sections: [
        {
          id: "s10-arfid",
          title: "ARFID: criteria and presentations",
          pages: "376–377",
          blocks: [
            { type: "criteria", title: "ARFID in brief", code: "F50.82", pages: "376", items: [
              ["A", "An eating or feeding disturbance (lack of interest in food; avoidance based on **sensory** characteristics; concern about **aversive consequences**) with **one or more** of:", [
                "Significant **weight loss** (or failure to gain expected weight, or faltering growth in children).",
                "Significant **nutritional deficiency**.",
                "Dependence on **enteral feeding** or oral nutritional **supplements**.",
                "Marked interference with **psychosocial functioning**."
              ]],
              ["B", "Not better explained by **lack of available food** or a **culturally sanctioned** practice."],
              ["C", "Not exclusively during anorexia or bulimia nervosa, and **no disturbance in how body weight or shape is experienced**."],
              ["D", "Not attributable to a medical condition or better explained by another mental disorder; if they coexist, the eating disturbance **exceeds** what they usually cause and warrants additional attention."]
            ], specifiers: [["In remission", "Criteria not met for a sustained period after previously being met"]] },
            { type: "p", text: "ARFID **replaces and extends** DSM-IV feeding disorder of infancy or early childhood to **older children, adolescents and adults** (p. 376)." },
            { type: "compare", title: "Three ways ARFID presents (pp. 376–377)", items: [
              { title: "Sensory", color: "drug", points: ["Extreme sensitivity to **appearance, color, smell, texture, temperature or taste**.", "“Selective,” “choosy” or “perseverant” eating, food **neophobia**; refusing brands, or the smell of others’ food.", "Similar to autism-related sensory sensitivity.", "Arises in the first decade; often **stable** into adulthood."] },
              { title: "Fear of aversive consequences", color: "case", points: ["A **conditioned** response after **choking**, a traumatic GI procedure (esophagoscopy) or repeated **vomiting**.", "Once called **functional dysphagia** or **globus hystericus**.", "Can begin at **any age**."] },
              { title: "Lack of interest", color: "hy", points: ["Little interest in eating or food; low appetite.", "Usually begins in **infancy or early childhood** and may persist into adulthood."] }
            ] },
            { type: "defs", title: "Judging Criterion A (pp. 376–377)", items: [
              ["A1 weight", "A clinical judgment; growing children may simply **fall off** their weight or height trajectory."],
              ["A2 deficiency", "From diet history, exam and labs; consequences can match anorexia nervosa: **hypothermia, bradycardia, anemia**; life-threatening in infants."],
              ["A3 dependence", "Supplements are **required** to sustain intake: nasogastric feeding in failure to thrive, complete supplements in neurodevelopmental disorders, gastrostomy without a medical cause."],
              ["A4 functioning", "Cannot eat with others, attend school or work, or keep relationships; **family disruption** (foods banned at home, special shops or restaurants) also counts."],
              ["Excluded", "**Food insecurity**, **religious fasting** and **normal dieting** (Criterion B)."]
            ] }
          ]
        },
        {
          id: "s10-arfid-course",
          title: "ARFID: course, risk and associated features",
          pages: "377–378",
          blocks: [
            { type: "table", caption: "ARFID facts", head: ["Topic", "What the manual says"], rows: [
              ["By age", "Infants: food refusal, gagging, vomiting; not engaging with the caregiver during feeding. Older children and adolescents: sometimes generalized emotional difficulties below threshold (“**food avoidance emotional disorder**”)."],
              ["Prevalence", "Little known; an Australian study found **0.3%** at age 15 or older."],
              ["Who", "More common in **children and adolescents**; often a long delay before presentation."],
              ["Sex", "About **equal** in boys and girls; ARFID with **autism** shows a **male** predominance."],
              ["Caregivers", "Inappropriate feeding or reading the infant’s behavior as rejection can contribute; improvement with a **change of caregiver** suggests parental psychopathology, abuse or neglect."],
              ["Consequences", "Growth delay and impaired development and learning in younger patients; social difficulties and **family stress at mealtimes**."],
              ["Risk: temperament", "**Anxiety disorders, autism, OCD and ADHD**."],
              ["Risk: environment", "**Familial anxiety**; mothers with eating disorders."],
              ["Risk: physiological", "History of **GI conditions**, GERD, vomiting and other medical problems."],
              ["Link to later eating disorders", "**Insufficient evidence**; in some individuals ARFID precedes anorexia nervosa."],
              ["Comorbidity", "Anxiety disorders, OCD, and neurodevelopmental disorders (**autism, ADHD, intellectual developmental disorder**)."]
            ] },
            { type: "callout", kind: "culture", title: "Culture and pregnancy", text: "ARFID is seen worldwide (US, Canada, Australia, Europe, Japan, China) but is **not** diagnosed when avoidance is solely due to **religious or cultural** practice. Sensory-driven food aversion in **pregnancy** is usually not extreme and does not meet criteria (p. 378)." },
            { type: "case", title: "Clinical vignette: the boy who eats five foods", text: "A 10-year-old boy eats only plain pasta, crackers, one brand of chicken nuggets, apple juice and vanilla yogurt. Since toddlerhood he gags at new textures and smells. He has fallen from the 50th to the 10th weight percentile, has iron deficiency, cannot eat at friends’ homes, and the family cooks separate meals. He wants to be bigger and has no worries about fatness.", point: "Sensory-based avoidance with weight faltering, deficiency and psychosocial impairment, no body image disturbance: **ARFID (F50.82)**. Screen for autism and anxiety." }
          ]
        },
        {
          id: "s10-arfid-ddx",
          title: "ARFID: differential diagnosis",
          pages: "378–380",
          blocks: [
            { type: "p", text: "Restriction is a **nonspecific** symptom. ARFID can be diagnosed **alongside** most of these conditions if all criteria are met and the eating disturbance **needs specific clinical attention**; the exception is anorexia nervosa (p. 378)." },
            { type: "table", caption: "ARFID versus its look-alikes", head: ["Condition", "How to tell (pp. 378–380)", "Both?"], rows: [
              ["Medical conditions (GI disease, food allergy, occult cancer)", "Intake is reduced **beyond** what symptoms explain, or the restriction **persists after** the illness resolves; in older, postsurgical or chemotherapy patients the eating must be a **primary focus**.", "Yes"],
              ["PANS (OCD-related disorder)", "**Abrupt, dramatic** onset of OCD symptoms or severe restriction with other neuropsychiatric symptoms; consider with acute onset, late onset or atypical features.", "Assess"],
              ["Neurological, structural or congenital conditions", "Hypotonia, tongue protrusion, unsafe swallow; ARFID allowed if all criteria are met.", "Yes"],
              ["[[dx:rad|Reactive attachment disorder]]", "Withdrawal from caregivers disturbs feeding; ARFID only if feeding is a primary focus.", "Yes"],
              ["Autism spectrum disorder", "Rigid eating and sensory sensitivity often **without** ARFID-level impairment.", "Yes"],
              ["[[dx:specific-phobia|Specific phobia]] (choking or vomiting)", "Fear can be the trigger; when the **eating problem** becomes the focus of care, diagnose ARFID.", "Choose"],
              ["[[dx:social-anxiety|Social anxiety disorder]]", "Fear of being **watched** while eating can occur in both.", "Yes"],
              ["[[dx:anorexia|Anorexia nervosa]]", "Fear of weight gain or behavior preventing gain, plus **body image disturbance**; hard to separate in late childhood or in “**non–fat phobic**” anorexia; ARFID may precede it.", "**Never together**"],
              ["[[dx:ocd|OCD]]", "Restriction from food preoccupations or rituals.", "Yes"],
              ["[[dx:mdd|Major depressive disorder]]", "Global appetite loss that **resolves with mood**.", "Yes"],
              ["Schizophrenia spectrum", "Avoiding foods for **delusional** reasons (poison).", "Yes"],
              ["[[dx:factitious|Factitious disorder]] (self or another)", "Exaggerated, inconsistent diets and complications; in the **imposed on another** form the caregiver is diagnosed.", "No"],
              ["Picky eating", "Developmentally **normal**, transient narrowing in toddlers; resolves without treatment.", "No"]
            ] },
            { type: "callout", kind: "exam", title: "The single question that separates ARFID from anorexia", text: "**Why** is the person not eating? Weight or shape → **anorexia nervosa**. Texture, fear of choking or vomiting, or no interest → **ARFID**. The two are **never** diagnosed together (Criterion C). When fear of fatness is denied but weight-losing behavior persists and seriousness is not recognized, think **non–fat phobic anorexia nervosa** and follow the person over time." }
          ]
        }
      ]
    },
    {
      title: "Anorexia nervosa",
      sections: [
        {
          id: "s10-an-criteria",
          title: "Anorexia nervosa: criteria, types and severity",
          pages: "381–382",
          blocks: [
            { type: "criteria", title: "Anorexia nervosa in brief", code: "F50.01 / F50.02 (F50.01x / F50.02x from Oct 2024)", pages: "381", items: [
              ["A", "**Restriction of energy intake** relative to requirements, leading to a **significantly low body weight** for age, sex, developmental trajectory and physical health (less than minimally normal, or in youth less than minimally expected)."],
              ["B", "**Intense fear** of gaining weight or becoming fat, **or persistent behavior that interferes with weight gain**, even though at a significantly low weight."],
              ["C", "Disturbance in how body weight or shape is **experienced**, **undue influence** of weight or shape on self-evaluation, or persistent **lack of recognition of the seriousness** of the low weight."]
            ], specifiers: [
              ["Restricting type (F50.01)", "No recurrent binge eating or purging in the **last 3 months**; weight loss by **dieting, fasting or excessive exercise**"],
              ["Binge-eating/purging type (F50.02)", "Recurrent binge eating **or** purging (vomiting, laxatives, diuretics, enemas) in the **last 3 months**"],
              ["In partial remission", "Criterion A **not** met for a sustained period, but **B or C** still met"],
              ["In full remission", "**None** of the criteria met for a sustained period"],
              ["Severity (adults, BMI)", "**Mild** ≥17 · **Moderate** 16–16.99 · **Severe** 15–15.99 · **Extreme** <15 kg/m²; youth use BMI percentiles; may be raised for symptoms, disability and need for supervision"]
            ] },
            { type: "defs", title: "Subtypes (p. 382)", items: [
              ["Binge-eating/purging", "Most who binge also purge; some **do not binge** but purge after **small amounts** of food."],
              ["Crossover", "Common over the illness, so the subtype describes **current** symptoms, not the long-term course."],
              ["No amenorrhea criterion", "DSM-5 **removed amenorrhea** from the criteria; it remains a common associated feature."]
            ] },
            { type: "callout", kind: "mnemonic", title: "Remember the severity bands: 17, 16, 15", text: "Count down from **17**: mild **≥17**, moderate **16–16.99**, severe **15–15.99**, extreme **<15**. The bands come from the **WHO thinness** categories (p. 381)." }
          ]
        },
        {
          id: "s10-an-weight",
          title: "Anorexia nervosa: judging low weight",
          pages: "382–383",
          blocks: [
            { type: "p", text: "Criterion A asks for **significantly low** weight. Normal ranges differ between people, so the manual gives guidance rather than a single cutoff. **BMI** = weight in kg ÷ height in m² (p. 382)." },
            { type: "table", caption: "Adults: BMI guidance (p. 382)", head: ["BMI (kg/m²)", "Interpretation"], rows: [
              ["**<17.0**", "WHO moderate or severe thinness: **likely** significantly low"],
              ["17.0–18.5 (or slightly above)", "**Can** be significantly low if history or physiology supports it"],
              ["≥18.5", "Lower limit of normal (CDC, WHO): **most** are not significantly low"],
              ["**≥19.0**", "Not underweight: do **not** diagnose anorexia nervosa; consider **atypical anorexia nervosa** (other specified)"]
            ] },
            { type: "table", caption: "Children and adolescents: BMI-for-age percentile (pp. 382–383)", head: ["BMI-for-age", "Interpretation"], rows: [
              ["**<5th percentile**", "CDC suggests underweight"],
              ["Above the 5th, below the median", "Can be significantly low if the child has **failed to keep** their growth trajectory"],
              ["**Above the median**", "Do **not** diagnose anorexia nervosa; consider **atypical anorexia nervosa**"]
            ] },
            { type: "defs", title: "Criteria B and C in practice (pp. 382–383)", items: [
              ["Fear that grows", "Fear of fatness is usually **not relieved** by weight loss and may **increase** as weight falls."],
              ["Denied fear", "Younger patients and some adults deny it; the clinician may **infer** Criterion B from collateral history, observation, labs or course."],
              ["Body experience", "Some feel globally fat; others know they are thin but see the **abdomen, buttocks and thighs** as “too fat”; weighing, measuring and mirror checking."],
              ["Self-esteem", "Weight loss is an **achievement** of self-discipline; gain is a failure of self-control."],
              ["Insight", "Often lacking; patients are usually **brought by family** and seldom complain of weight loss. Get **collateral** history."]
            ] },
            { type: "case", title: "Clinical vignette: the runner", text: "A 16-year-old cross-country runner has lost 9 kg over 8 months by eating only salad and running twice a day. Her BMI is 15.4, at the 1st percentile. She says her thighs are still fat and panics when she can’t run. She has not binged or purged. Her parents brought her in after she fainted.", point: "**Anorexia nervosa, restricting type, severe** (BMI 15–15.99). Printed code **F50.01**; from October 2024 **F50.012**." }
          ]
        },
        {
          id: "s10-an-features",
          title: "Anorexia nervosa: features, course and risk",
          pages: "383–385",
          blocks: [
            { type: "list", title: "Associated features (pp. 383–384)", items: [
              "Semistarvation and purging affect **most organ systems**; most changes reverse with nutrition, but **bone loss** often does not.",
              "**Depressive** symptoms when underweight (low mood, withdrawal, irritability, insomnia, low libido) are often **secondary to starvation**; diagnose MDD only if warranted.",
              "**Obsessive-compulsive** features: preoccupation with food, collecting recipes, hoarding food. Add **OCD** only for obsessions **unrelated** to food, shape or weight.",
              "Fear of eating in public, ineffectiveness, need for **control**, inflexible thinking, limited spontaneity, restrained emotion.",
              "**Binge-eating/purging type**: more **impulsivity** and **alcohol and drug** misuse.",
              "**Excessive activity**, often preceding onset and hard to control in treatment.",
              "Misusing medication to lose weight; **omitting insulin** in diabetes."
            ] },
            { type: "table", caption: "Anorexia nervosa facts", head: ["Topic", "What the manual says"], rows: [
              ["12-month prevalence", "**0.0%–0.05%** in U.S. community studies (women 0%–0.08%, men 0%–0.01%) (p. 384)"],
              ["Lifetime prevalence", "**0.60%–0.80%** (women 0.9%–1.42%, men 0.12%–0.3%); one adolescent study found **similar** rates in both sexes"],
              ["Where", "Most prevalent in high-income countries; rising in the Global South; lower among Latinx and Black Americans than non-Latinx White Americans"],
              ["Onset", "**Adolescence or young adulthood**; rarely before puberty or **after 40**; often after a stressful event such as **leaving home for college** (p. 384)"],
              ["Course", "Variable: one episode with full recovery, relapse and recovery, or chronic; **most remit within 5 years**; lower remission among hospitalized patients"],
              ["Mortality", "Crude mortality about **5% per decade**, from **medical complications or suicide**"],
              ["Temperament", "Childhood **anxiety disorders** or **obsessional traits**"],
              ["Environment", "Cultures valuing thinness; **modeling** and **elite athletics**"],
              ["Genetics", "Familial risk for anorexia and other disorders; GWAS loci shared with psychiatric and **metabolic** traits (insulin resistance, lipids); imaging suggests abnormal **reward** processing"],
              ["Comorbidity", "Bipolar, depressive and **anxiety** disorders (anxiety often precedes onset); **OCD** especially in restricting type; **alcohol and substance use** especially in binge-eating/purging type (p. 387)"]
            ] },
            { type: "callout", kind: "caution", title: "Suicide (p. 386)", text: "Suicide rates are about **18 times** those of matched peers, and suicide is the **second leading cause of death** in anorexia nervosa. **One-quarter to one-third** have suicidal ideation and **9%–25%** have attempted suicide. Contributors: sexual abuse, impaired decision-making, **nonsuicidal self-injury** and mood disorders." },
            { type: "callout", kind: "culture", title: "Non–fat phobic presentations", text: "An expressed fear of fatness is **less often** reported in some Asian populations, where restriction is explained by a culturally sanctioned complaint such as **gastrointestinal discomfort**. Service use in the U.S. is **lower** among underserved ethnic and racialized groups (p. 385). Do **not** rule anorexia nervosa out because of **older age** (p. 384)." }
          ]
        },
        {
          id: "s10-an-medical",
          title: "Anorexia nervosa: medical findings",
          pages: "385–386",
          blocks: [
            { type: "table", caption: "Laboratory and test findings (p. 385)", head: ["System", "Findings"], rows: [
              ["Hematology", "**Leukopenia** (with relative lymphocytosis), mild anemia, thrombocytopenia; rarely bleeding"],
              ["Chemistry", "High **BUN** (dehydration), **hypercholesterolemia**, raised liver enzymes; sometimes low magnesium, zinc, **phosphate**, high amylase"],
              ["Vomiting", "**Metabolic alkalosis** (high bicarbonate), **hypochloremia**, **hypokalemia**"],
              ["Laxatives", "Mild **metabolic acidosis**"],
              ["Endocrine", "T4 low-normal, **T3 low**, **reverse T3 high**; low estrogen in females, low testosterone in males"],
              ["ECG", "**Sinus bradycardia**; rarely arrhythmias; **QTc prolongation** in some"],
              ["Bone", "Low bone mineral density, osteopenia or osteoporosis; **fracture risk** raised"],
              ["EEG", "Diffuse slowing of **metabolic encephalopathy** with severe fluid and electrolyte disturbance"],
              ["Energy", "Markedly **reduced resting energy expenditure**"]
            ] },
            { type: "defs", title: "Physical signs (pp. 385–386)", items: [
              ["General", "**Emaciation**; hypotension, **hypothermia**, **bradycardia**."],
              ["Skin and hair", "**Lanugo** (fine downy hair); yellow skin from **hypercarotenemia**; rarely petechiae or ecchymoses."],
              ["Edema", "Peripheral edema, especially during **weight restoration** or after stopping laxatives or diuretics."],
              ["Menses", "**Amenorrhea** is common and usually follows weight loss, but precedes it in a minority; menarche may be delayed."],
              ["Symptoms", "Constipation, abdominal pain, **cold intolerance**, lethargy, or excess energy."],
              ["Vomiting signs", "**Parotid** enlargement, **dental enamel erosion**, calluses or scars on the back of the hand (**Russell’s sign**)."]
            ] },
            { type: "callout", kind: "exam", title: "Lab patterns worth memorizing", text: "**Vomiting** → hypokalemic, **hypochloremic metabolic alkalosis**. **Laxatives** → metabolic **acidosis**. **Starvation** → leukopenia, high cholesterol, low T3 with high reverse T3 (euthyroid sick pattern), bradycardia, low bone density. Normal labs do **not** exclude anorexia nervosa." }
          ]
        },
        {
          id: "s10-an-ddx",
          title: "Anorexia nervosa: differential diagnosis",
          pages: "386–387",
          blocks: [
            { type: "p", text: "Consider other causes of low weight or weight loss whenever the picture is **atypical**, for example **onset after age 40** (p. 386)." },
            { type: "table", caption: "Anorexia nervosa versus its look-alikes", head: ["Condition", "How to tell (pp. 386–387)"], rows: [
              ["Medical conditions (GI disease, hyperthyroidism, occult cancer, AIDS)", "Weight loss **without** fear of gain, body image disturbance or weight-preventing behavior. Medical weight loss can **trigger** anorexia; rarely it follows **bariatric surgery**."],
              ["[[dx:mdd|Major depressive disorder]]", "Weight loss without desire for thinness or fear of gaining."],
              ["[[dx:schizophrenia|Schizophrenia]]", "Odd eating and weight loss, rarely with fear of gain or body image disturbance."],
              ["Substance use disorders", "Low weight from poor intake without fear of gain; **stimulant or cocaine** use plus fear of gain may be a weight-preventing behavior: assess for comorbid anorexia."],
              ["[[dx:social-anxiety|Social anxiety disorder]]", "Add only if social fears go **beyond eating** (e.g., public speaking)."],
              ["[[dx:ocd|OCD]]", "Add only for obsessions and compulsions **unrelated to food** (e.g., contamination)."],
              ["[[dx:bdd|Body dysmorphic disorder]]", "Add only if the concern is **unrelated to shape and size** (e.g., the nose)."],
              ["[[dx:bulimia|Bulimia nervosa]]", "Binges and compensation at **normal or high** weight; at low weight it is anorexia, binge-eating/purging type."],
              ["[[dx:arfid|ARFID]]", "Weight loss or deficiency **without** fear of fatness or body image disturbance."]
            ] },
            { type: "case", title: "Clinical vignette: low weight and binges", text: "A 22-year-old woman with a BMI of 16.4 binges twice a week and vomits after most meals. She is terrified of gaining weight and weighs herself hourly. She meets every bulimia nervosa criterion except weight.", point: "Binges and purges at a significantly low weight: **anorexia nervosa, binge-eating/purging type, moderate** (F50.02; from October 2024 **F50.021**). Bulimia is not added (mutually exclusive)." }
          ]
        }
      ]
    },
    {
      title: "Bulimia nervosa",
      sections: [
        {
          id: "s10-binge",
          title: "What counts as a binge",
          pages: "388, 393",
          blocks: [
            { type: "p", text: "Bulimia nervosa and binge-eating disorder share **one definition** of a binge (Criterion A in both). Both parts are required." },
            { type: "compare", title: "The two parts of a binge (pp. 388, 393)", items: [
              { title: "1. Objectively large amount", color: "drug", points: ["**Definitely larger** than most people would eat in a similar time and **circumstances** (a holiday meal is judged differently).", "In a **discrete period**, usually **under 2 hours**; it may move from restaurant to home.", "**Continual snacking** through the day is **not** a binge.", "Defined more by **amount** than by craving a nutrient."] },
              { title: "2. Loss of control", color: "case", points: ["Feeling unable to **stop** or control what or how much.", "Need not be absolute: may keep eating while the phone rings but stop if someone walks in.", "May become a generalized pattern of uncontrolled eating; **giving up** trying to control eating counts.", "Some describe a **dissociative** quality; binges can be **planned**."] }
            ] },
            { type: "defs", title: "Around the binge (pp. 388–389, 394)", items: [
              ["Secrecy and shame", "Binges happen in **secret**, often until **painfully full**."],
              ["Triggers", "**Negative affect** most often; also interpersonal stress, **dietary restraint**, feelings about weight and shape, boredom."],
              ["Aftermath", "Short-term relief, then **negative self-evaluation and dysphoria**."],
              ["Subjective binge", "Loss of control over a **normal** amount is not a DSM binge (loss-of-control eating), though it is clinically important, especially in youth."]
            ] }
          ]
        },
        {
          id: "s10-bn-criteria",
          title: "Bulimia nervosa: criteria and severity",
          pages: "387–389",
          blocks: [
            { type: "criteria", title: "Bulimia nervosa in brief", code: "F50.2 (F50.20–F50.25 from Oct 2024)", pages: "387", items: [
              ["A", "Recurrent **binge eating** (large amount in a discrete period **and** loss of control)."],
              ["B", "Recurrent **inappropriate compensatory behaviors**: self-induced **vomiting**; misuse of **laxatives, diuretics** or other medications; **fasting**; or **excessive exercise**."],
              ["C", "Binges **and** compensatory behaviors both occur, on average, at least **once a week for 3 months**."],
              ["D", "Self-evaluation is **unduly influenced by body shape and weight**."],
              ["E", "Not **exclusively during** episodes of anorexia nervosa."]
            ], specifiers: [
              ["In partial remission", "**Some**, but not all, criteria met for a sustained period"],
              ["In full remission", "**None** met for a sustained period"],
              ["Severity (compensatory behaviors per week)", "**Mild** 1–3 · **Moderate** 4–7 · **Severe** 8–13 · **Extreme** ≥14; may be raised for other symptoms and disability"]
            ] },
            { type: "defs", title: "Compensatory behaviors (p. 389)", items: [
              ["Vomiting", "The **most common**; relieves fullness and fear of gain; may become the goal (binge to vomit); fingers or instruments, eventually **at will**; rarely **ipecac**."],
              ["Purging by drugs", "Laxatives and diuretics; enemas rarely, and seldom alone."],
              ["Other", "**Thyroid hormone**; **omitting insulin** in diabetes; **fasting** a day or more."],
              ["Excessive exercise", "Interferes with important activities, happens at inappropriate times or places, or continues **despite injury**."],
              ["Self-evaluation", "Shape and weight dominate **self-esteem**, much as in anorexia nervosa."]
            ] },
            { type: "callout", kind: "exam", title: "Severity counts the compensations, not the binges", text: "Bulimia severity is graded by **compensatory behaviors** per week; binge-eating disorder severity by **binges** per week. Anorexia severity is graded by **BMI**. The thresholds 1–3, 4–7, 8–13 and ≥14 are the **same** for bulimia and binge-eating disorder." }
          ]
        },
        {
          id: "s10-bn-features",
          title: "Bulimia nervosa: features, course and risk",
          pages: "389–391",
          blocks: [
            { type: "table", caption: "Bulimia nervosa facts", head: ["Topic", "What the manual says"], rows: [
              ["Weight", "Usually **normal or overweight** (BMI ≥18.5 and <30); uncommon in obesity (p. 389)"],
              ["Between binges", "Restrict calories and choose **diet** foods; avoid fattening or binge-trigger foods"],
              ["Menses", "Irregular or absent menses are common"],
              ["Dangerous complications", "Electrolyte disturbance; rare but fatal **esophageal tears**, **gastric rupture**, **arrhythmias**; **cardiac and skeletal myopathy** from ipecac; laxative dependence; **rectal prolapse**"],
              ["12-month prevalence", "**0.14%–0.3%** (women 0.22%–0.5%, men 0.05%–0.1%) (pp. 389–390)"],
              ["Lifetime prevalence", "**0.28%–1.0%** (women 0.46%–1.5%, men 0.05%–0.08%); adolescents 13–18: **1.3%** girls, **0.5%** boys"],
              ["Ethnicity and place", "Similar across U.S. ethnoracial groups; highest in high-income countries; rising in low- and middle-income countries"],
              ["Onset", "**Adolescence or young adulthood**; rare before puberty or after 40; binges often begin **during or after dieting**; stressful events can precipitate (p. 390)"],
              ["Course", "Chronic or intermittent for years; many improve over time, and **treatment clearly helps**; remission **>1 year** predicts a better outcome"],
              ["Mortality", "Raised all-cause and suicide mortality; crude mortality **nearly 2% per decade**"],
              ["Crossover", "**10%–15%** cross to anorexia nervosa (often back again); some stop compensating and become **binge-eating disorder**. Diagnose by the **last 3 months**"],
              ["Risk", "Weight concern, low self-esteem, depressive symptoms, **social anxiety**, childhood GAD; thin-ideal internalization; **childhood sexual or physical abuse**; childhood **obesity** and **early puberty**; familial and genetic risk; severe comorbidity predicts a worse outcome"],
              ["Sex", "Much more common in **women**; men are underrepresented in treatment"],
              ["Comorbidity", "Most have another disorder: **depressive** (mood change often follows onset and remits with treatment), anxiety, **substance use ≥30%** (alcohol, stimulants, often begun to control appetite), personality disorders, most often **borderline** (p. 392)"]
            ] },
            { type: "callout", kind: "caution", title: "Suicide (p. 391)", text: "About **one-quarter to one-third** have had suicidal ideation, and a **similar proportion** have attempted suicide." }
          ]
        },
        {
          id: "s10-bn-medical",
          title: "Bulimia nervosa: markers and differential",
          pages: "391–392",
          blocks: [
            { type: "defs", title: "Diagnostic markers (p. 391)", items: [
              ["No test", "No specific test exists; findings come from **purging**."],
              ["Electrolytes", "**Hypokalemia** (can cause arrhythmias), hypochloremia, hyponatremia."],
              ["Acid–base", "Vomiting → **metabolic alkalosis**; laxatives, diuretics or dehydration → **metabolic acidosis**."],
              ["Amylase", "Mildly raised, probably **salivary** isoenzyme."],
              ["Mouth", "Permanent **enamel loss**, especially the **lingual** surfaces of the front teeth (chipped, “**moth-eaten**”), more caries, enlarged **parotids**."],
              ["Hands", "Calluses or scars on the **dorsum of the hand** from inducing vomiting."],
              ["Exam", "Often **normal**."]
            ] },
            { type: "table", caption: "Bulimia nervosa versus its look-alikes", head: ["Condition", "How to tell (pp. 391–392)", "Both?"], rows: [
              ["[[dx:anorexia|Anorexia nervosa, binge-eating/purging type]]", "Binges only during anorexia → anorexia. After anorexia, diagnose bulimia only when **all** bulimia criteria have been met for **3 months**.", "No"],
              ["[[dx:bed|Binge-eating disorder]]", "Binges **without** regular compensation.", "No"],
              ["Kleine-Levin syndrome", "Disturbed eating with **hypersomnia**, without shape and weight concern.", "No"],
              ["[[dx:mdd|MDD with atypical features]]", "Overeating without compensation or shape concern.", "**Yes**, if both met"],
              ["[[dx:borderline-pd|Borderline personality disorder]]", "Binge eating counts toward the **impulsivity** criterion.", "**Yes**, if both met"]
            ] },
            { type: "case", title: "Clinical vignette: the law student", text: "A 24-year-old law student of normal weight has, for 8 months, binged on cereal, bread and ice cream four evenings a week, then vomited. She fasts the next day. She says her weight decides whether she is a good person. Her potassium is 3.1 mmol/L and her parotids are swollen.", point: "**Bulimia nervosa**: four binge-compensation days with vomiting plus fasting gives about **8 compensatory behaviors a week** → **severe** (printed F50.2; from October 2024 **F50.23**). Correct the hypokalemia." }
          ]
        }
      ]
    },
    {
      title: "Binge-eating disorder",
      sections: [
        {
          id: "s10-bed-criteria",
          title: "Binge-eating disorder: criteria",
          pages: "392–394",
          blocks: [
            { type: "criteria", title: "Binge-eating disorder in brief", code: "F50.81 (F50.810–F50.819 from Oct 2024)", pages: "392–393", items: [
              ["A", "Recurrent **binge eating** (large amount in a discrete period **and** loss of control)."],
              ["B", "Binges are associated with **three or more** of:", [
                "Eating much more **rapidly** than normal.",
                "Eating until **uncomfortably full**.",
                "Eating large amounts when **not physically hungry**.",
                "Eating **alone** because of embarrassment about how much.",
                "Feeling **disgusted**, depressed or very **guilty** afterward."
              ]],
              ["C", "**Marked distress** about binge eating."],
              ["D", "At least **once a week for 3 months**, on average."],
              ["E", "No **recurrent** inappropriate compensatory behavior as in bulimia nervosa, and not exclusively during bulimia or anorexia nervosa."]
            ], specifiers: [
              ["In partial remission", "Binges average **less than once a week** for a sustained period"],
              ["In full remission", "**None** of the criteria met for a sustained period"],
              ["Severity (binges per week)", "**Mild** 1–3 · **Moderate** 4–7 · **Severe** 8–13 · **Extreme** ≥14"]
            ] },
            { type: "callout", kind: "mnemonic", title: "Criterion B: RUN-AD", text: "**R**apid eating · **U**ncomfortably full · **N**ot hungry · **A**lone from embarrassment · **D**isgusted, depressed or guilty after. Three of five are needed (p. 392)." },
            { type: "callout", kind: "key", title: "What binge-eating disorder does not require", text: "No **weight** criterion (normal weight, overweight or obese), and **no shape and weight self-evaluation** criterion, unlike bulimia. **Marked distress** about bingeing (C) is required. Occasional compensation does not exclude it; **recurrent** compensation does." }
          ]
        },
        {
          id: "s10-bed-features",
          title: "Binge-eating disorder: features, course and differential",
          pages: "394–396",
          blocks: [
            { type: "table", caption: "Binge-eating disorder facts", head: ["Topic", "What the manual says"], rows: [
              ["Weight", "Occurs at **normal weight, overweight and obesity**; linked to obesity in treatment seekers but **distinct** from it: most obese people do not binge (p. 394)"],
              ["Versus weight-matched obesity", "Eat **more calories** in the lab, with more impairment, distress and psychiatric comorbidity and lower quality of life"],
              ["12-month prevalence", "**0.44%–1.2%**; **2–3 times** higher in women (0.6%–1.6% vs 0.26%–0.8%)"],
              ["Lifetime prevalence", "**0.85%–2.8%** (women 1.25%–3.5%, men 0.42%–2.0%); the **highest** of the three"],
              ["Ethnicity and place", "Comparable across U.S. groups; similar in high-income countries; high in parts of Latin America; **Mexican Americans** higher than people in Mexico"],
              ["Onset", "Adolescence or young adulthood, sometimes later; treatment seekers are **older** than those with anorexia or bulimia (p. 394)"],
              ["Dieting order", "Dieting usually **follows** bingeing in BED; in bulimia, dieting usually **precedes** it"],
              ["Course", "**Higher remission** than bulimia or anorexia; some have a persistent, relapsing course; crossover to other eating disorders is **uncommon** (p. 395)"],
              ["Risk", "Runs in **families** (additive genetic influence)"],
              ["Culture", "Black Americans may report **less distress** and present with **more frequent** bingeing"],
              ["Suicide", "Suicidal ideation in about **25%**"],
              ["Consequences", "Social role problems, lower quality of life, more **medical morbidity and mortality** and health care use; weight gain and obesity"],
              ["Comorbidity", "Comparable to bulimia and anorexia; most often **MDD** and **alcohol use disorder**; linked to binge **severity**, not degree of obesity (p. 396)"]
            ] },
            { type: "table", caption: "Binge-eating disorder versus its look-alikes", head: ["Condition", "How to tell (pp. 395–396)", "Both?"], rows: [
              ["[[dx:bulimia|Bulimia nervosa]]", "BED has **no recurrent compensation** and no sustained restriction between binges (though dieting attempts are common); better treatment response.", "No"],
              ["Obesity", "BED has more **overvaluation** of shape and weight, more comorbidity, and better response to psychological treatment.", "Obesity is not a mental disorder"],
              ["[[dx:mdd|Depressive]] and [[dx:bipolar-i|bipolar]] disorders", "Increased appetite in episodes may lack loss of control.", "**Yes**, if both met"],
              ["[[dx:borderline-pd|Borderline personality disorder]]", "Binge eating is part of the impulsivity criterion.", "**Yes**, if both met"]
            ] },
            { type: "case", title: "Clinical vignette: the night-shift nurse", text: "A 41-year-old nurse with a BMI of 34 eats a family pizza and a tub of ice cream alone in her car three times a week, fast, until in pain, though not hungry, then feels disgusted. This has happened for a year. She never vomits, fasts or exercises to compensate, and is very distressed.", point: "**Binge-eating disorder, mild** (1–3 binges a week): printed **F50.81**, from October 2024 **F50.810**. Obesity is not itself a mental disorder." }
          ]
        }
      ]
    },
    {
      title: "Other presentations and putting it together",
      sections: [
        {
          id: "s10-other",
          title: "Other specified and unspecified",
          pages: "396–397",
          blocks: [
            { type: "p", text: "**Other specified (F50.89)**: record the reason, such as “other specified feeding or eating disorder, **bulimia nervosa of low frequency**.” **Unspecified (F50.9)**: no reason given, or not enough information (e.g., the **emergency room**)." },
            { type: "table", caption: "The five other specified examples (p. 396)", head: ["Example", "What is missing or different"], rows: [
              ["**Atypical anorexia nervosa**", "All anorexia criteria met, but despite significant weight loss, weight is **within or above normal**; medical complications can match anorexia"],
              ["Bulimia nervosa of low frequency and/or limited duration", "Binges and compensation **<1/week** and/or **<3 months**"],
              ["Binge-eating disorder of low frequency and/or limited duration", "Binges **<1/week** and/or **<3 months**"],
              ["**Purging disorder**", "Recurrent purging to influence weight or shape **without binge eating**"],
              ["**Night eating syndrome**", "Eating after **waking from sleep** or excessive eating after the evening meal, **with awareness and recall**; not explained by sleep-schedule changes, social norms, BED, another disorder, substances or medication"]
            ] },
            { type: "callout", kind: "exam", title: "Atypical anorexia and medical danger", text: "A person who loses 20 kg from obesity to a BMI of 24 with intense fear of gain and body image disturbance has **atypical anorexia nervosa** (other specified). Being at a normal weight does **not** mean being medically safe: bradycardia, electrolyte problems and amenorrhea can occur (p. 396)." },
            { type: "callout", kind: "caution", title: "Night eating versus sleep-related eating", text: "In night eating syndrome the person is **aware** and **remembers** eating. Eating during partial arousal **without recall** points to **sleepwalking with sleep-related eating** (NREM sleep arousal disorder, Chapter 12) or a **medication** effect such as a sedative-hypnotic." }
          ]
        },
        {
          id: "s10-compare",
          title: "Comparing the eating disorders",
          pages: "376–396",
          blocks: [
            { type: "table", caption: "Side by side", head: ["", "Anorexia nervosa", "Bulimia nervosa", "Binge-eating disorder", "ARFID"], rows: [
              ["Weight", "**Significantly low**", "Normal or overweight", "Any; often obese", "Low, deficient, or normal with impairment"],
              ["Binges", "Only in B/P type", "**Yes**, ≥1/week", "**Yes**, ≥1/week", "No"],
              ["Compensation", "Restricting or purging", "**Recurrent**", "**Not recurrent**", "No"],
              ["Shape and weight concern", "Yes (or behavior or denial)", "**Self-evaluation** criterion", "Not required", "**Absent**"],
              ["Duration", "None stated", "**3 months**", "**3 months**", "None stated"],
              ["Severity", "**BMI**", "Compensations/week", "Binges/week", "None"],
              ["Typical onset", "Adolescence, young adulthood", "Adolescence, young adulthood", "Adolescence to later adulthood", "Infancy, childhood"],
              ["Sex", "Mostly female", "Mostly female", "Female 2–3:1", "About equal"],
              ["Mortality", "About **5%/decade**", "Nearly **2%/decade**", "Raised", "Infants at risk"],
              ["2022 code", "F50.01 / F50.02", "F50.2", "F50.81", "F50.82"],
              ["Code from Oct 2024", "F50.010–F50.029", "F50.20–F50.25", "F50.810–F50.819", "F50.82"]
            ] },
            { type: "table", caption: "Time rules in this chapter", head: ["Disorder", "Duration"], rows: [
              ["Pica", "≥**1 month**"],
              ["Rumination disorder", "≥**1 month**"],
              ["Anorexia nervosa subtype", "Behavior in the **last 3 months**"],
              ["Bulimia nervosa", "≥1/week for **3 months**"],
              ["Binge-eating disorder", "≥1/week for **3 months**"],
              ["Bulimia after anorexia", "All bulimia criteria for **3 months**"]
            ] },
            { type: "ladder", title: "BMI bands for adults", ticks: [[0, "<15"], [25, "15"], [50, "16"], [75, "17"], [100, "18.5+"]], rows: [
              { label: "Extreme", dx: "anorexia", from: 0, to: 25, color: "case", span: "<15", note: "Highest medical risk" },
              { label: "Severe", dx: "anorexia", from: 25, to: 50, color: "hy", span: "15–15.99", note: "" },
              { label: "Moderate", dx: "anorexia", from: 50, to: 75, color: "drug", span: "16–16.99", note: "" },
              { label: "Mild", dx: "anorexia", from: 75, to: 100, color: "mech", span: "≥17", note: "Up to the clinical judgment of “significantly low”" }
            ], note: "A BMI of **19 or more** is not underweight: consider atypical anorexia nervosa." }
          ]
        },
        {
          id: "s10-approach",
          title: "A practical approach and the classic traps",
          pages: "371–397",
          blocks: [
            { type: "steps", title: "Six steps for an eating problem", items: [
              ["1. Medical safety first", "Vital signs, orthostatics, temperature, ECG, electrolytes (potassium, phosphate, magnesium), glucose; ask about suicidal thoughts."],
              ["2. Is the weight significantly low?", "Adult BMI (<17 likely; ≥19 not) or youth BMI percentile and growth curve. Low → think anorexia nervosa or ARFID."],
              ["3. Why the restriction?", "Weight or shape → anorexia nervosa. Sensory, fear of choking or vomiting, no interest → ARFID. Medical or psychiatric cause → treat that, diagnose ARFID only if beyond it."],
              ["4. Binges?", "Objectively large amount plus loss of control, ≥1/week for 3 months. With recurrent compensation → bulimia (normal weight) or anorexia B/P (low weight). Without → binge-eating disorder."],
              ["5. Something else eaten or brought up?", "Nonfood ≥1 month → pica. Effortless regurgitation ≥1 month → rumination disorder."],
              ["6. Specify and code", "Type, severity (BMI or weekly frequency), remission, then the code current on the date of service (October 2024 codes)."]
            ] },
            { type: "callout", kind: "key", title: "Twelve traps", text: "1) Binges and purges at **low weight** = anorexia B/P type, **not** bulimia. 2) Anorexia, bulimia and BED are **mutually exclusive** per episode. 3) **Amenorrhea** is no longer a criterion. 4) Anorexia severity = **BMI**; bulimia = **compensations**/week; BED = **binges**/week. 5) Adult BMI **≥19**, or youth above the **median**, rules out anorexia: think **atypical anorexia**. 6) Fear of fatness can be **inferred** from behavior. 7) ARFID has **no** body image disturbance and is never diagnosed with anorexia. 8) BED needs **3 of 5** binge features and **marked distress**, not a weight. 9) Snacking all day is **not** a binge. 10) Purging **without** binges = **purging disorder** (other specified). 11) Pica needs age about **2 or older** and is not cultural practice. 12) Codes changed on **October 1, 2024**." },
            { type: "p", text: "Practice with the [[helper:eating|eating disorder helper]], then compare [[dx:anorexia|anorexia nervosa]] with [[dx:arfid|ARFID]] and [[dx:bulimia|bulimia nervosa]] with [[dx:bed|binge-eating disorder]] side by side in the library." }
          ]
        }
      ]
    }
  ]
});
