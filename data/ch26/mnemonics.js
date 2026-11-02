/* Chapter 26 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable.
   The AMPD is an alternative model in Section III (p. 881); its proposed sets are not the official Section II criteria. Which
   code goes on the chart is app guidance (Section II diagnosis and ICD-10-CM code, with the AMPD profile in the formulation). */
SP.add("ch26", "mnemonics", [
  {
    id: "m26-01", short: "LPFS: Who? Where? You? Us?", name: "Who? Where? You? Us?: the four elements of personality functioning", original: true, dx: "lpfs", sec: "s26-criterion-a",
    "for": "The four elements rated on the Level of Personality Functioning Scale, two for the self and two interpersonal",
    letters: [
      ["Who?", "Identity", "Self: Who am I? A unique self with clear boundaries, steady self-esteem, accurate self-appraisal, and a range of emotions that can be regulated"],
      ["Where?", "Self-direction", "Self: Where am I going? Coherent, meaningful goals, constructive prosocial inner standards, productive self-reflection"],
      ["You?", "Empathy", "Interpersonal: Do I understand you? Grasping others' experiences and motives, tolerating different views, seeing one's own effect on others"],
      ["Us?", "Intimacy", "Interpersonal: How close are we? Depth and duration of connection, the wish and capacity for closeness, mutual regard"]
    ],
    caveat: "DSM check: pp. 882–883 (Table 1). The LPFS uses the four elements to describe five levels, from Level 0 (little or no impairment) to Level 4 (extreme), and the clinician picks the one level that best captures **current overall** impairment (p. 892). A PD needs **moderate (Level 2) or greater** impairment (p. 882); each specific set and PD-TS needs characteristic difficulty in **two or more of the four** elements (pp. 884–890)."
  },
  {
    id: "m26-02", short: "Domains: New Doctors Always Double-check Prescriptions", name: "New Doctors Always Double-check Prescriptions; Every Excellent Attending Checks Labs", original: true, dx: "trait-model", sec: "s26-domains",
    "for": "The five AMPD trait domains in the manual's order, each paired with its healthy opposite pole",
    letters: [
      ["N / E", "Negative Affectivity vs Emotional Stability", "Frequent, intense negative emotions of many kinds and what they lead to in behavior and relationships"],
      ["D / E", "Detachment vs Extraversion", "Avoiding social and emotional experience: pulling away from people, with narrowed feeling and little pleasure"],
      ["A / A", "Antagonism vs Agreeableness", "Being at odds with others: inflated self-importance and expected special treatment, plus callous use of others"],
      ["D / C", "Disinhibition vs Conscientiousness", "Seeking immediate gratification and acting on impulse without regard for past lessons or future consequences"],
      ["P / L", "Psychoticism vs Lucidity", "Culturally incongruent odd or eccentric behavior and thinking, in both process (perception, dissociation) and content (beliefs)"]
    ],
    caveat: "DSM check: pp. 890, 893, 899–901. The domains hold **25 facets** (p. 882). Two cross-listings break the neat order: **hostility** is defined under Negative Affectivity in Table 3 but labeled an aspect of **Antagonism** in the antisocial and borderline sets (pp. 884, 887, 899); **rigid perfectionism** is listed as '(lack of)' under Disinhibition and called an aspect of **extreme Conscientiousness** in OCPD (pp. 888, 900). The domains are maladaptive variants of the Five Factor Model and resemble the PSY-5 (p. 893)."
  },
  {
    id: "m26-03", short: "General criteria: A to G", name: "Ability, Bad traits, Contexts, Durable, Else, Foreign, Growth: the general criteria A–G", original: true, dx: "ampd-general", sec: "s26-general",
    "for": "The seven General Criteria for Personality Disorder in the AMPD, in letter order",
    letters: [
      ["A", "Ability to function impaired", "Moderate or greater impairment in self/interpersonal functioning (LPFS Level 2+)"],
      ["B", "Bad traits", "One or more pathological personality traits"],
      ["C", "Contexts", "Relatively rigid and present across most personal and social settings"],
      ["D", "Durable", "Relatively stable over time, with onset traceable to at least adolescence or early adulthood"],
      ["E", "Else?", "Not better explained by another mental disorder"],
      ["F", "Foreign cause?", "Not solely caused by the bodily effects of a drug or medication, or by a medical condition (e.g., severe head trauma)"],
      ["G", "Growth stage or group", "Not better understood as normal for the person's developmental stage or sociocultural environment"]
    ],
    caveat: "DSM check: pp. 881–883. The 'relatively' in C and D matters: all but the most extreme personalities show some adaptability (p. 882). E does **not** forbid comorbidity: a PD can be diagnosed with major depressive disorder, but not when the features are clearly an expression of another disorder, such as schizotypal features only during schizophrenia (p. 883). Every specific AMPD PD and PD-TS meets A–G by definition (p. 882)."
  },
  {
    id: "m26-04", short: "Borderline: SAD LAB, but I Run Hot", name: "SAD LAB, but I Run Hot: four of seven, and one must run hot", original: true, dx: "ampd-borderline", sec: "s26-borderline",
    "for": "The seven traits of the AMPD borderline set and the three traits of which at least one is required",
    letters: [
      ["S", "Separation insecurity", "Fear of rejection by, or separation from, significant others (Negative Affectivity)"],
      ["A", "Anxiousness", "Nervousness or panic, often under interpersonal stress, with fears of falling apart or losing control (Negative Affectivity)"],
      ["D", "Depressivity", "Down, hopeless, ashamed, low self-worth, thoughts of suicide and suicidal behavior (Negative Affectivity)"],
      ["LAB", "(Emotional) LABility", "Unstable, easily aroused, intense or disproportionate emotions (Negative Affectivity)"],
      ["I", "Impulsivity", "Must-have option 1: spur-of-the-moment action, urgency, self-harming behavior under emotional distress (Disinhibition)"],
      ["Run", "Risk taking", "Must-have option 2: needless dangerous, potentially self-damaging activity (Disinhibition)"],
      ["Hot", "Hostility", "Must-have option 3: frequent anger, irritability at minor slights (labeled Antagonism in this set)"]
    ],
    caveat: "DSM check: pp. 886–887. Rule: **four or more of seven**, at least one of which is **impulsivity, risk taking or hostility**; four 'SAD LAB' traits alone do **not** meet the set. Criterion A also needs moderate or greater impairment in **two or more of four** areas. Psychoticism traits (e.g., cognitive and perceptual dysregulation) are optional specifiers (p. 887). Section II borderline PD (5 of 9 criteria, F60.3; Ch 18) goes on the chart if its own criteria are met (app guidance)."
  },
  {
    id: "m26-05", short: "Antisocial: the swindler's portrait", name: "The swindler's portrait: Manipulative, Cold, Deceitful, Hot-tempered, Reckless, Impulsive, IOU-dodger", original: true, dx: "ampd-antisocial", sec: "s26-antisocial",
    "for": "The seven traits of the AMPD antisocial set (six needed): four from Antagonism, three from Disinhibition",
    letters: [
      ["M", "Manipulative", "Manipulativeness: subterfuge, charm or ingratiation to control others (Antagonism)"],
      ["C", "Cold", "Callousness: no concern or remorse for harm to others; includes aggression and sadism (Antagonism)"],
      ["D", "Deceitful", "Deceitfulness: dishonesty, fraud, misrepresenting oneself (Antagonism)"],
      ["H", "Hot-tempered", "Hostility: persistent anger, vengeful behavior (labeled Antagonism in this set)"],
      ["R", "Reckless", "Risk taking: needless danger, boredom proneness, denial of personal danger (Disinhibition)"],
      ["I", "Impulsive", "Impulsivity: acting on the moment without a plan (Disinhibition)"],
      ["I", "IOU-dodger", "Irresponsibility: unpaid debts, broken obligations and promises (Disinhibition)"]
    ],
    caveat: "DSM check: pp. 884–885. Rule: **six or more of seven** traits, no single trait mandatory, plus moderate impairment in two or more of four areas; the person must be **at least 18** (p. 885). The AMPD set does **not** require conduct disorder before age 15; that is a Section II requirement (Ch 18, p. 748). 'With psychopathic features' = **low anxiousness, low withdrawal, high attention seeking** (p. 885). Chart Section II antisocial PD, F60.2, if its criteria are met (app guidance)."
  },
  {
    id: "m26-06", short: "Six PDs: SNOB AA stay; PSHD gets PuSHeD", name: "The SNOB AA stay; PSHD gets PuSHeD into PD-TS", original: true, dx: "ampd-pd-ts", sec: "s26-six",
    "for": "The six specific PDs kept in the AMPD, and the four Section II PDs represented by PD-TS",
    letters: [
      ["S", "Schizotypal", "Kept: Psychoticism + Detachment, 4 of 6 traits"],
      ["N", "Narcissistic", "Kept: Antagonism, both grandiosity and attention seeking"],
      ["O", "Obsessive-compulsive", "Kept: 3 of 4 traits, rigid perfectionism mandatory"],
      ["B", "Borderline", "Kept: 4 of 7 traits, at least one of impulsivity, risk taking, hostility"],
      ["A", "Antisocial", "Kept: 6 of 7 traits, age 18 or older"],
      ["A", "Avoidant", "Kept: 3 of 4 traits, anxiousness mandatory"],
      ["PSHD", "Paranoid, Schizoid, Histrionic, Dependent", "PuSHeD into PD-TS: moderate or greater impairment plus the relevant trait combination"]
    ],
    caveat: "DSM check: pp. 881, 884–891. The six sets are listed in the manual alphabetically (antisocial, avoidant, borderline, narcissistic, obsessive-compulsive, schizotypal; p. 881). PD-TS also covers **subthreshold** (too few A or B criteria) and **mixed or atypical** presentations (p. 891); its Criterion B needs one or more domains or facets, considering **all five** domains (p. 890). The chart carries the Section II diagnosis and code, e.g., paranoid F60.0, schizoid F60.1, histrionic F60.4, dependent F60.7, or other specified PD F60.89 (app guidance)."
  }
]);
