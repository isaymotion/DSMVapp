/* Disorder library: Chapter 18, Personality Disorders (DSM-5-TR pp. 733–778).
   Schizotypal personality disorder (schizotypal-pd) lives in disorders-ch02.js, where it is also listed. */
SP.disorders = (SP.disorders || []).concat([
  {
    id: "general-pd", ch: "ch18", sec: "s18-general", pages: "734–737", critPages: "734–735",
    name: "General personality disorder (criteria)", code: "No code", aka: ["personality disorder", "general criteria"],
    essence: "The criteria every personality disorder must meet: an **enduring, inflexible, pervasive** pattern in at least two of cognition, affectivity, interpersonal functioning and impulse control, from **adolescence or early adulthood**, causing distress or impairment.",
    duration: "Stable, long-standing; under 18 at least 1 year (never antisocial)",
    functioning: "Distress or impairment required",
    mood: "Traits are often ego-syntonic",
    criteria: [
      ["A", "Pattern deviating from cultural expectations in two or more of cognition, affectivity, interpersonal functioning, impulse control."],
      ["B", "Inflexible and pervasive."],
      ["C", "Distress or impairment."],
      ["D", "Stable; onset by adolescence or early adulthood."],
      ["E", "Not better explained by another mental disorder."],
      ["F", "Not due to a substance or medical condition."]
    ],
    specifiers: ["“(Premorbid)” when a Cluster A disorder preceded schizophrenia"],
    epi: [["Any personality disorder", "Median 10.5%"], ["Cluster A", "3.6%"], ["Cluster B", "4.5%"], ["Cluster C", "2.8%"]],
    risk: ["Varies by disorder.", "Late-life personality change suggests a medical or substance cause."],
    differential: [
      { id: "personality-change-amc", how: "A change from baseline due to a medical condition." },
      { id: "mdd", how: "Cross-sectional features during an episode can mimic traits." },
      { id: "ptsd", how: "Personality changes emerging after extreme stress." },
      { name: "Substance use disorders", how: "Behavior from intoxication, withdrawal or sustaining use." }
    ],
    pearls: ["Assess the long-term pattern, often over several interviews.", "Use informants.", "Diagnose all personality disorders that are met."],
    cmp: { symptoms: "Enduring pattern in ≥2 of 4 areas", exclusions: "Other mental disorder, substance, medical condition", prevalence: "10.5% any PD", course: "Stable from adolescence or early adulthood" },
    clues: [["Four areas", "Cognition, affectivity, interpersonal, impulse control"], ["Age rule", "Under 18: ≥1 year; antisocial never"]]
  },
  {
    id: "paranoid-pd", ch: "ch18", sec: "s18-paranoid", pages: "737–741", critPages: "737–738",
    name: "Paranoid personality disorder", code: "F60.0", aka: ["paranoid PD", "Cluster A"],
    essence: "Pervasive **distrust and suspiciousness**: others’ motives are interpreted as **malevolent**, with grudges, counterattacks and jealousy, short of delusion.",
    duration: "From early adulthood",
    functioning: "Hostile, litigious, poor collaboration",
    mood: "Hostile, stubborn, sarcastic; labile",
    criteria: [
      ["A", "Pervasive distrust and suspiciousness, four or more of seven: suspects harm; doubts loyalty; won’t confide; hidden meanings; grudges; perceives attacks and counterattacks; suspects partner’s fidelity."],
      ["B", "Not only during psychosis or a mood disorder with psychotic features; not due to a medical condition."]
    ],
    specifiers: ["“(Premorbid)” if it preceded schizophrenia"],
    epi: [["Median prevalence", "3.2% (NCS-R 2.3%, NESARC 4.4%)"], ["Forensic", "Up to 23%"], ["Sex", "Mixed findings"]],
    risk: ["Childhood trauma; social stressors (inequality, racism).", "Familial link with schizophrenia and delusional disorder, persecutory type."],
    differential: [
      { id: "delusional-disorder", how: "Persistent persecutory delusions." },
      { id: "schizotypal-pd", how: "Adds magical thinking, odd perceptions and speech." },
      { id: "schizoid-pd", how: "Aloof without paranoid ideation." },
      { id: "avoidant-pd", how: "Won’t confide from fear of embarrassment." },
      { id: "antisocial-pd", how: "Antisocial acts for gain, not revenge." },
      { name: "Hearing impairment, discrimination", how: "Adaptive or reactive mistrust." }
    ],
    pearls: ["Litigious and jealous.", "Brief psychotic episodes under stress.", "Watch for cultural mistrust."],
    cmp: { symptoms: "Suspicion, grudges, hidden meanings, jealousy", exclusions: "Psychotic disorders, medical causes", prevalence: "3.2%", course: "Stable; may precede delusional disorder" },
    clues: [["Core picture", "Sues neighbors, won’t confide, reads a compliment as an insult, questions his wife’s fidelity"], ["Code", "F60.0"]]
  },
  {
    id: "schizoid-pd", ch: "ch18", sec: "s18-schizoid", pages: "741–744", critPages: "741–742",
    name: "Schizoid personality disorder", code: "F60.1", aka: ["schizoid PD", "loner"],
    essence: "Pervasive **detachment** from relationships with **no desire** for intimacy and a **restricted range** of emotional expression.",
    duration: "From early adulthood",
    functioning: "Few relationships; may work well in isolation",
    mood: "Constricted affect; rarely strong emotion",
    criteria: [
      ["A", "Detachment and restricted affect, four or more of seven: no desire for relationships; solitary; little sexual interest; few pleasures; no close friends; indifferent to praise or criticism; coldness."],
      ["B", "Not only during psychosis, a mood disorder with psychotic features or autism; not due to a medical condition."]
    ],
    specifiers: ["“(Premorbid)” if it preceded schizophrenia"],
    epi: [["Median prevalence", "1.3% (NCS-R 4.9%, NESARC 3.1%)"], ["Clinical", "Uncommon"]],
    risk: ["More prevalent in relatives of people with schizophrenia or schizotypal PD."],
    differential: [
      { id: "avoidant-pd", how: "Wants relationships; fears rejection." },
      { id: "schizotypal-pd", how: "Cognitive-perceptual distortions." },
      { id: "paranoid-pd", how: "Suspiciousness." },
      { id: "ocpd", how: "Detachment from work devotion; capacity for intimacy." },
      { name: "Autism spectrum disorder", how: "Stereotyped behaviors and interests." }
    ],
    pearls: ["No wish for closeness.", "“Emotional freezing” in migrants is not schizoid PD."],
    cmp: { symptoms: "Detached, solitary, cold, indifferent", exclusions: "Psychosis, autism, medical", prevalence: "1.3%", course: "Stable" },
    clues: [["Core picture", "A night-shift analyst with no wish for friends or partners, unmoved by praise or criticism"], ["Code", "F60.1"]]
  },
  {
    id: "antisocial-pd", ch: "ch18", sec: "s18-antisocial", pages: "748–752", critPages: "748",
    name: "Antisocial personality disorder", code: "F60.2", aka: ["ASPD", "psychopathy", "sociopathy", "dyssocial personality disorder"],
    essence: "Pervasive **disregard for and violation of others’ rights** since **age 15**, in someone **at least 18** with **conduct disorder before 15**.",
    duration: "Since age 15; diagnosed only at ≥18",
    functioning: "Crime, unemployment, failed relationships, imprisonment",
    mood: "Dysphoria, boredom intolerance; callous, cynical",
    criteria: [
      ["A", "Three or more of seven since age 15: unlawful acts; deceitfulness; impulsivity; irritability and aggression; reckless disregard for safety; irresponsibility; lack of remorse."],
      ["B", "At least age 18."],
      ["C", "Conduct disorder with onset before age 15."],
      ["D", "Not only during schizophrenia or bipolar disorder."]
    ],
    specifiers: [],
    epi: [["Median prevalence", "3.6% (NCS-R 0.6%, NESARC 3.6%)"], ["Severe AUD, prisons", ">70%"], ["Sex", "About 3:1 men"], ["Course", "Often remits by 40"]],
    risk: ["Child abuse or neglect, erratic parenting, inconsistent discipline.", "Childhood-onset conduct disorder (before 10) with ADHD.", "Familial; relatives have more substance use and somatization."],
    differential: [
      { name: "Conduct disorder", how: "Under 18, or after 18 only if antisocial PD is not met." },
      { name: "Substance use disorder", how: "Antisocial acts only in service of use, without childhood onset." },
      { id: "bipolar-i", how: "Antisocial acts only during mania." },
      { id: "narcissistic-pd", how: "No impulsivity, aggression or deceit; needs admiration." },
      { id: "borderline-pd", how: "Manipulates for nurturance; more emotionally unstable." },
      { name: "Adult antisocial behavior", how: "Crime without the personality features (Z72.811)." }
    ],
    pearls: ["Never before 18.", "Conduct disorder before 15 is required.", "Use collateral information.", "Premature death from natural causes and suicide."],
    cmp: { symptoms: "Unlawful, deceitful, impulsive, aggressive, reckless, irresponsible, remorseless", exclusions: "Schizophrenia or bipolar episodes only", prevalence: "3.6%", course: "Chronic; remits by 40" },
    clues: [["Core picture", "Fraud, assaults, aliases and unpaid child support, with fights and theft since age 12"], ["Code", "F60.2"]]
  },
  {
    id: "borderline-pd", ch: "ch18", sec: "s18-borderline", pages: "752–757", critPages: "752–753",
    name: "Borderline personality disorder", code: "F60.3", aka: ["BPD", "emotionally unstable personality disorder"],
    essence: "Pervasive **instability** of relationships, self-image and affect, with marked **impulsivity**: abandonment fear, idealization–devaluation, self-harm, emptiness and anger.",
    duration: "From early adulthood (can meet criteria at 12–13)",
    functioning: "Job losses, interrupted education, divorce",
    mood: "Reactive dysphoria lasting hours; anger, panic, despair",
    criteria: [
      ["", "Five or more of nine: frantic efforts to avoid abandonment; unstable intense relationships; identity disturbance; impulsivity in two areas; recurrent suicidal behavior or self-mutilation; affective instability; chronic emptiness; intense anger; transient stress-related paranoia or dissociation."]
    ],
    specifiers: [],
    epi: [["Median prevalence", "2.7% (NCS-R 1.4%, NESARC 5.9%)"], ["Settings", "≈6% primary care, 10% outpatient, 20% inpatient"], ["Sex", "Equal in community"], ["Suicide", "≈6% over 24 years (inpatients)"]],
    risk: ["About 5 times more common in first-degree relatives.", "Childhood abuse, neglect, conflict, early parental loss (sexual abuse neither necessary nor sufficient)."],
    differential: [
      { id: "bipolar-ii", how: "Distinct episodes of days with decreased need for sleep." },
      { id: "mdd", how: "Do not diagnose borderline from a cross-section during an episode." },
      { id: "histrionic-pd", how: "No self-destructiveness, rage or emptiness." },
      { id: "dependent-pd", how: "Appeasement and replacement rather than rage." },
      { id: "antisocial-pd", how: "Manipulates for profit, not care." },
      { id: "separation-anxiety", how: "Abandonment fear without identity and impulsivity problems." },
      { name: "Identity problem", how: "Developmental, not a disorder." }
    ],
    pearls: ["Self-harm counts only under Criterion 5.", "Remissions are common; impulsivity remits first.", "Psychotic-like symptoms last minutes to hours."],
    cmp: { symptoms: "Abandonment fear, splitting, identity, impulsivity, self-harm, mood reactivity, emptiness, anger, stress paranoia", exclusions: "Cross-sectional mood episode", prevalence: "2.7%; 20% inpatients", course: "Frequent remission; recovery harder" },
    clues: [["Core picture", "Cutting after breakups, rage when her partner is late, hours-long mood shifts, feeling empty"], ["Code", "F60.3"]]
  },
  {
    id: "histrionic-pd", ch: "ch18", sec: "s18-histrionic", pages: "757–760", critPages: "757",
    name: "Histrionic personality disorder", code: "F60.4", aka: ["histrionic PD", "hysterical personality"],
    essence: "Pervasive **excessive emotionality and attention seeking**: center stage, seductive, theatrical, shallow, suggestible.",
    duration: "From early adulthood",
    functioning: "Impairment lower than most PDs; mainly romantic and interpersonal",
    mood: "Rapidly shifting, shallow emotion",
    criteria: [
      ["", "Five or more of eight: needs to be center of attention; seductive; shallow shifting emotions; uses appearance; impressionistic speech; theatricality; suggestible; overestimates intimacy."]
    ],
    specifiers: [],
    epi: [["Median prevalence", "0.9% (NCS-R 0.0%, NESARC 1.8%)"], ["Sex", "Similar in structured studies"]],
    risk: ["Associated with somatic symptom and functional neurological disorders."],
    differential: [
      { id: "borderline-pd", how: "Self-destructiveness, rage, emptiness." },
      { id: "narcissistic-pd", how: "Wants admiration for superiority." },
      { id: "antisocial-pd", how: "Manipulates for gain; antisocial acts." },
      { id: "dependent-pd", how: "Not flamboyant." }
    ],
    pearls: ["Impressionistic speech without detail.", "Calls a new doctor by first name.", "Suicidal gestures and threats."],
    cmp: { symptoms: "Attention seeking, seductive, theatrical, shallow", exclusions: "—", prevalence: "0.9%", course: "Stable" },
    clues: [["Core picture", "Flirts with staff, calls her husband magnificent without examples, cries and laughs within a minute"], ["Code", "F60.4"]]
  },
  {
    id: "narcissistic-pd", ch: "ch18", sec: "s18-narcissistic", pages: "760–764", critPages: "760",
    name: "Narcissistic personality disorder", code: "F60.81", aka: ["NPD", "narcissism"],
    essence: "Pervasive **grandiosity**, **need for admiration** and **lack of empathy**, over **fragile** self-esteem.",
    duration: "From early adulthood",
    functioning: "From high-achieving to very low vocational functioning",
    mood: "Shame, envy, emptiness after criticism; rage or withdrawal",
    criteria: [
      ["", "Five or more of nine: grandiose self-importance; fantasies of success; believes they are special; needs admiration; entitlement; exploitative; lacks empathy; envious; arrogant."]
    ],
    specifiers: [],
    epi: [["Median prevalence", "1.6% (NCS-R 0.0%, NESARC 6.2%)"], ["Sex", "50%–75% men"]],
    risk: ["May present after crises (bankruptcy, demotion, divorce) or with aging.", "Narcissistic traits common in adolescents without predicting the disorder."],
    differential: [
      { id: "histrionic-pd", how: "Any attention, even appearing fragile." },
      { id: "antisocial-pd", how: "Impulsive aggression, deceit, conduct disorder history." },
      { id: "borderline-pd", how: "Unstable self-image, self-destructive." },
      { id: "ocpd", how: "Self-critical perfectionism about order." },
      { id: "bipolar-i", how: "Grandiosity with mood episodes." },
      { id: "pdd", how: "Diagnose both if both met." }
    ],
    pearls: ["Fragile self-esteem.", "Cognitive but not emotional empathy.", "Suicide attempts less impulsive, more lethal."],
    cmp: { symptoms: "Grandiose, entitled, exploitative, unempathic, envious", exclusions: "Mania", prevalence: "1.6%", course: "Can improve with real achievement and durable relationships" },
    clues: [["Core picture", "A surgeon who demands the top lawyer, takes credit for residents’ work and rages after mild criticism"], ["Code", "F60.81"]]
  },
  {
    id: "avoidant-pd", ch: "ch18", sec: "s18-avoidant", pages: "764–768", critPages: "764–765",
    name: "Avoidant personality disorder", code: "F60.6", aka: ["avoidant PD", "anxious personality disorder"],
    essence: "Pervasive **social inhibition**, **feelings of inadequacy** and **hypersensitivity to negative evaluation**, despite **wanting** relationships.",
    duration: "From early adulthood",
    functioning: "Restricted social and occupational life",
    mood: "Anxious, lonely, low self-esteem",
    criteria: [
      ["", "Four or more of seven: avoids jobs with interpersonal contact; involved only if certain of being liked; restrained in intimacy; preoccupied with criticism; inhibited in new situations; feels inferior; avoids risks and new activities."]
    ],
    specifiers: [],
    epi: [["Median prevalence", "2.1% (NCS-R 5.2%, NESARC 2.4%)"], ["Over 65", "0.8%"], ["Sex", "Slightly more in women"]],
    risk: ["Childhood shyness that increases in adolescence.", "May remit with age."],
    differential: [
      { id: "social-anxiety", how: "Overlap; avoidant PD has more entrenched inferiority." },
      { id: "schizoid-pd", how: "No wish for relationships." },
      { id: "dependent-pd", how: "Seeks proximity rather than avoiding." },
      { id: "agoraphobia", how: "Fear of panic or harm." },
      { id: "paranoid-pd", how: "Fear of malice." }
    ],
    pearls: ["Wants closeness but fears rejection.", "Use caution in children and adolescents."],
    cmp: { symptoms: "Inhibited, inadequate, rejection-sensitive", exclusions: "—", prevalence: "2.1%", course: "May remit with age" },
    clues: [["Core picture", "Declines a promotion to avoid meetings, tests friends before trusting them, longs for a partner"], ["Code", "F60.6"]]
  },
  {
    id: "dependent-pd", ch: "ch18", sec: "s18-dependent", pages: "768–771", critPages: "768",
    name: "Dependent personality disorder", code: "F60.7", aka: ["dependent PD"],
    essence: "Pervasive, excessive **need to be taken care of**, with **submissive, clinging** behavior and fear of separation.",
    duration: "From early adulthood",
    functioning: "Avoids responsibility and independent initiative",
    mood: "Pessimism, self-doubt",
    criteria: [
      ["", "Five or more of eight: needs reassurance for decisions; others take responsibility; can’t disagree; can’t initiate; excessive lengths for nurturance; helpless alone; urgently seeks a new relationship; fears being left to care for self."]
    ],
    specifiers: [],
    epi: [["Median prevalence", "0.4% (NCS-R 0.6%, NESARC 0.5%)"], ["Sex", "Diagnosed more in women"]],
    risk: ["Chronic physical illness or separation anxiety disorder in childhood."],
    differential: [
      { id: "borderline-pd", how: "Rage and emptiness rather than appeasement." },
      { id: "histrionic-pd", how: "Flamboyant, demanding." },
      { id: "avoidant-pd", how: "Withdraws until certain of acceptance." },
      { id: "separation-anxiety", how: "Fear for others’ safety." },
      { id: "mdd", how: "Dependency arising during depression." }
    ],
    pearls: ["Exclude realistic fear of retribution.", "Dependency must exceed medical need and cultural norms."],
    cmp: { symptoms: "Submissive, clinging, can’t decide or disagree", exclusions: "Dependency due to other disorders", prevalence: "0.4%", course: "—" },
    clues: [["Core picture", "Calls his mother to choose lunch; moves in with a new partner two weeks after a breakup"], ["Code", "F60.7"]]
  },
  {
    id: "ocpd", ch: "ch18", sec: "s18-ocpd", pages: "771–775", critPages: "771–772",
    name: "Obsessive-compulsive personality disorder", code: "F60.5", aka: ["OCPD", "anankastic personality", "compulsive personality"],
    essence: "Pervasive preoccupation with **orderliness, perfectionism and control** at the expense of flexibility, openness and efficiency.",
    duration: "From early adulthood",
    functioning: "Missed deadlines, strained relationships",
    mood: "Controlled, stilted emotion; indirect anger",
    criteria: [
      ["", "Four or more of eight: preoccupied with details; perfectionism blocking completion; devotion to work over leisure; overconscientious about morality; can’t discard objects; won’t delegate; miserly; rigid and stubborn."]
    ],
    specifiers: [],
    epi: [["Median prevalence", "4.7% (NCS-R 2.4%, NESARC 7.9%)"], ["Sex", "Equal"]],
    risk: ["More likely with anxiety disorders and OCD.", "Overlaps with type A traits."],
    differential: [
      { id: "ocd", how: "True obsessions and compulsions; both can be diagnosed." },
      { id: "hoarding", how: "Extreme hoarding; both can be diagnosed." },
      { id: "narcissistic-pd", how: "Believes they have achieved perfection." },
      { id: "schizoid-pd", how: "Lacks capacity for intimacy." }
    ],
    pearls: ["Most people with OCD do not have OCPD.", "Moderate traits can be adaptive."],
    cmp: { symptoms: "Perfectionism, rigidity, workaholism, miserliness", exclusions: "—", prevalence: "4.7% (highest)", course: "Stable" },
    clues: [["Core picture", "An engineer who misses deadlines perfecting reports, won’t delegate and keeps broken appliances"], ["Code", "F60.5"]]
  },
  {
    id: "personality-change-amc", ch: "ch18", sec: "s18-change-amc", pages: "775–778", critPages: "775–776",
    name: "Personality change due to another medical condition", code: "F07.0", aka: ["organic personality disorder", "frontal lobe syndrome"],
    essence: "A persistent **change** from previous personality that is the **direct pathophysiological** consequence of a medical condition.",
    duration: "Persistent; in children ≥1 year",
    functioning: "Distress or impairment required",
    mood: "Lability, apathy, aggression, disinhibition, suspiciousness",
    criteria: [
      ["A", "Persistent change from previous personality (children: ≥1 year)."],
      ["B", "Evidence of direct pathophysiological cause."],
      ["C", "Not better explained by another mental disorder."],
      ["D", "Not only during delirium."],
      ["E", "Distress or impairment."]
    ],
    specifiers: ["Labile", "Disinhibited", "Aggressive", "Apathetic", "Paranoid", "Other", "Combined", "Unspecified"],
    epi: [["Prevalence", "Reflects the underlying condition"]],
    risk: ["CNS tumors, head trauma, stroke, Huntington’s disease, epilepsy, HIV, endocrine disorders, lupus."],
    differential: [
      { id: "general-pd", how: "Onset by early adulthood without medical cause." },
      { name: "Adjustment to disability", how: "Psychological reaction, not direct cause." },
      { name: "Delirium", how: "Change only during delirium." },
      { name: "Major neurocognitive disorder", how: "Can be added if the change is prominent." }
    ],
    pearls: ["Code the medical condition first.", "Frontal: facetious, disinhibited, euphoric.", "“Not himself.”"],
    cmp: { symptoms: "Change from baseline personality", exclusions: "Delirium; other disorders", prevalence: "—", course: "Follows the medical condition" },
    clues: [["Core picture", "A reserved man who becomes crude and impulsive after frontal head injury"], ["Code", "Medical code first, then F07.0"]]
  },
  {
    id: "other-specified-pd", ch: "ch18", sec: "s18-other", pages: "778", critPages: "778",
    name: "Other specified personality disorder", code: "F60.89", aka: ["mixed personality features", "passive-aggressive personality disorder"],
    essence: "Personality disorder symptoms that cause distress or impairment and predominate, without full criteria for a specific disorder, with the **reason recorded**.",
    duration: "Enduring",
    functioning: "Distress or impairment required",
    mood: "Varies",
    criteria: [["", "Examples: **mixed personality features**; a personality disorder not in DSM-5 (e.g., **passive-aggressive**)."]],
    specifiers: [],
    epi: [["Prevalence", "Not established"]],
    risk: ["Varies."],
    differential: [{ id: "unspecified-pd", how: "Reason not given." }],
    pearls: ["Record the reason after the name."],
    cmp: { symptoms: "Subthreshold or mixed", exclusions: "Specific PDs", prevalence: "—", course: "—" },
    clues: [["Code", "F60.89"]]
  },
  {
    id: "unspecified-pd", ch: "ch18", sec: "s18-other", pages: "778", critPages: "778",
    name: "Unspecified personality disorder", code: "F60.9", aka: [],
    essence: "Personality disorder symptoms without full criteria, when the clinician does **not** specify the reason or information is insufficient.",
    duration: "—",
    functioning: "Distress or impairment required",
    mood: "Varies",
    criteria: [["", "Reason not specified, or insufficient information."]],
    specifiers: [],
    epi: [["Prevalence", "Not established"]],
    risk: ["—"],
    differential: [{ id: "other-specified-pd", how: "Use when the reason can be stated." }],
    pearls: ["Gather collateral and reassess."],
    cmp: { symptoms: "Insufficient information", exclusions: "—", prevalence: "—", course: "—" },
    clues: [["Code", "F60.9"]]
  }
]);
SP.comparePresets = (SP.comparePresets || []).concat([
  { label: "Borderline PD vs bipolar II disorder", ids: ["borderline-pd", "bipolar-ii"] },
  { label: "Schizoid vs avoidant PD", ids: ["schizoid-pd", "avoidant-pd"] },
  { label: "Schizoid vs schizotypal PD", ids: ["schizoid-pd", "schizotypal-pd"] },
  { label: "Avoidant PD vs social anxiety disorder", ids: ["avoidant-pd", "social-anxiety"] },
  { label: "OCPD vs OCD", ids: ["ocpd", "ocd"] },
  { label: "Borderline vs dependent PD", ids: ["borderline-pd", "dependent-pd"] },
  { label: "Histrionic vs narcissistic PD", ids: ["histrionic-pd", "narcissistic-pd"] },
  { label: "Antisocial vs narcissistic PD", ids: ["antisocial-pd", "narcissistic-pd"] },
  { label: "Paranoid PD vs delusional disorder", ids: ["paranoid-pd", "delusional-disorder"] }
]);
