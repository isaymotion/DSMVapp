/* Disorder library: Chapter 26, Alternative DSM-5 Model for Personality Disorders (DSM-5-TR Section III, pp. 881–902; p. 902 is blank).
   The model is offered as an ALTERNATIVE to the Section II classification (p. 881). Its general criteria, its six proposed
   sets and personality disorder—trait specified (PD-TS) carry no code of their own: each entry’s `code` is
   “No code (Section III)”, and `codes` lists the Section II route. The chapter itself gives no coding instruction, so every
   statement that a presentation “goes on the chart as” a Section II disorder is app guidance; the Section II codes come from
   Chapter 18 (schizotypal PD, F21, also Chapter 2). The two instruments of the model, the Level of Personality Functioning
   Scale (Table 2) and the trait taxonomy (Table 3), are entries with `code` “No code (assessment measure)”; their tables are
   described in condensed own words, never reprinted. Codes checked November 2, 2026 (FY2027 ICD-10-CM listing): no change
   was found for the codes checked; confirm against the official tabular list. The chapter gives no prevalence figures.
   Self-harm content stays at the chapter’s own general wording. */
(function () {
  var SRC = "CMS FY2027 ICD-10-CM code listing (proposed rule version; secondary to the official tabular list); icd10data annual history for F60.81; APA DSM-5-TR code-update listing page; checked November 2, 2026";
  var REC = "App guidance: Section III proposal with no code of its own; the chart carries the Section II disorder and its code when the Section II criteria are met (Ch 18). No change was found for the codes checked (November 2, 2026); confirm against the official tabular list";
  var NCU = "No change was found for the codes checked; confirm against the official tabular list";
  var CODE3 = "No code (Section III)";
  var CODEM = "No code (assessment measure)";
  var ALT = " The proposed set itself belongs to an **alternative model** placed in Section III (p. 881); the chapter gives no coding instruction, so this route is app guidance. The two models use different thresholds, so meeting the Section III set does not by itself establish the Section II diagnosis, or the reverse (app guidance).";
  var CONFIRM = " No change was found for the codes checked (November 2, 2026); confirm against the official tabular list in force on the date of service.";
  var NOEPI = [
    ["Prevalence in this chapter", "Not given (pp. 881–901)"],
    ["How the B threshold was chosen", "Set empirically to keep prevalence close to DSM-IV, to limit overlap with the other personality disorders and to strengthen the link with functional impairment (p. 891)"],
    ["How the A threshold was chosen", "Any 2 of the 4 areas, the rule that tied the A criteria most closely to the matching disorder (p. 891)"]
  ];
  function upd(title, text) { return [{ kind: "post", year: "2026", title: title, source: SRC, text: text }]; }
  function measureUpd(name, text) {
    return [{ kind: "post", year: "2026", title: "Not a diagnosis: how to record", source: "DSM-5-TR pp. 881, 892, 894; research file of November 2, 2026; app guidance",
      text: "**App guidance**: the " + name + " is part of an alternative model in Section III (p. 881) and carries **no code**. Never write a level or a trait profile on the **diagnosis line**: record it in the formulation and the treatment plan, and code the Section II personality disorder that is met (Ch 18). " + text }];
  }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "ampd-general", ch: "ch26", sec: "s26-general", pages: "881–883", critPages: "881",
      name: "General criteria for personality disorder (alternative model)", code: CODE3,
      codes: [
        ["F60.89", "Other specified personality disorder (Ch 18), when a personality disorder is present but no Section II type is met; state the reason (e.g., the trait profile)", REC],
        ["F60.9", "Unspecified personality disorder (Ch 18), when the reason is not recorded", REC]
      ],
      aka: ["AMPD general criteria", "alternative model for personality disorders", "hybrid dimensional–categorical model", "Section III personality disorder criteria A–G"],
      essence: "The frame every disorder in the model must fit (p. 881): **A** at least **moderate** impairment in personality functioning (self and interpersonal), **B** at least **one** pathological trait, **C** both **relatively** inflexible and pervasive, **D** **relatively** stable with onset traceable to **at least adolescence or early adulthood**, and **E–G** not better explained by another mental disorder, not solely due to a substance or medical condition, and not simply normal for the person’s developmental stage or sociocultural setting. Diagnosis rests on **two determinations**: the level of impairment (A) and the trait evaluation (B) (p. 882). All six proposed sets and PD-TS meet these criteria by definition (p. 882).",
      duration: "Relatively stable over time, with onset traceable to at least adolescence or early adulthood (Criterion D, p. 881); no minimum number of months is given",
      functioning: "Criterion A itself: moderate or greater impairment (Level 2 or worse on the LPFS) in identity, self-direction, empathy and intimacy (pp. 881–883); the inflexible pattern leads to social, occupational or other disability (p. 882)",
      mood: "A personality disorder can be diagnosed alongside another disorder such as major depressive disorder; traits (dispositions) are more stable than their symptomatic expressions (pp. 882–883)",
      criteria: [
        ["A", "Personality functioning, self and interpersonal, is impaired to a moderate degree or worse."],
        ["B", "At least one pathological personality trait is present."],
        ["C", "The functioning impairments and the trait expression are relatively rigid and show up across many personal and social settings."],
        ["D", "They are relatively stable over time, and their start can be followed back at least to adolescence or early adulthood."],
        ["E", "Another mental disorder does not account for them better."],
        ["F", "They are not due solely to the physiological effects of a substance or a medical condition (the manual’s example: severe head trauma)."],
        ["G", "They are not better seen as normal for the person’s developmental stage or sociocultural surroundings."],
        ["Two determinations", "A needs a rating of the level of impairment; B needs an evaluation of pathological traits (p. 882)."],
        ["Elements of functioning (Table 1)", "Self = **identity** (a distinct self with clear boundaries, steady and accurate self-esteem, a range of emotion that can be regulated) and **self-direction** (coherent short- and long-term goals, constructive prosocial standards, useful self-reflection); interpersonal = **empathy** (grasping others’ experience and motives, tolerating other views, seeing one’s own effect on others) and **intimacy** (depth and duration of ties, wish and capacity for closeness, mutual regard) (pp. 882–883)."],
        ["“Relatively”", "Used because all but the most extremely disturbed personalities keep some adaptability (p. 882)."]
      ],
      specifiers: [
        "Level of personality functioning (LPFS Level 2, 3 or 4 for any disorder; Table 2, pp. 892, 895–898)",
        "Trait profile across the five domains and 25 facets (Table 3, pp. 899–901)",
        "The specific disorder that applies: one of the six proposed sets, or PD-TS (pp. 883–891)"
      ],
      epi: [
        ["Prevalence in this chapter", "Not given (pp. 881–901)"],
        ["Numbers to know", "7 general criteria (A–G); 4 elements of functioning; LPFS Levels 0–4 with Level 2 the threshold; 5 domains; 25 facets; 6 named disorders plus PD-TS (pp. 881–882; app count of criteria)"]
      ],
      risk: [
        "Not given as risk factors. The severity of impairment predicts having **more than one** personality disorder, or a disorder of the **typically more severe** kind (p. 882).",
        "Traits can change: maturation (teenagers generally score higher on trait impulsivity than older adults) and life experience both play a part (p. 892).",
        "Impairments in functioning are more stable than symptoms (p. 882)."
      ],
      differential: [
        { id: "general-pd", how: "The Section II general criteria (Ch 18) define a personality disorder by an enduring pattern in 2 or more of cognition, affectivity, interpersonal functioning and impulse control, with no severity scale; the Section II set decides the code (Ch 18; app guidance)." },
        { id: "schizophrenia", how: "Criterion E: when schizotypal features appear only within schizophrenia, no personality disorder is diagnosed (p. 883)." },
        { id: "mdd", how: "Not exclusionary: a personality disorder can be diagnosed alongside major depressive disorder, and people with other disorders should be assessed for comorbid personality disorders because these often affect the course (p. 883)." },
        { id: "personality-change-amc", how: "Criterion F: a pattern due solely to a medical condition, such as severe head trauma, is excluded (p. 881); the Section II home is personality change due to another medical condition (Ch 18; app guidance)." },
        { name: "Substance effects", how: "Criterion F: a pattern due solely to the physiological effects of a substance is excluded (p. 881)." },
        { name: "Developmental stage or sociocultural norm", how: "Criterion G: adolescence or late life, or the person’s cultural setting, may explain what looks like a personality disorder (pp. 881, 883)." },
        { id: "lpfs", how: "The instrument for Criterion A; Level 2 (moderate) or worse is required (p. 882)." },
        { id: "trait-model", how: "The taxonomy for Criterion B: five domains, 25 facets (pp. 882, 899–901)." },
        { id: "ampd-pd-ts", how: "When the general criteria are met but no specific set is, the diagnosis in the model is PD-TS (pp. 881, 891)." }
      ],
      pearls: [
        "Two determinations: **level** (A) and **traits** (B) (p. 882).",
        "Threshold = **moderate** impairment (Level 2), chosen on empirical grounds (p. 882).",
        "Onset traceable to **at least adolescence or early adulthood**; no age number except **18 for antisocial** (pp. 881, 885).",
        "“Relatively” in C and D is deliberate: almost every personality shows some adaptability (p. 882).",
        "A personality disorder **can coexist** with MDD; assessing personality is **always** appropriate (p. 883).",
        "In the chart (app guidance): the Section II disorder and its code; the model’s level and traits go in the formulation."
      ],
      cmp: { symptoms: "A: moderate or greater impairment in self/interpersonal functioning; B: ≥1 pathological trait; C–D: relatively inflexible, pervasive and stable", exclusions: "Better explained by another mental disorder; solely a substance or medical condition (e.g., severe head trauma); normal for developmental stage or culture", prevalence: "Not given in the chapter", course: "Onset traceable to at least adolescence or early adulthood; traits and functioning impairments more stable than symptoms" },
      clues: [["Two determinations", "Level of personality functioning (A) + pathological traits (B)"], ["Threshold", "LPFS Level 2 (moderate) or worse"], ["Recording (app guidance)", "Section II disorder and code; AMPD level and traits in the formulation"]],
      updates: [
        { kind: "post", year: "2026", title: "Recording route checked November 2026", source: SRC, text: "**App guidance**: the general criteria have no code. When a personality disorder is present, the chart carries the **Section II** disorder that is met (Ch 18), or **other specified personality disorder (F60.89)** with the reason stated, or **unspecified personality disorder (F60.9)**. ICD-10-CM titles: F60.89 “Other specific personality disorders”; F60.9 “Personality disorder, unspecified”." + ALT + CONFIRM },
        { kind: "post", year: "2026", title: "DSM-5 to DSM-5-TR", source: "APA DSM-5-TR Section III summary (research file of November 2, 2026)", text: "The APA’s summary of Section III changes states that the alternative model was **not changed** from DSM-5 (outside the DSM). The app found no substantive criterion changes between DSM-5 (2013) and DSM-5-TR in this chapter; confirm against both editions (app comparison)." }
      ]
    },
    {
      id: "ampd-antisocial", ch: "ch26", sec: "s26-antisocial", pages: "883–885", critPages: "884–885",
      name: "Antisocial personality disorder (alternative model)", code: CODE3,
      codes: [["F60.2", "Antisocial personality disorder (Section II, Ch 18), when its own criteria are met, including conduct disorder with onset before 15", REC]],
      aka: ["AMPD antisocial PD", "Section III antisocial personality disorder", "psychopathy (specifier: with psychopathic features)", "primary psychopathy (specifier)"],
      essence: "A **proposed** Section III set (p. 881): moderate or greater impairment in **2 or more of 4** areas (egocentric, gain-driven self-esteem; goals set by personal gratification with no prosocial standards; no concern or remorse for others; relationships run by exploitation, deceit, coercion or intimidation) plus **6 or more of 7** traits from **Antagonism** (manipulativeness, callousness, deceitfulness, hostility) and **Disinhibition** (risk taking, impulsivity, irresponsibility). The person is **at least 18** (pp. 884–885).",
      duration: "Relatively stable, onset traceable to at least adolescence or early adulthood (general Criterion D, p. 881); at least 18 years of age (p. 885)",
      functioning: "Moderate or greater impairment in 2 or more of identity, self-direction, empathy and intimacy (Criterion A, p. 884); the level can also be specified (p. 885)",
      mood: "Negative Affectivity traits such as anxiousness are not criteria but may be specified (p. 885); the psychopathic variant shows low anxiousness (p. 885)",
      criteria: [
        ["A", "Moderate or greater impairment, with typical difficulties in at least 2 of: (1) identity: self-centred, with self-esteem fed by gain, power or pleasure; (2) self-direction: goals chosen for personal gratification, and no prosocial inner standards, so lawful or culturally accepted ethical conduct is not followed; (3) empathy: indifference to others’ feelings, needs or suffering and no remorse after harming them; (4) intimacy: unable to sustain mutual closeness because relating means exploiting, through deceit and coercion, and controlling others by dominance or intimidation."],
        ["B", "At least 6 of these 7 traits: (1) **manipulativeness** (Antagonism): subterfuge, charm or flattery used to steer others; (2) **callousness** (Antagonism): no concern or guilt about harm done, including aggression and sadism; (3) **deceitfulness** (Antagonism): dishonesty, fraud, a false or embellished account of self and events; (4) **hostility** (Antagonism): frequent anger, irritability at small slights, spiteful or vengeful acts; (5) **risk taking** (Disinhibition): needless danger without regard for consequences, acting to escape boredom, denying one’s limits and the reality of danger; (6) **impulsivity** (Disinhibition): acting on the moment’s stimulus without a plan, trouble making or keeping plans; (7) **irresponsibility** (Disinhibition): ignoring financial and other obligations, not keeping agreements and promises."],
        ["Note", "The person is at least 18 years old (p. 885)."],
        ["C–G", "The general criteria C through G also apply (p. 884)."]
      ],
      specifiers: [
        "With psychopathic features: **low anxiousness** (Negative Affectivity), **low withdrawal** (Detachment) and **high attention seeking** (Antagonism); high attention seeking with low withdrawal = social potency (assertive, dominant), low anxiousness = stress immunity; a bold style that may mask maladaptive acts such as fraud, often called “primary” psychopathy (p. 885)",
        "Additional traits not in Criterion B, for example anxiousness, can be specified when appropriate (p. 885)",
        "Level of personality functioning can also be specified (p. 885)"
      ],
      epi: NOEPI,
      risk: [
        "Not given in the chapter. Age: the set requires at least 18 years (p. 885).",
        "Traits change with maturation: teenagers are generally higher on trait impulsivity than older adults (p. 892), one reason Criterion G asks whether the pattern is normal for the developmental stage (p. 881)."
      ],
      differential: [
        { id: "antisocial-pd", how: "Section II needs 3 of 7 criteria since age 15, age at least 18 and evidence of conduct disorder before 15 (Ch 18, p. 748); the Section III set needs 2 of 4 A areas plus 6 of 7 traits and has no conduct disorder criterion (pp. 884–885). The Section II set decides the code (app guidance)." },
        { id: "ampd-borderline", how: "Shares hostility, impulsivity and risk taking; borderline adds Negative Affectivity (lability, anxiousness, separation insecurity, depressivity) and an unstable self-image rather than an egocentric one (pp. 884–887)." },
        { id: "ampd-narcissistic", how: "Both in Antagonism; narcissistic needs grandiosity and attention seeking, and antagonistic traits such as manipulativeness, deceitfulness and callousness are added as specifiers for “malignant narcissism” (pp. 887–888). Attention seeking is part of the psychopathic specifier, not the antisocial B list (p. 885)." },
        { id: "ampd-pd-ts", how: "Antagonism and Disinhibition below 6 of 7 traits, or a mixed profile, is PD-TS in the model (p. 891)." },
        { id: "conduct-disorder", how: "Under 18 the set cannot be applied (p. 885); the Section II diagnosis for a younger person is conduct disorder (Ch 18 and Chapter 15; app guidance)." },
        { name: "Substance use disorders", how: "Criterion F: antisocial behavior solely attributable to a substance’s effects is excluded (p. 881); the Section II text discusses the same overlap (Ch 18; app guidance)." }
      ],
      pearls: [
        "**6 of 7** traits, not Section II’s 3 of 7 (p. 884; Ch 18, p. 748).",
        "Four Antagonism + three Disinhibition traits; **hostility** is labeled an aspect of **Antagonism** here, though Table 3 defines it under Negative Affectivity (pp. 884, 899).",
        "Psychopathic features = **low** anxiousness, **low** withdrawal, **high** attention seeking (p. 885).",
        "No conduct disorder criterion in the Section III set; age **at least 18** remains (p. 885).",
        "In the chart (app guidance): F60.2 only if the Section II criteria are met; the model’s level, traits and psychopathic specifier go in the formulation."
      ],
      cmp: { symptoms: "≥2 of 4 A areas + ≥6 of 7 traits (manipulativeness, callousness, deceitfulness, hostility, risk taking, impulsivity, irresponsibility)", exclusions: "Under 18; general criteria E–G (another disorder, substance or medical condition, developmental or cultural norm)", prevalence: "Not given in the chapter", course: "Onset traceable to adolescence or early adulthood; age ≥18 to diagnose" },
      clues: [["Core picture", "A 26-year-old man from Olongapo with repeated scams, threats to coworkers, unpaid debts and no remorse; calm and confident under questioning"], ["Key number", "6 of 7 traits; age ≥18"], ["Recording (app guidance)", "F60.2 if the Section II criteria are met; “with psychopathic features” in the formulation"]],
      updates: upd("Recording route checked November 2026", "**App guidance**: a presentation that matches this proposed set goes on the chart as **antisocial personality disorder, F60.2**, only if the **Section II** criteria are met, including conduct disorder before age 15 (Ch 18, p. 748). Record the LPFS level, the trait profile and “with psychopathic features” in the formulation. ICD-10-CM title of F60.2: “Antisocial personality disorder”." + ALT + CONFIRM)
    },
    {
      id: "ampd-avoidant", ch: "ch26", sec: "s26-avoidant", pages: "883, 885–886", critPages: "885–886",
      name: "Avoidant personality disorder (alternative model)", code: CODE3,
      codes: [["F60.6", "Avoidant personality disorder (Section II, Ch 18), when its own criteria are met", REC]],
      aka: ["AMPD avoidant PD", "Section III avoidant personality disorder", "anxious (avoidant) personality (ICD-10 wording, outside the DSM)"],
      essence: "A **proposed** Section III set (p. 881): moderate or greater impairment in **2 or more of 4** areas (low self-esteem with a self-view as inept, unappealing or inferior and much shame; standards that block goals, risks and new social activities; preoccupation with criticism and rejection, reading others as negative; holding back unless sure of being liked) plus **3 or more of 4** traits, **anxiousness required**, with withdrawal, anhedonia and intimacy avoidance (Negative Affectivity and Detachment) (pp. 885–886).",
      duration: "Relatively stable, onset traceable to at least adolescence or early adulthood (general Criterion D, p. 881)",
      functioning: "Moderate or greater impairment in 2 or more of identity, self-direction, empathy and intimacy (Criterion A, p. 885); level can also be specified (p. 886)",
      mood: "Anxiousness is mandatory; anhedonia is one of the four traits; other Negative Affectivity traits such as depressivity can be specified (pp. 885–886)",
      criteria: [
        ["A", "Moderate or greater impairment, with typical difficulties in at least 2 of: (1) identity: poor self-esteem tied to seeing oneself as socially inept, unattractive or inferior, with heavy shame; (2) self-direction: unrealistic standards that make the person reluctant to pursue goals, take risks or try new activities that involve other people; (3) empathy: preoccupied with and sensitive to criticism or rejection, assuming others see one negatively; (4) intimacy: unwilling to get involved unless certain of being liked, and less give-and-take in close relationships for fear of shame or ridicule."],
        ["B", "At least 3 of these 4 traits, one of which must be anxiousness: (1) **anxiousness** (Negative Affectivity): strong nervousness, tension or panic, often around social situations, worry over past and future, fear of uncertainty and of embarrassment (**required**); (2) **withdrawal** (Detachment): reserved in company, avoids social contact and rarely starts it; (3) **anhedonia** (Detachment): little enjoyment, interest or energy for life; (4) **intimacy avoidance** (Detachment): steers clear of close, romantic or sexual relationships."],
        ["C–G", "The general criteria C through G also apply (p. 884)."]
      ],
      specifiers: [
        "Additional traits: the text notes considerable heterogeneity; other Negative Affectivity traits (depressivity, separation insecurity, submissiveness, suspiciousness, hostility) can be specified when appropriate (p. 886)",
        "Level of personality functioning can also be specified (p. 886)"
      ],
      epi: NOEPI,
      risk: ["Not given in the chapter.", "Fears of embarrassment are part of the anxiousness definition in this set (p. 885); in the borderline set the same facet is framed around fears of falling apart or losing control (p. 886)."],
      differential: [
        { id: "avoidant-pd", how: "Section II needs 4 of 7 criteria beginning by early adulthood (Ch 18, p. 763); the Section III set needs 2 of 4 A areas plus 3 of 4 traits with anxiousness. The Section II set decides the code (app guidance)." },
        { id: "ampd-schizotypal", how: "Shares withdrawal (and restricted affect is in schizotypal, not avoidant); schizotypal adds Psychoticism and suspiciousness, while the avoidant person wants contact but fears shame (pp. 885–889; app comparison)." },
        { id: "ampd-ocpd", how: "Shares intimacy avoidance; OCPD needs rigid perfectionism, avoidant needs anxiousness (pp. 885–888)." },
        { id: "ampd-borderline", how: "Shares anxiousness; borderline adds lability, separation insecurity and at least one of impulsivity, risk taking or hostility (pp. 886–887)." },
        { id: "ampd-pd-ts", how: "Three Detachment traits without anxiousness do not meet the set; the profile is PD-TS in the model (pp. 885, 891)." },
        { id: "social-anxiety", how: "Not discussed in this chapter. Section II notes considerable overlap with social anxiety disorder, and both can be diagnosed (Ch 18; app guidance)." },
        { id: "dependent-pd", how: "Represented in the model by PD-TS (p. 891); submissiveness and separation insecurity, not anxiousness with withdrawal, are the app’s dependent-like profile (app guidance)." }
      ],
      pearls: [
        "**3 of 4** traits and **anxiousness is mandatory** (p. 885).",
        "Domains: **Negative Affectivity** (anxiousness) + **Detachment** (withdrawal, anhedonia, intimacy avoidance) (pp. 885–886).",
        "Specifiers can record depressivity, separation insecurity, submissiveness, suspiciousness or hostility (p. 886).",
        "In the chart (app guidance): F60.6 if the Section II criteria are met."
      ],
      cmp: { symptoms: "≥2 of 4 A areas + ≥3 of 4 traits incl. anxiousness (withdrawal, anhedonia, intimacy avoidance)", exclusions: "No anxiousness = not met; general criteria E–G", prevalence: "Not given in the chapter", course: "Onset traceable to adolescence or early adulthood" },
      clues: [["Core picture", "A 29-year-old laboratory aide in Balanga who turns down promotions that involve meetings, sure she will be laughed at, and avoids dating unless certain of acceptance"], ["Gate", "Anxiousness required; 3 of 4"], ["Recording (app guidance)", "F60.6 if the Section II criteria are met"]],
      updates: upd("Recording route checked November 2026", "**App guidance**: a presentation that matches this proposed set goes on the chart as **avoidant personality disorder, F60.6**, if the **Section II** criteria are met (Ch 18, p. 763); otherwise other specified (F60.89) or unspecified (F60.9) personality disorder. ICD-10-CM title of F60.6: “Avoidant personality disorder”." + ALT + CONFIRM)
    },
    {
      id: "ampd-borderline", ch: "ch26", sec: "s26-borderline", pages: "883, 886–887", critPages: "886–887",
      name: "Borderline personality disorder (alternative model)", code: CODE3,
      codes: [["F60.3", "Borderline personality disorder (Section II, Ch 18), when its own criteria are met", REC]],
      aka: ["AMPD borderline PD", "Section III borderline personality disorder", "emotionally unstable personality disorder, borderline type (ICD-10, outside the DSM)"],
      essence: "A **proposed** Section III set (p. 881): moderate or greater impairment in **2 or more of 4** areas (poor or unstable self-image with self-criticism, emptiness and stress-related dissociation; shifting goals and values; hypersensitivity with a negative bias about others; intense, unstable, mistrustful relationships with abandonment fears, idealization and devaluation) plus **4 or more of 7** traits, **at least one of impulsivity, risk taking or hostility**. Domains: **Negative Affectivity** plus **Antagonism and/or Disinhibition** (pp. 886–887).",
      duration: "Relatively stable, onset traceable to at least adolescence or early adulthood (general Criterion D, p. 881)",
      functioning: "Moderate or greater impairment in 2 or more of identity, self-direction, empathy and intimacy (Criterion A, p. 886); level can also be specified (p. 887)",
      mood: "Emotional lability, anxiousness, separation insecurity and depressivity are four of the seven traits; depressivity includes pervasive shame, low self-worth, and thoughts of suicide and suicidal behavior (pp. 886–887). A depressivity trait differs from a depressive episode (p. 893)",
      criteria: [
        ["A", "Moderate or greater impairment, with typical difficulties in at least 2 of: (1) identity: a markedly thin, underdeveloped or shifting self-image, often with harsh self-criticism, chronic emptiness and dissociation under stress; (2) self-direction: unstable goals, aspirations, values or career plans; (3) empathy: reduced ability to recognize others’ feelings and needs, with ready feelings of being slighted and a view of others tilted toward their faults; (4) intimacy: intense, stormy close relationships with mistrust, neediness and anxious preoccupation with real or imagined abandonment, swinging between idealization and devaluation and between overinvolvement and withdrawal."],
        ["B", "At least 4 of these 7 traits, including at least one of (5), (6) or (7): (1) **emotional lability** (Negative Affectivity): quickly roused, intense or disproportionate, shifting emotions; (2) **anxiousness** (Negative Affectivity): nervousness or panic, often after interpersonal stress, worry, fear of uncertainty and of falling apart or losing control; (3) **separation insecurity** (Negative Affectivity): fear of rejection or separation, alongside fear of excessive dependency and losing all autonomy; (4) **depressivity** (Negative Affectivity): often down or hopeless, slow to recover, pessimistic, pervasive shame and low self-worth, thoughts of suicide and suicidal behavior; (5) **impulsivity** (Disinhibition): acting on the moment without a plan, a sense of urgency, self-harming behavior under emotional distress; (6) **risk taking** (Disinhibition): needless, dangerous, potentially self-damaging activity, denying one’s limits; (7) **hostility** (Antagonism): frequent anger and irritability at small slights."],
        ["C–G", "The general criteria C through G also apply (p. 884)."]
      ],
      specifiers: [
        "Additional traits, for example Psychoticism traits such as cognitive and perceptual dysregulation, can be specified when appropriate (p. 887)",
        "Level of personality functioning can also be specified (p. 887)"
      ],
      epi: NOEPI,
      risk: [
        "Not given in the chapter.",
        "Safety (app guidance): the depressivity and impulsivity facets name thoughts of suicide, suicidal behavior and self-harming behavior under emotional distress (p. 887); ask about them directly at each contact.",
        "Outside the DSM: the APA 2024 borderline guideline recommends a structured psychotherapy and found no evidence that any medicine treats the core features (research file; see the guide’s treatment section)."
      ],
      differential: [
        { id: "borderline-pd", how: "Section II needs 5 of 9 criteria (Ch 18, p. 752); the Section III set needs 2 of 4 A areas plus 4 of 7 traits with one of impulsivity, risk taking or hostility. A person can meet one and not the other; the Section II set decides the code (app guidance)." },
        { id: "ampd-antisocial", how: "Shares hostility, impulsivity and risk taking; antisocial adds manipulativeness, callousness, deceitfulness and irresponsibility and needs 6 of 7 (pp. 884–887)." },
        { id: "ampd-avoidant", how: "Shares anxiousness; avoidant has Detachment traits and fear of shame rather than lability and abandonment fears (pp. 885–887)." },
        { id: "ampd-schizotypal", how: "Psychoticism traits such as cognitive and perceptual dysregulation can be added to borderline as specifiers; schizotypal needs 4 of 6 Psychoticism and Detachment traits (pp. 887, 889)." },
        { id: "mdd", how: "Can be diagnosed together (p. 883); depressive episode symptoms such as poor concentration wax and wane, while the depressivity trait raises the chance of episodes (p. 893)." },
        { id: "ampd-pd-ts", how: "Four Negative Affectivity traits with none of impulsivity, risk taking or hostility do not meet the set; the model calls the profile PD-TS (pp. 886, 891)." }
      ],
      pearls: [
        "**4 of 7**, and at least **one of impulsivity, risk taking, hostility** (p. 886).",
        "Not Section II’s **5 of 9** (Ch 18, p. 752).",
        "**Hostility** is labeled Antagonism in this set; Table 3 defines it under Negative Affectivity with a “see also” (pp. 887, 899).",
        "Psychoticism traits are **specifiers**, not criteria (p. 887).",
        "In the chart (app guidance): F60.3 if the Section II criteria are met."
      ],
      cmp: { symptoms: "≥2 of 4 A areas + ≥4 of 7 traits (lability, anxiousness, separation insecurity, depressivity, impulsivity, risk taking, hostility) with ≥1 of the last three", exclusions: "Only Negative Affectivity traits = not met; general criteria E–G", prevalence: "Not given in the chapter", course: "Onset traceable to adolescence or early adulthood" },
      clues: [["Core picture", "A 22-year-old call-center agent in Manila with shifting career plans, emptiness, panic when her partner is late, fast mood swings and self-harming behavior after fights"], ["Gate", "4 of 7, ≥1 of impulsivity, risk taking, hostility"], ["Recording (app guidance)", "F60.3 if the Section II criteria are met"]],
      updates: upd("Recording route checked November 2026", "**App guidance**: a presentation that matches this proposed set goes on the chart as **borderline personality disorder, F60.3**, if the **Section II** criteria (5 of 9) are met (Ch 18, p. 752); otherwise F60.89 with the reason stated, or F60.9. ICD-10-CM title of F60.3: “Borderline personality disorder”." + ALT + CONFIRM)
    },
    {
      id: "ampd-narcissistic", ch: "ch26", sec: "s26-narcissistic", pages: "883, 887–888", critPages: "887–888",
      name: "Narcissistic personality disorder (alternative model)", code: CODE3,
      codes: [["F60.81", "Narcissistic personality disorder (Section II, Ch 18), when its own criteria are met", REC]],
      aka: ["AMPD narcissistic PD", "Section III narcissistic personality disorder", "malignant narcissism (specifier wording)", "vulnerable narcissism (specifier wording)"],
      essence: "A **proposed** Section III set (p. 881): moderate or greater impairment in **2 or more of 4** areas (self-esteem regulated by others, self-appraisal inflated, deflated or swinging; goals set by approval, standards too high or entitlement-low; attention to others only when it concerns the self; superficial relationships that serve self-esteem) plus **both** Antagonism traits, **grandiosity** and **attention seeking** (pp. 887–888).",
      duration: "Relatively stable, onset traceable to at least adolescence or early adulthood (general Criterion D, p. 881)",
      functioning: "Moderate or greater impairment in 2 or more of identity, self-direction, empathy and intimacy (Criterion A, p. 887); level can also be specified (p. 888)",
      mood: "Mood regulation tracks fluctuating self-esteem (Criterion A1, p. 887); depressivity or anxiousness can be specified for more “vulnerable” presentations (p. 888)",
      criteria: [
        ["A", "Moderate or greater impairment, with typical difficulties in at least 2 of: (1) identity: leaning heavily on others to define the self and steady self-esteem, with an exaggerated self-appraisal that is inflated, deflated or alternating, and emotions that rise and fall with self-esteem; (2) self-direction: goals aimed at others’ approval, standards set unreasonably high to feel exceptional or too low out of entitlement, often unaware of one’s motives; (3) empathy: poor recognition of or identification with others’ feelings and needs, keenly attuned to others’ reactions only when they bear on the self, misjudging one’s effect on others; (4) intimacy: mostly shallow relationships that exist to regulate self-esteem, with little real interest in others and a strong need for personal gain."],
        ["B", "Both traits: (1) **grandiosity** (Antagonism): open or hidden entitlement, self-centredness, a fixed belief in being better than others, condescension; (2) **attention seeking** (Antagonism): excessive efforts to be noticed and admired."],
        ["C–G", "The general criteria C through G also apply (p. 884)."]
      ],
      specifiers: [
        "Other Antagonism traits (manipulativeness, deceitfulness, callousness) can be specified when more pervasive antagonistic features, the text’s example being “malignant narcissism”, are present (p. 888)",
        "Negative Affectivity traits (depressivity, anxiousness) can be specified to record more “vulnerable” presentations (p. 888)",
        "Level of personality functioning can also be specified (p. 888)"
      ],
      epi: NOEPI,
      risk: ["Not given in the chapter.", "The model’s diagnostic text uses narcissistic PD as its example of noting extra clinically relevant traits as specifiers (p. 891)."],
      differential: [
        { id: "narcissistic-pd", how: "Section II needs 5 of 9 criteria (Ch 18, p. 760); the Section III set needs 2 of 4 A areas plus both grandiosity and attention seeking. The Section II set decides the code (app guidance)." },
        { id: "ampd-antisocial", how: "Both Antagonism; antisocial needs 6 of 7 Antagonism and Disinhibition traits. Manipulativeness, deceitfulness and callousness are specifiers here, criteria there (pp. 884, 888)." },
        { id: "histrionic-pd", how: "Represented in the model by PD-TS (p. 891); attention seeking without grandiosity does not meet this set (app guidance)." },
        { id: "ampd-pd-ts", how: "Grandiosity without attention seeking (or the reverse) fails Criterion B; with moderate impairment the model calls it PD-TS (pp. 887, 891)." }
      ],
      pearls: [
        "Only **2** traits, and **both** are needed: grandiosity and attention seeking (p. 887).",
        "A “vulnerable” presentation still needs both; depressivity or anxiousness is **added** as a specifier (p. 888).",
        "“Malignant narcissism” = specify manipulativeness, deceitfulness, callousness (p. 888).",
        "Self-appraisal can be **inflated, deflated or vacillating** (p. 887).",
        "In the chart (app guidance): F60.81 if the Section II criteria are met."
      ],
      cmp: { symptoms: "≥2 of 4 A areas + both grandiosity and attention seeking", exclusions: "Either trait missing = not met; general criteria E–G", prevalence: "Not given in the chapter", course: "Onset traceable to adolescence or early adulthood" },
      clues: [["Core picture", "A 34-year-old engineer in Subic who must be the center of every meeting, belittles colleagues, and becomes ashamed and low when passed over"], ["Gate", "Both of 2 traits"], ["Recording (app guidance)", "F60.81 if the Section II criteria are met; “vulnerable” traits in the formulation"]],
      updates: upd("Recording route checked November 2026", "**App guidance**: a presentation that matches this proposed set goes on the chart as **narcissistic personality disorder, F60.81**, if the **Section II** criteria (5 of 9) are met (Ch 18, p. 760). F60.81 was new in FY2016 and shows no change through the 2027 edition (icd10data annual history). ICD-10-CM title of F60.81: “Narcissistic personality disorder”." + ALT + CONFIRM)
    },
    {
      id: "ampd-ocpd", ch: "ch26", sec: "s26-ocpd", pages: "884, 888–889", critPages: "888",
      name: "Obsessive-compulsive personality disorder (alternative model)", code: CODE3,
      codes: [["F60.5", "Obsessive-compulsive personality disorder (Section II, Ch 18), when its own criteria are met", REC]],
      aka: ["AMPD OCPD", "Section III obsessive-compulsive personality disorder", "anankastic personality (ICD-10 wording, outside the DSM)"],
      essence: "A **proposed** Section III set (p. 881): moderate or greater impairment in **2 or more of 4** areas (self defined by work and productivity, constricted emotion; tasks left unfinished because of rigid, unreasonably high standards; difficulty appreciating others’ views and feelings; relationships placed after work, harmed by stubbornness) plus **3 or more of 4** traits, **rigid perfectionism required**, with perseveration, intimacy avoidance and restricted affectivity. Domains: Negative Affectivity and/or Detachment, with rigid perfectionism at the extreme Conscientiousness pole (p. 888).",
      duration: "Relatively stable, onset traceable to at least adolescence or early adulthood (general Criterion D, p. 881)",
      functioning: "Moderate or greater impairment in 2 or more of identity, self-direction, empathy and intimacy (Criterion A, p. 888); level can also be specified (p. 889)",
      mood: "Restricted affectivity is one of the four traits; anxiousness can be specified (pp. 888–889)",
      criteria: [
        ["A", "Moderate or greater impairment, with typical difficulties in at least 2 of: (1) identity: a sense of self drawn mainly from work or output, with strong emotions narrowed in both feeling and expression; (2) self-direction: trouble finishing tasks and reaching goals because inner standards are rigid, unreasonably high and unbending, with an overconscientious, moralistic stance; (3) empathy: trouble understanding and valuing others’ ideas, feelings or behavior; (4) intimacy: relationships ranked below work and productivity, and damaged by rigidity and stubbornness."],
        ["B", "At least 3 of these 4 traits, one of which must be rigid perfectionism: (1) **rigid perfectionism** (extreme Conscientiousness, the opposite pole of Disinhibition): insisting that everything, one’s own work and others’, be flawless, sacrificing deadlines for exactness, one right way only, difficulty changing views, preoccupation with detail and order (**required**); (2) **perseveration** (Negative Affectivity): keeping at a task long after it stopped working, repeating the same behavior despite failure; (3) **intimacy avoidance** (Detachment): avoiding close, romantic or sexual ties; (4) **restricted affectivity** (Detachment): little emotional reaction, narrowed feeling and expression, coolness."],
        ["C–G", "The general criteria C through G also apply (p. 884)."]
      ],
      specifiers: [
        "Additional traits, for example anxiousness, can be specified when appropriate (p. 889)",
        "Level of personality functioning can also be specified (p. 889)"
      ],
      epi: NOEPI,
      risk: ["Not given in the chapter.", "Outside the DSM: ICD-11’s anankastia qualifier captured obsessive-compulsive features better than the AMPD domains in one outpatient study (Bach et al. 2018; research file)."],
      differential: [
        { id: "ocpd", how: "Section II needs 4 of 8 criteria (Ch 18, p. 771); the Section III set needs 2 of 4 A areas plus 3 of 4 traits with rigid perfectionism. The Section II set decides the code (app guidance)." },
        { id: "ampd-avoidant", how: "Shares intimacy avoidance; avoidant needs anxiousness, OCPD needs rigid perfectionism (pp. 885–888)." },
        { id: "ampd-schizotypal", how: "Shares restricted affectivity; schizotypal adds Psychoticism traits, suspiciousness and withdrawal (pp. 888–889)." },
        { id: "ocd", how: "Not discussed in this chapter. Obsessions and compulsions point to OCD, which Section II separates from OCPD and allows with it (Ch 18; app guidance)." },
        { id: "ampd-pd-ts", how: "Perseveration, intimacy avoidance and restricted affectivity without rigid perfectionism do not meet the set; the model calls the profile PD-TS (pp. 888, 891)." }
      ],
      pearls: [
        "**3 of 4**, with **rigid perfectionism** mandatory (p. 888).",
        "Rigid perfectionism sits at the **Conscientiousness** pole, the opposite of Disinhibition; Table 3 lists it under Disinhibition as “(lack of)” (pp. 888, 900).",
        "**Perseveration** is a Negative Affectivity facet (pp. 888, 899).",
        "In the chart (app guidance): F60.5 if the Section II criteria are met."
      ],
      cmp: { symptoms: "≥2 of 4 A areas + ≥3 of 4 traits incl. rigid perfectionism (perseveration, intimacy avoidance, restricted affectivity)", exclusions: "No rigid perfectionism = not met; general criteria E–G", prevalence: "Not given in the chapter", course: "Onset traceable to adolescence or early adulthood" },
      clues: [["Core picture", "A 41-year-old accountant in Mariveles who misses deadlines redoing perfect reports, works weekends, and has no close friends"], ["Gate", "Rigid perfectionism required; 3 of 4"], ["Recording (app guidance)", "F60.5 if the Section II criteria are met"]],
      updates: upd("Recording route checked November 2026", "**App guidance**: a presentation that matches this proposed set goes on the chart as **obsessive-compulsive personality disorder, F60.5**, if the **Section II** criteria (4 of 8) are met (Ch 18, p. 771). ICD-10-CM title of F60.5: “Obsessive-compulsive personality disorder”." + ALT + CONFIRM)
    },
    {
      id: "ampd-schizotypal", ch: "ch26", sec: "s26-schizotypal", pages: "884, 889–890", critPages: "889",
      name: "Schizotypal personality disorder (alternative model)", code: CODE3,
      codes: [["F21", "Schizotypal personality disorder (Section II; criteria in Ch 2 and listed in Ch 18), when its own criteria are met", REC]],
      aka: ["AMPD schizotypal PD", "Section III schizotypal personality disorder", "schizotypal disorder (ICD-10-CM title, outside the DSM)"],
      essence: "A **proposed** Section III set (p. 881): moderate or greater impairment in **2 or more of 4** areas (blurred self–other boundaries and a distorted self-concept with incongruent emotion; unrealistic or incoherent goals without clear standards; misreading others and one’s own impact; marked trouble forming close relationships through mistrust and anxiety) plus **4 or more of 6** traits from **Psychoticism** (cognitive and perceptual dysregulation, unusual beliefs and experiences, eccentricity) and **Detachment** (restricted affectivity, withdrawal, suspiciousness) (p. 889).",
      duration: "Relatively stable, onset traceable to at least adolescence or early adulthood (general Criterion D, p. 881)",
      functioning: "Moderate or greater impairment in 2 or more of identity, self-direction, empathy and intimacy (Criterion A, p. 889); level can also be specified (p. 890)",
      mood: "Restricted affectivity is one of the traits; Negative Affectivity traits such as depressivity and anxiousness can be specified (pp. 889–890)",
      criteria: [
        ["A", "Moderate or greater impairment, with typical difficulties in at least 2 of: (1) identity: unclear boundaries between self and others, a distorted self-concept, emotional expression often out of step with the setting or with inner experience; (2) self-direction: unrealistic or incoherent goals and no clear inner standards; (3) empathy: marked difficulty grasping how one’s behavior affects others, with frequent misreading of others’ motives and actions; (4) intimacy: marked trouble forming close relationships, tied to mistrust and anxiety."],
        ["B", "At least 4 of these 6 traits: (1) **cognitive and perceptual dysregulation** (Psychoticism): odd thinking; vague, circumstantial, metaphorical, overelaborate or stereotyped thought or speech; odd sensations; (2) **unusual beliefs and experiences** (Psychoticism): beliefs and experiences of reality that others find bizarre or idiosyncratic; (3) **eccentricity** (Psychoticism): odd behavior or appearance, saying odd or unfitting things; (4) **restricted affectivity** (Detachment): little emotional reaction, coolness; (5) **withdrawal** (Detachment): prefers being alone, reserved, rarely starts contact; (6) **suspiciousness** (Detachment): expects and watches for ill intent, doubts loyalty, feels persecuted."],
        ["C–G", "The general criteria C through G also apply (p. 884)."]
      ],
      specifiers: [
        "Additional traits, for example Negative Affectivity traits such as depressivity and anxiousness, can be specified when appropriate (pp. 889–890)",
        "Level of personality functioning can also be specified (p. 890)"
      ],
      epi: NOEPI,
      risk: ["Not given in the chapter.", "Outside the DSM: the AMPD’s Psychoticism domain captured schizotypal features better than ICD-11’s trait qualifiers in one outpatient study (Bach et al. 2018; research file)."],
      differential: [
        { id: "schizotypal-pd", how: "Section II needs 5 of 9 criteria and is coded F21 (Ch 2; Ch 18, p. 744); the Section III set needs 2 of 4 A areas plus 4 of 6 traits. The Section II set decides the code (app guidance)." },
        { id: "schizophrenia", how: "Criterion E: when the features occur only within schizophrenia, no personality disorder is diagnosed (p. 883)." },
        { id: "ampd-avoidant", how: "Shares withdrawal; avoidant needs anxiousness and wants acceptance, schizotypal adds Psychoticism (pp. 885, 889)." },
        { id: "ampd-ocpd", how: "Shares restricted affectivity; OCPD needs rigid perfectionism (pp. 888–889)." },
        { id: "paranoid-pd", how: "Represented in the model by PD-TS (p. 891); a suspicious profile without the Psychoticism traits does not reach 4 of 6 (app guidance)." },
        { id: "schizoid-pd", how: "Represented in the model by PD-TS (p. 891); withdrawal, restricted affectivity and intimacy avoidance without Psychoticism are the app’s schizoid-like profile (app guidance)." },
        { id: "ampd-pd-ts", how: "Three of 6 traits, or Psychoticism with other domains, is PD-TS in the model (p. 891)." }
      ],
      pearls: [
        "**4 of 6**: three Psychoticism + three Detachment traits (p. 889).",
        "**Suspiciousness** is labeled Detachment in this set and is cross-listed under Negative Affectivity in Table 3 (pp. 889, 899).",
        "Features only during schizophrenia: **no** personality disorder (p. 883).",
        "In the chart (app guidance): F21 if the Section II criteria are met."
      ],
      cmp: { symptoms: "≥2 of 4 A areas + ≥4 of 6 traits (cognitive and perceptual dysregulation, unusual beliefs and experiences, eccentricity, restricted affectivity, withdrawal, suspiciousness)", exclusions: "Features only during schizophrenia (E); general criteria F–G", prevalence: "Not given in the chapter", course: "Onset traceable to adolescence or early adulthood" },
      clues: [["Core picture", "A 30-year-old fisherman in Bataan, long solitary and odd in dress, who senses hidden messages in the weather, speaks in vague metaphors and distrusts neighbors; never psychotic"], ["Key number", "4 of 6"], ["Recording (app guidance)", "F21 if the Section II criteria are met"]],
      updates: upd("Recording route checked November 2026", "**App guidance**: a presentation that matches this proposed set goes on the chart as **schizotypal personality disorder, F21**, if the **Section II** criteria (5 of 9) are met (Ch 2; Ch 18, p. 744). ICD-10-CM title of F21: “Schizotypal disorder”." + ALT + CONFIRM)
    },
    {
      id: "ampd-pd-ts", ch: "ch26", sec: "s26-pdts", pages: "881, 890–891", critPages: "890",
      name: "Personality disorder—trait specified (alternative model)", code: CODE3,
      codes: [
        ["F60.0", "Paranoid personality disorder (Section II, Ch 18), when a paranoid-like profile meets the Section II criteria", REC],
        ["F60.1", "Schizoid personality disorder (Section II, Ch 18), when a schizoid-like profile meets the Section II criteria", REC],
        ["F60.4", "Histrionic personality disorder (Section II, Ch 18), when a histrionic-like profile meets the Section II criteria", REC],
        ["F60.7", "Dependent personality disorder (Section II, Ch 18), when a dependent-like profile meets the Section II criteria", REC],
        ["F60.89", "Other specified personality disorder (Ch 18), for mixed, atypical or subthreshold profiles, with the reason (the trait profile) stated", REC],
        ["F60.9", "Unspecified personality disorder (Ch 18), when the reason is not recorded", REC]
      ],
      aka: ["PD-TS", "personality disorder—trait specified", "trait-specified personality disorder"],
      essence: "The model’s diagnosis when a personality disorder is judged present but no specific set fits (p. 881): moderate or greater impairment in **2 or more of 4** areas plus **one or more** pathological trait **domains or facets**, considering **all five** domains (p. 890). It covers **subthreshold**, **mixed** and **atypical** presentations, and it is how the model represents **paranoid, schizoid, histrionic and dependent** personality disorders (p. 891). There are **no subtypes**: the recorded traits **are** the specifiers (p. 890).",
      duration: "Relatively stable, onset traceable to at least adolescence or early adulthood (general Criterion D, p. 881)",
      functioning: "Moderate or greater impairment in 2 or more of identity, self-direction, empathy and intimacy (Criterion A, p. 890); the LPFS level specifies severity (p. 891)",
      mood: "Negative Affectivity covers frequent, intense negative emotions of many kinds and their behavioral and interpersonal expressions (p. 890)",
      criteria: [
        ["A", "Moderate or greater impairment in at least 2 of the four areas: identity, self-direction, empathy, intimacy."],
        ["B", "One or more pathological trait domains, or particular facets inside them, judged after reviewing all five domains: (1) **Negative Affectivity** (vs Emotional Stability): frequent, strong negative emotions of many kinds with behavioral and interpersonal spill-over; (2) **Detachment** (vs Extraversion): avoiding social and emotional experience, from casual contact to intimacy, with narrowed affect and little capacity for pleasure; (3) **Antagonism** (vs Agreeableness): conduct that sets the person against others, from inflated self-importance and expected special treatment to callous disregard and using others; (4) **Disinhibition** (vs Conscientiousness): seeking immediate gratification and acting on present thoughts, feelings and stimuli without regard to past lessons or future results; (5) **Psychoticism** (vs Lucidity): a broad range of culturally incongruent odd or unusual behavior and thinking, in process (perception, dissociation) and content (beliefs)."],
        ["Subtypes", "None: the dimensional trait model can represent every expression, so the clinician tailors a profile across all five domains (p. 890)."],
        ["C–G", "The general criteria C through G also apply (p. 884)."]
      ],
      specifiers: [
        "The trait features recorded for Criterion B are themselves the specifiers; the manual contrasts two people with emotional lability, hostility and depressivity, only one of whom is also callous (p. 890)",
        "Level of personality functioning (LPFS, Table 2) specifies the impairment (p. 891)"
      ],
      epi: [
        ["Prevalence in this chapter", "Not given (pp. 881–901)"],
        ["What PD-TS covers", "Subthreshold presentations (too few A or B criteria), mixed presentations and atypical ones (p. 891)"],
        ["Section II types it represents", "Paranoid, schizoid, histrionic and dependent: moderate or greater impairment plus the relevant trait combination (p. 891)"]
      ],
      risk: ["Not given in the chapter.", "Section II’s shortcoming that motivated the model: other specified or unspecified personality disorder is often correct but mostly uninformative (p. 881); PD-TS is specified by level and traits instead."],
      differential: [
        { id: "other-specified-pd", how: "The Section II home for a mixed or atypical profile: F60.89 with the reason stated, and the trait list is a good reason (Ch 18; app guidance)." },
        { id: "unspecified-pd", how: "F60.9 when the clinician does not record a reason; uninformative by design (Ch 18; p. 881)." },
        { id: "paranoid-pd", how: "Represented by PD-TS (p. 891); the app’s paranoid-like profile centres on suspiciousness and hostility (app guidance). Code F60.0 only if the Section II criteria are met (Ch 18)." },
        { id: "schizoid-pd", how: "Represented by PD-TS (p. 891); the app’s schizoid-like profile is Detachment: withdrawal, intimacy avoidance, anhedonia, restricted affectivity (app guidance). Code F60.1 only if the Section II criteria are met." },
        { id: "histrionic-pd", how: "Represented by PD-TS (p. 891); the app’s histrionic-like profile includes attention seeking and emotional lability (app guidance). Code F60.4 only if the Section II criteria are met." },
        { id: "dependent-pd", how: "Represented by PD-TS (p. 891); the app’s dependent-like profile includes submissiveness, separation insecurity and anxiousness (app guidance). Code F60.7 only if the Section II criteria are met." },
        { id: "ampd-borderline", how: "A pattern matching one of the six sets takes that diagnosis; PD-TS is for a profile substantially different from all six (p. 891)." },
        { id: "trait-model", how: "Table 3 supplies the domains and facets that specify PD-TS (pp. 890–891)." }
      ],
      pearls: [
        "B considers **all five** domains; **one** domain or facet is enough (p. 890).",
        "**No subtypes**; the traits **are** the specifiers (p. 890).",
        "Paranoid, schizoid, histrionic, dependent → **PD-TS** in the model (p. 891).",
        "Covers **subthreshold, mixed, atypical** (p. 891).",
        "Submissiveness (and distractibility) belong to no specific set’s B list (app count of pp. 884–889), so a submissive profile is always PD-TS."
      ],
      cmp: { symptoms: "≥2 of 4 A areas + ≥1 trait domain or facet, reviewing all five domains", exclusions: "A pattern that matches one of the six sets takes that diagnosis; general criteria E–G", prevalence: "Not given in the chapter", course: "Onset traceable to adolescence or early adulthood" },
      clues: [["Core picture", "A 27-year-old in Balanga who cannot decide anything without her mother, agrees to avoid conflict and panics at the thought of living alone; Level 2"], ["Profile", "Submissiveness, separation insecurity, anxiousness (Negative Affectivity)"], ["Recording (app guidance)", "F60.7 if the Section II dependent criteria are met; else F60.89 with the profile named"]],
      updates: upd("Recording route checked November 2026", "**App guidance**: PD-TS has no code. If the profile meets a **Section II** type, chart that type: **paranoid F60.0, schizoid F60.1, histrionic F60.4, dependent F60.7** (or another Section II type that is met). If no Section II type is met, use **other specified personality disorder, F60.89**, naming the level and traits as the reason, or **unspecified personality disorder, F60.9**. ICD-10-CM titles: F60.0 “Paranoid personality disorder”, F60.1 “Schizoid personality disorder”, F60.4 “Histrionic personality disorder”, F60.7 “Dependent personality disorder”, F60.89 “Other specific personality disorders”, F60.9 “Personality disorder, unspecified”." + ALT + CONFIRM)
    },
    {
      id: "lpfs", ch: "ch26", sec: "s26-lpfs", pages: "882–883, 891–892, 895–898", critPages: "882, 895–898",
      name: "Level of Personality Functioning Scale (LPFS)", code: CODEM,
      codes: [["—", "An assessment scale, not a diagnosis: the level goes in the formulation; the diagnosis line holds the Section II personality disorder that is met (app guidance)", "App guidance"]],
      aka: ["LPFS", "Criterion A scale", "Table 2", "level of personality functioning", "self and interpersonal functioning scale"],
      essence: "The scale for **Criterion A** (Table 2, pp. 895–898): the clinician rates **identity, self-direction, empathy and intimacy** and picks the **one level that best captures current overall impairment**, from **Level 0** (little or no impairment) through **1** (some), **2** (moderate), **3** (severe) to **4** (extreme) (pp. 882, 892). **Level 2 or worse** is needed for any personality disorder in the model; the level can also grade severity of any personality disorder at a point in time, and can serve as a **global indicator** without a diagnosis or when impairment is subthreshold (p. 892).",
      duration: "Not applicable; the rating is of current overall impairment (p. 892)",
      functioning: "It is the functioning measure: self = identity and self-direction; interpersonal = empathy and intimacy (pp. 882–883)",
      mood: "Identity includes the capacity to experience and regulate a range of emotions (Table 1, p. 883); severe levels involve negative, dysregulated emotion (p. 891)",
      criteria: [
        ["Type", "A clinician-rated dimensional scale, Table 2 of the chapter; not a diagnosis (pp. 882, 892)."],
        ["Four elements", "Identity and self-direction (self); empathy and intimacy (interpersonal) (Table 1, p. 883)."],
        ["Five levels", "0 little or no, 1 some, 2 moderate, 3 severe, 4 extreme impairment (p. 882)."],
        ["Level 0 (app synopsis)", "A distinct self with clear boundaries and steady, realistic self-esteem; reasonable goals and standards; accurate understanding of others; several lasting, mutual relationships (p. 895; condensed in the app’s words)."],
        ["Level 1 (app synopsis)", "Boundaries blur under strong emotion; self-esteem dips; goals may be overly driven, inhibited or conflicted; some difficulty accepting other perspectives; closeness possible but held back (p. 895; condensed)."],
        ["Level 2 (app synopsis)", "Identity and self-esteem lean on others and on outside evaluation; goals serve outside approval; attention to others mainly when relevant to the self; relationships fairly superficial or used for personal gain (p. 896; condensed). The diagnostic threshold."],
        ["Level 3 (app synopsis)", "Weak sense of autonomy and emptiness; boundaries poor or rigid; fragile self-esteem; standards unclear and life experienced as empty or threatening; little ability to see other viewpoints; relationships rest on desperate need or expected abandonment or mistreatment (p. 897; condensed)."],
        ["Level 4 (app synopsis)", "Sense of self barely present or organized around persecution; boundaries confused; goals incoherent and no inner standards; others matter only as sources of need or harm; relationships seen only as comfort or pain, not mutual (p. 898; condensed)."],
        ["How to rate", "Choose the single level that best fits current overall impairment; necessary for a diagnosis in the model (moderate or worse); can specify severity for any personality disorder; may be used as a global indicator without a diagnosis (p. 892)."],
        ["Why moderate", "The threshold was chosen on empirical grounds as the level that lets clinicians identify personality disorder pathology most accurately and efficiently (p. 882)."],
        ["What it predicts", "Impairment predicts having a personality disorder; its severity predicts more than one disorder or a typically more severe one (p. 882). Generalized severity may be the most important single predictor of dysfunction, both now and later (p. 891)."]
      ],
      specifiers: [],
      epi: [
        ["Numbers to know", "4 elements; 5 levels (0–4); threshold Level 2 (pp. 882, 892)"],
        ["Related instruments (outside the DSM)", "LPFS-SR, an 80-item self-report rated on a 4-point scale (Morey 2017); LPFS-BF 2.0, a brief self-report with self and interpersonal factors (Weekers et al. 2019); SCID-5-AMPD Module I, a clinician interview for the LPFS (APA Publishing 2018). Described only; never reprinted (research file)"]
      ],
      risk: [
        "Not applicable as risk factors. Functioning and traits each contribute on their own to decisions about disability, risks of self-harm, violence and criminality, the type and intensity of treatment, and prognosis (p. 894).",
        "Self and interpersonal representations affect how the person engages with clinicians and how treatment works (p. 892)."
      ],
      differential: [
        { id: "level1-adult", how: "The Level 1 cross-cutting measure has a two-item personality functioning domain with no Level 2 follow-up form (Ch 23, p. 844); a flagged score is a reason for the clinician’s own inquiry, for which the LPFS gives the structure (app guidance)." },
        { id: "whodas", how: "WHODAS 2.0 rates general disability over the past 30 days (Ch 23); the LPFS rates self and interpersonal functioning specific to personality (app comparison)." },
        { id: "trait-model", how: "The other half of the model: Criterion B traits are rated separately from the Criterion A level, and each adds value on its own (pp. 882, 894)." },
        { id: "ampd-general", how: "LPFS Level 2 or worse is general Criterion A (pp. 881–882)." },
        { id: "ampd-pd-ts", how: "The LPFS level is one of the two descriptors that specify PD-TS (p. 891)." }
      ],
      pearls: [
        "**Five levels, 0–4**; **Level 2 (moderate)** is the threshold (p. 882).",
        "Rate **current overall** impairment, one level (p. 892).",
        "Usable **without** a personality disorder diagnosis, as a global indicator (p. 892).",
        "Generalized severity **may be** the most important single predictor of dysfunction (p. 891).",
        "Never on the diagnosis line (app guidance)."
      ],
      cmp: { symptoms: "Clinician picks one level, 0–4, from identity, self-direction, empathy and intimacy", exclusions: "Not a diagnosis; Level 0–1 does not meet Criterion A", prevalence: "Not applicable", course: "Rates current overall impairment; functioning impairments are more stable than symptoms (p. 882)" },
      clues: [["Five levels", "0 little or none, 1 some, 2 moderate, 3 severe, 4 extreme"], ["Threshold", "Level 2 or worse"], ["Recording (app guidance)", "In the formulation: “Personality functioning Level N”"]],
      updates: measureUpd("Level of Personality Functioning Scale", "Outside the DSM: the LPFS-SR (80 items) and LPFS-BF 2.0 belong to their authors, and the SCID-5-AMPD is an APA Publishing product; use the originals (research file of November 2, 2026).")
    },
    {
      id: "trait-model", ch: "ch26", sec: "s26-domains", pages: "882, 890, 892–894, 899–901", critPages: "899–901",
      name: "Personality trait model (five domains, 25 facets)", code: CODEM,
      codes: [["—", "A trait taxonomy, not a diagnosis: the trait profile goes in the formulation; the diagnosis line holds the Section II personality disorder that is met (app guidance)", "App guidance"]],
      aka: ["Criterion B", "Table 3", "trait taxonomy", "five domains", "25 facets", "PID-5 (Personality Inventory for DSM-5)", "maladaptive Big Five"],
      essence: "The taxonomy for **Criterion B** (Table 3, pp. 899–901): **five domains**, each with an adaptive opposite pole, **Negative Affectivity** (vs Emotional Stability), **Detachment** (vs Extraversion), **Antagonism** (vs Agreeableness), **Disinhibition** (vs Conscientiousness), **Psychoticism** (vs Lucidity), containing **25 facets** (p. 882). The domains are maladaptive variants of the Five Factor Model and resemble the PSY-5 (p. 893). The model is measured with the **Personality Inventory for DSM-5 (PID-5)**, self-report and informant forms (p. 894). Traits are **dimensional**, applying to everyone in some degree (p. 892).",
      duration: "Not applicable; traits are relatively consistent over time and situations but can change with maturation and experience (p. 892)",
      functioning: "Not rated by the taxonomy; Criterion A (the LPFS) rates functioning (p. 882)",
      mood: "Depressivity is a trait that raises the chance of depressive episodes; episode symptoms such as poor concentration come and go and are not part of the trait (p. 893)",
      criteria: [
        ["Type", "A dimensional trait taxonomy, Table 3; not a diagnosis (pp. 882, 899)."],
        ["Negative Affectivity (vs Emotional Stability)", "Emotional lability (fast, strong mood shifts); anxiousness (nervous worry, fear of uncertainty); separation insecurity (dread of being left, with fear of over-dependence); submissiveness (yielding to others to stay safe or liked); hostility (frequent anger and spite; “see also” Antagonism); perseveration (keeping on after a behavior stops working). Cross-listed: depressivity and suspiciousness (defined under Detachment) and restricted affectivity “(lack of)” (p. 899; condensed in the app’s words)."],
        ["Detachment (vs Extraversion)", "Withdrawal (prefers solitude, starts little contact); intimacy avoidance (keeps away from close, romantic or sexual ties); anhedonia (little pleasure, interest or energy); depressivity (low, hopeless, ashamed, with possible thoughts of suicide); restricted affectivity (flat, cool response); suspiciousness (expects ill will, doubts loyalty) (p. 899; condensed)."],
        ["Antagonism (vs Agreeableness)", "Manipulativeness (steering others by charm or subterfuge); deceitfulness (lies, fraud, embellishment); grandiosity (entitlement, superiority); attention seeking (wanting notice and admiration); callousness (no concern or remorse for harm). Hostility cross-listed (p. 900; condensed)."],
        ["Disinhibition (vs Conscientiousness)", "Irresponsibility (ignoring obligations and promises); impulsivity (acting in the moment without a plan); distractibility (trouble keeping focus on tasks); risk taking (needless danger, boredom-driven); rigid perfectionism “(lack of)”, listed here with the table’s note linking it to low levels of the domain (p. 900; condensed)."],
        ["Psychoticism (vs Lucidity)", "Unusual beliefs and experiences (e.g., believed special abilities such as mind reading, hallucination-like experiences); eccentricity (odd behavior, appearance or speech); cognitive and perceptual dysregulation (odd thinking and sensations, depersonalization, derealization and other dissociative experiences, sleep–wake mixed experiences) (p. 901; condensed)."],
        ["Count", "25 facets (p. 882): 6 Negative Affectivity + 6 Detachment + 5 Antagonism + 5 Disinhibition + 3 Psychoticism, counting each facet once where it is defined (app count of Table 3)."],
        ["Domains vs facets", "Domains are broad; facets are specific; facets that tend to occur together form a domain (withdrawal and anhedonia in Detachment). The broad domains are relatively consistent across cultures (p. 893)."],
        ["Trait, behavior, symptom", "A trait is a tendency; a behavior is one instance (a single unusual impulsive purchase); symptoms wax and wane while traits are relatively consistent; both can respond to intervention (pp. 893–894)."],
        ["Assessment", "Like a review of systems, review all five domains (p. 894). The PID-5 has a self-report form and an informant form (e.g., a spouse); a full assessment covers all 25 facets; working at the level of the five domains is an acceptable clinical option if just a general picture is wanted, but facets should be assessed when personality is the focus of treatment (p. 894)."],
        ["Elevated", "Judging a trait elevated could involve population norms and/or clinical judgment; an elevated trait counts toward Criterion B (p. 894)."]
      ],
      specifiers: [],
      epi: [
        ["Numbers to know", "5 domains; 25 facets; 6 named disorders use 30 B-trait slots in all (7 + 4 + 7 + 2 + 4 + 6) (p. 882; app count of pp. 884–889)"],
        ["Facets in no specific set’s B list", "Submissiveness and distractibility (app count of pp. 884–889)"],
        ["Facets shared by two sets", "Anxiousness (avoidant, borderline); hostility, impulsivity, risk taking (antisocial, borderline); intimacy avoidance (avoidant, OCPD); restricted affectivity (OCPD, schizotypal); withdrawal (avoidant, schizotypal) (app count)"],
        ["PID-5 forms (outside the DSM)", "Full PID-5 220 items (adult and ages 11–17); brief form PID-5-BF 25 items, domains only; short form PID-5-SF 100 items (Maples et al. 2015); informant form listed by the APA, item count not confirmed (research file). Described only; never reprinted"]
      ],
      risk: [
        "Not applicable as risk factors. The adaptive poles (Emotional Stability, Extraversion, Agreeableness, Conscientiousness, Lucidity) can greatly mitigate the effects of mental disorders and help coping and recovery from traumatic injury and other medical illness (p. 893).",
        "Disorder constructs and trait constructs each add value in predicting antecedent (family history, childhood abuse), concurrent (impairment, medication use) and predictive (hospitalization, suicide attempts) variables (p. 894).",
        "The opposite pole is not always adaptive: extreme kind-heartedness can let others take advantage (p. 893)."
      ],
      differential: [
        { id: "lpfs", how: "Criterion A rates functioning; the trait model rates Criterion B. Both are needed for a diagnosis in the model, and each contributes independently (pp. 882, 894)." },
        { id: "ampd-pd-ts", how: "The domains and facets the clinician records for PD-TS are its specifiers (p. 890)." },
        { id: "ampd-borderline", how: "Uses 7 facets across Negative Affectivity, Disinhibition and Antagonism, the widest spread of any set (p. 886; app count)." },
        { id: "ampd-schizotypal", how: "The only set that draws on Psychoticism (p. 889; app count)." },
        { id: "mdd", how: "Depressivity (trait) differs from a depressive episode (state); the trait raises the likelihood of episodes (p. 893)." },
        { id: "level1-adult", how: "Ch 23’s personality functioning domain is a screen; the PID-5 measures the 25 facets (p. 894; app comparison)." }
      ],
      pearls: [
        "**5 domains, 25 facets**; every domain has an adaptive **opposite pole** (pp. 882, 890).",
        "**Hostility** is defined under Negative Affectivity but labeled Antagonism in the antisocial and borderline sets (pp. 884, 887, 899).",
        "**Rigid perfectionism** appears as “(lack of)” under Disinhibition; the OCPD set calls it extreme Conscientiousness (pp. 888, 900).",
        "Domain-level assessment is **acceptable** for a general portrait; assess **facets** when personality is the focus of treatment (p. 894).",
        "Review all five domains like a **review of systems** (p. 894).",
        "Never on the diagnosis line (app guidance)."
      ],
      cmp: { symptoms: "Five domains with opposite poles, 25 facets; rated by interview and/or PID-5 self- and informant-report", exclusions: "Not a diagnosis; traits alone do not meet Criterion A", prevalence: "Not applicable; traits are dimensional in everyone", course: "Relatively consistent but can change with maturation and life experience (p. 892)" },
      clues: [["Five domains", "Negative Affectivity, Detachment, Antagonism, Disinhibition, Psychoticism"], ["Poles", "Emotional Stability, Extraversion, Agreeableness, Conscientiousness, Lucidity"], ["Recording (app guidance)", "In the formulation: the elevated domains and facets"]],
      updates: measureUpd("personality trait model", "Outside the DSM: the PID-5 forms are posted by the APA for clinical and research use (full 220 items; brief 25 items); the 100-item short form is from Maples et al. 2015. Describe them; never copy items (research file of November 2, 2026).")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Borderline PD: alternative model (Section III) vs Section II", ids: ["ampd-borderline", "borderline-pd"] },
    { label: "The six proposed sets of the alternative model", ids: ["ampd-antisocial", "ampd-avoidant", "ampd-borderline", "ampd-narcissistic", "ampd-ocpd", "ampd-schizotypal"] },
    { label: "AMPD antisocial vs AMPD borderline (shared hostility, impulsivity, risk taking)", ids: ["ampd-antisocial", "ampd-borderline"] },
    { label: "AMPD avoidant vs schizotypal vs OCPD (shared Detachment facets)", ids: ["ampd-avoidant", "ampd-schizotypal", "ampd-ocpd"] },
    { label: "Criterion A vs Criterion B: LPFS vs trait model", ids: ["lpfs", "trait-model"] },
    { label: "PD-TS vs other specified vs unspecified personality disorder", ids: ["ampd-pd-ts", "other-specified-pd", "unspecified-pd"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 26: onset and age rules", ticks: [[0, "childhood"], [40, "15"], [60, "18"], [100, "adulthood"]], rows: [
      { label: "General Criterion D", dx: "ampd-general", from: 25, to: 100, color: "guide", span: "onset traceable to adolescence or early adulthood" },
      { label: "AMPD antisocial", dx: "ampd-antisocial", from: 60, to: 100, color: "case", span: "at least 18" },
      { label: "Section II antisocial: conduct disorder (Ch 18)", dx: "antisocial-pd", from: 0, to: 40, color: "hy", span: "onset before 15" },
      { label: "Section II antisocial (Ch 18)", dx: "antisocial-pd", from: 60, to: 100, color: "hy", span: "at least 18" },
      { label: "Section II, any other PD under 18 (Ch 18)", dx: "general-pd", from: 25, to: 60, color: "clin", span: "features for at least 1 year" }
    ], note: "Ages, **not durations** of illness. The alternative model gives only one age number, **18 for antisocial PD** (p. 885); otherwise onset must be traceable to at least adolescence or early adulthood (p. 881), and the manual gives no ages for those stages, so the band edge is schematic. The Section II rows come from Chapter 18: conduct disorder with onset before 15 (p. 748) and, for other personality disorders in people under 18, features present for at least 1 year (p. 736). The scale is not linear." }
  ]);
})();
