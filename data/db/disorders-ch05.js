/* Disorder library: Chapter 5, Anxiety Disorders (DSM-5-TR pp. 215–261).
   The panic attack specifier has its own entry (code "Not coded") so it can be compared and searched. */
SP.disorders = (SP.disorders || []).concat([
  {
    id: "separation-anxiety", ch: "ch05", sec: "s5-sad-criteria", pages: "217–222", critPages: "217",
    name: "Separation anxiety disorder", code: "F93.0", aka: ["separation anxiety", "SAD (separation anxiety disorder)"],
    essence: "Developmentally inappropriate, excessive fear of **separation from attachment figures**, with **3 of 8** symptoms, for **≥4 weeks** in youth and **typically ≥6 months** in adults.",
    duration: "**≥4 weeks** under 18; **typically ≥6 months** in adults",
    functioning: "Distress or impairment: school refusal, limited independence, work reorganized around contact",
    mood: "Sadness or withdrawal when separated; may become depressed",
    criteria: [
      ["A", "Excessive fear about separation with **≥3 of 8**:", ["Distress at separation", "Worry about losing or harm to attachment figures", "Worry about an untoward event causing separation", "Refusal to go out", "Fear of being alone", "Refusal to sleep away or alone", "Separation nightmares", "Physical complaints at separation"]],
      ["B", "**≥4 weeks** in children and adolescents; **typically ≥6 months** in adults."],
      ["C", "Clinically significant distress or impairment."],
      ["D", "Not better explained by autism, psychosis, agoraphobia, GAD or illness anxiety disorder."]
    ],
    specifiers: [],
    epi: [["Prevalence", "Children ≈4%; US adolescents 1.6%; US adults 0.9%–1.9%"], ["Sex", "Girls more often in the community (school age); women more often in adults"], ["Onset", "Preschool onward; adult onset possible"], ["Heritability", "≈73% (6-year-old twins)"]],
    risk: ["Life stress, especially loss: death, illness, change of school, divorce, moving, immigration, disaster.", "Being bullied.", "Parental overprotection and intrusiveness.", "Family aggregation; CO₂ hypersensitivity."],
    differential: [
      { id: "gad", how: "GAD has many excessive worries, not only about separation." },
      { id: "panic-disorder", how: "Panic disorder has unexpected attacks; here attacks come with anticipated separation." },
      { id: "agoraphobia", how: "Agoraphobia fears being trapped without help, not being away from attachment figures." },
      { id: "social-anxiety", how: "School refusal from fear of judgment, not separation." },
      { id: "conduct-disorder", how: "Truancy without anxiety; the child stays away from home." },
      { name: "Illness anxiety disorder", how: "Worry about one’s own illness, not loved ones’ safety." },
      { name: "Dependent personality disorder", how: "Indiscriminate reliance on others rather than fear for specific attachment figures." },
      { name: "Prolonged grief disorder", how: "Yearning for someone who has died, not fear of possible separation." }
    ],
    pearls: ["Adults can have it with no childhood history.", "The 4-week rule applies only under 18.", "Night-time misperceptions vanish when the attachment figure arrives: not psychosis.", "Most affected children are free of impairing anxiety disorders later in life."],
    cmp: { symptoms: "3 of 8 separation symptoms", exclusions: "Autism, psychosis, agoraphobia, GAD, illness anxiety", prevalence: "≈4% (children); 0.9%–1.9% (US adults)", course: "Waxes and wanes; most children recover" },
    clues: [["Core picture", "A child who vomits on school mornings, sleeps on the parents’ floor and phones home from school, well at weekends"], ["Threshold", "3 of 8 symptoms; 4 weeks in youth"], ["Code", "F93.0"]]
  },
  {
    id: "selective-mutism", ch: "ch05", sec: "s5-sm", pages: "222–224", critPages: "222",
    name: "Selective mutism", code: "F94.0", aka: ["elective mutism"],
    essence: "**Consistent failure to speak** in social situations where speech is expected (school), **despite speaking elsewhere** (home), for **≥1 month**, not limited to the first month of school.",
    duration: "**≥1 month**, not limited to the first month of school",
    functioning: "Interferes with educational or occupational achievement or social communication",
    mood: "High social anxiety; shyness, clinging, sometimes oppositional",
    criteria: [
      ["A", "Consistent failure to speak where speech is expected, despite speaking in other situations."],
      ["B", "Interferes with achievement or social communication."],
      ["C", "**≥1 month**, not limited to the first month of school."],
      ["D", "Not due to lack of knowledge of, or comfort with, the language."],
      ["E", "Not a communication disorder; not only during autism or a psychotic disorder."]
    ],
    specifiers: [],
    epi: [["Prevalence", "0.03%–1.9% (clinic and school samples)"], ["Sex", "Roughly equal; some evidence of more girls"], ["Onset", "Usually before 5; noticed at school entry"], ["Higher risk", "Children who must speak a non-native language"]],
    risk: ["Behavioral inhibition and negative affectivity.", "Parental shyness, social anxiety; overprotective or controlling parenting.", "Subtle receptive language weaknesses (within normal range).", "Shared genetics with social anxiety disorder."],
    differential: [
      { name: "Silent period (second-language learning)", how: "Normal; refusal to speak both languages despite comprehension would be needed." },
      { name: "Communication disorders", how: "Speech problems are not restricted to particular social situations." },
      { name: "Autism spectrum disorder or psychosis", how: "Selective mutism needs an established capacity to speak in some settings." },
      { id: "social-anxiety", how: "Commonly comorbid; both can be diagnosed." }
    ],
    pearls: ["The first month of school never counts.", "Nearly always comes with another anxiety disorder, usually social anxiety.", "Mutism may fade, but social anxiety often remains."],
    cmp: { symptoms: "No speech where expected, speech elsewhere", exclusions: "Language unfamiliarity; communication disorders; autism or psychosis", prevalence: "0.03%–1.9%", course: "Onset <5; often fades, social anxiety persists" },
    clues: [["Core picture", "A 6-year-old silent at school for months who chats at home"], ["Exclusion", "Not the silent period of a new language"], ["Code", "F94.0"]]
  },
  {
    id: "specific-phobia", ch: "ch05", sec: "s5-phobia-criteria", pages: "224–229", critPages: "224–225",
    name: "Specific phobia", code: "F40.2xx", codeNote: "code each stimulus type present",
    codes: [
      ["F40.218", "Specific phobia, animal", "Spiders, insects, dogs"],
      ["F40.228", "Specific phobia, natural environment", "Heights, storms, water"],
      ["F40.230", "Blood-injection-injury: fear of blood", ""],
      ["F40.231", "Blood-injection-injury: fear of injections and transfusions", ""],
      ["F40.232", "Blood-injection-injury: fear of other medical care", ""],
      ["F40.233", "Blood-injection-injury: fear of injury", ""],
      ["F40.248", "Specific phobia, situational", "Airplanes, elevators, enclosed places"],
      ["F40.298", "Specific phobia, other", "Choking, vomiting; in children loud sounds or costumed characters"]
    ],
    aka: ["simple phobia", "phobia", "fear of flying", "fear of needles", "claustrophobia", "acrophobia"],
    essence: "Marked fear of a **circumscribed object or situation** that **almost always** provokes **immediate** fear, is avoided or endured, is out of proportion, and lasts **typically ≥6 months**.",
    duration: "**Typically ≥6 months**",
    functioning: "Distress or impairment; grows with the number of feared stimuli",
    mood: "Sympathetic arousal; vasovagal fainting in blood-injection-injury type",
    criteria: [
      ["A", "Marked fear of a specific object or situation (children: crying, tantrums, freezing, clinging)."],
      ["B", "**Almost always** provokes **immediate** fear."],
      ["C", "Actively avoided or endured with intense fear."],
      ["D", "Out of proportion to danger and sociocultural context."],
      ["E", "**Criteria E–F.** Typically **≥6 months**; distress or impairment."],
      ["G", "Not better explained by agoraphobia, OCD, PTSD, separation anxiety or social anxiety disorder."]
    ],
    specifiers: ["Stimulus type: animal; natural environment; blood-injection-injury; situational; other (code each type present)"],
    epi: [["12-month prevalence (US)", "8%–12%; adolescents ≈16%"], ["Elsewhere", "Europe ≈6%; Asia, Africa, Latin America 2%–4%"], ["Sex", "2:1 female; BII about equal"], ["Onset", "Median 7–11; situational later"]],
    risk: ["Traumatic or observed events, unexpected panic in the situation, informational transmission.", "Parental overprotection, loss, separation, abuse.", "Type-specific heritability: animal 32%, BII 33%, situational 25%."],
    differential: [
      { id: "agoraphobia", how: "Two or more agoraphobic situations, feared because escape or help may be unavailable." },
      { id: "social-anxiety", how: "Situations feared because of negative evaluation." },
      { id: "panic-disorder", how: "Unexpected panic attacks as well." },
      { id: "ocd", how: "Fear driven by obsessions (contamination, harming)." },
      { name: "PTSD", how: "Follows trauma with full PTSD criteria." },
      { id: "arfid", how: "Avoidance limited to food and food cues (or anorexia nervosa if driven by weight)." }
    ],
    pearls: ["Code every type present: 75% fear more than one stimulus.", "Blood-injection-injury phobia faints (vasovagal).", "Adult phobias rarely remit.", "Linked with the transition from suicidal thoughts to attempts."],
    cmp: { symptoms: "Immediate fear of a circumscribed stimulus", exclusions: "Agoraphobia, OCD, PTSD, separation and social anxiety", prevalence: "8%–12% (US)", course: "Childhood onset; persistent if it lasts into adulthood" },
    clues: [["Core picture", "A nursing student who faints at every blood draw and skips vaccinations"], ["Coding", "One code per stimulus type"], ["Physiology", "Vasovagal in BII; sympathetic in the others"]]
  },
  {
    id: "social-anxiety", ch: "ch05", sec: "s5-social-criteria", pages: "229–235", critPages: "229–230",
    name: "Social anxiety disorder", code: "F40.10", aka: ["social phobia", "social anxiety", "performance anxiety", "stage fright"],
    essence: "Marked fear of social situations involving **possible scrutiny**, because of fear of **negative evaluation**, almost always provoked, avoided or endured, out of proportion, **typically ≥6 months**; in children, with **peers**.",
    duration: "**Typically ≥6 months**",
    functioning: "Distress or impairment: school dropout, lower employment and income, fewer close relationships",
    mood: "Blushing (hallmark), trembling, sweating; depression often follows",
    criteria: [
      ["A", "Fear of social situations with possible scrutiny: interaction, observation, performance (children: with **peers**)."],
      ["B", "Fear of acting or showing anxiety in a way that will be **negatively evaluated**."],
      ["C", "**Criteria C–E.** Almost always provoked; avoided or endured; out of proportion."],
      ["F", "**Criteria F–G.** Typically **≥6 months**; distress or impairment."],
      ["H", "**Criteria H–J.** Not due to a substance or medical condition; not better explained by panic disorder, BDD or autism; with a medical condition, fear clearly unrelated or excessive."]
    ],
    specifiers: ["**Performance only**: fear restricted to speaking or performing in public"],
    epi: [["12-month prevalence (US)", "≈7%"], ["Elsewhere", "0.5%–2.0%; Europe median 2.3%"], ["Sex", "Women 1.5–2.2×; equal or more men in clinics"], ["Onset", "Median 13; 75% between 8 and 15"]],
    risk: ["Behavioral inhibition, fear of negative evaluation, high neuroticism, low extraversion.", "Peer victimization; childhood maltreatment; discrimination.", "First-degree relatives 2–6× risk."],
    differential: [
      { name: "Normative shyness", how: "Only 12% of shy people meet criteria." },
      { id: "agoraphobia", how: "Fear of being trapped without help; often anxious when alone." },
      { id: "panic-disorder", how: "Attacks come out of the blue, not only in social situations." },
      { id: "gad", how: "Worries about relationships and nonsocial performance, evaluated or not." },
      { id: "bdd", how: "Social fears solely from appearance beliefs → BDD only." },
      { name: "Avoidant personality disorder", how: "Broader avoidance and a pervasive negative self-concept." },
      { id: "asd", how: "Social communication deficits are core." },
      { id: "mdd", how: "Fear of evaluation from feeling worthless." }
    ],
    pearls: ["In children the anxiety must occur with peers.", "Performance only = no fear of nonperformance situations.", "People wait 15–20 years before seeking treatment.", "Taijin kyofusho: fear of offending or discomforting others."],
    cmp: { symptoms: "Fear of scrutiny and negative evaluation", exclusions: "Panic disorder, BDD, autism; substance or medical cause", prevalence: "≈7% (US)", course: "Adolescent onset; often persistent in clinical samples" },
    clues: [["Core picture", "A resident who swaps every presentation slot and eats lunch alone so no one sees his hands shake"], ["Specifier", "Performance only"], ["Code", "F40.10"]]
  },
  {
    id: "panic-disorder", ch: "ch05", sec: "s5-panic-criteria", pages: "235–242", critPages: "235–236",
    name: "Panic disorder", code: "F41.0", aka: ["panic", "anxiety attacks"],
    essence: "**Recurrent unexpected panic attacks**, with at least one followed by **≥1 month** of worry about more attacks or their consequences, or **maladaptive behavior change**.",
    duration: "**≥1 month** of worry or behavior change after an attack",
    functioning: "High disability; the most medical visits of any anxiety disorder",
    mood: "Fear of dying, heart attack, losing control or going crazy",
    criteria: [
      ["A", "**Recurrent unexpected** panic attacks (4 of 13 symptoms, peak within minutes)."],
      ["B", "≥1 attack followed by **≥1 month** of persistent worry and/or maladaptive behavior change."],
      ["C", "Not due to a substance or medical condition."],
      ["D", "Not better explained by another disorder (attacks not only with social situations, phobic objects, obsessions, trauma reminders or separation)."]
    ],
    specifiers: [],
    epi: [["12-month prevalence", "2%–3% (US and Europe)"], ["Sex", "≈2:1 female"], ["Onset", "US median 20–24; mean 34.7; rare <14 or >55"], ["Comorbidity", "80% lifetime"]],
    risk: ["Anxiety sensitivity, negative affectivity, behavioral inhibition, fearful spells.", "Stressors before the first attack; trauma; smoking.", "Parental anxiety, depressive or bipolar disorders; CO₂ hypersensitivity; asthma."],
    differential: [
      { id: "anxiety-due-to-amc", how: "Hyperthyroidism, hyperparathyroidism, pheochromocytoma, vestibular, seizure or cardiopulmonary disease; onset after 45 or atypical symptoms." },
      { id: "substance-induced-anxiety", how: "Stimulant, caffeine or cannabis intoxication; alcohol or sedative withdrawal." },
      { id: "social-anxiety", how: "Attacks only in feared social situations." },
      { id: "specific-phobia", how: "Attacks only with the phobic stimulus." },
      { id: "other-specified-anxiety", how: "Only limited-symptom unexpected attacks." }
    ],
    pearls: ["Half also have expected attacks; that does not exclude the diagnosis.", "Add agoraphobia separately if two situations are feared.", "Red flags: onset after 45; vertigo, syncope, incontinence, slurred speech, amnesia.", "Never add the “with panic attacks” specifier to panic disorder."],
    cmp: { symptoms: "Recurrent unexpected attacks + 1 month of worry or avoidance", exclusions: "Substance, medical condition; cued-only attacks", prevalence: "2%–3%", course: "Chronic, waxing and waning; relapse common" },
    clues: [["Core picture", "A young woman with repeated out-of-the-blue attacks and normal ECGs who now avoids exercise and checks her pulse"], ["Key word", "Unexpected"], ["Code", "F41.0"]]
  },
  {
    id: "panic-attack", ch: "ch05", sec: "s5-panic-attack", pages: "242–246", critPages: "242",
    name: "Panic attack (specifier)", code: "Not coded", aka: ["with panic attacks", "panic attack specifier"],
    essence: "An **abrupt surge** of intense fear or discomfort that **peaks within minutes**, with **4 of 13** symptoms. A specifier added to any disorder, not a diagnosis.",
    duration: "Peaks **within minutes**",
    functioning: "Marks greater severity, comorbidity and poorer treatment response",
    mood: "Intense fear or discomfort",
    criteria: [
      ["A", "Abrupt surge, peak within minutes, from a calm or anxious state, with **≥4 of 13**:", ["Palpitations", "Sweating", "Trembling", "Shortness of breath", "Choking", "Chest pain", "Nausea", "Dizziness or faintness", "Chills or heat", "Paresthesias", "Derealization or depersonalization", "Fear of losing control or going crazy", "Fear of dying"]],
      ["B", "Culture-specific symptoms (tinnitus, neck soreness, headache, screaming or crying) do not count."]
    ],
    specifiers: ["Recorded as “[disorder] with panic attacks”; not used with panic disorder"],
    epi: [["12-month prevalence", "9.5%–11.2% (adults)"], ["Lifetime", "13.2% cross-nationally"], ["Onset", "Mean 22–23 (US)"], ["Children", "Rare before puberty"]],
    risk: ["Negative affectivity, anxiety sensitivity, behavioral inhibition, harm avoidance.", "Smoking; stressors; separation from parents, overprotective or rejecting parenting.", "COPD with low perceived control."],
    differential: [
      { name: "Anger or grief attacks", how: "The surge is of anger or grief, not fear." },
      { id: "anxiety-due-to-amc", how: "Medical causes such as pheochromocytoma or arrhythmia." },
      { id: "substance-induced-anxiety", how: "Stimulants, caffeine, cannabis; depressant withdrawal." },
      { id: "panic-disorder", how: "Recurrent unexpected attacks are necessary but not sufficient." }
    ],
    pearls: ["11 physical, 2 cognitive symptoms.", "Fewer than 4 = limited-symptom attack.", "Expected vs unexpected is judged by the clinician.", "Nocturnal attacks are unexpected."],
    cmp: { symptoms: "4 of 13 symptoms, peak within minutes", exclusions: "Anger or grief paroxysms", prevalence: "9.5%–11.2% (12-month)", course: "Follows the co-occurring disorder" },
    clues: [["Core picture", "Sudden pounding heart, sweating and terror peaking in 5 minutes"], ["Use", "Add “with panic attacks” to PTSD, depression, other anxiety disorders"], ["Code", "None"]]
  },
  {
    id: "agoraphobia", ch: "ch05", sec: "s5-agora-criteria", pages: "246–250", critPages: "246",
    name: "Agoraphobia", code: "F40.00", aka: ["fear of leaving home"],
    essence: "Fear of **2 of 5** situations (transport, open spaces, enclosed places, lines or crowds, outside alone) because **escape or help** may be unavailable if panic-like or embarrassing symptoms occur, **typically ≥6 months**.",
    duration: "**Typically ≥6 months**",
    functioning: "Can be homebound; disability tracks severity independent of panic",
    mood: "Demoralization and depression common; self-medication with alcohol or sedatives",
    criteria: [
      ["A", "Fear of **≥2 of 5**: public transport, open spaces, enclosed places, lines or crowds, outside the home alone."],
      ["B", "Because **escape might be difficult** or **help unavailable** if panic-like, incapacitating or embarrassing symptoms occur."],
      ["C", "**Criteria C–E.** Almost always provoked; avoided, requires a companion, or endured; out of proportion."],
      ["F", "**Criteria F–G.** Typically **≥6 months**; distress or impairment."],
      ["H", "**Criteria H–I.** With a medical condition, clearly excessive; not better explained by another disorder."]
    ],
    specifiers: ["Diagnosed irrespective of panic disorder; if both are met, code both"],
    epi: [["12-month prevalence", "1%–1.7%"], ["Sex", "2:1 female"], ["Onset", "Mean 21; 25–29 without prior panic; second peak after 40"], ["Heritability", "61%"]],
    risk: ["Behavioral inhibition, anxiety sensitivity, trait anxiety.", "Childhood adversity; being attacked or mugged; low warmth, overprotection.", "Family history of panic disorder."],
    differential: [
      { id: "specific-phobia", how: "Only one agoraphobic situation, or fear of direct harm." },
      { id: "separation-anxiety", how: "Fear of being away from attachment figures." },
      { id: "social-anxiety", how: "Fear of being judged." },
      { id: "panic-disorder", how: "Avoidance not extending to two situations → panic disorder alone." },
      { id: "mdd", how: "Staying home from apathy, not fear." },
      { name: "PTSD", how: "Fear only of trauma reminders." }
    ],
    pearls: ["Does not require panic attacks.", "Panic disorder + agoraphobia = two codes.", "Untreated complete remission ≈10%; relapse ≈36%.", "Older adults fear falling."],
    cmp: { symptoms: "2 of 5 situations; escape or help unavailable", exclusions: "Single situational phobia; social, obsessional, trauma or separation fears", prevalence: "1%–1.7%", course: "Chronic; rare remission untreated" },
    clues: [["Core picture", "A man who will not ride the train or shop alone in case he collapses with no way out"], ["Threshold", "2 of 5 situations"], ["Code", "F40.00"]]
  },
  {
    id: "gad", ch: "ch05", sec: "s5-gad-criteria", pages: "250–255", critPages: "250–251",
    name: "Generalized anxiety disorder", code: "F41.1", aka: ["GAD", "chronic worry"],
    essence: "Excessive, **hard-to-control** worry about **a number of** things, **more days than not** for **≥6 months**, with **3 of 6** symptoms (1 in children).",
    duration: "**≥6 months**, more days than not",
    functioning: "Moderate to serious disability in most; 110 million disability days a year in the US",
    mood: "Apprehensive expectation; tension; less autonomic arousal than panic",
    criteria: [
      ["A", "Excessive anxiety and worry, more days than not, **≥6 months**, about a number of events or activities."],
      ["B", "Difficult to control."],
      ["C", "**≥3 of 6** (1 in children):", ["Restlessness or on edge", "Easily fatigued", "Poor concentration or mind blank", "Irritability", "Muscle tension", "Sleep disturbance"]],
      ["D", "Distress or impairment."],
      ["E", "**Criteria E–F.** Not due to a substance or medical condition; not better explained by another disorder’s focused worry."]
    ],
    specifiers: [],
    epi: [["12-month prevalence (US)", "Adults 2.9%; adolescents 0.9%"], ["Lifetime morbid risk", "9% (US)"], ["Sex", "≥2:1 female"], ["Onset", "Mean 35, latest of the anxiety disorders"]],
    risk: ["Behavioral inhibition, neuroticism, harm avoidance, attentional bias to threat.", "Childhood adversity; overprotective, overcontrolling parenting.", "One-third genetic, shared with MDD."],
    differential: [
      { id: "anxiety-due-to-amc", how: "Pheochromocytoma, hyperthyroidism." },
      { id: "substance-induced-anxiety", how: "Anxiety only with heavy caffeine use = caffeine-induced." },
      { id: "social-anxiety", how: "Worry only about being evaluated." },
      { id: "separation-anxiety", how: "Worry only about separation." },
      { name: "Illness anxiety disorder", how: "The only fear is one’s own illness." },
      { id: "ocd", how: "Intrusive, unwanted thoughts, not worry about real future problems." },
      { name: "Adjustment disorder", how: "Within 3 months of a stressor; residual category." }
    ],
    pearls: ["Children need only 1 of 6 symptoms.", "Full remission is very rare.", "Most frequent anxiety disorder in psychological autopsies of suicide.", "Can be added to depression if severe enough."],
    cmp: { symptoms: "Hard-to-control worry + 3 of 6", exclusions: "Focused worries of other disorders; substance or medical cause", prevalence: "2.9% (US adults)", course: "Chronic, waxing and waning" },
    clues: [["Core picture", "A bookkeeper who has worried about everything for years, tense and sleeping badly"], ["Threshold", "6 months, 3 of 6 (1 in children)"], ["Code", "F41.1"]]
  },
  {
    id: "substance-induced-anxiety", ch: "ch05", sec: "s5-substance", pages: "255–258", critPages: "255–256",
    name: "Substance/medication-induced anxiety disorder", code: "By substance", codeNote: "4th character: 1 mild use disorder, 2 moderate/severe, 9 none",
    codes: [
      ["F10.180 / F10.280 / F10.980", "Alcohol-induced anxiety disorder", "With mild / moderate-severe / no use disorder"],
      ["F15.980", "Caffeine-induced anxiety disorder", "Only the “no use disorder” code exists"],
      ["F12.180 / F12.280 / F12.980", "Cannabis-induced", ""],
      ["F16.180 / F16.280 / F16.980", "Phencyclidine- or other hallucinogen-induced", ""],
      ["F18.180 / F18.280 / F18.980", "Inhalant-induced", ""],
      ["F11.188 / F11.288 / F11.988", "Opioid-induced", "Note the .x88 ending"],
      ["F13.180 / F13.280 / F13.980", "Sedative-, hypnotic- or anxiolytic-induced", ""],
      ["F15.180 / F15.280 / F15.980", "Amphetamine-type (or other stimulant)-induced", ""],
      ["F14.180 / F14.280 / F14.980", "Cocaine-induced", ""],
      ["F19.180 / F19.280 / F19.980", "Other (or unknown) substance-induced", "E.g., salbutamol"]
    ],
    aka: ["drug-induced anxiety", "caffeine-induced anxiety", "medication-induced anxiety"],
    essence: "Panic or anxiety that **predominates** and began **during or soon after** intoxication, withdrawal or medication exposure, from a substance able to cause it, without evidence of an independent anxiety disorder.",
    duration: "Persistence **≈1 month** after stopping suggests an independent disorder",
    functioning: "Distress or impairment; severe enough for clinical attention on its own",
    mood: "Panic attacks or prominent anxiety",
    criteria: [
      ["A", "Panic attacks or anxiety predominate."],
      ["B", "Onset during or soon after intoxication, withdrawal or medication exposure; the substance can cause it."],
      ["C", "Not an independent anxiety disorder (preceded use; persists ≈1 month; recurrent non-substance episodes)."],
      ["D", "**Criteria D–E.** Not only during delirium; distress or impairment."]
    ],
    specifiers: ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"],
    epi: [["Prevalence", "≈0.002% (US general population); higher in clinics"]],
    risk: ["Intoxication: alcohol, caffeine, cannabis, hallucinogens, PCP, inhalants, stimulants.", "Withdrawal: alcohol, opioids, sedatives, stimulants.", "Medications: bronchodilators, steroids, thyroid hormone, insulin, and others.", "Toxins: carbon monoxide, organophosphates, heavy metals."],
    differential: [
      { name: "Intoxication or withdrawal alone", how: "Usually suffices unless anxiety predominates." },
      { id: "panic-disorder", how: "Attacks before use or long after it." },
      { id: "anxiety-due-to-amc", how: "The illness, not its treatment, causes the anxiety; both can be given." },
      { name: "Delirium", how: "Anxiety only during delirium is not diagnosed separately." }
    ],
    pearls: ["The use disorder is folded into the code, not diagnosed separately.", "Caffeine: F15.980 only.", "Opioids end in .x88.", "Unclassified drugs (salbutamol) use F19.x80."],
    cmp: { symptoms: "Panic or anxiety tied to a substance", exclusions: "Independent anxiety disorder; delirium", prevalence: "Rare in the community", course: "Improves within days to a month after stopping" },
    clues: [["Core picture", "Panic during alcohol withdrawal, or anxiety only during heavy coffee drinking"], ["Coding", "F1x.x80 (opioids .x88)"], ["Time rule", "≈1 month persistence suggests independence"]]
  },
  {
    id: "anxiety-due-to-amc", ch: "ch05", sec: "s5-medical", pages: "258–261", critPages: "258–259",
    name: "Anxiety disorder due to another medical condition", code: "F06.4",
    codes: [["F06.4", "Anxiety disorder due to [medical condition]", "Code the medical condition first (e.g., D35.00 pheochromocytoma)"]],
    aka: ["organic anxiety disorder", "secondary anxiety"],
    essence: "Prominent anxiety or panic that is the **direct physiological consequence** of a medical condition, shown by history, examination or laboratory findings.",
    duration: "Follows the course of the medical condition",
    functioning: "Distress or impairment",
    mood: "Prominent physical symptoms (e.g., shortness of breath)",
    criteria: [
      ["A", "Panic attacks or anxiety predominate."],
      ["B", "Evidence of a direct pathophysiological consequence of a medical condition."],
      ["C", "Not better explained by another mental disorder (especially adjustment disorder)."],
      ["D", "**Criteria D–E.** Not only during delirium; distress or impairment."]
    ],
    specifiers: [],
    epi: [["Prevalence", "Unclear"], ["Clues", "Late onset, atypical symptoms, no personal or family history"]],
    risk: ["Endocrine: hyperthyroidism, pheochromocytoma, hypoglycemia, hyperadrenocortisolism.", "Cardiopulmonary: heart failure, pulmonary embolism, arrhythmia, COPD, asthma, pneumonia.", "Metabolic: B12 deficiency, porphyria.", "Neurological: tumors, vestibular dysfunction, encephalitis, seizures."],
    differential: [
      { name: "Adjustment disorder with anxiety", how: "Reaction to the meaning or consequences of being ill." },
      { id: "substance-induced-anxiety", how: "The medication (steroids, estrogens, metoclopramide) rather than the illness." },
      { id: "panic-disorder", how: "No demonstrable physiological mechanism." },
      { name: "Illness anxiety disorder", how: "Worry about illness without a physiological link." },
      { name: "Delirium", how: "Anxiety only during delirium is not diagnosed separately." }
    ],
    pearls: ["Code the medical condition first.", "Can be added to a neurocognitive disorder caused by the same pathology.", "Anxiety that raises cardiac risk is not anxiety due to the heart disease."],
    cmp: { symptoms: "Anxiety or panic from a medical condition", exclusions: "Delirium; adjustment disorder; substance cause", prevalence: "Unclear", course: "Follows the illness" },
    clues: [["Core picture", "Paroxysms of headache, sweating, palpitations and hypertension in a 52-year-old"], ["Recording", "D35.00 pheochromocytoma; F06.4"], ["Code", "F06.4"]]
  },
  {
    id: "other-specified-anxiety", ch: "ch05", sec: "s5-other", pages: "261", critPages: "261",
    name: "Other specified anxiety disorder", code: "F41.8",
    essence: "Impairing anxiety that does not meet any anxiety disorder or adjustment disorder, with the **reason recorded**.",
    duration: "Varies",
    functioning: "Clinically significant distress or impairment",
    mood: "Predominant anxiety symptoms",
    criteria: [
      ["", "Examples: **limited-symptom attacks**; **generalized anxiety less often than more days than not**; **khyâl cap**; **ataque de nervios**."]
    ],
    specifiers: [],
    epi: [],
    risk: [],
    differential: [
      { id: "unspecified-anxiety", how: "Reason not recorded or information insufficient." },
      { name: "Adjustment disorder with anxiety", how: "Stressor-related anxiety; must be ruled out first." }
    ],
    pearls: ["Record the reason after the name.", "Cultural syndromes that fit no other disorder go here."],
    cmp: { symptoms: "Subthreshold anxiety, reason recorded", exclusions: "Any specific anxiety disorder; adjustment disorder", prevalence: "—", course: "Varies" },
    clues: [["Example", "Only limited-symptom attacks, or GAD-like worry one day in three"], ["Code", "F41.8"]]
  },
  {
    id: "unspecified-anxiety", ch: "ch05", sec: "s5-other", pages: "261", critPages: "261",
    name: "Unspecified anxiety disorder", code: "F41.9",
    essence: "Impairing anxiety that does not meet criteria for a specific disorder, when the clinician **does not specify** the reason or lacks information (e.g., the emergency department).",
    duration: "Varies",
    functioning: "Clinically significant distress or impairment",
    mood: "Predominant anxiety symptoms",
    criteria: [["", "Anxiety predominates; criteria for a specific anxiety disorder or adjustment disorder are not met; reason not given or information insufficient."]],
    specifiers: [],
    epi: [],
    risk: [],
    differential: [{ id: "other-specified-anxiety", how: "Use when the reason can be stated." }],
    pearls: ["Common in emergency settings.", "May suit mixed anxiety and depression in older adults."],
    cmp: { symptoms: "Anxiety, reason not given", exclusions: "Specific anxiety disorders; adjustment disorder", prevalence: "—", course: "Varies" },
    clues: [["Example", "An anxious patient in the emergency department with too little history"], ["Code", "F41.9"]]
  }
]);

