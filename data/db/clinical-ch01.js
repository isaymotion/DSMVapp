/* Chapter 1 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var INFORMANTS = "Collect history from **at least two informants** (parent and teacher, or partner and old school reports) and review records; observation in one office visit can miss or exaggerate symptoms.";
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "idd",
      ask: [
        ["A Intellect", "“How did they do at school? Did they need special classes or extra help? Has anyone done an IQ test?”", "Ask for the actual report."],
        ["B Conceptual", "“Can they read a bus timetable, handle money, tell the time, follow written instructions?”"],
        ["B Social", "“Do they understand when people are joking or trying to trick them? Has anyone taken advantage of them?”", "Gullibility and exploitation."],
        ["B Practical", "“Can they wash, dress, cook, shop and travel alone? What help do they need each day?”", "Ongoing support is the threshold."],
        ["C Onset", "“When did you first notice they were slower than other children: walking, talking, learning?”"],
        ["Cause", "“Were there problems in pregnancy or birth? Seizures? Anyone in the family with similar difficulties?”", "Three-generation pedigree."],
        ["Comorbidity", "“Any change in sleep, appetite, mood or behavior lately? Any pain they might not be able to tell you about?”", "Atypical depression, pain, medical illness."]
      ],
      tx: {
        asOf: "October 2026",
        first: "There is no drug for IDD itself: provide **supports**, special education and vocational training, look for a **cause** (chromosomal microarray, fragile X, metabolic testing as indicated), and treat **co-occurring** psychiatric and medical problems.",
        points: [
          "Treat comorbid depression, anxiety, ADHD and epilepsy with the usual treatments, starting low and going slow.",
          "For new aggression or self-injury, look first for **pain**, constipation, dental disease, reflux, sleep problems and environmental triggers; use a functional behavioral assessment.",
          "Avoid antipsychotics purely to sedate challenging behavior; if used (e.g., [[stahl:drugs/risperidone|risperidone]]), set targets and review regularly for weight and metabolic effects.",
          "Assess **capacity** decision by decision and support decision-making; screen for **exploitation** and abuse."
        ],
        stahl: [["Risperidone", "drugs/risperidone"]]
      }
    },
    {
      id: "language-disorder",
      ask: [
        ["A Vocabulary", "“How many words does your child use? Do they struggle to find words?”"],
        ["A Sentences", "“Are their sentences shorter or less correct than other children’s?”", "Past tense errors are typical."],
        ["A Discourse", "“Can they tell you what happened at school in order?”"],
        ["A Comprehension", "“Do they follow two- or three-step instructions without gestures?”", "Comprehension is often overestimated."],
        ["D Hearing", "“Has their hearing been tested? Ear infections?”", "Always exclude hearing loss."],
        ["Regression", "“Has your child ever lost words or understanding they once had?”", "Loss needs an EEG."],
        ["Bilingual", "“Which languages are spoken at home? How do they do in each?”", "A disorder affects both."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Speech-language therapy**, with parent-implemented language strategies for young children and classroom support; treat co-occurring reading problems early.",
        points: ["Receptive deficits need closer follow-up: they predict reading-comprehension problems.", "Screen for ADHD, SLD and social anxiety in older children.", "No medication treats language disorder."],
        stahl: []
      }
    },
    {
      id: "speech-sound-disorder",
      ask: [
        ["A Intelligibility", "“How much of your child’s speech do strangers understand?”", "About 50% at 2, almost all by 3."],
        ["Sounds", "“Which sounds are hard: r, s, l, th?”", "A single late-eight sound can be normal to 8."],
        ["D Structure", "“Any cleft palate, feeding or swallowing problems, drooling?”"],
        ["Motor", "“Trouble chewing, blowing the nose, or with other movements?”", "Childhood apraxia of speech or DCD."],
        ["Impact", "“Is your child teased or avoiding talking?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Speech-language therapy** (articulation or phonological approaches; motor-based approaches for childhood apraxia of speech).",
        points: ["Prognosis is good unless a language disorder coexists.", "Check hearing and examine the palate and oral-motor function."],
        stahl: []
      }
    },
    {
      id: "stuttering",
      ask: [
        ["A Pattern", "“When you get stuck, do you repeat sounds, stretch them, or get blocked with no sound?”"],
        ["A Avoidance", "“Do you swap words or avoid situations like phone calls?”", "Circumlocution."],
        ["B Impact", "“How do you feel before speaking in class or at work?”", "Speech anxiety."],
        ["C Onset", "“When did it start?”", "Childhood onset vs adult onset (F98.5)."],
        ["Fluent contexts", "“Is it easier when singing, reading in unison or talking to a pet?”"],
        ["Comorbidity", "“Do you fear social situations even apart from speaking?”", "Social anxiety disorder."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Speech-language therapy**: for preschoolers, operant parent-delivered programs such as **Lidcombe**; for older children and adults, fluency shaping and stuttering modification, plus CBT for speech anxiety.",
        points: ["Most preschool stuttering resolves, but refer if it lasts more than 6–12 months, worsens, or causes distress.", "No medication is approved for stuttering.", "Screen adolescents for social anxiety disorder."],
        stahl: []
      }
    },
    {
      id: "spcd",
      ask: [
        ["A1 Social purpose", "“Does your child greet people and share news in a usual way?”"],
        ["A2 Adapting", "“Do they talk differently to a toddler, a friend and a teacher?”"],
        ["A3 Conversation", "“Do they take turns and rephrase when someone doesn’t understand?”"],
        ["A4 Nonliteral", "“Do they understand jokes, sarcasm and sayings?”"],
        ["Rule out ASD", "“When they were 2 to 5, did they line things up, insist on routines, have unusual interests or react strongly to sounds or textures?”", "Any history means ASD."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Speech-language therapy** focused on pragmatics and **social skills groups**; teach explicit conversational rules.",
        points: ["Treat co-occurring language disorder and ADHD.", "Reassess for ASD if repetitive behaviors emerge or history becomes clearer."],
        stahl: []
      }
    },
    {
      id: "asd",
      ask: [
        ["A1 Reciprocity", "“Does your child share things they enjoy with you, like showing you a toy? Do they have back-and-forth conversations?”"],
        ["A2 Nonverbal", "“Do they point to show you things, look where you point, and use gestures and facial expressions?”", "Joint attention."],
        ["A3 Relationships", "“Do they play pretend with other children? Do they have friends?”"],
        ["B1 Repetitive", "“Any hand flapping, rocking, lining things up, repeating phrases from TV?”"],
        ["B2 Sameness", "“How do they react to a change in routine or route?”"],
        ["B3 Interests", "“Is there a topic or object they are intensely focused on?”"],
        ["B4 Sensory", "“Any strong reactions to noise, textures, food, or not noticing pain?”"],
        ["History", "“What were they like at 2 to 5 years old? Did they lose any words or skills?”", "Criteria can be met by history."],
        ["Adults", "“Do you have to work out social rules consciously? How do you feel after socializing?”", "Masking and its toll."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Early intensive behavioral and developmental interventions** (e.g., naturalistic developmental behavioral interventions, ABA-based programs), speech-language and occupational therapy, and educational supports; no medication treats the core features.",
        points: [
          "**Irritability** and aggression: FDA-approved [[stahl:drugs/risperidone|risperidone]] (5–16 years) and [[stahl:drugs/aripiprazole|aripiprazole]] (6–17 years); monitor weight, glucose, lipids and prolactin.",
          "Comorbid **ADHD**: stimulants work but with smaller effects and more side effects; alpha-2 agonists ([[stahl:drugs/guanfacine|guanfacine]]) and [[stahl:drugs/atomoxetine|atomoxetine]] are alternatives.",
          "**Sleep**: behavioral measures first; melatonin is widely used.",
          "**Catatonia**: benzodiazepines (lorazepam challenge) and ECT; avoid escalating antipsychotics.",
          "Genetic testing (chromosomal microarray; fragile X in boys and in girls with suggestive features) is recommended; look for epilepsy and constipation.",
          "Counsel families about **drowning** risk and wandering; leucovorin (2025 FDA relabeling) is for **cerebral folate deficiency**, not autism in general."
        ],
        stahl: [["Risperidone", "drugs/risperidone"], ["Aripiprazole", "drugs/aripiprazole"], ["Guanfacine", "drugs/guanfacine"]]
      }
    },
    {
      id: "adhd",
      ask: [
        ["A1 Inattention", "“Do you make careless mistakes, lose things, forget appointments, or drift off when someone is talking to you?”"],
        ["A2 Hyperactivity", "“Do you fidget, feel restless, talk a lot, or find it hard to sit through meetings?”"],
        ["A2 Impulsivity", "“Do you interrupt, blurt things out, or find waiting in line unbearable?”"],
        ["B Before 12", "“What were you like in primary school? Do you have old report cards?”", "Adult recall is unreliable."],
        ["C Two settings", "“Is it the same at home, at work or school, and with friends?”", INFORMANTS],
        ["D Impairment", "“What has it cost you: grades, jobs, relationships, driving?”"],
        ["E Rule-outs", "“Any periods of feeling high or very low for days? Trauma? Worry? Drugs, alcohol, caffeine? Snoring?”", "Bipolar, PTSD, anxiety, substances, sleep apnea."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Ages 4–5: **parent training in behavior management** first, then [[stahl:drugs/methylphenidate|methylphenidate]] if needed. Ages 6 and up: **FDA-approved medication** (stimulants first line) plus behavioral and school supports (AAP 2019). Adults: medication plus psychoeducation and CBT-based skills; the first US adult guideline (APSARD) is pending.",
        points: [
          "Stimulants: [[stahl:drugs/methylphenidate|methylphenidate]], [[stahl:drugs/dexmethylphenidate|dexmethylphenidate]], [[stahl:drugs/amphetamine|amphetamine]], [[stahl:drugs/lisdexamfetamine|lisdexamfetamine]]. Check cardiac history, blood pressure, heart rate, growth and sleep.",
          "Nonstimulants: [[stahl:drugs/atomoxetine|atomoxetine]] and [[stahl:drugs/viloxazine|viloxazine]] (norepinephrine reuptake inhibitors), and extended-release [[stahl:drugs/guanfacine|guanfacine]] or [[stahl:drugs/clonidine|clonidine]] (alpha-2 agonists), useful with tics, substance risk or poor stimulant tolerance.",
          "FDA 2023: all stimulant boxed warnings cover **misuse, abuse, addiction, overdose and death**; assess risk, counsel on safe storage and not sharing.",
          "FDA 2025: **extended-release stimulants** under age 6 carry higher exposure and risk of **weight loss**; monitor growth.",
          "Comorbid substance use: prefer long-acting or prodrug formulations or nonstimulants; treat both disorders.",
          "Stimulants do not usually worsen tics substantially; alpha-2 agonists help both."
        ],
        stahl: [["Stimulant principles", "c/ch11/guide/s11-stim-principles"], ["Methylphenidate", "drugs/methylphenidate"], ["Amphetamine", "drugs/amphetamine"], ["Lisdexamfetamine", "drugs/lisdexamfetamine"], ["Atomoxetine", "drugs/atomoxetine"], ["Viloxazine", "drugs/viloxazine"], ["Guanfacine", "drugs/guanfacine"], ["Clonidine", "drugs/clonidine"], ["Alpha-2 agonists", "c/ch11/guide/s11-alpha2"]]
      }
    },
    {
      id: "sld",
      ask: [
        ["A Reading", "“Is reading slow or full of guesses? Do they understand what they read?”"],
        ["A Writing", "“How is spelling, grammar and organizing written work?”"],
        ["A Math", "“Do they count on fingers for simple sums, or get lost in calculations or word problems?”"],
        ["A Persistence", "“What extra help have they had, for how long, and did they catch up?”", "6 months despite intervention."],
        ["B Testing", "“Have they had individual achievement tests? What were the standard scores?”", "≤78 for greatest certainty."],
        ["D Exclusions", "“Any vision or hearing problems, missed school, or a different language at home?”"],
        ["Emotional", "“How does your child feel about school? Any worries, low mood or thoughts of self-harm?”", "Suicide risk is raised."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Evidence-based, explicit instruction** in the impaired skill (systematic phonics and fluency work for reading; explicit number-sense and fact-fluency teaching for math) plus **accommodations** (extra time, text-to-speech, calculators where appropriate).",
        points: ["Treat co-occurring ADHD: medication improves performance but does not teach the skill.", "Address anxiety, low self-esteem and school avoidance.", "Request formal educational support and written accommodations."],
        stahl: []
      }
    },
    {
      id: "dcd",
      ask: [
        ["A Skills", "“Can your child button clothes, use a knife and fork, catch a ball, ride a bike?”"],
        ["B Impact", "“Does it slow schoolwork or stop them joining sports?”"],
        ["Handwriting", "“Is their handwriting slow or hard to read even when they try hard?”"],
        ["D Exclusions", "“Any weakness, stiffness, eyesight problems or loss of skills?”", "Neurological and visual examination."],
        ["Comorbidity", "“Do they have trouble paying attention or sitting still?”", "About half have ADHD."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Task-oriented** occupational or physical therapy (e.g., CO-OP, neuromotor task training) aimed at the activities the child needs, plus classroom accommodations (keyboard, extra time).",
        points: ["Encourage physical activity to prevent obesity and low fitness.", "Treat co-occurring ADHD; stimulants may modestly improve motor performance."],
        stahl: []
      }
    },
    {
      id: "stereotypic-movement",
      ask: [
        ["A Movement", "“What does the movement look like, and is it the same each time?”", "Ask for a video."],
        ["B Injury", "“Has it caused bruises, cuts or eye injuries? What do you do to protect them?”", "Sets the self-injury specifier and severity."],
        ["C Onset", "“How old were they when it started?”", "Usually before 3."],
        ["Function", "“When does it happen: bored, excited, stressed, tired? Does distraction stop it?”"],
        ["Pain", "“Any signs of earache, toothache or reflux?”", "Pain can drive stereotypies."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Behavioral treatment** (functional assessment, habit reversal and differential reinforcement), environmental enrichment and protective measures for self-injury; treat any painful medical cause.",
        points: ["Medication is reserved for severe self-injury, usually alongside behavioral treatment; risperidone or aripiprazole have some evidence in IDD and autism.", "Benign stereotypies in typically developing children often need only reassurance."],
        stahl: [["Risperidone", "drugs/risperidone"], ["Aripiprazole", "drugs/aripiprazole"]]
      }
    },
    {
      id: "tourette",
      ask: [
        ["A Motor", "“What movements happen that you don’t intend: blinking, grimacing, shrugging, jerking?”"],
        ["A Vocal", "“Any sniffing, throat clearing, grunting, or words?”", "Allergy work-up often precedes diagnosis."],
        ["B Duration", "“When was the very first tic?”", "Count from the first tic through gaps."],
        ["Urge", "“Do you feel an itch or pressure before the tic? Can you hold it in?”", "Premonitory urge."],
        ["D Causes", "“Any stimulant or cocaine use, recent infections, family history of Huntington’s disease?”"],
        ["Comorbidity", "“Problems with attention, checking, symmetry, anxiety or low mood? Any thoughts of suicide?”", "ADHD and OCD often impair more than tics."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Education** for the family and school and watchful waiting for mild tics; **CBIT** (comprehensive behavioral intervention for tics) is first-line when treatment is needed (AAN 2019).",
        points: [
          "Medication when tics cause impairment: alpha-2 agonists ([[stahl:drugs/guanfacine|guanfacine]], [[stahl:drugs/clonidine|clonidine]]), especially with ADHD.",
          "FDA-approved for Tourette’s: [[stahl:drugs/haloperidol|haloperidol]], [[stahl:drugs/pimozide|pimozide]] (QT monitoring) and [[stahl:drugs/aripiprazole|aripiprazole]]; VMAT2 inhibitors are used off label.",
          "**Ecopipam** (D1 antagonist) is under FDA priority review for pediatric Tourette syndrome, with action expected in early 2027.",
          "Treat comorbid ADHD and OCD; these often matter more than the tics."
        ],
        stahl: [["Guanfacine", "drugs/guanfacine"], ["Clonidine", "drugs/clonidine"], ["Haloperidol", "drugs/haloperidol"], ["Pimozide", "drugs/pimozide"], ["Aripiprazole", "drugs/aripiprazole"]]
      }
    },
    {
      id: "persistent-tic",
      ask: [
        ["A Type", "“Have you ever had sounds as tics, or only movements (or only sounds)?”", "Never both."],
        ["B Duration", "“When was the first tic?”", "More than 1 year."],
        ["E Hierarchy", "“Have you ever had both movement and sound tics at the same period of your life?”", "If so, Tourette’s."]
      ],
      tx: {
        asOf: "October 2026",
        first: "As for Tourette’s: **education**, **CBIT** when needed, alpha-2 agonists or antipsychotics for impairing tics.",
        points: ["Screen for ADHD, OCD and anxiety.", "About 1 in 10 youth have suicidal thoughts or behavior: ask."],
        stahl: [["Guanfacine", "drugs/guanfacine"]]
      }
    },
    {
      id: "provisional-tic",
      ask: [
        ["B Duration", "“When did the tics start?”", "Under 1 year."],
        ["Course", "“Have they changed or come and gone?”"],
        ["Causes", "“Any new medicines, stimulants or recent illness?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Reassurance and education**: most childhood tics are transient; avoid drawing attention to them.",
        points: ["Review after the 1-year mark to reclassify if tics persist."],
        stahl: []
      }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "inattention", title: "Inattention, restlessness or impulsivity",
      intro: "Check that symptoms are **persistent** (not episodic), began **before 12**, appear in **two or more settings**, and reach **six** symptoms (five from 17). Then rule out sleep problems, trauma, anxiety, mood episodes, substances, medications, learning problems and hearing or vision loss.",
      ask: ["Since when? What was primary school like?", "Is it the same at home, school or work, and with friends?", "Any periods of days with high or low mood?", "Trauma, stress at home, bullying?", "Snoring, poor sleep?", "Alcohol, cannabis, stimulants, caffeine, new medicines?", "Struggles only with reading, writing or math?"],
      mustNotMiss: ["**Absence seizures** (brief staring spells).", "**Sleep-disordered breathing**.", "**Bipolar disorder** (episodic, grandiose, little need for sleep).", "**PTSD** in young children; **abuse or neglect**.", "**Substance** use or medication effects (akathisia, bronchodilators, thyroid)."],
      helpers: ["neurodevelopmental"],
      items: [
        { ch: "ch01", dx: "adhd", when: "Six (or five) symptoms, before 12, two settings, persistent." },
        { ch: "ch01", dx: "other-specified-adhd", when: "Impairing but below threshold, with the reason recorded." },
        { ch: "ch01", dx: "sld", when: "Inattention only when reading, writing or math is required." },
        { ch: "ch01", dx: "idd", when: "Inattention in a class beyond the child’s ability." },
        { ch: "ch01", dx: "asd", when: "Attention overfocused or disengaged, with social and repetitive features." },
        { ch: "ch04", dx: "dmdd", when: "Severe chronic irritability with outbursts; often comorbid." },
        { ch: "ch07", dx: "ptsd", when: "Restlessness and poor concentration after trauma, especially under 6." },
        { ch: "ch17", dx: "major-ncd", when: "A decline from previous attention, usually with adult onset." }
      ]
    },
    {
      id: "tics", title: "Tics, twitches or repetitive movements",
      intro: "Decide first whether it is a **tic** (sudden, brief, nonrhythmic, with an urge), a **stereotypy** (early, rhythmic, fixed, enjoyed) or something else (compulsion, body-focused behavior, chorea, dystonia, myoclonus, functional tics). For tics, the type (motor, vocal), **time since the first tic** (1 year) and **onset before 18** decide the diagnosis.",
      ask: ["What does it look like? Is it the same each time?", "Any urge or feeling beforehand? Can it be held in?", "When did the very first one start?", "Any sounds, sniffing or throat clearing?", "Any drugs (cocaine, stimulants) or new medicines?", "Any obsessions, checking or need for symmetry?", "Does it cause injury?"],
      mustNotMiss: ["**Seizures** (staring, myoclonic jerks).", "**Sydenham’s chorea** after streptococcal infection.", "**Tardive dyskinesia** or acute dystonia on antipsychotics.", "**Wilson’s** or **Huntington’s disease** with new movements in a young person.", "**Self-injury** with eye poking or head banging."],
      helpers: ["tics"],
      items: [
        { ch: "ch01", dx: "tourette", when: "Multiple motor and at least one vocal tic, more than 1 year, onset before 18." },
        { ch: "ch01", dx: "persistent-tic", when: "Motor or vocal tics only, more than 1 year." },
        { ch: "ch01", dx: "provisional-tic", when: "Any tics for less than 1 year." },
        { ch: "ch01", dx: "other-specified-tic", when: "Onset after 18 or a known cause." },
        { ch: "ch01", dx: "stereotypic-movement", when: "Rhythmic, fixed movements from before age 3, no urge." },
        { ch: "ch01", dx: "asd", when: "Stereotypies with social communication deficits." },
        { ch: "ch06", dx: "ocd", when: "Repetitive acts driven by obsessions; often coexists with tics." },
        { ch: "ch06", dx: "trichotillomania", when: "Goal-directed hair pulling." }
      ]
    },
    {
      id: "delayed-speech", title: "A child who is late to talk or hard to understand",
      intro: "Check **hearing** first, then decide whether the problem is **speech** (sounds), **language** (words, grammar, discourse), **fluency** or **social use**, or part of a **global delay** or **autism**. Any **loss** of words needs an EEG.",
      ask: ["How many words and what kind of sentences?", "Does the child understand instructions without gestures?", "Do strangers understand them?", "Do they point, show and answer to their name?", "Any loss of words or skills?", "Which languages are spoken at home?", "Delays in walking, play or self-care?"],
      mustNotMiss: ["**Hearing loss**.", "**Autism** (no pointing, no response to name, repetitive behavior).", "**Language regression** or Landau-Kleffner syndrome.", "**Global developmental delay** or a genetic syndrome.", "**Neglect** or deprivation."],
      helpers: ["neurodevelopmental"],
      items: [
        { ch: "ch01", dx: "language-disorder", when: "Vocabulary, grammar and discourse deficits with normal hearing." },
        { ch: "ch01", dx: "speech-sound-disorder", when: "Sound errors that reduce intelligibility." },
        { ch: "ch01", dx: "stuttering", when: "Repetitions, prolongations and blocks." },
        { ch: "ch01", dx: "spcd", when: "Social use of language impaired; no repetitive behaviors." },
        { ch: "ch01", dx: "asd", when: "Delayed language with absent joint attention and repetitive behaviors." },
        { ch: "ch01", dx: "gdd", when: "Delays across several domains under age 5." },
        { ch: "ch05", dx: "selective-mutism", when: "Normal speech at home, silent in some settings." }
      ]
    },
    {
      id: "social-differences", title: "Social difficulties, narrow interests or rigid routines",
      intro: "Ask about **all three** social communication areas and about **restricted, repetitive** behavior **now and in early childhood**. If repetitive features have ever been present, think **autism**; if never, social (pragmatic) communication disorder or another cause.",
      ask: ["What was the child like at 2 to 5 years?", "Back-and-forth conversation, sharing interests, eye contact and gestures?", "Friendships: wanted, made, kept?", "Routines, rituals, distress at change?", "Intense or unusual interests?", "Reactions to noise, textures, food, pain?", "In adults: masking and exhaustion after socializing?"],
      mustNotMiss: ["**Catatonia** in an autistic adolescent (mutism, posturing, food refusal).", "**Psychosis** onset after normal development (true hallucinations, delusions).", "**Depression or suicidal thoughts** (raised in autism).", "**Hearing loss** in young children."],
      helpers: ["neurodevelopmental"],
      items: [
        { ch: "ch01", dx: "asd", when: "All three social deficits plus two repetitive features, now or by history." },
        { ch: "ch01", dx: "spcd", when: "Pragmatic deficits only, never repetitive behaviors." },
        { ch: "ch01", dx: "adhd", when: "Intrusive, impulsive social behavior without restricted interests." },
        { ch: "ch05", dx: "social-anxiety", when: "Skills present but blocked by fear of scrutiny." },
        { ch: "ch18", dx: "schizotypal-pd", when: "Adult oddness and ideas of reference without the early developmental course." },
        { ch: "ch18", dx: "schizoid-pd", when: "Detachment without restricted, repetitive behavior from childhood." }
      ]
    },
    {
      id: "learning-problems", title: "Struggling at school with reading, writing or math",
      intro: "Separate **learning** a skill from **performing** it. Check intellect, vision and hearing, school attendance, the language of instruction and the response to **at least 6 months** of targeted help, then confirm with **individual standardized achievement tests**.",
      ask: ["Which skills: reading, spelling, writing, math?", "What extra help has been given, and for how long?", "Any achievement or IQ test results?", "Attention problems outside schoolwork?", "Vision, hearing, attendance, home language?", "How does the child feel about school?"],
      mustNotMiss: ["**Vision or hearing** loss.", "**Intellectual disability**.", "**Absence seizures**.", "**Bullying**, depression or suicidal thoughts.", "Neurological decline (loss of skills)."],
      helpers: ["neurodevelopmental"],
      items: [
        { ch: "ch01", dx: "sld", when: "Persistent, specific academic deficits despite help, with normal intellect." },
        { ch: "ch01", dx: "adhd", when: "Poor performance from inattention across tasks." },
        { ch: "ch01", dx: "idd", when: "Global learning difficulties with adaptive deficits." },
        { ch: "ch01", dx: "language-disorder", when: "Oral language deficits underlying reading comprehension problems." },
        { ch: "ch01", dx: "dcd", when: "Slow, illegible handwriting from motor problems." },
        { ch: "ch01", dx: "stuttering", when: "Slow oral reading from dysfluency, not reading disability." }
      ]
    },
    {
      id: "irritable-child",
      helpers: ["neurodevelopmental"],
      items: [
        { ch: "ch01", dx: "adhd", when: "Impulsive outbursts with lifelong inattention and hyperactivity." },
        { ch: "ch01", dx: "asd", when: "Outbursts when routines change or senses are overloaded." }
      ]
    },
    {
      id: "school-refusal",
      items: [
        { ch: "ch01", dx: "sld", when: "Avoids school because work exposes learning difficulties." },
        { ch: "ch01", dx: "asd", when: "School is overwhelming socially or sensorially." }
      ]
    },
    {
      id: "rule-breaking",
      items: [
        { ch: "ch01", dx: "adhd", when: "Impulsive rule-breaking with inattention and hyperactivity since early childhood." }
      ]
    },
    {
      id: "odd",
      items: [
        { ch: "ch01", dx: "asd", when: "Lifelong social oddness with restricted interests from early childhood." }
      ]
    },
    {
      id: "neglected-child",
      items: [
        { ch: "ch01", dx: "asd", when: "Social deficits with restricted interests and repetitive behavior; attachment present." },
        { ch: "ch01", dx: "gdd", when: "Delays across several domains under age 5; deprivation can contribute." }
      ]
    }
  ]);
})();
