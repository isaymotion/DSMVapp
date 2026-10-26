/* Chapter 15 study guide. Source: DSM-5-TR, Disruptive, Impulse-Control, and Conduct Disorders (pp. 521–541).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. Codes checked against ICD-10-CM through FY2027 (October 1, 2026)
   and the APA DSM-5-TR updates of September 2022–2025: no changes for this chapter. Treatment notes and other
   clinical teaching are outside the DSM and labeled as such. */
SP.add("ch15", "guide", {
  intro: "This chapter gathers the problems of **self-control of emotion and behavior** that show up as **violating the rights of others** (aggression, destroying property) or as **serious conflict with rules and authority** (p. 521). The disorders differ in **which kind of self-control fails**: **conduct disorder** is mostly about behavior, **intermittent explosive disorder** mostly about uncontrolled anger, and **oppositional defiant disorder** sits in between, with both an angry mood and defiant behavior. **Pyromania** and **kleptomania** are narrow impulse problems, fire setting or stealing that **relieves inner tension**. **Antisocial personality disorder** is listed here too, but its criteria live in [[ch:ch18|Chapter 18]]. Because so many of these behaviors occur in ordinary children, every diagnosis turns on **frequency, persistence, pervasiveness and impairment** judged against what is **normal for age, gender and culture** (p. 522). The [[helper:disruptive|disruptive behavior helper]] walks through the choices.",
  objectives: [
    "State the criteria for **oppositional defiant disorder**: **4 of 8** symptoms in three groups for **6 months**, with **someone other than a sibling**, the **age-based frequency guide**, and severity by **number of settings**.",
    "Apply the **DMDD rule**: if criteria for disruptive mood dysregulation disorder are met, **ODD is not diagnosed**, even when all its criteria are met.",
    "Tell **Criterion A1** (verbal or harmless physical aggression **twice a week for 3 months**) from **Criterion A2** (**three** damaging or injuring outbursts in **12 months**) in **intermittent explosive disorder**, and use its **age 6** threshold and exclusions.",
    "State the criteria for **conduct disorder**: **3 of 15** behaviors in **four groups** in the past **12 months**, at least **1 in the past 6 months**, and the age-18 rule for **antisocial personality disorder**.",
    "Code conduct disorder by onset (**F91.1** childhood, **F91.2** adolescent, **F91.9** unspecified, split at **age 10**) and apply the **limited prosocial emotions** specifier (**2 of 4** traits over **12 months**, from **several informants**).",
    "Separate **pyromania** and **kleptomania** from fire setting and stealing driven by **gain, anger, delusions, impaired judgment, conduct disorder, mania or antisocial personality disorder**.",
    "Know which pairs can be **diagnosed together** (ODD with CD; ADHD with CD; IED with ADHD, CD, ODD or ASD) and which **cannot** (ODD with DMDD; IED with DMDD).",
    "Use **other specified (F91.8)** and **unspecified (F91.9)** correctly, and recognize that **F91.9** is shared with conduct disorder of unspecified onset."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s15-map",
          title: "How the chapter is built",
          pages: "521–522",
          blocks: [
            { type: "table", caption: "Diagnoses in this chapter (codes as printed in DSM-5-TR, 2022; unchanged through October 2026)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:oppositional-defiant|Oppositional defiant disorder]]", "F91.3", "Angry or irritable mood, defiance or vindictiveness; **4 of 8** symptoms for **6 months**", "522–527"],
              ["[[dx:ied|Intermittent explosive disorder]]", "F63.81", "Impulsive, **out-of-proportion** aggressive outbursts; age **6** or older", "527–530"],
              ["[[dx:conduct-disorder|Conduct disorder]]", "F91.1 · F91.2 · F91.9", "Violating others’ rights or major rules; **3 of 15** behaviors in **12 months**", "530–537"],
              ["[[dx:antisocial-pd|Antisocial personality disorder]]", "F60.2", "Cross-listed here; criteria in Chapter 18", "537"],
              ["[[dx:pyromania|Pyromania]]", "F63.1", "Repeated deliberate fire setting for **fascination and relief**, not for gain or anger", "537–539"],
              ["[[dx:kleptomania|Kleptomania]]", "F63.2", "Repeated failure to resist stealing **unneeded** objects; tension then relief", "539–541"],
              ["[[dx:other-specified-disruptive|Other specified disruptive, impulse-control, and conduct disorder]]", "F91.8", "Subthreshold, **reason recorded**", "541"],
              ["[[dx:unspecified-disruptive|Unspecified disruptive, impulse-control, and conduct disorder]]", "F91.9", "Subthreshold, reason not given or not enough information", "541"]
            ] },
            { type: "callout", kind: "exam", title: "Two codes worth memorizing", text: "Conduct disorder is coded by **onset**: **F91.1** childhood-onset, **F91.2** adolescent-onset, **F91.9** unspecified onset. The **unspecified disruptive, impulse-control, and conduct disorder** also uses **F91.9**, so the code alone does not tell you which one was meant: the written diagnosis does. The other specified category is **F91.8**; ODD is **F91.3**." },
            { type: "compare", title: "Where each disorder sits on the emotion–behavior line (pp. 521–522)", items: [
              { title: "Mostly behavior", color: "case", points: ["[[dx:conduct-disorder|Conduct disorder]]: aggression, destruction, deceit, theft and rule-breaking.", "The behavior **may or may not** come from poorly controlled emotion; some aggression reflects **constricted** emotion."] },
              { title: "Both", color: "guide", points: ["[[dx:oppositional-defiant|ODD]]: **anger and irritability** (emotion) plus **arguing and defiance** (behavior)."] },
              { title: "Mostly emotion", color: "hy", points: ["[[dx:ied|IED]]: outbursts of anger **out of proportion** to the provocation or stressor."] },
              { title: "Narrow impulses", color: "clin", points: ["[[dx:pyromania|Pyromania]] and [[dx:kleptomania|kleptomania]]: one specific act (fire setting or stealing) that **relieves inner tension**."] }
            ] },
            { type: "update", kind: "tr", title: "What the text revision changed", text: "The criteria and codes are essentially those of DSM-5 (2013), with updated terms such as **intellectual developmental disorder** in the pyromania exclusions. The text revision rewrote the descriptive sections: new **Association With Suicidal Thoughts or Behavior** sections (raised suicide attempt risk in IED with PTSD, conduct disorder, fire setting and kleptomania; ODD’s link to suicide attempts appears under Associated Features), revised **culture-related** sections warning that disruptive disorders may be **overdiagnosed or misdiagnosed** in some cultural groups and that reactions to **racism** can be mistaken for conduct disorder, and updated prevalence figures. Confirm details against pp. 521–541." },
            { type: "update", kind: "post", year: "2026", title: "No code changes through FY2027", source: "ICD-10-CM FY2025, FY2026 and FY2027 code tables (effective October 1 of 2024, 2025 and 2026); APA DSM-5-TR coding updates (September 2022, 2023, 2024 and 2025)", text: "F91.1, F91.2, F91.3, F91.8, F91.9, F63.1, F63.2, F63.81 and F60.2 were **not changed** in the October 2024, October 2025 or October 2026 ICD-10-CM updates, and the APA’s DSM-5-TR coding updates have not touched this chapter. The codes printed in the manual are still current. Check the code set in force on the date of service." },
            { type: "callout", kind: "pearl", title: "Historical note (outside the manual’s text)", text: "In DSM-IV, ODD could not be diagnosed when conduct disorder was present. Since DSM-5, **both can be given** when both sets of criteria are met (p. 536), and ODD’s symptoms are grouped into **mood, behavior and vindictiveness**. Older textbooks may still teach the exclusion." }
          ]
        },
        {
          id: "s15-spectrum",
          title: "Emotion versus behavior: the externalizing spectrum",
          pages: "521–522",
          blocks: [
            { type: "p", text: "Every disorder in the chapter involves trouble regulating **both** feelings and actions; what varies is the **balance** (p. 521). The common thread is that the problem shows up as harm to others or clashes with society, which is what separates this chapter from, say, depression with irritability." },
            { type: "defs", title: "Themes that run through the chapter (pp. 521–522)", items: [
              ["Male predominance", "All the disorders are **more common in boys and men**, though the size of the gap varies by disorder and by age. Kleptomania is the exception: **women outnumber men 3:1** (p. 540)."],
              ["Early onset", "Most begin in **childhood or adolescence**. ODD or conduct disorder starting for the **first time in adulthood is very rare**."],
              ["ODD → CD link", "Most children whose conduct disorder starts **before adolescence** had ODD first. But **most children with ODD never develop conduct disorder**; they are also at risk for **anxiety and depressive disorders**."],
              ["The normative line", "Many symptoms appear in typically developing children. Judge **frequency, persistence, pervasiveness across settings and impairment** against what is normal for the person’s **age, gender and culture**."],
              ["Externalizing spectrum", "The disorders share a broad **externalizing** liability linked to the personality dimensions of **disinhibition** and some facets of **negative emotionality**, and to low **constraint** and low **agreeableness**. This may explain why they co-occur with each other, with **substance use disorders** and with **antisocial personality disorder**. The exact shared cause is unknown."]
            ] },
            { type: "flow", title: "A common developmental path, not a fixed one (pp. 521–524, 532, 534)", vertical: true, steps: [
              ["Difficult, undercontrolled temperament", "High emotional reactivity, poor frustration tolerance"],
              ["Oppositional defiant disorder", "Usually first seen in the preschool years"],
              ["Childhood-onset conduct disorder", "Before age 10; often with ADHD"],
              ["Antisocial personality disorder", "From age 18, only if conduct disorder began before 15"]
            ], note: "Each step is a **risk**, not a destiny: most children with ODD do not develop conduct disorder, and most conduct disorder **remits by adulthood**." },
            { type: "callout", kind: "culture", title: "Culture check (pp. 525, 528, 535)", text: "The manual repeatedly warns that disruptive disorders may be **misdiagnosed or overdiagnosed** in some cultural groups. Behavior that is near-normal in a **high-crime area or war zone**, or anger in response to **racism**, should not be read automatically as a disorder. Always ask what the behavior means **in its context**." }
          ]
        }
      ]
    },
    {
      title: "Oppositional defiant disorder",
      sections: [
        {
          id: "s15-odd-criteria",
          title: "ODD criteria and severity",
          pages: "522–523",
          blocks: [
            { type: "criteria", title: "Oppositional defiant disorder in brief", code: "F91.3", pages: "522–523", items: [
              ["A", "For **6 months** or more, a pattern of **angry/irritable mood, argumentative/defiant behavior or vindictiveness**, shown by at least **4** of the 8 symptoms below, seen with **at least one person other than a sibling**.", ["**Angry/irritable mood:** (1) frequently loses temper; (2) frequently touchy or easily annoyed; (3) frequently angry and resentful.", "**Argumentative/defiant behavior:** (4) frequently argues with authority figures (for youth, with adults); (5) frequently and actively defies or refuses requests or rules from authority figures; (6) frequently annoys others on purpose; (7) frequently blames others for own mistakes or misbehavior.", "**Vindictiveness:** (8) spiteful or vindictive at least **twice** in the past 6 months."], "Frequency guide: under age **5**, the behavior should occur on **most days**; from age **5**, at least **once a week**, in both cases for 6 months (except symptom 8). Also weigh whether frequency and intensity exceed what is normal for development, gender and culture."],
              ["B", "Linked to **distress** in the person or in those close to them (family, peers, co-workers), **or** harms social, educational, occupational or other functioning."],
              ["C", "Not **only** during a psychotic, substance use, depressive or bipolar disorder, and criteria for **disruptive mood dysregulation disorder are not met**."]
            ], specifiers: [["Mild", "Symptoms in only **one setting** (home, school, work or with peers)"], ["Moderate", "Some symptoms in **two** settings"], ["Severe", "Some symptoms in **three or more** settings"]] },
            { type: "defs", title: "Reading the criteria (pp. 522–523)", items: [
              ["Any mix of groups", "The four symptoms can come from **any** of the three groups. A child with four defiant behaviors and **no** angry mood qualifies."],
              ["Not a sibling", "Sibling fights are common, so at least one relationship must be with someone **other than a brother or sister**."],
              ["Symptom 8", "Vindictiveness has its **own** threshold: **twice in 6 months**, not weekly or daily."],
              ["Severity", "Graded by **pervasiveness**, the number of settings, not by the number of symptoms."],
              ["DMDD trumps ODD", "If the child meets DMDD criteria, give **DMDD only**, even when every ODD criterion is met."]
            ] },
            { type: "ladder", title: "How often a symptom must occur to count (p. 522)", ticks: [[0, "0"], [33.3, "2 mo"], [66.7, "4 mo"], [100, "6 mo"]], rows: [
              { label: "Under age 5", from: 0, to: 100, color: "guide", span: "Most days for 6 months" },
              { label: "Age 5 and older", from: 0, to: 100, color: "case", span: "At least weekly for 6 months" },
              { label: "Symptom 8", from: 0, to: 100, color: "hy", span: "At least twice in 6 months" }
            ], note: "These are **minimums**; the clinician also judges whether the behavior is outside the normal range for age, gender and culture." },
            { type: "callout", kind: "mnemonic", title: "Memory hook: 4-8-6-1", text: "**4** of **8** symptoms for **6** months, with at least **1** person who is not a sibling. Severity counts **settings**: 1 = mild, 2 = moderate, 3+ = severe." },
            { type: "case", title: "Clinical vignette: the boy who argues with everyone at home", text: "A 9-year-old boy has, for the past 8 months, lost his temper and argued with his mother several times a week, refused to do homework or chores when asked, and blamed his younger brother for things he did. His teacher reports no problems at school, and he gets on well with friends. He has no persistent low or irritable mood between incidents, and his parents describe no serious aggression.", point: "Four ODD symptoms (temper, arguing, defying, blaming), weekly, for over 6 months, with a parent (not just a sibling): **oppositional defiant disorder, mild (F91.3)**, because the symptoms appear in **one setting** only." }
          ]
        },
        {
          id: "s15-odd-features",
          title: "Frequency, settings and the normative line",
          pages: "523–524",
          blocks: [
            { type: "p", text: "The heart of ODD is a **frequent and persistent** pattern of anger, defiance or vindictiveness (p. 523). Children often show the defiant behaviors **without** a negative mood, but those who show the angry/irritable symptoms **usually show the behaviors too**." },
            { type: "list", title: "Points the text makes about diagnosis (pp. 523–524)", items: [
              "Symptoms are often confined to **one setting, most often home**. Even home-only ODD can cause **real social impairment**.",
              "Because severity depends on pervasiveness, assess behavior **across settings and relationships**: ask parents, teachers and others.",
              "Symptoms show most with **familiar adults or peers**, so they may **not appear during a clinic visit**. A calm child in your office does not rule out ODD.",
              "A preschooler’s temper outbursts count only if they happen **most days for 6 months**, with **three other symptoms**, and contribute to impairment (for example, breaking things or being asked to leave preschool).",
              "Losing one’s temper need not be a tantrum: **angry faces, angry words and felt anger** count too.",
              "Children with ODD rarely see themselves as angry or defiant; they **justify** their behavior as a reaction to **unfair demands**.",
              "The link with **hostile parenting** runs both ways and is often impossible to untangle. Whether you can sort out the causes **should not affect** whether you diagnose. Where neglect or mistreatment may occur (e.g., institutions), address the environment."
            ] },
            { type: "callout", kind: "pearl", title: "Normal or not?", text: "Weekly tantrums are **common** in preschoolers; **daily** tantrums occur in only about **10%** (p. 524). Oppositional behavior also rises in **adolescence**. In both periods, compare frequency and intensity with **normal levels for age** before calling it a symptom." },
            { type: "callout", kind: "caution", title: "Suicide risk", text: "ODD is linked to a **higher risk of suicide attempts**, even after accounting for comorbid disorders (p. 524). Ask about suicidal thoughts in defiant youth, especially those with prominent angry, irritable mood." },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A 4-year-old has tantrums **two or three times a week** for 7 months. For a child under 5, symptoms must occur on **most days**, so weekly tantrums alone do **not** count toward ODD. The same frequency in a **7-year-old** would count (at least **once a week** from age 5)." }
          ]
        },
        {
          id: "s15-odd-course",
          title: "Prevalence, course and risk",
          pages: "524–525",
          blocks: [
            { type: "table", caption: "ODD in numbers and course (pp. 524–525)", head: ["Topic", "What the manual says"], rows: [
              ["Prevalence", "**1%–11%** across countries; average about **3.3%**"],
              ["Sex", "Somewhat more common in **boys** before adolescence (**1.59:1**); the male excess is **not consistent** in adolescents or adults. Few sex differences compared with conduct disorder"],
              ["Onset", "First symptoms usually in the **preschool years**, rarely later than **early adolescence**"],
              ["Course", "Often precedes **conduct disorder**, especially the **childhood-onset** type, but many never develop it. Manifestations are **consistent** across development"],
              ["Which symptoms predict what", "Most of the **conduct disorder** risk comes from the **defiant, argumentative and vindictive** symptoms; most of the **mood and anxiety disorder** risk from **angry/irritable mood**"],
              ["Adult outcomes", "Relationship problems (family, peers, partners), **lower educational attainment**, workplace stress, persistent ODD, antisocial behavior, impulse-control problems, substance misuse, anxiety and depression"]
            ] },
            { type: "defs", title: "Risk and prognostic factors (pp. 524–525)", items: [
              ["Temperamental", "Problems in **emotion regulation**: high emotional reactivity, poor frustration tolerance."],
              ["Environmental", "**Harsh, inconsistent or neglectful** child-rearing predicts more symptoms, and symptoms in turn predict harsher parenting. More common when care is disrupted by a **succession of caregivers**. Higher risk of **bullying and being bullied**."],
              ["Genetic and physiological", "Lower **heart rate** and **skin conductance** reactivity, reduced **basal cortisol** reactivity, differences in **prefrontal cortex and amygdala**. Irritability and anger symptoms share genetic influences with **depression and generalized anxiety disorder**. Most studies have not separated ODD from conduct disorder."]
            ] },
            { type: "callout", kind: "culture", title: "Culture and gender (p. 525)", text: "Prevalence may be inflated by **misdiagnosis or overdiagnosis** in some cultural groups. A meta-analysis found ODD **more common in boys** in **Western** cultures but **similar across genders** in **non-Western** cultures. **First-generation migrants and refugees** may be at **lower** risk despite adversity. **Harsh parenting** may relate more strongly to ODD in **girls**." },
            { type: "p", text: "When ODD persists through development, the person has **frequent conflicts** with parents, teachers, supervisors, peers and partners, with impairment in emotional, social, academic and occupational life (p. 525)." }
          ]
        },
        {
          id: "s15-odd-ddx",
          title: "ODD look-alikes and comorbidity",
          pages: "525–527",
          blocks: [
            { type: "table", caption: "Differential diagnosis of ODD (pp. 525–526)", head: ["Look-alike", "How to tell", "Both allowed?"], rows: [
              ["[[dx:conduct-disorder|Conduct disorder]]", "CD is more severe: **aggression to people or animals, property destruction, theft or deceit**. ODD has **angry/irritable mood**, which CD lacks. ODD impairment can be **equal or greater**", "**Yes**, if both are met"],
              ["[[dx:adjustment|Adjustment disorder]]", "Clear link to a **stressor**; symptoms settle within **6 months** after the stressor ends", "No; choose one"],
              ["[[dx:ptsd|PTSD]]", "Under age 6, PTSD can present as dysregulation, opposition and tantrums; look for the **trauma** and **traumatic play**. Teen reenactment and risk-taking can look like defiance", "Assess"],
              ["[[dx:adhd|ADHD]]", "Diagnose ODD too only if noncompliance is **not just** in tasks needing **sustained effort, attention or sitting still**", "**Yes**, often comorbid"],
              ["[[dx:mdd|Depressive]] and [[dx:bipolar-i|bipolar]] disorders", "Irritability and negativity can occur in mood episodes; ODD is **not** diagnosed if symptoms occur **only** during the mood disorder", "Only if ODD occurs outside the episodes"],
              ["[[dx:dmdd|DMDD]]", "Shares chronic irritability and outbursts. If DMDD criteria are met, **ODD is not given**", "**No**: DMDD only"],
              ["[[dx:ied|Intermittent explosive disorder]]", "IED involves **serious aggression** toward others, which is not part of ODD", "IED may be added if outbursts need separate attention"],
              ["[[dx:idd|Intellectual developmental disorder]]", "ODD only if opposition is **markedly greater** than in others of the same **mental age** and severity", "Yes, if so"],
              ["[[dx:language-disorder|Language disorder]]", "Not following directions because of **poor comprehension** (or hearing loss) is not defiance", "Assess"],
              ["[[dx:social-anxiety|Social anxiety disorder]]", "Refusal driven by **fear of negative evaluation**, not defiance", "Assess"]
            ] },
            { type: "defs", title: "Comorbidity (pp. 526–527)", items: [
              ["ADHD", "Much higher rates of ODD in people with ADHD, perhaps through **shared temperamental risk**."],
              ["Conduct disorder", "ODD often comes first, mostly in the **childhood-onset** subtype."],
              ["Anxiety and depression", "Raised risk, mainly through the **angry/irritable mood** symptoms."],
              ["DMDD", "Most children with DMDD also have ODD-type symptoms, but only **DMDD** is diagnosed."],
              ["Substance use", "Higher rates in adolescents and adults with ODD; unclear whether this is independent of conduct disorder."]
            ] },
            { type: "callout", kind: "key", title: "Take-home point", text: "Three questions sort most ODD look-alikes: **Is there serious aggression, destruction, theft or deceit?** (think CD or IED). **Is the irritability persistent between outbursts, with severe outbursts, starting before 10?** (think DMDD, which excludes ODD). **Does the refusal happen only when effort, attention or understanding is demanded?** (think ADHD, language disorder or learning problems)." }
          ]
        }
      ]
    },
    {
      title: "Intermittent explosive disorder",
      sections: [
        {
          id: "s15-ied-criteria",
          title: "IED criteria: A1 versus A2",
          pages: "527",
          blocks: [
            { type: "criteria", title: "Intermittent explosive disorder in brief", code: "F63.81", pages: "527", items: [
              ["A", "Recurrent outbursts that show a **failure to control aggressive impulses**, meeting **either**:", ["**A1:** verbal aggression (tantrums, tirades, arguments, verbal fights) or physical aggression toward property, animals or people **twice a week on average for 3 months**, with **no damage or destruction** of property and **no injury** to animals or people; **or**", "**A2:** **three** outbursts within **12 months** that involve **damaging or destroying property** and/or physical assault that **injures** an animal or person."]],
              ["B", "The aggression is **grossly out of proportion** to the provocation or stressor."],
              ["C", "The outbursts are **not premeditated** (they are impulsive or anger-based) and are **not aimed at a tangible goal** such as money, power or intimidation."],
              ["D", "They cause **marked distress**, impair work or relationships, or bring **financial or legal consequences**."],
              ["E", "Age at least **6 years** (or equivalent developmental level)."],
              ["F", "Not better explained by another mental disorder (e.g., MDD, bipolar disorder, **DMDD**, psychosis, antisocial or borderline personality disorder), and not due to a **medical condition** (e.g., head trauma, Alzheimer’s disease) or a **substance**. In children aged **6–18**, aggression that is part of an **adjustment disorder** does not count."]
            ], note: "IED **can be added** to ADHD, conduct disorder, ODD or autism spectrum disorder when the impulsive outbursts go beyond what those disorders usually show and need **independent clinical attention**." },
            { type: "compare", title: "Two routes to Criterion A (pp. 527–528)", items: [
              { title: "A1: frequent but low-damage", color: "guide", points: ["Tantrums, tirades, arguments, or hitting **without** damage or injury.", "About **twice a week**, on average.", "For **3 months**."] },
              { title: "A2: rare but destructive", color: "case", points: ["Outbursts that **damage or destroy** an object (whatever its value) or **injure** a person or animal.", "**Three** such outbursts.", "Within **12 months**."] }
            ] },
            { type: "ladder", title: "Time windows in Criterion A (p. 527)", ticks: [[0, "0"], [25, "3 mo"], [50, "6 mo"], [75, "9 mo"], [100, "12 mo"]], rows: [
              { label: "A1", from: 0, to: 25, color: "guide", span: "~2×/week for 3 months" },
              { label: "A2", from: 0, to: 100, color: "case", span: "3 outbursts in 12 months" }
            ], note: "Many people have **both**: frequent minor outbursts with occasional destructive ones (p. 527)." },
            { type: "callout", kind: "mnemonic", title: "Memory hook: “2 a week for 3, or 3 in a year”", text: "A1 = **two** a week for **three** months; A2 = **three** destructive outbursts in **12** months. Then the **6**-year age floor." },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A man smashes his phone, punches a hole in a wall and breaks a chair during three rages over **10 months**, each after a minor slight; he is calm and regretful between them. That is **A2** (three destructive outbursts in 12 months), even though the outbursts are rare. Weekly shouting matches with no damage would need the **A1** frequency instead." }
          ]
        },
        {
          id: "s15-ied-features",
          title: "Features, prevalence and course",
          pages: "527–529",
          blocks: [
            { type: "list", title: "What an outburst looks like (pp. 527–528)", items: [
              "**Rapid onset** with little or no warning (no real prodrome).",
              "Usually lasts **less than 30 minutes**.",
              "Often follows a **minor provocation** by someone **close** (a partner, relative or colleague).",
              "The core is failure to control impulsive aggression in response to provocation that would **not normally** trigger an outburst.",
              "The aggression is **impulsive or anger-based**, not planned or instrumental."
            ] },
            { type: "table", caption: "IED facts (pp. 528–529)", head: ["Topic", "What the manual says"], rows: [
              ["Associated disorders", "**Depressive, anxiety and substance use disorders**, usually starting **later** than IED"],
              ["Neurobiology", "**Serotonergic** abnormalities (globally and in the anterior cingulate and orbitofrontal cortex); **greater amygdala response** to anger stimuli on fMRI; reduced frontolimbic gray matter (not always found)"],
              ["Prevalence (US)", "1-year about **2.6%**; lifetime **4.0%**. Higher in **younger** people (under 35–40) than in those over 50, and in those with **high school education or less**. Sex differences are inconsistent"],
              ["Onset", "Most often **late childhood or adolescence**; rarely begins for the first time after **age 40**"],
              ["Course", "May be **episodic**; generally **chronic and persistent** over many years. Common whether or not ADHD or other disruptive disorders are present"],
              ["Environmental risk", "Physical and emotional **trauma in the first 20 years** of life; in some refugee settings, long displacement and family separation"],
              ["Genetic risk", "First-degree relatives at higher risk; twin studies show **substantial genetic influence** on impulsive aggression"],
              ["Suicide", "IED with **PTSD**: lifetime suicide attempts in **41%** (study of 1,460 volunteers)"],
              ["Consequences", "Lost friends, marital instability, demotion or job loss, the **cost of destroyed objects**, civil suits and assault charges"]
            ] },
            { type: "callout", kind: "culture", title: "Culture check (pp. 528–529)", text: "Lower rates reported in parts of **Asia and the Middle East** and in countries such as **Romania and Nigeria** may mean the behavior is **not asked about** or is truly less common, for cultural reasons. Higher US rates in some Black adolescent groups may reflect downward social mobility and **racism**, and the manual cautions about **misdiagnosis** across cultures." },
            { type: "case", title: "Clinical vignette: the mechanic who loses it", text: "A 28-year-old mechanic has, for about 5 months, shouted and sworn at co-workers and his partner two or three times a week over small things, such as a misplaced tool. Each outburst comes on in seconds, lasts about 10 minutes, and is followed by embarrassment. He has never broken anything or hurt anyone. He was given a final warning at work. Between outbursts his mood is normal; he does not drink or use drugs; his medical history is unremarkable.", point: "Frequent verbal outbursts (**A1**: about twice weekly for over 3 months), out of proportion, impulsive, with occupational impairment, age over 6, no better explanation: **intermittent explosive disorder (F63.81)**." }
          ]
        },
        {
          id: "s15-ied-ddx",
          title: "IED look-alikes and comorbidity",
          pages: "529–530",
          blocks: [
            { type: "table", caption: "Differential diagnosis of IED (pp. 529–530)", head: ["Look-alike", "How to tell"], rows: [
              ["Mood or psychotic episode", "Do not diagnose IED when A1 or A2 is met **only during** an episode of MDD, bipolar disorder or psychosis"],
              ["[[dx:adjustment|Adjustment disorder]] (ages 6–18)", "Outbursts arising within an adjustment disorder do **not** count toward IED in children and adolescents"],
              ["[[dx:dmdd|DMDD]]", "DMDD has a **persistently irritable or angry mood most of the day, nearly every day** between outbursts; onset **before 10**; not first diagnosed **after 18**. IED and DMDD are **mutually exclusive**"],
              ["[[dx:antisocial-pd|Antisocial]] or [[dx:borderline-pd|borderline]] personality disorder", "Both often include impulsive aggression, but at a **lower level** than in IED"],
              ["[[dx:delirium|Delirium]], [[dx:major-ncd|major NCD]], [[dx:personality-change-amc|personality change due to another medical condition, aggressive type]]", "Outbursts caused by a **diagnosable medical condition** (e.g., brain injury, complex partial epilepsy) exclude IED. **Soft neurological signs** and **nonspecific EEG changes** are compatible with IED"],
              ["Substance intoxication or withdrawal", "Excluded when outbursts occur **nearly always** with intoxication or withdrawal (alcohol, PCP, cocaine and other stimulants, barbiturates, inhalants). IED may be given if enough outbursts also occur **sober** and need attention"],
              ["[[dx:adhd|ADHD]], [[dx:conduct-disorder|CD]], [[dx:oppositional-defiant|ODD]], [[dx:asd|ASD]]", "All can include outbursts. CD aggression is typically **proactive and predatory**; ODD aggression is tantrums and arguments with **authority figures**; IED outbursts follow a **broader range** of provocations and include **physical assault**. If IED criteria A–E are met and outbursts need separate attention, **add IED**"]
            ] },
            { type: "defs", title: "Comorbidity (p. 530)", items: [
              ["Most common in the community", "**Depressive and anxiety disorders, PTSD, bulimia nervosa, binge-eating disorder and substance use disorders**."],
              ["Higher risk of IED", "People with **antisocial or borderline personality disorder**, and those with a history of **ADHD, conduct disorder or ODD**."]
            ] },
            { type: "callout", kind: "key", title: "Take-home point", text: "IED is **anger that explodes and then passes**. If the mood stays irritable **between** outbursts, think **DMDD** (in youth) or a mood disorder. If the aggression is **planned or used to get something**, think **conduct disorder** or **antisocial personality disorder**. If it happens only when **drunk or high**, it is a substance problem." }
          ]
        }
      ]
    },
    {
      title: "Conduct disorder",
      sections: [
        {
          id: "s15-cd-criteria",
          title: "The 15 conduct disorder symptoms",
          pages: "530–531",
          blocks: [
            { type: "criteria", title: "Conduct disorder in brief", code: "F91.1 / F91.2 / F91.9", pages: "530–531", items: [
              ["A", "A **repetitive and persistent** pattern that violates **others’ basic rights** or **major age-appropriate norms or rules**: at least **3** of the 15 behaviors in the **past 12 months**, from any group, with at least **1** in the **past 6 months**.", ["**Aggression to people and animals:** (1) often bullies, threatens or intimidates; (2) often starts physical fights; (3) has used a **weapon** that can cause serious harm (bat, brick, broken bottle, knife, gun); (4) physically cruel to **people**; (5) physically cruel to **animals**; (6) has stolen **while confronting a victim** (mugging, purse snatching, extortion, armed robbery); (7) has **coerced someone into sex**.", "**Destruction of property:** (8) deliberate **fire setting** meant to cause serious damage; (9) deliberately destroyed others’ property **in other ways**.", "**Deceitfulness or theft:** (10) has **broken into** a house, building or car; (11) often **lies** to get goods or favors or to avoid obligations (“cons” others); (12) has stolen **nontrivial** items with **no victim confronted** (shoplifting without breaking in; forgery).", "**Serious violations of rules:** (13) frequently **stays out at night** against parents’ rules, starting **before 13**; (14) has **run away** overnight at least **twice** while living with parents or parent surrogates, or **once** without returning for a long time; (15) often **truant**, starting **before 13**."]],
              ["B", "The behavior clearly **impairs** social, academic or occupational functioning."],
              ["C", "If **18 or older**, criteria for **antisocial personality disorder** are not met."]
            ], specifiers: [["Childhood-onset (F91.1)", "At least one symptom **before age 10**"], ["Adolescent-onset (F91.2)", "**No** symptom before age 10"], ["Unspecified onset (F91.9)", "Not enough information to date the first symptom"], ["Limited prosocial emotions", "**2 of 4** traits for **12 months** in several relationships and settings (see next section)"], ["Severity", "Mild, moderate or severe"]] },
            { type: "table", caption: "The four groups at a glance (p. 533)", head: ["Group", "Criteria", "Type of conduct"], rows: [
              ["Aggression to people and animals", "A1–A7", "Causes or threatens **physical harm**"],
              ["Destruction of property", "A8–A9", "**Nonaggressive** conduct causing property loss or damage"],
              ["Deceitfulness or theft", "A10–A12", "Breaking in, conning, stealing without confrontation"],
              ["Serious violations of rules", "A13–A15", "Staying out, running away, truancy (two with an **age-13** start)"]
            ] },
            { type: "callout", kind: "mnemonic", title: "Memory hook: 3-12-1-6, and the age-13 pair", text: "**3** behaviors in **12** months, **1** of them in the last **6**. Two rule-violations must start **before 13**: **staying out at night** and **truancy**. Running away needs **twice** overnight, or **once** for a long time." },
            { type: "defs", title: "Details that decide exam questions (p. 533)", items: [
              ["Cyberbullying", "Bullying through **web-based social media** messaging counts under A1."],
              ["Fire setting", "A8 requires the **intent to cause serious damage**; other property destruction is A9."],
              ["Theft with or without a victim", "Confronting a victim (A6) is an **aggressive** symptom; theft without confrontation (A12) is **deceit or theft**."],
              ["Running away from abuse", "Runaway episodes that are a **direct result of physical or sexual abuse** do **not** usually count for A14."],
              ["Informants", "Youth with conduct disorder tend to **minimize**; collateral history is needed, though informants may know little if supervision was poor or the behavior was hidden."]
            ] },
            { type: "case", title: "Clinical vignette: three behaviors in a year", text: "A 15-year-old girl has, over the past year, shoplifted makeup and clothes on several occasions (most recently last month), repeatedly lied to her parents to get money for “school projects,” and skipped school about twice a week since she was 12. Her grades have collapsed. Her parents and teachers recall no behavior problems before age 10.", point: "Three symptoms in 12 months (**A12** theft without confrontation, **A11** conning, **A15** truancy that began **before 13**), one within the past 6 months, with impairment: **conduct disorder, adolescent-onset type (F91.2)**. Had her truancy started at **14**, it would **not** count as A15, and she would have only two symptoms." },
            { type: "callout", kind: "exam", title: "Exam twist: the age-13 start", text: "Staying out at night (A13) and truancy (A15) count **only if the pattern began before age 13**. A 16-year-old who started skipping school at 15 does not meet A15, however often she skips." }
          ]
        },
        {
          id: "s15-cd-specifiers",
          title: "Onset subtypes, limited prosocial emotions and severity",
          pages: "531–533",
          blocks: [
            { type: "compare", title: "Childhood-onset versus adolescent-onset (p. 532)", items: [
              { title: "Childhood-onset (F91.1)", color: "case", points: ["At least one symptom **before 10**.", "Usually **male**; **disturbed peer relationships**.", "Often had **ODD** in early childhood; full criteria often met **before puberty**.", "More likely to be **aggressive**.", "Often **ADHD** or other neurodevelopmental problems.", "More likely to **persist into adulthood**."] },
              { title: "Adolescent-onset (F91.2)", color: "guide", points: ["**No** symptom before 10.", "**More normal peer relationships**, though misbehavior often happens **in the company of others**.", "Less aggressive; better adult adjustment, especially with few, mild symptoms.", "More often associated with **psychosocial stressors**, such as discrimination (p. 534)."] }
            ] },
            { type: "callout", kind: "exam", title: "Unspecified onset", text: "When conduct disorder is clearly present but nobody can say whether the **first symptom came before or after age 10** (for example, a youth in custody with no family history available), code **F91.9, unspecified onset**. Both onset types can be **mild, moderate or severe**." },
            { type: "criteria", title: "Specifier: with limited prosocial emotions", pages: "531–532", items: [
              "At least **two** of the four traits below, shown **persistently for at least 12 months** and in **multiple relationships and settings**, as the person’s **typical** way of relating, not occasional moments.",
              ["1", "**Lack of remorse or guilt:** does not feel bad after doing wrong (remorse shown **only when caught** or facing punishment does not count); generally unconcerned about consequences."],
              ["2", "**Callous, lacking empathy:** disregards others’ feelings; seen as **cold and uncaring**; more concerned about the effect of actions on self than on others."],
              ["3", "**Unconcerned about performance:** does not care about doing poorly at school or work, does not try even when expectations are clear, and **blames others**."],
              ["4", "**Shallow or deficient affect:** shows feelings only in shallow or insincere ways (can switch emotions on and off), or uses emotional displays **for gain** (to manipulate or intimidate)."]
            ], note: "Assessment needs **multiple informants**: besides self-report, use people who have known the person a long time (parents, teachers, co-workers, extended family, peers)." },
            { type: "defs", title: "Reading the specifier (pp. 532–533)", items: [
              ["Who has it", "A **minority** of youth with conduct disorder."],
              ["Research name", "The traits are what research calls **callous and unemotional traits**."],
              ["Related features", "**Thrill seeking, fearlessness** and **insensitivity to punishment**."],
              ["Aggression type", "More likely to use aggression **planned for instrumental gain**."],
              ["Subtype and severity", "Possible with any subtype or severity, but **more often childhood-onset** and **severe**."],
              ["Interview pitfall", "Youth with these traits may **not admit them** in an interview, so **collateral reports** matter."],
              ["Prognosis", "Childhood onset **plus** this specifier makes **persistence** more likely (p. 535)."]
            ] },
            { type: "table", caption: "Severity (p. 532)", head: ["Level", "Number of problems", "Harm to others", "Examples"], rows: [
              ["Mild", "Few if any beyond the 3 needed", "Relatively **minor**", "Lying, truancy, staying out after dark without permission"],
              ["Moderate", "Intermediate", "Intermediate", "Stealing without confronting a victim, vandalism"],
              ["Severe", "**Many** beyond those needed", "**Considerable**", "Forced sex, physical cruelty, weapon use, theft while confronting a victim, breaking and entering"]
            ], note: "Severity can be **severe** on either ground: many problems **or** considerable harm." }
          ]
        },
        {
          id: "s15-cd-features",
          title: "Features, prevalence and course",
          pages: "533–534",
          blocks: [
            { type: "p", text: "Youth with conduct disorder both **start** aggression and **react** aggressively. Physical violence can take the form of **rape, assault** or, rarely, **homicide** (p. 533). The pattern usually appears in **several settings**: home, school and the community." },
            { type: "defs", title: "Associated features (p. 534)", items: [
              ["Hostile attribution", "Especially in ambiguous situations, they often read others’ intentions as **more hostile** than they are, and then feel their aggression is **justified**."],
              ["Personality features", "Negative emotionality and poor self-control: **thrill seeking**, **recklessness**, **insensitivity to punishment**, **suspiciousness**, irritability, temper outbursts and low frustration tolerance."],
              ["Substance misuse", "A frequent associated feature, **particularly in adolescent girls**."]
            ] },
            { type: "table", caption: "Prevalence and course (p. 534)", head: ["Topic", "What the manual says"], rows: [
              ["1-year prevalence", "**2% to more than 10%** (US and other mostly high-income countries); **median 4%**"],
              ["US lifetime", "**12.0%** of men, **7.1%** of women"],
              ["Age trend", "Rates **rise** from childhood to adolescence; few impaired children get treatment"],
              ["Onset", "Can start in preschool, but significant symptoms usually emerge from **middle childhood to middle adolescence**; onset after **16** is **rare**"],
              ["Symptom shift", "**Physical aggression** dominates in childhood; **nonaggressive** symptoms dominate in adolescence"],
              ["Order of symptoms", "Less serious behaviors first (**lying, shoplifting**); more severe ones last (**rape, theft while confronting a victim**). Early serious behavior predicts a **worse prognosis**"],
              ["Outcome", "**Most remit by adulthood**, especially adolescent-onset and mild cases. Childhood onset predicts more adult **crime**, conduct problems and **substance-related disorders**"],
              ["Later disorders", "Mood, anxiety, PTSD, impulse-control, psychotic, somatic symptom and substance-related disorders"]
            ] },
            { type: "callout", kind: "pearl", title: "Adults can have conduct disorder", text: "Conduct disorder **can be diagnosed after 18**, but only if **antisocial personality disorder is not met** (Criterion C). In adulthood the same aggression, deceit and rule-breaking may show up as violence toward **co-workers, partners and children**, at which point antisocial personality disorder should be considered (p. 534)." }
          ]
        },
        {
          id: "s15-cd-risk",
          title: "Risk, culture, sex and consequences",
          pages: "534–536",
          blocks: [
            { type: "defs", title: "Risk and prognostic factors (pp. 534–535)", items: [
              ["Temperamental", "A **difficult, undercontrolled infant temperament**; **lower-than-average intelligence**, especially **verbal IQ**."],
              ["Family", "Parental **rejection and neglect**, **inconsistent** child-rearing, **harsh discipline**, physical or sexual **abuse**, **lack of supervision**, early institutional living, frequent changes of caregiver, large family size, **parental criminality**, family substance use and other psychopathology."],
              ["Community", "Peer rejection, a **delinquent peer group**, neighborhood disadvantage, exposure to violence. Family and community risks are more common and severe in the **childhood-onset** subtype."],
              ["Migration", "Parental migration is a risk both for children left behind and for those who move (through acculturation), yet youth who are **themselves first-generation immigrants or refugees** often have **fewer** conduct problems than other youth."],
              ["Genetic", "Both genes and environment matter; genetic links may be stronger for **aggressive** symptoms. Risk is higher when a sibling or a parent (biological **or adoptive**) has conduct disorder, and with biological parents who have severe alcohol use disorder, depressive or bipolar disorder, schizophrenia, ADHD or conduct disorder. Family history marks the **childhood-onset** subtype."],
              ["Physiological", "A **slower resting heart rate** is reliably found and is **not a feature of any other mental disorder**; also reduced autonomic **fear conditioning** (low **skin conductance**). Differences in **ventral prefrontal cortex and amygdala** circuits. None of these is **diagnostic**."],
              ["Course modifiers", "Persistence is more likely with **childhood onset plus limited prosocial emotions**, and with co-occurring **ADHD** and **substance abuse** (p. 535)."]
            ] },
            { type: "callout", kind: "culture", title: "Culture check (p. 535)", text: "Conduct disorder may be **misapplied** where disruptive behavior is **near-normal for survival**, such as very threatening high-crime areas or **war zones**: consider the context. In youth from underserved ethnic and racialized groups, **angry, resistance-based reactions to racism** may be misdiagnosed as conduct disorder; discrimination is associated with **adolescent-onset** conduct disorder in these groups." },
            { type: "compare", title: "Sex and gender (p. 535)", items: [
              { title: "Boys and men", color: "case", points: ["**Fighting, stealing, vandalism**, school discipline problems.", "More **physical** aggression."] },
              { title: "Girls and women", color: "guide", points: ["**Lying, truancy, running away**, prostitution.", "Relational aggression in both sexes, but **much less physical** aggression."] }
            ] },
            { type: "defs", title: "Suicide and consequences (pp. 535–536)", items: [
              ["Suicide", "Suicidal thoughts, attempts and deaths occur **more often than expected**. A **10-year Taiwanese** follow-up found more suicide attempts **even after adjusting** for mood, anxiety and substance use disorders."],
              ["School and work", "Suspension or **expulsion**, poor work adjustment."],
              ["Health", "Sexually transmitted infections, **unplanned pregnancy**, injuries from fights and **accidents**; early sex, alcohol, tobacco and drug use; health problems by **midlife**."],
              ["Legal", "Frequent contact with the **criminal justice** system; a common diagnosis in **forensic** child practice. Impairment is **more severe and chronic** than in other clinic-referred children."]
            ] }
          ]
        },
        {
          id: "s15-cd-ddx",
          title: "Conduct disorder look-alikes and comorbidity",
          pages: "536–537",
          blocks: [
            { type: "table", caption: "Differential diagnosis of conduct disorder (pp. 536–537)", head: ["Look-alike", "How to tell", "Both allowed?"], rows: [
              ["[[dx:oppositional-defiant|ODD]]", "ODD is milder, with **no** aggression to people or animals, destruction, theft or deceit, and **adds** angry/irritable mood", "**Yes**, when both are met"],
              ["[[dx:adhd|ADHD]]", "Hyperactive, impulsive behavior is disruptive but does **not by itself** violate norms or others’ rights", "**Yes**, both should be given"],
              ["[[dx:mdd|Depressive]], [[dx:bipolar-i|bipolar]] disorders and [[dx:dmdd|DMDD]]", "Look at the **course**: in CD, conduct problems occur **outside** mood episodes, either **before** the mood disturbance began or **premeditated** acts that do not occur during intense emotional arousal", "**Yes**, when both are met"],
              ["[[dx:ied|IED]]", "IED aggression is **impulsive only**, not premeditated or for gain, and IED has no **nonaggressive** symptoms", "IED only if outbursts need **separate attention**"],
              ["[[dx:adjustment|Adjustment disorder]] (with disturbance of conduct)", "Conduct problems that start **in clear association with a stressor** and do not meet another disorder; by its own criteria (Chapter 7), adjustment disorder does not outlast the stressor and its consequences by **more than 6 months**. CD needs a **repetitive, persistent** pattern with impairment", "Choose one"]
            ] },
            { type: "defs", title: "Comorbidity (p. 537)", items: [
              ["ADHD and ODD", "Both common; this combination predicts **worse outcomes**."],
              ["Antisocial personality features", "People with antisocial personality traits often also meet criteria for conduct disorder."],
              ["Other disorders", "**Specific learning disorder**, anxiety, depressive or bipolar and substance-related disorders."],
              ["Academic skills", "Reading and verbal skills are often **below expectations** for age and intelligence, which may justify a diagnosis of **specific learning disorder** or a **communication disorder**."]
            ] },
            { type: "callout", kind: "key", title: "Take-home point", text: "Conduct disorder **combines freely**: it can be diagnosed **with** ODD, ADHD and mood disorders when each is met. Its two firm boundaries are **antisocial personality disorder at 18 and older** (Criterion C) and a **stressor-bound** picture that fits adjustment disorder better." }
          ]
        },
        {
          id: "s15-aspd",
          title: "Antisocial personality disorder (cross-listed)",
          pages: "537",
          blocks: [
            { type: "p", text: "Antisocial personality disorder appears in **two chapters**. Its criteria and text are in [[ch:ch18|Personality Disorders]], but it is also listed here because it belongs to the **externalizing** spectrum with the conduct disorders, and borders the **substance-related and addictive disorders** (p. 537). Code: **F60.2**. See [[dx:antisocial-pd|the library entry]]." },
            { type: "compare", title: "The bridge between conduct disorder and antisocial personality disorder", items: [
              { title: "Conduct disorder", color: "guide", points: ["Usually diagnosed in **childhood or adolescence**.", "Can be given **after 18** only if antisocial PD criteria are **not** met.", "Coded by onset: F91.1, F91.2, F91.9."] },
              { title: "Antisocial personality disorder", color: "case", points: ["Age at least **18**.", "Requires evidence of **conduct disorder with onset before 15** (Chapter 18).", "Coded **F60.2**."] }
            ] },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A 19-year-old meets every adult antisocial criterion but has **no history of conduct problems before 15**. Antisocial personality disorder **cannot** be diagnosed. If he meets conduct disorder criteria now, **conduct disorder** can be diagnosed in an adult; otherwise consider **adult antisocial behavior** (Z72.811, Chapter 22)." }
          ]
        }
      ]
    },
    {
      title: "Pyromania and kleptomania",
      sections: [
        {
          id: "s15-pyromania",
          title: "Pyromania",
          pages: "537–539",
          blocks: [
            { type: "criteria", title: "Pyromania in brief", code: "F63.1", pages: "537", items: [
              ["A", "**Deliberate, purposeful** fire setting on **more than one** occasion."],
              ["B", "**Tension or emotional arousal** before the act."],
              ["C", "Strong **interest in and attraction to fire** and everything around it (equipment, uses, consequences)."],
              ["D", "**Pleasure, gratification or relief** when setting fires, watching them or taking part in the aftermath."],
              ["E", "Not done for **money**, **sociopolitical ideology**, to **hide a crime**, to express **anger or revenge**, to **improve living circumstances**, because of a **delusion or hallucination**, or through **impaired judgment** (major neurocognitive disorder, intellectual developmental disorder, intoxication)."],
              ["F", "**Conduct disorder**, a **manic episode** or **antisocial personality disorder** does not account for it better."]
            ] },
            { type: "list", title: "The picture (pp. 537–538)", items: [
              "Often regular **“watchers”** at neighborhood fires; may set off **false alarms**.",
              "Drawn to the institutions, equipment and people of **firefighting**: may hang around the fire station, set fires to get **connected** with the fire service, and some **join it as firefighters**.",
              "May **prepare considerably** in advance; may be **indifferent** to the harm to life or property, or **enjoy** the destruction.",
              "Impulsive fire setters (with or without pyromania) often have **alcohol use disorder**, now or in the past."
            ] },
            { type: "table", caption: "Pyromania facts (pp. 538–539)", head: ["Topic", "What the manual says"], rows: [
              ["Prevalence", "Population prevalence of pyromania is **unknown**. Lifetime **fire-setting behavior** (not enough for diagnosis) is **1.0%–1.1%**"],
              ["Sex", "Fire setting: men **1.7%** versus women **0.4%** lifetime; unknown for pyromania itself"],
              ["How rare", "Only **3.3%** of repeat fire setters in a **Finnish** forensic sample met full criteria; **3.4%** of US adult psychiatric inpatients met criteria for current pyromania"],
              ["Fire-setting comorbidity", "Antisocial personality disorder, substance use disorder, bipolar disorder, **gambling disorder**"],
              ["Onset", "Possibly **late adolescence**; the link between childhood fire setting and adult pyromania is **not documented**"],
              ["Course", "**Episodic**, waxing and waning; long-term course unknown"],
              ["Youth", "Over **40%** of US **arson arrests** are under 18, but pyromania in childhood is **rare**; juvenile fire setting usually goes with **conduct disorder, ADHD or adjustment disorder**"],
              ["Suicide", "In a forensic sample of male fire setters, higher later rates of **suicide and suicide attempts**; unknown for pyromania itself"],
              ["Comorbidity", "Substance use disorders, gambling disorder, depressive and bipolar disorders, other disruptive disorders"]
            ] },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A 14-year-old with a year of fights, cruelty to a neighbor’s cat and burglaries sets a shed on fire to destroy it and enjoys watching it burn. Even with enjoyment, fire setting that is **part of conduct disorder** is **not** pyromania (Criterion F): the fire setting counts as conduct disorder symptom **A8**." }
          ]
        },
        {
          id: "s15-kleptomania",
          title: "Kleptomania",
          pages: "539–541",
          blocks: [
            { type: "criteria", title: "Kleptomania in brief", code: "F63.2", pages: "539", items: [
              ["A", "**Repeatedly unable to resist urges** to steal things the person does **not need**, either to use or for their **money value**."],
              ["B", "A **rising sense of tension** just before the theft."],
              ["C", "**Pleasure, gratification or relief** during the theft."],
              ["D", "Not done to express **anger or revenge**, and not a response to a **delusion or hallucination**."],
              ["E", "**Conduct disorder**, a **manic episode** or **antisocial personality disorder** does not account for it better."]
            ] },
            { type: "list", title: "The picture (pp. 539–540)", items: [
              "The items have **little value** to the person, who **could afford** them; they are often **given away or thrown out**, sometimes **hoarded** or **secretly returned**.",
              "Will usually avoid stealing when arrest is **immediately likely** (e.g., in front of a police officer), but does **not plan** thefts or fully weigh the risk of being caught.",
              "Steals **alone**, without help from others.",
              "Usually **tries to resist**, knows the act is **wrong and senseless**, fears arrest, and often feels **depressed or guilty** afterward.",
              "Serotonin, dopamine and **opioid** pathways linked to behavioral addictions appear to be involved."
            ] },
            { type: "table", caption: "Kleptomania facts (pp. 540–541)", head: ["Topic", "What the manual says"], rows: [
              ["Among shoplifters", "About **4%–24%** of people arrested for shoplifting (US and Canada)"],
              ["General population", "Very rare: about **0.3%–0.6%** (US)"],
              ["Sex", "**Women outnumber men 3:1**"],
              ["Onset", "Variable; **often adolescence**, but can start in childhood, adulthood or, rarely, late adulthood"],
              ["Courses", "Three described: **sporadic** (brief episodes, long remissions), **episodic** (long stealing periods and remissions), **chronic** (with some fluctuation); may continue for years despite **convictions**"],
              ["Family", "More **alcohol use disorder** in first-degree relatives"],
              ["Suicide", "Linked to a **higher risk of suicide attempts**"],
              ["Consequences", "Legal, family, career and personal difficulties"],
              ["Comorbidity", "**Compulsive buying**, depressive and bipolar disorders (especially **MDD**), anxiety disorders, eating disorders (especially **bulimia nervosa**), personality disorders, substance use disorders (especially **alcohol**), other disruptive disorders"]
            ] },
            { type: "case", title: "Clinical vignette: the lipsticks in the drawer", text: "A 34-year-old accountant has been arrested twice for shoplifting. For years she has felt a mounting urge in stores, taken small items such as lipsticks or batteries that she could easily buy, and felt a rush of relief as she walked out. She never sells the items; a drawer at home is full of unopened ones. She feels ashamed afterward and has tried to stop. She has no history of conduct problems, no manic episodes, and her thefts are always alone and unplanned.", point: "Recurrent unresisted urges to steal **unneeded** items, tension before, relief during, not for anger or gain, not explained by CD, mania or antisocial PD: **kleptomania (F63.2)**." }
          ]
        },
        {
          id: "s15-motive",
          title: "Why did they set the fire or steal?",
          pages: "539–541",
          blocks: [
            { type: "p", text: "Fire setting and stealing are **behaviors**, not diagnoses. Pyromania and kleptomania are diagnosed only after ruling out the many other reasons people do these things (pp. 539–541). The question that sorts them is **motive**." },
            { type: "table", caption: "Fire setting: motive points to the diagnosis (p. 539)", head: ["Motive or context", "Think of"], rows: [
              ["Profit (insurance), sabotage, revenge, hiding a crime, a political statement", "Ordinary **arson**; not pyromania"],
              ["Setting a fire to **discover it and be the hero**", "Attention or recognition seeking; not pyromania"],
              ["A child **playing with matches** or lighters", "**Developmental experimentation**"],
              ["Part of a pattern of aggression, theft and rule-breaking", "[[dx:conduct-disorder|Conduct disorder]] (or [[dx:antisocial-pd|antisocial PD]] in adults)"],
              ["During elevated mood and grandiosity", "A **manic episode** ([[dx:bipolar-i|bipolar I]])"],
              ["Commanded by voices or driven by a **delusion**", "A psychotic disorder (e.g., [[dx:schizophrenia|schizophrenia]])"],
              ["Poor judgment from dementia, intellectual disability or **intoxication**", "[[dx:major-ncd|Major NCD]], [[dx:idd|IDD]], substance intoxication"],
              ["A **medical cause** such as epilepsy", "The medical condition"],
              ["**Tension before, fascination with fire, relief after**, none of the above", "[[dx:pyromania|Pyromania]]"]
            ] },
            { type: "table", caption: "Stealing: motive points to the diagnosis (pp. 540–541)", head: ["Motive or context", "Think of"], rows: [
              ["Wanting the object or its **money value** (planned or impulsive)", "**Ordinary theft**: common; kleptomania is rare"],
              ["A **dare**, rebellion or **rite of passage** in adolescents", "Not kleptomania without the other features"],
              ["Faking the urge to **avoid prosecution**", "**Malingering**"],
              ["A **general pattern** of antisocial behavior", "[[dx:conduct-disorder|Conduct disorder]] or [[dx:antisocial-pd|antisocial PD]]"],
              ["During a **manic episode**, in response to **delusions or hallucinations**, or in **major NCD**", "The mood, psychotic or neurocognitive disorder"],
              ["Anger or revenge", "Excluded by Criterion D"],
              ["**Rising tension, relief during the act, unneeded items, alone, unplanned**", "[[dx:kleptomania|Kleptomania]]"]
            ] },
            { type: "callout", kind: "mnemonic", title: "Memory hook: the shared exclusion trio", text: "Pyromania and kleptomania share the same final criterion: not better explained by **C**onduct disorder, **M**ania or **A**ntisocial personality disorder: **“CMA”**. Both also exclude **delusions or hallucinations** and **anger or revenge**." },
            { type: "callout", kind: "analogy", title: "Think of it this way", text: "Both disorders follow the **tension → act → relief** loop seen in impulse-control problems: the act itself is the reward, not the fire’s damage or the stolen object’s value." }
          ]
        }
      ]
    },
    {
      title: "Putting it together",
      sections: [
        {
          id: "s15-residual",
          title: "Other specified and unspecified",
          pages: "541",
          blocks: [
            { type: "compare", title: "The two residual categories (p. 541)", items: [
              { title: "Other specified (F91.8)", color: "guide", points: ["Disruptive, impulse-control or conduct symptoms **predominate** and cause clinically significant **distress or impairment**.", "Full criteria for **no** disorder in the chapter are met.", "The clinician **records the reason**, e.g., “other specified disruptive, impulse-control, and conduct disorder, **recurrent behavioral outbursts of insufficient frequency**.”"] },
              { title: "Unspecified (F91.9)", color: "case", points: ["Same threshold of distress or impairment.", "The clinician **chooses not to give** the reason.", "Includes **not enough information** for a specific diagnosis, e.g., in an **emergency room**."] }
            ] },
            { type: "callout", kind: "caution", title: "One code, two meanings", text: "**F91.9** is used both for **unspecified disruptive, impulse-control, and conduct disorder** and for **conduct disorder, unspecified onset**. Always write the full diagnosis, not just the code." },
            { type: "list", title: "Typical other specified presentations", items: [
              "Aggressive outbursts that meet the out-of-proportion and impulsive features of IED but occur **less often** than A1 or A2 requires (the manual’s own example).",
              "Two conduct disorder behaviors in a year with clear impairment (one short of the **3** required).",
              "Three ODD symptoms for 6 months with impairment (one short of the **4** required)."
            ]},
            { type: "callout", kind: "exam", title: "Exam tip", text: "If the presentation is subthreshold **and** the vignette states **why** (too few symptoms, too short, too infrequent), the answer is **other specified (F91.8)**. If there is **too little information** (an emergency visit, no collateral), the answer is **unspecified (F91.9)**." }
          ]
        },
        {
          id: "s15-aggression",
          title: "Anger and aggression across the chapter",
          pages: "525–530, 536",
          blocks: [
            { type: "p", text: "Angry outbursts appear in many diagnoses. The manual separates them by **what happens between outbursts**, **how planned** the aggression is, **what it targets**, and **when it started**." },
            { type: "table", wide: true, caption: "Telling the angry children (and adults) apart (pp. 525–530, 536)", head: ["Feature", "ODD", "IED", "Conduct disorder", "DMDD (Ch 4)"], rows: [
              ["Mood between outbursts", "May be angry or irritable", "**No persistent** irritable mood", "Not part of criteria", "**Persistently irritable or angry**, most of the day, nearly every day"],
              ["Type of aggression", "Tantrums, **arguments with authority**; no serious aggression", "**Impulsive**, out of proportion; can include **assault**", "Often **proactive, premeditated**, for gain", "Severe temper outbursts"],
              ["Minimum duration", "6 months", "3 months (A1) or 12 months (A2)", "12 months (3 behaviors), 1 in last 6", "12 months"],
              ["Age rule", "None stated (rare first in adulthood)", "At least **6**", "Onset subtype split at **10**", "Onset before **10**; first diagnosed only between **6 and 18**"],
              ["With DMDD?", "**No**", "**No**", "Yes", "—"]
            ] },
            { type: "callout", kind: "pearl", title: "Reactive versus proactive (research language, beyond the manual’s criteria)", text: "Researchers often split aggression into **reactive** (hot, impulsive, provoked) and **proactive** (cold, planned, instrumental). The manual’s wording maps onto this: IED Criterion C demands **impulsive, non-instrumental** aggression, while conduct disorder aggression is described as **proactive and predatory** (p. 530), especially with **limited prosocial emotions** (p. 533)." },
            { type: "flow", title: "A quick sort for recurrent anger (pp. 525–530)", vertical: true, steps: [
              ["Only during intoxication, a mood episode, psychosis or a medical condition?", "Diagnose that condition instead"],
              ["Irritable most days between outbursts, onset before 10, age 6–18?", "**DMDD**: excludes ODD and IED"],
              ["Planned aggression, theft, deceit or rule-breaking (3 in 12 months)?", "**Conduct disorder**"],
              ["Impulsive outbursts out of proportion: twice weekly for 3 months, or 3 destructive in 12 months, age 6+?", "**IED** (can be added to ADHD, CD, ODD, ASD)"],
              ["Defiance, arguing, spite, temper with someone other than a sibling (4 of 8 for 6 months)?", "**ODD**"]
            ], note: "Use the [[helper:disruptive|disruptive behavior helper]] to work through a case step by step." }
          ]
        },
        {
          id: "s15-rules",
          title: "Chapter-wide rules: ages, durations and double diagnoses",
          pages: "522–541",
          blocks: [
            { type: "ladder", title: "Duration windows in the chapter", ticks: [[0, "0"], [25, "3 mo"], [50, "6 mo"], [100, "12 mo"]], rows: [
              { label: "ODD", dx: "oppositional-defiant", from: 0, to: 50, color: "guide", span: "4 of 8 for 6 months" },
              { label: "IED, A1", dx: "ied", from: 0, to: 25, color: "hy", span: "~2×/week for 3 months" },
              { label: "IED, A2", dx: "ied", from: 0, to: 100, color: "hy", span: "3 destructive in 12 months" },
              { label: "Conduct disorder", dx: "conduct-disorder", from: 0, to: 100, color: "case", span: "3 of 15 in 12 months" },
              { label: "CD: recent symptom", dx: "conduct-disorder", from: 50, to: 100, color: "case", span: "1 in last 6 months" },
              { label: "LPE specifier", dx: "conduct-disorder", from: 0, to: 100, color: "clin", span: "2 of 4 for 12 months" }
            ], note: "Pyromania and kleptomania have **no duration**: pyromania needs **more than one** fire; kleptomania needs **recurrent** failure to resist." },
            { type: "table", caption: "Age thresholds (pp. 522, 527–528, 531, 534; ASPD rule from Chapter 18)", head: ["Rule", "Age"], rows: [
              ["ODD frequency guide changes", "**5** (most days below 5; weekly from 5)"],
              ["IED minimum age", "**6** (or developmental equivalent)"],
              ["IED: adjustment-disorder exclusion applies", "**6–18**"],
              ["Conduct disorder onset split", "**10**"],
              ["Staying out at night and truancy must begin before", "**13**"],
              ["Conduct disorder onset rarely after", "**16**"],
              ["Conduct disorder versus antisocial PD", "**18** (ASPD also needs CD **before 15**)"],
              ["IED rarely begins after", "**40**"]
            ] },
            { type: "table", caption: "Which pairs can be diagnosed together?", head: ["Pair", "Allowed?", "Page"], rows: [
              ["ODD + conduct disorder", "**Yes**", "536"],
              ["ODD + ADHD", "**Yes**", "526"],
              ["ODD + DMDD", "**No**: DMDD only", "523, 526"],
              ["IED + DMDD", "**No**: mutually exclusive", "529"],
              ["IED + ADHD, CD, ODD or ASD", "**Yes**, if outbursts need independent attention", "527, 530"],
              ["Conduct disorder + ADHD", "**Yes**, both should be given", "536"],
              ["Conduct disorder + mood disorder", "**Yes**, when both are met", "536"],
              ["Conduct disorder + antisocial PD (age ≥18)", "**No**: ASPD criteria must not be met", "531"],
              ["Pyromania or kleptomania + CD, mania or ASPD explaining the act", "**No**", "537, 539"]
            ] },
            { type: "callout", kind: "key", title: "Take-home point", text: "Most exam questions in this chapter test one of four things: a **count** (4 of 8, 3 of 15, 2 of 4), a **time window** (6 months, 3 months, 12 months), an **age** (5, 6, 10, 13, 18), or an **exclusion** (DMDD, mood episodes, CD/mania/ASPD for the impulse disorders)." }
          ]
        },
        {
          id: "s15-treatment",
          title: "Beyond the manual: treatment in 2026",
          blocks: [
            { type: "callout", kind: "caution", title: "Outside the DSM", text: "DSM-5-TR gives no treatment. This section summarizes current practice (as of October 2026) to connect each diagnosis to care. No medication is approved by the FDA for ODD, conduct disorder, IED, pyromania or kleptomania; all drug use here is **off label**. Follow local guidelines; for drug details see the [[stahl:c/ch13/guide/s13-impulse|Stahl chapter on impulsivity and violence]]." },
            { type: "defs", title: "Oppositional defiant and conduct disorder", items: [
              ["First line in children", "**Parent management training** (e.g., Parent–Child Interaction Therapy, Incredible Years, Triple P): praise and rewards for wanted behavior, clear commands, consistent, calm consequences such as time-out (NICE CG158, 2013; AACAP ODD practice parameter, 2007)."],
              ["Older children and adolescents", "Child-focused **problem-solving and social skills training** (CBT); for serious conduct disorder, **multisystemic therapy**, functional family therapy or multidimensional treatment foster care, which work with family, school and peers."],
              ["Comorbid ADHD", "Treat it: **stimulants** ([[stahl:drugs/methylphenidate|methylphenidate]], [[stahl:drugs/amphetamine|amphetamine]]) and nonstimulants ([[stahl:drugs/atomoxetine|atomoxetine]], [[stahl:drugs/guanfacine|guanfacine]]) often reduce oppositional and aggressive behavior as well."],
              ["Severe aggression", "Short-term [[stahl:drugs/risperidone|risperidone]] only for severe, persistent aggression **after** psychosocial treatment has been tried, with **metabolic and prolactin monitoring** and regular review (NICE CG158; Cochrane review 2017). Treat comorbid depression or anxiety."],
              ["Avoid", "Group programs that put high-risk youth together, and fear-based or boot-camp programs, which can **worsen** outcomes."]
            ] },
            { type: "defs", title: "Intermittent explosive disorder", items: [
              ["Psychotherapy", "**CBT** combining relaxation, cognitive restructuring and coping-skills training reduced aggression and anger in a randomized trial (McCloskey et al., 2008)."],
              ["Medication", "[[stahl:drugs/fluoxetine|Fluoxetine]] reduced impulsive aggression versus placebo in a 12-week randomized trial (Coccaro et al., 2009); mood stabilizers and other agents have weaker evidence. Screen for and treat comorbid **PTSD, depression and substance use**."]
            ] },
            { type: "defs", title: "Kleptomania and pyromania", items: [
              ["Kleptomania", "**CBT** (covert sensitization, exposure and response prevention, relapse planning). [[stahl:drugs/naltrexone|Naltrexone]] reduced urges and stealing in an 8-week randomized trial (Grant et al., 2009); SSRI evidence is mixed. Treat comorbid depression and alcohol use."],
              ["Pyromania and juvenile fire setting", "**CBT** and fire-safety education; for youth, treat the usual underlying problem (conduct disorder, ADHD or adjustment). Medication evidence is minimal."]
            ] },
            { type: "update", kind: "post", year: "2026", title: "Status in October 2026", source: "NICE CG158 (2013, reviewed 2017); AACAP practice parameter for ODD (2007); Loy JH et al., Cochrane Database Syst Rev 2017; Coccaro EF et al., J Clin Psychiatry 2009; McCloskey MS et al., J Consult Clin Psychol 2008; Grant JE et al., Biol Psychiatry 2009", text: "No new drug has been approved for any disorder in this chapter, and no change in first-line care has been issued since these guidelines: **psychosocial, family-based treatment comes first**, with medication for comorbid conditions or severe, persistent aggression." },
            { type: "callout", kind: "pearl", title: "Safety in every assessment", text: "Ask about **suicidal thoughts**, **weapons**, **abuse or neglect** at home and **legal problems**. Raised suicide attempt rates are reported for ODD, IED with PTSD, conduct disorder, fire setting and kleptomania." }
          ]
        }
      ]
    }
  ]
});
