/* Disorder library: Chapter 12, Sleep-Wake Disorders (DSM-5-TR pp. 407–476).
   Codes as printed in the 2022 manual; checked against ICD-10-CM through FY2027 (October 1, 2026): unchanged. */
(function () {
  var SRC = "ICD-10-CM FY2025–FY2027 code tables; APA DSM-5-TR coding updates through September 2025";
  var NC = "Unchanged through October 2026";
  function upd(text) { return [{ kind: "post", year: "2026", title: "Codes checked through October 2026", source: SRC, text: text }]; }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "insomnia", ch: "ch12", sec: "s12-insomnia-criteria", pages: "409–417", critPages: "409–410",
      name: "Insomnia disorder", code: "F51.01",
      codes: [["F51.01", "Primary insomnia", NC]],
      aka: ["chronic insomnia", "chronic insomnia disorder (ICSD-3)", "primary insomnia (DSM-IV)", "comorbid insomnia", "sleeplessness"],
      essence: "A main complaint of **dissatisfaction with sleep quantity or quality**, with trouble **falling asleep, staying asleep or waking too early**, at least **3 nights a week for 3 months**, despite **adequate opportunity**, with distress or impairment; coexisting disorders may be present but must not **adequately explain** it.",
      duration: "≥3 nights a week for ≥3 months",
      functioning: "Fatigue, poor attention and memory, errors and accidents, absenteeism, lower quality of life",
      mood: "Irritability and mood lability are common; depressive or anxiety symptoms less often; insomnia raises suicide risk even after adjusting for depression",
      criteria: [
        ["A", "The main complaint is dissatisfaction with how much or how well one sleeps, with at least one of: trouble getting to sleep; trouble staying asleep (frequent waking or difficulty returning to sleep); waking too early without getting back to sleep. In children, needing a caregiver to fall or return to sleep counts."],
        ["B", "Clinically significant distress or impairment (social, occupational, educational, academic, behavioral or other)."],
        ["C", "Occurs on at least 3 nights a week."],
        ["D", "Has lasted at least 3 months."],
        ["E", "Happens even though there is adequate opportunity to sleep."],
        ["F", "Not better explained by, and not confined to the course of, another sleep-wake disorder (e.g., narcolepsy, breathing-related, circadian, parasomnia)."],
        ["G", "Not due to the physiological effects of a substance (drug of abuse or medication)."],
        ["H", "Any coexisting mental or medical conditions fail to adequately account for the main complaint."]
      ],
      specifiers: ["With mental disorder (substance use disorders count)", "With medical condition", "With another sleep disorder", "Episodic: 1 month to less than 3 months", "Persistent: 3 months or longer", "Recurrent: two or more episodes within 1 year", "Record the comorbid condition’s code right after F51.01"],
      epi: [["Adults with insomnia symptoms", "About one-third"], ["Symptoms with daytime impairment", "10%–15%"], ["Insomnia disorder", "4%–22% (average about 10%): the most prevalent sleep disorder"], ["Primary care", "20%–40% report significant symptoms"], ["Comorbid mental disorder", "40%–50%"], ["Sex", "Women 1.3:1, rising to 1.7:1 after age 45"]],
      risk: ["Anxious, worry-prone temperament; high arousal and stress reactivity.", "Female sex and older age; family history in 35%–70% (most often the mother); higher monozygotic concordance.", "Precipitants: major life events, chronic stress, noise, light, temperature, high altitude.", "Perpetuating habits: long time in bed, irregular schedule, naps, fear of not sleeping, excess caffeine.", "Menopause and childbirth in women."],
      differential: [
        { name: "Short sleepers and normal age-related change", how: "Little sleep or broken sleep but no complaint and no daytime cost." },
        { name: "Sleep deprivation from circumstance", how: "No adequate opportunity to sleep (on call, newborn): fails Criterion E." },
        { id: "other-specified-insomnia", how: "Same picture lasting under 3 months: short-term insomnia disorder (G47.09)." },
        { id: "circadian-delayed", how: "Cannot sleep at a conventional time but sleeps normally when allowed to go to bed and rise late." },
        { id: "circadian-shift", how: "Recent history of night or rotating shifts." },
        { id: "rls", how: "An urge to move the legs with unpleasant leg sensations delays sleep." },
        { id: "osa", how: "Snoring, pauses, sleepiness; up to 50% with apnea report insomnia, and 1 in 7 with insomnia have moderate to severe OSA." },
        { id: "narcolepsy", how: "Severe daytime sleepiness, cataplexy, sleep paralysis and hallucinations dominate." },
        { id: "substance-induced-sleep", how: "A substance is judged causal, e.g., insomnia only with heavy coffee use." },
        { id: "mdd", how: "Insomnia that is just one symptom of the episode needs no separate diagnosis; add insomnia disorder when it needs its own attention." }
      ],
      pearls: ["A 6-week insomnia is not insomnia disorder: use other specified insomnia (G47.09).", "Comorbidity is allowed; you need not decide which caused which.", "Diagnosis rests on the subjective report, not PSG.", "Ask about snoring before giving a hypnotic.", "Insomnia that starts in a depressive episode persists afterward in at least 40%–50%."],
      cmp: { symptoms: "Dissatisfaction with sleep; onset, maintenance or early-waking problems", exclusions: "Inadequate opportunity; another sleep-wake disorder; substances; comorbid disorders that adequately explain it", prevalence: "About 10% (4%–22%)", course: "Chronic in 45%–75% over 1–7 years; night-to-night variability" },
      clues: [["Core picture", "A 44-year-old who has lain awake most nights for 5 months since a now-finished stressful audit, with 8 hours in bed available"], ["Duration rule", "≥3 nights a week for ≥3 months"], ["Code", "F51.01"]],
      updates: upd("**F51.01** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "hypersomnolence", ch: "ch12", sec: "s12-hypersomnolence", pages: "417–421", critPages: "417–418",
      name: "Hypersomnolence disorder", code: "F51.11",
      codes: [["F51.11", "Primary hypersomnia", NC]],
      aka: ["idiopathic hypersomnia", "primary hypersomnia (DSM-IV)", "excessive daytime sleepiness", "sleep drunkenness"],
      essence: "Excessive sleepiness **despite a main sleep period of at least 7 hours**, with daytime **lapses into sleep**, an **unrefreshing main sleep of more than 9 hours**, or **sleep inertia**, at least **3 times a week for 3 months**, not better explained by another sleep disorder, substance or coexisting condition.",
      duration: "≥3 times a week for ≥3 months",
      functioning: "Reduced efficiency and vigilance at work and school; dangerous sleep episodes while driving or using machinery",
      mood: "Many meet criteria for a depressive disorder; distress from constant sleep need",
      criteria: [
        ["A", "Self-reported excessive sleepiness although the main sleep period lasts at least 7 hours, with at least one of: repeated sleep or lapses into sleep in the same day; a main sleep episode longer than 9 hours a day that is not restorative; difficulty becoming fully awake after abrupt awakening."],
        ["B", "At least 3 times a week for at least 3 months."],
        ["C", "Significant distress or impairment in cognitive, social, occupational or other functioning."],
        ["D", "Not better explained by, and not confined to, another sleep disorder (narcolepsy, breathing-related, circadian, parasomnia)."],
        ["E", "Not due to a substance (drug of abuse or medication)."],
        ["F", "Any coexisting mental or medical conditions fail to adequately account for the sleepiness."]
      ],
      specifiers: ["With mental disorder", "With medical condition", "With another sleep disorder (code each comorbid condition after F51.11)", "Acute: less than 1 month", "Subacute: 1–3 months", "Persistent: more than 3 months", "Mild: trouble staying alert 1–2 days a week", "Moderate: 3–4 days a week", "Severe: 5–7 days a week"],
      epi: [["Sleep clinic patients with daytime sleepiness", "5%–10% receive this diagnosis"], ["Sleep inertia episodes, general population", "About 1%"], ["Sex", "About equal"], ["Onset", "Mean 17–24 years; diagnosis 10–15 years later"]],
      risk: ["Viral infection reported before onset in about 10%.", "Common after traumatic brain injury.", "May be familial (autosomal dominant).", "Stress and alcohol worsen it temporarily."],
      differential: [
        { name: "Long sleepers", how: "Need more sleep but are refreshed, with no sleepiness or inertia once they get it." },
        { name: "Insufficient sleep (behaviorally induced)", how: "Under 7 hours on work nights with catch-up sleep on free days; a 10–14 day sleep extension trial clarifies." },
        { id: "narcolepsy", how: "Short naps refresh, cataplexy, hallucinations and paralysis; MSLT usually shows two or more SOREMPs." },
        { id: "osa", how: "Snoring, pauses, obesity, large neck; PSG shows apneas." },
        { id: "circadian-delayed", how: "Time-of-day pattern: sleepy in the morning, alert at night." },
        { id: "mdd", how: "Sleepiness in a depressive episode (especially atypical features): add this diagnosis only if sleepiness far exceeds what depression explains." },
        { id: "gad", how: "Fatigue that sleep does not relieve and that is unrelated to sleep amount." }
      ],
      pearls: ["Requires at least 7 hours of sleep: rule out insufficient sleep first.", "Sleep inertia (about 40%) helps separate it from other sleepiness.", "Long naps (over 1 hour) do not refresh, unlike narcolepsy.", "MSLT: mean latency usually under 10, often 8 minutes or less, few SOREMPs.", "Kleine-Levin syndrome goes to other specified hypersomnolence disorder."],
      cmp: { symptoms: "Sleepiness despite ≥7 hours of sleep; long unrefreshing sleep; sleep inertia", exclusions: "Another sleep disorder; substances; coexisting disorders that adequately explain it", prevalence: "5%–10% of sleepy sleep clinic patients", course: "Persistent and stable; 11%–25% remit after 5–7 years" },
      clues: [["Core picture", "A 22-year-old who sleeps 10 hours, wakes confused through several alarms, and takes 2-hour naps that do not help"], ["Duration rule", "≥3 times a week for ≥3 months"], ["Code", "F51.11"]],
      updates: upd("**F51.11** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "narcolepsy", ch: "ch12", sec: "s12-narcolepsy-criteria", pages: "422–429", critPages: "422–423",
      name: "Narcolepsy", code: "G47.411 / G47.419 / G47.421 / G47.429",
      codes: [
        ["G47.411", "Narcolepsy with cataplexy (type 1: cataplexy or hypocretin deficiency)", NC],
        ["G47.419", "Narcolepsy without cataplexy (type 2: hypocretin normal or not measured)", NC],
        ["G47.421", "Narcolepsy in conditions classified elsewhere with cataplexy (type 1 due to a medical condition; code the condition first)", NC],
        ["G47.429", "Narcolepsy in conditions classified elsewhere without cataplexy (type 2 due to a medical condition; e.g., G71.11 myotonic dystrophy first)", NC]
      ],
      aka: ["NT1", "NT2", "narcolepsy type 1", "narcolepsy type 2", "hypocretin deficiency", "orexin deficiency", "secondary narcolepsy", "cataplexy"],
      essence: "Recurrent **irrepressible need to sleep** or lapses into sleep **at least 3 times a week over 3 months**, plus **cataplexy**, **CSF hypocretin-1 ≤110 pg/mL** (or ≤ one-third of normal), or a positive sleep study (**nocturnal REM latency ≤15 min**, or **MSLT mean latency ≤8 min with ≥2 SOREMPs**).",
      duration: "≥3 times a week over the past 3 months",
      functioning: "Impaired school, work and driving; jobs endangering self or others should be avoided; social withdrawal to avoid emotional triggers",
      mood: "Mood disorders are common comorbidities; some avoid strong emotion because it triggers cataplexy",
      criteria: [
        ["A", "Repeated periods of an irrepressible need to sleep, falling asleep or napping within the same day, at least 3 times a week over the past 3 months."],
        ["B", "At least one of: (1) cataplexy a few times a month or more (in established disease, brief bilateral loss of tone with preserved awareness triggered by laughter or joking; in children or within 6 months of onset, spontaneous grimacing, jaw opening with tongue thrusting, or global hypotonia); (2) CSF hypocretin-1 deficiency (one-third or less of healthy values on the same assay, or 110 pg/mL or less), not measured during acute brain injury, inflammation or infection; (3) nocturnal PSG with REM latency of 15 minutes or less, or an MSLT with mean sleep latency of 8 minutes or less and two or more sleep-onset REM periods."]
      ],
      specifiers: ["G47.411 Type 1: cataplexy (B1) or hypocretin deficiency (B2)", "G47.419 Type 2: only B3; no cataplexy, hypocretin normal or unmeasured", "G47.421 Type 1 due to a medical condition", "G47.429 Type 2 due to a medical condition", "Mild: naps once or twice daily, cataplexy less than weekly", "Moderate: several naps daily, cataplexy daily or every few days", "Severe: near-constant sleepiness, drug-resistant cataplexy several times a day"],
      epi: [["NT1 prevalence", "0.02%–0.05% of adults"], ["US incidence", "0.74 per 100,000 person-years"], ["NT2 prevalence", "Unknown"], ["Sex", "Fairly equal"], ["Peak onset", "15–25 years"]],
      risk: ["Group A streptococcal infection, H1N1 2009 influenza, other winter infections and Pandemrix vaccination may trigger an autoimmune process.", "HLA DQB1*06:02 in 85%–95% of NT1 (40%–50% of NT2; 12%–38% of the population).", "Monozygotic concordance 25%–32%; 1%–2% of first-degree relatives.", "Head trauma; abrupt sleep-wake schedule changes.", "Secondary causes: tumors, inherited disorders, hypothalamic injury, MS, stroke, encephalitis."],
      differential: [
        { id: "hypersomnolence", how: "Long unrefreshing sleep and naps, sleep inertia, no cataplexy, few SOREMPs." },
        { id: "osa", how: "More common; think narcolepsy when sleepiness persists after apnea treatment; the two can coexist." },
        { id: "insomnia", how: "Narcolepsy breaks night sleep but without difficulty falling or returning to sleep." },
        { id: "mdd", how: "No cataplexy; MSLT usually normal; two or more SOREMPs rare." },
        { id: "fnd", how: "Pseudocataplexy: long, stress-triggered, generalized episodes with reflexes intact." },
        { id: "adhd", how: "Sleepy children can look inattentive or aggressive." },
        { name: "Atonic seizures", how: "Not usually emotion-triggered; abrupt falls; seizure EEG." },
        { name: "Syncope", how: "Presyncopal symptoms that cataplexy lacks." },
        { id: "schizophrenia", how: "Narcoleptic hallucinations are sleep-related and multisensory; stimulants can cause persecutory delusions." }
      ],
      pearls: ["Low hypocretin alone makes type 1, even without cataplexy.", "Short naps refresh; long naps help hypersomnolence little.", "Cataplexy: awake and aware, reflexes abolished, mostly triggered by laughter.", "Stop REM-suppressing drugs and normalize sleep for about 2 weeks before an MSLT.", "Sudden worsening suggests new OSA (about one-quarter)."],
      cmp: { symptoms: "Irrepressible daytime sleep; cataplexy; hypnagogic hallucinations; sleep paralysis", exclusions: "No exclusion criterion; hypocretin not interpretable during acute brain injury, inflammation or infection", prevalence: "NT1 0.02%–0.05%", course: "Onset 15–25; lifelong and fairly stable" },
      clues: [["Core picture", "A 19-year-old who sleeps in class daily and whose knees buckle for seconds when he laughs, fully aware"], ["Duration rule", "≥3 times a week over the past 3 months"], ["Code", "G47.411 (type 1) / G47.419 (type 2)"]],
      updates: upd("**G47.411**, **G47.419**, **G47.421** and **G47.429** are unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "osa", ch: "ch12", sec: "s12-osa-criteria", pages: "429–435", critPages: "429",
      name: "Obstructive sleep apnea hypopnea", code: "G47.33",
      codes: [["G47.33", "Obstructive sleep apnea (adult) (pediatric)", NC]],
      aka: ["OSA", "obstructive sleep apnea", "sleep apnea", "OSAHS", "breathing-related sleep disorder"],
      essence: "On polysomnography, an **AHI of at least 5** obstructive apneas or hypopneas per hour **with symptoms** (snoring, gasping, pauses, or daytime sleepiness, fatigue or unrefreshing sleep), **or an AHI of 15 or more regardless of symptoms**.",
      duration: "No minimum duration (PSG-defined)",
      functioning: "Daytime sleepiness in over 50% with moderate to severe OSA; twofold occupational accidents, motor vehicle crashes up to sevenfold; lowest quality-of-life scores in vitality",
      mood: "Up to one-third of referrals report depressive symptoms, up to 10% moderate to severe",
      criteria: [
        ["A1", "PSG shows at least 5 obstructive apneas or hypopneas per hour of sleep, plus either nocturnal breathing disturbance (snoring, snorting or gasping, breathing pauses) or daytime sleepiness, fatigue or unrefreshing sleep despite enough opportunity to sleep, not better explained by another mental disorder (including a sleep disorder) or medical condition."],
        ["A2", "Or: PSG shows an obstructive AHI of 15 or higher, with or without symptoms."]
      ],
      specifiers: ["Mild: AHI less than 15", "Moderate: AHI 15–30", "Severe: AHI more than 30", "Other severity markers: desaturation (over 10% of sleep below 90%), arousal index over 30, N3 under 5%"],
      epi: [["US men, AHI ≥15", "13%"], ["US women, AHI ≥15", "6%"], ["AHI >5 with sleepiness", "Men 14%, women 5%"], ["Children", "1%–4%"], ["Male to female", "2:1 to 4:1, narrowing after menopause"]],
      risk: ["Obesity and male sex (major).", "Retrognathia, micrognathia; adenotonsillar hypertrophy in young children.", "Family history; Down syndrome, Treacher Collins syndrome.", "Menopause, pregnancy, polycystic ovary syndrome, acromegaly.", "Sedating psychiatric and medical drugs."],
      differential: [
        { name: "Primary snoring", how: "Snoring without symptoms and with a normal PSG." },
        { id: "narcolepsy", how: "Cataplexy, refreshing dream-filled naps, SOREMPs; may coexist with OSA." },
        { id: "csa", how: "Events from absent effort; snoring less prominent; heart failure or opioids." },
        { id: "insomnia", how: "No snoring or apnea signs; the two often coexist." },
        { id: "panic-disorder", how: "Nocturnal panic: rarer episodes, strong autonomic arousal, daytime panic history, normal PSG." },
        { id: "adhd", how: "In children, inattention and hyperactivity may be OSA; ask about snoring and big tonsils." },
        { name: "Nocturnal asthma", how: "Known asthma; PSG without apneas or desaturation." }
      ],
      pearls: ["AHI ≥15 is OSA even with no symptoms.", "AHI 5–14 needs symptoms.", "Women often report fatigue or insomnia rather than sleepiness.", "In children, an obstructive AHI of 1 or more is abnormal.", "Antipsychotic weight gain and sedatives raise risk in psychiatric patients (teaching outside the DSM)."],
      cmp: { symptoms: "Snoring, witnessed pauses, gasping; daytime sleepiness or fatigue", exclusions: "Symptoms (for AHI 5–14) not better explained by another disorder", prevalence: "AHI ≥15: men 13%, women 6% (US)", course: "Insidious, progressive with weight gain; can resolve with weight loss" },
      clues: [["Core picture", "A 52-year-old driver with a BMI of 36 who snores, stops breathing at night and dozes at stoplights; AHI 34"], ["Duration rule", "No minimum duration (PSG-defined)"], ["Code", "G47.33"]],
      updates: upd("**G47.33** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates; there are still no severity subcodes.")
    },
    {
      id: "csa", ch: "ch12", sec: "s12-csa", pages: "435–439", critPages: "435–436",
      name: "Central sleep apnea", code: "G47.31 / R06.3 / G47.37",
      codes: [
        ["G47.31", "Primary central sleep apnea (idiopathic central sleep apnea)", NC],
        ["R06.3", "Periodic breathing (Cheyne-Stokes breathing)", NC],
        ["G47.37", "Central sleep apnea in conditions classified elsewhere (comorbid with opioid use; code F11.10 or F11.20 first if an opioid use disorder is present)", NC]
      ],
      aka: ["CSA", "Cheyne-Stokes respiration", "periodic breathing", "opioid-induced central sleep apnea", "high-altitude periodic breathing"],
      essence: "Polysomnography shows **5 or more central apneas per hour** of sleep, from **variable or absent respiratory effort**, not better explained by another current sleep disorder; subtypes are **idiopathic**, **Cheyne-Stokes breathing** and **comorbid with opioid use**.",
      duration: "No minimum duration (PSG-defined)",
      functioning: "Sleepiness and broken sleep; in heart failure, Cheyne-Stokes breathing marks worse outcomes",
      mood: "Opioid-related CSA can bring confusion and depression; methadone patients report more somnolence and depression",
      criteria: [
        ["A", "PSG shows 5 or more central apneas per hour of sleep."],
        ["B", "Not better explained by another current sleep disorder."]
      ],
      specifiers: ["G47.31 Idiopathic: repeated apneas and hypopneas from variable effort without obstruction", "R06.3 Cheyne-Stokes breathing: crescendo-decrescendo tidal volume, at least 5 events an hour, with frequent arousal", "G47.37 Comorbid with opioid use: opioid effect on medullary rhythm generators", "Severity: by frequency of events, desaturation and sleep fragmentation"],
      epi: [["Idiopathic CSA", "Unknown; thought rare"], ["Heart failure with EF <45%", "Cheyne-Stokes in 15%–44%"], ["Acute stroke", "About 20%"], ["Chronic opioids or methadone", "About 24%; worse above 200 mg morphine equivalents a day"], ["Children", "4%–6%"]],
      risk: ["Heart failure, stroke, renal failure, atrial fibrillation (Cheyne-Stokes).", "Long-acting opioids taken for months; methadone maintenance.", "Ascent to high altitude (usually 2,500 m or more).", "Age over 60 and male sex."],
      differential: [
        { id: "osa", how: "Obstructive events with continued effort; snoring prominent; can coexist." },
        { id: "sleep-hypoventilation", how: "Sustained desaturation and raised CO₂ rather than cyclical events." },
        { name: "High-altitude periodic breathing", how: "After recent ascent; shorter cycle than Cheyne-Stokes; no heart failure." },
        { id: "opioid-use", how: "Code the opioid use disorder first, then G47.37." }
      ],
      pearls: ["Central events should be over 50% of all respiratory events (text, not Criterion A).", "Cheyne-Stokes cycle is about 60 seconds.", "Cheyne-Stokes breathing while awake signals worse prognosis.", "Think of CSA in sleepy patients on methadone maintenance or long-term opioids.", "G47.37 alone when there is opioid use without a use disorder."],
      cmp: { symptoms: "Sleepiness, insomnia, waking with dyspnea; sometimes none", exclusions: "Another current sleep disorder that explains it", prevalence: "Heart failure 15%–44%; chronic opioids about 24%", course: "Follows the underlying condition (heart failure, opioid dose)" },
      clues: [["Core picture", "A 64-year-old with heart failure (EF 30%) whose wife sees waxing and waning breathing with pauses"], ["Duration rule", "No minimum duration (PSG-defined)"], ["Code", "G47.31 / R06.3 / G47.37"]],
      updates: upd("**G47.31**, **R06.3** and **G47.37** are unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "sleep-hypoventilation", ch: "ch12", sec: "s12-hypoventilation", pages: "439–443", critPages: "439–440",
      name: "Sleep-related hypoventilation", code: "G47.34 / G47.35 / G47.36",
      codes: [
        ["G47.34", "Idiopathic sleep related nonobstructive alveolar hypoventilation", NC],
        ["G47.35", "Congenital central alveolar hypoventilation syndrome", NC],
        ["G47.36", "Sleep related hypoventilation in conditions classified elsewhere (comorbid)", NC]
      ],
      aka: ["obesity hypoventilation syndrome", "Ondine’s curse", "congenital central hypoventilation syndrome", "nocturnal hypoventilation"],
      essence: "Polysomnography shows episodes of **decreased breathing with elevated CO₂**; without a CO₂ measure, **persistently low oxygen saturation unrelated to apneas or hypopneas** suggests it; not better explained by another current sleep disorder.",
      duration: "No minimum duration (PSG-defined)",
      functioning: "Sleepiness, morning headaches; pulmonary hypertension, cor pulmonale, polycythemia and neurocognitive dysfunction as it progresses",
      mood: "Neurocognitive dysfunction may occur; no specific mood picture",
      criteria: [
        ["A", "PSG shows episodes of reduced respiration with raised CO₂ levels; when CO₂ is not measured, persistent low oxygen saturation not linked to apneas or hypopneas may indicate it."],
        ["B", "Not better explained by another current sleep disorder."]
      ],
      specifiers: ["G47.34 Idiopathic: no identifiable cause", "G47.35 Congenital central alveolar hypoventilation (PHOX2B)", "G47.36 Comorbid: lung disease, neuromuscular or chest wall disorders, obesity, medications (benzodiazepines, opiates)", "Severity: by hypoxemia, hypercarbia and end-organ effects"],
      epi: [["Idiopathic, adults", "Very uncommon"], ["Congenital", "Rare; prevalence unknown"], ["Obesity hypoventilation", "About 0.14%–0.6% of the population; up to 42% of sleep clinic patients with BMI >35"]],
      risk: ["Reduced drive (“won’t breathe”): idiopathic, congenital, sedatives.", "Increased load or weak muscles (“can’t breathe”): COPD, interstitial lung disease, kyphoscoliosis, neuromuscular disease.", "Obesity.", "Benzodiazepines and opiates: the comorbidity most relevant to clinicians."],
      differential: [
        { id: "osa", how: "Repeated, cyclical desaturations with discrete events; most with obesity hypoventilation also have OSA." },
        { id: "csa", how: "Cyclical central events rather than sustained hypoventilation." },
        { name: "Lung disease with daytime hypoxemia", how: "Hypoxemia not confined to sleep; may coexist." }
      ],
      pearls: ["Symptoms are not required.", "Sustained, not cyclical, desaturation.", "Arterial pCO₂ above 55 mmHg, or a rise of 10 or more to above 50, for over 10 minutes.", "Obesity hypoventilation: BMI over 30 and awake pCO₂ over 45.", "Congenital form: Hirschsprung’s disease, neural crest tumors, box-shaped face."],
      cmp: { symptoms: "Often none; sleepiness, morning headaches, orthopnea", exclusions: "Another current sleep disorder that explains it", prevalence: "Obesity hypoventilation 0.14%–0.6%", course: "Slowly progressive; gas changes spread into wakefulness" },
      clues: [["Core picture", "A woman with BMI 42 and morning headaches whose PSG shows sustained desaturation and rising CO₂ without many apneas"], ["Duration rule", "No minimum duration (PSG-defined)"], ["Code", "G47.34 / G47.35 / G47.36"]],
      updates: upd("**G47.34**, **G47.35** and **G47.36** are unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "circadian-delayed", ch: "ch12", sec: "s12-circadian-delayed", pages: "443–446", critPages: "443–444",
      name: "Circadian rhythm sleep-wake disorder, delayed sleep phase type", code: "G47.21",
      codes: [["G47.21", "Circadian rhythm sleep disorder, delayed sleep phase type", NC]],
      aka: ["DSPS", "delayed sleep phase syndrome", "DSPT", "night owl", "delayed sleep-wake phase disorder"],
      essence: "Sleep and wake times **delayed, usually by more than 2 hours**, against the desired or conventional schedule, causing **sleep-onset insomnia** and **morning sleepiness**; sleep is **normal for age** when the person follows their own clock.",
      duration: "No minimum; episodic 1–<3 months, persistent ≥3 months",
      functioning: "Missed morning school and work, lateness, failed morning exams",
      mood: "Often a past or present mental disorder, especially depressive disorders",
      criteria: [
        ["A", "A persistent or recurrent pattern of sleep disruption mainly from an altered circadian system or a mismatch between the body clock and the required schedule."],
        ["B", "The disruption leads to excessive sleepiness, insomnia or both."],
        ["C", "Clinically significant distress or impairment."],
        ["Type", "Delayed sleep phase: sleep onset and waking delayed, with inability to fall asleep and wake at a desired or conventionally acceptable earlier time."]
      ],
      specifiers: ["Familial", "Overlapping with non-24-hour sleep-wake type", "Episodic: 1 month to less than 3 months", "Persistent: 3 months or longer", "Recurrent: two or more episodes within 1 year"],
      epi: [["Adolescents and young adults", "3.3%–4.6% (Norway, Sweden)"], ["Adults", "0.2%–1.7%"]],
      risk: ["Longer circadian period; evening light hypersensitivity or morning light hyposensitivity.", "CRY1 mutation in strongly familial cases.", "Puberty brings a physiological delay.", "A new early school or work start worsens it."],
      differential: [
        { name: "Normal late schedule", how: "Common in young people; no distress or impairment." },
        { id: "insomnia", how: "Insomnia persists even when the person can choose bed and rise times." },
        { id: "circadian-non24", how: "Sleep times keep drifting rather than staying stably late." },
        { id: "mdd", how: "Depression can disrupt rhythms; often comorbid." },
        { id: "osa", how: "Morning sleepiness with snoring; PSG if suspected." }
      ],
      pearls: ["Normal sleep when allowed to sleep late is the clue.", "Only 57% have a truly delayed DLMO.", "Trying to sleep early can add a secondary insomnia disorder.", "Comorbid with ADHD, autism, OCD and depressive disorders."],
      cmp: { symptoms: "Sleep-onset insomnia; trouble waking; morning sleepiness", exclusions: "Normal late schedules without impairment", prevalence: "3.3%–4.6% of adolescents and young adults", course: "Onset in adolescence; may lessen with age; relapse common" },
      clues: [["Core picture", "A 19-year-old who cannot sleep before 2 a.m. on school nights but sleeps 2:30–10:30 a.m. well on holidays"], ["Duration rule", "No minimum; episodic 1–<3 months, persistent ≥3 months"], ["Code", "G47.21"]],
      updates: upd("**G47.21** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "circadian-advanced", ch: "ch12", sec: "s12-circadian-advanced", pages: "446–447", critPages: "443–444",
      name: "Circadian rhythm sleep-wake disorder, advanced sleep phase type", code: "G47.22",
      codes: [["G47.22", "Circadian rhythm sleep disorder, advanced sleep phase type", NC]],
      aka: ["ASPS", "advanced sleep phase syndrome", "ASPT", "morning lark", "familial advanced sleep phase"],
      essence: "Sleep and wake times **several hours earlier** than desired (usually **more than 2 hours**), with **early-morning insomnia** and **evening sleepiness**; most common in **older adults**, with an autosomal dominant familial form.",
      duration: "No minimum; episodic 1–<3 months, persistent ≥3 months",
      functioning: "Missed evening social activities; chronic sleep loss and daytime sleepiness if kept up late",
      mood: "Early waking can be mistaken for depression",
      criteria: [
        ["A", "A persistent or recurrent pattern of sleep disruption mainly from an altered circadian system or a mismatch between the body clock and the required schedule."],
        ["B", "The disruption leads to excessive sleepiness, insomnia or both."],
        ["C", "Clinically significant distress or impairment."],
        ["Type", "Advanced sleep phase: sleep onset and waking earlier than desired, with inability to stay awake or asleep until the desired or conventional later time."]
      ],
      specifiers: ["Familial", "Episodic: 1 month to less than 3 months", "Persistent: 3 months or longer", "Recurrent: two or more episodes within 1 year"],
      epi: [["Middle-aged US adults", "About 1%"], ["Age", "More common in older adults"]],
      risk: ["Older age.", "Familial form: autosomal dominant (PER2, CKI mutation), earlier onset.", "Too little evening light and too much early-morning light."],
      differential: [
        { id: "mdd", how: "Early waking with other depressive symptoms; check bedtime first." },
        { id: "bipolar-i", how: "Early waking in a mood episode." },
        { id: "insomnia", how: "Insomnia without an early phase of the whole sleep period." },
        { id: "circadian-delayed", how: "The mirror image: late to bed and late to rise." }
      ],
      pearls: ["Ask what time the person went to bed.", "Melatonin and temperature rhythms run 2–4 hours early.", "Hypnotics or alcohol for early waking and stimulants for evening sleepiness risk substance misuse."],
      cmp: { symptoms: "Evening sleepiness; early-morning waking", exclusions: "Depressive or bipolar early waking; medical causes", prevalence: "About 1% of middle-aged adults", course: "Onset late adulthood; familial form earlier and persistent" },
      clues: [["Core picture", "A 70-year-old who nods off at 8 p.m. and wakes at 4 a.m., unable to stay up for family dinners"], ["Duration rule", "No minimum; episodic 1–<3 months, persistent ≥3 months"], ["Code", "G47.22"]],
      updates: upd("**G47.22** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "circadian-irregular", ch: "ch12", sec: "s12-circadian-irregular-non24", pages: "447–448", critPages: "443–444",
      name: "Circadian rhythm sleep-wake disorder, irregular sleep-wake type", code: "G47.23",
      codes: [["G47.23", "Circadian rhythm sleep disorder, irregular sleep wake type", NC]],
      aka: ["irregular sleep-wake rhythm", "ISWRD"],
      essence: "**No discernible circadian rhythm**: sleep is scattered in **at least three bouts** across 24 hours, with insomnia at night and **napping by day**; the longest bout usually falls **between 2 and 6 a.m.** and lasts **under 4 hours**.",
      duration: "No minimum; episodic 1–<3 months, persistent ≥3 months",
      functioning: "No main sleep period; disrupts the caregiver’s sleep too",
      mood: "Varies with the underlying neurodegenerative or neurodevelopmental condition",
      criteria: [
        ["A", "A persistent or recurrent pattern of sleep disruption mainly from an altered circadian system or a mismatch between the body clock and the required schedule."],
        ["B", "The disruption leads to excessive sleepiness, insomnia or both."],
        ["C", "Clinically significant distress or impairment."],
        ["Type", "Irregular sleep-wake: sleep-wake periods are temporally disorganized and vary across the 24 hours."]
      ],
      specifiers: ["Episodic: 1 month to less than 3 months", "Persistent: 3 months or longer", "Recurrent: two or more episodes within 1 year"],
      epi: [["General population", "Unknown"], ["Age", "More common in older adults"]],
      risk: ["Neurodegenerative disorders (major NCD, Alzheimer’s, Parkinson’s, Huntington’s).", "Neurodevelopmental disorders in children; intellectual disability; traumatic brain injury.", "Low light exposure and little structured daytime activity; hospitalization, institutions, isolation."],
      differential: [
        { name: "Voluntarily irregular schedule or poor sleep hygiene", how: "Chosen pattern rather than a lost rhythm." },
        { id: "major-ncd", how: "Often the underlying cause; diagnose both." },
        { id: "delirium", how: "Acute fluctuating attention with sleep-wake reversal." },
        { id: "insomnia", how: "A consolidated main sleep period still exists." }
      ],
      pearls: ["At least three sleep periods in 24 hours.", "Diagnose from a caregiver’s diary or actigraphy.", "Daytime light and structured activity help (treatment outside the DSM)."],
      cmp: { symptoms: "Night insomnia and daytime naps; no main sleep period", exclusions: "Voluntary irregular schedules", prevalence: "Unknown", course: "Persistent" },
      clues: [["Core picture", "A nursing home resident with Alzheimer’s who sleeps in 2–3 hour bouts around the clock"], ["Duration rule", "No minimum; episodic 1–<3 months, persistent ≥3 months"], ["Code", "G47.23"]],
      updates: upd("**G47.23** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "circadian-non24", ch: "ch12", sec: "s12-circadian-irregular-non24", pages: "448–450", critPages: "443–444",
      name: "Circadian rhythm sleep-wake disorder, non-24-hour sleep-wake type", code: "G47.24",
      codes: [["G47.24", "Circadian rhythm sleep disorder, free running type", NC]],
      aka: ["non-24", "free-running disorder", "N24SWD", "hypernychthemeral syndrome"],
      essence: "The body clock **free-runs** instead of locking to the 24-hour day, so sleep and wake times **drift, usually later each day**, giving cycles of **insomnia, daytime sleepiness, or both** with short symptom-free spells; most common in **totally blind** people.",
      duration: "No minimum; episodic 1–<3 months, persistent ≥3 months",
      functioning: "Periodic inability to keep school, work or social schedules",
      mood: "Depressive disorders with circadian disruption can resemble or accompany it",
      criteria: [
        ["A", "A persistent or recurrent pattern of sleep disruption mainly from an altered circadian system or a mismatch between the body clock and the required schedule."],
        ["B", "The disruption leads to excessive sleepiness, insomnia or both."],
        ["C", "Clinically significant distress or impairment."],
        ["Type", "Non-24-hour: sleep-wake cycles not synchronized to the 24-hour environment, with sleep onset and waking drifting, usually later."]
      ],
      specifiers: ["Episodic: 1 month to less than 3 months", "Persistent: 3 months or longer", "Recurrent: two or more episodes within 1 year"],
      epi: [["Blind people (US)", "About 50%"], ["Sighted people", "Rare; general-population rate unclear"]],
      risk: ["Blindness with little or no light perception.", "In sighted people: prior delayed phase, low light exposure, isolation, longer sleep.", "Traumatic brain injury; hospitalized psychiatric or neurological patients who lose social cues."],
      differential: [
        { id: "circadian-delayed", how: "Stably late; can drift for a few days only." },
        { id: "mdd", how: "Depressive disorders with circadian disruption." },
        { id: "insomnia", how: "No cyclical drift with symptom-free intervals." }
      ],
      pearls: ["Think of it in a totally blind patient with periodic insomnia.", "Needs a diary or actigraphy over an extended period.", "Tasimelteon is approved for totally blind adults (outside the DSM)."],
      cmp: { symptoms: "Cycles of insomnia and daytime sleepiness with symptom-free spells", exclusions: "Stable delayed phase; depression", prevalence: "About 50% of blind people", course: "Persistent with periodic remissions and relapses" },
      clues: [["Core picture", "A totally blind 35-year-old who sleeps well for a few weeks, then slides into sleeping by day, then recovers"], ["Duration rule", "No minimum; episodic 1–<3 months, persistent ≥3 months"], ["Code", "G47.24"]],
      updates: upd("**G47.24** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "circadian-shift", ch: "ch12", sec: "s12-circadian-shift", pages: "450–451", critPages: "443–444",
      name: "Circadian rhythm sleep-wake disorder, shift work type", code: "G47.26",
      codes: [["G47.26", "Circadian rhythm sleep disorder, shift work type", NC]],
      aka: ["shift work disorder", "shift work sleep disorder", "SWD"],
      essence: "**Insomnia during the main sleep period and/or sleepiness during work** linked to regularly scheduled work **outside 8 a.m. to 6 p.m.**, especially nights; it usually **resolves on returning to day work**.",
      duration: "No minimum; episodic 1–<3 months, persistent ≥3 months",
      functioning: "Accidents at work and on the drive home; poorer work performance",
      mood: "Linked with depression and substance use; missed nights can trigger mania in bipolar disorder",
      criteria: [
        ["A", "A persistent or recurrent pattern of sleep disruption mainly from an altered circadian system or a mismatch between the body clock and the required schedule."],
        ["B", "The disruption leads to excessive sleepiness, insomnia or both."],
        ["C", "Clinically significant distress or impairment."],
        ["Type", "Shift work: insomnia in the main sleep period and/or excessive sleepiness (including inadvertent sleep) in the main awake period, tied to a shift work schedule (regularly needing unconventional work hours)."]
      ],
      specifiers: ["Episodic: 1 month to less than 3 months", "Persistent: 3 months or longer", "Recurrent: two or more episodes within 1 year"],
      epi: [["US night workers", "Estimated 5%–10%"], ["Night workers in the workforce", "16%–20%"]],
      risk: ["Morning types; need for long sleep (over 8 hours).", "Competing daytime demands such as young children.", "Age over 50; longer time on the schedule."],
      differential: [
        { name: "Normal shift work difficulty", how: "Judged by severity and distress." },
        { id: "osa", how: "Sleepiness persisting after weeks on day shifts suggests apnea; shift workers are more often obese." },
        { id: "narcolepsy", how: "Sleepiness persists on a day schedule." },
        { name: "Jet lag", how: "Travel history; not a DSM-5-TR circadian type." }
      ],
      pearls: ["Usually both sleepiness at work and poor sleep at home.", "Overtime does not count: the schedule must be regular.", "Warn patients with bipolar disorder about night shifts."],
      cmp: { symptoms: "Insomnia in the day sleep period; sleepiness on shift", exclusions: "Symptoms that persist on day work", prevalence: "5%–10% of night workers", course: "Resolves with day work; worsens with years on the schedule" },
      clues: [["Core picture", "A night nurse who sleeps 4 broken hours after shifts and nearly crashes driving home, normal on day rotations"], ["Duration rule", "No minimum; episodic 1–<3 months, persistent ≥3 months"], ["Code", "G47.26"]],
      updates: upd("**G47.26** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "sleepwalking", ch: "ch12", sec: "s12-nrem-criteria", pages: "452–457", critPages: "452",
      name: "Non–rapid eye movement sleep arousal disorder, sleepwalking type", code: "F51.3",
      codes: [["F51.3", "Sleepwalking [somnambulism]", NC]],
      aka: ["sleepwalking", "somnambulism", "NREM parasomnia", "sleep-related eating", "sexsomnia", "sleep sex"],
      essence: "Recurrent **incomplete awakenings**, usually in the **first third** of the night, with **getting out of bed and walking** while asleep: blank stare, poor responsiveness, **very hard to wake**, little or no dream recall and **amnesia** for the episode.",
      duration: "No minimum duration (recurrent episodes)",
      functioning: "Injury, embarrassment, avoiding sleepovers; violence or sexual behavior with medicolegal consequences in adults",
      mood: "Usually no significant mental disorder; in adults linked with major depressive episodes and OCD",
      criteria: [
        ["A", "Recurrent incomplete awakenings, usually in the first third of the main sleep period, with sleepwalking: repeatedly rising from bed and walking about while asleep, with a blank staring face, little response to others’ efforts to communicate, and great difficulty being woken."],
        ["B", "No or little dream imagery recalled (at most one visual scene)."],
        ["C", "Amnesia for the episodes."],
        ["D", "Clinically significant distress or impairment."],
        ["E", "Not due to a substance (drug of abuse or medication)."],
        ["F", "Coexisting mental and medical disorders do not explain the episodes."]
      ],
      specifiers: ["With sleep-related eating", "With sleep-related sexual behavior (sexsomnia)"],
      epi: [["Children with ≥1 episode", "10%–30%; 12-month rate about 5%"], ["Adults, weekly to monthly", "0.5%–0.7%"], ["Adults, past year", "1.5%–3.6%"], ["Lifetime", "About 6.9%–29.2%"], ["Sex", "More in girls in childhood, men in adulthood"]],
      risk: ["Family history in up to 80%; up to 60% if both parents sleepwalked.", "Sedatives, sleep deprivation, schedule disruption, fatigue, stress, fever.", "Obstructive sleep apnea can trigger episodes."],
      differential: [
        { id: "sleep-terrors", how: "Terror with a scream and autonomic arousal rather than walking; both types often coexist." },
        { id: "rbd", how: "From REM, later in the night, easily woken, recalls the dream; usually older." },
        { id: "nightmare", how: "Wakes fully with vivid recall, later in the night." },
        { name: "Sleep-related seizures", how: "Stereotyped, several a night, can arise from wakefulness or naps." },
        { name: "Alcohol-induced blackouts", how: "Complex behavior with amnesia while drinking." },
        { id: "dissociative-amnesia", how: "Fugue arises from wakefulness at night." },
        { id: "substance-induced-sleep", how: "Z-drugs, benzodiazepines and other drugs can cause complex sleep behaviors: parasomnia type." },
        { id: "other-specified-eating", name: "Night eating syndrome (other specified feeding or eating disorder)", how: "Night eating syndrome: fully awake overeating, not an incomplete arousal." }
      ],
      pearls: ["First third of the night, from N3.", "Hard to wake, confused, amnesic.", "New adult onset: look for OSA, nocturnal seizures or a medication.", "50%–65% remit by adolescence.", "Sleep-related eating is more common in women; sexsomnia in men."],
      cmp: { symptoms: "Walking or complex behavior from sleep; blank stare; amnesia", exclusions: "Substances; coexisting disorders that explain it", prevalence: "Adults weekly to monthly 0.5%–0.7%", course: "Childhood onset; mostly remits by adolescence" },
      clues: [["Core picture", "A 9-year-old found an hour after sleep onset urinating in a closet, unresponsive, with no memory next morning"], ["Duration rule", "No minimum duration (recurrent episodes)"], ["Code", "F51.3"]],
      updates: upd("**F51.3** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "sleep-terrors", ch: "ch12", sec: "s12-nrem-criteria", pages: "452–457", critPages: "452",
      name: "Non–rapid eye movement sleep arousal disorder, sleep terror type", code: "F51.4",
      codes: [["F51.4", "Sleep terrors [night terrors]", NC]],
      aka: ["night terrors", "pavor nocturnus", "sleep terror disorder", "NREM parasomnia"],
      essence: "Recurrent **abrupt terror arousals** in the **first third** of the night, usually starting with a **panicky scream**, with intense fear, **autonomic arousal** (mydriasis, tachycardia, rapid breathing, sweating), **poor response to comforting**, little dream recall and **amnesia**.",
      duration: "No minimum duration (recurrent episodes)",
      functioning: "Distress and exhausted, frightened household members; injury while trying to escape",
      mood: "People with sleep terrors may score higher on depression and anxiety scales",
      criteria: [
        ["A", "Recurrent incomplete awakenings, usually in the first third of the main sleep period, with sleep terrors: abrupt arousals in terror, usually beginning with a panicky scream, with intense fear and autonomic signs (mydriasis, tachycardia, rapid breathing, sweating), and little response to others’ efforts to comfort."],
        ["B", "No or little dream imagery recalled (at most one visual scene)."],
        ["C", "Amnesia for the episodes."],
        ["D", "Clinically significant distress or impairment."],
        ["E", "Not due to a substance (drug of abuse or medication)."],
        ["F", "Coexisting mental and medical disorders do not explain the episodes."]
      ],
      specifiers: ["No specifiers for this type (sleep-related eating and sexsomnia belong to sleepwalking type)"],
      epi: [["Toddlers, sleep terror episodes", "34.4%–36.9% at 18 months; 19.7% at 30 months"], ["Adults, episodes", "2.2%"], ["Ages 10–18", "0.6%"], ["Disorder prevalence", "Unknown"], ["Sex", "More in boys; equal in adults"]],
      risk: ["Sleep terrors up to 10-fold in first-degree relatives.", "Sleep deprivation, fever, stress, sedatives."],
      differential: [
        { id: "nightmare", how: "Later in the night, from REM, wakes quickly and fully with vivid recall." },
        { id: "sleepwalking", how: "Walking rather than terror; the two often coexist." },
        { id: "panic-disorder", how: "Nocturnal panic: rapid, complete awakening without confusion or amnesia." },
        { name: "Sleep-related seizures", how: "Stereotyped; can arise from wakefulness; EEG evolution." },
        { id: "rbd", how: "Dream enactment from REM, later in the night, with recall." }
      ],
      pearls: ["Inconsolable, then amnesic.", "Heart rate can double or triple at onset.", "Usually one episode a night, early.", "Fragmentary images, no storylike dream."],
      cmp: { symptoms: "Screaming terror arousal with autonomic surge; amnesia", exclusions: "Substances; coexisting disorders that explain it", prevalence: "Episodes very common in toddlers; adult episodes 2.2%", course: "Childhood; most remit by adolescence" },
      clues: [["Core picture", "A 5-year-old who sits up screaming and sweating an hour after sleep, inconsolable, and remembers nothing"], ["Duration rule", "No minimum duration (recurrent episodes)"], ["Code", "F51.4"]],
      updates: upd("**F51.4** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "nightmare", ch: "ch12", sec: "s12-nightmare", pages: "457–461", critPages: "457",
      name: "Nightmare disorder", code: "F51.5",
      codes: [["F51.5", "Nightmare disorder", NC]],
      aka: ["nightmares", "dream anxiety disorder", "bad dreams", "REM parasomnia"],
      essence: "Repeated **long, intensely dysphoric, well-remembered dreams** about threats to survival, security or physical integrity, usually in the **second half** of the night, with **rapid, full orientation** on waking, causing distress or impairment.",
      duration: "No minimum; acute ≤1 month, subacute, persistent ≥6 months",
      functioning: "Avoidance of sleep, broken sleep, daytime fatigue and distress; impairs school and work",
      mood: "Frequent nightmares substantially raise the risk of suicidal thoughts and behavior; often with PTSD, depression and insomnia",
      criteria: [
        ["A", "Repeated long, extremely dysphoric and well-remembered dreams, usually about efforts to avoid threats to survival, security or physical integrity, generally in the second half of the main sleep period."],
        ["B", "On awakening the person rapidly becomes oriented and alert."],
        ["C", "Clinically significant distress or impairment."],
        ["D", "Not due to a substance (drug of abuse or medication)."],
        ["E", "Any coexisting mental or medical conditions fail to adequately account for the dysphoric dreams."]
      ],
      specifiers: ["During sleep onset", "With mental disorder (substance use disorders count)", "With medical condition", "With another sleep disorder (code each after F51.5)", "Acute: 1 month or less", "Subacute: more than 1 month but less than 6 months", "Persistent: 6 months or more", "Mild: less than one a week on average", "Moderate: one or more a week but not nightly", "Severe: nightly"],
      epi: [["Children", "1%–5%; ages 5–15: 5.2%"], ["Adults, monthly", "About 6%"], ["Adults, weekly", "2%–6%"], ["Adults, frequent", "1%–5%"], ["Sex", "Adult women report more"]],
      risk: ["Psychosocial stressors, sleep loss, irregular schedules.", "Middle age: low income, mood problems, insomnia, sleep-disordered breathing, antidepressants, heavy alcohol.", "More frequent past adverse events, not necessarily trauma; trauma-related nightmares belong with PTSD.", "Protective: parental soothing after nightmares."],
      differential: [
        { id: "sleep-terrors", how: "First third, N3, inconsolable and amnesic." },
        { id: "rbd", how: "Complex movement and vocalization acting out the dream; older men." },
        { id: "ptsd", how: "Trauma nightmares are part of PTSD; add nightmare disorder only when they need separate attention." },
        { id: "acute-stress", how: "Same rule as PTSD." },
        { id: "narcolepsy", how: "Nightmares common but excessive sleepiness defines it." },
        { id: "panic-disorder", how: "Nocturnal panic without nightmare recall." },
        { id: "substance-induced-sleep", how: "Beta-blockers, dopaminergic drugs, antidepressants, melatonin; REM rebound after stopping REM suppressants or alcohol." }
      ],
      pearls: ["Second half of the night, from REM.", "Wakes fully and remembers.", "Movement is not typical because of REM atonia: real dream enactment means RBD.", "Record as F51.5 nightmare disorder, with PTSD, then the PTSD code.", "Ask about suicide in frequent nightmares."],
      cmp: { symptoms: "Vivid threatening dreams; quick, full waking with recall", exclusions: "Substances; coexisting disorders that adequately explain them", prevalence: "Adults weekly 2%–6%", course: "Begins 3–6 years; peaks late adolescence or early adulthood" },
      clues: [["Core picture", "A 26-year-old woman with vivid chase dreams most nights for 8 months, waking alert and afraid to sleep again"], ["Duration rule", "No minimum; acute ≤1 month, subacute, persistent ≥6 months"], ["Code", "F51.5"]],
      updates: upd("**F51.5** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "rbd", ch: "ch12", sec: "s12-rbd", pages: "461–464", critPages: "461",
      name: "Rapid eye movement sleep behavior disorder", code: "G47.52",
      codes: [["G47.52", "REM sleep behavior disorder", NC]],
      aka: ["RBD", "REM sleep behavior disorder", "dream enactment behavior", "REM sleep without atonia", "iRBD"],
      essence: "Repeated arousals with **vocalization or complex movements** arising from **REM sleep** (later in the night), waking **fully alert**, confirmed by **REM sleep without atonia on PSG** or a suggestive history with an **established synucleinopathy**.",
      duration: "No minimum duration (recurrent episodes)",
      functioning: "Injury in about 55% (12% serious: fractures, subdural hematoma); injury to bed partners; separate bedrooms",
      mood: "Higher in psychiatric patients, perhaps from medications",
      criteria: [
        ["A", "Repeated episodes of arousal during sleep with vocalization and/or complex motor behaviors."],
        ["B", "The behaviors arise in REM sleep: usually more than 90 minutes after sleep onset, more often later in the night, uncommon in daytime naps."],
        ["C", "On waking, the person is completely awake, alert and not confused or disoriented."],
        ["D", "Either REM sleep without atonia on polysomnography, or a suggestive history plus an established synucleinopathy (e.g., Parkinson’s disease, multiple system atrophy)."],
        ["E", "Clinically significant distress or impairment (may include injury to self or bed partner)."],
        ["F", "Not due to a substance or another medical condition."],
        ["G", "Coexisting mental and medical disorders do not explain the episodes."]
      ],
      specifiers: ["None"],
      epi: [["Middle-aged and older (Switzerland)", "About 1%"], ["Elderly (South Korea)", "About 2%"], ["Sex", "More in men over 50; women younger at onset"], ["In narcolepsy", "About 30%"]],
      risk: ["Older age and male sex.", "Synucleinopathies: Parkinson’s disease, NCD with Lewy bodies, multiple system atrophy.", "Antidepressants (TCAs, SSRIs, SNRIs) can unmask it.", "Young patients: narcolepsy, medications, brainstem lesions, autoimmune encephalopathy."],
      differential: [
        { id: "sleepwalking", how: "NREM arousals: younger, early night, confused, poor recall, normal REM atonia." },
        { id: "substance-induced-sleep", how: "Onset with TCAs, SSRIs or SNRIs: parasomnia type." },
        { id: "osa", how: "Shouting or punching at the end of apneas; resolves with CPAP; no REM without atonia." },
        { name: "Nocturnal seizures", how: "Stereotyped; seizure EEG; REM atonia usually preserved." },
        { name: "Asymptomatic REM without atonia", how: "A PSG finding without behavior is not RBD." },
        { id: "nightmare", how: "Frightening dreams without complex movement." },
        { id: "ncd-lewy", how: "RBD is a suggestive diagnostic feature of NCD with Lewy bodies and often precedes it by years." }
      ],
      pearls: ["Idiopathic RBD: about 75% develop a neurodegenerative disease within 10–15 years (6%–7% a year).", "Arm (biceps) EMG is most specific.", "Without PSG or a synucleinopathy: other specified sleep-wake disorder (G47.8).", "Eyes usually closed; dream content matches the behavior."],
      cmp: { symptoms: "Dream enactment late in the night; alert on waking; recalls dream", exclusions: "Substances (antidepressants); medical causes", prevalence: "About 1%–2% of older adults", course: "Progressive; high conversion to synucleinopathy" },
      clues: [["Core picture", "A 63-year-old man who punches and shouts in his sleep late at night, then describes fighting off an attacker"], ["Duration rule", "No minimum duration (recurrent episodes)"], ["Code", "G47.52"]],
      updates: upd("**G47.52** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "rls", ch: "ch12", sec: "s12-rls", pages: "464–468", critPages: "464–465",
      name: "Restless legs syndrome", code: "G25.81",
      codes: [["G25.81", "Restless legs syndrome", NC]],
      aka: ["RLS", "Willis-Ekbom disease", "WED", "restless legs"],
      essence: "An **urge to move the legs**, usually with unpleasant sensations, that begins or worsens at **rest**, is relieved by **movement** and is **worse in the evening or night**, at least **3 times a week for 3 months**, with distress or impairment and **no mimic** (cramps, positional discomfort, akathisia).",
      duration: "≥3 times a week for ≥3 months",
      functioning: "Delayed sleep onset, fragmented sleep, daytime sleepiness; trouble with sitting activities such as travel and meetings",
      mood: "Linked with depression, GAD, panic disorder and PTSD; treating RLS can ease depressive symptoms",
      criteria: [
        ["A", "An urge to move the legs, usually with or in response to uncomfortable leg sensations, with all of: (1) starts or worsens during rest or inactivity; (2) partly or fully relieved by movement; (3) worse in the evening or night than by day, or occurs only then."],
        ["B", "At least 3 times a week for at least 3 months."],
        ["C", "Significant distress or impairment (social, occupational, educational, academic, behavioral or other)."],
        ["D", "Not due to a mental disorder or a medical mimic (such as arthritis, swollen legs, limb ischemia or cramps), and not better accounted for by behavior such as an uncomfortable position or habitual foot tapping."],
        ["E", "Not due to a drug of abuse or medication (e.g., akathisia)."]
      ],
      specifiers: ["None"],
      epi: [["≥3 times a week with moderate or severe distress", "1.6%"], ["Severe enough to impair", "2%–3%"], ["Sex", "About 2× in women (parity)"], ["Pregnancy", "2–3× the general rate"], ["Asian populations", "Lower"]],
      risk: ["Family history; MEIS1 variant nearly doubles risk.", "Iron deficiency, pregnancy, chronic renal failure.", "Serotonergic antidepressants can induce or worsen it.", "Older age (rises to about 60)."],
      differential: [
        { name: "Neuroleptic-induced akathisia", how: "Tied to the drug; whole-body restlessness; less evening worsening and fewer periodic limb movements." },
        { name: "Leg cramps", how: "Painful contraction; no urge to move." },
        { name: "Positional discomfort", how: "Relieved by one change of position." },
        { name: "Arthritis, neuropathy, venous insufficiency", how: "Joint or sensory findings; no clear evening pattern." },
        { id: "insomnia", how: "Sleep-onset difficulty without leg urge." },
        { id: "gad", how: "Anxiety-induced restlessness not focused on the legs or evening." }
      ],
      pearls: ["URGE: Urge, Rest, Getting up relieves, Evening (app mnemonic).", "Periodic leg movements in sleep in up to 90%.", "Children must describe symptoms in their own words.", "Check iron (treatment outside the DSM).", "ICSD-3 has no frequency or duration requirement."],
      cmp: { symptoms: "Leg urge at rest, relieved by moving, worse in the evening", exclusions: "Medical and behavioral mimics; medications (akathisia)", prevalence: "1.6% (moderate to severe, ≥3 times a week)", course: "Onset second or third decade; slow if early or familial, rapid if late" },
      clues: [["Core picture", "A 45-year-old who must get up and walk every evening because of crawling leg sensations that settle only with movement"], ["Duration rule", "≥3 nights a week for ≥3 months"], ["Code", "G25.81"]],
      updates: upd("**G25.81** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "substance-induced-sleep", ch: "ch12", sec: "s12-substance", pages: "468–474", critPages: "468–469",
      name: "Substance/medication-induced sleep disorder", code: "F10–F19 (by substance)",
      codes: [
        ["F10.182 / F10.282 / F10.982", "Alcohol-induced sleep disorder: mild / moderate or severe / no alcohol use disorder", NC],
        ["F15.982", "Caffeine-induced sleep disorder (no use disorder code exists)", NC],
        ["F12.188 / F12.288 / F12.988", "Cannabis-induced sleep disorder: mild / moderate or severe / no use disorder", NC],
        ["F11.182 / F11.282 / F11.982", "Opioid-induced sleep disorder: mild / moderate or severe / no use disorder", NC],
        ["F13.182 / F13.282 / F13.982", "Sedative-, hypnotic- or anxiolytic-induced sleep disorder: mild / moderate or severe / no use disorder", NC],
        ["F15.182 / F15.282 / F15.982", "Amphetamine-type substance (or other stimulant)-induced sleep disorder: mild / moderate or severe / no use disorder", NC],
        ["F14.182 / F14.282 / F14.982", "Cocaine-induced sleep disorder: mild / moderate or severe / no use disorder", NC],
        ["F17.208", "Tobacco-induced sleep disorder (with moderate or severe tobacco use disorder only)", NC],
        ["F19.182 / F19.282 / F19.982", "Other (or unknown) substance-induced sleep disorder: mild / moderate or severe / no use disorder", NC]
      ],
      aka: ["drug-induced insomnia", "medication-induced sleep disorder", "rebound insomnia", "REM rebound", "Z-drug sleepwalking", "caffeine-induced insomnia"],
      essence: "A **prominent, severe sleep disturbance** that began **during or soon after intoxication, withdrawal or medication exposure**, from a substance **able to cause it**, not better explained by an independent sleep disorder and not only during delirium; diagnose it **instead of** intoxication or withdrawal only when the sleep problem predominates and needs **independent attention**.",
      duration: "Onset during or soon after use or withdrawal; persistence about 1 month after stopping suggests an independent disorder",
      functioning: "Relapse risk: REM rebound in alcohol withdrawal predicts return to drinking; accidents from daytime sleepiness",
      mood: "Mood changes depend on the substance; self-medication with alcohol or sedatives is common",
      criteria: [
        ["A", "A prominent and severe disturbance of sleep."],
        ["B", "Evidence from history, examination or laboratory findings that the symptoms started during or shortly after intoxication or withdrawal, or after starting or stopping a medication, and that the substance is capable of producing them."],
        ["C", "Not better explained by an independent sleep disorder (e.g., symptoms preceded use, persist for a substantial period such as about 1 month after acute withdrawal or severe intoxication, or there are prior non-substance episodes)."],
        ["D", "Not exclusively during a delirium."],
        ["E", "Clinically significant distress or impairment."]
      ],
      specifiers: ["Insomnia type", "Daytime sleepiness type", "Parasomnia type", "Mixed type", "Onset during intoxication", "Onset during withdrawal", "Onset after medication use", "Code combines substance and use disorder severity: 4th character 1 (mild), 2 (moderate or severe), 9 (no use disorder)"],
      epi: [["Prevalence", "Not given in DSM-5-TR"], ["Older adults", "More medications; may be blamed on aging"], ["Adolescents", "Think of cannabis and ecstasy"]],
      risk: ["Heavy or late-day caffeine.", "Alcohol or sedatives used to self-medicate insomnia.", "Short-acting hypnotics (rebound insomnia); Z-drugs at high doses or combined (complex sleep behaviors).", "Long-acting opioids (central apnea); stimulant withdrawal (hypersomnia)."],
      differential: [
        { id: "alcohol-withdrawal", how: "Ordinary sleep trouble in withdrawal belongs to the withdrawal diagnosis." },
        { id: "sedative-withdrawal", how: "Same rule: use the sleep diagnosis only if sleep predominates." },
        { id: "stimulant-withdrawal", how: "Hypersomnia is part of withdrawal unless it predominates." },
        { id: "insomnia", how: "Symptoms before the substance or persisting about 1 month after stopping point to an independent disorder." },
        { id: "rbd", how: "Antidepressant-associated RBD is coded here, though the drug may unmask a predisposition." },
        { id: "delirium", how: "Sleep disturbance only during a delirium is not diagnosed separately." },
        { id: "unspecified-sleep-wake", how: "When it is unclear whether a drug, a medical condition or an independent disorder is responsible." }
      ],
      pearls: ["Cannabis codes end in 88, not 82.", "Caffeine has only F15.982; tobacco only F17.208.", "Do not code the use disorder separately: one combined code.", "A prescribed drug with no class (e.g., fluoxetine) uses F19.982 with the drug named.", "Onset can come up to 4 weeks after stopping a drug with protracted withdrawal."],
      cmp: { symptoms: "Insomnia, daytime sleepiness, parasomnia or mixed, tied to a substance", exclusions: "Independent sleep disorder; delirium only", prevalence: "Not given", course: "Follows the substance; alcohol-related disruption can last months to years" },
      clues: [["Core picture", "A 50-year-old in lorazepam withdrawal whose severe insomnia dominates the picture"], ["Duration rule", "Onset during or soon after use or withdrawal"], ["Code", "e.g., F13.282 (severe sedative use disorder, insomnia type)"]],
      updates: upd("The induced sleep disorder codes (**F10.182–F19.982**, **F15.982**, **F17.208**) are unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "other-specified-insomnia", ch: "ch12", sec: "s12-residual", pages: "475", critPages: "475",
      name: "Other specified insomnia disorder", code: "G47.09",
      codes: [["G47.09", "Other insomnia", NC]],
      aka: ["short-term insomnia disorder", "acute insomnia", "adjustment insomnia", "nonrestorative sleep"],
      essence: "An insomnia picture with distress or impairment that falls short of full criteria, **with the reason recorded**: e.g., **short-term insomnia disorder** (under 3 months) or insomnia **restricted to nonrestorative sleep**.",
      duration: "Varies; short-term insomnia lasts less than 3 months",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Symptoms typical of insomnia disorder with distress or impairment predominate, without meeting full criteria for insomnia disorder or any sleep-wake disorder; the clinician records the specific reason (e.g., short-term insomnia disorder; restricted to nonrestorative sleep)."]],
      specifiers: ["Record the reason after the name", "Short-term insomnia disorder: duration less than 3 months", "Restricted to nonrestorative sleep: no onset or maintenance problem"],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["Recent stressors or schedule changes (situational insomnia)."],
      differential: [
        { id: "insomnia", how: "Full criteria, including 3 nights a week for 3 months." },
        { id: "unspecified-insomnia", how: "When no reason is recorded." },
        { id: "other-specified-sleep-wake", how: "The insomnia text (p. 411) places isolated nonrestorative sleep here instead." }
      ],
      pearls: ["A 6-week insomnia with all other criteria = G47.09 (short-term).", "Corresponds to ICSD-3 short-term insomnia disorder.", "The manual is inconsistent about isolated nonrestorative sleep (pp. 411, 475)."],
      cmp: { symptoms: "Subthreshold or short insomnia", exclusions: "Full insomnia disorder or another sleep-wake disorder", prevalence: "Not given", course: "Often resolves when the stressor passes" },
      clues: [["Core picture", "A 30-year-old with nightly trouble falling asleep for 6 weeks since a job loss, with daytime impairment"], ["Code", "G47.09"]],
      updates: upd("**G47.09** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "unspecified-insomnia", ch: "ch12", sec: "s12-residual", pages: "475", critPages: "475",
      name: "Unspecified insomnia disorder", code: "G47.00",
      codes: [["G47.00", "Insomnia, unspecified", NC]],
      aka: [],
      essence: "An insomnia picture with distress or impairment, not meeting full criteria, when the clinician **does not state the reason** or there is **not enough information**.",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Insomnia symptoms with distress or impairment predominate without meeting full criteria; the clinician chooses not to specify why, including when information is insufficient."]],
      specifiers: ["None"],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [
        { id: "other-specified-insomnia", how: "Use when the reason can be stated." },
        { id: "insomnia", how: "Full criteria met." }
      ],
      pearls: ["Insomnia residuals end in 0: G47.09 and G47.00.", "Revise once the picture is clear."],
      cmp: { symptoms: "Insomnia; insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "G47.00"]],
      updates: upd("**G47.00** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "other-specified-hypersomnolence", ch: "ch12", sec: "s12-residual", pages: "475", critPages: "475",
      name: "Other specified hypersomnolence disorder", code: "G47.19",
      codes: [["G47.19", "Other hypersomnia", NC]],
      aka: ["Kleine-Levin syndrome", "recurrent hypersomnia", "brief-duration hypersomnolence"],
      essence: "A hypersomnolence picture with distress or impairment that falls short of full criteria, **with the reason recorded**, e.g., **brief-duration hypersomnolence** as in **Kleine-Levin syndrome**.",
      duration: "Varies; brief-duration episodes",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Symptoms typical of hypersomnolence disorder with distress or impairment predominate, without meeting full criteria for it or any sleep-wake disorder; the clinician names why, for example brief-duration hypersomnolence such as Kleine-Levin syndrome."]],
      specifiers: ["Record the reason after the name"],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["As for hypersomnolence disorder."],
      differential: [
        { id: "hypersomnolence", how: "Sleepiness at least 3 times a week for 3 months." },
        { id: "unspecified-hypersomnolence", how: "When no reason is recorded." },
        { id: "narcolepsy", how: "Cataplexy, low hypocretin or a positive sleep study." }
      ],
      pearls: ["Kleine-Levin syndrome is the textbook example.", "ICSD-3 lists Kleine-Levin as its own central disorder of hypersomnolence."],
      cmp: { symptoms: "Subthreshold or episodic hypersomnolence", exclusions: "Full hypersomnolence disorder or another sleep-wake disorder", prevalence: "Not given", course: "Varies" },
      clues: [["Core picture", "A 16-year-old with recurring week-long bouts of sleeping 18 hours a day, normal between bouts"], ["Code", "G47.19"]],
      updates: upd("**G47.19** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "unspecified-hypersomnolence", ch: "ch12", sec: "s12-residual", pages: "476", critPages: "476",
      name: "Unspecified hypersomnolence disorder", code: "G47.10",
      codes: [["G47.10", "Hypersomnia, unspecified", NC]],
      aka: [],
      essence: "A hypersomnolence picture with distress or impairment, not meeting full criteria, when the clinician **does not state the reason** or there is **not enough information**.",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Hypersomnolence symptoms with distress or impairment predominate without meeting full criteria; the clinician chooses not to specify why, including when information is insufficient."]],
      specifiers: ["None"],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "other-specified-hypersomnolence", how: "Use when the reason can be stated." }],
      pearls: ["Hypersomnolence residuals sit in G47.1: .19 other specified, .10 unspecified."],
      cmp: { symptoms: "Sleepiness; insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "G47.10"]],
      updates: upd("**G47.10** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "other-specified-sleep-wake", ch: "ch12", sec: "s12-residual", pages: "476", critPages: "476",
      name: "Other specified sleep-wake disorder", code: "G47.8",
      codes: [["G47.8", "Other sleep disorders", NC]],
      aka: ["repeated REM-sleep arousals without PSG or synucleinopathy"],
      essence: "A sleep-wake picture with distress or impairment that fits no specific disorder and **does not qualify for the insomnia or hypersomnolence residuals**, with the **reason recorded**, e.g., **repeated REM-sleep arousals without PSG or a known synucleinopathy**.",
      duration: "Varies",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Symptoms typical of a sleep-wake disorder with distress or impairment predominate, without meeting full criteria for any disorder in the class and not qualifying for other specified insomnia or hypersomnolence disorder; record the specific reason (e.g., repeated arousals in REM sleep without polysomnography or a history of a synucleinopathy)."]],
      specifiers: ["Record the reason after the name"],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["Varies with the presentation."],
      differential: [
        { id: "rbd", how: "Needs REM sleep without atonia on PSG or an established synucleinopathy." },
        { id: "other-specified-insomnia", how: "Use the narrower residual when the picture is insomnia." },
        { id: "other-specified-hypersomnolence", how: "Use the narrower residual when the picture is sleepiness." },
        { id: "unspecified-sleep-wake", how: "Reason not recorded." }
      ],
      pearls: ["Dream enactment without a sleep study or synucleinopathy goes here.", "The insomnia text (p. 411) also sends isolated nonrestorative sleep here, conflicting with p. 475."],
      cmp: { symptoms: "Subthreshold or atypical sleep-wake disturbance", exclusions: "Specific disorders; insomnia and hypersomnolence residuals", prevalence: "Not given", course: "Varies" },
      clues: [["Core picture", "A 66-year-old who acts out dreams, with no PSG available and no Parkinson’s disease"], ["Code", "G47.8"]],
      updates: upd("**G47.8** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "unspecified-sleep-wake", ch: "ch12", sec: "s12-residual", pages: "476", critPages: "476",
      name: "Unspecified sleep-wake disorder", code: "G47.9",
      codes: [["G47.9", "Sleep disorder, unspecified", NC]],
      aka: [],
      essence: "A sleep-wake picture with distress or impairment that fits no specific disorder and does not qualify for the unspecified insomnia or hypersomnolence categories, when the **reason is not stated** or information is **insufficient**.",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Sleep-wake symptoms with distress or impairment predominate without meeting full criteria for any disorder in the class or the unspecified insomnia or hypersomnolence categories; the clinician chooses not to specify why, including when information is insufficient."]],
      specifiers: ["None"],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [
        { id: "other-specified-sleep-wake", how: "Use when the reason can be stated." },
        { id: "substance-induced-sleep", how: "Use when a substance is clearly the cause." }
      ],
      pearls: ["Use when it is unclear whether a drug, a medical condition or an independent disorder causes the sleep problem (p. 474).", "General residuals: G47.8 and G47.9."],
      cmp: { symptoms: "Sleep-wake disturbance; insufficient information", exclusions: "Specific diagnoses; insomnia and hypersomnolence residuals", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "G47.9"]],
      updates: upd("**G47.9** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Insomnia disorder vs delayed sleep phase type", ids: ["insomnia", "circadian-delayed"] },
    { label: "Hypersomnolence disorder vs narcolepsy", ids: ["hypersomnolence", "narcolepsy"] },
    { label: "Obstructive vs central sleep apnea vs hypoventilation", ids: ["osa", "csa", "sleep-hypoventilation"] },
    { label: "Night behaviors: sleepwalking, sleep terrors, nightmares, RBD", ids: ["sleepwalking", "sleep-terrors", "nightmare", "rbd"] },
    { label: "Delayed vs advanced sleep phase type", ids: ["circadian-delayed", "circadian-advanced"] },
    { label: "Non-24-hour vs delayed sleep phase type", ids: ["circadian-non24", "circadian-delayed"] },
    { label: "Restless legs syndrome vs insomnia disorder", ids: ["rls", "insomnia"] },
    { label: "Insomnia disorder vs other specified insomnia disorder", ids: ["insomnia", "other-specified-insomnia"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 12: the 3-month sleep rules", ticks: [[0, "0"], [33.3, "1 mo"], [66.7, "2 mo"], [100, "3 mo"]], rows: [
      { label: "Insomnia disorder", dx: "insomnia", from: 0, to: 100, color: "guide", span: "≥3 nights/week for ≥3 months" },
      { label: "Hypersomnolence disorder", dx: "hypersomnolence", from: 0, to: 100, color: "case", span: "≥3 times/week for ≥3 months" },
      { label: "Narcolepsy", dx: "narcolepsy", from: 0, to: 100, color: "mech", span: "≥3 times/week over past 3 months" },
      { label: "Restless legs syndrome", dx: "rls", from: 0, to: 100, color: "drug", span: "≥3 times/week for ≥3 months" },
      { label: "Short-term insomnia", dx: "other-specified-insomnia", from: 0, to: 97, color: "hy", span: "Under 3 months: G47.09" }
    ], note: "OSA, central apnea, hypoventilation, the circadian types and the parasomnias have no minimum duration in their criteria." },
    { type: "ladder", title: "Chapter 12: duration specifiers", ticks: [[0, "0"], [12.5, "1 mo"], [37.5, "3 mo"], [75, "6 mo"], [100, "8 mo"]], rows: [
      { label: "Hypersomnolence: acute", dx: "hypersomnolence", from: 0, to: 12.5, color: "guide", span: "<1 month" },
      { label: "Hypersomnolence: subacute", dx: "hypersomnolence", from: 12.5, to: 37.5, color: "guide", span: "1–3 months" },
      { label: "Hypersomnolence: persistent", dx: "hypersomnolence", from: 37.5, to: 100, color: "guide", span: ">3 months" },
      { label: "Nightmare: acute", dx: "nightmare", from: 0, to: 12.5, color: "case", span: "≤1 month" },
      { label: "Nightmare: subacute", dx: "nightmare", from: 12.5, to: 75, color: "case", span: ">1 month, <6 months" },
      { label: "Nightmare: persistent", dx: "nightmare", from: 75, to: 100, color: "case", span: "≥6 months" },
      { label: "Circadian: episodic", dx: "circadian-delayed", from: 12.5, to: 37.5, color: "clin", span: "1 to <3 months" },
      { label: "Circadian: persistent", dx: "circadian-delayed", from: 37.5, to: 100, color: "clin", span: "≥3 months (recurrent: ≥2 in 1 year)" }
    ], note: "Insomnia uses the circadian set (episodic, persistent, recurrent), but Criterion D still requires 3 months." }
  ]);
})();
