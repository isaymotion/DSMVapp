/* Disorder library: Chapter 6, Obsessive-Compulsive and Related Disorders (DSM-5-TR pp. 263–294). */
SP.disorders = (SP.disorders || []).concat([
  {
    id: "ocd", ch: "ch06", sec: "s6-ocd-criteria", pages: "265–271", critPages: "265–266",
    name: "Obsessive-compulsive disorder", code: "F42.2", aka: ["OCD"],
    essence: "**Obsessions** (intrusive, unwanted thoughts, urges or images the person tries to neutralize) and/or **compulsions** (repetitive acts driven by obsessions or rigid rules), **time-consuming (>1 hour a day)** or causing distress or impairment.",
    duration: "No minimum; time-consuming (e.g., **>1 hour a day**) or distressing",
    functioning: "Distress or impairment, or more than an hour a day",
    mood: "Anxiety, disgust, sense of incompleteness; depression common",
    criteria: [
      ["A", "Obsessions, compulsions or both.", ["Obsessions: recurrent, intrusive, unwanted thoughts, urges or images; attempts to ignore, suppress or neutralize", "Compulsions: repetitive behaviors or mental acts driven by an obsession or rigid rules; unrealistic or clearly excessive"]],
      ["B", "Time-consuming (e.g., >1 hour a day) or distress or impairment."],
      ["C", "Not due to a substance or medical condition."],
      ["D", "Not better explained by another disorder (GAD, BDD, hoarding, BFRBs, eating, psychosis, MDD rumination, autism and others)."]
    ],
    specifiers: ["Insight: good or fair; poor; absent insight/delusional beliefs", "Tic-related"],
    epi: [["12-month prevalence (US)", "1.2%"], ["Sex", "Slightly more women in adults; more boys in childhood"], ["Onset", "Mean 19.5; 25% by 14; men earlier"], ["Heritability", "≈40%; relatives 2× (10× if childhood onset)"]],
    risk: ["Behavioral inhibition, negative emotionality.", "Perinatal adversity, prematurity, maternal smoking, childhood abuse, trauma; postinfectious onset in children.", "Familial and genetic loading; orbitofrontal-striatal circuits."],
    differential: [
      { id: "gad", how: "Worries about real-life problems, without compulsions." },
      { id: "mdd", how: "Mood-congruent rumination, not intrusive, no compulsions." },
      { id: "bdd", how: "Preoccupation limited to appearance." },
      { id: "hoarding", how: "Saving because items feel useful or precious, not because of obsessions." },
      { name: "Tic disorders", how: "Preceded by premonitory urges, not obsessions; both can be diagnosed." },
      { name: "Obsessive-compulsive personality disorder", how: "Pervasive perfectionism and control without obsessions or rituals; both can be diagnosed." },
      { id: "delusional-disorder", how: "No obsessions or compulsions; delusional OCD beliefs take the absent insight specifier." }
    ],
    pearls: ["Obsessions are unwanted; pleasurable urges are not obsessions.", "Absent insight ≠ psychosis.", "Up to 30% have a lifetime tic disorder.", "Screen for OCD in schizophrenia (≈12%), bipolar, eating disorders and Tourette’s."],
    cmp: { symptoms: "Obsessions and/or compulsions", exclusions: "Focused preoccupations of other disorders; substance or medical cause", prevalence: "1.2% (US)", course: "Chronic, waxing and waning; 20% remit untreated over 40 years" },
    clues: [["Core picture", "A student 2 hours late each day from checking stove knobs to stop a fire she pictures"], ["Threshold", ">1 hour a day or distress"], ["Code", "F42.2"]]
  },
  {
    id: "bdd", ch: "ch06", sec: "s6-bdd-criteria", pages: "271–277", critPages: "271–272",
    name: "Body dysmorphic disorder", code: "F45.22", aka: ["BDD", "dysmorphophobia", "muscle dysmorphia"],
    essence: "Preoccupation with perceived **appearance flaws not observable or slight** to others, with **repetitive behaviors or mental acts** (checking, comparing, camouflaging), causing distress or impairment.",
    duration: "No minimum; preoccupation averages 3–8 hours a day",
    functioning: "Nearly always impaired; school dropout, housebound",
    mood: "Shame, depression, social anxiety; high suicidality",
    criteria: [
      ["A", "Preoccupation with perceived flaws not observable or slight to others."],
      ["B", "Repetitive behaviors or mental acts at some point."],
      ["C", "Distress or impairment."],
      ["D", "Not better explained by fat or weight concerns in an eating disorder."]
    ],
    specifiers: ["With muscle dysmorphia", "Insight: good or fair; poor; absent insight/delusional beliefs"],
    epi: [["Point prevalence (US)", "2.4% (women 2.5%, men 2.2%)"], ["Cosmetic settings", "Rhinoplasty 20%; cosmetic surgery 13%–15%; dermatology 11%–13%"], ["Onset", "Most common 12–13; two-thirds before 18"], ["Heritability", "37%–49%"]],
    risk: ["Childhood neglect, abuse, trauma and teasing.", "Family history of OCD; shared genetics with OCD."],
    differential: [
      { id: "ocd", how: "Obsessions not limited to appearance; better insight." },
      { id: "excoriation", how: "Picking without an appearance motive." },
      { id: "trichotillomania", how: "Pulling without an appearance motive." },
      { id: "social-anxiety", how: "Fear of evaluation not tied to perceived ugliness." },
      { id: "delusional-disorder", how: "Delusional appearance beliefs are BDD with absent insight." },
      { id: "other-specified-ocrd", how: "Clearly visible flaws, no repetitive behaviors, or body odor (olfactory reference disorder)." },
      { name: "Eating disorders", how: "Weight and fat concerns belong to the eating disorder; both can coexist." },
      { name: "Gender dysphoria", how: "Distress about sex characteristics." }
    ],
    pearls: ["One-third or more have delusional conviction.", "Cosmetic procedures rarely help.", "Suicidal thoughts ≈4×, attempts ≈2.6×.", "Picking or plucking to look better = BDD."],
    cmp: { symptoms: "Appearance preoccupation + repetitive acts", exclusions: "Eating disorder weight concerns; visible defects", prevalence: "2.4% (US)", course: "Adolescent onset; chronic without treatment" },
    clues: [["Core picture", "A young man who checks his “crooked” nose in every window and has seen three surgeons"], ["Specifier", "Muscle dysmorphia; insight"], ["Code", "F45.22"]]
  },
  {
    id: "hoarding", ch: "ch06", sec: "s6-hoard-criteria", pages: "277–281", critPages: "277",
    name: "Hoarding disorder", code: "F42.3", aka: ["compulsive hoarding"],
    essence: "Persistent **difficulty discarding** possessions regardless of value, from a **perceived need to save** and distress at discarding, so that **active living areas** are cluttered and unusable.",
    duration: "Persistent; symptoms from 15–19, impairing by the mid-30s",
    functioning: "Distress or impairment, including an unsafe home",
    mood: "Distress at discarding; depression and anxiety common",
    criteria: [
      ["A", "Persistent difficulty discarding, regardless of actual value."],
      ["B", "Perceived need to save and distress at discarding."],
      ["C", "Clutter compromises active living areas (or clear only because of third parties)."],
      ["D", "Distress or impairment, including safety."],
      ["E", "**Criteria E–F.** Not due to a medical condition; not better explained by OCD, MDD, psychosis, neurocognitive disorder or autism."]
    ],
    specifiers: ["With excessive acquisition", "Insight: good or fair; poor; absent insight/delusional beliefs"],
    epi: [["Point prevalence", "1.5%–6%; meta-analysis 2.5%"], ["Sex", "No difference in the community"], ["Age", "≈3× more common over 65"], ["Heritability", "≈50%"]],
    risk: ["Indecisiveness (patients and relatives).", "Stressful or traumatic life events before onset.", "Familial: over half have a relative who hoards."],
    differential: [
      { id: "ocd", how: "Saving driven by obsessions; bizarre items." },
      { id: "mdd", how: "Clutter from low energy, without difficulty discarding." },
      { name: "Major neurocognitive disorder", how: "Accumulation after cognitive decline, with squalor." },
      { name: "Brain injury, Prader-Willi syndrome", how: "Medical causes excluded by Criterion E." },
      { name: "Normative collecting", how: "Organized and selective, no clutter of living areas." }
    ],
    pearls: ["Cleared by others still counts.", "80%–90% have excessive acquisition, mostly buying.", "Fire, falls and eviction are real risks.", "People rarely volunteer hoarding: ask."],
    cmp: { symptoms: "Difficulty discarding, clutter of living areas", exclusions: "Medical causes; OCD, MDD, psychosis, dementia, autism", prevalence: "≈2.5%", course: "Chronic, worsens each decade" },
    clues: [["Core picture", "A retired librarian who sleeps in a recliner because newspapers fill her bed"], ["Specifier", "Excessive acquisition"], ["Code", "F42.3"]]
  },
  {
    id: "trichotillomania", ch: "ch06", sec: "s6-trich", pages: "281–284", critPages: "281",
    name: "Trichotillomania (hair-pulling disorder)", code: "F63.3", aka: ["hair-pulling disorder", "hair pulling", "trich"],
    essence: "Recurrent **hair pulling** with **hair loss**, **repeated attempts to stop**, and distress or impairment, not due to a skin condition or another disorder.",
    duration: "No minimum; usually chronic",
    functioning: "Shame, avoidance, impaired social and work life",
    mood: "Tension before, relief after (not required); anxiety or boredom triggers",
    criteria: [
      ["A", "Recurrent hair pulling resulting in hair loss."],
      ["B", "Repeated attempts to decrease or stop."],
      ["C", "Distress or impairment."],
      ["D", "Not due to a dermatological or other medical condition."],
      ["E", "Not better explained by another disorder (e.g., BDD)."]
    ],
    specifiers: [],
    epi: [["12-month prevalence", "1%–2%"], ["Sex", "Clinics ≥10:1 female; community ≈2:1; children equal"], ["Onset", "Around puberty"]],
    risk: ["Genetic vulnerability; more common in people with OCD and their relatives."],
    differential: [
      { id: "bdd", how: "Removing hair to fix perceived ugliness." },
      { id: "ocd", how: "Pulling as part of symmetry rituals." },
      { name: "Stereotypic movement disorder", how: "With intellectual disability or autism, when frustrated or excited." },
      { name: "Alopecia areata and other alopecias", how: "Dermoscopy or biopsy if pulling is denied." }
    ],
    pearls: ["Biting or twisting hair does not count.", "Trichobezoar from swallowed hair.", "Most also have other BFRBs."],
    cmp: { symptoms: "Hair pulling with hair loss, attempts to stop", exclusions: "Dermatological causes; BDD, OCD, psychosis, stereotypies", prevalence: "1%–2%", course: "Chronic, waxing and waning" },
    clues: [["Core picture", "A teenager with patchy crown hair loss who pulls while studying and wears a hat"], ["Complication", "Trichobezoar"], ["Code", "F63.3"]]
  },
  {
    id: "excoriation", ch: "ch06", sec: "s6-skin", pages: "284–287", critPages: "284",
    name: "Excoriation (skin-picking) disorder", code: "F42.4", aka: ["skin-picking disorder", "skin picking", "dermatillomania", "acne excoriée"],
    essence: "Recurrent **skin picking** with **lesions**, **repeated attempts to stop**, and distress or impairment, not due to a substance, a skin disease or another disorder.",
    duration: "No minimum; usually chronic",
    functioning: "Hours a day; avoidance of social events; infection and scarring",
    mood: "Tension and relief (not required); anxiety or boredom triggers",
    criteria: [
      ["A", "Recurrent skin picking resulting in lesions."],
      ["B", "Repeated attempts to decrease or stop."],
      ["C", "Distress or impairment."],
      ["D", "Not due to a substance (cocaine) or medical condition (scabies)."],
      ["E", "Not better explained by psychosis, BDD, stereotypies or nonsuicidal self-injury."]
    ],
    specifiers: [],
    epi: [["Prevalence", "2.1% current; 3.1% lifetime"], ["Sex", "≥75% women"], ["Onset", "Adolescence, often with acne"]],
    risk: ["Genetic vulnerability; more common in people with OCD and their relatives."],
    differential: [
      { id: "bdd", how: "Picking to improve appearance." },
      { id: "substance-induced-ocrd", how: "Picking only during cocaine or stimulant use." },
      { name: "Nonsuicidal self-injury", how: "Intent to harm oneself." },
      { name: "Psychotic disorders", how: "Delusional parasitosis or formication." },
      { name: "Factitious disorder or malingering", how: "Deception about self-inflicted lesions." }
    ],
    pearls: ["Acne picking that becomes independent = excoriation disorder.", "Infections may need antibiotics or surgery.", "Formerly coded L98.1, now F42.4."],
    cmp: { symptoms: "Skin picking with lesions, attempts to stop", exclusions: "Substances, scabies; psychosis, BDD, stereotypies, NSSI", prevalence: "2.1%", course: "Chronic, waxing and waning" },
    clues: [["Core picture", "A student who picks scabs with tweezers for hours without noticing, despite bandaging her fingers"], ["Code", "F42.4"]]
  },
  {
    id: "substance-induced-ocrd", ch: "ch06", sec: "s6-substance", pages: "287–290", critPages: "287–288",
    name: "Substance/medication-induced obsessive-compulsive and related disorder", code: "By substance", codeNote: "all codes end in .x88; 4th character 1 mild, 2 moderate/severe, 9 none",
    codes: [
      ["F15.188 / F15.288 / F15.988", "Amphetamine-type (or other stimulant)-induced", "With mild / moderate-severe / no use disorder"],
      ["F14.188 / F14.288 / F14.988", "Cocaine-induced", ""],
      ["F19.188 / F19.288 / F19.988", "Other (or unknown) substance-induced", "E.g., ropinirole"]
    ],
    aka: ["drug-induced OCD", "stimulant-induced skin picking"],
    essence: "Obsessions, compulsions, skin picking, hair pulling or other OCRD symptoms that **predominate** and began during or soon after intoxication, withdrawal or medication exposure.",
    duration: "Persistence **≈1 month** after stopping suggests a primary disorder",
    functioning: "Distress or impairment",
    mood: "Repetitive behaviors during stimulant use",
    criteria: [
      ["A", "OCRD symptoms predominate."],
      ["B", "Onset during or soon after intoxication, withdrawal or medication; capable substance."],
      ["C", "Not an independent OCRD."],
      ["D", "**Criteria D–E.** Not only in delirium; distress or impairment."]
    ],
    specifiers: ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"],
    epi: [["Prevalence", "Very rare in the general population"]],
    risk: ["Stimulants and cocaine; dopamine agonists (other or unknown); heavy metals and toxins."],
    differential: [
      { id: "ocd", how: "Symptoms before use or persisting ≈1 month after." },
      { id: "ocrd-due-to-amc", how: "The illness rather than its treatment is the cause." },
      { name: "Intoxication or withdrawal alone", how: "Usually suffices unless OCRD symptoms predominate." }
    ],
    pearls: ["Only stimulants, cocaine and other/unknown have codes.", "Codes end in .x88.", "Ropinirole → F19.x88."],
    cmp: { symptoms: "OCRD symptoms with a substance", exclusions: "Independent OCRD; delirium", prevalence: "Very rare", course: "Improves within days to weeks of stopping" },
    clues: [["Core picture", "Skin picking for hours during methamphetamine binges"], ["Coding", "F1x.x88"]]
  },
  {
    id: "ocrd-due-to-amc", ch: "ch06", sec: "s6-medical", pages: "291–293", critPages: "291",
    name: "Obsessive-compulsive and related disorder due to another medical condition", code: "F06.8",
    codes: [["F06.8", "OCRD due to [medical condition]", "Code the condition first (e.g., I69.398 cerebral infarction)"]],
    aka: ["Sydenham’s chorea OCD", "PANDAS", "PANS", "organic OCD"],
    essence: "OCRD symptoms that are the **direct pathophysiological consequence** of a medical condition, such as striatal stroke, Huntington’s disease or **Sydenham’s chorea**.",
    duration: "Follows the medical condition",
    functioning: "Distress or impairment",
    mood: "Varies with the cause",
    criteria: [
      ["A", "OCRD symptoms predominate."],
      ["B", "Evidence of a direct pathophysiological consequence of a medical condition."],
      ["C", "Not better explained by another disorder."],
      ["D", "**Criteria D–E.** Not only in delirium; distress or impairment."]
    ],
    specifiers: ["With OCD-like symptoms", "With appearance preoccupations", "With hoarding symptoms", "With hair-pulling symptoms", "With skin-picking symptoms"],
    epi: [["Clues", "Acute onset, late onset, atypical symptoms"]],
    risk: ["Striatal damage: cerebral infarction, Huntington’s disease.", "Group A strep: Sydenham’s chorea; PANDAS/PANS in children."],
    differential: [
      { id: "ocd", how: "No demonstrable mechanism." },
      { id: "substance-induced-ocrd", how: "A medication rather than the illness." },
      { name: "Delirium", how: "Not diagnosed if only during delirium." },
      { name: "Illness anxiety disorder", how: "Preoccupation with having an illness." }
    ],
    pearls: ["Code the condition first.", "Sydenham’s chorea has chorea; PANDAS does not.", "PANS can present as abrupt food restriction."],
    cmp: { symptoms: "OCRD symptoms from a medical condition", exclusions: "Delirium; primary or substance-induced OCRD", prevalence: "—", course: "Follows the illness" },
    clues: [["Core picture", "New checking rituals at 63 after a caudate stroke"], ["Code", "F06.8"]]
  },
  {
    id: "other-specified-ocrd", ch: "ch06", sec: "s6-other", pages: "293–294", critPages: "293–294",
    name: "Other specified obsessive-compulsive and related disorder", code: "F42.8", aka: ["nail biting", "obsessional jealousy", "olfactory reference disorder", "olfactory reference syndrome", "koro", "shubo-kyofu", "body-focused repetitive behavior disorder"],
    essence: "OCRD symptoms causing distress or impairment that do not meet a specific disorder, with the **reason recorded**.",
    duration: "Varies",
    functioning: "Clinically significant distress or impairment",
    mood: "Varies",
    criteria: [["", "Examples: **BDD-like with actual flaws**; **BDD-like without repetitive behaviors**; **other BFRB disorder** (nail biting, lip biting, cheek chewing); **obsessional jealousy**; **olfactory reference disorder**; **shubo-kyofu**; **koro**."]],
    specifiers: [],
    epi: [],
    risk: [],
    differential: [
      { id: "bdd", how: "Slight or unobservable flaws with repetitive behaviors." },
      { id: "delusional-disorder", how: "Delusional (not obsessional) jealousy." },
      { id: "unspecified-ocrd", how: "Reason not given." }
    ],
    pearls: ["Seven named examples.", "Nail biting with attempts to stop goes here."],
    cmp: { symptoms: "Atypical OCRD presentations", exclusions: "Any specific OCRD", prevalence: "—", course: "Varies" },
    clues: [["Example", "Nondelusional checking of a partner’s phone for infidelity"], ["Code", "F42.8"]]
  },
  {
    id: "unspecified-ocrd", ch: "ch06", sec: "s6-other", pages: "294", critPages: "294",
    name: "Unspecified obsessive-compulsive and related disorder", code: "F42.9",
    essence: "OCRD symptoms causing distress or impairment, without a specific diagnosis, when the reason is not given or information is insufficient.",
    duration: "Varies",
    functioning: "Clinically significant distress or impairment",
    mood: "Varies",
    criteria: [["", "OCRD symptoms predominate; criteria for a specific disorder are not met; reason not given or information insufficient (e.g., emergency settings)."]],
    specifiers: [],
    epi: [],
    risk: [],
    differential: [{ id: "other-specified-ocrd", how: "Use when the reason can be stated." }],
    pearls: ["Also used when it is unclear whether symptoms are primary, induced or medical."],
    cmp: { symptoms: "OCRD symptoms, reason not given", exclusions: "Specific OCRDs", prevalence: "—", course: "Varies" },
    clues: [["Example", "Repetitive behaviors in the emergency department with too little history"], ["Code", "F42.9"]]
  }
]);

SP.comparePresets = (SP.comparePresets || []).concat([
  { label: "OCD vs body dysmorphic disorder", ids: ["ocd", "bdd"] },
  { label: "OCD vs hoarding disorder", ids: ["ocd", "hoarding"] },
  { label: "Trichotillomania vs excoriation disorder", ids: ["trichotillomania", "excoriation"] },
  { label: "OCD vs GAD", ids: ["ocd", "gad"] },
  { label: "BDD vs social anxiety disorder", ids: ["bdd", "social-anxiety"] },
  { label: "BDD vs delusional disorder", ids: ["bdd", "delusional-disorder"] }
]);
