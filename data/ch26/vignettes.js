/* Chapter 26 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   The Alternative DSM-5 Model for Personality Disorders (AMPD) is offered as an alternative in Section III (p. 881): its
   proposed criteria sets are not the official criteria, and the chapter gives no coding instruction. Keyed answers therefore
   name the model's conclusion (a specific set, PD-TS, or no PD) and, where the question asks about the chart, the Section II
   personality disorder and its ICD-10-CM code from Chapter 18 with the LPFS level and trait profile in the formulation
   (app guidance). Every stem names the impaired areas (identity, self-direction, empathy, intimacy) and the elevated traits
   that the `why` counts. Section II facts are labeled "(Ch 18)"; coding routes, safety steps and other advice beyond the
   text are labeled "(app guidance)" or "(outside the DSM)". Self-harm stays in the chapter's general terms. All patients
   are pseudonyms; all are adults except the one case built to teach the age note. */
SP.add("ch26", "vignettes", [
  {
    "id": "v26-01",
    "tag": "Calm, bold and on stage",
    "sec": "s26-antisocial",
    "dx": "ampd-antisocial",
    "stem": "Rogelio, 34, is referred by a court in Olongapo for evaluation while facing several estafa complaints. For three years he ran an overseas-job placement office with forged licenses, charming applicants with flattery and easy promises before taking their placement fees. He describes the victims, some of whom lost their savings, as ‘people who should have read the fine print’ and once had a debtor beaten up to make an example of him. His idea of a good life is money, power and fun; he follows no rules of his own and sees laws as obstacles for other people. He controls his live-in partner by intimidation and has never had a relationship he did not use. He gets restless within days when life is quiet and then starts some new, reckless scheme for the thrill of it, acts on whims without plans, and has left unpaid loans and unsupported children in two provinces. Records from his barangay and high school describe lying, theft and fights from age 13. He is not an angry man: insults roll off him, and staff find him pleasant. Throughout the interview he is relaxed, says he has never felt nervous even when arrested, and enjoys being the life of every gathering, where he loves to hold the floor. The resident rates his personality functioning at Level 2 (moderate).",
    "q": "Which conclusion best fits the alternative model?",
    "choices": [
      "Antisocial PD is not met, because hostility is a required trait and is absent",
      "Antisocial PD is not met, because all seven traits must be elevated",
      "Antisocial PD is met, but the psychopathic features specifier cannot be added because callousness has already been counted",
      "Antisocial PD is met (six of seven traits; impairment in all four areas), specified with psychopathic features (low anxiousness, low withdrawal, high attention seeking)",
      "Narcissistic PD rather than antisocial PD, because his attention seeking is high"
    ],
    "answer": 3,
    "why": "Criterion A needs moderate or greater impairment in **two or more of four areas**; he shows all four: identity built on gain, power and pleasure; self-direction with no prosocial standards and failure to keep to the law; empathy with no concern or remorse for victims; intimacy based on exploitation and intimidation (p. 884). Criterion B needs **six or more of seven** traits (pp. 884–885): manipulativeness (charm and flattery), callousness (no remorse, aggression), deceitfulness (forged licenses), risk taking (the trait includes **boredom proneness** and starting things thoughtlessly to escape boredom), impulsivity, and irresponsibility (debts, unsupported children) make **six**; hostility is absent and no single trait is mandatory. The **with psychopathic features** specifier describes a bold variant with **low anxiousness, low withdrawal and high attention seeking**; the bold style **may mask** maladaptive behavior such as fraudulence (p. 885). He must also meet Criteria C–G (p. 884), and the long history from early adolescence supports D (p. 881). For the chart, Section II antisocial PD (F60.2) also needs evidence of conduct disorder with onset before 15, which his records suggest and the clinician must confirm (Ch 18, p. 748; app guidance on the route).",
    "whyNot": [
      "No trait in the antisocial set is mandatory; the rule is any six of the seven (p. 884).",
      "Six of seven is the threshold, not seven of seven (p. 884).",
      "The specifier uses different traits (anxiousness, withdrawal, attention seeking) from the B list, so nothing is double counted; it records the bold psychopathic variant (p. 885).",
      "Correct.",
      "Narcissistic PD needs both grandiosity and attention seeking (pp. 887–888); his pattern matches the antisocial set, and high attention seeking here is part of the psychopathic specifier (p. 885)."
    ],
    "discuss": [
      "Which parts of his presentation reflect social potency and which reflect stress immunity (p. 885)?",
      "Why might a calm, likeable interview mislead a clinician in a case like this, and how would informant data help (p. 894; app guidance)?"
    ]
  },
  {
    "id": "v26-02",
    "tag": "Seventeen, with the whole picture",
    "sec": "s26-antisocial",
    "dx": "ampd-antisocial",
    "stem": "Ervin, 17, is brought from a youth care facility in Balanga to the hospital’s outpatient clinic. Since about age 12 he has lied to teachers and relatives, conned classmates out of money, stolen from neighbors and started fights in which he hurt others badly, laughing about it afterward. He flares up at small slights, races motorcycles at night ‘because there is nothing else to do’, acts without thinking and has dropped every commitment, including a job his uncle arranged. He sees himself as someone who deserves whatever he can take, has no rules of his own, shows no concern for those he harms, and relates to others only to use or frighten them. All seven antisocial traits appear elevated on interview, and his family confirms the pattern. There is no substance use, psychotic disorder or head injury.",
    "q": "What does the alternative model allow the clinician to conclude today?",
    "choices": [
      "Antisocial PD is met; the age requirement applies only to Section II",
      "The antisocial set cannot be diagnosed yet: its note requires age 18, and Criterion G asks whether features are better understood as part of his developmental stage; his functioning and traits can still be described, and a Section II diagnosis suited to his age (such as conduct disorder) is evaluated (app guidance)",
      "PD-TS with an Antagonism–Disinhibition profile, because PD-TS is the required diagnosis for everyone younger than 18",
      "Antisocial PD with psychopathic features, because the specifier overrides the age note",
      "No personality assessment should be done before age 18, because traits are not yet formed"
    ],
    "answer": 1,
    "why": "The antisocial set carries a **note that the individual is at least 18 years of age** (p. 885), so at 17 the set is not applied however complete the picture. General Criterion G excludes features **better understood as normal for the person’s developmental stage** or sociocultural setting (p. 881), and the chapter notes that **teenagers are generally higher on trait impulsivity than older adults** (p. 892); his pattern goes well beyond that, but G must still be weighed. Describing traits and functioning remains useful: it is always appropriate to assess personality for context (p. 883), and the profile may be relevant whether or not a PD is present (p. 894). Section II also requires age 18 for antisocial PD, with conduct disorder before 15 as the childhood route (Ch 18, p. 748); evaluating conduct disorder now is the Section II path (app guidance).",
    "whyNot": [
      "The age note is part of the alternative model’s own antisocial set (p. 885), not only Section II.",
      "Correct.",
      "Nothing in the chapter makes PD-TS the required diagnosis below 18; PD-TS is for a PD whose pattern differs from the six specific sets (p. 891).",
      "Specifiers describe a disorder that is already diagnosed; they cannot remove a requirement (p. 885).",
      "The chapter says assessing personality is always appropriate (p. 883); traits do change with maturation (p. 892), which is a reason to reassess later, not to avoid describing them now."
    ],
    "discuss": [
      "If he returns at 19 with the same pattern, which general criteria would you check again before applying the antisocial set (pp. 881, 885)?",
      "How would you separate a peer-group phase of reckless behavior from an enduring trait pattern in an adolescent (p. 893; app guidance)?"
    ]
  },
  {
    "id": "v26-03",
    "tag": "Resigned, or afraid?",
    "sec": "s26-avoidant",
    "dx": "ampd-avoidant",
    "stem": "Marites, 29, an encoder at an export processing zone in Mariveles, comes for help after her mother urged her to ‘go out more’. She sees herself as plain, awkward and less capable than her coworkers and feels deep shame about it. She turned down two promotions because they meant leading meetings, and avoids any new activity that involves people. She is sure coworkers think poorly of her and replays small comments for days. She has never dated; she will not get close to anyone unless she is certain she is liked. On interview she eats alone, does not start conversations, gets little enjoyment from anything, and avoids close or romantic ties. When asked about nervousness, she says she does not feel tense or afraid: ‘I just know how it will end, so I don’t bother.’ The resident judges impairment moderate in identity, self-direction, empathy and intimacy, and rates withdrawal, anhedonia and intimacy avoidance as elevated; anxiousness is not rated elevated on the information available.",
    "q": "On the information available today, what is the alternative-model conclusion?",
    "choices": [
      "Avoidant PD is met, because three of the four traits are elevated",
      "Avoidant PD is met, because her shame and low self-esteem satisfy the identity area",
      "Avoidant PD is met if depressivity is added in place of anxiousness",
      "Schizotypal PD, because withdrawal and intimacy avoidance are elevated",
      "Avoidant PD is not met as assessed, because anxiousness is mandatory and has not been found; if a PD is judged present, PD-TS describes her for now"
    ],
    "answer": 4,
    "why": "Avoidant PD needs **three or more of four traits, one of which must be anxiousness** (p. 885). She has **three** (withdrawal, anhedonia, intimacy avoidance, all Detachment facets; pp. 885–886) but anxiousness is **not elevated on current data**, so the set is not met. Her A picture is clearly avoidant in flavor: low self-esteem and shame (identity), reluctance to pursue goals involving people (self-direction), sensitivity to criticism with negative inferences about others (empathy), and holding back unless sure of being liked (intimacy) (p. 885). A PD judged present whose pattern does not match a specific set is **PD-TS** (p. 891). Because her account may understate fear, more data (interview, informant report) are worth gathering (p. 894; app guidance).",
    "whyNot": [
      "The count is right but the mandatory trait is missing (p. 885).",
      "Criterion A is met, but Criterion B still fails without anxiousness (p. 885).",
      "Depressivity can be added only as a specifier in avoidant PD; it never replaces a criterion (p. 886).",
      "Schizotypal PD needs four of six traits and centers on Psychoticism; she has two of its traits (withdrawal only; intimacy avoidance is not in that set) and no odd beliefs, perceptions or behavior (p. 889).",
      "Correct."
    ],
    "then": {
      "q": "At the next visit her sister completes the informant-report form and describes Marites shaking and nauseated before every office gathering and dreading being laughed at. Marites then admits she ‘goes cold with fear’ at the thought of embarrassing herself and has spent years bracing for it. The resident now rates anxiousness as elevated. What is the conclusion?",
      "choices": [
        "Still PD-TS, because the first conclusion stands once recorded",
        "Avoidant PD is now met: anxiousness plus withdrawal, anhedonia and intimacy avoidance (four of four), with her LPFS level recorded",
        "Avoidant PD is met only if her impairment is rerated at Level 3 or more",
        "Avoidant PD cannot be met, because the new information comes from an informant",
        "Social anxiety disorder replaces any personality diagnosis"
      ],
      "answer": 1,
      "why": "With **anxiousness** now elevated (its definition includes fears of embarrassment; p. 885), she has **four of four** avoidant traits, including the mandatory one, and Criterion A is already met (p. 885). The PID-5 has an **informant-report form** for people who know the patient well, and a detailed assessment gathers both self- and informant-report data (p. 894). A trait counts toward Criterion B when testing and/or interview data support the clinical judgment of elevation (p. 894). The level of personality functioning can also be specified (p. 886). Whether Section II social anxiety disorder is also present is a separate question decided by its own criteria (outside this chapter; app guidance).",
      "whyNot": [
        "Conclusions follow the current data; the trait evaluation is revised when better information arrives (p. 894; app guidance).",
        "Correct.",
        "Moderate (Level 2) impairment is enough for every AMPD PD (p. 882).",
        "Informant reports are part of the model’s assessment (p. 894).",
        "The chapter states PDs can be diagnosed alongside other mental disorders (p. 883); a co-occurring disorder does not erase the PD (app guidance on this pairing)."
      ]
    },
    "discuss": [
      "Why does the model insist on anxiousness for avoidant PD but not for other Detachment-heavy profiles (pp. 885, 891)?",
      "Which other Negative Affectivity traits could be specified if present in avoidant PD (p. 886)?"
    ]
  },
  {
    "id": "v26-04",
    "tag": "Four traits, none of the three",
    "sec": "s26-borderline",
    "dx": "ampd-borderline",
    "stem": "Joanna, 23, a call-center agent in Balanga, is seen after her third breakup in a year. Since her late teens her sense of who she is has shifted with each partner; she is harshly self-critical, says she feels hollow most days, and during fights she feels unreal and far away from her own body for a while. She has changed college courses three times and cannot say what she wants. Her relationships start with intense closeness and turn into suspicion and clinging, and she lives in dread of being left. Her moods swing several times a day out of proportion to events; she fears she will fall apart; she panics at any hint of separation; and she often feels down, ashamed and pessimistic about the future, though she denies thoughts of suicide. When hurt she withdraws silently rather than lashing out; she plans carefully, has never acted on sudden urges, avoids danger and has no history of self-harming behavior. The resident rates impairment at Level 3 (severe) and records elevated emotional lability, anxiousness, separation insecurity and depressivity. Impulsivity, risk taking and hostility are not elevated.",
    "q": "Which alternative-model conclusion is correct?",
    "choices": [
      "Borderline PD is met, because four of the seven traits are elevated",
      "Borderline PD is met, because her dissociative episodes count as cognitive and perceptual dysregulation and complete the trait list",
      "Borderline PD is not met, because none of impulsivity, risk taking or hostility is present; PD-TS with her LPFS level and Negative Affectivity profile describes her",
      "Borderline PD is not met, because Level 3 impairment points to a psychotic disorder instead",
      "No PD can be diagnosed, because her traits are all from a single domain"
    ],
    "answer": 2,
    "why": "Borderline PD needs **four or more of seven traits, at least one of which is impulsivity, risk taking or hostility** (p. 886). Joanna has four (emotional lability, anxiousness, separation insecurity, depressivity), but **none of the three**, so the set is not met. Criterion A is clearly met: identity (unstable self-image, self-criticism, emptiness, and **dissociative states under stress**, which the manual places inside the identity area), self-direction (unstable goals), and intimacy (intense, conflicted relationships with fear of abandonment) (p. 886). A PD judged present whose pattern differs from the six specific sets is diagnosed as **PD-TS**, which covers subthreshold presentations (p. 891); its Criterion B can be one or more facets from any domain (p. 890).",
    "whyNot": [
      "The count alone is not enough; one of the three must be present (p. 886).",
      "Dissociative states under stress belong to the identity area of Criterion A (p. 886); Psychoticism traits are optional specifiers in borderline PD, not criteria (p. 887).",
      "Correct.",
      "Level 3 describes severe personality impairment (p. 897); it says nothing about psychosis.",
      "PD-TS Criterion B accepts one or more domains or facets from any domain (p. 890)."
    ],
    "then": {
      "q": "A year later Joanna returns after a new breakup. For several months, when overwhelmed, she has acted on urges without stopping to think, with a sense of urgency and repeated self-harming behavior under emotional distress; once she needed emergency care. Her other traits and the impaired areas are unchanged. What follows?",
      "choices": [
        "Borderline PD is now met: impulsivity (which includes urgency and self-harming behavior under distress) makes five of seven, including a required trait; the LPFS level is rerated and her safety is assessed now (app guidance)",
        "Still PD-TS, because a PD diagnosis cannot change once made",
        "Borderline PD is met only after the behavior has lasted 2 years",
        "Self-harming behavior is a symptom, never part of a trait, so nothing changes",
        "Antisocial PD, because impulsivity is a Disinhibition trait"
      ],
      "answer": 0,
      "why": "In the borderline set, **impulsivity** is a Disinhibition facet that includes a **sense of urgency and self-harming behavior under emotional distress** (p. 887). With it, Joanna has **five of seven** traits, including one of the three required, so the borderline set is **now met** (p. 886). Traits are more stable than symptoms but **can change** (p. 882); a single act is a behavior, while a pattern repeated across time and situations reflects a trait (p. 893). The LPFS rates **current** overall impairment, so it is rerated at each assessment (p. 892). Safety: assess current risk and make a safety plan with her and her family; the Philippine **NCMH Crisis Hotline** is **1553** (toll-free from landlines) or **1800-1888-1553**; **0919-057-1553** (Smart/TNT); **0917-899-8727** and **0966-351-4518** (Globe/TM) (app guidance; confirm current numbers before giving them out). For the chart, Section II borderline PD (F60.3) needs five of nine Section II criteria (Ch 18, p. 752; app guidance on the route).",
      "whyNot": [
        "Correct.",
        "The model describes the current pattern; traits can change and the conclusion is revised (pp. 882, 892).",
        "The alternative model has no such duration rule; Criterion D asks for relative stability over time with onset by adolescence or early adulthood (p. 881), which her lifelong pattern meets.",
        "The manual writes self-harming behavior under distress into the impulsivity trait itself (p. 887); repeated across months it is part of a pattern, not a one-off behavior (p. 893).",
        "Antisocial PD needs six of seven antisocial traits (p. 884); she has one of them (impulsivity)."
      ]
    },
    "discuss": [
      "Why might the borderline set require one of impulsivity, risk taking or hostility rather than accept any four Negative Affectivity traits (pp. 886, 891)?",
      "Which Section II borderline criteria does Joanna meet at each visit, and does the Section II picture change in step with the alternative model (Ch 18, p. 752; app comparison)?"
    ]
  },
  {
    "id": "v26-05",
    "tag": "Good enough is good enough",
    "sec": "s26-ocpd",
    "dx": "ampd-ocpd",
    "stem": "Lorna, 47, a nurse supervisor at a provincial hospital in Bataan, is referred by her chief nurse after staff complaints. For as long as anyone remembers, her worth has come almost entirely from work, and she rarely shows or seems to feel strong emotion; colleagues call her ‘the wall’. She has kept using the same paper-based staffing method for two years although it fails every month and the staff have shown her its errors; she simply repeats it. Her marriage and friendships come a distant second to her shifts, and she avoids close or romantic ties outside work. She is not a perfectionist: she accepts reports with small errors (‘pwede na’), submits her own on time even when imperfect, changes plans readily when shown a better way, and does not care about neatness or detail. She worries a great deal about future problems. The resident judges impairment moderate in identity and intimacy and rates perseveration, intimacy avoidance, restricted affectivity and anxiousness as elevated.",
    "q": "Which alternative-model conclusion fits best?",
    "choices": [
      "Obsessive-compulsive PD is not met, because rigid perfectionism is mandatory and absent; if a PD is judged present, PD-TS with her trait profile applies",
      "Obsessive-compulsive PD is met, because anxiousness counts as the fourth trait",
      "Obsessive-compulsive PD is met, because two A areas are impaired and three B traits are elevated",
      "Avoidant PD is met, because anxiousness and intimacy avoidance are elevated",
      "Schizotypal PD is met, because restricted affectivity is elevated"
    ],
    "answer": 0,
    "why": "Obsessive-compulsive PD needs **three or more of four traits, one of which must be rigid perfectionism** (p. 888). Lorna has perseveration (Negative Affectivity), intimacy avoidance and restricted affectivity (Detachment), which is three of four, but **rigid perfectionism** is clearly absent, so the set is not met. Criterion A is met (identity built on work with constricted emotion; intimacy secondary to work; p. 888). **Anxiousness** is not an OCPD criterion; it can be recorded as a specifier (p. 889), and specifiers do not complete a set. If a PD is judged present, her pattern is **PD-TS**, specified by the traits found (pp. 890–891). In the criteria set, rigid perfectionism is an aspect of **extreme Conscientiousness**, the opposite pole of Disinhibition (p. 888).",
    "whyNot": [
      "Correct.",
      "Anxiousness is a possible specifier, not one of the four OCPD traits (pp. 888–889).",
      "Criterion A is met, but Criterion B still needs rigid perfectionism (p. 888).",
      "Avoidant PD needs three of four traits including anxiousness; she has anxiousness and intimacy avoidance only, two of four (p. 885).",
      "Schizotypal PD needs four of six traits; she has one (restricted affectivity) and no Psychoticism traits (p. 889)."
    ],
    "discuss": [
      "Which parts of the stem would change your rating of rigid perfectionism if a colleague described her differently (p. 888)?",
      "Section II OCPD needs four of eight criteria (Ch 18, p. 771). Would Lorna meet it, and what would the chart line be if she did not (app guidance)?"
    ]
  },
  {
    "id": "v26-06",
    "tag": "The quiet star",
    "sec": "s26-narcissistic",
    "dx": "ampd-narcissistic",
    "stem": "Miguel, 32, a songwriter in Quezon City, is shy in person and seldom speaks up in groups. Privately he believes he is far more gifted than the artists who get recognition and feels he is owed a breakthrough; he looks down on most of his peers and resents having to work as a session player. Online he posts his songs several times a day and anxiously checks for likes and praise, messaging friends to ask what they think until they compliment him. His self-image swings between brilliance and worthlessness with each reaction, and his mood follows. His goals are about being recognized; he admits he is not sure why he writes. He reads every silence as a judgment of himself but rarely notices how others feel. His relationships are thin and last only while they flatter him. Since the pandemic he has often felt down, ashamed and pessimistic and worries constantly about failing. The resident rates impairment at Level 2 and records elevated grandiosity (covert entitlement, condescension), attention seeking (admiration seeking), depressivity and anxiousness.",
    "q": "Which conclusion best fits the alternative model?",
    "choices": [
      "Narcissistic PD is not met, because grandiosity must be overt",
      "Avoidant PD, because he is shy and anxious",
      "Narcissistic PD is met with grandiosity alone, because vulnerable presentations do not need attention seeking",
      "Borderline PD, because depressivity and anxiousness are elevated",
      "Narcissistic PD is met (both grandiosity and attention seeking), with depressivity and anxiousness specified for a more vulnerable presentation"
    ],
    "answer": 4,
    "why": "Narcissistic PD needs **both** grandiosity and attention seeking (pp. 887–888). Grandiosity includes entitlement that is **overt or covert**, self-centeredness, belief in being better than others and condescension (p. 887); attention seeking includes **admiration seeking** (p. 888). Criterion A is met in at least two areas: identity (self-esteem set by others’ reactions, swinging between inflated and deflated, with mood mirroring it), self-direction (goals for approval, unaware of motives), empathy (attuned to others only as they bear on him) and intimacy (superficial ties serving self-esteem) (p. 887). Other **Negative Affectivity** traits such as depressivity and anxiousness **can be specified to record more ‘vulnerable’ presentations** (p. 888).",
    "whyNot": [
      "Entitlement may be overt or covert (p. 887).",
      "Avoidant PD needs three of four traits including anxiousness; he has anxiousness only (p. 885), and his shyness sits beside covert grandiosity and admiration seeking.",
      "Both traits are always required; the vulnerable presentation is recorded by adding Negative Affectivity specifiers, not by dropping a criterion (p. 888).",
      "Borderline PD needs four of seven traits including impulsivity, risk taking or hostility; he has two of its traits (depressivity, anxiousness) (p. 886).",
      "Correct."
    ],
    "then": {
      "q": "Over the next year his cousin, who produces his recordings, reports that Miguel quietly passed off a collaborator’s melody as his own, lied to a label about who wrote it, talked two bandmates into signing away their share, and shrugged when one of them lost his income. These patterns turn out to go back years. How does the record change?",
      "choices": [
        "Antisocial PD replaces narcissistic PD, because three Antagonism traits are added",
        "The psychopathic features specifier is added",
        "PD-TS replaces narcissistic PD, because the profile has become mixed",
        "Narcissistic PD remains; manipulativeness, deceitfulness and callousness are added as specifiers for more pervasive antagonistic features (‘malignant narcissism’), alongside the earlier Negative Affectivity specifiers",
        "The vulnerable specifiers must be removed, because malignant and vulnerable features cannot be recorded together"
      ],
      "answer": 3,
      "why": "Other **Antagonism** traits, such as **manipulativeness, deceitfulness and callousness**, are not narcissistic PD criteria but **can be specified when more pervasive antagonistic features (‘malignant narcissism’) are present** (p. 888). When a pattern matches one of the six sets, extra prominent traits are **noted as specifiers** and the diagnosis does not change (p. 891). The chapter does not say that the two kinds of specifiers exclude each other; trait specifiers record whatever additional features are present (p. 888; app reading).",
      "whyNot": [
        "Antisocial PD needs six of seven traits (p. 884); he now has three (manipulativeness, deceitfulness, callousness).",
        "The psychopathic features specifier belongs to antisocial PD (p. 885).",
        "PD-TS is for patterns that do not match a specific set (p. 891); he still meets the narcissistic set, and the extra traits are specifiers.",
        "Correct.",
        "Nothing in the chapter forbids recording both; each specifier records features that are present (p. 888; app reading)."
      ]
    },
    "discuss": [
      "How does the alternative model let the same diagnosis cover both a shy, ashamed patient and a bold, exploitative one (pp. 887–888)?",
      "For the chart, Section II narcissistic PD (F60.81) needs five of nine criteria (Ch 18, p. 760). Which of Miguel’s features would you count, and where would the specifiers go (app guidance)?"
    ]
  },
  {
    "id": "v26-07",
    "tag": "Odd long before the voices",
    "sec": "s26-schizotypal",
    "dx": "ampd-schizotypal",
    "stem": "Bayani, 30, a farmhand from Morong, Bataan, has been in remission from schizophrenia for a year on treatment after an 8-month episode with persistent voices and fixed persecutory beliefs that began at 28. His parents and his high-school adviser describe him the same way since about age 15, before any psychosis and again now: vague, roundabout and metaphor-filled speech with odd bodily sensations he finds hard to describe; a conviction that he can sense the intentions of strangers through ‘vibrations’, which his church and neighbors regard as strange rather than as a shared belief; mismatched layers of clothing and odd mannerisms; and a constant wariness that others mean him harm. His emotions show normally and he spends time with cousins whose company he enjoys. He often confuses what he feels with what others feel, his goals shift without pattern, he frequently misreads others’ motives, and he has no close relationships outside the family because of mistrust. The resident rates impairment at Level 2.",
    "q": "Can the alternative model’s schizotypal set be applied?",
    "choices": [
      "No: a schizophrenia diagnosis rules out schizotypal PD in every case",
      "No: the set needs five of six traits",
      "Yes, on clinical judgment: Criterion A (four areas) and four of six traits are met, and the features predate and persist apart from the schizophrenia, unlike the chapter’s example of schizotypal features present only during schizophrenia",
      "Yes, but only the traits seen during the psychotic episode can be counted",
      "No: Criterion F excludes it because he is taking antipsychotic medication"
    ],
    "answer": 2,
    "why": "Schizotypal PD needs **four or more of six** traits (p. 889). Bayani has **four**: cognitive and perceptual dysregulation (vague, metaphorical speech; odd sensations), unusual beliefs and experiences (sensing intentions, viewed by his community as bizarre), eccentricity, and suspiciousness. Restricted affectivity and withdrawal are absent. Criterion A areas: identity (confused self–other boundaries), self-direction (incoherent goals), empathy (misreading motives) and intimacy (no close ties because of mistrust) (p. 889). Criterion E rules out a PD when its features are **clearly an expression of another mental disorder**, and the chapter’s example is schizotypal features **present only in the context of schizophrenia** (p. 883). His features started years before the psychosis and continue in remission, so E does not exclude them on the app’s reading; the judgment remains clinical. Section II has the same idea: when its schizotypal criteria were met before schizophrenia began, ‘premorbid’ is added (Section II, p. 745).",
    "whyNot": [
      "Criterion E excludes features that are clearly an expression of the other disorder, such as features seen only during schizophrenia (p. 883); it does not bar every person with schizophrenia.",
      "The threshold is four of six (p. 889).",
      "Correct.",
      "Counting traits seen only during psychosis is exactly what Criterion E warns against (p. 883); the stable, between-episode pattern is what counts (pp. 882, 893).",
      "Criterion F concerns features attributable to a substance or another medical condition (p. 881); his pattern predates treatment."
    ],
    "discuss": [
      "Which of his beliefs would you explore further to separate unusual beliefs from culturally shared ones, and why does Criterion G matter here (p. 881; app guidance)?",
      "How would your answer change if his family said he was ordinary between episodes (p. 883)?"
    ]
  },
  {
    "id": "v26-08",
    "tag": "Some impairment, not a disorder",
    "sec": "s26-rating",
    "dx": "lpfs",
    "stem": "Celia, 36, a public-school teacher in Balanga, is seen for a generalized anxiety picture after a transfer to a new school. She has a clear sense of who she is, although under strong emotion she sometimes loses track of where her feelings end and her husband’s begin. Criticism from her principal knocks her self-esteem for a day or two before she recovers. She sets realistic goals but drives herself hard and occasionally feels torn about what she wants. She understands colleagues’ views, though she finds it hard to accept views that clash with her own. She has a lasting, warm marriage and old friendships, though she keeps her deepest feelings to herself. Since her twenties she has been quick to worry, her moods rise and fall more than most people’s, and she tends to keep at a lesson plan after it has stopped working. The resident rates personality functioning at Level 1 and judges anxiousness, emotional lability and perseveration to be elevated.",
    "q": "How should the alternative model be used in her formulation?",
    "choices": [
      "No AMPD personality disorder (every set, including PD-TS, needs Level 2 or more); record Level 1 as a global indicator of her personality functioning, with her elevated traits as context for treatment",
      "PD-TS, because PD-TS covers subthreshold presentations",
      "Borderline PD, because emotional lability and anxiousness are elevated",
      "Obsessive-compulsive PD, because perseveration is elevated",
      "Nothing about personality is recorded, because the LPFS may be used only when a PD is diagnosed"
    ],
    "answer": 0,
    "why": "Her description matches **Level 1 (some impairment)**: boundaries that blur under strong emotion, self-esteem that dips and recovers, goals sometimes over-driven or conflicted, difficulty accepting different views, and lasting relationships with some inhibition (p. 895; app synopsis). Criterion A of every AMPD PD, **including PD-TS**, requires **moderate or greater** impairment (pp. 882, 890), so no PD is diagnosed. The chapter adds that the LPFS **may serve as an overall (global) indicator** of how personality is functioning, even with no PD diagnosis or when impairment is subthreshold (p. 892). Traits and functioning add information that may help treatment planning whether or not a PD is present (p. 894).",
    "whyNot": [
      "Correct.",
      "PD-TS covers presentations with too few criteria for a specific set (p. 891), but its own Criterion A still needs moderate impairment (p. 890).",
      "Borderline PD needs Level 2 or more, four of seven traits and one of impulsivity, risk taking or hostility (p. 886); she has two traits and Level 1.",
      "Obsessive-compulsive PD needs rigid perfectionism and Level 2 or more (p. 888).",
      "The chapter explicitly allows the LPFS as a global indicator without a PD diagnosis (p. 892)."
    ],
    "discuss": [
      "What single change in her LPFS description would move her toward Level 2 (p. 896)?",
      "How might her elevated anxiousness and perseveration shape the treatment plan for her anxiety (p. 894; app guidance)?"
    ]
  },
  {
    "id": "v26-09",
    "tag": "Never once his own decision",
    "sec": "s26-pdts",
    "dx": "ampd-pd-ts",
    "stem": "Rodrigo, 52, a retired seafarer from Orani, is brought by his daughter eight months after his wife’s death. His siblings say that since his teens he relied on his parents and then on his wife for nearly every choice, from clothes to money, and went along with whatever they wanted even when he disagreed. He has no sense of what he wants for himself and no plans that someone else did not make for him. Now he phones his daughter many times a day, panics when she leaves for work, and says he could not survive alone. He worries constantly about what might go wrong and often feels down and pessimistic, though his grief has eased and he functions at home. He is not angry, reckless, impulsive, odd or withdrawn from people. The resident rates impairment at Level 2, with moderate difficulty in identity and self-direction, and records elevated submissiveness, separation insecurity, anxiousness and depressivity.",
    "q": "Which alternative-model diagnosis fits?",
    "choices": [
      "Borderline PD, because four Negative Affectivity traits are elevated",
      "Dependent PD under its own alternative-model criteria set",
      "Avoidant PD, because anxiousness is elevated",
      "PD-TS (dependent-like), specified by moderate impairment and submissiveness, separation insecurity, anxiousness and depressivity",
      "No PD: Criterion E excludes it because grief explains the picture"
    ],
    "answer": 3,
    "why": "The model has no dependent PD set: **paranoid, schizoid, histrionic and dependent PDs are represented by PD-TS**, defined by moderate or greater impairment plus the relevant trait combination (p. 891). PD-TS needs moderate impairment in **two or more** areas (here identity and self-direction) and **one or more** elevated domains or facets (p. 890); the recorded traits **are** the specifiers (p. 890). His facets are all **Negative Affectivity**; submissiveness is defined there (p. 899) and is used by none of the six specific sets (app count). For the chart, Section II dependent PD (F60.7) is used if its own criteria (five of eight) are met, with the AMPD profile in the formulation (Ch 18, p. 768; app guidance).",
    "whyNot": [
      "Only three of his traits are in the borderline set (anxiousness, separation insecurity, depressivity), and none of the required three (impulsivity, risk taking, hostility) is present (p. 886).",
      "No such set exists; dependent PD is represented through PD-TS (p. 891).",
      "Avoidant PD needs three of four traits including anxiousness; he has anxiousness only (p. 885).",
      "Correct.",
      "Informants trace the pattern to his teens, long before the loss, and it is relatively stable over time (Criterion D; p. 881); bereavement does not explain a lifelong pattern (app reading)."
    ],
    "discuss": [
      "Where in the trait model does submissiveness sit, and why might it matter that no specific set uses it (p. 899; app count)?",
      "What would you ask the siblings to confirm onset by early adulthood (p. 881)?"
    ]
  },
  {
    "id": "v26-10",
    "tag": "Everyone has an angle",
    "sec": "s26-pdts",
    "dx": "ampd-pd-ts",
    "stem": "Danilo, 44, a tricycle driver in Mariveles, comes at his wife’s insistence after quarrels with his tricycle drivers’ association. For as long as she has known him he has assumed that neighbors, fellow drivers and even relatives are out to cheat or mock him, has had no confidant, and reads hidden insults into ordinary remarks. He stays angry for days over small slights and is often irritable and mean to people he thinks wronged him. He keeps away from close ties beyond his wife and children. His speech is clear and logical, he dresses and behaves conventionally, he has no unusual beliefs or experiences, and no belief is held with delusional fixity. There is no substance use. The resident judges impairment moderate in empathy and intimacy (Level 2) and records elevated suspiciousness, hostility and intimacy avoidance.",
    "q": "Which conclusion fits the alternative model?",
    "choices": [
      "Schizotypal PD, because suspiciousness is the core schizotypal trait",
      "PD-TS (paranoid-like), specified by suspiciousness, hostility and intimacy avoidance; for the chart, Section II paranoid PD (F60.0) if its own criteria are met (app guidance)",
      "Paranoid PD under its own alternative-model criteria set",
      "Antisocial PD, because hostility is elevated",
      "No PD, because suspiciousness is a Negative Affectivity trait and cannot count"
    ],
    "answer": 1,
    "why": "Paranoid PD has **no set of its own**; it is one of the four Section II types **represented by PD-TS** (p. 891). He has moderate impairment in two areas (empathy, intimacy) and three elevated facets, which satisfies PD-TS Criteria A and B (p. 890). **Suspiciousness** is defined under **Detachment** and cross-listed under Negative Affectivity in Table 3 (p. 899); **hostility** is defined under Negative Affectivity with a see-also to Antagonism (p. 899); **intimacy avoidance** is a Detachment facet (p. 899). Without Psychoticism traits he has only one schizotypal trait (p. 889). Section II paranoid PD needs four of seven criteria (Ch 18, p. 737); charting it is app guidance.",
    "whyNot": [
      "Schizotypal PD needs four of six traits; he has one (suspiciousness) and no Psychoticism features (p. 889).",
      "Correct.",
      "The alternative model keeps only six specific sets; paranoid PD is represented by PD-TS (p. 891).",
      "Antisocial PD needs six of seven traits (p. 884); he has one (hostility).",
      "Every facet in Table 3 can count toward PD-TS Criterion B, and suspiciousness is defined under Detachment (pp. 890, 899)."
    ],
    "discuss": [
      "What features would push you to consider a psychotic disorder rather than a personality profile (p. 883; app guidance)?",
      "How would Criterion G apply if his suspicion of the association reflected real local conflict (p. 881)?"
    ]
  },
  {
    "id": "v26-11",
    "tag": "A bit of everything",
    "sec": "s26-pdts",
    "dx": "ampd-pd-ts",
    "stem": "Carla, 28, a bar manager in Olongapo, is referred by her employer’s occupational health nurse. Since her late teens her sense of herself has changed with whoever she is with, her moods swing sharply and quickly, and she often feels low and hopeless about the future. She stays angry long after minor slights and can be cutting to staff. She charms and flatters customers and coworkers to get what she wants and shows little concern when her decisions hurt her staff. She loves being the center of attention and stages scenes to keep it, though she does not see herself as better than others and is often unsure of her worth. She is not reckless or impulsive, and keeps her commitments. Her relationships are stormy and shallow, and she misreads others’ intentions. The resident rates impairment at Level 2, moderate in identity, empathy and intimacy, and records elevated emotional lability, depressivity, hostility, manipulativeness, callousness and attention seeking.",
    "q": "Which alternative-model diagnosis fits?",
    "choices": [
      "Borderline PD, because hostility, one of the required traits, is present",
      "Narcissistic PD, because attention seeking is elevated",
      "Unspecified PD, because the alternative model has no place for mixed presentations",
      "No PD, because she does not meet any of the six specific sets",
      "PD-TS (mixed presentation), specified by her LPFS level and the six elevated facets across Negative Affectivity and Antagonism"
    ],
    "answer": 4,
    "why": "Count each set (app count): borderline has **three** of seven (emotional lability, depressivity, hostility) and needs four (p. 886); narcissistic has attention seeking but **not grandiosity**, and both are required (pp. 887–888); antisocial has **three** of seven (manipulativeness, callousness, hostility) and needs six (p. 884). With moderate impairment and a pattern that differs from every specific set, the diagnosis is **PD-TS**, which covers **mixed or atypical** presentations (p. 891). There are no PD-TS subtypes; the recorded traits are the specifiers, and the chapter’s own example notes that two people with emotional lability, hostility and depressivity differ when one also has callousness (p. 890). For the chart, Section II other specified PD (F60.89) recorded with the reason, such as ‘mixed personality features’, is used if no Section II set is met (Ch 18, p. 778; app guidance).",
    "whyNot": [
      "Hostility satisfies the ‘one of three’ rule, but the borderline set still needs four traits in all, and she has three (p. 886).",
      "Narcissistic PD needs both grandiosity and attention seeking (pp. 887–888).",
      "Unspecified PD is a Section II category (Ch 18, p. 778); within the alternative model, PD-TS is designed for mixed presentations (p. 891).",
      "PD-TS exists for a PD judged present that does not match a specific set (p. 891).",
      "Correct."
    ],
    "discuss": [
      "Why did the model drop subtypes for PD-TS (p. 890)?",
      "Which two of her traits would you prioritize in treatment planning, and why (p. 894; app guidance)?"
    ]
  },
  {
    "id": "v26-12",
    "tag": "One model says yes, the other no",
    "sec": "s26-recording",
    "dx": "ampd-borderline",
    "stem": "Rhea, 25, is admitted to the psychiatry ward of a Bataan hospital after a crisis with her partner. Since her late teens her relationships have been intense and unstable, swinging between idealizing and devaluing partners, with frantic efforts to avoid being left. She often feels slighted and assumes the worst of others. Her moods shift within hours and she has frequent, intense anger. Her sense of herself is steady, she does not describe emptiness, she has never acted on sudden urges or harmed herself, and she has had no stress-related paranoid or dissociative episodes. The resident rates impairment at Level 2, moderate in empathy and intimacy, and records elevated emotional lability, anxiousness, separation insecurity and hostility. Counting Section II borderline criteria, the resident finds four of nine (abandonment efforts, unstable relationships, affective instability, intense anger).",
    "q": "What should go on the diagnosis line of the chart?",
    "choices": [
      "Borderline personality disorder, F60.3, because the alternative-model set is met",
      "‘Alternative-model borderline PD, Level 2’ with no code",
      "Unspecified personality disorder, F60.9, which is required whenever the two models disagree",
      "Other specified personality disorder, F60.89, with the reason stated (borderline features below the Section II threshold), and the AMPD profile in the formulation (app guidance)",
      "No personality diagnosis, because the Section II criteria are not met and Section III conclusions cannot be charted"
    ],
    "answer": 3,
    "why": "Rhea **meets the alternative-model borderline set**: two impaired areas (empathy, intimacy) and four of seven traits including **hostility** (p. 886). The alternative model is offered **as an alternative in Section III** (p. 881) and gives no coding instruction, so the code comes from **Section II** (app guidance). Section II borderline PD needs **five of nine** criteria (Ch 18, p. 752); she has four, so F60.3 does not apply. Other specified PD (F60.89) is used when a PD causes impairment but no specific set is met and the clinician states **why** (Ch 18, p. 778). The formulation carries ‘LPFS Level 2; emotional lability, anxiousness, separation insecurity, hostility; meets the alternative-model borderline set’ (app guidance). The two models use different thresholds, so mismatches like this are expected (app comparison).",
    "whyNot": [
      "The Section II criteria decide the code, and she meets four of nine (Ch 18, p. 752; app guidance).",
      "Section III proposals are not official diagnoses for the diagnosis line (p. 881; app guidance).",
      "Unspecified PD is for when the clinician chooses not to state the reason or lacks information (Ch 18, p. 778); here the reason can be stated, and nothing requires F60.9.",
      "Correct.",
      "She has a PD that impairs her; Section II other specified PD exists for exactly this, and the AMPD findings belong in the formulation (Ch 18, p. 778; app guidance)."
    ],
    "discuss": [
      "Write a one-line formulation that a consultant could read in ten seconds (app guidance).",
      "Which Section II criterion, if it appeared later, would change the chart line (Ch 18, p. 752)?"
    ]
  },
  {
    "id": "v26-13",
    "tag": "A review of systems for personality",
    "sec": "s26-assessment",
    "dx": "trait-model",
    "stem": "Amelia, 40, a market vendor in Balanga, is admitted with a major depressive episode. Her consultant asks the first-year resident for ‘a personality picture’ before discharge, mainly to guide follow-up; personality is not the planned focus of treatment. Amelia can complete a self-report questionnaire in Filipino with help, and her husband of 18 years visits daily and is willing to answer questions about her. The ward is busy and the resident has limited time. In her notes the resident wonders whether a trait can be called elevated without a local cutoff score.",
    "q": "Which assessment plan best follows the chapter?",
    "choices": [
      "Wait until the depression remits, because traits cannot be assessed while symptoms are present",
      "Assess only Negative Affectivity, because her presenting problem is depressive",
      "Review all five domains, at the domain level since only a general portrait is needed; collect self-report and her husband’s informant report; judge elevation against population norms and/or by clinical judgment; move to all 25 facets if personality problems become the focus of treatment",
      "Use the self-report form only, because informant reports are not part of the model",
      "Count a trait as elevated only if a formal test score passes a cutoff normed in the Philippines"
    ],
    "answer": 2,
    "why": "The chapter likens trait assessment to a **review of systems**: all five domains are reviewed even when the complaint points to one area (p. 894). The PID-5 has a **self-report** form and an **informant-report** form for people who know the patient well, such as a spouse; a detailed assessment uses both on all 25 facets, but when time does not allow, a **five-domain assessment is an acceptable clinical option** for a general portrait; when personality problems are the **focus of treatment**, facets should be assessed as well (p. 894). Deciding that a trait is elevated **could involve** comparing with **population norms and/or clinical judgment**, with testing and/or interview data supporting the judgment (p. 894). Assessing personality alongside major depressive disorder is always appropriate (p. 883); episode symptoms such as poor concentration wax and wane and are not part of trait definitions (pp. 893–894).",
    "whyNot": [
      "The chapter says it is always appropriate to assess personality in people with other disorders (p. 883) and separates waxing-and-waning symptoms from traits (pp. 893–894).",
      "The review-of-systems approach covers all five domains (p. 894).",
      "Correct.",
      "The PID-5 includes an informant-report form, and a detailed assessment uses both sources (p. 894).",
      "Elevation may be judged against norms and/or by clinical judgment supported by interview data (p. 894); no local cutoff is required by the chapter."
    ],
    "discuss": [
      "What would make you move from a domain-level portrait to a facet-level assessment for Amelia (p. 894)?",
      "How might her husband’s view and hers differ, and how would you weigh them (p. 894; app guidance)?"
    ]
  }
]);
