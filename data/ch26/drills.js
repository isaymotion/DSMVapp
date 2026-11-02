/* Chapter 26 practice drills.
   dxline:   the Alternative DSM-5 Model for Personality Disorders is a Section III proposal (p. 881; Section III
             introduction, p. 839): none of its sets is an official diagnosis and none carries a code. Each drill asks
             for the decisions the model makes (LPFS level, number of Criterion A areas, which proposed set or PD-TS)
             and then the chart line. The model answer puts the SECTION II personality disorder (or other diagnosis) and
             its ICD-10-CM code on the diagnosis line (Chapter 18; schizotypal F21 is also described in Chapter 2), with
             the LPFS level and trait profile as a formulation line. Where the model goes on the chart is app guidance;
             the chapter gives no coding instruction. Section II codes checked through FY2027 ICD-10-CM: no change was
             found for the codes checked; confirm against the official tabular list. Answers are spread across option
             positions because the app does not shuffle. All patients are adults and pseudonymous.
   counting: decide which findings count toward one rule of the model (Criterion A areas, one set's B traits with its
             must-have trait, PD-TS Criterion B, or a domain's facets), then whether the number is reached.
   Ids are stable keys for progress. */
(function () {
  var LPFS = ["Level 0: little or no impairment", "Level 1: some impairment", "Level 2: moderate impairment", "Level 3: severe impairment", "Level 4: extreme impairment"];
  var AREAS = ["None", "1 area", "2 areas", "3 areas", "All 4 areas"];

  SP.add("ch26", "dxline", [
    {
      id: "w26-01", tag: "Borderline set met",
      "case": "Rina, 24, a call-center agent in Balanga, is admitted after self-harming behavior during an argument with her boyfriend. Since her late teens she has felt hollow inside and changes her picture of herself, her course and her career plans every few months. She often feels slighted by small remarks and is sure coworkers dislike her. Her relationships swing between adoring and furious, and she panics at any sign she will be left. Her moods shift within hours, she fears she will fall apart, she feels worthless and has thoughts of suicide when alone, she quits jobs and spends her pay on impulse, and she shouts and throws things when crossed. Daily life is badly disrupted and she has lost three jobs this year. No substance, medical or other mental disorder explains the pattern, and her psychiatrist confirms the Section II criteria for borderline personality disorder are also met.",
      parts: [
        { label: "LPFS level", options: LPFS, answer: 3 },
        { label: "Criterion A areas impaired", options: AREAS, answer: 4 },
        { label: "Proposed set", options: ["Borderline personality disorder", "Personality disorder–trait specified", "Antisocial personality disorder", "Narcissistic personality disorder", "None: Criterion A not met"], answer: 0 },
        { label: "Chart line", options: ["F60.89 Other specified personality disorder", "F60.4 Histrionic personality disorder", "F60.3 Borderline personality disorder", "F43.10 Posttraumatic stress disorder", "No code: record “AMPD borderline” only"], answer: 2 }
      ],
      line: "**F60.3** Borderline personality disorder. Formulation: personality functioning **Level 3 (severe)**; elevated emotional lability, anxiousness, separation insecurity, depressivity, impulsivity and hostility; profile matches the Section III borderline set (app guidance)",
      why: "All four areas are impaired: identity (emptiness, shifting self-image), self-direction (unstable goals and plans), empathy (feels slighted, negatively biased view of others) and intimacy (intense, unstable relationships, fear of abandonment) (p. 886). Two are enough (p. 891). The broad, disabling impairment fits **severe** rather than moderate (Table 2, pp. 896–897; app judgment). B needs **4 of 7** with at least one of **impulsivity, risk taking or hostility**; she has six including impulsivity and hostility (pp. 886–887). The set itself has no code, so the diagnosis line carries the **Section II** disorder, F60.3 (Ch 18, p. 752), and the level and traits go in the formulation (app guidance)."
    },
    {
      id: "w26-02", tag: "Borderline without a must-have trait",
      "case": "Joy, 31, a nurse in Mariveles, seeks help after her fiancé ends their engagement. Since college she has felt empty and harshly self-critical, sees others as likely to let her down, and clings to partners whom she first idealizes and then resents, terrified of being alone. Her mood swings sharply within a day, she worries constantly that she is losing control, she cannot bear separations, and she has long stretches of feeling worthless and low. She has never self-harmed, does not take risks, does not act on impulse, and is not angry or argumentative; her career goals have been steady for years. She has four of the nine Section II borderline criteria. No other mental disorder or substance explains this.",
      parts: [
        { label: "LPFS level", options: LPFS, answer: 2 },
        { label: "Criterion A areas impaired", options: AREAS, answer: 3 },
        { label: "Proposed set", options: ["Borderline personality disorder", "Dependent personality disorder", "Avoidant personality disorder", "No personality disorder", "Personality disorder–trait specified"], answer: 4 },
        { label: "Chart line", options: ["F60.3 Borderline personality disorder", "F60.89 Other specified personality disorder (borderline features)", "F60.7 Dependent personality disorder", "F32.1 Major depressive disorder", "No code: “PD-TS” alone"], answer: 1 }
      ],
      line: "**F60.89** Other specified personality disorder (borderline features, criteria not met). Formulation: personality functioning **Level 2 (moderate)**; elevated emotional lability, anxiousness, separation insecurity, depressivity (Negative Affectivity); profile consistent with PD-TS (app guidance)",
      why: "Identity, empathy and intimacy are impaired, self-direction is not: **three** areas, enough for A (pp. 886, 891). She has **four** borderline traits, all Negative Affectivity, but the set needs at least one of **impulsivity, risk taking or hostility** (p. 886), so the borderline set is **not met**. A personality disorder judged present that does not fit a specific set is **PD-TS**, which covers subthreshold presentations; the four traits are its specifiers (pp. 890–891). With four of nine Section II criteria (five are needed; Ch 18, p. 752), the chart takes **other specified PD** with the reason stated (Section I, pp. 22–23; app guidance)."
    },
    {
      id: "w26-03", tag: "Antisocial, psychopathic features",
      "case": "Marco, 35, is referred from the Bataan provincial jail for a fitness assessment after charges of running an investment scam that took the savings of dozens of neighbors in Orani. School records show truancy, fighting and theft from age 12. He is relaxed and charming at interview, enjoys holding the room, and says the victims were greedy. He has used fake names, lied to every employer, shows no regret for anyone he hurt, flares up and threatens anyone who questions him, chases thrills, acts on whims and has never paid a debt or kept a promise. He sees himself as clever and deserving of whatever he can take, and has no close relationship that is not useful to him.",
      parts: [
        { label: "Criterion A areas impaired", options: AREAS, answer: 4 },
        { label: "Antisocial B traits present", options: ["4 of 7", "5 of 7", "7 of 7", "6 of 7", "3 of 7"], answer: 2 },
        { label: "Specifier", options: ["None: the set has no specifiers", "With psychopathic features", "Malignant", "With prominent criminality", "Level of functioning only"], answer: 1 },
        { label: "Chart line", options: ["F60.2 Antisocial personality disorder", "F91.2 Conduct disorder, adolescent-onset type", "F60.81 Narcissistic personality disorder", "Z72.810 Adult antisocial behavior", "No code: Section III only"], answer: 0 }
      ],
      line: "**F60.2** Antisocial personality disorder. Formulation: personality functioning **Level 3 (severe)**; elevated manipulativeness, callousness, deceitfulness, hostility, risk taking, impulsivity, irresponsibility; **with psychopathic features** (low anxiousness, low withdrawal, high attention seeking) (app guidance)",
      why: "Identity (self-esteem from gain and power), self-direction (personal gratification, no lawful standards), empathy (no remorse) and intimacy (exploitation, intimidation) are all impaired (p. 884). He shows **all seven** antisocial traits, above the **6 of 7** needed, and is over **18** (pp. 884–885). Calm fearlessness, social boldness and liking an audience are **low anxiousness, low withdrawal and high attention seeking**, the psychopathic-features specifier (p. 885). The set has no code; childhood conduct problems before 15 also meet the Section II rule (Ch 18, p. 748), so the chart takes **F60.2** (app guidance)."
    },
    {
      id: "w26-04", tag: "Avoidant",
      "case": "Carlo, 27, an encoder in Subic, comes because his mother worries he will never marry. Since high school he has seen himself as dull and inferior, feels deep shame at small mistakes, and will not join a group unless he is sure he is welcome. He is constantly nervous about being embarrassed, keeps away from coworkers, gets little pleasure from anything, and has never let anyone become close. His goals are realistic and he understands others well. Section II avoidant criteria are also met. No other mental disorder, substance or medical condition accounts for this.",
      parts: [
        { label: "LPFS level", options: LPFS, answer: 2 },
        { label: "Criterion A areas impaired", options: AREAS, answer: 2 },
        { label: "Proposed set", options: ["Schizotypal personality disorder", "Avoidant personality disorder", "Personality disorder–trait specified (schizoid-like)", "Obsessive-compulsive personality disorder", "None: B not met"], answer: 1 },
        { label: "Chart line", options: ["F60.89 Other specified personality disorder", "F40.10 Social anxiety disorder", "F60.1 Schizoid personality disorder", "F60.6 Avoidant personality disorder", "F21 Schizotypal personality disorder"], answer: 3 }
      ],
      line: "**F60.6** Avoidant personality disorder. Formulation: personality functioning **Level 2 (moderate)**; elevated anxiousness, withdrawal, anhedonia, intimacy avoidance (app guidance)",
      why: "Identity (low self-esteem, shame, feels inferior) and intimacy (will not get involved unless sure of being liked) are impaired; self-direction and empathy are not described as impaired: **two** areas, which is enough (pp. 885, 891). B needs **3 of 4** with **anxiousness** among them; he has all four (pp. 885–886). Schizoid-like PD-TS would lack the anxious wish to be accepted (app guidance). The chart carries the Section II code (Ch 18, p. 764; app guidance); if social anxiety disorder were also present, it would be recorded in its own right (app guidance)."
    },
    {
      id: "w26-05", tag: "Obsessive-compulsive",
      "case": "Engr. Dela Cruz, 46, a plant supervisor in Mariveles, is referred by his wife. His sense of worth comes almost entirely from work, and he rarely shows feelings. Reports are never finished because no draft is good enough, and he insists his rules are the only moral way to work. He understands well enough why staff resent being corrected over tiny details, yet family events always come second to work, and his stubbornness has driven away two assistants. He keeps redoing tasks the same way after it is clear the approach fails, avoids closeness with his wife, and shows little emotion even at his father’s funeral. Section II criteria for obsessive-compulsive personality disorder are also met.",
      parts: [
        { label: "LPFS level", options: LPFS, answer: 2 },
        { label: "Criterion A areas impaired", options: AREAS, answer: 3 },
        { label: "Proposed set", options: ["Avoidant personality disorder", "Narcissistic personality disorder", "Obsessive-compulsive personality disorder", "Schizotypal personality disorder", "PD-TS"], answer: 2 },
        { label: "Chart line", options: ["F42.2 Obsessive-compulsive disorder", "F60.6 Avoidant personality disorder", "F60.81 Narcissistic personality disorder", "F60.89 Other specified personality disorder", "F60.5 Obsessive-compulsive personality disorder"], answer: 4 }
      ],
      line: "**F60.5** Obsessive-compulsive personality disorder. Formulation: personality functioning **Level 2 (moderate)**; elevated rigid perfectionism, perseveration, intimacy avoidance, restricted affectivity (app guidance)",
      why: "Three areas are impaired: identity tied to work with constricted emotion, self-direction blocked by rigid standards, and intimacy (relationships second to work, harmed by stubbornness); empathy is spared (p. 888). Two are enough (p. 891). B needs **3 of 4** and **rigid perfectionism must be one**; he has all four (p. 888). Without obsessions or compulsions there is no OCD (app note). The set has no code; the Section II disorder goes on the chart (Ch 18, p. 771; app guidance)."
    },
    {
      id: "w26-06", tag: "Schizotypal features only in schizophrenia",
      "case": "Arnel, 22, a former engineering student in Olongapo, has had 2 years of voices commenting on him, a fixed belief that neighbors broadcast his thoughts, and marked decline. During this illness he has also been odd in dress and speech, suspicious of everyone, withdrawn and flat, and believes he can sense others’ intentions. His family and school records describe a sociable, ordinary young man with friends and normal interests until the year the illness began. He meets criteria for schizophrenia.",
      parts: [
        { label: "General criterion that decides", options: ["A: impairment is less than moderate", "B: no pathological trait", "C: not pervasive", "D: onset too late", "E: better explained by another mental disorder"], answer: 4 },
        { label: "Proposed set", options: ["None: no personality disorder diagnosed", "Schizotypal personality disorder", "PD-TS (paranoid-like)", "Schizotypal personality disorder (premorbid)", "PD-TS (schizoid-like)"], answer: 0 },
        { label: "Chart line", options: ["F21 Schizotypal personality disorder", "F60.0 Paranoid personality disorder", "F20.9 Schizophrenia", "F20.9 Schizophrenia; F21 Schizotypal personality disorder", "F23 Brief psychotic disorder"], answer: 2 },
        { label: "When could a personality disorder be added", options: ["Never once schizophrenia is diagnosed", "If the traits clearly predated the illness (Section II adds “premorbid”)", "After 6 months of illness", "When the PID-5 shows Psychoticism", "Whenever four schizotypal traits are present"], answer: 1 }
      ],
      line: "**F20.9** Schizophrenia. Formulation: odd, suspicious and detached traits seen only during the psychotic illness; no personality disorder (app guidance)",
      why: "A personality disorder is **not** diagnosed when its features are clearly an expression of another mental disorder, and the manual’s own example is schizotypal features present **only in the context of schizophrenia** (Criterion E, p. 883). In Section II, schizotypal PD whose criteria were met **before** schizophrenia began is recorded with “**premorbid**” (Ch 18, p. 745)."
    },
    {
      id: "w26-07", tag: "Narcissistic, vulnerable",
      "case": "Dr. Santos, 38, a dentist in Manila, comes for low mood after a younger colleague is made clinic head. Since residency his self-worth has risen and fallen with others’ praise; he swings between feeling superior and feeling worthless. He chooses goals for the applause, quietly feels owed special treatment, and looks down on colleagues he thinks less gifted while fishing for admiration on social media. He notices others’ feelings only when they reflect on him, and his friendships are thin and serve his image. Behind this he is often sad, ashamed and anxious. Section II narcissistic personality disorder criteria are also met; a major depressive episode is ruled out.",
      parts: [
        { label: "LPFS level", options: LPFS, answer: 2 },
        { label: "Proposed set", options: ["Avoidant personality disorder", "Borderline personality disorder", "PD-TS: grandiosity is covert", "Narcissistic personality disorder", "None: B traits not met"], answer: 3 },
        { label: "Traits to add as specifiers", options: ["Depressivity and anxiousness (a “vulnerable” presentation)", "Manipulativeness and callousness", "Hostility and impulsivity", "None: specifiers are not allowed", "Psychopathic features"], answer: 0 },
        { label: "Chart line", options: ["F32.1 Major depressive disorder", "F60.6 Avoidant personality disorder", "F60.89 Other specified personality disorder", "F60.4 Histrionic personality disorder", "F60.81 Narcissistic personality disorder"], answer: 4 }
      ],
      line: "**F60.81** Narcissistic personality disorder. Formulation: personality functioning **Level 2 (moderate)**; elevated grandiosity and attention seeking, with depressivity and anxiousness specified (vulnerable presentation) (app guidance)",
      why: "All four areas are impaired (p. 887). B requires **both** grandiosity and attention seeking; entitlement may be **overt or covert**, so his quiet sense of being owed still counts (pp. 887–888). Depressivity and anxiousness are not criteria but can be specified for a more **vulnerable** presentation; manipulativeness, deceitfulness and callousness would be specified for “malignant” narcissism (p. 888). The chart carries Section II F60.81 (Ch 18, p. 760; app guidance)."
    },
    {
      id: "w26-08", tag: "Dependent-like, trait specified",
      "case": "Liza, 29, a housewife in Balanga, comes with her mother, who answers most questions. Since adolescence she has not been able to choose clothes or meals without advice, lets her mother and husband run her finances and plans, never disagrees for fear they will withdraw support, cannot start anything alone, does chores no one else will do to stay in favor, feels helpless when alone, and fears being left to fend for herself. She defines herself by what her family wants and has no goals of her own. She understands others well. Section II dependent personality disorder criteria are met. Her family’s closeness is typical of their community, but her own relatives call her helplessness extreme.",
      parts: [
        { label: "LPFS level", options: LPFS, answer: 2 },
        { label: "Criterion A areas impaired", options: AREAS, answer: 3 },
        { label: "Proposed set", options: ["Avoidant personality disorder", "Dependent personality disorder (Section III)", "Borderline personality disorder", "None: dependent PD was dropped", "Personality disorder–trait specified"], answer: 4 },
        { label: "Chart line", options: ["F60.89 Other specified personality disorder", "F60.6 Avoidant personality disorder", "F60.7 Dependent personality disorder", "F60.3 Borderline personality disorder", "No code: PD-TS"], answer: 2 }
      ],
      line: "**F60.7** Dependent personality disorder. Formulation: personality functioning **Level 2 (moderate)**; elevated submissiveness, separation insecurity, anxiousness (Negative Affectivity); profile consistent with PD-TS, dependent-like (app guidance)",
      why: "Identity (defined by others), self-direction (no goals of her own) and intimacy (relationships held together by need) are impaired: **three** areas (pp. 890–891). Dependent PD is **not** one of the six sets; it is represented by **PD-TS** with moderate or greater impairment and the relevant traits, here **submissiveness, separation insecurity and anxiousness** (p. 891). Criterion G asks whether the pattern is normal for her culture (p. 881); her own family calls it extreme. The chart carries the Section II disorder, F60.7 (Ch 18, p. 768; app guidance)."
    },
    {
      id: "w26-09", tag: "Level 1, no disorder",
      "case": "Mark, 33, a bank teller in Mariveles, has generalized anxiety disorder diagnosed last month. He worries readily, ruminates over the same problem for hours, and is a perfectionist about paperwork. His sense of self is clear and his self-esteem dips only under heavy pressure; he sets realistic goals, though he can be overly driven; when upset he briefly struggles to see a coworker’s view, then recovers it; and he has a long, mutual marriage and two close friends.",
      parts: [
        { label: "LPFS level", options: LPFS, answer: 1 },
        { label: "Criterion A areas impaired at moderate or worse", options: AREAS, answer: 0 },
        { label: "Proposed set", options: ["Obsessive-compulsive personality disorder", "PD-TS (anxiousness, perseveration)", "None: Criterion A is not met", "Avoidant personality disorder", "PD-TS, because traits are elevated"], answer: 2 },
        { label: "Chart line", options: ["F41.1 Generalized anxiety disorder", "F41.1 Generalized anxiety disorder; F60.89 Other specified personality disorder", "F60.5 Obsessive-compulsive personality disorder", "F60.9 Unspecified personality disorder", "F60.6 Avoidant personality disorder"], answer: 0 }
      ],
      line: "**F41.1** Generalized anxiety disorder. Formulation: personality functioning **Level 1 (some impairment)**, below the disorder threshold; elevated anxiousness and perseveration, relevant to treatment (app guidance)",
      why: "Each area shows only the strain under stress that marks **Level 1** (Table 2, p. 895); a disorder needs **moderate (Level 2) or greater** impairment in at least two areas (pp. 881–882, 890). Elevated traits alone never make a personality disorder: A and B are both required (p. 881). The LPFS **may still be used** as a global indicator when impairment is subthreshold, and the trait profile may guide treatment whether or not a personality disorder is present (pp. 892, 894)."
    }
  ]);

  SP.add("ch26", "counting", [
    {
      id: "n26-01", tag: "Criterion A: two areas",
      "case": "Ana, 26, an OFW on leave in Bataan, is assessed for a personality disorder. The findings below come from her interview.",
      ask: "Mark the findings that show an area of personality functioning (identity, self-direction, empathy, intimacy) impaired at the moderate level or worse.",
      metLabel: "Are at least two areas impaired, so that Criterion A is met?",
      items: [
        ["Her sense of who she is rises and falls with whether her partner approves of her that day", true, "Identity resting on others’ approval is a moderate-level identity problem (Table 1, p. 883; Table 2, p. 896)."],
        ["She cries easily and her moods change quickly", false, "That is a **trait** (emotional lability, Criterion B), not an area of functioning (pp. 882, 899)."],
        ["She picks goals mainly to win her employer’s praise", true, "Goals used as a route to outside approval: self-direction, moderate (Table 2, p. 896)."],
        ["Under strain she briefly loses track of a friend’s view, then regains it", false, "Empathy that slips only under stress is **Level 1** (Table 2, p. 895)."],
        ["She has two long, close friendships with real give-and-take", false, "Intimacy is intact (Table 2, p. 895)."],
        ["She doubts her worth on a bad day but recovers quickly", false, "Another identity finding, already counted, and only at the level of brief dips (Table 2, p. 895)."]
      ],
      need: 2,
      met: true,
      why: "Identity and self-direction are impaired at the moderate level: **two of four** areas, which is what every proposed set and PD-TS require (pp. 884–891). The two areas are counted once each however many findings support them, and traits belong to Criterion B, not A. Criterion B and C–G must still be assessed."
    },
    {
      id: "n26-02", tag: "Avoidant: anxiousness required",
      "case": "Ben, 30, a librarian in Balanga, has moderate impairment in identity and intimacy. He keeps away from people, enjoys little, and avoids closeness. Asked directly, he says he is not nervous or fearful in company; he simply prefers to be alone.",
      ask: "Mark the findings that count toward the avoidant set’s Criterion B.",
      metLabel: "Is avoidant Criterion B met?",
      items: [
        ["Avoids coworkers and social events", true, "Withdrawal, item 2 (p. 885)."],
        ["Finds little joy in activities he once liked", true, "Anhedonia, item 3 (p. 886)."],
        ["Has never let anyone become close", true, "Intimacy avoidance, item 4 (p. 886)."],
        ["Sees himself as dull and inferior", false, "A Criterion **A** (identity) feature, not a B trait (p. 885)."],
        ["Not nervous or fearful of embarrassment", false, "Anxiousness, item 1, is **absent**."]
      ],
      need: 3,
      met: false,
      why: "Three traits count, but the avoidant set needs **three of four with anxiousness among them** (p. 885). Without anxiousness the set is not met even with three traits. A pattern of withdrawal, anhedonia and intimacy avoidance without anxiety is closer to a schizoid-like PD-TS profile (p. 891; app guidance)."
    },
    {
      id: "n26-03", tag: "OCPD: perfectionism required",
      "case": "Mrs. Reyes, 52, a school principal in Mariveles, has moderate impairment in identity and self-direction. Findings from her interview and her husband’s report:",
      ask: "Mark the findings that count toward the obsessive-compulsive set’s Criterion B.",
      metLabel: "Is obsessive-compulsive Criterion B met?",
      items: [
        ["Insists every memo be flawless and redoes others’ work", true, "Rigid perfectionism, item 1, the **must-have** trait (p. 888)."],
        ["Keeps using the same failed approach long after it stops working", true, "Perseveration, item 2 (p. 888)."],
        ["Shows almost no feeling, even at family celebrations", true, "Restricted affectivity, item 4 (p. 888)."],
        ["Worries a great deal about the school’s inspection", false, "Anxiousness is **not a criterion**; it can be added as a specifier (p. 889)."],
        ["Has a warm, close marriage", false, "Intimacy avoidance, item 3, is **absent**."],
        ["Keeps old newspapers she cannot discard", false, "Not one of the model’s traits for this set."]
      ],
      need: 3,
      met: true,
      why: "She has **three of four** traits and **rigid perfectionism** is one of them, as the set requires (p. 888). Rigid perfectionism sits at the extreme Conscientiousness end, the opposite pole of Disinhibition (p. 888)."
    },
    {
      id: "n26-04", tag: "Borderline: one of three",
      "case": "Tess, 23, a college student in Manila, has moderate impairment in identity, empathy and intimacy. Her traits:",
      ask: "Mark the traits that count toward the borderline set’s Criterion B.",
      metLabel: "Is borderline Criterion B met (count and must-have rule)?",
      items: [
        ["Rapid, intense mood shifts", true, "Emotional lability, item 1 (p. 886)."],
        ["Gives in to others to avoid conflict", false, "Submissiveness is **not** in the borderline set (p. 886)."],
        ["Dread of being left by her boyfriend", true, "Separation insecurity, item 3 (p. 886)."],
        ["Persistent feelings of worthlessness and shame", true, "Depressivity, item 4 (p. 887)."],
        ["Strange perceptual experiences under stress", false, "Psychoticism traits are **not** criteria but can be specified (p. 887)."],
        ["Frequent angry outbursts at slight provocation", true, "Hostility, item 7, one of the **three must-haves** (p. 887)."]
      ],
      need: 4,
      met: true,
      why: "Four traits count and **hostility** satisfies the rule that at least one of **impulsivity, risk taking or hostility** be present (p. 886). Four emotional traits without any of the three would not meet the set (p. 886)."
    },
    {
      id: "n26-05", tag: "Antisocial: six of seven",
      "case": "Rommel, 29, in Olongapo, has moderate or greater impairment in all four areas. He is calm, bold and at ease with strangers. Findings:",
      ask: "Mark the findings that count toward the antisocial set’s Criterion B.",
      metLabel: "Is antisocial Criterion B met?",
      items: [
        ["Charms and cons people for money", true, "Manipulativeness, item 1 (p. 884)."],
        ["Indifferent to the harm he causes", true, "Callousness, item 2 (p. 884)."],
        ["Lies about his name and history", true, "Deceitfulness, item 3 (p. 884)."],
        ["Plans every scheme carefully, never acts on a whim", false, "Impulsivity, item 6, is **absent**."],
        ["Seeks danger for the thrill", true, "Risk taking, item 5 (p. 884)."],
        ["Never repays debts or keeps agreements", true, "Irresponsibility, item 7 (p. 885)."],
        ["Fearless and unworried under stress", false, "Low anxiousness belongs to the **psychopathic features** specifier, not Criterion B (p. 885)."],
        ["Long arrest record", false, "Criminal history is not one of the seven traits."]
      ],
      need: 6,
      met: false,
      why: "He has **five** of seven; the set needs **six or more** (p. 884). Hostility is not described and impulsivity is absent. This is far higher than the Section II **3 of 7** (Ch 18, p. 748). A personality disorder judged present that falls short of the set would be PD-TS (p. 891)."
    },
    {
      id: "n26-06", tag: "Narcissistic: both",
      "case": "Paolo, 40, a businessman in Subic, has moderate impairment in identity, self-direction and empathy.",
      ask: "Mark the findings that count toward the narcissistic set’s Criterion B.",
      metLabel: "Is narcissistic Criterion B met?",
      items: [
        ["Quietly expects special treatment and looks down on others", true, "Grandiosity, item 1; entitlement may be overt **or covert** (p. 887)."],
        ["Works hard to be admired and noticed", true, "Attention seeking, item 2 (p. 888)."],
        ["Uses people to get ahead", false, "Manipulativeness is a **specifier** for more pervasive antagonism, not a criterion (p. 888)."],
        ["Often feels low and ashamed", false, "Depressivity can be specified for a more vulnerable presentation (p. 888)."]
      ],
      need: 2,
      met: true,
      why: "The narcissistic set needs **both** traits, grandiosity and attention seeking (pp. 887–888). Other Antagonism traits suggest “malignant” narcissism and Negative Affectivity traits a “vulnerable” one; both are recorded as specifiers (p. 888)."
    },
    {
      id: "n26-07", tag: "Schizotypal: four of six",
      "case": "Dodong, 34, a fisherman in Mariveles, has moderate impairment in identity and intimacy. His traits have been stable since adolescence; there is no psychotic disorder.",
      ask: "Mark the traits that count toward the schizotypal set’s Criterion B.",
      metLabel: "Is schizotypal Criterion B met?",
      items: [
        ["Believes he can read the sea spirits’ intentions, beyond what his community holds", true, "Unusual beliefs and experiences, item 2 (p. 889)."],
        ["Odd clothing and manner that neighbors remark on", true, "Eccentricity, item 3 (p. 889)."],
        ["Prefers to be alone and avoids gatherings", true, "Withdrawal, item 5 (p. 889)."],
        ["Anxious in company", false, "Anxiousness is not a criterion; it can be specified (p. 889)."],
        ["Months of low mood", false, "Depressivity can be specified (p. 889), not counted."],
        ["Trusts his fellow fishermen", false, "Suspiciousness, item 6, is **absent**."]
      ],
      need: 4,
      met: false,
      why: "He has **three** of six; the set needs **four or more** (p. 889). Beliefs shared by his community would not count (Criterion G, p. 881). With A met and a personality disorder judged present, PD-TS describes him (p. 891)."
    },
    {
      id: "n26-08", tag: "PD-TS Criterion B",
      "case": "Gina, 37, a vendor in Balanga, has moderate impairment in identity and intimacy and does not fit any of the six sets. Findings:",
      ask: "Mark the findings that count toward PD-TS Criterion B (an elevated trait domain or facet).",
      metLabel: "Is PD-TS Criterion B met (one or more)?",
      items: [
        ["Elevated submissiveness on interview and her sister’s report", true, "A Negative Affectivity facet; PD-TS considers all five domains (p. 890)."],
        ["Elevated separation insecurity", true, "Negative Affectivity facet (p. 899)."],
        ["Poor concentration during a depressive episode last year", false, "An episode **symptom**, not a trait (pp. 893–894)."],
        ["One impulsive large purchase after a lotto win", false, "A single **behavior**, not a trait (p. 893)."],
        ["Distractibility that has been steady for years", true, "A Disinhibition facet, used by none of the six sets but valid for PD-TS (pp. 890, 900)."]
      ],
      need: 1,
      met: true,
      why: "PD-TS needs **one or more** elevated domains or facets, reviewed across all five domains (p. 890). The traits recorded are themselves the specifiers (p. 890). Elevation rests on norms and/or clinical judgment (p. 894)."
    },
    {
      id: "n26-09", tag: "Detachment’s facets",
      "case": "Table 3 lists the facets under each domain, and some facets are listed under one domain while defined under another (pp. 899–901).",
      ask: "Mark the facets that belong to the Detachment domain.",
      metLabel: "Have you found all six Detachment facets?",
      items: [
        ["Withdrawal", true, "Detachment (p. 899)."],
        ["Anxiousness", false, "Negative Affectivity (p. 899)."],
        ["Depressivity", true, "Defined under Detachment; cross-listed in Negative Affectivity (p. 899)."],
        ["Anhedonia", true, "Detachment (p. 899)."],
        ["Hostility", false, "Defined under Negative Affectivity (with a cross-reference to Antagonism) (pp. 899–900)."],
        ["Suspiciousness", true, "Defined under Detachment; cross-listed in Negative Affectivity (p. 899)."],
        ["Intimacy avoidance", true, "Detachment (p. 899)."],
        ["Eccentricity", false, "Psychoticism (p. 901)."],
        ["Restricted affectivity", true, "Detachment; its **lack** marks low Negative Affectivity (p. 899)."],
        ["Perseveration", false, "Negative Affectivity (p. 899)."]
      ],
      need: 6,
      met: true,
      why: "Detachment has **six** facets: withdrawal, intimacy avoidance, anhedonia, depressivity, restricted affectivity and suspiciousness (p. 899; app count). Depressivity and suspiciousness are classic traps because Negative Affectivity lists them too, with a pointer to Detachment."
    }
  ]);
})();
