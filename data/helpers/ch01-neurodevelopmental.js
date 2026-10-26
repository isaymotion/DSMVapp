/*
 * Diagnostic helpers for Chapter 1 (Neurodevelopmental Disorders), DSM-5-TR pp. 35–99.
 * "neurodevelopmental": from the presenting concern to IDD (with severity), global developmental delay,
 *   a communication disorder, ASD, ADHD (with presentation), specific learning disorder or DCD, with the code.
 * "tics": from a repetitive movement or sound to stereotypic movement disorder, a tic disorder or a look-alike.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "neurodevelopmental",
    chapter: "ch01",
    title: "Which neurodevelopmental disorder?",
    summary: "Start from the main concern (global delay, communication, social, attention, learning or motor) and work through the age, threshold and exclusion rules to a diagnosis and code.",
    caution: "A teaching aid built from DSM-5-TR pp. 35–99. Neurodevelopmental diagnoses need history from several informants, standardized testing where indicated, hearing and vision checks and a physical and neurological examination. Disorders often co-occur: run the helper again for each concern. Codes are unchanged through October 2026.",
    start: "main",
    nodes: {
      main: {
        q: "What is the main concern?",
        help: "If there are several, start with the most impairing one and come back for the others; co-occurrence is the rule in this chapter.",
        options: [
          { label: "Global delay, or low intellectual and everyday functioning", to: "age5", note: "Intellectual developmental disorders." },
          { label: "Speech, language or communication", to: "comm", note: "Communication disorders." },
          { label: "Social interaction, with or without repetitive behavior or narrow interests", to: "social", note: "Autism or social communication." },
          { label: "Inattention, hyperactivity or impulsivity", to: "attn1", note: "ADHD." },
          { label: "Learning to read, write or do math", to: "learn1", note: "Specific learning disorder." },
          { label: "Clumsiness or poor motor coordination", to: "motor1", note: "Developmental coordination disorder." },
          { label: "Repetitive movements, tics or odd sounds", to: "r:movements", note: "Use the movement and tic helper." }
        ]
      },
      age5: {
        q: "Is the child under 5 and unable to complete standardized intellectual testing?",
        help: "Including children too young for formal tests. Severity cannot then be rated reliably.",
        options: [
          { label: "Yes", to: "r:gdd", note: "Under 5, not testable." },
          { label: "No: 5 or older, or testable", to: "testable", note: "Continue." }
        ]
      },
      testable: {
        q: "Can intellectual and adaptive functioning be assessed with locally available tools?",
        help: "Blindness, prelingual deafness, locomotor disability, severe problem behavior or a co-occurring mental disorder can make assessment impossible.",
        options: [
          { label: "Yes", to: "iq", note: "Assess." },
          { label: "No: assessment is impossible for those reasons", to: "r:unspec-idd", note: "Over 5, untestable." }
        ]
      },
      iq: {
        q: "What do clinical assessment and standardized testing show?",
        help: "IDD: intellectual deficits (about 2 SD below the mean, roughly 65–75 with error) and adaptive deficits needing ongoing support in at least one domain, beginning in the developmental period. IQ alone is not enough.",
        options: [
          { label: "Intellectual and adaptive deficits, beginning in childhood", to: "iddsev", note: "IDD." },
          { label: "Normal intellect; problems confined to academic skills", to: "learn1", note: "Consider specific learning disorder." },
          { label: "Previously normal functioning that has declined", to: "r:ncd", note: "A loss, not a failure to develop." }
        ]
      },
      iddsev: {
        q: "Which best describes adaptive functioning (not IQ)?",
        help: "Rate the conceptual, social and practical domains (Table 1, pp. 39–41).",
        options: [
          { label: "Independent self-care; needs support for complex tasks (money, transport, health or legal decisions); gullible", to: "r:idd-mild", note: "Mild." },
          { label: "Self-care achieved only after long teaching; simple spoken language; works with considerable support", to: "r:idd-mod", note: "Moderate." },
          { label: "Single words or phrases; needs support for all daily activities and supervision at all times", to: "r:idd-sev", note: "Severe." },
          { label: "Nonsymbolic communication; dependent on others for all care", to: "r:idd-prof", note: "Profound." }
        ]
      },
      comm: {
        q: "What is the main communication problem?",
        help: "Speech is sound production; language is vocabulary, grammar and discourse; pragmatics is the social use of language.",
        options: [
          { label: "Speech sounds are unclear (articulation)", to: "ssd1", note: "Speech sound disorder?" },
          { label: "Small vocabulary, simple or ungrammatical sentences, poor storytelling or comprehension", to: "lang1", note: "Language disorder?" },
          { label: "Repetitions, prolongations, blocks or tense speech", to: "stut1", note: "Stuttering?" },
          { label: "The social use of language (adapting to listeners, conversation rules, idioms)", to: "social", note: "Pragmatics: check for autism first." }
        ]
      },
      ssd1: {
        q: "Is there a structural, neurological or hearing cause, such as cleft palate, cerebral palsy, hearing loss or TBI?",
        help: "Dysarthria shows neurological signs and a distinctive voice. Remember the norms: about 50% intelligible at 2, intelligible at 3, most sounds by 5, one “late eight” sound normal to 8.",
        options: [
          { label: "No; errors are beyond age norms and limit communication", to: "r:ssd", note: "Speech sound disorder." },
          { label: "Yes", to: "r:not-ssd", note: "Not speech sound disorder." }
        ]
      },
      lang1: {
        q: "Has language that was already acquired been lost?",
        help: "Any loss of speech or language at any age needs neurological assessment.",
        options: [
          { label: "Yes, there has been a loss", to: "r:regression", note: "Regression." },
          { label: "No, it has always been delayed", to: "lang2", note: "Continue." }
        ]
      },
      lang2: {
        q: "Has hearing been tested, and are IDD and global developmental delay excluded as the explanation?",
        help: "A verbal–nonverbal discrepancy is not required. In bilingual children, a true disorder affects both languages.",
        options: [
          { label: "Yes: normal hearing; not explained by IDD or global delay", to: "r:language", note: "Language disorder." },
          { label: "Hearing not tested, or hearing loss found", to: "r:hearing", note: "Exclude hearing first." },
          { label: "Delays are global, across several domains", to: "age5", note: "Consider IDD or global delay." }
        ]
      },
      stut1: {
        q: "When did the dysfluency begin?",
        help: "Childhood-onset stuttering begins by 6 in 80%–90% (range 2–7).",
        options: [
          { label: "In early childhood", to: "stut2", note: "Continue." },
          { label: "During or after adolescence", to: "r:adult-fluency", note: "Adult-onset." }
        ]
      },
      stut2: {
        q: "Are there frequent sound or syllable repetitions, prolongations, broken words, blocks, circumlocutions or tense words, causing speech anxiety or functional limits?",
        help: "Young children normally repeat whole words or phrases (“I want, I want juice”), use fillers and revise sentences.",
        options: [
          { label: "Yes", to: "r:stuttering", note: "Childhood-onset fluency disorder." },
          { label: "No: whole-word or phrase repetitions, no distress", to: "r:normal-dysfluency", note: "Normal dysfluency." }
        ]
      },
      social: {
        q: "Have there been at least two kinds of restricted, repetitive behavior, now or in early childhood?",
        help: "Stereotyped movements, object use or speech (echolalia); insistence on sameness and rituals; intense narrow interests; sensory over- or under-reactivity. Ask carefully about the preschool years.",
        options: [
          { label: "Yes, now or by history", to: "asd1", note: "Possible autism." },
          { label: "No: fewer than two kinds, now or by history", to: "spcd1", note: "Consider social (pragmatic) communication disorder." }
        ]
      },
      asd1: {
        q: "Are all three social communication deficits present, now or by history: reciprocity, nonverbal communication, and relationships?",
        help: "With current impairment and early onset (symptoms may have been masked or emerged when demands rose).",
        options: [
          { label: "Yes, all three", to: "asd2", note: "Criterion A met." },
          { label: "No, only some", to: "r:asd-sub", note: "Subthreshold." }
        ]
      },
      asd2: {
        q: "Is intellectual developmental disorder also present?",
        help: "ASD and IDD can both be diagnosed only when social communication is below the general developmental level.",
        options: [
          { label: "No", to: "r:asd", note: "Autism spectrum disorder." },
          { label: "Yes, and social communication is below the developmental level", to: "r:asd-idd", note: "Both." },
          { label: "Yes, and social skills match the developmental level", to: "r:idd-only", note: "IDD alone." }
        ]
      },
      spcd1: {
        q: "Are all four pragmatic deficits present (social purposes, adapting to listeners, conversation rules, nonliteral meaning) with adequate vocabulary and grammar?",
        help: "Low structural language points to language disorder instead.",
        options: [
          { label: "Yes", to: "spcd2", note: "Continue." },
          { label: "No: vocabulary and grammar are also poor", to: "lang1", note: "Consider language disorder." }
        ]
      },
      spcd2: {
        q: "Did effective social communication develop, and is it now unused because of fear of embarrassment?",
        help: "Timing separates the two: in social (pragmatic) communication disorder the skills never developed.",
        options: [
          { label: "Yes: skills developed, fear now blocks them", to: "r:social-anxiety", note: "Social anxiety disorder." },
          { label: "No: the skills never developed", to: "r:spcd", note: "Social (pragmatic) communication disorder." }
        ]
      },
      attn1: {
        q: "Are there six or more symptoms of inattention and/or six or more of hyperactivity-impulsivity (five if 17 or older), for at least 6 months, beyond developmental level?",
        help: "Symptoms must not be only defiance or failure to understand instructions.",
        options: [
          { label: "Yes", to: "attn2", note: "Criterion A met." },
          { label: "No: fewer, but impairing", to: "r:adhd-sub", note: "Subthreshold." }
        ]
      },
      attn2: {
        q: "Were several symptoms present before age 12?",
        help: "Adult recall is unreliable: get school reports or a parent’s account.",
        options: [
          { label: "Yes", to: "attn3", note: "Criterion B met." },
          { label: "No: they began in adolescence or adulthood", to: "r:adhd-late", note: "Not ADHD." }
        ]
      },
      attn3: {
        q: "Are several symptoms present in two or more settings (home, school or work, friends)?",
        help: "Use informants who see the person in each setting; signs can vanish in the office.",
        options: [
          { label: "Yes", to: "attn4", note: "Criterion C met." },
          { label: "No: only in one setting", to: "r:adhd-onesetting", note: "Look for a setting-specific cause." }
        ]
      },
      attn4: {
        q: "Is another condition a better explanation?",
        help: "Episodic mood change (bipolar, depression), trauma (PTSD), worry (anxiety), substances or medications (akathisia, bronchodilators, thyroid), psychosis, IDD in an unsuitable class, a learning disorder, sleep-disordered breathing.",
        options: [
          { label: "No", to: "attn5", note: "Criterion E met." },
          { label: "Yes", to: "r:adhd-other", note: "Treat or diagnose that instead." }
        ]
      },
      attn5: {
        q: "Over the past 6 months, which domains meet the symptom threshold?",
        help: "The presentation can change over time; the diagnosis stays.",
        options: [
          { label: "Both inattention and hyperactivity-impulsivity", to: "r:adhd-comb", note: "Combined." },
          { label: "Inattention only", to: "r:adhd-inatt", note: "Predominantly inattentive." },
          { label: "Hyperactivity-impulsivity only", to: "r:adhd-hyp", note: "Predominantly hyperactive/impulsive." }
        ]
      },
      learn1: {
        q: "Has the difficulty persisted for at least 6 months despite targeted help?",
        help: "SLD needs restricted progress despite intervention, not just low grades.",
        options: [
          { label: "Yes", to: "learn2", note: "Criterion A met." },
          { label: "No, or no help has been given yet", to: "r:sld-notyet", note: "Intervene and reassess." }
        ]
      },
      learn2: {
        q: "Are other explanations excluded, and are skills well below age on individually administered tests?",
        help: "Exclude IDD (IQ below about 70 ± 5), uncorrected vision or hearing, inadequate instruction, absenteeism, the language of instruction and adversity. About 1.5 SD below the mean (≤78) gives the greatest certainty.",
        options: [
          { label: "Yes", to: "learn3", note: "Criteria B and D met." },
          { label: "No: another factor explains it", to: "r:sld-other", note: "Not SLD." }
        ]
      },
      learn3: {
        q: "Which academic domains are impaired?",
        help: "Each impaired domain is coded separately, with its subskills.",
        options: [
          { label: "Reading (word accuracy, fluency, comprehension)", to: "r:sld-read", note: "F81.0." },
          { label: "Written expression (spelling, grammar, organization)", to: "r:sld-write", note: "F81.81." },
          { label: "Mathematics (number sense, facts, calculation, reasoning)", to: "r:sld-math", note: "F81.2." },
          { label: "More than one", to: "r:sld-multi", note: "Code each." }
        ]
      },
      motor1: {
        q: "Does a neurological condition affecting movement or a visual impairment explain the clumsiness?",
        help: "Cerebral palsy, cerebellar lesions, neuromuscular or degenerative disease show additional findings on neurological examination.",
        options: [
          { label: "No: neurological and visual examinations are normal", to: "motor2", note: "Continue." },
          { label: "Yes", to: "r:motor-neuro", note: "Not DCD." }
        ]
      },
      motor2: {
        q: "Is the child at least 5, with coordination well below age that persistently interferes with daily activities?",
        help: "DCD is rarely diagnosed before 5. In IDD, motor problems must exceed what mental age explains.",
        options: [
          { label: "Yes", to: "r:dcd", note: "DCD." },
          { label: "Under 5", to: "r:dcd-young", note: "Wait and reassess." }
        ]
      }
    },
    results: {
      "movements": { label: "Use the other helper", dx: "Repetitive movements or tics", line: "Stereotypies, tics and their look-alikes are covered in the [[helper:tics|movement and tic helper]].", points: ["Key questions: age at onset, rhythm, premonitory urge, duration since the first tic, motor and vocal tics."], link: { ch: "ch01", sec: "s1-tic-criteria", label: "Tic disorders" } },
      "gdd": { dx: "Global developmental delay", line: "Under 5, missed milestones in several areas, not reliably testable.", points: ["Code: F88.", "Reassess after a period of time; some children later meet IDD criteria.", "Screen for autism and hearing loss."], link: { ch: "ch01", sec: "s1-gdd", label: "Global developmental delay" }, dxId: "gdd" },
      "unspec-idd": { dx: "Unspecified intellectual developmental disorder", line: "Over 5, when sensory, physical, behavioral or psychiatric factors make assessment impossible.", points: ["Code: F79 (not F89).", "Exceptional use only; reassess."], link: { ch: "ch01", sec: "s1-gdd", label: "Unspecified IDD" }, dxId: "unspecified-idd" },
      "ncd": { label: "Consider", dx: "Neurocognitive disorder", line: "A decline from a previous level is a neurocognitive disorder; IDD is a failure to develop.", points: ["Both can be diagnosed (e.g., Down syndrome with Alzheimer’s disease, or IDD with further loss after a head injury)."], link: { ch: "ch01", sec: "s1-idd-ddx", label: "IDD differential" }, dxId: "major-ncd" },
      "idd-mild": { dx: "Intellectual developmental disorder, mild", line: "Conceptual difficulties with academics, time and money; social immaturity and gullibility; support for complex tasks.", points: ["Code: F70.", "Look for a genetic cause and record it as a concurrent diagnosis.", "Screen for suicidal thoughts and comorbidity."], link: { ch: "ch01", sec: "s1-idd-severity", label: "Severity levels" }, dxId: "idd" },
      "idd-mod": { dx: "Intellectual developmental disorder, moderate", line: "Elementary-level academics; simple spoken language; self-care after long teaching; supported work.", points: ["Code: F71.", "Caretakers help with life decisions."], link: { ch: "ch01", sec: "s1-idd-severity", label: "Severity levels" }, dxId: "idd" },
      "idd-sev": { dx: "Intellectual developmental disorder, severe", line: "Little grasp of written language or numbers; single words or phrases; supervision at all times.", points: ["Code: F72.", "Self-injury in a significant minority: consider stereotypic movement disorder."], link: { ch: "ch01", sec: "s1-idd-severity", label: "Severity levels" }, dxId: "idd" },
      "idd-prof": { dx: "Intellectual developmental disorder, profound", line: "Concepts about the physical world; nonsymbolic communication; dependent for all care.", points: ["Code: F73.", "Sensory and motor impairments are common barriers."], link: { ch: "ch01", sec: "s1-idd-severity", label: "Severity levels" }, dxId: "idd" },
      "not-ssd": { label: "Not speech sound disorder", dx: "Speech problem with a structural, neurological or hearing cause", line: "Cleft palate, dysarthria (e.g., cerebral palsy), hearing loss or TBI explains the errors.", points: ["Diagnose speech sound disorder only if errors exceed what the condition explains (hearing loss)."], link: { ch: "ch01", sec: "s1-speech-sound", label: "Speech sound disorder" } },
      "ssd": { dx: "Speech sound disorder", line: "Persistent articulation errors that reduce intelligibility, without structural, neurological or hearing cause.", points: ["Code: F80.0.", "Most respond well to treatment; worse with coexisting language disorder."], link: { ch: "ch01", sec: "s1-speech-sound", label: "Speech sound disorder" }, dxId: "speech-sound-disorder" },
      "regression": { label: "Investigate", dx: "Loss of language: neurological work-up", line: "Any language loss needs assessment, including a routine and sleep EEG, for Landau-Kleffner syndrome and other epileptic causes.", points: ["Early loss of social-communication skills (first 2 years) should prompt autism assessment.", "Loss after 2 years of normal development needs extensive medical work-up."], link: { ch: "ch01", sec: "s1-language", label: "Language regression" } },
      "language": { dx: "Language disorder", line: "Reduced vocabulary, limited sentence structure and impaired discourse, below age, from early development.", points: ["Code: F80.2.", "Assess receptive and expressive language separately; receptive deficits have a poorer prognosis.", "Look for co-occurring SLD, ADHD and speech sound disorder."], link: { ch: "ch01", sec: "s1-language", label: "Language disorder" }, dxId: "language-disorder" },
      "hearing": { label: "Not yet", dx: "Exclude hearing impairment first", line: "Hearing loss must be excluded as the primary cause of language difficulties.", points: ["If hearing loss is present, diagnose language disorder only if deficits exceed what it explains."], link: { ch: "ch01", sec: "s1-language", label: "Language disorder differential" } },
      "stuttering": { dx: "Childhood-onset fluency disorder (stuttering)", line: "Frequent disruptions of fluency beginning in early childhood, with speech anxiety or functional limits.", points: ["Code: F80.81.", "65%–85% recover; severity at 8 predicts persistence.", "Ask about social anxiety."], link: { ch: "ch01", sec: "s1-stuttering", label: "Stuttering" }, dxId: "stuttering" },
      "normal-dysfluency": { label: "No diagnosis", dx: "Normal developmental dysfluency", line: "Whole-word and phrase repetitions, fillers and revisions are common in young children.", points: ["Reassess if dysfluency increases in frequency or complexity."], link: { ch: "ch01", sec: "s1-stuttering", label: "Stuttering differential" } },
      "adult-fluency": { label: "Not neurodevelopmental", dx: "Adult-onset fluency disorder", line: "Dysfluency beginning in adolescence or later is not a neurodevelopmental disorder; if due to stroke, TBI, tumor or a drug, record it with that cause (not a DSM diagnosis).", points: ["Code F98.5 only when no neurological cause is found.", "Look for stroke, TBI, tumor or a drug cause."], link: { ch: "ch01", sec: "s1-stuttering", label: "Adult-onset dysfluency" }, dxId: "stuttering" },
      "asd": { dx: "Autism spectrum disorder", line: "All three social communication deficits and at least two restricted, repetitive features, from early development, with current impairment.", points: ["Code: F84.0.", "Rate severity separately for each domain; record intellectual and language impairment, associated conditions, catatonia (F06.1).", "Screen for ADHD, anxiety, epilepsy and sleep problems."], link: { ch: "ch01", sec: "s1-asd-criteria", label: "ASD criteria" }, dxId: "asd" },
      "asd-idd": { dx: "Autism spectrum disorder with accompanying intellectual impairment", line: "Social communication is below the general developmental level, so both are diagnosed.", points: ["Codes: F84.0 plus F70–F73 for IDD severity.", "Reassess IQ over development; early IQ in autism can be unstable."], link: { ch: "ch01", sec: "s1-asd-ddx", label: "ASD and IDD" }, dxId: "asd" },
      "idd-only": { label: "IDD, not ASD", dx: "Intellectual developmental disorder without autism", line: "Social communication matches the general developmental level, and repetitive behavior is common in IDD.", points: ["Rate IDD severity by adaptive functioning.", "Reconsider ASD if social skills fall below nonverbal skills."], link: { ch: "ch01", sec: "s1-asd-ddx", label: "ASD versus IDD" }, dxId: "idd" },
      "asd-sub": { label: "Subthreshold", dx: "Autism features below threshold", line: "Restricted, repetitive behavior with only partial social communication deficits does not meet ASD.", points: ["Reassess with a fuller developmental history and observation.", "If impairing, consider other specified (F88) or unspecified (F89) neurodevelopmental disorder, recording the reason."], link: { ch: "ch01", sec: "s1-asd-criteria", label: "ASD criteria" }, dxId: "other-specified-nd" },
      "social-anxiety": { label: "Consider", dx: "Social anxiety disorder", line: "Social communication skills developed normally but go unused because of fear of scrutiny.", points: ["Not social (pragmatic) communication disorder, where skills never developed."], link: { ch: "ch01", sec: "s1-spcd", label: "SPCD differential" }, dxId: "social-anxiety" },
      "spcd": { dx: "Social (pragmatic) communication disorder", line: "All four pragmatic deficits, with no restricted, repetitive behavior now or ever, and intact structural language.", points: ["Code: F80.82.", "ASD supersedes it whenever ASD criteria are met."], link: { ch: "ch01", sec: "s1-spcd", label: "Social (pragmatic) communication disorder" }, dxId: "spcd" },
      "adhd-sub": { dx: "Other specified or unspecified ADHD", line: "ADHD-type symptoms with impairment below the symptom threshold.", points: ["Other specified ADHD (F90.8) with the reason, e.g., “with insufficient inattention symptoms”; or unspecified (F90.9)."], link: { ch: "ch01", sec: "s1-adhd-criteria", label: "Residual ADHD categories" }, dxId: "other-specified-adhd" },
      "adhd-late": { label: "Not ADHD", dx: "Late-onset attention problems", line: "ADHD cannot be diagnosed without several symptoms before 12; symptoms first appearing after 13 suggest another disorder or substance effects.", points: ["Look for depression, anxiety, substance use, sleep problems or a neurocognitive cause."], link: { ch: "ch01", sec: "s1-adhd-features", label: "Why age 12" } },
      "adhd-onesetting": { label: "Not yet ADHD", dx: "Symptoms in one setting only", line: "Criterion C needs several symptoms in two or more settings.", points: ["Look for a learning disorder, a mismatch between ability and class placement, bullying or anxiety in that setting."], link: { ch: "ch01", sec: "s1-adhd-criteria", label: "ADHD criteria" } },
      "adhd-other": { label: "Another explanation", dx: "Attention symptoms better explained by another condition", line: "Diagnose the other condition; ADHD is not given if symptoms occur only during psychosis or are better explained by another disorder.", points: ["Bipolar disorder is episodic; PTSD needs a trauma history; anxiety inattention follows worry.", "Medication-induced symptoms: other specified or unspecified other (or unknown) substance-related disorder."], link: { ch: "ch01", sec: "s1-adhd-ddx", label: "ADHD differential" } },
      "adhd-comb": { dx: "ADHD, combined presentation", line: "Inattention and hyperactivity-impulsivity both meet threshold over the past 6 months.", points: ["Code: F90.2.", "About half also have ODD and about a quarter conduct disorder.", "Specify severity."], link: { ch: "ch01", sec: "s1-adhd-criteria", label: "ADHD presentations" }, dxId: "adhd" },
      "adhd-inatt": { dx: "ADHD, predominantly inattentive presentation", line: "Inattention meets threshold; hyperactivity-impulsivity does not, over the past 6 months.", points: ["Code: F90.0.", "Females are more likely than males to present this way (p. 72)."], link: { ch: "ch01", sec: "s1-adhd-criteria", label: "ADHD presentations" }, dxId: "adhd" },
      "adhd-hyp": { dx: "ADHD, predominantly hyperactive/impulsive presentation", line: "Hyperactivity-impulsivity meets threshold; inattention does not, over the past 6 months.", points: ["Code: F90.1.", "Commonest in preschoolers; reassess as inattention emerges at school."], link: { ch: "ch01", sec: "s1-adhd-criteria", label: "ADHD presentations" }, dxId: "adhd" },
      "sld-notyet": { label: "Not yet", dx: "Provide targeted intervention and reassess", line: "SLD requires difficulties persisting at least 6 months despite interventions that target them.", points: ["Monitor progress with curriculum-based measures."], link: { ch: "ch01", sec: "s1-sld-criteria", label: "SLD criteria" } },
      "sld-other": { label: "Not SLD", dx: "Learning problems explained by another factor", line: "IDD, sensory loss, inadequate instruction, absenteeism, a second language or adversity explains the difficulty.", points: ["With IDD, diagnose SLD only if learning problems exceed those expected for the IDD.", "ADHD impairs performing, not learning, skills."], link: { ch: "ch01", sec: "s1-sld-course", label: "SLD differential" } },
      "sld-read": { dx: "Specific learning disorder with impairment in reading", line: "Word reading accuracy, reading rate or fluency, and/or comprehension.", points: ["Code: F81.0, listing each impaired subskill.", "“Dyslexia” may describe the decoding pattern; note any other difficulties too."], link: { ch: "ch01", sec: "s1-sld-criteria", label: "SLD domains" }, dxId: "sld" },
      "sld-write": { dx: "Specific learning disorder with impairment in written expression", line: "Spelling, grammar and punctuation, and/or clarity and organization.", points: ["Code: F81.81.", "Separate from motor handwriting problems (DCD)."], link: { ch: "ch01", sec: "s1-sld-criteria", label: "SLD domains" }, dxId: "sld" },
      "sld-math": { dx: "Specific learning disorder with impairment in mathematics", line: "Number sense, arithmetic facts, calculation and/or math reasoning.", points: ["Code: F81.2.", "“Dyscalculia” may describe the number-processing pattern."], link: { ch: "ch01", sec: "s1-sld-criteria", label: "SLD domains" }, dxId: "sld" },
      "sld-multi": { dx: "Specific learning disorder in more than one domain", line: "Each impaired domain is coded and recorded separately with its subskills.", points: ["e.g., F81.0 (reading fluency, comprehension) and F81.2 (calculation, reasoning).", "Rate an overall severity."], link: { ch: "ch01", sec: "s1-sld-criteria", label: "Recording SLD" }, dxId: "sld" },
      "motor-neuro": { label: "Not DCD", dx: "Motor impairment due to another medical condition", line: "Cerebral palsy, cerebellar, neuromuscular or degenerative disease, or visual impairment explains the problem.", points: ["Refer for neurological evaluation as needed."], link: { ch: "ch01", sec: "s1-dcd", label: "DCD differential" } },
      "dcd": { dx: "Developmental coordination disorder", line: "Coordination well below age and opportunity, persistently interfering with daily life, with normal neurological and visual examinations.", points: ["Code: F82.", "About half also have ADHD; check for SLD and ASD."], link: { ch: "ch01", sec: "s1-dcd", label: "Developmental coordination disorder" }, dxId: "dcd" },
      "dcd-young": { label: "Wait", dx: "Too early to diagnose DCD reliably", line: "DCD is typically not diagnosed before age 5 because motor development varies and some children catch up.", points: ["Monitor; consider global developmental delay if several domains are delayed."], link: { ch: "ch01", sec: "s1-dcd", label: "DCD" } }
    }
  },
  {
    id: "tics",
    chapter: "ch01",
    title: "Tic, stereotypy or something else?",
    summary: "Classify a repetitive movement or sound as a stereotypy, a tic disorder (with the hierarchy and 1-year rule) or a look-alike such as OCD, a body-focused repetitive behavior, a neurological movement disorder or a functional tic disorder.",
    caution: "A teaching aid built from DSM-5-TR pp. 89–98. A neurological examination is needed for any new movement disorder; first tics in adulthood need a search for substances, CNS injury or a functional disorder. Codes are unchanged through October 2026.",
    start: "kind",
    nodes: {
      kind: {
        q: "What does the movement or sound look like?",
        help: "Watch for a while or ask for a video; ask about urges, rhythm, age at onset and what makes it better or worse.",
        options: [
          { label: "Rhythmic and fixed, the same each time, began in the first 3 years, enjoyed, no urge beforehand", to: "sm1", note: "Stereotypy?" },
          { label: "Sudden, brief and nonrhythmic, changing over time, often preceded by an urge", to: "t1", note: "Tic?" },
          { label: "Goal-directed hair pulling, skin picking or nail biting", to: "r:bfrb", note: "Body-focused repetitive behavior." },
          { label: "Repeated acts to neutralize an intrusive fear or thought", to: "r:ocd", note: "Compulsion." },
          { label: "Continual random movements, sustained twisted postures, or shock-like jerks without an urge", to: "r:neuro", note: "Chorea, dystonia or myoclonus." },
          { label: "Prolonged “tic attacks” lasting 15 minutes to hours, with sudden onset", to: "r:functional", note: "Functional tic disorder?" }
        ]
      },
      sm1: {
        q: "Does the person have autism spectrum disorder?",
        help: "Stereotypies are part of autism Criterion B.",
        options: [
          { label: "No", to: "sm3", note: "Continue." },
          { label: "Yes", to: "sm2", note: "Check the exception." }
        ]
      },
      sm2: {
        q: "Do the stereotypies cause self-injury, or are they severe enough to be a focus of treatment?",
        help: "Only then is stereotypic movement disorder added to autism.",
        options: [
          { label: "Yes", to: "sm3", note: "Both may be diagnosed." },
          { label: "No", to: "r:asd-only", note: "Part of autism." }
        ]
      },
      sm3: {
        q: "Do the movements interfere with activities or cause injury, with substances, neurological conditions and other mental disorders excluded?",
        help: "Simple stereotypies (rocking, sleep-transition rocking) are common in typical infants and toddlers and are easily stopped by distraction.",
        options: [
          { label: "Yes", to: "sm4", note: "Stereotypic movement disorder." },
          { label: "No: easily suppressed, no distress or interference", to: "r:sm-normal", note: "Normal development." }
        ]
      },
      sm4: {
        q: "Is there self-injury, or would there be without protective measures, and how much protection is needed?",
        help: "Severity: mild, suppressed by a sensory stimulus or distraction; moderate, explicit protection and behavioral modification; severe, continuous monitoring to prevent serious injury.",
        options: [
          { label: "No self-injury", to: "r:smd-noinj", note: "Without self-injury." },
          { label: "Self-injury, easily stopped by distraction", to: "r:smd-inj-mild", note: "Mild." },
          { label: "Self-injury needing protective measures and behavioral treatment", to: "r:smd-inj-mod", note: "Moderate." },
          { label: "Self-injury needing continuous monitoring", to: "r:smd-inj-sev", note: "Severe." }
        ]
      },
      t1: {
        q: "Did the first tic begin before age 18?",
        help: "Many adults recall milder tics in childhood when asked carefully; first onset in adulthood is exceedingly rare.",
        options: [
          { label: "Yes", to: "t2", note: "Criterion C met." },
          { label: "No: first tics after 18", to: "r:ost-late", note: "Late onset." }
        ]
      },
      t2: {
        q: "Is there strong evidence of a substance (e.g., cocaine) or medical cause (e.g., Huntington’s disease, postviral encephalitis)?",
        help: "A plausible, proximal and probable cause from history, examination or laboratory tests.",
        options: [
          { label: "No", to: "t3", note: "Criterion D met." },
          { label: "Yes", to: "r:ost-cause", note: "Known cause." }
        ]
      },
      t3: {
        q: "Has it been more than 1 year since the first tic?",
        help: "Count from the first tic, ignoring tic-free intervals of weeks or months.",
        options: [
          { label: "Yes", to: "t4", note: "Persistent." },
          { label: "No: less than 1 year", to: "r:provisional", note: "Provisional." }
        ]
      },
      t4: {
        q: "Which tics have been present at any time during the illness?",
        help: "For Tourette’s, the motor and vocal tics need not occur together or last a year each.",
        options: [
          { label: "Multiple motor and at least one vocal tic", to: "r:tourette", note: "Tourette’s disorder." },
          { label: "Motor tics only, ever", to: "r:persistent-motor", note: "Persistent, motor only." },
          { label: "Vocal tics only, ever", to: "r:persistent-vocal", note: "Persistent, vocal only." }
        ]
      }
    },
    results: {
      "asd-only": { label: "Part of autism", dx: "Stereotypies within autism spectrum disorder", line: "Motor stereotypies are an autism Criterion B feature; no separate diagnosis without self-injury or a treatment focus.", points: ["Reassess if self-injury develops."], link: { ch: "ch01", sec: "s1-stereotypic", label: "SMD and autism" }, dxId: "asd" },
      "sm-normal": { label: "No diagnosis", dx: "Normal developmental stereotypies", line: "Common in infancy and early childhood, easily suppressed, no distress and no effect on daily routine.", points: ["Simple stereotypies occur in 5%–19% of young typical children.", "In ages 1–3, stereotypies can signal an undetected neurodevelopmental problem: check development."], link: { ch: "ch01", sec: "s1-stereotypic", label: "Normal development" } },
      "smd-noinj": { dx: "Stereotypic movement disorder, without self-injurious behavior", line: "Repetitive, apparently purposeless movements that interfere with activities.", points: ["Code: F98.4.", "Record any associated condition (e.g., IDD, a genetic syndrome).", "Look for pain, stress or understimulation."], link: { ch: "ch01", sec: "s1-stereotypic", label: "Stereotypic movement disorder" }, dxId: "stereotypic-movement" },
      "smd-inj-mild": { dx: "Stereotypic movement disorder, with self-injurious behavior, mild", line: "Self-injurious stereotypies easily suppressed by a sensory stimulus or distraction.", points: ["Code: F98.4.", "Record any associated condition."], link: { ch: "ch01", sec: "s1-stereotypic", label: "Severity" }, dxId: "stereotypic-movement" },
      "smd-inj-mod": { dx: "Stereotypic movement disorder, with self-injurious behavior, moderate", line: "Needs explicit protective measures and behavioral modification.", points: ["Code: F98.4.", "Check for a painful medical condition."], link: { ch: "ch01", sec: "s1-stereotypic", label: "Severity" }, dxId: "stereotypic-movement" },
      "smd-inj-sev": { dx: "Stereotypic movement disorder, with self-injurious behavior, severe", line: "Continuous monitoring and protection are needed to prevent serious injury.", points: ["Code: F98.4, plus the associated condition (e.g., Lesch-Nyhan syndrome, severe IDD).", "Eye poking and head banging can cause retinal detachment and serious injury."], link: { ch: "ch01", sec: "s1-stereotypic", label: "Severity" }, dxId: "stereotypic-movement" },
      "bfrb": { label: "Not a stereotypy or tic", dx: "Body-focused repetitive behavior", line: "Hair pulling, skin picking and nail biting are more goal-directed and complex, and usually begin around puberty.", points: ["Consider trichotillomania or excoriation disorder.", "Skin picking with amphetamine use: substance/medication-induced OCRD."], link: { ch: "ch01", sec: "s1-stereotypic", label: "SMD differential" }, dxId: "trichotillomania" },
      "ocd": { label: "Consider", dx: "Obsessive-compulsive disorder", line: "Compulsions are performed in response to obsessions to reduce anxiety; complex tics instead follow a “just right” or symmetry need.", points: ["Tics and OCD often co-occur: diagnose both when criteria are met (tic-related specifier in OCD)."], link: { ch: "ch01", sec: "s1-tic-course", label: "Tic differential" }, dxId: "ocd" },
      "neuro": { label: "Neurological look-alike", dx: "Chorea, dystonia, myoclonus or paroxysmal dyskinesia", line: "Chorea is continual and random; dystonia is sustained co-contraction and absent in sleep; myoclonus is faster, unsuppressible and has no urge; paroxysmal dyskinesias are triggered by voluntary movement or exertion.", points: ["Refer for neurological assessment.", "Tardive dyskinesia follows antipsychotic exposure."], link: { ch: "ch01", sec: "s1-tic-course", label: "Tic differential" } },
      "functional": { label: "Consider", dx: "Functional tic disorder", line: "“Tic attacks” lasting 15 minutes to hours and sudden onset outside the usual age suggest a functional (conversion) disorder.", points: ["See functional neurological symptom disorder.", "Clinical teaching: a prior childhood tic history does not exclude it."], link: { ch: "ch01", sec: "s1-tic-course", label: "Functional tics" } },
      "ost-late": { dx: "Other specified tic disorder, with onset after age 18 years", line: "Tics beginning in adulthood do not meet any specific tic disorder.", points: ["Code: F95.8.", "Search for substances (cocaine), CNS insult or a functional disorder; ask about childhood tics."], link: { ch: "ch01", sec: "s1-tic-course", label: "Other specified tic disorder" }, dxId: "other-specified-tic" },
      "ost-cause": { dx: "Other specified tic disorder (known cause)", line: "When there is strong evidence of a plausible, proximal and probable cause, use other specified tic disorder.", points: ["Code: F95.8, recording the cause.", "Treat the underlying condition."], link: { ch: "ch01", sec: "s1-tic-criteria", label: "Known causes" }, dxId: "other-specified-tic" },
      "provisional": { dx: "Provisional tic disorder", line: "Motor and/or vocal tics for less than 1 year since the first tic, beginning before 18.", points: ["Code: F95.0.", "Reclassify if tics pass 1 year: persistent or Tourette’s."], link: { ch: "ch01", sec: "s1-tic-criteria", label: "Tic disorders" }, dxId: "provisional-tic" },
      "tourette": { dx: "Tourette’s disorder", line: "Multiple motor and at least one vocal tic at some time, more than 1 year since the first tic, onset before 18.", points: ["Code: F95.2.", "Screen for ADHD, OCD, anxiety and suicidal thoughts.", "Once diagnosed, a lower tic diagnosis is never given."], link: { ch: "ch01", sec: "s1-tic-criteria", label: "Tourette’s disorder" }, dxId: "tourette" },
      "persistent-motor": { dx: "Persistent (chronic) motor tic disorder, with motor tics only", line: "Motor tics for more than 1 year since first onset, never vocal tics, onset before 18.", points: ["Code: F95.1."], link: { ch: "ch01", sec: "s1-tic-criteria", label: "Persistent tic disorder" }, dxId: "persistent-tic" },
      "persistent-vocal": { dx: "Persistent (chronic) vocal tic disorder, with vocal tics only", line: "Vocal tics for more than 1 year since first onset, never motor tics, onset before 18.", points: ["Code: F95.1."], link: { ch: "ch01", sec: "s1-tic-criteria", label: "Persistent tic disorder" }, dxId: "persistent-tic" }
    }
  }
]);