SP.comparePresets = (SP.comparePresets || []).concat([
  { label: "Panic disorder vs agoraphobia", ids: ["panic-disorder", "agoraphobia"] },
  { label: "Social anxiety vs agoraphobia", ids: ["social-anxiety", "agoraphobia"] },
  { label: "Specific phobia vs agoraphobia", ids: ["specific-phobia", "agoraphobia"] },
  { label: "GAD vs MDD", ids: ["gad", "mdd"] },
  { label: "Separation anxiety vs GAD", ids: ["separation-anxiety", "gad"] },
  { label: "Panic attack vs panic disorder", ids: ["panic-attack", "panic-disorder"] },
  { label: "Substance-induced vs medically caused anxiety", ids: ["substance-induced-anxiety", "anxiety-due-to-amc"] }
]);

SP.timeLadders = (SP.timeLadders || []).concat([
  { type: "ladder", title: "Chapter 5: anxiety disorders", ticks: [[4, "min"], [22, "1 mo"], [38, "3 mo"], [55, "6 mo"]], rows: [
    { label: "Panic attack", dx: "panic-attack", from: 0, to: 4, color: "case", span: "Peak within minutes" },
    { label: "Separation anxiety disorder (under 18)", dx: "separation-anxiety", from: 22, to: 100, color: "guide", open: true, span: "≥4 weeks" },
    { label: "Selective mutism", dx: "selective-mutism", from: 22, to: 100, color: "guide", open: true, span: "≥1 month (not the first month of school)" },
    { label: "Panic disorder, Criterion B", dx: "panic-disorder", from: 22, to: 100, color: "drug", open: true, span: "≥1 month" },
    { label: "Separation anxiety disorder (adults)", dx: "separation-anxiety", from: 55, to: 100, color: "hy", open: true, span: "Typically ≥6 months" },
    { label: "Specific phobia · social anxiety · agoraphobia", dx: "specific-phobia", from: 55, to: 100, color: "mech", open: true, span: "Typically ≥6 months" },
    { label: "Generalized anxiety disorder", dx: "gad", from: 55, to: 100, color: "drug", open: true, span: "≥6 months" }
  ], note: "Substance-induced: persistence ≈1 month after stopping suggests an independent disorder. Adjustment disorder: within 3 months of a stressor, resolving within 6 months after it ends." }
]);
