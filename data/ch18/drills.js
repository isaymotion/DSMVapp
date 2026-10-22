/* Chapter 18 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifier, code).
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var DX = ["Paranoid personality disorder", "Schizoid personality disorder", "Schizotypal personality disorder", "Antisocial personality disorder", "Borderline personality disorder", "Histrionic personality disorder", "Narcissistic personality disorder", "Avoidant personality disorder", "Dependent personality disorder", "Obsessive-compulsive personality disorder", "Personality change due to another medical condition", "Other specified personality disorder", "Unspecified personality disorder"];
  var CODES = ["F60.0", "F60.1", "F21", "F60.2", "F60.3", "F60.4", "F60.81", "F60.6", "F60.7", "F60.5", "F07.0", "F60.89", "F60.9"];
  var CHANGE = ["Labile type", "Disinhibited type", "Aggressive type", "Apathetic type", "Paranoid type", "Combined type"];

  SP.add("ch18", "dxline", [
    {
      id: "w18-01", tag: "Paranoid",
      "case": "A 47-year-old man has distrusted everyone since his teens: he bears grudges, reads insults into jokes, refuses to confide, sues neighbors and suspects his wife’s fidelity. He has no delusions or hallucinations.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Code", options: CODES, answer: 0 }
      ],
      line: "**F60.0** Paranoid personality disorder",
      why: "Five of seven paranoid criteria; no psychosis."
    },
    {
      id: "w18-02", tag: "Premorbid",
      "case": "A 22-year-old man newly diagnosed with schizophrenia has been detached, solitary, cold and uninterested in relationships since age 13, without odd beliefs; this persists in remission.",
      parts: [
        { label: "Personality diagnosis", options: DX, answer: 1 },
        { label: "Notation", options: ["(premorbid)", "(in remission)", "None"], answer: 0 },
        { label: "Code", options: CODES, answer: 1 }
      ],
      line: "**F60.1** Schizoid personality disorder (premorbid)",
      why: "Met before schizophrenia began, so add “**(premorbid)**” (recorded alongside F20.9 schizophrenia)."
    },
    {
      id: "w18-03", tag: "Schizotypal",
      "case": "A 29-year-old woman with lifelong magical thinking, ideas of reference, odd speech and dress, suspiciousness and no friends; social anxiety rises the longer she stays at a party.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Code", options: CODES, answer: 2 }
      ],
      line: "**F21** Schizotypal personality disorder",
      why: "Six of nine schizotypal criteria. Note the code is **F21**, not F60."
    },
    {
      id: "w18-04", tag: "Antisocial",
      "case": "A 27-year-old man with repeated assaults, theft, aliases and no remorse; conduct disorder from age 12.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Code", options: CODES, answer: 3 }
      ],
      line: "**F60.2** Antisocial personality disorder",
      why: "Age ≥18, three or more A criteria since 15, conduct disorder before 15."
    },
    {
      id: "w18-05", tag: "Borderline",
      "case": "A 24-year-old woman with abandonment fears, idealization–devaluation, cutting, binge drinking and spending, hours-long mood shifts and chronic emptiness since 16.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "Code", options: CODES, answer: 4 }
      ],
      line: "**F60.3** Borderline personality disorder",
      why: "Six of nine criteria. Borderline PD has no specifiers."
    },
    {
      id: "w18-06", tag: "Histrionic",
      "case": "A 31-year-old woman who must be the center of attention, dresses provocatively, speaks dramatically without detail, is easily swayed and calls new acquaintances her dearest friends.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 5 },
        { label: "Code", options: CODES, answer: 5 }
      ],
      line: "**F60.4** Histrionic personality disorder",
      why: "Six of eight histrionic criteria."
    },
    {
      id: "w18-07", tag: "Narcissistic",
      "case": "A 40-year-old lawyer who is grandiose, entitled, exploitative, envious and unempathic and requires constant admiration.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 6 },
        { label: "Code", options: CODES, answer: 6 }
      ],
      line: "**F60.81** Narcissistic personality disorder",
      why: "Six of nine narcissistic criteria. Note the five-character code F60.81."
    },
    {
      id: "w18-08", tag: "Avoidant",
      "case": "A 25-year-old man who longs for friends but avoids anyone not certain to like him, declines team roles, and sees himself as inferior and inept.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 7 },
        { label: "Code", options: CODES, answer: 7 }
      ],
      line: "**F60.6** Avoidant personality disorder",
      why: "Four or more of seven; he wants relationships (not schizoid)."
    },
    {
      id: "w18-09", tag: "Dependent",
      "case": "A 33-year-old woman who cannot choose clothes without her mother’s advice, never disagrees, feels helpless alone and immediately finds a new partner after each breakup.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 8 },
        { label: "Code", options: CODES, answer: 8 }
      ],
      line: "**F60.7** Dependent personality disorder",
      why: "Five or more of eight dependent criteria."
    },
    {
      id: "w18-10", tag: "OCPD",
      "case": "A 46-year-old man who misses deadlines perfecting work, never delegates, works weekends, can’t throw anything out and is stubborn and miserly; no obsessions or compulsions.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 9 },
        { label: "Code", options: CODES, answer: 9 }
      ],
      line: "**F60.5** Obsessive-compulsive personality disorder",
      why: "Six of eight OCPD criteria; no OCD."
    },
    {
      id: "w18-11", tag: "Change due to AMC",
      "case": "A 61-year-old woman with a right frontal stroke 1 year ago has become impulsive, makes inappropriate jokes and sexual comments, and spends recklessly. She was previously reserved.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 10 },
        { label: "Subtype", options: CHANGE, answer: 1 },
        { label: "Code", options: CODES, answer: 10 }
      ],
      line: "The stroke is coded first; then **F07.0** Personality change due to cerebral infarction, disinhibited type",
      why: "Poor impulse control predominates → **disinhibited**. The medical condition is listed **immediately before** F07.0."
    },
    {
      id: "w18-12", tag: "Change due to AMC",
      "case": "A 45-year-old man with Huntington’s disease has become indifferent, unmotivated and emotionally flat over 2 years, with no depressed mood.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 10 },
        { label: "Subtype", options: CHANGE, answer: 3 },
        { label: "Code", options: CODES, answer: 10 }
      ],
      line: "**G10** Huntington’s disease; **F07.0** Personality change due to Huntington’s disease, apathetic type",
      why: "Marked apathy and indifference predominate → **apathetic type**."
    },
    {
      id: "w18-13", tag: "Other specified",
      "case": "A 38-year-old man meets the general criteria with features of paranoid, narcissistic and antisocial PD but full criteria for none; the clinician records why.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 11 },
        { label: "Code", options: CODES, answer: 11 }
      ],
      line: "**F60.89** Other specified personality disorder (mixed personality features)",
      why: "The reason is stated, so other specified, not unspecified (F60.9)."
    }
  ]);

  SP.add("ch18", "counting", [
    {
      id: "n18-01", tag: "Borderline",
      "case": "A 28-year-old woman reports:",
      ask: "Mark the findings that count toward borderline personality disorder. Are five or more met?",
      items: [
        ["Panic and fury when her partner is 10 minutes late", true, "Frantic efforts to avoid abandonment (1)."],
        ["Swings from idolizing to despising her friends", true, "Unstable, intense relationships (2)."],
        ["Cuts her arms after arguments", true, "Self-mutilation (5)."],
        ["Overdoses when she fears her partner will leave", false, "Already counted under Criterion 5; not under 1."],
        ["Binge drinking and impulsive spending", true, "Impulsivity in two areas (4)."],
        ["Feels empty most of the time", true, "Chronic emptiness (7)."]
      ],
      need: 5,
      met: true,
      why: "Five criteria (1, 2, 4, 5, 7). Suicidal behavior counts only once, under Criterion 5."
    },
    {
      id: "n18-02", tag: "Antisocial",
      "case": "A 20-year-old man:",
      ask: "Mark the findings that count toward antisocial PD Criterion A. Is A met?",
      items: [
        ["Arrested three times for burglary", true, "Failure to conform to lawful norms (A1)."],
        ["Uses fake names to obtain loans", true, "Deceitfulness (A2)."],
        ["Got into a fight defending his younger brother from an attacker", false, "Aggression in defense of oneself or others does not count."],
        ["Repeatedly drives drunk at high speed", true, "Reckless disregard for safety (A5)."],
        ["Says his victims “had it coming”", true, "Lack of remorse (A7)."]
      ],
      need: 3,
      met: true,
      why: "Four A criteria. Criteria B (≥18) and C (conduct disorder before 15) must also be checked."
    },
    {
      id: "n18-03", tag: "Antisocial requirements",
      "case": "A 19-year-old meets four antisocial A criteria.",
      ask: "Which findings are required, in addition, for antisocial personality disorder?",
      items: [
        ["He is at least 18", true, "Criterion B."],
        ["Conduct disorder began before age 15", true, "Criterion C."],
        ["The behavior is not only during schizophrenia or bipolar disorder", true, "Criterion D."],
        ["He has a substance use disorder", false, "Not required; it may coexist."],
        ["He has been imprisoned", false, "Acts must be grounds for arrest; arrest or prison is not required."]
      ],
      met: true,
      why: "B, C and D are all required; arrests and substance use are not."
    },
    {
      id: "n18-04", tag: "Schizotypal",
      "case": "A 30-year-old man:",
      ask: "Mark the findings that count toward schizotypal PD. Are five or more met?",
      items: [
        ["Thinks strangers’ conversations may be about him, but isn’t sure", true, "Ideas of reference (1)."],
        ["Believes he can sense future events", true, "Magical thinking (2)."],
        ["Feels a presence in the room at night", true, "Unusual perceptual experience (3)."],
        ["Speech vague and overelaborate", true, "Odd thinking and speech (4)."],
        ["Is certain the neighbors implanted a chip in his head", false, "A fixed delusion points to a psychotic disorder."],
        ["Has no friends except his brother", true, "Lack of close friends (8)."]
      ],
      need: 5,
      met: true,
      why: "Five schizotypal criteria. A true delusion would point to a psychotic disorder instead."
    },
    {
      id: "n18-05", tag: "Avoidant vs schizoid",
      "case": "A socially isolated 34-year-old:",
      ask: "Mark the findings that support avoidant (not schizoid) personality disorder. Do they favor avoidant PD?",
      items: [
        ["Longs for a partner and feels lonely", true, "Desire for relationships."],
        ["Avoids people because he expects ridicule", true, "Fear of rejection."],
        ["Sees himself as inferior", true, "Avoidant criterion 6."],
        ["Indifferent to praise or criticism", false, "A schizoid feature."],
        ["Takes pleasure in few activities", false, "A schizoid feature."]
      ],
      met: true,
      why: "Desire for connection with fear of rejection and inferiority point to avoidant PD."
    },
    {
      id: "n18-06", tag: "Dependent",
      "case": "A 40-year-old woman:",
      ask: "Mark the findings that count toward dependent PD. Are five or more met?",
      items: [
        ["Needs her sister’s advice to choose groceries", true, "Criterion 1."],
        ["Lets her husband decide her job and friends", true, "Criterion 2."],
        ["Never disagrees with her husband because he has threatened to hurt her", false, "Realistic fear of retribution is excluded."],
        ["Volunteers for every unpleasant chore to keep people’s approval", true, "Criterion 5."],
        ["Feels helpless when home alone", true, "Criterion 6."],
        ["Constantly fears being left to care for herself", true, "Criterion 8."]
      ],
      need: 5,
      met: true,
      why: "Five criteria (1, 2, 5, 6, 8). Disagreement withheld for fear of real violence does not count; assess her safety."
    },
    {
      id: "n18-07", tag: "OCPD",
      "case": "A 50-year-old man:",
      ask: "Mark the findings that count toward OCPD. Are four or more met?",
      items: [
        ["Rewrites every report so many times he misses deadlines", true, "Perfectionism interfering with completion (2)."],
        ["Works 70 hours a week because the family would otherwise lose their home", false, "Explained by economic necessity."],
        ["Refuses to let anyone help unless they follow his exact method", true, "Reluctance to delegate (6)."],
        ["Keeps broken appliances “in case”", true, "Cannot discard worthless objects (5)."],
        ["Strict religious observance shared by his community", false, "Explained by cultural or religious identification."],
        ["Refuses to compromise “on principle”", true, "Rigidity and stubbornness (8)."]
      ],
      need: 4,
      met: true,
      why: "Four criteria; economic necessity and shared religious practice are excluded."
    },
    {
      id: "n18-08", tag: "General criteria",
      "case": "A 23-year-old man with impulsive anger and unstable relationships.",
      ask: "Mark the findings that support the general criteria for a personality disorder. Are they met?",
      items: [
        ["The pattern has been present since age 15", true, "Onset by adolescence (D)."],
        ["It occurs at home, at work and with friends", true, "Pervasive (B)."],
        ["It causes job losses and breakups", true, "Impairment (C)."],
        ["It occurs only during cocaine binges", false, "Substance-related: would fail Criterion F."],
        ["It affects affectivity, interpersonal functioning and impulse control", true, "Two or more areas (A)."]
      ],
      met: true,
      why: "A–D are supported; Criteria E and F require the pattern not to be confined to another disorder or substance use."
    },
    {
      id: "n18-09", tag: "Personality change",
      "case": "A 55-year-old woman with recent behavior change:",
      ask: "Mark the findings that support personality change due to another medical condition. Are the criteria met?",
      items: [
        ["Her family says she was calm and considerate until a year ago", true, "Change from previous personality (A)."],
        ["MRI shows a frontal tumor consistent with the change", true, "Evidence of direct cause (B)."],
        ["She is fully alert and oriented", true, "Not during delirium (D)."],
        ["Her outbursts have cost her her job", true, "Impairment (E)."],
        ["She has been impulsive and unstable since adolescence", false, "A lifelong pattern suggests a personality disorder."]
      ],
      met: true,
      why: "A, B, D and E are supported; also check that no other mental disorder better explains it (C)."
    },
    {
      id: "n18-10", tag: "Narcissistic",
      "case": "A 39-year-old man:",
      ask: "Mark the findings that count toward narcissistic PD. Are five or more met?",
      items: [
        ["Insists he is the most talented person in his firm without matching achievements", true, "Grandiosity (1)."],
        ["Expects to skip lines and be served first", true, "Entitlement (5)."],
        ["Takes credit for colleagues’ work", true, "Exploitative (6)."],
        ["Unmoved when a friend’s parent dies", true, "Lacks empathy (7)."],
        ["Believes his colleagues envy him", true, "Envy (8)."],
        ["Elevated mood for 5 days with little sleep", false, "Suggests hypomania, not a trait."]
      ],
      need: 5,
      met: true,
      why: "Five criteria; a discrete episode of elevated mood with decreased sleep calls for assessing bipolar disorder."
    }
  ]);
})();
