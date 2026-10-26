/* Chapter 12 study guide. Source: DSM-5-TR, Sleep-Wake Disorders (pp. 407–476).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. Codes checked against ICD-10-CM through FY2027 (October 1, 2026)
   and the APA DSM-5-TR updates of September 2022–2025. Treatment notes, sleep-medicine rules of thumb and other
   clinical teaching are outside the DSM and labeled as such. */
SP.add("ch12", "guide", {
  intro: "The sleep-wake disorders share one shape: a complaint about the **quality, timing or amount of sleep** plus **daytime distress or impairment** (p. 407). The chapter is written for psychiatrists and generalists, not sleep specialists, so it **lumps** where splitting adds little (one **insomnia disorder** with comorbidity specifiers) and **splits** where biology justifies it (four coded **narcolepsy** subtypes, defined partly by **CSF hypocretin**). It covers **insomnia disorder**, **hypersomnolence disorder**, **narcolepsy**, the three **breathing-related sleep disorders** (obstructive sleep apnea hypopnea, central sleep apnea, sleep-related hypoventilation), the **circadian rhythm sleep-wake disorders**, the **parasomnias** (NREM sleep arousal disorders, nightmare disorder, REM sleep behavior disorder), **restless legs syndrome**, **substance/medication-induced sleep disorder** and six residual categories. Several diagnoses need a **sleep study**: polysomnography for apnea and usually for REM sleep behavior disorder, an **MSLT** for narcolepsy type 2. Many codes are **G codes** from the nervous system chapter of ICD-10-CM, not F codes. Sleep problems matter in every other chapter: they are **risk factors and early signs** of depression, bipolar disorder, anxiety and substance use, and insomnia and nightmares raise **suicide risk**. Use the [[helper:sleep|sleep-wake helper]] and the [[helper:parasomnia|night-behavior helper]] to practice the reasoning.",
  objectives: [
    "Describe the **sleep stages** (N1, N2, N3, REM) and their share of the night, and define sleep latency, wake after sleep onset, sleep efficiency, REM latency and the **sleep-onset REM period**.",
    "State the criteria for **insomnia disorder**: dissatisfaction plus one of three symptoms, **3 nights a week for 3 months**, adequate opportunity, distress or impairment, and the rule that comorbid disorders must not **adequately explain** it; use the three comorbidity specifiers and record the comorbid code **after F51.01**.",
    "Tell **hypersomnolence disorder** (sleep of at least **7 hours** with lapses, a **>9-hour** unrefreshing main sleep or **sleep inertia**) from **narcolepsy**, insufficient sleep, long sleepers, and the fatigue of depression.",
    "State the **narcolepsy** criteria (sleep need **3 times a week for 3 months** plus cataplexy, **hypocretin ≤110 pg/mL**, or a positive PSG/MSLT) and code the four subtypes **G47.411, G47.419, G47.421, G47.429**.",
    "Grade **obstructive sleep apnea hypopnea** by AHI (**<15, 15–30, >30**), know when symptoms are needed (AHI **5–14**) and when they are not (**≥15**), and separate it from **central sleep apnea** (>50% central events) and **sleep-related hypoventilation**.",
    "Name the five coded **circadian** types (delayed, advanced, irregular, non-24-hour, shift work) with their **G47.2x** codes and the clue to each.",
    "Contrast the parasomnias: **NREM arousal disorders** (first third of the night, amnesia, hard to wake), **nightmare disorder** (second half, vivid recall, quickly alert) and **REM sleep behavior disorder** (dream enactment, REM without atonia, **synucleinopathy** risk).",
    "State the **restless legs syndrome** criteria (urge, rest, relief by movement, evening, **3 times a week for 3 months**) and tell it from **akathisia**, cramps and positional discomfort.",
    "Code **substance/medication-induced sleep disorder** with the 1/2/9 rule, the **caffeine (F15.982)** and **tobacco (F17.208)** exceptions, and the four types; know the residual categories and their examples."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s12-map",
          title: "How the chapter is built",
          pages: "407–408",
          blocks: [
            { type: "table", caption: "Diagnoses in this chapter (codes as printed in DSM-5-TR, 2022; unchanged through October 2026)", head: ["Diagnosis", "Code", "Page"], rows: [
              "Insomnia and sleepiness",
              ["[[dx:insomnia|Insomnia disorder]]", "F51.01", "409–417"],
              ["[[dx:hypersomnolence|Hypersomnolence disorder]]", "F51.11", "417–421"],
              ["[[dx:narcolepsy|Narcolepsy]]", "G47.411 · G47.419 · G47.421 · G47.429", "422–429"],
              "Breathing-related sleep disorders",
              ["[[dx:osa|Obstructive sleep apnea hypopnea]]", "G47.33", "429–435"],
              ["[[dx:csa|Central sleep apnea]]", "G47.31 · R06.3 · G47.37", "435–439"],
              ["[[dx:sleep-hypoventilation|Sleep-related hypoventilation]]", "G47.34 · G47.35 · G47.36", "439–443"],
              "Circadian rhythm sleep-wake disorders",
              ["[[dx:circadian-delayed|Delayed sleep phase type]]", "G47.21", "444–446"],
              ["[[dx:circadian-advanced|Advanced sleep phase type]]", "G47.22", "446–447"],
              ["[[dx:circadian-irregular|Irregular sleep-wake type]]", "G47.23", "447–448"],
              ["[[dx:circadian-non24|Non-24-hour sleep-wake type]]", "G47.24", "448–450"],
              ["[[dx:circadian-shift|Shift work type]]", "G47.26", "450–451"],
              ["Unspecified type", "G47.20", "444"],
              "Parasomnias",
              ["[[dx:sleepwalking|NREM sleep arousal disorder, sleepwalking type]]", "F51.3", "452–457"],
              ["[[dx:sleep-terrors|NREM sleep arousal disorder, sleep terror type]]", "F51.4", "452–457"],
              ["[[dx:nightmare|Nightmare disorder]]", "F51.5", "457–461"],
              ["[[dx:rbd|REM sleep behavior disorder]]", "G47.52", "461–464"],
              "Other",
              ["[[dx:rls|Restless legs syndrome]]", "G25.81", "464–468"],
              ["[[dx:substance-induced-sleep|Substance/medication-induced sleep disorder]]", "By substance (F10–F19)", "468–474"],
              ["[[dx:other-specified-insomnia|Other specified insomnia disorder]] · [[dx:unspecified-insomnia|unspecified]]", "G47.09 · G47.00", "475"],
              ["[[dx:other-specified-hypersomnolence|Other specified hypersomnolence disorder]] · [[dx:unspecified-hypersomnolence|unspecified]]", "G47.19 · G47.10", "475–476"],
              ["[[dx:other-specified-sleep-wake|Other specified sleep-wake disorder]] · [[dx:unspecified-sleep-wake|unspecified]]", "G47.8 · G47.9", "476"]
            ] },
            { type: "callout", kind: "key", title: "Five ideas that run through the chapter", text: "1) **Daytime consequences** are part of every diagnosis: poor sleep without distress or impairment is not a disorder. 2) **Coexisting conditions are the rule** (p. 408): insomnia, hypersomnolence and nightmare disorder are diagnosed **alongside** a mental or medical disorder when they need **independent clinical attention**, without deciding which caused which. 3) Some diagnoses rest on **biological markers**: polysomnography for breathing disorders and REM sleep behavior disorder, the MSLT and **CSF hypocretin** for narcolepsy. 4) **Timing within the night** separates the parasomnias: NREM events in the **first third**, nightmares and REM sleep behavior disorder **later**. 5) The chapter keeps pointing to **ICSD-3**, the sleep specialists’ more detailed classification (p. 407)." },
            { type: "list", title: "Why sleep disorders belong in a psychiatric manual (p. 408)", items: [
              "Sleep disorders are often accompanied by **depression, anxiety and cognitive change** that shape treatment.",
              "Persistent insomnia **or** excessive sleepiness is a **risk factor** for later mental illness, including substance use disorders.",
              "Sleep disturbance can be a **prodrome** of a mood or psychotic episode, offering a chance to **intervene early**.",
              "Common medical companions: **breathing-related sleep disorders**, heart failure and COPD, **neurodegenerative** disease, arthritis. These both disturb sleep and **worsen during sleep**.",
              "**REM sleep behavior disorder** is often an **early sign of an alpha-synucleinopathy** such as Parkinson’s disease."
            ] },
            { type: "callout", kind: "caution", title: "Suicide: ask about sleep (pp. 409, 415, 459)", text: "**Insomnia** raises the risk of suicidal thoughts, suicidal behavior and death **even after adjusting for depression**, and **frequent nightmares** raise the risk of suicidal thoughts and behavior. In one college sample, **31.3%** of students with sleep problems had suicidal thoughts, and **82.7%** of those with suicidal thoughts had sleep problems. In teenagers, **less than 8 hours** of sleep is linked with self-harm and suicidal thoughts and behavior (AASM consensus). Ask about sleep in every suicide assessment, and about suicide in every severe insomnia." },
            { type: "update", kind: "tr", title: "What the text revision changed", text: "The criteria are essentially those of DSM-5 (2013). DSM-5-TR (2022) **reorganized the narcolepsy subtypes** to match ICSD-3 (**type 1** with cataplexy or hypocretin deficiency, **type 2** without, each also “due to a medical condition”), with four codes (G47.411, G47.419, G47.421, G47.429); added sections on the **association with suicidal thoughts or behavior** (chapter-wide, insomnia, nightmare disorder); and revised the **prevalence, culture-related and sex- and gender-related** text throughout, including the effects of **social determinants of health** on narcolepsy and obstructive sleep apnea. Confirm details against pp. 407–476." }
          ]
        },
        {
          id: "s12-sleep-basics",
          title: "Sleep stages and the language of sleep studies",
          pages: "408–409",
          blocks: [
            { type: "table", caption: "The four sleep stages in a healthy adult (p. 408)", head: ["Stage", "Share of sleep", "What marks it"], rows: [
              ["**N1**", "About **5%**", "The **transition** from wake to sleep"],
              ["**N2**", "About **50%**", "**Sleep spindles** and **K complexes** on the EEG"],
              ["**N3** (slow-wave sleep)", "About **20%** in healthy younger adults", "The **deepest** sleep; concentrated in the **first third to half** of the night; increases after sleep deprivation"],
              ["**REM**", "About **20%–25%**", "Most **story-like dreams**; recurs about every **80–100 minutes**; periods **lengthen toward morning**"]
            ] },
            { type: "flow", title: "One night of sleep (p. 408)", steps: [
              ["Early night", "**N3** dominates: the window for sleepwalking and sleep terrors", "guide"],
              ["Cycles", "NREM and REM alternate about every 80–100 minutes", "mech"],
              ["Late night", "**REM** periods grow longer: nightmares and REM sleep behavior disorder", "case"]
            ], note: "This one fact explains the timing of the parasomnias." },
            { type: "defs", title: "Polysomnographic terms (p. 409)", items: [
              ["Polysomnography (PSG)", "Recording of several **electrophysiological signals** (EEG, eye movements, muscle tone, breathing, oxygen) during sleep, usually overnight."],
              ["Multiple sleep latency test (MSLT)", "A **daytime** test: the person lies down in a dark room **five times** across the day and is allowed to fall asleep; the time to sleep onset on each nap measures **physiological sleepiness**."],
              ["Sleep continuity", "The overall balance of sleep and wake across the night: better continuity means **consolidated** sleep."],
              ["Sleep latency", "Minutes from lights out to **falling asleep**."],
              ["Wake after sleep onset", "Minutes **awake** between first sleep onset and the final awakening."],
              ["Sleep efficiency", "**Time asleep ÷ time in bed**, as a percentage; higher is better."],
              ["Sleep architecture", "The **amount and distribution** of each stage, in minutes and as a percentage of total sleep."],
              ["REM latency", "Time from sleep onset to the **first REM period**."],
              ["Sleep-onset REM period (SOREMP)", "REM sleep beginning **within 15 minutes** of sleep onset."]
            ] },
            { type: "callout", kind: "pearl", title: "Age changes the normal (p. 408)", text: "Children and young adolescents have stable sleep with **large amounts of slow-wave sleep**. Through adulthood, continuity and depth **decline**: more wake and N1, **less N3**. A 70-year-old who wakes twice a night and feels fine may be sleeping normally for age; always judge sleep against the **person’s age**." },
            { type: "callout", kind: "exam", title: "Which test for which question?", text: "**Overnight PSG** answers *what happens during sleep* (apneas, desaturation, REM without atonia, periodic limb movements). The **MSLT** answers *how sleepy are you by day* (mean sleep latency, SOREMPs). **Sleep diaries and actigraphy** answer *when do you sleep* over weeks (circadian disorders, insufficient sleep). **CSF hypocretin-1** answers *is the orexin system destroyed* (narcolepsy type 1)." }
          ]
        },
        {
          id: "s12-coding",
          title: "Codes and how to record them",
          pages: "409–476",
          blocks: [
            { type: "table", caption: "Where the codes come from", head: ["Code family", "Diagnoses", "Why"], rows: [
              ["**F51.x** (mental and behavioral)", "Insomnia disorder **F51.01**, hypersomnolence disorder **F51.11**, sleepwalking **F51.3**, sleep terrors **F51.4**, nightmare disorder **F51.5**", "Sleep disorders “not due to a substance or known physiological condition”"],
              ["**G47.x** (nervous system)", "Narcolepsy, OSA, central apnea, hypoventilation, circadian types, REM sleep behavior disorder, the residual categories", "Organic sleep disorders"],
              ["**G25.81**", "Restless legs syndrome", "A movement disorder code"],
              ["**R06.3**", "Cheyne-Stokes breathing", "A symptom code for a breathing pattern"],
              ["**F10–F19**", "Substance/medication-induced sleep disorder", "Built from the substance class and use disorder severity"]
            ] },
            { type: "steps", title: "Recording comorbidity: insomnia, hypersomnolence and nightmare disorder (pp. 410, 418, 458)", items: [
              ["1. Main diagnosis first", "Write the sleep disorder and its code, e.g., **F51.01 insomnia disorder**."],
              ["2. Add the specifier in words", "“**with** [name of the comorbid mental disorder, medical condition or other sleep disorder].” One code covers all three specifiers."],
              ["3. Then code the comorbid condition", "List its own code **immediately after**, e.g., F51.01 insomnia disorder, with moderate cocaine use disorder and trigeminal neuralgia; **F14.20** moderate cocaine use disorder; **G50.0** trigeminal neuralgia."],
              ["4. Duration specifier", "Insomnia: episodic, persistent or recurrent. Hypersomnolence: acute, subacute or persistent. Nightmares: acute, subacute or persistent."]
            ] },
            { type: "table", caption: "“Code first” rules", head: ["Situation", "Order", "Example"], rows: [
              ["Narcolepsy **due to a medical condition**", "Medical condition **first**, then G47.421 or G47.429", "G71.11 myotonic dystrophy; G47.429 narcolepsy without cataplexy and without hypocretin deficiency due to myotonic dystrophy (p. 422)"],
              ["Central sleep apnea **comorbid with opioid use** with an opioid use disorder", "OUD **first** (F11.10 mild, F11.20 moderate or severe), then **G47.37**", "No OUD (e.g., one-time heavy use): G47.37 alone (p. 435)"],
              ["Substance-induced sleep disorder", "**One combined code**; the use disorder is **not** coded separately", "F13.282 severe lorazepam use disorder with lorazepam-induced sleep disorder, with onset during withdrawal, insomnia type (p. 470)"]
            ] },
            { type: "callout", kind: "exam", title: "Two exceptions in the substance table (pp. 468–469)", text: "**Caffeine**: there is no official caffeine use disorder, so only one code, **F15.982**. **Tobacco**: ICD-10-CM assumes tobacco-induced sleep disorder occurs only with **moderate or severe** tobacco use disorder, so only **F17.208**. Every other class has three codes: 4th character **1** (mild use disorder), **2** (moderate or severe), **9** (no use disorder)." },
            { type: "update", kind: "post", year: "2026", title: "Codes checked through FY2027", source: "ICD-10-CM FY2025, FY2026 and FY2027 code tables (effective October 1 of 2024, 2025 and 2026); APA DSM-5-TR coding updates (September 2022–2025)", text: "No code in this chapter (**F51.x**, **G47.x**, **G25.81**, **R06.3**, or the **F10–F19** induced sleep codes) was added, deleted or revised in the October 2024, October 2025 or October 2026 ICD-10-CM updates, and the APA’s DSM-5-TR coding updates have not touched the sleep-wake chapter. There are still **no** severity subcodes for insomnia or OSA. Check the code set in force on the date of service." }
          ]
        }
      ]
    },
    {
      title: "Insomnia and hypersomnolence",
      sections: [
        {
          id: "s12-insomnia-criteria",
          title: "Insomnia disorder: the criteria",
          pages: "409–410",
          blocks: [
            { type: "criteria", title: "Insomnia disorder in brief", code: "F51.01", pages: "409–410", items: [
              ["A", "A main complaint of being **dissatisfied with how much or how well** one sleeps, with **at least one** of:", ["trouble **falling asleep** (in children: needs a caregiver to fall asleep);", "trouble **staying asleep**: frequent awakenings or difficulty getting back to sleep (in children: needs a caregiver to return to sleep);", "**waking too early** and being unable to fall back asleep."]],
              ["B", "Clinically significant **distress or impairment** (social, occupational, educational, academic, behavioral or other)."],
              ["C", "At least **3 nights a week**."],
              ["D", "For at least **3 months**."],
              ["E", "Despite **adequate opportunity** to sleep."],
              ["F", "Not better explained by, and not occurring **only during**, another **sleep-wake disorder** (narcolepsy, a breathing-related sleep disorder, a circadian rhythm disorder, a parasomnia)."],
              ["G", "Not due to the physiological effects of a **substance** (drug of abuse, medication)."],
              ["H", "The main complaint is **not adequately accounted for** by any coexisting mental disorder or medical condition."]
            ], specifiers: [["With mental disorder", "Including substance use disorders; code it after F51.01"], ["With medical condition", "Code the medical condition after F51.01"], ["With another sleep disorder", "Code the sleep disorder after F51.01"], ["Episodic", "Symptoms **1 month to less than 3 months**"], ["Persistent", "Symptoms **3 months or longer**"], ["Recurrent", "**Two or more episodes within 1 year**"]] },
            { type: "callout", kind: "exam", title: "The episodic specifier versus Criterion D", text: "Criterion D demands **3 months**, yet the specifier list includes **episodic** (1 to under 3 months). The manual resolves this in a note: insomnia lasting **under 3 months** that otherwise meets the criteria is coded **other specified insomnia disorder (G47.09)**, e.g., “short-term insomnia disorder” (pp. 410, 475). On an exam, a 6-week insomnia is **not** insomnia disorder." },
            { type: "defs", title: "Reading the criteria (pp. 410–411)", items: [
              ["Comorbidity is allowed", "Insomnia disorder is given whether it stands alone or **coexists** with major depression, pain or sleep apnea. You do **not** have to decide which caused which."],
              ["The threshold", "Give a separate insomnia diagnosis only when the insomnia is **severe enough to need its own clinical attention**; insomnia that is just one symptom of a predominant mental disorder needs no extra diagnosis."],
              ["Subjective diagnosis", "The diagnosis rests on the **person’s (or caregiver’s) perception**, not on a sleep study."],
              ["Adequate opportunity", "Separates insomnia from **sleep deprivation** by circumstance: an intern on call, a parent of a newborn."]
            ] },
            { type: "callout", kind: "pearl", title: "Why the specifiers exist", text: "DSM-IV had three separate categories (insomnia with other mental disorders, with other medical conditions, and with other sleep disorders). DSM-5 **lumped** them into one disorder with specifiers because the direction of cause is usually unknowable and **changes over time** (pp. 407, 410). Persistent insomnia is a **risk factor** for depression, anxiety and alcohol use disorder, and a common **residual symptom** after they are treated; both conditions may need treatment." },
            { type: "case", title: "Clinical vignette: the accountant after the audit", text: "A 44-year-old accountant has taken over an hour to fall asleep and woken at 3 a.m. most nights for 5 months, ever since a stressful audit that has long ended. She goes to bed at 10 p.m. with 8 hours available, watches the clock, and dreads bedtime. She is irritable and making errors at work. Mood is otherwise good, she drinks one coffee in the morning, and she does not snore.", point: "Dissatisfaction with sleep, onset and maintenance problems, **more than 3 nights a week for over 3 months**, adequate opportunity, impairment, and no other disorder explaining it: **insomnia disorder (F51.01), persistent**. The precipitant has passed; **conditioned arousal** keeps it going." }
          ]
        },
        {
          id: "s12-insomnia-features",
          title: "Insomnia disorder: what it looks like",
          pages: "411–412",
          blocks: [
            { type: "table", caption: "Where in the night (p. 411)", head: ["Type", "Also called", "Notes"], rows: [
              ["Sleep-onset", "**Initial** insomnia", "Difficulty falling asleep at bedtime; more common in **young adults**"],
              ["Sleep maintenance", "**Middle** insomnia", "Frequent or prolonged night waking; the **most common single symptom** (about **60%**)"],
              ["Late", "Early-morning awakening", "Waking early without getting back to sleep; may reflect an **age-related phase advance**"],
              ["Mixed", "—", "A **combination** is the most common presentation overall, and the pattern **shifts over time**"]
            ] },
            { type: "table", caption: "Illustrative severity guides, not criteria (p. 411)", head: ["Symptom", "Rough threshold"], rows: [
              ["Difficulty initiating sleep", "Subjective sleep latency **> 20–30 minutes**"],
              ["Difficulty maintaining sleep", "Subjective wake after sleep onset **> 20–30 minutes**"],
              ["Early-morning awakening", "Waking at least **1 hour** before the intended time **and** before total sleep reaches **6½ hours**"]
            ] },
            { type: "callout", kind: "caution", title: "The bedtime matters", text: "Waking at 4 a.m. means something different after a **9 p.m. bedtime** than after an 11 p.m. bedtime (p. 411). Always ask **when the person went to bed**, and consider age-related **phase advance** before calling it early-morning awakening. These numbers are used in research and do **not** by themselves separate insomnia from normal sleep." },
            { type: "list", title: "Daytime and associated features (pp. 411–412)", items: [
              "**Fatigue** is common; true **daytime sleepiness** is less common, and more likely in older adults or with pain or sleep apnea.",
              "Problems with **attention, concentration, memory** and complex tasks; more **effort** needed to perform.",
              "Mood: mostly **irritability** or lability; depressive or anxiety symptoms less often.",
              "**Nonrestorative sleep** (unrefreshing despite adequate duration) usually comes with onset or maintenance problems; **isolated** nonrestorative sleep (about **5%**, more in younger people) goes to a residual category: the text says other specified **sleep-wake** disorder, the residual list says other specified **insomnia** disorder (pp. 411, 475).",
              "People may look **fatigued and haggard** or **wired**; tension headaches, muscle pain and GI symptoms; no characteristic physical signs.",
              "Many healthy older adults have broken sleep yet call themselves **good sleepers**: without distress or impairment, there is no disorder."
            ] },
            { type: "flow", title: "The vicious cycle of conditioned arousal (p. 412)", steps: [
              ["Trying harder", "Preoccupation with sleep and effort to sleep override normal sleep onset", "guide"],
              ["Bad habits", "Long time in bed, irregular schedule, naps, clock watching", "hy"],
              ["Conditioning", "The bedroom becomes a cue for **arousal**", "mech"],
              ["Paradox", "Sleep comes more easily **away from home** or when not trying", "case"]
            ], note: "This is why stimulus control and sleep restriction (in CBT-I) work; treatment is outside the DSM." },
            { type: "callout", kind: "pearl", title: "Sleep-state misperception", text: "People with insomnia usually report **longer** sleep latency, **more** wake and **less** total sleep than polysomnography shows (p. 411). This is thought to reflect **hyperarousal** (cortical activation), not exaggeration. The diagnosis is still made on the **subjective** report." }
          ]
        },
        {
          id: "s12-insomnia-course",
          title: "Insomnia disorder: prevalence, course and risk",
          pages: "412–415",
          blocks: [
            { type: "table", caption: "Prevalence (pp. 412–413)", head: ["Measure", "Figure"], rows: [
              ["Adults with insomnia **symptoms**", "About **one-third**"],
              ["Symptoms with daytime impairment", "**10%–15%**"],
              ["Insomnia **disorder**", "**4%–22%**, average about **10%**: the **most prevalent** sleep disorder"],
              ["Primary care", "**20%–40%** report significant insomnia symptoms"],
              ["With a comorbid mental disorder", "**40%–50%** of people with insomnia disorder"],
              ["Women to men", "About **1.3:1**, rising to **1.7:1 after age 45**"],
              ["Older adolescents (16–18, Norway)", "Nearly **double** in girls"]
            ] },
            { type: "list", title: "Development and course (pp. 413–414)", items: [
              "First episode most often in **young adulthood**; less often in childhood or adolescence; may start late in life with **new health problems**.",
              "In women, new insomnia rises at **menopause** and may outlast the hot flashes; first onset is often tied to the **birth of a child** (p. 414).",
              "**Situational/acute** insomnia lasts days to weeks after a stressor or schedule change and usually resolves.",
              "Insomnia that starts during a **major depressive episode** persists after the episode in at least **40%–50%**.",
              "Chronicity: **45%–75%** over follow-ups of **1–7 years**, with **night-to-night variability**.",
              "Young adults struggle to **fall** asleep; middle-aged and older adults to **stay** asleep.",
              "Children: conditioning (cannot fall asleep without a parent) and lack of routines. Adolescents: irregular schedules, especially **phase delay**."
            ] },
            { type: "table", caption: "The 3P model: predisposing, precipitating, perpetuating (p. 414; the grouping is the app’s)", head: ["Factor", "Examples from the manual"], rows: [
              ["Predisposing: temperament", "Anxious or **worry-prone** style, high arousal, **stress reactivity**, tendency to repress emotions"],
              ["Predisposing: biology", "**Female sex**, older age; family history in **35%–70%** (most often the **mother**); higher in **monozygotic** than dizygotic twins"],
              ["Predisposing: environment", "Noise, light, uncomfortable temperature, **high altitude**"],
              ["Precipitating", "Major life events (illness, separation) or chronic daily stress"],
              ["Perpetuating", "Poor sleep habits, irregular schedule, **fear of not sleeping**, excess caffeine"]
            ] },
            { type: "callout", kind: "analogy", title: "The match and the fuel", text: "The precipitant is the **match** (an exam, a death, an injury); the perpetuating habits and fears are the **fuel** that keeps the fire going after the match is gone. Treating chronic insomnia means removing the fuel, not finding the match. (Analogy written for this app; the 3P model name is outside the DSM; DSM check: p. 414.)" },
            { type: "callout", kind: "culture", title: "Culture (p. 414)", text: "Insomnia is universal, but whether it counts as a problem varies. It may be seen as a normal part of **aging or stress**, leading to low help-seeking or to coping through **social support and prayer**. Explanations include the **environment** (humidity) or bodily processes (**poor circulation, internal heat**), which may steer people to nonbiomedical care." },
            { type: "table", caption: "Markers and consequences (pp. 414–415)", head: ["Area", "What the manual says"], rows: [
              ["Polysomnography", "Longer sleep latency and wake after sleep onset, **lower sleep efficiency**, more N1, less N3; does not always match the complaint"],
              ["Quantitative EEG", "More **high-frequency** power around sleep onset and in NREM: **cortical arousal**"],
              ["Daytime sleepiness", "Usually **not** increased on objective tests: a **lower sleep propensity**"],
              ["HPA axis", "Evidence (inconsistent) of higher **cortisol**, heart rate variability, metabolic rate"],
              ["Mental health", "**Twofold or greater** risk of new depression, anxiety and substance use disorders; risk of **MDD relapse**"],
              ["Cardiovascular", "Especially with objective sleep **< 6 hours**: hypertension, coronary disease, heart failure, stroke"],
              ["Other", "Accidents, absenteeism, lower productivity and quality of life"]
            ] },
            { type: "callout", kind: "exam", title: "Sex and sleep quality (p. 414)", text: "Insomnia is **more common** in perimenopausal and postmenopausal women, yet polysomnography shows **better-preserved** sleep continuity and slow-wave sleep in older women than in older men. Prevalence and objective sleep do not move together." }
          ]
        },
        {
          id: "s12-insomnia-ddx",
          title: "Insomnia disorder: differential diagnosis and comorbidity",
          pages: "415–417",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 415–416)", head: ["Look-alike", "How to tell"], rows: [
              ["**Short sleepers**", "Need little sleep, have **no difficulty** sleeping and **no daytime symptoms**; some create insomnia by spending too long in bed"],
              ["**Age-related change**", "Lighter, more broken sleep without complaint or daytime cost"],
              ["**Inadequate opportunity**", "Emergencies, work or family duties keep the person awake: **sleep deprivation**, not insomnia (Criterion E)"],
              ["**Situational/acute insomnia**", "Days to weeks after a stressor; if all criteria except 3 months are met: **other specified or unspecified insomnia disorder**"],
              ["**Delayed sleep phase type**", "Cannot fall asleep at a **socially normal** time but sleeps well when allowed to sleep **late**; common in adolescents"],
              ["**Shift work type**", "**Recent shift work** history"],
              ["**Restless legs syndrome**", "The **urge to move the legs** and leg sensations"],
              ["**Breathing-related sleep disorder**", "Loud snoring, pauses, daytime sleepiness; but up to **50%** with apnea report insomnia (more in **women and older adults**)"],
              ["**Narcolepsy**", "**Excessive daytime sleepiness**, cataplexy, sleep paralysis, sleep-related hallucinations dominate"],
              ["**Parasomnias**", "The **unusual events** dominate the picture, not the insomnia"],
              ["**Substance/medication-induced**", "A substance is judged **causal**; e.g., insomnia only with heavy coffee = caffeine-induced sleep disorder, insomnia type, with onset during intoxication"]
            ] },
            { type: "list", title: "Comorbidity (pp. 416–417)", items: [
              "Medical: cancer, diabetes, coronary heart disease, COPD, arthritis, **fibromyalgia** and other chronic pain, degenerative brain disease, **traumatic brain injury**. The link is **bidirectional**, so “**comorbid insomnia**” is the preferred term.",
              "About **1 in 7** people with insomnia disorder have **moderate to severe obstructive sleep apnea**; about **50%** of people with narcolepsy complain of insomnia.",
              "Mental: especially **bipolar, depressive and anxiety** disorders; persistent insomnia can be a **risk factor or early symptom** of these and of substance use disorders.",
              "Self-medication: **alcohol or medications** to sleep, anxiolytics for tension, **caffeine or stimulants** for fatigue, which can grow into a substance use disorder."
            ] },
            { type: "callout", kind: "pearl", title: "Ask about snoring in every insomnia patient", text: "Because **1 in 7** have moderate to severe OSA, and up to half of people with apnea present with insomnia, a hypnotic given without asking about **snoring, witnessed pauses and morning headaches** can miss a treatable, dangerous disorder (pp. 416, 434)." },
            { type: "table", caption: "DSM-5-TR and ICSD-3 (p. 417)", head: ["DSM-5-TR", "ICSD-3"], rows: [
              ["Insomnia disorder (≥3 months)", "**Chronic insomnia disorder** (closely parallel)"],
              ["Other specified insomnia: short-term", "**Short-term insomnia disorder**"],
              ["Substance/medication-induced sleep disorder, insomnia type", "**No separate category**"]
            ] },
            { type: "case", title: "Clinical vignette: the student who sleeps fine on holidays", text: "A 19-year-old university student cannot fall asleep before 2 a.m. on school nights and struggles to wake for 8 a.m. classes. On holidays she sleeps from 2:30 a.m. to 10:30 a.m., falls asleep quickly, and wakes refreshed. This pattern has lasted 2 years and she has failed two morning exams.", point: "Sleep is normal when she sleeps on her **own clock**; the problem is **timing**. This is **circadian rhythm sleep-wake disorder, delayed sleep phase type (G47.21)**, not insomnia disorder (p. 416)." }
          ]
        },
        {
          id: "s12-hypersomnolence",
          title: "Hypersomnolence disorder: criteria and features",
          pages: "417–420",
          blocks: [
            { type: "criteria", title: "Hypersomnolence disorder in brief", code: "F51.11", pages: "417–418", items: [
              ["A", "Self-reported **excessive sleepiness** even though the main sleep period lasts **at least 7 hours**, with at least one of:", ["repeated periods of sleep or **lapses into sleep** in the same day;", "a main sleep episode **longer than 9 hours** a day that is **unrefreshing**;", "difficulty becoming **fully awake** after being woken abruptly (sleep inertia)."]],
              ["B", "At least **3 times a week** for at least **3 months**."],
              ["C", "Significant **distress or impairment** (cognitive, social, occupational or other)."],
              ["D", "Not better explained by, and not only during, **another sleep disorder** (narcolepsy, breathing-related, circadian, parasomnia)."],
              ["E", "Not due to a **substance** (drug of abuse, medication)."],
              ["F", "The sleepiness is **not adequately accounted for** by a coexisting mental or medical disorder."]
            ], specifiers: [["With mental disorder", "Code the comorbid disorder after F51.11"], ["With medical condition", "Code it after F51.11"], ["With another sleep disorder", "Code it after F51.11"], ["Acute", "Less than **1 month**"], ["Subacute", "**1–3 months**"], ["Persistent", "More than **3 months**"], ["Mild", "Trouble staying alert **1–2 days/week**"], ["Moderate", "**3–4 days/week**"], ["Severe", "**5–7 days/week**"]] },
            { type: "callout", kind: "exam", title: "Acute and subacute, but 3 months required?", text: "As with insomnia, Criterion B requires **3 months**, while the duration specifiers include **acute** (<1 month) and **subacute** (1–3 months). Be ready for questions that test the criterion, not the specifier. Severity is graded by **days per week** with difficulty staying alert (p. 418)." },
            { type: "defs", title: "The three faces of hypersomnolence (p. 418)", items: [
              ["Too much sleep", "Main sleep of **9 hours or more**, up to **20 hours** in extreme cases, yet unrefreshing; or normal night sleep (7–9 hours) with **long naps** (> 1 hour) that do not help."],
              ["Sleepiness", "Builds **gradually** rather than as a sudden attack; lapses in **sedentary** settings (lectures, reading, TV, long drives), and in severe cases in meetings or social gatherings."],
              ["Sleep inertia", "About **40%**: “**sleep drunkenness**” after waking, appearing confused, combative or ataxic; minutes to hours; multiple alarms. Helps separate hypersomnolence from other causes of sleepiness."]
            ] },
            { type: "list", title: "Associated features (pp. 418–419)", items: [
              "**Automatic behavior**: routine actions carried out with little recall, such as driving miles without memory of it.",
              "Falls asleep **quickly**, with good sleep efficiency (**> 90%**).",
              "Naps nearly every day; **weekend and holiday** sleep up to **3 hours** longer.",
              "About **80%** describe sleep as **nonrestorative** (nonspecific: also in OSA).",
              "A familial subset has **autonomic** symptoms: vascular-type headaches, **Raynaud’s phenomenon**, fainting.",
              "May fall asleep in the **waiting room**."
            ] },
            { type: "table", caption: "Epidemiology, course and markers (pp. 419–420)", head: ["Item", "Figure"], rows: [
              ["Sleep clinic patients with daytime sleepiness", "**5%–10%** diagnosed with hypersomnolence disorder"],
              ["Episodes of sleep inertia in the general population", "About **1%** (Europe and US)"],
              ["Sex", "About **equal**"],
              ["Onset", "Late adolescence or early adulthood; mean **17–24 years**; gradual over weeks to months"],
              ["Diagnostic delay", "**10–15 years** after first symptoms"],
              ["Spontaneous remission", "**11%–25%** after 5–7 years; otherwise persistent and stable"],
              ["Triggers reported", "**Viral infection** in about 10%; common after **traumatic brain injury**; stress and alcohol worsen it temporarily"],
              ["Genetics", "May be familial, **autosomal dominant**"],
              ["PSG", "Normal to long sleep, short latency, efficiency **> 90%**, normal REM distribution"],
              ["MSLT", "Mean sleep latency usually **< 10 minutes**, often **≤ 8**; SOREMPs (REM within 20 minutes) infrequent; poor test-retest reliability"],
              ["32-hour bed rest", "Sleeps **> 4 hours more** than controls"],
              ["Pediatric cases", "**Rare**"]
            ] },
            { type: "callout", kind: "caution", title: "Driving", text: "Unintended sleep episodes can be **dangerous** while driving or operating machinery (p. 420). Ask about **drowsy driving** and near misses in every sleepy patient; legal reporting rules vary by place." }
          ]
        },
        {
          id: "s12-hypersomnolence-ddx",
          title: "Hypersomnolence disorder: differential diagnosis",
          pages: "420–421",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 420–421)", head: ["Look-alike", "How to tell"], rows: [
              ["**Long sleepers**", "Need more sleep than average but are **refreshed** and have **no** sleepiness, inertia or automatic behavior once they get it"],
              ["**Insufficient sleep** (behaviorally induced)", "Sleeps **< 7 hours** on work nights and **catches up** on free days; do not diagnose hypersomnolence if night sleep may be inadequate; a **10–14 day trial of sleep extension** clarifies"],
              ["**Narcolepsy**", "Sleeps 7–8 hours and wakes **refreshed**; **short naps (15–20 min) refresh**; cataplexy, hallucinations, sleep paralysis; MSLT usually shows **more than two SOREMPs**"],
              ["**Fatigue** of another disorder", "GAD, chronic fatigue syndrome: tiredness **not relieved by sleep** and unrelated to sleep amount"],
              ["**Breathing-related sleep disorder**", "Loud snoring, pauses, obesity, large neck, hypertension; **PSG** confirms apneas"],
              ["**Circadian rhythm disorders**", "A **time-of-day pattern**: delayed type sleepy in the morning and alert at night; advanced type the reverse"],
              ["**Parasomnias**", "Rarely cause long undisturbed sleep or daytime sleepiness; nightmare disorder can if it cuts sleep short"],
              ["**Other mental or medical disorders**", "Sleepiness in a depressive episode (especially **atypical features**), cancers, multiple sclerosis: add hypersomnolence disorder only if the sleepiness **far exceeds** what the condition explains"]
            ] },
            { type: "compare", title: "Hypersomnolence disorder versus narcolepsy (pp. 420, 427)", items: [
              { title: "Hypersomnolence disorder", color: "guide", points: ["Long, **unrefreshing** night sleep; hard to wake.", "**Long naps** (> 1 hour) that do **not** help.", "Persistent, slowly building sleepiness.", "Little or no dreaming in naps.", "**Cataplexy never occurs**.", "MSLT: short latency, **few or no SOREMPs**."] },
              { title: "Narcolepsy", color: "case", points: ["7–8 hours of night sleep, often **fragmented**; wakes refreshed.", "**Short naps (10–20 min) refresh**.", "Discrete **sleep attacks**.", "Dreaming in naps; hypnagogic hallucinations, sleep paralysis.", "**Cataplexy** in type 1.", "MSLT: ≤ 8 minutes and **≥ 2 SOREMPs**."] }
            ] },
            { type: "list", title: "Comorbidity and ICSD-3 (p. 421)", items: [
              "Many meet criteria for a **depressive disorder**, perhaps from the burden of constant sleep need.",
              "**More than half** have **ADHD symptoms**.",
              "Risk of **substance-related disorders**, especially self-medication with **stimulants**.",
              "**Neurodegenerative** conditions (Alzheimer’s, Parkinson’s, multiple system atrophy) can cause hypersomnolence.",
              "ICSD-3 splits **nine** central disorders of hypersomnolence, including **Kleine-Levin syndrome** (recurrent hypersomnia), hypersomnolence due to a medical condition or substance, and **insufficient sleep syndrome**. In DSM-5-TR, Kleine-Levin syndrome is an example of **other specified hypersomnolence disorder** (“brief-duration hypersomnolence”, p. 475)."
            ] },
            { type: "case", title: "Clinical vignette: the resident who sleeps all weekend", text: "A 27-year-old surgical resident falls asleep in conferences and twice nodded off at red lights. He sleeps 5 hours on work nights and 11 hours on weekends, waking refreshed after the long nights. He does not snore. After a 2-week vacation sleeping 8–9 hours nightly, the sleepiness disappears.", point: "Daytime sleepiness that resolves with **sleep extension** is **insufficient sleep**, not hypersomnolence disorder; the criteria require sleepiness **despite at least 7 hours** of sleep (pp. 417, 420)." }
          ]
        }
      ]
    },
    {
      title: "Narcolepsy",
      sections: [
        {
          id: "s12-narcolepsy-criteria",
          title: "Narcolepsy: criteria, subtypes and codes",
          pages: "422–423",
          blocks: [
            { type: "criteria", title: "Narcolepsy in brief", code: "G47.411 · G47.419 · G47.421 · G47.429", pages: "422–423", items: [
              ["A", "Repeated bouts within a single day of an **irresistible need to sleep**, dozing off or napping, at least **3 times a week** over the past **3 months**."],
              ["B", "At least **one** of:", ["**Cataplexy** at least a few times a month: in long-standing disease, brief (seconds to minutes) **bilateral loss of muscle tone with preserved consciousness**, triggered by **laughter or joking**; in children or within **6 months of onset**, spontaneous **grimaces, jaw-opening with tongue thrusting**, or **global hypotonia** without an obvious emotional trigger.", "**Hypocretin deficiency**: CSF hypocretin-1 **≤ one-third** of healthy values on the same assay, or **≤ 110 pg/mL**, not measured during acute brain injury, inflammation or infection.", "Sleep studies: nocturnal PSG with **REM latency ≤ 15 minutes**, **or** an MSLT with mean sleep latency **≤ 8 minutes** and **two or more SOREMPs**."]]
            ], specifiers: [["G47.411 Type 1", "**With cataplexy or hypocretin deficiency**: B1 or B2 met"], ["G47.419 Type 2", "**Without cataplexy**, hypocretin **normal or unmeasured**: only B3 met"], ["G47.421", "Type 1 picture **due to a medical condition**"], ["G47.429", "Type 2 picture **due to a medical condition**"], ["Mild", "Naps **once or twice a day**; cataplexy **< once a week**"], ["Moderate", "**Several naps daily**; cataplexy **daily or every few days**"], ["Severe", "Nearly constant sleepiness; **drug-resistant** cataplexy, several attacks a day"]] },
            { type: "callout", kind: "exam", title: "Type 1 needs only one of two things", text: "**Type 1 (NT1)** = Criterion A plus **cataplexy (B1)** or **low CSF hypocretin (B2)**. Low hypocretin alone is enough, even **without** clear cataplexy (p. 423). **Type 2 (NT2)** = Criterion A plus a **positive PSG/MSLT (B3)** with **no** cataplexy and hypocretin **not low or not measured**. A person first labeled NT2 is **reassigned to NT1** if cataplexy appears later." },
            { type: "table", caption: "The four codes (pp. 422, 429)", head: ["Code", "Subtype", "Key point"], rows: [
              ["**G47.411**", "Narcolepsy **with** cataplexy or hypocretin deficiency (**type 1**)", "Loss of hypothalamic **hypocretin (orexin)** neurons"],
              ["**G47.419**", "Narcolepsy **without** cataplexy and either without hypocretin deficiency or hypocretin unmeasured (**type 2**)", "No biomarker; rests on the MSLT"],
              ["**G47.421**", "Type 1 picture **due to a medical condition**", "**Code the medical condition first**"],
              ["**G47.429**", "Type 2 picture **due to a medical condition**", "E.g., **G71.11 myotonic dystrophy** then G47.429"]
            ] },
            { type: "list", title: "Secondary (symptomatic) narcolepsy (p. 423)", items: [
              "Most common causes: **inherited disorders, tumors and head trauma**.",
              "Hypocretin neurons destroyed by **trauma or hypothalamic surgery**.",
              "Inflammatory lesions (**multiple sclerosis**, acute disseminated encephalomyelitis), **stroke**, **encephalitis**.",
              "**ADCA-DN** (autosomal dominant cerebellar ataxia, deafness and narcolepsy): **DNMT1** mutations.",
              "Cataplexy with sleepiness: **Prader-Willi syndrome**, **Niemann-Pick type C**, Möbius syndrome, Norrie disease.",
              "Hypocretin deficiency reported in **Parkinson’s disease**; NT2-like findings in **myotonic dystrophy** and Prader-Willi syndrome.",
              "Head trauma or CNS infection can **transiently** lower CSF hypocretin without cell loss: a trap in diagnosis."
            ] },
            { type: "case", title: "Clinical vignette: the laughing collapse", text: "A 19-year-old man has fallen asleep in class every day for a year despite sleeping 8 hours. When he laughs hard at a joke, his knees buckle and his head drops for a few seconds; he hears everything and remembers it. This happens several times a month.", point: "Daily irresistible sleep for over 3 months plus classic **cataplexy** (emotion-triggered, bilateral, consciousness preserved): **narcolepsy type 1 (G47.411)**. Cataplexy alone meets Criterion B; a sleep study is **confirmatory** (pp. 422, 426)." }
          ]
        },
        {
          id: "s12-narcolepsy-features",
          title: "Narcolepsy: cataplexy, hypocretin and sleep studies",
          pages: "423–425",
          blocks: [
            { type: "defs", title: "Cataplexy (pp. 423–425)", items: [
              ["Duration", "Brief: **seconds up to 2 minutes**; most attacks **< 10 seconds**."],
              ["Triggers", "Mostly **positive emotions**: laughter, anticipation, surprise; less often anger or embarrassment."],
              ["Muscles", "Neck, jaw, arms, legs or whole body: **head bobbing, jaw dropping**, complete falls; slurred speech, drooping eyelids."],
              ["Awareness", "The person is **awake and aware** throughout."],
              ["Reflexes", "**Abolished** during whole-body cataplexy: a key sign against functional weakness."],
              ["Not cataplexy", "Weakness during **athletic exertion** (physiological), or only after unusual triggers such as **stress or anxiety** (suggests psychopathology)."],
              ["Static cataplexy", "In **children** (rarely adults) near an **abrupt onset**: continuous **hypotonia** with unsteady gait, ptosis, slack jaw, tongue protrusion and grimacing; most common within **6 months**."]
            ] },
            { type: "table", caption: "Hypocretin and the sleep studies (pp. 424, 426–427)", head: ["Test", "Finding", "Numbers"], rows: [
              ["**CSF hypocretin-1**", "Low in NT1; normal or intermediate in most NT2", "**< 110 pg/mL** (under one-third of controls); low in **85%–90%** of people with cataplexy"],
              ["**Nocturnal SOREMP** (REM ≤ 15 min)", "Enough for Criterion B3 on its own", "Specificity for NT1 **95%–97%**, sensitivity **54%–57%**; only **10%–23%** of NT2 with normal hypocretin"],
              ["**MSLT**", "Mean latency **≤ 8 min** plus **SOREMPs in ≥ 2 naps** (of 4 or 5)", "Positive in **90%–95%** of NT1 vs **2%–4%** of controls"],
              ["**HLA DQB1*06:02**", "Supports an **autoimmune** cause", "**85%–95%** of NT1; **40%–50%** of NT2; **12%–38%** of the general population"]
            ] },
            { type: "steps", title: "Doing the PSG and MSLT properly (pp. 424, 426)", items: [
              ["1. Stop psychotropics", "For a period based on each drug’s **half-life**; abrupt stopping of **antidepressants**, α-adrenergic agonists or stimulants, or using them during testing, distorts **REM** physiology."],
              ["2. Normalize sleep", "Adequate sleep on a regular schedule for about **2 weeks**, documented by **sleep diary or, better, actigraphy**."],
              ["3. Overnight PSG", "Rules out other causes and may itself show a **nocturnal SOREMP**."],
              ["4. MSLT the next day", "Five nap opportunities; **REM in at least two** with mean latency ≤ 8 minutes."]
            ] },
            { type: "callout", kind: "caution", title: "False-positive SOREMPs", text: "SOREMPs also appear with **shift work**, circadian disorders, **severe OSA**, medication effects or withdrawal, **insufficient sleep**, and severe depression (pp. 424, 426). Diagnostic reliability of the MSLT is **85%–95%** for NT1; for NT2, test-retest reliability may be **< 50%**. A sleep-deprived adolescent with a delayed phase can easily “fail” an MSLT." },
            { type: "callout", kind: "pearl", title: "Hypocretin testing is robust", text: "CSF hypocretin is **not affected** by medications, sleep deprivation or time of day, so it helps in suspected **pseudocataplexy**, atypical cataplexy and treatment-refractory cases. It is **uninterpretable** during severe infection, head trauma or coma. CSF cell count, protein and glucose are **normal** (pp. 426–427)." },
            { type: "list", title: "Associated features (pp. 424–425)", items: [
              "**Hypnagogic** (falling asleep) or **hypnopompic** (waking) hallucinations in **20%–60%**: vivid, visual or auditory, sometimes tactile.",
              "**Sleep paralysis** in **20%–60%**; but occasional sleep paralysis is common in healthy sleepers under stress or sleep loss.",
              "**Automatic behavior** when very sleepy.",
              "Broken night sleep, vivid dreams, periodic limb movements, **REM sleep behavior disorder**, nocturnal eating; **obesity** common.",
              "IQ normal, but **working memory and executive** problems reported."
            ] },
            { type: "callout", kind: "mnemonic", title: "CHAPS: the narcolepsy pentad", text: "**C**ataplexy · **H**allucinations at sleep onset or waking · **A**ttacks of sleep (daytime sleepiness) · **P**aralysis on waking or falling asleep · **S**leep fragmented at night. Only **sleepiness** plus one of cataplexy, low hypocretin or a positive sleep study is required; hallucinations, paralysis and fragmented sleep are supportive. (Mnemonic written for this app; DSM check: pp. 422, 424–425.)" }
          ]
        },
        {
          id: "s12-narcolepsy-course",
          title: "Narcolepsy: epidemiology, course and causes",
          pages: "425–427",
          blocks: [
            { type: "table", caption: "Prevalence and course (pp. 425–426)", head: ["Item", "Figure"], rows: [
              ["NT1 prevalence", "**0.02%–0.05%** of adults worldwide; lower in Israel, higher in **Japan**"],
              ["Incidence (US)", "**0.74** per 100,000 person-years"],
              ["NT2 prevalence", "**Unknown** (diagnostic variability)"],
              ["Sex", "Fairly **equal**"],
              ["Peak onset", "**15–25 years**; childhood to young adulthood, rarely old age"],
              ["First symptom", "Sleepiness in **90%**, then cataplexy: within **1 year in 50%**, **3 years in 85%**"],
              ["Diagnostic delay", "About **50%** diagnosed as adults recall onset in **childhood or adolescence**"],
              ["Course", "**Lifelong**, fairly stable; worsening suggests nonadherence or a new sleep disorder, especially **OSA** (about **one-quarter**)"]
            ] },
            { type: "flow", vertical: true, title: "Typical onset and course (pp. 425–426)", steps: [
              ["Onset", "Sleepiness or increased sleep need first; vivid dreams, hypnagogic hallucinations and RBD early", "guide"],
              ["First months", "Cataplexy may be **atypical** in children: generalized hypotonia", "case"],
              ["Abrupt childhood onset", "Most severe at first, partly improves; **obesity** and **precocious puberty**", "dx"],
              ["School and college", "Workload and social pressure cut night sleep; behavior problems from sleepiness", "hy"],
              ["Adulthood", "Stable, fluctuates with stress; retirement allows naps and less stimulant need", "drug"]
            ] },
            { type: "table", caption: "Risk and causes (p. 426)", head: ["Domain", "What the manual says"], rows: [
              ["Infections and vaccines", "**Group A streptococcal** throat infection, **influenza (H1N1 2009)**, other winter infections, and **Pandemrix H1N1 vaccination** may trigger an **autoimmune** process, with narcolepsy months later"],
              ["Other triggers", "**Head trauma**; abrupt sleep-wake changes (job change, stress)"],
              ["Twins", "Monozygotic concordance **25%–32%**"],
              ["Relatives", "**1%–2%** of first-degree relatives (**10- to 40-fold** increase)"],
              ["HLA", "Strong link with **DQB1*06:02**; In carriers of DQB1*06:02, DQB1*03:01 raises risk and DQB1*05:01, *06:01 and *06:03 lower it (small effects)"],
              ["Other genes", "**T-cell receptor alpha** and immune genes modulate risk slightly"]
            ] },
            { type: "callout", kind: "culture", title: "Culture (p. 426)", text: "In one US study, **African American** patients more often had narcolepsy **without cataplexy or with atypical cataplexy** (despite low hypocretin) and **earlier onset**; higher rates of **obesity and OSA**, linked to social determinants of health, complicate diagnosis. **Sleep paralysis** may be attributed to **supernatural forces** (a frightening spirit sitting on the chest), which shapes fear and help-seeking." },
            { type: "callout", kind: "caution", title: "Work and driving (p. 427)", text: "Untreated narcolepsy impairs school, work and driving. People should avoid jobs that endanger **themselves** (machinery) or **others** (bus driver, pilot). Once treated, most can drive, though rarely **long distances alone**. Some withdraw socially to avoid **emotions** that trigger cataplexy." }
          ]
        },
        {
          id: "s12-narcolepsy-ddx",
          title: "Narcolepsy: differential diagnosis",
          pages: "427–429",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 427–428)", head: ["Look-alike", "How to tell"], rows: [
              ["**Hypersomnolence disorder**", "Long, unrefreshing sleep, long naps, sleep inertia, **no cataplexy**, few SOREMPs"],
              ["**Sleep deprivation**", "Common in adolescents and shift workers; MSLT can be **falsely positive** if sleep deprived or phase delayed"],
              ["**Sleep apnea**", "More common than narcolepsy, so cataplexy may be **overlooked**; think of narcolepsy when sleepiness **persists despite** apnea treatment"],
              ["**Insomnia disorder**", "Narcolepsy also breaks night sleep, but there is **no difficulty falling or returning** to sleep, and daytime sleepiness is far worse"],
              ["**Major depressive disorder**", "Sleepiness is common, but **no cataplexy**; MSLT usually **normal**; subjective sleepiness exceeds objective; in psychiatric patients, 25% had latency < 8 min but **≥ 2 SOREMPs were rare**"],
              ["**Functional neurological symptom disorder** (pseudocataplexy)", "Long-lasting, unusual triggers, frequent falls, **generalized** without partial attacks, **reflexes intact**; reports dreaming in naps without SOREMPs; **video** helps"],
              ["**ADHD**", "In children, sleepiness causes **inattention and aggression** that can be misread as ADHD"],
              ["**Atonic seizures**", "Not usually emotion-triggered; **abrupt** falls rather than a slow “melting”; other seizure types; distinct **EEG**"],
              ["**Syncope**", "Presyncope (dizziness, tunnel vision, hearing changes), which cataplexy **lacks**"],
              ["**Chorea, PANDAS**", "In young children near onset, especially after **strep throat** with high ASO titers"],
              ["**Schizophrenia**", "Narcolepsy hallucinations are **sleep-related** and **multisensory** (“holistic”), not mainly verbal-auditory; high-dose stimulants can cause **persecutory delusions**"]
            ] },
            { type: "callout", kind: "exam", title: "Cataplexy plus psychosis", text: "If a patient with **cataplexy** reports hallucinations or delusions, assume first that they come from **narcolepsy** (hypnagogic hallucinations) or its **stimulant treatment**, before adding schizophrenia (p. 428)." },
            { type: "list", title: "Comorbidity and ICSD-3 (p. 429)", items: [
              "**Obesity**, bruxism, enuresis, **precocious puberty** in pediatric onset, mood disorders, ADHD; rapid weight gain at sudden onset in young children.",
              "Sleepwalking, **REM sleep behavior disorder**, **OSA**, restless legs and periodic limb movements; suspect **new sleep apnea** if narcolepsy suddenly worsens.",
              "ICSD-3 has the same **NT1/NT2** split; the medical-condition subtypes (G47.421, G47.429) correspond to its **secondary narcolepsy**."
            ] },
            { type: "case", title: "Clinical vignette: the falls nobody can explain", text: "A 24-year-old woman reports collapsing several times a week when upset at work, each episode lasting 10–20 minutes. During one in clinic she lies motionless with eyes closed; her knee jerks are brisk. She sleeps 7 hours, is not sleepy by day, and an MSLT is normal.", point: "Long episodes triggered by stress, **intact reflexes**, no sleepiness and a normal MSLT point to **pseudocataplexy** (functional neurological symptom disorder), not narcolepsy (p. 428)." }
          ]
        }
      ]
    },
    {
      title: "Breathing-related sleep disorders",
      sections: [
        {
          id: "s12-osa-criteria",
          title: "Obstructive sleep apnea hypopnea: criteria and severity",
          pages: "429–431",
          blocks: [
            { type: "p", text: "The breathing-related sleep disorders are three fairly distinct conditions: **obstructive sleep apnea hypopnea** (the airway collapses), **central sleep apnea** (the drive to breathe stops) and **sleep-related hypoventilation** (breathing is too shallow, so CO₂ rises). All three are diagnosed by **polysomnography** (p. 429)." },
            { type: "criteria", title: "Obstructive sleep apnea hypopnea in brief", code: "G47.33", pages: "429", items: [
              ["A", "**Either**:", ["PSG shows **at least 5** obstructive apneas or hypopneas **per hour** of sleep, **plus** a symptom: nighttime breathing disturbance (**snoring, snorting or gasping, breathing pauses**) or daytime **sleepiness, fatigue or unrefreshing sleep** despite enough opportunity to sleep, not better explained by another mental disorder (including a sleep disorder) or medical condition; **or**", "PSG shows **15 or more** obstructive apneas and/or hypopneas per hour, **whatever the symptoms**."]]
            ], specifiers: [["Mild", "AHI **less than 15**"], ["Moderate", "AHI **15–30**"], ["Severe", "AHI **more than 30**"]] },
            { type: "ladder", title: "AHI: events per hour of sleep", ticks: [[0, "0"], [16.7, "5"], [50, "15"], [100, "30+"]], rows: [
              { label: "Below threshold", from: 0, to: 16.7, color: "guide", span: "<5: no OSA" },
              { label: "AHI 5–14", dx: "osa", from: 16.7, to: 50, color: "hy", span: "OSA only with symptoms" },
              { label: "AHI ≥15", dx: "osa", from: 50, to: 100, color: "case", span: "OSA even without symptoms" }
            ], note: "Severity: mild <15, moderate 15–30, severe >30." },
            { type: "callout", kind: "exam", title: "The asymptomatic patient", text: "A man with **no** snoring complaint and **no** sleepiness has a PSG with an AHI of **18**: he **has OSA** (Criterion A2, moderate). With an AHI of **9** and no symptoms he does **not**. With an AHI of 9 and **loud snoring** or **daytime sleepiness**, he does (A1, mild) (p. 429)." },
            { type: "defs", title: "Definitions (pp. 429–430)", items: [
              ["Apnea", "**Total absence** of airflow."],
              ["Hypopnea", "A **reduction** in airflow."],
              ["Event length", "At least **10 seconds** in adults, or **two missed breaths** in children; usually with an oxygen drop of **≥ 3%** and/or an EEG **arousal**."],
              ["Apnea hypopnea index (AHI)", "Apneas plus hypopneas **per hour of sleep**, by PSG or other overnight monitoring."],
              ["Out-of-center sleep testing (OCST)", "Home testing; also acceptable for the diagnosis (p. 430)."],
              ["Children", "Abnormal at an obstructive AHI of **1 or more** per hour, or obstructive hypoventilation with snoring or flow limitation."]
            ] },
            { type: "table", caption: "Markers of greater severity beyond the AHI (p. 430)", head: ["Marker", "Example threshold"], rows: [
              ["Oxygen desaturation", "More than **10%** of sleep time below **90%** saturation"],
              ["Sleep fragmentation", "Arousal index **> 30** per hour"],
              ["Loss of deep sleep", "N3 (slow-wave sleep) **< 5%**"],
              ["Clinical", "Degree of symptoms and **daytime impairment**"]
            ] },
            { type: "list", title: "Features (pp. 430–431)", items: [
              "The **most common** breathing-related sleep disorder; **snoring and daytime sleepiness** are the cardinal symptoms.",
              "Also: **insomnia** from frequent awakenings, heartburn, **nocturia**, **morning headaches**, dry mouth, erectile dysfunction, low libido, trouble breathing when supine.",
              "**Hypertension** in more than **60%**.",
              "Waking blood gases usually normal; waking **hypoxemia or hypercapnia** suggests lung disease or hypoventilation.",
              "Nighttime arrhythmias (sinus pauses, ectopy, **atrial fibrillation**); raised hemoglobin or hematocrit with severe desaturation.",
              "**Most cases are undiagnosed**: look for central obesity, a crowded pharynx and high blood pressure."
            ] }
          ]
        },
        {
          id: "s12-osa-course",
          title: "OSA: prevalence, course and risk",
          pages: "431–433",
          blocks: [
            { type: "table", caption: "Prevalence (p. 431)", head: ["Group", "Figure"], rows: [
              ["US men, AHI **≥ 15**", "**13%**"],
              ["US women, AHI ≥ 15", "**6%**"],
              ["US men, AHI > 5 **plus sleepiness**", "**14%**"],
              ["US women, AHI > 5 plus sleepiness", "**5%**"],
              ["Male to female", "**2:1 to 4:1**, narrowing after menopause"],
              ["Postmenopausal vs premenopausal women", "**2.6–3.5 times** more likely"],
              ["Children", "**1%–4%**, no sex difference before puberty; higher with obesity"],
              ["Groups with higher rates", "African Americans, American Indians, Hispanics in the US, partly via **obesity** and social determinants of health"]
            ] },
            { type: "flow", vertical: true, title: "Three peaks across life (pp. 431–432)", steps: [
              ["Ages 3–8", "Large **tonsils** relative to the airway", "guide"],
              ["Adolescence", "Rising **obesity**", "hy"],
              ["Midlife (40–60)", "Obesity and **menopause**; the commonest age at presentation", "case"],
              ["After 65", "May plateau, or worsen in some", "drug"]
            ] },
            { type: "list", title: "Course (pp. 431–432)", items: [
              "Insidious onset, gradual progression, persistent; loud snoring often present **for years**, sometimes since childhood.",
              "**Weight gain** worsens it; AHI rises about **2 events per hour every 4–5 years** in adults.",
              "Can **resolve with weight loss**, especially after **bariatric surgery**; children improve with growth and show seasonal variation.",
              "Children younger than 5: **nighttime** signs (observed apneas, labored breathing). Older children: **daytime** signs (sleepiness, impulsivity, hyperactivity, ADHD, learning problems, morning headaches).",
              "Pediatric clues: **agitated arousals**, sleeping on **hands and knees**, new **bedwetting** in a previously dry child, mouth breathing, trouble swallowing, poor articulation, **failure to thrive**."
            ] },
            { type: "table", caption: "Risk factors (pp. 432–433)", head: ["Kind", "Examples"], rows: [
              ["Major", "**Obesity** and **male sex**"],
              ["Anatomy", "Retrognathia or **micrognathia**; **adenotonsillar hypertrophy** in young children"],
              ["Genetic", "Family history (prevalence about **twice** as high in relatives; shared factors explain about **one-third** of AHI variance); **Down syndrome**, Treacher Collins syndrome"],
              ["Hormonal", "**Menopause**, pregnancy, **polycystic ovary syndrome**, acromegaly"],
              ["Medications", "**Sedating** psychiatric and medical drugs can worsen it"]
            ] },
            { type: "callout", kind: "culture", title: "Culture and sex (pp. 432–433)", text: "Where **snoring** is seen as a sign of good health, it may not prompt concern, leading to **underdiagnosis**. **Women** more often report **fatigue, low energy or insomnia** rather than sleepiness, and may **underreport snoring**. Do not rule out OSA because a woman denies being sleepy." },
            { type: "table", caption: "Consequences and comorbidity (pp. 433–435)", head: ["Area", "What the manual says"], rows: [
              ["Daytime sleepiness", "More than **50%** with moderate to severe OSA"],
              ["Accidents", "**Twofold** occupational accidents; motor vehicle crashes up to **sevenfold**; know local reporting rules for **commercial drivers**"],
              ["Quality of life", "Worst in the **vitality** domain"],
              ["Cardiovascular", "Hypertension, coronary disease, heart failure, **stroke**, diabetes, higher **mortality**; risk up **30% to 300%**; treatment **reduces** cardiovascular morbidity and mortality"],
              ["Right heart failure", "**Rare**; suggests very severe disease or hypoventilation"],
              ["Depression", "Up to **one-third** of referrals report depressive symptoms, up to **10%** moderate to severe; correlates with AHI, perhaps more in men"]
            ] }
          ]
        },
        {
          id: "s12-osa-ddx",
          title: "OSA: differential diagnosis",
          pages: "433–434",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 433–434)", head: ["Look-alike", "How to tell"], rows: [
              ["**Primary snoring**", "Snoring with **no symptoms** and a **normal PSG**"],
              ["**Narcolepsy**", "Cataplexy, sleep hallucinations and paralysis; short, refreshing, dream-filled naps; **SOREMPs** on MSLT. The two can **coexist**: narcolepsy does not exclude OSA"],
              ["**Hypersomnolence, insufficient sleep, circadian disorders**", "Need history, diaries and PSG"],
              ["**Central sleep apnea**", "Events from **absent effort**; snoring less prominent; heart failure, neurological disease, **opioids**"],
              ["**Insomnia disorder**", "No snoring or OSA signs; the two may **coexist** and both need treatment"],
              ["**Nocturnal panic attacks**", "Rarer episodes, **intense autonomic arousal**, no sleepiness, **daytime panic** history; PSG normal"],
              ["**Nocturnal asthma**", "Known asthma; PSG without apneas or desaturation; can coexist"],
              ["**ADHD** (children)", "Inattention and hyperactivity can be OSA; look for **snoring, labored breathing, big tonsils**; they may co-occur"],
              ["**Substances**", "Alcohol, barbiturates, **benzodiazepines**, opiates **worsen** OSA; still diagnose OSA when its features are present"]
            ] },
            { type: "callout", kind: "pearl", title: "Psychiatric patients at risk", text: "Many psychiatric patients carry OSA risk: **weight gain** from antipsychotics and mood stabilizers, **sedatives** that relax the airway, alcohol, and depression that hides sleepiness. Ask about snoring and witnessed pauses before adding a sedative, and check in anyone with **treatment-resistant fatigue** or depression. (Clinical teaching beyond the manual, built on pp. 432, 434–435.)" },
            { type: "case", title: "Clinical vignette: the tired truck driver", text: "A 52-year-old long-haul driver with a BMI of 36 and hypertension falls asleep at stoplights. His wife says he snores loudly and stops breathing at night. A PSG shows 34 obstructive apneas and hypopneas per hour with oxygen falling to 78%.", point: "**Obstructive sleep apnea hypopnea, severe (G47.33)**: AHI **> 30**. Address driving safety and any **reporting rules** for commercial drivers (p. 433)." }
          ]
        },
        {
          id: "s12-csa",
          title: "Central sleep apnea",
          pages: "435–439",
          blocks: [
            { type: "criteria", title: "Central sleep apnea in brief", code: "G47.31 · R06.3 · G47.37", pages: "435–436", items: [
              ["A", "PSG shows **5 or more central apneas** per hour of sleep."],
              ["B", "Not better explained by **another current sleep disorder**."]
            ], specifiers: [["G47.31 Idiopathic", "Apneas and hypopneas from **variable effort**, no obstruction"], ["R06.3 Cheyne-Stokes", "**Crescendo-decrescendo** tidal volume, ≥ 5 events/h, frequent arousal"], ["G47.37 Opioid use", "CSA **comorbid with opioid use**"], ["Severity", "Frequency of events, desaturation and fragmentation"]] },
            { type: "callout", kind: "exam", title: "Coding G47.37", text: "With an **opioid use disorder**, code it **first** (**F11.10** mild, **F11.20** moderate or severe), then **G47.37**. Without a use disorder (e.g., after one heavy use), code **G47.37** alone (p. 435)." },
            { type: "compare", title: "Two mechanisms (pp. 436–439)", items: [
              { title: "High loop gain", color: "mech", points: ["Idiopathic CSA and **Cheyne-Stokes** breathing.", "An over-sensitive ventilatory control system: **hyperventilation alternates with hypoventilation** (periodic breathing).", "Awake pCO₂ **low or normal**.", "Also behind **treatment-emergent** CSA when OSA treatment starts, and CSA mixed with OSA."] },
              { title: "Opioid effect", color: "drug", points: ["Opioids act on the **medullary rhythm generators** and change hypoxic versus hypercapnic drive.", "Awake pCO₂ may be **raised**.", "**Ataxic** or periodic breathing.", "Seen with **long-acting opioids** used for months; methadone patients have more somnolence and depression."] }
            ] },
            { type: "table", caption: "Key numbers (pp. 436–438)", head: ["Item", "Figure"], rows: [
              ["Central predominance", "Central events must be **> 50%** of all respiratory events"],
              ["High altitude", "Usually after ascent to **≥ 2,500 m**; shorter cycle than Cheyne-Stokes, no heart failure"],
              ["Cheyne-Stokes cycle length", "About **60 seconds**"],
              ["Heart failure, EF < 45%", "Cheyne-Stokes in **15%–44%**"],
              ["Acute stroke", "About **20%**"],
              ["Chronic opioids for noncancer pain, methadone", "About **24%**; worse above **200 mg** morphine equivalents a day"],
              ["Children", "**4%–6%** (France, Canada); Arnold-Chiari malformation, reflux"],
              ["Demographics", "Mostly **over 60**, even more **male** than OSA; Cheyne-Stokes patients are **leaner** than OSA patients"]
            ] },
            { type: "list", title: "Clinical picture (pp. 436–438)", items: [
              "Sleepiness, **insomnia**, awakenings with **dyspnea**; some have no symptoms.",
              "Cheyne-Stokes: signs of **heart failure** (raised JVP, S3, crackles, edema); seen with heart failure, **stroke**, **renal failure**, and more with **atrial fibrillation**.",
              "Cheyne-Stokes during **wakefulness** signals worse prognosis (higher mortality).",
              "Opioid-related CSA: sleepiness, **confusion**, depression.",
              "Pediatric PSG criteria differ (pauses > 20 s, or two breaths with arousal, desaturation > 3% or bradycardia)."
            ] },
            { type: "callout", kind: "pearl", title: "The psychiatrist’s CSA patient", text: "The patient you are most likely to see is on **methadone or buprenorphine maintenance**, or long-term opioids for pain, with daytime sleepiness, poor concentration or low mood. Consider a sleep study, especially at high doses. (Buprenorphine and added benzodiazepines are clinical teaching beyond the manual, which names long-acting opioids and methadone, pp. 436–438.)" }
          ]
        },
        {
          id: "s12-hypoventilation",
          title: "Sleep-related hypoventilation",
          pages: "439–443",
          blocks: [
            { type: "criteria", title: "Sleep-related hypoventilation in brief", code: "G47.34 · G47.35 · G47.36", pages: "439–440", items: [
              ["A", "PSG shows episodes of **reduced breathing with raised CO₂**. Without a CO₂ measurement, **persistently low oxygen saturation** not tied to apneas or hypopneas can suggest it."],
              ["B", "Not better explained by **another current sleep disorder**."]
            ], specifiers: [["G47.34 Idiopathic", "No identifiable cause"], ["G47.35 Congenital", "Congenital central alveolar hypoventilation; **PHOX2B**"], ["G47.36 Comorbid", "Lung, neuromuscular, chest wall, **obesity**, **medications**"], ["Severity", "Hypoxemia, hypercarbia, end-organ effects"]] },
            { type: "compare", title: "“Won’t breathe” versus “can’t breathe” (p. 441)", items: [
              { title: "Won’t breathe", color: "mech", points: ["**Reduced drive**: blunted response to CO₂.", "**Idiopathic** hypoventilation; **congenital** central alveolar hypoventilation.", "**Sedatives**: benzodiazepines, opiates, alcohol."] },
              { title: "Can’t breathe", color: "case", points: ["**Increased work of breathing** or weak muscles.", "COPD, interstitial lung disease, **kyphoscoliosis**.", "ALS, spinal cord injury, diaphragm paralysis, myasthenia gravis, Lambert-Eaton, myopathies, postpolio, Charcot-Marie-Tooth.", "**Obesity hypoventilation**: low chest wall compliance plus V/Q mismatch and variably reduced drive."] }
            ] },
            { type: "table", caption: "Diagnostic thresholds (pp. 439, 441–442)", head: ["Measure", "Gold standard or proxy"], rows: [
              ["Arterial pCO₂ during sleep", "**> 55 mmHg**, or a rise of **≥ 10 mmHg** to above **50 mmHg** versus awake supine, each for **> 10 minutes**"],
              ["Oxygen proxy", "SpO₂ **< 90% for > 5 minutes** with a nadir of at least 85%, or **< 90% for ≥ 30%** of sleep, without airway obstruction: suggestive, **not specific**"],
              ["Obesity hypoventilation", "**BMI > 30** and awake **pCO₂ > 45** without another cause"]
            ] },
            { type: "list", title: "Features, course and epidemiology (pp. 440–442)", items: [
              "Symptoms are **not required**, but people report sleepiness, arousals, **morning headaches**, insomnia; orthopnea with diaphragm weakness.",
              "Consequences: **pulmonary hypertension**, **cor pulmonale**, **polycythemia**, arrhythmias, neurocognitive dysfunction; blood gas changes extend into **wakefulness** as it progresses.",
              "Idiopathic form: very **uncommon**, slowly progressive. Comorbid forms are **more common** and track the underlying disease.",
              "Obesity hypoventilation: about **0.14%–0.6%** of the population; up to **42%** of sleep clinic patients with BMI > 35; equal in men and women (perhaps slightly more in women); most also have **OSA**.",
              "Congenital central alveolar hypoventilation: rare, at birth with shallow or absent breathing, sometimes later (variable penetrance); with **Hirschsprung’s disease**, neural crest tumors, autonomic problems and a **box-shaped face**."
            ] },
            { type: "callout", kind: "exam", title: "Sustained versus periodic", text: "On PSG, hypoventilation shows **sustained** desaturation, while OSA and CSA show **repeated, cyclical** drops with discrete airflow events. All three can coexist (p. 442). DSM-5-TR’s single **comorbid** subtype covers what ICSD-3 splits into obesity hypoventilation, medication-related and medical-disorder subtypes (p. 443)." },
            { type: "callout", kind: "caution", title: "Benzodiazepines and opioids", text: "The manual calls **medication use** (benzodiazepines, opiates) the comorbidity “most relevant to the clinician” (p. 442). In a patient with COPD, neuromuscular disease or severe obesity, sedatives can tip borderline breathing into **hypercapnic respiratory failure** during sleep." }
          ]
        }
      ]
    },
    {
      title: "Circadian rhythm sleep-wake disorders",
      sections: [
        {
          id: "s12-circadian-criteria",
          title: "Circadian rhythm sleep-wake disorders: the criteria",
          pages: "443–444",
          blocks: [
            { type: "criteria", title: "Circadian rhythm sleep-wake disorder in brief", code: "G47.20–G47.26", pages: "443–444", items: [
              ["A", "A persistent or recurrent pattern of disrupted sleep caused mainly by a change in the **circadian system** or a **mismatch** between the body clock and the schedule demanded by the environment, society or work."],
              ["B", "The disruption causes **excessive sleepiness, insomnia, or both**."],
              ["C", "Clinically significant **distress or impairment**."]
            ], specifiers: [["G47.21 Delayed phase", "Late sleep and wake; specify **familial**, **overlap with non-24**"], ["G47.22 Advanced phase", "Early sleep and wake; specify **familial**"], ["G47.23 Irregular", "No consolidated sleep; sleep scattered across 24 hours"], ["G47.24 Non-24-hour", "Daily **drift**, usually later and later"], ["G47.26 Shift work", "Insomnia and sleepiness tied to **unconventional work hours**"], ["G47.20 Unspecified", "Type not specified"], ["Episodic", "**1 month** to less than 3 months"], ["Persistent", "**3 months** or longer"], ["Recurrent", "**Two or more** episodes within 1 year"]] },
            { type: "callout", kind: "exam", title: "No minimum duration in the criteria", text: "Unlike insomnia, hypersomnolence, narcolepsy and RLS, the circadian criteria have **no 3-month rule**; duration is captured by the **episodic / persistent / recurrent** specifiers. **G47.25 (jet lag)** is not a DSM-5-TR type: ICSD-3 includes **jet lag**, DSM-5-TR does not (p. 451)." },
            { type: "table", caption: "The five types at a glance (pp. 444–451)", head: ["Type", "Code", "Pattern", "Typical person", "Key clue"], rows: [
              ["**Delayed sleep phase**", "G47.21", "Sleep and wake **late** (usually > 2 h)", "Adolescent or young adult", "Normal sleep **when allowed to sleep late**"],
              ["**Advanced sleep phase**", "G47.22", "Sleep and wake **early** (usually > 2 h)", "Older adult; familial form younger", "Sleepy in the evening, awake at 3–4 a.m."],
              ["**Irregular sleep-wake**", "G47.23", "**No major sleep period**; ≥ 3 bouts in 24 h", "Dementia, neurodevelopmental disorders, institutions", "Longest sleep 2–6 a.m., under 4 hours"],
              ["**Non-24-hour**", "G47.24", "Sleep times **drift** later each day", "**Blind** people", "Cycles of symptoms with short symptom-free spells"],
              ["**Shift work**", "G47.26", "Insomnia at home, sleepiness at work", "Regular night or rotating shifts", "Resolves with **day work**"]
            ] },
            { type: "callout", kind: "pearl", title: "Diaries and actigraphy", text: "The circadian types are diagnosed mainly by **history**, a **sleep diary** or **actigraphy** (a wrist motion sensor; at least **7 days**, including **weekends**). The lab marker is **dim light melatonin onset (DLMO)** in saliva (pp. 445, 447–449)." }
          ]
        },
        {
          id: "s12-circadian-delayed",
          title: "Delayed sleep phase type",
          pages: "444–446",
          blocks: [
            { type: "list", title: "Features (p. 444)", items: [
              "Sleep timing **delayed**, usually by **more than 2 hours**, relative to the desired bed and wake times.",
              "**Sleep-onset insomnia**, great difficulty waking in the morning, **sleepiness early in the day**.",
              "When free to choose their own schedule, sleep **quality and duration are normal** for age.",
              "Often a past or current **mental disorder**; prolonged morning confusion (sleep inertia); trying to sleep early can create a secondary **insomnia disorder**."
            ] },
            { type: "table", caption: "Prevalence, course and biology (pp. 444–445)", head: ["Item", "What the manual says"], rows: [
              ["Adolescents and young adults", "**3.3%–4.6%** (Norway, Sweden)"],
              ["Adults", "**0.2%–1.7%**"],
              ["Onset", "Adolescence and early adulthood; months to years before diagnosis; may lessen with age; relapse common"],
              ["Triggers of worsening", "A new school or work schedule with an **early rise time**"],
              ["Adolescents", "Puberty brings a physiological delay: tell the disorder from the **normal teenage delay**"],
              ["Biology", "**Longer** circadian period, evening light **hypersensitivity** or morning light hyposensitivity, weak homeostatic drive"],
              ["Genetics", "**CRY1** mutation (about **0.6%** of people) in strongly familial cases"],
              ["DLMO", "Only **57%** had a truly delayed DLMO; in **43%** behavior may matter more"]
            ] },
            { type: "list", title: "Differential diagnosis and comorbidity (pp. 445–446)", items: [
              "**Normal late schedules** (common in young people) without distress or impairment.",
              "Insomnia disorder, other circadian types, sleep apnea, RLS and medical causes of sleepiness; PSG if apnea is suspected.",
              "Comorbid: **depressive disorders**, personality disorders, somatic symptom or illness anxiety disorder, OCD, **ADHD** and **autism**; bipolar and anxiety disorders worsen symptoms.",
              "May **overlap** with non-24-hour type; sighted people with non-24 often had delayed phase first."
            ] }
          ]
        },
        {
          id: "s12-circadian-advanced",
          title: "Advanced sleep phase type",
          pages: "446–447",
          blocks: [
            { type: "list", title: "Features and course (pp. 446–447)", items: [
              "Sleep and wake times **several hours earlier** than desired (usually **> 2 hours**), with **early-morning insomnia** and **evening sleepiness**.",
              "“**Morning types**”: melatonin and core temperature rhythms run **2–4 hours early**.",
              "Kept up late by social life, they still **wake early**: chronic sleep loss and daytime sleepiness.",
              "Prevalence about **1%** in middle-aged US adults; **more common in older adults**; onset usually late adulthood.",
              "**Familial** form: **autosomal dominant** (**PER2** mutation, a **CKI** missense mutation), earlier onset, persistent, may worsen with age.",
              "Light: too little **evening** light and too much **early-morning** light keep the phase advanced."
            ] },
            { type: "callout", kind: "caution", title: "Early waking is not always depression", text: "Rule out **depressive and bipolar disorders**, insomnia disorder and medical causes of early waking (p. 447). Ask what time the person **went to bed**: an older adult asleep at 8 p.m. and up at 4 a.m. has had 8 hours. Hypnotics or alcohol for the early waking, and stimulants for evening sleepiness, risk **substance misuse**." },
            { type: "compare", title: "Delayed versus advanced phase", items: [
              { title: "Delayed (G47.21)", color: "guide", points: ["Late to bed, late to rise.", "**Adolescents**, young adults.", "Sleep-onset insomnia; morning sleepiness.", "**CRY1**; longer circadian period.", "Evening light delays further."] },
              { title: "Advanced (G47.22)", color: "case", points: ["Early to bed, early to rise.", "**Older adults**; familial form younger.", "Early-morning insomnia; evening sleepiness.", "**PER2**, CKI; shorter period in familial cases.", "Early-morning light advances further."] }
            ] }
          ]
        },
        {
          id: "s12-circadian-irregular-non24",
          title: "Irregular sleep-wake and non-24-hour types",
          pages: "447–450",
          blocks: [
            { type: "defs", title: "Irregular sleep-wake type (pp. 447–448)", items: [
              ["Picture", "**No discernible circadian rhythm**: insomnia at night and **napping** by day, with no main sleep period."],
              ["Rule of thumb", "Sleep broken into **at least three** periods in 24 hours; the longest usually falls between **2 and 6 a.m.** and lasts **under 4 hours**."],
              ["Who", "**Neurodegenerative** disorders (major NCD, Alzheimer’s, Parkinson’s, Huntington’s), **neurodevelopmental** disorders in children, intellectual disability, traumatic brain injury; more common in **older adults**."],
              ["Why", "Low light exposure and little **structured daytime activity**; **hospitalized** and institutionalized people and those with dementia get little bright light; isolation."],
              ["Diagnosis", "Detailed history, a **caregiver’s** sleep diary or actigraphy."],
              ["Impact", "Disrupts the **caregiver’s** sleep too."],
              ["Differential", "A voluntarily irregular schedule and poor sleep hygiene; medical, mental and medication causes."]
            ] },
            { type: "defs", title: "Non-24-hour sleep-wake type (pp. 448–450)", items: [
              ["Picture", "The body clock **free-runs** instead of locking to the 24-hour day, so sleep drifts, usually **later each day**."],
              ["Cycle", "A symptom-free spell when the clock is aligned, then sleep-onset insomnia, then daytime sleepiness as sleep slides into the day, and back again."],
              ["Who", "Most common in **blind** people with little light perception: about **50%** of blind people in the US. Rare in sighted people, who often have a history of **delayed phase**, low light exposure, isolation and **longer sleep**."],
              ["Other links", "**Traumatic brain injury**; hospitalized psychiatric and neurological patients who lose social cues; changes such as night work or job loss."],
              ["Diagnosis", "History and sleep diary or actigraphy over an **extended** period; serial **melatonin** phase markers."],
              ["Differential", "**Delayed phase type** (which can drift for a few days); **depressive disorders** with circadian disruption."]
            ] },
            { type: "case", title: "Clinical vignette: the drifting schedule", text: "A 35-year-old man, totally blind since a childhood accident, says that for a few weeks at a time he sleeps well at night, then gradually cannot fall asleep until later and later, until he is sleeping by day and drowsy at work; then the cycle starts again. This has repeated for years.", point: "Periodic insomnia and sleepiness from a clock that **drifts** around the 24-hour day in a blind person: **circadian rhythm sleep-wake disorder, non-24-hour sleep-wake type (G47.24)** (pp. 448–449)." }
          ]
        },
        {
          id: "s12-circadian-shift",
          title: "Shift work type",
          pages: "450–451",
          blocks: [
            { type: "list", title: "Features (pp. 450–451)", items: [
              "Regularly scheduled work (not overtime) outside **8 a.m. to 6 p.m.**, especially **nights**.",
              "**Both** sleepiness at work **and** poor sleep at home are usually needed.",
              "Symptoms usually **resolve** on returning to day work.",
              "Affects an estimated **5%–10%** of US night workers (night workers are **16%–20%** of the workforce); more common after **50** and worsens with time on the schedule.",
              "Risk: **morning types**, people who need **long sleep** (> 8 h), competing day demands such as **young children**; those who fully commit to a nocturnal lifestyle do better.",
              "Shift workers are more often **obese**, so OSA may add to the sleepiness."
            ] },
            { type: "callout", kind: "caution", title: "Shift work and bipolar disorder (p. 451)", text: "People with **bipolar disorder** are particularly vulnerable to **manic episodes** triggered by the missed nights of sleep that shift work brings. Shift work also raises the risk of accidents at work and on the **drive home**, and is linked with alcohol and other substance use disorders, depression, GI and cardiovascular disease, diabetes and cancer." },
            { type: "table", caption: "Differential diagnosis (p. 451)", head: ["Look-alike", "How to tell"], rows: [
              ["Normal shift work difficulty", "Depends on **severity** and distress"],
              ["Other sleep disorders", "Symptoms that persist after **weeks on a day schedule** suggest apnea, insomnia or narcolepsy"],
              ["Jet lag", "Clear from the **travel** history; not a DSM-5-TR circadian type"]
            ] },
            { type: "case", title: "Clinical vignette: the night nurse", text: "A 48-year-old nurse has worked permanent night shifts for 3 years. She sleeps only 4 broken hours after coming home at 8 a.m., struggles to stay awake at 4 a.m. on the ward, and nearly crashed driving home twice. On her two-week day rotation each spring, her sleep and alertness return to normal. She does not snore.", point: "Insomnia during the main sleep period **and** sleepiness during work hours tied to night work, resolving on day shifts: **circadian rhythm sleep-wake disorder, shift work type (G47.26)** (p. 450)." }
          ]
        }
      ]
    },
    {
      title: "Parasomnias and restless legs syndrome",
      sections: [
        {
          id: "s12-nrem-criteria",
          title: "NREM sleep arousal disorders: the criteria",
          pages: "451–453",
          blocks: [
            { type: "p", text: "**Parasomnias** are abnormal behaviors, experiences or physiological events tied to sleep, particular sleep stages or the transitions between sleep and wake. The commonest are the **NREM sleep arousal disorders** and **REM sleep behavior disorder** (p. 451)." },
            { type: "criteria", title: "Non–rapid eye movement sleep arousal disorders in brief", code: "F51.3 · F51.4", pages: "452", items: [
              ["A", "Recurrent **incomplete awakenings** from sleep, usually in the **first third** of the main sleep period, with either:", ["**Sleepwalking**: repeatedly getting out of bed and walking about while asleep, with a **blank, staring face**, little response to others, and **very hard to wake**;", "**Sleep terrors**: recurrent abrupt arousals in **terror**, usually starting with a **panicky scream**, with intense fear and **autonomic signs** (dilated pupils, fast heart rate and breathing, sweating), and little response to comforting."]],
              ["B", "**Little or no** dream imagery recalled (at most a single visual scene)."],
              ["C", "**Amnesia** for the episodes."],
              ["D", "Clinically significant **distress or impairment**."],
              ["E", "Not due to a **substance** (drug of abuse, medication)."],
              ["F", "Coexisting mental and medical disorders do **not explain** the episodes."]
            ], specifiers: [["F51.3 Sleepwalking type", "Specify **with sleep-related eating** or **sexual behavior (sexsomnia)**"], ["F51.4 Sleep terror type", "Also called night terrors, **pavor nocturnus**"]] },
            { type: "defs", title: "Reading the criteria (pp. 452–453)", items: [
              ["One disorder, two faces", "Many people have **both** types on different nights: a mix of wake and NREM sleep at the same time."],
              ["Timing", "Most from **slow-wave sleep (N3)**, so in the **first third** of the night; **rarely** in daytime naps."],
              ["Duration", "Usually **1–10 minutes**, up to an hour; eyes typically **open**."],
              ["After the episode", "Brief confusion, then full recovery; little memory the next morning."],
              ["Disorder or not", "Depends on frequency, **violence or injury**, embarrassment and distress to **household members**; severity is judged by **consequences**, not just frequency."]
            ] },
            { type: "list", title: "The specialized forms of sleepwalking (pp. 453–455)", items: [
              "**Sleep-related eating**: unwanted recurrent eating with variable amnesia, sometimes of **inedible** items (wrappers, small toys); evidence found next morning; risks: poor diabetes control, weight gain, burns, cuts, toxic ingestion; **more common in women**.",
              "**Sexsomnia** (sleep sex): sexual behavior from masturbation to intercourse without awareness; **more common in men**; relationship and **medicolegal** consequences."
            ] },
            { type: "case", title: "Clinical vignette: the screaming 5-year-old", text: "About an hour after falling asleep, several nights a month for 6 months, a 5-year-old boy sits up screaming, sweating and wide-eyed with a racing heart. He does not respond to his parents’ comforting, settles back to sleep after 5 minutes, and remembers nothing in the morning. His parents are exhausted and frightened.", point: "Early-night, **inconsolable** terror arousals with autonomic signs and **amnesia**: **NREM sleep arousal disorder, sleep terror type (F51.4)**. Contrast nightmares: later in the night, **fully awake**, vivid recall (pp. 452, 455)." }
          ]
        },
        {
          id: "s12-nrem-features",
          title: "NREM sleep arousal disorders: course and differential",
          pages: "453–457",
          blocks: [
            { type: "list", title: "What happens during an episode (p. 453)", items: [
              "Sleepwalking starts simply (sitting up, picking at bedclothes) and grows more **complex**: leaving the room or the house, using the bathroom, eating, talking; rarely unlocking doors or **driving**.",
              "Inappropriate acts are common, e.g., **urinating in a closet** or wastebasket.",
              "Sleep is a state of **relative analgesia**: injuries may be noticed only on waking.",
              "Sleep terrors bring overwhelming **dread** and a drive to escape; fragmentary images but **no storylike dream**; usually **one** per night.",
              "Injury to others is limited to people **nearby**; the person is **not seeking anyone out** (p. 455)."
            ] },
            { type: "table", caption: "Prevalence and course (p. 454)", head: ["Item", "Figure"], rows: [
              ["Children with ≥ 1 sleepwalking episode", "**10%–30%**; 12-month prevalence about **5%**"],
              ["Adults: weekly to monthly sleepwalking", "**0.5%–0.7%**; past-year sleepwalking **1.5%–3.6%**"],
              ["Lifetime sleepwalking", "About **6.9%–29.2%** worldwide"],
              ["Sleep terror episodes in toddlers", "**34.4%–36.9%** at 18 months; **19.7%** at 30 months; **2.2%** of adults"],
              ["Ages 10–18", "Sleepwalking **1.1%**, sleep terrors **0.6%**"],
              ["Remission by adolescence", "**50%–65%**"],
              ["Family history", "Up to **80%** of sleepwalkers; offspring risk up to **60%** if **both** parents sleepwalked; sleep terrors up to **10-fold** in first-degree relatives"],
              ["Sex", "Sleepwalking more in **girls** in childhood, **men** in adulthood; sleep terrors more in **boys**, equal in adults"]
            ] },
            { type: "callout", kind: "caution", title: "New sleepwalking in an adult", text: "Onset in an adult who never sleepwalked as a child calls for a search for a cause: **obstructive sleep apnea**, **nocturnal seizures** or a **medication** (p. 454). Violent or sexual behavior during episodes is **more likely in adults**. Triggers include **sedatives**, **sleep deprivation**, schedule disruption, fatigue, stress and **fever**." },
            { type: "callout", kind: "pearl", title: "Markers (p. 455)", text: "No reliable PSG marker exists unless an event is **captured** (sleep deprivation makes capture likelier). EEG during an episode may show **rhythmic delta** continuing into the arousal or mixed frequencies, **without the spatiotemporal evolution** of a seizure. Sleep terror arousals begin **abruptly**, with heart rate **doubling or tripling**, unlike nightmares, where heart and breathing rates rise **before** waking." },
            { type: "table", caption: "Differential diagnosis (pp. 455–456)", head: ["Look-alike", "How to tell"], rows: [
              ["**Nightmare disorder**", "Wakes **easily and completely**, vivid storylike recall, **later** in the night, from **REM**"],
              ["**Breathing-related sleep disorder**", "Confusional arousals with amnesia, but snoring, pauses and sleepiness; apnea can **trigger** sleepwalking"],
              ["**REM sleep behavior disorder**", "From **REM**; easily woken, detailed dreams, “**acting out dreams**”; usually older"],
              ["**Parasomnia overlap syndrome**", "Features of **both** sleepwalking and RBD"],
              ["**Sleep-related seizures**", "**Stereotyped**, several times a night, more often from **naps**, can arise from **wakefulness**; may coexist"],
              ["**Alcohol-induced blackouts**", "Complex behavior with memory loss during drinking; by history may be **indistinguishable**"],
              ["**Dissociative amnesia with fugue**", "Arises from **wakefulness** during the night; recurrent childhood abuse usually present"],
              ["**Malingering**", "Also from wakefulness"],
              ["**Panic disorder**", "Rapid, **complete** awakening without confusion, amnesia or motor activity"],
              ["**Medication-induced complex behaviors**", "Benzodiazepines, **Z-drugs**, opiates, cocaine, nicotine, antipsychotics, TCAs, chloral hydrate: diagnose **substance/medication-induced sleep disorder, parasomnia type**"],
              ["**Night eating syndrome**", "Wakes fully and **overeats**: a disturbance of **meal timing**, not an incomplete arousal"]
            ] },
            { type: "list", title: "Comorbidity and ICSD-3 (p. 457)", items: [
              "Sleepwalking in children and adults is usually **not** linked with significant mental disorders.",
              "In adults, sleepwalking is associated with **major depressive episodes** and **OCD**; people with sleep terrors may score higher on depression and anxiety scales.",
              "ICSD-3 groups **confusional arousals**, sleep terrors and sleepwalking as NREM arousal disorders."
            ] }
          ]
        },
        {
          id: "s12-nightmare",
          title: "Nightmare disorder",
          pages: "457–461",
          blocks: [
            { type: "criteria", title: "Nightmare disorder in brief", code: "F51.5", pages: "457", items: [
              ["A", "Repeated **long, intensely unpleasant, well-remembered** dreams, usually about threats to **survival, security or physical integrity**, generally in the **second half** of the main sleep period."],
              ["B", "On waking, the person becomes **oriented and alert quickly**."],
              ["C", "Clinically significant **distress or impairment**."],
              ["D", "Not due to a **substance**."],
              ["E", "The bad dreams are **not adequately accounted for** by a coexisting mental or medical disorder."]
            ], specifiers: [["During sleep onset", "Nightmares at **sleep onset**"], ["With mental disorder", "Code it after F51.5"], ["With medical condition", "Code it after F51.5"], ["With another sleep disorder", "Code it after F51.5"], ["Acute", "**1 month or less**"], ["Subacute", "**> 1 month, < 6 months**"], ["Persistent", "**6 months or more**"], ["Mild", "**< 1** a week on average"], ["Moderate", "**≥ 1** a week, not nightly"], ["Severe", "**Nightly**"]] },
            { type: "callout", kind: "exam", title: "Nightmares in PTSD", text: "Trauma-related nightmares are part of **PTSD** or acute stress disorder. Add **nightmare disorder** only when the nightmares are severe or frequent enough to need **independent clinical attention**, and record it as “F51.5 nightmare disorder, **with** PTSD” followed by the PTSD code (pp. 458, 460). Most posttraumatic nightmares do **not** replay the trauma exactly (p. 458)." },
            { type: "list", title: "Features (p. 458)", items: [
              "Long, **storylike**, realistic dreams provoking fear, anxiety or other dysphoria; usually about avoiding **imminent danger**.",
              "Almost all arise from **REM** sleep, so they cluster in the **second half** of the night; sleep loss, jet lag and REM-affecting drugs can bring them **earlier**, even at sleep onset.",
              "Waking is quick and complete, but distress can linger and block return to sleep; “**bad dreams**” may not wake the person.",
              "Sleep-onset nightmares often come with **sleep paralysis**.",
              "Only **mild** autonomic arousal; movement and speech are **not** typical because of **REM atonia**; real dream enactment points to **REM sleep behavior disorder**."
            ] },
            { type: "table", caption: "Prevalence, course and risk (pp. 458–459)", head: ["Item", "Figure"], rows: [
              ["Children", "**1%–5%**; preschoolers “often” or “always”: **1.3%–3.9%**; ages 5–15: **5.2%**"],
              ["Children with frequent nightmares", "About **20%** have comorbid insomnia"],
              ["Adults", "At least monthly **6%**; weekly **2%–6%**; frequent **1%–5%**"],
              ["Onset and peak", "Often begins **3–6 years**; peaks in **late adolescence or early adulthood**"],
              ["Risk", "Psychosocial stressors, sleep loss, irregular schedules; middle-aged adults: **low income**, mood problems, insomnia or sleep-disordered breathing, **antidepressants**, heavy alcohol"],
              ["Protective", "**Soothing** by parents after nightmares"],
              ["Sex", "Adult **women** report more; men more aggression or war themes; women more harassment or losing loved ones"],
              ["Suicide", "**Frequent nightmares** substantially raise risk of suicidal thoughts and behavior"]
            ] },
            { type: "callout", kind: "culture", title: "Culture (p. 459)", text: "Nightmares may be read as signs of a person’s **spiritual state** or of the **dead** (e.g., Indonesian civil war survivors, American Indian veterans, **Cambodian refugees**). In Cambodian refugees, frequent nightmares are strongly linked with **PTSD**; check timing and severity before adding nightmare disorder. **Hmong** immigrants report more frequent nightmares, linked with trauma and **sleep paralysis**." },
            { type: "table", caption: "Differential diagnosis (pp. 460–461)", head: ["Look-alike", "How to tell"], rows: [
              ["**Sleep terrors**", "First third, **N3**, no or fragmentary recall, confused and inconsolable, amnesia"],
              ["**REM sleep behavior disorder**", "Complex **movement and vocalization** with frightening dreams; injuries; older men. If nightmares **preceded** RBD and need their own attention, both may be diagnosed"],
              ["**Bereavement**", "Dreams of loss and sadness followed by reflection, not distress"],
              ["**PTSD, acute stress disorder**", "Trauma-related content; add nightmare disorder only if it needs separate attention"],
              ["**Narcolepsy**", "Nightmares common, but **excessive sleepiness** defines it"],
              ["**Sleep-related seizures**", "**Stereotyped** movements; repetitive dreams, aura content, phosphenes"],
              ["**Breathing-related, panic**", "Arousals without nightmare recall"],
              ["**Sleep-related dissociative disorders**", "Real trauma recalled as a “dream” during EEG-documented **wakefulness**"],
              ["**Substances/medications**", "Dopaminergic drugs, **beta-blockers** and antihypertensives, stimulants, **antidepressants**, smoking cessation aids, **melatonin**; **withdrawal** of REM suppressants or alcohol causes **REM rebound**"]
            ] },
            { type: "case", title: "Clinical vignette: the dreams after starting a new pill", text: "A 58-year-old man begins having vivid, frightening dreams of being chased several nights a week, waking fully alert and shaken. They started 3 weeks after he began a beta-blocker for hypertension, and he never had them before. He does not move or shout during sleep.", point: "Nightmares that **began with** a medication known to cause them suggest **substance/medication-induced sleep disorder, parasomnia type**, coded **F19.982** with the drug named, rather than nightmare disorder (pp. 460–461, 469–470)." }
          ]
        },
        {
          id: "s12-rbd",
          title: "REM sleep behavior disorder",
          pages: "461–464",
          blocks: [
            { type: "criteria", title: "REM sleep behavior disorder in brief", code: "G47.52", pages: "461", items: [
              ["A", "Repeated arousals during sleep with **vocalization and/or complex movements**."],
              ["B", "The behaviors come from **REM sleep**: usually **> 90 minutes** after sleep onset, more often **late** in the night, uncommon in naps."],
              ["C", "On waking the person is **fully awake, alert and oriented**."],
              ["D", "**Either**:", ["**REM sleep without atonia** on polysomnography, **or**", "a suggestive history **plus** an established **synucleinopathy** (e.g., Parkinson’s disease, multiple system atrophy)."]],
              ["E", "Clinically significant **distress or impairment** (may include **injury** to self or bed partner)."],
              ["F", "Not due to a **substance** or **another medical condition**."],
              ["G", "Coexisting mental and medical disorders do **not explain** the episodes."]
            ] },
            { type: "list", title: "Features (pp. 461–462)", items: [
              "**Dream enactment**: punching, kicking, jumping or falling out of bed in response to **action-filled or violent** dreams of being attacked or escaping.",
              "Vocalizations are often loud, emotional and **profane**.",
              "Eyes usually **closed**; on waking, **recalls the dream**, which matches the behavior.",
              "Some have only **subtle** behaviors found on history or PSG.",
              "Without PSG, a **probable** diagnosis can be made with an established synucleinopathy and a suggestive history."
            ] },
            { type: "callout", kind: "key", title: "A warning sign of neurodegeneration (pp. 462, 464)", text: "In **idiopathic** RBD, the risk of a defined neurodegenerative disease, usually a **synucleinopathy** (Parkinson’s disease, NCD with **Lewy bodies**, multiple system atrophy), is about **75% within 10–15 years**, about **6%–7% a year**. More than **70%** of sleep-clinic patients eventually convert, often **more than a decade** after RBD began. Monitor neurological status; see [[dx:ncd-lewy|NCD with Lewy bodies]]." },
            { type: "table", caption: "Epidemiology and markers (pp. 462–463)", head: ["Item", "What the manual says"], rows: [
              ["Prevalence", "About **1%** (middle-aged and older, Switzerland); **2%** (elderly, South Korea); higher in psychiatric patients, perhaps from **medications**"],
              ["Sex and age", "More common in **men over 50**, increasingly found in women and younger people; women are **younger** at onset"],
              ["Young patients, especially women", "Think of **narcolepsy**, a **medication**, a **brainstem lesion** or **autoimmune encephalopathy**"],
              ["Culture", "Taiwanese patients: more **wandering** out of the bedroom, fewer injuries (earlier family detection)"],
              ["PSG", "More tonic and/or phasic **EMG** in REM; **arm EMG (biceps)** is more specific; also chin, forearm flexors, tibialis anterior; with **video**"],
              ["Isolated REM without atonia", "Found without symptoms; **7%–14%** later develop RBD"],
              ["Injury", "About **55%** injured; **12%** of injuries serious (fractures, **subdural hematoma**)"]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 463–464)", head: ["Look-alike", "How to tell"], rows: [
              ["**NREM arousal disorders, confusional arousals**", "Usually **under 50**, early night, **confused** on waking, poor recall; REM atonia normal"],
              ["**Medication-induced, parasomnia type**", "**TCAs, SSRIs, SNRIs** can cause REM without atonia or frank RBD: diagnose **substance/medication-induced sleep disorder**"],
              ["**Asymptomatic REM without atonia**", "A PSG finding **without** dream-enacting behavior is not RBD"],
              ["**Nocturnal seizures**", "**Stereotyped**; seizure EEG montage; REM without atonia usually absent"],
              ["**Obstructive sleep apnea**", "Talking, shouting, punching at the **end of apneas**; resolves with CPAP; no REM without atonia"],
              ["**Sleep-related dissociative disorder**", "Arises from **wakefulness**; more in **young women**"],
              ["**Malingering**", "PSG documentation is **mandatory**"]
            ] },
            { type: "callout", kind: "exam", title: "The antidepressant trap", text: "An older man on an **SSRI** starts acting out dreams. The manual codes RBD that appears with **TCAs, SSRIs or SNRIs** as **substance/medication-induced sleep disorder, parasomnia type**, while noting that the drug may only **unmask** an underlying predisposition (p. 463). In practice, the neurodegeneration risk still deserves attention." },
            { type: "list", title: "Comorbidity and residual coding (pp. 464, 476)", items: [
              "RBD occurs in about **30%** of people with **narcolepsy**, with equal sex ratio and younger age.",
              "Repeated arousals in REM **without** PSG or a known synucleinopathy: **other specified sleep-wake disorder (G47.8)**, with that reason recorded."
            ] }
          ]
        },
        {
          id: "s12-rls",
          title: "Restless legs syndrome",
          pages: "464–468",
          blocks: [
            { type: "criteria", title: "Restless legs syndrome in brief", code: "G25.81", pages: "464–465", items: [
              ["A", "An **urge to move the legs**, usually with unpleasant leg sensations, with **all** of:", ["it starts or worsens during **rest or inactivity**;", "it is partly or fully relieved by **movement**;", "it is **worse in the evening or night**, or only occurs then."]],
              ["B", "At least **3 times a week** for at least **3 months**."],
              ["C", "Significant **distress or impairment** (social, occupational, educational, academic, behavioral or other)."],
              ["D", "Not due to another mental disorder or medical condition (**arthritis, leg edema, peripheral ischemia, leg cramps**) or a behavioral condition (**positional discomfort**, habitual foot tapping)."],
              ["E", "Not due to a drug of abuse or **medication** (e.g., **akathisia**)."]
            ] },
            { type: "callout", kind: "mnemonic", title: "URGE", text: "**U**rge to move the legs · **R**est brings it on · **G**etting up and moving relieves it · **E**vening and night are worse. Then **3 times a week for 3 months**, impairment, and no mimic. (Mnemonic written for this app, adapted from the familiar sleep-medicine version; DSM check: pp. 464–465.)" },
            { type: "list", title: "Features (p. 465)", items: [
              "A **sensorimotor, neurological** sleep disorder; sensations called **creeping, crawling, tingling, burning or itching**; the arms can be involved.",
              "Evening worsening is **independent of activity**.",
              "Delays sleep onset and **fragments** sleep; in severe cases movement no longer relieves it.",
              "**Periodic leg movements in sleep** in up to **90%** over several nights; periodic movements while awake also support it.",
              "Supportive: **family history** in first-degree relatives, initial **response to dopaminergic** treatment."
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 465–467)", head: ["Item", "Figure"], rows: [
              ["≥ 3 times a week with moderate or severe distress", "**1.6%** (US and Europe)"],
              ["Severe enough to impair or linked with depression or anxiety", "**2%–3%**"],
              ["Sex", "About **2 times** more in women, explained partly by **parity** (nulliparous women equal to men)"],
              ["Geography", "**Lower** in several Asian populations (Japan, South Korea)"],
              ["Onset", "Second or third decade; **40%** of adult cases had symptoms **before 20**, **20% before 10**"],
              ["Course", "Rises with age to about **60**; familial and early onset progress **slowly**; late onset progresses **rapidly** with more aggravating factors"],
              ["Pregnancy", "**2–3 times** the general rate; peaks in the **third trimester**, usually resolves after delivery"],
              ["Genetics", "**MEIS1** variant: nearly **double** risk (in 7% of European-ancestry people)"],
              ["Mechanisms", "Central **dopamine** and **opioid** systems, **iron** metabolism"]
            ] },
            { type: "callout", kind: "caution", title: "Children", text: "The child must describe the symptoms in **their own words** (not a parent’s); most children of **6 or older** can. They rarely say “urge”: they say their legs “**have to**” or “**got to**” move. Two-thirds report **daytime** sensations from long sitting in class, so compare equal periods of sitting by day and evening (p. 466)." },
            { type: "table", caption: "Differential diagnosis (p. 467)", head: ["Look-alike", "How to tell"], rows: [
              ["**Leg cramps**", "Painful muscle contraction; **no urge** to move and no frequent movements"],
              ["**Positional discomfort**", "Relieved by **one change of position**"],
              ["**Arthritis, myalgia**", "Limited to **joints**; tender muscles; examination abnormal"],
              ["**Neuroleptic-induced akathisia**", "Tied to the drug; **less** evening worsening and fewer periodic limb movements"],
              ["**Peripheral neuropathy, radiculopathy**", "Sensory signs; less evening pattern"],
              ["Others", "Positional ischemia, leg edema, venous insufficiency, peripheral artery disease, myelopathy, eczema, **anxiety-induced restlessness**, habitual foot tapping"]
            ] },
            { type: "callout", kind: "exam", title: "RLS versus akathisia", text: "A patient on an antipsychotic is restless. **Akathisia** is an inner restlessness of the **whole body**, starts **after the drug** or a dose increase, and is **not** clearly worse at night. **RLS** is an urge focused on the **legs**, brought on by **rest**, relieved by **moving**, and **worse in the evening**. Antidepressants (**serotonergic**) can also induce or worsen RLS (p. 466)." },
            { type: "list", title: "Comorbidity (p. 467)", items: [
              "**Depression**, generalized anxiety disorder, panic disorder, **PTSD**; RLS may predispose to depression, and treating it can ease depressive symptoms.",
              "Main medical comorbidity: **cardiovascular disease**; also hypertension, migraine, Parkinson’s disease, MS, neuropathy, diabetes, fibromyalgia, obesity, thyroid disease, cancer, narcolepsy, OSA.",
              "Common with **iron deficiency**, **pregnancy** and **chronic renal failure**, and can improve dramatically when these resolve.",
              "ICSD-3 has similar criteria but **no frequency or duration** requirement (p. 468)."
            ] }
          ]
        }
      ]
    },
    {
      title: "Substance-induced, residual categories and treatment",
      sections: [
        {
          id: "s12-substance",
          title: "Substance/medication-induced sleep disorder",
          pages: "468–474",
          blocks: [
            { type: "criteria", title: "Substance/medication-induced sleep disorder in brief", code: "See table", pages: "468", items: [
              ["A", "A **prominent and severe** sleep disturbance."],
              ["B", "Evidence from history, examination or labs that **both**:", ["it began **during or shortly after** intoxication or withdrawal from a substance, or after starting or stopping a medication; **and**", "the substance or medication **can cause** it."]],
              ["C", "Not better explained by an **independent** sleep disorder: e.g., symptoms **before** the substance, persisting about **1 month** after acute withdrawal or severe intoxication ends, or a history of non-substance episodes."],
              ["D", "Not only during a **delirium**."],
              ["E", "Clinically significant **distress or impairment**."]
            ], specifiers: [["Insomnia type", "Trouble falling or staying asleep, waking, unrefreshing sleep"], ["Daytime sleepiness type", "Sleepiness or fatigue by day; less often long sleep"], ["Parasomnia type", "Abnormal behavioral events in sleep"], ["Mixed type", "Several kinds, none predominant"], ["Onset in intoxication", "Criteria for intoxication met"], ["Onset in withdrawal", "During or shortly after withdrawal"], ["After medication use", "At start, change or withdrawal of a drug"]] },
            { type: "callout", kind: "key", title: "When to use it instead of intoxication or withdrawal", text: "Diagnose it **instead of** substance intoxication or withdrawal only when the sleep problem **predominates** and is severe enough for **independent clinical attention** (p. 468). Ordinary sleep trouble during alcohol withdrawal is part of the withdrawal diagnosis." },
            { type: "table", caption: "ICD-10-CM codes (p. 469)", head: ["Substance", "Mild use disorder", "Moderate or severe", "No use disorder"], rows: [
              ["Alcohol", "F10.182", "F10.282", "F10.982"],
              ["Caffeine", "NA", "NA", "**F15.982**"],
              ["Cannabis", "F12.188", "F12.288", "F12.988"],
              ["Opioid", "F11.182", "F11.282", "F11.982"],
              ["Sedative, hypnotic, anxiolytic", "F13.182", "F13.282", "F13.982"],
              ["Amphetamine-type or other stimulant", "F15.182", "F15.282", "F15.982"],
              ["Cocaine", "F14.182", "F14.282", "F14.982"],
              ["Tobacco", "NA", "**F17.208**", "NA"],
              ["Other or unknown", "F19.182", "F19.282", "F19.982"]
            ] },
            { type: "callout", kind: "exam", title: "Cannabis ends in 8, not 2", text: "Every class ends **…82** except **cannabis** (F12.**188**, .288, .988) and tobacco (F17.**208**). Caffeine shares **F15.982** with the stimulant no-use-disorder code. A prescribed drug with no class (e.g., **fluoxetine**, **bupropion**) uses **F19.982** with the drug named (pp. 469–470)." },
            { type: "steps", title: "Recording (pp. 469–470)", items: [
              ["1. Use disorder first, if any", "“**Severe lorazepam use disorder** with…”; do **not** code the use disorder separately."],
              ["2. The induced disorder", "“…lorazepam-induced sleep disorder,”"],
              ["3. Onset", "“…with onset during withdrawal,” (or during intoxication, or after medication use)"],
              ["4. Type", "“…insomnia type.” Full line: **F13.282** severe lorazepam use disorder with lorazepam-induced sleep disorder, with onset during withdrawal, insomnia type."],
              ["5. Several substances", "List **each** separately with its own code."]
            ] },
            { type: "table", caption: "What each substance does to sleep (pp. 471–472)", head: ["Substance", "Intoxication or use", "Withdrawal"], rows: [
              ["**Alcohol**", "Sedation early (doses > 1 g/kg), less REM; then broken sleep, vivid anxious dreams later in the night; worsens **OSA and hypoventilation**", "Very disrupted sleep, **REM rebound** with vivid dreams (part of delirium tremens in extreme form); light, broken sleep for **months to years**"],
              ["**Caffeine**", "Dose- and **timing**-dependent insomnia; low morning doses usually harmless", "Daytime **sleepiness** in heavy users"],
              ["**Cannabis**", "May shorten sleep latency; more slow-wave sleep, less REM; **tolerance**", "Poor sleep and **unpleasant dreams** for weeks; less N3, more REM"],
              ["**Opioids**", "Sleepiness early; then tolerance and **insomnia**; worsen OSA; **central apnea** with long-acting opioids", "—"],
              ["**Sedative-hypnotics**", "Sleepiness; daytime hangover with long-acting drugs; **sleepwalking and sleep eating** with Z-drugs at high doses or combined", "**Rebound insomnia** (short-acting drugs), serious withdrawal"],
              ["**Stimulants, MDMA**", "**Insomnia**, less REM and N3; MDMA: disturbed sleep within 48 h, possibly more OSA", "**Hypersomnia**: long nights and daytime sleepiness"],
              ["**Tobacco**", "Insomnia, less N3, **night waking from craving**, daytime sleepiness", "Impaired sleep"],
              ["**Medications**", "Adrenergic, dopaminergic, cholinergic and serotonergic agonists or antagonists; **antihistamines**; **corticosteroids**", "—"]
            ] },
            { type: "callout", kind: "pearl", title: "Newer hypnotics (p. 472)", text: "The manual notes that **zolpidem** and **eszopiclone** stayed effective for **6 months to 2 years** without dose escalation or major withdrawal, and that **ramelteon**, **low-dose doxepin** and **suvorexant** show no significant abuse potential, respiratory depression or major withdrawal. Short-acting drugs are the most likely to cause **rebound insomnia**." },
            { type: "list", title: "Course, markers and differential (pp. 470, 472–474)", items: [
              "Because some withdrawal states are protracted, onset can come **up to 4 weeks** after stopping; if symptoms persist **beyond 4 weeks** after stopping a medication, look for another cause.",
              "**Older adults** take more medications and may blame aging; in **dementia** rely on caregivers; in **adolescents** think of cannabis and ecstasy.",
              "Markers: PSG and MSLT, **2-week sleep diaries**, actigraphy, **drug screening** when use is hidden.",
              "The unique consequence is **relapse**: the degree of sleep disturbance (REM rebound) in alcohol withdrawal **predicts relapse** to drinking.",
              "Self-medication (alcohol for insomnia) that worsens another sleep disorder can justify **both** diagnoses.",
              "A sleep disorder with a medical condition that **preceded** its medication: insomnia, hypersomnolence or nightmare disorder “with [condition]”. Unclear whether drug, medical or independent: **unspecified sleep-wake disorder**.",
              "ICSD-3 has no separate “insomnia due to a substance” because single causes of chronic insomnia are hard to identify reliably."
            ] }
          ]
        },
        {
          id: "s12-residual",
          title: "Other specified and unspecified categories",
          pages: "475–476",
          blocks: [
            { type: "table", caption: "Six residual categories (pp. 475–476)", head: ["Category", "Code", "Use when", "Examples given"], rows: [
              ["[[dx:other-specified-insomnia|Other specified insomnia disorder]]", "**G47.09**", "Insomnia picture, criteria not met, **reason stated**", "**Short-term insomnia disorder** (< 3 months); **restricted to nonrestorative sleep**"],
              ["[[dx:unspecified-insomnia|Unspecified insomnia disorder]]", "**G47.00**", "Reason not stated or not enough information", "—"],
              ["[[dx:other-specified-hypersomnolence|Other specified hypersomnolence disorder]]", "**G47.19**", "Hypersomnolence picture, reason stated", "**Brief-duration hypersomnolence**, as in **Kleine-Levin syndrome**"],
              ["[[dx:unspecified-hypersomnolence|Unspecified hypersomnolence disorder]]", "**G47.10**", "Reason not stated", "—"],
              ["[[dx:other-specified-sleep-wake|Other specified sleep-wake disorder]]", "**G47.8**", "Other sleep-wake picture, not fitting the insomnia or hypersomnolence residuals", "**Repeated REM arousals** without PSG or a known synucleinopathy"],
              ["[[dx:unspecified-sleep-wake|Unspecified sleep-wake disorder]]", "**G47.9**", "Reason not stated", "Unclear whether a sleep problem is drug-induced, medical or independent (p. 474)"]
            ] },
            { type: "callout", kind: "caution", title: "Where does isolated nonrestorative sleep go?", text: "The manual is inconsistent: the insomnia text says isolated nonrestorative sleep is coded **other specified sleep-wake disorder** (p. 411), but the residual list names “**restricted to nonrestorative sleep**” as an example of **other specified insomnia disorder (G47.09)** (p. 475). Either is defensible; the residual list is the more specific. Exams usually test **short-term insomnia → G47.09**." },
            { type: "callout", kind: "exam", title: "Three pairs, two patterns", text: "Insomnia residuals end in **0**: other specified **G47.09**, unspecified **G47.00**. Hypersomnolence residuals are in **G47.1**: other specified **.19**, unspecified **.10**. The general sleep-wake residuals are **G47.8** (other specified) and **G47.9** (unspecified)." }
          ]
        },
        {
          id: "s12-treatment",
          title: "Beyond the manual: work-up and treatment in 2026",
          blocks: [
            { type: "callout", kind: "caution", title: "Outside the DSM", text: "DSM-5-TR gives no treatment. This section summarizes current practice (as of October 2026) so you can connect each diagnosis to care. Follow local guidelines, refer to sleep medicine when a sleep study is needed, and see the [[stahl:c/ch10/guide/s10-insomnia|Stahl sleep chapter]] for drug details." },
            { type: "defs", title: "Insomnia disorder", items: [
              ["First line", "**CBT-I** (cognitive behavioral therapy for insomnia): stimulus control, **sleep restriction**, cognitive work on sleep worries, relaxation, sleep hygiene; digital and brief formats work. Recommended first line by the AASM and the ACP."],
              ["Medication", "Short-term or when CBT-I is unavailable or insufficient: orexin antagonists ([[stahl:drugs/suvorexant|suvorexant]], [[stahl:drugs/lemborexant|lemborexant]], [[stahl:drugs/daridorexant|daridorexant]]), Z-drugs ([[stahl:drugs/zolpidem|zolpidem]], [[stahl:drugs/eszopiclone|eszopiclone]]), low-dose [[stahl:drugs/doxepin|doxepin]] for sleep maintenance, [[stahl:drugs/ramelteon|ramelteon]] for sleep onset. Avoid long-term **benzodiazepines** and over-the-counter **antihistamines** in older adults."],
              ["Comorbid insomnia", "Treat insomnia **and** the comorbid condition; CBT-I helps insomnia with depression, pain and PTSD."]
            ] },
            { type: "defs", title: "Sleepiness: hypersomnolence and narcolepsy", items: [
              ["First steps", "Rule out **insufficient sleep** (diary, sleep extension), OSA, medications and depression; PSG plus MSLT off REM-suppressing drugs."],
              ["Wake-promoting drugs", "[[stahl:drugs/modafinil|Modafinil]] or [[stahl:drugs/armodafinil|armodafinil]], [[stahl:drugs/solriamfetol|solriamfetol]], [[stahl:drugs/pitolisant|pitolisant]]; stimulants ([[stahl:drugs/methylphenidate|methylphenidate]], [[stahl:drugs/amphetamine|amphetamine]]) as alternatives."],
              ["Cataplexy and sleep", "**Oxybates** ([[stahl:drugs/sodium-oxybate|sodium oxybate]], the low-sodium mixed-salt form, once-nightly formulations) treat sleepiness, cataplexy and broken sleep; pitolisant also reduces cataplexy; REM-suppressing antidepressants ([[stahl:drugs/venlafaxine|venlafaxine]], [[stahl:drugs/clomipramine|clomipramine]]) are used off label."],
              ["Behavioral", "Scheduled **short naps**, regular sleep, driving safety counseling, school and work accommodations."]
            ] },
            { type: "update", kind: "post", year: "2026", title: "Oveporexton: the first orexin agonist", source: "Takeda press release and US FDA approval, August 2026", text: "In August 2026 the FDA approved **oveporexton** (Orzeyful), an oral **orexin 2 receptor agonist**, for **narcolepsy type 1** in adults: the first drug aimed at the missing hypocretin signal rather than the symptoms. Common adverse effects in trials included **insomnia** and urinary urgency or frequency. Its controlled-substance scheduling was pending at the time of writing. See [[stahl:drugs/oveporexton|oveporexton]] and the [[stahl:c/ch10/guide/s10-newer|Stahl section on newer agents]]." },
            { type: "update", kind: "post", year: "2024", title: "Pediatric narcolepsy approvals", source: "US FDA approvals, June and October 2024", text: "**Pitolisant** was approved for excessive daytime sleepiness in narcolepsy from **age 6** (June 2024), and once-nightly **sodium oxybate** (Lumryz) for cataplexy or sleepiness from **age 7** (October 2024)." },
            { type: "defs", title: "Breathing-related sleep disorders", items: [
              ["OSA", "**Positive airway pressure** (CPAP) is standard; also weight loss, oral appliances, positional therapy, upper-airway surgery and **hypoglossal nerve stimulation**. Treating OSA can improve sleepiness, blood pressure and mood. Review **sedatives, opioids and alcohol**."],
              ["Central apnea and hypoventilation", "Treat the cause (heart failure, opioid dose), PAP or adaptive and **noninvasive ventilation** under sleep or pulmonary specialists."]
            ] },
            { type: "update", kind: "post", year: "2024", title: "Tirzepatide for obstructive sleep apnea", source: "US FDA approval, December 20, 2024", text: "**Tirzepatide** (Zepbound) became the first drug approved for **moderate to severe OSA in adults with obesity**, used with diet and exercise. In the SURMOUNT-OSA trials the AHI fell by about **25–29 events per hour** versus about 5–6 with placebo. A combination of aroxybutynin and atomoxetine (**AD109**) was under FDA review in 2026, with a decision expected in early 2027." },
            { type: "defs", title: "Circadian disorders", items: [
              ["Delayed phase", "Timed **morning bright light** and low-dose **melatonin** in the early evening; fixed wake time."],
              ["Advanced phase", "**Evening** bright light."],
              ["Irregular type", "Daytime light and structured activity, especially in dementia care."],
              ["Non-24-hour", "Timed melatonin; [[stahl:drugs/tasimelteon|tasimelteon]] is approved for non-24 in adults (studied in **totally blind** people)."],
              ["Shift work", "Planned naps, light management, sleep protection; [[stahl:drugs/modafinil|modafinil]] or [[stahl:drugs/armodafinil|armodafinil]] for sleepiness at work."]
            ] },
            { type: "defs", title: "Parasomnias and restless legs", items: [
              ["NREM arousal disorders", "Safety (locks, alarms, ground-floor bedroom), regular sleep, reduce triggers (sleep loss, sedatives, alcohol), treat OSA; scheduled awakenings in children; medication rarely."],
              ["Nightmare disorder", "**Imagery rehearsal therapy** first; [[stahl:drugs/prazosin|prazosin]] is used for trauma-related nightmares, with mixed trial evidence."],
              ["REM sleep behavior disorder", "**Bedroom safety** first; melatonin or clonazepam; stop or reduce serotonergic antidepressants where possible; **counsel about neurodegeneration risk** and arrange neurological follow-up."],
              ["Restless legs syndrome", "Check **ferritin and iron saturation** and give iron when low; **alpha-2-delta ligands** ([[stahl:drugs/gabapentin|gabapentin]], [[stahl:drugs/pregabalin|pregabalin]]) first line; avoid standard use of **dopamine agonists** because of **augmentation**; review serotonergic antidepressants, antihistamines and antipsychotics."]
            ] },
            { type: "update", kind: "post", year: "2024", title: "AASM restless legs guideline", source: "American Academy of Sleep Medicine clinical practice guideline, J Clin Sleep Med, September 2024", text: "The AASM guideline recommends **iron** supplementation when iron studies are low (for oral iron, ferritin **≤ 75 ng/mL** or transferrin saturation **< 20%**; IV iron up to a ferritin of 100 ng/mL), recommends **gabapentin, gabapentin enacarbil and pregabalin**, and recommends **against the standard use** of dopamine agonists (pramipexole, ropinirole, rotigotine) because of long-term **augmentation**." },
            { type: "update", kind: "post", year: "2026", title: "Insomnia: combining CBT-I and medication", source: "AASM clinical practice guideline, J Clin Sleep Med, April 2026; DEA proposed rule, August 2026", text: "An April 2026 AASM guideline on combination treatment gave **conditional** recommendations: CBT-I plus medication over medication alone, and **CBT-I alone** without adding medication when CBT-I is used. CBT-I remains first line. In August 2026 the US DEA **proposed** moving the dual orexin receptor antagonists from **Schedule IV to Schedule V**; check whether the rule has been finalized." }
          ]
        }
      ]
    }
  ]
});
