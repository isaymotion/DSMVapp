/* Disorder library: Chapter 1, Neurodevelopmental Disorders (DSM-5-TR pp. 35–99).
   Codes as printed in the 2022 manual; checked against ICD-10-CM through FY2027 (October 1, 2026): unchanged. */
(function () {
  var SRC = "ICD-10-CM FY2025–FY2027 code tables; APA DSM-5-TR coding updates through September 2025";
  function upd(text) { return [{ kind: "post", year: "2026", title: "Codes checked through October 2026", source: SRC, text: text }]; }
  var NC = "Unchanged through October 2026";

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "idd", ch: "ch01", sec: "s1-idd-criteria", pages: "37–46", critPages: "37–38",
      name: "Intellectual developmental disorder (intellectual disability)", code: "F70–F73",
      codes: [["F70", "Mild", NC], ["F71", "Moderate", NC], ["F72", "Severe", NC], ["F73", "Profound", NC]],
      aka: ["intellectual disability", "mental retardation (obsolete)", "disorders of intellectual development", "IDD", "ID"],
      essence: "Deficits in **intellectual functions** confirmed by clinical assessment and standardized testing, plus **adaptive deficits** needing ongoing support across settings, with **onset in the developmental period**; severity by **adaptive functioning**.",
      duration: "Onset in the developmental period; usually lifelong",
      functioning: "Adaptive deficits in conceptual, social and/or practical domains define the disorder",
      mood: "Comorbid depression, anxiety and bipolar disorder may present atypically; watch for behavior change",
      criteria: [
        ["A", "Intellectual deficits (reasoning, problem solving, planning, abstract thinking, judgment, academic and experiential learning) confirmed by clinical assessment and individualized standardized IQ testing."],
        ["B", "Adaptive deficits in personal independence and social responsibility; without ongoing support they limit daily activities across multiple environments."],
        ["C", "Onset of intellectual and adaptive deficits during the developmental period."]
      ],
      specifiers: ["Mild (F70)", "Moderate (F71)", "Severe (F72)", "Profound (F73)"],
      epi: [["Overall", "About 10 per 1,000"], ["Middle-income countries", "About 16 per 1,000"], ["High-income countries", "About 9 per 1,000"], ["Male:female", "Mild 1.6:1; severe 1.2:1"]],
      risk: ["Prenatal: genetic syndromes and CNVs, inborn errors, malformations, alcohol and teratogens.", "Perinatal: events leading to neonatal encephalopathy.", "Postnatal: hypoxia, TBI, infection, infantile spasms, severe deprivation, lead or mercury."],
      differential: [
        { id: "major-ncd", how: "A loss of acquired function; both can be diagnosed (e.g., Down syndrome with Alzheimer’s disease)." },
        { id: "sld", how: "Deficits confined to academic skills with normal intellect; both if full criteria are met." },
        { id: "asd", how: "Common co-occurrence; ASD needs social communication below developmental level." },
        { id: "gdd", how: "Under 5 and not yet testable." },
        { id: "unspecified-idd", how: "Over 5 and testing impossible." }
      ],
      pearls: ["IQ about 65–75 (70 ± 5), but IQ alone is insufficient.", "Severity is adaptive, not IQ-based.", "Look for pain and medical illness when behavior changes.", "Screen for suicidal thoughts; risk rises with higher function and comorbidity."],
      cmp: { symptoms: "Global intellectual and adaptive deficits", exclusions: "None, but record genetic syndromes as concurrent diagnoses", prevalence: "About 1%", course: "Lifelong; severity may change with supports" },
      clues: [["Core picture", "A young man reading at third-grade level, gullible, independent in self-care"], ["Code", "F70–F73 by severity"]],
      updates: upd("**F70–F73** are unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "gdd", ch: "ch01", sec: "s1-gdd", pages: "46", critPages: "46",
      name: "Global developmental delay", code: "F88",
      codes: [["F88", "Other disorders of psychological development", NC]],
      aka: ["GDD", "developmental delay"],
      essence: "A child **under 5** who misses milestones in **several areas** of intellectual functioning and **cannot undergo** systematic testing, so severity cannot be rated; requires **reassessment**.",
      duration: "Provisional until reassessment",
      functioning: "Delays across several developmental domains",
      mood: "Not a feature",
      criteria: [["", "Under 5 years; fails to meet expected milestones in several areas; unable to undergo systematic intellectual assessment (including being too young); reassess after a period of time."]],
      specifiers: [],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["As for intellectual developmental disorder."],
      differential: [
        { id: "idd", how: "Diagnose once the child can be tested and severity rated." },
        { id: "asd", how: "Screen for absent joint attention and repetitive behavior." },
        { id: "language-disorder", how: "Delay confined to language." }
      ],
      pearls: ["Same code (F88) as other specified neurodevelopmental disorder: record the name.", "Always reassess."],
      cmp: { symptoms: "Multi-domain milestone delay", exclusions: "Age 5 or older", prevalence: "Not given", course: "Reassess; some later meet IDD criteria" },
      clues: [["Core picture", "A 30-month-old with few words, late walking and no pointing"], ["Code", "F88"]],
      updates: upd("**F88** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "unspecified-idd", ch: "ch01", sec: "s1-gdd", pages: "46", critPages: "46",
      name: "Unspecified intellectual developmental disorder", code: "F79",
      codes: [["F79", "Unspecified intellectual disabilities", NC]],
      aka: ["unspecified intellectual disability"],
      essence: "Over age **5**, when the degree of IDD **cannot be assessed** with available procedures because of **blindness, prelingual deafness**, locomotor disability, severe problem behavior or a co-occurring mental disorder.",
      duration: "Reassess after a period of time",
      functioning: "Apparent intellectual and adaptive impairment",
      mood: "Varies",
      criteria: [["", "Over 5 years; assessment difficult or impossible because of sensory or physical impairment, severe problem behavior or co-occurring mental disorder; exceptional use only; reassess."]],
      specifiers: [],
      epi: [["Prevalence", "Not given"]],
      risk: ["As for IDD, plus the sensory or physical condition."],
      differential: [
        { id: "idd", how: "When testing becomes possible." },
        { id: "gdd", how: "Under age 5." }
      ],
      pearls: ["F79, not F89.", "Exceptional circumstances only."],
      cmp: { symptoms: "Untestable apparent IDD", exclusions: "Under age 5", prevalence: "Not given", course: "Reassess" },
      clues: [["Core picture", "A 10-year-old who is blind and deaf, unable to be tested"], ["Code", "F79"]],
      updates: upd("**F79** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "language-disorder", ch: "ch01", sec: "s1-language", pages: "47–49", critPages: "47",
      name: "Language disorder", code: "F80.2",
      codes: [["F80.2", "Mixed receptive-expressive language disorder", NC]],
      aka: ["specific language impairment", "developmental language disorder", "expressive language disorder", "receptive language disorder"],
      essence: "Persistent difficulty acquiring and using language across modalities, with reduced **vocabulary**, limited **sentence structure** and impaired **discourse**, substantially below age, from early development, not due to hearing, motor or medical causes or IDD.",
      duration: "Early onset; stable and persistent if diagnosed at 4 or older",
      functioning: "Limits communication, social participation, achievement or work",
      mood: "May seem shy or reticent; peer victimization",
      criteria: [
        ["A", "Difficulty acquiring and using language (spoken, written, sign) from comprehension or production deficits: reduced vocabulary, limited sentence structure, impaired discourse."],
        ["B", "Abilities substantially and quantifiably below age, with functional limits."],
        ["C", "Onset in the early developmental period."],
        ["D", "Not due to hearing or sensory impairment, motor dysfunction or another medical or neurological condition; not better explained by IDD or global developmental delay."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in DSM-5-TR"], ["Sex", "Communication disorders more common in boys"]],
      risk: ["Highly heritable; family history common.", "Receptive deficits predict poorer outcome.", "Bilingualism does not cause it."],
      differential: [
        { name: "Normal variation and dialect", how: "Hard to separate before 4." },
        { name: "Hearing impairment", how: "Exclude first; diagnose only if deficits exceed it." },
        { id: "idd", how: "Language delay is often IDD’s first sign; no discrepancy required." },
        { id: "asd", how: "Adds social disinterest, odd play, repetitive behavior." },
        { name: "Landau-Kleffner syndrome", how: "Language loss with epilepsy; get a sleep EEG." }
      ],
      pearls: ["Comprehension deficits are underestimated.", "Assess both languages in bilingual children.", "Language loss needs neurological assessment, including EEG to exclude epilepsy."],
      cmp: { symptoms: "Vocabulary, grammar and discourse deficits", exclusions: "Hearing loss, IDD, neurological causes", prevalence: "Not given", course: "Persists if present at age 4+" },
      clues: [["Core picture", "A 5-year-old with short ungrammatical sentences who cannot retell a story"], ["Code", "F80.2"]],
      updates: upd("**F80.2** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "speech-sound-disorder", ch: "ch01", sec: "s1-speech-sound", pages: "50–51", critPages: "50",
      name: "Speech sound disorder", code: "F80.0",
      codes: [["F80.0", "Phonological disorder", NC]],
      aka: ["phonological disorder", "articulation disorder", "childhood apraxia of speech", "verbal dyspraxia", "lisp"],
      essence: "Persistent difficulty producing speech sounds that interferes with **intelligibility**, from early development, not due to **cerebral palsy, cleft palate, hearing loss, TBI** or other conditions.",
      duration: "Early onset; often improves with treatment",
      functioning: "Limits communication, participation and achievement",
      mood: "Embarrassment; may lead to selective mutism",
      criteria: [
        ["A", "Persistent difficulty with speech sound production that interferes with intelligibility or prevents verbal communication."],
        ["B", "Limits effective communication and participation, achievement or work."],
        ["C", "Onset in the early developmental period."],
        ["D", "Not due to congenital or acquired conditions (cerebral palsy, cleft palate, hearing loss, TBI, other medical or neurological conditions)."]
      ],
      specifiers: [],
      epi: [["Sex", "Boys 1.5–1.8:1"], ["Milestones", "50% intelligible at 2; intelligible at 3; most sounds by 5"]],
      risk: ["Family history of speech or language disorders.", "Genetic: Down syndrome, 22q deletion, FOXP2."],
      differential: [
        { name: "Dysarthria", how: "Motor disorder with neurological signs." },
        { name: "Structural deficits", how: "Cleft palate." },
        { name: "Hearing impairment", how: "Errors in excess of the hearing loss." },
        { id: "selective-mutism", how: "Normal speech in safe settings." }
      ],
      pearls: ["One late-eight sound can be normal to age 8.", "Worse prognosis with coexisting language disorder."],
      cmp: { symptoms: "Unclear articulation", exclusions: "Structural, neurological, hearing causes", prevalence: "Not given", course: "Most respond well to treatment" },
      clues: [["Core picture", "A 5-year-old whom strangers cannot understand, with normal hearing and palate"], ["Code", "F80.0"]],
      updates: upd("**F80.0** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "stuttering", ch: "ch01", sec: "s1-stuttering", pages: "51–54", critPages: "51–52",
      name: "Childhood-onset fluency disorder (stuttering)", code: "F80.81",
      codes: [["F80.81", "Childhood onset fluency disorder", NC], ["F98.5", "Adult onset fluency disorder (later onset)", NC]],
      aka: ["stuttering", "stammering", "fluency disorder"],
      essence: "Frequent, marked disruption of speech **fluency and timing** (repetitions, prolongations, broken words, blocks, circumlocutions, tense words, monosyllabic whole-word repetitions) beginning in early development, causing **anxiety about speaking** or functional limits.",
      duration: "Persists over time; onset by 6 in 80%–90%",
      functioning: "Avoids speaking situations; social and academic limits",
      mood: "Speech anxiety; social anxiety disorder may co-occur",
      criteria: [
        ["A", "Disturbed fluency and time patterning, inappropriate for age, with frequent marked repetitions, prolongations, broken words, blocking, circumlocutions, tense words or monosyllabic whole-word repetitions."],
        ["B", "Anxiety about speaking or limits on communication, participation or performance."],
        ["C", "Onset in the early developmental period (later onset: F98.5)."],
        ["D", "Not due to speech-motor or sensory deficit, neurological insult or medical condition; not better explained by another mental disorder."]
      ],
      specifiers: [],
      epi: [["Onset", "Ages 2–7; 80%–90% by 6"], ["Recovery", "65%–85%"], ["Family risk", ">3× in first-degree relatives"]],
      risk: ["Genetic (four genes identified) and neurophysiological factors.", "Severity at 8 predicts persistence."],
      differential: [
        { name: "Normal dysfluency", how: "Whole-word or phrase repetitions in young children." },
        { name: "Adult-onset dysfluency (F98.5)", how: "Onset in adolescence or later; neurogenic cases are recorded with the neurological condition, not F98.5." },
        { id: "sld", how: "Slow timed oral reading may reflect stuttering, not reading disability." },
        { id: "tourette", how: "Vocal tics differ in nature and timing." }
      ],
      pearls: ["Often absent when singing or reading aloud alone.", "Ask about social anxiety."],
      cmp: { symptoms: "Repetitions, prolongations, blocks", exclusions: "Neurological insult, later onset", prevalence: "Not given", course: "65%–85% recover" },
      clues: [["Core picture", "A 6-year-old who blocks on first sounds and now avoids answering in class"], ["Code", "F80.81"]],
      updates: upd("**F80.81** and **F98.5** are unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "spcd", ch: "ch01", sec: "s1-spcd", pages: "54–56", critPages: "54",
      name: "Social (pragmatic) communication disorder", code: "F80.82",
      codes: [["F80.82", "Social pragmatic communication disorder", NC]],
      aka: ["pragmatic language impairment", "semantic-pragmatic disorder", "SPCD"],
      essence: "Persistent difficulty with the **social use** of verbal and nonverbal communication (all four: social purposes, adapting to context, conversational rules, nonliteral meaning) **without restricted, repetitive behavior**, not better explained by ASD.",
      duration: "Early onset; may emerge when social demands rise",
      functioning: "Limits communication, relationships, achievement",
      mood: "Social avoidance",
      criteria: [
        ["A", "Deficits in all four: social use of communication; adapting to context or listener; conversational and storytelling rules; understanding implicit and nonliteral language."],
        ["B", "Functional limits in communication, participation, relationships, achievement or work."],
        ["C", "Onset early, though deficits may emerge when demands exceed capacities."],
        ["D", "Not due to a medical condition or low structural language ability; not better explained by ASD, IDD, global developmental delay or another mental disorder."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given"], ["Age", "Rare before 4"]],
      risk: ["Family history of ASD, communication disorders or SLD."],
      differential: [
        { id: "asd", how: "Restricted, repetitive behavior now or in the past means ASD, which supersedes SPCD." },
        { id: "social-anxiety", how: "Skills developed but unused from fear." },
        { id: "adhd", how: "ADHD itself can impair social communication." },
        { id: "language-disorder", how: "Structural language deficits." }
      ],
      pearls: ["Take a careful early history for repetitive behavior.", "Common associated feature: language impairment."],
      cmp: { symptoms: "Pragmatic deficits only", exclusions: "ASD, structural language deficits", prevalence: "Not given", course: "Variable; lasting social effects" },
      clues: [["Core picture", "A literal-minded 10-year-old who lectures peers formally and misses jokes, with no repetitive behaviors ever"], ["Code", "F80.82"]],
      updates: upd("**F80.82** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "unspecified-communication", ch: "ch01", sec: "s1-spcd", pages: "56", critPages: "56",
      name: "Unspecified communication disorder", code: "F80.9",
      codes: [["F80.9", "Developmental disorder of speech and language, unspecified", NC]],
      aka: [],
      essence: "Communication disorder symptoms with distress or impairment, not meeting full criteria, when the reason is **not specified** or information is **insufficient**.",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Communication symptoms with distress or impairment predominate but do not meet full criteria; reason not specified or insufficient information."]],
      specifiers: [],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "language-disorder", how: "Full criteria met." }, { id: "unspecified-nd", how: "Symptoms not clearly communication-related." }],
      pearls: ["No other specified communication disorder exists."],
      cmp: { symptoms: "Subthreshold communication problems", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "F80.9"]],
      updates: upd("**F80.9** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "asd", ch: "ch01", sec: "s1-asd-criteria", pages: "56–68", critPages: "56–57",
      name: "Autism spectrum disorder", code: "F84.0",
      codes: [["F84.0", "Autistic disorder", NC], ["F06.1", "Catatonia associated with autism spectrum disorder (additional code)", NC]],
      aka: ["autism", "ASD", "Asperger’s disorder (DSM-IV)", "pervasive developmental disorder", "PDD-NOS", "childhood disintegrative disorder", "Kanner’s autism", "high-functioning autism"],
      essence: "Persistent deficits in **social communication and interaction** (all three: reciprocity, nonverbal communication, relationships) plus **restricted, repetitive** behaviors, interests or activities (two of four), present from early development and impairing **current** functioning.",
      duration: "Early developmental onset; lifelong",
      functioning: "Social, academic and occupational impairment; adaptive skills below IQ",
      mood: "Anxiety and depression common; catatonia risk in adolescence",
      criteria: [
        ["A", "Social communication and interaction deficits in all three: social-emotional reciprocity; nonverbal communication; developing, maintaining and understanding relationships (current or by history)."],
        ["B", "At least two of: stereotyped or repetitive movements, object use or speech; insistence on sameness and rituals; restricted, fixated interests; sensory hyper- or hyporeactivity (current or by history)."],
        ["C", "Present in the early developmental period (may show later or be masked)."],
        ["D", "Clinically significant impairment in current functioning."],
        ["E", "Not better explained by IDD or global developmental delay; with IDD, social communication below developmental level."]
      ],
      specifiers: ["Severity level 1–3 for each domain", "With/without intellectual impairment", "With/without language impairment", "Associated with a known genetic or other medical condition or environmental factor", "Associated with a neurodevelopmental, mental, or behavioral problem", "With catatonia (add F06.1)"],
      epi: [["US (DSM-5-TR)", "1%–2%"], ["Global median", "0.62%"], ["Male:female", "About 3:1"], ["CDC ADDM 2022 data (2025)", "32.2 per 1,000 eight-year-olds (about 1 in 31)"]],
      risk: ["Heritability 37% to over 90% (80% in a five-country cohort).", "Known genetic cause in up to 15%; mostly polygenic.", "Advanced parental age, extreme prematurity, prenatal valproate."],
      differential: [
        { id: "spcd", how: "No restricted, repetitive behavior ever; ASD supersedes." },
        { id: "adhd", how: "No restricted, repetitive behavior; often comorbid." },
        { id: "idd", how: "No discrepancy between social and nonverbal skills." },
        { id: "selective-mutism", how: "Normal early development and reciprocity." },
        { id: "ocd", how: "Repetitive acts driven by obsessions." },
        { id: "schizophrenia", how: "Hallucinations and delusions after normal development." },
        { id: "schizotypal-pd", how: "Early developmental course decides." },
        { name: "Rett syndrome", how: "Autistic features in the regressive phase fade." }
      ],
      pearls: ["Ask about masking and its toll, especially in women.", "Regression after 2 normal years needs EEG work-up.", "Drowning is the leading accidental death in autistic children.", "Concrete answers can mimic psychosis."],
      cmp: { symptoms: "Social communication deficits plus repetitive behavior", exclusions: "IDD alone", prevalence: "1%–2% (1 in 31 children, CDC 2025)", course: "Lifelong; most improve in later childhood" },
      clues: [["Core picture", "A toddler who does not point or answer to his name and lines up toys for hours"], ["Code", "F84.0 (+ F06.1 if catatonia)"]],
      updates: upd("**F84.0** and **F06.1** are unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "adhd", ch: "ch01", sec: "s1-adhd-criteria", pages: "68–76", critPages: "68–70",
      name: "Attention-deficit/hyperactivity disorder", code: "F90.x",
      codes: [["F90.2", "Combined presentation", NC], ["F90.0", "Predominantly inattentive presentation", NC], ["F90.1", "Predominantly hyperactive/impulsive presentation", NC]],
      aka: ["ADHD", "ADD", "attention deficit disorder", "hyperkinetic disorder (ICD-10)"],
      essence: "A persistent pattern of **inattention and/or hyperactivity-impulsivity**: **six** symptoms (**five** from 17) for **6 months**, several **before 12**, in **two or more settings**, interfering with functioning, not better explained by another disorder.",
      duration: "At least 6 months; several symptoms before age 12",
      functioning: "Academic, occupational, social and family impairment; injuries and accidents",
      mood: "Emotional dysregulation; irritability; low self-esteem",
      criteria: [
        ["A", "Six or more inattentive and/or six or more hyperactive-impulsive symptoms for 6 months, inconsistent with development (five from age 17); not solely oppositional or due to failure to understand."],
        ["B", "Several symptoms before age 12."],
        ["C", "Several symptoms in two or more settings."],
        ["D", "Clear interference with social, academic or occupational functioning."],
        ["E", "Not only during psychosis; not better explained by another mental disorder."]
      ],
      specifiers: ["Combined (F90.2)", "Predominantly inattentive (F90.0)", "Predominantly hyperactive/impulsive (F90.1)", "In partial remission", "Mild, moderate, severe"],
      epi: [["Children", "About 7.2%"], ["Adults", "2.5%"], ["Male:female", "2:1 children; 1.6:1 adults"], ["Heritability", "About 74%"]],
      risk: ["Very low birth weight and prematurity.", "Prenatal smoking exposure.", "Lead, encephalitis, prenatal alcohol (causation unclear).", "Family history."],
      differential: [
        { id: "nd-pae", how: "ADHD is the most common comorbidity of neurobehavioral disorder associated with prenatal alcohol exposure, which has a different neuropsychological profile and medication response (Section III, p. 920); ask about prenatal alcohol exposure." },
        { id: "oppositional-defiant", how: "Defiance rather than difficulty sustaining effort." },
        { id: "asd", how: "Social indifference and restricted, repetitive behavior." },
        { id: "sld", how: "Inattention only when the impaired skill is needed." },
        { id: "idd", how: "Symptoms must exceed mental age." },
        { id: "ptsd", how: "Trauma history; under 6 mimics ADHD." },
        { id: "bipolar-i", how: "Episodic elevated mood with grandiosity." },
        { id: "dmdd", how: "Pervasive irritability; often comorbid." },
        { id: "rad", how: "No enduring relationships." },
        { id: "major-ncd", how: "A decline, usually with adult onset." }
      ],
      pearls: ["No symptoms before 12, no ADHD.", "Get collateral from two settings.", "Screen for sleep-disordered breathing and trauma.", "Signs vanish in one-to-one office settings."],
      cmp: { symptoms: "Inattention, hyperactivity, impulsivity", exclusions: "Psychosis-only, other disorders", prevalence: "7.2% children; 2.5% adults", course: "Hyperactivity fades; inattention and impulsivity persist" },
      clues: [["Core picture", "A 9-year-old who loses things, never finishes work and blurts out answers at home and school"], ["Code", "F90.0 / F90.1 / F90.2"]],
      updates: upd("**F90.0–F90.2** are unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "other-specified-adhd", ch: "ch01", sec: "s1-adhd-criteria", pages: "76", critPages: "76",
      name: "Other specified attention-deficit/hyperactivity disorder", code: "F90.8",
      codes: [["F90.8", "Attention-deficit hyperactivity disorder, other type", NC]],
      aka: ["subthreshold ADHD"],
      essence: "ADHD-type symptoms with distress or impairment, not meeting full criteria, with the **reason recorded** (e.g., “with insufficient inattention symptoms”).",
      duration: "Varies",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "ADHD-characteristic symptoms with distress or impairment, not meeting full criteria; record the specific reason."]],
      specifiers: ["Record the reason after the name"],
      epi: [["Prevalence", "Not given"]],
      risk: ["As for ADHD."],
      differential: [{ id: "adhd", how: "Full criteria met." }, { id: "unspecified-adhd", how: "Reason not recorded." }],
      pearls: ["Use instead of F88 when the picture is ADHD-like."],
      cmp: { symptoms: "Subthreshold ADHD", exclusions: "Full ADHD", prevalence: "Not given", course: "Varies" },
      clues: [["Code", "F90.8"]],
      updates: upd("**F90.8** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "unspecified-adhd", ch: "ch01", sec: "s1-adhd-criteria", pages: "76", critPages: "76",
      name: "Unspecified attention-deficit/hyperactivity disorder", code: "F90.9",
      codes: [["F90.9", "Attention-deficit hyperactivity disorder, unspecified type", NC]],
      aka: [],
      essence: "ADHD-type symptoms with distress or impairment, not meeting full criteria, when the reason is **not specified** or information is **insufficient**.",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "ADHD-characteristic symptoms with distress or impairment, not meeting full criteria; reason not given or insufficient information."]],
      specifiers: [],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "other-specified-adhd", how: "When the reason can be stated." }],
      pearls: ["Revise when the history is complete."],
      cmp: { symptoms: "Insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "F90.9"]],
      updates: upd("**F90.9** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "sld", ch: "ch01", sec: "s1-sld-criteria", pages: "76–85", critPages: "76–78",
      name: "Specific learning disorder", code: "F81.0 / F81.81 / F81.2",
      codes: [["F81.0", "With impairment in reading", NC], ["F81.81", "With impairment in written expression", NC], ["F81.2", "With impairment in mathematics", NC]],
      aka: ["learning disability", "dyslexia", "dyscalculia", "dysgraphia", "reading disorder", "mathematics disorder"],
      essence: "Persistent difficulty learning **reading, writing or math** for at least **6 months despite intervention**, with skills **well below age** on standardized tests, beginning in the school years, not explained by IDD, senses, adversity, language or instruction.",
      duration: "At least 6 months despite targeted help; usually lifelong",
      functioning: "Academic, occupational and daily-life impairment; avoidance",
      mood: "Anxiety, socioemotional distress; suicide risk",
      criteria: [
        ["A", "At least one of six for 6 months despite intervention: inaccurate or slow word reading; poor reading comprehension; spelling; written expression; number sense or calculation; math reasoning."],
        ["B", "Skills substantially below chronological age on individually administered standardized tests (history may substitute from 17)."],
        ["C", "Begins in school-age years, may appear only when demands exceed capacity."],
        ["D", "Not better explained by IDD, uncorrected vision or hearing, other disorders, adversity, language of instruction or inadequate instruction."]
      ],
      specifiers: ["Reading (F81.0): word accuracy, fluency, comprehension", "Written expression (F81.81): spelling, grammar, organization", "Mathematics (F81.2): number sense, facts, calculation, reasoning", "Mild, moderate, severe"],
      epi: [["School-age", "5%–15%"], ["Male:female", "2:1 to 3:1"], ["Family risk", "Reading 4–8×; math 5–10×"], ["NF1", "Up to 75%"]],
      risk: ["High heritability (>0.6).", "Prematurity, low SES, lead, nicotine, air pollution, flame retardants, manganese.", "Preschool language impairment."],
      differential: [
        { name: "Normal variation", how: "Inadequate instruction or second language." },
        { id: "idd", how: "IQ below about 70 ± 5; both only if learning problems exceed IDD." },
        { id: "adhd", how: "Impairs performing, not learning, skills; both allowed." },
        { id: "major-ncd", how: "A decline from a former state." },
        { name: "Neurological or sensory disorders", how: "Abnormal neurological exam." }
      ],
      pearls: ["1.5 SD (≤78) for certainty; 1.0 SD with converging evidence.", "Code each domain separately.", "Gifted students judged against own ability."],
      cmp: { symptoms: "Reading, writing or math deficits", exclusions: "IDD, sensory loss, poor instruction", prevalence: "5%–15% of school-age children", course: "Lifelong; manifestations shift" },
      clues: [["Core picture", "A bright 11-year-old who reads slowly and guesses words despite a year of phonics help"], ["Code", "F81.0, F81.81, F81.2 as applicable"]],
      updates: upd("**F81.0**, **F81.81** and **F81.2** are unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "dcd", ch: "ch01", sec: "s1-dcd", pages: "85–88", critPages: "85–86",
      name: "Developmental coordination disorder", code: "F82",
      codes: [["F82", "Specific developmental disorder of motor function", NC]],
      aka: ["DCD", "dyspraxia", "childhood dyspraxia", "clumsy child syndrome"],
      essence: "Motor coordination **substantially below** age and opportunity (**clumsiness**, slow and inaccurate skills) that **persistently interferes** with daily activities, from early development, not due to IDD, vision or a neurological movement disorder.",
      duration: "Early onset; usually not diagnosed before 5; persists in 50%–70%",
      functioning: "Self-care, handwriting, sports, play; later driving and tools",
      mood: "Low self-esteem; emotional and behavioral problems",
      criteria: [
        ["A", "Coordinated motor skills substantially below expected: clumsiness and slow, inaccurate performance."],
        ["B", "Significant, persistent interference with daily activities, school, leisure and play."],
        ["C", "Onset in the early developmental period."],
        ["D", "Not better explained by IDD or visual impairment; not due to a neurological condition affecting movement."]
      ],
      specifiers: [],
      epi: [["Ages 5–11", "5%–8%"], ["Male:female", "2:1 to 7:1"], ["Comorbid ADHD", "About 50%"]],
      risk: ["Prematurity and low birth weight.", "Prenatal alcohol.", "Possible cerebellar and visual-motor dysfunction."],
      differential: [
        { name: "Neurological conditions", how: "Cerebral palsy, cerebellar or neuromuscular disease: abnormal exam." },
        { id: "adhd", how: "Falls from distractibility; both allowed." },
        { id: "asd", how: "Disinterest rather than incompetence; often comorbid." },
        { id: "idd", how: "Motor problems must exceed mental age." },
        { name: "Joint hypermobility syndrome", how: "Hyperextensible joints, pain." }
      ],
      pearls: ["Examine vision and neurology.", "Mirror and choreiform movements are soft signs."],
      cmp: { symptoms: "Clumsiness, poor handwriting", exclusions: "Neurological movement disorders, vision", prevalence: "5%–8%", course: "Persists in 50%–70%" },
      clues: [["Core picture", "A 7-year-old who cannot button, catch a ball or write legibly, with a normal neurological exam"], ["Code", "F82"]],
      updates: upd("**F82** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "stereotypic-movement", ch: "ch01", sec: "s1-stereotypic", pages: "89–92", critPages: "89",
      name: "Stereotypic movement disorder", code: "F98.4",
      codes: [["F98.4", "Stereotyped movement disorders", NC]],
      aka: ["stereotypies", "head banging", "body rocking", "self-injurious stereotypy"],
      essence: "Repetitive, seemingly driven, **apparently purposeless** movements (rocking, flapping, head banging, self-biting) from early development that **interfere** with activities and may cause **self-injury**.",
      duration: "Begins in the first 3 years; may persist with IDD",
      functioning: "Interferes with social and academic activities; injury",
      mood: "Movements may reduce anxiety; ego-syntonic",
      criteria: [
        ["A", "Repetitive, seemingly driven, apparently purposeless motor behavior."],
        ["B", "Interferes with social, academic or other activities and may cause self-injury."],
        ["C", "Onset in the early developmental period."],
        ["D", "Not due to a substance or neurological condition; not better explained by another disorder (trichotillomania, OCD)."]
      ],
      specifiers: ["With or without self-injurious behavior", "Associated with a known genetic or other medical condition, neurodevelopmental disorder, or environmental factor", "Mild, moderate, severe"],
      epi: [["Simple stereotypies (typical children)", "5%–19%"], ["Complex stereotypies", "3%–4%"], ["IDD in residential care", "10%–15% with self-injury"]],
      risk: ["Severe IDD; sensory impairment (eye poking).", "Social isolation and stress.", "Lesch-Nyhan, Rett, Cornelia de Lange, fragile X, Smith-Magenis.", "Painful conditions (ear, teeth, reflux)."],
      differential: [
        { id: "asd", how: "Add SMD only for self-injury or a treatment focus." },
        { id: "tourette", how: "Tics: later onset, variable, premonitory urge." },
        { id: "ocd", how: "Driven by obsessions." },
        { id: "trichotillomania", how: "Goal-directed; onset around puberty." },
        { id: "tardive-dyskinesia", how: "Neuroleptic history; no self-injury." }
      ],
      pearls: ["Early onset, rhythmic, fixed, enjoyable, no urge.", "Look for a painful medical cause."],
      cmp: { symptoms: "Rhythmic purposeless movements", exclusions: "ASD without self-injury, tics, OCD", prevalence: "3%–4% complex", course: "Usually diminish; persist with IDD" },
      clues: [["Core picture", "A child with severe IDD who bangs his head and needs a helmet"], ["Code", "F98.4"]],
      updates: upd("**F98.4** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "tourette", ch: "ch01", sec: "s1-tic-criteria", pages: "93–98", critPages: "93",
      name: "Tourette’s disorder", code: "F95.2",
      codes: [["F95.2", "Tourette’s disorder", NC]],
      aka: ["Tourette syndrome", "Gilles de la Tourette syndrome", "TS"],
      essence: "**Multiple motor and at least one vocal** tic (not necessarily together) for **more than 1 year** since the first tic, beginning **before 18**, not due to a substance or medical condition.",
      duration: "More than 1 year since first tic",
      functioning: "Often mild; ADHD and OCD may impair more than the tics",
      mood: "Anxiety, depression; raised suicide risk",
      criteria: [
        ["A", "Multiple motor and one or more vocal tics at some time, not necessarily concurrently."],
        ["B", "Tics may wax and wane but have persisted for more than 1 year since first onset."],
        ["C", "Onset before age 18."],
        ["D", "Not due to a substance (cocaine) or medical condition (Huntington’s disease, postviral encephalitis)."]
      ],
      specifiers: [],
      epi: [["US clinically identified tics", "About 3 per 1,000"], ["Canada, school-age", "3–9 per 1,000"], ["Male:female", "2:1 to 4:1"], ["Heritability", "70%–85%"]],
      risk: ["Genetics shared with OCD and ADHD.", "Advanced paternal age, maternal smoking, perinatal adversity.", "Autoimmune associations."],
      differential: [
        { id: "persistent-tic", how: "Only motor or only vocal tics." },
        { id: "provisional-tic", how: "Under 1 year." },
        { id: "stereotypic-movement", how: "Early, rhythmic, fixed, no urge." },
        { id: "ocd", how: "Compulsions answer obsessions." },
        { name: "Functional tic disorder", how: "Prolonged tic attacks, sudden onset." },
        { name: "Myoclonus, chorea, dystonia", how: "Myoclonus: faster, not suppressible, no urge; chorea random and continual; dystonia sustained postures absent in sleep." }
      ],
      pearls: ["Eye blinking is a classic first tic.", "Coprolalia is uncommon (outside DSM).", "Peak severity at 10–12.", "Ecopipam under FDA review (2026)."],
      cmp: { symptoms: "Motor and vocal tics", exclusions: "Substances, medical causes", prevalence: "3–9 per 1,000 school-age", course: "Peak 10–12, improves in adolescence" },
      clues: [["Core picture", "A 9-year-old with blinking, shrugging and sniffing for 3 years, preceded by an urge"], ["Code", "F95.2"]],
      updates: upd("**F95.2** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "persistent-tic", ch: "ch01", sec: "s1-tic-criteria", pages: "93–98", critPages: "93",
      name: "Persistent (chronic) motor or vocal tic disorder", code: "F95.1",
      codes: [["F95.1", "Chronic motor or vocal tic disorder", NC]],
      aka: ["chronic tic disorder", "chronic motor tic disorder", "chronic vocal tic disorder"],
      essence: "Single or multiple **motor or vocal** tics, **not both**, for **more than 1 year** since first onset, beginning before 18; never met criteria for Tourette’s.",
      duration: "More than 1 year since first tic",
      functioning: "Variable",
      mood: "About 1 in 10 youth have suicidal thoughts or behavior",
      criteria: [
        ["A", "Motor or vocal tics, but not both."],
        ["B", "Persisted more than 1 year since first onset."],
        ["C", "Onset before 18."],
        ["D", "Not due to a substance or medical condition."],
        ["E", "Never met criteria for Tourette’s disorder."]
      ],
      specifiers: ["With motor tics only", "With vocal tics only"],
      epi: [["Prevalence", "Included in tic disorder estimates"]],
      risk: ["As for Tourette’s disorder."],
      differential: [
        { id: "tourette", how: "Both motor and vocal tics at some time." },
        { id: "provisional-tic", how: "Under 1 year." }
      ],
      pearls: ["The only tic disorder with a motor/vocal specifier."],
      cmp: { symptoms: "Motor or vocal tics", exclusions: "Tourette’s criteria ever met", prevalence: "Not separately given", course: "Waxes and wanes" },
      clues: [["Core picture", "A 12-year-old with 2 years of facial grimacing and no vocal tics"], ["Code", "F95.1"]],
      updates: upd("**F95.1** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "provisional-tic", ch: "ch01", sec: "s1-tic-criteria", pages: "93–98", critPages: "93",
      name: "Provisional tic disorder", code: "F95.0",
      codes: [["F95.0", "Transient tic disorder", NC]],
      aka: ["transient tic disorder"],
      essence: "Motor and/or vocal tics for **less than 1 year** since first onset, beginning before 18; never met criteria for Tourette’s or persistent tic disorder.",
      duration: "Less than 1 year since first tic",
      functioning: "Often none",
      mood: "Usually unaffected",
      criteria: [
        ["A", "Single or multiple motor and/or vocal tics."],
        ["B", "Present less than 1 year since first onset."],
        ["C", "Onset before 18."],
        ["D", "Not due to a substance or medical condition."],
        ["E", "Never met criteria for Tourette’s or persistent tic disorder."]
      ],
      specifiers: [],
      epi: [["Tics in childhood", "Common and mostly transient"]],
      risk: ["As for tic disorders."],
      differential: [
        { id: "tourette", how: "Over 1 year with motor and vocal tics." },
        { id: "persistent-tic", how: "Over 1 year with one kind." },
        { id: "stereotypic-movement", how: "Rhythmic, earlier onset." }
      ],
      pearls: ["Re-diagnose if tics pass the 1-year mark."],
      cmp: { symptoms: "Any tics", exclusions: "Over 1 year", prevalence: "Common", course: "Most transient" },
      clues: [["Core picture", "A 7-year-old with 4 months of eye blinking"], ["Code", "F95.0"]],
      updates: upd("**F95.0** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "other-specified-tic", ch: "ch01", sec: "s1-tic-course", pages: "98", critPages: "98",
      name: "Other specified tic disorder", code: "F95.8",
      codes: [["F95.8", "Other tic disorders", NC]],
      aka: ["late-onset tics", "secondary tics"],
      essence: "Tic symptoms with distress or impairment not meeting full criteria, with the **reason recorded** (e.g., **onset after age 18**), or tics with a **known cause**.",
      duration: "Varies",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Tic symptoms with distress or impairment, not meeting full criteria; record the reason (e.g., onset after age 18)."]],
      specifiers: ["Record the reason"],
      epi: [["Prevalence", "Not given"]],
      risk: ["Substances (cocaine), CNS insults."],
      differential: [{ id: "tourette", how: "Onset before 18 without a known cause." }, { id: "unspecified-tic", how: "Reason not recorded." }],
      pearls: ["First tics in adulthood: look for substances, CNS injury or a functional disorder."],
      cmp: { symptoms: "Atypical tics", exclusions: "Full tic disorder", prevalence: "Not given", course: "Varies" },
      clues: [["Code", "F95.8"]],
      updates: upd("**F95.8** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "unspecified-tic", ch: "ch01", sec: "s1-tic-course", pages: "98", critPages: "98",
      name: "Unspecified tic disorder", code: "F95.9",
      codes: [["F95.9", "Tic disorder, unspecified", NC]],
      aka: [],
      essence: "Tic symptoms with distress or impairment not meeting full criteria, when the reason is **not specified** or information is **insufficient**.",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Tic symptoms with distress or impairment, not meeting full criteria; reason not given or insufficient information."]],
      specifiers: [],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "other-specified-tic", how: "When the reason can be stated." }],
      pearls: ["Revise as the history clarifies."],
      cmp: { symptoms: "Insufficient information", exclusions: "Specific tic disorders", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "F95.9"]],
      updates: upd("**F95.9** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "other-specified-nd", ch: "ch01", sec: "s1-other-nd", pages: "99", critPages: "99",
      name: "Other specified neurodevelopmental disorder", code: "F88",
      codes: [["F88", "Other disorders of psychological development", NC]],
      aka: ["ND-PAE", "neurodevelopmental disorder associated with prenatal alcohol exposure", "FASD (related, outside DSM)"],
      essence: "Neurodevelopmental symptoms causing impairment without full criteria for any disorder in the chapter, with the **reason recorded**; the manual’s example is **neurodevelopmental disorder associated with prenatal alcohol exposure**.",
      duration: "Varies",
      functioning: "Impairment required",
      mood: "Varies",
      criteria: [["", "Neurodevelopmental symptoms with impairment not meeting full criteria for any disorder in the class; record the reason (e.g., ND-PAE)."]],
      specifiers: ["Record the reason"],
      epi: [["Prevalence", "Not given"]],
      risk: ["Prenatal alcohol for ND-PAE."],
      differential: [
        { id: "nd-pae", how: "The full proposed criteria set for ND-PAE (exposure, neurocognitive, self-regulation and adaptive thresholds) is in Section III, Chapter 25; the chart still records F88 with the reason (Section III, p. 903; app guidance)." },
        { id: "gdd", how: "Shares code F88: under 5, untestable." },
        { id: "other-specified-adhd", how: "Use the narrower residual when ADHD-like." },
        { id: "unspecified-nd", how: "Reason not recorded." }
      ],
      pearls: ["ND-PAE proposed criteria are in Section III."],
      cmp: { symptoms: "Subthreshold neurodevelopmental picture", exclusions: "Specific disorders", prevalence: "Not given", course: "Varies" },
      clues: [["Core picture", "A child with attention, self-regulation and adaptive problems after heavy prenatal alcohol exposure"], ["Code", "F88"]],
      updates: upd("**F88** is unchanged through the October 2026 ICD-10-CM update.")
    },
    {
      id: "unspecified-nd", ch: "ch01", sec: "s1-other-nd", pages: "99", critPages: "99",
      name: "Unspecified neurodevelopmental disorder", code: "F89",
      codes: [["F89", "Unspecified disorder of psychological development", NC]],
      aka: [],
      essence: "Neurodevelopmental symptoms causing impairment without full criteria, when the reason is **not specified** or information is **insufficient** (e.g., the emergency room).",
      duration: "Not specified",
      functioning: "Impairment required",
      mood: "Varies",
      criteria: [["", "Neurodevelopmental symptoms with impairment not meeting full criteria; reason not specified or insufficient information."]],
      specifiers: [],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "other-specified-nd", how: "When the reason can be stated." }, { id: "unspecified-idd", how: "F79 is for untestable IDD." }],
      pearls: ["F89, not F79."],
      cmp: { symptoms: "Insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "F89"]],
      updates: upd("**F89** is unchanged through the October 2026 ICD-10-CM update.")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Autism vs social (pragmatic) communication disorder", ids: ["asd", "spcd"] },
    { label: "Autism vs ADHD", ids: ["asd", "adhd"] },
    { label: "IDD vs global developmental delay vs unspecified IDD", ids: ["idd", "gdd", "unspecified-idd"] },
    { label: "ADHD vs specific learning disorder", ids: ["adhd", "sld"] },
    { label: "Tourette’s vs persistent vs provisional tic disorder", ids: ["tourette", "persistent-tic", "provisional-tic"] },
    { label: "Stereotypic movement disorder vs Tourette’s disorder", ids: ["stereotypic-movement", "tourette"] },
    { label: "Language vs speech sound disorder vs stuttering", ids: ["language-disorder", "speech-sound-disorder", "stuttering"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 1: neurodevelopmental durations", ticks: [[0, "0"], [33.3, "6 mo"], [66.7, "1 y"], [100, "18 mo"]], rows: [
      { label: "ADHD", dx: "adhd", from: 0, to: 33.3, color: "hy", span: "≥6 months" },
      { label: "SLD", dx: "sld", from: 0, to: 33.3, color: "guide", span: "≥6 mo despite help" },
      { label: "Provisional tic", dx: "provisional-tic", from: 0, to: 66.7, color: "case", span: "Under 1 year" },
      { label: "Persistent tic", dx: "persistent-tic", from: 66.7, to: 100, color: "dx", span: "Over 1 year", open: true },
      { label: "Tourette’s", dx: "tourette", from: 66.7, to: 100, color: "pharm", span: "Over 1 year", open: true }
    ], note: "Age rules: ADHD symptoms before **12**; tics before **18**; global developmental delay under **5**." }
  ]);
})();
