/* Chapter 12 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge.
   Treatment status checked October 2026. */
(function () {
  var SAFETY = "Ask about **drowsy driving**, near misses and safety-critical work; know your local rules on reporting sleepy drivers.";
  var SED = "Review **sedatives, opioids and alcohol**, which worsen sleep-disordered breathing.";
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "insomnia",
      ask: [
        ["A Complaint", "“Are you unhappy with how much or how well you sleep?”"],
        ["A Type", "“Is it hard to fall asleep, to stay asleep, or do you wake too early and can’t get back to sleep?”", "Ask the bedtime and wake time to judge early waking."],
        ["B Daytime", "“How does poor sleep affect your next day: energy, mood, concentration, work?”"],
        ["C–D Frequency", "“How many nights a week, and since when?”", "≥3 nights a week for ≥3 months; a 2-week sleep diary helps."],
        ["E Opportunity", "“How many hours do you spend in bed? Do work or family duties cut your sleep short?”"],
        ["F Other sleep disorders", "“Do you snore or stop breathing? Restless legs? Sleepy by day? Sleep fine on your own schedule?”"],
        ["G Substances", "“Coffee, energy drinks, alcohol, nicotine, sleeping pills, other medicines?”", "Ask about timing of caffeine."],
        ["H Other disorders", "“How is your mood? Do you worry a lot? Any pain or medical problems at night?”", "Comorbidity is allowed; use the specifiers."],
        ["Safety", "“Has it ever felt so bad you thought life wasn’t worth living?”", "Insomnia raises suicide risk independently of depression."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT-I** is first line for chronic insomnia (AASM 2017/2021; ACP 2016): stimulus control, **sleep restriction**, cognitive therapy, relaxation and sleep hygiene, in person or digital. An April 2026 AASM guideline favors CBT-I plus medication over medication alone, and **CBT-I alone** when it is used.",
        points: [
          "Medication when CBT-I is unavailable, insufficient or as a bridge: **orexin antagonists** ([[stahl:drugs/suvorexant|suvorexant]], [[stahl:drugs/lemborexant|lemborexant]], [[stahl:drugs/daridorexant|daridorexant]]), **Z-drugs** ([[stahl:drugs/zolpidem|zolpidem]], [[stahl:drugs/eszopiclone|eszopiclone]], [[stahl:drugs/zaleplon|zaleplon]]), low-dose [[stahl:drugs/doxepin|doxepin]] (maintenance) or [[stahl:drugs/ramelteon|ramelteon]] (onset).",
          "Z-drugs carry a boxed warning for **complex sleep behaviors** (sleepwalking, sleep driving); use the lowest dose, and lower doses in women and older adults.",
          "Avoid long-term **benzodiazepines** and sedating antihistamines, especially in older adults (falls, cognition).",
          "Off-label sedating antidepressants ([[stahl:drugs/trazodone|trazodone]], [[stahl:drugs/mirtazapine|mirtazapine]]) are widely used; evidence for primary insomnia is limited.",
          "Treat the comorbid condition too; CBT-I helps insomnia with depression, PTSD and chronic pain.",
          "In August 2026 the US DEA proposed moving orexin antagonists from Schedule IV to Schedule V; check whether it is final."
        ],
        stahl: [["Insomnia", "c/ch10/guide/s10-insomnia"], ["GABA-A hypnotics", "c/ch10/guide/s10-gaba-hypnotics"], ["Orexin antagonists", "c/ch10/guide/s10-dora"], ["Behavioral treatment", "c/ch10/guide/s10-behavioral"]]
      }
    },
    {
      id: "hypersomnolence",
      ask: [
        ["A Sleepiness", "“How many hours do you sleep at night? Do you still fall asleep during the day?”", "At least 7 hours of main sleep."],
        ["A1 Lapses", "“Do you doze off without meaning to: in meetings, reading, driving?”"],
        ["A2 Long sleep", "“Do you sleep 9 hours or more and still wake unrefreshed?”"],
        ["A3 Inertia", "“Is it hard to become fully awake? Do you need several alarms or feel confused for a while?”", "Sleep inertia in about 40%."],
        ["B Frequency", "“How many days a week, and for how long?”", "≥3 times a week for ≥3 months."],
        ["Naps", "“Do naps refresh you?”", "Narcolepsy naps are short and refreshing; here they are long and unrefreshing."],
        ["D Exclusions", "“Any snoring, sudden weakness with laughter, or a late schedule?”"],
        ["E–F", "“Any medicines, alcohol or drugs? How is your mood?”", "Atypical depression causes hypersomnia."],
        ["Safety", "“Have you fallen asleep while driving?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Confirm with **PSG and MSLT** after excluding insufficient sleep (diary, actigraphy, sleep extension), OSA, drugs and depression. Then wake-promoting medication with scheduled sleep.",
        points: [
          "[[stahl:drugs/modafinil|Modafinil]] or [[stahl:drugs/armodafinil|armodafinil]] are commonly first choice; [[stahl:drugs/solriamfetol|solriamfetol]], [[stahl:drugs/pitolisant|pitolisant]] and stimulants are alternatives (some off label).",
          "Low-sodium mixed-salt oxybate is FDA-approved for **idiopathic hypersomnia** in adults (the ICSD-3 counterpart of hypersomnolence disorder).",
          "Naps help less than in narcolepsy; keep a regular schedule.",
          SAFETY
        ],
        stahl: [["Excessive sleepiness", "c/ch10/guide/s10-sleepiness"], ["Modafinil and armodafinil", "c/ch10/guide/s10-modafinil"], ["Newer wake-promoting agents", "c/ch10/guide/s10-newer"]]
      }
    },
    {
      id: "narcolepsy",
      ask: [
        ["A Sleepiness", "“Do you have an overwhelming need to sleep or fall asleep during the day? How often?”", "≥3 times a week over 3 months."],
        ["B1 Cataplexy", "“When you laugh or hear a joke, do your knees buckle, your head drop or your jaw sag, while you stay awake?”", "Ask about seconds-long, bilateral attacks."],
        ["Children", "“Has your child’s face or tongue been doing odd movements, or have they become floppy, since the sleepiness began?”", "Static cataplexy near onset."],
        ["Hallucinations", "“Do you see or hear things that aren’t there as you fall asleep or wake up?”", "Sleep-related and multisensory, unlike schizophrenia."],
        ["Paralysis", "“Have you woken up unable to move for a short time?”"],
        ["Night sleep", "“Is your night sleep broken? Vivid dreams? Acting out dreams?”"],
        ["Naps", "“Does a 15–20 minute nap refresh you?”"],
        ["Onset", "“When did this start? Any infection, flu or vaccination before it?”"],
        ["Safety", "“Do you drive or work with machinery?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Confirm with **PSG and MSLT** (off REM-suppressing drugs, after 2 weeks of regular sleep) or CSF hypocretin; then scheduled naps, regular sleep and medication for sleepiness and cataplexy.",
        points: [
          "Sleepiness: [[stahl:drugs/modafinil|modafinil]]/[[stahl:drugs/armodafinil|armodafinil]], [[stahl:drugs/pitolisant|pitolisant]] (approved from **age 6** for sleepiness since June 2024), [[stahl:drugs/solriamfetol|solriamfetol]], stimulants ([[stahl:drugs/methylphenidate|methylphenidate]], [[stahl:drugs/amphetamine|amphetamine]]).",
          "Cataplexy, sleepiness and broken sleep: **oxybates** ([[stahl:drugs/sodium-oxybate|sodium oxybate]]; a low-sodium mixed-salt form; once-nightly sodium oxybate, approved from **age 7** in October 2024); pitolisant also reduces cataplexy.",
          "REM-suppressing antidepressants ([[stahl:drugs/venlafaxine|venlafaxine]], [[stahl:drugs/clomipramine|clomipramine]], SSRIs) for cataplexy, off label; stopping them abruptly causes **rebound cataplexy**.",
          "**Oveporexton** (Orzeyful), the first oral orexin 2 receptor agonist, was FDA-approved in August 2026 for **narcolepsy type 1** in adults; common effects include insomnia and urinary urgency or frequency; scheduling pending at approval. See [[stahl:drugs/oveporexton|oveporexton]].",
          "Watch for stimulant-induced **psychosis** at high doses, and for new OSA if symptoms worsen.",
          SAFETY
        ],
        stahl: [["Orexin and wakefulness", "c/ch10/guide/s10-orexin"], ["Sodium oxybate", "c/ch10/guide/s10-oxybate"], ["Newer agents", "c/ch10/guide/s10-newer"], ["Pitolisant", "drugs/pitolisant"], ["Oveporexton", "drugs/oveporexton"]]
      }
    },
    {
      id: "osa",
      ask: [
        ["A1a Nighttime", "“Do you snore loudly? Has anyone seen you stop breathing, gasp or choke in your sleep?”", "Ask the bed partner."],
        ["A1b Daytime", "“Are you sleepy, tired or unrefreshed despite enough time in bed?”", "Women often report fatigue or insomnia."],
        ["Associated", "“Morning headaches? Getting up to urinate at night? Dry mouth?”"],
        ["Risk", "Weight, neck size, blood pressure, jaw and airway on examination.", "Ask about sedating medications and alcohol."],
        ["Children", "“Does your child snore, breathe through the mouth, sleep in odd positions, or wet the bed again?”", "Consider with ADHD-like symptoms."],
        ["Mood", "“How has your mood been?”", "Depressive symptoms correlate with AHI."],
        ["Safety", "“Have you fallen asleep at the wheel or nearly crashed?”", "Commercial drivers: check reporting rules."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Diagnose with PSG or home sleep testing; **positive airway pressure (CPAP)** is standard for moderate to severe OSA, plus weight loss, positional therapy and limiting alcohol and sedatives.",
        points: [
          "Alternatives: **mandibular advancement** devices, upper-airway surgery (adenotonsillectomy is first line in children), **hypoglossal nerve stimulation** for selected PAP-intolerant adults.",
          "**Tirzepatide** (Zepbound) was approved in December 2024 for **moderate to severe OSA in adults with obesity**; AHI fell about 25–29 events/hour versus 5–6 with placebo.",
          "AD109 (aroxybutynin plus atomoxetine) was under FDA review in 2026, with a decision expected in early 2027.",
          "Residual sleepiness on effective PAP: [[stahl:drugs/solriamfetol|solriamfetol]], [[stahl:drugs/modafinil|modafinil]] or [[stahl:drugs/armodafinil|armodafinil]].",
          SED,
          "Antipsychotic- and mood-stabilizer-related **weight gain** raises OSA risk in psychiatric patients.",
          SAFETY
        ],
        stahl: [["Excessive sleepiness", "c/ch10/guide/s10-sleepiness"], ["Solriamfetol", "drugs/solriamfetol"]]
      }
    },
    {
      id: "csa",
      ask: [
        ["A", "“Do you wake up short of breath? Has anyone noticed your breathing speed up and slow down in sleep?”"],
        ["Causes", "“Do you have heart failure, a past stroke or kidney disease?”", "Cheyne-Stokes."],
        ["Opioids", "“What opioids do you take (methadone, buprenorphine, pain medicines), at what dose, and for how long?”", "Higher doses mean more severe CSA."],
        ["Altitude", "“Did this start after going to high altitude?”"],
        ["Symptoms", "“Are you sleepy, confused or low in the daytime?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat the cause: optimize **heart failure** treatment, review and if possible reduce **opioid** dose, avoid adding benzodiazepines.",
        points: [
          "PAP or adaptive and noninvasive ventilation under a sleep or pulmonary specialist; avoid adaptive servo-ventilation in heart failure with reduced ejection fraction.",
          "In methadone or buprenorphine maintenance, coordinate with the addiction team rather than stopping treatment.",
          SED
        ],
        stahl: []
      }
    },
    {
      id: "sleep-hypoventilation",
      ask: [
        ["Symptoms", "“Morning headaches, sleepiness, or waking short of breath when lying flat?”", "Orthopnea suggests diaphragm weakness."],
        ["Causes", "“Any lung disease, muscle or nerve disease, spine curvature?”"],
        ["Medications", "“Do you take benzodiazepines, opioids or drink alcohol?”"],
        ["Weight", "BMI and awake blood gases or bicarbonate.", "Obesity hypoventilation: BMI >30 and awake pCO₂ >45."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat the underlying disease and use **noninvasive ventilation** (e.g., bilevel PAP) for nocturnal hypoventilation; weight loss in obesity hypoventilation.",
        points: ["Avoid or minimize **sedatives and opioids**.", "Watch for pulmonary hypertension, cor pulmonale and polycythemia."],
        stahl: []
      }
    },
    {
      id: "circadian-delayed",
      ask: [
        ["Pattern", "“When do you fall asleep and wake on school or work days, and on free days?”", "Normal sleep on a late schedule is the key."],
        ["Impact", "“Do you miss morning classes or work? Sleepy until midday?”"],
        ["Light", "“Do you use screens or bright light late at night?”"],
        ["Family", "“Does anyone in your family keep very late hours?”", "Familial specifier."],
        ["Diary", "Ask for a sleep diary or actigraphy for at least 7 days including weekends."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Fixed wake time, **bright light** on waking and dim evenings, plus low-dose **melatonin** taken several hours before the desired bedtime.",
        points: ["Advance the schedule gradually; avoid catch-up sleep that lets the clock drift.", "Treat comorbid depression, ADHD or anxiety; avoid relying on hypnotics."],
        stahl: [["Circadian rhythms", "c/ch10/guide/s10-circadian"], ["Ramelteon", "drugs/ramelteon"]]
      }
    },
    {
      id: "circadian-advanced",
      ask: [
        ["Pattern", "“When do you get sleepy in the evening, and when do you wake?”", "Ask the bedtime before calling it early waking."],
        ["Mood", "“How is your mood? Do you wake early with worries?”", "Rule out depression."],
        ["Family", "“Do relatives also go to bed and wake very early?”"],
        ["Substances", "“Do you use sleeping pills or alcohol to sleep later, or caffeine to stay up?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Evening bright light** to delay the clock, and limiting early-morning light.",
        points: ["Avoid hypnotics for early waking.", "Accept an earlier schedule where life allows."],
        stahl: [["Circadian rhythms", "c/ch10/guide/s10-circadian"]]
      }
    },
    {
      id: "circadian-irregular",
      ask: [
        ["Pattern", "“Is there one main sleep at night, or sleep scattered through the day and night?”", "Ask the caregiver; ask for a diary."],
        ["Context", "“How much daylight and structured activity does the person get?”"],
        ["Caregiver", "“How is your own sleep?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Daytime bright light**, structured activity and social contact, a dark quiet night environment.",
        points: ["Avoid sedative-hypnotics in dementia (falls, confusion); melatonin has mixed evidence.", "Support the caregiver."],
        stahl: [["Circadian rhythms", "c/ch10/guide/s10-circadian"]]
      }
    },
    {
      id: "circadian-non24",
      ask: [
        ["Pattern", "“Does your sleep time move later day by day, so that your sleep problems come and go in cycles?”"],
        ["Vision", "“Can you perceive light?”", "Most common in totally blind people."],
        ["Diary", "Ask for a sleep diary or actigraphy over several weeks."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Timed **melatonin**; [[stahl:drugs/tasimelteon|tasimelteon]] is FDA-approved for non-24-hour sleep-wake disorder in adults (studied in totally blind people).",
        points: ["Sighted people: timed morning light, regular schedule and social cues."],
        stahl: [["Tasimelteon", "drugs/tasimelteon"], ["Circadian rhythms", "c/ch10/guide/s10-circadian"]]
      }
    },
    {
      id: "circadian-shift",
      ask: [
        ["Work", "“What hours do you work, and how often do they rotate?”", "Regularly outside 8 a.m. to 6 p.m."],
        ["Both symptoms", "“How do you sleep after a shift? How alert are you at work?”"],
        ["Days off", "“Does your sleep return to normal on a day schedule?”", "If not, look for another sleep disorder."],
        ["Safety", "“Have you nearly fallen asleep driving home?”"],
        ["Mood", "“Any history of bipolar disorder?”", "Missed nights can trigger mania."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Protect daytime sleep (dark, quiet, consistent), **planned naps** before shifts, bright light during the night shift and dark glasses on the way home.",
        points: ["[[stahl:drugs/modafinil|Modafinil]] or [[stahl:drugs/armodafinil|armodafinil]] are FDA-approved for sleepiness in shift work disorder.", "Melatonin before daytime sleep; avoid long-term hypnotics.", "Consider a change of schedule in bipolar disorder."],
        stahl: [["Modafinil and armodafinil", "c/ch10/guide/s10-modafinil"], ["Circadian rhythms", "c/ch10/guide/s10-circadian"]]
      }
    },
    {
      id: "sleepwalking",
      ask: [
        ["A1", "“What happens during the episodes? Does the person walk around with a blank stare and is hard to wake?”", "Ask a witness."],
        ["Timing", "“How long after falling asleep? How often?”", "First third of the night."],
        ["B–C", "“Do you remember anything? Any dream?”", "Little or no recall."],
        ["Special forms", "“Any eating or sexual behavior during episodes?”"],
        ["Triggers", "“Sleep loss, stress, fever, alcohol, sleeping pills?”"],
        ["Onset", "“Did it start in childhood? Anyone in the family sleepwalk?”", "Adult onset needs a work-up."],
        ["Safety", "“Any injuries, leaving the house, driving?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Safety (locked doors and windows, alarms, ground-floor bedroom), regular sufficient sleep, and avoiding triggers such as **sleep deprivation, alcohol and Z-drugs**.",
        points: ["Treat OSA or other triggers; scheduled awakenings in children with predictable episodes.", "Medication (e.g., a benzodiazepine) is reserved for frequent dangerous episodes under specialist care.", "Stop [[stahl:drugs/zolpidem|zolpidem]] if it causes complex sleep behaviors."],
        stahl: [["GABA-A hypnotics", "c/ch10/guide/s10-gaba-hypnotics"]]
      }
    },
    {
      id: "sleep-terrors",
      ask: [
        ["A2", "“Does your child sit up screaming, sweating and wide-eyed, and can’t be comforted?”"],
        ["Timing", "“How soon after falling asleep? How often?”"],
        ["B–C", "“Does your child remember it in the morning? Any dream?”", "Amnesia; no storylike dream."],
        ["Family", "“Did anyone in the family have night terrors or sleepwalk?”"],
        ["Triggers", "“Fever, missed sleep, stress?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Reassurance and education**: do not try to wake or restrain the child; keep them safe; ensure enough sleep.",
        points: ["Scheduled awakenings before the usual time can help frequent episodes.", "Most children outgrow it; refer if episodes are frequent, injurious, or start in adulthood."],
        stahl: []
      }
    },
    {
      id: "nightmare",
      ask: [
        ["A", "“Do you have long, frightening dreams that you remember clearly? What are they about?”"],
        ["B", "“When you wake from them, are you quickly fully awake?”", "Unlike sleep terrors."],
        ["Severity", "“How many nights a week?”", "Mild <1/week; moderate ≥1/week; severe nightly."],
        ["Trauma", "“Did they start after something frightening happened? Do they replay it?”", "PTSD."],
        ["Movement", "“Do you shout or move in your sleep, or hurt your partner?”", "Consider RBD."],
        ["D Substances", "“Any new medicines (beta-blockers, antidepressants, melatonin), or stopping alcohol or antidepressants?”"],
        ["Safety", "“Do the nightmares make you feel hopeless or think about dying?”", "Frequent nightmares raise suicide risk."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Imagery rehearsal therapy** (rewriting the nightmare and rehearsing the new version) and CBT for nightmares are first line.",
        points: ["Treat underlying PTSD with trauma-focused psychotherapy.", "[[stahl:drugs/prazosin|Prazosin]] is used for trauma-related nightmares; trial evidence is mixed.", "Review drugs that cause nightmares."],
        stahl: [["Prazosin", "drugs/prazosin"]]
      }
    },
    {
      id: "rbd",
      ask: [
        ["A", "“Do you shout, punch, kick or fall out of bed while dreaming?”", "Ask the bed partner."],
        ["B", "“Does it happen later in the night?”"],
        ["C", "“When woken, are you immediately alert? Do you remember the dream?”", "Dream matches the behavior."],
        ["D", "Arrange PSG with video and arm EMG; ask about Parkinson’s disease or dementia.", "REM sleep without atonia."],
        ["E Injury", "“Have you or your partner been hurt?”"],
        ["F Medications", "“Are you on an antidepressant?”", "SSRIs, SNRIs, TCAs."],
        ["Prodrome", "“Any loss of smell, constipation, dizziness on standing, slowness or memory change?”", "Synucleinopathy markers."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Make the bedroom safe** (remove sharp objects, pad the floor, partner sleeps apart), then melatonin or clonazepam.",
        points: ["Review serotonergic antidepressants.", "Discuss the long-term **neurodegeneration risk** honestly and arrange neurological follow-up; offer research participation where available.", "Clonazepam caution: falls, confusion and OSA in older adults."],
        stahl: []
      }
    },
    {
      id: "rls",
      ask: [
        ["A", "“Do you get an urge to move your legs, often with an uncomfortable feeling in them?”", "Children: legs “have to” move, in their own words."],
        ["A1", "“Is it brought on by sitting or lying still?”"],
        ["A2", "“Does walking or moving ease it?”"],
        ["A3", "“Is it worse in the evening or at night?”"],
        ["B", "“How many times a week, and for how long?”", "≥3 times a week for ≥3 months."],
        ["D–E", "“Cramps? Joint pain? Does one change of position fix it? On an antipsychotic or antidepressant?”", "Akathisia, cramps, positional discomfort."],
        ["Causes", "Check ferritin and transferrin saturation; ask about pregnancy and kidney disease."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Check **iron studies** and replace iron when low; **alpha-2-delta ligands** ([[stahl:drugs/gabapentin|gabapentin]], gabapentin enacarbil, [[stahl:drugs/pregabalin|pregabalin]]) are first-line drugs (AASM 2024).",
        points: ["The AASM 2024 guideline advises **against standard use** of dopamine agonists (pramipexole, ropinirole, rotigotine) because of **augmentation**.", "Review serotonergic antidepressants, sedating antihistamines and dopamine antagonists, which worsen RLS; [[stahl:drugs/bupropion|bupropion]] is less likely to.", "Low-dose opioids for refractory RLS under specialist care.", "Pregnancy-related RLS usually resolves after delivery; iron first."],
        stahl: [["Gabapentin", "drugs/gabapentin"], ["Pregabalin", "drugs/pregabalin"]]
      }
    },
    {
      id: "substance-induced-sleep",
      ask: [
        ["A", "“What exactly has changed in your sleep?”", "Insomnia, sleepiness, parasomnia or mixed."],
        ["B1 Timing", "“When did it start relative to starting, increasing or stopping the drug, drink or medicine?”"],
        ["B2", "Is the substance known to cause this? Check the class."],
        ["C", "“Did you have the sleep problem before? Does it persist a month after stopping?”", "Suggests an independent disorder."],
        ["D", "Check attention and orientation.", "Exclude delirium."],
        ["Use disorder", "Screen for a use disorder: it changes the code (1, 2 or 9)."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Remove, reduce or retime the culprit (e.g., caffeine after noon, a morning dose of bupropion or an SSRI) and treat any use disorder.",
        points: ["Alcohol: sleep may stay broken for months after withdrawal and predicts relapse; CBT-I helps; avoid benzodiazepines beyond detoxification.", "Stop Z-drugs that cause complex sleep behaviors.", "Stimulant withdrawal hypersomnia usually settles within weeks."],
        stahl: [["Caffeine and stimulants", "c/ch10/guide/s10-caffeine-stimulants"]]
      }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "sleep", title: "Sleeping too much or too little",
      ask: ["How many hours in bed, how many asleep? On work days and free days?", "Snoring, breathing pauses, leg restlessness, unusual behaviors at night?", "Sudden weakness when laughing?"],
      mustNotMiss: ["**Suicide risk**: insomnia and nightmares raise it independently.", "**Drowsy driving**."],
      helpers: ["sleep"],
      items: [
        { ch: "ch12", dx: "insomnia", when: "Dissatisfied with sleep, ≥3 nights a week for ≥3 months, despite opportunity; may coexist with depression." },
        { ch: "ch12", dx: "hypersomnolence", when: "Sleepy despite ≥7 hours of sleep, long unrefreshing sleep or sleep inertia." },
        { ch: "ch12", dx: "narcolepsy", when: "Sleep attacks with cataplexy, hypnagogic hallucinations or sleep paralysis." },
        { ch: "ch12", dx: "osa", when: "Snoring, witnessed pauses and daytime sleepiness." },
        { ch: "ch12", dx: "circadian-delayed", when: "Cannot sleep before the small hours but sleeps well when allowed to sleep late." },
        { ch: "ch12", dx: "substance-induced-sleep", when: "Began with caffeine, alcohol, stimulants, withdrawal or a new medicine." }
      ]
    },
    {
      id: "snoring", title: "Snoring or stopping breathing in sleep",
      intro: "Loud snoring with witnessed pauses and daytime sleepiness suggests obstructive sleep apnea, which is common, mostly undiagnosed and treatable. Diagnosis needs a sleep study.",
      ask: ["Does anyone see you stop breathing or gasp?", "Are you sleepy, tired or unrefreshed by day? Morning headaches?", "Weight, blood pressure, heart failure, opioid use?"],
      mustNotMiss: ["**Drowsy driving** and commercial drivers.", "**Sedatives and opioids** worsening breathing.", "Heart failure with **Cheyne-Stokes** breathing."],
      helpers: ["sleep"],
      items: [
        { ch: "ch12", dx: "osa", when: "AHI ≥5 with symptoms, or ≥15 regardless." },
        { ch: "ch12", dx: "csa", when: "Central apneas with heart failure, stroke or long-acting opioids." },
        { ch: "ch12", dx: "sleep-hypoventilation", when: "Sustained desaturation and high CO₂ with lung, neuromuscular disease or obesity." },
        { ch: "ch05", dx: "panic-disorder", when: "Waking choking in panic, with daytime panic attacks and a normal sleep study." }
      ]
    },
    {
      id: "night-behaviors", title: "Strange behavior, screaming or bad dreams at night",
      intro: "Timing in the night, how easily the person wakes and whether they recall a dream sort most nighttime events: NREM arousals early with amnesia, nightmares and REM sleep behavior disorder later with vivid recall.",
      ask: ["How long after falling asleep? How many times a night?", "Easy to wake? Confused? Remembers a dream?", "Acting out dreams, injuries?", "New medicines, alcohol, trauma?"],
      mustNotMiss: ["**Nocturnal seizures**: stereotyped, several a night.", "**REM sleep behavior disorder** as an early sign of Parkinson’s disease or Lewy body dementia.", "**Injury** to self or bed partner."],
      helpers: ["parasomnia"],
      items: [
        { ch: "ch12", dx: "sleepwalking", when: "Walks about early in the night, blank stare, hard to wake, no memory." },
        { ch: "ch12", dx: "sleep-terrors", when: "Child screams in terror early in the night, inconsolable, amnesic." },
        { ch: "ch12", dx: "nightmare", when: "Vivid frightening dreams later in the night, fully alert on waking." },
        { ch: "ch12", dx: "rbd", when: "Older adult punching and shouting while dreaming; REM without atonia." },
        { ch: "ch07", dx: "ptsd", when: "Trauma-related nightmares with intrusions, avoidance and hyperarousal." },
        { ch: "ch12", dx: "substance-induced-sleep", when: "Complex sleep behaviors on a Z-drug; RBD on an SSRI; nightmares on a beta-blocker." }
      ]
    },
    {
      id: "leg-restlessness", title: "Restless legs at night",
      intro: "An urge to move the legs at rest that is worse in the evening and relieved by movement is restless legs syndrome; in a patient on an antipsychotic, think of akathisia.",
      ask: ["Urge to move, brought on by rest, eased by moving, worse in the evening?", "How often and for how long?", "Antipsychotic or antidepressant? Pregnant? Kidney disease? Iron deficiency?"],
      mustNotMiss: ["**Akathisia** from a dopamine-blocking drug.", "**Iron deficiency**."],
      helpers: ["sleep"],
      items: [
        { ch: "ch12", dx: "rls", when: "All three urge features, ≥3 times a week for ≥3 months, with distress." },
        { ch: "ch12", dx: "insomnia", when: "Trouble sleeping without the urge to move the legs." },
        { ch: "ch05", dx: "gad", when: "Restlessness from worry and tension, not focused on the legs." }
      ]
    },
    {
      id: "fatigue", title: "Fatigue or low energy",
      items: [
        { ch: "ch12", dx: "osa", when: "Snoring, pauses, unrefreshing sleep; women often describe fatigue rather than sleepiness." },
        { ch: "ch12", dx: "hypersomnolence", when: "True sleepiness despite ≥7 hours of sleep." }
      ]
    }
  ]);
})();
