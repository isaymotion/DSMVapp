/* Chapter 4 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
SP.dxExtra = (SP.dxExtra || []).concat([
  {
    id: "mdd",
    ask: [
      ["A1 Depressed mood", "“How has your mood been lately? Have you felt sad, empty or down for most of the day?”", "In children and adolescents, ask about irritability. Ask family what they have noticed."],
      ["A2 Loss of interest or pleasure", "“What do you still enjoy? Have you lost interest in things you used to like doing?”"],
      ["A3 Appetite or weight", "“Has your appetite changed? Do your clothes fit differently than a month or two ago?”", "Significant means more than 5% of body weight in a month."],
      ["A4 Sleep", "“How are you sleeping? Do you wake in the night or earlier than you want and can’t get back to sleep? Or are you sleeping much more?”"],
      ["A5 Psychomotor change", "“Have people said you seem slowed down, or that you can’t sit still?”", "It must be observable by others, not just felt."],
      ["A6 Energy", "“How is your energy? Do small tasks wear you out?”"],
      ["A7 Worthlessness or guilt", "“How do you feel about yourself these days? Do you blame yourself for things?”", "Guilt only about being ill does not count."],
      ["A8 Concentration or decisions", "“Can you follow a TV program or read a page? Is it hard to make decisions?”"],
      ["A9 Death and suicide", "“Have you felt that life isn’t worth living? Have you thought about killing yourself? Have you made a plan, or done anything to prepare?”", "Asking directly does not plant the idea. Ask about access to means."],
      ["Duration", "“When did this start? Has it been there most of the day, nearly every day, for at least 2 weeks?”"],
      ["Past hypomania or mania (Criterion E)", "“Has there ever been a stretch of days when you felt unusually good, hyper or irritable, needed much less sleep and still had energy, and others noticed you weren’t your usual self?”", "Ask a family member too; hypomania is often missed."],
      ["Psychotic features", "“When people feel this low, they sometimes hear voices or become convinced they are being punished or are ill. Has anything like that happened to you?”"],
      ["Substances and medical causes", "“What medicines do you take? How much do you drink or use? Any new health problems, such as weight change, feeling cold or a recent stroke?”"]
    ],
    tx: {
      asOf: "October 2026",
      first: "Psychotherapy (CBT, interpersonal therapy, behavioral activation) and/or an antidepressant such as an [[stahl:c/ch07/guide/s7-ssri|SSRI]], [[stahl:c/ch07/guide/s7-snri|SNRI]], [[stahl:drugs/bupropion|bupropion]] or [[stahl:drugs/mirtazapine|mirtazapine]]; combine the two for moderate to severe depression.",
      points: [
        "Give an adequate trial (therapeutic dose for about 4–8 weeks) before judging response; then optimize the dose, switch, or augment.",
        "FDA-approved augmenting agents for MDD include [[stahl:drugs/aripiprazole|aripiprazole]], [[stahl:drugs/brexpiprazole|brexpiprazole]], [[stahl:drugs/cariprazine|cariprazine]] and extended-release [[stahl:drugs/quetiapine|quetiapine]]; [[stahl:drugs/lithium|lithium]] and [[stahl:drugs/thyroid-hormone|thyroid hormone]] are classic options.",
        "**With psychotic features**: an antidepressant plus an antipsychotic, or ECT.",
        "**ECT** is the most effective acute treatment for severe, psychotic, catatonic or highly suicidal depression; catatonia also responds to lorazepam.",
        "Treatment-resistant depression: [[stahl:drugs/esketamine|esketamine]] nasal spray (approved with an oral antidepressant and, since January 2025, as monotherapy), rTMS and ECT.",
        "**Postpartum depression**: [[stahl:drugs/zuranolone|zuranolone]], an oral neuroactive steroid given for 14 days (FDA-approved 2023). Intravenous brexanolone has been discontinued by its manufacturer.",
        "Mixed features, a family history of bipolar disorder, an early age at onset or psychotic depression raise the risk of bipolar disorder: screen carefully before an antidepressant alone.",
        "Antidepressants carry a boxed warning for suicidal thoughts and behavior in people under 25: monitor closely early in treatment."
      ],
      stahl: [["Response and remission", "c/ch07/guide/s7-outcomes"], ["SSRIs", "c/ch07/guide/s7-ssri"], ["SNRIs", "c/ch07/guide/s7-snri"], ["Augmentation", "c/ch07/guide/s7-augment-sda"], ["Ketamine and esketamine", "c/ch07/guide/s7-ketamine"], ["Neuroactive steroids", "c/ch07/guide/s7-neurosteroids"], ["Symptom-based choice", "c/ch06/guide/s6-algorithm"]]
    }
  },
  {
    id: "pdd",
    ask: [
      ["A Chronic depressed mood", "“How long have you felt like this? When was the last time you felt well for more than 2 months in a row?”", "Many patients say “I’ve always been this way”; the chronicity itself is the finding."],
      ["B Symptoms (two needed)", "“How are your appetite, sleep and energy? How do you see yourself? Is it hard to concentrate or make decisions? How do you see the future?”", "Anhedonia, guilt and suicidality are not on the PDD list."],
      ["Superimposed major depressive episodes", "“Have there been times when it got much worse for 2 weeks or more, and you stopped enjoying anything?”"],
      ["Past hypomania or mania", "“Have you ever had days of feeling unusually good or energetic with little need for sleep?”", "Cyclothymia or bipolar disorder precludes PDD."],
      ["Onset", "“How old were you when this started?”", "Before 21 = early onset."]
    ],
    tx: {
      asOf: "October 2026",
      first: "An antidepressant combined with psychotherapy; in chronic depression the combination tends to work better than either alone. CBASP (cognitive behavioral analysis system of psychotherapy) was developed specifically for chronic depression.",
      points: [
        "The same antidepressants as for MDD are used; response is often slower, so allow full trials.",
        "Treat comorbid anxiety, substance use and personality disorders, which are common and worsen outcome.",
        "Long-term maintenance treatment is often needed."
      ],
      stahl: [["Response and remission", "c/ch07/guide/s7-outcomes"], ["SSRIs", "c/ch07/guide/s7-ssri"], ["Combining drugs", "c/ch07/guide/s7-combos"]]
    }
  },
  {
    id: "dmdd",
    ask: [
      ["Outburst frequency", "To parents: “How often does she have big blow-ups, like screaming, throwing things or hitting? How many in a usual week?”", "Need an average of three or more a week."],
      ["Mood between outbursts", "“Between blow-ups, what is her mood like most of the day? Would her teacher say the same?”", "Persistent irritability between outbursts separates DMDD from intermittent explosive disorder."],
      ["Duration and settings", "“How long has this been going on? Has there been a stretch of 3 months without it? Does it happen at home, at school and with friends?”"],
      ["Age of onset", "“How old was she when this started?”", "Onset must be before age 10."],
      ["Mania screen", "“Has there been a time when she was unusually giddy or silly for more than a day, needed very little sleep without being tired, or talked about big plans?”", "A manic-like period over 1 day excludes DMDD."],
      ["Child’s own view", "To the child: “What makes you so angry? How do you feel most days, even when nothing bad is happening?”"]
    ],
    tx: {
      asOf: "October 2026",
      first: "Psychosocial treatment first: parent management training, CBT that targets irritability and frustration, and school supports.",
      points: [
        "Treat comorbid ADHD; stimulants often reduce irritability as well.",
        "No medication is FDA-approved for DMDD. SSRIs are studied for irritability; antipsychotics such as risperidone or aripiprazole are reserved for severe aggression, with metabolic monitoring.",
        "DMDD is not pediatric bipolar disorder: it is not treated as such."
      ],
      stahl: [["ADHD and stimulants", "c/ch11/guide"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
    }
  },
  {
    id: "pmdd",
    ask: [
      ["Timing", "“Do these feelings start in the week before your period and ease within a few days after it starts? How do you feel in the week after your period?”", "Symptoms must be minimal or absent the week after menses."],
      ["Affective symptoms", "“In that week, do your moods swing, do you snap at people, feel hopeless, or feel tense and anxious?”", "At least one affective symptom is required."],
      ["Other symptoms", "“What about interest, concentration, energy, appetite or cravings, sleep, feeling overwhelmed, or physical symptoms like breast tenderness or bloating?”", "Physical symptoms count as one item together."],
      ["Impact", "“How does it affect your work, school or relationships?”"],
      ["Confirmation", "Give a daily symptom chart to complete prospectively for at least two cycles.", "Until then, record the diagnosis as provisional."],
      ["Hormones and medications", "“Do you take hormonal contraception or other hormones?”", "Symptoms that begin with a hormone treatment suggest a medication cause."]
    ],
    tx: {
      asOf: "October 2026",
      first: "An SSRI, taken daily or only in the luteal phase; [[stahl:drugs/fluoxetine|fluoxetine]], [[stahl:drugs/sertraline|sertraline]] and controlled-release [[stahl:drugs/paroxetine|paroxetine]] are FDA-approved for PMDD. SSRIs often work within days in PMDD.",
      points: [
        "A drospirenone–ethinyl estradiol combined oral contraceptive is FDA-approved for PMDD in women who also want contraception.",
        "CBT and lifestyle measures help, alone or with medication.",
        "Severe, refractory cases: ovulation suppression with a GnRH agonist (with add-back hormones), after specialist review."
      ],
      stahl: [["SSRIs", "c/ch07/guide/s7-ssri"], ["Fluoxetine", "drugs/fluoxetine"]]
    }
  },
  {
    id: "substance-induced-depressive",
    ask: [
      ["Timeline", "“Which came first, the low mood or the drinking or drug use? Have you been depressed during times you weren’t using?”", "Symptoms that preceded use suggest an independent disorder."],
      ["Withdrawal", "“How do you feel when you stop or cut down?”", "Stimulant withdrawal and alcohol withdrawal are classic causes."],
      ["Medications", "“Did your mood change after starting, stopping or changing any medicine, such as steroids, interferon or blood pressure pills?”"],
      ["Persistence", "“Since you stopped, has the low mood eased?”", "Persistence about 1 month after withdrawal or intoxication ends suggests an independent disorder."]
    ],
    tx: {
      asOf: "October 2026",
      first: "Stop or reduce the causative substance or medication, and treat the substance use disorder.",
      points: [
        "Reassess after about a month of abstinence: depression that persists is likely independent and needs its own treatment.",
        "Treat sooner if symptoms are severe or suicidal; suicide risk is high during intoxication and withdrawal.",
        "Medication causes such as interferon or corticosteroids: weigh dose changes or alternatives with the prescriber."
      ],
      stahl: [["Addiction", "c/ch13/guide"]]
    }
  },
  {
    id: "depressive-due-to-amc",
    ask: [
      ["Timeline", "“Did the change in your mood begin around the time your illness started or got worse?”", "Temporality is the strongest evidence of a medical cause."],
      ["Physical symptoms", "“Have you noticed weight change, feeling cold or hot, palpitations, weakness, tremor or headaches?”"],
      ["Neurological history", "“Any strokes, seizures, head injuries or problems with movement?”", "Left frontal stroke, Huntington’s disease and Parkinson’s disease are strongly linked to depression."],
      ["Tests", "Check TSH and other tests guided by the history and examination."]
    ],
    tx: {
      asOf: "October 2026",
      first: "Treat the underlying medical condition (for example, thyroid replacement), then reassess mood.",
      points: [
        "Antidepressants are effective in many medically caused depressions, such as poststroke depression; choose with drug interactions and medical safety in mind.",
        "Coordinate with the treating physician, since some treatments for the medical illness can themselves cause depression."
      ],
      stahl: [["SSRIs", "c/ch07/guide/s7-ssri"], ["Inflammation and depression", "c/ch06/guide/s6-inflammation"]]
    }
  },
  {
    id: "other-specified-depressive",
    ask: [
      ["Episode length", "“How long do the low spells last, and how often do they come?”", "2–13 days monthly for a year = recurrent brief depression; 4–13 days once = short-duration episode."],
      ["Symptom count", "“During those spells, how are your sleep, appetite, energy, concentration and interest?”", "Fewer than five symptoms for 2 weeks or more = depressive episode with insufficient symptoms."]
    ],
    tx: {
      asOf: "October 2026",
      first: "Treat according to severity and impairment; psychotherapy is usually first.",
      points: ["Follow up: some presentations evolve into major depressive or bipolar disorder."],
      stahl: [["Symptom-based choice", "c/ch06/guide/s6-algorithm"]]
    }
  },
  {
    id: "unspecified-depressive",
    tx: {
      asOf: "October 2026",
      first: "Stabilize and gather more information; treat according to severity and safety until a specific diagnosis can be made.",
      points: ["Revisit the diagnosis as the history, collateral information and course become clearer."],
      stahl: []
    }
  }
]);

SP.complaintData = (SP.complaintData || []).concat([
  {
    id: "low-mood", title: "Low mood or sadness",
    intro: "Depressed mood is the most common presenting complaint in psychiatry. The key questions are how long, how many other symptoms, whether there has ever been a high, and what else could be causing it.",
    ask: ["How long has it lasted, and is it most of the day, nearly every day?", "What other symptoms: interest, sleep, appetite, energy, concentration, guilt, thoughts of death?", "Has there ever been a period of elevated or irritable mood with little need for sleep? Ask family.", "Any alcohol, drugs, new medicines or medical illness?", "A recent loss or stressor?"],
    mustNotMiss: ["**Suicide risk**: ask directly about thoughts, plans and means.", "**Bipolar depression**: past hypomania or mania changes the diagnosis and treatment.", "**Medical causes**: hypothyroidism, stroke, Parkinson’s disease, cancer (especially pancreatic).", "**Substance or medication causes**: alcohol, stimulant withdrawal, steroids, interferon.", "**Psychotic features**."],
    helpers: ["depressive", "episode", "grief"],
    items: [
      { ch: "ch04", dx: "mdd", when: "Five of nine symptoms for **≥2 weeks**, never a high." },
      { ch: "ch04", dx: "pdd", when: "Low mood more days than not for **≥2 years** (1 in youth)." },
      { ch: "ch04", dx: "other-specified-depressive", when: "Episodes too short (4–13 days) or with too few symptoms." },
      { ch: "ch04", dx: "substance-induced-depressive", when: "Onset during or soon after use, withdrawal or a new medication." },
      { ch: "ch04", dx: "depressive-due-to-amc", when: "A medical condition with a plausible mechanism and a time link." },
      { ch: "ch04", name: "Normal grief (not a disorder)", when: "Waves of sadness tied to reminders of the deceased; self-esteem preserved." },
      { ch: "ch03", dx: "bipolar-ii", when: "Major depression **plus** any past hypomanic episode." },
      { ch: "ch03", dx: "bipolar-i", when: "Any past manic episode, even if the patient presents depressed." },
      { ch: "ch03", dx: "cyclothymic", when: "Two years of many subthreshold highs and lows." },
      { ch: "ch02", dx: "schizoaffective-disorder", when: "Depression plus psychosis that persists ≥2 weeks without a mood episode." },
      { ch: "ch07", name: "Adjustment disorder with depressed mood", when: "Low mood in response to a stressor, without meeting MDE criteria." }
    ]
  },
  {
    id: "anhedonia", title: "Loss of interest or pleasure",
    intro: "Anhedonia is one of the two core symptoms of a major depressive episode, the A item of melancholic features, and a negative symptom of schizophrenia. It has a particularly strong link with suicidal ideation.",
    ask: ["Is the loss of interest new, or long-standing?", "Does the mood brighten at all with good news or visits?", "Are there also low mood, sleep and appetite changes?", "Any psychotic symptoms, now or in the past?"],
    mustNotMiss: ["**Suicidal ideation**, which anhedonia strongly predicts.", "**Negative symptoms** of a psychotic disorder."],
    helpers: ["depressive", "psychosis"],
    items: [
      { ch: "ch04", dx: "mdd", when: "Anhedonia can replace depressed mood as the core symptom." },
      { ch: "ch04", name: "Melancholic features (specifier)", when: "Near-total loss of pleasure or lack of mood reactivity." },
      { ch: "ch02", dx: "schizophrenia", when: "Anhedonia and avolition as **negative symptoms**, with or after psychosis." },
      { ch: "ch04", name: "Demoralization (not a DSM diagnosis)", when: "Helplessness in medical illness, but pleasure in some things is kept." }
    ]
  },
  {
    id: "irritable-child", title: "Irritability or temper outbursts in a child",
    intro: "Chronic irritability is common in children. Separate chronic from episodic irritability, count the outbursts, and look for what drives them.",
    ask: ["How many outbursts a week, and how severe?", "What is the mood like between outbursts?", "How long has it lasted, and in which settings?", "Has there ever been a distinct period of elevated mood or decreased need for sleep?", "Age at onset? Attention problems, anxiety, developmental differences?"],
    mustNotMiss: ["**Abuse or neglect** and a chaotic home.", "**Depression**: in youth, irritable mood can replace sad mood."],
    helpers: ["depressive"],
    items: [
      { ch: "ch04", dx: "dmdd", when: "Outbursts ≥3/week + persistent irritability between them for ≥12 months, onset before 10." },
      { ch: "ch04", dx: "mdd", when: "Irritability confined to a **2-week or longer episode** with other depressive symptoms." },
      { ch: "ch04", dx: "pdd", when: "Irritable or low mood more days than not for ≥1 year in youth." },
      { ch: "ch03", dx: "bipolar-i", when: "**Episodic** change with elevated mood, grandiosity, decreased need for sleep." },
      { ch: "ch15", name: "Oppositional defiant disorder", when: "Defiance and vindictiveness; if DMDD criteria are met, diagnose DMDD only." },
      { ch: "ch15", name: "Intermittent explosive disorder", when: "Outbursts without irritability between them; 3 months suffice." },
      { ch: "ch01", name: "ADHD or autism spectrum disorder", when: "Outbursts driven by impulsivity, or by disrupted routines in autism." }
    ]
  },
  {
    id: "premenstrual", title: "Mood symptoms before menstrual periods",
    intro: "Ask whether the symptoms truly switch on before menses and off afterward, and confirm with prospective daily ratings.",
    ask: ["Do the symptoms start in the last week before menses and resolve within days after?", "Is she well in the week after menses?", "Are there affective symptoms (lability, irritability, depression, anxiety), or only physical ones?", "Any hormonal contraception or other hormones?"],
    mustNotMiss: ["An **underlying depressive or anxiety disorder** that worsens premenstrually."],
    items: [
      { ch: "ch04", dx: "pmdd", when: "≥5 symptoms (≥1 affective) in the luteal week, minimal after menses, confirmed over 2 cycles." },
      { ch: "ch04", name: "Premenstrual exacerbation", when: "An ongoing disorder that worsens premenstrually but is never symptom-free after menses." },
      { ch: "ch04", name: "Premenstrual syndrome (not a DSM diagnosis)", when: "Fewer symptoms, no affective symptom required." },
      { ch: "ch04", dx: "substance-induced-depressive", when: "Symptoms that began with a hormonal medication." }
    ]
  },
  {
    id: "after-loss", title: "Distress after a death",
    intro: "Grief is not a disorder, but a major depressive episode can occur alongside it, and grief can become prolonged and impairing.",
    ask: ["How long since the death?", "Does the sadness come in waves with reminders, or is it constant?", "How does the person see themselves: worthless, or still themselves?", "Are thoughts of death about joining the deceased, or about ending their own pain?", "Is there intense yearning or preoccupation with the deceased?"],
    mustNotMiss: ["**Suicide risk**, which rises after the death of a spouse or child.", "A **major depressive episode** hidden by the assumption that it is “just grief.”"],
    helpers: ["grief"],
    items: [
      { ch: "ch04", name: "Normal grief", when: "Waves of emptiness and longing; positive emotions and humor remain; self-esteem preserved." },
      { ch: "ch04", dx: "mdd", when: "Pervasive low mood, anhedonia, worthlessness and self-focused death wishes, **in addition to** grief." },
      { ch: "ch07", name: "Prolonged grief disorder", when: "Intense yearning or preoccupation **≥12 months** after the death (6 in children)." },
      { ch: "ch07", name: "Adjustment disorder", when: "Distress out of proportion to the loss without meeting other criteria." },
      { ch: "ch07", name: "Posttraumatic stress disorder", when: "A violent or sudden death with intrusions, avoidance and hyperarousal." }
    ]
  },
  {
    id: "suicidal", title: "Suicidal thoughts",
    intro: "Ask about suicide directly in every depressed patient. The aim is to find the disorder driving the risk and to judge immediate safety.",
    ask: ["Passive thoughts of death, or active thoughts of suicide?", "Is there a plan, intent, preparation or access to means (firearms, medicines)?", "Any past attempts?", "Alcohol or drug use now?", "Hopelessness, agitation or anxious distress?"],
    mustNotMiss: ["**Imminent risk**: plan, intent, means, recent attempt.", "**Command hallucinations** or psychotic guilt.", "**Intoxication** or withdrawal.", "**Mixed features** or agitation, which raise risk."],
    items: [
      { ch: "ch04", dx: "mdd", when: "Recurrent thoughts of death or suicide are criterion A9; a plan or attempt need occur only once." },
      { ch: "ch03", dx: "bipolar-i", when: "Depressive and mixed episodes carry especially high risk." },
      { ch: "ch04", dx: "substance-induced-depressive", when: "Risk peaks in intoxication and withdrawal." },
      { ch: "ch02", dx: "schizophrenia", when: "About 5%–6% die by suicide and about 20% attempt." },
      { ch: "ch18", dx: "borderline-pd", when: "Recurrent suicidal behavior and self-injury in unstable relationships." },
      { ch: "ch22", name: "Suicidal behavior codes", when: "Current or past suicidal behavior can be coded alongside any diagnosis." }
    ]
  },
  {
    id: "fatigue", title: "Fatigue or low energy",
    intro: "Fatigue is the commonest presenting complaint of depression in primary care, and depression is underdiagnosed because of it. Look for the other depressive symptoms, and for medical causes.",
    ask: ["Is there low mood or loss of interest as well?", "How are sleep, appetite and concentration?", "Any snoring, daytime sleepiness, weight change, heavy periods or new medicines?"],
    mustNotMiss: ["**Hypothyroidism**, anemia, sleep apnea, diabetes, cancer.", "**Stimulant withdrawal**."],
    items: [
      { ch: "ch04", dx: "mdd", when: "Fatigue plus four other symptoms including a core one, for ≥2 weeks." },
      { ch: "ch04", dx: "pdd", when: "Chronic low energy with low mood for ≥2 years." },
      { ch: "ch04", name: "Atypical features (specifier)", when: "Leaden paralysis, hypersomnia and mood reactivity." },
      { ch: "ch04", dx: "depressive-due-to-amc", when: "A medical cause with a time link." },
      { ch: "ch12", name: "Sleep-wake disorders", when: "Fatigue from disturbed sleep, such as obstructive sleep apnea or insomnia disorder." }
    ]
  },
  {
    id: "sleep", title: "Sleeping too much or too little",
    intro: "Sleep change is nearly universal in mood disorders. The key distinction is **insomnia** (wants to sleep, cannot, tired next day) versus **decreased need for sleep** (feels rested on little sleep), which points to mania or hypomania.",
    ask: ["Trouble falling asleep, waking in the night, or waking too early?", "Tired the next day, or rested and energetic?", "Sleeping more than usual, 10 hours or more?", "Alcohol, caffeine, stimulants or sleeping pills?"],
    mustNotMiss: ["**Decreased need for sleep**: screen for hypomania or mania.", "Obstructive **sleep apnea**."],
    items: [
      { ch: "ch04", dx: "mdd", when: "Insomnia (often middle or terminal) or hypersomnia nearly every day." },
      { ch: "ch04", name: "Melancholic features (specifier)", when: "Waking at least 2 hours early, worst in the morning." },
      { ch: "ch04", name: "Atypical or seasonal features", when: "Hypersomnia with increased appetite, often in winter." },
      { ch: "ch03", dx: "bipolar-i", when: "Feeling rested after 3 hours of sleep: decreased need for sleep." },
      { ch: "ch12", name: "Insomnia disorder", when: "Insomnia that is the main complaint and not explained by another disorder." }
    ]
  },
  {
    id: "perinatal", title: "Mood change during pregnancy or after childbirth",
    intro: "Perinatal mood problems are common and range from benign maternity blues to postpartum psychosis, a psychiatric emergency.",
    ask: ["When did it start: during pregnancy, or how long after delivery?", "Does it impair her functioning, and is it lasting longer than a week?", "Any thoughts of harming herself or the baby?", "Any confusion, delusions or hallucinations?", "Personal or family history of bipolar disorder?"],
    mustNotMiss: ["**Postpartum psychosis**: an emergency, often bipolar, with risk to mother and infant.", "**Thoughts of harming the infant**.", "**Thyroid disease** and postpartum delirium."],
    items: [
      { ch: "ch04", name: "Maternity blues (not a disorder)", when: "Sudden tearfulness in the first days, no impairment, improves within about a week." },
      { ch: "ch04", dx: "mdd", when: "An MDE beginning during pregnancy or within 4 weeks after delivery: **with peripartum onset**." },
      { ch: "ch03", dx: "bipolar-i", when: "Postpartum manic or psychotic episodes; recurrence risk 30%–50% per delivery after one." },
      { ch: "ch02", dx: "brief-psychotic-disorder", when: "Psychosis lasting less than a month, specifier with peripartum onset." },
      { ch: "ch04", dx: "depressive-due-to-amc", when: "Postpartum thyroiditis and other perinatal medical causes." }
    ]
  },
  {
    id: "memory-older", title: "Memory complaints with low mood in an older adult",
    intro: "Depression in late life can mimic, accompany or herald a neurocognitive disorder.",
    ask: ["Did the low mood or the memory problem come first?", "Is the onset subacute (weeks) or gradual (years)?", "Does the person complain loudly about memory, or minimize it?", "Any fluctuation in attention or alertness?"],
    mustNotMiss: ["**Delirium**: fluctuating attention and awareness.", "**Medical and medication causes**.", "**Suicide risk**, which stays high in later life, especially in men."],
    items: [
      { ch: "ch04", dx: "mdd", when: "Subacute onset with depressive symptoms, “don’t know” answers, effort-dependent deficits (“pseudodementia”)." },
      { ch: "ch04", dx: "depressive-due-to-amc", when: "Poststroke depression or depression in Parkinson’s or Huntington’s disease." },
      { ch: "ch17", dx: "major-ncd", when: "Gradual decline that precedes the mood change, often minimized by the patient." },
      { ch: "ch17", dx: "delirium", when: "Acute, fluctuating disturbance of attention and awareness." }
    ]
  },
  {
    id: "chronic-low", title: "Low mood for years",
    intro: "Chronic depression is easy to mistake for personality. Date the onset, look for periods of being well, and look for highs.",
    ask: ["When did you last feel well for more than 2 months?", "Have there been worse spells of 2 weeks or more?", "Any periods of feeling unusually good or energetic?", "Long-standing patterns in relationships and self-image?"],
    mustNotMiss: ["A superimposed **major depressive episode**.", "**Cyclothymia or bipolar disorder**."],
    items: [
      { ch: "ch04", dx: "pdd", when: "Low mood more days than not for ≥2 years with two of six symptoms." },
      { ch: "ch04", dx: "mdd", when: "Recurrent episodes; diagnose with PDD when both are met." },
      { ch: "ch03", dx: "cyclothymic", when: "Subthreshold highs as well as lows for ≥2 years; precludes PDD." },
      { ch: "ch18", name: "Personality disorders", when: "Borderline, avoidant and dependent personality disorders often coexist; both can be diagnosed." }
    ]
  },
  {
    id: "after-substance", title: "Mood change after a new medicine or drug",
    intro: "Always ask what changed before the mood changed. Substance- and medication-induced syndromes are common and usually resolve when the cause is removed.",
    ask: ["What was started, stopped or changed, and when?", "Did the symptoms begin during intoxication, withdrawal or after a medication change?", "Were there similar symptoms before any use?", "Do symptoms persist after about a month without the substance?"],
    mustNotMiss: ["**Withdrawal** states that are medically dangerous (alcohol, sedatives).", "**Suicide risk** during intoxication or withdrawal."],
    items: [
      { ch: "ch04", dx: "substance-induced-depressive", when: "Depression during or soon after use, withdrawal or medication exposure." },
      { ch: "ch03", dx: "substance-induced-bipolar", when: "Mania or hypomania after a stimulant, steroid or antidepressant." },
      { ch: "ch02", dx: "substance-induced-psychotic", when: "Delusions or hallucinations from a substance, without insight." }
    ]
  },
  {
    id: "elevated", title: "Elevated or irritable mood with little sleep",
    intro: "A distinct period of elevated or irritable mood with increased energy is the gateway to the bipolar chapter. Duration and severity decide between mania, hypomania and their look-alikes.",
    ask: ["How many days did it last, and was it most of the day, nearly every day?", "Did you need less sleep and still feel rested?", "Was there hospitalization, psychosis or marked impairment?", "Any substances, antidepressants or steroids?"],
    mustNotMiss: ["**Mania with psychosis or dangerous behavior**.", "**Substance or medical causes** (stimulants, steroids, hyperthyroidism)."],
    helpers: ["episode", "bipolar"],
    items: [
      { ch: "ch03", dx: "bipolar-i", when: "Manic episode: ≥1 week, or any duration if hospitalized." },
      { ch: "ch03", dx: "bipolar-ii", when: "Hypomania ≥4 days plus a past major depressive episode." },
      { ch: "ch03", dx: "cyclothymic", when: "Subthreshold highs and lows for ≥2 years." },
      { ch: "ch04", dx: "mdd", when: "Three or more manic symptoms during depression: **with mixed features**, if full hypomania was never met." },
      { ch: "ch03", dx: "substance-induced-bipolar", when: "Onset after a stimulant, steroid or antidepressant that persists beyond its effects." }
    ]
  },
  {
    id: "psychosis", title: "Hearing voices or unusual beliefs",
    intro: "Psychotic symptoms occur across many chapters. Time course, the relationship with mood episodes, and substances and medical causes decide the diagnosis.",
    ask: ["How long have the symptoms lasted?", "Did they occur only during mood episodes, or also outside them?", "Any substances, medicines or medical illness?", "Is insight kept?"],
    mustNotMiss: ["**Delirium** and other medical causes.", "**Substance intoxication or withdrawal**.", "**Command hallucinations** to harm self or others."],
    helpers: ["psychosis"],
    items: [
      { ch: "ch02", dx: "schizophrenia", when: "≥6 months of illness, including ≥1 month of active symptoms." },
      { ch: "ch02", dx: "schizoaffective-disorder", when: "Mood episodes for most of the illness plus ≥2 weeks of psychosis without mood symptoms." },
      { ch: "ch04", dx: "mdd", when: "Psychosis **only** during depressive episodes: with psychotic features." },
      { ch: "ch03", dx: "bipolar-i", when: "Psychosis during a manic episode makes the episode manic, by definition." },
      { ch: "ch04", name: "Normal grief experiences", when: "Briefly hearing or seeing the deceased, with insight." },
      { ch: "ch02", dx: "substance-induced-psychotic", when: "Psychosis linked to intoxication or withdrawal." }
    ]
  }
]);
