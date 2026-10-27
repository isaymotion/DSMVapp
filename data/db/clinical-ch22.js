/* Chapter 22 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [element, plain-language question, optional tip]   — "How to ask it" on each library page
   tx:  orientation to assessment and documentation, labeled as outside the DSM; no Stahl links (nothing here is treated with a drug)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge.
   Abuse, suicidal behavior and self-injury are handled at the level of the manual's definitions; safety and reporting
   duties are app guidance and Philippine law, labeled. */
(function () {
  var ASOF = "October 2026";
  var REASON = "Record a condition from this chapter for one of the **four reasons** on p. 821 (reason for the visit, explains a test or treatment, initiates or worsens a disorder, belongs in the management plan), never automatically, and **diagnose any mental disorder in its own right** beside it (p. 821).";
  var PRIVATE = "Ask in **private**, without the suspected perpetrator present, in plain words, and document what the person **says and what you observe** rather than conclusions (app guidance).";
  var LOCAL_ABUSE = "Philippine duties (outside the DSM; verify current law): child abuse is reported under **RA 7610** (with **RA 11648**, 2022); violence against women and their children under **RA 9262** allows protection orders; refer to the hospital’s **Women and Children Protection Unit**; confidentiality follows the **Mental Health Act (RA 11036)** and hospital protocol.";
  function care(first, points) {
    return { asOf: ASOF, first: "Outside the DSM: " + first, points: [REASON].concat(points), stahl: [] };
  }

  var SELFHARM_CARE = care("a full **suicide risk assessment** at every encounter (ideation, plan, intent, access to means, past attempts, protective factors), safety planning with the person and family, and treatment of the underlying disorder; the code documents the behavior, it does not manage the risk.", [
    "Establish **intent** directly and from circumstances; it decides between suicidal behavior and NSSI (p. 822), and it can change between episodes.",
    "Record **T14.91XA** (not the printed T14.91A) during active treatment and **T14.91XD** in follow-up; add **Z91.51** or **Z91.52** for history (p. 822; APA correction, September 2022).",
    "In the Philippines, crisis lines include the **NCMH Crisis Hotline (1553)** and **Hopeline (0917-558-4673)** (app guidance; confirm current numbers)."
  ]);
  var ABUSE_CARE = care("safety first (is the person safe to go home? are children at risk?), a careful, nonleading history, documentation of injuries with consent, and the mandated referrals and reports; use the **suspected** (T76) codes until the event is confirmed (pp. 822–823).", [
    PRIVATE,
    "Choose **A** while the person is in active treatment (emergency care, your first evaluation) and **D** in routine recovery care; add the **Z69** code when the encounter is for mental health services to the victim or the perpetrator, and the **history** code when the abuse is past (pp. 822–823).",
    LOCAL_ABUSE
  ]);
  var RELATIONAL_CARE = care("assessment of the relationship in its **behavioral, cognitive and affective** domains with both parties where safe, screening for maltreatment (which changes the codes), and referral for family, couple or parenting intervention; high expressed emotion responds to family psychoeducation.", [
    "Screen every relational problem for **force, fear, coercion or control**: these move the record to the abuse codes (pp. 826–827).",
    "Consider the child’s **developmental needs and culture** before labeling a parent-child relationship (p. 829)."
  ]);
  var PSYCHOSOCIAL_CARE = care("a social history that covers school, work, housing, food, money, migration, social support, discrimination and legal matters, with referral to social work and community resources; the codes make these problems visible in the plan.", [
    "Reactions to deployment or to a change of residence that produce symptoms are an **adjustment disorder**, not a Z code (pp. 830–831).",
    "Use the **current** codes: Z59.10 for inadequate housing (October 2023), Z59.71/Z59.72 for insufficient insurance or welfare support (October 2024) (APA updates)."
  ]);
  var ADDITIONAL_CARE = care("assessment for the disorder each condition can mask (a major depressive episode or prolonged grief disorder behind bereavement, conduct disorder or antisocial personality disorder behind antisocial behavior, mild neurocognitive disorder behind cognitive complaints, intellectual developmental disorder behind borderline functioning), then support aimed at the condition itself.", [
    "For **wandering**, code the mental disorder first, exclude **akathisia** and escape from an unwanted setting, and plan for falls and unsupervised exits (p. 834).",
    "For **nonadherence**, ask about side effects, cost, beliefs and debility before attributing it to the illness (p. 835); record **Z91.199** (APA update, October 2022).",
    "For **malingering**, document discrepancies and context; consider, do not diagnose, from the four indicators (p. 835)."
  ]);

  function sb(id, ask, tx) { return { id: id, ask: ask, tx: tx }; }
  var ABUSE_ASK_TAIL = [
    ["Confirmed or suspected", "Is the event established (disclosure with corroboration, investigation, injury pattern), or suspected?", "T74 versus T76 (pp. 822–823)."],
    ["Phase of care", "Is this active treatment (emergency care, your first evaluation) or routine follow-up?", "A versus D (pp. 822–823)."],
    ["Purpose of the encounter", "Is this visit to provide mental health services to the person as victim, or to the perpetrator?", "Z69 codes (pp. 823–828)."],
    ["Safety", "“Do you feel safe going home? Is anyone else at risk?”", "App guidance; see the care orientation."]
  ];

  SP.dxExtra = (SP.dxExtra || []).concat([
    sb("suicidal-behavior", [
      ["Behavior", "“Did you do something to try to end your life, or that could have hurt you?”", "Potentially self-injurious behavior (p. 822)."],
      ["Intent", "“At that moment, did you want to die, even a little?”", "Any intent to die, explicit or inferred (p. 822)."],
      ["Initiation", "“Did you start to do it, or did you stop or get stopped beforehand?”", "Dissuaded or changed mind before initiating: category does not apply (p. 822)."],
      ["Injury", "“Were you hurt? Did you need medical care?”", "Injury is not required (p. 822)."],
      ["History", "“Has anything like this happened before, at any time in your life?”", "Z91.51 (p. 822)."],
      ["Now", "“Are you having thoughts of ending your life now? Do you have a plan or the means?”", "Risk assessment (app guidance)."]
    ], SELFHARM_CARE),
    sb("nssi", [
      ["Behavior", "“Have you hurt yourself on purpose, for example by cutting, burning or hitting yourself?”", "Damage likely to bleed, bruise or hurt (p. 822)."],
      ["Intent", "“When you do that, are you trying to die, or is it something else?”", "Absence of suicidal intent defines NSSI (p. 822)."],
      ["Function", "“What does it do for you? What happens just before?”", "Guides treatment; not part of the definition (app guidance)."],
      ["Timing", "“When was the last time? Is it still happening?”", "R45.88 current, Z91.52 history (p. 822)."],
      ["Suicidal thoughts", "“Separately from that, have you had thoughts of ending your life?”", "Both entries can apply at different times (app guidance)."]
    ], SELFHARM_CARE),
    sb("child-physical-abuse", [
      ["Injury", "“How did this injury happen? Who was there?” (to the child, alone and age-appropriately; to the caregiver separately)", "Nonaccidental injury by a responsible person; intent to hurt is irrelevant (p. 823)."],
      ["Discipline", "“How is the child disciplined at home? Has it ever left a mark or injury?”", "Reasonable discipline without injury is not abuse (p. 823); excessive discipline is psychological abuse (p. 825)."]
    ].concat(ABUSE_ASK_TAIL), ABUSE_CARE),
    sb("child-sexual-abuse", [
      ["Disclosure", "Open, nonleading questions by a trained interviewer; do not repeat forensic interviews.", "Any sexual act for the gratification of a responsible person, including noncontact exploitation (pp. 823–824)."],
      ["Who", "Was the person a parent, caregiver or other person responsible for the child?", "Parental versus nonparental Z69 codes (p. 824)."]
    ].concat(ABUSE_ASK_TAIL), ABUSE_CARE),
    sb("child-neglect", [
      ["Needs", "“Who looks after you? Who makes sure you eat, go to school, see a doctor?”", "Deprivation of basic age-appropriate needs (p. 824)."],
      ["Supervision", "“Are you ever left alone, or in charge of younger children? For how long?”", "Lack of appropriate supervision (p. 824)."],
      ["Harm", "Weight, growth, dental and medical care, school attendance.", "Actual or reasonably potential harm (p. 824)."]
    ].concat(ABUSE_ASK_TAIL), ABUSE_CARE),
    sb("child-psychological-abuse", [
      ["Words and acts", "“What happens when adults at home are angry with you? What do they say?”", "Berating, humiliating, threatening (p. 825)."],
      ["Confinement and coercion", "“Have you ever been tied up, locked in, or made to hurt yourself?”", "Confining, coercing self-inflicted pain (p. 825)."],
      ["Discipline", "“How often, and for how long, are you punished?”", "Excessive discipline counts even below physical abuse (p. 825)."]
    ].concat(ABUSE_ASK_TAIL), ABUSE_CARE),
    sb("partner-violence-physical", [
      ["Force", "“Has your partner ever pushed, hit, restrained or physically hurt you, or made you afraid they would?”", "Force that harms, could harm, or evokes significant fear (p. 826)."],
      ["Self-protection", "“Were you defending yourself or someone else?”", "Self-protective acts are excluded (p. 826)."]
    ].concat(ABUSE_ASK_TAIL), ABUSE_CARE),
    sb("partner-violence-sexual", [
      ["Coercion", "“Have you ever been made to do something sexual you did not want to, by force or pressure?”", "Force or psychological coercion, completed or not (p. 826)."],
      ["Consent", "“Has anything sexual happened when you were unable to agree, for example asleep or intoxicated?”", "Sexual acts with a partner unable to consent (p. 826)."]
    ].concat(ABUSE_ASK_TAIL), ABUSE_CARE),
    sb("partner-neglect", [
      ["Dependency", "“What do you depend on your partner for: care, medicines, money, getting around, speaking for you?”", "Written for a partner who is extremely dependent (pp. 826–827)."],
      ["Deprivation", "“Have you gone without food, medicines, care or help you needed because your partner did not provide it?”", "Egregious act or omission with actual or potential harm (p. 826)."]
    ].concat(ABUSE_ASK_TAIL), ABUSE_CARE),
    sb("partner-abuse-psychological", [
      ["Control", "“Does your partner control your money, your phone, where you go or who you see?”", "Economic restriction, restricting movement, isolation (p. 827)."],
      ["Words", "“Does your partner humiliate, threaten or interrogate you, or make you doubt your own mind?”", "Berating, threats, “gaslighting” (p. 827)."],
      ["Access to help", "“Has your partner stopped you from getting medical, legal or police help?”", "Obstructing access to assistance (p. 827)."]
    ].concat(ABUSE_ASK_TAIL), ABUSE_CARE),
    sb("adult-abuse-nonpartner", [
      ["Who", "“Who is doing this to you? How are they related to you?”", "An adult who is not an intimate partner, such as an adult child or carer (pp. 827–828)."],
      ["Type", "“Has it been physical, sexual, or words, threats and control?”", "Same T codes as the partner categories; Z69.81/Z69.82 (p. 828)."],
      ["Capacity", "Assess cognition and decision-making capacity in older or dependent adults.", "App guidance."]
    ].concat(ABUSE_ASK_TAIL), ABUSE_CARE),
    sb("parent-child-relational", [
      ["Focus", "“Is it the relationship itself you want help with, or how it is affecting the illness?”", "Quality of the relationship, or its effect on a disorder (p. 829)."],
      ["Behavior", "“How are rules, supervision and arguments handled? Do arguments reach threats?”", "Control, overprotection, pressure, escalation, avoidance (p. 829)."],
      ["Thoughts and feelings", "“What do you think the other one intends? How do you feel about them most days?”", "Negative attributions, scapegoating; sadness, apathy, anger (p. 829)."],
      ["Caregiver", "“Who are the child’s main caregivers?”", "Biological, adoptive, foster parent, or another relative in a parental role (p. 829)."]
    ], RELATIONAL_CARE),
    sb("sibling-relational", [
      ["Pattern", "“How do you and your sibling get on, day to day? Has it affected the family or anyone’s health?”", "A pattern with impairment or symptoms (p. 829)."],
      ["Who", "Full, half-, step-, foster or adopted siblings; children or adults.", "p. 829."]
    ], RELATIONAL_CARE),
    sb("partner-relationship-distress", [
      ["Focus", "“Is the relationship the main thing you want help with?”", "Major focus is the relationship, or it affects a disorder (p. 829)."],
      ["Domains", "“How do you handle disagreements? Do you withdraw or get overinvolved? How do you read your partner’s intentions? How do you feel about them most of the time?”", "Behavioral, cognitive, affective (p. 829)."],
      ["Safety", "“Is there ever force, fear, coercion or control?”", "Moves to the abuse codes (pp. 826–827)."]
    ], RELATIONAL_CARE),
    sb("family-environment", [
      ["Living arrangement", "“Who does the child live with, and who decided that?”", "Z62.29 includes court-ordered and informal placements, group homes, orphanages (p. 829)."],
      ["Parental discord", "“How much conflict do the parents have, and does the child witness it?”", "Z62.898 (p. 830)."],
      ["Separation", "“Are the partners living apart because of the relationship, or divorcing?”", "Z63.5 (p. 830)."],
      ["Expressed emotion", "“How does the family talk about and to the patient: critical, hostile, overinvolved?”", "Z63.8 (p. 830)."]
    ], RELATIONAL_CARE),
    sb("educational-problem", [
      ["Problem", "“What is going wrong at school: reading, access, exams, grades, teachers, classmates?”", "Z55.0–Z55.9 (p. 830)."],
      ["Capacity", "“Is the performance below what you would expect from the person’s ability?”", "Underachievement Z55.3 versus a learning or intellectual disorder (app guidance)."]
    ], PSYCHOSOCIAL_CARE),
    sb("occupational-problem", [
      ["Problem", "“What is happening at work: no job, a new job, threat of losing it, the schedule, the people, the environment, harassment?”", "Z56.0–Z56.9 (pp. 830–831)."],
      ["Deployment", "“Is the problem your deployment status itself, or how you are reacting to deployment?”", "Z56.82 excludes psychological reactions, which are an adjustment disorder (p. 830)."]
    ], PSYCHOSOCIAL_CARE),
    sb("housing-problem", [
      ["Where", "“Where do you sleep most nights?”", "Shelter, motel or transitional housing = sheltered (Z59.01); a place not meant for living = unsheltered (Z59.02) (p. 831)."],
      ["Conditions", "“Is there heat or electricity, running water and a toilet, enough space, pests, noise?”", "Inadequate housing Z59.1 (now Z59.10); consider cultural norms (p. 831)."],
      ["Reaction", "“Is the problem the place, or how you are coping with the move?”", "Reactions to a change of residence are an adjustment disorder (p. 831)."]
    ], PSYCHOSOCIAL_CARE),
    sb("economic-problem", [
      ["Food and water", "“In the past month, did you run out of food or safe water?”", "Z59.41, Z58.6 (p. 832)."],
      ["Income", "“Can you cover rent, medicines and transport? What is your income?”", "Z59.5, Z59.6 (p. 832)."],
      ["Support", "“Are you entitled to PhilHealth, 4Ps or other support you are not getting, or that is not enough?”", "Z59.7 (now Z59.71/Z59.72) (p. 832; app example)."]
    ], PSYCHOSOCIAL_CARE),
    sb("social-environment-problem", [
      ["Isolation", "“Do you live alone? Do you feel lonely? Are meals and sleep regular?”", "Z60.2 (p. 832)."],
      ["Migration", "“Have you moved to a new culture or country? What is hardest about adjusting?”", "Z60.3 (p. 832)."],
      ["Exclusion", "“Is anyone bullying, humiliating or deliberately excluding you?”", "Z60.4 needs a power imbalance and recurrence (p. 832)."],
      ["Discrimination", "“Have you been treated badly because of who people think you are?”", "Z60.5, perceived or experienced (p. 832)."]
    ], PSYCHOSOCIAL_CARE),
    sb("legal-problem", [
      ["Status", "“Any convictions, time in detention, recent release, or court cases such as custody or lawsuits?”", "Z65.0–Z65.3 (pp. 832–833)."],
      ["Relevance", "“How is it affecting your treatment or your health?”", "One of the four reasons must apply (p. 821)."]
    ], PSYCHOSOCIAL_CARE),
    sb("other-psychosocial-circumstances", [
      ["Lifestyle", "“Exercise, diet, sexual risk, sleep habits: is any of these a problem you want to work on?”", "Z72.9 only when a specific focus or directly affecting course (p. 833)."],
      ["Pregnancy", "“Was this pregnancy wanted? How many pregnancies have you had?”", "Z64.0, Z64.1 (p. 833)."],
      ["Services and events", "“Any conflict with a case manager, probation officer or social worker? Have you been a victim of crime, terrorism or torture, or lived through a disaster or war?”", "Z64.4, Z65.4, Z65.5 (p. 833)."]
    ], PSYCHOSOCIAL_CARE),
    sb("health-access-history", [
      ["Access", "“Can you get to a clinic or hospital, or to the agencies you need?”", "Z75.3, Z75.4 (p. 833)."],
      ["History", "“Any past traumatic experiences, or military deployment, that matter for your care?”", "Z91.49, Z91.82 (p. 833)."]
    ], PSYCHOSOCIAL_CARE),
    sb("counseling-encounter", [
      ["Request", "“What would you like advice about: genetic risk, sex, diet, or something else?”", "Z31.5, Z70.9, Z71.3, Z71.9 (pp. 833–834)."],
      ["Genetic", "“Which relatives are affected, and whose risk are you asking about: yours, your children’s, future children’s?”", "Z31.5 (p. 833)."]
    ], PSYCHOSOCIAL_CARE),
    sb("wandering", [
      ["Pattern", "“Does the person walk off or try to leave? Where do they go, and do they know the way back?”", "Desire to walk about with safety or management concerns (p. 834)."],
      ["Intent", "“Are they trying to get away from somewhere they do not want to be?”", "Escape from an unwanted setting is excluded (p. 834)."],
      ["Akathisia", "“Any new antipsychotic or dose change? Is it an inner restlessness rather than a wish to go somewhere?”", "Pacing from akathisia is excluded (p. 834)."],
      ["Disorder", "Which mental disorder is present?", "Code it first, then Z91.83 (p. 834)."]
    ], ADDITIONAL_CARE),
    sb("uncomplicated-bereavement", [
      ["Loss", "“Who died, and when?”", "Normal reaction to a death (p. 834)."],
      ["Mood", "“Does the sadness feel normal to you, given the loss, or like something else?”", "The bereaved typically regard the mood as normal (p. 834)."],
      ["Symptoms", "“How is your sleep and appetite? Any thoughts of being better off dead, or worthlessness?”", "Screen for a major depressive episode (Chapter 4) and, after 12 months, prolonged grief disorder (Chapter 7)."],
      ["Culture", "“How is grief expressed in your family and community?”", "Duration and expression vary by culture (p. 834)."]
    ], ADDITIONAL_CARE),
    sb("phase-of-life-problem", [
      ["Transition", "“What has changed recently: school, leaving home, marriage, a new job, a child, children leaving, retirement?”", "Life-cycle transitions (p. 834)."],
      ["Reaction", "“How are you coping? Any symptoms that get in the way?”", "A symptomatic reaction may be an adjustment disorder (app guidance)."]
    ], ADDITIONAL_CARE),
    sb("religious-spiritual-problem", [
      ["Problem", "“Has something changed in your faith or beliefs: losing or questioning them, converting, or doubts about what matters spiritually?”", "p. 834."],
      ["Psychosis", "Distinguish doubt or crisis from religious delusions or hallucinations.", "App guidance."]
    ], ADDITIONAL_CARE),
    sb("antisocial-behavior", [
      ["Acts", "“What exactly happened, and how often?”", "Adults: not attributable to a disorder; children: isolated acts, not a pattern (p. 835)."],
      ["Disorder", "Screen for conduct disorder, antisocial personality disorder, intermittent explosive disorder, substance use.", "Z72.810/Z72.811 only when no disorder accounts for it (p. 835)."]
    ], ADDITIONAL_CARE),
    sb("nonadherence", [
      ["What", "“Which part of the treatment is hard to follow?”", "An important aspect of treatment (p. 835)."],
      ["Why", "“Is it the side effects, the cost, your beliefs about it, difficulty managing, or the illness itself?”", "The manual’s list of reasons (p. 835)."],
      ["Threshold", "Is it severe enough to need attention in its own right, and does PFAMC not apply?", "Both conditions on p. 835."]
    ], ADDITIONAL_CARE),
    sb("overweight-obesity", [
      ["Focus", "“Is weight something you want to address as part of your care?”", "Coded when a focus of clinical attention (p. 835)."],
      ["Contributors", "Medication effects, activity, diet, sleep, binge eating.", "App guidance."]
    ], ADDITIONAL_CARE),
    sb("malingering", [
      ["Context", "Who referred the person, and is litigation, a claim or a charge pending?", "Indicator 1 (p. 835)."],
      ["Discrepancy", "Compare reported disability with observation, records and collateral.", "Indicator 2 (p. 835)."],
      ["Cooperation", "Does the person cooperate with evaluation and treatment?", "Indicator 3 (p. 835)."],
      ["Personality", "Is antisocial personality disorder present?", "Indicator 4 (p. 835)."],
      ["Incentive", "“What would change for you if this were confirmed?”", "External incentive versus the sick role (p. 835)."]
    ], ADDITIONAL_CARE),
    sb("age-related-cognitive-decline", [
      ["Complaint", "“What do you notice: names, appointments, complex tasks?”", "p. 835."],
      ["Objective testing", "Standardized testing against age and education norms; informant history; function.", "Within normal limits for age; exclude a disorder and a neurological cause first (pp. 835–836)."]
    ], ADDITIONAL_CARE),
    sb("borderline-intellectual-functioning", [
      ["Intellectual function", "Standardized testing, interpreted with any co-occurring disorder that affects performance in mind.", "p. 836."],
      ["Adaptive function", "“How do you manage money, work, travel, relationships, self-care?”", "Both domains and their discrepancies decide versus IDD (p. 836)."]
    ], ADDITIONAL_CARE)
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "life-problem", title: "A life problem, stressor or circumstance rather than a disorder",
      intro: "First decide whether a **mental disorder** is present (diagnose it if so), then whether the circumstance should be **coded** for one of the four reasons on p. 821, then which **group** it belongs to: relational, family, education, work, housing, money, social, legal, other circumstances, or the additional conditions (pp. 821–836). Reactions to a stressor that produce symptoms and impairment are an **adjustment disorder** (Chapter 7), not a Z code.",
      ask: ["What is the problem, and how long has it been going on?", "How is it affecting your health, your treatment, or your life?", "Who is involved: family, partner, school, employer, landlord, the courts?", "Is anyone hurting, threatening or controlling you?", "Where do you live and sleep? Do you have enough food and money?", "Have you lost someone recently? Is a big life change under way?", "Any thoughts of harming yourself?"],
      mustNotMiss: ["**Abuse or neglect** behind a “relationship problem” (pp. 826–827).", "**Suicidal behavior or NSSI** (p. 822).", "A **mental disorder** that the circumstance is masking or worsening: adjustment disorder, a depressive episode, PTSD, prolonged grief disorder (app guidance).", "**Homelessness and food insecurity** that will defeat the treatment plan (pp. 831–832)."],
      helpers: ["psychosocial", "trauma"],
      items: [
        { ch: "ch22", dx: "partner-relationship-distress", when: "The couple’s relationship is the focus, with no force, fear or control." },
        { ch: "ch22", dx: "parent-child-relational", when: "Conflict, overcontrol, overprotection or estrangement between a child and a parent or caregiver." },
        { ch: "ch22", dx: "family-environment", when: "A child raised away from parents, parental discord affecting a child, separation or divorce, high expressed emotion." },
        { ch: "ch22", dx: "occupational-problem", when: "Unemployment, job change, threat of job loss, schedule, discord or harassment at work; deployment status." },
        { ch: "ch22", dx: "educational-problem", when: "Literacy, access to schooling, exams, underachievement, discord at school." },
        { ch: "ch22", dx: "housing-problem", when: "Homelessness (sheltered or unsheltered), inadequate housing, discord with a landlord or neighbor, institutional living." },
        { ch: "ch22", dx: "economic-problem", when: "Food insecurity, no safe water, poverty, low income, insufficient insurance or welfare support." },
        { ch: "ch22", dx: "social-environment-problem", when: "Living alone, acculturation difficulty, bullying or exclusion, discrimination." },
        { ch: "ch22", dx: "legal-problem", when: "Conviction, detention, release from prison, custody or civil proceedings." },
        { ch: "ch22", dx: "other-psychosocial-circumstances", when: "Lifestyle problems, unwanted pregnancy, discord with services, victim of crime or disaster." },
        { ch: "ch22", dx: "phase-of-life-problem", when: "Difficulty with a life-cycle transition: leaving home, marriage, parenthood, empty nest, retirement." },
        { ch: "ch22", dx: "religious-spiritual-problem", when: "Loss or questioning of faith, conversion, spiritual doubt." },
        { ch: "ch07", dx: "adjustment", when: "Emotional or behavioral symptoms within 3 months of the stressor, out of proportion or impairing: a disorder, not a Z code." },
        { ch: "ch20", dx: "no-diagnosis", when: "Full evaluation, no disorder and no problem needing attention." }
      ]
    },
    {
      id: "self-harm-behavior", title: "Suicide attempt or self-injury: documenting the behavior",
      intro: "Manage **risk** first. Then document the behavior: **suicidal behavior** needs at least some **intent to die** and an **initiated** act (injury not required; a person dissuaded or who changed their mind before initiating does not get the code); **nonsuicidal self-injury** is self-inflicted damage likely to bleed, bruise or hurt **without** suicidal intent (p. 822). Both are conditions, not disorders; diagnose the mental disorder separately.",
      ask: ["What did you do, and when?", "At that moment, did you want to die, even partly?", "Did you start, or did you stop or get stopped before?", "Were you injured?", "Has this happened before, ever?", "Are you having these thoughts now? Do you have a plan or the means?"],
      mustNotMiss: ["**Current risk**: ideation, plan, intent, means, recent discharge, intoxication (app guidance).", "The **underlying disorder**: depressive, bipolar, psychotic, borderline personality, substance use (app guidance).", "**Abuse or violence** at home (pp. 826–827).", "**Akathisia** after a recent antipsychotic change, which the manual links to suicide attempts (Chapter 21, p. 813)."],
      helpers: ["psychosocial", "depressive"],
      items: [
        { ch: "ch22", dx: "suicidal-behavior", when: "Self-endangering behavior initiated with some intent to die: T14.91XA in active treatment, T14.91XD in follow-up, Z91.51 for history." },
        { ch: "ch22", dx: "nssi", when: "Self-inflicted damage likely to bleed, bruise or hurt, without suicidal intent: R45.88 current, Z91.52 history." },
        { ch: "ch04", dx: "mdd", when: "A major depressive episode behind the behavior." },
        { ch: "ch18", dx: "borderline-pd", when: "Recurrent self-injury or suicidal behavior within a pattern of unstable relationships, self-image and affect." },
        { ch: "ch21", dx: "medication-induced-acute-akathisia", when: "Restlessness and dysphoria after an antipsychotic start or increase." }
      ]
    },
    { id: "suicidal", title: "Suicidal thoughts", items: [
      { ch: "ch22", dx: "suicidal-behavior", when: "An attempt was made: document T14.91XA/XD (current) or Z91.51 (history) beside the diagnosis." },
      { ch: "ch22", dx: "nssi", when: "Self-injury without intent to die: R45.88 or Z91.52." }
    ] },
    { id: "after-loss", title: "Grief or low mood after a death", items: [
      { ch: "ch22", dx: "uncomplicated-bereavement", when: "A normal grief reaction, felt as normal by the person, perhaps with insomnia or poor appetite; Z63.4." }
    ] },
    { id: "neglected-child", title: "A young child after neglect or institutional care", items: [
      { ch: "ch22", dx: "child-neglect", when: "Document the neglect itself: T74.02XA/XD confirmed, T76.02XA/XD suspected, Z69.010/Z69.020 for the encounter, Z62.812 for history." },
      { ch: "ch22", dx: "family-environment", when: "The child is being raised away from the parents (kin or foster care, group home): Z62.29." }
    ] },
    { id: "feigned", title: "Suspected feigned or induced illness", items: [
      { ch: "ch22", dx: "malingering", when: "An external incentive (compensation, prosecution, duty, drugs) with any of the four indicators; Z76.5, not a disorder." }
    ] },
    { id: "memory-older", title: "Memory complaints with low mood in an older adult", items: [
      { ch: "ch22", dx: "age-related-cognitive-decline", when: "Objective performance within normal limits for age after a disorder and a neurological cause are excluded; R41.81." }
    ] },
    { id: "learning-problems", title: "Struggling at school with reading, writing or math", items: [
      { ch: "ch22", dx: "educational-problem", when: "The problem is access, teaching, exams or discord rather than a learning disorder: Z55.-." },
      { ch: "ch22", dx: "borderline-intellectual-functioning", when: "Intellectual and adaptive functioning below average but not meeting intellectual developmental disorder; R41.83." }
    ] },
    { id: "rule-breaking", title: "Rule-breaking, aggression or law-breaking", items: [
      { ch: "ch22", dx: "antisocial-behavior", when: "Antisocial acts in an adult not attributable to a disorder (Z72.811)." },
      { ch: "ch22", dx: "legal-problem", when: "Conviction, detention or release from prison is affecting care (Z65.0–Z65.2)." }
    ] },
    { id: "conduct-problems", title: "Aggression, lying, stealing or truancy in a child or teen", items: [
      { ch: "ch22", dx: "antisocial-behavior", when: "Isolated antisocial acts, not a pattern, with no disorder (Z72.810)." },
      { ch: "ch22", dx: "child-psychological-abuse", when: "The behavior sits alongside berating, threats, confinement or excessive discipline at home." }
    ] },
    { id: "stress-reaction", title: "Struggling after a life change or stressor", items: [
      { ch: "ch22", dx: "phase-of-life-problem", when: "Difficulty with a life-cycle transition without the symptoms or impairment of an adjustment disorder (Z60.0)." },
      { ch: "ch22", dx: "occupational-problem", when: "The stressor is work or deployment status itself, without a symptomatic reaction." }
    ] }
  ]);
})();
