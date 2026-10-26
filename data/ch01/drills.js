/* Chapter 1 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifier, code). Codes unchanged through October 2026.
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var IDDSEV = ["Mild", "Moderate", "Severe", "Profound"];
  var ADHDP = ["Combined presentation", "Predominantly inattentive presentation", "Predominantly hyperactive/impulsive presentation", "In partial remission"];
  var TICS = ["Tourette’s disorder", "Persistent (chronic) motor or vocal tic disorder", "Provisional tic disorder", "Other specified tic disorder", "Unspecified tic disorder"];
  var COMM = ["Language disorder", "Speech sound disorder", "Childhood-onset fluency disorder (stuttering)", "Social (pragmatic) communication disorder", "Unspecified communication disorder"];

  SP.add("ch01", "dxline", [
    {
      id: "w1-01", tag: "IDD",
      "case": "A 20-year-old who reads at a third-grade level, is easily exploited, needs help with banking and health decisions, but is independent in self-care and works in a warehouse. IQ 66; adaptive deficits confirmed; onset in childhood.",
      parts: [
        { label: "Diagnosis", options: ["Intellectual developmental disorder", "Global developmental delay", "Unspecified intellectual developmental disorder", "Specific learning disorder", "Borderline intellectual functioning"], answer: 0 },
        { label: "Severity", options: IDDSEV, answer: 0 },
        { label: "Code", options: ["F70", "F71", "F79", "F88", "F81.0"], answer: 0 }
      ],
      line: "**F70** Intellectual developmental disorder (intellectual disability), mild",
      why: "Intellectual and adaptive deficits from childhood; independent self-care with support for complex tasks and gullibility: mild."
    },
    {
      id: "w1-02", tag: "IDD",
      "case": "A 30-year-old who speaks in single words, needs help with all meals, dressing and bathing, and must be supervised at all times. Lifelong; testing confirms deficits.",
      parts: [
        { label: "Diagnosis", options: ["Intellectual developmental disorder", "Major neurocognitive disorder", "Unspecified intellectual developmental disorder", "Autism spectrum disorder", "Global developmental delay"], answer: 0 },
        { label: "Severity", options: IDDSEV, answer: 2 },
        { label: "Code", options: ["F72", "F71", "F73", "F79", "F03.C0"], answer: 0 }
      ],
      line: "**F72** Intellectual developmental disorder (intellectual disability), severe",
      why: "Single words, support for all ADLs and constant supervision: severe."
    },
    {
      id: "w1-03", tag: "Global delay",
      "case": "A 3-year-old with delayed walking, few words and poor self-help skills who cannot complete standardized testing.",
      parts: [
        { label: "Diagnosis", options: ["Global developmental delay", "Intellectual developmental disorder, mild", "Unspecified intellectual developmental disorder", "Unspecified neurodevelopmental disorder", "Language disorder"], answer: 0 },
        { label: "Code", options: ["F88", "F79", "F89", "F70", "F80.2"], answer: 0 }
      ],
      line: "**F88** Global developmental delay",
      why: "Under 5, several domains delayed, not reliably testable; reassess later."
    },
    {
      id: "w1-04", tag: "Communication",
      "case": "A 6-year-old with short, ungrammatical sentences, a small vocabulary and poor story retelling; normal hearing and nonverbal IQ; sociable, no repetitive behaviors.",
      parts: [
        { label: "Diagnosis", options: COMM, answer: 0 },
        { label: "Code", options: ["F80.2", "F80.0", "F80.81", "F80.82", "F80.9"], answer: 0 }
      ],
      line: "**F80.2** Language disorder",
      why: "Vocabulary, grammar and discourse deficits with hearing and IDD excluded."
    },
    {
      id: "w1-05", tag: "Communication",
      "case": "A 6-year-old who repeats initial sounds, prolongs vowels and blocks, worse when reading in class, and now avoids speaking. Began at age 3.",
      parts: [
        { label: "Diagnosis", options: COMM, answer: 2 },
        { label: "Code", options: ["F80.81", "F98.5", "F80.0", "F95.2", "F80.82"], answer: 0 }
      ],
      line: "**F80.81** Childhood-onset fluency disorder (stuttering)",
      why: "Early-onset repetitions, prolongations and blocks with avoidance. Adult onset would be F98.5."
    },
    {
      id: "w1-06", tag: "Communication",
      "case": "A 10-year-old who misses idioms and sarcasm, cannot adapt her speech to listeners and breaks conversational rules; grammar is normal; no restricted or repetitive behaviors, now or in the past.",
      parts: [
        { label: "Diagnosis", options: COMM, answer: 3 },
        { label: "Code", options: ["F80.82", "F84.0", "F80.2", "F80.9", "F88"], answer: 0 }
      ],
      line: "**F80.82** Social (pragmatic) communication disorder",
      why: "All four pragmatic deficits with intact structural language and no ASD Criterion B features ever."
    },
    {
      id: "w1-07", tag: "ASD",
      "case": "A 7-year-old who speaks in full sentences but has failed back-and-forth conversation, odd attempts at friendship, a narrow interest in elevators and difficulty switching activities; noticeable impairment without supports; average IQ.",
      parts: [
        { label: "Diagnosis", options: ["Autism spectrum disorder", "Social (pragmatic) communication disorder", "ADHD", "Language disorder", "Social anxiety disorder"], answer: 0 },
        { label: "Severity", options: ["Level 1 (requiring support) in both domains", "Level 2 in both domains", "Level 3 in both domains", "One level for the whole disorder"], answer: 0 },
        { label: "Intellect and language", options: ["Without intellectual impairment, without language impairment", "With intellectual impairment", "With language impairment, phrase speech", "Not recorded"], answer: 0 },
        { label: "Code", options: ["F84.0", "F80.82", "F88", "F84.5", "F90.0"], answer: 0 }
      ],
      line: "**F84.0** Autism spectrum disorder, requiring support for social communication and for restricted, repetitive behaviors, without accompanying intellectual impairment, without accompanying language impairment",
      why: "Full ASD criteria at level 1 in each domain; record intellect and language. F84.5 (Asperger’s) is not a DSM-5-TR code."
    },
    {
      id: "w1-08", tag: "ASD",
      "case": "An autistic 14-year-old with phrase speech who has become mute, postures, resists movement and has waxy flexibility for 2 weeks.",
      parts: [
        { label: "Diagnosis", options: ["Autism spectrum disorder with catatonia", "Unspecified catatonia", "Schizophrenia, catatonic", "Stereotypic movement disorder", "Selective mutism"], answer: 0 },
        { label: "Codes", options: ["F84.0 + F06.1", "F84.0 only", "F06.1 only", "F20.9 + F06.1", "R29.818"], answer: 0 }
      ],
      line: "**F84.0** Autism spectrum disorder, with catatonia; **F06.1** catatonia associated with autism spectrum disorder",
      why: "Catatonia is recorded with the ASD specifier and its own code."
    },
    {
      id: "w1-09", tag: "ADHD",
      "case": "A 9-year-old with seven inattentive and seven hyperactive-impulsive symptoms for over a year, at home and school, since age 5.",
      parts: [
        { label: "Diagnosis", options: ["ADHD", "Oppositional defiant disorder", "Disruptive mood dysregulation disorder", "Specific learning disorder", "Other specified ADHD"], answer: 0 },
        { label: "Presentation", options: ADHDP, answer: 0 },
        { label: "Code", options: ["F90.2", "F90.0", "F90.1", "F90.8", "F90.9"], answer: 0 }
      ],
      line: "**F90.2** Attention-deficit/hyperactivity disorder, combined presentation",
      why: "Both domains meet threshold for the past 6 months."
    },
    {
      id: "w1-10", tag: "ADHD",
      "case": "A 22-year-old with five inattentive and two hyperactive symptoms, at work and home, with school reports documenting the same from age 9.",
      parts: [
        { label: "Diagnosis", options: ["ADHD", "Other specified ADHD", "Unspecified ADHD", "No diagnosis", "Generalized anxiety disorder"], answer: 0 },
        { label: "Presentation", options: ADHDP, answer: 1 },
        { label: "Code", options: ["F90.0", "F90.2", "F90.1", "F90.8", "F90.9"], answer: 0 }
      ],
      line: "**F90.0** Attention-deficit/hyperactivity disorder, predominantly inattentive presentation",
      why: "From age 17, five symptoms suffice; inattention only meets threshold."
    },
    {
      id: "w1-11", tag: "ADHD",
      "case": "A 12-year-old with four inattentive and three hyperactive symptoms that clearly impair schoolwork; the clinician records “with insufficient inattention symptoms.” Symptoms since age 6, two settings.",
      parts: [
        { label: "Diagnosis", options: ["Other specified ADHD", "ADHD, inattentive presentation", "Unspecified ADHD", "No diagnosis", "Specific learning disorder"], answer: 0 },
        { label: "Code", options: ["F90.8", "F90.9", "F90.0", "F88", "F89"], answer: 0 }
      ],
      line: "**F90.8** Other specified attention-deficit/hyperactivity disorder, with insufficient inattention symptoms",
      why: "Subthreshold with the reason recorded; the narrower ADHD residual is preferred over F88."
    },
    {
      id: "w1-12", tag: "SLD",
      "case": "An 11-year-old with slow, inaccurate word reading and poor calculation despite a year of targeted help; both standard scores below 78; IQ 102.",
      parts: [
        { label: "Diagnosis", options: ["Specific learning disorder", "Intellectual developmental disorder", "ADHD", "Language disorder", "Unspecified neurodevelopmental disorder"], answer: 0 },
        { label: "Domains", options: ["Reading and mathematics, coded separately", "Reading only", "Mathematics only", "A single combined code"], answer: 0 },
        { label: "Codes", options: ["F81.0 + F81.2", "F81.9", "F81.0 only", "F81.81 + F81.2", "F88"], answer: 0 }
      ],
      line: "**F81.0** Specific learning disorder with impairment in reading (word reading accuracy, reading rate or fluency); **F81.2** with impairment in mathematics (accurate or fluent calculation)",
      why: "Each impaired domain is coded separately with its subskills."
    },
    {
      id: "w1-13", tag: "Motor",
      "case": "A 7-year-old with severe IDD who bites his hands and bangs his head several times an hour and needs constant supervision and a helmet. Onset at 2.",
      parts: [
        { label: "Diagnosis", options: ["Stereotypic movement disorder", "Tourette’s disorder", "Autism spectrum disorder", "Obsessive-compulsive disorder", "Developmental coordination disorder"], answer: 0 },
        { label: "Specifiers", options: ["With self-injurious behavior, severe, associated with IDD", "Without self-injurious behavior, mild", "With self-injurious behavior, mild", "With motor tics only"], answer: 0 },
        { label: "Code", options: ["F98.4", "F95.2", "F84.0", "F82", "F42.2"], answer: 0 }
      ],
      line: "**F98.4** Stereotypic movement disorder, with self-injurious behavior, associated with intellectual developmental disorder, severe (plus the IDD code)",
      why: "Continuous monitoring to prevent injury is the severe level; record the associated condition."
    },
    {
      id: "w1-14", tag: "Tics",
      "case": "A 13-year-old with 2 years of blinking and shoulder shrugging, and grunting for the past 4 months. Onset at 11; no drugs; normal examination.",
      parts: [
        { label: "Diagnosis", options: TICS, answer: 0 },
        { label: "Code", options: ["F95.2", "F95.1", "F95.0", "F95.8", "F98.4"], answer: 0 }
      ],
      line: "**F95.2** Tourette’s disorder",
      why: "Multiple motor plus a vocal tic, more than 1 year since the first tic, onset before 18."
    },
    {
      id: "w1-15", tag: "Tics",
      "case": "A 24-year-old who developed facial tics and grunting for the first time at age 23; drug screen negative; no tics in childhood.",
      parts: [
        { label: "Diagnosis", options: TICS, answer: 3 },
        { label: "Code", options: ["F95.8", "F95.2", "F95.9", "F95.1", "F95.0"], answer: 0 }
      ],
      line: "**F95.8** Other specified tic disorder, with onset after age 18 years",
      why: "Onset after 18 excludes the specific tic disorders; record the reason."
    }
  ]);

  SP.add("ch01", "counting", [
    {
      id: "n1-01", tag: "ASD Criterion A",
      "case": "A 6-year-old girl:",
      ask: "Mark the findings that count toward ASD Criterion A. Are all three subdomains met?",
      items: [
        ["Talks at length about horses without noticing others’ responses", true, "Social-emotional reciprocity (A1)."],
        ["Eye contact and gestures poorly coordinated with her speech", true, "Nonverbal communication (A2)."],
        ["Cannot join pretend play and has no friends despite wanting them", true, "Relationships (A3)."],
        ["Lines up her toy horses and screams if one is moved", false, "This is Criterion B (repetitive behavior, sameness)."],
        ["Covers her ears at hand dryers", false, "Sensory reactivity is Criterion B4."]
      ],
      need: 3,
      met: true,
      why: "Criterion A needs all three: reciprocity, nonverbal communication and relationships. Repetitive and sensory features count toward B."
    },
    {
      id: "n1-02", tag: "ASD Criterion B",
      "case": "A 4-year-old boy:",
      ask: "Mark the findings that count toward ASD Criterion B. Are at least two kinds present?",
      items: [
        ["Flaps his hands when excited", true, "Stereotyped motor movement (B1)."],
        ["Refuses any food but plain pasta and gags at textures", true, "Sensory reactivity or food rituals (B4)."],
        ["Prefers playing alone", false, "Relationships and social interest are Criterion A."],
        ["Does not point to show things", false, "Joint attention is nonverbal communication (A2)."],
        ["Likes the same bedtime story most nights but accepts others", false, "Ordinary preference without distress is not insistence on sameness."]
      ],
      need: 2,
      met: true,
      why: "Two B features (stereotypy and sensory) are present; judge preschool repetition by type, frequency and intensity."
    },
    {
      id: "n1-03", tag: "ADHD Criterion A1",
      "case": "A 14-year-old boy, for the past 8 months at home and school:",
      ask: "Mark the inattention symptoms. Are six or more present?",
      items: [
        ["Makes careless mistakes in math", true, "A1a."],
        ["Loses his phone and bus pass every week", true, "A1g."],
        ["Never finishes homework assignments he starts", true, "A1d."],
        ["Is forgetful about chores and appointments", true, "A1i."],
        ["Mind wanders when his teacher speaks to him directly", true, "A1c."],
        ["Talks excessively", false, "Hyperactivity-impulsivity (A2f)."],
        ["Refuses to do chores because “you can’t make me”", false, "Oppositional refusal does not count."]
      ],
      need: 6,
      met: false,
      why: "Only five inattention symptoms; under 17, six are required. (From 17, five would suffice.)"
    },
    {
      id: "n1-04", tag: "ADHD Criterion A2",
      "case": "A 7-year-old girl, for the past year in class and at home:",
      ask: "Mark the hyperactivity-impulsivity symptoms. Are six or more present?",
      items: [
        ["Fidgets and squirms in her seat", true, "A2a."],
        ["Leaves her seat during lessons", true, "A2b."],
        ["Climbs on furniture when it is not allowed", true, "A2c."],
        ["Blurts out answers before questions are finished", true, "A2g."],
        ["Cannot wait her turn in games", true, "A2h."],
        ["Interrupts conversations and grabs others’ toys", true, "A2i."],
        ["Is easily distracted by noises outside", false, "Inattention (A1h)."]
      ],
      need: 6,
      met: true,
      why: "Six hyperactive-impulsive symptoms meet A2; distractibility counts toward inattention."
    },
    {
      id: "n1-05", tag: "ADHD Criteria B and C",
      "case": "A 30-year-old with current ADHD-type symptoms:",
      ask: "Mark the findings that support Criteria B (before 12) and C (two settings). Are both met?",
      items: [
        ["Third-grade report: “cannot sit still, loses work”", true, "Documents symptoms before 12."],
        ["Partner reports the same disorganization at home", true, "A second setting."],
        ["Employer reports missed deadlines and careless errors", true, "Work setting."],
        ["He says he “probably” had problems as a child but cannot recall", false, "Unreliable recall alone is weak evidence."],
        ["Symptoms began after a head injury at 28", false, "This would argue against ADHD."]
      ],
      need: 2,
      met: true,
      why: "School records establish onset before 12, and work plus home establishes two settings."
    },
    {
      id: "n1-06", tag: "SLD Criteria",
      "case": "A 9-year-old with reading problems:",
      ask: "Mark the findings that support specific learning disorder. Are criteria met?",
      items: [
        ["No progress after 7 months of daily phonics tutoring", true, "Persistence despite intervention (A)."],
        ["Word reading standard score of 74", true, "More than 1.5 SD below the mean (B)."],
        ["Difficulties noticed in first grade", true, "Onset in school-age years (C)."],
        ["Normal vision, hearing and IQ; regular school attendance", true, "Exclusions satisfied (D)."],
        ["Parent says he “hates reading”", false, "Avoidance is common but not a criterion."]
      ],
      need: 4,
      met: true,
      why: "All four criteria are supported: persistence, low standardized scores, school-age onset and exclusions."
    },
    {
      id: "n1-07", tag: "SPCD Criterion A",
      "case": "A 10-year-old boy:",
      ask: "Mark the pragmatic deficits. Are all four present?",
      items: [
        ["Does not greet people or share news appropriately", true, "Social purposes (A1)."],
        ["Talks to a toddler the same way as to his teacher", true, "Adapting to listener (A2)."],
        ["Does not take turns or rephrase when misunderstood", true, "Conversational rules (A3)."],
        ["Understands jokes and idioms well", false, "A4 (nonliteral language) is intact."],
        ["Uses short, ungrammatical sentences", false, "Structural language, which Criterion D excludes."]
      ],
      need: 4,
      met: false,
      why: "SPCD needs all four deficits; nonliteral understanding is intact."
    },
    {
      id: "n1-08", tag: "Stuttering Criterion A",
      "case": "A 6-year-old’s speech:",
      ask: "Mark the features of childhood-onset fluency disorder. Is at least one frequent and marked?",
      items: [
        ["“B-b-b-ball” many times a day", true, "Sound and syllable repetitions."],
        ["Gets stuck with no sound, face tense", true, "Silent blocking with tension."],
        ["Says “I want, I want juice” when excited", false, "Whole-phrase repetition is normal dysfluency."],
        ["Uses “um” while thinking", false, "Interjections are normal dysfluency."],
        ["Swaps words he expects to stutter on", true, "Circumlocution."]
      ],
      need: 1,
      met: true,
      why: "Sound repetitions, blocks and circumlocutions count; phrase repetitions and fillers are normal."
    },
    {
      id: "n1-09", tag: "Tourette’s criteria",
      "case": "A 12-year-old with tics:",
      ask: "Mark the findings that satisfy a Tourette’s criterion. Are the criteria met?",
      items: [
        ["Eye blinking and head jerks since age 9", true, "Multiple motor tics (A); more than 1 year (B); onset before 18 (C)."],
        ["Throat clearing for the past 3 months", true, "One vocal tic at some time (A)."],
        ["Tic-free for 2 months last summer", false, "Gaps do not reset the 1-year count; this neither adds nor subtracts."],
        ["No drug use; normal neurological examination", true, "No substance or medical cause (D)."],
        ["Tics worse during exams", false, "Typical, but not a criterion."]
      ],
      need: 3,
      met: true,
      why: "Motor plus vocal tics, more than 1 year since the first tic, onset before 18, no other cause: Tourette’s disorder."
    },
    {
      id: "n1-10", tag: "IDD Criterion B",
      "case": "A 16-year-old with an IQ of 68:",
      ask: "Mark the findings that show adaptive deficits needing ongoing support. Is Criterion B met?",
      items: [
        ["Cannot manage money or shop without help", true, "Practical domain."],
        ["Repeatedly persuaded by peers to steal", true, "Social judgment (gullibility), social domain."],
        ["Needs teacher support for all academic work", true, "Conceptual domain."],
        ["Dresses and bathes independently", false, "Preserved skill; does not count against B."],
        ["Low IQ score", false, "That is Criterion A, not B."]
      ],
      need: 1,
      met: true,
      why: "Criterion B needs at least one adaptive domain impaired enough to need ongoing support; all three are here."
    }
  ]);
})();
