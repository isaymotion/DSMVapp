/* Chapter 18 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app;
   SUSPECT, DISTANT, ME PECULIAR, CORRUPT, IMPULSIVE, PRAISE ME, SPECIAL ME, CRINGES, RELIANCE and PERFECTS are
   widely taught teaching mnemonics, adapted here. Each mnemonic is also a card in the Mnemonics deck: keep ids stable. */
SP.add("ch18", "mnemonics", [
  {
    id: "m18-01", short: "Three clusters", name: "Weird, Wild, Worried", original: true, dx: "general-pd", sec: "s18-map",
    "for": "Personality disorder clusters",
    letters: [
      ["W", "Weird: Cluster A", "Paranoid, schizoid, schizotypal (odd, eccentric)"],
      ["W", "Wild: Cluster B", "Antisocial, borderline, histrionic, narcissistic (dramatic, emotional, erratic)"],
      ["W", "Worried: Cluster C", "Avoidant, dependent, obsessive-compulsive (anxious, fearful)"]
    ],
    caveat: "The clusters are a teaching device with **serious limitations**; disorders across clusters often co-occur, and all that are met are diagnosed."
  },
  {
    id: "m18-02", short: "4 of 7", name: "SUSPECT", dx: "paranoid-pd", sec: "s18-paranoid",
    "for": "Paranoid personality disorder",
    letters: [
      ["S", "Spouse’s fidelity suspected", "Recurrent unjustified suspicions about the partner (A7)"],
      ["U", "Unforgiving", "Bears grudges (A5)"],
      ["S", "Suspects exploitation", "Others are exploiting, harming or deceiving (A1)"],
      ["P", "Perceives attacks", "On character or reputation; counterattacks (A6)"],
      ["E", "Enemy or friend?", "Doubts the loyalty of friends and associates (A2)"],
      ["C", "Confiding is avoided", "Fear information will be used against them (A3)"],
      ["T", "Threats in benign remarks", "Reads hidden demeaning meanings (A4)"]
    ],
    caveat: "Four or more. Not only during psychosis; add “(premorbid)” if it preceded schizophrenia. **F60.0**."
  },
  {
    id: "m18-03", short: "4 of 7", name: "DISTANT", dx: "schizoid-pd", sec: "s18-schizoid",
    "for": "Schizoid personality disorder",
    letters: [
      ["D", "Detached, flat affect", "Emotional coldness or flattened affectivity (A7)"],
      ["I", "Indifferent to praise or criticism", "(A6)"],
      ["S", "Sexual interest minimal", "Little interest in sexual experiences (A3)"],
      ["T", "Tasks done alone", "Almost always chooses solitary activities (A2)"],
      ["A", "Absence of close friends", "Other than first-degree relatives (A5)"],
      ["N", "No desire for relationships", "Neither desires nor enjoys close relationships (A1)"],
      ["T", "Takes pleasure in few activities", "(A4)"]
    ],
    caveat: "Four or more. No cognitive-perceptual distortions (schizotypal) or suspiciousness (paranoid); no wish for closeness (unlike avoidant). **F60.1**."
  },
  {
    id: "m18-04", short: "5 of 9", name: "ME PECULIAR", dx: "schizotypal-pd", sec: "s18-schizotypal",
    "for": "Schizotypal personality disorder",
    letters: [
      ["M", "Magical thinking", "Odd beliefs inconsistent with subcultural norms (A2)"],
      ["E", "Experiences unusual perceptions", "Including bodily illusions (A3)"],
      ["P", "Paranoid ideation", "Suspiciousness (A5)"],
      ["E", "Eccentric behavior or appearance", "(A7)"],
      ["C", "Constricted or inappropriate affect", "(A6)"],
      ["U", "Unusual thinking and speech", "Vague, circumstantial, metaphorical (A4)"],
      ["L", "Lacks close friends", "Other than first-degree relatives (A8)"],
      ["I", "Ideas of reference", "Not delusions of reference (A1)"],
      ["A", "Anxiety in social situations", "Does not lessen with familiarity; paranoid fears (A9)"],
      ["R", "Rule out psychosis and autism", "Not only during a psychotic disorder or ASD (B)"]
    ],
    caveat: "Five or more of the nine A items. Code **F21**, also listed with the schizophrenia spectrum disorders."
  },
  {
    id: "m18-05", short: "3 of 7 + ages", name: "CORRUPT", dx: "antisocial-pd", sec: "s18-antisocial",
    "for": "Antisocial personality disorder: the A criteria",
    letters: [
      ["C", "Cannot conform to the law", "Repeated acts that are grounds for arrest (A1)"],
      ["O", "Obligations ignored", "Consistent irresponsibility in work or finances (A6)"],
      ["R", "Reckless disregard for safety", "Of self or others (A5)"],
      ["R", "Remorseless", "Indifferent to or rationalizes harm (A7)"],
      ["U", "Underhanded", "Deceitful: lying, aliases, conning (A2)"],
      ["P", "Planning fails", "Impulsivity (A3)"],
      ["T", "Temper", "Irritability and aggressiveness, fights (A4)"]
    ],
    caveat: "Three or more **since age 15**, plus age **≥18** (B), **conduct disorder before 15** (C), and not only during schizophrenia or bipolar disorder (D). **F60.2**."
  },
  {
    id: "m18-06", short: "5 of 9", name: "IMPULSIVE", dx: "borderline-pd", sec: "s18-borderline",
    "for": "Borderline personality disorder",
    letters: [
      ["I", "Identity disturbance", "Unstable self-image (3)"],
      ["M", "Mood instability", "Reactive, lasting hours (6)"],
      ["P", "Paranoia or dissociation under stress", "Transient (9)"],
      ["U", "Unstable relationships", "Idealization and devaluation (2)"],
      ["L", "Lonely and empty", "Chronic emptiness (7)"],
      ["S", "Suicidal behavior or self-harm", "Recurrent (5)"],
      ["I", "Impulsivity in two areas", "Spending, sex, substances, driving, bingeing (4)"],
      ["V", "Very angry", "Intense, inappropriate anger (8)"],
      ["E", "Efforts to avoid abandonment", "Frantic, real or imagined (1)"]
    ],
    caveat: "Five or more. Self-harm counts **only** under criterion 5. Do not diagnose from a cross-section during a mood episode. **F60.3**."
  },
  {
    id: "m18-07", short: "5 of 8", name: "PRAISE ME", dx: "histrionic-pd", sec: "s18-histrionic",
    "for": "Histrionic personality disorder",
    letters: [
      ["P", "Provocative or seductive", "(2)"],
      ["R", "Relationships seen as closer than they are", "(8)"],
      ["A", "Attention: must be the center", "(1)"],
      ["I", "Influenced easily", "Suggestible (7)"],
      ["S", "Speech impressionistic", "Lacking detail (5)"],
      ["E", "Emotions shallow and shifting", "(3)"],
      ["M", "Makes a show", "Theatrical, exaggerated (6)"],
      ["E", "Eye-catching appearance", "Uses looks to draw attention (4)"]
    ],
    caveat: "Five or more. Wants **any** attention, even as fragile; narcissistic wants **admiration**. **F60.4**."
  },
  {
    id: "m18-08", short: "5 of 9", name: "SPECIAL ME", dx: "narcissistic-pd", sec: "s18-narcissistic",
    "for": "Narcissistic personality disorder",
    letters: [
      ["S", "Special and unique", "Associates only with high-status people (3)"],
      ["P", "Preoccupied with fantasies", "Of success, power, brilliance, beauty, ideal love (2)"],
      ["E", "Entitled", "(5)"],
      ["C", "Can’t empathize", "(7)"],
      ["I", "Interpersonally exploitative", "(6)"],
      ["A", "Arrogant", "Haughty (9)"],
      ["L", "Looks for admiration", "Excessive (4)"],
      ["M", "My importance is grandiose", "(1)"],
      ["E", "Envious", "Or believes others envy them (8)"]
    ],
    caveat: "Five or more. Beneath grandiosity is **fragile** self-esteem. **F60.81**."
  },
  {
    id: "m18-09", short: "4 of 7", name: "CRINGES", dx: "avoidant-pd", sec: "s18-avoidant",
    "for": "Avoidant personality disorder",
    letters: [
      ["C", "Certain of being liked first", "Unwilling to get involved otherwise (2)"],
      ["R", "Rejection or criticism preoccupies", "(4)"],
      ["I", "Inhibited in new situations", "From feeling inadequate (5)"],
      ["N", "New activities and risks avoided", "Might be embarrassing (7)"],
      ["G", "Gets restrained in intimacy", "Fear of shame or ridicule (3)"],
      ["E", "Employment with contact avoided", "(1)"],
      ["S", "Self seen as inferior", "Inept, unappealing (6)"]
    ],
    caveat: "Four or more. **Wants** relationships (unlike schizoid). **F60.6**."
  },
  {
    id: "m18-10", short: "5 of 8", name: "RELIANCE", dx: "dependent-pd", sec: "s18-dependent",
    "for": "Dependent personality disorder",
    letters: [
      ["R", "Reassurance for everyday decisions", "(1)"],
      ["E", "Expressing disagreement is hard", "Not realistic fear of retribution (3)"],
      ["L", "Life responsibilities handed over", "(2)"],
      ["I", "Initiating projects is hard", "Lack of self-confidence (4)"],
      ["A", "Alone feels helpless", "(6)"],
      ["N", "Nurturance sought at any cost", "Even volunteering for unpleasant tasks (5)"],
      ["C", "Can’t be without a relationship", "Urgently seeks a replacement (7)"],
      ["E", "Excessive fear of being left alone", "To care for oneself (8)"]
    ],
    caveat: "Five or more. Reacts to abandonment with **appeasement**, unlike borderline’s rage. **F60.7**."
  },
  {
    id: "m18-11", short: "4 of 8", name: "PERFECTS", dx: "ocpd", sec: "s18-ocpd",
    "for": "Obsessive-compulsive personality disorder",
    letters: [
      ["P", "Preoccupied with details", "Rules, lists, order; the point is lost (1)"],
      ["E", "Ethically rigid", "Overconscientious, scrupulous (4)"],
      ["R", "Reluctant to delegate", "(6)"],
      ["F", "Finishing blocked by perfectionism", "(2)"],
      ["E", "Economical to a fault", "Miserly toward self and others (7)"],
      ["C", "Can’t discard", "Worn-out, worthless objects (5)"],
      ["T", "Tied to work", "Excluding leisure and friends (3)"],
      ["S", "Stubborn", "Rigidity (8)"]
    ],
    caveat: "Four or more. No true obsessions or compulsions (that is **OCD**, which can coexist). **F60.5**."
  },
  {
    id: "m18-12", short: "F07.0 subtypes", name: "LAD APe", original: true, dx: "personality-change-amc", sec: "s18-change-amc",
    "for": "Personality change due to another medical condition: subtypes",
    letters: [
      ["L", "Labile", "Affective lability predominates"],
      ["A", "Aggressive", "Aggressive behavior"],
      ["D", "Disinhibited", "Poor impulse control, sexual indiscretions"],
      ["A", "Apathetic", "Marked apathy and indifference"],
      ["P", "Paranoid", "Suspiciousness or paranoid ideation"]
    ],
    caveat: "Also **other**, **combined** and **unspecified** types. Code the medical condition first, then **F07.0**."
  }
]);
