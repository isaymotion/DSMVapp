/*
 * Diagnostic helpers for Chapter 12 (Sleep-Wake Disorders), DSM-5-TR pp. 407–476.
 * "sleep": from the main complaint (cannot sleep, too sleepy, wrong timing, breathing, legs) to a sleep-wake diagnosis with its code.
 * "parasomnia": from a nighttime behavior or experience to an NREM arousal disorder, nightmare disorder, REM sleep behavior
 * disorder or a look-alike.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "sleep",
    chapter: "ch12",
    title: "Which sleep-wake disorder?",
    summary: "Start from the main complaint (trouble sleeping, daytime sleepiness, sleeping at the wrong time, breathing problems in sleep, or restless legs), then check substances, opportunity, timing and sleep study results to reach a diagnosis with its code.",
    caution: "A teaching aid built from DSM-5-TR pp. 407–476. Many sleep diagnoses need polysomnography or an MSLT: refer to sleep medicine. Codes are unchanged through October 2026; use the code set in force on the date of service.",
    start: "what",
    nodes: {
      what: {
        q: "What is the main complaint?",
        help: "Pick the complaint that dominates. Unusual behaviors or experiences during sleep (walking, screaming, acting out dreams, nightmares) have their own helper.",
        options: [
          { label: "Trouble falling or staying asleep, or waking too early", to: "isub", note: "Insomnia complaint." },
          { label: "Too sleepy or sleeping too much", to: "ssub", note: "Sleepiness complaint." },
          { label: "Sleeping at the wrong times", to: "circ", note: "Timing complaint." },
          { label: "Snoring, gasping or breathing pauses in sleep", to: "psg", note: "Breathing complaint." },
          { label: "An urge to move the legs at rest", to: "legs", note: "Leg complaint." },
          { label: "Strange behaviors, frightening dreams or screaming at night", to: "r:para", note: "Parasomnia." }
        ]
      },
      isub: {
        q: "Did the sleep problem begin with a substance or medication, or with its withdrawal, and can that substance cause it?",
        help: "Caffeine late in the day, stimulants, alcohol (especially withdrawal), sedative withdrawal, bupropion, steroids, SSRIs. Independent insomnia is suggested if it preceded use or persists about a month after withdrawal ends.",
        options: [
          { label: "Yes", to: "r:subst", note: "Possible induced disorder." },
          { label: "No", to: "iopp", note: "Criterion G met." }
        ]
      },
      iopp: {
        q: "Does the person have adequate opportunity and circumstances to sleep?",
        help: "Night calls, a newborn, emergencies or long work hours that leave too little time in bed are sleep deprivation, not insomnia.",
        options: [
          { label: "Yes, enough time in bed", to: "itime", note: "Criterion E met." },
          { label: "No: circumstances keep them awake", to: "r:deprived", note: "Sleep deprivation." }
        ]
      },
      itime: {
        q: "When allowed to sleep on their own schedule (weekends, holidays), is sleep normal?",
        help: "A teenager who cannot sleep before 2 a.m. but sleeps soundly from 2 to 10 a.m. has a timing problem.",
        options: [
          { label: "Yes: the problem is timing", to: "circ", note: "Think circadian." },
          { label: "No: poor sleep whatever the schedule", to: "ilegs", note: "Continue." }
        ]
      },
      ilegs: {
        q: "Is there an urge to move the legs at rest in the evening, relieved by moving?",
        help: "Restless legs syndrome delays sleep and fragments it.",
        options: [
          { label: "Yes", to: "legs", note: "Think RLS." },
          { label: "No", to: "isnore", note: "Continue." }
        ]
      },
      isnore: {
        q: "Are there loud snoring, witnessed pauses, gasping or morning headaches?",
        help: "Up to half of people with sleep apnea report insomnia, and about 1 in 7 people with insomnia disorder have moderate to severe OSA.",
        options: [
          { label: "Yes", to: "psg", note: "Get a sleep study." },
          { label: "No", to: "iexplain", note: "Continue." }
        ]
      },
      iexplain: {
        q: "Is the insomnia just one symptom of another disorder (e.g., a depressive episode, mania, pain), not needing clinical attention of its own?",
        help: "Insomnia disorder can coexist with other disorders; you do not have to decide which caused which. Give it only when it is severe enough to warrant independent attention.",
        options: [
          { label: "No: it warrants its own attention", to: "ifreq", note: "Criterion H met." },
          { label: "Yes: part of another disorder", to: "r:symptom", note: "No separate diagnosis." }
        ]
      },
      ifreq: {
        q: "How often and for how long, and does it cause distress or impairment?",
        help: "Insomnia disorder needs at least 3 nights a week for at least 3 months, with distress or impairment.",
        options: [
          { label: "≥3 nights a week for ≥3 months, with distress or impairment", to: "r:insomnia", note: "Criteria B–D met." },
          { label: "Meets everything but has lasted under 3 months", to: "r:shortterm", note: "Short-term." },
          { label: "Only unrefreshing sleep, without trouble falling or staying asleep", to: "r:nonrest", note: "Isolated nonrestorative sleep." },
          { label: "Distressing, but not enough information to say more", to: "r:unspec-ins", note: "Unspecified." }
        ]
      },
      ssub: {
        q: "Did the sleepiness begin with a substance or medication, or with withdrawal from one?",
        help: "Stimulant or cocaine withdrawal, sedatives, opioids, antihistamines, antipsychotics, heavy caffeine users stopping caffeine.",
        options: [
          { label: "Yes", to: "r:subst", note: "Possible induced disorder." },
          { label: "No", to: "senough", note: "Continue." }
        ]
      },
      senough: {
        q: "Does the person regularly get at least 7 hours of sleep?",
        help: "Sleeping less than 7 hours on work nights and catching up on free days points to insufficient sleep; a 10–14 day trial of sleep extension clarifies.",
        options: [
          { label: "Yes, at least 7 hours", to: "scata", note: "Continue." },
          { label: "No: short nights, catch-up on weekends", to: "r:insufficient", note: "Insufficient sleep." }
        ]
      },
      scata: {
        q: "Are there episodes of sudden, brief, bilateral muscle weakness with preserved awareness, triggered by laughter or joking?",
        help: "Cataplexy: head drop, jaw sag, knees buckling for seconds; reflexes absent during the attack. In children near onset, grimacing, tongue thrusting or global hypotonia.",
        options: [
          { label: "Yes, a few times a month or more", to: "r:nt1", note: "Cataplexy." },
          { label: "Long attacks with stress, intact reflexes", to: "r:pseudo", note: "Pseudocataplexy?" },
          { label: "No cataplexy", to: "sbreath", note: "Continue." }
        ]
      },
      sbreath: {
        q: "Are there snoring, witnessed pauses, obesity or a large neck?",
        help: "OSA is far more common than narcolepsy and can coexist with it.",
        options: [
          { label: "Yes", to: "psg", note: "Get a sleep study." },
          { label: "No", to: "stime", note: "Continue." }
        ]
      },
      stime: {
        q: "Is the sleepiness tied to a time-of-day pattern or a work schedule?",
        help: "Morning sleepiness with late nights (delayed phase), evening sleepiness with early waking (advanced phase), sleepiness at work on night shifts.",
        options: [
          { label: "Yes", to: "circ", note: "Think circadian." },
          { label: "No", to: "sstudy", note: "Continue." }
        ]
      },
      sstudy: {
        q: "What did the sleep studies show (PSG and MSLT after stopping psychotropics and 2 weeks of regular sleep)?",
        help: "Narcolepsy: MSLT mean latency ≤8 minutes with REM in ≥2 naps, or REM within 15 minutes on the night PSG. CSF hypocretin-1 ≤110 pg/mL is type 1.",
        options: [
          { label: "Low CSF hypocretin-1", to: "r:nt1", note: "Type 1." },
          { label: "MSLT ≤8 min with ≥2 SOREMPs (or nocturnal SOREMP); no cataplexy; hypocretin normal or not measured", to: "r:nt2", note: "Type 2." },
          { label: "Short latency without SOREMPs; long or unrefreshing sleep", to: "shyper", note: "Think hypersomnolence." },
          { label: "Not done yet", to: "r:needstudy", note: "Refer." }
        ]
      },
      shyper: {
        q: "Hypersomnolence disorder needs ≥7 hours of main sleep plus lapses into sleep, an unrefreshing main sleep >9 hours, or sleep inertia, at least 3 times a week for 3 months. Which fits?",
        help: "Add hypersomnolence disorder to depression or a medical condition only if the sleepiness far exceeds what that condition explains.",
        options: [
          { label: "Criteria met; not adequately explained by another disorder", to: "r:hyper", note: "Hypersomnolence disorder." },
          { label: "Fully explained by depression (e.g., atypical features) or a medical illness", to: "r:hyper-explained", note: "No separate diagnosis." },
          { label: "Recurrent episodes of days to weeks of hypersomnia with normal intervals", to: "r:kls", note: "Kleine-Levin pattern." },
          { label: "Sleepy, but not enough information", to: "r:unspec-hyper", note: "Unspecified." }
        ]
      },
      psg: {
        q: "What does polysomnography (or home testing for OSA) show?",
        help: "AHI = apneas plus hypopneas per hour of sleep. Central sleep apnea needs ≥5 central apneas per hour, with central events more than half of all events.",
        options: [
          { label: "Obstructive events ≥15/h, with or without symptoms", to: "r:osa", note: "OSA (A2)." },
          { label: "Obstructive events 5–14/h with snoring, gasping or daytime sleepiness", to: "r:osa", note: "OSA (A1), mild." },
          { label: "Obstructive events 5–14/h with no symptoms", to: "r:subosa", note: "Below threshold." },
          { label: "Mostly central apneas, ≥5/h", to: "csa", note: "Central apnea." },
          { label: "Sustained desaturation or raised CO₂ without many apneas", to: "hypo", note: "Hypoventilation." },
          { label: "Snoring only, normal study", to: "r:snoring", note: "Primary snoring." }
        ]
      },
      csa: {
        q: "What goes with the central apneas?",
        help: "Cheyne-Stokes breathing is a crescendo-decrescendo pattern (cycle about 60 seconds), usually with heart failure, stroke or renal failure.",
        options: [
          { label: "Crescendo-decrescendo pattern; heart failure or stroke", to: "r:csb", note: "Cheyne-Stokes." },
          { label: "Long-acting opioids (methadone, chronic pain treatment)", to: "r:csa-opioid", note: "Opioid-related." },
          { label: "No obvious cause", to: "r:csa-idio", note: "Idiopathic." }
        ]
      },
      hypo: {
        q: "What is the cause of the hypoventilation?",
        help: "“Won’t breathe” (reduced drive) or “can’t breathe” (lungs, chest wall, muscles, obesity).",
        options: [
          { label: "Lung, neuromuscular or chest wall disease, obesity, or sedative/opioid use", to: "r:hypo-comorbid", note: "Comorbid." },
          { label: "Congenital, from birth (PHOX2B)", to: "r:hypo-cong", note: "Congenital." },
          { label: "No identifiable cause", to: "r:hypo-idio", note: "Idiopathic." }
        ]
      },
      circ: {
        q: "Which timing pattern fits best?",
        help: "Use a sleep diary or actigraphy for at least 7 days, including weekends.",
        options: [
          { label: "Falls asleep and wakes late (usually >2 hours); normal sleep when allowed", to: "r:dsp", note: "Delayed." },
          { label: "Sleepy early in the evening, wakes very early", to: "r:asp", note: "Advanced." },
          { label: "No main sleep period; at least three bouts across 24 hours", to: "r:isw", note: "Irregular." },
          { label: "Sleep drifts later day by day; symptoms come and go in cycles", to: "r:non24", note: "Non-24." },
          { label: "Insomnia and sleepiness tied to night or rotating shifts", to: "r:shift", note: "Shift work." },
          { label: "Only after crossing time zones", to: "r:jetlag", note: "Jet lag." },
          { label: "A late schedule without distress or impairment", to: "r:normal-late", note: "Normal variant." }
        ]
      },
      legs: {
        q: "Which best describes the leg symptoms?",
        help: "RLS needs all three: worse at rest, relieved by movement, worse in the evening or night; at least 3 times a week for 3 months, with distress or impairment.",
        options: [
          { label: "All three features, ≥3 times a week for ≥3 months, with distress", to: "r:rls", note: "RLS." },
          { label: "Whole-body inner restlessness after starting or raising an antipsychotic", to: "r:akathisia", note: "Akathisia." },
          { label: "Painful cramps, or relieved by one change of position", to: "r:mimic", note: "Mimic." }
        ]
      }
    },
    results: {
      "para": { label: "Use the other helper", dx: "A parasomnia question", line: "Nighttime behaviors and frightening dreams are sorted by the “Which nighttime behavior?” helper.", points: ["Timing in the night, ease of waking and dream recall separate NREM arousal disorders, nightmares and REM sleep behavior disorder."], link: { ch: "ch12", sec: "s12-nrem-features", label: "Parasomnia differential" } },
      "subst": { dx: "Substance/medication-induced sleep disorder", line: "A prominent sleep disturbance that began with intoxication, withdrawal or a medication able to cause it; specify insomnia, daytime sleepiness, parasomnia or mixed type and the onset.", points: ["Code by class and use disorder: e.g., F10.282 (alcohol, moderate or severe use disorder), F15.982 caffeine, F17.208 tobacco, F19.982 a prescribed drug such as bupropion.", "Diagnose it instead of intoxication or withdrawal only when the sleep problem predominates."], link: { ch: "ch12", sec: "s12-substance", label: "Substance/medication-induced sleep disorder" }, dxId: "substance-induced-sleep" },
      "deprived": { label: "Not insomnia disorder", dx: "Sleep deprivation from circumstances", line: "Criterion E requires adequate opportunity to sleep; lack of time in bed is not insomnia.", points: ["Address the schedule; reassess if trouble sleeping persists when time is available."], link: { ch: "ch12", sec: "s12-insomnia-ddx", label: "Insomnia differential" } },
      "symptom": { label: "No separate diagnosis", dx: "Insomnia as a symptom of another disorder", line: "Insomnia that is part of a predominant mental disorder and does not need its own attention is not diagnosed separately.", points: ["Reconsider insomnia disorder if it persists after the episode (it does in at least 40%–50% after an MDE) or needs its own treatment."], link: { ch: "ch12", sec: "s12-insomnia-criteria", label: "Insomnia criteria" } },
      "insomnia": { dx: "Insomnia disorder", line: "Dissatisfaction with sleep with onset, maintenance or early-waking problems, ≥3 nights a week for ≥3 months, despite opportunity, with distress or impairment.", points: ["Code: F51.01.", "Add “with mental disorder / medical condition / another sleep disorder” and code that condition right after.", "Persistent if ≥3 months; recurrent if two episodes in a year.", "Ask about suicidal thoughts."], link: { ch: "ch12", sec: "s12-insomnia-criteria", label: "Insomnia criteria" }, dxId: "insomnia" },
      "shortterm": { dx: "Other specified insomnia disorder, short-term insomnia disorder", line: "All criteria met except the 3-month duration.", points: ["Code: G47.09.", "Reassess at 3 months."], link: { ch: "ch12", sec: "s12-residual", label: "Residual categories" }, dxId: "other-specified-insomnia" },
      "nonrest": { dx: "Other specified insomnia disorder, restricted to nonrestorative sleep", line: "Unrefreshing sleep without difficulty falling or staying asleep.", points: ["Code: G47.09 (p. 475); the insomnia text instead points to other specified sleep-wake disorder, G47.8 (p. 411).", "Rule out sleep apnea, which commonly causes unrefreshing sleep."], link: { ch: "ch12", sec: "s12-residual", label: "Residual categories" }, dxId: "other-specified-insomnia" },
      "unspec-ins": { dx: "Unspecified insomnia disorder", line: "An insomnia picture with distress when the reason is not stated or information is insufficient.", points: ["Code: G47.00."], link: { ch: "ch12", sec: "s12-residual", label: "Residual categories" }, dxId: "unspecified-insomnia" },
      "insufficient": { label: "Not hypersomnolence disorder", dx: "Insufficient sleep", line: "Habitually short nights with weekend catch-up explain the sleepiness.", points: ["Try 10–14 days of sleep extension.", "Do not diagnose hypersomnolence while night sleep may be inadequate."], link: { ch: "ch12", sec: "s12-hypersomnolence-ddx", label: "Hypersomnolence differential" } },
      "nt1": { dx: "Narcolepsy with cataplexy or hypocretin deficiency (type 1)", line: "Sleep need or lapses at least 3 times a week for 3 months plus cataplexy or CSF hypocretin-1 ≤110 pg/mL.", points: ["Code: G47.411; G47.421 if due to a medical condition (code that first).", "PSG and MSLT are confirmatory.", "Severity: mild, moderate or severe by naps and cataplexy frequency."], link: { ch: "ch12", sec: "s12-narcolepsy-criteria", label: "Narcolepsy criteria" }, dxId: "narcolepsy" },
      "nt2": { dx: "Narcolepsy without cataplexy, hypocretin normal or unmeasured (type 2)", line: "Chronic sleepiness plus a positive PSG or MSLT, without cataplexy or low hypocretin.", points: ["Code: G47.419; G47.429 if due to a medical condition such as myotonic dystrophy (code that first).", "MSLT reliability is poor in type 2; exclude sleep deprivation, shift work, OSA and drug effects.", "Reassign to type 1 if cataplexy appears."], link: { ch: "ch12", sec: "s12-narcolepsy-features", label: "Sleep studies in narcolepsy" }, dxId: "narcolepsy" },
      "pseudo": { label: "Not cataplexy", dx: "Pseudocataplexy (functional neurological symptom disorder)", line: "Long attacks, unusual triggers, frequent falls, generalized weakness and intact reflexes.", points: ["Video and an MSLT without SOREMPs help.", "See functional neurological symptom disorder in Chapter 9."], link: { ch: "ch12", sec: "s12-narcolepsy-ddx", label: "Narcolepsy differential" }, dxId: "fnd" },
      "needstudy": { label: "Refer", dx: "Sleep study needed", line: "Narcolepsy type 2 and hypersomnolence disorder cannot be told apart without PSG and MSLT.", points: ["Stop psychotropics for an interval based on half-life; document 2 weeks of regular sleep by diary or actigraphy.", "Meanwhile, consider unspecified hypersomnolence disorder (G47.10) if a working diagnosis is needed."], link: { ch: "ch12", sec: "s12-narcolepsy-features", label: "How to test" } },
      "hyper": { dx: "Hypersomnolence disorder", line: "Excessive sleepiness despite ≥7 hours of main sleep, with lapses, a long unrefreshing sleep or sleep inertia, ≥3 times a week for ≥3 months.", points: ["Code: F51.11, with comorbidity specifiers coded after.", "Severity by days a week with difficulty staying alert: 1–2 mild, 3–4 moderate, 5–7 severe.", "Acute <1 month, subacute 1–3 months, persistent >3 months."], link: { ch: "ch12", sec: "s12-hypersomnolence", label: "Hypersomnolence criteria" }, dxId: "hypersomnolence" },
      "hyper-explained": { label: "No separate diagnosis", dx: "Sleepiness explained by another disorder", line: "Hypersomnia within a major depressive episode or a medical condition, at the level expected, needs no extra diagnosis.", points: ["Add hypersomnolence disorder if the sleepiness far exceeds what the condition explains."], link: { ch: "ch12", sec: "s12-hypersomnolence-ddx", label: "Hypersomnolence differential" } },
      "kls": { dx: "Other specified hypersomnolence disorder, brief-duration hypersomnolence (Kleine-Levin syndrome)", line: "Recurrent episodes of hypersomnia that do not meet the 3-month frequency rule.", points: ["Code: G47.19."], link: { ch: "ch12", sec: "s12-residual", label: "Residual categories" }, dxId: "other-specified-hypersomnolence" },
      "unspec-hyper": { dx: "Unspecified hypersomnolence disorder", line: "A hypersomnolence picture with insufficient information.", points: ["Code: G47.10."], link: { ch: "ch12", sec: "s12-residual", label: "Residual categories" }, dxId: "unspecified-hypersomnolence" },
      "osa": { dx: "Obstructive sleep apnea hypopnea", line: "AHI ≥5 with nocturnal breathing symptoms or daytime sleepiness, or AHI ≥15 regardless of symptoms.", points: ["Code: G47.33.", "Severity: mild <15, moderate 15–30, severe >30.", "Insomnia or narcolepsy may coexist; review sedatives, opioids and alcohol; ask about driving."], link: { ch: "ch12", sec: "s12-osa-criteria", label: "OSA criteria" }, dxId: "osa" },
      "subosa": { label: "Below threshold", dx: "Not OSA by DSM-5-TR criteria", line: "An AHI of 5–14 needs nocturnal breathing symptoms or daytime sleepiness, fatigue or unrefreshing sleep.", points: ["Re-ask about snoring and sleepiness: women often report fatigue or insomnia rather than sleepiness."], link: { ch: "ch12", sec: "s12-osa-criteria", label: "OSA criteria" } },
      "snoring": { label: "No diagnosis", dx: "Primary snoring", line: "Snoring without symptoms and with a normal overnight study.", points: ["Reassess if sleepiness or witnessed pauses develop."], link: { ch: "ch12", sec: "s12-osa-ddx", label: "OSA differential" } },
      "csb": { dx: "Central sleep apnea, Cheyne-Stokes breathing", line: "Crescendo-decrescendo breathing with central apneas and hypopneas ≥5 per hour, usually with heart failure, stroke or renal failure.", points: ["Code: R06.3.", "Cheyne-Stokes while awake carries a worse prognosis."], link: { ch: "ch12", sec: "s12-csa", label: "Central sleep apnea" }, dxId: "csa" },
      "csa-opioid": { dx: "Central sleep apnea comorbid with opioid use", line: "Central apneas, periodic or ataxic breathing with chronic long-acting opioids.", points: ["Code an opioid use disorder first if present (F11.10 or F11.20), then G47.37; otherwise G47.37 alone.", "Higher doses (>200 mg morphine equivalents a day) mean greater severity."], link: { ch: "ch12", sec: "s12-csa", label: "Central sleep apnea" }, dxId: "csa" },
      "csa-idio": { dx: "Central sleep apnea, idiopathic", line: "Central apneas from unstable ventilatory control without obstruction or another cause.", points: ["Code: G47.31.", "Rare; presents with sleepiness, insomnia and waking short of breath."], link: { ch: "ch12", sec: "s12-csa", label: "Central sleep apnea" }, dxId: "csa" },
      "hypo-comorbid": { dx: "Sleep-related hypoventilation, comorbid", line: "Hypoventilation from lung disease, a neuromuscular or chest wall disorder, obesity, or medications such as benzodiazepines and opiates.", points: ["Code: G47.36.", "Obesity hypoventilation: BMI >30 and awake pCO₂ >45 without another cause."], link: { ch: "ch12", sec: "s12-hypoventilation", label: "Sleep-related hypoventilation" }, dxId: "sleep-hypoventilation" },
      "hypo-cong": { dx: "Sleep-related hypoventilation, congenital central alveolar hypoventilation", line: "A rare PHOX2B disorder, usually from birth.", points: ["Code: G47.35.", "Associated with Hirschsprung’s disease and autonomic dysfunction."], link: { ch: "ch12", sec: "s12-hypoventilation", label: "Sleep-related hypoventilation" }, dxId: "sleep-hypoventilation" },
      "hypo-idio": { dx: "Sleep-related hypoventilation, idiopathic", line: "Hypoventilation with no identifiable cause; very uncommon in adults.", points: ["Code: G47.34.", "Exclude lung, skeletal, neuromuscular and medication causes first."], link: { ch: "ch12", sec: "s12-hypoventilation", label: "Sleep-related hypoventilation" }, dxId: "sleep-hypoventilation" },
      "dsp": { dx: "Circadian rhythm sleep-wake disorder, delayed sleep phase type", line: "Late sleep onset and waking, with insomnia and morning sleepiness when forced onto an earlier schedule.", points: ["Code: G47.21.", "Specify familial, or overlapping with non-24-hour type.", "Most common in adolescents and young adults."], link: { ch: "ch12", sec: "s12-circadian-delayed", label: "Delayed sleep phase type" }, dxId: "circadian-delayed" },
      "asp": { dx: "Circadian rhythm sleep-wake disorder, advanced sleep phase type", line: "Early sleep and waking, with evening sleepiness and early-morning insomnia.", points: ["Code: G47.22; specify familial.", "Rule out depression as a cause of early waking."], link: { ch: "ch12", sec: "s12-circadian-advanced", label: "Advanced sleep phase type" }, dxId: "circadian-advanced" },
      "isw": { dx: "Circadian rhythm sleep-wake disorder, irregular sleep-wake type", line: "No major sleep period; sleep broken into at least three bouts in 24 hours.", points: ["Code: G47.23.", "Common in dementia and neurodevelopmental disorders; light and daytime structure help."], link: { ch: "ch12", sec: "s12-circadian-irregular-non24", label: "Irregular and non-24 types" }, dxId: "circadian-irregular" },
      "non24": { dx: "Circadian rhythm sleep-wake disorder, non-24-hour sleep-wake type", line: "A free-running clock drifting later each day, with cycles of insomnia and sleepiness.", points: ["Code: G47.24.", "Most common in blind people (about half in the US)."], link: { ch: "ch12", sec: "s12-circadian-irregular-non24", label: "Irregular and non-24 types" }, dxId: "circadian-non24" },
      "shift": { dx: "Circadian rhythm sleep-wake disorder, shift work type", line: "Insomnia in the main sleep period and sleepiness at work linked to regular work outside 8 a.m. to 6 p.m.", points: ["Code: G47.26.", "Symptoms that persist on a day schedule suggest another sleep disorder.", "Watch for mania in bipolar disorder."], link: { ch: "ch12", sec: "s12-circadian-shift", label: "Shift work type" }, dxId: "circadian-shift" },
      "jetlag": { label: "Not a DSM-5-TR circadian type", dx: "Jet lag", line: "ICSD-3 includes a jet lag type; DSM-5-TR does not.", points: ["Usually transient; frequent travelers may resemble rotating shift workers."], link: { ch: "ch12", sec: "s12-circadian-shift", label: "Shift work differential" } },
      "normal-late": { label: "No diagnosis", dx: "Normal late chronotype", line: "A late schedule that causes no distress or impairment, common in adolescents and young adults.", points: ["Reassess if school or work demands cause problems."], link: { ch: "ch12", sec: "s12-circadian-delayed", label: "Delayed sleep phase type" } },
      "rls": { dx: "Restless legs syndrome", line: "An urge to move the legs, worse at rest and in the evening, relieved by movement, ≥3 times a week for ≥3 months, with distress or impairment.", points: ["Code: G25.81.", "Check for iron deficiency, pregnancy, renal failure and serotonergic antidepressants."], link: { ch: "ch12", sec: "s12-rls", label: "Restless legs syndrome" }, dxId: "rls" },
      "akathisia": { label: "Not RLS", dx: "Medication-induced akathisia", line: "Inner restlessness tied to an antipsychotic or dose increase, less evening worsening, fewer periodic limb movements.", points: ["Criterion E of RLS excludes akathisia; see Chapter 21 (medication-induced movement disorders)."], link: { ch: "ch12", sec: "s12-rls", label: "RLS differential" }, dxId: "medication-induced-acute-akathisia" },
      "mimic": { label: "Not RLS", dx: "A restless legs mimic", line: "Leg cramps, positional discomfort, arthritis or neuropathy explain the symptoms.", points: ["Cramps lack the urge to move; positional discomfort goes with one change of position."], link: { ch: "ch12", sec: "s12-rls", label: "RLS differential" } }
    }
  },
  {
    id: "parasomnia",
    chapter: "ch12",
    title: "Which nighttime behavior?",
    summary: "Start from an unusual behavior or experience during sleep, then use timing in the night, ease of waking, dream recall and sleep study findings to separate NREM arousal disorders, nightmare disorder, REM sleep behavior disorder and their look-alikes.",
    caution: "A teaching aid built from DSM-5-TR pp. 451–464. New or violent parasomnias in adults need a sleep study with video and a full seizure montage. Codes are unchanged through October 2026.",
    start: "drug",
    nodes: {
      drug: {
        q: "Did the episodes begin with a new medication or substance, or with its withdrawal?",
        help: "Z-drugs and benzodiazepines (sleepwalking, sleep eating), SSRIs, SNRIs and TCAs (REM sleep behavior), beta-blockers, dopaminergic drugs and melatonin (nightmares), alcohol or antidepressant withdrawal (REM rebound).",
        options: [
          { label: "Yes", to: "r:subst-para", note: "Possible induced parasomnia." },
          { label: "No", to: "when", note: "Continue." }
        ]
      },
      when: {
        q: "When do the episodes happen, and what is the person like if woken?",
        help: "NREM arousals come from deep sleep in the first third of the night; nightmares and REM sleep behavior disorder come from REM sleep, later in the night.",
        options: [
          { label: "First third of the night; confused, hard to wake, little or no recall", to: "nrem", note: "NREM pattern." },
          { label: "Later in the night; wakes fully alert recalling a vivid, frightening dream; lies still", to: "nm", note: "Nightmare pattern." },
          { label: "Later in the night; shouts, punches or kicks as if acting out a dream; wakes alert", to: "rbd", note: "REM behavior pattern." },
          { label: "Stereotyped, several times a night, also in naps or from wakefulness", to: "r:seizure", note: "Seizure?" },
          { label: "Starts from clear wakefulness during the night, with a trauma history", to: "r:dissoc", note: "Dissociative?" }
        ]
      },
      nrem: {
        q: "What happens during the episodes?",
        help: "Sleepwalking: blank stare, hard to wake. Sleep terrors: panicky scream, intense fear, dilated pupils, racing heart, inconsolable.",
        options: [
          { label: "Gets up and walks about or does complex things", to: "sw", note: "Sleepwalking." },
          { label: "Sits up screaming in terror with autonomic signs", to: "r:terror", note: "Sleep terrors." },
          { label: "Episodes follow loud snoring and gasping", to: "r:osa-arousal", note: "Apnea-related." },
          { label: "Episodes occur only during heavy drinking, with memory gaps", to: "r:blackout", note: "Blackouts?" }
        ]
      },
      sw: {
        q: "Is there a special form?",
        help: "Specify sleep-related eating or sexual behavior. New onset in an adult calls for a search for OSA, seizures or medication.",
        options: [
          { label: "Eating during the episodes", to: "r:sw-eat", note: "Sleep-related eating." },
          { label: "Sexual behavior during the episodes", to: "r:sw-sex", note: "Sexsomnia." },
          { label: "Wakes fully and overeats with full awareness", to: "r:nes", note: "Night eating?" },
          { label: "Neither", to: "r:sw", note: "Sleepwalking." }
        ]
      },
      nm: {
        q: "Is there another disorder the nightmares belong to?",
        help: "Trauma-related nightmares are part of PTSD or acute stress disorder; add nightmare disorder only if they need independent clinical attention.",
        options: [
          { label: "No other disorder explains them", to: "r:nm", note: "Nightmare disorder." },
          { label: "PTSD, but the nightmares need their own attention", to: "r:nm-ptsd", note: "Both." },
          { label: "Part of PTSD; no separate attention needed", to: "r:ptsd-only", note: "PTSD only." },
          { label: "Marked daytime sleepiness, perhaps cataplexy", to: "r:narco-nm", note: "Narcolepsy?" }
        ]
      },
      rbd: {
        q: "What do the sleep study and history show?",
        help: "REM sleep without atonia on PSG (with video and arm EMG), or a suggestive history with an established synucleinopathy.",
        options: [
          { label: "REM sleep without atonia on PSG", to: "r:rbd", note: "Criterion D1." },
          { label: "No PSG, but Parkinson’s disease, MSA or Lewy body disease is established", to: "r:rbd", note: "Criterion D2." },
          { label: "No PSG and no known synucleinopathy", to: "r:rbd-os", note: "Other specified." },
          { label: "Behaviors only at the end of obstructive apneas; REM atonia normal", to: "r:osa-arousal", note: "Pseudo-RBD." }
        ]
      }
    },
    results: {
      "subst-para": { dx: "Substance/medication-induced sleep disorder, parasomnia type", line: "Complex sleep behaviors, REM sleep behavior or nightmares that began with a drug or its withdrawal.", points: ["Name the drug: e.g., F19.982 sertraline-induced sleep disorder, with onset after medication use, parasomnia type; F13.x82 for a Z-drug or benzodiazepine.", "SSRI-related RBD may unmask a predisposition: follow neurologically."], link: { ch: "ch12", sec: "s12-substance", label: "Substance/medication-induced sleep disorder" }, dxId: "substance-induced-sleep" },
      "seizure": { label: "Rule out epilepsy", dx: "Sleep-related seizures", line: "Stereotyped episodes, several a night, from naps or wakefulness suggest nocturnal seizures.", points: ["Video PSG with a full EEG montage.", "Seizures and parasomnias can coexist."], link: { ch: "ch12", sec: "s12-nrem-features", label: "NREM differential" } },
      "dissoc": { label: "Consider", dx: "Sleep-related dissociative disorder", line: "Episodes that begin from EEG-documented wakefulness, often in young women with a trauma history.", points: ["See dissociative amnesia with fugue and other specified dissociative disorder (Chapter 8)."], link: { ch: "ch12", sec: "s12-nrem-features", label: "NREM differential" }, dxId: "dissociative-amnesia" },
      "terror": { dx: "NREM sleep arousal disorder, sleep terror type", line: "Abrupt terror arousals in the first third of the night, inconsolable, with autonomic signs and amnesia.", points: ["Code: F51.4.", "Needs distress or impairment; most children outgrow it."], link: { ch: "ch12", sec: "s12-nrem-criteria", label: "NREM criteria" }, dxId: "sleep-terrors" },
      "osa-arousal": { label: "Treat the apnea", dx: "Arousals from obstructive sleep apnea", line: "Confusional arousals or dream-like behaviors at the end of apneas.", points: ["PSG; behaviors resolve with effective OSA treatment.", "OSA can also trigger true sleepwalking."], link: { ch: "ch12", sec: "s12-osa-ddx", label: "OSA differential" }, dxId: "osa" },
      "blackout": { label: "Consider", dx: "Alcohol-induced blackouts", line: "Complex behavior with amnesia during drinking can look identical to sleepwalking by history.", points: ["Take a drinking history; see alcohol use disorder (Chapter 16)."], link: { ch: "ch12", sec: "s12-nrem-features", label: "NREM differential" } },
      "sw-eat": { dx: "NREM sleep arousal disorder, sleepwalking type, with sleep-related eating", line: "Unwanted eating during incomplete arousals, with variable amnesia, sometimes of inedible items.", points: ["Code: F51.3.", "More common in women; check for Z-drug use."], link: { ch: "ch12", sec: "s12-nrem-criteria", label: "NREM criteria" }, dxId: "sleepwalking" },
      "sw-sex": { dx: "NREM sleep arousal disorder, sleepwalking type, with sleep-related sexual behavior (sexsomnia)", line: "Sexual behavior arising from sleep without awareness.", points: ["Code: F51.3.", "More common in men; medicolegal implications."], link: { ch: "ch12", sec: "s12-nrem-criteria", label: "NREM criteria" }, dxId: "sleepwalking" },
      "nes": { label: "Not a parasomnia", dx: "Night eating syndrome", line: "Fully awake overeating at night: a disturbance in the timing of meals.", points: ["Classified with the feeding and eating disorders (other specified feeding or eating disorder)."], link: { ch: "ch12", sec: "s12-nrem-features", label: "NREM differential" } },
      "sw": { dx: "NREM sleep arousal disorder, sleepwalking type", line: "Repeated walking about during incomplete arousals from deep sleep, with a blank stare, poor responsiveness and amnesia.", points: ["Code: F51.3.", "Needs distress or impairment; isolated episodes are common.", "Adult onset: look for OSA, seizures or medications."], link: { ch: "ch12", sec: "s12-nrem-criteria", label: "NREM criteria" }, dxId: "sleepwalking" },
      "nm": { dx: "Nightmare disorder", line: "Repeated long, well-remembered dysphoric dreams, with quick alertness on waking and distress or impairment.", points: ["Code: F51.5.", "Specify duration (acute, subacute, persistent) and severity (mild <1/week, moderate, severe nightly).", "Frequent nightmares raise suicide risk."], link: { ch: "ch12", sec: "s12-nightmare", label: "Nightmare disorder" }, dxId: "nightmare" },
      "nm-ptsd": { dx: "Nightmare disorder, with PTSD", line: "Nightmares severe or frequent enough to need independent attention alongside PTSD.", points: ["Record F51.5 nightmare disorder, with posttraumatic stress disorder, then the PTSD code."], link: { ch: "ch12", sec: "s12-nightmare", label: "Nightmare disorder" }, dxId: "nightmare" },
      "ptsd-only": { label: "No separate diagnosis", dx: "Nightmares as a symptom of PTSD", line: "Trauma-related nightmares are an intrusion symptom of PTSD.", points: ["Add nightmare disorder if they come to need their own attention."], link: { ch: "ch12", sec: "s12-nightmare", label: "Nightmare differential" }, dxId: "ptsd" },
      "narco-nm": { label: "Check for narcolepsy", dx: "Nightmares in narcolepsy", line: "Nightmares are common in narcolepsy; excessive sleepiness, with or without cataplexy, defines it.", points: ["Use the sleep-wake helper’s sleepiness branch."], link: { ch: "ch12", sec: "s12-narcolepsy-criteria", label: "Narcolepsy" }, dxId: "narcolepsy" },
      "rbd": { dx: "REM sleep behavior disorder", line: "Dream enactment from REM sleep, waking alert, with REM sleep without atonia or an established synucleinopathy.", points: ["Code: G47.52.", "About 75% of idiopathic cases develop a neurodegenerative disease, most often a synucleinopathy, within 10–15 years: arrange neurological follow-up.", "Make the bedroom safe."], link: { ch: "ch12", sec: "s12-rbd", label: "REM sleep behavior disorder" }, dxId: "rbd" },
      "rbd-os": { dx: "Other specified sleep-wake disorder", line: "Repeated arousals during REM sleep without polysomnography or a history of a synucleinopathy.", points: ["Code: G47.8, recording the reason.", "Arrange PSG with video to confirm REM sleep without atonia."], link: { ch: "ch12", sec: "s12-residual", label: "Residual categories" }, dxId: "other-specified-sleep-wake" }
    }
  }
]);
