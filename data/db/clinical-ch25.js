/* Chapter 25 clinical extras (Section III, Conditions for Further Study), merged into the disorder library when the app loads (js/practice.js).
   ask: [element, plain-language question, optional tip]   — "How to ask it" on each library page
   tx:  orientation only, every line labeled as outside the DSM / app guidance; Stahl links only where a Stahl page exists
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge.
   None of these seven conditions is an official diagnosis: the proposed sets are for research (p. 903). The chart gets the
   Section II category or the Chapter 22 code shown on each library page. Suicidal behavior and self-injury are handled
   at the level of the manual's own general terms; no method, dose or lethality detail. */
(function () {
  var ASOF = "October 2026";
  var SEC3 = "Section III condition: the proposed criteria are meant for **research, not clinical use** (p. 903). Chart the **Section II category or Chapter 22 code** given on the library page and, if helpful, add that the picture matches the proposed set (app guidance).";
  var CRISIS = "Philippine crisis lines: **NCMH Crisis Hotline (1553)** and **Hopeline (0917-558-4673)** (app guidance; confirm current numbers before giving them out).";
  function care(first, points, stahl) {
    return { asOf: ASOF, first: "Outside the DSM / app guidance: " + first, points: [SEC3].concat(points), stahl: stahl || [] };
  }

  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "attenuated-psychosis-syndrome",
      ask: [
        ["A1 Attenuated delusions", "“Lately, have you had the feeling that people are watching you, talking about you or sending you hidden messages, even if part of you wonders whether it is true?”", "Suspicious, referential or grandiose ideas held with some doubt (pp. 903–904)."],
        ["A2 Attenuated hallucinations", "“Do you sometimes hear your name called, catch shadows or movement at the edge of your vision, or hear sounds other people don’t notice? What do you make of them?”", "Tagalog aside: “May naririnig ka bang boses o tunog na hindi naririnig ng iba?” Perceptual changes with insight still present (p. 904)."],
        ["A3 Disorganized speech", "Listen for vague or wandering speech, and ask: “Do people tell you that you are hard to follow, or that you drift off the topic?”", "Odd but still redirectable communication (p. 904)."],
        ["Insight", "“When this happens, could it be your mind playing tricks on you?”", "Doubt can be raised in APS; full, unshakable conviction points to a psychotic disorder (p. 904)."],
        ["B Frequency", "“How often in the past month: at least once a week?”", "At least weekly over the past month (p. 903)."],
        ["C Onset", "“When did this start, or when did it get worse? Was that within the past year?”", "Must have begun or worsened in the past year; a stable lifelong pattern suggests schizotypal personality disorder (pp. 903, 906)."],
        ["D Distress", "“What made you come in? How is it affecting school, work, family or friends?”", "Distress or disability enough to need clinical attention (pp. 903–904)."],
        ["E–F Rule-outs", "“Any alcohol, cannabis, shabu or other drugs? Has there ever been a stretch when you were completely sure of these things for days?”", "Substances and medical causes; criteria for a psychotic disorder never met (p. 903)."],
        ["Comorbidity", "“How has your mood been? Any worry, panic or poor sleep?”", "Depression (41%) and anxiety (15%) are common companions (p. 907)."],
        ["Development", "“Any attention problems in childhood?”", "An ADHD history does not rule APS out (p. 907)."]
      ],
      tx: care("regular **monitoring** (more often in the first 2 years), **CBT** and family psychoeducation, help with school or work, and treatment of comorbid **depression and anxiety**; **antipsychotics are not first line** for preventing psychosis and are kept for conversion or for severe, worsening symptoms (established guidelines).", [
        "Explain risk in plain numbers: in the manual’s samples up to **22%** converted within 3 years versus **1.54%** in help-seeking controls, so most people do **not** develop psychosis (p. 905). Pooled later data: about **19%** at 2 years and **25%** at 3 years (Salazar de Pablo et al., 2021; outside the DSM).",
        "Risk is highest in the **first 2 years** (p. 905): see the person more often early and tell the family which changes should prompt an earlier visit (app guidance).",
        "Among those who convert, most go on to a **schizophrenia spectrum** disorder (73%) rather than an affective psychosis (11%) (p. 905).",
        "Address cannabis and stimulant use, sleep loss and stress, which can push symptoms toward psychosis (outside the DSM).",
        "Use **“risk state”** language rather than “pre-schizophrenia” with the person and the family (app guidance)."
      ], [])
    },
    {
      id: "short-duration-hypomania",
      ask: [
        ["MDE", "“Has there ever been a stretch of 2 weeks or more when you felt low or lost interest in things most of the day, nearly every day?”", "At least one lifetime major depressive episode (pp. 907–908)."],
        ["Highs", "“Apart from drugs, alcohol or medicines, have there been times when you felt unusually up, energetic or irritable, and needed much less sleep?”", "Screen for hypomanic periods (p. 908)."],
        ["Duration", "“How many days in a row did each of those times last: 2 or 3, or 4 or more?”", "At least 2 but fewer than 4 consecutive days; one period of 4 days or more makes it bipolar II, regardless of the duration of later hypomanic periods (p. 910); a later manic episode would make it bipolar I (pp. 908–910)."],
        ["Count", "“How many separate times has this happened in your life?”", "At least two lifetime periods (p. 908)."],
        ["Symptoms", "“During those days, were you more talkative, full of ideas, extra confident, busier than usual, spending or taking risks, or easily distracted?”", "Three symptoms, or four if the mood was only irritable (p. 908)."],
        ["Collateral", "Ask family or friends whether they noticed the change and on how many days.", "Criterion D of the hypomanic period requires that the mood change and the change in functioning were observable by others (p. 908); patients often undercount highs (app guidance)."],
        ["Severity", "“Did you ever need hospital admission, or lose touch with reality, during a high?”", "Either one makes the period manic: bipolar I (p. 910)."],
        ["Timing", "“Did the high days come in the middle of a depression, or at separate times?”", "Same time = MDD with mixed features; different times = this set (p. 910)."],
        ["Family", "“Does anyone in the family have bipolar disorder or mood swings that needed treatment?”", "Family history of bipolar disorder is 3–4 times as common as in MDD (p. 909)."],
        ["Suicide", "“Have you ever tried to end your life?”", "Attempt rates exceed MDD and resemble bipolar II (p. 909)."]
      ],
      tx: care("treat it under the Section II category it is recorded as (**other specified bipolar and related disorder, F31.89**) with a **bipolar-aware** plan: mood and sleep charting, psychoeducation, regular sleep and routines, and **caution with antidepressant monotherapy** because of possible switching; whether to use a mood stabilizer follows bipolar II reasoning and is individualized (established guidelines).", [
        "Watch for **conversion**: the first hypomanic episode lasting 4 days or more changes the diagnosis to bipolar II, and it stays there (pp. 909–910).",
        "Ask at every visit about short highs, especially after an antidepressant is started or increased (outside the DSM).",
        "A **family history of bipolar disorder** strengthens the case for bipolar-spectrum caution (p. 909; app guidance).",
        "Screen **suicide risk** routinely: attempt rates are similar to bipolar II (p. 909)."
      ], [["Bipolar depression", "c/ch07/guide/s7-bipolar-depression"], ["Mood stabilizers", "c/ch07/guide/s7-moodstab"], ["Lithium", "drugs/lithium"]])
    },
    {
      id: "caffeine-use-disorder",
      ask: [
        ["Intake", "“On a usual day, how many cups of brewed coffee, 3-in-1 sachets, energy drinks, sodas or milk teas do you have? Any pre-workout or diet products?”", "Tagalog aside: “Ilang tasa ng kape o 3-in-1 ang naiinom mo sa isang araw?” Count every source (app guidance)."],
        ["1 Cutting down", "“Have you wanted to cut down, or tried and not managed it?”", "One of the three required criteria (p. 910)."],
        ["2 Despite problems", "“Do you keep having it even though it worsens your palpitations, stomach, sleep, nerves or blood pressure?”", "Required (p. 910)."],
        ["3 Withdrawal", "“If you skip it for a day, what happens: headache, tiredness, low mood, poor focus? Do you drink some to make that go away?”", "Required (p. 910); caffeine withdrawal itself is a Section II diagnosis (p. 911)."],
        ["4–9 Other criteria", "“Do you end up having more than you planned? Has it caused trouble at work, school or home, or with people? Do you need more for the same effect? Spend a lot of time on it? Get strong cravings?”", "Counted only after the first three are met (pp. 910–911)."],
        ["Threshold", "Tolerance and withdrawal alone are common in ordinary coffee drinkers.", "Not enough for the proposed set (p. 913)."],
        ["Look-alikes", "“Do you get panic attacks or constant worry? Do they ease when you drink less?”", "Long-term use can look like GAD, a large dose like a panic attack (p. 913)."],
        ["Other substances", "“Do you smoke or vape? Drink alcohol? Use cannabis or other drugs?”", "Common companions (p. 913)."],
        ["Pregnancy", "“Are you pregnant or planning to be?”", "Use in pregnancy is a concern the manual raises (p. 913)."]
      ],
      tx: care("**graded reduction** over days to weeks (cut a portion of the daily amount at a time, or swap some servings for decaf or half-strength) rather than stopping abruptly, with an intake diary; manage withdrawal supportively (simple analgesia for headache, regular sleep and meals) and treat the problem that made the person want to cut down (established guidance).", [
        "Withdrawal usually starts within 12–24 hours of stopping, peaks within about 1–2 days and can last up to about 9 days; headache is reported by about half (Juliano and Griffiths, 2004; outside the DSM).",
        "Reassess anxiety, insomnia, palpitations or reflux once intake is lower before treating them as separate disorders (app guidance).",
        "Ask students, call-center and night-shift workers about **energy drinks**, a concern the manual flags (p. 912).",
        "Record **caffeine withdrawal F15.93** or **caffeine intoxication F15.920** when present; otherwise unspecified caffeine-related disorder F15.99 (Chapter 16; app guidance)."
      ], [["Caffeine", "drugs/caffeine"], ["Caffeine and stimulants", "c/ch10/guide/s10-caffeine-stimulants"]])
    },
    {
      id: "internet-gaming-disorder",
      ask: [
        ["Pattern", "“What games do you play, online or offline, alone or with a team? How many hours on a school or work day, and on weekends?”", "Tagalog aside: “Ilang oras ka naglalaro sa isang araw?” Affected players often log 8–10 hours a day and 30 or more a week (p. 915)."],
        ["1 Preoccupation", "“When you are not playing, how much of the time are you thinking about the game?”", "p. 913."],
        ["2 Withdrawal", "“How do you feel when you can’t play, or when someone takes the phone or computer away?”", "Irritability, anxiety or sadness, without physical signs (p. 913)."],
        ["3 Tolerance", "“Do you need to play longer than before to feel satisfied?”", "p. 913."],
        ["4 Control", "“Have you tried to cut down or stop and found you couldn’t?”", "p. 913."],
        ["5 Lost interests", "“Have you dropped hobbies or activities you used to enjoy?”", "p. 913."],
        ["6 Despite problems", "“Do you keep playing even when you know it is causing problems?”", "p. 914."],
        ["7 Deception", "“Have you hidden or played down to your family how much you play?”", "p. 914."],
        ["8 Escape", "“Do you play to get away from feeling down, anxious or guilty?”", "p. 914."],
        ["9 Jeopardy", "“Has gaming put your studies, a job or a relationship at risk, or cost you one?”", "Five or more of the nine over 12 months (pp. 913–914)."],
        ["Gambling", "“Is real money involved: online casinos, betting, e-sabong?”", "Online gambling belongs to gambling disorder, not this set (pp. 913, 916)."],
        ["Other screen use", "If the problem is social media, streaming or pornography, say so.", "These are not treated as analogous to gaming (pp. 914, 916)."],
        ["Body and mood", "“Do you skip meals or sleep to keep playing? How are your mood and concentration?”", "Going without food or sleep (p. 915); MDD, ADHD and OCD co-occur (p. 916)."]
      ],
      tx: care("**CBT-based** treatment (triggers, beliefs about gaming, a planned schedule of other activities, and an agreed goal of controlled play or a break), **family involvement** for adolescents (shared rules for devices and time, less conflict at home), and treatment of comorbid depression, anxiety and ADHD; no medicine is approved for gaming problems (established guidance).", [
        "Restore **sleep and regular meals** early; play through the night is common (p. 915).",
        "Treat co-occurring **depression and ADHD** (p. 916) as part of the same plan (app guidance).",
        "Screen for **suicidal thoughts**; the manual reports raised risk in gamers, with poor sleep as one pathway (p. 916).",
        "Gaming disorder has its own ICD-11 code, **6C51** (outside the DSM); in DSM-5-TR it remains a proposal, and **F99** is the residual if a diagnosis must be recorded (app guidance).",
        "Philippine settings: computer shops and pisonet machines, school guidance offices, and parents working abroad who can join sessions by video (app guidance)."
      ], [["Behavioral addictions", "c/ch13/guide/s13-bed"], ["Impulsivity and compulsivity", "c/ch13/guide/s13-impulse"]])
    },
    {
      id: "nd-pae",
      ask: [
        ["A Exposure", "Ask the mother, privately and without blame: “During the pregnancy, including before you knew, how often did you drink, and how much on a usual day and on a heavy day?”", "More than minimal means more than 13 drinks per month in pregnancy, or more than 2 drinks on any one occasion (p. 918)."],
        ["A Other sources", "If the mother cannot be asked: relatives, prenatal and birth records, foster or adoption files.", "Maternal report, records or clinical observation (p. 916)."],
        ["B Neurocognition", "“How is the child doing in school: reading, math, remembering lessons, following steps, puzzles or drawing?”", "One of five areas, including global intellect, executive function, learning, memory and visual-spatial skills (pp. 916–917)."],
        ["C Self-regulation", "“How are the child’s moods, tantrums, attention and acting without thinking?”", "One of three (p. 917)."],
        ["D Adaptive", "“How does the child talk and understand others, get along with other children, manage dressing and hygiene, and move or play sports?”", "Two of four, one of them communication or social communication (p. 917)."],
        ["E Onset", "“When did the problems first show?”", "Childhood onset (p. 917)."],
        ["G Other causes", "Other prenatal or later drug exposure, anticonvulsants in pregnancy, head injury, neglect, genetic syndromes; involve a clinical geneticist when unsure.", "pp. 917, 919–920."],
        ["Physical", "Measure growth and look at the face, but do not require fetal alcohol syndrome features.", "Can be diagnosed with or without physical effects (p. 917)."],
        ["Age", "For children 3 years and younger, describe and follow rather than diagnose.", "Defer the diagnosis (p. 918)."],
        ["Home", "“Who has looked after the child over the years? Any changes of home or caregiver?”", "Disrupted caregiving and placements are common (p. 918)."]
      ],
      tx: care("a **multidisciplinary** plan: developmental pediatrics, psychology (cognitive and adaptive testing), speech and occupational therapy, **school supports** (an individualized plan, SPED placement where needed), and caregiver training built on structure, routine, repetition and concrete instructions (established guidance).", [
        "**ADHD** is the most common comorbidity, but its neuropsychology and **response to medication** differ (p. 920): stimulants help some children, response is less predictable, so set target symptoms, start low, review often and consider nonstimulants (outside the DSM).",
        "Before labeling **ODD or conduct disorder**, weigh how much the behavior reflects intellectual and executive deficits (p. 920).",
        "Plan ahead for **late adolescence and early adulthood**, when suicide risk is high (p. 919): screen regularly and include caregivers in safety planning (app guidance).",
        "Check other organ systems (heart, kidney, liver, gut, endocrine) (p. 919).",
        "Offer the **mother** care without blame: her own alcohol use and suicide risk deserve attention (p. 919; app guidance).",
        "Record as **F88, other specified neurodevelopmental disorder** (Chapter 1 example; app guidance)."
      ], [["Stimulant principles", "c/ch11/guide/s11-stim-principles"], ["Methylphenidate", "drugs/methylphenidate"], ["Atomoxetine", "drugs/atomoxetine"], ["Guanfacine", "drugs/guanfacine"]])
    },
    {
      id: "suicidal-behavior-disorder",
      ask: [
        ["A Attempt", "“In the past 2 years, have you done something to try to end your life?”", "An attempt within 24 months (p. 920)."],
        ["Intent", "“When you started, did you expect or want that you might die, even partly?”", "Some intent to die, judged at the time the act began (pp. 920–921)."],
        ["Initiation", "“Did you begin, or did someone or something stop you before you started?”", "Interrupted after starting counts; talked out of it before starting does not (p. 921)."],
        ["Not NSSI", "“Was it to die, or to get relief from a feeling?”", "Nonsuicidal self-injury is excluded (p. 920)."],
        ["Clear mind", "“Were you confused at the time? Had you been drinking or taking something?”", "Delirium or confusion excludes; drinking beforehand to steady oneself does not (p. 921)."],
        ["Motive", "Rule out an act undertaken solely for political or religious ends.", "p. 920."],
        ["When", "“When was the most recent time?”", "Current if within 12 months; early remission if 12–24 months ago (p. 920)."],
        ["Descriptive dimensions", "“Did it need a hospital stay beyond the emergency room? Was it planned ahead or done on impulse?”", "Lethality and planning dimensions the text describes, not formal specifiers (pp. 920–921)."],
        ["Risk markers", "“Did you arrange things so no one would find you? Were you recently discharged? Have you recently stopped a mood stabilizer (lithium, for example) or an antipsychotic (for example, clozapine)?”", "Markers named on p. 921."],
        ["Triggers", "“Has something happened lately: a serious diagnosis, a sudden loss, losing work or your home?”", "p. 921."],
        ["Now", "“Are you having thoughts of ending your life now? Is there a plan? Could you get to what you thought of using?”", "Tagalog aside: “Naiisip mo ba ngayon na wakasan ang buhay mo?” Current risk (app guidance)."]
      ],
      tx: care("a full **suicide risk assessment** at every contact, a written **safety plan** made with the person (warning signs, coping steps, people and places for support, professional contacts, making the home safer), **means safety** counseling with the family in general terms, treatment of the underlying disorder, and **close follow-up after discharge**, a high-risk period (established guidelines).", [
        "Do not rely on a **no-suicide contract** or on talk of future plans; the manual calls both less reliable (p. 921).",
        "No screening instrument has a useful positive predictive value (p. 921): use tools to structure the interview, not to sort people into “low” and “high” risk (app guidance).",
        "**Stopping a mood stabilizer such as lithium**, or in schizophrenia **an antipsychotic such as clozapine**, is a risk marker in the manual (p. 921); both have evidence for lowering suicidal behavior, lithium in mood disorders and clozapine in schizophrenia (outside the DSM).",
        "**Recent discharge** is a risk marker (p. 921): book the first follow-up within days and confirm it happened (app guidance).",
        "About **25–30%** make another attempt (p. 921): psychotherapies with evidence for suicidal behavior (suicide-focused CBT, DBT) and brief contact interventions help (outside the DSM).",
        "Record **T14.91XA** in active treatment or **T14.91XD** in follow-up (printed T14.91A/D on p. 920), and **Z91.51** for history (Chapter 22).",
        CRISIS
      ], [["Lithium", "drugs/lithium"], ["Clozapine", "drugs/clozapine"], ["Lithium (mood stabilizers)", "c/ch07/guide/s7-lithium"], ["The pines (clozapine)", "c/ch05/guide/s5-pines"]])
    },
    {
      id: "nssi-disorder",
      ask: [
        ["A Behavior", "“In the past year, on how many days have you hurt yourself on purpose, for example by cutting, burning or hitting yourself?”", "Tagalog aside: “Sinasaktan mo ba ang sarili mo kapag mabigat ang loob mo?” Five or more days (p. 923)."],
        ["A Intent", "“When you do it, what harm do you expect? Have you ever wanted to die while doing it?”", "Expects only minor or moderate harm; no suicidal intent, stated or inferred (p. 923)."],
        ["B Function", "“What does it do for you: relief from a bad feeling, sorting out a problem with someone, or making you feel something good?”", "One of three expectations (p. 923)."],
        ["C Before", "“What is going on just before? Is the urge hard to put aside? How often do you think about it on days you don’t do it?”", "One of three (p. 923)."],
        ["D Not sanctioned", "Set aside piercing, tattoos, religious or cultural rites (such as Holy Week penitents), scab picking and nail biting.", "pp. 923, 925."],
        ["E Impact", "“How is this affecting you, your studies, work or relationships?”", "Distress or interference (p. 923)."],
        ["F Context", "Not only during psychosis, delirium, intoxication or withdrawal; not stereotypies in a neurodevelopmental disorder.", "p. 923."],
        ["Wounds", "“Do any wounds need care now? Do you ever share what you use with others?”", "Infection, scarring; shared implements carry blood-borne disease (p. 925)."],
        ["Suicide risk", "“Separately from this, have you thought about ending your life, or tried to?”", "Evaluate suicide risk and get third-party information (p. 925)."],
        ["Exposure", "“Do friends or people you follow online do this too?”", "Learned from others and media; contagion in groups (p. 925)."]
      ],
      tx: care("**DBT** (the best-studied option, especially for adolescents and with borderline features) or another structured therapy (CBT, mentalization-based treatment), calm and nonjudgmental **wound care**, a **suicide risk evaluation** at each contact, and treatment of co-occurring depressive, eating, substance or personality disorders; no medicine treats self-injury itself (established guidelines).", [
        "Treat wounds medically and without punishment or lecturing; check infection risk and tetanus status (app guidance).",
        "Self-injury tends to start **1–2 years before** suicide attempts; multiple methods, high frequency, early onset, and relief or self-punishment functions predict suicidal thoughts and attempts (p. 925).",
        "Do not assume **borderline personality disorder**: self-injury occurs without it (p. 925).",
        "Plan for **contagion** on wards, in schools, detention and community groups (p. 925; app guidance on limiting group exposure).",
        "Record **R45.88** for current nonsuicidal self-injury or **Z91.52** for history (Chapter 22; pp. 923–924).",
        CRISIS
      ], [])
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "gaming", title: "Gaming or screen use that has taken over",
      intro: "First find out **what** the screen time is: video games (online or offline) fit the Section III proposal for internet gaming disorder; betting for money is **gambling disorder**; social media, streaming or pornography are not treated as analogous (pp. 913–916). The gaming set needs **5 or more of 9** features over 12 months and is **not an official diagnosis** (pp. 903, 913–914). Then look for what drives or follows it: depression, ADHD, OCD, poor sleep (pp. 915–916).",
      ask: ["What do you play or watch, and for how many hours on a school or work day?", "What happens when you are stopped or the device is taken away?", "Have you tried to cut down?", "What have you given up because of it: school, work, friends, sleep, meals?", "Is real money involved: betting, online casinos, e-sabong?", "How are your mood and concentration? Any thoughts of ending your life?"],
      mustNotMiss: ["**Online gambling** behind “gaming” (p. 916).", "**Depression, ADHD or OCD** driving or following the gaming (p. 916).", "**Suicidal thoughts**, with poor sleep as one pathway (p. 916).", "**Neglected health**: missed meals and sleep (pp. 915–916)."],
      helpers: ["further-study", "psychosocial"],
      items: [
        { ch: "ch25", dx: "internet-gaming-disorder", when: "Five or more of the nine gaming features over 12 months with real impairment; a Section III proposal, so record per app guidance (pp. 913–914)." },
        { ch: "ch16", dx: "gambling", when: "The play involves betting money, including online casinos and e-sabong (p. 916)." },
        { ch: "ch04", dx: "mdd", when: "Gaming is an escape from a depressive episode (p. 916)." },
        { ch: "ch01", dx: "adhd", when: "Lifelong inattention or hyperactivity across settings, with gaming as one of many problems (p. 916)." },
        { ch: "ch06", dx: "ocd", when: "Obsessions or compulsions co-occur with heavy gaming (p. 916)." },
        { ch: "ch05", dx: "social-anxiety", when: "Gaming is a way to avoid feared social situations (app guidance)." },
        { ch: "ch01", dx: "asd", when: "Games are an intense, restricted interest in a person with lifelong social-communication differences (app guidance)." },
        { ch: "ch22", dx: "parent-child-relational", when: "Family conflict over screen time is the real focus, without the disorder pattern (app guidance)." }
      ]
    },
    {
      id: "caffeine-problems", title: "Can’t cut down on coffee or energy drinks",
      intro: "Count every source of caffeine, then ask the **three required** questions of the Section III proposal: failed efforts to cut down, use despite a physical or psychological problem, and withdrawal (pp. 910–911). Tolerance and withdrawal alone describe ordinary users (p. 913). The proposal is **not an official diagnosis** (p. 903): what Section II offers is **caffeine intoxication**, **caffeine withdrawal**, the caffeine-induced disorders and **unspecified caffeine-related disorder (F15.99)**.",
      ask: ["How much coffee, 3-in-1, tea, soda or energy drinks a day?", "Have you tried to cut down?", "Do you keep having it despite palpitations, poor sleep, nerves or stomach problems?", "What happens if you skip it for a day?", "Do you also smoke, vape, drink alcohol or use other drugs?", "Are you pregnant or planning to be?"],
      mustNotMiss: ["**Panic or anxiety** that is really caffeine (p. 913).", "**Other stimulants**, including amphetamine-type drugs (p. 913).", "**Pregnancy** (p. 913).", "Co-occurring **tobacco, alcohol or cannabis** problems (p. 913)."],
      helpers: ["further-study", "substance"],
      items: [
        { ch: "ch25", dx: "caffeine-use-disorder", when: "The first three criteria are all present over 12 months; a Section III proposal (pp. 910–911)." },
        { ch: "ch16", dx: "caffeine-withdrawal", when: "Headache, fatigue, low mood or poor concentration after stopping or cutting down: F15.93." },
        { ch: "ch16", dx: "caffeine-intox", when: "Restlessness, insomnia, palpitations and similar signs after a large intake: F15.920." },
        { ch: "ch05", dx: "gad", when: "Worry and tension that persist after caffeine is cut down; long-term use can mimic GAD (p. 913)." },
        { ch: "ch05", dx: "panic-attack", when: "Sudden surges of fear; an acute large dose can mimic a panic attack (p. 913)." },
        { ch: "ch16", dx: "stimulant-use", when: "Amphetamine-type or other stimulants rather than caffeine (p. 913)." },
        { ch: "ch12", dx: "insomnia", when: "Poor sleep that persists once caffeine intake is reduced (app guidance)." }
      ]
    },
    { id: "psychosis", title: "Hearing voices or unusual beliefs", items: [
      { ch: "ch25", dx: "attenuated-psychosis-syndrome", when: "Milder voices, suspicions or odd speech at least weekly for a month, new or worse within a year, with doubt still present and no full psychosis ever; record F28 (pp. 903–904)." }
    ] },
    { id: "odd", title: "Odd beliefs or eccentric behavior", items: [
      { ch: "ch25", dx: "attenuated-psychosis-syndrome", when: "Odd ideas or perceptions that began or worsened in the past year, unlike the stable lifelong traits of schizotypal personality disorder (pp. 903, 906)." }
    ] },
    { id: "mood-swings", title: "Mood swings", items: [
      { ch: "ch25", dx: "short-duration-hypomania", when: "Major depression plus at least two lifetime highs that last 2–3 days and never reach 4; record F31.89 (pp. 907–908)." }
    ] },
    { id: "elevated", title: "Elevated or irritable mood with little sleep", items: [
      { ch: "ch25", dx: "short-duration-hypomania", when: "Highs of only 2–3 days with a full symptom count, in someone with past major depression; a 4-day episode makes it bipolar II (pp. 908–910)." }
    ] },
    { id: "low-mood", title: "Low mood or sadness", items: [
      { ch: "ch25", dx: "short-duration-hypomania", when: "Depression with a history of brief 2–3-day hypomanic periods: use bipolar-aware care (pp. 907–910; app guidance)." }
    ] },
    { id: "heavy-use", title: "Drinking or drug use getting out of hand", items: [
      { ch: "ch25", dx: "caffeine-use-disorder", when: "Coffee or energy drinks, with failed efforts to cut down, use despite problems and withdrawal; a Section III proposal (pp. 910–911)." },
      { ch: "ch25", dx: "internet-gaming-disorder", when: "The “addiction” is gaming rather than a substance (pp. 913–914)." }
    ] },
    { id: "inattention", title: "Inattention, restlessness or impulsivity", items: [
      { ch: "ch25", dx: "nd-pae", when: "Attention and impulse problems with more than minimal prenatal alcohol exposure and neurocognitive and adaptive deficits; record F88 (pp. 916–918)." }
    ] },
    { id: "learning-problems", title: "Struggling at school with reading, writing or math", items: [
      { ch: "ch25", dx: "nd-pae", when: "Learning, memory or executive problems in a child exposed to alcohol before birth, with self-regulation and adaptive difficulties (pp. 916–917)." }
    ] },
    { id: "suicidal", title: "Suicidal thoughts", items: [
      { ch: "ch25", dx: "suicidal-behavior-disorder", when: "A suicide attempt in the past 24 months: the Section III proposal; chart T14.91XA/XD or Z91.51 (p. 920)." },
      { ch: "ch25", dx: "nssi-disorder", when: "Self-injury on 5 or more days in a year without intent to die; ask about suicide separately (pp. 923, 925)." }
    ] },
    { id: "self-harm-behavior", title: "Suicide attempt or self-injury: documenting the behavior", items: [
      { ch: "ch25", dx: "suicidal-behavior-disorder", when: "The Section III proposal for an attempt within 24 months: current up to 12 months, early remission 12–24 months; the chart still gets the Chapter 22 codes (p. 920)." },
      { ch: "ch25", dx: "nssi-disorder", when: "The Section III proposal for repeated self-injury (5 or more days in the past year) with the B and C features; the chart gets R45.88 or Z91.52 (pp. 923–924)." }
    ] },
    { id: "unstable", title: "Emotional storms, self-harm and unstable relationships", items: [
      { ch: "ch25", dx: "nssi-disorder", when: "Repeated self-injury for relief or to resolve a conflict, which can occur without borderline personality disorder (p. 925)." },
      { ch: "ch25", dx: "suicidal-behavior-disorder", when: "A suicide attempt in the past 24 months alongside the emotional instability (p. 920)." }
    ] }
  ]);
})();
