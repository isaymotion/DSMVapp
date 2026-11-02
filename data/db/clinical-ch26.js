/* Chapter 26 clinical extras (Section III, Alternative DSM-5 Model for Personality Disorders, pp. 881–902; p. 902 is blank),
   merged into the disorder library when the app loads (js/practice.js).
   ask: [element, plain-language question, tip]   — "How to ask it" on each library page; tips carry their page
   tx:  orientation only, every line labeled as outside the DSM / app guidance; Stahl links only where a Stahl page exists
        (the Stahl companion has no personality disorder chapter; links point to comorbidity or impulsivity pages)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge.
   The AMPD is an ALTERNATIVE model in Section III (p. 881): its sets are not the official criteria. The chart carries the
   Section II personality disorder and its ICD-10-CM code (Ch 18); the LPFS level and trait profile go in the formulation
   (app guidance; the chapter gives no coding instruction). The LPFS (Table 2), the trait taxonomy (Table 3) and the PID-5 are
   described in the app's own words, never read out. Self-harm is handled in the chapter's own general terms only. */
(function () {
  var ASOF = "November 2026";
  var SEC3 = "Section III alternative model: these sets are an **alternative**, not the official criteria (p. 881). Chart the **Section II personality disorder and its ICD-10-CM code** (Ch 18) on the diagnosis line, and write the **LPFS level and trait profile** in the formulation; which code to chart is app guidance, since the chapter gives no coding instruction.";
  var CRISIS = "When thoughts of suicide or self-harming behavior under distress come up, ask about them directly and plan for safety; the Philippine **NCMH Crisis Hotline** is **1553** (toll-free from landlines) or **1800-1888-1553**; **0919-057-1553** (Smart/TNT); **0917-899-8727** and **0966-351-4518** (Globe/TM) (app guidance; confirm current numbers before giving them out).";
  var NOAPPROVED = "Medication: for borderline personality disorder the APA 2024 guideline found no evidence that any medicine treats the core symptoms and advises that any psychotropic be time-limited, aimed at a measurable target symptom and adjunctive to psychotherapy; a 2022 Cochrane review found no drug effective for borderline pathology itself (outside the DSM). Extending this to other personality disorders is app guidance; not verified in this session.";
  var APA24 = "APA practice guideline for borderline personality disorder (December 2024): a **structured psychotherapy** with literature support that targets the core features, with **no single gold-standard** therapy; no evidence that any medication treats the core symptoms; any psychotropic should be **time-limited, aimed at a measurable target and adjunctive** to psychotherapy, with medications reconciled at least **every 6 months** (outside the DSM).";
  var COCH20 = "Cochrane psychotherapy review (Storebø et al. 2020; 75 trials): **DBT** and **MBT** were the most studied; DBT reduced severity and self-harm and improved functioning versus usual care, MBT reduced self-harm and suicidality, all at **low certainty** (outside the DSM).";
  var COCH22 = "Cochrane pharmacotherapy review (Stoffers-Winterling et al. 2022; 46 trials): **no clear benefit** over placebo on severity, self-harm, suicide-related outcomes or functioning (mostly very low certainty) (outside the DSM).";
  var NICE = "NICE CG78 (2009, as summarized in a review): do not use drugs specifically for the disorder or its individual symptoms; avoid antipsychotics for medium- or long-term treatment; short-term sedation in a crisis for no more than a week; treat comorbid disorders by their own guidance (outside the DSM).";
  var SEVERITY = "**Severity sets intensity**: a Level 3–4 LPFS rating argues for a structured, longer, team-based program, while Level 2 may be managed with a time-limited structured therapy and a clear crisis plan (app guidance). The manual notes that generalized severity **may be the most important single predictor** of present and future dysfunction (p. 891).";
  var RERATE = "**Re-rate the LPFS** at follow-up: the rating describes current overall functioning at a point in time (p. 892), so it works as a progress measure alongside the WHODAS (app guidance).";
  function care(first, points, stahl) {
    return { asOf: ASOF, first: "Outside the DSM / app guidance: " + first, points: [SEC3].concat(points), stahl: stahl || [] };
  }

  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "ampd-general",
      ask: [
        ["A Identity", "“How would you describe yourself to someone who has never met you? Does that picture stay the same from week to week, and how do you handle strong feelings?”", "Identity covers a clear sense of self with boundaries, steady self-esteem and an accurate self-view, and the range and control of emotion (Table 1, p. 883)."],
        ["A Self-direction", "“What are you working toward this year, and in life? What rules do you live by? When things go wrong, can you look back and see your own part?”", "Self-direction: coherent goals, constructive inner standards and useful self-reflection (Table 1, p. 883)."],
        ["A Empathy", "“Think of someone you argued with recently. What do you think was going on for them? How do you think you came across?”", "Empathy: grasping others’ experiences and motives, tolerating views unlike your own, and seeing your effect on others (Table 1, p. 883)."],
        ["A Intimacy", "“Who are the people you are closest to? How long have those relationships lasted, and does the closeness go both ways?”", "Tagalog aside: “Sino ang pinakamalapit sa iyo? Pareho ba kayong nagmamalasakit sa isa’t isa?” Intimacy: depth and duration of ties, wish and capacity for closeness, mutual regard (Table 1, p. 883). Moderate or greater impairment overall is needed (pp. 881–882)."],
        ["B Traits", "Run the five-domain review: mood and worry, social distance, conflict with others, self-control, and unusual experiences (see the trait model page).", "One or more pathological traits are required (p. 881); the trait evaluation is the second of the “two determinations” (p. 882)."],
        ["C Pervasive", "“Does this happen at home, at work, with friends and in the barangay, or only in one place or with one person?”", "Relatively inflexible and present across a broad range of situations; “relatively” because nearly everyone shows some adaptability (pp. 881–882)."],
        ["D Stable, early onset", "“Were you like this in high school and in your early twenties?” Ask an informant who knew the person then.", "Relatively stable, traceable to at least adolescence or early adulthood (p. 881)."],
        ["E Other mental disorder", "“Were things different before the depression, the voices or the high periods began?”", "Not when the features are clearly part of another disorder (e.g., schizotypal features only within schizophrenia); a PD can still sit alongside MDD (pp. 881, 883)."],
        ["F Substance or medical", "“Any drinking or drug use, head injury, seizures or other illness before this pattern?”", "Not solely due to a substance or a medical condition such as severe head trauma (p. 881); a new change in later life points to personality change due to another medical condition (Ch 18; app guidance)."],
        ["G Development and culture", "“In your family and community, is this how most people your age would act?”", "Tagalog aside: “Ganito rin ba ang karaniwan sa pamilya at komunidad ninyo?” Not better seen as normal for the developmental stage or sociocultural setting (p. 881); pakikisama and deference to elders are not traits by themselves (app guidance)."],
        ["Specifying", "Record the LPFS level and the elevated domains or facets, then decide whether one of the six sets fits or PD-TS applies.", "A matching pattern gets the specific PD; a substantially different one gets PD-TS (p. 891)."]
      ],
      tx: care("start from the **two determinations**: how impaired self and interpersonal functioning are (LPFS) and which traits are elevated (p. 882). The level guides how much treatment is needed and the traits guide what it targets; the evidence base for treatment is mostly for **borderline personality disorder** (outside the DSM).", [
        SEVERITY,
        "**Traits set targets**: elevated anxiousness or depressivity suggests comorbid anxiety or depressive disorders to look for; impulsivity and risk taking call for safety planning; suspiciousness and hostility predict a rocky alliance to plan around (app guidance).",
        "PDs often affect the course of other disorders, so assess personality in people being treated for other conditions (p. 883); the profile informs treatment type and intensity and prognosis (p. 894; app guidance).",
        NOAPPROVED,
        RERATE,
        CRISIS
      ], [])
    },
    {
      id: "ampd-antisocial",
      ask: [
        ["A Identity", "“What makes you feel good about yourself? Winning, money, being in control, having a good time?”", "Self-centred; self-esteem drawn from gain, power or pleasure (p. 884)."],
        ["A Self-direction", "“How do you decide what is right for you to do? Do laws or company rules matter to you if no one is watching?”", "Goals driven by personal gratification; no prosocial inner standards; failure to keep to lawful or culturally expected ethics (p. 884)."],
        ["A Empathy", "“When someone got hurt because of something you did, what went through your mind afterward?”", "Little concern for others’ feelings, needs or suffering; no remorse after hurting or mistreating someone (p. 884)."],
        ["A Intimacy", "“In your relationships, who usually gets their way? How do you get people to do what you want?”", "No capacity for mutual closeness; exploitation, deceit, coercion, dominance or intimidation as ways of relating (p. 884). Two or more of the four A areas (p. 884)."],
        ["B1 Manipulativeness (Antagonism)", "“Are you good at talking people into things? Do you use charm to get what you want?”", "Influencing or controlling others through charm, glibness or subterfuge (pp. 884, 900)."],
        ["B2 Callousness (Antagonism)", "“How do you feel about people who get hurt or lose out? Have you ever enjoyed seeing someone suffer?”", "Lack of concern for others, no guilt; includes aggression and sadism (pp. 884, 900)."],
        ["B3 Deceitfulness (Antagonism)", "“How often do you lie, use another name, or make stories bigger than they are?”", "Dishonesty, fraud and misrepresenting oneself (pp. 884, 900). Collateral and records matter most here (app guidance)."],
        ["B4 Hostility (Antagonism in this set)", "“How quickly do you get angry when someone disrespects you? Do you get even?”", "Frequent anger or irritability over small slights, vengefulness. Labeled Antagonism in this set but defined under Negative Affectivity in Table 3 (pp. 884, 899)."],
        ["B5 Risk taking (Disinhibition)", "“Do you do dangerous things for the thrill, or because you are bored? Fast driving, fights, betting?”", "Includes boredom proneness and thoughtless starting of activities (pp. 884, 900)."],
        ["B6 Impulsivity (Disinhibition)", "“Do you act first and think later? Do your plans usually fall through?”", "Acting on the spur of the moment without a plan (pp. 884, 900)."],
        ["B7 Irresponsibility (Disinhibition)", "“How long have you kept jobs? Do you pay back utang and keep your promises?”", "Tagalog aside: “Nababayaran mo ba ang utang mo?” Disregard for financial and other obligations (pp. 885, 900). Six or more of the seven B traits (p. 884)."],
        ["C–G and age", "“Has this been true since your teens, everywhere, and also when sober and not in a high mood?”", "At least 18 years old (p. 885); C–G apply to all six PDs (p. 884); exclude behavior only during substance use or manic episodes (app guidance)."],
        ["Specifier: psychopathic features", "Notice the style: calm under threat, socially bold, comfortable being the centre of attention.", "Specify with psychopathic features for low anxiousness and low withdrawal with high attention seeking; this bold style may mask fraudulence (p. 885). The LPFS level can also be specified (p. 885)."]
      ],
      tx: care("focus on **risk management** and on treating comorbid disorders such as substance use; the evidence for structured programs aimed at aggression and offending was not reviewed for this chapter (app guidance; not verified in this session; see the Ch 18 treatment bridge).", [
        "Assess **violence risk** (weapons, partners, children) and suicide risk at each contact (app guidance).",
        "A **psychopathic features** specifier (low anxiousness, low withdrawal, high attention seeking; p. 885) warns that a confident, engaging manner may hide deceit; rely on records and informants (app guidance).",
        SEVERITY,
        "**Traits set targets**: impulsivity and risk taking for safety planning and substance treatment; hostility for anger work; deceitfulness for collateral checks and careful prescribing (app guidance).",
        NOAPPROVED + " Prescribe drugs that can be misused with care (app guidance; not verified in this session).",
        RERATE
      ], [["Impulse control disorders and violence", "c/ch13/guide/s13-impulse"]])
    },
    {
      id: "ampd-avoidant",
      ask: [
        ["A Identity", "“How do you see yourself next to other people? Do you often feel ashamed or not good enough?”", "Low self-esteem, a view of oneself as inept, unappealing or inferior, strong shame (p. 885)."],
        ["A Self-direction", "“Have you held back from a course, a job or a promotion because it meant meeting new people?”", "Unrealistic standards, with reluctance to pursue goals, take risks or try activities that involve people (p. 885)."],
        ["A Empathy", "“When people look at you or talk to you, what do you think they are thinking about you?”", "Preoccupied with and sensitive to criticism or rejection; assumes others judge negatively (p. 885)."],
        ["A Intimacy", "“Would you like closer friends or a partner? What holds you back?”", "Tagalog aside: “Gusto mo bang magkaroon ng mas malapit na kaibigan? Ano ang pumipigil sa iyo?” Holds back unless sure of being liked; fear of shame or ridicule limits mutuality (p. 885). Two or more A areas (p. 885)."],
        ["B1 Anxiousness (required)", "“How nervous do you get before you meet people or speak up? What are you afraid will happen?”", "Strong nervousness or tension, often about social situations and embarrassment. Three or more of the four B traits, one of which must be anxiousness (p. 885)."],
        ["B2 Withdrawal (Detachment)", "“Do you choose to be alone? Do you stay quiet in groups?”", "Reticence and avoidance of social contact and activity (pp. 885, 899)."],
        ["B3 Anhedonia (Detachment)", "“What do you still enjoy? Do you have the energy to do things for fun?”", "Little enjoyment of, interest in or energy for life (pp. 886, 899)."],
        ["B4 Intimacy avoidance (Detachment)", "“Have you avoided dating or close relationships, even when you were interested?”", "Avoidance of close or romantic ties and sexual relationships (pp. 886, 899). Three or more of the four B traits (p. 885)."],
        ["C–G", "“Has this been true since your teens, in every setting? Are you shy mostly in one situation, like public speaking?”", "C–G apply (p. 884). Fear tied to one performance situation points to social anxiety disorder (app guidance)."],
        ["Specifiers", "Note other negative-affect traits: low mood, fear of losing people, giving in to others, mistrust, anger.", "Considerable heterogeneity; depressivity, separation insecurity, submissiveness, suspiciousness or hostility can be specified, and so can the LPFS level (p. 886)."]
      ],
      tx: care("psychotherapy that targets avoidance, social skills and beliefs of inferiority, with treatment of any comorbid social anxiety or depressive disorder by its own guidance (app guidance; not verified in this session; see the Ch 18 treatment bridge).", [
        "**Traits set targets**: anxiousness points to comorbid social anxiety or other anxiety disorders; anhedonia or a specified depressivity points to depression to treat (app guidance).",
        SEVERITY,
        "Expect avoidance of the therapy itself: missed visits, quiet sessions, fear of being judged by the clinician; name it early and agree on small steps (app guidance).",
        NOAPPROVED,
        RERATE
      ], [["Social anxiety disorder", "c/ch08/guide/s8-social"], ["SSRIs", "c/ch07/guide/s7-ssri"]])
    },
    {
      id: "ampd-borderline",
      ask: [
        ["A Identity", "“Do you have a clear sense of who you are, or does it shift a lot? Do you often feel empty, or very critical of yourself? Under stress, do you feel unreal or cut off?”", "Poorly developed or unstable self-image, harsh self-criticism, chronic emptiness, dissociation under stress (p. 886)."],
        ["A Self-direction", "“How often have your goals, plans for work or study, or values changed in the past few years?”", "Unstable goals, aspirations, values or career plans (p. 886)."],
        ["A Empathy", "“How easily do you feel slighted or insulted? When that happens, what do you think the other person meant?”", "Hard to read others’ feelings and needs, hypersensitive to slights, sees others selectively in a negative light (p. 886)."],
        ["A Intimacy", "“Tell me about your closest relationships. Do they swing from very close to very bad? What happens inside you when someone important might leave?”", "Tagalog aside: “Ano ang nararamdaman mo kapag parang iiwan ka ng mahalagang tao?” Intense, unstable, conflicted ties; mistrust, neediness, worry about real or imagined abandonment; idealizing and devaluing (p. 886). Two or more A areas (p. 886)."],
        ["B1 Emotional lability (NA)", "“How quickly do your feelings change, and how strong do they get compared with what set them off?”", "Unstable emotions and frequent mood shifts, out of proportion to events (pp. 886, 899)."],
        ["B2 Anxiousness (NA)", "“Do you get very tense or panicky? Do you fear falling apart or losing control?”", "Includes fears of falling apart or losing control (pp. 886, 899)."],
        ["B3 Separation insecurity (NA)", "“How do you feel when you are apart from the people you depend on?”", "Fear of rejection by or separation from significant others (pp. 886, 899)."],
        ["B4 Depressivity (NA)", "“Do you often feel down, hopeless or ashamed? Have you had thoughts of ending your life?”", "Includes pervasive shame, low self-worth, and thoughts of suicide and suicidal behavior (p. 887). Ask directly the same day (app guidance)."],
        ["B5 Impulsivity (Disinhibition)", "“When you are very upset, do you do things on the spot that you regret, including hurting yourself?”", "Includes urgency and self-harming behavior under emotional distress (p. 887)."],
        ["B6 Risk taking (Disinhibition)", "“Do you do dangerous things without thinking about what could happen to you?”", "Unnecessary, potentially self-damaging activities without regard to consequences (pp. 887, 900)."],
        ["B7 Hostility (Antagonism in this set)", "“How often do you feel angry or irritable, even over small things?”", "Labeled Antagonism here but defined under Negative Affectivity in Table 3 (pp. 887, 899). Four or more of the seven B traits, with at least one of impulsivity, risk taking or hostility (p. 886)."],
        ["C–G", "“Has this been your pattern since your teens, in every setting, and also between mood episodes and when not using?”", "C–G apply (p. 884); screen for bipolar episodes, PTSD and substance use (app guidance)."],
        ["Specifiers", "“Under stress, do you hear things, feel watched, or have odd experiences that pass when you calm down?”", "Psychoticism traits such as cognitive and perceptual dysregulation are not criteria but can be specified; so can the LPFS level (p. 887)."]
      ],
      tx: care("a **structured psychotherapy** with literature support that targets the core features (DBT and MBT are the most studied), with comorbid disorders treated by their own guidance (outside the DSM; APA 2024, Cochrane 2020, NICE CG78 as summarized). A written crisis plan and psychoeducation are app guidance; not verified in this session (see the Ch 18 treatment bridge).", [
        APA24,
        COCH20,
        COCH22,
        NICE,
        SEVERITY,
        "**Traits set targets**: impulsivity and risk taking for safety planning; depressivity for comorbid depression and suicide-risk review; hostility for a planned alliance (app guidance).",
        RERATE,
        CRISIS
      ], [["Impulse control disorders and violence", "c/ch13/guide/s13-impulse"]])
    },
    {
      id: "ampd-narcissistic",
      ask: [
        ["A Identity", "“What helps you feel good about yourself? How do you feel after praise, and after criticism?”", "Self-definition and self-esteem rely heavily on others; self-view may be inflated, deflated or swing between the two; mood follows self-esteem (p. 887)."],
        ["A Self-direction", "“What are your goals? How much do they depend on what others will think? Do ordinary rules apply to you?”", "Goals aimed at approval; standards either very high (to be exceptional) or too low (entitlement); often unaware of own motives (p. 887)."],
        ["A Empathy", "“When your partner or a coworker was upset recently, what was it about for them?”", "Notices others mainly when it bears on the self; over- or underestimates own effect on others (p. 887)."],
        ["A Intimacy", "“What do you get from your closest relationships? What do the other people get?”", "Mostly superficial ties that serve self-esteem, with little real interest in the other person (p. 887). Two or more A areas (p. 887)."],
        ["B1 Grandiosity (required)", "“How do you compare with others in your field? Do you feel you deserve special treatment?”", "Overt or covert entitlement, self-centredness, belief in being better than others, condescension (p. 887). Both B traits are required (p. 887)."],
        ["B2 Attention seeking (required)", "“How important is it that people notice you and admire what you do?”", "Tagalog aside: “Mahalaga ba sa iyo na napapansin at hinahangaan ka?” Excessive efforts to be noticed and admired (p. 888)."],
        ["C–G", "“Has this been true since your teens, everywhere? Any periods of very high mood and little sleep?”", "C–G apply (p. 884); exclude grandiosity confined to hypomanic or manic episodes (app guidance)."],
        ["Specifiers", "Note manipulation, deceit or callousness (“malignant” picture), or low mood and anxiety (“vulnerable” picture).", "Other Antagonism traits can be specified for more pervasive antagonism; depressivity or anxiousness for vulnerable presentations; the LPFS level too (p. 888). Both B traits are still required (app guidance)."]
      ],
      tx: care("psychotherapy aimed at **self-esteem regulation** and empathy, expecting ruptures and addressing them directly, and treatment of comorbid depression and substance use (app guidance; not verified in this session; see the Ch 18 treatment bridge).", [
        "**Traits set targets**: specified depressivity or anxiousness (a vulnerable picture) points to comorbid mood or anxiety disorders; specified callousness or deceitfulness (a malignant picture) calls for risk review and firm limits (p. 888; app guidance).",
        SEVERITY,
        "Assess suicide risk after failures, losses or humiliation (app guidance; not verified in this session).",
        NOAPPROVED,
        RERATE
      ], [])
    },
    {
      id: "ampd-ocpd",
      ask: [
        ["A Identity", "“How much of who you are comes from your work and getting things done? How easy is it for you to show strong feelings?”", "Sense of self mainly from work or productivity; strong emotions held in (p. 888)."],
        ["A Self-direction", "“Do you miss deadlines because the work is not yet good enough? Are your standards higher than other people’s?”", "Rigid, very high standards that block finishing tasks; overly conscientious and moralistic (p. 888)."],
        ["A Empathy", "“When coworkers or family do things differently from you, how do you understand why?”", "Trouble understanding and appreciating others’ ideas, feelings or behavior (p. 888)."],
        ["A Intimacy", "“How do work and your rules affect your marriage, family and friends?”", "Tagalog aside: “Naaapektuhan ba ng trabaho at mga patakaran mo ang pamilya mo?” Relationships come after work; rigidity and stubbornness strain them (p. 888). Two or more A areas (p. 888)."],
        ["B1 Rigid perfectionism (required)", "“Must things be done one right way, every detail perfect, even if that makes you late?”", "An aspect of extreme Conscientiousness, the opposite pole of Disinhibition. Three or more of the four B traits, one of which must be rigid perfectionism (p. 888)."],
        ["B2 Perseveration (NA)", "“Do you keep at a task the same way long after it has stopped working?”", "Persistence after the approach has failed (pp. 888, 899)."],
        ["B3 Intimacy avoidance (Detachment)", "“Do you keep away from close or romantic relationships?”", "pp. 888, 899."],
        ["B4 Restricted affectivity (Detachment)", "Observe, and ask: “Do people tell you that you seem cold or hard to read?”", "Little emotional reaction or expression (pp. 888, 899). Three or more of the four B traits (p. 888)."],
        ["C–G", "“Has this been true since your teens? Do you have unwanted thoughts you neutralize with rituals? Are these standards shared by your church or community?”", "C–G apply (p. 884); true obsessions point to OCD; shared religious or cultural standards are weighed under G (p. 881; app guidance)."],
        ["Specifiers", "Note worry and tension, or other traits that stand out.", "Anxiousness, for example, can be specified, and so can the LPFS level (p. 889)."]
      ],
      tx: care("psychotherapy targeting perfectionism, rigidity and work–life balance; the traits are often felt as right, so start from the distress or costs they cause; treat comorbid OCD, depression and anxiety by their own guidance (app guidance; not verified in this session; see the Ch 18 treatment bridge).", [
        "**Traits set targets**: rigid perfectionism and perseveration for flexibility work; restricted affectivity and intimacy avoidance for couple or family sessions; a specified anxiousness for comorbid anxiety (app guidance).",
        SEVERITY,
        NOAPPROVED,
        RERATE
      ], [["OCD", "c/ch13/guide/s13-ocd"]])
    },
    {
      id: "ampd-schizotypal",
      ask: [
        ["A Identity", "“Do you ever feel unsure where you end and other people begin? Do people say your feelings don’t match what is happening?”", "Blurred self–other boundaries, distorted self-concept, emotion out of keeping with the context (p. 889)."],
        ["A Self-direction", "“What are your plans for the next few years? What guides your choices?”", "Unrealistic or incoherent goals; no clear inner standards (p. 889)."],
        ["A Empathy", "“How do people react to you? Why do you think they act the way they do toward you?”", "Marked trouble seeing one’s effect on others; frequent misreading of others’ motives (p. 889)."],
        ["A Intimacy", "“Who do you feel close to? Do you trust them?”", "Tagalog aside: “May pinagkakatiwalaan ka bang malapit sa iyo?” Marked impairment in close relationships with mistrust and anxiety (p. 889). Two or more A areas (p. 889)."],
        ["B1 Cognitive and perceptual dysregulation", "Listen for vague, wandering or overelaborate speech, and ask: “Do you have odd sensations in your body, or feel unreal or detached?”", "Psychoticism: odd thought processes and speech, odd sensations (pp. 889, 901)."],
        ["B2 Unusual beliefs and experiences", "“Do you have special abilities, like knowing what others think or making things happen by thinking of them? Do you sense a presence?”", "Tagalog aside: “May kakayahan ka bang hindi pangkaraniwan?” Psychoticism (pp. 889, 901). Weigh local beliefs about spirits and anting-anting under G (app guidance)."],
        ["B3 Eccentricity", "Observe dress, manner and speech; ask: “Do people say you are different or strange?”", "Odd or unusual behavior, appearance or speech (pp. 889, 901)."],
        ["B4 Restricted affectivity (Detachment)", "Observe facial expression and tone during an emotional topic.", "pp. 889, 899."],
        ["B5 Withdrawal (Detachment)", "“Do you prefer to be on your own? Do you avoid groups and gatherings?”", "pp. 889, 899."],
        ["B6 Suspiciousness (Detachment)", "“Do you expect people to want to harm you or use you? Do you doubt their loyalty?”", "Expecting ill intent; listed under Detachment in this set and in Table 3 (pp. 889, 899). Four or more of the six B traits (p. 889)."],
        ["C–G", "“Have you been like this since your teens? Have you ever been sure of these beliefs for weeks, or heard voices clearly?”", "C–G apply (p. 884); not when present only within schizophrenia (p. 883)."],
        ["Specifiers", "Note low mood or worry.", "Negative Affectivity traits such as depressivity or anxiousness can be specified, and so can the LPFS level (pp. 889–890)."]
      ],
      tx: care("**supportive psychotherapy**, social skills work and a predictable, respectful stance, with follow-up for emerging psychosis (app guidance; not verified in this session; see the Ch 2 treatment bridge).", [
        "**Traits set targets**: unusual beliefs and cognitive or perceptual dysregulation for psychosis monitoring; suspiciousness for transparency in every step; withdrawal for gradual social contact (app guidance).",
        SEVERITY,
        "Treat comorbid depression and anxiety, often the reason for the visit (app guidance).",
        NOAPPROVED,
        RERATE
      ], [])
    },
    {
      id: "ampd-pd-ts",
      ask: [
        ["A Identity", "“How would you describe yourself, and does that change depending on who you are with?”", "Moderate or greater impairment in two or more of the four areas (p. 890); see Table 1 (p. 883)."],
        ["A Self-direction", "“What are you aiming for in life, and how do you decide what is right?”", "p. 890."],
        ["A Empathy", "“When people disagree with you, what do you think is going on for them?”", "p. 890."],
        ["A Intimacy", "“Who do you rely on, and who relies on you? How close are you?”", "p. 890."],
        ["B Negative Affectivity", "“How often do you feel nervous, low, angry or afraid of being left? Do you go along with others even when you don’t want to?”", "Tagalog aside: “Sumusunod ka ba kahit ayaw mo?” Submissiveness with separation insecurity suggests a dependent-like profile (app guidance). B considers all five domains, by domain or facet (p. 890)."],
        ["B Detachment", "“Do you keep to yourself? Do things still give you pleasure? Do you trust people?”", "Withdrawal, anhedonia, intimacy avoidance, suspiciousness (pp. 890, 899). A schizoid-like profile leans here; suspiciousness with hostility (a Negative Affectivity facet) leans paranoid-like (p. 891; app reading)."],
        ["B Antagonism", "“Do you like to be the centre of attention? Do you bend the truth to get your way?”", "Attention seeking leans toward a histrionic-like profile (p. 891; app reading)."],
        ["B Disinhibition", "“Do you act on impulse, get easily distracted or let obligations slide? Or are you the opposite, rigidly perfect?”", "Either pole matters: rigid perfectionism is the lack-of pole (pp. 890, 900)."],
        ["B Psychoticism", "“Any odd experiences, unusual beliefs or moments of feeling unreal?”", "Unusual beliefs and experiences, eccentricity, cognitive and perceptual dysregulation (pp. 890, 901); these are criteria only in the schizotypal set (p. 889)."],
        ["C–G", "“Has this been your way since your teens, everywhere, and apart from episodes or substance use?”", "C–G apply (p. 884)."],
        ["Specifiers", "Write the profile: LPFS level plus each elevated domain or facet.", "No subtypes; the traits recorded for B are the specifiers (p. 890). PD-TS also covers subthreshold, mixed and atypical pictures and the paranoid, schizoid, histrionic and dependent types (p. 891)."]
      ],
      tx: care("build the plan from the **profile itself**: the LPFS level sets intensity and each elevated trait names a target; borrow from the treatment approach of the Section II type the profile resembles (outside the DSM; see the Ch 18 treatment bridge).", [
        "Chart the matching Section II type (paranoid F60.0, schizoid F60.1, histrionic F60.4, dependent F60.7), or **other specified PD F60.89** with the reason, or unspecified F60.9 (app guidance).",
        SEVERITY,
        "**Traits set targets**: two people with lability, hostility and depressivity differ if one also has callousness (p. 890), and their plans should differ too (app guidance).",
        "Where borderline-type traits dominate, the borderline evidence applies: structured psychotherapy, no medication for core features (APA 2024; Cochrane 2020 and 2022; outside the DSM).",
        NOAPPROVED,
        RERATE,
        CRISIS
      ], [])
    },
    {
      id: "lpfs",
      ask: [
        ["Framing", "“I’d like to understand how you see yourself and how things go with the people in your life. There are no right answers.”", "Describe the four areas in conversation; never read the table’s level descriptions to the patient (app guidance)."],
        ["Identity", "“How would you describe yourself? Does your sense of who you are hold steady, or does it depend on who you are with? How do you handle strong emotions?”", "Tagalog aside: “Paano mo ilalarawan ang sarili mo?” Boundaries, self-esteem, accuracy of self-view, emotional range and control (Table 1, p. 883)."],
        ["Self-direction", "“What are your goals, short and long term? What standards do you hold yourself to? Can you look at your own part when things go wrong?”", "Coherence and meaning of goals, inner standards, self-reflection (Table 1, p. 883)."],
        ["Empathy", "“Think of a recent disagreement. How did the other person see it? How do you think you affected them?”", "Understanding others, tolerating other views, awareness of own effect (Table 1, p. 883)."],
        ["Intimacy", "“Who are you closest to, and for how long? Do both of you give and take?”", "Depth, duration, wish for closeness, mutual regard (Table 1, p. 883)."],
        ["Informant", "Ask someone who knows the person well how they handle closeness, conflict and setbacks.", "Self-view can be inaccurate when identity is impaired; collateral helps place the level (app guidance)."],
        ["Current overall level", "After the interview, pick the one level from 0 (little or no) to 4 (extreme) that best fits current functioning across all four areas.", "Rate current overall impairment (p. 892); levels 0–4 (p. 882; Table 2, pp. 895–898)."],
        ["Threshold", "Ask yourself: is the impairment at least moderate (Level 2)?", "Moderate or greater is needed for a PD; the threshold was set empirically (p. 882). Below it, the rating can still be recorded as a global indicator (p. 892)."],
        ["Re-rating", "“I’ll ask about these same areas again in a few months to see what has changed.”", "The rating can specify severity at a point in time (p. 892), so repeat it (app guidance)."]
      ],
      tx: care("use the level as a **severity statement** in the formulation and a guide to **how much** treatment is needed; it is an assessment measure, not a diagnosis or a code.", [
        SEVERITY,
        "Self and interpersonal patterns affect the alliance and treatment outcome (p. 892): at Level 3–4 expect ruptures and plan the frame, crisis contacts and team roles in advance (app guidance).",
        "The LPFS can describe functioning **even without a PD diagnosis**, or when impairment is subthreshold (p. 892); record it as part of any formulation where personality matters (app guidance).",
        RERATE,
        "Self-report forms (LPFS-SR, 80 items; LPFS-BF 2.0) and the SCID-5-AMPD Module I interview exist; describe them, do not reprint them, and note that no Filipino validation was found (outside the DSM)."
      ], [])
    },
    {
      id: "trait-model",
      ask: [
        ["Framing", "“I’d like to go through the different sides of your personality, the way a doctor checks every body system, so nothing is missed.”", "The manual’s review-of-systems comparison: cover all five domains, not only the one that brought the person in (p. 894)."],
        ["Negative Affectivity", "“How often do you feel nervous, low, angry or afraid of being left? How quickly do those feelings come and go?”", "Tagalog aside: “Gaano kadalas ka kinakabahan, nalulungkot o nagagalit?” Opposite pole: Emotional Stability (p. 890; Table 3, p. 899)."],
        ["Detachment", "“Do you prefer being on your own? Do things still give you pleasure? Do you keep people at a distance?”", "Opposite pole: Extraversion (p. 890; Table 3, p. 899)."],
        ["Antagonism", "“Do you like being the centre of attention? Do you feel you deserve more than others? Do you bend the truth or use people to get your way?”", "Opposite pole: Agreeableness (p. 890; Table 3, p. 900)."],
        ["Disinhibition", "“Do you act on impulse, get distracted easily, or let obligations slide? Or do you insist on doing everything perfectly?”", "Opposite pole: Conscientiousness; rigid perfectionism sits at that pole (p. 890; Table 3, p. 900)."],
        ["Psychoticism", "“Any experiences others find strange, unusual beliefs or abilities, or moments of feeling unreal?”", "Opposite pole: Lucidity (p. 890; Table 3, p. 901)."],
        ["Informant", "Ask a spouse, parent or close friend the same five questions about the patient.", "The PID-5 has self-report and informant-report forms; a detailed assessment uses both (p. 894). Without a Filipino validation, weigh the informant heavily (outside the DSM; app guidance)."],
        ["Domains or facets", "Decide how deep to go: domain level for a general picture, facets when personality is the treatment focus.", "Domain-level assessment is an acceptable clinical option for a general portrait; assess facets as well when personality problems are the focus (p. 894)."],
        ["Is it elevated?", "For each domain, ask: is this beyond what is usual for the person’s age and setting, and does the history back it up?", "Elevation could involve population norms and/or clinical judgment; it counts toward Criterion B when testing or interview supports the judgment (p. 894). No cut-off score is given (app reading)."]
      ],
      tx: care("use the profile to set **treatment targets** and to predict course, whether or not a PD is present (p. 894). The trait model is an assessment measure, not a diagnosis or a code.", [
        "**Traits set targets**: anxiousness or depressivity → look for treatable anxiety or depressive disorders; impulsivity and risk taking → safety planning; suspiciousness and hostility → plan the alliance; the adaptive poles are strengths to build on (p. 893; app guidance).",
        "Traits are more stable than symptoms but can change, and treating symptoms can shift longer-term trait patterns (pp. 882, 894); repeat the review after treatment (app guidance).",
        "Functioning and traits each add information on self-harm, violence and criminality risk, treatment type and intensity, and prognosis (p. 894).",
        "The PID-5 (220 items, 25 facets; brief form 25 items, domains only; informant form available) is posted by the APA; describe it, do not reprint items, and note that no Filipino validation was found (outside the DSM).",
        RERATE
      ], [])
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "trait-profile", title: "Describing personality dimensionally",
      intro: "Use this when a personality disorder is suspected, or when traits seem to colour another disorder. Make the **two determinations** (p. 882): rate the **current overall level** of self and interpersonal functioning on the [[dx:lpfs|LPFS]] (moderate, Level 2, or greater is needed for a PD; p. 882), then review **all five trait domains** like a review of systems (p. 894) with the [[dx:trait-model|trait model]], adding an informant. Check Criteria C–G (p. 881). A pattern that matches one of the six sets gets that PD; a substantially different, subthreshold or mixed one gets **PD-TS** (p. 891). The chart carries the **Section II diagnosis and code** (Ch 18), and the level and traits go in the formulation (app guidance). Even without a PD, the profile may inform treatment and course (p. 894).",
      ask: ["Is impairment present in at least two of identity, self-direction, empathy and intimacy, and at what overall level?", "Which of the five domains are elevated, by history, informant and any PID-5 data?", "Does the pattern go back to adolescence or early adulthood, and does it appear across settings?", "Is it better explained by another mental disorder, a substance, a medical condition, or the person’s developmental stage or culture?", "Does the profile match one of the six sets, or is it PD-TS?", "Which Section II diagnosis and code go on the chart?"],
      mustNotMiss: ["**Thoughts of suicide and self-harming behavior under distress** (part of depressivity and impulsivity, p. 887): ask directly and plan for safety; the Philippine **NCMH Crisis Hotline** is **1553** (toll-free from landlines) or **1800-1888-1553**; **0919-057-1553** (Smart/TNT); **0917-899-8727** and **0966-351-4518** (Globe/TM) (app guidance; confirm current numbers before giving them out).", "Features present **only during** a mood or psychotic episode or substance use (Criteria E–F, pp. 881, 883).", "A **new change** in personality in later life: look for a medical cause (Ch 18; app guidance).", "**Cultural norms** mistaken for traits (Criterion G, p. 881).", "Treating a **PID-5 printout** as a diagnosis; elevation needs clinical judgment (p. 894)."],
      helpers: ["ampd", "personality"],
      items: [
        { ch: "ch26", dx: "lpfs", when: "Rate current overall impairment 0–4 across identity, self-direction, empathy and intimacy; moderate or greater for a PD (pp. 882, 892)." },
        { ch: "ch26", dx: "trait-model", when: "Review the five domains; facets when personality is the treatment focus; self and informant PID-5 (p. 894)." },
        { ch: "ch26", dx: "ampd-general", when: "General Criteria A–G: the frame every Section III PD meets (pp. 881–883)." },
        { ch: "ch26", dx: "ampd-pd-ts", when: "PD judged present but no specific set fits: subthreshold, mixed, atypical, or paranoid-, schizoid-, histrionic- or dependent-like (pp. 890–891)." },
        { ch: "ch18", dx: "general-pd", when: "The Section II general criteria that the chart diagnosis rests on (Ch 18)." },
        { ch: "ch18", dx: "other-specified-pd", when: "Section II route for a PD-TS profile that matches no Section II type (F60.89; app guidance)." },
        { ch: "ch23", dx: "level1-adult", when: "The adult Level 1 personality functioning domain flags the area; it has no Level 2, so the interview follows (p. 844)." },
        { ch: "ch23", dx: "whodas", when: "A functioning baseline to pair with the LPFS level (app guidance)." },
        { ch: "ch24", dx: "cultural-formulation", when: "Criterion G: whether the pattern is normal for the person’s sociocultural setting (p. 881; app guidance)." },
        { ch: "ch18", dx: "personality-change-amc", when: "A change from a previous personality caused by a medical condition (Criterion F, p. 881; Ch 18)." }
      ]
    },
    { id: "unstable", title: "Emotional storms, self-harm and unstable relationships", items: [
      { ch: "ch26", dx: "ampd-borderline", when: "AMPD view: 2 of 4 A areas and 4 of 7 traits, with at least one of impulsivity, risk taking or hostility (p. 886); chart Section II borderline PD F60.3 (app guidance)." },
      { ch: "ch26", dx: "lpfs", when: "Rate the current overall level of self and interpersonal functioning; it sets treatment intensity (p. 892; app guidance)." },
      { ch: "ch26", dx: "trait-model", when: "Profile emotional lability, separation insecurity, depressivity, impulsivity and hostility across all five domains (p. 894)." }
    ] },
    { id: "lifelong-pattern", title: "Long-standing difficulties getting along with people", items: [
      { ch: "ch26", dx: "ampd-general", when: "AMPD view: moderate or greater impairment plus one or more pathological traits, with C–G (pp. 881–882)." },
      { ch: "ch26", dx: "ampd-pd-ts", when: "A PD that fits none of the six AMPD sets, including paranoid-, schizoid-, histrionic- and dependent-like profiles (p. 891)." },
      { ch: "ch26", dx: "lpfs", when: "How impaired identity, self-direction, empathy and intimacy are, Levels 0–4 (p. 882)." },
      { ch: "ch26", dx: "trait-model", when: "A five-domain review to describe the style of the difficulty (p. 894)." }
    ] },
    { id: "odd", title: "Odd beliefs or eccentric behavior", items: [
      { ch: "ch26", dx: "ampd-schizotypal", when: "AMPD view: Psychoticism and Detachment traits, 4 of 6, with 2 of 4 A areas (p. 889); chart Section II schizotypal PD F21 (app guidance)." },
      { ch: "ch26", dx: "lpfs", when: "Rate self and interpersonal functioning; confused self–other boundaries point to higher levels (Table 2, pp. 895–898)." },
      { ch: "ch26", dx: "trait-model", when: "Psychoticism facets: unusual beliefs and experiences, eccentricity, cognitive and perceptual dysregulation (p. 901)." }
    ] },
    { id: "rule-breaking", title: "Lying, rule-breaking or violence in an adult", items: [
      { ch: "ch26", dx: "ampd-antisocial", when: "AMPD view: Antagonism and Disinhibition traits, 6 of 7, age 18 or older; psychopathic features specifier (pp. 884–885); chart Section II antisocial PD F60.2 (app guidance)." },
      { ch: "ch26", dx: "lpfs", when: "Rate self and interpersonal functioning; exploitation and lack of remorse point to impaired empathy and intimacy (pp. 884, 892)." },
      { ch: "ch26", dx: "trait-model", when: "Antagonism and Disinhibition facets; low anxiousness and withdrawal for psychopathic features (pp. 885, 900)." }
    ] }
  ]);
})();
